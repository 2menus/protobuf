/**
 * @fileoverview gRPC-Web generated client stub for admin.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as admin_v1_admin_api_pb from '../../admin/v1/admin_api_pb';


export class AdminDataLoaderClient {
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

  methodInfoCreateMenu = new grpcWeb.AbstractClientBase.MethodInfo(
    admin_v1_admin_api_pb.CreateMenuResponse,
    (request: admin_v1_admin_api_pb.CreateMenuRequest) => {
      return request.serializeBinary();
    },
    admin_v1_admin_api_pb.CreateMenuResponse.deserializeBinary
  );

  createMenu(
    request: admin_v1_admin_api_pb.CreateMenuRequest,
    metadata: grpcWeb.Metadata | null): Promise<admin_v1_admin_api_pb.CreateMenuResponse>;

  createMenu(
    request: admin_v1_admin_api_pb.CreateMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.CreateMenuResponse) => void): grpcWeb.ClientReadableStream<admin_v1_admin_api_pb.CreateMenuResponse>;

  createMenu(
    request: admin_v1_admin_api_pb.CreateMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.CreateMenuResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.AdminDataLoader/CreateMenu',
        request,
        metadata || {},
        this.methodInfoCreateMenu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.AdminDataLoader/CreateMenu',
    request,
    metadata || {},
    this.methodInfoCreateMenu);
  }

  methodInfoUpdateMenu = new grpcWeb.AbstractClientBase.MethodInfo(
    admin_v1_admin_api_pb.UpdateMenuResponse,
    (request: admin_v1_admin_api_pb.UpdateMenuRequest) => {
      return request.serializeBinary();
    },
    admin_v1_admin_api_pb.UpdateMenuResponse.deserializeBinary
  );

  updateMenu(
    request: admin_v1_admin_api_pb.UpdateMenuRequest,
    metadata: grpcWeb.Metadata | null): Promise<admin_v1_admin_api_pb.UpdateMenuResponse>;

  updateMenu(
    request: admin_v1_admin_api_pb.UpdateMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.UpdateMenuResponse) => void): grpcWeb.ClientReadableStream<admin_v1_admin_api_pb.UpdateMenuResponse>;

  updateMenu(
    request: admin_v1_admin_api_pb.UpdateMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.UpdateMenuResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.AdminDataLoader/UpdateMenu',
        request,
        metadata || {},
        this.methodInfoUpdateMenu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.AdminDataLoader/UpdateMenu',
    request,
    metadata || {},
    this.methodInfoUpdateMenu);
  }

  methodInfoDeleteMenu = new grpcWeb.AbstractClientBase.MethodInfo(
    admin_v1_admin_api_pb.DeleteMenuResponse,
    (request: admin_v1_admin_api_pb.DeleteMenuRequest) => {
      return request.serializeBinary();
    },
    admin_v1_admin_api_pb.DeleteMenuResponse.deserializeBinary
  );

  deleteMenu(
    request: admin_v1_admin_api_pb.DeleteMenuRequest,
    metadata: grpcWeb.Metadata | null): Promise<admin_v1_admin_api_pb.DeleteMenuResponse>;

  deleteMenu(
    request: admin_v1_admin_api_pb.DeleteMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.DeleteMenuResponse) => void): grpcWeb.ClientReadableStream<admin_v1_admin_api_pb.DeleteMenuResponse>;

  deleteMenu(
    request: admin_v1_admin_api_pb.DeleteMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.DeleteMenuResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.AdminDataLoader/DeleteMenu',
        request,
        metadata || {},
        this.methodInfoDeleteMenu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.AdminDataLoader/DeleteMenu',
    request,
    metadata || {},
    this.methodInfoDeleteMenu);
  }

  methodInfoCreateCategory = new grpcWeb.AbstractClientBase.MethodInfo(
    admin_v1_admin_api_pb.CreateCategoryResponse,
    (request: admin_v1_admin_api_pb.CreateCategoryRequest) => {
      return request.serializeBinary();
    },
    admin_v1_admin_api_pb.CreateCategoryResponse.deserializeBinary
  );

  createCategory(
    request: admin_v1_admin_api_pb.CreateCategoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<admin_v1_admin_api_pb.CreateCategoryResponse>;

  createCategory(
    request: admin_v1_admin_api_pb.CreateCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.CreateCategoryResponse) => void): grpcWeb.ClientReadableStream<admin_v1_admin_api_pb.CreateCategoryResponse>;

  createCategory(
    request: admin_v1_admin_api_pb.CreateCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.CreateCategoryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.AdminDataLoader/CreateCategory',
        request,
        metadata || {},
        this.methodInfoCreateCategory,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.AdminDataLoader/CreateCategory',
    request,
    metadata || {},
    this.methodInfoCreateCategory);
  }

  methodInfoUpdateCategory = new grpcWeb.AbstractClientBase.MethodInfo(
    admin_v1_admin_api_pb.UpdateCategoryResponse,
    (request: admin_v1_admin_api_pb.UpdateCategoryRequest) => {
      return request.serializeBinary();
    },
    admin_v1_admin_api_pb.UpdateCategoryResponse.deserializeBinary
  );

  updateCategory(
    request: admin_v1_admin_api_pb.UpdateCategoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<admin_v1_admin_api_pb.UpdateCategoryResponse>;

  updateCategory(
    request: admin_v1_admin_api_pb.UpdateCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.UpdateCategoryResponse) => void): grpcWeb.ClientReadableStream<admin_v1_admin_api_pb.UpdateCategoryResponse>;

  updateCategory(
    request: admin_v1_admin_api_pb.UpdateCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.UpdateCategoryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.AdminDataLoader/UpdateCategory',
        request,
        metadata || {},
        this.methodInfoUpdateCategory,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.AdminDataLoader/UpdateCategory',
    request,
    metadata || {},
    this.methodInfoUpdateCategory);
  }

  methodInfoDeleteCategory = new grpcWeb.AbstractClientBase.MethodInfo(
    admin_v1_admin_api_pb.DeleteCategoryResponse,
    (request: admin_v1_admin_api_pb.DeleteCategoryRequest) => {
      return request.serializeBinary();
    },
    admin_v1_admin_api_pb.DeleteCategoryResponse.deserializeBinary
  );

  deleteCategory(
    request: admin_v1_admin_api_pb.DeleteCategoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<admin_v1_admin_api_pb.DeleteCategoryResponse>;

  deleteCategory(
    request: admin_v1_admin_api_pb.DeleteCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.DeleteCategoryResponse) => void): grpcWeb.ClientReadableStream<admin_v1_admin_api_pb.DeleteCategoryResponse>;

  deleteCategory(
    request: admin_v1_admin_api_pb.DeleteCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.DeleteCategoryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.AdminDataLoader/DeleteCategory',
        request,
        metadata || {},
        this.methodInfoDeleteCategory,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.AdminDataLoader/DeleteCategory',
    request,
    metadata || {},
    this.methodInfoDeleteCategory);
  }

  methodInfoCreateProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    admin_v1_admin_api_pb.CreateProductResponse,
    (request: admin_v1_admin_api_pb.CreateProductRequest) => {
      return request.serializeBinary();
    },
    admin_v1_admin_api_pb.CreateProductResponse.deserializeBinary
  );

  createProduct(
    request: admin_v1_admin_api_pb.CreateProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<admin_v1_admin_api_pb.CreateProductResponse>;

  createProduct(
    request: admin_v1_admin_api_pb.CreateProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.CreateProductResponse) => void): grpcWeb.ClientReadableStream<admin_v1_admin_api_pb.CreateProductResponse>;

  createProduct(
    request: admin_v1_admin_api_pb.CreateProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.CreateProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.AdminDataLoader/CreateProduct',
        request,
        metadata || {},
        this.methodInfoCreateProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.AdminDataLoader/CreateProduct',
    request,
    metadata || {},
    this.methodInfoCreateProduct);
  }

  methodInfoUpdateProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    admin_v1_admin_api_pb.UpdateProductResponse,
    (request: admin_v1_admin_api_pb.UpdateProductRequest) => {
      return request.serializeBinary();
    },
    admin_v1_admin_api_pb.UpdateProductResponse.deserializeBinary
  );

  updateProduct(
    request: admin_v1_admin_api_pb.UpdateProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<admin_v1_admin_api_pb.UpdateProductResponse>;

  updateProduct(
    request: admin_v1_admin_api_pb.UpdateProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.UpdateProductResponse) => void): grpcWeb.ClientReadableStream<admin_v1_admin_api_pb.UpdateProductResponse>;

  updateProduct(
    request: admin_v1_admin_api_pb.UpdateProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.UpdateProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.AdminDataLoader/UpdateProduct',
        request,
        metadata || {},
        this.methodInfoUpdateProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.AdminDataLoader/UpdateProduct',
    request,
    metadata || {},
    this.methodInfoUpdateProduct);
  }

  methodInfoDeleteProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    admin_v1_admin_api_pb.DeleteProductResponse,
    (request: admin_v1_admin_api_pb.DeleteProductRequest) => {
      return request.serializeBinary();
    },
    admin_v1_admin_api_pb.DeleteProductResponse.deserializeBinary
  );

  deleteProduct(
    request: admin_v1_admin_api_pb.DeleteProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<admin_v1_admin_api_pb.DeleteProductResponse>;

  deleteProduct(
    request: admin_v1_admin_api_pb.DeleteProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.DeleteProductResponse) => void): grpcWeb.ClientReadableStream<admin_v1_admin_api_pb.DeleteProductResponse>;

  deleteProduct(
    request: admin_v1_admin_api_pb.DeleteProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: admin_v1_admin_api_pb.DeleteProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.AdminDataLoader/DeleteProduct',
        request,
        metadata || {},
        this.methodInfoDeleteProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.AdminDataLoader/DeleteProduct',
    request,
    metadata || {},
    this.methodInfoDeleteProduct);
  }

}

