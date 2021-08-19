/**
 * mux-embed
 * @version 4.1.1
 * @copyright 2021 Mux, Inc
 */
(function () {
  var define = false;
  !(function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("mux", [], t)
      : "object" == typeof exports
      ? (exports.mux = t())
      : (e.mux = t());
  })("undefined" != typeof self ? self : this, function () {
    return (function (e) {
      function t(n) {
        if (r[n]) return r[n].exports;
        var a = (r[n] = { i: n, l: !1, exports: {} });
        return e[n].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
      }
      var r = {};
      return (
        (t.m = e),
        (t.c = r),
        (t.d = function (e, r, n) {
          t.o(e, r) ||
            Object.defineProperty(e, r, {
              configurable: !1,
              enumerable: !0,
              get: n,
            });
        }),
        (t.n = function (e) {
          var r =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return t.d(r, "a", r), r;
        }),
        (t.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (t.p = ""),
        t((t.s = 18))
      );
    })([
      function (e, t, r) {
        (function (t) {
          var r;
          (r =
            "undefined" != typeof window
              ? window
              : void 0 !== t
              ? t
              : "undefined" != typeof self
              ? self
              : {}),
            (e.exports = r);
        }.call(t, r(6)));
      },
      function (e, t) {
        function r(e, t, r) {
          switch (r.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, r[0]);
            case 2:
              return e.call(t, r[0], r[1]);
            case 3:
              return e.call(t, r[0], r[1], r[2]);
          }
          return e.apply(t, r);
        }
        function n(e, t) {
          for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
          return n;
        }
        function a(e, t) {
          var r = q(e) || p(e) ? n(e.length, String) : [],
            a = r.length,
            i = !!a;
          for (var o in e)
            (!t && !A.call(e, o)) ||
              (i && ("length" == o || l(o, a))) ||
              r.push(o);
          return r;
        }
        function i(e, t, r) {
          var n = e[t];
          (A.call(e, t) && f(n, r) && (void 0 !== r || t in e)) || (e[t] = r);
        }
        function o(e) {
          if (!c(e)) return j(e);
          var t = [];
          for (var r in Object(e))
            A.call(e, r) && "constructor" != r && t.push(r);
          return t;
        }
        function s(e, t) {
          return (
            (t = D(void 0 === t ? e.length - 1 : t, 0)),
            function () {
              for (
                var n = arguments, a = -1, i = D(n.length - t, 0), o = Array(i);
                ++a < i;

              )
                o[a] = n[t + a];
              a = -1;
              for (var s = Array(t + 1); ++a < t; ) s[a] = n[a];
              return (s[t] = o), r(e, this, s);
            }
          );
        }
        function u(e, t, r, n) {
          r || (r = {});
          for (var a = -1, o = t.length; ++a < o; ) {
            var s = t[a],
              u = n ? n(r[s], e[s], s, r, e) : void 0;
            i(r, s, void 0 === u ? e[s] : u);
          }
          return r;
        }
        function l(e, t) {
          return (
            !!(t = null == t ? w : t) &&
            ("number" == typeof e || k.test(e)) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          );
        }
        function d(e, t, r) {
          if (!m(r)) return !1;
          var n = typeof t;
          return (
            !!("number" == n
              ? h(r) && l(t, r.length)
              : "string" == n && t in r) && f(r[t], e)
          );
        }
        function c(e) {
          var t = e && e.constructor;
          return e === (("function" == typeof t && t.prototype) || P);
        }
        function f(e, t) {
          return e === t || (e !== e && t !== t);
        }
        function p(e) {
          return (
            y(e) &&
            A.call(e, "callee") &&
            (!O.call(e, "callee") || T.call(e) == x)
          );
        }
        function h(e) {
          return null != e && v(e.length) && !_(e);
        }
        function y(e) {
          return b(e) && h(e);
        }
        function _(e) {
          var t = m(e) ? T.call(e) : "";
          return t == S || t == E;
        }
        function v(e) {
          return "number" == typeof e && e > -1 && e % 1 == 0 && e <= w;
        }
        function m(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function b(e) {
          return !!e && "object" == typeof e;
        }
        function g(e) {
          return h(e) ? a(e) : o(e);
        }
        var w = 9007199254740991,
          x = "[object Arguments]",
          S = "[object Function]",
          E = "[object GeneratorFunction]",
          k = /^(?:0|[1-9]\d*)$/,
          P = Object.prototype,
          A = P.hasOwnProperty,
          T = P.toString,
          O = P.propertyIsEnumerable,
          j = (function (e, t) {
            return function (r) {
              return e(t(r));
            };
          })(Object.keys, Object),
          D = Math.max,
          M = !O.call({ valueOf: 1 }, "valueOf"),
          q = Array.isArray,
          R = (function (e) {
            return s(function (t, r) {
              var n = -1,
                a = r.length,
                i = a > 1 ? r[a - 1] : void 0,
                o = a > 2 ? r[2] : void 0;
              for (
                i = e.length > 3 && "function" == typeof i ? (a--, i) : void 0,
                  o && d(r[0], r[1], o) && ((i = a < 3 ? void 0 : i), (a = 1)),
                  t = Object(t);
                ++n < a;

              ) {
                var s = r[n];
                s && e(t, s, n, i);
              }
              return t;
            });
          })(function (e, t) {
            if (M || c(t) || h(t)) return void u(t, g(t), e);
            for (var r in t) A.call(t, r) && i(e, r, t[r]);
          });
        e.exports = R;
      },
      function (e, t, r) {
        "use strict";
        function n(e, t, r) {
          (r = void 0 === r ? 1 : r), (e[t] = e[t] || 0), (e[t] += r);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(0),
          a = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n),
          i = {};
        (i.now = function () {
          var e = a.default.performance,
            t = e && e.timing;
          return t &&
            "number" == typeof t.navigationStart &&
            "function" == typeof e.now
            ? t.navigationStart + e.now()
            : Date.now();
        }),
          (t.default = i);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(20),
          a = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n),
          i = a.default.methodFactory;
        (a.default.methodFactory = function (e, t, r) {
          var n = i(e, t, r);
          return function () {
            for (var e = ["[mux]"], t = 0; t < arguments.length; t++)
              e.push(arguments[t]);
            n.apply(void 0, e);
          };
        }),
          a.default.setLevel(a.default.getLevel()),
          (t.default = a.default);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = function (e) {
            return i(e)[0];
          },
          a = function (e) {
            return i(e)[1];
          },
          i = function (e) {
            if ("string" != typeof e || "" === e) return ["localhost"];
            var t =
                /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
              r = e.match(t) || [],
              n = r[4],
              a = void 0;
            return n && (a = (n.match(/[^\.]+\.[^\.]+$/) || [])[0]), [n, a];
          };
        (t.extractHostnameAndDomain = i),
          (t.extractHostname = n),
          (t.extractDomain = a);
      },
      function (e, t) {
        var r;
        r = (function () {
          return this;
        })();
        try {
          r = r || Function("return this")() || (0, eval)("this");
        } catch (e) {
          "object" == typeof window && (r = window);
        }
        e.exports = r;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                var t = (16 * Math.random()) | 0;
                return ("x" === e ? t : (3 & t) | 8).toString(16);
              }
            );
          },
          a = function () {
            return (
              "000000" + ((Math.random() * Math.pow(36, 6)) << 0).toString(36)
            ).slice(-6);
          };
        (t.generateUUID = n), (t.generateShortID = a);
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          e = e || "";
          var t = {};
          return (
            e
              .trim()
              .split(/[\r\n]+/)
              .forEach(function (e) {
                if (e) {
                  var r = e.split(": "),
                    n = r.shift();
                  n && a.indexOf(n.toLowerCase()) >= 0 && (t[n] = r.join(": "));
                }
              }),
            t
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
        var a = ["x-cdn", "content-type"];
      },
      function (e, t, r) {
        "use strict";
        var n = SyntaxError,
          a = Function,
          i = TypeError,
          o = function (e) {
            try {
              return a('"use strict"; return (' + e + ").constructor;")();
            } catch (e) {}
          },
          s = Object.getOwnPropertyDescriptor;
        if (s)
          try {
            s({}, "");
          } catch (e) {
            s = null;
          }
        var u = function () {
            throw new i();
          },
          l = s
            ? (function () {
                try {
                  return arguments.callee, u;
                } catch (e) {
                  try {
                    return s(arguments, "callee").get;
                  } catch (e) {
                    return u;
                  }
                }
              })()
            : u,
          d = r(46)(),
          c =
            Object.getPrototypeOf ||
            function (e) {
              return e.__proto__;
            },
          f = {},
          p = "undefined" == typeof Uint8Array ? void 0 : c(Uint8Array),
          h = {
            "%AggregateError%":
              "undefined" == typeof AggregateError ? void 0 : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%":
              "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
            "%ArrayIteratorPrototype%": d ? c([][Symbol.iterator]()) : void 0,
            "%AsyncFromSyncIteratorPrototype%": void 0,
            "%AsyncFunction%": f,
            "%AsyncGenerator%": f,
            "%AsyncGeneratorFunction%": f,
            "%AsyncIteratorPrototype%": f,
            "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
            "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%":
              "undefined" == typeof Float32Array ? void 0 : Float32Array,
            "%Float64Array%":
              "undefined" == typeof Float64Array ? void 0 : Float64Array,
            "%FinalizationRegistry%":
              "undefined" == typeof FinalizationRegistry
                ? void 0
                : FinalizationRegistry,
            "%Function%": a,
            "%GeneratorFunction%": f,
            "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
            "%Int16Array%":
              "undefined" == typeof Int16Array ? void 0 : Int16Array,
            "%Int32Array%":
              "undefined" == typeof Int32Array ? void 0 : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": d ? c(c([][Symbol.iterator]())) : void 0,
            "%JSON%": "object" == typeof JSON ? JSON : void 0,
            "%Map%": "undefined" == typeof Map ? void 0 : Map,
            "%MapIteratorPrototype%":
              "undefined" != typeof Map && d
                ? c(new Map()[Symbol.iterator]())
                : void 0,
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
            "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
            "%RegExp%": RegExp,
            "%Set%": "undefined" == typeof Set ? void 0 : Set,
            "%SetIteratorPrototype%":
              "undefined" != typeof Set && d
                ? c(new Set()[Symbol.iterator]())
                : void 0,
            "%SharedArrayBuffer%":
              "undefined" == typeof SharedArrayBuffer
                ? void 0
                : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": d ? c(""[Symbol.iterator]()) : void 0,
            "%Symbol%": d ? Symbol : void 0,
            "%SyntaxError%": n,
            "%ThrowTypeError%": l,
            "%TypedArray%": p,
            "%TypeError%": i,
            "%Uint8Array%":
              "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
            "%Uint8ClampedArray%":
              "undefined" == typeof Uint8ClampedArray
                ? void 0
                : Uint8ClampedArray,
            "%Uint16Array%":
              "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
            "%Uint32Array%":
              "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
            "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef,
            "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
          },
          y = function e(t) {
            var r;
            if ("%AsyncFunction%" === t) r = o("async function () {}");
            else if ("%GeneratorFunction%" === t) r = o("function* () {}");
            else if ("%AsyncGeneratorFunction%" === t)
              r = o("async function* () {}");
            else if ("%AsyncGenerator%" === t) {
              var n = e("%AsyncGeneratorFunction%");
              n && (r = n.prototype);
            } else if ("%AsyncIteratorPrototype%" === t) {
              var a = e("%AsyncGenerator%");
              a && (r = c(a.prototype));
            }
            return (h[t] = r), r;
          },
          _ = {
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": [
              "AsyncGeneratorFunction",
              "prototype",
              "prototype",
            ],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": [
              "GeneratorFunction",
              "prototype",
              "prototype",
            ],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"],
          },
          v = r(10),
          m = r(49),
          b = v.call(Function.call, Array.prototype.concat),
          g = v.call(Function.apply, Array.prototype.splice),
          w = v.call(Function.call, String.prototype.replace),
          x = v.call(Function.call, String.prototype.slice),
          S =
            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          E = /\\(\\)?/g,
          k = function (e) {
            var t = x(e, 0, 1),
              r = x(e, -1);
            if ("%" === t && "%" !== r)
              throw new n("invalid intrinsic syntax, expected closing `%`");
            if ("%" === r && "%" !== t)
              throw new n("invalid intrinsic syntax, expected opening `%`");
            var a = [];
            return (
              w(e, S, function (e, t, r, n) {
                a[a.length] = r ? w(n, E, "$1") : t || e;
              }),
              a
            );
          },
          P = function (e, t) {
            var r,
              a = e;
            if ((m(_, a) && ((r = _[a]), (a = "%" + r[0] + "%")), m(h, a))) {
              var o = h[a];
              if ((o === f && (o = y(a)), void 0 === o && !t))
                throw new i(
                  "intrinsic " +
                    e +
                    " exists, but is not available. Please file an issue!"
                );
              return { alias: r, name: a, value: o };
            }
            throw new n("intrinsic " + e + " does not exist!");
          };
        e.exports = function (e, t) {
          if ("string" != typeof e || 0 === e.length)
            throw new i("intrinsic name must be a non-empty string");
          if (arguments.length > 1 && "boolean" != typeof t)
            throw new i('"allowMissing" argument must be a boolean');
          var r = k(e),
            a = r.length > 0 ? r[0] : "",
            o = P("%" + a + "%", t),
            u = o.name,
            l = o.value,
            d = !1,
            c = o.alias;
          c && ((a = c[0]), g(r, b([0, 1], c)));
          for (var f = 1, p = !0; f < r.length; f += 1) {
            var y = r[f],
              _ = x(y, 0, 1),
              v = x(y, -1);
            if (
              ('"' === _ ||
                "'" === _ ||
                "`" === _ ||
                '"' === v ||
                "'" === v ||
                "`" === v) &&
              _ !== v
            )
              throw new n(
                "property names with quotes must have matching quotes"
              );
            if (
              (("constructor" !== y && p) || (d = !0),
              (a += "." + y),
              (u = "%" + a + "%"),
              m(h, u))
            )
              l = h[u];
            else if (null != l) {
              if (!(y in l)) {
                if (!t)
                  throw new i(
                    "base intrinsic for " +
                      e +
                      " exists, but the property is not available."
                  );
                return;
              }
              if (s && f + 1 >= r.length) {
                var w = s(l, y);
                (p = !!w),
                  (l =
                    p && "get" in w && !("originalValue" in w.get)
                      ? w.get
                      : l[y]);
              } else (p = m(l, y)), (l = l[y]);
              p && !d && (h[u] = l);
            }
          }
          return l;
        };
      },
      function (e, t, r) {
        "use strict";
        var n = r(48);
        e.exports = Function.prototype.bind || n;
      },
      function (e, t, r) {
        "use strict";
        var n = String.prototype.replace,
          a = /%20/g,
          i = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
        e.exports = {
          default: i.RFC3986,
          formatters: {
            RFC1738: function (e) {
              return n.call(e, a, "+");
            },
            RFC3986: function (e) {
              return String(e);
            },
          },
          RFC1738: i.RFC1738,
          RFC3986: i.RFC3986,
        };
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.findMediaElement = t.getMuxPlayerId = void 0);
        var n = r(7),
          a = function (e) {
            return e && void 0 !== e.nodeName
              ? (e.muxId || (e.muxId = e.id || (0, n.generateShortID)()),
                e.muxId)
              : e;
          },
          i = function (e) {
            var t = void 0;
            return (
              e && void 0 !== e.nodeName
                ? ((t = e), (e = a(t)))
                : (t = document.querySelector(e)),
              [t, e, t && t.nodeName ? t.nodeName.toLowerCase() : ""]
            );
          };
        (t.getMuxPlayerId = a), (t.findMediaElement = i);
      },
      function (e, t, r) {
        "use strict";
        function n() {
          return (
            "1" ===
            (i.default.doNotTrack ||
              (i.default.navigator &&
                (i.default.navigator.doNotTrack ||
                  i.default.navigator.msDoNotTrack)))
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
        var a = r(0),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(a);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(0),
          a = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n),
          i = {};
        (i.exists = function () {
          var e = a.default.performance;
          return void 0 !== (e && e.timing);
        }),
          (i.domContentLoadedEventEnd = function () {
            var e = a.default.performance,
              t = e && e.timing;
            return t && t.domContentLoadedEventEnd;
          }),
          (i.navigationStart = function () {
            var e = a.default.performance,
              t = e && e.timing;
            return t && t.navigationStart;
          }),
          (t.default = i);
      },
      function (e, t, r) {
        "use strict";
        var n = r(44),
          a = r(54),
          i = r(11);
        e.exports = { formats: i, parse: a, stringify: n };
      },
      function (e, t, r) {
        "use strict";
        var n = r(11),
          a = Object.prototype.hasOwnProperty,
          i = Array.isArray,
          o = (function () {
            for (var e = [], t = 0; t < 256; ++t)
              e.push(
                "%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase()
              );
            return e;
          })(),
          s = function (e) {
            for (; e.length > 1; ) {
              var t = e.pop(),
                r = t.obj[t.prop];
              if (i(r)) {
                for (var n = [], a = 0; a < r.length; ++a)
                  void 0 !== r[a] && n.push(r[a]);
                t.obj[t.prop] = n;
              }
            }
          },
          u = function (e, t) {
            for (
              var r = t && t.plainObjects ? Object.create(null) : {}, n = 0;
              n < e.length;
              ++n
            )
              void 0 !== e[n] && (r[n] = e[n]);
            return r;
          },
          l = function e(t, r, n) {
            if (!r) return t;
            if ("object" != typeof r) {
              if (i(t)) t.push(r);
              else {
                if (!t || "object" != typeof t) return [t, r];
                ((n && (n.plainObjects || n.allowPrototypes)) ||
                  !a.call(Object.prototype, r)) &&
                  (t[r] = !0);
              }
              return t;
            }
            if (!t || "object" != typeof t) return [t].concat(r);
            var o = t;
            return (
              i(t) && !i(r) && (o = u(t, n)),
              i(t) && i(r)
                ? (r.forEach(function (r, i) {
                    if (a.call(t, i)) {
                      var o = t[i];
                      o && "object" == typeof o && r && "object" == typeof r
                        ? (t[i] = e(o, r, n))
                        : t.push(r);
                    } else t[i] = r;
                  }),
                  t)
                : Object.keys(r).reduce(function (t, i) {
                    var o = r[i];
                    return (
                      a.call(t, i) ? (t[i] = e(t[i], o, n)) : (t[i] = o), t
                    );
                  }, o)
            );
          },
          d = function (e, t) {
            return Object.keys(t).reduce(function (e, r) {
              return (e[r] = t[r]), e;
            }, e);
          },
          c = function (e, t, r) {
            var n = e.replace(/\+/g, " ");
            if ("iso-8859-1" === r)
              return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
              return decodeURIComponent(n);
            } catch (e) {
              return n;
            }
          },
          f = function (e, t, r, a, i) {
            if (0 === e.length) return e;
            var s = e;
            if (
              ("symbol" == typeof e
                ? (s = Symbol.prototype.toString.call(e))
                : "string" != typeof e && (s = String(e)),
              "iso-8859-1" === r)
            )
              return escape(s).replace(/%u[0-9a-f]{4}/gi, function (e) {
                return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
              });
            for (var u = "", l = 0; l < s.length; ++l) {
              var d = s.charCodeAt(l);
              45 === d ||
              46 === d ||
              95 === d ||
              126 === d ||
              (d >= 48 && d <= 57) ||
              (d >= 65 && d <= 90) ||
              (d >= 97 && d <= 122) ||
              (i === n.RFC1738 && (40 === d || 41 === d))
                ? (u += s.charAt(l))
                : d < 128
                ? (u += o[d])
                : d < 2048
                ? (u += o[192 | (d >> 6)] + o[128 | (63 & d)])
                : d < 55296 || d >= 57344
                ? (u +=
                    o[224 | (d >> 12)] +
                    o[128 | ((d >> 6) & 63)] +
                    o[128 | (63 & d)])
                : ((l += 1),
                  (d = 65536 + (((1023 & d) << 10) | (1023 & s.charCodeAt(l)))),
                  (u +=
                    o[240 | (d >> 18)] +
                    o[128 | ((d >> 12) & 63)] +
                    o[128 | ((d >> 6) & 63)] +
                    o[128 | (63 & d)]));
            }
            return u;
          },
          p = function (e) {
            for (
              var t = [{ obj: { o: e }, prop: "o" }], r = [], n = 0;
              n < t.length;
              ++n
            )
              for (
                var a = t[n], i = a.obj[a.prop], o = Object.keys(i), u = 0;
                u < o.length;
                ++u
              ) {
                var l = o[u],
                  d = i[l];
                "object" == typeof d &&
                  null !== d &&
                  -1 === r.indexOf(d) &&
                  (t.push({ obj: i, prop: l }), r.push(d));
              }
            return s(t), e;
          },
          h = function (e) {
            return "[object RegExp]" === Object.prototype.toString.call(e);
          },
          y = function (e) {
            return (
              !(!e || "object" != typeof e) &&
              !!(
                e.constructor &&
                e.constructor.isBuffer &&
                e.constructor.isBuffer(e)
              )
            );
          },
          _ = function (e, t) {
            return [].concat(e, t);
          },
          v = function (e, t) {
            if (i(e)) {
              for (var r = [], n = 0; n < e.length; n += 1) r.push(t(e[n]));
              return r;
            }
            return t(e);
          };
        e.exports = {
          arrayToObject: u,
          assign: d,
          combine: _,
          compact: p,
          decode: c,
          encode: f,
          isBuffer: y,
          isRegExp: h,
          maybeMap: v,
          merge: l,
        };
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a(e) {
          var t = {};
          for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
          return t;
        }
        function i(e) {
          var t = {},
            r = {};
          return (
            Object.keys(e).forEach(function (n) {
              var a = !1;
              if (e.hasOwnProperty(n) && void 0 !== e[n]) {
                var i = n.split("_"),
                  o = i[0],
                  u = c[o];
                u ||
                  (s.default.info(
                    "Data key word `" + i[0] + "` not expected in " + n
                  ),
                  (u = o + "_")),
                  i.splice(1).forEach(function (e) {
                    "url" === e && (a = !0),
                      p[e]
                        ? (u += p[e])
                        : Number(e) && Math.floor(Number(e)) === Number(e)
                        ? (u += e)
                        : (s.default.info(
                            "Data key word `" + e + "` not expected in " + n
                          ),
                          (u += "_" + e + "_"));
                  }),
                  a ? (r[u] = e[n]) : (t[u] = e[n]);
              }
            }),
            (0, l.default)(t, r)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
        var o = r(4),
          s = n(o),
          u = r(1),
          l = n(u),
          d = {
            a: "env",
            b: "beacon",
            c: "custom",
            d: "ad",
            e: "event",
            f: "experiment",
            m: "mux",
            n: "response",
            p: "player",
            q: "request",
            r: "retry",
            s: "session",
            t: "timestamp",
            u: "viewer",
            v: "video",
            w: "page",
            x: "view",
            y: "sub",
          },
          c = a(d),
          f = {
            ad: "ad",
            ag: "aggregate",
            ap: "api",
            al: "application",
            ar: "architecture",
            as: "asset",
            au: "autoplay",
            av: "average",
            bi: "bitrate",
            br: "break",
            bw: "browser",
            by: "bytes",
            ca: "cached",
            cb: "cancel",
            cd: "code",
            cg: "category",
            ch: "changed",
            cn: "config",
            co: "count",
            ce: "counter",
            cp: "complete",
            cr: "creative",
            ct: "content",
            cu: "current",
            cx: "connection",
            dg: "downscaling",
            dm: "domain",
            dn: "cdn",
            do: "downscale",
            du: "duration",
            dv: "device",
            ec: "encoding",
            en: "end",
            eg: "engine",
            em: "embed",
            er: "error",
            es: "errorcode",
            et: "errortext",
            ee: "event",
            ev: "events",
            ex: "expires",
            fi: "first",
            fm: "family",
            ft: "format",
            fq: "frequency",
            fr: "frame",
            fs: "fullscreen",
            he: "headers",
            ho: "host",
            hn: "hostname",
            ht: "height",
            id: "id",
            ii: "init",
            in: "instance",
            ip: "ip",
            is: "is",
            ke: "key",
            la: "language",
            lb: "labeled",
            le: "level",
            li: "live",
            ld: "loaded",
            lo: "load",
            ls: "lists",
            lt: "latency",
            ma: "max",
            md: "media",
            me: "message",
            mi: "mime",
            ml: "midroll",
            mm: "min",
            mn: "manufacturer",
            mo: "model",
            mx: "mux",
            nm: "name",
            no: "number",
            on: "on",
            os: "os",
            pa: "paused",
            pb: "playback",
            pd: "producer",
            pe: "percentage",
            pf: "played",
            pg: "program",
            ph: "playhead",
            pi: "plugin",
            pl: "preroll",
            pn: "playing",
            po: "poster",
            pr: "preload",
            ps: "position",
            py: "property",
            ra: "rate",
            rd: "requested",
            re: "rebuffer",
            rf: "rendition",
            rm: "remote",
            ro: "ratio",
            rp: "response",
            rq: "request",
            rs: "requests",
            sa: "sample",
            se: "session",
            sk: "seek",
            sm: "stream",
            so: "source",
            sq: "sequence",
            sr: "series",
            st: "start",
            su: "startup",
            sv: "server",
            sw: "software",
            ta: "tag",
            tc: "tech",
            te: "text",
            th: "throughput",
            ti: "time",
            tl: "total",
            to: "to",
            tt: "title",
            ty: "type",
            ug: "upscaling",
            up: "upscale",
            ur: "url",
            us: "user",
            va: "variant",
            vd: "viewed",
            vi: "video",
            ve: "version",
            vw: "view",
            vr: "viewer",
            wd: "width",
            wa: "watch",
            wt: "waiting",
          },
          p = a(f);
      },
      function (e, t, r) {
        "use strict";
        e.exports = r(19).default;
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = (function () {
            function e(e, t) {
              var r = [],
                n = !0,
                a = !1,
                i = void 0;
              try {
                for (
                  var o, s = e[Symbol.iterator]();
                  !(n = (o = s.next()).done) &&
                  (r.push(o.value), !t || r.length !== t);
                  n = !0
                );
              } catch (e) {
                (a = !0), (i = e);
              } finally {
                try {
                  !n && s.return && s.return();
                } finally {
                  if (a) throw i;
                }
              }
              return r;
            }
            return function (t, r) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, r);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          i = r(0),
          o = n(i),
          s = r(12),
          u = r(4),
          l = n(u),
          d = r(13),
          c = n(d),
          f = r(3),
          p = n(f),
          h = r(21),
          y = n(h),
          _ = r(61),
          v = n(_),
          m = r(62),
          b = n(m),
          g = {},
          w = function e(t) {
            var r = arguments;
            "string" == typeof t
              ? e.hasOwnProperty(t)
                ? o.default.setTimeout(function () {
                    (r = Array.prototype.splice.call(r, 1)),
                      e[t].apply(null, r);
                  }, 0)
                : l.default.warn("`" + t + "` is an unknown task")
              : "function" == typeof t
              ? o.default.setTimeout(function () {
                  t(e);
                }, 0)
              : l.default.warn("`" + t + "` is invalid.");
          };
        (w.loaded = p.default.now()),
          (w.NAME = "mux-embed"),
          (w.VERSION = "4.1.1"),
          (w.API_VERSION = "2.1"),
          (w.PLAYER_TRACKED = !1),
          (w.monitor = function (e, t) {
            return (0, v.default)(w, e, t);
          }),
          (w.destroyMonitor = function (e) {
            var t = (0, s.findMediaElement)(e),
              r = a(t, 1),
              n = r[0];
            n && n.mux && "function" == typeof n.mux.destroy
              ? n.mux.destroy()
              : l.default.error(
                  "A video element monitor for `" +
                    e +
                    "` has not been initialized via `mux.monitor`."
                );
          }),
          (w.addHLSJS = function (e, t) {
            var r = (0, s.getMuxPlayerId)(e);
            g[r]
              ? g[r].addHLSJS(t)
              : l.default.error(
                  "A monitor for `" + r + "` has not been initialized."
                );
          }),
          (w.addDashJS = function (e, t) {
            var r = (0, s.getMuxPlayerId)(e);
            g[r]
              ? g[r].addDashJS(t)
              : l.default.error(
                  "A monitor for `" + r + "` has not been initialized."
                );
          }),
          (w.removeHLSJS = function (e) {
            var t = (0, s.getMuxPlayerId)(e);
            g[t]
              ? g[t].removeHLSJS()
              : l.default.error(
                  "A monitor for `" + t + "` has not been initialized."
                );
          }),
          (w.removeDashJS = function (e) {
            var t = (0, s.getMuxPlayerId)(e);
            g[t]
              ? g[t].removeDashJS()
              : l.default.error(
                  "A monitor for `" + t + "` has not been initialized."
                );
          }),
          (w.init = function (e, t) {
            (0, c.default)() &&
              t &&
              t.respectDoNotTrack &&
              l.default.info(
                "The browser's Do Not Track flag is enabled - Mux beaconing is disabled."
              );
            var r = (0, s.getMuxPlayerId)(e);
            g[r] = new y.default(w, r, t);
          }),
          (w.emit = function (e, t, r) {
            var n = (0, s.getMuxPlayerId)(e);
            g[n]
              ? (g[n].emit(t, r), "destroy" === t && delete g[n])
              : l.default.error(
                  "A monitor for `" + n + "` has not been initialized."
                );
          }),
          void 0 !== o.default &&
            "function" == typeof o.default.addEventListener &&
            o.default.addEventListener(
              "unload",
              function () {
                w.WINDOW_UNLOADING = !0;
              },
              !1
            ),
          (w.checkDoNotTrack = c.default),
          (w.log = l.default),
          (w.utils = b.default),
          (t.default = w);
      },
      function (e, t, r) {
        var n, a;
        !(function (i, o) {
          "use strict";
          (n = o),
            void 0 !== (a = "function" == typeof n ? n.call(t, r, t, e) : n) &&
              (e.exports = a);
        })(0, function () {
          "use strict";
          function e(e, t) {
            var r = e[t];
            if ("function" == typeof r.bind) return r.bind(e);
            try {
              return Function.prototype.bind.call(r, e);
            } catch (t) {
              return function () {
                return Function.prototype.apply.apply(r, [e, arguments]);
              };
            }
          }
          function t() {
            console.log &&
              (console.log.apply
                ? console.log.apply(console, arguments)
                : Function.prototype.apply.apply(console.log, [
                    console,
                    arguments,
                  ])),
              console.trace && console.trace();
          }
          function r(r) {
            return (
              "debug" === r && (r = "log"),
              typeof console !== u &&
                ("trace" === r && l
                  ? t
                  : void 0 !== console[r]
                  ? e(console, r)
                  : void 0 !== console.log
                  ? e(console, "log")
                  : s)
            );
          }
          function n(e, t) {
            for (var r = 0; r < d.length; r++) {
              var n = d[r];
              this[n] = r < e ? s : this.methodFactory(n, e, t);
            }
            this.log = this.debug;
          }
          function a(e, t, r) {
            return function () {
              typeof console !== u &&
                (n.call(this, t, r), this[e].apply(this, arguments));
            };
          }
          function i(e, t, n) {
            return r(e) || a.apply(this, arguments);
          }
          function o(e, t, r) {
            function a(e) {
              var t = (d[e] || "silent").toUpperCase();
              if (typeof window !== u && c) {
                try {
                  return void (window.localStorage[c] = t);
                } catch (e) {}
                try {
                  window.document.cookie =
                    encodeURIComponent(c) + "=" + t + ";";
                } catch (e) {}
              }
            }
            function o() {
              var e;
              if (typeof window !== u && c) {
                try {
                  e = window.localStorage[c];
                } catch (e) {}
                if (typeof e === u)
                  try {
                    var t = window.document.cookie,
                      r = t.indexOf(encodeURIComponent(c) + "=");
                    -1 !== r && (e = /^([^;]+)/.exec(t.slice(r))[1]);
                  } catch (e) {}
                return void 0 === l.levels[e] && (e = void 0), e;
              }
            }
            var s,
              l = this,
              c = "loglevel";
            "string" == typeof e
              ? (c += ":" + e)
              : "symbol" == typeof e && (c = void 0),
              (l.name = e),
              (l.levels = {
                TRACE: 0,
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                SILENT: 5,
              }),
              (l.methodFactory = r || i),
              (l.getLevel = function () {
                return s;
              }),
              (l.setLevel = function (t, r) {
                if (
                  ("string" == typeof t &&
                    void 0 !== l.levels[t.toUpperCase()] &&
                    (t = l.levels[t.toUpperCase()]),
                  !("number" == typeof t && t >= 0 && t <= l.levels.SILENT))
                )
                  throw "log.setLevel() called with invalid level: " + t;
                if (
                  ((s = t),
                  !1 !== r && a(t),
                  n.call(l, t, e),
                  typeof console === u && t < l.levels.SILENT)
                )
                  return "No console available for logging";
              }),
              (l.setDefaultLevel = function (e) {
                o() || l.setLevel(e, !1);
              }),
              (l.enableAll = function (e) {
                l.setLevel(l.levels.TRACE, e);
              }),
              (l.disableAll = function (e) {
                l.setLevel(l.levels.SILENT, e);
              });
            var f = o();
            null == f && (f = null == t ? "WARN" : t), l.setLevel(f, !1);
          }
          var s = function () {},
            u = "undefined",
            l =
              typeof window !== u &&
              typeof window.navigator !== u &&
              /Trident\/|MSIE /.test(window.navigator.userAgent),
            d = ["trace", "debug", "info", "warn", "error"],
            c = new o(),
            f = {};
          c.getLogger = function (e) {
            if (("symbol" != typeof e && "string" != typeof e) || "" === e)
              throw new TypeError(
                "You must supply a name when creating a logger."
              );
            var t = f[e];
            return t || (t = f[e] = new o(e, c.getLevel(), c.methodFactory)), t;
          };
          var p = typeof window !== u ? window.log : void 0;
          return (
            (c.noConflict = function () {
              return (
                typeof window !== u && window.log === c && (window.log = p), c
              );
            }),
            (c.getLoggers = function () {
              return f;
            }),
            (c.default = c),
            c
          );
        });
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = (function () {
            function e(e, t) {
              var r = [],
                n = !0,
                a = !1,
                i = void 0;
              try {
                for (
                  var o, s = e[Symbol.iterator]();
                  !(n = (o = s.next()).done) &&
                  (r.push(o.value), !t || r.length !== t);
                  n = !0
                );
              } catch (e) {
                (a = !0), (i = e);
              } finally {
                try {
                  !n && s.return && s.return();
                } finally {
                  if (a) throw i;
                }
              }
              return r;
            }
            return function (t, r) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, r);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          i = r(4),
          o = n(i),
          s = r(1),
          u = n(s),
          l = r(7),
          d = r(5),
          c = r(0),
          f = n(c),
          p = r(14),
          h = n(p),
          y = r(2),
          _ = n(y),
          v = r(22),
          m = n(v),
          b = r(27),
          g = r(28),
          w = r(29),
          x = n(w),
          S = r(30),
          E = n(S),
          k = r(31),
          P = n(k),
          A = r(32),
          T = n(A),
          O = r(33),
          j = n(O),
          D = r(34),
          M = n(D),
          q = r(35),
          R = n(q),
          I = r(36),
          L = n(I),
          N = r(37),
          C = n(N),
          H = r(38),
          F = n(H),
          B = r(39),
          U = n(B),
          W = r(40),
          J = n(W),
          G = r(41),
          V = n(G),
          Q = r(42),
          z = n(Q),
          $ = r(60),
          Y = n($),
          K = [
            "viewstart",
            "ended",
            "loadstart",
            "pause",
            "play",
            "playing",
            "ratechange",
            "waiting",
            "adplay",
            "adpause",
            "adended",
            "aderror",
            "adplaying",
            "adrequest",
            "adresponse",
            "adbreakstart",
            "adbreakend",
            "adfirstquartile",
            "admidpoint",
            "adthirdquartile",
            "rebufferstart",
            "rebufferend",
            "seeked",
            "error",
            "hb",
            "requestcompleted",
            "requestfailed",
            "requestcanceled",
            "renditionchange",
          ],
          X = function (e, t, r) {
            var n = this;
            (this.DOM_CONTENT_LOADED_EVENT_END =
              h.default.domContentLoadedEventEnd()),
              (this.NAVIGATION_START = h.default.navigationStart());
            var a = {
              debug: !1,
              minimumRebufferDuration: 250,
              sustainedRebufferThreshold: 1e3,
              playbackHeartbeatTime: 25,
              beaconDomain: "litix.io",
              sampleRate: 1,
              disableCookies: !1,
              respectDoNotTrack: !1,
              disableRebufferTracking: !1,
              errorTranslator: function (e) {
                return e;
              },
            };
            (this.mux = e),
              (this.id = t),
              (r = (0, u.default)(a, r)),
              (r.data = r.data || {}),
              r.data.property_key &&
                ((r.data.env_key = r.data.property_key),
                delete r.data.property_key),
              o.default.setLevel(r.debug ? "debug" : "warn"),
              (this.getPlayheadTime = r.getPlayheadTime),
              (this.getStateData = r.getStateData || function () {}),
              (this.getAdData = r.getAdData || function () {}),
              (this.minimumRebufferDuration = r.minimumRebufferDuration),
              (this.sustainedRebufferThreshold = r.sustainedRebufferThreshold),
              (this.playbackHeartbeatTime = r.playbackHeartbeatTime),
              (this.disableRebufferTracking = r.disableRebufferTracking),
              this.disableRebufferTracking &&
                this.mux.log.warn(
                  "Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."
                ),
              (this.errorTranslator = r.errorTranslator),
              (this.playbackEventDispatcher = new z.default(
                e,
                r.data.env_key,
                r
              )),
              (this.data = {
                player_instance_id: (0, l.generateUUID)(),
                mux_sample_rate: r.sampleRate,
                beacon_domain: r.beaconDomain,
              }),
              (this.data.view_sequence_number = 1),
              (this.data.player_sequence_number = 1),
              (this.oldEmit = this.emit),
              (this.emit = function (e, t) {
                (t = (0, u.default)({ viewer_time: this.mux.utils.now() }, t)),
                  this.oldEmit(e, t);
              });
            var i = function () {
              void 0 === this.data.view_start &&
                ((this.data.view_start = this.mux.utils.now()),
                this.emit("viewstart"));
            }.bind(this);
            this.on("viewinit", function (e, t) {
              this._resetVideoData(),
                this._resetViewData(),
                this._resetErrorData(),
                this._updateStateData(),
                (0, u.default)(this.data, t),
                this._initializeViewData(),
                this.one("play", i),
                this.one("adbreakstart", i);
            });
            var s = function (e) {
              this.emit("viewend"),
                this.send("viewend"),
                this.emit("viewinit", e);
            }.bind(this);
            this.on("videochange", function (e, t) {
              s(t);
            }),
              this.on("programchange", function (e, t) {
                this.data.player_is_paused &&
                  this.mux.log.warn(
                    "The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."
                  ),
                  s((0, u.default)(t, { view_program_changed: !0 })),
                  i();
              }),
              this.on("destroy", this.destroy);
            var d = this.destroy.bind(this);
            void 0 !== f.default &&
              "function" == typeof f.default.addEventListener &&
              f.default.addEventListener("unload", d, !1),
              this.on("destroy", function () {
                void 0 !== f.default &&
                  "function" == typeof f.default.removeEventListener &&
                  f.default.removeEventListener("unload", d);
              }),
              this.on("playerready", function (e, t) {
                (0, u.default)(this.data, t);
              }),
              K.forEach(function (e) {
                n.on(e, function (t, r) {
                  0 !== e.indexOf("ad") && this._updateStateData(),
                    (0, u.default)(this.data, r),
                    this._sanitizeData();
                }),
                  n.on("after" + e, function () {
                    ("error" !== e || this.viewErrored) && this.send(e);
                  });
              }),
              this.on("viewend", function (e, t) {
                (0, u.default)(n.data, t);
              });
            var c = function (e) {
              var t = this.mux.utils.now();
              this.data.player_init_time &&
                (this.data.player_startup_time =
                  t - this.data.player_init_time),
                !this.mux.PLAYER_TRACKED &&
                  this.NAVIGATION_START &&
                  ((this.mux.PLAYER_TRACKED = !0),
                  (this.data.player_init_time ||
                    this.DOM_CONTENT_LOADED_EVENT_END) &&
                    (this.data.page_load_time =
                      Math.min(
                        this.data.player_init_time || 1 / 0,
                        this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0
                      ) - this.NAVIGATION_START)),
                this.send("playerready"),
                delete this.data.player_startup_time,
                delete this.data.page_load_time;
            };
            this.one("playerready", c),
              P.default.apply(this),
              V.default.apply(this),
              F.default.apply(this),
              M.default.apply(this),
              E.default.apply(this),
              C.default.apply(this),
              T.default.apply(this),
              j.default.apply(this),
              U.default.apply(this),
              R.default.apply(this),
              L.default.apply(this),
              J.default.apply(this),
              Y.default.apply(this),
              r.hlsjs && this.addHLSJS(r),
              r.dashjs && this.addDashJS(r),
              this.emit("viewinit", r.data);
          };
        (0, u.default)(X.prototype, x.default.prototype),
          (0, u.default)(X.prototype, M.default.prototype),
          (0, u.default)(X.prototype, F.default.prototype),
          (0, u.default)(X.prototype, E.default.prototype),
          (0, u.default)(X.prototype, T.default.prototype),
          (0, u.default)(X.prototype, j.default.prototype),
          (0, u.default)(X.prototype, U.default.prototype),
          (0, u.default)(X.prototype, R.default.prototype),
          (0, u.default)(X.prototype, L.default.prototype),
          (X.prototype.destroy = function () {
            this._destroyed ||
              ((this._destroyed = !0),
              void 0 !== this.data.view_start &&
                (this.emit("viewend"), this.send("viewend")),
              this.playbackEventDispatcher.destroy(),
              this.removeHLSJS(),
              this.removeDashJS(),
              f.default.clearTimeout(this._heartBeatTimeout));
          }),
          (X.prototype.send = function (e) {
            var t = (0, u.default)({}, this.data);
            if (
              (1 === t.player_error_code &&
                (delete t.player_error_code, delete t.player_error_message),
              t.player_source_duration === 1 / 0 ||
              t.video_source_duration === 1 / 0
                ? (t.video_source_is_live = !0)
                : (t.player_source_duration > 0 ||
                    t.video_source_duration > 0) &&
                  (t.video_source_is_live = !1),
              (t.video_source_url = t.video_source_url || t.player_source_url),
              t.video_source_url)
            ) {
              var r = (0, d.extractHostnameAndDomain)(t.video_source_url),
                n = a(r, 2),
                i = n[0],
                o = n[1];
              (t.video_source_domain = o), (t.video_source_hostname = i);
            }
            delete t.ad_request_id,
              this.playbackEventDispatcher.send(e, t),
              this.data.view_sequence_number++,
              this.data.player_sequence_number++,
              this._restartHeartBeat();
          }),
          (X.prototype._updateStateData = function () {
            (0, u.default)(this.data, this.getStateData()),
              this.getPlayheadTime &&
                (this.data.player_playhead_time = this.getPlayheadTime()),
              this._sanitizeData();
          }),
          (X.prototype._sanitizeData = function () {
            var e = this;
            [
              "player_width",
              "player_height",
              "video_source_width",
              "video_source_height",
              "player_playhead_time",
              "video_source_bitrate",
            ].forEach(function (t) {
              var r = parseInt(e.data[t], 10);
              e.data[t] = isNaN(r) ? void 0 : r;
            }),
              ["player_source_url", "video_source_url"].forEach(function (t) {
                if (e.data[t]) {
                  var r = e.data[t].toLowerCase();
                  (0 !== r.indexOf("data:") && 0 !== r.indexOf("blob:")) ||
                    (e.data[t] = "MSE style URL");
                }
              });
          }),
          (X.prototype._resetVideoData = function (e, t) {
            var r = this;
            Object.keys(this.data).forEach(function (e) {
              0 === e.indexOf("video_") && delete r.data[e];
            });
          }),
          (X.prototype._resetViewData = function () {
            var e = this;
            Object.keys(this.data).forEach(function (t) {
              0 === t.indexOf("view_") && delete e.data[t];
            }),
              (this.data.view_sequence_number = 1);
          }),
          (X.prototype._resetErrorData = function (e, t) {
            delete this.data.player_error_code,
              delete this.data.player_error_message;
          }),
          (X.prototype._initializeViewData = function () {
            var e = this,
              t = (this.data.view_id = (0, l.generateUUID)());
            this.data.video_id ||
              (this.data.video_id = (0, m.default)(
                this.data.player_source_url
              ));
            var r = function () {
              t === e.data.view_id &&
                (0, _.default)(e.data, "player_view_count", 1);
            };
            this.data.player_is_paused ? this.one("play", r) : r();
          }),
          (X.prototype._restartHeartBeat = function () {
            var e = this;
            f.default.clearTimeout(this._heartBeatTimeout),
              this.viewErrored ||
                (this._heartBeatTimeout = f.default.setTimeout(function () {
                  e.data.player_is_paused || e.emit("hb");
                }, 1e4));
          }),
          (X.prototype.addHLSJS = function (e) {
            return e.hlsjs
              ? this.hlsjs
                ? void this.mux.log.warn(
                    "An instance of HLS.js is already being monitored for this player."
                  )
                : ((this.hlsjs = e.hlsjs),
                  void (0, b.monitorHlsJs)(
                    this.mux,
                    this.id,
                    e.hlsjs,
                    {},
                    e.Hls || f.default.Hls
                  ))
              : void this.mux.log.warn(
                  "You must pass a valid hlsjs instance in order to track it."
                );
          }),
          (X.prototype.removeHLSJS = function () {
            this.hlsjs &&
              ((0, b.stopMonitoringHlsJs)(this.hlsjs), (this.hlsjs = void 0));
          }),
          (X.prototype.addDashJS = function (e) {
            return e.dashjs
              ? this.dashjs
                ? void this.mux.log.warn(
                    "An instance of Dash.js is already being monitored for this player."
                  )
                : ((this.dashjs = e.dashjs),
                  void (0, g.monitorDashJS)(this.mux, this.id, e.dashjs))
              : void this.mux.log.warn(
                  "You must pass a valid dashjs instance in order to track it."
                );
          }),
          (X.prototype.removeDashJS = function () {
            this.dashjs &&
              ((0, g.stopMonitoringDashJS)(this.dashjs),
              (this.dashjs = void 0));
          }),
          (t.default = X);
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a(e) {
          var t = o.default.createElement("a");
          t.href = e;
          var r = t.pathname.replace(/\.[^/.]+$/, "");
          return u.default.encode(t.host + r).split("=")[0];
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
        var i = r(23),
          o = n(i),
          s = r(25),
          u = n(s);
      },
      function (e, t, r) {
        (function (t) {
          var n,
            a = void 0 !== t ? t : "undefined" != typeof window ? window : {},
            i = r(24);
          "undefined" != typeof document
            ? (n = document)
            : (n = a["__GLOBAL_DOCUMENT_CACHE@4"]) ||
              (n = a["__GLOBAL_DOCUMENT_CACHE@4"] = i),
            (e.exports = n);
        }.call(t, r(6)));
      },
      function (e, t) {},
      function (e, t, r) {
        (function (e, n) {
          var a;
          !(function (i) {
            var o = "object" == typeof t && t,
              s =
                ("object" == typeof e && e && e.exports,
                "object" == typeof n && n);
            var u = function (e) {
              this.message = e;
            };
            (u.prototype = new Error()),
              (u.prototype.name = "InvalidCharacterError");
            var l = function (e) {
                throw new u(e);
              },
              d =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              c = /[\t\n\f\r ]/g,
              f = function (e) {
                e = String(e).replace(c, "");
                var t = e.length;
                t % 4 == 0 && ((e = e.replace(/==?$/, "")), (t = e.length)),
                  (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) &&
                    l(
                      "Invalid character: the string to be decoded is not correctly encoded."
                    );
                for (var r, n, a = 0, i = "", o = -1; ++o < t; )
                  (n = d.indexOf(e.charAt(o))),
                    (r = a % 4 ? 64 * r + n : n),
                    a++ % 4 &&
                      (i += String.fromCharCode(255 & (r >> ((-2 * a) & 6))));
                return i;
              },
              p = function (e) {
                (e = String(e)),
                  /[^\0-\xFF]/.test(e) &&
                    l(
                      "The string to be encoded contains characters outside of the Latin1 range."
                    );
                for (
                  var t,
                    r,
                    n,
                    a,
                    i = e.length % 3,
                    o = "",
                    s = -1,
                    u = e.length - i;
                  ++s < u;

                )
                  (t = e.charCodeAt(s) << 16),
                    (r = e.charCodeAt(++s) << 8),
                    (n = e.charCodeAt(++s)),
                    (a = t + r + n),
                    (o +=
                      d.charAt((a >> 18) & 63) +
                      d.charAt((a >> 12) & 63) +
                      d.charAt((a >> 6) & 63) +
                      d.charAt(63 & a));
                return (
                  2 == i
                    ? ((t = e.charCodeAt(s) << 8),
                      (r = e.charCodeAt(++s)),
                      (a = t + r),
                      (o +=
                        d.charAt(a >> 10) +
                        d.charAt((a >> 4) & 63) +
                        d.charAt((a << 2) & 63) +
                        "="))
                    : 1 == i &&
                      ((a = e.charCodeAt(s)),
                      (o += d.charAt(a >> 2) + d.charAt((a << 4) & 63) + "==")),
                  o
                );
              },
              h = { encode: p, decode: f, version: "0.1.0" };
            void 0 !==
              (a = function () {
                return h;
              }.call(t, r, t, e)) && (e.exports = a);
          })();
        }.call(t, r(26)(e), r(6)));
      },
      function (e, t) {
        e.exports = function (e) {
          return (
            e.webpackPolyfill ||
              ((e.deprecate = function () {}),
              (e.paths = []),
              e.children || (e.children = []),
              Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                  return e.l;
                },
              }),
              Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function () {
                  return e.i;
                },
              }),
              (e.webpackPolyfill = 1)),
            e
          );
        };
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.stopMonitoringHlsJs = t.monitorHlsJs = void 0);
        var a = r(8),
          i = n(a),
          o = r(14),
          s = n(o),
          u = r(5),
          l = function (e) {
            if (!e) return {};
            var t = s.default.navigationStart(),
              r = e.loading,
              n = r ? r.start : e.trequest,
              a = r ? r.first : e.tfirst,
              i = r ? r.end : e.tload;
            return {
              bytesLoaded: e.total,
              requestStart: Math.round(t + n),
              responseStart: Math.round(t + a),
              responseEnd: Math.round(t + i),
            };
          },
          d = function (e) {
            if (e && "function" == typeof e.getAllResponseHeaders)
              return (0, i.default)(e.getAllResponseHeaders());
          },
          c = function (e, t, r) {
            var n =
                (arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
                arguments[4]),
              a = e.log;
            if (!s.default.exists())
              return void a.warn(
                "performance timing not supported. Not tracking HLS.js."
              );
            var i = function (r, n) {
                return e.emit(t, r, n);
              },
              o = function (e, t) {
                var r = t.levels,
                  n = t.audioTracks,
                  a = t.url,
                  o = t.stats,
                  s = t.networkDetails,
                  c = {},
                  f = {};
                r.forEach(function (e, t) {
                  c[t] = {
                    width: e.width,
                    height: e.height,
                    bitrate: e.bitrate,
                    attrs: e.attrs,
                  };
                }),
                  n.forEach(function (e, t) {
                    f[t] = {
                      name: e.name,
                      language: e.lang,
                      bitrate: e.bitrate,
                    };
                  });
                var p = l(o),
                  h = p.bytesLoaded,
                  y = p.requestStart,
                  _ = p.responseStart,
                  v = p.responseEnd;
                i("requestcompleted", {
                  request_event_type: e,
                  request_bytes_loaded: h,
                  request_start: y,
                  request_response_start: _,
                  request_response_end: v,
                  request_type: "manifest",
                  request_hostname: (0, u.extractHostname)(a),
                  request_response_headers: d(s),
                  request_rendition_lists: { media: c, audio: f, video: {} },
                });
              };
            r.on(n.Events.MANIFEST_LOADED, o);
            var c = function (e, t) {
              var r = t.details,
                n = t.level,
                a = t.networkDetails,
                o = t.stats,
                s = l(o),
                c = s.bytesLoaded,
                f = s.requestStart,
                p = s.responseStart,
                h = s.responseEnd;
              i("requestcompleted", {
                request_event_type: e,
                request_bytes_loaded: c,
                request_start: f,
                request_response_start: p,
                request_response_end: h,
                request_current_level: n,
                request_type: "manifest",
                request_hostname: (0, u.extractHostname)(r.url),
                request_response_headers: d(a),
              });
            };
            r.on(n.Events.LEVEL_LOADED, c);
            var f = function (e, t) {
              var r = t.details,
                n = t.networkDetails,
                a = t.stats,
                o = l(a),
                s = o.bytesLoaded,
                c = o.requestStart,
                f = o.responseStart,
                p = o.responseEnd;
              i("requestcompleted", {
                request_event_type: e,
                request_bytes_loaded: s,
                request_start: c,
                request_response_start: f,
                request_response_end: p,
                request_type: "manifest",
                request_hostname: (0, u.extractHostname)(r.url),
                request_response_headers: d(n),
              });
            };
            r.on(n.Events.AUDIO_TRACK_LOADED, f);
            var p = function (e, t) {
              var n = t.stats,
                a = t.networkDetails,
                o = t.frag,
                s = l(n),
                c = s.bytesLoaded,
                f = s.requestStart,
                p = s.responseStart,
                h = s.responseEnd,
                y = {
                  request_event_type: e,
                  request_bytes_loaded: c,
                  request_start: f,
                  request_response_start: p,
                  request_response_end: h,
                  request_hostname: a
                    ? (0, u.extractHostname)(a.responseURL)
                    : void 0,
                  request_response_headers: d(a),
                  request_media_duration: o.duration,
                };
              "main" === o.type
                ? ((y.request_type = "media"),
                  (y.request_current_level = o.level),
                  (y.request_video_width = (r.levels[o.level] || {}).width),
                  (y.request_video_height = (r.levels[o.level] || {}).height))
                : (y.request_type = o.type),
                i("requestcompleted", y);
            };
            r.on(n.Events.FRAG_LOADED, p);
            var h = function (e, t) {
              var r = t.details,
                a = t.response,
                o = t.context,
                s = t.frag;
              if (
                r === n.ErrorDetails.MANIFEST_LOAD_ERROR ||
                r === n.ErrorDetails.MANIFEST_LOAD_TIMEOUT ||
                r === n.ErrorDetails.FRAG_LOAD_ERROR ||
                r === n.ErrorDetails.FRAG_LOAD_TIMEOUT ||
                r === n.ErrorDetails.LEVEL_LOAD_ERROR ||
                r === n.ErrorDetails.LEVEL_LOAD_TIMEOUT
              ) {
                var l = (s && s.url) || (o && o.url) || "";
                i("requestfailed", {
                  request_error: r,
                  request_url: l,
                  request_hostname: (0, u.extractHostname)(l),
                  request_type:
                    r === n.ErrorDetails.FRAG_LOAD_ERROR ||
                    r === n.ErrorDetails.FRAG_LOAD_TIMEOUT
                      ? "media"
                      : "manifest",
                  request_error_code: a && a.code,
                  request_error_text: a && a.text,
                });
              }
            };
            r.on(n.Events.ERROR, h);
            var y = function (e, t) {
              var r = t.frag,
                n = (r && r._url) || "";
              i("requestcanceled", {
                request_cancel: e,
                request_url: n,
                request_type: "media",
                request_hostname: (0, u.extractHostname)(n),
              });
            };
            r.on(n.Events.FRAG_LOAD_EMERGENCY_ABORTED, y);
            var _ = function (e, t) {
              var n = t.level,
                o = r.levels.find(function (e) {
                  return e.level === n;
                });
              if (o && o.attrs && o.attrs.BANDWIDTH) {
                var s = o.attrs.BANDWIDTH;
                s
                  ? i("renditionchange", {
                      video_source_bitrate: s,
                      video_source_width: o.width,
                      video_source_height: o.height,
                    })
                  : a.warn(
                      "missing BANDWIDTH from HLS manifest parsed by HLS.js"
                    );
              }
            };
            r.on(n.Events.LEVEL_SWITCHED, _),
              (r._stopMuxMonitor = function () {
                r.off(n.Events.MANIFEST_LOADED, o),
                  r.off(n.Events.LEVEL_LOADED, c),
                  r.off(n.Events.AUDIO_TRACK_LOADED, f),
                  r.off(n.Events.FRAG_LOADED, p),
                  r.off(n.Events.ERROR, h),
                  r.off(n.Events.FRAG_LOAD_EMERGENCY_ABORTED, y),
                  r.off(n.Events.LEVEL_SWITCHED, _),
                  r.off(n.Events.DESTROYING, r._stopMuxMonitor),
                  delete r._stopMuxMonitor;
              }),
              r.on(n.Events.DESTROYING, r._stopMuxMonitor);
          },
          f = function (e) {
            e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor();
          };
        (t.monitorHlsJs = c), (t.stopMonitoringHlsJs = f);
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.stopMonitoringDashJS = t.monitorDashJS = void 0);
        var a = r(0),
          i = n(a),
          o = r(8),
          s = n(o),
          u = r(5),
          l = function (e, t) {
            if (!e || "function" != typeof e.getRequests) return {};
            var r = e.getRequests({ state: "executed" });
            if (0 === r.length) return {};
            var n = r[r.length - 1],
              a = (0, u.extractHostname)(n.url),
              i = n.bytesLoaded,
              o = new Date(n.requestStartDate).getTime(),
              l = new Date(n.firstByteDate).getTime(),
              d = new Date(n.requestEndDate).getTime(),
              c = isNaN(n.duration) ? 0 : n.duration,
              f =
                "function" == typeof t.getMetricsFor
                  ? t.getMetricsFor(n.mediaType).HttpList
                  : t.getDashMetrics().getHttpRequests(n.mediaType),
              p = void 0;
            return (
              f.length > 0 &&
                (p = (0, s.default)(f[f.length - 1]._responseHeaders || "")),
              {
                requestStart: o,
                requestResponseStart: l,
                requestResponseEnd: d,
                requestBytesLoaded: i,
                requestResponseHeaders: p,
                requestMediaDuration: c,
                requestHostname: a,
              }
            );
          },
          d = function (e, t) {
            var r = t.getQualityFor(e),
              n = t.getCurrentTrackFor(e),
              a = n.bitrateList;
            return a
              ? {
                  currentLevel: r,
                  renditionWidth: a[r].width || null,
                  renditionHeight: a[r].height || null,
                  renditionBitrate: a[r].bandwidth,
                }
              : {};
          },
          c = function (e, t, r) {
            var n =
              (arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              e.log);
            if (!r || !r.on)
              return void n.warn(
                "Invalid dash.js player reference. Monitoring blocked."
              );
            var a = function (r, n) {
                return e.emit(t, r, n);
              },
              o = function (e) {
                var t = e.type,
                  r = e.data,
                  n = r || {},
                  i = n.url;
                a("requestcompleted", {
                  request_event_type: t,
                  request_start: 0,
                  request_response_start: 0,
                  request_response_end: 0,
                  request_bytes_loaded: -1,
                  request_type: "manifest",
                  request_hostname: (0, u.extractHostname)(i),
                });
              };
            r.on("manifestLoaded", o);
            var s = {},
              c = function (e) {
                var t = e.type,
                  n = e.fragmentModel,
                  i = e.chunk,
                  o = i || {},
                  u = o.mediaInfo,
                  d = u || {},
                  c = d.type,
                  f = d.bitrateList;
                f = f || [];
                var p = {};
                f.forEach(function (e, t) {
                  (p[t] = {}),
                    (p[t].width = e.width),
                    (p[t].height = e.height),
                    (p[t].bitrate = e.bandwidth),
                    (p[t].attrs = {});
                }),
                  "video" === c
                    ? (s.video = p)
                    : "audio" === c
                    ? (s.audio = p)
                    : (s.media = p);
                var h = l(n, r),
                  y = h.requestStart,
                  _ = h.requestResponseStart,
                  v = h.requestResponseEnd,
                  m = h.requestResponseHeaders,
                  b = h.requestMediaDuration,
                  g = h.requestHostname;
                a("requestcompleted", {
                  request_event_type: t,
                  request_start: y,
                  request_response_start: _,
                  request_response_end: v,
                  request_bytes_loaded: -1,
                  request_type: c + "_init",
                  request_response_headers: m,
                  request_hostname: g,
                  request_media_duration: b,
                  request_rendition_lists: s,
                });
              };
            r.on("initFragmentLoaded", c);
            var f = function (e) {
              var t = e.type,
                n = e.fragmentModel,
                i = e.chunk,
                o = i || {},
                s = o.mediaInfo,
                u = o.start,
                c = s || {},
                f = c.type,
                p = l(n, r),
                h = p.requestStart,
                y = p.requestResponseStart,
                _ = p.requestResponseEnd,
                v = p.requestBytesLoaded,
                m = p.requestResponseHeaders,
                b = p.requestMediaDuration,
                g = p.requestHostname,
                w = d(f, r),
                x = w.currentLevel,
                S = w.renditionWidth,
                E = w.renditionHeight,
                k = w.renditionBitrate;
              a("requestcompleted", {
                request_event_type: t,
                request_start: h,
                request_response_start: y,
                request_response_end: _,
                request_bytes_loaded: v,
                request_type: f,
                request_response_headers: m,
                request_hostname: g,
                request_media_start_time: u,
                request_media_duration: b,
                request_current_level: x,
                request_labeled_bitrate: k,
                request_video_width: S,
                request_video_height: E,
              });
            };
            r.on("mediaFragmentLoaded", f);
            var p = { video: void 0, audio: void 0, totalBitrate: void 0 },
              h = function () {
                if (p.video && "number" == typeof p.video.bitrate) {
                  if (!p.video.width || !p.video.height)
                    return void n.warn(
                      "have bitrate info for video but missing width/height"
                    );
                  var e = p.video.bitrate;
                  return (
                    p.audio &&
                      "number" == typeof p.audio.bitrate &&
                      (e += p.audio.bitrate),
                    e !== p.totalBitrate
                      ? ((p.totalBitrate = e),
                        {
                          video_source_bitrate: e,
                          video_source_height: p.video.height,
                          video_source_width: p.video.width,
                        })
                      : void 0
                  );
                }
              },
              y = function (e, t, i) {
                if ("number" != typeof e.newQuality)
                  return void n.warn(
                    "missing evt.newQuality in qualityChangeRendered event",
                    e
                  );
                var o = e.mediaType;
                if ("audio" === o || "video" === o) {
                  var s = r.getBitrateInfoListFor(o).find(function (t) {
                    return t.qualityIndex === e.newQuality;
                  });
                  if (!s || "number" != typeof s.bitrate)
                    return void n.warn("missing bitrate info for " + o);
                  p[o] = s;
                  var u = h();
                  u && a("renditionchange", u);
                }
              };
            r.on("qualityChangeRendered", y);
            var _ = function (e) {
              var t = e.error,
                r = e.event;
              r = r || {};
              var n = r.request || {},
                o = (i.default.event && i.default.event.currentTarget) || {};
              a("requestfailed", {
                request_error: t + "_" + r.id + "_" + n.type,
                request_url: r.url,
                request_hostname: (0, u.extractHostname)(r.url),
                request_type: n.mediaType,
                request_error_code: o.status,
                request_error_type: o.statusText,
              });
            };
            r.on("error", _),
              (r._stopMuxMonitor = function () {
                r.off("manifestLoaded", o),
                  r.off("initFragmentLoaded", c),
                  r.off("mediaFragmentLoaded", f),
                  r.off("qualityChangeRendered", y),
                  r.off("error", _),
                  delete r._stopMuxMonitor;
              });
          },
          f = function (e) {
            e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor();
          };
        (t.monitorDashJS = c), (t.stopMonitoringDashJS = f);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = function () {},
          a = 0;
        (n.prototype.on = function (e, t, r) {
          return (
            (t._eventEmitterGuid = t._eventEmitterGuid || ++a),
            (this._listeners = this._listeners || {}),
            (this._listeners[e] = this._listeners[e] || []),
            r && (t = t.bind(r)),
            this._listeners[e].push(t),
            t
          );
        }),
          (n.prototype.off = function (e, t) {
            var r = this._listeners && this._listeners[e];
            r &&
              r.forEach(function (e, n) {
                e._eventEmitterGuid === t._eventEmitterGuid && r.splice(n, 1);
              });
          }),
          (n.prototype.one = function (e, t, r) {
            var n = this;
            t._eventEmitterGuid = t._eventEmitterGuid || ++a;
            var i = function a() {
              n.off(e, a), t.apply(r || this, arguments);
            };
            (i._eventEmitterGuid = t._eventEmitterGuid), this.on(e, i);
          }),
          (n.prototype.emit = function (e, t) {
            var r = this;
            if (this._listeners) {
              t = t || {};
              var n = this._listeners["before*"] || [],
                a = this._listeners[e] || [],
                i = this._listeners["after" + e] || [],
                o = function (t, n) {
                  (t = t.slice()),
                    t.forEach(function (t) {
                      t.call(r, { type: e }, n);
                    });
                };
              o(n, t), o(a, t), o(i, t);
            }
          }),
          (t.default = n);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(0),
          a = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n),
          i = function () {
            (this._playbackHeartbeatInterval = null),
              (this._playheadShouldBeProgressing = !1),
              this.on("playing", function () {
                this._playheadShouldBeProgressing = !0;
              }),
              this.on("play", this._startPlaybackHeartbeatInterval),
              this.on("playing", this._startPlaybackHeartbeatInterval),
              this.on("adbreakstart", this._startPlaybackHeartbeatInterval),
              this.on("adplay", this._startPlaybackHeartbeatInterval),
              this.on("adplaying", this._startPlaybackHeartbeatInterval),
              this.on("seeking", this._startPlaybackHeartbeatInterval),
              this.on("devicewake", this._startPlaybackHeartbeatInterval),
              this.on("viewstart", this._startPlaybackHeartbeatInterval),
              this.on("pause", this._stopPlaybackHeartbeatInterval),
              this.on("ended", this._stopPlaybackHeartbeatInterval),
              this.on("viewend", this._stopPlaybackHeartbeatInterval),
              this.on("error", this._stopPlaybackHeartbeatInterval),
              this.on("aderror", this._stopPlaybackHeartbeatInterval),
              this.on("adpause", this._stopPlaybackHeartbeatInterval),
              this.on("adended", this._stopPlaybackHeartbeatInterval),
              this.on("adbreakend", this._stopPlaybackHeartbeatInterval),
              this.on("seeked", function () {
                this.data.player_is_paused
                  ? this._stopPlaybackHeartbeatInterval()
                  : this._startPlaybackHeartbeatInterval();
              }),
              this.on("timeupdate", function () {
                null !== this._playbackHeartbeatInterval &&
                  this.emit("playbackheartbeat");
              }),
              this.on("devicesleep", function (e, t) {
                null !== this._playbackHeartbeatInterval &&
                  (a.default.clearInterval(this._playbackHeartbeatInterval),
                  this.emit("playbackheartbeatend", {
                    viewer_time: t.viewer_time,
                  }),
                  (this._playbackHeartbeatInterval = null));
              });
          };
        (i.prototype._startPlaybackHeartbeatInterval = function () {
          var e = this;
          null === this._playbackHeartbeatInterval &&
            (this.emit("playbackheartbeat"),
            (this._playbackHeartbeatInterval = a.default.setInterval(
              function () {
                e.emit("playbackheartbeat");
              },
              this.playbackHeartbeatTime
            )));
        }),
          (i.prototype._stopPlaybackHeartbeatInterval = function () {
            (this._playheadShouldBeProgressing = !1),
              null !== this._playbackHeartbeatInterval &&
                (a.default.clearInterval(this._playbackHeartbeatInterval),
                this.emit("playbackheartbeatend"),
                (this._playbackHeartbeatInterval = null));
          }),
          (t.default = i);
      },
      function (e, t, r) {
        "use strict";
        function n() {
          var e = this;
          this.on("viewinit", function () {
            e.viewErrored = !1;
          }),
            this.on("error", function () {
              try {
                var t = e.errorTranslator({
                  player_error_code: e.data.player_error_code,
                  player_error_message: e.data.player_error_message,
                });
                t
                  ? ((e.data.player_error_code = t.player_error_code),
                    (e.data.player_error_message = t.player_error_message),
                    (e.viewErrored = !0))
                  : (delete e.data.player_error_code,
                    delete e.data.player_error_message);
              } catch (t) {
                e.mux.log.warn("Exception in error translator callback.", t),
                  (e.viewErrored = !0);
              }
            });
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(2),
          a = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n),
          i = function () {
            (this._watchTimeTrackerLastCheckedTime = null),
              this.on("playbackheartbeat", this._updateWatchTime),
              this.on("playbackheartbeatend", this._clearWatchTimeState);
          };
        (i.prototype._updateWatchTime = function (e, t) {
          var r = t.viewer_time;
          null === this._watchTimeTrackerLastCheckedTime &&
            (this._watchTimeTrackerLastCheckedTime = r),
            (0, a.default)(
              this.data,
              "view_watch_time",
              r - this._watchTimeTrackerLastCheckedTime
            ),
            (this._watchTimeTrackerLastCheckedTime = r);
        }),
          (i.prototype._clearWatchTimeState = function (e, t) {
            this._updateWatchTime(e, t),
              (this._watchTimeTrackerLastCheckedTime = null);
          }),
          (t.default = i);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(2),
          a = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n),
          i = function () {
            (this._playbackTimeTrackerLastPlayheadPosition = -1),
              this.on("playbackheartbeat", this._updatePlaybackTime),
              this.on("playbackheartbeatend", this._clearPlaybackTimeState),
              this.on("seeking", this._clearPlaybackTimeState);
          };
        (i.prototype._updatePlaybackTime = function () {
          var e = this.data.player_playhead_time;
          if (
            this._playbackTimeTrackerLastPlayheadPosition >= 0 &&
            e > this._playbackTimeTrackerLastPlayheadPosition
          ) {
            var t = e - this._playbackTimeTrackerLastPlayheadPosition;
            t <= 1e3 &&
              (0, a.default)(this.data, "view_content_playback_time", t);
          }
          this._playbackTimeTrackerLastPlayheadPosition = e;
        }),
          (i.prototype._clearPlaybackTimeState = function () {
            this._updatePlaybackTime(),
              (this._playbackTimeTrackerLastPlayheadPosition = -1);
          }),
          (t.default = i);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = function () {
          this.on("playbackheartbeat", this._updatePlayheadTime),
            this.on("playbackheartbeatend", this._updatePlayheadTime),
            this.on("timeupdate", this._updatePlayheadTime),
            this.on("destroy", function () {
              this.off("timeupdate", this._updatePlayheadTime);
            });
        };
        (n.prototype._updateMaxPlayheadPosition = function () {
          this.data.view_max_playhead_position =
            void 0 === this.data.view_max_playhead_position
              ? this.data.player_playhead_time
              : Math.max(
                  this.data.view_max_playhead_position,
                  this.data.player_playhead_time
                );
        }),
          (n.prototype._updatePlayheadTime = function (e, t) {
            if (t.player_playhead_time)
              (this.data.player_playhead_time = t.player_playhead_time),
                this._updateMaxPlayheadPosition();
            else if (this.getPlayheadTime) {
              var r = this.getPlayheadTime();
              void 0 !== r &&
                ((this.data.player_playhead_time = r),
                this._updateMaxPlayheadPosition());
            }
          }),
          (t.default = n);
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = r(3),
          i = n(a),
          o = r(2),
          s = n(o),
          u = function () {
            (this._lastCheckedTime = null),
              (this._lastPlayheadTime = null),
              (this._lastPlayheadTimeUpdatedTime = null),
              this.on("playbackheartbeat", this._checkIfRebuffering),
              this.on("playbackheartbeatend", this._cleanupRebufferTracker),
              this.on("seeking", function () {
                this._cleanupRebufferTracker(null, {
                  viewer_time: i.default.now(),
                });
              });
          };
        (u.prototype._checkIfRebuffering = function (e, t) {
          if (!this.disableRebufferTracking) {
            if (
              this.isSeeking ||
              this.isAdBreak ||
              !this._playheadShouldBeProgressing
            )
              return void this._cleanupRebufferTracker(e, t);
            if (null === this._lastCheckedTime)
              return (
                this._prepareRebufferTrackerState(t.viewer_time),
                void this._updateRebufferMetrics()
              );
            if (this._lastPlayheadTime !== this.data.player_playhead_time)
              return void this._cleanupRebufferTracker(e, t, !0);
            var r = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
            r >= this.sustainedRebufferThreshold &&
              (this._rebuffering
                ? this._updateRebufferMetrics(
                    t.viewer_time - this._lastCheckedTime
                  )
                : ((this._rebuffering = !0),
                  (0, s.default)(this.data, "view_rebuffer_count", 1),
                  this._updateRebufferMetrics(r),
                  this.emit("rebufferstart"))),
              (this._lastCheckedTime = t.viewer_time);
          }
        }),
          (u.prototype._clearRebufferTrackerState = function () {
            (this._lastCheckedTime = null),
              (this._lastPlayheadTime = null),
              (this._lastPlayheadTimeUpdatedTime = null);
          }),
          (u.prototype._prepareRebufferTrackerState = function (e) {
            (this._lastCheckedTime = e),
              (this._lastPlayheadTime = this.data.player_playhead_time),
              (this._lastPlayheadTimeUpdatedTime = e);
          }),
          (u.prototype._cleanupRebufferTracker = function (e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!this.disableRebufferTracking) {
              if (this._rebuffering)
                (this._rebuffering = !1),
                  this._updateRebufferMetrics(
                    t.viewer_time - this._lastCheckedTime
                  ),
                  this.emit("rebufferend", { viewer_time: t.viewer_time });
              else {
                if (null === this._lastCheckedTime)
                  return void this._updateRebufferMetrics();
                var n = this.data.player_playhead_time - this._lastPlayheadTime,
                  a = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                n > 0 && a - n > this.minimumRebufferDuration
                  ? ((0, s.default)(this.data, "view_rebuffer_count", 1),
                    this._updateRebufferMetrics(a - n),
                    this.emit("rebufferstart", {
                      viewer_time: this._lastPlayheadTimeUpdatedTime,
                    }),
                    this.emit("rebufferend", {
                      viewer_time: this._lastPlayheadTimeUpdatedTime + a - n,
                    }))
                  : this._updateRebufferMetrics();
              }
              r
                ? this._prepareRebufferTrackerState(t.viewer_time)
                : this._clearRebufferTrackerState();
            }
          }),
          (u.prototype._updateRebufferMetrics = function (e) {
            e > 0 && (0, s.default)(this.data, "view_rebuffer_duration", e),
              this.data.view_watch_time >= 0 &&
                this.data.view_rebuffer_count > 0 &&
                ((this.data.view_rebuffer_frequency =
                  this.data.view_rebuffer_count / this.data.view_watch_time),
                (this.data.view_rebuffer_percentage =
                  this.data.view_rebuffer_duration /
                  this.data.view_watch_time));
          }),
          (t.default = u);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(3),
          a = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n),
          i = function () {
            this.on("viewinit", function () {
              var e = this.data,
                t = e.view_id;
              if (!e.view_program_changed) {
                var r = function (e, r) {
                  var n = r.viewer_time;
                  "playing" === e.type &&
                  void 0 === this.data.view_time_to_first_frame
                    ? this.calculateTimeToFirstFrame(n || a.default.now(), t)
                    : "adplaying" !== e.type ||
                      (void 0 !== this.data.view_time_to_first_frame &&
                        !this.inPrerollPosition()) ||
                      this.calculateTimeToFirstFrame(n || a.default.now(), t);
                };
                this.one("playing", r),
                  this.one("adplaying", r),
                  this.one("viewend", function () {
                    this.off("playing", r), this.off("adplaying", r);
                  });
              }
            });
          };
        (i.prototype.calculateTimeToFirstFrame = function (e, t) {
          t === this.data.view_id &&
            (this._updateWatchTime(null, { viewer_time: e }),
            (this.data.view_time_to_first_frame = this.data.view_watch_time),
            (this.data.player_autoplay_on || this.data.video_is_autoplay) &&
              this.NAVIGATION_START &&
              (this.data.view_aggregate_startup_time =
                this.data.view_start +
                this.data.view_watch_time -
                this.NAVIGATION_START));
        }),
          (t.default = i);
      },
      function (e, t, r) {
        "use strict";
        function n() {
          var e = this;
          this.on("viewinit", function () {
            this._lastPlayheadPosition = -1;
          });
          var t = [
              "pause",
              "rebufferstart",
              "seeking",
              "error",
              "adbreakstart",
              "hb",
            ],
            r = ["playing", "hb"];
          t.forEach(function (t) {
            e.on(t, function () {
              if (
                this._lastPlayheadPosition >= 0 &&
                this.data.player_playhead_time >= 0 &&
                this._lastPlayerWidth >= 0 &&
                this._lastSourceWidth > 0 &&
                this._lastPlayerHeight >= 0 &&
                this._lastSourceHeight > 0
              ) {
                var e =
                  this.data.player_playhead_time - this._lastPlayheadPosition;
                if (e < 0) return void (this._lastPlayheadPosition = -1);
                var t = Math.min(
                    this._lastPlayerWidth / this._lastSourceWidth,
                    this._lastPlayerHeight / this._lastSourceHeight
                  ),
                  r = Math.max(0, t - 1),
                  n = Math.max(0, 1 - t);
                (this.data.view_max_upscale_percentage = Math.max(
                  this.data.view_max_upscale_percentage || 0,
                  r
                )),
                  (this.data.view_max_downscale_percentage = Math.max(
                    this.data.view_max_downscale_percentage || 0,
                    n
                  )),
                  (0, i.default)(
                    this.data,
                    "view_total_content_playback_time",
                    e
                  ),
                  (0, i.default)(this.data, "view_total_upscaling", r * e),
                  (0, i.default)(this.data, "view_total_downscaling", n * e);
              }
              this._lastPlayheadPosition = -1;
            });
          }),
            r.forEach(function (t) {
              e.on(t, function () {
                (this._lastPlayheadPosition = this.data.player_playhead_time),
                  (this._lastPlayerWidth = this.data.player_width),
                  (this._lastPlayerHeight = this.data.player_height),
                  (this._lastSourceWidth = this.data.video_source_width),
                  (this._lastSourceHeight = this.data.video_source_height);
              });
            });
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
        var a = r(2),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(a);
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a() {
          (this.isSeeking = !1),
            this.on("seeking", function (e, t) {
              (0, d.default)(this.data, t),
                (this._lastSeekingTime = o.default.now()),
                !1 === this.isSeeking &&
                  ((this.isSeeking = !0), this.send("seeking"));
            }),
            this.on("seeked", function () {
              this.isSeeking = !1;
              var e = this._lastSeekingTime || o.default.now(),
                t = o.default.now() - e;
              (0, u.default)(this.data, "view_seek_count", 1),
                (0, u.default)(this.data, "view_seek_duration", t);
              var r = this.data.view_max_seek_time || 0;
              this.data.view_max_seek_time = Math.max(r, t);
            }),
            this.on("viewend", function () {
              this.isSeeking = !1;
            });
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
        var i = r(3),
          o = n(i),
          s = r(2),
          u = n(s),
          l = r(1),
          d = n(l);
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = (function () {
            function e(e, t) {
              var r = [],
                n = !0,
                a = !1,
                i = void 0;
              try {
                for (
                  var o, s = e[Symbol.iterator]();
                  !(n = (o = s.next()).done) &&
                  (r.push(o.value), !t || r.length !== t);
                  n = !0
                );
              } catch (e) {
                (a = !0), (i = e);
              } finally {
                try {
                  !n && s.return && s.return();
                } finally {
                  if (a) throw i;
                }
              }
              return r;
            }
            return function (t, r) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, r);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          i = r(2),
          o = n(i),
          s = r(5),
          u = r(1),
          l = n(u),
          d = function (e, t) {
            e.push(t),
              e.sort(function (e, t) {
                return e.viewer_time - t.viewer_time;
              });
          },
          c = [
            "adbreakstart",
            "adrequest",
            "adresponse",
            "adplay",
            "adplaying",
            "adpause",
            "adended",
            "adbreakend",
            "aderror",
          ],
          f = function () {
            var e = this;
            this.on("viewinit", function () {
              (this.isAdBreak = !1),
                (this._currentAdRequestNumber = 0),
                (this._currentAdResponseNumber = 0),
                (this._adRequests = []),
                (this._adResponses = []),
                (this._adHasPlayed = !1),
                (this._wouldBeNewAdPlay = !0),
                (this._prerollPlayTime = void 0);
            }),
              c.forEach(function (t) {
                return e.on(t, e._updateAdData);
              });
            var t = function () {
              e.isAdBreak = !1;
            };
            this.on("adbreakstart", function () {
              this.isAdBreak = !0;
            }),
              this.on("play", t),
              this.on("playing", t),
              this.on("viewend", t),
              this.on("adrequest", function (e, t) {
                (t = (0, l.default)(
                  {
                    ad_request_id:
                      "generatedAdRequestId" + this._currentAdRequestNumber++,
                  },
                  t
                )),
                  d(this._adRequests, t),
                  (0, o.default)(this.data, "view_ad_request_count"),
                  this.inPrerollPosition() &&
                    ((this.data.view_preroll_requested = !0),
                    this._adHasPlayed ||
                      (0, o.default)(this.data, "view_preroll_request_count"));
              }),
              this.on("adresponse", function (e, t) {
                (t = (0, l.default)(
                  {
                    ad_request_id:
                      "generatedAdRequestId" + this._currentAdResponseNumber++,
                  },
                  t
                )),
                  d(this._adResponses, t);
                var r = this.findAdRequest(t.ad_request_id);
                r &&
                  (0, o.default)(
                    this.data,
                    "view_ad_request_time",
                    Math.max(0, t.viewer_time - r.viewer_time)
                  );
              }),
              this.on("adplay", function (e, t) {
                (this._adHasPlayed = !0),
                  this._wouldBeNewAdPlay &&
                    ((this._wouldBeNewAdPlay = !1),
                    (0, o.default)(this.data, "view_ad_played_count")),
                  this.inPrerollPosition() &&
                    !this.data.view_preroll_played &&
                    ((this.data.view_preroll_played = !0),
                    this._adRequests.length > 0 &&
                      (this.data.view_preroll_request_time = Math.max(
                        0,
                        t.viewer_time - this._adRequests[0].viewer_time
                      )),
                    this.data.view_start &&
                      (this.data.view_startup_preroll_request_time = Math.max(
                        0,
                        t.viewer_time - this.data.view_start
                      )),
                    (this._prerollPlayTime = t.viewer_time));
              }),
              this.on("adplaying", function (e, t) {
                this.inPrerollPosition() &&
                  void 0 === this.data.view_preroll_load_time &&
                  void 0 !== this._prerollPlayTime &&
                  ((this.data.view_preroll_load_time =
                    t.viewer_time - this._prerollPlayTime),
                  (this.data.view_startup_preroll_load_time =
                    t.viewer_time - this._prerollPlayTime));
              }),
              this.on("adended", function () {
                this._wouldBeNewAdPlay = !0;
              }),
              this.on("aderror", function () {
                this._wouldBeNewAdPlay = !0;
              });
          };
        (f.prototype.inPrerollPosition = function () {
          return (
            void 0 === this.data.view_content_playback_time ||
            this.data.view_content_playback_time <= 1e3
          );
        }),
          (f.prototype.findAdRequest = function (e) {
            for (var t = 0; t < this._adRequests.length; t++)
              if (this._adRequests[t].ad_request_id === e)
                return this._adRequests[t];
          }),
          (f.prototype._updateAdData = function (e, t) {
            if (this.inPrerollPosition()) {
              if (!this.data.view_preroll_ad_tag_hostname && t.ad_tag_url) {
                var r = (0, s.extractHostnameAndDomain)(t.ad_tag_url),
                  n = a(r, 2),
                  i = n[0],
                  o = n[1];
                (this.data.view_preroll_ad_tag_domain = o),
                  (this.data.view_preroll_ad_tag_hostname = i);
              }
              if (!this.data.view_preroll_ad_asset_hostname && t.ad_asset_url) {
                var u = (0, s.extractHostnameAndDomain)(t.ad_asset_url),
                  l = a(u, 2),
                  d = l[0],
                  c = l[1];
                (this.data.view_preroll_ad_asset_domain = c),
                  (this.data.view_preroll_ad_asset_hostname = d);
              }
            }
          }),
          (t.default = f);
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a() {
          var e = this,
            t = void 0,
            r = void 0,
            n = function () {
              e.disableRebufferTracking ||
                ((0, u.default)(e.data, "view_waiting_rebuffer_count", 1),
                (t = o.default.now()),
                (r = window.setInterval(function () {
                  if (t) {
                    var r = o.default.now();
                    (0, u.default)(
                      e.data,
                      "view_waiting_rebuffer_duration",
                      r - t
                    ),
                      (t = r);
                  }
                }, 250)));
            },
            a = function () {
              e.disableRebufferTracking ||
                (t &&
                  ((0, u.default)(
                    e.data,
                    "view_waiting_rebuffer_duration",
                    o.default.now() - t
                  ),
                  (t = !1),
                  window.clearInterval(r)));
            },
            i = !1,
            s = function () {
              i = !0;
            },
            l = function () {
              (i = !1), a();
            };
          this.on("waiting", function () {
            i && n();
          }),
            this.on("playing", function () {
              a(), s();
            }),
            this.on("pause", l),
            this.on("seeking", l);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
        var i = r(3),
          o = n(i),
          s = r(2),
          u = n(s);
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a() {
          var e = this;
          this.one("playbackheartbeat", l),
            this.on("playbackheartbeatend", function () {
              e.off("before*", d), e.one("playbackheartbeat", l);
            });
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
        var i = r(1),
          o = n(i),
          s = r(3),
          u = n(s),
          l = function () {
            (this.lastWallClockTime = u.default.now()), this.on("before*", d);
          },
          d = function (e) {
            var t = u.default.now(),
              r = this.lastWallClockTime;
            (this.lastWallClockTime = t),
              t - r > 3e4 &&
                (this.emit("devicesleep", { viewer_time: r }),
                (0, o.default)(this.data, { viewer_time: r }),
                this.send("devicesleep"),
                this.emit("devicewake", { viewer_time: t }),
                (0, o.default)(this.data, { viewer_time: t }),
                this.send("devicewake"));
          };
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          i = r(0),
          o = n(i),
          s = r(43),
          u = r(4),
          l = n(u),
          d = r(56),
          c = n(d),
          f = r(13),
          p = n(f),
          h = r(57),
          y = n(h),
          _ = r(17),
          v = n(_),
          m = r(58),
          b = n(m),
          g = r(1),
          w = n(g),
          x = [
            "env_key",
            "view_id",
            "view_sequence_number",
            "player_sequence_number",
            "beacon_domain",
            "player_playhead_time",
            "viewer_time",
            "mux_api_version",
            "event",
            "video_id",
            "player_instance_id",
          ],
          S = ["viewstart", "error", "ended", "viewend"],
          E = function (e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            (this.mux = e),
              (this.envKey = t),
              (this.eventQueue = new b.default(
                (0, c.default)(t, r.beaconDomain)
              )),
              (this.previousBeaconData = null),
              (this.lastEventTime = null),
              (this.sampleRate = r.sampleRate),
              (this.disableCookies = r.disableCookies),
              (this.respectDoNotTrack = r.respectDoNotTrack);
            var n = r.platform || {};
            this.pageLevelData = {
              mux_api_version: this.mux.API_VERSION,
              mux_embed: this.mux.NAME,
              mux_embed_version: this.mux.VERSION,
              viewer_application_name: n.name,
              viewer_application_version: n.version,
              viewer_application_engine: n.layout,
              viewer_device_name: n.product,
              viewer_device_category: "",
              viewer_device_manufacturer: n.manufacturer,
              viewer_os_family: n.os && n.os.family,
              viewer_os_architecture: n.os && n.os.architecture,
              viewer_os_version: n.os && n.os.version,
            };
            var a = (0, y.default)();
            a &&
              (this.pageLevelData = (0, w.default)(this.pageLevelData, {
                viewer_connection_type: a,
              })),
              void 0 !== o.default &&
                o.default.location &&
                o.default.location.href &&
                (this.pageLevelData.page_url = o.default.location.href),
              (this.viewerData = this.disableCookies
                ? {}
                : (0, s.getAndUpdateViewerData)());
          };
        (E.prototype.send = function (e, t) {
          if (e) {
            if (this.respectDoNotTrack && (0, p.default)())
              return l.default.info(
                "Not sending `" + e + "` because Do Not Track is enabled"
              );
            if (!t || "object" !== (void 0 === t ? "undefined" : a(t)))
              return l.default.error(
                "A data object was expected in send() but was not provided"
              );
            var r = this.disableCookies ? {} : (0, s.getAndUpdateSessionData)(),
              n = {};
            (0, w.default)(n, this.pageLevelData),
              (0, w.default)(n, t),
              (0, w.default)(n, r),
              (0, w.default)(n, this.viewerData),
              (n.event = e),
              (n.env_key = this.envKey),
              n.user_id && ((n.viewer_user_id = n.user_id), delete n.user_id);
            var i = n.mux_sample_number >= this.sampleRate,
              o = this._deduplicateBeaconData(e, n),
              u = (0, v.default)(o);
            if (((this.lastEventTime = this.mux.utils.now()), i))
              return l.default.info(
                "Not sending event due to sample rate restriction",
                e,
                n,
                u
              );
            if (!this.envKey)
              return l.default.info(
                "Not sending event due to missing environment key",
                e,
                n,
                u
              );
            if (!this.rateLimited)
              if (
                (l.default.info("Sending event", e, n, u),
                (this.rateLimited = !this.eventQueue.queueEvent(e, u)),
                this.mux.WINDOW_UNLOADING && "viewend" === e)
              )
                this.eventQueue.destroy(!0);
              else if (
                (S.indexOf(e) >= 0 && this.eventQueue.flushEvents(),
                this.rateLimited)
              )
                return (
                  (n.event = "eventrateexceeded"),
                  (u = (0, v.default)(n)),
                  this.eventQueue.queueEvent(n.event, u),
                  l.default.error("Beaconing disabled due to rate limit.")
                );
          }
        }),
          (E.prototype.destroy = function () {
            this.eventQueue.destroy(!1);
          });
        var k = function (e, t, r, n) {
            return (
              !(!e || 0 !== t.indexOf("request_")) &&
              ("request_response_headers" === t ||
                "object" !== (void 0 === r ? "undefined" : a(r)) ||
                "object" !== (void 0 === n ? "undefined" : a(n)) ||
                Object.keys(r || {}).length !== Object.keys(n || {}).length)
            );
          },
          P = function (e, t) {
            return "renditionchange" === e && 0 === t.indexOf("video_source_");
          };
        (E.prototype._deduplicateBeaconData = function (e, t) {
          var r = this,
            n = {},
            a = t.view_id;
          if (
            !a ||
            "viewstart" === e ||
            "viewend" === e ||
            !this.previousBeaconData ||
            this.mux.utils.now() - this.lastEventTime >= 6e5
          )
            (n = (0, w.default)({}, t)),
              a && (this.previousBeaconData = n),
              a && "viewend" === e && (this.previousBeaconData = null);
          else {
            var i = 0 === e.indexOf("request");
            Object.keys(t).forEach(function (a) {
              var o = t[a];
              (o !== r.previousBeaconData[a] ||
                x.indexOf(a) > -1 ||
                k(i, a, o, r.previousBeaconData[a]) ||
                P(e, a)) &&
                ((n[a] = o), (r.previousBeaconData[a] = o));
            });
          }
          return n;
        }),
          (t.default = E);
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getAndUpdateSessionData = t.getAndUpdateViewerData = void 0);
        var a = r(15),
          i = n(a),
          o = r(55),
          s = n(o),
          u = r(7),
          l = r(3),
          d = n(l),
          c = function () {
            var e = void 0;
            try {
              e = i.default.parse(s.default.get("muxData") || "");
            } catch (t) {
              e = {};
            }
            return e;
          },
          f = function (e) {
            try {
              s.default.set("muxData", i.default.stringify(e), {
                expires: 7300,
              });
            } catch (e) {}
          },
          p = function () {
            var e = c();
            return (
              (e.mux_viewer_id = e.mux_viewer_id || (0, u.generateUUID)()),
              (e.msn = e.msn || Math.random()),
              f(e),
              { mux_viewer_id: e.mux_viewer_id, mux_sample_number: e.msn }
            );
          },
          h = function () {
            var e = c(),
              t = d.default.now();
            return (
              e.session_start &&
                ((e.sst = e.session_start), delete e.session_start),
              e.session_id && ((e.sid = e.session_id), delete e.session_id),
              e.session_expires &&
                ((e.sex = e.session_expires), delete e.session_expires),
              (!e.sex || e.sex < t) &&
                ((e.sid = (0, u.generateUUID)()), (e.sst = t)),
              (e.sex = t + 15e5),
              f(e),
              {
                session_id: e.sid,
                session_start: e.sst,
                session_expires: e.sex,
              }
            );
          };
        (t.getAndUpdateViewerData = p), (t.getAndUpdateSessionData = h);
      },
      function (e, t, r) {
        "use strict";
        var n = r(45),
          a = r(16),
          i = r(11),
          o = Object.prototype.hasOwnProperty,
          s = {
            brackets: function (e) {
              return e + "[]";
            },
            comma: "comma",
            indices: function (e, t) {
              return e + "[" + t + "]";
            },
            repeat: function (e) {
              return e;
            },
          },
          u = Array.isArray,
          l = Array.prototype.push,
          d = function (e, t) {
            l.apply(e, u(t) ? t : [t]);
          },
          c = Date.prototype.toISOString,
          f = i.default,
          p = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: a.encode,
            encodeValuesOnly: !1,
            format: f,
            formatter: i.formatters[f],
            indices: !1,
            serializeDate: function (e) {
              return c.call(e);
            },
            skipNulls: !1,
            strictNullHandling: !1,
          },
          h = function (e) {
            return (
              "string" == typeof e ||
              "number" == typeof e ||
              "boolean" == typeof e ||
              "symbol" == typeof e ||
              "bigint" == typeof e
            );
          },
          y = function e(t, r, i, o, s, l, c, f, y, _, v, m, b, g, w) {
            var x = t;
            if (w.has(t)) throw new RangeError("Cyclic object value");
            if (
              ("function" == typeof c
                ? (x = c(r, x))
                : x instanceof Date
                ? (x = _(x))
                : "comma" === i &&
                  u(x) &&
                  (x = a.maybeMap(x, function (e) {
                    return e instanceof Date ? _(e) : e;
                  })),
              null === x)
            ) {
              if (o) return l && !b ? l(r, p.encoder, g, "key", v) : r;
              x = "";
            }
            if (h(x) || a.isBuffer(x)) {
              if (l) {
                return [
                  m(b ? r : l(r, p.encoder, g, "key", v)) +
                    "=" +
                    m(l(x, p.encoder, g, "value", v)),
                ];
              }
              return [m(r) + "=" + m(String(x))];
            }
            var S = [];
            if (void 0 === x) return S;
            var E;
            if ("comma" === i && u(x))
              E = [{ value: x.length > 0 ? x.join(",") || null : void 0 }];
            else if (u(c)) E = c;
            else {
              var k = Object.keys(x);
              E = f ? k.sort(f) : k;
            }
            for (var P = 0; P < E.length; ++P) {
              var A = E[P],
                T = "object" == typeof A && void 0 !== A.value ? A.value : x[A];
              if (!s || null !== T) {
                var O = u(x)
                  ? "function" == typeof i
                    ? i(r, A)
                    : r
                  : r + (y ? "." + A : "[" + A + "]");
                w.set(t, !0);
                var j = n();
                d(S, e(T, O, i, o, s, l, c, f, y, _, v, m, b, g, j));
              }
            }
            return S;
          },
          _ = function (e) {
            if (!e) return p;
            if (
              null !== e.encoder &&
              void 0 !== e.encoder &&
              "function" != typeof e.encoder
            )
              throw new TypeError("Encoder has to be a function.");
            var t = e.charset || p.charset;
            if (
              void 0 !== e.charset &&
              "utf-8" !== e.charset &&
              "iso-8859-1" !== e.charset
            )
              throw new TypeError(
                "The charset option must be either utf-8, iso-8859-1, or undefined"
              );
            var r = i.default;
            if (void 0 !== e.format) {
              if (!o.call(i.formatters, e.format))
                throw new TypeError("Unknown format option provided.");
              r = e.format;
            }
            var n = i.formatters[r],
              a = p.filter;
            return (
              ("function" == typeof e.filter || u(e.filter)) && (a = e.filter),
              {
                addQueryPrefix:
                  "boolean" == typeof e.addQueryPrefix
                    ? e.addQueryPrefix
                    : p.addQueryPrefix,
                allowDots: void 0 === e.allowDots ? p.allowDots : !!e.allowDots,
                charset: t,
                charsetSentinel:
                  "boolean" == typeof e.charsetSentinel
                    ? e.charsetSentinel
                    : p.charsetSentinel,
                delimiter: void 0 === e.delimiter ? p.delimiter : e.delimiter,
                encode: "boolean" == typeof e.encode ? e.encode : p.encode,
                encoder: "function" == typeof e.encoder ? e.encoder : p.encoder,
                encodeValuesOnly:
                  "boolean" == typeof e.encodeValuesOnly
                    ? e.encodeValuesOnly
                    : p.encodeValuesOnly,
                filter: a,
                format: r,
                formatter: n,
                serializeDate:
                  "function" == typeof e.serializeDate
                    ? e.serializeDate
                    : p.serializeDate,
                skipNulls:
                  "boolean" == typeof e.skipNulls ? e.skipNulls : p.skipNulls,
                sort: "function" == typeof e.sort ? e.sort : null,
                strictNullHandling:
                  "boolean" == typeof e.strictNullHandling
                    ? e.strictNullHandling
                    : p.strictNullHandling,
              }
            );
          };
        e.exports = function (e, t) {
          var r,
            a,
            i = e,
            o = _(t);
          "function" == typeof o.filter
            ? ((a = o.filter), (i = a("", i)))
            : u(o.filter) && ((a = o.filter), (r = a));
          var l = [];
          if ("object" != typeof i || null === i) return "";
          var c;
          c =
            t && t.arrayFormat in s
              ? t.arrayFormat
              : t && "indices" in t
              ? t.indices
                ? "indices"
                : "repeat"
              : "indices";
          var f = s[c];
          r || (r = Object.keys(i)), o.sort && r.sort(o.sort);
          for (var p = n(), h = 0; h < r.length; ++h) {
            var v = r[h];
            (o.skipNulls && null === i[v]) ||
              d(
                l,
                y(
                  i[v],
                  v,
                  f,
                  o.strictNullHandling,
                  o.skipNulls,
                  o.encode ? o.encoder : null,
                  o.filter,
                  o.sort,
                  o.allowDots,
                  o.serializeDate,
                  o.format,
                  o.formatter,
                  o.encodeValuesOnly,
                  o.charset,
                  p
                )
              );
          }
          var m = l.join(o.delimiter),
            b = !0 === o.addQueryPrefix ? "?" : "";
          return (
            o.charsetSentinel &&
              ("iso-8859-1" === o.charset
                ? (b += "utf8=%26%2310003%3B&")
                : (b += "utf8=%E2%9C%93&")),
            m.length > 0 ? b + m : ""
          );
        };
      },
      function (e, t, r) {
        "use strict";
        var n = r(9),
          a = r(50),
          i = r(52),
          o = n("%TypeError%"),
          s = n("%WeakMap%", !0),
          u = n("%Map%", !0),
          l = a("WeakMap.prototype.get", !0),
          d = a("WeakMap.prototype.set", !0),
          c = a("WeakMap.prototype.has", !0),
          f = a("Map.prototype.get", !0),
          p = a("Map.prototype.set", !0),
          h = a("Map.prototype.has", !0),
          y = function (e, t) {
            for (var r, n = e; null !== (r = n.next); n = r)
              if (r.key === t)
                return (n.next = r.next), (r.next = e.next), (e.next = r), r;
          },
          _ = function (e, t) {
            var r = y(e, t);
            return r && r.value;
          },
          v = function (e, t, r) {
            var n = y(e, t);
            n ? (n.value = r) : (e.next = { key: t, next: e.next, value: r });
          },
          m = function (e, t) {
            return !!y(e, t);
          };
        e.exports = function () {
          var e,
            t,
            r,
            n = {
              assert: function (e) {
                if (!n.has(e))
                  throw new o("Side channel does not contain " + i(e));
              },
              get: function (n) {
                if (
                  s &&
                  n &&
                  ("object" == typeof n || "function" == typeof n)
                ) {
                  if (e) return l(e, n);
                } else if (u) {
                  if (t) return f(t, n);
                } else if (r) return _(r, n);
              },
              has: function (n) {
                if (
                  s &&
                  n &&
                  ("object" == typeof n || "function" == typeof n)
                ) {
                  if (e) return c(e, n);
                } else if (u) {
                  if (t) return h(t, n);
                } else if (r) return m(r, n);
                return !1;
              },
              set: function (n, a) {
                s && n && ("object" == typeof n || "function" == typeof n)
                  ? (e || (e = new s()), d(e, n, a))
                  : u
                  ? (t || (t = new u()), p(t, n, a))
                  : (r || (r = { key: {}, next: null }), v(r, n, a));
              },
            };
          return n;
        };
      },
      function (e, t, r) {
        "use strict";
        var n = "undefined" != typeof Symbol && Symbol,
          a = r(47);
        e.exports = function () {
          return (
            "function" == typeof n &&
            "function" == typeof Symbol &&
            "symbol" == typeof n("foo") &&
            "symbol" == typeof Symbol("bar") &&
            a()
          );
        };
      },
      function (e, t, r) {
        "use strict";
        e.exports = function () {
          if (
            "function" != typeof Symbol ||
            "function" != typeof Object.getOwnPropertySymbols
          )
            return !1;
          if ("symbol" == typeof Symbol.iterator) return !0;
          var e = {},
            t = Symbol("test"),
            r = Object(t);
          if ("string" == typeof t) return !1;
          if ("[object Symbol]" !== Object.prototype.toString.call(t))
            return !1;
          if ("[object Symbol]" !== Object.prototype.toString.call(r))
            return !1;
          e[t] = 42;
          for (t in e) return !1;
          if ("function" == typeof Object.keys && 0 !== Object.keys(e).length)
            return !1;
          if (
            "function" == typeof Object.getOwnPropertyNames &&
            0 !== Object.getOwnPropertyNames(e).length
          )
            return !1;
          var n = Object.getOwnPropertySymbols(e);
          if (1 !== n.length || n[0] !== t) return !1;
          if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
          if ("function" == typeof Object.getOwnPropertyDescriptor) {
            var a = Object.getOwnPropertyDescriptor(e, t);
            if (42 !== a.value || !0 !== a.enumerable) return !1;
          }
          return !0;
        };
      },
      function (e, t, r) {
        "use strict";
        var n = Array.prototype.slice,
          a = Object.prototype.toString;
        e.exports = function (e) {
          var t = this;
          if ("function" != typeof t || "[object Function]" !== a.call(t))
            throw new TypeError(
              "Function.prototype.bind called on incompatible " + t
            );
          for (
            var r,
              i = n.call(arguments, 1),
              o = function () {
                if (this instanceof r) {
                  var a = t.apply(this, i.concat(n.call(arguments)));
                  return Object(a) === a ? a : this;
                }
                return t.apply(e, i.concat(n.call(arguments)));
              },
              s = Math.max(0, t.length - i.length),
              u = [],
              l = 0;
            l < s;
            l++
          )
            u.push("$" + l);
          if (
            ((r = Function(
              "binder",
              "return function (" +
                u.join(",") +
                "){ return binder.apply(this,arguments); }"
            )(o)),
            t.prototype)
          ) {
            var d = function () {};
            (d.prototype = t.prototype),
              (r.prototype = new d()),
              (d.prototype = null);
          }
          return r;
        };
      },
      function (e, t, r) {
        "use strict";
        var n = r(10);
        e.exports = n.call(Function.call, Object.prototype.hasOwnProperty);
      },
      function (e, t, r) {
        "use strict";
        var n = r(9),
          a = r(51),
          i = a(n("String.prototype.indexOf"));
        e.exports = function (e, t) {
          var r = n(e, !!t);
          return "function" == typeof r && i(e, ".prototype.") > -1 ? a(r) : r;
        };
      },
      function (e, t, r) {
        "use strict";
        var n = r(10),
          a = r(9),
          i = a("%Function.prototype.apply%"),
          o = a("%Function.prototype.call%"),
          s = a("%Reflect.apply%", !0) || n.call(o, i),
          u = a("%Object.getOwnPropertyDescriptor%", !0),
          l = a("%Object.defineProperty%", !0),
          d = a("%Math.max%");
        if (l)
          try {
            l({}, "a", { value: 1 });
          } catch (e) {
            l = null;
          }
        e.exports = function (e) {
          var t = s(n, o, arguments);
          if (u && l) {
            u(t, "length").configurable &&
              l(t, "length", {
                value: 1 + d(0, e.length - (arguments.length - 1)),
              });
          }
          return t;
        };
        var c = function () {
          return s(n, i, arguments);
        };
        l ? l(e.exports, "apply", { value: c }) : (e.exports.apply = c);
      },
      function (e, t, r) {
        function n(e, t, r) {
          var n = "double" === (r.quoteStyle || t) ? '"' : "'";
          return n + e + n;
        }
        function a(e) {
          return String(e).replace(/"/g, "&quot;");
        }
        function i(e) {
          return !(
            "[object Array]" !== y(e) ||
            (ie && "object" == typeof e && ie in e)
          );
        }
        function o(e) {
          return !(
            "[object Date]" !== y(e) ||
            (ie && "object" == typeof e && ie in e)
          );
        }
        function s(e) {
          return !(
            "[object RegExp]" !== y(e) ||
            (ie && "object" == typeof e && ie in e)
          );
        }
        function u(e) {
          return !(
            "[object Error]" !== y(e) ||
            (ie && "object" == typeof e && ie in e)
          );
        }
        function l(e) {
          return !(
            "[object String]" !== y(e) ||
            (ie && "object" == typeof e && ie in e)
          );
        }
        function d(e) {
          return !(
            "[object Number]" !== y(e) ||
            (ie && "object" == typeof e && ie in e)
          );
        }
        function c(e) {
          return !(
            "[object Boolean]" !== y(e) ||
            (ie && "object" == typeof e && ie in e)
          );
        }
        function f(e) {
          if (ee) return e && "object" == typeof e && e instanceof Symbol;
          if ("symbol" == typeof e) return !0;
          if (!e || "object" != typeof e || !Z) return !1;
          try {
            return Z.call(e), !0;
          } catch (e) {}
          return !1;
        }
        function p(e) {
          if (!e || "object" != typeof e || !K) return !1;
          try {
            return K.call(e), !0;
          } catch (e) {}
          return !1;
        }
        function h(e, t) {
          return oe.call(e, t);
        }
        function y(e) {
          return z.call(e);
        }
        function _(e) {
          if (e.name) return e.name;
          var t = Y.call($.call(e), /^function\s*([\w$]+)/);
          return t ? t[1] : null;
        }
        function v(e, t) {
          if (e.indexOf) return e.indexOf(t);
          for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
          return -1;
        }
        function m(e) {
          if (!I || !e || "object" != typeof e) return !1;
          try {
            I.call(e);
            try {
              H.call(e);
            } catch (e) {
              return !0;
            }
            return e instanceof Map;
          } catch (e) {}
          return !1;
        }
        function b(e) {
          if (!U || !e || "object" != typeof e) return !1;
          try {
            U.call(e, U);
            try {
              J.call(e, J);
            } catch (e) {
              return !0;
            }
            return e instanceof WeakMap;
          } catch (e) {}
          return !1;
        }
        function g(e) {
          if (!V || !e || "object" != typeof e) return !1;
          try {
            return V.call(e), !0;
          } catch (e) {}
          return !1;
        }
        function w(e) {
          if (!H || !e || "object" != typeof e) return !1;
          try {
            H.call(e);
            try {
              I.call(e);
            } catch (e) {
              return !0;
            }
            return e instanceof Set;
          } catch (e) {}
          return !1;
        }
        function x(e) {
          if (!J || !e || "object" != typeof e) return !1;
          try {
            J.call(e, J);
            try {
              U.call(e, U);
            } catch (e) {
              return !0;
            }
            return e instanceof WeakSet;
          } catch (e) {}
          return !1;
        }
        function S(e) {
          return (
            !(!e || "object" != typeof e) &&
            (("undefined" != typeof HTMLElement && e instanceof HTMLElement) ||
              ("string" == typeof e.nodeName &&
                "function" == typeof e.getAttribute))
          );
        }
        function E(e, t) {
          if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength,
              a = "... " + r + " more character" + (r > 1 ? "s" : "");
            return E(e.slice(0, t.maxStringLength), t) + a;
          }
          return n(
            e.replace(/(['\\])/g, "\\$1").replace(/[\x00-\x1f]/g, k),
            "single",
            t
          );
        }
        function k(e) {
          var t = e.charCodeAt(0),
            r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
          return r
            ? "\\" + r
            : "\\x" + (t < 16 ? "0" : "") + t.toString(16).toUpperCase();
        }
        function P(e) {
          return "Object(" + e + ")";
        }
        function A(e) {
          return e + " { ? }";
        }
        function T(e, t, r, n) {
          return e + " (" + t + ") {" + (n ? D(r, n) : r.join(", ")) + "}";
        }
        function O(e) {
          for (var t = 0; t < e.length; t++) if (v(e[t], "\n") >= 0) return !1;
          return !0;
        }
        function j(e, t) {
          var r;
          if ("\t" === e.indent) r = "\t";
          else {
            if (!("number" == typeof e.indent && e.indent > 0)) return null;
            r = Array(e.indent + 1).join(" ");
          }
          return { base: r, prev: Array(t + 1).join(r) };
        }
        function D(e, t) {
          if (0 === e.length) return "";
          var r = "\n" + t.prev + t.base;
          return r + e.join("," + r) + "\n" + t.prev;
        }
        function M(e, t) {
          var r = i(e),
            n = [];
          if (r) {
            n.length = e.length;
            for (var a = 0; a < e.length; a++) n[a] = h(e, a) ? t(e[a], e) : "";
          }
          var o,
            s = "function" == typeof X ? X(e) : [];
          if (ee) {
            o = {};
            for (var u = 0; u < s.length; u++) o["$" + s[u]] = s[u];
          }
          for (var l in e)
            h(e, l) &&
              ((r && String(Number(l)) === l && l < e.length) ||
                (ee && o["$" + l] instanceof Symbol) ||
                (/[^\w$]/.test(l)
                  ? n.push(t(l, e) + ": " + t(e[l], e))
                  : n.push(l + ": " + t(e[l], e))));
          if ("function" == typeof X)
            for (var d = 0; d < s.length; d++)
              te.call(e, s[d]) && n.push("[" + t(s[d]) + "]: " + t(e[s[d]], e));
          return n;
        }
        var q = "function" == typeof Map && Map.prototype,
          R =
            Object.getOwnPropertyDescriptor && q
              ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
              : null,
          I = q && R && "function" == typeof R.get ? R.get : null,
          L = q && Map.prototype.forEach,
          N = "function" == typeof Set && Set.prototype,
          C =
            Object.getOwnPropertyDescriptor && N
              ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
              : null,
          H = N && C && "function" == typeof C.get ? C.get : null,
          F = N && Set.prototype.forEach,
          B = "function" == typeof WeakMap && WeakMap.prototype,
          U = B ? WeakMap.prototype.has : null,
          W = "function" == typeof WeakSet && WeakSet.prototype,
          J = W ? WeakSet.prototype.has : null,
          G = "function" == typeof WeakRef && WeakRef.prototype,
          V = G ? WeakRef.prototype.deref : null,
          Q = Boolean.prototype.valueOf,
          z = Object.prototype.toString,
          $ = Function.prototype.toString,
          Y = String.prototype.match,
          K = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
          X = Object.getOwnPropertySymbols,
          Z =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? Symbol.prototype.toString
              : null,
          ee =
            "function" == typeof Symbol && "object" == typeof Symbol.iterator,
          te = Object.prototype.propertyIsEnumerable,
          re =
            ("function" == typeof Reflect
              ? Reflect.getPrototypeOf
              : Object.getPrototypeOf) ||
            ([].__proto__ === Array.prototype
              ? function (e) {
                  return e.__proto__;
                }
              : null),
          ne = r(53).custom,
          ae = ne && f(ne) ? ne : null,
          ie =
            "function" == typeof Symbol && void 0 !== Symbol.toStringTag
              ? Symbol.toStringTag
              : null;
        e.exports = function e(t, r, k, q) {
          function R(t, r, n) {
            if ((r && ((q = q.slice()), q.push(r)), n)) {
              var a = { depth: N.depth };
              return (
                h(N, "quoteStyle") && (a.quoteStyle = N.quoteStyle),
                e(t, a, k + 1, q)
              );
            }
            return e(t, N, k + 1, q);
          }
          var N = r || {};
          if (
            h(N, "quoteStyle") &&
            "single" !== N.quoteStyle &&
            "double" !== N.quoteStyle
          )
            throw new TypeError(
              'option "quoteStyle" must be "single" or "double"'
            );
          if (
            h(N, "maxStringLength") &&
            ("number" == typeof N.maxStringLength
              ? N.maxStringLength < 0 && N.maxStringLength !== 1 / 0
              : null !== N.maxStringLength)
          )
            throw new TypeError(
              'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
            );
          var C = !h(N, "customInspect") || N.customInspect;
          if ("boolean" != typeof C && "symbol" !== C)
            throw new TypeError(
              "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
            );
          if (
            h(N, "indent") &&
            null !== N.indent &&
            "\t" !== N.indent &&
            !(parseInt(N.indent, 10) === N.indent && N.indent > 0)
          )
            throw new TypeError(
              'options "indent" must be "\\t", an integer > 0, or `null`'
            );
          if (void 0 === t) return "undefined";
          if (null === t) return "null";
          if ("boolean" == typeof t) return t ? "true" : "false";
          if ("string" == typeof t) return E(t, N);
          if ("number" == typeof t)
            return 0 === t ? (1 / 0 / t > 0 ? "0" : "-0") : String(t);
          if ("bigint" == typeof t) return String(t) + "n";
          var B = void 0 === N.depth ? 5 : N.depth;
          if (
            (void 0 === k && (k = 0), k >= B && B > 0 && "object" == typeof t)
          )
            return i(t) ? "[Array]" : "[Object]";
          var U = j(N, k);
          if (void 0 === q) q = [];
          else if (v(q, t) >= 0) return "[Circular]";
          if ("function" == typeof t) {
            var W = _(t),
              J = M(t, R);
            return (
              "[Function" +
              (W ? ": " + W : " (anonymous)") +
              "]" +
              (J.length > 0 ? " { " + J.join(", ") + " }" : "")
            );
          }
          if (f(t)) {
            var G = ee
              ? String(t).replace(/^(Symbol\(.*\))_[^)]*$/, "$1")
              : Z.call(t);
            return "object" != typeof t || ee ? G : P(G);
          }
          if (S(t)) {
            for (
              var V = "<" + String(t.nodeName).toLowerCase(),
                z = t.attributes || [],
                $ = 0;
              $ < z.length;
              $++
            )
              V += " " + z[$].name + "=" + n(a(z[$].value), "double", N);
            return (
              (V += ">"),
              t.childNodes && t.childNodes.length && (V += "..."),
              (V += "</" + String(t.nodeName).toLowerCase() + ">")
            );
          }
          if (i(t)) {
            if (0 === t.length) return "[]";
            var Y = M(t, R);
            return U && !O(Y)
              ? "[" + D(Y, U) + "]"
              : "[ " + Y.join(", ") + " ]";
          }
          if (u(t)) {
            var X = M(t, R);
            return 0 === X.length
              ? "[" + String(t) + "]"
              : "{ [" + String(t) + "] " + X.join(", ") + " }";
          }
          if ("object" == typeof t && C) {
            if (ae && "function" == typeof t[ae]) return t[ae]();
            if ("symbol" !== C && "function" == typeof t.inspect)
              return t.inspect();
          }
          if (m(t)) {
            var te = [];
            return (
              L.call(t, function (e, r) {
                te.push(R(r, t, !0) + " => " + R(e, t));
              }),
              T("Map", I.call(t), te, U)
            );
          }
          if (w(t)) {
            var ne = [];
            return (
              F.call(t, function (e) {
                ne.push(R(e, t));
              }),
              T("Set", H.call(t), ne, U)
            );
          }
          if (b(t)) return A("WeakMap");
          if (x(t)) return A("WeakSet");
          if (g(t)) return A("WeakRef");
          if (d(t)) return P(R(Number(t)));
          if (p(t)) return P(R(K.call(t)));
          if (c(t)) return P(Q.call(t));
          if (l(t)) return P(R(String(t)));
          if (!o(t) && !s(t)) {
            var oe = M(t, R),
              se = re
                ? re(t) === Object.prototype
                : t instanceof Object || t.constructor === Object,
              ue = t instanceof Object ? "" : "null prototype",
              le =
                !se && ie && Object(t) === t && ie in t
                  ? y(t).slice(8, -1)
                  : ue
                  ? "Object"
                  : "",
              de =
                se || "function" != typeof t.constructor
                  ? ""
                  : t.constructor.name
                  ? t.constructor.name + " "
                  : "",
              ce =
                de +
                (le || ue
                  ? "[" + [].concat(le || [], ue || []).join(": ") + "] "
                  : "");
            return 0 === oe.length
              ? ce + "{}"
              : U
              ? ce + "{" + D(oe, U) + "}"
              : ce + "{ " + oe.join(", ") + " }";
          }
          return String(t);
        };
        var oe =
          Object.prototype.hasOwnProperty ||
          function (e) {
            return e in this;
          };
      },
      function (e, t) {},
      function (e, t, r) {
        "use strict";
        var n = r(16),
          a = Object.prototype.hasOwnProperty,
          i = Array.isArray,
          o = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: n.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1,
          },
          s = function (e) {
            return e.replace(/&#(\d+);/g, function (e, t) {
              return String.fromCharCode(parseInt(t, 10));
            });
          },
          u = function (e, t) {
            return e && "string" == typeof e && t.comma && e.indexOf(",") > -1
              ? e.split(",")
              : e;
          },
          l = function (e, t) {
            var r,
              l = {},
              d = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
              c = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
              f = d.split(t.delimiter, c),
              p = -1,
              h = t.charset;
            if (t.charsetSentinel)
              for (r = 0; r < f.length; ++r)
                0 === f[r].indexOf("utf8=") &&
                  ("utf8=%E2%9C%93" === f[r]
                    ? (h = "utf-8")
                    : "utf8=%26%2310003%3B" === f[r] && (h = "iso-8859-1"),
                  (p = r),
                  (r = f.length));
            for (r = 0; r < f.length; ++r)
              if (r !== p) {
                var y,
                  _,
                  v = f[r],
                  m = v.indexOf("]="),
                  b = -1 === m ? v.indexOf("=") : m + 1;
                -1 === b
                  ? ((y = t.decoder(v, o.decoder, h, "key")),
                    (_ = t.strictNullHandling ? null : ""))
                  : ((y = t.decoder(v.slice(0, b), o.decoder, h, "key")),
                    (_ = n.maybeMap(u(v.slice(b + 1), t), function (e) {
                      return t.decoder(e, o.decoder, h, "value");
                    }))),
                  _ &&
                    t.interpretNumericEntities &&
                    "iso-8859-1" === h &&
                    (_ = s(_)),
                  v.indexOf("[]=") > -1 && (_ = i(_) ? [_] : _),
                  a.call(l, y) ? (l[y] = n.combine(l[y], _)) : (l[y] = _);
              }
            return l;
          },
          d = function (e, t, r, n) {
            for (var a = n ? t : u(t, r), i = e.length - 1; i >= 0; --i) {
              var o,
                s = e[i];
              if ("[]" === s && r.parseArrays) o = [].concat(a);
              else {
                o = r.plainObjects ? Object.create(null) : {};
                var l =
                    "[" === s.charAt(0) && "]" === s.charAt(s.length - 1)
                      ? s.slice(1, -1)
                      : s,
                  d = parseInt(l, 10);
                r.parseArrays || "" !== l
                  ? !isNaN(d) &&
                    s !== l &&
                    String(d) === l &&
                    d >= 0 &&
                    r.parseArrays &&
                    d <= r.arrayLimit
                    ? ((o = []), (o[d] = a))
                    : (o[l] = a)
                  : (o = { 0: a });
              }
              a = o;
            }
            return a;
          },
          c = function (e, t, r, n) {
            if (e) {
              var i = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                o = /(\[[^[\]]*])/,
                s = /(\[[^[\]]*])/g,
                u = r.depth > 0 && o.exec(i),
                l = u ? i.slice(0, u.index) : i,
                c = [];
              if (l) {
                if (
                  !r.plainObjects &&
                  a.call(Object.prototype, l) &&
                  !r.allowPrototypes
                )
                  return;
                c.push(l);
              }
              for (
                var f = 0;
                r.depth > 0 && null !== (u = s.exec(i)) && f < r.depth;

              ) {
                if (
                  ((f += 1),
                  !r.plainObjects &&
                    a.call(Object.prototype, u[1].slice(1, -1)) &&
                    !r.allowPrototypes)
                )
                  return;
                c.push(u[1]);
              }
              return u && c.push("[" + i.slice(u.index) + "]"), d(c, t, r, n);
            }
          },
          f = function (e) {
            if (!e) return o;
            if (
              null !== e.decoder &&
              void 0 !== e.decoder &&
              "function" != typeof e.decoder
            )
              throw new TypeError("Decoder has to be a function.");
            if (
              void 0 !== e.charset &&
              "utf-8" !== e.charset &&
              "iso-8859-1" !== e.charset
            )
              throw new TypeError(
                "The charset option must be either utf-8, iso-8859-1, or undefined"
              );
            var t = void 0 === e.charset ? o.charset : e.charset;
            return {
              allowDots: void 0 === e.allowDots ? o.allowDots : !!e.allowDots,
              allowPrototypes:
                "boolean" == typeof e.allowPrototypes
                  ? e.allowPrototypes
                  : o.allowPrototypes,
              allowSparse:
                "boolean" == typeof e.allowSparse
                  ? e.allowSparse
                  : o.allowSparse,
              arrayLimit:
                "number" == typeof e.arrayLimit ? e.arrayLimit : o.arrayLimit,
              charset: t,
              charsetSentinel:
                "boolean" == typeof e.charsetSentinel
                  ? e.charsetSentinel
                  : o.charsetSentinel,
              comma: "boolean" == typeof e.comma ? e.comma : o.comma,
              decoder: "function" == typeof e.decoder ? e.decoder : o.decoder,
              delimiter:
                "string" == typeof e.delimiter || n.isRegExp(e.delimiter)
                  ? e.delimiter
                  : o.delimiter,
              depth:
                "number" == typeof e.depth || !1 === e.depth
                  ? +e.depth
                  : o.depth,
              ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
              interpretNumericEntities:
                "boolean" == typeof e.interpretNumericEntities
                  ? e.interpretNumericEntities
                  : o.interpretNumericEntities,
              parameterLimit:
                "number" == typeof e.parameterLimit
                  ? e.parameterLimit
                  : o.parameterLimit,
              parseArrays: !1 !== e.parseArrays,
              plainObjects:
                "boolean" == typeof e.plainObjects
                  ? e.plainObjects
                  : o.plainObjects,
              strictNullHandling:
                "boolean" == typeof e.strictNullHandling
                  ? e.strictNullHandling
                  : o.strictNullHandling,
            };
          };
        e.exports = function (e, t) {
          var r = f(t);
          if ("" === e || null === e || void 0 === e)
            return r.plainObjects ? Object.create(null) : {};
          for (
            var a = "string" == typeof e ? l(e, r) : e,
              i = r.plainObjects ? Object.create(null) : {},
              o = Object.keys(a),
              s = 0;
            s < o.length;
            ++s
          ) {
            var u = o[s],
              d = c(u, a[u], r, "string" == typeof e);
            i = n.merge(i, d, r);
          }
          return !0 === r.allowSparse ? i : n.compact(i);
        };
      },
      function (e, t, r) {
        "use strict";
        var n,
          a,
          i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                };
        !(function (o) {
          var s = !1;
          if (
            ((n = o),
            void 0 !== (a = "function" == typeof n ? n.call(t, r, t, e) : n) &&
              (e.exports = a),
            (s = !0),
            "object" === i(t) && ((e.exports = o()), (s = !0)),
            !s)
          ) {
            var u = window.Cookies,
              l = (window.Cookies = o());
            l.noConflict = function () {
              return (window.Cookies = u), l;
            };
          }
        })(function () {
          function e(r) {
            function n(e, a, i) {
              var o;
              if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                  if (
                    ((i = t({ path: "/" }, n.defaults, i)),
                    "number" == typeof i.expires)
                  ) {
                    var s = new Date();
                    s.setMilliseconds(s.getMilliseconds() + 864e5 * i.expires),
                      (i.expires = s);
                  }
                  try {
                    (o = JSON.stringify(a)), /^[\{\[]/.test(o) && (a = o);
                  } catch (e) {}
                  return (
                    (a = r.write
                      ? r.write(a, e)
                      : encodeURIComponent(String(a)).replace(
                          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                          decodeURIComponent
                        )),
                    (e = encodeURIComponent(String(e))),
                    (e = e.replace(
                      /%(23|24|26|2B|5E|60|7C)/g,
                      decodeURIComponent
                    )),
                    (e = e.replace(/[\(\)]/g, escape)),
                    (document.cookie = [
                      e,
                      "=",
                      a,
                      i.expires ? "; expires=" + i.expires.toUTCString() : "",
                      i.path ? "; path=" + i.path : "",
                      i.domain ? "; domain=" + i.domain : "",
                      i.secure ? "; secure" : "",
                    ].join(""))
                  );
                }
                e || (o = {});
                for (
                  var u = document.cookie ? document.cookie.split("; ") : [],
                    l = /(%[0-9A-Z]{2})+/g,
                    d = 0;
                  d < u.length;
                  d++
                ) {
                  var c = u[d].split("="),
                    f = c.slice(1).join("=");
                  '"' === f.charAt(0) && (f = f.slice(1, -1));
                  try {
                    var p = c[0].replace(l, decodeURIComponent);
                    if (
                      ((f = r.read
                        ? r.read(f, p)
                        : r(f, p) || f.replace(l, decodeURIComponent)),
                      this.json)
                    )
                      try {
                        f = JSON.parse(f);
                      } catch (e) {}
                    if (e === p) {
                      o = f;
                      break;
                    }
                    e || (o[p] = f);
                  } catch (e) {}
                }
                return o;
              }
            }
            return (
              (n.set = n),
              (n.get = function (e) {
                return n.call(n, e);
              }),
              (n.getJSON = function () {
                return n.apply({ json: !0 }, [].slice.call(arguments));
              }),
              (n.defaults = {}),
              (n.remove = function (e, r) {
                n(e, "", t(r, { expires: -1 }));
              }),
              (n.withConverter = e),
              n
            );
          }
          var t = function () {
            for (var e = 0, t = {}; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r) t[n] = r[n];
            }
            return t;
          };
          return e(function () {});
        });
      },
      function (e, t, r) {
        "use strict";
        function n(e, t) {
          return (
            (e = e || ""),
            (t = t || "litix.io"),
            e.match(/^[a-z0-9]+$/)
              ? "https://" + e + "." + t
              : "https://img.litix.io/a.gif"
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(0),
          a = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n),
          i = function () {
            var e = void 0;
            switch (o()) {
              case "cellular":
                e = "cellular";
                break;
              case "ethernet":
                e = "wired";
                break;
              case "wifi":
                e = "wifi";
                break;
              case void 0:
                break;
              default:
                e = "other";
            }
            return e;
          },
          o = function () {
            var e = a.default.navigator,
              t = e && (e.connection || e.mozConnection || e.webkitConnection);
            return t && t.type;
          };
        t.default = i;
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = r(0),
          i = n(a),
          o = r(4),
          s = n(o),
          u = r(59),
          l = n(u),
          d = r(1),
          c = n(d),
          f = r(17),
          p = n(f),
          h =
            !!i.default.XMLHttpRequest &&
            "withCredentials" in new i.default.XMLHttpRequest(),
          y = {
            maxBeaconSize: 300,
            maxQueueLength: 3600,
            baseTimeBetweenBeacons: 5e3,
          },
          _ = function (e, t) {
            (this._beaconUrl = e || "https://img.litix.io"),
              (this._eventQueue = []),
              (this._postInFlight = !1),
              (this._failureCount = 0),
              (this._sendTimeout = !1),
              (this._options = (0, c.default)({}, y, t));
          };
        (_.prototype.queueEvent = function (e, t) {
          var r = (0, c.default)({}, t);
          return h
            ? (this._eventQueue.length <= this._options.maxQueueLength ||
                "eventrateexceeded" === e) &&
                (this._eventQueue.push(r),
                this._sendTimeout || this._startBeaconSending(),
                this._eventQueue.length <= this._options.maxQueueLength)
            : (l.default.send(this._beaconUrl, r), !0);
        }),
          (_.prototype.flushEvents = function () {
            h &&
              (this._eventQueue.length && this._sendBeaconQueue(),
              this._startBeaconSending());
          }),
          (_.prototype.destroy = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            (this.destroyed = !0),
              e ? this._clearBeaconQueue() : this.flushEvents(),
              i.default.clearTimeout(this._sendTimeout);
          }),
          (_.prototype._clearBeaconQueue = function () {
            var e = i.default.navigator,
              t =
                this._eventQueue.length > this._options.maxBeaconSize
                  ? this._eventQueue.length - this._options.maxBeaconSize
                  : 0,
              r = this._eventQueue.slice(t);
            if (
              (t > 0 &&
                (0, c.default)(
                  r[r.length - 1],
                  (0, p.default)({ mux_view_message: "event queue truncated" })
                ),
              e.sendBeacon)
            )
              e.sendBeacon(this._beaconUrl, JSON.stringify({ events: r }));
            else if (i.default.XMLHttpRequest) {
              var n = new i.default.XMLHttpRequest();
              n.open("POST", this._beaconUrl),
                n.setRequestHeader("Content-Type", "application/json"),
                n.send(JSON.stringify({ events: r }));
            } else l.default.send(this._beaconUrl, r[r.length - 1]);
          }),
          (_.prototype._sendBeaconQueue = function () {
            var e = this;
            if (i.default.XMLHttpRequest && !this._postInFlight) {
              var t = new i.default.XMLHttpRequest(),
                r = this._eventQueue.slice(0, this._options.maxBeaconSize);
              (this._eventQueue = this._eventQueue.slice(
                this._options.maxBeaconSize
              )),
                (this._postInFlight = !0),
                (t.onreadystatechange = function () {
                  4 === t.readyState &&
                    (200 !== t.status
                      ? ((e._eventQueue = r.concat(e._eventQueue)),
                        (e._failureCount += 1),
                        s.default.info("Error sending beacon: " + t.status),
                        s.default.info(t.responseText))
                      : (e._failureCount = 0),
                    (e._postInFlight = !1));
                }),
                t.open("POST", this._beaconUrl),
                t.setRequestHeader("Content-Type", "application/json"),
                t.send(JSON.stringify({ events: r }));
            }
          }),
          (_.prototype._getNextBeaconTime = function () {
            if (!this._failureCount)
              return this._options.baseTimeBetweenBeacons;
            var e = Math.pow(2, this._failureCount - 1);
            return (
              (1 + (e *= Math.random())) * this._options.baseTimeBetweenBeacons
            );
          }),
          (_.prototype._startBeaconSending = function () {
            var e = this;
            i.default.clearTimeout(this._sendTimeout),
              this.destroyed ||
                (this._sendTimeout = i.default.setTimeout(function () {
                  e._eventQueue.length && e._sendBeaconQueue(),
                    e._startBeaconSending();
                }, this._getNextBeaconTime()));
          }),
          (t.default = _);
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = r(15),
          i = n(a),
          o = r(0),
          s = n(o),
          u = {};
        (u.send = function (e, t) {
          function r() {
            n.src = o + (a ? "&rc=" + a : "");
          }
          var n = new Image(),
            a = 0,
            o = e + "?" + i.default.stringify(t);
          return (
            n.addEventListener("error", function () {
              a > 3 ||
                s.default.setTimeout(function () {
                  a++, r();
                }, 5e3 * a);
            }),
            r(),
            n
          );
        }),
          (t.default = u);
      },
      function (e, t, r) {
        "use strict";
        function n() {
          function e(e, t) {
            var r = t.request_start,
              u = t.request_response_start,
              l = t.request_response_end,
              d = t.request_bytes_loaded;
            o++;
            var c = void 0,
              f = void 0;
            if (
              (u ? ((c = u - r), (f = l - u)) : (f = l - r), f > 0 && d > 0)
            ) {
              var p = (d / f) * 8e3;
              s++,
                (a += d),
                (i += f),
                (this.data.view_min_request_throughput = Math.min(
                  this.data.view_min_request_throughput || 1 / 0,
                  p
                )),
                (this.data.view_average_request_throughput = (a / i) * 8e3),
                (this.data.view_request_count = o),
                c > 0 &&
                  ((n += c),
                  (this.data.view_max_request_latency = Math.max(
                    this.data.view_max_request_latency || 0,
                    c
                  )),
                  (this.data.view_average_request_latency = n / s));
            }
          }
          function t(e, t) {
            o++,
              u++,
              (this.data.view_request_count = o),
              (this.data.view_request_failed_count = u);
          }
          function r(e, t) {
            o++,
              l++,
              (this.data.view_request_count = o),
              (this.data.view_request_canceled_count = l);
          }
          var n = 0,
            a = 0,
            i = 0,
            o = 0,
            s = 0,
            u = 0,
            l = 0;
          this.on("requestcompleted", e),
            this.on("requestfailed", t),
            this.on("requestcanceled", r);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
      },
      function (e, t, r) {
        "use strict";
        function n(e, t, r) {
          var n = (0, u.findMediaElement)(t),
            o = i(n, 3),
            c = o[0],
            f = o[1],
            p = o[2],
            h = e.log,
            y = e.utils.getComputedStyle,
            _ = e.utils.secondsToMs,
            v = { automaticErrorTracking: !0 };
          return c
            ? "video" !== p && "audio" !== p
              ? h.error("The element of `" + f + "` was not a media element.")
              : ((r = (0, s.default)(v, r)),
                (r.data = (0, s.default)(
                  {
                    player_software: "HTML5 Video Element",
                    player_software_version: "No Versions",
                    player_mux_plugin_name: "VideoElementMonitor",
                    player_mux_plugin_version: "4.1.1",
                  },
                  r.data
                )),
                (r.getPlayheadTime = function () {
                  return _(c.currentTime);
                }),
                (r.getStateData = function () {
                  var e = this.hlsjs && this.hlsjs.url,
                    t =
                      this.dashjs &&
                      a("function" === this.dashjs.getSource) &&
                      this.dashjs.getSource();
                  return {
                    player_is_paused: c.paused,
                    player_playhead_time: _(c.currentTime),
                    player_width: parseInt(y(c, "width")),
                    player_height: parseInt(y(c, "height")),
                    player_autoplay_on: c.autoplay,
                    player_preload_on: c.preload,
                    video_poster_url: c.poster,
                    video_source_url: e || t || c.currentSrc,
                    video_source_duration: _(c.duration),
                    video_source_height: c.videoHeight,
                    video_source_width: c.videoWidth,
                  };
                }),
                (c.mux = c.mux || {}),
                (c.mux.emit = function (t, r) {
                  e.emit(f, t, r);
                }),
                (c.mux.destroy = function () {
                  Object.keys(c.mux.listeners).forEach(function (e) {
                    c.removeEventListener(e, c.mux.listeners[e], !1);
                  }),
                    delete c.mux.listeners,
                    e.emit(f, "destroy");
                }),
                (c.mux.swapElement = function (t) {
                  var r = (0, u.findMediaElement)(t),
                    n = i(r, 3),
                    a = n[0],
                    o = n[1],
                    l = n[2];
                  return a
                    ? "video" !== l && "audio" !== l
                      ? e.log.error(
                          "The element of `" + o + "` was not a media element."
                        )
                      : ((a.muxId = c.muxId),
                        delete c.muxId,
                        (a.mux = a.mux || {}),
                        (a.mux.listeners = (0, s.default)({}, c.mux.listeners)),
                        delete c.mux.listeners,
                        Object.keys(a.mux.listeners).forEach(function (e) {
                          c.removeEventListener(e, a.mux.listeners[e], !1),
                            a.addEventListener(e, a.mux.listeners[e], !1);
                        }),
                        (a.mux.swapElement = c.mux.swapElement),
                        (a.mux.destroy = c.mux.destroy),
                        delete c.mux,
                        void (c = a))
                    : e.log.error(
                        "No element was found with the `" +
                          o +
                          "` query selector."
                      );
                }),
                (c.mux.addHLSJS = function (t) {
                  e.addHLSJS(f, t);
                }),
                (c.mux.addDashJS = function (t) {
                  e.addDashJS(f, t);
                }),
                (c.mux.removeHLSJS = function () {
                  e.removeHLSJS(f);
                }),
                (c.mux.removeDashJS = function () {
                  e.removeDashJS(f);
                }),
                e.init(f, r),
                e.emit(f, "playerready"),
                c.paused ||
                  (e.emit(f, "play"), c.readyState > 2 && e.emit(f, "playing")),
                (c.mux.listeners = {}),
                void l.forEach(function (t) {
                  ("error" !== t || r.automaticErrorTracking) &&
                    ((c.mux.listeners[t] = function () {
                      var r = {};
                      "error" === t &&
                        ((r.player_error_code = c.error && c.error.code),
                        (r.player_error_message = c.error && d[c.error.code])),
                        e.emit(f, t, r);
                    }),
                    c.addEventListener(t, c.mux.listeners[t], !1));
                }))
            : h.error(
                "No element was found with the `" + f + "` query selector."
              );
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          i = (function () {
            function e(e, t) {
              var r = [],
                n = !0,
                a = !1,
                i = void 0;
              try {
                for (
                  var o, s = e[Symbol.iterator]();
                  !(n = (o = s.next()).done) &&
                  (r.push(o.value), !t || r.length !== t);
                  n = !0
                );
              } catch (e) {
                (a = !0), (i = e);
              } finally {
                try {
                  !n && s.return && s.return();
                } finally {
                  if (a) throw i;
                }
              }
              return r;
            }
            return function (t, r) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, r);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })();
        t.default = n;
        var o = r(1),
          s = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(o),
          u = r(12),
          l = [
            "loadstart",
            "pause",
            "play",
            "playing",
            "seeking",
            "seeked",
            "timeupdate",
            "ratechange",
            "stalled",
            "waiting",
            "error",
            "ended",
          ],
          d = {
            1: "MEDIA_ERR_ABORTED",
            2: "MEDIA_ERR_NETWORK",
            3: "MEDIA_ERR_DECODE",
            4: "MEDIA_ERR_SRC_NOT_SUPPORTED",
          };
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = r(63),
          i = n(a),
          o = r(2),
          s = n(o),
          u = r(64),
          l = n(u),
          d = r(65),
          c = n(d),
          f = r(1),
          p = n(f),
          h = r(8),
          y = n(h),
          _ = r(5),
          v = r(3),
          m = n(v),
          b = {};
        (b.safeCall = i.default),
          (b.safeIncrement = s.default),
          (b.getComputedStyle = l.default),
          (b.secondsToMs = c.default),
          (b.assign = p.default),
          (b.headersStringToObject = y.default),
          (b.extractHostnameAndDomain = _.extractHostnameAndDomain),
          (b.extractHostname = _.extractHostname),
          (b.now = m.default.now),
          (t.default = b);
      },
      function (e, t, r) {
        "use strict";
        function n(e, t, r, n) {
          var a = n;
          if (e && "function" == typeof e[t])
            try {
              a = e[t].apply(e, r);
            } catch (e) {
              i.default.info("safeCall error", e);
            }
          return a;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
        var a = r(4),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(a);
      },
      function (e, t, r) {
        "use strict";
        function n(e, t) {
          if (
            e &&
            t &&
            i.default &&
            "function" == typeof i.default.getComputedStyle
          ) {
            var r = void 0;
            return (
              o && o.has(e) && (r = o.get(e)),
              r ||
                ((r = i.default.getComputedStyle(e, null)), o && o.set(e, r)),
              r.getPropertyValue(t)
            );
          }
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
        var a = r(0),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(a),
          o = void 0;
        i.default && i.default.WeakMap && (o = new WeakMap());
      },
      function (e, t, r) {
        "use strict";
        function n(e) {
          return Math.floor(1e3 * e);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
      },
    ]);
  });
})();
