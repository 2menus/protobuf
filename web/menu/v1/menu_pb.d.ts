import * as jspb from "google-protobuf"

export class Country extends jspb.Message {
  getName(): string;
  setName(value: string): Country;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): Country;

  getCurrencySymbol(): string;
  setCurrencySymbol(value: string): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Country.AsObject;
  static toObject(includeInstance: boolean, msg: Country): Country.AsObject;
  static serializeBinaryToWriter(message: Country, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Country;
  static deserializeBinaryFromReader(message: Country, reader: jspb.BinaryReader): Country;
}

export namespace Country {
  export type AsObject = {
    name: string,
    currencyCode: string,
    currencySymbol: string,
  }
}

export class Menu extends jspb.Message {
  getId(): string;
  setId(value: string): Menu;

  getName(): string;
  setName(value: string): Menu;

  getFullName(): string;
  setFullName(value: string): Menu;

  getOwnersMessage(): string;
  setOwnersMessage(value: string): Menu;

  getTopCardImage(): string;
  setTopCardImage(value: string): Menu;

  getCountry(): Country | undefined;
  setCountry(value?: Country): Menu;
  hasCountry(): boolean;
  clearCountry(): Menu;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Menu.AsObject;
  static toObject(includeInstance: boolean, msg: Menu): Menu.AsObject;
  static serializeBinaryToWriter(message: Menu, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Menu;
  static deserializeBinaryFromReader(message: Menu, reader: jspb.BinaryReader): Menu;
}

export namespace Menu {
  export type AsObject = {
    id: string,
    name: string,
    fullName: string,
    ownersMessage: string,
    topCardImage: string,
    country?: Country.AsObject,
  }
}

export class Category extends jspb.Message {
  getId(): string;
  setId(value: string): Category;

  getName(): string;
  setName(value: string): Category;

  getFullName(): string;
  setFullName(value: string): Category;

  getPic(): string;
  setPic(value: string): Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Category.AsObject;
  static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
  static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Category;
  static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
  export type AsObject = {
    id: string,
    name: string,
    fullName: string,
    pic: string,
  }
}

export class Product extends jspb.Message {
  getId(): string;
  setId(value: string): Product;

  getName(): string;
  setName(value: string): Product;

  getFullName(): string;
  setFullName(value: string): Product;

  getPrice(): number;
  setPrice(value: number): Product;

  getDescription(): string;
  setDescription(value: string): Product;

  getPic(): string;
  setPic(value: string): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    id: string,
    name: string,
    fullName: string,
    price: number,
    description: string,
    pic: string,
  }
}

