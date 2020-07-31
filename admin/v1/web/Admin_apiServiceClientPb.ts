/**
 * @fileoverview gRPC-Web generated client stub for admin.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as menu_v1_menu_pb from './menu/v1/menu_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  CreateMenuRequest,
  DeleteMenuRequest,
  UpdateMenuRequest} from './admin_api_pb';

export class AdminClient {
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
    menu_v1_menu_pb.Menu,
    (request: CreateMenuRequest) => {
      return request.serializeBinary();
    },
    menu_v1_menu_pb.Menu.deserializeBinary
  );

  createMenu(
    request: CreateMenuRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v1_menu_pb.Menu>;

  createMenu(
    request: CreateMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v1_menu_pb.Menu) => void): grpcWeb.ClientReadableStream<menu_v1_menu_pb.Menu>;

  createMenu(
    request: CreateMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v1_menu_pb.Menu) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.Admin/CreateMenu',
        request,
        metadata || {},
        this.methodInfoCreateMenu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.Admin/CreateMenu',
    request,
    metadata || {},
    this.methodInfoCreateMenu);
  }

  methodInfoUpdateMenu = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v1_menu_pb.Menu,
    (request: UpdateMenuRequest) => {
      return request.serializeBinary();
    },
    menu_v1_menu_pb.Menu.deserializeBinary
  );

  updateMenu(
    request: UpdateMenuRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v1_menu_pb.Menu>;

  updateMenu(
    request: UpdateMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v1_menu_pb.Menu) => void): grpcWeb.ClientReadableStream<menu_v1_menu_pb.Menu>;

  updateMenu(
    request: UpdateMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v1_menu_pb.Menu) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.Admin/UpdateMenu',
        request,
        metadata || {},
        this.methodInfoUpdateMenu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.Admin/UpdateMenu',
    request,
    metadata || {},
    this.methodInfoUpdateMenu);
  }

  methodInfoDeleteMenu = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteMenuRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteMenu(
    request: DeleteMenuRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteMenu(
    request: DeleteMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteMenu(
    request: DeleteMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.Admin/DeleteMenu',
        request,
        metadata || {},
        this.methodInfoDeleteMenu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.Admin/DeleteMenu',
    request,
    metadata || {},
    this.methodInfoDeleteMenu);
  }

}

