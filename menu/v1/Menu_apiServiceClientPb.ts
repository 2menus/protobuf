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
  ItemDetailsRequest,
  ItemsRequest,
  ItemsResponse,
  MenuDetailsRequest,
  MenusRequest,
  MenusResponse,
  SectionDetailsRequest,
  SectionsRequest,
  SectionsResponse} from './menu_api_pb';

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

  methodInfoSections = new grpcWeb.AbstractClientBase.MethodInfo(
    SectionsResponse,
    (request: SectionsRequest) => {
      return request.serializeBinary();
    },
    SectionsResponse.deserializeBinary
  );

  sections(
    request: SectionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<SectionsResponse>;

  sections(
    request: SectionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SectionsResponse) => void): grpcWeb.ClientReadableStream<SectionsResponse>;

  sections(
    request: SectionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: SectionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v1.MenuDataProducer/Sections',
        request,
        metadata || {},
        this.methodInfoSections,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v1.MenuDataProducer/Sections',
    request,
    metadata || {},
    this.methodInfoSections);
  }

  methodInfoSectionDetails = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v1_menu_pb.Section,
    (request: SectionDetailsRequest) => {
      return request.serializeBinary();
    },
    menu_v1_menu_pb.Section.deserializeBinary
  );

  sectionDetails(
    request: SectionDetailsRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v1_menu_pb.Section>;

  sectionDetails(
    request: SectionDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v1_menu_pb.Section) => void): grpcWeb.ClientReadableStream<menu_v1_menu_pb.Section>;

  sectionDetails(
    request: SectionDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v1_menu_pb.Section) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v1.MenuDataProducer/SectionDetails',
        request,
        metadata || {},
        this.methodInfoSectionDetails,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v1.MenuDataProducer/SectionDetails',
    request,
    metadata || {},
    this.methodInfoSectionDetails);
  }

  methodInfoItems = new grpcWeb.AbstractClientBase.MethodInfo(
    ItemsResponse,
    (request: ItemsRequest) => {
      return request.serializeBinary();
    },
    ItemsResponse.deserializeBinary
  );

  items(
    request: ItemsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ItemsResponse>;

  items(
    request: ItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ItemsResponse) => void): grpcWeb.ClientReadableStream<ItemsResponse>;

  items(
    request: ItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ItemsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v1.MenuDataProducer/Items',
        request,
        metadata || {},
        this.methodInfoItems,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v1.MenuDataProducer/Items',
    request,
    metadata || {},
    this.methodInfoItems);
  }

  methodInfoItemDetails = new grpcWeb.AbstractClientBase.MethodInfo(
    menu_v1_menu_pb.Item,
    (request: ItemDetailsRequest) => {
      return request.serializeBinary();
    },
    menu_v1_menu_pb.Item.deserializeBinary
  );

  itemDetails(
    request: ItemDetailsRequest,
    metadata: grpcWeb.Metadata | null): Promise<menu_v1_menu_pb.Item>;

  itemDetails(
    request: ItemDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: menu_v1_menu_pb.Item) => void): grpcWeb.ClientReadableStream<menu_v1_menu_pb.Item>;

  itemDetails(
    request: ItemDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: menu_v1_menu_pb.Item) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.v1.MenuDataProducer/ItemDetails',
        request,
        metadata || {},
        this.methodInfoItemDetails,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.v1.MenuDataProducer/ItemDetails',
    request,
    metadata || {},
    this.methodInfoItemDetails);
  }

}

