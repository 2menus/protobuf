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

export class Account extends jspb.Message {
  getId(): string;
  setId(value: string): Account;

  getFullName(): string;
  setFullName(value: string): Account;

  getEmail(): string;
  setEmail(value: string): Account;

  getSecretKey(): string;
  setSecretKey(value: string): Account;

  getTopCardImage(): string;
  setTopCardImage(value: string): Account;

  getCountry(): Country | undefined;
  setCountry(value?: Country): Account;
  hasCountry(): boolean;
  clearCountry(): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    id: string,
    fullName: string,
    email: string,
    secretKey: string,
    topCardImage: string,
    country?: Country.AsObject,
  }
}

export class AccountListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountListRequest): AccountListRequest.AsObject;
  static serializeBinaryToWriter(message: AccountListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountListRequest;
  static deserializeBinaryFromReader(message: AccountListRequest, reader: jspb.BinaryReader): AccountListRequest;
}

export namespace AccountListRequest {
  export type AsObject = {
  }
}

export class AccountListResponse extends jspb.Message {
  getAccountListList(): Array<Account>;
  setAccountListList(value: Array<Account>): AccountListResponse;
  clearAccountListList(): AccountListResponse;
  addAccountList(value?: Account, index?: number): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountListResponse): AccountListResponse.AsObject;
  static serializeBinaryToWriter(message: AccountListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountListResponse;
  static deserializeBinaryFromReader(message: AccountListResponse, reader: jspb.BinaryReader): AccountListResponse;
}

export namespace AccountListResponse {
  export type AsObject = {
    accountListList: Array<Account.AsObject>,
  }
}

export class AccountDetailsRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): AccountDetailsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountDetailsRequest): AccountDetailsRequest.AsObject;
  static serializeBinaryToWriter(message: AccountDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountDetailsRequest;
  static deserializeBinaryFromReader(message: AccountDetailsRequest, reader: jspb.BinaryReader): AccountDetailsRequest;
}

export namespace AccountDetailsRequest {
  export type AsObject = {
    accountId: string,
  }
}

export class Menu extends jspb.Message {
  getId(): string;
  setId(value: string): Menu;

  getFullName(): string;
  setFullName(value: string): Menu;

  getPic(): string;
  setPic(value: string): Menu;

  getAlias(): string;
  setAlias(value: string): Menu;

  getOwnersMessage(): string;
  setOwnersMessage(value: string): Menu;

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
    fullName: string,
    pic: string,
    alias: string,
    ownersMessage: string,
  }
}

export class MenuListRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): MenuListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenuListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MenuListRequest): MenuListRequest.AsObject;
  static serializeBinaryToWriter(message: MenuListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenuListRequest;
  static deserializeBinaryFromReader(message: MenuListRequest, reader: jspb.BinaryReader): MenuListRequest;
}

export namespace MenuListRequest {
  export type AsObject = {
    accountId: string,
  }
}

export class MenuListResponse extends jspb.Message {
  getMenuListList(): Array<Menu>;
  setMenuListList(value: Array<Menu>): MenuListResponse;
  clearMenuListList(): MenuListResponse;
  addMenuList(value?: Menu, index?: number): Menu;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenuListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MenuListResponse): MenuListResponse.AsObject;
  static serializeBinaryToWriter(message: MenuListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenuListResponse;
  static deserializeBinaryFromReader(message: MenuListResponse, reader: jspb.BinaryReader): MenuListResponse;
}

export namespace MenuListResponse {
  export type AsObject = {
    menuListList: Array<Menu.AsObject>,
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

export class FindMenuRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): FindMenuRequest;

  getAlias(): string;
  setAlias(value: string): FindMenuRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindMenuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindMenuRequest): FindMenuRequest.AsObject;
  static serializeBinaryToWriter(message: FindMenuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindMenuRequest;
  static deserializeBinaryFromReader(message: FindMenuRequest, reader: jspb.BinaryReader): FindMenuRequest;
}

export namespace FindMenuRequest {
  export type AsObject = {
    accountId: string,
    alias: string,
  }
}

export class Section extends jspb.Message {
  getId(): string;
  setId(value: string): Section;

  getFullName(): string;
  setFullName(value: string): Section;

  getPic(): string;
  setPic(value: string): Section;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Section.AsObject;
  static toObject(includeInstance: boolean, msg: Section): Section.AsObject;
  static serializeBinaryToWriter(message: Section, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Section;
  static deserializeBinaryFromReader(message: Section, reader: jspb.BinaryReader): Section;
}

export namespace Section {
  export type AsObject = {
    id: string,
    fullName: string,
    pic: string,
  }
}

export class SectionListRequest extends jspb.Message {
  getMenuId(): string;
  setMenuId(value: string): SectionListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SectionListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SectionListRequest): SectionListRequest.AsObject;
  static serializeBinaryToWriter(message: SectionListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SectionListRequest;
  static deserializeBinaryFromReader(message: SectionListRequest, reader: jspb.BinaryReader): SectionListRequest;
}

export namespace SectionListRequest {
  export type AsObject = {
    menuId: string,
  }
}

export class SectionListResponse extends jspb.Message {
  getSectionListList(): Array<Section>;
  setSectionListList(value: Array<Section>): SectionListResponse;
  clearSectionListList(): SectionListResponse;
  addSectionList(value?: Section, index?: number): Section;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SectionListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SectionListResponse): SectionListResponse.AsObject;
  static serializeBinaryToWriter(message: SectionListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SectionListResponse;
  static deserializeBinaryFromReader(message: SectionListResponse, reader: jspb.BinaryReader): SectionListResponse;
}

export namespace SectionListResponse {
  export type AsObject = {
    sectionListList: Array<Section.AsObject>,
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

export class Item extends jspb.Message {
  getId(): string;
  setId(value: string): Item;

  getFullName(): string;
  setFullName(value: string): Item;

  getPrice(): number;
  setPrice(value: number): Item;

  getItemDescription(): string;
  setItemDescription(value: string): Item;

  getPic(): string;
  setPic(value: string): Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Item.AsObject;
  static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
  static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Item;
  static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
  export type AsObject = {
    id: string,
    fullName: string,
    price: number,
    itemDescription: string,
    pic: string,
  }
}

export class ItemListRequest extends jspb.Message {
  getSectionId(): string;
  setSectionId(value: string): ItemListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ItemListRequest): ItemListRequest.AsObject;
  static serializeBinaryToWriter(message: ItemListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemListRequest;
  static deserializeBinaryFromReader(message: ItemListRequest, reader: jspb.BinaryReader): ItemListRequest;
}

export namespace ItemListRequest {
  export type AsObject = {
    sectionId: string,
  }
}

export class ItemListResponse extends jspb.Message {
  getItemListList(): Array<Item>;
  setItemListList(value: Array<Item>): ItemListResponse;
  clearItemListList(): ItemListResponse;
  addItemList(value?: Item, index?: number): Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ItemListResponse): ItemListResponse.AsObject;
  static serializeBinaryToWriter(message: ItemListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemListResponse;
  static deserializeBinaryFromReader(message: ItemListResponse, reader: jspb.BinaryReader): ItemListResponse;
}

export namespace ItemListResponse {
  export type AsObject = {
    itemListList: Array<Item.AsObject>,
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

