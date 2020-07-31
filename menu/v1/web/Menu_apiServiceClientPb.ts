/**
 * @fileoverview gRPC-Web generated client stub for menu.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as menu_v1_menu_pb from './menu/v1/menu_pb';

import {
  CategoriesRequest,
  CategoriesResponse,
  CategoryDetailsRequest,
  MenuDetailsRequest,
  MenusRequest,
  MenusResponse,
  ProductDetailsRequest,
  ProductsRequest,
  ProductsResponse} from './menu_api_pb';

export class MenuDataProducerClient {
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

  methodInfoMenus = new grpcWeb.AbstractClientBase.MethodInfo(
    MenusResponse,
    (request: MenusRequest) => {
      return request.serializeBinary();
    },
    MenusResponse.deserializeBinary
  );

  menus(
    request: MenusRequest,
    metadata: grpcWeb.Metadata | null): Promise<MenusResponse>;

  menus(
    request: MenusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MenusResponse) => void): grpcWeb.ClientReadableStream<MenusResponse>;

  menus(
    request: MenusRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: MenusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v1.MenuDataProducer/Menus',
        request,
        metadata || {},
        this.methodInfoMenus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v1.MenuDataProducer/Menus',
    request,
    metadata || {},
    this.methodInfoMenus);
  }

  methodInfoMenuDetails = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v1_menu_pb.Menu,
    (request: MenuDetailsRequest) => {
      return request.serializeBinary();
    },
    menu_v1_menu_pb.Menu.deserializeBinary
  );

  menuDetails(
    request: MenuDetailsRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v1_menu_pb.Menu>;

  menuDetails(
    request: MenuDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v1_menu_pb.Menu) => void): grpcWeb.ClientReadableStream<menu_v1_menu_pb.Menu>;

  menuDetails(
    request: MenuDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v1_menu_pb.Menu) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v1.MenuDataProducer/MenuDetails',
        request,
        metadata || {},
        this.methodInfoMenuDetails,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v1.MenuDataProducer/MenuDetails',
    request,
    metadata || {},
    this.methodInfoMenuDetails);
  }

  methodInfoCategories = new grpcWeb.AbstractClientBase.MethodInfo(
    CategoriesResponse,
    (request: CategoriesRequest) => {
      return request.serializeBinary();
    },
    CategoriesResponse.deserializeBinary
  );

  categories(
    request: CategoriesRequest,
    metadata: grpcWeb.Metadata | null): Promise<CategoriesResponse>;

  categories(
    request: CategoriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CategoriesResponse) => void): grpcWeb.ClientReadableStream<CategoriesResponse>;

  categories(
    request: CategoriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: CategoriesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v1.MenuDataProducer/Categories',
        request,
        metadata || {},
        this.methodInfoCategories,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v1.MenuDataProducer/Categories',
    request,
    metadata || {},
    this.methodInfoCategories);
  }

  methodInfoCategoryDetails = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v1_menu_pb.Category,
    (request: CategoryDetailsRequest) => {
      return request.serializeBinary();
    },
    menu_v1_menu_pb.Category.deserializeBinary
  );

  categoryDetails(
    request: CategoryDetailsRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v1_menu_pb.Category>;

  categoryDetails(
    request: CategoryDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v1_menu_pb.Category) => void): grpcWeb.ClientReadableStream<menu_v1_menu_pb.Category>;

  categoryDetails(
    request: CategoryDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v1_menu_pb.Category) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v1.MenuDataProducer/CategoryDetails',
        request,
        metadata || {},
        this.methodInfoCategoryDetails,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v1.MenuDataProducer/CategoryDetails',
    request,
    metadata || {},
    this.methodInfoCategoryDetails);
  }

  methodInfoProducts = new grpcWeb.AbstractClientBase.MethodInfo(
    ProductsResponse,
    (request: ProductsRequest) => {
      return request.serializeBinary();
    },
    ProductsResponse.deserializeBinary
  );

  products(
    request: ProductsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ProductsResponse>;

  products(
    request: ProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ProductsResponse) => void): grpcWeb.ClientReadableStream<ProductsResponse>;

  products(
    request: ProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ProductsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v1.MenuDataProducer/Products',
        request,
        metadata || {},
        this.methodInfoProducts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v1.MenuDataProducer/Products',
    request,
    metadata || {},
    this.methodInfoProducts);
  }

  methodInfoProductDetails = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v1_menu_pb.Product,
    (request: ProductDetailsRequest) => {
      return request.serializeBinary();
    },
    menu_v1_menu_pb.Product.deserializeBinary
  );

  productDetails(
    request: ProductDetailsRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v1_menu_pb.Product>;

  productDetails(
    request: ProductDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v1_menu_pb.Product) => void): grpcWeb.ClientReadableStream<menu_v1_menu_pb.Product>;

  productDetails(
    request: ProductDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v1_menu_pb.Product) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v1.MenuDataProducer/ProductDetails',
        request,
        metadata || {},
        this.methodInfoProductDetails,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v1.MenuDataProducer/ProductDetails',
    request,
    metadata || {},
    this.methodInfoProductDetails);
  }

}

