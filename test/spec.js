const { expect } = require('chai');

const app = require('supertest')(require('../app'));

describe('Test', () => {
  describe('First Test', () => {
    it('passes a test', () => {
      expect(1).to.equal(1);
    });
    it('pings the API', async () => {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
    });
  });
});
