export function handleError(error) {
    if (error instanceof Error) {
        throw new Error(`Database error: ${error.message}`);
    }
    else {
        throw new Error('Unknown error occurred');
    }
}
