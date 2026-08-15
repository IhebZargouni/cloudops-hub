import request from 'supertest';
import app from '../src/app';
import { describe, it, expect } from 'vitest';

describe('404 Not Found Middleware', () => {
  it('should return 404 for unknown routes', async () => {
    const response = await request(app).get('/this-route-does-not-exist');

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({
      success: false,
      message: 'Route not found',
    });
  });
});
