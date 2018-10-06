import { Handler, Context, Callback } from 'aws-lambda';

interface HelloResponse {
    statusCode: number,
    body: string
}

export const hello: Handler = (event: any, context: Context, callback: Callback) => {
    const responce: HelloResponse = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            input: event,
        })
    }

    callback(null, responce);
};
