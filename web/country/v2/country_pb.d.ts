import * as jspb from 'google-protobuf'



export class Currency extends jspb.Message {
  getId(): string;
  setId(value: string): Currency;

  getName(): string;
  setName(value: string): Currency;

  getCode(): string;
  setCode(value: string): Currency;

  getSymbol(): string;
  setSymbol(value: string): Currency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Currency.AsObject;
  static toObject(includeInstance: boolean, msg: Currency): Currency.AsObject;
  static serializeBinaryToWriter(message: Currency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Currency;
  static deserializeBinaryFromReader(message: Currency, reader: jspb.BinaryReader): Currency;
}

export namespace Currency {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    symbol: string,
  }
}

export class Language extends jspb.Message {
  getId(): string;
  setId(value: string): Language;

  getName(): string;
  setName(value: string): Language;

  getCode(): string;
  setCode(value: string): Language;

  getNative(): string;
  setNative(value: string): Language;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Language.AsObject;
  static toObject(includeInstance: boolean, msg: Language): Language.AsObject;
  static serializeBinaryToWriter(message: Language, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Language;
  static deserializeBinaryFromReader(message: Language, reader: jspb.BinaryReader): Language;
}

export namespace Language {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    pb_native: string,
  }
}

export class Country extends jspb.Message {
  getId(): string;
  setId(value: string): Country;

  getName(): string;
  setName(value: string): Country;

  getCode(): string;
  setCode(value: string): Country;

  getNative(): string;
  setNative(value: string): Country;

  getCurrencyList(): Array<Currency>;
  setCurrencyList(value: Array<Currency>): Country;
  clearCurrencyList(): Country;
  addCurrency(value?: Currency, index?: number): Currency;

  getLanguageList(): Array<Language>;
  setLanguageList(value: Array<Language>): Country;
  clearLanguageList(): Country;
  addLanguage(value?: Language, index?: number): Language;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Country.AsObject;
  static toObject(includeInstance: boolean, msg: Country): Country.AsObject;
  static serializeBinaryToWriter(message: Country, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Country;
  static deserializeBinaryFromReader(message: Country, reader: jspb.BinaryReader): Country;
}

export namespace Country {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    pb_native: string,
    currencyList: Array<Currency.AsObject>,
    languageList: Array<Language.AsObject>,
  }
}

