import { test, expect } from '../utils/fixtures';

test.describe('Update API - Pets Resource', () => {
    test('Update Pet - Valid Data - PUT /pet', async ({ apiClient }) => {
        const body = {
            id: 944,
            category: {
              id: 359,
              name: "dog"
            },
            name: "Korbin",
            photoUrls: [],
            tags: [],
            status: "sold"
          };
        const response = await apiClient.put('/v2/pet', body);
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody).toEqual(body);
      });

  test('Update Pet - Invalid ID - PUT /pet', async ({ apiClient }) => {
    const body = {
      id: '5',
    };
    const response = await apiClient.put('/v2/pet', body);
    expect(response.status()).toBe(404);
  });

  test('Update Pet - Missing Required Fields - PUT /pet', async ({ apiClient }) => {
    const body = {
      id: 9841012,
      category: {
        id: 359,
        name: "dog"
      },
      //name: "Korbin",
      photoUrls: [],
      tags: [],
      status: "sold"
    };
    const response = await apiClient.put('/v2/pet', body);
    expect(response.status()).toBe(405);
  });

  test('Update Pet - Pet not found - PUT /pet', async ({ apiClient }) => {
    const body = {
      id: 455,
      category: {
        id: 1,
        name: "1"
      },
      name: "example",
      photoUrls: [],
      tags: [],
      status: "available"
    };
    const response = await apiClient.put('/v2/pet', body);
    expect(response.status()).toBe(404);
  });
});