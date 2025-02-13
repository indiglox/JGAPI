import { test, expect } from '../utils/fixtures';

test.describe('Read API - Pets Resource', () => {
    test(' Retrieve Existing Pet by ID - GET /pet/{petId}', async ({ apiClient }) => {
        const response = await apiClient.get('/v2/pet/7');
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody).toEqual({
            "id": 7,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": "toto",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "sold"
          });
    });

    test(' Retrieve Non-Existing Pet by ID - GET /pet/{petId}', async ({ apiClient }) => {
        const response = await apiClient.get('/v2/pet/404');
        expect(response.status()).toBe(404);
        const responseBody = await response.json();
        expect(responseBody).toEqual(
            {
                "code": 1,
                "type": "error",
                "message": "Pet not found"
              }
          );
    });

    test('Retrieve Pet with Invalid ID Format - GET /pet/{petId}', async ({ apiClient }) => {
        const response = await apiClient.get('/v2/pet/okay?id=404');
        expect(response.status()).toBe(400);
        const responseBody = await response.json();
        expect(responseBody).toEqual(
            {
                "code": 1,
                "type": "error",
                "message": "Invalid ID supplied"
              }
          );
    });

    test('Retrieve Pets by Valid Status - GET /pet/findByStatus', async ({ apiClient }) => {
        const response = await apiClient.get('/v2/pet/findByStatus?status=sold');
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody).toEqual(expect.arrayContaining([expect.objectContaining({ status: 'sold' })]))
    });

    test('Retrieve Pets by Invalid Status - GET /pet/findByStatus', async ({ apiClient }) => {
        const response = await apiClient.get('/v2/pet/findByStatus?status=');
        expect(response.status()).toBe(400);
        const responseBody = await response.json();
        expect(responseBody).toEqual(expect.objectContaining({ message: 'Invalid status value' }))
    });

})