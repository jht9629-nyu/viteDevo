(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const n of o)
      if (n.type === 'childList')
        for (const l of n.addedNodes) l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(o) {
    const n = {};
    return (
      o.integrity && (n.integrity = o.integrity),
      o.referrerPolicy && (n.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (n.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (n.credentials = 'omit')
        : (n.credentials = 'same-origin'),
      n
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const n = t(o);
    fetch(o.href, n);
  }
})();
var W,
  d,
  de,
  C,
  te,
  he,
  j,
  ve,
  G,
  q,
  Z,
  E = {},
  me = [],
  $e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  J = Array.isArray;
function $(_, e) {
  for (var t in e) _[t] = e[t];
  return _;
}
function Q(_) {
  _ && _.parentNode && _.parentNode.removeChild(_);
}
function Ce(_, e, t) {
  var r,
    o,
    n,
    l = {};
  for (n in e) n == 'key' ? (r = e[n]) : n == 'ref' ? (o = e[n]) : (l[n] = e[n]);
  if (
    (arguments.length > 2 && (l.children = arguments.length > 3 ? W.call(arguments, 2) : t),
    typeof _ == 'function' && _.defaultProps != null)
  )
    for (n in _.defaultProps) l[n] === void 0 && (l[n] = _.defaultProps[n]);
  return U(_, l, r, o, null);
}
function U(_, e, t, r, o) {
  var n = {
    type: _,
    props: e,
    key: t,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: o ?? ++de,
    __i: -1,
    __u: 0,
  };
  return o == null && d.vnode != null && d.vnode(n), n;
}
function L(_) {
  return _.children;
}
function D(_, e) {
  (this.props = _), (this.context = e);
}
function F(_, e) {
  if (e == null) return _.__ ? F(_.__, _.__i + 1) : null;
  for (var t; e < _.__k.length; e++) if ((t = _.__k[e]) != null && t.__e != null) return t.__e;
  return typeof _.type == 'function' ? F(_) : null;
}
function ge(_) {
  var e, t;
  if ((_ = _.__) != null && _.__c != null) {
    for (_.__e = _.__c.base = null, e = 0; e < _.__k.length; e++)
      if ((t = _.__k[e]) != null && t.__e != null) {
        _.__e = _.__c.base = t.__e;
        break;
      }
    return ge(_);
  }
}
function ne(_) {
  ((!_.__d && (_.__d = !0) && C.push(_) && !O.__r++) || te !== d.debounceRendering) &&
    ((te = d.debounceRendering) || he)(O);
}
function O() {
  var _, e, t, r, o, n, l, c;
  for (C.sort(j); (_ = C.shift()); )
    _.__d &&
      ((e = C.length),
      (r = void 0),
      (n = (o = (t = _).__v).__e),
      (l = []),
      (c = []),
      t.__P &&
        (((r = $({}, o)).__v = o.__v + 1),
        d.vnode && d.vnode(r),
        X(t.__P, r, o, t.__n, t.__P.namespaceURI, 32 & o.__u ? [n] : null, l, n ?? F(o), !!(32 & o.__u), c),
        (r.__v = o.__v),
        (r.__.__k[r.__i] = r),
        ke(l, r, c),
        r.__e != n && ge(r)),
      C.length > e && C.sort(j));
  O.__r = 0;
}
function ye(_, e, t, r, o, n, l, c, s, u, p) {
  var i,
    a,
    f,
    y,
    w,
    b,
    h = (r && r.__k) || me,
    v = e.length;
  for (s = Fe(t, e, h, s, v), i = 0; i < v; i++)
    (f = t.__k[i]) != null &&
      ((a = f.__i === -1 ? E : h[f.__i] || E),
      (f.__i = i),
      (b = X(_, f, a, o, n, l, c, s, u, p)),
      (y = f.__e),
      f.ref && a.ref != f.ref && (a.ref && ee(a.ref, null, f), p.push(f.ref, f.__c || y, f)),
      w == null && y != null && (w = y),
      4 & f.__u || a.__k === f.__k
        ? (s = be(f, s, _))
        : typeof f.type == 'function' && b !== void 0
        ? (s = b)
        : y && (s = y.nextSibling),
      (f.__u &= -7));
  return (t.__e = w), s;
}
function Fe(_, e, t, r, o) {
  var n,
    l,
    c,
    s,
    u,
    p = t.length,
    i = p,
    a = 0;
  for (_.__k = new Array(o), n = 0; n < o; n++)
    (l = e[n]) != null && typeof l != 'boolean' && typeof l != 'function'
      ? ((s = n + a),
        ((l = _.__k[n] =
          typeof l == 'string' || typeof l == 'number' || typeof l == 'bigint' || l.constructor == String
            ? U(null, l, null, null, null)
            : J(l)
            ? U(L, { children: l }, null, null, null)
            : l.constructor === void 0 && l.__b > 0
            ? U(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v)
            : l).__ = _),
        (l.__b = _.__b + 1),
        (c = null),
        (u = l.__i = He(l, t, s, i)) !== -1 && (i--, (c = t[u]) && (c.__u |= 2)),
        c == null || c.__v === null
          ? (u == -1 && a--, typeof l.type != 'function' && (l.__u |= 4))
          : u != s && (u == s - 1 ? a-- : u == s + 1 ? a++ : (u > s ? a-- : a++, (l.__u |= 4))))
      : (_.__k[n] = null);
  if (i) for (n = 0; n < p; n++) (c = t[n]) != null && !(2 & c.__u) && (c.__e == r && (r = F(c)), we(c, c));
  return r;
}
function be(_, e, t) {
  var r, o;
  if (typeof _.type == 'function') {
    for (r = _.__k, o = 0; r && o < r.length; o++) r[o] && ((r[o].__ = _), (e = be(r[o], e, t)));
    return e;
  }
  _.__e != e && (e && _.type && !t.contains(e) && (e = F(_)), t.insertBefore(_.__e, e || null), (e = _.__e));
  do e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function He(_, e, t, r) {
  var o,
    n,
    l = _.key,
    c = _.type,
    s = e[t];
  if (s === null || (s && l == s.key && c === s.type && !(2 & s.__u))) return t;
  if (r > (s != null && !(2 & s.__u) ? 1 : 0))
    for (o = t - 1, n = t + 1; o >= 0 || n < e.length; ) {
      if (o >= 0) {
        if ((s = e[o]) && !(2 & s.__u) && l == s.key && c === s.type) return o;
        o--;
      }
      if (n < e.length) {
        if ((s = e[n]) && !(2 & s.__u) && l == s.key && c === s.type) return n;
        n++;
      }
    }
  return -1;
}
function re(_, e, t) {
  e[0] == '-' ? _.setProperty(e, t ?? '') : (_[e] = t == null ? '' : typeof t != 'number' || $e.test(e) ? t : t + 'px');
}
function T(_, e, t, r, o) {
  var n;
  e: if (e == 'style')
    if (typeof t == 'string') _.style.cssText = t;
    else {
      if ((typeof r == 'string' && (_.style.cssText = r = ''), r)) for (e in r) (t && e in t) || re(_.style, e, '');
      if (t) for (e in t) (r && t[e] === r[e]) || re(_.style, e, t[e]);
    }
  else if (e[0] == 'o' && e[1] == 'n')
    (n = e != (e = e.replace(ve, '$1'))),
      (e = e.toLowerCase() in _ || e == 'onFocusOut' || e == 'onFocusIn' ? e.toLowerCase().slice(2) : e.slice(2)),
      _.l || (_.l = {}),
      (_.l[e + n] = t),
      t ? (r ? (t.u = r.u) : ((t.u = G), _.addEventListener(e, n ? Z : q, n))) : _.removeEventListener(e, n ? Z : q, n);
  else {
    if (o == 'http://www.w3.org/2000/svg') e = e.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
    else if (
      e != 'width' &&
      e != 'height' &&
      e != 'href' &&
      e != 'list' &&
      e != 'form' &&
      e != 'tabIndex' &&
      e != 'download' &&
      e != 'rowSpan' &&
      e != 'colSpan' &&
      e != 'role' &&
      e != 'popover' &&
      e in _
    )
      try {
        _[e] = t ?? '';
        break e;
      } catch {}
    typeof t == 'function' ||
      (t == null || (t === !1 && e[4] != '-')
        ? _.removeAttribute(e)
        : _.setAttribute(e, e == 'popover' && t == 1 ? '' : t));
  }
}
function oe(_) {
  return function (e) {
    if (this.l) {
      var t = this.l[e.type + _];
      if (e.t == null) e.t = G++;
      else if (e.t < t.u) return;
      return t(d.event ? d.event(e) : e);
    }
  };
}
function X(_, e, t, r, o, n, l, c, s, u) {
  var p,
    i,
    a,
    f,
    y,
    w,
    b,
    h,
    v,
    H,
    P,
    M,
    S,
    _e,
    A,
    R,
    B,
    x = e.type;
  if (e.constructor !== void 0) return null;
  128 & t.__u && ((s = !!(32 & t.__u)), (n = [(c = e.__e = t.__e)])), (p = d.__b) && p(e);
  e: if (typeof x == 'function')
    try {
      if (
        ((h = e.props),
        (v = 'prototype' in x && x.prototype.render),
        (H = (p = x.contextType) && r[p.__c]),
        (P = p ? (H ? H.props.value : p.__) : r),
        t.__c
          ? (b = (i = e.__c = t.__c).__ = i.__E)
          : (v ? (e.__c = i = new x(h, P)) : ((e.__c = i = new D(h, P)), (i.constructor = x), (i.render = Ne)),
            H && H.sub(i),
            (i.props = h),
            i.state || (i.state = {}),
            (i.context = P),
            (i.__n = r),
            (a = i.__d = !0),
            (i.__h = []),
            (i._sb = [])),
        v && i.__s == null && (i.__s = i.state),
        v &&
          x.getDerivedStateFromProps != null &&
          (i.__s == i.state && (i.__s = $({}, i.__s)), $(i.__s, x.getDerivedStateFromProps(h, i.__s))),
        (f = i.props),
        (y = i.state),
        (i.__v = e),
        a)
      )
        v && x.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(),
          v && i.componentDidMount != null && i.__h.push(i.componentDidMount);
      else {
        if (
          (v &&
            x.getDerivedStateFromProps == null &&
            h !== f &&
            i.componentWillReceiveProps != null &&
            i.componentWillReceiveProps(h, P),
          !i.__e &&
            ((i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, P) === !1) || e.__v == t.__v))
        ) {
          for (
            e.__v != t.__v && ((i.props = h), (i.state = i.__s), (i.__d = !1)),
              e.__e = t.__e,
              e.__k = t.__k,
              e.__k.some(function (N) {
                N && (N.__ = e);
              }),
              M = 0;
            M < i._sb.length;
            M++
          )
            i.__h.push(i._sb[M]);
          (i._sb = []), i.__h.length && l.push(i);
          break e;
        }
        i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, P),
          v &&
            i.componentDidUpdate != null &&
            i.__h.push(function () {
              i.componentDidUpdate(f, y, w);
            });
      }
      if (((i.context = P), (i.props = h), (i.__P = _), (i.__e = !1), (S = d.__r), (_e = 0), v)) {
        for (
          i.state = i.__s, i.__d = !1, S && S(e), p = i.render(i.props, i.state, i.context), A = 0;
          A < i._sb.length;
          A++
        )
          i.__h.push(i._sb[A]);
        i._sb = [];
      } else
        do (i.__d = !1), S && S(e), (p = i.render(i.props, i.state, i.context)), (i.state = i.__s);
        while (i.__d && ++_e < 25);
      (i.state = i.__s),
        i.getChildContext != null && (r = $($({}, r), i.getChildContext())),
        v && !a && i.getSnapshotBeforeUpdate != null && (w = i.getSnapshotBeforeUpdate(f, y)),
        (c = ye(
          _,
          J((R = p != null && p.type === L && p.key == null ? p.props.children : p)) ? R : [R],
          e,
          t,
          r,
          o,
          n,
          l,
          c,
          s,
          u
        )),
        (i.base = e.__e),
        (e.__u &= -161),
        i.__h.length && l.push(i),
        b && (i.__E = i.__ = null);
    } catch (N) {
      if (((e.__v = null), s || n != null))
        if (N.then) {
          for (e.__u |= s ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
          (n[n.indexOf(c)] = null), (e.__e = c);
        } else for (B = n.length; B--; ) Q(n[B]);
      else (e.__e = t.__e), (e.__k = t.__k);
      d.__e(N, e, t);
    }
  else
    n == null && e.__v == t.__v ? ((e.__k = t.__k), (e.__e = t.__e)) : (c = e.__e = Se(t.__e, e, t, r, o, n, l, s, u));
  return (p = d.diffed) && p(e), 128 & e.__u ? void 0 : c;
}
function ke(_, e, t) {
  for (var r = 0; r < t.length; r++) ee(t[r], t[++r], t[++r]);
  d.__c && d.__c(e, _),
    _.some(function (o) {
      try {
        (_ = o.__h),
          (o.__h = []),
          _.some(function (n) {
            n.call(o);
          });
      } catch (n) {
        d.__e(n, o.__v);
      }
    });
}
function Se(_, e, t, r, o, n, l, c, s) {
  var u,
    p,
    i,
    a,
    f,
    y,
    w,
    b = t.props,
    h = e.props,
    v = e.type;
  if (
    (v == 'svg'
      ? (o = 'http://www.w3.org/2000/svg')
      : v == 'math'
      ? (o = 'http://www.w3.org/1998/Math/MathML')
      : o || (o = 'http://www.w3.org/1999/xhtml'),
    n != null)
  ) {
    for (u = 0; u < n.length; u++)
      if ((f = n[u]) && 'setAttribute' in f == !!v && (v ? f.localName == v : f.nodeType == 3)) {
        (_ = f), (n[u] = null);
        break;
      }
  }
  if (_ == null) {
    if (v == null) return document.createTextNode(h);
    (_ = document.createElementNS(o, v, h.is && h)), c && (d.__m && d.__m(e, n), (c = !1)), (n = null);
  }
  if (v === null) b === h || (c && _.data === h) || (_.data = h);
  else {
    if (((n = n && W.call(_.childNodes)), (b = t.props || E), !c && n != null))
      for (b = {}, u = 0; u < _.attributes.length; u++) b[(f = _.attributes[u]).name] = f.value;
    for (u in b)
      if (((f = b[u]), u != 'children')) {
        if (u == 'dangerouslySetInnerHTML') i = f;
        else if (!(u in h)) {
          if ((u == 'value' && 'defaultValue' in h) || (u == 'checked' && 'defaultChecked' in h)) continue;
          T(_, u, null, f, o);
        }
      }
    for (u in h)
      (f = h[u]),
        u == 'children'
          ? (a = f)
          : u == 'dangerouslySetInnerHTML'
          ? (p = f)
          : u == 'value'
          ? (y = f)
          : u == 'checked'
          ? (w = f)
          : (c && typeof f != 'function') || b[u] === f || T(_, u, f, b[u], o);
    if (p) c || (i && (p.__html === i.__html || p.__html === _.innerHTML)) || (_.innerHTML = p.__html), (e.__k = []);
    else if (
      (i && (_.innerHTML = ''),
      ye(
        _,
        J(a) ? a : [a],
        e,
        t,
        r,
        v == 'foreignObject' ? 'http://www.w3.org/1999/xhtml' : o,
        n,
        l,
        n ? n[0] : t.__k && F(t, 0),
        c,
        s
      ),
      n != null)
    )
      for (u = n.length; u--; ) Q(n[u]);
    c ||
      ((u = 'value'),
      v == 'progress' && y == null
        ? _.removeAttribute('value')
        : y !== void 0 &&
          (y !== _[u] || (v == 'progress' && !y) || (v == 'option' && y !== b[u])) &&
          T(_, u, y, b[u], o),
      (u = 'checked'),
      w !== void 0 && w !== _[u] && T(_, u, w, b[u], o));
  }
  return _;
}
function ee(_, e, t) {
  try {
    if (typeof _ == 'function') {
      var r = typeof _.__u == 'function';
      r && _.__u(), (r && e == null) || (_.__u = _(e));
    } else _.current = e;
  } catch (o) {
    d.__e(o, t);
  }
}
function we(_, e, t) {
  var r, o;
  if (
    (d.unmount && d.unmount(_),
    (r = _.ref) && ((r.current && r.current !== _.__e) || ee(r, null, e)),
    (r = _.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (n) {
        d.__e(n, e);
      }
    r.base = r.__P = null;
  }
  if ((r = _.__k)) for (o = 0; o < r.length; o++) r[o] && we(r[o], e, t || typeof _.type != 'function');
  t || Q(_.__e), (_.__c = _.__ = _.__e = void 0);
}
function Ne(_, e, t) {
  return this.constructor(_, t);
}
function Ee(_, e, t) {
  var r, o, n, l;
  e == document && (e = document.documentElement),
    d.__ && d.__(_, e),
    (o = (r = !1) ? null : e.__k),
    (n = []),
    (l = []),
    X(
      e,
      (_ = e.__k = Ce(L, null, [_])),
      o || E,
      E,
      e.namespaceURI,
      o ? null : e.firstChild ? W.call(e.childNodes) : null,
      n,
      o ? o.__e : e.firstChild,
      r,
      l
    ),
    ke(n, _, l);
}
(W = me.slice),
  (d = {
    __e: function (_, e, t, r) {
      for (var o, n, l; (e = e.__); )
        if ((o = e.__c) && !o.__)
          try {
            if (
              ((n = o.constructor) &&
                n.getDerivedStateFromError != null &&
                (o.setState(n.getDerivedStateFromError(_)), (l = o.__d)),
              o.componentDidCatch != null && (o.componentDidCatch(_, r || {}), (l = o.__d)),
              l)
            )
              return (o.__E = o);
          } catch (c) {
            _ = c;
          }
      throw _;
    },
  }),
  (de = 0),
  (D.prototype.setState = function (_, e) {
    var t;
    (t = this.__s != null && this.__s !== this.state ? this.__s : (this.__s = $({}, this.state))),
      typeof _ == 'function' && (_ = _($({}, t), this.props)),
      _ && $(t, _),
      _ != null && this.__v && (e && this._sb.push(e), ne(this));
  }),
  (D.prototype.forceUpdate = function (_) {
    this.__v && ((this.__e = !0), _ && this.__h.push(_), ne(this));
  }),
  (D.prototype.render = L),
  (C = []),
  (he = typeof Promise == 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
  (j = function (_, e) {
    return _.__v.__b - e.__v.__b;
  }),
  (O.__r = 0),
  (ve = /(PointerCapture)$|Capture$/i),
  (G = 0),
  (q = oe(!1)),
  (Z = oe(!0));
var Le = 0;
function k(_, e, t, r, o, n) {
  e || (e = {});
  var l,
    c,
    s = e;
  if ('ref' in s) for (c in ((s = {}), e)) c == 'ref' ? (l = e[c]) : (s[c] = e[c]);
  var u = {
    type: _,
    props: s,
    key: t,
    ref: l,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --Le,
    __i: -1,
    __u: 0,
    __source: o,
    __self: n,
  };
  if (typeof _ == 'function' && (l = _.defaultProps)) for (c in l) s[c] === void 0 && (s[c] = l[c]);
  return d.vnode && d.vnode(u), u;
}
var z,
  m,
  V,
  ie,
  K = 0,
  xe = [],
  g = d,
  le = g.__b,
  ce = g.__r,
  ue = g.diffed,
  se = g.__c,
  fe = g.unmount,
  ae = g.__;
function Me(_, e) {
  g.__h && g.__h(m, _, K || e), (K = 0);
  var t = m.__H || (m.__H = { __: [], __h: [] });
  return _ >= t.__.length && t.__.push({}), t.__[_];
}
function Ae(_) {
  return (K = 1), Te(Pe, _);
}
function Te(_, e, t) {
  var r = Me(z++, 2);
  if (
    ((r.t = _),
    !r.__c &&
      ((r.__ = [
        Pe(void 0, e),
        function (c) {
          var s = r.__N ? r.__N[0] : r.__[0],
            u = r.t(s, c);
          s !== u && ((r.__N = [u, r.__[1]]), r.__c.setState({}));
        },
      ]),
      (r.__c = m),
      !m.u))
  ) {
    var o = function (c, s, u) {
      if (!r.__c.__H) return !0;
      var p = r.__c.__H.__.filter(function (a) {
        return !!a.__c;
      });
      if (
        p.every(function (a) {
          return !a.__N;
        })
      )
        return !n || n.call(this, c, s, u);
      var i = r.__c.props !== c;
      return (
        p.forEach(function (a) {
          if (a.__N) {
            var f = a.__[0];
            (a.__ = a.__N), (a.__N = void 0), f !== a.__[0] && (i = !0);
          }
        }),
        (n && n.call(this, c, s, u)) || i
      );
    };
    m.u = !0;
    var n = m.shouldComponentUpdate,
      l = m.componentWillUpdate;
    (m.componentWillUpdate = function (c, s, u) {
      if (this.__e) {
        var p = n;
        (n = void 0), o(c, s, u), (n = p);
      }
      l && l.call(this, c, s, u);
    }),
      (m.shouldComponentUpdate = o);
  }
  return r.__N || r.__;
}
function Ue() {
  for (var _; (_ = xe.shift()); )
    if (_.__P && _.__H)
      try {
        _.__H.__h.forEach(I), _.__H.__h.forEach(Y), (_.__H.__h = []);
      } catch (e) {
        (_.__H.__h = []), g.__e(e, _.__v);
      }
}
(g.__b = function (_) {
  (m = null), le && le(_);
}),
  (g.__ = function (_, e) {
    _ && e.__k && e.__k.__m && (_.__m = e.__k.__m), ae && ae(_, e);
  }),
  (g.__r = function (_) {
    ce && ce(_), (z = 0);
    var e = (m = _.__c).__H;
    e &&
      (V === m
        ? ((e.__h = []),
          (m.__h = []),
          e.__.forEach(function (t) {
            t.__N && (t.__ = t.__N), (t.i = t.__N = void 0);
          }))
        : (e.__h.forEach(I), e.__h.forEach(Y), (e.__h = []), (z = 0))),
      (V = m);
  }),
  (g.diffed = function (_) {
    ue && ue(_);
    var e = _.__c;
    e &&
      e.__H &&
      (e.__H.__h.length &&
        ((xe.push(e) !== 1 && ie === g.requestAnimationFrame) || ((ie = g.requestAnimationFrame) || De)(Ue)),
      e.__H.__.forEach(function (t) {
        t.i && (t.__H = t.i), (t.i = void 0);
      })),
      (V = m = null);
  }),
  (g.__c = function (_, e) {
    e.some(function (t) {
      try {
        t.__h.forEach(I),
          (t.__h = t.__h.filter(function (r) {
            return !r.__ || Y(r);
          }));
      } catch (r) {
        e.some(function (o) {
          o.__h && (o.__h = []);
        }),
          (e = []),
          g.__e(r, t.__v);
      }
    }),
      se && se(_, e);
  }),
  (g.unmount = function (_) {
    fe && fe(_);
    var e,
      t = _.__c;
    t &&
      t.__H &&
      (t.__H.__.forEach(function (r) {
        try {
          I(r);
        } catch (o) {
          e = o;
        }
      }),
      (t.__H = void 0),
      e && g.__e(e, t.__v));
  });
var pe = typeof requestAnimationFrame == 'function';
function De(_) {
  var e,
    t = function () {
      clearTimeout(r), pe && cancelAnimationFrame(e), setTimeout(_);
    },
    r = setTimeout(t, 100);
  pe && (e = requestAnimationFrame(t));
}
function I(_) {
  var e = m,
    t = _.__c;
  typeof t == 'function' && ((_.__c = void 0), t()), (m = e);
}
function Y(_) {
  var e = m;
  (_.__c = _.__()), (m = e);
}
function Pe(_, e) {
  return typeof e == 'function' ? e(_) : e;
}
const Ie =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='27.68'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20296'%3e%3cpath%20fill='%23673AB8'%20d='m128%200l128%2073.9v147.8l-128%2073.9L0%20221.7V73.9z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M34.865%20220.478c17.016%2021.78%2071.095%205.185%20122.15-34.704c51.055-39.888%2080.24-88.345%2063.224-110.126c-17.017-21.78-71.095-5.184-122.15%2034.704c-51.055%2039.89-80.24%2088.346-63.224%20110.126Zm7.27-5.68c-5.644-7.222-3.178-21.402%207.573-39.253c11.322-18.797%2030.541-39.548%2054.06-57.923c23.52-18.375%2048.303-32.004%2069.281-38.442c19.922-6.113%2034.277-5.075%2039.92%202.148c5.644%207.223%203.178%2021.403-7.573%2039.254c-11.322%2018.797-30.541%2039.547-54.06%2057.923c-23.52%2018.375-48.304%2032.004-69.281%2038.441c-19.922%206.114-34.277%205.076-39.92-2.147Z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M220.239%20220.478c17.017-21.78-12.169-70.237-63.224-110.126C105.96%2070.464%2051.88%2053.868%2034.865%2075.648c-17.017%2021.78%2012.169%2070.238%2063.224%20110.126c51.055%2039.889%20105.133%2056.485%20122.15%2034.704Zm-7.27-5.68c-5.643%207.224-19.998%208.262-39.92%202.148c-20.978-6.437-45.761-20.066-69.28-38.441c-23.52-18.376-42.74-39.126-54.06-57.923c-10.752-17.851-13.218-32.03-7.575-39.254c5.644-7.223%2019.999-8.261%2039.92-2.148c20.978%206.438%2045.762%2020.067%2069.281%2038.442c23.52%2018.375%2042.739%2039.126%2054.06%2057.923c10.752%2017.85%2013.218%2032.03%207.574%2039.254Z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M127.552%20167.667c10.827%200%2019.603-8.777%2019.603-19.604c0-10.826-8.776-19.603-19.603-19.603c-10.827%200-19.604%208.777-19.604%2019.603c0%2010.827%208.777%2019.604%2019.604%2019.604Z'%3e%3c/path%3e%3c/svg%3e",
  Oe = '' + new URL('../vite.svg', import.meta.url).href;
function We() {
  const [_, e] = Ae(0);
  return k(L, {
    children: [
      k('div', {
        children: [
          k('a', {
            href: 'https://vite.dev',
            target: '_blank',
            children: k('img', { src: Oe, class: 'logo', alt: 'Vite logo' }),
          }),
          k('a', {
            href: 'https://preactjs.com',
            target: '_blank',
            children: k('img', { src: Ie, class: 'logo preact', alt: 'Preact logo' }),
          }),
        ],
      }),
      k('h1', { children: 'Vite + Preact' }),
      k('div', {
        class: 'card',
        children: [
          k('button', { onClick: () => e((t) => t + 1), children: ['count is ', _] }),
          k('p', { children: ['Edit ', k('code', { children: 'src/app.jsx' }), ' and save to test HMR'] }),
        ],
      }),
      k('p', {
        children: [
          'Check out',
          ' ',
          k('a', {
            href: 'https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app',
            target: '_blank',
            children: 'create-preact',
          }),
          ', the official Preact + Vite starter',
        ],
      }),
      k('p', { class: 'read-the-docs', children: 'Click on the Vite and Preact logos to learn more' }),
    ],
  });
}
Ee(k(We, {}), document.getElementById('app'));
