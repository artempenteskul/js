function funcWithError() {
    throw new Error('Custom Error!')
}

try {
    funcWithError()
} catch (error) {
    console.error(error);
    console.log(error.message);
}

console.log('Continue ...')
