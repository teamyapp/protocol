import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class TeamMember extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): TeamMember;

  getFirstname(): string;
  setFirstname(value: string): TeamMember;

  getLastname(): string;
  setLastname(value: string): TeamMember;

  getProfileurl(): string;
  setProfileurl(value: string): TeamMember;
  hasProfileurl(): boolean;
  clearProfileurl(): TeamMember;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamMember.AsObject;
  static toObject(includeInstance: boolean, msg: TeamMember): TeamMember.AsObject;
  static serializeBinaryToWriter(message: TeamMember, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamMember;
  static deserializeBinaryFromReader(message: TeamMember, reader: jspb.BinaryReader): TeamMember;
}

export namespace TeamMember {
  export type AsObject = {
    userid: number,
    firstname: string,
    lastname: string,
    profileurl?: string,
  }

  export enum ProfileurlCase { 
    _PROFILEURL_NOT_SET = 0,
    PROFILEURL = 4,
  }
}

export class TeamMemberGroup extends jspb.Message {
  getGroupid(): number;
  setGroupid(value: number): TeamMemberGroup;

  getName(): string;
  setName(value: string): TeamMemberGroup;

  getMemberuseridsList(): Array<number>;
  setMemberuseridsList(value: Array<number>): TeamMemberGroup;
  clearMemberuseridsList(): TeamMemberGroup;
  addMemberuserids(value: number, index?: number): TeamMemberGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamMemberGroup.AsObject;
  static toObject(includeInstance: boolean, msg: TeamMemberGroup): TeamMemberGroup.AsObject;
  static serializeBinaryToWriter(message: TeamMemberGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamMemberGroup;
  static deserializeBinaryFromReader(message: TeamMemberGroup, reader: jspb.BinaryReader): TeamMemberGroup;
}

export namespace TeamMemberGroup {
  export type AsObject = {
    groupid: number,
    name: string,
    memberuseridsList: Array<number>,
  }
}

export class CreateTeamRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateTeamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTeamRequest): CreateTeamRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTeamRequest;
  static deserializeBinaryFromReader(message: CreateTeamRequest, reader: jspb.BinaryReader): CreateTeamRequest;
}

export namespace CreateTeamRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateTeamResponse extends jspb.Message {
  getTeamid(): number;
  setTeamid(value: number): CreateTeamResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTeamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTeamResponse): CreateTeamResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTeamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTeamResponse;
  static deserializeBinaryFromReader(message: CreateTeamResponse, reader: jspb.BinaryReader): CreateTeamResponse;
}

export namespace CreateTeamResponse {
  export type AsObject = {
    teamid: number,
  }
}

export class UpdateTeamRequest extends jspb.Message {
  getTeamid(): number;
  setTeamid(value: number): UpdateTeamRequest;

  getName(): string;
  setName(value: string): UpdateTeamRequest;

  getIconurl(): string;
  setIconurl(value: string): UpdateTeamRequest;

  getOwneruserid(): number;
  setOwneruserid(value: number): UpdateTeamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTeamRequest): UpdateTeamRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTeamRequest;
  static deserializeBinaryFromReader(message: UpdateTeamRequest, reader: jspb.BinaryReader): UpdateTeamRequest;
}

export namespace UpdateTeamRequest {
  export type AsObject = {
    teamid: number,
    name: string,
    iconurl: string,
    owneruserid: number,
  }
}

export class ListTeamMembersRequest extends jspb.Message {
  getTeamid(): number;
  setTeamid(value: number): ListTeamMembersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTeamMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTeamMembersRequest): ListTeamMembersRequest.AsObject;
  static serializeBinaryToWriter(message: ListTeamMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTeamMembersRequest;
  static deserializeBinaryFromReader(message: ListTeamMembersRequest, reader: jspb.BinaryReader): ListTeamMembersRequest;
}

export namespace ListTeamMembersRequest {
  export type AsObject = {
    teamid: number,
  }
}

export class ListTeamMembersResponse extends jspb.Message {
  getTeammembersList(): Array<TeamMember>;
  setTeammembersList(value: Array<TeamMember>): ListTeamMembersResponse;
  clearTeammembersList(): ListTeamMembersResponse;
  addTeammembers(value?: TeamMember, index?: number): TeamMember;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTeamMembersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTeamMembersResponse): ListTeamMembersResponse.AsObject;
  static serializeBinaryToWriter(message: ListTeamMembersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTeamMembersResponse;
  static deserializeBinaryFromReader(message: ListTeamMembersResponse, reader: jspb.BinaryReader): ListTeamMembersResponse;
}

export namespace ListTeamMembersResponse {
  export type AsObject = {
    teammembersList: Array<TeamMember.AsObject>,
  }
}

export class AddMemberToTeamRequest extends jspb.Message {
  getTeamid(): number;
  setTeamid(value: number): AddMemberToTeamRequest;

  getMemberuserid(): number;
  setMemberuserid(value: number): AddMemberToTeamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddMemberToTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddMemberToTeamRequest): AddMemberToTeamRequest.AsObject;
  static serializeBinaryToWriter(message: AddMemberToTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddMemberToTeamRequest;
  static deserializeBinaryFromReader(message: AddMemberToTeamRequest, reader: jspb.BinaryReader): AddMemberToTeamRequest;
}

export namespace AddMemberToTeamRequest {
  export type AsObject = {
    teamid: number,
    memberuserid: number,
  }
}

export class RemoveMemberFromRequest extends jspb.Message {
  getTeamid(): number;
  setTeamid(value: number): RemoveMemberFromRequest;

  getMemberuserid(): number;
  setMemberuserid(value: number): RemoveMemberFromRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMemberFromRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMemberFromRequest): RemoveMemberFromRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveMemberFromRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMemberFromRequest;
  static deserializeBinaryFromReader(message: RemoveMemberFromRequest, reader: jspb.BinaryReader): RemoveMemberFromRequest;
}

export namespace RemoveMemberFromRequest {
  export type AsObject = {
    teamid: number,
    memberuserid: number,
  }
}

export class ListMemberGroupsRequest extends jspb.Message {
  getTeamid(): number;
  setTeamid(value: number): ListMemberGroupsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMemberGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMemberGroupsRequest): ListMemberGroupsRequest.AsObject;
  static serializeBinaryToWriter(message: ListMemberGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMemberGroupsRequest;
  static deserializeBinaryFromReader(message: ListMemberGroupsRequest, reader: jspb.BinaryReader): ListMemberGroupsRequest;
}

export namespace ListMemberGroupsRequest {
  export type AsObject = {
    teamid: number,
  }
}

export class ListTeamMemberGroupsResponse extends jspb.Message {
  getGroupsList(): Array<TeamMemberGroup>;
  setGroupsList(value: Array<TeamMemberGroup>): ListTeamMemberGroupsResponse;
  clearGroupsList(): ListTeamMemberGroupsResponse;
  addGroups(value?: TeamMemberGroup, index?: number): TeamMemberGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTeamMemberGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTeamMemberGroupsResponse): ListTeamMemberGroupsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTeamMemberGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTeamMemberGroupsResponse;
  static deserializeBinaryFromReader(message: ListTeamMemberGroupsResponse, reader: jspb.BinaryReader): ListTeamMemberGroupsResponse;
}

export namespace ListTeamMemberGroupsResponse {
  export type AsObject = {
    groupsList: Array<TeamMemberGroup.AsObject>,
  }
}

export class CreateTeamMemberGroupRequest extends jspb.Message {
  getTeamid(): number;
  setTeamid(value: number): CreateTeamMemberGroupRequest;

  getName(): string;
  setName(value: string): CreateTeamMemberGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTeamMemberGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTeamMemberGroupRequest): CreateTeamMemberGroupRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTeamMemberGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTeamMemberGroupRequest;
  static deserializeBinaryFromReader(message: CreateTeamMemberGroupRequest, reader: jspb.BinaryReader): CreateTeamMemberGroupRequest;
}

export namespace CreateTeamMemberGroupRequest {
  export type AsObject = {
    teamid: number,
    name: string,
  }
}

export class CreateTeamMemberGroupResponse extends jspb.Message {
  getGroupid(): number;
  setGroupid(value: number): CreateTeamMemberGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTeamMemberGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTeamMemberGroupResponse): CreateTeamMemberGroupResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTeamMemberGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTeamMemberGroupResponse;
  static deserializeBinaryFromReader(message: CreateTeamMemberGroupResponse, reader: jspb.BinaryReader): CreateTeamMemberGroupResponse;
}

export namespace CreateTeamMemberGroupResponse {
  export type AsObject = {
    groupid: number,
  }
}

export class UpdateTeamMemberGroupRequest extends jspb.Message {
  getGroupid(): number;
  setGroupid(value: number): UpdateTeamMemberGroupRequest;

  getName(): string;
  setName(value: string): UpdateTeamMemberGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTeamMemberGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTeamMemberGroupRequest): UpdateTeamMemberGroupRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTeamMemberGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTeamMemberGroupRequest;
  static deserializeBinaryFromReader(message: UpdateTeamMemberGroupRequest, reader: jspb.BinaryReader): UpdateTeamMemberGroupRequest;
}

export namespace UpdateTeamMemberGroupRequest {
  export type AsObject = {
    groupid: number,
    name: string,
  }
}

export class DeleteTeamMemberGroupRequest extends jspb.Message {
  getGroupid(): number;
  setGroupid(value: number): DeleteTeamMemberGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTeamMemberGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTeamMemberGroupRequest): DeleteTeamMemberGroupRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTeamMemberGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTeamMemberGroupRequest;
  static deserializeBinaryFromReader(message: DeleteTeamMemberGroupRequest, reader: jspb.BinaryReader): DeleteTeamMemberGroupRequest;
}

export namespace DeleteTeamMemberGroupRequest {
  export type AsObject = {
    groupid: number,
  }
}

export class AddTeamMemberToGroupRequest extends jspb.Message {
  getGroupid(): number;
  setGroupid(value: number): AddTeamMemberToGroupRequest;

  getMemberuserid(): number;
  setMemberuserid(value: number): AddTeamMemberToGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTeamMemberToGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddTeamMemberToGroupRequest): AddTeamMemberToGroupRequest.AsObject;
  static serializeBinaryToWriter(message: AddTeamMemberToGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTeamMemberToGroupRequest;
  static deserializeBinaryFromReader(message: AddTeamMemberToGroupRequest, reader: jspb.BinaryReader): AddTeamMemberToGroupRequest;
}

export namespace AddTeamMemberToGroupRequest {
  export type AsObject = {
    groupid: number,
    memberuserid: number,
  }
}

export class RemoveTeamMemberFromGroupRequest extends jspb.Message {
  getGroupid(): number;
  setGroupid(value: number): RemoveTeamMemberFromGroupRequest;

  getMemberuserid(): number;
  setMemberuserid(value: number): RemoveTeamMemberFromGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTeamMemberFromGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTeamMemberFromGroupRequest): RemoveTeamMemberFromGroupRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveTeamMemberFromGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTeamMemberFromGroupRequest;
  static deserializeBinaryFromReader(message: RemoveTeamMemberFromGroupRequest, reader: jspb.BinaryReader): RemoveTeamMemberFromGroupRequest;
}

export namespace RemoveTeamMemberFromGroupRequest {
  export type AsObject = {
    groupid: number,
    memberuserid: number,
  }
}

