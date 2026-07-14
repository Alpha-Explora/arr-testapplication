import { SERVICE_NAME } from '../../src/index';

describe('test-application', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('test-application');
  });
});