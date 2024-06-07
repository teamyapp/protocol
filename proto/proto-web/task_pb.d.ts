import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class TaskMsg extends jspb.Message {
  getTaskid(): number;
  setTaskid(value: number): TaskMsg;

  getGoal(): string;
  setGoal(value: string): TaskMsg;

  getContext(): string;
  setContext(value: string): TaskMsg;
  hasContext(): boolean;
  clearContext(): TaskMsg;

  getEffort(): google_protobuf_duration_pb.Duration | undefined;
  setEffort(value?: google_protobuf_duration_pb.Duration): TaskMsg;
  hasEffort(): boolean;
  clearEffort(): TaskMsg;

  getDueat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDueat(value?: google_protobuf_timestamp_pb.Timestamp): TaskMsg;
  hasDueat(): boolean;
  clearDueat(): TaskMsg;

  getPriority(): Priority;
  setPriority(value: Priority): TaskMsg;
  hasPriority(): boolean;
  clearPriority(): TaskMsg;

  getStatus(): TaskStatus;
  setStatus(value: TaskStatus): TaskMsg;

  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): TaskMsg;
  hasCreatedat(): boolean;
  clearCreatedat(): TaskMsg;

  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): TaskMsg;
  hasUpdatedat(): boolean;
  clearUpdatedat(): TaskMsg;

  getOwneruserid(): number;
  setOwneruserid(value: number): TaskMsg;
  hasOwneruserid(): boolean;
  clearOwneruserid(): TaskMsg;

  getOwningteamid(): number;
  setOwningteamid(value: number): TaskMsg;

  getCreatoruserid(): number;
  setCreatoruserid(value: number): TaskMsg;

  getCommentthreadid(): number;
  setCommentthreadid(value: number): TaskMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskMsg.AsObject;
  static toObject(includeInstance: boolean, msg: TaskMsg): TaskMsg.AsObject;
  static serializeBinaryToWriter(message: TaskMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskMsg;
  static deserializeBinaryFromReader(message: TaskMsg, reader: jspb.BinaryReader): TaskMsg;
}

export namespace TaskMsg {
  export type AsObject = {
    taskid: number,
    goal: string,
    context?: string,
    effort?: google_protobuf_duration_pb.Duration.AsObject,
    dueat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    priority?: Priority,
    status: TaskStatus,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    owneruserid?: number,
    owningteamid: number,
    creatoruserid: number,
    commentthreadid: number,
  }

  export enum ContextCase { 
    _CONTEXT_NOT_SET = 0,
    CONTEXT = 3,
  }

  export enum EffortCase { 
    _EFFORT_NOT_SET = 0,
    EFFORT = 4,
  }

  export enum DueatCase { 
    _DUEAT_NOT_SET = 0,
    DUEAT = 5,
  }

  export enum PriorityCase { 
    _PRIORITY_NOT_SET = 0,
    PRIORITY = 6,
  }

  export enum UpdatedatCase { 
    _UPDATEDAT_NOT_SET = 0,
    UPDATEDAT = 9,
  }

  export enum OwneruseridCase { 
    _OWNERUSERID_NOT_SET = 0,
    OWNERUSERID = 10,
  }
}

export class GetTaskRequest extends jspb.Message {
  getTaskid(): number;
  setTaskid(value: number): GetTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaskRequest): GetTaskRequest.AsObject;
  static serializeBinaryToWriter(message: GetTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaskRequest;
  static deserializeBinaryFromReader(message: GetTaskRequest, reader: jspb.BinaryReader): GetTaskRequest;
}

export namespace GetTaskRequest {
  export type AsObject = {
    taskid: number,
  }
}

export class GetAwaitForTasksRequest extends jspb.Message {
  getAwaitingtaskid(): number;
  setAwaitingtaskid(value: number): GetAwaitForTasksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAwaitForTasksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAwaitForTasksRequest): GetAwaitForTasksRequest.AsObject;
  static serializeBinaryToWriter(message: GetAwaitForTasksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAwaitForTasksRequest;
  static deserializeBinaryFromReader(message: GetAwaitForTasksRequest, reader: jspb.BinaryReader): GetAwaitForTasksRequest;
}

export namespace GetAwaitForTasksRequest {
  export type AsObject = {
    awaitingtaskid: number,
  }
}

export class GetAwaitForTasksResponse extends jspb.Message {
  getTasksList(): Array<TaskMsg>;
  setTasksList(value: Array<TaskMsg>): GetAwaitForTasksResponse;
  clearTasksList(): GetAwaitForTasksResponse;
  addTasks(value?: TaskMsg, index?: number): TaskMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAwaitForTasksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAwaitForTasksResponse): GetAwaitForTasksResponse.AsObject;
  static serializeBinaryToWriter(message: GetAwaitForTasksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAwaitForTasksResponse;
  static deserializeBinaryFromReader(message: GetAwaitForTasksResponse, reader: jspb.BinaryReader): GetAwaitForTasksResponse;
}

export namespace GetAwaitForTasksResponse {
  export type AsObject = {
    tasksList: Array<TaskMsg.AsObject>,
  }
}

export class CreateTaskRequest extends jspb.Message {
  getTeamid(): number;
  setTeamid(value: number): CreateTaskRequest;

  getGoal(): string;
  setGoal(value: string): CreateTaskRequest;

  getContext(): string;
  setContext(value: string): CreateTaskRequest;
  hasContext(): boolean;
  clearContext(): CreateTaskRequest;

  getOwneruserid(): number;
  setOwneruserid(value: number): CreateTaskRequest;
  hasOwneruserid(): boolean;
  clearOwneruserid(): CreateTaskRequest;

  getDueat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDueat(value?: google_protobuf_timestamp_pb.Timestamp): CreateTaskRequest;
  hasDueat(): boolean;
  clearDueat(): CreateTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskRequest): CreateTaskRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskRequest;
  static deserializeBinaryFromReader(message: CreateTaskRequest, reader: jspb.BinaryReader): CreateTaskRequest;
}

export namespace CreateTaskRequest {
  export type AsObject = {
    teamid: number,
    goal: string,
    context?: string,
    owneruserid?: number,
    dueat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum ContextCase { 
    _CONTEXT_NOT_SET = 0,
    CONTEXT = 3,
  }

  export enum OwneruseridCase { 
    _OWNERUSERID_NOT_SET = 0,
    OWNERUSERID = 4,
  }

  export enum DueatCase { 
    _DUEAT_NOT_SET = 0,
    DUEAT = 5,
  }
}

export class CreateTaskResponse extends jspb.Message {
  getTaskid(): number;
  setTaskid(value: number): CreateTaskResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskResponse): CreateTaskResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskResponse;
  static deserializeBinaryFromReader(message: CreateTaskResponse, reader: jspb.BinaryReader): CreateTaskResponse;
}

export namespace CreateTaskResponse {
  export type AsObject = {
    taskid: number,
  }
}

export class UpdateTaskRequest extends jspb.Message {
  getTaskid(): number;
  setTaskid(value: number): UpdateTaskRequest;

  getGoal(): string;
  setGoal(value: string): UpdateTaskRequest;

  getContext(): string;
  setContext(value: string): UpdateTaskRequest;
  hasContext(): boolean;
  clearContext(): UpdateTaskRequest;

  getOwneruserid(): number;
  setOwneruserid(value: number): UpdateTaskRequest;
  hasOwneruserid(): boolean;
  clearOwneruserid(): UpdateTaskRequest;

  getOwningteamid(): number;
  setOwningteamid(value: number): UpdateTaskRequest;

  getEffort(): google_protobuf_duration_pb.Duration | undefined;
  setEffort(value?: google_protobuf_duration_pb.Duration): UpdateTaskRequest;
  hasEffort(): boolean;
  clearEffort(): UpdateTaskRequest;

  getDueat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDueat(value?: google_protobuf_timestamp_pb.Timestamp): UpdateTaskRequest;
  hasDueat(): boolean;
  clearDueat(): UpdateTaskRequest;

  getPriority(): Priority;
  setPriority(value: Priority): UpdateTaskRequest;
  hasPriority(): boolean;
  clearPriority(): UpdateTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTaskRequest): UpdateTaskRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTaskRequest;
  static deserializeBinaryFromReader(message: UpdateTaskRequest, reader: jspb.BinaryReader): UpdateTaskRequest;
}

export namespace UpdateTaskRequest {
  export type AsObject = {
    taskid: number,
    goal: string,
    context?: string,
    owneruserid?: number,
    owningteamid: number,
    effort?: google_protobuf_duration_pb.Duration.AsObject,
    dueat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    priority?: Priority,
  }

  export enum ContextCase { 
    _CONTEXT_NOT_SET = 0,
    CONTEXT = 3,
  }

  export enum OwneruseridCase { 
    _OWNERUSERID_NOT_SET = 0,
    OWNERUSERID = 4,
  }

  export enum EffortCase { 
    _EFFORT_NOT_SET = 0,
    EFFORT = 6,
  }

  export enum DueatCase { 
    _DUEAT_NOT_SET = 0,
    DUEAT = 7,
  }

  export enum PriorityCase { 
    _PRIORITY_NOT_SET = 0,
    PRIORITY = 8,
  }
}

export class DeleteTaskRequest extends jspb.Message {
  getTaskid(): number;
  setTaskid(value: number): DeleteTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTaskRequest): DeleteTaskRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTaskRequest;
  static deserializeBinaryFromReader(message: DeleteTaskRequest, reader: jspb.BinaryReader): DeleteTaskRequest;
}

export namespace DeleteTaskRequest {
  export type AsObject = {
    taskid: number,
  }
}

export class MoveTaskToUpcomingRequest extends jspb.Message {
  getTaskid(): number;
  setTaskid(value: number): MoveTaskToUpcomingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveTaskToUpcomingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveTaskToUpcomingRequest): MoveTaskToUpcomingRequest.AsObject;
  static serializeBinaryToWriter(message: MoveTaskToUpcomingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveTaskToUpcomingRequest;
  static deserializeBinaryFromReader(message: MoveTaskToUpcomingRequest, reader: jspb.BinaryReader): MoveTaskToUpcomingRequest;
}

export namespace MoveTaskToUpcomingRequest {
  export type AsObject = {
    taskid: number,
  }
}

export class MoveTaskToInProgressRequest extends jspb.Message {
  getTaskid(): number;
  setTaskid(value: number): MoveTaskToInProgressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveTaskToInProgressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveTaskToInProgressRequest): MoveTaskToInProgressRequest.AsObject;
  static serializeBinaryToWriter(message: MoveTaskToInProgressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveTaskToInProgressRequest;
  static deserializeBinaryFromReader(message: MoveTaskToInProgressRequest, reader: jspb.BinaryReader): MoveTaskToInProgressRequest;
}

export namespace MoveTaskToInProgressRequest {
  export type AsObject = {
    taskid: number,
  }
}

export class MoveTaskToDeliveredRequest extends jspb.Message {
  getTaskid(): number;
  setTaskid(value: number): MoveTaskToDeliveredRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveTaskToDeliveredRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveTaskToDeliveredRequest): MoveTaskToDeliveredRequest.AsObject;
  static serializeBinaryToWriter(message: MoveTaskToDeliveredRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveTaskToDeliveredRequest;
  static deserializeBinaryFromReader(message: MoveTaskToDeliveredRequest, reader: jspb.BinaryReader): MoveTaskToDeliveredRequest;
}

export namespace MoveTaskToDeliveredRequest {
  export type AsObject = {
    taskid: number,
  }
}

export class MoveTaskToBlockedRequest extends jspb.Message {
  getTaskid(): number;
  setTaskid(value: number): MoveTaskToBlockedRequest;

  getReason(): string;
  setReason(value: string): MoveTaskToBlockedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveTaskToBlockedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveTaskToBlockedRequest): MoveTaskToBlockedRequest.AsObject;
  static serializeBinaryToWriter(message: MoveTaskToBlockedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveTaskToBlockedRequest;
  static deserializeBinaryFromReader(message: MoveTaskToBlockedRequest, reader: jspb.BinaryReader): MoveTaskToBlockedRequest;
}

export namespace MoveTaskToBlockedRequest {
  export type AsObject = {
    taskid: number,
    reason: string,
  }
}

export class AddAwaitForTaskRequest extends jspb.Message {
  getAwaitingtaskid(): number;
  setAwaitingtaskid(value: number): AddAwaitForTaskRequest;

  getAwaitfortaskid(): number;
  setAwaitfortaskid(value: number): AddAwaitForTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddAwaitForTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddAwaitForTaskRequest): AddAwaitForTaskRequest.AsObject;
  static serializeBinaryToWriter(message: AddAwaitForTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddAwaitForTaskRequest;
  static deserializeBinaryFromReader(message: AddAwaitForTaskRequest, reader: jspb.BinaryReader): AddAwaitForTaskRequest;
}

export namespace AddAwaitForTaskRequest {
  export type AsObject = {
    awaitingtaskid: number,
    awaitfortaskid: number,
  }
}

export class RemoveAwaitForTaskRequest extends jspb.Message {
  getAwaitingtaskid(): number;
  setAwaitingtaskid(value: number): RemoveAwaitForTaskRequest;

  getAwaitfortaskid(): number;
  setAwaitfortaskid(value: number): RemoveAwaitForTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveAwaitForTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveAwaitForTaskRequest): RemoveAwaitForTaskRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveAwaitForTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveAwaitForTaskRequest;
  static deserializeBinaryFromReader(message: RemoveAwaitForTaskRequest, reader: jspb.BinaryReader): RemoveAwaitForTaskRequest;
}

export namespace RemoveAwaitForTaskRequest {
  export type AsObject = {
    awaitingtaskid: number,
    awaitfortaskid: number,
  }
}

export enum TaskStatus { 
  TODO = 0,
  INPROGRESS = 1,
  PAUSED = 2,
  AWAITING = 3,
  BLOCKED = 4,
  DELIVERED = 5,
}
export enum Priority { 
  URGENT = 0,
  HIGH = 1,
  MEDIUM = 2,
  LOW = 3,
}
