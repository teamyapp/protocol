// @generated by protobuf-ts 2.9.4 with parameter long_type_number
// @generated from protobuf file "teamy/message/team.proto" (syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../../google/protobuf/timestamp";
/**
 * @generated from protobuf message Team
 */
export interface Team {
    /**
     * @generated from protobuf field: uint64 id = 1;
     */
    id: number;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: optional string iconUrl = 3;
     */
    iconUrl?: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp createdAt = 4;
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: optional google.protobuf.Timestamp updatedAt = 5;
     */
    updatedAt?: Timestamp;
    /**
     * @generated from protobuf field: uint64 creatorUserId = 6;
     */
    creatorUserId: number;
    /**
     * @generated from protobuf field: uint64 ownerUserId = 7;
     */
    ownerUserId: number;
    /**
     * @generated from protobuf field: optional uint64 activeSprintId = 8;
     */
    activeSprintId?: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class Team$Type extends MessageType<Team> {
    constructor() {
        super("Team", [
            { no: 1, name: "id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "iconUrl", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "createdAt", kind: "message", T: () => Timestamp },
            { no: 5, name: "updatedAt", kind: "message", T: () => Timestamp },
            { no: 6, name: "creatorUserId", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 7, name: "ownerUserId", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 8, name: "activeSprintId", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ }
        ]);
    }
    create(value?: PartialMessage<Team>): Team {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = 0;
        message.name = "";
        message.creatorUserId = 0;
        message.ownerUserId = 0;
        if (value !== undefined)
            reflectionMergePartial<Team>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Team): Team {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 id */ 1:
                    message.id = reader.uint64().toNumber();
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
                    break;
                case /* optional string iconUrl */ 3:
                    message.iconUrl = reader.string();
                    break;
                case /* google.protobuf.Timestamp createdAt */ 4:
                    message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
                    break;
                case /* optional google.protobuf.Timestamp updatedAt */ 5:
                    message.updatedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updatedAt);
                    break;
                case /* uint64 creatorUserId */ 6:
                    message.creatorUserId = reader.uint64().toNumber();
                    break;
                case /* uint64 ownerUserId */ 7:
                    message.ownerUserId = reader.uint64().toNumber();
                    break;
                case /* optional uint64 activeSprintId */ 8:
                    message.activeSprintId = reader.uint64().toNumber();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Team, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).uint64(message.id);
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.name);
        /* optional string iconUrl = 3; */
        if (message.iconUrl !== undefined)
            writer.tag(3, WireType.LengthDelimited).string(message.iconUrl);
        /* google.protobuf.Timestamp createdAt = 4; */
        if (message.createdAt)
            Timestamp.internalBinaryWrite(message.createdAt, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* optional google.protobuf.Timestamp updatedAt = 5; */
        if (message.updatedAt)
            Timestamp.internalBinaryWrite(message.updatedAt, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* uint64 creatorUserId = 6; */
        if (message.creatorUserId !== 0)
            writer.tag(6, WireType.Varint).uint64(message.creatorUserId);
        /* uint64 ownerUserId = 7; */
        if (message.ownerUserId !== 0)
            writer.tag(7, WireType.Varint).uint64(message.ownerUserId);
        /* optional uint64 activeSprintId = 8; */
        if (message.activeSprintId !== undefined)
            writer.tag(8, WireType.Varint).uint64(message.activeSprintId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Team
 */
export const Team = new Team$Type();
