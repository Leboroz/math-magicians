/*! For license information please see main.8dcf1b7a.js.LICENSE.txt */
!(function () {
  var e = {
      395: function (e, t, n) {
        var r;
        !(function (o) {
          'use strict';
          var a,
            i = 1e6,
            l = 1e6,
            u = '[big.js] ',
            s = u + 'Invalid ',
            c = s + 'decimal places',
            f = u + 'Division by zero',
            d = {},
            p = void 0,
            v = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
          function h(e, t, n, r) {
            var o = e.c;
            if (
              (n === p && (n = e.constructor.RM),
              0 !== n && 1 !== n && 2 !== n && 3 !== n)
            )
              throw Error('[big.js] Invalid rounding mode');
            if (t < 1)
              (r =
                (3 === n && (r || !!o[0])) ||
                (0 === t &&
                  ((1 === n && o[0] >= 5) ||
                    (2 === n &&
                      (o[0] > 5 || (5 === o[0] && (r || o[1] !== p))))))),
                (o.length = 1),
                r ? ((e.e = e.e - t + 1), (o[0] = 1)) : (o[0] = e.e = 0);
            else if (t < o.length) {
              if (
                ((r =
                  (1 === n && o[t] >= 5) ||
                  (2 === n &&
                    (o[t] > 5 ||
                      (5 === o[t] && (r || o[t + 1] !== p || 1 & o[t - 1])))) ||
                  (3 === n && (r || !!o[0]))),
                (o.length = t--),
                r)
              )
                for (; ++o[t] > 9; ) (o[t] = 0), t-- || (++e.e, o.unshift(1));
              for (t = o.length; !o[--t]; ) o.pop();
            }
            return e;
          }
          function m(e, t, n) {
            var r = e.e,
              o = e.c.join(''),
              a = o.length;
            if (t)
              o =
                o.charAt(0) +
                (a > 1 ? '.' + o.slice(1) : '') +
                (r < 0 ? 'e' : 'e+') +
                r;
            else if (r < 0) {
              for (; ++r; ) o = '0' + o;
              o = '0.' + o;
            } else if (r > 0)
              if (++r > a) for (r -= a; r--; ) o += '0';
              else r < a && (o = o.slice(0, r) + '.' + o.slice(r));
            else a > 1 && (o = o.charAt(0) + '.' + o.slice(1));
            return e.s < 0 && n ? '-' + o : o;
          }
          (d.abs = function () {
            var e = new this.constructor(this);
            return (e.s = 1), e;
          }),
            (d.cmp = function (e) {
              var t,
                n = this,
                r = n.c,
                o = (e = new n.constructor(e)).c,
                a = n.s,
                i = e.s,
                l = n.e,
                u = e.e;
              if (!r[0] || !o[0]) return r[0] ? a : o[0] ? -i : 0;
              if (a != i) return a;
              if (((t = a < 0), l != u)) return (l > u) ^ t ? 1 : -1;
              for (
                i = (l = r.length) < (u = o.length) ? l : u, a = -1;
                ++a < i;

              )
                if (r[a] != o[a]) return (r[a] > o[a]) ^ t ? 1 : -1;
              return l == u ? 0 : (l > u) ^ t ? 1 : -1;
            }),
            (d.div = function (e) {
              var t = this,
                n = t.constructor,
                r = t.c,
                o = (e = new n(e)).c,
                a = t.s == e.s ? 1 : -1,
                l = n.DP;
              if (l !== ~~l || l < 0 || l > i) throw Error(c);
              if (!o[0]) throw Error(f);
              if (!r[0]) return (e.s = a), (e.c = [(e.e = 0)]), e;
              var u,
                s,
                d,
                v,
                m,
                g = o.slice(),
                y = (u = o.length),
                b = r.length,
                w = r.slice(0, u),
                x = w.length,
                E = e,
                k = (E.c = []),
                S = 0,
                C = l + (E.e = t.e - e.e) + 1;
              for (E.s = a, a = C < 0 ? 0 : C, g.unshift(0); x++ < u; )
                w.push(0);
              do {
                for (d = 0; d < 10; d++) {
                  if (u != (x = w.length)) v = u > x ? 1 : -1;
                  else
                    for (m = -1, v = 0; ++m < u; )
                      if (o[m] != w[m]) {
                        v = o[m] > w[m] ? 1 : -1;
                        break;
                      }
                  if (!(v < 0)) break;
                  for (s = x == u ? o : g; x; ) {
                    if (w[--x] < s[x]) {
                      for (m = x; m && !w[--m]; ) w[m] = 9;
                      --w[m], (w[x] += 10);
                    }
                    w[x] -= s[x];
                  }
                  for (; !w[0]; ) w.shift();
                }
                (k[S++] = v ? d : ++d),
                  w[0] && v ? (w[x] = r[y] || 0) : (w = [r[y]]);
              } while ((y++ < b || w[0] !== p) && a--);
              return (
                k[0] || 1 == S || (k.shift(), E.e--, C--),
                S > C && h(E, C, n.RM, w[0] !== p),
                E
              );
            }),
            (d.eq = function (e) {
              return 0 === this.cmp(e);
            }),
            (d.gt = function (e) {
              return this.cmp(e) > 0;
            }),
            (d.gte = function (e) {
              return this.cmp(e) > -1;
            }),
            (d.lt = function (e) {
              return this.cmp(e) < 0;
            }),
            (d.lte = function (e) {
              return this.cmp(e) < 1;
            }),
            (d.minus = d.sub =
              function (e) {
                var t,
                  n,
                  r,
                  o,
                  a = this,
                  i = a.constructor,
                  l = a.s,
                  u = (e = new i(e)).s;
                if (l != u) return (e.s = -u), a.plus(e);
                var s = a.c.slice(),
                  c = a.e,
                  f = e.c,
                  d = e.e;
                if (!s[0] || !f[0])
                  return (
                    f[0] ? (e.s = -u) : s[0] ? (e = new i(a)) : (e.s = 1), e
                  );
                if ((l = c - d)) {
                  for (
                    (o = l < 0) ? ((l = -l), (r = s)) : ((d = c), (r = f)),
                      r.reverse(),
                      u = l;
                    u--;

                  )
                    r.push(0);
                  r.reverse();
                } else
                  for (
                    n = ((o = s.length < f.length) ? s : f).length, l = u = 0;
                    u < n;
                    u++
                  )
                    if (s[u] != f[u]) {
                      o = s[u] < f[u];
                      break;
                    }
                if (
                  (o && ((r = s), (s = f), (f = r), (e.s = -e.s)),
                  (u = (n = f.length) - (t = s.length)) > 0)
                )
                  for (; u--; ) s[t++] = 0;
                for (u = t; n > l; ) {
                  if (s[--n] < f[n]) {
                    for (t = n; t && !s[--t]; ) s[t] = 9;
                    --s[t], (s[n] += 10);
                  }
                  s[n] -= f[n];
                }
                for (; 0 === s[--u]; ) s.pop();
                for (; 0 === s[0]; ) s.shift(), --d;
                return (
                  s[0] || ((e.s = 1), (s = [(d = 0)])), (e.c = s), (e.e = d), e
                );
              }),
            (d.mod = function (e) {
              var t,
                n = this,
                r = n.constructor,
                o = n.s,
                a = (e = new r(e)).s;
              if (!e.c[0]) throw Error(f);
              return (
                (n.s = e.s = 1),
                (t = 1 == e.cmp(n)),
                (n.s = o),
                (e.s = a),
                t
                  ? new r(n)
                  : ((o = r.DP),
                    (a = r.RM),
                    (r.DP = r.RM = 0),
                    (n = n.div(e)),
                    (r.DP = o),
                    (r.RM = a),
                    this.minus(n.times(e)))
              );
            }),
            (d.plus = d.add =
              function (e) {
                var t,
                  n,
                  r,
                  o = this,
                  a = o.constructor;
                if (((e = new a(e)), o.s != e.s))
                  return (e.s = -e.s), o.minus(e);
                var i = o.e,
                  l = o.c,
                  u = e.e,
                  s = e.c;
                if (!l[0] || !s[0])
                  return s[0] || (l[0] ? (e = new a(o)) : (e.s = o.s)), e;
                if (((l = l.slice()), (t = i - u))) {
                  for (
                    t > 0 ? ((u = i), (r = s)) : ((t = -t), (r = l)),
                      r.reverse();
                    t--;

                  )
                    r.push(0);
                  r.reverse();
                }
                for (
                  l.length - s.length < 0 && ((r = s), (s = l), (l = r)),
                    t = s.length,
                    n = 0;
                  t;
                  l[t] %= 10
                )
                  n = ((l[--t] = l[t] + s[t] + n) / 10) | 0;
                for (n && (l.unshift(n), ++u), t = l.length; 0 === l[--t]; )
                  l.pop();
                return (e.c = l), (e.e = u), e;
              }),
            (d.pow = function (e) {
              var t = this,
                n = new t.constructor('1'),
                r = n,
                o = e < 0;
              if (e !== ~~e || e < -1e6 || e > l) throw Error(s + 'exponent');
              for (o && (e = -e); 1 & e && (r = r.times(t)), (e >>= 1); )
                t = t.times(t);
              return o ? n.div(r) : r;
            }),
            (d.prec = function (e, t) {
              if (e !== ~~e || e < 1 || e > i) throw Error(s + 'precision');
              return h(new this.constructor(this), e, t);
            }),
            (d.round = function (e, t) {
              if (e === p) e = 0;
              else if (e !== ~~e || e < -i || e > i) throw Error(c);
              return h(new this.constructor(this), e + this.e + 1, t);
            }),
            (d.sqrt = function () {
              var e,
                t,
                n,
                r = this,
                o = r.constructor,
                a = r.s,
                i = r.e,
                l = new o('0.5');
              if (!r.c[0]) return new o(r);
              if (a < 0) throw Error(u + 'No square root');
              0 === (a = Math.sqrt(r + '')) || a === 1 / 0
                ? (((t = r.c.join('')).length + i) & 1 || (t += '0'),
                  (i = (((i + 1) / 2) | 0) - (i < 0 || 1 & i)),
                  (e = new o(
                    ((a = Math.sqrt(t)) == 1 / 0
                      ? '5e'
                      : (a = a.toExponential()).slice(0, a.indexOf('e') + 1)) +
                      i
                  )))
                : (e = new o(a + '')),
                (i = e.e + (o.DP += 4));
              do {
                (n = e), (e = l.times(n.plus(r.div(n))));
              } while (n.c.slice(0, i).join('') !== e.c.slice(0, i).join(''));
              return h(e, (o.DP -= 4) + e.e + 1, o.RM);
            }),
            (d.times = d.mul =
              function (e) {
                var t,
                  n = this,
                  r = n.constructor,
                  o = n.c,
                  a = (e = new r(e)).c,
                  i = o.length,
                  l = a.length,
                  u = n.e,
                  s = e.e;
                if (((e.s = n.s == e.s ? 1 : -1), !o[0] || !a[0]))
                  return (e.c = [(e.e = 0)]), e;
                for (
                  e.e = u + s,
                    i < l &&
                      ((t = o), (o = a), (a = t), (s = i), (i = l), (l = s)),
                    t = new Array((s = i + l));
                  s--;

                )
                  t[s] = 0;
                for (u = l; u--; ) {
                  for (l = 0, s = i + u; s > u; )
                    (l = t[s] + a[u] * o[s - u - 1] + l),
                      (t[s--] = l % 10),
                      (l = (l / 10) | 0);
                  t[s] = l;
                }
                for (l ? ++e.e : t.shift(), u = t.length; !t[--u]; ) t.pop();
                return (e.c = t), e;
              }),
            (d.toExponential = function (e, t) {
              var n = this,
                r = n.c[0];
              if (e !== p) {
                if (e !== ~~e || e < 0 || e > i) throw Error(c);
                for (n = h(new n.constructor(n), ++e, t); n.c.length < e; )
                  n.c.push(0);
              }
              return m(n, !0, !!r);
            }),
            (d.toFixed = function (e, t) {
              var n = this,
                r = n.c[0];
              if (e !== p) {
                if (e !== ~~e || e < 0 || e > i) throw Error(c);
                for (
                  e = e + (n = h(new n.constructor(n), e + n.e + 1, t)).e + 1;
                  n.c.length < e;

                )
                  n.c.push(0);
              }
              return m(n, !1, !!r);
            }),
            (d.toJSON = d.toString =
              function () {
                var e = this,
                  t = e.constructor;
                return m(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0]);
              }),
            (d.toNumber = function () {
              var e = Number(m(this, !0, !0));
              if (!0 === this.constructor.strict && !this.eq(e.toString()))
                throw Error(u + 'Imprecise conversion');
              return e;
            }),
            (d.toPrecision = function (e, t) {
              var n = this,
                r = n.constructor,
                o = n.c[0];
              if (e !== p) {
                if (e !== ~~e || e < 1 || e > i) throw Error(s + 'precision');
                for (n = h(new r(n), e, t); n.c.length < e; ) n.c.push(0);
              }
              return m(n, e <= n.e || n.e <= r.NE || n.e >= r.PE, !!o);
            }),
            (d.valueOf = function () {
              var e = this,
                t = e.constructor;
              if (!0 === t.strict) throw Error(u + 'valueOf disallowed');
              return m(e, e.e <= t.NE || e.e >= t.PE, !0);
            }),
            (a = (function e() {
              function t(n) {
                var r = this;
                if (!(r instanceof t)) return n === p ? e() : new t(n);
                if (n instanceof t)
                  (r.s = n.s), (r.e = n.e), (r.c = n.c.slice());
                else {
                  if ('string' !== typeof n) {
                    if (!0 === t.strict) throw TypeError(s + 'number');
                    n = 0 === n && 1 / n < 0 ? '-0' : String(n);
                  }
                  !(function (e, t) {
                    var n, r, o;
                    if (!v.test(t)) throw Error(s + 'number');
                    (e.s = '-' == t.charAt(0) ? ((t = t.slice(1)), -1) : 1),
                      (n = t.indexOf('.')) > -1 && (t = t.replace('.', ''));
                    (r = t.search(/e/i)) > 0
                      ? (n < 0 && (n = r),
                        (n += +t.slice(r + 1)),
                        (t = t.substring(0, r)))
                      : n < 0 && (n = t.length);
                    for (o = t.length, r = 0; r < o && '0' == t.charAt(r); )
                      ++r;
                    if (r == o) e.c = [(e.e = 0)];
                    else {
                      for (; o > 0 && '0' == t.charAt(--o); );
                      for (e.e = n - r - 1, e.c = [], n = 0; r <= o; )
                        e.c[n++] = +t.charAt(r++);
                    }
                  })(r, n);
                }
                r.constructor = t;
              }
              return (
                (t.prototype = d),
                (t.DP = 20),
                (t.RM = 1),
                (t.NE = -7),
                (t.PE = 21),
                (t.strict = false),
                (t.roundDown = 0),
                (t.roundHalfUp = 1),
                (t.roundHalfEven = 2),
                (t.roundUp = 3),
                t
              );
            })()),
            (a.default = a.Big = a),
            void 0 ===
              (r = function () {
                return a;
              }.call(t, n, t, e)) || (e.exports = r);
        })();
      },
      725: function (e) {
        'use strict';
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function o(e) {
          if (null === e || void 0 === e)
            throw new TypeError(
              'Object.assign cannot be called with null or undefined'
            );
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String('abc');
            if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t['_' + String.fromCharCode(n)] = n;
            if (
              '0123456789' !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join('')
            )
              return !1;
            var r = {};
            return (
              'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                r[e] = e;
              }),
              'abcdefghijklmnopqrst' ===
                Object.keys(Object.assign({}, r)).join('')
            );
          } catch (o) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, a) {
              for (var i, l, u = o(e), s = 1; s < arguments.length; s++) {
                for (var c in (i = Object(arguments[s])))
                  n.call(i, c) && (u[c] = i[c]);
                if (t) {
                  l = t(i);
                  for (var f = 0; f < l.length; f++)
                    r.call(i, l[f]) && (u[l[f]] = i[l[f]]);
                }
              }
              return u;
            };
      },
      463: function (e, t, n) {
        'use strict';
        var r = n(791),
          o = n(725),
          a = n(296);
        function i(e) {
          for (
            var t =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        if (!r) throw Error(i(227));
        var l = new Set(),
          u = {};
        function s(e, t) {
          c(e, t), c(e + 'Capture', t);
        }
        function c(e, t) {
          for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var f = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = Object.prototype.hasOwnProperty,
          v = {},
          h = {};
        function m(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var g = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function w(e, t, n, r) {
          var o = g.hasOwnProperty(t) ? g[t] : null;
          (null !== o
            ? 0 === o.type
            : !r &&
              2 < t.length &&
              ('o' === t[0] || 'O' === t[0]) &&
              ('n' === t[1] || 'N' === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null === t ||
                'undefined' === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                            'aria-' !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!p.call(h, e) ||
                    (!p.call(v, e) &&
                      (d.test(e) ? (h[e] = !0) : ((v[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && '' : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ''
                        : '' + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(y, b);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(y, b);
              g[t] = new m(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(y, b);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1
            );
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          E = 60103,
          k = 60106,
          S = 60107,
          C = 60108,
          P = 60114,
          T = 60109,
          _ = 60110,
          O = 60112,
          L = 60113,
          M = 60120,
          A = 60115,
          R = 60116,
          N = 60121,
          V = 60128,
          D = 60129,
          j = 60130,
          F = 60131;
        if ('function' === typeof Symbol && Symbol.for) {
          var z = Symbol.for;
          (E = z('react.element')),
            (k = z('react.portal')),
            (S = z('react.fragment')),
            (C = z('react.strict_mode')),
            (P = z('react.profiler')),
            (T = z('react.provider')),
            (_ = z('react.context')),
            (O = z('react.forward_ref')),
            (L = z('react.suspense')),
            (M = z('react.suspense_list')),
            (A = z('react.memo')),
            (R = z('react.lazy')),
            (N = z('react.block')),
            z('react.scope'),
            (V = z('react.opaque.id')),
            (D = z('react.debug_trace_mode')),
            (j = z('react.offscreen')),
            (F = z('react.legacy_hidden'));
        }
        var I,
          U = 'function' === typeof Symbol && Symbol.iterator;
        function B(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (U && e[U]) || e['@@iterator'])
            ? e
            : null;
        }
        function W(e) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              I = (t && t[1]) || '';
            }
          return '\n' + I + e;
        }
        var H = !1;
        function $(e, t) {
          if (!e || H) return '';
          H = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && 'string' === typeof u.stack) {
              for (
                var o = u.stack.split('\n'),
                  a = r.stack.split('\n'),
                  i = o.length - 1,
                  l = a.length - 1;
                1 <= i && 0 <= l && o[i] !== a[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== a[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || o[i] !== a[l]))
                        return '\n' + o[i].replace(' at new ', ' at ');
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (H = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : '') ? W(e) : '';
        }
        function q(e) {
          switch (e.tag) {
            case 5:
              return W(e.type);
            case 16:
              return W('Lazy');
            case 13:
              return W('Suspense');
            case 19:
              return W('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (e = $(e.type, !1));
            case 11:
              return (e = $(e.type.render, !1));
            case 22:
              return (e = $(e.type._render, !1));
            case 1:
              return (e = $(e.type, !0));
            default:
              return '';
          }
        }
        function Q(e) {
          if (null == e) return null;
          if ('function' === typeof e) return e.displayName || e.name || null;
          if ('string' === typeof e) return e;
          switch (e) {
            case S:
              return 'Fragment';
            case k:
              return 'Portal';
            case P:
              return 'Profiler';
            case C:
              return 'StrictMode';
            case L:
              return 'Suspense';
            case M:
              return 'SuspenseList';
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case _:
                return (e.displayName || 'Context') + '.Consumer';
              case T:
                return (e._context.displayName || 'Context') + '.Provider';
              case O:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ''),
                  e.displayName ||
                    ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
                );
              case A:
                return Q(e.type);
              case N:
                return Q(e._render);
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return Q(e(t));
                } catch (n) {}
            }
          return null;
        }
        function Y(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'object':
            case 'string':
            case 'undefined':
              return e;
            default:
              return '';
          }
        }
        function X(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            'input' === e.toLowerCase() &&
            ('checkbox' === t || 'radio' === t)
          );
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = X(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
              if (
                !e.hasOwnProperty(t) &&
                'undefined' !== typeof n &&
                'function' === typeof n.get &&
                'function' === typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = '' + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = '' + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function G(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = '';
          return (
            e && (r = X(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Z(e) {
          if (
            'undefined' ===
            typeof (e =
              e || ('undefined' !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return o({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = Y(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                'checkbox' === t.type || 'radio' === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && w(e, 'checked', t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = Y(t.value),
            r = t.type;
          if (null != n)
            'number' === r
              ? ((0 === n && '' === e.value) || e.value != n) &&
                (e.value = '' + n)
              : e.value !== '' + n && (e.value = '' + n);
          else if ('submit' === r || 'reset' === r)
            return void e.removeAttribute('value');
          t.hasOwnProperty('value')
            ? oe(e, t.type, n)
            : t.hasOwnProperty('defaultValue') &&
              oe(e, t.type, Y(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type;
            if (
              !(
                ('submit' !== r && 'reset' !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = '' + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          '' !== (n = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== n && (e.name = n);
        }
        function oe(e, t, n) {
          ('number' === t && Z(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
        }
        function ae(e, t) {
          return (
            (e = o({ children: void 0 }, t)),
            (t = (function (e) {
              var t = '';
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function ie(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = '' + Y(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function le(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return o({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          });
        }
        function ue(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ''), (n = t);
          }
          e._wrapperState = { initialValue: Y(n) };
        }
        function se(e, t) {
          var n = Y(t.value),
            r = Y(t.defaultValue);
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = '' + r);
        }
        function ce(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            '' !== t &&
            null !== t &&
            (e.value = t);
        }
        var fe = 'http://www.w3.org/1999/xhtml',
          de = 'http://www.w3.org/2000/svg';
        function pe(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function ve(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? pe(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
            ? 'http://www.w3.org/1999/xhtml'
            : e;
        }
        var he,
          me,
          ge =
            ((me = function (e, t) {
              if (e.namespaceURI !== de || 'innerHTML' in e) e.innerHTML = t;
              else {
                for (
                  (he = he || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = he.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return me(e, t);
                  });
                }
              : me);
        function ye(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var be = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          we = ['Webkit', 'ms', 'Moz', 'O'];
        function xe(e, t, n) {
          return null == t || 'boolean' === typeof t || '' === t
            ? ''
            : n ||
              'number' !== typeof t ||
              0 === t ||
              (be.hasOwnProperty(e) && be[e])
            ? ('' + t).trim()
            : t + 'px';
        }
        function Ee(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                o = xe(n, t[n], r);
              'float' === n && (n = 'cssFloat'),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(be).forEach(function (e) {
          we.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (be[t] = be[e]);
          });
        });
        var ke = o(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function Se(e, t) {
          if (t) {
            if (
              ke[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                'object' !== typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && 'object' !== typeof t.style)
              throw Error(i(62));
          }
        }
        function Ce(e, t) {
          if (-1 === e.indexOf('-')) return 'string' === typeof t.is;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        function Pe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Te = null,
          _e = null,
          Oe = null;
        function Le(e) {
          if ((e = ro(e))) {
            if ('function' !== typeof Te) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = ao(t)), Te(e.stateNode, e.type, t));
          }
        }
        function Me(e) {
          _e ? (Oe ? Oe.push(e) : (Oe = [e])) : (_e = e);
        }
        function Ae() {
          if (_e) {
            var e = _e,
              t = Oe;
            if (((Oe = _e = null), Le(e), t))
              for (e = 0; e < t.length; e++) Le(t[e]);
          }
        }
        function Re(e, t) {
          return e(t);
        }
        function Ne(e, t, n, r, o) {
          return e(t, n, r, o);
        }
        function Ve() {}
        var De = Re,
          je = !1,
          Fe = !1;
        function ze() {
          (null === _e && null === Oe) || (Ve(), Ae());
        }
        function Ie(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ao(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && 'function' !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Ue = !1;
        if (f)
          try {
            var Be = {};
            Object.defineProperty(Be, 'passive', {
              get: function () {
                Ue = !0;
              },
            }),
              window.addEventListener('test', Be, Be),
              window.removeEventListener('test', Be, Be);
          } catch (me) {
            Ue = !1;
          }
        function We(e, t, n, r, o, a, i, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var He = !1,
          $e = null,
          qe = !1,
          Qe = null,
          Ye = {
            onError: function (e) {
              (He = !0), ($e = e);
            },
          };
        function Xe(e, t, n, r, o, a, i, l, u) {
          (He = !1), ($e = null), We.apply(Ye, arguments);
        }
        function Ke(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ge(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ze(e) {
          if (Ke(e) !== e) throw Error(i(188));
        }
        function Je(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ke(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var a = o.alternate;
                if (null === a) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === a.child) {
                  for (a = o.child; a; ) {
                    if (a === n) return Ze(o), e;
                    if (a === r) return Ze(o), t;
                    a = a.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = o), (r = a);
                else {
                  for (var l = !1, u = o.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = o), (r = a);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = o), (n = a);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = a.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = a), (r = o);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = a), (n = o);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function et(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var tt,
          nt,
          rt,
          ot,
          at = !1,
          it = [],
          lt = null,
          ut = null,
          st = null,
          ct = new Map(),
          ft = new Map(),
          dt = [],
          pt =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' '
            );
        function vt(e, t, n, r, o) {
          return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: 16 | n,
            nativeEvent: o,
            targetContainers: [r],
          };
        }
        function ht(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              lt = null;
              break;
            case 'dragenter':
            case 'dragleave':
              ut = null;
              break;
            case 'mouseover':
            case 'mouseout':
              st = null;
              break;
            case 'pointerover':
            case 'pointerout':
              ct.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              ft.delete(t.pointerId);
          }
        }
        function mt(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = vt(t, n, r, o, a)),
              null !== t && null !== (t = ro(t)) && nt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function gt(e) {
          var t = no(e.target);
          if (null !== t) {
            var n = Ke(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ge(n)))
                  return (
                    (e.blockedOn = t),
                    void ot(e.lanePriority, function () {
                      a.unstable_runWithPriority(e.priority, function () {
                        rt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function yt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ro(n)) && nt(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function bt(e, t, n) {
          yt(e) && n.delete(t);
        }
        function wt() {
          for (at = !1; 0 < it.length; ) {
            var e = it[0];
            if (null !== e.blockedOn) {
              null !== (e = ro(e.blockedOn)) && tt(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = Jt(
                e.domEventName,
                e.eventSystemFlags,
                t[0],
                e.nativeEvent
              );
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && it.shift();
          }
          null !== lt && yt(lt) && (lt = null),
            null !== ut && yt(ut) && (ut = null),
            null !== st && yt(st) && (st = null),
            ct.forEach(bt),
            ft.forEach(bt);
        }
        function xt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            at ||
              ((at = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, wt)));
        }
        function Et(e) {
          function t(t) {
            return xt(t, e);
          }
          if (0 < it.length) {
            xt(it[0], e);
            for (var n = 1; n < it.length; n++) {
              var r = it[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== lt && xt(lt, e),
              null !== ut && xt(ut, e),
              null !== st && xt(st, e),
              ct.forEach(t),
              ft.forEach(t),
              n = 0;
            n < dt.length;
            n++
          )
            (r = dt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < dt.length && null === (n = dt[0]).blockedOn; )
            gt(n), null === n.blockedOn && dt.shift();
        }
        function kt(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          );
        }
        var St = {
            animationend: kt('Animation', 'AnimationEnd'),
            animationiteration: kt('Animation', 'AnimationIteration'),
            animationstart: kt('Animation', 'AnimationStart'),
            transitionend: kt('Transition', 'TransitionEnd'),
          },
          Ct = {},
          Pt = {};
        function Tt(e) {
          if (Ct[e]) return Ct[e];
          if (!St[e]) return e;
          var t,
            n = St[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Pt) return (Ct[e] = n[t]);
          return e;
        }
        f &&
          ((Pt = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete St.animationend.animation,
            delete St.animationiteration.animation,
            delete St.animationstart.animation),
          'TransitionEvent' in window || delete St.transitionend.transition);
        var _t = Tt('animationend'),
          Ot = Tt('animationiteration'),
          Lt = Tt('animationstart'),
          Mt = Tt('transitionend'),
          At = new Map(),
          Rt = new Map(),
          Nt = [
            'abort',
            'abort',
            _t,
            'animationEnd',
            Ot,
            'animationIteration',
            Lt,
            'animationStart',
            'canplay',
            'canPlay',
            'canplaythrough',
            'canPlayThrough',
            'durationchange',
            'durationChange',
            'emptied',
            'emptied',
            'encrypted',
            'encrypted',
            'ended',
            'ended',
            'error',
            'error',
            'gotpointercapture',
            'gotPointerCapture',
            'load',
            'load',
            'loadeddata',
            'loadedData',
            'loadedmetadata',
            'loadedMetadata',
            'loadstart',
            'loadStart',
            'lostpointercapture',
            'lostPointerCapture',
            'playing',
            'playing',
            'progress',
            'progress',
            'seeking',
            'seeking',
            'stalled',
            'stalled',
            'suspend',
            'suspend',
            'timeupdate',
            'timeUpdate',
            Mt,
            'transitionEnd',
            'waiting',
            'waiting',
          ];
        function Vt(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              o = e[n + 1];
            (o = 'on' + (o[0].toUpperCase() + o.slice(1))),
              Rt.set(r, t),
              At.set(r, o),
              s(o, [r]);
          }
        }
        (0, a.unstable_now)();
        var Dt = 8;
        function jt(e) {
          if (0 !== (1 & e)) return (Dt = 15), 1;
          if (0 !== (2 & e)) return (Dt = 14), 2;
          if (0 !== (4 & e)) return (Dt = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((Dt = 12), t)
            : 0 !== (32 & e)
            ? ((Dt = 11), 32)
            : 0 !== (t = 192 & e)
            ? ((Dt = 10), t)
            : 0 !== (256 & e)
            ? ((Dt = 9), 256)
            : 0 !== (t = 3584 & e)
            ? ((Dt = 8), t)
            : 0 !== (4096 & e)
            ? ((Dt = 7), 4096)
            : 0 !== (t = 4186112 & e)
            ? ((Dt = 6), t)
            : 0 !== (t = 62914560 & e)
            ? ((Dt = 5), t)
            : 67108864 & e
            ? ((Dt = 4), 67108864)
            : 0 !== (134217728 & e)
            ? ((Dt = 3), 134217728)
            : 0 !== (t = 805306368 & e)
            ? ((Dt = 2), t)
            : 0 !== (1073741824 & e)
            ? ((Dt = 1), 1073741824)
            : ((Dt = 8), e);
        }
        function Ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (Dt = 0);
          var r = 0,
            o = 0,
            a = e.expiredLanes,
            i = e.suspendedLanes,
            l = e.pingedLanes;
          if (0 !== a) (r = a), (o = Dt = 15);
          else if (0 !== (a = 134217727 & n)) {
            var u = a & ~i;
            0 !== u
              ? ((r = jt(u)), (o = Dt))
              : 0 !== (l &= a) && ((r = jt(l)), (o = Dt));
          } else
            0 !== (a = n & ~i)
              ? ((r = jt(a)), (o = Dt))
              : 0 !== l && ((r = jt(l)), (o = Dt));
          if (0 === r) return 0;
          if (
            ((r = n & (((0 > (r = 31 - Ht(r)) ? 0 : 1 << r) << 1) - 1)),
            0 !== t && t !== r && 0 === (t & i))
          ) {
            if ((jt(t), o <= Dt)) return t;
            Dt = o;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - Ht(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function zt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function It(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Ut(24 & ~t)) ? It(10, t) : e;
            case 10:
              return 0 === (e = Ut(192 & ~t)) ? It(8, t) : e;
            case 8:
              return (
                0 === (e = Ut(3584 & ~t)) &&
                  0 === (e = Ut(4186112 & ~t)) &&
                  (e = 512),
                e
              );
            case 2:
              return 0 === (t = Ut(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(i(358, e));
        }
        function Ut(e) {
          return e & -e;
        }
        function Bt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Wt(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r),
            (e.pingedLanes &= r),
            ((e = e.eventTimes)[(t = 31 - Ht(t))] = n);
        }
        var Ht = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - (($t(e) / qt) | 0)) | 0;
              },
          $t = Math.log,
          qt = Math.LN2;
        var Qt = a.unstable_UserBlockingPriority,
          Yt = a.unstable_runWithPriority,
          Xt = !0;
        function Kt(e, t, n, r) {
          je || Ve();
          var o = Zt,
            a = je;
          je = !0;
          try {
            Ne(o, e, t, n, r);
          } finally {
            (je = a) || ze();
          }
        }
        function Gt(e, t, n, r) {
          Yt(Qt, Zt.bind(null, e, t, n, r));
        }
        function Zt(e, t, n, r) {
          var o;
          if (Xt)
            if ((o = 0 === (4 & t)) && 0 < it.length && -1 < pt.indexOf(e))
              (e = vt(null, e, t, n, r)), it.push(e);
            else {
              var a = Jt(e, t, n, r);
              if (null === a) o && ht(e, r);
              else {
                if (o) {
                  if (-1 < pt.indexOf(e))
                    return (e = vt(a, e, t, n, r)), void it.push(e);
                  if (
                    (function (e, t, n, r, o) {
                      switch (t) {
                        case 'focusin':
                          return (lt = mt(lt, e, t, n, r, o)), !0;
                        case 'dragenter':
                          return (ut = mt(ut, e, t, n, r, o)), !0;
                        case 'mouseover':
                          return (st = mt(st, e, t, n, r, o)), !0;
                        case 'pointerover':
                          var a = o.pointerId;
                          return (
                            ct.set(a, mt(ct.get(a) || null, e, t, n, r, o)), !0
                          );
                        case 'gotpointercapture':
                          return (
                            (a = o.pointerId),
                            ft.set(a, mt(ft.get(a) || null, e, t, n, r, o)),
                            !0
                          );
                      }
                      return !1;
                    })(a, e, t, n, r)
                  )
                    return;
                  ht(e, r);
                }
                Vr(e, t, r, null, n);
              }
            }
        }
        function Jt(e, t, n, r) {
          var o = Pe(r);
          if (null !== (o = no(o))) {
            var a = Ke(o);
            if (null === a) o = null;
            else {
              var i = a.tag;
              if (13 === i) {
                if (null !== (o = Ge(a))) return o;
                o = null;
              } else if (3 === i) {
                if (a.stateNode.hydrate)
                  return 3 === a.tag ? a.stateNode.containerInfo : null;
                o = null;
              } else a !== o && (o = null);
            }
          }
          return Vr(e, t, r, o, n), null;
        }
        var en = null,
          tn = null,
          nn = null;
        function rn() {
          if (nn) return nn;
          var e,
            t,
            n = tn,
            r = n.length,
            o = 'value' in en ? en.value : en.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (nn = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function on(e) {
          var t = e.keyCode;
          return (
            'charCode' in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function an() {
          return !0;
        }
        function ln() {
          return !1;
        }
        function un(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? an
                : ln),
              (this.isPropagationStopped = ln),
              this
            );
          }
          return (
            o(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = an));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = an));
              },
              persist: function () {},
              isPersistent: an,
            }),
            t
          );
        }
        var sn,
          cn,
          fn,
          dn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          pn = un(dn),
          vn = o({}, dn, { view: 0, detail: 0 }),
          hn = un(vn),
          mn = o({}, vn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: _n,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== fn &&
                    (fn && 'mousemove' === e.type
                      ? ((sn = e.screenX - fn.screenX),
                        (cn = e.screenY - fn.screenY))
                      : (cn = sn = 0),
                    (fn = e)),
                  sn);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : cn;
            },
          }),
          gn = un(mn),
          yn = un(o({}, mn, { dataTransfer: 0 })),
          bn = un(o({}, vn, { relatedTarget: 0 })),
          wn = un(
            o({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          xn = o({}, dn, {
            clipboardData: function (e) {
              return 'clipboardData' in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          En = un(xn),
          kn = un(o({}, dn, { data: 0 })),
          Sn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          Cn = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          Pn = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          };
        function Tn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Pn[e]) && !!t[e];
        }
        function _n() {
          return Tn;
        }
        var On = o({}, vn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = on(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? Cn[e.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: _n,
            charCode: function (e) {
              return 'keypress' === e.type ? on(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type
                ? on(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Ln = un(On),
          Mn = un(
            o({}, mn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          An = un(
            o({}, vn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: _n,
            })
          ),
          Rn = un(
            o({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Nn = o({}, mn, {
            deltaX: function (e) {
              return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Vn = un(Nn),
          Dn = [9, 13, 27, 32],
          jn = f && 'CompositionEvent' in window,
          Fn = null;
        f && 'documentMode' in document && (Fn = document.documentMode);
        var zn = f && 'TextEvent' in window && !Fn,
          In = f && (!jn || (Fn && 8 < Fn && 11 >= Fn)),
          Un = String.fromCharCode(32),
          Bn = !1;
        function Wn(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== Dn.indexOf(t.keyCode);
            case 'keydown':
              return 229 !== t.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function Hn(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e
            ? e.data
            : null;
        }
        var $n = !1;
        var qn = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Qn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === t ? !!qn[e.type] : 'textarea' === t;
        }
        function Yn(e, t, n, r) {
          Me(r),
            0 < (t = jr(t, 'onChange')).length &&
              ((n = new pn('onChange', 'change', null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Xn = null,
          Kn = null;
        function Gn(e) {
          Or(e, 0);
        }
        function Zn(e) {
          if (G(oo(e))) return e;
        }
        function Jn(e, t) {
          if ('change' === e) return t;
        }
        var er = !1;
        if (f) {
          var tr;
          if (f) {
            var nr = 'oninput' in document;
            if (!nr) {
              var rr = document.createElement('div');
              rr.setAttribute('oninput', 'return;'),
                (nr = 'function' === typeof rr.oninput);
            }
            tr = nr;
          } else tr = !1;
          er = tr && (!document.documentMode || 9 < document.documentMode);
        }
        function or() {
          Xn && (Xn.detachEvent('onpropertychange', ar), (Kn = Xn = null));
        }
        function ar(e) {
          if ('value' === e.propertyName && Zn(Kn)) {
            var t = [];
            if ((Yn(t, Kn, e, Pe(e)), (e = Gn), je)) e(t);
            else {
              je = !0;
              try {
                Re(e, t);
              } finally {
                (je = !1), ze();
              }
            }
          }
        }
        function ir(e, t, n) {
          'focusin' === e
            ? (or(), (Kn = n), (Xn = t).attachEvent('onpropertychange', ar))
            : 'focusout' === e && or();
        }
        function lr(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
            return Zn(Kn);
        }
        function ur(e, t) {
          if ('click' === e) return Zn(t);
        }
        function sr(e, t) {
          if ('input' === e || 'change' === e) return Zn(t);
        }
        var cr =
            'function' === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          fr = Object.prototype.hasOwnProperty;
        function dr(e, t) {
          if (cr(e, t)) return !0;
          if (
            'object' !== typeof e ||
            null === e ||
            'object' !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
            if (!fr.call(t, n[r]) || !cr(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function pr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function vr(e, t) {
          var n,
            r = pr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = pr(r);
          }
        }
        function hr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? hr(e, t.parentNode)
                  : 'contains' in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function mr() {
          for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Z((e = t.contentWindow).document);
          }
          return t;
        }
        function gr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          );
        }
        var yr = f && 'documentMode' in document && 11 >= document.documentMode,
          br = null,
          wr = null,
          xr = null,
          Er = !1;
        function kr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          Er ||
            null == br ||
            br !== Z(r) ||
            ('selectionStart' in (r = br) && gr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (xr && dr(xr, r)) ||
              ((xr = r),
              0 < (r = jr(wr, 'onSelect')).length &&
                ((t = new pn('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = br))));
        }
        Vt(
          'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
            ' '
          ),
          0
        ),
          Vt(
            'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
              ' '
            ),
            1
          ),
          Vt(Nt, 2);
        for (
          var Sr =
              'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
                ' '
              ),
            Cr = 0;
          Cr < Sr.length;
          Cr++
        )
          Rt.set(Sr[Cr], 0);
        c('onMouseEnter', ['mouseout', 'mouseover']),
          c('onMouseLeave', ['mouseout', 'mouseover']),
          c('onPointerEnter', ['pointerout', 'pointerover']),
          c('onPointerLeave', ['pointerout', 'pointerover']),
          s(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' '
            )
          ),
          s(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' '
            )
          ),
          s('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
          ]),
          s(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          s(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          s(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          );
        var Pr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' '
            ),
          Tr = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(Pr)
          );
        function _r(e, t, n) {
          var r = e.type || 'unknown-event';
          (e.currentTarget = n),
            (function (e, t, n, r, o, a, l, u, s) {
              if ((Xe.apply(this, arguments), He)) {
                if (!He) throw Error(i(198));
                var c = $e;
                (He = !1), ($e = null), qe || ((qe = !0), (Qe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Or(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== a && o.isPropagationStopped()))
                    break e;
                  _r(o, l, s), (a = u);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((u = (l = r[i]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    u !== a && o.isPropagationStopped())
                  )
                    break e;
                  _r(o, l, s), (a = u);
                }
            }
          }
          if (qe) throw ((e = Qe), (qe = !1), (Qe = null), e);
        }
        function Lr(e, t) {
          var n = io(t),
            r = e + '__bubble';
          n.has(r) || (Nr(t, e, 2, !1), n.add(r));
        }
        var Mr = '_reactListening' + Math.random().toString(36).slice(2);
        function Ar(e) {
          e[Mr] ||
            ((e[Mr] = !0),
            l.forEach(function (t) {
              Tr.has(t) || Rr(t, !1, e, null), Rr(t, !0, e, null);
            }));
        }
        function Rr(e, t, n, r) {
          var o =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            a = n;
          if (
            ('selectionchange' === e &&
              9 !== n.nodeType &&
              (a = n.ownerDocument),
            null !== r && !t && Tr.has(e))
          ) {
            if ('scroll' !== e) return;
            (o |= 2), (a = r);
          }
          var i = io(a),
            l = e + '__' + (t ? 'capture' : 'bubble');
          i.has(l) || (t && (o |= 4), Nr(a, e, o, t), i.add(l));
        }
        function Nr(e, t, n, r) {
          var o = Rt.get(t);
          switch (void 0 === o ? 2 : o) {
            case 0:
              o = Kt;
              break;
            case 1:
              o = Gt;
              break;
            default:
              o = Zt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Ue ||
              ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, o) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var u = i.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = i.stateNode.containerInfo) === o ||
                        (8 === u.nodeType && u.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = no(l))) return;
                  if (5 === (u = i.tag) || 6 === u) {
                    r = a = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if (Fe) return e(t, n);
            Fe = !0;
            try {
              De(e, t, n);
            } finally {
              (Fe = !1), ze();
            }
          })(function () {
            var r = a,
              o = Pe(n),
              i = [];
            e: {
              var l = At.get(e);
              if (void 0 !== l) {
                var u = pn,
                  s = e;
                switch (e) {
                  case 'keypress':
                    if (0 === on(n)) break e;
                  case 'keydown':
                  case 'keyup':
                    u = Ln;
                    break;
                  case 'focusin':
                    (s = 'focus'), (u = bn);
                    break;
                  case 'focusout':
                    (s = 'blur'), (u = bn);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    u = bn;
                    break;
                  case 'click':
                    if (2 === n.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    u = gn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    u = yn;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    u = An;
                    break;
                  case _t:
                  case Ot:
                  case Lt:
                    u = wn;
                    break;
                  case Mt:
                    u = Rn;
                    break;
                  case 'scroll':
                    u = hn;
                    break;
                  case 'wheel':
                    u = Vn;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    u = En;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    u = Mn;
                }
                var c = 0 !== (4 & t),
                  f = !c && 'scroll' === e,
                  d = c ? (null !== l ? l + 'Capture' : null) : l;
                c = [];
                for (var p, v = r; null !== v; ) {
                  var h = (p = v).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h),
                      null !== d &&
                        null != (h = Ie(v, d)) &&
                        c.push(Dr(v, h, p))),
                    f)
                  )
                    break;
                  v = v.return;
                }
                0 < c.length &&
                  ((l = new u(l, s, null, n, o)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = 'mouseout' === e || 'pointerout' === e),
                (!(l = 'mouseover' === e || 'pointerover' === e) ||
                  0 !== (16 & t) ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!no(s) && !s[eo])) &&
                  (u || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? no(s)
                          : null) &&
                        (s !== (f = Ke(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = gn),
                  (h = 'onMouseLeave'),
                  (d = 'onMouseEnter'),
                  (v = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((c = Mn),
                    (h = 'onPointerLeave'),
                    (d = 'onPointerEnter'),
                    (v = 'pointer')),
                  (f = null == u ? l : oo(u)),
                  (p = null == s ? l : oo(s)),
                  ((l = new c(h, v + 'leave', u, n, o)).target = f),
                  (l.relatedTarget = p),
                  (h = null),
                  no(o) === r &&
                    (((c = new c(d, v + 'enter', s, n, o)).target = p),
                    (c.relatedTarget = f),
                    (h = c)),
                  (f = h),
                  u && s)
                )
                  e: {
                    for (d = s, v = 0, p = c = u; p; p = Fr(p)) v++;
                    for (p = 0, h = d; h; h = Fr(h)) p++;
                    for (; 0 < v - p; ) (c = Fr(c)), v--;
                    for (; 0 < p - v; ) (d = Fr(d)), p--;
                    for (; v--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Fr(c)), (d = Fr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && zr(i, l, u, c, !1),
                  null !== s && null !== f && zr(i, f, s, c, !0);
              }
              if (
                'select' ===
                  (u =
                    (l = r ? oo(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === l.type)
              )
                var m = Jn;
              else if (Qn(l))
                if (er) m = sr;
                else {
                  m = lr;
                  var g = ir;
                }
              else
                (u = l.nodeName) &&
                  'input' === u.toLowerCase() &&
                  ('checkbox' === l.type || 'radio' === l.type) &&
                  (m = ur);
              switch (
                (m && (m = m(e, r))
                  ? Yn(i, m, n, o)
                  : (g && g(e, l, r),
                    'focusout' === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      'number' === l.type &&
                      oe(l, 'number', l.value)),
                (g = r ? oo(r) : window),
                e)
              ) {
                case 'focusin':
                  (Qn(g) || 'true' === g.contentEditable) &&
                    ((br = g), (wr = r), (xr = null));
                  break;
                case 'focusout':
                  xr = wr = br = null;
                  break;
                case 'mousedown':
                  Er = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (Er = !1), kr(i, n, o);
                  break;
                case 'selectionchange':
                  if (yr) break;
                case 'keydown':
                case 'keyup':
                  kr(i, n, o);
              }
              var y;
              if (jn)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var b = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      b = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      b = 'onCompositionUpdate';
                      break e;
                  }
                  b = void 0;
                }
              else
                $n
                  ? Wn(e, n) && (b = 'onCompositionEnd')
                  : 'keydown' === e &&
                    229 === n.keyCode &&
                    (b = 'onCompositionStart');
              b &&
                (In &&
                  'ko' !== n.locale &&
                  ($n || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && $n && (y = rn())
                    : ((tn = 'value' in (en = o) ? en.value : en.textContent),
                      ($n = !0))),
                0 < (g = jr(r, b)).length &&
                  ((b = new kn(b, e, null, n, o)),
                  i.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Hn(n)) && (b.data = y))),
                (y = zn
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Hn(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((Bn = !0), Un);
                        case 'textInput':
                          return (e = t.data) === Un && Bn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if ($n)
                        return 'compositionend' === e || (!jn && Wn(e, t))
                          ? ((e = rn()), (nn = tn = en = null), ($n = !1), e)
                          : null;
                      switch (e) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case 'compositionend':
                          return In && 'ko' !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = jr(r, 'onBeforeInput')).length &&
                  ((o = new kn('onBeforeInput', 'beforeinput', null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = y));
            }
            Or(i, t);
          });
        }
        function Dr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function jr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Ie(e, n)) && r.unshift(Dr(e, a, o)),
              null != (a = Ie(e, t)) && r.push(Dr(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function Fr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function zr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              o
                ? null != (u = Ie(n, a)) && i.unshift(Dr(n, u, l))
                : o || (null != (u = Ie(n, a)) && i.push(Dr(n, u, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        function Ir() {}
        var Ur = null,
          Br = null;
        function Wr(e, t) {
          switch (e) {
            case 'button':
            case 'input':
            case 'select':
            case 'textarea':
              return !!t.autoFocus;
          }
          return !1;
        }
        function Hr(e, t) {
          return (
            'textarea' === e ||
            'option' === e ||
            'noscript' === e ||
            'string' === typeof t.children ||
            'number' === typeof t.children ||
            ('object' === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var $r = 'function' === typeof setTimeout ? setTimeout : void 0,
          qr = 'function' === typeof clearTimeout ? clearTimeout : void 0;
        function Qr(e) {
          1 === e.nodeType
            ? (e.textContent = '')
            : 9 === e.nodeType && null != (e = e.body) && (e.textContent = '');
        }
        function Yr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Xr(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
              } else '/$' === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var Kr = 0;
        var Gr = Math.random().toString(36).slice(2),
          Zr = '__reactFiber$' + Gr,
          Jr = '__reactProps$' + Gr,
          eo = '__reactContainer$' + Gr,
          to = '__reactEvents$' + Gr;
        function no(e) {
          var t = e[Zr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[eo] || n[Zr])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = Xr(e); null !== e; ) {
                  if ((n = e[Zr])) return n;
                  e = Xr(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ro(e) {
          return !(e = e[Zr] || e[eo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function oo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function ao(e) {
          return e[Jr] || null;
        }
        function io(e) {
          var t = e[to];
          return void 0 === t && (t = e[to] = new Set()), t;
        }
        var lo = [],
          uo = -1;
        function so(e) {
          return { current: e };
        }
        function co(e) {
          0 > uo || ((e.current = lo[uo]), (lo[uo] = null), uo--);
        }
        function fo(e, t) {
          uo++, (lo[uo] = e.current), (e.current = t);
        }
        var po = {},
          vo = so(po),
          ho = so(!1),
          mo = po;
        function go(e, t) {
          var n = e.type.contextTypes;
          if (!n) return po;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function yo(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function bo() {
          co(ho), co(vo);
        }
        function wo(e, t, n) {
          if (vo.current !== po) throw Error(i(168));
          fo(vo, t), fo(ho, n);
        }
        function xo(e, t, n) {
          var r = e.stateNode;
          if (
            ((e = t.childContextTypes), 'function' !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in e)) throw Error(i(108, Q(t) || 'Unknown', a));
          return o({}, n, r);
        }
        function Eo(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              po),
            (mo = vo.current),
            fo(vo, e),
            fo(ho, ho.current),
            !0
          );
        }
        function ko(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = xo(e, t, mo)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              co(ho),
              co(vo),
              fo(vo, e))
            : co(ho),
            fo(ho, n);
        }
        var So = null,
          Co = null,
          Po = a.unstable_runWithPriority,
          To = a.unstable_scheduleCallback,
          _o = a.unstable_cancelCallback,
          Oo = a.unstable_shouldYield,
          Lo = a.unstable_requestPaint,
          Mo = a.unstable_now,
          Ao = a.unstable_getCurrentPriorityLevel,
          Ro = a.unstable_ImmediatePriority,
          No = a.unstable_UserBlockingPriority,
          Vo = a.unstable_NormalPriority,
          Do = a.unstable_LowPriority,
          jo = a.unstable_IdlePriority,
          Fo = {},
          zo = void 0 !== Lo ? Lo : function () {},
          Io = null,
          Uo = null,
          Bo = !1,
          Wo = Mo(),
          Ho =
            1e4 > Wo
              ? Mo
              : function () {
                  return Mo() - Wo;
                };
        function $o() {
          switch (Ao()) {
            case Ro:
              return 99;
            case No:
              return 98;
            case Vo:
              return 97;
            case Do:
              return 96;
            case jo:
              return 95;
            default:
              throw Error(i(332));
          }
        }
        function qo(e) {
          switch (e) {
            case 99:
              return Ro;
            case 98:
              return No;
            case 97:
              return Vo;
            case 96:
              return Do;
            case 95:
              return jo;
            default:
              throw Error(i(332));
          }
        }
        function Qo(e, t) {
          return (e = qo(e)), Po(e, t);
        }
        function Yo(e, t, n) {
          return (e = qo(e)), To(e, t, n);
        }
        function Xo() {
          if (null !== Uo) {
            var e = Uo;
            (Uo = null), _o(e);
          }
          Ko();
        }
        function Ko() {
          if (!Bo && null !== Io) {
            Bo = !0;
            var e = 0;
            try {
              var t = Io;
              Qo(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Io = null);
            } catch (n) {
              throw (null !== Io && (Io = Io.slice(e + 1)), To(Ro, Xo), n);
            } finally {
              Bo = !1;
            }
          }
        }
        var Go = x.ReactCurrentBatchConfig;
        function Zo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = o({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Jo = so(null),
          ea = null,
          ta = null,
          na = null;
        function ra() {
          na = ta = ea = null;
        }
        function oa(e) {
          var t = Jo.current;
          co(Jo), (e.type._context._currentValue = t);
        }
        function aa(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function ia(e, t) {
          (ea = e),
            (na = ta = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (ji = !0), (e.firstContext = null));
        }
        function la(e, t) {
          if (na !== e && !1 !== t && 0 !== t)
            if (
              (('number' === typeof t && 1073741823 !== t) ||
                ((na = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === ta)
            ) {
              if (null === ea) throw Error(i(308));
              (ta = t),
                (ea.dependencies = {
                  lanes: 0,
                  firstContext: t,
                  responders: null,
                });
            } else ta = ta.next = t;
          return e._currentValue;
        }
        var ua = !1;
        function sa(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function ca(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function fa(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function da(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
        }
        function pa(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function va(e, t, n, r) {
          var a = e.updateQueue;
          ua = !1;
          var i = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            u = a.shared.pending;
          if (null !== u) {
            a.shared.pending = null;
            var s = u,
              c = s.next;
            (s.next = null), null === l ? (i = c) : (l.next = c), (l = s);
            var f = e.alternate;
            if (null !== f) {
              var d = (f = f.updateQueue).lastBaseUpdate;
              d !== l &&
                (null === d ? (f.firstBaseUpdate = c) : (d.next = c),
                (f.lastBaseUpdate = s));
            }
          }
          if (null !== i) {
            for (d = a.baseState, l = 0, f = c = s = null; ; ) {
              u = i.lane;
              var p = i.eventTime;
              if ((r & u) === u) {
                null !== f &&
                  (f = f.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var v = e,
                    h = i;
                  switch (((u = t), (p = n), h.tag)) {
                    case 1:
                      if ('function' === typeof (v = h.payload)) {
                        d = v.call(p, d, u);
                        break e;
                      }
                      d = v;
                      break e;
                    case 3:
                      v.flags = (-4097 & v.flags) | 64;
                    case 0:
                      if (
                        null ===
                          (u =
                            'function' === typeof (v = h.payload)
                              ? v.call(p, d, u)
                              : v) ||
                        void 0 === u
                      )
                        break e;
                      d = o({}, d, u);
                      break e;
                    case 2:
                      ua = !0;
                  }
                }
                null !== i.callback &&
                  ((e.flags |= 32),
                  null === (u = a.effects) ? (a.effects = [i]) : u.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: u,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === f ? ((c = f = p), (s = d)) : (f = f.next = p),
                  (l |= u);
              if (null === (i = i.next)) {
                if (null === (u = a.shared.pending)) break;
                (i = u.next),
                  (u.next = null),
                  (a.lastBaseUpdate = u),
                  (a.shared.pending = null);
              }
            }
            null === f && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = f),
              (Ul |= l),
              (e.lanes = l),
              (e.memoizedState = d);
          }
        }
        function ha(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), 'function' !== typeof o))
                  throw Error(i(191, o));
                o.call(r);
              }
            }
        }
        var ma = new r.Component().refs;
        function ga(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : o({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ya = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ke(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = du(),
              o = pu(e),
              a = fa(r, o);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              da(e, a),
              vu(e, o, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = du(),
              o = pu(e),
              a = fa(r, o);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              da(e, a),
              vu(e, o, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = du(),
              r = pu(e),
              o = fa(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              da(e, o),
              vu(e, r, n);
          },
        };
        function ba(e, t, n, r, o, a, i) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !dr(n, r) ||
                !dr(o, a);
        }
        function wa(e, t, n) {
          var r = !1,
            o = po,
            a = t.contextType;
          return (
            'object' === typeof a && null !== a
              ? (a = la(a))
              : ((o = yo(t) ? mo : vo.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? go(e, o)
                  : po)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ya),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function xa(e, t, n, r) {
          (e = t.state),
            'function' === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ya.enqueueReplaceState(t, t.state, null);
        }
        function Ea(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = ma), sa(e);
          var a = t.contextType;
          'object' === typeof a && null !== a
            ? (o.context = la(a))
            : ((a = yo(t) ? mo : vo.current), (o.context = go(e, a))),
            va(e, n, o, r),
            (o.state = e.memoizedState),
            'function' === typeof (a = t.getDerivedStateFromProps) &&
              (ga(e, t, a, n), (o.state = e.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof o.getSnapshotBeforeUpdate ||
              ('function' !== typeof o.UNSAFE_componentWillMount &&
                'function' !== typeof o.componentWillMount) ||
              ((t = o.state),
              'function' === typeof o.componentWillMount &&
                o.componentWillMount(),
              'function' === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && ya.enqueueReplaceState(o, o.state, null),
              va(e, n, o, r),
              (o.state = e.memoizedState)),
            'function' === typeof o.componentDidMount && (e.flags |= 4);
        }
        var ka = Array.isArray;
        function Sa(e, t, n) {
          if (
            null !== (e = n.ref) &&
            'function' !== typeof e &&
            'object' !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var o = '' + e;
              return null !== t &&
                null !== t.ref &&
                'function' === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === ma && (t = r.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ('string' !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Ca(e, t) {
          if ('textarea' !== e.type)
            throw Error(
              i(
                31,
                '[object Object]' === Object.prototype.toString.call(t)
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : t
              )
            );
        }
        function Pa(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r
                ? ((r.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = qu(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags = 2), n)
                    : r
                  : ((t.flags = 2), n)
                : n
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ku(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = o(t, n.props)).ref = Sa(e, t, n)), (r.return = e), r)
              : (((r = Qu(n.type, n.key, n.props, null, e.mode, r)).ref = Sa(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Gu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Yu(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if ('string' === typeof t || 'number' === typeof t)
              return ((t = Ku('' + t, e.mode, n)).return = e), t;
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case E:
                  return (
                    ((n = Qu(t.type, t.key, t.props, null, e.mode, n)).ref = Sa(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Gu(t, e.mode, n)).return = e), t;
              }
              if (ka(t) || B(t))
                return ((t = Yu(t, e.mode, n, null)).return = e), t;
              Ca(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ('string' === typeof n || 'number' === typeof n)
              return null !== o ? null : u(e, t, '' + n, r);
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case E:
                  return n.key === o
                    ? n.type === S
                      ? f(e, t, n.props.children, r, o)
                      : s(e, t, n, r)
                    : null;
                case k:
                  return n.key === o ? c(e, t, n, r) : null;
              }
              if (ka(n) || B(n)) return null !== o ? null : f(e, t, n, r, null);
              Ca(e, n);
            }
            return null;
          }
          function v(e, t, n, r, o) {
            if ('string' === typeof r || 'number' === typeof r)
              return u(t, (e = e.get(n) || null), '' + r, o);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case E:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === S
                      ? f(t, e, r.props.children, o, r.key)
                      : s(t, e, r, o)
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
              }
              if (ka(r) || B(r))
                return f(t, (e = e.get(n) || null), r, o, null);
              Ca(t, r);
            }
            return null;
          }
          function h(o, i, l, u) {
            for (
              var s = null, c = null, f = i, h = (i = 0), m = null;
              null !== f && h < l.length;
              h++
            ) {
              f.index > h ? ((m = f), (f = null)) : (m = f.sibling);
              var g = p(o, f, l[h], u);
              if (null === g) {
                null === f && (f = m);
                break;
              }
              e && f && null === g.alternate && t(o, f),
                (i = a(g, i, h)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (f = m);
            }
            if (h === l.length) return n(o, f), s;
            if (null === f) {
              for (; h < l.length; h++)
                null !== (f = d(o, l[h], u)) &&
                  ((i = a(f, i, h)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return s;
            }
            for (f = r(o, f); h < l.length; h++)
              null !== (m = v(f, o, h, l[h], u)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? h : m.key),
                (i = a(m, i, h)),
                null === c ? (s = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(o, e);
                }),
              s
            );
          }
          function m(o, l, u, s) {
            var c = B(u);
            if ('function' !== typeof c) throw Error(i(150));
            if (null == (u = c.call(u))) throw Error(i(151));
            for (
              var f = (c = null), h = l, m = (l = 0), g = null, y = u.next();
              null !== h && !y.done;
              m++, y = u.next()
            ) {
              h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
              var b = p(o, h, y.value, s);
              if (null === b) {
                null === h && (h = g);
                break;
              }
              e && h && null === b.alternate && t(o, h),
                (l = a(b, l, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (h = g);
            }
            if (y.done) return n(o, h), c;
            if (null === h) {
              for (; !y.done; m++, y = u.next())
                null !== (y = d(o, y.value, s)) &&
                  ((l = a(y, l, m)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return c;
            }
            for (h = r(o, h); !y.done; m++, y = u.next())
              null !== (y = v(h, o, m, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  h.delete(null === y.key ? m : y.key),
                (l = a(y, l, m)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                h.forEach(function (e) {
                  return t(o, e);
                }),
              c
            );
          }
          return function (e, r, a, u) {
            var s =
              'object' === typeof a &&
              null !== a &&
              a.type === S &&
              null === a.key;
            s && (a = a.props.children);
            var c = 'object' === typeof a && null !== a;
            if (c)
              switch (a.$$typeof) {
                case E:
                  e: {
                    for (c = a.key, s = r; null !== s; ) {
                      if (s.key === c) {
                        if (7 === s.tag) {
                          if (a.type === S) {
                            n(e, s.sibling),
                              ((r = o(s, a.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                        } else if (s.elementType === a.type) {
                          n(e, s.sibling),
                            ((r = o(s, a.props)).ref = Sa(e, s, a)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                        n(e, s);
                        break;
                      }
                      t(e, s), (s = s.sibling);
                    }
                    a.type === S
                      ? (((r = Yu(a.props.children, e.mode, u, a.key)).return =
                          e),
                        (e = r))
                      : (((u = Qu(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          e.mode,
                          u
                        )).ref = Sa(e, r, a)),
                        (u.return = e),
                        (e = u));
                  }
                  return l(e);
                case k:
                  e: {
                    for (s = a.key; null !== r; ) {
                      if (r.key === s) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === a.containerInfo &&
                          r.stateNode.implementation === a.implementation
                        ) {
                          n(e, r.sibling),
                            ((r = o(r, a.children || [])).return = e),
                            (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Gu(a, e.mode, u)).return = e), (e = r);
                  }
                  return l(e);
              }
            if ('string' === typeof a || 'number' === typeof a)
              return (
                (a = '' + a),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = o(r, a)).return = e), (e = r))
                  : (n(e, r), ((r = Ku(a, e.mode, u)).return = e), (e = r)),
                l(e)
              );
            if (ka(a)) return h(e, r, a, u);
            if (B(a)) return m(e, r, a, u);
            if ((c && Ca(e, a), 'undefined' === typeof a && !s))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(i(152, Q(e.type) || 'Component'));
              }
            return n(e, r);
          };
        }
        var Ta = Pa(!0),
          _a = Pa(!1),
          Oa = {},
          La = so(Oa),
          Ma = so(Oa),
          Aa = so(Oa);
        function Ra(e) {
          if (e === Oa) throw Error(i(174));
          return e;
        }
        function Na(e, t) {
          switch ((fo(Aa, t), fo(Ma, e), fo(La, Oa), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ve(null, '');
              break;
            default:
              t = ve(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          co(La), fo(La, t);
        }
        function Va() {
          co(La), co(Ma), co(Aa);
        }
        function Da(e) {
          Ra(Aa.current);
          var t = Ra(La.current),
            n = ve(t, e.type);
          t !== n && (fo(Ma, e), fo(La, n));
        }
        function ja(e) {
          Ma.current === e && (co(La), co(Ma));
        }
        var Fa = so(0);
        function za(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  '$?' === n.data ||
                  '$!' === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Ia = null,
          Ua = null,
          Ba = !1;
        function Wa(e, t) {
          var n = Hu(5, null, null, 0);
          (n.elementType = 'DELETED'),
            (n.type = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function Ha(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function $a(e) {
          if (Ba) {
            var t = Ua;
            if (t) {
              var n = t;
              if (!Ha(e, t)) {
                if (!(t = Yr(n.nextSibling)) || !Ha(e, t))
                  return (
                    (e.flags = (-1025 & e.flags) | 2), (Ba = !1), void (Ia = e)
                  );
                Wa(Ia, n);
              }
              (Ia = e), (Ua = Yr(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Ba = !1), (Ia = e);
          }
        }
        function qa(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Ia = e;
        }
        function Qa(e) {
          if (e !== Ia) return !1;
          if (!Ba) return qa(e), (Ba = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ('head' !== t && 'body' !== t && !Hr(t, e.memoizedProps))
          )
            for (t = Ua; t; ) Wa(e, t), (t = Yr(t.nextSibling));
          if ((qa(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ('/$' === n) {
                    if (0 === t) {
                      Ua = Yr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
              }
              Ua = null;
            }
          } else Ua = Ia ? Yr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Ya() {
          (Ua = Ia = null), (Ba = !1);
        }
        var Xa = [];
        function Ka() {
          for (var e = 0; e < Xa.length; e++)
            Xa[e]._workInProgressVersionPrimary = null;
          Xa.length = 0;
        }
        var Ga = x.ReactCurrentDispatcher,
          Za = x.ReactCurrentBatchConfig,
          Ja = 0,
          ei = null,
          ti = null,
          ni = null,
          ri = !1,
          oi = !1;
        function ai() {
          throw Error(i(321));
        }
        function ii(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!cr(e[n], t[n])) return !1;
          return !0;
        }
        function li(e, t, n, r, o, a) {
          if (
            ((Ja = a),
            (ei = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Ga.current = null === e || null === e.memoizedState ? Ri : Ni),
            (e = n(r, o)),
            oi)
          ) {
            a = 0;
            do {
              if (((oi = !1), !(25 > a))) throw Error(i(301));
              (a += 1),
                (ni = ti = null),
                (t.updateQueue = null),
                (Ga.current = Vi),
                (e = n(r, o));
            } while (oi);
          }
          if (
            ((Ga.current = Ai),
            (t = null !== ti && null !== ti.next),
            (Ja = 0),
            (ni = ti = ei = null),
            (ri = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function ui() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ni ? (ei.memoizedState = ni = e) : (ni = ni.next = e), ni
          );
        }
        function si() {
          if (null === ti) {
            var e = ei.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ti.next;
          var t = null === ni ? ei.memoizedState : ni.next;
          if (null !== t) (ni = t), (ti = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (ti = e).memoizedState,
              baseState: ti.baseState,
              baseQueue: ti.baseQueue,
              queue: ti.queue,
              next: null,
            }),
              null === ni ? (ei.memoizedState = ni = e) : (ni = ni.next = e);
          }
          return ni;
        }
        function ci(e, t) {
          return 'function' === typeof t ? t(e) : t;
        }
        function fi(e) {
          var t = si(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = ti,
            o = r.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== o) {
              var l = o.next;
              (o.next = a.next), (a.next = l);
            }
            (r.baseQueue = o = a), (n.pending = null);
          }
          if (null !== o) {
            (o = o.next), (r = r.baseState);
            var u = (l = a = null),
              s = o;
            do {
              var c = s.lane;
              if ((Ja & c) === c)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: s.action,
                      eagerReducer: s.eagerReducer,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
              else {
                var f = {
                  lane: c,
                  action: s.action,
                  eagerReducer: s.eagerReducer,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === u ? ((l = u = f), (a = r)) : (u = u.next = f),
                  (ei.lanes |= c),
                  (Ul |= c);
              }
              s = s.next;
            } while (null !== s && s !== o);
            null === u ? (a = r) : (u.next = l),
              cr(r, t.memoizedState) || (ji = !0),
              (t.memoizedState = r),
              (t.baseState = a),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function di(e) {
          var t = si(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            a = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (a = e(a, l.action)), (l = l.next);
            } while (l !== o);
            cr(a, t.memoizedState) || (ji = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function pi(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var o = t._workInProgressVersionPrimary;
          if (
            (null !== o
              ? (e = o === r)
              : ((e = e.mutableReadLanes),
                (e = (Ja & e) === e) &&
                  ((t._workInProgressVersionPrimary = r), Xa.push(t))),
            e)
          )
            return n(t._source);
          throw (Xa.push(t), Error(i(350)));
        }
        function vi(e, t, n, r) {
          var o = Rl;
          if (null === o) throw Error(i(349));
          var a = t._getVersion,
            l = a(t._source),
            u = Ga.current,
            s = u.useState(function () {
              return pi(o, t, n);
            }),
            c = s[1],
            f = s[0];
          s = ni;
          var d = e.memoizedState,
            p = d.refs,
            v = p.getSnapshot,
            h = d.source;
          d = d.subscribe;
          var m = ei;
          return (
            (e.memoizedState = { refs: p, source: t, subscribe: r }),
            u.useEffect(
              function () {
                (p.getSnapshot = n), (p.setSnapshot = c);
                var e = a(t._source);
                if (!cr(l, e)) {
                  (e = n(t._source)),
                    cr(f, e) ||
                      (c(e),
                      (e = pu(m)),
                      (o.mutableReadLanes |= e & o.pendingLanes)),
                    (e = o.mutableReadLanes),
                    (o.entangledLanes |= e);
                  for (var r = o.entanglements, i = e; 0 < i; ) {
                    var u = 31 - Ht(i),
                      s = 1 << u;
                    (r[u] |= e), (i &= ~s);
                  }
                }
              },
              [n, t, r]
            ),
            u.useEffect(
              function () {
                return r(t._source, function () {
                  var e = p.getSnapshot,
                    n = p.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = pu(m);
                    o.mutableReadLanes |= r & o.pendingLanes;
                  } catch (a) {
                    n(function () {
                      throw a;
                    });
                  }
                });
              },
              [t, r]
            ),
            (cr(v, n) && cr(h, t) && cr(d, r)) ||
              (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: ci,
                lastRenderedState: f,
              }).dispatch = c =
                Mi.bind(null, ei, e)),
              (s.queue = e),
              (s.baseQueue = null),
              (f = pi(o, t, n)),
              (s.memoizedState = s.baseState = f)),
            f
          );
        }
        function hi(e, t, n) {
          return vi(si(), e, t, n);
        }
        function mi(e) {
          var t = ui();
          return (
            'function' === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: ci,
                lastRenderedState: e,
              }).dispatch =
              Mi.bind(null, ei, e)),
            [t.memoizedState, e]
          );
        }
        function gi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ei.updateQueue)
              ? ((t = { lastEffect: null }),
                (ei.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function yi(e) {
          return (e = { current: e }), (ui().memoizedState = e);
        }
        function bi() {
          return si().memoizedState;
        }
        function wi(e, t, n, r) {
          var o = ui();
          (ei.flags |= e),
            (o.memoizedState = gi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function xi(e, t, n, r) {
          var o = si();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== ti) {
            var i = ti.memoizedState;
            if (((a = i.destroy), null !== r && ii(r, i.deps)))
              return void gi(t, n, a, r);
          }
          (ei.flags |= e), (o.memoizedState = gi(1 | t, n, a, r));
        }
        function Ei(e, t) {
          return wi(516, 4, e, t);
        }
        function ki(e, t) {
          return xi(516, 4, e, t);
        }
        function Si(e, t) {
          return xi(4, 2, e, t);
        }
        function Ci(e, t) {
          return 'function' === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Pi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            xi(4, 2, Ci.bind(null, t, e), n)
          );
        }
        function Ti() {}
        function _i(e, t) {
          var n = si();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ii(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Oi(e, t) {
          var n = si();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ii(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Li(e, t) {
          var n = $o();
          Qo(98 > n ? 98 : n, function () {
            e(!0);
          }),
            Qo(97 < n ? 97 : n, function () {
              var n = Za.transition;
              Za.transition = 1;
              try {
                e(!1), t();
              } finally {
                Za.transition = n;
              }
            });
        }
        function Mi(e, t, n) {
          var r = du(),
            o = pu(e),
            a = {
              lane: o,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            i = t.pending;
          if (
            (null === i ? (a.next = a) : ((a.next = i.next), (i.next = a)),
            (t.pending = a),
            (i = e.alternate),
            e === ei || (null !== i && i === ei))
          )
            oi = ri = !0;
          else {
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  u = i(l, n);
                if (((a.eagerReducer = i), (a.eagerState = u), cr(u, l)))
                  return;
              } catch (s) {}
            vu(e, o, r);
          }
        }
        var Ai = {
            readContext: la,
            useCallback: ai,
            useContext: ai,
            useEffect: ai,
            useImperativeHandle: ai,
            useLayoutEffect: ai,
            useMemo: ai,
            useReducer: ai,
            useRef: ai,
            useState: ai,
            useDebugValue: ai,
            useDeferredValue: ai,
            useTransition: ai,
            useMutableSource: ai,
            useOpaqueIdentifier: ai,
            unstable_isNewReconciler: !1,
          },
          Ri = {
            readContext: la,
            useCallback: function (e, t) {
              return (ui().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: la,
            useEffect: Ei,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                wi(4, 2, Ci.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return wi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = ui();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = ui();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  Mi.bind(null, ei, e)),
                [r.memoizedState, e]
              );
            },
            useRef: yi,
            useState: mi,
            useDebugValue: Ti,
            useDeferredValue: function (e) {
              var t = mi(e),
                n = t[0],
                r = t[1];
              return (
                Ei(
                  function () {
                    var t = Za.transition;
                    Za.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Za.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = mi(!1),
                t = e[0];
              return yi((e = Li.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = ui();
              return (
                (r.memoizedState = {
                  refs: { getSnapshot: t, setSnapshot: null },
                  source: e,
                  subscribe: n,
                }),
                vi(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function () {
              if (Ba) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: V, toString: e, valueOf: e };
                  })(function () {
                    throw (
                      (e || ((e = !0), n('r:' + (Kr++).toString(36))),
                      Error(i(355)))
                    );
                  }),
                  n = mi(t)[1];
                return (
                  0 === (2 & ei.mode) &&
                    ((ei.flags |= 516),
                    gi(
                      5,
                      function () {
                        n('r:' + (Kr++).toString(36));
                      },
                      void 0,
                      null
                    )),
                  t
                );
              }
              return mi((t = 'r:' + (Kr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          Ni = {
            readContext: la,
            useCallback: _i,
            useContext: la,
            useEffect: ki,
            useImperativeHandle: Pi,
            useLayoutEffect: Si,
            useMemo: Oi,
            useReducer: fi,
            useRef: bi,
            useState: function () {
              return fi(ci);
            },
            useDebugValue: Ti,
            useDeferredValue: function (e) {
              var t = fi(ci),
                n = t[0],
                r = t[1];
              return (
                ki(
                  function () {
                    var t = Za.transition;
                    Za.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Za.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = fi(ci)[0];
              return [bi().current, e];
            },
            useMutableSource: hi,
            useOpaqueIdentifier: function () {
              return fi(ci)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Vi = {
            readContext: la,
            useCallback: _i,
            useContext: la,
            useEffect: ki,
            useImperativeHandle: Pi,
            useLayoutEffect: Si,
            useMemo: Oi,
            useReducer: di,
            useRef: bi,
            useState: function () {
              return di(ci);
            },
            useDebugValue: Ti,
            useDeferredValue: function (e) {
              var t = di(ci),
                n = t[0],
                r = t[1];
              return (
                ki(
                  function () {
                    var t = Za.transition;
                    Za.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Za.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = di(ci)[0];
              return [bi().current, e];
            },
            useMutableSource: hi,
            useOpaqueIdentifier: function () {
              return di(ci)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Di = x.ReactCurrentOwner,
          ji = !1;
        function Fi(e, t, n, r) {
          t.child = null === e ? _a(t, null, n, r) : Ta(t, e.child, n, r);
        }
        function zi(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            ia(t, o),
            (r = li(e, t, n, r, a, o)),
            null === e || ji
              ? ((t.flags |= 1), Fi(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~o),
                al(e, t, o))
          );
        }
        function Ii(e, t, n, r, o, a) {
          if (null === e) {
            var i = n.type;
            return 'function' !== typeof i ||
              $u(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Qu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Ui(e, t, i, r, o, a));
          }
          return (
            (i = e.child),
            0 === (o & a) &&
            ((o = i.memoizedProps),
            (n = null !== (n = n.compare) ? n : dr)(o, r) && e.ref === t.ref)
              ? al(e, t, a)
              : ((t.flags |= 1),
                ((e = qu(i, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Ui(e, t, n, r, o, a) {
          if (null !== e && dr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((ji = !1), 0 === (a & o)))
              return (t.lanes = e.lanes), al(e, t, a);
            0 !== (16384 & e.flags) && (ji = !0);
          }
          return Hi(e, t, n, r, a);
        }
        function Bi(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode || 'unstable-defer-without-hiding' === r.mode)
            if (0 === (4 & t.mode))
              (t.memoizedState = { baseLanes: 0 }), Eu(t, n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  Eu(t, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }),
                Eu(t, null !== a ? a.baseLanes : n);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Eu(t, r);
          return Fi(e, t, o, n), t.child;
        }
        function Wi(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.flags |= 128);
        }
        function Hi(e, t, n, r, o) {
          var a = yo(n) ? mo : vo.current;
          return (
            (a = go(t, a)),
            ia(t, o),
            (n = li(e, t, n, r, a, o)),
            null === e || ji
              ? ((t.flags |= 1), Fi(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~o),
                al(e, t, o))
          );
        }
        function $i(e, t, n, r, o) {
          if (yo(n)) {
            var a = !0;
            Eo(t);
          } else a = !1;
          if ((ia(t, o), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              wa(t, n, r),
              Ea(t, n, r, o),
              (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var u = i.context,
              s = n.contextType;
            'object' === typeof s && null !== s
              ? (s = la(s))
              : (s = go(t, (s = yo(n) ? mo : vo.current)));
            var c = n.getDerivedStateFromProps,
              f =
                'function' === typeof c ||
                'function' === typeof i.getSnapshotBeforeUpdate;
            f ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((l !== r || u !== s) && xa(t, i, r, s)),
              (ua = !1);
            var d = t.memoizedState;
            (i.state = d),
              va(t, r, i, o),
              (u = t.memoizedState),
              l !== r || d !== u || ho.current || ua
                ? ('function' === typeof c &&
                    (ga(t, n, c, r), (u = t.memoizedState)),
                  (l = ua || ba(t, n, l, r, d, u, s))
                    ? (f ||
                        ('function' !== typeof i.UNSAFE_componentWillMount &&
                          'function' !== typeof i.componentWillMount) ||
                        ('function' === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        'function' === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      'function' === typeof i.componentDidMount &&
                        (t.flags |= 4))
                    : ('function' === typeof i.componentDidMount &&
                        (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = s),
                  (r = l))
                : ('function' === typeof i.componentDidMount && (t.flags |= 4),
                  (r = !1));
          } else {
            (i = t.stateNode),
              ca(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : Zo(t.type, l)),
              (i.props = s),
              (f = t.pendingProps),
              (d = i.context),
              'object' === typeof (u = n.contextType) && null !== u
                ? (u = la(u))
                : (u = go(t, (u = yo(n) ? mo : vo.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              'function' === typeof p ||
              'function' === typeof i.getSnapshotBeforeUpdate) ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== u) && xa(t, i, r, u)),
              (ua = !1),
              (d = t.memoizedState),
              (i.state = d),
              va(t, r, i, o);
            var v = t.memoizedState;
            l !== f || d !== v || ho.current || ua
              ? ('function' === typeof p &&
                  (ga(t, n, p, r), (v = t.memoizedState)),
                (s = ua || ba(t, n, s, r, d, v, u))
                  ? (c ||
                      ('function' !== typeof i.UNSAFE_componentWillUpdate &&
                        'function' !== typeof i.componentWillUpdate) ||
                      ('function' === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, v, u),
                      'function' === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, v, u)),
                    'function' === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    'function' === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 256))
                  : ('function' !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = v)),
                (i.props = r),
                (i.state = v),
                (i.context = u),
                (r = s))
              : ('function' !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                'function' !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return qi(e, t, n, r, a, o);
        }
        function qi(e, t, n, r, o, a) {
          Wi(e, t);
          var i = 0 !== (64 & t.flags);
          if (!r && !i) return o && ko(t, n, !1), al(e, t, a);
          (r = t.stateNode), (Di.current = t);
          var l =
            i && 'function' !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Ta(t, e.child, null, a)),
                (t.child = Ta(t, null, l, a)))
              : Fi(e, t, l, a),
            (t.memoizedState = r.state),
            o && ko(t, n, !0),
            t.child
          );
        }
        function Qi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? wo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && wo(0, t.context, !1),
            Na(e, t.containerInfo);
        }
        var Yi,
          Xi,
          Ki,
          Gi = { dehydrated: null, retryLane: 0 };
        function Zi(e, t, n) {
          var r,
            o = t.pendingProps,
            a = Fa.current,
            i = !1;
          return (
            (r = 0 !== (64 & t.flags)) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)),
            r
              ? ((i = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === o.fallback ||
                !0 === o.unstable_avoidThisFallback ||
                (a |= 1),
            fo(Fa, 1 & a),
            null === e
              ? (void 0 !== o.fallback && $a(t),
                (e = o.children),
                (a = o.fallback),
                i
                  ? ((e = Ji(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Gi),
                    e)
                  : 'number' === typeof o.unstable_expectedLoadTime
                  ? ((e = Ji(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Gi),
                    (t.lanes = 33554432),
                    e)
                  : (((n = Xu(
                      { mode: 'visible', children: e },
                      t.mode,
                      n,
                      null
                    )).return = t),
                    (t.child = n)))
              : (e.memoizedState,
                i
                  ? ((o = tl(e, t, o.children, o.fallback, n)),
                    (i = t.child),
                    (a = e.child.memoizedState),
                    (i.memoizedState =
                      null === a
                        ? { baseLanes: n }
                        : { baseLanes: a.baseLanes | n }),
                    (i.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Gi),
                    o)
                  : ((n = el(e, t, o.children, n)),
                    (t.memoizedState = null),
                    n))
          );
        }
        function Ji(e, t, n, r) {
          var o = e.mode,
            a = e.child;
          return (
            (t = { mode: 'hidden', children: t }),
            0 === (2 & o) && null !== a
              ? ((a.childLanes = 0), (a.pendingProps = t))
              : (a = Xu(t, o, 0, null)),
            (n = Yu(n, o, r, null)),
            (a.return = e),
            (n.return = e),
            (a.sibling = n),
            (e.child = a),
            n
          );
        }
        function el(e, t, n, r) {
          var o = e.child;
          return (
            (e = o.sibling),
            (n = qu(o, { mode: 'visible', children: n })),
            0 === (2 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              ((e.nextEffect = null),
              (e.flags = 8),
              (t.firstEffect = t.lastEffect = e)),
            (t.child = n)
          );
        }
        function tl(e, t, n, r, o) {
          var a = t.mode,
            i = e.child;
          e = i.sibling;
          var l = { mode: 'hidden', children: n };
          return (
            0 === (2 & a) && t.child !== i
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = l),
                null !== (i = n.lastEffect)
                  ? ((t.firstEffect = n.firstEffect),
                    (t.lastEffect = i),
                    (i.nextEffect = null))
                  : (t.firstEffect = t.lastEffect = null))
              : (n = qu(i, l)),
            null !== e ? (r = qu(e, r)) : ((r = Yu(r, a, o, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function nl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), aa(e.return, t);
        }
        function rl(e, t, n, r, o, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
                lastEffect: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = o),
              (i.lastEffect = a));
        }
        function ol(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((Fi(e, t, r.children, n), 0 !== (2 & (r = Fa.current))))
            (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 !== (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && nl(e, n);
                else if (19 === e.tag) nl(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((fo(Fa, r), 0 === (2 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case 'forwards':
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === za(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  rl(t, !1, o, n, a, t.lastEffect);
                break;
              case 'backwards':
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === za(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                rl(t, !0, n, null, a, t.lastEffect);
                break;
              case 'together':
                rl(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function al(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ul |= t.lanes),
            0 !== (n & t.childLanes))
          ) {
            if (null !== e && t.child !== e.child) throw Error(i(153));
            if (null !== t.child) {
              for (
                n = qu((e = t.child), e.pendingProps),
                  t.child = n,
                  n.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((n = n.sibling = qu(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function il(e, t) {
          if (!Ba)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ll(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
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
              return null;
            case 1:
            case 17:
              return yo(t.type) && bo(), null;
            case 3:
              return (
                Va(),
                co(ho),
                co(vo),
                Ka(),
                (r = t.stateNode).pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Qa(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                null
              );
            case 5:
              ja(t);
              var a = Ra(Aa.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Xi(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return null;
                }
                if (((e = Ra(La.current)), Qa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[Zr] = t), (r[Jr] = l), n)) {
                    case 'dialog':
                      Lr('cancel', r), Lr('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Lr('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (e = 0; e < Pr.length; e++) Lr(Pr[e], r);
                      break;
                    case 'source':
                      Lr('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Lr('error', r), Lr('load', r);
                      break;
                    case 'details':
                      Lr('toggle', r);
                      break;
                    case 'input':
                      ee(r, l), Lr('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Lr('invalid', r);
                      break;
                    case 'textarea':
                      ue(r, l), Lr('invalid', r);
                  }
                  for (var s in (Se(n, l), (e = null), l))
                    l.hasOwnProperty(s) &&
                      ((a = l[s]),
                      'children' === s
                        ? 'string' === typeof a
                          ? r.textContent !== a && (e = ['children', a])
                          : 'number' === typeof a &&
                            r.textContent !== '' + a &&
                            (e = ['children', '' + a])
                        : u.hasOwnProperty(s) &&
                          null != a &&
                          'onScroll' === s &&
                          Lr('scroll', r));
                  switch (n) {
                    case 'input':
                      K(r), re(r, l, !0);
                      break;
                    case 'textarea':
                      K(r), ce(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof l.onClick && (r.onclick = Ir);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((s = 9 === a.nodeType ? a : a.ownerDocument),
                    e === fe && (e = pe(n)),
                    e === fe
                      ? 'script' === n
                        ? (((e = s.createElement('div')).innerHTML =
                            '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          'select' === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[Zr] = t),
                    (e[Jr] = r),
                    Yi(e, t),
                    (t.stateNode = e),
                    (s = Ce(n, r)),
                    n)
                  ) {
                    case 'dialog':
                      Lr('cancel', e), Lr('close', e), (a = r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Lr('load', e), (a = r);
                      break;
                    case 'video':
                    case 'audio':
                      for (a = 0; a < Pr.length; a++) Lr(Pr[a], e);
                      a = r;
                      break;
                    case 'source':
                      Lr('error', e), (a = r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Lr('error', e), Lr('load', e), (a = r);
                      break;
                    case 'details':
                      Lr('toggle', e), (a = r);
                      break;
                    case 'input':
                      ee(e, r), (a = J(e, r)), Lr('invalid', e);
                      break;
                    case 'option':
                      a = ae(e, r);
                      break;
                    case 'select':
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (a = o({}, r, { value: void 0 })),
                        Lr('invalid', e);
                      break;
                    case 'textarea':
                      ue(e, r), (a = le(e, r)), Lr('invalid', e);
                      break;
                    default:
                      a = r;
                  }
                  Se(n, a);
                  var c = a;
                  for (l in c)
                    if (c.hasOwnProperty(l)) {
                      var f = c[l];
                      'style' === l
                        ? Ee(e, f)
                        : 'dangerouslySetInnerHTML' === l
                        ? null != (f = f ? f.__html : void 0) && ge(e, f)
                        : 'children' === l
                        ? 'string' === typeof f
                          ? ('textarea' !== n || '' !== f) && ye(e, f)
                          : 'number' === typeof f && ye(e, '' + f)
                        : 'suppressContentEditableWarning' !== l &&
                          'suppressHydrationWarning' !== l &&
                          'autoFocus' !== l &&
                          (u.hasOwnProperty(l)
                            ? null != f && 'onScroll' === l && Lr('scroll', e)
                            : null != f && w(e, l, f, s));
                    }
                  switch (n) {
                    case 'input':
                      K(e), re(e, r, !1);
                      break;
                    case 'textarea':
                      K(e), ce(e);
                      break;
                    case 'option':
                      null != r.value &&
                        e.setAttribute('value', '' + Y(r.value));
                      break;
                    case 'select':
                      (e.multiple = !!r.multiple),
                        null != (l = r.value)
                          ? ie(e, !!r.multiple, l, !1)
                          : null != r.defaultValue &&
                            ie(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      'function' === typeof a.onClick && (e.onclick = Ir);
                  }
                  Wr(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Ki(0, t, e.memoizedProps, r);
              else {
                if ('string' !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                (n = Ra(Aa.current)),
                  Ra(La.current),
                  Qa(t)
                    ? ((r = t.stateNode),
                      (n = t.memoizedProps),
                      (r[Zr] = t),
                      r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[Zr] = t),
                      (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                co(Fa),
                (r = t.memoizedState),
                0 !== (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && Qa(t)
                      : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 !== (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 !== (1 & Fa.current)
                        ? 0 === Fl && (Fl = 3)
                        : ((0 !== Fl && 3 !== Fl) || (Fl = 4),
                          null === Rl ||
                            (0 === (134217727 & Ul) &&
                              0 === (134217727 & Bl)) ||
                            yu(Rl, Vl))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return Va(), null === e && Ar(t.stateNode.containerInfo), null;
            case 10:
              return oa(t), null;
            case 19:
              if ((co(Fa), null === (r = t.memoizedState))) return null;
              if (((l = 0 !== (64 & t.flags)), null === (s = r.rendering)))
                if (l) il(r, !1);
                else {
                  if (0 !== Fl || (null !== e && 0 !== (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = za(e))) {
                        for (
                          t.flags |= 64,
                            il(r, !1),
                            null !== (l = s.updateQueue) &&
                              ((t.updateQueue = l), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 2),
                            (l.nextEffect = null),
                            (l.firstEffect = null),
                            (l.lastEffect = null),
                            null === (s = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = s.childLanes),
                                (l.lanes = s.lanes),
                                (l.child = s.child),
                                (l.memoizedProps = s.memoizedProps),
                                (l.memoizedState = s.memoizedState),
                                (l.updateQueue = s.updateQueue),
                                (l.type = s.type),
                                (e = s.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return fo(Fa, (1 & Fa.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    Ho() > ql &&
                    ((t.flags |= 64),
                    (l = !0),
                    il(r, !1),
                    (t.lanes = 33554432));
                }
              else {
                if (!l)
                  if (null !== (e = za(s))) {
                    if (
                      ((t.flags |= 64),
                      (l = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      il(r, !0),
                      null === r.tail &&
                        'hidden' === r.tailMode &&
                        !s.alternate &&
                        !Ba)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * Ho() - r.renderingStartTime > ql &&
                      1073741824 !== n &&
                      ((t.flags |= 64),
                      (l = !0),
                      il(r, !1),
                      (t.lanes = 33554432));
                r.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = r.last) ? (n.sibling = s) : (t.child = s),
                    (r.last = s));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Ho()),
                  (n.sibling = null),
                  (t = Fa.current),
                  fo(Fa, l ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                ku(),
                null !== e &&
                  (null !== e.memoizedState) !== (null !== t.memoizedState) &&
                  'unstable-defer-without-hiding' !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(i(156, t.tag));
        }
        function ul(e) {
          switch (e.tag) {
            case 1:
              yo(e.type) && bo();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Va(), co(ho), co(vo), Ka(), 0 !== (64 & (t = e.flags))))
                throw Error(i(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return ja(e), null;
            case 13:
              return (
                co(Fa),
                4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
              );
            case 19:
              return co(Fa), null;
            case 4:
              return Va(), null;
            case 10:
              return oa(e), null;
            case 23:
            case 24:
              return ku(), null;
            default:
              return null;
          }
        }
        function sl(e, t) {
          try {
            var n = '',
              r = t;
            do {
              (n += q(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (a) {
            o = '\nError generating stack: ' + a.message + '\n' + a.stack;
          }
          return { value: e, source: t, stack: o };
        }
        function cl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        (Yi = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Xi = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Ra(La.current);
              var i,
                l = null;
              switch (n) {
                case 'input':
                  (a = J(e, a)), (r = J(e, r)), (l = []);
                  break;
                case 'option':
                  (a = ae(e, a)), (r = ae(e, r)), (l = []);
                  break;
                case 'select':
                  (a = o({}, a, { value: void 0 })),
                    (r = o({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case 'textarea':
                  (a = le(e, a)), (r = le(e, r)), (l = []);
                  break;
                default:
                  'function' !== typeof a.onClick &&
                    'function' === typeof r.onClick &&
                    (e.onclick = Ir);
              }
              for (f in (Se(n, r), (n = null), a))
                if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && null != a[f])
                  if ('style' === f) {
                    var s = a[f];
                    for (i in s)
                      s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== f &&
                      'children' !== f &&
                      'suppressContentEditableWarning' !== f &&
                      'suppressHydrationWarning' !== f &&
                      'autoFocus' !== f &&
                      (u.hasOwnProperty(f)
                        ? l || (l = [])
                        : (l = l || []).push(f, null));
              for (f in r) {
                var c = r[f];
                if (
                  ((s = null != a ? a[f] : void 0),
                  r.hasOwnProperty(f) && c !== s && (null != c || null != s))
                )
                  if ('style' === f)
                    if (s) {
                      for (i in s)
                        !s.hasOwnProperty(i) ||
                          (c && c.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ''));
                      for (i in c)
                        c.hasOwnProperty(i) &&
                          s[i] !== c[i] &&
                          (n || (n = {}), (n[i] = c[i]));
                    } else n || (l || (l = []), l.push(f, n)), (n = c);
                  else
                    'dangerouslySetInnerHTML' === f
                      ? ((c = c ? c.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != c && s !== c && (l = l || []).push(f, c))
                      : 'children' === f
                      ? ('string' !== typeof c && 'number' !== typeof c) ||
                        (l = l || []).push(f, '' + c)
                      : 'suppressContentEditableWarning' !== f &&
                        'suppressHydrationWarning' !== f &&
                        (u.hasOwnProperty(f)
                          ? (null != c && 'onScroll' === f && Lr('scroll', e),
                            l || s === c || (l = []))
                          : 'object' === typeof c &&
                            null !== c &&
                            c.$$typeof === V
                          ? c.toString()
                          : (l = l || []).push(f, c));
              }
              n && (l = l || []).push('style', n);
              var f = l;
              (t.updateQueue = f) && (t.flags |= 4);
            }
          }),
          (Ki = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var fl = 'function' === typeof WeakMap ? WeakMap : Map;
        function dl(e, t, n) {
          ((n = fa(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Kl || ((Kl = !0), (Gl = r)), cl(0, t);
            }),
            n
          );
        }
        function pl(e, t, n) {
          (n = fa(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ('function' === typeof r) {
            var o = t.value;
            n.payload = function () {
              return cl(0, t), r(o);
            };
          }
          var a = e.stateNode;
          return (
            null !== a &&
              'function' === typeof a.componentDidCatch &&
              (n.callback = function () {
                'function' !== typeof r &&
                  (null === Zl ? (Zl = new Set([this])) : Zl.add(this),
                  cl(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : '',
                });
              }),
            n
          );
        }
        var vl = 'function' === typeof WeakSet ? WeakSet : Set;
        function hl(e) {
          var t = e.ref;
          if (null !== t)
            if ('function' === typeof t)
              try {
                t(null);
              } catch (n) {
                Iu(e, n);
              }
            else t.current = null;
        }
        function ml(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? n : Zo(t.type, n),
                  r
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && Qr(t.stateNode.containerInfo));
          }
          throw Error(i(163));
        }
        function gl(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  if (3 === (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  var o = e;
                  (r = o.next),
                    0 !== (4 & (o = o.tag)) &&
                      0 !== (1 & o) &&
                      (ju(n, e), Du(n, e)),
                    (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r =
                        n.elementType === n.type
                          ? t.memoizedProps
                          : Zo(n.type, t.memoizedProps)),
                      e.componentDidUpdate(
                        r,
                        t.memoizedState,
                        e.__reactInternalSnapshotBeforeUpdate
                      ))),
                void (null !== (t = n.updateQueue) && ha(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                ha(n, t, e);
              }
              return;
            case 5:
              return (
                (e = n.stateNode),
                void (
                  null === t &&
                  4 & n.flags &&
                  Wr(n.type, n.memoizedProps) &&
                  e.focus()
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n &&
                  ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && Et(n))))
              );
          }
          throw Error(i(163));
        }
        function yl(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t)
                'function' === typeof (r = r.style).setProperty
                  ? r.setProperty('display', 'none', 'important')
                  : (r.display = 'none');
              else {
                r = n.stateNode;
                var o = n.memoizedProps.style;
                (o =
                  void 0 !== o && null !== o && o.hasOwnProperty('display')
                    ? o.display
                    : null),
                  (r.style.display = xe('display', o));
              }
            } else if (6 === n.tag)
              n.stateNode.nodeValue = t ? '' : n.memoizedProps;
            else if (
              ((23 !== n.tag && 24 !== n.tag) ||
                null === n.memoizedState ||
                n === e) &&
              null !== n.child
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function bl(e, t) {
          if (Co && 'function' === typeof Co.onCommitFiberUnmount)
            try {
              Co.onCommitFiberUnmount(So, t);
            } catch (a) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    o = r.destroy;
                  if (((r = r.tag), void 0 !== o))
                    if (0 !== (4 & r)) ju(t, n);
                    else {
                      r = t;
                      try {
                        o();
                      } catch (a) {
                        Iu(r, a);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if (
                (hl(t),
                'function' === typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (a) {
                  Iu(t, a);
                }
              break;
            case 5:
              hl(t);
              break;
            case 4:
              Cl(e, t);
          }
        }
        function wl(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function xl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function El(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (xl(t)) break e;
              t = t.return;
            }
            throw Error(i(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(i(161));
          }
          16 & n.flags && (ye(t, ''), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || xl(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

            ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? kl(e, n, t) : Sl(e, n, t);
        }
        function kl(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Ir));
          else if (4 !== r && null !== (e = e.child))
            for (kl(e, t, n), e = e.sibling; null !== e; )
              kl(e, t, n), (e = e.sibling);
        }
        function Sl(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (Sl(e, t, n), e = e.sibling; null !== e; )
              Sl(e, t, n), (e = e.sibling);
        }
        function Cl(e, t) {
          for (var n, r, o = t, a = !1; ; ) {
            if (!a) {
              a = o.return;
              e: for (;;) {
                if (null === a) throw Error(i(160));
                switch (((n = a.stateNode), a.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                a = a.return;
              }
              a = !0;
            }
            if (5 === o.tag || 6 === o.tag) {
              e: for (var l = e, u = o, s = u; ; )
                if ((bl(l, s), null !== s.child && 4 !== s.tag))
                  (s.child.return = s), (s = s.child);
                else {
                  if (s === u) break e;
                  for (; null === s.sibling; ) {
                    if (null === s.return || s.return === u) break e;
                    s = s.return;
                  }
                  (s.sibling.return = s.return), (s = s.sibling);
                }
              r
                ? ((l = n),
                  (u = o.stateNode),
                  8 === l.nodeType
                    ? l.parentNode.removeChild(u)
                    : l.removeChild(u))
                : n.removeChild(o.stateNode);
            } else if (4 === o.tag) {
              if (null !== o.child) {
                (n = o.stateNode.containerInfo),
                  (r = !0),
                  (o.child.return = o),
                  (o = o.child);
                continue;
              }
            } else if ((bl(e, o), null !== o.child)) {
              (o.child.return = o), (o = o.child);
              continue;
            }
            if (o === t) break;
            for (; null === o.sibling; ) {
              if (null === o.return || o.return === t) return;
              4 === (o = o.return).tag && (a = !1);
            }
            (o.sibling.return = o.return), (o = o.sibling);
          }
        }
        function Pl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 === (3 & r.tag) &&
                    ((e = r.destroy),
                    (r.destroy = void 0),
                    void 0 !== e && e()),
                    (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var o = null !== e ? e.memoizedProps : r;
                e = t.type;
                var a = t.updateQueue;
                if (((t.updateQueue = null), null !== a)) {
                  for (
                    n[Jr] = r,
                      'input' === e &&
                        'radio' === r.type &&
                        null != r.name &&
                        te(n, r),
                      Ce(e, o),
                      t = Ce(e, r),
                      o = 0;
                    o < a.length;
                    o += 2
                  ) {
                    var l = a[o],
                      u = a[o + 1];
                    'style' === l
                      ? Ee(n, u)
                      : 'dangerouslySetInnerHTML' === l
                      ? ge(n, u)
                      : 'children' === l
                      ? ye(n, u)
                      : w(n, l, u, t);
                  }
                  switch (e) {
                    case 'input':
                      ne(n, r);
                      break;
                    case 'textarea':
                      se(n, r);
                      break;
                    case 'select':
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (a = r.value)
                          ? ie(n, !!r.multiple, a, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? ie(n, !!r.multiple, r.defaultValue, !0)
                              : ie(n, !!r.multiple, r.multiple ? [] : '', !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(i(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                (n = t.stateNode).hydrate &&
                ((n.hydrate = !1), Et(n.containerInfo))
              );
            case 13:
              return (
                null !== t.memoizedState && (($l = Ho()), yl(t.child, !0)),
                void Tl(t)
              );
            case 19:
              return void Tl(t);
            case 23:
            case 24:
              return void yl(t, null !== t.memoizedState);
          }
          throw Error(i(163));
        }
        function Tl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new vl()),
              t.forEach(function (t) {
                var r = Bu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function _l(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var Ol = Math.ceil,
          Ll = x.ReactCurrentDispatcher,
          Ml = x.ReactCurrentOwner,
          Al = 0,
          Rl = null,
          Nl = null,
          Vl = 0,
          Dl = 0,
          jl = so(0),
          Fl = 0,
          zl = null,
          Il = 0,
          Ul = 0,
          Bl = 0,
          Wl = 0,
          Hl = null,
          $l = 0,
          ql = 1 / 0;
        function Ql() {
          ql = Ho() + 500;
        }
        var Yl,
          Xl = null,
          Kl = !1,
          Gl = null,
          Zl = null,
          Jl = !1,
          eu = null,
          tu = 90,
          nu = [],
          ru = [],
          ou = null,
          au = 0,
          iu = null,
          lu = -1,
          uu = 0,
          su = 0,
          cu = null,
          fu = !1;
        function du() {
          return 0 !== (48 & Al) ? Ho() : -1 !== lu ? lu : (lu = Ho());
        }
        function pu(e) {
          if (0 === (2 & (e = e.mode))) return 1;
          if (0 === (4 & e)) return 99 === $o() ? 1 : 2;
          if ((0 === uu && (uu = Il), 0 !== Go.transition)) {
            0 !== su && (su = null !== Hl ? Hl.pendingLanes : 0), (e = uu);
            var t = 4186112 & ~su;
            return (
              0 === (t &= -t) &&
                0 === (t = (e = 4186112 & ~e) & -e) &&
                (t = 8192),
              t
            );
          }
          return (
            (e = $o()),
            0 !== (4 & Al) && 98 === e
              ? (e = It(12, uu))
              : (e = It(
                  (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
                  uu
                )),
            e
          );
        }
        function vu(e, t, n) {
          if (50 < au) throw ((au = 0), (iu = null), Error(i(185)));
          if (null === (e = hu(e, t))) return null;
          Wt(e, t, n), e === Rl && ((Bl |= t), 4 === Fl && yu(e, Vl));
          var r = $o();
          1 === t
            ? 0 !== (8 & Al) && 0 === (48 & Al)
              ? bu(e)
              : (mu(e, n), 0 === Al && (Ql(), Xo()))
            : (0 === (4 & Al) ||
                (98 !== r && 99 !== r) ||
                (null === ou ? (ou = new Set([e])) : ou.add(e)),
              mu(e, n)),
            (Hl = e);
        }
        function hu(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function mu(e, t) {
          for (
            var n = e.callbackNode,
              r = e.suspendedLanes,
              o = e.pingedLanes,
              a = e.expirationTimes,
              l = e.pendingLanes;
            0 < l;

          ) {
            var u = 31 - Ht(l),
              s = 1 << u,
              c = a[u];
            if (-1 === c) {
              if (0 === (s & r) || 0 !== (s & o)) {
                (c = t), jt(s);
                var f = Dt;
                a[u] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1;
              }
            } else c <= t && (e.expiredLanes |= s);
            l &= ~s;
          }
          if (((r = Ft(e, e === Rl ? Vl : 0)), (t = Dt), 0 === r))
            null !== n &&
              (n !== Fo && _o(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== Fo && _o(n);
            }
            15 === t
              ? ((n = bu.bind(null, e)),
                null === Io ? ((Io = [n]), (Uo = To(Ro, Ko))) : Io.push(n),
                (n = Fo))
              : 14 === t
              ? (n = Yo(99, bu.bind(null, e)))
              : ((n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(i(358, e));
                  }
                })(t)),
                (n = Yo(n, gu.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function gu(e) {
          if (((lu = -1), (su = uu = 0), 0 !== (48 & Al))) throw Error(i(327));
          var t = e.callbackNode;
          if (Vu() && e.callbackNode !== t) return null;
          var n = Ft(e, e === Rl ? Vl : 0);
          if (0 === n) return null;
          var r = n,
            o = Al;
          Al |= 16;
          var a = Pu();
          for ((Rl === e && Vl === r) || (Ql(), Su(e, r)); ; )
            try {
              Ou();
              break;
            } catch (u) {
              Cu(e, u);
            }
          if (
            (ra(),
            (Ll.current = a),
            (Al = o),
            null !== Nl ? (r = 0) : ((Rl = null), (Vl = 0), (r = Fl)),
            0 !== (Il & Bl))
          )
            Su(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((Al |= 64),
                e.hydrate && ((e.hydrate = !1), Qr(e.containerInfo)),
                0 !== (n = zt(e)) && (r = Tu(e, n))),
              1 === r)
            )
              throw ((t = zl), Su(e, 0), yu(e, n), mu(e, Ho()), t);
            switch (
              ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
            ) {
              case 0:
              case 1:
                throw Error(i(345));
              case 2:
              case 5:
                Au(e);
                break;
              case 3:
                if (
                  (yu(e, n), (62914560 & n) === n && 10 < (r = $l + 500 - Ho()))
                ) {
                  if (0 !== Ft(e, 0)) break;
                  if (((o = e.suspendedLanes) & n) !== n) {
                    du(), (e.pingedLanes |= e.suspendedLanes & o);
                    break;
                  }
                  e.timeoutHandle = $r(Au.bind(null, e), r);
                  break;
                }
                Au(e);
                break;
              case 4:
                if ((yu(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, o = -1; 0 < n; ) {
                  var l = 31 - Ht(n);
                  (a = 1 << l), (l = r[l]) > o && (o = l), (n &= ~a);
                }
                if (
                  ((n = o),
                  10 <
                    (n =
                      (120 > (n = Ho() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * Ol(n / 1960)) - n))
                ) {
                  e.timeoutHandle = $r(Au.bind(null, e), n);
                  break;
                }
                Au(e);
                break;
              default:
                throw Error(i(329));
            }
          }
          return mu(e, Ho()), e.callbackNode === t ? gu.bind(null, e) : null;
        }
        function yu(e, t) {
          for (
            t &= ~Wl,
              t &= ~Bl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - Ht(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function bu(e) {
          if (0 !== (48 & Al)) throw Error(i(327));
          if ((Vu(), e === Rl && 0 !== (e.expiredLanes & Vl))) {
            var t = Vl,
              n = Tu(e, t);
            0 !== (Il & Bl) && (n = Tu(e, (t = Ft(e, t))));
          } else n = Tu(e, (t = Ft(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((Al |= 64),
              e.hydrate && ((e.hydrate = !1), Qr(e.containerInfo)),
              0 !== (t = zt(e)) && (n = Tu(e, t))),
            1 === n)
          )
            throw ((n = zl), Su(e, 0), yu(e, t), mu(e, Ho()), n);
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Au(e),
            mu(e, Ho()),
            null
          );
        }
        function wu(e, t) {
          var n = Al;
          Al |= 1;
          try {
            return e(t);
          } finally {
            0 === (Al = n) && (Ql(), Xo());
          }
        }
        function xu(e, t) {
          var n = Al;
          (Al &= -2), (Al |= 8);
          try {
            return e(t);
          } finally {
            0 === (Al = n) && (Ql(), Xo());
          }
        }
        function Eu(e, t) {
          fo(jl, Dl), (Dl |= t), (Il |= t);
        }
        function ku() {
          (Dl = jl.current), co(jl);
        }
        function Su(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), qr(n)), null !== Nl))
            for (n = Nl.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    bo();
                  break;
                case 3:
                  Va(), co(ho), co(vo), Ka();
                  break;
                case 5:
                  ja(r);
                  break;
                case 4:
                  Va();
                  break;
                case 13:
                case 19:
                  co(Fa);
                  break;
                case 10:
                  oa(r);
                  break;
                case 23:
                case 24:
                  ku();
              }
              n = n.return;
            }
          (Rl = e),
            (Nl = qu(e.current, null)),
            (Vl = Dl = Il = t),
            (Fl = 0),
            (zl = null),
            (Wl = Bl = Ul = 0);
        }
        function Cu(e, t) {
          for (;;) {
            var n = Nl;
            try {
              if ((ra(), (Ga.current = Ai), ri)) {
                for (var r = ei.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                ri = !1;
              }
              if (
                ((Ja = 0),
                (ni = ti = ei = null),
                (oi = !1),
                (Ml.current = null),
                null === n || null === n.return)
              ) {
                (Fl = 1), (zl = t), (Nl = null);
                break;
              }
              e: {
                var a = e,
                  i = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Vl),
                  (l.flags |= 2048),
                  (l.firstEffect = l.lastEffect = null),
                  null !== u &&
                    'object' === typeof u &&
                    'function' === typeof u.then)
                ) {
                  var s = u;
                  if (0 === (2 & l.mode)) {
                    var c = l.alternate;
                    c
                      ? ((l.updateQueue = c.updateQueue),
                        (l.memoizedState = c.memoizedState),
                        (l.lanes = c.lanes))
                      : ((l.updateQueue = null), (l.memoizedState = null));
                  }
                  var f = 0 !== (1 & Fa.current),
                    d = i;
                  do {
                    var p;
                    if ((p = 13 === d.tag)) {
                      var v = d.memoizedState;
                      if (null !== v) p = null !== v.dehydrated;
                      else {
                        var h = d.memoizedProps;
                        p =
                          void 0 !== h.fallback &&
                          (!0 !== h.unstable_avoidThisFallback || !f);
                      }
                    }
                    if (p) {
                      var m = d.updateQueue;
                      if (null === m) {
                        var g = new Set();
                        g.add(s), (d.updateQueue = g);
                      } else m.add(s);
                      if (0 === (2 & d.mode)) {
                        if (
                          ((d.flags |= 64),
                          (l.flags |= 16384),
                          (l.flags &= -2981),
                          1 === l.tag)
                        )
                          if (null === l.alternate) l.tag = 17;
                          else {
                            var y = fa(-1, 1);
                            (y.tag = 2), da(l, y);
                          }
                        l.lanes |= 1;
                        break e;
                      }
                      (u = void 0), (l = t);
                      var b = a.pingCache;
                      if (
                        (null === b
                          ? ((b = a.pingCache = new fl()),
                            (u = new Set()),
                            b.set(s, u))
                          : void 0 === (u = b.get(s)) &&
                            ((u = new Set()), b.set(s, u)),
                        !u.has(l))
                      ) {
                        u.add(l);
                        var w = Uu.bind(null, a, s, l);
                        s.then(w, w);
                      }
                      (d.flags |= 4096), (d.lanes = t);
                      break e;
                    }
                    d = d.return;
                  } while (null !== d);
                  u = Error(
                    (Q(l.type) || 'A React component') +
                      ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.'
                  );
                }
                5 !== Fl && (Fl = 2), (u = sl(u, l)), (d = i);
                do {
                  switch (d.tag) {
                    case 3:
                      (a = u),
                        (d.flags |= 4096),
                        (t &= -t),
                        (d.lanes |= t),
                        pa(d, dl(0, a, t));
                      break e;
                    case 1:
                      a = u;
                      var x = d.type,
                        E = d.stateNode;
                      if (
                        0 === (64 & d.flags) &&
                        ('function' === typeof x.getDerivedStateFromError ||
                          (null !== E &&
                            'function' === typeof E.componentDidCatch &&
                            (null === Zl || !Zl.has(E))))
                      ) {
                        (d.flags |= 4096),
                          (t &= -t),
                          (d.lanes |= t),
                          pa(d, pl(d, a, t));
                        break e;
                      }
                  }
                  d = d.return;
                } while (null !== d);
              }
              Mu(n);
            } catch (k) {
              (t = k), Nl === n && null !== n && (Nl = n = n.return);
              continue;
            }
            break;
          }
        }
        function Pu() {
          var e = Ll.current;
          return (Ll.current = Ai), null === e ? Ai : e;
        }
        function Tu(e, t) {
          var n = Al;
          Al |= 16;
          var r = Pu();
          for ((Rl === e && Vl === t) || Su(e, t); ; )
            try {
              _u();
              break;
            } catch (o) {
              Cu(e, o);
            }
          if ((ra(), (Al = n), (Ll.current = r), null !== Nl))
            throw Error(i(261));
          return (Rl = null), (Vl = 0), Fl;
        }
        function _u() {
          for (; null !== Nl; ) Lu(Nl);
        }
        function Ou() {
          for (; null !== Nl && !Oo(); ) Lu(Nl);
        }
        function Lu(e) {
          var t = Yl(e.alternate, e, Dl);
          (e.memoizedProps = e.pendingProps),
            null === t ? Mu(e) : (Nl = t),
            (Ml.current = null);
        }
        function Mu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (2048 & t.flags))) {
              if (null !== (n = ll(n, t, Dl))) return void (Nl = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 !== (1073741824 & Dl) ||
                0 === (4 & n.mode)
              ) {
                for (var r = 0, o = n.child; null !== o; )
                  (r |= o.lanes | o.childLanes), (o = o.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 === (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = t.firstEffect),
                  (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = t)
                    : (e.firstEffect = t),
                  (e.lastEffect = t)));
            } else {
              if (null !== (n = ul(t))) return (n.flags &= 2047), void (Nl = n);
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (Nl = t);
            Nl = t = e;
          } while (null !== t);
          0 === Fl && (Fl = 5);
        }
        function Au(e) {
          var t = $o();
          return Qo(99, Ru.bind(null, e, t)), null;
        }
        function Ru(e, t) {
          do {
            Vu();
          } while (null !== eu);
          if (0 !== (48 & Al)) throw Error(i(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(i(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            o = r,
            a = e.pendingLanes & ~o;
          (e.pendingLanes = o),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= o),
            (e.mutableReadLanes &= o),
            (e.entangledLanes &= o),
            (o = e.entanglements);
          for (var l = e.eventTimes, u = e.expirationTimes; 0 < a; ) {
            var s = 31 - Ht(a),
              c = 1 << s;
            (o[s] = 0), (l[s] = -1), (u[s] = -1), (a &= ~c);
          }
          if (
            (null !== ou && 0 === (24 & r) && ou.has(e) && ou.delete(e),
            e === Rl && ((Nl = Rl = null), (Vl = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (
              ((o = Al),
              (Al |= 32),
              (Ml.current = null),
              (Ur = Xt),
              gr((l = mr())))
            ) {
              if ('selectionStart' in l)
                u = { start: l.selectionStart, end: l.selectionEnd };
              else
                e: if (
                  ((u = ((u = l.ownerDocument) && u.defaultView) || window),
                  (c = u.getSelection && u.getSelection()) &&
                    0 !== c.rangeCount)
                ) {
                  (u = c.anchorNode),
                    (a = c.anchorOffset),
                    (s = c.focusNode),
                    (c = c.focusOffset);
                  try {
                    u.nodeType, s.nodeType;
                  } catch (P) {
                    u = null;
                    break e;
                  }
                  var f = 0,
                    d = -1,
                    p = -1,
                    v = 0,
                    h = 0,
                    m = l,
                    g = null;
                  t: for (;;) {
                    for (
                      var y;
                      m !== u || (0 !== a && 3 !== m.nodeType) || (d = f + a),
                        m !== s || (0 !== c && 3 !== m.nodeType) || (p = f + c),
                        3 === m.nodeType && (f += m.nodeValue.length),
                        null !== (y = m.firstChild);

                    )
                      (g = m), (m = y);
                    for (;;) {
                      if (m === l) break t;
                      if (
                        (g === u && ++v === a && (d = f),
                        g === s && ++h === c && (p = f),
                        null !== (y = m.nextSibling))
                      )
                        break;
                      g = (m = g).parentNode;
                    }
                    m = y;
                  }
                  u = -1 === d || -1 === p ? null : { start: d, end: p };
                } else u = null;
              u = u || { start: 0, end: 0 };
            } else u = null;
            (Br = { focusedElem: l, selectionRange: u }),
              (Xt = !1),
              (cu = null),
              (fu = !1),
              (Xl = r);
            do {
              try {
                Nu();
              } catch (P) {
                if (null === Xl) throw Error(i(330));
                Iu(Xl, P), (Xl = Xl.nextEffect);
              }
            } while (null !== Xl);
            (cu = null), (Xl = r);
            do {
              try {
                for (l = e; null !== Xl; ) {
                  var b = Xl.flags;
                  if ((16 & b && ye(Xl.stateNode, ''), 128 & b)) {
                    var w = Xl.alternate;
                    if (null !== w) {
                      var x = w.ref;
                      null !== x &&
                        ('function' === typeof x
                          ? x(null)
                          : (x.current = null));
                    }
                  }
                  switch (1038 & b) {
                    case 2:
                      El(Xl), (Xl.flags &= -3);
                      break;
                    case 6:
                      El(Xl), (Xl.flags &= -3), Pl(Xl.alternate, Xl);
                      break;
                    case 1024:
                      Xl.flags &= -1025;
                      break;
                    case 1028:
                      (Xl.flags &= -1025), Pl(Xl.alternate, Xl);
                      break;
                    case 4:
                      Pl(Xl.alternate, Xl);
                      break;
                    case 8:
                      Cl(l, (u = Xl));
                      var E = u.alternate;
                      wl(u), null !== E && wl(E);
                  }
                  Xl = Xl.nextEffect;
                }
              } catch (P) {
                if (null === Xl) throw Error(i(330));
                Iu(Xl, P), (Xl = Xl.nextEffect);
              }
            } while (null !== Xl);
            if (
              ((x = Br),
              (w = mr()),
              (b = x.focusedElem),
              (l = x.selectionRange),
              w !== b &&
                b &&
                b.ownerDocument &&
                hr(b.ownerDocument.documentElement, b))
            ) {
              null !== l &&
                gr(b) &&
                ((w = l.start),
                void 0 === (x = l.end) && (x = w),
                'selectionStart' in b
                  ? ((b.selectionStart = w),
                    (b.selectionEnd = Math.min(x, b.value.length)))
                  : (x =
                      ((w = b.ownerDocument || document) && w.defaultView) ||
                      window).getSelection &&
                    ((x = x.getSelection()),
                    (u = b.textContent.length),
                    (E = Math.min(l.start, u)),
                    (l = void 0 === l.end ? E : Math.min(l.end, u)),
                    !x.extend && E > l && ((u = l), (l = E), (E = u)),
                    (u = vr(b, E)),
                    (a = vr(b, l)),
                    u &&
                      a &&
                      (1 !== x.rangeCount ||
                        x.anchorNode !== u.node ||
                        x.anchorOffset !== u.offset ||
                        x.focusNode !== a.node ||
                        x.focusOffset !== a.offset) &&
                      ((w = w.createRange()).setStart(u.node, u.offset),
                      x.removeAllRanges(),
                      E > l
                        ? (x.addRange(w), x.extend(a.node, a.offset))
                        : (w.setEnd(a.node, a.offset), x.addRange(w))))),
                (w = []);
              for (x = b; (x = x.parentNode); )
                1 === x.nodeType &&
                  w.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
              for (
                'function' === typeof b.focus && b.focus(), b = 0;
                b < w.length;
                b++
              )
                ((x = w[b]).element.scrollLeft = x.left),
                  (x.element.scrollTop = x.top);
            }
            (Xt = !!Ur), (Br = Ur = null), (e.current = n), (Xl = r);
            do {
              try {
                for (b = e; null !== Xl; ) {
                  var k = Xl.flags;
                  if ((36 & k && gl(b, Xl.alternate, Xl), 128 & k)) {
                    w = void 0;
                    var S = Xl.ref;
                    if (null !== S) {
                      var C = Xl.stateNode;
                      Xl.tag,
                        (w = C),
                        'function' === typeof S ? S(w) : (S.current = w);
                    }
                  }
                  Xl = Xl.nextEffect;
                }
              } catch (P) {
                if (null === Xl) throw Error(i(330));
                Iu(Xl, P), (Xl = Xl.nextEffect);
              }
            } while (null !== Xl);
            (Xl = null), zo(), (Al = o);
          } else e.current = n;
          if (Jl) (Jl = !1), (eu = e), (tu = t);
          else
            for (Xl = r; null !== Xl; )
              (t = Xl.nextEffect),
                (Xl.nextEffect = null),
                8 & Xl.flags &&
                  (((k = Xl).sibling = null), (k.stateNode = null)),
                (Xl = t);
          if (
            (0 === (r = e.pendingLanes) && (Zl = null),
            1 === r ? (e === iu ? au++ : ((au = 0), (iu = e))) : (au = 0),
            (n = n.stateNode),
            Co && 'function' === typeof Co.onCommitFiberRoot)
          )
            try {
              Co.onCommitFiberRoot(
                So,
                n,
                void 0,
                64 === (64 & n.current.flags)
              );
            } catch (P) {}
          if ((mu(e, Ho()), Kl)) throw ((Kl = !1), (e = Gl), (Gl = null), e);
          return 0 !== (8 & Al) || Xo(), null;
        }
        function Nu() {
          for (; null !== Xl; ) {
            var e = Xl.alternate;
            fu ||
              null === cu ||
              (0 !== (8 & Xl.flags)
                ? et(Xl, cu) && (fu = !0)
                : 13 === Xl.tag && _l(e, Xl) && et(Xl, cu) && (fu = !0));
            var t = Xl.flags;
            0 !== (256 & t) && ml(e, Xl),
              0 === (512 & t) ||
                Jl ||
                ((Jl = !0),
                Yo(97, function () {
                  return Vu(), null;
                })),
              (Xl = Xl.nextEffect);
          }
        }
        function Vu() {
          if (90 !== tu) {
            var e = 97 < tu ? 97 : tu;
            return (tu = 90), Qo(e, Fu);
          }
          return !1;
        }
        function Du(e, t) {
          nu.push(t, e),
            Jl ||
              ((Jl = !0),
              Yo(97, function () {
                return Vu(), null;
              }));
        }
        function ju(e, t) {
          ru.push(t, e),
            Jl ||
              ((Jl = !0),
              Yo(97, function () {
                return Vu(), null;
              }));
        }
        function Fu() {
          if (null === eu) return !1;
          var e = eu;
          if (((eu = null), 0 !== (48 & Al))) throw Error(i(331));
          var t = Al;
          Al |= 32;
          var n = ru;
          ru = [];
          for (var r = 0; r < n.length; r += 2) {
            var o = n[r],
              a = n[r + 1],
              l = o.destroy;
            if (((o.destroy = void 0), 'function' === typeof l))
              try {
                l();
              } catch (s) {
                if (null === a) throw Error(i(330));
                Iu(a, s);
              }
          }
          for (n = nu, nu = [], r = 0; r < n.length; r += 2) {
            (o = n[r]), (a = n[r + 1]);
            try {
              var u = o.create;
              o.destroy = u();
            } catch (s) {
              if (null === a) throw Error(i(330));
              Iu(a, s);
            }
          }
          for (u = e.current.firstEffect; null !== u; )
            (e = u.nextEffect),
              (u.nextEffect = null),
              8 & u.flags && ((u.sibling = null), (u.stateNode = null)),
              (u = e);
          return (Al = t), Xo(), !0;
        }
        function zu(e, t, n) {
          da(e, (t = dl(0, (t = sl(n, t)), 1))),
            (t = du()),
            null !== (e = hu(e, 1)) && (Wt(e, 1, t), mu(e, t));
        }
        function Iu(e, t) {
          if (3 === e.tag) zu(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                zu(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  'function' === typeof n.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch &&
                    (null === Zl || !Zl.has(r)))
                ) {
                  var o = pl(n, (e = sl(t, e)), 1);
                  if ((da(n, o), (o = du()), null !== (n = hu(n, 1))))
                    Wt(n, 1, o), mu(n, o);
                  else if (
                    'function' === typeof r.componentDidCatch &&
                    (null === Zl || !Zl.has(r))
                  )
                    try {
                      r.componentDidCatch(t, e);
                    } catch (a) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Uu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = du()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Rl === e &&
              (Vl & n) === n &&
              (4 === Fl ||
              (3 === Fl && (62914560 & Vl) === Vl && 500 > Ho() - $l)
                ? Su(e, 0)
                : (Wl |= n)),
            mu(e, t);
        }
        function Bu(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 === (t = 0) &&
              (0 === (2 & (t = e.mode))
                ? (t = 1)
                : 0 === (4 & t)
                ? (t = 99 === $o() ? 1 : 2)
                : (0 === uu && (uu = Il),
                  0 === (t = Ut(62914560 & ~uu)) && (t = 4194304))),
            (n = du()),
            null !== (e = hu(e, t)) && (Wt(e, t, n), mu(e, n));
        }
        function Wu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Hu(e, t, n, r) {
          return new Wu(e, t, n, r);
        }
        function $u(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function qu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Hu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Qu(e, t, n, r, o, a) {
          var l = 2;
          if (((r = e), 'function' === typeof e)) $u(e) && (l = 1);
          else if ('string' === typeof e) l = 5;
          else
            e: switch (e) {
              case S:
                return Yu(n.children, o, a, t);
              case D:
                (l = 8), (o |= 16);
                break;
              case C:
                (l = 8), (o |= 1);
                break;
              case P:
                return (
                  ((e = Hu(12, n, t, 8 | o)).elementType = P),
                  (e.type = P),
                  (e.lanes = a),
                  e
                );
              case L:
                return (
                  ((e = Hu(13, n, t, o)).type = L),
                  (e.elementType = L),
                  (e.lanes = a),
                  e
                );
              case M:
                return (
                  ((e = Hu(19, n, t, o)).elementType = M), (e.lanes = a), e
                );
              case j:
                return Xu(n, o, a, t);
              case F:
                return (
                  ((e = Hu(24, n, t, o)).elementType = F), (e.lanes = a), e
                );
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case T:
                      l = 10;
                      break e;
                    case _:
                      l = 9;
                      break e;
                    case O:
                      l = 11;
                      break e;
                    case A:
                      l = 14;
                      break e;
                    case R:
                      (l = 16), (r = null);
                      break e;
                    case N:
                      l = 22;
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ''));
            }
          return (
            ((t = Hu(l, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function Yu(e, t, n, r) {
          return ((e = Hu(7, e, r, t)).lanes = n), e;
        }
        function Xu(e, t, n, r) {
          return ((e = Hu(23, e, r, t)).elementType = j), (e.lanes = n), e;
        }
        function Ku(e, t, n) {
          return ((e = Hu(6, e, null, t)).lanes = n), e;
        }
        function Gu(e, t, n) {
          return (
            ((t = Hu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Zu(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Bt(0)),
            (this.expirationTimes = Bt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Bt(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Ju(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: k,
            key: null == r ? null : '' + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function es(e, t, n, r) {
          var o = t.current,
            a = du(),
            l = pu(o);
          e: if (n) {
            t: {
              if (Ke((n = n._reactInternals)) !== n || 1 !== n.tag)
                throw Error(i(170));
              var u = n;
              do {
                switch (u.tag) {
                  case 3:
                    u = u.stateNode.context;
                    break t;
                  case 1:
                    if (yo(u.type)) {
                      u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                u = u.return;
              } while (null !== u);
              throw Error(i(171));
            }
            if (1 === n.tag) {
              var s = n.type;
              if (yo(s)) {
                n = xo(n, s, u);
                break e;
              }
            }
            n = u;
          } else n = po;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = fa(a, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            da(o, t),
            vu(o, l, a),
            l
          );
        }
        function ts(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function ns(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function rs(e, t) {
          ns(e, t), (e = e.alternate) && ns(e, t);
        }
        function os(e, t, n) {
          var r =
            (null != n &&
              null != n.hydrationOptions &&
              n.hydrationOptions.mutableSources) ||
            null;
          if (
            ((n = new Zu(e, t, null != n && !0 === n.hydrate)),
            (t = Hu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            sa(t),
            (e[eo] = n.current),
            Ar(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var o = (t = r[e])._getVersion;
              (o = o(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, o])
                  : n.mutableSourceEagerHydrationData.push(t, o);
            }
          this._internalRoot = n;
        }
        function as(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                ' react-mount-point-unstable ' !== e.nodeValue))
          );
        }
        function is(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a._internalRoot;
            if ('function' === typeof o) {
              var l = o;
              o = function () {
                var e = ts(i);
                l.call(e);
              };
            }
            es(t, i, e, o);
          } else {
            if (
              ((a = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute('data-reactroot')
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new os(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (i = a._internalRoot),
              'function' === typeof o)
            ) {
              var u = o;
              o = function () {
                var e = ts(i);
                u.call(e);
              };
            }
            xu(function () {
              es(t, i, e, o);
            });
          }
          return ts(i);
        }
        function ls(e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!as(t)) throw Error(i(200));
          return Ju(e, t, null, n);
        }
        (Yl = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || ho.current) ji = !0;
            else {
              if (0 === (n & r)) {
                switch (((ji = !1), t.tag)) {
                  case 3:
                    Qi(t), Ya();
                    break;
                  case 5:
                    Da(t);
                    break;
                  case 1:
                    yo(t.type) && Eo(t);
                    break;
                  case 4:
                    Na(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var o = t.type._context;
                    fo(Jo, o._currentValue), (o._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 !== (n & t.child.childLanes)
                        ? Zi(e, t, n)
                        : (fo(Fa, 1 & Fa.current),
                          null !== (t = al(e, t, n)) ? t.sibling : null);
                    fo(Fa, 1 & Fa.current);
                    break;
                  case 19:
                    if (
                      ((r = 0 !== (n & t.childLanes)), 0 !== (64 & e.flags))
                    ) {
                      if (r) return ol(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (o = t.memoizedState) &&
                        ((o.rendering = null),
                        (o.tail = null),
                        (o.lastEffect = null)),
                      fo(Fa, Fa.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Bi(e, t, n);
                }
                return al(e, t, n);
              }
              ji = 0 !== (16384 & e.flags);
            }
          else ji = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (o = go(t, vo.current)),
                ia(t, n),
                (o = li(null, t, r, e, o, n)),
                (t.flags |= 1),
                'object' === typeof o &&
                  null !== o &&
                  'function' === typeof o.render &&
                  void 0 === o.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  yo(r))
                ) {
                  var a = !0;
                  Eo(t);
                } else a = !1;
                (t.memoizedState =
                  null !== o.state && void 0 !== o.state ? o.state : null),
                  sa(t);
                var l = r.getDerivedStateFromProps;
                'function' === typeof l && ga(t, r, l, e),
                  (o.updater = ya),
                  (t.stateNode = o),
                  (o._reactInternals = t),
                  Ea(t, r, e, n),
                  (t = qi(null, t, r, !0, a, n));
              } else (t.tag = 0), Fi(null, t, o, n), (t = t.child);
              return t;
            case 16:
              o = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (o = (a = o._init)(o._payload)),
                  (t.type = o),
                  (a = t.tag =
                    (function (e) {
                      if ('function' === typeof e) return $u(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === O) return 11;
                        if (e === A) return 14;
                      }
                      return 2;
                    })(o)),
                  (e = Zo(o, e)),
                  a)
                ) {
                  case 0:
                    t = Hi(null, t, o, e, n);
                    break e;
                  case 1:
                    t = $i(null, t, o, e, n);
                    break e;
                  case 11:
                    t = zi(null, t, o, e, n);
                    break e;
                  case 14:
                    t = Ii(null, t, o, Zo(o.type, e), r, n);
                    break e;
                }
                throw Error(i(306, o, ''));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Hi(e, t, r, (o = t.elementType === r ? o : Zo(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                $i(e, t, r, (o = t.elementType === r ? o : Zo(r, o)), n)
              );
            case 3:
              if ((Qi(t), (r = t.updateQueue), null === e || null === r))
                throw Error(i(282));
              if (
                ((r = t.pendingProps),
                (o = null !== (o = t.memoizedState) ? o.element : null),
                ca(e, t),
                va(t, r, null, n),
                (r = t.memoizedState.element) === o)
              )
                Ya(), (t = al(e, t, n));
              else {
                if (
                  ((a = (o = t.stateNode).hydrate) &&
                    ((Ua = Yr(t.stateNode.containerInfo.firstChild)),
                    (Ia = t),
                    (a = Ba = !0)),
                  a)
                ) {
                  if (null != (e = o.mutableSourceEagerHydrationData))
                    for (o = 0; o < e.length; o += 2)
                      ((a = e[o])._workInProgressVersionPrimary = e[o + 1]),
                        Xa.push(a);
                  for (n = _a(t, null, r, n), t.child = n; n; )
                    (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else Fi(e, t, r, n), Ya();
                t = t.child;
              }
              return t;
            case 5:
              return (
                Da(t),
                null === e && $a(t),
                (r = t.type),
                (o = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (l = o.children),
                Hr(r, o)
                  ? (l = null)
                  : null !== a && Hr(r, a) && (t.flags |= 16),
                Wi(e, t),
                Fi(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && $a(t), null;
            case 13:
              return Zi(e, t, n);
            case 4:
              return (
                Na(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ta(t, null, r, n)) : Fi(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                zi(e, t, r, (o = t.elementType === r ? o : Zo(r, o)), n)
              );
            case 7:
              return Fi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Fi(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context),
                  (o = t.pendingProps),
                  (l = t.memoizedProps),
                  (a = o.value);
                var u = t.type._context;
                if (
                  (fo(Jo, u._currentValue), (u._currentValue = a), null !== l)
                )
                  if (
                    ((u = l.value),
                    0 ===
                      (a = cr(u, a)
                        ? 0
                        : 0 |
                          ('function' === typeof r._calculateChangedBits
                            ? r._calculateChangedBits(u, a)
                            : 1073741823)))
                  ) {
                    if (l.children === o.children && !ho.current) {
                      t = al(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (u = t.child) && (u.return = t);
                      null !== u;

                    ) {
                      var s = u.dependencies;
                      if (null !== s) {
                        l = u.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === r && 0 !== (c.observedBits & a)) {
                            1 === u.tag &&
                              (((c = fa(-1, n & -n)).tag = 2), da(u, c)),
                              (u.lanes |= n),
                              null !== (c = u.alternate) && (c.lanes |= n),
                              aa(u.return, n),
                              (s.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else
                        l = 10 === u.tag && u.type === t.type ? null : u.child;
                      if (null !== l) l.return = u;
                      else
                        for (l = u; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (u = l.sibling)) {
                            (u.return = l.return), (l = u);
                            break;
                          }
                          l = l.return;
                        }
                      u = l;
                    }
                Fi(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = (a = t.pendingProps).children),
                ia(t, n),
                (r = r((o = la(o, a.unstable_observedBits)))),
                (t.flags |= 1),
                Fi(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = Zo((o = t.type), t.pendingProps)),
                Ii(e, t, o, (a = Zo(o.type, a)), r, n)
              );
            case 15:
              return Ui(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Zo(r, o)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                yo(r) ? ((e = !0), Eo(t)) : (e = !1),
                ia(t, n),
                wa(t, r, o),
                Ea(t, r, o, n),
                qi(null, t, r, !0, e, n)
              );
            case 19:
              return ol(e, t, n);
            case 23:
            case 24:
              return Bi(e, t, n);
          }
          throw Error(i(156, t.tag));
        }),
          (os.prototype.render = function (e) {
            es(e, this._internalRoot, null, null);
          }),
          (os.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            es(null, e, null, function () {
              t[eo] = null;
            });
          }),
          (tt = function (e) {
            13 === e.tag && (vu(e, 4, du()), rs(e, 4));
          }),
          (nt = function (e) {
            13 === e.tag && (vu(e, 67108864, du()), rs(e, 67108864));
          }),
          (rt = function (e) {
            if (13 === e.tag) {
              var t = du(),
                n = pu(e);
              vu(e, n, t), rs(e, n);
            }
          }),
          (ot = function (e, t) {
            return t();
          }),
          (Te = function (e, t, n) {
            switch (t) {
              case 'input':
                if ((ne(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = ao(r);
                      if (!o) throw Error(i(90));
                      G(r), ne(r, o);
                    }
                  }
                }
                break;
              case 'textarea':
                se(e, n);
                break;
              case 'select':
                null != (t = n.value) && ie(e, !!n.multiple, t, !1);
            }
          }),
          (Re = wu),
          (Ne = function (e, t, n, r, o) {
            var a = Al;
            Al |= 4;
            try {
              return Qo(98, e.bind(null, t, n, r, o));
            } finally {
              0 === (Al = a) && (Ql(), Xo());
            }
          }),
          (Ve = function () {
            0 === (49 & Al) &&
              ((function () {
                if (null !== ou) {
                  var e = ou;
                  (ou = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), mu(e, Ho());
                    });
                }
                Xo();
              })(),
              Vu());
          }),
          (De = function (e, t) {
            var n = Al;
            Al |= 2;
            try {
              return e(t);
            } finally {
              0 === (Al = n) && (Ql(), Xo());
            }
          });
        var us = { Events: [ro, oo, ao, Me, Ae, Vu, { current: !1 }] },
          ss = {
            findFiberByHostInstance: no,
            bundleType: 0,
            version: '17.0.2',
            rendererPackageName: 'react-dom',
          },
          cs = {
            bundleType: ss.bundleType,
            version: ss.version,
            rendererPackageName: ss.rendererPackageName,
            rendererConfig: ss.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Je(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              ss.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!fs.isDisabled && fs.supportsFiber)
            try {
              (So = fs.inject(cs)), (Co = fs);
            } catch (me) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = us),
          (t.createPortal = ls),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ('function' === typeof e.render) throw Error(i(188));
              throw Error(i(268, Object.keys(e)));
            }
            return (e = null === (e = Je(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e, t) {
            var n = Al;
            if (0 !== (48 & n)) return e(t);
            Al |= 1;
            try {
              if (e) return Qo(99, e.bind(null, t));
            } finally {
              (Al = n), Xo();
            }
          }),
          (t.hydrate = function (e, t, n) {
            if (!as(t)) throw Error(i(200));
            return is(null, e, t, !0, n);
          }),
          (t.render = function (e, t, n) {
            if (!as(t)) throw Error(i(200));
            return is(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!as(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (xu(function () {
                is(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[eo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = wu),
          (t.unstable_createPortal = function (e, t) {
            return ls(
              e,
              t,
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null
            );
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!as(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return is(e, t, n, !1, r);
          }),
          (t.version = '17.0.2');
      },
      164: function (e, t, n) {
        'use strict';
        !(function e() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        'use strict';
        n(725);
        var r = n(791),
          o = 60103;
        if (
          ((t.Fragment = 60107), 'function' === typeof Symbol && Symbol.for)
        ) {
          var a = Symbol.for;
          (o = a('react.element')), (t.Fragment = a('react.fragment'));
        }
        var i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = Object.prototype.hasOwnProperty,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            a = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = '' + n),
          void 0 !== t.key && (s = '' + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !u.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: s,
            ref: c,
            props: a,
            _owner: i.current,
          };
        }
        (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t, n) {
        'use strict';
        var r = n(725),
          o = 60103,
          a = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var i = 60109,
          l = 60110,
          u = 60112;
        t.Suspense = 60113;
        var s = 60115,
          c = 60116;
        if ('function' === typeof Symbol && Symbol.for) {
          var f = Symbol.for;
          (o = f('react.element')),
            (a = f('react.portal')),
            (t.Fragment = f('react.fragment')),
            (t.StrictMode = f('react.strict_mode')),
            (t.Profiler = f('react.profiler')),
            (i = f('react.provider')),
            (l = f('react.context')),
            (u = f('react.forward_ref')),
            (t.Suspense = f('react.suspense')),
            (s = f('react.memo')),
            (c = f('react.lazy'));
        }
        var d = 'function' === typeof Symbol && Symbol.iterator;
        function p(e) {
          for (
            var t =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var v = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = {};
        function m(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = h),
            (this.updater = n || v);
        }
        function g() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = h),
            (this.updater = n || v);
        }
        (m.prototype.isReactComponent = {}),
          (m.prototype.setState = function (e, t) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(p(85));
            this.updater.enqueueSetState(this, e, t, 'setState');
          }),
          (m.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (g.prototype = m.prototype);
        var b = (y.prototype = new g());
        (b.constructor = y), r(b, m.prototype), (b.isPureReactComponent = !0);
        var w = { current: null },
          x = Object.prototype.hasOwnProperty,
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function k(e, t, n) {
          var r,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = '' + t.key),
            t))
              x.call(t, r) && !E.hasOwnProperty(r) && (a[r] = t[r]);
          var u = arguments.length - 2;
          if (1 === u) a.children = n;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            a.children = s;
          }
          if (e && e.defaultProps)
            for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
          return {
            $$typeof: o,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: w.current,
          };
        }
        function S(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === o;
        }
        var C = /\/+/g;
        function P(e, t) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })('' + e.key)
            : t.toString(36);
        }
        function T(e, t, n, r, i) {
          var l = typeof e;
          ('undefined' !== l && 'boolean' !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case 'string':
              case 'number':
                u = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case o:
                  case a:
                    u = !0;
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = '' === r ? '.' + P(u, 0) : r),
              Array.isArray(i)
                ? ((n = ''),
                  null != e && (n = e.replace(C, '$&/') + '/'),
                  T(i, t, n, '', function (e) {
                    return e;
                  }))
                : null != i &&
                  (S(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: o,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      n +
                        (!i.key || (u && u.key === i.key)
                          ? ''
                          : ('' + i.key).replace(C, '$&/') + '/') +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((u = 0), (r = '' === r ? '.' : r + ':'), Array.isArray(e)))
            for (var s = 0; s < e.length; s++) {
              var c = r + P((l = e[s]), s);
              u += T(l, t, n, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || 'object' !== typeof e
                ? null
                : 'function' === typeof (e = (d && e[d]) || e['@@iterator'])
                ? e
                : null;
            })(e)),
            'function' === typeof c)
          )
            for (e = c.call(e), s = 0; !(l = e.next()).done; )
              u += T((l = l.value), t, n, (c = r + P(l, s++)), i);
          else if ('object' === l)
            throw (
              ((t = '' + e),
              Error(
                p(
                  31,
                  '[object Object]' === t
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t
                )
              ))
            );
          return u;
        }
        function _(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            T(e, r, '', '', function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function O(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function (t) {
                  0 === e._status &&
                    ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                }
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var L = { current: null };
        function M() {
          var e = L.current;
          if (null === e) throw Error(p(321));
          return e;
        }
        var A = {
          ReactCurrentDispatcher: L,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: w,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: _,
          forEach: function (e, t, n) {
            _(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              _(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              _(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!S(e)) throw Error(p(143));
            return e;
          },
        }),
          (t.Component = m),
          (t.PureComponent = y),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e) throw Error(p(267, e));
            var a = r({}, e.props),
              i = e.key,
              l = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (u = w.current)),
                void 0 !== t.key && (i = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                x.call(t, c) &&
                  !E.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = n;
            else if (1 < c) {
              s = Array(c);
              for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
              a.children = s;
            }
            return {
              $$typeof: o,
              type: e.type,
              key: i,
              ref: l,
              props: a,
              _owner: u,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: l,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = k),
          (t.createFactory = function (e) {
            var t = k.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = S),
          (t.lazy = function (e) {
            return {
              $$typeof: c,
              _payload: { _status: -1, _result: e },
              _init: O,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return M().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return M().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return M().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return M().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return M().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return M().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return M().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return M().useRef(e);
          }),
          (t.useState = function (e) {
            return M().useState(e);
          }),
          (t.version = '17.0.2');
      },
      791: function (e, t, n) {
        'use strict';
        e.exports = n(117);
      },
      184: function (e, t, n) {
        'use strict';
        e.exports = n(374);
      },
      813: function (e, t) {
        'use strict';
        var n, r, o, a;
        if (
          'object' === typeof performance &&
          'function' === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        if (
          'undefined' === typeof window ||
          'function' !== typeof MessageChannel
        ) {
          var s = null,
            c = null,
            f = function e() {
              if (null !== s)
                try {
                  var n = t.unstable_now();
                  s(!0, n), (s = null);
                } catch (r) {
                  throw (setTimeout(e, 0), r);
                }
            };
          (n = function (e) {
            null !== s ? setTimeout(n, 0, e) : ((s = e), setTimeout(f, 0));
          }),
            (r = function (e, t) {
              c = setTimeout(e, t);
            }),
            (o = function () {
              clearTimeout(c);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (a = t.unstable_forceFrameRate = function () {});
        } else {
          var d = window.setTimeout,
            p = window.clearTimeout;
          if ('undefined' !== typeof console) {
            var v = window.cancelAnimationFrame;
            'function' !== typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              ),
              'function' !== typeof v &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                );
          }
          var h = !1,
            m = null,
            g = -1,
            y = 5,
            b = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= b;
          }),
            (a = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                  )
                : (y = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var w = new MessageChannel(),
            x = w.port2;
          (w.port1.onmessage = function () {
            if (null !== m) {
              var e = t.unstable_now();
              b = e + y;
              try {
                m(!0, e) ? x.postMessage(null) : ((h = !1), (m = null));
              } catch (n) {
                throw (x.postMessage(null), n);
              }
            } else h = !1;
          }),
            (n = function (e) {
              (m = e), h || ((h = !0), x.postMessage(null));
            }),
            (r = function (e, n) {
              g = d(function () {
                e(t.unstable_now());
              }, n);
            }),
            (o = function () {
              p(g), (g = -1);
            });
        }
        function E(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(void 0 !== o && 0 < C(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function k(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function S(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, o = e.length; r < o; ) {
                var a = 2 * (r + 1) - 1,
                  i = e[a],
                  l = a + 1,
                  u = e[l];
                if (void 0 !== i && 0 > C(i, n))
                  void 0 !== u && 0 > C(u, i)
                    ? ((e[r] = u), (e[l] = n), (r = l))
                    : ((e[r] = i), (e[a] = n), (r = a));
                else {
                  if (!(void 0 !== u && 0 > C(u, n))) break e;
                  (e[r] = u), (e[l] = n), (r = l);
                }
              }
            }
            return t;
          }
          return null;
        }
        function C(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var P = [],
          T = [],
          _ = 1,
          O = null,
          L = 3,
          M = !1,
          A = !1,
          R = !1;
        function N(e) {
          for (var t = k(T); null !== t; ) {
            if (null === t.callback) S(T);
            else {
              if (!(t.startTime <= e)) break;
              S(T), (t.sortIndex = t.expirationTime), E(P, t);
            }
            t = k(T);
          }
        }
        function V(e) {
          if (((R = !1), N(e), !A))
            if (null !== k(P)) (A = !0), n(D);
            else {
              var t = k(T);
              null !== t && r(V, t.startTime - e);
            }
        }
        function D(e, n) {
          (A = !1), R && ((R = !1), o()), (M = !0);
          var a = L;
          try {
            for (
              N(n), O = k(P);
              null !== O &&
              (!(O.expirationTime > n) || (e && !t.unstable_shouldYield()));

            ) {
              var i = O.callback;
              if ('function' === typeof i) {
                (O.callback = null), (L = O.priorityLevel);
                var l = i(O.expirationTime <= n);
                (n = t.unstable_now()),
                  'function' === typeof l
                    ? (O.callback = l)
                    : O === k(P) && S(P),
                  N(n);
              } else S(P);
              O = k(P);
            }
            if (null !== O) var u = !0;
            else {
              var s = k(T);
              null !== s && r(V, s.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (O = null), (L = a), (M = !1);
          }
        }
        var j = a;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            A || M || ((A = !0), n(D));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return L;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return k(P);
          }),
          (t.unstable_next = function (e) {
            switch (L) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = L;
            }
            var n = L;
            L = t;
            try {
              return e();
            } finally {
              L = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = j),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = L;
            L = e;
            try {
              return t();
            } finally {
              L = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var l = t.unstable_now();
            switch (
              ('object' === typeof i && null !== i
                ? (i = 'number' === typeof (i = i.delay) && 0 < i ? l + i : l)
                : (i = l),
              e)
            ) {
              case 1:
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (e = {
                id: _++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (u = i + u),
                sortIndex: -1,
              }),
              i > l
                ? ((e.sortIndex = i),
                  E(T, e),
                  null === k(P) &&
                    e === k(T) &&
                    (R ? o() : (R = !0), r(V, i - l)))
                : ((e.sortIndex = u), E(P, e), A || M || ((A = !0), n(D))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = L;
            return function () {
              var n = L;
              L = t;
              try {
                return e.apply(this, arguments);
              } finally {
                L = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        'use strict';
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      'use strict';
      var e = n(791),
        t = n(164);
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e, t) {
        if (e) {
          if ('string' === typeof e) return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          );
        }
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var r,
                o,
                a = [],
                i = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(i = (r = n.next()).done) &&
                  (a.push(r.value), !t || a.length !== t);
                  i = !0
                );
              } catch (u) {
                (l = !0), (o = u);
              } finally {
                try {
                  i || null == n.return || n.return();
                } finally {
                  if (l) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          o(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function i() {
        return (
          (i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          i.apply(this, arguments)
        );
      }
      var l,
        u = l || (l = {});
      (u.Pop = 'POP'), (u.Push = 'PUSH'), (u.Replace = 'REPLACE');
      var s = function (e) {
        return e;
      };
      function c(e) {
        e.preventDefault(), (e.returnValue = '');
      }
      function f() {
        var e = [];
        return {
          get length() {
            return e.length;
          },
          push: function (t) {
            return (
              e.push(t),
              function () {
                e = e.filter(function (e) {
                  return e !== t;
                });
              }
            );
          },
          call: function (t) {
            e.forEach(function (e) {
              return e && e(t);
            });
          },
        };
      }
      function d() {
        return Math.random().toString(36).substr(2, 8);
      }
      function p(e) {
        var t = e.pathname;
        t = void 0 === t ? '/' : t;
        var n = e.search;
        return (
          (n = void 0 === n ? '' : n),
          (e = void 0 === (e = e.hash) ? '' : e),
          n && '?' !== n && (t += '?' === n.charAt(0) ? n : '?' + n),
          e && '#' !== e && (t += '#' === e.charAt(0) ? e : '#' + e),
          t
        );
      }
      function v(e) {
        var t = {};
        if (e) {
          var n = e.indexOf('#');
          0 <= n && ((t.hash = e.substr(n)), (e = e.substr(0, n))),
            0 <= (n = e.indexOf('?')) &&
              ((t.search = e.substr(n)), (e = e.substr(0, n))),
            e && (t.pathname = e);
        }
        return t;
      }
      function h(e, t) {
        if (!e) throw new Error(t);
      }
      var m = (0, e.createContext)(null);
      var g = (0, e.createContext)(null);
      var y = (0, e.createContext)({ outlet: null, matches: [] });
      function b(t) {
        return (function (t) {
          var n = (0, e.useContext)(y).outlet;
          if (n) return (0, e.createElement)(T.Provider, { value: t }, n);
          return n;
        })(t.context);
      }
      function w(e) {
        h(!1);
      }
      function x(t) {
        var n = t.basename,
          r = void 0 === n ? '/' : n,
          o = t.children,
          a = void 0 === o ? null : o,
          i = t.location,
          u = t.navigationType,
          s = void 0 === u ? l.Pop : u,
          c = t.navigator,
          f = t.static,
          d = void 0 !== f && f;
        S() && h(!1);
        var p = I(r),
          y = (0, e.useMemo)(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        'string' === typeof i && (i = v(i));
        var b = i,
          w = b.pathname,
          x = void 0 === w ? '/' : w,
          E = b.search,
          k = void 0 === E ? '' : E,
          C = b.hash,
          P = void 0 === C ? '' : C,
          T = b.state,
          _ = void 0 === T ? null : T,
          O = b.key,
          L = void 0 === O ? 'default' : O,
          M = (0, e.useMemo)(
            function () {
              var e = F(x, p);
              return null == e
                ? null
                : { pathname: e, search: k, hash: P, state: _, key: L };
            },
            [p, x, k, P, _, L]
          );
        return null == M
          ? null
          : (0, e.createElement)(
              m.Provider,
              { value: y },
              (0, e.createElement)(g.Provider, {
                children: a,
                value: { location: M, navigationType: s },
              })
            );
      }
      function E(t) {
        var n = t.children,
          r = t.location;
        return (function (t, n) {
          S() || h(!1);
          var r = (0, e.useContext)(y).matches,
            o = r[r.length - 1],
            a = o ? o.params : {},
            i = (o && o.pathname, o ? o.pathnameBase : '/');
          o && o.route;
          0;
          var l,
            u = C();
          if (n) {
            var s,
              c = 'string' === typeof n ? v(n) : n;
            '/' === i ||
              (null == (s = c.pathname) ? void 0 : s.startsWith(i)) ||
              h(!1),
              (l = c);
          } else l = u;
          var f = l.pathname || '/',
            d = '/' === i ? f : f.slice(i.length) || '/',
            p = (function (e, t, n) {
              void 0 === n && (n = '/');
              var r = F(('string' === typeof t ? v(t) : t).pathname || '/', n);
              if (null == r) return null;
              var o = L(e);
              !(function (e) {
                e.sort(function (e, t) {
                  return e.score !== t.score
                    ? t.score - e.score
                    : (function (e, t) {
                        var n =
                          e.length === t.length &&
                          e.slice(0, -1).every(function (e, n) {
                            return e === t[n];
                          });
                        return n ? e[e.length - 1] - t[t.length - 1] : 0;
                      })(
                        e.routesMeta.map(function (e) {
                          return e.childrenIndex;
                        }),
                        t.routesMeta.map(function (e) {
                          return e.childrenIndex;
                        })
                      );
                });
              })(o);
              for (var a = null, i = 0; null == a && i < o.length; ++i)
                a = N(o[i], r);
              return a;
            })(t, { pathname: d });
          0;
          return V(
            p &&
              p.map(function (e) {
                return Object.assign({}, e, {
                  params: Object.assign({}, a, e.params),
                  pathname: z([i, e.pathname]),
                  pathnameBase:
                    '/' === e.pathnameBase ? i : z([i, e.pathnameBase]),
                });
              }),
            r
          );
        })(O(n), r);
      }
      function k(t) {
        S() || h(!1);
        var n = (0, e.useContext)(m),
          r = n.basename,
          o = n.navigator,
          a = _(t),
          i = a.hash,
          l = a.pathname,
          u = a.search,
          s = l;
        if ('/' !== r) {
          var c = (function (e) {
              return '' === e || '' === e.pathname
                ? '/'
                : 'string' === typeof e
                ? v(e).pathname
                : e.pathname;
            })(t),
            f = null != c && c.endsWith('/');
          s = '/' === l ? r + (f ? '/' : '') : z([r, l]);
        }
        return o.createHref({ pathname: s, search: u, hash: i });
      }
      function S() {
        return null != (0, e.useContext)(g);
      }
      function C() {
        return S() || h(!1), (0, e.useContext)(g).location;
      }
      function P() {
        S() || h(!1);
        var t = (0, e.useContext)(m),
          n = t.basename,
          r = t.navigator,
          o = (0, e.useContext)(y).matches,
          a = C().pathname,
          i = JSON.stringify(
            o.map(function (e) {
              return e.pathnameBase;
            })
          ),
          l = (0, e.useRef)(!1);
        return (
          (0, e.useEffect)(function () {
            l.current = !0;
          }),
          (0, e.useCallback)(
            function (e, t) {
              if ((void 0 === t && (t = {}), l.current))
                if ('number' !== typeof e) {
                  var o = j(e, JSON.parse(i), a);
                  '/' !== n && (o.pathname = z([n, o.pathname])),
                    (t.replace ? r.replace : r.push)(o, t.state);
                } else r.go(e);
            },
            [n, r, i, a]
          )
        );
      }
      var T = (0, e.createContext)(null);
      function _(t) {
        var n = (0, e.useContext)(y).matches,
          r = C().pathname,
          o = JSON.stringify(
            n.map(function (e) {
              return e.pathnameBase;
            })
          );
        return (0, e.useMemo)(
          function () {
            return j(t, JSON.parse(o), r);
          },
          [t, o, r]
        );
      }
      function O(t) {
        var n = [];
        return (
          e.Children.forEach(t, function (t) {
            if ((0, e.isValidElement)(t))
              if (t.type !== e.Fragment) {
                t.type !== w && h(!1);
                var r = {
                  caseSensitive: t.props.caseSensitive,
                  element: t.props.element,
                  index: t.props.index,
                  path: t.props.path,
                };
                t.props.children && (r.children = O(t.props.children)),
                  n.push(r);
              } else n.push.apply(n, O(t.props.children));
          }),
          n
        );
      }
      function L(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ''),
          e.forEach(function (e, o) {
            var a = {
              relativePath: e.path || '',
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: o,
              route: e,
            };
            a.relativePath.startsWith('/') &&
              (a.relativePath.startsWith(r) || h(!1),
              (a.relativePath = a.relativePath.slice(r.length)));
            var i = z([r, a.relativePath]),
              l = n.concat(a);
            e.children &&
              e.children.length > 0 &&
              (!0 === e.index && h(!1), L(e.children, t, l, i)),
              (null != e.path || e.index) &&
                t.push({ path: i, score: R(i, e.index), routesMeta: l });
          }),
          t
        );
      }
      var M = /^:\w+$/,
        A = function (e) {
          return '*' === e;
        };
      function R(e, t) {
        var n = e.split('/'),
          r = n.length;
        return (
          n.some(A) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !A(e);
            })
            .reduce(function (e, t) {
              return e + (M.test(t) ? 3 : '' === t ? 1 : 10);
            }, r)
        );
      }
      function N(e, t) {
        for (
          var n = e.routesMeta, r = {}, o = '/', a = [], i = 0;
          i < n.length;
          ++i
        ) {
          var l = n[i],
            u = i === n.length - 1,
            s = '/' === o ? t : t.slice(o.length) || '/',
            c = D(
              { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
              s
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = l.route;
          a.push({
            params: r,
            pathname: z([o, c.pathname]),
            pathnameBase: z([o, c.pathnameBase]),
            route: f,
          }),
            '/' !== c.pathnameBase && (o = z([o, c.pathnameBase]));
        }
        return a;
      }
      function V(t, n) {
        return (
          void 0 === n && (n = []),
          null == t
            ? null
            : t.reduceRight(function (r, o, a) {
                return (0,
                e.createElement)(y.Provider, { children: void 0 !== o.route.element ? o.route.element : (0, e.createElement)(b, null), value: { outlet: r, matches: n.concat(t.slice(0, a + 1)) } });
              }, null)
        );
      }
      function D(e, t) {
        'string' === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            var r = [],
              o =
                '^' +
                e
                  .replace(/\/*\*?$/, '')
                  .replace(/^\/*/, '/')
                  .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
                  .replace(/:(\w+)/g, function (e, t) {
                    return r.push(t), '([^\\/]+)';
                  });
            e.endsWith('*')
              ? (r.push('*'),
                (o += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : (o += n ? '\\/*$' : '(?:\\b|\\/|$)');
            return [new RegExp(o, t ? void 0 : 'i'), r];
          })(e.path, e.caseSensitive, e.end),
          r = a(n, 2),
          o = r[0],
          i = r[1],
          l = t.match(o);
        if (!l) return null;
        var u = l[0],
          s = u.replace(/(.)\/+$/, '$1'),
          c = l.slice(1);
        return {
          params: i.reduce(function (e, t, n) {
            if ('*' === t) {
              var r = c[n] || '';
              s = u.slice(0, u.length - r.length).replace(/(.)\/+$/, '$1');
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return e;
                }
              })(c[n] || '')),
              e
            );
          }, {}),
          pathname: u,
          pathnameBase: s,
          pattern: e,
        };
      }
      function j(e, t, n) {
        var r,
          o = 'string' === typeof e ? v(e) : e,
          a = '' === e || '' === o.pathname ? '/' : o.pathname;
        if (null == a) r = n;
        else {
          var i = t.length - 1;
          if (a.startsWith('..')) {
            for (var l = a.split('/'); '..' === l[0]; ) l.shift(), (i -= 1);
            o.pathname = l.join('/');
          }
          r = i >= 0 ? t[i] : '/';
        }
        var u = (function (e, t) {
          void 0 === t && (t = '/');
          var n = 'string' === typeof e ? v(e) : e,
            r = n.pathname,
            o = n.search,
            a = void 0 === o ? '' : o,
            i = n.hash,
            l = void 0 === i ? '' : i,
            u = r
              ? r.startsWith('/')
                ? r
                : (function (e, t) {
                    var n = t.replace(/\/+$/, '').split('/');
                    return (
                      e.split('/').forEach(function (e) {
                        '..' === e
                          ? n.length > 1 && n.pop()
                          : '.' !== e && n.push(e);
                      }),
                      n.length > 1 ? n.join('/') : '/'
                    );
                  })(r, t)
              : t;
          return { pathname: u, search: U(a), hash: B(l) };
        })(o, r);
        return (
          a &&
            '/' !== a &&
            a.endsWith('/') &&
            !u.pathname.endsWith('/') &&
            (u.pathname += '/'),
          u
        );
      }
      function F(e, t) {
        if ('/' === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = e.charAt(t.length);
        return n && '/' !== n ? null : e.slice(t.length) || '/';
      }
      var z = function (e) {
          return e.join('/').replace(/\/\/+/g, '/');
        },
        I = function (e) {
          return e.replace(/\/+$/, '').replace(/^\/*/, '/');
        },
        U = function (e) {
          return e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : '';
        },
        B = function (e) {
          return e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '';
        };
      function W() {
        return (
          (W =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          W.apply(this, arguments)
        );
      }
      function H(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      var $ = ['onClick', 'reloadDocument', 'replace', 'state', 'target', 'to'];
      function q(t) {
        var n = t.basename,
          r = t.children,
          o = t.window,
          u = (0, e.useRef)();
        null == u.current &&
          (u.current = (function (e) {
            function t() {
              var e = u.location,
                t = h.state || {};
              return [
                t.idx,
                s({
                  pathname: e.pathname,
                  search: e.search,
                  hash: e.hash,
                  state: t.usr || null,
                  key: t.key || 'default',
                }),
              ];
            }
            function n(e) {
              return 'string' === typeof e ? e : p(e);
            }
            function r(e, t) {
              return (
                void 0 === t && (t = null),
                s(
                  i(
                    { pathname: b.pathname, hash: '', search: '' },
                    'string' === typeof e ? v(e) : e,
                    { state: t, key: d() }
                  )
                )
              );
            }
            function o(e) {
              (g = e),
                (e = t()),
                (y = e[0]),
                (b = e[1]),
                w.call({ action: g, location: b });
            }
            function a(e) {
              h.go(e);
            }
            void 0 === e && (e = {});
            var u = void 0 === (e = e.window) ? document.defaultView : e,
              h = u.history,
              m = null;
            u.addEventListener('popstate', function () {
              if (m) x.call(m), (m = null);
              else {
                var e = l.Pop,
                  n = t(),
                  r = n[0];
                if (((n = n[1]), x.length)) {
                  if (null != r) {
                    var i = y - r;
                    i &&
                      ((m = {
                        action: e,
                        location: n,
                        retry: function () {
                          a(-1 * i);
                        },
                      }),
                      a(i));
                  }
                } else o(e);
              }
            });
            var g = l.Pop,
              y = (e = t())[0],
              b = e[1],
              w = f(),
              x = f();
            return (
              null == y &&
                ((y = 0), h.replaceState(i({}, h.state, { idx: y }), '')),
              {
                get action() {
                  return g;
                },
                get location() {
                  return b;
                },
                createHref: n,
                push: function e(t, a) {
                  var i = l.Push,
                    s = r(t, a);
                  if (
                    !x.length ||
                    (x.call({
                      action: i,
                      location: s,
                      retry: function () {
                        e(t, a);
                      },
                    }),
                    0)
                  ) {
                    var c = [{ usr: s.state, key: s.key, idx: y + 1 }, n(s)];
                    (s = c[0]), (c = c[1]);
                    try {
                      h.pushState(s, '', c);
                    } catch (f) {
                      u.location.assign(c);
                    }
                    o(i);
                  }
                },
                replace: function e(t, a) {
                  var i = l.Replace,
                    u = r(t, a);
                  (x.length &&
                    (x.call({
                      action: i,
                      location: u,
                      retry: function () {
                        e(t, a);
                      },
                    }),
                    1)) ||
                    ((u = [{ usr: u.state, key: u.key, idx: y }, n(u)]),
                    h.replaceState(u[0], '', u[1]),
                    o(i));
                },
                go: a,
                back: function () {
                  a(-1);
                },
                forward: function () {
                  a(1);
                },
                listen: function (e) {
                  return w.push(e);
                },
                block: function (e) {
                  var t = x.push(e);
                  return (
                    1 === x.length && u.addEventListener('beforeunload', c),
                    function () {
                      t(), x.length || u.removeEventListener('beforeunload', c);
                    }
                  );
                },
              }
            );
          })({ window: o }));
        var h = u.current,
          m = a((0, e.useState)({ action: h.action, location: h.location }), 2),
          g = m[0],
          y = m[1];
        return (
          (0, e.useLayoutEffect)(
            function () {
              return h.listen(y);
            },
            [h]
          ),
          (0, e.createElement)(x, {
            basename: n,
            children: r,
            location: g.location,
            navigationType: g.action,
            navigator: h,
          })
        );
      }
      var Q = (0, e.forwardRef)(function (t, n) {
        var r = t.onClick,
          o = t.reloadDocument,
          a = t.replace,
          i = void 0 !== a && a,
          l = t.state,
          u = t.target,
          s = t.to,
          c = H(t, $),
          f = k(s),
          d = (function (t, n) {
            var r = void 0 === n ? {} : n,
              o = r.target,
              a = r.replace,
              i = r.state,
              l = P(),
              u = C(),
              s = _(t);
            return (0, e.useCallback)(
              function (e) {
                if (
                  0 === e.button &&
                  (!o || '_self' === o) &&
                  !(function (e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                  })(e)
                ) {
                  e.preventDefault();
                  var n = !!a || p(u) === p(s);
                  l(t, { replace: n, state: i });
                }
              },
              [u, l, s, a, i, o, t]
            );
          })(s, { replace: i, state: l, target: u });
        return (0, e.createElement)(
          'a',
          W({}, c, {
            href: f,
            onClick: function (e) {
              r && r(e), e.defaultPrevented || o || d(e);
            },
            ref: n,
            target: u,
          })
        );
      });
      var Y = function (e, t) {
        return (
          (Y =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }),
          Y(e, t)
        );
      };
      function X(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Class extends value ' + String(t) + ' is not a constructor or null'
          );
        function n() {
          this.constructor = e;
        }
        Y(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var K = function () {
        return (
          (K =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          K.apply(this, arguments)
        );
      };
      function G(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      }
      Object.create;
      function Z(e) {
        var t = 'function' === typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && 'number' === typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
        );
      }
      function J(e, t) {
        var n = 'function' === typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          a = n.call(e),
          i = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
            i.push(r.value);
        } catch (l) {
          o = { error: l };
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a);
          } finally {
            if (o) throw o.error;
          }
        }
        return i;
      }
      function ee(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      Object.create;
      var te = (1 / 60) * 1e3,
        ne =
          'undefined' !== typeof performance
            ? function () {
                return performance.now();
              }
            : function () {
                return Date.now();
              },
        re =
          'undefined' !== typeof window
            ? function (e) {
                return window.requestAnimationFrame(e);
              }
            : function (e) {
                return setTimeout(function () {
                  return e(ne());
                }, te);
              };
      var oe = !0,
        ae = !1,
        ie = !1,
        le = { delta: 0, timestamp: 0 },
        ue = ['read', 'update', 'preRender', 'render', 'postRender'],
        se = ue.reduce(function (e, t) {
          return (
            (e[t] = (function (e) {
              var t = [],
                n = [],
                r = 0,
                o = !1,
                a = !1,
                i = new WeakSet(),
                l = {
                  schedule: function (e) {
                    var a =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2] &&
                        o,
                      l = a ? t : n;
                    return (
                      arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1] &&
                        i.add(e),
                      -1 === l.indexOf(e) &&
                        (l.push(e), a && o && (r = t.length)),
                      e
                    );
                  },
                  cancel: function (e) {
                    var t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1), i.delete(e);
                  },
                  process: function (u) {
                    if (o) a = !0;
                    else {
                      o = !0;
                      var s = [n, t];
                      if (((t = s[0]), ((n = s[1]).length = 0), (r = t.length)))
                        for (var c = 0; c < r; c++) {
                          var f = t[c];
                          f(u), i.has(f) && (l.schedule(f), e());
                        }
                      (o = !1), a && ((a = !1), l.process(u));
                    }
                  },
                };
              return l;
            })(function () {
              return (ae = !0);
            })),
            e
          );
        }, {}),
        ce = ue.reduce(function (e, t) {
          var n = se[t];
          return (
            (e[t] = function (e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              return ae || he(), n.schedule(e, t, r);
            }),
            e
          );
        }, {}),
        fe = ue.reduce(function (e, t) {
          return (e[t] = se[t].cancel), e;
        }, {}),
        de = ue.reduce(function (e, t) {
          return (
            (e[t] = function () {
              return se[t].process(le);
            }),
            e
          );
        }, {}),
        pe = function (e) {
          return se[e].process(le);
        },
        ve = function e(t) {
          (ae = !1),
            (le.delta = oe ? te : Math.max(Math.min(t - le.timestamp, 40), 1)),
            (le.timestamp = t),
            (ie = !0),
            ue.forEach(pe),
            (ie = !1),
            ae && ((oe = !1), re(e));
        },
        he = function () {
          (ae = !0), (oe = !0), ie || re(ve);
        },
        me = function () {
          return le;
        },
        ge = ce;
      function ye() {
        var t = (0, e.useRef)(!1);
        return (
          (0, e.useLayoutEffect)(function () {
            return (
              (t.current = !0),
              function () {
                t.current = !1;
              }
            );
          }, []),
          t
        );
      }
      var be = (0, e.createContext)(null);
      function we(t) {
        var n = (0, e.useRef)(null);
        return null === n.current && (n.current = t()), n.current;
      }
      var xe = 0,
        Ee = function () {
          return xe++;
        },
        ke = function () {
          return we(Ee);
        },
        Se = function (t) {
          var n = t.children,
            r = t.initial,
            o = t.isPresent,
            a = t.onExitComplete,
            i = t.custom,
            l = t.presenceAffectsLayout,
            u = we(Ce),
            s = ke(),
            c = (0, e.useMemo)(
              function () {
                return {
                  id: s,
                  initial: r,
                  isPresent: o,
                  custom: i,
                  onExitComplete: function (e) {
                    var t, n;
                    u.set(e, !0);
                    try {
                      for (
                        var r = Z(u.values()), o = r.next();
                        !o.done;
                        o = r.next()
                      ) {
                        if (!o.value) return;
                      }
                    } catch (i) {
                      t = { error: i };
                    } finally {
                      try {
                        o && !o.done && (n = r.return) && n.call(r);
                      } finally {
                        if (t) throw t.error;
                      }
                    }
                    null === a || void 0 === a || a();
                  },
                  register: function (e) {
                    return (
                      u.set(e, !1),
                      function () {
                        return u.delete(e);
                      }
                    );
                  },
                };
              },
              l ? void 0 : [o]
            );
          return (
            (0, e.useMemo)(
              function () {
                u.forEach(function (e, t) {
                  return u.set(t, !1);
                });
              },
              [o]
            ),
            e.useEffect(
              function () {
                !o && !u.size && (null === a || void 0 === a || a());
              },
              [o]
            ),
            e.createElement(be.Provider, { value: c }, n)
          );
        };
      function Ce() {
        return new Map();
      }
      var Pe = (0, e.createContext)({}),
        Te = 'undefined' !== typeof window,
        _e = Te ? e.useLayoutEffect : e.useEffect;
      function Oe(t) {
        return (0, e.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
      var Le = function (e) {
        return e.key || '';
      };
      var Me = function (t) {
          var n = t.children,
            r = t.custom,
            o = t.initial,
            a = void 0 === o || o,
            i = t.onExitComplete,
            l = t.exitBeforeEnter,
            u = t.presenceAffectsLayout,
            s = void 0 === u || u,
            c = J(
              (function () {
                var t = ye(),
                  n = J((0, e.useState)(0), 2),
                  r = n[0],
                  o = n[1],
                  a = (0, e.useCallback)(
                    function () {
                      t.current && o(r + 1);
                    },
                    [r]
                  );
                return [
                  (0, e.useCallback)(
                    function () {
                      return ge.postRender(a);
                    },
                    [a]
                  ),
                  r,
                ];
              })(),
              1
            ),
            f = c[0],
            d = (0, e.useContext)(Pe).forceRender;
          d && (f = d);
          var p = ye(),
            v = (function (t) {
              var n = [];
              return (
                e.Children.forEach(t, function (t) {
                  (0, e.isValidElement)(t) && n.push(t);
                }),
                n
              );
            })(n),
            h = v,
            m = new Set(),
            g = (0, e.useRef)(h),
            y = (0, e.useRef)(new Map()).current,
            b = (0, e.useRef)(!0);
          if (
            (_e(function () {
              (b.current = !1),
                (function (e, t) {
                  e.forEach(function (e) {
                    var n = Le(e);
                    t.set(n, e);
                  });
                })(v, y),
                (g.current = h);
            }),
            Oe(function () {
              (b.current = !0), y.clear(), m.clear();
            }),
            b.current)
          )
            return e.createElement(
              e.Fragment,
              null,
              h.map(function (t) {
                return e.createElement(
                  Se,
                  {
                    key: Le(t),
                    isPresent: !0,
                    initial: !!a && void 0,
                    presenceAffectsLayout: s,
                  },
                  t
                );
              })
            );
          h = ee([], J(h), !1);
          for (
            var w = g.current.map(Le), x = v.map(Le), E = w.length, k = 0;
            k < E;
            k++
          ) {
            var S = w[k];
            -1 === x.indexOf(S) && m.add(S);
          }
          return (
            l && m.size && (h = []),
            m.forEach(function (t) {
              if (-1 === x.indexOf(t)) {
                var n = y.get(t);
                if (n) {
                  var o = w.indexOf(t);
                  h.splice(
                    o,
                    0,
                    e.createElement(
                      Se,
                      {
                        key: Le(n),
                        isPresent: !1,
                        onExitComplete: function () {
                          y.delete(t), m.delete(t);
                          var e = g.current.findIndex(function (e) {
                            return e.key === t;
                          });
                          if ((g.current.splice(e, 1), !m.size)) {
                            if (((g.current = v), !1 === p.current)) return;
                            f(), i && i();
                          }
                        },
                        custom: r,
                        presenceAffectsLayout: s,
                      },
                      n
                    )
                  );
                }
              }
            }),
            (h = h.map(function (t) {
              var n = t.key;
              return m.has(n)
                ? t
                : e.createElement(
                    Se,
                    { key: Le(t), isPresent: !0, presenceAffectsLayout: s },
                    t
                  );
            })),
            e.createElement(
              e.Fragment,
              null,
              m.size
                ? h
                : h.map(function (t) {
                    return (0, e.cloneElement)(t);
                  })
            )
          );
        },
        Ae = function (e) {
          return {
            isEnabled: function (t) {
              return e.some(function (e) {
                return !!t[e];
              });
            },
          };
        },
        Re = {
          measureLayout: Ae(['layout', 'layoutId', 'drag']),
          animation: Ae([
            'animate',
            'exit',
            'variants',
            'whileHover',
            'whileTap',
            'whileFocus',
            'whileDrag',
            'whileInView',
          ]),
          exit: Ae(['exit']),
          drag: Ae(['drag', 'dragControls']),
          focus: Ae(['whileFocus']),
          hover: Ae(['whileHover', 'onHoverStart', 'onHoverEnd']),
          tap: Ae(['whileTap', 'onTap', 'onTapStart', 'onTapCancel']),
          pan: Ae(['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd']),
          inView: Ae(['whileInView', 'onViewportEnter', 'onViewportLeave']),
        };
      var Ne = (0, e.createContext)({ strict: !1 }),
        Ve = Object.keys(Re),
        De = Ve.length;
      var je = (0, e.createContext)({
          transformPagePoint: function (e) {
            return e;
          },
          isStatic: !1,
          reducedMotion: 'never',
        }),
        Fe = (0, e.createContext)({});
      var ze = { current: null },
        Ie = !1;
      function Ue() {
        return (
          !Ie &&
            (function () {
              if (((Ie = !0), 'undefined' !== typeof window))
                if (window.matchMedia) {
                  var e = window.matchMedia('(prefers-reduced-motion)'),
                    t = function () {
                      return (ze.current = e.matches);
                    };
                  e.addListener(t), t();
                } else ze.current = !1;
            })(),
          J((0, e.useState)(ze.current), 1)[0]
        );
      }
      function Be(t, n, r, o) {
        var a = (0, e.useContext)(Ne),
          i = (0, e.useContext)(Fe).visualElement,
          l = (0, e.useContext)(be),
          u = (function () {
            var t = Ue(),
              n = (0, e.useContext)(je).reducedMotion;
            return 'never' !== n && ('always' === n || t);
          })(),
          s = (0, e.useRef)(void 0);
        o || (o = a.renderer),
          !s.current &&
            o &&
            (s.current = o(t, {
              visualState: n,
              parent: i,
              props: r,
              presenceId: null === l || void 0 === l ? void 0 : l.id,
              blockInitialAnimation:
                !1 === (null === l || void 0 === l ? void 0 : l.initial),
              shouldReduceMotion: u,
            }));
        var c = s.current;
        return (
          _e(function () {
            null === c || void 0 === c || c.syncRender();
          }),
          (0, e.useEffect)(function () {
            var e;
            null ===
              (e = null === c || void 0 === c ? void 0 : c.animationState) ||
              void 0 === e ||
              e.animateChanges();
          }),
          _e(function () {
            return function () {
              return null === c || void 0 === c ? void 0 : c.notifyUnmount();
            };
          }, []),
          c
        );
      }
      function We(e) {
        return (
          'object' === typeof e &&
          Object.prototype.hasOwnProperty.call(e, 'current')
        );
      }
      function He(e) {
        return Array.isArray(e);
      }
      function $e(e) {
        return 'string' === typeof e || He(e);
      }
      function qe(e, t, n, r, o) {
        var a;
        return (
          void 0 === r && (r = {}),
          void 0 === o && (o = {}),
          'function' === typeof t &&
            (t = t(null !== n && void 0 !== n ? n : e.custom, r, o)),
          'string' === typeof t &&
            (t = null === (a = e.variants) || void 0 === a ? void 0 : a[t]),
          'function' === typeof t &&
            (t = t(null !== n && void 0 !== n ? n : e.custom, r, o)),
          t
        );
      }
      function Qe(e, t, n) {
        var r = e.getProps();
        return qe(
          r,
          t,
          null !== n && void 0 !== n ? n : r.custom,
          (function (e) {
            var t = {};
            return (
              e.forEachValue(function (e, n) {
                return (t[n] = e.get());
              }),
              t
            );
          })(e),
          (function (e) {
            var t = {};
            return (
              e.forEachValue(function (e, n) {
                return (t[n] = e.getVelocity());
              }),
              t
            );
          })(e)
        );
      }
      function Ye(e) {
        var t;
        return (
          'function' ===
            typeof (null === (t = e.animate) || void 0 === t
              ? void 0
              : t.start) ||
          $e(e.initial) ||
          $e(e.animate) ||
          $e(e.whileHover) ||
          $e(e.whileDrag) ||
          $e(e.whileTap) ||
          $e(e.whileFocus) ||
          $e(e.exit)
        );
      }
      function Xe(e) {
        return Boolean(Ye(e) || e.variants);
      }
      function Ke(t) {
        var n = (function (e, t) {
            if (Ye(e)) {
              var n = e.initial,
                r = e.animate;
              return {
                initial: !1 === n || $e(n) ? n : void 0,
                animate: $e(r) ? r : void 0,
              };
            }
            return !1 !== e.inherit ? t : {};
          })(t, (0, e.useContext)(Fe)),
          r = n.initial,
          o = n.animate;
        return (0, e.useMemo)(
          function () {
            return { initial: r, animate: o };
          },
          [Ge(r), Ge(o)]
        );
      }
      function Ge(e) {
        return Array.isArray(e) ? e.join(' ') : e;
      }
      var Ze = function (e, t, n) {
        return -n * e + n * t + e;
      };
      function Je(e, t) {
        return t ? e * (1e3 / t) : 0;
      }
      function et(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function tt(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var nt = (function () {
          function e() {
            this.subscriptions = [];
          }
          return (
            (e.prototype.add = function (e) {
              var t = this;
              return (
                et(this.subscriptions, e),
                function () {
                  return tt(t.subscriptions, e);
                }
              );
            }),
            (e.prototype.notify = function (e, t, n) {
              var r = this.subscriptions.length;
              if (r)
                if (1 === r) this.subscriptions[0](e, t, n);
                else
                  for (var o = 0; o < r; o++) {
                    var a = this.subscriptions[o];
                    a && a(e, t, n);
                  }
            }),
            (e.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (e.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            e
          );
        })(),
        rt = (function () {
          function e(e) {
            var t,
              n = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new nt()),
              (this.velocityUpdateSubscribers = new nt()),
              (this.renderSubscribers = new nt()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (e, t) {
                void 0 === t && (t = !0), (n.prev = n.current), (n.current = e);
                var r = me(),
                  o = r.delta,
                  a = r.timestamp;
                n.lastUpdated !== a &&
                  ((n.timeDelta = o),
                  (n.lastUpdated = a),
                  ge.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  n.velocityUpdateSubscribers.getSize() &&
                    n.velocityUpdateSubscribers.notify(n.getVelocity()),
                  t && n.renderSubscribers.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return ge.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (e) {
                e.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.velocityUpdateSubscribers.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = e),
              (this.canTrackVelocity =
                ((t = this.current), !isNaN(parseFloat(t))));
          }
          return (
            (e.prototype.onChange = function (e) {
              return this.updateSubscribers.add(e);
            }),
            (e.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (e.prototype.onRenderRequest = function (e) {
              return e(this.get()), this.renderSubscribers.add(e);
            }),
            (e.prototype.attach = function (e) {
              this.passiveEffect = e;
            }),
            (e.prototype.set = function (e, t) {
              void 0 === t && (t = !0),
                t && this.passiveEffect
                  ? this.passiveEffect(e, this.updateAndNotify)
                  : this.updateAndNotify(e, t);
            }),
            (e.prototype.get = function () {
              return this.current;
            }),
            (e.prototype.getPrevious = function () {
              return this.prev;
            }),
            (e.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? Je(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (e.prototype.start = function (e) {
              var t = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (t.hasAnimated = !0), (t.stopAnimation = e(n));
                }).then(function () {
                  return t.clearAnimation();
                })
              );
            }),
            (e.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (e.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (e.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (e.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            e
          );
        })();
      function ot(e) {
        return new rt(e);
      }
      var at = function (e) {
        return Boolean(null !== e && 'object' === typeof e && e.getVelocity);
      };
      var it = function (e, t, n) {
          return Math.min(Math.max(n, e), t);
        },
        lt = 0.001;
      function ut(e) {
        var t,
          n,
          r = e.duration,
          o = void 0 === r ? 800 : r,
          a = e.bounce,
          i = void 0 === a ? 0.25 : a,
          l = e.velocity,
          u = void 0 === l ? 0 : l,
          s = e.mass,
          c = void 0 === s ? 1 : s,
          f = 1 - i;
        (f = it(0.05, 1, f)),
          (o = it(0.01, 10, o / 1e3)),
          f < 1
            ? ((t = function (e) {
                var t = e * f,
                  n = t * o,
                  r = t - u,
                  a = st(e, f),
                  i = Math.exp(-n);
                return lt - (r / a) * i;
              }),
              (n = function (e) {
                var n = e * f * o,
                  r = n * u + u,
                  a = Math.pow(f, 2) * Math.pow(e, 2) * o,
                  i = Math.exp(-n),
                  l = st(Math.pow(e, 2), f);
                return ((-t(e) + lt > 0 ? -1 : 1) * ((r - a) * i)) / l;
              }))
            : ((t = function (e) {
                return Math.exp(-e * o) * ((e - u) * o + 1) - 0.001;
              }),
              (n = function (e) {
                return Math.exp(-e * o) * (o * o * (u - e));
              }));
        var d = (function (e, t, n) {
          for (var r = n, o = 1; o < 12; o++) r -= e(r) / t(r);
          return r;
        })(t, n, 5 / o);
        if (((o *= 1e3), isNaN(d)))
          return { stiffness: 100, damping: 10, duration: o };
        var p = Math.pow(d, 2) * c;
        return { stiffness: p, damping: 2 * f * Math.sqrt(c * p), duration: o };
      }
      function st(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      var ct = ['duration', 'bounce'],
        ft = ['stiffness', 'damping', 'mass'];
      function dt(e, t) {
        return t.some(function (t) {
          return void 0 !== e[t];
        });
      }
      function pt(e) {
        var t = e.from,
          n = void 0 === t ? 0 : t,
          r = e.to,
          o = void 0 === r ? 1 : r,
          a = e.restSpeed,
          i = void 0 === a ? 2 : a,
          l = e.restDelta,
          u = G(e, ['from', 'to', 'restSpeed', 'restDelta']),
          s = { done: !1, value: n },
          c = (function (e) {
            var t = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              e
            );
            if (!dt(e, ft) && dt(e, ct)) {
              var n = ut(e);
              (t = Object.assign(Object.assign(Object.assign({}, t), n), {
                velocity: 0,
                mass: 1,
              })).isResolvedFromDuration = !0;
            }
            return t;
          })(u),
          f = c.stiffness,
          d = c.damping,
          p = c.mass,
          v = c.velocity,
          h = c.duration,
          m = c.isResolvedFromDuration,
          g = vt,
          y = vt;
        function b() {
          var e = v ? -v / 1e3 : 0,
            t = o - n,
            r = d / (2 * Math.sqrt(f * p)),
            a = Math.sqrt(f / p) / 1e3;
          if (
            (void 0 === l && (l = Math.min(Math.abs(o - n) / 100, 0.4)), r < 1)
          ) {
            var i = st(a, r);
            (g = function (n) {
              var l = Math.exp(-r * a * n);
              return (
                o -
                l *
                  (((e + r * a * t) / i) * Math.sin(i * n) +
                    t * Math.cos(i * n))
              );
            }),
              (y = function (n) {
                var o = Math.exp(-r * a * n);
                return (
                  r *
                    a *
                    o *
                    ((Math.sin(i * n) * (e + r * a * t)) / i +
                      t * Math.cos(i * n)) -
                  o *
                    (Math.cos(i * n) * (e + r * a * t) -
                      i * t * Math.sin(i * n))
                );
              });
          } else if (1 === r)
            g = function (n) {
              return o - Math.exp(-a * n) * (t + (e + a * t) * n);
            };
          else {
            var u = a * Math.sqrt(r * r - 1);
            g = function (n) {
              var i = Math.exp(-r * a * n),
                l = Math.min(u * n, 300);
              return (
                o -
                (i * ((e + r * a * t) * Math.sinh(l) + u * t * Math.cosh(l))) /
                  u
              );
            };
          }
        }
        return (
          b(),
          {
            next: function (e) {
              var t = g(e);
              if (m) s.done = e >= h;
              else {
                var n = 1e3 * y(e),
                  r = Math.abs(n) <= i,
                  a = Math.abs(o - t) <= l;
                s.done = r && a;
              }
              return (s.value = s.done ? o : t), s;
            },
            flipTarget: function () {
              v = -v;
              var e = [o, n];
              (n = e[0]), (o = e[1]), b();
            },
          }
        );
      }
      pt.needsInterpolation = function (e, t) {
        return 'string' === typeof e || 'string' === typeof t;
      };
      var vt = function (e) {
          return 0;
        },
        ht = function (e, t, n) {
          var r = t - e;
          return 0 === r ? 1 : (n - e) / r;
        },
        mt = function (e, t) {
          return function (n) {
            return Math.max(Math.min(n, t), e);
          };
        },
        gt = function (e) {
          return e % 1 ? Number(e.toFixed(5)) : e;
        },
        yt = /(-)?([\d]*\.?[\d])+/g,
        bt =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        wt =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function xt(e) {
        return 'string' === typeof e;
      }
      var Et = {
          test: function (e) {
            return 'number' === typeof e;
          },
          parse: parseFloat,
          transform: function (e) {
            return e;
          },
        },
        kt = Object.assign(Object.assign({}, Et), { transform: mt(0, 1) }),
        St = Object.assign(Object.assign({}, Et), { default: 1 });
      function Ct(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Pt = function (e, t) {
          return function (n) {
            return Boolean(
              (xt(n) && wt.test(n) && n.startsWith(e)) ||
                (t && Object.prototype.hasOwnProperty.call(n, t))
            );
          };
        },
        Tt = function (e, t, n) {
          return function (r) {
            var o;
            if (!xt(r)) return r;
            var i = a(r.match(yt), 4),
              l = i[0],
              u = i[1],
              s = i[2],
              c = i[3];
            return (
              Ct((o = {}), e, parseFloat(l)),
              Ct(o, t, parseFloat(u)),
              Ct(o, n, parseFloat(s)),
              Ct(o, 'alpha', void 0 !== c ? parseFloat(c) : 1),
              o
            );
          };
        },
        _t = mt(0, 255),
        Ot = Object.assign(Object.assign({}, Et), {
          transform: function (e) {
            return Math.round(_t(e));
          },
        }),
        Lt = {
          test: Pt('rgb', 'red'),
          parse: Tt('red', 'green', 'blue'),
          transform: function (e) {
            var t = e.red,
              n = e.green,
              r = e.blue,
              o = e.alpha,
              a = void 0 === o ? 1 : o;
            return (
              'rgba(' +
              Ot.transform(t) +
              ', ' +
              Ot.transform(n) +
              ', ' +
              Ot.transform(r) +
              ', ' +
              gt(kt.transform(a)) +
              ')'
            );
          },
        };
      var Mt = {
          test: Pt('#'),
          parse: function (e) {
            var t = '',
              n = '',
              r = '',
              o = '';
            return (
              e.length > 5
                ? ((t = e.substr(1, 2)),
                  (n = e.substr(3, 2)),
                  (r = e.substr(5, 2)),
                  (o = e.substr(7, 2)))
                : ((t = e.substr(1, 1)),
                  (n = e.substr(2, 1)),
                  (r = e.substr(3, 1)),
                  (o = e.substr(4, 1)),
                  (t += t),
                  (n += n),
                  (r += r),
                  (o += o)),
              {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: o ? parseInt(o, 16) / 255 : 1,
              }
            );
          },
          transform: Lt.transform,
        },
        At = function (e) {
          return {
            test: function (t) {
              return xt(t) && t.endsWith(e) && 1 === t.split(' ').length;
            },
            parse: parseFloat,
            transform: function (t) {
              return ''.concat(t).concat(e);
            },
          };
        },
        Rt = At('deg'),
        Nt = At('%'),
        Vt = At('px'),
        Dt = At('vh'),
        jt = At('vw'),
        Ft = Object.assign(Object.assign({}, Nt), {
          parse: function (e) {
            return Nt.parse(e) / 100;
          },
          transform: function (e) {
            return Nt.transform(100 * e);
          },
        }),
        zt = {
          test: Pt('hsl', 'hue'),
          parse: Tt('hue', 'saturation', 'lightness'),
          transform: function (e) {
            var t = e.hue,
              n = e.saturation,
              r = e.lightness,
              o = e.alpha,
              a = void 0 === o ? 1 : o;
            return (
              'hsla(' +
              Math.round(t) +
              ', ' +
              Nt.transform(gt(n)) +
              ', ' +
              Nt.transform(gt(r)) +
              ', ' +
              gt(kt.transform(a)) +
              ')'
            );
          },
        };
      function It(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
            ? t
            : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e
        );
      }
      function Ut(e) {
        var t = e.hue,
          n = e.saturation,
          r = e.lightness,
          o = e.alpha;
        (t /= 360), (r /= 100);
        var a = 0,
          i = 0,
          l = 0;
        if ((n /= 100)) {
          var u = r < 0.5 ? r * (1 + n) : r + n - r * n,
            s = 2 * r - u;
          (a = It(s, u, t + 1 / 3)),
            (i = It(s, u, t)),
            (l = It(s, u, t - 1 / 3));
        } else a = i = l = r;
        return {
          red: Math.round(255 * a),
          green: Math.round(255 * i),
          blue: Math.round(255 * l),
          alpha: o,
        };
      }
      var Bt = function (e, t, n) {
          var r = e * e,
            o = t * t;
          return Math.sqrt(Math.max(0, n * (o - r) + r));
        },
        Wt = [Mt, Lt, zt],
        Ht = function (e) {
          return Wt.find(function (t) {
            return t.test(e);
          });
        },
        $t = function (e) {
          return "'".concat(
            e,
            "' is not an animatable color. Use the equivalent color code instead."
          );
        },
        qt = function (e, t) {
          var n = Ht(e),
            r = Ht(t);
          $t(e), $t(t);
          var o = n.parse(e),
            a = r.parse(t);
          n === zt && ((o = Ut(o)), (n = Lt)),
            r === zt && ((a = Ut(a)), (r = Lt));
          var i = Object.assign({}, o);
          return function (e) {
            for (var t in i) 'alpha' !== t && (i[t] = Bt(o[t], a[t], e));
            return (i.alpha = Ze(o.alpha, a.alpha, e)), n.transform(i);
          };
        };
      function Qt(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return r(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          o(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      var Yt = {
          test: function (e) {
            return Lt.test(e) || Mt.test(e) || zt.test(e);
          },
          parse: function (e) {
            return Lt.test(e)
              ? Lt.parse(e)
              : zt.test(e)
              ? zt.parse(e)
              : Mt.parse(e);
          },
          transform: function (e) {
            return xt(e)
              ? e
              : e.hasOwnProperty('red')
              ? Lt.transform(e)
              : zt.transform(e);
          },
        },
        Xt = '${c}',
        Kt = '${n}';
      function Gt(e) {
        'number' === typeof e && (e = ''.concat(e));
        var t = [],
          n = 0,
          r = e.match(bt);
        r &&
          ((n = r.length),
          (e = e.replace(bt, Xt)),
          t.push.apply(t, Qt(r.map(Yt.parse))));
        var o = e.match(yt);
        return (
          o && ((e = e.replace(yt, Kt)), t.push.apply(t, Qt(o.map(Et.parse)))),
          { values: t, numColors: n, tokenised: e }
        );
      }
      function Zt(e) {
        return Gt(e).values;
      }
      function Jt(e) {
        var t = Gt(e),
          n = t.values,
          r = t.numColors,
          o = t.tokenised,
          a = n.length;
        return function (e) {
          for (var t = o, n = 0; n < a; n++)
            t = t.replace(
              n < r ? Xt : Kt,
              n < r ? Yt.transform(e[n]) : gt(e[n])
            );
          return t;
        };
      }
      var en = function (e) {
        return 'number' === typeof e ? 0 : e;
      };
      var tn = {
          test: function (e) {
            var t, n, r, o;
            return (
              isNaN(e) &&
              xt(e) &&
              (null !==
                (n =
                  null === (t = e.match(yt)) || void 0 === t
                    ? void 0
                    : t.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (o =
                    null === (r = e.match(bt)) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== o
                  ? o
                  : 0) >
                0
            );
          },
          parse: Zt,
          createTransformer: Jt,
          getAnimatableNone: function (e) {
            var t = Zt(e);
            return Jt(e)(t.map(en));
          },
        },
        nn = function (e) {
          return 'number' === typeof e;
        },
        rn = function (e, t) {
          return function (n) {
            return t(e(n));
          };
        },
        on = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(rn);
        };
      function an(e, t) {
        return nn(e)
          ? function (n) {
              return Ze(e, t, n);
            }
          : Yt.test(e)
          ? qt(e, t)
          : cn(e, t);
      }
      var ln = function (e, t) {
          var n = Qt(e),
            r = n.length,
            o = e.map(function (e, n) {
              return an(e, t[n]);
            });
          return function (e) {
            for (var t = 0; t < r; t++) n[t] = o[t](e);
            return n;
          };
        },
        un = function (e, t) {
          var n = Object.assign(Object.assign({}, e), t),
            r = {};
          for (var o in n)
            void 0 !== e[o] && void 0 !== t[o] && (r[o] = an(e[o], t[o]));
          return function (e) {
            for (var t in r) n[t] = r[t](e);
            return n;
          };
        };
      function sn(e) {
        for (
          var t = tn.parse(e), n = t.length, r = 0, o = 0, a = 0, i = 0;
          i < n;
          i++
        )
          r || 'number' === typeof t[i] ? r++ : void 0 !== t[i].hue ? a++ : o++;
        return { parsed: t, numNumbers: r, numRGB: o, numHSL: a };
      }
      var cn = function (e, t) {
          var n = tn.createTransformer(t),
            r = sn(e),
            o = sn(t);
          return r.numHSL === o.numHSL &&
            r.numRGB === o.numRGB &&
            r.numNumbers >= o.numNumbers
            ? on(ln(r.parsed, o.parsed), n)
            : ("Complex values '"
                .concat(e, "' and '")
                .concat(
                  t,
                  "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
                ),
              function (n) {
                return ''.concat(n > 0 ? t : e);
              });
        },
        fn = function (e, t) {
          return function (n) {
            return Ze(e, t, n);
          };
        };
      function dn(e, t, n) {
        for (
          var r,
            o = [],
            a =
              n ||
              ('number' === typeof (r = e[0])
                ? fn
                : 'string' === typeof r
                ? Yt.test(r)
                  ? qt
                  : cn
                : Array.isArray(r)
                ? ln
                : 'object' === typeof r
                ? un
                : void 0),
            i = e.length - 1,
            l = 0;
          l < i;
          l++
        ) {
          var u = a(e[l], e[l + 1]);
          if (t) {
            var s = Array.isArray(t) ? t[l] : t;
            u = on(s, u);
          }
          o.push(u);
        }
        return o;
      }
      function pn(e, t) {
        var n = a(e, 2),
          r = n[0],
          o = n[1],
          i = a(t, 1)[0];
        return function (e) {
          return i(ht(r, o, e));
        };
      }
      function vn(e, t) {
        var n = e.length,
          r = n - 1;
        return function (o) {
          var a = 0,
            i = !1;
          if (
            (o <= e[0] ? (i = !0) : o >= e[r] && ((a = r - 1), (i = !0)), !i)
          ) {
            for (var l = 1; l < n && !(e[l] > o || l === r); l++);
            a = l - 1;
          }
          var u = ht(e[a], e[a + 1], o);
          return t[a](u);
        };
      }
      function hn(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.clamp,
          o = void 0 === r || r,
          a = n.ease,
          i = n.mixer,
          l = e.length;
        t.length,
          !a || !Array.isArray(a) || a.length,
          e[0] > e[l - 1] &&
            ((e = [].concat(e)), (t = [].concat(t)), e.reverse(), t.reverse());
        var u = dn(t, a, i),
          s = 2 === l ? pn(e, u) : vn(e, u);
        return o
          ? function (t) {
              return s(it(e[0], e[l - 1], t));
            }
          : s;
      }
      var mn,
        gn = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        yn = function (e) {
          return function (t) {
            return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
          };
        },
        bn = function (e) {
          return function (t) {
            return t * t * ((e + 1) * t - e);
          };
        },
        wn = function (e) {
          return e;
        },
        xn =
          ((mn = 2),
          function (e) {
            return Math.pow(e, mn);
          }),
        En = gn(xn),
        kn = yn(xn),
        Sn = function (e) {
          return 1 - Math.sin(Math.acos(e));
        },
        Cn = gn(Sn),
        Pn = yn(Cn),
        Tn = bn(1.525),
        _n = gn(Tn),
        On = yn(Tn),
        Ln = (function (e) {
          var t = bn(e);
          return function (e) {
            return (e *= 2) < 1
              ? 0.5 * t(e)
              : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
          };
        })(1.525),
        Mn = function (e) {
          if (1 === e || 0 === e) return e;
          var t = e * e;
          return e < 0.36363636363636365
            ? 7.5625 * t
            : e < 0.7272727272727273
            ? 9.075 * t - 9.9 * e + 3.4
            : e < 0.9
            ? 12.066481994459833 * t - 19.63545706371191 * e + 8.898060941828255
            : 10.8 * e * e - 20.52 * e + 10.72;
        },
        An = gn(Mn);
      function Rn(e, t) {
        return e
          .map(function () {
            return t || kn;
          })
          .splice(0, e.length - 1);
      }
      function Nn(e) {
        var t = e.from,
          n = void 0 === t ? 0 : t,
          r = e.to,
          o = void 0 === r ? 1 : r,
          a = e.ease,
          i = e.offset,
          l = e.duration,
          u = void 0 === l ? 300 : l,
          s = { done: !1, value: n },
          c = Array.isArray(o) ? o : [n, o],
          f = (function (e, t) {
            return e.map(function (e) {
              return e * t;
            });
          })(
            i && i.length === c.length
              ? i
              : (function (e) {
                  var t = e.length;
                  return e.map(function (e, n) {
                    return 0 !== n ? n / (t - 1) : 0;
                  });
                })(c),
            u
          );
        function d() {
          return hn(f, c, { ease: Array.isArray(a) ? a : Rn(c, a) });
        }
        var p = d();
        return {
          next: function (e) {
            return (s.value = p(e)), (s.done = e >= u), s;
          },
          flipTarget: function () {
            c.reverse(), (p = d());
          },
        };
      }
      var Vn = {
        keyframes: Nn,
        spring: pt,
        decay: function (e) {
          var t = e.velocity,
            n = void 0 === t ? 0 : t,
            r = e.from,
            o = void 0 === r ? 0 : r,
            a = e.power,
            i = void 0 === a ? 0.8 : a,
            l = e.timeConstant,
            u = void 0 === l ? 350 : l,
            s = e.restDelta,
            c = void 0 === s ? 0.5 : s,
            f = e.modifyTarget,
            d = { done: !1, value: o },
            p = i * n,
            v = o + p,
            h = void 0 === f ? v : f(v);
          return (
            h !== v && (p = h - o),
            {
              next: function (e) {
                var t = -p * Math.exp(-e / u);
                return (
                  (d.done = !(t > c || t < -c)),
                  (d.value = d.done ? h : h + t),
                  d
                );
              },
              flipTarget: function () {},
            }
          );
        },
      };
      function Dn(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return e - t - n;
      }
      var jn = function (e) {
        var t = function (t) {
          var n = t.delta;
          return e(n);
        };
        return {
          start: function () {
            return ge.update(t, !0);
          },
          stop: function () {
            return fe.update(t);
          },
        };
      };
      function Fn(e) {
        var t,
          n,
          r,
          o,
          a,
          i = e.from,
          l = e.autoplay,
          u = void 0 === l || l,
          s = e.driver,
          c = void 0 === s ? jn : s,
          f = e.elapsed,
          d = void 0 === f ? 0 : f,
          p = e.repeat,
          v = void 0 === p ? 0 : p,
          h = e.repeatType,
          m = void 0 === h ? 'loop' : h,
          g = e.repeatDelay,
          y = void 0 === g ? 0 : g,
          b = e.onPlay,
          w = e.onStop,
          x = e.onComplete,
          E = e.onRepeat,
          k = e.onUpdate,
          S = G(e, [
            'from',
            'autoplay',
            'driver',
            'elapsed',
            'repeat',
            'repeatType',
            'repeatDelay',
            'onPlay',
            'onStop',
            'onComplete',
            'onRepeat',
            'onUpdate',
          ]),
          C = S.to,
          P = 0,
          T = S.duration,
          _ = !1,
          O = !0,
          L = (function (e) {
            if (Array.isArray(e.to)) return Nn;
            if (Vn[e.type]) return Vn[e.type];
            var t = new Set(Object.keys(e));
            return t.has('ease') ||
              (t.has('duration') && !t.has('dampingRatio'))
              ? Nn
              : t.has('dampingRatio') ||
                t.has('stiffness') ||
                t.has('mass') ||
                t.has('damping') ||
                t.has('restSpeed') ||
                t.has('restDelta')
              ? pt
              : Nn;
          })(S);
        (null === (n = (t = L).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(t, i, C)) &&
          ((a = hn([0, 100], [i, C], { clamp: !1 })), (i = 0), (C = 100));
        var M = L(Object.assign(Object.assign({}, S), { from: i, to: C }));
        function A() {
          P++,
            'reverse' === m
              ? (d = (function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0;
                  return arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    !arguments[3]
                    ? t - (e - t) + n
                    : Dn(t + -e, t, n);
                })(d, T, y, (O = P % 2 === 0)))
              : ((d = Dn(d, T, y)), 'mirror' === m && M.flipTarget()),
            (_ = !1),
            E && E();
        }
        function R(e) {
          if ((O || (e = -e), (d += e), !_)) {
            var t = M.next(Math.max(0, d));
            (o = t.value), a && (o = a(o)), (_ = O ? t.done : d <= 0);
          }
          null === k || void 0 === k || k(o),
            _ &&
              (0 === P && ((null !== T && void 0 !== T) || (T = d)),
              P < v
                ? (function (e, t, n, r) {
                    return r ? e >= t + n : e <= -n;
                  })(d, T, y, O) && A()
                : (r.stop(), x && x()));
        }
        return (
          u && (null === b || void 0 === b || b(), (r = c(R)).start()),
          {
            stop: function () {
              null === w || void 0 === w || w(), r.stop();
            },
          }
        );
      }
      var zn = function (e) {
          return 1e3 * e;
        },
        In = function (e, t) {
          return 1 - 3 * t + 3 * e;
        },
        Un = function (e, t) {
          return 3 * t - 6 * e;
        },
        Bn = function (e) {
          return 3 * e;
        },
        Wn = function (e, t, n) {
          return ((In(t, n) * e + Un(t, n)) * e + Bn(t)) * e;
        },
        Hn = function (e, t, n) {
          return 3 * In(t, n) * e * e + 2 * Un(t, n) * e + Bn(t);
        };
      var $n = 0.1;
      function qn(e, t, n, r) {
        if (e === t && n === r) return wn;
        for (var o = new Float32Array(11), a = 0; a < 11; ++a)
          o[a] = Wn(a * $n, e, n);
        function i(t) {
          for (var r = 0, a = 1; 10 !== a && o[a] <= t; ++a) r += $n;
          --a;
          var i = r + ((t - o[a]) / (o[a + 1] - o[a])) * $n,
            l = Hn(i, e, n);
          return l >= 0.001
            ? (function (e, t, n, r) {
                for (var o = 0; o < 8; ++o) {
                  var a = Hn(t, n, r);
                  if (0 === a) return t;
                  t -= (Wn(t, n, r) - e) / a;
                }
                return t;
              })(t, i, e, n)
            : 0 === l
            ? i
            : (function (e, t, n, r, o) {
                var a,
                  i,
                  l = 0;
                do {
                  (a = Wn((i = t + (n - t) / 2), r, o) - e) > 0
                    ? (n = i)
                    : (t = i);
                } while (Math.abs(a) > 1e-7 && ++l < 10);
                return i;
              })(t, r, r + $n, e, n);
        }
        return function (e) {
          return 0 === e || 1 === e ? e : Wn(i(e), t, r);
        };
      }
      var Qn = {
          linear: wn,
          easeIn: xn,
          easeInOut: kn,
          easeOut: En,
          circIn: Sn,
          circInOut: Pn,
          circOut: Cn,
          backIn: Tn,
          backInOut: On,
          backOut: _n,
          anticipate: Ln,
          bounceIn: An,
          bounceInOut: function (e) {
            return e < 0.5
              ? 0.5 * (1 - Mn(1 - 2 * e))
              : 0.5 * Mn(2 * e - 1) + 0.5;
          },
          bounceOut: Mn,
        },
        Yn = function (e) {
          if (Array.isArray(e)) {
            e.length;
            var t = J(e, 4);
            return qn(t[0], t[1], t[2], t[3]);
          }
          return 'string' === typeof e
            ? ("Invalid easing type '".concat(e, "'"), Qn[e])
            : e;
        },
        Xn = function (e, t) {
          return (
            'zIndex' !== e &&
            (!('number' !== typeof t && !Array.isArray(t)) ||
              !('string' !== typeof t || !tn.test(t) || t.startsWith('url(')))
          );
        },
        Kn = function (e) {
          return Array.isArray(e);
        },
        Gn = function () {
          return { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 };
        },
        Zn = function (e) {
          return {
            type: 'spring',
            stiffness: 550,
            damping: 0 === e ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        Jn = function () {
          return { type: 'keyframes', ease: 'linear', duration: 0.3 };
        },
        er = function (e) {
          return { type: 'keyframes', duration: 0.8, values: e };
        },
        tr = {
          x: Gn,
          y: Gn,
          z: Gn,
          rotate: Gn,
          rotateX: Gn,
          rotateY: Gn,
          rotateZ: Gn,
          scaleX: Zn,
          scaleY: Zn,
          scale: Zn,
          opacity: Jn,
          backgroundColor: Jn,
          color: Jn,
          default: Zn,
        },
        nr = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
      function rr(e) {
        var t = a(e.slice(0, -1).split('('), 2),
          n = t[0],
          r = t[1];
        if ('drop-shadow' === n) return e;
        var o = a(r.match(yt) || [], 1)[0];
        if (!o) return e;
        var i = r.replace(o, ''),
          l = nr.has(n) ? 1 : 0;
        return o !== r && (l *= 100), n + '(' + l + i + ')';
      }
      var or = /([a-z-]*)\(.*?\)/g,
        ar = Object.assign(Object.assign({}, tn), {
          getAnimatableNone: function (e) {
            var t = e.match(or);
            return t ? t.map(rr).join(' ') : e;
          },
        }),
        ir = K(K({}, Et), { transform: Math.round }),
        lr = {
          borderWidth: Vt,
          borderTopWidth: Vt,
          borderRightWidth: Vt,
          borderBottomWidth: Vt,
          borderLeftWidth: Vt,
          borderRadius: Vt,
          radius: Vt,
          borderTopLeftRadius: Vt,
          borderTopRightRadius: Vt,
          borderBottomRightRadius: Vt,
          borderBottomLeftRadius: Vt,
          width: Vt,
          maxWidth: Vt,
          height: Vt,
          maxHeight: Vt,
          size: Vt,
          top: Vt,
          right: Vt,
          bottom: Vt,
          left: Vt,
          padding: Vt,
          paddingTop: Vt,
          paddingRight: Vt,
          paddingBottom: Vt,
          paddingLeft: Vt,
          margin: Vt,
          marginTop: Vt,
          marginRight: Vt,
          marginBottom: Vt,
          marginLeft: Vt,
          rotate: Rt,
          rotateX: Rt,
          rotateY: Rt,
          rotateZ: Rt,
          scale: St,
          scaleX: St,
          scaleY: St,
          scaleZ: St,
          skew: Rt,
          skewX: Rt,
          skewY: Rt,
          distance: Vt,
          translateX: Vt,
          translateY: Vt,
          translateZ: Vt,
          x: Vt,
          y: Vt,
          z: Vt,
          perspective: Vt,
          transformPerspective: Vt,
          opacity: kt,
          originX: Ft,
          originY: Ft,
          originZ: Vt,
          zIndex: ir,
          fillOpacity: kt,
          strokeOpacity: kt,
          numOctaves: ir,
        },
        ur = K(K({}, lr), {
          color: Yt,
          backgroundColor: Yt,
          outlineColor: Yt,
          fill: Yt,
          stroke: Yt,
          borderColor: Yt,
          borderTopColor: Yt,
          borderRightColor: Yt,
          borderBottomColor: Yt,
          borderLeftColor: Yt,
          filter: ar,
          WebkitFilter: ar,
        }),
        sr = function (e) {
          return ur[e];
        };
      function cr(e, t) {
        var n,
          r = sr(e);
        return (
          r !== ar && (r = tn),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, t)
        );
      }
      var fr = !1,
        dr = function (e) {
          return Kn(e) ? e[e.length - 1] || 0 : e;
        };
      function pr(e) {
        var t = e.ease,
          n = e.times,
          r = e.yoyo,
          o = e.flip,
          a = e.loop,
          i = G(e, ['ease', 'times', 'yoyo', 'flip', 'loop']),
          l = K({}, i);
        return (
          n && (l.offset = n),
          i.duration && (l.duration = zn(i.duration)),
          i.repeatDelay && (l.repeatDelay = zn(i.repeatDelay)),
          t &&
            (l.ease = (function (e) {
              return Array.isArray(e) && 'number' !== typeof e[0];
            })(t)
              ? t.map(Yn)
              : Yn(t)),
          'tween' === i.type && (l.type = 'keyframes'),
          (r || a || o) &&
            (!0,
            r
              ? (l.repeatType = 'reverse')
              : a
              ? (l.repeatType = 'loop')
              : o && (l.repeatType = 'mirror'),
            (l.repeat = a || r || o || i.repeat)),
          'spring' !== i.type && (l.type = 'keyframes'),
          l
        );
      }
      function vr(e, t, n) {
        var r;
        return (
          Array.isArray(t.to) &&
            ((null !== (r = e.duration) && void 0 !== r) || (e.duration = 0.8)),
          (function (e) {
            Array.isArray(e.to) &&
              null === e.to[0] &&
              ((e.to = ee([], J(e.to), !1)), (e.to[0] = e.from));
          })(t),
          (function (e) {
            e.when,
              e.delay,
              e.delayChildren,
              e.staggerChildren,
              e.staggerDirection,
              e.repeat,
              e.repeatType,
              e.repeatDelay,
              e.from;
            var t = G(e, [
              'when',
              'delay',
              'delayChildren',
              'staggerChildren',
              'staggerDirection',
              'repeat',
              'repeatType',
              'repeatDelay',
              'from',
            ]);
            return !!Object.keys(t).length;
          })(e) ||
            (e = K(
              K({}, e),
              (function (e, t) {
                var n;
                return (
                  (n = Kn(t) ? er : tr[e] || tr.default), K({ to: t }, n(t))
                );
              })(n, t.to)
            )),
          K(K({}, t), pr(e))
        );
      }
      function hr(e, t, n, r, o) {
        var a,
          i = yr(r, e),
          l = null !== (a = i.from) && void 0 !== a ? a : t.get(),
          u = Xn(e, n);
        'none' === l && u && 'string' === typeof n
          ? (l = cr(e, n))
          : mr(l) && 'string' === typeof n
          ? (l = gr(n))
          : !Array.isArray(n) && mr(n) && 'string' === typeof l && (n = gr(l));
        var s = Xn(e, l);
        return (
          'You are trying to animate '
            .concat(e, ' from "')
            .concat(l, '" to "')
            .concat(n, '". ')
            .concat(
              l,
              ' is not an animatable value - to enable this animation set '
            )
            .concat(l, ' to a value animatable to ')
            .concat(n, ' via the `style` property.'),
          s && u && !1 !== i.type
            ? function () {
                var r = {
                  from: l,
                  to: n,
                  velocity: t.getVelocity(),
                  onComplete: o,
                  onUpdate: function (e) {
                    return t.set(e);
                  },
                };
                return 'inertia' === i.type || 'decay' === i.type
                  ? (function (e) {
                      var t,
                        n = e.from,
                        r = void 0 === n ? 0 : n,
                        o = e.velocity,
                        a = void 0 === o ? 0 : o,
                        i = e.min,
                        l = e.max,
                        u = e.power,
                        s = void 0 === u ? 0.8 : u,
                        c = e.timeConstant,
                        f = void 0 === c ? 750 : c,
                        d = e.bounceStiffness,
                        p = void 0 === d ? 500 : d,
                        v = e.bounceDamping,
                        h = void 0 === v ? 10 : v,
                        m = e.restDelta,
                        g = void 0 === m ? 1 : m,
                        y = e.modifyTarget,
                        b = e.driver,
                        w = e.onUpdate,
                        x = e.onComplete,
                        E = e.onStop;
                      function k(e) {
                        return (
                          (void 0 !== i && e < i) || (void 0 !== l && e > l)
                        );
                      }
                      function S(e) {
                        return void 0 === i
                          ? l
                          : void 0 === l || Math.abs(i - e) < Math.abs(l - e)
                          ? i
                          : l;
                      }
                      function C(e) {
                        null === t || void 0 === t || t.stop(),
                          (t = Fn(
                            Object.assign(Object.assign({}, e), {
                              driver: b,
                              onUpdate: function (t) {
                                var n;
                                null === w || void 0 === w || w(t),
                                  null === (n = e.onUpdate) ||
                                    void 0 === n ||
                                    n.call(e, t);
                              },
                              onComplete: x,
                              onStop: E,
                            })
                          ));
                      }
                      function P(e) {
                        C(
                          Object.assign(
                            {
                              type: 'spring',
                              stiffness: p,
                              damping: h,
                              restDelta: g,
                            },
                            e
                          )
                        );
                      }
                      if (k(r)) P({ from: r, velocity: a, to: S(r) });
                      else {
                        var T = s * a + r;
                        'undefined' !== typeof y && (T = y(T));
                        var _,
                          O,
                          L = S(T),
                          M = L === i ? -1 : 1;
                        C({
                          type: 'decay',
                          from: r,
                          velocity: a,
                          timeConstant: f,
                          power: s,
                          restDelta: g,
                          modifyTarget: y,
                          onUpdate: k(T)
                            ? function (e) {
                                (_ = O),
                                  (O = e),
                                  (a = Je(e - _, me().delta)),
                                  ((1 === M && e > L) || (-1 === M && e < L)) &&
                                    P({ from: e, to: L, velocity: a });
                              }
                            : void 0,
                        });
                      }
                      return {
                        stop: function () {
                          return null === t || void 0 === t ? void 0 : t.stop();
                        },
                      };
                    })(K(K({}, r), i))
                  : Fn(
                      K(K({}, vr(i, r, e)), {
                        onUpdate: function (e) {
                          var t;
                          r.onUpdate(e),
                            null === (t = i.onUpdate) ||
                              void 0 === t ||
                              t.call(i, e);
                        },
                        onComplete: function () {
                          var e;
                          r.onComplete(),
                            null === (e = i.onComplete) ||
                              void 0 === e ||
                              e.call(i);
                        },
                      })
                    );
              }
            : function () {
                var e,
                  r,
                  a = dr(n);
                return (
                  t.set(a),
                  o(),
                  null ===
                    (e = null === i || void 0 === i ? void 0 : i.onUpdate) ||
                    void 0 === e ||
                    e.call(i, a),
                  null ===
                    (r = null === i || void 0 === i ? void 0 : i.onComplete) ||
                    void 0 === r ||
                    r.call(i),
                  { stop: function () {} }
                );
              }
        );
      }
      function mr(e) {
        return (
          0 === e ||
          ('string' === typeof e &&
            0 === parseFloat(e) &&
            -1 === e.indexOf(' '))
        );
      }
      function gr(e) {
        return 'number' === typeof e ? 0 : cr('', e);
      }
      function yr(e, t) {
        return e[t] || e.default || e;
      }
      function br(e, t, n, r) {
        return (
          void 0 === r && (r = {}),
          fr && (r = { type: !1 }),
          t.start(function (o) {
            var a,
              i,
              l = hr(e, t, n, r, o),
              u = (function (e, t) {
                var n, r;
                return null !==
                  (r =
                    null !== (n = (yr(e, t) || {}).delay) && void 0 !== n
                      ? n
                      : e.delay) && void 0 !== r
                  ? r
                  : 0;
              })(r, e),
              s = function () {
                return (i = l());
              };
            return (
              u ? (a = window.setTimeout(s, zn(u))) : s(),
              function () {
                clearTimeout(a), null === i || void 0 === i || i.stop();
              }
            );
          })
        );
      }
      var wr = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
        xr = wr.length,
        Er = function (e) {
          return 'string' === typeof e ? parseFloat(e) : e;
        },
        kr = function (e) {
          return 'number' === typeof e || Vt.test(e);
        };
      function Sr(e, t) {
        var n;
        return null !== (n = e[t]) && void 0 !== n ? n : e.borderRadius;
      }
      var Cr = Tr(0, 0.5, Cn),
        Pr = Tr(0.5, 0.95, wn);
      function Tr(e, t, n) {
        return function (r) {
          return r < e ? 0 : r > t ? 1 : n(ht(e, t, r));
        };
      }
      function _r(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function Or(e, t) {
        _r(e.x, t.x), _r(e.y, t.y);
      }
      function Lr(e) {
        return void 0 === e || 1 === e;
      }
      function Mr(e) {
        var t = e.scale,
          n = e.scaleX,
          r = e.scaleY;
        return !Lr(t) || !Lr(n) || !Lr(r);
      }
      function Ar(e) {
        return (
          Mr(e) ||
          Rr(e.x) ||
          Rr(e.y) ||
          e.z ||
          e.rotate ||
          e.rotateX ||
          e.rotateY
        );
      }
      function Rr(e) {
        return e && '0%' !== e;
      }
      function Nr(e, t, n) {
        return n + t * (e - n);
      }
      function Vr(e, t, n, r, o) {
        return void 0 !== o && (e = Nr(e, o, r)), Nr(e, n, r) + t;
      }
      function Dr(e, t, n, r, o) {
        void 0 === t && (t = 0),
          void 0 === n && (n = 1),
          (e.min = Vr(e.min, t, n, r, o)),
          (e.max = Vr(e.max, t, n, r, o));
      }
      function jr(e, t) {
        var n = t.x,
          r = t.y;
        Dr(e.x, n.translate, n.scale, n.originPoint),
          Dr(e.y, r.translate, r.scale, r.originPoint);
      }
      function Fr(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function zr(e, t, n) {
        var r = J(n, 3),
          o = r[0],
          a = r[1],
          i = r[2],
          l = void 0 !== t[i] ? t[i] : 0.5,
          u = Ze(e.min, e.max, l);
        Dr(e, t[o], t[a], u, t.scale);
      }
      var Ir = ['x', 'scaleX', 'originX'],
        Ur = ['y', 'scaleY', 'originY'];
      function Br(e, t) {
        zr(e.x, t, Ir), zr(e.y, t, Ur);
      }
      var Wr = function (e) {
          return e.hasOwnProperty('x') && e.hasOwnProperty('y');
        },
        Hr = function (e) {
          return Wr(e) && e.hasOwnProperty('z');
        },
        $r = function (e, t) {
          return Math.abs(e - t);
        };
      function qr(e, t) {
        if (nn(e) && nn(t)) return $r(e, t);
        if (Wr(e) && Wr(t)) {
          var n = $r(e.x, t.x),
            r = $r(e.y, t.y),
            o = Hr(e) && Hr(t) ? $r(e.z, t.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2));
        }
      }
      function Qr(e) {
        return e.max - e.min;
      }
      function Yr(e, t, n) {
        return (
          void 0 === t && (t = 0), void 0 === n && (n = 0.01), qr(e, t) < n
        );
      }
      function Xr(e, t, n, r) {
        void 0 === r && (r = 0.5),
          (e.origin = r),
          (e.originPoint = Ze(t.min, t.max, e.origin)),
          (e.scale = Qr(n) / Qr(t)),
          (Yr(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = Ze(n.min, n.max, e.origin) - e.originPoint),
          (Yr(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function Kr(e, t, n, r) {
        Xr(e.x, t.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
          Xr(e.y, t.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
      }
      function Gr(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + Qr(t));
      }
      function Zr(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + Qr(t));
      }
      function Jr(e, t, n) {
        Zr(e.x, t.x, n.x), Zr(e.y, t.y, n.y);
      }
      function eo(e, t, n, r, o) {
        return (
          (e = Nr((e -= t), 1 / n, r)), void 0 !== o && (e = Nr(e, 1 / o, r)), e
        );
      }
      function to(e, t, n, r, o) {
        var a = J(n, 3),
          i = a[0],
          l = a[1],
          u = a[2];
        !(function (e, t, n, r, o, a, i) {
          if (
            (void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5),
            void 0 === a && (a = e),
            void 0 === i && (i = e),
            Nt.test(t) &&
              ((t = parseFloat(t)), (t = Ze(i.min, i.max, t / 100) - i.min)),
            'number' === typeof t)
          ) {
            var l = Ze(a.min, a.max, r);
            e === a && (l -= t),
              (e.min = eo(e.min, t, n, l, o)),
              (e.max = eo(e.max, t, n, l, o));
          }
        })(e, t[i], t[l], t[u], t.scale, r, o);
      }
      var no = ['x', 'scaleX', 'originX'],
        ro = ['y', 'scaleY', 'originY'];
      function oo(e, t, n, r) {
        to(
          e.x,
          t,
          no,
          null === n || void 0 === n ? void 0 : n.x,
          null === r || void 0 === r ? void 0 : r.x
        ),
          to(
            e.y,
            t,
            ro,
            null === n || void 0 === n ? void 0 : n.y,
            null === r || void 0 === r ? void 0 : r.y
          );
      }
      function ao(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function io(e) {
        return ao(e.x) && ao(e.y);
      }
      function lo(e, t) {
        return (
          e.x.min === t.x.min &&
          e.x.max === t.x.max &&
          e.y.min === t.y.min &&
          e.y.max === t.y.max
        );
      }
      var uo = (function () {
          function e() {
            this.members = [];
          }
          return (
            (e.prototype.add = function (e) {
              et(this.members, e), e.scheduleRender();
            }),
            (e.prototype.remove = function (e) {
              if (
                (tt(this.members, e),
                e === this.prevLead && (this.prevLead = void 0),
                e === this.lead)
              ) {
                var t = this.members[this.members.length - 1];
                t && this.promote(t);
              }
            }),
            (e.prototype.relegate = function (e) {
              var t,
                n = this.members.findIndex(function (t) {
                  return e === t;
                });
              if (0 === n) return !1;
              for (var r = n; r >= 0; r--) {
                var o = this.members[r];
                if (!1 !== o.isPresent) {
                  t = o;
                  break;
                }
              }
              return !!t && (this.promote(t), !0);
            }),
            (e.prototype.promote = function (e, t) {
              var n,
                r = this.lead;
              e !== r &&
                ((this.prevLead = r),
                (this.lead = e),
                e.show(),
                r &&
                  (r.instance && r.scheduleRender(),
                  e.scheduleRender(),
                  (e.resumeFrom = r),
                  t && (e.resumeFrom.preserveOpacity = !0),
                  r.snapshot &&
                    ((e.snapshot = r.snapshot),
                    (e.snapshot.latestValues =
                      r.animationValues || r.latestValues),
                    (e.snapshot.isShared = !0)),
                  (null === (n = e.root) || void 0 === n
                    ? void 0
                    : n.isUpdating) && (e.isLayoutDirty = !0),
                  !1 === e.options.crossfade && r.hide()));
            }),
            (e.prototype.exitAnimationComplete = function () {
              this.members.forEach(function (e) {
                var t, n, r, o, a;
                null === (n = (t = e.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(t),
                  null ===
                    (a =
                      null === (r = e.resumingFrom) || void 0 === r
                        ? void 0
                        : (o = r.options).onExitComplete) ||
                    void 0 === a ||
                    a.call(o);
              });
            }),
            (e.prototype.scheduleRender = function () {
              this.members.forEach(function (e) {
                e.instance && e.scheduleRender(!1);
              });
            }),
            (e.prototype.removeLeadSnapshot = function () {
              this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
            }),
            e
          );
        })(),
        so = {};
      function co(e, t, n) {
        var r = e.x.translate / t.x,
          o = e.y.translate / t.y,
          a = 'translate3d('.concat(r, 'px, ').concat(o, 'px, 0) ');
        if (n) {
          var i = n.rotate,
            l = n.rotateX,
            u = n.rotateY;
          i && (a += 'rotate('.concat(i, 'deg) ')),
            l && (a += 'rotateX('.concat(l, 'deg) ')),
            u && (a += 'rotateY('.concat(u, 'deg) '));
        }
        return 'translate3d(0px, 0px, 0) scale(1, 1)' ===
          (a += 'scale('.concat(e.x.scale, ', ').concat(e.y.scale, ')'))
          ? 'none'
          : a;
      }
      function fo(e) {
        return [e('x'), e('y')];
      }
      var po = ['', 'X', 'Y', 'Z'],
        vo = ['transformPerspective', 'x', 'y', 'z'];
      function ho(e, t) {
        return vo.indexOf(e) - vo.indexOf(t);
      }
      ['translate', 'scale', 'rotate', 'skew'].forEach(function (e) {
        return po.forEach(function (t) {
          return vo.push(e + t);
        });
      });
      var mo = new Set(vo);
      function go(e) {
        return mo.has(e);
      }
      var yo = new Set(['originX', 'originY', 'originZ']);
      function bo(e) {
        return yo.has(e);
      }
      var wo = function (e, t) {
          return e.depth - t.depth;
        },
        xo = (function () {
          function e() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (e.prototype.add = function (e) {
              et(this.children, e), (this.isDirty = !0);
            }),
            (e.prototype.remove = function (e) {
              tt(this.children, e), (this.isDirty = !0);
            }),
            (e.prototype.forEach = function (e) {
              this.isDirty && this.children.sort(wo),
                (this.isDirty = !1),
                this.children.forEach(e);
            }),
            e
          );
        })();
      function Eo(e) {
        var t,
          n = at(e) ? e.get() : e;
        return (
          (t = n),
          Boolean(t && 'object' === typeof t && t.mix && t.toValue)
            ? n.toValue()
            : n
        );
      }
      var ko = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function So(e) {
        var t = e.attachResizeListener,
          n = e.defaultParent,
          r = e.measureScroll,
          o = e.resetTransform;
        return (function () {
          function e(e, t, r) {
            var o = this;
            void 0 === t && (t = {}),
              void 0 === r && (r = null === n || void 0 === n ? void 0 : n()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                o.isUpdating && ((o.isUpdating = !1), o.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                o.nodes.forEach(Mo), o.nodes.forEach(Ao);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = e),
              (this.latestValues = t),
              (this.root = r ? r.root || r : this),
              (this.path = r ? ee(ee([], J(r.path), !1), [r], !1) : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0),
              e && this.root.registerPotentialNode(e, this);
            for (var a = 0; a < this.path.length; a++)
              this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new xo());
          }
          return (
            (e.prototype.addEventListener = function (e, t) {
              return (
                this.eventHandlers.has(e) ||
                  this.eventHandlers.set(e, new nt()),
                this.eventHandlers.get(e).add(t)
              );
            }),
            (e.prototype.notifyListeners = function (e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r = this.eventHandlers.get(e);
              null === r || void 0 === r || r.notify.apply(r, ee([], J(t), !1));
            }),
            (e.prototype.hasListeners = function (e) {
              return this.eventHandlers.has(e);
            }),
            (e.prototype.registerPotentialNode = function (e, t) {
              this.potentialNodes.set(e, t);
            }),
            (e.prototype.mount = function (e, n) {
              var r,
                o = this;
              if ((void 0 === n && (n = !1), !this.instance)) {
                (this.isSVG = e instanceof SVGElement && 'svg' !== e.tagName),
                  (this.instance = e);
                var a = this.options,
                  i = a.layoutId,
                  l = a.layout,
                  u = a.visualElement;
                if (
                  (u && !u.getInstance() && u.mount(e),
                  this.root.nodes.add(this),
                  null === (r = this.parent) ||
                    void 0 === r ||
                    r.children.add(this),
                  this.id && this.root.potentialNodes.delete(this.id),
                  n && (l || i) && (this.isLayoutDirty = !0),
                  t)
                ) {
                  var s,
                    c = function () {
                      return (o.root.updateBlockedByResize = !1);
                    };
                  t(e, function () {
                    (o.root.updateBlockedByResize = !0),
                      clearTimeout(s),
                      (s = window.setTimeout(c, 250)),
                      ko.hasAnimatedSinceResize &&
                        ((ko.hasAnimatedSinceResize = !1), o.nodes.forEach(Lo));
                  });
                }
                i && this.root.registerSharedNode(i, this),
                  !1 !== this.options.animate &&
                    u &&
                    (i || l) &&
                    this.addEventListener('didUpdate', function (e) {
                      var t,
                        n,
                        r,
                        a,
                        i,
                        l = e.delta,
                        s = e.hasLayoutChanged,
                        c = e.hasRelativeTargetChanged,
                        f = e.layout;
                      if (o.isTreeAnimationBlocked())
                        return (
                          (o.target = void 0), void (o.relativeTarget = void 0)
                        );
                      var d =
                          null !==
                            (n =
                              null !== (t = o.options.transition) &&
                              void 0 !== t
                                ? t
                                : u.getDefaultTransition()) && void 0 !== n
                            ? n
                            : Fo,
                        p = u.getProps().onLayoutAnimationComplete,
                        v = !o.targetLayout || !lo(o.targetLayout, f) || c,
                        h = !s && c;
                      if (
                        (null === (r = o.resumeFrom) || void 0 === r
                          ? void 0
                          : r.instance) ||
                        h ||
                        (s && (v || !o.currentAnimation))
                      ) {
                        o.resumeFrom &&
                          ((o.resumingFrom = o.resumeFrom),
                          (o.resumingFrom.resumingFrom = void 0)),
                          o.setAnimationOrigin(l, h);
                        var m = K(K({}, yr(d, 'layout')), { onComplete: p });
                        u.shouldReduceMotion && ((m.delay = 0), (m.type = !1)),
                          o.startAnimation(m);
                      } else s || 0 !== o.animationProgress || o.finishAnimation(), o.isLead() && (null === (i = (a = o.options).onExitComplete) || void 0 === i || i.call(a));
                      o.targetLayout = f;
                    });
              }
            }),
            (e.prototype.unmount = function () {
              var e, t;
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (e = this.getStack()) ||
                  void 0 === e ||
                  e.remove(this),
                null === (t = this.parent) ||
                  void 0 === t ||
                  t.children.delete(this),
                (this.instance = void 0),
                fe.preRender(this.updateProjection);
            }),
            (e.prototype.blockUpdate = function () {
              this.updateManuallyBlocked = !0;
            }),
            (e.prototype.unblockUpdate = function () {
              this.updateManuallyBlocked = !1;
            }),
            (e.prototype.isUpdateBlocked = function () {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }),
            (e.prototype.isTreeAnimationBlocked = function () {
              var e;
              return (
                this.isAnimationBlocked ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isTreeAnimationBlocked()) ||
                !1
              );
            }),
            (e.prototype.startUpdate = function () {
              var e;
              this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                null === (e = this.nodes) || void 0 === e || e.forEach(Ro));
            }),
            (e.prototype.willUpdate = function (e) {
              var t, n, r;
              if ((void 0 === e && (e = !0), this.root.isUpdateBlocked()))
                null === (n = (t = this.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(t);
              else if (
                (!this.root.isUpdating && this.root.startUpdate(),
                !this.isLayoutDirty)
              ) {
                this.isLayoutDirty = !0;
                for (var o = 0; o < this.path.length; o++) {
                  var a = this.path[o];
                  (a.shouldResetTransform = !0), a.updateScroll();
                }
                var i = this.options,
                  l = i.layoutId,
                  u = i.layout;
                if (void 0 !== l || u) {
                  var s =
                    null === (r = this.options.visualElement) || void 0 === r
                      ? void 0
                      : r.getProps().transformTemplate;
                  (this.prevTransformTemplateValue =
                    null === s || void 0 === s
                      ? void 0
                      : s(this.latestValues, '')),
                    this.updateSnapshot(),
                    e && this.notifyListeners('willUpdate');
                }
              }
            }),
            (e.prototype.didUpdate = function () {
              if (this.isUpdateBlocked())
                return (
                  this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  void this.nodes.forEach(_o)
                );
              this.isUpdating &&
                ((this.isUpdating = !1),
                this.potentialNodes.size &&
                  (this.potentialNodes.forEach(zo),
                  this.potentialNodes.clear()),
                this.nodes.forEach(Oo),
                this.nodes.forEach(Co),
                this.nodes.forEach(Po),
                this.clearAllSnapshots(),
                de.update(),
                de.preRender(),
                de.render());
            }),
            (e.prototype.clearAllSnapshots = function () {
              this.nodes.forEach(To), this.sharedNodes.forEach(No);
            }),
            (e.prototype.scheduleUpdateProjection = function () {
              ge.preRender(this.updateProjection, !1, !0);
            }),
            (e.prototype.scheduleCheckAfterUnmount = function () {
              var e = this;
              ge.postRender(function () {
                e.isLayoutDirty
                  ? e.root.didUpdate()
                  : e.root.checkUpdateFailed();
              });
            }),
            (e.prototype.updateSnapshot = function () {
              if (!this.snapshot && this.instance) {
                var e = this.measure(),
                  t = this.removeTransform(this.removeElementScroll(e));
                Uo(t),
                  (this.snapshot = {
                    measured: e,
                    layout: t,
                    latestValues: {},
                  });
              }
            }),
            (e.prototype.updateLayout = function () {
              var e;
              if (
                this.instance &&
                (this.updateScroll(),
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              ) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var t = 0; t < this.path.length; t++) {
                    this.path[t].updateScroll();
                  }
                var n = this.measure();
                Uo(n);
                var r = this.layout;
                (this.layout = {
                  measured: n,
                  actual: this.removeElementScroll(n),
                }),
                  (this.layoutCorrected = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners('measure', this.layout.actual),
                  null === (e = this.options.visualElement) ||
                    void 0 === e ||
                    e.notifyLayoutMeasure(
                      this.layout.actual,
                      null === r || void 0 === r ? void 0 : r.actual
                    );
              }
            }),
            (e.prototype.updateScroll = function () {
              this.options.layoutScroll &&
                this.instance &&
                (this.scroll = r(this.instance));
            }),
            (e.prototype.resetTransform = function () {
              var e;
              if (o) {
                var t = this.isLayoutDirty || this.shouldResetTransform,
                  n = this.projectionDelta && !io(this.projectionDelta),
                  r =
                    null === (e = this.options.visualElement) || void 0 === e
                      ? void 0
                      : e.getProps().transformTemplate,
                  a =
                    null === r || void 0 === r
                      ? void 0
                      : r(this.latestValues, ''),
                  i = a !== this.prevTransformTemplateValue;
                t &&
                  (n || Ar(this.latestValues) || i) &&
                  (o(this.instance, a),
                  (this.shouldResetTransform = !1),
                  this.scheduleRender());
              }
            }),
            (e.prototype.measure = function () {
              var e = this.options.visualElement;
              if (!e) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              var t = e.measureViewportBox(),
                n = this.root.scroll;
              return n && (Fr(t.x, n.x), Fr(t.y, n.y)), t;
            }),
            (e.prototype.removeElementScroll = function (e) {
              var t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Or(t, e);
              for (var n = 0; n < this.path.length; n++) {
                var r = this.path[n],
                  o = r.scroll,
                  a = r.options;
                r !== this.root &&
                  o &&
                  a.layoutScroll &&
                  (Fr(t.x, o.x), Fr(t.y, o.y));
              }
              return t;
            }),
            (e.prototype.applyTransform = function (e, t) {
              void 0 === t && (t = !1);
              var n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Or(n, e);
              for (var r = 0; r < this.path.length; r++) {
                var o = this.path[r];
                !t &&
                  o.options.layoutScroll &&
                  o.scroll &&
                  o !== o.root &&
                  Br(n, { x: -o.scroll.x, y: -o.scroll.y }),
                  Ar(o.latestValues) && Br(n, o.latestValues);
              }
              return Ar(this.latestValues) && Br(n, this.latestValues), n;
            }),
            (e.prototype.removeTransform = function (e) {
              var t,
                n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Or(n, e);
              for (var r = 0; r < this.path.length; r++) {
                var o = this.path[r];
                if (o.instance && Ar(o.latestValues)) {
                  Mr(o.latestValues) && o.updateSnapshot();
                  var a = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  Or(a, o.measure()),
                    oo(
                      n,
                      o.latestValues,
                      null === (t = o.snapshot) || void 0 === t
                        ? void 0
                        : t.layout,
                      a
                    );
                }
              }
              return Ar(this.latestValues) && oo(n, this.latestValues), n;
            }),
            (e.prototype.setTargetDelta = function (e) {
              (this.targetDelta = e), this.root.scheduleUpdateProjection();
            }),
            (e.prototype.setOptions = function (e) {
              var t;
              this.options = K(K(K({}, this.options), e), {
                crossfade: null === (t = e.crossfade) || void 0 === t || t,
              });
            }),
            (e.prototype.clearMeasurements = function () {
              (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
            }),
            (e.prototype.resolveTargetDelta = function () {
              var e,
                t,
                n,
                r,
                o = this.options,
                a = o.layout,
                i = o.layoutId;
              this.layout &&
                (a || i) &&
                (this.targetDelta ||
                  this.relativeTarget ||
                  ((this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.relativeTargetOrigin = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    Jr(
                      this.relativeTargetOrigin,
                      this.layout.actual,
                      this.relativeParent.layout.actual
                    ),
                    Or(this.relativeTarget, this.relativeTargetOrigin))),
                (this.relativeTarget || this.targetDelta) &&
                  (this.target ||
                    ((this.target = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.targetWithTransforms = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    })),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (e = this.relativeParent) || void 0 === e
                    ? void 0
                    : e.target)
                    ? ((t = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      Gr(t.x, n.x, r.x),
                      Gr(t.y, n.y, r.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(
                            this.layout.actual
                          ))
                        : Or(this.target, this.layout.actual),
                      jr(this.target, this.targetDelta))
                    : Or(this.target, this.layout.actual),
                  this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                    (this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      Boolean(this.relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      (this.relativeTargetOrigin = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      Jr(
                        this.relativeTargetOrigin,
                        this.target,
                        this.relativeParent.target
                      ),
                      Or(this.relativeTarget, this.relativeTargetOrigin)))));
            }),
            (e.prototype.getClosestProjectingParent = function () {
              if (this.parent && !Ar(this.parent.latestValues))
                return (this.parent.relativeTarget ||
                  this.parent.targetDelta) &&
                  this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }),
            (e.prototype.calcProjection = function () {
              var e,
                t = this.options,
                n = t.layout,
                r = t.layoutId;
              if (
                ((this.isTreeAnimating = Boolean(
                  (null === (e = this.parent) || void 0 === e
                    ? void 0
                    : e.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                this.layout && (n || r))
              ) {
                var o = this.getLead();
                Or(this.layoutCorrected, this.layout.actual),
                  (function (e, t, n, r) {
                    var o, a;
                    void 0 === r && (r = !1);
                    var i = n.length;
                    if (i) {
                      var l, u;
                      t.x = t.y = 1;
                      for (var s = 0; s < i; s++)
                        (u = (l = n[s]).projectionDelta),
                          'contents' !==
                            (null ===
                              (a =
                                null === (o = l.instance) || void 0 === o
                                  ? void 0
                                  : o.style) || void 0 === a
                              ? void 0
                              : a.display) &&
                            (r &&
                              l.options.layoutScroll &&
                              l.scroll &&
                              l !== l.root &&
                              Br(e, { x: -l.scroll.x, y: -l.scroll.y }),
                            u &&
                              ((t.x *= u.x.scale),
                              (t.y *= u.y.scale),
                              jr(e, u)),
                            r && Ar(l.latestValues) && Br(e, l.latestValues));
                    }
                  })(
                    this.layoutCorrected,
                    this.treeScale,
                    this.path,
                    Boolean(this.resumingFrom) || this !== o
                  );
                var a = o.target;
                if (a) {
                  this.projectionDelta ||
                    ((this.projectionDelta = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }),
                    (this.projectionDeltaWithTransform = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }));
                  var i = this.treeScale.x,
                    l = this.treeScale.y,
                    u = this.projectionTransform;
                  Kr(
                    this.projectionDelta,
                    this.layoutCorrected,
                    a,
                    this.latestValues
                  ),
                    (this.projectionTransform = co(
                      this.projectionDelta,
                      this.treeScale
                    )),
                    (this.projectionTransform === u &&
                      this.treeScale.x === i &&
                      this.treeScale.y === l) ||
                      ((this.hasProjected = !0),
                      this.scheduleRender(),
                      this.notifyListeners('projectionUpdate', a));
                }
              }
            }),
            (e.prototype.hide = function () {
              this.isVisible = !1;
            }),
            (e.prototype.show = function () {
              this.isVisible = !0;
            }),
            (e.prototype.scheduleRender = function (e) {
              var t, n, r;
              void 0 === e && (e = !0),
                null === (n = (t = this.options).scheduleRender) ||
                  void 0 === n ||
                  n.call(t),
                e &&
                  (null === (r = this.getStack()) ||
                    void 0 === r ||
                    r.scheduleRender()),
                this.resumingFrom &&
                  !this.resumingFrom.instance &&
                  (this.resumingFrom = void 0);
            }),
            (e.prototype.setAnimationOrigin = function (e, t) {
              var n,
                r = this;
              void 0 === t && (t = !1);
              var o = this.snapshot,
                a =
                  (null === o || void 0 === o ? void 0 : o.latestValues) || {},
                i = K({}, this.latestValues),
                l = {
                  x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                  y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                };
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !t);
              var u = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                s = null === o || void 0 === o ? void 0 : o.isShared,
                c =
                  ((null === (n = this.getStack()) || void 0 === n
                    ? void 0
                    : n.members.length) || 0) <= 1,
                f = Boolean(
                  s &&
                    !c &&
                    !0 === this.options.crossfade &&
                    !this.path.some(jo)
                );
              (this.animationProgress = 0),
                (this.mixTargetDelta = function (t) {
                  var n,
                    o,
                    d,
                    p,
                    v,
                    h = t / 1e3;
                  Vo(l.x, e.x, h),
                    Vo(l.y, e.y, h),
                    r.setTargetDelta(l),
                    r.relativeTarget &&
                      r.relativeTargetOrigin &&
                      r.layout &&
                      (null === (n = r.relativeParent) || void 0 === n
                        ? void 0
                        : n.layout) &&
                      (Jr(u, r.layout.actual, r.relativeParent.layout.actual),
                      (o = r.relativeTarget),
                      (d = r.relativeTargetOrigin),
                      (p = u),
                      (v = h),
                      Do(o.x, d.x, p.x, v),
                      Do(o.y, d.y, p.y, v)),
                    s &&
                      ((r.animationValues = i),
                      (function (e, t, n, r, o, a) {
                        var i, l, u, s;
                        o
                          ? ((e.opacity = Ze(
                              0,
                              null !== (i = n.opacity) && void 0 !== i ? i : 1,
                              Cr(r)
                            )),
                            (e.opacityExit = Ze(
                              null !== (l = t.opacity) && void 0 !== l ? l : 1,
                              0,
                              Pr(r)
                            )))
                          : a &&
                            (e.opacity = Ze(
                              null !== (u = t.opacity) && void 0 !== u ? u : 1,
                              null !== (s = n.opacity) && void 0 !== s ? s : 1,
                              r
                            ));
                        for (var c = 0; c < xr; c++) {
                          var f = 'border'.concat(wr[c], 'Radius'),
                            d = Sr(t, f),
                            p = Sr(n, f);
                          (void 0 === d && void 0 === p) ||
                            (d || (d = 0),
                            p || (p = 0),
                            0 === d || 0 === p || kr(d) === kr(p)
                              ? ((e[f] = Math.max(Ze(Er(d), Er(p), r), 0)),
                                (Nt.test(p) || Nt.test(d)) && (e[f] += '%'))
                              : (e[f] = p));
                        }
                        (t.rotate || n.rotate) &&
                          (e.rotate = Ze(t.rotate || 0, n.rotate || 0, r));
                      })(i, a, r.latestValues, h, f, c)),
                    r.root.scheduleUpdateProjection(),
                    r.scheduleRender(),
                    (r.animationProgress = h);
                }),
                this.mixTargetDelta(0);
            }),
            (e.prototype.startAnimation = function (e) {
              var t,
                n,
                r = this;
              null === (t = this.currentAnimation) || void 0 === t || t.stop(),
                this.resumingFrom &&
                  (null === (n = this.resumingFrom.currentAnimation) ||
                    void 0 === n ||
                    n.stop()),
                this.pendingAnimation &&
                  (fe.update(this.pendingAnimation),
                  (this.pendingAnimation = void 0)),
                (this.pendingAnimation = ge.update(function () {
                  (ko.hasAnimatedSinceResize = !0),
                    (r.currentAnimation = (function (e, t, n) {
                      void 0 === n && (n = {});
                      var r = at(e) ? e : ot(e);
                      return (
                        br('', r, t, n),
                        {
                          stop: function () {
                            return r.stop();
                          },
                          isAnimating: function () {
                            return r.isAnimating();
                          },
                        }
                      );
                    })(
                      0,
                      1e3,
                      K(K({}, e), {
                        onUpdate: function (t) {
                          var n;
                          r.mixTargetDelta(t),
                            null === (n = e.onUpdate) ||
                              void 0 === n ||
                              n.call(e, t);
                        },
                        onComplete: function () {
                          var t;
                          null === (t = e.onComplete) ||
                            void 0 === t ||
                            t.call(e),
                            r.completeAnimation();
                        },
                      })
                    )),
                    r.resumingFrom &&
                      (r.resumingFrom.currentAnimation = r.currentAnimation),
                    (r.pendingAnimation = void 0);
                }));
            }),
            (e.prototype.completeAnimation = function () {
              var e;
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0)),
                null === (e = this.getStack()) ||
                  void 0 === e ||
                  e.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                    void 0),
                this.notifyListeners('animationComplete');
            }),
            (e.prototype.finishAnimation = function () {
              var e;
              this.currentAnimation &&
                (null === (e = this.mixTargetDelta) ||
                  void 0 === e ||
                  e.call(this, 1e3),
                this.currentAnimation.stop()),
                this.completeAnimation();
            }),
            (e.prototype.applyTransformsToTarget = function () {
              var e = this.getLead(),
                t = e.targetWithTransforms,
                n = e.target,
                r = e.layout,
                o = e.latestValues;
              t &&
                n &&
                r &&
                (Or(t, n),
                Br(t, o),
                Kr(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  o
                ));
            }),
            (e.prototype.registerSharedNode = function (e, t) {
              var n, r, o;
              this.sharedNodes.has(e) || this.sharedNodes.set(e, new uo()),
                this.sharedNodes.get(e).add(t),
                t.promote({
                  transition:
                    null === (n = t.options.initialPromotionConfig) ||
                    void 0 === n
                      ? void 0
                      : n.transition,
                  preserveFollowOpacity:
                    null ===
                      (o =
                        null === (r = t.options.initialPromotionConfig) ||
                        void 0 === r
                          ? void 0
                          : r.shouldPreserveFollowOpacity) || void 0 === o
                      ? void 0
                      : o.call(r, t),
                });
            }),
            (e.prototype.isLead = function () {
              var e = this.getStack();
              return !e || e.lead === this;
            }),
            (e.prototype.getLead = function () {
              var e;
              return (
                (this.options.layoutId &&
                  (null === (e = this.getStack()) || void 0 === e
                    ? void 0
                    : e.lead)) ||
                this
              );
            }),
            (e.prototype.getPrevLead = function () {
              var e;
              return this.options.layoutId
                ? null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.prevLead
                : void 0;
            }),
            (e.prototype.getStack = function () {
              var e = this.options.layoutId;
              if (e) return this.root.sharedNodes.get(e);
            }),
            (e.prototype.promote = function (e) {
              var t = void 0 === e ? {} : e,
                n = t.needsReset,
                r = t.transition,
                o = t.preserveFollowOpacity,
                a = this.getStack();
              a && a.promote(this, o),
                n && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                r && this.setOptions({ transition: r });
            }),
            (e.prototype.relegate = function () {
              var e = this.getStack();
              return !!e && e.relegate(this);
            }),
            (e.prototype.resetRotation = function () {
              var e = this.options.visualElement;
              if (e) {
                for (var t = !1, n = {}, r = 0; r < po.length; r++) {
                  var o = 'rotate' + po[r];
                  e.getStaticValue(o) &&
                    ((t = !0),
                    (n[o] = e.getStaticValue(o)),
                    e.setStaticValue(o, 0));
                }
                if (t) {
                  for (var o in (null === e || void 0 === e || e.syncRender(),
                  n))
                    e.setStaticValue(o, n[o]);
                  e.scheduleRender();
                }
              }
            }),
            (e.prototype.getProjectionStyles = function (e) {
              var t, n, r, o, a, i;
              void 0 === e && (e = {});
              var l = {};
              if (!this.instance || this.isSVG) return l;
              if (!this.isVisible) return { visibility: 'hidden' };
              l.visibility = '';
              var u =
                null === (t = this.options.visualElement) || void 0 === t
                  ? void 0
                  : t.getProps().transformTemplate;
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (l.opacity = ''),
                  (l.pointerEvents = Eo(e.pointerEvents) || ''),
                  (l.transform = u ? u(this.latestValues, '') : 'none'),
                  l
                );
              var s = this.getLead();
              if (!this.projectionDelta || !this.layout || !s.target) {
                var c = {};
                return (
                  this.options.layoutId &&
                    ((c.opacity =
                      null !== (n = this.latestValues.opacity) && void 0 !== n
                        ? n
                        : 1),
                    (c.pointerEvents = Eo(e.pointerEvents) || '')),
                  this.hasProjected &&
                    !Ar(this.latestValues) &&
                    ((c.transform = u ? u({}, '') : 'none'),
                    (this.hasProjected = !1)),
                  c
                );
              }
              var f = s.animationValues || s.latestValues;
              this.applyTransformsToTarget(),
                (l.transform = co(
                  this.projectionDeltaWithTransform,
                  this.treeScale,
                  f
                )),
                u && (l.transform = u(f, l.transform));
              var d = this.projectionDelta,
                p = d.x,
                v = d.y;
              for (var h in ((l.transformOrigin = ''
                .concat(100 * p.origin, '% ')
                .concat(100 * v.origin, '% 0')),
              s.animationValues
                ? (l.opacity =
                    s === this
                      ? null !==
                          (o =
                            null !== (r = f.opacity) && void 0 !== r
                              ? r
                              : this.latestValues.opacity) && void 0 !== o
                        ? o
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : f.opacityExit)
                : (l.opacity =
                    s === this
                      ? null !== (a = f.opacity) && void 0 !== a
                        ? a
                        : ''
                      : null !== (i = f.opacityExit) && void 0 !== i
                      ? i
                      : 0),
              so))
                if (void 0 !== f[h]) {
                  var m = so[h],
                    g = m.correct,
                    y = m.applyTo,
                    b = g(f[h], s);
                  if (y) for (var w = y.length, x = 0; x < w; x++) l[y[x]] = b;
                  else l[h] = b;
                }
              return (
                this.options.layoutId &&
                  (l.pointerEvents =
                    s === this ? Eo(e.pointerEvents) || '' : 'none'),
                l
              );
            }),
            (e.prototype.clearSnapshot = function () {
              this.resumeFrom = this.snapshot = void 0;
            }),
            (e.prototype.resetTree = function () {
              this.root.nodes.forEach(function (e) {
                var t;
                return null === (t = e.currentAnimation) || void 0 === t
                  ? void 0
                  : t.stop();
              }),
                this.root.nodes.forEach(_o),
                this.root.sharedNodes.clear();
            }),
            e
          );
        })();
      }
      function Co(e) {
        e.updateLayout();
      }
      function Po(e) {
        var t,
          n,
          r,
          o,
          a =
            null !==
              (n =
                null === (t = e.resumeFrom) || void 0 === t
                  ? void 0
                  : t.snapshot) && void 0 !== n
              ? n
              : e.snapshot;
        if (e.isLead() && e.layout && a && e.hasListeners('didUpdate')) {
          var i = e.layout,
            l = i.actual,
            u = i.measured;
          'size' === e.options.animationType
            ? fo(function (e) {
                var t = a.isShared ? a.measured[e] : a.layout[e],
                  n = Qr(t);
                (t.min = l[e].min), (t.max = t.min + n);
              })
            : 'position' === e.options.animationType &&
              fo(function (e) {
                var t = a.isShared ? a.measured[e] : a.layout[e],
                  n = Qr(l[e]);
                t.max = t.min + n;
              });
          var s = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          Kr(s, l, a.layout);
          var c = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          a.isShared
            ? Kr(c, e.applyTransform(u, !0), a.measured)
            : Kr(c, l, a.layout);
          var f = !io(s),
            d = !1;
          if (
            !e.resumeFrom &&
            ((e.relativeParent = e.getClosestProjectingParent()),
            e.relativeParent && !e.relativeParent.resumeFrom)
          ) {
            var p = e.relativeParent,
              v = p.snapshot,
              h = p.layout;
            if (v && h) {
              var m = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Jr(m, a.layout, v.layout);
              var g = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Jr(g, l, h.actual), lo(m, g) || (d = !0);
            }
          }
          e.notifyListeners('didUpdate', {
            layout: l,
            snapshot: a,
            delta: c,
            layoutDelta: s,
            hasLayoutChanged: f,
            hasRelativeTargetChanged: d,
          });
        } else
          e.isLead() &&
            (null === (o = (r = e.options).onExitComplete) ||
              void 0 === o ||
              o.call(r));
        e.options.transition = void 0;
      }
      function To(e) {
        e.clearSnapshot();
      }
      function _o(e) {
        e.clearMeasurements();
      }
      function Oo(e) {
        var t = e.options.visualElement;
        (null === t || void 0 === t
          ? void 0
          : t.getProps().onBeforeLayoutMeasure) &&
          t.notifyBeforeLayoutMeasure(),
          e.resetTransform();
      }
      function Lo(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0);
      }
      function Mo(e) {
        e.resolveTargetDelta();
      }
      function Ao(e) {
        e.calcProjection();
      }
      function Ro(e) {
        e.resetRotation();
      }
      function No(e) {
        e.removeLeadSnapshot();
      }
      function Vo(e, t, n) {
        (e.translate = Ze(t.translate, 0, n)),
          (e.scale = Ze(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function Do(e, t, n, r) {
        (e.min = Ze(t.min, n.min, r)), (e.max = Ze(t.max, n.max, r));
      }
      function jo(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      var Fo = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function zo(e, t) {
        for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
          if (Boolean(e.path[r].instance)) {
            n = e.path[r];
            break;
          }
        var o = (n && n !== e.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(t, '"]')
        );
        o && e.mount(o, !0);
      }
      function Io(e) {
        (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
      }
      function Uo(e) {
        Io(e.x), Io(e.y);
      }
      var Bo = 1;
      var Wo = (0, e.createContext)({});
      var Ho = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          X(t, e),
          (t.prototype.getSnapshotBeforeUpdate = function () {
            return this.updateProps(), null;
          }),
          (t.prototype.componentDidUpdate = function () {}),
          (t.prototype.updateProps = function () {
            var e = this.props,
              t = e.visualElement,
              n = e.props;
            t && t.setProps(n);
          }),
          (t.prototype.render = function () {
            return this.props.children;
          }),
          t
        );
      })(e.Component);
      function $o(t) {
        var n = t.preloadedFeatures,
          r = t.createVisualElement,
          o = t.projectionNodeConstructor,
          a = t.useRender,
          i = t.useVisualState,
          l = t.Component;
        return (
          n &&
            (function (e) {
              for (var t in e)
                null !== e[t] &&
                  ('projectionNodeConstructor' === t
                    ? (Re.projectionNodeConstructor = e[t])
                    : (Re[t].Component = e[t]));
            })(n),
          (0, e.forwardRef)(function (t, n) {
            var u = (function (t) {
              var n,
                r = t.layoutId,
                o =
                  null === (n = (0, e.useContext)(Pe)) || void 0 === n
                    ? void 0
                    : n.id;
              return o && void 0 !== r ? o + '-' + r : r;
            })(t);
            t = K(K({}, t), { layoutId: u });
            var s = (0, e.useContext)(je),
              c = null,
              f = Ke(t),
              d = s.isStatic
                ? void 0
                : we(function () {
                    if (ko.hasEverUpdated) return Bo++;
                  }),
              p = i(t, s.isStatic);
            return (
              !s.isStatic &&
                Te &&
                ((f.visualElement = Be(l, p, K(K({}, s), t), r)),
                (function (t, n, r, o) {
                  var a,
                    i = n.layoutId,
                    l = n.layout,
                    u = n.drag,
                    s = n.dragConstraints,
                    c = n.layoutScroll,
                    f = (0, e.useContext)(Wo);
                  o &&
                    r &&
                    !(null === r || void 0 === r ? void 0 : r.projection) &&
                    ((r.projection = new o(
                      t,
                      r.getLatestValues(),
                      null === (a = r.parent) || void 0 === a
                        ? void 0
                        : a.projection
                    )),
                    r.projection.setOptions({
                      layoutId: i,
                      layout: l,
                      alwaysMeasureLayout: Boolean(u) || (s && We(s)),
                      visualElement: r,
                      scheduleRender: function () {
                        return r.scheduleRender();
                      },
                      animationType: 'string' === typeof l ? l : 'both',
                      initialPromotionConfig: f,
                      layoutScroll: c,
                    }));
                })(d, t, f.visualElement, o || Re.projectionNodeConstructor),
                (c = (function (t, n, r) {
                  var o = [];
                  if (((0, e.useContext)(Ne), !n)) return null;
                  for (var a = 0; a < De; a++) {
                    var i = Ve[a],
                      l = Re[i],
                      u = l.isEnabled,
                      s = l.Component;
                    u(t) &&
                      s &&
                      o.push(
                        e.createElement(
                          s,
                          K({ key: i }, t, { visualElement: n })
                        )
                      );
                  }
                  return o;
                })(t, f.visualElement))),
              e.createElement(
                Ho,
                { visualElement: f.visualElement, props: K(K({}, s), t) },
                c,
                e.createElement(
                  Fe.Provider,
                  { value: f },
                  a(
                    l,
                    t,
                    d,
                    (function (t, n, r) {
                      return (0, e.useCallback)(
                        function (e) {
                          var o;
                          e &&
                            (null === (o = t.mount) ||
                              void 0 === o ||
                              o.call(t, e)),
                            n && (e ? n.mount(e) : n.unmount()),
                            r &&
                              ('function' === typeof r
                                ? r(e)
                                : We(r) && (r.current = e));
                        },
                        [n]
                      );
                    })(p, f.visualElement, n),
                    p,
                    s.isStatic,
                    f.visualElement
                  )
                )
              )
            );
          })
        );
      }
      function qo(e) {
        function t(t, n) {
          return void 0 === n && (n = {}), $o(e(t, n));
        }
        if ('undefined' === typeof Proxy) return t;
        var n = new Map();
        return new Proxy(t, {
          get: function (e, r) {
            return n.has(r) || n.set(r, t(r)), n.get(r);
          },
        });
      }
      var Qo = [
        'animate',
        'circle',
        'defs',
        'desc',
        'ellipse',
        'g',
        'image',
        'line',
        'filter',
        'marker',
        'mask',
        'metadata',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'rect',
        'stop',
        'svg',
        'switch',
        'symbol',
        'text',
        'tspan',
        'use',
        'view',
      ];
      function Yo(e) {
        return (
          'string' === typeof e &&
          !e.includes('-') &&
          !!(Qo.indexOf(e) > -1 || /[A-Z]/.test(e))
        );
      }
      function Xo(e, t) {
        var n = t.layout,
          r = t.layoutId;
        return (
          go(e) ||
          bo(e) ||
          ((n || void 0 !== r) && (!!so[e] || 'opacity' === e))
        );
      }
      var Ko = {
        x: 'translateX',
        y: 'translateY',
        z: 'translateZ',
        transformPerspective: 'perspective',
      };
      function Go(e) {
        return e.startsWith('--');
      }
      var Zo = function (e, t) {
        return t && 'number' === typeof e ? t.transform(e) : e;
      };
      function Jo(e, t, n, r) {
        var o,
          a = e.style,
          i = e.vars,
          l = e.transform,
          u = e.transformKeys,
          s = e.transformOrigin;
        u.length = 0;
        var c = !1,
          f = !1,
          d = !0;
        for (var p in t) {
          var v = t[p];
          if (Go(p)) i[p] = v;
          else {
            var h = lr[p],
              m = Zo(v, h);
            if (go(p)) {
              if (((c = !0), (l[p] = m), u.push(p), !d)) continue;
              v !== (null !== (o = h.default) && void 0 !== o ? o : 0) &&
                (d = !1);
            } else bo(p) ? ((s[p] = m), (f = !0)) : (a[p] = m);
          }
        }
        c
          ? (a.transform = (function (e, t, n, r) {
              var o = e.transform,
                a = e.transformKeys,
                i = t.enableHardwareAcceleration,
                l = void 0 === i || i,
                u = t.allowTransformNone,
                s = void 0 === u || u,
                c = '';
              a.sort(ho);
              for (var f = !1, d = a.length, p = 0; p < d; p++) {
                var v = a[p];
                (c += ''.concat(Ko[v] || v, '(').concat(o[v], ') ')),
                  'z' === v && (f = !0);
              }
              return (
                !f && l ? (c += 'translateZ(0)') : (c = c.trim()),
                r ? (c = r(o, n ? '' : c)) : s && n && (c = 'none'),
                c
              );
            })(e, n, d, r))
          : r
          ? (a.transform = r({}, ''))
          : !t.transform && a.transform && (a.transform = 'none'),
          f &&
            (a.transformOrigin = (function (e) {
              var t = e.originX,
                n = void 0 === t ? '50%' : t,
                r = e.originY,
                o = void 0 === r ? '50%' : r,
                a = e.originZ,
                i = void 0 === a ? 0 : a;
              return ''.concat(n, ' ').concat(o, ' ').concat(i);
            })(s));
      }
      var ea = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function ta(e, t, n) {
        for (var r in t) at(t[r]) || Xo(r, n) || (e[r] = t[r]);
      }
      function na(t, n, r) {
        var o = {};
        return (
          ta(o, t.style || {}, t),
          Object.assign(
            o,
            (function (t, n, r) {
              var o = t.transformTemplate;
              return (0, e.useMemo)(
                function () {
                  var e = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  Jo(e, n, { enableHardwareAcceleration: !r }, o);
                  var t = e.style;
                  return K(K({}, e.vars), t);
                },
                [n]
              );
            })(t, n, r)
          ),
          t.transformValues && (o = t.transformValues(o)),
          o
        );
      }
      function ra(e, t, n) {
        var r = {},
          o = na(e, t, n);
        return (
          Boolean(e.drag) &&
            !1 !== e.dragListener &&
            ((r.draggable = !1),
            (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
            (o.touchAction =
              !0 === e.drag
                ? 'none'
                : 'pan-'.concat('x' === e.drag ? 'y' : 'x'))),
          (r.style = o),
          r
        );
      }
      var oa = new Set([
        'initial',
        'animate',
        'exit',
        'style',
        'variants',
        'transition',
        'transformTemplate',
        'transformValues',
        'custom',
        'inherit',
        'layout',
        'layoutId',
        'layoutDependency',
        'onLayoutAnimationComplete',
        'onLayoutMeasure',
        'onBeforeLayoutMeasure',
        'onAnimationStart',
        'onAnimationComplete',
        'onUpdate',
        'onDragStart',
        'onDrag',
        'onDragEnd',
        'onMeasureDragConstraints',
        'onDirectionLock',
        'onDragTransitionEnd',
        'drag',
        'dragControls',
        'dragListener',
        'dragConstraints',
        'dragDirectionLock',
        'dragSnapToOrigin',
        '_dragX',
        '_dragY',
        'dragElastic',
        'dragMomentum',
        'dragPropagation',
        'dragTransition',
        'whileDrag',
        'onPan',
        'onPanStart',
        'onPanEnd',
        'onPanSessionStart',
        'onTap',
        'onTapStart',
        'onTapCancel',
        'onHoverStart',
        'onHoverEnd',
        'whileFocus',
        'whileTap',
        'whileHover',
        'whileInView',
        'onViewportEnter',
        'onViewportLeave',
        'viewport',
        'layoutScroll',
      ]);
      function aa(e) {
        return oa.has(e);
      }
      var ia,
        la = function (e) {
          return !aa(e);
        };
      try {
        (ia = require('@emotion/is-prop-valid').default) &&
          (la = function (e) {
            return e.startsWith('on') ? !aa(e) : ia(e);
          });
      } catch (hu) {}
      function ua(e, t, n) {
        return 'string' === typeof e ? e : Vt.transform(t + n * e);
      }
      var sa = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
        ca = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
      function fa(e, t, n, r) {
        var o = t.attrX,
          a = t.attrY,
          i = t.originX,
          l = t.originY,
          u = t.pathLength,
          s = t.pathSpacing,
          c = void 0 === s ? 1 : s,
          f = t.pathOffset,
          d = void 0 === f ? 0 : f;
        Jo(
          e,
          G(t, [
            'attrX',
            'attrY',
            'originX',
            'originY',
            'pathLength',
            'pathSpacing',
            'pathOffset',
          ]),
          n,
          r
        ),
          (e.attrs = e.style),
          (e.style = {});
        var p = e.attrs,
          v = e.style,
          h = e.dimensions;
        p.transform && (h && (v.transform = p.transform), delete p.transform),
          h &&
            (void 0 !== i || void 0 !== l || v.transform) &&
            (v.transformOrigin = (function (e, t, n) {
              var r = ua(t, e.x, e.width),
                o = ua(n, e.y, e.height);
              return ''.concat(r, ' ').concat(o);
            })(h, void 0 !== i ? i : 0.5, void 0 !== l ? l : 0.5)),
          void 0 !== o && (p.x = o),
          void 0 !== a && (p.y = a),
          void 0 !== u &&
            (function (e, t, n, r, o) {
              void 0 === n && (n = 1),
                void 0 === r && (r = 0),
                void 0 === o && (o = !0),
                (e.pathLength = 1);
              var a = o ? sa : ca;
              e[a.offset] = Vt.transform(-r);
              var i = Vt.transform(t),
                l = Vt.transform(n);
              e[a.array] = ''.concat(i, ' ').concat(l);
            })(p, u, c, d, !1);
      }
      var da = function () {
        return K(
          K(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        );
      };
      function pa(t, n) {
        var r = (0, e.useMemo)(
          function () {
            var e = da();
            return (
              fa(e, n, { enableHardwareAcceleration: !1 }, t.transformTemplate),
              K(K({}, e.attrs), { style: K({}, e.style) })
            );
          },
          [n]
        );
        if (t.style) {
          var o = {};
          ta(o, t.style, t), (r.style = K(K({}, o), r.style));
        }
        return r;
      }
      function va(t) {
        void 0 === t && (t = !1);
        return function (n, r, o, a, i, l) {
          var u = i.latestValues,
            s = (Yo(n) ? pa : ra)(r, u, l),
            c = (function (e, t, n) {
              var r = {};
              for (var o in e)
                (la(o) ||
                  (!0 === n && aa(o)) ||
                  (!t && !aa(o)) ||
                  (e.draggable && o.startsWith('onDrag'))) &&
                  (r[o] = e[o]);
              return r;
            })(r, 'string' === typeof n, t),
            f = K(K(K({}, c), s), { ref: a });
          return o && (f['data-projection-id'] = o), (0, e.createElement)(n, f);
        };
      }
      var ha = /([a-z])([A-Z])/g,
        ma = function (e) {
          return e.replace(ha, '$1-$2').toLowerCase();
        };
      function ga(e, t, n, r) {
        var o = t.style,
          a = t.vars;
        for (var i in (Object.assign(e.style, o, r && r.getProjectionStyles(n)),
        a))
          e.style.setProperty(i, a[i]);
      }
      var ya = new Set([
        'baseFrequency',
        'diffuseConstant',
        'kernelMatrix',
        'kernelUnitLength',
        'keySplines',
        'keyTimes',
        'limitingConeAngle',
        'markerHeight',
        'markerWidth',
        'numOctaves',
        'targetX',
        'targetY',
        'surfaceScale',
        'specularConstant',
        'specularExponent',
        'stdDeviation',
        'tableValues',
        'viewBox',
        'gradientTransform',
        'pathLength',
      ]);
      function ba(e, t) {
        for (var n in (ga(e, t), t.attrs))
          e.setAttribute(ya.has(n) ? n : ma(n), t.attrs[n]);
      }
      function wa(e) {
        var t = e.style,
          n = {};
        for (var r in t) (at(t[r]) || Xo(r, e)) && (n[r] = t[r]);
        return n;
      }
      function xa(e) {
        var t = wa(e);
        for (var n in e) {
          if (at(e[n]))
            t['x' === n || 'y' === n ? 'attr' + n.toUpperCase() : n] = e[n];
        }
        return t;
      }
      function Ea(e) {
        return 'object' === typeof e && 'function' === typeof e.start;
      }
      function ka(e, t, n, r) {
        var o = e.scrapeMotionValuesFromProps,
          a = e.createRenderState,
          i = e.onMount,
          l = { latestValues: Ca(t, n, r, o), renderState: a() };
        return (
          i &&
            (l.mount = function (e) {
              return i(t, e, l);
            }),
          l
        );
      }
      var Sa = function (t) {
        return function (n, r) {
          var o = (0, e.useContext)(Fe),
            a = (0, e.useContext)(be);
          return r
            ? ka(t, n, o, a)
            : we(function () {
                return ka(t, n, o, a);
              });
        };
      };
      function Ca(e, t, n, r) {
        var o = {},
          a = !1 === (null === n || void 0 === n ? void 0 : n.initial),
          i = r(e);
        for (var l in i) o[l] = Eo(i[l]);
        var u = e.initial,
          s = e.animate,
          c = Ye(e),
          f = Xe(e);
        t &&
          f &&
          !c &&
          !1 !== e.inherit &&
          ((null !== u && void 0 !== u) || (u = t.initial),
          (null !== s && void 0 !== s) || (s = t.animate));
        var d = a || !1 === u,
          p = d ? s : u;
        p &&
          'boolean' !== typeof p &&
          !Ea(p) &&
          (Array.isArray(p) ? p : [p]).forEach(function (t) {
            var n = qe(e, t);
            if (n) {
              var r = n.transitionEnd;
              n.transition;
              var a = G(n, ['transitionEnd', 'transition']);
              for (var i in a) {
                var l = a[i];
                if (Array.isArray(l)) l = l[d ? l.length - 1 : 0];
                null !== l && (o[i] = l);
              }
              for (var i in r) o[i] = r[i];
            }
          });
        return o;
      }
      var Pa,
        Ta = {
          useVisualState: Sa({
            scrapeMotionValuesFromProps: xa,
            createRenderState: da,
            onMount: function (e, t, n) {
              var r = n.renderState,
                o = n.latestValues;
              try {
                r.dimensions =
                  'function' === typeof t.getBBox
                    ? t.getBBox()
                    : t.getBoundingClientRect();
              } catch (a) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              fa(r, o, { enableHardwareAcceleration: !1 }, e.transformTemplate),
                ba(t, r);
            },
          }),
        },
        _a = {
          useVisualState: Sa({
            scrapeMotionValuesFromProps: wa,
            createRenderState: ea,
          }),
        };
      function Oa(e, t, n, r) {
        return (
          e.addEventListener(t, n, r),
          function () {
            return e.removeEventListener(t, n, r);
          }
        );
      }
      function La(t, n, r, o) {
        (0, e.useEffect)(
          function () {
            var e = t.current;
            if (r && e) return Oa(e, n, r, o);
          },
          [t, n, r, o]
        );
      }
      function Ma(e) {
        return 'undefined' !== typeof PointerEvent && e instanceof PointerEvent
          ? !('mouse' !== e.pointerType)
          : e instanceof MouseEvent;
      }
      function Aa(e) {
        return !!e.touches;
      }
      !(function (e) {
        (e.Animate = 'animate'),
          (e.Hover = 'whileHover'),
          (e.Tap = 'whileTap'),
          (e.Drag = 'whileDrag'),
          (e.Focus = 'whileFocus'),
          (e.InView = 'whileInView'),
          (e.Exit = 'exit');
      })(Pa || (Pa = {}));
      var Ra = { pageX: 0, pageY: 0 };
      function Na(e, t) {
        void 0 === t && (t = 'page');
        var n = e.touches[0] || e.changedTouches[0] || Ra;
        return { x: n[t + 'X'], y: n[t + 'Y'] };
      }
      function Va(e, t) {
        return void 0 === t && (t = 'page'), { x: e[t + 'X'], y: e[t + 'Y'] };
      }
      function Da(e, t) {
        return (
          void 0 === t && (t = 'page'), { point: Aa(e) ? Na(e, t) : Va(e, t) }
        );
      }
      var ja = function (e, t) {
          void 0 === t && (t = !1);
          var n,
            r = function (t) {
              return e(t, Da(t));
            };
          return t
            ? ((n = r),
              function (e) {
                var t = e instanceof MouseEvent;
                (!t || (t && 0 === e.button)) && n(e);
              })
            : r;
        },
        Fa = {
          pointerdown: 'mousedown',
          pointermove: 'mousemove',
          pointerup: 'mouseup',
          pointercancel: 'mousecancel',
          pointerover: 'mouseover',
          pointerout: 'mouseout',
          pointerenter: 'mouseenter',
          pointerleave: 'mouseleave',
        },
        za = {
          pointerdown: 'touchstart',
          pointermove: 'touchmove',
          pointerup: 'touchend',
          pointercancel: 'touchcancel',
        };
      function Ia(e) {
        return Te && null === window.onpointerdown
          ? e
          : Te && null === window.ontouchstart
          ? za[e]
          : Te && null === window.onmousedown
          ? Fa[e]
          : e;
      }
      function Ua(e, t, n, r) {
        return Oa(e, Ia(t), ja(n, 'pointerdown' === t), r);
      }
      function Ba(e, t, n, r) {
        return La(e, Ia(t), n && ja(n, 'pointerdown' === t), r);
      }
      function Wa(e) {
        var t = null;
        return function () {
          return (
            null === t &&
            ((t = e),
            function () {
              t = null;
            })
          );
        };
      }
      var Ha = Wa('dragHorizontal'),
        $a = Wa('dragVertical');
      function qa(e) {
        var t = !1;
        if ('y' === e) t = $a();
        else if ('x' === e) t = Ha();
        else {
          var n = Ha(),
            r = $a();
          n && r
            ? (t = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return t;
      }
      function Qa() {
        var e = qa(!0);
        return !e || (e(), !1);
      }
      function Ya(e, t, n) {
        return function (r, o) {
          var a;
          Ma(r) &&
            !Qa() &&
            (null === (a = e.animationState) ||
              void 0 === a ||
              a.setActive(Pa.Hover, t),
            null === n || void 0 === n || n(r, o));
        };
      }
      var Xa = function e(t, n) {
        return !!n && (t === n || e(t, n.parentElement));
      };
      var Ka = new WeakMap(),
        Ga = new WeakMap(),
        Za = function (e) {
          var t;
          null === (t = Ka.get(e.target)) || void 0 === t || t(e);
        },
        Ja = function (e) {
          e.forEach(Za);
        };
      function ei(e, t, n) {
        var r = (function (e) {
          var t = e.root,
            n = G(e, ['root']),
            r = t || document;
          Ga.has(r) || Ga.set(r, {});
          var o = Ga.get(r),
            a = JSON.stringify(n);
          return (
            o[a] || (o[a] = new IntersectionObserver(Ja, K({ root: t }, n))),
            o[a]
          );
        })(t);
        return (
          Ka.set(e, n),
          r.observe(e),
          function () {
            Ka.delete(e), r.unobserve(e);
          }
        );
      }
      var ti = { some: 0, all: 1 };
      function ni(t, n, r, o) {
        var a = o.root,
          i = o.margin,
          l = o.amount,
          u = void 0 === l ? 'some' : l,
          s = o.once;
        (0, e.useEffect)(
          function () {
            if (t) {
              var e = {
                root: null === a || void 0 === a ? void 0 : a.current,
                rootMargin: i,
                threshold: 'number' === typeof u ? u : ti[u],
              };
              return ei(r.getInstance(), e, function (e) {
                var t,
                  o = e.isIntersecting;
                if (
                  n.isInView !== o &&
                  ((n.isInView = o), !s || o || !n.hasEnteredView)
                ) {
                  o && (n.hasEnteredView = !0),
                    null === (t = r.animationState) ||
                      void 0 === t ||
                      t.setActive(Pa.InView, o);
                  var a = r.getProps(),
                    i = o ? a.onViewportEnter : a.onViewportLeave;
                  null === i || void 0 === i || i(e);
                }
              });
            }
          },
          [t, a, i, u]
        );
      }
      function ri(t, n, r, o) {
        var a = o.fallback,
          i = void 0 === a || a;
        (0, e.useEffect)(
          function () {
            t &&
              i &&
              requestAnimationFrame(function () {
                var e;
                n.hasEnteredView = !0;
                var t = r.getProps().onViewportEnter;
                null === t || void 0 === t || t(null),
                  null === (e = r.animationState) ||
                    void 0 === e ||
                    e.setActive(Pa.InView, !0);
              });
          },
          [t]
        );
      }
      var oi = function (e) {
          return function (t) {
            return e(t), null;
          };
        },
        ai = {
          inView: oi(function (t) {
            var n = t.visualElement,
              r = t.whileInView,
              o = t.onViewportEnter,
              a = t.onViewportLeave,
              i = t.viewport,
              l = void 0 === i ? {} : i,
              u = (0, e.useRef)({ hasEnteredView: !1, isInView: !1 }),
              s = Boolean(r || o || a);
            l.once && u.current.hasEnteredView && (s = !1),
              ('undefined' === typeof IntersectionObserver ? ri : ni)(
                s,
                u.current,
                n,
                l
              );
          }),
          tap: oi(function (t) {
            var n = t.onTap,
              r = t.onTapStart,
              o = t.onTapCancel,
              a = t.whileTap,
              i = t.visualElement,
              l = n || r || o || a,
              u = (0, e.useRef)(!1),
              s = (0, e.useRef)(null);
            function c() {
              var e;
              null === (e = s.current) || void 0 === e || e.call(s),
                (s.current = null);
            }
            function f() {
              var e;
              return (
                c(),
                (u.current = !1),
                null === (e = i.animationState) ||
                  void 0 === e ||
                  e.setActive(Pa.Tap, !1),
                !Qa()
              );
            }
            function d(e, t) {
              f() &&
                (Xa(i.getInstance(), e.target)
                  ? null === n || void 0 === n || n(e, t)
                  : null === o || void 0 === o || o(e, t));
            }
            function p(e, t) {
              f() && (null === o || void 0 === o || o(e, t));
            }
            Ba(
              i,
              'pointerdown',
              l
                ? function (e, t) {
                    var n;
                    c(),
                      u.current ||
                        ((u.current = !0),
                        (s.current = on(
                          Ua(window, 'pointerup', d),
                          Ua(window, 'pointercancel', p)
                        )),
                        null === (n = i.animationState) ||
                          void 0 === n ||
                          n.setActive(Pa.Tap, !0),
                        null === r || void 0 === r || r(e, t));
                  }
                : void 0
            ),
              Oe(c);
          }),
          focus: oi(function (e) {
            var t = e.whileFocus,
              n = e.visualElement;
            La(
              n,
              'focus',
              t
                ? function () {
                    var e;
                    null === (e = n.animationState) ||
                      void 0 === e ||
                      e.setActive(Pa.Focus, !0);
                  }
                : void 0
            ),
              La(
                n,
                'blur',
                t
                  ? function () {
                      var e;
                      null === (e = n.animationState) ||
                        void 0 === e ||
                        e.setActive(Pa.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: oi(function (e) {
            var t = e.onHoverStart,
              n = e.onHoverEnd,
              r = e.whileHover,
              o = e.visualElement;
            Ba(o, 'pointerenter', t || r ? Ya(o, !0, t) : void 0),
              Ba(o, 'pointerleave', n || r ? Ya(o, !1, n) : void 0);
          }),
        };
      function ii() {
        var t = (0, e.useContext)(be);
        if (null === t) return [!0, null];
        var n = t.isPresent,
          r = t.onExitComplete,
          o = t.register,
          a = ke();
        (0, e.useEffect)(function () {
          return o(a);
        }, []);
        return !n && r
          ? [
              !1,
              function () {
                return null === r || void 0 === r ? void 0 : r(a);
              },
            ]
          : [!0];
      }
      function li(e, t) {
        if (!Array.isArray(t)) return !1;
        var n = t.length;
        if (n !== e.length) return !1;
        for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      var ui = function (e) {
          return /^0[^.\s]+$/.test(e);
        },
        si = function (e) {
          return function (t) {
            return t.test(e);
          };
        },
        ci = [
          Et,
          Vt,
          Nt,
          Rt,
          jt,
          Dt,
          {
            test: function (e) {
              return 'auto' === e;
            },
            parse: function (e) {
              return e;
            },
          },
        ],
        fi = function (e) {
          return ci.find(si(e));
        },
        di = ee(ee([], J(ci), !1), [Yt, tn], !1),
        pi = function (e) {
          return di.find(si(e));
        };
      function vi(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ot(n));
      }
      function hi(e, t) {
        var n = Qe(e, t),
          r = n ? e.makeTargetAnimatable(n, !1) : {},
          o = r.transitionEnd,
          a = void 0 === o ? {} : o;
        r.transition;
        var i = G(r, ['transitionEnd', 'transition']);
        for (var l in (i = K(K({}, i), a))) {
          vi(e, l, dr(i[l]));
        }
      }
      function mi(e, t) {
        if (t) return (t[e] || t.default || t).from;
      }
      function gi(e, t, n) {
        var r;
        void 0 === n && (n = {});
        var o = Qe(e, t, n.custom),
          a = (o || {}).transition,
          i = void 0 === a ? e.getDefaultTransition() || {} : a;
        n.transitionOverride && (i = n.transitionOverride);
        var l = o
            ? function () {
                return yi(e, o, n);
              }
            : function () {
                return Promise.resolve();
              },
          u = (
            null === (r = e.variantChildren) || void 0 === r ? void 0 : r.size
          )
            ? function (r) {
                void 0 === r && (r = 0);
                var o = i.delayChildren,
                  a = void 0 === o ? 0 : o,
                  l = i.staggerChildren,
                  u = i.staggerDirection;
                return (function (e, t, n, r, o, a) {
                  void 0 === n && (n = 0);
                  void 0 === r && (r = 0);
                  void 0 === o && (o = 1);
                  var i = [],
                    l = (e.variantChildren.size - 1) * r,
                    u =
                      1 === o
                        ? function (e) {
                            return void 0 === e && (e = 0), e * r;
                          }
                        : function (e) {
                            return void 0 === e && (e = 0), l - e * r;
                          };
                  return (
                    Array.from(e.variantChildren)
                      .sort(bi)
                      .forEach(function (e, r) {
                        i.push(
                          gi(e, t, K(K({}, a), { delay: n + u(r) })).then(
                            function () {
                              return e.notifyAnimationComplete(t);
                            }
                          )
                        );
                      }),
                    Promise.all(i)
                  );
                })(e, t, a + r, l, u, n);
              }
            : function () {
                return Promise.resolve();
              },
          s = i.when;
        if (s) {
          var c = J('beforeChildren' === s ? [l, u] : [u, l], 2),
            f = c[0],
            d = c[1];
          return f().then(d);
        }
        return Promise.all([l(), u(n.delay)]);
      }
      function yi(e, t, n) {
        var r,
          o = void 0 === n ? {} : n,
          a = o.delay,
          i = void 0 === a ? 0 : a,
          l = o.transitionOverride,
          u = o.type,
          s = e.makeTargetAnimatable(t),
          c = s.transition,
          f = void 0 === c ? e.getDefaultTransition() : c,
          d = s.transitionEnd,
          p = G(s, ['transition', 'transitionEnd']);
        l && (f = l);
        var v = [],
          h =
            u &&
            (null === (r = e.animationState) || void 0 === r
              ? void 0
              : r.getState()[u]);
        for (var m in p) {
          var g = e.getValue(m),
            y = p[m];
          if (!(!g || void 0 === y || (h && wi(h, m)))) {
            var b = K({ delay: i }, f);
            e.shouldReduceMotion &&
              go(m) &&
              (b = K(K({}, b), { type: !1, delay: 0 }));
            var w = br(m, g, y, b);
            v.push(w);
          }
        }
        return Promise.all(v).then(function () {
          d && hi(e, d);
        });
      }
      function bi(e, t) {
        return e.sortNodePosition(t);
      }
      function wi(e, t) {
        var n = e.protectedKeys,
          r = e.needsAnimating,
          o = n.hasOwnProperty(t) && !0 !== r[t];
        return (r[t] = !1), o;
      }
      var xi = [
          Pa.Animate,
          Pa.InView,
          Pa.Focus,
          Pa.Hover,
          Pa.Tap,
          Pa.Drag,
          Pa.Exit,
        ],
        Ei = ee([], J(xi), !1).reverse(),
        ki = xi.length;
      function Si(e) {
        return function (t) {
          return Promise.all(
            t.map(function (t) {
              var n = t.animation,
                r = t.options;
              return (function (e, t, n) {
                var r;
                if (
                  (void 0 === n && (n = {}),
                  e.notifyAnimationStart(t),
                  Array.isArray(t))
                ) {
                  var o = t.map(function (t) {
                    return gi(e, t, n);
                  });
                  r = Promise.all(o);
                } else if ('string' === typeof t) r = gi(e, t, n);
                else {
                  var a = 'function' === typeof t ? Qe(e, t, n.custom) : t;
                  r = yi(e, a, n);
                }
                return r.then(function () {
                  return e.notifyAnimationComplete(t);
                });
              })(e, n, r);
            })
          );
        };
      }
      function Ci(e) {
        var t = Si(e),
          n = (function () {
            var e;
            return (
              ((e = {})[Pa.Animate] = Pi(!0)),
              (e[Pa.InView] = Pi()),
              (e[Pa.Hover] = Pi()),
              (e[Pa.Tap] = Pi()),
              (e[Pa.Drag] = Pi()),
              (e[Pa.Focus] = Pi()),
              (e[Pa.Exit] = Pi()),
              e
            );
          })(),
          r = {},
          o = !0,
          a = function (t, n) {
            var r = Qe(e, n);
            if (r) {
              r.transition;
              var o = r.transitionEnd,
                a = G(r, ['transition', 'transitionEnd']);
              t = K(K(K({}, t), a), o);
            }
            return t;
          };
        function i(i, l) {
          for (
            var u,
              s = e.getProps(),
              c = e.getVariantContext(!0) || {},
              f = [],
              d = new Set(),
              p = {},
              v = 1 / 0,
              h = function (t) {
                var r = Ei[t],
                  h = n[r],
                  m = null !== (u = s[r]) && void 0 !== u ? u : c[r],
                  g = $e(m),
                  y = r === l ? h.isActive : null;
                !1 === y && (v = t);
                var b = m === c[r] && m !== s[r] && g;
                if (
                  (b && o && e.manuallyAnimateOnMount && (b = !1),
                  (h.protectedKeys = K({}, p)),
                  (!h.isActive && null === y) ||
                    (!m && !h.prevProp) ||
                    Ea(m) ||
                    'boolean' === typeof m)
                )
                  return 'continue';
                var w = (function (e, t) {
                    if ('string' === typeof t) return t !== e;
                    if (He(t)) return !li(t, e);
                    return !1;
                  })(h.prevProp, m),
                  x = w || (r === l && h.isActive && !b && g) || (t > v && g),
                  E = Array.isArray(m) ? m : [m],
                  k = E.reduce(a, {});
                !1 === y && (k = {});
                var S = h.prevResolvedValues,
                  C = void 0 === S ? {} : S,
                  P = K(K({}, C), k),
                  T = function (e) {
                    (x = !0), d.delete(e), (h.needsAnimating[e] = !0);
                  };
                for (var _ in P) {
                  var O = k[_],
                    L = C[_];
                  p.hasOwnProperty(_) ||
                    (O !== L
                      ? Kn(O) && Kn(L)
                        ? !li(O, L) || w
                          ? T(_)
                          : (h.protectedKeys[_] = !0)
                        : void 0 !== O
                        ? T(_)
                        : d.add(_)
                      : void 0 !== O && d.has(_)
                      ? T(_)
                      : (h.protectedKeys[_] = !0));
                }
                (h.prevProp = m),
                  (h.prevResolvedValues = k),
                  h.isActive && (p = K(K({}, p), k)),
                  o && e.blockInitialAnimation && (x = !1),
                  x &&
                    !b &&
                    f.push.apply(
                      f,
                      ee(
                        [],
                        J(
                          E.map(function (e) {
                            return { animation: e, options: K({ type: r }, i) };
                          })
                        ),
                        !1
                      )
                    );
              },
              m = 0;
            m < ki;
            m++
          )
            h(m);
          if (((r = K({}, p)), d.size)) {
            var g = {};
            d.forEach(function (t) {
              var n = e.getBaseTarget(t);
              void 0 !== n && (g[t] = n);
            }),
              f.push({ animation: g });
          }
          var y = Boolean(f.length);
          return (
            o && !1 === s.initial && !e.manuallyAnimateOnMount && (y = !1),
            (o = !1),
            y ? t(f) : Promise.resolve()
          );
        }
        return {
          isAnimated: function (e) {
            return void 0 !== r[e];
          },
          animateChanges: i,
          setActive: function (t, r, o) {
            var a;
            return n[t].isActive === r
              ? Promise.resolve()
              : (null === (a = e.variantChildren) ||
                  void 0 === a ||
                  a.forEach(function (e) {
                    var n;
                    return null === (n = e.animationState) || void 0 === n
                      ? void 0
                      : n.setActive(t, r);
                  }),
                (n[t].isActive = r),
                i(o, t));
          },
          setAnimateFunction: function (n) {
            t = n(e);
          },
          getState: function () {
            return n;
          },
        };
      }
      function Pi(e) {
        return (
          void 0 === e && (e = !1),
          {
            isActive: e,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var Ti = {
          animation: oi(function (t) {
            var n = t.visualElement,
              r = t.animate;
            n.animationState || (n.animationState = Ci(n)),
              Ea(r) &&
                (0, e.useEffect)(
                  function () {
                    return r.subscribe(n);
                  },
                  [r]
                );
          }),
          exit: oi(function (t) {
            var n = t.custom,
              r = t.visualElement,
              o = J(ii(), 2),
              a = o[0],
              i = o[1],
              l = (0, e.useContext)(be);
            (0, e.useEffect)(
              function () {
                var e, t;
                r.isPresent = a;
                var o =
                  null === (e = r.animationState) || void 0 === e
                    ? void 0
                    : e.setActive(Pa.Exit, !a, {
                        custom:
                          null !==
                            (t =
                              null === l || void 0 === l ? void 0 : l.custom) &&
                          void 0 !== t
                            ? t
                            : n,
                      });
                !a && (null === o || void 0 === o || o.then(i));
              },
              [a]
            );
          }),
        },
        _i = (function () {
          function e(e, t, n) {
            var r = this,
              o = (void 0 === n ? {} : n).transformPagePoint;
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = function () {
                if (r.lastMoveEvent && r.lastMoveEventInfo) {
                  var e = Mi(r.lastMoveEventInfo, r.history),
                    t = null !== r.startEvent,
                    n = qr(e.offset, { x: 0, y: 0 }) >= 3;
                  if (t || n) {
                    var o = e.point,
                      a = me().timestamp;
                    r.history.push(K(K({}, o), { timestamp: a }));
                    var i = r.handlers,
                      l = i.onStart,
                      u = i.onMove;
                    t ||
                      (l && l(r.lastMoveEvent, e),
                      (r.startEvent = r.lastMoveEvent)),
                      u && u(r.lastMoveEvent, e);
                  }
                }
              }),
              (this.handlePointerMove = function (e, t) {
                (r.lastMoveEvent = e),
                  (r.lastMoveEventInfo = Oi(t, r.transformPagePoint)),
                  Ma(e) && 0 === e.buttons
                    ? r.handlePointerUp(e, t)
                    : ge.update(r.updatePoint, !0);
              }),
              (this.handlePointerUp = function (e, t) {
                r.end();
                var n = r.handlers,
                  o = n.onEnd,
                  a = n.onSessionEnd,
                  i = Mi(Oi(t, r.transformPagePoint), r.history);
                r.startEvent && o && o(e, i), a && a(e, i);
              }),
              !(Aa(e) && e.touches.length > 1))
            ) {
              (this.handlers = t), (this.transformPagePoint = o);
              var a = Oi(Da(e), this.transformPagePoint),
                i = a.point,
                l = me().timestamp;
              this.history = [K(K({}, i), { timestamp: l })];
              var u = t.onSessionStart;
              u && u(e, Mi(a, this.history)),
                (this.removeListeners = on(
                  Ua(window, 'pointermove', this.handlePointerMove),
                  Ua(window, 'pointerup', this.handlePointerUp),
                  Ua(window, 'pointercancel', this.handlePointerUp)
                ));
            }
          }
          return (
            (e.prototype.updateHandlers = function (e) {
              this.handlers = e;
            }),
            (e.prototype.end = function () {
              this.removeListeners && this.removeListeners(),
                fe.update(this.updatePoint);
            }),
            e
          );
        })();
      function Oi(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function Li(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function Mi(e, t) {
        var n = e.point;
        return {
          point: n,
          delta: Li(n, Ri(t)),
          offset: Li(n, Ai(t)),
          velocity: Ni(t, 0.1),
        };
      }
      function Ai(e) {
        return e[0];
      }
      function Ri(e) {
        return e[e.length - 1];
      }
      function Ni(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        for (
          var n = e.length - 1, r = null, o = Ri(e);
          n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > zn(t)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var a = (o.timestamp - r.timestamp) / 1e3;
        if (0 === a) return { x: 0, y: 0 };
        var i = { x: (o.x - r.x) / a, y: (o.y - r.y) / a };
        return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
      }
      function Vi(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function Di(e, t) {
        var n,
          r = t.min - e.min,
          o = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min &&
            ((r = (n = J([o, r], 2))[0]), (o = n[1])),
          { min: r, max: o }
        );
      }
      var ji = 0.35;
      function Fi(e, t, n) {
        return { min: zi(e, t), max: zi(e, n) };
      }
      function zi(e, t) {
        var n;
        return 'number' === typeof e
          ? e
          : null !== (n = e[t]) && void 0 !== n
          ? n
          : 0;
      }
      function Ii(e) {
        var t = e.top;
        return {
          x: { min: e.left, max: e.right },
          y: { min: t, max: e.bottom },
        };
      }
      function Ui(e, t) {
        return Ii(
          (function (e, t) {
            if (!t) return e;
            var n = t({ x: e.left, y: e.top }),
              r = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      var Bi = new WeakMap(),
        Wi = (function () {
          function e(e) {
            (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = e);
          }
          return (
            (e.prototype.start = function (e, t) {
              var n = this,
                r = (void 0 === t ? {} : t).snapToCursor,
                o = void 0 !== r && r;
              if (!1 !== this.visualElement.isPresent) {
                this.panSession = new _i(
                  e,
                  {
                    onSessionStart: function (e) {
                      n.stopAnimation(),
                        o && n.snapToCursor(Da(e, 'page').point);
                    },
                    onStart: function (e, t) {
                      var r,
                        o = n.getProps(),
                        a = o.drag,
                        i = o.dragPropagation,
                        l = o.onDragStart;
                      (!a ||
                        i ||
                        (n.openGlobalLock && n.openGlobalLock(),
                        (n.openGlobalLock = qa(a)),
                        n.openGlobalLock)) &&
                        ((n.isDragging = !0),
                        (n.currentDirection = null),
                        n.resolveConstraints(),
                        n.visualElement.projection &&
                          ((n.visualElement.projection.isAnimationBlocked = !0),
                          (n.visualElement.projection.target = void 0)),
                        fo(function (e) {
                          var t,
                            r,
                            o = n.getAxisMotionValue(e).get() || 0;
                          if (Nt.test(o)) {
                            var a =
                              null ===
                                (r =
                                  null === (t = n.visualElement.projection) ||
                                  void 0 === t
                                    ? void 0
                                    : t.layout) || void 0 === r
                                ? void 0
                                : r.actual[e];
                            if (a) o = Qr(a) * (parseFloat(o) / 100);
                          }
                          n.originPoint[e] = o;
                        }),
                        null === l || void 0 === l || l(e, t),
                        null === (r = n.visualElement.animationState) ||
                          void 0 === r ||
                          r.setActive(Pa.Drag, !0));
                    },
                    onMove: function (e, t) {
                      var r = n.getProps(),
                        o = r.dragPropagation,
                        a = r.dragDirectionLock,
                        i = r.onDirectionLock,
                        l = r.onDrag;
                      if (o || n.openGlobalLock) {
                        var u = t.offset;
                        if (a && null === n.currentDirection)
                          return (
                            (n.currentDirection = (function (e, t) {
                              void 0 === t && (t = 10);
                              var n = null;
                              Math.abs(e.y) > t
                                ? (n = 'y')
                                : Math.abs(e.x) > t && (n = 'x');
                              return n;
                            })(u)),
                            void (
                              null !== n.currentDirection &&
                              (null === i ||
                                void 0 === i ||
                                i(n.currentDirection))
                            )
                          );
                        n.updateAxis('x', t.point, u),
                          n.updateAxis('y', t.point, u),
                          n.visualElement.syncRender(),
                          null === l || void 0 === l || l(e, t);
                      }
                    },
                    onSessionEnd: function (e, t) {
                      return n.stop(e, t);
                    },
                  },
                  {
                    transformPagePoint:
                      this.visualElement.getTransformPagePoint(),
                  }
                );
              }
            }),
            (e.prototype.stop = function (e, t) {
              var n = this.isDragging;
              if ((this.cancel(), n)) {
                var r = t.velocity;
                this.startAnimation(r);
                var o = this.getProps().onDragEnd;
                null === o || void 0 === o || o(e, t);
              }
            }),
            (e.prototype.cancel = function () {
              var e, t;
              (this.isDragging = !1),
                this.visualElement.projection &&
                  (this.visualElement.projection.isAnimationBlocked = !1),
                null === (e = this.panSession) || void 0 === e || e.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (t = this.visualElement.animationState) ||
                  void 0 === t ||
                  t.setActive(Pa.Drag, !1);
            }),
            (e.prototype.updateAxis = function (e, t, n) {
              var r = this.getProps().drag;
              if (n && Hi(e, r, this.currentDirection)) {
                var o = this.getAxisMotionValue(e),
                  a = this.originPoint[e] + n[e];
                this.constraints &&
                  this.constraints[e] &&
                  (a = (function (e, t, n) {
                    var r = t.min,
                      o = t.max;
                    return (
                      void 0 !== r && e < r
                        ? (e = n ? Ze(r, e, n.min) : Math.max(e, r))
                        : void 0 !== o &&
                          e > o &&
                          (e = n ? Ze(o, e, n.max) : Math.min(e, o)),
                      e
                    );
                  })(a, this.constraints[e], this.elastic[e])),
                  o.set(a);
              }
            }),
            (e.prototype.resolveConstraints = function () {
              var e = this,
                t = this.getProps(),
                n = t.dragConstraints,
                r = t.dragElastic,
                o = (this.visualElement.projection || {}).layout,
                a = this.constraints;
              n && We(n)
                ? this.constraints ||
                  (this.constraints = this.resolveRefConstraints())
                : (this.constraints =
                    !(!n || !o) &&
                    (function (e, t) {
                      var n = t.top,
                        r = t.left,
                        o = t.bottom,
                        a = t.right;
                      return { x: Vi(e.x, r, a), y: Vi(e.y, n, o) };
                    })(o.actual, n)),
                (this.elastic = (function (e) {
                  return (
                    void 0 === e && (e = ji),
                    !1 === e ? (e = 0) : !0 === e && (e = ji),
                    { x: Fi(e, 'left', 'right'), y: Fi(e, 'top', 'bottom') }
                  );
                })(r)),
                a !== this.constraints &&
                  o &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  fo(function (t) {
                    e.getAxisMotionValue(t) &&
                      (e.constraints[t] = (function (e, t) {
                        var n = {};
                        return (
                          void 0 !== t.min && (n.min = t.min - e.min),
                          void 0 !== t.max && (n.max = t.max - e.min),
                          n
                        );
                      })(o.actual[t], e.constraints[t]));
                  });
            }),
            (e.prototype.resolveRefConstraints = function () {
              var e = this.getProps(),
                t = e.dragConstraints,
                n = e.onMeasureDragConstraints;
              if (!t || !We(t)) return !1;
              var r = t.current,
                o = this.visualElement.projection;
              if (!o || !o.layout) return !1;
              var a = (function (e, t, n) {
                  var r = Ui(e, n),
                    o = t.scroll;
                  return o && (Fr(r.x, o.x), Fr(r.y, o.y)), r;
                })(r, o.root, this.visualElement.getTransformPagePoint()),
                i = (function (e, t) {
                  return { x: Di(e.x, t.x), y: Di(e.y, t.y) };
                })(o.layout.actual, a);
              if (n) {
                var l = n(
                  (function (e) {
                    var t = e.x,
                      n = e.y;
                    return {
                      top: n.min,
                      right: t.max,
                      bottom: n.max,
                      left: t.min,
                    };
                  })(i)
                );
                (this.hasMutatedConstraints = !!l), l && (i = Ii(l));
              }
              return i;
            }),
            (e.prototype.startAnimation = function (e) {
              var t = this,
                n = this.getProps(),
                r = n.drag,
                o = n.dragMomentum,
                a = n.dragElastic,
                i = n.dragTransition,
                l = n.dragSnapToOrigin,
                u = n.onDragTransitionEnd,
                s = this.constraints || {},
                c = fo(function (n) {
                  var u;
                  if (Hi(n, r, t.currentDirection)) {
                    var c =
                      null !==
                        (u = null === s || void 0 === s ? void 0 : s[n]) &&
                      void 0 !== u
                        ? u
                        : {};
                    l && (c = { min: 0, max: 0 });
                    var f = a ? 200 : 1e6,
                      d = a ? 40 : 1e7,
                      p = K(
                        K(
                          {
                            type: 'inertia',
                            velocity: o ? e[n] : 0,
                            bounceStiffness: f,
                            bounceDamping: d,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                          },
                          i
                        ),
                        c
                      );
                    return t.startAxisValueAnimation(n, p);
                  }
                });
              return Promise.all(c).then(u);
            }),
            (e.prototype.startAxisValueAnimation = function (e, t) {
              return br(e, this.getAxisMotionValue(e), 0, t);
            }),
            (e.prototype.stopAnimation = function () {
              var e = this;
              fo(function (t) {
                return e.getAxisMotionValue(t).stop();
              });
            }),
            (e.prototype.getAxisMotionValue = function (e) {
              var t,
                n,
                r = '_drag' + e.toUpperCase(),
                o = this.visualElement.getProps()[r];
              return (
                o ||
                this.visualElement.getValue(
                  e,
                  null !==
                    (n =
                      null === (t = this.visualElement.getProps().initial) ||
                      void 0 === t
                        ? void 0
                        : t[e]) && void 0 !== n
                    ? n
                    : 0
                )
              );
            }),
            (e.prototype.snapToCursor = function (e) {
              var t = this;
              fo(function (n) {
                if (Hi(n, t.getProps().drag, t.currentDirection)) {
                  var r = t.visualElement.projection,
                    o = t.getAxisMotionValue(n);
                  if (r && r.layout) {
                    var a = r.layout.actual[n],
                      i = a.min,
                      l = a.max;
                    o.set(e[n] - Ze(i, l, 0.5));
                  }
                }
              });
            }),
            (e.prototype.scalePositionWithinConstraints = function () {
              var e,
                t = this,
                n = this.getProps(),
                r = n.drag,
                o = n.dragConstraints,
                a = this.visualElement.projection;
              if (We(o) && a && this.constraints) {
                this.stopAnimation();
                var i = { x: 0, y: 0 };
                fo(function (e) {
                  var n = t.getAxisMotionValue(e);
                  if (n) {
                    var r = n.get();
                    i[e] = (function (e, t) {
                      var n = 0.5,
                        r = Qr(e),
                        o = Qr(t);
                      return (
                        o > r
                          ? (n = ht(t.min, t.max - r, e.min))
                          : r > o && (n = ht(e.min, e.max - o, t.min)),
                        it(0, 1, n)
                      );
                    })({ min: r, max: r }, t.constraints[e]);
                  }
                });
                var l = this.visualElement.getProps().transformTemplate;
                (this.visualElement.getInstance().style.transform = l
                  ? l({}, '')
                  : 'none'),
                  null === (e = a.root) || void 0 === e || e.updateScroll(),
                  a.updateLayout(),
                  this.resolveConstraints(),
                  fo(function (e) {
                    if (Hi(e, r, null)) {
                      var n = t.getAxisMotionValue(e),
                        o = t.constraints[e],
                        a = o.min,
                        l = o.max;
                      n.set(Ze(a, l, i[e]));
                    }
                  });
              }
            }),
            (e.prototype.addListeners = function () {
              var e,
                t = this;
              Bi.set(this.visualElement, this);
              var n = Ua(
                  this.visualElement.getInstance(),
                  'pointerdown',
                  function (e) {
                    var n = t.getProps(),
                      r = n.drag,
                      o = n.dragListener;
                    r && (void 0 === o || o) && t.start(e);
                  }
                ),
                r = function () {
                  We(t.getProps().dragConstraints) &&
                    (t.constraints = t.resolveRefConstraints());
                },
                o = this.visualElement.projection,
                a = o.addEventListener('measure', r);
              o &&
                !o.layout &&
                (null === (e = o.root) || void 0 === e || e.updateScroll(),
                o.updateLayout()),
                r();
              var i = Oa(window, 'resize', function () {
                t.scalePositionWithinConstraints();
              });
              return (
                o.addEventListener('didUpdate', function (e) {
                  var n = e.delta,
                    r = e.hasLayoutChanged;
                  t.isDragging &&
                    r &&
                    (fo(function (e) {
                      var r = t.getAxisMotionValue(e);
                      r &&
                        ((t.originPoint[e] += n[e].translate),
                        r.set(r.get() + n[e].translate));
                    }),
                    t.visualElement.syncRender());
                }),
                function () {
                  i(), n(), a();
                }
              );
            }),
            (e.prototype.getProps = function () {
              var e = this.visualElement.getProps(),
                t = e.drag,
                n = void 0 !== t && t,
                r = e.dragDirectionLock,
                o = void 0 !== r && r,
                a = e.dragPropagation,
                i = void 0 !== a && a,
                l = e.dragConstraints,
                u = void 0 !== l && l,
                s = e.dragElastic,
                c = void 0 === s ? ji : s,
                f = e.dragMomentum,
                d = void 0 === f || f;
              return K(K({}, e), {
                drag: n,
                dragDirectionLock: o,
                dragPropagation: i,
                dragConstraints: u,
                dragElastic: c,
                dragMomentum: d,
              });
            }),
            e
          );
        })();
      function Hi(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      var $i = {
          pan: oi(function (t) {
            var n = t.onPan,
              r = t.onPanStart,
              o = t.onPanEnd,
              a = t.onPanSessionStart,
              i = t.visualElement,
              l = n || r || o || a,
              u = (0, e.useRef)(null),
              s = (0, e.useContext)(je).transformPagePoint,
              c = {
                onSessionStart: a,
                onStart: r,
                onMove: n,
                onEnd: function (e, t) {
                  (u.current = null), o && o(e, t);
                },
              };
            (0, e.useEffect)(function () {
              null !== u.current && u.current.updateHandlers(c);
            }),
              Ba(
                i,
                'pointerdown',
                l &&
                  function (e) {
                    u.current = new _i(e, c, { transformPagePoint: s });
                  }
              ),
              Oe(function () {
                return u.current && u.current.end();
              });
          }),
          drag: oi(function (t) {
            var n = t.dragControls,
              r = t.visualElement,
              o = we(function () {
                return new Wi(r);
              });
            (0, e.useEffect)(
              function () {
                return n && n.subscribe(o);
              },
              [o, n]
            ),
              (0, e.useEffect)(
                function () {
                  return o.addListeners();
                },
                [o]
              );
          }),
        },
        qi = [
          'LayoutMeasure',
          'BeforeLayoutMeasure',
          'LayoutUpdate',
          'ViewportBoxUpdate',
          'Update',
          'Render',
          'AnimationComplete',
          'LayoutAnimationComplete',
          'AnimationStart',
          'SetAxisTarget',
          'Unmount',
        ];
      var Qi = function (e) {
          var t = e.treeType,
            n = void 0 === t ? '' : t,
            r = e.build,
            o = e.getBaseTarget,
            a = e.makeTargetAnimatable,
            i = e.measureViewportBox,
            l = e.render,
            u = e.readValueFromInstance,
            s = e.removeValueFromRenderState,
            c = e.sortNodePosition,
            f = e.scrapeMotionValuesFromProps;
          return function (e, t) {
            var d = e.parent,
              p = e.props,
              v = e.presenceId,
              h = e.blockInitialAnimation,
              m = e.visualState,
              g = e.shouldReduceMotion;
            void 0 === t && (t = {});
            var y,
              b,
              w = !1,
              x = m.latestValues,
              E = m.renderState,
              k = (function () {
                var e = qi.map(function () {
                    return new nt();
                  }),
                  t = {},
                  n = {
                    clearAllListeners: function () {
                      return e.forEach(function (e) {
                        return e.clear();
                      });
                    },
                    updatePropListeners: function (e) {
                      qi.forEach(function (r) {
                        var o,
                          a = 'on' + r,
                          i = e[a];
                        null === (o = t[r]) || void 0 === o || o.call(t),
                          i && (t[r] = n[a](i));
                      });
                    },
                  };
                return (
                  e.forEach(function (e, t) {
                    (n['on' + qi[t]] = function (t) {
                      return e.add(t);
                    }),
                      (n['notify' + qi[t]] = function () {
                        for (var t = [], n = 0; n < arguments.length; n++)
                          t[n] = arguments[n];
                        return e.notify.apply(e, ee([], J(t), !1));
                      });
                  }),
                  n
                );
              })(),
              S = new Map(),
              C = new Map(),
              P = {},
              T = K({}, x);
            function _() {
              y && w && (O(), l(y, E, p.style, j.projection));
            }
            function O() {
              r(j, E, x, t, p);
            }
            function L() {
              k.notifyUpdate(x);
            }
            function M(e, t) {
              var n = t.onChange(function (t) {
                  (x[e] = t), p.onUpdate && ge.update(L, !1, !0);
                }),
                r = t.onRenderRequest(j.scheduleRender);
              C.set(e, function () {
                n(), r();
              });
            }
            var A = f(p);
            for (var R in A) {
              var N = A[R];
              void 0 !== x[R] && at(N) && N.set(x[R], !1);
            }
            var V = Ye(p),
              D = Xe(p),
              j = K(
                K(
                  {
                    treeType: n,
                    current: null,
                    depth: d ? d.depth + 1 : 0,
                    parent: d,
                    children: new Set(),
                    presenceId: v,
                    shouldReduceMotion: g,
                    variantChildren: D ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(
                      null === d || void 0 === d ? void 0 : d.isMounted()
                    ),
                    blockInitialAnimation: h,
                    isMounted: function () {
                      return Boolean(y);
                    },
                    mount: function (e) {
                      (w = !0),
                        (y = j.current = e),
                        j.projection && j.projection.mount(e),
                        D &&
                          d &&
                          !V &&
                          (b =
                            null === d || void 0 === d
                              ? void 0
                              : d.addVariantChild(j)),
                        S.forEach(function (e, t) {
                          return M(t, e);
                        }),
                        null === d || void 0 === d || d.children.add(j),
                        j.setProps(p);
                    },
                    unmount: function () {
                      var e;
                      null === (e = j.projection) ||
                        void 0 === e ||
                        e.unmount(),
                        fe.update(L),
                        fe.render(_),
                        C.forEach(function (e) {
                          return e();
                        }),
                        null === b || void 0 === b || b(),
                        null === d || void 0 === d || d.children.delete(j),
                        k.clearAllListeners(),
                        (y = void 0),
                        (w = !1);
                    },
                    addVariantChild: function (e) {
                      var t,
                        n = j.getClosestVariantNode();
                      if (n)
                        return (
                          null === (t = n.variantChildren) ||
                            void 0 === t ||
                            t.add(e),
                          function () {
                            return n.variantChildren.delete(e);
                          }
                        );
                    },
                    sortNodePosition: function (e) {
                      return c && n === e.treeType
                        ? c(j.getInstance(), e.getInstance())
                        : 0;
                    },
                    getClosestVariantNode: function () {
                      return D
                        ? j
                        : null === d || void 0 === d
                        ? void 0
                        : d.getClosestVariantNode();
                    },
                    getLayoutId: function () {
                      return p.layoutId;
                    },
                    getInstance: function () {
                      return y;
                    },
                    getStaticValue: function (e) {
                      return x[e];
                    },
                    setStaticValue: function (e, t) {
                      return (x[e] = t);
                    },
                    getLatestValues: function () {
                      return x;
                    },
                    setVisibility: function (e) {
                      j.isVisible !== e &&
                        ((j.isVisible = e), j.scheduleRender());
                    },
                    makeTargetAnimatable: function (e, t) {
                      return void 0 === t && (t = !0), a(j, e, p, t);
                    },
                    measureViewportBox: function () {
                      return i(y, p);
                    },
                    addValue: function (e, t) {
                      j.hasValue(e) && j.removeValue(e),
                        S.set(e, t),
                        (x[e] = t.get()),
                        M(e, t);
                    },
                    removeValue: function (e) {
                      var t;
                      S.delete(e),
                        null === (t = C.get(e)) || void 0 === t || t(),
                        C.delete(e),
                        delete x[e],
                        s(e, E);
                    },
                    hasValue: function (e) {
                      return S.has(e);
                    },
                    getValue: function (e, t) {
                      var n = S.get(e);
                      return (
                        void 0 === n &&
                          void 0 !== t &&
                          ((n = ot(t)), j.addValue(e, n)),
                        n
                      );
                    },
                    forEachValue: function (e) {
                      return S.forEach(e);
                    },
                    readValue: function (e) {
                      var n;
                      return null !== (n = x[e]) && void 0 !== n
                        ? n
                        : u(y, e, t);
                    },
                    setBaseTarget: function (e, t) {
                      T[e] = t;
                    },
                    getBaseTarget: function (e) {
                      if (o) {
                        var t = o(p, e);
                        if (void 0 !== t && !at(t)) return t;
                      }
                      return T[e];
                    },
                  },
                  k
                ),
                {
                  build: function () {
                    return O(), E;
                  },
                  scheduleRender: function () {
                    ge.render(_, !1, !0);
                  },
                  syncRender: _,
                  setProps: function (e) {
                    (e.transformTemplate || p.transformTemplate) &&
                      j.scheduleRender(),
                      (p = e),
                      k.updatePropListeners(e),
                      (P = (function (e, t, n) {
                        var r;
                        for (var o in t) {
                          var a = t[o],
                            i = n[o];
                          if (at(a)) e.addValue(o, a);
                          else if (at(i)) e.addValue(o, ot(a));
                          else if (i !== a)
                            if (e.hasValue(o)) {
                              var l = e.getValue(o);
                              !l.hasAnimated && l.set(a);
                            } else
                              e.addValue(
                                o,
                                ot(
                                  null !== (r = e.getStaticValue(o)) &&
                                    void 0 !== r
                                    ? r
                                    : a
                                )
                              );
                        }
                        for (var o in n) void 0 === t[o] && e.removeValue(o);
                        return t;
                      })(j, f(p), P));
                  },
                  getProps: function () {
                    return p;
                  },
                  getVariant: function (e) {
                    var t;
                    return null === (t = p.variants) || void 0 === t
                      ? void 0
                      : t[e];
                  },
                  getDefaultTransition: function () {
                    return p.transition;
                  },
                  getTransformPagePoint: function () {
                    return p.transformPagePoint;
                  },
                  getVariantContext: function (e) {
                    if ((void 0 === e && (e = !1), e))
                      return null === d || void 0 === d
                        ? void 0
                        : d.getVariantContext();
                    if (!V) {
                      var t =
                        (null === d || void 0 === d
                          ? void 0
                          : d.getVariantContext()) || {};
                      return void 0 !== p.initial && (t.initial = p.initial), t;
                    }
                    for (var n = {}, r = 0; r < Xi; r++) {
                      var o = Yi[r],
                        a = p[o];
                      ($e(a) || !1 === a) && (n[o] = a);
                    }
                    return n;
                  },
                }
              );
            return j;
          };
        },
        Yi = ee(['initial'], J(xi), !1),
        Xi = Yi.length;
      function Ki(e) {
        return 'string' === typeof e && e.startsWith('var(--');
      }
      var Gi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function Zi(e, t, n) {
        void 0 === n && (n = 1),
          'Max CSS variable fallback depth detected in property "'.concat(
            e,
            '". This may indicate a circular fallback dependency.'
          );
        var r = J(
            (function (e) {
              var t = Gi.exec(e);
              if (!t) return [,];
              var n = J(t, 3);
              return [n[1], n[2]];
            })(e),
            2
          ),
          o = r[0],
          a = r[1];
        if (o) {
          var i = window.getComputedStyle(t).getPropertyValue(o);
          return i ? i.trim() : Ki(a) ? Zi(a, t, n + 1) : a;
        }
      }
      var Ji,
        el = new Set([
          'width',
          'height',
          'top',
          'left',
          'right',
          'bottom',
          'x',
          'y',
        ]),
        tl = function (e) {
          return el.has(e);
        },
        nl = function (e, t) {
          e.set(t, !1), e.set(t);
        },
        rl = function (e) {
          return e === Et || e === Vt;
        };
      !(function (e) {
        (e.width = 'width'),
          (e.height = 'height'),
          (e.left = 'left'),
          (e.right = 'right'),
          (e.top = 'top'),
          (e.bottom = 'bottom');
      })(Ji || (Ji = {}));
      var ol = function (e, t) {
          return parseFloat(e.split(', ')[t]);
        },
        al = function (e, t) {
          return function (n, r) {
            var o = r.transform;
            if ('none' === o || !o) return 0;
            var a = o.match(/^matrix3d\((.+)\)$/);
            if (a) return ol(a[1], t);
            var i = o.match(/^matrix\((.+)\)$/);
            return i ? ol(i[1], e) : 0;
          };
        },
        il = new Set(['x', 'y', 'z']),
        ll = vo.filter(function (e) {
          return !il.has(e);
        });
      var ul = {
          width: function (e, t) {
            var n = e.x,
              r = t.paddingLeft,
              o = void 0 === r ? '0' : r,
              a = t.paddingRight,
              i = void 0 === a ? '0' : a;
            return n.max - n.min - parseFloat(o) - parseFloat(i);
          },
          height: function (e, t) {
            var n = e.y,
              r = t.paddingTop,
              o = void 0 === r ? '0' : r,
              a = t.paddingBottom,
              i = void 0 === a ? '0' : a;
            return n.max - n.min - parseFloat(o) - parseFloat(i);
          },
          top: function (e, t) {
            var n = t.top;
            return parseFloat(n);
          },
          left: function (e, t) {
            var n = t.left;
            return parseFloat(n);
          },
          bottom: function (e, t) {
            var n = e.y,
              r = t.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (e, t) {
            var n = e.x,
              r = t.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: al(4, 13),
          y: al(5, 14),
        },
        sl = function (e, t, n, r) {
          void 0 === n && (n = {}),
            void 0 === r && (r = {}),
            (t = K({}, t)),
            (r = K({}, r));
          var o = Object.keys(t).filter(tl),
            a = [],
            i = !1,
            l = [];
          if (
            (o.forEach(function (o) {
              var u = e.getValue(o);
              if (e.hasValue(o)) {
                var s,
                  c = n[o],
                  f = fi(c),
                  d = t[o];
                if (Kn(d)) {
                  var p = d.length,
                    v = null === d[0] ? 1 : 0;
                  (c = d[v]), (f = fi(c));
                  for (var h = v; h < p; h++)
                    s ? fi(d[h]) : (s = fi(d[h])) === f || (rl(f) && rl(s));
                } else s = fi(d);
                if (f !== s)
                  if (rl(f) && rl(s)) {
                    var m = u.get();
                    'string' === typeof m && u.set(parseFloat(m)),
                      'string' === typeof d
                        ? (t[o] = parseFloat(d))
                        : Array.isArray(d) &&
                          s === Vt &&
                          (t[o] = d.map(parseFloat));
                  } else
                    (null === f || void 0 === f ? void 0 : f.transform) &&
                    (null === s || void 0 === s ? void 0 : s.transform) &&
                    (0 === c || 0 === d)
                      ? 0 === c
                        ? u.set(s.transform(c))
                        : (t[o] = f.transform(d))
                      : (i ||
                          ((a = (function (e) {
                            var t = [];
                            return (
                              ll.forEach(function (n) {
                                var r = e.getValue(n);
                                void 0 !== r &&
                                  (t.push([n, r.get()]),
                                  r.set(n.startsWith('scale') ? 1 : 0));
                              }),
                              t.length && e.syncRender(),
                              t
                            );
                          })(e)),
                          (i = !0)),
                        l.push(o),
                        (r[o] = void 0 !== r[o] ? r[o] : t[o]),
                        nl(u, d));
              }
            }),
            l.length)
          ) {
            var u = (function (e, t, n) {
              var r = t.measureViewportBox(),
                o = t.getInstance(),
                a = getComputedStyle(o),
                i = a.display,
                l = {};
              'none' === i && t.setStaticValue('display', e.display || 'block'),
                n.forEach(function (e) {
                  l[e] = ul[e](r, a);
                }),
                t.syncRender();
              var u = t.measureViewportBox();
              return (
                n.forEach(function (n) {
                  var r = t.getValue(n);
                  nl(r, l[n]), (e[n] = ul[n](u, a));
                }),
                e
              );
            })(t, e, l);
            return (
              a.length &&
                a.forEach(function (t) {
                  var n = J(t, 2),
                    r = n[0],
                    o = n[1];
                  e.getValue(r).set(o);
                }),
              e.syncRender(),
              { target: u, transitionEnd: r }
            );
          }
          return { target: t, transitionEnd: r };
        };
      function cl(e, t, n, r) {
        return (function (e) {
          return Object.keys(e).some(tl);
        })(t)
          ? sl(e, t, n, r)
          : { target: t, transitionEnd: r };
      }
      var fl = function (e, t, n, r) {
        var o = (function (e, t, n) {
          var r,
            o = G(t, []),
            a = e.getInstance();
          if (!(a instanceof Element)) return { target: o, transitionEnd: n };
          for (var i in (n && (n = K({}, n)),
          e.forEachValue(function (e) {
            var t = e.get();
            if (Ki(t)) {
              var n = Zi(t, a);
              n && e.set(n);
            }
          }),
          o)) {
            var l = o[i];
            if (Ki(l)) {
              var u = Zi(l, a);
              u &&
                ((o[i] = u),
                n && ((null !== (r = n[i]) && void 0 !== r) || (n[i] = l)));
            }
          }
          return { target: o, transitionEnd: n };
        })(e, t, r);
        return cl(e, (t = o.target), n, (r = o.transitionEnd));
      };
      var dl = {
          treeType: 'dom',
          readValueFromInstance: function (e, t) {
            if (go(t)) {
              var n = sr(t);
              return (n && n.default) || 0;
            }
            var r,
              o = ((r = e), window.getComputedStyle(r));
            return (Go(t) ? o.getPropertyValue(t) : o[t]) || 0;
          },
          sortNodePosition: function (e, t) {
            return 2 & e.compareDocumentPosition(t) ? 1 : -1;
          },
          getBaseTarget: function (e, t) {
            var n;
            return null === (n = e.style) || void 0 === n ? void 0 : n[t];
          },
          measureViewportBox: function (e, t) {
            return Ui(e, t.transformPagePoint);
          },
          resetTransform: function (e, t, n) {
            var r = n.transformTemplate;
            (t.style.transform = r ? r({}, '') : 'none'), e.scheduleRender();
          },
          restoreTransform: function (e, t) {
            e.style.transform = t.style.transform;
          },
          removeValueFromRenderState: function (e, t) {
            var n = t.vars,
              r = t.style;
            delete n[e], delete r[e];
          },
          makeTargetAnimatable: function (e, t, n, r) {
            var o = n.transformValues;
            void 0 === r && (r = !0);
            var a = t.transition,
              i = t.transitionEnd,
              l = G(t, ['transition', 'transitionEnd']),
              u = (function (e, t, n) {
                var r,
                  o,
                  a = {};
                for (var i in e)
                  a[i] =
                    null !== (r = mi(i, t)) && void 0 !== r
                      ? r
                      : null === (o = n.getValue(i)) || void 0 === o
                      ? void 0
                      : o.get();
                return a;
              })(l, a || {}, e);
            if ((o && (i && (i = o(i)), l && (l = o(l)), u && (u = o(u))), r)) {
              !(function (e, t, n) {
                var r,
                  o,
                  a,
                  i,
                  l = Object.keys(t).filter(function (t) {
                    return !e.hasValue(t);
                  }),
                  u = l.length;
                if (u)
                  for (var s = 0; s < u; s++) {
                    var c = l[s],
                      f = t[c],
                      d = null;
                    Array.isArray(f) && (d = f[0]),
                      null === d &&
                        (d =
                          null !==
                            (o =
                              null !== (r = n[c]) && void 0 !== r
                                ? r
                                : e.readValue(c)) && void 0 !== o
                            ? o
                            : t[c]),
                      void 0 !== d &&
                        null !== d &&
                        ('string' === typeof d &&
                        (/^\-?\d*\.?\d+$/.test(d) || ui(d))
                          ? (d = parseFloat(d))
                          : !pi(d) && tn.test(f) && (d = cr(c, f)),
                        e.addValue(c, ot(d)),
                        (null !== (a = (i = n)[c]) && void 0 !== a) ||
                          (i[c] = d),
                        e.setBaseTarget(c, d));
                  }
              })(e, l, u);
              var s = fl(e, l, u, i);
              (i = s.transitionEnd), (l = s.target);
            }
            return K({ transition: a, transitionEnd: i }, l);
          },
          scrapeMotionValuesFromProps: wa,
          build: function (e, t, n, r, o) {
            void 0 !== e.isVisible &&
              (t.style.visibility = e.isVisible ? 'visible' : 'hidden'),
              Jo(t, n, r, o.transformTemplate);
          },
          render: ga,
        },
        pl = Qi(dl),
        vl = Qi(
          K(K({}, dl), {
            getBaseTarget: function (e, t) {
              return e[t];
            },
            readValueFromInstance: function (e, t) {
              var n;
              return go(t)
                ? (null === (n = sr(t)) || void 0 === n ? void 0 : n.default) ||
                    0
                : ((t = ya.has(t) ? t : ma(t)), e.getAttribute(t));
            },
            scrapeMotionValuesFromProps: xa,
            build: function (e, t, n, r, o) {
              fa(t, n, r, o.transformTemplate);
            },
            render: ba,
          })
        ),
        hl = function (e, t) {
          return Yo(e)
            ? vl(t, { enableHardwareAcceleration: !1 })
            : pl(t, { enableHardwareAcceleration: !0 });
        };
      function ml(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      var gl = {
          correct: function (e, t) {
            if (!t.target) return e;
            if ('string' === typeof e) {
              if (!Vt.test(e)) return e;
              e = parseFloat(e);
            }
            var n = ml(e, t.target.x),
              r = ml(e, t.target.y);
            return ''.concat(n, '% ').concat(r, '%');
          },
        },
        yl = '_$css',
        bl = {
          correct: function (e, t) {
            var n = t.treeScale,
              r = t.projectionDelta,
              o = e,
              a = e.includes('var('),
              i = [];
            a &&
              (e = e.replace(Gi, function (e) {
                return i.push(e), yl;
              }));
            var l = tn.parse(e);
            if (l.length > 5) return o;
            var u = tn.createTransformer(e),
              s = 'number' !== typeof l[0] ? 1 : 0,
              c = r.x.scale * n.x,
              f = r.y.scale * n.y;
            (l[0 + s] /= c), (l[1 + s] /= f);
            var d = Ze(c, f, 0.5);
            'number' === typeof l[2 + s] && (l[2 + s] /= d),
              'number' === typeof l[3 + s] && (l[3 + s] /= d);
            var p = u(l);
            if (a) {
              var v = 0;
              p = p.replace(yl, function () {
                var e = i[v];
                return v++, e;
              });
            }
            return p;
          },
        },
        wl = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            X(t, e),
            (t.prototype.componentDidMount = function () {
              var e,
                t = this,
                n = this.props,
                r = n.visualElement,
                o = n.layoutGroup,
                a = n.switchLayoutGroup,
                i = n.layoutId,
                l = r.projection;
              (e = xl),
                Object.assign(so, e),
                l &&
                  ((null === o || void 0 === o ? void 0 : o.group) &&
                    o.group.add(l),
                  (null === a || void 0 === a ? void 0 : a.register) &&
                    i &&
                    a.register(l),
                  l.root.didUpdate(),
                  l.addEventListener('animationComplete', function () {
                    t.safeToRemove();
                  }),
                  l.setOptions(
                    K(K({}, l.options), {
                      onExitComplete: function () {
                        return t.safeToRemove();
                      },
                    })
                  )),
                (ko.hasEverUpdated = !0);
            }),
            (t.prototype.getSnapshotBeforeUpdate = function (e) {
              var t = this,
                n = this.props,
                r = n.layoutDependency,
                o = n.visualElement,
                a = n.drag,
                i = n.isPresent,
                l = o.projection;
              return l
                ? ((l.isPresent = i),
                  a || e.layoutDependency !== r || void 0 === r
                    ? l.willUpdate()
                    : this.safeToRemove(),
                  e.isPresent !== i &&
                    (i
                      ? l.promote()
                      : l.relegate() ||
                        ge.postRender(function () {
                          var e;
                          (null === (e = l.getStack()) || void 0 === e
                            ? void 0
                            : e.members.length) || t.safeToRemove();
                        })),
                  null)
                : null;
            }),
            (t.prototype.componentDidUpdate = function () {
              var e = this.props.visualElement.projection;
              e &&
                (e.root.didUpdate(),
                !e.currentAnimation && e.isLead() && this.safeToRemove());
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.props,
                t = e.visualElement,
                n = e.layoutGroup,
                r = e.switchLayoutGroup,
                o = t.projection;
              o &&
                (o.scheduleCheckAfterUnmount(),
                (null === n || void 0 === n ? void 0 : n.group) &&
                  n.group.remove(o),
                (null === r || void 0 === r ? void 0 : r.deregister) &&
                  r.deregister(o));
            }),
            (t.prototype.safeToRemove = function () {
              var e = this.props.safeToRemove;
              null === e || void 0 === e || e();
            }),
            (t.prototype.render = function () {
              return null;
            }),
            t
          );
        })(e.Component);
      var xl = {
          borderRadius: K(K({}, gl), {
            applyTo: [
              'borderTopLeftRadius',
              'borderTopRightRadius',
              'borderBottomLeftRadius',
              'borderBottomRightRadius',
            ],
          }),
          borderTopLeftRadius: gl,
          borderTopRightRadius: gl,
          borderBottomLeftRadius: gl,
          borderBottomRightRadius: gl,
          boxShadow: bl,
        },
        El = {
          measureLayout: function (t) {
            var n = J(ii(), 2),
              r = n[0],
              o = n[1],
              a = (0, e.useContext)(Pe);
            return e.createElement(
              wl,
              K({}, t, {
                layoutGroup: a,
                switchLayoutGroup: (0, e.useContext)(Wo),
                isPresent: r,
                safeToRemove: o,
              })
            );
          },
        },
        kl = So({
          attachResizeListener: function (e, t) {
            return (
              e.addEventListener('resize', t, { passive: !0 }),
              function () {
                return e.removeEventListener('resize', t);
              }
            );
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
        }),
        Sl = { current: void 0 },
        Cl = So({
          measureScroll: function (e) {
            return { x: e.scrollLeft, y: e.scrollTop };
          },
          defaultParent: function () {
            if (!Sl.current) {
              var e = new kl(0, {});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (Sl.current = e);
            }
            return Sl.current;
          },
          resetTransform: function (e, t) {
            e.style.transform = null !== t && void 0 !== t ? t : 'none';
          },
        }),
        Pl = K(K(K(K({}, Ti), ai), $i), El),
        Tl = qo(function (e, t) {
          return (function (e, t, n, r, o) {
            var a = t.forwardMotionProps,
              i = void 0 !== a && a,
              l = Yo(e) ? Ta : _a;
            return K(K({}, l), {
              preloadedFeatures: n,
              useRender: va(i),
              createVisualElement: r,
              projectionNodeConstructor: o,
              Component: e,
            });
          })(e, t, Pl, hl, Cl);
        });
      function _l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ol(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _l(Object(n), !0).forEach(function (t) {
                Ct(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Ll = n(395),
        Ml = n.n(Ll);
      function Al(e, t, n) {
        var r = Ml()(e),
          o = Ml()(t);
        if ('+' === n) return r.plus(o).toString();
        if ('-' === n) return r.minus(o).toString();
        if ('x' === n) return r.times(o).toString();
        if ('\xf7' === n)
          try {
            return r.div(o).toString();
          } catch (a) {
            return "Can't divide by 0.";
          }
        if ('%' === n)
          try {
            return r.mod(o).toString();
          } catch (a) {
            return "Can't find modulo as can't divide by 0.";
          }
        throw Error("Unknown operation '".concat(n, "'"));
      }
      var Rl = 'calculator_padding-x__ujxHa',
        Nl = 'calculator_display-2__YVBJX',
        Vl = 'calculator_padding-top__ppJjF',
        Dl = 'calculator_container__8Adty',
        jl = 'calculator_calculator__Jp8G2',
        Fl = 'calculator_display__DZcNk',
        zl = 'calculator_calculator_button__trHXP',
        Il = 'calculator_calculator_button_operator__r6dCJ',
        Ul = n(184),
        Bl = function () {
          var t = a((0, e.useState)(null), 2),
            n = t[0],
            r = t[1],
            o = a((0, e.useState)(null), 2),
            i = o[0],
            l = o[1],
            u = a((0, e.useState)(null), 2),
            s = u[0],
            c = u[1],
            f = function (e) {
              var t = e.target.textContent;
              switch (t) {
                case '%':
                case '\xf7':
                case 'x':
                case '-':
                case '+':
                  c(t);
              }
              var o,
                a,
                u =
                  ((o = { total: n, next: i, operation: s }),
                  'AC' === (a = t)
                    ? { total: null, next: null, operation: null }
                    : a.match(/[0-9]+/)
                    ? '0' === a && '0' === o.next
                      ? {}
                      : o.operation
                      ? o.next
                        ? Ol(Ol({}, o), {}, { next: o.next + a })
                        : Ol(Ol({}, o), {}, { next: a })
                      : o.next
                      ? { next: o.next + a, total: null }
                      : { next: a, total: null }
                    : '.' === a
                    ? o.next
                      ? o.next.includes('.')
                        ? Ol({}, o)
                        : Ol(Ol({}, o), {}, { next: ''.concat(o.next, '.') })
                      : o.operation
                      ? { next: '0.' }
                      : o.total
                      ? o.total.includes('.')
                        ? {}
                        : { total: ''.concat(o.total, '.') }
                      : { total: '0.' }
                    : '=' === a
                    ? o.next && o.operation
                      ? {
                          total: Al(o.total, o.next, o.operation),
                          next: null,
                          operation: null,
                        }
                      : {}
                    : '+/-' === a
                    ? o.next
                      ? Ol(
                          Ol({}, o),
                          {},
                          { next: (-1 * parseFloat(o.next)).toString() }
                        )
                      : o.total
                      ? Ol(
                          Ol({}, o),
                          {},
                          { total: (-1 * parseFloat(o.total)).toString() }
                        )
                      : {}
                    : o.next || !o.total || o.operation
                    ? o.operation
                      ? o.total && !o.next
                        ? Ol(Ol({}, o), {}, { operation: a })
                        : {
                            total: Al(o.total, o.next, o.operation),
                            next: null,
                            operation: a,
                          }
                      : o.next
                      ? { total: o.next, next: null, operation: a }
                      : { operation: a }
                    : Ol(Ol({}, o), {}, { operation: a })),
                f = u.total,
                d = u.next,
                p = u.operation;
              r(f), l(d), c(p);
            },
            d = jl,
            p = zl,
            v = Il,
            h = Fl,
            m = Dl;
          return (0, Ul.jsx)('section', {
            className: ''.concat(Rl, ' ').concat(Vl),
            children: (0, Ul.jsxs)(
              Tl.div,
              {
                initial: { x: '10%', opacity: 0 },
                animate: { x: 0, opacity: 1 },
                className: m,
                children: [
                  (0, Ul.jsx)('h2', {
                    className: Nl,
                    children: 'Lets do some math',
                  }),
                  (0, Ul.jsxs)('div', {
                    className: d,
                    children: [
                      (0, Ul.jsx)('span', {
                        className: h,
                        children:
                          n && i && s
                            ? ''.concat(n, ' ').concat(s, ' ').concat(i)
                            : i || n || '0',
                      }),
                      [
                        ['AC'],
                        ['+/-'],
                        ['%'],
                        ['\xf7', 'operator'],
                        ['7'],
                        ['8'],
                        ['9'],
                        ['x', 'operator'],
                        ['4'],
                        ['5'],
                        ['6'],
                        ['-', 'operator'],
                        ['1'],
                        ['2'],
                        ['3'],
                        ['+', 'operator'],
                        ['0'],
                        ['.'],
                        ['=', 'operator'],
                      ].map(function (e) {
                        return (0,
                        Ul.jsx)('button', { onClick: f, type: 'button', className: e[1] ? ''.concat(p, ' ').concat(v) : p, 'aria-label': 'calculator_btn', children: e[0] }, e[0]);
                      }),
                    ],
                  }),
                ],
              },
              'calculator'
            ),
          });
        },
        Wl = 'navbar_padding-x__7OWhu',
        Hl = 'navbar_display-2__30GTa',
        $l = 'navbar_par__qrOTS',
        ql = 'navbar_header__9W-g6',
        Ql = 'navbar_title__v4Kwd',
        Yl = 'navbar_nav-section__CxlGN',
        Xl = 'navbar_links__UkTkp',
        Kl = 'navbar_link__7VfLW';
      function Gl() {
        return (0, Ul.jsx)('section', {
          className: 'home '.concat(Wl),
          style: { paddingInline: '3rem', color: 'rgb(255 255 255 / 0.8)' },
          children: (0, Ul.jsxs)(
            Tl.div,
            {
              initial: { x: '10%', opacity: 0 },
              animate: { x: 0, opacity: 1 },
              children: [
                (0, Ul.jsx)('h2', {
                  className: Hl,
                  children: 'Welcome to our page!',
                }),
                (0, Ul.jsx)('p', {
                  className: $l,
                  children:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti numquam, magni placeat fugit asperiores, veniam est sunt eius mollitia dolores vel assumenda saepe natus nihil, repudiandae quam sed quod a. Odit tenetur sunt ab quod facere quam ducimus aperiam nisi?',
                }),
              ],
            },
            'home'
          ),
        });
      }
      var Zl,
        Jl = 'quote_padding-x__gx5w1',
        eu = 'quote_display-2__exq3k',
        tu = 'quote_padding-top__00IAQ',
        nu = 'quote_par__yqjGg',
        ru = 'quote_quote__JSpi7';
      function ou() {
        var e = nu;
        return (0, Ul.jsx)('section', {
          className: ''.concat(ru, ' ').concat(Jl, ' ').concat(tu),
          children: (0, Ul.jsxs)(
            Tl.div,
            {
              initial: { x: '10%', opacity: 0 },
              animate: { x: 0, opacity: 1 },
              children: [
                (0, Ul.jsx)('p', {
                  className: e,
                  children:
                    "Without mathematics, there's nothing you can do. Everything around you is mathematics. Everything around you is numbers.",
                }),
                (0, Ul.jsx)('h2', {
                  className: eu,
                  children: '\u2014 Shakuntala Devi',
                }),
              ],
            },
            'calculator'
          ),
        });
      }
      var au = new Uint8Array(16);
      function iu() {
        if (
          !Zl &&
          !(Zl =
            ('undefined' !== typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ('undefined' !== typeof msCrypto &&
              'function' === typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error(
            'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
          );
        return Zl(au);
      }
      var lu =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      for (
        var uu = function (e) {
            return 'string' === typeof e && lu.test(e);
          },
          su = [],
          cu = 0;
        cu < 256;
        ++cu
      )
        su.push((cu + 256).toString(16).substr(1));
      var fu = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (
            su[e[t + 0]] +
            su[e[t + 1]] +
            su[e[t + 2]] +
            su[e[t + 3]] +
            '-' +
            su[e[t + 4]] +
            su[e[t + 5]] +
            '-' +
            su[e[t + 6]] +
            su[e[t + 7]] +
            '-' +
            su[e[t + 8]] +
            su[e[t + 9]] +
            '-' +
            su[e[t + 10]] +
            su[e[t + 11]] +
            su[e[t + 12]] +
            su[e[t + 13]] +
            su[e[t + 14]] +
            su[e[t + 15]]
          ).toLowerCase();
        if (!uu(n)) throw TypeError('Stringified UUID is invalid');
        return n;
      };
      var du = function (e, t, n) {
        var r = (e = e || {}).random || (e.rng || iu)();
        if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
          n = n || 0;
          for (var o = 0; o < 16; ++o) t[n + o] = r[o];
          return t;
        }
        return fu(r);
      };
      function pu() {
        var e = [
            { id: du(), path: '/math-magicians/', text: 'Home' },
            {
              id: du(),
              path: '/math-magicians/calculator',
              text: 'Calculator',
            },
            { id: du(), path: '/math-magicians/quote', text: 'Quote' },
          ],
          t = ql,
          n = Kl,
          r = Xl,
          o = Yl,
          a = Ql;
        return (0, Ul.jsxs)('header', {
          className: t,
          children: [
            (0, Ul.jsx)(Q, {
              to: e[0].path,
              children: (0, Ul.jsx)('h1', {
                className: a,
                children: 'Math Magicians',
              }),
            }),
            (0, Ul.jsx)('nav', {
              className: o,
              children: (0, Ul.jsx)('ul', {
                className: r,
                children: e.map(function (e) {
                  var t = e.id,
                    r = e.path,
                    o = e.text;
                  return (0,
                  Ul.jsx)('li', { children: (0, Ul.jsx)(Q, { className: n, to: r, children: o }) }, t);
                }),
              }),
            }),
          ],
        });
      }
      var vu = function () {
        return (0, Ul.jsxs)(Ul.Fragment, {
          children: [
            (0, Ul.jsx)(pu, {}),
            (0, Ul.jsx)(Me, {
              exitBeforeEnter: !0,
              children: (0, Ul.jsxs)(E, {
                children: [
                  (0, Ul.jsx)(w, {
                    path: '/math-magicians/',
                    element: (0, Ul.jsx)(Gl, {}),
                  }),
                  (0, Ul.jsx)(w, {
                    path: '/math-magicians/calculator',
                    element: (0, Ul.jsx)(Bl, {}),
                  }),
                  (0, Ul.jsx)(w, {
                    path: '/math-magicians/Quote',
                    element: (0, Ul.jsx)(ou, {}),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      t.render(
        (0, Ul.jsx)(e.StrictMode, {
          children: (0, Ul.jsx)(q, { children: (0, Ul.jsx)(vu, {}) }),
        }),
        document.getElementById('root')
      );
    })();
})();
//# sourceMappingURL=main.8dcf1b7a.js.map
