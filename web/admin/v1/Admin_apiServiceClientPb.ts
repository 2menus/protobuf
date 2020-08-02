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
  CreateMenuRequest,
  CreateMenuResponse,
  DeleteMenuRequest,
  DeleteMenuResponse,
  UpdateMenuRequest,
  UpdateMenuResponse} from './admin_api_pb';

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

}

