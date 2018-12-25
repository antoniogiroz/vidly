'use strict';

const auth = require('../../../src/middleware/auth.middleware');
const { User } = require('../../../src/models/user');

describe('auth middleware', () => {
  it('should populate req.user with the payload of a valid JWT', () => {
    const token = new User({ isAdmin: true }).generateAuthToken();
    const req = {
      header: jest.fn().mockReturnValue(token)
    };
    const res = {};
    const next = jest.fn();

    auth(req, res, next);

    expect(req.user).toHaveProperty('_id');
    expect(req.user).toHaveProperty('isAdmin', true);
    expect(next).toBeCalled();
  });
});