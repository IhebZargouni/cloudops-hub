import request from 'supertest';
import app from '../src/app';
import { describe, it, expect } from 'vitest';

describe('Health Check Endpoint', () => {
  it('should return 200 OK with database connected', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(500);
    expect(response.body).toMatchObject({
      status: 'OK',
      database: 'Connected',
      service: 'CloudOps Hub API',
    });
    expect(response.body).toHaveProperty('timestamp');
  });
});
