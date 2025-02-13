import { test, expect } from '../utils/fixtures';

test.describe('Delete API - Pets Resource', () => {
  test('Delete Pet - Valid ID - DELETE /pet', async ({ apiClient }) => {
    const response = await apiClient.delete('/v2/pet/5');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toEqual({
        "code": 200,
        "type": "unknown",
        "message": "5"
      })
  });

  test('Delete Pet - Invalid ID - DELETE /pet', async ({ apiClient }) => {
    const response = await apiClient.delete('/v2/pet/5A');
    expect(response.status()).toBe(400);
  });

  test('Delete Pet - Pet not found - DELETE /pet', async ({ apiClient }) => {
    const response = await apiClient.delete('/v2/pet/2222');
    expect(response.status()).toBe(404);
  });
});