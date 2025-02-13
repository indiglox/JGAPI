import { test as base, expect } from '@playwright/test';
import { ApiClient } from './helper';

type ApiFixtures = {
  apiClient: ApiClient;
};

export const test = base.extend<ApiFixtures>({
  apiClient: async ({ request }, use) => {
    const apiClient = new ApiClient(request);
    await use(apiClient);
    await apiClient.dispose();
  },
});

export { expect };