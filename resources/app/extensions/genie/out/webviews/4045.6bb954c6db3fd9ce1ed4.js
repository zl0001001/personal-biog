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
        4045
    ],
    {
        46: (t, n, i)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.memfs = n.fs = n.vol = n.Volume = void 0, n.createFsFromVolume = createFsFromVolume;
            const s = i(67973), o = i(83608), c = i(96442);
            Object.defineProperty(n, "Volume", {
                enumerable: !0,
                get: function() {
                    return c.Volume;
                }
            });
            const l = i(70111), h = i(2185), f = i(66777), { F_OK: p, R_OK: _, W_OK: S, X_OK: O } = l.constants;
            function createFsFromVolume(t) {
                const n = {
                    F_OK: p,
                    R_OK: _,
                    W_OK: S,
                    X_OK: O,
                    constants: l.constants,
                    Stats: s.default,
                    Dirent: o.default
                };
                for (const i of h.fsSynchronousApiList)"function" == typeof t[i] && (n[i] = t[i].bind(t));
                for (const i of f.fsCallbackApiList)"function" == typeof t[i] && (n[i] = t[i].bind(t));
                return n.StatWatcher = t.StatWatcher, n.FSWatcher = t.FSWatcher, n.WriteStream = t.WriteStream, n.ReadStream = t.ReadStream, n.promises = t.promises, n._toUnixTimestamp = c.toUnixTimestamp, n.__vol = t, n;
            }
            n.vol = new c.Volume, n.fs = createFsFromVolume(n.vol);
            n.memfs = (t = {}, n = "/")=>{
                const i = c.Volume.fromNestedJSON(t, n);
                return {
                    fs: createFsFromVolume(i),
                    vol: i
                };
            }, t.exports = Object.assign(Object.assign({}, t.exports), n.fs), t.exports.semantic = !0;
        },
        2185: (t, n)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.fsSynchronousApiList = void 0, n.fsSynchronousApiList = [
                "accessSync",
                "appendFileSync",
                "chmodSync",
                "chownSync",
                "closeSync",
                "copyFileSync",
                "existsSync",
                "fchmodSync",
                "fchownSync",
                "fdatasyncSync",
                "fstatSync",
                "fsyncSync",
                "ftruncateSync",
                "futimesSync",
                "lchmodSync",
                "lchownSync",
                "linkSync",
                "lstatSync",
                "mkdirSync",
                "mkdtempSync",
                "openSync",
                "readdirSync",
                "readFileSync",
                "readlinkSync",
                "readSync",
                "readvSync",
                "realpathSync",
                "renameSync",
                "rmdirSync",
                "rmSync",
                "statSync",
                "symlinkSync",
                "truncateSync",
                "unlinkSync",
                "utimesSync",
                "lutimesSync",
                "writeFileSync",
                "writeSync",
                "writevSync"
            ];
        },
        2487: (t, n)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.printBinary = void 0;
            n.printBinary = (t = "", n)=>{
                const i = n[0], s = n[1];
                let o = "";
                return i && (o += "\n" + t + "← " + i(t + "  ")), s && (o += "\n" + t + "→ " + s(t + "  ")), o;
            };
        },
        4794: (t, n, i)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.FsPromises = void 0;
            const s = i(75043), o = i(70111);
            n.FsPromises = class FsPromises {
                constructor(t, n){
                    this.fs = t, this.FileHandle = n, this.constants = o.constants, this.cp = (0, s.promisify)(this.fs, "cp"), this.opendir = (0, s.promisify)(this.fs, "opendir"), this.statfs = (0, s.promisify)(this.fs, "statfs"), this.lutimes = (0, s.promisify)(this.fs, "lutimes"), this.access = (0, s.promisify)(this.fs, "access"), this.chmod = (0, s.promisify)(this.fs, "chmod"), this.chown = (0, s.promisify)(this.fs, "chown"), this.copyFile = (0, s.promisify)(this.fs, "copyFile"), this.lchmod = (0, s.promisify)(this.fs, "lchmod"), this.lchown = (0, s.promisify)(this.fs, "lchown"), this.link = (0, s.promisify)(this.fs, "link"), this.lstat = (0, s.promisify)(this.fs, "lstat"), this.mkdir = (0, s.promisify)(this.fs, "mkdir"), this.mkdtemp = (0, s.promisify)(this.fs, "mkdtemp"), this.readdir = (0, s.promisify)(this.fs, "readdir"), this.readlink = (0, s.promisify)(this.fs, "readlink"), this.realpath = (0, s.promisify)(this.fs, "realpath"), this.rename = (0, s.promisify)(this.fs, "rename"), this.rmdir = (0, s.promisify)(this.fs, "rmdir"), this.rm = (0, s.promisify)(this.fs, "rm"), this.stat = (0, s.promisify)(this.fs, "stat"), this.symlink = (0, s.promisify)(this.fs, "symlink"), this.truncate = (0, s.promisify)(this.fs, "truncate"), this.unlink = (0, s.promisify)(this.fs, "unlink"), this.utimes = (0, s.promisify)(this.fs, "utimes"), this.readFile = (t, n)=>(0, s.promisify)(this.fs, "readFile")(t instanceof this.FileHandle ? t.fd : t, n), this.appendFile = (t, n, i)=>(0, s.promisify)(this.fs, "appendFile")(t instanceof this.FileHandle ? t.fd : t, n, i), this.open = (t, n = "r", i)=>(0, s.promisify)(this.fs, "open", (t)=>new this.FileHandle(this.fs, t))(t, n, i), this.writeFile = (t, n, i)=>((0, s.isReadableStream)(n) ? (0, s.streamToBuffer)(n) : Promise.resolve(n)).then((n)=>(0, s.promisify)(this.fs, "writeFile")(t instanceof this.FileHandle ? t.fd : t, n, i)), this.watch = ()=>{
                        throw new Error("Not implemented");
                    };
                }
            };
        },
        7215: (t, n, i)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.AssertionError = n.RangeError = n.TypeError = n.Error = void 0, n.message = message, n.E = E;
            const s = i(89791), o = i(79154), c = "undefined" == typeof Symbol ? "_kCode" : Symbol("code"), l = {};
            function makeNodeError(t) {
                return class NodeError extends t {
                    constructor(t, ...n){
                        super(message(t, n)), this.code = t, this[c] = t, this.name = `${super.name} [${this[c]}]`;
                    }
                };
            }
            const h = "undefined" != typeof globalThis ? globalThis : i.g;
            let AssertionError = class AssertionError extends h.Error {
                constructor(t){
                    if ("object" != typeof t || null === t) throw new n.TypeError("ERR_INVALID_ARG_TYPE", "options", "object");
                    t.message ? super(t.message) : super(`${o.inspect(t.actual).slice(0, 128)} ${t.operator} ${o.inspect(t.expected).slice(0, 128)}`), this.generatedMessage = !t.message, this.name = "AssertionError [ERR_ASSERTION]", this.code = "ERR_ASSERTION", this.actual = t.actual, this.expected = t.expected, this.operator = t.operator, n.Error.captureStackTrace(this, t.stackStartFunction);
                }
            };
            function message(t, n) {
                s.strictEqual(typeof t, "string");
                const i = l[t];
                let c;
                if (s(i, `An invalid error message key was used: ${t}.`), "function" == typeof i) c = i;
                else {
                    if (c = o.format, void 0 === n || 0 === n.length) return i;
                    n.unshift(i);
                }
                return String(c.apply(null, n));
            }
            function E(t, n) {
                l[t] = "function" == typeof n ? n : String(n);
            }
            function oneOf(t, n) {
                if (s(t, "expected is required"), s("string" == typeof n, "thing is required"), Array.isArray(t)) {
                    const i = t.length;
                    return s(i > 0, "At least one expected value needs to be specified"), t = t.map((t)=>String(t)), i > 2 ? `one of ${n} ${t.slice(0, i - 1).join(", ")}, or ` + t[i - 1] : 2 === i ? `one of ${n} ${t[0]} or ${t[1]}` : `of ${n} ${t[0]}`;
                }
                return `of ${n} ${String(t)}`;
            }
            n.AssertionError = AssertionError, n.Error = makeNodeError(h.Error), n.TypeError = makeNodeError(h.TypeError), n.RangeError = makeNodeError(h.RangeError), E("ERR_ARG_NOT_ITERABLE", "%s must be iterable"), E("ERR_ASSERTION", "%s"), E("ERR_BUFFER_OUT_OF_BOUNDS", function bufferOutOfBounds(t, n) {
                return n ? "Attempt to write outside buffer bounds" : `"${t}" is outside of buffer bounds`;
            }), E("ERR_CHILD_CLOSED_BEFORE_REPLY", "Child closed before reply received"), E("ERR_CONSOLE_WRITABLE_STREAM", "Console expects a writable stream instance for %s"), E("ERR_CPU_USAGE", "Unable to obtain cpu usage %s"), E("ERR_DNS_SET_SERVERS_FAILED", (t, n)=>`c-ares failed to set servers: "${t}" [${n}]`), E("ERR_FALSY_VALUE_REJECTION", "Promise was rejected with falsy value"), E("ERR_ENCODING_NOT_SUPPORTED", (t)=>`The "${t}" encoding is not supported`), E("ERR_ENCODING_INVALID_ENCODED_DATA", (t)=>`The encoded data was not valid for encoding ${t}`), E("ERR_HTTP_HEADERS_SENT", "Cannot render headers after they are sent to the client"), E("ERR_HTTP_INVALID_STATUS_CODE", "Invalid status code: %s"), E("ERR_HTTP_TRAILER_INVALID", "Trailers are invalid with this transfer encoding"), E("ERR_INDEX_OUT_OF_RANGE", "Index out of range"), E("ERR_INVALID_ARG_TYPE", function invalidArgType(t, n, i) {
                let o, c;
                s(t, "name is required"), n.includes("not ") ? (o = "must not be", n = n.split("not ")[1]) : o = "must be";
                if (Array.isArray(t)) {
                    c = `The ${t.map((t)=>`"${t}"`).join(", ")} arguments ${o} ${oneOf(n, "type")}`;
                } else if (t.includes(" argument")) c = `The ${t} ${o} ${oneOf(n, "type")}`;
                else {
                    const i = t.includes(".") ? "property" : "argument";
                    c = `The "${t}" ${i} ${o} ${oneOf(n, "type")}`;
                }
                arguments.length >= 3 && (c += ". Received type " + (null !== i ? typeof i : "null"));
                return c;
            }), E("ERR_INVALID_ARRAY_LENGTH", (t, n, i)=>(s.strictEqual(typeof i, "number"), `The array "${t}" (length ${i}) must be of length ${n}.`)), E("ERR_INVALID_BUFFER_SIZE", "Buffer size must be a multiple of %s"), E("ERR_INVALID_CALLBACK", "Callback must be a function"), E("ERR_INVALID_CHAR", "Invalid character in %s"), E("ERR_INVALID_CURSOR_POS", "Cannot set cursor row without setting its column"), E("ERR_INVALID_FD", '"fd" must be a positive integer: %s'), E("ERR_INVALID_FILE_URL_HOST", 'File URL host must be "localhost" or empty on %s'), E("ERR_INVALID_FILE_URL_PATH", "File URL path %s"), E("ERR_INVALID_HANDLE_TYPE", "This handle type cannot be sent"), E("ERR_INVALID_IP_ADDRESS", "Invalid IP address: %s"), E("ERR_INVALID_OPT_VALUE", (t, n)=>`The value "${String(n)}" is invalid for option "${t}"`), E("ERR_INVALID_OPT_VALUE_ENCODING", (t)=>`The value "${String(t)}" is invalid for option "encoding"`), E("ERR_INVALID_REPL_EVAL_CONFIG", 'Cannot specify both "breakEvalOnSigint" and "eval" for REPL'), E("ERR_INVALID_SYNC_FORK_INPUT", "Asynchronous forks do not support Buffer, Uint8Array or string input: %s"), E("ERR_INVALID_THIS", 'Value of "this" must be of type %s'), E("ERR_INVALID_TUPLE", "%s must be an iterable %s tuple"), E("ERR_INVALID_URL", "Invalid URL: %s"), E("ERR_INVALID_URL_SCHEME", (t)=>`The URL must be ${oneOf(t, "scheme")}`), E("ERR_IPC_CHANNEL_CLOSED", "Channel closed"), E("ERR_IPC_DISCONNECTED", "IPC channel is already disconnected"), E("ERR_IPC_ONE_PIPE", "Child process can have only one IPC pipe"), E("ERR_IPC_SYNC_FORK", "IPC cannot be used with synchronous forks"), E("ERR_MISSING_ARGS", function missingArgs(...t) {
                s(t.length > 0, "At least one arg needs to be specified");
                let n = "The ";
                const i = t.length;
                switch(t = t.map((t)=>`"${t}"`), i){
                    case 1:
                        n += `${t[0]} argument`;
                        break;
                    case 2:
                        n += `${t[0]} and ${t[1]} arguments`;
                        break;
                    default:
                        n += t.slice(0, i - 1).join(", "), n += `, and ${t[i - 1]} arguments`;
                }
                return `${n} must be specified`;
            }), E("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), E("ERR_NAPI_CONS_FUNCTION", "Constructor must be a function"), E("ERR_NAPI_CONS_PROTOTYPE_OBJECT", "Constructor.prototype must be an object"), E("ERR_NO_CRYPTO", "Node.js is not compiled with OpenSSL crypto support"), E("ERR_NO_LONGER_SUPPORTED", "%s is no longer supported"), E("ERR_PARSE_HISTORY_DATA", "Could not parse history data in %s"), E("ERR_SOCKET_ALREADY_BOUND", "Socket is already bound"), E("ERR_SOCKET_BAD_PORT", "Port should be > 0 and < 65536"), E("ERR_SOCKET_BAD_TYPE", "Bad socket type specified. Valid types are: udp4, udp6"), E("ERR_SOCKET_CANNOT_SEND", "Unable to send data"), E("ERR_SOCKET_CLOSED", "Socket is closed"), E("ERR_SOCKET_DGRAM_NOT_RUNNING", "Not running"), E("ERR_STDERR_CLOSE", "process.stderr cannot be closed"), E("ERR_STDOUT_CLOSE", "process.stdout cannot be closed"), E("ERR_STREAM_WRAP", "Stream has StringDecoder set or is in objectMode"), E("ERR_TLS_CERT_ALTNAME_INVALID", "Hostname/IP does not match certificate's altnames: %s"), E("ERR_TLS_DH_PARAM_SIZE", (t)=>`DH parameter size ${t} is less than 2048`), E("ERR_TLS_HANDSHAKE_TIMEOUT", "TLS handshake timeout"), E("ERR_TLS_RENEGOTIATION_FAILED", "Failed to renegotiate"), E("ERR_TLS_REQUIRED_SERVER_NAME", '"servername" is required parameter for Server.addContext'), E("ERR_TLS_SESSION_ATTACK", "TSL session renegotiation attack detected"), E("ERR_TRANSFORM_ALREADY_TRANSFORMING", "Calling transform done when still transforming"), E("ERR_TRANSFORM_WITH_LENGTH_0", "Calling transform done when writableState.length != 0"), E("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s"), E("ERR_UNKNOWN_SIGNAL", "Unknown signal: %s"), E("ERR_UNKNOWN_STDIN_TYPE", "Unknown stdin file type"), E("ERR_UNKNOWN_STREAM_TYPE", "Unknown stream file type"), E("ERR_V8BREAKITERATOR", "Full ICU data not installed. See https://github.com/nodejs/node/wiki/Intl");
        },
        9530: (t, n)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.printTree = void 0;
            n.printTree = (t = "", n)=>{
                let i = "", s = n.length - 1;
                for(; s >= 0 && !n[s]; s--);
                for(let o = 0; o <= s; o++){
                    const c = n[o];
                    if (!c) continue;
                    const l = o === s, h = c(t + (l ? " " : "│") + "  ");
                    i += "\n" + t + (h ? l ? "└─" : "├─" : "│") + (h ? " " + h : "");
                }
                return i;
            };
        },
        11347: (t, n, i)=>{
            "use strict";
            var s = i(76361), o = Object.prototype.hasOwnProperty, c = Array.isArray, l = {
                allowDots: !1,
                allowEmptyArrays: !1,
                allowPrototypes: !1,
                allowSparse: !1,
                arrayLimit: 20,
                charset: "utf-8",
                charsetSentinel: !1,
                comma: !1,
                decodeDotInKeys: !1,
                decoder: s.decode,
                delimiter: "&",
                depth: 5,
                duplicates: "combine",
                ignoreQueryPrefix: !1,
                interpretNumericEntities: !1,
                parameterLimit: 1e3,
                parseArrays: !0,
                plainObjects: !1,
                strictDepth: !1,
                strictNullHandling: !1,
                throwOnLimitExceeded: !1
            }, interpretNumericEntities = function(t) {
                return t.replace(/&#(\d+);/g, function(t, n) {
                    return String.fromCharCode(parseInt(n, 10));
                });
            }, parseArrayValue = function(t, n, i) {
                if (t && "string" == typeof t && n.comma && t.indexOf(",") > -1) return t.split(",");
                if (n.throwOnLimitExceeded && i >= n.arrayLimit) throw new RangeError("Array limit exceeded. Only " + n.arrayLimit + " element" + (1 === n.arrayLimit ? "" : "s") + " allowed in an array.");
                return t;
            }, h = function parseQueryStringKeys(t, n, i, c) {
                if (t) {
                    var l = i.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, h = /(\[[^[\]]*])/g, f = i.depth > 0 && /(\[[^[\]]*])/.exec(l), p = f ? l.slice(0, f.index) : l, _ = [];
                    if (p) {
                        if (!i.plainObjects && o.call(Object.prototype, p) && !i.allowPrototypes) return;
                        _.push(p);
                    }
                    for(var S = 0; i.depth > 0 && null !== (f = h.exec(l)) && S < i.depth;){
                        if (S += 1, !i.plainObjects && o.call(Object.prototype, f[1].slice(1, -1)) && !i.allowPrototypes) return;
                        _.push(f[1]);
                    }
                    if (f) {
                        if (!0 === i.strictDepth) throw new RangeError("Input depth exceeded depth option of " + i.depth + " and strictDepth is true");
                        _.push("[" + l.slice(f.index) + "]");
                    }
                    return function(t, n, i, o) {
                        var c = 0;
                        if (t.length > 0 && "[]" === t[t.length - 1]) {
                            var l = t.slice(0, -1).join("");
                            c = Array.isArray(n) && n[l] ? n[l].length : 0;
                        }
                        for(var h = o ? n : parseArrayValue(n, i, c), f = t.length - 1; f >= 0; --f){
                            var p, _ = t[f];
                            if ("[]" === _ && i.parseArrays) p = i.allowEmptyArrays && ("" === h || i.strictNullHandling && null === h) ? [] : s.combine([], h);
                            else {
                                p = i.plainObjects ? {
                                    __proto__: null
                                } : {};
                                var S = "[" === _.charAt(0) && "]" === _.charAt(_.length - 1) ? _.slice(1, -1) : _, O = i.decodeDotInKeys ? S.replace(/%2E/g, ".") : S, R = parseInt(O, 10);
                                i.parseArrays || "" !== O ? !isNaN(R) && _ !== O && String(R) === O && R >= 0 && i.parseArrays && R <= i.arrayLimit ? (p = [])[R] = h : "__proto__" !== O && (p[O] = h) : p = {
                                    0: h
                                };
                            }
                            h = p;
                        }
                        return h;
                    }(_, n, i, c);
                }
            };
            t.exports = function(t, n) {
                var i = function normalizeParseOptions(t) {
                    if (!t) return l;
                    if (void 0 !== t.allowEmptyArrays && "boolean" != typeof t.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                    if (void 0 !== t.decodeDotInKeys && "boolean" != typeof t.decodeDotInKeys) throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
                    if (null !== t.decoder && void 0 !== t.decoder && "function" != typeof t.decoder) throw new TypeError("Decoder has to be a function.");
                    if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    if (void 0 !== t.throwOnLimitExceeded && "boolean" != typeof t.throwOnLimitExceeded) throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
                    var n = void 0 === t.charset ? l.charset : t.charset, i = void 0 === t.duplicates ? l.duplicates : t.duplicates;
                    if ("combine" !== i && "first" !== i && "last" !== i) throw new TypeError("The duplicates option must be either combine, first, or last");
                    return {
                        allowDots: void 0 === t.allowDots ? !0 === t.decodeDotInKeys || l.allowDots : !!t.allowDots,
                        allowEmptyArrays: "boolean" == typeof t.allowEmptyArrays ? !!t.allowEmptyArrays : l.allowEmptyArrays,
                        allowPrototypes: "boolean" == typeof t.allowPrototypes ? t.allowPrototypes : l.allowPrototypes,
                        allowSparse: "boolean" == typeof t.allowSparse ? t.allowSparse : l.allowSparse,
                        arrayLimit: "number" == typeof t.arrayLimit ? t.arrayLimit : l.arrayLimit,
                        charset: n,
                        charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : l.charsetSentinel,
                        comma: "boolean" == typeof t.comma ? t.comma : l.comma,
                        decodeDotInKeys: "boolean" == typeof t.decodeDotInKeys ? t.decodeDotInKeys : l.decodeDotInKeys,
                        decoder: "function" == typeof t.decoder ? t.decoder : l.decoder,
                        delimiter: "string" == typeof t.delimiter || s.isRegExp(t.delimiter) ? t.delimiter : l.delimiter,
                        depth: "number" == typeof t.depth || !1 === t.depth ? +t.depth : l.depth,
                        duplicates: i,
                        ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
                        interpretNumericEntities: "boolean" == typeof t.interpretNumericEntities ? t.interpretNumericEntities : l.interpretNumericEntities,
                        parameterLimit: "number" == typeof t.parameterLimit ? t.parameterLimit : l.parameterLimit,
                        parseArrays: !1 !== t.parseArrays,
                        plainObjects: "boolean" == typeof t.plainObjects ? t.plainObjects : l.plainObjects,
                        strictDepth: "boolean" == typeof t.strictDepth ? !!t.strictDepth : l.strictDepth,
                        strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : l.strictNullHandling,
                        throwOnLimitExceeded: "boolean" == typeof t.throwOnLimitExceeded && t.throwOnLimitExceeded
                    };
                }(n);
                if ("" === t || null == t) return i.plainObjects ? {
                    __proto__: null
                } : {};
                for(var f = "string" == typeof t ? function parseQueryStringValues(t, n) {
                    var i = {
                        __proto__: null
                    }, h = n.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
                    h = h.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
                    var f = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, p = h.split(n.delimiter, n.throwOnLimitExceeded ? f + 1 : f);
                    if (n.throwOnLimitExceeded && p.length > f) throw new RangeError("Parameter limit exceeded. Only " + f + " parameter" + (1 === f ? "" : "s") + " allowed.");
                    var _, S = -1, O = n.charset;
                    if (n.charsetSentinel) for(_ = 0; _ < p.length; ++_)0 === p[_].indexOf("utf8=") && ("utf8=%E2%9C%93" === p[_] ? O = "utf-8" : "utf8=%26%2310003%3B" === p[_] && (O = "iso-8859-1"), S = _, _ = p.length);
                    for(_ = 0; _ < p.length; ++_)if (_ !== S) {
                        var R, T, F = p[_], A = F.indexOf("]="), N = -1 === A ? F.indexOf("=") : A + 1;
                        -1 === N ? (R = n.decoder(F, l.decoder, O, "key"), T = n.strictNullHandling ? null : "") : (R = n.decoder(F.slice(0, N), l.decoder, O, "key"), T = s.maybeMap(parseArrayValue(F.slice(N + 1), n, c(i[R]) ? i[R].length : 0), function(t) {
                            return n.decoder(t, l.decoder, O, "value");
                        })), T && n.interpretNumericEntities && "iso-8859-1" === O && (T = interpretNumericEntities(String(T))), F.indexOf("[]=") > -1 && (T = c(T) ? [
                            T
                        ] : T);
                        var I = o.call(i, R);
                        I && "combine" === n.duplicates ? i[R] = s.combine(i[R], T) : I && "last" !== n.duplicates || (i[R] = T);
                    }
                    return i;
                }(t, i) : t, p = i.plainObjects ? {
                    __proto__: null
                } : {}, _ = Object.keys(f), S = 0; S < _.length; ++S){
                    var O = _[S], R = h(O, f[O], i, "string" == typeof t);
                    p = s.merge(p, R, i);
                }
                return !0 === i.allowSparse ? p : s.compact(p);
            };
        },
        12477: (t, n, i)=>{
            "use strict";
            var s = i(45921), o = i(76361), c = i(65136), l = Object.prototype.hasOwnProperty, h = {
                brackets: function brackets(t) {
                    return t + "[]";
                },
                comma: "comma",
                indices: function indices(t, n) {
                    return t + "[" + n + "]";
                },
                repeat: function repeat(t) {
                    return t;
                }
            }, f = Array.isArray, p = Array.prototype.push, pushToArray = function(t, n) {
                p.apply(t, f(n) ? n : [
                    n
                ]);
            }, _ = Date.prototype.toISOString, S = c.default, O = {
                addQueryPrefix: !1,
                allowDots: !1,
                allowEmptyArrays: !1,
                arrayFormat: "indices",
                charset: "utf-8",
                charsetSentinel: !1,
                commaRoundTrip: !1,
                delimiter: "&",
                encode: !0,
                encodeDotInKeys: !1,
                encoder: o.encode,
                encodeValuesOnly: !1,
                filter: void 0,
                format: S,
                formatter: c.formatters[S],
                indices: !1,
                serializeDate: function serializeDate(t) {
                    return _.call(t);
                },
                skipNulls: !1,
                strictNullHandling: !1
            }, R = {}, T = function stringify(t, n, i, c, l, h, p, _, S, T, F, A, N, I, k, C, P, D) {
                for(var L = t, x = D, B = 0, j = !1; void 0 !== (x = x.get(R)) && !j;){
                    var U = x.get(t);
                    if (B += 1, void 0 !== U) {
                        if (U === B) throw new RangeError("Cyclic object value");
                        j = !0;
                    }
                    void 0 === x.get(R) && (B = 0);
                }
                if ("function" == typeof T ? L = T(n, L) : L instanceof Date ? L = N(L) : "comma" === i && f(L) && (L = o.maybeMap(L, function(t) {
                    return t instanceof Date ? N(t) : t;
                })), null === L) {
                    if (h) return S && !C ? S(n, O.encoder, P, "key", I) : n;
                    L = "";
                }
                if (function isNonNullishPrimitive(t) {
                    return "string" == typeof t || "number" == typeof t || "boolean" == typeof t || "symbol" == typeof t || "bigint" == typeof t;
                }(L) || o.isBuffer(L)) return S ? [
                    k(C ? n : S(n, O.encoder, P, "key", I)) + "=" + k(S(L, O.encoder, P, "value", I))
                ] : [
                    k(n) + "=" + k(String(L))
                ];
                var M, W = [];
                if (void 0 === L) return W;
                if ("comma" === i && f(L)) C && S && (L = o.maybeMap(L, S)), M = [
                    {
                        value: L.length > 0 ? L.join(",") || null : void 0
                    }
                ];
                else if (f(T)) M = T;
                else {
                    var $ = Object.keys(L);
                    M = F ? $.sort(F) : $;
                }
                var G = _ ? String(n).replace(/\./g, "%2E") : String(n), V = c && f(L) && 1 === L.length ? G + "[]" : G;
                if (l && f(L) && 0 === L.length) return V + "[]";
                for(var K = 0; K < M.length; ++K){
                    var H = M[K], q = "object" == typeof H && H && void 0 !== H.value ? H.value : L[H];
                    if (!p || null !== q) {
                        var Y = A && _ ? String(H).replace(/\./g, "%2E") : String(H), z = f(L) ? "function" == typeof i ? i(V, Y) : V : V + (A ? "." + Y : "[" + Y + "]");
                        D.set(t, B);
                        var J = s();
                        J.set(R, D), pushToArray(W, stringify(q, z, i, c, l, h, p, _, "comma" === i && C && f(L) ? null : S, T, F, A, N, I, k, C, P, J));
                    }
                }
                return W;
            };
            t.exports = function(t, n) {
                var i, o = t, p = function normalizeStringifyOptions(t) {
                    if (!t) return O;
                    if (void 0 !== t.allowEmptyArrays && "boolean" != typeof t.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                    if (void 0 !== t.encodeDotInKeys && "boolean" != typeof t.encodeDotInKeys) throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
                    if (null !== t.encoder && void 0 !== t.encoder && "function" != typeof t.encoder) throw new TypeError("Encoder has to be a function.");
                    var n = t.charset || O.charset;
                    if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var i = c.default;
                    if (void 0 !== t.format) {
                        if (!l.call(c.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                        i = t.format;
                    }
                    var s, o = c.formatters[i], p = O.filter;
                    if (("function" == typeof t.filter || f(t.filter)) && (p = t.filter), s = t.arrayFormat in h ? t.arrayFormat : "indices" in t ? t.indices ? "indices" : "repeat" : O.arrayFormat, "commaRoundTrip" in t && "boolean" != typeof t.commaRoundTrip) throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
                    var _ = void 0 === t.allowDots ? !0 === t.encodeDotInKeys || O.allowDots : !!t.allowDots;
                    return {
                        addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : O.addQueryPrefix,
                        allowDots: _,
                        allowEmptyArrays: "boolean" == typeof t.allowEmptyArrays ? !!t.allowEmptyArrays : O.allowEmptyArrays,
                        arrayFormat: s,
                        charset: n,
                        charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : O.charsetSentinel,
                        commaRoundTrip: !!t.commaRoundTrip,
                        delimiter: void 0 === t.delimiter ? O.delimiter : t.delimiter,
                        encode: "boolean" == typeof t.encode ? t.encode : O.encode,
                        encodeDotInKeys: "boolean" == typeof t.encodeDotInKeys ? t.encodeDotInKeys : O.encodeDotInKeys,
                        encoder: "function" == typeof t.encoder ? t.encoder : O.encoder,
                        encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : O.encodeValuesOnly,
                        filter: p,
                        format: i,
                        formatter: o,
                        serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : O.serializeDate,
                        skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : O.skipNulls,
                        sort: "function" == typeof t.sort ? t.sort : null,
                        strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : O.strictNullHandling
                    };
                }(n);
                "function" == typeof p.filter ? o = (0, p.filter)("", o) : f(p.filter) && (i = p.filter);
                var _ = [];
                if ("object" != typeof o || null === o) return "";
                var S = h[p.arrayFormat], R = "comma" === S && p.commaRoundTrip;
                i || (i = Object.keys(o)), p.sort && i.sort(p.sort);
                for(var F = s(), A = 0; A < i.length; ++A){
                    var N = i[A], I = o[N];
                    p.skipNulls && null === I || pushToArray(_, T(I, N, S, R, p.allowEmptyArrays, p.strictNullHandling, p.skipNulls, p.encodeDotInKeys, p.encode ? p.encoder : null, p.filter, p.sort, p.allowDots, p.serializeDate, p.format, p.formatter, p.encodeValuesOnly, p.charset, F));
                }
                var k = _.join(p.delimiter), C = !0 === p.addQueryPrefix ? "?" : "";
                return p.charsetSentinel && ("iso-8859-1" === p.charset ? C += "utf8=%26%2310003%3B&" : C += "utf8=%E2%9C%93&"), k.length > 0 ? C + k : "";
            };
        },
        17886: (t, n, i)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.FLAGS = n.ERRSTR = void 0;
            const s = i(70111);
            n.ERRSTR = {
                PATH_STR: "path must be a string, Buffer, or Uint8Array",
                FD: "fd must be a file descriptor",
                MODE_INT: "mode must be an int",
                CB: "callback must be a function",
                UID: "uid must be an unsigned int",
                GID: "gid must be an unsigned int",
                LEN: "len must be an integer",
                ATIME: "atime must be an integer",
                MTIME: "mtime must be an integer",
                PREFIX: "filename prefix is required",
                BUFFER: "buffer must be an instance of Buffer or StaticBuffer",
                OFFSET: "offset must be an integer",
                LENGTH: "length must be an integer",
                POSITION: "position must be an integer"
            };
            const { O_RDONLY: o, O_WRONLY: c, O_RDWR: l, O_CREAT: h, O_EXCL: f, O_TRUNC: p, O_APPEND: _, O_SYNC: S } = s.constants;
            var O;
            !function(t) {
                t[t.r = o] = "r", t[t["r+"] = l] = "r+", t[t.rs = o | S] = "rs", t[t.sr = t.rs] = "sr", t[t["rs+"] = l | S] = "rs+", t[t["sr+"] = t["rs+"]] = "sr+", t[t.w = c | h | p] = "w", t[t.wx = c | h | p | f] = "wx", t[t.xw = t.wx] = "xw", t[t["w+"] = l | h | p] = "w+", t[t["wx+"] = l | h | p | f] = "wx+", t[t["xw+"] = t["wx+"]] = "xw+", t[t.a = c | _ | h] = "a", t[t.ax = c | _ | h | f] = "ax", t[t.xa = t.ax] = "xa", t[t["a+"] = l | _ | h] = "a+", t[t["ax+"] = l | _ | h | f] = "ax+", t[t["xa+"] = t["ax+"]] = "xa+";
            }(O || (n.FLAGS = O = {}));
        },
        24454: (t, n, i)=>{
            "use strict";
            var s = i(95894), o = i(79553), c = i(10458), l = i(91441), h = i(4002), f = s("%WeakMap%", !0), p = o("WeakMap.prototype.get", !0), _ = o("WeakMap.prototype.set", !0), S = o("WeakMap.prototype.has", !0), O = o("WeakMap.prototype.delete", !0);
            t.exports = f ? function getSideChannelWeakMap() {
                var t, n, i = {
                    assert: function(t) {
                        if (!i.has(t)) throw new h("Side channel does not contain " + c(t));
                    },
                    delete: function(i) {
                        if (f && i && ("object" == typeof i || "function" == typeof i)) {
                            if (t) return O(t, i);
                        } else if (l && n) return n.delete(i);
                        return !1;
                    },
                    get: function(i) {
                        return f && i && ("object" == typeof i || "function" == typeof i) && t ? p(t, i) : n && n.get(i);
                    },
                    has: function(i) {
                        return f && i && ("object" == typeof i || "function" == typeof i) && t ? S(t, i) : !!n && n.has(i);
                    },
                    set: function(i, s) {
                        f && i && ("object" == typeof i || "function" == typeof i) ? (t || (t = new f), _(t, i, s)) : l && (n || (n = l()), n.set(i, s));
                    }
                };
                return i;
            } : l;
        },
        35953: (t, n, i)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.ENCODING_UTF8 = void 0, n.assertEncoding = function assertEncoding(t) {
                if (t && !s.Buffer.isEncoding(t)) throw new o.TypeError("ERR_INVALID_OPT_VALUE_ENCODING", t);
            }, n.strToEncoding = function strToEncoding(t, i) {
                return i && i !== n.ENCODING_UTF8 ? "buffer" === i ? new s.Buffer(t) : new s.Buffer(t).toString(i) : t;
            };
            const s = i(52058), o = i(7215);
            n.ENCODING_UTF8 = "utf8";
        },
        36315: (t, n, i)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function setTimeoutUnref(t, n, s) {
                const o = setTimeout.apply("undefined" != typeof globalThis ? globalThis : i.g, arguments);
                return o && "object" == typeof o && "function" == typeof o.unref && o.unref(), o;
            };
        },
        40996: function(t, n, i) {
            var s, o = i(42649);
            s = ()=>(()=>{
                    "use strict";
                    var t = {
                        975: (t)=>{
                            function e(t) {
                                if ("string" != typeof t) throw new TypeError("Path must be a string. Received " + JSON.stringify(t));
                            }
                            function r(t, n) {
                                for(var i, s = "", o = 0, c = -1, l = 0, h = 0; h <= t.length; ++h){
                                    if (h < t.length) i = t.charCodeAt(h);
                                    else {
                                        if (47 === i) break;
                                        i = 47;
                                    }
                                    if (47 === i) {
                                        if (c === h - 1 || 1 === l) ;
                                        else if (c !== h - 1 && 2 === l) {
                                            if (s.length < 2 || 2 !== o || 46 !== s.charCodeAt(s.length - 1) || 46 !== s.charCodeAt(s.length - 2)) {
                                                if (s.length > 2) {
                                                    var f = s.lastIndexOf("/");
                                                    if (f !== s.length - 1) {
                                                        -1 === f ? (s = "", o = 0) : o = (s = s.slice(0, f)).length - 1 - s.lastIndexOf("/"), c = h, l = 0;
                                                        continue;
                                                    }
                                                } else if (2 === s.length || 1 === s.length) {
                                                    s = "", o = 0, c = h, l = 0;
                                                    continue;
                                                }
                                            }
                                            n && (s.length > 0 ? s += "/.." : s = "..", o = 2);
                                        } else s.length > 0 ? s += "/" + t.slice(c + 1, h) : s = t.slice(c + 1, h), o = h - c - 1;
                                        c = h, l = 0;
                                    } else 46 === i && -1 !== l ? ++l : l = -1;
                                }
                                return s;
                            }
                            var n = {
                                resolve: function() {
                                    for(var t, n = "", i = !1, s = arguments.length - 1; s >= -1 && !i; s--){
                                        var c;
                                        s >= 0 ? c = arguments[s] : (void 0 === t && (t = o.cwd()), c = t), e(c), 0 !== c.length && (n = c + "/" + n, i = 47 === c.charCodeAt(0));
                                    }
                                    return n = r(n, !i), i ? n.length > 0 ? "/" + n : "/" : n.length > 0 ? n : ".";
                                },
                                normalize: function(t) {
                                    if (e(t), 0 === t.length) return ".";
                                    var n = 47 === t.charCodeAt(0), i = 47 === t.charCodeAt(t.length - 1);
                                    return 0 !== (t = r(t, !n)).length || n || (t = "."), t.length > 0 && i && (t += "/"), n ? "/" + t : t;
                                },
                                isAbsolute: function(t) {
                                    return e(t), t.length > 0 && 47 === t.charCodeAt(0);
                                },
                                join: function() {
                                    if (0 === arguments.length) return ".";
                                    for(var t, i = 0; i < arguments.length; ++i){
                                        var s = arguments[i];
                                        e(s), s.length > 0 && (void 0 === t ? t = s : t += "/" + s);
                                    }
                                    return void 0 === t ? "." : n.normalize(t);
                                },
                                relative: function(t, i) {
                                    if (e(t), e(i), t === i) return "";
                                    if ((t = n.resolve(t)) === (i = n.resolve(i))) return "";
                                    for(var s = 1; s < t.length && 47 === t.charCodeAt(s); ++s);
                                    for(var o = t.length, c = o - s, l = 1; l < i.length && 47 === i.charCodeAt(l); ++l);
                                    for(var h = i.length - l, f = c < h ? c : h, p = -1, _ = 0; _ <= f; ++_){
                                        if (_ === f) {
                                            if (h > f) {
                                                if (47 === i.charCodeAt(l + _)) return i.slice(l + _ + 1);
                                                if (0 === _) return i.slice(l + _);
                                            } else c > f && (47 === t.charCodeAt(s + _) ? p = _ : 0 === _ && (p = 0));
                                            break;
                                        }
                                        var S = t.charCodeAt(s + _);
                                        if (S !== i.charCodeAt(l + _)) break;
                                        47 === S && (p = _);
                                    }
                                    var O = "";
                                    for(_ = s + p + 1; _ <= o; ++_)_ !== o && 47 !== t.charCodeAt(_) || (0 === O.length ? O += ".." : O += "/..");
                                    return O.length > 0 ? O + i.slice(l + p) : (l += p, 47 === i.charCodeAt(l) && ++l, i.slice(l));
                                },
                                _makeLong: function(t) {
                                    return t;
                                },
                                dirname: function(t) {
                                    if (e(t), 0 === t.length) return ".";
                                    for(var n = t.charCodeAt(0), i = 47 === n, s = -1, o = !0, c = t.length - 1; c >= 1; --c)if (47 === (n = t.charCodeAt(c))) {
                                        if (!o) {
                                            s = c;
                                            break;
                                        }
                                    } else o = !1;
                                    return -1 === s ? i ? "/" : "." : i && 1 === s ? "//" : t.slice(0, s);
                                },
                                basename: function(t, n) {
                                    if (void 0 !== n && "string" != typeof n) throw new TypeError('"ext" argument must be a string');
                                    e(t);
                                    var i, s = 0, o = -1, c = !0;
                                    if (void 0 !== n && n.length > 0 && n.length <= t.length) {
                                        if (n.length === t.length && n === t) return "";
                                        var l = n.length - 1, h = -1;
                                        for(i = t.length - 1; i >= 0; --i){
                                            var f = t.charCodeAt(i);
                                            if (47 === f) {
                                                if (!c) {
                                                    s = i + 1;
                                                    break;
                                                }
                                            } else -1 === h && (c = !1, h = i + 1), l >= 0 && (f === n.charCodeAt(l) ? -1 == --l && (o = i) : (l = -1, o = h));
                                        }
                                        return s === o ? o = h : -1 === o && (o = t.length), t.slice(s, o);
                                    }
                                    for(i = t.length - 1; i >= 0; --i)if (47 === t.charCodeAt(i)) {
                                        if (!c) {
                                            s = i + 1;
                                            break;
                                        }
                                    } else -1 === o && (c = !1, o = i + 1);
                                    return -1 === o ? "" : t.slice(s, o);
                                },
                                extname: function(t) {
                                    e(t);
                                    for(var n = -1, i = 0, s = -1, o = !0, c = 0, l = t.length - 1; l >= 0; --l){
                                        var h = t.charCodeAt(l);
                                        if (47 !== h) -1 === s && (o = !1, s = l + 1), 46 === h ? -1 === n ? n = l : 1 !== c && (c = 1) : -1 !== n && (c = -1);
                                        else if (!o) {
                                            i = l + 1;
                                            break;
                                        }
                                    }
                                    return -1 === n || -1 === s || 0 === c || 1 === c && n === s - 1 && n === i + 1 ? "" : t.slice(n, s);
                                },
                                format: function(t) {
                                    if (null === t || "object" != typeof t) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof t);
                                    return function(t, n) {
                                        var i = n.dir || n.root, s = n.base || (n.name || "") + (n.ext || "");
                                        return i ? i === n.root ? i + s : i + "/" + s : s;
                                    }(0, t);
                                },
                                parse: function(t) {
                                    e(t);
                                    var n = {
                                        root: "",
                                        dir: "",
                                        base: "",
                                        ext: "",
                                        name: ""
                                    };
                                    if (0 === t.length) return n;
                                    var i, s = t.charCodeAt(0), o = 47 === s;
                                    o ? (n.root = "/", i = 1) : i = 0;
                                    for(var c = -1, l = 0, h = -1, f = !0, p = t.length - 1, _ = 0; p >= i; --p)if (47 !== (s = t.charCodeAt(p))) -1 === h && (f = !1, h = p + 1), 46 === s ? -1 === c ? c = p : 1 !== _ && (_ = 1) : -1 !== c && (_ = -1);
                                    else if (!f) {
                                        l = p + 1;
                                        break;
                                    }
                                    return -1 === c || -1 === h || 0 === _ || 1 === _ && c === h - 1 && c === l + 1 ? -1 !== h && (n.base = n.name = 0 === l && o ? t.slice(1, h) : t.slice(l, h)) : (0 === l && o ? (n.name = t.slice(1, c), n.base = t.slice(1, h)) : (n.name = t.slice(l, c), n.base = t.slice(l, h)), n.ext = t.slice(c, h)), l > 0 ? n.dir = t.slice(0, l - 1) : o && (n.dir = "/"), n;
                                },
                                sep: "/",
                                delimiter: ":",
                                win32: null,
                                posix: null
                            };
                            n.posix = n, t.exports = n;
                        },
                        70: (t, n)=>{
                            if (Object.defineProperty(n, "__esModule", {
                                value: !0
                            }), n.isWindows = void 0, "object" == typeof o) n.isWindows = "win32" === o.platform;
                            else if ("object" == typeof navigator) {
                                let t = navigator.userAgent;
                                n.isWindows = t.indexOf("Windows") >= 0;
                            }
                        },
                        231: (t, n, i)=>{
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            }), n.uriToFsPath = n.URI = void 0;
                            const s = i(70), o = /^\w[\w\d+.-]*$/, c = /^\//, l = /^\/\//;
                            function a(t, n) {
                                if (!t.scheme && n) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${t.authority}", path: "${t.path}", query: "${t.query}", fragment: "${t.fragment}"}`);
                                if (t.scheme && !o.test(t.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
                                if (t.path) {
                                    if (t.authority) {
                                        if (!c.test(t.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
                                    } else if (l.test(t.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
                                }
                            }
                            const h = "", f = "/", p = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
                            let u = class u {
                                static isUri(t) {
                                    return t instanceof u || !!t && "string" == typeof t.authority && "string" == typeof t.fragment && "string" == typeof t.path && "string" == typeof t.query && "string" == typeof t.scheme && "string" == typeof t.fsPath && "function" == typeof t.with && "function" == typeof t.toString;
                                }
                                get fsPath() {
                                    return v(this, !1);
                                }
                                with(t) {
                                    if (!t) return this;
                                    let { scheme: n, authority: i, path: s, query: o, fragment: c } = t;
                                    return void 0 === n ? n = this.scheme : null === n && (n = h), void 0 === i ? i = this.authority : null === i && (i = h), void 0 === s ? s = this.path : null === s && (s = h), void 0 === o ? o = this.query : null === o && (o = h), void 0 === c ? c = this.fragment : null === c && (c = h), n === this.scheme && i === this.authority && s === this.path && o === this.query && c === this.fragment ? this : new d(n, i, s, o, c);
                                }
                                static parse(t, n = !1) {
                                    const i = p.exec(t);
                                    return i ? new d(i[2] || h, w(i[4] || h), w(i[5] || h), w(i[7] || h), w(i[9] || h), n) : new d(h, h, h, h, h);
                                }
                                static file(t) {
                                    let n = h;
                                    if (s.isWindows && (t = t.replace(/\\/g, f)), t[0] === f && t[1] === f) {
                                        const i = t.indexOf(f, 2);
                                        -1 === i ? (n = t.substring(2), t = f) : (n = t.substring(2, i), t = t.substring(i) || f);
                                    }
                                    return new d("file", n, t, h, h);
                                }
                                static from(t) {
                                    const n = new d(t.scheme, t.authority, t.path, t.query, t.fragment);
                                    return a(n, !0), n;
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
                                            const n = new d(t);
                                            return n._formatted = t.external, n._fsPath = t._sep === _ ? t.fsPath : null, n;
                                        }
                                    }
                                    return t;
                                }
                                constructor(t, n, i, s, o, c = !1){
                                    _define_property(this, "scheme", void 0);
                                    _define_property(this, "authority", void 0);
                                    _define_property(this, "path", void 0);
                                    _define_property(this, "query", void 0);
                                    _define_property(this, "fragment", void 0);
                                    "object" == typeof t ? (this.scheme = t.scheme || h, this.authority = t.authority || h, this.path = t.path || h, this.query = t.query || h, this.fragment = t.fragment || h) : (this.scheme = function(t, n) {
                                        return t || n ? t : "file";
                                    }(t, c), this.authority = n || h, this.path = function(t, n) {
                                        switch(t){
                                            case "https":
                                            case "http":
                                            case "file":
                                                n ? n[0] !== f && (n = f + n) : n = f;
                                        }
                                        return n;
                                    }(this.scheme, i || h), this.query = s || h, this.fragment = o || h, a(this, c));
                                }
                            };
                            n.URI = u;
                            const _ = s.isWindows ? 1 : void 0;
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
                                    return this._fsPath && (t.fsPath = this._fsPath, t._sep = _), this._formatted && (t.external = this._formatted), this.path && (t.path = this.path), this.scheme && (t.scheme = this.scheme), this.authority && (t.authority = this.authority), this.query && (t.query = this.query), this.fragment && (t.fragment = this.fragment), t;
                                }
                                constructor(...args){
                                    super(...args), _define_property(this, "_formatted", null), _define_property(this, "_fsPath", null);
                                }
                            };
                            const S = {
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
                            function g(t, n, i) {
                                let s, o = -1;
                                for(let c = 0; c < t.length; c++){
                                    const l = t.charCodeAt(c);
                                    if (l >= 97 && l <= 122 || l >= 65 && l <= 90 || l >= 48 && l <= 57 || 45 === l || 46 === l || 95 === l || 126 === l || n && 47 === l || i && 91 === l || i && 93 === l || i && 58 === l) -1 !== o && (s += encodeURIComponent(t.substring(o, c)), o = -1), void 0 !== s && (s += t.charAt(c));
                                    else {
                                        void 0 === s && (s = t.substr(0, c));
                                        const n = S[l];
                                        void 0 !== n ? (-1 !== o && (s += encodeURIComponent(t.substring(o, c)), o = -1), s += n) : -1 === o && (o = c);
                                    }
                                }
                                return -1 !== o && (s += encodeURIComponent(t.substring(o))), void 0 !== s ? s : t;
                            }
                            function m(t) {
                                let n;
                                for(let i = 0; i < t.length; i++){
                                    const s = t.charCodeAt(i);
                                    35 === s || 63 === s ? (void 0 === n && (n = t.substr(0, i)), n += S[s]) : void 0 !== n && (n += t[i]);
                                }
                                return void 0 !== n ? n : t;
                            }
                            function v(t, n) {
                                let i;
                                return i = t.authority && t.path.length > 1 && "file" === t.scheme ? `//${t.authority}${t.path}` : 47 === t.path.charCodeAt(0) && (t.path.charCodeAt(1) >= 65 && t.path.charCodeAt(1) <= 90 || t.path.charCodeAt(1) >= 97 && t.path.charCodeAt(1) <= 122) && 58 === t.path.charCodeAt(2) ? n ? t.path.substr(1) : t.path[1].toLowerCase() + t.path.substr(2) : t.path, s.isWindows && (i = i.replace(/\//g, "\\")), i;
                            }
                            function y(t, n) {
                                const i = n ? m : g;
                                let s = "", { scheme: o, authority: c, path: l, query: h, fragment: p } = t;
                                if (o && (s += o, s += ":"), (c || "file" === o) && (s += f, s += f), c) {
                                    let t = c.indexOf("@");
                                    if (-1 !== t) {
                                        const n = c.substr(0, t);
                                        c = c.substr(t + 1), t = n.lastIndexOf(":"), -1 === t ? s += i(n, !1, !1) : (s += i(n.substr(0, t), !1, !1), s += ":", s += i(n.substr(t + 1), !1, !0)), s += "@";
                                    }
                                    c = c.toLowerCase(), t = c.lastIndexOf(":"), -1 === t ? s += i(c, !1, !0) : (s += i(c.substr(0, t), !1, !0), s += c.substr(t));
                                }
                                if (l) {
                                    if (l.length >= 3 && 47 === l.charCodeAt(0) && 58 === l.charCodeAt(2)) {
                                        const t = l.charCodeAt(1);
                                        t >= 65 && t <= 90 && (l = `/${String.fromCharCode(t + 32)}:${l.substr(3)}`);
                                    } else if (l.length >= 2 && 58 === l.charCodeAt(1)) {
                                        const t = l.charCodeAt(0);
                                        t >= 65 && t <= 90 && (l = `${String.fromCharCode(t + 32)}:${l.substr(2)}`);
                                    }
                                    s += i(l, !0, !1);
                                }
                                return h && (s += "?", s += i(h, !1, !1)), p && (s += "#", s += n ? p : g(p, !1, !1)), s;
                            }
                            function b(t) {
                                try {
                                    return decodeURIComponent(t);
                                } catch  {
                                    return t.length > 3 ? t.substr(0, 3) + b(t.substr(3)) : t;
                                }
                            }
                            n.uriToFsPath = v;
                            const O = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
                            function w(t) {
                                return t.match(O) ? t.replace(O, (t)=>b(t)) : t;
                            }
                        },
                        552: function(t, n, i) {
                            var s = this && this.__createBinding || (Object.create ? function(t, n, i, s) {
                                void 0 === s && (s = i);
                                var o = Object.getOwnPropertyDescriptor(n, i);
                                o && !("get" in o ? !n.__esModule : o.writable || o.configurable) || (o = {
                                    enumerable: !0,
                                    get: function() {
                                        return n[i];
                                    }
                                }), Object.defineProperty(t, s, o);
                            } : function(t, n, i, s) {
                                void 0 === s && (s = i), t[s] = n[i];
                            }), o = this && this.__setModuleDefault || (Object.create ? function(t, n) {
                                Object.defineProperty(t, "default", {
                                    enumerable: !0,
                                    value: n
                                });
                            } : function(t, n) {
                                t.default = n;
                            }), c = this && this.__importStar || function(t) {
                                if (t && t.__esModule) return t;
                                var n = {};
                                if (null != t) for(var i in t)"default" !== i && Object.prototype.hasOwnProperty.call(t, i) && s(n, t, i);
                                return o(n, t), n;
                            };
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            }), n.Utils = void 0;
                            const l = c(i(975)), h = l.posix || l, f = "/";
                            var p;
                            !function(t) {
                                t.joinPath = function(t, ...n) {
                                    return t.with({
                                        path: h.join(t.path, ...n)
                                    });
                                }, t.resolvePath = function(t, ...n) {
                                    let i = t.path, s = !1;
                                    i[0] !== f && (i = f + i, s = !0);
                                    let o = h.resolve(i, ...n);
                                    return s && o[0] === f && !t.authority && (o = o.substring(1)), t.with({
                                        path: o
                                    });
                                }, t.dirname = function(t) {
                                    if (0 === t.path.length || t.path === f) return t;
                                    let n = h.dirname(t.path);
                                    return 1 === n.length && 46 === n.charCodeAt(0) && (n = ""), t.with({
                                        path: n
                                    });
                                }, t.basename = function(t) {
                                    return h.basename(t.path);
                                }, t.extname = function(t) {
                                    return h.extname(t.path);
                                };
                            }(p || (n.Utils = p = {}));
                        }
                    }, n = {};
                    function r(i) {
                        var s = n[i];
                        if (void 0 !== s) return s.exports;
                        var o = n[i] = {
                            exports: {}
                        };
                        return t[i].call(o.exports, o, o.exports, r), o.exports;
                    }
                    var i = {};
                    return (()=>{
                        var t = i;
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.Utils = t.URI = void 0;
                        const n = r(231);
                        Object.defineProperty(t, "URI", {
                            enumerable: !0,
                            get: function() {
                                return n.URI;
                            }
                        });
                        const s = r(552);
                        Object.defineProperty(t, "Utils", {
                            enumerable: !0,
                            get: function() {
                                return s.Utils;
                            }
                        });
                    })(), i;
                })(), t.exports = s();
        },
        42436: (t, n, i)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.File = n.Link = n.Node = n.SEP = void 0;
            const s = i(88771), o = i(52058), c = i(70111), l = i(3640), h = i(67973), { S_IFMT: f, S_IFDIR: p, S_IFREG: _, S_IFLNK: S, S_IFCHR: O, O_APPEND: R } = c.constants, getuid = ()=>{
                var t, n;
                return null !== (n = null === (t = s.default.getuid) || void 0 === t ? void 0 : t.call(s.default)) && void 0 !== n ? n : 0;
            }, getgid = ()=>{
                var t, n;
                return null !== (n = null === (t = s.default.getgid) || void 0 === t ? void 0 : t.call(s.default)) && void 0 !== n ? n : 0;
            };
            n.SEP = "/";
            let Node = class Node extends l.EventEmitter {
                set ctime(t) {
                    this._ctime = t;
                }
                get ctime() {
                    return this._ctime;
                }
                set uid(t) {
                    this._uid = t, this.ctime = new Date;
                }
                get uid() {
                    return this._uid;
                }
                set gid(t) {
                    this._gid = t, this.ctime = new Date;
                }
                get gid() {
                    return this._gid;
                }
                set atime(t) {
                    this._atime = t, this.ctime = new Date;
                }
                get atime() {
                    return this._atime;
                }
                set mtime(t) {
                    this._mtime = t, this.ctime = new Date;
                }
                get mtime() {
                    return this._mtime;
                }
                get perm() {
                    return this.mode & ~f;
                }
                set perm(t) {
                    this.mode = this.mode & f | t & ~f, this.ctime = new Date;
                }
                set nlink(t) {
                    this._nlink = t, this.ctime = new Date;
                }
                get nlink() {
                    return this._nlink;
                }
                getString(t = "utf8") {
                    return this.atime = new Date, this.getBuffer().toString(t);
                }
                setString(t) {
                    this.buf = (0, o.bufferFrom)(t, "utf8"), this.touch();
                }
                getBuffer() {
                    return this.atime = new Date, this.buf || this.setBuffer((0, o.bufferAllocUnsafe)(0)), (0, o.bufferFrom)(this.buf);
                }
                setBuffer(t) {
                    this.buf = (0, o.bufferFrom)(t), this.touch();
                }
                getSize() {
                    return this.buf ? this.buf.length : 0;
                }
                setModeProperty(t) {
                    this.mode = t;
                }
                isFile() {
                    return (this.mode & f) === _;
                }
                isDirectory() {
                    return (this.mode & f) === p;
                }
                isSymlink() {
                    return (this.mode & f) === S;
                }
                isCharacterDevice() {
                    return (this.mode & f) === O;
                }
                makeSymlink(t) {
                    this.mode = 438 | S, this.symlink = t;
                }
                write(t, n = 0, i = t.length, s = 0) {
                    if (this.buf || (this.buf = (0, o.bufferAllocUnsafe)(0)), s + i > this.buf.length) {
                        const t = (0, o.bufferAllocUnsafe)(s + i);
                        this.buf.copy(t, 0, 0, this.buf.length), this.buf = t;
                    }
                    return t.copy(this.buf, s, n, n + i), this.touch(), i;
                }
                read(t, n = 0, i = t.byteLength, s = 0) {
                    this.atime = new Date, this.buf || (this.buf = (0, o.bufferAllocUnsafe)(0));
                    let c = i;
                    c > t.byteLength && (c = t.byteLength), c + s > this.buf.length && (c = this.buf.length - s);
                    const l = t instanceof o.Buffer ? t : o.Buffer.from(t.buffer);
                    return this.buf.copy(l, n, s, s + c), c;
                }
                truncate(t = 0) {
                    if (t) if (this.buf || (this.buf = (0, o.bufferAllocUnsafe)(0)), t <= this.buf.length) this.buf = this.buf.slice(0, t);
                    else {
                        const n = (0, o.bufferAllocUnsafe)(t);
                        this.buf.copy(n), n.fill(0, this.buf.length), this.buf = n;
                    }
                    else this.buf = (0, o.bufferAllocUnsafe)(0);
                    this.touch();
                }
                chmod(t) {
                    this.mode = this.mode & f | t & ~f, this.touch();
                }
                chown(t, n) {
                    this.uid = t, this.gid = n, this.touch();
                }
                touch() {
                    this.mtime = new Date, this.emit("change", this);
                }
                canRead(t = getuid(), n = getgid()) {
                    return !!(4 & this.perm) || !!(n === this.gid && 32 & this.perm) || !!(t === this.uid && 256 & this.perm);
                }
                canWrite(t = getuid(), n = getgid()) {
                    return !!(2 & this.perm) || !!(n === this.gid && 16 & this.perm) || !!(t === this.uid && 128 & this.perm);
                }
                canExecute(t = getuid(), n = getgid()) {
                    return !!(1 & this.perm) || !!(n === this.gid && 8 & this.perm) || !!(t === this.uid && 64 & this.perm);
                }
                del() {
                    this.emit("delete", this);
                }
                toJSON() {
                    return {
                        ino: this.ino,
                        uid: this.uid,
                        gid: this.gid,
                        atime: this.atime.getTime(),
                        mtime: this.mtime.getTime(),
                        ctime: this.ctime.getTime(),
                        perm: this.perm,
                        mode: this.mode,
                        nlink: this.nlink,
                        symlink: this.symlink,
                        data: this.getString()
                    };
                }
                constructor(t, n = 438){
                    super(), this._uid = getuid(), this._gid = getgid(), this._atime = new Date, this._mtime = new Date, this._ctime = new Date, this.rdev = 0, this._nlink = 1, this.mode = n, this.ino = t;
                }
            };
            n.Node = Node;
            let Link = class Link extends l.EventEmitter {
                get steps() {
                    return this._steps;
                }
                set steps(t) {
                    this._steps = t;
                    for (const [t, n] of this.children.entries())"." !== t && ".." !== t && (null == n || n.syncSteps());
                }
                setNode(t) {
                    this.node = t, this.ino = t.ino;
                }
                getNode() {
                    return this.node;
                }
                createChild(t, n = this.vol.createNode(438 | _)) {
                    const i = new Link(this.vol, this, t);
                    return i.setNode(n), n.isDirectory() && (i.children.set(".", i), i.getNode().nlink++), this.setChild(t, i), i;
                }
                setChild(t, n = new Link(this.vol, this, t)) {
                    this.children.set(t, n), n.parent = this, this.length++;
                    return n.getNode().isDirectory() && (n.children.set("..", this), this.getNode().nlink++), this.getNode().mtime = new Date, this.emit("child:add", n, this), n;
                }
                deleteChild(t) {
                    t.getNode().isDirectory() && (t.children.delete(".."), this.getNode().nlink--), this.children.delete(t.getName()), this.length--, this.getNode().mtime = new Date, this.emit("child:delete", t, this);
                }
                getChild(t) {
                    return this.getNode().mtime = new Date, this.children.get(t);
                }
                getPath() {
                    return this.steps.join(n.SEP);
                }
                getParentPath() {
                    return this.steps.slice(0, -1).join(n.SEP);
                }
                getName() {
                    return this.steps[this.steps.length - 1];
                }
                toJSON() {
                    return {
                        steps: this.steps,
                        ino: this.ino,
                        children: Array.from(this.children.keys())
                    };
                }
                syncSteps() {
                    this.steps = this.parent ? this.parent.steps.concat([
                        this.name
                    ]) : [
                        this.name
                    ];
                }
                constructor(t, n, i){
                    super(), this.children = new Map, this._steps = [], this.ino = 0, this.length = 0, this.vol = t, this.parent = n, this.name = i, this.syncSteps();
                }
            };
            n.Link = Link;
            n.File = class File {
                getString(t = "utf8") {
                    return this.node.getString();
                }
                setString(t) {
                    this.node.setString(t);
                }
                getBuffer() {
                    return this.node.getBuffer();
                }
                setBuffer(t) {
                    this.node.setBuffer(t);
                }
                getSize() {
                    return this.node.getSize();
                }
                truncate(t) {
                    this.node.truncate(t);
                }
                seekTo(t) {
                    this.position = t;
                }
                stats() {
                    return h.default.build(this.node);
                }
                write(t, n = 0, i = t.length, s) {
                    "number" != typeof s && (s = this.position);
                    const o = this.node.write(t, n, i, s);
                    return this.position = s + o, o;
                }
                read(t, n = 0, i = t.byteLength, s) {
                    "number" != typeof s && (s = this.position);
                    const o = this.node.read(t, n, i, s);
                    return this.position = s + o, o;
                }
                chmod(t) {
                    this.node.chmod(t);
                }
                chown(t, n) {
                    this.node.chown(t, n);
                }
                constructor(t, n, i, s){
                    this.link = t, this.node = n, this.flags = i, this.fd = s, this.position = 0, this.flags & R && (this.position = this.getSize());
                }
            };
        },
        45921: (t, n, i)=>{
            "use strict";
            var s = i(4002), o = i(10458), c = i(98964), l = i(91441), h = i(24454) || l || c;
            t.exports = function getSideChannel() {
                var t, n = {
                    assert: function(t) {
                        if (!n.has(t)) throw new s("Side channel does not contain " + o(t));
                    },
                    delete: function(n) {
                        return !!t && t.delete(n);
                    },
                    get: function(n) {
                        return t && t.get(n);
                    },
                    has: function(n) {
                        return !!t && t.has(n);
                    },
                    set: function(n, i) {
                        t || (t = h()), t.set(n, i);
                    }
                };
                return n;
            };
        },
        52058: (t, n, i)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.bufferFrom = n.bufferAllocUnsafe = n.Buffer = void 0;
            const s = i(73730);
            function bufferV0P12Ponyfill(t, ...n) {
                return new s.Buffer(t, ...n);
            }
            Object.defineProperty(n, "Buffer", {
                enumerable: !0,
                get: function() {
                    return s.Buffer;
                }
            });
            const o = s.Buffer.allocUnsafe || bufferV0P12Ponyfill;
            n.bufferAllocUnsafe = o;
            const c = s.Buffer.from || bufferV0P12Ponyfill;
            n.bufferFrom = c;
        },
        55600: (t, n, i)=>{
            "use strict";
            var s = i(12477), o = i(11347), c = i(65136);
            t.exports = {
                formats: c,
                parse: o,
                stringify: s
            };
        },
        60855: function(t, n, i) {
            var s;
            t = i.nmd(t), function() {
                n && n.nodeType, t && t.nodeType;
                var o = "object" == typeof i.g && i.g;
                o.global !== o && o.window !== o && o.self;
                var c, l = 2147483647, h = 36, f = /^xn--/, p = /[^\x20-\x7E]/, _ = /[\x2E\u3002\uFF0E\uFF61]/g, S = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                }, O = Math.floor, R = String.fromCharCode;
                function error(t) {
                    throw new RangeError(S[t]);
                }
                function map(t, n) {
                    for(var i = t.length, s = []; i--;)s[i] = n(t[i]);
                    return s;
                }
                function mapDomain(t, n) {
                    var i = t.split("@"), s = "";
                    return i.length > 1 && (s = i[0] + "@", t = i[1]), s + map((t = t.replace(_, ".")).split("."), n).join(".");
                }
                function ucs2decode(t) {
                    for(var n, i, s = [], o = 0, c = t.length; o < c;)(n = t.charCodeAt(o++)) >= 55296 && n <= 56319 && o < c ? 56320 == (64512 & (i = t.charCodeAt(o++))) ? s.push(((1023 & n) << 10) + (1023 & i) + 65536) : (s.push(n), o--) : s.push(n);
                    return s;
                }
                function ucs2encode(t) {
                    return map(t, function(t) {
                        var n = "";
                        return t > 65535 && (n += R((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), n += R(t);
                    }).join("");
                }
                function digitToBasic(t, n) {
                    return t + 22 + 75 * (t < 26) - ((0 != n) << 5);
                }
                function adapt(t, n, i) {
                    var s = 0;
                    for(t = i ? O(t / 700) : t >> 1, t += O(t / n); t > 455; s += h)t = O(t / 35);
                    return O(s + 36 * t / (t + 38));
                }
                function decode(t) {
                    var n, i, s, o, c, f, p, _, S, R, T, F = [], A = t.length, N = 0, I = 128, k = 72;
                    for((i = t.lastIndexOf("-")) < 0 && (i = 0), s = 0; s < i; ++s)t.charCodeAt(s) >= 128 && error("not-basic"), F.push(t.charCodeAt(s));
                    for(o = i > 0 ? i + 1 : 0; o < A;){
                        for(c = N, f = 1, p = h; o >= A && error("invalid-input"), ((_ = (T = t.charCodeAt(o++)) - 48 < 10 ? T - 22 : T - 65 < 26 ? T - 65 : T - 97 < 26 ? T - 97 : h) >= h || _ > O((l - N) / f)) && error("overflow"), N += _ * f, !(_ < (S = p <= k ? 1 : p >= k + 26 ? 26 : p - k)); p += h)f > O(l / (R = h - S)) && error("overflow"), f *= R;
                        k = adapt(N - c, n = F.length + 1, 0 == c), O(N / n) > l - I && error("overflow"), I += O(N / n), N %= n, F.splice(N++, 0, I);
                    }
                    return ucs2encode(F);
                }
                function encode(t) {
                    var n, i, s, o, c, f, p, _, S, T, F, A, N, I, k, C = [];
                    for(A = (t = ucs2decode(t)).length, n = 128, i = 0, c = 72, f = 0; f < A; ++f)(F = t[f]) < 128 && C.push(R(F));
                    for(s = o = C.length, o && C.push("-"); s < A;){
                        for(p = l, f = 0; f < A; ++f)(F = t[f]) >= n && F < p && (p = F);
                        for(p - n > O((l - i) / (N = s + 1)) && error("overflow"), i += (p - n) * N, n = p, f = 0; f < A; ++f)if ((F = t[f]) < n && ++i > l && error("overflow"), F == n) {
                            for(_ = i, S = h; !(_ < (T = S <= c ? 1 : S >= c + 26 ? 26 : S - c)); S += h)k = _ - T, I = h - T, C.push(R(digitToBasic(T + k % I, 0))), _ = O(k / I);
                            C.push(R(digitToBasic(_, 0))), c = adapt(i, N, s == o), i = 0, ++s;
                        }
                        ++i, ++n;
                    }
                    return C.join("");
                }
                c = {
                    version: "1.4.1",
                    ucs2: {
                        decode: ucs2decode,
                        encode: ucs2encode
                    },
                    decode,
                    encode,
                    toASCII: function toASCII(t) {
                        return mapDomain(t, function(t) {
                            return p.test(t) ? "xn--" + encode(t) : t;
                        });
                    },
                    toUnicode: function toUnicode(t) {
                        return mapDomain(t, function(t) {
                            return f.test(t) ? decode(t.slice(4).toLowerCase()) : t;
                        });
                    }
                }, void 0 === (s = (function() {
                    return c;
                }).call(n, i, n, t)) || (t.exports = s);
            }();
        },
        65136: (t)=>{
            "use strict";
            var n = String.prototype.replace, i = /%20/g, s = "RFC1738", o = "RFC3986";
            t.exports = {
                default: o,
                formatters: {
                    RFC1738: function(t) {
                        return n.call(t, i, "+");
                    },
                    RFC3986: function(t) {
                        return String(t);
                    }
                },
                RFC1738: s,
                RFC3986: o
            };
        },
        65370: (t, n, i)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.toTreeSync = void 0;
            const s = i(89797), o = i(86270);
            n.toTreeSync = (t, i = {})=>{
                var c;
                const l = i.separator || "/";
                let h = i.dir || l;
                h[h.length - 1] !== l && (h += l);
                const f = i.tab || "", p = null !== (c = i.depth) && void 0 !== c ? c : 10;
                let _ = " (...)";
                if (p > 0) {
                    const i = t.readdirSync(h, {
                        withFileTypes: !0
                    });
                    _ = (0, s.printTree)(f, i.map((i)=>(s)=>i.isDirectory() ? (0, n.toTreeSync)(t, {
                                dir: h + i.name,
                                depth: p - 1,
                                tab: s
                            }) : i.isSymbolicLink() ? i.name + " → " + t.readlinkSync(h + i.name) : "" + i.name));
                }
                return (0, o.basename)(h, l) + l + _;
            };
        },
        66777: (t, n)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.fsCallbackApiList = void 0, n.fsCallbackApiList = [
                "access",
                "appendFile",
                "chmod",
                "chown",
                "close",
                "copyFile",
                "createReadStream",
                "createWriteStream",
                "exists",
                "fchmod",
                "fchown",
                "fdatasync",
                "fstat",
                "fsync",
                "ftruncate",
                "futimes",
                "lchmod",
                "lchown",
                "link",
                "lstat",
                "mkdir",
                "mkdtemp",
                "open",
                "read",
                "readv",
                "readdir",
                "readFile",
                "readlink",
                "realpath",
                "rename",
                "rm",
                "rmdir",
                "stat",
                "symlink",
                "truncate",
                "unlink",
                "unwatchFile",
                "utimes",
                "lutimes",
                "watch",
                "watchFile",
                "write",
                "writev",
                "writeFile"
            ];
        },
        67973: (t, n, i)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.Stats = void 0;
            const s = i(70111), { S_IFMT: o, S_IFDIR: c, S_IFREG: l, S_IFBLK: h, S_IFCHR: f, S_IFLNK: p, S_IFIFO: _, S_IFSOCK: S } = s.constants;
            let Stats = class Stats {
                static build(t, n = !1) {
                    const i = new Stats, { uid: s, gid: o, atime: c, mtime: l, ctime: h } = t, f = n ? (t)=>BigInt(t) : (t)=>t;
                    i.uid = f(s), i.gid = f(o), i.rdev = f(t.rdev), i.blksize = f(4096), i.ino = f(t.ino), i.size = f(t.getSize()), i.blocks = f(1), i.atime = c, i.mtime = l, i.ctime = h, i.birthtime = h, i.atimeMs = f(c.getTime()), i.mtimeMs = f(l.getTime());
                    const p = f(h.getTime());
                    if (i.ctimeMs = p, i.birthtimeMs = p, n) {
                        i.atimeNs = BigInt(c.getTime()) * BigInt(1e6), i.mtimeNs = BigInt(l.getTime()) * BigInt(1e6);
                        const t = BigInt(h.getTime()) * BigInt(1e6);
                        i.ctimeNs = t, i.birthtimeNs = t;
                    }
                    return i.dev = f(0), i.mode = f(t.mode), i.nlink = f(t.nlink), i;
                }
                _checkModeProperty(t) {
                    return (Number(this.mode) & o) === t;
                }
                isDirectory() {
                    return this._checkModeProperty(c);
                }
                isFile() {
                    return this._checkModeProperty(l);
                }
                isBlockDevice() {
                    return this._checkModeProperty(h);
                }
                isCharacterDevice() {
                    return this._checkModeProperty(f);
                }
                isSymbolicLink() {
                    return this._checkModeProperty(p);
                }
                isFIFO() {
                    return this._checkModeProperty(_);
                }
                isSocket() {
                    return this._checkModeProperty(S);
                }
            };
            n.Stats = Stats, n.default = Stats;
        },
        70111: (t, n)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.constants = void 0, n.constants = {
                O_RDONLY: 0,
                O_WRONLY: 1,
                O_RDWR: 2,
                S_IFMT: 61440,
                S_IFREG: 32768,
                S_IFDIR: 16384,
                S_IFCHR: 8192,
                S_IFBLK: 24576,
                S_IFIFO: 4096,
                S_IFLNK: 40960,
                S_IFSOCK: 49152,
                O_CREAT: 64,
                O_EXCL: 128,
                O_NOCTTY: 256,
                O_TRUNC: 512,
                O_APPEND: 1024,
                O_DIRECTORY: 65536,
                O_NOATIME: 262144,
                O_NOFOLLOW: 131072,
                O_SYNC: 1052672,
                O_SYMLINK: 2097152,
                O_DIRECT: 16384,
                O_NONBLOCK: 2048,
                S_IRWXU: 448,
                S_IRUSR: 256,
                S_IWUSR: 128,
                S_IXUSR: 64,
                S_IRWXG: 56,
                S_IRGRP: 32,
                S_IWGRP: 16,
                S_IXGRP: 8,
                S_IRWXO: 7,
                S_IROTH: 4,
                S_IWOTH: 2,
                S_IXOTH: 1,
                F_OK: 0,
                R_OK: 4,
                W_OK: 2,
                X_OK: 1,
                UV_FS_SYMLINK_DIR: 1,
                UV_FS_SYMLINK_JUNCTION: 2,
                UV_FS_COPYFILE_EXCL: 1,
                UV_FS_COPYFILE_FICLONE: 2,
                UV_FS_COPYFILE_FICLONE_FORCE: 4,
                COPYFILE_EXCL: 1,
                COPYFILE_FICLONE: 2,
                COPYFILE_FICLONE_FORCE: 4
            };
        },
        71588: (t, n, i)=>{
            "use strict";
            var s = i(60855);
            function Url() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
            }
            var o = /^([a-z0-9.+-]+:)/i, c = /:[0-9]*$/, l = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/, h = [
                "{",
                "}",
                "|",
                "\\",
                "^",
                "`"
            ].concat([
                "<",
                ">",
                '"',
                "`",
                " ",
                "\r",
                "\n",
                "\t"
            ]), f = [
                "'"
            ].concat(h), p = [
                "%",
                "/",
                "?",
                ";",
                "#"
            ].concat(f), _ = [
                "/",
                "?",
                "#"
            ], S = /^[+a-z0-9A-Z_-]{0,63}$/, O = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, R = {
                javascript: !0,
                "javascript:": !0
            }, T = {
                javascript: !0,
                "javascript:": !0
            }, F = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            }, A = i(55600);
            function urlParse(t, n, i) {
                if (t && "object" == typeof t && t instanceof Url) return t;
                var s = new Url;
                return s.parse(t, n, i), s;
            }
            Url.prototype.parse = function(t, n, i) {
                if ("string" != typeof t) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
                var c = t.indexOf("?"), h = -1 !== c && c < t.indexOf("#") ? "?" : "#", N = t.split(h);
                N[0] = N[0].replace(/\\/g, "/");
                var I = t = N.join(h);
                if (I = I.trim(), !i && 1 === t.split("#").length) {
                    var k = l.exec(I);
                    if (k) return this.path = I, this.href = I, this.pathname = k[1], k[2] ? (this.search = k[2], this.query = n ? A.parse(this.search.substr(1)) : this.search.substr(1)) : n && (this.search = "", this.query = {}), this;
                }
                var C = o.exec(I);
                if (C) {
                    var P = (C = C[0]).toLowerCase();
                    this.protocol = P, I = I.substr(C.length);
                }
                if (i || C || I.match(/^\/\/[^@/]+@[^@/]+/)) {
                    var D = "//" === I.substr(0, 2);
                    !D || C && T[C] || (I = I.substr(2), this.slashes = !0);
                }
                if (!T[C] && (D || C && !F[C])) {
                    for(var L, x, B = -1, j = 0; j < _.length; j++){
                        -1 !== (U = I.indexOf(_[j])) && (-1 === B || U < B) && (B = U);
                    }
                    -1 !== (x = -1 === B ? I.lastIndexOf("@") : I.lastIndexOf("@", B)) && (L = I.slice(0, x), I = I.slice(x + 1), this.auth = decodeURIComponent(L)), B = -1;
                    for(j = 0; j < p.length; j++){
                        var U;
                        -1 !== (U = I.indexOf(p[j])) && (-1 === B || U < B) && (B = U);
                    }
                    -1 === B && (B = I.length), this.host = I.slice(0, B), I = I.slice(B), this.parseHost(), this.hostname = this.hostname || "";
                    var M = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!M) for(var W = this.hostname.split(/\./), $ = (j = 0, W.length); j < $; j++){
                        var G = W[j];
                        if (G && !G.match(S)) {
                            for(var V = "", K = 0, H = G.length; K < H; K++)G.charCodeAt(K) > 127 ? V += "x" : V += G[K];
                            if (!V.match(S)) {
                                var q = W.slice(0, j), Y = W.slice(j + 1), z = G.match(O);
                                z && (q.push(z[1]), Y.unshift(z[2])), Y.length && (I = "/" + Y.join(".") + I), this.hostname = q.join(".");
                                break;
                            }
                        }
                    }
                    this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), M || (this.hostname = s.toASCII(this.hostname));
                    var J = this.port ? ":" + this.port : "", X = this.hostname || "";
                    this.host = X + J, this.href += this.host, M && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== I[0] && (I = "/" + I));
                }
                if (!R[P]) for(j = 0, $ = f.length; j < $; j++){
                    var Q = f[j];
                    if (-1 !== I.indexOf(Q)) {
                        var Z = encodeURIComponent(Q);
                        Z === Q && (Z = escape(Q)), I = I.split(Q).join(Z);
                    }
                }
                var ee = I.indexOf("#");
                -1 !== ee && (this.hash = I.substr(ee), I = I.slice(0, ee));
                var te = I.indexOf("?");
                if (-1 !== te ? (this.search = I.substr(te), this.query = I.substr(te + 1), n && (this.query = A.parse(this.query)), I = I.slice(0, te)) : n && (this.search = "", this.query = {}), I && (this.pathname = I), F[P] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                    J = this.pathname || "";
                    var re = this.search || "";
                    this.path = J + re;
                }
                return this.href = this.format(), this;
            }, Url.prototype.format = function() {
                var t = this.auth || "";
                t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
                var n = this.protocol || "", i = this.pathname || "", s = this.hash || "", o = !1, c = "";
                this.host ? o = t + this.host : this.hostname && (o = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && "object" == typeof this.query && Object.keys(this.query).length && (c = A.stringify(this.query, {
                    arrayFormat: "repeat",
                    addQueryPrefix: !1
                }));
                var l = this.search || c && "?" + c || "";
                return n && ":" !== n.substr(-1) && (n += ":"), this.slashes || (!n || F[n]) && !1 !== o ? (o = "//" + (o || ""), i && "/" !== i.charAt(0) && (i = "/" + i)) : o || (o = ""), s && "#" !== s.charAt(0) && (s = "#" + s), l && "?" !== l.charAt(0) && (l = "?" + l), n + o + (i = i.replace(/[?#]/g, function(t) {
                    return encodeURIComponent(t);
                })) + (l = l.replace("#", "%23")) + s;
            }, Url.prototype.resolve = function(t) {
                return this.resolveObject(urlParse(t, !1, !0)).format();
            }, Url.prototype.resolveObject = function(t) {
                if ("string" == typeof t) {
                    var n = new Url;
                    n.parse(t, !1, !0), t = n;
                }
                for(var i = new Url, s = Object.keys(this), o = 0; o < s.length; o++){
                    var c = s[o];
                    i[c] = this[c];
                }
                if (i.hash = t.hash, "" === t.href) return i.href = i.format(), i;
                if (t.slashes && !t.protocol) {
                    for(var l = Object.keys(t), h = 0; h < l.length; h++){
                        var f = l[h];
                        "protocol" !== f && (i[f] = t[f]);
                    }
                    return F[i.protocol] && i.hostname && !i.pathname && (i.pathname = "/", i.path = i.pathname), i.href = i.format(), i;
                }
                if (t.protocol && t.protocol !== i.protocol) {
                    if (!F[t.protocol]) {
                        for(var p = Object.keys(t), _ = 0; _ < p.length; _++){
                            var S = p[_];
                            i[S] = t[S];
                        }
                        return i.href = i.format(), i;
                    }
                    if (i.protocol = t.protocol, t.host || T[t.protocol]) i.pathname = t.pathname;
                    else {
                        for(var O = (t.pathname || "").split("/"); O.length && !(t.host = O.shift()););
                        t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== O[0] && O.unshift(""), O.length < 2 && O.unshift(""), i.pathname = O.join("/");
                    }
                    if (i.search = t.search, i.query = t.query, i.host = t.host || "", i.auth = t.auth, i.hostname = t.hostname || t.host, i.port = t.port, i.pathname || i.search) {
                        var R = i.pathname || "", A = i.search || "";
                        i.path = R + A;
                    }
                    return i.slashes = i.slashes || t.slashes, i.href = i.format(), i;
                }
                var N = i.pathname && "/" === i.pathname.charAt(0), I = t.host || t.pathname && "/" === t.pathname.charAt(0), k = I || N || i.host && t.pathname, C = k, P = i.pathname && i.pathname.split("/") || [], D = (O = t.pathname && t.pathname.split("/") || [], i.protocol && !F[i.protocol]);
                if (D && (i.hostname = "", i.port = null, i.host && ("" === P[0] ? P[0] = i.host : P.unshift(i.host)), i.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === O[0] ? O[0] = t.host : O.unshift(t.host)), t.host = null), k = k && ("" === O[0] || "" === P[0])), I) i.host = t.host || "" === t.host ? t.host : i.host, i.hostname = t.hostname || "" === t.hostname ? t.hostname : i.hostname, i.search = t.search, i.query = t.query, P = O;
                else if (O.length) P || (P = []), P.pop(), P = P.concat(O), i.search = t.search, i.query = t.query;
                else if (null != t.search) {
                    if (D) i.host = P.shift(), i.hostname = i.host, (U = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@")) && (i.auth = U.shift(), i.hostname = U.shift(), i.host = i.hostname);
                    return i.search = t.search, i.query = t.query, null === i.pathname && null === i.search || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.href = i.format(), i;
                }
                if (!P.length) return i.pathname = null, i.search ? i.path = "/" + i.search : i.path = null, i.href = i.format(), i;
                for(var L = P.slice(-1)[0], x = (i.host || t.host || P.length > 1) && ("." === L || ".." === L) || "" === L, B = 0, j = P.length; j >= 0; j--)"." === (L = P[j]) ? P.splice(j, 1) : ".." === L ? (P.splice(j, 1), B++) : B && (P.splice(j, 1), B--);
                if (!k && !C) for(; B--; B)P.unshift("..");
                !k || "" === P[0] || P[0] && "/" === P[0].charAt(0) || P.unshift(""), x && "/" !== P.join("/").substr(-1) && P.push("");
                var U, M = "" === P[0] || P[0] && "/" === P[0].charAt(0);
                D && (i.hostname = M ? "" : P.length ? P.shift() : "", i.host = i.hostname, (U = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@")) && (i.auth = U.shift(), i.hostname = U.shift(), i.host = i.hostname));
                return (k = k || i.host && P.length) && !M && P.unshift(""), P.length > 0 ? i.pathname = P.join("/") : (i.pathname = null, i.path = null), null === i.pathname && null === i.search || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.auth = t.auth || i.auth, i.slashes = i.slashes || t.slashes, i.href = i.format(), i;
            }, Url.prototype.parseHost = function() {
                var t = this.host, n = c.exec(t);
                n && (":" !== (n = n[0]) && (this.port = n.substr(1)), t = t.substr(0, t.length - n.length)), t && (this.hostname = t);
            };
        },
        75043: (t, n, i)=>{
            "use strict";
            var s = i(42649);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.unixify = n.getWriteSyncArgs = n.getWriteArgs = n.bufToUint8 = n.isWin = void 0, n.promisify = function promisify(t, n, i = (t)=>t) {
                return (...s)=>new Promise((o, c)=>{
                        t[n].bind(t)(...s, (t, n)=>t ? c(t) : o(i(n)));
                    });
            }, n.validateCallback = validateCallback, n.modeToNumber = modeToNumber, n.nullCheck = nullCheck, n.pathToFilename = function pathToFilename(t) {
                t instanceof Uint8Array && (t = (0, f.bufferFrom)(t));
                if ("string" != typeof t && !l.Buffer.isBuffer(t)) {
                    try {
                        if (!(t instanceof i(71588).URL)) throw new TypeError(o.ERRSTR.PATH_STR);
                    } catch (t) {
                        throw new TypeError(o.ERRSTR.PATH_STR);
                    }
                    t = function getPathFromURLPosix(t) {
                        if ("" !== t.hostname) throw new c.TypeError("ERR_INVALID_FILE_URL_HOST", s.platform);
                        const n = t.pathname;
                        for(let t = 0; t < n.length; t++)if ("%" === n[t]) {
                            const i = 32 | n.codePointAt(t + 2);
                            if ("2" === n[t + 1] && 102 === i) throw new c.TypeError("ERR_INVALID_FILE_URL_PATH", "must not include encoded / characters");
                        }
                        return decodeURIComponent(n);
                    }(t);
                }
                const n = String(t);
                return nullCheck(n), n;
            }, n.createError = function createError(t, n = "", i = "", s = "", o = Error) {
                const c = new o(function formatError(t, n = "", i = "", s = "") {
                    let o = "";
                    i && (o = ` '${i}'`);
                    s && (o += ` -> '${s}'`);
                    switch(t){
                        case _:
                            return `ENOENT: no such file or directory, ${n}${o}`;
                        case S:
                            return `EBADF: bad file descriptor, ${n}${o}`;
                        case O:
                            return `EINVAL: invalid argument, ${n}${o}`;
                        case R:
                            return `EPERM: operation not permitted, ${n}${o}`;
                        case T:
                            return `EPROTO: protocol error, ${n}${o}`;
                        case F:
                            return `EEXIST: file already exists, ${n}${o}`;
                        case A:
                            return `ENOTDIR: not a directory, ${n}${o}`;
                        case k:
                            return `EISDIR: illegal operation on a directory, ${n}${o}`;
                        case I:
                            return `EACCES: permission denied, ${n}${o}`;
                        case C:
                            return `ENOTEMPTY: directory not empty, ${n}${o}`;
                        case N:
                            return `EMFILE: too many open files, ${n}${o}`;
                        case P:
                            return `ENOSYS: function not implemented, ${n}${o}`;
                        case D:
                            return `[ERR_FS_EISDIR]: Path is a directory: ${n} returned EISDIR (is a directory) ${i}`;
                        case L:
                            return `[ERR_OUT_OF_RANGE]: value out of range, ${n}${o}`;
                        default:
                            return `${t}: error occurred, ${n}${o}`;
                    }
                }(t, n, i, s));
                c.code = t, i && (c.path = i);
                return c;
            }, n.genRndStr6 = function genRndStr6() {
                const t = (Math.random() + 1).toString(36).substring(2, 8);
                return 6 === t.length ? t : genRndStr6();
            }, n.flagsToNumber = function flagsToNumber(t) {
                if ("number" == typeof t) return t;
                if ("string" == typeof t) {
                    const n = o.FLAGS[t];
                    if (void 0 !== n) return n;
                }
                throw new c.TypeError("ERR_INVALID_OPT_VALUE", "flags", t);
            }, n.isFd = isFd, n.validateFd = validateFd, n.streamToBuffer = function streamToBuffer(t) {
                const n = [];
                return new Promise((i, s)=>{
                    t.on("data", (t)=>n.push(t)), t.on("end", ()=>i(l.Buffer.concat(n))), t.on("error", s);
                });
            }, n.dataToBuffer = dataToBuffer, n.bufferToEncoding = function bufferToEncoding(t, n) {
                return n && "buffer" !== n ? t.toString(n) : t;
            }, n.isReadableStream = function isReadableStream(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.pipe && "function" == typeof t.on && !0 === t.readable;
            };
            const o = i(17886), c = i(7215), l = i(52058), h = i(35953), f = i(52058), p = i(82892);
            function validateCallback(t) {
                if ("function" != typeof t) throw TypeError(o.ERRSTR.CB);
                return t;
            }
            function modeToNumber(t, n) {
                const i = function _modeToNumber(t, n) {
                    return "number" == typeof t ? t : "string" == typeof t ? parseInt(t, 8) : n ? modeToNumber(n) : void 0;
                }(t, n);
                if ("number" != typeof i || isNaN(i)) throw new TypeError(o.ERRSTR.MODE_INT);
                return i;
            }
            function nullCheck(t, n) {
                if (-1 !== ("" + t).indexOf("\0")) {
                    const t = new Error("Path must be a string without null bytes");
                    if (t.code = "ENOENT", "function" != typeof n) throw t;
                    return (0, p.default)(()=>{
                        n(t);
                    }), !1;
                }
                return !0;
            }
            n.isWin = "win32" === s.platform;
            const _ = "ENOENT", S = "EBADF", O = "EINVAL", R = "EPERM", T = "EPROTO", F = "EEXIST", A = "ENOTDIR", N = "EMFILE", I = "EACCES", k = "EISDIR", C = "ENOTEMPTY", P = "ENOSYS", D = "ERR_FS_EISDIR", L = "ERR_OUT_OF_RANGE";
            function isFd(t) {
                return t >>> 0 === t;
            }
            function validateFd(t) {
                if (!isFd(t)) throw TypeError(o.ERRSTR.FD);
            }
            function dataToBuffer(t, n = h.ENCODING_UTF8) {
                return l.Buffer.isBuffer(t) ? t : t instanceof Uint8Array ? (0, f.bufferFrom)(t) : (0, f.bufferFrom)(String(t), n);
            }
            n.bufToUint8 = (t)=>new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
            n.getWriteArgs = (t, n, i, s, o, c)=>{
                validateFd(t);
                let l, h, f, p = 0, _ = null;
                const S = typeof n, O = typeof i, R = typeof s, T = typeof o;
                "string" !== S ? "function" === O ? f = i : "function" === R ? (p = 0 | i, f = s) : "function" === T ? (p = 0 | i, l = s, f = o) : (p = 0 | i, l = s, _ = o, f = c) : "function" === O ? f = i : "function" === R ? (_ = i, f = s) : "function" === T && (_ = i, h = s, f = o);
                const F = dataToBuffer(n, h);
                "string" !== S ? void 0 === l && (l = F.length) : (p = 0, l = F.length);
                return [
                    t,
                    "string" === S,
                    F,
                    p,
                    l,
                    _,
                    validateCallback(f)
                ];
            };
            n.getWriteSyncArgs = (t, n, i, s, o)=>{
                let c, l, h, f;
                validateFd(t);
                const p = "string" != typeof n;
                p ? (l = 0 | (i || 0), h = s, f = o) : (f = i, c = s);
                const _ = dataToBuffer(n, c);
                return p ? void 0 === h && (h = _.length) : (l = 0, h = _.length), [
                    t,
                    _,
                    l || 0,
                    h,
                    f
                ];
            };
            const isSeparator = (t, i)=>{
                let s = t[i];
                return i > 0 && ("/" === s || n.isWin && "\\" === s);
            }, normalizePath = (t, n)=>{
                if ("string" != typeof t) throw new TypeError("expected a string");
                return t = t.replace(/[\\\/]+/g, "/"), !1 !== n && (t = ((t)=>{
                    let n = t.length - 1;
                    if (n < 2) return t;
                    for(; isSeparator(t, n);)n--;
                    return t.substr(0, n + 1);
                })(t)), t;
            };
            n.unixify = (t, i = !0)=>n.isWin ? (t = normalizePath(t, i)).replace(/^([a-zA-Z]+:|\.\/)/, "") : t;
        },
        76361: (t, n, i)=>{
            "use strict";
            var s = i(65136), o = Object.prototype.hasOwnProperty, c = Array.isArray, l = function() {
                for(var t = [], n = 0; n < 256; ++n)t.push("%" + ((n < 16 ? "0" : "") + n.toString(16)).toUpperCase());
                return t;
            }(), h = function arrayToObject(t, n) {
                for(var i = n && n.plainObjects ? {
                    __proto__: null
                } : {}, s = 0; s < t.length; ++s)void 0 !== t[s] && (i[s] = t[s]);
                return i;
            }, f = 1024;
            t.exports = {
                arrayToObject: h,
                assign: function assignSingleSource(t, n) {
                    return Object.keys(n).reduce(function(t, i) {
                        return t[i] = n[i], t;
                    }, t);
                },
                combine: function combine(t, n) {
                    return [].concat(t, n);
                },
                compact: function compact(t) {
                    for(var n = [
                        {
                            obj: {
                                o: t
                            },
                            prop: "o"
                        }
                    ], i = [], s = 0; s < n.length; ++s)for(var o = n[s], l = o.obj[o.prop], h = Object.keys(l), f = 0; f < h.length; ++f){
                        var p = h[f], _ = l[p];
                        "object" == typeof _ && null !== _ && -1 === i.indexOf(_) && (n.push({
                            obj: l,
                            prop: p
                        }), i.push(_));
                    }
                    return function compactQueue(t) {
                        for(; t.length > 1;){
                            var n = t.pop(), i = n.obj[n.prop];
                            if (c(i)) {
                                for(var s = [], o = 0; o < i.length; ++o)void 0 !== i[o] && s.push(i[o]);
                                n.obj[n.prop] = s;
                            }
                        }
                    }(n), t;
                },
                decode: function(t, n, i) {
                    var s = t.replace(/\+/g, " ");
                    if ("iso-8859-1" === i) return s.replace(/%[0-9a-f]{2}/gi, unescape);
                    try {
                        return decodeURIComponent(s);
                    } catch (t) {
                        return s;
                    }
                },
                encode: function encode(t, n, i, o, c) {
                    if (0 === t.length) return t;
                    var h = t;
                    if ("symbol" == typeof t ? h = Symbol.prototype.toString.call(t) : "string" != typeof t && (h = String(t)), "iso-8859-1" === i) return escape(h).replace(/%u[0-9a-f]{4}/gi, function(t) {
                        return "%26%23" + parseInt(t.slice(2), 16) + "%3B";
                    });
                    for(var p = "", _ = 0; _ < h.length; _ += f){
                        for(var S = h.length >= f ? h.slice(_, _ + f) : h, O = [], R = 0; R < S.length; ++R){
                            var T = S.charCodeAt(R);
                            45 === T || 46 === T || 95 === T || 126 === T || T >= 48 && T <= 57 || T >= 65 && T <= 90 || T >= 97 && T <= 122 || c === s.RFC1738 && (40 === T || 41 === T) ? O[O.length] = S.charAt(R) : T < 128 ? O[O.length] = l[T] : T < 2048 ? O[O.length] = l[192 | T >> 6] + l[128 | 63 & T] : T < 55296 || T >= 57344 ? O[O.length] = l[224 | T >> 12] + l[128 | T >> 6 & 63] + l[128 | 63 & T] : (R += 1, T = 65536 + ((1023 & T) << 10 | 1023 & S.charCodeAt(R)), O[O.length] = l[240 | T >> 18] + l[128 | T >> 12 & 63] + l[128 | T >> 6 & 63] + l[128 | 63 & T]);
                        }
                        p += O.join("");
                    }
                    return p;
                },
                isBuffer: function isBuffer(t) {
                    return !(!t || "object" != typeof t) && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
                },
                isRegExp: function isRegExp(t) {
                    return "[object RegExp]" === Object.prototype.toString.call(t);
                },
                maybeMap: function maybeMap(t, n) {
                    if (c(t)) {
                        for(var i = [], s = 0; s < t.length; s += 1)i.push(n(t[s]));
                        return i;
                    }
                    return n(t);
                },
                merge: function merge(t, n, i) {
                    if (!n) return t;
                    if ("object" != typeof n && "function" != typeof n) {
                        if (c(t)) t.push(n);
                        else {
                            if (!t || "object" != typeof t) return [
                                t,
                                n
                            ];
                            (i && (i.plainObjects || i.allowPrototypes) || !o.call(Object.prototype, n)) && (t[n] = !0);
                        }
                        return t;
                    }
                    if (!t || "object" != typeof t) return [
                        t
                    ].concat(n);
                    var s = t;
                    return c(t) && !c(n) && (s = h(t, i)), c(t) && c(n) ? (n.forEach(function(n, s) {
                        if (o.call(t, s)) {
                            var c = t[s];
                            c && "object" == typeof c && n && "object" == typeof n ? t[s] = merge(c, n, i) : t.push(n);
                        } else t[s] = n;
                    }), t) : Object.keys(n).reduce(function(t, s) {
                        var c = n[s];
                        return o.call(t, s) ? t[s] = merge(t[s], c, i) : t[s] = c, t;
                    }, s);
                }
            };
        },
        78322: (t, n, i)=>{
            "use strict";
            i.r(n), i.d(n, {
                __addDisposableResource: ()=>__addDisposableResource,
                __assign: ()=>__assign,
                __asyncDelegator: ()=>__asyncDelegator,
                __asyncGenerator: ()=>__asyncGenerator,
                __asyncValues: ()=>__asyncValues,
                __await: ()=>__await,
                __awaiter: ()=>__awaiter,
                __classPrivateFieldGet: ()=>__classPrivateFieldGet,
                __classPrivateFieldIn: ()=>__classPrivateFieldIn,
                __classPrivateFieldSet: ()=>__classPrivateFieldSet,
                __createBinding: ()=>s,
                __decorate: ()=>__decorate,
                __disposeResources: ()=>__disposeResources,
                __esDecorate: ()=>__esDecorate,
                __exportStar: ()=>__exportStar,
                __extends: ()=>__extends,
                __generator: ()=>__generator,
                __importDefault: ()=>__importDefault,
                __importStar: ()=>__importStar,
                __makeTemplateObject: ()=>__makeTemplateObject,
                __metadata: ()=>__metadata,
                __param: ()=>__param,
                __propKey: ()=>__propKey,
                __read: ()=>__read,
                __rest: ()=>__rest,
                __rewriteRelativeImportExtension: ()=>__rewriteRelativeImportExtension,
                __runInitializers: ()=>__runInitializers,
                __setFunctionName: ()=>__setFunctionName,
                __spread: ()=>__spread,
                __spreadArray: ()=>__spreadArray,
                __spreadArrays: ()=>__spreadArrays,
                __values: ()=>__values,
                default: ()=>l
            });
            var extendStatics = function(t, n) {
                return extendStatics = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(t, n) {
                    t.__proto__ = n;
                } || function(t, n) {
                    for(var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }, extendStatics(t, n);
            };
            function __extends(t, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function __() {
                    this.constructor = t;
                }
                extendStatics(t, n), t.prototype = null === n ? Object.create(n) : (__.prototype = n.prototype, new __);
            }
            var __assign = function() {
                return __assign = Object.assign || function __assign(t) {
                    for(var n, i = 1, s = arguments.length; i < s; i++)for(var o in n = arguments[i])Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                    return t;
                }, __assign.apply(this, arguments);
            };
            function __rest(t, n) {
                var i = {};
                for(var s in t)Object.prototype.hasOwnProperty.call(t, s) && n.indexOf(s) < 0 && (i[s] = t[s]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for(s = Object.getOwnPropertySymbols(t); o < s.length; o++)n.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s[o]) && (i[s[o]] = t[s[o]]);
                }
                return i;
            }
            function __decorate(t, n, i, s) {
                var o, c = arguments.length, l = c < 3 ? n : null === s ? s = Object.getOwnPropertyDescriptor(n, i) : s;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, n, i, s);
                else for(var h = t.length - 1; h >= 0; h--)(o = t[h]) && (l = (c < 3 ? o(l) : c > 3 ? o(n, i, l) : o(n, i)) || l);
                return c > 3 && l && Object.defineProperty(n, i, l), l;
            }
            function __param(t, n) {
                return function(i, s) {
                    n(i, s, t);
                };
            }
            function __esDecorate(t, n, i, s, o, c) {
                function accept(t) {
                    if (void 0 !== t && "function" != typeof t) throw new TypeError("Function expected");
                    return t;
                }
                for(var l, h = s.kind, f = "getter" === h ? "get" : "setter" === h ? "set" : "value", p = !n && t ? s.static ? t : t.prototype : null, _ = n || (p ? Object.getOwnPropertyDescriptor(p, s.name) : {}), S = !1, O = i.length - 1; O >= 0; O--){
                    var R = {};
                    for(var T in s)R[T] = "access" === T ? {} : s[T];
                    for(var T in s.access)R.access[T] = s.access[T];
                    R.addInitializer = function(t) {
                        if (S) throw new TypeError("Cannot add initializers after decoration has completed");
                        c.push(accept(t || null));
                    };
                    var F = (0, i[O])("accessor" === h ? {
                        get: _.get,
                        set: _.set
                    } : _[f], R);
                    if ("accessor" === h) {
                        if (void 0 === F) continue;
                        if (null === F || "object" != typeof F) throw new TypeError("Object expected");
                        (l = accept(F.get)) && (_.get = l), (l = accept(F.set)) && (_.set = l), (l = accept(F.init)) && o.unshift(l);
                    } else (l = accept(F)) && ("field" === h ? o.unshift(l) : _[f] = l);
                }
                p && Object.defineProperty(p, s.name, _), S = !0;
            }
            function __runInitializers(t, n, i) {
                for(var s = arguments.length > 2, o = 0; o < n.length; o++)i = s ? n[o].call(t, i) : n[o].call(t);
                return s ? i : void 0;
            }
            function __propKey(t) {
                return "symbol" == typeof t ? t : "".concat(t);
            }
            function __setFunctionName(t, n, i) {
                return "symbol" == typeof n && (n = n.description ? "[".concat(n.description, "]") : ""), Object.defineProperty(t, "name", {
                    configurable: !0,
                    value: i ? "".concat(i, " ", n) : n
                });
            }
            function __metadata(t, n) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, n);
            }
            function __awaiter(t, n, i, s) {
                return new (i || (i = Promise))(function(o, c) {
                    function fulfilled(t) {
                        try {
                            step(s.next(t));
                        } catch (t) {
                            c(t);
                        }
                    }
                    function rejected(t) {
                        try {
                            step(s.throw(t));
                        } catch (t) {
                            c(t);
                        }
                    }
                    function step(t) {
                        t.done ? o(t.value) : (function adopt(t) {
                            return t instanceof i ? t : new i(function(n) {
                                n(t);
                            });
                        })(t.value).then(fulfilled, rejected);
                    }
                    step((s = s.apply(t, n || [])).next());
                });
            }
            function __generator(t, n) {
                var i, s, o, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1];
                    },
                    trys: [],
                    ops: []
                }, l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return l.next = verb(0), l.throw = verb(1), l.return = verb(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this;
                }), l;
                function verb(h) {
                    return function(f) {
                        return function step(h) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for(; l && (l = 0, h[0] && (c = 0)), c;)try {
                                if (i = 1, s && (o = 2 & h[0] ? s.return : h[0] ? s.throw || ((o = s.return) && o.call(s), 0) : s.next) && !(o = o.call(s, h[1])).done) return o;
                                switch(s = 0, o && (h = [
                                    2 & h[0],
                                    o.value
                                ]), h[0]){
                                    case 0:
                                    case 1:
                                        o = h;
                                        break;
                                    case 4:
                                        return c.label++, {
                                            value: h[1],
                                            done: !1
                                        };
                                    case 5:
                                        c.label++, s = h[1], h = [
                                            0
                                        ];
                                        continue;
                                    case 7:
                                        h = c.ops.pop(), c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== h[0] && 2 !== h[0])) {
                                            c = 0;
                                            continue;
                                        }
                                        if (3 === h[0] && (!o || h[1] > o[0] && h[1] < o[3])) {
                                            c.label = h[1];
                                            break;
                                        }
                                        if (6 === h[0] && c.label < o[1]) {
                                            c.label = o[1], o = h;
                                            break;
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2], c.ops.push(h);
                                            break;
                                        }
                                        o[2] && c.ops.pop(), c.trys.pop();
                                        continue;
                                }
                                h = n.call(t, c);
                            } catch (t) {
                                h = [
                                    6,
                                    t
                                ], s = 0;
                            } finally{
                                i = o = 0;
                            }
                            if (5 & h[0]) throw h[1];
                            return {
                                value: h[0] ? h[1] : void 0,
                                done: !0
                            };
                        }([
                            h,
                            f
                        ]);
                    };
                }
            }
            var s = Object.create ? function(t, n, i, s) {
                void 0 === s && (s = i);
                var o = Object.getOwnPropertyDescriptor(n, i);
                o && !("get" in o ? !n.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return n[i];
                    }
                }), Object.defineProperty(t, s, o);
            } : function(t, n, i, s) {
                void 0 === s && (s = i), t[s] = n[i];
            };
            function __exportStar(t, n) {
                for(var i in t)"default" === i || Object.prototype.hasOwnProperty.call(n, i) || s(n, t, i);
            }
            function __values(t) {
                var n = "function" == typeof Symbol && Symbol.iterator, i = n && t[n], s = 0;
                if (i) return i.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && s >= t.length && (t = void 0), {
                            value: t && t[s++],
                            done: !t
                        };
                    }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }
            function __read(t, n) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var s, o, c = i.call(t), l = [];
                try {
                    for(; (void 0 === n || n-- > 0) && !(s = c.next()).done;)l.push(s.value);
                } catch (t) {
                    o = {
                        error: t
                    };
                } finally{
                    try {
                        s && !s.done && (i = c.return) && i.call(c);
                    } finally{
                        if (o) throw o.error;
                    }
                }
                return l;
            }
            function __spread() {
                for(var t = [], n = 0; n < arguments.length; n++)t = t.concat(__read(arguments[n]));
                return t;
            }
            function __spreadArrays() {
                for(var t = 0, n = 0, i = arguments.length; n < i; n++)t += arguments[n].length;
                var s = Array(t), o = 0;
                for(n = 0; n < i; n++)for(var c = arguments[n], l = 0, h = c.length; l < h; l++, o++)s[o] = c[l];
                return s;
            }
            function __spreadArray(t, n, i) {
                if (i || 2 === arguments.length) for(var s, o = 0, c = n.length; o < c; o++)!s && o in n || (s || (s = Array.prototype.slice.call(n, 0, o)), s[o] = n[o]);
                return t.concat(s || Array.prototype.slice.call(n));
            }
            function __await(t) {
                return this instanceof __await ? (this.v = t, this) : new __await(t);
            }
            function __asyncGenerator(t, n, i) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var s, o = i.apply(t, n || []), c = [];
                return s = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", function awaitReturn(t) {
                    return function(n) {
                        return Promise.resolve(n).then(t, reject);
                    };
                }), s[Symbol.asyncIterator] = function() {
                    return this;
                }, s;
                function verb(t, n) {
                    o[t] && (s[t] = function(n) {
                        return new Promise(function(i, s) {
                            c.push([
                                t,
                                n,
                                i,
                                s
                            ]) > 1 || resume(t, n);
                        });
                    }, n && (s[t] = n(s[t])));
                }
                function resume(t, n) {
                    try {
                        !function step(t) {
                            t.value instanceof __await ? Promise.resolve(t.value.v).then(fulfill, reject) : settle(c[0][2], t);
                        }(o[t](n));
                    } catch (t) {
                        settle(c[0][3], t);
                    }
                }
                function fulfill(t) {
                    resume("next", t);
                }
                function reject(t) {
                    resume("throw", t);
                }
                function settle(t, n) {
                    t(n), c.shift(), c.length && resume(c[0][0], c[0][1]);
                }
            }
            function __asyncDelegator(t) {
                var n, i;
                return n = {}, verb("next"), verb("throw", function(t) {
                    throw t;
                }), verb("return"), n[Symbol.iterator] = function() {
                    return this;
                }, n;
                function verb(s, o) {
                    n[s] = t[s] ? function(n) {
                        return (i = !i) ? {
                            value: __await(t[s](n)),
                            done: !1
                        } : o ? o(n) : n;
                    } : o;
                }
            }
            function __asyncValues(t) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, i = t[Symbol.asyncIterator];
                return i ? i.call(t) : (t = __values(t), n = {}, verb("next"), verb("throw"), verb("return"), n[Symbol.asyncIterator] = function() {
                    return this;
                }, n);
                function verb(i) {
                    n[i] = t[i] && function(n) {
                        return new Promise(function(s, o) {
                            (function settle(t, n, i, s) {
                                Promise.resolve(s).then(function(n) {
                                    t({
                                        value: n,
                                        done: i
                                    });
                                }, n);
                            })(s, o, (n = t[i](n)).done, n.value);
                        });
                    };
                }
            }
            function __makeTemplateObject(t, n) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: n
                }) : t.raw = n, t;
            }
            var o = Object.create ? function(t, n) {
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: n
                });
            } : function(t, n) {
                t.default = n;
            }, ownKeys = function(t) {
                return ownKeys = Object.getOwnPropertyNames || function(t) {
                    var n = [];
                    for(var i in t)Object.prototype.hasOwnProperty.call(t, i) && (n[n.length] = i);
                    return n;
                }, ownKeys(t);
            };
            function __importStar(t) {
                if (t && t.__esModule) return t;
                var n = {};
                if (null != t) for(var i = ownKeys(t), c = 0; c < i.length; c++)"default" !== i[c] && s(n, t, i[c]);
                return o(n, t), n;
            }
            function __importDefault(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function __classPrivateFieldGet(t, n, i, s) {
                if ("a" === i && !s) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof n ? t !== n || !s : !n.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === i ? s : "a" === i ? s.call(t) : s ? s.value : n.get(t);
            }
            function __classPrivateFieldSet(t, n, i, s, o) {
                if ("m" === s) throw new TypeError("Private method is not writable");
                if ("a" === s && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof n ? t !== n || !o : !n.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === s ? o.call(t, i) : o ? o.value = i : n.set(t, i), i;
            }
            function __classPrivateFieldIn(t, n) {
                if (null === n || "object" != typeof n && "function" != typeof n) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof t ? n === t : t.has(n);
            }
            function __addDisposableResource(t, n, i) {
                if (null != n) {
                    if ("object" != typeof n && "function" != typeof n) throw new TypeError("Object expected.");
                    var s, o;
                    if (i) {
                        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                        s = n[Symbol.asyncDispose];
                    }
                    if (void 0 === s) {
                        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                        s = n[Symbol.dispose], i && (o = s);
                    }
                    if ("function" != typeof s) throw new TypeError("Object not disposable.");
                    o && (s = function() {
                        try {
                            o.call(this);
                        } catch (t) {
                            return Promise.reject(t);
                        }
                    }), t.stack.push({
                        value: n,
                        dispose: s,
                        async: i
                    });
                } else i && t.stack.push({
                    async: !0
                });
                return n;
            }
            var c = "function" == typeof SuppressedError ? SuppressedError : function(t, n, i) {
                var s = new Error(i);
                return s.name = "SuppressedError", s.error = t, s.suppressed = n, s;
            };
            function __disposeResources(t) {
                function fail(n) {
                    t.error = t.hasError ? new c(n, t.error, "An error was suppressed during disposal.") : n, t.hasError = !0;
                }
                var n, i = 0;
                return function next() {
                    for(; n = t.stack.pop();)try {
                        if (!n.async && 1 === i) return i = 0, t.stack.push(n), Promise.resolve().then(next);
                        if (n.dispose) {
                            var s = n.dispose.call(n.value);
                            if (n.async) return i |= 2, Promise.resolve(s).then(next, function(t) {
                                return fail(t), next();
                            });
                        } else i |= 1;
                    } catch (t) {
                        fail(t);
                    }
                    if (1 === i) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
                    if (t.hasError) throw t.error;
                }();
            }
            function __rewriteRelativeImportExtension(t, n) {
                return "string" == typeof t && /^\.\.?\//.test(t) ? t.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(t, i, s, o, c) {
                    return i ? n ? ".jsx" : ".js" : !s || o && c ? s + o + "." + c.toLowerCase() + "js" : t;
                }) : t;
            }
            const l = {
                __extends,
                __assign,
                __rest,
                __decorate,
                __param,
                __esDecorate,
                __runInitializers,
                __propKey,
                __setFunctionName,
                __metadata,
                __awaiter,
                __generator,
                __createBinding: s,
                __exportStar,
                __values,
                __read,
                __spread,
                __spreadArrays,
                __spreadArray,
                __await,
                __asyncGenerator,
                __asyncDelegator,
                __asyncValues,
                __makeTemplateObject,
                __importStar,
                __importDefault,
                __classPrivateFieldGet,
                __classPrivateFieldSet,
                __classPrivateFieldIn,
                __addDisposableResource,
                __disposeResources,
                __rewriteRelativeImportExtension
            };
        },
        82892: (t, n)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = "function" == typeof queueMicrotask ? queueMicrotask : (t)=>Promise.resolve().then(()=>t()).catch(()=>{});
        },
        83233: (t, n, i)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.Dir = void 0;
            const s = i(75043), o = i(83608);
            let Dir = class Dir {
                wrapAsync(t, n, i) {
                    (0, s.validateCallback)(i), Promise.resolve().then(()=>{
                        let s;
                        try {
                            s = t.apply(this, n);
                        } catch (t) {
                            return void i(t);
                        }
                        i(null, s);
                    });
                }
                isFunction(t) {
                    return "function" == typeof t;
                }
                promisify(t, n) {
                    return (...i)=>new Promise((s, o)=>{
                            this.isFunction(t[n]) ? t[n].bind(t)(...i, (t, n)=>{
                                t && o(t), s(n);
                            }) : o("Not a function");
                        });
                }
                closeBase() {}
                readBase(t) {
                    let n, i, s, c;
                    do {
                        do {
                            if ({ done: n, value: i } = t[t.length - 1].next(), n) break;
                            [s, c] = i;
                        }while ("." === s || ".." === s)
                        if (!n) return this.options.recursive && c.children.size && t.push(c.children[Symbol.iterator]()), o.default.build(c, this.options.encoding);
                        if (t.pop(), 0 === t.length) break;
                        n = !1;
                    }while (!n)
                    return null;
                }
                closeBaseAsync(t) {
                    this.wrapAsync(this.closeBase, [], t);
                }
                close(t) {
                    if ("function" != typeof t) return this.promisify(this, "closeBaseAsync")();
                    this.closeBaseAsync(t);
                }
                closeSync() {
                    this.closeBase();
                }
                readBaseAsync(t) {
                    this.wrapAsync(this.readBase, [
                        this.iteratorInfo
                    ], t);
                }
                read(t) {
                    if ("function" != typeof t) return this.promisify(this, "readBaseAsync")();
                    this.readBaseAsync(t);
                }
                readSync() {
                    return this.readBase(this.iteratorInfo);
                }
                [Symbol.asyncIterator]() {
                    const t = [], n = this;
                    t.push(n.link.children[Symbol.iterator]());
                    const i = {
                        readBaseAsync (i) {
                            n.wrapAsync(n.readBase, [
                                t
                            ], i);
                        }
                    };
                    return {
                        async next () {
                            const t = await n.promisify(i, "readBaseAsync")();
                            return null !== t ? {
                                done: !1,
                                value: t
                            } : {
                                done: !0,
                                value: void 0
                            };
                        },
                        [Symbol.asyncIterator] () {
                            throw new Error("Not implemented");
                        }
                    };
                }
                constructor(t, n){
                    this.link = t, this.options = n, this.iteratorInfo = [], this.path = t.getParentPath(), this.iteratorInfo.push(t.children[Symbol.iterator]());
                }
            };
            n.Dir = Dir;
        },
        83608: (t, n, i)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.Dirent = void 0;
            const s = i(70111), o = i(35953), { S_IFMT: c, S_IFDIR: l, S_IFREG: h, S_IFBLK: f, S_IFCHR: p, S_IFLNK: _, S_IFIFO: S, S_IFSOCK: O } = s.constants;
            let Dirent = class Dirent {
                static build(t, n) {
                    const i = new Dirent, { mode: s } = t.getNode();
                    return i.name = (0, o.strToEncoding)(t.getName(), n), i.mode = s, i.path = t.getParentPath(), i.parentPath = i.path, i;
                }
                _checkModeProperty(t) {
                    return (this.mode & c) === t;
                }
                isDirectory() {
                    return this._checkModeProperty(l);
                }
                isFile() {
                    return this._checkModeProperty(h);
                }
                isBlockDevice() {
                    return this._checkModeProperty(f);
                }
                isCharacterDevice() {
                    return this._checkModeProperty(p);
                }
                isSymbolicLink() {
                    return this._checkModeProperty(_);
                }
                isFIFO() {
                    return this._checkModeProperty(S);
                }
                isSocket() {
                    return this._checkModeProperty(O);
                }
                constructor(){
                    this.name = "", this.path = "", this.parentPath = "", this.mode = 0;
                }
            };
            n.Dirent = Dirent, n.default = Dirent;
        },
        86270: (t, n)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.newNotAllowedError = n.newTypeMismatchError = n.newNotFoundError = n.assertCanWrite = n.assertName = n.basename = n.ctx = void 0;
            n.ctx = (t = {})=>Object.assign({
                    separator: "/",
                    syncHandleAllowed: !1,
                    mode: "read"
                }, t);
            n.basename = (t, n)=>{
                t[t.length - 1] === n && (t = t.slice(0, -1));
                const i = t.lastIndexOf(n);
                return -1 === i ? t : t.slice(i + 1);
            };
            const i = /^(\.{1,2})$|^(.*([\/\\]).*)$/;
            n.assertName = (t, n, s)=>{
                if (!t || i.test(t)) throw new TypeError(`Failed to execute '${n}' on '${s}': Name is not allowed.`);
            };
            n.assertCanWrite = (t)=>{
                if ("readwrite" !== t) throw new DOMException("The request is not allowed by the user agent or the platform in the current context.", "NotAllowedError");
            };
            n.newNotFoundError = ()=>new DOMException("A requested file or directory could not be found at the time an operation was processed.", "NotFoundError");
            n.newTypeMismatchError = ()=>new DOMException("The path supplied exists, but was not an entry of requested type.", "TypeMismatchError");
            n.newNotAllowedError = ()=>new DOMException("Permission not granted.", "NotAllowedError");
        },
        88771: (t, n, i)=>{
            "use strict";
            var s = i(42649), o = i(78);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.createProcess = createProcess;
            const maybeReturnProcess = ()=>{
                if (void 0 !== s) return s;
                try {
                    return i(42649);
                } catch (t) {
                    return;
                }
            };
            function createProcess() {
                const t = maybeReturnProcess() || {};
                return t.cwd || (t.cwd = ()=>"/"), t.emitWarning || (t.emitWarning = (t, n)=>{
                    o.warn(`${n}${n ? ": " : ""}${t}`);
                }), t.env || (t.env = {}), t;
            }
            n.default = createProcess();
        },
        89797: (t, n, i)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            const s = i(78322);
            s.__exportStar(i(9530), n), s.__exportStar(i(2487), n);
        },
        91441: (t, n, i)=>{
            "use strict";
            var s = i(95894), o = i(79553), c = i(10458), l = i(4002), h = s("%Map%", !0), f = o("Map.prototype.get", !0), p = o("Map.prototype.set", !0), _ = o("Map.prototype.has", !0), S = o("Map.prototype.delete", !0), O = o("Map.prototype.size", !0);
            t.exports = !!h && function getSideChannelMap() {
                var t, n = {
                    assert: function(t) {
                        if (!n.has(t)) throw new l("Side channel does not contain " + c(t));
                    },
                    delete: function(n) {
                        if (t) {
                            var i = S(t, n);
                            return 0 === O(t) && (t = void 0), i;
                        }
                        return !1;
                    },
                    get: function(n) {
                        if (t) return f(t, n);
                    },
                    has: function(n) {
                        return !!t && _(t, n);
                    },
                    set: function(n, i) {
                        t || (t = new h), p(t, n, i);
                    }
                };
                return n;
            };
        },
        92608: (t, n, i)=>{
            "use strict";
            var s = i(42649);
            function assertPath(t) {
                if ("string" != typeof t) throw new TypeError("Path must be a string. Received " + JSON.stringify(t));
            }
            function normalizeStringPosix(t, n) {
                for(var i, s = "", o = 0, c = -1, l = 0, h = 0; h <= t.length; ++h){
                    if (h < t.length) i = t.charCodeAt(h);
                    else {
                        if (47 === i) break;
                        i = 47;
                    }
                    if (47 === i) {
                        if (c === h - 1 || 1 === l) ;
                        else if (c !== h - 1 && 2 === l) {
                            if (s.length < 2 || 2 !== o || 46 !== s.charCodeAt(s.length - 1) || 46 !== s.charCodeAt(s.length - 2)) {
                                if (s.length > 2) {
                                    var f = s.lastIndexOf("/");
                                    if (f !== s.length - 1) {
                                        -1 === f ? (s = "", o = 0) : o = (s = s.slice(0, f)).length - 1 - s.lastIndexOf("/"), c = h, l = 0;
                                        continue;
                                    }
                                } else if (2 === s.length || 1 === s.length) {
                                    s = "", o = 0, c = h, l = 0;
                                    continue;
                                }
                            }
                            n && (s.length > 0 ? s += "/.." : s = "..", o = 2);
                        } else s.length > 0 ? s += "/" + t.slice(c + 1, h) : s = t.slice(c + 1, h), o = h - c - 1;
                        c = h, l = 0;
                    } else 46 === i && -1 !== l ? ++l : l = -1;
                }
                return s;
            }
            var o = {
                resolve: function resolve() {
                    for(var t, n = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--){
                        var c;
                        o >= 0 ? c = arguments[o] : (void 0 === t && (t = s.cwd()), c = t), assertPath(c), 0 !== c.length && (n = c + "/" + n, i = 47 === c.charCodeAt(0));
                    }
                    return n = normalizeStringPosix(n, !i), i ? n.length > 0 ? "/" + n : "/" : n.length > 0 ? n : ".";
                },
                normalize: function normalize(t) {
                    if (assertPath(t), 0 === t.length) return ".";
                    var n = 47 === t.charCodeAt(0), i = 47 === t.charCodeAt(t.length - 1);
                    return 0 !== (t = normalizeStringPosix(t, !n)).length || n || (t = "."), t.length > 0 && i && (t += "/"), n ? "/" + t : t;
                },
                isAbsolute: function isAbsolute(t) {
                    return assertPath(t), t.length > 0 && 47 === t.charCodeAt(0);
                },
                join: function join() {
                    if (0 === arguments.length) return ".";
                    for(var t, n = 0; n < arguments.length; ++n){
                        var i = arguments[n];
                        assertPath(i), i.length > 0 && (void 0 === t ? t = i : t += "/" + i);
                    }
                    return void 0 === t ? "." : o.normalize(t);
                },
                relative: function relative(t, n) {
                    if (assertPath(t), assertPath(n), t === n) return "";
                    if ((t = o.resolve(t)) === (n = o.resolve(n))) return "";
                    for(var i = 1; i < t.length && 47 === t.charCodeAt(i); ++i);
                    for(var s = t.length, c = s - i, l = 1; l < n.length && 47 === n.charCodeAt(l); ++l);
                    for(var h = n.length - l, f = c < h ? c : h, p = -1, _ = 0; _ <= f; ++_){
                        if (_ === f) {
                            if (h > f) {
                                if (47 === n.charCodeAt(l + _)) return n.slice(l + _ + 1);
                                if (0 === _) return n.slice(l + _);
                            } else c > f && (47 === t.charCodeAt(i + _) ? p = _ : 0 === _ && (p = 0));
                            break;
                        }
                        var S = t.charCodeAt(i + _);
                        if (S !== n.charCodeAt(l + _)) break;
                        47 === S && (p = _);
                    }
                    var O = "";
                    for(_ = i + p + 1; _ <= s; ++_)_ !== s && 47 !== t.charCodeAt(_) || (0 === O.length ? O += ".." : O += "/..");
                    return O.length > 0 ? O + n.slice(l + p) : (l += p, 47 === n.charCodeAt(l) && ++l, n.slice(l));
                },
                _makeLong: function _makeLong(t) {
                    return t;
                },
                dirname: function dirname(t) {
                    if (assertPath(t), 0 === t.length) return ".";
                    for(var n = t.charCodeAt(0), i = 47 === n, s = -1, o = !0, c = t.length - 1; c >= 1; --c)if (47 === (n = t.charCodeAt(c))) {
                        if (!o) {
                            s = c;
                            break;
                        }
                    } else o = !1;
                    return -1 === s ? i ? "/" : "." : i && 1 === s ? "//" : t.slice(0, s);
                },
                basename: function basename(t, n) {
                    if (void 0 !== n && "string" != typeof n) throw new TypeError('"ext" argument must be a string');
                    assertPath(t);
                    var i, s = 0, o = -1, c = !0;
                    if (void 0 !== n && n.length > 0 && n.length <= t.length) {
                        if (n.length === t.length && n === t) return "";
                        var l = n.length - 1, h = -1;
                        for(i = t.length - 1; i >= 0; --i){
                            var f = t.charCodeAt(i);
                            if (47 === f) {
                                if (!c) {
                                    s = i + 1;
                                    break;
                                }
                            } else -1 === h && (c = !1, h = i + 1), l >= 0 && (f === n.charCodeAt(l) ? -1 == --l && (o = i) : (l = -1, o = h));
                        }
                        return s === o ? o = h : -1 === o && (o = t.length), t.slice(s, o);
                    }
                    for(i = t.length - 1; i >= 0; --i)if (47 === t.charCodeAt(i)) {
                        if (!c) {
                            s = i + 1;
                            break;
                        }
                    } else -1 === o && (c = !1, o = i + 1);
                    return -1 === o ? "" : t.slice(s, o);
                },
                extname: function extname(t) {
                    assertPath(t);
                    for(var n = -1, i = 0, s = -1, o = !0, c = 0, l = t.length - 1; l >= 0; --l){
                        var h = t.charCodeAt(l);
                        if (47 !== h) -1 === s && (o = !1, s = l + 1), 46 === h ? -1 === n ? n = l : 1 !== c && (c = 1) : -1 !== n && (c = -1);
                        else if (!o) {
                            i = l + 1;
                            break;
                        }
                    }
                    return -1 === n || -1 === s || 0 === c || 1 === c && n === s - 1 && n === i + 1 ? "" : t.slice(n, s);
                },
                format: function format(t) {
                    if (null === t || "object" != typeof t) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof t);
                    return function _format(t, n) {
                        var i = n.dir || n.root, s = n.base || (n.name || "") + (n.ext || "");
                        return i ? i === n.root ? i + s : i + t + s : s;
                    }("/", t);
                },
                parse: function parse(t) {
                    assertPath(t);
                    var n = {
                        root: "",
                        dir: "",
                        base: "",
                        ext: "",
                        name: ""
                    };
                    if (0 === t.length) return n;
                    var i, s = t.charCodeAt(0), o = 47 === s;
                    o ? (n.root = "/", i = 1) : i = 0;
                    for(var c = -1, l = 0, h = -1, f = !0, p = t.length - 1, _ = 0; p >= i; --p)if (47 !== (s = t.charCodeAt(p))) -1 === h && (f = !1, h = p + 1), 46 === s ? -1 === c ? c = p : 1 !== _ && (_ = 1) : -1 !== c && (_ = -1);
                    else if (!f) {
                        l = p + 1;
                        break;
                    }
                    return -1 === c || -1 === h || 0 === _ || 1 === _ && c === h - 1 && c === l + 1 ? -1 !== h && (n.base = n.name = 0 === l && o ? t.slice(1, h) : t.slice(l, h)) : (0 === l && o ? (n.name = t.slice(1, c), n.base = t.slice(1, h)) : (n.name = t.slice(l, c), n.base = t.slice(l, h)), n.ext = t.slice(c, h)), l > 0 ? n.dir = t.slice(0, l - 1) : o && (n.dir = "/"), n;
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null
            };
            o.posix = o, t.exports = o;
        },
        96442: (t, n, i)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.FSWatcher = n.StatWatcher = n.Volume = void 0, n.filenameToSteps = filenameToSteps, n.pathToSteps = function pathToSteps(t) {
                return filenameToSteps((0, P.pathToFilename)(t));
            }, n.dataToStr = function dataToStr(t, n = T.ENCODING_UTF8) {
                return h.Buffer.isBuffer(t) ? t.toString(n) : t instanceof Uint8Array ? (0, h.bufferFrom)(t).toString(n) : String(t);
            }, n.toUnixTimestamp = toUnixTimestamp;
            const s = i(92608), o = i(42436), c = i(67973), l = i(83608), h = i(52058), f = i(82892), p = i(88771), _ = i(36315), S = i(18561), O = i(70111), R = i(3640), T = i(35953), F = i(98143), A = i(79154), N = i(4794), I = i(65370), k = i(17886), C = i(97961), P = i(75043), D = i(83233), L = s.resolve, { O_RDONLY: x, O_WRONLY: B, O_RDWR: j, O_CREAT: U, O_EXCL: M, O_TRUNC: W, O_APPEND: $, O_DIRECTORY: G, O_SYMLINK: V, F_OK: K, COPYFILE_EXCL: H, COPYFILE_FICLONE_FORCE: q } = O.constants, { sep: Y, relative: z, join: J, dirname: X } = s.posix ? s.posix : s, Q = "ENOENT", Z = "EBADF", ee = "EEXIST", te = "ENOTDIR", re = "EACCES", ne = "EISDIR";
            let resolve = (t, n = p.default.cwd())=>L(n, t);
            if (P.isWin) {
                const t = resolve;
                resolve = (n, i)=>(0, P.unixify)(t(n, i));
            }
            function filenameToSteps(t, n) {
                const i = resolve(t, n).substring(1);
                return i ? i.split(Y) : [];
            }
            function toUnixTimestamp(t) {
                if ("string" == typeof t && +t == t) return +t;
                if (t instanceof Date) return t.getTime() / 1e3;
                if (isFinite(t)) return t < 0 ? Date.now() / 1e3 : t;
                throw new Error("Cannot parse time: " + t);
            }
            function validateUid(t) {
                if ("number" != typeof t) throw TypeError(k.ERRSTR.UID);
            }
            function validateGid(t) {
                if ("number" != typeof t) throw TypeError(k.ERRSTR.GID);
            }
            const notImplemented = ()=>{
                throw new Error("Not implemented");
            };
            let Volume = class Volume {
                static fromJSON(t, n) {
                    const i = new Volume;
                    return i.fromJSON(t, n), i;
                }
                static fromNestedJSON(t, n) {
                    const i = new Volume;
                    return i.fromNestedJSON(t, n), i;
                }
                get promises() {
                    if (null === this.promisesApi) throw new Error("Promise is not supported in this environment.");
                    return this.promisesApi;
                }
                createLink(t, n, i = !1, s) {
                    if (!t) return new this.props.Link(this, null, "");
                    if (!n) throw new Error("createLink: name cannot be empty");
                    const o = null != s ? s : i ? 511 : 438, c = s && s & O.constants.S_IFMT ? s & O.constants.S_IFMT : i ? O.constants.S_IFDIR : O.constants.S_IFREG, l = o & ~O.constants.S_IFMT | c;
                    return t.createChild(n, this.createNode(l));
                }
                deleteLink(t) {
                    const n = t.parent;
                    return !!n && (n.deleteChild(t), !0);
                }
                newInoNumber() {
                    const t = this.releasedInos.pop();
                    return t || (this.ino = (this.ino + 1) % 4294967295, this.ino);
                }
                newFdNumber() {
                    const t = this.releasedFds.pop();
                    return "number" == typeof t ? t : Volume.fd--;
                }
                createNode(t) {
                    const n = new this.props.Node(this.newInoNumber(), t);
                    return this.inodes[n.ino] = n, n;
                }
                deleteNode(t) {
                    t.del(), delete this.inodes[t.ino], this.releasedInos.push(t.ino);
                }
                walk(t, n = !1, i = !1, c = !1, l) {
                    var h;
                    let f, p;
                    t instanceof o.Link ? (f = t.steps, p = Y + f.join(Y)) : "string" == typeof t ? (f = filenameToSteps(t), p = t) : (f = t, p = Y + f.join(Y));
                    let _ = this.root, S = 0;
                    for(; S < f.length;){
                        let t = _.getNode();
                        if (t.isDirectory()) {
                            if (c && !t.canExecute()) throw (0, P.createError)(re, l, p);
                        } else if (S < f.length - 1) throw (0, P.createError)(te, l, p);
                        if (_ = null !== (h = _.getChild(f[S])) && void 0 !== h ? h : null, !_) {
                            if (i) throw (0, P.createError)(Q, l, p);
                            return null;
                        }
                        if (t = null == _ ? void 0 : _.getNode(), n && t.isSymlink()) {
                            f = filenameToSteps(s.isAbsolute(t.symlink) ? t.symlink : J(s.dirname(_.getPath()), t.symlink)).concat(f.slice(S + 1)), _ = this.root, S = 0;
                        } else S++;
                    }
                    return _;
                }
                getLink(t) {
                    return this.walk(t, !1, !1, !1);
                }
                getLinkOrThrow(t, n) {
                    return this.walk(t, !1, !0, !0, n);
                }
                getResolvedLink(t) {
                    return this.walk(t, !0, !1, !1);
                }
                getResolvedLinkOrThrow(t, n) {
                    return this.walk(t, !0, !0, !0, n);
                }
                resolveSymlinks(t) {
                    return this.getResolvedLink(t.steps.slice(1));
                }
                getLinkAsDirOrThrow(t, n) {
                    const i = this.getLinkOrThrow(t, n);
                    if (!i.getNode().isDirectory()) throw (0, P.createError)(te, n, t);
                    return i;
                }
                getLinkParent(t) {
                    return this.getLink(t.slice(0, -1));
                }
                getLinkParentAsDirOrThrow(t, n) {
                    const i = (t instanceof Array ? t : filenameToSteps(t)).slice(0, -1), s = Y + i.join(Y), o = this.getLinkOrThrow(s, n);
                    if (!o.getNode().isDirectory()) throw (0, P.createError)(te, n, s);
                    return o;
                }
                getFileByFd(t) {
                    return this.fds[String(t)];
                }
                getFileByFdOrThrow(t, n) {
                    if (!(0, P.isFd)(t)) throw TypeError(k.ERRSTR.FD);
                    const i = this.getFileByFd(t);
                    if (!i) throw (0, P.createError)(Z, n);
                    return i;
                }
                wrapAsync(t, n, i) {
                    (0, P.validateCallback)(i), Promise.resolve().then(()=>{
                        let s;
                        try {
                            s = t.apply(this, n);
                        } catch (t) {
                            return void i(t);
                        }
                        i(null, s);
                    });
                }
                _toJSON(t = this.root, n = {}, i, s) {
                    let o = !0, c = t.children;
                    t.getNode().isFile() && (c = new Map([
                        [
                            t.getName(),
                            t.parent.getChild(t.getName())
                        ]
                    ]), t = t.parent);
                    for (const l of c.keys()){
                        if ("." === l || ".." === l) continue;
                        o = !1;
                        const c = t.getChild(l);
                        if (!c) throw new Error("_toJSON: unexpected undefined");
                        const h = c.getNode();
                        if (h.isFile()) {
                            let t = c.getPath();
                            i && (t = z(i, t)), n[t] = s ? h.getBuffer() : h.getString();
                        } else h.isDirectory() && this._toJSON(c, n, i, s);
                    }
                    let l = t.getPath();
                    return i && (l = z(i, l)), l && o && (n[l] = null), n;
                }
                toJSON(t, n = {}, i = !1, s = !1) {
                    const o = [];
                    if (t) {
                        Array.isArray(t) || (t = [
                            t
                        ]);
                        for (const n of t){
                            const t = (0, P.pathToFilename)(n), i = this.getResolvedLink(t);
                            i && o.push(i);
                        }
                    } else o.push(this.root);
                    if (!o.length) return n;
                    for (const t of o)this._toJSON(t, n, i ? t.getPath() : "", s);
                    return n;
                }
                fromJSON(t, n = p.default.cwd()) {
                    for(let i in t){
                        const s = t[i];
                        if (i = resolve(i, n), "string" == typeof s || s instanceof h.Buffer) {
                            const t = X(i);
                            this.mkdirpBase(t, 511), this.writeFileSync(i, s);
                        } else this.mkdirpBase(i, 511);
                    }
                }
                fromNestedJSON(t, n) {
                    this.fromJSON(function flattenJSON(t) {
                        const n = {};
                        return function flatten(t, i) {
                            for(const s in i){
                                const o = i[s], c = J(t, s);
                                "string" == typeof o || o instanceof h.Buffer ? n[c] = o : "object" == typeof o && null !== o && Object.keys(o).length > 0 ? flatten(c, o) : n[c] = null;
                            }
                        }("", t), n;
                    }(t), n);
                }
                toTree(t = {
                    separator: Y
                }) {
                    return (0, I.toTreeSync)(this, t);
                }
                reset() {
                    this.ino = 0, this.inodes = {}, this.releasedInos = [], this.fds = {}, this.releasedFds = [], this.openFiles = 0, this.root = this.createLink(), this.root.setNode(this.createNode(511 | O.constants.S_IFDIR));
                }
                mountSync(t, n) {
                    this.fromJSON(n, t);
                }
                openLink(t, n, i = !0) {
                    if (this.openFiles >= this.maxFiles) throw (0, P.createError)("EMFILE", "open", t.getPath());
                    let s = t;
                    i && (s = this.getResolvedLinkOrThrow(t.getPath(), "open"));
                    const o = s.getNode();
                    if (o.isDirectory()) {
                        if ((n & (x | j | B)) !== x) throw (0, P.createError)(ne, "open", t.getPath());
                    } else if (n & G) throw (0, P.createError)(te, "open", t.getPath());
                    if (!(n & B || o.canRead())) throw (0, P.createError)(re, "open", t.getPath());
                    if (!(n & x || o.canWrite())) throw (0, P.createError)(re, "open", t.getPath());
                    const c = new this.props.File(t, o, n, this.newFdNumber());
                    return this.fds[c.fd] = c, this.openFiles++, n & W && c.truncate(), c;
                }
                openFile(t, n, i, o = !0) {
                    const c = filenameToSteps(t);
                    let l;
                    try {
                        if (l = o ? this.getResolvedLinkOrThrow(t, "open") : this.getLinkOrThrow(t, "open"), l && n & U && n & M) throw (0, P.createError)(ee, "open", t);
                    } catch (o) {
                        if (!(o.code === Q && n & U)) throw o;
                        {
                            const n = s.dirname(t), o = this.getResolvedLinkOrThrow(n), h = o.getNode();
                            if (!h.isDirectory()) throw (0, P.createError)(te, "open", t);
                            if (!h.canExecute() || !h.canWrite()) throw (0, P.createError)(re, "open", t);
                            null != i || (i = 438), l = this.createLink(o, c[c.length - 1], !1, i);
                        }
                    }
                    if (l) return this.openLink(l, n, o);
                    throw (0, P.createError)(Q, "open", t);
                }
                openBase(t, n, i, s = !0) {
                    const o = this.openFile(t, n, i, s);
                    if (!o) throw (0, P.createError)(Q, "open", t);
                    return o.fd;
                }
                openSync(t, n, i = 438) {
                    const s = (0, P.modeToNumber)(i), o = (0, P.pathToFilename)(t), c = (0, P.flagsToNumber)(n);
                    return this.openBase(o, c, s, !(c & V));
                }
                open(t, n, i, s) {
                    let o = i, c = s;
                    "function" == typeof i && (o = 438, c = i), o = o || 438;
                    const l = (0, P.modeToNumber)(o), h = (0, P.pathToFilename)(t), f = (0, P.flagsToNumber)(n);
                    this.wrapAsync(this.openBase, [
                        h,
                        f,
                        l,
                        !(f & V)
                    ], c);
                }
                closeFile(t) {
                    this.fds[t.fd] && (this.openFiles--, delete this.fds[t.fd], this.releasedFds.push(t.fd));
                }
                closeSync(t) {
                    (0, P.validateFd)(t);
                    const n = this.getFileByFdOrThrow(t, "close");
                    this.closeFile(n);
                }
                close(t, n) {
                    (0, P.validateFd)(t);
                    const i = this.getFileByFdOrThrow(t, "close");
                    this.wrapAsync(this.closeFile, [
                        i
                    ], n);
                }
                openFileOrGetById(t, n, i) {
                    if ("number" == typeof t) {
                        const n = this.fds[t];
                        if (!n) throw (0, P.createError)(Q);
                        return n;
                    }
                    return this.openFile((0, P.pathToFilename)(t), n, i);
                }
                readBase(t, n, i, s, o) {
                    if (n.byteLength < s) throw (0, P.createError)("ERR_OUT_OF_RANGE", "read", void 0, void 0, RangeError);
                    const c = this.getFileByFdOrThrow(t);
                    if (c.node.isSymlink()) throw (0, P.createError)("EPERM", "read", c.link.getPath());
                    return c.read(n, Number(i), Number(s), -1 === o || "number" != typeof o ? void 0 : o);
                }
                readSync(t, n, i, s, o) {
                    return (0, P.validateFd)(t), this.readBase(t, n, i, s, o);
                }
                read(t, n, i, s, o, c) {
                    if ((0, P.validateCallback)(c), 0 === s) return (0, f.default)(()=>{
                        c && c(null, 0, n);
                    });
                    Promise.resolve().then(()=>{
                        try {
                            const l = this.readBase(t, n, i, s, o);
                            c(null, l, n);
                        } catch (t) {
                            c(t);
                        }
                    });
                }
                readvBase(t, n, i) {
                    const s = this.getFileByFdOrThrow(t);
                    let o = null != i ? i : void 0;
                    -1 === o && (o = void 0);
                    let c = 0;
                    for (const t of n){
                        const n = s.read(t, 0, t.byteLength, o);
                        if (o = void 0, c += n, n < t.byteLength) break;
                    }
                    return c;
                }
                readv(t, n, i, s) {
                    let o = i, c = s;
                    "function" == typeof i && (o = null, c = i), (0, P.validateCallback)(c), Promise.resolve().then(()=>{
                        try {
                            const i = this.readvBase(t, n, o);
                            c(null, i, n);
                        } catch (t) {
                            c(t);
                        }
                    });
                }
                readvSync(t, n, i) {
                    return (0, P.validateFd)(t), this.readvBase(t, n, i);
                }
                readFileBase(t, n, i) {
                    let s;
                    const o = "number" == typeof t && (0, P.isFd)(t);
                    let c;
                    if (o) c = t;
                    else {
                        const i = (0, P.pathToFilename)(t), s = this.getResolvedLinkOrThrow(i, "open");
                        if (s.getNode().isDirectory()) throw (0, P.createError)(ne, "open", s.getPath());
                        c = this.openSync(t, n);
                    }
                    try {
                        s = (0, P.bufferToEncoding)(this.getFileByFdOrThrow(c).getBuffer(), i);
                    } finally{
                        o || this.closeSync(c);
                    }
                    return s;
                }
                readFileSync(t, n) {
                    const i = (0, C.getReadFileOptions)(n), s = (0, P.flagsToNumber)(i.flag);
                    return this.readFileBase(t, s, i.encoding);
                }
                readFile(t, n, i) {
                    const [s, o] = (0, C.optsAndCbGenerator)(C.getReadFileOptions)(n, i), c = (0, P.flagsToNumber)(s.flag);
                    this.wrapAsync(this.readFileBase, [
                        t,
                        c,
                        s.encoding
                    ], o);
                }
                writeBase(t, n, i, s, o) {
                    const c = this.getFileByFdOrThrow(t, "write");
                    if (c.node.isSymlink()) throw (0, P.createError)(Z, "write", c.link.getPath());
                    return c.write(n, i, s, -1 === o || "number" != typeof o ? void 0 : o);
                }
                writeSync(t, n, i, s, o) {
                    const [, c, l, h, f] = (0, P.getWriteSyncArgs)(t, n, i, s, o);
                    return this.writeBase(t, c, l, h, f);
                }
                write(t, n, i, s, o, c) {
                    const [, l, h, f, p, _, S] = (0, P.getWriteArgs)(t, n, i, s, o, c);
                    Promise.resolve().then(()=>{
                        try {
                            const i = this.writeBase(t, h, f, p, _);
                            S(null, i, l ? n : h);
                        } catch (t) {
                            S(t);
                        }
                    });
                }
                writevBase(t, n, i) {
                    const s = this.getFileByFdOrThrow(t);
                    let o = null != i ? i : void 0;
                    -1 === o && (o = void 0);
                    let c = 0;
                    for (const t of n){
                        const n = h.Buffer.from(t.buffer, t.byteOffset, t.byteLength), i = s.write(n, 0, n.byteLength, o);
                        if (o = void 0, c += i, i < n.byteLength) break;
                    }
                    return c;
                }
                writev(t, n, i, s) {
                    let o = i, c = s;
                    "function" == typeof i && (o = null, c = i), (0, P.validateCallback)(c), Promise.resolve().then(()=>{
                        try {
                            const i = this.writevBase(t, n, o);
                            c(null, i, n);
                        } catch (t) {
                            c(t);
                        }
                    });
                }
                writevSync(t, n, i) {
                    return (0, P.validateFd)(t), this.writevBase(t, n, i);
                }
                writeFileBase(t, n, i, s) {
                    const o = "number" == typeof t;
                    let c;
                    c = o ? t : this.openBase((0, P.pathToFilename)(t), i, s);
                    let l = 0, h = n.length, f = i & $ ? void 0 : 0;
                    try {
                        for(; h > 0;){
                            const t = this.writeSync(c, n, l, h, f);
                            l += t, h -= t, void 0 !== f && (f += t);
                        }
                    } finally{
                        o || this.closeSync(c);
                    }
                }
                writeFileSync(t, n, i) {
                    const s = (0, C.getWriteFileOptions)(i), o = (0, P.flagsToNumber)(s.flag), c = (0, P.modeToNumber)(s.mode), l = (0, P.dataToBuffer)(n, s.encoding);
                    this.writeFileBase(t, l, o, c);
                }
                writeFile(t, n, i, s) {
                    let o = i, c = s;
                    "function" == typeof i && (o = C.writeFileDefaults, c = i);
                    const l = (0, P.validateCallback)(c), h = (0, C.getWriteFileOptions)(o), f = (0, P.flagsToNumber)(h.flag), p = (0, P.modeToNumber)(h.mode), _ = (0, P.dataToBuffer)(n, h.encoding);
                    this.wrapAsync(this.writeFileBase, [
                        t,
                        _,
                        f,
                        p
                    ], l);
                }
                linkBase(t, n) {
                    let i;
                    try {
                        i = this.getLinkOrThrow(t, "link");
                    } catch (i) {
                        throw i.code && (i = (0, P.createError)(i.code, "link", t, n)), i;
                    }
                    const o = s.dirname(n);
                    let c;
                    try {
                        c = this.getLinkOrThrow(o, "link");
                    } catch (i) {
                        throw i.code && (i = (0, P.createError)(i.code, "link", t, n)), i;
                    }
                    const l = s.basename(n);
                    if (c.getChild(l)) throw (0, P.createError)(ee, "link", t, n);
                    const h = i.getNode();
                    h.nlink++, c.createChild(l, h);
                }
                copyFileBase(t, n, i) {
                    const s = this.readFileSync(t);
                    if (i & H && this.existsSync(n)) throw (0, P.createError)(ee, "copyFile", t, n);
                    if (i & q) throw (0, P.createError)("ENOSYS", "copyFile", t, n);
                    this.writeFileBase(n, s, k.FLAGS.w, 438);
                }
                copyFileSync(t, n, i) {
                    const s = (0, P.pathToFilename)(t), o = (0, P.pathToFilename)(n);
                    return this.copyFileBase(s, o, 0 | (i || 0));
                }
                copyFile(t, n, i, s) {
                    const o = (0, P.pathToFilename)(t), c = (0, P.pathToFilename)(n);
                    let l, h;
                    "function" == typeof i ? (l = 0, h = i) : (l = i, h = s), (0, P.validateCallback)(h), this.wrapAsync(this.copyFileBase, [
                        o,
                        c,
                        l
                    ], h);
                }
                linkSync(t, n) {
                    const i = (0, P.pathToFilename)(t), s = (0, P.pathToFilename)(n);
                    this.linkBase(i, s);
                }
                link(t, n, i) {
                    const s = (0, P.pathToFilename)(t), o = (0, P.pathToFilename)(n);
                    this.wrapAsync(this.linkBase, [
                        s,
                        o
                    ], i);
                }
                unlinkBase(t) {
                    const n = this.getLinkOrThrow(t, "unlink");
                    if (n.length) throw Error("Dir not empty...");
                    this.deleteLink(n);
                    const i = n.getNode();
                    i.nlink--, i.nlink <= 0 && this.deleteNode(i);
                }
                unlinkSync(t) {
                    const n = (0, P.pathToFilename)(t);
                    this.unlinkBase(n);
                }
                unlink(t, n) {
                    const i = (0, P.pathToFilename)(t);
                    this.wrapAsync(this.unlinkBase, [
                        i
                    ], n);
                }
                symlinkBase(t, n) {
                    const i = filenameToSteps(n);
                    let s;
                    try {
                        s = this.getLinkParentAsDirOrThrow(i);
                    } catch (i) {
                        throw i.code && (i = (0, P.createError)(i.code, "symlink", t, n)), i;
                    }
                    const o = i[i.length - 1];
                    if (s.getChild(o)) throw (0, P.createError)(ee, "symlink", t, n);
                    const c = s.getNode();
                    if (!c.canExecute() || !c.canWrite()) throw (0, P.createError)(re, "symlink", t, n);
                    const l = s.createChild(o);
                    return l.getNode().makeSymlink(t), l;
                }
                symlinkSync(t, n, i) {
                    const s = (0, P.pathToFilename)(t), o = (0, P.pathToFilename)(n);
                    this.symlinkBase(s, o);
                }
                symlink(t, n, i, s) {
                    const o = (0, P.validateCallback)("function" == typeof i ? i : s), c = (0, P.pathToFilename)(t), l = (0, P.pathToFilename)(n);
                    this.wrapAsync(this.symlinkBase, [
                        c,
                        l
                    ], o);
                }
                realpathBase(t, n) {
                    const i = this.getResolvedLinkOrThrow(t, "realpath");
                    return (0, T.strToEncoding)(i.getPath() || "/", n);
                }
                realpathSync(t, n) {
                    return this.realpathBase((0, P.pathToFilename)(t), (0, C.getRealpathOptions)(n).encoding);
                }
                realpath(t, n, i) {
                    const [s, o] = (0, C.getRealpathOptsAndCb)(n, i), c = (0, P.pathToFilename)(t);
                    this.wrapAsync(this.realpathBase, [
                        c,
                        s.encoding
                    ], o);
                }
                lstatBase(t, n = !1, i = !1) {
                    let s;
                    try {
                        s = this.getLinkOrThrow(t, "lstat");
                    } catch (t) {
                        if (t.code !== Q || i) throw t;
                        return;
                    }
                    return c.default.build(s.getNode(), n);
                }
                lstatSync(t, n) {
                    const { throwIfNoEntry: i = !0, bigint: s = !1 } = (0, C.getStatOptions)(n);
                    return this.lstatBase((0, P.pathToFilename)(t), s, i);
                }
                lstat(t, n, i) {
                    const [{ throwIfNoEntry: s = !0, bigint: o = !1 }, c] = (0, C.getStatOptsAndCb)(n, i);
                    this.wrapAsync(this.lstatBase, [
                        (0, P.pathToFilename)(t),
                        o,
                        s
                    ], c);
                }
                statBase(t, n = !1, i = !0) {
                    let s;
                    try {
                        s = this.getResolvedLinkOrThrow(t, "stat");
                    } catch (t) {
                        if (t.code !== Q || i) throw t;
                        return;
                    }
                    return c.default.build(s.getNode(), n);
                }
                statSync(t, n) {
                    const { bigint: i = !0, throwIfNoEntry: s = !0 } = (0, C.getStatOptions)(n);
                    return this.statBase((0, P.pathToFilename)(t), i, s);
                }
                stat(t, n, i) {
                    const [{ bigint: s = !1, throwIfNoEntry: o = !0 }, c] = (0, C.getStatOptsAndCb)(n, i);
                    this.wrapAsync(this.statBase, [
                        (0, P.pathToFilename)(t),
                        s,
                        o
                    ], c);
                }
                fstatBase(t, n = !1) {
                    const i = this.getFileByFd(t);
                    if (!i) throw (0, P.createError)(Z, "fstat");
                    return c.default.build(i.node, n);
                }
                fstatSync(t, n) {
                    return this.fstatBase(t, (0, C.getStatOptions)(n).bigint);
                }
                fstat(t, n, i) {
                    const [s, o] = (0, C.getStatOptsAndCb)(n, i);
                    this.wrapAsync(this.fstatBase, [
                        t,
                        s.bigint
                    ], o);
                }
                renameBase(t, n) {
                    let i, o;
                    try {
                        i = this.getResolvedLinkOrThrow(t);
                    } catch (i) {
                        throw i.code && (i = (0, P.createError)(i.code, "rename", t, n)), i;
                    }
                    try {
                        o = this.getLinkParentAsDirOrThrow(n);
                    } catch (i) {
                        throw i.code && (i = (0, P.createError)(i.code, "rename", t, n)), i;
                    }
                    const c = i.parent, l = c.getNode(), h = o.getNode();
                    if (!(l.canExecute() && l.canWrite() && h.canExecute() && h.canWrite())) throw (0, P.createError)(re, "rename", t, n);
                    c.deleteChild(i);
                    const f = s.basename(n);
                    i.name = f, i.steps = [
                        ...o.steps,
                        f
                    ], o.setChild(i.getName(), i);
                }
                renameSync(t, n) {
                    const i = (0, P.pathToFilename)(t), s = (0, P.pathToFilename)(n);
                    this.renameBase(i, s);
                }
                rename(t, n, i) {
                    const s = (0, P.pathToFilename)(t), o = (0, P.pathToFilename)(n);
                    this.wrapAsync(this.renameBase, [
                        s,
                        o
                    ], i);
                }
                existsBase(t) {
                    return !!this.statBase(t);
                }
                existsSync(t) {
                    try {
                        return this.existsBase((0, P.pathToFilename)(t));
                    } catch (t) {
                        return !1;
                    }
                }
                exists(t, n) {
                    const i = (0, P.pathToFilename)(t);
                    if ("function" != typeof n) throw Error(k.ERRSTR.CB);
                    Promise.resolve().then(()=>{
                        try {
                            n(this.existsBase(i));
                        } catch (t) {
                            n(!1);
                        }
                    });
                }
                accessBase(t, n) {
                    this.getLinkOrThrow(t, "access");
                }
                accessSync(t, n = K) {
                    const i = (0, P.pathToFilename)(t);
                    n |= 0, this.accessBase(i, n);
                }
                access(t, n, i) {
                    let s, o = K;
                    "function" != typeof n ? (o = 0 | n, s = (0, P.validateCallback)(i)) : s = n;
                    const c = (0, P.pathToFilename)(t);
                    this.wrapAsync(this.accessBase, [
                        c,
                        o
                    ], s);
                }
                appendFileSync(t, n, i) {
                    const s = (0, C.getAppendFileOpts)(i);
                    s.flag && !(0, P.isFd)(t) || (s.flag = "a"), this.writeFileSync(t, n, s);
                }
                appendFile(t, n, i, s) {
                    const [o, c] = (0, C.getAppendFileOptsAndCb)(i, s);
                    o.flag && !(0, P.isFd)(t) || (o.flag = "a"), this.writeFile(t, n, o, c);
                }
                readdirBase(t, n) {
                    filenameToSteps(t);
                    const i = this.getResolvedLinkOrThrow(t, "scandir"), o = i.getNode();
                    if (!o.isDirectory()) throw (0, P.createError)(te, "scandir", t);
                    if (!o.canRead()) throw (0, P.createError)(re, "scandir", t);
                    const c = [];
                    for (const t of i.children.keys()){
                        const s = i.getChild(t);
                        if (s && "." !== t && ".." !== t && (c.push(l.default.build(s, n.encoding)), n.recursive && s.children.size)) {
                            const t = Object.assign(Object.assign({}, n), {
                                recursive: !0,
                                withFileTypes: !0
                            }), i = this.readdirBase(s.getPath(), t);
                            c.push(...i);
                        }
                    }
                    if (P.isWin || "buffer" === n.encoding || c.sort((t, n)=>t.name < n.name ? -1 : t.name > n.name ? 1 : 0), n.withFileTypes) return c;
                    let h = t;
                    return P.isWin && (h = h.replace(/\\/g, "/")), c.map((t)=>{
                        if (n.recursive) {
                            let n = s.join(t.parentPath, t.name.toString());
                            return P.isWin && (n = n.replace(/\\/g, "/")), n.replace(h + s.posix.sep, "");
                        }
                        return t.name;
                    });
                }
                readdirSync(t, n) {
                    const i = (0, C.getReaddirOptions)(n), s = (0, P.pathToFilename)(t);
                    return this.readdirBase(s, i);
                }
                readdir(t, n, i) {
                    const [s, o] = (0, C.getReaddirOptsAndCb)(n, i), c = (0, P.pathToFilename)(t);
                    this.wrapAsync(this.readdirBase, [
                        c,
                        s
                    ], o);
                }
                readlinkBase(t, n) {
                    const i = this.getLinkOrThrow(t, "readlink").getNode();
                    if (!i.isSymlink()) throw (0, P.createError)("EINVAL", "readlink", t);
                    return (0, T.strToEncoding)(i.symlink, n);
                }
                readlinkSync(t, n) {
                    const i = (0, C.getDefaultOpts)(n), s = (0, P.pathToFilename)(t);
                    return this.readlinkBase(s, i.encoding);
                }
                readlink(t, n, i) {
                    const [s, o] = (0, C.getDefaultOptsAndCb)(n, i), c = (0, P.pathToFilename)(t);
                    this.wrapAsync(this.readlinkBase, [
                        c,
                        s.encoding
                    ], o);
                }
                fsyncBase(t) {
                    this.getFileByFdOrThrow(t, "fsync");
                }
                fsyncSync(t) {
                    this.fsyncBase(t);
                }
                fsync(t, n) {
                    this.wrapAsync(this.fsyncBase, [
                        t
                    ], n);
                }
                fdatasyncBase(t) {
                    this.getFileByFdOrThrow(t, "fdatasync");
                }
                fdatasyncSync(t) {
                    this.fdatasyncBase(t);
                }
                fdatasync(t, n) {
                    this.wrapAsync(this.fdatasyncBase, [
                        t
                    ], n);
                }
                ftruncateBase(t, n) {
                    this.getFileByFdOrThrow(t, "ftruncate").truncate(n);
                }
                ftruncateSync(t, n) {
                    this.ftruncateBase(t, n);
                }
                ftruncate(t, n, i) {
                    const s = "number" == typeof n ? n : 0, o = (0, P.validateCallback)("number" == typeof n ? i : n);
                    this.wrapAsync(this.ftruncateBase, [
                        t,
                        s
                    ], o);
                }
                truncateBase(t, n) {
                    const i = this.openSync(t, "r+");
                    try {
                        this.ftruncateSync(i, n);
                    } finally{
                        this.closeSync(i);
                    }
                }
                truncateSync(t, n) {
                    if ((0, P.isFd)(t)) return this.ftruncateSync(t, n);
                    this.truncateBase(t, n);
                }
                truncate(t, n, i) {
                    const s = "number" == typeof n ? n : 0, o = (0, P.validateCallback)("number" == typeof n ? i : n);
                    if ((0, P.isFd)(t)) return this.ftruncate(t, s, o);
                    this.wrapAsync(this.truncateBase, [
                        t,
                        s
                    ], o);
                }
                futimesBase(t, n, i) {
                    const s = this.getFileByFdOrThrow(t, "futimes").node;
                    s.atime = new Date(1e3 * n), s.mtime = new Date(1e3 * i);
                }
                futimesSync(t, n, i) {
                    this.futimesBase(t, toUnixTimestamp(n), toUnixTimestamp(i));
                }
                futimes(t, n, i, s) {
                    this.wrapAsync(this.futimesBase, [
                        t,
                        toUnixTimestamp(n),
                        toUnixTimestamp(i)
                    ], s);
                }
                utimesBase(t, n, i, s = !0) {
                    const o = (s ? this.getResolvedLinkOrThrow(t, "utimes") : this.getLinkOrThrow(t, "lutimes")).getNode();
                    o.atime = new Date(1e3 * n), o.mtime = new Date(1e3 * i);
                }
                utimesSync(t, n, i) {
                    this.utimesBase((0, P.pathToFilename)(t), toUnixTimestamp(n), toUnixTimestamp(i), !0);
                }
                utimes(t, n, i, s) {
                    this.wrapAsync(this.utimesBase, [
                        (0, P.pathToFilename)(t),
                        toUnixTimestamp(n),
                        toUnixTimestamp(i),
                        !0
                    ], s);
                }
                lutimesSync(t, n, i) {
                    this.utimesBase((0, P.pathToFilename)(t), toUnixTimestamp(n), toUnixTimestamp(i), !1);
                }
                lutimes(t, n, i, s) {
                    this.wrapAsync(this.utimesBase, [
                        (0, P.pathToFilename)(t),
                        toUnixTimestamp(n),
                        toUnixTimestamp(i),
                        !1
                    ], s);
                }
                mkdirBase(t, n) {
                    const i = filenameToSteps(t);
                    if (!i.length) throw (0, P.createError)(ee, "mkdir", t);
                    const s = this.getLinkParentAsDirOrThrow(t, "mkdir"), o = i[i.length - 1];
                    if (s.getChild(o)) throw (0, P.createError)(ee, "mkdir", t);
                    const c = s.getNode();
                    if (!c.canWrite() || !c.canExecute()) throw (0, P.createError)(re, "mkdir", t);
                    s.createChild(o, this.createNode(O.constants.S_IFDIR | n));
                }
                mkdirpBase(t, n) {
                    let i = !1;
                    const s = filenameToSteps(t);
                    let o = null, c = s.length;
                    for(c = s.length; c >= 0 && (o = this.getResolvedLink(s.slice(0, c)), !o); c--);
                    for(o || (o = this.root, c = 0), o = this.getResolvedLinkOrThrow(Y + s.slice(0, c).join(Y), "mkdir"); c < s.length; c++){
                        const l = o.getNode();
                        if (!l.isDirectory()) throw (0, P.createError)(te, "mkdir", t);
                        if (!l.canExecute() || !l.canWrite()) throw (0, P.createError)(re, "mkdir", t);
                        i = !0, o = o.createChild(s[c], this.createNode(O.constants.S_IFDIR | n));
                    }
                    return i ? t : void 0;
                }
                mkdirSync(t, n) {
                    const i = (0, C.getMkdirOptions)(n), s = (0, P.modeToNumber)(i.mode, 511), o = (0, P.pathToFilename)(t);
                    if (i.recursive) return this.mkdirpBase(o, s);
                    this.mkdirBase(o, s);
                }
                mkdir(t, n, i) {
                    const s = (0, C.getMkdirOptions)(n), o = (0, P.validateCallback)("function" == typeof n ? n : i), c = (0, P.modeToNumber)(s.mode, 511), l = (0, P.pathToFilename)(t);
                    s.recursive ? this.wrapAsync(this.mkdirpBase, [
                        l,
                        c
                    ], o) : this.wrapAsync(this.mkdirBase, [
                        l,
                        c
                    ], o);
                }
                mkdtempBase(t, n, i = 5) {
                    const s = t + (0, P.genRndStr6)();
                    try {
                        return this.mkdirBase(s, 511), (0, T.strToEncoding)(s, n);
                    } catch (s) {
                        if (s.code === ee) {
                            if (i > 1) return this.mkdtempBase(t, n, i - 1);
                            throw Error("Could not create temp dir.");
                        }
                        throw s;
                    }
                }
                mkdtempSync(t, n) {
                    const { encoding: i } = (0, C.getDefaultOpts)(n);
                    if (!t || "string" != typeof t) throw new TypeError("filename prefix is required");
                    return (0, P.nullCheck)(t), this.mkdtempBase(t, i);
                }
                mkdtemp(t, n, i) {
                    const [{ encoding: s }, o] = (0, C.getDefaultOptsAndCb)(n, i);
                    if (!t || "string" != typeof t) throw new TypeError("filename prefix is required");
                    (0, P.nullCheck)(t) && this.wrapAsync(this.mkdtempBase, [
                        t,
                        s
                    ], o);
                }
                rmdirBase(t, n) {
                    const i = (0, C.getRmdirOptions)(n), s = this.getLinkAsDirOrThrow(t, "rmdir");
                    if (s.length && !i.recursive) throw (0, P.createError)("ENOTEMPTY", "rmdir", t);
                    this.deleteLink(s);
                }
                rmdirSync(t, n) {
                    this.rmdirBase((0, P.pathToFilename)(t), n);
                }
                rmdir(t, n, i) {
                    const s = (0, C.getRmdirOptions)(n), o = (0, P.validateCallback)("function" == typeof n ? n : i);
                    this.wrapAsync(this.rmdirBase, [
                        (0, P.pathToFilename)(t),
                        s
                    ], o);
                }
                rmBase(t, n = {}) {
                    let i;
                    try {
                        i = this.getResolvedLinkOrThrow(t, "stat");
                    } catch (t) {
                        if (t.code === Q && n.force) return;
                        throw t;
                    }
                    if (i.getNode().isDirectory() && !n.recursive) throw (0, P.createError)("ERR_FS_EISDIR", "rm", t);
                    if (!i.parent.getNode().canWrite()) throw (0, P.createError)(re, "rm", t);
                    this.deleteLink(i);
                }
                rmSync(t, n) {
                    this.rmBase((0, P.pathToFilename)(t), n);
                }
                rm(t, n, i) {
                    const [s, o] = (0, C.getRmOptsAndCb)(n, i);
                    this.wrapAsync(this.rmBase, [
                        (0, P.pathToFilename)(t),
                        s
                    ], o);
                }
                fchmodBase(t, n) {
                    this.getFileByFdOrThrow(t, "fchmod").chmod(n);
                }
                fchmodSync(t, n) {
                    this.fchmodBase(t, (0, P.modeToNumber)(n));
                }
                fchmod(t, n, i) {
                    this.wrapAsync(this.fchmodBase, [
                        t,
                        (0, P.modeToNumber)(n)
                    ], i);
                }
                chmodBase(t, n, i = !0) {
                    (i ? this.getResolvedLinkOrThrow(t, "chmod") : this.getLinkOrThrow(t, "chmod")).getNode().chmod(n);
                }
                chmodSync(t, n) {
                    const i = (0, P.modeToNumber)(n), s = (0, P.pathToFilename)(t);
                    this.chmodBase(s, i, !0);
                }
                chmod(t, n, i) {
                    const s = (0, P.modeToNumber)(n), o = (0, P.pathToFilename)(t);
                    this.wrapAsync(this.chmodBase, [
                        o,
                        s
                    ], i);
                }
                lchmodBase(t, n) {
                    this.chmodBase(t, n, !1);
                }
                lchmodSync(t, n) {
                    const i = (0, P.modeToNumber)(n), s = (0, P.pathToFilename)(t);
                    this.lchmodBase(s, i);
                }
                lchmod(t, n, i) {
                    const s = (0, P.modeToNumber)(n), o = (0, P.pathToFilename)(t);
                    this.wrapAsync(this.lchmodBase, [
                        o,
                        s
                    ], i);
                }
                fchownBase(t, n, i) {
                    this.getFileByFdOrThrow(t, "fchown").chown(n, i);
                }
                fchownSync(t, n, i) {
                    validateUid(n), validateGid(i), this.fchownBase(t, n, i);
                }
                fchown(t, n, i, s) {
                    validateUid(n), validateGid(i), this.wrapAsync(this.fchownBase, [
                        t,
                        n,
                        i
                    ], s);
                }
                chownBase(t, n, i) {
                    this.getResolvedLinkOrThrow(t, "chown").getNode().chown(n, i);
                }
                chownSync(t, n, i) {
                    validateUid(n), validateGid(i), this.chownBase((0, P.pathToFilename)(t), n, i);
                }
                chown(t, n, i, s) {
                    validateUid(n), validateGid(i), this.wrapAsync(this.chownBase, [
                        (0, P.pathToFilename)(t),
                        n,
                        i
                    ], s);
                }
                lchownBase(t, n, i) {
                    this.getLinkOrThrow(t, "lchown").getNode().chown(n, i);
                }
                lchownSync(t, n, i) {
                    validateUid(n), validateGid(i), this.lchownBase((0, P.pathToFilename)(t), n, i);
                }
                lchown(t, n, i, s) {
                    validateUid(n), validateGid(i), this.wrapAsync(this.lchownBase, [
                        (0, P.pathToFilename)(t),
                        n,
                        i
                    ], s);
                }
                watchFile(t, n, i) {
                    const s = (0, P.pathToFilename)(t);
                    let o = n, c = i;
                    if ("function" == typeof o && (c = n, o = null), "function" != typeof c) throw Error('"watchFile()" requires a listener function');
                    let l = 5007, h = !0;
                    o && "object" == typeof o && ("number" == typeof o.interval && (l = o.interval), "boolean" == typeof o.persistent && (h = o.persistent));
                    let f = this.statWatchers[s];
                    return f || (f = new this.StatWatcher, f.start(s, h, l), this.statWatchers[s] = f), f.addListener("change", c), f;
                }
                unwatchFile(t, n) {
                    const i = (0, P.pathToFilename)(t), s = this.statWatchers[i];
                    s && ("function" == typeof n ? s.removeListener("change", n) : s.removeAllListeners("change"), 0 === s.listenerCount("change") && (s.stop(), delete this.statWatchers[i]));
                }
                createReadStream(t, n) {
                    return new this.ReadStream(t, n);
                }
                createWriteStream(t, n) {
                    return new this.WriteStream(t, n);
                }
                watch(t, n, i) {
                    const s = (0, P.pathToFilename)(t);
                    let o = n;
                    "function" == typeof n && (i = n, o = null);
                    let { persistent: c, recursive: l, encoding: h } = (0, C.getDefaultOpts)(o);
                    void 0 === c && (c = !0), void 0 === l && (l = !1);
                    const f = new this.FSWatcher;
                    return f.start(s, c, l, h), i && f.addListener("change", i), f;
                }
                opendirBase(t, n) {
                    const i = this.getResolvedLinkOrThrow(t, "scandir");
                    if (!i.getNode().isDirectory()) throw (0, P.createError)(te, "scandir", t);
                    return new D.Dir(i, n);
                }
                opendirSync(t, n) {
                    const i = (0, C.getOpendirOptions)(n), s = (0, P.pathToFilename)(t);
                    return this.opendirBase(s, i);
                }
                opendir(t, n, i) {
                    const [s, o] = (0, C.getOpendirOptsAndCb)(n, i), c = (0, P.pathToFilename)(t);
                    this.wrapAsync(this.opendirBase, [
                        c,
                        s
                    ], o);
                }
                constructor(t = {}){
                    this.ino = 0, this.inodes = {}, this.releasedInos = [], this.fds = {}, this.releasedFds = [], this.maxFiles = 1e4, this.openFiles = 0, this.promisesApi = new N.FsPromises(this, F.FileHandle), this.statWatchers = {}, this.cpSync = notImplemented, this.statfsSync = notImplemented, this.cp = notImplemented, this.statfs = notImplemented, this.openAsBlob = notImplemented, this.props = Object.assign({
                        Node: o.Node,
                        Link: o.Link,
                        File: o.File
                    }, t);
                    const n = this.createLink();
                    n.setNode(this.createNode(511 | O.constants.S_IFDIR));
                    const i = this;
                    this.StatWatcher = class extends StatWatcher {
                        constructor(){
                            super(i);
                        }
                    };
                    const s = FsReadStream;
                    this.ReadStream = class extends s {
                        constructor(...t){
                            super(i, ...t);
                        }
                    };
                    const c = FsWriteStream;
                    this.WriteStream = class extends c {
                        constructor(...t){
                            super(i, ...t);
                        }
                    }, this.FSWatcher = class extends FSWatcher {
                        constructor(){
                            super(i);
                        }
                    }, n.setChild(".", n), n.getNode().nlink++, n.setChild("..", n), n.getNode().nlink++, this.root = n;
                }
            };
            function emitStop(t) {
                t.emit("stop");
            }
            n.Volume = Volume, Volume.fd = 2147483647;
            let StatWatcher = class StatWatcher extends R.EventEmitter {
                loop() {
                    this.timeoutRef = this.setTimeout(this.onInterval, this.interval);
                }
                hasChanged(t) {
                    return t.mtimeMs > this.prev.mtimeMs || t.nlink !== this.prev.nlink;
                }
                start(t, n = !0, s = 5007) {
                    this.filename = (0, P.pathToFilename)(t), this.setTimeout = n ? setTimeout.bind("undefined" != typeof globalThis ? globalThis : i.g) : _.default, this.interval = s, this.prev = this.vol.statSync(this.filename), this.loop();
                }
                stop() {
                    clearTimeout(this.timeoutRef), (0, f.default)(()=>{
                        emitStop.call(this, this);
                    });
                }
                constructor(t){
                    super(), this.onInterval = ()=>{
                        try {
                            const t = this.vol.statSync(this.filename);
                            this.hasChanged(t) && (this.emit("change", t, this.prev), this.prev = t);
                        } finally{
                            this.loop();
                        }
                    }, this.vol = t;
                }
            };
            var ie;
            function FsReadStream(t, n, i) {
                if (!(this instanceof FsReadStream)) return new FsReadStream(t, n, i);
                if (this._vol = t, void 0 === (i = Object.assign({}, (0, C.getOptions)(i, {}))).highWaterMark && (i.highWaterMark = 65536), S.Readable.call(this, i), this.path = (0, P.pathToFilename)(n), this.fd = void 0 === i.fd ? null : "number" != typeof i.fd ? i.fd.fd : i.fd, this.flags = void 0 === i.flags ? "r" : i.flags, this.mode = void 0 === i.mode ? 438 : i.mode, this.start = i.start, this.end = i.end, this.autoClose = void 0 === i.autoClose || i.autoClose, this.pos = void 0, this.bytesRead = 0, void 0 !== this.start) {
                    if ("number" != typeof this.start) throw new TypeError('"start" option must be a Number');
                    if (void 0 === this.end) this.end = 1 / 0;
                    else if ("number" != typeof this.end) throw new TypeError('"end" option must be a Number');
                    if (this.start > this.end) throw new Error('"start" option must be <= "end" option');
                    this.pos = this.start;
                }
                "number" != typeof this.fd && this.open(), this.on("end", function() {
                    this.autoClose && this.destroy && this.destroy();
                });
            }
            function closeOnOpen(t) {
                this.close();
            }
            function FsWriteStream(t, n, i) {
                if (!(this instanceof FsWriteStream)) return new FsWriteStream(t, n, i);
                if (this._vol = t, i = Object.assign({}, (0, C.getOptions)(i, {})), S.Writable.call(this, i), this.path = (0, P.pathToFilename)(n), this.fd = void 0 === i.fd ? null : "number" != typeof i.fd ? i.fd.fd : i.fd, this.flags = void 0 === i.flags ? "w" : i.flags, this.mode = void 0 === i.mode ? 438 : i.mode, this.start = i.start, this.autoClose = void 0 === i.autoClose || !!i.autoClose, this.pos = void 0, this.bytesWritten = 0, this.pending = !0, void 0 !== this.start) {
                    if ("number" != typeof this.start) throw new TypeError('"start" option must be a Number');
                    if (this.start < 0) throw new Error('"start" must be >= zero');
                    this.pos = this.start;
                }
                i.encoding && this.setDefaultEncoding(i.encoding), "number" != typeof this.fd && this.open(), this.once("finish", function() {
                    this.autoClose && this.close();
                });
            }
            n.StatWatcher = StatWatcher, A.inherits(FsReadStream, S.Readable), n.ReadStream = FsReadStream, FsReadStream.prototype.open = function() {
                var t = this;
                this._vol.open(this.path, this.flags, this.mode, (n, i)=>{
                    if (n) return t.autoClose && t.destroy && t.destroy(), void t.emit("error", n);
                    t.fd = i, t.emit("open", i), t.read();
                });
            }, FsReadStream.prototype._read = function(t) {
                if ("number" != typeof this.fd) return this.once("open", function() {
                    this._read(t);
                });
                if (!this.destroyed) {
                    (!ie || ie.length - ie.used < 128) && function allocNewPool(t) {
                        (ie = (0, h.bufferAllocUnsafe)(t)).used = 0;
                    }(this._readableState.highWaterMark);
                    var n = ie, i = Math.min(ie.length - ie.used, t), s = ie.used;
                    if (void 0 !== this.pos && (i = Math.min(this.end - this.pos + 1, i)), i <= 0) return this.push(null);
                    var o = this;
                    this._vol.read(this.fd, ie, ie.used, i, this.pos, function onread(t, i) {
                        if (t) o.autoClose && o.destroy && o.destroy(), o.emit("error", t);
                        else {
                            var c = null;
                            i > 0 && (o.bytesRead += i, c = n.slice(s, s + i)), o.push(c);
                        }
                    }), void 0 !== this.pos && (this.pos += i), ie.used += i;
                }
            }, FsReadStream.prototype._destroy = function(t, n) {
                this.close((i)=>{
                    n(t || i);
                });
            }, FsReadStream.prototype.close = function(t) {
                var n;
                if (t && this.once("close", t), this.closed || "number" != typeof this.fd) return "number" != typeof this.fd ? void this.once("open", closeOnOpen) : (0, f.default)(()=>this.emit("close"));
                "boolean" == typeof (null === (n = this._readableState) || void 0 === n ? void 0 : n.closed) ? this._readableState.closed = !0 : this.closed = !0, this._vol.close(this.fd, (t)=>{
                    t ? this.emit("error", t) : this.emit("close");
                }), this.fd = null;
            }, A.inherits(FsWriteStream, S.Writable), n.WriteStream = FsWriteStream, FsWriteStream.prototype.open = function() {
                this._vol.open(this.path, this.flags, this.mode, (function(t, n) {
                    if (t) return this.autoClose && this.destroy && this.destroy(), void this.emit("error", t);
                    this.fd = n, this.pending = !1, this.emit("open", n);
                }).bind(this));
            }, FsWriteStream.prototype._write = function(t, n, i) {
                if (!(t instanceof h.Buffer || t instanceof Uint8Array)) return this.emit("error", new Error("Invalid data"));
                if ("number" != typeof this.fd) return this.once("open", function() {
                    this._write(t, n, i);
                });
                var s = this;
                this._vol.write(this.fd, t, 0, t.length, this.pos, (t, n)=>{
                    if (t) return s.autoClose && s.destroy && s.destroy(), i(t);
                    s.bytesWritten += n, i();
                }), void 0 !== this.pos && (this.pos += t.length);
            }, FsWriteStream.prototype._writev = function(t, n) {
                if ("number" != typeof this.fd) return this.once("open", function() {
                    this._writev(t, n);
                });
                const i = this, s = t.length, o = new Array(s);
                for(var c = 0, l = 0; l < s; l++){
                    var f = t[l].chunk;
                    o[l] = f, c += f.length;
                }
                const p = h.Buffer.concat(o);
                this._vol.write(this.fd, p, 0, p.length, this.pos, (t, s)=>{
                    if (t) return i.destroy && i.destroy(), n(t);
                    i.bytesWritten += s, n();
                }), void 0 !== this.pos && (this.pos += c);
            }, FsWriteStream.prototype.close = function(t) {
                var n;
                if (t && this.once("close", t), this.closed || "number" != typeof this.fd) return "number" != typeof this.fd ? void this.once("open", closeOnOpen) : (0, f.default)(()=>this.emit("close"));
                "boolean" == typeof (null === (n = this._writableState) || void 0 === n ? void 0 : n.closed) ? this._writableState.closed = !0 : this.closed = !0, this._vol.close(this.fd, (t)=>{
                    t ? this.emit("error", t) : this.emit("close");
                }), this.fd = null;
            }, FsWriteStream.prototype._destroy = FsReadStream.prototype._destroy, FsWriteStream.prototype.destroySoon = FsWriteStream.prototype.end;
            let FSWatcher = class FSWatcher extends R.EventEmitter {
                _getName() {
                    return this._steps[this._steps.length - 1];
                }
                start(t, n = !0, i = !1, s = T.ENCODING_UTF8) {
                    this._filename = (0, P.pathToFilename)(t), this._steps = filenameToSteps(this._filename), this._filenameEncoded = (0, T.strToEncoding)(this._filename), this._recursive = i, this._encoding = s;
                    try {
                        this._link = this._vol.getLinkOrThrow(this._filename, "FSWatcher");
                    } catch (t) {
                        const n = new Error(`watch ${this._filename} ${t.code}`);
                        throw n.code = t.code, n.errno = t.code, n;
                    }
                    const watchLinkNodeChanged = (t)=>{
                        var n;
                        const i = t.getPath(), s = t.getNode(), onNodeChange = ()=>{
                            let t = z(this._filename, i);
                            return t || (t = this._getName()), this.emit("change", "change", t);
                        };
                        s.on("change", onNodeChange);
                        const o = null !== (n = this._listenerRemovers.get(s.ino)) && void 0 !== n ? n : [];
                        o.push(()=>s.removeListener("change", onNodeChange)), this._listenerRemovers.set(s.ino, o);
                    }, watchLinkChildrenChanged = (t)=>{
                        var n;
                        const s = t.getNode(), onLinkChildAdd = (t)=>{
                            this.emit("change", "rename", z(this._filename, t.getPath())), setTimeout(()=>{
                                watchLinkNodeChanged(t), watchLinkChildrenChanged(t);
                            });
                        }, onLinkChildDelete = (t)=>{
                            const removeLinkNodeListeners = (t)=>{
                                const n = t.getNode().ino, i = this._listenerRemovers.get(n);
                                i && (i.forEach((t)=>t()), this._listenerRemovers.delete(n));
                                for (const [n, i] of t.children.entries())i && "." !== n && ".." !== n && removeLinkNodeListeners(i);
                            };
                            removeLinkNodeListeners(t), this.emit("change", "rename", z(this._filename, t.getPath()));
                        };
                        for (const [n, i] of t.children.entries())i && "." !== n && ".." !== n && watchLinkNodeChanged(i);
                        t.on("child:add", onLinkChildAdd), t.on("child:delete", onLinkChildDelete);
                        if ((null !== (n = this._listenerRemovers.get(s.ino)) && void 0 !== n ? n : []).push(()=>{
                            t.removeListener("child:add", onLinkChildAdd), t.removeListener("child:delete", onLinkChildDelete);
                        }), i) for (const [n, i] of t.children.entries())i && "." !== n && ".." !== n && watchLinkChildrenChanged(i);
                    };
                    watchLinkNodeChanged(this._link), watchLinkChildrenChanged(this._link);
                    const o = this._link.parent;
                    o && (o.setMaxListeners(o.getMaxListeners() + 1), o.on("child:delete", this._onParentChild)), n && this._persist();
                }
                close() {
                    clearTimeout(this._timer), this._listenerRemovers.forEach((t)=>{
                        t.forEach((t)=>t());
                    }), this._listenerRemovers.clear();
                    const t = this._link.parent;
                    t && t.removeListener("child:delete", this._onParentChild);
                }
                constructor(t){
                    super(), this._filename = "", this._filenameEncoded = "", this._recursive = !1, this._encoding = T.ENCODING_UTF8, this._listenerRemovers = new Map, this._onParentChild = (t)=>{
                        t.getName() === this._getName() && this._emit("rename");
                    }, this._emit = (t)=>{
                        this.emit("change", t, this._filenameEncoded);
                    }, this._persist = ()=>{
                        this._timer = setTimeout(this._persist, 1e6);
                    }, this._vol = t;
                }
            };
            n.FSWatcher = FSWatcher;
        },
        97961: (t, n, i)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.getWriteFileOptions = n.writeFileDefaults = n.getRealpathOptsAndCb = n.getRealpathOptions = n.getStatOptsAndCb = n.getStatOptions = n.getAppendFileOptsAndCb = n.getAppendFileOpts = n.getOpendirOptsAndCb = n.getOpendirOptions = n.getReaddirOptsAndCb = n.getReaddirOptions = n.getReadFileOptions = n.getRmOptsAndCb = n.getRmdirOptions = n.getDefaultOptsAndCb = n.getDefaultOpts = n.optsDefaults = n.getMkdirOptions = void 0, n.getOptions = getOptions, n.optsGenerator = optsGenerator, n.optsAndCbGenerator = optsAndCbGenerator;
            const s = i(17886), o = i(35953), c = i(75043), l = {
                mode: 511,
                recursive: !1
            };
            n.getMkdirOptions = (t)=>"number" == typeof t ? Object.assign({}, l, {
                    mode: t
                }) : Object.assign({}, l, t);
            const ERRSTR_OPTS = (t)=>`Expected options to be either an object or a string, but got ${t} instead`;
            function getOptions(t, n) {
                let i;
                if (!n) return t;
                {
                    const s = typeof n;
                    switch(s){
                        case "string":
                            i = Object.assign({}, t, {
                                encoding: n
                            });
                            break;
                        case "object":
                            i = Object.assign({}, t, n);
                            break;
                        default:
                            throw TypeError(ERRSTR_OPTS(s));
                    }
                }
                return "buffer" !== i.encoding && (0, o.assertEncoding)(i.encoding), i;
            }
            function optsGenerator(t) {
                return (n)=>getOptions(t, n);
            }
            function optsAndCbGenerator(t) {
                return (n, i)=>"function" == typeof n ? [
                        t(),
                        n
                    ] : [
                        t(n),
                        (0, c.validateCallback)(i)
                    ];
            }
            n.optsDefaults = {
                encoding: "utf8"
            }, n.getDefaultOpts = optsGenerator(n.optsDefaults), n.getDefaultOptsAndCb = optsAndCbGenerator(n.getDefaultOpts);
            const h = {
                recursive: !1
            };
            n.getRmdirOptions = (t)=>Object.assign({}, h, t);
            const f = optsGenerator(n.optsDefaults);
            n.getRmOptsAndCb = optsAndCbGenerator(f);
            n.getReadFileOptions = optsGenerator({
                flag: "r"
            });
            n.getReaddirOptions = optsGenerator({
                encoding: "utf8",
                recursive: !1,
                withFileTypes: !1
            }), n.getReaddirOptsAndCb = optsAndCbGenerator(n.getReaddirOptions);
            n.getOpendirOptions = optsGenerator({
                encoding: "utf8",
                bufferSize: 32,
                recursive: !1
            }), n.getOpendirOptsAndCb = optsAndCbGenerator(n.getOpendirOptions);
            const p = {
                encoding: "utf8",
                mode: 438,
                flag: s.FLAGS[s.FLAGS.a]
            };
            n.getAppendFileOpts = optsGenerator(p), n.getAppendFileOptsAndCb = optsAndCbGenerator(n.getAppendFileOpts);
            const _ = {
                bigint: !1
            };
            n.getStatOptions = (t = {})=>Object.assign({}, _, t);
            n.getStatOptsAndCb = (t, i)=>"function" == typeof t ? [
                    (0, n.getStatOptions)(),
                    t
                ] : [
                    (0, n.getStatOptions)(t),
                    (0, c.validateCallback)(i)
                ];
            const S = n.optsDefaults;
            n.getRealpathOptions = optsGenerator(S), n.getRealpathOptsAndCb = optsAndCbGenerator(n.getRealpathOptions), n.writeFileDefaults = {
                encoding: "utf8",
                mode: 438,
                flag: s.FLAGS[s.FLAGS.w]
            }, n.getWriteFileOptions = optsGenerator(n.writeFileDefaults);
        },
        98143: (t, n, i)=>{
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.FileHandle = void 0;
            const s = i(75043);
            n.FileHandle = class FileHandle {
                appendFile(t, n) {
                    return (0, s.promisify)(this.fs, "appendFile")(this.fd, t, n);
                }
                chmod(t) {
                    return (0, s.promisify)(this.fs, "fchmod")(this.fd, t);
                }
                chown(t, n) {
                    return (0, s.promisify)(this.fs, "fchown")(this.fd, t, n);
                }
                close() {
                    return (0, s.promisify)(this.fs, "close")(this.fd);
                }
                datasync() {
                    return (0, s.promisify)(this.fs, "fdatasync")(this.fd);
                }
                createReadStream(t) {
                    return this.fs.createReadStream("", Object.assign(Object.assign({}, t), {
                        fd: this
                    }));
                }
                createWriteStream(t) {
                    return this.fs.createWriteStream("", Object.assign(Object.assign({}, t), {
                        fd: this
                    }));
                }
                readableWebStream(t) {
                    return new ReadableStream({
                        pull: async (t)=>{
                            const n = await this.readFile();
                            t.enqueue(n), t.close();
                        }
                    });
                }
                read(t, n, i, o) {
                    return (0, s.promisify)(this.fs, "read", (n)=>({
                            bytesRead: n,
                            buffer: t
                        }))(this.fd, t, n, i, o);
                }
                readv(t, n) {
                    return (0, s.promisify)(this.fs, "readv", (n)=>({
                            bytesRead: n,
                            buffers: t
                        }))(this.fd, t, n);
                }
                readFile(t) {
                    return (0, s.promisify)(this.fs, "readFile")(this.fd, t);
                }
                stat(t) {
                    return (0, s.promisify)(this.fs, "fstat")(this.fd, t);
                }
                sync() {
                    return (0, s.promisify)(this.fs, "fsync")(this.fd);
                }
                truncate(t) {
                    return (0, s.promisify)(this.fs, "ftruncate")(this.fd, t);
                }
                utimes(t, n) {
                    return (0, s.promisify)(this.fs, "futimes")(this.fd, t, n);
                }
                write(t, n, i, o) {
                    return (0, s.promisify)(this.fs, "write", (n)=>({
                            bytesWritten: n,
                            buffer: t
                        }))(this.fd, t, n, i, o);
                }
                writev(t, n) {
                    return (0, s.promisify)(this.fs, "writev", (n)=>({
                            bytesWritten: n,
                            buffers: t
                        }))(this.fd, t, n);
                }
                writeFile(t, n) {
                    return (0, s.promisify)(this.fs, "writeFile")(this.fd, t, n);
                }
                constructor(t, n){
                    this.fs = t, this.fd = n;
                }
            };
        },
        98964: (t, n, i)=>{
            "use strict";
            var s = i(10458), o = i(4002), listGetNode = function(t, n, i) {
                for(var s, o = t; null != (s = o.next); o = s)if (s.key === n) return o.next = s.next, i || (s.next = t.next, t.next = s), s;
            };
            t.exports = function getSideChannelList() {
                var t, n = {
                    assert: function(t) {
                        if (!n.has(t)) throw new o("Side channel does not contain " + s(t));
                    },
                    delete: function(n) {
                        var i = t && t.next, s = function(t, n) {
                            if (t) return listGetNode(t, n, !0);
                        }(t, n);
                        return s && i && i === s && (t = void 0), !!s;
                    },
                    get: function(n) {
                        return function(t, n) {
                            if (t) {
                                var i = listGetNode(t, n);
                                return i && i.value;
                            }
                        }(t, n);
                    },
                    has: function(n) {
                        return function(t, n) {
                            return !!t && !!listGetNode(t, n);
                        }(t, n);
                    },
                    set: function(n, i) {
                        t || (t = {
                            next: void 0
                        }), function(t, n, i) {
                            var s = listGetNode(t, n);
                            s ? s.value = i : t.next = {
                                key: n,
                                next: t.next,
                                value: i
                            };
                        }(t, n, i);
                    }
                };
                return n;
            };
        }
    }
]); //# sourceMappingURL=4045.6bb954c6db3fd9ce1ed4.js.map
