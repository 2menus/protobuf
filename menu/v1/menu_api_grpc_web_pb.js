/**
 * @fileoverview gRPC-Web generated client stub for menu.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var menu_v1_menu_pb = require('./menu/v1/menu_pb.js')
const proto = {};
proto.menu = {};
proto.menu.v1 = require('./menu_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.menu.v1.MenuDataProducerClient =
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
proto.menu.v1.MenuDataProducerPromiseClient =
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
 *   !proto.menu.v1.MenusRequest,
 *   !proto.menu.v1.MenusResponse>}
 */
const methodDescriptor_MenuDataProducer_Menus = new grpc.web.MethodDescriptor(
  '/menu.v1.MenuDataProducer/Menus',
  grpc.web.MethodType.UNARY,
  proto.menu.v1.MenusRequest,
  proto.menu.v1.MenusResponse,
  /**
   * @param {!proto.menu.v1.MenusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.MenusResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v1.MenusRequest,
 *   !proto.menu.v1.MenusResponse>}
 */
const methodInfo_MenuDataProducer_Menus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v1.MenusResponse,
  /**
   * @param {!proto.menu.v1.MenusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.MenusResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v1.MenusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v1.MenusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v1.MenusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v1.MenuDataProducerClient.prototype.menus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/Menus',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_Menus,
      callback);
};


/**
 * @param {!proto.menu.v1.MenusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v1.MenusResponse>}
 *     A native promise that resolves to the response
 */
proto.menu.v1.MenuDataProducerPromiseClient.prototype.menus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/Menus',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_Menus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v1.MenuDetailsRequest,
 *   !proto.menu.v1.Menu>}
 */
const methodDescriptor_MenuDataProducer_MenuDetails = new grpc.web.MethodDescriptor(
  '/menu.v1.MenuDataProducer/MenuDetails',
  grpc.web.MethodType.UNARY,
  proto.menu.v1.MenuDetailsRequest,
  menu_v1_menu_pb.Menu,
  /**
   * @param {!proto.menu.v1.MenuDetailsRequest} request
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
 *   !proto.menu.v1.MenuDetailsRequest,
 *   !proto.menu.v1.Menu>}
 */
const methodInfo_MenuDataProducer_MenuDetails = new grpc.web.AbstractClientBase.MethodInfo(
  menu_v1_menu_pb.Menu,
  /**
   * @param {!proto.menu.v1.MenuDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  menu_v1_menu_pb.Menu.deserializeBinary
);


/**
 * @param {!proto.menu.v1.MenuDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v1.Menu)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v1.Menu>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v1.MenuDataProducerClient.prototype.menuDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/MenuDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_MenuDetails,
      callback);
};


/**
 * @param {!proto.menu.v1.MenuDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v1.Menu>}
 *     A native promise that resolves to the response
 */
proto.menu.v1.MenuDataProducerPromiseClient.prototype.menuDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/MenuDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_MenuDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v1.SectionsRequest,
 *   !proto.menu.v1.SectionsResponse>}
 */
const methodDescriptor_MenuDataProducer_Sections = new grpc.web.MethodDescriptor(
  '/menu.v1.MenuDataProducer/Sections',
  grpc.web.MethodType.UNARY,
  proto.menu.v1.SectionsRequest,
  proto.menu.v1.SectionsResponse,
  /**
   * @param {!proto.menu.v1.SectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.SectionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v1.SectionsRequest,
 *   !proto.menu.v1.SectionsResponse>}
 */
const methodInfo_MenuDataProducer_Sections = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v1.SectionsResponse,
  /**
   * @param {!proto.menu.v1.SectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.SectionsResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v1.SectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v1.SectionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v1.SectionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v1.MenuDataProducerClient.prototype.sections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/Sections',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_Sections,
      callback);
};


/**
 * @param {!proto.menu.v1.SectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v1.SectionsResponse>}
 *     A native promise that resolves to the response
 */
proto.menu.v1.MenuDataProducerPromiseClient.prototype.sections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/Sections',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_Sections);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v1.SectionDetailsRequest,
 *   !proto.menu.v1.Section>}
 */
const methodDescriptor_MenuDataProducer_SectionDetails = new grpc.web.MethodDescriptor(
  '/menu.v1.MenuDataProducer/SectionDetails',
  grpc.web.MethodType.UNARY,
  proto.menu.v1.SectionDetailsRequest,
  menu_v1_menu_pb.Section,
  /**
   * @param {!proto.menu.v1.SectionDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  menu_v1_menu_pb.Section.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v1.SectionDetailsRequest,
 *   !proto.menu.v1.Section>}
 */
const methodInfo_MenuDataProducer_SectionDetails = new grpc.web.AbstractClientBase.MethodInfo(
  menu_v1_menu_pb.Section,
  /**
   * @param {!proto.menu.v1.SectionDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  menu_v1_menu_pb.Section.deserializeBinary
);


/**
 * @param {!proto.menu.v1.SectionDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v1.Section)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v1.Section>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v1.MenuDataProducerClient.prototype.sectionDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/SectionDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_SectionDetails,
      callback);
};


/**
 * @param {!proto.menu.v1.SectionDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v1.Section>}
 *     A native promise that resolves to the response
 */
proto.menu.v1.MenuDataProducerPromiseClient.prototype.sectionDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/SectionDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_SectionDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v1.ItemsRequest,
 *   !proto.menu.v1.ItemsResponse>}
 */
const methodDescriptor_MenuDataProducer_Items = new grpc.web.MethodDescriptor(
  '/menu.v1.MenuDataProducer/Items',
  grpc.web.MethodType.UNARY,
  proto.menu.v1.ItemsRequest,
  proto.menu.v1.ItemsResponse,
  /**
   * @param {!proto.menu.v1.ItemsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.ItemsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v1.ItemsRequest,
 *   !proto.menu.v1.ItemsResponse>}
 */
const methodInfo_MenuDataProducer_Items = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v1.ItemsResponse,
  /**
   * @param {!proto.menu.v1.ItemsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.ItemsResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v1.ItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v1.ItemsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v1.ItemsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v1.MenuDataProducerClient.prototype.items =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/Items',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_Items,
      callback);
};


/**
 * @param {!proto.menu.v1.ItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v1.ItemsResponse>}
 *     A native promise that resolves to the response
 */
proto.menu.v1.MenuDataProducerPromiseClient.prototype.items =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/Items',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_Items);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v1.ItemDetailsRequest,
 *   !proto.menu.v1.Item>}
 */
const methodDescriptor_MenuDataProducer_ItemDetails = new grpc.web.MethodDescriptor(
  '/menu.v1.MenuDataProducer/ItemDetails',
  grpc.web.MethodType.UNARY,
  proto.menu.v1.ItemDetailsRequest,
  menu_v1_menu_pb.Item,
  /**
   * @param {!proto.menu.v1.ItemDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  menu_v1_menu_pb.Item.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v1.ItemDetailsRequest,
 *   !proto.menu.v1.Item>}
 */
const methodInfo_MenuDataProducer_ItemDetails = new grpc.web.AbstractClientBase.MethodInfo(
  menu_v1_menu_pb.Item,
  /**
   * @param {!proto.menu.v1.ItemDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  menu_v1_menu_pb.Item.deserializeBinary
);


/**
 * @param {!proto.menu.v1.ItemDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v1.Item)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v1.Item>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v1.MenuDataProducerClient.prototype.itemDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/ItemDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_ItemDetails,
      callback);
};


/**
 * @param {!proto.menu.v1.ItemDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v1.Item>}
 *     A native promise that resolves to the response
 */
proto.menu.v1.MenuDataProducerPromiseClient.prototype.itemDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/ItemDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_ItemDetails);
};


module.exports = proto.menu.v1;

