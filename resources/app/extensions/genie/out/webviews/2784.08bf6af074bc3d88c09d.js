function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
(self.webpackChunk_genie_chat_webview_app = self.webpackChunk_genie_chat_webview_app || []).push([
    [
        2784
    ],
    {
        6336: (t, s, n)=>{
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.RPCMultiplexer = void 0;
            const i = n(47065), o = n(41109), c = n(22827);
            s.RPCMultiplexer = class RPCMultiplexer {
                dispose() {
                    this.toDispose.dispose();
                }
                get onMessage() {
                    return this.messageEmitter.event;
                }
                sendAccumulated() {
                    const t = this.messagesToSend;
                    this.messagesToSend = [], this.connection.send(JSON.stringify(t));
                }
                send(t) {
                    if (this.toDispose.disposed) throw c.ConnectionClosedError.create();
                    0 === this.messagesToSend.length && setTimeout(this.sendAccumulatedBound, 0), this.messagesToSend.push(t);
                }
                constructor(t){
                    this.messageEmitter = new i.Emitter, this.toDispose = new o.DisposableCollection, this.connection = t, this.sendAccumulatedBound = this.sendAccumulated.bind(this), this.toDispose.push(o.Disposable.create(()=>this.messagesToSend = [])), this.toDispose.push(this.connection.onMessage((t)=>{
                        try {
                            const s = JSON.parse(t);
                            for (const t of s)this.messageEmitter.fire(t);
                        } catch (t) {}
                    })), this.toDispose.push(this.messageEmitter), this.messagesToSend = [];
                }
            };
        },
        22827: (t, s, n)=>{
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.ReplyErrMessage = s.ReplyMessage = s.RequestMessage = s.CancelMessage = s.ReadyMessage = s.OpenMessage = s.ObjectsTransferrer = s.ConnectionClosedError = s.RPC = s.ProxyIdentifier = s.CancellationTokenSource = void 0, s.createProxyIdentifier = function createProxyIdentifier(t) {
                return new ProxyIdentifier(!1, t);
            };
            var i, o, c = n(44656);
            Object.defineProperty(s, "CancellationTokenSource", {
                enumerable: !0,
                get: function() {
                    return c.CancellationTokenSource;
                }
            });
            let ProxyIdentifier = class ProxyIdentifier {
                constructor(t, s){
                    this.isMain = t, this.id = s.toString();
                }
            };
            s.ProxyIdentifier = ProxyIdentifier, s.RPC = Symbol("RPC"), function(t) {
                const s = "RPC_PROTOCOL_CLOSED";
                t.create = function create(t = "connection is closed") {
                    return Object.assign(new Error(t), {
                        code: s
                    });
                }, t.is = function is(t) {
                    return !!t && "object" == typeof t && "code" in t && t.code === s;
                };
            }(i || (s.ConnectionClosedError = i = {})), function(t) {
                t.replacer = function replacer(t, s) {
                    return s;
                }, t.reviver = function reviver(t, s) {
                    return s;
                };
            }(o || (s.ObjectsTransferrer = o = {}));
            s.OpenMessage = class OpenMessage {
            };
            s.ReadyMessage = class ReadyMessage {
            };
            s.CancelMessage = class CancelMessage {
            };
            s.RequestMessage = class RequestMessage {
            };
            s.ReplyMessage = class ReplyMessage {
            };
            s.ReplyErrMessage = class ReplyErrMessage {
            };
        },
        40996: function(t, s, n) {
            var i, o = n(42649);
            i = ()=>(()=>{
                    "use strict";
                    var t = {
                        975: (t)=>{
                            function e(t) {
                                if ("string" != typeof t) throw new TypeError("Path must be a string. Received " + JSON.stringify(t));
                            }
                            function r(t, s) {
                                for(var n, i = "", o = 0, c = -1, h = 0, l = 0; l <= t.length; ++l){
                                    if (l < t.length) n = t.charCodeAt(l);
                                    else {
                                        if (47 === n) break;
                                        n = 47;
                                    }
                                    if (47 === n) {
                                        if (c === l - 1 || 1 === h) ;
                                        else if (c !== l - 1 && 2 === h) {
                                            if (i.length < 2 || 2 !== o || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2)) {
                                                if (i.length > 2) {
                                                    var f = i.lastIndexOf("/");
                                                    if (f !== i.length - 1) {
                                                        -1 === f ? (i = "", o = 0) : o = (i = i.slice(0, f)).length - 1 - i.lastIndexOf("/"), c = l, h = 0;
                                                        continue;
                                                    }
                                                } else if (2 === i.length || 1 === i.length) {
                                                    i = "", o = 0, c = l, h = 0;
                                                    continue;
                                                }
                                            }
                                            s && (i.length > 0 ? i += "/.." : i = "..", o = 2);
                                        } else i.length > 0 ? i += "/" + t.slice(c + 1, l) : i = t.slice(c + 1, l), o = l - c - 1;
                                        c = l, h = 0;
                                    } else 46 === n && -1 !== h ? ++h : h = -1;
                                }
                                return i;
                            }
                            var s = {
                                resolve: function() {
                                    for(var t, s = "", n = !1, i = arguments.length - 1; i >= -1 && !n; i--){
                                        var c;
                                        i >= 0 ? c = arguments[i] : (void 0 === t && (t = o.cwd()), c = t), e(c), 0 !== c.length && (s = c + "/" + s, n = 47 === c.charCodeAt(0));
                                    }
                                    return s = r(s, !n), n ? s.length > 0 ? "/" + s : "/" : s.length > 0 ? s : ".";
                                },
                                normalize: function(t) {
                                    if (e(t), 0 === t.length) return ".";
                                    var s = 47 === t.charCodeAt(0), n = 47 === t.charCodeAt(t.length - 1);
                                    return 0 !== (t = r(t, !s)).length || s || (t = "."), t.length > 0 && n && (t += "/"), s ? "/" + t : t;
                                },
                                isAbsolute: function(t) {
                                    return e(t), t.length > 0 && 47 === t.charCodeAt(0);
                                },
                                join: function() {
                                    if (0 === arguments.length) return ".";
                                    for(var t, n = 0; n < arguments.length; ++n){
                                        var i = arguments[n];
                                        e(i), i.length > 0 && (void 0 === t ? t = i : t += "/" + i);
                                    }
                                    return void 0 === t ? "." : s.normalize(t);
                                },
                                relative: function(t, n) {
                                    if (e(t), e(n), t === n) return "";
                                    if ((t = s.resolve(t)) === (n = s.resolve(n))) return "";
                                    for(var i = 1; i < t.length && 47 === t.charCodeAt(i); ++i);
                                    for(var o = t.length, c = o - i, h = 1; h < n.length && 47 === n.charCodeAt(h); ++h);
                                    for(var l = n.length - h, f = c < l ? c : l, p = -1, C = 0; C <= f; ++C){
                                        if (C === f) {
                                            if (l > f) {
                                                if (47 === n.charCodeAt(h + C)) return n.slice(h + C + 1);
                                                if (0 === C) return n.slice(h + C);
                                            } else c > f && (47 === t.charCodeAt(i + C) ? p = C : 0 === C && (p = 0));
                                            break;
                                        }
                                        var P = t.charCodeAt(i + C);
                                        if (P !== n.charCodeAt(h + C)) break;
                                        47 === P && (p = C);
                                    }
                                    var R = "";
                                    for(C = i + p + 1; C <= o; ++C)C !== o && 47 !== t.charCodeAt(C) || (0 === R.length ? R += ".." : R += "/..");
                                    return R.length > 0 ? R + n.slice(h + p) : (h += p, 47 === n.charCodeAt(h) && ++h, n.slice(h));
                                },
                                _makeLong: function(t) {
                                    return t;
                                },
                                dirname: function(t) {
                                    if (e(t), 0 === t.length) return ".";
                                    for(var s = t.charCodeAt(0), n = 47 === s, i = -1, o = !0, c = t.length - 1; c >= 1; --c)if (47 === (s = t.charCodeAt(c))) {
                                        if (!o) {
                                            i = c;
                                            break;
                                        }
                                    } else o = !1;
                                    return -1 === i ? n ? "/" : "." : n && 1 === i ? "//" : t.slice(0, i);
                                },
                                basename: function(t, s) {
                                    if (void 0 !== s && "string" != typeof s) throw new TypeError('"ext" argument must be a string');
                                    e(t);
                                    var n, i = 0, o = -1, c = !0;
                                    if (void 0 !== s && s.length > 0 && s.length <= t.length) {
                                        if (s.length === t.length && s === t) return "";
                                        var h = s.length - 1, l = -1;
                                        for(n = t.length - 1; n >= 0; --n){
                                            var f = t.charCodeAt(n);
                                            if (47 === f) {
                                                if (!c) {
                                                    i = n + 1;
                                                    break;
                                                }
                                            } else -1 === l && (c = !1, l = n + 1), h >= 0 && (f === s.charCodeAt(h) ? -1 == --h && (o = n) : (h = -1, o = l));
                                        }
                                        return i === o ? o = l : -1 === o && (o = t.length), t.slice(i, o);
                                    }
                                    for(n = t.length - 1; n >= 0; --n)if (47 === t.charCodeAt(n)) {
                                        if (!c) {
                                            i = n + 1;
                                            break;
                                        }
                                    } else -1 === o && (c = !1, o = n + 1);
                                    return -1 === o ? "" : t.slice(i, o);
                                },
                                extname: function(t) {
                                    e(t);
                                    for(var s = -1, n = 0, i = -1, o = !0, c = 0, h = t.length - 1; h >= 0; --h){
                                        var l = t.charCodeAt(h);
                                        if (47 !== l) -1 === i && (o = !1, i = h + 1), 46 === l ? -1 === s ? s = h : 1 !== c && (c = 1) : -1 !== s && (c = -1);
                                        else if (!o) {
                                            n = h + 1;
                                            break;
                                        }
                                    }
                                    return -1 === s || -1 === i || 0 === c || 1 === c && s === i - 1 && s === n + 1 ? "" : t.slice(s, i);
                                },
                                format: function(t) {
                                    if (null === t || "object" != typeof t) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof t);
                                    return function(t, s) {
                                        var n = s.dir || s.root, i = s.base || (s.name || "") + (s.ext || "");
                                        return n ? n === s.root ? n + i : n + "/" + i : i;
                                    }(0, t);
                                },
                                parse: function(t) {
                                    e(t);
                                    var s = {
                                        root: "",
                                        dir: "",
                                        base: "",
                                        ext: "",
                                        name: ""
                                    };
                                    if (0 === t.length) return s;
                                    var n, i = t.charCodeAt(0), o = 47 === i;
                                    o ? (s.root = "/", n = 1) : n = 0;
                                    for(var c = -1, h = 0, l = -1, f = !0, p = t.length - 1, C = 0; p >= n; --p)if (47 !== (i = t.charCodeAt(p))) -1 === l && (f = !1, l = p + 1), 46 === i ? -1 === c ? c = p : 1 !== C && (C = 1) : -1 !== c && (C = -1);
                                    else if (!f) {
                                        h = p + 1;
                                        break;
                                    }
                                    return -1 === c || -1 === l || 0 === C || 1 === C && c === l - 1 && c === h + 1 ? -1 !== l && (s.base = s.name = 0 === h && o ? t.slice(1, l) : t.slice(h, l)) : (0 === h && o ? (s.name = t.slice(1, c), s.base = t.slice(1, l)) : (s.name = t.slice(h, c), s.base = t.slice(h, l)), s.ext = t.slice(c, l)), h > 0 ? s.dir = t.slice(0, h - 1) : o && (s.dir = "/"), s;
                                },
                                sep: "/",
                                delimiter: ":",
                                win32: null,
                                posix: null
                            };
                            s.posix = s, t.exports = s;
                        },
                        70: (t, s)=>{
                            if (Object.defineProperty(s, "__esModule", {
                                value: !0
                            }), s.isWindows = void 0, "object" == typeof o) s.isWindows = "win32" === o.platform;
                            else if ("object" == typeof navigator) {
                                let t = navigator.userAgent;
                                s.isWindows = t.indexOf("Windows") >= 0;
                            }
                        },
                        231: (t, s, n)=>{
                            Object.defineProperty(s, "__esModule", {
                                value: !0
                            }), s.uriToFsPath = s.URI = void 0;
                            const i = n(70), o = /^\w[\w\d+.-]*$/, c = /^\//, h = /^\/\//;
                            function a(t, s) {
                                if (!t.scheme && s) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${t.authority}", path: "${t.path}", query: "${t.query}", fragment: "${t.fragment}"}`);
                                if (t.scheme && !o.test(t.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
                                if (t.path) {
                                    if (t.authority) {
                                        if (!c.test(t.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
                                    } else if (h.test(t.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
                                }
                            }
                            const l = "", f = "/", p = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
                            let u = class u {
                                static isUri(t) {
                                    return t instanceof u || !!t && "string" == typeof t.authority && "string" == typeof t.fragment && "string" == typeof t.path && "string" == typeof t.query && "string" == typeof t.scheme && "string" == typeof t.fsPath && "function" == typeof t.with && "function" == typeof t.toString;
                                }
                                get fsPath() {
                                    return v(this, !1);
                                }
                                with(t) {
                                    if (!t) return this;
                                    let { scheme: s, authority: n, path: i, query: o, fragment: c } = t;
                                    return void 0 === s ? s = this.scheme : null === s && (s = l), void 0 === n ? n = this.authority : null === n && (n = l), void 0 === i ? i = this.path : null === i && (i = l), void 0 === o ? o = this.query : null === o && (o = l), void 0 === c ? c = this.fragment : null === c && (c = l), s === this.scheme && n === this.authority && i === this.path && o === this.query && c === this.fragment ? this : new d(s, n, i, o, c);
                                }
                                static parse(t, s = !1) {
                                    const n = p.exec(t);
                                    return n ? new d(n[2] || l, w(n[4] || l), w(n[5] || l), w(n[7] || l), w(n[9] || l), s) : new d(l, l, l, l, l);
                                }
                                static file(t) {
                                    let s = l;
                                    if (i.isWindows && (t = t.replace(/\\/g, f)), t[0] === f && t[1] === f) {
                                        const n = t.indexOf(f, 2);
                                        -1 === n ? (s = t.substring(2), t = f) : (s = t.substring(2, n), t = t.substring(n) || f);
                                    }
                                    return new d("file", s, t, l, l);
                                }
                                static from(t) {
                                    const s = new d(t.scheme, t.authority, t.path, t.query, t.fragment);
                                    return a(s, !0), s;
                                }
                                toString(t = !1) {
                                    return y(this, t);
                                }
                                toJSON() {
                                    return this;
                                }
                                static revive(t) {
                                    if (t) {
                                        if (t instanceof u) return t;
                                        {
                                            const s = new d(t);
                                            return s._formatted = t.external, s._fsPath = t._sep === C ? t.fsPath : null, s;
                                        }
                                    }
                                    return t;
                                }
                                constructor(t, s, n, i, o, c = !1){
                                    _define_property(this, "scheme", void 0);
                                    _define_property(this, "authority", void 0);
                                    _define_property(this, "path", void 0);
                                    _define_property(this, "query", void 0);
                                    _define_property(this, "fragment", void 0);
                                    "object" == typeof t ? (this.scheme = t.scheme || l, this.authority = t.authority || l, this.path = t.path || l, this.query = t.query || l, this.fragment = t.fragment || l) : (this.scheme = function(t, s) {
                                        return t || s ? t : "file";
                                    }(t, c), this.authority = s || l, this.path = function(t, s) {
                                        switch(t){
                                            case "https":
                                            case "http":
                                            case "file":
                                                s ? s[0] !== f && (s = f + s) : s = f;
                                        }
                                        return s;
                                    }(this.scheme, n || l), this.query = i || l, this.fragment = o || l, a(this, c));
                                }
                            };
                            s.URI = u;
                            const C = i.isWindows ? 1 : void 0;
                            let d = class d extends u {
                                get fsPath() {
                                    return this._fsPath || (this._fsPath = v(this, !1)), this._fsPath;
                                }
                                toString(t = !1) {
                                    return t ? y(this, !0) : (this._formatted || (this._formatted = y(this, !1)), this._formatted);
                                }
                                toJSON() {
                                    const t = {
                                        $mid: 1
                                    };
                                    return this._fsPath && (t.fsPath = this._fsPath, t._sep = C), this._formatted && (t.external = this._formatted), this.path && (t.path = this.path), this.scheme && (t.scheme = this.scheme), this.authority && (t.authority = this.authority), this.query && (t.query = this.query), this.fragment && (t.fragment = this.fragment), t;
                                }
                                constructor(...args){
                                    super(...args), _define_property(this, "_formatted", null), _define_property(this, "_fsPath", null);
                                }
                            };
                            const P = {
                                58: "%3A",
                                47: "%2F",
                                63: "%3F",
                                35: "%23",
                                91: "%5B",
                                93: "%5D",
                                64: "%40",
                                33: "%21",
                                36: "%24",
                                38: "%26",
                                39: "%27",
                                40: "%28",
                                41: "%29",
                                42: "%2A",
                                43: "%2B",
                                44: "%2C",
                                59: "%3B",
                                61: "%3D",
                                32: "%20"
                            };
                            function g(t, s, n) {
                                let i, o = -1;
                                for(let c = 0; c < t.length; c++){
                                    const h = t.charCodeAt(c);
                                    if (h >= 97 && h <= 122 || h >= 65 && h <= 90 || h >= 48 && h <= 57 || 45 === h || 46 === h || 95 === h || 126 === h || s && 47 === h || n && 91 === h || n && 93 === h || n && 58 === h) -1 !== o && (i += encodeURIComponent(t.substring(o, c)), o = -1), void 0 !== i && (i += t.charAt(c));
                                    else {
                                        void 0 === i && (i = t.substr(0, c));
                                        const s = P[h];
                                        void 0 !== s ? (-1 !== o && (i += encodeURIComponent(t.substring(o, c)), o = -1), i += s) : -1 === o && (o = c);
                                    }
                                }
                                return -1 !== o && (i += encodeURIComponent(t.substring(o))), void 0 !== i ? i : t;
                            }
                            function m(t) {
                                let s;
                                for(let n = 0; n < t.length; n++){
                                    const i = t.charCodeAt(n);
                                    35 === i || 63 === i ? (void 0 === s && (s = t.substr(0, n)), s += P[i]) : void 0 !== s && (s += t[n]);
                                }
                                return void 0 !== s ? s : t;
                            }
                            function v(t, s) {
                                let n;
                                return n = t.authority && t.path.length > 1 && "file" === t.scheme ? `//${t.authority}${t.path}` : 47 === t.path.charCodeAt(0) && (t.path.charCodeAt(1) >= 65 && t.path.charCodeAt(1) <= 90 || t.path.charCodeAt(1) >= 97 && t.path.charCodeAt(1) <= 122) && 58 === t.path.charCodeAt(2) ? s ? t.path.substr(1) : t.path[1].toLowerCase() + t.path.substr(2) : t.path, i.isWindows && (n = n.replace(/\//g, "\\")), n;
                            }
                            function y(t, s) {
                                const n = s ? m : g;
                                let i = "", { scheme: o, authority: c, path: h, query: l, fragment: p } = t;
                                if (o && (i += o, i += ":"), (c || "file" === o) && (i += f, i += f), c) {
                                    let t = c.indexOf("@");
                                    if (-1 !== t) {
                                        const s = c.substr(0, t);
                                        c = c.substr(t + 1), t = s.lastIndexOf(":"), -1 === t ? i += n(s, !1, !1) : (i += n(s.substr(0, t), !1, !1), i += ":", i += n(s.substr(t + 1), !1, !0)), i += "@";
                                    }
                                    c = c.toLowerCase(), t = c.lastIndexOf(":"), -1 === t ? i += n(c, !1, !0) : (i += n(c.substr(0, t), !1, !0), i += c.substr(t));
                                }
                                if (h) {
                                    if (h.length >= 3 && 47 === h.charCodeAt(0) && 58 === h.charCodeAt(2)) {
                                        const t = h.charCodeAt(1);
                                        t >= 65 && t <= 90 && (h = `/${String.fromCharCode(t + 32)}:${h.substr(3)}`);
                                    } else if (h.length >= 2 && 58 === h.charCodeAt(1)) {
                                        const t = h.charCodeAt(0);
                                        t >= 65 && t <= 90 && (h = `${String.fromCharCode(t + 32)}:${h.substr(2)}`);
                                    }
                                    i += n(h, !0, !1);
                                }
                                return l && (i += "?", i += n(l, !1, !1)), p && (i += "#", i += s ? p : g(p, !1, !1)), i;
                            }
                            function b(t) {
                                try {
                                    return decodeURIComponent(t);
                                } catch  {
                                    return t.length > 3 ? t.substr(0, 3) + b(t.substr(3)) : t;
                                }
                            }
                            s.uriToFsPath = v;
                            const R = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
                            function w(t) {
                                return t.match(R) ? t.replace(R, (t)=>b(t)) : t;
                            }
                        },
                        552: function(t, s, n) {
                            var i = this && this.__createBinding || (Object.create ? function(t, s, n, i) {
                                void 0 === i && (i = n);
                                var o = Object.getOwnPropertyDescriptor(s, n);
                                o && !("get" in o ? !s.__esModule : o.writable || o.configurable) || (o = {
                                    enumerable: !0,
                                    get: function() {
                                        return s[n];
                                    }
                                }), Object.defineProperty(t, i, o);
                            } : function(t, s, n, i) {
                                void 0 === i && (i = n), t[i] = s[n];
                            }), o = this && this.__setModuleDefault || (Object.create ? function(t, s) {
                                Object.defineProperty(t, "default", {
                                    enumerable: !0,
                                    value: s
                                });
                            } : function(t, s) {
                                t.default = s;
                            }), c = this && this.__importStar || function(t) {
                                if (t && t.__esModule) return t;
                                var s = {};
                                if (null != t) for(var n in t)"default" !== n && Object.prototype.hasOwnProperty.call(t, n) && i(s, t, n);
                                return o(s, t), s;
                            };
                            Object.defineProperty(s, "__esModule", {
                                value: !0
                            }), s.Utils = void 0;
                            const h = c(n(975)), l = h.posix || h, f = "/";
                            var p;
                            !function(t) {
                                t.joinPath = function(t, ...s) {
                                    return t.with({
                                        path: l.join(t.path, ...s)
                                    });
                                }, t.resolvePath = function(t, ...s) {
                                    let n = t.path, i = !1;
                                    n[0] !== f && (n = f + n, i = !0);
                                    let o = l.resolve(n, ...s);
                                    return i && o[0] === f && !t.authority && (o = o.substring(1)), t.with({
                                        path: o
                                    });
                                }, t.dirname = function(t) {
                                    if (0 === t.path.length || t.path === f) return t;
                                    let s = l.dirname(t.path);
                                    return 1 === s.length && 46 === s.charCodeAt(0) && (s = ""), t.with({
                                        path: s
                                    });
                                }, t.basename = function(t) {
                                    return l.basename(t.path);
                                }, t.extname = function(t) {
                                    return l.extname(t.path);
                                };
                            }(p || (s.Utils = p = {}));
                        }
                    }, s = {};
                    function r(n) {
                        var i = s[n];
                        if (void 0 !== i) return i.exports;
                        var o = s[n] = {
                            exports: {}
                        };
                        return t[n].call(o.exports, o, o.exports, r), o.exports;
                    }
                    var n = {};
                    return (()=>{
                        var t = n;
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.Utils = t.URI = void 0;
                        const s = r(231);
                        Object.defineProperty(t, "URI", {
                            enumerable: !0,
                            get: function() {
                                return s.URI;
                            }
                        });
                        const i = r(552);
                        Object.defineProperty(t, "Utils", {
                            enumerable: !0,
                            get: function() {
                                return i.Utils;
                            }
                        });
                    })(), n;
                })(), t.exports = i();
        },
        70182: (t, s, n)=>{
            "use strict";
            var i = n(78);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.RPCImpl = void 0, s.transformErrorForSerialization = transformErrorForSerialization;
            const o = n(41109), c = n(20583), h = n(44656), l = n(22827), f = n(6336);
            function transformErrorForSerialization(t) {
                if (t instanceof Error) {
                    const { name: s, message: n } = t;
                    return {
                        $isError: !0,
                        name: s,
                        message: n,
                        stack: t.stacktrace || t.stack
                    };
                }
                return t;
            }
            function safeStringify(t, s) {
                try {
                    return JSON.stringify(t, s);
                } catch (t) {
                    return i.error("error stringifying response: ", t), "null";
                }
            }
            s.RPCImpl = class RPCImpl {
                async connect() {
                    let t = 0;
                    const s = setInterval(()=>{
                        const n = String(++this.lastMessageId);
                        this.multiplexer.send(this.open(n)), t++, t > 300 && clearInterval(s);
                    }, 500);
                    await this.readyDeferred.promise, clearInterval(s);
                }
                get isDisposed() {
                    return this.toDispose.disposed;
                }
                dispose() {
                    this.toDispose.dispose();
                }
                getProxy(t) {
                    if (this.isDisposed) throw l.ConnectionClosedError.create();
                    let s = this.proxies.get(t.id);
                    return s || (s = this.createProxy(t.id), this.proxies.set(t.id, s)), s;
                }
                getLocal(t) {
                    if (this.isDisposed) throw l.ConnectionClosedError.create();
                    return this.locals.get(t.id);
                }
                set(t, s) {
                    if (this.isDisposed) throw l.ConnectionClosedError.create();
                    return this.locals.set(t.id, s), o.Disposable.is(s) && this.toDispose.push(s), this.toDispose.push(o.Disposable.create(()=>this.locals.delete(t.id))), s;
                }
                createProxy(t) {
                    const s = {
                        get: (s, n)=>(s[n] || (s[n] = (...s)=>this.remoteCall(t, n, s)), s[n])
                    };
                    return new Proxy(Object.create(null), s);
                }
                remoteCall(t, s, n) {
                    return this.isDisposed ? Promise.reject(l.ConnectionClosedError.create()) : this.readyDeferred.promise.then(()=>{
                        const i = n.length && function isCancellationToken(t) {
                            const s = t;
                            return s && (s === h.CancellationToken.None || s === h.CancellationToken.Cancelled || function isBoolean(t) {
                                return !0 === t || !1 === t;
                            }(s.isCancellationRequested) && !!s.onCancellationRequested);
                        }(n[n.length - 1]) ? n.pop() : void 0;
                        if (i && i.isCancellationRequested) return Promise.reject(function canceled() {
                            const t = new Error("Canceled");
                            return t.name = t.message, t;
                        }());
                        const o = String(++this.lastMessageId), l = new c.Deferred;
                        return i && (n.push("add.cancellation.token"), i.onCancellationRequested(()=>this.multiplexer.send(this.cancel(o)))), this.pendingRPCReplies.set(o, l), this.multiplexer.send(this.request(o, t, s, n)), l.promise;
                    });
                }
                receiveOneMessage(t) {
                    if (!this.isDisposed) try {
                        const s = JSON.parse(t, this.reviver);
                        switch(s.type){
                            case 1:
                                this.receiveRequest(s);
                                break;
                            case 2:
                                this.receiveReply(s);
                                break;
                            case 3:
                                this.receiveReplyErr(s);
                                break;
                            case 4:
                                this.receiveCancel(s);
                                break;
                            case 7:
                                this.receiveOpen(s);
                                break;
                            case 8:
                                this.receiveReady(s);
                        }
                    } catch (s) {
                        throw i.log("failed to parse message: " + t), s;
                    }
                }
                receiveOpen(t) {
                    this.multiplexer.send(this.replyReady(t.id));
                }
                receiveReady(t) {
                    this.readyDeferred.resolve();
                }
                receiveCancel(t) {
                    const s = this.cancellationTokenSources.get(t.id);
                    s && s.cancel();
                }
                receiveRequest(t) {
                    const s = t.id, n = t.proxyId, i = t.args.map((t)=>null === t ? void 0 : t);
                    if (!(!i.length || "add.cancellation.token" !== i[i.length - 1]) && i.pop()) {
                        const t = new h.CancellationTokenSource;
                        this.cancellationTokenSources.set(s, t), i.push(t.token);
                    }
                    this.invokeHandler(n, t.method, i).then((t)=>{
                        this.cancellationTokenSources.delete(s), this.multiplexer.send(this.replyOK(s, t));
                    }, (t)=>{
                        this.cancellationTokenSources.delete(s), this.multiplexer.send(this.replyErr(s, t));
                    });
                }
                receiveReply(t) {
                    const s = t.id, n = this.pendingRPCReplies.get(s);
                    n && (this.pendingRPCReplies.delete(s), n.resolve(t.res));
                }
                receiveReplyErr(t) {
                    const s = t.id, n = this.pendingRPCReplies.get(s);
                    if (!n) return;
                    let i;
                    this.pendingRPCReplies.delete(s), t.err && t.err.$isError && (i = new Error, i.name = t.err.name, i.message = t.err.message, i.stack = t.err.stack), n.reject(i);
                }
                invokeHandler(t, s, n) {
                    try {
                        return Promise.resolve(this.doInvokeHandler(t, s, n));
                    } catch (t) {
                        return Promise.reject(t);
                    }
                }
                doInvokeHandler(t, s, n) {
                    const i = this.locals.get(t);
                    if (!i) throw new Error("Unknown actor " + t);
                    const o = i[s];
                    if ("function" != typeof o) throw new Error("Unknown method " + s + " on actor " + t);
                    return o.apply(i, n);
                }
                cancel(t) {
                    return `{"type":4,"id":"${t}"}`;
                }
                open(t) {
                    return `{"type":7,"id":"${t}"}`;
                }
                request(t, s, n, i) {
                    return `{"type":1,"id":"${t}","proxyId":"${s}","method":"${n}","args":${JSON.stringify(i, this.replacer)}}`;
                }
                replyReady(t) {
                    return `{"type":8,"id":"${t}"}`;
                }
                replyOK(t, s) {
                    return void 0 === s ? `{"type":2,"id":"${t}"}` : `{"type":2,"id":"${t}","res":${safeStringify(s, this.replacer)}}`;
                }
                replyErr(t, s) {
                    return (s = "string" == typeof s ? new Error(s) : s) instanceof Error ? `{"type":3,"id":"${t}","err":${safeStringify(transformErrorForSerialization(s))}}` : `{"type":3,"id":"${t}","err":null}`;
                }
                constructor(t, s){
                    this.locals = new Map, this.proxies = new Map, this.lastMessageId = 0, this.cancellationTokenSources = new Map, this.pendingRPCReplies = new Map, this.readyDeferred = new c.Deferred, this.toDispose = new o.DisposableCollection(o.Disposable.create(()=>{})), this.toDispose.push(this.multiplexer = new f.RPCMultiplexer(t)), this.multiplexer.onMessage((t)=>this.receiveOneMessage(t)), this.toDispose.push(o.Disposable.create(()=>{
                        this.proxies.clear();
                        for (const t of this.pendingRPCReplies.values())t.reject(l.ConnectionClosedError.create());
                        this.pendingRPCReplies.clear();
                    })), this.reviver = (null == s ? void 0 : s.reviver) || l.ObjectsTransferrer.reviver, this.replacer = (null == s ? void 0 : s.replacer) || l.ObjectsTransferrer.replacer, this.connect();
                }
            };
        },
        89829: function(t, s, n) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(t, s, n, i) {
                void 0 === i && (i = n);
                var o = Object.getOwnPropertyDescriptor(s, n);
                o && !("get" in o ? !s.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return s[n];
                    }
                }), Object.defineProperty(t, i, o);
            } : function(t, s, n, i) {
                void 0 === i && (i = n), t[i] = s[n];
            }), o = this && this.__exportStar || function(t, s) {
                for(var n in t)"default" === n || Object.prototype.hasOwnProperty.call(s, n) || i(s, t, n);
            };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), o(n(6336), s), o(n(22827), s), o(n(70182), s);
        }
    }
]); //# sourceMappingURL=2784.08bf6af074bc3d88c09d.js.map
