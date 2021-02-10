import * as jspb from 'google-protobuf'



export class Size extends jspb.Message {
  getOriginal(): string;
  setOriginal(value: string): Size;

  getSmall(): string;
  setSmall(value: string): Size;

  getMedium(): string;
  setMedium(value: string): Size;

  getLarge(): string;
  setLarge(value: string): Size;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Size.AsObject;
  static toObject(includeInstance: boolean, msg: Size): Size.AsObject;
  static serializeBinaryToWriter(message: Size, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Size;
  static deserializeBinaryFromReader(message: Size, reader: jspb.BinaryReader): Size;
}

export namespace Size {
  export type AsObject = {
    original: string,
    small: string,
    medium: string,
    large: string,
  }
}

export class Points extends jspb.Message {
  getX1(): number;
  setX1(value: number): Points;

  getY1(): number;
  setY1(value: number): Points;

  getX2(): number;
  setX2(value: number): Points;

  getY2(): number;
  setY2(value: number): Points;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Points.AsObject;
  static toObject(includeInstance: boolean, msg: Points): Points.AsObject;
  static serializeBinaryToWriter(message: Points, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Points;
  static deserializeBinaryFromReader(message: Points, reader: jspb.BinaryReader): Points;
}

export namespace Points {
  export type AsObject = {
    x1: number,
    y1: number,
    x2: number,
    y2: number,
  }
}

export class Image extends jspb.Message {
  getId(): string;
  setId(value: string): Image;

  getName(): string;
  setName(value: string): Image;

  getSize(): Size | undefined;
  setSize(value?: Size): Image;
  hasSize(): boolean;
  clearSize(): Image;

  getPoints(): Points | undefined;
  setPoints(value?: Points): Image;
  hasPoints(): boolean;
  clearPoints(): Image;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    id: string,
    name: string,
    size?: Size.AsObject,
    points?: Points.AsObject,
  }
}

