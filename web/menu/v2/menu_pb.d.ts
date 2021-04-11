import * as jspb from 'google-protobuf'

import * as image_v2_image_pb from '../../image/v2/image_pb';
import * as country_v2_country_pb from '../../country/v2/country_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Status extends jspb.Message {
  getId(): string;
  setId(value: string): Status;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Status;
  hasTimestamp(): boolean;
  clearTimestamp(): Status;

  getMessage(): string;
  setMessage(value: string): Status;

  getAuthor(): string;
  setAuthor(value: string): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    id: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    message: string,
    author: string,
  }
}

export class Menu extends jspb.Message {
  getId(): string;
  setId(value: string): Menu;

  getName(): string;
  setName(value: string): Menu;

  getOwnersMessage(): Status | undefined;
  setOwnersMessage(value?: Status): Menu;
  hasOwnersMessage(): boolean;
  clearOwnersMessage(): Menu;

  getImage(): image_v2_image_pb.Image | undefined;
  setImage(value?: image_v2_image_pb.Image): Menu;
  hasImage(): boolean;
  clearImage(): Menu;

  getCountry(): country_v2_country_pb.Country | undefined;
  setCountry(value?: country_v2_country_pb.Country): Menu;
  hasCountry(): boolean;
  clearCountry(): Menu;

  getLogo(): image_v2_image_pb.Image | undefined;
  setLogo(value?: image_v2_image_pb.Image): Menu;
  hasLogo(): boolean;
  clearLogo(): Menu;

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
    ownersMessage?: Status.AsObject,
    image?: image_v2_image_pb.Image.AsObject,
    country?: country_v2_country_pb.Country.AsObject,
    logo?: image_v2_image_pb.Image.AsObject,
  }
}

export class Category extends jspb.Message {
  getId(): string;
  setId(value: string): Category;

  getName(): string;
  setName(value: string): Category;

  getImage(): image_v2_image_pb.Image | undefined;
  setImage(value?: image_v2_image_pb.Image): Category;
  hasImage(): boolean;
  clearImage(): Category;

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
    image?: image_v2_image_pb.Image.AsObject,
  }
}

export class Product extends jspb.Message {
  getId(): string;
  setId(value: string): Product;

  getName(): string;
  setName(value: string): Product;

  getDescription(): string;
  setDescription(value: string): Product;

  getPrice(): number;
  setPrice(value: number): Product;

  getImage(): image_v2_image_pb.Image | undefined;
  setImage(value?: image_v2_image_pb.Image): Product;
  hasImage(): boolean;
  clearImage(): Product;

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
    description: string,
    price: number,
    image?: image_v2_image_pb.Image.AsObject,
  }
}

