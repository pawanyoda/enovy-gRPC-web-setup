/**
 * @fileoverview gRPC-Web generated client stub for healthcheck
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.healthcheck = require('./healthcheck_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.healthcheck.GreeterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.healthcheck.GreeterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.healthcheck.HealthcheckRequest,
 *   !proto.healthcheck.HealthcheckReply>}
 */
const methodDescriptor_Greeter_HealthCheck = new grpc.web.MethodDescriptor(
  '/healthcheck.Greeter/HealthCheck',
  grpc.web.MethodType.UNARY,
  proto.healthcheck.HealthcheckRequest,
  proto.healthcheck.HealthcheckReply,
  /**
   * @param {!proto.healthcheck.HealthcheckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.healthcheck.HealthcheckReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.healthcheck.HealthcheckRequest,
 *   !proto.healthcheck.HealthcheckReply>}
 */
const methodInfo_Greeter_HealthCheck = new grpc.web.AbstractClientBase.MethodInfo(
  proto.healthcheck.HealthcheckReply,
  /**
   * @param {!proto.healthcheck.HealthcheckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.healthcheck.HealthcheckReply.deserializeBinary
);


/**
 * @param {!proto.healthcheck.HealthcheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.healthcheck.HealthcheckReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.healthcheck.HealthcheckReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.healthcheck.GreeterClient.prototype.healthCheck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/healthcheck.Greeter/HealthCheck',
      request,
      metadata || {},
      methodDescriptor_Greeter_HealthCheck,
      callback);
};


/**
 * @param {!proto.healthcheck.HealthcheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.healthcheck.HealthcheckReply>}
 *     A native promise that resolves to the response
 */
proto.healthcheck.GreeterPromiseClient.prototype.healthCheck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/healthcheck.Greeter/HealthCheck',
      request,
      metadata || {},
      methodDescriptor_Greeter_HealthCheck);
};


module.exports = proto.healthcheck;

