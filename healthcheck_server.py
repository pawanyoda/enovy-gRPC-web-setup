"""The Python implementation of the GRPC healthcheck.Greeter server.
Borrowed from https://github.com/grpc/grpc/blob/v1.3.1/examples/python/healthcheck/greeter_server.py
"""

from concurrent import futures
import time

import grpc
import logging
from grpc_reflection.v1alpha import reflection
import healthcheck_pb2
import healthcheck_pb2_grpc


class Greeter(healthcheck_pb2_grpc.GreeterServicer):

    def HealthCheck(self, request, context):
        print("Got replied from user: %s" % request.name)
        return healthcheck_pb2.HealthcheckReply(message='Server Healthcheck is Ok, %s!' % request.name)


def serve():

    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    healthcheck_pb2_grpc.add_GreeterServicer_to_server(Greeter(), server)
    SERVICE_NAMES = (
        healthcheck_pb2.DESCRIPTOR.services_by_name['Greeter'].full_name,
        reflection.SERVICE_NAME,
    )
    reflection.enable_server_reflection(SERVICE_NAMES, server)
    # listen on port 50051
    print('Server listening at [::]:50052')
    server.add_insecure_port('[::]:50052')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()
