/**
 * @fileoverview gRPC-Web generated client stub for menu.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as menu_v1_menu_api_pb from '../../menu/v1/menu_api_pb';


export class MenuDataProducerClient {
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

  methodInfoMenus = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v1_menu_api_pb.MenusResponse,
    (request: menu_v1_menu_api_pb.MenusRequest) => {
      return request.serializeBinary();
    },
    menu_v1_menu_api_pb.MenusResponse.deserializeBinary
  );

  menus(
    request: menu_v1_menu_api_pb.MenusRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v1_menu_api_pb.MenusResponse>;

  menus(
    request: menu_v1_menu_api_pb.MenusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v1_menu_api_pb.MenusResponse) => void): grpcWeb.ClientReadableStream<menu_v1_menu_api_pb.MenusResponse>;

  menus(
    request: menu_v1_menu_api_pb.MenusRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v1_menu_api_pb.MenusResponse) => void) {
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
    menu_v1_menu_api_pb.MenuDetailsResponse,
    (request: menu_v1_menu_api_pb.MenuDetailsRequest) => {
      return request.serializeBinary();
    },
    menu_v1_menu_api_pb.MenuDetailsResponse.deserializeBinary
  );

  menuDetails(
    request: menu_v1_menu_api_pb.MenuDetailsRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v1_menu_api_pb.MenuDetailsResponse>;

  menuDetails(
    request: menu_v1_menu_api_pb.MenuDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v1_menu_api_pb.MenuDetailsResponse) => void): grpcWeb.ClientReadableStream<menu_v1_menu_api_pb.MenuDetailsResponse>;

  menuDetails(
    request: menu_v1_menu_api_pb.MenuDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v1_menu_api_pb.MenuDetailsResponse) => void) {
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
    menu_v1_menu_api_pb.CategoriesResponse,
    (request: menu_v1_menu_api_pb.CategoriesRequest) => {
      return request.serializeBinary();
    },
    menu_v1_menu_api_pb.CategoriesResponse.deserializeBinary
  );

  categories(
    request: menu_v1_menu_api_pb.CategoriesRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v1_menu_api_pb.CategoriesResponse>;

  categories(
    request: menu_v1_menu_api_pb.CategoriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v1_menu_api_pb.CategoriesResponse) => void): grpcWeb.ClientReadableStream<menu_v1_menu_api_pb.CategoriesResponse>;

  categories(
    request: menu_v1_menu_api_pb.CategoriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v1_menu_api_pb.CategoriesResponse) => void) {
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
    menu_v1_menu_api_pb.CategoryDetailsResponse,
    (request: menu_v1_menu_api_pb.CategoryDetailsRequest) => {
      return request.serializeBinary();
    },
    menu_v1_menu_api_pb.CategoryDetailsResponse.deserializeBinary
  );

  categoryDetails(
    request: menu_v1_menu_api_pb.CategoryDetailsRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v1_menu_api_pb.CategoryDetailsResponse>;

  categoryDetails(
    request: menu_v1_menu_api_pb.CategoryDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v1_menu_api_pb.CategoryDetailsResponse) => void): grpcWeb.ClientReadableStream<menu_v1_menu_api_pb.CategoryDetailsResponse>;

  categoryDetails(
    request: menu_v1_menu_api_pb.CategoryDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v1_menu_api_pb.CategoryDetailsResponse) => void) {
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
    menu_v1_menu_api_pb.ProductsResponse,
    (request: menu_v1_menu_api_pb.ProductsRequest) => {
      return request.serializeBinary();
    },
    menu_v1_menu_api_pb.ProductsResponse.deserializeBinary
  );

  products(
    request: menu_v1_menu_api_pb.ProductsRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v1_menu_api_pb.ProductsResponse>;

  products(
    request: menu_v1_menu_api_pb.ProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v1_menu_api_pb.ProductsResponse) => void): grpcWeb.ClientReadableStream<menu_v1_menu_api_pb.ProductsResponse>;

  products(
    request: menu_v1_menu_api_pb.ProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v1_menu_api_pb.ProductsResponse) => void) {
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
    menu_v1_menu_api_pb.ProductDetailsResponse,
    (request: menu_v1_menu_api_pb.ProductDetailsRequest) => {
      return request.serializeBinary();
    },
    menu_v1_menu_api_pb.ProductDetailsResponse.deserializeBinary
  );

  productDetails(
    request: menu_v1_menu_api_pb.ProductDetailsRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v1_menu_api_pb.ProductDetailsResponse>;

  productDetails(
    request: menu_v1_menu_api_pb.ProductDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v1_menu_api_pb.ProductDetailsResponse) => void): grpcWeb.ClientReadableStream<menu_v1_menu_api_pb.ProductDetailsResponse>;

  productDetails(
    request: menu_v1_menu_api_pb.ProductDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v1_menu_api_pb.ProductDetailsResponse) => void) {
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

  methodInfoCountries = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v1_menu_api_pb.CountriesResponse,
    (request: menu_v1_menu_api_pb.CountriesRequest) => {
      return request.serializeBinary();
    },
    menu_v1_menu_api_pb.CountriesResponse.deserializeBinary
  );

  countries(
    request: menu_v1_menu_api_pb.CountriesRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v1_menu_api_pb.CountriesResponse>;

  countries(
    request: menu_v1_menu_api_pb.CountriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v1_menu_api_pb.CountriesResponse) => void): grpcWeb.ClientReadableStream<menu_v1_menu_api_pb.CountriesResponse>;

  countries(
    request: menu_v1_menu_api_pb.CountriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v1_menu_api_pb.CountriesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v1.MenuDataProducer/Countries',
        request,
        metadata || {},
        this.methodInfoCountries,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v1.MenuDataProducer/Countries',
    request,
    metadata || {},
    this.methodInfoCountries);
  }

}

