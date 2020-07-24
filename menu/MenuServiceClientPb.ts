/**
 * @fileoverview gRPC-Web generated client stub for menu
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import {
  Account,
  AccountDetailsRequest,
  AccountListRequest,
  AccountListResponse,
  FindMenuRequest,
  Item,
  ItemDetailsRequest,
  ItemListRequest,
  ItemListResponse,
  Menu,
  MenuDetailsRequest,
  MenuListRequest,
  MenuListResponse,
  Section,
  SectionDetailsRequest,
  SectionListRequest,
  SectionListResponse} from './menu_pb';

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

  methodInfoAccountList = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountListResponse,
    (request: AccountListRequest) => {
      return request.serializeBinary();
    },
    AccountListResponse.deserializeBinary
  );

  accountList(
    request: AccountListRequest,
    metadata: grpcWeb.Metadata | null): Promise<AccountListResponse>;

  accountList(
    request: AccountListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountListResponse) => void): grpcWeb.ClientReadableStream<AccountListResponse>;

  accountList(
    request: AccountListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: AccountListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.MenuDataProducer/AccountList',
        request,
        metadata || {},
        this.methodInfoAccountList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.MenuDataProducer/AccountList',
    request,
    metadata || {},
    this.methodInfoAccountList);
  }

  methodInfoAccountDetails = new grpcWeb.AbstractClientBase.MethodInfo(
    Account,
    (request: AccountDetailsRequest) => {
      return request.serializeBinary();
    },
    Account.deserializeBinary
  );

  accountDetails(
    request: AccountDetailsRequest,
    metadata: grpcWeb.Metadata | null): Promise<Account>;

  accountDetails(
    request: AccountDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Account) => void): grpcWeb.ClientReadableStream<Account>;

  accountDetails(
    request: AccountDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Account) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.MenuDataProducer/AccountDetails',
        request,
        metadata || {},
        this.methodInfoAccountDetails,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.MenuDataProducer/AccountDetails',
    request,
    metadata || {},
    this.methodInfoAccountDetails);
  }

  methodInfoMenuList = new grpcWeb.AbstractClientBase.MethodInfo(
    MenuListResponse,
    (request: MenuListRequest) => {
      return request.serializeBinary();
    },
    MenuListResponse.deserializeBinary
  );

  menuList(
    request: MenuListRequest,
    metadata: grpcWeb.Metadata | null): Promise<MenuListResponse>;

  menuList(
    request: MenuListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MenuListResponse) => void): grpcWeb.ClientReadableStream<MenuListResponse>;

  menuList(
    request: MenuListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: MenuListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.MenuDataProducer/MenuList',
        request,
        metadata || {},
        this.methodInfoMenuList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.MenuDataProducer/MenuList',
    request,
    metadata || {},
    this.methodInfoMenuList);
  }

  methodInfoMenuDetails = new grpcWeb.AbstractClientBase.MethodInfo(
    Menu,
    (request: MenuDetailsRequest) => {
      return request.serializeBinary();
    },
    Menu.deserializeBinary
  );

  menuDetails(
    request: MenuDetailsRequest,
    metadata: grpcWeb.Metadata | null): Promise<Menu>;

  menuDetails(
    request: MenuDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Menu) => void): grpcWeb.ClientReadableStream<Menu>;

  menuDetails(
    request: MenuDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Menu) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.MenuDataProducer/MenuDetails',
        request,
        metadata || {},
        this.methodInfoMenuDetails,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.MenuDataProducer/MenuDetails',
    request,
    metadata || {},
    this.methodInfoMenuDetails);
  }

  methodInfoFindMenu = new grpcWeb.AbstractClientBase.MethodInfo(
    Menu,
    (request: FindMenuRequest) => {
      return request.serializeBinary();
    },
    Menu.deserializeBinary
  );

  findMenu(
    request: FindMenuRequest,
    metadata: grpcWeb.Metadata | null): Promise<Menu>;

  findMenu(
    request: FindMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Menu) => void): grpcWeb.ClientReadableStream<Menu>;

  findMenu(
    request: FindMenuRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Menu) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.MenuDataProducer/FindMenu',
        request,
        metadata || {},
        this.methodInfoFindMenu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.MenuDataProducer/FindMenu',
    request,
    metadata || {},
    this.methodInfoFindMenu);
  }

  methodInfoSectionList = new grpcWeb.AbstractClientBase.MethodInfo(
    SectionListResponse,
    (request: SectionListRequest) => {
      return request.serializeBinary();
    },
    SectionListResponse.deserializeBinary
  );

  sectionList(
    request: SectionListRequest,
    metadata: grpcWeb.Metadata | null): Promise<SectionListResponse>;

  sectionList(
    request: SectionListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SectionListResponse) => void): grpcWeb.ClientReadableStream<SectionListResponse>;

  sectionList(
    request: SectionListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: SectionListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.MenuDataProducer/SectionList',
        request,
        metadata || {},
        this.methodInfoSectionList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.MenuDataProducer/SectionList',
    request,
    metadata || {},
    this.methodInfoSectionList);
  }

  methodInfoSectionDetails = new grpcWeb.AbstractClientBase.MethodInfo(
    Section,
    (request: SectionDetailsRequest) => {
      return request.serializeBinary();
    },
    Section.deserializeBinary
  );

  sectionDetails(
    request: SectionDetailsRequest,
    metadata: grpcWeb.Metadata | null): Promise<Section>;

  sectionDetails(
    request: SectionDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Section) => void): grpcWeb.ClientReadableStream<Section>;

  sectionDetails(
    request: SectionDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Section) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.MenuDataProducer/SectionDetails',
        request,
        metadata || {},
        this.methodInfoSectionDetails,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.MenuDataProducer/SectionDetails',
    request,
    metadata || {},
    this.methodInfoSectionDetails);
  }

  methodInfoItemList = new grpcWeb.AbstractClientBase.MethodInfo(
    ItemListResponse,
    (request: ItemListRequest) => {
      return request.serializeBinary();
    },
    ItemListResponse.deserializeBinary
  );

  itemList(
    request: ItemListRequest,
    metadata: grpcWeb.Metadata | null): Promise<ItemListResponse>;

  itemList(
    request: ItemListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ItemListResponse) => void): grpcWeb.ClientReadableStream<ItemListResponse>;

  itemList(
    request: ItemListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ItemListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.MenuDataProducer/ItemList',
        request,
        metadata || {},
        this.methodInfoItemList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.MenuDataProducer/ItemList',
    request,
    metadata || {},
    this.methodInfoItemList);
  }

  methodInfoItemDetails = new grpcWeb.AbstractClientBase.MethodInfo(
    Item,
    (request: ItemDetailsRequest) => {
      return request.serializeBinary();
    },
    Item.deserializeBinary
  );

  itemDetails(
    request: ItemDetailsRequest,
    metadata: grpcWeb.Metadata | null): Promise<Item>;

  itemDetails(
    request: ItemDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Item) => void): grpcWeb.ClientReadableStream<Item>;

  itemDetails(
    request: ItemDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Item) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/menu.MenuDataProducer/ItemDetails',
        request,
        metadata || {},
        this.methodInfoItemDetails,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/menu.MenuDataProducer/ItemDetails',
    request,
    metadata || {},
    this.methodInfoItemDetails);
  }

}

