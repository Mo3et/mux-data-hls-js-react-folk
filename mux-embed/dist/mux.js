/**
 * mux-embed
 * @version 3.4.3
 * @copyright 2020 Mux, Inc
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
  })(this, function () {
    return (function (e) {
      function t(a) {
        if (r[a]) return r[a].exports;
        var i = (r[a] = { i: a, l: !1, exports: {} });
        return e[a].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
      }
      var r = {};
      return (
        (t.m = e),
        (t.c = r),
        (t.d = function (e, r, a) {
          t.o(e, r) ||
            Object.defineProperty(e, r, {
              configurable: !1,
              enumerable: !0,
              get: a,
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
        function a(e, t) {
          for (var r = -1, a = Array(e); ++r < e; ) a[r] = t(r);
          return a;
        }
        function i(e, t) {
          var r = R(e) || h(e) ? a(e.length, String) : [],
            i = r.length,
            n = !!i;
          for (var o in e)
            (!t && !O.call(e, o)) ||
              (n && ("length" == o || l(o, i))) ||
              r.push(o);
          return r;
        }
        function n(e, t, r) {
          var a = e[t];
          (O.call(e, t) && f(a, r) && (void 0 !== r || t in e)) || (e[t] = r);
        }
        function o(e) {
          if (!c(e)) return A(e);
          var t = [];
          for (var r in Object(e))
            O.call(e, r) && "constructor" != r && t.push(r);
          return t;
        }
        function s(e, t) {
          return (
            (t = q(void 0 === t ? e.length - 1 : t, 0)),
            function () {
              for (
                var a = arguments, i = -1, n = q(a.length - t, 0), o = Array(n);
                ++i < n;

              )
                o[i] = a[t + i];
              i = -1;
              for (var s = Array(t + 1); ++i < t; ) s[i] = a[i];
              return (s[t] = o), r(e, this, s);
            }
          );
        }
        function u(e, t, r, a) {
          r || (r = {});
          for (var i = -1, o = t.length; ++i < o; ) {
            var s = t[i],
              u = a ? a(r[s], e[s], s, r, e) : void 0;
            n(r, s, void 0 === u ? e[s] : u);
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
          var a = typeof t;
          return (
            !!("number" == a
              ? p(r) && l(t, r.length)
              : "string" == a && t in r) && f(r[t], e)
          );
        }
        function c(e) {
          var t = e && e.constructor;
          return e === (("function" == typeof t && t.prototype) || E);
        }
        function f(e, t) {
          return e === t || (e !== e && t !== t);
        }
        function h(e) {
          return (
            _(e) &&
            O.call(e, "callee") &&
            (!P.call(e, "callee") || M.call(e) == x)
          );
        }
        function p(e) {
          return null != e && y(e.length) && !v(e);
        }
        function _(e) {
          return b(e) && p(e);
        }
        function v(e) {
          var t = m(e) ? M.call(e) : "";
          return t == S || t == T;
        }
        function y(e) {
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
          return p(e) ? i(e) : o(e);
        }
        var w = 9007199254740991,
          x = "[object Arguments]",
          S = "[object Function]",
          T = "[object GeneratorFunction]",
          k = /^(?:0|[1-9]\d*)$/,
          E = Object.prototype,
          O = E.hasOwnProperty,
          M = E.toString,
          P = E.propertyIsEnumerable,
          A = (function (e, t) {
            return function (r) {
              return e(t(r));
            };
          })(Object.keys, Object),
          q = Math.max,
          D = !P.call({ valueOf: 1 }, "valueOf"),
          R = Array.isArray,
          j = (function (e) {
            return s(function (t, r) {
              var a = -1,
                i = r.length,
                n = i > 1 ? r[i - 1] : void 0,
                o = i > 2 ? r[2] : void 0;
              for (
                n = e.length > 3 && "function" == typeof n ? (i--, n) : void 0,
                  o && d(r[0], r[1], o) && ((n = i < 3 ? void 0 : n), (i = 1)),
                  t = Object(t);
                ++a < i;

              ) {
                var s = r[a];
                s && e(t, s, a, n);
              }
              return t;
            });
          })(function (e, t) {
            if (D || c(t) || p(t)) return void u(t, g(t), e);
            for (var r in t) O.call(t, r) && n(e, r, t[r]);
          });
        e.exports = j;
      },
      function (e, t, r) {
        "use strict";
        function a(e, t, r) {
          (r = void 0 === r ? 1 : r), (e[t] = e[t] || 0), (e[t] += r);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = r(0),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(a),
          n = {};
        (n.now = function () {
          var e = i.default.performance,
            t = e && e.timing;
          return t &&
            "number" == typeof t.navigationStart &&
            "function" == typeof e.now
            ? t.navigationStart + e.now()
            : Date.now();
        }),
          (t.default = n);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = r(20),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(a),
          n = i.default.methodFactory;
        (i.default.methodFactory = function (e, t, r) {
          var a = n(e, t, r);
          return function () {
            for (var e = ["[mux]"], t = 0; t < arguments.length; t++)
              e.push(arguments[t]);
            a.apply(void 0, e);
          };
        }),
          i.default.setLevel(i.default.getLevel()),
          (t.default = i.default);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = function (e) {
            return n(e)[0];
          },
          i = function (e) {
            return n(e)[1];
          },
          n = function (e) {
            if ("string" != typeof e || "" === e) return ["localhost"];
            var t =
                /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
              r = e.match(t) || [],
              a = r[4],
              i = void 0;
            return a && (i = (a.match(/[^\.]+\.[^\.]+$/) || [])[0]), [a, i];
          };
        (t.extractHostnameAndDomain = n),
          (t.extractHostname = a),
          (t.extractDomain = i);
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
        var a = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                var t = (16 * Math.random()) | 0;
                return ("x" === e ? t : (3 & t) | 8).toString(16);
              }
            );
          },
          i = function () {
            return (
              "000000" + ((Math.random() * Math.pow(36, 6)) << 0).toString(36)
            ).slice(-6);
          };
        (t.generateUUID = a), (t.generateShortID = i);
      },
      function (e, t, r) {
        "use strict";
        function a(e) {
          (e = e || ""), (e = e.match(/[^\r\n]+/g) || []);
          for (var t = {}, r = 0; r < e.length; r++) {
            var a = e[r].split(/\s*:\s*(.+)/);
            3 === a.length && (t[a[0]] = a[1]);
          }
          return t;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.findMediaElement = t.getMuxPlayerId = void 0);
        var a = r(7),
          i = function (e) {
            return e && void 0 !== e.nodeName
              ? (e.muxId || (e.muxId = e.id || (0, a.generateShortID)()),
                e.muxId)
              : e;
          },
          n = function (e) {
            var t = void 0;
            return (
              e && void 0 !== e.nodeName
                ? ((t = e), (e = i(t)))
                : (t = document.querySelector(e)),
              [t, e, t && t.nodeName ? t.nodeName.toLowerCase() : ""]
            );
          };
        (t.getMuxPlayerId = i), (t.findMediaElement = n);
      },
      function (e, t, r) {
        "use strict";
        function a() {
          return (
            "1" ===
            (n.default.doNotTrack ||
              (n.default.navigator &&
                (n.default.navigator.doNotTrack ||
                  n.default.navigator.msDoNotTrack)))
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
        var i = r(0),
          n = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(i);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = r(0),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(a),
          n = {};
        (n.exists = function () {
          var e = i.default.performance;
          return void 0 !== (e && e.timing);
        }),
          (n.domContentLoadedEventEnd = function () {
            var e = i.default.performance,
              t = e && e.timing;
            return t && t.domContentLoadedEventEnd;
          }),
          (n.navigationStart = function () {
            var e = i.default.performance,
              t = e && e.timing;
            return t && t.navigationStart;
          }),
          (t.default = n);
      },
      function (e, t, r) {
        (function (t) {
          var a,
            i = void 0 !== t ? t : "undefined" != typeof window ? window : {},
            n = r(23);
          "undefined" != typeof document
            ? (a = document)
            : (a = i["__GLOBAL_DOCUMENT_CACHE@4"]) ||
              (a = i["__GLOBAL_DOCUMENT_CACHE@4"] = n),
            (e.exports = a);
        }.call(t, r(6)));
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
        var a = r(42),
          i = r(43),
          n = r(16);
        e.exports = { formats: n, parse: i, stringify: a };
      },
      function (e, t, r) {
        "use strict";
        var a = Object.prototype.hasOwnProperty,
          i = (function () {
            for (var e = [], t = 0; t < 256; ++t)
              e.push(
                "%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase()
              );
            return e;
          })(),
          n = function (e) {
            for (var t; e.length; ) {
              var r = e.pop();
              if (((t = r.obj[r.prop]), Array.isArray(t))) {
                for (var a = [], i = 0; i < t.length; ++i)
                  void 0 !== t[i] && a.push(t[i]);
                r.obj[r.prop] = a;
              }
            }
            return t;
          };
        (t.arrayToObject = function (e, t) {
          for (
            var r = t && t.plainObjects ? Object.create(null) : {}, a = 0;
            a < e.length;
            ++a
          )
            void 0 !== e[a] && (r[a] = e[a]);
          return r;
        }),
          (t.merge = function (e, r, i) {
            if (!r) return e;
            if ("object" != typeof r) {
              if (Array.isArray(e)) e.push(r);
              else {
                if ("object" != typeof e) return [e, r];
                (i.plainObjects ||
                  i.allowPrototypes ||
                  !a.call(Object.prototype, r)) &&
                  (e[r] = !0);
              }
              return e;
            }
            if ("object" != typeof e) return [e].concat(r);
            var n = e;
            return (
              Array.isArray(e) &&
                !Array.isArray(r) &&
                (n = t.arrayToObject(e, i)),
              Array.isArray(e) && Array.isArray(r)
                ? (r.forEach(function (r, n) {
                    a.call(e, n)
                      ? e[n] && "object" == typeof e[n]
                        ? (e[n] = t.merge(e[n], r, i))
                        : e.push(r)
                      : (e[n] = r);
                  }),
                  e)
                : Object.keys(r).reduce(function (e, n) {
                    var o = r[n];
                    return (
                      a.call(e, n) ? (e[n] = t.merge(e[n], o, i)) : (e[n] = o),
                      e
                    );
                  }, n)
            );
          }),
          (t.assign = function (e, t) {
            return Object.keys(t).reduce(function (e, r) {
              return (e[r] = t[r]), e;
            }, e);
          }),
          (t.decode = function (e) {
            try {
              return decodeURIComponent(e.replace(/\+/g, " "));
            } catch (t) {
              return e;
            }
          }),
          (t.encode = function (e) {
            if (0 === e.length) return e;
            for (
              var t = "string" == typeof e ? e : String(e), r = "", a = 0;
              a < t.length;
              ++a
            ) {
              var n = t.charCodeAt(a);
              45 === n ||
              46 === n ||
              95 === n ||
              126 === n ||
              (n >= 48 && n <= 57) ||
              (n >= 65 && n <= 90) ||
              (n >= 97 && n <= 122)
                ? (r += t.charAt(a))
                : n < 128
                ? (r += i[n])
                : n < 2048
                ? (r += i[192 | (n >> 6)] + i[128 | (63 & n)])
                : n < 55296 || n >= 57344
                ? (r +=
                    i[224 | (n >> 12)] +
                    i[128 | ((n >> 6) & 63)] +
                    i[128 | (63 & n)])
                : ((a += 1),
                  (n = 65536 + (((1023 & n) << 10) | (1023 & t.charCodeAt(a)))),
                  (r +=
                    i[240 | (n >> 18)] +
                    i[128 | ((n >> 12) & 63)] +
                    i[128 | ((n >> 6) & 63)] +
                    i[128 | (63 & n)]));
            }
            return r;
          }),
          (t.compact = function (e) {
            for (
              var t = [{ obj: { o: e }, prop: "o" }], r = [], a = 0;
              a < t.length;
              ++a
            )
              for (
                var i = t[a], o = i.obj[i.prop], s = Object.keys(o), u = 0;
                u < s.length;
                ++u
              ) {
                var l = s[u],
                  d = o[l];
                "object" == typeof d &&
                  null !== d &&
                  -1 === r.indexOf(d) &&
                  (t.push({ obj: o, prop: l }), r.push(d));
              }
            return n(t);
          }),
          (t.isRegExp = function (e) {
            return "[object RegExp]" === Object.prototype.toString.call(e);
          }),
          (t.isBuffer = function (e) {
            return (
              null !== e &&
              void 0 !== e &&
              !!(
                e.constructor &&
                e.constructor.isBuffer &&
                e.constructor.isBuffer(e)
              )
            );
          });
      },
      function (e, t, r) {
        "use strict";
        var a = String.prototype.replace,
          i = /%20/g;
        e.exports = {
          default: "RFC3986",
          formatters: {
            RFC1738: function (e) {
              return a.call(e, i, "+");
            },
            RFC3986: function (e) {
              return e;
            },
          },
          RFC1738: "RFC1738",
          RFC3986: "RFC3986",
        };
      },
      function (e, t, r) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i(e) {
          var t = {};
          for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
          return t;
        }
        function n(e) {
          var t = {},
            r = {};
          return (
            Object.keys(e).forEach(function (a) {
              var i = !1;
              if (e.hasOwnProperty(a) && void 0 !== e[a]) {
                var n = a.split("_"),
                  o = n[0],
                  u = c[o];
                u ||
                  (s.default.info(
                    "Data key word `" + n[0] + "` not expected in " + a
                  ),
                  (u = o + "_")),
                  n.splice(1).forEach(function (e) {
                    "url" === e && (i = !0),
                      h[e]
                        ? (u += h[e])
                        : (s.default.info(
                            "Data key word `" + e + "` not expected in " + a
                          ),
                          (u += "_" + e + "_"));
                  }),
                  i ? (r[u] = e[a]) : (t[u] = e[a]);
              }
            }),
            (0, l.default)(t, r)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
        var o = r(4),
          s = a(o),
          u = r(1),
          l = a(u),
          d = {
            a: "env",
            b: "beacon",
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
          c = i(d),
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
            po: "poster",
            pr: "preload",
            py: "property",
            ra: "rate",
            rd: "requested",
            re: "rebuffer",
            rf: "rendition",
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
          h = i(f);
      },
      function (e, t, r) {
        "use strict";
        e.exports = r(19).default;
      },
      function (e, t, r) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = (function () {
            function e(e, t) {
              var r = [],
                a = !0,
                i = !1,
                n = void 0;
              try {
                for (
                  var o, s = e[Symbol.iterator]();
                  !(a = (o = s.next()).done) &&
                  (r.push(o.value), !t || r.length !== t);
                  a = !0
                );
              } catch (e) {
                (i = !0), (n = e);
              } finally {
                try {
                  !a && s.return && s.return();
                } finally {
                  if (i) throw n;
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
          n = r(0),
          o = a(n),
          s = r(9),
          u = r(4),
          l = a(u),
          d = r(10),
          c = a(d),
          f = r(3),
          h = a(f),
          p = r(21),
          _ = a(p),
          v = r(51),
          y = a(v),
          m = r(52),
          b = a(m),
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
        (w.loaded = h.default.now()),
          (w.VERSION = "3.4.3"),
          (w.API_VERSION = "2.1"),
          (w.PLAYER_TRACKED = !1),
          (w.monitor = function (e, t) {
            return (0, y.default)(w, e, t);
          }),
          (w.destroyMonitor = function (e) {
            var t = (0, s.findMediaElement)(e),
              r = i(t, 1),
              a = r[0];
            a && a.mux && "function" == typeof a.mux.destroy
              ? a.mux.destroy()
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
            g[r] = new _.default(w, r, t);
          }),
          (w.emit = function (e, t, r) {
            var a = (0, s.getMuxPlayerId)(e);
            g[a]
              ? (g[a].emit(t, r), "destroy" === t && delete g[a])
              : l.default.error(
                  "A monitor for `" + a + "` has not been initialized."
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
        var a, i;
        !(function (n, o) {
          "use strict";
          (a = o),
            void 0 !== (i = "function" == typeof a ? a.call(t, r, t, e) : a) &&
              (e.exports = i);
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
          function t(t) {
            return (
              "debug" === t && (t = "log"),
              typeof console !== s &&
                (void 0 !== console[t]
                  ? e(console, t)
                  : void 0 !== console.log
                  ? e(console, "log")
                  : o)
            );
          }
          function r(e, t) {
            for (var r = 0; r < u.length; r++) {
              var a = u[r];
              this[a] = r < e ? o : this.methodFactory(a, e, t);
            }
            this.log = this.debug;
          }
          function a(e, t, a) {
            return function () {
              typeof console !== s &&
                (r.call(this, t, a), this[e].apply(this, arguments));
            };
          }
          function i(e, r, i) {
            return t(e) || a.apply(this, arguments);
          }
          function n(e, t, a) {
            function n(e) {
              var t = (u[e] || "silent").toUpperCase();
              if (typeof window !== s) {
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
              if (typeof window !== s) {
                try {
                  e = window.localStorage[c];
                } catch (e) {}
                if (typeof e === s)
                  try {
                    var t = window.document.cookie,
                      r = t.indexOf(encodeURIComponent(c) + "=");
                    r && (e = /^([^;]+)/.exec(t.slice(r))[1]);
                  } catch (e) {}
                return void 0 === d.levels[e] && (e = void 0), e;
              }
            }
            var l,
              d = this,
              c = "loglevel";
            e && (c += ":" + e),
              (d.levels = {
                TRACE: 0,
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                SILENT: 5,
              }),
              (d.methodFactory = a || i),
              (d.getLevel = function () {
                return l;
              }),
              (d.setLevel = function (t, a) {
                if (
                  ("string" == typeof t &&
                    void 0 !== d.levels[t.toUpperCase()] &&
                    (t = d.levels[t.toUpperCase()]),
                  !("number" == typeof t && t >= 0 && t <= d.levels.SILENT))
                )
                  throw "log.setLevel() called with invalid level: " + t;
                if (
                  ((l = t),
                  !1 !== a && n(t),
                  r.call(d, t, e),
                  typeof console === s && t < d.levels.SILENT)
                )
                  return "No console available for logging";
              }),
              (d.setDefaultLevel = function (e) {
                o() || d.setLevel(e, !1);
              }),
              (d.enableAll = function (e) {
                d.setLevel(d.levels.TRACE, e);
              }),
              (d.disableAll = function (e) {
                d.setLevel(d.levels.SILENT, e);
              });
            var f = o();
            null == f && (f = null == t ? "WARN" : t), d.setLevel(f, !1);
          }
          var o = function () {},
            s = "undefined",
            u = ["trace", "debug", "info", "warn", "error"],
            l = new n(),
            d = {};
          l.getLogger = function (e) {
            if ("string" != typeof e || "" === e)
              throw new TypeError(
                "You must supply a name when creating a logger."
              );
            var t = d[e];
            return t || (t = d[e] = new n(e, l.getLevel(), l.methodFactory)), t;
          };
          var c = typeof window !== s ? window.log : void 0;
          return (
            (l.noConflict = function () {
              return (
                typeof window !== s && window.log === l && (window.log = c), l
              );
            }),
            l
          );
        });
      },
      function (e, t, r) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = (function () {
            function e(e, t) {
              var r = [],
                a = !0,
                i = !1,
                n = void 0;
              try {
                for (
                  var o, s = e[Symbol.iterator]();
                  !(a = (o = s.next()).done) &&
                  (r.push(o.value), !t || r.length !== t);
                  a = !0
                );
              } catch (e) {
                (i = !0), (n = e);
              } finally {
                try {
                  !a && s.return && s.return();
                } finally {
                  if (i) throw n;
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
          n = r(4),
          o = a(n),
          s = r(1),
          u = a(s),
          l = r(7),
          d = r(5),
          c = r(0),
          f = a(c),
          h = r(11),
          p = a(h),
          _ = r(2),
          v = a(_),
          y = r(22),
          m = a(y),
          b = r(25),
          g = r(26),
          w = r(27),
          x = a(w),
          S = r(28),
          T = a(S),
          k = r(29),
          E = a(k),
          O = r(30),
          M = a(O),
          P = r(31),
          A = a(P),
          q = r(32),
          D = a(q),
          R = r(33),
          j = a(R),
          I = r(34),
          L = a(I),
          C = r(35),
          H = a(C),
          N = r(36),
          B = a(N),
          F = r(37),
          W = a(F),
          U = r(38),
          G = a(U),
          V = r(39),
          J = a(V),
          Q = r(40),
          z = a(Q),
          $ = r(50),
          K = a($),
          X = [
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
          Y = function (e, t, r) {
            var a = this;
            (this.DOM_CONTENT_LOADED_EVENT_END =
              p.default.domContentLoadedEventEnd()),
              (this.NAVIGATION_START = p.default.navigationStart());
            var i = {
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
              (r = (0, u.default)(i, r)),
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
            var n = function () {
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
                this.one("play", n),
                this.one("adbreakstart", n);
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
                  n();
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
              X.forEach(function (e) {
                a.on(e, function (t, r) {
                  0 !== e.indexOf("ad") && this._updateStateData(),
                    (0, u.default)(this.data, r),
                    this._sanitizeData();
                }),
                  a.on("after" + e, function () {
                    ("error" !== e || this.viewErrored) && this.send(e);
                  });
              }),
              this.on("viewend", function (e, t) {
                (0, u.default)(a.data, t);
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
              E.default.apply(this),
              J.default.apply(this),
              B.default.apply(this),
              D.default.apply(this),
              T.default.apply(this),
              H.default.apply(this),
              M.default.apply(this),
              A.default.apply(this),
              W.default.apply(this),
              j.default.apply(this),
              L.default.apply(this),
              G.default.apply(this),
              K.default.apply(this),
              r.hlsjs && this.addHLSJS(r),
              r.dashjs && this.addDashJS(r),
              this.emit("viewinit", r.data);
          };
        (0, u.default)(Y.prototype, x.default.prototype),
          (0, u.default)(Y.prototype, D.default.prototype),
          (0, u.default)(Y.prototype, B.default.prototype),
          (0, u.default)(Y.prototype, T.default.prototype),
          (0, u.default)(Y.prototype, M.default.prototype),
          (0, u.default)(Y.prototype, A.default.prototype),
          (0, u.default)(Y.prototype, W.default.prototype),
          (0, u.default)(Y.prototype, j.default.prototype),
          (0, u.default)(Y.prototype, L.default.prototype),
          (Y.prototype.destroy = function () {
            this._destroyed ||
              ((this._destroyed = !0),
              void 0 !== this.data.view_start &&
                (this.emit("viewend"), this.send("viewend")),
              this.playbackEventDispatcher.destroy(),
              this.removeHLSJS(),
              this.removeDashJS(),
              f.default.clearTimeout(this._heartBeatTimeout));
          }),
          (Y.prototype.send = function (e) {
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
                a = i(r, 2),
                n = a[0],
                o = a[1];
              (t.video_source_domain = o), (t.video_source_hostname = n);
            }
            delete t.ad_request_id,
              this.playbackEventDispatcher.send(e, t),
              this.data.view_sequence_number++,
              this.data.player_sequence_number++,
              this._restartHeartBeat();
          }),
          (Y.prototype._updateStateData = function () {
            (0, u.default)(this.data, this.getStateData()),
              this.getPlayheadTime &&
                (this.data.player_playhead_time = this.getPlayheadTime()),
              this._sanitizeData();
          }),
          (Y.prototype._sanitizeData = function () {
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
                e.data[t] &&
                  0 === e.data[t].toLowerCase().indexOf("data:") &&
                  (e.data[t] = "MSE style URL");
              });
          }),
          (Y.prototype._resetVideoData = function (e, t) {
            var r = this;
            Object.keys(this.data).forEach(function (e) {
              0 === e.indexOf("video_") && delete r.data[e];
            });
          }),
          (Y.prototype._resetViewData = function () {
            var e = this;
            Object.keys(this.data).forEach(function (t) {
              0 === t.indexOf("view_") && delete e.data[t];
            }),
              (this.data.view_sequence_number = 1);
          }),
          (Y.prototype._resetErrorData = function (e, t) {
            delete this.data.player_error_code,
              delete this.data.player_error_message;
          }),
          (Y.prototype._initializeViewData = function () {
            var e = this,
              t = (this.data.view_id = (0, l.generateUUID)());
            this.data.video_id ||
              (this.data.video_id = (0, m.default)(
                this.data.player_source_url
              ));
            var r = function () {
              t === e.data.view_id &&
                (0, v.default)(e.data, "player_view_count", 1);
            };
            this.data.player_is_paused ? this.one("play", r) : r();
          }),
          (Y.prototype._restartHeartBeat = function () {
            var e = this;
            f.default.clearTimeout(this._heartBeatTimeout),
              this.viewErrored ||
                (this._heartBeatTimeout = f.default.setTimeout(function () {
                  e.data.player_is_paused || e.emit("hb");
                }, 1e4));
          }),
          (Y.prototype.addHLSJS = function (e) {
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
          (Y.prototype.removeHLSJS = function () {
            this.hlsjs &&
              ((0, b.stopMonitoringHlsJs)(this.hlsjs), (this.hlsjs = void 0));
          }),
          (Y.prototype.addDashJS = function (e) {
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
          (Y.prototype.removeDashJS = function () {
            this.dashjs &&
              ((0, g.stopMonitoringDashJS)(this.dashjs),
              (this.dashjs = void 0));
          }),
          (t.default = Y);
      },
      function (e, t, r) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i(e) {
          var t = o.default.createElement("a");
          t.href = e;
          var r = t.pathname.replace(/\.[^\/.]+$/, "");
          return u.default.encode(t.host + r).split("=")[0];
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
        var n = r(12),
          o = a(n),
          s = r(24),
          u = a(s);
      },
      function (e, t) {},
      function (e, t, r) {
        (function (e, a) {
          var i;
          !(function (n) {
            var o = "object" == typeof t && t,
              s =
                ("object" == typeof e && e && e.exports,
                "object" == typeof a && a);
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
                  (t % 4 == 1 || /[^+a-zA-Z0-9\/]/.test(e)) &&
                    l(
                      "Invalid character: the string to be decoded is not correctly encoded."
                    );
                for (var r, a, i = 0, n = "", o = -1; ++o < t; )
                  (a = d.indexOf(e.charAt(o))),
                    (r = i % 4 ? 64 * r + a : a),
                    i++ % 4 &&
                      (n += String.fromCharCode(255 & (r >> ((-2 * i) & 6))));
                return n;
              },
              h = function (e) {
                (e = String(e)),
                  /[^\0-\xFF]/.test(e) &&
                    l(
                      "The string to be encoded contains characters outside of the Latin1 range."
                    );
                for (
                  var t,
                    r,
                    a,
                    i,
                    n = e.length % 3,
                    o = "",
                    s = -1,
                    u = e.length - n;
                  ++s < u;

                )
                  (t = e.charCodeAt(s) << 16),
                    (r = e.charCodeAt(++s) << 8),
                    (a = e.charCodeAt(++s)),
                    (i = t + r + a),
                    (o +=
                      d.charAt((i >> 18) & 63) +
                      d.charAt((i >> 12) & 63) +
                      d.charAt((i >> 6) & 63) +
                      d.charAt(63 & i));
                return (
                  2 == n
                    ? ((t = e.charCodeAt(s) << 8),
                      (r = e.charCodeAt(++s)),
                      (i = t + r),
                      (o +=
                        d.charAt(i >> 10) +
                        d.charAt((i >> 4) & 63) +
                        d.charAt((i << 2) & 63) +
                        "="))
                    : 1 == n &&
                      ((i = e.charCodeAt(s)),
                      (o += d.charAt(i >> 2) + d.charAt((i << 4) & 63) + "==")),
                  o
                );
              },
              p = { encode: h, decode: f, version: "0.1.0" };
            void 0 !==
              (i = function () {
                return p;
              }.call(t, r, t, e)) && (e.exports = i);
          })();
        }.call(t, r(13)(e), r(6)));
      },
      function (e, t, r) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.stopMonitoringHlsJs = t.monitorHlsJs = void 0);
        var i = r(8),
          n = a(i),
          o = r(11),
          s = a(o),
          u = r(5),
          l = function (e) {
            if (!e) return {};
            var t = s.default.navigationStart();
            return {
              bytesLoaded: e.total,
              requestStart: Math.round(t + e.trequest),
              responseStart: Math.round(t + e.tfirst),
              responseEnd: Math.round(t + e.tload),
            };
          },
          d = function (e) {
            if (e && "function" == typeof e.getAllResponseHeaders)
              return (0, n.default)(e.getAllResponseHeaders());
          },
          c = function (e, t, r) {
            var a =
                (arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
                arguments[4]),
              i = e.log;
            if (!s.default.exists())
              return void i.warn(
                "performance timing not supported. Not tracking HLS.js."
              );
            var n = function (r, a) {
                return e.emit(t, r, a);
              },
              o = function (e, t) {
                var r = t.levels,
                  a = t.audioTracks,
                  i = t.url,
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
                  a.forEach(function (e, t) {
                    f[t] = {
                      name: e.name,
                      language: e.lang,
                      bitrate: e.bitrate,
                    };
                  });
                var h = l(o),
                  p = h.bytesLoaded,
                  _ = h.requestStart,
                  v = h.responseStart,
                  y = h.responseEnd;
                n("requestcompleted", {
                  request_event_type: e,
                  request_bytes_loaded: p,
                  request_start: _,
                  request_response_start: v,
                  request_response_end: y,
                  request_type: "manifest",
                  request_hostname: (0, u.extractHostname)(i),
                  request_response_headers: d(s),
                  request_rendition_lists: { media: c, audio: f, video: {} },
                });
              };
            r.on(a.Events.MANIFEST_LOADED, o);
            var c = function (e, t) {
              var r = t.details,
                a = t.level,
                i = t.networkDetails,
                o = t.stats,
                s = l(o),
                c = s.bytesLoaded,
                f = s.requestStart,
                h = s.responseStart,
                p = s.responseEnd;
              n("requestcompleted", {
                request_event_type: e,
                request_bytes_loaded: c,
                request_start: f,
                request_response_start: h,
                request_response_end: p,
                request_current_level: a,
                request_type: "manifest",
                request_hostname: (0, u.extractHostname)(r.url),
                request_response_headers: d(i),
              });
            };
            r.on(a.Events.LEVEL_LOADED, c);
            var f = function (e, t) {
              var r = t.details,
                a = t.networkDetails,
                i = t.stats,
                o = l(i),
                s = o.bytesLoaded,
                c = o.requestStart,
                f = o.responseStart,
                h = o.responseEnd;
              n("requestcompleted", {
                request_event_type: e,
                request_bytes_loaded: s,
                request_start: c,
                request_response_start: f,
                request_response_end: h,
                request_type: "manifest",
                request_hostname: (0, u.extractHostname)(r.url),
                request_response_headers: d(a),
              });
            };
            r.on(a.Events.AUDIO_TRACK_LOADED, f);
            var h = function (e, t) {
              var a = t.stats,
                i = t.networkDetails,
                o = t.frag,
                s = l(a),
                c = s.bytesLoaded,
                f = s.requestStart,
                h = s.responseStart,
                p = s.responseEnd,
                _ = {
                  request_event_type: e,
                  request_bytes_loaded: c,
                  request_start: f,
                  request_response_start: h,
                  request_response_end: p,
                  request_hostname: i
                    ? (0, u.extractHostname)(i.responseURL)
                    : void 0,
                  request_response_headers: d(i),
                  request_media_duration: o.duration,
                };
              "main" === o.type
                ? ((_.request_type = "media"),
                  (_.request_current_level = o.level),
                  (_.request_video_width = (r.levels[o.level] || {}).width),
                  (_.request_video_height = (r.levels[o.level] || {}).height))
                : (_.request_type = o.type),
                n("requestcompleted", _);
            };
            r.on(a.Events.FRAG_LOADED, h);
            var p = function (e, t) {
              var r = t.details,
                i = t.response,
                o = t.context,
                s = t.frag;
              if (
                r === a.ErrorDetails.MANIFEST_LOAD_ERROR ||
                r === a.ErrorDetails.MANIFEST_LOAD_TIMEOUT ||
                r === a.ErrorDetails.FRAG_LOAD_ERROR ||
                r === a.ErrorDetails.FRAG_LOAD_TIMEOUT ||
                r === a.ErrorDetails.LEVEL_LOAD_ERROR ||
                r === a.ErrorDetails.LEVEL_LOAD_TIMEOUT
              ) {
                var l = (s && s.url) || (o && o.url) || "";
                n("requestfailed", {
                  request_error: r,
                  request_url: l,
                  request_hostname: (0, u.extractHostname)(l),
                  request_type:
                    r === a.ErrorDetails.FRAG_LOAD_ERROR ||
                    r === a.ErrorDetails.FRAG_LOAD_TIMEOUT
                      ? "media"
                      : "manifest",
                  request_error_code: i && i.code,
                  request_error_text: i && i.text,
                });
              }
            };
            r.on(a.Events.ERROR, p);
            var _ = function (e, t) {
              var r = t.frag,
                a = (r && r._url) || "";
              n("requestcanceled", {
                request_cancel: e,
                request_url: a,
                request_type: "media",
                request_hostname: (0, u.extractHostname)(a),
              });
            };
            r.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, _);
            var v = function (e, t) {
              var a = t.level,
                o = r.levels.find(function (e) {
                  return e.level === a;
                });
              if (o && o.attrs && o.attrs.BANDWIDTH) {
                var s = o.attrs.BANDWIDTH;
                s
                  ? n("renditionchange", {
                      video_source_bitrate: s,
                      video_source_width: o.width,
                      video_source_height: o.height,
                    })
                  : i.warn(
                      "missing BANDWIDTH from HLS manifest parsed by HLS.js"
                    );
              }
            };
            r.on(a.Events.LEVEL_SWITCHED, v),
              (r._stopMuxMonitor = function () {
                r.off(a.Events.MANIFEST_LOADED, o),
                  r.off(a.Events.LEVEL_LOADED, c),
                  r.off(a.Events.AUDIO_TRACK_LOADED, f),
                  r.off(a.Events.FRAG_LOADED, h),
                  r.off(a.Events.ERROR, p),
                  r.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, _),
                  r.off(a.Events.LEVEL_SWITCHED, v),
                  r.off(a.Events.DESTROYING, r._stopMuxMonitor),
                  delete r._stopMuxMonitor;
              }),
              r.on(a.Events.DESTROYING, r._stopMuxMonitor);
          },
          f = function (e) {
            e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor();
          };
        (t.monitorHlsJs = c), (t.stopMonitoringHlsJs = f);
      },
      function (e, t, r) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.stopMonitoringDashJS = t.monitorDashJS = void 0);
        var i = r(0),
          n = a(i),
          o = r(8),
          s = a(o),
          u = r(5),
          l = function (e, t) {
            if (!e || "function" != typeof e.getRequests) return {};
            var r = e.getRequests({ state: "executed" });
            if (0 === r.length) return {};
            var a = r[r.length - 1],
              i = (0, u.extractHostname)(a.url),
              n = a.bytesLoaded,
              o = new Date(a.requestStartDate).getTime(),
              l = new Date(a.firstByteDate).getTime(),
              d = new Date(a.requestEndDate).getTime(),
              c = isNaN(a.duration) ? 0 : a.duration,
              f =
                "function" == typeof t.getMetricsFor
                  ? t.getMetricsFor(a.mediaType).HttpList
                  : t.getDashMetrics().getHttpRequests(a.mediaType),
              h = void 0;
            return (
              f.length > 0 &&
                (h = (0, s.default)(f[f.length - 1]._responseHeaders || "")),
              {
                requestStart: o,
                requestResponseStart: l,
                requestResponseEnd: d,
                requestBytesLoaded: n,
                requestResponseHeaders: h,
                requestMediaDuration: c,
                requestHostname: i,
              }
            );
          },
          d = function (e, t) {
            var r = t.getQualityFor(e),
              a = t.getCurrentTrackFor(e),
              i = a.bitrateList;
            return i
              ? {
                  currentLevel: r,
                  renditionWidth: i[r].width || null,
                  renditionHeight: i[r].height || null,
                  renditionBitrate: i[r].bandwidth,
                }
              : {};
          },
          c = function (e, t, r) {
            var a =
              (arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              e.log);
            if (!r || !r.on)
              return void a.warn(
                "Invalid dash.js player reference. Monitoring blocked."
              );
            var i = function (r, a) {
                return e.emit(t, r, a);
              },
              o = function (e) {
                var t = e.type,
                  r = e.data,
                  a = r || {},
                  n = a.url;
                i("requestcompleted", {
                  request_event_type: t,
                  request_start: 0,
                  request_response_start: 0,
                  request_response_end: 0,
                  request_bytes_loaded: -1,
                  request_type: "manifest",
                  request_hostname: (0, u.extractHostname)(n),
                });
              };
            r.on("manifestLoaded", o);
            var s = {},
              c = function (e) {
                var t = e.type,
                  a = e.fragmentModel,
                  n = e.chunk,
                  o = n || {},
                  u = o.mediaInfo,
                  d = u || {},
                  c = d.type,
                  f = d.bitrateList;
                f = f || [];
                var h = {};
                f.forEach(function (e, t) {
                  (h[t] = {}),
                    (h[t].width = e.width),
                    (h[t].height = e.height),
                    (h[t].bitrate = e.bandwidth),
                    (h[t].attrs = {});
                }),
                  "video" === c
                    ? (s.video = h)
                    : "audio" === c
                    ? (s.audio = h)
                    : (s.media = h);
                var p = l(a, r),
                  _ = p.requestStart,
                  v = p.requestResponseStart,
                  y = p.requestResponseEnd,
                  m = p.requestResponseHeaders,
                  b = p.requestMediaDuration,
                  g = p.requestHostname;
                i("requestcompleted", {
                  request_event_type: t,
                  request_start: _,
                  request_response_start: v,
                  request_response_end: y,
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
                a = e.fragmentModel,
                n = e.chunk,
                o = n || {},
                s = o.mediaInfo,
                u = o.start,
                c = s || {},
                f = c.type,
                h = l(a, r),
                p = h.requestStart,
                _ = h.requestResponseStart,
                v = h.requestResponseEnd,
                y = h.requestBytesLoaded,
                m = h.requestResponseHeaders,
                b = h.requestMediaDuration,
                g = h.requestHostname,
                w = d(f, r),
                x = w.currentLevel,
                S = w.renditionWidth,
                T = w.renditionHeight,
                k = w.renditionBitrate;
              i("requestcompleted", {
                request_event_type: t,
                request_start: p,
                request_response_start: _,
                request_response_end: v,
                request_bytes_loaded: y,
                request_type: f,
                request_response_headers: m,
                request_hostname: g,
                request_media_start_time: u,
                request_media_duration: b,
                request_current_level: x,
                request_labeled_bitrate: k,
                request_video_width: S,
                request_video_height: T,
              });
            };
            r.on("mediaFragmentLoaded", f);
            var h = { video: void 0, audio: void 0, totalBitrate: void 0 },
              p = function () {
                if (h.video && "number" == typeof h.video.bitrate) {
                  if (!h.video.width || !h.video.height)
                    return void a.warn(
                      "have bitrate info for video but missing width/height"
                    );
                  var e = h.video.bitrate;
                  return (
                    h.audio &&
                      "number" == typeof h.audio.bitrate &&
                      (e += h.audio.bitrate),
                    e !== h.totalBitrate
                      ? ((h.totalBitrate = e),
                        {
                          video_source_bitrate: e,
                          video_source_height: h.video.height,
                          video_source_width: h.video.width,
                        })
                      : void 0
                  );
                }
              },
              _ = function (e, t, n) {
                if ("number" != typeof e.newQuality)
                  return void a.warn(
                    "missing evt.newQuality in qualityChangeRendered event",
                    e
                  );
                var o = e.mediaType;
                if ("audio" === o || "video" === o) {
                  var s = r.getBitrateInfoListFor(o).find(function (t) {
                    return t.qualityIndex === e.newQuality;
                  });
                  if (!s || "number" != typeof s.bitrate)
                    return void a.warn("missing bitrate info for " + o);
                  h[o] = s;
                  var u = p();
                  u && i("renditionchange", u);
                }
              };
            r.on("qualityChangeRendered", _);
            var v = function (e) {
              var t = e.error,
                r = e.event;
              r = r || {};
              var a = r.request || {},
                o = (n.default.event && n.default.event.currentTarget) || {};
              i("requestfailed", {
                request_error: t + "_" + r.id + "_" + a.type,
                request_url: r.url,
                request_hostname: (0, u.extractHostname)(r.url),
                request_type: a.mediaType,
                request_error_code: o.status,
                request_error_type: o.statusText,
              });
            };
            r.on("error", v),
              (r._stopMuxMonitor = function () {
                r.off("manifestLoaded", o),
                  r.off("initFragmentLoaded", c),
                  r.off("mediaFragmentLoaded", f),
                  r.off("qualityChangeRendered", _),
                  r.off("error", v),
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
        var a = function () {},
          i = 0;
        (a.prototype.on = function (e, t, r) {
          return (
            (t._eventEmitterGuid = t._eventEmitterGuid || ++i),
            (this._listeners = this._listeners || {}),
            (this._listeners[e] = this._listeners[e] || []),
            r && (t = t.bind(r)),
            this._listeners[e].push(t),
            t
          );
        }),
          (a.prototype.off = function (e, t) {
            var r = this._listeners && this._listeners[e];
            r &&
              r.forEach(function (e, a) {
                e._eventEmitterGuid === t._eventEmitterGuid && r.splice(a, 1);
              });
          }),
          (a.prototype.one = function (e, t, r) {
            var a = this;
            t._eventEmitterGuid = t._eventEmitterGuid || ++i;
            var n = function i() {
              a.off(e, i), t.apply(r || this, arguments);
            };
            (n._eventEmitterGuid = t._eventEmitterGuid), this.on(e, n);
          }),
          (a.prototype.emit = function (e, t) {
            var r = this;
            if (this._listeners) {
              t = t || {};
              var a = this._listeners["before*"] || [],
                i = this._listeners[e] || [],
                n = this._listeners["after" + e] || [],
                o = function (t, a) {
                  (t = t.slice()),
                    t.forEach(function (t) {
                      t.call(r, { type: e }, a);
                    });
                };
              o(a, t), o(i, t), o(n, t);
            }
          }),
          (t.default = a);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = r(0),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(a),
          n = function () {
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
                  (i.default.clearInterval(this._playbackHeartbeatInterval),
                  this.emit("playbackheartbeatend", {
                    viewer_time: t.viewer_time,
                  }),
                  (this._playbackHeartbeatInterval = null));
              });
          };
        (n.prototype._startPlaybackHeartbeatInterval = function () {
          var e = this;
          null === this._playbackHeartbeatInterval &&
            (this.emit("playbackheartbeat"),
            (this._playbackHeartbeatInterval = i.default.setInterval(
              function () {
                e.emit("playbackheartbeat");
              },
              this.playbackHeartbeatTime
            )));
        }),
          (n.prototype._stopPlaybackHeartbeatInterval = function () {
            (this._playheadShouldBeProgressing = !1),
              null !== this._playbackHeartbeatInterval &&
                (i.default.clearInterval(this._playbackHeartbeatInterval),
                this.emit("playbackheartbeatend"),
                (this._playbackHeartbeatInterval = null));
          }),
          (t.default = n);
      },
      function (e, t, r) {
        "use strict";
        function a() {
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
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = r(2),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(a),
          n = function () {
            (this._watchTimeTrackerLastCheckedTime = null),
              this.on("playbackheartbeat", this._updateWatchTime),
              this.on("playbackheartbeatend", this._clearWatchTimeState);
          };
        (n.prototype._updateWatchTime = function (e, t) {
          var r = t.viewer_time;
          null === this._watchTimeTrackerLastCheckedTime &&
            (this._watchTimeTrackerLastCheckedTime = r),
            (0, i.default)(
              this.data,
              "view_watch_time",
              r - this._watchTimeTrackerLastCheckedTime
            ),
            (this._watchTimeTrackerLastCheckedTime = r);
        }),
          (n.prototype._clearWatchTimeState = function (e, t) {
            this._updateWatchTime(e, t),
              (this._watchTimeTrackerLastCheckedTime = null);
          }),
          (t.default = n);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = r(2),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(a),
          n = function () {
            (this._playbackTimeTrackerLastPlayheadPosition = -1),
              this.on("playbackheartbeat", this._updatePlaybackTime),
              this.on("playbackheartbeatend", this._clearPlaybackTimeState),
              this.on("seeking", this._clearPlaybackTimeState);
          };
        (n.prototype._updatePlaybackTime = function () {
          var e = this.data.player_playhead_time;
          if (
            this._playbackTimeTrackerLastPlayheadPosition >= 0 &&
            e > this._playbackTimeTrackerLastPlayheadPosition
          ) {
            var t = e - this._playbackTimeTrackerLastPlayheadPosition;
            t <= 1e3 &&
              (0, i.default)(this.data, "view_content_playback_time", t);
          }
          this._playbackTimeTrackerLastPlayheadPosition = e;
        }),
          (n.prototype._clearPlaybackTimeState = function () {
            this._updatePlaybackTime(),
              (this._playbackTimeTrackerLastPlayheadPosition = -1);
          }),
          (t.default = n);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = function () {
          this.on("playbackheartbeat", this._updatePlayheadTime),
            this.on("playbackheartbeatend", this._updatePlayheadTime),
            this.on("timeupdate", this._updatePlayheadTime),
            this.on("destroy", function () {
              this.off("timeupdate", this._updatePlayheadTime);
            });
        };
        (a.prototype._updatePlayheadTime = function (e, t) {
          if (t.player_playhead_time)
            this.data.player_playhead_time = t.player_playhead_time;
          else if (this.getPlayheadTime) {
            var r = this.getPlayheadTime();
            void 0 !== r && (this.data.player_playhead_time = r);
          }
        }),
          (t.default = a);
      },
      function (e, t, r) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = r(3),
          n = a(i),
          o = r(2),
          s = a(o),
          u = function () {
            (this._lastCheckedTime = null),
              (this._lastPlayheadTime = null),
              (this._lastPlayheadTimeUpdatedTime = null),
              this.on("playbackheartbeat", this._checkIfRebuffering),
              this.on("playbackheartbeatend", this._cleanupRebufferTracker),
              this.on("seeking", function () {
                this._cleanupRebufferTracker(null, {
                  viewer_time: n.default.now(),
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
                var a = this.data.player_playhead_time - this._lastPlayheadTime,
                  i = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                a > 0 && i - a > this.minimumRebufferDuration
                  ? ((0, s.default)(this.data, "view_rebuffer_count", 1),
                    this._updateRebufferMetrics(i - a),
                    this.emit("rebufferstart", {
                      viewer_time: this._lastPlayheadTimeUpdatedTime,
                    }),
                    this.emit("rebufferend", {
                      viewer_time: this._lastPlayheadTimeUpdatedTime + i - a,
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
        var a = r(3),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(a),
          n = function () {
            this.on("viewinit", function () {
              var e = this.data,
                t = e.view_id;
              if (!e.view_program_changed) {
                var r = function (e, r) {
                  var a = r.viewer_time;
                  "playing" === e.type &&
                  void 0 === this.data.view_time_to_first_frame
                    ? this.calculateTimeToFirstFrame(a || i.default.now(), t)
                    : "adplaying" !== e.type ||
                      (void 0 !== this.data.view_time_to_first_frame &&
                        !this.inPrerollPosition()) ||
                      this.calculateTimeToFirstFrame(a || i.default.now(), t);
                };
                this.one("playing", r),
                  this.one("adplaying", r),
                  this.one("viewend", function () {
                    this.off("playing", r), this.off("adplaying", r);
                  });
              }
            });
          };
        (n.prototype.calculateTimeToFirstFrame = function (e, t) {
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
          (t.default = n);
      },
      function (e, t, r) {
        "use strict";
        function a() {
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
                  a = Math.max(0, 1 - t);
                (this.data.view_max_upscale_percentage = Math.max(
                  this.data.view_max_upscale_percentage || 0,
                  r
                )),
                  (this.data.view_max_downscale_percentage = Math.max(
                    this.data.view_max_downscale_percentage || 0,
                    a
                  )),
                  (0, n.default)(
                    this.data,
                    "view_total_content_playback_time",
                    e
                  ),
                  (0, n.default)(this.data, "view_total_upscaling", r * e),
                  (0, n.default)(this.data, "view_total_downscaling", a * e);
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
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
        var i = r(2),
          n = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(i);
      },
      function (e, t, r) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i() {
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
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
        var n = r(3),
          o = a(n),
          s = r(2),
          u = a(s),
          l = r(1),
          d = a(l);
      },
      function (e, t, r) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = (function () {
            function e(e, t) {
              var r = [],
                a = !0,
                i = !1,
                n = void 0;
              try {
                for (
                  var o, s = e[Symbol.iterator]();
                  !(a = (o = s.next()).done) &&
                  (r.push(o.value), !t || r.length !== t);
                  a = !0
                );
              } catch (e) {
                (i = !0), (n = e);
              } finally {
                try {
                  !a && s.return && s.return();
                } finally {
                  if (i) throw n;
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
          n = r(2),
          o = a(n),
          s = r(5),
          u = r(1),
          l = a(u),
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
                  a = i(r, 2),
                  n = a[0],
                  o = a[1];
                (this.data.view_preroll_ad_tag_domain = o),
                  (this.data.view_preroll_ad_tag_hostname = n);
              }
              if (!this.data.view_preroll_ad_asset_hostname && t.ad_asset_url) {
                var u = (0, s.extractHostnameAndDomain)(t.ad_asset_url),
                  l = i(u, 2),
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
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i() {
          var e = this,
            t = void 0,
            r = void 0,
            a = function () {
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
            i = function () {
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
            n = !1,
            s = function () {
              n = !0;
            },
            l = function () {
              (n = !1), i();
            };
          this.on("waiting", function () {
            n && a();
          }),
            this.on("playing", function () {
              i(), s();
            }),
            this.on("pause", l),
            this.on("seeking", l);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
        var n = r(3),
          o = a(n),
          s = r(2),
          u = a(s);
      },
      function (e, t, r) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i() {
          var e = this;
          this.one("playbackheartbeat", l),
            this.on("playbackheartbeatend", function () {
              e.off("before*", d), e.one("playbackheartbeat", l);
            });
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
        var n = r(1),
          o = a(n),
          s = r(3),
          u = a(s),
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
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i =
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
          n = r(0),
          o = a(n),
          s = r(41),
          u = r(4),
          l = a(u),
          d = r(45),
          c = a(d),
          f = r(10),
          h = a(f),
          p = r(46),
          _ = a(p),
          v = r(17),
          y = a(v),
          m = r(47),
          b = a(m),
          g = r(49),
          w = a(g),
          x = r(1),
          S = a(x),
          T = [
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
          k = ["viewstart", "error", "ended", "viewend"],
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
            var a = (0, S.default)(w.default, r.platform || {});
            this.pageLevelData = {
              mux_api_version: this.mux.API_VERSION,
              mux_embed_version: this.mux.VERSION,
              viewer_application_name: a.name,
              viewer_application_version: a.version,
              viewer_application_engine: a.layout,
              viewer_device_name: a.product,
              viewer_device_category: "",
              viewer_device_manufacturer: a.manufacturer,
              viewer_os_family: a.os && a.os.family,
              viewer_os_architecture: a.os && a.os.architecture,
              viewer_os_version: a.os && a.os.version,
            };
            var i = (0, _.default)();
            i &&
              (this.pageLevelData = (0, S.default)(this.pageLevelData, {
                viewer_connection_type: i,
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
            if (this.respectDoNotTrack && (0, h.default)())
              return l.default.info(
                "Not sending `" + e + "` because Do Not Track is enabled"
              );
            if (!t || "object" !== (void 0 === t ? "undefined" : i(t)))
              return l.default.error(
                "A data object was expected in send() but was not provided"
              );
            var r = this.disableCookies ? {} : (0, s.getAndUpdateSessionData)(),
              a = {};
            (0, S.default)(a, this.pageLevelData),
              (0, S.default)(a, t),
              (0, S.default)(a, r),
              (0, S.default)(a, this.viewerData),
              (a.event = e),
              (a.env_key = this.envKey),
              a.user_id && ((a.viewer_user_id = a.user_id), delete a.user_id);
            var n = a.mux_sample_number >= this.sampleRate,
              o = this._deduplicateBeaconData(e, a),
              u = (0, y.default)(o);
            if (((this.lastEventTime = this.mux.utils.now()), n))
              return l.default.info(
                "Not sending event due to sample rate restriction",
                e,
                a,
                u
              );
            if (!this.envKey)
              return l.default.info(
                "Not sending event due to missing environment key",
                e,
                a,
                u
              );
            if (!this.rateLimited)
              if (
                (l.default.info("Sending event", e, a, u),
                (this.rateLimited = !this.eventQueue.queueEvent(e, u)),
                this.mux.WINDOW_UNLOADING && "viewend" === e)
              )
                this.eventQueue.destroy(!0);
              else if (
                (k.indexOf(e) >= 0 && this.eventQueue.flushEvents(),
                this.rateLimited)
              )
                return (
                  (a.event = "eventrateexceeded"),
                  (u = (0, y.default)(a)),
                  this.eventQueue.queueEvent(a.event, u),
                  l.default.error("Beaconing disabled due to rate limit.")
                );
          }
        }),
          (E.prototype.destroy = function () {
            this.eventQueue.destroy(!1);
          });
        var O = function (e, t, r, a) {
            return (
              !(!e || 0 !== t.indexOf("request_")) &&
              ("request_response_headers" === t ||
                "object" !== (void 0 === r ? "undefined" : i(r)) ||
                "object" !== (void 0 === a ? "undefined" : i(a)) ||
                Object.keys(r || {}).length !== Object.keys(a || {}).length)
            );
          },
          M = function (e, t) {
            return "renditionchange" === e && 0 === t.indexOf("video_source_");
          };
        (E.prototype._deduplicateBeaconData = function (e, t) {
          var r = this,
            a = {},
            i = t.view_id;
          if (
            !i ||
            "viewstart" === e ||
            "viewend" === e ||
            !this.previousBeaconData ||
            this.mux.utils.now() - this.lastEventTime >= 6e5
          )
            (a = (0, S.default)({}, t)),
              i && (this.previousBeaconData = a),
              i && "viewend" === e && (this.previousBeaconData = null);
          else {
            var n = 0 === e.indexOf("request");
            Object.keys(t).forEach(function (i) {
              var o = t[i];
              (o !== r.previousBeaconData[i] ||
                T.indexOf(i) > -1 ||
                O(n, i, o, r.previousBeaconData[i]) ||
                M(e, i)) &&
                ((a[i] = o), (r.previousBeaconData[i] = o));
            });
          }
          return a;
        }),
          (t.default = E);
      },
      function (e, t, r) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getAndUpdateSessionData = t.getAndUpdateViewerData = void 0);
        var i = r(14),
          n = a(i),
          o = r(44),
          s = a(o),
          u = r(7),
          l = r(3),
          d = a(l),
          c = function () {
            var e = void 0;
            try {
              e = n.default.parse(s.default.get("muxData") || "");
            } catch (t) {
              e = {};
            }
            return e;
          },
          f = function (e) {
            try {
              s.default.set("muxData", n.default.stringify(e), {
                expires: 7300,
              });
            } catch (e) {}
          },
          h = function () {
            var e = c();
            return (
              (e.mux_viewer_id = e.mux_viewer_id || (0, u.generateUUID)()),
              (e.msn = e.msn || Math.random()),
              f(e),
              { mux_viewer_id: e.mux_viewer_id, mux_sample_number: e.msn }
            );
          },
          p = function () {
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
        (t.getAndUpdateViewerData = h), (t.getAndUpdateSessionData = p);
      },
      function (e, t, r) {
        "use strict";
        var a = r(15),
          i = r(16),
          n = {
            brackets: function (e) {
              return e + "[]";
            },
            indices: function (e, t) {
              return e + "[" + t + "]";
            },
            repeat: function (e) {
              return e;
            },
          },
          o = Date.prototype.toISOString,
          s = {
            delimiter: "&",
            encode: !0,
            encoder: a.encode,
            encodeValuesOnly: !1,
            serializeDate: function (e) {
              return o.call(e);
            },
            skipNulls: !1,
            strictNullHandling: !1,
          },
          u = function e(t, r, i, n, o, u, l, d, c, f, h, p) {
            var _ = t;
            if ("function" == typeof l) _ = l(r, _);
            else if (_ instanceof Date) _ = f(_);
            else if (null === _) {
              if (n) return u && !p ? u(r, s.encoder) : r;
              _ = "";
            }
            if (
              "string" == typeof _ ||
              "number" == typeof _ ||
              "boolean" == typeof _ ||
              a.isBuffer(_)
            ) {
              if (u) {
                return [h(p ? r : u(r, s.encoder)) + "=" + h(u(_, s.encoder))];
              }
              return [h(r) + "=" + h(String(_))];
            }
            var v = [];
            if (void 0 === _) return v;
            var y;
            if (Array.isArray(l)) y = l;
            else {
              var m = Object.keys(_);
              y = d ? m.sort(d) : m;
            }
            for (var b = 0; b < y.length; ++b) {
              var g = y[b];
              (o && null === _[g]) ||
                (v = Array.isArray(_)
                  ? v.concat(e(_[g], i(r, g), i, n, o, u, l, d, c, f, h, p))
                  : v.concat(
                      e(
                        _[g],
                        r + (c ? "." + g : "[" + g + "]"),
                        i,
                        n,
                        o,
                        u,
                        l,
                        d,
                        c,
                        f,
                        h,
                        p
                      )
                    ));
            }
            return v;
          };
        e.exports = function (e, t) {
          var r = e,
            o = t ? a.assign({}, t) : {};
          if (
            null !== o.encoder &&
            void 0 !== o.encoder &&
            "function" != typeof o.encoder
          )
            throw new TypeError("Encoder has to be a function.");
          var l = void 0 === o.delimiter ? s.delimiter : o.delimiter,
            d =
              "boolean" == typeof o.strictNullHandling
                ? o.strictNullHandling
                : s.strictNullHandling,
            c = "boolean" == typeof o.skipNulls ? o.skipNulls : s.skipNulls,
            f = "boolean" == typeof o.encode ? o.encode : s.encode,
            h = "function" == typeof o.encoder ? o.encoder : s.encoder,
            p = "function" == typeof o.sort ? o.sort : null,
            _ = void 0 !== o.allowDots && o.allowDots,
            v =
              "function" == typeof o.serializeDate
                ? o.serializeDate
                : s.serializeDate,
            y =
              "boolean" == typeof o.encodeValuesOnly
                ? o.encodeValuesOnly
                : s.encodeValuesOnly;
          if (void 0 === o.format) o.format = i.default;
          else if (
            !Object.prototype.hasOwnProperty.call(i.formatters, o.format)
          )
            throw new TypeError("Unknown format option provided.");
          var m,
            b,
            g = i.formatters[o.format];
          "function" == typeof o.filter
            ? ((b = o.filter), (r = b("", r)))
            : Array.isArray(o.filter) && ((b = o.filter), (m = b));
          var w = [];
          if ("object" != typeof r || null === r) return "";
          var x;
          x =
            o.arrayFormat in n
              ? o.arrayFormat
              : "indices" in o
              ? o.indices
                ? "indices"
                : "repeat"
              : "indices";
          var S = n[x];
          m || (m = Object.keys(r)), p && m.sort(p);
          for (var T = 0; T < m.length; ++T) {
            var k = m[T];
            (c && null === r[k]) ||
              (w = w.concat(
                u(r[k], k, S, d, c, f ? h : null, b, p, _, v, g, y)
              ));
          }
          var E = w.join(l),
            O = !0 === o.addQueryPrefix ? "?" : "";
          return E.length > 0 ? O + E : "";
        };
      },
      function (e, t, r) {
        "use strict";
        var a = r(15),
          i = Object.prototype.hasOwnProperty,
          n = {
            allowDots: !1,
            allowPrototypes: !1,
            arrayLimit: 20,
            decoder: a.decode,
            delimiter: "&",
            depth: 5,
            parameterLimit: 1e3,
            plainObjects: !1,
            strictNullHandling: !1,
          },
          o = function (e, t) {
            for (
              var r = {},
                a = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                o = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                s = a.split(t.delimiter, o),
                u = 0;
              u < s.length;
              ++u
            ) {
              var l,
                d,
                c = s[u],
                f = c.indexOf("]="),
                h = -1 === f ? c.indexOf("=") : f + 1;
              -1 === h
                ? ((l = t.decoder(c, n.decoder)),
                  (d = t.strictNullHandling ? null : ""))
                : ((l = t.decoder(c.slice(0, h), n.decoder)),
                  (d = t.decoder(c.slice(h + 1), n.decoder))),
                i.call(r, l) ? (r[l] = [].concat(r[l]).concat(d)) : (r[l] = d);
            }
            return r;
          },
          s = function (e, t, r) {
            for (var a = t, i = e.length - 1; i >= 0; --i) {
              var n,
                o = e[i];
              if ("[]" === o) (n = []), (n = n.concat(a));
              else {
                n = r.plainObjects ? Object.create(null) : {};
                var s =
                    "[" === o.charAt(0) && "]" === o.charAt(o.length - 1)
                      ? o.slice(1, -1)
                      : o,
                  u = parseInt(s, 10);
                !isNaN(u) &&
                o !== s &&
                String(u) === s &&
                u >= 0 &&
                r.parseArrays &&
                u <= r.arrayLimit
                  ? ((n = []), (n[u] = a))
                  : (n[s] = a);
              }
              a = n;
            }
            return a;
          },
          u = function (e, t, r) {
            if (e) {
              var a = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                n = /(\[[^[\]]*])/,
                o = /(\[[^[\]]*])/g,
                u = n.exec(a),
                l = u ? a.slice(0, u.index) : a,
                d = [];
              if (l) {
                if (
                  !r.plainObjects &&
                  i.call(Object.prototype, l) &&
                  !r.allowPrototypes
                )
                  return;
                d.push(l);
              }
              for (var c = 0; null !== (u = o.exec(a)) && c < r.depth; ) {
                if (
                  ((c += 1),
                  !r.plainObjects &&
                    i.call(Object.prototype, u[1].slice(1, -1)) &&
                    !r.allowPrototypes)
                )
                  return;
                d.push(u[1]);
              }
              return u && d.push("[" + a.slice(u.index) + "]"), s(d, t, r);
            }
          };
        e.exports = function (e, t) {
          var r = t ? a.assign({}, t) : {};
          if (
            null !== r.decoder &&
            void 0 !== r.decoder &&
            "function" != typeof r.decoder
          )
            throw new TypeError("Decoder has to be a function.");
          if (
            ((r.ignoreQueryPrefix = !0 === r.ignoreQueryPrefix),
            (r.delimiter =
              "string" == typeof r.delimiter || a.isRegExp(r.delimiter)
                ? r.delimiter
                : n.delimiter),
            (r.depth = "number" == typeof r.depth ? r.depth : n.depth),
            (r.arrayLimit =
              "number" == typeof r.arrayLimit ? r.arrayLimit : n.arrayLimit),
            (r.parseArrays = !1 !== r.parseArrays),
            (r.decoder =
              "function" == typeof r.decoder ? r.decoder : n.decoder),
            (r.allowDots =
              "boolean" == typeof r.allowDots ? r.allowDots : n.allowDots),
            (r.plainObjects =
              "boolean" == typeof r.plainObjects
                ? r.plainObjects
                : n.plainObjects),
            (r.allowPrototypes =
              "boolean" == typeof r.allowPrototypes
                ? r.allowPrototypes
                : n.allowPrototypes),
            (r.parameterLimit =
              "number" == typeof r.parameterLimit
                ? r.parameterLimit
                : n.parameterLimit),
            (r.strictNullHandling =
              "boolean" == typeof r.strictNullHandling
                ? r.strictNullHandling
                : n.strictNullHandling),
            "" === e || null === e || void 0 === e)
          )
            return r.plainObjects ? Object.create(null) : {};
          for (
            var i = "string" == typeof e ? o(e, r) : e,
              s = r.plainObjects ? Object.create(null) : {},
              l = Object.keys(i),
              d = 0;
            d < l.length;
            ++d
          ) {
            var c = l[d],
              f = u(c, i[c], r);
            s = a.merge(s, f, r);
          }
          return a.compact(s);
        };
      },
      function (e, t, r) {
        "use strict";
        var a,
          i,
          n =
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
            ((a = o),
            void 0 !== (i = "function" == typeof a ? a.call(t, r, t, e) : a) &&
              (e.exports = i),
            (s = !0),
            "object" === n(t) && ((e.exports = o()), (s = !0)),
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
            function a(e, i, n) {
              var o;
              if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                  if (
                    ((n = t({ path: "/" }, a.defaults, n)),
                    "number" == typeof n.expires)
                  ) {
                    var s = new Date();
                    s.setMilliseconds(s.getMilliseconds() + 864e5 * n.expires),
                      (n.expires = s);
                  }
                  try {
                    (o = JSON.stringify(i)), /^[\{\[]/.test(o) && (i = o);
                  } catch (e) {}
                  return (
                    (i = r.write
                      ? r.write(i, e)
                      : encodeURIComponent(String(i)).replace(
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
                      i,
                      n.expires ? "; expires=" + n.expires.toUTCString() : "",
                      n.path ? "; path=" + n.path : "",
                      n.domain ? "; domain=" + n.domain : "",
                      n.secure ? "; secure" : "",
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
                    var h = c[0].replace(l, decodeURIComponent);
                    if (
                      ((f = r.read
                        ? r.read(f, h)
                        : r(f, h) || f.replace(l, decodeURIComponent)),
                      this.json)
                    )
                      try {
                        f = JSON.parse(f);
                      } catch (e) {}
                    if (e === h) {
                      o = f;
                      break;
                    }
                    e || (o[h] = f);
                  } catch (e) {}
                }
                return o;
              }
            }
            return (
              (a.set = a),
              (a.get = function (e) {
                return a.call(a, e);
              }),
              (a.getJSON = function () {
                return a.apply({ json: !0 }, [].slice.call(arguments));
              }),
              (a.defaults = {}),
              (a.remove = function (e, r) {
                a(e, "", t(r, { expires: -1 }));
              }),
              (a.withConverter = e),
              a
            );
          }
          var t = function () {
            for (var e = 0, t = {}; e < arguments.length; e++) {
              var r = arguments[e];
              for (var a in r) t[a] = r[a];
            }
            return t;
          };
          return e(function () {});
        });
      },
      function (e, t, r) {
        "use strict";
        function a(e, t) {
          return (
            (e = e || ""),
            (t = t || "litix.io"),
            e.match(/^[a-z0-9]+$/)
              ? "https://" + e + "." + t
              : "https://img.litix.io/a.gif"
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = r(0),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(a),
          n = function () {
            var e = void 0;
            switch (o()) {
              case "cellular":
                e = "cellular";
                break;
              case "ethernet":
                e = "ethernet";
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
            var e = i.default.navigator,
              t = e && (e.connection || e.mozConnection || e.webkitConnection);
            return t && t.type;
          };
        t.default = n;
      },
      function (e, t, r) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = r(0),
          n = a(i),
          o = r(4),
          s = a(o),
          u = r(48),
          l = a(u),
          d = r(1),
          c = a(d),
          f = r(17),
          h = a(f),
          p =
            !!n.default.XMLHttpRequest &&
            "withCredentials" in new n.default.XMLHttpRequest(),
          _ = {
            maxBeaconSize: 300,
            maxQueueLength: 3600,
            baseTimeBetweenBeacons: 5e3,
          },
          v = function (e, t) {
            (this._beaconUrl = e || "https://img.litix.io"),
              (this._eventQueue = []),
              (this._postInFlight = !1),
              (this._failureCount = 0),
              (this._sendTimeout = !1),
              (this._options = (0, c.default)({}, _, t));
          };
        (v.prototype.queueEvent = function (e, t) {
          var r = (0, c.default)({}, t);
          return p
            ? (this._eventQueue.length <= this._options.maxQueueLength ||
                "eventrateexceeded" === e) &&
                (this._eventQueue.push(r),
                this._sendTimeout || this._startBeaconSending(),
                this._eventQueue.length <= this._options.maxQueueLength)
            : (l.default.send(this._beaconUrl, r), !0);
        }),
          (v.prototype.flushEvents = function () {
            p &&
              (this._eventQueue.length && this._sendBeaconQueue(),
              this._startBeaconSending());
          }),
          (v.prototype.destroy = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            (this.destroyed = !0),
              e ? this._clearBeaconQueue() : this.flushEvents(),
              n.default.clearTimeout(this._sendTimeout);
          }),
          (v.prototype._clearBeaconQueue = function () {
            var e = n.default.navigator,
              t =
                this._eventQueue.length > this._options.maxBeaconSize
                  ? this._eventQueue.length - this._options.maxBeaconSize
                  : 0,
              r = this._eventQueue.slice(t);
            if (
              (t > 0 &&
                (0, c.default)(
                  r[r.length - 1],
                  (0, h.default)({ mux_view_message: "event queue truncated" })
                ),
              e.sendBeacon)
            )
              e.sendBeacon(this._beaconUrl, JSON.stringify({ events: r }));
            else if (n.default.XMLHttpRequest) {
              var a = new n.default.XMLHttpRequest();
              a.open("POST", this._beaconUrl),
                a.setRequestHeader("Content-Type", "application/json"),
                a.send(JSON.stringify({ events: r }));
            } else l.default.send(this._beaconUrl, r[r.length - 1]);
          }),
          (v.prototype._sendBeaconQueue = function () {
            var e = this;
            if (n.default.XMLHttpRequest && !this._postInFlight) {
              var t = new n.default.XMLHttpRequest(),
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
          (v.prototype._getNextBeaconTime = function () {
            if (!this._failureCount)
              return this._options.baseTimeBetweenBeacons;
            var e = Math.pow(2, this._failureCount - 1);
            return (
              (1 + (e *= Math.random())) * this._options.baseTimeBetweenBeacons
            );
          }),
          (v.prototype._startBeaconSending = function () {
            var e = this;
            n.default.clearTimeout(this._sendTimeout),
              this.destroyed ||
                (this._sendTimeout = n.default.setTimeout(function () {
                  e._eventQueue.length && e._sendBeaconQueue(),
                    e._startBeaconSending();
                }, this._getNextBeaconTime()));
          }),
          (t.default = v);
      },
      function (e, t, r) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = r(14),
          n = a(i),
          o = r(0),
          s = a(o),
          u = {};
        (u.send = function (e, t) {
          function r() {
            a.src = o + (i ? "&rc=" + i : "");
          }
          var a = new Image(),
            i = 0,
            o = e + "?" + n.default.stringify(t);
          return (
            a.addEventListener("error", function () {
              i > 3 ||
                s.default.setTimeout(function () {
                  i++, r();
                }, 5e3 * i);
            }),
            r(),
            a
          );
        }),
          (t.default = u);
      },
      function (e, t, r) {
        (function (e, a) {
          var i;
          (function () {
            "use strict";
            function n(e) {
              return (e = String(e)), e.charAt(0).toUpperCase() + e.slice(1);
            }
            function o(e, t, r) {
              var a = {
                "10.0": "10",
                6.4: "10 Technical Preview",
                6.3: "8.1",
                6.2: "8",
                6.1: "Server 2008 R2 / 7",
                "6.0": "Server 2008 / Vista",
                5.2: "Server 2003 / XP 64-bit",
                5.1: "XP",
                5.01: "2000 SP1",
                "5.0": "2000",
                "4.0": "NT",
                "4.90": "ME",
              };
              return (
                t &&
                  r &&
                  /^Win/i.test(e) &&
                  !/^Windows Phone /i.test(e) &&
                  (a = a[/[\d.]+$/.exec(e)]) &&
                  (e = "Windows " + a),
                (e = String(e)),
                t && r && (e = e.replace(RegExp(t, "i"), r)),
                (e = u(
                  e
                    .replace(/ ce$/i, " CE")
                    .replace(/\bhpw/i, "web")
                    .replace(/\bMacintosh\b/, "Mac OS")
                    .replace(/_PowerPC\b/i, " OS")
                    .replace(/\b(OS X) [^ \d]+/i, "$1")
                    .replace(/\bMac (OS X)\b/, "$1")
                    .replace(/\/(\d)/, " $1")
                    .replace(/_/g, ".")
                    .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
                    .replace(/\bx86\.64\b/gi, "x86_64")
                    .replace(/\b(Windows Phone) OS\b/, "$1")
                    .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
                    .split(" on ")[0]
                ))
              );
            }
            function s(e, t) {
              var r = -1,
                a = e ? e.length : 0;
              if ("number" == typeof a && a > -1 && a <= x)
                for (; ++r < a; ) t(e[r], r, e);
              else l(e, t);
            }
            function u(e) {
              return (e = p(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : n(e);
            }
            function l(e, t) {
              for (var r in e) E.call(e, r) && t(e[r], r, e);
            }
            function d(e) {
              return null == e ? n(e) : O.call(e).slice(8, -1);
            }
            function c(e, t) {
              var r = null != e ? typeof e[t] : "number";
              return !(
                /^(?:boolean|number|string|undefined)$/.test(r) ||
                ("object" == r && !e[t])
              );
            }
            function f(e) {
              return String(e).replace(/([ -])(?!$)/g, "$1?");
            }
            function h(e, t) {
              var r = null;
              return (
                s(e, function (a, i) {
                  r = t(r, a, i, e);
                }),
                r
              );
            }
            function p(e) {
              return String(e).replace(/^ +| +$/g, "");
            }
            function _(e) {
              function t(t) {
                return h(t, function (t, r) {
                  var a = r.pattern || f(r);
                  return (
                    !t &&
                      (t =
                        RegExp("\\b" + a + " *\\d+[.\\w_]*", "i").exec(e) ||
                        RegExp("\\b" + a + " *\\w+-[\\w]*", "i").exec(e) ||
                        RegExp(
                          "\\b" +
                            a +
                            "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)",
                          "i"
                        ).exec(e)) &&
                      ((t = String(
                        r.label && !RegExp(a, "i").test(r.label) ? r.label : t
                      ).split("/"))[1] &&
                        !/[\d.]+/.test(t[0]) &&
                        (t[0] += " " + t[1]),
                      (r = r.label || r),
                      (t = u(
                        t[0]
                          .replace(RegExp(a, "i"), r)
                          .replace(RegExp("; *(?:" + r + "[_-])?", "i"), " ")
                          .replace(
                            RegExp("(" + r + ")[-_.]?(\\w)", "i"),
                            "$1 $2"
                          )
                      ))),
                    t
                  );
                });
              }
              function r() {
                return this.description || "";
              }
              var a = y,
                i = e && "object" == typeof e && "String" != d(e);
              i && ((a = e), (e = null));
              var n = a.navigator || {},
                s = n.userAgent || "";
              e || (e = s);
              var v,
                b,
                g = i || T == m,
                w = i
                  ? !!n.likeChrome
                  : /\bChrome\b/.test(e) && !/internal|\n/i.test(O.toString()),
                x = i ? "Object" : "ScriptBridgingProxyObject",
                k = i ? "Object" : "Environment",
                E = i && a.java ? "JavaPackage" : d(a.java),
                M = i ? "Object" : "RuntimeObject",
                P = /\bJava/.test(E) && a.java,
                A = P && d(a.environment) == k,
                q = P ? "a" : "α",
                D = P ? "b" : "β",
                R = a.document || {},
                j = a.operamini || a.opera,
                I = S.test((I = i && j ? j["[[Class]]"] : d(j)))
                  ? I
                  : (j = null),
                L = e,
                C = [],
                H = null,
                N = e == s,
                B = N && j && "function" == typeof j.version && j.version(),
                F = (function (t) {
                  return h(t, function (t, r) {
                    return (
                      t ||
                      (RegExp("\\b" + (r.pattern || f(r)) + "\\b", "i").exec(
                        e
                      ) &&
                        (r.label || r))
                    );
                  });
                })([
                  { label: "EdgeHTML", pattern: "Edge" },
                  "Trident",
                  { label: "WebKit", pattern: "AppleWebKit" },
                  "iCab",
                  "Presto",
                  "NetFront",
                  "Tasman",
                  "KHTML",
                  "Gecko",
                ]),
                W = (function (t) {
                  return h(t, function (t, r) {
                    return (
                      t ||
                      (RegExp("\\b" + (r.pattern || f(r)) + "\\b", "i").exec(
                        e
                      ) &&
                        (r.label || r))
                    );
                  });
                })([
                  "Adobe AIR",
                  "Arora",
                  "Avant Browser",
                  "Breach",
                  "Camino",
                  "Electron",
                  "Epiphany",
                  "Fennec",
                  "Flock",
                  "Galeon",
                  "GreenBrowser",
                  "iCab",
                  "Iceweasel",
                  "K-Meleon",
                  "Konqueror",
                  "Lunascape",
                  "Maxthon",
                  { label: "Microsoft Edge", pattern: "Edge" },
                  "Midori",
                  "Nook Browser",
                  "PaleMoon",
                  "PhantomJS",
                  "Raven",
                  "Rekonq",
                  "RockMelt",
                  { label: "Samsung Internet", pattern: "SamsungBrowser" },
                  "SeaMonkey",
                  { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" },
                  "Sleipnir",
                  "SlimBrowser",
                  { label: "SRWare Iron", pattern: "Iron" },
                  "Sunrise",
                  "Swiftfox",
                  "Waterfox",
                  "WebPositive",
                  "Opera Mini",
                  { label: "Opera Mini", pattern: "OPiOS" },
                  "Opera",
                  { label: "Opera", pattern: "OPR" },
                  "Chrome",
                  { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" },
                  { label: "Firefox", pattern: "(?:Firefox|Minefield)" },
                  { label: "Firefox for iOS", pattern: "FxiOS" },
                  { label: "IE", pattern: "IEMobile" },
                  { label: "IE", pattern: "MSIE" },
                  "Safari",
                ]),
                U = t([
                  { label: "BlackBerry", pattern: "BB10" },
                  "BlackBerry",
                  { label: "Galaxy S", pattern: "GT-I9000" },
                  { label: "Galaxy S2", pattern: "GT-I9100" },
                  { label: "Galaxy S3", pattern: "GT-I9300" },
                  { label: "Galaxy S4", pattern: "GT-I9500" },
                  { label: "Galaxy S5", pattern: "SM-G900" },
                  { label: "Galaxy S6", pattern: "SM-G920" },
                  { label: "Galaxy S6 Edge", pattern: "SM-G925" },
                  { label: "Galaxy S7", pattern: "SM-G930" },
                  { label: "Galaxy S7 Edge", pattern: "SM-G935" },
                  "Google TV",
                  "Lumia",
                  "iPad",
                  "iPod",
                  "iPhone",
                  "Kindle",
                  {
                    label: "Kindle Fire",
                    pattern: "(?:Cloud9|Silk-Accelerated)",
                  },
                  "Nexus",
                  "Nook",
                  "PlayBook",
                  "PlayStation Vita",
                  "PlayStation",
                  "TouchPad",
                  "Transformer",
                  { label: "Wii U", pattern: "WiiU" },
                  "Wii",
                  "Xbox One",
                  { label: "Xbox 360", pattern: "Xbox" },
                  "Xoom",
                ]),
                G = (function (t) {
                  return h(t, function (t, r, a) {
                    return (
                      t ||
                      ((r[U] ||
                        r[/^[a-z]+(?: +[a-z]+\b)*/i.exec(U)] ||
                        RegExp("\\b" + f(a) + "(?:\\b|\\w*\\d)", "i").exec(
                          e
                        )) &&
                        a)
                    );
                  });
                })({
                  Apple: { iPad: 1, iPhone: 1, iPod: 1 },
                  Archos: {},
                  Amazon: { Kindle: 1, "Kindle Fire": 1 },
                  Asus: { Transformer: 1 },
                  "Barnes & Noble": { Nook: 1 },
                  BlackBerry: { PlayBook: 1 },
                  Google: { "Google TV": 1, Nexus: 1 },
                  HP: { TouchPad: 1 },
                  HTC: {},
                  LG: {},
                  Microsoft: { Xbox: 1, "Xbox One": 1 },
                  Motorola: { Xoom: 1 },
                  Nintendo: { "Wii U": 1, Wii: 1 },
                  Nokia: { Lumia: 1 },
                  Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1,
                    "Galaxy S3": 1,
                    "Galaxy S4": 1,
                  },
                  Sony: { PlayStation: 1, "PlayStation Vita": 1 },
                }),
                V = (function (t) {
                  return h(t, function (t, r) {
                    var a = r.pattern || f(r);
                    return (
                      !t &&
                        (t = RegExp(
                          "\\b" + a + "(?:/[\\d.]+|[ \\w.]*)",
                          "i"
                        ).exec(e)) &&
                        (t = o(t, a, r.label || r)),
                      t
                    );
                  });
                })([
                  "Windows Phone",
                  "Android",
                  "CentOS",
                  { label: "Chrome OS", pattern: "CrOS" },
                  "Debian",
                  "Fedora",
                  "FreeBSD",
                  "Gentoo",
                  "Haiku",
                  "Kubuntu",
                  "Linux Mint",
                  "OpenBSD",
                  "Red Hat",
                  "SuSE",
                  "Ubuntu",
                  "Xubuntu",
                  "Cygwin",
                  "Symbian OS",
                  "hpwOS",
                  "webOS ",
                  "webOS",
                  "Tablet OS",
                  "Tizen",
                  "Linux",
                  "Mac OS X",
                  "Macintosh",
                  "Mac",
                  "Windows 98;",
                  "Windows ",
                ]);
              if (
                (F && (F = [F]),
                G && !U && (U = t([G])),
                (v = /\bGoogle TV\b/.exec(U)) && (U = v[0]),
                /\bSimulator\b/i.test(e) &&
                  (U = (U ? U + " " : "") + "Simulator"),
                "Opera Mini" == W &&
                  /\bOPiOS\b/.test(e) &&
                  C.push("running in Turbo/Uncompressed mode"),
                "IE" == W && /\blike iPhone OS\b/.test(e)
                  ? ((v = _(e.replace(/like iPhone OS/, ""))),
                    (G = v.manufacturer),
                    (U = v.product))
                  : /^iP/.test(U)
                  ? (W || (W = "Safari"),
                    (V =
                      "iOS" +
                      ((v = / OS ([\d_]+)/i.exec(e))
                        ? " " + v[1].replace(/_/g, ".")
                        : "")))
                  : "Konqueror" != W || /buntu/i.test(V)
                  ? (G &&
                      "Google" != G &&
                      ((/Chrome/.test(W) && !/\bMobile Safari\b/i.test(e)) ||
                        /\bVita\b/.test(U))) ||
                    (/\bAndroid\b/.test(V) &&
                      /^Chrome/.test(W) &&
                      /\bVersion\//i.test(e))
                    ? ((W = "Android Browser"),
                      (V = /\bAndroid\b/.test(V) ? V : "Android"))
                    : "Silk" == W
                    ? (/\bMobi/i.test(e) ||
                        ((V = "Android"), C.unshift("desktop mode")),
                      /Accelerated *= *true/i.test(e) &&
                        C.unshift("accelerated"))
                    : "PaleMoon" == W && (v = /\bFirefox\/([\d.]+)\b/.exec(e))
                    ? C.push("identifying as Firefox " + v[1])
                    : "Firefox" == W && (v = /\b(Mobile|Tablet|TV)\b/i.exec(e))
                    ? (V || (V = "Firefox OS"), U || (U = v[1]))
                    : !W ||
                      (v =
                        !/\bMinefield\b/i.test(e) &&
                        /\b(?:Firefox|Safari)\b/.exec(W))
                    ? (W &&
                        !U &&
                        /[\/,]|^[^(]+?\)/.test(
                          e.slice(e.indexOf(v + "/") + 8)
                        ) &&
                        (W = null),
                      (v = U || G || V) &&
                        (U ||
                          G ||
                          /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(
                            V
                          )) &&
                        (W =
                          /[a-z]+(?: Hat)?/i.exec(
                            /\bAndroid\b/.test(V) ? V : v
                          ) + " Browser"))
                    : "Electron" == W &&
                      (v = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) &&
                      C.push("Chromium " + v)
                  : (V = "Kubuntu"),
                B ||
                  (B = (function (t) {
                    return h(t, function (t, r) {
                      return (
                        t ||
                        (RegExp(
                          r +
                            "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)",
                          "i"
                        ).exec(e) || 0)[1] ||
                        null
                      );
                    });
                  })([
                    "(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))",
                    "Version",
                    f(W),
                    "(?:Firefox|Minefield|NetFront)",
                  ])),
                (v =
                  ("iCab" == F && parseFloat(B) > 3 && "WebKit") ||
                  (/\bOpera\b/.test(W) &&
                    (/\bOPR\b/.test(e) ? "Blink" : "Presto")) ||
                  (/\b(?:Midori|Nook|Safari)\b/i.test(e) &&
                    !/^(?:Trident|EdgeHTML)$/.test(F) &&
                    "WebKit") ||
                  (!F &&
                    /\bMSIE\b/i.test(e) &&
                    ("Mac OS" == V ? "Tasman" : "Trident")) ||
                  ("WebKit" == F &&
                    /\bPlayStation\b(?! Vita\b)/i.test(W) &&
                    "NetFront")) && (F = [v]),
                "IE" == W && (v = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1])
                  ? ((W += " Mobile"),
                    (V = "Windows Phone " + (/\+$/.test(v) ? v : v + ".x")),
                    C.unshift("desktop mode"))
                  : /\bWPDesktop\b/i.test(e)
                  ? ((W = "IE Mobile"),
                    (V = "Windows Phone 8.x"),
                    C.unshift("desktop mode"),
                    B || (B = (/\brv:([\d.]+)/.exec(e) || 0)[1]))
                  : "IE" != W &&
                    "Trident" == F &&
                    (v = /\brv:([\d.]+)/.exec(e)) &&
                    (W && C.push("identifying as " + W + (B ? " " + B : "")),
                    (W = "IE"),
                    (B = v[1])),
                N)
              ) {
                if (c(a, "global"))
                  if (
                    (P &&
                      ((v = P.lang.System),
                      (L = v.getProperty("os.arch")),
                      (V =
                        V ||
                        v.getProperty("os.name") +
                          " " +
                          v.getProperty("os.version"))),
                    g && c(a, "system") && (v = [a.system])[0])
                  ) {
                    V || (V = v[0].os || null);
                    try {
                      (v[1] = a.require("ringo/engine").version),
                        (B = v[1].join(".")),
                        (W = "RingoJS");
                    } catch (e) {
                      v[0].global.system == a.system && (W = "Narwhal");
                    }
                  } else
                    "object" == typeof a.process &&
                    !a.process.browser &&
                    (v = a.process)
                      ? "object" == typeof v.versions
                        ? "string" == typeof v.versions.electron
                          ? (C.push("Node " + v.versions.node),
                            (W = "Electron"),
                            (B = v.versions.electron))
                          : "string" == typeof v.versions.nw &&
                            (C.push("Chromium " + B, "Node " + v.versions.node),
                            (W = "NW.js"),
                            (B = v.versions.nw))
                        : ((W = "Node.js"),
                          (L = v.arch),
                          (V = v.platform),
                          (B = /[\d.]+/.exec(v.version)),
                          (B = B ? B[0] : "unknown"))
                      : A && (W = "Rhino");
                else
                  d((v = a.runtime)) == x
                    ? ((W = "Adobe AIR"), (V = v.flash.system.Capabilities.os))
                    : d((v = a.phantom)) == M
                    ? ((W = "PhantomJS"),
                      (B =
                        (v = v.version || null) &&
                        v.major + "." + v.minor + "." + v.patch))
                    : "number" == typeof R.documentMode &&
                      (v = /\bTrident\/(\d+)/i.exec(e))
                    ? ((B = [B, R.documentMode]),
                      (v = +v[1] + 4) != B[1] &&
                        (C.push("IE " + B[1] + " mode"),
                        F && (F[1] = ""),
                        (B[1] = v)),
                      (B = "IE" == W ? String(B[1].toFixed(1)) : B[0]))
                    : "number" == typeof R.documentMode &&
                      /^(?:Chrome|Firefox)\b/.test(W) &&
                      (C.push("masking as " + W + " " + B),
                      (W = "IE"),
                      (B = "11.0"),
                      (F = ["Trident"]),
                      (V = "Windows"));
                V = V && u(V);
              }
              if (
                (B &&
                  (v =
                    /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(B) ||
                    /(?:alpha|beta)(?: ?\d)?/i.exec(
                      e + ";" + (N && n.appMinorVersion)
                    ) ||
                    (/\bMinefield\b/i.test(e) && "a")) &&
                  ((H = /b/i.test(v) ? "beta" : "alpha"),
                  (B =
                    B.replace(RegExp(v + "\\+?$"), "") +
                    ("beta" == H ? D : q) +
                    (/\d+\+?/.exec(v) || ""))),
                "Fennec" == W ||
                  ("Firefox" == W && /\b(?:Android|Firefox OS)\b/.test(V)))
              )
                W = "Firefox Mobile";
              else if ("Maxthon" == W && B) B = B.replace(/\.[\d.]+/, ".x");
              else if (/\bXbox\b/i.test(U))
                "Xbox 360" == U && (V = null),
                  "Xbox 360" == U &&
                    /\bIEMobile\b/.test(e) &&
                    C.unshift("mobile mode");
              else if (
                (!/^(?:Chrome|IE|Opera)$/.test(W) &&
                  (!W || U || /Browser|Mobi/.test(W))) ||
                ("Windows CE" != V && !/Mobi/i.test(e))
              )
                if ("IE" == W && N)
                  try {
                    null === a.external && C.unshift("platform preview");
                  } catch (e) {
                    C.unshift("embedded");
                  }
                else
                  (/\bBlackBerry\b/.test(U) || /\bBB10\b/.test(e)) &&
                  (v =
                    (RegExp(U.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(
                      e
                    ) || 0)[1] || B)
                    ? ((v = [v, /BB10/.test(e)]),
                      (V =
                        (v[1]
                          ? ((U = null), (G = "BlackBerry"))
                          : "Device Software") +
                        " " +
                        v[0]),
                      (B = null))
                    : this != l &&
                      "Wii" != U &&
                      ((N && j) ||
                        (/Opera/.test(W) && /\b(?:MSIE|Firefox)\b/i.test(e)) ||
                        ("Firefox" == W && /\bOS X (?:\d+\.){2,}/.test(V)) ||
                        ("IE" == W &&
                          ((V && !/^Win/.test(V) && B > 5.5) ||
                            (/\bWindows XP\b/.test(V) && B > 8) ||
                            (8 == B && !/\bTrident\b/.test(e))))) &&
                      !S.test((v = _.call(l, e.replace(S, "") + ";"))) &&
                      v.name &&
                      ((v =
                        "ing as " + v.name + ((v = v.version) ? " " + v : "")),
                      S.test(W)
                        ? (/\bIE\b/.test(v) && "Mac OS" == V && (V = null),
                          (v = "identify" + v))
                        : ((v = "mask" + v),
                          (W = I
                            ? u(I.replace(/([a-z])([A-Z])/g, "$1 $2"))
                            : "Opera"),
                          /\bIE\b/.test(v) && (V = null),
                          N || (B = null)),
                      (F = ["Presto"]),
                      C.push(v));
              else W += " Mobile";
              (v = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) &&
                ((v = [parseFloat(v.replace(/\.(\d)$/, ".0$1")), v]),
                "Safari" == W && "+" == v[1].slice(-1)
                  ? ((W = "WebKit Nightly"),
                    (H = "alpha"),
                    (B = v[1].slice(0, -1)))
                  : (B != v[1] &&
                      B !=
                        (v[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) ||
                    (B = null),
                (v[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1]),
                537.36 == v[0] &&
                  537.36 == v[2] &&
                  parseFloat(v[1]) >= 28 &&
                  "WebKit" == F &&
                  (F = ["Blink"]),
                N && (w || v[1])
                  ? (F && (F[1] = "like Chrome"),
                    (v =
                      v[1] ||
                      ((v = v[0]),
                      v < 530
                        ? 1
                        : v < 532
                        ? 2
                        : v < 532.05
                        ? 3
                        : v < 533
                        ? 4
                        : v < 534.03
                        ? 5
                        : v < 534.07
                        ? 6
                        : v < 534.1
                        ? 7
                        : v < 534.13
                        ? 8
                        : v < 534.16
                        ? 9
                        : v < 534.24
                        ? 10
                        : v < 534.3
                        ? 11
                        : v < 535.01
                        ? 12
                        : v < 535.02
                        ? "13+"
                        : v < 535.07
                        ? 15
                        : v < 535.11
                        ? 16
                        : v < 535.19
                        ? 17
                        : v < 536.05
                        ? 18
                        : v < 536.1
                        ? 19
                        : v < 537.01
                        ? 20
                        : v < 537.11
                        ? "21+"
                        : v < 537.13
                        ? 23
                        : v < 537.18
                        ? 24
                        : v < 537.24
                        ? 25
                        : v < 537.36
                        ? 26
                        : "Blink" != F
                        ? "27"
                        : "28")))
                  : (F && (F[1] = "like Safari"),
                    (v = v[0]),
                    (v =
                      v < 400
                        ? 1
                        : v < 500
                        ? 2
                        : v < 526
                        ? 3
                        : v < 533
                        ? 4
                        : v < 534
                        ? "4+"
                        : v < 535
                        ? 5
                        : v < 537
                        ? 6
                        : v < 538
                        ? 7
                        : v < 601
                        ? 8
                        : "8")),
                F &&
                  (F[1] +=
                    " " +
                    (v +=
                      "number" == typeof v ? ".x" : /[.+]/.test(v) ? "" : "+")),
                "Safari" == W && (!B || parseInt(B) > 45) && (B = v)),
                "Opera" == W && (v = /\bzbov|zvav$/.exec(V))
                  ? ((W += " "),
                    C.unshift("desktop mode"),
                    "zvav" == v ? ((W += "Mini"), (B = null)) : (W += "Mobile"),
                    (V = V.replace(RegExp(" *" + v + "$"), "")))
                  : "Safari" == W &&
                    /\bChrome\b/.exec(F && F[1]) &&
                    (C.unshift("desktop mode"),
                    (W = "Chrome Mobile"),
                    (B = null),
                    /\bOS X\b/.test(V)
                      ? ((G = "Apple"), (V = "iOS 4.3+"))
                      : (V = null)),
                B &&
                  0 == B.indexOf((v = /[\d.]+$/.exec(V))) &&
                  e.indexOf("/" + v + "-") > -1 &&
                  (V = p(V.replace(v, ""))),
                F &&
                  !/\b(?:Avant|Nook)\b/.test(W) &&
                  (/Browser|Lunascape|Maxthon/.test(W) ||
                    ("Safari" != W &&
                      /^iOS/.test(V) &&
                      /\bSafari\b/.test(F[1])) ||
                    (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
                      W
                    ) &&
                      F[1])) &&
                  (v = F[F.length - 1]) &&
                  C.push(v),
                C.length && (C = ["(" + C.join("; ") + ")"]),
                G && U && U.indexOf(G) < 0 && C.push("on " + G),
                U && C.push((/^on /.test(C[C.length - 1]) ? "" : "on ") + U),
                V &&
                  ((v = / ([\d.+]+)$/.exec(V)),
                  (b = v && "/" == V.charAt(V.length - v[0].length - 1)),
                  (V = {
                    architecture: 32,
                    family: v && !b ? V.replace(v[0], "") : V,
                    version: v ? v[1] : null,
                    toString: function () {
                      var e = this.version;
                      return (
                        this.family +
                        (e && !b ? " " + e : "") +
                        (64 == this.architecture ? " 64-bit" : "")
                      );
                    },
                  })),
                (v = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(L)) &&
                !/\bi686\b/i.test(L)
                  ? (V &&
                      ((V.architecture = 64),
                      (V.family = V.family.replace(RegExp(" *" + v), ""))),
                    W &&
                      (/\bWOW64\b/i.test(e) ||
                        (N &&
                          /\w(?:86|32)$/.test(n.cpuClass || n.platform) &&
                          !/\bWin64; x64\b/i.test(e))) &&
                      C.unshift("32-bit"))
                  : V &&
                    /^OS X/.test(V.family) &&
                    "Chrome" == W &&
                    parseFloat(B) >= 39 &&
                    (V.architecture = 64),
                e || (e = null);
              var J = {};
              return (
                (J.description = e),
                (J.layout = F && F[0]),
                (J.manufacturer = G),
                (J.name = W),
                (J.prerelease = H),
                (J.product = U),
                (J.ua = e),
                (J.version = W && B),
                (J.os = V || {
                  architecture: null,
                  family: null,
                  version: null,
                  toString: function () {
                    return "null";
                  },
                }),
                (J.parse = _),
                (J.toString = r),
                J.version && C.unshift(B),
                J.name && C.unshift(W),
                V &&
                  W &&
                  (V != String(V).split(" ")[0] ||
                    (V != W.split(" ")[0] && !U)) &&
                  C.push(U ? "(" + V + ")" : "on " + V),
                C.length && (J.description = C.join(" ")),
                J
              );
            }
            var v = { function: !0, object: !0 },
              y = (v[typeof window] && window) || this,
              m = y,
              b = v[typeof t] && t,
              g = v[typeof e] && e && !e.nodeType && e,
              w = b && g && "object" == typeof a && a;
            !w || (w.global !== w && w.window !== w && w.self !== w) || (y = w);
            var x = Math.pow(2, 53) - 1,
              S = /\bOpera/,
              T = this,
              k = Object.prototype,
              E = k.hasOwnProperty,
              O = k.toString,
              M = _();
            (y.platform = M),
              void 0 !==
                (i = function () {
                  return M;
                }.call(t, r, t, e)) && (e.exports = i);
          }.call(this));
        }.call(t, r(13)(e), r(6)));
      },
      function (e, t, r) {
        "use strict";
        function a() {
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
              var h = (d / f) * 8e3;
              s++,
                (i += d),
                (n += f),
                (this.data.view_min_request_throughput = Math.min(
                  this.data.view_min_request_throughput || 1 / 0,
                  h
                )),
                (this.data.view_average_request_throughput = (i / n) * 8e3),
                (this.data.view_request_count = o),
                c > 0 &&
                  ((a += c),
                  (this.data.view_max_request_latency = Math.max(
                    this.data.view_max_request_latency || 0,
                    c
                  )),
                  (this.data.view_average_request_latency = a / s));
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
          var a = 0,
            i = 0,
            n = 0,
            o = 0,
            s = 0,
            u = 0,
            l = 0;
          this.on("requestcompleted", e),
            this.on("requestfailed", t),
            this.on("requestcanceled", r);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
      },
      function (e, t, r) {
        "use strict";
        function a(e, t, r) {
          var a = (0, u.findMediaElement)(t),
            o = n(a, 3),
            c = o[0],
            f = o[1],
            h = o[2],
            p = e.log,
            _ = e.utils.getComputedStyle,
            v = e.utils.secondsToMs,
            y = { automaticErrorTracking: !0 };
          return c
            ? "video" !== h && "audio" !== h
              ? p.error("The element of `" + f + "` was not a media element.")
              : ((r = (0, s.default)(y, r)),
                (r.data = (0, s.default)(
                  {
                    player_software: "HTML5 Video Element",
                    player_software_version: "No Versions",
                    player_mux_plugin_name: "VideoElementMonitor",
                    player_mux_plugin_version: "3.4.3",
                  },
                  r.data
                )),
                (r.getPlayheadTime = function () {
                  return v(c.currentTime);
                }),
                (r.getStateData = function () {
                  var e = this.hlsjs && this.hlsjs.url,
                    t =
                      this.dashjs &&
                      i("function" === this.dashjs.getSource) &&
                      this.dashjs.getSource();
                  return {
                    player_is_paused: c.paused,
                    player_playhead_time: v(c.currentTime),
                    player_width: parseInt(_(c, "width")),
                    player_height: parseInt(_(c, "height")),
                    player_autoplay_on: c.autoplay,
                    player_preload_on: c.preload,
                    video_poster_url: c.poster,
                    video_source_url: e || t || c.currentSrc,
                    video_source_duration: v(c.duration),
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
                    a = n(r, 3),
                    i = a[0],
                    o = a[1],
                    l = a[2];
                  return i
                    ? "video" !== l && "audio" !== l
                      ? e.log.error(
                          "The element of `" + o + "` was not a media element."
                        )
                      : ((i.muxId = c.muxId),
                        delete c.muxId,
                        (i.mux = i.mux || {}),
                        (i.mux.listeners = (0, s.default)({}, c.mux.listeners)),
                        delete c.mux.listeners,
                        Object.keys(i.mux.listeners).forEach(function (e) {
                          c.removeEventListener(e, i.mux.listeners[e], !1),
                            i.addEventListener(e, i.mux.listeners[e], !1);
                        }),
                        (i.mux.swapElement = c.mux.swapElement),
                        (i.mux.destroy = c.mux.destroy),
                        delete c.mux,
                        void (c = i))
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
            : p.error(
                "No element was found with the `" + f + "` query selector."
              );
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i =
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
          n = (function () {
            function e(e, t) {
              var r = [],
                a = !0,
                i = !1,
                n = void 0;
              try {
                for (
                  var o, s = e[Symbol.iterator]();
                  !(a = (o = s.next()).done) &&
                  (r.push(o.value), !t || r.length !== t);
                  a = !0
                );
              } catch (e) {
                (i = !0), (n = e);
              } finally {
                try {
                  !a && s.return && s.return();
                } finally {
                  if (i) throw n;
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
        t.default = a;
        var o = r(1),
          s = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(o),
          u = r(9),
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
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = r(53),
          n = a(i),
          o = r(2),
          s = a(o),
          u = r(54),
          l = a(u),
          d = r(55),
          c = a(d),
          f = r(1),
          h = a(f),
          p = r(8),
          _ = a(p),
          v = r(5),
          y = r(3),
          m = a(y),
          b = {};
        (b.safeCall = n.default),
          (b.safeIncrement = s.default),
          (b.getComputedStyle = l.default),
          (b.secondsToMs = c.default),
          (b.assign = h.default),
          (b.headersStringToObject = _.default),
          (b.extractHostnameAndDomain = v.extractHostnameAndDomain),
          (b.extractHostname = v.extractHostname),
          (b.now = m.default.now),
          (t.default = b);
      },
      function (e, t, r) {
        "use strict";
        function a(e, t, r, a) {
          var i = a;
          if (e && "function" == typeof e[t])
            try {
              i = e[t].apply(e, r);
            } catch (e) {
              n.default.info("safeCall error", e);
            }
          return i;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
        var i = r(4),
          n = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(i);
      },
      function (e, t, r) {
        "use strict";
        function a(e, t) {
          if (n.default.defaultView && n.default.defaultView.getComputedStyle)
            return n.default.defaultView
              .getComputedStyle(e, null)
              .getPropertyValue(t);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
        var i = r(12),
          n = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(i);
      },
      function (e, t, r) {
        "use strict";
        function a(e) {
          return Math.floor(1e3 * e);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
      },
    ]);
  });
})();
