const { expect } = require('chai');
const { syncAndSeed } = require('../db');

// const app = require('supertest')(require('../app'));

describe('Test', () => {
  beforeEach(() => syncAndSeed());

  describe('First Test', () => {
    it('passes a test', () => {
      expect(2).to.equal(2);
    });
    // it('pings the API', async () => {
    //   const response = await app.get('/');
    //   expect(response.status).to.equal(200);
    // });
  });
});
