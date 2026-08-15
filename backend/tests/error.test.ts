import request from 'supertest';
import app from '../src/app';
import { describe, it, expect } from 'vitest';

describe('Error Handling Endpoint', () => {
  it('should return 400 with error message', async () => {
    const response = await request(app).get('/error');

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      success: false,
      message: 'Example Error',
    });
  });
});
