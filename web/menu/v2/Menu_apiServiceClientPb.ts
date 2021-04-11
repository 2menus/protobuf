/**
 * @fileoverview gRPC-Web generated client stub for menu.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as menu_v2_menu_api_pb from '../../menu/v2/menu_api_pb';


export class MenuDataApiClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoMenu = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.MenuDetailsResponse,
    (request: menu_v2_menu_api_pb.MenuDetailsRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.MenuDetailsResponse.deserializeBinary
  );

  menu(
    request: menu_v2_menu_api_pb.MenuDetailsRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.MenuDetailsResponse>;

  menu(
    request: menu_v2_menu_api_pb.MenuDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.MenuDetailsResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.MenuDetailsResponse>;

  menu(
    request: menu_v2_menu_api_pb.MenuDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.MenuDetailsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/Menu',
        request,
        metadata || {},
        this.methodInfoMenu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/Menu',
    request,
    metadata || {},
    this.methodInfoMenu);
  }

  methodInfoMenus = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.MenusResponse,
    (request: menu_v2_menu_api_pb.MenusRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.MenusResponse.deserializeBinary
  );

  menus(
    request: menu_v2_menu_api_pb.MenusRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.MenusResponse>;

  menus(
    request: menu_v2_menu_api_pb.MenusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.MenusResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.MenusResponse>;

  menus(
    request: menu_v2_menu_api_pb.MenusRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.MenusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/Menus',
        request,
        metadata || {},
        this.methodInfoMenus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/Menus',
    request,
    metadata || {},
    this.methodInfoMenus);
  }

  methodInfoCreateMenu = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.CreateMenuResponse,
    (request: menu_v2_menu_api_pb.CreateMenuRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.CreateMenuResponse.deserializeBinary
  );

  createMenu(
    request: menu_v2_menu_api_pb.CreateMenuRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.CreateMenuResponse>;

  createMenu(
    request: menu_v2_menu_api_pb.CreateMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.CreateMenuResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.CreateMenuResponse>;

  createMenu(
    request: menu_v2_menu_api_pb.CreateMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.CreateMenuResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/CreateMenu',
        request,
        metadata || {},
        this.methodInfoCreateMenu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/CreateMenu',
    request,
    metadata || {},
    this.methodInfoCreateMenu);
  }

  methodInfoUpdateMenu = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.UpdateMenuResponse,
    (request: menu_v2_menu_api_pb.UpdateMenuRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.UpdateMenuResponse.deserializeBinary
  );

  updateMenu(
    request: menu_v2_menu_api_pb.UpdateMenuRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.UpdateMenuResponse>;

  updateMenu(
    request: menu_v2_menu_api_pb.UpdateMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.UpdateMenuResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.UpdateMenuResponse>;

  updateMenu(
    request: menu_v2_menu_api_pb.UpdateMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.UpdateMenuResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/UpdateMenu',
        request,
        metadata || {},
        this.methodInfoUpdateMenu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/UpdateMenu',
    request,
    metadata || {},
    this.methodInfoUpdateMenu);
  }

  methodInfoDeleteMenu = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.DeleteMenuResponse,
    (request: menu_v2_menu_api_pb.DeleteMenuRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.DeleteMenuResponse.deserializeBinary
  );

  deleteMenu(
    request: menu_v2_menu_api_pb.DeleteMenuRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.DeleteMenuResponse>;

  deleteMenu(
    request: menu_v2_menu_api_pb.DeleteMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.DeleteMenuResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.DeleteMenuResponse>;

  deleteMenu(
    request: menu_v2_menu_api_pb.DeleteMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.DeleteMenuResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/DeleteMenu',
        request,
        metadata || {},
        this.methodInfoDeleteMenu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/DeleteMenu',
    request,
    metadata || {},
    this.methodInfoDeleteMenu);
  }

  methodInfoCategory = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.CategoryDetailsResponse,
    (request: menu_v2_menu_api_pb.CategoryDetailsRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.CategoryDetailsResponse.deserializeBinary
  );

  category(
    request: menu_v2_menu_api_pb.CategoryDetailsRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.CategoryDetailsResponse>;

  category(
    request: menu_v2_menu_api_pb.CategoryDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.CategoryDetailsResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.CategoryDetailsResponse>;

  category(
    request: menu_v2_menu_api_pb.CategoryDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.CategoryDetailsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/Category',
        request,
        metadata || {},
        this.methodInfoCategory,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/Category',
    request,
    metadata || {},
    this.methodInfoCategory);
  }

  methodInfoCategories = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.CategoriesResponse,
    (request: menu_v2_menu_api_pb.CategoriesRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.CategoriesResponse.deserializeBinary
  );

  categories(
    request: menu_v2_menu_api_pb.CategoriesRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.CategoriesResponse>;

  categories(
    request: menu_v2_menu_api_pb.CategoriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.CategoriesResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.CategoriesResponse>;

  categories(
    request: menu_v2_menu_api_pb.CategoriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.CategoriesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/Categories',
        request,
        metadata || {},
        this.methodInfoCategories,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/Categories',
    request,
    metadata || {},
    this.methodInfoCategories);
  }

  methodInfoCreateCategory = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.CreateCategoryResponse,
    (request: menu_v2_menu_api_pb.CreateCategoryRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.CreateCategoryResponse.deserializeBinary
  );

  createCategory(
    request: menu_v2_menu_api_pb.CreateCategoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.CreateCategoryResponse>;

  createCategory(
    request: menu_v2_menu_api_pb.CreateCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.CreateCategoryResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.CreateCategoryResponse>;

  createCategory(
    request: menu_v2_menu_api_pb.CreateCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.CreateCategoryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/CreateCategory',
        request,
        metadata || {},
        this.methodInfoCreateCategory,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/CreateCategory',
    request,
    metadata || {},
    this.methodInfoCreateCategory);
  }

  methodInfoUpdateCategory = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.UpdateCategoryResponse,
    (request: menu_v2_menu_api_pb.UpdateCategoryRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.UpdateCategoryResponse.deserializeBinary
  );

  updateCategory(
    request: menu_v2_menu_api_pb.UpdateCategoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.UpdateCategoryResponse>;

  updateCategory(
    request: menu_v2_menu_api_pb.UpdateCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.UpdateCategoryResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.UpdateCategoryResponse>;

  updateCategory(
    request: menu_v2_menu_api_pb.UpdateCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.UpdateCategoryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/UpdateCategory',
        request,
        metadata || {},
        this.methodInfoUpdateCategory,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/UpdateCategory',
    request,
    metadata || {},
    this.methodInfoUpdateCategory);
  }

  methodInfoDeleteCategory = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.DeleteCategoryResponse,
    (request: menu_v2_menu_api_pb.DeleteCategoryRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.DeleteCategoryResponse.deserializeBinary
  );

  deleteCategory(
    request: menu_v2_menu_api_pb.DeleteCategoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.DeleteCategoryResponse>;

  deleteCategory(
    request: menu_v2_menu_api_pb.DeleteCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.DeleteCategoryResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.DeleteCategoryResponse>;

  deleteCategory(
    request: menu_v2_menu_api_pb.DeleteCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.DeleteCategoryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/DeleteCategory',
        request,
        metadata || {},
        this.methodInfoDeleteCategory,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/DeleteCategory',
    request,
    metadata || {},
    this.methodInfoDeleteCategory);
  }

  methodInfoLinkCategoryMenu = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.LinkCategoryMenuResponse,
    (request: menu_v2_menu_api_pb.LinkCategoryMenuRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.LinkCategoryMenuResponse.deserializeBinary
  );

  linkCategoryMenu(
    request: menu_v2_menu_api_pb.LinkCategoryMenuRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.LinkCategoryMenuResponse>;

  linkCategoryMenu(
    request: menu_v2_menu_api_pb.LinkCategoryMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.LinkCategoryMenuResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.LinkCategoryMenuResponse>;

  linkCategoryMenu(
    request: menu_v2_menu_api_pb.LinkCategoryMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.LinkCategoryMenuResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/LinkCategoryMenu',
        request,
        metadata || {},
        this.methodInfoLinkCategoryMenu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/LinkCategoryMenu',
    request,
    metadata || {},
    this.methodInfoLinkCategoryMenu);
  }

  methodInfoProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.ProductDetailsResponse,
    (request: menu_v2_menu_api_pb.ProductDetailsRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.ProductDetailsResponse.deserializeBinary
  );

  product(
    request: menu_v2_menu_api_pb.ProductDetailsRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.ProductDetailsResponse>;

  product(
    request: menu_v2_menu_api_pb.ProductDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.ProductDetailsResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.ProductDetailsResponse>;

  product(
    request: menu_v2_menu_api_pb.ProductDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.ProductDetailsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/Product',
        request,
        metadata || {},
        this.methodInfoProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/Product',
    request,
    metadata || {},
    this.methodInfoProduct);
  }

  methodInfoProducts = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.ProductsResponse,
    (request: menu_v2_menu_api_pb.ProductsRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.ProductsResponse.deserializeBinary
  );

  products(
    request: menu_v2_menu_api_pb.ProductsRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.ProductsResponse>;

  products(
    request: menu_v2_menu_api_pb.ProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.ProductsResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.ProductsResponse>;

  products(
    request: menu_v2_menu_api_pb.ProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.ProductsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/Products',
        request,
        metadata || {},
        this.methodInfoProducts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/Products',
    request,
    metadata || {},
    this.methodInfoProducts);
  }

  methodInfoCreateProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.CreateProductResponse,
    (request: menu_v2_menu_api_pb.CreateProductRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.CreateProductResponse.deserializeBinary
  );

  createProduct(
    request: menu_v2_menu_api_pb.CreateProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.CreateProductResponse>;

  createProduct(
    request: menu_v2_menu_api_pb.CreateProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.CreateProductResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.CreateProductResponse>;

  createProduct(
    request: menu_v2_menu_api_pb.CreateProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.CreateProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/CreateProduct',
        request,
        metadata || {},
        this.methodInfoCreateProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/CreateProduct',
    request,
    metadata || {},
    this.methodInfoCreateProduct);
  }

  methodInfoUpdateProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.UpdateProductResponse,
    (request: menu_v2_menu_api_pb.UpdateProductRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.UpdateProductResponse.deserializeBinary
  );

  updateProduct(
    request: menu_v2_menu_api_pb.UpdateProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.UpdateProductResponse>;

  updateProduct(
    request: menu_v2_menu_api_pb.UpdateProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.UpdateProductResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.UpdateProductResponse>;

  updateProduct(
    request: menu_v2_menu_api_pb.UpdateProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.UpdateProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/UpdateProduct',
        request,
        metadata || {},
        this.methodInfoUpdateProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/UpdateProduct',
    request,
    metadata || {},
    this.methodInfoUpdateProduct);
  }

  methodInfoDeleteProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.DeleteProductResponse,
    (request: menu_v2_menu_api_pb.DeleteProductRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.DeleteProductResponse.deserializeBinary
  );

  deleteProduct(
    request: menu_v2_menu_api_pb.DeleteProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.DeleteProductResponse>;

  deleteProduct(
    request: menu_v2_menu_api_pb.DeleteProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.DeleteProductResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.DeleteProductResponse>;

  deleteProduct(
    request: menu_v2_menu_api_pb.DeleteProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.DeleteProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/DeleteProduct',
        request,
        metadata || {},
        this.methodInfoDeleteProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/DeleteProduct',
    request,
    metadata || {},
    this.methodInfoDeleteProduct);
  }

  methodInfoLinkProductCategory = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.LinkProductCategoryResponse,
    (request: menu_v2_menu_api_pb.LinkProductCategoryRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.LinkProductCategoryResponse.deserializeBinary
  );

  linkProductCategory(
    request: menu_v2_menu_api_pb.LinkProductCategoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.LinkProductCategoryResponse>;

  linkProductCategory(
    request: menu_v2_menu_api_pb.LinkProductCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.LinkProductCategoryResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.LinkProductCategoryResponse>;

  linkProductCategory(
    request: menu_v2_menu_api_pb.LinkProductCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.LinkProductCategoryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/LinkProductCategory',
        request,
        metadata || {},
        this.methodInfoLinkProductCategory,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/LinkProductCategory',
    request,
    metadata || {},
    this.methodInfoLinkProductCategory);
  }

  methodInfoCountries = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.CountriesResponse,
    (request: menu_v2_menu_api_pb.CountriesRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.CountriesResponse.deserializeBinary
  );

  countries(
    request: menu_v2_menu_api_pb.CountriesRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.CountriesResponse>;

  countries(
    request: menu_v2_menu_api_pb.CountriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.CountriesResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.CountriesResponse>;

  countries(
    request: menu_v2_menu_api_pb.CountriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.CountriesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/Countries',
        request,
        metadata || {},
        this.methodInfoCountries,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/Countries',
    request,
    metadata || {},
    this.methodInfoCountries);
  }

  methodInfoSetStatusMessage = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v2_menu_api_pb.SetStatusMessageResponse,
    (request: menu_v2_menu_api_pb.SetStatusMessageRequest) => {
      return request.serializeBinary();
    },
    menu_v2_menu_api_pb.SetStatusMessageResponse.deserializeBinary
  );

  setStatusMessage(
    request: menu_v2_menu_api_pb.SetStatusMessageRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v2_menu_api_pb.SetStatusMessageResponse>;

  setStatusMessage(
    request: menu_v2_menu_api_pb.SetStatusMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.SetStatusMessageResponse) => void): grpcWeb.ClientReadableStream<menu_v2_menu_api_pb.SetStatusMessageResponse>;

  setStatusMessage(
    request: menu_v2_menu_api_pb.SetStatusMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v2_menu_api_pb.SetStatusMessageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v2.MenuDataApi/SetStatusMessage',
        request,
        metadata || {},
        this.methodInfoSetStatusMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v2.MenuDataApi/SetStatusMessage',
    request,
    metadata || {},
    this.methodInfoSetStatusMessage);
  }

}

