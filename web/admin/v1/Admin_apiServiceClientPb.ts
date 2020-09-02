/**
 * @fileoverview gRPC-Web generated client stub for admin.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import {
  CreateCategoryRequest,
  CreateCategoryResponse,
  CreateMenuRequest,
  CreateMenuResponse,
  CreateProductRequest,
  CreateProductResponse,
  DeleteCategoryRequest,
  DeleteCategoryResponse,
  DeleteMenuRequest,
  DeleteMenuResponse,
  DeleteProductRequest,
  DeleteProductResponse,
  UpdateCategoryRequest,
  UpdateCategoryResponse,
  UpdateMenuRequest,
  UpdateMenuResponse,
  UpdateProductRequest,
  UpdateProductResponse} from './admin_api_pb';

export class AdminDataLoaderClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateMenu = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateMenuResponse,
    (request: CreateMenuRequest) => {
      return request.serializeBinary();
    },
    CreateMenuResponse.deserializeBinary
  );

  createMenu(
    request: CreateMenuRequest,
    metadata: grpcWeb.Metadata | null): Promise<CreateMenuResponse>;

  createMenu(
    request: CreateMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateMenuResponse) => void): grpcWeb.ClientReadableStream<CreateMenuResponse>;

  createMenu(
    request: CreateMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: CreateMenuResponse) => void) {
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
    UpdateMenuResponse,
    (request: UpdateMenuRequest) => {
      return request.serializeBinary();
    },
    UpdateMenuResponse.deserializeBinary
  );

  updateMenu(
    request: UpdateMenuRequest,
    metadata: grpcWeb.Metadata | null): Promise<UpdateMenuResponse>;

  updateMenu(
    request: UpdateMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateMenuResponse) => void): grpcWeb.ClientReadableStream<UpdateMenuResponse>;

  updateMenu(
    request: UpdateMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UpdateMenuResponse) => void) {
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
    DeleteMenuResponse,
    (request: DeleteMenuRequest) => {
      return request.serializeBinary();
    },
    DeleteMenuResponse.deserializeBinary
  );

  deleteMenu(
    request: DeleteMenuRequest,
    metadata: grpcWeb.Metadata | null): Promise<DeleteMenuResponse>;

  deleteMenu(
    request: DeleteMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteMenuResponse) => void): grpcWeb.ClientReadableStream<DeleteMenuResponse>;

  deleteMenu(
    request: DeleteMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: DeleteMenuResponse) => void) {
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
    CreateCategoryResponse,
    (request: CreateCategoryRequest) => {
      return request.serializeBinary();
    },
    CreateCategoryResponse.deserializeBinary
  );

  createCategory(
    request: CreateCategoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<CreateCategoryResponse>;

  createCategory(
    request: CreateCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateCategoryResponse) => void): grpcWeb.ClientReadableStream<CreateCategoryResponse>;

  createCategory(
    request: CreateCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: CreateCategoryResponse) => void) {
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
    UpdateCategoryResponse,
    (request: UpdateCategoryRequest) => {
      return request.serializeBinary();
    },
    UpdateCategoryResponse.deserializeBinary
  );

  updateCategory(
    request: UpdateCategoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<UpdateCategoryResponse>;

  updateCategory(
    request: UpdateCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateCategoryResponse) => void): grpcWeb.ClientReadableStream<UpdateCategoryResponse>;

  updateCategory(
    request: UpdateCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UpdateCategoryResponse) => void) {
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
    DeleteCategoryResponse,
    (request: DeleteCategoryRequest) => {
      return request.serializeBinary();
    },
    DeleteCategoryResponse.deserializeBinary
  );

  deleteCategory(
    request: DeleteCategoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<DeleteCategoryResponse>;

  deleteCategory(
    request: DeleteCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteCategoryResponse) => void): grpcWeb.ClientReadableStream<DeleteCategoryResponse>;

  deleteCategory(
    request: DeleteCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: DeleteCategoryResponse) => void) {
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
    CreateProductResponse,
    (request: CreateProductRequest) => {
      return request.serializeBinary();
    },
    CreateProductResponse.deserializeBinary
  );

  createProduct(
    request: CreateProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<CreateProductResponse>;

  createProduct(
    request: CreateProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateProductResponse) => void): grpcWeb.ClientReadableStream<CreateProductResponse>;

  createProduct(
    request: CreateProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: CreateProductResponse) => void) {
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
    UpdateProductResponse,
    (request: UpdateProductRequest) => {
      return request.serializeBinary();
    },
    UpdateProductResponse.deserializeBinary
  );

  updateProduct(
    request: UpdateProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<UpdateProductResponse>;

  updateProduct(
    request: UpdateProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateProductResponse) => void): grpcWeb.ClientReadableStream<UpdateProductResponse>;

  updateProduct(
    request: UpdateProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UpdateProductResponse) => void) {
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
    DeleteProductResponse,
    (request: DeleteProductRequest) => {
      return request.serializeBinary();
    },
    DeleteProductResponse.deserializeBinary
  );

  deleteProduct(
    request: DeleteProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<DeleteProductResponse>;

  deleteProduct(
    request: DeleteProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteProductResponse) => void): grpcWeb.ClientReadableStream<DeleteProductResponse>;

  deleteProduct(
    request: DeleteProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: DeleteProductResponse) => void) {
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

