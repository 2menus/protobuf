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
 *     Promise that resolves to the response
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
 *     Promise that resolves to the response
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
 *     Promise that resolves to the response
 */
proto.admin.v1.AdminDataLoaderPromiseClient.prototype.deleteMenu =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/DeleteMenu',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_DeleteMenu);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.v1.CreateCategoryRequest,
 *   !proto.admin.v1.CreateCategoryResponse>}
 */
const methodDescriptor_AdminDataLoader_CreateCategory = new grpc.web.MethodDescriptor(
  '/admin.v1.AdminDataLoader/CreateCategory',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.CreateCategoryRequest,
  proto.admin.v1.CreateCategoryResponse,
  /**
   * @param {!proto.admin.v1.CreateCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.CreateCategoryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.v1.CreateCategoryRequest,
 *   !proto.admin.v1.CreateCategoryResponse>}
 */
const methodInfo_AdminDataLoader_CreateCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.v1.CreateCategoryResponse,
  /**
   * @param {!proto.admin.v1.CreateCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.CreateCategoryResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.CreateCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.v1.CreateCategoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.CreateCategoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.AdminDataLoaderClient.prototype.createCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/CreateCategory',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_CreateCategory,
      callback);
};


/**
 * @param {!proto.admin.v1.CreateCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.CreateCategoryResponse>}
 *     Promise that resolves to the response
 */
proto.admin.v1.AdminDataLoaderPromiseClient.prototype.createCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/CreateCategory',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_CreateCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.v1.UpdateCategoryRequest,
 *   !proto.admin.v1.UpdateCategoryResponse>}
 */
const methodDescriptor_AdminDataLoader_UpdateCategory = new grpc.web.MethodDescriptor(
  '/admin.v1.AdminDataLoader/UpdateCategory',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.UpdateCategoryRequest,
  proto.admin.v1.UpdateCategoryResponse,
  /**
   * @param {!proto.admin.v1.UpdateCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.UpdateCategoryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.v1.UpdateCategoryRequest,
 *   !proto.admin.v1.UpdateCategoryResponse>}
 */
const methodInfo_AdminDataLoader_UpdateCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.v1.UpdateCategoryResponse,
  /**
   * @param {!proto.admin.v1.UpdateCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.UpdateCategoryResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.UpdateCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.v1.UpdateCategoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.UpdateCategoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.AdminDataLoaderClient.prototype.updateCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/UpdateCategory',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_UpdateCategory,
      callback);
};


/**
 * @param {!proto.admin.v1.UpdateCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.UpdateCategoryResponse>}
 *     Promise that resolves to the response
 */
proto.admin.v1.AdminDataLoaderPromiseClient.prototype.updateCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/UpdateCategory',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_UpdateCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.v1.DeleteCategoryRequest,
 *   !proto.admin.v1.DeleteCategoryResponse>}
 */
const methodDescriptor_AdminDataLoader_DeleteCategory = new grpc.web.MethodDescriptor(
  '/admin.v1.AdminDataLoader/DeleteCategory',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.DeleteCategoryRequest,
  proto.admin.v1.DeleteCategoryResponse,
  /**
   * @param {!proto.admin.v1.DeleteCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.DeleteCategoryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.v1.DeleteCategoryRequest,
 *   !proto.admin.v1.DeleteCategoryResponse>}
 */
const methodInfo_AdminDataLoader_DeleteCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.v1.DeleteCategoryResponse,
  /**
   * @param {!proto.admin.v1.DeleteCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.DeleteCategoryResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.DeleteCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.v1.DeleteCategoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.DeleteCategoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.AdminDataLoaderClient.prototype.deleteCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/DeleteCategory',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_DeleteCategory,
      callback);
};


/**
 * @param {!proto.admin.v1.DeleteCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.DeleteCategoryResponse>}
 *     Promise that resolves to the response
 */
proto.admin.v1.AdminDataLoaderPromiseClient.prototype.deleteCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/DeleteCategory',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_DeleteCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.v1.CreateProductRequest,
 *   !proto.admin.v1.CreateProductResponse>}
 */
const methodDescriptor_AdminDataLoader_CreateProduct = new grpc.web.MethodDescriptor(
  '/admin.v1.AdminDataLoader/CreateProduct',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.CreateProductRequest,
  proto.admin.v1.CreateProductResponse,
  /**
   * @param {!proto.admin.v1.CreateProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.CreateProductResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.v1.CreateProductRequest,
 *   !proto.admin.v1.CreateProductResponse>}
 */
const methodInfo_AdminDataLoader_CreateProduct = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.v1.CreateProductResponse,
  /**
   * @param {!proto.admin.v1.CreateProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.CreateProductResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.CreateProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.v1.CreateProductResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.CreateProductResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.AdminDataLoaderClient.prototype.createProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/CreateProduct',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_CreateProduct,
      callback);
};


/**
 * @param {!proto.admin.v1.CreateProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.CreateProductResponse>}
 *     Promise that resolves to the response
 */
proto.admin.v1.AdminDataLoaderPromiseClient.prototype.createProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/CreateProduct',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_CreateProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.v1.UpdateProductRequest,
 *   !proto.admin.v1.UpdateProductResponse>}
 */
const methodDescriptor_AdminDataLoader_UpdateProduct = new grpc.web.MethodDescriptor(
  '/admin.v1.AdminDataLoader/UpdateProduct',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.UpdateProductRequest,
  proto.admin.v1.UpdateProductResponse,
  /**
   * @param {!proto.admin.v1.UpdateProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.UpdateProductResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.v1.UpdateProductRequest,
 *   !proto.admin.v1.UpdateProductResponse>}
 */
const methodInfo_AdminDataLoader_UpdateProduct = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.v1.UpdateProductResponse,
  /**
   * @param {!proto.admin.v1.UpdateProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.UpdateProductResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.UpdateProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.v1.UpdateProductResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.UpdateProductResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.AdminDataLoaderClient.prototype.updateProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/UpdateProduct',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_UpdateProduct,
      callback);
};


/**
 * @param {!proto.admin.v1.UpdateProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.UpdateProductResponse>}
 *     Promise that resolves to the response
 */
proto.admin.v1.AdminDataLoaderPromiseClient.prototype.updateProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/UpdateProduct',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_UpdateProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.v1.DeleteProductRequest,
 *   !proto.admin.v1.DeleteProductResponse>}
 */
const methodDescriptor_AdminDataLoader_DeleteProduct = new grpc.web.MethodDescriptor(
  '/admin.v1.AdminDataLoader/DeleteProduct',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.DeleteProductRequest,
  proto.admin.v1.DeleteProductResponse,
  /**
   * @param {!proto.admin.v1.DeleteProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.DeleteProductResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.v1.DeleteProductRequest,
 *   !proto.admin.v1.DeleteProductResponse>}
 */
const methodInfo_AdminDataLoader_DeleteProduct = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.v1.DeleteProductResponse,
  /**
   * @param {!proto.admin.v1.DeleteProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.DeleteProductResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.DeleteProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.v1.DeleteProductResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.DeleteProductResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.AdminDataLoaderClient.prototype.deleteProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/DeleteProduct',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_DeleteProduct,
      callback);
};


/**
 * @param {!proto.admin.v1.DeleteProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.DeleteProductResponse>}
 *     Promise that resolves to the response
 */
proto.admin.v1.AdminDataLoaderPromiseClient.prototype.deleteProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.AdminDataLoader/DeleteProduct',
      request,
      metadata || {},
      methodDescriptor_AdminDataLoader_DeleteProduct);
};


module.exports = proto.admin.v1;

