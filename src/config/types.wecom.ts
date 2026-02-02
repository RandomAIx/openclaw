import type { DmPolicy } from "./types.base.js";

export type WeComConfig = {
  enabled?: boolean;
  configWrites?: boolean;
  corpId?: string;
  agentId?: string;
  secret?: string;
  token?: string;
  aesKey?: string;
  webhookUrl?: string;
  dmPolicy?: DmPolicy;
  allowFrom?: Array<string | number>;
};
