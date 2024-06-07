import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class GetActiveSprintRequest extends jspb.Message {
  getTeamid(): number;
  setTeamid(value: number): GetActiveSprintRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActiveSprintRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActiveSprintRequest): GetActiveSprintRequest.AsObject;
  static serializeBinaryToWriter(message: GetActiveSprintRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActiveSprintRequest;
  static deserializeBinaryFromReader(message: GetActiveSprintRequest, reader: jspb.BinaryReader): GetActiveSprintRequest;
}

export namespace GetActiveSprintRequest {
  export type AsObject = {
    teamid: number,
  }
}

export class SprintMsg extends jspb.Message {
  getId(): number;
  setId(value: number): SprintMsg;

  getStartat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartat(value?: google_protobuf_timestamp_pb.Timestamp): SprintMsg;
  hasStartat(): boolean;
  clearStartat(): SprintMsg;

  getEndat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndat(value?: google_protobuf_timestamp_pb.Timestamp): SprintMsg;
  hasEndat(): boolean;
  clearEndat(): SprintMsg;

  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): SprintMsg;
  hasCreatedat(): boolean;
  clearCreatedat(): SprintMsg;

  getOwningteamid(): number;
  setOwningteamid(value: number): SprintMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SprintMsg.AsObject;
  static toObject(includeInstance: boolean, msg: SprintMsg): SprintMsg.AsObject;
  static serializeBinaryToWriter(message: SprintMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SprintMsg;
  static deserializeBinaryFromReader(message: SprintMsg, reader: jspb.BinaryReader): SprintMsg;
}

export namespace SprintMsg {
  export type AsObject = {
    id: number,
    startat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    owningteamid: number,
  }
}

export class AddTaskToSprintRequest extends jspb.Message {
  getTaskid(): number;
  setTaskid(value: number): AddTaskToSprintRequest;

  getSprintid(): number;
  setSprintid(value: number): AddTaskToSprintRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTaskToSprintRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddTaskToSprintRequest): AddTaskToSprintRequest.AsObject;
  static serializeBinaryToWriter(message: AddTaskToSprintRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTaskToSprintRequest;
  static deserializeBinaryFromReader(message: AddTaskToSprintRequest, reader: jspb.BinaryReader): AddTaskToSprintRequest;
}

export namespace AddTaskToSprintRequest {
  export type AsObject = {
    taskid: number,
    sprintid: number,
  }
}

