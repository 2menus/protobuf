import * as jspb from "google-protobuf"

import * as menu_v1_menu_pb from '../../menu/v1/menu_pb';

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
  getMenusList(): Array<menu_v1_menu_pb.Menu>;
  setMenusList(value: Array<menu_v1_menu_pb.Menu>): MenusResponse;
  clearMenusList(): MenusResponse;
  addMenus(value?: menu_v1_menu_pb.Menu, index?: number): menu_v1_menu_pb.Menu;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MenusResponse): MenusResponse.AsObject;
  static serializeBinaryToWriter(message: MenusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenusResponse;
  static deserializeBinaryFromReader(message: MenusResponse, reader: jspb.BinaryReader): MenusResponse;
}

export namespace MenusResponse {
  export type AsObject = {
    menusList: Array<menu_v1_menu_pb.Menu.AsObject>,
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

export class MenuDetailsResponse extends jspb.Message {
  getMenu(): menu_v1_menu_pb.Menu | undefined;
  setMenu(value?: menu_v1_menu_pb.Menu): MenuDetailsResponse;
  hasMenu(): boolean;
  clearMenu(): MenuDetailsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenuDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MenuDetailsResponse): MenuDetailsResponse.AsObject;
  static serializeBinaryToWriter(message: MenuDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenuDetailsResponse;
  static deserializeBinaryFromReader(message: MenuDetailsResponse, reader: jspb.BinaryReader): MenuDetailsResponse;
}

export namespace MenuDetailsResponse {
  export type AsObject = {
    menu?: menu_v1_menu_pb.Menu.AsObject,
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
  getCategoriesList(): Array<menu_v1_menu_pb.Category>;
  setCategoriesList(value: Array<menu_v1_menu_pb.Category>): CategoriesResponse;
  clearCategoriesList(): CategoriesResponse;
  addCategories(value?: menu_v1_menu_pb.Category, index?: number): menu_v1_menu_pb.Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CategoriesResponse): CategoriesResponse.AsObject;
  static serializeBinaryToWriter(message: CategoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoriesResponse;
  static deserializeBinaryFromReader(message: CategoriesResponse, reader: jspb.BinaryReader): CategoriesResponse;
}

export namespace CategoriesResponse {
  export type AsObject = {
    categoriesList: Array<menu_v1_menu_pb.Category.AsObject>,
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

export class CategoryDetailsResponse extends jspb.Message {
  getCategory(): menu_v1_menu_pb.Category | undefined;
  setCategory(value?: menu_v1_menu_pb.Category): CategoryDetailsResponse;
  hasCategory(): boolean;
  clearCategory(): CategoryDetailsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryDetailsResponse): CategoryDetailsResponse.AsObject;
  static serializeBinaryToWriter(message: CategoryDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryDetailsResponse;
  static deserializeBinaryFromReader(message: CategoryDetailsResponse, reader: jspb.BinaryReader): CategoryDetailsResponse;
}

export namespace CategoryDetailsResponse {
  export type AsObject = {
    category?: menu_v1_menu_pb.Category.AsObject,
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
  getProductsList(): Array<menu_v1_menu_pb.Product>;
  setProductsList(value: Array<menu_v1_menu_pb.Product>): ProductsResponse;
  clearProductsList(): ProductsResponse;
  addProducts(value?: menu_v1_menu_pb.Product, index?: number): menu_v1_menu_pb.Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProductsResponse): ProductsResponse.AsObject;
  static serializeBinaryToWriter(message: ProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductsResponse;
  static deserializeBinaryFromReader(message: ProductsResponse, reader: jspb.BinaryReader): ProductsResponse;
}

export namespace ProductsResponse {
  export type AsObject = {
    productsList: Array<menu_v1_menu_pb.Product.AsObject>,
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

export class ProductDetailsResponse extends jspb.Message {
  getProduct(): menu_v1_menu_pb.Product | undefined;
  setProduct(value?: menu_v1_menu_pb.Product): ProductDetailsResponse;
  hasProduct(): boolean;
  clearProduct(): ProductDetailsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProductDetailsResponse): ProductDetailsResponse.AsObject;
  static serializeBinaryToWriter(message: ProductDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductDetailsResponse;
  static deserializeBinaryFromReader(message: ProductDetailsResponse, reader: jspb.BinaryReader): ProductDetailsResponse;
}

export namespace ProductDetailsResponse {
  export type AsObject = {
    product?: menu_v1_menu_pb.Product.AsObject,
  }
}

export class CountriesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountriesRequest): CountriesRequest.AsObject;
  static serializeBinaryToWriter(message: CountriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountriesRequest;
  static deserializeBinaryFromReader(message: CountriesRequest, reader: jspb.BinaryReader): CountriesRequest;
}

export namespace CountriesRequest {
  export type AsObject = {
  }
}

export class CountriesResponse extends jspb.Message {
  getCountriesList(): Array<menu_v1_menu_pb.Country>;
  setCountriesList(value: Array<menu_v1_menu_pb.Country>): CountriesResponse;
  clearCountriesList(): CountriesResponse;
  addCountries(value?: menu_v1_menu_pb.Country, index?: number): menu_v1_menu_pb.Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountriesResponse): CountriesResponse.AsObject;
  static serializeBinaryToWriter(message: CountriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountriesResponse;
  static deserializeBinaryFromReader(message: CountriesResponse, reader: jspb.BinaryReader): CountriesResponse;
}

export namespace CountriesResponse {
  export type AsObject = {
    countriesList: Array<menu_v1_menu_pb.Country.AsObject>,
  }
}

