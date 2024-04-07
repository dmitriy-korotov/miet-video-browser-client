interface ExpectedParams<TValue, TError> {
    value?: TValue;
    error?: TError;
}

class Expected<TValue, TError> {
    value?: TValue;
    error?: TError;

    constructor(params: ExpectedParams<TValue, TError> = {} as ExpectedParams<TValue, TError>) {
        const { value, error } = params;
        if (!!value) {
            this.value = value;
        }
        if (!!error) {
            this.error = error;
        }
    }

    HasValue() {
        return !!this.value;
    }

    Value() {
        return this.value;
    }

    Error() {
        return this.error;
    }
}

export default Expected;