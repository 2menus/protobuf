import * as jspb from "google-protobuf"

export class CreateMenuRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateMenuRequest;

  getFullName(): string;
  setFullName(value: string): CreateMenuRequest;

  getCountry(): string;
  setCountry(value: string): CreateMenuRequest;

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
    fullName: string,
    country: string,
  }
}

export class CreateMenuResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMenuResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMenuResponse): CreateMenuResponse.AsObject;
  static serializeBinaryToWriter(message: CreateMenuResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMenuResponse;
  static deserializeBinaryFromReader(message: CreateMenuResponse, reader: jspb.BinaryReader): CreateMenuResponse;
}

export namespace CreateMenuResponse {
  export type AsObject = {
  }
}

export class UpdateMenuRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateMenuRequest;

  getFullName(): string;
  setFullName(value: string): UpdateMenuRequest;

  getCountry(): string;
  setCountry(value: string): UpdateMenuRequest;

  getName(): string;
  setName(value: string): UpdateMenuRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMenuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMenuRequest): UpdateMenuRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMenuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMenuRequest;
  static deserializeBinaryFromReader(message: UpdateMenuRequest, reader: jspb.BinaryReader): UpdateMenuRequest;
}

export namespace UpdateMenuRequest {
  export type AsObject = {
    id: string,
    fullName: string,
    country: string,
    name: string,
  }
}

export class UpdateMenuResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMenuResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMenuResponse): UpdateMenuResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateMenuResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMenuResponse;
  static deserializeBinaryFromReader(message: UpdateMenuResponse, reader: jspb.BinaryReader): UpdateMenuResponse;
}

export namespace UpdateMenuResponse {
  export type AsObject = {
  }
}

export class DeleteMenuRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteMenuRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMenuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMenuRequest): DeleteMenuRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteMenuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMenuRequest;
  static deserializeBinaryFromReader(message: DeleteMenuRequest, reader: jspb.BinaryReader): DeleteMenuRequest;
}

export namespace DeleteMenuRequest {
  export type AsObject = {
    id: string,
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

export class CreateCategoryRequest extends jspb.Message {
  getMenuId(): string;
  setMenuId(value: string): CreateCategoryRequest;

  getName(): string;
  setName(value: string): CreateCategoryRequest;

  getFullName(): string;
  setFullName(value: string): CreateCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCategoryRequest): CreateCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCategoryRequest;
  static deserializeBinaryFromReader(message: CreateCategoryRequest, reader: jspb.BinaryReader): CreateCategoryRequest;
}

export namespace CreateCategoryRequest {
  export type AsObject = {
    menuId: string,
    name: string,
    fullName: string,
  }
}

export class CreateCategoryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCategoryResponse): CreateCategoryResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCategoryResponse;
  static deserializeBinaryFromReader(message: CreateCategoryResponse, reader: jspb.BinaryReader): CreateCategoryResponse;
}

export namespace CreateCategoryResponse {
  export type AsObject = {
  }
}

export class UpdateCategoryRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateCategoryRequest;

  getMenuId(): string;
  setMenuId(value: string): UpdateCategoryRequest;

  getName(): string;
  setName(value: string): UpdateCategoryRequest;

  getFullName(): string;
  setFullName(value: string): UpdateCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCategoryRequest): UpdateCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCategoryRequest;
  static deserializeBinaryFromReader(message: UpdateCategoryRequest, reader: jspb.BinaryReader): UpdateCategoryRequest;
}

export namespace UpdateCategoryRequest {
  export type AsObject = {
    id: string,
    menuId: string,
    name: string,
    fullName: string,
  }
}

export class UpdateCategoryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCategoryResponse): UpdateCategoryResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCategoryResponse;
  static deserializeBinaryFromReader(message: UpdateCategoryResponse, reader: jspb.BinaryReader): UpdateCategoryResponse;
}

export namespace UpdateCategoryResponse {
  export type AsObject = {
  }
}

export class DeleteCategoryRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCategoryRequest): DeleteCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCategoryRequest;
  static deserializeBinaryFromReader(message: DeleteCategoryRequest, reader: jspb.BinaryReader): DeleteCategoryRequest;
}

export namespace DeleteCategoryRequest {
  export type AsObject = {
    id: string,
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

