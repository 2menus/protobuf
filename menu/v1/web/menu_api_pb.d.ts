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

export class CategoriesRequest extends jspb.Message {
  getMenuId(): string;
  setMenuId(value: string): CategoriesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CategoriesRequest): CategoriesRequest.AsObject;
  static serializeBinaryToWriter(message: CategoriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoriesRequest;
  static deserializeBinaryFromReader(message: CategoriesRequest, reader: jspb.BinaryReader): CategoriesRequest;
}

export namespace CategoriesRequest {
  export type AsObject = {
    menuId: string,
  }
}

export class CategoriesResponse extends jspb.Message {
  getCategoryListList(): Array<menu_v1_menu_pb.Category>;
  setCategoryListList(value: Array<menu_v1_menu_pb.Category>): CategoriesResponse;
  clearCategoryListList(): CategoriesResponse;
  addCategoryList(value?: menu_v1_menu_pb.Category, index?: number): menu_v1_menu_pb.Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CategoriesResponse): CategoriesResponse.AsObject;
  static serializeBinaryToWriter(message: CategoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoriesResponse;
  static deserializeBinaryFromReader(message: CategoriesResponse, reader: jspb.BinaryReader): CategoriesResponse;
}

export namespace CategoriesResponse {
  export type AsObject = {
    categoryListList: Array<menu_v1_menu_pb.Category.AsObject>,
  }
}

export class CategoryDetailsRequest extends jspb.Message {
  getCategoryId(): string;
  setCategoryId(value: string): CategoryDetailsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryDetailsRequest): CategoryDetailsRequest.AsObject;
  static serializeBinaryToWriter(message: CategoryDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryDetailsRequest;
  static deserializeBinaryFromReader(message: CategoryDetailsRequest, reader: jspb.BinaryReader): CategoryDetailsRequest;
}

export namespace CategoryDetailsRequest {
  export type AsObject = {
    categoryId: string,
  }
}

export class ProductsRequest extends jspb.Message {
  getCategoryId(): string;
  setCategoryId(value: string): ProductsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductsRequest): ProductsRequest.AsObject;
  static serializeBinaryToWriter(message: ProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductsRequest;
  static deserializeBinaryFromReader(message: ProductsRequest, reader: jspb.BinaryReader): ProductsRequest;
}

export namespace ProductsRequest {
  export type AsObject = {
    categoryId: string,
  }
}

export class ProductsResponse extends jspb.Message {
  getProductListList(): Array<menu_v1_menu_pb.Product>;
  setProductListList(value: Array<menu_v1_menu_pb.Product>): ProductsResponse;
  clearProductListList(): ProductsResponse;
  addProductList(value?: menu_v1_menu_pb.Product, index?: number): menu_v1_menu_pb.Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProductsResponse): ProductsResponse.AsObject;
  static serializeBinaryToWriter(message: ProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductsResponse;
  static deserializeBinaryFromReader(message: ProductsResponse, reader: jspb.BinaryReader): ProductsResponse;
}

export namespace ProductsResponse {
  export type AsObject = {
    productListList: Array<menu_v1_menu_pb.Product.AsObject>,
  }
}

export class ProductDetailsRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): ProductDetailsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductDetailsRequest): ProductDetailsRequest.AsObject;
  static serializeBinaryToWriter(message: ProductDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductDetailsRequest;
  static deserializeBinaryFromReader(message: ProductDetailsRequest, reader: jspb.BinaryReader): ProductDetailsRequest;
}

export namespace ProductDetailsRequest {
  export type AsObject = {
    productId: string,
  }
}

