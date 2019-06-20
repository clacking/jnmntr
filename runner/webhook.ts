import fetch from 'node-fetch';

export type WebhookSetting = {
    discord?: string;
    slack?: string;
}

export type HookMessage = {}

export class Webhook {
    discord = '';
    slack = '';

    constructor() {
    }

    async send() {}
}
