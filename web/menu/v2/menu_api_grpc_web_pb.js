/**
 * @fileoverview gRPC-Web generated client stub for menu.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var menu_v2_menu_pb = require('../../menu/v2/menu_pb.js')

var country_v2_country_pb = require('../../country/v2/country_pb.js')
const proto = {};
proto.menu = {};
proto.menu.v2 = require('./menu_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.menu.v2.MenuDataApiClient =
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
proto.menu.v2.MenuDataApiPromiseClient =
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
 *   !proto.menu.v2.MenuDetailsRequest,
 *   !proto.menu.v2.MenuDetailsResponse>}
 */
const methodDescriptor_MenuDataApi_Menu = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/Menu',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.MenuDetailsRequest,
  proto.menu.v2.MenuDetailsResponse,
  /**
   * @param {!proto.menu.v2.MenuDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.MenuDetailsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.MenuDetailsRequest,
 *   !proto.menu.v2.MenuDetailsResponse>}
 */
const methodInfo_MenuDataApi_Menu = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.MenuDetailsResponse,
  /**
   * @param {!proto.menu.v2.MenuDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.MenuDetailsResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.MenuDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.MenuDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.MenuDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.menu =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/Menu',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_Menu,
      callback);
};


/**
 * @param {!proto.menu.v2.MenuDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.MenuDetailsResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.menu =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/Menu',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_Menu);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v2.MenusRequest,
 *   !proto.menu.v2.MenusResponse>}
 */
const methodDescriptor_MenuDataApi_Menus = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/Menus',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.MenusRequest,
  proto.menu.v2.MenusResponse,
  /**
   * @param {!proto.menu.v2.MenusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.MenusResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.MenusRequest,
 *   !proto.menu.v2.MenusResponse>}
 */
const methodInfo_MenuDataApi_Menus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.MenusResponse,
  /**
   * @param {!proto.menu.v2.MenusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.MenusResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.MenusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.MenusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.MenusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.menus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/Menus',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_Menus,
      callback);
};


/**
 * @param {!proto.menu.v2.MenusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.MenusResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.menus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/Menus',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_Menus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v2.CreateMenuRequest,
 *   !proto.menu.v2.CreateMenuResponse>}
 */
const methodDescriptor_MenuDataApi_CreateMenu = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/CreateMenu',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.CreateMenuRequest,
  proto.menu.v2.CreateMenuResponse,
  /**
   * @param {!proto.menu.v2.CreateMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.CreateMenuResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.CreateMenuRequest,
 *   !proto.menu.v2.CreateMenuResponse>}
 */
const methodInfo_MenuDataApi_CreateMenu = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.CreateMenuResponse,
  /**
   * @param {!proto.menu.v2.CreateMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.CreateMenuResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.CreateMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.CreateMenuResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.CreateMenuResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.createMenu =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/CreateMenu',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_CreateMenu,
      callback);
};


/**
 * @param {!proto.menu.v2.CreateMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.CreateMenuResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.createMenu =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/CreateMenu',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_CreateMenu);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v2.UpdateMenuRequest,
 *   !proto.menu.v2.UpdateMenuResponse>}
 */
const methodDescriptor_MenuDataApi_UpdateMenu = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/UpdateMenu',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.UpdateMenuRequest,
  proto.menu.v2.UpdateMenuResponse,
  /**
   * @param {!proto.menu.v2.UpdateMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.UpdateMenuResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.UpdateMenuRequest,
 *   !proto.menu.v2.UpdateMenuResponse>}
 */
const methodInfo_MenuDataApi_UpdateMenu = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.UpdateMenuResponse,
  /**
   * @param {!proto.menu.v2.UpdateMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.UpdateMenuResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.UpdateMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.UpdateMenuResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.UpdateMenuResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.updateMenu =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/UpdateMenu',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_UpdateMenu,
      callback);
};


/**
 * @param {!proto.menu.v2.UpdateMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.UpdateMenuResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.updateMenu =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/UpdateMenu',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_UpdateMenu);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v2.DeleteMenuRequest,
 *   !proto.menu.v2.DeleteMenuResponse>}
 */
const methodDescriptor_MenuDataApi_DeleteMenu = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/DeleteMenu',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.DeleteMenuRequest,
  proto.menu.v2.DeleteMenuResponse,
  /**
   * @param {!proto.menu.v2.DeleteMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.DeleteMenuResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.DeleteMenuRequest,
 *   !proto.menu.v2.DeleteMenuResponse>}
 */
const methodInfo_MenuDataApi_DeleteMenu = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.DeleteMenuResponse,
  /**
   * @param {!proto.menu.v2.DeleteMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.DeleteMenuResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.DeleteMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.DeleteMenuResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.DeleteMenuResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.deleteMenu =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/DeleteMenu',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_DeleteMenu,
      callback);
};


/**
 * @param {!proto.menu.v2.DeleteMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.DeleteMenuResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.deleteMenu =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/DeleteMenu',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_DeleteMenu);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v2.CategoryDetailsRequest,
 *   !proto.menu.v2.CategoryDetailsResponse>}
 */
const methodDescriptor_MenuDataApi_Category = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/Category',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.CategoryDetailsRequest,
  proto.menu.v2.CategoryDetailsResponse,
  /**
   * @param {!proto.menu.v2.CategoryDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.CategoryDetailsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.CategoryDetailsRequest,
 *   !proto.menu.v2.CategoryDetailsResponse>}
 */
const methodInfo_MenuDataApi_Category = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.CategoryDetailsResponse,
  /**
   * @param {!proto.menu.v2.CategoryDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.CategoryDetailsResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.CategoryDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.CategoryDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.CategoryDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.category =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/Category',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_Category,
      callback);
};


/**
 * @param {!proto.menu.v2.CategoryDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.CategoryDetailsResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.category =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/Category',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_Category);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v2.CategoriesRequest,
 *   !proto.menu.v2.CategoriesResponse>}
 */
const methodDescriptor_MenuDataApi_Categories = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/Categories',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.CategoriesRequest,
  proto.menu.v2.CategoriesResponse,
  /**
   * @param {!proto.menu.v2.CategoriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.CategoriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.CategoriesRequest,
 *   !proto.menu.v2.CategoriesResponse>}
 */
const methodInfo_MenuDataApi_Categories = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.CategoriesResponse,
  /**
   * @param {!proto.menu.v2.CategoriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.CategoriesResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.CategoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.CategoriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.CategoriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.categories =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/Categories',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_Categories,
      callback);
};


/**
 * @param {!proto.menu.v2.CategoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.CategoriesResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.categories =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/Categories',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_Categories);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v2.CreateCategoryRequest,
 *   !proto.menu.v2.CreateCategoryResponse>}
 */
const methodDescriptor_MenuDataApi_CreateCategory = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/CreateCategory',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.CreateCategoryRequest,
  proto.menu.v2.CreateCategoryResponse,
  /**
   * @param {!proto.menu.v2.CreateCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.CreateCategoryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.CreateCategoryRequest,
 *   !proto.menu.v2.CreateCategoryResponse>}
 */
const methodInfo_MenuDataApi_CreateCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.CreateCategoryResponse,
  /**
   * @param {!proto.menu.v2.CreateCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.CreateCategoryResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.CreateCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.CreateCategoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.CreateCategoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.createCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/CreateCategory',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_CreateCategory,
      callback);
};


/**
 * @param {!proto.menu.v2.CreateCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.CreateCategoryResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.createCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/CreateCategory',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_CreateCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v2.UpdateCategoryRequest,
 *   !proto.menu.v2.UpdateCategoryResponse>}
 */
const methodDescriptor_MenuDataApi_UpdateCategory = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/UpdateCategory',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.UpdateCategoryRequest,
  proto.menu.v2.UpdateCategoryResponse,
  /**
   * @param {!proto.menu.v2.UpdateCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.UpdateCategoryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.UpdateCategoryRequest,
 *   !proto.menu.v2.UpdateCategoryResponse>}
 */
const methodInfo_MenuDataApi_UpdateCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.UpdateCategoryResponse,
  /**
   * @param {!proto.menu.v2.UpdateCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.UpdateCategoryResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.UpdateCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.UpdateCategoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.UpdateCategoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.updateCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/UpdateCategory',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_UpdateCategory,
      callback);
};


/**
 * @param {!proto.menu.v2.UpdateCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.UpdateCategoryResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.updateCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/UpdateCategory',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_UpdateCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v2.DeleteCategoryRequest,
 *   !proto.menu.v2.DeleteCategoryResponse>}
 */
const methodDescriptor_MenuDataApi_DeleteCategory = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/DeleteCategory',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.DeleteCategoryRequest,
  proto.menu.v2.DeleteCategoryResponse,
  /**
   * @param {!proto.menu.v2.DeleteCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.DeleteCategoryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.DeleteCategoryRequest,
 *   !proto.menu.v2.DeleteCategoryResponse>}
 */
const methodInfo_MenuDataApi_DeleteCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.DeleteCategoryResponse,
  /**
   * @param {!proto.menu.v2.DeleteCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.DeleteCategoryResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.DeleteCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.DeleteCategoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.DeleteCategoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.deleteCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/DeleteCategory',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_DeleteCategory,
      callback);
};


/**
 * @param {!proto.menu.v2.DeleteCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.DeleteCategoryResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.deleteCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/DeleteCategory',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_DeleteCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v2.LinkCategoryMenuRequest,
 *   !proto.menu.v2.LinkCategoryMenuResponse>}
 */
const methodDescriptor_MenuDataApi_LinkCategoryMenu = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/LinkCategoryMenu',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.LinkCategoryMenuRequest,
  proto.menu.v2.LinkCategoryMenuResponse,
  /**
   * @param {!proto.menu.v2.LinkCategoryMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.LinkCategoryMenuResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.LinkCategoryMenuRequest,
 *   !proto.menu.v2.LinkCategoryMenuResponse>}
 */
const methodInfo_MenuDataApi_LinkCategoryMenu = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.LinkCategoryMenuResponse,
  /**
   * @param {!proto.menu.v2.LinkCategoryMenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.LinkCategoryMenuResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.LinkCategoryMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.LinkCategoryMenuResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.LinkCategoryMenuResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.linkCategoryMenu =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/LinkCategoryMenu',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_LinkCategoryMenu,
      callback);
};


/**
 * @param {!proto.menu.v2.LinkCategoryMenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.LinkCategoryMenuResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.linkCategoryMenu =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/LinkCategoryMenu',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_LinkCategoryMenu);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v2.ProductDetailsRequest,
 *   !proto.menu.v2.ProductDetailsResponse>}
 */
const methodDescriptor_MenuDataApi_Product = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/Product',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.ProductDetailsRequest,
  proto.menu.v2.ProductDetailsResponse,
  /**
   * @param {!proto.menu.v2.ProductDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.ProductDetailsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.ProductDetailsRequest,
 *   !proto.menu.v2.ProductDetailsResponse>}
 */
const methodInfo_MenuDataApi_Product = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.ProductDetailsResponse,
  /**
   * @param {!proto.menu.v2.ProductDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.ProductDetailsResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.ProductDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.ProductDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.ProductDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.product =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/Product',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_Product,
      callback);
};


/**
 * @param {!proto.menu.v2.ProductDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.ProductDetailsResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.product =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/Product',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_Product);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v2.ProductsRequest,
 *   !proto.menu.v2.ProductsResponse>}
 */
const methodDescriptor_MenuDataApi_Products = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/Products',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.ProductsRequest,
  proto.menu.v2.ProductsResponse,
  /**
   * @param {!proto.menu.v2.ProductsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.ProductsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.ProductsRequest,
 *   !proto.menu.v2.ProductsResponse>}
 */
const methodInfo_MenuDataApi_Products = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.ProductsResponse,
  /**
   * @param {!proto.menu.v2.ProductsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.ProductsResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.ProductsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.ProductsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.ProductsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.products =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/Products',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_Products,
      callback);
};


/**
 * @param {!proto.menu.v2.ProductsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.ProductsResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.products =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/Products',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_Products);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v2.CreateProductRequest,
 *   !proto.menu.v2.CreateProductResponse>}
 */
const methodDescriptor_MenuDataApi_CreateProduct = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/CreateProduct',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.CreateProductRequest,
  proto.menu.v2.CreateProductResponse,
  /**
   * @param {!proto.menu.v2.CreateProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.CreateProductResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.CreateProductRequest,
 *   !proto.menu.v2.CreateProductResponse>}
 */
const methodInfo_MenuDataApi_CreateProduct = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.CreateProductResponse,
  /**
   * @param {!proto.menu.v2.CreateProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.CreateProductResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.CreateProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.CreateProductResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.CreateProductResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.createProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/CreateProduct',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_CreateProduct,
      callback);
};


/**
 * @param {!proto.menu.v2.CreateProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.CreateProductResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.createProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/CreateProduct',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_CreateProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v2.UpdateProductRequest,
 *   !proto.menu.v2.UpdateProductResponse>}
 */
const methodDescriptor_MenuDataApi_UpdateProduct = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/UpdateProduct',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.UpdateProductRequest,
  proto.menu.v2.UpdateProductResponse,
  /**
   * @param {!proto.menu.v2.UpdateProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.UpdateProductResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.UpdateProductRequest,
 *   !proto.menu.v2.UpdateProductResponse>}
 */
const methodInfo_MenuDataApi_UpdateProduct = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.UpdateProductResponse,
  /**
   * @param {!proto.menu.v2.UpdateProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.UpdateProductResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.UpdateProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.UpdateProductResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.UpdateProductResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.updateProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/UpdateProduct',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_UpdateProduct,
      callback);
};


/**
 * @param {!proto.menu.v2.UpdateProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.UpdateProductResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.updateProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/UpdateProduct',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_UpdateProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v2.DeleteProductRequest,
 *   !proto.menu.v2.DeleteProductResponse>}
 */
const methodDescriptor_MenuDataApi_DeleteProduct = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/DeleteProduct',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.DeleteProductRequest,
  proto.menu.v2.DeleteProductResponse,
  /**
   * @param {!proto.menu.v2.DeleteProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.DeleteProductResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.DeleteProductRequest,
 *   !proto.menu.v2.DeleteProductResponse>}
 */
const methodInfo_MenuDataApi_DeleteProduct = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.DeleteProductResponse,
  /**
   * @param {!proto.menu.v2.DeleteProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.DeleteProductResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.DeleteProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.DeleteProductResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.DeleteProductResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.deleteProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/DeleteProduct',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_DeleteProduct,
      callback);
};


/**
 * @param {!proto.menu.v2.DeleteProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.DeleteProductResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.deleteProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/DeleteProduct',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_DeleteProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v2.LinkProductCategoryRequest,
 *   !proto.menu.v2.LinkProductCategoryResponse>}
 */
const methodDescriptor_MenuDataApi_LinkProductCategory = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/LinkProductCategory',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.LinkProductCategoryRequest,
  proto.menu.v2.LinkProductCategoryResponse,
  /**
   * @param {!proto.menu.v2.LinkProductCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.LinkProductCategoryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.LinkProductCategoryRequest,
 *   !proto.menu.v2.LinkProductCategoryResponse>}
 */
const methodInfo_MenuDataApi_LinkProductCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.LinkProductCategoryResponse,
  /**
   * @param {!proto.menu.v2.LinkProductCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.LinkProductCategoryResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.LinkProductCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.LinkProductCategoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.LinkProductCategoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.linkProductCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/LinkProductCategory',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_LinkProductCategory,
      callback);
};


/**
 * @param {!proto.menu.v2.LinkProductCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.LinkProductCategoryResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.linkProductCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/LinkProductCategory',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_LinkProductCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.menu.v2.CountriesRequest,
 *   !proto.menu.v2.CountriesResponse>}
 */
const methodDescriptor_MenuDataApi_Countries = new grpc.web.MethodDescriptor(
  '/menu.v2.MenuDataApi/Countries',
  grpc.web.MethodType.UNARY,
  proto.menu.v2.CountriesRequest,
  proto.menu.v2.CountriesResponse,
  /**
   * @param {!proto.menu.v2.CountriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.CountriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.menu.v2.CountriesRequest,
 *   !proto.menu.v2.CountriesResponse>}
 */
const methodInfo_MenuDataApi_Countries = new grpc.web.AbstractClientBase.MethodInfo(
  proto.menu.v2.CountriesResponse,
  /**
   * @param {!proto.menu.v2.CountriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.menu.v2.CountriesResponse.deserializeBinary
);


/**
 * @param {!proto.menu.v2.CountriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.menu.v2.CountriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.menu.v2.CountriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.menu.v2.MenuDataApiClient.prototype.countries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/menu.v2.MenuDataApi/Countries',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_Countries,
      callback);
};


/**
 * @param {!proto.menu.v2.CountriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.menu.v2.CountriesResponse>}
 *     Promise that resolves to the response
 */
proto.menu.v2.MenuDataApiPromiseClient.prototype.countries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/menu.v2.MenuDataApi/Countries',
      request,
      metadata || {},
      methodDescriptor_MenuDataApi_Countries);
};


module.exports = proto.menu.v2;

