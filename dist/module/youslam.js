var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$3.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$4.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$1.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800;
var HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

var _createAssigner = createAssigner;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag$1 = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = _createAssigner(function(object, source) {
  if (_isPrototype(source) || isArrayLike_1(source)) {
    _copyObject(source, keys_1(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      _assignValue(object, key, source[key]);
    }
  }
});

var assign_1 = assign;

const MUE = {
	dates: {
		2017: {
			12: {
				15: {
					time: "20:00:00"
				}
			}
		}
	},
	name: "Müh Slam",
	accommodation: "redundant",
	admission: "5 €",
	audience: "50",
	fee: "0 €",
	tour: false,
	masters: [
		"Ana Ryue"
	],
	type: "challenging",
	travel: "full",
	city: "Oslip",
	first: "2014-08-01"
};

const $3_011 = {
	MUE,
	name: "Oslip"
};

const $2_003 = {
	"011": $3_011,
	name: "Eisenstadt-Umgebung"
};

const $1_001 = {
	"003": $2_003,
	name: "Burgenland"
};

const IFY = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "100",
	fee: "65 €",
	name: "Slam if you can! (kurz: SlamIYC)",
	tour: false,
	masters: ["Carmen Kassekert"],
	type: "challenging",
	travel: "full",
	city: "Klagenfurt am Wörthersee",
	first: "2010-03-01"
};

const $3_001 = {
	IFY,
	name: "Klagenfurt"
};

const $2_001 = {
	"001": $3_001,
	name: "Klagenfurt"
};

const IFY$2 = {
	accommodation: "hotel",
	admission: "5 €",
	audience: "80",
	fee: "70 €",
	name: "SlamIYC VillacherRaum",
	tour: false,
	masters: [
		"Carmen Kassekert"
	],
	type: "challenging",
	travel: "full",
	city: "Villach",
	first: "2015-04-01"
};

const $3_001$2 = {
	IFY: IFY$2,
	name: "Villach"
};

const $2_002 = {
	"001": $3_001$2,
	name: "Villach"
};

const IFY$4 = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "80",
	fee: "20 €",
	name: "SlamIYC Spittal",
	tour: false,
	masters: [
		"Carmen Kassekert",
		"Sabrina Öhler"
	],
	type: "challenging",
	travel: "full",
	city: "Spittal an der Drau",
	first: "2016-02-01"
};

const $3_035 = {
	IFY: IFY$4,
	name: "Spittal an der Drau"
};

const $2_006 = {
	"035": $3_035,
	name: "Spittal an der Drau"
};

const LET = {
	accommodation: "hotel",
	admission: "5 €",
	audience: "70",
	fee: "40 €",
	name: "Lets slam, Wolfsberg!",
	tour: false,
	masters: [
		"Carmen Kassekert",
		"Elisabeth Leiss"
	],
	type: "challenging",
	travel: "full",
	city: "Wolfsberg",
	first: "2017-05-01"
};

const $3_023 = {
	LET,
	name: "Wolfsberg"
};

const $2_009 = {
	"023": $3_023,
	name: "Wolfsberg"
};

const WOR = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "60",
	fee: "30 €",
	name: "WortKunst Feldkirchen",
	tour: false,
	masters: ["Carmen Kassekert", "Doris Rottermanner", "Lisa Fian"],
	type: "challenging",
	travel: "full",
	city: "Feldkirchen in Kärnten",
	first: "2017-01-01"
};

const $3_002 = {
	WOR,
	name: "Feldkirchen in Kärnten"
};

const $2_010 = {
	"002": $3_002,
	name: "Feldkirchen"
};

const $1_002 = {
	"001": $2_001,
	"002": $2_002,
	"006": $2_006,
	"009": $2_009,
	"010": $2_010,
	name: "Kärnten"
};

const LIT = {
	name: "LitGes Poetry Slam",
	accessible: true,
	accommodation: "redundant",
	admission: false,
	audience: "60",
	fee: "0 €",
	tour: false,
	masters: [
		"Marlies Eder",
		"Andi Pianka"
	],
	type: "open",
	travel: false,
	city: "St. Pölten",
	first: "2003-11-01"
};

const TAG = {
	dates: {
		2018: {
			"01": {
				18: {
					time: "20:00:00"
				}
			}
		}
	},
	name: "Tagebuch Slam",
	shortId: "AT-3-2-1-TAG"
};

const $3_001$4 = {
	LIT,
	TAG,
	name: "St. Pölten"
};

const $2_002$2 = {
	"001": $3_001$4,
	name: "St. Pölten"
};

const BES = {
	name: "Best of Poetry Slam Baden",
	shortName: "Best of Poetry Slam",
	description: "Poetry Slam - das ist Wettspringen mit dem eigenen Puls im Takt der Freude. Das ist moderne Literatur auf Bühnen beschworen, Texte zum Greifen und Staunen, das Lächeln im Anschlag, der Blick entzückt.\n\nIm Cinema Paradiso Baden begrüßen wir vier der besten Sprachkünstlerinnen und - künstler des Landes.\nHier dichten, rappen, lesen, performen die Vier um die Gunst und den Applaus des Publikums.\n\nEin Abend zum Lachen, Staunen, Jubeln - im Sinne des Genusses.",
	location: {
		street: "Beethovengasse 2a",
		name: "Cinema Paradiso"
	},
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	}
};

const PHI = {
	dates: {
		2018: {
			"02": {
				22: {
					time: "20:15:00"
				}
			}
		}
	},
	accesible: true,
	name: "PhiloSlam",
	accessible: true,
	accommodation: false,
	admission: "voluntary",
	audience: "20",
	fee: "0 €",
	tour: false,
	masters: [
		"Cornelia Bruell"
	],
	type: "open",
	travel: false,
	city: "Baden",
	first: "2016-03-01"
};

const TAG$2 = {
	dates: {
		2018: {
			"01": {
				25: {
					time: "20:00:00"
				}
			}
		}
	},
	name: "Tagebuch Slam",
	shortId: "AT-3-6-4-TAG"
};

const $3_004 = {
	BES,
	PHI,
	TAG: TAG$2,
	name: "Baden",
	zip: 2500
};

const WOR$2 = {
	dates: {
		2017: {
			12: {
				"09": {
					time: "19:30:00"
				}
			}
		}
	},
	name: "Wortschmiede Poetry Slam",
	shortName: "Wortschmiede",
	description: "Der Poetry Slam kommt an die Tristing.\n\nBeste Wortkunst von Stadt bis Land. Ob zum Lachen oder Träumen, zum Genießen oder Ausrasten. Fünf Minuten Bühnenzeit für selbst verfasste Texte. Alle Textsorten sind willkommen, der Art des Vortrags keine Grenzen gesetzt.Requisiten gibt’s keine.\n\nNeulinge sind auf dieser Bühne ausdrücklich willkommen. Die siegende Person qualifiziert sich automatisch für das große Jahresfinale. Anmeldungen bitte unter contact @fomp.eu\n\nDas Publikum ist die Jury. Der Kuchen ist köstlich.",
	location: {
		street: "Leobersdorferstraße 58a",
		name: "Café KunstWerk"
	},
	time: {
		inlet: "19:30:00",
		start: "19:30:00"
	},
	admission: "voluntary"
};

const $3_005 = {
	WOR: WOR$2,
	name: "Berndorf",
	zip: 2560
};

const $000 = {
	accommodation: "private",
	admission: false,
	audience: "15",
	fee: "80 €",
	name: "Poetry Slam Lindabrunn",
	tour: false,
	masters: ["Mario Tomic"],
	type: "challenging",
	travel: false,
	city: "Lindabrunn",
	first: "2015-07-01"
};

const $3_008 = {
	"000": $000,
	name: "Enzesfeld-Lindabrunn"
};

const $2_006$2 = {
	"004": $3_004,
	"005": $3_005,
	"008": $3_008,
	name: "Baden"
};

const FAN = {
	dates: {
		2017: {
			11: {
				25: {
					time: "20:00:00"
				}
			}
		}
	},
	name: "fan of slam",
	shortId: "AT-3-16-55-FAN"
};

const $3_055 = {
	FAN,
	name: "Wolkersdorf im Weinviertel"
};

const $2_016 = {
	"055": $3_055,
	name: "Mistelbach"
};

const DON = {
	dates: {
		2017: {
			12: {
				"01": "default"
			}
		}
	},
	name: "Donaudichten Poetry Slam",
	shortName: "Donaudichten",
	description: "Donaudichten ist ein Poetry Slam mit geladenen Slammerinnen und Slammern aus dem gesamten deutschsprachigen Raum. Und gerne mit dir. Wenn du mit deinem Text an das Mikro willst, dann wollen wir das auch. Am Nachmittag des Veranstaltungstages bieten wir einen kostenlosen Workshop an. Zum kreativen Austausch, zum Schreiben, zum Feilen an Texten, zum Kennenlernen.\nAnmeldungen bitte unter contact@fomp.eu",
	location: {
		street: "Albrechtsgasse 18",
		name: "Kunstwerkstatt"
	},
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	}
};

const $3_035$2 = {
	DON,
	name: "Tulln an der Donau",
	zip: 3430
};

const $2_021 = {
	"035": $3_035$2,
	name: "Tulln"
};

const $1_003 = {
	"002": $2_002$2,
	"006": $2_006$2,
	"016": $2_016,
	"021": $2_021,
	name: "Niederösterreich"
};

const POS = {
	accessible: true,
	accommodation: "private",
	admission: "voluntary",
	audience: "100",
	fee: "0 €",
	name: "Post Skriptum Poetry Slam",
	tour: false,
	masters: [
		"Sevi"
	],
	type: "open",
	travel: "full",
	city: "Linz",
	first: "2005-03-01"
};

const TAB = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "350",
	fee: "80 €",
	name: "Tabakfabrik Poetry Slam",
	tour: "a",
	masters: [
		"Sevi"
	],
	type: "closed",
	travel: "full",
	city: "Linz",
	first: "2014-08-01"
};

const $3_001$6 = {
	POS,
	TAB,
	name: "Linz"
};

const $2_001$2 = {
	"001": $3_001$6,
	name: "Linz"
};

const $000$2 = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "90",
	fee: "30 €",
	name: "Welser Poetry Slam",
	tour: "a",
	masters: [
		"Sevi"
	],
	type: "challenging",
	travel: "full",
	city: "Wels",
	first: "2015-02-01"
};

const $3_001$8 = {
	"000": $000$2,
	name: "Wels"
};

const $2_003$2 = {
	"001": $3_001$8,
	name: "Wels"
};

const $000$4 = {
	accessible: true,
	accommodation: "private",
	admission: "voluntary",
	audience: "90",
	fee: "50 €",
	name: "Neuhofner Poetry Slam",
	tour: false,
	masters: [
		"David Samhaber"
	],
	type: "challenging",
	travel: "full",
	city: "Neuhofen an der Krems",
	first: "2016-09-01"
};

const $3_014 = {
	"000": $000$4,
	name: "Neuhofen an der Krems"
};

const $2_010$2 = {
	"014": $3_014,
	name: "Linz-Land"
};

const FRE = {
	accessible: true,
	accommodation: false,
	admission: "6 €",
	audience: "150",
	fee: "50 €",
	name: "Free Tree Poetry Slam",
	tour: false,
	masters: [
		"Sevi"
	],
	type: "challenging",
	travel: "full",
	city: "Taiskirchen im Innkreis",
	first: "2012-07-01"
};

const $3_031 = {
	FRE,
	name: "Taiskirchen im Innkreis"
};

const $2_012 = {
	"031": $3_031,
	name: "Ried im Innkreis"
};

const $000$6 = {
	accessible: true,
	accommodation: "private",
	admission: "10 €",
	audience: "60",
	fee: "50 €",
	name: "Feldkirchner Poetry Slam",
	tour: false,
	masters: [
		"Fisch (Manuel Thalhammer)"
	],
	type: "challenging",
	travel: "full",
	city: "Feldkirchen an der Donau",
	first: "2015-02-01"
};

const $3_006 = {
	$000: $000$6,
	name: "Feldkirchen an der Donau"
};

const $2_016$2 = {
	"006": $3_006,
	name: "Urfahr-Umgebung"
};

const $1_004 = {
	"001": $2_001$2,
	"003": $2_003$2,
	"010": $2_010$2,
	"012": $2_012,
	"016": $2_016$2,
	name: "Oberösterreich"
};

const ARG = {
	accessible: true,
	accommodation: "hotel",
	admission: "10 €",
	audience: "200",
	fee: "70 €",
	name: "ARGE Slam",
	tour: "b",
	masters: [
		"Ko Bylanzky"
	],
	type: "challenging",
	travel: "full",
	city: "Salzburg",
	first: "2009-02-01"
};

const WOR$4 = {
	accommodation: false,
	admission: false,
	audience: "170",
	fee: "0 €",
	name: "WORTVOLL - Open Poetry Slam",
	tour: false,
	masters: [
		"Eva Zangerle // Hannes Hangler"
	],
	type: "open",
	travel: false,
	city: "Salzburg",
	first: "2014-06-01"
};

const $3_001$10 = {
	ARG,
	WOR: WOR$4,
	name: "Salzburg"
};

const $2_001$4 = {
	"001": $3_001$10,
	name: "Salzburg"
};

const WOR$6 = {
	accessible: true,
	accommodation: "hotel",
	admission: "8 €",
	audience: "100",
	fee: "80 €",
	name: "Wortklauberei",
	tour: false,
	masters: [
		"Anna-Lena Obermoser"
	],
	type: "challenging",
	travel: "full",
	city: "Saalfelden am Steinernen Meer",
	first: "2016-10-01"
};

const $3_019 = {
	WOR: WOR$6,
	name: "Saalfelden am Steinernen Meer"
};

const $2_016$4 = {
	"019": $3_019,
	name: "Zell am See"
};

const $1_005 = {
	"001": $2_001$4,
	"016": $2_016$4,
	name: "Salzburg"
};

const U20 = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "80",
	fee: "0 €",
	name: "U20 LM Steiermark",
	tour: false,
	masters: [
		"Mario Tomic"
	],
	type: "closed",
	travel: false,
	city: "graz",
	first: "2013-04-01"
};

const $3_000 = {
	U20
};

const $2_000 = {
	"000": $3_000
};

const AFF = {
	accessible: true,
	accommodation: "hotel",
	admission: "voluntary",
	audience: "40",
	fee: "80 €",
	name: "Slamily affairs",
	tour: "a",
	masters: ["Mario Tomic"],
	type: "closed",
	travel: "full",
	city: "Graz",
	first: "2017-01-01"
};

const ANT = {
	accessible: true,
	accommodation: "hotel",
	admission: "voluntary",
	audience: "80",
	fee: "100 €",
	name: "Antivalentinstagslesung",
	tour: false,
	masters: ["Mario Tomic"],
	type: "closed",
	travel: "full",
	city: "Graz",
	first: "2016-01-01"
};

const BAT = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "100",
	fee: "50 €",
	name: "Slam Battles",
	tour: false,
	masters: ["Mario Tomic"],
	type: "closed",
	travel: "full",
	city: "Graz",
	first: "2015-02-01"
};

const BRU = {
	accessible: true,
	accommodation: "hotel",
	admission: "11 €",
	audience: "80",
	fee: "100 €",
	name: "Brückenslam",
	tour: false,
	masters: ["Klaus Lederwasch"],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2014-06-01"
};

const DIA = {
	accessible: true,
	accommodation: "hotel",
	admission: "voluntary",
	audience: "50",
	fee: "80 €",
	name: "Dialekt Slam",
	tour: false,
	masters: ["Tschif", "Klaus Lederwasch"],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2017-02-01"
};

const DUC = {
	accessible: true,
	accommodation: "private",
	admission: false,
	audience: "60",
	fee: "50 €",
	name: "Ducks Poetry Slam",
	tour: false,
	masters: ["Mario Tomic"],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2015-10-01"
};

const EIN = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "40",
	fee: "100 €",
	name: "einmal latte & kulturprogramm, bitte!",
	tour: false,
	masters: ["Mario Tomic"],
	type: "closed",
	travel: "full",
	city: "Graz",
	first: "2016-10-01"
};

const GEW = {
	accessible: true,
	accommodation: "hotel",
	admission: "voluntary",
	audience: "40",
	fee: "100 €",
	name: "1. Grazer Lesebühne: Gewalt ist keine Lesung",
	tour: false,
	masters: ["Mario Tomic"],
	type: "closed",
	travel: "full",
	city: "Graz",
	first: "2013-01-01"
};

const GRI = {
	accessible: true,
	accommodation: "hotel",
	admission: "voluntary",
	audience: "80",
	fee: "50 €",
	name: "Gries Slam",
	tour: false,
	masters: ["Mario Tomic"],
	type: "challenging",
	travel: "full",
	city: "GRAZ",
	first: "2016-05-01"
};

const GRU = {
	accessible: true,
	accommodation: "private",
	admission: "voluntary",
	audience: "90",
	fee: "0 €",
	name: "Grünschnabel Poetry Slam",
	tour: false,
	masters: ["Yannick Steinkellner", "Anna-Lena Obermoser"],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2014-05-01"
};

const HOE = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "450",
	fee: "100 €",
	name: "Hörsaal Slam Graz",
	tour: "a",
	masters: ["Mario Tomic"],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2014-10-01"
};

const KLO = {
	accommodation: "hotel",
	admission: "5 €",
	audience: "60",
	fee: "50 €",
	name: "Klosterslam",
	tour: false,
	masters: ["Klaus Lederwasch"],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2016-05-01"
};

const KOM = {
	accessible: true,
	accommodation: "hotel",
	admission: "voluntary",
	audience: "100",
	fee: "50 €",
	name: "Kombüsen Slam",
	tour: false,
	masters: [
		"Mario Tomic"
	],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2011-01-01"
};

const $3_001$12 = {
	AFF,
	ANT,
	BAT,
	BRU,
	DIA,
	DUC,
	EIN,
	GEW,
	GRI,
	GRU,
	HOE,
	KLO,
	KOM,
	name: "Graz"
};

const $2_001$6 = {
	"001": $3_001$12,
	name: "Graz"
};

const SCH = {
	accessible: true,
	accommodation: "private",
	admission: "voluntary",
	audience: "100",
	fee: "0 €",
	name: "Schilcher Slam",
	tour: false,
	masters: [
		"Helena Schmidt",
		"Jimi Lend"
	],
	type: "open",
	travel: "grant",
	city: "Sankt Ulrich in Greith",
	first: "2012-04-01"
};

const $3_047 = {
	SCH,
	name: "Sankt Martin im Sulmtal"
};

const $2_003$4 = {
	"047": $3_047,
	name: "Deutschlandsberg"
};

const $000$8 = {
	accessible: true,
	accommodation: "private",
	admission: "voluntary",
	audience: "30",
	fee: "50 €",
	name: "Poetry Slam",
	tour: false,
	masters: ["Klaus Lederwasch"],
	type: "challenging",
	travel: "full",
	city: "Frohnleiten",
	first: "2014-09-01"
};

const $3_063 = {
	"000": $000$8,
	name: "Frohnleiten"
};

const $2_006$4 = {
	"063": $3_063,
	name: "Graz-Umgebung"
};

const $000$10 = {
	accommodation: "redundant",
	admission: "voluntary",
	audience: "100",
	fee: "0 €",
	name: "PSK - Poetry Slam Knittelfeld",
	tour: false,
	masters: ["Daniela Knafl"],
	type: "challenging",
	travel: false,
	city: "Knittelfeld",
	first: "2016-09-01"
};

const $3_079 = {
	"000": $000$10,
	name: "Knittelfeld"
};

const $2_021$2 = {
	"079": $3_079,
	name: "Murtal"
};

const $000$12 = {
	accessible: true,
	accommodation: "hotel",
	admission: false,
	audience: "300",
	fee: "0 €",
	name: "Poetry Slam Tieschen",
	tour: false,
	masters: [
		"Mario Tomic"
	],
	type: "open",
	travel: false,
	city: "Tieschen",
	first: "2014-06-01"
};

const $3_068 = {
	"000": $000$12,
	name: "Tieschen"
};

const $000$14 = {
	accessible: true,
	accommodation: "private",
	admission: "voluntary",
	audience: "150",
	fee: "150 €",
	name: "Poetry Slam Feldbach",
	tour: false,
	masters: [
		"Mario Tomic"
	],
	type: "challenging",
	travel: false,
	city: "Feldbach",
	first: "2016-07-01"
};

const $3_079$2 = {
	"000": $000$14,
	name: "Feldbach"
};

const $2_023 = {
	"068": $3_068,
	"079": $3_079$2,
	name: "Südoststeiermark"
};

const $1_006 = {
	"000": $2_000,
	"001": $2_001$6,
	"003": $2_003$4,
	"006": $2_006$4,
	"021": $2_021$2,
	"023": $2_023,
	name: "Steiermark"
};

const GES = {
	accessible: true,
	accommodation: "hotel",
	admission: "0 €",
	audience: "90",
	fee: "1 €",
	name: "Gestaltwandler-Slam",
	tour: false,
	masters: ["Stefan Abermann"],
	type: "open",
	travel: "full",
	city: "Innsbruck",
	first: "2014-04-01"
};

const $3_001$14 = {
	GES,
	name: "Innsbruck"
};

const $2_001$8 = {
	"001": $3_001$14,
	name: "Innsbruck"
};

const WOR$8 = {
	accessible: true,
	accommodation: "hotel",
	admission: "8 €",
	audience: "80",
	fee: "30 €",
	name: "Wortfluss Poetry Slam",
	tour: "b",
	masters: ["Ko Bylanzky"],
	type: "challenging",
	travel: "full",
	city: "Kufstein",
	first: "2014-09-01"
};

const $3_013 = {
	WOR: WOR$8,
	name: "Kufstein"
};

const $2_005 = {
	"013": $3_013,
	name: "Kufstein"
};

const $1_007 = {
	"001": $2_001$8,
	"005": $2_005,
	name: "Tirol"
};

const DEA = {
	accessible: true,
	accommodation: false,
	admission: "10 €",
	audience: "150",
	fee: "0 €",
	name: "Dead or Alive",
	tour: false,
	masters: [
		"Markim Pause"
	],
	type: "challenging",
	travel: "full",
	city: "Bregenz",
	first: "2015-09-01"
};

const $3_007 = {
	DEA,
	name: "Bregenz"
};

const SPI = {
	accessible: true,
	accommodation: "hotel",
	admission: "8 €",
	audience: "100",
	fee: "40 €",
	name: "Spinnerei",
	tour: false,
	masters: ["Sara Bonetti"],
	type: "challenging",
	travel: "full",
	city: "Hard",
	first: "2017-08-01"
};

const $3_015 = {
	SPI,
	name: "Hard"
};

const WOR$10 = {
	accommodation: "hotel",
	admission: "8 €",
	audience: "80",
	fee: "30 €",
	name: "Wort drauf",
	tour: false,
	masters: ["Steffen Brinkmann"],
	type: "challenging",
	travel: "grant",
	city: "Höchst",
	first: "2012-11-01"
};

const $3_017 = {
	WOR: WOR$10,
	name: "Höchst"
};

const $2_002$4 = {
	"007": $3_007,
	"015": $3_015,
	"017": $3_017,
	name: "Bregenz"
};

const JAM = {
	accessible: true,
	accommodation: false,
	admission: "voluntary",
	audience: "150",
	fee: "0 €",
	name: "Jam on Poetry",
	tour: false,
	masters: [
		"Steffen Brinkmann"
	],
	type: "challenging",
	travel: false,
	city: "Dornbirn",
	first: "2008-01-01"
};

const KAM = {
	accessible: true,
	accommodation: "hotel",
	admission: "9 €",
	audience: "250",
	fee: "0 €",
	name: "Kampf der Dichter",
	tour: false,
	masters: [
		"Markim Pause"
	],
	type: "challenging",
	travel: "full",
	city: "Dornbirn",
	first: "2004-04-01"
};

const WOR$12 = {
	accommodation: "hotel",
	admission: "8 €",
	audience: "80",
	fee: "30 €",
	name: "Wort Drauf Slam",
	tour: false,
	masters: [
		"Steffen Brinkmann"
	],
	type: "challenging",
	travel: "grant",
	city: "Dornbirn",
	first: "2012-11-01"
};

const U20$2 = {
	accessible: true,
	accommodation: "private",
	admission: "5 €",
	audience: "106",
	fee: "0 €",
	name: "U20 Poetry Slam Vorarlberg",
	tour: false,
	masters: [
		"Sophia Juen"
	],
	type: "challenging",
	travel: "grant",
	city: "Dornbirn",
	first: "2017-03-01"
};

const $3_001$16 = {
	JAM,
	KAM,
	WOR: WOR$12,
	U20: U20$2,
	name: "Dornbirn"
};

const $000$16 = {
	accessible: true,
	accommodation: "hotel",
	admission: "9 €",
	audience: "120",
	fee: "80 €",
	name: "Emser Slam",
	tour: false,
	masters: ["Tom Astleitner"],
	type: "closed",
	travel: "full",
	city: "Hohenems",
	first: "2017-06-01"
};

const $3_002$2 = {
	"000": $000$16,
	name: "Hohenems"
};

const $2_003$6 = {
	"001": $3_001$16,
	"002": $3_002$2,
	name: "Dornbirn"
};

const GRA = {
	accessible: true,
	accommodation: false,
	admission: "voluntary",
	audience: "200",
	fee: "25 €",
	name: "Grand Poetry Slam",
	tour: false,
	masters: [
		"Tom Astleitner"
	],
	type: "closed",
	travel: "grant",
	city: "Feldkirch",
	first: "2016-08-01"
};

const RAU = {
	accessible: true,
	accommodation: false,
	admission: "voluntary",
	audience: "80",
	fee: "25 €",
	name: "Rauchzeichen",
	tour: false,
	masters: [
		"Tom Astleitner"
	],
	type: "open",
	travel: "grant",
	city: "Feldkirch",
	first: "2017-04-01"
};

const TAG$4 = {
	accessible: true,
	accommodation: false,
	admission: "12 €",
	audience: "200",
	fee: "0 €",
	name: "Tagebuch Slam",
	tour: false,
	masters: [
		"Diana Köhle"
	],
	type: "challenging",
	travel: "full",
	city: "Feldkirch",
	first: "2015-07-01"
};

const $3_004$2 = {
	GRA,
	RAU,
	TAG: TAG$4,
	name: "Feldkirch"
};

const $2_004 = {
	"004": $3_004$2,
	name: "Feldkirch"
};

const $1_008 = {
	"002": $2_002$4,
	"003": $2_003$6,
	"004": $2_004,
	name: "Vorarlberg"
};

const CUP = {
	name: "Poetry Slam Cup",
	accommodation: "hotel",
	admission: "9 €",
	audience: "130",
	fee: "100 €",
	tour: false,
	masters: [
		"Elwood Loud"
	],
	type: "closed",
	travel: "full",
	city: "Wien",
	first: "2007-08-01"
};

const IMW = {
	name: "Slam im Wasserglas",
	shortId: "AT-9-1-1-IMW"
};

const LIB = {
	accessible: true,
	accommodation: "private",
	admission: false,
	audience: "80",
	fee: "0 €",
	name: "Library Slam",
	tour: false,
	masters: [
		"Diana Köhle"
	],
	type: "open",
	travel: false,
	city: "Wien",
	first: "2014-04-01"
};

const $3_001$18 = {
	CUP,
	IMW,
	LIB,
	name: "Innere Stadt",
	zip: 1010
};

const $2_001$10 = {
	"001": $3_001$18,
	name: "Innere Stadt"
};

const STU = {
	dates: {
		2017: {
			11: {
				21: {
					time: "19:00:00"
				}
			}
		},
		2018: {
			"01": {
				23: {
					time: "19:00:00"
				}
			}
		}
	},
	name: "STUMMGABEL Poetry Slam",
	accommodation: "private",
	admission: "10 €",
	audience: "150",
	fee: "60 €",
	tour: false,
	masters: [
		"Robin Reithmayr"
	],
	type: "challenging",
	travel: "full",
	city: "Vienna",
	first: "2015-06-01"
};

const $3_001$20 = {
	STU,
	name: "Wieden",
	zip: 1040
};

const $2_004$2 = {
	"001": $3_001$20,
	name: "Wieden"
};

const FRE$2 = {
	dates: {
		2017: {
			11: {
				23: "default"
			},
			12: {
				14: "default"
			}
		},
		2018: {
			10: {
				25: "default"
			},
			11: {
				15: "default"
			},
			12: {
				13: "default"
			},
			"01": {
				25: "default"
			},
			"02": {
				15: "default"
			},
			"03": {
				29: "default"
			},
			"04": {
				26: "default"
			},
			"05": {
				24: "default"
			},
			"09": {
				27: "default"
			}
		}
	},
	name: "Freispruch Poetry Slam",
	shortName: "Freispruch",
	description: "Ein Dichterwettstreit um die Gunst ... der Geschworenen.\nFünf Minuten Vortragszeit für selbst verfasste Texte ist alles, was sechs Slam Poetinnen und Poeten bleibt, um über ihr \"Urteil\" zu verhandeln.\n\nLyrik, Prosa, Performance, Dada - solange das Textblatt das einzige Requisit bleibt, ist alles erlaubt. Welches \"Plädoyer\" gewinnt, entscheidet das Publikum.\n\nAlles unter der strengen Beobachtung eines betagten, zynischen Häfenwärters und dem Eifer übermotivierter Pflichtverteidiger. Ein Poetry Slam im Theatergewand.\n\nAnmeldungen bitte unter contact@fomp.eu",
	location: {
		street: "Hamburgerstraße 15",
		name: "Spektakel"
	},
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	}
};

const POW = {
	dates: {
		2017: {
			12: {
				20: "default"
			}
		},
		2018: {
			10: {
				17: "default"
			},
			11: {
				21: "default"
			},
			12: {
				19: "default"
			},
			"01": {
				17: "default"
			},
			"02": {
				21: "default"
			},
			"03": {
				21: "default"
			},
			"04": {
				18: "default"
			},
			"05": {
				16: "default"
			},
			"06": {
				20: "default"
			},
			"09": {
				19: "default"
			}
		}
	},
	name: "PowerPoint-Karaoke Wien",
	shortName: "PowerPoint-Karaoke",
	description: "Hier wird nicht gesungen. Hier wird präsentiert: Von \"Paarungsverhalten des gemeinen Bonobos\" über \"Die Kunst des Panierens\" bis \"Der perfekte Neigungswinkel der Maroni - eine Annäherung\" - wir haben Präsentationen vorbereitet, die von acht völlig ahnungslosen Referentinnen und Referenten gehalten werden. Das Themenspektrum kennt keine Grenzen, bei PowerPoint-Karaoke ist alles möglich!  Die Auftretenden kennen das Thema des Vortrags nicht, bis die erste Folie auf dem Beamer erscheint. Das Publikum bewertet diese Auftritte per Punktekarten. So wird bei PowerPoint-Karaoke aus langweiligen Unireferaten oder peinlichen Agenturpitches pure Unterhaltung!\n\nAnmeldungen bitte unter contact@fomp.eu",
	location: {
		street: "Hamburgerstraße 15",
		name: "Spektakel"
	},
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	}
};

const ROT = {
	dates: {
		2017: {
			11: {
				24: {
					time: "19:30:00"
				}
			}
		}
	},
	name: "Rotlicht Poetry Slam",
	accommodation: "private",
	admission: "6 €",
	audience: "70",
	fee: "0 €",
	tour: false,
	masters: [
		"Christian Schreibmüller",
		"Cornelia Ertl",
		"Johanna Obernberger",
		"Jasmin Lindinger"
	],
	type: "open",
	travel: "full",
	city: "Wien",
	first: "2012-02-01"
};

const $3_001$22 = {
	FRE: FRE$2,
	POW,
	ROT,
	name: "Margareten",
	zip: 1050
};

const $2_005$2 = {
	"001": $3_001$22,
	name: "Margareten"
};

const TAG$6 = {
	dates: {
		2017: {
			11: {
				26: {
					time: "19:00:00"
				}
			},
			12: {
				17: {
					time: "19:00:00"
				}
			}
		},
		2018: {
			"01": {
				21: {
					time: "19:00:00"
				}
			},
			"02": {
				18: {
					time: "19:00:00"
				}
			},
			"03": {
				25: {
					time: "19:00:00"
				}
			},
			"04": {
				22: {
					time: "19:00:00"
				}
			}
		}
	},
	name: "TAGebuch Slam",
	shortId: "AT-9-6-1-TAG"
};

const $3_001$24 = {
	TAG: TAG$6,
	name: "Mariahilf",
	zip: 1060
};

const $2_006$6 = {
	"001": $3_001$24,
	name: "Mariahilf"
};

const B00 = {
	dates: {
		2017: {
			12: {
				15: {
					time: "20:00:00"
				}
			}
		},
		2018: {
			"01": {
				12: {
					time: "20:00:00"
				}
			},
			"02": {
				16: {
					time: "20:00:00"
				}
			},
			"03": {
				16: {
					time: "20:00:00"
				}
			},
			"04": {
				20: {
					time: "20:00:00"
				}
			},
			"05": {
				25: {
					time: "20:00:00"
				}
			},
			"06": {
				15: {
					time: "20:00:00"
				}
			}
		}
	},
	name: "Slam B",
	accessible: true,
	accommodation: "private",
	admission: false,
	audience: "171",
	fee: "0 €",
	tour: false,
	masters: [
		"Diana Köhle"
	],
	type: "open",
	travel: "grant",
	city: "Wien",
	first: "2009-08-01"
};

const BIL = {
	name: "Bilder_Bücher_Bühne",
	description: "Österreichs einzige Lese-Mal-Bühne samt Poetry, Prosa und Pinselei. Sowas gibt's? Sure, it does.\nFOMP lädt drei Autorinnen und Autoren ein, die eigene Texte lesen, begleitet von einer bildenden Künstlerin.Die enstandenden Bilder werden in einer \"Auktion auf Speed\" an die Meistbietenden versteigert.\n\nWahn, Wonne und Wortkunst für Sammler und Jägerinnen besonderer Schätze.",
	location: {
		street: "Neustiftgasse 57",
		name: "Die Drahtwarenhandlung"
	},
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	}
};

const BOC = {
	accessible: true,
	accommodation: "private",
	admission: "10 €",
	audience: "150",
	fee: "0 €",
	name: "Slam B.ock",
	tour: false,
	masters: [
		"Diana Köhle"
	],
	type: "closed",
	travel: false,
	city: "Wien",
	first: "2012-10-01"
};

const POP = {
	name: "Pop Up Poetry",
	shortName: "Pop Up Poetry",
	description: "In der Reihe „Pop up Poetry“ präsentiert FOMP einzigartige Künstlerinnen und Künstler, die aus dem Poetry Slam-Umfeld kommen und durch beeindruckende Soloperformances hervorstechen. Konzerte. Lesungen. Stand-Up. Slam. Performance.\nDestilliert und verfeinert, immer frisch auf immer neuen Bühnen dieser schönen Stadt.Über alle Events dieser Serie erfahrt ihr auf unserer Facebook - Seite.",
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	}
};

const SIN = {
	dates: {
		2017: {
			11: {
				22: "default"
			},
			12: {
				13: "default"
			}
		},
		2018: {
			10: {
				24: "default"
			},
			11: {
				28: "default"
			},
			12: {
				12: "default"
			},
			"01": {
				24: "default"
			},
			"02": {
				14: "default"
			},
			"03": {
				28: "default"
			},
			"04": {
				25: "default"
			},
			"05": {
				23: "default"
			},
			"09": {
				26: "default"
			}
		}
	},
	name: "Sinn & Seife - Die Poetry Soap",
	shortName: "Sinn & Seife",
	description: "Wiens Slamlesebühne mit Ensemble.\n\nMonatlich laden Yasmo, Mieze Medusa, Markus Köhle, Christopher Hütmannsberger, Jonas Scheiner und Henrik Szanto ein: Ins 7 * Stern - Wohnzimmer.\n\nGemeinsam mit dem Gast des Monats betrachten sie die Aufs und Abs ihrer wortverrückten Groß - WG.Ob Dichtkunst oder Prosa, Texte, Sketche aus den Ideen des Publikums– auf dieser Bühne herrschen Freude und Witz.\n\nWriting the good life. Straight outta Milchstraße.",
	location: {
		street: "Siebensterngasse 31",
		name: "7Stern"
	},
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	}
};

const $3_001$26 = {
	B00,
	BIL,
	BOC,
	POP,
	SIN,
	name: "Neubau",
	zip: 1070
};

const $2_007 = {
	"001": $3_001$26,
	name: "Neubau"
};

const BIS = {
	name: "Bis einer reimt",
	accommodation: "private",
	admission: "voluntary",
	audience: "40",
	fee: "50 €",
	tour: false,
	masters: [
		"Simon Tomaz"
	],
	type: "closed",
	travel: "full",
	city: "Wien",
	first: "2016-09-01"
};

const SPR = {
	name: "SprichWORT! Slam",
	accommodation: "private",
	admission: "5 €",
	audience: "70",
	fee: "50 €",
	tour: "c",
	masters: [
		"Adina Wilcke"
	],
	type: "open",
	travel: "full",
	city: "Wien",
	first: "2016-09-01"
};

const $3_001$28 = {
	BIS,
	SPR,
	name: "Josefstadt",
	zip: 1080
};

const $2_008 = {
	"001": $3_001$28,
	name: "Josefstadt"
};

const SIN$2 = {
	dates: {
		2017: {
			12: {
				"08": {
					time: "20:00:00"
				}
			}
		}
	},
	name: "Sing, Song & Sound-Slam",
	shortId: "AT-9-9-1-SIN"
};

const STU$2 = {
	dates: {
		2017: {
			11: {
				29: {
					time: "19:30:00"
				}
			}
		}
	},
	name: "STUMMGABEL Comedy Slam",
	shortId: "AT-9-9-1-STU"
};

const $3_001$30 = {
	SIN: SIN$2,
	STU: STU$2,
	name: "Alsergrund",
	zip: 1090
};

const $2_009$2 = {
	"001": $3_001$30,
	name: "Alsergrund"
};

const WOS = {
	name: "Wos host gsogt? Poetry Slam",
	shortId: "AT-9-15-1-WOS"
};

const $3_001$32 = {
	WOS,
	name: "Rudolfsheim-Fünfhaus",
	zip: 1150
};

const $2_015 = {
	"001": $3_001$32,
	name: "Rudolfsheim-Fünfhaus"
};

const BLI = {
	dates: {
		2018: {
			"02": {
				"02": "default"
			},
			"05": {
				21: "default"
			}
		}
	},
	name: "Blitzdichtgewitter Poetry Jazz Slam",
	description: "Poetry Slam und Jazz. Zwei Kunstformen kunstvoll vereint\nDie beste Melange für Liebende von Sprache und Musik: Ein Jazztrio untermalt die Texte vier geladener Künstlerinnen und Künstler.Zwischen Tagträumen und Nachtleben, Sprachbildern und Lautmalerei entsteht eine neue Begegnung mit Slam, wie sie allein Musik erzeugen kann.\n\nModeration: Yasmo\n\nBauer Schläger Wurf Berger:\n(Ralph Mothwurf – Gitarre, Andreas Lindenbauer – Bassklarinette / Altsaxophon, Reinhard Hörschläger – Percussion)",
	location: {
		street: "Gallitzinstraße 1",
		name: "Bockkeller"
	},
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	}
};

const FLA = {
	name: "Flawless Poetry Slam",
	shortId: "AT-9-16-1-FLA"
};

const STI = {
	name: "Stille Post Slam",
	shortId: "AT-9-16-1-STI"
};

const TEX = {
	dates: {
		2017: {
			11: {
				24: {
					time: "19:30:00"
				}
			}
		}
	},
	name: "textstrom Poetry Slam",
	shortId: "AT-9-16-1-TEX"
};

const U20$4 = {
	accessible: true,
	accommodation: "private",
	admission: "6 €",
	audience: "80",
	fee: "0 €",
	tour: "c",
	masters: [
		"Adina Wilcke"
	],
	type: "challenging",
	travel: "full",
	city: "Wien",
	first: "2008-02-01",
	name: "U20 Poetry Slam"
};

const $3_001$34 = {
	BLI,
	FLA,
	STI,
	TEX,
	U20: U20$4,
	name: "Ottakring",
	zip: 1160
};

const $2_016$6 = {
	"001": $3_001$34,
	name: "Ottakring"
};

const KUL = {
	accessible: true,
	accommodation: "private",
	admission: "5 €",
	audience: "150",
	fee: "70 €",
	name: "KultuRectum Poetry Slam",
	tour: false,
	masters: [
		"Tereza Hossa"
	],
	type: "challenging",
	travel: "full",
	city: "Wien",
	first: "2016-09-01"
};

const $3_001$36 = {
	KUL,
	name: "Floridsdorf",
	zip: 1210
};

const $2_021$4 = {
	"001": $3_001$36,
	name: "Floridsdorf"
};

const ABI = {
	accessible: true,
	accommodation: "private",
	admission: "3 €",
	audience: "120",
	fee: "40 €",
	name: "Ab ins Wasser Slam",
	tour: false,
	masters: [
		"Diana Köhle"
	],
	type: "challenging",
	travel: false,
	city: "Wien",
	first: "2015-06-01"
};

const $3_001$38 = {
	ABI,
	name: "Donaustadt",
	zip: 1220
};

const $2_022 = {
	"001": $3_001$38,
	name: "Donaustadt"
};

const $1_009 = {
	"001": $2_001$10,
	"004": $2_004$2,
	"005": $2_005$2,
	"006": $2_006$6,
	"007": $2_007,
	"008": $2_008,
	"009": $2_009$2,
	"015": $2_015,
	"016": $2_016$6,
	"021": $2_021$4,
	"022": $2_022,
	name: "Wien"
};

const AT = {
	"001": $1_001,
	"002": $1_002,
	"003": $1_003,
	"004": $1_004,
	"005": $1_005,
	"006": $1_006,
	"007": $1_007,
	"008": $1_008,
	"009": $1_009,
	name: "Österreich"
};

const DE = {
	name: "Deutschland"
};

const MOR = {
	accessible: true,
	accommodation: "redundant",
	admission: false,
	audience: "70",
	fee: "0 €",
	name: "Morgenstern-Slam",
	tour: false,
	masters: [
		"Lipoverein / Carla Thuile (Organisation)",
		"Lene Morgenstern (Moderation)"
	],
	type: "open",
	travel: false,
	city: "verschiedene",
	first: "2010-01-01"
};

const $000$18 = {
	MOR
};

const $2_001$12 = {
	"000": $000$18,
	name: "Autonome Provinz Bozen – Südtirol"
};

const $1_001$2 = {
	"001": $2_001$12,
	name: "Trentino-Südtirol"
};

const IT = {
	"001": $1_001$2
};

const youslam = {
	AT,
	DE,
	IT
};

Object.keys(youslam).forEach((country) => {
	Object.keys(youslam[country]).forEach((level1) => {
		Object.keys(youslam[country][level1]).forEach((level2) => {
			Object.keys(youslam[country][level1][level2]).forEach((level3) => {
				Object.keys(youslam[country][level1][level2][level3]).forEach((key) => {
					if (key.match(/[A-Z0-9]{3}/) && key.match(/[A-Z0-9]{3}/).index === 0) {
						youslam[country][level1][level2][level3][key].id = country + level1 + level2 + level3 + key;
						youslam[country][level1][level2][level3][key].shortId = `${country}-${parseInt(level1, 10)}-${parseInt(level2, 10)}-${parseInt(level3, 10)}-${key}`;

						youslam[country][level1][level2][level3][key].location = assign_1(youslam[country][level1][level2][level3][key].location, {
							country,
							level1,
							level2,
							level3,
							zip: youslam[country][level1][level2][level3].zip
						});
					}
				});
			});
		});
	});
});

export default youslam;
