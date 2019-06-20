// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var task_pb = require('./task_pb.js');

function serialize_AddTaskRequest(arg) {
  if (!(arg instanceof task_pb.AddTaskRequest)) {
    throw new Error('Expected argument of type AddTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AddTaskRequest(buffer_arg) {
  return task_pb.AddTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AddTaskResponse(arg) {
  if (!(arg instanceof task_pb.AddTaskResponse)) {
    throw new Error('Expected argument of type AddTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AddTaskResponse(buffer_arg) {
  return task_pb.AddTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SendTaskStatus(arg) {
  if (!(arg instanceof task_pb.SendTaskStatus)) {
    throw new Error('Expected argument of type SendTaskStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SendTaskStatus(buffer_arg) {
  return task_pb.SendTaskStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Void(arg) {
  if (!(arg instanceof task_pb.Void)) {
    throw new Error('Expected argument of type Void');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Void(buffer_arg) {
  return task_pb.Void.deserializeBinary(new Uint8Array(buffer_arg));
}


var TaskServiceService = exports.TaskServiceService = {
  addTask: {
    path: '/TaskService/AddTask',
    requestStream: false,
    responseStream: false,
    requestType: task_pb.AddTaskRequest,
    responseType: task_pb.AddTaskResponse,
    requestSerialize: serialize_AddTaskRequest,
    requestDeserialize: deserialize_AddTaskRequest,
    responseSerialize: serialize_AddTaskResponse,
    responseDeserialize: deserialize_AddTaskResponse,
  },
  getTaskStatus: {
    path: '/TaskService/GetTaskStatus',
    requestStream: false,
    responseStream: false,
    requestType: task_pb.SendTaskStatus,
    responseType: task_pb.Void,
    requestSerialize: serialize_SendTaskStatus,
    requestDeserialize: deserialize_SendTaskStatus,
    responseSerialize: serialize_Void,
    responseDeserialize: deserialize_Void,
  },
};

exports.TaskServiceClient = grpc.makeGenericClientConstructor(TaskServiceService);
