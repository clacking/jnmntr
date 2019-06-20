// package: 
// file: task.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as task_pb from "./task_pb";

interface ITaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addTask: ITaskServiceService_IAddTask;
    getTaskStatus: ITaskServiceService_IGetTaskStatus;
}

interface ITaskServiceService_IAddTask extends grpc.MethodDefinition<task_pb.AddTaskRequest, task_pb.AddTaskResponse> {
    path: string; // "/.TaskService/AddTask"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<task_pb.AddTaskRequest>;
    requestDeserialize: grpc.deserialize<task_pb.AddTaskRequest>;
    responseSerialize: grpc.serialize<task_pb.AddTaskResponse>;
    responseDeserialize: grpc.deserialize<task_pb.AddTaskResponse>;
}
interface ITaskServiceService_IGetTaskStatus extends grpc.MethodDefinition<task_pb.SendTaskStatus, task_pb.Void> {
    path: string; // "/.TaskService/GetTaskStatus"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<task_pb.SendTaskStatus>;
    requestDeserialize: grpc.deserialize<task_pb.SendTaskStatus>;
    responseSerialize: grpc.serialize<task_pb.Void>;
    responseDeserialize: grpc.deserialize<task_pb.Void>;
}

export const TaskServiceService: ITaskServiceService;

export interface ITaskServiceServer {
    addTask: grpc.handleUnaryCall<task_pb.AddTaskRequest, task_pb.AddTaskResponse>;
    getTaskStatus: grpc.handleUnaryCall<task_pb.SendTaskStatus, task_pb.Void>;
}

export interface ITaskServiceClient {
    addTask(request: task_pb.AddTaskRequest, callback: (error: grpc.ServiceError | null, response: task_pb.AddTaskResponse) => void): grpc.ClientUnaryCall;
    addTask(request: task_pb.AddTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: task_pb.AddTaskResponse) => void): grpc.ClientUnaryCall;
    addTask(request: task_pb.AddTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: task_pb.AddTaskResponse) => void): grpc.ClientUnaryCall;
    getTaskStatus(request: task_pb.SendTaskStatus, callback: (error: grpc.ServiceError | null, response: task_pb.Void) => void): grpc.ClientUnaryCall;
    getTaskStatus(request: task_pb.SendTaskStatus, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: task_pb.Void) => void): grpc.ClientUnaryCall;
    getTaskStatus(request: task_pb.SendTaskStatus, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: task_pb.Void) => void): grpc.ClientUnaryCall;
}

export class TaskServiceClient extends grpc.Client implements ITaskServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addTask(request: task_pb.AddTaskRequest, callback: (error: grpc.ServiceError | null, response: task_pb.AddTaskResponse) => void): grpc.ClientUnaryCall;
    public addTask(request: task_pb.AddTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: task_pb.AddTaskResponse) => void): grpc.ClientUnaryCall;
    public addTask(request: task_pb.AddTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: task_pb.AddTaskResponse) => void): grpc.ClientUnaryCall;
    public getTaskStatus(request: task_pb.SendTaskStatus, callback: (error: grpc.ServiceError | null, response: task_pb.Void) => void): grpc.ClientUnaryCall;
    public getTaskStatus(request: task_pb.SendTaskStatus, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: task_pb.Void) => void): grpc.ClientUnaryCall;
    public getTaskStatus(request: task_pb.SendTaskStatus, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: task_pb.Void) => void): grpc.ClientUnaryCall;
}
