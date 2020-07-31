import * as jspb from "google-protobuf"

import * as menu_v1_menu_pb from './menu/v1/menu_pb';

export class MenusRequest extends jspb.Message {
  getOwnerId(): string;
  setOwnerId(value: string): MenusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MenusRequest): MenusRequest.AsObject;
  static serializeBinaryToWriter(message: MenusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenusRequest;
  static deserializeBinaryFromReader(message: MenusRequest, reader: jspb.BinaryReader): MenusRequest;
}

export namespace MenusRequest {
  export type AsObject = {
    ownerId: string,
  }
}

export class MenusResponse extends jspb.Message {
  getMenuListList(): Array<menu_v1_menu_pb.Menu>;
  setMenuListList(value: Array<menu_v1_menu_pb.Menu>): MenusResponse;
  clearMenuListList(): MenusResponse;
  addMenuList(value?: menu_v1_menu_pb.Menu, index?: number): menu_v1_menu_pb.Menu;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MenusResponse): MenusResponse.AsObject;
  static serializeBinaryToWriter(message: MenusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenusResponse;
  static deserializeBinaryFromReader(message: MenusResponse, reader: jspb.BinaryReader): MenusResponse;
}

export namespace MenusResponse {
  export type AsObject = {
    menuListList: Array<menu_v1_menu_pb.Menu.AsObject>,
  }
}

export class MenuDetailsRequest extends jspb.Message {
  getMenuId(): string;
  setMenuId(value: string): MenuDetailsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenuDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MenuDetailsRequest): MenuDetailsRequest.AsObject;
  static serializeBinaryToWriter(message: MenuDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenuDetailsRequest;
  static deserializeBinaryFromReader(message: MenuDetailsRequest, reader: jspb.BinaryReader): MenuDetailsRequest;
}

export namespace MenuDetailsRequest {
  export type AsObject = {
    menuId: string,
  }
}

export class SectionsRequest extends jspb.Message {
  getMenuId(): string;
  setMenuId(value: string): SectionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SectionsRequest): SectionsRequest.AsObject;
  static serializeBinaryToWriter(message: SectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SectionsRequest;
  static deserializeBinaryFromReader(message: SectionsRequest, reader: jspb.BinaryReader): SectionsRequest;
}

export namespace SectionsRequest {
  export type AsObject = {
    menuId: string,
  }
}

export class SectionsResponse extends jspb.Message {
  getSectionListList(): Array<menu_v1_menu_pb.Section>;
  setSectionListList(value: Array<menu_v1_menu_pb.Section>): SectionsResponse;
  clearSectionListList(): SectionsResponse;
  addSectionList(value?: menu_v1_menu_pb.Section, index?: number): menu_v1_menu_pb.Section;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SectionsResponse): SectionsResponse.AsObject;
  static serializeBinaryToWriter(message: SectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SectionsResponse;
  static deserializeBinaryFromReader(message: SectionsResponse, reader: jspb.BinaryReader): SectionsResponse;
}

export namespace SectionsResponse {
  export type AsObject = {
    sectionListList: Array<menu_v1_menu_pb.Section.AsObject>,
  }
}

export class SectionDetailsRequest extends jspb.Message {
  getSectionId(): string;
  setSectionId(value: string): SectionDetailsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SectionDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SectionDetailsRequest): SectionDetailsRequest.AsObject;
  static serializeBinaryToWriter(message: SectionDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SectionDetailsRequest;
  static deserializeBinaryFromReader(message: SectionDetailsRequest, reader: jspb.BinaryReader): SectionDetailsRequest;
}

export namespace SectionDetailsRequest {
  export type AsObject = {
    sectionId: string,
  }
}

export class ItemsRequest extends jspb.Message {
  getSectionId(): string;
  setSectionId(value: string): ItemsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ItemsRequest): ItemsRequest.AsObject;
  static serializeBinaryToWriter(message: ItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemsRequest;
  static deserializeBinaryFromReader(message: ItemsRequest, reader: jspb.BinaryReader): ItemsRequest;
}

export namespace ItemsRequest {
  export type AsObject = {
    sectionId: string,
  }
}

export class ItemsResponse extends jspb.Message {
  getItemListList(): Array<menu_v1_menu_pb.Item>;
  setItemListList(value: Array<menu_v1_menu_pb.Item>): ItemsResponse;
  clearItemListList(): ItemsResponse;
  addItemList(value?: menu_v1_menu_pb.Item, index?: number): menu_v1_menu_pb.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ItemsResponse): ItemsResponse.AsObject;
  static serializeBinaryToWriter(message: ItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemsResponse;
  static deserializeBinaryFromReader(message: ItemsResponse, reader: jspb.BinaryReader): ItemsResponse;
}

export namespace ItemsResponse {
  export type AsObject = {
    itemListList: Array<menu_v1_menu_pb.Item.AsObject>,
  }
}

export class ItemDetailsRequest extends jspb.Message {
  getItemId(): string;
  setItemId(value: string): ItemDetailsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ItemDetailsRequest): ItemDetailsRequest.AsObject;
  static serializeBinaryToWriter(message: ItemDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemDetailsRequest;
  static deserializeBinaryFromReader(message: ItemDetailsRequest, reader: jspb.BinaryReader): ItemDetailsRequest;
}

export namespace ItemDetailsRequest {
  export type AsObject = {
    itemId: string,
  }
}

