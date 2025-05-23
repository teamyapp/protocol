// @generated by protobuf-ts 2.9.4 with parameter long_type_number
// @generated from protobuf file "teamy/message/task_link.proto" (syntax proto3)
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
 * @generated from protobuf message TaskLink
 */
export interface TaskLink {
    /**
     * @generated from protobuf field: uint64 id = 1;
     */
    id: number;
    /**
     * @generated from protobuf field: uint64 taskId = 2;
     */
    taskId: number;
    /**
     * @generated from protobuf field: string title = 3;
     */
    title: string;
    /**
     * @generated from protobuf field: string previewTitle = 4;
     */
    previewTitle: string;
    /**
     * @generated from protobuf field: string url = 5;
     */
    url: string;
    /**
     * @generated from protobuf field: optional string iconUrl = 6;
     */
    iconUrl?: string;
    /**
     * @generated from protobuf field: optional string iconHoverUrl = 7;
     */
    iconHoverUrl?: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp createdAt = 8;
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: optional google.protobuf.Timestamp updatedAt = 9;
     */
    updatedAt?: Timestamp;
}
// @generated message type with reflection information, may provide speed optimized methods
class TaskLink$Type extends MessageType<TaskLink> {
    constructor() {
        super("TaskLink", [
            { no: 1, name: "id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 2, name: "taskId", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 3, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "previewTitle", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "iconUrl", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "iconHoverUrl", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "createdAt", kind: "message", T: () => Timestamp },
            { no: 9, name: "updatedAt", kind: "message", T: () => Timestamp }
        ]);
    }
    create(value?: PartialMessage<TaskLink>): TaskLink {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = 0;
        message.taskId = 0;
        message.title = "";
        message.previewTitle = "";
        message.url = "";
        if (value !== undefined)
            reflectionMergePartial<TaskLink>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TaskLink): TaskLink {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 id */ 1:
                    message.id = reader.uint64().toNumber();
                    break;
                case /* uint64 taskId */ 2:
                    message.taskId = reader.uint64().toNumber();
                    break;
                case /* string title */ 3:
                    message.title = reader.string();
                    break;
                case /* string previewTitle */ 4:
                    message.previewTitle = reader.string();
                    break;
                case /* string url */ 5:
                    message.url = reader.string();
                    break;
                case /* optional string iconUrl */ 6:
                    message.iconUrl = reader.string();
                    break;
                case /* optional string iconHoverUrl */ 7:
                    message.iconHoverUrl = reader.string();
                    break;
                case /* google.protobuf.Timestamp createdAt */ 8:
                    message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
                    break;
                case /* optional google.protobuf.Timestamp updatedAt */ 9:
                    message.updatedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updatedAt);
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
    internalBinaryWrite(message: TaskLink, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).uint64(message.id);
        /* uint64 taskId = 2; */
        if (message.taskId !== 0)
            writer.tag(2, WireType.Varint).uint64(message.taskId);
        /* string title = 3; */
        if (message.title !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.title);
        /* string previewTitle = 4; */
        if (message.previewTitle !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.previewTitle);
        /* string url = 5; */
        if (message.url !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.url);
        /* optional string iconUrl = 6; */
        if (message.iconUrl !== undefined)
            writer.tag(6, WireType.LengthDelimited).string(message.iconUrl);
        /* optional string iconHoverUrl = 7; */
        if (message.iconHoverUrl !== undefined)
            writer.tag(7, WireType.LengthDelimited).string(message.iconHoverUrl);
        /* google.protobuf.Timestamp createdAt = 8; */
        if (message.createdAt)
            Timestamp.internalBinaryWrite(message.createdAt, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* optional google.protobuf.Timestamp updatedAt = 9; */
        if (message.updatedAt)
            Timestamp.internalBinaryWrite(message.updatedAt, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TaskLink
 */
export const TaskLink = new TaskLink$Type();
