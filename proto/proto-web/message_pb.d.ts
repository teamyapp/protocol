import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class CreateMessageRequest extends jspb.Message {
  getThreadid(): number;
  setThreadid(value: number): CreateMessageRequest;

  getBody(): string;
  setBody(value: string): CreateMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMessageRequest): CreateMessageRequest.AsObject;
  static serializeBinaryToWriter(message: CreateMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMessageRequest;
  static deserializeBinaryFromReader(message: CreateMessageRequest, reader: jspb.BinaryReader): CreateMessageRequest;
}

export namespace CreateMessageRequest {
  export type AsObject = {
    threadid: number,
    body: string,
  }
}

export class CreateMessageResponse extends jspb.Message {
  getMessageid(): number;
  setMessageid(value: number): CreateMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMessageResponse): CreateMessageResponse.AsObject;
  static serializeBinaryToWriter(message: CreateMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMessageResponse;
  static deserializeBinaryFromReader(message: CreateMessageResponse, reader: jspb.BinaryReader): CreateMessageResponse;
}

export namespace CreateMessageResponse {
  export type AsObject = {
    messageid: number,
  }
}

export class UpdateMessageRequest extends jspb.Message {
  getMessageid(): number;
  setMessageid(value: number): UpdateMessageRequest;

  getBody(): string;
  setBody(value: string): UpdateMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMessageRequest): UpdateMessageRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMessageRequest;
  static deserializeBinaryFromReader(message: UpdateMessageRequest, reader: jspb.BinaryReader): UpdateMessageRequest;
}

export namespace UpdateMessageRequest {
  export type AsObject = {
    messageid: number,
    body: string,
  }
}

export class DeleteMessageRequest extends jspb.Message {
  getMessageid(): number;
  setMessageid(value: number): DeleteMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMessageRequest): DeleteMessageRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMessageRequest;
  static deserializeBinaryFromReader(message: DeleteMessageRequest, reader: jspb.BinaryReader): DeleteMessageRequest;
}

export namespace DeleteMessageRequest {
  export type AsObject = {
    messageid: number,
  }
}

