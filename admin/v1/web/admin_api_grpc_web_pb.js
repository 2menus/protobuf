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


var menu_v1_menu_pb = require('./menu/v1/menu_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
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
proto.admin.v1.AdminClient =
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
proto.admin.v1.AdminPromiseClient =
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
 *   !proto.menu.v1.Menu>}
 */
const methodDescriptor_Admin_CreateMenu = new grpc.web.MethodDescriptor(
  '/admin.v1.Admin/CreateMenu',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.CreateMenuRequest,
  menu_v1_menu_pb.Menu,
  /**
   * @param {!proto.admin.v1.CreateMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  menu_v1_menu_pb.Menu.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.v1.CreateMenuRequest,
 *   !proto.menu.v1.Menu>}
 */
const methodInfo_Admin_CreateMenu = new grpc.web.AbstractClientBase.MethodInfo(
  menu_v1_menu_pb.Menu,
  /**
   * @param {!proto.admin.v1.CreateMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  menu_v1_menu_pb.Menu.deserializeBinary
);


/**
 * @param {!proto.admin.v1.CreateMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v1.Menu)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v1.Menu>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.AdminClient.prototype.createMenu =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.Admin/CreateMenu',
      request,
      metadata || {},
      methodDescriptor_Admin_CreateMenu,
      callback);
};


/**
 * @param {!proto.admin.v1.CreateMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v1.Menu>}
 *     A native promise that resolves to the response
 */
proto.admin.v1.AdminPromiseClient.prototype.createMenu =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.Admin/CreateMenu',
      request,
      metadata || {},
      methodDescriptor_Admin_CreateMenu);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.v1.UpdateMenuRequest,
 *   !proto.menu.v1.Menu>}
 */
const methodDescriptor_Admin_UpdateMenu = new grpc.web.MethodDescriptor(
  '/admin.v1.Admin/UpdateMenu',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.UpdateMenuRequest,
  menu_v1_menu_pb.Menu,
  /**
   * @param {!proto.admin.v1.UpdateMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  menu_v1_menu_pb.Menu.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.v1.UpdateMenuRequest,
 *   !proto.menu.v1.Menu>}
 */
const methodInfo_Admin_UpdateMenu = new grpc.web.AbstractClientBase.MethodInfo(
  menu_v1_menu_pb.Menu,
  /**
   * @param {!proto.admin.v1.UpdateMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  menu_v1_menu_pb.Menu.deserializeBinary
);


/**
 * @param {!proto.admin.v1.UpdateMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v1.Menu)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v1.Menu>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.AdminClient.prototype.updateMenu =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.Admin/UpdateMenu',
      request,
      metadata || {},
      methodDescriptor_Admin_UpdateMenu,
      callback);
};


/**
 * @param {!proto.admin.v1.UpdateMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v1.Menu>}
 *     A native promise that resolves to the response
 */
proto.admin.v1.AdminPromiseClient.prototype.updateMenu =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.Admin/UpdateMenu',
      request,
      metadata || {},
      methodDescriptor_Admin_UpdateMenu);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.v1.DeleteMenuRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Admin_DeleteMenu = new grpc.web.MethodDescriptor(
  '/admin.v1.Admin/DeleteMenu',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.DeleteMenuRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.admin.v1.DeleteMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.v1.DeleteMenuRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Admin_DeleteMenu = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.admin.v1.DeleteMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.admin.v1.DeleteMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.AdminClient.prototype.deleteMenu =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.Admin/DeleteMenu',
      request,
      metadata || {},
      methodDescriptor_Admin_DeleteMenu,
      callback);
};


/**
 * @param {!proto.admin.v1.DeleteMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.admin.v1.AdminPromiseClient.prototype.deleteMenu =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.Admin/DeleteMenu',
      request,
      metadata || {},
      methodDescriptor_Admin_DeleteMenu);
};


module.exports = proto.admin.v1;

