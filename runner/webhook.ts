import fetch from 'node-fetch';

export enum NotifyPlatform {
    Slack, Discord
}

export type HookMessage = {
    sendername?: string;
    message: string;
}

export type WebhookSetting = {
    endpoint: string;
}

export interface Webhook {
    platform: NotifyPlatform;
    setting: WebhookSetting;
    send(message: HookMessage): Promise<boolean>;
}

export class DiscordHook implements Webhook {
    platform = NotifyPlatform.Discord;
    setting: WebhookSetting;

    constructor(setting) {
        this.setting = setting;
    }

    async send(message: HookMessage) {
        const content = JSON.stringify({ username: message.sendername || 'jnMonitor', content: message.message });
        const req = await fetch(this.setting.endpoint, {
            method: 'POST', body: content, headers: { "Content-Type": "application/json; charset=utf-8" }
        });
        return req.ok;
    }
}

export class SlackHook implements Webhook {
    platform = NotifyPlatform.Slack;
    setting: WebhookSetting;

    constructor(setting) {
        this.setting = setting;
    }

    async send(message: HookMessage) {
        const content = JSON.stringify({ username: message.sendername || 'jnMonitor', text: message.message });
        const req = await fetch(this.setting.endpoint, {
            method: 'POST', body: content, headers: { "Content-Type": "application/json; charset=utf-8" }
        });
        return req.ok;
    }
}

