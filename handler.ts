import { Context, APIGatewayProxyResult } from 'aws-lambda';

export async function hello(event: any, context: Context) {
    const responce: APIGatewayProxyResult = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            input: event,
        }),
    };

    return responce;
}
