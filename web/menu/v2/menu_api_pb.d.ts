import * as jspb from 'google-protobuf'

import * as menu_v2_menu_pb from '../../menu/v2/menu_pb';
import * as country_v2_country_pb from '../../country/v2/country_pb';


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
  getMenusList(): Array<menu_v2_menu_pb.Menu>;
  setMenusList(value: Array<menu_v2_menu_pb.Menu>): MenusResponse;
  clearMenusList(): MenusResponse;
  addMenus(value?: menu_v2_menu_pb.Menu, index?: number): menu_v2_menu_pb.Menu;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MenusResponse): MenusResponse.AsObject;
  static serializeBinaryToWriter(message: MenusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenusResponse;
  static deserializeBinaryFromReader(message: MenusResponse, reader: jspb.BinaryReader): MenusResponse;
}

export namespace MenusResponse {
  export type AsObject = {
    menusList: Array<menu_v2_menu_pb.Menu.AsObject>,
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
  getMenu(): menu_v2_menu_pb.Menu | undefined;
  setMenu(value?: menu_v2_menu_pb.Menu): MenuDetailsResponse;
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
    menu?: menu_v2_menu_pb.Menu.AsObject,
  }
}

export class CreateMenuRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateMenuRequest;

  getCountryId(): string;
  setCountryId(value: string): CreateMenuRequest;

  getImageId(): string;
  setImageId(value: string): CreateMenuRequest;

  getLogoId(): string;
  setLogoId(value: string): CreateMenuRequest;

  getStatusId(): string;
  setStatusId(value: string): CreateMenuRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMenuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMenuRequest): CreateMenuRequest.AsObject;
  static serializeBinaryToWriter(message: CreateMenuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMenuRequest;
  static deserializeBinaryFromReader(message: CreateMenuRequest, reader: jspb.BinaryReader): CreateMenuRequest;
}

export namespace CreateMenuRequest {
  export type AsObject = {
    name: string,
    countryId: string,
    imageId: string,
    logoId: string,
    statusId: string,
  }
}

export class CreateMenuResponse extends jspb.Message {
  getMenu(): menu_v2_menu_pb.Menu | undefined;
  setMenu(value?: menu_v2_menu_pb.Menu): CreateMenuResponse;
  hasMenu(): boolean;
  clearMenu(): CreateMenuResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMenuResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMenuResponse): CreateMenuResponse.AsObject;
  static serializeBinaryToWriter(message: CreateMenuResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMenuResponse;
  static deserializeBinaryFromReader(message: CreateMenuResponse, reader: jspb.BinaryReader): CreateMenuResponse;
}

export namespace CreateMenuResponse {
  export type AsObject = {
    menu?: menu_v2_menu_pb.Menu.AsObject,
  }
}

export class UpdateMenuRequest extends jspb.Message {
  getMenuId(): string;
  setMenuId(value: string): UpdateMenuRequest;

  getName(): string;
  setName(value: string): UpdateMenuRequest;

  getCountryId(): string;
  setCountryId(value: string): UpdateMenuRequest;

  getImageId(): string;
  setImageId(value: string): UpdateMenuRequest;

  getLogoId(): string;
  setLogoId(value: string): UpdateMenuRequest;

  getStatusId(): string;
  setStatusId(value: string): UpdateMenuRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMenuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMenuRequest): UpdateMenuRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMenuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMenuRequest;
  static deserializeBinaryFromReader(message: UpdateMenuRequest, reader: jspb.BinaryReader): UpdateMenuRequest;
}

export namespace UpdateMenuRequest {
  export type AsObject = {
    menuId: string,
    name: string,
    countryId: string,
    imageId: string,
    logoId: string,
    statusId: string,
  }
}

export class UpdateMenuResponse extends jspb.Message {
  getMenu(): menu_v2_menu_pb.Menu | undefined;
  setMenu(value?: menu_v2_menu_pb.Menu): UpdateMenuResponse;
  hasMenu(): boolean;
  clearMenu(): UpdateMenuResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMenuResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMenuResponse): UpdateMenuResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateMenuResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMenuResponse;
  static deserializeBinaryFromReader(message: UpdateMenuResponse, reader: jspb.BinaryReader): UpdateMenuResponse;
}

export namespace UpdateMenuResponse {
  export type AsObject = {
    menu?: menu_v2_menu_pb.Menu.AsObject,
  }
}

export class DeleteMenuRequest extends jspb.Message {
  getMenuId(): string;
  setMenuId(value: string): DeleteMenuRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMenuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMenuRequest): DeleteMenuRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteMenuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMenuRequest;
  static deserializeBinaryFromReader(message: DeleteMenuRequest, reader: jspb.BinaryReader): DeleteMenuRequest;
}

export namespace DeleteMenuRequest {
  export type AsObject = {
    menuId: string,
  }
}

export class DeleteMenuResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMenuResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMenuResponse): DeleteMenuResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteMenuResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMenuResponse;
  static deserializeBinaryFromReader(message: DeleteMenuResponse, reader: jspb.BinaryReader): DeleteMenuResponse;
}

export namespace DeleteMenuResponse {
  export type AsObject = {
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
  getCategoriesList(): Array<menu_v2_menu_pb.Category>;
  setCategoriesList(value: Array<menu_v2_menu_pb.Category>): CategoriesResponse;
  clearCategoriesList(): CategoriesResponse;
  addCategories(value?: menu_v2_menu_pb.Category, index?: number): menu_v2_menu_pb.Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CategoriesResponse): CategoriesResponse.AsObject;
  static serializeBinaryToWriter(message: CategoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoriesResponse;
  static deserializeBinaryFromReader(message: CategoriesResponse, reader: jspb.BinaryReader): CategoriesResponse;
}

export namespace CategoriesResponse {
  export type AsObject = {
    categoriesList: Array<menu_v2_menu_pb.Category.AsObject>,
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
  getCategory(): menu_v2_menu_pb.Category | undefined;
  setCategory(value?: menu_v2_menu_pb.Category): CategoryDetailsResponse;
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
    category?: menu_v2_menu_pb.Category.AsObject,
  }
}

export class CreateCategoryRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateCategoryRequest;

  getImageId(): string;
  setImageId(value: string): CreateCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCategoryRequest): CreateCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCategoryRequest;
  static deserializeBinaryFromReader(message: CreateCategoryRequest, reader: jspb.BinaryReader): CreateCategoryRequest;
}

export namespace CreateCategoryRequest {
  export type AsObject = {
    name: string,
    imageId: string,
  }
}

export class CreateCategoryResponse extends jspb.Message {
  getCategory(): menu_v2_menu_pb.Category | undefined;
  setCategory(value?: menu_v2_menu_pb.Category): CreateCategoryResponse;
  hasCategory(): boolean;
  clearCategory(): CreateCategoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCategoryResponse): CreateCategoryResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCategoryResponse;
  static deserializeBinaryFromReader(message: CreateCategoryResponse, reader: jspb.BinaryReader): CreateCategoryResponse;
}

export namespace CreateCategoryResponse {
  export type AsObject = {
    category?: menu_v2_menu_pb.Category.AsObject,
  }
}

export class UpdateCategoryRequest extends jspb.Message {
  getCategoryId(): string;
  setCategoryId(value: string): UpdateCategoryRequest;

  getName(): string;
  setName(value: string): UpdateCategoryRequest;

  getImageId(): string;
  setImageId(value: string): UpdateCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCategoryRequest): UpdateCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCategoryRequest;
  static deserializeBinaryFromReader(message: UpdateCategoryRequest, reader: jspb.BinaryReader): UpdateCategoryRequest;
}

export namespace UpdateCategoryRequest {
  export type AsObject = {
    categoryId: string,
    name: string,
    imageId: string,
  }
}

export class UpdateCategoryResponse extends jspb.Message {
  getCategory(): menu_v2_menu_pb.Category | undefined;
  setCategory(value?: menu_v2_menu_pb.Category): UpdateCategoryResponse;
  hasCategory(): boolean;
  clearCategory(): UpdateCategoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCategoryResponse): UpdateCategoryResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCategoryResponse;
  static deserializeBinaryFromReader(message: UpdateCategoryResponse, reader: jspb.BinaryReader): UpdateCategoryResponse;
}

export namespace UpdateCategoryResponse {
  export type AsObject = {
    category?: menu_v2_menu_pb.Category.AsObject,
  }
}

export class DeleteCategoryRequest extends jspb.Message {
  getCategoryId(): string;
  setCategoryId(value: string): DeleteCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCategoryRequest): DeleteCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCategoryRequest;
  static deserializeBinaryFromReader(message: DeleteCategoryRequest, reader: jspb.BinaryReader): DeleteCategoryRequest;
}

export namespace DeleteCategoryRequest {
  export type AsObject = {
    categoryId: string,
  }
}

export class DeleteCategoryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCategoryResponse): DeleteCategoryResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCategoryResponse;
  static deserializeBinaryFromReader(message: DeleteCategoryResponse, reader: jspb.BinaryReader): DeleteCategoryResponse;
}

export namespace DeleteCategoryResponse {
  export type AsObject = {
  }
}

export class LinkCategoryMenuRequest extends jspb.Message {
  getCategoryId(): string;
  setCategoryId(value: string): LinkCategoryMenuRequest;

  getMenuId(): string;
  setMenuId(value: string): LinkCategoryMenuRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkCategoryMenuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LinkCategoryMenuRequest): LinkCategoryMenuRequest.AsObject;
  static serializeBinaryToWriter(message: LinkCategoryMenuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkCategoryMenuRequest;
  static deserializeBinaryFromReader(message: LinkCategoryMenuRequest, reader: jspb.BinaryReader): LinkCategoryMenuRequest;
}

export namespace LinkCategoryMenuRequest {
  export type AsObject = {
    categoryId: string,
    menuId: string,
  }
}

export class LinkCategoryMenuResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkCategoryMenuResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LinkCategoryMenuResponse): LinkCategoryMenuResponse.AsObject;
  static serializeBinaryToWriter(message: LinkCategoryMenuResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkCategoryMenuResponse;
  static deserializeBinaryFromReader(message: LinkCategoryMenuResponse, reader: jspb.BinaryReader): LinkCategoryMenuResponse;
}

export namespace LinkCategoryMenuResponse {
  export type AsObject = {
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
  getProductsList(): Array<menu_v2_menu_pb.Product>;
  setProductsList(value: Array<menu_v2_menu_pb.Product>): ProductsResponse;
  clearProductsList(): ProductsResponse;
  addProducts(value?: menu_v2_menu_pb.Product, index?: number): menu_v2_menu_pb.Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProductsResponse): ProductsResponse.AsObject;
  static serializeBinaryToWriter(message: ProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductsResponse;
  static deserializeBinaryFromReader(message: ProductsResponse, reader: jspb.BinaryReader): ProductsResponse;
}

export namespace ProductsResponse {
  export type AsObject = {
    productsList: Array<menu_v2_menu_pb.Product.AsObject>,
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
  getProduct(): menu_v2_menu_pb.Product | undefined;
  setProduct(value?: menu_v2_menu_pb.Product): ProductDetailsResponse;
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
    product?: menu_v2_menu_pb.Product.AsObject,
  }
}

export class CreateProductRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateProductRequest;

  getDescription(): string;
  setDescription(value: string): CreateProductRequest;

  getPrice(): number;
  setPrice(value: number): CreateProductRequest;

  getImageId(): string;
  setImageId(value: string): CreateProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProductRequest): CreateProductRequest.AsObject;
  static serializeBinaryToWriter(message: CreateProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProductRequest;
  static deserializeBinaryFromReader(message: CreateProductRequest, reader: jspb.BinaryReader): CreateProductRequest;
}

export namespace CreateProductRequest {
  export type AsObject = {
    name: string,
    description: string,
    price: number,
    imageId: string,
  }
}

export class CreateProductResponse extends jspb.Message {
  getProduct(): menu_v2_menu_pb.Product | undefined;
  setProduct(value?: menu_v2_menu_pb.Product): CreateProductResponse;
  hasProduct(): boolean;
  clearProduct(): CreateProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProductResponse): CreateProductResponse.AsObject;
  static serializeBinaryToWriter(message: CreateProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProductResponse;
  static deserializeBinaryFromReader(message: CreateProductResponse, reader: jspb.BinaryReader): CreateProductResponse;
}

export namespace CreateProductResponse {
  export type AsObject = {
    product?: menu_v2_menu_pb.Product.AsObject,
  }
}

export class UpdateProductRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): UpdateProductRequest;

  getName(): string;
  setName(value: string): UpdateProductRequest;

  getDescription(): string;
  setDescription(value: string): UpdateProductRequest;

  getPrice(): number;
  setPrice(value: number): UpdateProductRequest;

  getImageId(): string;
  setImageId(value: string): UpdateProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProductRequest): UpdateProductRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProductRequest;
  static deserializeBinaryFromReader(message: UpdateProductRequest, reader: jspb.BinaryReader): UpdateProductRequest;
}

export namespace UpdateProductRequest {
  export type AsObject = {
    productId: string,
    name: string,
    description: string,
    price: number,
    imageId: string,
  }
}

export class UpdateProductResponse extends jspb.Message {
  getProduct(): menu_v2_menu_pb.Product | undefined;
  setProduct(value?: menu_v2_menu_pb.Product): UpdateProductResponse;
  hasProduct(): boolean;
  clearProduct(): UpdateProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProductResponse): UpdateProductResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProductResponse;
  static deserializeBinaryFromReader(message: UpdateProductResponse, reader: jspb.BinaryReader): UpdateProductResponse;
}

export namespace UpdateProductResponse {
  export type AsObject = {
    product?: menu_v2_menu_pb.Product.AsObject,
  }
}

export class DeleteProductRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): DeleteProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProductRequest): DeleteProductRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProductRequest;
  static deserializeBinaryFromReader(message: DeleteProductRequest, reader: jspb.BinaryReader): DeleteProductRequest;
}

export namespace DeleteProductRequest {
  export type AsObject = {
    productId: string,
  }
}

export class DeleteProductResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProductResponse): DeleteProductResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProductResponse;
  static deserializeBinaryFromReader(message: DeleteProductResponse, reader: jspb.BinaryReader): DeleteProductResponse;
}

export namespace DeleteProductResponse {
  export type AsObject = {
  }
}

export class LinkProductCategoryRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): LinkProductCategoryRequest;

  getCategoryId(): string;
  setCategoryId(value: string): LinkProductCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkProductCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LinkProductCategoryRequest): LinkProductCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: LinkProductCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkProductCategoryRequest;
  static deserializeBinaryFromReader(message: LinkProductCategoryRequest, reader: jspb.BinaryReader): LinkProductCategoryRequest;
}

export namespace LinkProductCategoryRequest {
  export type AsObject = {
    productId: string,
    categoryId: string,
  }
}

export class LinkProductCategoryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkProductCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LinkProductCategoryResponse): LinkProductCategoryResponse.AsObject;
  static serializeBinaryToWriter(message: LinkProductCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkProductCategoryResponse;
  static deserializeBinaryFromReader(message: LinkProductCategoryResponse, reader: jspb.BinaryReader): LinkProductCategoryResponse;
}

export namespace LinkProductCategoryResponse {
  export type AsObject = {
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
  getCountriesList(): Array<country_v2_country_pb.Country>;
  setCountriesList(value: Array<country_v2_country_pb.Country>): CountriesResponse;
  clearCountriesList(): CountriesResponse;
  addCountries(value?: country_v2_country_pb.Country, index?: number): country_v2_country_pb.Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountriesResponse): CountriesResponse.AsObject;
  static serializeBinaryToWriter(message: CountriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountriesResponse;
  static deserializeBinaryFromReader(message: CountriesResponse, reader: jspb.BinaryReader): CountriesResponse;
}

export namespace CountriesResponse {
  export type AsObject = {
    countriesList: Array<country_v2_country_pb.Country.AsObject>,
  }
}

export class SetStatusMessageRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): SetStatusMessageRequest;

  getAuthor(): string;
  setAuthor(value: string): SetStatusMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetStatusMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetStatusMessageRequest): SetStatusMessageRequest.AsObject;
  static serializeBinaryToWriter(message: SetStatusMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetStatusMessageRequest;
  static deserializeBinaryFromReader(message: SetStatusMessageRequest, reader: jspb.BinaryReader): SetStatusMessageRequest;
}

export namespace SetStatusMessageRequest {
  export type AsObject = {
    message: string,
    author: string,
  }
}

export class SetStatusMessageResponse extends jspb.Message {
  getId(): string;
  setId(value: string): SetStatusMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetStatusMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetStatusMessageResponse): SetStatusMessageResponse.AsObject;
  static serializeBinaryToWriter(message: SetStatusMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetStatusMessageResponse;
  static deserializeBinaryFromReader(message: SetStatusMessageResponse, reader: jspb.BinaryReader): SetStatusMessageResponse;
}

export namespace SetStatusMessageResponse {
  export type AsObject = {
    id: string,
  }
}

