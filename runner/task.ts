import fetch from 'node-fetch';
import { Webhook } from './webhook';

export enum Status {
    Running, Stop
}

export type TaskSetting = {
    endpoint: string;
    delay: number;
    jsonpoint: string;
    expectval: string;
    proxies?: string[];
    once: boolean; // if find stop
    webhook: Webhook;
}

export class Task {
    jsonPath: string[];
    intervalIns: NodeJS.Timeout | null; // setInterval instance
    taskSet: TaskSetting;
    status: Status = Status.Stop;

    constructor(task: TaskSetting) {
        this.taskSet = task;
        //this.createPoint(this.taskSet.jsonpoint);
        this.startTask();
    }

    /**
     * create JOSN Path
     */
    createPoint(jsonpoint: string) {
        this.jsonPath = jsonpoint.split('->'); // need better way
    }

    startTask() {
        this.status = Status.Running;
        this.intervalIns = setInterval(this.checkEndpoint, this.taskSet.delay);
    }

    checkjson(json: Object) {
        if(json.hasOwnProperty(this.taskSet.endpoint)) {
            if(json[this.taskSet.jsonpoint] === this.taskSet.expectval) {
                this.taskSet.webhook.send();
                if(this.taskSet.once) this.stopTask();
            }
        }

        /* Make Deeper
        const arr = [...this.jsonPath];
        while(arr.length > 0) {
            const f = arr.shift();
        }
        */
    }

    // fetch endpoint
    async checkEndpoint() {
        const url = this.taskSet.endpoint;
        const data = await fetch(url, {});
        const json = await data.json();
        this.checkjson(json);
    }

    // stop task
    stopTask() {
        if(this.intervalIns) {
            clearInterval(this.intervalIns);
            this.intervalIns = null;
            this.status = Status.Stop;
        }
    }
}
