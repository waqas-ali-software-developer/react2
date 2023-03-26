/**
 * Return global root object for current environment
 *
 * @internal
 * @abstract
 * @class GlobalProvider
 */
export abstract class GlobalProvider {
    public static current() {
        const root = typeof window !== 'undefined' ? window :
                     /* istanbul ignore next */
                     typeof self   !== 'undefined' ? self :
                     /* istanbul ignore next */
                     typeof global !== 'undefined' ? global :
                     /* istanbul ignore next */
                     null;

        /* istanbul ignore if */
        if (!root) {
            throw new Error('Unsupported environment.');
        }

        return root;
    }
}
