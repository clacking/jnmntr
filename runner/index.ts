import grpc from 'grpc';
import task_grpc_pb from './proto/task_grpc_pb';
import task_pb from './proto/task_pb';
import { Task } from './task';

class TaskManager implements task_grpc_pb.ITaskServiceServer {
    map = new Map<number, Task>();

    addTask(c: grpc.ServerUnaryCall<task_pb.AddTaskRequest>, cb: grpc.sendUnaryData<task_pb.AddTaskResponse>) {}

    getTaskStatus(c: grpc.ServerUnaryCall<task_pb.SendTaskStatus>, cb: grpc.sendUnaryData<task_pb.Void>) {}
}

const main = () => {
    const server = new grpc.Server();
    const port = 9876;

    server.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());
    server.addService(
        TaskManager, new TaskManager()
    );

    server.start();
}
main();
