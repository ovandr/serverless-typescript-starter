import { hello } from '../handler';

test('hello', () => {
    const event = 'event';
    expect.assertions(2);

    hello(event, null).then((response) => {
        expect(response.statusCode).toEqual(200);
        expect(typeof response.body).toBe('string');
    });
});
