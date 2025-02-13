import { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiClient {
  constructor(private context: APIRequestContext) {}

  async get(endpoint: string): Promise<APIResponse> {
    return await this.context.get(endpoint);
  }

  async post(endpoint: string, data: any): Promise<APIResponse> {
    return await this.context.post(endpoint, { data });
  }

  async put(endpoint: string, data: any): Promise<APIResponse> {
    return await this.context.put(endpoint, { data });
  }

  async delete(endpoint: string): Promise<APIResponse> {
    return await this.context.delete(endpoint);
  }

  async dispose() {
    return await this.context.dispose();
  }
}