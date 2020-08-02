/**
 * @fileoverview gRPC-Web generated client stub for admin.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.admin = {};
proto.admin.v1 = require('./admin_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admin.v1.AdminDataLoaderClient =
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
proto.admin.v1.AdminDataLoaderPromiseClient =
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
 *   !proto.admin.v1.CreateMenuRequest,
 *   !proto.admin.v1.CreateMenuResponse>}
 */
const methodDescriptor_AdminDataLoader_CreateMenu = new grpc.web.MethodDescriptor(
  '/admin.v1.AdminDataLoader/CreateMenu',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.CreateMenuRequest,
  proto.admin.v1.CreateMenuResponse,
  /**
   * @param {!proto.admin.v1.CreateMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.CreateMenuResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.v1.CreateMenuRequest,
 *   !proto.admin.v1.CreateMenuResponse>}
 */
const methodInfo_AdminDataLoader_CreateMenu = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.v1.CreateMenuResponse,
  /**
   * @param {!proto.admin.v1.CreateMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.CreateMenuResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.CreateMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.v1.CreateMenuResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.CreateMenuResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.AdminDataLoaderClient.prototype.createMenu =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/CreateMenu',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_CreateMenu,
      callback);
};


/**
 * @param {!proto.admin.v1.CreateMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.CreateMenuResponse>}
 *     A native promise that resolves to the response
 */
proto.admin.v1.AdminDataLoaderPromiseClient.prototype.createMenu =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/CreateMenu',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_CreateMenu);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.v1.UpdateMenuRequest,
 *   !proto.admin.v1.UpdateMenuResponse>}
 */
const methodDescriptor_AdminDataLoader_UpdateMenu = new grpc.web.MethodDescriptor(
  '/admin.v1.AdminDataLoader/UpdateMenu',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.UpdateMenuRequest,
  proto.admin.v1.UpdateMenuResponse,
  /**
   * @param {!proto.admin.v1.UpdateMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.UpdateMenuResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.v1.UpdateMenuRequest,
 *   !proto.admin.v1.UpdateMenuResponse>}
 */
const methodInfo_AdminDataLoader_UpdateMenu = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.v1.UpdateMenuResponse,
  /**
   * @param {!proto.admin.v1.UpdateMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.UpdateMenuResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.UpdateMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.v1.UpdateMenuResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.UpdateMenuResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.AdminDataLoaderClient.prototype.updateMenu =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/UpdateMenu',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_UpdateMenu,
      callback);
};


/**
 * @param {!proto.admin.v1.UpdateMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.UpdateMenuResponse>}
 *     A native promise that resolves to the response
 */
proto.admin.v1.AdminDataLoaderPromiseClient.prototype.updateMenu =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/UpdateMenu',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_UpdateMenu);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.v1.DeleteMenuRequest,
 *   !proto.admin.v1.DeleteMenuResponse>}
 */
const methodDescriptor_AdminDataLoader_DeleteMenu = new grpc.web.MethodDescriptor(
  '/admin.v1.AdminDataLoader/DeleteMenu',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.DeleteMenuRequest,
  proto.admin.v1.DeleteMenuResponse,
  /**
   * @param {!proto.admin.v1.DeleteMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.DeleteMenuResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.v1.DeleteMenuRequest,
 *   !proto.admin.v1.DeleteMenuResponse>}
 */
const methodInfo_AdminDataLoader_DeleteMenu = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.v1.DeleteMenuResponse,
  /**
   * @param {!proto.admin.v1.DeleteMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.DeleteMenuResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.DeleteMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.v1.DeleteMenuResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.DeleteMenuResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.AdminDataLoaderClient.prototype.deleteMenu =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/DeleteMenu',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_DeleteMenu,
      callback);
};


/**
 * @param {!proto.admin.v1.DeleteMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.DeleteMenuResponse>}
 *     A native promise that resolves to the response
 */
proto.admin.v1.AdminDataLoaderPromiseClient.prototype.deleteMenu =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/DeleteMenu',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_DeleteMenu);
};


module.exports = proto.admin.v1;

