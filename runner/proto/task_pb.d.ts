// package: 
// file: task.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class AddTaskRequest extends jspb.Message { 

    hasTask(): boolean;
    clearTask(): void;
    getTask(): Task | undefined;
    setTask(value?: Task): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddTaskRequest): AddTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddTaskRequest;
    static deserializeBinaryFromReader(message: AddTaskRequest, reader: jspb.BinaryReader): AddTaskRequest;
}

export namespace AddTaskRequest {
    export type AsObject = {
        task?: Task.AsObject,
    }
}

export class AddTaskResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddTaskResponse): AddTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddTaskResponse;
    static deserializeBinaryFromReader(message: AddTaskResponse, reader: jspb.BinaryReader): AddTaskResponse;
}

export namespace AddTaskResponse {
    export type AsObject = {
        id: number,
    }
}

export class SendTaskStatus extends jspb.Message { 
    getId(): number;
    setId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendTaskStatus.AsObject;
    static toObject(includeInstance: boolean, msg: SendTaskStatus): SendTaskStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendTaskStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendTaskStatus;
    static deserializeBinaryFromReader(message: SendTaskStatus, reader: jspb.BinaryReader): SendTaskStatus;
}

export namespace SendTaskStatus {
    export type AsObject = {
        id: number,
    }
}

export class Void extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Void.AsObject;
    static toObject(includeInstance: boolean, msg: Void): Void.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Void, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Void;
    static deserializeBinaryFromReader(message: Void, reader: jspb.BinaryReader): Void;
}

export namespace Void {
    export type AsObject = {
    }
}

export class Task extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): void;

    getDelay(): number;
    setDelay(value: number): void;

    getJson(): string;
    setJson(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Task.AsObject;
    static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Task;
    static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
    export type AsObject = {
        url: string,
        delay: number,
        json: string,
    }
}

export class TaskStatus extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getStatus(): TaskStatus.Status;
    setStatus(value: TaskStatus.Status): void;

    getUrl(): string;
    setUrl(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskStatus.AsObject;
    static toObject(includeInstance: boolean, msg: TaskStatus): TaskStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskStatus;
    static deserializeBinaryFromReader(message: TaskStatus, reader: jspb.BinaryReader): TaskStatus;
}

export namespace TaskStatus {
    export type AsObject = {
        id: number,
        status: TaskStatus.Status,
        url: string,
    }

    export enum Status {
    RUNNING = 0,
    STOP = 1,
    }

}
