import type { DmPolicy } from "./types.base.js";

export type DingTalkConfig = {
  enabled?: boolean;
  configWrites?: boolean;
  webhookUrl?: string;
  webhookSecret?: string;
  token?: string;
  aesKey?: string;
  dmPolicy?: DmPolicy;
  allowFrom?: Array<string | number>;
};
