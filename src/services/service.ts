export class Service {
    handleError(err: any): Error | null {
        console.error(err);

        return new Error('Encountered a fatal error: ' + err.message);
    }
}