/**
 * @fileoverview gRPC-Web generated client stub for menu
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.menu = require('./menu_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.menu.MenuDataProducerClient =
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
proto.menu.MenuDataProducerPromiseClient =
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
 *   !proto.menu.AccountListRequest,
 *   !proto.menu.AccountListResponse>}
 */
const methodDescriptor_MenuDataProducer_AccountList = new grpc.web.MethodDescriptor(
  '/menu.MenuDataProducer/AccountList',
  grpc.web.MethodType.UNARY,
  proto.menu.AccountListRequest,
  proto.menu.AccountListResponse,
  /**
   * @param {!proto.menu.AccountListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.AccountListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.AccountListRequest,
 *   !proto.menu.AccountListResponse>}
 */
const methodInfo_MenuDataProducer_AccountList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.AccountListResponse,
  /**
   * @param {!proto.menu.AccountListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.AccountListResponse.deserializeBinary
);


/**
 * @param {!proto.menu.AccountListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.AccountListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.AccountListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.MenuDataProducerClient.prototype.accountList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.MenuDataProducer/AccountList',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_AccountList,
      callback);
};


/**
 * @param {!proto.menu.AccountListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.AccountListResponse>}
 *     A native promise that resolves to the response
 */
proto.menu.MenuDataProducerPromiseClient.prototype.accountList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.MenuDataProducer/AccountList',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_AccountList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.AccountDetailsRequest,
 *   !proto.menu.Account>}
 */
const methodDescriptor_MenuDataProducer_AccountDetails = new grpc.web.MethodDescriptor(
  '/menu.MenuDataProducer/AccountDetails',
  grpc.web.MethodType.UNARY,
  proto.menu.AccountDetailsRequest,
  proto.menu.Account,
  /**
   * @param {!proto.menu.AccountDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.Account.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.AccountDetailsRequest,
 *   !proto.menu.Account>}
 */
const methodInfo_MenuDataProducer_AccountDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.Account,
  /**
   * @param {!proto.menu.AccountDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.Account.deserializeBinary
);


/**
 * @param {!proto.menu.AccountDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.Account)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.Account>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.MenuDataProducerClient.prototype.accountDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.MenuDataProducer/AccountDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_AccountDetails,
      callback);
};


/**
 * @param {!proto.menu.AccountDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.Account>}
 *     A native promise that resolves to the response
 */
proto.menu.MenuDataProducerPromiseClient.prototype.accountDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.MenuDataProducer/AccountDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_AccountDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.MenuListRequest,
 *   !proto.menu.MenuListResponse>}
 */
const methodDescriptor_MenuDataProducer_MenuList = new grpc.web.MethodDescriptor(
  '/menu.MenuDataProducer/MenuList',
  grpc.web.MethodType.UNARY,
  proto.menu.MenuListRequest,
  proto.menu.MenuListResponse,
  /**
   * @param {!proto.menu.MenuListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.MenuListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.MenuListRequest,
 *   !proto.menu.MenuListResponse>}
 */
const methodInfo_MenuDataProducer_MenuList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.MenuListResponse,
  /**
   * @param {!proto.menu.MenuListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.MenuListResponse.deserializeBinary
);


/**
 * @param {!proto.menu.MenuListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.MenuListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.MenuListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.MenuDataProducerClient.prototype.menuList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.MenuDataProducer/MenuList',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_MenuList,
      callback);
};


/**
 * @param {!proto.menu.MenuListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.MenuListResponse>}
 *     A native promise that resolves to the response
 */
proto.menu.MenuDataProducerPromiseClient.prototype.menuList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.MenuDataProducer/MenuList',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_MenuList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.MenuDetailsRequest,
 *   !proto.menu.Menu>}
 */
const methodDescriptor_MenuDataProducer_MenuDetails = new grpc.web.MethodDescriptor(
  '/menu.MenuDataProducer/MenuDetails',
  grpc.web.MethodType.UNARY,
  proto.menu.MenuDetailsRequest,
  proto.menu.Menu,
  /**
   * @param {!proto.menu.MenuDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.Menu.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.MenuDetailsRequest,
 *   !proto.menu.Menu>}
 */
const methodInfo_MenuDataProducer_MenuDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.Menu,
  /**
   * @param {!proto.menu.MenuDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.Menu.deserializeBinary
);


/**
 * @param {!proto.menu.MenuDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.Menu)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.Menu>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.MenuDataProducerClient.prototype.menuDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.MenuDataProducer/MenuDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_MenuDetails,
      callback);
};


/**
 * @param {!proto.menu.MenuDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.Menu>}
 *     A native promise that resolves to the response
 */
proto.menu.MenuDataProducerPromiseClient.prototype.menuDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.MenuDataProducer/MenuDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_MenuDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.SectionListRequest,
 *   !proto.menu.SectionListResponse>}
 */
const methodDescriptor_MenuDataProducer_SectionList = new grpc.web.MethodDescriptor(
  '/menu.MenuDataProducer/SectionList',
  grpc.web.MethodType.UNARY,
  proto.menu.SectionListRequest,
  proto.menu.SectionListResponse,
  /**
   * @param {!proto.menu.SectionListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.SectionListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.SectionListRequest,
 *   !proto.menu.SectionListResponse>}
 */
const methodInfo_MenuDataProducer_SectionList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.SectionListResponse,
  /**
   * @param {!proto.menu.SectionListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.SectionListResponse.deserializeBinary
);


/**
 * @param {!proto.menu.SectionListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.SectionListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.SectionListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.MenuDataProducerClient.prototype.sectionList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.MenuDataProducer/SectionList',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_SectionList,
      callback);
};


/**
 * @param {!proto.menu.SectionListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.SectionListResponse>}
 *     A native promise that resolves to the response
 */
proto.menu.MenuDataProducerPromiseClient.prototype.sectionList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.MenuDataProducer/SectionList',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_SectionList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.SectionDetailsRequest,
 *   !proto.menu.Section>}
 */
const methodDescriptor_MenuDataProducer_SectionDetails = new grpc.web.MethodDescriptor(
  '/menu.MenuDataProducer/SectionDetails',
  grpc.web.MethodType.UNARY,
  proto.menu.SectionDetailsRequest,
  proto.menu.Section,
  /**
   * @param {!proto.menu.SectionDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.Section.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.SectionDetailsRequest,
 *   !proto.menu.Section>}
 */
const methodInfo_MenuDataProducer_SectionDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.Section,
  /**
   * @param {!proto.menu.SectionDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.Section.deserializeBinary
);


/**
 * @param {!proto.menu.SectionDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.Section)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.Section>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.MenuDataProducerClient.prototype.sectionDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.MenuDataProducer/SectionDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_SectionDetails,
      callback);
};


/**
 * @param {!proto.menu.SectionDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.Section>}
 *     A native promise that resolves to the response
 */
proto.menu.MenuDataProducerPromiseClient.prototype.sectionDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.MenuDataProducer/SectionDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_SectionDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.ItemListRequest,
 *   !proto.menu.ItemListResponse>}
 */
const methodDescriptor_MenuDataProducer_ItemList = new grpc.web.MethodDescriptor(
  '/menu.MenuDataProducer/ItemList',
  grpc.web.MethodType.UNARY,
  proto.menu.ItemListRequest,
  proto.menu.ItemListResponse,
  /**
   * @param {!proto.menu.ItemListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.ItemListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.ItemListRequest,
 *   !proto.menu.ItemListResponse>}
 */
const methodInfo_MenuDataProducer_ItemList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.ItemListResponse,
  /**
   * @param {!proto.menu.ItemListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.ItemListResponse.deserializeBinary
);


/**
 * @param {!proto.menu.ItemListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.ItemListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.ItemListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.MenuDataProducerClient.prototype.itemList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.MenuDataProducer/ItemList',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_ItemList,
      callback);
};


/**
 * @param {!proto.menu.ItemListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.ItemListResponse>}
 *     A native promise that resolves to the response
 */
proto.menu.MenuDataProducerPromiseClient.prototype.itemList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.MenuDataProducer/ItemList',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_ItemList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.ItemDetailsRequest,
 *   !proto.menu.Item>}
 */
const methodDescriptor_MenuDataProducer_ItemDetails = new grpc.web.MethodDescriptor(
  '/menu.MenuDataProducer/ItemDetails',
  grpc.web.MethodType.UNARY,
  proto.menu.ItemDetailsRequest,
  proto.menu.Item,
  /**
   * @param {!proto.menu.ItemDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.Item.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.ItemDetailsRequest,
 *   !proto.menu.Item>}
 */
const methodInfo_MenuDataProducer_ItemDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.Item,
  /**
   * @param {!proto.menu.ItemDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.Item.deserializeBinary
);


/**
 * @param {!proto.menu.ItemDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.Item)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.Item>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.MenuDataProducerClient.prototype.itemDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.MenuDataProducer/ItemDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_ItemDetails,
      callback);
};


/**
 * @param {!proto.menu.ItemDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.Item>}
 *     A native promise that resolves to the response
 */
proto.menu.MenuDataProducerPromiseClient.prototype.itemDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.MenuDataProducer/ItemDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_ItemDetails);
};


module.exports = proto.menu;

