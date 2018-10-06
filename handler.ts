import { Handler, Context, Callback } from 'aws-lambda';

interface IHelloResponse {
    body: string;
    statusCode: number;
}

export const hello: Handler = (event: any, context: Context, callback: Callback) => {
    const responce: IHelloResponse = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            input: event,
        }),
    };

    callback(null, responce);
};
