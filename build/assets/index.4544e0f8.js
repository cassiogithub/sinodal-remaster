const _p = function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
    new MutationObserver(r => {
        for (const o of r)
            if (o.type === "childList")
                for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && n(s)
    }).observe(document, { childList: !0, subtree: !0 });

    function i(r) { const o = {}; return r.integrity && (o.integrity = r.integrity), r.referrerpolicy && (o.referrerPolicy = r.referrerpolicy), r.crossorigin === "use-credentials" ? o.credentials = "include" : r.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o }

    function n(r) {
        if (r.ep) return;
        r.ep = !0;
        const o = i(r);
        fetch(r.href, o)
    }
};
_p();
var X = { exports: {} },
    O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr = Symbol.for("react.element"),
    Ip = Symbol.for("react.portal"),
    $p = Symbol.for("react.fragment"),
    Vp = Symbol.for("react.strict_mode"),
    Np = Symbol.for("react.profiler"),
    zp = Symbol.for("react.provider"),
    Fp = Symbol.for("react.context"),
    Dp = Symbol.for("react.forward_ref"),
    Op = Symbol.for("react.suspense"),
    Hp = Symbol.for("react.memo"),
    jp = Symbol.for("react.lazy"),
    Mu = Symbol.iterator;

function Wp(e) { return e === null || typeof e != "object" ? null : (e = Mu && e[Mu] || e["@@iterator"], typeof e == "function" ? e : null) }
var Td = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} },
    Sd = Object.assign,
    Ed = {};

function hn(e, t, i) { this.props = e, this.context = t, this.refs = Ed, this.updater = i || Td }
hn.prototype.isReactComponent = {};
hn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
hn.prototype.forceUpdate = function(e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate") };

function Pd() {}
Pd.prototype = hn.prototype;

function fa(e, t, i) { this.props = e, this.context = t, this.refs = Ed, this.updater = i || Td }
var pa = fa.prototype = new Pd;
pa.constructor = fa;
Sd(pa, hn.prototype);
pa.isPureReactComponent = !0;
var _u = Array.isArray,
    Ad = Object.prototype.hasOwnProperty,
    ma = { current: null },
    Ld = { key: !0, ref: !0, __self: !0, __source: !0 };

function Rd(e, t, i) {
    var n, r = {},
        o = null,
        s = null;
    if (t != null)
        for (n in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) Ad.call(t, n) && !Ld.hasOwnProperty(n) && (r[n] = t[n]);
    var l = arguments.length - 2;
    if (l === 1) r.children = i;
    else if (1 < l) {
        for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
        r.children = u
    }
    if (e && e.defaultProps)
        for (n in l = e.defaultProps, l) r[n] === void 0 && (r[n] = l[n]);
    return { $$typeof: pr, type: e, key: o, ref: s, props: r, _owner: ma.current }
}

function Up(e, t) { return { $$typeof: pr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner } }

function va(e) { return typeof e == "object" && e !== null && e.$$typeof === pr }

function Qp(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function(i) { return t[i] }) }
var Iu = /\/+/g;

function bs(e, t) { return typeof e == "object" && e !== null && e.key != null ? Qp("" + e.key) : t.toString(36) }

function Xr(e, t, i, n, r) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case pr:
                case Ip:
                    s = !0
            }
    }
    if (s) return s = e, r = r(s), e = n === "" ? "." + bs(s, 0) : n, _u(r) ? (i = "", e != null && (i = e.replace(Iu, "$&/") + "/"), Xr(r, t, i, "", function(c) { return c })) : r != null && (va(r) && (r = Up(r, i + (!r.key || s && s.key === r.key ? "" : ("" + r.key).replace(Iu, "$&/") + "/") + e)), t.push(r)), 1;
    if (s = 0, n = n === "" ? "." : n + ":", _u(e))
        for (var l = 0; l < e.length; l++) {
            o = e[l];
            var u = n + bs(o, l);
            s += Xr(o, t, i, u, r)
        } else if (u = Wp(e), typeof u == "function")
            for (e = u.call(e), l = 0; !(o = e.next()).done;) o = o.value, u = n + bs(o, l++), s += Xr(o, t, i, u, r);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function Rr(e, t, i) {
    if (e == null) return e;
    var n = [],
        r = 0;
    return Xr(e, n, "", "", function(o) { return t.call(i, o, r++) }), n
}

function Bp(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(i) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = i)
        }, function(i) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = i)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Ae = { current: null },
    qr = { transition: null },
    Kp = { ReactCurrentDispatcher: Ae, ReactCurrentBatchConfig: qr, ReactCurrentOwner: ma };
O.Children = { map: Rr, forEach: function(e, t, i) { Rr(e, function() { t.apply(this, arguments) }, i) }, count: function(e) { var t = 0; return Rr(e, function() { t++ }), t }, toArray: function(e) { return Rr(e, function(t) { return t }) || [] }, only: function(e) { if (!va(e)) throw Error("React.Children.only expected to receive a single React element child."); return e } };
O.Component = hn;
O.Fragment = $p;
O.Profiler = Np;
O.PureComponent = fa;
O.StrictMode = Vp;
O.Suspense = Op;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kp;
O.cloneElement = function(e, t, i) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var n = Sd({}, e.props),
        r = e.key,
        o = e.ref,
        s = e._owner;
    if (t != null) { if (t.ref !== void 0 && (o = t.ref, s = ma.current), t.key !== void 0 && (r = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps; for (u in t) Ad.call(t, u) && !Ld.hasOwnProperty(u) && (n[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]) }
    var u = arguments.length - 2;
    if (u === 1) n.children = i;
    else if (1 < u) {
        l = Array(u);
        for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
        n.children = l
    }
    return { $$typeof: pr, type: e.type, key: r, ref: o, props: n, _owner: s }
};
O.createContext = function(e) { return e = { $$typeof: Fp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: zp, _context: e }, e.Consumer = e };
O.createElement = Rd;
O.createFactory = function(e) { var t = Rd.bind(null, e); return t.type = e, t };
O.createRef = function() { return { current: null } };
O.forwardRef = function(e) { return { $$typeof: Dp, render: e } };
O.isValidElement = va;
O.lazy = function(e) { return { $$typeof: jp, _payload: { _status: -1, _result: e }, _init: Bp } };
O.memo = function(e, t) { return { $$typeof: Hp, type: e, compare: t === void 0 ? null : t } };
O.startTransition = function(e) {
    var t = qr.transition;
    qr.transition = {};
    try { e() } finally { qr.transition = t }
};
O.unstable_act = function() { throw Error("act(...) is not supported in production builds of React.") };
O.useCallback = function(e, t) { return Ae.current.useCallback(e, t) };
O.useContext = function(e) { return Ae.current.useContext(e) };
O.useDebugValue = function() {};
O.useDeferredValue = function(e) { return Ae.current.useDeferredValue(e) };
O.useEffect = function(e, t) { return Ae.current.useEffect(e, t) };
O.useId = function() { return Ae.current.useId() };
O.useImperativeHandle = function(e, t, i) { return Ae.current.useImperativeHandle(e, t, i) };
O.useInsertionEffect = function(e, t) { return Ae.current.useInsertionEffect(e, t) };
O.useLayoutEffect = function(e, t) { return Ae.current.useLayoutEffect(e, t) };
O.useMemo = function(e, t) { return Ae.current.useMemo(e, t) };
O.useReducer = function(e, t, i) { return Ae.current.useReducer(e, t, i) };
O.useRef = function(e) { return Ae.current.useRef(e) };
O.useState = function(e) { return Ae.current.useState(e) };
O.useSyncExternalStore = function(e, t, i) { return Ae.current.useSyncExternalStore(e, t, i) };
O.useTransition = function() { return Ae.current.useTransition() };
O.version = "18.2.0";
X.exports = O;
var Gp = X.exports,
    ul = {},
    Md = { exports: {} },
    Ge = {},
    _d = { exports: {} },
    Id = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(A, F) {
        var D = A.length;
        A.push(F);
        e: for (; 0 < D;) {
            var oe = D - 1 >>> 1,
                de = A[oe];
            if (0 < r(de, F)) A[oe] = F, A[D] = de, D = oe;
            else break e
        }
    }

    function i(A) { return A.length === 0 ? null : A[0] }

    function n(A) {
        if (A.length === 0) return null;
        var F = A[0],
            D = A.pop();
        if (D !== F) {
            A[0] = D;
            e: for (var oe = 0, de = A.length, Ar = de >>> 1; oe < Ar;) {
                var ai = 2 * (oe + 1) - 1,
                    ws = A[ai],
                    ui = ai + 1,
                    Lr = A[ui];
                if (0 > r(ws, D)) ui < de && 0 > r(Lr, ws) ? (A[oe] = Lr, A[ui] = D, oe = ui) : (A[oe] = ws, A[ai] = D, oe = ai);
                else if (ui < de && 0 > r(Lr, D)) A[oe] = Lr, A[ui] = D, oe = ui;
                else break e
            }
        }
        return F
    }

    function r(A, F) { var D = A.sortIndex - F.sortIndex; return D !== 0 ? D : A.id - F.id }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() { return o.now() }
    } else {
        var s = Date,
            l = s.now();
        e.unstable_now = function() { return s.now() - l }
    }
    var u = [],
        c = [],
        a = 1,
        d = null,
        p = 3,
        k = !1,
        b = !1,
        w = !1,
        z = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate != "undefined" ? setImmediate : null;
    typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function v(A) {
        for (var F = i(c); F !== null;) {
            if (F.callback === null) n(c);
            else if (F.startTime <= A) n(c), F.sortIndex = F.expirationTime, t(u, F);
            else break;
            F = i(c)
        }
    }

    function x(A) {
        if (w = !1, v(A), !b)
            if (i(u) !== null) b = !0, ys(P);
            else {
                var F = i(c);
                F !== null && ks(x, F.startTime - A)
            }
    }

    function P(A, F) {
        b = !1, w && (w = !1, f(_), _ = -1), k = !0;
        var D = p;
        try {
            for (v(F), d = i(u); d !== null && (!(d.expirationTime > F) || A && !nt());) {
                var oe = d.callback;
                if (typeof oe == "function") {
                    d.callback = null, p = d.priorityLevel;
                    var de = oe(d.expirationTime <= F);
                    F = e.unstable_now(), typeof de == "function" ? d.callback = de : d === i(u) && n(u), v(F)
                } else n(u);
                d = i(u)
            }
            if (d !== null) var Ar = !0;
            else {
                var ai = i(c);
                ai !== null && ks(x, ai.startTime - F), Ar = !1
            }
            return Ar
        } finally { d = null, p = D, k = !1 }
    }
    var L = !1,
        R = null,
        _ = -1,
        re = 5,
        H = -1;

    function nt() { return !(e.unstable_now() - H < re) }

    function wn() {
        if (R !== null) {
            var A = e.unstable_now();
            H = A;
            var F = !0;
            try { F = R(!0, A) } finally { F ? bn() : (L = !1, R = null) }
        } else L = !1
    }
    var bn;
    if (typeof h == "function") bn = function() { h(wn) };
    else if (typeof MessageChannel != "undefined") {
        var Ru = new MessageChannel,
            Mp = Ru.port2;
        Ru.port1.onmessage = wn, bn = function() { Mp.postMessage(null) }
    } else bn = function() { z(wn, 0) };

    function ys(A) { R = A, L || (L = !0, bn()) }

    function ks(A, F) { _ = z(function() { A(e.unstable_now()) }, F) }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) { A.callback = null }, e.unstable_continueExecution = function() { b || k || (b = !0, ys(P)) }, e.unstable_forceFrameRate = function(A) { 0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : re = 0 < A ? Math.floor(1e3 / A) : 5 }, e.unstable_getCurrentPriorityLevel = function() { return p }, e.unstable_getFirstCallbackNode = function() { return i(u) }, e.unstable_next = function(A) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var F = 3;
                break;
            default:
                F = p
        }
        var D = p;
        p = F;
        try { return A() } finally { p = D }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(A, F) {
        switch (A) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                A = 3
        }
        var D = p;
        p = A;
        try { return F() } finally { p = D }
    }, e.unstable_scheduleCallback = function(A, F, D) {
        var oe = e.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? oe + D : oe) : D = oe, A) {
            case 1:
                var de = -1;
                break;
            case 2:
                de = 250;
                break;
            case 5:
                de = 1073741823;
                break;
            case 4:
                de = 1e4;
                break;
            default:
                de = 5e3
        }
        return de = D + de, A = { id: a++, callback: F, priorityLevel: A, startTime: D, expirationTime: de, sortIndex: -1 }, D > oe ? (A.sortIndex = D, t(c, A), i(u) === null && A === i(c) && (w ? (f(_), _ = -1) : w = !0, ks(x, D - oe))) : (A.sortIndex = de, t(u, A), b || k || (b = !0, ys(P))), A
    }, e.unstable_shouldYield = nt, e.unstable_wrapCallback = function(A) {
        var F = p;
        return function() {
            var D = p;
            p = F;
            try { return A.apply(this, arguments) } finally { p = D }
        }
    }
})(Id);
_d.exports = Id;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $d = X.exports,
    Be = _d.exports;

function C(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) t += "&args[]=" + encodeURIComponent(arguments[i]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." }
var Vd = new Set,
    Xn = {};

function Si(e, t) { on(e, t), on(e + "Capture", t) }

function on(e, t) { for (Xn[e] = t, e = 0; e < t.length; e++) Vd.add(t[e]) }
var $t = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"),
    cl = Object.prototype.hasOwnProperty,
    Yp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    $u = {},
    Vu = {};

function Xp(e) { return cl.call(Vu, e) ? !0 : cl.call($u, e) ? !1 : Yp.test(e) ? Vu[e] = !0 : ($u[e] = !0, !1) }

function qp(e, t, i, n) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return n ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Zp(e, t, i, n) {
    if (t === null || typeof t == "undefined" || qp(e, t, i, n)) return !0;
    if (n) return !1;
    if (i !== null) switch (i.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Le(e, t, i, n, r, o, s) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = r, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s }
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) { ge[e] = new Le(e, 0, !1, e, null, !1, !1) });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    ge[t] = new Le(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) { ge[e] = new Le(e, 2, !1, e.toLowerCase(), null, !1, !1) });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) { ge[e] = new Le(e, 2, !1, e, null, !1, !1) });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) { ge[e] = new Le(e, 3, !1, e.toLowerCase(), null, !1, !1) });
["checked", "multiple", "muted", "selected"].forEach(function(e) { ge[e] = new Le(e, 3, !0, e, null, !1, !1) });
["capture", "download"].forEach(function(e) { ge[e] = new Le(e, 4, !1, e, null, !1, !1) });
["cols", "rows", "size", "span"].forEach(function(e) { ge[e] = new Le(e, 6, !1, e, null, !1, !1) });
["rowSpan", "start"].forEach(function(e) { ge[e] = new Le(e, 5, !1, e.toLowerCase(), null, !1, !1) });
var ga = /[\-:]([a-z])/g;

function ya(e) { return e[1].toUpperCase() }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ga, ya);
    ge[t] = new Le(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ga, ya);
    ge[t] = new Le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ga, ya);
    ge[t] = new Le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) { ge[e] = new Le(e, 1, !1, e.toLowerCase(), null, !1, !1) });
ge.xlinkHref = new Le("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) { ge[e] = new Le(e, 1, !1, e.toLowerCase(), null, !0, !0) });

function ka(e, t, i, n) {
    var r = ge.hasOwnProperty(t) ? ge[t] : null;
    (r !== null ? r.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Zp(t, i, r, n) && (i = null), n || r === null ? Xp(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : r.mustUseProperty ? e[r.propertyName] = i === null ? r.type === 3 ? !1 : "" : i : (t = r.attributeName, n = r.attributeNamespace, i === null ? e.removeAttribute(t) : (r = r.type, i = r === 3 || r === 4 && i === !0 ? "" : "" + i, n ? e.setAttributeNS(n, t, i) : e.setAttribute(t, i))))
}
var Dt = $d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Mr = Symbol.for("react.element"),
    zi = Symbol.for("react.portal"),
    Fi = Symbol.for("react.fragment"),
    wa = Symbol.for("react.strict_mode"),
    dl = Symbol.for("react.profiler"),
    Nd = Symbol.for("react.provider"),
    zd = Symbol.for("react.context"),
    ba = Symbol.for("react.forward_ref"),
    hl = Symbol.for("react.suspense"),
    fl = Symbol.for("react.suspense_list"),
    xa = Symbol.for("react.memo"),
    jt = Symbol.for("react.lazy"),
    Fd = Symbol.for("react.offscreen"),
    Nu = Symbol.iterator;

function xn(e) { return e === null || typeof e != "object" ? null : (e = Nu && e[Nu] || e["@@iterator"], typeof e == "function" ? e : null) }
var ie = Object.assign,
    xs;

function $n(e) {
    if (xs === void 0) try { throw Error() } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        xs = t && t[1] || ""
    }
    return `
` + xs + e
}
var Cs = !1;

function Ts(e, t) {
    if (!e || Cs) return "";
    Cs = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() { throw Error() }, Object.defineProperty(t.prototype, "props", { set: function() { throw Error() } }), typeof Reflect == "object" && Reflect.construct) {
                try { Reflect.construct(t, []) } catch (c) { var n = c }
                Reflect.construct(e, [], t)
            } else {
                try { t.call() } catch (c) { n = c }
                e.call(t.prototype)
            }
        else {
            try { throw Error() } catch (c) { n = c }
            e()
        }
    } catch (c) {
        if (c && n && typeof c.stack == "string") {
            for (var r = c.stack.split(`
`), o = n.stack.split(`
`), s = r.length - 1, l = o.length - 1; 1 <= s && 0 <= l && r[s] !== o[l];) l--;
            for (; 1 <= s && 0 <= l; s--, l--)
                if (r[s] !== o[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--, l--, 0 > l || r[s] !== o[l]) { var u = `
` + r[s].replace(" at new ", " at "); return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u }
                    while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally { Cs = !1, Error.prepareStackTrace = i }
    return (e = e ? e.displayName || e.name : "") ? $n(e) : ""
}

function Jp(e) {
    switch (e.tag) {
        case 5:
            return $n(e.type);
        case 16:
            return $n("Lazy");
        case 13:
            return $n("Suspense");
        case 19:
            return $n("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Ts(e.type, !1), e;
        case 11:
            return e = Ts(e.type.render, !1), e;
        case 1:
            return e = Ts(e.type, !0), e;
        default:
            return ""
    }
}

function pl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Fi:
            return "Fragment";
        case zi:
            return "Portal";
        case dl:
            return "Profiler";
        case wa:
            return "StrictMode";
        case hl:
            return "Suspense";
        case fl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case zd:
            return (e.displayName || "Context") + ".Consumer";
        case Nd:
            return (e._context.displayName || "Context") + ".Provider";
        case ba:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case xa:
            return t = e.displayName || null, t !== null ? t : pl(e.type) || "Memo";
        case jt:
            t = e._payload, e = e._init;
            try { return pl(e(t)) } catch {}
    }
    return null
}

function em(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return pl(t);
        case 8:
            return t === wa ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function ii(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Dd(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio") }

function tm(e) {
    var t = Dd(e) ? "checked" : "value",
        i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        n = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof i != "undefined" && typeof i.get == "function" && typeof i.set == "function") {
        var r = i.get,
            o = i.set;
        return Object.defineProperty(e, t, { configurable: !0, get: function() { return r.call(this) }, set: function(s) { n = "" + s, o.call(this, s) } }), Object.defineProperty(e, t, { enumerable: i.enumerable }), { getValue: function() { return n }, setValue: function(s) { n = "" + s }, stopTracking: function() { e._valueTracker = null, delete e[t] } }
    }
}

function _r(e) { e._valueTracker || (e._valueTracker = tm(e)) }

function Od(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(),
        n = "";
    return e && (n = Dd(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== i ? (t.setValue(e), !0) : !1
}

function uo(e) { if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined") return null; try { return e.activeElement || e.body } catch { return e.body } }

function ml(e, t) { var i = t.checked; return ie({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i != null ? i : e._wrapperState.initialChecked }) }

function zu(e, t) {
    var i = t.defaultValue == null ? "" : t.defaultValue,
        n = t.checked != null ? t.checked : t.defaultChecked;
    i = ii(t.value != null ? t.value : i), e._wrapperState = { initialChecked: n, initialValue: i, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null }
}

function Hd(e, t) { t = t.checked, t != null && ka(e, "checked", t, !1) }

function vl(e, t) {
    Hd(e, t);
    var i = ii(t.value),
        n = t.type;
    if (i != null) n === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
    else if (n === "submit" || n === "reset") { e.removeAttribute("value"); return }
    t.hasOwnProperty("value") ? gl(e, t.type, i) : t.hasOwnProperty("defaultValue") && gl(e, t.type, ii(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Fu(e, t, i) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var n = t.type;
        if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, i || t === e.value || (e.value = t), e.defaultValue = t
    }
    i = e.name, i !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, i !== "" && (e.name = i)
}

function gl(e, t, i) {
    (t !== "number" || uo(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i))
}
var Vn = Array.isArray;

function Yi(e, t, i, n) {
    if (e = e.options, t) { t = {}; for (var r = 0; r < i.length; r++) t["$" + i[r]] = !0; for (i = 0; i < e.length; i++) r = t.hasOwnProperty("$" + e[i].value), e[i].selected !== r && (e[i].selected = r), r && n && (e[i].defaultSelected = !0) } else {
        for (i = "" + ii(i), t = null, r = 0; r < e.length; r++) {
            if (e[r].value === i) { e[r].selected = !0, n && (e[r].defaultSelected = !0); return }
            t !== null || e[r].disabled || (t = e[r])
        }
        t !== null && (t.selected = !0)
    }
}

function yl(e, t) { if (t.dangerouslySetInnerHTML != null) throw Error(C(91)); return ie({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }) }

function Du(e, t) {
    var i = t.value;
    if (i == null) {
        if (i = t.children, t = t.defaultValue, i != null) {
            if (t != null) throw Error(C(92));
            if (Vn(i)) {
                if (1 < i.length) throw Error(C(93));
                i = i[0]
            }
            t = i
        }
        t == null && (t = ""), i = t
    }
    e._wrapperState = { initialValue: ii(i) }
}

function jd(e, t) {
    var i = ii(t.value),
        n = ii(t.defaultValue);
    i != null && (i = "" + i, i !== e.value && (e.value = i), t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)), n != null && (e.defaultValue = "" + n)
}

function Ou(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Wd(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function kl(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? Wd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e }
var Ir, Ud = function(e) { return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, i, n, r) { MSApp.execUnsafeLocalFunction(function() { return e(t, i, n, r) }) } : e }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else { for (Ir = Ir || document.createElement("div"), Ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ir.firstChild; e.firstChild;) e.removeChild(e.firstChild); for (; t.firstChild;) e.appendChild(t.firstChild) }
});

function qn(e, t) {
    if (t) { var i = e.firstChild; if (i && i === e.lastChild && i.nodeType === 3) { i.nodeValue = t; return } }
    e.textContent = t
}
var On = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    im = ["Webkit", "ms", "Moz", "O"];
Object.keys(On).forEach(function(e) { im.forEach(function(t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), On[t] = On[e] }) });

function Qd(e, t, i) { return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || On.hasOwnProperty(e) && On[e] ? ("" + t).trim() : t + "px" }

function Bd(e, t) {
    e = e.style;
    for (var i in t)
        if (t.hasOwnProperty(i)) {
            var n = i.indexOf("--") === 0,
                r = Qd(i, t[i], n);
            i === "float" && (i = "cssFloat"), n ? e.setProperty(i, r) : e[i] = r
        }
}
var nm = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });

function wl(e, t) { if (t) { if (nm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e)); if (t.dangerouslySetInnerHTML != null) { if (t.children != null) throw Error(C(60)); if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61)) } if (t.style != null && typeof t.style != "object") throw Error(C(62)) } }

function bl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var xl = null;

function Ca(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e }
var Cl = null,
    Xi = null,
    qi = null;

function Hu(e) {
    if (e = gr(e)) {
        if (typeof Cl != "function") throw Error(C(280));
        var t = e.stateNode;
        t && (t = Ko(t), Cl(e.stateNode, e.type, t))
    }
}

function Kd(e) { Xi ? qi ? qi.push(e) : qi = [e] : Xi = e }

function Gd() {
    if (Xi) {
        var e = Xi,
            t = qi;
        if (qi = Xi = null, Hu(e), t)
            for (e = 0; e < t.length; e++) Hu(t[e])
    }
}

function Yd(e, t) { return e(t) }

function Xd() {}
var Ss = !1;

function qd(e, t, i) {
    if (Ss) return e(t, i);
    Ss = !0;
    try { return Yd(e, t, i) } finally { Ss = !1, (Xi !== null || qi !== null) && (Xd(), Gd()) }
}

function Zn(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var n = Ko(i);
    if (n === null) return null;
    i = n[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (i && typeof i != "function") throw Error(C(231, t, typeof i));
    return i
}
var Tl = !1;
if ($t) try {
    var Cn = {};
    Object.defineProperty(Cn, "passive", { get: function() { Tl = !0 } }), window.addEventListener("test", Cn, Cn), window.removeEventListener("test", Cn, Cn)
} catch { Tl = !1 }

function rm(e, t, i, n, r, o, s, l, u) { var c = Array.prototype.slice.call(arguments, 3); try { t.apply(i, c) } catch (a) { this.onError(a) } }
var Hn = !1,
    co = null,
    ho = !1,
    Sl = null,
    om = { onError: function(e) { Hn = !0, co = e } };

function sm(e, t, i, n, r, o, s, l, u) { Hn = !1, co = null, rm.apply(om, arguments) }

function lm(e, t, i, n, r, o, s, l, u) {
    if (sm.apply(this, arguments), Hn) {
        if (Hn) {
            var c = co;
            Hn = !1, co = null
        } else throw Error(C(198));
        ho || (ho = !0, Sl = c)
    }
}

function Ei(e) {
    var t = e,
        i = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, (t.flags & 4098) !== 0 && (i = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? i : null
}

function Zd(e) { if (e.tag === 13) { var t = e.memoizedState; if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated } return null }

function ju(e) { if (Ei(e) !== e) throw Error(C(188)) }

function am(e) {
    var t = e.alternate;
    if (!t) { if (t = Ei(e), t === null) throw Error(C(188)); return t !== e ? null : e }
    for (var i = e, n = t;;) {
        var r = i.return;
        if (r === null) break;
        var o = r.alternate;
        if (o === null) { if (n = r.return, n !== null) { i = n; continue } break }
        if (r.child === o.child) {
            for (o = r.child; o;) {
                if (o === i) return ju(r), e;
                if (o === n) return ju(r), t;
                o = o.sibling
            }
            throw Error(C(188))
        }
        if (i.return !== n.return) i = r, n = o;
        else {
            for (var s = !1, l = r.child; l;) {
                if (l === i) { s = !0, i = r, n = o; break }
                if (l === n) { s = !0, n = r, i = o; break }
                l = l.sibling
            }
            if (!s) {
                for (l = o.child; l;) {
                    if (l === i) { s = !0, i = o, n = r; break }
                    if (l === n) { s = !0, n = o, i = r; break }
                    l = l.sibling
                }
                if (!s) throw Error(C(189))
            }
        }
        if (i.alternate !== n) throw Error(C(190))
    }
    if (i.tag !== 3) throw Error(C(188));
    return i.stateNode.current === i ? e : t
}

function Jd(e) { return e = am(e), e !== null ? eh(e) : null }

function eh(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = eh(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var th = Be.unstable_scheduleCallback,
    Wu = Be.unstable_cancelCallback,
    um = Be.unstable_shouldYield,
    cm = Be.unstable_requestPaint,
    se = Be.unstable_now,
    dm = Be.unstable_getCurrentPriorityLevel,
    Ta = Be.unstable_ImmediatePriority,
    ih = Be.unstable_UserBlockingPriority,
    fo = Be.unstable_NormalPriority,
    hm = Be.unstable_LowPriority,
    nh = Be.unstable_IdlePriority,
    Wo = null,
    Tt = null;

function fm(e) { if (Tt && typeof Tt.onCommitFiberRoot == "function") try { Tt.onCommitFiberRoot(Wo, e, void 0, (e.current.flags & 128) === 128) } catch {} }
var dt = Math.clz32 ? Math.clz32 : vm,
    pm = Math.log,
    mm = Math.LN2;

function vm(e) { return e >>>= 0, e === 0 ? 32 : 31 - (pm(e) / mm | 0) | 0 }
var $r = 64,
    Vr = 4194304;

function Nn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function po(e, t) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var n = 0,
        r = e.suspendedLanes,
        o = e.pingedLanes,
        s = i & 268435455;
    if (s !== 0) {
        var l = s & ~r;
        l !== 0 ? n = Nn(l) : (o &= s, o !== 0 && (n = Nn(o)))
    } else s = i & ~r, s !== 0 ? n = Nn(s) : o !== 0 && (n = Nn(o));
    if (n === 0) return 0;
    if (t !== 0 && t !== n && (t & r) === 0 && (r = n & -n, o = t & -t, r >= o || r === 16 && (o & 4194240) !== 0)) return t;
    if ((n & 4) !== 0 && (n |= i & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= n; 0 < t;) i = 31 - dt(t), r = 1 << i, n |= e[i], t &= ~r;
    return n
}

function gm(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function ym(e, t) {
    for (var i = e.suspendedLanes, n = e.pingedLanes, r = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var s = 31 - dt(o),
            l = 1 << s,
            u = r[s];
        u === -1 ? ((l & i) === 0 || (l & n) !== 0) && (r[s] = gm(l, t)) : u <= t && (e.expiredLanes |= l), o &= ~l
    }
}

function El(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0 }

function rh() { var e = $r; return $r <<= 1, ($r & 4194240) === 0 && ($r = 64), e }

function Es(e) { for (var t = [], i = 0; 31 > i; i++) t.push(e); return t }

function mr(e, t, i) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - dt(t), e[t] = i }

function km(e, t) {
    var i = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < i;) {
        var r = 31 - dt(i),
            o = 1 << r;
        t[r] = 0, n[r] = -1, e[r] = -1, i &= ~o
    }
}

function Sa(e, t) {
    var i = e.entangledLanes |= t;
    for (e = e.entanglements; i;) {
        var n = 31 - dt(i),
            r = 1 << n;
        r & t | e[n] & t && (e[n] |= t), i &= ~r
    }
}
var Q = 0;

function oh(e) { return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1 }
var sh, Ea, lh, ah, uh, Pl = !1,
    Nr = [],
    Gt = null,
    Yt = null,
    Xt = null,
    Jn = new Map,
    er = new Map,
    Ut = [],
    wm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Uu(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Gt = null;
            break;
        case "dragenter":
        case "dragleave":
            Yt = null;
            break;
        case "mouseover":
        case "mouseout":
            Xt = null;
            break;
        case "pointerover":
        case "pointerout":
            Jn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            er.delete(t.pointerId)
    }
}

function Tn(e, t, i, n, r, o) { return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: i, eventSystemFlags: n, nativeEvent: o, targetContainers: [r] }, t !== null && (t = gr(t), t !== null && Ea(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, r !== null && t.indexOf(r) === -1 && t.push(r), e) }

function bm(e, t, i, n, r) {
    switch (t) {
        case "focusin":
            return Gt = Tn(Gt, e, t, i, n, r), !0;
        case "dragenter":
            return Yt = Tn(Yt, e, t, i, n, r), !0;
        case "mouseover":
            return Xt = Tn(Xt, e, t, i, n, r), !0;
        case "pointerover":
            var o = r.pointerId;
            return Jn.set(o, Tn(Jn.get(o) || null, e, t, i, n, r)), !0;
        case "gotpointercapture":
            return o = r.pointerId, er.set(o, Tn(er.get(o) || null, e, t, i, n, r)), !0
    }
    return !1
}

function ch(e) {
    var t = fi(e.target);
    if (t !== null) { var i = Ei(t); if (i !== null) { if (t = i.tag, t === 13) { if (t = Zd(i), t !== null) { e.blockedOn = t, uh(e.priority, function() { lh(i) }); return } } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) { e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null; return } } }
    e.blockedOn = null
}

function Zr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var i = Al(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (i === null) {
            i = e.nativeEvent;
            var n = new i.constructor(i.type, i);
            xl = n, i.target.dispatchEvent(n), xl = null
        } else return t = gr(i), t !== null && Ea(t), e.blockedOn = i, !1;
        t.shift()
    }
    return !0
}

function Qu(e, t, i) { Zr(e) && i.delete(t) }

function xm() { Pl = !1, Gt !== null && Zr(Gt) && (Gt = null), Yt !== null && Zr(Yt) && (Yt = null), Xt !== null && Zr(Xt) && (Xt = null), Jn.forEach(Qu), er.forEach(Qu) }

function Sn(e, t) { e.blockedOn === t && (e.blockedOn = null, Pl || (Pl = !0, Be.unstable_scheduleCallback(Be.unstable_NormalPriority, xm))) }

function tr(e) {
    function t(r) { return Sn(r, e) }
    if (0 < Nr.length) {
        Sn(Nr[0], e);
        for (var i = 1; i < Nr.length; i++) {
            var n = Nr[i];
            n.blockedOn === e && (n.blockedOn = null)
        }
    }
    for (Gt !== null && Sn(Gt, e), Yt !== null && Sn(Yt, e), Xt !== null && Sn(Xt, e), Jn.forEach(t), er.forEach(t), i = 0; i < Ut.length; i++) n = Ut[i], n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < Ut.length && (i = Ut[0], i.blockedOn === null);) ch(i), i.blockedOn === null && Ut.shift()
}
var Zi = Dt.ReactCurrentBatchConfig,
    mo = !0;

function Cm(e, t, i, n) {
    var r = Q,
        o = Zi.transition;
    Zi.transition = null;
    try { Q = 1, Pa(e, t, i, n) } finally { Q = r, Zi.transition = o }
}

function Tm(e, t, i, n) {
    var r = Q,
        o = Zi.transition;
    Zi.transition = null;
    try { Q = 4, Pa(e, t, i, n) } finally { Q = r, Zi.transition = o }
}

function Pa(e, t, i, n) {
    if (mo) {
        var r = Al(e, t, i, n);
        if (r === null) Ns(e, t, n, vo, i), Uu(e, n);
        else if (bm(r, e, t, i, n)) n.stopPropagation();
        else if (Uu(e, n), t & 4 && -1 < wm.indexOf(e)) {
            for (; r !== null;) {
                var o = gr(r);
                if (o !== null && sh(o), o = Al(e, t, i, n), o === null && Ns(e, t, n, vo, i), o === r) break;
                r = o
            }
            r !== null && n.stopPropagation()
        } else Ns(e, t, n, null, i)
    }
}
var vo = null;

function Al(e, t, i, n) {
    if (vo = null, e = Ca(n), e = fi(e), e !== null)
        if (t = Ei(e), t === null) e = null;
        else if (i = t.tag, i === 13) {
        if (e = Zd(t), e !== null) return e;
        e = null
    } else if (i === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return vo = e, null
}

function dh(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (dm()) {
                case Ta:
                    return 1;
                case ih:
                    return 4;
                case fo:
                case hm:
                    return 16;
                case nh:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Bt = null,
    Aa = null,
    Jr = null;

function hh() {
    if (Jr) return Jr;
    var e, t = Aa,
        i = t.length,
        n, r = "value" in Bt ? Bt.value : Bt.textContent,
        o = r.length;
    for (e = 0; e < i && t[e] === r[e]; e++);
    var s = i - e;
    for (n = 1; n <= s && t[i - n] === r[o - n]; n++);
    return Jr = r.slice(e, 1 < n ? 1 - n : void 0)
}

function eo(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0 }

function zr() { return !0 }

function Bu() { return !1 }

function Ye(e) {
    function t(i, n, r, o, s) { this._reactName = i, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = s, this.currentTarget = null; for (var l in e) e.hasOwnProperty(l) && (i = e[l], this[l] = i ? i(o) : o[l]); return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? zr : Bu, this.isPropagationStopped = Bu, this }
    return ie(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var i = this.nativeEvent;
            i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = zr)
        },
        stopPropagation: function() {
            var i = this.nativeEvent;
            i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = zr)
        },
        persist: function() {},
        isPersistent: zr
    }), t
}
var fn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) { return e.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 },
    La = Ye(fn),
    vr = ie({}, fn, { view: 0, detail: 0 }),
    Sm = Ye(vr),
    Ps, As, En, Uo = ie({}, vr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ra, button: 0, buttons: 0, relatedTarget: function(e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget }, movementX: function(e) { return "movementX" in e ? e.movementX : (e !== En && (En && e.type === "mousemove" ? (Ps = e.screenX - En.screenX, As = e.screenY - En.screenY) : As = Ps = 0, En = e), Ps) }, movementY: function(e) { return "movementY" in e ? e.movementY : As } }),
    Ku = Ye(Uo),
    Em = ie({}, Uo, { dataTransfer: 0 }),
    Pm = Ye(Em),
    Am = ie({}, vr, { relatedTarget: 0 }),
    Ls = Ye(Am),
    Lm = ie({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Rm = Ye(Lm),
    Mm = ie({}, fn, { clipboardData: function(e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } }),
    _m = Ye(Mm),
    Im = ie({}, fn, { data: 0 }),
    Gu = Ye(Im),
    $m = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    Vm = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
    Nm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

function zm(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = Nm[e]) ? !!t[e] : !1 }

function Ra() { return zm }
var Fm = ie({}, vr, { key: function(e) { if (e.key) { var t = $m[e.key] || e.key; if (t !== "Unidentified") return t } return e.type === "keypress" ? (e = eo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vm[e.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ra, charCode: function(e) { return e.type === "keypress" ? eo(e) : 0 }, keyCode: function(e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 }, which: function(e) { return e.type === "keypress" ? eo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 } }),
    Dm = Ye(Fm),
    Om = ie({}, Uo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    Yu = Ye(Om),
    Hm = ie({}, vr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ra }),
    jm = Ye(Hm),
    Wm = ie({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Um = Ye(Wm),
    Qm = ie({}, Uo, { deltaX: function(e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function(e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }),
    Bm = Ye(Qm),
    Km = [9, 13, 27, 32],
    Ma = $t && "CompositionEvent" in window,
    jn = null;
$t && "documentMode" in document && (jn = document.documentMode);
var Gm = $t && "TextEvent" in window && !jn,
    fh = $t && (!Ma || jn && 8 < jn && 11 >= jn),
    Xu = String.fromCharCode(32),
    qu = !1;

function ph(e, t) {
    switch (e) {
        case "keyup":
            return Km.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function mh(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null }
var Di = !1;

function Ym(e, t) {
    switch (e) {
        case "compositionend":
            return mh(t);
        case "keypress":
            return t.which !== 32 ? null : (qu = !0, Xu);
        case "textInput":
            return e = t.data, e === Xu && qu ? null : e;
        default:
            return null
    }
}

function Xm(e, t) {
    if (Di) return e === "compositionend" || !Ma && ph(e, t) ? (e = hh(), Jr = Aa = Bt = null, Di = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) { if (t.char && 1 < t.char.length) return t.char; if (t.which) return String.fromCharCode(t.which) }
            return null;
        case "compositionend":
            return fh && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var qm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

function Zu(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!qm[e.type] : t === "textarea" }

function vh(e, t, i, n) { Kd(n), t = go(t, "onChange"), 0 < t.length && (i = new La("onChange", "change", null, i, n), e.push({ event: i, listeners: t })) }
var Wn = null,
    ir = null;

function Zm(e) { Ph(e, 0) }

function Qo(e) { var t = ji(e); if (Od(t)) return e }

function Jm(e, t) { if (e === "change") return t }
var gh = !1;
if ($t) {
    var Rs;
    if ($t) {
        var Ms = "oninput" in document;
        if (!Ms) {
            var Ju = document.createElement("div");
            Ju.setAttribute("oninput", "return;"), Ms = typeof Ju.oninput == "function"
        }
        Rs = Ms
    } else Rs = !1;
    gh = Rs && (!document.documentMode || 9 < document.documentMode)
}

function ec() { Wn && (Wn.detachEvent("onpropertychange", yh), ir = Wn = null) }

function yh(e) {
    if (e.propertyName === "value" && Qo(ir)) {
        var t = [];
        vh(t, ir, e, Ca(e)), qd(Zm, t)
    }
}

function ev(e, t, i) { e === "focusin" ? (ec(), Wn = t, ir = i, Wn.attachEvent("onpropertychange", yh)) : e === "focusout" && ec() }

function tv(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown") return Qo(ir) }

function iv(e, t) { if (e === "click") return Qo(t) }

function nv(e, t) { if (e === "input" || e === "change") return Qo(t) }

function rv(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t }
var pt = typeof Object.is == "function" ? Object.is : rv;

function nr(e, t) {
    if (pt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var i = Object.keys(e),
        n = Object.keys(t);
    if (i.length !== n.length) return !1;
    for (n = 0; n < i.length; n++) { var r = i[n]; if (!cl.call(t, r) || !pt(e[r], t[r])) return !1 }
    return !0
}

function tc(e) { for (; e && e.firstChild;) e = e.firstChild; return e }

function ic(e, t) {
    var i = tc(e);
    e = 0;
    for (var n; i;) {
        if (i.nodeType === 3) {
            if (n = e + i.textContent.length, e <= t && n >= t) return { node: i, offset: t - e };
            e = n
        }
        e: {
            for (; i;) {
                if (i.nextSibling) { i = i.nextSibling; break e }
                i = i.parentNode
            }
            i = void 0
        }
        i = tc(i)
    }
}

function kh(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? kh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1 }

function wh() {
    for (var e = window, t = uo(); t instanceof e.HTMLIFrameElement;) {
        try { var i = typeof t.contentWindow.location.href == "string" } catch { i = !1 }
        if (i) e = t.contentWindow;
        else break;
        t = uo(e.document)
    }
    return t
}

function _a(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true") }

function ov(e) {
    var t = wh(),
        i = e.focusedElem,
        n = e.selectionRange;
    if (t !== i && i && i.ownerDocument && kh(i.ownerDocument.documentElement, i)) {
        if (n !== null && _a(i)) {
            if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in i) i.selectionStart = t, i.selectionEnd = Math.min(e, i.value.length);
            else if (e = (t = i.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var r = i.textContent.length,
                    o = Math.min(n.start, r);
                n = n.end === void 0 ? o : Math.min(n.end, r), !e.extend && o > n && (r = n, n = o, o = r), r = ic(i, o);
                var s = ic(i, n);
                r && s && (e.rangeCount !== 1 || e.anchorNode !== r.node || e.anchorOffset !== r.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(r.node, r.offset), e.removeAllRanges(), o > n ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = i; e = e.parentNode;) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++) e = t[i], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var sv = $t && "documentMode" in document && 11 >= document.documentMode,
    Oi = null,
    Ll = null,
    Un = null,
    Rl = !1;

function nc(e, t, i) {
    var n = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Rl || Oi == null || Oi !== uo(n) || (n = Oi, "selectionStart" in n && _a(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Un && nr(Un, n) || (Un = n, n = go(Ll, "onSelect"), 0 < n.length && (t = new La("onSelect", "select", null, t, i), e.push({ event: t, listeners: n }), t.target = Oi)))
}

function Fr(e, t) { var i = {}; return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i }
var Hi = { animationend: Fr("Animation", "AnimationEnd"), animationiteration: Fr("Animation", "AnimationIteration"), animationstart: Fr("Animation", "AnimationStart"), transitionend: Fr("Transition", "TransitionEnd") },
    _s = {},
    bh = {};
$t && (bh = document.createElement("div").style, "AnimationEvent" in window || (delete Hi.animationend.animation, delete Hi.animationiteration.animation, delete Hi.animationstart.animation), "TransitionEvent" in window || delete Hi.transitionend.transition);

function Bo(e) {
    if (_s[e]) return _s[e];
    if (!Hi[e]) return e;
    var t = Hi[e],
        i;
    for (i in t)
        if (t.hasOwnProperty(i) && i in bh) return _s[e] = t[i];
    return e
}
var xh = Bo("animationend"),
    Ch = Bo("animationiteration"),
    Th = Bo("animationstart"),
    Sh = Bo("transitionend"),
    Eh = new Map,
    rc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function ri(e, t) { Eh.set(e, t), Si(t, [e]) }
for (var Is = 0; Is < rc.length; Is++) {
    var $s = rc[Is],
        lv = $s.toLowerCase(),
        av = $s[0].toUpperCase() + $s.slice(1);
    ri(lv, "on" + av)
}
ri(xh, "onAnimationEnd");
ri(Ch, "onAnimationIteration");
ri(Th, "onAnimationStart");
ri("dblclick", "onDoubleClick");
ri("focusin", "onFocus");
ri("focusout", "onBlur");
ri(Sh, "onTransitionEnd");
on("onMouseEnter", ["mouseout", "mouseover"]);
on("onMouseLeave", ["mouseout", "mouseover"]);
on("onPointerEnter", ["pointerout", "pointerover"]);
on("onPointerLeave", ["pointerout", "pointerover"]);
Si("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Si("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Si("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Si("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Si("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Si("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    uv = new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));

function oc(e, t, i) {
    var n = e.type || "unknown-event";
    e.currentTarget = i, lm(n, t, void 0, e), e.currentTarget = null
}

function Ph(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
        var n = e[i],
            r = n.event;
        n = n.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = n.length - 1; 0 <= s; s--) {
                    var l = n[s],
                        u = l.instance,
                        c = l.currentTarget;
                    if (l = l.listener, u !== o && r.isPropagationStopped()) break e;
                    oc(r, l, c), o = u
                } else
                    for (s = 0; s < n.length; s++) {
                        if (l = n[s], u = l.instance, c = l.currentTarget, l = l.listener, u !== o && r.isPropagationStopped()) break e;
                        oc(r, l, c), o = u
                    }
        }
    }
    if (ho) throw e = Sl, ho = !1, Sl = null, e
}

function G(e, t) {
    var i = t[Vl];
    i === void 0 && (i = t[Vl] = new Set);
    var n = e + "__bubble";
    i.has(n) || (Ah(t, e, 2, !1), i.add(n))
}

function Vs(e, t, i) {
    var n = 0;
    t && (n |= 4), Ah(i, e, n, t)
}
var Dr = "_reactListening" + Math.random().toString(36).slice(2);

function rr(e) {
    if (!e[Dr]) {
        e[Dr] = !0, Vd.forEach(function(i) { i !== "selectionchange" && (uv.has(i) || Vs(i, !1, e), Vs(i, !0, e)) });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Dr] || (t[Dr] = !0, Vs("selectionchange", !1, t))
    }
}

function Ah(e, t, i, n) {
    switch (dh(t)) {
        case 1:
            var r = Cm;
            break;
        case 4:
            r = Tm;
            break;
        default:
            r = Pa
    }
    i = r.bind(null, t, i, e), r = void 0, !Tl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0), n ? r !== void 0 ? e.addEventListener(t, i, { capture: !0, passive: r }) : e.addEventListener(t, i, !0) : r !== void 0 ? e.addEventListener(t, i, { passive: r }) : e.addEventListener(t, i, !1)
}

function Ns(e, t, i, n, r) {
    var o = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null) e: for (;;) {
        if (n === null) return;
        var s = n.tag;
        if (s === 3 || s === 4) {
            var l = n.stateNode.containerInfo;
            if (l === r || l.nodeType === 8 && l.parentNode === r) break;
            if (s === 4)
                for (s = n.return; s !== null;) {
                    var u = s.tag;
                    if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo, u === r || u.nodeType === 8 && u.parentNode === r)) return;
                    s = s.return
                }
            for (; l !== null;) {
                if (s = fi(l), s === null) return;
                if (u = s.tag, u === 5 || u === 6) { n = o = s; continue e }
                l = l.parentNode
            }
        }
        n = n.return
    }
    qd(function() {
        var c = o,
            a = Ca(i),
            d = [];
        e: {
            var p = Eh.get(e);
            if (p !== void 0) {
                var k = La,
                    b = e;
                switch (e) {
                    case "keypress":
                        if (eo(i) === 0) break e;
                    case "keydown":
                    case "keyup":
                        k = Dm;
                        break;
                    case "focusin":
                        b = "focus", k = Ls;
                        break;
                    case "focusout":
                        b = "blur", k = Ls;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        k = Ls;
                        break;
                    case "click":
                        if (i.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        k = Ku;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        k = Pm;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        k = jm;
                        break;
                    case xh:
                    case Ch:
                    case Th:
                        k = Rm;
                        break;
                    case Sh:
                        k = Um;
                        break;
                    case "scroll":
                        k = Sm;
                        break;
                    case "wheel":
                        k = Bm;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        k = _m;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        k = Yu
                }
                var w = (t & 4) !== 0,
                    z = !w && e === "scroll",
                    f = w ? p !== null ? p + "Capture" : null : p;
                w = [];
                for (var h = c, v; h !== null;) {
                    v = h;
                    var x = v.stateNode;
                    if (v.tag === 5 && x !== null && (v = x, f !== null && (x = Zn(h, f), x != null && w.push(or(h, x, v)))), z) break;
                    h = h.return
                }
                0 < w.length && (p = new k(p, b, null, i, a), d.push({ event: p, listeners: w }))
            }
        }
        if ((t & 7) === 0) {
            e: {
                if (p = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", p && i !== xl && (b = i.relatedTarget || i.fromElement) && (fi(b) || b[Vt])) break e;
                if ((k || p) && (p = a.window === a ? a : (p = a.ownerDocument) ? p.defaultView || p.parentWindow : window, k ? (b = i.relatedTarget || i.toElement, k = c, b = b ? fi(b) : null, b !== null && (z = Ei(b), b !== z || b.tag !== 5 && b.tag !== 6) && (b = null)) : (k = null, b = c), k !== b)) {
                    if (w = Ku, x = "onMouseLeave", f = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (w = Yu, x = "onPointerLeave", f = "onPointerEnter", h = "pointer"), z = k == null ? p : ji(k), v = b == null ? p : ji(b), p = new w(x, h + "leave", k, i, a), p.target = z, p.relatedTarget = v, x = null, fi(a) === c && (w = new w(f, h + "enter", b, i, a), w.target = v, w.relatedTarget = z, x = w), z = x, k && b) t: {
                        for (w = k, f = b, h = 0, v = w; v; v = _i(v)) h++;
                        for (v = 0, x = f; x; x = _i(x)) v++;
                        for (; 0 < h - v;) w = _i(w),
                        h--;
                        for (; 0 < v - h;) f = _i(f),
                        v--;
                        for (; h--;) {
                            if (w === f || f !== null && w === f.alternate) break t;
                            w = _i(w), f = _i(f)
                        }
                        w = null
                    }
                    else w = null;
                    k !== null && sc(d, p, k, w, !1), b !== null && z !== null && sc(d, z, b, w, !0)
                }
            }
            e: {
                if (p = c ? ji(c) : window, k = p.nodeName && p.nodeName.toLowerCase(), k === "select" || k === "input" && p.type === "file") var P = Jm;
                else if (Zu(p))
                    if (gh) P = nv;
                    else { P = tv; var L = ev }
                else(k = p.nodeName) && k.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (P = iv);
                if (P && (P = P(e, c))) { vh(d, P, i, a); break e }
                L && L(e, p, c),
                e === "focusout" && (L = p._wrapperState) && L.controlled && p.type === "number" && gl(p, "number", p.value)
            }
            switch (L = c ? ji(c) : window, e) {
                case "focusin":
                    (Zu(L) || L.contentEditable === "true") && (Oi = L, Ll = c, Un = null);
                    break;
                case "focusout":
                    Un = Ll = Oi = null;
                    break;
                case "mousedown":
                    Rl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Rl = !1, nc(d, i, a);
                    break;
                case "selectionchange":
                    if (sv) break;
                case "keydown":
                case "keyup":
                    nc(d, i, a)
            }
            var R;
            if (Ma) e: {
                switch (e) {
                    case "compositionstart":
                        var _ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        _ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        _ = "onCompositionUpdate";
                        break e
                }
                _ = void 0
            }
            else Di ? ph(e, i) && (_ = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (_ = "onCompositionStart");_ && (fh && i.locale !== "ko" && (Di || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Di && (R = hh()) : (Bt = a, Aa = "value" in Bt ? Bt.value : Bt.textContent, Di = !0)), L = go(c, _), 0 < L.length && (_ = new Gu(_, e, null, i, a), d.push({ event: _, listeners: L }), R ? _.data = R : (R = mh(i), R !== null && (_.data = R)))),
            (R = Gm ? Ym(e, i) : Xm(e, i)) && (c = go(c, "onBeforeInput"), 0 < c.length && (a = new Gu("onBeforeInput", "beforeinput", null, i, a), d.push({ event: a, listeners: c }), a.data = R))
        }
        Ph(d, t)
    })
}

function or(e, t, i) { return { instance: e, listener: t, currentTarget: i } }

function go(e, t) {
    for (var i = t + "Capture", n = []; e !== null;) {
        var r = e,
            o = r.stateNode;
        r.tag === 5 && o !== null && (r = o, o = Zn(e, i), o != null && n.unshift(or(e, o, r)), o = Zn(e, t), o != null && n.push(or(e, o, r))), e = e.return
    }
    return n
}

function _i(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function sc(e, t, i, n, r) {
    for (var o = t._reactName, s = []; i !== null && i !== n;) {
        var l = i,
            u = l.alternate,
            c = l.stateNode;
        if (u !== null && u === n) break;
        l.tag === 5 && c !== null && (l = c, r ? (u = Zn(i, o), u != null && s.unshift(or(i, u, l))) : r || (u = Zn(i, o), u != null && s.push(or(i, u, l)))), i = i.return
    }
    s.length !== 0 && e.push({ event: t, listeners: s })
}
var cv = /\r\n?/g,
    dv = /\u0000|\uFFFD/g;

function lc(e) { return (typeof e == "string" ? e : "" + e).replace(cv, `
`).replace(dv, "") }

function Or(e, t, i) { if (t = lc(t), lc(e) !== t && i) throw Error(C(425)) }

function yo() {}
var Ml = null,
    _l = null;

function Il(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null }
var $l = typeof setTimeout == "function" ? setTimeout : void 0,
    hv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ac = typeof Promise == "function" ? Promise : void 0,
    fv = typeof queueMicrotask == "function" ? queueMicrotask : typeof ac != "undefined" ? function(e) { return ac.resolve(null).then(e).catch(pv) } : $l;

function pv(e) { setTimeout(function() { throw e }) }

function zs(e, t) {
    var i = t,
        n = 0;
    do {
        var r = i.nextSibling;
        if (e.removeChild(i), r && r.nodeType === 8)
            if (i = r.data, i === "/$") {
                if (n === 0) { e.removeChild(r), tr(t); return }
                n--
            } else i !== "$" && i !== "$?" && i !== "$!" || n++;
        i = r
    } while (i);
    tr(t)
}

function qt(e) { for (; e != null; e = e.nextSibling) { var t = e.nodeType; if (t === 1 || t === 3) break; if (t === 8) { if (t = e.data, t === "$" || t === "$!" || t === "$?") break; if (t === "/$") return null } } return e }

function uc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var i = e.data;
            if (i === "$" || i === "$!" || i === "$?") {
                if (t === 0) return e;
                t--
            } else i === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var pn = Math.random().toString(36).slice(2),
    xt = "__reactFiber$" + pn,
    sr = "__reactProps$" + pn,
    Vt = "__reactContainer$" + pn,
    Vl = "__reactEvents$" + pn,
    mv = "__reactListeners$" + pn,
    vv = "__reactHandles$" + pn;

function fi(e) {
    var t = e[xt];
    if (t) return t;
    for (var i = e.parentNode; i;) {
        if (t = i[Vt] || i[xt]) {
            if (i = t.alternate, t.child !== null || i !== null && i.child !== null)
                for (e = uc(e); e !== null;) {
                    if (i = e[xt]) return i;
                    e = uc(e)
                }
            return t
        }
        e = i, i = e.parentNode
    }
    return null
}

function gr(e) { return e = e[xt] || e[Vt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e }

function ji(e) { if (e.tag === 5 || e.tag === 6) return e.stateNode; throw Error(C(33)) }

function Ko(e) { return e[sr] || null }
var Nl = [],
    Wi = -1;

function oi(e) { return { current: e } }

function Y(e) { 0 > Wi || (e.current = Nl[Wi], Nl[Wi] = null, Wi--) }

function K(e, t) { Wi++, Nl[Wi] = e.current, e.current = t }
var ni = {},
    be = oi(ni),
    Ve = oi(!1),
    ki = ni;

function sn(e, t) {
    var i = e.type.contextTypes;
    if (!i) return ni;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
    var r = {},
        o;
    for (o in i) r[o] = t[o];
    return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = r), r
}

function Ne(e) { return e = e.childContextTypes, e != null }

function ko() { Y(Ve), Y(be) }

function cc(e, t, i) {
    if (be.current !== ni) throw Error(C(168));
    K(be, t), K(Ve, i)
}

function Lh(e, t, i) {
    var n = e.stateNode;
    if (t = t.childContextTypes, typeof n.getChildContext != "function") return i;
    n = n.getChildContext();
    for (var r in n)
        if (!(r in t)) throw Error(C(108, em(e) || "Unknown", r));
    return ie({}, i, n)
}

function wo(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ni, ki = be.current, K(be, e), K(Ve, Ve.current), !0 }

function dc(e, t, i) {
    var n = e.stateNode;
    if (!n) throw Error(C(169));
    i ? (e = Lh(e, t, ki), n.__reactInternalMemoizedMergedChildContext = e, Y(Ve), Y(be), K(be, e)) : Y(Ve), K(Ve, i)
}
var Lt = null,
    Go = !1,
    Fs = !1;

function Rh(e) { Lt === null ? Lt = [e] : Lt.push(e) }

function gv(e) { Go = !0, Rh(e) }

function si() {
    if (!Fs && Lt !== null) {
        Fs = !0;
        var e = 0,
            t = Q;
        try {
            var i = Lt;
            for (Q = 1; e < i.length; e++) {
                var n = i[e];
                do n = n(!0); while (n !== null)
            }
            Lt = null, Go = !1
        } catch (r) { throw Lt !== null && (Lt = Lt.slice(e + 1)), th(Ta, si), r } finally { Q = t, Fs = !1 }
    }
    return null
}
var Ui = [],
    Qi = 0,
    bo = null,
    xo = 0,
    qe = [],
    Ze = 0,
    wi = null,
    Rt = 1,
    Mt = "";

function di(e, t) { Ui[Qi++] = xo, Ui[Qi++] = bo, bo = e, xo = t }

function Mh(e, t, i) {
    qe[Ze++] = Rt, qe[Ze++] = Mt, qe[Ze++] = wi, wi = e;
    var n = Rt;
    e = Mt;
    var r = 32 - dt(n) - 1;
    n &= ~(1 << r), i += 1;
    var o = 32 - dt(t) + r;
    if (30 < o) {
        var s = r - r % 5;
        o = (n & (1 << s) - 1).toString(32), n >>= s, r -= s, Rt = 1 << 32 - dt(t) + r | i << r | n, Mt = o + e
    } else Rt = 1 << o | i << r | n, Mt = e
}

function Ia(e) { e.return !== null && (di(e, 1), Mh(e, 1, 0)) }

function $a(e) { for (; e === bo;) bo = Ui[--Qi], Ui[Qi] = null, xo = Ui[--Qi], Ui[Qi] = null; for (; e === wi;) wi = qe[--Ze], qe[Ze] = null, Mt = qe[--Ze], qe[Ze] = null, Rt = qe[--Ze], qe[Ze] = null }
var Ue = null,
    We = null,
    Z = !1,
    ut = null;

function _h(e, t) {
    var i = Je(5, null, null, 0);
    i.elementType = "DELETED", i.stateNode = t, i.return = e, t = e.deletions, t === null ? (e.deletions = [i], e.flags |= 16) : t.push(i)
}

function hc(e, t) {
    switch (e.tag) {
        case 5:
            var i = e.type;
            return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ue = e, We = qt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ue = e, We = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (i = wi !== null ? { id: Rt, overflow: Mt } : null, e.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }, i = Je(18, null, null, 0), i.stateNode = t, i.return = e, e.child = i, Ue = e, We = null, !0) : !1;
        default:
            return !1
    }
}

function zl(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0 }

function Fl(e) {
    if (Z) {
        var t = We;
        if (t) {
            var i = t;
            if (!hc(e, t)) {
                if (zl(e)) throw Error(C(418));
                t = qt(i.nextSibling);
                var n = Ue;
                t && hc(e, t) ? _h(n, i) : (e.flags = e.flags & -4097 | 2, Z = !1, Ue = e)
            }
        } else {
            if (zl(e)) throw Error(C(418));
            e.flags = e.flags & -4097 | 2, Z = !1, Ue = e
        }
    }
}

function fc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ue = e
}

function Hr(e) {
    if (e !== Ue) return !1;
    if (!Z) return fc(e), Z = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Il(e.type, e.memoizedProps)), t && (t = We)) { if (zl(e)) throw Ih(), Error(C(418)); for (; t;) _h(e, t), t = qt(t.nextSibling) }
    if (fc(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(C(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var i = e.data;
                    if (i === "/$") {
                        if (t === 0) { We = qt(e.nextSibling); break e }
                        t--
                    } else i !== "$" && i !== "$!" && i !== "$?" || t++
                }
                e = e.nextSibling
            }
            We = null
        }
    } else We = Ue ? qt(e.stateNode.nextSibling) : null;
    return !0
}

function Ih() { for (var e = We; e;) e = qt(e.nextSibling) }

function ln() { We = Ue = null, Z = !1 }

function Va(e) { ut === null ? ut = [e] : ut.push(e) }
var yv = Dt.ReactCurrentBatchConfig;

function lt(e, t) { if (e && e.defaultProps) { t = ie({}, t), e = e.defaultProps; for (var i in e) t[i] === void 0 && (t[i] = e[i]); return t } return t }
var Co = oi(null),
    To = null,
    Bi = null,
    Na = null;

function za() { Na = Bi = To = null }

function Fa(e) {
    var t = Co.current;
    Y(Co), e._currentValue = t
}

function Dl(e, t, i) {
    for (; e !== null;) {
        var n = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === i) break;
        e = e.return
    }
}

function Ji(e, t) { To = e, Na = Bi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ie = !0), e.firstContext = null) }

function tt(e) {
    var t = e._currentValue;
    if (Na !== e)
        if (e = { context: e, memoizedValue: t, next: null }, Bi === null) {
            if (To === null) throw Error(C(308));
            Bi = e, To.dependencies = { lanes: 0, firstContext: e }
        } else Bi = Bi.next = e;
    return t
}
var pi = null;

function Da(e) { pi === null ? pi = [e] : pi.push(e) }

function $h(e, t, i, n) { var r = t.interleaved; return r === null ? (i.next = i, Da(t)) : (i.next = r.next, r.next = i), t.interleaved = i, Nt(e, n) }

function Nt(e, t) { e.lanes |= t; var i = e.alternate; for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null;) e.childLanes |= t, i = e.alternate, i !== null && (i.childLanes |= t), i = e, e = e.return; return i.tag === 3 ? i.stateNode : null }
var Wt = !1;

function Oa(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null } }

function Vh(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }) }

function _t(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null } }

function Zt(e, t, i) { var n = e.updateQueue; if (n === null) return null; if (n = n.shared, (j & 2) !== 0) { var r = n.pending; return r === null ? t.next = t : (t.next = r.next, r.next = t), n.pending = t, Nt(e, i) } return r = n.interleaved, r === null ? (t.next = t, Da(n)) : (t.next = r.next, r.next = t), n.interleaved = t, Nt(e, i) }

function to(e, t, i) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194240) !== 0)) {
        var n = t.lanes;
        n &= e.pendingLanes, i |= n, t.lanes = i, Sa(e, i)
    }
}

function pc(e, t) {
    var i = e.updateQueue,
        n = e.alternate;
    if (n !== null && (n = n.updateQueue, i === n)) {
        var r = null,
            o = null;
        if (i = i.firstBaseUpdate, i !== null) {
            do {
                var s = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null };
                o === null ? r = o = s : o = o.next = s, i = i.next
            } while (i !== null);
            o === null ? r = o = t : o = o.next = t
        } else r = o = t;
        i = { baseState: n.baseState, firstBaseUpdate: r, lastBaseUpdate: o, shared: n.shared, effects: n.effects }, e.updateQueue = i;
        return
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t
}

function So(e, t, i, n) {
    var r = e.updateQueue;
    Wt = !1;
    var o = r.firstBaseUpdate,
        s = r.lastBaseUpdate,
        l = r.shared.pending;
    if (l !== null) {
        r.shared.pending = null;
        var u = l,
            c = u.next;
        u.next = null, s === null ? o = c : s.next = c, s = u;
        var a = e.alternate;
        a !== null && (a = a.updateQueue, l = a.lastBaseUpdate, l !== s && (l === null ? a.firstBaseUpdate = c : l.next = c, a.lastBaseUpdate = u))
    }
    if (o !== null) {
        var d = r.baseState;
        s = 0, a = c = u = null, l = o;
        do {
            var p = l.lane,
                k = l.eventTime;
            if ((n & p) === p) {
                a !== null && (a = a.next = { eventTime: k, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
                e: {
                    var b = e,
                        w = l;
                    switch (p = t, k = i, w.tag) {
                        case 1:
                            if (b = w.payload, typeof b == "function") { d = b.call(k, d, p); break e }
                            d = b;
                            break e;
                        case 3:
                            b.flags = b.flags & -65537 | 128;
                        case 0:
                            if (b = w.payload, p = typeof b == "function" ? b.call(k, d, p) : b, p == null) break e;
                            d = ie({}, d, p);
                            break e;
                        case 2:
                            Wt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, p = r.effects, p === null ? r.effects = [l] : p.push(l))
            } else k = { eventTime: k, lane: p, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, a === null ? (c = a = k, u = d) : a = a.next = k, s |= p;
            if (l = l.next, l === null) {
                if (l = r.shared.pending, l === null) break;
                p = l, l = p.next, p.next = null, r.lastBaseUpdate = p, r.shared.pending = null
            }
        } while (1);
        if (a === null && (u = d), r.baseState = u, r.firstBaseUpdate = c, r.lastBaseUpdate = a, t = r.shared.interleaved, t !== null) {
            r = t;
            do s |= r.lane, r = r.next; while (r !== t)
        } else o === null && (r.shared.lanes = 0);
        xi |= s, e.lanes = s, e.memoizedState = d
    }
}

function mc(e, t, i) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var n = e[t],
                r = n.callback;
            if (r !== null) {
                if (n.callback = null, n = i, typeof r != "function") throw Error(C(191, r));
                r.call(n)
            }
        }
}
var Nh = new $d.Component().refs;

function Ol(e, t, i, n) { t = e.memoizedState, i = i(n, t), i = i == null ? t : ie({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i) }
var Yo = {
    isMounted: function(e) { return (e = e._reactInternals) ? Ei(e) === e : !1 },
    enqueueSetState: function(e, t, i) {
        e = e._reactInternals;
        var n = Se(),
            r = ei(e),
            o = _t(n, r);
        o.payload = t, i != null && (o.callback = i), t = Zt(e, o, r), t !== null && (ht(t, e, r, n), to(t, e, r))
    },
    enqueueReplaceState: function(e, t, i) {
        e = e._reactInternals;
        var n = Se(),
            r = ei(e),
            o = _t(n, r);
        o.tag = 1, o.payload = t, i != null && (o.callback = i), t = Zt(e, o, r), t !== null && (ht(t, e, r, n), to(t, e, r))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var i = Se(),
            n = ei(e),
            r = _t(i, n);
        r.tag = 2, t != null && (r.callback = t), t = Zt(e, r, n), t !== null && (ht(t, e, n, i), to(t, e, n))
    }
};

function vc(e, t, i, n, r, o, s) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, o, s) : t.prototype && t.prototype.isPureReactComponent ? !nr(i, n) || !nr(r, o) : !0 }

function zh(e, t, i) {
    var n = !1,
        r = ni,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = tt(o) : (r = Ne(t) ? ki : be.current, n = t.contextTypes, o = (n = n != null) ? sn(e, r) : ni), t = new t(i, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Yo, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = r, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function gc(e, t, i, n) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, n), t.state !== e && Yo.enqueueReplaceState(t, t.state, null) }

function Hl(e, t, i, n) {
    var r = e.stateNode;
    r.props = i, r.state = e.memoizedState, r.refs = Nh, Oa(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? r.context = tt(o) : (o = Ne(t) ? ki : be.current, r.context = sn(e, o)), r.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Ol(e, t, o, i), r.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (t = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), t !== r.state && Yo.enqueueReplaceState(r, r.state, null), So(e, i, r, n), r.state = e.memoizedState), typeof r.componentDidMount == "function" && (e.flags |= 4194308)
}

function Pn(e, t, i) {
    if (e = i.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (i._owner) {
            if (i = i._owner, i) { if (i.tag !== 1) throw Error(C(309)); var n = i.stateNode }
            if (!n) throw Error(C(147, e));
            var r = n,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var l = r.refs;
                l === Nh && (l = r.refs = {}), s === null ? delete l[o] : l[o] = s
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(C(284));
        if (!i._owner) throw Error(C(290, e))
    }
    return e
}

function jr(e, t) { throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)) }

function yc(e) { var t = e._init; return t(e._payload) }

function Fh(e) {
    function t(f, h) {
        if (e) {
            var v = f.deletions;
            v === null ? (f.deletions = [h], f.flags |= 16) : v.push(h)
        }
    }

    function i(f, h) { if (!e) return null; for (; h !== null;) t(f, h), h = h.sibling; return null }

    function n(f, h) { for (f = new Map; h !== null;) h.key !== null ? f.set(h.key, h) : f.set(h.index, h), h = h.sibling; return f }

    function r(f, h) { return f = ti(f, h), f.index = 0, f.sibling = null, f }

    function o(f, h, v) { return f.index = v, e ? (v = f.alternate, v !== null ? (v = v.index, v < h ? (f.flags |= 2, h) : v) : (f.flags |= 2, h)) : (f.flags |= 1048576, h) }

    function s(f) { return e && f.alternate === null && (f.flags |= 2), f }

    function l(f, h, v, x) { return h === null || h.tag !== 6 ? (h = Qs(v, f.mode, x), h.return = f, h) : (h = r(h, v), h.return = f, h) }

    function u(f, h, v, x) { var P = v.type; return P === Fi ? a(f, h, v.props.children, x, v.key) : h !== null && (h.elementType === P || typeof P == "object" && P !== null && P.$$typeof === jt && yc(P) === h.type) ? (x = r(h, v.props), x.ref = Pn(f, h, v), x.return = f, x) : (x = lo(v.type, v.key, v.props, null, f.mode, x), x.ref = Pn(f, h, v), x.return = f, x) }

    function c(f, h, v, x) { return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Bs(v, f.mode, x), h.return = f, h) : (h = r(h, v.children || []), h.return = f, h) }

    function a(f, h, v, x, P) { return h === null || h.tag !== 7 ? (h = yi(v, f.mode, x, P), h.return = f, h) : (h = r(h, v), h.return = f, h) }

    function d(f, h, v) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return h = Qs("" + h, f.mode, v), h.return = f, h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Mr:
                    return v = lo(h.type, h.key, h.props, null, f.mode, v), v.ref = Pn(f, null, h), v.return = f, v;
                case zi:
                    return h = Bs(h, f.mode, v), h.return = f, h;
                case jt:
                    var x = h._init;
                    return d(f, x(h._payload), v)
            }
            if (Vn(h) || xn(h)) return h = yi(h, f.mode, v, null), h.return = f, h;
            jr(f, h)
        }
        return null
    }

    function p(f, h, v, x) {
        var P = h !== null ? h.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number") return P !== null ? null : l(f, h, "" + v, x);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Mr:
                    return v.key === P ? u(f, h, v, x) : null;
                case zi:
                    return v.key === P ? c(f, h, v, x) : null;
                case jt:
                    return P = v._init, p(f, h, P(v._payload), x)
            }
            if (Vn(v) || xn(v)) return P !== null ? null : a(f, h, v, x, null);
            jr(f, v)
        }
        return null
    }

    function k(f, h, v, x, P) {
        if (typeof x == "string" && x !== "" || typeof x == "number") return f = f.get(v) || null, l(h, f, "" + x, P);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case Mr:
                    return f = f.get(x.key === null ? v : x.key) || null, u(h, f, x, P);
                case zi:
                    return f = f.get(x.key === null ? v : x.key) || null, c(h, f, x, P);
                case jt:
                    var L = x._init;
                    return k(f, h, v, L(x._payload), P)
            }
            if (Vn(x) || xn(x)) return f = f.get(v) || null, a(h, f, x, P, null);
            jr(h, x)
        }
        return null
    }

    function b(f, h, v, x) {
        for (var P = null, L = null, R = h, _ = h = 0, re = null; R !== null && _ < v.length; _++) {
            R.index > _ ? (re = R, R = null) : re = R.sibling;
            var H = p(f, R, v[_], x);
            if (H === null) { R === null && (R = re); break }
            e && R && H.alternate === null && t(f, R), h = o(H, h, _), L === null ? P = H : L.sibling = H, L = H, R = re
        }
        if (_ === v.length) return i(f, R), Z && di(f, _), P;
        if (R === null) { for (; _ < v.length; _++) R = d(f, v[_], x), R !== null && (h = o(R, h, _), L === null ? P = R : L.sibling = R, L = R); return Z && di(f, _), P }
        for (R = n(f, R); _ < v.length; _++) re = k(R, f, _, v[_], x), re !== null && (e && re.alternate !== null && R.delete(re.key === null ? _ : re.key), h = o(re, h, _), L === null ? P = re : L.sibling = re, L = re);
        return e && R.forEach(function(nt) { return t(f, nt) }), Z && di(f, _), P
    }

    function w(f, h, v, x) {
        var P = xn(v);
        if (typeof P != "function") throw Error(C(150));
        if (v = P.call(v), v == null) throw Error(C(151));
        for (var L = P = null, R = h, _ = h = 0, re = null, H = v.next(); R !== null && !H.done; _++, H = v.next()) {
            R.index > _ ? (re = R, R = null) : re = R.sibling;
            var nt = p(f, R, H.value, x);
            if (nt === null) { R === null && (R = re); break }
            e && R && nt.alternate === null && t(f, R), h = o(nt, h, _), L === null ? P = nt : L.sibling = nt, L = nt, R = re
        }
        if (H.done) return i(f, R), Z && di(f, _), P;
        if (R === null) { for (; !H.done; _++, H = v.next()) H = d(f, H.value, x), H !== null && (h = o(H, h, _), L === null ? P = H : L.sibling = H, L = H); return Z && di(f, _), P }
        for (R = n(f, R); !H.done; _++, H = v.next()) H = k(R, f, _, H.value, x), H !== null && (e && H.alternate !== null && R.delete(H.key === null ? _ : H.key), h = o(H, h, _), L === null ? P = H : L.sibling = H, L = H);
        return e && R.forEach(function(wn) { return t(f, wn) }), Z && di(f, _), P
    }

    function z(f, h, v, x) {
        if (typeof v == "object" && v !== null && v.type === Fi && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Mr:
                    e: {
                        for (var P = v.key, L = h; L !== null;) {
                            if (L.key === P) {
                                if (P = v.type, P === Fi) { if (L.tag === 7) { i(f, L.sibling), h = r(L, v.props.children), h.return = f, f = h; break e } } else if (L.elementType === P || typeof P == "object" && P !== null && P.$$typeof === jt && yc(P) === L.type) { i(f, L.sibling), h = r(L, v.props), h.ref = Pn(f, L, v), h.return = f, f = h; break e }
                                i(f, L);
                                break
                            } else t(f, L);
                            L = L.sibling
                        }
                        v.type === Fi ? (h = yi(v.props.children, f.mode, x, v.key), h.return = f, f = h) : (x = lo(v.type, v.key, v.props, null, f.mode, x), x.ref = Pn(f, h, v), x.return = f, f = x)
                    }
                    return s(f);
                case zi:
                    e: {
                        for (L = v.key; h !== null;) {
                            if (h.key === L)
                                if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) { i(f, h.sibling), h = r(h, v.children || []), h.return = f, f = h; break e } else { i(f, h); break }
                            else t(f, h);
                            h = h.sibling
                        }
                        h = Bs(v, f.mode, x),
                        h.return = f,
                        f = h
                    }
                    return s(f);
                case jt:
                    return L = v._init, z(f, h, L(v._payload), x)
            }
            if (Vn(v)) return b(f, h, v, x);
            if (xn(v)) return w(f, h, v, x);
            jr(f, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (i(f, h.sibling), h = r(h, v), h.return = f, f = h) : (i(f, h), h = Qs(v, f.mode, x), h.return = f, f = h), s(f)) : i(f, h)
    }
    return z
}
var an = Fh(!0),
    Dh = Fh(!1),
    yr = {},
    St = oi(yr),
    lr = oi(yr),
    ar = oi(yr);

function mi(e) { if (e === yr) throw Error(C(174)); return e }

function Ha(e, t) {
    switch (K(ar, t), K(lr, e), K(St, yr), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : kl(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = kl(t, e)
    }
    Y(St), K(St, t)
}

function un() { Y(St), Y(lr), Y(ar) }

function Oh(e) {
    mi(ar.current);
    var t = mi(St.current),
        i = kl(t, e.type);
    t !== i && (K(lr, e), K(St, i))
}

function ja(e) { lr.current === e && (Y(St), Y(lr)) }
var ee = oi(0);

function Eo(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) { var i = t.memoizedState; if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!")) return t } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) { if ((t.flags & 128) !== 0) return t } else if (t.child !== null) { t.child.return = t, t = t.child; continue }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Ds = [];

function Wa() {
    for (var e = 0; e < Ds.length; e++) Ds[e]._workInProgressVersionPrimary = null;
    Ds.length = 0
}
var io = Dt.ReactCurrentDispatcher,
    Os = Dt.ReactCurrentBatchConfig,
    bi = 0,
    te = null,
    ae = null,
    he = null,
    Po = !1,
    Qn = !1,
    ur = 0,
    kv = 0;

function ye() { throw Error(C(321)) }

function Ua(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++)
        if (!pt(e[i], t[i])) return !1;
    return !0
}

function Qa(e, t, i, n, r, o) {
    if (bi = o, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, io.current = e === null || e.memoizedState === null ? Cv : Tv, e = i(n, r), Qn) {
        o = 0;
        do {
            if (Qn = !1, ur = 0, 25 <= o) throw Error(C(301));
            o += 1, he = ae = null, t.updateQueue = null, io.current = Sv, e = i(n, r)
        } while (Qn)
    }
    if (io.current = Ao, t = ae !== null && ae.next !== null, bi = 0, he = ae = te = null, Po = !1, t) throw Error(C(300));
    return e
}

function Ba() { var e = ur !== 0; return ur = 0, e }

function bt() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return he === null ? te.memoizedState = he = e : he = he.next = e, he }

function it() {
    if (ae === null) {
        var e = te.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ae.next;
    var t = he === null ? te.memoizedState : he.next;
    if (t !== null) he = t, ae = e;
    else {
        if (e === null) throw Error(C(310));
        ae = e, e = { memoizedState: ae.memoizedState, baseState: ae.baseState, baseQueue: ae.baseQueue, queue: ae.queue, next: null }, he === null ? te.memoizedState = he = e : he = he.next = e
    }
    return he
}

function cr(e, t) { return typeof t == "function" ? t(e) : t }

function Hs(e) {
    var t = it(),
        i = t.queue;
    if (i === null) throw Error(C(311));
    i.lastRenderedReducer = e;
    var n = ae,
        r = n.baseQueue,
        o = i.pending;
    if (o !== null) {
        if (r !== null) {
            var s = r.next;
            r.next = o.next, o.next = s
        }
        n.baseQueue = r = o, i.pending = null
    }
    if (r !== null) {
        o = r.next, n = n.baseState;
        var l = s = null,
            u = null,
            c = o;
        do {
            var a = c.lane;
            if ((bi & a) === a) u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), n = c.hasEagerState ? c.eagerState : e(n, c.action);
            else {
                var d = { lane: a, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
                u === null ? (l = u = d, s = n) : u = u.next = d, te.lanes |= a, xi |= a
            }
            c = c.next
        } while (c !== null && c !== o);
        u === null ? s = n : u.next = l, pt(n, t.memoizedState) || (Ie = !0), t.memoizedState = n, t.baseState = s, t.baseQueue = u, i.lastRenderedState = n
    }
    if (e = i.interleaved, e !== null) {
        r = e;
        do o = r.lane, te.lanes |= o, xi |= o, r = r.next; while (r !== e)
    } else r === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch]
}

function js(e) {
    var t = it(),
        i = t.queue;
    if (i === null) throw Error(C(311));
    i.lastRenderedReducer = e;
    var n = i.dispatch,
        r = i.pending,
        o = t.memoizedState;
    if (r !== null) {
        i.pending = null;
        var s = r = r.next;
        do o = e(o, s.action), s = s.next; while (s !== r);
        pt(o, t.memoizedState) || (Ie = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), i.lastRenderedState = o
    }
    return [o, n]
}

function Hh() {}

function jh(e, t) {
    var i = te,
        n = it(),
        r = t(),
        o = !pt(n.memoizedState, r);
    if (o && (n.memoizedState = r, Ie = !0), n = n.queue, Ka(Qh.bind(null, i, n, e), [e]), n.getSnapshot !== t || o || he !== null && he.memoizedState.tag & 1) {
        if (i.flags |= 2048, dr(9, Uh.bind(null, i, n, r, t), void 0, null), fe === null) throw Error(C(349));
        (bi & 30) !== 0 || Wh(i, t, r)
    }
    return r
}

function Wh(e, t, i) { e.flags |= 16384, e = { getSnapshot: t, value: i }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e)) }

function Uh(e, t, i, n) { t.value = i, t.getSnapshot = n, Bh(t) && Kh(e) }

function Qh(e, t, i) { return i(function() { Bh(t) && Kh(e) }) }

function Bh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try { var i = t(); return !pt(e, i) } catch { return !0 }
}

function Kh(e) {
    var t = Nt(e, 1);
    t !== null && ht(t, e, 1, -1)
}

function kc(e) { var t = bt(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: e }, t.queue = e, e = e.dispatch = xv.bind(null, te, e), [t.memoizedState, e] }

function dr(e, t, i, n) { return e = { tag: e, create: t, destroy: i, deps: n, next: null }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.lastEffect = e.next = e) : (i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (n = i.next, i.next = e, e.next = n, t.lastEffect = e)), e }

function Gh() { return it().memoizedState }

function no(e, t, i, n) {
    var r = bt();
    te.flags |= e, r.memoizedState = dr(1 | t, i, void 0, n === void 0 ? null : n)
}

function Xo(e, t, i, n) {
    var r = it();
    n = n === void 0 ? null : n;
    var o = void 0;
    if (ae !== null) { var s = ae.memoizedState; if (o = s.destroy, n !== null && Ua(n, s.deps)) { r.memoizedState = dr(t, i, o, n); return } }
    te.flags |= e, r.memoizedState = dr(1 | t, i, o, n)
}

function wc(e, t) { return no(8390656, 8, e, t) }

function Ka(e, t) { return Xo(2048, 8, e, t) }

function Yh(e, t) { return Xo(4, 2, e, t) }

function Xh(e, t) { return Xo(4, 4, e, t) }

function qh(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() { t(null) };
    if (t != null) return e = e(), t.current = e,
        function() { t.current = null }
}

function Zh(e, t, i) { return i = i != null ? i.concat([e]) : null, Xo(4, 4, qh.bind(null, t, e), i) }

function Ga() {}

function Jh(e, t) {
    var i = it();
    t = t === void 0 ? null : t;
    var n = i.memoizedState;
    return n !== null && t !== null && Ua(t, n[1]) ? n[0] : (i.memoizedState = [e, t], e)
}

function ef(e, t) {
    var i = it();
    t = t === void 0 ? null : t;
    var n = i.memoizedState;
    return n !== null && t !== null && Ua(t, n[1]) ? n[0] : (e = e(), i.memoizedState = [e, t], e)
}

function tf(e, t, i) { return (bi & 21) === 0 ? (e.baseState && (e.baseState = !1, Ie = !0), e.memoizedState = i) : (pt(i, t) || (i = rh(), te.lanes |= i, xi |= i, e.baseState = !0), t) }

function wv(e, t) {
    var i = Q;
    Q = i !== 0 && 4 > i ? i : 4, e(!0);
    var n = Os.transition;
    Os.transition = {};
    try { e(!1), t() } finally { Q = i, Os.transition = n }
}

function nf() { return it().memoizedState }

function bv(e, t, i) {
    var n = ei(e);
    if (i = { lane: n, action: i, hasEagerState: !1, eagerState: null, next: null }, rf(e)) of(t, i);
    else if (i = $h(e, t, i, n), i !== null) {
        var r = Se();
        ht(i, e, n, r), sf(i, t, n)
    }
}

function xv(e, t, i) {
    var n = ei(e),
        r = { lane: n, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (rf(e)) of(t, r);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var s = t.lastRenderedState,
                l = o(s, i);
            if (r.hasEagerState = !0, r.eagerState = l, pt(l, s)) {
                var u = t.interleaved;
                u === null ? (r.next = r, Da(t)) : (r.next = u.next, u.next = r), t.interleaved = r;
                return
            }
        } catch {} finally {}
        i = $h(e, t, r, n), i !== null && (r = Se(), ht(i, e, n, r), sf(i, t, n))
    }
}

function rf(e) { var t = e.alternate; return e === te || t !== null && t === te }

function of(e, t) {
    Qn = Po = !0;
    var i = e.pending;
    i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t
}

function sf(e, t, i) {
    if ((i & 4194240) !== 0) {
        var n = t.lanes;
        n &= e.pendingLanes, i |= n, t.lanes = i, Sa(e, i)
    }
}
var Ao = { readContext: tt, useCallback: ye, useContext: ye, useEffect: ye, useImperativeHandle: ye, useInsertionEffect: ye, useLayoutEffect: ye, useMemo: ye, useReducer: ye, useRef: ye, useState: ye, useDebugValue: ye, useDeferredValue: ye, useTransition: ye, useMutableSource: ye, useSyncExternalStore: ye, useId: ye, unstable_isNewReconciler: !1 },
    Cv = {
        readContext: tt,
        useCallback: function(e, t) { return bt().memoizedState = [e, t === void 0 ? null : t], e },
        useContext: tt,
        useEffect: wc,
        useImperativeHandle: function(e, t, i) { return i = i != null ? i.concat([e]) : null, no(4194308, 4, qh.bind(null, t, e), i) },
        useLayoutEffect: function(e, t) { return no(4194308, 4, e, t) },
        useInsertionEffect: function(e, t) { return no(4, 2, e, t) },
        useMemo: function(e, t) { var i = bt(); return t = t === void 0 ? null : t, e = e(), i.memoizedState = [e, t], e },
        useReducer: function(e, t, i) { var n = bt(); return t = i !== void 0 ? i(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = bv.bind(null, te, e), [n.memoizedState, e] },
        useRef: function(e) { var t = bt(); return e = { current: e }, t.memoizedState = e },
        useState: kc,
        useDebugValue: Ga,
        useDeferredValue: function(e) { return bt().memoizedState = e },
        useTransition: function() {
            var e = kc(!1),
                t = e[0];
            return e = wv.bind(null, e[1]), bt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, i) {
            var n = te,
                r = bt();
            if (Z) {
                if (i === void 0) throw Error(C(407));
                i = i()
            } else {
                if (i = t(), fe === null) throw Error(C(349));
                (bi & 30) !== 0 || Wh(n, t, i)
            }
            r.memoizedState = i;
            var o = { value: i, getSnapshot: t };
            return r.queue = o, wc(Qh.bind(null, n, o, e), [e]), n.flags |= 2048, dr(9, Uh.bind(null, n, o, i, t), void 0, null), i
        },
        useId: function() {
            var e = bt(),
                t = fe.identifierPrefix;
            if (Z) {
                var i = Mt,
                    n = Rt;
                i = (n & ~(1 << 32 - dt(n) - 1)).toString(32) + i, t = ":" + t + "R" + i, i = ur++, 0 < i && (t += "H" + i.toString(32)), t += ":"
            } else i = kv++, t = ":" + t + "r" + i.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Tv = {
        readContext: tt,
        useCallback: Jh,
        useContext: tt,
        useEffect: Ka,
        useImperativeHandle: Zh,
        useInsertionEffect: Yh,
        useLayoutEffect: Xh,
        useMemo: ef,
        useReducer: Hs,
        useRef: Gh,
        useState: function() { return Hs(cr) },
        useDebugValue: Ga,
        useDeferredValue: function(e) { var t = it(); return tf(t, ae.memoizedState, e) },
        useTransition: function() {
            var e = Hs(cr)[0],
                t = it().memoizedState;
            return [e, t]
        },
        useMutableSource: Hh,
        useSyncExternalStore: jh,
        useId: nf,
        unstable_isNewReconciler: !1
    },
    Sv = {
        readContext: tt,
        useCallback: Jh,
        useContext: tt,
        useEffect: Ka,
        useImperativeHandle: Zh,
        useInsertionEffect: Yh,
        useLayoutEffect: Xh,
        useMemo: ef,
        useReducer: js,
        useRef: Gh,
        useState: function() { return js(cr) },
        useDebugValue: Ga,
        useDeferredValue: function(e) { var t = it(); return ae === null ? t.memoizedState = e : tf(t, ae.memoizedState, e) },
        useTransition: function() {
            var e = js(cr)[0],
                t = it().memoizedState;
            return [e, t]
        },
        useMutableSource: Hh,
        useSyncExternalStore: jh,
        useId: nf,
        unstable_isNewReconciler: !1
    };

function cn(e, t) {
    try {
        var i = "",
            n = t;
        do i += Jp(n), n = n.return; while (n);
        var r = i
    } catch (o) { r = `
Error generating stack: ` + o.message + `
` + o.stack }
    return { value: e, source: t, stack: r, digest: null }
}

function Ws(e, t, i) { return { value: e, source: null, stack: i != null ? i : null, digest: t != null ? t : null } }

function jl(e, t) { try { console.error(t.value) } catch (i) { setTimeout(function() { throw i }) } }
var Ev = typeof WeakMap == "function" ? WeakMap : Map;

function lf(e, t, i) { i = _t(-1, i), i.tag = 3, i.payload = { element: null }; var n = t.value; return i.callback = function() { Ro || (Ro = !0, Zl = n), jl(e, t) }, i }

function af(e, t, i) {
    i = _t(-1, i), i.tag = 3;
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
        var r = t.value;
        i.payload = function() { return n(r) }, i.callback = function() { jl(e, t) }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (i.callback = function() {
        jl(e, t), typeof n != "function" && (Jt === null ? Jt = new Set([this]) : Jt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" })
    }), i
}

function bc(e, t, i) {
    var n = e.pingCache;
    if (n === null) {
        n = e.pingCache = new Ev;
        var r = new Set;
        n.set(t, r)
    } else r = n.get(t), r === void 0 && (r = new Set, n.set(t, r));
    r.has(i) || (r.add(i), e = Ov.bind(null, e, t, i), t.then(e, e))
}

function xc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Cc(e, t, i, n, r) { return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = _t(-1, 1), t.tag = 2, Zt(i, t, 1))), i.lanes |= 1), e) : (e.flags |= 65536, e.lanes = r, e) }
var Pv = Dt.ReactCurrentOwner,
    Ie = !1;

function Te(e, t, i, n) { t.child = e === null ? Dh(t, null, i, n) : an(t, e.child, i, n) }

function Tc(e, t, i, n, r) { i = i.render; var o = t.ref; return Ji(t, r), n = Qa(e, t, i, n, o, r), i = Ba(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r, zt(e, t, r)) : (Z && i && Ia(t), t.flags |= 1, Te(e, t, n, r), t.child) }

function Sc(e, t, i, n, r) { if (e === null) { var o = i.type; return typeof o == "function" && !iu(o) && o.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15, t.type = o, uf(e, t, o, n, r)) : (e = lo(i.type, null, n, t, t.mode, r), e.ref = t.ref, e.return = t, t.child = e) } if (o = e.child, (e.lanes & r) === 0) { var s = o.memoizedProps; if (i = i.compare, i = i !== null ? i : nr, i(s, n) && e.ref === t.ref) return zt(e, t, r) } return t.flags |= 1, e = ti(o, n), e.ref = t.ref, e.return = t, t.child = e }

function uf(e, t, i, n, r) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (nr(o, n) && e.ref === t.ref)
            if (Ie = !1, t.pendingProps = n = o, (e.lanes & r) !== 0)(e.flags & 131072) !== 0 && (Ie = !0);
            else return t.lanes = e.lanes, zt(e, t, r)
    }
    return Wl(e, t, i, n, r)
}

function cf(e, t, i) {
    var n = t.pendingProps,
        r = n.children,
        o = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden")
        if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(Gi, He), He |= i;
        else {
            if ((i & 1073741824) === 0) return e = o !== null ? o.baseLanes | i : i, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(Gi, He), He |= e, null;
            t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = o !== null ? o.baseLanes : i, K(Gi, He), He |= n
        }
    else o !== null ? (n = o.baseLanes | i, t.memoizedState = null) : n = i, K(Gi, He), He |= n;
    return Te(e, t, r, i), t.child
}

function df(e, t) {
    var i = t.ref;
    (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512, t.flags |= 2097152)
}

function Wl(e, t, i, n, r) { var o = Ne(i) ? ki : be.current; return o = sn(t, o), Ji(t, r), i = Qa(e, t, i, n, o, r), n = Ba(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r, zt(e, t, r)) : (Z && n && Ia(t), t.flags |= 1, Te(e, t, i, r), t.child) }

function Ec(e, t, i, n, r) {
    if (Ne(i)) {
        var o = !0;
        wo(t)
    } else o = !1;
    if (Ji(t, r), t.stateNode === null) ro(e, t), zh(t, i, n), Hl(t, i, n, r), n = !0;
    else if (e === null) {
        var s = t.stateNode,
            l = t.memoizedProps;
        s.props = l;
        var u = s.context,
            c = i.contextType;
        typeof c == "object" && c !== null ? c = tt(c) : (c = Ne(i) ? ki : be.current, c = sn(t, c));
        var a = i.getDerivedStateFromProps,
            d = typeof a == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== n || u !== c) && gc(t, s, n, c), Wt = !1;
        var p = t.memoizedState;
        s.state = p, So(t, n, s, r), u = t.memoizedState, l !== n || p !== u || Ve.current || Wt ? (typeof a == "function" && (Ol(t, i, a, n), u = t.memoizedState), (l = Wt || vc(t, i, l, n, p, u, c)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = u), s.props = n, s.state = u, s.context = c, n = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), n = !1)
    } else {
        s = t.stateNode, Vh(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : lt(t.type, l), s.props = c, d = t.pendingProps, p = s.context, u = i.contextType, typeof u == "object" && u !== null ? u = tt(u) : (u = Ne(i) ? ki : be.current, u = sn(t, u));
        var k = i.getDerivedStateFromProps;
        (a = typeof k == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== d || p !== u) && gc(t, s, n, u), Wt = !1, p = t.memoizedState, s.state = p, So(t, n, s, r);
        var b = t.memoizedState;
        l !== d || p !== b || Ve.current || Wt ? (typeof k == "function" && (Ol(t, i, k, n), b = t.memoizedState), (c = Wt || vc(t, i, c, n, p, b, u) || !1) ? (a || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(n, b, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(n, b, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = b), s.props = n, s.state = b, s.context = u, n = c) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), n = !1)
    }
    return Ul(e, t, i, n, o, r)
}

function Ul(e, t, i, n, r, o) {
    df(e, t);
    var s = (t.flags & 128) !== 0;
    if (!n && !s) return r && dc(t, i, !1), zt(e, t, o);
    n = t.stateNode, Pv.current = t;
    var l = s && typeof i.getDerivedStateFromError != "function" ? null : n.render();
    return t.flags |= 1, e !== null && s ? (t.child = an(t, e.child, null, o), t.child = an(t, null, l, o)) : Te(e, t, l, o), t.memoizedState = n.state, r && dc(t, i, !0), t.child
}

function hf(e) {
    var t = e.stateNode;
    t.pendingContext ? cc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cc(e, t.context, !1), Ha(e, t.containerInfo)
}

function Pc(e, t, i, n, r) { return ln(), Va(r), t.flags |= 256, Te(e, t, i, n), t.child }
var Ql = { dehydrated: null, treeContext: null, retryLane: 0 };

function Bl(e) { return { baseLanes: e, cachePool: null, transitions: null } }

function ff(e, t, i) {
    var n = t.pendingProps,
        r = ee.current,
        o = !1,
        s = (t.flags & 128) !== 0,
        l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (r |= 1), K(ee, r & 1), e === null) return Fl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (s = n.children, e = n.fallback, o ? (n = t.mode, o = t.child, s = { mode: "hidden", children: s }, (n & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Jo(s, n, 0, null), e = yi(e, n, i, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Bl(i), t.memoizedState = Ql, e) : Ya(t, s));
    if (r = e.memoizedState, r !== null && (l = r.dehydrated, l !== null)) return Av(e, t, s, n, l, r, i);
    if (o) { o = n.fallback, s = t.mode, r = e.child, l = r.sibling; var u = { mode: "hidden", children: n.children }; return (s & 1) === 0 && t.child !== r ? (n = t.child, n.childLanes = 0, n.pendingProps = u, t.deletions = null) : (n = ti(r, u), n.subtreeFlags = r.subtreeFlags & 14680064), l !== null ? o = ti(l, o) : (o = yi(o, s, i, null), o.flags |= 2), o.return = t, n.return = t, n.sibling = o, t.child = n, n = o, o = t.child, s = e.child.memoizedState, s = s === null ? Bl(i) : { baseLanes: s.baseLanes | i, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~i, t.memoizedState = Ql, n }
    return o = e.child, e = o.sibling, n = ti(o, { mode: "visible", children: n.children }), (t.mode & 1) === 0 && (n.lanes = i), n.return = t, n.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = n, t.memoizedState = null, n
}

function Ya(e, t) { return t = Jo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t }

function Wr(e, t, i, n) { return n !== null && Va(n), an(t, e.child, null, i), e = Ya(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e }

function Av(e, t, i, n, r, o, s) {
    if (i) return t.flags & 256 ? (t.flags &= -257, n = Ws(Error(C(422))), Wr(e, t, s, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = n.fallback, r = t.mode, n = Jo({ mode: "visible", children: n.children }, r, 0, null), o = yi(o, r, s, null), o.flags |= 2, n.return = t, o.return = t, n.sibling = o, t.child = n, (t.mode & 1) !== 0 && an(t, e.child, null, s), t.child.memoizedState = Bl(s), t.memoizedState = Ql, o);
    if ((t.mode & 1) === 0) return Wr(e, t, s, null);
    if (r.data === "$!") { if (n = r.nextSibling && r.nextSibling.dataset, n) var l = n.dgst; return n = l, o = Error(C(419)), n = Ws(o, n, void 0), Wr(e, t, s, n) }
    if (l = (s & e.childLanes) !== 0, Ie || l) {
        if (n = fe, n !== null) {
            switch (s & -s) {
                case 4:
                    r = 2;
                    break;
                case 16:
                    r = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    r = 32;
                    break;
                case 536870912:
                    r = 268435456;
                    break;
                default:
                    r = 0
            }
            r = (r & (n.suspendedLanes | s)) !== 0 ? 0 : r, r !== 0 && r !== o.retryLane && (o.retryLane = r, Nt(e, r), ht(n, e, r, -1))
        }
        return tu(), n = Ws(Error(C(421))), Wr(e, t, s, n)
    }
    return r.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hv.bind(null, e), r._reactRetry = t, null) : (e = o.treeContext, We = qt(r.nextSibling), Ue = t, Z = !0, ut = null, e !== null && (qe[Ze++] = Rt, qe[Ze++] = Mt, qe[Ze++] = wi, Rt = e.id, Mt = e.overflow, wi = t), t = Ya(t, n.children), t.flags |= 4096, t)
}

function Ac(e, t, i) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Dl(e.return, t, i)
}

function Us(e, t, i, n, r) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: i, tailMode: r } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = n, o.tail = i, o.tailMode = r)
}

function pf(e, t, i) {
    var n = t.pendingProps,
        r = n.revealOrder,
        o = n.tail;
    if (Te(e, t, n.children, i), n = ee.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Ac(e, i, t);
            else if (e.tag === 19) Ac(e, i, t);
            else if (e.child !== null) { e.child.return = e, e = e.child; continue }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        n &= 1
    }
    if (K(ee, n), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (r) {
        case "forwards":
            for (i = t.child, r = null; i !== null;) e = i.alternate, e !== null && Eo(e) === null && (r = i), i = i.sibling;
            i = r, i === null ? (r = t.child, t.child = null) : (r = i.sibling, i.sibling = null), Us(t, !1, r, i, o);
            break;
        case "backwards":
            for (i = null, r = t.child, t.child = null; r !== null;) {
                if (e = r.alternate, e !== null && Eo(e) === null) { t.child = r; break }
                e = r.sibling, r.sibling = i, i = r, r = e
            }
            Us(t, !0, i, null, o);
            break;
        case "together":
            Us(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function ro(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function zt(e, t, i) {
    if (e !== null && (t.dependencies = e.dependencies), xi |= t.lanes, (i & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(C(153));
    if (t.child !== null) {
        for (e = t.child, i = ti(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null;) e = e.sibling, i = i.sibling = ti(e, e.pendingProps), i.return = t;
        i.sibling = null
    }
    return t.child
}

function Lv(e, t, i) {
    switch (t.tag) {
        case 3:
            hf(t), ln();
            break;
        case 5:
            Oh(t);
            break;
        case 1:
            Ne(t.type) && wo(t);
            break;
        case 4:
            Ha(t, t.stateNode.containerInfo);
            break;
        case 10:
            var n = t.type._context,
                r = t.memoizedProps.value;
            K(Co, n._currentValue), n._currentValue = r;
            break;
        case 13:
            if (n = t.memoizedState, n !== null) return n.dehydrated !== null ? (K(ee, ee.current & 1), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? ff(e, t, i) : (K(ee, ee.current & 1), e = zt(e, t, i), e !== null ? e.sibling : null);
            K(ee, ee.current & 1);
            break;
        case 19:
            if (n = (i & t.childLanes) !== 0, (e.flags & 128) !== 0) {
                if (n) return pf(e, t, i);
                t.flags |= 128
            }
            if (r = t.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), K(ee, ee.current), n) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, cf(e, t, i)
    }
    return zt(e, t, i)
}
var mf, Kl, vf, gf;
mf = function(e, t) {
    for (var i = t.child; i !== null;) {
        if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
        else if (i.tag !== 4 && i.child !== null) { i.child.return = i, i = i.child; continue }
        if (i === t) break;
        for (; i.sibling === null;) {
            if (i.return === null || i.return === t) return;
            i = i.return
        }
        i.sibling.return = i.return, i = i.sibling
    }
};
Kl = function() {};
vf = function(e, t, i, n) {
    var r = e.memoizedProps;
    if (r !== n) {
        e = t.stateNode, mi(St.current);
        var o = null;
        switch (i) {
            case "input":
                r = ml(e, r), n = ml(e, n), o = [];
                break;
            case "select":
                r = ie({}, r, { value: void 0 }), n = ie({}, n, { value: void 0 }), o = [];
                break;
            case "textarea":
                r = yl(e, r), n = yl(e, n), o = [];
                break;
            default:
                typeof r.onClick != "function" && typeof n.onClick == "function" && (e.onclick = yo)
        }
        wl(i, n);
        var s;
        i = null;
        for (c in r)
            if (!n.hasOwnProperty(c) && r.hasOwnProperty(c) && r[c] != null)
                if (c === "style") { var l = r[c]; for (s in l) l.hasOwnProperty(s) && (i || (i = {}), i[s] = "") } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Xn.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
        for (c in n) {
            var u = n[c];
            if (l = r != null ? r[c] : void 0, n.hasOwnProperty(c) && u !== l && (u != null || l != null))
                if (c === "style")
                    if (l) { for (s in l) !l.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (i || (i = {}), i[s] = ""); for (s in u) u.hasOwnProperty(s) && l[s] !== u[s] && (i || (i = {}), i[s] = u[s]) } else i || (o || (o = []), o.push(c, i)), i = u;
            else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, u != null && l !== u && (o = o || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Xn.hasOwnProperty(c) ? (u != null && c === "onScroll" && G("scroll", e), o || l === u || (o = [])) : (o = o || []).push(c, u))
        }
        i && (o = o || []).push("style", i);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4)
    }
};
gf = function(e, t, i, n) { i !== n && (t.flags |= 4) };

function An(e, t) {
    if (!Z) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var i = null; t !== null;) t.alternate !== null && (i = t), t = t.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
        case "collapsed":
            i = e.tail;
            for (var n = null; i !== null;) i.alternate !== null && (n = i), i = i.sibling;
            n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
    }
}

function ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        i = 0,
        n = 0;
    if (t)
        for (var r = e.child; r !== null;) i |= r.lanes | r.childLanes, n |= r.subtreeFlags & 14680064, n |= r.flags & 14680064, r.return = e, r = r.sibling;
    else
        for (r = e.child; r !== null;) i |= r.lanes | r.childLanes, n |= r.subtreeFlags, n |= r.flags, r.return = e, r = r.sibling;
    return e.subtreeFlags |= n, e.childLanes = i, t
}

function Rv(e, t, i) {
    var n = t.pendingProps;
    switch ($a(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ke(t), null;
        case 1:
            return Ne(t.type) && ko(), ke(t), null;
        case 3:
            return n = t.stateNode, un(), Y(Ve), Y(be), Wa(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Hr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ut !== null && (ta(ut), ut = null))), Kl(e, t), ke(t), null;
        case 5:
            ja(t);
            var r = mi(ar.current);
            if (i = t.type, e !== null && t.stateNode != null) vf(e, t, i, n, r), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!n) { if (t.stateNode === null) throw Error(C(166)); return ke(t), null }
                if (e = mi(St.current), Hr(t)) {
                    n = t.stateNode, i = t.type;
                    var o = t.memoizedProps;
                    switch (n[xt] = t, n[sr] = o, e = (t.mode & 1) !== 0, i) {
                        case "dialog":
                            G("cancel", n), G("close", n);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            G("load", n);
                            break;
                        case "video":
                        case "audio":
                            for (r = 0; r < zn.length; r++) G(zn[r], n);
                            break;
                        case "source":
                            G("error", n);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            G("error", n), G("load", n);
                            break;
                        case "details":
                            G("toggle", n);
                            break;
                        case "input":
                            zu(n, o), G("invalid", n);
                            break;
                        case "select":
                            n._wrapperState = { wasMultiple: !!o.multiple }, G("invalid", n);
                            break;
                        case "textarea":
                            Du(n, o), G("invalid", n)
                    }
                    wl(i, o), r = null;
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var l = o[s];
                            s === "children" ? typeof l == "string" ? n.textContent !== l && (o.suppressHydrationWarning !== !0 && Or(n.textContent, l, e), r = ["children", l]) : typeof l == "number" && n.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && Or(n.textContent, l, e), r = ["children", "" + l]) : Xn.hasOwnProperty(s) && l != null && s === "onScroll" && G("scroll", n)
                        }
                    switch (i) {
                        case "input":
                            _r(n), Fu(n, o, !0);
                            break;
                        case "textarea":
                            _r(n), Ou(n);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (n.onclick = yo)
                    }
                    n = r, t.updateQueue = n, n !== null && (t.flags |= 4)
                } else {
                    s = r.nodeType === 9 ? r : r.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Wd(i)), e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = s.createElement(i, { is: n.is }) : (e = s.createElement(i), i === "select" && (s = e, n.multiple ? s.multiple = !0 : n.size && (s.size = n.size))) : e = s.createElementNS(e, i), e[xt] = t, e[sr] = n, mf(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = bl(i, n), i) {
                            case "dialog":
                                G("cancel", e), G("close", e), r = n;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                G("load", e), r = n;
                                break;
                            case "video":
                            case "audio":
                                for (r = 0; r < zn.length; r++) G(zn[r], e);
                                r = n;
                                break;
                            case "source":
                                G("error", e), r = n;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                G("error", e), G("load", e), r = n;
                                break;
                            case "details":
                                G("toggle", e), r = n;
                                break;
                            case "input":
                                zu(e, n), r = ml(e, n), G("invalid", e);
                                break;
                            case "option":
                                r = n;
                                break;
                            case "select":
                                e._wrapperState = { wasMultiple: !!n.multiple }, r = ie({}, n, { value: void 0 }), G("invalid", e);
                                break;
                            case "textarea":
                                Du(e, n), r = yl(e, n), G("invalid", e);
                                break;
                            default:
                                r = n
                        }
                        wl(i, r),
                        l = r;
                        for (o in l)
                            if (l.hasOwnProperty(o)) {
                                var u = l[o];
                                o === "style" ? Bd(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Ud(e, u)) : o === "children" ? typeof u == "string" ? (i !== "textarea" || u !== "") && qn(e, u) : typeof u == "number" && qn(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Xn.hasOwnProperty(o) ? u != null && o === "onScroll" && G("scroll", e) : u != null && ka(e, o, u, s))
                            }
                        switch (i) {
                            case "input":
                                _r(e), Fu(e, n, !1);
                                break;
                            case "textarea":
                                _r(e), Ou(e);
                                break;
                            case "option":
                                n.value != null && e.setAttribute("value", "" + ii(n.value));
                                break;
                            case "select":
                                e.multiple = !!n.multiple, o = n.value, o != null ? Yi(e, !!n.multiple, o, !1) : n.defaultValue != null && Yi(e, !!n.multiple, n.defaultValue, !0);
                                break;
                            default:
                                typeof r.onClick == "function" && (e.onclick = yo)
                        }
                        switch (i) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                n = !!n.autoFocus;
                                break e;
                            case "img":
                                n = !0;
                                break e;
                            default:
                                n = !1
                        }
                    }
                    n && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return ke(t), null;
        case 6:
            if (e && t.stateNode != null) gf(e, t, e.memoizedProps, n);
            else {
                if (typeof n != "string" && t.stateNode === null) throw Error(C(166));
                if (i = mi(ar.current), mi(St.current), Hr(t)) {
                    if (n = t.stateNode, i = t.memoizedProps, n[xt] = t, (o = n.nodeValue !== i) && (e = Ue, e !== null)) switch (e.tag) {
                        case 3:
                            Or(n.nodeValue, i, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Or(n.nodeValue, i, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else n = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(n), n[xt] = t, t.stateNode = n
            }
            return ke(t), null;
        case 13:
            if (Y(ee), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Z && We !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Ih(), ln(), t.flags |= 98560, o = !1;
                else if (o = Hr(t), n !== null && n.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(C(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(C(317));
                        o[xt] = t
                    } else ln(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                    ke(t), o = !1
                } else ut !== null && (ta(ut), ut = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return (t.flags & 128) !== 0 ? (t.lanes = i, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ee.current & 1) !== 0 ? ue === 0 && (ue = 3) : tu())), t.updateQueue !== null && (t.flags |= 4), ke(t), null);
        case 4:
            return un(), Kl(e, t), e === null && rr(t.stateNode.containerInfo), ke(t), null;
        case 10:
            return Fa(t.type._context), ke(t), null;
        case 17:
            return Ne(t.type) && ko(), ke(t), null;
        case 19:
            if (Y(ee), o = t.memoizedState, o === null) return ke(t), null;
            if (n = (t.flags & 128) !== 0, s = o.rendering, s === null)
                if (n) An(o, !1);
                else {
                    if (ue !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null;) {
                            if (s = Eo(e), s !== null) { for (t.flags |= 128, An(o, !1), n = s.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = i, i = t.child; i !== null;) o = i, e = n, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), i = i.sibling; return K(ee, ee.current & 1 | 2), t.child }
                            e = e.sibling
                        }
                    o.tail !== null && se() > dn && (t.flags |= 128, n = !0, An(o, !1), t.lanes = 4194304)
                }
            else {
                if (!n)
                    if (e = Eo(s), e !== null) { if (t.flags |= 128, n = !0, i = e.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), An(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !Z) return ke(t), null } else 2 * se() - o.renderingStartTime > dn && i !== 1073741824 && (t.flags |= 128, n = !0, An(o, !1), t.lanes = 4194304);
                o.isBackwards ? (s.sibling = t.child, t.child = s) : (i = o.last, i !== null ? i.sibling = s : t.child = s, o.last = s)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = se(), t.sibling = null, i = ee.current, K(ee, n ? i & 1 | 2 : i & 1), t) : (ke(t), null);
        case 22:
        case 23:
            return eu(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && (t.mode & 1) !== 0 ? (He & 1073741824) !== 0 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(C(156, t.tag))
}

function Mv(e, t) {
    switch ($a(t), t.tag) {
        case 1:
            return Ne(t.type) && ko(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return un(), Y(Ve), Y(be), Wa(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return ja(t), null;
        case 13:
            if (Y(ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(C(340));
                ln()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return Y(ee), null;
        case 4:
            return un(), null;
        case 10:
            return Fa(t.type._context), null;
        case 22:
        case 23:
            return eu(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Ur = !1,
    we = !1,
    _v = typeof WeakSet == "function" ? WeakSet : Set,
    E = null;

function Ki(e, t) {
    var i = e.ref;
    if (i !== null)
        if (typeof i == "function") try { i(null) } catch (n) { ne(e, t, n) } else i.current = null
}

function Gl(e, t, i) { try { i() } catch (n) { ne(e, t, n) } }
var Lc = !1;

function Iv(e, t) {
    if (Ml = mo, e = wh(), _a(e)) {
        if ("selectionStart" in e) var i = { start: e.selectionStart, end: e.selectionEnd };
        else e: {
            i = (i = e.ownerDocument) && i.defaultView || window;
            var n = i.getSelection && i.getSelection();
            if (n && n.rangeCount !== 0) {
                i = n.anchorNode;
                var r = n.anchorOffset,
                    o = n.focusNode;
                n = n.focusOffset;
                try { i.nodeType, o.nodeType } catch { i = null; break e }
                var s = 0,
                    l = -1,
                    u = -1,
                    c = 0,
                    a = 0,
                    d = e,
                    p = null;
                t: for (;;) {
                    for (var k; d !== i || r !== 0 && d.nodeType !== 3 || (l = s + r), d !== o || n !== 0 && d.nodeType !== 3 || (u = s + n), d.nodeType === 3 && (s += d.nodeValue.length), (k = d.firstChild) !== null;) p = d, d = k;
                    for (;;) {
                        if (d === e) break t;
                        if (p === i && ++c === r && (l = s), p === o && ++a === n && (u = s), (k = d.nextSibling) !== null) break;
                        d = p, p = d.parentNode
                    }
                    d = k
                }
                i = l === -1 || u === -1 ? null : { start: l, end: u }
            } else i = null
        }
        i = i || { start: 0, end: 0 }
    } else i = null;
    for (_l = { focusedElem: e, selectionRange: i }, mo = !1, E = t; E !== null;)
        if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
        else
            for (; E !== null;) {
                t = E;
                try {
                    var b = t.alternate;
                    if ((t.flags & 1024) !== 0) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (b !== null) {
                                var w = b.memoizedProps,
                                    z = b.memoizedState,
                                    f = t.stateNode,
                                    h = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : lt(t.type, w), z);
                                f.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(C(163))
                    }
                } catch (x) { ne(t, t.return, x) }
                if (e = t.sibling, e !== null) { e.return = t.return, E = e; break }
                E = t.return
            }
    return b = Lc, Lc = !1, b
}

function Bn(e, t, i) {
    var n = t.updateQueue;
    if (n = n !== null ? n.lastEffect : null, n !== null) {
        var r = n = n.next;
        do {
            if ((r.tag & e) === e) {
                var o = r.destroy;
                r.destroy = void 0, o !== void 0 && Gl(t, i, o)
            }
            r = r.next
        } while (r !== n)
    }
}

function qo(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var i = t = t.next;
        do {
            if ((i.tag & e) === e) {
                var n = i.create;
                i.destroy = n()
            }
            i = i.next
        } while (i !== t)
    }
}

function Yl(e) {
    var t = e.ref;
    if (t !== null) {
        var i = e.stateNode;
        switch (e.tag) {
            case 5:
                e = i;
                break;
            default:
                e = i
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function yf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, yf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[xt], delete t[sr], delete t[Vl], delete t[mv], delete t[vv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function kf(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4 }

function Rc(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || kf(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Xl(e, t, i) {
    var n = e.tag;
    if (n === 5 || n === 6) e = e.stateNode, t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode, t.insertBefore(e, i)) : (t = i, t.appendChild(e)), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = yo));
    else if (n !== 4 && (e = e.child, e !== null))
        for (Xl(e, t, i), e = e.sibling; e !== null;) Xl(e, t, i), e = e.sibling
}

function ql(e, t, i) {
    var n = e.tag;
    if (n === 5 || n === 6) e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (n !== 4 && (e = e.child, e !== null))
        for (ql(e, t, i), e = e.sibling; e !== null;) ql(e, t, i), e = e.sibling
}
var me = null,
    at = !1;

function Ht(e, t, i) { for (i = i.child; i !== null;) wf(e, t, i), i = i.sibling }

function wf(e, t, i) {
    if (Tt && typeof Tt.onCommitFiberUnmount == "function") try { Tt.onCommitFiberUnmount(Wo, i) } catch {}
    switch (i.tag) {
        case 5:
            we || Ki(i, t);
        case 6:
            var n = me,
                r = at;
            me = null, Ht(e, t, i), me = n, at = r, me !== null && (at ? (e = me, i = i.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : me.removeChild(i.stateNode));
            break;
        case 18:
            me !== null && (at ? (e = me, i = i.stateNode, e.nodeType === 8 ? zs(e.parentNode, i) : e.nodeType === 1 && zs(e, i), tr(e)) : zs(me, i.stateNode));
            break;
        case 4:
            n = me, r = at, me = i.stateNode.containerInfo, at = !0, Ht(e, t, i), me = n, at = r;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!we && (n = i.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
                r = n = n.next;
                do {
                    var o = r,
                        s = o.destroy;
                    o = o.tag, s !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Gl(i, t, s), r = r.next
                } while (r !== n)
            }
            Ht(e, t, i);
            break;
        case 1:
            if (!we && (Ki(i, t), n = i.stateNode, typeof n.componentWillUnmount == "function")) try { n.props = i.memoizedProps, n.state = i.memoizedState, n.componentWillUnmount() } catch (l) { ne(i, t, l) }
            Ht(e, t, i);
            break;
        case 21:
            Ht(e, t, i);
            break;
        case 22:
            i.mode & 1 ? (we = (n = we) || i.memoizedState !== null, Ht(e, t, i), we = n) : Ht(e, t, i);
            break;
        default:
            Ht(e, t, i)
    }
}

function Mc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var i = e.stateNode;
        i === null && (i = e.stateNode = new _v), t.forEach(function(n) {
            var r = jv.bind(null, e, n);
            i.has(n) || (i.add(n), n.then(r, r))
        })
    }
}

function rt(e, t) {
    var i = t.deletions;
    if (i !== null)
        for (var n = 0; n < i.length; n++) {
            var r = i[n];
            try {
                var o = e,
                    s = t,
                    l = s;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            me = l.stateNode, at = !1;
                            break e;
                        case 3:
                            me = l.stateNode.containerInfo, at = !0;
                            break e;
                        case 4:
                            me = l.stateNode.containerInfo, at = !0;
                            break e
                    }
                    l = l.return
                }
                if (me === null) throw Error(C(160));
                wf(o, s, r), me = null, at = !1;
                var u = r.alternate;
                u !== null && (u.return = null), r.return = null
            } catch (c) { ne(r, t, c) }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) bf(t, e), t = t.sibling
}

function bf(e, t) {
    var i = e.alternate,
        n = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (rt(t, e), yt(e), n & 4) { try { Bn(3, e, e.return), qo(3, e) } catch (w) { ne(e, e.return, w) } try { Bn(5, e, e.return) } catch (w) { ne(e, e.return, w) } }
            break;
        case 1:
            rt(t, e), yt(e), n & 512 && i !== null && Ki(i, i.return);
            break;
        case 5:
            if (rt(t, e), yt(e), n & 512 && i !== null && Ki(i, i.return), e.flags & 32) { var r = e.stateNode; try { qn(r, "") } catch (w) { ne(e, e.return, w) } }
            if (n & 4 && (r = e.stateNode, r != null)) {
                var o = e.memoizedProps,
                    s = i !== null ? i.memoizedProps : o,
                    l = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    l === "input" && o.type === "radio" && o.name != null && Hd(r, o), bl(l, s);
                    var c = bl(l, o);
                    for (s = 0; s < u.length; s += 2) {
                        var a = u[s],
                            d = u[s + 1];
                        a === "style" ? Bd(r, d) : a === "dangerouslySetInnerHTML" ? Ud(r, d) : a === "children" ? qn(r, d) : ka(r, a, d, c)
                    }
                    switch (l) {
                        case "input":
                            vl(r, o);
                            break;
                        case "textarea":
                            jd(r, o);
                            break;
                        case "select":
                            var p = r._wrapperState.wasMultiple;
                            r._wrapperState.wasMultiple = !!o.multiple;
                            var k = o.value;
                            k != null ? Yi(r, !!o.multiple, k, !1) : p !== !!o.multiple && (o.defaultValue != null ? Yi(r, !!o.multiple, o.defaultValue, !0) : Yi(r, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    r[sr] = o
                } catch (w) { ne(e, e.return, w) }
            }
            break;
        case 6:
            if (rt(t, e), yt(e), n & 4) {
                if (e.stateNode === null) throw Error(C(162));
                r = e.stateNode, o = e.memoizedProps;
                try { r.nodeValue = o } catch (w) { ne(e, e.return, w) }
            }
            break;
        case 3:
            if (rt(t, e), yt(e), n & 4 && i !== null && i.memoizedState.isDehydrated) try { tr(t.containerInfo) } catch (w) { ne(e, e.return, w) }
            break;
        case 4:
            rt(t, e), yt(e);
            break;
        case 13:
            rt(t, e), yt(e), r = e.child, r.flags & 8192 && (o = r.memoizedState !== null, r.stateNode.isHidden = o, !o || r.alternate !== null && r.alternate.memoizedState !== null || (Za = se())), n & 4 && Mc(e);
            break;
        case 22:
            if (a = i !== null && i.memoizedState !== null, e.mode & 1 ? (we = (c = we) || a, rt(t, e), we = c) : rt(t, e), yt(e), n & 8192) {
                if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !a && (e.mode & 1) !== 0)
                    for (E = e, a = e.child; a !== null;) {
                        for (d = E = a; E !== null;) {
                            switch (p = E, k = p.child, p.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Bn(4, p, p.return);
                                    break;
                                case 1:
                                    Ki(p, p.return);
                                    var b = p.stateNode;
                                    if (typeof b.componentWillUnmount == "function") { n = p, i = p.return; try { t = n, b.props = t.memoizedProps, b.state = t.memoizedState, b.componentWillUnmount() } catch (w) { ne(n, i, w) } }
                                    break;
                                case 5:
                                    Ki(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) { Ic(d); continue }
                            }
                            k !== null ? (k.return = p, E = k) : Ic(d)
                        }
                        a = a.sibling
                    }
                e: for (a = null, d = e;;) {
                    if (d.tag === 5) { if (a === null) { a = d; try { r = d.stateNode, c ? (o = r.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = d.stateNode, u = d.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, l.style.display = Qd("display", s)) } catch (w) { ne(e, e.return, w) } } } else if (d.tag === 6) { if (a === null) try { d.stateNode.nodeValue = c ? "" : d.memoizedProps } catch (w) { ne(e, e.return, w) } } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) { d.child.return = d, d = d.child; continue }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        a === d && (a = null), d = d.return
                    }
                    a === d && (a = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            rt(t, e), yt(e), n & 4 && Mc(e);
            break;
        case 21:
            break;
        default:
            rt(t, e), yt(e)
    }
}

function yt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var i = e.return; i !== null;) {
                    if (kf(i)) { var n = i; break e }
                    i = i.return
                }
                throw Error(C(160))
            }
            switch (n.tag) {
                case 5:
                    var r = n.stateNode;
                    n.flags & 32 && (qn(r, ""), n.flags &= -33);
                    var o = Rc(e);
                    ql(e, o, r);
                    break;
                case 3:
                case 4:
                    var s = n.stateNode.containerInfo,
                        l = Rc(e);
                    Xl(e, l, s);
                    break;
                default:
                    throw Error(C(161))
            }
        }
        catch (u) { ne(e, e.return, u) }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function $v(e, t, i) { E = e, xf(e) }

function xf(e, t, i) {
    for (var n = (e.mode & 1) !== 0; E !== null;) {
        var r = E,
            o = r.child;
        if (r.tag === 22 && n) {
            var s = r.memoizedState !== null || Ur;
            if (!s) {
                var l = r.alternate,
                    u = l !== null && l.memoizedState !== null || we;
                l = Ur;
                var c = we;
                if (Ur = s, (we = u) && !c)
                    for (E = r; E !== null;) s = E, u = s.child, s.tag === 22 && s.memoizedState !== null ? $c(r) : u !== null ? (u.return = s, E = u) : $c(r);
                for (; o !== null;) E = o, xf(o), o = o.sibling;
                E = r, Ur = l, we = c
            }
            _c(e)
        } else(r.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = r, E = o) : _c(e)
    }
}

function _c(e) {
    for (; E !== null;) {
        var t = E;
        if ((t.flags & 8772) !== 0) {
            var i = t.alternate;
            try {
                if ((t.flags & 8772) !== 0) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        we || qo(5, t);
                        break;
                    case 1:
                        var n = t.stateNode;
                        if (t.flags & 4 && !we)
                            if (i === null) n.componentDidMount();
                            else {
                                var r = t.elementType === t.type ? i.memoizedProps : lt(t.type, i.memoizedProps);
                                n.componentDidUpdate(r, i.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && mc(t, o, n);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (i = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    i = t.child.stateNode;
                                    break;
                                case 1:
                                    i = t.child.stateNode
                            }
                            mc(t, s, i)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (i === null && t.flags & 4) {
                            i = l;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && i.focus();
                                    break;
                                case "img":
                                    u.src && (i.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var a = c.memoizedState;
                                if (a !== null) {
                                    var d = a.dehydrated;
                                    d !== null && tr(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(C(163))
                }
                we || t.flags & 512 && Yl(t)
            } catch (p) { ne(t, t.return, p) }
        }
        if (t === e) { E = null; break }
        if (i = t.sibling, i !== null) { i.return = t.return, E = i; break }
        E = t.return
    }
}

function Ic(e) {
    for (; E !== null;) {
        var t = E;
        if (t === e) { E = null; break }
        var i = t.sibling;
        if (i !== null) { i.return = t.return, E = i; break }
        E = t.return
    }
}

function $c(e) {
    for (; E !== null;) {
        var t = E;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var i = t.return;
                    try { qo(4, t) } catch (u) { ne(t, i, u) }
                    break;
                case 1:
                    var n = t.stateNode;
                    if (typeof n.componentDidMount == "function") { var r = t.return; try { n.componentDidMount() } catch (u) { ne(t, r, u) } }
                    var o = t.return;
                    try { Yl(t) } catch (u) { ne(t, o, u) }
                    break;
                case 5:
                    var s = t.return;
                    try { Yl(t) } catch (u) { ne(t, s, u) }
            }
        } catch (u) { ne(t, t.return, u) }
        if (t === e) { E = null; break }
        var l = t.sibling;
        if (l !== null) { l.return = t.return, E = l; break }
        E = t.return
    }
}
var Vv = Math.ceil,
    Lo = Dt.ReactCurrentDispatcher,
    Xa = Dt.ReactCurrentOwner,
    et = Dt.ReactCurrentBatchConfig,
    j = 0,
    fe = null,
    le = null,
    ve = 0,
    He = 0,
    Gi = oi(0),
    ue = 0,
    hr = null,
    xi = 0,
    Zo = 0,
    qa = 0,
    Kn = null,
    _e = null,
    Za = 0,
    dn = 1 / 0,
    Pt = null,
    Ro = !1,
    Zl = null,
    Jt = null,
    Qr = !1,
    Kt = null,
    Mo = 0,
    Gn = 0,
    Jl = null,
    oo = -1,
    so = 0;

function Se() { return (j & 6) !== 0 ? se() : oo !== -1 ? oo : oo = se() }

function ei(e) { return (e.mode & 1) === 0 ? 1 : (j & 2) !== 0 && ve !== 0 ? ve & -ve : yv.transition !== null ? (so === 0 && (so = rh()), so) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : dh(e.type)), e) }

function ht(e, t, i, n) {
    if (50 < Gn) throw Gn = 0, Jl = null, Error(C(185));
    mr(e, i, n), ((j & 2) === 0 || e !== fe) && (e === fe && ((j & 2) === 0 && (Zo |= i), ue === 4 && Qt(e, ve)), ze(e, n), i === 1 && j === 0 && (t.mode & 1) === 0 && (dn = se() + 500, Go && si()))
}

function ze(e, t) {
    var i = e.callbackNode;
    ym(e, t);
    var n = po(e, e === fe ? ve : 0);
    if (n === 0) i !== null && Wu(i), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = n & -n, e.callbackPriority !== t) {
        if (i != null && Wu(i), t === 1) e.tag === 0 ? gv(Vc.bind(null, e)) : Rh(Vc.bind(null, e)), fv(function() {
            (j & 6) === 0 && si()
        }), i = null;
        else {
            switch (oh(n)) {
                case 1:
                    i = Ta;
                    break;
                case 4:
                    i = ih;
                    break;
                case 16:
                    i = fo;
                    break;
                case 536870912:
                    i = nh;
                    break;
                default:
                    i = fo
            }
            i = Rf(i, Cf.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = i
    }
}

function Cf(e, t) {
    if (oo = -1, so = 0, (j & 6) !== 0) throw Error(C(327));
    var i = e.callbackNode;
    if (en() && e.callbackNode !== i) return null;
    var n = po(e, e === fe ? ve : 0);
    if (n === 0) return null;
    if ((n & 30) !== 0 || (n & e.expiredLanes) !== 0 || t) t = _o(e, n);
    else {
        t = n;
        var r = j;
        j |= 2;
        var o = Sf();
        (fe !== e || ve !== t) && (Pt = null, dn = se() + 500, gi(e, t));
        do try { Fv(); break } catch (l) { Tf(e, l) }
        while (1);
        za(), Lo.current = o, j = r, le !== null ? t = 0 : (fe = null, ve = 0, t = ue)
    }
    if (t !== 0) {
        if (t === 2 && (r = El(e), r !== 0 && (n = r, t = ea(e, r))), t === 1) throw i = hr, gi(e, 0), Qt(e, n), ze(e, se()), i;
        if (t === 6) Qt(e, n);
        else {
            if (r = e.current.alternate, (n & 30) === 0 && !Nv(r) && (t = _o(e, n), t === 2 && (o = El(e), o !== 0 && (n = o, t = ea(e, o))), t === 1)) throw i = hr, gi(e, 0), Qt(e, n), ze(e, se()), i;
            switch (e.finishedWork = r, e.finishedLanes = n, t) {
                case 0:
                case 1:
                    throw Error(C(345));
                case 2:
                    hi(e, _e, Pt);
                    break;
                case 3:
                    if (Qt(e, n), (n & 130023424) === n && (t = Za + 500 - se(), 10 < t)) {
                        if (po(e, 0) !== 0) break;
                        if (r = e.suspendedLanes, (r & n) !== n) { Se(), e.pingedLanes |= e.suspendedLanes & r; break }
                        e.timeoutHandle = $l(hi.bind(null, e, _e, Pt), t);
                        break
                    }
                    hi(e, _e, Pt);
                    break;
                case 4:
                    if (Qt(e, n), (n & 4194240) === n) break;
                    for (t = e.eventTimes, r = -1; 0 < n;) {
                        var s = 31 - dt(n);
                        o = 1 << s, s = t[s], s > r && (r = s), n &= ~o
                    }
                    if (n = r, n = se() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Vv(n / 1960)) - n, 10 < n) { e.timeoutHandle = $l(hi.bind(null, e, _e, Pt), n); break }
                    hi(e, _e, Pt);
                    break;
                case 5:
                    hi(e, _e, Pt);
                    break;
                default:
                    throw Error(C(329))
            }
        }
    }
    return ze(e, se()), e.callbackNode === i ? Cf.bind(null, e) : null
}

function ea(e, t) { var i = Kn; return e.current.memoizedState.isDehydrated && (gi(e, t).flags |= 256), e = _o(e, t), e !== 2 && (t = _e, _e = i, t !== null && ta(t)), e }

function ta(e) { _e === null ? _e = e : _e.push.apply(_e, e) }

function Nv(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var i = t.updateQueue;
            if (i !== null && (i = i.stores, i !== null))
                for (var n = 0; n < i.length; n++) {
                    var r = i[n],
                        o = r.getSnapshot;
                    r = r.value;
                    try { if (!pt(o(), r)) return !1 } catch { return !1 }
                }
        }
        if (i = t.child, t.subtreeFlags & 16384 && i !== null) i.return = t, t = i;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Qt(e, t) {
    for (t &= ~qa, t &= ~Zo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var i = 31 - dt(t),
            n = 1 << i;
        e[i] = -1, t &= ~n
    }
}

function Vc(e) {
    if ((j & 6) !== 0) throw Error(C(327));
    en();
    var t = po(e, 0);
    if ((t & 1) === 0) return ze(e, se()), null;
    var i = _o(e, t);
    if (e.tag !== 0 && i === 2) {
        var n = El(e);
        n !== 0 && (t = n, i = ea(e, n))
    }
    if (i === 1) throw i = hr, gi(e, 0), Qt(e, t), ze(e, se()), i;
    if (i === 6) throw Error(C(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, hi(e, _e, Pt), ze(e, se()), null
}

function Ja(e, t) {
    var i = j;
    j |= 1;
    try { return e(t) } finally { j = i, j === 0 && (dn = se() + 500, Go && si()) }
}

function Ci(e) {
    Kt !== null && Kt.tag === 0 && (j & 6) === 0 && en();
    var t = j;
    j |= 1;
    var i = et.transition,
        n = Q;
    try { if (et.transition = null, Q = 1, e) return e() } finally { Q = n, et.transition = i, j = t, (j & 6) === 0 && si() }
}

function eu() { He = Gi.current, Y(Gi) }

function gi(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var i = e.timeoutHandle;
    if (i !== -1 && (e.timeoutHandle = -1, hv(i)), le !== null)
        for (i = le.return; i !== null;) {
            var n = i;
            switch ($a(n), n.tag) {
                case 1:
                    n = n.type.childContextTypes, n != null && ko();
                    break;
                case 3:
                    un(), Y(Ve), Y(be), Wa();
                    break;
                case 5:
                    ja(n);
                    break;
                case 4:
                    un();
                    break;
                case 13:
                    Y(ee);
                    break;
                case 19:
                    Y(ee);
                    break;
                case 10:
                    Fa(n.type._context);
                    break;
                case 22:
                case 23:
                    eu()
            }
            i = i.return
        }
    if (fe = e, le = e = ti(e.current, null), ve = He = t, ue = 0, hr = null, qa = Zo = xi = 0, _e = Kn = null, pi !== null) {
        for (t = 0; t < pi.length; t++)
            if (i = pi[t], n = i.interleaved, n !== null) {
                i.interleaved = null;
                var r = n.next,
                    o = i.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = r, n.next = s
                }
                i.pending = n
            }
        pi = null
    }
    return e
}

function Tf(e, t) {
    do {
        var i = le;
        try {
            if (za(), io.current = Ao, Po) {
                for (var n = te.memoizedState; n !== null;) {
                    var r = n.queue;
                    r !== null && (r.pending = null), n = n.next
                }
                Po = !1
            }
            if (bi = 0, he = ae = te = null, Qn = !1, ur = 0, Xa.current = null, i === null || i.return === null) { ue = 1, hr = t, le = null; break }
            e: {
                var o = e,
                    s = i.return,
                    l = i,
                    u = t;
                if (t = ve, l.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u,
                        a = l,
                        d = a.tag;
                    if ((a.mode & 1) === 0 && (d === 0 || d === 11 || d === 15)) {
                        var p = a.alternate;
                        p ? (a.updateQueue = p.updateQueue, a.memoizedState = p.memoizedState, a.lanes = p.lanes) : (a.updateQueue = null, a.memoizedState = null)
                    }
                    var k = xc(s);
                    if (k !== null) {
                        k.flags &= -257, Cc(k, s, l, o, t), k.mode & 1 && bc(o, c, t), t = k, u = c;
                        var b = t.updateQueue;
                        if (b === null) {
                            var w = new Set;
                            w.add(u), t.updateQueue = w
                        } else b.add(u);
                        break e
                    } else {
                        if ((t & 1) === 0) { bc(o, c, t), tu(); break e }
                        u = Error(C(426))
                    }
                } else if (Z && l.mode & 1) {
                    var z = xc(s);
                    if (z !== null) {
                        (z.flags & 65536) === 0 && (z.flags |= 256), Cc(z, s, l, o, t), Va(cn(u, l));
                        break e
                    }
                }
                o = u = cn(u, l),
                ue !== 4 && (ue = 2),
                Kn === null ? Kn = [o] : Kn.push(o),
                o = s;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var f = lf(o, u, t);
                            pc(o, f);
                            break e;
                        case 1:
                            l = u;
                            var h = o.type,
                                v = o.stateNode;
                            if ((o.flags & 128) === 0 && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Jt === null || !Jt.has(v)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var x = af(o, l, t);
                                pc(o, x);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            Pf(i)
        } catch (P) { t = P, le === i && i !== null && (le = i = i.return); continue }
        break
    } while (1)
}

function Sf() { var e = Lo.current; return Lo.current = Ao, e === null ? Ao : e }

function tu() {
    (ue === 0 || ue === 3 || ue === 2) && (ue = 4), fe === null || (xi & 268435455) === 0 && (Zo & 268435455) === 0 || Qt(fe, ve)
}

function _o(e, t) {
    var i = j;
    j |= 2;
    var n = Sf();
    (fe !== e || ve !== t) && (Pt = null, gi(e, t));
    do try { zv(); break } catch (r) { Tf(e, r) }
    while (1);
    if (za(), j = i, Lo.current = n, le !== null) throw Error(C(261));
    return fe = null, ve = 0, ue
}

function zv() { for (; le !== null;) Ef(le) }

function Fv() { for (; le !== null && !um();) Ef(le) }

function Ef(e) {
    var t = Lf(e.alternate, e, He);
    e.memoizedProps = e.pendingProps, t === null ? Pf(e) : le = t, Xa.current = null
}

function Pf(e) {
    var t = e;
    do {
        var i = t.alternate;
        if (e = t.return, (t.flags & 32768) === 0) { if (i = Rv(i, t, He), i !== null) { le = i; return } } else {
            if (i = Mv(i, t), i !== null) { i.flags &= 32767, le = i; return }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else { ue = 6, le = null; return }
        }
        if (t = t.sibling, t !== null) { le = t; return }
        le = t = e
    } while (t !== null);
    ue === 0 && (ue = 5)
}

function hi(e, t, i) {
    var n = Q,
        r = et.transition;
    try { et.transition = null, Q = 1, Dv(e, t, i, n) } finally { et.transition = r, Q = n }
    return null
}

function Dv(e, t, i, n) {
    do en(); while (Kt !== null);
    if ((j & 6) !== 0) throw Error(C(327));
    i = e.finishedWork;
    var r = e.finishedLanes;
    if (i === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, i === e.current) throw Error(C(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = i.lanes | i.childLanes;
    if (km(e, o), e === fe && (le = fe = null, ve = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Qr || (Qr = !0, Rf(fo, function() { return en(), null })), o = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || o) {
        o = et.transition, et.transition = null;
        var s = Q;
        Q = 1;
        var l = j;
        j |= 4, Xa.current = null, Iv(e, i), bf(i, e), ov(_l), mo = !!Ml, _l = Ml = null, e.current = i, $v(i), cm(), j = l, Q = s, et.transition = o
    } else e.current = i;
    if (Qr && (Qr = !1, Kt = e, Mo = r), o = e.pendingLanes, o === 0 && (Jt = null), fm(i.stateNode), ze(e, se()), t !== null)
        for (n = e.onRecoverableError, i = 0; i < t.length; i++) r = t[i], n(r.value, { componentStack: r.stack, digest: r.digest });
    if (Ro) throw Ro = !1, e = Zl, Zl = null, e;
    return (Mo & 1) !== 0 && e.tag !== 0 && en(), o = e.pendingLanes, (o & 1) !== 0 ? e === Jl ? Gn++ : (Gn = 0, Jl = e) : Gn = 0, si(), null
}

function en() {
    if (Kt !== null) {
        var e = oh(Mo),
            t = et.transition,
            i = Q;
        try {
            if (et.transition = null, Q = 16 > e ? 16 : e, Kt === null) var n = !1;
            else {
                if (e = Kt, Kt = null, Mo = 0, (j & 6) !== 0) throw Error(C(331));
                var r = j;
                for (j |= 4, E = e.current; E !== null;) {
                    var o = E,
                        s = o.child;
                    if ((E.flags & 16) !== 0) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var u = 0; u < l.length; u++) {
                                var c = l[u];
                                for (E = c; E !== null;) {
                                    var a = E;
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Bn(8, a, o)
                                    }
                                    var d = a.child;
                                    if (d !== null) d.return = a, E = d;
                                    else
                                        for (; E !== null;) {
                                            a = E;
                                            var p = a.sibling,
                                                k = a.return;
                                            if (yf(a), a === c) { E = null; break }
                                            if (p !== null) { p.return = k, E = p; break }
                                            E = k
                                        }
                                }
                            }
                            var b = o.alternate;
                            if (b !== null) {
                                var w = b.child;
                                if (w !== null) {
                                    b.child = null;
                                    do {
                                        var z = w.sibling;
                                        w.sibling = null, w = z
                                    } while (w !== null)
                                }
                            }
                            E = o
                        }
                    }
                    if ((o.subtreeFlags & 2064) !== 0 && s !== null) s.return = o, E = s;
                    else e: for (; E !== null;) {
                        if (o = E, (o.flags & 2048) !== 0) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Bn(9, o, o.return)
                        }
                        var f = o.sibling;
                        if (f !== null) { f.return = o.return, E = f; break e }
                        E = o.return
                    }
                }
                var h = e.current;
                for (E = h; E !== null;) {
                    s = E;
                    var v = s.child;
                    if ((s.subtreeFlags & 2064) !== 0 && v !== null) v.return = s, E = v;
                    else e: for (s = h; E !== null;) {
                        if (l = E, (l.flags & 2048) !== 0) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    qo(9, l)
                            }
                        } catch (P) { ne(l, l.return, P) }
                        if (l === s) { E = null; break e }
                        var x = l.sibling;
                        if (x !== null) { x.return = l.return, E = x; break e }
                        E = l.return
                    }
                }
                if (j = r, si(), Tt && typeof Tt.onPostCommitFiberRoot == "function") try { Tt.onPostCommitFiberRoot(Wo, e) } catch {}
                n = !0
            }
            return n
        } finally { Q = i, et.transition = t }
    }
    return !1
}

function Nc(e, t, i) { t = cn(i, t), t = lf(e, t, 1), e = Zt(e, t, 1), t = Se(), e !== null && (mr(e, 1, t), ze(e, t)) }

function ne(e, t, i) {
    if (e.tag === 3) Nc(e, e, i);
    else
        for (; t !== null;) {
            if (t.tag === 3) { Nc(t, e, i); break } else if (t.tag === 1) { var n = t.stateNode; if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Jt === null || !Jt.has(n))) { e = cn(i, e), e = af(t, e, 1), t = Zt(t, e, 1), e = Se(), t !== null && (mr(t, 1, e), ze(t, e)); break } }
            t = t.return
        }
}

function Ov(e, t, i) {
    var n = e.pingCache;
    n !== null && n.delete(t), t = Se(), e.pingedLanes |= e.suspendedLanes & i, fe === e && (ve & i) === i && (ue === 4 || ue === 3 && (ve & 130023424) === ve && 500 > se() - Za ? gi(e, 0) : qa |= i), ze(e, t)
}

function Af(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Vr, Vr <<= 1, (Vr & 130023424) === 0 && (Vr = 4194304)));
    var i = Se();
    e = Nt(e, t), e !== null && (mr(e, t, i), ze(e, i))
}

function Hv(e) {
    var t = e.memoizedState,
        i = 0;
    t !== null && (i = t.retryLane), Af(e, i)
}

function jv(e, t) {
    var i = 0;
    switch (e.tag) {
        case 13:
            var n = e.stateNode,
                r = e.memoizedState;
            r !== null && (i = r.retryLane);
            break;
        case 19:
            n = e.stateNode;
            break;
        default:
            throw Error(C(314))
    }
    n !== null && n.delete(t), Af(e, i)
}
var Lf;
Lf = function(e, t, i) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ve.current) Ie = !0;
        else {
            if ((e.lanes & i) === 0 && (t.flags & 128) === 0) return Ie = !1, Lv(e, t, i);
            Ie = (e.flags & 131072) !== 0
        }
    else Ie = !1, Z && (t.flags & 1048576) !== 0 && Mh(t, xo, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var n = t.type;
            ro(e, t), e = t.pendingProps;
            var r = sn(t, be.current);
            Ji(t, i), r = Qa(null, t, n, e, r, i);
            var o = Ba();
            return t.flags |= 1, typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ne(n) ? (o = !0, wo(t)) : o = !1, t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, Oa(t), r.updater = Yo, t.stateNode = r, r._reactInternals = t, Hl(t, n, e, i), t = Ul(null, t, n, !0, o, i)) : (t.tag = 0, Z && o && Ia(t), Te(null, t, r, i), t = t.child), t;
        case 16:
            n = t.elementType;
            e: {
                switch (ro(e, t), e = t.pendingProps, r = n._init, n = r(n._payload), t.type = n, r = t.tag = Uv(n), e = lt(n, e), r) {
                    case 0:
                        t = Wl(null, t, n, e, i);
                        break e;
                    case 1:
                        t = Ec(null, t, n, e, i);
                        break e;
                    case 11:
                        t = Tc(null, t, n, e, i);
                        break e;
                    case 14:
                        t = Sc(null, t, n, lt(n.type, e), i);
                        break e
                }
                throw Error(C(306, n, ""))
            }
            return t;
        case 0:
            return n = t.type, r = t.pendingProps, r = t.elementType === n ? r : lt(n, r), Wl(e, t, n, r, i);
        case 1:
            return n = t.type, r = t.pendingProps, r = t.elementType === n ? r : lt(n, r), Ec(e, t, n, r, i);
        case 3:
            e: {
                if (hf(t), e === null) throw Error(C(387));n = t.pendingProps,
                o = t.memoizedState,
                r = o.element,
                Vh(e, t),
                So(t, n, null, i);
                var s = t.memoizedState;
                if (n = s.element, o.isDehydrated)
                    if (o = { element: n, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) { r = cn(Error(C(423)), t), t = Pc(e, t, n, i, r); break e } else if (n !== r) { r = cn(Error(C(424)), t), t = Pc(e, t, n, i, r); break e } else
                    for (We = qt(t.stateNode.containerInfo.firstChild), Ue = t, Z = !0, ut = null, i = Dh(t, null, n, i), t.child = i; i;) i.flags = i.flags & -3 | 4096, i = i.sibling;
                else {
                    if (ln(), n === r) { t = zt(e, t, i); break e }
                    Te(e, t, n, i)
                }
                t = t.child
            }
            return t;
        case 5:
            return Oh(t), e === null && Fl(t), n = t.type, r = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = r.children, Il(n, r) ? s = null : o !== null && Il(n, o) && (t.flags |= 32), df(e, t), Te(e, t, s, i), t.child;
        case 6:
            return e === null && Fl(t), null;
        case 13:
            return ff(e, t, i);
        case 4:
            return Ha(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = an(t, null, n, i) : Te(e, t, n, i), t.child;
        case 11:
            return n = t.type, r = t.pendingProps, r = t.elementType === n ? r : lt(n, r), Tc(e, t, n, r, i);
        case 7:
            return Te(e, t, t.pendingProps, i), t.child;
        case 8:
            return Te(e, t, t.pendingProps.children, i), t.child;
        case 12:
            return Te(e, t, t.pendingProps.children, i), t.child;
        case 10:
            e: {
                if (n = t.type._context, r = t.pendingProps, o = t.memoizedProps, s = r.value, K(Co, n._currentValue), n._currentValue = s, o !== null)
                    if (pt(o.value, s)) { if (o.children === r.children && !Ve.current) { t = zt(e, t, i); break e } } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var l = o.dependencies;
                            if (l !== null) {
                                s = o.child;
                                for (var u = l.firstContext; u !== null;) {
                                    if (u.context === n) {
                                        if (o.tag === 1) {
                                            u = _t(-1, i & -i), u.tag = 2;
                                            var c = o.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var a = c.pending;
                                                a === null ? u.next = u : (u.next = a.next, a.next = u), c.pending = u
                                            }
                                        }
                                        o.lanes |= i, u = o.alternate, u !== null && (u.lanes |= i), Dl(o.return, i, t), l.lanes |= i;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (s = o.return, s === null) throw Error(C(341));
                                s.lanes |= i, l = s.alternate, l !== null && (l.lanes |= i), Dl(s, i, t), s = o.sibling
                            } else s = o.child;
                            if (s !== null) s.return = o;
                            else
                                for (s = o; s !== null;) {
                                    if (s === t) { s = null; break }
                                    if (o = s.sibling, o !== null) { o.return = s.return, s = o; break }
                                    s = s.return
                                }
                            o = s
                        }
                Te(e, t, r.children, i),
                t = t.child
            }
            return t;
        case 9:
            return r = t.type, n = t.pendingProps.children, Ji(t, i), r = tt(r), n = n(r), t.flags |= 1, Te(e, t, n, i), t.child;
        case 14:
            return n = t.type, r = lt(n, t.pendingProps), r = lt(n.type, r), Sc(e, t, n, r, i);
        case 15:
            return uf(e, t, t.type, t.pendingProps, i);
        case 17:
            return n = t.type, r = t.pendingProps, r = t.elementType === n ? r : lt(n, r), ro(e, t), t.tag = 1, Ne(n) ? (e = !0, wo(t)) : e = !1, Ji(t, i), zh(t, n, r), Hl(t, n, r, i), Ul(null, t, n, !0, e, i);
        case 19:
            return pf(e, t, i);
        case 22:
            return cf(e, t, i)
    }
    throw Error(C(156, t.tag))
};

function Rf(e, t) { return th(e, t) }

function Wv(e, t, i, n) { this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null }

function Je(e, t, i, n) { return new Wv(e, t, i, n) }

function iu(e) { return e = e.prototype, !(!e || !e.isReactComponent) }

function Uv(e) { if (typeof e == "function") return iu(e) ? 1 : 0; if (e != null) { if (e = e.$$typeof, e === ba) return 11; if (e === xa) return 14 } return 2 }

function ti(e, t) { var i = e.alternate; return i === null ? (i = Je(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 14680064, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i }

function lo(e, t, i, n, r, o) {
    var s = 2;
    if (n = e, typeof e == "function") iu(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case Fi:
            return yi(i.children, r, o, t);
        case wa:
            s = 8, r |= 8;
            break;
        case dl:
            return e = Je(12, i, t, r | 2), e.elementType = dl, e.lanes = o, e;
        case hl:
            return e = Je(13, i, t, r), e.elementType = hl, e.lanes = o, e;
        case fl:
            return e = Je(19, i, t, r), e.elementType = fl, e.lanes = o, e;
        case Fd:
            return Jo(i, r, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Nd:
                    s = 10;
                    break e;
                case zd:
                    s = 9;
                    break e;
                case ba:
                    s = 11;
                    break e;
                case xa:
                    s = 14;
                    break e;
                case jt:
                    s = 16, n = null;
                    break e
            }
            throw Error(C(130, e == null ? e : typeof e, ""))
    }
    return t = Je(s, i, t, r), t.elementType = e, t.type = n, t.lanes = o, t
}

function yi(e, t, i, n) { return e = Je(7, e, n, t), e.lanes = i, e }

function Jo(e, t, i, n) { return e = Je(22, e, n, t), e.elementType = Fd, e.lanes = i, e.stateNode = { isHidden: !1 }, e }

function Qs(e, t, i) { return e = Je(6, e, null, t), e.lanes = i, e }

function Bs(e, t, i) { return t = Je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = i, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t }

function Qv(e, t, i, n, r) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Es(0), this.expirationTimes = Es(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Es(0), this.identifierPrefix = n, this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null }

function nu(e, t, i, n, r, o, s, l, u) { return e = new Qv(e, t, i, l, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Je(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: n, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Oa(o), e }

function Bv(e, t, i) { var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: zi, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: i } }

function Mf(e) {
    if (!e) return ni;
    e = e._reactInternals;
    e: {
        if (Ei(e) !== e || e.tag !== 1) throw Error(C(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ne(t.type)) { t = t.stateNode.__reactInternalMemoizedMergedChildContext; break e }
            }
            t = t.return
        } while (t !== null);
        throw Error(C(171))
    }
    if (e.tag === 1) { var i = e.type; if (Ne(i)) return Lh(e, i, t) }
    return t
}

function _f(e, t, i, n, r, o, s, l, u) { return e = nu(i, n, !0, e, r, o, s, l, u), e.context = Mf(null), i = e.current, n = Se(), r = ei(i), o = _t(n, r), o.callback = t != null ? t : null, Zt(i, o, r), e.current.lanes = r, mr(e, r, n), ze(e, n), e }

function es(e, t, i, n) {
    var r = t.current,
        o = Se(),
        s = ei(r);
    return i = Mf(i), t.context === null ? t.context = i : t.pendingContext = i, t = _t(o, s), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = Zt(r, t, s), e !== null && (ht(e, r, s, o), to(e, r, s)), s
}

function Io(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function zc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var i = e.retryLane;
        e.retryLane = i !== 0 && i < t ? i : t
    }
}

function ru(e, t) { zc(e, t), (e = e.alternate) && zc(e, t) }

function Kv() { return null }
var If = typeof reportError == "function" ? reportError : function(e) { console.error(e) };

function ou(e) { this._internalRoot = e }
ts.prototype.render = ou.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(C(409));
    es(e, t, null, null)
};
ts.prototype.unmount = ou.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ci(function() { es(null, e, null, null) }), t[Vt] = null
    }
};

function ts(e) { this._internalRoot = e }
ts.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = ah();
        e = { blockedOn: null, target: e, priority: t };
        for (var i = 0; i < Ut.length && t !== 0 && t < Ut[i].priority; i++);
        Ut.splice(i, 0, e), i === 0 && ch(e)
    }
};

function su(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) }

function is(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")) }

function Fc() {}

function Gv(e, t, i, n, r) {
    if (r) {
        if (typeof n == "function") {
            var o = n;
            n = function() {
                var c = Io(s);
                o.call(c)
            }
        }
        var s = _f(t, n, e, 0, null, !1, !1, "", Fc);
        return e._reactRootContainer = s, e[Vt] = s.current, rr(e.nodeType === 8 ? e.parentNode : e), Ci(), s
    }
    for (; r = e.lastChild;) e.removeChild(r);
    if (typeof n == "function") {
        var l = n;
        n = function() {
            var c = Io(u);
            l.call(c)
        }
    }
    var u = nu(e, 0, !1, null, null, !1, !1, "", Fc);
    return e._reactRootContainer = u, e[Vt] = u.current, rr(e.nodeType === 8 ? e.parentNode : e), Ci(function() { es(t, u, i, n) }), u
}

function ns(e, t, i, n, r) {
    var o = i._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof r == "function") {
            var l = r;
            r = function() {
                var u = Io(s);
                l.call(u)
            }
        }
        es(t, s, e, r)
    } else s = Gv(i, t, e, r, n);
    return Io(s)
}
sh = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var i = Nn(t.pendingLanes);
                i !== 0 && (Sa(t, i | 1), ze(t, se()), (j & 6) === 0 && (dn = se() + 500, si()))
            }
            break;
        case 13:
            Ci(function() {
                var n = Nt(e, 1);
                if (n !== null) {
                    var r = Se();
                    ht(n, e, 1, r)
                }
            }), ru(e, 1)
    }
};
Ea = function(e) {
    if (e.tag === 13) {
        var t = Nt(e, 134217728);
        if (t !== null) {
            var i = Se();
            ht(t, e, 134217728, i)
        }
        ru(e, 134217728)
    }
};
lh = function(e) {
    if (e.tag === 13) {
        var t = ei(e),
            i = Nt(e, t);
        if (i !== null) {
            var n = Se();
            ht(i, e, t, n)
        }
        ru(e, t)
    }
};
ah = function() { return Q };
uh = function(e, t) { var i = Q; try { return Q = e, t() } finally { Q = i } };
Cl = function(e, t, i) {
    switch (t) {
        case "input":
            if (vl(e, i), t = i.name, i.type === "radio" && t != null) {
                for (i = e; i.parentNode;) i = i.parentNode;
                for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < i.length; t++) {
                    var n = i[t];
                    if (n !== e && n.form === e.form) {
                        var r = Ko(n);
                        if (!r) throw Error(C(90));
                        Od(n), vl(n, r)
                    }
                }
            }
            break;
        case "textarea":
            jd(e, i);
            break;
        case "select":
            t = i.value, t != null && Yi(e, !!i.multiple, t, !1)
    }
};
Yd = Ja;
Xd = Ci;
var Yv = { usingClientEntryPoint: !1, Events: [gr, ji, Ko, Kd, Gd, Ja] },
    Ln = { findFiberByHostInstance: fi, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
    Xv = { bundleType: Ln.bundleType, version: Ln.version, rendererPackageName: Ln.rendererPackageName, rendererConfig: Ln.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Dt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) { return e = Jd(e), e === null ? null : e.stateNode }, findFiberByHostInstance: Ln.findFiberByHostInstance || Kv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") { var Br = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!Br.isDisabled && Br.supportsFiber) try { Wo = Br.inject(Xv), Tt = Br } catch {} }
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yv;
Ge.createPortal = function(e, t) { var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!su(t)) throw Error(C(200)); return Bv(e, t, null, i) };
Ge.createRoot = function(e, t) {
    if (!su(e)) throw Error(C(299));
    var i = !1,
        n = "",
        r = If;
    return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (r = t.onRecoverableError)), t = nu(e, 1, !1, null, null, i, !1, n, r), e[Vt] = t.current, rr(e.nodeType === 8 ? e.parentNode : e), new ou(t)
};
Ge.findDOMNode = function(e) { if (e == null) return null; if (e.nodeType === 1) return e; var t = e._reactInternals; if (t === void 0) throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e))); return e = Jd(t), e = e === null ? null : e.stateNode, e };
Ge.flushSync = function(e) { return Ci(e) };
Ge.hydrate = function(e, t, i) { if (!is(t)) throw Error(C(200)); return ns(null, e, t, !0, i) };
Ge.hydrateRoot = function(e, t, i) {
    if (!su(e)) throw Error(C(405));
    var n = i != null && i.hydratedSources || null,
        r = !1,
        o = "",
        s = If;
    if (i != null && (i.unstable_strictMode === !0 && (r = !0), i.identifierPrefix !== void 0 && (o = i.identifierPrefix), i.onRecoverableError !== void 0 && (s = i.onRecoverableError)), t = _f(t, null, e, 1, i != null ? i : null, r, !1, o, s), e[Vt] = t.current, rr(e), n)
        for (e = 0; e < n.length; e++) i = n[e], r = i._getVersion, r = r(i._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, r] : t.mutableSourceEagerHydrationData.push(i, r);
    return new ts(t)
};
Ge.render = function(e, t, i) { if (!is(t)) throw Error(C(200)); return ns(null, e, t, !1, i) };
Ge.unmountComponentAtNode = function(e) { if (!is(e)) throw Error(C(40)); return e._reactRootContainer ? (Ci(function() { ns(null, null, e, !1, function() { e._reactRootContainer = null, e[Vt] = null }) }), !0) : !1 };
Ge.unstable_batchedUpdates = Ja;
Ge.unstable_renderSubtreeIntoContainer = function(e, t, i, n) { if (!is(i)) throw Error(C(200)); if (e == null || e._reactInternals === void 0) throw Error(C(38)); return ns(e, t, i, !1, n) };
Ge.version = "18.2.0-next-9e3b772b8-20220608";

function $f() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($f) } catch (e) { console.error(e) } }
$f(), Md.exports = Ge;
var Dc = Md.exports;
ul.createRoot = Dc.createRoot, ul.hydrateRoot = Dc.hydrateRoot;
var qv = X.exports.createContext({ color: "currentColor", size: "1em", weight: "regular", mirrored: !1 }),
    kr = function(t, i, n) { var r = n.get(t); return r ? r(i) : (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), null) };

function Oc(e, t) {
    if (e == null) return {};
    var i = {},
        n = Object.keys(e),
        r, o;
    for (o = 0; o < n.length; o++) r = n[o], !(t.indexOf(r) >= 0) && (i[r] = e[r]);
    return i
}
var rs = { exports: {} },
    os = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zv = X.exports,
    Jv = Symbol.for("react.element"),
    eg = Symbol.for("react.fragment"),
    tg = Object.prototype.hasOwnProperty,
    ig = Zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    ng = { key: !0, ref: !0, __self: !0, __source: !0 };

function Vf(e, t, i) {
    var n, r = {},
        o = null,
        s = null;
    i !== void 0 && (o = "" + i), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (n in t) tg.call(t, n) && !ng.hasOwnProperty(n) && (r[n] = t[n]);
    if (e && e.defaultProps)
        for (n in t = e.defaultProps, t) r[n] === void 0 && (r[n] = t[n]);
    return { $$typeof: Jv, type: e, key: o, ref: s, props: r, _owner: ig.current }
}
os.Fragment = eg;
os.jsx = Vf;
os.jsxs = Vf;
rs.exports = os;
const g = rs.exports.jsx,
    M = rs.exports.jsxs,
    U = rs.exports.Fragment;
var Nf = X.exports.forwardRef(function(e, t) {
    var i = e.alt,
        n = e.color,
        r = e.size,
        o = e.weight,
        s = e.mirrored,
        l = e.children,
        u = e.renderPath,
        c = Oc(e, ["alt", "color", "size", "weight", "mirrored", "children", "renderPath"]),
        a = X.exports.useContext(qv),
        d = a.color,
        p = d === void 0 ? "currentColor" : d,
        k = a.size,
        b = a.weight,
        w = b === void 0 ? "regular" : b,
        z = a.mirrored,
        f = z === void 0 ? !1 : z,
        h = Oc(a, ["color", "size", "weight", "mirrored"]);
    return M("svg", {...Object.assign({ ref: t, xmlns: "http://www.w3.org/2000/svg", width: r != null ? r : k, height: r != null ? r : k, fill: n != null ? n : p, viewBox: "0 0 256 256", transform: s || f ? "scale(-1, 1)" : void 0 }, h, c), children: [!!i && g("title", { children: i }), l, g("rect", { width: "256", height: "256", fill: "none" }), u(o != null ? o : w, n != null ? n : p)] })
});
Nf.displayName = "IconBase";
var wr = Nf,
    Pi = new Map;
Pi.set("bold", function(e) { return M(U, { children: [g("rect", { x: "40", y: "40", width: "176", height: "176", rx: "8", transform: "translate(256) rotate(90)", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "24" }), g("polyline", { points: "134.1 94.1 168 128 134.1 161.9", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "24" }), g("line", { x1: "88", y1: "128", x2: "168", y2: "128", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "24" })] }) });
Pi.set("duotone", function(e) { return M(U, { children: [g("rect", { x: "40", y: "40", width: "176", height: "176", rx: "8", transform: "translate(256) rotate(90)", opacity: "0.2" }), g("rect", { x: "40", y: "40", width: "176", height: "176", rx: "8", transform: "translate(256) rotate(90)", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" }), g("polyline", { points: "134.1 94.1 168 128 134.1 161.9", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" }), g("line", { x1: "88", y1: "128", x2: "168", y2: "128", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" })] }) });
Pi.set("fill", function() { return g(U, { children: g("path", { d: "M48,224H208a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H48A16,16,0,0,0,32,48V208A16,16,0,0,0,48,224Zm80.4-56.4a8,8,0,0,1,0-11.3L148.7,136H88a8,8,0,0,1,0-16h60.7L128.4,99.7a8,8,0,0,1,11.3-11.3l33.9,33.9a8.7,8.7,0,0,1,1.8,2.6,8.5,8.5,0,0,1,.6,3.1,7.7,7.7,0,0,1-.6,3,8,8,0,0,1-1.8,2.7l-33.9,33.9A8,8,0,0,1,128.4,167.6Z" }) }) });
Pi.set("light", function(e) { return M(U, { children: [g("rect", { x: "40", y: "40", width: "176", height: "176", rx: "8", transform: "translate(256) rotate(90)", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "12" }), g("polyline", { points: "134.1 94.1 168 128 134.1 161.9", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "12" }), g("line", { x1: "88", y1: "128", x2: "168", y2: "128", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "12" })] }) });
Pi.set("thin", function(e) { return M(U, { children: [g("rect", { x: "40", y: "40", width: "176", height: "176", rx: "8", transform: "translate(256) rotate(90)", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "8" }), g("polyline", { points: "134.1 94.1 168 128 134.1 161.9", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "8" }), g("line", { x1: "88", y1: "128", x2: "168", y2: "128", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "8" })] }) });
Pi.set("regular", function(e) { return M(U, { children: [g("rect", { x: "40", y: "40", width: "176", height: "176", rx: "8", transform: "translate(256) rotate(90)", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" }), g("polyline", { points: "134.1 94.1 168 128 134.1 161.9", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" }), g("line", { x1: "88", y1: "128", x2: "168", y2: "128", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" })] }) });
var rg = function(t, i) { return kr(t, i, Pi) },
    zf = X.exports.forwardRef(function(e, t) { return g(wr, {...Object.assign({ ref: t }, e, { renderPath: rg }) }) });
zf.displayName = "ArrowSquareRight";
var og = zf,
    Ai = new Map;
Ai.set("bold", function(e) { return M(U, { children: [g("circle", { cx: "128", cy: "128", r: "96", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "24" }), g("path", { d: "M168,88H152a23.9,23.9,0,0,0-24,24V224", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "24" }), g("line", { x1: "96", y1: "144", x2: "160", y2: "144", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "24" })] }) });
Ai.set("duotone", function(e) { return M(U, { children: [g("circle", { cx: "128", cy: "128", r: "96", opacity: "0.2" }), g("circle", { cx: "128", cy: "128", r: "96", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" }), g("path", { d: "M168,88H152a23.9,23.9,0,0,0-24,24V224", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" }), g("line", { x1: "96", y1: "144", x2: "160", y2: "144", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" })] }) });
Ai.set("fill", function() { return g(U, { children: g("path", { d: "M232,128a104.3,104.3,0,0,1-91.5,103.3,4.1,4.1,0,0,1-4.5-4V152h24a8,8,0,0,0,8-8.5,8.2,8.2,0,0,0-8.3-7.5H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.5,8.2,8.2,0,0,0-8.3-7.5H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.5,8.2,8.2,0,0,0,8.3,7.5H120v75.3a4,4,0,0,1-4.4,4C62.8,224.9,22,179,24.1,124.1A104,104,0,0,1,232,128Z" }) }) });
Ai.set("light", function(e) { return M(U, { children: [g("circle", { cx: "128", cy: "128", r: "96", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "12" }), g("path", { d: "M168,88H152a23.9,23.9,0,0,0-24,24V224", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "12" }), g("line", { x1: "96", y1: "144", x2: "160", y2: "144", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "12" })] }) });
Ai.set("thin", function(e) { return M(U, { children: [g("circle", { cx: "128", cy: "128", r: "96", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "8" }), g("path", { d: "M168,88H152a23.9,23.9,0,0,0-24,24V224", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "8" }), g("line", { x1: "96", y1: "144", x2: "160", y2: "144", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "8" })] }) });
Ai.set("regular", function(e) { return M(U, { children: [g("circle", { cx: "128", cy: "128", r: "96", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" }), g("path", { d: "M168,88H152a23.9,23.9,0,0,0-24,24V224", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" }), g("line", { x1: "96", y1: "144", x2: "160", y2: "144", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" })] }) });
var sg = function(t, i) { return kr(t, i, Ai) },
    Ff = X.exports.forwardRef(function(e, t) { return g(wr, {...Object.assign({ ref: t }, e, { renderPath: sg }) }) });
Ff.displayName = "FacebookLogo";
var lg = Ff,
    Li = new Map;
Li.set("bold", function(e) { return M(U, { children: [g("circle", { cx: "128", cy: "128", r: "34", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "24" }), g("rect", { x: "32", y: "32", width: "192", height: "192", rx: "48", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "24" }), g("circle", { cx: "180", cy: "76", r: "16" })] }) });
Li.set("duotone", function(e) { return M(U, { children: [g("path", { d: "M172,36H84A48,48,0,0,0,36,84v88a48,48,0,0,0,48,48h88a48,48,0,0,0,48-48V84A48,48,0,0,0,172,36ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z", opacity: "0.2" }), g("circle", { cx: "128", cy: "128", r: "40", fill: "none", stroke: e, strokeMiterlimit: "10", strokeWidth: "16" }), g("rect", { x: "36", y: "36", width: "184", height: "184", rx: "48", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" }), g("circle", { cx: "180", cy: "76", r: "12" })] }) });
Li.set("fill", function() { return M(U, { children: [g("circle", { cx: "128", cy: "128", r: "32" }), g("path", { d: "M172,28H84A56,56,0,0,0,28,84v88a56,56,0,0,0,56,56h88a56,56,0,0,0,56-56V84A56,56,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48,48,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z" })] }) });
Li.set("light", function(e) { return M(U, { children: [g("circle", { cx: "128", cy: "128", r: "40", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "12" }), g("rect", { x: "36", y: "36", width: "184", height: "184", rx: "48", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "12" }), g("circle", { cx: "180", cy: "76", r: "10" })] }) });
Li.set("thin", function(e) { return M(U, { children: [g("circle", { cx: "128", cy: "128", r: "40", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "8" }), g("rect", { x: "36", y: "36", width: "184", height: "184", rx: "48", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "8" }), g("circle", { cx: "180", cy: "76", r: "8" })] }) });
Li.set("regular", function(e) { return M(U, { children: [g("circle", { cx: "128", cy: "128", r: "40", fill: "none", stroke: e, strokeMiterlimit: "10", strokeWidth: "16" }), g("rect", { x: "36", y: "36", width: "184", height: "184", rx: "48", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" }), g("circle", { cx: "180", cy: "76", r: "12" })] }) });
var ag = function(t, i) { return kr(t, i, Li) },
    Df = X.exports.forwardRef(function(e, t) { return g(wr, {...Object.assign({ ref: t }, e, { renderPath: ag }) }) });
Df.displayName = "InstagramLogo";
var ug = Df,
    Ri = new Map;
Ri.set("bold", function(e) { return M(U, { children: [g("line", { x1: "40", y1: "128", x2: "216", y2: "128", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "24" }), g("line", { x1: "40", y1: "64", x2: "216", y2: "64", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "24" }), g("line", { x1: "40", y1: "192", x2: "216", y2: "192", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "24" })] }) });
Ri.set("duotone", function(e) { return M(U, { children: [g("line", { x1: "40", y1: "128", x2: "216", y2: "128", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" }), g("line", { x1: "40", y1: "64", x2: "216", y2: "64", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" }), g("line", { x1: "40", y1: "192", x2: "216", y2: "192", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" })] }) });
Ri.set("fill", function() { return M(U, { children: [g("path", { d: "M216,120H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }), g("path", { d: "M40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z" }), g("path", { d: "M216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" })] }) });
Ri.set("light", function(e) { return M(U, { children: [g("line", { x1: "40", y1: "128", x2: "216", y2: "128", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "12" }), g("line", { x1: "40", y1: "64", x2: "216", y2: "64", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "12" }), g("line", { x1: "40", y1: "192", x2: "216", y2: "192", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "12" })] }) });
Ri.set("thin", function(e) { return M(U, { children: [g("line", { x1: "40", y1: "128", x2: "216", y2: "128", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "8" }), g("line", { x1: "40", y1: "64", x2: "216", y2: "64", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "8" }), g("line", { x1: "40", y1: "192", x2: "216", y2: "192", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "8" })] }) });
Ri.set("regular", function(e) { return M(U, { children: [g("line", { x1: "40", y1: "128", x2: "216", y2: "128", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" }), g("line", { x1: "40", y1: "64", x2: "216", y2: "64", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" }), g("line", { x1: "40", y1: "192", x2: "216", y2: "192", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" })] }) });
var cg = function(t, i) { return kr(t, i, Ri) },
    Of = X.exports.forwardRef(function(e, t) { return g(wr, {...Object.assign({ ref: t }, e, { renderPath: cg }) }) });
Of.displayName = "List";
var dg = Of,
    Mi = new Map;
Mi.set("bold", function(e) { return M(U, { children: [g("line", { x1: "200", y1: "56", x2: "56", y2: "200", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "24" }), g("line", { x1: "200", y1: "200", x2: "56", y2: "56", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "24" })] }) });
Mi.set("duotone", function(e) { return M(U, { children: [g("line", { x1: "200", y1: "56", x2: "56", y2: "200", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" }), g("line", { x1: "200", y1: "200", x2: "56", y2: "56", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" })] }) });
Mi.set("fill", function() { return g(U, { children: g("path", { d: "M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z" }) }) });
Mi.set("light", function(e) { return M(U, { children: [g("line", { x1: "200", y1: "56", x2: "56", y2: "200", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "12" }), g("line", { x1: "200", y1: "200", x2: "56", y2: "56", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "12" })] }) });
Mi.set("thin", function(e) { return M(U, { children: [g("line", { x1: "200", y1: "56", x2: "56", y2: "200", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "8" }), g("line", { x1: "200", y1: "200", x2: "56", y2: "56", fill: "none", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "8" })] }) });
Mi.set("regular", function(e) { return M(U, { children: [g("line", { x1: "200", y1: "56", x2: "56", y2: "200", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" }), g("line", { x1: "200", y1: "200", x2: "56", y2: "56", stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "16" })] }) });
var hg = function(t, i) { return kr(t, i, Mi) },
    Hf = X.exports.forwardRef(function(e, t) { return g(wr, {...Object.assign({ ref: t }, e, { renderPath: hg }) }) });
Hf.displayName = "X";
var fg = Hf;

function pg() { const e = "cursor-pointer transition-transform hover:translate-x-1 sm:text-xs"; return M("footer", { className: "sticky top-[100vh] bg-blue-900 p-4 ", children: [M("div", { className: "flex justify-between gap-2 text-white", children: [M("nav", { className: "flex flex-col gap-2", children: [g("span", { className: e, children: "Sobre a Escola" }), g("span", { className: e, children: "Estrutura" }), g("span", { className: e, children: "Contato/Localiza\xE7\xE3o" }), g("span", { className: e, children: "Trabalhe Conosco" })] }), M("nav", { className: "flex flex-col gap-2", children: [g("span", { className: e, children: "Agenda" }), g("span", { className: e, children: "Pol\xEDtica de Privacidade" }), g("span", { className: e, children: "Not\xEDcias" }), g("span", { className: e, children: "Cursos T\xE9cnicos" })] }), M("nav", { className: "flex flex-col gap-2", children: [g("span", { className: e, children: "Portal Acad\xEAmico (aluno)" }), g("span", { className: e, children: "Educa\xE7\xE3o B\xE1sica" }), g("span", { className: e, children: "Portal Acad\xEAmico (Prof.)" }), g("span", { className: e, children: "Hor\xE1rios EFII e EM" })] })] }), M("div", { className: "flex justify-between mt-4", children: [g("span", { className: "text-white", children: " \xA9 C\xE1ssio Rodrigues - 2022." }), M("div", { className: "flex gap-4", children: [g(lg, { size: 32, className: "text-white transition-transform hover:-translate-y-2 cursor-pointer", weight: "bold" }), g(ug, { size: 32, className: "text-white transition-transform hover:-translate-y-2 cursor-pointer", weight: "bold" })] })] })] }) }
var mg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAACXBIWXMAAAsSAAALEgHS3X78AAALUElEQVR4nO2dvXLVRhTHD5n01zwBRDwAykAfM+M0auIUSYtpSIlT4Q7T4QpTQoNp7SJOowZmMH08yA+Qjf0E5j6BMzscmbVW0tU5+yHt9fnNMFxLd69Wq/+es3t2tXvj4uICBGEo30lJCRREMAKJ730WlyrzDQDQ/74AQAUAh1lRVdYX/bACAOsAsAoAt41f1Nc+AoA9/DwZVJnr/OaY51jsZUW15+taXgWDD+4n/PwLADxTZX4GANs+M61/DwA2AWBmnfl2bf2dXfx/NFSZr2Be+/IbkiOfvx3DJd0CgLeqzCtV5rl1lsYKFsCzAYU/w+9VmC46qsxX8fpD8psEMdswd/XDdhTNkWHBSNeNLRp0zx+xwiwNsRu9MwfR7OLD53AX00cBxfI21vViMkYvqRYNpcbrttET6yiNhzEam1gZllIsMGK3ekas8ZvWER4bvm6gB5+N+8kxZhzmoSrz29bRdnxZhnXriEfQFXHdZhKMHbgbajl8PYTQPRVflnCyjC2YoDW+gyDtGGyTLbV1gQkI5hbBLfniNNDvxozejsYUxpKGCGZuHeETSjCuQckkSGXw0Vd4+8Q6IpDwPZYUikMcH3Jlal3eB1lRDa4MONTw0ToRkVQsjH7QZ9ZRGvNlj5HEIKX5MK5Bt42pTXdIkZQEo033I+voMB6hWxMcSW3GnXYpvxJ6TXMUi7giT6Q4RfMQu+LPe4Sjj7/Crq6IxSOp9JKafMGZdNsoihX8vzKmhwoBSFUwJrU4vE5FFNqRtwYEEiIYgYQIRiAhghFIiGAEEiIYgYQIRiAhghFIiGAEEiIYgYQIRiAhghFIiGAEEiIYgYQIRiAhghFIiGAEEiIYgYQIRiAhghFIiGAEEiIYgYQIRiCR/HtJuILVurFw8xfc4yDUwkHXmqQFo8p8t2P93peqzF/hHgeyYoNHknVJqsz3OsRS80TehvRPkoJRZb6JK3sv4q4q81F3M1k2UrUwlPVwl37t3JgkJxhcy5+yQ8gM14YTPJCiheFsYzPKfknLyHWJw1yLNXRjkMrCzq7EEEwMtze6axXBpHWN0fEtmOBLhVEWQjYIuqcBNsTJO6Uw74WK18Clb8FwMsepmZxFnkNursXpunPugeOSvFbiKQiG04PhFMImcdvAQaDlGhJEbMK5h9F7e14Fw9zUnLpLLDBD/rNAe1hzNx/l3ANnP6ZJWxjgmFrGLrPcVb2f4DZ7XsAhCu6mGaR74AYffQ++hhAMR9EkweDUBe5WNrseNlyv93d8aZ0Yxglj+gVHMJ+sI45MRTCcwuC6Au2aPrtYGrQsLlsNc/I+eoMXAgmG45s5ez8e9iwdP4S3qswPKd1tbZlUmR85WBbAPFPd0QqzrZeEYDiZ1AOEJNGgb3bd7V63P/5D4ay39aL0MW2NUCifmQ/OZJfRruBupupdMDcuLi6sg66oMq8YLfp3WVGR3YQq81Pi6PUi5kZBswJyPZxlRUUOIGpBMxrX86yorArgSqihAU4vprWGD8B3QG6GVuSnAPtccyrEbWZPLMj+UFMSzIxjejG8/so6MT1eMYcCuBUiyLBDEMFgAI8T+uYG1rYnvmPsCefe0OJyZwwmZWGAmeFbnO4uNiJXPe9v7Qudp3VmAG2T6Rb/DvW2REjBcHswLCszUdHovKxy3pFytC7BdqELJhgsJE6k8RYGxjjXrFA0rlsW++AMxcLt2nKti+4dBdsQNfQEKq7St7kjy/iA8pHbNPraOVcsOHTxzDoxDNfYVC9BBZMVFXeD8pmLWdXuKSuqHDcSjc1zfW3HNoTLQw+6KWqMKZrcns8v1Ohvk6yo9LV/DDEI14K+xo94TTb44h03mvwu9DvlQSK9TRyisXM07c6FgL2vTeackj5OMNzvXLPRFX22Tgznh2URzIbD6O4JNh69dBNxXskGBgm5kdx6AHHP17xcbLOdOuSJNbRCJYpgwH3MR8cVnNxTG1ij1429r7tcwSdjP+xDh55PKyiWIwfr580SLyKmYHTN/midGE6UGjQGzMFak+eubaehRBMM8EddTZZONLhsCWcSeQ1rBJxL7BfZNhwjsQ+xgJMH59lUjmKBwK/PWES1MPC1oHSb4S/rBI1PDuMzo+OhzVKjR8CjLmcSXTDgxwwDBgTXfTdAQ4NtuUMPc21OMDgZlbHerd70ELrXPa4j7rjTGGBQ7qMHscxju6KaUSwMfJtJVnma1aZd1MZUV87E7vuex6DhryEHGPsYTTDgJ7LZ5DlzknUQsK2yvWDxRip/ZkUVdICxj1EFA+5R4DbmOHg3mnCMuSzcKQpdjB5WGF0wEEY0gMLZQ+FEcVVoMTcdhx26mEQMahKCgXCiqTlB8XhfIdxYiXwjwMBmzWQClpMRDIQXTc0ZxkD0v1Pq4CF2i2/jzL5Vz+9EtTGp6PakBAPxRNNk3nhLsBaR+T6z75fahjC5oZDJCQa+tQWORnhAU+KRjzk2vpnksqsTmZc7FtraPZiiWGCqFsakZ8eSZWTyY2STFwx8G7DcW3IXFW1OiwtJrASOYXDdM3lnnUwfL5PHY5GEhTHBbu1uwJhHLM5wA7Ck5vckJ5ga7H5vR4iD+Gb0oQsXkhVMTULCSVooNckLpgZdlcsyqKH4hK+jLMXU0qURTE2ksZ1FnOGsumgDn7FYOsGYoHhWUUCrAbvlc2N8aqm3QF5qwTRBAeX4rx4n6np5rYsTfKntCN9UrFKbV+zCtRJMHyimrvd7TmXj9K+IYAQS12XPR8ETIhiBhAhGICGCEUiIYAQSIhiBhAhGICGCEUiIYAQSIhiBhAhGICGCEUiIYAQSIhiBhAhGICGCEUiIYAQS3/d9WZX5v/pNVetEg6yobqgyfw0Aj62TXzkAgDdZUX1o/P57AFjDP/X5Pxrn9bn39d/6Oo3z9wDgNwB4ahw+B4CdrKh2rFx0p1F4/Z3Gd/W9/2sc2mr5jnnfH7Ki+pmbDohlvuCerHJQZT50euVlfprEsjD6Zt6rMn9hnWGiylz/5j+NQtLcBIAXuuDxwV2iyvxxR5rMSHOvJ0dPm785EG66hXDKwYVeC9Pgj6yo3lhH27m0Fmgl9vEGdMGdd9V+QiFl+Js1lzVYlfk+ClR/R9fiuuau4d81v2dFddCSZl+V+f2sqM6tC+M96LKwzvTDTddb5tRyaFilXuvdRXALg25oyzikRXPT+iINszYdNARoPpQ1w2KYabZqsWAef0e3BFjAXa5V8xgLmwo3XR+ccnAilks6MD7fNNotXMz0x+ZvoGUwj62hQM00V9pSLXlclD+ua/XmkhFSOVipGVBc0mtsqF1hiCnTmVdlrozGnKuFMX1ym+t4Y1zjuKUR2ZZGGZ+7fP4Bmvl7uj3U5y48pVtU5tRycIYimGRoPhCPrmAHa2rdoDywvtEON50TBGEOJlSjd1k5x/bYa6MhOwRuusmV+XUJ3LWZaxb4AGvzrh/8oMYkN93UiOKSsNHZ5m+5D7K3PaTK/B/jgWyhLzex0jTyp6yzV9kyuqSUB89N1wWpHFzDGRA5cFdzbvRSzAfTVoDmMbPRZvZyrrRPUJxmug/YY+hM05LHtl7UJRgqILsKbroeOu+prRy6f2Y4wQWDDU6zO7ljBMXMwtM9iKeNdFfiDOZvGJ/XGhFk87PKiuq4Jc0LjJDW19o3aqoa+FC3mBaSm64NTjk40bt6g8expBotFjOIV4e2961vXmXhOFML5xjdPDbSPG5Ee5sojAAfQ/tY0p2sqJTxe08bD6ZrLGlQOmCMJXHKoS3dZCK9yAFmeqt5AiOudxrR4Jo3+ACtkDqa9650+tj9ZiFhw/N+o2YCCkX7+DuUmohtgkXtHQtuujY45eBCr4URhCYyH0YgIYIRhgMA/wOIcniRrx6AKgAAAABJRU5ErkJggg==",
    vg = "./assets/csp-logo.620bff5d.png",
    gg = "./assets/anglo-logo.52cfd397.png";

function yg() {
    const e = "text-blue-900 font-semibold py-3 h-full border-transparent hover:border-blue-900 border-b-4 transition-colors cursor-pointer",
        t = "text-white font-bold",
        [i, n] = X.exports.useState(!1);
    return M("header", { className: "block", children: [M("div", { className: "flex flex-wrap gap-4 items-center justify-between py-2", children: [M("div", { className: "flex items-center gap-4", children: [g("img", { src: "https://static.wixstatic.com/media/f3e530_0fa0f26377614ed8b1a9b40e4294f410~mv2.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20CTSP%20CMYK%20(Apenas%20logo).png", alt: "" }), M("div", { children: [g("strong", { className: "block text-blue-900", children: "Sinodal Progresso" }), g("span", { className: "block text-blue-900 text-sm", children: "Centro Tecnol\xF3gico" })] })] }), M("div", { className: "flex items-center gap-4 xl:hidden", children: [g("img", { className: "w-14", src: mg, alt: "EduConnect-logo" }), g("img", { className: "w-14", src: vg, alt: "CSP Logo" }), g("img", { className: "w-14", src: gg, alt: "Anglo Sistemas de Educa\xE7\xE3o" })] }), g("span", { className: "text-blue-900 text-xl", children: "Um lugar onde nascem os sonhos!" })] }), M("div", { className: "block border-b", children: [M("nav", { className: "flex items-center justify-between h-full lg:hidden", children: [g("span", { className: e, children: "Sobre" }), g("span", { className: e, children: "Educa\xE7\xE3o B\xE1sica" }), g("span", { className: e, children: "Cursos T\xE9cnicos" }), g("span", { className: e, children: "Agenda" }), g("span", { className: e, children: "Not\xEDcias" }), g("span", { className: e, children: "Plurall" }), g("span", { className: e, children: "Portal Acad\xEAmico" }), g("span", { className: e, children: "Lista de Materiais" }), g("span", { className: e, children: "LGPD" })] }), i ? M("div", { className: "bg-blue-900 fixed -top-full left-0 w-screen h-screen z-[80] p-8 translate-y-full transition duration-500 transform", children: [g("span", { onClick: () => n(!1), children: g(fg, { size: 32, color: "#fff" }) }), g("div", { className: "w-full h-full", children: M("nav", { className: "flex flex-col items-center justify-center gap-5 h-full", children: [g("span", { className: t, children: "Sobre" }), g("span", { className: t, children: "Educa\xE7\xE3o B\xE1sica" }), g("span", { className: t, children: "Cursos T\xE9cnicos" }), g("span", { className: t, children: "Agenda" }), g("span", { className: t, children: "Not\xEDcias" }), g("span", { className: t, children: "Plurall" }), g("span", { className: t, children: "Portal Acad\xEAmico" }), g("span", { className: t, children: "Lista de Materiais" }), g("span", { className: t, children: "LGPD" })] }) })] }) : M("div", { className: "flex-col items-center justify-center lg:flex hidden transition duration-100 transform ", onClick: () => n(!0), children: [g("span", { className: "text-xs text-gray-600", children: "Menu" }), g(dg, { size: 40, className: "text-blue-900" })] })] })] })
}

function kg({ children: e }) { return g("div", { className: "px-[10%] min-h-screen", children: e }) }
const q = { allRenderFn: !1, cmpDidLoad: !0, cmpDidUnload: !1, cmpDidUpdate: !0, cmpDidRender: !0, cmpWillLoad: !0, cmpWillUpdate: !0, cmpWillRender: !0, connectedCallback: !0, disconnectedCallback: !0, element: !0, event: !0, hasRenderFn: !0, lifecycle: !0, hostListener: !0, hostListenerTargetWindow: !0, hostListenerTargetDocument: !0, hostListenerTargetBody: !0, hostListenerTargetParent: !1, hostListenerTarget: !0, member: !0, method: !0, mode: !0, observeAttribute: !0, prop: !0, propMutable: !0, reflect: !0, scoped: !0, shadowDom: !0, slot: !0, cssAnnotations: !0, state: !0, style: !0, svg: !0, updatable: !0, vdomAttribute: !0, vdomXlink: !0, vdomClass: !0, vdomFunctional: !0, vdomKey: !0, vdomListener: !0, vdomRef: !0, vdomPropOrAttr: !0, vdomRender: !0, vdomStyle: !0, vdomText: !0, watchCallback: !0, taskQueue: !0, hotModuleReplacement: !1, isDebug: !1, isDev: !1, isTesting: !1, hydrateServerSide: !1, hydrateClientSide: !1, lifecycleDOMEvents: !1, lazyLoad: !1, profile: !1, slotRelocation: !0, appendChildSlotFix: !1, cloneNodeFix: !1, hydratedAttribute: !1, hydratedClass: !0, safari10: !1, scriptDataOpts: !1, shadowDomShim: !1, slotChildNodesFix: !1, propBoolean: !0, propNumber: !0, propString: !0, cssVarShim: !1, constructableCSS: !0, cmpShouldUpdate: !0, devTools: !1, dynamicImportShim: !1, shadowDelegatesFocus: !0, initializeNextTick: !1, asyncLoading: !1, asyncQueue: !1, transformTagName: !1, attachStyles: !0 };
let Vi, jf, ss, Wf = !1,
    $o = !1,
    lu = !1,
    je = !1,
    ia = null,
    na = !1;
const br = typeof window != "undefined" ? window : {};
q.cssVarShim && br.CSS;
const ft = br.document || { head: {} };
br.HTMLElement || class {};
const Ee = { $flags$: 0, $resourcesUrl$: "", jmp: e => e(), raf: e => requestAnimationFrame(e), ael: (e, t, i, n) => e.addEventListener(t, i, n), rel: (e, t, i, n) => e.removeEventListener(t, i, n), ce: (e, t) => new CustomEvent(e, t) },
    ls = q.shadowDomShim && q.shadowDom ? (() => (ft.head.attachShadow + "").indexOf("[native") > -1)() : !0,
    wg = (() => { let e = !1; try { ft.addEventListener("e", null, Object.defineProperty({}, "passive", {get() { e = !0 } })) } catch {} return e })(),
    bg = e => Promise.resolve(e),
    xg = q.constructableCSS ? (() => { try { return new CSSStyleSheet, typeof new CSSStyleSheet().replace == "function" } catch {} return !1 })() : !1,
    Uf = (e, t, i, n) => {
        i && i.map(([r, o, s]) => {
            const l = Tg(e, r),
                u = Cg(t, s),
                c = Sg(r);
            Ee.ael(l, o, u, c), (t.$rmListeners$ = t.$rmListeners$ || []).push(() => Ee.rel(l, o, u, c))
        })
    },
    Cg = (e, t) => i => { try { q.lazyLoad || e.$hostElement$[t](i) } catch (n) { xr(n) } },
    Tg = (e, t) => t & 4 ? ft : t & 8 ? br : t & 16 ? ft.body : e,
    Sg = e => wg ? { passive: (e & 1) !== 0, capture: (e & 2) !== 0 } : (e & 2) !== 0,
    Hc = "http://www.w3.org/1999/xlink",
    Ti = (e, t = "") => () => {},
    jc = new WeakMap,
    Eg = (e, t, i) => {
        let n = zo.get(e);
        xg && i ? (n = n || new CSSStyleSheet, n.replace(t)) : n = t, zo.set(e, n)
    },
    Pg = (e, t, i, n) => {
        let r = Qf(t, i),
            o = zo.get(r);
        if (e = e.nodeType === 11 ? e : ft, o)
            if (typeof o == "string") {
                e = e.head || e;
                let s = jc.get(e),
                    l;
                s || jc.set(e, s = new Set), s.has(r) || (l = ft.createElement("style"), l.innerHTML = o, e.insertBefore(l, e.querySelector("link")), s && s.add(r))
            } else e.adoptedStyleSheets.includes(o) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, o]);
        return r
    },
    Ag = e => {
        const t = e.$cmpMeta$,
            i = e.$hostElement$,
            n = t.$flags$,
            r = Ti("attachStyles", t.$tagName$),
            o = Pg(ls && i.shadowRoot ? i.shadowRoot : i.getRootNode(), t, e.$modeName$);
        n & 10 && (i["s-sc"] = o, i.classList.add(o + "-h"), n & 2 && i.classList.add(o + "-s")), r()
    },
    Qf = (e, t) => "sc-" + (t && e.$flags$ & 32 ? e.$tagName$ + "-" + t : e.$tagName$),
    Lg = e => i0.map(t => t(e)).find(t => !!t),
    Wc = {},
    Rg = "http://www.w3.org/2000/svg",
    Mg = "http://www.w3.org/1999/xhtml",
    _g = e => e != null,
    au = e => (e = typeof e, e === "object" || e === "function"),
    m = (e, t, ...i) => {
        let n = null,
            r = null,
            o = null,
            s = !1,
            l = !1,
            u = [];
        const c = d => { for (let p = 0; p < d.length; p++) n = d[p], Array.isArray(n) ? c(n) : n != null && typeof n != "boolean" && ((s = typeof e != "function" && !au(n)) && (n = String(n)), s && l ? u[u.length - 1].$text$ += n : u.push(s ? Vo(null, n) : n), l = s) };
        if (c(i), t) {
            t.key && (r = t.key), t.name && (o = t.name); {
                const d = t.className || t.class;
                d && (t.class = typeof d != "object" ? d : Object.keys(d).filter(p => d[p]).join(" "))
            }
        }
        if (typeof e == "function") return e(t === null ? {} : t, u, $g);
        const a = Vo(e, null);
        return a.$attrs$ = t, u.length > 0 && (a.$children$ = u), a.$key$ = r, a.$name$ = o, a
    },
    Vo = (e, t) => { const i = { $flags$: 0, $tag$: e, $text$: t, $elm$: null, $children$: null }; return i.$attrs$ = null, i.$key$ = null, i.$name$ = null, i },
    mn = {},
    Ig = e => e && e.$tag$ === mn,
    $g = { forEach: (e, t) => e.map(Uc).forEach(t), map: (e, t) => e.map(Uc).map(t).map(Vg) },
    Uc = e => ({ vattrs: e.$attrs$, vchildren: e.$children$, vkey: e.$key$, vname: e.$name$, vtag: e.$tag$, vtext: e.$text$ }),
    Vg = e => { if (typeof e.vtag == "function") { const i = Object.assign({}, e.vattrs); return e.vkey && (i.key = e.vkey), e.vname && (i.name = e.vname), m(e.vtag, i, ...e.vchildren || []) } const t = Vo(e.vtag, e.vtext); return t.$attrs$ = e.vattrs, t.$children$ = e.vchildren, t.$key$ = e.vkey, t.$name$ = e.vname, t },
    Qc = (e, t, i, n, r, o) => {
        if (i !== n) {
            let s = Xc(e, t),
                l = t.toLowerCase();
            if (t === "class") {
                const u = e.classList,
                    c = Bc(i),
                    a = Bc(n);
                u.remove(...c.filter(d => d && !a.includes(d))), u.add(...a.filter(d => d && !c.includes(d)))
            } else if (t === "style") { for (const u in i)(!n || n[u] == null) && (u.includes("-") ? e.style.removeProperty(u) : e.style[u] = ""); for (const u in n)(!i || n[u] !== i[u]) && (u.includes("-") ? e.style.setProperty(u, n[u]) : e.style[u] = n[u]) } else if (t !== "key")
                if (t === "ref") n && n(e);
                else if (!e.__lookupSetter__(t) && t[0] === "o" && t[1] === "n") t[2] === "-" ? t = t.slice(3) : Xc(br, l) ? t = l.slice(2) : t = l[2] + t.slice(3), i && Ee.rel(e, t, i, !1), n && Ee.ael(e, t, n, !1);
            else {
                const u = au(n);
                if ((s || u && n !== null) && !r) try {
                    if (e.tagName.includes("-")) e[t] = n;
                    else {
                        let a = n == null ? "" : n;
                        t === "list" ? s = !1 : (i == null || e[t] != a) && (e[t] = a)
                    }
                } catch {}
                let c = !1;
                l !== (l = l.replace(/^xlink\:?/, "")) && (t = l, c = !0), n == null || n === !1 ? (n !== !1 || e.getAttribute(t) === "") && (c ? e.removeAttributeNS(Hc, t) : e.removeAttribute(t)) : (!s || o & 4 || r) && !u && (n = n === !0 ? "" : n, c ? e.setAttributeNS(Hc, t, n) : e.setAttribute(t, n))
            }
        }
    },
    Ng = /\s/,
    Bc = e => e ? e.split(Ng) : [],
    Bf = (e, t, i, n) => {
        const r = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$,
            o = e && e.$attrs$ || Wc,
            s = t.$attrs$ || Wc;
        for (n in o) n in s || Qc(r, n, o[n], void 0, i, t.$flags$);
        for (n in s) Qc(r, n, o[n], s[n], i, t.$flags$)
    },
    No = (e, t, i, n) => {
        let r = t.$children$[i],
            o = 0,
            s, l, u;
        if (Wf || (lu = !0, r.$tag$ === "slot" && (Vi && n.classList.add(Vi + "-s"), r.$flags$ |= r.$children$ ? 2 : 1)), r.$text$ !== null) s = r.$elm$ = ft.createTextNode(r.$text$);
        else if (r.$flags$ & 1) s = r.$elm$ = ft.createTextNode("");
        else {
            if (je || (je = r.$tag$ === "svg"), s = r.$elm$ = ft.createElementNS(je ? Rg : Mg, r.$flags$ & 2 ? "slot-fb" : r.$tag$), je && r.$tag$ === "foreignObject" && (je = !1), Bf(null, r, je), _g(Vi) && s["s-si"] !== Vi && s.classList.add(s["s-si"] = Vi), r.$children$)
                for (o = 0; o < r.$children$.length; ++o) l = No(e, r, o, s), l && s.appendChild(l);
            r.$tag$ === "svg" ? je = !1 : s.tagName === "foreignObject" && (je = !0)
        }
        return s["s-hn"] = ss, r.$flags$ & 3 && (s["s-sr"] = !0, s["s-cr"] = jf, s["s-sn"] = r.$name$ || "", u = e && e.$children$ && e.$children$[i], u && u.$tag$ === r.$tag$ && e.$elm$ && fr(e.$elm$, !1)), s
    },
    fr = (e, t) => {
        Ee.$flags$ |= 1;
        const i = e.childNodes;
        for (let n = i.length - 1; n >= 0; n--) {
            const r = i[n];
            r["s-hn"] !== ss && r["s-ol"] && (Yf(r).insertBefore(r, uu(r)), r["s-ol"].remove(), r["s-ol"] = void 0, lu = !0), t && fr(r, t)
        }
        Ee.$flags$ &= -2
    },
    Kf = (e, t, i, n, r, o) => {
        let s = e["s-cr"] && e["s-cr"].parentNode || e,
            l;
        for (s.shadowRoot && s.tagName === ss && (s = s.shadowRoot); r <= o; ++r) n[r] && (l = No(null, i, r, e), l && (n[r].$elm$ = l, s.insertBefore(l, uu(t))))
    },
    Gf = (e, t, i, n, r) => { for (; t <= i; ++t)(n = e[t]) && (r = n.$elm$, Zf(n), $o = !0, r["s-ol"] ? r["s-ol"].remove() : fr(r, !0), r.remove()) },
    zg = (e, t, i, n) => {
        let r = 0,
            o = 0,
            s = 0,
            l = 0,
            u = t.length - 1,
            c = t[0],
            a = t[u],
            d = n.length - 1,
            p = n[0],
            k = n[d],
            b, w;
        for (; r <= u && o <= d;)
            if (c == null) c = t[++r];
            else if (a == null) a = t[--u];
        else if (p == null) p = n[++o];
        else if (k == null) k = n[--d];
        else if (Kr(c, p)) Ni(c, p), c = t[++r], p = n[++o];
        else if (Kr(a, k)) Ni(a, k), a = t[--u], k = n[--d];
        else if (Kr(c, k))(c.$tag$ === "slot" || k.$tag$ === "slot") && fr(c.$elm$.parentNode, !1), Ni(c, k), e.insertBefore(c.$elm$, a.$elm$.nextSibling), c = t[++r], k = n[--d];
        else if (Kr(a, p))(c.$tag$ === "slot" || k.$tag$ === "slot") && fr(a.$elm$.parentNode, !1), Ni(a, p), e.insertBefore(a.$elm$, c.$elm$), a = t[--u], p = n[++o];
        else {
            for (s = -1, l = r; l <= u; ++l)
                if (t[l] && t[l].$key$ !== null && t[l].$key$ === p.$key$) { s = l; break }
            s >= 0 ? (w = t[s], w.$tag$ !== p.$tag$ ? b = No(t && t[o], i, s, e) : (Ni(w, p), t[s] = void 0, b = w.$elm$), p = n[++o]) : (b = No(t && t[o], i, o, e), p = n[++o]), b && Yf(c.$elm$).insertBefore(b, uu(c.$elm$))
        }
        r > u ? Kf(e, n[d + 1] == null ? null : n[d + 1].$elm$, i, n, o, d) : o > d && Gf(t, r, u)
    },
    Kr = (e, t) => e.$tag$ === t.$tag$ ? e.$tag$ === "slot" ? e.$name$ === t.$name$ : e.$key$ === t.$key$ : !1,
    uu = e => e && e["s-ol"] || e,
    Yf = e => (e["s-ol"] ? e["s-ol"] : e).parentNode,
    Ni = (e, t) => {
        const i = t.$elm$ = e.$elm$,
            n = e.$children$,
            r = t.$children$,
            o = t.$tag$,
            s = t.$text$;
        let l;
        s === null ? (je = o === "svg" ? !0 : o === "foreignObject" ? !1 : je, o === "slot" || Bf(e, t, je), n !== null && r !== null ? zg(i, n, t, r) : r !== null ? (e.$text$ !== null && (i.textContent = ""), Kf(i, null, t, r, 0, r.length - 1)) : n !== null && Gf(n, 0, n.length - 1), je && o === "svg" && (je = !1)) : (l = i["s-cr"]) ? l.parentNode.textContent = s : e.$text$ !== s && (i.data = s)
    },
    Xf = e => {
        let t = e.childNodes,
            i, n, r, o, s, l;
        for (n = 0, r = t.length; n < r; n++)
            if (i = t[n], i.nodeType === 1) {
                if (i["s-sr"]) {
                    for (s = i["s-sn"], i.hidden = !1, o = 0; o < r; o++)
                        if (l = t[o].nodeType, t[o]["s-hn"] !== i["s-hn"] || s !== "") { if (l === 1 && s === t[o].getAttribute("slot")) { i.hidden = !0; break } } else if (l === 1 || l === 3 && t[o].textContent.trim() !== "") { i.hidden = !0; break }
                }
                Xf(i)
            }
    },
    ct = [],
    qf = e => {
        let t, i, n, r, o, s, l = 0,
            u = e.childNodes,
            c = u.length;
        for (; l < c; l++) {
            if (t = u[l], t["s-sr"] && (i = t["s-cr"]) && i.parentNode)
                for (n = i.parentNode.childNodes, r = t["s-sn"], s = n.length - 1; s >= 0; s--) i = n[s], !i["s-cn"] && !i["s-nr"] && i["s-hn"] !== t["s-hn"] && (Kc(i, r) ? (o = ct.find(a => a.$nodeToRelocate$ === i), $o = !0, i["s-sn"] = i["s-sn"] || r, o ? o.$slotRefNode$ = t : ct.push({ $slotRefNode$: t, $nodeToRelocate$: i }), i["s-sr"] && ct.map(a => { Kc(a.$nodeToRelocate$, i["s-sn"]) && (o = ct.find(d => d.$nodeToRelocate$ === i), o && !a.$slotRefNode$ && (a.$slotRefNode$ = o.$slotRefNode$)) })) : ct.some(a => a.$nodeToRelocate$ === i) || ct.push({ $nodeToRelocate$: i }));
            t.nodeType === 1 && qf(t)
        }
    },
    Kc = (e, t) => e.nodeType === 1 ? e.getAttribute("slot") === null && t === "" || e.getAttribute("slot") === t : e["s-sn"] === t ? !0 : t === "",
    Zf = e => { e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null), e.$children$ && e.$children$.map(Zf) },
    Fg = (e, t) => {
        const i = e.$hostElement$,
            n = e.$cmpMeta$,
            r = e.$vnode$ || Vo(null, null),
            o = Ig(t) ? t : m(null, null, t);
        ss = i.tagName, n.$attrsToReflect$ && (o.$attrs$ = o.$attrs$ || {}, n.$attrsToReflect$.map(([s, l]) => o.$attrs$[l] = i[s])), o.$tag$ = null, o.$flags$ |= 4, e.$vnode$ = o, o.$elm$ = r.$elm$ = i.shadowRoot || i, Vi = i["s-sc"], jf = i["s-cr"], Wf = ls && (n.$flags$ & 1) !== 0, $o = !1, Ni(r, o); {
            if (Ee.$flags$ |= 1, lu) {
                qf(o.$elm$);
                let s, l, u, c, a, d, p = 0;
                for (; p < ct.length; p++) s = ct[p], l = s.$nodeToRelocate$, l["s-ol"] || (u = ft.createTextNode(""), u["s-nr"] = l, l.parentNode.insertBefore(l["s-ol"] = u, l));
                for (p = 0; p < ct.length; p++)
                    if (s = ct[p], l = s.$nodeToRelocate$, s.$slotRefNode$) {
                        for (c = s.$slotRefNode$.parentNode, a = s.$slotRefNode$.nextSibling, u = l["s-ol"]; u = u.previousSibling;)
                            if (d = u["s-nr"], d && d["s-sn"] === l["s-sn"] && c === d.parentNode && (d = d.nextSibling, !d || !d["s-nr"])) { a = d; break }(!a && c !== l.parentNode || l.nextSibling !== a) && l !== a && (!l["s-hn"] && l["s-ol"] && (l["s-hn"] = l["s-ol"].parentNode.nodeName), c.insertBefore(l, a))
                    } else l.nodeType === 1 && (l.hidden = !0)
            }
            $o && Xf(o.$elm$), Ee.$flags$ &= -2, ct.length = 0
        }
    },
    ce = e => e,
    T = (e, t, i) => { const n = ce(e); return { emit: r => Dg(n, t, { bubbles: !!(i & 4), composed: !!(i & 2), cancelable: !!(i & 1), detail: r }) } },
    Dg = (e, t, i) => { const n = Ee.ce(t, i); return e.dispatchEvent(n), n },
    Og = (e, t) => {},
    Jf = (e, t) => (e.$flags$ |= 16, Og(e, e.$ancestorComponent$), Qe(() => Hg(e, t))),
    Hg = (e, t) => {
        const i = e.$hostElement$,
            n = Ti("scheduleUpdate", e.$cmpMeta$.$tagName$),
            r = i;
        let o;
        return t ? o = tn(r, "componentWillLoad") : o = tn(r, "componentWillUpdate"), o = Gc(o, () => tn(r, "componentWillRender")), n(), Gc(o, () => jg(e, r, t))
    },
    jg = async(e, t, i) => {
        const n = e.$hostElement$,
            r = Ti("update", e.$cmpMeta$.$tagName$);
        n["s-rc"], i && Ag(e);
        const o = Ti("render", e.$cmpMeta$.$tagName$);
        Wg(e, t, n), o(), r(), Qg(e)
    },
    Wg = (e, t, i) => { try { ia = t, t = t.render && t.render(), e.$flags$ &= -17, e.$flags$ |= 2, (q.hasRenderFn || q.reflect) && (q.vdomRender || q.reflect) && (q.hydrateServerSide || Fg(e, t)) } catch (l) { xr(l, e.$hostElement$) } return ia = null, null },
    Ug = () => ia,
    Qg = e => {
        const t = e.$cmpMeta$.$tagName$,
            i = e.$hostElement$,
            n = Ti("postUpdate", t),
            r = i;
        e.$ancestorComponent$, tn(r, "componentDidRender"), e.$flags$ & 64 ? (tn(r, "componentDidUpdate"), n()) : (e.$flags$ |= 64, tn(r, "componentDidLoad"), n())
    },
    tn = (e, t, i) => { if (e && e[t]) try { return e[t](i) } catch (n) { xr(n) } },
    Gc = (e, t) => e && e.then ? e.then(t) : t(),
    Bg = (e, t) => e != null && !au(e) ? t & 4 ? e === "false" ? !1 : e === "" || !!e : t & 2 ? parseFloat(e) : t & 1 ? String(e) : e : e,
    Kg = (e, t) => as(e).$instanceValues$.get(t),
    Gg = (e, t, i, n) => {
        const r = as(e),
            o = e,
            s = r.$instanceValues$.get(t),
            l = r.$flags$,
            u = o;
        if (i = Bg(i, n.$members$[t][0]), i !== s) {
            r.$instanceValues$.set(t, i); {
                if (n.$watchers$ && l & 128) {
                    const c = n.$watchers$[t];
                    c && c.map(a => { try { u[a](i, s, t) } catch (d) { xr(d, o) } })
                }
                if ((l & 18) === 2) {
                    if (u.componentShouldUpdate && u.componentShouldUpdate(i, s, t) === !1) return;
                    Jf(r, !1)
                }
            }
        }
    },
    Yg = (e, t, i) => {
        if (t.$members$) {
            e.watchers && (t.$watchers$ = e.watchers);
            const n = Object.entries(t.$members$),
                r = e.prototype;
            n.map(([o, [s]]) => {
                (s & 31 || s & 32) && Object.defineProperty(r, o, {get() { return Kg(this, o) }, set(l) { Gg(this, o, l, t) }, configurable: !0, enumerable: !0 })
            }); {
                const o = new Map;
                r.attributeChangedCallback = function(s, l, u) {
                    Ee.jmp(() => {
                        const c = o.get(s);
                        this[c] = u === null && typeof this[c] == "boolean" ? !1 : u
                    })
                }, e.observedAttributes = n.filter(([s, l]) => l[0] & 15).map(([s, l]) => { const u = l[1] || s; return o.set(u, s), l[0] & 512 && t.$attrsToReflect$.push([s, u]), u })
            }
        }
        return e
    },
    Xg = async(e, t, i, n, r) => {
        if ((t.$flags$ & 32) === 0 && (r = e.constructor, t.$flags$ |= 160, r.style)) {
            let s = r.style;
            typeof s != "string" && (s = s[t.$modeName$ = Lg(e)]);
            const l = Qf(i, t.$modeName$);
            if (!zo.has(l)) {
                const u = Ti("registerStyles", i.$tagName$);
                Eg(l, s, !!(i.$flags$ & 1)), u()
            }
        }
        t.$ancestorComponent$, (() => Jf(t, !0))()
    },
    qg = e => {},
    Zg = e => {
        if ((Ee.$flags$ & 1) === 0) {
            const t = as(e),
                i = t.$cmpMeta$,
                n = Ti("connectedCallback", i.$tagName$);
            t.$flags$ & 1 ? (Uf(e, t, i.$listeners$), qg(t.$lazyInstance$)) : (t.$flags$ |= 1, i.$flags$ & 12 && Jg(e), Xg(e, t, i)), n()
        }
    },
    Jg = e => {
        const t = e["s-cr"] = ft.createComment("");
        t["s-cn"] = !0, e.insertBefore(t, e.firstChild)
    },
    e0 = e => {
        if ((Ee.$flags$ & 1) === 0) {
            const t = as(e);
            t.$rmListeners$ && (t.$rmListeners$.map(i => i()), t.$rmListeners$ = void 0)
        }
    },
    I = (e, t) => {
        const i = { $flags$: t[0], $tagName$: t[1] };
        q.member && (i.$members$ = t[2]), q.hostListener && (i.$listeners$ = t[3]), q.watchCallback && (i.$watchers$ = e.$watchers$), q.reflect && (i.$attrsToReflect$ = []), q.shadowDom && !ls && i.$flags$ & 1 && (i.$flags$ |= 8);
        const n = e.prototype.connectedCallback,
            r = e.prototype.disconnectedCallback;
        return Object.assign(e.prototype, { __registerHost() { t0(this, i) }, connectedCallback() { Zg(this), q.connectedCallback && n && n.call(this) }, disconnectedCallback() { e0(this), q.disconnectedCallback && r && r.call(this) } }), e.is = i.$tagName$, Yg(e, i)
    },
    N = e => { ls ? e.attachShadow({ mode: "open" }) : e.shadowRoot = e },
    Yc = (e, t) => t,
    ep = new WeakMap,
    as = e => ep.get(e),
    t0 = (e, t) => { const i = { $flags$: 0, $hostElement$: e, $cmpMeta$: t, $instanceValues$: new Map }; return q.isDev && (i.$renderCount$ = 0), q.method && q.lazyLoad && (i.$onInstancePromise$ = new Promise(n => i.$onInstanceResolve$ = n)), q.asyncLoading && (i.$onReadyPromise$ = new Promise(n => i.$onReadyResolve$ = n), e["s-p"] = [], e["s-rc"] = []), Uf(e, i, t.$listeners$), ep.set(e, i) },
    Xc = (e, t) => t in e,
    xr = (e, t) => (0, console.error)(e, t);
q.isTesting;
const zo = new Map,
    i0 = [],
    qc = [],
    tp = [],
    n0 = (e, t) => i => { e.push(i), na || (na = !0, t && Ee.$flags$ & 4 ? r0(ra) : Ee.raf(ra)) },
    Zc = e => {
        for (let t = 0; t < e.length; t++) try { e[t](performance.now()) } catch (i) { xr(i) }
        e.length = 0
    },
    ra = () => { Zc(qc), Zc(tp), (na = qc.length > 0) && Ee.raf(ra) },
    r0 = e => bg().then(e),
    Qe = n0(tp, !0);
q.isDev, q.isTesting;

function J(e, t, i, n) { return e.addEventListener(t, i, n), () => e.removeEventListener(t, i, n) }

function o0(e, t, i, n = 300, r = 10) {
    let o, s = 0,
        l = !1;

    function u() {
        l || (o = setTimeout(() => {
            if (s === r) { i == null || i(); return }
            e.dispatchEvent(t), s += 1, u()
        }, n))
    }
    return u(), () => { window.clearTimeout(o), l = !0 }
}
const Ks = (e, t, i = 0, n = 0, r = 0, o = 0) => {
        const s = e.getBoundingClientRect(),
            l = t.getBoundingClientRect();
        return s.left + i < l.right + r && s.right + i > l.left + r && s.top + n < l.bottom + o && s.bottom + n > l.top + o
    },
    mt = (...e) => {},
    It = e => e === null,
    S = e => typeof e == "undefined",
    $e = e => It(e) || S(e),
    Cr = e => $e(e) ? void 0 : e.constructor,
    us = e => Cr(e) === Object,
    At = e => Cr(e) === Number && !Number.isNaN(e),
    xe = e => Cr(e) === String,
    s0 = e => Cr(e) === Boolean,
    oa = e => Cr(e) === Function,
    Fo = e => Array.isArray(e),
    cs = (e, t) => Boolean(e && t && e instanceof t),
    Do = () => {
        let e = mt,
            t = mt;
        return { promise: new Promise((n, r) => { e = n, t = r }), resolve: e, reject: t }
    };

function nn(e, t, i) {
    const n = e[t];
    e[t] = function() { return i(), n ? n.call(e) : void 0 }
}

function Fe(e, t, i) {
    let n = !1;
    S(t) || (nn(e, "componentWillLoad", () => { t(), n = !0 }), nn(e, "connectedCallback", () => { n && t() })), S(i) || nn(e, "disconnectedCallback", () => { i() })
}
const ip = "vmFindPlayer";

function l0(e) {
    const t = ce(e);
    let i;
    Fe(e, () => { i = J(t, ip, n => { n.stopPropagation(), n.detail(t) }) }, () => { i == null || i() })
}
const Ft = (e, t = 300, i = 10) => {
    const n = cs(e, HTMLElement) ? e : ce(e),
        r = Do();
    let o;
    const s = new CustomEvent(ip, { bubbles: !0, composed: !0, detail: l => { r.resolve(l), o() } });
    return o = o0(n, s, () => { r.reject(`Could not find player for ${n.nodeName}`) }, t, i), r.promise
};
var vt;
(function(e) { e.Audio = "audio", e.Video = "video" })(vt || (vt = {}));
const np = "vmStateChange",
    Ot = e => (t, i) => {
        const n = cs(e, HTMLElement) ? e : ce(e),
            r = new CustomEvent(np, { bubbles: !0, composed: !0, detail: { by: n, prop: t, value: i } });
        n.dispatchEvent(r)
    },
    Yn = { play: "Play", pause: "Pause", playback: "Playback", scrubber: "Scrubber", scrubberLabel: "{currentTime} of {duration}", played: "Played", duration: "Duration", buffered: "Buffered", close: "Close", currentTime: "Current time", live: "LIVE", volume: "Volume", mute: "Mute", unmute: "Unmute", audio: "Audio", default: "Default", captions: "Captions", subtitlesOrCc: "Subtitles/CC", enableCaptions: "Enable subtitles/captions", disableCaptions: "Disable subtitles/captions", auto: "Auto", fullscreen: "Fullscreen", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", settings: "Settings", seekForward: "Seek forward", seekBackward: "Seek backward", seekTotal: "Seek total", normal: "Normal", none: "None", playbackRate: "Playback Rate", playbackQuality: "Playback Quality", loop: "Loop", disabled: "Disabled", off: "Off", enabled: "Enabled", pip: "Picture-in-Picture", enterPiP: "Miniplayer", exitPiP: "Expand" },
    rn = { theme: void 0, paused: !0, playing: !1, duration: -1, currentProvider: void 0, mediaTitle: void 0, currentSrc: void 0, currentPoster: void 0, textTracks: [], currentTextTrack: -1, audioTracks: [], currentAudioTrack: -1, isTextTrackVisible: !0, shouldRenderNativeTextTracks: !0, icons: "vime", currentTime: 0, autoplay: !1, ready: !1, playbackReady: !1, loop: !1, muted: !1, buffered: 0, playbackRate: 1, playbackRates: [1], playbackQuality: void 0, playbackQualities: [], seeking: !1, debug: !1, playbackStarted: !1, playbackEnded: !1, buffering: !1, controls: !1, isControlsActive: !1, volume: 50, isFullscreenActive: !1, aspectRatio: "16:9", viewType: void 0, isAudioView: !1, isVideoView: !1, mediaType: void 0, isAudio: !1, isVideo: !1, isMobile: !1, isTouch: !1, isSettingsActive: !1, isLive: !1, isPiPActive: !1, autopause: !0, playsinline: !1, language: "en", languages: ["en"], translations: { en: Yn }, i18n: Yn },
    a0 = new Set(["autoplay", "autopause", "aspectRatio", "controls", "theme", "debug", "paused", "currentTime", "language", "loop", "translations", "playbackQuality", "muted", "playbackRate", "playsinline", "volume", "isSettingsActive", "isControlsActive", "shouldRenderNativeTextTracks"]),
    rp = e => a0.has(e),
    u0 = new Set(["paused", "currentTime", "duration", "buffered", "seeking", "playing", "buffering", "playbackReady", "textTracks", "currentTextTrack", "audioTracks", "currentAudioTrack", "mediaTitle", "currentSrc", "currentPoster", "playbackRate", "playbackRates", "playbackStarted", "playbackEnded", "playbackQuality", "playbackQualities", "mediaType"]),
    c0 = e => u0.has(e);
var Ke;
(function(e) { e.Audio = "audio", e.Video = "video" })(Ke || (Ke = {}));
class pe {
    constructor(t = []) { this.dispose = t }
    add(t) { this.dispose.push(t) }
    empty() { this.dispose.forEach(t => t()), this.dispose = [] }
}
var d0 = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const sa = Symbol("vmPlayerKey"),
    ds = Symbol("vmNameKey"),
    vi = Symbol("vmRegistryKey"),
    la = Symbol("vmRegistrationKey"),
    op = "vmComponentRegister",
    sp = "vmComponentRegistered",
    lp = "vmComponentDeregistered",
    vn = e => cs(e, HTMLElement) ? e : ce(e);

function V(e, t) {
    const i = Symbol("vmRegistryId"),
        n = vn(e);
    n[ds] = t != null ? t : n.nodeName.toLowerCase(), n[la] = i;
    const o = (s => new CustomEvent(s, { bubbles: !0, composed: !0, detail: n }))(op);
    Fe(e, () => { n.dispatchEvent(o) })
}

function h0(e) {
    const t = ce(e),
        i = new Map,
        n = new pe;
    t[vi] = i;

    function r(s) { delete s[sa], delete s[vi], i.delete(s[la]), t.dispatchEvent(new CustomEvent(lp, { detail: s })) }

    function o(s) {
        const l = s.detail,
            u = vn(l);
        u[sa] = t, u[vi] = i, i.set(u[la], u), t.dispatchEvent(new CustomEvent(sp, { detail: u })), Fe(l, void 0, () => r(u))
    }
    Fe(e, () => { n.add(J(t, op, o)) }, () => { i.clear(), n.empty(), delete e[vi] })
}

function f0(e, t) { var i; const r = vn(e)[vi]; return Array.from((i = r == null ? void 0 : r.values()) !== null && i !== void 0 ? i : []).some(o => o[ds] === t) }

function Ct(e) { return vn(e)[sa] }

function ap(e, t) { var i, n; const r = vn(e); return Array.from((n = (i = r[vi]) === null || i === void 0 ? void 0 : i.values()) !== null && n !== void 0 ? n : []).filter(o => o[ds] === t) }

function up(e, t, i) {
    var n;
    return d0(this, void 0, void 0, function*() {
        const r = yield Ft(e),
            o = new pe,
            s = vn(e)[vi];

        function l(u) { u.detail[ds] === t && (i == null || i(ap(r, t))) }
        return Array.from((n = s == null ? void 0 : s.values()) !== null && n !== void 0 ? n : []).forEach(u => l(new CustomEvent("", { detail: u }))), S(r) || (o.add(J(r, sp, l)), o.add(J(r, lp, l))), Fe(e, () => {}, () => { o.empty() }), () => { o.empty() }
    })
}
var p0 = function() { var e, t = new Promise(function(i) { e = i }); return { promise: t, resolve: e } },
    m0 = function(e, t, i) {
        i === void 0 && (i = !0);
        var n = e.constructor.name === "Function",
            r = n ? e.prototype : e,
            o = r.componentWillLoad;
        r.componentWillLoad = function() {
            var s = this,
                l = ce(this),
                u = p0(),
                c = new CustomEvent("openWormhole", {
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        consumer: this,
                        fields: t,
                        updater: function(d, p) {
                            var k = d in l ? l : s;
                            k[d] = p
                        },
                        onOpen: u
                    }
                });
            l.dispatchEvent(c);
            var a = function() { if (o) return o.call(s) };
            return i ? u.promise.then(function() { return a() }) : a()
        }
    },
    Rn = new Map,
    Jc = function(e, t) {
        var i = e.fields,
            n = e.updater;
        i.forEach(function(r) { n(r, t[r]) })
    },
    ed = {
        create: function(e, t) {
            var i = ce(e),
                n = new Map,
                r = { wormholes: n, state: t };
            Rn.set(e, r);
            var o = e.connectedCallback;
            e.connectedCallback = function() { Rn.set(e, r), o && o.call(e) };
            var s = e.disconnectedCallback;
            e.disconnectedCallback = function() { Rn.delete(e), s && s.call(e) }, i.addEventListener("openWormhole", function(l) {
                l.stopPropagation();
                var u = l.detail,
                    c = u.consumer,
                    a = u.onOpen;
                if (!n.has(c)) {
                    if (typeof c != "symbol") {
                        var d = c.connectedCallback,
                            p = c.disconnectedCallback;
                        c.connectedCallback = function() { n.set(c, l.detail), d && d.call(c) }, c.disconnectedCallback = function() { n.delete(c), p && p.call(c) }
                    }
                    n.set(c, l.detail), Jc(l.detail, r.state), a == null || a.resolve(function() { n.delete(c) })
                }
            }), i.addEventListener("closeWormhole", function(l) {
                var u = l.detail;
                n.delete(u)
            })
        },
        Provider: function(e, t) {
            var i = e.state,
                n = Ug();
            if (Rn.has(n)) {
                var r = Rn.get(n);
                r.state = i, r.wormholes.forEach(function(o) { Jc(o, i) })
            }
            return t
        }
    };
const v0 = "vmLoadStart",
    g0 = new Set(["isFullscreenActive", "isControlsActive", "isTextTrackVisible", "isPiPActive", "isLive", "isTouch", "isAudio", "isVideo", "isAudioView", "isVideoView"]),
    y0 = new Set(["ready", "playbackStarted", "playbackEnded", "playbackReady"]),
    k0 = e => g0.has(e) ? `vm${e.replace("is","").replace("Active","")}Change` : y0.has(e) ? `vm${e.charAt(0).toUpperCase()}${e.slice(1)}` : `vm${e.charAt(0).toUpperCase()}${e.slice(1)}Change`;

function w0(e, t, i, n) {
    const r = [];
    r.push(new CustomEvent(k0(t), { detail: i })), t === "paused" && !i && r.push(new CustomEvent("vmPlay")), t === "seeking" && n && !i && r.push(new CustomEvent("vmSeeked")), r.forEach(o => { e.dispatchEvent(o) })
}
const W = (e, t) => m0(e, t);
var Oo;
(function(e) { e.Audio = "audio", e.Video = "video", e.HLS = "hls", e.Dash = "dash", e.YouTube = "youtube", e.Vimeo = "vimeo", e.Dailymotion = "dailymotion" })(Oo || (Oo = {}));
const aa = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
    td = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i,
    ua = /\.(m3u8)($|\?)/i,
    b0 = /^application\/(x-mpegURL|vnd\.apple\.mpegURL)$/i,
    x0 = /\.(mpd)($|\?)/i,
    cp = "vmProviderChange",
    gn = e => (t, i) => {
        const n = cs(e, HTMLElement) ? e : ce(e),
            r = new CustomEvent(cp, { bubbles: !0, composed: !0, detail: { by: n, prop: t, value: i } });
        n.dispatchEvent(r)
    },
    C0 = new Set(["ready", "playing", "playbackReady", "playbackStarted", "playbackEnded", "seeking", "buffered", "buffering", "duration", "viewType", "mediaTitle", "mediaType", "currentSrc", "currentPoster", "playbackRates", "playbackQualities", "textTracks", "currentTextTrack", "isTextTrackVisible", "audioTracks", "currentAudioTrack", "isPiPActive", "isFullscreenActive"]),
    T0 = e => rp(e) || C0.has(e);
var id = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const dp = Symbol("vmProviderCache"),
    hp = "vmMediaProviderConnect",
    S0 = "vmMediaProviderDisconnect";

function fp(e, t) { return new CustomEvent(e, { bubbles: !0, composed: !0, detail: t }) }

function E0(e) {
    const t = ce(e),
        i = new pe,
        n = new Map;
    e[dp] = n;

    function r() { Object.keys(e).forEach(u => { n.set(u, e[u]) }) }

    function o() {
        Qe(() => id(this, void 0, void 0, function*() {
            var u;
            e.ready = !1, e.provider = void 0, n.clear(), (u = e.onProviderDisconnect) === null || u === void 0 || u.call(e), t.dispatchEvent(fp(S0))
        }))
    }

    function s(u) {
        u.stopImmediatePropagation(), r();
        const c = u.detail,
            a = ce(u.detail);
        if (e.provider === a) return;
        const d = a == null ? void 0 : a.nodeName.toLowerCase().replace("vm-", "");
        Qe(() => id(this, void 0, void 0, function*() { e.provider = a, e.currentProvider = Object.values(Oo).find(p => d === p), Fe(c, void 0, () => o()) }))
    }

    function l(u) {
        var c;
        u.stopImmediatePropagation();
        const { by: a, prop: d, value: p } = u.detail;
        if (!T0(d)) {
            (c = e.logger) === null || c === void 0 || c.warn(`${a.nodeName} tried to change \`${d}\` but it is readonly.`);
            return
        }
        Qe(() => { n.set(d, p), e[d] = p })
    }
    Fe(e, () => { i.add(J(t, hp, s)), i.add(J(t, cp, l)) }, () => { i.empty(), n.clear() })
}

function li(e) {
    const t = fp(hp, e);
    Fe(e, () => { ce(e).dispatchEvent(t) })
}
var nd = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const P0 = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), this.willAttach = !1, this.preload = "metadata", V(this), this.willAttach || li(this) }
        getAdapter() { var e, t; return nd(this, void 0, void 0, function*() { const i = (t = yield(e = this.fileProvider) === null || e === void 0 ? void 0 : e.getAdapter()) !== null && t !== void 0 ? t : {}; return i.canPlay = n => nd(this, void 0, void 0, function*() { return xe(n) && aa.test(n) }), i }) }
        render() { return m("vm-file", { noConnect: !0, willAttach: this.willAttach, crossOrigin: this.crossOrigin, preload: this.preload, disableRemotePlayback: this.disableRemotePlayback, mediaTitle: this.mediaTitle, viewType: Ke.Audio, ref: e => { this.fileProvider = e } }, m("slot", null)) }
    },
    A0 = ":host([hidden]){display:none}";
var L0 = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const R0 = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.canToggleCaptionVisibility = !1, this.showIcon = "captions-on", this.hideIcon = "captions-off", this.tooltipPosition = "top", this.hideTooltip = !1, this.keys = "c", this.i18n = {}, this.playbackReady = !1, this.textTracks = [], this.isTextTrackVisible = !1, V(this), W(this, ["i18n", "textTracks", "isTextTrackVisible", "playbackReady"]) }
        onTextTracksChange() {
            var e;
            return L0(this, void 0, void 0, function*() {
                const t = Ct(this);
                this.canToggleCaptionVisibility = this.textTracks.length > 0 && ((e = yield t == null ? void 0 : t.canSetTextTrackVisibility()) !== null && e !== void 0 ? e : !1)
            })
        }
        componentDidLoad() { this.onTextTracksChange() }
        onClick() {
            var e;
            const t = Ct(this);
            (e = t == null ? void 0 : t.setTextTrackVisibility) === null || e === void 0 || e.call(t, !this.isTextTrackVisible)
        }
        render() {
            const e = this.isTextTrackVisible ? this.i18n.disableCaptions : this.i18n.enableCaptions,
                t = S(this.keys) ? e : `${e} (${this.keys})`;
            return m(mn, { hidden: !this.canToggleCaptionVisibility }, m("vm-control", { label: this.i18n.captions, keys: this.keys, hidden: !this.canToggleCaptionVisibility, pressed: this.isTextTrackVisible, onClick: this.onClick.bind(this) }, m("vm-icon", { name: this.isTextTrackVisible ? this.showIcon : this.hideIcon, library: this.icons }), m("vm-tooltip", { hidden: this.hideTooltip, position: this.tooltipPosition, direction: this.tooltipDirection }, t)))
        }
        static get watchers() { return { textTracks: ["onTextTracksChange"], playbackReady: ["onTextTracksChange"] } }
        static get style() { return A0 }
    },
    Ho = new Set,
    ao = new Set,
    jo = new Map;

function Fn() {
    Qe(() => {
        ao.forEach(e => {
            const t = parseFloat(window.getComputedStyle(e).height);
            Ho.forEach(i => {
                const n = jo.get(i),
                    r = Ks(i, e),
                    o = Ks(i, e, 0, t) || Ks(i, e, 0, -t);
                n.set(e, r || o ? t : 0)
            })
        }), Ho.forEach(e => {
            const t = jo.get(e);
            e.style.setProperty("--vm-controls-height", `${Math.max(0,Math.max(...t.values()))}px`)
        })
    })
}

function M0(e) {
    const t = ce(e);

    function i() { return t.shadowRoot.querySelector(".controls") }
    Fe(e, () => {
        const n = i();
        It(n) || (ao.add(n), Fn())
    }, () => { ao.delete(i()), Fn() }), nn(e, "componentDidLoad", () => { ao.add(i()), Fn() }), nn(e, "componentDidRender", Fn)
}

function pp(e) {
    const t = ce(e);
    Fe(e, () => { Ho.add(t), jo.set(t, new Map), Fn() }, () => { Ho.delete(t), jo.delete(t) })
}
const _0 = ":host{position:absolute;left:0;bottom:0;width:100%;pointer-events:none;z-index:var(--vm-captions-z-index)}.captions{width:100%;text-align:center;color:var(--vm-captions-text-color);font-size:var(--vm-captions-font-size);padding:$control-spacing;display:none;pointer-events:none;transition:transform 0.4s ease-in-out, opacity 0.3s ease-in-out}.captions.enabled{display:inline-block}.captions.hidden{display:none !important}.captions.inactive{opacity:0;visibility:hidden}.captions.fontMd{font-size:var(--vm-captions-font-size-medium)}.captions.fontLg{font-size:var(--vm-captions-font-size-large)}.captions.fontXl{font-size:var(--vm-captions-font-size-xlarge)}.cue{display:inline-block;background:var(--vm-captions-cue-bg-color);border-radius:var(--vm-captions-cue-border-radius);box-decoration-break:clone;line-height:185%;padding:var(--vm-captions-cue-padding);white-space:pre-wrap;pointer-events:none}.cue>div{display:inline}.cue:empty{display:none}";
var I0 = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const $0 = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.sizeDisposal = new pe, this.textDisposal = new pe, this.isEnabled = !1, this.fontSize = "sm", this.hidden = !1, this.isControlsActive = !1, this.isVideoView = !1, this.playbackStarted = !1, this.textTracks = [], this.currentTextTrack = -1, this.isTextTrackVisible = !0, V(this), pp(this), W(this, ["isVideoView", "playbackStarted", "isControlsActive", "textTracks", "currentTextTrack", "isTextTrackVisible"]) }
        onEnabledChange() { this.isEnabled = this.playbackStarted && this.isVideoView }
        onTextTracksChange() {
            const e = this.textTracks[this.currentTextTrack],
                t = () => {
                    var i;
                    const n = Array.from((i = e.activeCues) !== null && i !== void 0 ? i : []);
                    this.renderCurrentCue(n[0])
                };
            this.textDisposal.empty(), $e(e) || (t(), this.textDisposal.add(J(e, "cuechange", t)))
        }
        connectedCallback() { this.dispatch = Ot(this), this.dispatch("shouldRenderNativeTextTracks", !1), this.onTextTracksChange(), this.onPlayerResize() }
        disconnectedCallback() { this.textDisposal.empty(), this.sizeDisposal.empty(), this.dispatch("shouldRenderNativeTextTracks", !0) }
        onPlayerResize() {
            return I0(this, void 0, void 0, function*() {
                const e = yield Ft(this);
                if (S(e)) return;
                const t = yield e.getContainer();
                new ResizeObserver(n => {
                    const r = n[0],
                        { width: o } = r.contentRect;
                    o >= 1360 ? this.fontSize = "xl" : o >= 1024 ? this.fontSize = "lg" : o >= 768 ? this.fontSize = "md" : this.fontSize = "sm"
                }).observe(t)
            })
        }
        renderCurrentCue(e) {
            if ($e(e)) { this.cue = ""; return }
            const t = document.createElement("div");
            t.append(e.getCueAsHTML()), this.cue = t.innerHTML.trim()
        }
        render() { return m("div", { style: { transform: `translateY(calc(${this.isControlsActive?"var(--vm-controls-height)":"24px"} * -1))` }, class: { captions: !0, enabled: this.isEnabled, hidden: this.hidden, fontMd: this.fontSize === "md", fontLg: this.fontSize === "lg", fontXl: this.fontSize === "xl", inactive: !this.isTextTrackVisible } }, m("span", { class: "cue" }, this.cue)) }
        static get watchers() { return { isVideoView: ["onEnabledChange"], playbackStarted: ["onEnabledChange"], textTracks: ["onTextTracksChange"], currentTextTrack: ["onTextTracksChange"] } }
        static get style() { return _0 }
    },
    V0 = ":host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--vm-click-to-play-z-index)}.clickToPlay{display:none;width:100%;height:100%;pointer-events:none}.clickToPlay.enabled{display:inline-block;pointer-events:auto}";
var N0 = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const z0 = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.useOnMobile = !1, this.paused = !0, this.isVideoView = !1, this.isMobile = !1, V(this), W(this, ["paused", "isVideoView", "isMobile"]) }
        connectedCallback() { this.dispatch = Ot(this) }
        forceClick() { return N0(this, void 0, void 0, function*() { this.onClick() }) }
        onClick() { this.dispatch("paused", !this.paused) }
        render() { return m("div", { class: { clickToPlay: !0, enabled: this.isVideoView && (!this.isMobile || this.useOnMobile) }, onClick: this.onClick.bind(this) }) }
        static get style() { return V0 }
    },
    F0 = "button{display:flex;align-items:center;flex-direction:row;border:var(--vm-control-border);cursor:pointer;flex-shrink:0;font-size:var(--vm-control-icon-size);color:var(--vm-control-color);background:var(--vm-control-bg, transparent);border-radius:var(--vm-control-border-radius);padding:var(--vm-control-padding);position:relative;pointer-events:auto;transition:all 0.3s ease;transform:scale(var(--vm-control-scale, 1));touch-action:manipulation;box-sizing:border-box}button.hidden{display:none}button:focus{outline:0}button.tapHighlight{background:var(--vm-control-tap-highlight)}button.notTouch:focus,button.notTouch:hover,button.notTouch[aria-expanded='true']{background:var(--vm-control-focus-bg);color:var(--vm-control-focus-color);transform:scale(calc(var(--vm-control-scale, 1) + 0.06))}";
var Gs = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const D0 = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.vmInteractionChange = T(this, "vmInteractionChange", 7), this.vmFocus = T(this, "vmFocus", 7), this.vmBlur = T(this, "vmBlur", 7), this.keyboardDisposal = new pe, this.showTapHighlight = !1, this.hidden = !1, this.isTouch = !1, V(this), W(this, ["isTouch"]) }
        onKeysChange() {
            return Gs(this, void 0, void 0, function*() {
                if (this.keyboardDisposal.empty(), S(this.keys)) return;
                const e = yield Ft(this),
                    t = this.keys.split("/");
                S(e) || this.keyboardDisposal.add(J(e, "keydown", i => { t.includes(i.key) && this.button.click() }))
            })
        }
        connectedCallback() { this.findTooltip(), this.onKeysChange() }
        componentWillLoad() { this.findTooltip() }
        disconnectedCallback() { this.keyboardDisposal.empty() }
        focusControl() {
            var e;
            return Gs(this, void 0, void 0, function*() {
                (e = this.button) === null || e === void 0 || e.focus()
            })
        }
        blurControl() {
            var e;
            return Gs(this, void 0, void 0, function*() {
                (e = this.button) === null || e === void 0 || e.blur()
            })
        }
        onTouchStart() { this.showTapHighlight = !0 }
        onTouchEnd() { setTimeout(() => { this.showTapHighlight = !1 }, 100) }
        findTooltip() { const e = this.host.querySelector("vm-tooltip"); return It(e) || (this.describedBy = e.id), e }
        onShowTooltip() {
            const e = this.findTooltip();
            It(e) || (e.active = !0), this.vmInteractionChange.emit(!0)
        }
        onHideTooltip() {
            const e = this.findTooltip();
            It(e) || (e.active = !1), this.button.blur(), this.vmInteractionChange.emit(!1)
        }
        onFocus() { this.vmFocus.emit(), this.onShowTooltip() }
        onBlur() { this.vmBlur.emit(), this.onHideTooltip() }
        onMouseEnter() { this.onShowTooltip() }
        onMouseLeave() { this.onHideTooltip() }
        render() {
            const e = this.expanded ? "true" : "false",
                t = this.pressed ? "true" : "false";
            return m("button", { class: { hidden: this.hidden, notTouch: !this.isTouch, tapHighlight: this.showTapHighlight }, id: this.identifier, type: "button", "aria-label": this.label, "aria-haspopup": S(this.menu) ? void 0 : "true", "aria-controls": this.menu, "aria-expanded": S(this.menu) ? void 0 : e, "aria-pressed": S(this.pressed) ? void 0 : t, "aria-hidden": this.hidden ? "true" : "false", "aria-describedby": this.describedBy, onTouchStart: this.onTouchStart.bind(this), onTouchEnd: this.onTouchEnd.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onMouseEnter: this.onMouseEnter.bind(this), onMouseLeave: this.onMouseLeave.bind(this), ref: i => { this.button = i } }, m("slot", null))
        }
        get host() { return this }
        static get watchers() { return { keys: ["onKeysChange"] } }
        static get style() { return F0 }
    },
    O0 = ":host{width:100%}.controlGroup{position:relative;width:100%;display:flex;flex-wrap:wrap;flex-direction:inherit;align-items:inherit;justify-content:inherit;box-sizing:border-box}.controlGroup.spaceTop{margin-top:var(--vm-control-group-spacing)}.controlGroup.spaceBottom{margin-bottom:var(--vm-control-group-spacing)}::slotted(*){margin-left:var(--vm-controls-spacing)}::slotted(*:first-child){margin-left:0}",
    H0 = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.space = "none", V(this) }
        render() { return m("div", { class: { controlGroup: !0, spaceTop: this.space !== "none" && this.space !== "bottom", spaceBottom: this.space !== "none" && this.space !== "top" } }, m("slot", null)) }
        get host() { return this }
        static get style() { return O0 }
    },
    j0 = ":host{flex:1}",
    W0 = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), V(this) }
        static get style() { return j0 }
    },
    U0 = (e, t = 1e3, i = !1) => {
        let n;
        return function(...o) {
            const s = this,
                l = function() { n = void 0, i || e.apply(s, o) },
                u = i && S(n);
            clearTimeout(n), n = setTimeout(l, t), u && e.apply(s, o)
        }
    },
    Q0 = ":host{position:relative;width:100%;z-index:var(--vm-controls-z-index)}:host([video]){position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.controls{display:flex;width:100%;position:absolute;flex-wrap:wrap;pointer-events:auto;box-sizing:border-box;background:var(--vm-controls-bg);padding:var(--vm-controls-padding);border-radius:var(--vm-controls-border-radius);opacity:0;visibility:hidden;transition:var(--vm-fade-transition)}.controls.audio{position:relative}.controls.hidden{display:none}.controls.active{opacity:1;visibility:visible}.controls.fullWidth{width:100%}.controls.fullHeight{height:100%}::slotted(*:not(vm-control-group)){margin-left:var(--vm-controls-spacing)}::slotted(*:not(vm-control-group):first-child){margin-left:0}";
var B0 = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const Ii = {},
    Gr = {},
    K0 = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.disposal = new pe, this.isInteracting = !1, this.hidden = !1, this.fullWidth = !1, this.fullHeight = !1, this.direction = "row", this.align = "center", this.justify = "start", this.pin = "bottomLeft", this.activeDuration = 2750, this.waitForPlaybackStart = !1, this.hideWhenPaused = !1, this.hideOnMouseLeave = !1, this.isAudioView = !1, this.isSettingsActive = !1, this.playbackReady = !1, this.isControlsActive = !1, this.paused = !0, this.playbackStarted = !1, V(this), M0(this), W(this, ["playbackReady", "isAudioView", "isControlsActive", "isSettingsActive", "paused", "playbackStarted"]) }
        connectedCallback() { this.dispatch = Ot(this), this.onControlsChange(), this.setupPlayerListeners() }
        componentWillLoad() { this.onControlsChange() }
        disconnectedCallback() { this.disposal.empty(), delete Gr[Ii[this]], delete Ii[this] }
        setupPlayerListeners() {
            return B0(this, void 0, void 0, function*() {
                const e = yield Ft(this);
                if (S(e)) return;
                ["focus", "keydown", "click", "touchstart", "mouseleave"].forEach(i => { this.disposal.add(J(e, i, this.onControlsChange.bind(this))) }), this.disposal.add(J(e, "mousemove", U0(this.onControlsChange, 50, !0).bind(this))), Ii[this] = e
            })
        }
        show() { this.dispatch("isControlsActive", !0) }
        hide() { this.dispatch("isControlsActive", !1) }
        hideWithDelay() { clearTimeout(Gr[Ii[this]]), Gr[Ii[this]] = setTimeout(() => { this.hide() }, this.activeDuration) }
        onControlsChange(e) {
            if (clearTimeout(Gr[Ii[this]]), this.hidden || !this.playbackReady) { this.hide(); return }
            if (this.isAudioView) { this.show(); return }
            if (this.waitForPlaybackStart && !this.playbackStarted) { this.hide(); return }
            if (this.isInteracting || this.isSettingsActive) { this.show(); return }
            if (this.hideWhenPaused && this.paused) { this.hideWithDelay(); return }
            if (this.hideOnMouseLeave && !this.paused && (e == null ? void 0 : e.type) === "mouseleave") { this.hide(); return }
            if (!this.paused) { this.show(), this.hideWithDelay(); return }
            this.show()
        }
        getPosition() {
            if (this.isAudioView) return {};
            if (this.pin === "center") return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
            const e = this.pin.split(/(?=[L|R])/).map(t => t.toLowerCase());
            return {
                [e[0]]: 0,
                [e[1]]: 0
            }
        }
        onStartInteraction() { this.isInteracting = !0 }
        onEndInteraction() { this.isInteracting = !1 }
        render() { return m(mn, { video: !this.isAudioView }, m("div", { style: Object.assign(Object.assign({}, this.getPosition()), { flexDirection: this.direction, alignItems: this.align === "center" ? "center" : `flex-${this.align}`, justifyContent: this.justify }), class: { controls: !0, audio: this.isAudioView, hidden: this.hidden, active: this.playbackReady && this.isControlsActive, fullWidth: this.isAudioView || this.fullWidth, fullHeight: !this.isAudioView && this.fullHeight }, onMouseEnter: this.onStartInteraction.bind(this), onMouseLeave: this.onEndInteraction.bind(this), onTouchStart: this.onStartInteraction.bind(this), onTouchEnd: this.onEndInteraction.bind(this) }, m("slot", null))) }
        static get watchers() { return { paused: ["onControlsChange"], hidden: ["onControlsChange"], isAudioView: ["onControlsChange"], isInteracting: ["onControlsChange"], isSettingsActive: ["onControlsChange"], hideWhenPaused: ["onControlsChange"], hideOnMouseLeave: ["onControlsChange"], playbackStarted: ["onControlsChange"], waitForPlaybackStart: ["onControlsChange"], playbackReady: ["onControlsChange"] } }
        static get style() { return Q0 }
    },
    G0 = ":host{display:flex;align-items:center;justify-content:center}",
    Y0 = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.currentTime = 0, this.i18n = {}, this.alwaysShowHours = !1, V(this), W(this, ["currentTime", "i18n"]) }
        render() { return m("vm-time", { label: this.i18n.currentTime, seconds: this.currentTime, alwaysShowHours: this.alwaysShowHours }) }
        static get style() { return G0 }
    };
var Ys, Xs;
const Pe = typeof window != "undefined",
    hs = Pe ? (Ys = window.navigator) === null || Ys === void 0 ? void 0 : Ys.userAgent.toLowerCase() : "",
    yn = /iphone|ipad|ipod|ios|CriOS|FxiOS/.test(hs),
    X0 = /android/.test(hs),
    qs = Pe && (yn || X0),
    q0 = Pe && /(iPhone|iPod)/gi.test((Xs = window.navigator) === null || Xs === void 0 ? void 0 : Xs.platform);
/firefox/.test(hs);
const Z0 = Pe && window.chrome;
Pe && !Z0 && (window.safari || yn || /(apple|safari)/.test(hs));
const J0 = e => {
        if (!Pe || S(window.ResizeObserver)) return e(qs), mt;

        function t() { e(window.innerWidth <= 480 || qs) }
        return e(window.innerWidth <= 480 || qs), J(window, "resize", t)
    },
    ey = e => {
        if (!Pe) return mt;
        let t = 0;
        const i = J(document, "touchstart", () => { t = new Date().getTime(), e(!0) }, !0),
            n = J(document, "mousemove", () => { new Date().getTime() - t < 500 || e(!1) }, !0);
        return () => { i(), n() }
    },
    ty = () => Pe && window.screen.orientation && !!window.screen.orientation.lock,
    mp = () => { if (!Pe) return !1; const e = document.createElement("video"); return !!document.pictureInPictureEnabled && !e.disablePictureInPicture },
    vp = () => { if (!Pe) return !1; const e = document.createElement("video"); return oa(e.webkitSupportsPresentationMode) && oa(e.webkitSetPresentationMode) && !q0 },
    iy = () => mp() || vp(),
    rd = (e = !0, t = !0) => { if (!Pe) return Promise.resolve(!1); const i = document.createElement("video"); return e && (i.setAttribute("muted", ""), i.muted = !0), t && (i.setAttribute("playsinline", ""), i.setAttribute("webkit-playsinline", "")), i.setAttribute("height", "0"), i.setAttribute("width", "0"), i.style.position = "fixed", i.style.top = "0", i.style.width = "0", i.style.height = "0", i.style.opacity = "0", new Promise(n => n(i.play())).catch(mt), Promise.resolve(!i.paused) };

function ny(e) { if (!!xe(e)) try { return JSON.parse(e) } catch { return } }
const ry = e => !$e(e) && (us(e) || xe(e) && e.startsWith("{")),
    oy = e => us(e) ? e : ny(e),
    Zs = (e, t = 1) => new Promise((i, n) => {
        const r = new Image,
            o = () => { delete r.onload, delete r.onerror, r.naturalWidth >= t ? i(r) : n(r) };
        Object.assign(r, { onload: o, onerror: o, src: e })
    }),
    sy = (e, t, i = mt) => {
        var n;
        const r = document.createElement("script");
        r.src = e, r.onload = t, r.onerror = i;
        const o = document.getElementsByTagName("script")[0];
        (n = o.parentNode) === null || n === void 0 || n.insertBefore(r, o)
    },
    gp = e => { if (!!ry(e)) return oy(e) },
    od = (e, t = "") => { if (!Pe) return t; try { return window.decodeURIComponent(e) } catch { return t } },
    ly = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g,
    ay = e => {
        const t = Object.create(null);
        if (S(e)) return t;
        let i;
        for (; i = ly.exec(e);) {
            const n = od(i[1], i[1]).replace("[]", ""),
                r = xe(i[2]) ? od(i[2].replace(/\+/g, " "), i[2]) : "",
                o = t[n];
            o && !Fo(o) && (t[n] = [o]), o ? t[n].push(r) : t[n] = r
        }
        return t
    },
    uy = e => {
        const t = [],
            i = (n, r) => { t.push(`${encodeURIComponent(n)}=${encodeURIComponent(r)}`) };
        return Object.keys(e).forEach(n => {
            const r = e[n];
            $e(r) || (Fo(r) ? r.forEach(o => i(n, o)) : i(n, r))
        }), t.join("&")
    },
    sd = (e, t = "preconnect", i) => { if (!Pe) return !1; const n = document.createElement("link"); return n.rel = t, n.href = e, S(i) || (n.as = i), n.crossOrigin = "true", document.head.append(n), !0 },
    cy = (e, t) => { if (S(t) || t.length === 0) return e; const i = e.split("?", 2); return i[0] + (S(i[1]) ? `?${t}` : `?${i[1]}&${t}`) },
    dy = (e, t) => cy(e, us(t) ? uy(t) : t),
    hy = e => { if (!!xe(e)) return ay(e) },
    $i = {},
    yp = (e, t, i, n = () => !0, r = sy) => {
        const o = l => { if (!S(window[l])) return window[l]; if (window.exports && window.exports[l]) return window.exports[l]; if (window.module && window.module.exports && window.module.exports[l]) return window.module.exports[l] },
            s = o(t);
        return s && n(s) ? Promise.resolve(s) : new Promise((l, u) => {
            if (!S($i[e])) { $i[e].push({ resolve: l, reject: u }); return }
            $i[e] = [{ resolve: l, reject: u }];
            const c = a => { $i[e].forEach(d => d.resolve(a)) };
            if (!S(i)) {
                const a = window[i];
                window[i] = function() { S(a) || a(), c(o(t)) }
            }
            r(e, () => { S(i) && c(o(t)) }, a => { $i[e].forEach(d => { d.reject(a) }), delete $i[e] })
        })
    },
    fs = (e, t = []) => W(e, ["autoplay", "controls", "language", "muted", "logger", "loop", "aspectRatio", "playsinline", ...t]),
    fy = ":host{z-index:var(--vm-media-z-index)}";
var Re = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const Js = new Map,
    py = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.vmLoadStart = T(this, "vmLoadStart", 7), this.vmError = T(this, "vmError", 7), this.defaultInternalState = {}, this.internalState = { currentTime: 0, volume: 0, muted: !1, isAdsPlaying: !1, playbackReady: !1 }, this.embedSrc = "", this.mediaTitle = "", this.shouldAutoplayQueue = !1, this.showUpNextQueue = !1, this.showShareButtons = !1, this.showDailymotionLogo = !1, this.showVideoInfo = !0, this.language = "en", this.autoplay = !1, this.controls = !1, this.loop = !1, this.muted = !1, this.playsinline = !1, V(this), li(this), fs(this) }
        onVideoIdChange() {
            if (this.internalState = Object.assign({}, this.defaultInternalState), !this.videoId) { this.embedSrc = ""; return }
            this.embedSrc = `${this.getOrigin()}/embed/video/${this.videoId}?api=1`, this.fetchVideoInfo = this.getVideoInfo(), this.pendingMediaTitleCall = Do()
        }
        onControlsChange() { this.internalState.playbackReady && this.remoteControl("controls", this.controls) }
        onCustomPosterChange() { this.dispatch("currentPoster", this.poster) }
        connectedCallback() { this.dispatch = gn(this), this.dispatch("viewType", Ke.Video), this.onVideoIdChange(), this.internalState.muted = this.muted, this.defaultInternalState = Object.assign({}, this.internalState) }
        componentDidLoad() { this.initialMuted = this.muted }
        getOrigin() { return "https://www.dailymotion.com" }
        getPreconnections() { return [this.getOrigin(), "https://static1.dmcdn.net"] }
        remoteControl(e, t) { return this.embed.postMessage({ command: e, parameters: t ? [t] : [] }) }
        buildParams() { return { autoplay: this.autoplay, mute: this.initialMuted, controls: this.controls, "queue-autoplay-next": this.shouldAutoplayQueue, "queue-enable": this.showUpNextQueue, "sharing-enable": this.showShareButtons, syndication: this.syndication, "ui-highlight": this.color, "ui-logo": this.showDailymotionLogo, "ui-start-screen-info": this.showVideoInfo } }
        getVideoInfo() {
            return Re(this, void 0, void 0, function*() {
                if (Js.has(this.videoId)) return Js.get(this.videoId);
                const e = "https://api.dailymotion.com";
                return window.fetch(`${e}/video/${this.videoId}?fields=duration,thumbnail_1080_url`).then(t => t.json()).then(t => {
                    const i = t.thumbnail_1080_url,
                        n = parseFloat(t.duration);
                    return Js.set(this.videoId, { poster: i, duration: n }), { poster: i, duration: n }
                })
            })
        }
        onEmbedSrcChange() { this.vmLoadStart.emit(), this.dispatch("viewType", Ke.Video) }
        onEmbedMessage(e) {
            var t, i;
            const n = e.detail;
            switch (n.event) {
                case "playback_ready":
                    this.onControlsChange(), this.dispatch("currentSrc", this.embedSrc), this.dispatch("mediaType", vt.Video), Promise.all([this.fetchVideoInfo, (t = this.pendingMediaTitleCall) === null || t === void 0 ? void 0 : t.promise]).then(([r, o]) => {
                        var s, l;
                        this.dispatch("duration", (s = r == null ? void 0 : r.duration) !== null && s !== void 0 ? s : -1), this.dispatch("currentPoster", (l = this.poster) !== null && l !== void 0 ? l : r == null ? void 0 : r.poster), this.dispatch("mediaTitle", o), this.dispatch("playbackReady", !0)
                    });
                    break;
                case "videochange":
                    (i = this.pendingMediaTitleCall) === null || i === void 0 || i.resolve(n.title);
                    break;
                case "start":
                    this.dispatch("paused", !1), this.dispatch("playbackStarted", !0), this.dispatch("buffering", !0);
                    break;
                case "video_start":
                    this.remoteControl("muted", this.internalState.muted), this.remoteControl("volume", this.internalState.volume), this.internalState.currentTime > 0 && this.remoteControl("seek", this.internalState.currentTime);
                    break;
                case "play":
                    this.dispatch("paused", !1);
                    break;
                case "pause":
                    this.dispatch("paused", !0), this.dispatch("playing", !1), this.dispatch("buffering", !1);
                    break;
                case "playing":
                    this.dispatch("playing", !0), this.dispatch("buffering", !1);
                    break;
                case "video_end":
                    this.loop ? setTimeout(() => { this.remoteControl("play") }, 300) : this.dispatch("playbackEnded", !0);
                    break;
                case "timeupdate":
                    this.dispatch("currentTime", parseFloat(n.time));
                    break;
                case "volumechange":
                    this.dispatch("muted", n.muted === "true"), this.dispatch("volume", Math.floor(parseFloat(n.volume) * 100));
                    break;
                case "seeking":
                    this.dispatch("currentTime", parseFloat(n.time)), this.dispatch("seeking", !0);
                    break;
                case "seeked":
                    this.dispatch("currentTime", parseFloat(n.time)), this.dispatch("seeking", !1);
                    break;
                case "waiting":
                    this.dispatch("buffering", !0);
                    break;
                case "progress":
                    this.dispatch("buffered", parseFloat(n.time));
                    break;
                case "durationchange":
                    this.dispatch("duration", parseFloat(n.duration));
                    break;
                case "qualitiesavailable":
                    this.dispatch("playbackQualities", n.qualities.map(r => `${r}p`));
                    break;
                case "qualitychange":
                    this.dispatch("playbackQuality", `${n.quality}p`);
                    break;
                case "fullscreenchange":
                    this.dispatch("isFullscreenActive", n.fullscreen === "true");
                    break;
                case "error":
                    this.vmError.emit(n.error);
                    break
            }
        }
        getAdapter() { return Re(this, void 0, void 0, function*() { const e = /(?:dai\.ly|dailymotion|dailymotion\.com)\/(?:video\/|embed\/|)(?:video\/|)((?:\w)+)/; return { getInternalPlayer: () => Re(this, void 0, void 0, function*() { return this.embed }), play: () => Re(this, void 0, void 0, function*() { this.remoteControl("play") }), pause: () => Re(this, void 0, void 0, function*() { this.remoteControl("pause") }), canPlay: t => Re(this, void 0, void 0, function*() { return xe(t) && e.test(t) }), setCurrentTime: t => Re(this, void 0, void 0, function*() { t !== this.internalState.currentTime && (this.internalState.currentTime = t, this.remoteControl("seek", t)) }), setMuted: t => Re(this, void 0, void 0, function*() { this.internalState.muted = t, this.remoteControl("muted", t) }), setVolume: t => Re(this, void 0, void 0, function*() { this.internalState.volume = t / 100, this.dispatch("volume", t), this.remoteControl("volume", t / 100) }), canSetPlaybackQuality: () => Re(this, void 0, void 0, function*() { return !0 }), setPlaybackQuality: t => Re(this, void 0, void 0, function*() { this.remoteControl("quality", t.slice(0, -1)) }), canSetFullscreen: () => Re(this, void 0, void 0, function*() { return !0 }), enterFullscreen: () => Re(this, void 0, void 0, function*() { this.remoteControl("fullscreen", !0) }), exitFullscreen: () => Re(this, void 0, void 0, function*() { this.remoteControl("fullscreen", !1) }) } }) }
        render() { return m("vm-embed", { embedSrc: this.embedSrc, mediaTitle: this.mediaTitle, origin: this.getOrigin(), params: this.buildParams(), decoder: hy, preconnections: this.getPreconnections(), onVmEmbedMessage: this.onEmbedMessage.bind(this), onVmEmbedSrcChange: this.onEmbedSrcChange.bind(this), ref: e => { this.embed = e } }) }
        static get watchers() { return { videoId: ["onVideoIdChange"], controls: ["onControlsChange"], poster: ["onCustomPosterChange"] } }
        static get style() { return fy }
    },
    my = ":host{z-index:var(--vm-media-z-index)}";
var kt = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const vy = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.vmLoadStart = T(this, "vmLoadStart", 7), this.vmError = T(this, "vmError", 7), this.textTracksDisposal = new pe, this.hasAttached = !1, this.version = "latest", this.config = {}, this.autoplay = !1, this.preload = "metadata", this.enableTextTracksByDefault = !0, this.shouldRenderNativeTextTracks = !0, this.isTextTrackVisible = !0, this.currentTextTrack = -1, V(this), li(this), W(this, ["autoplay", "shouldRenderNativeTextTracks", "isTextTrackVisible", "currentTextTrack"]) }
        onSrcChange() { var e;!this.hasAttached || (this.vmLoadStart.emit(), (e = this.dash) === null || e === void 0 || e.attachSource(this.src)) }
        onShouldRenderNativeTextTracks() {
            var e;
            this.shouldRenderNativeTextTracks ? this.textTracksDisposal.empty() : this.hideCurrentTextTrack(), (e = this.dash) === null || e === void 0 || e.enableForcedTextStreaming(!this.shouldRenderNativeTextTracks)
        }
        onTextTrackChange() {
            var e, t;
            if (!(!this.shouldRenderNativeTextTracks || S(this.dash)) && (this.dash.setTextTrack(this.isTextTrackVisible ? this.currentTextTrack : -1), !this.isTextTrackVisible)) {
                const i = Array.from((t = (e = this.mediaEl) === null || e === void 0 ? void 0 : e.textTracks) !== null && t !== void 0 ? t : [])[this.currentTextTrack];
                (i == null ? void 0 : i.mode) === "hidden" && this.dispatch("currentTextTrack", -1)
            }
        }
        connectedCallback() { this.dispatch = gn(this), this.mediaEl && this.setupDash() }
        disconnectedCallback() { this.textTracksDisposal.empty(), this.destroyDash() }
        setupDash() {
            return kt(this, void 0, void 0, function*() {
                try {
                    const e = this.libSrc || `https://cdn.jsdelivr.net/npm/dashjs@${this.version}/dist/dash.all.min.js`,
                        t = yield yp(e, "dashjs");
                    this.dash = t.MediaPlayer(this.config).create(), this.dash.initialize(this.mediaEl, null, this.autoplay), this.dash.setTextDefaultEnabled(this.enableTextTracksByDefault), this.dash.enableForcedTextStreaming(!this.shouldRenderNativeTextTracks), this.dash.on(t.MediaPlayer.events.PLAYBACK_METADATA_LOADED, () => { this.dispatch("mediaType", vt.Video), this.dispatch("currentSrc", this.src), this.dispatchLevels(), this.listenToTextTracksForChanges(), this.dispatch("playbackReady", !0) }), this.dash.on(t.MediaPlayer.events.TRACK_CHANGE_RENDERED, () => { this.shouldRenderNativeTextTracks || this.hideCurrentTextTrack() }), this.dash.on(t.MediaPlayer.events.ERROR, i => { this.vmError.emit(i) }), this.hasAttached = !0
                } catch (e) { this.vmError.emit(e) }
            })
        }
        destroyDash() {
            var e;
            return kt(this, void 0, void 0, function*() {
                (e = this.dash) === null || e === void 0 || e.reset(), this.hasAttached = !1
            })
        }
        onMediaElChange(e) { return kt(this, void 0, void 0, function*() { this.destroyDash(), !S(e.detail) && (this.mediaEl = e.detail, yield this.setupDash()) }) }
        levelToPlaybackQuality(e) { return e === -1 ? "Auto" : `${e.height}p` }
        findLevelIndexFromQuality(e) { return this.dash.getBitrateInfoListFor("video").findIndex(t => this.levelToPlaybackQuality(t) === e) }
        dispatchLevels() {
            try {
                const e = this.dash.getBitrateInfoListFor("video");
                (e == null ? void 0 : e.length) > 0 && (this.dispatch("playbackQualities", ["Auto", ...e.map(this.levelToPlaybackQuality)]), this.dispatch("playbackQuality", "Auto"))
            } catch (e) { this.vmError.emit(e) }
        }
        listenToTextTracksForChanges() {
            var e, t, i;
            if (this.textTracksDisposal.empty(), S(this.mediaEl) || this.shouldRenderNativeTextTracks) return;
            const n = (i = ((t = (e = this.dash) === null || e === void 0 ? void 0 : e.getCurrentTrackFor("text")) === null || t === void 0 ? void 0 : t.index) - 1) !== null && i !== void 0 ? i : -1;
            this.currentTextTrack = n, this.dispatch("currentTextTrack", n), this.textTracksDisposal.add(J(this.mediaEl.textTracks, "change", this.onTextTracksChange.bind(this)))
        }
        getTextTracks() { var e, t; return Array.from((t = (e = this.mediaEl) === null || e === void 0 ? void 0 : e.textTracks) !== null && t !== void 0 ? t : []) }
        hideCurrentTextTrack() {
            const e = this.getTextTracks();
            e[this.currentTextTrack] && this.isTextTrackVisible && (e[this.currentTextTrack].mode = "hidden")
        }
        onTextTracksChange() { this.hideCurrentTextTrack(), this.dispatch("textTracks", this.getTextTracks()), this.dispatch("isTextTrackVisible", this.isTextTrackVisible), this.dispatch("currentTextTrack", this.currentTextTrack) }
        getAdapter() {
            var e, t;
            return kt(this, void 0, void 0, function*() {
                const i = (t = yield(e = this.videoProvider) === null || e === void 0 ? void 0 : e.getAdapter()) !== null && t !== void 0 ? t : {},
                    n = i.canPlay;
                return Object.assign(Object.assign({}, i), {
                    getInternalPlayer: () => kt(this, void 0, void 0, function*() { return this.dash }),
                    canPlay: r => kt(this, void 0, void 0, function*() { var o; return xe(r) && x0.test(r) || ((o = n == null ? void 0 : n(r)) !== null && o !== void 0 ? o : !1) }),
                    canSetPlaybackQuality: () => kt(this, void 0, void 0, function*() { var r, o; try { return ((o = (r = this.dash) === null || r === void 0 ? void 0 : r.getBitrateInfoListFor("video")) === null || o === void 0 ? void 0 : o.length) > 0 } catch (s) { return this.vmError.emit(s), !1 } }),
                    setPlaybackQuality: r => kt(this, void 0, void 0, function*() {
                        if (!S(this.dash)) {
                            const o = this.findLevelIndexFromQuality(r);
                            this.dash.updateSettings({ streaming: { abr: { autoSwitchBitrate: { video: o === -1 } } } }), o >= 0 && this.dash.setQualityFor("video", o), this.dispatch("playbackQuality", r)
                        }
                    }),
                    setCurrentTextTrack: r => kt(this, void 0, void 0, function*() {
                        var o;
                        this.shouldRenderNativeTextTracks ? i.setCurrentTextTrack(r) : (this.currentTextTrack = r, (o = this.dash) === null || o === void 0 || o.setTextTrack(r), this.onTextTracksChange())
                    }),
                    setTextTrackVisibility: r => kt(this, void 0, void 0, function*() {
                        var o;
                        this.shouldRenderNativeTextTracks ? i.setTextTrackVisibility(r) : (this.isTextTrackVisible = r, (o = this.dash) === null || o === void 0 || o.enableText(r), this.onTextTracksChange())
                    })
                })
            })
        }
        render() { return m("vm-video", { willAttach: !0, crossOrigin: this.crossOrigin, preload: this.preload, poster: this.poster, controlsList: this.controlsList, autoPiP: this.autoPiP, disablePiP: this.disablePiP, hasCustomTextManager: !this.shouldRenderNativeTextTracks, disableRemotePlayback: this.disableRemotePlayback, mediaTitle: this.mediaTitle, ref: e => { this.videoProvider = e } }) }
        static get watchers() { return { src: ["onSrcChange"], hasAttached: ["onSrcChange"], shouldRenderNativeTextTracks: ["onShouldRenderNativeTextTracks"], isTextTrackVisible: ["onTextTrackChange"], currentTextTrack: ["onTextTrackChange"] } }
        static get style() { return my }
    },
    gy = ":host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--vm-dbl-click-fullscreen-z-index)}.dblClickFullscreen{display:none;width:100%;height:100%;pointer-events:none}.dblClickFullscreen.enabled{display:inline-block;pointer-events:auto}";
var el = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const yy = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.canSetFullscreen = !1, this.useOnMobile = !1, this.isFullscreenActive = !0, this.isVideoView = !1, this.playbackReady = !1, this.isMobile = !1, this.clicks = 0, V(this), W(this, ["playbackReady", "isFullscreenActive", "isVideoView", "isMobile"]) }
        onPlaybackReadyChange() {
            return el(this, void 0, void 0, function*() {
                const e = yield Ft(this);
                S(e) || (this.canSetFullscreen = yield e.canSetFullscreen())
            })
        }
        onTriggerClickToPlay() {
            return el(this, void 0, void 0, function*() {
                const [e] = ap(this, "vm-click-to-play");
                yield e == null ? void 0 : e.forceClick()
            })
        }
        onToggleFullscreen() {
            return el(this, void 0, void 0, function*() {
                const e = yield Ft(this);
                S(e) || (this.isFullscreenActive ? e.exitFullscreen() : e.enterFullscreen())
            })
        }
        onClick() { this.clicks += 1, this.clicks === 1 && setTimeout(() => { this.clicks === 1 ? this.onTriggerClickToPlay() : this.onToggleFullscreen(), this.clicks = 0 }, 300) }
        render() { return m("div", { class: { dblClickFullscreen: !0, enabled: this.playbackReady && this.canSetFullscreen && this.isVideoView && (!this.isMobile || this.useOnMobile) }, onClick: this.onClick.bind(this) }) }
        static get watchers() { return { playbackReady: ["onPlaybackReadyChange"] } }
        static get style() { return gy }
    },
    ky = ":host{display:contents;pointer-events:none;z-index:var(--vm-controls-z-index)}",
    wy = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.activeDuration = 2750, this.waitForPlaybackStart = !1, this.hideWhenPaused = !1, this.hideOnMouseLeave = !1, this.isMobile = !1, this.isLive = !1, this.isAudioView = !1, this.isVideoView = !1, V(this), W(this, ["theme", "isMobile", "isAudioView", "isVideoView", "isLive"]) }
        buildAudioControls() { return m("vm-controls", { fullWidth: !0 }, m("vm-playback-control", { tooltipDirection: "right" }), m("vm-volume-control", null), !this.isLive && m("vm-current-time", null), this.isLive && m("vm-control-spacer", null), !this.isLive && m("vm-scrubber-control", null), this.isLive && m("vm-live-indicator", null), !this.isLive && m("vm-end-time", null), !this.isLive && m("vm-settings-control", { tooltipDirection: "left" }), m("div", { style: { marginLeft: "0", paddingRight: "2px" } })) }
        buildMobileVideoControls() { return m(Yc, null, m("vm-scrim", { gradient: "up" }), m("vm-controls", { pin: "topLeft", fullWidth: !0, activeDuration: this.activeDuration, waitForPlaybackStart: this.waitForPlaybackStart, hideWhenPaused: this.hideWhenPaused }, m("vm-control-spacer", null), m("vm-volume-control", null), !this.isLive && m("vm-caption-control", null), !this.isLive && m("vm-settings-control", null), this.isLive && m("vm-fullscreen-control", null)), m("vm-controls", { pin: "center", justify: "center", activeDuration: this.activeDuration, waitForPlaybackStart: this.waitForPlaybackStart, hideWhenPaused: this.hideWhenPaused }, m("vm-playback-control", { style: { "--vm-control-scale": "1.3" } })), !this.isLive && m("vm-controls", { pin: "bottomLeft", fullWidth: !0, activeDuration: this.activeDuration, waitForPlaybackStart: this.waitForPlaybackStart, hideWhenPaused: this.hideWhenPaused }, m("vm-control-group", null, m("vm-current-time", null), m("vm-control-spacer", null), m("vm-end-time", null), m("vm-fullscreen-control", null)), m("vm-control-group", { space: "top" }, m("vm-scrubber-control", null)))) }
        buildDesktopVideoControls() { return m(Yc, null, this.theme !== "light" && m("vm-scrim", { gradient: "up" }), m("vm-controls", { fullWidth: !0, pin: "bottomRight", activeDuration: this.activeDuration, waitForPlaybackStart: this.waitForPlaybackStart, hideWhenPaused: this.hideWhenPaused, hideOnMouseLeave: this.hideOnMouseLeave }, !this.isLive && m("vm-control-group", null, m("vm-scrubber-control", null)), m("vm-control-group", { space: this.isLive ? "none" : "top" }, m("vm-playback-control", { tooltipDirection: "right" }), m("vm-volume-control", null), !this.isLive && m("vm-time-progress", null), m("vm-control-spacer", null), !this.isLive && m("vm-caption-control", null), this.isLive && m("vm-live-indicator", null), m("vm-pip-control", null), !this.isLive && m("vm-settings-control", null), m("vm-fullscreen-control", { tooltipDirection: "left" })))) }
        render() { return this.isAudioView ? this.buildAudioControls() : this.isVideoView && this.isMobile ? this.buildMobileVideoControls() : this.isVideoView ? this.buildDesktopVideoControls() : null }
        static get style() { return ky }
    },
    by = ":host{z-index:var(--vm-menu-z-index)}";
var tl = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const xy = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.textTracksDisposal = new pe, this.canSetPlaybackRate = !1, this.canSetPlaybackQuality = !1, this.canSetTextTrack = !1, this.canSetAudioTrack = !1, this.pin = "bottomRight", this.i18n = {}, this.playbackReady = !1, this.playbackRate = 1, this.playbackRates = [1], this.isVideoView = !1, this.playbackQualities = [], this.textTracks = [], this.currentTextTrack = -1, this.audioTracks = [], this.currentAudioTrack = -1, this.isTextTrackVisible = !0, V(this), W(this, ["i18n", "playbackReady", "playbackRate", "playbackRates", "playbackQuality", "playbackQualities", "isVideoView", "textTracks", "currentTextTrack", "isTextTrackVisible", "audioTracks", "currentAudioTrack"]) }
        onPlaybackReady() {
            return tl(this, void 0, void 0, function*() {
                const e = yield Ft(this);
                S(e) || (this.canSetPlaybackQuality = yield e.canSetPlaybackQuality(), this.canSetPlaybackRate = yield e.canSetPlaybackRate())
            })
        }
        onAudioTracksChange() {
            var e;
            return tl(this, void 0, void 0, function*() {
                const t = Ct(this);
                this.canSetAudioTrack = (e = yield t == null ? void 0 : t.canSetAudioTrack()) !== null && e !== void 0 ? e : !1
            })
        }
        onTextTracksChange() {
            var e;
            return tl(this, void 0, void 0, function*() {
                const t = Ct(this);
                this.canSetTextTrack = (e = yield t == null ? void 0 : t.canSetTextTrack()) !== null && e !== void 0 ? e : !1
            })
        }
        connectedCallback() { this.dispatch = Ot(this) }
        componentDidLoad() { this.onTextTracksChange() }
        disconnectedCallback() { this.textTracksDisposal.empty() }
        onPlaybackRateSelect(e) {
            const t = e.target;
            this.dispatch("playbackRate", parseFloat(t.value))
        }
        buildPlaybackRateSubmenu() { if (this.playbackRates.length <= 1 || !this.canSetPlaybackRate) return m("vm-menu-item", { label: this.i18n.playbackRate, hint: this.i18n.normal }); const e = t => t === 1 ? this.i18n.normal : `${t}`; return m("vm-submenu", { label: this.i18n.playbackRate, hint: e(this.playbackRate) }, m("vm-menu-radio-group", { value: `${this.playbackRate}`, onVmCheck: this.onPlaybackRateSelect.bind(this) }, this.playbackRates.map(t => m("vm-menu-radio", { label: e(t), value: `${t}` })))) }
        onPlaybackQualitySelect(e) {
            const t = e.target;
            this.dispatch("playbackQuality", t.value)
        }
        buildPlaybackQualitySubmenu() { var e; if (this.playbackQualities.length <= 1 || !this.canSetPlaybackQuality) return m("vm-menu-item", { label: this.i18n.playbackQuality, hint: (e = this.playbackQuality) !== null && e !== void 0 ? e : this.i18n.auto }); const t = i => { const n = parseInt(i.slice(0, -1), 10); if (n >= 2160) return "UHD"; if (n >= 1080) return "HD" }; return m("vm-submenu", { label: this.i18n.playbackQuality, hint: this.playbackQuality }, m("vm-menu-radio-group", { value: this.playbackQuality, onVmCheck: this.onPlaybackQualitySelect.bind(this) }, this.playbackQualities.map(i => m("vm-menu-radio", { label: i, value: i, badge: t(i) })))) }
        onTextTrackSelect(e) {
            const t = e.target,
                i = parseInt(t.value, 10),
                n = Ct(this);
            if (i === -1) { n == null || n.setTextTrackVisibility(!1); return }
            n == null || n.setTextTrackVisibility(!0), n == null || n.setCurrentTextTrack(i)
        }
        buildTextTracksSubmenu() { var e, t, i; return this.textTracks.length <= 1 || !this.canSetTextTrack ? m("vm-menu-item", { label: this.i18n.subtitlesOrCc, hint: (t = (e = this.textTracks[this.currentTextTrack]) === null || e === void 0 ? void 0 : e.label) !== null && t !== void 0 ? t : this.i18n.none }) : m("vm-submenu", { label: this.i18n.subtitlesOrCc, hint: this.isTextTrackVisible ? (i = this.textTracks[this.currentTextTrack]) === null || i === void 0 ? void 0 : i.label : this.i18n.off }, m("vm-menu-radio-group", { value: `${this.isTextTrackVisible?this.currentTextTrack:-1}`, onVmCheck: this.onTextTrackSelect.bind(this) }, [m("vm-menu-radio", { label: this.i18n.off, value: "-1" })].concat(this.textTracks.map((n, r) => m("vm-menu-radio", { label: n.label, value: `${r}` }))))) }
        onAudioTrackSelect(e) {
            const t = e.target,
                i = parseInt(t.value, 10),
                n = Ct(this);
            n == null || n.setCurrentAudioTrack(i)
        }
        buildAudioTracksMenu() { var e, t, i; return this.audioTracks.length <= 1 || !this.canSetAudioTrack ? m("vm-menu-item", { label: this.i18n.audio, hint: (t = (e = this.audioTracks[this.currentAudioTrack]) === null || e === void 0 ? void 0 : e.label) !== null && t !== void 0 ? t : this.i18n.default }) : m("vm-submenu", { label: this.i18n.audio, hint: (i = this.audioTracks[this.currentAudioTrack]) === null || i === void 0 ? void 0 : i.label }, m("vm-menu-radio-group", { value: `${this.currentAudioTrack}`, onVmCheck: this.onAudioTrackSelect.bind(this) }, this.audioTracks.map((n, r) => m("vm-menu-radio", { label: n.label, value: `${r}` })))) }
        render() { return m("vm-settings", { pin: this.pin }, this.buildAudioTracksMenu(), this.buildPlaybackRateSubmenu(), this.buildPlaybackQualitySubmenu(), this.isVideoView && this.buildTextTracksSubmenu(), m("slot", null)) }
        static get watchers() { return { playbackReady: ["onPlaybackReady", "onAudioTracksChange", "onTextTracksChange"], audioTracks: ["onAudioTracksChange"], textTracks: ["onTextTracksChange"] } }
        static get style() { return by }
    },
    Cy = ":host{display:contents;pointer-events:none}",
    Ty = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.noClickToPlay = !1, this.noDblClickFullscreen = !1, this.noCaptions = !1, this.noPoster = !1, this.noSpinner = !1, this.noControls = !1, this.noSettings = !1, this.noLoadingScreen = !1, V(this) }
        render() { return m("vm-ui", null, !this.noClickToPlay && m("vm-click-to-play", null), !this.noDblClickFullscreen && m("vm-dbl-click-fullscreen", null), !this.noCaptions && m("vm-captions", null), !this.noPoster && m("vm-poster", null), !this.noSpinner && m("vm-spinner", null), !this.noLoadingScreen && m("vm-loading-screen", null), !this.noControls && m("vm-default-controls", null), !this.noSettings && m("vm-default-settings", null), m("slot", null)) }
        static get style() { return Cy }
    };
class cu {
    constructor(t, i, n) {
        var r;
        this.el = t, this.attributes = i, this.onLoad = n, this.hasLoaded = !1, !$e(this.el) && (this.intersectionObs = this.canObserveIntersection() ? new IntersectionObserver(this.onIntersection.bind(this)) : void 0, this.mutationObs = this.canObserveMutations() ? new MutationObserver(this.onMutation.bind(this)) : void 0, (r = this.mutationObs) === null || r === void 0 || r.observe(this.el, { childList: !0, subtree: !0, attributeFilter: this.attributes }), this.lazyLoad())
    }
    didLoad() { return this.hasLoaded }
    destroy() {
        var t, i;
        (t = this.intersectionObs) === null || t === void 0 || t.disconnect(), (i = this.mutationObs) === null || i === void 0 || i.disconnect()
    }
    canObserveIntersection() { return Pe && window.IntersectionObserver }
    canObserveMutations() { return Pe && window.MutationObserver }
    lazyLoad() {
        var t;
        this.canObserveIntersection() ? (t = this.intersectionObs) === null || t === void 0 || t.observe(this.el) : this.load()
    }
    onIntersection(t) {
        t.forEach(i => {
            (i.intersectionRatio > 0 || i.isIntersecting) && (this.load(), this.intersectionObs.unobserve(i.target))
        })
    }
    onMutation() { this.hasLoaded && this.load() }
    getLazyElements() { return ($e(this.el.shadowRoot) ? this.el : this.el.shadowRoot).querySelectorAll(".lazy") }
    load() { window.requestAnimationFrame(() => { this.getLazyElements().forEach(this.loadEl.bind(this)) }) }
    loadEl(t) {
        var i, n;
        (i = this.intersectionObs) === null || i === void 0 || i.unobserve(t), this.hasLoaded = !0, (n = this.onLoad) === null || n === void 0 || n.call(this, t)
    }
}
const Sy = ":host{z-index:var(--vm-media-z-index)}iframe{position:absolute;top:0;left:0;border:0;width:100%;height:100%;user-select:none}";
var Ey = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
let ld = 0;
const Yr = new Set,
    Py = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.vmEmbedSrcChange = T(this, "vmEmbedSrcChange", 3), this.vmEmbedMessage = T(this, "vmEmbedMessage", 3), this.vmEmbedLoaded = T(this, "vmEmbedLoaded", 3), this.srcWithParams = "", this.hasEnteredViewport = !1, this.embedSrc = "", this.mediaTitle = "", this.params = "", this.preconnections = [], V(this) }
        onEmbedSrcChange() { this.srcWithParams = xe(this.embedSrc) && this.embedSrc.length > 0 ? dy(this.embedSrc, this.params) : void 0 }
        srcWithParamsChange() { if (S(this.srcWithParams)) { this.vmEmbedSrcChange.emit(this.srcWithParams); return }!this.hasEnteredViewport && !Yr.has(this.embedSrc) && sd(this.srcWithParams) && Yr.add(this.embedSrc), this.vmEmbedSrcChange.emit(this.srcWithParams) }
        preconnectionsChange() { this.hasEnteredViewport || this.preconnections.filter(e => !Yr.has(e)).forEach(e => { sd(e) && Yr.add(e) }) }
        connectedCallback() {
            this.lazyLoader = new cu(this.host, ["data-src"], e => {
                const t = e.getAttribute("data-src");
                e.removeAttribute("src"), It(t) || e.setAttribute("src", t)
            }), this.onEmbedSrcChange(), this.genIframeId()
        }
        disconnectedCallback() { this.lazyLoader.destroy() }
        onWindowMessage(e) {
            var t, i, n;
            if (!(e.source === ((t = this.iframe) === null || t === void 0 ? void 0 : t.contentWindow) && (!xe(this.origin) || this.origin === e.origin))) return;
            const o = (n = (i = this.decoder) === null || i === void 0 ? void 0 : i.call(this, e.data)) !== null && n !== void 0 ? n : e.data;
            o && this.vmEmbedMessage.emit(o)
        }
        postMessage(e, t) {
            var i, n;
            return Ey(this, void 0, void 0, function*() {
                (n = (i = this.iframe) === null || i === void 0 ? void 0 : i.contentWindow) === null || n === void 0 || n.postMessage(JSON.stringify(e), t != null ? t : "*")
            })
        }
        onLoad() { this.vmEmbedLoaded.emit() }
        genIframeId() { ld += 1, this.id = `vm-iframe-${ld}` }
        render() { return m("iframe", { id: this.id, class: "lazy", title: this.mediaTitle, "data-src": this.srcWithParams, allowFullScreen: !0, allow: "autoplay; encrypted-media; picture-in-picture;", onLoad: this.onLoad.bind(this), ref: e => { this.iframe = e } }) }
        get host() { return this }
        static get watchers() { return { embedSrc: ["onEmbedSrcChange"], params: ["onEmbedSrcChange"], srcWithParams: ["srcWithParamsChange"], preconnections: ["preconnectionsChange"] } }
        static get style() { return Sy }
    },
    Ay = ":host{display:flex;align-items:center;justify-content:center}",
    Ly = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.duration = -1, this.i18n = {}, this.alwaysShowHours = !1, V(this), W(this, ["duration", "i18n"]) }
        render() { return m("vm-time", { label: this.i18n.duration, seconds: Math.max(0, this.duration), alwaysShowHours: this.alwaysShowHours }) }
        static get style() { return Ay }
    };
var Oe = { fullscreenEnabled: 0, fullscreenElement: 1, requestFullscreen: 2, exitFullscreen: 3, fullscreenchange: 4, fullscreenerror: 5, fullscreen: 6 },
    ad = ["webkitFullscreenEnabled", "webkitFullscreenElement", "webkitRequestFullscreen", "webkitExitFullscreen", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"],
    ud = ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"],
    cd = ["msFullscreenEnabled", "msFullscreenElement", "msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"],
    Me = typeof window != "undefined" && typeof window.document != "undefined" ? window.document : {},
    Xe = "fullscreenEnabled" in Me && Object.keys(Oe) || ad[0] in Me && ad || ud[0] in Me && ud || cd[0] in Me && cd || [],
    ci = { requestFullscreen: function(e) { return e[Xe[Oe.requestFullscreen]]() }, requestFullscreenFunction: function(e) { return e[Xe[Oe.requestFullscreen]] }, get exitFullscreen() { return Me[Xe[Oe.exitFullscreen]].bind(Me) }, get fullscreenPseudoClass() { return ":" + Xe[Oe.fullscreen] }, addEventListener: function(e, t, i) { return Me.addEventListener(Xe[Oe[e]], t, i) }, removeEventListener: function(e, t, i) { return Me.removeEventListener(Xe[Oe[e]], t, i) }, get fullscreenEnabled() { return Boolean(Me[Xe[Oe.fullscreenEnabled]]) }, set fullscreenEnabled(e) {}, get fullscreenElement() { return Me[Xe[Oe.fullscreenElement]] }, set fullscreenElement(e) {}, get onfullscreenchange() { return Me[("on" + Xe[Oe.fullscreenchange]).toLowerCase()] }, set onfullscreenchange(e) { return Me[("on" + Xe[Oe.fullscreenchange]).toLowerCase()] = e }, get onfullscreenerror() { return Me[("on" + Xe[Oe.fullscreenerror]).toLowerCase()] }, set onfullscreenerror(e) { return Me[("on" + Xe[Oe.fullscreenerror]).toLowerCase()] = e } };

function kp(e) {
    return {
        all: e = e || new Map,
        on: function(t, i) {
            var n = e.get(t);
            n ? n.push(i) : e.set(t, [i])
        },
        off: function(t, i) {
            var n = e.get(t);
            n && (i ? n.splice(n.indexOf(i) >>> 0, 1) : e.set(t, []))
        },
        emit: function(t, i) {
            var n = e.get(t);
            n && n.slice().map(function(r) { r(i) }), (n = e.get("*")) && n.slice().map(function(r) { r(t, i) })
        }
    }
}
var Mn = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
class wp {
    constructor(t) { this.host = t, this.disposal = new pe, this.emitter = kp() }
    get isSupported() { return this.isSupportedNatively }
    get isSupportedNatively() { return ci.fullscreenEnabled }
    get isFullscreen() { return this.isNativeFullscreen }
    get isNativeFullscreen() { if (ci.fullscreenElement === this.host) return !0; try { return this.host.matches(ci.fullscreenPseudoClass) } catch { return !1 } }
    on(t, i) { this.emitter.on(t, i) }
    off(t, i) { this.emitter.off(t, i) }
    destroy() { return Mn(this, void 0, void 0, function*() { this.isFullscreen && (yield this.exitFullscreen()), this.disposal.empty(), this.emitter.all.clear() }) }
    addFullscreenChangeEventListener(t) { return this.isSupported ? J(ci, "fullscreenchange", t) : mt }
    addFullscreenErrorEventListener(t) { return this.isSupported ? J(ci, "fullscreenerror", t) : mt }
    requestFullscreen() { return Mn(this, void 0, void 0, function*() { if (!this.isFullscreen) return this.throwIfNoFullscreenSupport(), this.disposal.add(this.addFullscreenChangeEventListener(this.handleFullscreenChange.bind(this))), this.disposal.add(this.addFullscreenErrorEventListener(this.handleFullscreenError.bind(this))), this.makeEnterFullscreenRequest() }) }
    makeEnterFullscreenRequest() { return Mn(this, void 0, void 0, function*() { return ci.requestFullscreen(this.host) }) }
    handleFullscreenChange() { this.isFullscreen || this.disposal.empty(), this.emitter.emit("change", this.isFullscreen) }
    handleFullscreenError(t) { this.emitter.emit("error", t) }
    exitFullscreen() { return Mn(this, void 0, void 0, function*() { if (!!this.isFullscreen) return this.throwIfNoFullscreenSupport(), this.makeExitFullscreenRequest() }) }
    makeExitFullscreenRequest() { return Mn(this, void 0, void 0, function*() { return ci.exitFullscreen() }) }
    throwIfNoFullscreenSupport() { if (!this.isSupported) throw Error("Fullscreen API is not enabled or supported in this environment.") }
}
var dd = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
class Ry extends wp {
    constructor(t, i) { super(t), this.host = t, this.presentationController = i }
    get isFullscreen() { return this.presentationController.isFullscreenMode }
    get isSupported() { return this.presentationController.isSupported }
    makeEnterFullscreenRequest() { return dd(this, void 0, void 0, function*() { return this.presentationController.setPresentationMode("fullscreen") }) }
    makeExitFullscreenRequest() { return dd(this, void 0, void 0, function*() { return this.presentationController.setPresentationMode("inline") }) }
    addFullscreenChangeEventListener() { return this.isSupported ? (this.presentationController.on("change", this.handlePresentationModeChange.bind(this)), () => { this.presentationController.off("change", this.handlePresentationModeChange.bind(this)) }) : mt }
    handlePresentationModeChange() { this.handleFullscreenChange() }
    addFullscreenErrorEventListener() { return mt }
}
var My = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
class _y {
    constructor(t) {
        this.host = t, this.disposal = new pe, this.emitter = kp();
        const i = t.disconnectedCallback;
        t.disconnectedCallback = () => My(this, void 0, void 0, function*() { yield this.destroy(), i == null || i.call(t) })
    }
    get videoElement() { var t; if (((t = this.host.mediaEl) === null || t === void 0 ? void 0 : t.tagName.toLowerCase()) === "video") return this.host.mediaEl }
    get presentationMode() { var t; return (t = this.videoElement) === null || t === void 0 ? void 0 : t.webkitPresentationMode }
    get isInlineMode() { return this.presentationMode === "inline" }
    get isPictureInPictureMode() { return this.presentationMode === "inline" }
    get isFullscreenMode() { return this.presentationMode === "fullscreen" }
    get isSupported() { var t, i, n; return yn && oa((t = this.videoElement) === null || t === void 0 ? void 0 : t.webkitSetPresentationMode) && ((n = (i = this.videoElement) === null || i === void 0 ? void 0 : i.webkitSupportsFullscreen) !== null && n !== void 0 ? n : !1) }
    setPresentationMode(t) {
        var i, n;
        (n = (i = this.videoElement) === null || i === void 0 ? void 0 : i.webkitSetPresentationMode) === null || n === void 0 || n.call(i, t)
    }
    on(t, i) { this.emitter.on(t, i) }
    off(t, i) { this.emitter.off(t, i) }
    destroy() { this.setPresentationMode("inline"), this.disposal.empty() }
    addPresentationModeChangeEventListener() { return !this.isSupported || $e(this.videoElement) ? mt : J(this.videoElement, "webkitpresentationmodechanged", this.handlePresentationModeChange.bind(this)) }
    handlePresentationModeChange() { this.emitter.emit("change", this.presentationMode) }
}
const Iy = "audio.sc-vm-file,video.sc-vm-file{border-radius:inherit;vertical-align:middle;width:100%;outline:0}video.sc-vm-file{position:absolute;top:0;left:0;border:0;height:100%;user-select:none}";
var Ce = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const $y = class extends HTMLElement {
        constructor() {
            super(), this.__registerHost(), this.vmLoadStart = T(this, "vmLoadStart", 7), this.vmError = T(this, "vmError", 7), this.vmMediaElChange = T(this, "vmMediaElChange", 7), this.vmSrcSetChange = T(this, "vmSrcSetChange", 7), this.textTracksDisposal = new pe, this.wasPausedBeforeSeeking = !0, this.currentSrcSet = [], this.mediaQueryDisposal = new pe, this.willAttach = !1, this.preload = "metadata", this.playbackRates = [.25, .5, .75, 1, 1.25, 1.5, 2], this.language = "en", this.autoplay = !1, this.controls = !1, this.loop = !1, this.muted = !1, this.playsinline = !1, this.noConnect = !1, this.paused = !0, this.currentTime = 0, this.volume = 0, this.playbackReady = !1, this.playbackStarted = !1, this.presentationController = new _y(this), this.fullscreenController = new Ry(this, this.presentationController), this.currentTextTrack = -1, this.hasCustomTextManager = !1, this.isTextTrackVisible = !0, this.shouldRenderNativeTextTracks = !0, V(this), li(this), fs(this, ["playbackReady", "playbackStarted", "currentTime", "volume", "paused", "currentTextTrack", "isTextTrackVisible", "shouldRenderNativeTextTracks"]), up(this, "vm-poster", e => {
                [this.vmPoster] = e
            })
        }
        onMediaTitleChange() { this.dispatch("mediaTitle", this.mediaTitle) }
        onPosterChange() {
            var e;
            this.playbackStarted || (e = this.mediaEl) === null || e === void 0 || e.load()
        }
        onViewTypeChange() { this.dispatch("viewType", this.viewType) }
        connectedCallback() { this.initLazyLoader(), this.dispatch = gn(this), this.onViewTypeChange(), this.onPosterChange(), this.onMediaTitleChange(), this.addPresentationControllerListeners() }
        componentDidRender() { this.prevMediaEl !== this.mediaEl && (this.prevMediaEl = this.mediaEl, this.vmMediaElChange.emit(this.mediaEl), this.presentationController.addPresentationModeChangeEventListener()) }
        componentDidLoad() { this.onViewTypeChange() }
        disconnectedCallback() {
            var e;
            this.mediaQueryDisposal.empty(), this.textTracksDisposal.empty(), this.cancelTimeUpdates(), (e = this.lazyLoader) === null || e === void 0 || e.destroy(), this.wasPausedBeforeSeeking = !0
        }
        initLazyLoader() {
            this.lazyLoader = new cu(this.host, ["data-src", "data-poster"], () => {
                if ($e(this.mediaEl)) return;
                const e = this.mediaEl.getAttribute("data-poster");
                It(e) || this.mediaEl.setAttribute("poster", e), this.refresh(), this.didSrcSetChange()
            })
        }
        refresh() {
            if ($e(this.mediaEl)) return;
            const { children: e } = this.mediaEl;
            for (let t = 0; t <= e.length - 1; t += 1) {
                const i = e[t],
                    n = i.getAttribute("data-src") || i.getAttribute("src") || i.getAttribute("data-vs");
                i.removeAttribute("src"), !It(n) && (i.setAttribute("data-vs", n), i.setAttribute("src", n))
            }
        }
        didSrcSetChange() {
            if ($e(this.mediaEl)) return;
            const t = Array.from(this.mediaEl.querySelectorAll("source")).map(n => { var r; return { src: n.getAttribute("data-vs"), media: (r = n.getAttribute("data-media")) !== null && r !== void 0 ? r : void 0, ref: n } });
            (this.currentSrcSet.length !== t.length || t.some((n, r) => this.currentSrcSet[r].src !== n.src)) && (this.currentSrcSet = t, this.onSrcSetChange())
        }
        onSrcSetChange() {
            var e;
            this.textTracksDisposal.empty(), this.mediaQueryDisposal.empty(), this.vmLoadStart.emit(), this.vmSrcSetChange.emit(this.currentSrcSet), this.willAttach || (e = this.mediaEl) === null || e === void 0 || e.load()
        }
        hasCustomPoster() { return !yn && !S(this.vmPoster) }
        cancelTimeUpdates() { At(this.timeRAF) && window.cancelAnimationFrame(this.timeRAF), this.timeRAF = void 0 }
        requestTimeUpdates() {
            var e, t;
            this.dispatch("currentTime", (t = (e = this.mediaEl) === null || e === void 0 ? void 0 : e.currentTime) !== null && t !== void 0 ? t : 0), this.timeRAF = window.requestAnimationFrame(() => { this.requestTimeUpdates() })
        }
        getMediaType() { const { currentSrc: e } = this.mediaEl; if (aa.test(e)) return vt.Audio; if (td.test(e) || ua.test(e)) return vt.Video }
        onLoadedMetadata() { this.mediaEl.volume = this.volume / 100, this.listenToTextTracksForChanges(), this.onTextTracksChange(), this.onProgress(), this.dispatch("currentPoster", this.poster), this.dispatch("duration", this.mediaEl.duration), this.dispatch("playbackRates", this.playbackRates), this.willAttach || (this.dispatch("currentSrc", this.mediaEl.currentSrc), this.dispatch("mediaType", this.getMediaType()), this.dispatch("playbackReady", !0)) }
        onProgress() {
            const { buffered: e, duration: t } = this.mediaEl, i = e.length === 0 ? 0 : e.end(e.length - 1);
            this.dispatch("buffered", i > t ? t : i)
        }
        onPlay() { this.requestTimeUpdates(), this.dispatch("paused", !1), this.playbackStarted || this.dispatch("playbackStarted", !0) }
        onPause() { this.cancelTimeUpdates(), this.dispatch("paused", !0), this.dispatch("buffering", !1) }
        onPlaying() { this.dispatch("playing", !0), this.dispatch("buffering", !1) }
        onSeeking() { this.wasPausedBeforeSeeking || (this.wasPausedBeforeSeeking = this.mediaEl.paused), this.dispatch("currentTime", this.mediaEl.currentTime), this.dispatch("seeking", !0) }
        onSeeked() { this.currentTime === 0 && !this.playbackStarted || (this.dispatch("seeking", !1), (!this.playbackStarted || !this.wasPausedBeforeSeeking) && this.attemptToPlay(), this.wasPausedBeforeSeeking = !0) }
        onRateChange() { this.dispatch("playbackRate", this.mediaEl.playbackRate) }
        onVolumeChange() { this.dispatch("muted", this.mediaEl.muted), this.dispatch("volume", this.mediaEl.volume * 100) }
        onDurationChange() { this.dispatch("duration", this.mediaEl.duration) }
        onWaiting() { this.dispatch("buffering", !0) }
        onSuspend() { this.dispatch("buffering", !1) }
        onEnded() { this.loop || this.dispatch("playbackEnded", !0) }
        onError() { this.vmError.emit(this.mediaEl.error) }
        attemptToPlay() {
            var e;
            try {
                (e = this.mediaEl) === null || e === void 0 || e.play()
            } catch (t) { this.vmError.emit(t) }
        }
        togglePiPInChrome(e) { var t; return e ? (t = this.mediaEl) === null || t === void 0 ? void 0 : t.requestPictureInPicture() : document.exitPictureInPicture() }
        togglePiPInSafari(e) { var t, i; const n = e ? "picture-in-picture" : "inline"; if (!(!((t = this.mediaEl) === null || t === void 0) && t.webkitSupportsPresentationMode(n))) throw new Error("PiP API is not available."); return (i = this.mediaEl) === null || i === void 0 ? void 0 : i.webkitSetPresentationMode(n) }
        togglePiP(e) { return Ce(this, void 0, void 0, function*() { if (mp()) return this.togglePiPInChrome(e); if (vp()) return this.togglePiPInSafari(e); throw new Error("PiP API is not available.") }) }
        onEnterPiP() { this.dispatch("isPiPActive", !0) }
        onLeavePiP() { this.dispatch("isPiPActive", !1) }
        addPresentationControllerListeners() { this.presentationController.on("change", e => { this.dispatch("isPiPActive", e === "picture-in-picture"), this.dispatch("isFullscreenActive", e === "fullscreen") }) }
        getAdapter() { return Ce(this, void 0, void 0, function*() { return { getInternalPlayer: () => Ce(this, void 0, void 0, function*() { return this.mediaEl }), play: () => Ce(this, void 0, void 0, function*() { var e; return (e = this.mediaEl) === null || e === void 0 ? void 0 : e.play() }), pause: () => Ce(this, void 0, void 0, function*() { var e; return (e = this.mediaEl) === null || e === void 0 ? void 0 : e.pause() }), canPlay: e => Ce(this, void 0, void 0, function*() { return xe(e) && (aa.test(e) || td.test(e)) }), setCurrentTime: e => Ce(this, void 0, void 0, function*() { this.mediaEl && (this.mediaEl.currentTime = e) }), setMuted: e => Ce(this, void 0, void 0, function*() { this.mediaEl && (this.mediaEl.muted = e) }), setVolume: e => Ce(this, void 0, void 0, function*() { this.mediaEl && (this.mediaEl.volume = e / 100) }), canSetPlaybackRate: () => Ce(this, void 0, void 0, function*() { return !0 }), setPlaybackRate: e => Ce(this, void 0, void 0, function*() { this.mediaEl && (this.mediaEl.playbackRate = e) }), canSetPiP: () => Ce(this, void 0, void 0, function*() { return iy() }), enterPiP: () => this.togglePiP(!0), exitPiP: () => this.togglePiP(!1), canSetFullscreen: () => Ce(this, void 0, void 0, function*() { return this.fullscreenController.isSupported }), enterFullscreen: () => this.fullscreenController.requestFullscreen(), exitFullscreen: () => this.fullscreenController.exitFullscreen(), setCurrentTextTrack: e => Ce(this, void 0, void 0, function*() { e !== this.currentTextTrack && this.toggleTextTrackModes(e) }), setTextTrackVisibility: e => Ce(this, void 0, void 0, function*() { this.isTextTrackVisible = e, this.toggleTextTrackModes(this.currentTextTrack) }) } }) }
        onHasCustomTextManagerChange() { this.hasCustomTextManager ? this.textTracksDisposal.empty() : this.playbackReady && this.listenToTextTracksForChanges() }
        onShouldRenderNativeTextTracksChange() { this.hasCustomTextManager || this.toggleTextTrackModes(this.currentTextTrack) }
        onProviderConnect(e) { this.noConnect && e.stopImmediatePropagation() }
        onProviderDisconnect(e) { this.noConnect && e.stopImmediatePropagation() }
        getFilteredTextTracks() {
            const e = [],
                t = Array.from(this.mediaEl.textTracks);
            for (let i = 0; i < t.length; i += 1) {
                const n = t[i];
                (n.kind === "subtitles" || n.kind === "captions") && n.label && e.push(t[i])
            }
            return e
        }
        listenToTextTracksForChanges() { this.hasCustomTextManager || (this.textTracksDisposal.empty(), !S(this.mediaEl) && this.textTracksDisposal.add(J(this.mediaEl.textTracks, "change", this.onTextTracksChange.bind(this)))) }
        onTextTracksChange() {
            var e;
            const t = this.getFilteredTextTracks();
            let i = -1;
            for (let n = 0; n < t.length; n += 1)
                if (t[n].mode === "hidden") i = n;
                else if (t[n].mode === "showing") { i = n; break }
            if (!this.shouldRenderNativeTextTracks && ((e = t[i]) === null || e === void 0 ? void 0 : e.mode) === "showing") { t[i].mode = "hidden"; return }
            this.shouldRenderNativeTextTracks && (this.isTextTrackVisible = i !== -1 && t[i].mode === "showing", this.dispatch("isTextTrackVisible", this.isTextTrackVisible)), this.dispatch("textTracks", t), this.dispatch("currentTextTrack", this.shouldRenderNativeTextTracks && !this.isTextTrackVisible ? -1 : i)
        }
        toggleTextTrackModes(e) {
            if ($e(this.mediaEl)) return;
            const { textTracks: t } = this.mediaEl;
            if (e === -1) Array.from(t).forEach(n => { n.mode = "disabled" });
            else {
                const n = t[this.currentTextTrack];
                n && (n.mode = "disabled")
            }
            const i = t[e];
            i && (i.mode = this.isTextTrackVisible && this.shouldRenderNativeTextTracks ? "showing" : "hidden"), this.dispatch("currentTextTrack", this.shouldRenderNativeTextTracks && !this.isTextTrackVisible ? -1 : e), this.dispatch("isTextTrackVisible", this.isTextTrackVisible)
        }
        render() {
            const e = { autoplay: this.autoplay, muted: this.muted, playsinline: this.playsinline, playsInline: this.playsinline, "x5-playsinline": this.playsinline, "webkit-playsinline": this.playsinline, controls: this.controls, crossorigin: this.crossOrigin === "" ? "anonymous" : this.crossOrigin, controlslist: this.controlsList, "data-poster": this.hasCustomPoster() ? void 0 : this.poster, loop: this.loop, preload: this.preload, disablePictureInPicture: this.disablePiP, autoPictureInPicture: this.autoPiP, disableRemotePlayback: this.disableRemotePlayback, "x-webkit-airplay": this.disableRemotePlayback ? "deny" : "allow", ref: n => { this.mediaEl = n }, onLoadedMetadata: this.onLoadedMetadata.bind(this), onProgress: this.onProgress.bind(this), onPlay: this.onPlay.bind(this), onPause: this.onPause.bind(this), onPlaying: this.onPlaying.bind(this), onSeeking: this.onSeeking.bind(this), onSeeked: this.onSeeked.bind(this), onRateChange: this.onRateChange.bind(this), onVolumeChange: this.onVolumeChange.bind(this), onDurationChange: this.onDurationChange.bind(this), onWaiting: this.onWaiting.bind(this), onSuspend: this.onSuspend.bind(this), onEnded: this.onEnded.bind(this), onError: this.onError.bind(this) },
                t = m("audio", Object.assign({ class: "lazy" }, e), m("slot", null), "Your browser does not support the", m("code", null, "audio"), "element."),
                i = m("video", Object.assign({ class: "lazy" }, e, { onenterpictureinpicture: this.onEnterPiP.bind(this), onleavepictureinpicture: this.onLeavePiP.bind(this) }), m("slot", null), "Your browser does not support the", m("code", null, "video"), "element.");
            return this.viewType === Ke.Audio ? t : i
        }
        get host() { return this }
        static get watchers() { return { mediaTitle: ["onMediaTitleChange"], poster: ["onPosterChange"], viewType: ["onViewTypeChange"], hasCustomTextManager: ["onHasCustomTextManagerChange"], shouldRenderNativeTextTracks: ["onShouldRenderNativeTextTracksChange"] } }
        static get style() { return Iy }
    },
    Vy = ":host([hidden]){display:none}";
var Ny = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const zy = class extends HTMLElement {
    constructor() { super(), this.__registerHost(), N(this), this.canSetFullscreen = !1, this.enterIcon = "fullscreen-enter", this.exitIcon = "fullscreen-exit", this.tooltipPosition = "top", this.hideTooltip = !1, this.keys = "f", this.isFullscreenActive = !1, this.i18n = {}, this.playbackReady = !1, V(this), W(this, ["isFullscreenActive", "playbackReady", "i18n"]) }
    onPlaybackReadyChange() {
        var e;
        return Ny(this, void 0, void 0, function*() {
            const t = Ct(this);
            this.canSetFullscreen = (e = yield t == null ? void 0 : t.canSetFullscreen()) !== null && e !== void 0 ? e : !1
        })
    }
    componentDidLoad() { this.onPlaybackReadyChange() }
    onClick() {
        const e = Ct(this);
        this.isFullscreenActive ? e == null || e.exitFullscreen() : e == null || e.enterFullscreen()
    }
    render() {
        const e = this.isFullscreenActive ? this.i18n.exitFullscreen : this.i18n.enterFullscreen,
            t = S(this.keys) ? e : `${e} (${this.keys})`;
        return m(mn, { hidden: !this.canSetFullscreen }, m("vm-control", { label: this.i18n.fullscreen, keys: this.keys, pressed: this.isFullscreenActive, hidden: !this.canSetFullscreen, onClick: this.onClick.bind(this) }, m("vm-icon", { name: this.isFullscreenActive ? this.exitIcon : this.enterIcon, library: this.icons }), m("vm-tooltip", { hidden: this.hideTooltip, position: this.tooltipPosition, direction: this.tooltipDirection }, t)))
    }
    static get watchers() { return { playbackReady: ["onPlaybackReadyChange"] } }
    static get style() { return Vy }
};
var wt = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const Fy = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), this.vmLoadStart = T(this, "vmLoadStart", 7), this.vmError = T(this, "vmError", 7), this.hasAttached = !1, this.version = "latest", this.preload = "metadata", this.playbackReady = !1, V(this), li(this), W(this, ["playbackReady"]) }
        connectedCallback() { this.dispatch = gn(this), this.mediaEl && this.setupHls() }
        disconnectedCallback() { this.destroyHls() }
        get src() {
            if ($e(this.videoProvider)) return;
            const e = this.videoProvider.querySelectorAll("source"),
                t = Array.from(e).find(i => ua.test(i.src) || b0.test(i.type));
            return t == null ? void 0 : t.src
        }
        setupHls() {
            return wt(this, void 0, void 0, function*() {
                if (!!S(this.hls)) try {
                    const e = this.libSrc || `https://cdn.jsdelivr.net/npm/hls.js@${this.version}/dist/hls.min.js`,
                        t = yield yp(e, "Hls");
                    if (!t.isSupported()) { this.vmError.emit("hls.js is not supported"); return }
                    this.hls = new t(this.config), this.hls.on(t.Events.MEDIA_ATTACHED, () => { this.hasAttached = !0, this.onSrcChange() }), this.hls.on(t.Events.AUDIO_TRACKS_UPDATED, () => { this.dispatch("audioTracks", this.hls.audioTracks), this.dispatch("currentAudioTrack", this.hls.audioTrack) }), this.hls.on(t.Events.AUDIO_TRACK_SWITCHED, () => { this.dispatch("currentAudioTrack", this.hls.audioTrack) }), this.hls.on(t.Events.ERROR, (i, n) => {
                        if (n.fatal) switch (n.type) {
                            case t.ErrorTypes.NETWORK_ERROR:
                                this.hls.startLoad();
                                break;
                            case t.ErrorTypes.MEDIA_ERROR:
                                this.hls.recoverMediaError();
                                break;
                            default:
                                this.destroyHls();
                                break
                        }
                        this.vmError.emit({ event: i, data: n })
                    }), this.hls.on(t.Events.MANIFEST_PARSED, () => { this.dispatch("mediaType", vt.Video), this.dispatch("currentSrc", this.src), this.dispatchLevels() }), this.hls.on(t.Events.LEVEL_LOADED, (i, n) => { this.playbackReady || (this.dispatch("duration", n.details.totalduration), this.dispatch("playbackReady", !0)) }), this.hls.attachMedia(this.mediaEl)
                } catch (e) { this.vmError.emit(e) }
            })
        }
        dispatchLevels() {!this.hls.levels || this.hls.levels.length === 0 || (this.dispatch("playbackQualities", ["Auto", ...this.hls.levels.map(this.levelToPlaybackQuality)]), this.dispatch("playbackQuality", "Auto")) }
        levelToPlaybackQuality(e) { return e === -1 ? "Auto" : `${e.height}p` }
        findLevelIndexFromQuality(e) { return this.hls.levels.findIndex(t => this.levelToPlaybackQuality(t) === e) }
        destroyHls() {
            var e;
            (e = this.hls) === null || e === void 0 || e.destroy(), this.hasAttached = !1
        }
        onMediaElChange(e) { return wt(this, void 0, void 0, function*() { this.destroyHls(), !S(e.detail) && (this.mediaEl = e.detail, setTimeout(() => wt(this, void 0, void 0, function*() { yield this.setupHls() }), 50)) }) }
        onSrcChange() { var e; return wt(this, void 0, void 0, function*() { this.hasAttached && this.hls.url !== this.src && (this.vmLoadStart.emit(), (e = this.hls) === null || e === void 0 || e.loadSource(this.src)) }) }
        getAdapter() {
            var e, t;
            return wt(this, void 0, void 0, function*() {
                const i = (t = yield(e = this.videoProvider) === null || e === void 0 ? void 0 : e.getAdapter()) !== null && t !== void 0 ? t : {},
                    n = i.canPlay;
                return Object.assign(Object.assign({}, i), { getInternalPlayer: () => wt(this, void 0, void 0, function*() { return this.hls }), canPlay: r => wt(this, void 0, void 0, function*() { var o; return xe(r) && ua.test(r) || ((o = n == null ? void 0 : n(r)) !== null && o !== void 0 ? o : !1) }), canSetPlaybackQuality: () => wt(this, void 0, void 0, function*() { var r, o; return ((o = (r = this.hls) === null || r === void 0 ? void 0 : r.levels) === null || o === void 0 ? void 0 : o.length) > 0 }), setPlaybackQuality: r => wt(this, void 0, void 0, function*() { S(this.hls) || (this.hls.currentLevel = this.findLevelIndexFromQuality(r), this.dispatch("playbackQuality", r)) }), setCurrentAudioTrack: r => wt(this, void 0, void 0, function*() { S(this.hls) || (this.hls.audioTrack = r) }) })
            })
        }
        render() { return m("vm-video", { willAttach: !0, crossOrigin: this.crossOrigin, preload: this.preload, poster: this.poster, controlsList: this.controlsList, autoPiP: this.autoPiP, disablePiP: this.disablePiP, disableRemotePlayback: this.disableRemotePlayback, mediaTitle: this.mediaTitle, ref: e => { this.videoProvider = e } }, m("slot", null)) }
    },
    hd = "https://cdn.jsdelivr.net/npm/@vime/core@latest/icons",
    du = new Map(Object.entries({ vime: e => `${hd}/vime/vm-${e}.svg`, material: e => `${hd}/material/md-${e}.svg` })),
    ca = new Set;

function Dy(e) {
    const t = ce(e);
    Fe(e, () => { ca.add(t) }, () => { ca.delete(t) })
}
const Oy = e => du.get(e);

function Hy(e, t) { S(t) || du.set(e, t), ca.forEach(i => { i.library === e && i.redraw() }) }

function jy(e) { du.delete(e) }
var Wy = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const il = new Map,
    Uy = e => {
        if (il.has(e)) return il.get(e);
        const t = fetch(e).then(i => Wy(void 0, void 0, void 0, function*() {
            if (i.ok) {
                const n = document.createElement("div");
                n.innerHTML = yield i.text();
                const r = n.firstElementChild;
                return { ok: i.ok, status: i.status, svg: r && r.tagName.toLowerCase() === "svg" ? r.outerHTML : "" }
            }
            return { ok: i.ok, status: i.status }
        }));
        return il.set(e, t), t
    },
    Qy = ":host{display:inline-block;width:1em;height:1em;contain:strict;box-sizing:content-box !important}.icon,svg{display:block;height:100%;width:100%;transition:var(--vm-icon-transition);transform:var(--vm-icon-transform);fill:var(--vm-icon-fill, currentColor);stroke:var(--vm-icon-stroke)}";
var fd = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const By = new DOMParser,
    Ky = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.vmLoad = T(this, "vmLoad", 7), this.vmError = T(this, "vmError", 7), this.icons = "material", V(this), Dy(this) }
        handleChange() { this.setIcon() }
        connectedCallback() { W(this, ["icons"]) }
        componentDidLoad() { this.setIcon() }
        redraw() { return fd(this, void 0, void 0, function*() { this.setIcon() }) }
        getLabel() { let e = ""; return this.label ? e = this.label : this.name ? e = this.name.replace(/-/g, " ") : this.src && (e = this.src.replace(/.*\//, "").replace(/-/g, " ").replace(/\.svg/i, "")), e }
        setIcon() {
            var e;
            return fd(this, void 0, void 0, function*() {
                const t = Oy((e = this.library) !== null && e !== void 0 ? e : this.icons);
                let i = this.src;
                if (this.name && t && (i = t(this.name)), i) try {
                    const n = yield Uy(i);
                    if (n.ok) {
                        const o = By.parseFromString(n.svg, "text/html").body.querySelector("svg");
                        o ? (this.svg = o.outerHTML, this.vmLoad.emit()) : (this.svg = "", this.vmError.emit({ status: n.status }))
                    }
                } catch { this.vmError.emit() }
            })
        }
        render() { return m("div", { class: "icon", role: "img", "aria-label": this.getLabel(), innerHTML: this.svg }) }
        static get watchers() { return { name: ["handleChange"], src: ["handleChange"], library: ["handleChange"], icons: ["handleChange"] } }
        static get style() { return Qy }
    },
    Gy = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.icons = "material", V(this), W(this, ["icons"]) }
        handleUpdate() { this.register() }
        connectedCallback() { this.register() }
        disconnectedCallback() { S(this.name) || jy(this.name) }
        register() {
            var e;
            Hy((e = this.name) !== null && e !== void 0 ? e : this.icons, this.name ? this.resolver : void 0)
        }
        get host() { return this }
        static get watchers() { return { name: ["handleUpdate"], resolver: ["handleUpdate"], icons: ["handleUpdate"] } }
    },
    Yy = ".liveIndicator{display:flex;align-items:center;font-size:13px;font-weight:bold;letter-spacing:0.6px;color:var(--vm-control-color)}.liveIndicator.hidden{display:none}.indicator{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;background-color:var(--vm-live-indicator-color, red)}",
    Xy = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.isLive = !1, this.i18n = {}, V(this), W(this, ["isLive", "i18n"]) }
        render() { return m("div", { class: { liveIndicator: !0, hidden: !this.isLive } }, m("div", { class: "indicator" }), this.i18n.live) }
        static get style() { return Yy }
    },
    qy = `:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--vm-loading-screen-z-index);display:flex;align-items:center;justify-content:center}.loadingScreen{opacity:100;transition:var(--vm-fade-transition)}.loadingScreen.inactive{opacity:0}.dotPulse{position:relative;left:-9999px;width:var(--vm-loading-screen-dot-size);height:var(--vm-loading-screen-dot-size);border-radius:calc(var(--vm-loading-screen-dot-size) / 2);background-color:var(--vm-loading-screen-dot-color);color:var(--vm-loading-screen-dot-color);box-shadow:9999px 0 0 calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1)
    var(--vm-loading-screen-dot-color);animation:dotPulse var(--vm-loading-screen-pulse-duration) infinite linear;animation-delay:calc(var(--vm-loading-screen-pulse-duration) / 6)}.dotPulse::before,.dotPulse::after{content:'';display:inline-block;position:absolute;top:0;width:var(--vm-loading-screen-dot-size);height:var(--vm-loading-screen-dot-size);border-radius:calc(var(--vm-loading-screen-dot-size) / 2);background-color:var(--vm-loading-screen-dot-color);color:var(--vm-loading-screen-dot-color)}.dotPulse::before{box-shadow:9984px 0 0 calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1)
    var(--vm-loading-screen-dot-color);animation:dotPulseBefore var(--vm-loading-screen-pulse-duration) infinite
    linear;animation-delay:0s}.dotPulse::after{box-shadow:10014px 0 0 calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1)
    var(--vm-loading-screen-dot-color);animation:dotPulseAfter var(--vm-loading-screen-pulse-duration) infinite
    linear;animation-delay:calc(var(--vm-loading-screen-pulse-duration) / 3)}@keyframes dotPulseBefore{0%{box-shadow:9984px 0 0
      calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1)
      var(--vm-loading-screen-dot-color)}30%{box-shadow:9984px 0 0 2px var(--vm-loading-screen-dot-color)}60%,100%{box-shadow:9984px 0 0
      calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1)
      var(--vm-loading-screen-dot-color)}}@keyframes dotPulse{0%{box-shadow:9999px 0 0
      calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1)
      var(--vm-loading-screen-dot-color)}30%{box-shadow:9999px 0 0 2px var(--vm-loading-screen-dot-color)}60%,100%{box-shadow:9999px 0 0
      calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1)
      var(--vm-loading-screen-dot-color)}}@keyframes dotPulseAfter{0%{box-shadow:10014px 0 0
      calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1)
      var(--vm-loading-screen-dot-color)}30%{box-shadow:10014px 0 0 2px var(--vm-loading-screen-dot-color)}60%,100%{box-shadow:10014px 0 0
      calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1)
      var(--vm-loading-screen-dot-color)}}`,
    Zy = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.playbackReady = !1, this.hideDots = !1, V(this), W(this, ["playbackReady"]) }
        render() { return m("div", { class: { loadingScreen: !0, inactive: this.playbackReady } }, m("slot", null), !this.hideDots && m("div", { class: "dotPulse" })) }
        static get style() { return qy }
    };

function Jy(e) { return e.tagName.toLowerCase() !== "vm-submenu" ? e : e.shadowRoot.querySelector("vm-menu-item") }

function e1(e) { var t; if (e.tagName.toLowerCase() !== "vm-menu-radio-group") return e; const n = e.shadowRoot.querySelector("slot"); return Array.from((t = n == null ? void 0 : n.assignedElements()) !== null && t !== void 0 ? t : []).filter(o => o.tagName.toLowerCase() === "vm-menu-radio").map(o => o.shadowRoot.querySelector("vm-menu-item")) }

function t1(e) { if (S(e)) return []; const t = ["vm-menu-item", "vm-menu-radio-group", "vm-submenu"]; return Array.from(e != null ? e : []).filter(i => t.includes(i.tagName.toLowerCase())).map(i => Jy(i)).map(i => e1(i)).reduce((i, n) => i.concat(n), []) }
const i1 = ":host{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;pointer-events:none;z-index:var(--vm-menu-z-index)}:host([active]){pointer-events:auto;z-index:calc(var(--vm-menu-z-index) + 1)}.menu{position:absolute;top:0;left:0;width:100%;height:100%;box-sizing:border-box;transition:var(--vm-menu-transition)}.menu.slideIn{transform:translateX(0)}.menu[aria-hidden='true'].slideInFromLeft{transform:translateX(-100%)}.menu[aria-hidden='true'].slideInFromRight{transform:translateX(100%)}.container{display:flex;flex-direction:column;position:relative;text-align:left;width:100%;height:100%;color:var(--vm-menu-color);background:var(--vm-menu-bg);font-size:var(--vm-menu-font-size);font-weight:var(--vm-menu-font-weight)}.menu:focus{outline:0}";
var _n = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const n1 = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.vmOpen = T(this, "vmOpen", 7), this.vmClose = T(this, "vmClose", 7), this.vmFocus = T(this, "vmFocus", 7), this.vmBlur = T(this, "vmBlur", 7), this.vmActiveSubmenuChange = T(this, "vmActiveSubmenuChange", 7), this.vmActiveMenuItemChange = T(this, "vmActiveMenuItemChange", 7), this.vmMenuHeightChange = T(this, "vmMenuHeightChange", 3), this.hasDisconnected = !1, this.active = !1, V(this) }
        onActiveMenuitemChange() { this.vmActiveMenuItemChange.emit(this.activeMenuItem) }
        onActiveSubmenuChange() { this.vmActiveSubmenuChange.emit(this.activeSubmenu) }
        onActiveChange() {
            var e;
            this.hasDisconnected || (this.active ? this.vmOpen.emit(this.host) : this.vmClose.emit(this.host), ((e = this.controller) === null || e === void 0 ? void 0 : e.tagName.toLowerCase()) === "vm-menu-item" && (this.controller.expanded = !0))
        }
        connectedCallback() { this.hasDisconnected = !1 }
        componentDidRender() { Qe(() => { this.hasDisconnected || this.calculateHeight() }) }
        disconnectedCallback() { this.controller = void 0, this.hasDisconnected = !0 }
        focusMenu() {
            var e;
            return _n(this, void 0, void 0, function*() {
                (e = this.menu) === null || e === void 0 || e.focus()
            })
        }
        blurMenu() {
            var e;
            return _n(this, void 0, void 0, function*() {
                (e = this.menu) === null || e === void 0 || e.blur()
            })
        }
        getActiveMenuItem() { return _n(this, void 0, void 0, function*() { return this.activeMenuItem }) }
        setActiveMenuItem(e) { return _n(this, void 0, void 0, function*() { e == null || e.focusItem(), this.activeMenuItem = e }) }
        calculateHeight() {
            var e, t;
            return _n(this, void 0, void 0, function*() {
                let i = 0;
                if (this.activeSubmenu) {
                    const n = yield this.activeSubmenu.getMenu();
                    i = (e = yield n == null ? void 0 : n.calculateHeight()) !== null && e !== void 0 ? e : 0, i += yield this.activeSubmenu.getControllerHeight()
                } else {
                    const n = ((t = this.container) === null || t === void 0 ? void 0 : t.firstChild).assignedElements({ flatten: !0 });
                    n == null || n.forEach(r => { i += parseFloat(window.getComputedStyle(r).height) })
                }
                return this.vmMenuHeightChange.emit(i), i
            })
        }
        onOpenSubmenu(e) { e.stopPropagation(), S(this.activeSubmenu) || (this.activeSubmenu.active = !1), this.activeSubmenu = e.detail, this.getChildren().forEach(t => { t !== this.activeSubmenu && (t.style.opacity = "0", t.style.visibility = "hidden") }), Qe(() => { this.activeSubmenu.active = !0 }) }
        onCloseSubmenu(e) { e == null || e.stopPropagation(), S(this.activeSubmenu) || (this.activeSubmenu.active = !1), this.getChildren().forEach(t => { t !== this.activeSubmenu && (t.style.opacity = "", t.style.visibility = "") }), Qe(() => { this.activeSubmenu = void 0 }) }
        onWindowClick() { this.onCloseSubmenu(), this.onClose() }
        onWindowKeyDown(e) { this.active && e.key === "Escape" && (this.onCloseSubmenu(), this.onClose(), this.focusController()) }
        getChildren() { var e; const t = (e = this.host.shadowRoot.querySelector("slot")) === null || e === void 0 ? void 0 : e.assignedElements({ flatten: !0 }); return t != null ? t : [] }
        getMenuItems() { var e; const t = (e = this.host.shadowRoot.querySelector("slot")) === null || e === void 0 ? void 0 : e.assignedElements({ flatten: !0 }); return t1(t) }
        focusController() {
            var e, t, i, n, r;
            S((e = this.controller) === null || e === void 0 ? void 0 : e.focusItem) ? S((i = this.controller) === null || i === void 0 ? void 0 : i.focusControl) ? (r = this.controller) === null || r === void 0 || r.focus() : (n = this.controller) === null || n === void 0 || n.focusControl() : (t = this.controller) === null || t === void 0 || t.focusItem()
        }
        triggerMenuItem() {
            var e;
            S(this.activeMenuItem) || (this.activeMenuItem.click(), (e = this.activeMenuItem.menu) === null || e === void 0 || e.focusMenu())
        }
        onClose() { this.activeMenuItem = void 0, this.active = !1 }
        onClick(e) { e.stopPropagation() }
        onFocus() {
            var e;
            this.active = !0, [this.activeMenuItem] = this.getMenuItems(), (e = this.activeMenuItem) === null || e === void 0 || e.focusItem(), this.vmFocus.emit()
        }
        onBlur() { this.vmBlur.emit() }
        foucsMenuItem(e, t) { t < 0 && (t = e.length - 1), t > e.length - 1 && (t = 0), this.activeMenuItem = e[t], this.activeMenuItem.focusItem() }
        onKeyDown(e) {
            if (!this.active) return;
            e.preventDefault(), e.stopPropagation();
            const t = this.getMenuItems();
            let i = t.findIndex(n => n === this.activeMenuItem);
            switch (e.key) {
                case "Escape":
                    this.onClose(), this.focusController();
                    break;
                case "ArrowDown":
                case "Tab":
                    this.foucsMenuItem(t, i += 1);
                    break;
                case "ArrowUp":
                    this.foucsMenuItem(t, i -= 1);
                    break;
                case "ArrowLeft":
                    this.onClose(), this.focusController();
                    break;
                case "ArrowRight":
                case "Enter":
                case " ":
                    this.triggerMenuItem();
                    break;
                case "Home":
                case "PageUp":
                    this.foucsMenuItem(t, 0);
                    break;
                case "End":
                case "PageDown":
                    this.foucsMenuItem(t, t.length - 1);
                    break
            }
        }
        render() { var e, t, i; return m("div", { id: this.identifier, class: { menu: !0, slideIn: !S(this.slideInDirection), slideInFromLeft: this.slideInDirection === "left", slideInFromRight: this.slideInDirection === "right" }, role: "menu", tabindex: "-1", "aria-labelledby": (t = (e = this.controller) === null || e === void 0 ? void 0 : e.identifier) !== null && t !== void 0 ? t : (i = this.controller) === null || i === void 0 ? void 0 : i.id, "aria-hidden": this.active ? "false" : "true", onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onClick: this.onClick.bind(this), onKeyDown: this.onKeyDown.bind(this), ref: n => { this.menu = n } }, m("div", { class: "container", ref: n => { this.container = n } }, m("slot", null))) }
        get host() { return this }
        static get watchers() { return { activeMenuItem: ["onActiveMenuitemChange"], activeSubmenu: ["onActiveSubmenuChange"], active: ["onActiveChange"] } }
        static get style() { return i1 }
    },
    r1 = ":host{display:block}.menuItem{display:flex;position:relative;align-items:center;flex-direction:row;cursor:pointer;color:var(--vm-menu-color);background:var(--vm-menu-bg);font-size:var(--vm-menu-font-size);font-weight:var(--vm-menu-font-weight);padding:var(--vm-menu-item-padding);touch-action:manipulation;box-sizing:border-box}.menuItem:focus{outline:0}.menuItem.hidden{display:none}.menuItem.tapHighlight{background:var(--vm-menu-item-tap-highlight)}.menuItem.showDivider{border-bottom:0.5px solid var(--vm-menu-item-divider-color)}.menuItem.notTouch:hover,.menuItem.notTouch:focus{outline:0;color:var(--vm-menu-item-focus-color);background-color:var(--vm-menu-item-focus-bg)}.menuItem[aria-expanded='true']{position:absolute;z-index:2;top:0;width:100%}.menuItem[aria-hidden='true']{display:none}.menuItem[aria-checked='true'] vm-icon{opacity:1;visibility:visible}vm-icon{display:inline-block}vm-icon{fill:currentColor;pointer-events:none;font-size:var(--vm-menu-item-check-icon-size);margin-right:10px;opacity:0;visibility:hidden;transition:var(--vm-fade-transition)}.hint{display:inline-block;margin-left:auto;overflow:hidden;pointer-events:none;margin-right:6px;font-size:var(--vm-menu-item-hint-font-size);opacity:var(--vm-menu-item-hint-opacity);color:var(--vm-menu-item-hint-color)}.badge{display:inline-block;line-height:1;overflow:hidden;pointer-events:none;margin-left:6px;color:var(--vm-menu-item-badge-color);background:var(--vm-menu-item-badge-bg);font-size:var(--vm-menu-item-badge-font-size)}.spacer{flex:1}.arrow{color:var(--vm-menu-item-arrow-color);border:2px solid;padding:2px;display:inline-block;border-width:0 2px 2px 0}.arrow.left{margin-right:6px;transform:rotate(135deg)}.arrow.right{transform:rotate(-45deg);opacity:0.38}";
var nl = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const o1 = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.vmFocus = T(this, "vmFocus", 7), this.vmBlur = T(this, "vmBlur", 7), this.showTapHighlight = !1, this.hidden = !1, this.checkIcon = "check", this.isTouch = !1, V(this), W(this, ["isTouch"]) }
        focusItem() {
            var e;
            return nl(this, void 0, void 0, function*() {
                (e = this.menuItem) === null || e === void 0 || e.focus()
            })
        }
        blurItem() {
            var e;
            return nl(this, void 0, void 0, function*() {
                (e = this.menuItem) === null || e === void 0 || e.blur()
            })
        }
        getHeight() { return nl(this, void 0, void 0, function*() { return parseFloat(this.menuItem ? window.getComputedStyle(this.menuItem).height : "0") }) }
        onClick() { $e(this.menu) || (this.menu.active = !this.expanded) }
        onFocus() { this.vmFocus.emit() }
        onBlur() { this.vmBlur.emit() }
        onTouchStart() { this.showTapHighlight = !0 }
        onTouchEnd() { setTimeout(() => { this.showTapHighlight = !1 }, 100) }
        onMouseLeave() {
            var e;
            (e = this.menuItem) === null || e === void 0 || e.blur()
        }
        render() {
            var e, t, i, n;
            const r = !S(this.checked),
                o = !S(this.menu),
                s = this.expanded ? "true" : "false",
                l = this.checked ? "true" : "false",
                u = r && !S(this.checkIcon),
                c = o && this.expanded,
                a = o && !this.expanded,
                d = !S(this.hint) && !r && (!o || !this.expanded),
                p = !S(this.badge) && !d && !a,
                k = d || a;
            return m("div", { class: { menuItem: !0, notTouch: !this.isTouch, tapHighlight: this.showTapHighlight, showDivider: o && ((e = this.expanded) !== null && e !== void 0 ? e : !1) }, id: this.identifier, role: r ? "menuitemradio" : "menuitem", tabindex: "0", "aria-label": this.label, "aria-hidden": this.hidden ? "true" : "false", "aria-haspopup": o ? "true" : void 0, "aria-controls": (i = (t = this.menu) === null || t === void 0 ? void 0 : t.identifier) !== null && i !== void 0 ? i : (n = this.menu) === null || n === void 0 ? void 0 : n.id, "aria-expanded": o ? s : void 0, "aria-checked": r ? l : void 0, onClick: this.onClick.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onTouchStart: this.onTouchStart.bind(this), onTouchEnd: this.onTouchEnd.bind(this), onMouseLeave: this.onMouseLeave.bind(this), ref: b => { this.menuItem = b } }, u && m("vm-icon", { name: this.checkIcon, library: this.icons }), c && m("span", { class: "arrow left" }), this.label, k && m("span", { class: "spacer" }), d && m("span", { class: "hint" }, this.hint), p && m("span", { class: "badge" }, this.badge), a && m("span", { class: "arrow right" }))
        }
        get host() { return this }
        static get style() { return r1 }
    },
    s1 = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.vmCheck = T(this, "vmCheck", 7), this.checked = !1, this.checkIcon = "check", V(this) }
        onClick() { this.checked = !0, this.vmCheck.emit() }
        render() { return m("vm-menu-item", { label: this.label, checked: this.checked, badge: this.badge, checkIcon: this.checkIcon, icons: this.icons, onClick: this.onClick.bind(this) }) }
    },
    l1 = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.vmCheck = T(this, "vmCheck", 7), V(this) }
        onValueChange() {
            var e;
            (e = this.findRadios()) === null || e === void 0 || e.forEach(t => { t.checked = t.value === this.value })
        }
        connectedCallback() { this.onValueChange() }
        componentDidLoad() { this.onValueChange() }
        onSelectionChange(e) {
            const t = e.target;
            this.value = t.value
        }
        findRadios() { var e; return (e = this.host.shadowRoot.querySelector("slot")) === null || e === void 0 ? void 0 : e.assignedElements() }
        render() { return m("slot", null) }
        get host() { return this }
        static get watchers() { return { value: ["onValueChange"] } }
    },
    a1 = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.vmFocus = T(this, "vmFocus", 7), this.vmBlur = T(this, "vmBlur", 7), this.lowVolumeIcon = "volume-low", this.highVolumeIcon = "volume-high", this.mutedIcon = "volume-mute", this.tooltipPosition = "top", this.hideTooltip = !1, this.keys = "m", this.volume = 50, this.muted = !1, this.i18n = {}, V(this), W(this, ["muted", "volume", "i18n"]) }
        connectedCallback() { this.dispatch = Ot(this) }
        getIcon() { const e = this.volume < 50 ? this.lowVolumeIcon : this.highVolumeIcon; return this.muted || this.volume === 0 ? this.mutedIcon : e }
        onClick() { this.dispatch("muted", !this.muted) }
        render() {
            const e = this.muted ? this.i18n.unmute : this.i18n.mute,
                t = S(this.keys) ? e : `${e} (${this.keys})`;
            return m("vm-control", { label: this.i18n.mute, pressed: this.muted, keys: this.keys, onClick: this.onClick.bind(this) }, m("vm-icon", { name: this.getIcon(), library: this.icons }), m("vm-tooltip", { hidden: this.hideTooltip, position: this.tooltipPosition, direction: this.tooltipDirection }, t))
        }
    },
    u1 = ":host([hidden]){display:none}";
var c1 = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const d1 = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.canSetPiP = !1, this.enterIcon = "pip-enter", this.exitIcon = "pip-exit", this.tooltipPosition = "top", this.hideTooltip = !1, this.keys = "p", this.isPiPActive = !1, this.i18n = {}, this.playbackReady = !1, V(this), W(this, ["isPiPActive", "playbackReady", "i18n"]) }
        onPlaybackReadyChange() {
            var e;
            return c1(this, void 0, void 0, function*() {
                const t = Ct(this);
                this.canSetPiP = (e = yield t == null ? void 0 : t.canSetPiP()) !== null && e !== void 0 ? e : !1
            })
        }
        componentDidLoad() { this.onPlaybackReadyChange() }
        onClick() {
            const e = Ct(this);
            this.isPiPActive ? e == null || e.exitPiP() : e == null || e.enterPiP()
        }
        render() {
            const e = this.isPiPActive ? this.i18n.exitPiP : this.i18n.enterPiP,
                t = S(this.keys) ? e : `${e} (${this.keys})`;
            return m(mn, { hidden: !this.canSetPiP }, m("vm-control", { label: this.i18n.pip, keys: this.keys, pressed: this.isPiPActive, hidden: !this.canSetPiP, onClick: this.onClick.bind(this) }, m("vm-icon", { name: this.isPiPActive ? this.exitIcon : this.enterIcon, library: this.icons }), m("vm-tooltip", { hidden: this.hideTooltip, position: this.tooltipPosition, direction: this.tooltipDirection }, t)))
        }
        static get watchers() { return { playbackReady: ["onPlaybackReadyChange"] } }
        static get style() { return u1 }
    },
    h1 = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.playIcon = "play", this.pauseIcon = "pause", this.tooltipPosition = "top", this.hideTooltip = !1, this.keys = "k", this.paused = !0, this.i18n = {}, V(this), W(this, ["paused", "i18n"]) }
        connectedCallback() { this.dispatch = Ot(this) }
        onClick() { this.dispatch("paused", !this.paused) }
        render() {
            const e = this.paused ? this.i18n.play : this.i18n.pause,
                t = S(this.keys) ? e : `${e} (${this.keys})`;
            return m("vm-control", { label: this.i18n.playback, keys: this.keys, pressed: !this.paused, onClick: this.onClick.bind(this) }, m("vm-icon", { name: this.paused ? this.playIcon : this.pauseIcon, library: this.icons }), m("vm-tooltip", { hidden: this.hideTooltip, position: this.tooltipPosition, direction: this.tooltipDirection }, t))
        }
    };
class f1 {
    constructor() { this.silent = !1 }
    log(...t) {!this.silent && !S(console) && console.log("[Vime tip]:", ...t) }
    warn(...t) {!this.silent && !S(console) && console.error("[Vime warn]:", ...t) }
}
const da = new Set;

function p1(e) {
    const t = ce(e);
    Fe(e, () => { da.add(t) }, () => { da.delete(t) })
}

function m1(e) {
    const t = ce(e);
    da.forEach(i => { i !== t && i.autopause && (i.paused = !0) })
}

function v1(e) {
    const t = ce(e),
        i = new Map;

    function n() { Object.keys(rn).forEach(o => { i.set(o, e[o]) }) }
    Fe(e, () => { n() }, () => { i.clear() });
    const { componentDidRender: r } = e;
    e.componentDidRender = function() {
        r == null || r();
        const o = Array.from(i.keys());
        for (let s = 0; s < o.length; s += 1) {
            const l = o[s],
                u = i.get(l),
                c = e[l];
            u !== c && (w0(t, l, c, u), i.set(l, c))
        }
    }
}
var In = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
const g1 = new Set(["currentTime", "paused"]);

function y1(e) {
    const t = ce(e),
        i = new pe,
        n = new Map;

    function r() { Object.keys(rn).forEach(p => { n.set(p, e[p]) }) }
    let o = [];

    function s() {
        return In(this, void 0, void 0, function*() {
            const p = yield e.adapter;
            if (!S(p)) {
                for (let k = 0; k < o.length; k += 1) yield o[k](p);
                o = []
            }
        })
    }
    let l = !1;

    function u(p) {
        if (p == null || p.stopImmediatePropagation(), !l) { l = !0; return }
        o = [], Qe(() => { Object.keys(rn).filter(c0).forEach(k => { e[k] = rn[k] }) })
    }

    function c(p) {
        var k;
        return In(this, void 0, void 0, function*() {
            p.stopImmediatePropagation();
            const { by: b, prop: w, value: z } = p.detail;
            if (!rp(w)) {
                (k = e.logger) === null || k === void 0 || k.warn(`${b.nodeName} tried to change \`${w}\` but it is readonly.`);
                return
            }
            if (!e.playbackStarted && g1.has(w)) {
                const f = yield e.adapter;
                w === "paused" && !z && (f == null || f.play()), w === "currentTime" && (f == null || f.play(), f == null || f.setCurrentTime(z))
            }
            Qe(() => { e[w] = z })
        })
    }
    const { onProviderDisconnect: a } = e;
    e.onProviderDisconnect = function() { u(), a && a.call(e) }, Fe(e, () => { r(), i.add(J(t, v0, u)), i.add(J(t, np, c)) }, () => { n.clear(), i.empty() }), nn(e, "componentWillRender", () => In(this, void 0, void 0, function*() { e.playbackReady && o.length > 0 && (yield s()) }));

    function d(p, k) { var b; return k !== ((b = e[dp]) === null || b === void 0 ? void 0 : b.get(p)) }
    return function(k, b) {
        return In(this, void 0, void 0, function*() {
            if (!d(k, e[k])) return;
            const w = e[k],
                z = f => In(this, void 0, void 0, function*() { var h; try { yield(h = f == null ? void 0 : f[b]) === null || h === void 0 ? void 0 : h.call(f, w) } catch (v) { t.dispatchEvent(new CustomEvent("vmError", { detail: v })) } });
            e.playbackReady ? yield z(yield e.adapter) : o.push(z)
        })
    }
}
const k1 = ".player{box-sizing:border-box;direction:ltr;font-family:var(--vm-player-font-family);-moz-osx-font-smoothing:auto;-webkit-font-smoothing:subpixel-antialiased;-webkit-tap-highlight-color:transparent;font-variant-numeric:tabular-nums;font-weight:500;line-height:1.7;width:100%;display:block;max-width:100%;min-width:275px;min-height:40px;position:relative;text-shadow:none;outline:0;transition:box-shadow 0.3s ease;box-shadow:var(--vm-player-box-shadow);border-radius:var(--vm-player-border-radius)}.player.idle{cursor:none}.player.audio{background-color:transparent !important}.player.video{height:0;overflow:hidden;background-color:var(--vm-player-bg, #000)}.player.fullscreen{margin:0;border-radius:0;width:100%;height:100%;padding-bottom:0 !important}.blocker{position:absolute;top:0;left:0;width:100%;height:100%;display:inline-block;z-index:var(--vm-blocker-z-index)}";
var B = function(e, t, i, n) {
    function r(o) { return o instanceof i ? o : new i(function(s) { s(o) }) }
    return new(i || (i = Promise))(function(o, s) {
        function l(a) { try { c(n.next(a)) } catch (d) { s(d) } }

        function u(a) { try { c(n.throw(a)) } catch (d) { s(d) } }

        function c(a) { a.done ? o(a.value) : r(a.value).then(l, u) }
        c((n = n.apply(e, t || [])).next())
    })
};
let pd = 0;
const w1 = class extends HTMLElement {
        constructor() { super(), this.__registerHost(), N(this), this.vmThemeChange = T(this, "vmThemeChange", 7), this.vmPausedChange = T(this, "vmPausedChange", 7), this.vmPlay = T(this, "vmPlay", 7), this.vmPlayingChange = T(this, "vmPlayingChange", 7), this.vmSeekingChange = T(this, "vmSeekingChange", 7), this.vmSeeked = T(this, "vmSeeked", 7), this.vmBufferingChange = T(this, "vmBufferingChange", 7), this.vmDurationChange = T(this, "vmDurationChange", 7), this.vmCurrentTimeChange = T(this, "vmCurrentTimeChange", 7), this.vmReady = T(this, "vmReady", 7), this.vmPlaybackReady = T(this, "vmPlaybackReady", 7), this.vmPlaybackStarted = T(this, "vmPlaybackStarted", 7), this.vmPlaybackEnded = T(this, "vmPlaybackEnded", 7), this.vmBufferedChange = T(this, "vmBufferedChange", 7), this.vmError = T(this, "vmError", 7), this.vmLoadStart = T(this, "vmLoadStart", 7), this.vmCurrentProviderChange = T(this, "vmCurrentProviderChange", 7), this.vmCurrentSrcChange = T(this, "vmCurrentSrcChange", 7), this.vmCurrentPosterChange = T(this, "vmCurrentPosterChange", 7), this.vmMediaTitleChange = T(this, "vmMediaTitleChange", 7), this.vmControlsChange = T(this, "vmControlsChange", 7), this.vmPlaybackRateChange = T(this, "vmPlaybackRateChange", 7), this.vmPlaybackRatesChange = T(this, "vmPlaybackRatesChange", 7), this.vmPlaybackQualityChange = T(this, "vmPlaybackQualityChange", 7), this.vmPlaybackQualitiesChange = T(this, "vmPlaybackQualitiesChange", 7), this.vmMutedChange = T(this, "vmMutedChange", 7), this.vmVolumeChange = T(this, "vmVolumeChange", 7), this.vmViewTypeChange = T(this, "vmViewTypeChange", 7), this.vmMediaTypeChange = T(this, "vmMediaTypeChange", 7), this.vmLiveChange = T(this, "vmLiveChange", 7), this.vmTouchChange = T(this, "vmTouchChange", 7), this.vmLanguageChange = T(this, "vmLanguageChange", 7), this.vmI18nChange = T(this, "vmI18nChange", 7), this.vmTranslationsChange = T(this, "vmTranslationsChange", 7), this.vmLanguagesChange = T(this, "vmLanguagesChange", 7), this.vmFullscreenChange = T(this, "vmFullscreenChange", 7), this.vmPiPChange = T(this, "vmPiPChange", 7), this.vmTextTracksChange = T(this, "vmTextTracksChange", 7), this.vmCurrentTextTrackChange = T(this, "vmCurrentTextTrackChange", 7), this.vmTextTrackVisibleChange = T(this, "vmTextTrackVisibleChange", 7), this.vmAudioTracksChange = T(this, "vmAudioTracksChange", 7), this.vmCurrentAudioTrackChange = T(this, "vmCurrentAudioTrackChange", 7), this.disposal = new pe, this.logger = new f1, this.icons = "vime", this.paused = !0, this.playing = !1, this.duration = -1, this.currentTime = 0, this.autoplay = !1, this.ready = !1, this.playbackReady = !1, this.loop = !1, this.muted = !1, this.buffered = 0, this.playbackRate = 1, this.lastRateCheck = 1, this.playbackRates = [1], this.playbackQualities = [], this.seeking = !1, this.debug = !1, this.playbackStarted = !1, this.playbackEnded = !1, this.buffering = !1, this.controls = !1, this.isControlsActive = !1, this.isSettingsActive = !1, this.volume = 50, this.isFullscreenActive = !1, this.aspectRatio = "16:9", this.isAudioView = !1, this.isVideoView = !1, this.isAudio = !1, this.isVideo = !1, this.isLive = !1, this.isMobile = !1, this.isTouch = !1, this.isPiPActive = !1, this.textTracks = [], this.currentTextTrack = -1, this.isTextTrackVisible = !0, this.shouldRenderNativeTextTracks = !0, this.audioTracks = [], this.currentAudioTrack = -1, this.autopause = !0, this.playsinline = !1, this.language = "en", this.translations = { en: Yn }, this.languages = ["en"], this.i18n = Yn, l0(this), h0(this), p1(this), E0(this), v1(this), this.safeAdapterCall = y1(this) }
        get adapter() { var e; return (e = this.provider) === null || e === void 0 ? void 0 : e.getAdapter() }
        onContainerChange() {
            var e;
            (e = this.fullscreenController) === null || e === void 0 || e.destroy(), !S(this.container) && (this.fullscreenController = new wp(this.container), this.fullscreenController.on("change", t => { this.isFullscreenActive = t, t && this.rotateDevice() }), this.fullscreenController.on("error", t => { this.vmError.emit(t) }))
        }
        onPausedChange() { this.paused ? this.playing = !1 : m1(this), this.safeAdapterCall("paused", this.paused ? "pause" : "play") }
        onDurationChange() { this.isLive = this.duration === 1 / 0 }
        onCurrentTimeChange() {
            const e = this.playbackReady ? this.duration : 1 / 0;
            this.currentTime = Math.max(0, Math.min(this.currentTime, e)), this.safeAdapterCall("currentTime", "setCurrentTime")
        }
        onPlaybackReadyChange() { this.ready || (this.ready = !0) }
        onMutedChange() { this.safeAdapterCall("muted", "setMuted") }
        onPlaybackRateChange(e, t) {
            var i, n;
            return B(this, void 0, void 0, function*() {
                if (e !== this.lastRateCheck) {
                    if (!(yield(n = (i = yield this.adapter) === null || i === void 0 ? void 0 : i.canSetPlaybackRate) === null || n === void 0 ? void 0 : n.call(i))) { this.logger.log("provider cannot change `playbackRate`."), this.lastRateCheck = t, this.playbackRate = t; return }
                    if (!this.playbackRates.includes(e)) { this.logger.log(`invalid \`playbackRate\` of ${e}, valid values are [${this.playbackRates.join(", ")}]`), this.lastRateCheck = t, this.playbackRate = t; return }
                    this.lastRateCheck = e, this.safeAdapterCall("playbackRate", "setPlaybackRate")
                }
            })
        }
        onPlaybackQualityChange(e, t) {
            var i, n;
            return B(this, void 0, void 0, function*() {
                if (!(S(e) || e === this.lastQualityCheck)) {
                    if (!(yield(n = (i = yield this.adapter) === null || i === void 0 ? void 0 : i.canSetPlaybackQuality) === null || n === void 0 ? void 0 : n.call(i))) { this.logger.log("provider cannot change `playbackQuality`."), this.lastQualityCheck = t, this.playbackQuality = t; return }
                    if (!this.playbackQualities.includes(e)) { this.logger.log(`invalid \`playbackQuality\` of ${e}, valid values are [${this.playbackQualities.join(", ")}]`), this.lastQualityCheck = t, this.playbackQuality = t; return }
                    this.lastQualityCheck = e, this.safeAdapterCall("playbackQuality", "setPlaybackQuality")
                }
            })
        }
        onDebugChange() { this.logger.silent = !this.debug }
        onVolumeChange() { return B(this, void 0, void 0, function*() { this.volume = Math.max(0, Math.min(this.volume, 100)), this.safeAdapterCall("volume", "setVolume") }) }
        onViewTypeChange() { this.isAudioView = this.viewType === Ke.Audio, this.isVideoView = this.viewType === Ke.Video }
        onMediaTypeChange() { this.isAudio = this.mediaType === vt.Audio, this.isVideo = this.mediaType === vt.Video }
        onLanguageChange(e, t) {
            if (!this.languages.includes(this.language)) { this.logger.log(`invalid \`language\` of ${this.language}, valid values are [${this.languages.join(", ")}]`), this.language = t; return }
            this.i18n = this.translations[this.language]
        }
        onTranslationsChange() { Object.assign(this.translations, { en: Yn }), this.languages = Object.keys(this.translations), this.i18n = this.translations[this.language] }
        onError(e) { this.logger.warn(e.detail) }
        getProvider() { return B(this, void 0, void 0, function*() { return this.provider }) }
        getAdapter() { return B(this, void 0, void 0, function*() { return this.adapter }) }
        play() { var e; return B(this, void 0, void 0, function*() { return (e = yield this.adapter) === null || e === void 0 ? void 0 : e.play() }) }
        pause() { var e; return B(this, void 0, void 0, function*() { return (e = yield this.adapter) === null || e === void 0 ? void 0 : e.pause() }) }
        canPlay(e) { var t, i; return B(this, void 0, void 0, function*() { return (i = (t = yield this.adapter) === null || t === void 0 ? void 0 : t.canPlay(e)) !== null && i !== void 0 ? i : !1 }) }
        canAutoplay() { return B(this, void 0, void 0, function*() { return rd() }) }
        canMutedAutoplay() { return B(this, void 0, void 0, function*() { return rd(!0) }) }
        canSetPlaybackRate() { var e, t, i; return B(this, void 0, void 0, function*() { return (i = (t = (e = yield this.adapter) === null || e === void 0 ? void 0 : e.canSetPlaybackRate) === null || t === void 0 ? void 0 : t.call(e)) !== null && i !== void 0 ? i : !1 }) }
        canSetPlaybackQuality() { var e, t, i; return B(this, void 0, void 0, function*() { return (i = (t = (e = yield this.adapter) === null || e === void 0 ? void 0 : e.canSetPlaybackQuality) === null || t === void 0 ? void 0 : t.call(e)) !== null && i !== void 0 ? i : !1 }) }
        canSetFullscreen() { var e, t, i; return B(this, void 0, void 0, function*() { return this.fullscreenController.isSupported || ((i = (t = (e = yield this.adapter) === null || e === void 0 ? void 0 : e.canSetFullscreen) === null || t === void 0 ? void 0 : t.call(e)) !== null && i !== void 0 ? i : !1) }) }
        enterFullscreen(e) { var t, i, n; return B(this, void 0, void 0, function*() { if (!this.isVideoView) throw Error("Cannot enter fullscreen on an audio player view."); if (this.fullscreenController.isSupported) return this.fullscreenController.requestFullscreen(); const r = yield this.adapter; if ((i = yield(t = r == null ? void 0 : r.canSetFullscreen) === null || t === void 0 ? void 0 : t.call(r)) !== null && i !== void 0 ? i : !1) return (n = r == null ? void 0 : r.enterFullscreen) === null || n === void 0 ? void 0 : n.call(r, e); throw Error("Fullscreen API is not available.") }) }
        exitFullscreen() { var e, t; return B(this, void 0, void 0, function*() { return this.fullscreenController.isSupported ? this.fullscreenController.exitFullscreen() : (t = (e = yield this.adapter) === null || e === void 0 ? void 0 : e.exitFullscreen) === null || t === void 0 ? void 0 : t.call(e) }) }
        canSetPiP() { var e, t, i; return B(this, void 0, void 0, function*() { return (i = (t = (e = yield this.adapter) === null || e === void 0 ? void 0 : e.canSetPiP) === null || t === void 0 ? void 0 : t.call(e)) !== null && i !== void 0 ? i : !1 }) }
        enterPiP() { var e, t; return B(this, void 0, void 0, function*() { if (!this.isVideoView) throw Error("Cannot enter PiP mode on an audio player view."); if (!(yield this.canSetPiP())) throw Error("Picture-in-Picture API is not available."); return (t = (e = yield this.adapter) === null || e === void 0 ? void 0 : e.enterPiP) === null || t === void 0 ? void 0 : t.call(e) }) }
        exitPiP() { var e, t; return B(this, void 0, void 0, function*() { return (t = (e = yield this.adapter) === null || e === void 0 ? void 0 : e.exitPiP) === null || t === void 0 ? void 0 : t.call(e) }) }
        canSetAudioTrack() { var e; return B(this, void 0, void 0, function*() { return !S((e = yield this.adapter) === null || e === void 0 ? void 0 : e.setCurrentAudioTrack) }) }
        setCurrentAudioTrack(e) {
            var t, i;
            return B(this, void 0, void 0, function*() {
                (i = (t = yield this.adapter) === null || t === void 0 ? void 0 : t.setCurrentAudioTrack) === null || i === void 0 || i.call(t, e)
            })
        }
        canSetTextTrack() { var e; return B(this, void 0, void 0, function*() { return !S((e = yield this.adapter) === null || e === void 0 ? void 0 : e.setCurrentTextTrack) }) }
        setCurrentTextTrack(e) {
            var t, i;
            return B(this, void 0, void 0, function*() {
                (i = (t = yield this.adapter) === null || t === void 0 ? void 0 : t.setCurrentTextTrack) === null || i === void 0 || i.call(t, e)
            })
        }
        canSetTextTrackVisibility() { var e; return B(this, void 0, void 0, function*() { return !S((e = yield this.adapter) === null || e === void 0 ? void 0 : e.setTextTrackVisibility) }) }
        setTextTrackVisibility(e) {
            var t, i;
            return B(this, void 0, void 0, function*() {
                (i = (t = yield this.adapter) === null || t === void 0 ? void 0 : t.setTextTrackVisibility) === null || i === void 0 || i.call(t, e)
            })
        }
        extendLanguage(e, t) {
            var i;
            return B(this, void 0, void 0, function*() {
                const n = Object.assign(Object.assign({}, this.translations), {
                    [e]: Object.assign(Object.assign({}, (i = this.translations[e]) !== null && i !== void 0 ? i : {}), t)
                });
                this.translations = n
            })
        }
        connectedCallback() { this.onPausedChange(), this.onCurrentTimeChange(), this.onVolumeChange(), this.onMutedChange(), this.onDebugChange(), this.onContainerChange(), this.onTranslationsChange(), this.onLanguageChange(this.language, rn.language), this.disposal.add(J0(e => { this.isMobile = e })), this.disposal.add(ey(e => { this.isTouch = e })) }
        componentWillLoad() { ed.create(this, this.getPlayerState()) }
        disconnectedCallback() {
            var e;
            (e = this.fullscreenController) === null || e === void 0 || e.destroy(), this.disposal.empty()
        }
        rotateDevice() { return B(this, void 0, void 0, function*() { if (!(!this.isMobile || !ty())) try { this.isFullscreenActive ? yield window.screen.orientation.lock("landscape") : yield window.screen.orientation.unlock() } catch (e) { this.vmError.emit(e) } }) }
        getPlayerState() {
            const e = {},
                t = Object.keys(rn);
            for (let i = 0; i < t.length; i += 1) e[t[i]] = this[t[i]];
            return e
        }
        calcAspectRatio() { const [e, t] = /\d{1,2}:\d{1,2}/.test(this.aspectRatio) ? this.aspectRatio.split(":") : [16, 9]; return 100 / Number(e) * Number(t) }
        getContainer() { return B(this, void 0, void 0, function*() { return this.container }) }
        callAdapter(e, t) { return B(this, void 0, void 0, function*() { return (yield this.adapter)[e](t) }) }
        hasCustomControls() { return f0(this, "vm-controls") }
        genId() { var e; const t = (e = this.host) === null || e === void 0 ? void 0 : e.id; return xe(t) && t.length > 0 ? t : (pd += 1, `vm-player-${pd}`) }
        render() { const e = `${this.isAudioView?"Audio Player":"Video Player"}${S(this.mediaTitle)?"":` - ${this.mediaTitle}`}`,t=!yn||!this.isVideoView||this.playsinline&&!this.isFullscreenActive;t||(this.controls=!0);const i=t&&this.hasCustomControls()&&this.isVideoView&&!this.paused&&!this.isControlsActive,n=!this.controls&&t&&this.isVideoView;return m(mn,{id:this.genId(),idle:i,mobile:this.isMobile,touch:this.isTouch,live:this.isLive,audio:this.isAudioView,video:this.isVideoView,pip:this.isPiPActive,fullscreen:this.isFullscreenActive},m("div",{"aria-label":e,"aria-hidden":this.ready?"false":"true","aria-busy":this.playbackReady?"false":"true",class:{player:!0,idle:i,audio:this.isAudioView,video:this.isVideoView,fullscreen:this.isFullscreenActive},style:{paddingBottom:this.isVideoView?`${this.calcAspectRatio()}%`:void 0},ref:r=>{Qe(()=>{this.container=r})}},n&&m("div",{class:"blocker"}),m(ed.Provider,{state:this.getPlayerState()},m("slot",null))))}get host(){return this}static get watchers(){return{container:["onContainerChange"],paused:["onPausedChange"],duration:["onDurationChange"],currentTime:["onCurrentTimeChange"],playbackReady:["onPlaybackReadyChange"],muted:["onMutedChange"],playbackRate:["onPlaybackRateChange"],playbackQuality:["onPlaybackQualityChange"],debug:["onDebugChange"],volume:["onVolumeChange"],viewType:["onViewTypeChange"],isAudioView:["onViewTypeChange"],isVideoView:["onViewTypeChange"],mediaType:["onMediaTypeChange"],language:["onLanguageChange"],translations:["onTranslationsChange"]}}static get style(){return k1}},b1=":host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--vm-poster-z-index)}.poster{width:100%;height:100%;background:#000;opacity:0;visibility:hidden;pointer-events:none;transition:var(--vm-fade-transition)}.poster.hidden{display:none}.poster.active{opacity:1;visibility:visible}img{width:100%;height:100%;pointer-events:none}",x1=class extends HTMLElement{constructor(){super(),this.__registerHost(),N(this),this.vmLoaded=T(this,"vmLoaded",3),this.vmWillShow=T(this,"vmWillShow",3),this.vmWillHide=T(this,"vmWillHide",3),this.isHidden=!0,this.isActive=!1,this.hasLoaded=!1,this.fit="cover",this.isVideoView=!1,this.playbackStarted=!1,this.currentTime=0,V(this),W(this,["mediaTitle","currentPoster","playbackStarted","currentTime","isVideoView"])}onCurrentPosterChange(){var e;this.hasLoaded=!1,(e=this.lazyLoader)===null||e===void 0||e.onMutation()}connectedCallback(){this.lazyLoader=new cu(this.host,["data-src","src"],e=>{const t=e.getAttribute("data-src");e.removeAttribute("src"),It(t)||e.setAttribute("src",t)}),this.onEnabledChange(),this.onActiveChange()}disconnectedCallback(){this.lazyLoader.destroy()}onVisibilityChange(){!this.isHidden&&this.isActive?this.vmWillShow.emit():this.vmWillHide.emit()}onEnabledChange(){this.isHidden=!this.isVideoView,this.onVisibilityChange()}onActiveChange(){this.isActive=!this.playbackStarted||this.currentTime<=.1,this.onVisibilityChange()}onPosterLoad(){this.vmLoaded.emit(),this.hasLoaded=!0}render(){return m("div",{class:{poster:!0,hidden:this.isHidden,active:this.isActive&&this.hasLoaded}},m("img",{class:"lazy","data-src":this.currentPoster,alt:S(this.mediaTitle)?"Media Poster":`${this.mediaTitle} Poster`,style:{objectFit:this.fit},onLoad:this.onPosterLoad.bind(this)}))}get host(){return this}static get watchers(){return{currentPoster:["onCurrentPosterChange"],isVideoView:["onEnabledChange"],currentTime:["onActiveChange"],playbackStarted:["onActiveChange"]}}static get style(){return b1}},C1=":host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--vm-scrim-z-index)}.scrim{position:absolute;width:100%;background:var(--vm-scrim-bg);display:inline-block;opacity:0;visibility:hidden;transition:var(--vm-fade-transition)}.scrim.gradient{height:258px;background:none;background-position:bottom;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAECCAYAAAA/9r2TAAABKklEQVQ4T2XI50cFABiF8dvee++67b33uM17b1MkkSSSSBJJJIkkkkQSSSKJ9Efmeb8cr86HH88JBP4thkfEkiKOFPGkSCCNRE8SKZJJkUIaqZ40UqSTIoMUmaSR5ckmRQ4pckkjz5NPigJSFJKiiDSKPSWkKCVFGWmUeypIUUmKKlJUk0aNJ0iKWlLUkUa9p4EUjaRoIkUzabR4WknRRop20ujwdJKiixTdpOghjV5PHyn6STFAGoOeIVIMk2KEFKOkMeYZJ8UEKUKkMemZIsU0KWZIMUsac54wKSKkiJLGvGeBFIukWCLFMrkCq7AG67ABm7AF27ADu7AH+3AAh3AEx3ACp3AG53ABl3AF13ADt3AH9/AAj/AEz/ACr/AG7/ABn/AF3/ADv39LujSyJPVJ0QAAAABJRU5ErkJggg==')}.scrim.gradientUp{top:unset;bottom:0}.scrim.gradientDown{transform:rotate(180deg)}.scrim.hidden{display:none}.scrim.active{opacity:1;visibility:visible}",T1=class extends HTMLElement{constructor(){super(),this.__registerHost(),N(this),this.isVideoView=!1,this.isControlsActive=!1,V(this),W(this,["isVideoView","isControlsActive"])}render(){return m("div",{class:{scrim:!0,gradient:!S(this.gradient),gradientUp:this.gradient==="up",gradientDown:this.gradient==="down",hidden:!this.isVideoView,active:this.isControlsActive}})}static get style(){return C1}},S1=e=>Math.trunc(e/60/60%60),E1=e=>Math.trunc(e/60%60),P1=e=>Math.trunc(e%60),Dn=(e=0,t=!1)=>{const i=s=>`0${s}`.slice(-2),n=S1(e),r=E1(e),o=P1(e);return`${t||n>0?`${n}:`:""}${i(r)}:${i(o)}`},A1=`:host{--vm-tooltip-spacing:var(--vm-scrubber-tooltip-spacing);flex:1;position:relative;cursor:pointer;pointer-events:auto;box-sizing:border-box;left:calc(var(--vm-slider-thumb-width) / 2);margin-right:var(--vm-slider-thumb-width);margin-bottom:var(--vm-slider-track-height)}@keyframes progress{to{background-position:var(--vm-scrubber-loading-stripe-size) 0}}.scrubber{position:relative;width:100%}vm-slider,progress{margin-left:calc(calc(var(--vm-slider-thumb-width) / 2) * -1);margin-right:calc(calc(var(--vm-slider-thumb-width) / 2) * -1);width:calc(100% + var(--vm-slider-thumb-width));height:var(--vm-slider-track-height)}vm-slider:hover,progress:hover{cursor:pointer}vm-slider{position:absolute;top:0;left:0;z-index:3}progress{-webkit-appearance:none;background:transparent;border:0;border-radius:100px;position:absolute;left:0;top:50%;padding:0;color:var(--vm-scrubber-buffered-bg);height:var(--vm-slider-track-height)}progress::-webkit-progress-bar{background:transparent}progress::-webkit-progress-value{background:currentColor;border-radius:100px;min-width:var(--vm-slider-track-height);transition:width 0.2s ease}progress::-moz-progress-bar{background:currentColor;border-radius:100px;min-width:var(--vm-slider-track-height);transition:width 0.2s ease}progress::-ms-fill{border-radius:100px;transition:width 0.2s ease}progress.loading{animation:progress 1s linear infinite;background-image:linear-gradient(
    -45deg,
    var(--vm-scrubber-loading-stripe-color) 25%,
    transparent 25%,
    transparent 50%,
    var(--vm-scrubber-loading-stripe-color) 50%,
    var(--vm-scrubber-loading-stripe-color) 75%,
    transparent 75%,
    transparent
  );background-repeat:repeat-x;background-size:var(--vm-scrubber-loading-stripe-size)
    var(--vm-scrubber-loading-stripe-size);color:transparent;background-color:transparent}`;var L1=function(e,t,i,n){function r(o){return o instanceof i?o:new i(function(s){s(o)})}return new(i||(i=Promise))(function(o,s){function l(a){try{c(n.next(a))}catch(d){s(d)}}function u(a){try{c(n.throw(a))}catch(d){s(d)}}function c(a){a.done?o(a.value):r(a.value).then(l,u)}c((n=n.apply(e,t||[])).next())})};const R1=class extends HTMLElement{constructor(){super(),this.__registerHost(),N(this),this.keyboardDisposal=new pe,this.timestamp="",this.endTime=0,this.alwaysShowHours=!1,this.hideTooltip=!1,this.currentTime=0,this.duration=-1,this.noKeyboard=!1,this.buffering=!1,this.buffered=0,this.i18n={},V(this),W(this,["i18n","currentTime","duration","buffering","buffered"])}onNoKeyboardChange(){return L1(this,void 0,void 0,function*(){if(this.keyboardDisposal.empty(),this.noKeyboard)return;const e=yield Ft(this);if(S(e))return;const t=i=>{if(i.key!=="ArrowLeft"&&i.key!=="ArrowRight")return;i.preventDefault();const r=i.key==="ArrowLeft"?Math.max(0,this.currentTime-5):Math.min(this.duration,this.currentTime+5);this.dispatch("currentTime",r)};this.keyboardDisposal.add(J(e,"keydown",t))})}onDurationChange(){this.endTime=Math.max(0,this.duration)}connectedCallback(){this.dispatch=Ot(this),this.timestamp=Dn(this.currentTime,this.alwaysShowHours),this.onNoKeyboardChange()}disconnectedCallback(){this.keyboardDisposal.empty()}setTooltipPosition(e){var t,i;const n=(i=(t=this.tooltip.shadowRoot)===null||t===void 0?void 0:t.querySelector(".tooltip"))===null||i===void 0?void 0:i.getBoundingClientRect(),r=this.slider.getBoundingClientRect(),o=parseFloat(window.getComputedStyle(this.slider).getPropertyValue("--vm-slider-thumb-width")),s=n.width/2-o/2,l=r.width-n.width/2-o/2,u=Math.max(s,Math.min(e,l));this.tooltip.style=`--vm-tooltip-left: ${u}px`}onSeek(e){this.dispatch("currentTime",e.detail)}onSeeking(e){if(this.duration<0||this.tooltip.hidden)return;if(e.type==="mouseleave"){this.getSliderInput().blur(),this.tooltip.active=!1;return}const t=this.host.getBoundingClientRect(),i=Math.max(0,Math.min(100,100/t.width*(e.pageX-t.left)));this.timestamp=Dn(this.duration/100*i,this.alwaysShowHours),this.setTooltipPosition(i/100*t.width),this.tooltip.active||(this.getSliderInput().focus(),this.tooltip.active=!0)}getSliderInput(){var e;return(e=this.slider.shadowRoot)===null||e===void 0?void 0:e.querySelector("input")}render(){const e=this.i18n.scrubberLabel.replace(/{currentTime}/,Dn(this.currentTime)).replace(/{duration}/,Dn(this.endTime));return m("div",{class:"scrubber",onMouseEnter:this.onSeeking.bind(this),onMouseLeave:this.onSeeking.bind(this),onMouseMove:this.onSeeking.bind(this),onTouchMove:()=>{this.getSliderInput().focus()},onTouchEnd:()=>{this.getSliderInput().blur()}},m("vm-slider",{step:.01,max:this.endTime,value:this.currentTime,label:this.i18n.scrubber,valueText:e,onVmValueChange:this.onSeek.bind(this),ref:t=>{this.slider=t}}),m("progress",{class:{loading:this.buffering},min:0,max:this.endTime,value:this.buffered,"aria-label":this.i18n.buffered,"aria-valuemin":"0","aria-valuemax":this.endTime,"aria-valuenow":this.buffered,"aria-valuetext":`${(this.endTime>0?this.buffered/this.endTime:0).toFixed(0)}%`},"% buffered"),m("vm-tooltip",{hidden:this.hideTooltip,ref:t=>{this.tooltip=t}},this.timestamp))}get host(){return this}static get watchers(){return{noKeyboard:["onNoKeyboardChange"],duration:["onDurationChange"]}}static get style(){return A1}},M1=`:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--vm-menu-z-index)}.settings{position:absolute;opacity:0;pointer-events:none;overflow-x:hidden;overflow-y:auto;background-color:var(--vm-menu-bg);max-height:var(--vm-settings-max-height);border-radius:var(--vm-settings-border-radius);padding:var(--vm-settings-padding);box-shadow:var(--vm-settings-shadow);box-sizing:border-box;scrollbar-width:thin;scroll-behavior:smooth;scrollbar-color:var(--vm-settings-scroll-thumb-color)
    var(--vm-settings-scroll-track-color);transform:translateY(8px);transition:var(--vm-settings-transition)}.container{display:block;width:var(--vm-settings-width);height:100%;position:relative;transition:width 0.25s ease-in, height 0.25s ease-in}.settings.hydrated{visibility:hidden !important}.settings::-webkit-scrollbar{width:var(--vm-settings-scroll-width)}.settings::-webkit-scrollbar-track{background:var(--vm-settings-scroll-track-color)}.settings::-webkit-scrollbar-thumb{border-radius:var(--vm-settings-scroll-width);background-color:var(--vm-settings-scroll-thumb-color);border:2px solid var(--vm-menu-bg)}.settings.active{transform:translateY(0);opacity:1;pointer-events:auto;visibility:visible !important}.settings.mobile{position:fixed;top:auto !important;left:0 !important;right:0 !important;bottom:0 !important;width:100%;min-height:56px;max-height:50%;border-radius:0;z-index:2147483647;transform:translateY(100%)}.settings.mobile.active{transform:translateY(0)}.settings.mobile>vm-menu{height:100% !important;overflow:auto !important}`;var _1=function(e,t,i,n){function r(o){return o instanceof i?o:new i(function(s){s(o)})}return new(i||(i=Promise))(function(o,s){function l(a){try{c(n.next(a))}catch(d){s(d)}}function u(a){try{c(n.throw(a))}catch(d){s(d)}}function c(a){a.done?o(a.value):r(a.value).then(l,u)}c((n=n.apply(e,t||[])).next())})};let md=0;const I1=class extends HTMLElement{constructor(){super(),this.__registerHost(),N(this),this.disposal=new pe,this.menuHeight=0,this.pin="bottomRight",this.active=!1,this.isMobile=!1,this.isAudioView=!1,V(this),pp(this),W(this,["isMobile","isAudioView"])}onActiveChange(){this.dispatch("isSettingsActive",this.active),!S(this.controller)&&(this.controller.expanded=this.active)}connectedCallback(){this.dispatch=Ot(this),md+=1,this.id=`vm-settings-${md}`}disconnectedCallback(){this.disposal.empty()}setController(e){return _1(this,void 0,void 0,function*(){this.controller=e,this.controller.menu=this.id,this.disposal.empty(),this.disposal.add(J(this.controller,"click",()=>{this.active=!this.active})),this.disposal.add(J(this.controller,"keydown",t=>{t.key==="Enter"&&(this.active||this.menu.focusMenu())}))})}getPosition(){if(this.isAudioView)return{right:"0",bottom:"calc(var(--vm-controls-height, 0) + 4px)"};const e=this.pin.split(/(?=[L|R])/).map(t=>t.toLowerCase());return{[e.includes("top")?"top":"bottom"]:"var(--vm-controls-height, 0)",[e.includes("left")?"left":"right"]:"8px"}}onOpen(e){var t;((t=e.detail)===null||t===void 0?void 0:t.identifier)===this.id&&(this.active=!0)}onClose(e){var t;((t=e.detail)===null||t===void 0?void 0:t.identifier)===this.id&&(this.active=!1)}onHeightChange(e){this.menuHeight=e.detail}render(){return m("div",{style:Object.assign({},this.getPosition()),class:{settings:!0,active:this.active,mobile:this.isMobile}},m("div",{class:"container",style:{height:`${this.menuHeight}px`}},m("vm-menu",{identifier:this.id,active:this.active,controller:this.controller,onVmOpen:this.onOpen.bind(this),onVmClose:this.onClose.bind(this),onVmMenuHeightChange:this.onHeightChange.bind(this),ref:e=>{this.menu=e}},m("slot",null))))}get host(){return this}static get watchers(){return{active:["onActiveChange"]}}static get style(){return M1}},$1=".settingsControl.hidden{display:none}.settingsControl{--vm-icon-transition:transform 0.3s ease}.settingsControl.active{--vm-icon-transform:rotate(90deg)}";var vd=function(e,t,i,n){function r(o){return o instanceof i?o:new i(function(s){s(o)})}return new(i||(i=Promise))(function(o,s){function l(a){try{c(n.next(a))}catch(d){s(d)}}function u(a){try{c(n.throw(a))}catch(d){s(d)}}function c(a){a.done?o(a.value):r(a.value).then(l,u)}c((n=n.apply(e,t||[])).next())})};let gd=0;const V1=class extends HTMLElement{constructor(){super(),this.__registerHost(),N(this),this.icon="settings",this.tooltipPosition="top",this.expanded=!1,this.i18n={},V(this),W(this,["i18n"])}onComponentsChange(){S(this.vmSettings)||this.vmSettings.setController(this.host)}connectedCallback(){gd+=1,this.id=`vm-settings-control-${gd}`,up(this,"vm-settings",e=>{[this.vmSettings]=e})}focusControl(){var e;return vd(this,void 0,void 0,function*(){(e=this.control)===null||e===void 0||e.focusControl()})}blurControl(){var e;return vd(this,void 0,void 0,function*(){(e=this.control)===null||e===void 0||e.blurControl()})}render(){const e=!S(this.menu);return m("div",{class:{settingsControl:!0,hidden:!e,active:e&&this.expanded}},m("vm-control",{identifier:this.id,menu:this.menu,hidden:!e,expanded:this.expanded,label:this.i18n.settings,ref:t=>{this.control=t}},m("vm-icon",{name:this.icon,library:this.icons}),m("vm-tooltip",{hidden:this.expanded,position:this.tooltipPosition,direction:this.tooltipDirection},this.i18n.settings)))}get host(){return this}static get watchers(){return{vmSettings:["onComponentsChange"]}}static get style(){return $1}},N1=`:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--vm-skeleton-z-index)}@keyframes sheen{0%{background-position:200% 0}to{background-position:-200% 0}}.skeleton{width:100%;height:100%;display:flex;min-height:1rem;pointer-events:auto}.sheen.hidden{opacity:0;visibility:hidden;transition:var(--vm-fade-transition);pointer-events:none}.indicator{flex:1 1 auto;background:var(--vm-skeleton-color)}.skeleton.sheen .indicator{background:linear-gradient(
    270deg,
    var(--vm-skeleton-sheen-color),
    var(--vm-skeleton-color),
    var(--vm-skeleton-color),
    var(--vm-skeleton-sheen-color)
  );background-size:400% 100%;background-size:400% 100%;animation:sheen 8s ease-in-out infinite}`,z1=class extends HTMLElement{constructor(){super(),this.__registerHost(),N(this),this.hidden=!1,this.effect="sheen",this.ready=!1,V(this),W(this,["ready"])}onReadyChange(){this.ready?setTimeout(()=>{this.hidden=!0},500):this.hidden=!1}render(){return m("div",{class:{skeleton:!0,hidden:this.hidden,sheen:this.effect==="sheen"}},m("div",{class:"indicator"}))}static get watchers(){return{ready:["onReadyChange"]}}static get style(){return N1}},F1=`:host{width:100%}.slider{width:100%}input{width:100%;-webkit-appearance:none;background:transparent;border:0;outline:0;cursor:pointer;box-sizing:border-box;border-radius:calc(var(--vm-slider-thumb-height) * 2);user-select:none;-webkit-user-select:none;touch-action:manipulation;color:var(--vm-slider-value-color);display:block;height:var(--vm-slider-track-height);margin:0;padding:0;transition:box-shadow 0.3s ease}input::-webkit-slider-runnable-track{background:transparent;border:0;border-radius:calc(var(--vm-slider-track-height) / 2);height:var(--vm-slider-track-height);transition:box-shadow 0.3s ease;user-select:none;background-image:linear-gradient(
    to right,
    currentColor var(--vm-value, 0%),
    transparent var(--vm-value, 0%)
  );background-color:var(--vm-slider-track-color)}input::-webkit-slider-thumb{opacity:0;background:var(--vm-slider-thumb-bg);border:0;border-radius:100%;position:relative;transition:all 0.2s ease;width:var(--vm-slider-thumb-width);height:var(--vm-slider-thumb-height);box-shadow:var(--vm-slider-thumb-shadow);-webkit-appearance:none;margin-top:calc(
    0px -
      calc(
        calc(var(--vm-slider-thumb-height) - var(--vm-slider-track-height)) / 2
      )
  )}input::-moz-range-track{background:transparent;border:0;border-radius:calc(var(--vm-slider-track-height) / 2);height:var(--vm-slider-track-height);transition:box-shadow 0.3s ease;user-select:none;background-color:var(--vm-slider-track-color)}input::-moz-range-thumb{opacity:0;background:var(--vm-slider-thumb-bg);border:0;border-radius:100%;position:relative;transition:all 0.2s ease;width:var(--vm-slider-thumb-width);height:var(--vm-slider-thumb-height);box-shadow:var(--vm-slider-thumb-shadow)}input::-moz-range-progress{background:currentColor;border-radius:calc(var(--vm-slider-track-height) / 2);height:var(--vm-slider-track-height)}input::-ms-track{border:0;border-radius:calc(var(--vm-slider-track-height) / 2);height:var(--vm-slider-track-height);transition:box-shadow 0.3s ease;user-select:none;color:transparent;background-color:var(--vm-slider-track-color)}input::-ms-fill-upper{background:transparent;border:0;border-radius:calc(var(--vm-slider-track-height) / 2);height:var(--vm-slider-track-height);transition:box-shadow 0.3s ease;user-select:none}input::-ms-fill-lower{border:0;border-radius:calc(var(--vm-slider-track-height) / 2);height:var(--vm-slider-track-height);transition:box-shadow 0.3s ease;user-select:none;background:currentColor}input::-ms-thumb{opacity:0;background:var(--vm-slider-thumb-bg);border:0;border-radius:100%;position:relative;transition:all 0.2s ease;width:var(--vm-slider-thumb-width);height:var(--vm-slider-thumb-height);box-shadow:var(--vm-slider-thumb-shadow);margin-top:0}input::-ms-tooltip{display:none}input:hover::-webkit-slider-runnable-track{height:var(--vm-slider-track-focused-height)}input:hover::-moz-range-track{height:var(--vm-slider-track-focused-height)}input:hover::-ms-track{height:var(--vm-slider-track-focused-height)}input:hover::-ms-fill-upper{height:var(--vm-slider-track-focused-height)}input:hover::-ms-fill-lower{height:var(--vm-slider-track-focused-height)}input:hover::-webkit-slider-thumb{opacity:1}input:hover::-moz-range-thumb{opacity:1}input:hover::-ms-thumb{opacity:1}input:focus{outline:0}input:focus::-webkit-slider-runnable-track{outline:0;height:var(--vm-slider-track-focused-height)}input:focus::-moz-range-track{outline:0;height:var(--vm-slider-track-focused-height)}input:focus::-ms-track{outline:0;height:var(--vm-slider-track-focused-height)}input::-moz-focus-outer{border:0}`,D1=class extends HTMLElement{constructor(){super(),this.__registerHost(),N(this),this.vmValueChange=T(this,"vmValueChange",7),this.vmFocus=T(this,"vmFocus",7),this.vmBlur=T(this,"vmBlur",7),this.step=1,this.min=0,this.max=10,this.value=5,V(this)}getPercentage(){return`${this.value/this.max*100}%`}onValueChange(e){var t;const i=parseFloat((t=e.target)===null||t===void 0?void 0:t.value);this.vmValueChange.emit(i)}calcTouchedValue(e){const t=e.target,i=e.changedTouches[0],n=parseFloat(t.getAttribute("min")),r=parseFloat(t.getAttribute("max")),o=parseFloat(t.getAttribute("step")),s=r-n;let l;const u=t.getBoundingClientRect(),c=parseFloat(window.getComputedStyle(this.host).getPropertyValue("--vm-slider-thumb-width")),a=100/u.width*(c/2)/100;l=100/u.width*(i.clientX-u.left),l=Math.max(0,Math.min(l,100)),l<50?l-=(100-l*2)*a:l>50&&(l+=(l-50)*2*a);const d=s*(l/100);return o>=1?n+Math.round(d/o)*o:n+parseFloat(d.toFixed(2))}onTouch(e){const t=e.target;t.disabled||(e.preventDefault(),this.value=this.calcTouchedValue(e),this.vmValueChange.emit(this.value),t.dispatchEvent(new window.Event(e.type==="touchend"?"change":"input",{bubbles:!0})))}render(){var e;return m("div",{class:"slider",style:{"--vm-value":this.getPercentage()}},m("input",{type:"range",step:this.step,min:this.min,max:this.max,value:this.value,autocomplete:"off","aria-label":this.label,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.value,"aria-valuetext":(e=this.valueText)!==null&&e!==void 0?e:this.getPercentage(),"aria-orientation":"horizontal",onInput:this.onValueChange.bind(this),onFocus:()=>{this.vmFocus.emit()},onBlur:()=>{this.vmBlur.emit()},onTouchStart:this.onTouch.bind(this),onTouchMove:this.onTouch.bind(this),onTouchEnd:this.onTouch.bind(this)}))}get host(){return this}static get style(){return F1}},O1=`:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--vm-spinner-z-index)}.spinner{width:100%;height:100%;display:flex;justify-content:center;align-items:center;opacity:0;visibility:hidden;pointer-events:none;transition:var(--vm-fade-transition)}.spinner.hidden{display:none}.spinner.active{opacity:1;visibility:visible}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.spin{background:transparent;margin:60px auto;font-size:10px;position:relative;text-indent:-9999em;pointer-events:none;border-top:var(--vm-spinner-thickness) solid var(--vm-spinner-fill-color);border-left:var(--vm-spinner-thickness) solid var(--vm-spinner-fill-color);border-right:var(--vm-spinner-thickness) solid var(--vm-spinner-track-color);border-bottom:var(--vm-spinner-thickness) solid var(--vm-spinner-track-color);transform:translateZ(0)}.spin.active{animation:spin var(--vm-spinner-spin-duration) infinite
    var(--vm-spinner-spin-timing-func)}.spin,.spin::after{border-radius:50%;width:var(--vm-spinner-width);height:var(--vm-spinner-height)}`,H1=class extends HTMLElement{constructor(){super(),this.__registerHost(),N(this),this.vmWillShow=T(this,"vmWillShow",3),this.vmWillHide=T(this,"vmWillHide",3),this.blacklist=[Oo.YouTube],this.isHidden=!0,this.isActive=!1,this.isVideoView=!1,this.showWhenMediaLoading=!1,this.playbackReady=!1,this.buffering=!1,V(this),W(this,["isVideoView","buffering","playbackReady","currentProvider"])}onVideoViewChange(){this.isHidden=!this.isVideoView,this.onVisiblityChange()}onActiveChange(){this.isActive=this.buffering||this.showWhenMediaLoading&&!this.playbackReady,this.onVisiblityChange()}onVisiblityChange(){!this.isHidden&&this.isActive?this.vmWillShow.emit():this.vmWillHide.emit()}render(){return m("div",{class:{spinner:!0,hidden:this.isHidden||this.blacklist.includes(this.currentProvider),active:this.isActive}},m("div",{class:{spin:!0,active:this.isActive}},"Loading..."))}static get watchers(){return{isVideoView:["onVideoViewChange"],buffering:["onActiveChange"],playbackReady:["onActiveChange"]}}static get style(){return O1}};var rl=function(e,t,i,n){function r(o){return o instanceof i?o:new i(function(s){s(o)})}return new(i||(i=Promise))(function(o,s){function l(a){try{c(n.next(a))}catch(d){s(d)}}function u(a){try{c(n.throw(a))}catch(d){s(d)}}function c(a){a.done?o(a.value):r(a.value).then(l,u)}c((n=n.apply(e,t||[])).next())})};let yd=0;const j1=class extends HTMLElement{constructor(){super(),this.__registerHost(),N(this),this.vmOpenSubmenu=T(this,"vmOpenSubmenu",7),this.vmCloseSubmenu=T(this,"vmCloseSubmenu",7),this.slideInDirection="right",this.active=!1,V(this)}connectedCallback(){this.genId()}getController(){return rl(this,void 0,void 0,function*(){return this.controller})}getMenu(){return rl(this,void 0,void 0,function*(){return this.menu})}getControllerHeight(){var e,t;return rl(this,void 0,void 0,function*(){return(t=(e=this.controller)===null||e===void 0?void 0:e.getHeight())!==null&&t!==void 0?t:0})}getControllerHeightSync(){var e;const t=(e=this.controller)===null||e===void 0?void 0:e.shadowRoot.querySelector("[role='menuitem']");return t?parseFloat(window.getComputedStyle(t).height):0}onMenuOpen(){this.active=!0,this.vmOpenSubmenu.emit(this.host)}onMenuClose(){this.active=!1,this.vmCloseSubmenu.emit(this.host)}genId(){yd+=1,this.id=`vm-submenu-${yd}`}getControllerId(){return`${this.id}-controller`}render(){return m("div",null,m("vm-menu-item",{identifier:this.getControllerId(),menu:this.menu,label:this.label,hint:this.hint,expanded:this.active,ref:e=>{Qe(()=>{this.controller=e})}}),m("vm-menu",{identifier:this.id,controller:this.controller,active:this.active,slideInDirection:this.slideInDirection,onVmOpen:this.onMenuOpen.bind(this),onVmClose:this.onMenuClose.bind(this),ref:e=>{Qe(()=>{this.menu=e})},style:{top:`${this.getControllerHeightSync()+1}px`}},m("slot",null)))}get host(){return this}},W1=".time{display:flex;align-items:center;color:var(--vm-time-color);font-size:var(--vm-time-font-size);font-weight:var(--vm-time-font-weight)}",U1=class extends HTMLElement{constructor(){super(),this.__registerHost(),N(this),this.seconds=0,this.alwaysShowHours=!1,V(this)}render(){return m("div",{class:"time","aria-label":this.label},Dn(Math.max(0,this.seconds),this.alwaysShowHours))}static get style(){return W1}},Q1=".timeProgress{display:flex;width:100%;height:100%;align-items:center;color:var(--vm-time-color)}.separator{margin:0 4px}",B1=class extends HTMLElement{constructor(){super(),this.__registerHost(),N(this),this.separator="/",this.alwaysShowHours=!1,V(this)}render(){return m("div",{class:"timeProgress"},m("vm-current-time",{alwaysShowHours:this.alwaysShowHours}),m("span",{class:"separator"},this.separator),m("vm-end-time",{alwaysShowHours:this.alwaysShowHours}))}static get style(){return Q1}},K1=`:host{display:contents;z-index:var(--vm-tooltip-z-index)}.tooltip{left:var(--vm-tooltip-left, 50%);transform:translateX(-50%);line-height:1.3;pointer-events:none;position:absolute;opacity:0;white-space:nowrap;visibility:hidden;background:var(--vm-tooltip-bg);border-radius:var(--vm-tooltip-border-radius);box-sizing:border-box;box-shadow:var(--vm-tooltip-box-shadow);color:var(--vm-tooltip-color);font-size:var(--vm-tooltip-font-size);padding:var(--vm-tooltip-padding);transition:opacity var(--vm-tooltip-fade-duration)
    var(--vm-tooltip-fade-timing-func)}.tooltip[aria-hidden='false']{opacity:1;visibility:visible}.tooltip.hidden{display:none}.tooltip.onTop{bottom:100%;margin-bottom:var(--vm-tooltip-spacing)}.tooltip.onBottom{top:100%;margin-top:var(--vm-tooltip-spacing)}.tooltip.growLeft{left:auto;right:0;transform:none}.tooltip.growRight{left:0;transform:none}`;let kd=0;const G1=class extends HTMLElement{constructor(){super(),this.__registerHost(),N(this),this.hasLoaded=!1,this.hidden=!1,this.active=!1,this.position="top",this.isTouch=!1,this.isMobile=!1,V(this),W(this,["isTouch","isMobile"])}componentDidLoad(){this.hasLoaded=!0}getId(){const e=this.host.id;return xe(e)&&e.length>0?e:(kd+=1,`vm-tooltip-${kd}`)}render(){return m("div",{id:this.getId(),role:"tooltip","aria-hidden":!this.active||this.isTouch||this.isMobile?"true":"false",class:{tooltip:!0,hidden:!this.hasLoaded||this.hidden,onTop:this.position==="top",onBottom:this.position==="bottom",growLeft:this.direction==="left",growRight:this.direction==="right"}},m("slot",null))}get host(){return this}static get style(){return K1}},Y1=":host{z-index:var(--vm-ui-z-index)}.ui{width:100%;pointer-events:none}.ui.hidden{display:none}.ui.video{position:absolute;top:0;left:0;height:100%}",X1=class extends HTMLElement{constructor(){super(),this.__registerHost(),N(this),this.isVideoView=!1,this.playsinline=!1,this.isFullscreenActive=!1,V(this),W(this,["isVideoView","playsinline","isFullscreenActive"])}render(){const e=!yn||!this.isVideoView||this.playsinline&&!this.isFullscreenActive;return m("div",{class:{ui:!0,hidden:!e,video:this.isVideoView}},e&&m("slot",null))}static get style(){return Y1}};var q1=function(e,t,i,n){function r(o){return o instanceof i?o:new i(function(s){s(o)})}return new(i||(i=Promise))(function(o,s){function l(a){try{c(n.next(a))}catch(d){s(d)}}function u(a){try{c(n.throw(a))}catch(d){s(d)}}function c(a){a.done?o(a.value):r(a.value).then(l,u)}c((n=n.apply(e,t||[])).next())})};const Z1=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.willAttach=!1,this.hasCustomTextManager=!1,this.preload="metadata",V(this),li(this)}onProviderConnect(e){this.willAttach&&e.stopImmediatePropagation()}onProviderDisconnect(e){this.willAttach&&e.stopImmediatePropagation()}getAdapter(){var e;return q1(this,void 0,void 0,function*(){return(e=this.fileProvider)===null||e===void 0?void 0:e.getAdapter()})}render(){return m("vm-file",{noConnect:!0,willAttach:this.willAttach,crossOrigin:this.crossOrigin,poster:this.poster,preload:this.preload,controlsList:this.controlsList,autoPiP:this.autoPiP,disablePiP:this.disablePiP,disableRemotePlayback:this.disableRemotePlayback,hasCustomTextManager:this.hasCustomTextManager,mediaTitle:this.mediaTitle,viewType:Ke.Video,ref:e=>{this.fileProvider=e}},m("slot",null))}};var ha;(function(e){e.Play="play",e.Pause="pause",e.Seeking="seeking",e.Seeked="seeked",e.TimeUpdate="timeupdate",e.VolumeChange="volumechange",e.DurationChange="durationchange",e.FullscreenChange="fullscreenchange",e.CueChange="cuechange",e.Progress="progress",e.Error="error",e.PlaybackRateChange="playbackratechange",e.Loaded="loaded",e.BufferStart="bufferstart",e.BufferEnd="bufferend",e.TextTrackChange="texttrackchange",e.Waiting="waiting",e.Ended="ended"})(ha||(ha={}));const J1=":host{z-index:var(--vm-media-z-index)}vm-embed{position:absolute;top:0;left:0;width:100%;height:100%}vm-embed.hideControls{display:block;width:100%;height:auto;position:relative}";var ot=function(e,t,i,n){function r(o){return o instanceof i?o:new i(function(s){s(o)})}return new(i||(i=Promise))(function(o,s){function l(a){try{c(n.next(a))}catch(d){s(d)}}function u(a){try{c(n.throw(a))}catch(d){s(d)}}function c(a){a.done?o(a.value):r(a.value).then(l,u)}c((n=n.apply(e,t||[])).next())})};const ol=new Map,ek=class extends HTMLElement{constructor(){super(),this.__registerHost(),N(this),this.vmLoadStart=T(this,"vmLoadStart",7),this.vmError=T(this,"vmError",7),this.defaultInternalState={},this.volume=50,this.hasLoaded=!1,this.internalState={paused:!0,playing:!1,seeking:!1,currentTime:0,buffered:0,playbackStarted:!1,playRequest:!1},this.embedSrc="",this.mediaTitle="",this.byline=!0,this.portrait=!0,this.noAutoAspectRatio=!1,this.cookies=!0,this.language="en",this.aspectRatio="16:9",this.autoplay=!1,this.controls=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,V(this),li(this),fs(this)}onVideoIdChange(){if(this.cancelTimeUpdates(),!this.videoId){this.embedSrc="";return}this.embedSrc=`${this.getOrigin()}/video/${this.videoId}`,this.pendingDurationCall=Do(),this.pendingMediaTitleCall=Do(),this.fetchVideoInfo=this.getVideoInfo()}onCustomPosterChange(){this.dispatch("currentPoster",this.poster)}connectedCallback(){this.dispatch=gn(this),this.dispatch("viewType",Ke.Video),this.onVideoIdChange(),this.defaultInternalState=Object.assign({},this.internalState)}componentDidLoad(){this.initialMuted=this.muted}disconnectedCallback(){this.cancelTimeUpdates(),this.pendingPlayRequest=void 0}getOrigin(){return"https://player.vimeo.com"}getPreconnections(){return[this.getOrigin(),"https://i.vimeocdn.com","https://f.vimeocdn.com","https://fresnel.vimeocdn.com"]}remoteControl(e,t){return this.embed.postMessage({method:e,value:t})}buildParams(){return{byline:this.byline,color:this.color,portrait:this.portrait,autopause:!1,transparent:!1,autoplay:this.autoplay,muted:this.initialMuted,playsinline:this.playsinline,dnt:!this.cookies}}getVideoInfo(){return ot(this,void 0,void 0,function*(){return ol.has(this.videoId)?ol.get(this.videoId):window.fetch(`https://vimeo.com/api/oembed.json?url=${this.embedSrc}`).then(e=>e.json()).then(e=>{var t;const i=/vimeocdn.com\/video\/(.*)?_/,o={poster:`https://i.vimeocdn.com/video/${(t=e==null?void 0:e.thumbnail_url)===null||t===void 0?void 0:t.match(i)[1]}_1920x1080.jpg`,width:e==null?void 0:e.width,height:e==null?void 0:e.height};return ol.set(this.videoId,o),o})})}onTimeChange(e){this.internalState.currentTime!==e&&(this.dispatch("currentTime",e),Math.abs(this.internalState.currentTime-e)>1.5&&(this.internalState.seeking=!0,this.dispatch("seeking",!0),this.internalState.playing&&this.internalState.buffered<e&&this.dispatch("buffering",!0),window.clearTimeout(this.pendingPlayRequest),this.internalState.paused||(this.internalState.playRequest=!0),this.remoteControl(this.internalState.playbackStarted?"pause":"play")),this.internalState.currentTime=e)}cancelTimeUpdates(){At(this.timeRAF)&&window.cancelAnimationFrame(this.timeRAF)}requestTimeUpdates(){this.remoteControl("getCurrentTime"),this.timeRAF=window.requestAnimationFrame(()=>{this.requestTimeUpdates()})}onSeeked(){!this.internalState.seeking||(this.dispatch("seeking",!1),this.internalState.seeking=!1,this.internalState.playRequest&&window.setTimeout(()=>{this.remoteControl("play")},150))}onVimeoMethod(e,t){var i,n;switch(e){case"getCurrentTime":this.internalState.seeking||this.onTimeChange(t);break;case"getDuration":(i=this.pendingDurationCall)===null||i===void 0||i.resolve(t);break;case"getVideoTitle":(n=this.pendingMediaTitleCall)===null||n===void 0||n.resolve(t);break}}onLoaded(){var e,t;this.hasLoaded||(this.pendingPlayRequest=void 0,this.internalState=Object.assign({},this.defaultInternalState),this.dispatch("currentSrc",this.embedSrc),this.dispatch("mediaType",vt.Video),this.remoteControl("getDuration"),this.remoteControl("getVideoTitle"),Promise.all([this.fetchVideoInfo,(e=this.pendingDurationCall)===null||e===void 0?void 0:e.promise,(t=this.pendingMediaTitleCall)===null||t===void 0?void 0:t.promise]).then(([i,n,r])=>{var o,s,l;this.requestTimeUpdates(),this.dispatch("aspectRatio",`${(o=i==null?void 0:i.width)!==null&&o!==void 0?o:16}:${(s=i==null?void 0:i.height)!==null&&s!==void 0?s:9}`),this.dispatch("currentPoster",(l=this.poster)!==null&&l!==void 0?l:i==null?void 0:i.poster),this.dispatch("duration",n!=null?n:-1),this.dispatch("mediaTitle",r),this.dispatch("playbackReady",!0)}),this.hasLoaded=!0)}onVimeoEvent(e,t){switch(e){case"ready":Object.values(ha).forEach(i=>{this.remoteControl("addEventListener",i)});break;case"loaded":this.onLoaded();break;case"play":this.onLoaded(),this.internalState.paused=!1,this.dispatch("paused",!1);break;case"playProgress":this.internalState.playing||(this.dispatch("playing",!0),this.internalState.playing=!0,this.internalState.playbackStarted=!0,this.pendingPlayRequest=window.setTimeout(()=>{this.internalState.playRequest=!1,this.pendingPlayRequest=void 0},1e3)),this.dispatch("buffering",!1),this.onSeeked();break;case"pause":this.internalState.paused=!0,this.internalState.playing=!1,this.dispatch("paused",!0),this.dispatch("buffering",!1);break;case"loadProgress":this.internalState.buffered=t.seconds,this.dispatch("buffered",t.seconds);break;case"bufferstart":this.dispatch("buffering",!0),this.internalState.paused&&(this.internalState.paused=!1,this.dispatch("paused",!1),this.dispatch("playbackStarted",!0));break;case"bufferend":this.dispatch("buffering",!1),this.internalState.paused&&this.onSeeked();break;case"volumechange":if(t.volume>0){const i=Math.floor(t.volume*100);this.dispatch("muted",!1),this.volume!==i&&(this.volume=i,this.dispatch("volume",this.volume))}else this.dispatch("muted",!0);break;case"durationchange":this.dispatch("duration",t.duration);break;case"playbackratechange":this.dispatch("playbackRate",t.playbackRate);break;case"fullscreenchange":this.dispatch("isFullscreenActive",t.fullscreen);break;case"finish":this.loop?(this.remoteControl("setCurrentTime",0),setTimeout(()=>{this.remoteControl("play")},200)):this.dispatch("playbackEnded",!0);break;case"error":this.vmError.emit(t);break}}onEmbedSrcChange(){this.hasLoaded=!1,this.vmLoadStart.emit(),this.dispatch("viewType",Ke.Video)}onEmbedMessage(e){const t=e.detail;S(t.event)||this.onVimeoEvent(t.event,t.data),S(t.method)||this.onVimeoMethod(t.method,t.value)}adjustPosition(){if(this.controls)return{};const[e,t]=this.aspectRatio.split(":").map(o=>parseInt(o,10)),i=240,n=100/e*t,r=(i-n)/(i/50);return{paddingBottom:`${i}%`,transform:`translateY(-${r+.02}%)`}}getAdapter(){return ot(this,void 0,void 0,function*(){const e=/vimeo(?:\.com|)\/([0-9]{9,})/,t=/vimeo\.com\/external\/[0-9]+\..+/;return{getInternalPlayer:()=>ot(this,void 0,void 0,function*(){return this.embed}),play:()=>ot(this,void 0,void 0,function*(){this.remoteControl("play")}),pause:()=>ot(this,void 0,void 0,function*(){this.remoteControl("pause")}),canPlay:i=>ot(this,void 0,void 0,function*(){return xe(i)&&!t.test(i)&&e.test(i)}),setCurrentTime:i=>ot(this,void 0,void 0,function*(){i!==this.internalState.currentTime&&this.remoteControl("setCurrentTime",i)}),setMuted:i=>ot(this,void 0,void 0,function*(){i||(this.volume=this.volume>0?this.volume:30),this.remoteControl("setVolume",i?0:this.volume/100)}),setVolume:i=>ot(this,void 0,void 0,function*(){this.muted?this.dispatch("volume",i):this.remoteControl("setVolume",i/100)}),canSetPlaybackRate:()=>ot(this,void 0,void 0,function*(){return!1}),setPlaybackRate:i=>ot(this,void 0,void 0,function*(){this.remoteControl("setPlaybackRate",i)})}})}render(){return m("vm-embed",{class:{hideControls:!this.controls},style:this.adjustPosition(),embedSrc:this.embedSrc,mediaTitle:this.mediaTitle,origin:this.getOrigin(),params:this.buildParams(),decoder:gp,preconnections:this.getPreconnections(),onVmEmbedMessage:this.onEmbedMessage.bind(this),onVmEmbedSrcChange:this.onEmbedSrcChange.bind(this),ref:e=>{this.embed=e}})}static get watchers(){return{videoId:["onVideoIdChange"],poster:["onCustomPosterChange"]}}static get style(){return J1}},tk=`.volumeControl{align-items:center;display:flex;position:relative;pointer-events:auto;box-sizing:border-box}vm-slider{width:75px;height:100%;margin:0;max-width:0;position:relative;z-index:3;transition:margin 0.2s cubic-bezier(0.4, 0, 1, 1),
    max-width 0.2s cubic-bezier(0.4, 0, 1, 1);margin-left:calc(var(--vm-control-spacing) / 2) !important;visibility:hidden}vm-slider:hover{cursor:pointer}vm-slider.hidden{display:none}vm-slider.active{max-width:75px;visibility:visible;margin:0 calc(var(--vm-control-spacing) / 2)}`;var ik=function(e,t,i,n){function r(o){return o instanceof i?o:new i(function(s){s(o)})}return new(i||(i=Promise))(function(o,s){function l(a){try{c(n.next(a))}catch(d){s(d)}}function u(a){try{c(n.throw(a))}catch(d){s(d)}}function c(a){a.done?o(a.value):r(a.value).then(l,u)}c((n=n.apply(e,t||[])).next())})};const nk=class extends HTMLElement{constructor(){super(),this.__registerHost(),N(this),this.keyboardDisposal=new pe,this.prevMuted=!1,this.currentVolume=50,this.isSliderActive=!1,this.lowVolumeIcon="volume-low",this.highVolumeIcon="volume-high",this.mutedIcon="volume-mute",this.tooltipPosition="top",this.hideTooltip=!1,this.muteKeys="m",this.noKeyboard=!1,this.muted=!1,this.volume=50,this.isMobile=!1,this.i18n={},V(this),W(this,["volume","muted","isMobile","i18n"])}onNoKeyboardChange(){return ik(this,void 0,void 0,function*(){if(this.keyboardDisposal.empty(),this.noKeyboard)return;const e=yield Ft(this);S(e)||this.keyboardDisposal.add(J(e,"keydown",t=>{if(t.key!=="ArrowUp"&&t.key!=="ArrowDown")return;const n=t.key==="ArrowUp"?Math.min(100,this.volume+5):Math.max(0,this.volume-5);this.dispatch("volume",parseInt(`${n}`,10))}))})}onPlayerVolumeChange(){this.currentVolume=this.muted?0:this.volume,!this.muted&&this.prevMuted&&this.volume===0&&this.dispatch("volume",30),this.prevMuted=this.muted}connectedCallback(){this.prevMuted=this.muted,this.dispatch=Ot(this),this.onNoKeyboardChange()}disconnectedCallback(){this.keyboardDisposal.empty()}onShowSlider(){clearTimeout(this.hideSliderTimeout),this.isSliderActive=!0}onHideSlider(){this.hideSliderTimeout=setTimeout(()=>{this.isSliderActive=!1},100)}onVolumeChange(e){const t=e.detail;this.currentVolume=t,this.dispatch("volume",t),this.dispatch("muted",t===0)}onKeyDown(e){e.key!=="ArrowLeft"&&e.key!=="ArrowRight"||e.stopPropagation()}render(){return m("div",{class:"volumeControl",onMouseEnter:this.onShowSlider.bind(this),onMouseLeave:this.onHideSlider.bind(this)},m("vm-mute-control",{keys:this.muteKeys,lowVolumeIcon:this.lowVolumeIcon,highVolumeIcon:this.highVolumeIcon,mutedIcon:this.mutedIcon,icons:this.icons,tooltipPosition:this.tooltipPosition,tooltipDirection:this.tooltipDirection,hideTooltip:this.hideTooltip,onVmFocus:this.onShowSlider.bind(this),onVmBlur:this.onHideSlider.bind(this)}),m("vm-slider",{class:{hidden:this.isMobile,active:this.isSliderActive},step:5,max:100,value:this.currentVolume,label:this.i18n.volume,onKeyDown:this.onKeyDown.bind(this),onVmFocus:this.onShowSlider.bind(this),onVmBlur:this.onHideSlider.bind(this),onVmValueChange:this.onVolumeChange.bind(this)}))}static get watchers(){return{noKeyboard:["onNoKeyboardChange"],muted:["onPlayerVolumeChange"],volume:["onPlayerVolumeChange"]}}static get style(){return tk}},wd=e=>{switch(e){case"unknown":return;case"tiny":return"144p";case"small":return"240p";case"medium":return"360p";case"large":return"480p";case"hd720":return"720p";case"hd1080":return"1080p";case"highres":return"1440p";case"max":return"2160p";default:return}},rk=":host{z-index:var(--vm-media-z-index)}";var st=function(e,t,i,n){function r(o){return o instanceof i?o:new i(function(s){s(o)})}return new(i||(i=Promise))(function(o,s){function l(a){try{c(n.next(a))}catch(d){s(d)}}function u(a){try{c(n.throw(a))}catch(d){s(d)}}function c(a){a.done?o(a.value):r(a.value).then(l,u)}c((n=n.apply(e,t||[])).next())})};const sl=new Map,ok=class extends HTMLElement{constructor(){super(),this.__registerHost(),N(this),this.vmLoadStart=T(this,"vmLoadStart",7),this.defaultInternalState={},this.internalState={paused:!0,duration:0,seeking:!1,playbackReady:!1,playbackStarted:!1,currentTime:0,lastTimeUpdate:0,playbackRate:1,state:-1},this.embedSrc="",this.mediaTitle="",this.cookies=!1,this.showFullscreenControl=!0,this.language="en",this.autoplay=!1,this.controls=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,V(this),li(this),fs(this)}onVideoIdChange(){if(!this.videoId){this.embedSrc="";return}this.embedSrc=`${this.getOrigin()}/embed/${this.videoId}`,this.fetchPosterURL=this.findPosterURL()}onCustomPosterChange(){this.dispatch("currentPoster",this.poster)}connectedCallback(){this.dispatch=gn(this),this.dispatch("viewType",Ke.Video),this.onVideoIdChange(),this.defaultInternalState=Object.assign({},this.internalState)}componentDidLoad(){this.initialMuted=this.muted}getAdapter(){return st(this,void 0,void 0,function*(){const e=/(?:youtu\.be|youtube|youtube\.com|youtube-nocookie\.com)\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|)((?:\w|-){11})/;return{getInternalPlayer:()=>st(this,void 0,void 0,function*(){return this.embed}),play:()=>st(this,void 0,void 0,function*(){this.remoteControl("playVideo")}),pause:()=>st(this,void 0,void 0,function*(){this.remoteControl("pauseVideo")}),canPlay:t=>st(this,void 0,void 0,function*(){return xe(t)&&e.test(t)}),setCurrentTime:t=>st(this,void 0,void 0,function*(){t!==this.internalState.currentTime&&this.remoteControl("seekTo",t)}),setMuted:t=>st(this,void 0,void 0,function*(){t?this.remoteControl("mute"):this.remoteControl("unMute")}),setVolume:t=>st(this,void 0,void 0,function*(){this.remoteControl("setVolume",t)}),canSetPlaybackRate:()=>st(this,void 0,void 0,function*(){return!0}),setPlaybackRate:t=>st(this,void 0,void 0,function*(){this.remoteControl("setPlaybackRate",t)})}})}getOrigin(){return this.cookies?"https://www.youtube.com":"https://www.youtube-nocookie.com"}getPreconnections(){return[this.getOrigin(),"https://www.google.com","https://googleads.g.doubleclick.net","https://static.doubleclick.net","https://s.ytimg.com","https://i.ytimg.com"]}remoteControl(e,t){return this.embed.postMessage({event:"command",func:e,args:t?[t]:void 0})}buildParams(){return{enablejsapi:1,cc_lang_pref:this.language,hl:this.language,fs:this.showFullscreenControl?1:0,controls:this.controls?1:0,disablekb:this.controls?0:1,iv_load_policy:this.controls?1:3,mute:this.initialMuted?1:0,playsinline:this.playsinline?1:0,autoplay:this.autoplay?1:0}}onEmbedSrcChange(){this.vmLoadStart.emit(),this.dispatch("viewType",Ke.Video)}onEmbedLoaded(){window.setTimeout(()=>this.embed.postMessage({event:"listening"}),100)}findPosterURL(){return st(this,void 0,void 0,function*(){if(sl.has(this.videoId))return sl.get(this.videoId);const e=t=>`https://i.ytimg.com/vi/${this.videoId}/${t}.jpg`;return Zs(e("maxresdefault"),121).catch(()=>Zs(e("sddefault"),121)).catch(()=>Zs(e("hqdefault"),121)).then(t=>{const i=t.src;return sl.set(this.videoId,i),i})})}onCued(){this.internalState.playbackReady||(this.internalState=Object.assign({},this.defaultInternalState),this.dispatch("currentSrc",this.embedSrc),this.dispatch("mediaType",vt.Video),this.fetchPosterURL.then(e=>{var t;this.dispatch("currentPoster",(t=this.poster)!==null&&t!==void 0?t:e),this.dispatch("playbackReady",!0)}),this.internalState.playbackReady=!0)}onPlayerStateChange(e){if(this.internalState.playbackReady&&e===-1){this.internalState.paused=!0,this.internalState.playbackStarted=!1,this.dispatch("buffering",!1),this.dispatch("paused",!0),this.dispatch("playbackStarted",!1);return}const t=e===1,i=e===3;switch(this.dispatch("buffering",i),this.internalState.paused&&(i||t)&&(this.internalState.paused=!1,this.dispatch("paused",!1),this.internalState.playbackStarted||(this.dispatch("playbackStarted",!0),this.internalState.playbackStarted=!0)),e){case 5:this.onCued();break;case 1:this.onCued(),this.dispatch("playing",!0);break;case 2:this.internalState.paused=!0,this.dispatch("paused",!0);break;case 0:this.loop?window.setTimeout(()=>{this.remoteControl("playVideo")},150):(this.dispatch("playbackEnded",!0),this.internalState.paused=!0,this.dispatch("paused",!0));break}this.internalState.state=e}calcCurrentTime(e){let t=e;if(this.internalState.state===0)return this.internalState.duration;if(this.internalState.state===1){const i=(Date.now()/1e3-this.defaultInternalState.lastTimeUpdate)*this.internalState.playbackRate;i>0&&(t+=Math.min(i,1))}return t}onTimeChange(e){const t=this.calcCurrentTime(e);this.dispatch("currentTime",t),Math.abs(this.internalState.currentTime-t)>1.5&&(this.internalState.seeking=!0,this.dispatch("seeking",!0)),this.internalState.currentTime=t}onBufferedChange(e){this.dispatch("buffered",e),this.internalState.seeking&&e>this.internalState.currentTime&&window.setTimeout(()=>{this.internalState.seeking=!1,this.dispatch("seeking",!1)},this.internalState.paused?100:0)}onEmbedMessage(e){const t=e.detail,{info:i}=t;!i||(us(i.videoData)&&this.dispatch("mediaTitle",i.videoData.title),At(i.duration)&&(this.internalState.duration=i.duration,this.dispatch("duration",i.duration)),Fo(i.availablePlaybackRates)&&this.dispatch("playbackRates",i.availablePlaybackRates),At(i.playbackRate)&&(this.internalState.playbackRate=i.playbackRate,this.dispatch("playbackRate",i.playbackRate)),At(i.currentTime)&&this.onTimeChange(i.currentTime),At(i.currentTimeLastUpdated)&&(this.internalState.lastTimeUpdate=i.currentTimeLastUpdated),At(i.videoLoadedFraction)&&this.onBufferedChange(i.videoLoadedFraction*this.internalState.duration),At(i.volume)&&this.dispatch("volume",i.volume),s0(i.muted)&&this.dispatch("muted",i.muted),Fo(i.availableQualityLevels)&&this.dispatch("playbackQualities",i.availableQualityLevels.map(n=>wd(n))),xe(i.playbackQuality)&&this.dispatch("playbackQuality",wd(i.playbackQuality)),At(i.playerState)&&this.onPlayerStateChange(i.playerState))}render(){return m("vm-embed",{embedSrc:this.embedSrc,mediaTitle:this.mediaTitle,origin:this.getOrigin(),params:this.buildParams(),decoder:gp,preconnections:this.getPreconnections(),onVmEmbedLoaded:this.onEmbedLoaded.bind(this),onVmEmbedMessage:this.onEmbedMessage.bind(this),onVmEmbedSrcChange:this.onEmbedSrcChange.bind(this),ref:e=>{this.embed=e}})}static get watchers(){return{cookies:["onVideoIdChange"],videoId:["onVideoIdChange"],poster:["onCustomPosterChange"]}}static get style(){return rk}},sk=I(P0,[4,"vm-audio",{willAttach:[4,"will-attach"],crossOrigin:[1,"cross-origin"],preload:[1],disableRemotePlayback:[4,"disable-remote-playback"],mediaTitle:[1,"media-title"]}]),hu=I(R0,[1,"vm-caption-control",{showIcon:[1,"show-icon"],hideIcon:[1,"hide-icon"],tooltipPosition:[1,"tooltip-position"],tooltipDirection:[1,"tooltip-direction"],hideTooltip:[4,"hide-tooltip"],icons:[1],keys:[1],i18n:[16],playbackReady:[4,"playback-ready"],textTracks:[16],isTextTrackVisible:[4,"is-text-track-visible"],canToggleCaptionVisibility:[32]}]),bp=I($0,[1,"vm-captions",{hidden:[4],isControlsActive:[4,"is-controls-active"],isVideoView:[4,"is-video-view"],playbackStarted:[4,"playback-started"],textTracks:[16],currentTextTrack:[2,"current-text-track"],isTextTrackVisible:[4,"is-text-track-visible"],isEnabled:[32],cue:[32],fontSize:[32]}]),xp=I(z0,[1,"vm-click-to-play",{useOnMobile:[4,"use-on-mobile"],paused:[4],isVideoView:[4,"is-video-view"],isMobile:[4,"is-mobile"]}]),Et=I(D0,[1,"vm-control",{keys:[1],identifier:[1],hidden:[4],label:[1],menu:[1],expanded:[4],pressed:[4],isTouch:[4,"is-touch"],describedBy:[32],showTapHighlight:[32]}]),fu=I(H0,[1,"vm-control-group",{space:[1]}]),pu=I(W0,[1,"vm-control-spacer"]),mu=I(K0,[1,"vm-controls",{hidden:[4],fullWidth:[4,"full-width"],fullHeight:[4,"full-height"],direction:[1],align:[1],justify:[1],pin:[513],activeDuration:[2,"active-duration"],waitForPlaybackStart:[4,"wait-for-playback-start"],hideWhenPaused:[4,"hide-when-paused"],hideOnMouseLeave:[4,"hide-on-mouse-leave"],isAudioView:[4,"is-audio-view"],isSettingsActive:[4,"is-settings-active"],playbackReady:[4,"playback-ready"],isControlsActive:[4,"is-controls-active"],paused:[4],playbackStarted:[4,"playback-started"],isInteracting:[32]}]),ps=I(Y0,[1,"vm-current-time",{currentTime:[2,"current-time"],i18n:[16],alwaysShowHours:[4,"always-show-hours"]}]),lk=I(py,[1,"vm-dailymotion",{videoId:[1,"video-id"],shouldAutoplayQueue:[4,"should-autoplay-queue"],showUpNextQueue:[4,"show-up-next-queue"],showShareButtons:[4,"show-share-buttons"],color:[1],syndication:[1],showDailymotionLogo:[4,"show-dailymotion-logo"],showVideoInfo:[4,"show-video-info"],language:[1],autoplay:[4],controls:[4],poster:[1],logger:[16],loop:[4],muted:[4],playsinline:[4],embedSrc:[32],mediaTitle:[32]}]),ak=I(vy,[1,"vm-dash",{src:[1],version:[1],libSrc:[1,"lib-src"],config:[16],autoplay:[4],crossOrigin:[1,"cross-origin"],preload:[1],poster:[1],controlsList:[1,"controls-list"],autoPiP:[4,"auto-pip"],disablePiP:[4,"disable-pip"],disableRemotePlayback:[4,"disable-remote-playback"],mediaTitle:[1,"media-title"],enableTextTracksByDefault:[4,"enable-text-tracks-by-default"],shouldRenderNativeTextTracks:[4,"should-render-native-text-tracks"],isTextTrackVisible:[4,"is-text-track-visible"],currentTextTrack:[2,"current-text-track"],hasAttached:[32]},[[0,"vmMediaElChange","onMediaElChange"]]]),Cp=I(yy,[1,"vm-dbl-click-fullscreen",{useOnMobile:[4,"use-on-mobile"],isFullscreenActive:[4,"is-fullscreen-active"],isVideoView:[4,"is-video-view"],playbackReady:[4,"playback-ready"],isMobile:[4,"is-mobile"],canSetFullscreen:[32]}]),Tp=I(wy,[1,"vm-default-controls",{activeDuration:[2,"active-duration"],waitForPlaybackStart:[4,"wait-for-playback-start"],hideWhenPaused:[4,"hide-when-paused"],hideOnMouseLeave:[4,"hide-on-mouse-leave"],theme:[1],isMobile:[4,"is-mobile"],isLive:[4,"is-live"],isAudioView:[4,"is-audio-view"],isVideoView:[4,"is-video-view"]}]),Sp=I(xy,[1,"vm-default-settings",{pin:[513],i18n:[16],playbackReady:[4,"playback-ready"],playbackRate:[2,"playback-rate"],playbackRates:[16],isVideoView:[4,"is-video-view"],playbackQuality:[1,"playback-quality"],playbackQualities:[16],textTracks:[16],currentTextTrack:[2,"current-text-track"],audioTracks:[16],currentAudioTrack:[2,"current-audio-track"],isTextTrackVisible:[4,"is-text-track-visible"],canSetPlaybackRate:[32],canSetPlaybackQuality:[32],canSetTextTrack:[32],canSetAudioTrack:[32]}]),uk=I(Ty,[1,"vm-default-ui",{noClickToPlay:[4,"no-click-to-play"],noDblClickFullscreen:[4,"no-dbl-click-fullscreen"],noCaptions:[4,"no-captions"],noPoster:[4,"no-poster"],noSpinner:[4,"no-spinner"],noControls:[4,"no-controls"],noSettings:[4,"no-settings"],noLoadingScreen:[4,"no-loading-screen"]}]),ms=I(Py,[1,"vm-embed",{embedSrc:[1,"embed-src"],mediaTitle:[1,"media-title"],params:[1],origin:[1],preconnections:[16],decoder:[16],srcWithParams:[32],hasEnteredViewport:[32]},[[8,"message","onWindowMessage"]]]),vs=I(Ly,[1,"vm-end-time",{duration:[2],i18n:[16],alwaysShowHours:[4,"always-show-hours"]}]),Tr=I($y,[6,"vm-file",{willAttach:[4,"will-attach"],crossOrigin:[1,"cross-origin"],preload:[1],poster:[1],mediaTitle:[1,"media-title"],controlsList:[1,"controls-list"],autoPiP:[4,"auto-pip"],disablePiP:[4,"disable-pip"],disableRemotePlayback:[4,"disable-remote-playback"],viewType:[1,"view-type"],playbackRates:[16],language:[1],autoplay:[4],controls:[4],logger:[16],loop:[4],muted:[4],playsinline:[4],noConnect:[4,"no-connect"],paused:[4],currentTime:[2,"current-time"],volume:[2],playbackReady:[4,"playback-ready"],playbackStarted:[4,"playback-started"],currentTextTrack:[2,"current-text-track"],hasCustomTextManager:[4,"has-custom-text-manager"],isTextTrackVisible:[4,"is-text-track-visible"],shouldRenderNativeTextTracks:[4,"should-render-native-text-tracks"],vmPoster:[32]},[[0,"vmMediaProviderConnect","onProviderConnect"],[0,"vmMediaProviderDisconnect","onProviderDisconnect"]]]),vu=I(zy,[1,"vm-fullscreen-control",{enterIcon:[1,"enter-icon"],exitIcon:[1,"exit-icon"],icons:[1],tooltipPosition:[1,"tooltip-position"],tooltipDirection:[1,"tooltip-direction"],hideTooltip:[4,"hide-tooltip"],keys:[1],isFullscreenActive:[4,"is-fullscreen-active"],i18n:[16],playbackReady:[4,"playback-ready"],canSetFullscreen:[32]}]),ck=I(Fy,[4,"vm-hls",{version:[1],libSrc:[1,"lib-src"],config:[8],crossOrigin:[1,"cross-origin"],preload:[1],poster:[1],controlsList:[1,"controls-list"],autoPiP:[4,"auto-pip"],disablePiP:[4,"disable-pip"],disableRemotePlayback:[4,"disable-remote-playback"],playbackReady:[4,"playback-ready"],mediaTitle:[1,"media-title"],hasAttached:[32]},[[0,"vmMediaElChange","onMediaElChange"],[0,"vmSrcSetChange","onSrcChange"]]]),De=I(Ky,[1,"vm-icon",{name:[1],src:[1],label:[1],library:[1],icons:[1],svg:[32]}]),dk=I(Gy,[1,"vm-icon-library",{name:[1],resolver:[16],icons:[1]}]),gu=I(Xy,[1,"vm-live-indicator",{isLive:[4,"is-live"],i18n:[16]}]),Ep=I(Zy,[1,"vm-loading-screen",{playbackReady:[4,"playback-ready"],hideDots:[4,"hide-dots"]}]),Sr=I(n1,[1,"vm-menu",{active:[1540],identifier:[1],controller:[16],slideInDirection:[1,"slide-in-direction"],activeMenuItem:[32],activeSubmenu:[32]},[[0,"vmOpenSubmenu","onOpenSubmenu"],[0,"vmCloseSubmenu","onCloseSubmenu"],[8,"click","onWindowClick"],[8,"keydown","onWindowKeyDown"]]]),Er=I(o1,[1,"vm-menu-item",{identifier:[1],hidden:[4],label:[1],menu:[16],expanded:[4],checked:[4],hint:[1],badge:[1],checkIcon:[1,"check-icon"],icons:[1],isTouch:[4,"is-touch"],showTapHighlight:[32]}]),yu=I(s1,[1,"vm-menu-radio",{label:[1],value:[1],checked:[1028],badge:[1],checkIcon:[1,"check-icon"],icons:[1]}]),ku=I(l1,[1,"vm-menu-radio-group",{value:[1025]},[[0,"vmCheck","onSelectionChange"]]]),gs=I(a1,[1,"vm-mute-control",{lowVolumeIcon:[1,"low-volume-icon"],highVolumeIcon:[1,"high-volume-icon"],mutedIcon:[1,"muted-icon"],icons:[1],tooltipPosition:[1,"tooltip-position"],tooltipDirection:[1,"tooltip-direction"],hideTooltip:[4,"hide-tooltip"],keys:[1],volume:[2],muted:[4],i18n:[16]}]),wu=I(d1,[1,"vm-pip-control",{enterIcon:[1,"enter-icon"],exitIcon:[1,"exit-icon"],icons:[1],tooltipPosition:[1,"tooltip-position"],tooltipDirection:[1,"tooltip-direction"],hideTooltip:[4,"hide-tooltip"],keys:[1],isPiPActive:[4,"is-pi-p-active"],i18n:[16],playbackReady:[4,"playback-ready"],canSetPiP:[32]}]),bu=I(h1,[1,"vm-playback-control",{playIcon:[1,"play-icon"],pauseIcon:[1,"pause-icon"],icons:[1],tooltipPosition:[1,"tooltip-position"],tooltipDirection:[1,"tooltip-direction"],hideTooltip:[4,"hide-tooltip"],keys:[1],paused:[4],i18n:[16]}]),hk=I(w1,[1,"vm-player",{logger:[16],theme:[513],icons:[513],paused:[1028],playing:[1028],duration:[1026],mediaTitle:[1025,"media-title"],currentProvider:[1025,"current-provider"],currentSrc:[1025,"current-src"],currentPoster:[1025,"current-poster"],currentTime:[1026,"current-time"],autoplay:[4],ready:[1540],playbackReady:[1028,"playback-ready"],loop:[4],muted:[1028],buffered:[1026],playbackRate:[1026,"playback-rate"],playbackRates:[1040],playbackQuality:[1025,"playback-quality"],playbackQualities:[1040],seeking:[1028],debug:[4],playbackStarted:[1028,"playback-started"],playbackEnded:[1028,"playback-ended"],buffering:[1028],controls:[4],isControlsActive:[4,"is-controls-active"],isSettingsActive:[1028,"is-settings-active"],volume:[1026],isFullscreenActive:[1028,"is-fullscreen-active"],aspectRatio:[1025,"aspect-ratio"],viewType:[1025,"view-type"],isAudioView:[1028,"is-audio-view"],isVideoView:[1028,"is-video-view"],mediaType:[1025,"media-type"],isAudio:[1028,"is-audio"],isVideo:[1028,"is-video"],isLive:[1028,"is-live"],isMobile:[1028,"is-mobile"],isTouch:[1028,"is-touch"],isPiPActive:[1028,"is-pi-p-active"],textTracks:[16],currentTextTrack:[2,"current-text-track"],isTextTrackVisible:[4,"is-text-track-visible"],shouldRenderNativeTextTracks:[4,"should-render-native-text-tracks"],audioTracks:[16],currentAudioTrack:[2,"current-audio-track"],autopause:[4],playsinline:[4],language:[1025],translations:[1040],languages:[1040],i18n:[1040],container:[32]},[[0,"vmError","onError"]]]),Pp=I(x1,[1,"vm-poster",{fit:[1],isVideoView:[4,"is-video-view"],currentPoster:[1,"current-poster"],mediaTitle:[1,"media-title"],playbackStarted:[4,"playback-started"],currentTime:[2,"current-time"],isHidden:[32],isActive:[32],hasLoaded:[32]}]),xu=I(T1,[1,"vm-scrim",{gradient:[1],isVideoView:[4,"is-video-view"],isControlsActive:[4,"is-controls-active"]}]),Cu=I(R1,[1,"vm-scrubber-control",{alwaysShowHours:[4,"always-show-hours"],hideTooltip:[4,"hide-tooltip"],currentTime:[2,"current-time"],duration:[2],noKeyboard:[4,"no-keyboard"],buffering:[4],buffered:[2],i18n:[16],timestamp:[32],endTime:[32]}]),Tu=I(I1,[1,"vm-settings",{pin:[513],active:[1540],isMobile:[4,"is-mobile"],isAudioView:[4,"is-audio-view"],menuHeight:[32]}]),Su=I(V1,[1,"vm-settings-control",{icon:[1],icons:[1],tooltipPosition:[1,"tooltip-position"],tooltipDirection:[1,"tooltip-direction"],menu:[1],expanded:[4],i18n:[16],vmSettings:[32]}]),fk=I(z1,[1,"vm-skeleton",{effect:[1],ready:[4],hidden:[32]}]),Pr=I(D1,[1,"vm-slider",{step:[2],min:[2],max:[2],value:[2],valueText:[1,"value-text"],label:[1]}]),Ap=I(H1,[1,"vm-spinner",{isVideoView:[4,"is-video-view"],currentProvider:[1,"current-provider"],showWhenMediaLoading:[4,"show-when-media-loading"],playbackReady:[4,"playback-ready"],buffering:[4],isHidden:[32],isActive:[32]}]),Eu=I(j1,[1,"vm-submenu",{label:[1],hint:[1],slideInDirection:[1,"slide-in-direction"],active:[1540],menu:[32],controller:[32]}]),kn=I(U1,[1,"vm-time",{label:[1],seconds:[2],alwaysShowHours:[4,"always-show-hours"]}]),Pu=I(B1,[1,"vm-time-progress",{separator:[1],alwaysShowHours:[4,"always-show-hours"]}]),gt=I(G1,[1,"vm-tooltip",{hidden:[4],active:[4],position:[1],direction:[1],isTouch:[4,"is-touch"],isMobile:[4,"is-mobile"]}]),Lp=I(X1,[1,"vm-ui",{isVideoView:[4,"is-video-view"],playsinline:[4],isFullscreenActive:[4,"is-fullscreen-active"]}]),Au=I(Z1,[4,"vm-video",{willAttach:[4,"will-attach"],hasCustomTextManager:[4,"has-custom-text-manager"],crossOrigin:[1,"cross-origin"],preload:[1],poster:[1],controlsList:[1,"controls-list"],autoPiP:[4,"auto-pip"],disablePiP:[4,"disable-pip"],disableRemotePlayback:[4,"disable-remote-playback"],mediaTitle:[1,"media-title"]},[[0,"vmMediaProviderConnect","onProviderConnect"],[0,"vmMediaProviderDisconnect","onProviderDisconnect"]]]),pk=I(ek,[1,"vm-vimeo",{videoId:[1,"video-id"],byline:[4],color:[1],portrait:[4],noAutoAspectRatio:[4,"no-auto-aspect-ratio"],poster:[1],cookies:[4],language:[1],aspectRatio:[1,"aspect-ratio"],autoplay:[4],controls:[4],logger:[16],loop:[4],muted:[4],playsinline:[4],embedSrc:[32],mediaTitle:[32]}]),Lu=I(nk,[1,"vm-volume-control",{lowVolumeIcon:[1,"low-volume-icon"],highVolumeIcon:[1,"high-volume-icon"],mutedIcon:[1,"muted-icon"],icons:[1],tooltipPosition:[1,"tooltip-position"],tooltipDirection:[1,"tooltip-direction"],hideTooltip:[4,"hide-tooltip"],muteKeys:[1,"mute-keys"],noKeyboard:[4,"no-keyboard"],muted:[4],volume:[2],isMobile:[4,"is-mobile"],i18n:[16],currentVolume:[32],isSliderActive:[32]}]),mk=I(ok,[1,"vm-youtube",{cookies:[4],videoId:[1,"video-id"],showFullscreenControl:[4,"show-fullscreen-control"],poster:[1],language:[1],autoplay:[4],controls:[4],logger:[16],loop:[4],muted:[4],playsinline:[4],embedSrc:[32],mediaTitle:[32]}]);var Rp={};Object.defineProperty(Rp,"__esModule",{value:!0});function vk(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(e.length===2)return xd(e[0],e[1])||null;var i=e.slice(1).reduce(function(n,r){return xd(n,r)},e[0]);return i||null}var gk=Rp.default=vk,bd=new WeakMap;function xd(e,t){if(e&&t){var i=bd.get(e)||new WeakMap;bd.set(e,i);var n=i.get(t)||function(r){Cd(e,r),Cd(t,r)};return i.set(t,n),n}return e||t}function Cd(e,t){typeof e=="function"?e(t):e.current=t}var yk=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i};const y=(e,t)=>{typeof window!="undefined"&&!customElements.get(e)&&customElements.define(e,t)},kk=e=>e.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),ll=e=>{var t;return e.indexOf("on")===0&&e[2]===((t=e[2])===null||t===void 0?void 0:t.toUpperCase())},wk=e=>e.charAt(2).toLowerCase()+e.substring(3);function $(e,t){const i=X.exports.forwardRef((n,r)=>{var{children:o}=n,s=yk(n,["children"]);const[l,u]=X.exports.useState(null),c=X.exports.useCallback(w=>{u(w)},[]),a=X.exports.useRef(new Map),d=X.exports.useMemo(()=>Object.keys(s).filter(w=>!t.has(w)&&!ll(w)).reduce((w,z)=>Object.assign(Object.assign({},w),{[z]:s[z]}),{}),[s]),p=X.exports.useMemo(()=>Object.keys(s).filter(w=>t.has(w)||ll(w)).reduce((w,z)=>Object.assign(Object.assign({},w),{[z]:s[z]}),{}),[s]),k=X.exports.useCallback((w,z)=>{var f;const h=wk(w);(f=a.current.get(h))===null||f===void 0||f(),!(!l||!z)&&(l.addEventListener(h,z),a.current.set(h,()=>{l.removeEventListener(h,z)}))},[l]),b=X.exports.useCallback(()=>{a.current.forEach(w=>w()),a.current.clear()},[]);return X.exports.useEffect(()=>()=>{b()},[]),X.exports.useEffect(()=>{!l||Object.keys(p).forEach(w=>{if(ll(w)){k(w,p[w]);return}l[w]!==p[w]&&(l[w]=p[w])})},[l,p]),X.exports.createElement(e,Object.assign({ref:gk(c,r)},d),o)});return i.displayName=kk(e),i}y("vm-audio",sk);y("vm-file",Tr);$("vm-audio",new Set(["willAttach","crossOrigin","preload","disableRemotePlayback","mediaTitle"]));y("vm-caption-control",hu);y("vm-control",Et);y("vm-icon",De);y("vm-tooltip",gt);$("vm-caption-control",new Set(["showIcon","hideIcon","tooltipPosition","tooltipDirection","hideTooltip","icons","keys","i18n","playbackReady","textTracks","isTextTrackVisible"]));y("vm-captions",bp);$("vm-captions",new Set(["hidden","isControlsActive","isVideoView","playbackStarted","textTracks","currentTextTrack","isTextTrackVisible"]));y("vm-click-to-play",xp);$("vm-click-to-play",new Set(["useOnMobile","paused","isVideoView","isMobile"]));y("vm-control",Et);$("vm-control",new Set(["keys","identifier","hidden","label","menu","expanded","pressed","isTouch"]));y("vm-control-group",fu);$("vm-control-group",new Set(["space"]));y("vm-control-spacer",pu);$("vm-control-spacer",new Set([]));y("vm-controls",mu);$("vm-controls",new Set(["hidden","fullWidth","fullHeight","direction","align","justify","pin","activeDuration","waitForPlaybackStart","hideWhenPaused","hideOnMouseLeave","isAudioView","isSettingsActive","playbackReady","isControlsActive","paused","playbackStarted"]));y("vm-current-time",ps);y("vm-time",kn);$("vm-current-time",new Set(["currentTime","i18n","alwaysShowHours"]));y("vm-dailymotion",lk);y("vm-embed",ms);$("vm-dailymotion",new Set(["videoId","shouldAutoplayQueue","showUpNextQueue","showShareButtons","color","syndication","showDailymotionLogo","showVideoInfo","language","autoplay","controls","poster","logger","loop","muted","playsinline"]));y("vm-dash",ak);y("vm-file",Tr);y("vm-video",Au);$("vm-dash",new Set(["src","version","libSrc","config","autoplay","crossOrigin","preload","poster","controlsList","autoPiP","disablePiP","disableRemotePlayback","mediaTitle","enableTextTracksByDefault","shouldRenderNativeTextTracks","isTextTrackVisible","currentTextTrack"]));y("vm-dbl-click-fullscreen",Cp);$("vm-dbl-click-fullscreen",new Set(["useOnMobile","isFullscreenActive","isVideoView","playbackReady","isMobile"]));y("vm-default-controls",Tp);y("vm-caption-control",hu);y("vm-control",Et);y("vm-icon",De);y("vm-tooltip",gt);y("vm-control-group",fu);y("vm-control-spacer",pu);y("vm-controls",mu);y("vm-current-time",ps);y("vm-time",kn);y("vm-end-time",vs);y("vm-fullscreen-control",vu);y("vm-live-indicator",gu);y("vm-mute-control",gs);y("vm-pip-control",wu);y("vm-playback-control",bu);y("vm-scrim",xu);y("vm-scrubber-control",Cu);y("vm-slider",Pr);y("vm-settings-control",Su);y("vm-time-progress",Pu);y("vm-volume-control",Lu);$("vm-default-controls",new Set(["activeDuration","waitForPlaybackStart","hideWhenPaused","hideOnMouseLeave","theme","isMobile","isLive","isAudioView","isVideoView"]));y("vm-default-settings",Sp);y("vm-icon",De);y("vm-menu",Sr);y("vm-menu-item",Er);y("vm-menu-radio",yu);y("vm-menu-radio-group",ku);y("vm-settings",Tu);y("vm-submenu",Eu);$("vm-default-settings",new Set(["pin","i18n","playbackReady","playbackRate","playbackRates","isVideoView","playbackQuality","playbackQualities","textTracks","currentTextTrack","audioTracks","currentAudioTrack","isTextTrackVisible"]));y("vm-default-ui",uk);y("vm-caption-control",hu);y("vm-control",Et);y("vm-icon",De);y("vm-tooltip",gt);y("vm-captions",bp);y("vm-click-to-play",xp);y("vm-control-group",fu);y("vm-control-spacer",pu);y("vm-controls",mu);y("vm-current-time",ps);y("vm-time",kn);y("vm-dbl-click-fullscreen",Cp);y("vm-default-controls",Tp);y("vm-end-time",vs);y("vm-fullscreen-control",vu);y("vm-live-indicator",gu);y("vm-mute-control",gs);y("vm-pip-control",wu);y("vm-playback-control",bu);y("vm-scrim",xu);y("vm-scrubber-control",Cu);y("vm-slider",Pr);y("vm-settings-control",Su);y("vm-time-progress",Pu);y("vm-volume-control",Lu);y("vm-default-settings",Sp);y("vm-menu",Sr);y("vm-menu-item",Er);y("vm-menu-radio",yu);y("vm-menu-radio-group",ku);y("vm-settings",Tu);y("vm-submenu",Eu);y("vm-loading-screen",Ep);y("vm-poster",Pp);y("vm-spinner",Ap);y("vm-ui",Lp);var bk=$("vm-default-ui",new Set(["noClickToPlay","noDblClickFullscreen","noCaptions","noPoster","noSpinner","noControls","noSettings","noLoadingScreen"]));y("vm-embed",ms);$("vm-embed",new Set(["embedSrc","mediaTitle","params","origin","preconnections","decoder"]));y("vm-end-time",vs);y("vm-time",kn);$("vm-end-time",new Set(["duration","i18n","alwaysShowHours"]));y("vm-file",Tr);$("vm-file",new Set(["willAttach","crossOrigin","preload","poster","mediaTitle","controlsList","autoPiP","disablePiP","disableRemotePlayback","viewType","playbackRates","language","autoplay","controls","logger","loop","muted","playsinline","noConnect","paused","currentTime","volume","playbackReady","playbackStarted","currentTextTrack","hasCustomTextManager","isTextTrackVisible","shouldRenderNativeTextTracks"]));y("vm-fullscreen-control",vu);y("vm-control",Et);y("vm-icon",De);y("vm-tooltip",gt);$("vm-fullscreen-control",new Set(["enterIcon","exitIcon","icons","tooltipPosition","tooltipDirection","hideTooltip","keys","isFullscreenActive","i18n","playbackReady"]));y("vm-hls",ck);y("vm-file",Tr);y("vm-video",Au);$("vm-hls",new Set(["version","libSrc","config","crossOrigin","preload","poster","controlsList","autoPiP","disablePiP","disableRemotePlayback","playbackReady","mediaTitle"]));y("vm-icon",De);$("vm-icon",new Set(["name","src","label","library","icons"]));y("vm-icon-library",dk);$("vm-icon-library",new Set(["name","resolver","icons"]));y("vm-live-indicator",gu);$("vm-live-indicator",new Set(["isLive","i18n"]));y("vm-loading-screen",Ep);$("vm-loading-screen",new Set(["playbackReady","hideDots"]));y("vm-menu",Sr);$("vm-menu",new Set(["active","identifier","controller","slideInDirection"]));y("vm-menu-item",Er);y("vm-icon",De);$("vm-menu-item",new Set(["identifier","hidden","label","menu","expanded","checked","hint","badge","checkIcon","icons","isTouch"]));y("vm-menu-radio",yu);y("vm-icon",De);y("vm-menu-item",Er);$("vm-menu-radio",new Set(["label","value","checked","badge","checkIcon","icons"]));y("vm-menu-radio-group",ku);$("vm-menu-radio-group",new Set(["value"]));y("vm-mute-control",gs);y("vm-control",Et);y("vm-icon",De);y("vm-tooltip",gt);$("vm-mute-control",new Set(["lowVolumeIcon","highVolumeIcon","mutedIcon","icons","tooltipPosition","tooltipDirection","hideTooltip","keys","volume","muted","i18n"]));y("vm-pip-control",wu);y("vm-control",Et);y("vm-icon",De);y("vm-tooltip",gt);$("vm-pip-control",new Set(["enterIcon","exitIcon","icons","tooltipPosition","tooltipDirection","hideTooltip","keys","isPiPActive","i18n","playbackReady"]));y("vm-playback-control",bu);y("vm-control",Et);y("vm-icon",De);y("vm-tooltip",gt);$("vm-playback-control",new Set(["playIcon","pauseIcon","icons","tooltipPosition","tooltipDirection","hideTooltip","keys","paused","i18n"]));y("vm-player",hk);var xk=$("vm-player",new Set(["logger","theme","icons","paused","playing","duration","mediaTitle","currentProvider","currentSrc","currentPoster","currentTime","autoplay","ready","playbackReady","loop","muted","buffered","playbackRate","playbackRates","playbackQuality","playbackQualities","seeking","debug","playbackStarted","playbackEnded","buffering","controls","isControlsActive","isSettingsActive","volume","isFullscreenActive","aspectRatio","viewType","isAudioView","isVideoView","mediaType","isAudio","isVideo","isLive","isMobile","isTouch","isPiPActive","textTracks","currentTextTrack","isTextTrackVisible","shouldRenderNativeTextTracks","audioTracks","currentAudioTrack","autopause","playsinline","language","translations","languages","i18n"]));y("vm-poster",Pp);$("vm-poster",new Set(["fit","isVideoView","currentPoster","mediaTitle","playbackStarted","currentTime"]));y("vm-scrim",xu);$("vm-scrim",new Set(["gradient","isVideoView","isControlsActive"]));y("vm-scrubber-control",Cu);y("vm-slider",Pr);y("vm-tooltip",gt);$("vm-scrubber-control",new Set(["alwaysShowHours","hideTooltip","currentTime","duration","noKeyboard","buffering","buffered","i18n"]));y("vm-settings",Tu);y("vm-menu",Sr);$("vm-settings",new Set(["pin","active","isMobile","isAudioView"]));y("vm-settings-control",Su);y("vm-control",Et);y("vm-icon",De);y("vm-tooltip",gt);$("vm-settings-control",new Set(["icon","icons","tooltipPosition","tooltipDirection","menu","expanded","i18n"]));y("vm-skeleton",fk);$("vm-skeleton",new Set(["effect","ready"]));y("vm-slider",Pr);$("vm-slider",new Set(["step","min","max","value","valueText","label"]));y("vm-spinner",Ap);$("vm-spinner",new Set(["isVideoView","currentProvider","showWhenMediaLoading","playbackReady","buffering"]));y("vm-submenu",Eu);y("vm-icon",De);y("vm-menu",Sr);y("vm-menu-item",Er);$("vm-submenu",new Set(["label","hint","slideInDirection","active"]));y("vm-time",kn);$("vm-time",new Set(["label","seconds","alwaysShowHours"]));y("vm-time-progress",Pu);y("vm-current-time",ps);y("vm-time",kn);y("vm-end-time",vs);$("vm-time-progress",new Set(["separator","alwaysShowHours"]));y("vm-tooltip",gt);$("vm-tooltip",new Set(["hidden","active","position","direction","isTouch","isMobile"]));y("vm-ui",Lp);$("vm-ui",new Set(["isVideoView","playsinline","isFullscreenActive"]));y("vm-video",Au);y("vm-file",Tr);$("vm-video",new Set(["willAttach","hasCustomTextManager","crossOrigin","preload","poster","controlsList","autoPiP","disablePiP","disableRemotePlayback","mediaTitle"]));y("vm-vimeo",pk);y("vm-embed",ms);$("vm-vimeo",new Set(["videoId","byline","color","portrait","noAutoAspectRatio","poster","cookies","language","aspectRatio","autoplay","controls","logger","loop","muted","playsinline"]));y("vm-volume-control",Lu);y("vm-control",Et);y("vm-icon",De);y("vm-mute-control",gs);y("vm-tooltip",gt);y("vm-slider",Pr);$("vm-volume-control",new Set(["lowVolumeIcon","highVolumeIcon","mutedIcon","icons","tooltipPosition","tooltipDirection","hideTooltip","muteKeys","noKeyboard","muted","volume","isMobile","i18n"]));y("vm-youtube",mk);y("vm-embed",ms);var Ck=$("vm-youtube",new Set(["cookies","videoId","showFullscreenControl","poster","language","autoplay","controls","logger","loop","muted","playsinline"]));const Tk=bk,Sk=xk,Ek=Ck;globalThis&&globalThis.__awaiter;function al({title:e,subtitle:t,link:i}){return M("div",{className:"flex items-center justify-between mt-6 border rounded border-blue-900 p-4 gap-4",children:[M("div",{className:"",children:[g("h2",{className:"text-base text-bold text-gray-900 font-bold",children:e}),g("span",{className:"text-xs text-gray-700",children:t})]}),M("a",{href:i,className:"transition-transform hover:translate-x-1",children:[g(og,{size:40,color:"RGB(30,58,138)"})," "]})]})}var Pk="./assets/classroom-icon.b5798678.png",Ak="./assets/fabrica-de-provas-logo.17d373cf.png",Lk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVIAAAC2CAYAAACLdwXPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAD25JREFUeNrsnU9u48YSh2lj9tENojlB5BOMfALb2yAPlhZ5W9snkH0C2+ssLANB3tKaE1hzAisnGOUGzgn0WJ5iwpH1j+xi/6G+DyBmYIhks6vr19XsZvXBYrHIAACgPodUAQAAQgoAgJACACCkAAAIKQAAIKQAAAgpAABCCgCAkAIAAEIKAICQAgAgpAAACCkAACCkAAAIKQAAQgoAgJACAABCCgCAkAIAIKQAAAgpAAAgpAAACCkAAEIKAICQAgAAQgoAgJACACCkAAAIKQAAIKQAAA3wYfkPBwcH1MqO/PrLH4P8n5P86OVHV/88zY9Zftz/9vvPc2oJoJZP9fOjU/Kpz/kxzn3qNQZfXiwW3+vmuz8gpLtUulT2g1b6Jm5yA1xTYwBbfaqvPtXd8DMR0avcp8ahfRkhtan451JvuQ3pRYfUHMDGaPChwikmPuXiywipW8VLhX+tUPFEpgDbxeylxqlnuU9NQvnysm4y2VSN2xoVL4xyw3WpPoCVPlWHBxXDKHwZIa3Wgw0cLnFBLQK8i0b7NU8XfzwN5MsDhLQ+fcfze1QhgKlPnQS67yeENJwQ9qlCgHdRZYjzzX0ZIQUAcAQhBQBASAEAEFIAAIQUAAAhBQAAhBQAACEFAEBIAQAQUgAAQEgBABBSAACEFAAAIQUAAIQUAAAhBQBASAEAEFIAAEBIAQAQUgCAJPgQ6sa6JWqxCVVXD2GuhzD77fefXzHTP1vXnmud9fND6mWmx31eT/MIy1xse3tSsvFU7fuYl3maSN339b/lNvv2HLHUu+61XvhQL/t3Y7h/6jiV+kZItzdGOT4tGXrbeYVgfJFGsW+NQcXoIXu/h3dH61OOy/x3d3ndXEVU7uv8n4sVdi5EaZD/Rmw5jKkTKO21XrTT7pqfjvT38gw3PtultolyGfsbfj4qnVcEKoU/TWLsgBHS1Y3yQkWg7tapZcEYqbBONAqb7YGIPme7bR97qZ3VcegoPi/Hg0ai25DyvuS/Pw5pS43mBhrxdyue/tY2fXRk+T2K6P7U4TJF5CrXuM2vKUJ6j6hGKKRq8IvMff/odcI60IimGNaOW2qf54p12NMIJFhkqpHooKI9n/Lzjnx3ANrxXDgKU7kj6+TPMGygM71cE91bIKJ6q6I61ugaQa3IoXXDzI+vOhTteSi/3ONB7ll6j9WWaHRQsw4vQ9WFRnajms586bOc+fGsHdWp4aUHlnWvndJXrdOOh6qRNie+9KC2BJ9CKr1mfjxpwwxhALnns5RBe/A2MHI49zxQmS8CnVtHnJrqbG4NAxJfArpKUF+0rsCHkOaVfaoN8zSC5znVHvU0ZaMszcDWrYcQuIhTp8lIWt7X58eLYwe10yhJ5wZchD5UQPKdPbJvcxIvRKcNC6ka/SlQr7mpATwl3pt2DeogBL3A52/q7J8zP6+baj2HjuqePQh9nWd5adurs2iEVGdmRxE/20jLCOlg3gHou2bfnX23Yhl7KvT9iO3yrHUJVkJaYXlLaAaIqVdcZ93nDYho1PYviWgvAfs+IKZGQpqQiKYspq5rKueByj0N/NyxiOhsxzJ2VURTmiBFTF2FNEERTVJMdT3lxOESj4GK/tlF/K0W5UcQiU53KGMni29+oYqYJj2hG0xItXGm3BMNEutJ7x2G13eBOoCxQzRs8hGBDpVvA9ptvOOHBb7WWjcppimX37+QaoW14V1jMsbXb7frCOIw8CeiZzXFZ+J64wiiPKn3mx3KKR8fpB7RdVqiCV4j0jZVWEpD/KuKYjq0ECTHMs9UTHcV87HhZ5WyiqQbUETPtn1eGUHEbEmPRfs7CqlWVJtC+KSMr2J6tmXILNHrUSw5B1TMj0QkN/xsrsJvIqK6zvEy0CPLsxzvmAHqtmUaMmKIvyVpiQ6VLlr43BearSeJXKcqTJNSirdOyYGnMSaZ0DIN8zLfaJnLkeKkgWxPIdY0i3A+7tqB6Tv6fgv9STqHY4R0cwU19b5JHOlztpQgt/R5pDS4k6y5DFLybMOUjKXiM0uszPMtkalFNNqkQEn5pSP7krmvLGhS7IsyvrWRIkjQzlf8SXKXnjb06kNyA/T3OXH0hy3R6KCBe4pTrU3VpX+fq8BelzIKWZdFZvGvyMDfjhFGQ9GmWcJmFXtrEZO2K6s71o6uSp2vCO2VLlu6aKDjGWXu64hbGZFav28SYw6r9uilIaI0GOslI/KM1+hQuui7Ucs28Zo1M2lnLfaTrMYKjdJrosvMNruURKW9tidbX8emySbLVGwShTplQddzj42HiecZpI6lDaWNHVmLqA6vLcVeBPTMZTSVn3un/mQpfBf72ggP1xje8l3K2/IWiyG0XENnea3EtMsXGklHo5avn2ba2c8jF/uh1eqMUnBiJaZ760vrItJPRtefWm+9oA1Arjk1utynDFKlbzicb3KvKyuBubJe4qbPPMzcE84InX0NTD40aPi3BcoNll2uLQmlOwaN/Cp2Q5Wir5+y77euLnaDfI203KfZv7tdFu3CagfLE6u21FT9lWbNLYKSRj79lcg0L6eI6ZNRYDLJ9ozDFYbvGhm+0RlxvfaNwaW6sWcAL22Pcati2tdD/i8TcF918iAqAdXtMsQ5L0tlPtXnkDLfOm4NYxGRjhtetmMVNTe6VE/fC08jet7kh/YWL8XnPr6y0R56bnCpKL/M0KzpxfYYmwTnbV1sLBmuSsmUt3VQIrDPdcRUz7HoAG8aro6fjMR+7sF0N231pVSF1Gcat8cWG7/qcq9B6M9fa6SwKxIbh7CZj6/CUhD7IjCRiHRm0Ab2TkxXCemPFj2ox2ewuNePsRlG3y3WeVc9CvWqQqPEOt+S18l/YPGMPjp816HuzPMnwBZ10padfJ2E1LWBzn0avvQlVOiowZpRoHNdGDg40XkAm00T8NFpgvfrZ3vGYQPXnAd4jnmbjKIRpcvwKNQSFJdZ9K7vnSqb7vCNRgZ/ea6TvfwyKUYhDWGIthnf1QFDDa1chbDXsjbTpW3vr5C6OsPfAZ7j7wgafGxRbYrvqXyWmWQ1ezLCSzUi/SHAc/xAwwka3QEjIoS0BQ6MaISPgE3WHxPZ0bYR0nC9GY3tPf0Eo5hWCanRZJbXpXm+J/wQ0g0O5XMdo0ZCnTY5sNEniz95LvYJ7tQIvldgEJREIqTCILGG9leEtnGdDDn1POHkbIeWblXh+kxdz18KkaM3IiE9T8zwMS4xsSiTl0Qm+lloq0YFhlg814UnO/aJSOMS0q6PbER6D4vXCDFGQl8sHNBTVGrxJVVb10v+aTHC8/S6bJRBVEL6ZpQmjV/aFM85Yog0l6eFsNT99r2KHa6NOrMvLfUxq9ycDw3bUUYVfSQxPiEVJ35q8PpPmc0C7iiT0BruGzRQJ2lqKGgVxbQyGbBRLgih31RmL30He5tBlEIq9JrIkanXtHqX8xixfcyiGestINT5rDpK3xmOUrXjyLpT1JHdc7aHGZtSEtIiInqyeFeniY7Fea0a0zzyJA2WIv9k5YQaiVo632PL/czy+R6s5h+0M3xBRNMQUkGioReXxb567ktmu64uagfW4f3c2Alrb++hHdl1AxHMuM1Opp21ZYd9q8FJ18GfLolE7fjg8V5vQ4jcgCIO97uuGVQBvcjsFybLBNNdAjYSsbecTb3UUcK9PP8uE20qvKdajq7x841j3bjPGKlvy9dcYo++2nHnrUh0VNKEHRFSz7xlfs8NKoYXUZXZ2tdCWFU4xXE/6W+bMvh9Ig58px2JZeTQUWcaacf2RSOmt6TcpQ0Qe2qHfoORy80+OJrsYZbXq7WAle04VTtO1Z9m2gEWu5gW/kQE2hIhLUeol3qIgPq8dyrR6NtuqRp1NLXG77stTTzb4a7lk0zLyLbfTa1k6esxCmDHvedwT5/7JqXhZF7W66x9X/5YbaedUlRqteUxIKTBmek2zqkxbJkdhnvybnSVHUkqjZAmHwUlKUj6DvmuJXaYGH5wkJod5/sWiSOk7eMq5c298rLLO7bUv0mftzC6rmpH6RAnGSCkCSITG+MWPMdxwkNDKffZng7pVw3x2dgOIU2KsUZzbYhmXhMV07dys93vOztSHwhpMiI6bJkTzhITUynnFSK6UkyJTBFSRBQx3TkSHeNuG+2ImCKkUXLVVhFdcsKPETvhjOF8pWE+E1AIaTTM1XmtlwpNA5+/1gnz4yiLb2nUpGERfTVoJ1GJaX6cZe1YGjWN3Ibmvtw2IZXh41ETm6jpNV0M/7lhR7zSqCa0QBQz803PzrtGb1Fm5Nev2I4SHurPK/hfKBvOrH35sCFHCtEDSvTT9Ncy9w51MvbghNP8+KhRTQg7yH0/+lhsrwvbpw7OPs4iRaJ4HWWE+gpq7CByV7HbUDVibOnLTQjpvUZGUw8GLwT02NNWvnc1Iz6v3/ZrVONLUIsEMCKg157XiNYVmiTenatQfFRx8jHSGKsdh1m91QTjGp1oXRu6Lme8sfTlg8Vi8d0f/vuf/y1cC6iOXGxjUOQS7VoNHbS3vA+ROUizildJiBt85YDmoDzJbHO6TnSIMwm5wL6GPYapriDQ7WIKO1qlwxOxfMxW5IXVNHxSt70m23koG7r48rJuNiqkKwrdz77lRexVENa5Gvst12IMM8DaQTxkm3ddLNZOjiNyxM6SDfoVo3+p+z9Di+eatrVtH6+52qMVM+Mqqr2SLXcVg9mSP813uJf48/kan52qz08NbHi7pU2a27CuLwcT0g2Vt64BvMa+bEaTUJ8sOfBrDJFaRXHdKECp5AwtRWzdZXu0fR2rDzuu8FfztqE+de7bhlV9OSohBQBIkWXdPKRKAADcQEgBABBSAACEFAAAIQUAQEgBAAAhBQBASAEAEFIAAIQUAAAQUgAAhBQAACEFAEBIAQAAIQUAQEgBABBSAACEFAAAEFIAAIQUACBZIZ1TLQAACCkAQNJCOqVaAWDfhfTR4Xqvv/3+M0IKAPstpCqEdcXwhioFACLSbwwluqw6pM9F+I4qBQCE9FtUOs//Oa4gphLBnlGdALCPHCwWi+//cHDwz/9//eWPTv7PbX4M1pwvgnuTC++YqgSAfeGdbm4S0iVB7edHT/8kkeqMiSUAQEhXCCkAAFSDT0QBABBSAACEFAAAIQUAQEgBAAAhBQBASAEAEFIAAIQUAAAQUgAAhBQAACEFAEBIAQAAIQUAQEgBABBSAACEFAAAEFIAAIQUAAAhBQBASAEAACEFAEBIAQAQUgAAhBQAABBSAACEFAAAIQUAQEgBAGAl/xdgAB8HGiOiCzRZAAAAAElFTkSuQmCC";function Rk(){return g("div",{className:"flex-1 mt-4 flex flex-col",children:M("div",{className:"flex justify-between flex-wrap gap-4",children:[M("div",{className:"bg-transparent flex flex-col flex-1 gap-7 items-start",children:[g("h2",{className:"text-3xl text-blue-900",children:"Em Destaque"}),g("div",{className:"h-full w-full aspect-video",children:M(Sk,{children:[g(Ek,{videoId:"KEC7eOoNAp0"}),g(Tk,{})]})})]}),M("div",{className:"flex flex-col min-w-[40%] 2xl:w-full",children:[g("h2",{className:"text-3xl text-blue-900 self-start",children:"Interesses"}),M("div",{className:"flex-1 w-full flex flex-col justify-between",children:[g(al,{title:"Vagas para Educa\xE7\xE3o Infantil a Ensino M\xE9dio para 2022",subtitle:"Col\xE9gio Sinodal Progresso - Novos Sonhos, Novas Realiza\xE7\xF5es",link:"#"}),g(al,{title:"Conv\xEAnios para desconto",subtitle:"Conv\xEAnio de coopera\xE7\xE3o educacional para descontos em mensalidades escolares.",link:"#"}),g(al,{title:"Preparando-se para o Mercado de Trabalho?",subtitle:"Cursos t\xE9cnicos/especializa\xE7\xF5es do CSP em 2022!",link:"#"}),M("footer",{className:"flex flex-col items-center",children:[g("h2",{className:"text-2xl text-blue-900",children:"Portais Parceiros"}),M("div",{className:"flex flex-wrap gap-3 justify-between items-center w-full",children:[g("div",{className:"w-28 h-28",children:g("img",{src:Pk,alt:""})}),g("div",{className:"max-w-[120px]",children:g("img",{className:"w-full",src:Ak,alt:""})}),g("div",{className:"max-w-[120px]",children:g("img",{src:Lk,alt:""})})]})]})]})]})]})})}function Mk(){return g("div",{className:"App",children:M(kg,{children:[g(yg,{}),g(Rk,{}),g(pg,{})]})})}ul.createRoot(document.getElementById("root")).render(g(Gp.StrictMode,{children:g(Mk,{})}));