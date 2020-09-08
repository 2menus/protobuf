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


var menu_v1_menu_pb = require('../../menu/v1/menu_pb.js')
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
 *     Promise that resolves to the response
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
 *   !proto.menu.v1.MenuDetailsResponse>}
 */
const methodDescriptor_MenuDataProducer_MenuDetails = new grpc.web.MethodDescriptor(
  '/menu.v1.MenuDataProducer/MenuDetails',
  grpc.web.MethodType.UNARY,
  proto.menu.v1.MenuDetailsRequest,
  proto.menu.v1.MenuDetailsResponse,
  /**
   * @param {!proto.menu.v1.MenuDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.MenuDetailsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v1.MenuDetailsRequest,
 *   !proto.menu.v1.MenuDetailsResponse>}
 */
const methodInfo_MenuDataProducer_MenuDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v1.MenuDetailsResponse,
  /**
   * @param {!proto.menu.v1.MenuDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.MenuDetailsResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v1.MenuDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v1.MenuDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v1.MenuDetailsResponse>|undefined}
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
 * @return {!Promise<!proto.menu.v1.MenuDetailsResponse>}
 *     Promise that resolves to the response
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
 *   !proto.menu.v1.CategoriesRequest,
 *   !proto.menu.v1.CategoriesResponse>}
 */
const methodDescriptor_MenuDataProducer_Categories = new grpc.web.MethodDescriptor(
  '/menu.v1.MenuDataProducer/Categories',
  grpc.web.MethodType.UNARY,
  proto.menu.v1.CategoriesRequest,
  proto.menu.v1.CategoriesResponse,
  /**
   * @param {!proto.menu.v1.CategoriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.CategoriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v1.CategoriesRequest,
 *   !proto.menu.v1.CategoriesResponse>}
 */
const methodInfo_MenuDataProducer_Categories = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v1.CategoriesResponse,
  /**
   * @param {!proto.menu.v1.CategoriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.CategoriesResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v1.CategoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v1.CategoriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v1.CategoriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v1.MenuDataProducerClient.prototype.categories =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/Categories',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_Categories,
      callback);
};


/**
 * @param {!proto.menu.v1.CategoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v1.CategoriesResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v1.MenuDataProducerPromiseClient.prototype.categories =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/Categories',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_Categories);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v1.CategoryDetailsRequest,
 *   !proto.menu.v1.CategoryDetailsResponse>}
 */
const methodDescriptor_MenuDataProducer_CategoryDetails = new grpc.web.MethodDescriptor(
  '/menu.v1.MenuDataProducer/CategoryDetails',
  grpc.web.MethodType.UNARY,
  proto.menu.v1.CategoryDetailsRequest,
  proto.menu.v1.CategoryDetailsResponse,
  /**
   * @param {!proto.menu.v1.CategoryDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.CategoryDetailsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v1.CategoryDetailsRequest,
 *   !proto.menu.v1.CategoryDetailsResponse>}
 */
const methodInfo_MenuDataProducer_CategoryDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v1.CategoryDetailsResponse,
  /**
   * @param {!proto.menu.v1.CategoryDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.CategoryDetailsResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v1.CategoryDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v1.CategoryDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v1.CategoryDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v1.MenuDataProducerClient.prototype.categoryDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/CategoryDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_CategoryDetails,
      callback);
};


/**
 * @param {!proto.menu.v1.CategoryDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v1.CategoryDetailsResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v1.MenuDataProducerPromiseClient.prototype.categoryDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/CategoryDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_CategoryDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v1.ProductsRequest,
 *   !proto.menu.v1.ProductsResponse>}
 */
const methodDescriptor_MenuDataProducer_Products = new grpc.web.MethodDescriptor(
  '/menu.v1.MenuDataProducer/Products',
  grpc.web.MethodType.UNARY,
  proto.menu.v1.ProductsRequest,
  proto.menu.v1.ProductsResponse,
  /**
   * @param {!proto.menu.v1.ProductsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.ProductsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v1.ProductsRequest,
 *   !proto.menu.v1.ProductsResponse>}
 */
const methodInfo_MenuDataProducer_Products = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v1.ProductsResponse,
  /**
   * @param {!proto.menu.v1.ProductsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.ProductsResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v1.ProductsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v1.ProductsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v1.ProductsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v1.MenuDataProducerClient.prototype.products =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/Products',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_Products,
      callback);
};


/**
 * @param {!proto.menu.v1.ProductsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v1.ProductsResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v1.MenuDataProducerPromiseClient.prototype.products =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/Products',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_Products);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v1.ProductDetailsRequest,
 *   !proto.menu.v1.ProductDetailsResponse>}
 */
const methodDescriptor_MenuDataProducer_ProductDetails = new grpc.web.MethodDescriptor(
  '/menu.v1.MenuDataProducer/ProductDetails',
  grpc.web.MethodType.UNARY,
  proto.menu.v1.ProductDetailsRequest,
  proto.menu.v1.ProductDetailsResponse,
  /**
   * @param {!proto.menu.v1.ProductDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.ProductDetailsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v1.ProductDetailsRequest,
 *   !proto.menu.v1.ProductDetailsResponse>}
 */
const methodInfo_MenuDataProducer_ProductDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v1.ProductDetailsResponse,
  /**
   * @param {!proto.menu.v1.ProductDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.ProductDetailsResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v1.ProductDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v1.ProductDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v1.ProductDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v1.MenuDataProducerClient.prototype.productDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/ProductDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_ProductDetails,
      callback);
};


/**
 * @param {!proto.menu.v1.ProductDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v1.ProductDetailsResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v1.MenuDataProducerPromiseClient.prototype.productDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/ProductDetails',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_ProductDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v1.CountriesRequest,
 *   !proto.menu.v1.CountriesResponse>}
 */
const methodDescriptor_MenuDataProducer_Countries = new grpc.web.MethodDescriptor(
  '/menu.v1.MenuDataProducer/Countries',
  grpc.web.MethodType.UNARY,
  proto.menu.v1.CountriesRequest,
  proto.menu.v1.CountriesResponse,
  /**
   * @param {!proto.menu.v1.CountriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.CountriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v1.CountriesRequest,
 *   !proto.menu.v1.CountriesResponse>}
 */
const methodInfo_MenuDataProducer_Countries = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v1.CountriesResponse,
  /**
   * @param {!proto.menu.v1.CountriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v1.CountriesResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v1.CountriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v1.CountriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v1.CountriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v1.MenuDataProducerClient.prototype.countries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/Countries',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_Countries,
      callback);
};


/**
 * @param {!proto.menu.v1.CountriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v1.CountriesResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v1.MenuDataProducerPromiseClient.prototype.countries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v1.MenuDataProducer/Countries',
      request,
      metadata || {},
      methodDescriptor_MenuDataProducer_Countries);
};


module.exports = proto.menu.v1;

