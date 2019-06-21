import * as grpc from 'grpc';
import * as task_grpc_pb from './proto/task_grpc_pb';
import * as task_pb from './proto/task_pb';
import { Task, TaskSetting } from './task';
import { DiscordHook, SlackHook } from './webhook';

class TaskManager implements task_grpc_pb.ITaskServiceServer {
    map = new Map<number, Task>();

    addTask(c: grpc.ServerUnaryCall<task_pb.AddTaskRequest>, cb: grpc.sendUnaryData<task_pb.AddTaskResponse>) {
        const req = c.request.getTask()
        const webhooks = req.getWebhookList().map(w => {
            if(w.getPlatform() === task_pb.WebHook.Platform.DISCORD) return new DiscordHook({endpoint: w.getUrl()})
            else if(w.getPlatform() === task_pb.WebHook.Platform.SLACK) return new SlackHook({endpoint: w.getUrl()})
        }); 
        const task: TaskSetting = {
            endpoint: req.getUrl(),
            delay: req.getDelay(),
            jsonpoint: req.getJson(),
            expectval: req.getJsonval(),
            once: true,
            webhook: webhooks
        }
        const id = this.map.size;
        this.map.set(id, new Task(task));

        const res = new task_pb.AddTaskResponse();
        res.setId(id);
        cb(null, res);
    }

    getTaskStatus(c: grpc.ServerUnaryCall<task_pb.SendTaskStatus>, cb: grpc.sendUnaryData<task_pb.Void>) {}
}

const main = () => {
    const server = new grpc.Server();
    const port = process.env.GRPC_PORT || 5432;

    server.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());
    server.addService(
        task_grpc_pb.TaskServiceService as any, new TaskManager() // AS ANY
    );

    server.start();
    console.log('Runner Server Started.')
}
main();
