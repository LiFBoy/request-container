declare module 'request-container/libs/PromiseState' {
	/**
	 * Created by allen on 2016/11/24.
	 */
	export type IResponse = any;
	interface PromiseState<T> {
	    payload: T;
	    status: PSEnum;
	    error: Error;
	}
	export const enum PSEnum {
	    none = 0,
	    loading = 1,
	    success = 2,
	    error = 3,
	} class PromiseState<T> {
	    private promiseFn;
	    status: PSEnum;
	    promise: Promise<T>;
	    error: Error;
	    payload: T;
	    constructor(promiseFn: () => Promise<T>, status?: PSEnum);
	    /**
	     * perform the promise and pass value to corresponding class member
	     */
	    exec(): Promise<IResponse>;
	    /**
	     * checks if current promise state is sending out a request
	     */
	    isLoading(): boolean;
	    /**
	     * checks if current promise state is error
	     */
	    isError(): boolean;
	    /**
	     * checks if current promise state is success
	     */
	    isSuccess(): boolean;
	    /**
	     * checks if current promise state is initialized only
	     */
	    isNone(): boolean;
	}
	export default PromiseState;

}
declare module 'request-container/libs/RequestContainer' {
	/**
	 * Created by allen on 2016/11/17.
	 */
	import PromiseState, { IResponse } from 'request-container/libs/PromiseState'; class RequestContainer<T> {
	    /**
	     * Singleton instance
	     */
	    private static instance;
	    /**
	     * Singleton lazy initializer
	     */
	    static getInstance(): RequestContainer<any>;
	    /**
	     * this container is used to store promise state
	     */
	    container: {
	        [key: number]: PromiseState<T>;
	    };
	    constructor();
	    put(key: string, promiseFn: () => Promise<IResponse>): PromiseState<T>;
	    /**
	     * create a wrapper and make a request
	     * @returns {PromiseState<IResponse>} return the wrapper
	     */
	    private static executePromise(promiseFn);
	    /**
	     * a helper represent request container has a promise state
	     */
	    private verifyIfExist(key);
	    /**
	     * a request container getter
	     */
	    private getPromiseState(key);
	}
	export default RequestContainer;

}
declare module 'request-container/index' {
	/**
	 * Created by allen on 2016/11/24.
	 */
	import RequestContainer from 'request-container/libs/RequestContainer';
	export default RequestContainer;

}
// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/7273c57f5b35de28b77649d9160f557906a95c68/chai/chai.d.ts
declare namespace Chai {

    interface ChaiStatic {
        expect: ExpectStatic;
        should(): Should;
        /**
         * Provides a way to extend the internals of Chai
         */
        use(fn: (chai: any, utils: any) => void): ChaiStatic;
        assert: AssertStatic;
        config: Config;
        AssertionError: typeof AssertionError;
    }

    export interface ExpectStatic extends AssertionStatic {
        fail(actual?: any, expected?: any, message?: string, operator?: string): void;
    }

    export interface AssertStatic extends Assert {
    }

    export interface AssertionStatic {
        (target: any, message?: string): Assertion;
    }

    interface ShouldAssertion {
        equal(value1: any, value2: any, message?: string): void;
        Throw: ShouldThrow;
        throw: ShouldThrow;
        exist(value: any, message?: string): void;
    }

    interface Should extends ShouldAssertion {
        not: ShouldAssertion;
        fail(actual: any, expected: any, message?: string, operator?: string): void;
    }

    interface ShouldThrow {
        (actual: Function): void;
        (actual: Function, expected: string|RegExp, message?: string): void;
        (actual: Function, constructor: Error|Function, expected?: string|RegExp, message?: string): void;
    }

    interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
        not: Assertion;
        deep: Deep;
        any: KeyFilter;
        all: KeyFilter;
        a: TypeComparison;
        an: TypeComparison;
        include: Include;
        includes: Include;
        contain: Include;
        contains: Include;
        ok: Assertion;
        true: Assertion;
        false: Assertion;
        null: Assertion;
        undefined: Assertion;
        NaN: Assertion;
        exist: Assertion;
        empty: Assertion;
        arguments: Assertion;
        Arguments: Assertion;
        equal: Equal;
        equals: Equal;
        eq: Equal;
        eql: Equal;
        eqls: Equal;
        property: Property;
        ownProperty: OwnProperty;
        haveOwnProperty: OwnProperty;
        ownPropertyDescriptor: OwnPropertyDescriptor;
        haveOwnPropertyDescriptor: OwnPropertyDescriptor;
        length: Length;
        lengthOf: Length;
        match: Match;
        matches: Match;
        string(string: string, message?: string): Assertion;
        keys: Keys;
        key(string: string): Assertion;
        throw: Throw;
        throws: Throw;
        Throw: Throw;
        respondTo: RespondTo;
        respondsTo: RespondTo;
        itself: Assertion;
        satisfy: Satisfy;
        satisfies: Satisfy;
        closeTo: CloseTo;
        approximately: CloseTo;
        members: Members;
        increase: PropertyChange;
        increases: PropertyChange;
        decrease: PropertyChange;
        decreases: PropertyChange;
        change: PropertyChange;
        changes: PropertyChange;
        extensible: Assertion;
        sealed: Assertion;
        frozen: Assertion;
        oneOf(list: any[], message?: string): Assertion;
    }

    interface LanguageChains {
        to: Assertion;
        be: Assertion;
        been: Assertion;
        is: Assertion;
        that: Assertion;
        which: Assertion;
        and: Assertion;
        has: Assertion;
        have: Assertion;
        with: Assertion;
        at: Assertion;
        of: Assertion;
        same: Assertion;
    }

    interface NumericComparison {
        above: NumberComparer;
        gt: NumberComparer;
        greaterThan: NumberComparer;
        least: NumberComparer;
        gte: NumberComparer;
        below: NumberComparer;
        lt: NumberComparer;
        lessThan: NumberComparer;
        most: NumberComparer;
        lte: NumberComparer;
        within(start: number, finish: number, message?: string): Assertion;
    }

    interface NumberComparer {
        (value: number, message?: string): Assertion;
    }

    interface TypeComparison {
        (type: string, message?: string): Assertion;
        instanceof: InstanceOf;
        instanceOf: InstanceOf;
    }

    interface InstanceOf {
        (constructor: Object, message?: string): Assertion;
    }

    interface CloseTo {
        (expected: number, delta: number, message?: string): Assertion;
    }

    interface Deep {
        equal: Equal;
        include: Include;
        property: Property;
        members: Members;
    }

    interface KeyFilter {
        keys: Keys;
    }

    interface Equal {
        (value: any, message?: string): Assertion;
    }

    interface Property {
        (name: string, value?: any, message?: string): Assertion;
    }

    interface OwnProperty {
        (name: string, message?: string): Assertion;
    }

    interface OwnPropertyDescriptor {
        (name: string, descriptor: PropertyDescriptor, message?: string): Assertion;
        (name: string, message?: string): Assertion;
    }

    interface Length extends LanguageChains, NumericComparison {
        (length: number, message?: string): Assertion;
    }

    interface Include {
        (value: Object, message?: string): Assertion;
        (value: string, message?: string): Assertion;
        (value: number, message?: string): Assertion;
        keys: Keys;
        members: Members;
        any: KeyFilter;
        all: KeyFilter;
    }

    interface Match {
        (regexp: RegExp|string, message?: string): Assertion;
    }

    interface Keys {
        (...keys: string[]): Assertion;
        (keys: any[]): Assertion;
        (keys: Object): Assertion;
    }

    interface Throw {
        (): Assertion;
        (expected: string, message?: string): Assertion;
        (expected: RegExp, message?: string): Assertion;
        (constructor: Error, expected?: string, message?: string): Assertion;
        (constructor: Error, expected?: RegExp, message?: string): Assertion;
        (constructor: Function, expected?: string, message?: string): Assertion;
        (constructor: Function, expected?: RegExp, message?: string): Assertion;
    }

    interface RespondTo {
        (method: string, message?: string): Assertion;
    }

    interface Satisfy {
        (matcher: Function, message?: string): Assertion;
    }

    interface Members {
        (set: any[], message?: string): Assertion;
    }

    interface PropertyChange {
        (object: Object, prop: string, msg?: string): Assertion;
    }

    export interface Assert {
        /**
         * @param expression Expression to test for truthiness.
         * @param message Message to display on error.
         */
        (expression: any, message?: string): void;

        fail(actual?: any, expected?: any, msg?: string, operator?: string): void;

        ok(val: any, msg?: string): void;
        isOk(val: any, msg?: string): void;
        notOk(val: any, msg?: string): void;
        isNotOk(val: any, msg?: string): void;

        equal(act: any, exp: any, msg?: string): void;
        notEqual(act: any, exp: any, msg?: string): void;

        strictEqual(act: any, exp: any, msg?: string): void;
        notStrictEqual(act: any, exp: any, msg?: string): void;

        deepEqual(act: any, exp: any, msg?: string): void;
        notDeepEqual(act: any, exp: any, msg?: string): void;

        isTrue(val: any, msg?: string): void;
        isFalse(val: any, msg?: string): void;

        isNotTrue(val: any, msg?: string): void;
        isNotFalse(val: any, msg?: string): void;

        isNull(val: any, msg?: string): void;
        isNotNull(val: any, msg?: string): void;

        isUndefined(val: any, msg?: string): void;
        isDefined(val: any, msg?: string): void;

        isNaN(val: any, msg?: string): void;
        isNotNaN(val: any, msg?: string): void;

        isAbove(val: number, abv: number, msg?: string): void;
        isBelow(val: number, blw: number, msg?: string): void;

        isAtLeast(val: number, atlst: number, msg?: string): void;
        isAtMost(val: number, atmst: number, msg?: string): void;

        isFunction(val: any, msg?: string): void;
        isNotFunction(val: any, msg?: string): void;

        isObject(val: any, msg?: string): void;
        isNotObject(val: any, msg?: string): void;

        isArray(val: any, msg?: string): void;
        isNotArray(val: any, msg?: string): void;

        isString(val: any, msg?: string): void;
        isNotString(val: any, msg?: string): void;

        isNumber(val: any, msg?: string): void;
        isNotNumber(val: any, msg?: string): void;

        isBoolean(val: any, msg?: string): void;
        isNotBoolean(val: any, msg?: string): void;

        typeOf(val: any, type: string, msg?: string): void;
        notTypeOf(val: any, type: string, msg?: string): void;

        instanceOf(val: any, type: Function, msg?: string): void;
        notInstanceOf(val: any, type: Function, msg?: string): void;

        include(exp: string, inc: any, msg?: string): void;
        include(exp: any[], inc: any, msg?: string): void;

        notInclude(exp: string, inc: any, msg?: string): void;
        notInclude(exp: any[], inc: any, msg?: string): void;

        match(exp: any, re: RegExp, msg?: string): void;
        notMatch(exp: any, re: RegExp, msg?: string): void;

        property(obj: Object, prop: string, msg?: string): void;
        notProperty(obj: Object, prop: string, msg?: string): void;
        deepProperty(obj: Object, prop: string, msg?: string): void;
        notDeepProperty(obj: Object, prop: string, msg?: string): void;

        propertyVal(obj: Object, prop: string, val: any, msg?: string): void;
        propertyNotVal(obj: Object, prop: string, val: any, msg?: string): void;

        deepPropertyVal(obj: Object, prop: string, val: any, msg?: string): void;
        deepPropertyNotVal(obj: Object, prop: string, val: any, msg?: string): void;

        lengthOf(exp: any, len: number, msg?: string): void;
        //alias frenzy
        throw(fn: Function, msg?: string): void;
        throw(fn: Function, regExp: RegExp): void;
        throw(fn: Function, errType: Function, msg?: string): void;
        throw(fn: Function, errType: Function, regExp: RegExp): void;

        throws(fn: Function, msg?: string): void;
        throws(fn: Function, regExp: RegExp): void;
        throws(fn: Function, errType: Function, msg?: string): void;
        throws(fn: Function, errType: Function, regExp: RegExp): void;

        Throw(fn: Function, msg?: string): void;
        Throw(fn: Function, regExp: RegExp): void;
        Throw(fn: Function, errType: Function, msg?: string): void;
        Throw(fn: Function, errType: Function, regExp: RegExp): void;

        doesNotThrow(fn: Function, msg?: string): void;
        doesNotThrow(fn: Function, regExp: RegExp): void;
        doesNotThrow(fn: Function, errType: Function, msg?: string): void;
        doesNotThrow(fn: Function, errType: Function, regExp: RegExp): void;

        operator(val: any, operator: string, val2: any, msg?: string): void;
        closeTo(act: number, exp: number, delta: number, msg?: string): void;
        approximately(act: number, exp: number, delta: number, msg?: string): void;

        sameMembers(set1: any[], set2: any[], msg?: string): void;
        sameDeepMembers(set1: any[], set2: any[], msg?: string): void;
        includeMembers(superset: any[], subset: any[], msg?: string): void;

        ifError(val: any, msg?: string): void;

        isExtensible(obj: {}, msg?: string): void;
        extensible(obj: {}, msg?: string): void;
        isNotExtensible(obj: {}, msg?: string): void;
        notExtensible(obj: {}, msg?: string): void;

        isSealed(obj: {}, msg?: string): void;
        sealed(obj: {}, msg?: string): void;
        isNotSealed(obj: {}, msg?: string): void;
        notSealed(obj: {}, msg?: string): void;

        isFrozen(obj: Object, msg?: string): void;
        frozen(obj: Object, msg?: string): void;
        isNotFrozen(obj: Object, msg?: string): void;
        notFrozen(obj: Object, msg?: string): void;

        oneOf(inList: any, list: any[], msg?: string): void;
    }

    export interface Config {
        /**
         * Default: false
         */
        includeStack: boolean;

        /**
         * Default: true
         */
        showDiff: boolean;

        /**
         * Default: 40
         */
        truncateThreshold: number;
    }

    export class AssertionError {
        constructor(message: string, _props?: any, ssf?: Function);
        name: string;
        message: string;
        showDiff: boolean;
        stack: string;
    }
}

declare var chai: Chai.ChaiStatic;

declare module "chai" {
    export = chai;
}

interface Object {
    should: Chai.Assertion;
}
// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/71c9d2336c0c802f89d530e07563e00b9ac07792/es6-promise/es6-promise.d.ts
interface Thenable<T> {
    then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
    then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;
}

declare class Promise<T> implements Thenable<T> {
	/**
	 * If you call resolve in the body of the callback passed to the constructor,
	 * your promise is fulfilled with result object passed to resolve.
	 * If you call reject your promise is rejected with the object passed to reject.
	 * For consistency and debugging (eg stack traces), obj should be an instanceof Error.
	 * Any errors thrown in the constructor callback will be implicitly passed to reject().
	 */
	constructor(callback: (resolve : (value?: T | Thenable<T>) => void, reject: (error?: any) => void) => void);

	/**
	 * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
	 * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
	 * Both callbacks have a single parameter , the fulfillment value or rejection reason.
	 * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
	 * If an error is thrown in the callback, the returned promise rejects with that error.
	 *
	 * @param onFulfilled called when/if "promise" resolves
	 * @param onRejected called when/if "promise" rejects
	 */
    then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Promise<U>;
    then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => void): Promise<U>;

	/**
	 * Sugar for promise.then(undefined, onRejected)
	 *
	 * @param onRejected called when/if "promise" rejects
	 */
	catch<U>(onRejected?: (error: any) => U | Thenable<U>): Promise<U>;
}

declare namespace Promise {
	/**
	 * Make a new promise from the thenable.
	 * A thenable is promise-like in as far as it has a "then" method.
	 */
	function resolve<T>(value?: T | Thenable<T>): Promise<T>;

	/**
	 * Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error
	 */
	function reject(error: any): Promise<any>;
	function reject<T>(error: T): Promise<T>;

	/**
	 * Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * the array passed to all can be a mixture of promise-like objects and other objects.
	 * The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.
	 */
	function all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>, T10 | Thenable<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
    function all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
    function all<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
    function all<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
    function all<T1, T2, T3, T4, T5, T6>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;
    function all<T1, T2, T3, T4, T5>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>]): Promise<[T1, T2, T3, T4, T5]>;
    function all<T1, T2, T3, T4>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>]): Promise<[T1, T2, T3, T4]>;
    function all<T1, T2, T3>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>]): Promise<[T1, T2, T3]>;
    function all<T1, T2>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>]): Promise<[T1, T2]>;
    function all<T>(values: (T | Thenable<T>)[]): Promise<T[]>;

	/**
	 * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
	 */
	function race<T>(promises: (T | Thenable<T>)[]): Promise<T>;
}

declare module 'es6-promise' {
	var foo: typeof Promise; // Temp variable to reference Promise in local context
	namespace rsvp {
		export var Promise: typeof foo;
		export function polyfill(): void;
	}
	export = rsvp;
}
// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/7155ef2d2dced331b5e389363a4180957e76f95e/mocha/mocha.d.ts
interface MochaSetupOptions {
    //milliseconds to wait before considering a test slow
    slow?: number;

    // timeout in milliseconds
    timeout?: number;

    // ui name "bdd", "tdd", "exports" etc
    ui?: string;

    //array of accepted globals
    globals?: any[];

    // reporter instance (function or string), defaults to `mocha.reporters.Spec`
    reporter?: any;

    // bail on the first test failure
    bail?: boolean;

    // ignore global leaks
    ignoreLeaks?: boolean;

    // grep string or regexp to filter tests with
    grep?: any;
}

declare var mocha: Mocha;
declare var describe: Mocha.IContextDefinition;
declare var xdescribe: Mocha.IContextDefinition;
// alias for `describe`
declare var context: Mocha.IContextDefinition;
// alias for `describe`
declare var suite: Mocha.IContextDefinition;
declare var it: Mocha.ITestDefinition;
declare var xit: Mocha.ITestDefinition;
// alias for `it`
declare var test: Mocha.ITestDefinition;
declare var specify: Mocha.ITestDefinition;

// Used with the --delay flag; see https://mochajs.org/#hooks
declare function run(): void;

interface MochaDone {
    (error?: any): any;
}

interface ActionFunction {
    (done: MochaDone): any | PromiseLike<any>
}

declare function setup(action: ActionFunction): void;
declare function teardown(action: ActionFunction): void;
declare function suiteSetup(action: ActionFunction): void;
declare function suiteTeardown(action: ActionFunction): void;
declare function before(action: ActionFunction): void;
declare function before(description: string, action: ActionFunction): void;
declare function after(action: ActionFunction): void;
declare function after(description: string, action: ActionFunction): void;
declare function beforeEach(action: ActionFunction): void;
declare function beforeEach(description: string, action: ActionFunction): void;
declare function afterEach(action: ActionFunction): void;
declare function afterEach(description: string, action: ActionFunction): void;

declare class Mocha {
    currentTest: Mocha.ITestDefinition;
    constructor(options?: {
        grep?: RegExp;
        ui?: string;
        reporter?: string;
        timeout?: number;
        bail?: boolean;
    });

    /** Setup mocha with the given options. */
    setup(options: MochaSetupOptions): Mocha;
    bail(value?: boolean): Mocha;
    addFile(file: string): Mocha;
    /** Sets reporter by name, defaults to "spec". */
    reporter(name: string): Mocha;
    /** Sets reporter constructor, defaults to mocha.reporters.Spec. */
    reporter(reporter: (runner: Mocha.IRunner, options: any) => any): Mocha;
    ui(value: string): Mocha;
    grep(value: string): Mocha;
    grep(value: RegExp): Mocha;
    invert(): Mocha;
    ignoreLeaks(value: boolean): Mocha;
    checkLeaks(): Mocha;
    /**
     * Function to allow assertion libraries to throw errors directly into mocha.
     * This is useful when running tests in a browser because window.onerror will
     * only receive the 'message' attribute of the Error.
     */
    throwError(error: Error): void;
    /** Enables growl support. */
    growl(): Mocha;
    globals(value: string): Mocha;
    globals(values: string[]): Mocha;
    useColors(value: boolean): Mocha;
    useInlineDiffs(value: boolean): Mocha;
    timeout(value: number): Mocha;
    slow(value: number): Mocha;
    enableTimeouts(value: boolean): Mocha;
    asyncOnly(value: boolean): Mocha;
    noHighlighting(value: boolean): Mocha;
    /** Runs tests and invokes `onComplete()` when finished. */
    run(onComplete?: (failures: number) => void): Mocha.IRunner;
}

// merge the Mocha class declaration with a module
declare namespace Mocha {
    /** Partial interface for Mocha's `Runnable` class. */
    interface IRunnable {
        title: string;
        fn: Function;
        async: boolean;
        sync: boolean;
        timedOut: boolean;
    }

    /** Partial interface for Mocha's `Suite` class. */
    interface ISuite {
        parent: ISuite;
        title: string;

        fullTitle(): string;
    }

    /** Partial interface for Mocha's `Test` class. */
    interface ITest extends IRunnable {
        parent: ISuite;
        pending: boolean;

        fullTitle(): string;
    }

    /** Partial interface for Mocha's `Runner` class. */
    interface IRunner {}

    interface IContextDefinition {
        (description: string, spec: () => void): ISuite;
        only(description: string, spec: () => void): ISuite;
        skip(description: string, spec: () => void): void;
        timeout(ms: number): void;
    }

    interface ITestDefinition {
        (expectation: string, assertion?: ActionFunction): ITest;
        only(expectation: string, assertion?: ActionFunction): ITest;
        skip(expectation: string, assertion?: ActionFunction): void;
        timeout(ms: number): void;
        state: "failed" | "passed";
    }

    export module reporters {
        export class Base {
            stats: {
                suites: number;
                tests: number;
                passes: number;
                pending: number;
                failures: number;
            };

            constructor(runner: IRunner);
        }

        export class Doc extends Base {}
        export class Dot extends Base {}
        export class HTML extends Base {}
        export class HTMLCov extends Base {}
        export class JSON extends Base {}
        export class JSONCov extends Base {}
        export class JSONStream extends Base {}
        export class Landing extends Base {}
        export class List extends Base {}
        export class Markdown extends Base {}
        export class Min extends Base {}
        export class Nyan extends Base {}
        export class Progress extends Base {
            /**
             * @param options.open String used to indicate the start of the progress bar.
             * @param options.complete String used to indicate a complete test on the progress bar.
             * @param options.incomplete String used to indicate an incomplete test on the progress bar.
             * @param options.close String used to indicate the end of the progress bar.
             */
            constructor(runner: IRunner, options?: {
                open?: string;
                complete?: string;
                incomplete?: string;
                close?: string;
            });
        }
        export class Spec extends Base {}
        export class TAP extends Base {}
        export class XUnit extends Base {
            constructor(runner: IRunner, options?: any);
        }
    }
}

declare module "mocha" {
    export = Mocha;
}
// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/6a70dd082e6dd97218d76cffb56bf7540dc51368/object-assign/object-assign.d.ts
declare module "object-assign" {
  function objectAssign<T, U>(target: T, source: U): T & U;
  function objectAssign<T, U, V>(target: T, source1: U, source2: V): T & U & V;
  function objectAssign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
  function objectAssign<T, U, V, W, Q>(target: T, source1: U, source2: V, source3: W, source4: Q): T & U & V & W & Q;
  function objectAssign<T, U, V, W, Q, R>(target: T, source1: U, source2: V, source3: W, source4: Q, source5: R): T & U & V & W & Q & R;
  function objectAssign(target: any, ...sources: any[]): any;
  namespace objectAssign { }
  export = objectAssign;
}
/// <reference path="globals/chai/index.d.ts" />
/// <reference path="globals/es6-promise/index.d.ts" />
/// <reference path="globals/mocha/index.d.ts" />
/// <reference path="globals/object-assign/index.d.ts" />
