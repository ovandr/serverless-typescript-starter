import { Callback } from 'aws-lambda';
import { hello } from '../handler';

test('hello', async () => {
    const event = 'event';

    const callback: Callback = (error, response) => {
        expect(response.statusCode).toEqual(200);
        expect(typeof response.body).toBe("string");
    };

    await hello(event, null, callback);
});
