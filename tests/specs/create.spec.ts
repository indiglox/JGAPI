import { test, expect } from '../utils/fixtures';

test.describe('Create API - Pets Resource', () => {
  test('Create Pet - Valid Data - POST /pet', async ({ apiClient }) => {
    const body = {
      id: 12345,
      category: {
        id: 1,
        name: 'Dog',
      },
      name: 'Charlie',
      photoUrls: ['https://sample.com/photos/charlie.jpg'],
      tags: [
        {
          id: 1,
          name: 'friendly',
        },
        {
          id: 2,
          name: 'golden-retriever',
        },
      ],
      status: 'available',
    };

    const response = await apiClient.post('/v2/pet', body);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toEqual(body);
  });

  test('Create Pet -  Missing Required Fields - photoUrls - POST /pet', async ({ apiClient }) => {
    const body = {
      id: 12345,
      category: {
        id: 1,
        name: 'Dog',
      },
      name: "Charlie's Dog",
      photoUrls: [], // missing
      tags: [
        {
          id: 1,
          name: 'friendly',
        },
        {
          id: 2,
          name: 'golden-retriever',
        },
      ],
      status: 'available',
    };

    const response = await apiClient.post('/v2/pet', body);
    expect(response.status()).toBe(400);
  });

  test('Create Pet - Invalid Data Types - POST /pet', async ({ apiClient }) => {
    const body = {
      id: 1,
      category: {
        id: 1,
        name: 1,
      },
      name: 1,
      photoUrls: ['1', 2, -3, 4.5],
      tags: [
        {
          id: 1,
          name: 1,
        },
        {
          id: 1,
          name: 1,
        },
      ],
      status: 1,
    };

    const response = await apiClient.post('/v2/pet', body);
    expect(response.status()).toBe(405);
  });

  test('Create Pet - Duplicate Pet ID - POST /pet', async ({ apiClient }) => {
    const body = {
      id: 1,
      category: {
        id: 1,
        name: 'Dog',
      },
      name: 'Charlie',
      photoUrls: ['https://sample.com/photos/charlie.jpg'],
      tags: [
        {
          id: 1,
          name: 'friendly',
        },
        {
          id: 2,
          name: 'golden-retriever',
        },
      ],
      status: 'available',
    };

    const response = await apiClient.post('/v2/pet', body);
    expect(response.status()).toBe(200);

    const response2 = await apiClient.post('/v2/pet', body);
    expect(response2.status()).toBe(400);
  });

});
