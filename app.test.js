const app = require('./app');
const { PORT } = app;
console.clear();

let testing = {
    developer : 'aleksson',
    port : 1337
};

test('app should return "jest-testing"', () => {
    expect(app()).toBe('jest-testing');
});

test('app developer is "you"', () => {
    expect(app.DEVELOPER).toBe(testing.developer);
});

test(`port is ${testing.port}`, () => {
    expect(PORT).toBe(testing.port);
});