import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class CreateInvitationRequest extends jspb.Message {
  getTeamid(): number;
  setTeamid(value: number): CreateInvitationRequest;

  getReceiverfirstname(): string;
  setReceiverfirstname(value: string): CreateInvitationRequest;

  getReceiverlastname(): string;
  setReceiverlastname(value: string): CreateInvitationRequest;

  getReceiveremail(): string;
  setReceiveremail(value: string): CreateInvitationRequest;

  getExpireat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireat(value?: google_protobuf_timestamp_pb.Timestamp): CreateInvitationRequest;
  hasExpireat(): boolean;
  clearExpireat(): CreateInvitationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInvitationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInvitationRequest): CreateInvitationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateInvitationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInvitationRequest;
  static deserializeBinaryFromReader(message: CreateInvitationRequest, reader: jspb.BinaryReader): CreateInvitationRequest;
}

export namespace CreateInvitationRequest {
  export type AsObject = {
    teamid: number,
    receiverfirstname: string,
    receiverlastname: string,
    receiveremail: string,
    expireat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateInvitationResponse extends jspb.Message {
  getInvitationid(): number;
  setInvitationid(value: number): CreateInvitationResponse;

  getInvitationcode(): string;
  setInvitationcode(value: string): CreateInvitationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInvitationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInvitationResponse): CreateInvitationResponse.AsObject;
  static serializeBinaryToWriter(message: CreateInvitationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInvitationResponse;
  static deserializeBinaryFromReader(message: CreateInvitationResponse, reader: jspb.BinaryReader): CreateInvitationResponse;
}

export namespace CreateInvitationResponse {
  export type AsObject = {
    invitationid: number,
    invitationcode: string,
  }
}

export class UpdateInvitationRequest extends jspb.Message {
  getInvitationid(): number;
  setInvitationid(value: number): UpdateInvitationRequest;

  getReceiverfirstname(): string;
  setReceiverfirstname(value: string): UpdateInvitationRequest;

  getReceiverlastname(): string;
  setReceiverlastname(value: string): UpdateInvitationRequest;

  getReceiveremail(): string;
  setReceiveremail(value: string): UpdateInvitationRequest;

  getExpireat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireat(value?: google_protobuf_timestamp_pb.Timestamp): UpdateInvitationRequest;
  hasExpireat(): boolean;
  clearExpireat(): UpdateInvitationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInvitationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInvitationRequest): UpdateInvitationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateInvitationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInvitationRequest;
  static deserializeBinaryFromReader(message: UpdateInvitationRequest, reader: jspb.BinaryReader): UpdateInvitationRequest;
}

export namespace UpdateInvitationRequest {
  export type AsObject = {
    invitationid: number,
    receiverfirstname: string,
    receiverlastname: string,
    receiveremail: string,
    expireat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AcceptInvitationRequest extends jspb.Message {
  getInvitationid(): number;
  setInvitationid(value: number): AcceptInvitationRequest;

  getInvitationcode(): string;
  setInvitationcode(value: string): AcceptInvitationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptInvitationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptInvitationRequest): AcceptInvitationRequest.AsObject;
  static serializeBinaryToWriter(message: AcceptInvitationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptInvitationRequest;
  static deserializeBinaryFromReader(message: AcceptInvitationRequest, reader: jspb.BinaryReader): AcceptInvitationRequest;
}

export namespace AcceptInvitationRequest {
  export type AsObject = {
    invitationid: number,
    invitationcode: string,
  }
}

export class DeclineInvitationRequest extends jspb.Message {
  getInvitationid(): number;
  setInvitationid(value: number): DeclineInvitationRequest;

  getInvitationcode(): string;
  setInvitationcode(value: string): DeclineInvitationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeclineInvitationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeclineInvitationRequest): DeclineInvitationRequest.AsObject;
  static serializeBinaryToWriter(message: DeclineInvitationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeclineInvitationRequest;
  static deserializeBinaryFromReader(message: DeclineInvitationRequest, reader: jspb.BinaryReader): DeclineInvitationRequest;
}

export namespace DeclineInvitationRequest {
  export type AsObject = {
    invitationid: number,
    invitationcode: string,
  }
}

export class DeleteInvitationRequest extends jspb.Message {
  getInvitationid(): number;
  setInvitationid(value: number): DeleteInvitationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInvitationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInvitationRequest): DeleteInvitationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteInvitationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInvitationRequest;
  static deserializeBinaryFromReader(message: DeleteInvitationRequest, reader: jspb.BinaryReader): DeleteInvitationRequest;
}

export namespace DeleteInvitationRequest {
  export type AsObject = {
    invitationid: number,
  }
}

