"use strict";
(self.webpackChunk_genie_chat_webview_app = self.webpackChunk_genie_chat_webview_app || []).push([
    [
        8178
    ],
    {
        8178: (e1, t, n)=>{
            n.d(t, {
                A: ()=>Yc
            });
            var a = n(78);
            function _arrayLikeToArray(e1, t) {
                (null == t || t > e1.length) && (t = e1.length);
                for(var n = 0, a = Array(t); n < t; n++)a[n] = e1[n];
                return a;
            }
            function _classCallCheck(e1, t) {
                if (!(e1 instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function _createClass(e1, t, n) {
                return t && function _defineProperties(e1, t) {
                    for(var n = 0; n < t.length; n++){
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e1, _toPropertyKey(a.key), a);
                    }
                }(e1.prototype, t), Object.defineProperty(e1, "prototype", {
                    writable: !1
                }), e1;
            }
            function _createForOfIteratorHelper(e1, t) {
                var n = "undefined" != typeof Symbol && e1[Symbol.iterator] || e1["@@iterator"];
                if (!n) {
                    if (Array.isArray(e1) || (n = _unsupportedIterableToArray(e1)) || t) {
                        n && (e1 = n);
                        var a = 0, F = function() {};
                        return {
                            s: F,
                            n: function() {
                                return a >= e1.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e1[a++]
                                };
                            },
                            e: function(e1) {
                                throw e1;
                            },
                            f: F
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var i, o = !0, s = !1;
                return {
                    s: function() {
                        n = n.call(e1);
                    },
                    n: function() {
                        var e1 = n.next();
                        return o = e1.done, e1;
                    },
                    e: function(e1) {
                        s = !0, i = e1;
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return();
                        } finally{
                            if (s) throw i;
                        }
                    }
                };
            }
            function _defineProperty$1(e1, t, n) {
                return (t = _toPropertyKey(t)) in e1 ? Object.defineProperty(e1, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e1[t] = n, e1;
            }
            function _slicedToArray(e1, t) {
                return function _arrayWithHoles(e1) {
                    if (Array.isArray(e1)) return e1;
                }(e1) || function _iterableToArrayLimit(e1, t) {
                    var n = null == e1 ? null : "undefined" != typeof Symbol && e1[Symbol.iterator] || e1["@@iterator"];
                    if (null != n) {
                        var a, i, o, s, l = [], u = !0, c = !1;
                        try {
                            if (o = (n = n.call(e1)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                u = !1;
                            } else for(; !(u = (a = o.call(n)).done) && (l.push(a.value), l.length !== t); u = !0);
                        } catch (e1) {
                            c = !0, i = e1;
                        } finally{
                            try {
                                if (!u && null != n.return && (s = n.return(), Object(s) !== s)) return;
                            } finally{
                                if (c) throw i;
                            }
                        }
                        return l;
                    }
                }(e1, t) || _unsupportedIterableToArray(e1, t) || function _nonIterableRest() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function _toConsumableArray(e1) {
                return function _arrayWithoutHoles(e1) {
                    if (Array.isArray(e1)) return _arrayLikeToArray(e1);
                }(e1) || function _iterableToArray(e1) {
                    if ("undefined" != typeof Symbol && null != e1[Symbol.iterator] || null != e1["@@iterator"]) return Array.from(e1);
                }(e1) || _unsupportedIterableToArray(e1) || function _nonIterableSpread() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function _toPropertyKey(e1) {
                var t = function _toPrimitive(e1, t) {
                    if ("object" != typeof e1 || !e1) return e1;
                    var n = e1[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var a = n.call(e1, t);
                        if ("object" != typeof a) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e1);
                }(e1, "string");
                return "symbol" == typeof t ? t : t + "";
            }
            function _typeof(e1) {
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e1) {
                    return typeof e1;
                } : function(e1) {
                    return e1 && "function" == typeof Symbol && e1.constructor === Symbol && e1 !== Symbol.prototype ? "symbol" : typeof e1;
                }, _typeof(e1);
            }
            function _unsupportedIterableToArray(e1, t) {
                if (e1) {
                    if ("string" == typeof e1) return _arrayLikeToArray(e1, t);
                    var n = ({}).toString.call(e1).slice(8, -1);
                    return "Object" === n && e1.constructor && (n = e1.constructor.name), "Map" === n || "Set" === n ? Array.from(e1) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e1, t) : void 0;
                }
            }
            var i = "undefined" == typeof window ? null : window, o = i ? i.navigator : null;
            i && i.document;
            var s, l, u, c, d, h, p, g, v, y, m, b, x, w, E, T, k, S, P, _, D, M, I, R, L, N, O, z, V = _typeof(""), q = _typeof({}), j = _typeof(function() {}), W = "undefined" == typeof HTMLElement ? "undefined" : _typeof(HTMLElement), H = function instanceStr(e1) {
                return e1 && e1.instanceString && Y(e1.instanceString) ? e1.instanceString() : null;
            }, X = function string(e1) {
                return null != e1 && _typeof(e1) == V;
            }, Y = function fn(e1) {
                return null != e1 && _typeof(e1) === j;
            }, K = function array(e1) {
                return !Q(e1) && (Array.isArray ? Array.isArray(e1) : null != e1 && e1 instanceof Array);
            }, G = function plainObject(e1) {
                return null != e1 && _typeof(e1) === q && !K(e1) && e1.constructor === Object;
            }, U = function number(e1) {
                return null != e1 && _typeof(e1) === _typeof(1) && !isNaN(e1);
            }, Z = function htmlElement(e1) {
                return "undefined" === W ? void 0 : null != e1 && e1 instanceof HTMLElement;
            }, Q = function elementOrCollection(e1) {
                return J(e1) || ee(e1);
            }, J = function element(e1) {
                return "collection" === H(e1) && e1._private.single;
            }, ee = function collection(e1) {
                return "collection" === H(e1) && !e1._private.single;
            }, te = function core(e1) {
                return "core" === H(e1);
            }, ne = function stylesheet(e1) {
                return "stylesheet" === H(e1);
            }, re = function emptyString(e1) {
                return null == e1 || !("" !== e1 && !e1.match(/^\s+$/));
            }, ae = function promise(e1) {
                return function object(e1) {
                    return null != e1 && _typeof(e1) === q;
                }(e1) && Y(e1.then);
            }, ie = function memoize(e1, t) {
                t || (t = function keyFn() {
                    if (1 === arguments.length) return arguments[0];
                    if (0 === arguments.length) return "undefined";
                    for(var e1 = [], t = 0; t < arguments.length; t++)e1.push(arguments[t]);
                    return e1.join("$");
                });
                var n = function memoizedFn() {
                    var a, i = arguments, o = t.apply(this, i), s = n.cache;
                    return (a = s[o]) || (a = s[o] = e1.apply(this, i)), a;
                };
                return n.cache = {}, n;
            }, oe = ie(function(e1) {
                return e1.replace(/([A-Z])/g, function(e1) {
                    return "-" + e1.toLowerCase();
                });
            }), se = ie(function(e1) {
                return e1.replace(/(-\w)/g, function(e1) {
                    return e1[1].toUpperCase();
                });
            }), le = ie(function(e1, t) {
                return e1 + t[0].toUpperCase() + t.substring(1);
            }, function(e1, t) {
                return e1 + "$" + t;
            }), ue = function capitalize(e1) {
                return re(e1) ? e1 : e1.charAt(0).toUpperCase() + e1.substring(1);
            }, ce = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", de = "rgb[a]?\\((" + ce + "[%]?)\\s*,\\s*(" + ce + "[%]?)\\s*,\\s*(" + ce + "[%]?)(?:\\s*,\\s*(" + ce + "))?\\)", he = "rgb[a]?\\((?:" + ce + "[%]?)\\s*,\\s*(?:" + ce + "[%]?)\\s*,\\s*(?:" + ce + "[%]?)(?:\\s*,\\s*(?:" + ce + "))?\\)", pe = "hsl[a]?\\((" + ce + ")\\s*,\\s*(" + ce + "[%])\\s*,\\s*(" + ce + "[%])(?:\\s*,\\s*(" + ce + "))?\\)", fe = "hsl[a]?\\((?:" + ce + ")\\s*,\\s*(?:" + ce + "[%])\\s*,\\s*(?:" + ce + "[%])(?:\\s*,\\s*(?:" + ce + "))?\\)", ge = function ascending(e1, t) {
                return e1 < t ? -1 : e1 > t ? 1 : 0;
            }, ve = null != Object.assign ? Object.assign.bind(Object) : function(e1) {
                for(var t = arguments, n = 1; n < t.length; n++){
                    var a = t[n];
                    if (null != a) for(var i = Object.keys(a), o = 0; o < i.length; o++){
                        var s = i[o];
                        e1[s] = a[s];
                    }
                }
                return e1;
            }, ye = function color2tuple(e1) {
                return (K(e1) ? e1 : null) || function colorname2tuple(e1) {
                    return me[e1.toLowerCase()];
                }(e1) || function hex2tuple(e1) {
                    if ((4 === e1.length || 7 === e1.length) && "#" === e1[0]) {
                        var t, n, a, i = 16;
                        return 4 === e1.length ? (t = parseInt(e1[1] + e1[1], i), n = parseInt(e1[2] + e1[2], i), a = parseInt(e1[3] + e1[3], i)) : (t = parseInt(e1[1] + e1[2], i), n = parseInt(e1[3] + e1[4], i), a = parseInt(e1[5] + e1[6], i)), [
                            t,
                            n,
                            a
                        ];
                    }
                }(e1) || function rgb2tuple(e1) {
                    var t, n = new RegExp("^" + de + "$").exec(e1);
                    if (n) {
                        t = [];
                        for(var a = [], i = 1; i <= 3; i++){
                            var o = n[i];
                            if ("%" === o[o.length - 1] && (a[i] = !0), o = parseFloat(o), a[i] && (o = o / 100 * 255), o < 0 || o > 255) return;
                            t.push(Math.floor(o));
                        }
                        var s = a[1] || a[2] || a[3], l = a[1] && a[2] && a[3];
                        if (s && !l) return;
                        var u = n[4];
                        if (void 0 !== u) {
                            if ((u = parseFloat(u)) < 0 || u > 1) return;
                            t.push(u);
                        }
                    }
                    return t;
                }(e1) || function hsl2tuple(e1) {
                    var t, n, a, i, o, s, l, u;
                    function hue2rgb(e1, t, n) {
                        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e1 + 6 * (t - e1) * n : n < .5 ? t : n < 2 / 3 ? e1 + (t - e1) * (2 / 3 - n) * 6 : e1;
                    }
                    var c = new RegExp("^" + pe + "$").exec(e1);
                    if (c) {
                        if ((n = parseInt(c[1])) < 0 ? n = (360 - -1 * n % 360) % 360 : n > 360 && (n %= 360), n /= 360, (a = parseFloat(c[2])) < 0 || a > 100) return;
                        if (a /= 100, (i = parseFloat(c[3])) < 0 || i > 100) return;
                        if (i /= 100, void 0 !== (o = c[4]) && ((o = parseFloat(o)) < 0 || o > 1)) return;
                        if (0 === a) s = l = u = Math.round(255 * i);
                        else {
                            var d = i < .5 ? i * (1 + a) : i + a - i * a, h = 2 * i - d;
                            s = Math.round(255 * hue2rgb(h, d, n + 1 / 3)), l = Math.round(255 * hue2rgb(h, d, n)), u = Math.round(255 * hue2rgb(h, d, n - 1 / 3));
                        }
                        t = [
                            s,
                            l,
                            u,
                            o
                        ];
                    }
                    return t;
                }(e1);
            }, me = {
                transparent: [
                    0,
                    0,
                    0,
                    0
                ],
                aliceblue: [
                    240,
                    248,
                    255
                ],
                antiquewhite: [
                    250,
                    235,
                    215
                ],
                aqua: [
                    0,
                    255,
                    255
                ],
                aquamarine: [
                    127,
                    255,
                    212
                ],
                azure: [
                    240,
                    255,
                    255
                ],
                beige: [
                    245,
                    245,
                    220
                ],
                bisque: [
                    255,
                    228,
                    196
                ],
                black: [
                    0,
                    0,
                    0
                ],
                blanchedalmond: [
                    255,
                    235,
                    205
                ],
                blue: [
                    0,
                    0,
                    255
                ],
                blueviolet: [
                    138,
                    43,
                    226
                ],
                brown: [
                    165,
                    42,
                    42
                ],
                burlywood: [
                    222,
                    184,
                    135
                ],
                cadetblue: [
                    95,
                    158,
                    160
                ],
                chartreuse: [
                    127,
                    255,
                    0
                ],
                chocolate: [
                    210,
                    105,
                    30
                ],
                coral: [
                    255,
                    127,
                    80
                ],
                cornflowerblue: [
                    100,
                    149,
                    237
                ],
                cornsilk: [
                    255,
                    248,
                    220
                ],
                crimson: [
                    220,
                    20,
                    60
                ],
                cyan: [
                    0,
                    255,
                    255
                ],
                darkblue: [
                    0,
                    0,
                    139
                ],
                darkcyan: [
                    0,
                    139,
                    139
                ],
                darkgoldenrod: [
                    184,
                    134,
                    11
                ],
                darkgray: [
                    169,
                    169,
                    169
                ],
                darkgreen: [
                    0,
                    100,
                    0
                ],
                darkgrey: [
                    169,
                    169,
                    169
                ],
                darkkhaki: [
                    189,
                    183,
                    107
                ],
                darkmagenta: [
                    139,
                    0,
                    139
                ],
                darkolivegreen: [
                    85,
                    107,
                    47
                ],
                darkorange: [
                    255,
                    140,
                    0
                ],
                darkorchid: [
                    153,
                    50,
                    204
                ],
                darkred: [
                    139,
                    0,
                    0
                ],
                darksalmon: [
                    233,
                    150,
                    122
                ],
                darkseagreen: [
                    143,
                    188,
                    143
                ],
                darkslateblue: [
                    72,
                    61,
                    139
                ],
                darkslategray: [
                    47,
                    79,
                    79
                ],
                darkslategrey: [
                    47,
                    79,
                    79
                ],
                darkturquoise: [
                    0,
                    206,
                    209
                ],
                darkviolet: [
                    148,
                    0,
                    211
                ],
                deeppink: [
                    255,
                    20,
                    147
                ],
                deepskyblue: [
                    0,
                    191,
                    255
                ],
                dimgray: [
                    105,
                    105,
                    105
                ],
                dimgrey: [
                    105,
                    105,
                    105
                ],
                dodgerblue: [
                    30,
                    144,
                    255
                ],
                firebrick: [
                    178,
                    34,
                    34
                ],
                floralwhite: [
                    255,
                    250,
                    240
                ],
                forestgreen: [
                    34,
                    139,
                    34
                ],
                fuchsia: [
                    255,
                    0,
                    255
                ],
                gainsboro: [
                    220,
                    220,
                    220
                ],
                ghostwhite: [
                    248,
                    248,
                    255
                ],
                gold: [
                    255,
                    215,
                    0
                ],
                goldenrod: [
                    218,
                    165,
                    32
                ],
                gray: [
                    128,
                    128,
                    128
                ],
                grey: [
                    128,
                    128,
                    128
                ],
                green: [
                    0,
                    128,
                    0
                ],
                greenyellow: [
                    173,
                    255,
                    47
                ],
                honeydew: [
                    240,
                    255,
                    240
                ],
                hotpink: [
                    255,
                    105,
                    180
                ],
                indianred: [
                    205,
                    92,
                    92
                ],
                indigo: [
                    75,
                    0,
                    130
                ],
                ivory: [
                    255,
                    255,
                    240
                ],
                khaki: [
                    240,
                    230,
                    140
                ],
                lavender: [
                    230,
                    230,
                    250
                ],
                lavenderblush: [
                    255,
                    240,
                    245
                ],
                lawngreen: [
                    124,
                    252,
                    0
                ],
                lemonchiffon: [
                    255,
                    250,
                    205
                ],
                lightblue: [
                    173,
                    216,
                    230
                ],
                lightcoral: [
                    240,
                    128,
                    128
                ],
                lightcyan: [
                    224,
                    255,
                    255
                ],
                lightgoldenrodyellow: [
                    250,
                    250,
                    210
                ],
                lightgray: [
                    211,
                    211,
                    211
                ],
                lightgreen: [
                    144,
                    238,
                    144
                ],
                lightgrey: [
                    211,
                    211,
                    211
                ],
                lightpink: [
                    255,
                    182,
                    193
                ],
                lightsalmon: [
                    255,
                    160,
                    122
                ],
                lightseagreen: [
                    32,
                    178,
                    170
                ],
                lightskyblue: [
                    135,
                    206,
                    250
                ],
                lightslategray: [
                    119,
                    136,
                    153
                ],
                lightslategrey: [
                    119,
                    136,
                    153
                ],
                lightsteelblue: [
                    176,
                    196,
                    222
                ],
                lightyellow: [
                    255,
                    255,
                    224
                ],
                lime: [
                    0,
                    255,
                    0
                ],
                limegreen: [
                    50,
                    205,
                    50
                ],
                linen: [
                    250,
                    240,
                    230
                ],
                magenta: [
                    255,
                    0,
                    255
                ],
                maroon: [
                    128,
                    0,
                    0
                ],
                mediumaquamarine: [
                    102,
                    205,
                    170
                ],
                mediumblue: [
                    0,
                    0,
                    205
                ],
                mediumorchid: [
                    186,
                    85,
                    211
                ],
                mediumpurple: [
                    147,
                    112,
                    219
                ],
                mediumseagreen: [
                    60,
                    179,
                    113
                ],
                mediumslateblue: [
                    123,
                    104,
                    238
                ],
                mediumspringgreen: [
                    0,
                    250,
                    154
                ],
                mediumturquoise: [
                    72,
                    209,
                    204
                ],
                mediumvioletred: [
                    199,
                    21,
                    133
                ],
                midnightblue: [
                    25,
                    25,
                    112
                ],
                mintcream: [
                    245,
                    255,
                    250
                ],
                mistyrose: [
                    255,
                    228,
                    225
                ],
                moccasin: [
                    255,
                    228,
                    181
                ],
                navajowhite: [
                    255,
                    222,
                    173
                ],
                navy: [
                    0,
                    0,
                    128
                ],
                oldlace: [
                    253,
                    245,
                    230
                ],
                olive: [
                    128,
                    128,
                    0
                ],
                olivedrab: [
                    107,
                    142,
                    35
                ],
                orange: [
                    255,
                    165,
                    0
                ],
                orangered: [
                    255,
                    69,
                    0
                ],
                orchid: [
                    218,
                    112,
                    214
                ],
                palegoldenrod: [
                    238,
                    232,
                    170
                ],
                palegreen: [
                    152,
                    251,
                    152
                ],
                paleturquoise: [
                    175,
                    238,
                    238
                ],
                palevioletred: [
                    219,
                    112,
                    147
                ],
                papayawhip: [
                    255,
                    239,
                    213
                ],
                peachpuff: [
                    255,
                    218,
                    185
                ],
                peru: [
                    205,
                    133,
                    63
                ],
                pink: [
                    255,
                    192,
                    203
                ],
                plum: [
                    221,
                    160,
                    221
                ],
                powderblue: [
                    176,
                    224,
                    230
                ],
                purple: [
                    128,
                    0,
                    128
                ],
                red: [
                    255,
                    0,
                    0
                ],
                rosybrown: [
                    188,
                    143,
                    143
                ],
                royalblue: [
                    65,
                    105,
                    225
                ],
                saddlebrown: [
                    139,
                    69,
                    19
                ],
                salmon: [
                    250,
                    128,
                    114
                ],
                sandybrown: [
                    244,
                    164,
                    96
                ],
                seagreen: [
                    46,
                    139,
                    87
                ],
                seashell: [
                    255,
                    245,
                    238
                ],
                sienna: [
                    160,
                    82,
                    45
                ],
                silver: [
                    192,
                    192,
                    192
                ],
                skyblue: [
                    135,
                    206,
                    235
                ],
                slateblue: [
                    106,
                    90,
                    205
                ],
                slategray: [
                    112,
                    128,
                    144
                ],
                slategrey: [
                    112,
                    128,
                    144
                ],
                snow: [
                    255,
                    250,
                    250
                ],
                springgreen: [
                    0,
                    255,
                    127
                ],
                steelblue: [
                    70,
                    130,
                    180
                ],
                tan: [
                    210,
                    180,
                    140
                ],
                teal: [
                    0,
                    128,
                    128
                ],
                thistle: [
                    216,
                    191,
                    216
                ],
                tomato: [
                    255,
                    99,
                    71
                ],
                turquoise: [
                    64,
                    224,
                    208
                ],
                violet: [
                    238,
                    130,
                    238
                ],
                wheat: [
                    245,
                    222,
                    179
                ],
                white: [
                    255,
                    255,
                    255
                ],
                whitesmoke: [
                    245,
                    245,
                    245
                ],
                yellow: [
                    255,
                    255,
                    0
                ],
                yellowgreen: [
                    154,
                    205,
                    50
                ]
            }, be = function setMap(e1) {
                for(var t = e1.map, n = e1.keys, a = n.length, i = 0; i < a; i++){
                    var o = n[i];
                    if (G(o)) throw Error("Tried to set map with object key");
                    i < n.length - 1 ? (null == t[o] && (t[o] = {}), t = t[o]) : t[o] = e1.value;
                }
            }, xe = function getMap(e1) {
                for(var t = e1.map, n = e1.keys, a = n.length, i = 0; i < a; i++){
                    var o = n[i];
                    if (G(o)) throw Error("Tried to get map with object key");
                    if (null == (t = t[o])) return t;
                }
                return t;
            }, we = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
            function getDefaultExportFromCjs(e1) {
                return e1 && e1.__esModule && Object.prototype.hasOwnProperty.call(e1, "default") ? e1.default : e1;
            }
            function requireIsObject() {
                if (l) return s;
                return l = 1, s = function isObject(e1) {
                    var t = typeof e1;
                    return null != e1 && ("object" == t || "function" == t);
                };
            }
            function require_root() {
                if (h) return d;
                h = 1;
                var e1 = function require_freeGlobal() {
                    if (c) return u;
                    c = 1;
                    var e1 = "object" == typeof we && we && we.Object === Object && we;
                    return u = e1;
                }(), t = "object" == typeof self && self && self.Object === Object && self, n = e1 || t || Function("return this")();
                return d = n;
            }
            function require_baseTrim() {
                if (b) return m;
                b = 1;
                var e1 = function require_trimmedEndIndex() {
                    if (y) return v;
                    y = 1;
                    var e1 = /\s/;
                    return v = function trimmedEndIndex(t) {
                        for(var n = t.length; n-- && e1.test(t.charAt(n)););
                        return n;
                    }, v;
                }(), t = /^\s+/;
                return m = function baseTrim(n) {
                    return n ? n.slice(0, e1(n) + 1).replace(t, "") : n;
                }, m;
            }
            function require_Symbol() {
                if (w) return x;
                w = 1;
                var e1 = require_root().Symbol;
                return x = e1;
            }
            function require_baseGetTag() {
                if (_) return P;
                _ = 1;
                var e1 = require_Symbol(), t = function require_getRawTag() {
                    if (T) return E;
                    T = 1;
                    var e1 = require_Symbol(), t = Object.prototype, n = t.hasOwnProperty, a = t.toString, i = e1 ? e1.toStringTag : void 0;
                    return E = function getRawTag(e1) {
                        var t = n.call(e1, i), o = e1[i];
                        try {
                            e1[i] = void 0;
                            var s = !0;
                        } catch (e1) {}
                        var l = a.call(e1);
                        return s && (t ? e1[i] = o : delete e1[i]), l;
                    };
                }(), n = function require_objectToString() {
                    if (S) return k;
                    S = 1;
                    var e1 = Object.prototype.toString;
                    return k = function objectToString(t) {
                        return e1.call(t);
                    };
                }(), a = e1 ? e1.toStringTag : void 0;
                return P = function baseGetTag(e1) {
                    return null == e1 ? void 0 === e1 ? "[object Undefined]" : "[object Null]" : a && a in Object(e1) ? t(e1) : n(e1);
                };
            }
            function requireIsSymbol() {
                if (R) return I;
                R = 1;
                var e1 = require_baseGetTag(), t = function requireIsObjectLike() {
                    return M ? D : (M = 1, D = function isObjectLike(e1) {
                        return null != e1 && "object" == typeof e1;
                    });
                }();
                return I = function isSymbol(n) {
                    return "symbol" == typeof n || t(n) && "[object Symbol]" == e1(n);
                };
            }
            var Ee = getDefaultExportFromCjs(function requireDebounce() {
                if (z) return O;
                z = 1;
                var e1 = requireIsObject(), t = function requireNow() {
                    if (g) return p;
                    g = 1;
                    var e1 = require_root();
                    return p = function() {
                        return e1.Date.now();
                    };
                }(), n = function requireToNumber() {
                    if (N) return L;
                    N = 1;
                    var e1 = require_baseTrim(), t = requireIsObject(), n = requireIsSymbol(), a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt;
                    return L = function toNumber(l) {
                        if ("number" == typeof l) return l;
                        if (n(l)) return NaN;
                        if (t(l)) {
                            var u = "function" == typeof l.valueOf ? l.valueOf() : l;
                            l = t(u) ? u + "" : u;
                        }
                        if ("string" != typeof l) return 0 === l ? l : +l;
                        l = e1(l);
                        var c = i.test(l);
                        return c || o.test(l) ? s(l.slice(2), c ? 2 : 8) : a.test(l) ? NaN : +l;
                    };
                }(), a = Math.max, i = Math.min;
                return O = function debounce(o, s, l) {
                    var u, c, d, h, p, g, v = 0, y = !1, m = !1, b = !0;
                    if ("function" != typeof o) throw new TypeError("Expected a function");
                    function invokeFunc(e1) {
                        var t = u, n = c;
                        return u = c = void 0, v = e1, h = o.apply(n, t);
                    }
                    function shouldInvoke(e1) {
                        var t = e1 - g;
                        return void 0 === g || t >= s || t < 0 || m && e1 - v >= d;
                    }
                    function timerExpired() {
                        var e1 = t();
                        if (shouldInvoke(e1)) return trailingEdge(e1);
                        p = setTimeout(timerExpired, function remainingWait(e1) {
                            var t = s - (e1 - g);
                            return m ? i(t, d - (e1 - v)) : t;
                        }(e1));
                    }
                    function trailingEdge(e1) {
                        return p = void 0, b && u ? invokeFunc(e1) : (u = c = void 0, h);
                    }
                    function debounced() {
                        var e1 = t(), n = shouldInvoke(e1);
                        if (u = arguments, c = this, g = e1, n) {
                            if (void 0 === p) return function leadingEdge(e1) {
                                return v = e1, p = setTimeout(timerExpired, s), y ? invokeFunc(e1) : h;
                            }(g);
                            if (m) return clearTimeout(p), p = setTimeout(timerExpired, s), invokeFunc(g);
                        }
                        return void 0 === p && (p = setTimeout(timerExpired, s)), h;
                    }
                    return s = n(s) || 0, e1(l) && (y = !!l.leading, d = (m = "maxWait" in l) ? a(n(l.maxWait) || 0, s) : d, b = "trailing" in l ? !!l.trailing : b), debounced.cancel = function cancel() {
                        void 0 !== p && clearTimeout(p), v = 0, u = g = c = p = void 0;
                    }, debounced.flush = function flush() {
                        return void 0 === p ? h : trailingEdge(t());
                    }, debounced;
                };
            }()), Ce = i ? i.performance : null, Te = Ce && Ce.now ? function() {
                return Ce.now();
            } : function() {
                return Date.now();
            }, ke = function() {
                if (i) {
                    if (i.requestAnimationFrame) return function(e1) {
                        i.requestAnimationFrame(e1);
                    };
                    if (i.mozRequestAnimationFrame) return function(e1) {
                        i.mozRequestAnimationFrame(e1);
                    };
                    if (i.webkitRequestAnimationFrame) return function(e1) {
                        i.webkitRequestAnimationFrame(e1);
                    };
                    if (i.msRequestAnimationFrame) return function(e1) {
                        i.msRequestAnimationFrame(e1);
                    };
                }
                return function(e1) {
                    e1 && setTimeout(function() {
                        e1(Te());
                    }, 1e3 / 60);
                };
            }(), Se = function requestAnimationFrame(e1) {
                return ke(e1);
            }, Pe = Te, _e = 9261, Be = 5381, De = function hashIterableInts(e1) {
                for(var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _e; !(t = e1.next()).done;)n = 65599 * n + t.value | 0;
                return n;
            }, Ae = function hashInt(e1) {
                return 65599 * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _e) + e1 | 0;
            }, Me = function hashIntAlt(e1) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Be;
                return (t << 5) + t + e1 | 0;
            }, Ie = function combineHashesArray(e1) {
                return 2097152 * e1[0] + e1[1];
            }, Re = function hashArrays(e1, t) {
                return [
                    Ae(e1[0], t[0]),
                    Me(e1[1], t[1])
                ];
            }, Le = function hashIntsArray(e1, t) {
                var n = {
                    value: 0,
                    done: !1
                }, a = 0, i = e1.length;
                return De({
                    next: function next() {
                        return a < i ? n.value = e1[a++] : n.done = !0, n;
                    }
                }, t);
            }, Ne = function hashString(e1, t) {
                var n = {
                    value: 0,
                    done: !1
                }, a = 0, i = e1.length;
                return De({
                    next: function next() {
                        return a < i ? n.value = e1.charCodeAt(a++) : n.done = !0, n;
                    }
                }, t);
            }, Oe = function hashStrings() {
                return ze(arguments);
            }, ze = function hashStringsArray(e1) {
                for(var t, n = 0; n < e1.length; n++){
                    var a = e1[n];
                    t = 0 === n ? Ne(a) : Ne(a, t);
                }
                return t;
            }, Fe = !0, Ve = null != a.warn, qe = null != a.trace, je = Number.MAX_SAFE_INTEGER || 9007199254740991, We = function trueify() {
                return !0;
            }, He = function falsify() {
                return !1;
            }, Xe = function zeroify() {
                return 0;
            }, Ye = function noop() {}, Ke = function error(e1) {
                throw new Error(e1);
            }, Ge = function warnings(e1) {
                if (void 0 === e1) return Fe;
                Fe = !!e1;
            }, Ue = function warn(e1) {
                Ge() && (Ve ? a.warn(e1) : (a.log(e1), qe && a.trace()));
            }, Ze = function copy(e1) {
                return null == e1 ? e1 : K(e1) ? e1.slice() : G(e1) ? function clone(e1) {
                    return ve({}, e1);
                }(e1) : e1;
            }, $e = function uuid(e1, t) {
                for(t = e1 = ""; e1++ < 36; t += 51 * e1 & 52 ? (15 ^ e1 ? 8 ^ Math.random() * (20 ^ e1 ? 16 : 4) : 4).toString(16) : "-");
                return t;
            }, Qe = {}, Je = function staticEmptyObject() {
                return Qe;
            }, et = function defaults(e1) {
                var t = Object.keys(e1);
                return function(n) {
                    for(var a = {}, i = 0; i < t.length; i++){
                        var o = t[i], s = null == n ? void 0 : n[o];
                        a[o] = void 0 === s ? e1[o] : s;
                    }
                    return a;
                };
            }, tt = function removeFromArray(e1, t, n) {
                for(var a = e1.length - 1; a >= 0; a--)e1[a] === t && e1.splice(a, 1);
            }, nt = function clearArray(e1) {
                e1.splice(0, e1.length);
            }, rt = function getPrefixedProperty(e1, t, n) {
                return n && (t = le(n, t)), e1[t];
            }, at = function setPrefixedProperty(e1, t, n, a) {
                n && (t = le(n, t)), e1[t] = a;
            }, it = "undefined" != typeof Map ? Map : function() {
                return _createClass(function ObjectMap() {
                    _classCallCheck(this, ObjectMap), this._obj = {};
                }, [
                    {
                        key: "set",
                        value: function set(e1, t) {
                            return this._obj[e1] = t, this;
                        }
                    },
                    {
                        key: "delete",
                        value: function _delete(e1) {
                            return this._obj[e1] = void 0, this;
                        }
                    },
                    {
                        key: "clear",
                        value: function clear() {
                            this._obj = {};
                        }
                    },
                    {
                        key: "has",
                        value: function has(e1) {
                            return void 0 !== this._obj[e1];
                        }
                    },
                    {
                        key: "get",
                        value: function get(e1) {
                            return this._obj[e1];
                        }
                    }
                ]);
            }(), ot = function() {
                return _createClass(function ObjectSet(e1) {
                    if (_classCallCheck(this, ObjectSet), this._obj = Object.create(null), this.size = 0, null != e1) {
                        var t;
                        t = null != e1.instanceString && e1.instanceString() === this.instanceString() ? e1.toArray() : e1;
                        for(var n = 0; n < t.length; n++)this.add(t[n]);
                    }
                }, [
                    {
                        key: "instanceString",
                        value: function instanceString() {
                            return "set";
                        }
                    },
                    {
                        key: "add",
                        value: function add(e1) {
                            var t = this._obj;
                            1 !== t[e1] && (t[e1] = 1, this.size++);
                        }
                    },
                    {
                        key: "delete",
                        value: function _delete(e1) {
                            var t = this._obj;
                            1 === t[e1] && (t[e1] = 0, this.size--);
                        }
                    },
                    {
                        key: "clear",
                        value: function clear() {
                            this._obj = Object.create(null);
                        }
                    },
                    {
                        key: "has",
                        value: function has(e1) {
                            return 1 === this._obj[e1];
                        }
                    },
                    {
                        key: "toArray",
                        value: function toArray() {
                            var e1 = this;
                            return Object.keys(this._obj).filter(function(t) {
                                return e1.has(t);
                            });
                        }
                    },
                    {
                        key: "forEach",
                        value: function forEach(e1, t) {
                            return this.toArray().forEach(e1, t);
                        }
                    }
                ]);
            }(), st = "undefined" !== ("undefined" == typeof Set ? "undefined" : _typeof(Set)) ? Set : ot, lt = function Element(e1, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (void 0 !== e1 && void 0 !== t && te(e1)) {
                    var a = t.group;
                    if (null == a && (a = t.data && null != t.data.source && null != t.data.target ? "edges" : "nodes"), "nodes" === a || "edges" === a) {
                        this.length = 1, this[0] = this;
                        var i = this._private = {
                            cy: e1,
                            single: !0,
                            data: t.data || {},
                            position: t.position || {
                                x: 0,
                                y: 0
                            },
                            autoWidth: void 0,
                            autoHeight: void 0,
                            autoPadding: void 0,
                            compoundBoundsClean: !1,
                            listeners: [],
                            group: a,
                            style: {},
                            rstyle: {},
                            styleCxts: [],
                            styleKeys: {},
                            removed: !0,
                            selected: !!t.selected,
                            selectable: void 0 === t.selectable || !!t.selectable,
                            locked: !!t.locked,
                            grabbed: !1,
                            grabbable: void 0 === t.grabbable || !!t.grabbable,
                            pannable: void 0 === t.pannable ? "edges" === a : !!t.pannable,
                            active: !1,
                            classes: new st,
                            animation: {
                                current: [],
                                queue: []
                            },
                            rscratch: {},
                            scratch: t.scratch || {},
                            edges: [],
                            children: [],
                            parent: t.parent && t.parent.isNode() ? t.parent : null,
                            traversalCache: {},
                            backgrounding: !1,
                            bbCache: null,
                            bbCacheShift: {
                                x: 0,
                                y: 0
                            },
                            bodyBounds: null,
                            overlayBounds: null,
                            labelBounds: {
                                all: null,
                                source: null,
                                target: null,
                                main: null
                            },
                            arrowBounds: {
                                source: null,
                                target: null,
                                "mid-source": null,
                                "mid-target": null
                            }
                        };
                        if (null == i.position.x && (i.position.x = 0), null == i.position.y && (i.position.y = 0), t.renderedPosition) {
                            var o = t.renderedPosition, s = e1.pan(), l = e1.zoom();
                            i.position = {
                                x: (o.x - s.x) / l,
                                y: (o.y - s.y) / l
                            };
                        }
                        var u = [];
                        K(t.classes) ? u = t.classes : X(t.classes) && (u = t.classes.split(/\s+/));
                        for(var c = 0, d = u.length; c < d; c++){
                            var h = u[c];
                            h && "" !== h && i.classes.add(h);
                        }
                        this.createEmitter(), (void 0 === n || n) && this.restore();
                        var p = t.style || t.css;
                        p && (Ue("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(p));
                    } else Ke("An element must be of type `nodes` or `edges`; you specified `" + a + "`");
                } else Ke("An element must have a core reference and parameters set");
            }, ut = function defineSearch(e1) {
                return e1 = {
                    bfs: e1.bfs || !e1.dfs,
                    dfs: e1.dfs || !e1.bfs
                }, function searchFn(t, n, a) {
                    var i;
                    G(t) && !Q(t) && (t = (i = t).roots || i.root, n = i.visit, a = i.directed), a = 2 !== arguments.length || Y(n) ? a : n, n = Y(n) ? n : function() {};
                    for(var o, s = this._private.cy, l = t = X(t) ? this.filter(t) : t, u = [], c = [], d = {}, h = {}, p = {}, g = 0, v = this.byGroup(), y = v.nodes, m = v.edges, b = 0; b < l.length; b++){
                        var x = l[b], w = x.id();
                        x.isNode() && (u.unshift(x), e1.bfs && (p[w] = !0, c.push(x)), h[w] = 0);
                    }
                    for(var E, T = function _loop() {
                        var t = e1.bfs ? u.shift() : u.pop(), i = t.id();
                        if (e1.dfs) {
                            if (p[i]) return 0;
                            p[i] = !0, c.push(t);
                        }
                        var s, l = h[i], v = d[i], b = null != v ? v.source() : null, x = null != v ? v.target() : null, w = null == v ? void 0 : t.same(b) ? x[0] : b[0];
                        if (!0 === (s = n(t, v, w, g++, l))) return o = t, 1;
                        if (!1 === s) return 1;
                        for(var E = t.connectedEdges().filter(function(e1) {
                            return (!a || e1.source().same(t)) && m.has(e1);
                        }), T = 0; T < E.length; T++){
                            var k = E[T], S = k.connectedNodes().filter(function(e1) {
                                return !e1.same(t) && y.has(e1);
                            }), P = S.id();
                            0 === S.length || p[P] || (S = S[0], u.push(S), e1.bfs && (p[P] = !0, c.push(S)), d[P] = k, h[P] = h[i] + 1);
                        }
                    }; 0 !== u.length && (0 === (E = T()) || 1 !== E););
                    for(var k = s.collection(), S = 0; S < c.length; S++){
                        var P = c[S], _ = d[P.id()];
                        null != _ && k.push(_), k.push(P);
                    }
                    return {
                        path: s.collection(k),
                        found: s.collection(o)
                    };
                };
            }, ct = {
                breadthFirstSearch: ut({
                    bfs: !0
                }),
                depthFirstSearch: ut({
                    dfs: !0
                })
            };
            ct.bfs = ct.breadthFirstSearch, ct.dfs = ct.depthFirstSearch;
            var dt, ht, pt, ft = {
                exports: {}
            }, gt = ft.exports;
            function requireHeap$1() {
                return dt || (dt = 1, e1 = ft, (function() {
                    var t, n, a, i, o, s, l, u, c, d, h, p, g, v, y;
                    a = Math.floor, d = Math.min, n = function(e1, t) {
                        return e1 < t ? -1 : e1 > t ? 1 : 0;
                    }, c = function(e1, t, i, o, s) {
                        var l;
                        if (null == i && (i = 0), null == s && (s = n), i < 0) throw new Error("lo must be non-negative");
                        for(null == o && (o = e1.length); i < o;)s(t, e1[l = a((i + o) / 2)]) < 0 ? o = l : i = l + 1;
                        return [].splice.apply(e1, [
                            i,
                            i - i
                        ].concat(t)), t;
                    }, s = function(e1, t, a) {
                        return null == a && (a = n), e1.push(t), v(e1, 0, e1.length - 1, a);
                    }, o = function(e1, t) {
                        var a, i;
                        return null == t && (t = n), a = e1.pop(), e1.length ? (i = e1[0], e1[0] = a, y(e1, 0, t)) : i = a, i;
                    }, u = function(e1, t, a) {
                        var i;
                        return null == a && (a = n), i = e1[0], e1[0] = t, y(e1, 0, a), i;
                    }, l = function(e1, t, a) {
                        var i;
                        return null == a && (a = n), e1.length && a(e1[0], t) < 0 && (t = (i = [
                            e1[0],
                            t
                        ])[0], e1[0] = i[1], y(e1, 0, a)), t;
                    }, i = function(e1, t) {
                        var i, o, s, l, u, c;
                        for(null == t && (t = n), u = [], o = 0, s = (l = (function() {
                            c = [];
                            for(var t = 0, n = a(e1.length / 2); 0 <= n ? t < n : t > n; 0 <= n ? t++ : t--)c.push(t);
                            return c;
                        }).apply(this).reverse()).length; o < s; o++)i = l[o], u.push(y(e1, i, t));
                        return u;
                    }, g = function(e1, t, a) {
                        var i;
                        if (null == a && (a = n), -1 !== (i = e1.indexOf(t))) return v(e1, 0, i, a), y(e1, i, a);
                    }, h = function(e1, t, a) {
                        var o, s, u, c, d;
                        if (null == a && (a = n), !(s = e1.slice(0, t)).length) return s;
                        for(i(s, a), u = 0, c = (d = e1.slice(t)).length; u < c; u++)o = d[u], l(s, o, a);
                        return s.sort(a).reverse();
                    }, p = function(e1, t, a) {
                        var s, l, u, h, p, g, v, y, m;
                        if (null == a && (a = n), 10 * t <= e1.length) {
                            if (!(u = e1.slice(0, t).sort(a)).length) return u;
                            for(l = u[u.length - 1], h = 0, g = (v = e1.slice(t)).length; h < g; h++)a(s = v[h], l) < 0 && (c(u, s, 0, null, a), u.pop(), l = u[u.length - 1]);
                            return u;
                        }
                        for(i(e1, a), m = [], p = 0, y = d(t, e1.length); 0 <= y ? p < y : p > y; 0 <= y ? ++p : --p)m.push(o(e1, a));
                        return m;
                    }, v = function(e1, t, a, i) {
                        var o, s, l;
                        for(null == i && (i = n), o = e1[a]; a > t && i(o, s = e1[l = a - 1 >> 1]) < 0;)e1[a] = s, a = l;
                        return e1[a] = o;
                    }, y = function(e1, t, a) {
                        var i, o, s, l, u;
                        for(null == a && (a = n), o = e1.length, u = t, s = e1[t], i = 2 * t + 1; i < o;)(l = i + 1) < o && !(a(e1[i], e1[l]) < 0) && (i = l), e1[t] = e1[i], i = 2 * (t = i) + 1;
                        return e1[t] = s, v(e1, u, t, a);
                    }, t = function() {
                        function Heap(e1) {
                            this.cmp = null != e1 ? e1 : n, this.nodes = [];
                        }
                        return Heap.push = s, Heap.pop = o, Heap.replace = u, Heap.pushpop = l, Heap.heapify = i, Heap.updateItem = g, Heap.nlargest = h, Heap.nsmallest = p, Heap.prototype.push = function(e1) {
                            return s(this.nodes, e1, this.cmp);
                        }, Heap.prototype.pop = function() {
                            return o(this.nodes, this.cmp);
                        }, Heap.prototype.peek = function() {
                            return this.nodes[0];
                        }, Heap.prototype.contains = function(e1) {
                            return -1 !== this.nodes.indexOf(e1);
                        }, Heap.prototype.replace = function(e1) {
                            return u(this.nodes, e1, this.cmp);
                        }, Heap.prototype.pushpop = function(e1) {
                            return l(this.nodes, e1, this.cmp);
                        }, Heap.prototype.heapify = function() {
                            return i(this.nodes, this.cmp);
                        }, Heap.prototype.updateItem = function(e1) {
                            return g(this.nodes, e1, this.cmp);
                        }, Heap.prototype.clear = function() {
                            return this.nodes = [];
                        }, Heap.prototype.empty = function() {
                            return 0 === this.nodes.length;
                        }, Heap.prototype.size = function() {
                            return this.nodes.length;
                        }, Heap.prototype.clone = function() {
                            var e1;
                            return (e1 = new Heap).nodes = this.nodes.slice(0), e1;
                        }, Heap.prototype.toArray = function() {
                            return this.nodes.slice(0);
                        }, Heap.prototype.insert = Heap.prototype.push, Heap.prototype.top = Heap.prototype.peek, Heap.prototype.front = Heap.prototype.peek, Heap.prototype.has = Heap.prototype.contains, Heap.prototype.copy = Heap.prototype.clone, Heap;
                    }(), e1.exports = t;
                }).call(gt)), ft.exports;
                var e1;
            }
            var vt = getDefaultExportFromCjs(function requireHeap() {
                return pt ? ht : (pt = 1, ht = requireHeap$1());
            }()), yt = et({
                root: null,
                weight: function weight(e1) {
                    return 1;
                },
                directed: !1
            }), mt = {
                dijkstra: function dijkstra(e1) {
                    if (!G(e1)) {
                        var t = arguments;
                        e1 = {
                            root: t[0],
                            weight: t[1],
                            directed: t[2]
                        };
                    }
                    var n = yt(e1), a = n.root, i = n.weight, o = n.directed, s = this, l = i, u = X(a) ? this.filter(a)[0] : a[0], c = {}, d = {}, h = {}, p = this.byGroup(), g = p.nodes, v = p.edges;
                    v.unmergeBy(function(e1) {
                        return e1.isLoop();
                    });
                    for(var y = function getDist(e1) {
                        return c[e1.id()];
                    }, m = function setDist(e1, t) {
                        c[e1.id()] = t, b.updateItem(e1);
                    }, b = new vt(function(e1, t) {
                        return y(e1) - y(t);
                    }), x = 0; x < g.length; x++){
                        var w = g[x];
                        c[w.id()] = w.same(u) ? 0 : 1 / 0, b.push(w);
                    }
                    for(var E = function distBetween(e1, t) {
                        for(var n, a = (o ? e1.edgesTo(t) : e1.edgesWith(t)).intersect(v), i = 1 / 0, s = 0; s < a.length; s++){
                            var u = a[s], c = l(u);
                            (c < i || !n) && (i = c, n = u);
                        }
                        return {
                            edge: n,
                            dist: i
                        };
                    }; b.size() > 0;){
                        var T = b.pop(), k = y(T), S = T.id();
                        if (h[S] = k, k !== 1 / 0) for(var P = T.neighborhood().intersect(g), _ = 0; _ < P.length; _++){
                            var D = P[_], M = D.id(), I = E(T, D), R = k + I.dist;
                            R < y(D) && (m(D, R), d[M] = {
                                node: T,
                                edge: I.edge
                            });
                        }
                    }
                    return {
                        distanceTo: function distanceTo(e1) {
                            var t = X(e1) ? g.filter(e1)[0] : e1[0];
                            return h[t.id()];
                        },
                        pathTo: function pathTo(e1) {
                            var t = X(e1) ? g.filter(e1)[0] : e1[0], n = [], a = t, i = a.id();
                            if (t.length > 0) for(n.unshift(t); d[i];){
                                var o = d[i];
                                n.unshift(o.edge), n.unshift(o.node), i = (a = o.node).id();
                            }
                            return s.spawn(n);
                        }
                    };
                }
            }, bt = {
                kruskal: function kruskal(e1) {
                    e1 = e1 || function(e1) {
                        return 1;
                    };
                    for(var t = this.byGroup(), n = t.nodes, a = t.edges, i = n.length, o = new Array(i), s = n, l = function findSetIndex(e1) {
                        for(var t = 0; t < o.length; t++){
                            if (o[t].has(e1)) return t;
                        }
                    }, u = 0; u < i; u++)o[u] = this.spawn(n[u]);
                    for(var c = a.sort(function(t, n) {
                        return e1(t) - e1(n);
                    }), d = 0; d < c.length; d++){
                        var h = c[d], p = h.source()[0], g = h.target()[0], v = l(p), y = l(g), m = o[v], b = o[y];
                        v !== y && (s.merge(h), m.merge(b), o.splice(y, 1));
                    }
                    return s;
                }
            }, xt = et({
                root: null,
                goal: null,
                weight: function weight(e1) {
                    return 1;
                },
                heuristic: function heuristic(e1) {
                    return 0;
                },
                directed: !1
            }), wt = {
                aStar: function aStar(e1) {
                    var t = this.cy(), n = xt(e1), a = n.root, i = n.goal, o = n.heuristic, s = n.directed, l = n.weight;
                    a = t.collection(a)[0], i = t.collection(i)[0];
                    var u, c, d = a.id(), h = i.id(), p = {}, g = {}, v = {}, y = new vt(function(e1, t) {
                        return g[e1.id()] - g[t.id()];
                    }), m = new st, b = {}, x = {}, w = function addToOpenSet(e1, t) {
                        y.push(e1), m.add(t);
                    }, E = function popFromOpenSet() {
                        u = y.pop(), c = u.id(), m.delete(c);
                    }, T = function isInOpenSet(e1) {
                        return m.has(e1);
                    };
                    w(a, d), p[d] = 0, g[d] = o(a);
                    for(var k = 0; y.size() > 0;){
                        if (E(), k++, c === h) {
                            for(var S = [], P = i, _ = h, D = x[_]; S.unshift(P), null != D && S.unshift(D), null != (P = b[_]);)D = x[_ = P.id()];
                            return {
                                found: !0,
                                distance: p[c],
                                path: this.spawn(S),
                                steps: k
                            };
                        }
                        v[c] = !0;
                        for(var M = u._private.edges, I = 0; I < M.length; I++){
                            var R = M[I];
                            if (this.hasElementWithId(R.id()) && (!s || R.data("source") === c)) {
                                var L = R.source(), N = R.target(), O = L.id() !== c ? L : N, z = O.id();
                                if (this.hasElementWithId(z) && !v[z]) {
                                    var V = p[c] + l(R);
                                    T(z) ? V < p[z] && (p[z] = V, g[z] = V + o(O), b[z] = u, x[z] = R) : (p[z] = V, g[z] = V + o(O), w(O, z), b[z] = u, x[z] = R);
                                }
                            }
                        }
                    }
                    return {
                        found: !1,
                        distance: void 0,
                        path: void 0,
                        steps: k
                    };
                }
            }, Et = et({
                weight: function weight(e1) {
                    return 1;
                },
                directed: !1
            }), Ct = {
                floydWarshall: function floydWarshall(e1) {
                    for(var t = this.cy(), n = Et(e1), a = n.weight, i = n.directed, o = a, s = this.byGroup(), l = s.nodes, u = s.edges, c = l.length, d = c * c, h = function indexOf(e1) {
                        return l.indexOf(e1);
                    }, p = function atIndex(e1) {
                        return l[e1];
                    }, g = new Array(d), v = 0; v < d; v++){
                        var y = v % c, m = (v - y) / c;
                        g[v] = m === y ? 0 : 1 / 0;
                    }
                    for(var b = new Array(d), x = new Array(d), w = 0; w < u.length; w++){
                        var E = u[w], T = E.source()[0], k = E.target()[0];
                        if (T !== k) {
                            var S = h(T), P = h(k), _ = S * c + P, D = o(E);
                            if (g[_] > D && (g[_] = D, b[_] = P, x[_] = E), !i) {
                                var M = P * c + S;
                                !i && g[M] > D && (g[M] = D, b[M] = S, x[M] = E);
                            }
                        }
                    }
                    for(var I = 0; I < c; I++)for(var R = 0; R < c; R++)for(var L = R * c + I, N = 0; N < c; N++){
                        var O = R * c + N, z = I * c + N;
                        g[L] + g[z] < g[O] && (g[O] = g[L] + g[z], b[O] = b[L]);
                    }
                    var V = function indexOfArgEle(e1) {
                        return h(function getArgEle(e1) {
                            return (X(e1) ? t.filter(e1) : e1)[0];
                        }(e1));
                    }, q = {
                        distance: function distance(e1, t) {
                            var n = V(e1), a = V(t);
                            return g[n * c + a];
                        },
                        path: function path(e1, n) {
                            var a = V(e1), i = V(n), o = p(a);
                            if (a === i) return o.collection();
                            if (null == b[a * c + i]) return t.collection();
                            var s, path = t.collection(), l = a;
                            for(path.merge(o); a !== i;)l = a, a = b[a * c + i], s = x[l * c + a], path.merge(s), path.merge(p(a));
                            return path;
                        }
                    };
                    return q;
                }
            }, Tt = et({
                weight: function weight(e1) {
                    return 1;
                },
                directed: !1,
                root: null
            }), kt = {
                bellmanFord: function bellmanFord(e1) {
                    var t = this, n = Tt(e1), a = n.weight, i = n.directed, o = n.root, s = a, l = this, u = this.cy(), c = this.byGroup(), d = c.edges, h = c.nodes, p = h.length, g = new it, v = !1, y = [];
                    o = u.collection(o)[0], d.unmergeBy(function(e1) {
                        return e1.isLoop();
                    });
                    for(var m = d.length, b = function getInfo(e1) {
                        var t = g.get(e1.id());
                        return t || (t = {}, g.set(e1.id(), t)), t;
                    }, x = function getNodeFromTo(e1) {
                        return (X(e1) ? u.$(e1) : e1)[0];
                    }, w = 0; w < p; w++){
                        var E = h[w], T = b(E);
                        E.same(o) ? T.dist = 0 : T.dist = 1 / 0, T.pred = null, T.edge = null;
                    }
                    for(var k = !1, S = function checkForEdgeReplacement(e1, t, n, a, i, o) {
                        var s = a.dist + o;
                        s < i.dist && !n.same(a.edge) && (i.dist = s, i.pred = e1, i.edge = n, k = !0);
                    }, P = 1; P < p; P++){
                        k = !1;
                        for(var _ = 0; _ < m; _++){
                            var D = d[_], M = D.source(), I = D.target(), R = s(D), L = b(M), N = b(I);
                            S(M, 0, D, L, N, R), i || S(I, 0, D, N, L, R);
                        }
                        if (!k) break;
                    }
                    if (k) for(var O = [], z = 0; z < m; z++){
                        var V = d[z], q = V.source(), j = V.target(), W = s(V), H = b(q).dist, Y = b(j).dist;
                        if (H + W < Y || !i && Y + W < H) {
                            if (v || (Ue("Graph contains a negative weight cycle for Bellman-Ford"), v = !0), !1 === e1.findNegativeWeightCycles) break;
                            var K = [];
                            H + W < Y && K.push(q), !i && Y + W < H && K.push(j);
                            for(var G = K.length, U = 0; U < G; U++){
                                var Z = K[U], Q = [
                                    Z
                                ];
                                Q.push(b(Z).edge);
                                for(var J = b(Z).pred; -1 === Q.indexOf(J);)Q.push(J), Q.push(b(J).edge), J = b(J).pred;
                                for(var ee = (Q = Q.slice(Q.indexOf(J)))[0].id(), te = 0, ne = 2; ne < Q.length; ne += 2)Q[ne].id() < ee && (ee = Q[ne].id(), te = ne);
                                (Q = Q.slice(te).concat(Q.slice(0, te))).push(Q[0]);
                                var re = Q.map(function(e1) {
                                    return e1.id();
                                }).join(",");
                                -1 === O.indexOf(re) && (y.push(l.spawn(Q)), O.push(re));
                            }
                        }
                    }
                    return {
                        distanceTo: function distanceTo(e1) {
                            return b(x(e1)).dist;
                        },
                        pathTo: function pathTo(e1) {
                            for(var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o, a = [], i = x(e1);;){
                                if (null == i) return t.spawn();
                                var s = b(i), u = s.edge, c = s.pred;
                                if (a.unshift(i[0]), i.same(n) && a.length > 0) break;
                                null != u && a.unshift(u), i = c;
                            }
                            return l.spawn(a);
                        },
                        hasNegativeWeightCycle: v,
                        negativeWeightCycles: y
                    };
                }
            }, St = Math.sqrt(2), Pt = function collapse(e1, t, n) {
                0 === n.length && Ke("Karger-Stein must be run on a connected (sub)graph");
                for(var a = n[e1], i = a[1], o = a[2], s = t[i], l = t[o], u = n, c = u.length - 1; c >= 0; c--){
                    var d = u[c], h = d[1], p = d[2];
                    (t[h] === s && t[p] === l || t[h] === l && t[p] === s) && u.splice(c, 1);
                }
                for(var g = 0; g < u.length; g++){
                    var v = u[g];
                    v[1] === l ? (u[g] = v.slice(), u[g][1] = s) : v[2] === l && (u[g] = v.slice(), u[g][2] = s);
                }
                for(var y = 0; y < t.length; y++)t[y] === l && (t[y] = s);
                return u;
            }, _t = function contractUntil(e1, t, n, a) {
                for(; n > a;){
                    var i = Math.floor(Math.random() * t.length);
                    t = Pt(i, e1, t), n--;
                }
                return t;
            }, Bt = {
                kargerStein: function kargerStein() {
                    var e1 = this, t = this.byGroup(), n = t.nodes, a = t.edges;
                    a.unmergeBy(function(e1) {
                        return e1.isLoop();
                    });
                    var i = n.length, o = a.length, s = Math.ceil(Math.pow(Math.log(i) / Math.LN2, 2)), l = Math.floor(i / St);
                    if (!(i < 2)) {
                        for(var u = [], c = 0; c < o; c++){
                            var d = a[c];
                            u.push([
                                c,
                                n.indexOf(d.source()),
                                n.indexOf(d.target())
                            ]);
                        }
                        for(var h = 1 / 0, p = [], g = new Array(i), v = new Array(i), y = new Array(i), m = function copyNodesMap(e1, t) {
                            for(var n = 0; n < i; n++)t[n] = e1[n];
                        }, b = 0; b <= s; b++){
                            for(var x = 0; x < i; x++)v[x] = x;
                            var w = _t(v, u.slice(), i, l), E = w.slice();
                            m(v, y);
                            var T = _t(v, w, l, 2), k = _t(y, E, l, 2);
                            T.length <= k.length && T.length < h ? (h = T.length, p = T, m(v, g)) : k.length <= T.length && k.length < h && (h = k.length, p = k, m(y, g));
                        }
                        for(var S = this.spawn(p.map(function(e1) {
                            return a[e1[0]];
                        })), P = this.spawn(), _ = this.spawn(), D = g[0], M = 0; M < g.length; M++){
                            var I = g[M], R = n[M];
                            I === D ? P.merge(R) : _.merge(R);
                        }
                        var L = function constructComponent(t) {
                            var n = e1.spawn();
                            return t.forEach(function(t) {
                                n.merge(t), t.connectedEdges().forEach(function(t) {
                                    e1.contains(t) && !S.contains(t) && n.merge(t);
                                });
                            }), n;
                        }, N = [
                            L(P),
                            L(_)
                        ];
                        return {
                            cut: S,
                            components: N,
                            partition1: P,
                            partition2: _
                        };
                    }
                    Ke("At least 2 nodes are required for Karger-Stein algorithm");
                }
            }, Dt = function modelToRenderedPosition(e1, t, n) {
                return {
                    x: e1.x * t + n.x,
                    y: e1.y * t + n.y
                };
            }, At = function renderedToModelPosition(e1, t, n) {
                return {
                    x: (e1.x - n.x) / t,
                    y: (e1.y - n.y) / t
                };
            }, Mt = function array2point(e1) {
                return {
                    x: e1[0],
                    y: e1[1]
                };
            }, It = function getAngleFromDisp(e1, t) {
                return Math.atan2(t, e1) - Math.PI / 2;
            }, Rt = Math.log2 || function(e1) {
                return Math.log(e1) / Math.log(2);
            }, Lt = function signum(e1) {
                return e1 > 0 ? 1 : e1 < 0 ? -1 : 0;
            }, Nt = function dist(e1, t) {
                return Math.sqrt(Ot(e1, t));
            }, Ot = function sqdist(e1, t) {
                var n = t.x - e1.x, a = t.y - e1.y;
                return n * n + a * a;
            }, zt = function inPlaceSumNormalize(e1) {
                for(var t = e1.length, n = 0, a = 0; a < t; a++)n += e1[a];
                for(var i = 0; i < t; i++)e1[i] = e1[i] / n;
                return e1;
            }, Ft = function qbezierAt(e1, t, n, a) {
                return (1 - a) * (1 - a) * e1 + 2 * (1 - a) * a * t + a * a * n;
            }, Vt = function qbezierPtAt(e1, t, n, a) {
                return {
                    x: Ft(e1.x, t.x, n.x, a),
                    y: Ft(e1.y, t.y, n.y, a)
                };
            }, qt = function bound(e1, t, n) {
                return Math.max(e1, Math.min(n, t));
            }, jt = function makeBoundingBox(e1) {
                if (null == e1) return {
                    x1: 1 / 0,
                    y1: 1 / 0,
                    x2: -1 / 0,
                    y2: -1 / 0,
                    w: 0,
                    h: 0
                };
                if (null != e1.x1 && null != e1.y1) {
                    if (null != e1.x2 && null != e1.y2 && e1.x2 >= e1.x1 && e1.y2 >= e1.y1) return {
                        x1: e1.x1,
                        y1: e1.y1,
                        x2: e1.x2,
                        y2: e1.y2,
                        w: e1.x2 - e1.x1,
                        h: e1.y2 - e1.y1
                    };
                    if (null != e1.w && null != e1.h && e1.w >= 0 && e1.h >= 0) return {
                        x1: e1.x1,
                        y1: e1.y1,
                        x2: e1.x1 + e1.w,
                        y2: e1.y1 + e1.h,
                        w: e1.w,
                        h: e1.h
                    };
                }
            }, Wt = function updateBoundingBox(e1, t) {
                e1.x1 = Math.min(e1.x1, t.x1), e1.x2 = Math.max(e1.x2, t.x2), e1.w = e1.x2 - e1.x1, e1.y1 = Math.min(e1.y1, t.y1), e1.y2 = Math.max(e1.y2, t.y2), e1.h = e1.y2 - e1.y1;
            }, Ht = function expandBoundingBoxByPoint(e1, t, n) {
                e1.x1 = Math.min(e1.x1, t), e1.x2 = Math.max(e1.x2, t), e1.w = e1.x2 - e1.x1, e1.y1 = Math.min(e1.y1, n), e1.y2 = Math.max(e1.y2, n), e1.h = e1.y2 - e1.y1;
            }, Xt = function expandBoundingBox(e1) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return e1.x1 -= t, e1.x2 += t, e1.y1 -= t, e1.y2 += t, e1.w = e1.x2 - e1.x1, e1.h = e1.y2 - e1.y1, e1;
            }, Yt = function expandBoundingBoxSides(e1) {
                var t, n, a, i, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [
                    0
                ];
                if (1 === o.length) t = n = a = i = o[0];
                else if (2 === o.length) t = a = o[0], i = n = o[1];
                else if (4 === o.length) {
                    var s = _slicedToArray(o, 4);
                    t = s[0], n = s[1], a = s[2], i = s[3];
                }
                return e1.x1 -= i, e1.x2 += n, e1.y1 -= t, e1.y2 += a, e1.w = e1.x2 - e1.x1, e1.h = e1.y2 - e1.y1, e1;
            }, Kt = function assignBoundingBox(e1, t) {
                e1.x1 = t.x1, e1.y1 = t.y1, e1.x2 = t.x2, e1.y2 = t.y2, e1.w = e1.x2 - e1.x1, e1.h = e1.y2 - e1.y1;
            }, Gt = function boundingBoxesIntersect(e1, t) {
                return !(e1.x1 > t.x2) && !(t.x1 > e1.x2) && !(e1.x2 < t.x1) && !(t.x2 < e1.x1) && !(e1.y2 < t.y1) && !(t.y2 < e1.y1) && !(e1.y1 > t.y2) && !(t.y1 > e1.y2);
            }, Ut = function inBoundingBox(e1, t, n) {
                return e1.x1 <= t && t <= e1.x2 && e1.y1 <= n && n <= e1.y2;
            }, Zt = function pointInBoundingBox(e1, t) {
                return Ut(e1, t.x, t.y);
            }, $t = function boundingBoxInBoundingBox(e1, t) {
                return Ut(e1, t.x1, t.y1) && Ut(e1, t.x2, t.y2);
            }, Qt = function roundRectangleIntersectLine(e1, t, n, a, i, o, s) {
                var l, u, c = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "auto", d = "auto" === c ? bn(i, o) : c, h = i / 2, p = o / 2, g = (d = Math.min(d, h, p)) !== h, v = d !== p;
                if (g) {
                    var y = a - p - s;
                    if ((l = hn(e1, t, n, a, n - h + d - s, y, n + h - d + s, y, !1)).length > 0) return l;
                }
                if (v) {
                    var m = n + h + s;
                    if ((l = hn(e1, t, n, a, m, a - p + d - s, m, a + p - d + s, !1)).length > 0) return l;
                }
                if (g) {
                    var b = a + p + s;
                    if ((l = hn(e1, t, n, a, n - h + d - s, b, n + h - d + s, b, !1)).length > 0) return l;
                }
                if (v) {
                    var x = n - h - s;
                    if ((l = hn(e1, t, n, a, x, a - p + d - s, x, a + p - d + s, !1)).length > 0) return l;
                }
                var w = n - h + d, E = a - p + d;
                if ((u = cn(e1, t, n, a, w, E, d + s)).length > 0 && u[0] <= w && u[1] <= E) return [
                    u[0],
                    u[1]
                ];
                var T = n + h - d, k = a - p + d;
                if ((u = cn(e1, t, n, a, T, k, d + s)).length > 0 && u[0] >= T && u[1] <= k) return [
                    u[0],
                    u[1]
                ];
                var S = n + h - d, P = a + p - d;
                if ((u = cn(e1, t, n, a, S, P, d + s)).length > 0 && u[0] >= S && u[1] >= P) return [
                    u[0],
                    u[1]
                ];
                var _ = n - h + d, D = a + p - d;
                return (u = cn(e1, t, n, a, _, D, d + s)).length > 0 && u[0] <= _ && u[1] >= D ? [
                    u[0],
                    u[1]
                ] : [];
            }, Jt = function inLineVicinity(e1, t, n, a, i, o, s) {
                var l = s, u = Math.min(n, i), c = Math.max(n, i), d = Math.min(a, o), h = Math.max(a, o);
                return u - l <= e1 && e1 <= c + l && d - l <= t && t <= h + l;
            }, en = function inBezierVicinity(e1, t, n, a, i, o, s, l, u) {
                var c = Math.min(n, s, i) - u, d = Math.max(n, s, i) + u, h = Math.min(a, l, o) - u, p = Math.max(a, l, o) + u;
                return !(e1 < c || e1 > d || t < h || t > p);
            }, tn = function sqdistToQuadraticBezier(e1, t, n, a, i, o, s, l) {
                var u = [];
                !function solveCubic(e1, t, n, a, i) {
                    var o, s, l, u, c, d, h, p;
                    0 === e1 && (e1 = 1e-5), l = -27 * (a /= e1) + (t /= e1) * (9 * (n /= e1) - t * t * 2), o = (s = (3 * n - t * t) / 9) * s * s + (l /= 54) * l, i[1] = 0, h = t / 3, o > 0 ? (c = (c = l + Math.sqrt(o)) < 0 ? -Math.pow(-c, 1 / 3) : Math.pow(c, 1 / 3), d = (d = l - Math.sqrt(o)) < 0 ? -Math.pow(-d, 1 / 3) : Math.pow(d, 1 / 3), i[0] = -h + c + d, h += (c + d) / 2, i[4] = i[2] = -h, h = Math.sqrt(3) * (-d + c) / 2, i[3] = h, i[5] = -h) : (i[5] = i[3] = 0, 0 === o ? (p = l < 0 ? -Math.pow(-l, 1 / 3) : Math.pow(l, 1 / 3), i[0] = 2 * p - h, i[4] = i[2] = -(p + h)) : (u = (s = -s) * s * s, u = Math.acos(l / Math.sqrt(u)), p = 2 * Math.sqrt(s), i[0] = -h + p * Math.cos(u / 3), i[2] = -h + p * Math.cos((u + 2 * Math.PI) / 3), i[4] = -h + p * Math.cos((u + 4 * Math.PI) / 3)));
                }(1 * n * n - 4 * n * i + 2 * n * s + 4 * i * i - 4 * i * s + s * s + a * a - 4 * a * o + 2 * a * l + 4 * o * o - 4 * o * l + l * l, 9 * n * i - 3 * n * n - 3 * n * s - 6 * i * i + 3 * i * s + 9 * a * o - 3 * a * a - 3 * a * l - 6 * o * o + 3 * o * l, 3 * n * n - 6 * n * i + n * s - n * e1 + 2 * i * i + 2 * i * e1 - s * e1 + 3 * a * a - 6 * a * o + a * l - a * t + 2 * o * o + 2 * o * t - l * t, 1 * n * i - n * n + n * e1 - i * e1 + a * o - a * a + a * t - o * t, u);
                for(var c = [], d = 0; d < 6; d += 2)Math.abs(u[d + 1]) < 1e-7 && u[d] >= 0 && u[d] <= 1 && c.push(u[d]);
                c.push(1), c.push(0);
                for(var h, p, g, v = -1, y = 0; y < c.length; y++)h = Math.pow(1 - c[y], 2) * n + 2 * (1 - c[y]) * c[y] * i + c[y] * c[y] * s, p = Math.pow(1 - c[y], 2) * a + 2 * (1 - c[y]) * c[y] * o + c[y] * c[y] * l, g = Math.pow(h - e1, 2) + Math.pow(p - t, 2), v >= 0 ? g < v && (v = g) : v = g;
                return v;
            }, nn = function sqdistToFiniteLine(e1, t, n, a, i, o) {
                var s = [
                    e1 - n,
                    t - a
                ], l = [
                    i - n,
                    o - a
                ], u = l[0] * l[0] + l[1] * l[1], c = s[0] * s[0] + s[1] * s[1], d = s[0] * l[0] + s[1] * l[1], h = d * d / u;
                return d < 0 ? c : h > u ? (e1 - i) * (e1 - i) + (t - o) * (t - o) : c - h;
            }, rn = function pointInsidePolygonPoints(e1, t, n) {
                for(var a, i, o, s, l = 0, u = 0; u < n.length / 2; u++)if (a = n[2 * u], i = n[2 * u + 1], u + 1 < n.length / 2 ? (o = n[2 * (u + 1)], s = n[2 * (u + 1) + 1]) : (o = n[2 * (u + 1 - n.length / 2)], s = n[2 * (u + 1 - n.length / 2) + 1]), a == e1 && o == e1) ;
                else {
                    if (!(a >= e1 && e1 >= o || a <= e1 && e1 <= o)) continue;
                    (e1 - a) / (o - a) * (s - i) + i > t && l++;
                }
                return l % 2 != 0;
            }, an = function pointInsidePolygon(e1, t, n, a, i, o, s, l, u) {
                var c, d = new Array(n.length);
                null != l[0] ? (c = Math.atan(l[1] / l[0]), l[0] < 0 ? c += Math.PI / 2 : c = -c - Math.PI / 2) : c = l;
                for(var h, p = Math.cos(-c), g = Math.sin(-c), v = 0; v < d.length / 2; v++)d[2 * v] = o / 2 * (n[2 * v] * p - n[2 * v + 1] * g), d[2 * v + 1] = s / 2 * (n[2 * v + 1] * p + n[2 * v] * g), d[2 * v] += a, d[2 * v + 1] += i;
                if (u > 0) {
                    var y = ln(d, -u);
                    h = sn(y);
                } else h = d;
                return rn(e1, t, h);
            }, sn = function joinLines(e1) {
                for(var t, n, a, i, o, s, l, u, c = new Array(e1.length / 2), d = 0; d < e1.length / 4; d++){
                    t = e1[4 * d], n = e1[4 * d + 1], a = e1[4 * d + 2], i = e1[4 * d + 3], d < e1.length / 4 - 1 ? (o = e1[4 * (d + 1)], s = e1[4 * (d + 1) + 1], l = e1[4 * (d + 1) + 2], u = e1[4 * (d + 1) + 3]) : (o = e1[0], s = e1[1], l = e1[2], u = e1[3]);
                    var h = hn(t, n, a, i, o, s, l, u, !0);
                    c[2 * d] = h[0], c[2 * d + 1] = h[1];
                }
                return c;
            }, ln = function expandPolygon(e1, t) {
                for(var n, a, i, o, s = new Array(2 * e1.length), l = 0; l < e1.length / 2; l++){
                    n = e1[2 * l], a = e1[2 * l + 1], l < e1.length / 2 - 1 ? (i = e1[2 * (l + 1)], o = e1[2 * (l + 1) + 1]) : (i = e1[0], o = e1[1]);
                    var u = o - a, c = -(i - n), d = Math.sqrt(u * u + c * c), h = u / d, p = c / d;
                    s[4 * l] = n + h * t, s[4 * l + 1] = a + p * t, s[4 * l + 2] = i + h * t, s[4 * l + 3] = o + p * t;
                }
                return s;
            }, un = function checkInEllipse(e1, t, n, a, i, o, s) {
                return e1 -= i, t -= o, (e1 /= n / 2 + s) * e1 + (t /= a / 2 + s) * t <= 1;
            }, cn = function intersectLineCircle(e1, t, n, a, i, o, s) {
                var l = [
                    n - e1,
                    a - t
                ], u = [
                    e1 - i,
                    t - o
                ], c = l[0] * l[0] + l[1] * l[1], d = 2 * (u[0] * l[0] + u[1] * l[1]), h = d * d - 4 * c * (u[0] * u[0] + u[1] * u[1] - s * s);
                if (h < 0) return [];
                var p = (-d + Math.sqrt(h)) / (2 * c), g = (-d - Math.sqrt(h)) / (2 * c), v = Math.min(p, g), y = Math.max(p, g), m = [];
                if (v >= 0 && v <= 1 && m.push(v), y >= 0 && y <= 1 && m.push(y), 0 === m.length) return [];
                var b = m[0] * l[0] + e1, x = m[0] * l[1] + t;
                return m.length > 1 ? m[0] == m[1] ? [
                    b,
                    x
                ] : [
                    b,
                    x,
                    m[1] * l[0] + e1,
                    m[1] * l[1] + t
                ] : [
                    b,
                    x
                ];
            }, dn = function midOfThree(e1, t, n) {
                return t <= e1 && e1 <= n || n <= e1 && e1 <= t ? e1 : e1 <= t && t <= n || n <= t && t <= e1 ? t : n;
            }, hn = function finiteLinesIntersect(e1, t, n, a, i, o, s, l, u) {
                var c = e1 - i, d = n - e1, h = s - i, p = t - o, g = a - t, v = l - o, y = h * p - v * c, m = d * p - g * c, b = v * d - h * g;
                if (0 !== b) {
                    var x = y / b, w = m / b, E = -.001;
                    return E <= x && x <= 1.001 && E <= w && w <= 1.001 || u ? [
                        e1 + x * d,
                        t + x * g
                    ] : [];
                }
                return 0 === y || 0 === m ? dn(e1, n, s) === s ? [
                    s,
                    l
                ] : dn(e1, n, i) === i ? [
                    i,
                    o
                ] : dn(i, s, n) === n ? [
                    n,
                    a
                ] : [] : [];
            }, pn = function polygonIntersectLine(e1, t, n, a, i, o, s, l) {
                var u, c, d, h, p, g, v = [], y = new Array(n.length), m = !0;
                if (null == o && (m = !1), m) {
                    for(var b = 0; b < y.length / 2; b++)y[2 * b] = n[2 * b] * o + a, y[2 * b + 1] = n[2 * b + 1] * s + i;
                    if (l > 0) {
                        var x = ln(y, -l);
                        c = sn(x);
                    } else c = y;
                } else c = n;
                for(var w = 0; w < c.length / 2; w++)d = c[2 * w], h = c[2 * w + 1], w < c.length / 2 - 1 ? (p = c[2 * (w + 1)], g = c[2 * (w + 1) + 1]) : (p = c[0], g = c[1]), 0 !== (u = hn(e1, t, a, i, d, h, p, g)).length && v.push(u[0], u[1]);
                return v;
            }, gn = function shortenIntersection(e1, t, n) {
                var a = [
                    e1[0] - t[0],
                    e1[1] - t[1]
                ], i = Math.sqrt(a[0] * a[0] + a[1] * a[1]), o = (i - n) / i;
                return o < 0 && (o = 1e-5), [
                    t[0] + o * a[0],
                    t[1] + o * a[1]
                ];
            }, vn = function generateUnitNgonPointsFitToSquare(e1, t) {
                var n = mn(e1, t);
                return n = yn(n);
            }, yn = function fitPolygonToSquare(e1) {
                for(var t, n, a = e1.length / 2, i = 1 / 0, o = 1 / 0, s = -1 / 0, l = -1 / 0, u = 0; u < a; u++)t = e1[2 * u], n = e1[2 * u + 1], i = Math.min(i, t), s = Math.max(s, t), o = Math.min(o, n), l = Math.max(l, n);
                for(var c = 2 / (s - i), d = 2 / (l - o), h = 0; h < a; h++)t = e1[2 * h] = e1[2 * h] * c, n = e1[2 * h + 1] = e1[2 * h + 1] * d, i = Math.min(i, t), s = Math.max(s, t), o = Math.min(o, n), l = Math.max(l, n);
                if (o < -1) for(var p = 0; p < a; p++)n = e1[2 * p + 1] = e1[2 * p + 1] + (-1 - o);
                return e1;
            }, mn = function generateUnitNgonPoints(e1, t) {
                var n = 1 / e1 * 2 * Math.PI, a = e1 % 2 == 0 ? Math.PI / 2 + n / 2 : Math.PI / 2;
                a += t;
                for(var i, o = new Array(2 * e1), s = 0; s < e1; s++)i = s * n + a, o[2 * s] = Math.cos(i), o[2 * s + 1] = Math.sin(-i);
                return o;
            }, bn = function getRoundRectangleRadius(e1, t) {
                return Math.min(e1 / 4, t / 4, 8);
            }, xn = function getRoundPolygonRadius(e1, t) {
                return Math.min(e1 / 10, t / 10, 8);
            }, wn = function getBarrelCurveConstants(e1, t) {
                return {
                    heightOffset: Math.min(15, .05 * t),
                    widthOffset: Math.min(100, .25 * e1),
                    ctrlPtOffsetPct: .05
                };
            };
            function satPolygonIntersection(e1, t) {
                function getAxes(e1) {
                    for(var t = [], n = 0; n < e1.length; n++){
                        var a = e1[n], i = e1[(n + 1) % e1.length], o = {
                            x: i.x - a.x,
                            y: i.y - a.y
                        }, s = {
                            x: -o.y,
                            y: o.x
                        }, l = Math.sqrt(s.x * s.x + s.y * s.y);
                        t.push({
                            x: s.x / l,
                            y: s.y / l
                        });
                    }
                    return t;
                }
                function project(e1, t) {
                    var n, a = 1 / 0, i = -1 / 0, o = _createForOfIteratorHelper(e1);
                    try {
                        for(o.s(); !(n = o.n()).done;){
                            var s = n.value, l = s.x * t.x + s.y * t.y;
                            a = Math.min(a, l), i = Math.max(i, l);
                        }
                    } catch (e1) {
                        o.e(e1);
                    } finally{
                        o.f();
                    }
                    return {
                        min: a,
                        max: i
                    };
                }
                function overlaps(e1, t) {
                    return !(e1.max < t.min || t.max < e1.min);
                }
                var n, a = _createForOfIteratorHelper([].concat(_toConsumableArray(getAxes(e1)), _toConsumableArray(getAxes(t))));
                try {
                    for(a.s(); !(n = a.n()).done;){
                        var i = n.value;
                        if (!overlaps(project(e1, i), project(t, i))) return !1;
                    }
                } catch (e1) {
                    a.e(e1);
                } finally{
                    a.f();
                }
                return !0;
            }
            var En = et({
                dampingFactor: .8,
                precision: 1e-6,
                iterations: 200,
                weight: function weight(e1) {
                    return 1;
                }
            }), Cn = {
                pageRank: function pageRank(e1) {
                    for(var t = En(e1), n = t.dampingFactor, a = t.precision, i = t.iterations, o = t.weight, s = this._private.cy, l = this.byGroup(), u = l.nodes, c = l.edges, d = u.length, h = d * d, p = c.length, g = new Array(h), v = new Array(d), y = (1 - n) / d, m = 0; m < d; m++){
                        for(var b = 0; b < d; b++){
                            g[m * d + b] = 0;
                        }
                        v[m] = 0;
                    }
                    for(var x = 0; x < p; x++){
                        var w = c[x], E = w.data("source"), T = w.data("target");
                        if (E !== T) {
                            var k = u.indexOfId(E), S = u.indexOfId(T), P = o(w);
                            g[S * d + k] += P, v[k] += P;
                        }
                    }
                    for(var _ = 1 / d + y, D = 0; D < d; D++)if (0 === v[D]) for(var M = 0; M < d; M++){
                        g[M * d + D] = _;
                    }
                    else for(var I = 0; I < d; I++){
                        var R = I * d + D;
                        g[R] = g[R] / v[D] + y;
                    }
                    for(var L, N = new Array(d), O = new Array(d), z = 0; z < d; z++)N[z] = 1;
                    for(var V = 0; V < i; V++){
                        for(var q = 0; q < d; q++)O[q] = 0;
                        for(var j = 0; j < d; j++)for(var W = 0; W < d; W++){
                            var H = j * d + W;
                            O[j] += g[H] * N[W];
                        }
                        zt(O), L = N, N = O, O = L;
                        for(var X = 0, Y = 0; Y < d; Y++){
                            var K = L[Y] - N[Y];
                            X += K * K;
                        }
                        if (X < a) break;
                    }
                    return {
                        rank: function rank(e1) {
                            return e1 = s.collection(e1)[0], N[u.indexOf(e1)];
                        }
                    };
                }
            }, Tn = et({
                root: null,
                weight: function weight(e1) {
                    return 1;
                },
                directed: !1,
                alpha: 0
            }), kn = {
                degreeCentralityNormalized: function degreeCentralityNormalized(e1) {
                    e1 = Tn(e1);
                    var t = this.cy(), n = this.nodes(), a = n.length;
                    if (e1.directed) {
                        for(var i = {}, o = {}, s = 0, l = 0, u = 0; u < a; u++){
                            var c = n[u], d = c.id();
                            e1.root = c;
                            var h = this.degreeCentrality(e1);
                            s < h.indegree && (s = h.indegree), l < h.outdegree && (l = h.outdegree), i[d] = h.indegree, o[d] = h.outdegree;
                        }
                        return {
                            indegree: function indegree(e1) {
                                return 0 == s ? 0 : (X(e1) && (e1 = t.filter(e1)), i[e1.id()] / s);
                            },
                            outdegree: function outdegree(e1) {
                                return 0 === l ? 0 : (X(e1) && (e1 = t.filter(e1)), o[e1.id()] / l);
                            }
                        };
                    }
                    for(var p = {}, g = 0, v = 0; v < a; v++){
                        var y = n[v];
                        e1.root = y;
                        var m = this.degreeCentrality(e1);
                        g < m.degree && (g = m.degree), p[y.id()] = m.degree;
                    }
                    return {
                        degree: function degree(e1) {
                            return 0 === g ? 0 : (X(e1) && (e1 = t.filter(e1)), p[e1.id()] / g);
                        }
                    };
                },
                degreeCentrality: function degreeCentrality(e1) {
                    e1 = Tn(e1);
                    var t = this.cy(), n = this, a = e1, i = a.root, o = a.weight, s = a.directed, l = a.alpha;
                    if (i = t.collection(i)[0], s) {
                        for(var u = i.connectedEdges(), c = u.filter(function(e1) {
                            return e1.target().same(i) && n.has(e1);
                        }), d = u.filter(function(e1) {
                            return e1.source().same(i) && n.has(e1);
                        }), h = c.length, p = d.length, g = 0, v = 0, y = 0; y < c.length; y++)g += o(c[y]);
                        for(var m = 0; m < d.length; m++)v += o(d[m]);
                        return {
                            indegree: Math.pow(h, 1 - l) * Math.pow(g, l),
                            outdegree: Math.pow(p, 1 - l) * Math.pow(v, l)
                        };
                    }
                    for(var b = i.connectedEdges().intersection(n), x = b.length, w = 0, E = 0; E < b.length; E++)w += o(b[E]);
                    return {
                        degree: Math.pow(x, 1 - l) * Math.pow(w, l)
                    };
                }
            };
            kn.dc = kn.degreeCentrality, kn.dcn = kn.degreeCentralityNormalised = kn.degreeCentralityNormalized;
            var Sn = et({
                harmonic: !0,
                weight: function weight() {
                    return 1;
                },
                directed: !1,
                root: null
            }), Pn = {
                closenessCentralityNormalized: function closenessCentralityNormalized(e1) {
                    for(var t = Sn(e1), n = t.harmonic, a = t.weight, i = t.directed, o = this.cy(), s = {}, l = 0, u = this.nodes(), c = this.floydWarshall({
                        weight: a,
                        directed: i
                    }), d = 0; d < u.length; d++){
                        for(var h = 0, p = u[d], g = 0; g < u.length; g++)if (d !== g) {
                            var v = c.distance(p, u[g]);
                            h += n ? 1 / v : v;
                        }
                        n || (h = 1 / h), l < h && (l = h), s[p.id()] = h;
                    }
                    return {
                        closeness: function closeness(e1) {
                            return 0 == l ? 0 : (e1 = X(e1) ? o.filter(e1)[0].id() : e1.id(), s[e1] / l);
                        }
                    };
                },
                closenessCentrality: function closenessCentrality(e1) {
                    var t = Sn(e1), n = t.root, a = t.weight, i = t.directed, o = t.harmonic;
                    n = this.filter(n)[0];
                    for(var s = this.dijkstra({
                        root: n,
                        weight: a,
                        directed: i
                    }), l = 0, u = this.nodes(), c = 0; c < u.length; c++){
                        var d = u[c];
                        if (!d.same(n)) {
                            var h = s.distanceTo(d);
                            l += o ? 1 / h : h;
                        }
                    }
                    return o ? l : 1 / l;
                }
            };
            Pn.cc = Pn.closenessCentrality, Pn.ccn = Pn.closenessCentralityNormalised = Pn.closenessCentralityNormalized;
            var _n = et({
                weight: null,
                directed: !1
            }), Bn = {
                betweennessCentrality: function betweennessCentrality(e1) {
                    for(var t = _n(e1), n = t.directed, a = t.weight, i = null != a, o = this.cy(), s = this.nodes(), l = {}, u = {}, c = 0, d = function set(e1, t) {
                        u[e1] = t, t > c && (c = t);
                    }, h = function get(e1) {
                        return u[e1];
                    }, p = 0; p < s.length; p++){
                        var g = s[p], v = g.id();
                        l[v] = n ? g.outgoers().nodes() : g.openNeighborhood().nodes(), d(v, 0);
                    }
                    for(var y = function _loop() {
                        for(var e1 = s[m].id(), t = [], n = {}, u = {}, c = {}, p = new vt(function(e1, t) {
                            return c[e1] - c[t];
                        }), g = 0; g < s.length; g++){
                            var v = s[g].id();
                            n[v] = [], u[v] = 0, c[v] = 1 / 0;
                        }
                        for(u[e1] = 1, c[e1] = 0, p.push(e1); !p.empty();){
                            var y = p.pop();
                            if (t.push(y), i) for(var b = 0; b < l[y].length; b++){
                                var x = l[y][b], w = o.getElementById(y), E = void 0;
                                E = w.edgesTo(x).length > 0 ? w.edgesTo(x)[0] : x.edgesTo(w)[0];
                                var T = a(E);
                                x = x.id(), c[x] > c[y] + T && (c[x] = c[y] + T, p.nodes.indexOf(x) < 0 ? p.push(x) : p.updateItem(x), u[x] = 0, n[x] = []), c[x] == c[y] + T && (u[x] = u[x] + u[y], n[x].push(y));
                            }
                            else for(var k = 0; k < l[y].length; k++){
                                var S = l[y][k].id();
                                c[S] == 1 / 0 && (p.push(S), c[S] = c[y] + 1), c[S] == c[y] + 1 && (u[S] = u[S] + u[y], n[S].push(y));
                            }
                        }
                        for(var P = {}, _ = 0; _ < s.length; _++)P[s[_].id()] = 0;
                        for(; t.length > 0;){
                            for(var D = t.pop(), M = 0; M < n[D].length; M++){
                                var I = n[D][M];
                                P[I] = P[I] + u[I] / u[D] * (1 + P[D]);
                            }
                            D != s[m].id() && d(D, h(D) + P[D]);
                        }
                    }, m = 0; m < s.length; m++)y();
                    var b = {
                        betweenness: function betweenness(e1) {
                            var t = o.collection(e1).id();
                            return h(t);
                        },
                        betweennessNormalized: function betweennessNormalized(e1) {
                            if (0 == c) return 0;
                            var t = o.collection(e1).id();
                            return h(t) / c;
                        }
                    };
                    return b.betweennessNormalised = b.betweennessNormalized, b;
                }
            };
            Bn.bc = Bn.betweennessCentrality;
            var Dn = et({
                expandFactor: 2,
                inflateFactor: 2,
                multFactor: 1,
                maxIterations: 20,
                attributes: [
                    function(e1) {
                        return 1;
                    }
                ]
            }), An = function getSimilarity(e1, t) {
                for(var n = 0, a = 0; a < t.length; a++)n += t[a](e1);
                return n;
            }, Mn = function normalize(e1, t) {
                for(var n, a = 0; a < t; a++){
                    n = 0;
                    for(var i = 0; i < t; i++)n += e1[i * t + a];
                    for(var o = 0; o < t; o++)e1[o * t + a] = e1[o * t + a] / n;
                }
            }, In = function mmult(e1, t, n) {
                for(var a = new Array(n * n), i = 0; i < n; i++){
                    for(var o = 0; o < n; o++)a[i * n + o] = 0;
                    for(var s = 0; s < n; s++)for(var l = 0; l < n; l++)a[i * n + l] += e1[i * n + s] * t[s * n + l];
                }
                return a;
            }, Rn = function expand(e1, t, n) {
                for(var a = e1.slice(0), i = 1; i < n; i++)e1 = In(e1, a, t);
                return e1;
            }, Ln = function inflate(e1, t, n) {
                for(var a = new Array(t * t), i = 0; i < t * t; i++)a[i] = Math.pow(e1[i], n);
                return Mn(a, t), a;
            }, Nn = function hasConverged(e1, t, n, a) {
                for(var i = 0; i < n; i++){
                    if (Math.round(e1[i] * Math.pow(10, a)) / Math.pow(10, a) !== Math.round(t[i] * Math.pow(10, a)) / Math.pow(10, a)) return !1;
                }
                return !0;
            }, On = function isDuplicate(e1, t) {
                for(var n = 0; n < e1.length; n++)if (!t[n] || e1[n].id() !== t[n].id()) return !1;
                return !0;
            }, zn = function markovClustering(e1) {
                for(var t = this.nodes(), n = this.edges(), a = this.cy(), i = function setOptions(e1) {
                    return Dn(e1);
                }(e1), o = {}, s = 0; s < t.length; s++)o[t[s].id()] = s;
                for(var l, u = t.length, c = u * u, d = new Array(c), h = 0; h < c; h++)d[h] = 0;
                for(var p = 0; p < n.length; p++){
                    var g = n[p], v = o[g.source().id()], y = o[g.target().id()], m = An(g, i.attributes);
                    d[v * u + y] += m, d[y * u + v] += m;
                }
                !function addLoops(e1, t, n) {
                    for(var a = 0; a < t; a++)e1[a * t + a] = n;
                }(d, u, i.multFactor), Mn(d, u);
                for(var b = !0, x = 0; b && x < i.maxIterations;)b = !1, l = Rn(d, u, i.expandFactor), d = Ln(l, u, i.inflateFactor), Nn(d, l, c, 4) || (b = !0), x++;
                var w = function assign(e1, t, n, a) {
                    for(var i = [], o = 0; o < t; o++){
                        for(var s = [], l = 0; l < t; l++)Math.round(1e3 * e1[o * t + l]) / 1e3 > 0 && s.push(n[l]);
                        0 !== s.length && i.push(a.collection(s));
                    }
                    return i;
                }(d, u, t, a);
                return w = function removeDuplicates(e1) {
                    for(var t = 0; t < e1.length; t++)for(var n = 0; n < e1.length; n++)t != n && On(e1[t], e1[n]) && e1.splice(n, 1);
                    return e1;
                }(w), w;
            }, Fn = {
                markovClustering: zn,
                mcl: zn
            }, Vn = function identity(e1) {
                return e1;
            }, qn = function absDiff(e1, t) {
                return Math.abs(t - e1);
            }, jn = function addAbsDiff(e1, t, n) {
                return e1 + qn(t, n);
            }, Wn = function addSquaredDiff(e1, t, n) {
                return e1 + Math.pow(n - t, 2);
            }, Hn = function sqrt(e1) {
                return Math.sqrt(e1);
            }, Xn = function maxAbsDiff(e1, t, n) {
                return Math.max(e1, qn(t, n));
            }, Yn = function getDistance(e1, t, n, a, i) {
                for(var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Vn, s = a, l = 0; l < e1; l++)s = i(s, t(l), n(l));
                return o(s);
            }, Kn = {
                euclidean: function euclidean(e1, t, n) {
                    return e1 >= 2 ? Yn(e1, t, n, 0, Wn, Hn) : Yn(e1, t, n, 0, jn);
                },
                squaredEuclidean: function squaredEuclidean(e1, t, n) {
                    return Yn(e1, t, n, 0, Wn);
                },
                manhattan: function manhattan(e1, t, n) {
                    return Yn(e1, t, n, 0, jn);
                },
                max: function max(e1, t, n) {
                    return Yn(e1, t, n, -1 / 0, Xn);
                }
            };
            function clusteringDistance(e1, t, n, a, i, o) {
                var s;
                return s = Y(e1) ? e1 : Kn[e1] || Kn.euclidean, 0 === t && Y(e1) ? s(i, o) : s(t, n, a, i, o);
            }
            Kn["squared-euclidean"] = Kn.squaredEuclidean, Kn.squaredeuclidean = Kn.squaredEuclidean;
            var Gn = et({
                k: 2,
                m: 2,
                sensitivityThreshold: 1e-4,
                distance: "euclidean",
                maxIterations: 10,
                attributes: [],
                testMode: !1,
                testCentroids: null
            }), Un = function setOptions(e1) {
                return Gn(e1);
            }, Zn = function getDist(e1, t, n, a, i) {
                var o = "kMedoids" !== i ? function(e1) {
                    return n[e1];
                } : function(e1) {
                    return a[e1](n);
                }, s = n, l = t;
                return clusteringDistance(e1, a.length, o, function getQ(e1) {
                    return a[e1](t);
                }, s, l);
            }, $n = function randomCentroids(e1, t, n) {
                for(var a = n.length, i = new Array(a), o = new Array(a), s = new Array(t), l = null, u = 0; u < a; u++)i[u] = e1.min(n[u]).value, o[u] = e1.max(n[u]).value;
                for(var c = 0; c < t; c++){
                    l = [];
                    for(var d = 0; d < a; d++)l[d] = Math.random() * (o[d] - i[d]) + i[d];
                    s[c] = l;
                }
                return s;
            }, Qn = function classify(e1, t, n, a, i) {
                for(var o = 1 / 0, s = 0, l = 0; l < t.length; l++){
                    var u = Zn(n, e1, t[l], a, i);
                    u < o && (o = u, s = l);
                }
                return s;
            }, Jn = function buildCluster(e1, t, n) {
                for(var a = [], i = null, o = 0; o < t.length; o++)n[(i = t[o]).id()] === e1 && a.push(i);
                return a;
            }, er = function haveValuesConverged(e1, t, n) {
                return Math.abs(t - e1) <= n;
            }, tr = function haveMatricesConverged(e1, t, n) {
                for(var a = 0; a < e1.length; a++)for(var i = 0; i < e1[a].length; i++){
                    if (Math.abs(e1[a][i] - t[a][i]) > n) return !1;
                }
                return !0;
            }, nr = function seenBefore(e1, t, n) {
                for(var a = 0; a < n; a++)if (e1 === t[a]) return !0;
                return !1;
            }, rr = function randomMedoids(e1, t) {
                var n = new Array(t);
                if (e1.length < 50) for(var a = 0; a < t; a++){
                    for(var i = e1[Math.floor(Math.random() * e1.length)]; nr(i, n, a);)i = e1[Math.floor(Math.random() * e1.length)];
                    n[a] = i;
                }
                else for(var o = 0; o < t; o++)n[o] = e1[Math.floor(Math.random() * e1.length)];
                return n;
            }, ar = function findCost(e1, t, n) {
                for(var a = 0, i = 0; i < t.length; i++)a += Zn("manhattan", t[i], e1, n, "kMedoids");
                return a;
            }, ir = function updateCentroids(e1, t, n, a, i) {
                for(var o, s, l = 0; l < t.length; l++)for(var u = 0; u < e1.length; u++)a[l][u] = Math.pow(n[l][u], i.m);
                for(var c = 0; c < e1.length; c++)for(var d = 0; d < i.attributes.length; d++){
                    o = 0, s = 0;
                    for(var h = 0; h < t.length; h++)o += a[h][c] * i.attributes[d](t[h]), s += a[h][c];
                    e1[c][d] = o / s;
                }
            }, or = function updateMembership(e1, t, n, a, i) {
                for(var o = 0; o < e1.length; o++)t[o] = e1[o].slice();
                for(var s, l, u, c = 2 / (i.m - 1), d = 0; d < n.length; d++)for(var h = 0; h < a.length; h++){
                    s = 0;
                    for(var p = 0; p < n.length; p++)l = Zn(i.distance, a[h], n[d], i.attributes, "cmeans"), u = Zn(i.distance, a[h], n[p], i.attributes, "cmeans"), s += Math.pow(l / u, c);
                    e1[h][d] = 1 / s;
                }
            }, sr = function fuzzyCMeans(e1) {
                var t, n, a, i, o, s = this.cy(), l = this.nodes(), u = Un(e1);
                i = new Array(l.length);
                for(var c = 0; c < l.length; c++)i[c] = new Array(u.k);
                a = new Array(l.length);
                for(var d = 0; d < l.length; d++)a[d] = new Array(u.k);
                for(var h = 0; h < l.length; h++){
                    for(var p = 0, g = 0; g < u.k; g++)a[h][g] = Math.random(), p += a[h][g];
                    for(var v = 0; v < u.k; v++)a[h][v] = a[h][v] / p;
                }
                n = new Array(u.k);
                for(var y = 0; y < u.k; y++)n[y] = new Array(u.attributes.length);
                o = new Array(l.length);
                for(var m = 0; m < l.length; m++)o[m] = new Array(u.k);
                for(var b = !0, x = 0; b && x < u.maxIterations;)b = !1, ir(n, l, a, o, u), or(a, i, n, l, u), tr(a, i, u.sensitivityThreshold) || (b = !0), x++;
                return t = function assign(e1, t, n, a) {
                    for(var i, o, s = new Array(n.k), l = 0; l < s.length; l++)s[l] = [];
                    for(var u = 0; u < t.length; u++){
                        i = -1 / 0, o = -1;
                        for(var c = 0; c < t[0].length; c++)t[u][c] > i && (i = t[u][c], o = c);
                        s[o].push(e1[u]);
                    }
                    for(var d = 0; d < s.length; d++)s[d] = a.collection(s[d]);
                    return s;
                }(l, a, u, s), {
                    clusters: t,
                    degreeOfMembership: a
                };
            }, lr = {
                kMeans: function kMeans(e1) {
                    var t, n = this.cy(), a = this.nodes(), i = null, o = Un(e1), s = new Array(o.k), l = {};
                    o.testMode ? "number" == typeof o.testCentroids ? (o.testCentroids, t = $n(a, o.k, o.attributes)) : t = "object" === _typeof(o.testCentroids) ? o.testCentroids : $n(a, o.k, o.attributes) : t = $n(a, o.k, o.attributes);
                    for(var u = !0, c = 0; u && c < o.maxIterations;){
                        for(var d = 0; d < a.length; d++)l[(i = a[d]).id()] = Qn(i, t, o.distance, o.attributes, "kMeans");
                        u = !1;
                        for(var h = 0; h < o.k; h++){
                            var p = Jn(h, a, l);
                            if (0 !== p.length) {
                                for(var g = o.attributes.length, v = t[h], y = new Array(g), m = new Array(g), b = 0; b < g; b++){
                                    m[b] = 0;
                                    for(var x = 0; x < p.length; x++)i = p[x], m[b] += o.attributes[b](i);
                                    y[b] = m[b] / p.length, er(y[b], v[b], o.sensitivityThreshold) || (u = !0);
                                }
                                t[h] = y, s[h] = n.collection(p);
                            }
                        }
                        c++;
                    }
                    return s;
                },
                kMedoids: function kMedoids(e1) {
                    var t, n, a = this.cy(), i = this.nodes(), o = null, s = Un(e1), l = new Array(s.k), u = {}, c = new Array(s.k);
                    s.testMode ? "number" == typeof s.testCentroids || (t = "object" === _typeof(s.testCentroids) ? s.testCentroids : rr(i, s.k)) : t = rr(i, s.k);
                    for(var d = !0, h = 0; d && h < s.maxIterations;){
                        for(var p = 0; p < i.length; p++)u[(o = i[p]).id()] = Qn(o, t, s.distance, s.attributes, "kMedoids");
                        d = !1;
                        for(var g = 0; g < t.length; g++){
                            var v = Jn(g, i, u);
                            if (0 !== v.length) {
                                c[g] = ar(t[g], v, s.attributes);
                                for(var y = 0; y < v.length; y++)(n = ar(v[y], v, s.attributes)) < c[g] && (c[g] = n, t[g] = v[y], d = !0);
                                l[g] = a.collection(v);
                            }
                        }
                        h++;
                    }
                    return l;
                },
                fuzzyCMeans: sr,
                fcm: sr
            }, ur = et({
                distance: "euclidean",
                linkage: "min",
                mode: "threshold",
                threshold: 1 / 0,
                addDendrogram: !1,
                dendrogramDepth: 0,
                attributes: []
            }), cr = {
                single: "min",
                complete: "max"
            }, dr = function mergeClosest(e1, t, n, a, i) {
                for(var o, s = 0, l = 1 / 0, u = i.attributes, c = function getDist(e1, t) {
                    return clusteringDistance(i.distance, u.length, function(t) {
                        return u[t](e1);
                    }, function(e1) {
                        return u[e1](t);
                    }, e1, t);
                }, d = 0; d < e1.length; d++){
                    var h = e1[d].key, p = n[h][a[h]];
                    p < l && (s = h, l = p);
                }
                if ("threshold" === i.mode && l >= i.threshold || "dendrogram" === i.mode && 1 === e1.length) return !1;
                var g, v = t[s], y = t[a[s]];
                g = "dendrogram" === i.mode ? {
                    left: v,
                    right: y,
                    key: v.key
                } : {
                    value: v.value.concat(y.value),
                    key: v.key
                }, e1[v.index] = g, e1.splice(y.index, 1), t[v.key] = g;
                for(var m = 0; m < e1.length; m++){
                    var b = e1[m];
                    v.key === b.key ? o = 1 / 0 : "min" === i.linkage ? (o = n[v.key][b.key], n[v.key][b.key] > n[y.key][b.key] && (o = n[y.key][b.key])) : "max" === i.linkage ? (o = n[v.key][b.key], n[v.key][b.key] < n[y.key][b.key] && (o = n[y.key][b.key])) : o = "mean" === i.linkage ? (n[v.key][b.key] * v.size + n[y.key][b.key] * y.size) / (v.size + y.size) : "dendrogram" === i.mode ? c(b.value, v.value) : c(b.value[0], v.value[0]), n[v.key][b.key] = n[b.key][v.key] = o;
                }
                for(var x = 0; x < e1.length; x++){
                    var w = e1[x].key;
                    if (a[w] === v.key || a[w] === y.key) {
                        for(var E = w, T = 0; T < e1.length; T++){
                            var k = e1[T].key;
                            n[w][k] < n[w][E] && (E = k);
                        }
                        a[w] = E;
                    }
                    e1[x].index = x;
                }
                return v.key = y.key = v.index = y.index = null, !0;
            }, hr = function getAllChildren(e1, t, n) {
                e1 && (e1.value ? t.push(e1.value) : (e1.left && hr(e1.left, t), e1.right && hr(e1.right, t)));
            }, pr = function buildDendrogram(e1, t) {
                if (!e1) return "";
                if (e1.left && e1.right) {
                    var n = pr(e1.left, t), a = pr(e1.right, t), i = t.add({
                        group: "nodes",
                        data: {
                            id: n + "," + a
                        }
                    });
                    return t.add({
                        group: "edges",
                        data: {
                            source: n,
                            target: i.id()
                        }
                    }), t.add({
                        group: "edges",
                        data: {
                            source: a,
                            target: i.id()
                        }
                    }), i.id();
                }
                return e1.value ? e1.value.id() : void 0;
            }, fr = function buildClustersFromTree(e1, t, n) {
                if (!e1) return [];
                var a = [], i = [], o = [];
                return 0 === t ? (e1.left && hr(e1.left, a), e1.right && hr(e1.right, i), o = a.concat(i), [
                    n.collection(o)
                ]) : 1 === t ? e1.value ? [
                    n.collection(e1.value)
                ] : (e1.left && hr(e1.left, a), e1.right && hr(e1.right, i), [
                    n.collection(a),
                    n.collection(i)
                ]) : e1.value ? [
                    n.collection(e1.value)
                ] : (e1.left && (a = fr(e1.left, t - 1, n)), e1.right && (i = fr(e1.right, t - 1, n)), a.concat(i));
            }, gr = function hierarchicalClustering(e1) {
                for(var t = this.cy(), n = this.nodes(), a = function setOptions(e1) {
                    var t = ur(e1), n = cr[t.linkage];
                    return null != n && (t.linkage = n), t;
                }(e1), i = a.attributes, o = function getDist(e1, t) {
                    return clusteringDistance(a.distance, i.length, function(t) {
                        return i[t](e1);
                    }, function(e1) {
                        return i[e1](t);
                    }, e1, t);
                }, s = [], l = [], u = [], c = [], d = 0; d < n.length; d++){
                    var h = {
                        value: "dendrogram" === a.mode ? n[d] : [
                            n[d]
                        ],
                        key: d,
                        index: d
                    };
                    s[d] = h, c[d] = h, l[d] = [], u[d] = 0;
                }
                for(var p = 0; p < s.length; p++)for(var g = 0; g <= p; g++){
                    var v = void 0;
                    v = "dendrogram" === a.mode ? p === g ? 1 / 0 : o(s[p].value, s[g].value) : p === g ? 1 / 0 : o(s[p].value[0], s[g].value[0]), l[p][g] = v, l[g][p] = v, v < l[p][u[p]] && (u[p] = g);
                }
                for(var y, m = dr(s, c, l, u, a); m;)m = dr(s, c, l, u, a);
                return "dendrogram" === a.mode ? (y = fr(s[0], a.dendrogramDepth, t), a.addDendrogram && pr(s[0], t)) : (y = new Array(s.length), s.forEach(function(e1, n) {
                    e1.key = e1.index = null, y[n] = t.collection(e1.value);
                })), y;
            }, vr = {
                hierarchicalClustering: gr,
                hca: gr
            }, yr = et({
                distance: "euclidean",
                preference: "median",
                damping: .8,
                maxIterations: 1e3,
                minIterations: 100,
                attributes: []
            }), mr = function getSimilarity(e1, t, n, a) {
                var i = function attr(e1, t) {
                    return a[t](e1);
                };
                return -clusteringDistance(e1, a.length, function(e1) {
                    return i(t, e1);
                }, function(e1) {
                    return i(n, e1);
                }, t, n);
            }, br = function getPreference(e1, t) {
                var n = null;
                return n = "median" === t ? function median(e1) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e1.length, a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], i = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                    arguments.length > 3 && void 0 !== arguments[3] && !arguments[3] ? (n < e1.length && e1.splice(n, e1.length - n), t > 0 && e1.splice(0, t)) : e1 = e1.slice(t, n);
                    for(var o = 0, s = e1.length - 1; s >= 0; s--){
                        var l = e1[s];
                        i ? isFinite(l) || (e1[s] = -1 / 0, o++) : e1.splice(s, 1);
                    }
                    a && e1.sort(function(e1, t) {
                        return e1 - t;
                    });
                    var u = e1.length, c = Math.floor(u / 2);
                    return u % 2 != 0 ? e1[c + 1 + o] : (e1[c - 1 + o] + e1[c + o]) / 2;
                }(e1) : "mean" === t ? function mean(e1) {
                    for(var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e1.length, a = 0, i = 0, o = t; o < n; o++){
                        var s = e1[o];
                        isFinite(s) && (a += s, i++);
                    }
                    return a / i;
                }(e1) : "min" === t ? function min(e1) {
                    for(var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e1.length, min = 1 / 0, a = t; a < n; a++){
                        var i = e1[a];
                        isFinite(i) && (min = Math.min(i, min));
                    }
                    return min;
                }(e1) : "max" === t ? function max(e1) {
                    for(var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e1.length, max = -1 / 0, a = t; a < n; a++){
                        var i = e1[a];
                        isFinite(i) && (max = Math.max(i, max));
                    }
                    return max;
                }(e1) : t, n;
            }, xr = function assignClusters(e1, t, n) {
                for(var a = [], i = 0; i < e1; i++){
                    for(var o = -1, s = -1 / 0, l = 0; l < n.length; l++){
                        var u = n[l];
                        t[i * e1 + u] > s && (o = u, s = t[i * e1 + u]);
                    }
                    o > 0 && a.push(o);
                }
                for(var c = 0; c < n.length; c++)a[n[c]] = n[c];
                return a;
            }, wr = function affinityPropagation(e1) {
                for(var t, n, a, i, o, s, l = this.cy(), u = this.nodes(), c = function setOptions(e1) {
                    var t = e1.damping, n = e1.preference;
                    .5 <= t && t < 1 || Ke("Damping must range on [0.5, 1).  Got: ".concat(t));
                    var a = [
                        "median",
                        "mean",
                        "min",
                        "max"
                    ];
                    return a.some(function(e1) {
                        return e1 === n;
                    }) || U(n) || Ke("Preference must be one of [".concat(a.map(function(e1) {
                        return "'".concat(e1, "'");
                    }).join(", "), "] or a number.  Got: ").concat(n)), yr(e1);
                }(e1), d = {}, h = 0; h < u.length; h++)d[u[h].id()] = h;
                n = (t = u.length) * t, a = new Array(n);
                for(var p = 0; p < n; p++)a[p] = -1 / 0;
                for(var g = 0; g < t; g++)for(var v = 0; v < t; v++)g !== v && (a[g * t + v] = mr(c.distance, u[g], u[v], c.attributes));
                i = br(a, c.preference);
                for(var y = 0; y < t; y++)a[y * t + y] = i;
                o = new Array(n);
                for(var m = 0; m < n; m++)o[m] = 0;
                s = new Array(n);
                for(var b = 0; b < n; b++)s[b] = 0;
                for(var x = new Array(t), w = new Array(t), E = new Array(t), T = 0; T < t; T++)x[T] = 0, w[T] = 0, E[T] = 0;
                for(var k, S = new Array(t * c.minIterations), P = 0; P < S.length; P++)S[P] = 0;
                for(k = 0; k < c.maxIterations; k++){
                    for(var _ = 0; _ < t; _++){
                        for(var D = -1 / 0, M = -1 / 0, I = -1, R = 0, L = 0; L < t; L++)x[L] = o[_ * t + L], (R = s[_ * t + L] + a[_ * t + L]) >= D ? (M = D, D = R, I = L) : R > M && (M = R);
                        for(var N = 0; N < t; N++)o[_ * t + N] = (1 - c.damping) * (a[_ * t + N] - D) + c.damping * x[N];
                        o[_ * t + I] = (1 - c.damping) * (a[_ * t + I] - M) + c.damping * x[I];
                    }
                    for(var O = 0; O < t; O++){
                        for(var z = 0, V = 0; V < t; V++)x[V] = s[V * t + O], w[V] = Math.max(0, o[V * t + O]), z += w[V];
                        z -= w[O], w[O] = o[O * t + O], z += w[O];
                        for(var q = 0; q < t; q++)s[q * t + O] = (1 - c.damping) * Math.min(0, z - w[q]) + c.damping * x[q];
                        s[O * t + O] = (1 - c.damping) * (z - w[O]) + c.damping * x[O];
                    }
                    for(var j = 0, W = 0; W < t; W++){
                        var H = s[W * t + W] + o[W * t + W] > 0 ? 1 : 0;
                        S[k % c.minIterations * t + W] = H, j += H;
                    }
                    if (j > 0 && (k >= c.minIterations - 1 || k == c.maxIterations - 1)) {
                        for(var X = 0, Y = 0; Y < t; Y++){
                            E[Y] = 0;
                            for(var K = 0; K < c.minIterations; K++)E[Y] += S[K * t + Y];
                            0 !== E[Y] && E[Y] !== c.minIterations || X++;
                        }
                        if (X === t) break;
                    }
                }
                for(var G = function findExemplars(e1, t, n) {
                    for(var a = [], i = 0; i < e1; i++)t[i * e1 + i] + n[i * e1 + i] > 0 && a.push(i);
                    return a;
                }(t, o, s), Z = function assign(e1, t, n) {
                    for(var a = xr(e1, t, n), i = 0; i < n.length; i++){
                        for(var o = [], s = 0; s < a.length; s++)a[s] === n[i] && o.push(s);
                        for(var l = -1, u = -1 / 0, c = 0; c < o.length; c++){
                            for(var d = 0, h = 0; h < o.length; h++)d += t[o[h] * e1 + o[c]];
                            d > u && (l = c, u = d);
                        }
                        n[i] = o[l];
                    }
                    return xr(e1, t, n);
                }(t, a, G), Q = {}, J = 0; J < G.length; J++)Q[G[J]] = [];
                for(var ee = 0; ee < u.length; ee++){
                    var te = Z[d[u[ee].id()]];
                    null != te && Q[te].push(u[ee]);
                }
                for(var ne = new Array(G.length), re = 0; re < G.length; re++)ne[re] = l.collection(Q[G[re]]);
                return ne;
            }, Er = {
                affinityPropagation: wr,
                ap: wr
            }, Cr = et({
                root: void 0,
                directed: !1
            }), Tr = function hopcroftTarjanBiconnected() {
                var e1 = this, t = {}, n = 0, a = 0, i = [], o = [], s = {}, l = function biconnectedSearch(u, c, d) {
                    u === d && (a += 1), t[c] = {
                        id: n,
                        low: n++,
                        cutVertex: !1
                    };
                    var h, p, g, v, y = e1.getElementById(c).connectedEdges().intersection(e1);
                    0 === y.size() ? i.push(e1.spawn(e1.getElementById(c))) : y.forEach(function(n) {
                        h = n.source().id(), p = n.target().id(), (g = h === c ? p : h) !== d && (v = n.id(), s[v] || (s[v] = !0, o.push({
                            x: c,
                            y: g,
                            edge: n
                        })), g in t ? t[c].low = Math.min(t[c].low, t[g].id) : (l(u, g, c), t[c].low = Math.min(t[c].low, t[g].low), t[c].id <= t[g].low && (t[c].cutVertex = !0, function buildComponent(n, a) {
                            for(var s = o.length - 1, l = [], u = e1.spawn(); o[s].x != n || o[s].y != a;)l.push(o.pop().edge), s--;
                            l.push(o.pop().edge), l.forEach(function(n) {
                                var a = n.connectedNodes().intersection(e1);
                                u.merge(n), a.forEach(function(n) {
                                    var a = n.id(), i = n.connectedEdges().intersection(e1);
                                    u.merge(n), t[a].cutVertex ? u.merge(i.filter(function(e1) {
                                        return e1.isLoop();
                                    })) : u.merge(i);
                                });
                            }), i.push(u);
                        }(c, g))));
                    });
                };
                e1.forEach(function(e1) {
                    if (e1.isNode()) {
                        var n = e1.id();
                        n in t || (a = 0, l(n, n), t[n].cutVertex = a > 1);
                    }
                });
                var u = Object.keys(t).filter(function(e1) {
                    return t[e1].cutVertex;
                }).map(function(t) {
                    return e1.getElementById(t);
                });
                return {
                    cut: e1.spawn(u),
                    components: i
                };
            }, kr = function tarjanStronglyConnected() {
                var e1 = this, t = {}, n = 0, a = [], i = [], o = e1.spawn(e1), s = function stronglyConnectedSearch(l) {
                    if (i.push(l), t[l] = {
                        index: n,
                        low: n++,
                        explored: !1
                    }, e1.getElementById(l).connectedEdges().intersection(e1).forEach(function(e1) {
                        var n = e1.target().id();
                        n !== l && (n in t || s(n), t[n].explored || (t[l].low = Math.min(t[l].low, t[n].low)));
                    }), t[l].index === t[l].low) {
                        for(var u = e1.spawn();;){
                            var c = i.pop();
                            if (u.merge(e1.getElementById(c)), t[c].low = t[l].index, t[c].explored = !0, c === l) break;
                        }
                        var d = u.edgesWith(u), h = u.merge(d);
                        a.push(h), o = o.difference(h);
                    }
                };
                return e1.forEach(function(e1) {
                    if (e1.isNode()) {
                        var n = e1.id();
                        n in t || s(n);
                    }
                }), {
                    cut: o,
                    components: a
                };
            }, Sr = {};
            [
                ct,
                mt,
                bt,
                wt,
                Ct,
                kt,
                Bt,
                Cn,
                kn,
                Pn,
                Bn,
                Fn,
                lr,
                vr,
                Er,
                {
                    hierholzer: function hierholzer(e1) {
                        if (!G(e1)) {
                            var t = arguments;
                            e1 = {
                                root: t[0],
                                directed: t[1]
                            };
                        }
                        var n, a, i, o = Cr(e1), s = o.root, l = o.directed, u = this, c = !1;
                        s && (i = X(s) ? this.filter(s)[0].id() : s[0].id());
                        var d = {}, h = {};
                        l ? u.forEach(function(e1) {
                            var t = e1.id();
                            if (e1.isNode()) {
                                var i = e1.indegree(!0), o = e1.outdegree(!0), s = i - o, l = o - i;
                                1 == s ? n ? c = !0 : n = t : 1 == l ? a ? c = !0 : a = t : (l > 1 || s > 1) && (c = !0), d[t] = [], e1.outgoers().forEach(function(e1) {
                                    e1.isEdge() && d[t].push(e1.id());
                                });
                            } else h[t] = [
                                void 0,
                                e1.target().id()
                            ];
                        }) : u.forEach(function(e1) {
                            var t = e1.id();
                            e1.isNode() ? (e1.degree(!0) % 2 && (n ? a ? c = !0 : a = t : n = t), d[t] = [], e1.connectedEdges().forEach(function(e1) {
                                return d[t].push(e1.id());
                            })) : h[t] = [
                                e1.source().id(),
                                e1.target().id()
                            ];
                        });
                        var p = {
                            found: !1,
                            trail: void 0
                        };
                        if (c) return p;
                        if (a && n) if (l) {
                            if (i && a != i) return p;
                            i = a;
                        } else {
                            if (i && a != i && n != i) return p;
                            i || (i = a);
                        }
                        else i || (i = u[0].id());
                        var g = function walk(e1) {
                            for(var t, n, a, i = e1, o = [
                                e1
                            ]; d[i].length;)t = d[i].shift(), n = h[t][0], i != (a = h[t][1]) ? (d[a] = d[a].filter(function(e1) {
                                return e1 != t;
                            }), i = a) : l || i == n || (d[n] = d[n].filter(function(e1) {
                                return e1 != t;
                            }), i = n), o.unshift(t), o.unshift(i);
                            return o;
                        }, v = [], y = [];
                        for(y = g(i); 1 != y.length;)0 == d[y[0]].length ? (v.unshift(u.getElementById(y.shift())), v.unshift(u.getElementById(y.shift()))) : y = g(y.shift()).concat(y);
                        for(var m in v.unshift(u.getElementById(y.shift())), d)if (d[m].length) return p;
                        return p.found = !0, p.trail = this.spawn(v, !0), p;
                    }
                },
                {
                    hopcroftTarjanBiconnected: Tr,
                    htbc: Tr,
                    htb: Tr,
                    hopcroftTarjanBiconnectedComponents: Tr
                },
                {
                    tarjanStronglyConnected: kr,
                    tsc: kr,
                    tscc: kr,
                    tarjanStronglyConnectedComponents: kr
                }
            ].forEach(function(e1) {
                ve(Sr, e1);
            });
            var Pr = function api(e1) {
                if (!(this instanceof Pr)) return new Pr(e1);
                this.id = "Thenable/1.0.7", this.state = 0, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
                    then: this.then.bind(this)
                }, "function" == typeof e1 && e1.call(this, this.fulfill.bind(this), this.reject.bind(this));
            };
            Pr.prototype = {
                fulfill: function fulfill(e1) {
                    return _r(this, 1, "fulfillValue", e1);
                },
                reject: function reject(e1) {
                    return _r(this, 2, "rejectReason", e1);
                },
                then: function then(e1, t) {
                    var n = this, a = new Pr;
                    return n.onFulfilled.push(Ar(e1, a, "fulfill")), n.onRejected.push(Ar(t, a, "reject")), Br(n), a.proxy;
                }
            };
            var _r = function deliver(e1, t, n, a) {
                return 0 === e1.state && (e1.state = t, e1[n] = a, Br(e1)), e1;
            }, Br = function execute(e1) {
                1 === e1.state ? Dr(e1, "onFulfilled", e1.fulfillValue) : 2 === e1.state && Dr(e1, "onRejected", e1.rejectReason);
            }, Dr = function execute_handlers(e1, t, n) {
                if (0 !== e1[t].length) {
                    var a = e1[t];
                    e1[t] = [];
                    var i = function func() {
                        for(var e1 = 0; e1 < a.length; e1++)a[e1](n);
                    };
                    "function" == typeof setImmediate ? setImmediate(i) : setTimeout(i, 0);
                }
            }, Ar = function resolver(e1, t, n) {
                return function(a) {
                    if ("function" != typeof e1) t[n].call(t, a);
                    else {
                        var i;
                        try {
                            i = e1(a);
                        } catch (e1) {
                            return void t.reject(e1);
                        }
                        Mr(t, i);
                    }
                };
            }, Mr = function resolve(e1, t) {
                if (e1 !== t && e1.proxy !== t) {
                    var n;
                    if ("object" === _typeof(t) && null !== t || "function" == typeof t) try {
                        n = t.then;
                    } catch (t) {
                        return void e1.reject(t);
                    }
                    if ("function" != typeof n) e1.fulfill(t);
                    else {
                        var a = !1;
                        try {
                            n.call(t, function(n) {
                                a || (a = !0, n === t ? e1.reject(new TypeError("circular thenable chain")) : Mr(e1, n));
                            }, function(t) {
                                a || (a = !0, e1.reject(t));
                            });
                        } catch (t) {
                            a || e1.reject(t);
                        }
                    }
                } else e1.reject(new TypeError("cannot resolve promise with itself"));
            };
            Pr.all = function(e1) {
                return new Pr(function(t, n) {
                    for(var a = new Array(e1.length), i = 0, o = function fulfill(n, o) {
                        a[n] = o, ++i === e1.length && t(a);
                    }, s = 0; s < e1.length; s++)!function(t) {
                        var a = e1[t];
                        null != a && null != a.then ? a.then(function(e1) {
                            o(t, e1);
                        }, function(e1) {
                            n(e1);
                        }) : o(t, a);
                    }(s);
                });
            }, Pr.resolve = function(e1) {
                return new Pr(function(t, n) {
                    t(e1);
                });
            }, Pr.reject = function(e1) {
                return new Pr(function(t, n) {
                    n(e1);
                });
            };
            var Ir = "undefined" != typeof Promise ? Promise : Pr, Rr = function Animation(e1, t, n) {
                var a = te(e1), i = !a, o = this._private = ve({
                    duration: 1e3
                }, t, n);
                if (o.target = e1, o.style = o.style || o.css, o.started = !1, o.playing = !1, o.hooked = !1, o.applying = !1, o.progress = 0, o.completes = [], o.frames = [], o.complete && Y(o.complete) && o.completes.push(o.complete), i) {
                    var s = e1.position();
                    o.startPosition = o.startPosition || {
                        x: s.x,
                        y: s.y
                    }, o.startStyle = o.startStyle || e1.cy().style().getAnimationStartStyle(e1, o.style);
                }
                if (a) {
                    var l = e1.pan();
                    o.startPan = {
                        x: l.x,
                        y: l.y
                    }, o.startZoom = e1.zoom();
                }
                this.length = 1, this[0] = this;
            }, Lr = Rr.prototype;
            ve(Lr, {
                instanceString: function instanceString() {
                    return "animation";
                },
                hook: function hook() {
                    var e1 = this._private;
                    if (!e1.hooked) {
                        var t = e1.target._private.animation;
                        (e1.queue ? t.queue : t.current).push(this), Q(e1.target) && e1.target.cy().addToAnimationPool(e1.target), e1.hooked = !0;
                    }
                    return this;
                },
                play: function play() {
                    var e1 = this._private;
                    return 1 === e1.progress && (e1.progress = 0), e1.playing = !0, e1.started = !1, e1.stopped = !1, this.hook(), this;
                },
                playing: function playing() {
                    return this._private.playing;
                },
                apply: function apply() {
                    var e1 = this._private;
                    return e1.applying = !0, e1.started = !1, e1.stopped = !1, this.hook(), this;
                },
                applying: function applying() {
                    return this._private.applying;
                },
                pause: function pause() {
                    var e1 = this._private;
                    return e1.playing = !1, e1.started = !1, this;
                },
                stop: function stop() {
                    var e1 = this._private;
                    return e1.playing = !1, e1.started = !1, e1.stopped = !0, this;
                },
                rewind: function rewind() {
                    return this.progress(0);
                },
                fastforward: function fastforward() {
                    return this.progress(1);
                },
                time: function time(e1) {
                    var t = this._private;
                    return void 0 === e1 ? t.progress * t.duration : this.progress(e1 / t.duration);
                },
                progress: function progress(e1) {
                    var t = this._private, n = t.playing;
                    return void 0 === e1 ? t.progress : (n && this.pause(), t.progress = e1, t.started = !1, n && this.play(), this);
                },
                completed: function completed() {
                    return 1 === this._private.progress;
                },
                reverse: function reverse() {
                    var e1 = this._private, t = e1.playing;
                    t && this.pause(), e1.progress = 1 - e1.progress, e1.started = !1;
                    var n = function swap(t, n) {
                        var a = e1[t];
                        null != a && (e1[t] = e1[n], e1[n] = a);
                    };
                    if (n("zoom", "startZoom"), n("pan", "startPan"), n("position", "startPosition"), e1.style) for(var a = 0; a < e1.style.length; a++){
                        var i = e1.style[a], o = i.name, s = e1.startStyle[o];
                        e1.startStyle[o] = i, e1.style[a] = s;
                    }
                    return t && this.play(), this;
                },
                promise: function promise(e1) {
                    var t, n = this._private;
                    if ("frame" === e1) t = n.frames;
                    else t = n.completes;
                    return new Ir(function(e1, n) {
                        t.push(function() {
                            e1();
                        });
                    });
                }
            }), Lr.complete = Lr.completed, Lr.run = Lr.play, Lr.running = Lr.playing;
            var Nr, Or, zr, Fr, Vr, qr, jr, Wr, Hr, Xr, Yr, Kr, Gr, Ur, Zr, $r, Qr, Jr, ea, ta, na, ra, aa, ia, oa, sa, la, ua, ca, da, ha, pa, fa, ga, va, ya, ma, ba, xa, wa, Ea, Ca, Ta, ka, Sa, Pa, _a, Ba, Da, Aa, Ma, Ia, Ra, La, Na, Oa, za, Fa, Va, qa, ja, Wa, Ha, Xa, Ya, Ka, Ga, Ua, Za, $a, Qa, Ja, ei, ti, ni, ri, ai, ii, oi, si, li, ui, ci, di, hi, pi, fi = {
                animated: function animated() {
                    return function animatedImpl() {
                        var e1 = this, t = void 0 !== e1.length ? e1 : [
                            e1
                        ];
                        if (!(this._private.cy || this).styleEnabled()) return !1;
                        var n = t[0];
                        return n ? n._private.animation.current.length > 0 : void 0;
                    };
                },
                clearQueue: function clearQueue() {
                    return function clearQueueImpl() {
                        var e1 = this, t = void 0 !== e1.length ? e1 : [
                            e1
                        ];
                        if (!(this._private.cy || this).styleEnabled()) return this;
                        for(var n = 0; n < t.length; n++){
                            t[n]._private.animation.queue = [];
                        }
                        return this;
                    };
                },
                delay: function delay() {
                    return function delayImpl(e1, t) {
                        return (this._private.cy || this).styleEnabled() ? this.animate({
                            delay: e1,
                            duration: e1,
                            complete: t
                        }) : this;
                    };
                },
                delayAnimation: function delayAnimation() {
                    return function delayAnimationImpl(e1, t) {
                        return (this._private.cy || this).styleEnabled() ? this.animation({
                            delay: e1,
                            duration: e1,
                            complete: t
                        }) : this;
                    };
                },
                animation: function animation() {
                    return function animationImpl(e1, t) {
                        var n = this, a = void 0 !== n.length, i = a ? n : [
                            n
                        ], o = this._private.cy || this, s = !a, l = !s;
                        if (!o.styleEnabled()) return this;
                        var u = o.style();
                        if (e1 = ve({}, e1, t), 0 === Object.keys(e1).length) return new Rr(i[0], e1);
                        switch(void 0 === e1.duration && (e1.duration = 400), e1.duration){
                            case "slow":
                                e1.duration = 600;
                                break;
                            case "fast":
                                e1.duration = 200;
                        }
                        if (l && (e1.style = u.getPropsList(e1.style || e1.css), e1.css = void 0), l && null != e1.renderedPosition) {
                            var c = e1.renderedPosition, d = o.pan(), h = o.zoom();
                            e1.position = At(c, h, d);
                        }
                        if (s && null != e1.panBy) {
                            var p = e1.panBy, g = o.pan();
                            e1.pan = {
                                x: g.x + p.x,
                                y: g.y + p.y
                            };
                        }
                        var v = e1.center || e1.centre;
                        if (s && null != v) {
                            var y = o.getCenterPan(v.eles, e1.zoom);
                            null != y && (e1.pan = y);
                        }
                        if (s && null != e1.fit) {
                            var m = e1.fit, b = o.getFitViewport(m.eles || m.boundingBox, m.padding);
                            null != b && (e1.pan = b.pan, e1.zoom = b.zoom);
                        }
                        if (s && G(e1.zoom)) {
                            var x = o.getZoomedViewport(e1.zoom);
                            null != x ? (x.zoomed && (e1.zoom = x.zoom), x.panned && (e1.pan = x.pan)) : e1.zoom = null;
                        }
                        return new Rr(i[0], e1);
                    };
                },
                animate: function animate() {
                    return function animateImpl(e1, t) {
                        var n = this, a = void 0 !== n.length ? n : [
                            n
                        ];
                        if (!(this._private.cy || this).styleEnabled()) return this;
                        t && (e1 = ve({}, e1, t));
                        for(var i = 0; i < a.length; i++){
                            var o = a[i], s = o.animated() && (void 0 === e1.queue || e1.queue);
                            o.animation(e1, s ? {
                                queue: !0
                            } : void 0).play();
                        }
                        return this;
                    };
                },
                stop: function stop() {
                    return function stopImpl(e1, t) {
                        var n = this, a = void 0 !== n.length ? n : [
                            n
                        ], i = this._private.cy || this;
                        if (!i.styleEnabled()) return this;
                        for(var o = 0; o < a.length; o++){
                            for(var s = a[o]._private, l = s.animation.current, u = 0; u < l.length; u++){
                                var c = l[u]._private;
                                t && (c.duration = 0);
                            }
                            e1 && (s.animation.queue = []), t || (s.animation.current = []);
                        }
                        return i.notify("draw"), this;
                    };
                }
            };
            function requireIsArray() {
                if (Or) return Nr;
                Or = 1;
                var e1 = Array.isArray;
                return Nr = e1;
            }
            function require_isMasked() {
                if (Xr) return Hr;
                Xr = 1;
                var e1, t = function require_coreJsData() {
                    if (Wr) return jr;
                    Wr = 1;
                    var e1 = require_root()["__core-js_shared__"];
                    return jr = e1;
                }(), n = (e1 = /[^.]+$/.exec(t && t.keys && t.keys.IE_PROTO || "")) ? "Symbol(src)_1." + e1 : "";
                return Hr = function isMasked(e1) {
                    return !!n && n in e1;
                };
            }
            function require_baseIsNative() {
                if (Ur) return Gr;
                Ur = 1;
                var e1 = function requireIsFunction() {
                    if (qr) return Vr;
                    qr = 1;
                    var e1 = require_baseGetTag(), t = requireIsObject();
                    return Vr = function isFunction(n) {
                        if (!t(n)) return !1;
                        var a = e1(n);
                        return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a;
                    };
                }(), t = require_isMasked(), n = requireIsObject(), a = function require_toSource() {
                    if (Kr) return Yr;
                    Kr = 1;
                    var e1 = Function.prototype.toString;
                    return Yr = function toSource(t) {
                        if (null != t) {
                            try {
                                return e1.call(t);
                            } catch (e1) {}
                            try {
                                return t + "";
                            } catch (e1) {}
                        }
                        return "";
                    };
                }(), i = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, l = o.toString, u = s.hasOwnProperty, c = RegExp("^" + l.call(u).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                return Gr = function baseIsNative(o) {
                    return !(!n(o) || t(o)) && (e1(o) ? c : i).test(a(o));
                };
            }
            function require_getNative() {
                if (Jr) return Qr;
                Jr = 1;
                var e1 = require_baseIsNative(), t = function require_getValue() {
                    return $r || ($r = 1, Zr = function getValue(e1, t) {
                        return null == e1 ? void 0 : e1[t];
                    }), Zr;
                }();
                return Qr = function getNative(n, a) {
                    var i = t(n, a);
                    return e1(i) ? i : void 0;
                }, Qr;
            }
            function require_nativeCreate() {
                if (ta) return ea;
                ta = 1;
                var e1 = require_getNative()(Object, "create");
                return ea = e1;
            }
            function require_Hash() {
                if (pa) return ha;
                pa = 1;
                var e1 = function require_hashClear() {
                    if (ra) return na;
                    ra = 1;
                    var e1 = require_nativeCreate();
                    return na = function hashClear() {
                        this.__data__ = e1 ? e1(null) : {}, this.size = 0;
                    };
                }(), t = function require_hashDelete() {
                    return ia ? aa : (ia = 1, aa = function hashDelete(e1) {
                        var t = this.has(e1) && delete this.__data__[e1];
                        return this.size -= t ? 1 : 0, t;
                    });
                }(), n = function require_hashGet() {
                    if (sa) return oa;
                    sa = 1;
                    var e1 = require_nativeCreate(), t = Object.prototype.hasOwnProperty;
                    return oa = function hashGet(n) {
                        var a = this.__data__;
                        if (e1) {
                            var i = a[n];
                            return "__lodash_hash_undefined__" === i ? void 0 : i;
                        }
                        return t.call(a, n) ? a[n] : void 0;
                    }, oa;
                }(), a = function require_hashHas() {
                    if (ua) return la;
                    ua = 1;
                    var e1 = require_nativeCreate(), t = Object.prototype.hasOwnProperty;
                    return la = function hashHas(n) {
                        var a = this.__data__;
                        return e1 ? void 0 !== a[n] : t.call(a, n);
                    }, la;
                }(), i = function require_hashSet() {
                    if (da) return ca;
                    da = 1;
                    var e1 = require_nativeCreate();
                    return ca = function hashSet(t, n) {
                        var a = this.__data__;
                        return this.size += this.has(t) ? 0 : 1, a[t] = e1 && void 0 === n ? "__lodash_hash_undefined__" : n, this;
                    }, ca;
                }();
                function Hash(e1) {
                    var t = -1, n = null == e1 ? 0 : e1.length;
                    for(this.clear(); ++t < n;){
                        var a = e1[t];
                        this.set(a[0], a[1]);
                    }
                }
                return Hash.prototype.clear = e1, Hash.prototype.delete = t, Hash.prototype.get = n, Hash.prototype.has = a, Hash.prototype.set = i, ha = Hash;
            }
            function requireEq() {
                if (ya) return va;
                return ya = 1, va = function eq(e1, t) {
                    return e1 === t || e1 != e1 && t != t;
                };
            }
            function require_assocIndexOf() {
                if (ba) return ma;
                ba = 1;
                var e1 = requireEq();
                return ma = function assocIndexOf(t, n) {
                    for(var a = t.length; a--;)if (e1(t[a][0], n)) return a;
                    return -1;
                }, ma;
            }
            function require_ListCache() {
                if (Ba) return _a;
                Ba = 1;
                var e1 = function require_listCacheClear() {
                    return ga ? fa : (ga = 1, fa = function listCacheClear() {
                        this.__data__ = [], this.size = 0;
                    });
                }(), t = function require_listCacheDelete() {
                    if (wa) return xa;
                    wa = 1;
                    var e1 = require_assocIndexOf(), t = Array.prototype.splice;
                    return xa = function listCacheDelete(n) {
                        var a = this.__data__, i = e1(a, n);
                        return !(i < 0 || (i == a.length - 1 ? a.pop() : t.call(a, i, 1), --this.size, 0));
                    }, xa;
                }(), n = function require_listCacheGet() {
                    if (Ca) return Ea;
                    Ca = 1;
                    var e1 = require_assocIndexOf();
                    return Ea = function listCacheGet(t) {
                        var n = this.__data__, a = e1(n, t);
                        return a < 0 ? void 0 : n[a][1];
                    }, Ea;
                }(), a = function require_listCacheHas() {
                    if (ka) return Ta;
                    ka = 1;
                    var e1 = require_assocIndexOf();
                    return Ta = function listCacheHas(t) {
                        return e1(this.__data__, t) > -1;
                    };
                }(), i = function require_listCacheSet() {
                    if (Pa) return Sa;
                    Pa = 1;
                    var e1 = require_assocIndexOf();
                    return Sa = function listCacheSet(t, n) {
                        var a = this.__data__, i = e1(a, t);
                        return i < 0 ? (++this.size, a.push([
                            t,
                            n
                        ])) : a[i][1] = n, this;
                    }, Sa;
                }();
                function ListCache(e1) {
                    var t = -1, n = null == e1 ? 0 : e1.length;
                    for(this.clear(); ++t < n;){
                        var a = e1[t];
                        this.set(a[0], a[1]);
                    }
                }
                return ListCache.prototype.clear = e1, ListCache.prototype.delete = t, ListCache.prototype.get = n, ListCache.prototype.has = a, ListCache.prototype.set = i, _a = ListCache;
            }
            function require_mapCacheClear() {
                if (Ia) return Ma;
                Ia = 1;
                var e1 = require_Hash(), t = require_ListCache(), n = function require_Map() {
                    if (Aa) return Da;
                    Aa = 1;
                    var e1 = require_getNative()(require_root(), "Map");
                    return Da = e1;
                }();
                return Ma = function mapCacheClear() {
                    this.size = 0, this.__data__ = {
                        hash: new e1,
                        map: new (n || t),
                        string: new e1
                    };
                };
            }
            function require_getMapData() {
                if (Oa) return Na;
                Oa = 1;
                var e1 = function require_isKeyable() {
                    return La ? Ra : (La = 1, Ra = function isKeyable(e1) {
                        var t = typeof e1;
                        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e1 : null === e1;
                    });
                }();
                return Na = function getMapData(t, n) {
                    var a = t.__data__;
                    return e1(n) ? a["string" == typeof n ? "string" : "hash"] : a.map;
                }, Na;
            }
            function require_MapCache() {
                if (Ka) return Ya;
                Ka = 1;
                var e1 = require_mapCacheClear(), t = function require_mapCacheDelete() {
                    if (Fa) return za;
                    Fa = 1;
                    var e1 = require_getMapData();
                    return za = function mapCacheDelete(t) {
                        var n = e1(this, t).delete(t);
                        return this.size -= n ? 1 : 0, n;
                    };
                }(), n = function require_mapCacheGet() {
                    if (qa) return Va;
                    qa = 1;
                    var e1 = require_getMapData();
                    return Va = function mapCacheGet(t) {
                        return e1(this, t).get(t);
                    };
                }(), a = function require_mapCacheHas() {
                    if (Wa) return ja;
                    Wa = 1;
                    var e1 = require_getMapData();
                    return ja = function mapCacheHas(t) {
                        return e1(this, t).has(t);
                    };
                }(), i = function require_mapCacheSet() {
                    if (Xa) return Ha;
                    Xa = 1;
                    var e1 = require_getMapData();
                    return Ha = function mapCacheSet(t, n) {
                        var a = e1(this, t), i = a.size;
                        return a.set(t, n), this.size += a.size == i ? 0 : 1, this;
                    }, Ha;
                }();
                function MapCache(e1) {
                    var t = -1, n = null == e1 ? 0 : e1.length;
                    for(this.clear(); ++t < n;){
                        var a = e1[t];
                        this.set(a[0], a[1]);
                    }
                }
                return MapCache.prototype.clear = e1, MapCache.prototype.delete = t, MapCache.prototype.get = n, MapCache.prototype.has = a, MapCache.prototype.set = i, Ya = MapCache;
            }
            function require_memoizeCapped() {
                if ($a) return Za;
                $a = 1;
                var e1 = function requireMemoize() {
                    if (Ua) return Ga;
                    Ua = 1;
                    var e1 = require_MapCache();
                    function memoize(t, n) {
                        if ("function" != typeof t || null != n && "function" != typeof n) throw new TypeError("Expected a function");
                        var memoized = function() {
                            var e1 = arguments, a = n ? n.apply(this, e1) : e1[0], i = memoized.cache;
                            if (i.has(a)) return i.get(a);
                            var o = t.apply(this, e1);
                            return memoized.cache = i.set(a, o) || i, o;
                        };
                        return memoized.cache = new (memoize.Cache || e1), memoized;
                    }
                    return memoize.Cache = e1, Ga = memoize;
                }();
                return Za = function memoizeCapped(t) {
                    var n = e1(t, function(e1) {
                        return 500 === a.size && a.clear(), e1;
                    }), a = n.cache;
                    return n;
                }, Za;
            }
            function require_stringToPath() {
                if (Ja) return Qa;
                Ja = 1;
                var e1 = require_memoizeCapped(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, a = e1(function(e1) {
                    var a = [];
                    return 46 === e1.charCodeAt(0) && a.push(""), e1.replace(t, function(e1, t, i, o) {
                        a.push(i ? o.replace(n, "$1") : t || e1);
                    }), a;
                });
                return Qa = a;
            }
            function require_arrayMap() {
                if (ti) return ei;
                return ti = 1, ei = function arrayMap(e1, t) {
                    for(var n = -1, a = null == e1 ? 0 : e1.length, i = Array(a); ++n < a;)i[n] = t(e1[n], n, e1);
                    return i;
                }, ei;
            }
            function requireToString() {
                if (ii) return ai;
                ii = 1;
                var e1 = function require_baseToString() {
                    if (ri) return ni;
                    ri = 1;
                    var e1 = require_Symbol(), t = require_arrayMap(), n = requireIsArray(), a = requireIsSymbol(), i = e1 ? e1.prototype : void 0, o = i ? i.toString : void 0;
                    return ni = function baseToString(e1) {
                        if ("string" == typeof e1) return e1;
                        if (n(e1)) return t(e1, baseToString) + "";
                        if (a(e1)) return o ? o.call(e1) : "";
                        var i = e1 + "";
                        return "0" == i && 1 / e1 == -1 / 0 ? "-0" : i;
                    }, ni;
                }();
                return ai = function toString(t) {
                    return null == t ? "" : e1(t);
                };
            }
            function require_castPath() {
                if (si) return oi;
                si = 1;
                var e1 = requireIsArray(), t = function require_isKey() {
                    if (Fr) return zr;
                    Fr = 1;
                    var e1 = requireIsArray(), t = requireIsSymbol(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
                    return zr = function isKey(i, o) {
                        if (e1(i)) return !1;
                        var s = typeof i;
                        return !("number" != s && "symbol" != s && "boolean" != s && null != i && !t(i)) || a.test(i) || !n.test(i) || null != o && i in Object(o);
                    }, zr;
                }(), n = require_stringToPath(), a = requireToString();
                return oi = function castPath(i, o) {
                    return e1(i) ? i : t(i, o) ? [
                        i
                    ] : n(a(i));
                }, oi;
            }
            function require_toKey() {
                if (ui) return li;
                ui = 1;
                var e1 = requireIsSymbol();
                return li = function toKey(t) {
                    if ("string" == typeof t || e1(t)) return t;
                    var n = t + "";
                    return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
                };
            }
            var gi, vi, yi, mi, bi, xi, wi, Ei, Ci, Ti, ki, Si, Pi = function requireGet() {
                if (pi) return hi;
                pi = 1;
                var e1 = function require_baseGet() {
                    if (di) return ci;
                    di = 1;
                    var e1 = require_castPath(), t = require_toKey();
                    return ci = function baseGet(n, a) {
                        for(var i = 0, o = (a = e1(a, n)).length; null != n && i < o;)n = n[t(a[i++])];
                        return i && i == o ? n : void 0;
                    }, ci;
                }();
                return hi = function get(t, n, a) {
                    var i = null == t ? void 0 : e1(t, n);
                    return void 0 === i ? a : i;
                }, hi;
            }(), _i = getDefaultExportFromCjs(Pi);
            function require_baseAssignValue() {
                if (mi) return yi;
                mi = 1;
                var e1 = function require_defineProperty() {
                    if (vi) return gi;
                    vi = 1;
                    var e1 = require_getNative(), t = function() {
                        try {
                            var t = e1(Object, "defineProperty");
                            return t({}, "", {}), t;
                        } catch (e1) {}
                    }();
                    return gi = t;
                }();
                return yi = function baseAssignValue(t, n, a) {
                    "__proto__" == n && e1 ? e1(t, n, {
                        configurable: !0,
                        enumerable: !0,
                        value: a,
                        writable: !0
                    }) : t[n] = a;
                }, yi;
            }
            function require_baseSet() {
                if (Ti) return Ci;
                Ti = 1;
                var e1 = function require_assignValue() {
                    if (xi) return bi;
                    xi = 1;
                    var e1 = require_baseAssignValue(), t = requireEq(), n = Object.prototype.hasOwnProperty;
                    return bi = function assignValue(a, i, o) {
                        var s = a[i];
                        n.call(a, i) && t(s, o) && (void 0 !== o || i in a) || e1(a, i, o);
                    }, bi;
                }(), t = require_castPath(), n = function require_isIndex() {
                    if (Ei) return wi;
                    Ei = 1;
                    var e1 = /^(?:0|[1-9]\d*)$/;
                    return wi = function isIndex(t, n) {
                        var a = typeof t;
                        return !!(n = null == n ? 9007199254740991 : n) && ("number" == a || "symbol" != a && e1.test(t)) && t > -1 && t % 1 == 0 && t < n;
                    };
                }(), a = requireIsObject(), i = require_toKey();
                return Ci = function baseSet(o, s, l, u) {
                    if (!a(o)) return o;
                    for(var c = -1, d = (s = t(s, o)).length, h = d - 1, p = o; null != p && ++c < d;){
                        var g = i(s[c]), v = l;
                        if ("__proto__" === g || "constructor" === g || "prototype" === g) return o;
                        if (c != h) {
                            var y = p[g];
                            void 0 === (v = u ? u(y, g, p) : void 0) && (v = a(y) ? y : n(s[c + 1]) ? [] : {});
                        }
                        e1(p, g, v), p = p[g];
                    }
                    return o;
                }, Ci;
            }
            var Bi, Di, Ai, Mi, Ii = function requireSet() {
                if (Si) return ki;
                Si = 1;
                var e1 = require_baseSet();
                return ki = function set(t, n, a) {
                    return null == t ? t : e1(t, n, a);
                }, ki;
            }(), Ri = getDefaultExportFromCjs(Ii);
            var Li = function requireToPath() {
                if (Mi) return Ai;
                Mi = 1;
                var e1 = require_arrayMap(), t = function require_copyArray() {
                    return Di || (Di = 1, Bi = function copyArray(e1, t) {
                        var n = -1, a = e1.length;
                        for(t || (t = Array(a)); ++n < a;)t[n] = e1[n];
                        return t;
                    }), Bi;
                }(), n = requireIsArray(), a = requireIsSymbol(), i = require_stringToPath(), o = require_toKey(), s = requireToString();
                return Ai = function toPath(l) {
                    return n(l) ? e1(l, o) : a(l) ? [
                        l
                    ] : t(i(s(l)));
                };
            }(), Ni = getDefaultExportFromCjs(Li), Oi = {
                data: function data(e1) {
                    return e1 = ve({}, {
                        field: "data",
                        bindingEvent: "data",
                        allowBinding: !1,
                        allowSetting: !1,
                        allowGetting: !1,
                        settingEvent: "data",
                        settingTriggersEvent: !1,
                        triggerFnName: "trigger",
                        immutableKeys: {},
                        updateStyle: !1,
                        beforeGet: function beforeGet(e1) {},
                        beforeSet: function beforeSet(e1, t) {},
                        onSet: function onSet(e1) {},
                        canSet: function canSet(e1) {
                            return !0;
                        }
                    }, e1), function dataImpl(t, n) {
                        var a = e1, i = this, o = void 0 !== i.length, s = o ? i : [
                            i
                        ], l = o ? i[0] : i;
                        if (X(t)) {
                            var u, c = -1 !== t.indexOf(".") && Ni(t);
                            if (a.allowGetting && void 0 === n) return l && (a.beforeGet(l), u = c && void 0 === l._private[a.field][t] ? _i(l._private[a.field], c) : l._private[a.field][t]), u;
                            if (a.allowSetting && void 0 !== n && !a.immutableKeys[t]) {
                                var d = _defineProperty$1({}, t, n);
                                a.beforeSet(i, d);
                                for(var h = 0, p = s.length; h < p; h++){
                                    var g = s[h];
                                    a.canSet(g) && (c && void 0 === l._private[a.field][t] ? Ri(g._private[a.field], c, n) : g._private[a.field][t] = n);
                                }
                                a.updateStyle && i.updateStyle(), a.onSet(i), a.settingTriggersEvent && i[a.triggerFnName](a.settingEvent);
                            }
                        } else if (a.allowSetting && G(t)) {
                            var v, y, m = t, b = Object.keys(m);
                            a.beforeSet(i, m);
                            for(var x = 0; x < b.length; x++){
                                if (y = m[v = b[x]], !a.immutableKeys[v]) for(var w = 0; w < s.length; w++){
                                    var E = s[w];
                                    a.canSet(E) && (E._private[a.field][v] = y);
                                }
                            }
                            a.updateStyle && i.updateStyle(), a.onSet(i), a.settingTriggersEvent && i[a.triggerFnName](a.settingEvent);
                        } else if (a.allowBinding && Y(t)) {
                            var T = t;
                            i.on(a.bindingEvent, T);
                        } else if (a.allowGetting && void 0 === t) {
                            var k;
                            return l && (a.beforeGet(l), k = l._private[a.field]), k;
                        }
                        return i;
                    };
                },
                removeData: function removeData(e1) {
                    return e1 = ve({}, {
                        field: "data",
                        event: "data",
                        triggerFnName: "trigger",
                        triggerEvent: !1,
                        immutableKeys: {}
                    }, e1), function removeDataImpl(t) {
                        var n = e1, a = this, i = void 0 !== a.length ? a : [
                            a
                        ];
                        if (X(t)) {
                            for(var o = t.split(/\s+/), s = o.length, l = 0; l < s; l++){
                                var u = o[l];
                                if (!re(u)) {
                                    if (!n.immutableKeys[u]) for(var c = 0, d = i.length; c < d; c++)i[c]._private[n.field][u] = void 0;
                                }
                            }
                            n.triggerEvent && a[n.triggerFnName](n.event);
                        } else if (void 0 === t) {
                            for(var h = 0, p = i.length; h < p; h++)for(var g = i[h]._private[n.field], v = Object.keys(g), y = 0; y < v.length; y++){
                                var m = v[y];
                                !n.immutableKeys[m] && (g[m] = void 0);
                            }
                            n.triggerEvent && a[n.triggerFnName](n.event);
                        }
                        return a;
                    };
                }
            }, zi = {
                eventAliasesOn: function eventAliasesOn(e1) {
                    var t = e1;
                    t.addListener = t.listen = t.bind = t.on, t.unlisten = t.unbind = t.off = t.removeListener, t.trigger = t.emit, t.pon = t.promiseOn = function(e1, t) {
                        var n = this, a = Array.prototype.slice.call(arguments, 0);
                        return new Ir(function(e1, t) {
                            var i = a.concat([
                                function callback(t) {
                                    n.off.apply(n, o), e1(t);
                                }
                            ]), o = i.concat([]);
                            n.on.apply(n, i);
                        });
                    };
                }
            }, Fi = {};
            [
                fi,
                Oi,
                zi
            ].forEach(function(e1) {
                ve(Fi, e1);
            });
            var Vi = {
                animate: Fi.animate(),
                animation: Fi.animation(),
                animated: Fi.animated(),
                clearQueue: Fi.clearQueue(),
                delay: Fi.delay(),
                delayAnimation: Fi.delayAnimation(),
                stop: Fi.stop()
            }, qi = {
                classes: function classes(e1) {
                    var t = this;
                    if (void 0 === e1) {
                        var n = [];
                        return t[0]._private.classes.forEach(function(e1) {
                            return n.push(e1);
                        }), n;
                    }
                    K(e1) || (e1 = (e1 || "").match(/\S+/g) || []);
                    for(var a = [], i = new st(e1), o = 0; o < t.length; o++){
                        for(var s = t[o], l = s._private, u = l.classes, c = !1, d = 0; d < e1.length; d++){
                            var h = e1[d];
                            if (!u.has(h)) {
                                c = !0;
                                break;
                            }
                        }
                        c || (c = u.size !== e1.length), c && (l.classes = i, a.push(s));
                    }
                    return a.length > 0 && this.spawn(a).updateStyle().emit("class"), t;
                },
                addClass: function addClass(e1) {
                    return this.toggleClass(e1, !0);
                },
                hasClass: function hasClass(e1) {
                    var t = this[0];
                    return null != t && t._private.classes.has(e1);
                },
                toggleClass: function toggleClass(e1, t) {
                    K(e1) || (e1 = e1.match(/\S+/g) || []);
                    for(var n = this, a = void 0 === t, i = [], o = 0, s = n.length; o < s; o++)for(var l = n[o], u = l._private.classes, c = !1, d = 0; d < e1.length; d++){
                        var h = e1[d], p = u.has(h), g = !1;
                        t || a && !p ? (u.add(h), g = !0) : (!t || a && p) && (u.delete(h), g = !0), !c && g && (i.push(l), c = !0);
                    }
                    return i.length > 0 && this.spawn(i).updateStyle().emit("class"), n;
                },
                removeClass: function removeClass(e1) {
                    return this.toggleClass(e1, !1);
                },
                flashClass: function flashClass(e1, t) {
                    var n = this;
                    if (null == t) t = 250;
                    else if (0 === t) return n;
                    return n.addClass(e1), setTimeout(function() {
                        n.removeClass(e1);
                    }, t), n;
                }
            };
            qi.className = qi.classNames = qi.classes;
            var ji = {
                metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
                comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
                boolOp: "\\?|\\!|\\^",
                string: "\"(?:\\\\\"|[^\"])*\"|'(?:\\\\'|[^'])*'",
                number: ce,
                meta: "degree|indegree|outdegree",
                separator: "\\s*,\\s*",
                descendant: "\\s+",
                child: "\\s+>\\s+",
                subject: "\\$",
                group: "node|edge|\\*",
                directedEdge: "\\s+->\\s+",
                undirectedEdge: "\\s+<->\\s+"
            };
            ji.variable = "(?:[\\w-.]|(?:\\\\" + ji.metaChar + "))+", ji.className = "(?:[\\w-]|(?:\\\\" + ji.metaChar + "))+", ji.value = ji.string + "|" + ji.number, ji.id = ji.variable, function() {
                var e1, t, n;
                for(e1 = ji.comparatorOp.split("|"), n = 0; n < e1.length; n++)t = e1[n], ji.comparatorOp += "|@" + t;
                for(e1 = ji.comparatorOp.split("|"), n = 0; n < e1.length; n++)(t = e1[n]).indexOf("!") >= 0 || "=" !== t && (ji.comparatorOp += "|\\!" + t);
            }();
            var Wi = 0, Hi = 1, Xi = 2, Yi = 3, Ki = 4, Gi = 5, Ui = 6, Zi = 7, $i = 8, Qi = 9, Ji = 10, eo = 11, to = 12, no = 13, ro = 14, ao = 15, io = 16, oo = 17, so = 18, lo = 19, uo = 20, co = [
                {
                    selector: ":selected",
                    matches: function matches(e1) {
                        return e1.selected();
                    }
                },
                {
                    selector: ":unselected",
                    matches: function matches(e1) {
                        return !e1.selected();
                    }
                },
                {
                    selector: ":selectable",
                    matches: function matches(e1) {
                        return e1.selectable();
                    }
                },
                {
                    selector: ":unselectable",
                    matches: function matches(e1) {
                        return !e1.selectable();
                    }
                },
                {
                    selector: ":locked",
                    matches: function matches(e1) {
                        return e1.locked();
                    }
                },
                {
                    selector: ":unlocked",
                    matches: function matches(e1) {
                        return !e1.locked();
                    }
                },
                {
                    selector: ":visible",
                    matches: function matches(e1) {
                        return e1.visible();
                    }
                },
                {
                    selector: ":hidden",
                    matches: function matches(e1) {
                        return !e1.visible();
                    }
                },
                {
                    selector: ":transparent",
                    matches: function matches(e1) {
                        return e1.transparent();
                    }
                },
                {
                    selector: ":grabbed",
                    matches: function matches(e1) {
                        return e1.grabbed();
                    }
                },
                {
                    selector: ":free",
                    matches: function matches(e1) {
                        return !e1.grabbed();
                    }
                },
                {
                    selector: ":removed",
                    matches: function matches(e1) {
                        return e1.removed();
                    }
                },
                {
                    selector: ":inside",
                    matches: function matches(e1) {
                        return !e1.removed();
                    }
                },
                {
                    selector: ":grabbable",
                    matches: function matches(e1) {
                        return e1.grabbable();
                    }
                },
                {
                    selector: ":ungrabbable",
                    matches: function matches(e1) {
                        return !e1.grabbable();
                    }
                },
                {
                    selector: ":animated",
                    matches: function matches(e1) {
                        return e1.animated();
                    }
                },
                {
                    selector: ":unanimated",
                    matches: function matches(e1) {
                        return !e1.animated();
                    }
                },
                {
                    selector: ":parent",
                    matches: function matches(e1) {
                        return e1.isParent();
                    }
                },
                {
                    selector: ":childless",
                    matches: function matches(e1) {
                        return e1.isChildless();
                    }
                },
                {
                    selector: ":child",
                    matches: function matches(e1) {
                        return e1.isChild();
                    }
                },
                {
                    selector: ":orphan",
                    matches: function matches(e1) {
                        return e1.isOrphan();
                    }
                },
                {
                    selector: ":nonorphan",
                    matches: function matches(e1) {
                        return e1.isChild();
                    }
                },
                {
                    selector: ":compound",
                    matches: function matches(e1) {
                        return e1.isNode() ? e1.isParent() : e1.source().isParent() || e1.target().isParent();
                    }
                },
                {
                    selector: ":loop",
                    matches: function matches(e1) {
                        return e1.isLoop();
                    }
                },
                {
                    selector: ":simple",
                    matches: function matches(e1) {
                        return e1.isSimple();
                    }
                },
                {
                    selector: ":active",
                    matches: function matches(e1) {
                        return e1.active();
                    }
                },
                {
                    selector: ":inactive",
                    matches: function matches(e1) {
                        return !e1.active();
                    }
                },
                {
                    selector: ":backgrounding",
                    matches: function matches(e1) {
                        return e1.backgrounding();
                    }
                },
                {
                    selector: ":nonbackgrounding",
                    matches: function matches(e1) {
                        return !e1.backgrounding();
                    }
                }
            ].sort(function(e1, t) {
                return function descending(e1, t) {
                    return -1 * ge(e1, t);
                }(e1.selector, t.selector);
            }), ho = function() {
                for(var e1, t = {}, n = 0; n < co.length; n++)t[(e1 = co[n]).selector] = e1.matches;
                return t;
            }(), po = "(" + co.map(function(e1) {
                return e1.selector;
            }).join("|") + ")", fo = function cleanMetaChars(e1) {
                return e1.replace(new RegExp("\\\\(" + ji.metaChar + ")", "g"), function(e1, t) {
                    return t;
                });
            }, go = function replaceLastQuery(e1, t, n) {
                e1[e1.length - 1] = n;
            }, vo = [
                {
                    name: "group",
                    query: !0,
                    regex: "(" + ji.group + ")",
                    populate: function populate(e1, t, n) {
                        var a = _slicedToArray(n, 1)[0];
                        t.checks.push({
                            type: Wi,
                            value: "*" === a ? a : a + "s"
                        });
                    }
                },
                {
                    name: "state",
                    query: !0,
                    regex: po,
                    populate: function populate(e1, t, n) {
                        var a = _slicedToArray(n, 1)[0];
                        t.checks.push({
                            type: Zi,
                            value: a
                        });
                    }
                },
                {
                    name: "id",
                    query: !0,
                    regex: "\\#(" + ji.id + ")",
                    populate: function populate(e1, t, n) {
                        var a = _slicedToArray(n, 1)[0];
                        t.checks.push({
                            type: $i,
                            value: fo(a)
                        });
                    }
                },
                {
                    name: "className",
                    query: !0,
                    regex: "\\.(" + ji.className + ")",
                    populate: function populate(e1, t, n) {
                        var a = _slicedToArray(n, 1)[0];
                        t.checks.push({
                            type: Qi,
                            value: fo(a)
                        });
                    }
                },
                {
                    name: "dataExists",
                    query: !0,
                    regex: "\\[\\s*(" + ji.variable + ")\\s*\\]",
                    populate: function populate(e1, t, n) {
                        var a = _slicedToArray(n, 1)[0];
                        t.checks.push({
                            type: Ki,
                            field: fo(a)
                        });
                    }
                },
                {
                    name: "dataCompare",
                    query: !0,
                    regex: "\\[\\s*(" + ji.variable + ")\\s*(" + ji.comparatorOp + ")\\s*(" + ji.value + ")\\s*\\]",
                    populate: function populate(e1, t, n) {
                        var a = _slicedToArray(n, 3), i = a[0], o = a[1], s = a[2];
                        s = null != new RegExp("^" + ji.string + "$").exec(s) ? s.substring(1, s.length - 1) : parseFloat(s), t.checks.push({
                            type: Yi,
                            field: fo(i),
                            operator: o,
                            value: s
                        });
                    }
                },
                {
                    name: "dataBool",
                    query: !0,
                    regex: "\\[\\s*(" + ji.boolOp + ")\\s*(" + ji.variable + ")\\s*\\]",
                    populate: function populate(e1, t, n) {
                        var a = _slicedToArray(n, 2), i = a[0], o = a[1];
                        t.checks.push({
                            type: Gi,
                            field: fo(o),
                            operator: i
                        });
                    }
                },
                {
                    name: "metaCompare",
                    query: !0,
                    regex: "\\[\\[\\s*(" + ji.meta + ")\\s*(" + ji.comparatorOp + ")\\s*(" + ji.number + ")\\s*\\]\\]",
                    populate: function populate(e1, t, n) {
                        var a = _slicedToArray(n, 3), i = a[0], o = a[1], s = a[2];
                        t.checks.push({
                            type: Ui,
                            field: fo(i),
                            operator: o,
                            value: parseFloat(s)
                        });
                    }
                },
                {
                    name: "nextQuery",
                    separator: !0,
                    regex: ji.separator,
                    populate: function populate(e1, t) {
                        var n = e1.currentSubject, a = e1.edgeCount, i = e1.compoundCount, o = e1[e1.length - 1];
                        return null != n && (o.subject = n, e1.currentSubject = null), o.edgeCount = a, o.compoundCount = i, e1.edgeCount = 0, e1.compoundCount = 0, e1[e1.length++] = {
                            checks: []
                        };
                    }
                },
                {
                    name: "directedEdge",
                    separator: !0,
                    regex: ji.directedEdge,
                    populate: function populate(e1, t) {
                        if (null == e1.currentSubject) {
                            var n = {
                                checks: []
                            }, a = t, i = {
                                checks: []
                            };
                            return n.checks.push({
                                type: eo,
                                source: a,
                                target: i
                            }), go(e1, 0, n), e1.edgeCount++, i;
                        }
                        var o = {
                            checks: []
                        }, s = t, l = {
                            checks: []
                        };
                        return o.checks.push({
                            type: to,
                            source: s,
                            target: l
                        }), go(e1, 0, o), e1.edgeCount++, l;
                    }
                },
                {
                    name: "undirectedEdge",
                    separator: !0,
                    regex: ji.undirectedEdge,
                    populate: function populate(e1, t) {
                        if (null == e1.currentSubject) {
                            var n = {
                                checks: []
                            }, a = t, i = {
                                checks: []
                            };
                            return n.checks.push({
                                type: Ji,
                                nodes: [
                                    a,
                                    i
                                ]
                            }), go(e1, 0, n), e1.edgeCount++, i;
                        }
                        var o = {
                            checks: []
                        }, s = t, l = {
                            checks: []
                        };
                        return o.checks.push({
                            type: ro,
                            node: s,
                            neighbor: l
                        }), go(e1, 0, o), l;
                    }
                },
                {
                    name: "child",
                    separator: !0,
                    regex: ji.child,
                    populate: function populate(e1, t) {
                        if (null == e1.currentSubject) {
                            var n = {
                                checks: []
                            }, a = {
                                checks: []
                            }, i = e1[e1.length - 1];
                            return n.checks.push({
                                type: ao,
                                parent: i,
                                child: a
                            }), go(e1, 0, n), e1.compoundCount++, a;
                        }
                        if (e1.currentSubject === t) {
                            var o = {
                                checks: []
                            }, s = e1[e1.length - 1], l = {
                                checks: []
                            }, u = {
                                checks: []
                            }, c = {
                                checks: []
                            }, d = {
                                checks: []
                            };
                            return o.checks.push({
                                type: lo,
                                left: s,
                                right: l,
                                subject: u
                            }), u.checks = t.checks, t.checks = [
                                {
                                    type: uo
                                }
                            ], d.checks.push({
                                type: uo
                            }), l.checks.push({
                                type: oo,
                                parent: d,
                                child: c
                            }), go(e1, 0, o), e1.currentSubject = u, e1.compoundCount++, c;
                        }
                        var h = {
                            checks: []
                        }, p = {
                            checks: []
                        }, g = [
                            {
                                type: oo,
                                parent: h,
                                child: p
                            }
                        ];
                        return h.checks = t.checks, t.checks = g, e1.compoundCount++, p;
                    }
                },
                {
                    name: "descendant",
                    separator: !0,
                    regex: ji.descendant,
                    populate: function populate(e1, t) {
                        if (null == e1.currentSubject) {
                            var n = {
                                checks: []
                            }, a = {
                                checks: []
                            }, i = e1[e1.length - 1];
                            return n.checks.push({
                                type: io,
                                ancestor: i,
                                descendant: a
                            }), go(e1, 0, n), e1.compoundCount++, a;
                        }
                        if (e1.currentSubject === t) {
                            var o = {
                                checks: []
                            }, s = e1[e1.length - 1], l = {
                                checks: []
                            }, u = {
                                checks: []
                            }, c = {
                                checks: []
                            }, d = {
                                checks: []
                            };
                            return o.checks.push({
                                type: lo,
                                left: s,
                                right: l,
                                subject: u
                            }), u.checks = t.checks, t.checks = [
                                {
                                    type: uo
                                }
                            ], d.checks.push({
                                type: uo
                            }), l.checks.push({
                                type: so,
                                ancestor: d,
                                descendant: c
                            }), go(e1, 0, o), e1.currentSubject = u, e1.compoundCount++, c;
                        }
                        var h = {
                            checks: []
                        }, p = {
                            checks: []
                        }, g = [
                            {
                                type: so,
                                ancestor: h,
                                descendant: p
                            }
                        ];
                        return h.checks = t.checks, t.checks = g, e1.compoundCount++, p;
                    }
                },
                {
                    name: "subject",
                    modifier: !0,
                    regex: ji.subject,
                    populate: function populate(e1, t) {
                        if (null != e1.currentSubject && e1.currentSubject !== t) return Ue("Redefinition of subject in selector `" + e1.toString() + "`"), !1;
                        e1.currentSubject = t;
                        var n = e1[e1.length - 1].checks[0], a = null == n ? null : n.type;
                        a === eo ? n.type = no : a === Ji && (n.type = ro, n.node = n.nodes[1], n.neighbor = n.nodes[0], n.nodes = null);
                    }
                }
            ];
            vo.forEach(function(e1) {
                return e1.regexObj = new RegExp("^" + e1.regex);
            });
            var yo = function consumeExpr(e1) {
                for(var t, n, a, i = 0; i < vo.length; i++){
                    var o = vo[i], s = o.name, l = e1.match(o.regexObj);
                    if (null != l) {
                        n = l, t = o, a = s;
                        var u = l[0];
                        e1 = e1.substring(u.length);
                        break;
                    }
                }
                return {
                    expr: t,
                    match: n,
                    name: a,
                    remaining: e1
                };
            }, mo = {
                parse: function parse(e1) {
                    var t = this, n = t.inputText = e1, a = t[0] = {
                        checks: []
                    };
                    for(t.length = 1, n = function consumeWhitespace(e1) {
                        var t = e1.match(/^\s+/);
                        if (t) {
                            var n = t[0];
                            e1 = e1.substring(n.length);
                        }
                        return e1;
                    }(n);;){
                        var i = yo(n);
                        if (null == i.expr) return Ue("The selector `" + e1 + "`is invalid"), !1;
                        var o = i.match.slice(1), s = i.expr.populate(t, a, o);
                        if (!1 === s) return !1;
                        if (null != s && (a = s), (n = i.remaining).match(/^\s*$/)) break;
                    }
                    var l = t[t.length - 1];
                    null != t.currentSubject && (l.subject = t.currentSubject), l.edgeCount = t.edgeCount, l.compoundCount = t.compoundCount;
                    for(var u = 0; u < t.length; u++){
                        var c = t[u];
                        if (c.compoundCount > 0 && c.edgeCount > 0) return Ue("The selector `" + e1 + "` is invalid because it uses both a compound selector and an edge selector"), !1;
                        if (c.edgeCount > 1) return Ue("The selector `" + e1 + "` is invalid because it uses multiple edge selectors"), !1;
                        1 === c.edgeCount && Ue("The selector `" + e1 + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
                    }
                    return !0;
                },
                toString: function toString() {
                    if (null != this.toStringCache) return this.toStringCache;
                    for(var e1 = function clean(e1) {
                        return null == e1 ? "" : e1;
                    }, t = function cleanVal(t) {
                        return X(t) ? '"' + t + '"' : e1(t);
                    }, n = function space(e1) {
                        return " " + e1 + " ";
                    }, a = function checkToString(a, o) {
                        var s = a.type, l = a.value;
                        switch(s){
                            case Wi:
                                var u = e1(l);
                                return u.substring(0, u.length - 1);
                            case Yi:
                                var c = a.field, d = a.operator;
                                return "[" + c + n(e1(d)) + t(l) + "]";
                            case Gi:
                                var h = a.operator, p = a.field;
                                return "[" + e1(h) + p + "]";
                            case Ki:
                                return "[" + a.field + "]";
                            case Ui:
                                var g = a.operator;
                                return "[[" + a.field + n(e1(g)) + t(l) + "]]";
                            case Zi:
                                return l;
                            case $i:
                                return "#" + l;
                            case Qi:
                                return "." + l;
                            case oo:
                            case ao:
                                return i(a.parent, o) + n(">") + i(a.child, o);
                            case so:
                            case io:
                                return i(a.ancestor, o) + " " + i(a.descendant, o);
                            case lo:
                                var v = i(a.left, o), y = i(a.subject, o), m = i(a.right, o);
                                return v + (v.length > 0 ? " " : "") + y + m;
                            case uo:
                                return "";
                        }
                    }, i = function queryToString(e1, t) {
                        return e1.checks.reduce(function(n, i, o) {
                            return n + (t === e1 && 0 === o ? "$" : "") + a(i, t);
                        }, "");
                    }, o = "", s = 0; s < this.length; s++){
                        var l = this[s];
                        o += i(l, l.subject), this.length > 1 && s < this.length - 1 && (o += ", ");
                    }
                    return this.toStringCache = o, o;
                }
            }, bo = function valCmp(e1, t, n) {
                var a, i, o, s = X(e1), l = U(e1), u = X(n), c = !1, d = !1, h = !1;
                switch(t.indexOf("!") >= 0 && (t = t.replace("!", ""), d = !0), t.indexOf("@") >= 0 && (t = t.replace("@", ""), c = !0), (s || u || c) && (i = s || l ? "" + e1 : "", o = "" + n), c && (e1 = i = i.toLowerCase(), n = o = o.toLowerCase()), t){
                    case "*=":
                        a = i.indexOf(o) >= 0;
                        break;
                    case "$=":
                        a = i.indexOf(o, i.length - o.length) >= 0;
                        break;
                    case "^=":
                        a = 0 === i.indexOf(o);
                        break;
                    case "=":
                        a = e1 === n;
                        break;
                    case ">":
                        h = !0, a = e1 > n;
                        break;
                    case ">=":
                        h = !0, a = e1 >= n;
                        break;
                    case "<":
                        h = !0, a = e1 < n;
                        break;
                    case "<=":
                        h = !0, a = e1 <= n;
                        break;
                    default:
                        a = !1;
                }
                return !d || null == e1 && h || (a = !a), a;
            }, xo = function data(e1, t) {
                return e1.data(t);
            }, wo = [], Eo = function matches(e1, t) {
                return e1.checks.every(function(e1) {
                    return wo[e1.type](e1, t);
                });
            };
            wo[Wi] = function(e1, t) {
                var n = e1.value;
                return "*" === n || n === t.group();
            }, wo[Zi] = function(e1, t) {
                return function stateSelectorMatches(e1, t) {
                    return ho[e1](t);
                }(e1.value, t);
            }, wo[$i] = function(e1, t) {
                var n = e1.value;
                return t.id() === n;
            }, wo[Qi] = function(e1, t) {
                var n = e1.value;
                return t.hasClass(n);
            }, wo[Ui] = function(e1, t) {
                var n = e1.field, a = e1.operator, i = e1.value;
                return bo(function meta(e1, t) {
                    return e1[t]();
                }(t, n), a, i);
            }, wo[Yi] = function(e1, t) {
                var n = e1.field, a = e1.operator, i = e1.value;
                return bo(xo(t, n), a, i);
            }, wo[Gi] = function(e1, t) {
                var n = e1.field, a = e1.operator;
                return function boolCmp(e1, t) {
                    switch(t){
                        case "?":
                            return !!e1;
                        case "!":
                            return !e1;
                        case "^":
                            return void 0 === e1;
                    }
                }(xo(t, n), a);
            }, wo[Ki] = function(e1, t) {
                var n = e1.field;
                return e1.operator, function existCmp(e1) {
                    return void 0 !== e1;
                }(xo(t, n));
            }, wo[Ji] = function(e1, t) {
                var n = e1.nodes[0], a = e1.nodes[1], i = t.source(), o = t.target();
                return Eo(n, i) && Eo(a, o) || Eo(a, i) && Eo(n, o);
            }, wo[ro] = function(e1, t) {
                return Eo(e1.node, t) && t.neighborhood().some(function(t) {
                    return t.isNode() && Eo(e1.neighbor, t);
                });
            }, wo[eo] = function(e1, t) {
                return Eo(e1.source, t.source()) && Eo(e1.target, t.target());
            }, wo[to] = function(e1, t) {
                return Eo(e1.source, t) && t.outgoers().some(function(t) {
                    return t.isNode() && Eo(e1.target, t);
                });
            }, wo[no] = function(e1, t) {
                return Eo(e1.target, t) && t.incomers().some(function(t) {
                    return t.isNode() && Eo(e1.source, t);
                });
            }, wo[ao] = function(e1, t) {
                return Eo(e1.child, t) && Eo(e1.parent, t.parent());
            }, wo[oo] = function(e1, t) {
                return Eo(e1.parent, t) && t.children().some(function(t) {
                    return Eo(e1.child, t);
                });
            }, wo[io] = function(e1, t) {
                return Eo(e1.descendant, t) && t.ancestors().some(function(t) {
                    return Eo(e1.ancestor, t);
                });
            }, wo[so] = function(e1, t) {
                return Eo(e1.ancestor, t) && t.descendants().some(function(t) {
                    return Eo(e1.descendant, t);
                });
            }, wo[lo] = function(e1, t) {
                return Eo(e1.subject, t) && Eo(e1.left, t) && Eo(e1.right, t);
            }, wo[uo] = function() {
                return !0;
            }, wo[Hi] = function(e1, t) {
                return e1.value.has(t);
            }, wo[Xi] = function(e1, t) {
                return (0, e1.value)(t);
            };
            var Co = {
                matches: function matches(e1) {
                    for(var t = 0; t < this.length; t++){
                        var n = this[t];
                        if (Eo(n, e1)) return !0;
                    }
                    return !1;
                },
                filter: function filter(e1) {
                    var t = this;
                    if (1 === t.length && 1 === t[0].checks.length && t[0].checks[0].type === $i) return e1.getElementById(t[0].checks[0].value).collection();
                    var n = function selectorFunction(e1) {
                        for(var n = 0; n < t.length; n++){
                            var a = t[n];
                            if (Eo(a, e1)) return !0;
                        }
                        return !1;
                    };
                    return null == t.text() && (n = function selectorFunction() {
                        return !0;
                    }), e1.filter(n);
                }
            }, To = function Selector(e1) {
                this.inputText = e1, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, null == e1 || X(e1) && e1.match(/^\s*$/) || (Q(e1) ? this.addQuery({
                    checks: [
                        {
                            type: Hi,
                            value: e1.collection()
                        }
                    ]
                }) : Y(e1) ? this.addQuery({
                    checks: [
                        {
                            type: Xi,
                            value: e1
                        }
                    ]
                }) : X(e1) ? this.parse(e1) || (this.invalid = !0) : Ke("A selector must be created from a string; found "));
            }, ko = To.prototype;
            [
                mo,
                Co
            ].forEach(function(e1) {
                return ve(ko, e1);
            }), ko.text = function() {
                return this.inputText;
            }, ko.size = function() {
                return this.length;
            }, ko.eq = function(e1) {
                return this[e1];
            }, ko.sameText = function(e1) {
                return !this.invalid && !e1.invalid && this.text() === e1.text();
            }, ko.addQuery = function(e1) {
                this[this.length++] = e1;
            }, ko.selector = ko.toString;
            var So = {
                allAre: function allAre(e1) {
                    var t = new To(e1);
                    return this.every(function(e1) {
                        return t.matches(e1);
                    });
                },
                is: function is(e1) {
                    var t = new To(e1);
                    return this.some(function(e1) {
                        return t.matches(e1);
                    });
                },
                some: function some(e1, t) {
                    for(var n = 0; n < this.length; n++){
                        if (t ? e1.apply(t, [
                            this[n],
                            n,
                            this
                        ]) : e1(this[n], n, this)) return !0;
                    }
                    return !1;
                },
                every: function every(e1, t) {
                    for(var n = 0; n < this.length; n++){
                        if (!(t ? e1.apply(t, [
                            this[n],
                            n,
                            this
                        ]) : e1(this[n], n, this))) return !1;
                    }
                    return !0;
                },
                same: function same(e1) {
                    if (this === e1) return !0;
                    e1 = this.cy().collection(e1);
                    var t = this.length;
                    return t === e1.length && (1 === t ? this[0] === e1[0] : this.every(function(t) {
                        return e1.hasElementWithId(t.id());
                    }));
                },
                anySame: function anySame(e1) {
                    return e1 = this.cy().collection(e1), this.some(function(t) {
                        return e1.hasElementWithId(t.id());
                    });
                },
                allAreNeighbors: function allAreNeighbors(e1) {
                    e1 = this.cy().collection(e1);
                    var t = this.neighborhood();
                    return e1.every(function(e1) {
                        return t.hasElementWithId(e1.id());
                    });
                },
                contains: function contains(e1) {
                    e1 = this.cy().collection(e1);
                    var t = this;
                    return e1.every(function(e1) {
                        return t.hasElementWithId(e1.id());
                    });
                }
            };
            So.allAreNeighbours = So.allAreNeighbors, So.has = So.contains, So.equal = So.equals = So.same;
            var Po, _o, Bo = function cache(e1, t) {
                return function traversalCache(n, a, i, o) {
                    var s, l = n, u = this;
                    if (null == l ? s = "" : Q(l) && 1 === l.length && (s = l.id()), 1 === u.length && s) {
                        var c = u[0]._private, d = c.traversalCache = c.traversalCache || {}, h = d[t] = d[t] || [], p = Ne(s), g = h[p];
                        return g || (h[p] = e1.call(u, n, a, i, o));
                    }
                    return e1.call(u, n, a, i, o);
                };
            }, Do = {
                parent: function parent(e1) {
                    var t = [];
                    if (1 === this.length) {
                        var parent = this[0]._private.parent;
                        if (parent) return parent;
                    }
                    for(var n = 0; n < this.length; n++){
                        var a = this[n]._private.parent;
                        a && t.push(a);
                    }
                    return this.spawn(t, !0).filter(e1);
                },
                parents: function parents(e1) {
                    for(var parents = [], t = this.parent(); t.nonempty();){
                        for(var n = 0; n < t.length; n++){
                            var a = t[n];
                            parents.push(a);
                        }
                        t = t.parent();
                    }
                    return this.spawn(parents, !0).filter(e1);
                },
                commonAncestors: function commonAncestors(e1) {
                    for(var t, n = 0; n < this.length; n++){
                        var a = this[n].parents();
                        t = (t = t || a).intersect(a);
                    }
                    return t.filter(e1);
                },
                orphans: function orphans(e1) {
                    return this.stdFilter(function(e1) {
                        return e1.isOrphan();
                    }).filter(e1);
                },
                nonorphans: function nonorphans(e1) {
                    return this.stdFilter(function(e1) {
                        return e1.isChild();
                    }).filter(e1);
                },
                children: Bo(function(e1) {
                    for(var t = [], n = 0; n < this.length; n++)for(var a = this[n]._private.children, i = 0; i < a.length; i++)t.push(a[i]);
                    return this.spawn(t, !0).filter(e1);
                }, "children"),
                siblings: function siblings(e1) {
                    return this.parent().children().not(this).filter(e1);
                },
                isParent: function isParent() {
                    var e1 = this[0];
                    if (e1) return e1.isNode() && 0 !== e1._private.children.length;
                },
                isChildless: function isChildless() {
                    var e1 = this[0];
                    if (e1) return e1.isNode() && 0 === e1._private.children.length;
                },
                isChild: function isChild() {
                    var e1 = this[0];
                    if (e1) return e1.isNode() && null != e1._private.parent;
                },
                isOrphan: function isOrphan() {
                    var e1 = this[0];
                    if (e1) return e1.isNode() && null == e1._private.parent;
                },
                descendants: function descendants(e1) {
                    var t = [];
                    return function add(e1) {
                        for(var n = 0; n < e1.length; n++){
                            var a = e1[n];
                            t.push(a), a.children().nonempty() && add(a.children());
                        }
                    }(this.children()), this.spawn(t, !0).filter(e1);
                }
            };
            function forEachCompound(e1, t, n, a) {
                for(var i = [], o = new st, s = e1.cy().hasCompoundNodes(), l = 0; l < e1.length; l++){
                    var u = e1[l];
                    n ? i.push(u) : s && a(i, o, u);
                }
                for(; i.length > 0;){
                    var c = i.shift();
                    t(c), o.add(c.id()), s && a(i, o, c);
                }
                return e1;
            }
            function addChildren(e1, t, n) {
                if (n.isParent()) for(var a = n._private.children, i = 0; i < a.length; i++){
                    var o = a[i];
                    t.has(o.id()) || e1.push(o);
                }
            }
            function addParent(e1, t, n) {
                if (n.isChild()) {
                    var a = n._private.parent;
                    t.has(a.id()) || e1.push(a);
                }
            }
            function addParentAndChildren(e1, t, n) {
                addParent(e1, t, n), addChildren(e1, t, n);
            }
            Do.forEachDown = function(e1) {
                return forEachCompound(this, e1, !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], addChildren);
            }, Do.forEachUp = function(e1) {
                return forEachCompound(this, e1, !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], addParent);
            }, Do.forEachUpAndDown = function(e1) {
                return forEachCompound(this, e1, !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], addParentAndChildren);
            }, Do.ancestors = Do.parents, (Po = _o = {
                data: Fi.data({
                    field: "data",
                    bindingEvent: "data",
                    allowBinding: !0,
                    allowSetting: !0,
                    settingEvent: "data",
                    settingTriggersEvent: !0,
                    triggerFnName: "trigger",
                    allowGetting: !0,
                    immutableKeys: {
                        id: !0,
                        source: !0,
                        target: !0,
                        parent: !0
                    },
                    updateStyle: !0
                }),
                removeData: Fi.removeData({
                    field: "data",
                    event: "data",
                    triggerFnName: "trigger",
                    triggerEvent: !0,
                    immutableKeys: {
                        id: !0,
                        source: !0,
                        target: !0,
                        parent: !0
                    },
                    updateStyle: !0
                }),
                scratch: Fi.data({
                    field: "scratch",
                    bindingEvent: "scratch",
                    allowBinding: !0,
                    allowSetting: !0,
                    settingEvent: "scratch",
                    settingTriggersEvent: !0,
                    triggerFnName: "trigger",
                    allowGetting: !0,
                    updateStyle: !0
                }),
                removeScratch: Fi.removeData({
                    field: "scratch",
                    event: "scratch",
                    triggerFnName: "trigger",
                    triggerEvent: !0,
                    updateStyle: !0
                }),
                rscratch: Fi.data({
                    field: "rscratch",
                    allowBinding: !1,
                    allowSetting: !0,
                    settingTriggersEvent: !1,
                    allowGetting: !0
                }),
                removeRscratch: Fi.removeData({
                    field: "rscratch",
                    triggerEvent: !1
                }),
                id: function id() {
                    var e1 = this[0];
                    if (e1) return e1._private.data.id;
                }
            }).attr = Po.data, Po.removeAttr = Po.removeData;
            var Ao, Mo, Io = _o, Ro = {};
            function defineDegreeFunction(e1) {
                return function(t) {
                    var n = this;
                    if (void 0 === t && (t = !0), 0 !== n.length && n.isNode() && !n.removed()) {
                        for(var a = 0, i = n[0], o = i._private.edges, s = 0; s < o.length; s++){
                            var l = o[s];
                            !t && l.isLoop() || (a += e1(i, l));
                        }
                        return a;
                    }
                };
            }
            function defineDegreeBoundsFunction(e1, t) {
                return function(n) {
                    for(var a, i = this.nodes(), o = 0; o < i.length; o++){
                        var s = i[o][e1](n);
                        void 0 === s || void 0 !== a && !t(s, a) || (a = s);
                    }
                    return a;
                };
            }
            ve(Ro, {
                degree: defineDegreeFunction(function(e1, t) {
                    return t.source().same(t.target()) ? 2 : 1;
                }),
                indegree: defineDegreeFunction(function(e1, t) {
                    return t.target().same(e1) ? 1 : 0;
                }),
                outdegree: defineDegreeFunction(function(e1, t) {
                    return t.source().same(e1) ? 1 : 0;
                })
            }), ve(Ro, {
                minDegree: defineDegreeBoundsFunction("degree", function(e1, t) {
                    return e1 < t;
                }),
                maxDegree: defineDegreeBoundsFunction("degree", function(e1, t) {
                    return e1 > t;
                }),
                minIndegree: defineDegreeBoundsFunction("indegree", function(e1, t) {
                    return e1 < t;
                }),
                maxIndegree: defineDegreeBoundsFunction("indegree", function(e1, t) {
                    return e1 > t;
                }),
                minOutdegree: defineDegreeBoundsFunction("outdegree", function(e1, t) {
                    return e1 < t;
                }),
                maxOutdegree: defineDegreeBoundsFunction("outdegree", function(e1, t) {
                    return e1 > t;
                })
            }), ve(Ro, {
                totalDegree: function totalDegree(e1) {
                    for(var t = 0, n = this.nodes(), a = 0; a < n.length; a++)t += n[a].degree(e1);
                    return t;
                }
            });
            var Lo = function beforePositionSet(e1, t, n) {
                for(var a = 0; a < e1.length; a++){
                    var i = e1[a];
                    if (!i.locked()) {
                        var o = i._private.position, s = {
                            x: null != t.x ? t.x - o.x : 0,
                            y: null != t.y ? t.y - o.y : 0
                        };
                        !i.isParent() || 0 === s.x && 0 === s.y || i.children().shift(s, n), i.dirtyBoundingBoxCache();
                    }
                }
            }, No = {
                field: "position",
                bindingEvent: "position",
                allowBinding: !0,
                allowSetting: !0,
                settingEvent: "position",
                settingTriggersEvent: !0,
                triggerFnName: "emitAndNotify",
                allowGetting: !0,
                validKeys: [
                    "x",
                    "y"
                ],
                beforeGet: function beforeGet(e1) {
                    e1.updateCompoundBounds();
                },
                beforeSet: function beforeSet(e1, t) {
                    Lo(e1, t, !1);
                },
                onSet: function onSet(e1) {
                    e1.dirtyCompoundBoundsCache();
                },
                canSet: function canSet(e1) {
                    return !e1.locked();
                }
            };
            Ao = Mo = {
                position: Fi.data(No),
                silentPosition: Fi.data(ve({}, No, {
                    allowBinding: !1,
                    allowSetting: !0,
                    settingTriggersEvent: !1,
                    allowGetting: !1,
                    beforeSet: function beforeSet(e1, t) {
                        Lo(e1, t, !0);
                    },
                    onSet: function onSet(e1) {
                        e1.dirtyCompoundBoundsCache();
                    }
                })),
                positions: function positions(e1, t) {
                    if (G(e1)) t ? this.silentPosition(e1) : this.position(e1);
                    else if (Y(e1)) {
                        var n = e1, a = this.cy();
                        a.startBatch();
                        for(var i = 0; i < this.length; i++){
                            var o, s = this[i];
                            (o = n(s, i)) && (t ? s.silentPosition(o) : s.position(o));
                        }
                        a.endBatch();
                    }
                    return this;
                },
                silentPositions: function silentPositions(e1) {
                    return this.positions(e1, !0);
                },
                shift: function shift(e1, t, n) {
                    var a;
                    if (G(e1) ? (a = {
                        x: U(e1.x) ? e1.x : 0,
                        y: U(e1.y) ? e1.y : 0
                    }, n = t) : X(e1) && U(t) && ((a = {
                        x: 0,
                        y: 0
                    })[e1] = t), null != a) {
                        var i = this.cy();
                        i.startBatch();
                        for(var o = 0; o < this.length; o++){
                            var s = this[o];
                            if (!(i.hasCompoundNodes() && s.isChild() && s.ancestors().anySame(this))) {
                                var l = s.position(), u = {
                                    x: l.x + a.x,
                                    y: l.y + a.y
                                };
                                n ? s.silentPosition(u) : s.position(u);
                            }
                        }
                        i.endBatch();
                    }
                    return this;
                },
                silentShift: function silentShift(e1, t) {
                    return G(e1) ? this.shift(e1, !0) : X(e1) && U(t) && this.shift(e1, t, !0), this;
                },
                renderedPosition: function renderedPosition(e1, t) {
                    var n = this[0], a = this.cy(), i = a.zoom(), o = a.pan(), s = G(e1) ? e1 : void 0, l = void 0 !== s || void 0 !== t && X(e1);
                    if (n && n.isNode()) {
                        if (!l) {
                            var u = n.position();
                            return s = Dt(u, i, o), void 0 === e1 ? s : s[e1];
                        }
                        for(var c = 0; c < this.length; c++){
                            var d = this[c];
                            void 0 !== t ? d.position(e1, (t - o[e1]) / i) : void 0 !== s && d.position(At(s, i, o));
                        }
                    } else if (!l) return;
                    return this;
                },
                relativePosition: function relativePosition(e1, t) {
                    var n = this[0], a = this.cy(), i = G(e1) ? e1 : void 0, o = void 0 !== i || void 0 !== t && X(e1), s = a.hasCompoundNodes();
                    if (n && n.isNode()) {
                        if (!o) {
                            var l = n.position(), u = s ? n.parent() : null, c = u && u.length > 0, d = c;
                            c && (u = u[0]);
                            var h = d ? u.position() : {
                                x: 0,
                                y: 0
                            };
                            return i = {
                                x: l.x - h.x,
                                y: l.y - h.y
                            }, void 0 === e1 ? i : i[e1];
                        }
                        for(var p = 0; p < this.length; p++){
                            var g = this[p], v = s ? g.parent() : null, y = v && v.length > 0, m = y;
                            y && (v = v[0]);
                            var b = m ? v.position() : {
                                x: 0,
                                y: 0
                            };
                            void 0 !== t ? g.position(e1, t + b[e1]) : void 0 !== i && g.position({
                                x: i.x + b.x,
                                y: i.y + b.y
                            });
                        }
                    } else if (!o) return;
                    return this;
                }
            }, Ao.modelPosition = Ao.point = Ao.position, Ao.modelPositions = Ao.points = Ao.positions, Ao.renderedPoint = Ao.renderedPosition, Ao.relativePoint = Ao.relativePosition;
            var Oo, zo, Fo = Mo;
            Oo = zo = {}, zo.renderedBoundingBox = function(e1) {
                var t = this.boundingBox(e1), n = this.cy(), a = n.zoom(), i = n.pan(), o = t.x1 * a + i.x, s = t.x2 * a + i.x, l = t.y1 * a + i.y, u = t.y2 * a + i.y;
                return {
                    x1: o,
                    x2: s,
                    y1: l,
                    y2: u,
                    w: s - o,
                    h: u - l
                };
            }, zo.dirtyCompoundBoundsCache = function() {
                var e1 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = this.cy();
                return t.styleEnabled() && t.hasCompoundNodes() ? (this.forEachUp(function(t) {
                    if (t.isParent()) {
                        var n = t._private;
                        n.compoundBoundsClean = !1, n.bbCache = null, e1 || t.emitAndNotify("bounds");
                    }
                }), this) : this;
            }, zo.updateCompoundBounds = function() {
                var e1 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = this.cy();
                if (!t.styleEnabled() || !t.hasCompoundNodes()) return this;
                if (!e1 && t.batching()) return this;
                function update(e1) {
                    if (e1.isParent()) {
                        var t = e1._private, n = e1.children(), a = "include" === e1.pstyle("compound-sizing-wrt-labels").value, i = {
                            width: {
                                val: e1.pstyle("min-width").pfValue,
                                left: e1.pstyle("min-width-bias-left"),
                                right: e1.pstyle("min-width-bias-right")
                            },
                            height: {
                                val: e1.pstyle("min-height").pfValue,
                                top: e1.pstyle("min-height-bias-top"),
                                bottom: e1.pstyle("min-height-bias-bottom")
                            }
                        }, o = n.boundingBox({
                            includeLabels: a,
                            includeOverlays: !1,
                            useCache: !1
                        }), s = t.position;
                        0 !== o.w && 0 !== o.h || ((o = {
                            w: e1.pstyle("width").pfValue,
                            h: e1.pstyle("height").pfValue
                        }).x1 = s.x - o.w / 2, o.x2 = s.x + o.w / 2, o.y1 = s.y - o.h / 2, o.y2 = s.y + o.h / 2);
                        var l = i.width.left.value;
                        "px" === i.width.left.units && i.width.val > 0 && (l = 100 * l / i.width.val);
                        var u = i.width.right.value;
                        "px" === i.width.right.units && i.width.val > 0 && (u = 100 * u / i.width.val);
                        var c = i.height.top.value;
                        "px" === i.height.top.units && i.height.val > 0 && (c = 100 * c / i.height.val);
                        var d = i.height.bottom.value;
                        "px" === i.height.bottom.units && i.height.val > 0 && (d = 100 * d / i.height.val);
                        var h = computeBiasValues(i.width.val - o.w, l, u), p = h.biasDiff, g = h.biasComplementDiff, v = computeBiasValues(i.height.val - o.h, c, d), y = v.biasDiff, m = v.biasComplementDiff;
                        t.autoPadding = function computePaddingValues(e1, t, n, a) {
                            if ("%" !== n.units) return "px" === n.units ? n.pfValue : 0;
                            switch(a){
                                case "width":
                                    return e1 > 0 ? n.pfValue * e1 : 0;
                                case "height":
                                    return t > 0 ? n.pfValue * t : 0;
                                case "average":
                                    return e1 > 0 && t > 0 ? n.pfValue * (e1 + t) / 2 : 0;
                                case "min":
                                    return e1 > 0 && t > 0 ? e1 > t ? n.pfValue * t : n.pfValue * e1 : 0;
                                case "max":
                                    return e1 > 0 && t > 0 ? e1 > t ? n.pfValue * e1 : n.pfValue * t : 0;
                                default:
                                    return 0;
                            }
                        }(o.w, o.h, e1.pstyle("padding"), e1.pstyle("padding-relative-to").value), t.autoWidth = Math.max(o.w, i.width.val), s.x = (-p + o.x1 + o.x2 + g) / 2, t.autoHeight = Math.max(o.h, i.height.val), s.y = (-y + o.y1 + o.y2 + m) / 2;
                    }
                    function computeBiasValues(e1, t, n) {
                        var a = 0, i = 0, o = t + n;
                        return e1 > 0 && o > 0 && (a = t / o * e1, i = n / o * e1), {
                            biasDiff: a,
                            biasComplementDiff: i
                        };
                    }
                }
                for(var n = 0; n < this.length; n++){
                    var a = this[n], i = a._private;
                    i.compoundBoundsClean && !e1 || (update(a), t.batching() || (i.compoundBoundsClean = !0));
                }
                return this;
            };
            var Vo = function noninf(e1) {
                return e1 === 1 / 0 || e1 === -1 / 0 ? 0 : e1;
            }, qo = function updateBounds(e1, t, n, a, i) {
                a - t != 0 && i - n != 0 && null != t && null != n && null != a && null != i && (e1.x1 = t < e1.x1 ? t : e1.x1, e1.x2 = a > e1.x2 ? a : e1.x2, e1.y1 = n < e1.y1 ? n : e1.y1, e1.y2 = i > e1.y2 ? i : e1.y2, e1.w = e1.x2 - e1.x1, e1.h = e1.y2 - e1.y1);
            }, jo = function updateBoundsFromBox(e1, t) {
                return null == t ? e1 : qo(e1, t.x1, t.y1, t.x2, t.y2);
            }, Wo = function prefixedProperty(e1, t, n) {
                return rt(e1, t, n);
            }, Ho = function updateBoundsFromArrow(e1, t, n) {
                if (!t.cy().headless()) {
                    var a, i, o = t._private, s = o.rstyle, l = s.arrowWidth / 2;
                    if ("none" !== t.pstyle(n + "-arrow-shape").value) {
                        "source" === n ? (a = s.srcX, i = s.srcY) : "target" === n ? (a = s.tgtX, i = s.tgtY) : (a = s.midX, i = s.midY);
                        var u = o.arrowBounds = o.arrowBounds || {}, c = u[n] = u[n] || {};
                        c.x1 = a - l, c.y1 = i - l, c.x2 = a + l, c.y2 = i + l, c.w = c.x2 - c.x1, c.h = c.y2 - c.y1, Xt(c, 1), qo(e1, c.x1, c.y1, c.x2, c.y2);
                    }
                }
            }, Xo = function updateBoundsFromLabel(e1, t, n) {
                if (!t.cy().headless()) {
                    var a;
                    a = n ? n + "-" : "";
                    var i = t._private, o = i.rstyle;
                    if (t.pstyle(a + "label").strValue) {
                        var s, l, u, c, d = t.pstyle("text-halign"), h = t.pstyle("text-valign"), p = Wo(o, "labelWidth", n), g = Wo(o, "labelHeight", n), v = Wo(o, "labelX", n), y = Wo(o, "labelY", n), m = t.pstyle(a + "text-margin-x").pfValue, b = t.pstyle(a + "text-margin-y").pfValue, x = t.isEdge(), w = t.pstyle(a + "text-rotation"), E = t.pstyle("text-outline-width").pfValue, T = t.pstyle("text-border-width").pfValue / 2, k = t.pstyle("text-background-padding").pfValue, S = g, P = p, _ = P / 2, D = S / 2;
                        if (x) s = v - _, l = v + _, u = y - D, c = y + D;
                        else {
                            switch(d.value){
                                case "left":
                                    s = v - P, l = v;
                                    break;
                                case "center":
                                    s = v - _, l = v + _;
                                    break;
                                case "right":
                                    s = v, l = v + P;
                            }
                            switch(h.value){
                                case "top":
                                    u = y - S, c = y;
                                    break;
                                case "center":
                                    u = y - D, c = y + D;
                                    break;
                                case "bottom":
                                    u = y, c = y + S;
                            }
                        }
                        var M = m - Math.max(E, T) - k - 2, I = m + Math.max(E, T) + k + 2, R = b - Math.max(E, T) - k - 2, L = b + Math.max(E, T) + k + 2;
                        s += M, l += I, u += R, c += L;
                        var N = n || "main", O = i.labelBounds, z = O[N] = O[N] || {};
                        z.x1 = s, z.y1 = u, z.x2 = l, z.y2 = c, z.w = l - s, z.h = c - u, z.leftPad = M, z.rightPad = I, z.topPad = R, z.botPad = L;
                        var V = x && "autorotate" === w.strValue, q = null != w.pfValue && 0 !== w.pfValue;
                        if (V || q) {
                            var j = V ? Wo(i.rstyle, "labelAngle", n) : w.pfValue, W = Math.cos(j), H = Math.sin(j), X = (s + l) / 2, Y = (u + c) / 2;
                            if (!x) {
                                switch(d.value){
                                    case "left":
                                        X = l;
                                        break;
                                    case "right":
                                        X = s;
                                }
                                switch(h.value){
                                    case "top":
                                        Y = c;
                                        break;
                                    case "bottom":
                                        Y = u;
                                }
                            }
                            var K = function rotate(e1, t) {
                                return {
                                    x: (e1 -= X) * W - (t -= Y) * H + X,
                                    y: e1 * H + t * W + Y
                                };
                            }, G = K(s, u), U = K(s, c), Z = K(l, u), Q = K(l, c);
                            s = Math.min(G.x, U.x, Z.x, Q.x), l = Math.max(G.x, U.x, Z.x, Q.x), u = Math.min(G.y, U.y, Z.y, Q.y), c = Math.max(G.y, U.y, Z.y, Q.y);
                        }
                        var J = N + "Rot", ee = O[J] = O[J] || {};
                        ee.x1 = s, ee.y1 = u, ee.x2 = l, ee.y2 = c, ee.w = l - s, ee.h = c - u, qo(e1, s, u, l, c), qo(i.labelBounds.all, s, u, l, c);
                    }
                    return e1;
                }
            }, Yo = function boundingBoxImpl(e1, t) {
                var n, a, i, o, s, l, u = e1._private.cy, c = u.styleEnabled(), d = u.headless(), h = jt(), p = e1._private, g = e1.isNode(), v = e1.isEdge(), y = p.rstyle, m = g && c ? e1.pstyle("bounds-expansion").pfValue : [
                    0
                ], b = function isDisplayed(e1) {
                    return "none" !== e1.pstyle("display").value;
                }, x = !c || b(e1) && (!v || b(e1.source()) && b(e1.target()));
                if (x) {
                    var w = 0;
                    c && t.includeOverlays && 0 !== e1.pstyle("overlay-opacity").value && (w = e1.pstyle("overlay-padding").value);
                    var E = 0;
                    c && t.includeUnderlays && 0 !== e1.pstyle("underlay-opacity").value && (E = e1.pstyle("underlay-padding").value);
                    var T = Math.max(w, E), k = 0;
                    if (c && (k = e1.pstyle("width").pfValue / 2), g && t.includeNodes) {
                        var S = e1.position();
                        s = S.x, l = S.y;
                        var P = e1.outerWidth() / 2, _ = e1.outerHeight() / 2;
                        qo(h, n = s - P, i = l - _, a = s + P, o = l + _), c && t.includeOutlines && function updateBoundsFromOutline(e1, t) {
                            if (!t.cy().headless()) {
                                var n = t.pstyle("outline-opacity").value, a = t.pstyle("outline-width").value;
                                if (n > 0 && a > 0) {
                                    var i = t.pstyle("outline-offset").value, o = t.pstyle("shape").value, s = a + i, l = (e1.w + 2 * s) / e1.w, u = (e1.h + 2 * s) / e1.h, c = 0;
                                    [
                                        "diamond",
                                        "pentagon",
                                        "round-triangle"
                                    ].includes(o) ? (l = (e1.w + 2.4 * s) / e1.w, c = -s / 3.6) : [
                                        "concave-hexagon",
                                        "rhomboid",
                                        "right-rhomboid"
                                    ].includes(o) ? l = (e1.w + 2.4 * s) / e1.w : "star" === o ? (l = (e1.w + 2.8 * s) / e1.w, u = (e1.h + 2.6 * s) / e1.h, c = -s / 3.8) : "triangle" === o ? (l = (e1.w + 2.8 * s) / e1.w, u = (e1.h + 2.4 * s) / e1.h, c = -s / 1.4) : "vee" === o && (l = (e1.w + 4.4 * s) / e1.w, u = (e1.h + 3.8 * s) / e1.h, c = .5 * -s);
                                    var d = e1.h * u - e1.h, h = e1.w * l - e1.w;
                                    if (Yt(e1, [
                                        Math.ceil(d / 2),
                                        Math.ceil(h / 2)
                                    ]), 0 !== c) {
                                        var p = function shiftBoundingBox(e1, t, n) {
                                            return {
                                                x1: e1.x1 + t,
                                                x2: e1.x2 + t,
                                                y1: e1.y1 + n,
                                                y2: e1.y2 + n,
                                                w: e1.w,
                                                h: e1.h
                                            };
                                        }(e1, 0, c);
                                        Wt(e1, p);
                                    }
                                }
                            }
                        }(h, e1);
                    } else if (v && t.includeEdges) if (c && !d) {
                        var D = e1.pstyle("curve-style").strValue;
                        if (n = Math.min(y.srcX, y.midX, y.tgtX), a = Math.max(y.srcX, y.midX, y.tgtX), i = Math.min(y.srcY, y.midY, y.tgtY), o = Math.max(y.srcY, y.midY, y.tgtY), qo(h, n -= k, i -= k, a += k, o += k), "haystack" === D) {
                            var M = y.haystackPts;
                            if (M && 2 === M.length) {
                                if (n = M[0].x, i = M[0].y, n > (a = M[1].x)) {
                                    var I = n;
                                    n = a, a = I;
                                }
                                if (i > (o = M[1].y)) {
                                    var R = i;
                                    i = o, o = R;
                                }
                                qo(h, n - k, i - k, a + k, o + k);
                            }
                        } else if ("bezier" === D || "unbundled-bezier" === D || D.endsWith("segments") || D.endsWith("taxi")) {
                            var L;
                            switch(D){
                                case "bezier":
                                case "unbundled-bezier":
                                    L = y.bezierPts;
                                    break;
                                case "segments":
                                case "taxi":
                                case "round-segments":
                                case "round-taxi":
                                    L = y.linePts;
                            }
                            if (null != L) for(var N = 0; N < L.length; N++){
                                var O = L[N];
                                n = O.x - k, a = O.x + k, i = O.y - k, o = O.y + k, qo(h, n, i, a, o);
                            }
                        }
                    } else {
                        var z = e1.source().position(), V = e1.target().position();
                        if ((n = z.x) > (a = V.x)) {
                            var q = n;
                            n = a, a = q;
                        }
                        if ((i = z.y) > (o = V.y)) {
                            var j = i;
                            i = o, o = j;
                        }
                        qo(h, n -= k, i -= k, a += k, o += k);
                    }
                    if (c && t.includeEdges && v && (Ho(h, e1, "mid-source"), Ho(h, e1, "mid-target"), Ho(h, e1, "source"), Ho(h, e1, "target")), c) {
                        if ("yes" === e1.pstyle("ghost").value) {
                            var W = e1.pstyle("ghost-offset-x").pfValue, H = e1.pstyle("ghost-offset-y").pfValue;
                            qo(h, h.x1 + W, h.y1 + H, h.x2 + W, h.y2 + H);
                        }
                    }
                    var X = p.bodyBounds = p.bodyBounds || {};
                    Kt(X, h), Yt(X, m), Xt(X, 1), c && (n = h.x1, a = h.x2, i = h.y1, o = h.y2, qo(h, n - T, i - T, a + T, o + T));
                    var Y = p.overlayBounds = p.overlayBounds || {};
                    Kt(Y, h), Yt(Y, m), Xt(Y, 1);
                    var K = p.labelBounds = p.labelBounds || {};
                    null != K.all ? function clearBoundingBox(e1) {
                        e1.x1 = 1 / 0, e1.y1 = 1 / 0, e1.x2 = -1 / 0, e1.y2 = -1 / 0, e1.w = 0, e1.h = 0;
                    }(K.all) : K.all = jt(), c && t.includeLabels && (t.includeMainLabels && Xo(h, e1, null), v && (t.includeSourceLabels && Xo(h, e1, "source"), t.includeTargetLabels && Xo(h, e1, "target")));
                }
                return h.x1 = Vo(h.x1), h.y1 = Vo(h.y1), h.x2 = Vo(h.x2), h.y2 = Vo(h.y2), h.w = Vo(h.x2 - h.x1), h.h = Vo(h.y2 - h.y1), h.w > 0 && h.h > 0 && x && (Yt(h, m), Xt(h, 1)), h;
            }, Ko = function getKey(e1) {
                var t = 0, n = function tf(e1) {
                    return (e1 ? 1 : 0) << t++;
                }, a = 0;
                return a += n(e1.incudeNodes), a += n(e1.includeEdges), a += n(e1.includeLabels), a += n(e1.includeMainLabels), a += n(e1.includeSourceLabels), a += n(e1.includeTargetLabels), a += n(e1.includeOverlays), a += n(e1.includeOutlines);
            }, Go = function getBoundingBoxPosKey(e1) {
                var t = function r(e1) {
                    return Math.round(e1);
                };
                if (e1.isEdge()) {
                    var n = e1.source().position(), a = e1.target().position();
                    return Le([
                        t(n.x),
                        t(n.y),
                        t(a.x),
                        t(a.y)
                    ]);
                }
                var i = e1.position();
                return Le([
                    t(i.x),
                    t(i.y)
                ]);
            }, Uo = function cachedBoundingBoxImpl(e1, t) {
                var n, a = e1._private, i = e1.isEdge(), o = (null == t ? $o : Ko(t)) === $o;
                if (null == a.bbCache ? (n = Yo(e1, Zo), a.bbCache = n, a.bbCachePosKey = Go(e1)) : n = a.bbCache, !o) {
                    var s = e1.isNode();
                    n = jt(), (t.includeNodes && s || t.includeEdges && !s) && (t.includeOverlays ? jo(n, a.overlayBounds) : jo(n, a.bodyBounds)), t.includeLabels && (t.includeMainLabels && (!i || t.includeSourceLabels && t.includeTargetLabels) ? jo(n, a.labelBounds.all) : (t.includeMainLabels && jo(n, a.labelBounds.mainRot), t.includeSourceLabels && jo(n, a.labelBounds.sourceRot), t.includeTargetLabels && jo(n, a.labelBounds.targetRot))), n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
                }
                return n;
            }, Zo = {
                includeNodes: !0,
                includeEdges: !0,
                includeLabels: !0,
                includeMainLabels: !0,
                includeSourceLabels: !0,
                includeTargetLabels: !0,
                includeOverlays: !0,
                includeUnderlays: !0,
                includeOutlines: !0,
                useCache: !0
            }, $o = Ko(Zo), Qo = et(Zo);
            zo.boundingBox = function(e1) {
                var t, n = void 0 === e1 || void 0 === e1.useCache || !0 === e1.useCache, a = ie(function(e1) {
                    var t = e1._private;
                    return null == t.bbCache || t.styleDirty || t.bbCachePosKey !== Go(e1);
                }, function(e1) {
                    return e1.id();
                });
                if (n && 1 === this.length && !a(this[0])) e1 = void 0 === e1 ? Zo : Qo(e1), t = Uo(this[0], e1);
                else {
                    t = jt();
                    var i = Qo(e1 = e1 || Zo), o = this, s = o.cy().styleEnabled();
                    this.edges().forEach(a), this.nodes().forEach(a), s && this.recalculateRenderedStyle(n), this.updateCompoundBounds(!n);
                    for(var l = 0; l < o.length; l++){
                        var u = o[l];
                        a(u) && u.dirtyBoundingBoxCache(), jo(t, Uo(u, i));
                    }
                }
                return t.x1 = Vo(t.x1), t.y1 = Vo(t.y1), t.x2 = Vo(t.x2), t.y2 = Vo(t.y2), t.w = Vo(t.x2 - t.x1), t.h = Vo(t.y2 - t.y1), t;
            }, zo.dirtyBoundingBoxCache = function() {
                for(var e1 = 0; e1 < this.length; e1++){
                    var t = this[e1]._private;
                    t.bbCache = null, t.bbCachePosKey = null, t.bodyBounds = null, t.overlayBounds = null, t.labelBounds.all = null, t.labelBounds.source = null, t.labelBounds.target = null, t.labelBounds.main = null, t.labelBounds.sourceRot = null, t.labelBounds.targetRot = null, t.labelBounds.mainRot = null, t.arrowBounds.source = null, t.arrowBounds.target = null, t.arrowBounds["mid-source"] = null, t.arrowBounds["mid-target"] = null;
                }
                return this.emitAndNotify("bounds"), this;
            }, zo.boundingBoxAt = function(e1) {
                var t = this.nodes(), n = this.cy(), a = n.hasCompoundNodes(), i = n.collection();
                if (a && (i = t.filter(function(e1) {
                    return e1.isParent();
                }), t = t.not(i)), G(e1)) {
                    var o = e1;
                    e1 = function fn() {
                        return o;
                    };
                }
                n.startBatch(), t.forEach(function storeOldPos(t, n) {
                    return t._private.bbAtOldPos = e1(t, n);
                }).silentPositions(e1), a && (i.dirtyCompoundBoundsCache(), i.dirtyBoundingBoxCache(), i.updateCompoundBounds(!0));
                var s = function copyBoundingBox(e1) {
                    return {
                        x1: e1.x1,
                        x2: e1.x2,
                        w: e1.w,
                        y1: e1.y1,
                        y2: e1.y2,
                        h: e1.h
                    };
                }(this.boundingBox({
                    useCache: !1
                }));
                return t.silentPositions(function getOldPos(e1) {
                    return e1._private.bbAtOldPos;
                }), a && (i.dirtyCompoundBoundsCache(), i.dirtyBoundingBoxCache(), i.updateCompoundBounds(!0)), n.endBatch(), s;
            }, Oo.boundingbox = Oo.bb = Oo.boundingBox, Oo.renderedBoundingbox = Oo.renderedBoundingBox;
            var Jo, es, ts = zo;
            Jo = es = {};
            var ns = function defineDimFns(e1) {
                e1.uppercaseName = ue(e1.name), e1.autoName = "auto" + e1.uppercaseName, e1.labelName = "label" + e1.uppercaseName, e1.outerName = "outer" + e1.uppercaseName, e1.uppercaseOuterName = ue(e1.outerName), Jo[e1.name] = function dimImpl() {
                    var t = this[0], n = t._private, a = n.cy._private.styleEnabled;
                    if (t) {
                        if (a) {
                            if (t.isParent()) return t.updateCompoundBounds(), n[e1.autoName] || 0;
                            var i = t.pstyle(e1.name);
                            return "label" === i.strValue ? (t.recalculateRenderedStyle(), n.rstyle[e1.labelName] || 0) : i.pfValue;
                        }
                        return 1;
                    }
                }, Jo["outer" + e1.uppercaseName] = function outerDimImpl() {
                    var t = this[0], n = t._private.cy._private.styleEnabled;
                    if (t) {
                        if (n) {
                            var a = t[e1.name](), i = t.pstyle("border-position").value;
                            return a + ("center" === i ? t.pstyle("border-width").pfValue : "outside" === i ? 2 * t.pstyle("border-width").pfValue : 0) + 2 * t.padding();
                        }
                        return 1;
                    }
                }, Jo["rendered" + e1.uppercaseName] = function renderedDimImpl() {
                    var t = this[0];
                    if (t) return t[e1.name]() * this.cy().zoom();
                }, Jo["rendered" + e1.uppercaseOuterName] = function renderedOuterDimImpl() {
                    var t = this[0];
                    if (t) return t[e1.outerName]() * this.cy().zoom();
                };
            };
            ns({
                name: "width"
            }), ns({
                name: "height"
            }), es.padding = function() {
                var e1 = this[0], t = e1._private;
                return e1.isParent() ? (e1.updateCompoundBounds(), void 0 !== t.autoPadding ? t.autoPadding : e1.pstyle("padding").pfValue) : e1.pstyle("padding").pfValue;
            }, es.paddedHeight = function() {
                var e1 = this[0];
                return e1.height() + 2 * e1.padding();
            }, es.paddedWidth = function() {
                var e1 = this[0];
                return e1.width() + 2 * e1.padding();
            };
            var rs = es, as = {
                controlPoints: {
                    get: function controlPoints(e1) {
                        return e1.renderer().getControlPoints(e1);
                    },
                    mult: !0
                },
                segmentPoints: {
                    get: function segmentPoints(e1) {
                        return e1.renderer().getSegmentPoints(e1);
                    },
                    mult: !0
                },
                sourceEndpoint: {
                    get: function sourceEndpoint(e1) {
                        return e1.renderer().getSourceEndpoint(e1);
                    }
                },
                targetEndpoint: {
                    get: function targetEndpoint(e1) {
                        return e1.renderer().getTargetEndpoint(e1);
                    }
                },
                midpoint: {
                    get: function midpoint(e1) {
                        return e1.renderer().getEdgeMidpoint(e1);
                    }
                }
            }, os = Object.keys(as).reduce(function(e1, t) {
                var n = as[t], a = function renderedName(e1) {
                    return "rendered" + e1[0].toUpperCase() + e1.substr(1);
                }(t);
                return e1[t] = function() {
                    return function ifEdge(e1, t) {
                        if (e1.isEdge() && e1.takesUpSpace()) return t(e1);
                    }(this, n.get);
                }, n.mult ? e1[a] = function() {
                    return function ifEdgeRenderedPositions(e1, t) {
                        if (e1.isEdge() && e1.takesUpSpace()) {
                            var n = e1.cy(), a = n.pan(), i = n.zoom();
                            return t(e1).map(function(e1) {
                                return Dt(e1, i, a);
                            });
                        }
                    }(this, n.get);
                } : e1[a] = function() {
                    return function ifEdgeRenderedPosition(e1, t) {
                        if (e1.isEdge() && e1.takesUpSpace()) {
                            var n = e1.cy();
                            return Dt(t(e1), n.zoom(), n.pan());
                        }
                    }(this, n.get);
                }, e1;
            }, {}), ss = ve({}, Fo, ts, rs, os), ls = function Event(e1, t) {
                this.recycle(e1, t);
            };
            function returnFalse() {
                return !1;
            }
            function returnTrue() {
                return !0;
            }
            ls.prototype = {
                instanceString: function instanceString() {
                    return "event";
                },
                recycle: function recycle(e1, t) {
                    if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = returnFalse, null != e1 && e1.preventDefault ? (this.type = e1.type, this.isDefaultPrevented = e1.defaultPrevented ? returnTrue : returnFalse) : null != e1 && e1.type ? t = e1 : this.type = e1, null != t && (this.originalEvent = t.originalEvent, this.type = null != t.type ? t.type : this.type, this.cy = t.cy, this.target = t.target, this.position = t.position, this.renderedPosition = t.renderedPosition, this.namespace = t.namespace, this.layout = t.layout), null != this.cy && null != this.position && null == this.renderedPosition) {
                        var n = this.position, a = this.cy.zoom(), i = this.cy.pan();
                        this.renderedPosition = {
                            x: n.x * a + i.x,
                            y: n.y * a + i.y
                        };
                    }
                    this.timeStamp = e1 && e1.timeStamp || Date.now();
                },
                preventDefault: function preventDefault() {
                    this.isDefaultPrevented = returnTrue;
                    var e1 = this.originalEvent;
                    e1 && e1.preventDefault && e1.preventDefault();
                },
                stopPropagation: function stopPropagation() {
                    this.isPropagationStopped = returnTrue;
                    var e1 = this.originalEvent;
                    e1 && e1.stopPropagation && e1.stopPropagation();
                },
                stopImmediatePropagation: function stopImmediatePropagation() {
                    this.isImmediatePropagationStopped = returnTrue, this.stopPropagation();
                },
                isDefaultPrevented: returnFalse,
                isPropagationStopped: returnFalse,
                isImmediatePropagationStopped: returnFalse
            };
            var us = /^([^.]+)(\.(?:[^.]+))?$/, cs = {
                qualifierCompare: function qualifierCompare(e1, t) {
                    return e1 === t;
                },
                eventMatches: function eventMatches() {
                    return !0;
                },
                addEventFields: function addEventFields() {},
                callbackContext: function callbackContext(e1) {
                    return e1;
                },
                beforeEmit: function beforeEmit() {},
                afterEmit: function afterEmit() {},
                bubble: function bubble() {
                    return !1;
                },
                parent: function parent() {
                    return null;
                },
                context: null
            }, ds = Object.keys(cs), hs = {};
            function Emitter() {
                for(var e1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hs, t = arguments.length > 1 ? arguments[1] : void 0, n = 0; n < ds.length; n++){
                    var a = ds[n];
                    this[a] = e1[a] || cs[a];
                }
                this.context = t || this.context, this.listeners = [], this.emitting = 0;
            }
            var ps = Emitter.prototype, fs = function forEachEvent(e1, t, n, a, i, o, s) {
                Y(a) && (i = a, a = null), s && (o = null == o ? s : ve({}, o, s));
                for(var l = K(n) ? n : n.split(/\s+/), u = 0; u < l.length; u++){
                    var c = l[u];
                    if (!re(c)) {
                        var d = c.match(us);
                        if (d) {
                            if (!1 === t(e1, c, d[1], d[2] ? d[2] : null, a, i, o)) break;
                        }
                    }
                }
            }, gs = function makeEventObj(e1, t) {
                return e1.addEventFields(e1.context, t), new ls(t.type, t);
            }, vs = function forEachEventObj(e1, t, n) {
                if (function event(e1) {
                    return "event" === H(e1);
                }(n)) t(e1, n);
                else if (G(n)) t(e1, gs(e1, n));
                else for(var a = K(n) ? n : n.split(/\s+/), i = 0; i < a.length; i++){
                    var o = a[i];
                    if (!re(o)) {
                        var s = o.match(us);
                        if (s) {
                            var l = s[1], u = s[2] ? s[2] : null;
                            t(e1, gs(e1, {
                                type: l,
                                namespace: u,
                                target: e1.context
                            }));
                        }
                    }
                }
            };
            ps.on = ps.addListener = function(e1, t, n, a, i) {
                return fs(this, function(e1, t, n, a, i, o, s) {
                    Y(o) && e1.listeners.push({
                        event: t,
                        callback: o,
                        type: n,
                        namespace: a,
                        qualifier: i,
                        conf: s
                    });
                }, e1, t, n, a, i), this;
            }, ps.one = function(e1, t, n, a) {
                return this.on(e1, t, n, a, {
                    one: !0
                });
            }, ps.removeListener = ps.off = function(e1, t, n, a) {
                var i = this;
                0 !== this.emitting && (this.listeners = function copyArray(e1) {
                    return e1.slice();
                }(this.listeners));
                for(var o = this.listeners, s = function _loop(s) {
                    var l = o[s];
                    fs(i, function(t, n, a, i, u, c) {
                        if ((l.type === a || "*" === e1) && (!i && ".*" !== l.namespace || l.namespace === i) && (!u || t.qualifierCompare(l.qualifier, u)) && (!c || l.callback === c)) return o.splice(s, 1), !1;
                    }, e1, t, n, a);
                }, l = o.length - 1; l >= 0; l--)s(l);
                return this;
            }, ps.removeAllListeners = function() {
                return this.removeListener("*");
            }, ps.emit = ps.trigger = function(e1, t, n) {
                var a = this.listeners, i = a.length;
                return this.emitting++, K(t) || (t = [
                    t
                ]), vs(this, function(e1, o) {
                    null != n && (a = [
                        {
                            event: o.event,
                            type: o.type,
                            namespace: o.namespace,
                            callback: n
                        }
                    ], i = a.length);
                    for(var s = function _loop2() {
                        var n = a[l];
                        if (n.type === o.type && (!n.namespace || n.namespace === o.namespace || ".*" === n.namespace) && e1.eventMatches(e1.context, n, o)) {
                            var i = [
                                o
                            ];
                            null != t && function push(e1, t) {
                                for(var n = 0; n < t.length; n++){
                                    var a = t[n];
                                    e1.push(a);
                                }
                            }(i, t), e1.beforeEmit(e1.context, n, o), n.conf && n.conf.one && (e1.listeners = e1.listeners.filter(function(e1) {
                                return e1 !== n;
                            }));
                            var s = e1.callbackContext(e1.context, n, o), u = n.callback.apply(s, i);
                            e1.afterEmit(e1.context, n, o), !1 === u && (o.stopPropagation(), o.preventDefault());
                        }
                    }, l = 0; l < i; l++)s();
                    e1.bubble(e1.context) && !o.isPropagationStopped() && e1.parent(e1.context).emit(o, t);
                }, e1), this.emitting--, this;
            };
            var ys = {
                qualifierCompare: function qualifierCompare(e1, t) {
                    return null == e1 || null == t ? null == e1 && null == t : e1.sameText(t);
                },
                eventMatches: function eventMatches(e1, t, n) {
                    var a = t.qualifier;
                    return null == a || e1 !== n.target && J(n.target) && a.matches(n.target);
                },
                addEventFields: function addEventFields(e1, t) {
                    t.cy = e1.cy(), t.target = e1;
                },
                callbackContext: function callbackContext(e1, t, n) {
                    return null != t.qualifier ? n.target : e1;
                },
                beforeEmit: function beforeEmit(e1, t) {
                    t.conf && t.conf.once && t.conf.onceCollection.removeListener(t.event, t.qualifier, t.callback);
                },
                bubble: function bubble() {
                    return !0;
                },
                parent: function parent(e1) {
                    return e1.isChild() ? e1.parent() : e1.cy();
                }
            }, bs = function argSelector(e1) {
                return X(e1) ? new To(e1) : e1;
            }, xs = {
                createEmitter: function createEmitter() {
                    for(var e1 = 0; e1 < this.length; e1++){
                        var t = this[e1], n = t._private;
                        n.emitter || (n.emitter = new Emitter(ys, t));
                    }
                    return this;
                },
                emitter: function emitter() {
                    return this._private.emitter;
                },
                on: function on(e1, t, n) {
                    for(var a = bs(t), i = 0; i < this.length; i++){
                        this[i].emitter().on(e1, a, n);
                    }
                    return this;
                },
                removeListener: function removeListener(e1, t, n) {
                    for(var a = bs(t), i = 0; i < this.length; i++){
                        this[i].emitter().removeListener(e1, a, n);
                    }
                    return this;
                },
                removeAllListeners: function removeAllListeners() {
                    for(var e1 = 0; e1 < this.length; e1++){
                        this[e1].emitter().removeAllListeners();
                    }
                    return this;
                },
                one: function one(e1, t, n) {
                    for(var a = bs(t), i = 0; i < this.length; i++){
                        this[i].emitter().one(e1, a, n);
                    }
                    return this;
                },
                once: function once(e1, t, n) {
                    for(var a = bs(t), i = 0; i < this.length; i++){
                        this[i].emitter().on(e1, a, n, {
                            once: !0,
                            onceCollection: this
                        });
                    }
                },
                emit: function emit(e1, t) {
                    for(var n = 0; n < this.length; n++){
                        this[n].emitter().emit(e1, t);
                    }
                    return this;
                },
                emitAndNotify: function emitAndNotify(e1, t) {
                    if (0 !== this.length) return this.cy().notify(e1, this), this.emit(e1, t), this;
                }
            };
            Fi.eventAliasesOn(xs);
            var ws = {
                nodes: function nodes(e1) {
                    return this.filter(function(e1) {
                        return e1.isNode();
                    }).filter(e1);
                },
                edges: function edges(e1) {
                    return this.filter(function(e1) {
                        return e1.isEdge();
                    }).filter(e1);
                },
                byGroup: function byGroup() {
                    for(var e1 = this.spawn(), t = this.spawn(), n = 0; n < this.length; n++){
                        var a = this[n];
                        a.isNode() ? e1.push(a) : t.push(a);
                    }
                    return {
                        nodes: e1,
                        edges: t
                    };
                },
                filter: function filter(e1, t) {
                    if (void 0 === e1) return this;
                    if (X(e1) || Q(e1)) return new To(e1).filter(this);
                    if (Y(e1)) {
                        for(var n = this.spawn(), a = this, i = 0; i < a.length; i++){
                            var o = a[i];
                            (t ? e1.apply(t, [
                                o,
                                i,
                                a
                            ]) : e1(o, i, a)) && n.push(o);
                        }
                        return n;
                    }
                    return this.spawn();
                },
                not: function not(e1) {
                    if (e1) {
                        X(e1) && (e1 = this.filter(e1));
                        for(var t = this.spawn(), n = 0; n < this.length; n++){
                            var a = this[n];
                            e1.has(a) || t.push(a);
                        }
                        return t;
                    }
                    return this;
                },
                absoluteComplement: function absoluteComplement() {
                    return this.cy().mutableElements().not(this);
                },
                intersect: function intersect(e1) {
                    if (X(e1)) {
                        var t = e1;
                        return this.filter(t);
                    }
                    for(var n = this.spawn(), a = e1, i = this.length < e1.length, o = i ? this : a, s = i ? a : this, l = 0; l < o.length; l++){
                        var u = o[l];
                        s.has(u) && n.push(u);
                    }
                    return n;
                },
                xor: function xor(e1) {
                    var t = this._private.cy;
                    X(e1) && (e1 = t.$(e1));
                    var n = this.spawn(), a = e1, i = function add(e1, t) {
                        for(var a = 0; a < e1.length; a++){
                            var i = e1[a], o = i._private.data.id;
                            t.hasElementWithId(o) || n.push(i);
                        }
                    };
                    return i(this, a), i(a, this), n;
                },
                diff: function diff(e1) {
                    var t = this._private.cy;
                    X(e1) && (e1 = t.$(e1));
                    var n = this.spawn(), a = this.spawn(), i = this.spawn(), o = e1, s = function add(e1, t, n) {
                        for(var a = 0; a < e1.length; a++){
                            var o = e1[a], s = o._private.data.id;
                            t.hasElementWithId(s) ? i.merge(o) : n.push(o);
                        }
                    };
                    return s(this, o, n), s(o, this, a), {
                        left: n,
                        right: a,
                        both: i
                    };
                },
                add: function add(e1) {
                    var t = this._private.cy;
                    if (!e1) return this;
                    if (X(e1)) {
                        var n = e1;
                        e1 = t.mutableElements().filter(n);
                    }
                    for(var a = this.spawnSelf(), i = 0; i < e1.length; i++){
                        var o = e1[i], add = !this.has(o);
                        add && a.push(o);
                    }
                    return a;
                },
                merge: function merge(e1) {
                    var t = this._private, n = t.cy;
                    if (!e1) return this;
                    if (e1 && X(e1)) {
                        var a = e1;
                        e1 = n.mutableElements().filter(a);
                    }
                    for(var i = t.map, o = 0; o < e1.length; o++){
                        var s = e1[o], l = s._private.data.id;
                        if (!i.has(l)) {
                            var u = this.length++;
                            this[u] = s, i.set(l, {
                                ele: s,
                                index: u
                            });
                        }
                    }
                    return this;
                },
                unmergeAt: function unmergeAt(e1) {
                    var t = this[e1].id(), n = this._private.map;
                    this[e1] = void 0, n.delete(t);
                    var a = e1 === this.length - 1;
                    if (this.length > 1 && !a) {
                        var i = this.length - 1, o = this[i], s = o._private.data.id;
                        this[i] = void 0, this[e1] = o, n.set(s, {
                            ele: o,
                            index: e1
                        });
                    }
                    return this.length--, this;
                },
                unmergeOne: function unmergeOne(e1) {
                    e1 = e1[0];
                    var t = this._private, n = e1._private.data.id, a = t.map.get(n);
                    if (!a) return this;
                    var i = a.index;
                    return this.unmergeAt(i), this;
                },
                unmerge: function unmerge(e1) {
                    var t = this._private.cy;
                    if (!e1) return this;
                    if (e1 && X(e1)) {
                        var n = e1;
                        e1 = t.mutableElements().filter(n);
                    }
                    for(var a = 0; a < e1.length; a++)this.unmergeOne(e1[a]);
                    return this;
                },
                unmergeBy: function unmergeBy(e1) {
                    for(var t = this.length - 1; t >= 0; t--){
                        e1(this[t]) && this.unmergeAt(t);
                    }
                    return this;
                },
                map: function map(e1, t) {
                    for(var n = [], a = this, i = 0; i < a.length; i++){
                        var o = a[i], s = t ? e1.apply(t, [
                            o,
                            i,
                            a
                        ]) : e1(o, i, a);
                        n.push(s);
                    }
                    return n;
                },
                reduce: function reduce(e1, t) {
                    for(var n = t, a = this, i = 0; i < a.length; i++)n = e1(n, a[i], i, a);
                    return n;
                },
                max: function max(e1, t) {
                    for(var n, max = -1 / 0, a = this, i = 0; i < a.length; i++){
                        var o = a[i], s = t ? e1.apply(t, [
                            o,
                            i,
                            a
                        ]) : e1(o, i, a);
                        s > max && (max = s, n = o);
                    }
                    return {
                        value: max,
                        ele: n
                    };
                },
                min: function min(e1, t) {
                    for(var n, min = 1 / 0, a = this, i = 0; i < a.length; i++){
                        var o = a[i], s = t ? e1.apply(t, [
                            o,
                            i,
                            a
                        ]) : e1(o, i, a);
                        s < min && (min = s, n = o);
                    }
                    return {
                        value: min,
                        ele: n
                    };
                }
            }, Es = ws;
            Es.u = Es["|"] = Es["+"] = Es.union = Es.or = Es.add, Es["\\"] = Es["!"] = Es["-"] = Es.difference = Es.relativeComplement = Es.subtract = Es.not, Es.n = Es["&"] = Es["."] = Es.and = Es.intersection = Es.intersect, Es["^"] = Es["(+)"] = Es["(-)"] = Es.symmetricDifference = Es.symdiff = Es.xor, Es.fnFilter = Es.filterFn = Es.stdFilter = Es.filter, Es.complement = Es.abscomp = Es.absoluteComplement;
            var Cs = function zIndexSort(e1, t) {
                var n = e1.cy().hasCompoundNodes();
                function getDepth(e1) {
                    var t = e1.pstyle("z-compound-depth");
                    return "auto" === t.value ? n ? e1.zDepth() : 0 : "bottom" === t.value ? -1 : "top" === t.value ? je : 0;
                }
                var a = getDepth(e1) - getDepth(t);
                if (0 !== a) return a;
                function getEleDepth(e1) {
                    return "auto" === e1.pstyle("z-index-compare").value && e1.isNode() ? 1 : 0;
                }
                var i = getEleDepth(e1) - getEleDepth(t);
                if (0 !== i) return i;
                var o = e1.pstyle("z-index").value - t.pstyle("z-index").value;
                return 0 !== o ? o : e1.poolIndex() - t.poolIndex();
            }, Ts = {
                forEach: function forEach(e1, t) {
                    if (Y(e1)) for(var n = this.length, a = 0; a < n; a++){
                        var i = this[a];
                        if (!1 === (t ? e1.apply(t, [
                            i,
                            a,
                            this
                        ]) : e1(i, a, this))) break;
                    }
                    return this;
                },
                toArray: function toArray() {
                    for(var e1 = [], t = 0; t < this.length; t++)e1.push(this[t]);
                    return e1;
                },
                slice: function slice(e1, t) {
                    var n = [], a = this.length;
                    null == t && (t = a), null == e1 && (e1 = 0), e1 < 0 && (e1 = a + e1), t < 0 && (t = a + t);
                    for(var i = e1; i >= 0 && i < t && i < a; i++)n.push(this[i]);
                    return this.spawn(n);
                },
                size: function size() {
                    return this.length;
                },
                eq: function eq(e1) {
                    return this[e1] || this.spawn();
                },
                first: function first() {
                    return this[0] || this.spawn();
                },
                last: function last() {
                    return this[this.length - 1] || this.spawn();
                },
                empty: function empty() {
                    return 0 === this.length;
                },
                nonempty: function nonempty() {
                    return !this.empty();
                },
                sort: function sort(e1) {
                    if (!Y(e1)) return this;
                    var t = this.toArray().sort(e1);
                    return this.spawn(t);
                },
                sortByZIndex: function sortByZIndex() {
                    return this.sort(Cs);
                },
                zDepth: function zDepth() {
                    var e1 = this[0];
                    if (e1) {
                        var t = e1._private;
                        if ("nodes" === t.group) {
                            var n = t.data.parent ? e1.parents().size() : 0;
                            return e1.isParent() ? n : je - 1;
                        }
                        var a = t.source, i = t.target, o = a.zDepth(), s = i.zDepth();
                        return Math.max(o, s, 0);
                    }
                }
            };
            Ts.each = Ts.forEach;
            !function defineSymbolIterator() {
                var e1 = "undefined";
                ("undefined" == typeof Symbol ? "undefined" : _typeof(Symbol)) != e1 && _typeof(Symbol.iterator) != e1 && (Ts[Symbol.iterator] = function() {
                    var e1 = this, t = {
                        value: void 0,
                        done: !1
                    }, n = 0, a = this.length;
                    return _defineProperty$1({
                        next: function next() {
                            return n < a ? t.value = e1[n++] : (t.value = void 0, t.done = !0), t;
                        }
                    }, Symbol.iterator, function() {
                        return this;
                    });
                });
            }();
            var ks = et({
                nodeDimensionsIncludeLabels: !1
            }), Ss = {
                layoutDimensions: function layoutDimensions(e1) {
                    var t;
                    if (e1 = ks(e1), this.takesUpSpace()) if (e1.nodeDimensionsIncludeLabels) {
                        var n = this.boundingBox();
                        t = {
                            w: n.w,
                            h: n.h
                        };
                    } else t = {
                        w: this.outerWidth(),
                        h: this.outerHeight()
                    };
                    else t = {
                        w: 0,
                        h: 0
                    };
                    return 0 !== t.w && 0 !== t.h || (t.w = t.h = 1), t;
                },
                layoutPositions: function layoutPositions(e1, t, n) {
                    var a = this.nodes().filter(function(e1) {
                        return !e1.isParent();
                    }), i = this.cy(), o = t.eles, s = function getMemoizeKey(e1) {
                        return e1.id();
                    }, l = ie(n, s);
                    e1.emit({
                        type: "layoutstart",
                        layout: e1
                    }), e1.animations = [];
                    var u = t.spacingFactor && 1 !== t.spacingFactor, c = function spacingBb() {
                        if (!u) return null;
                        for(var e1 = jt(), t = 0; t < a.length; t++){
                            var n = a[t], i = l(n, t);
                            Ht(e1, i.x, i.y);
                        }
                        return e1;
                    }(), d = ie(function(e1, n) {
                        var a = l(e1, n);
                        u && (a = function calculateSpacing(e1, t, n) {
                            var a = t.x1 + t.w / 2, i = t.y1 + t.h / 2;
                            return {
                                x: a + (n.x - a) * e1,
                                y: i + (n.y - i) * e1
                            };
                        }(Math.abs(t.spacingFactor), c, a));
                        return null != t.transform && (a = t.transform(e1, a)), a;
                    }, s);
                    if (t.animate) {
                        for(var h = 0; h < a.length; h++){
                            var p = a[h], g = d(p, h);
                            if (null == t.animateFilter || t.animateFilter(p, h)) {
                                var v = p.animation({
                                    position: g,
                                    duration: t.animationDuration,
                                    easing: t.animationEasing
                                });
                                e1.animations.push(v);
                            } else p.position(g);
                        }
                        if (t.fit) {
                            var y = i.animation({
                                fit: {
                                    boundingBox: o.boundingBoxAt(d),
                                    padding: t.padding
                                },
                                duration: t.animationDuration,
                                easing: t.animationEasing
                            });
                            e1.animations.push(y);
                        } else if (void 0 !== t.zoom && void 0 !== t.pan) {
                            var m = i.animation({
                                zoom: t.zoom,
                                pan: t.pan,
                                duration: t.animationDuration,
                                easing: t.animationEasing
                            });
                            e1.animations.push(m);
                        }
                        e1.animations.forEach(function(e1) {
                            return e1.play();
                        }), e1.one("layoutready", t.ready), e1.emit({
                            type: "layoutready",
                            layout: e1
                        }), Ir.all(e1.animations.map(function(e1) {
                            return e1.promise();
                        })).then(function() {
                            e1.one("layoutstop", t.stop), e1.emit({
                                type: "layoutstop",
                                layout: e1
                            });
                        });
                    } else a.positions(d), t.fit && i.fit(t.eles, t.padding), null != t.zoom && i.zoom(t.zoom), t.pan && i.pan(t.pan), e1.one("layoutready", t.ready), e1.emit({
                        type: "layoutready",
                        layout: e1
                    }), e1.one("layoutstop", t.stop), e1.emit({
                        type: "layoutstop",
                        layout: e1
                    });
                    return this;
                },
                layout: function layout(e1) {
                    return this.cy().makeLayout(ve({}, e1, {
                        eles: this
                    }));
                }
            };
            function styleCache(e1, t, n) {
                var a, i = n._private, o = i.styleCache = i.styleCache || [];
                return null != (a = o[e1]) ? a : a = o[e1] = t(n);
            }
            function cacheStyleFunction(e1, t) {
                return e1 = Ne(e1), function cachedStyleFunction(n) {
                    return styleCache(e1, t, n);
                };
            }
            function cachePrototypeStyleFunction(e1, t) {
                e1 = Ne(e1);
                var n = function selfFn(e1) {
                    return t.call(e1);
                };
                return function cachedPrototypeStyleFunction() {
                    var t = this[0];
                    if (t) return styleCache(e1, n, t);
                };
            }
            Ss.createLayout = Ss.makeLayout = Ss.layout;
            var Ps = {
                recalculateRenderedStyle: function recalculateRenderedStyle(e1) {
                    var t = this.cy(), n = t.renderer(), a = t.styleEnabled();
                    return n && a && n.recalculateRenderedStyle(this, e1), this;
                },
                dirtyStyleCache: function dirtyStyleCache() {
                    var e1, t = this.cy(), n = function dirty(e1) {
                        return e1._private.styleCache = null;
                    };
                    t.hasCompoundNodes() ? ((e1 = this.spawnSelf().merge(this.descendants()).merge(this.parents())).merge(e1.connectedEdges()), e1.forEach(n)) : this.forEach(function(e1) {
                        n(e1), e1.connectedEdges().forEach(n);
                    });
                    return this;
                },
                updateStyle: function updateStyle(e1) {
                    var t = this._private.cy;
                    if (!t.styleEnabled()) return this;
                    if (t.batching()) return t._private.batchStyleEles.merge(this), this;
                    var n = this;
                    e1 = !(!e1 && void 0 !== e1), t.hasCompoundNodes() && (n = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
                    var a = n;
                    return e1 ? a.emitAndNotify("style") : a.emit("style"), n.forEach(function(e1) {
                        return e1._private.styleDirty = !0;
                    }), this;
                },
                cleanStyle: function cleanStyle() {
                    var e1 = this.cy();
                    if (e1.styleEnabled()) for(var t = 0; t < this.length; t++){
                        var n = this[t];
                        n._private.styleDirty && (n._private.styleDirty = !1, e1.style().apply(n));
                    }
                },
                parsedStyle: function parsedStyle(e1) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = this[0], a = n.cy();
                    if (a.styleEnabled() && n) {
                        n._private.styleDirty && (n._private.styleDirty = !1, a.style().apply(n));
                        var i = n._private.style[e1];
                        return null != i ? i : t ? a.style().getDefaultProperty(e1) : null;
                    }
                },
                numericStyle: function numericStyle(e1) {
                    var t = this[0];
                    if (t.cy().styleEnabled() && t) {
                        var n = t.pstyle(e1);
                        return void 0 !== n.pfValue ? n.pfValue : n.value;
                    }
                },
                numericStyleUnits: function numericStyleUnits(e1) {
                    var t = this[0];
                    if (t.cy().styleEnabled()) return t ? t.pstyle(e1).units : void 0;
                },
                renderedStyle: function renderedStyle(e1) {
                    var t = this.cy();
                    if (!t.styleEnabled()) return this;
                    var n = this[0];
                    return n ? t.style().getRenderedStyle(n, e1) : void 0;
                },
                style: function style(e1, t) {
                    var n = this.cy();
                    if (!n.styleEnabled()) return this;
                    var a = !1, style = n.style();
                    if (G(e1)) {
                        var i = e1;
                        style.applyBypass(this, i, a), this.emitAndNotify("style");
                    } else if (X(e1)) {
                        if (void 0 === t) {
                            var o = this[0];
                            return o ? style.getStylePropertyValue(o, e1) : void 0;
                        }
                        style.applyBypass(this, e1, t, a), this.emitAndNotify("style");
                    } else if (void 0 === e1) {
                        var s = this[0];
                        return s ? style.getRawStyle(s) : void 0;
                    }
                    return this;
                },
                removeStyle: function removeStyle(e1) {
                    var t = this.cy();
                    if (!t.styleEnabled()) return this;
                    var n = !1, a = t.style(), i = this;
                    if (void 0 === e1) for(var o = 0; o < i.length; o++){
                        var s = i[o];
                        a.removeAllBypasses(s, n);
                    }
                    else {
                        e1 = e1.split(/\s+/);
                        for(var l = 0; l < i.length; l++){
                            var u = i[l];
                            a.removeBypasses(u, e1, n);
                        }
                    }
                    return this.emitAndNotify("style"), this;
                },
                show: function show() {
                    return this.css("display", "element"), this;
                },
                hide: function hide() {
                    return this.css("display", "none"), this;
                },
                effectiveOpacity: function effectiveOpacity() {
                    var e1 = this.cy();
                    if (!e1.styleEnabled()) return 1;
                    var t = e1.hasCompoundNodes(), n = this[0];
                    if (n) {
                        var a = n._private, i = n.pstyle("opacity").value;
                        if (!t) return i;
                        var o = a.data.parent ? n.parents() : null;
                        if (o) for(var s = 0; s < o.length; s++){
                            i *= o[s].pstyle("opacity").value;
                        }
                        return i;
                    }
                },
                transparent: function transparent() {
                    if (!this.cy().styleEnabled()) return !1;
                    var e1 = this[0], t = e1.cy().hasCompoundNodes();
                    return e1 ? t ? 0 === e1.effectiveOpacity() : 0 === e1.pstyle("opacity").value : void 0;
                },
                backgrounding: function backgrounding() {
                    return !!this.cy().styleEnabled() && !!this[0]._private.backgrounding;
                }
            };
            function checkCompound(e1, t) {
                var n = e1._private.data.parent ? e1.parents() : null;
                if (n) for(var a = 0; a < n.length; a++){
                    if (!t(n[a])) return !1;
                }
                return !0;
            }
            function defineDerivedStateFunction(e1) {
                var t = e1.ok, n = e1.edgeOkViaNode || e1.ok, a = e1.parentOk || e1.ok;
                return function() {
                    var e1 = this.cy();
                    if (!e1.styleEnabled()) return !0;
                    var i = this[0], o = e1.hasCompoundNodes();
                    if (i) {
                        var s = i._private;
                        if (!t(i)) return !1;
                        if (i.isNode()) return !o || checkCompound(i, a);
                        var l = s.source, u = s.target;
                        return n(l) && (!o || checkCompound(l, n)) && (l === u || n(u) && (!o || checkCompound(u, n)));
                    }
                };
            }
            var _s = cacheStyleFunction("eleTakesUpSpace", function(e1) {
                return "element" === e1.pstyle("display").value && 0 !== e1.width() && (!e1.isNode() || 0 !== e1.height());
            });
            Ps.takesUpSpace = cachePrototypeStyleFunction("takesUpSpace", defineDerivedStateFunction({
                ok: _s
            }));
            var Bs = cacheStyleFunction("eleInteractive", function(e1) {
                return "yes" === e1.pstyle("events").value && "visible" === e1.pstyle("visibility").value && _s(e1);
            }), Ds = cacheStyleFunction("parentInteractive", function(e1) {
                return "visible" === e1.pstyle("visibility").value && _s(e1);
            });
            Ps.interactive = cachePrototypeStyleFunction("interactive", defineDerivedStateFunction({
                ok: Bs,
                parentOk: Ds,
                edgeOkViaNode: _s
            })), Ps.noninteractive = function() {
                var e1 = this[0];
                if (e1) return !e1.interactive();
            };
            var As = cacheStyleFunction("eleVisible", function(e1) {
                return "visible" === e1.pstyle("visibility").value && 0 !== e1.pstyle("opacity").pfValue && _s(e1);
            }), Ms = _s;
            Ps.visible = cachePrototypeStyleFunction("visible", defineDerivedStateFunction({
                ok: As,
                edgeOkViaNode: Ms
            })), Ps.hidden = function() {
                var e1 = this[0];
                if (e1) return !e1.visible();
            }, Ps.isBundledBezier = cachePrototypeStyleFunction("isBundledBezier", function() {
                return !!this.cy().styleEnabled() && !this.removed() && "bezier" === this.pstyle("curve-style").value && this.takesUpSpace();
            }), Ps.bypass = Ps.css = Ps.style, Ps.renderedCss = Ps.renderedStyle, Ps.removeBypass = Ps.removeCss = Ps.removeStyle, Ps.pstyle = Ps.parsedStyle;
            var Is = {};
            function defineSwitchFunction(e1) {
                return function() {
                    var t = arguments, n = [];
                    if (2 === t.length) {
                        var a = t[0], i = t[1];
                        this.on(e1.event, a, i);
                    } else if (1 === t.length && Y(t[0])) {
                        var o = t[0];
                        this.on(e1.event, o);
                    } else if (0 === t.length || 1 === t.length && K(t[0])) {
                        for(var s = 1 === t.length ? t[0] : null, l = 0; l < this.length; l++){
                            var u = this[l], c = !e1.ableField || u._private[e1.ableField], d = u._private[e1.field] != e1.value;
                            if (e1.overrideAble) {
                                var h = e1.overrideAble(u);
                                if (void 0 !== h && (c = h, !h)) return this;
                            }
                            c && (u._private[e1.field] = e1.value, d && n.push(u));
                        }
                        var p = this.spawn(n);
                        p.updateStyle(), p.emit(e1.event), s && p.emit(s);
                    }
                    return this;
                };
            }
            function defineSwitchSet(e1) {
                Is[e1.field] = function() {
                    var t = this[0];
                    if (t) {
                        if (e1.overrideField) {
                            var n = e1.overrideField(t);
                            if (void 0 !== n) return n;
                        }
                        return t._private[e1.field];
                    }
                }, Is[e1.on] = defineSwitchFunction({
                    event: e1.on,
                    field: e1.field,
                    ableField: e1.ableField,
                    overrideAble: e1.overrideAble,
                    value: !0
                }), Is[e1.off] = defineSwitchFunction({
                    event: e1.off,
                    field: e1.field,
                    ableField: e1.ableField,
                    overrideAble: e1.overrideAble,
                    value: !1
                });
            }
            defineSwitchSet({
                field: "locked",
                overrideField: function overrideField(e1) {
                    return !!e1.cy().autolock() || void 0;
                },
                on: "lock",
                off: "unlock"
            }), defineSwitchSet({
                field: "grabbable",
                overrideField: function overrideField(e1) {
                    return !e1.cy().autoungrabify() && !e1.pannable() && void 0;
                },
                on: "grabify",
                off: "ungrabify"
            }), defineSwitchSet({
                field: "selected",
                ableField: "selectable",
                overrideAble: function overrideAble(e1) {
                    return !e1.cy().autounselectify() && void 0;
                },
                on: "select",
                off: "unselect"
            }), defineSwitchSet({
                field: "selectable",
                overrideField: function overrideField(e1) {
                    return !e1.cy().autounselectify() && void 0;
                },
                on: "selectify",
                off: "unselectify"
            }), Is.deselect = Is.unselect, Is.grabbed = function() {
                var e1 = this[0];
                if (e1) return e1._private.grabbed;
            }, defineSwitchSet({
                field: "active",
                on: "activate",
                off: "unactivate"
            }), defineSwitchSet({
                field: "pannable",
                on: "panify",
                off: "unpanify"
            }), Is.inactive = function() {
                var e1 = this[0];
                if (e1) return !e1._private.active;
            };
            var Rs = {}, Ls = function defineDagExtremity(e1) {
                return function dagExtremityImpl(t) {
                    for(var n = [], a = 0; a < this.length; a++){
                        var i = this[a];
                        if (i.isNode()) {
                            for(var o = !1, s = i.connectedEdges(), l = 0; l < s.length; l++){
                                var u = s[l], c = u.source(), d = u.target();
                                if (e1.noIncomingEdges && d === i && c !== i || e1.noOutgoingEdges && c === i && d !== i) {
                                    o = !0;
                                    break;
                                }
                            }
                            o || n.push(i);
                        }
                    }
                    return this.spawn(n, !0).filter(t);
                };
            }, Ns = function defineDagOneHop(e1) {
                return function(t) {
                    for(var n = [], a = 0; a < this.length; a++){
                        var i = this[a];
                        if (i.isNode()) for(var o = i.connectedEdges(), s = 0; s < o.length; s++){
                            var l = o[s], u = l.source(), c = l.target();
                            e1.outgoing && u === i ? (n.push(l), n.push(c)) : e1.incoming && c === i && (n.push(l), n.push(u));
                        }
                    }
                    return this.spawn(n, !0).filter(t);
                };
            }, Os = function defineDagAllHops(e1) {
                return function(t) {
                    for(var n = this, a = [], i = {};;){
                        var o = e1.outgoing ? n.outgoers() : n.incomers();
                        if (0 === o.length) break;
                        for(var s = !1, l = 0; l < o.length; l++){
                            var u = o[l], c = u.id();
                            i[c] || (i[c] = !0, a.push(u), s = !0);
                        }
                        if (!s) break;
                        n = o;
                    }
                    return this.spawn(a, !0).filter(t);
                };
            };
            function defineSourceFunction(e1) {
                return function sourceImpl(t) {
                    for(var n = [], a = 0; a < this.length; a++){
                        var i = this[a]._private[e1.attr];
                        i && n.push(i);
                    }
                    return this.spawn(n, !0).filter(t);
                };
            }
            function defineEdgesWithFunction(e1) {
                return function edgesWithImpl(t) {
                    var n = [], a = this._private.cy, i = e1 || {};
                    X(t) && (t = a.$(t));
                    for(var o = 0; o < t.length; o++)for(var s = t[o]._private.edges, l = 0; l < s.length; l++){
                        var u = s[l], c = u._private.data, d = this.hasElementWithId(c.source) && t.hasElementWithId(c.target), h = t.hasElementWithId(c.source) && this.hasElementWithId(c.target);
                        if (d || h) {
                            if (i.thisIsSrc || i.thisIsTgt) {
                                if (i.thisIsSrc && !d) continue;
                                if (i.thisIsTgt && !h) continue;
                            }
                            n.push(u);
                        }
                    }
                    return this.spawn(n, !0);
                };
            }
            function defineParallelEdgesFunction(e1) {
                return e1 = ve({}, {
                    codirected: !1
                }, e1), function parallelEdgesImpl(t) {
                    for(var n = [], a = this.edges(), i = e1, o = 0; o < a.length; o++)for(var s = a[o]._private, l = s.source, u = l._private.data.id, c = s.data.target, d = l._private.edges, h = 0; h < d.length; h++){
                        var p = d[h], g = p._private.data, v = g.target, y = g.source, m = v === c && y === u, b = u === v && c === y;
                        (i.codirected && m || !i.codirected && (m || b)) && n.push(p);
                    }
                    return this.spawn(n, !0).filter(t);
                };
            }
            Rs.clearTraversalCache = function() {
                for(var e1 = 0; e1 < this.length; e1++)this[e1]._private.traversalCache = null;
            }, ve(Rs, {
                roots: Ls({
                    noIncomingEdges: !0
                }),
                leaves: Ls({
                    noOutgoingEdges: !0
                }),
                outgoers: Bo(Ns({
                    outgoing: !0
                }), "outgoers"),
                successors: Os({
                    outgoing: !0
                }),
                incomers: Bo(Ns({
                    incoming: !0
                }), "incomers"),
                predecessors: Os({})
            }), ve(Rs, {
                neighborhood: Bo(function(e1) {
                    for(var t = [], n = this.nodes(), a = 0; a < n.length; a++)for(var i = n[a], o = i.connectedEdges(), s = 0; s < o.length; s++){
                        var l = o[s], u = l.source(), c = l.target(), d = i === u ? c : u;
                        d.length > 0 && t.push(d[0]), t.push(l[0]);
                    }
                    return this.spawn(t, !0).filter(e1);
                }, "neighborhood"),
                closedNeighborhood: function closedNeighborhood(e1) {
                    return this.neighborhood().add(this).filter(e1);
                },
                openNeighborhood: function openNeighborhood(e1) {
                    return this.neighborhood(e1);
                }
            }), Rs.neighbourhood = Rs.neighborhood, Rs.closedNeighbourhood = Rs.closedNeighborhood, Rs.openNeighbourhood = Rs.openNeighborhood, ve(Rs, {
                source: Bo(function sourceImpl(e1) {
                    var t, n = this[0];
                    return n && (t = n._private.source || n.cy().collection()), t && e1 ? t.filter(e1) : t;
                }, "source"),
                target: Bo(function targetImpl(e1) {
                    var t, n = this[0];
                    return n && (t = n._private.target || n.cy().collection()), t && e1 ? t.filter(e1) : t;
                }, "target"),
                sources: defineSourceFunction({
                    attr: "source"
                }),
                targets: defineSourceFunction({
                    attr: "target"
                })
            }), ve(Rs, {
                edgesWith: Bo(defineEdgesWithFunction(), "edgesWith"),
                edgesTo: Bo(defineEdgesWithFunction({
                    thisIsSrc: !0
                }), "edgesTo")
            }), ve(Rs, {
                connectedEdges: Bo(function(e1) {
                    for(var t = [], n = 0; n < this.length; n++){
                        var a = this[n];
                        if (a.isNode()) for(var i = a._private.edges, o = 0; o < i.length; o++){
                            var s = i[o];
                            t.push(s);
                        }
                    }
                    return this.spawn(t, !0).filter(e1);
                }, "connectedEdges"),
                connectedNodes: Bo(function(e1) {
                    for(var t = [], n = 0; n < this.length; n++){
                        var a = this[n];
                        a.isEdge() && (t.push(a.source()[0]), t.push(a.target()[0]));
                    }
                    return this.spawn(t, !0).filter(e1);
                }, "connectedNodes"),
                parallelEdges: Bo(defineParallelEdgesFunction(), "parallelEdges"),
                codirectedEdges: Bo(defineParallelEdgesFunction({
                    codirected: !0
                }), "codirectedEdges")
            }), ve(Rs, {
                components: function components(e1) {
                    var t = this, n = t.cy(), a = n.collection(), i = null == e1 ? t.nodes() : e1.nodes(), components = [];
                    null != e1 && i.empty() && (i = e1.sources());
                    var o = function visitInComponent(e1, t) {
                        a.merge(e1), i.unmerge(e1), t.merge(e1);
                    };
                    if (i.empty()) return t.spawn();
                    var s = function _loop() {
                        var e1 = n.collection();
                        components.push(e1);
                        var a = i[0];
                        o(a, e1), t.bfs({
                            directed: !1,
                            roots: a,
                            visit: function visit(t) {
                                return o(t, e1);
                            }
                        }), e1.forEach(function(n) {
                            n.connectedEdges().forEach(function(n) {
                                t.has(n) && e1.has(n.source()) && e1.has(n.target()) && e1.merge(n);
                            });
                        });
                    };
                    do {
                        s();
                    }while (i.length > 0)
                    return components;
                },
                component: function component() {
                    var e1 = this[0];
                    return e1.cy().mutableElements().components(e1)[0];
                }
            }), Rs.componentsOf = Rs.components;
            var zs = function Collection(e1, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (void 0 !== e1) {
                    var i = new it, o = !1;
                    if (t) {
                        if (t.length > 0 && G(t[0]) && !J(t[0])) {
                            o = !0;
                            for(var s = [], l = new st, u = 0, c = t.length; u < c; u++){
                                var d = t[u];
                                null == d.data && (d.data = {});
                                var h = d.data;
                                if (null == h.id) h.id = $e();
                                else if (e1.hasElementWithId(h.id) || l.has(h.id)) continue;
                                var p = new lt(e1, d, !1);
                                s.push(p), l.add(h.id);
                            }
                            t = s;
                        }
                    } else t = [];
                    this.length = 0;
                    for(var g = 0, v = t.length; g < v; g++){
                        var y = t[g][0];
                        if (null != y) {
                            var m = y._private.data.id;
                            n && i.has(m) || (n && i.set(m, {
                                index: this.length,
                                ele: y
                            }), this[this.length] = y, this.length++);
                        }
                    }
                    this._private = {
                        eles: this,
                        cy: e1,
                        get map () {
                            return null == this.lazyMap && this.rebuildMap(), this.lazyMap;
                        },
                        set map (e){
                            this.lazyMap = e;
                        },
                        rebuildMap: function rebuildMap() {
                            for(var e1 = this.lazyMap = new it, t = this.eles, n = 0; n < t.length; n++){
                                var a = t[n];
                                e1.set(a.id(), {
                                    index: n,
                                    ele: a
                                });
                            }
                        }
                    }, n && (this._private.map = i), o && !a && this.restore();
                } else Ke("A collection must have a reference to the core");
            }, Fs = lt.prototype = zs.prototype = Object.create(Array.prototype);
            Fs.instanceString = function() {
                return "collection";
            }, Fs.spawn = function(e1, t) {
                return new zs(this.cy(), e1, t);
            }, Fs.spawnSelf = function() {
                return this.spawn(this);
            }, Fs.cy = function() {
                return this._private.cy;
            }, Fs.renderer = function() {
                return this._private.cy.renderer();
            }, Fs.element = function() {
                return this[0];
            }, Fs.collection = function() {
                return ee(this) ? this : new zs(this._private.cy, [
                    this
                ]);
            }, Fs.unique = function() {
                return new zs(this._private.cy, this, !0);
            }, Fs.hasElementWithId = function(e1) {
                return e1 = "" + e1, this._private.map.has(e1);
            }, Fs.getElementById = function(e1) {
                e1 = "" + e1;
                var t = this._private.cy, n = this._private.map.get(e1);
                return n ? n.ele : new zs(t);
            }, Fs.$id = Fs.getElementById, Fs.poolIndex = function() {
                var e1 = this._private.cy._private.elements, t = this[0]._private.data.id;
                return e1._private.map.get(t).index;
            }, Fs.indexOf = function(e1) {
                var t = e1[0]._private.data.id;
                return this._private.map.get(t).index;
            }, Fs.indexOfId = function(e1) {
                return e1 = "" + e1, this._private.map.get(e1).index;
            }, Fs.json = function(e1) {
                var t = this.element(), n = this.cy();
                if (null == t && e1) return this;
                if (null != t) {
                    var a = t._private;
                    if (G(e1)) {
                        if (n.startBatch(), e1.data) {
                            t.data(e1.data);
                            var i = a.data;
                            if (t.isEdge()) {
                                var o = !1, s = {}, l = e1.data.source, u = e1.data.target;
                                null != l && l != i.source && (s.source = "" + l, o = !0), null != u && u != i.target && (s.target = "" + u, o = !0), o && (t = t.move(s));
                            } else {
                                var c = "parent" in e1.data, d = e1.data.parent;
                                !c || null == d && null == i.parent || d == i.parent || (void 0 === d && (d = null), null != d && (d = "" + d), t = t.move({
                                    parent: d
                                }));
                            }
                        }
                        e1.position && t.position(e1.position);
                        var h = function checkSwitch(n, i, o) {
                            var s = e1[n];
                            null != s && s !== a[n] && (s ? t[i]() : t[o]());
                        };
                        return h("removed", "remove", "restore"), h("selected", "select", "unselect"), h("selectable", "selectify", "unselectify"), h("locked", "lock", "unlock"), h("grabbable", "grabify", "ungrabify"), h("pannable", "panify", "unpanify"), null != e1.classes && t.classes(e1.classes), n.endBatch(), this;
                    }
                    if (void 0 === e1) {
                        var p = {
                            data: Ze(a.data),
                            position: Ze(a.position),
                            group: a.group,
                            removed: a.removed,
                            selected: a.selected,
                            selectable: a.selectable,
                            locked: a.locked,
                            grabbable: a.grabbable,
                            pannable: a.pannable,
                            classes: (null, "")
                        }, g = 0;
                        return a.classes.forEach(function(e1) {
                            return p.classes += 0 == g++ ? e1 : " " + e1;
                        }), p;
                    }
                }
            }, Fs.jsons = function() {
                for(var e1 = [], t = 0; t < this.length; t++){
                    var n = this[t].json();
                    e1.push(n);
                }
                return e1;
            }, Fs.clone = function() {
                for(var e1 = this.cy(), t = [], n = 0; n < this.length; n++){
                    var a = this[n].json(), i = new lt(e1, a, !1);
                    t.push(i);
                }
                return new zs(e1, t);
            }, Fs.copy = Fs.clone, Fs.restore = function() {
                for(var e1, t, n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = this, o = i.cy(), s = o._private, l = [], u = [], c = 0, d = i.length; c < d; c++){
                    var h = i[c];
                    a && !h.removed() || (h.isNode() ? l.push(h) : u.push(h));
                }
                e1 = l.concat(u);
                var p = function removeFromElements() {
                    e1.splice(t, 1), t--;
                };
                for(t = 0; t < e1.length; t++){
                    var g = e1[t], v = g._private, y = v.data;
                    if (g.clearTraversalCache(), a || v.removed) if (void 0 === y.id) y.id = $e();
                    else if (U(y.id)) y.id = "" + y.id;
                    else {
                        if (re(y.id) || !X(y.id)) {
                            Ke("Can not create element with invalid string ID `" + y.id + "`"), p();
                            continue;
                        }
                        if (o.hasElementWithId(y.id)) {
                            Ke("Can not create second element with ID `" + y.id + "`"), p();
                            continue;
                        }
                    }
                    else ;
                    var m = y.id;
                    if (g.isNode()) {
                        var b = v.position;
                        null == b.x && (b.x = 0), null == b.y && (b.y = 0);
                    }
                    if (g.isEdge()) {
                        for(var x = g, w = [
                            "source",
                            "target"
                        ], E = w.length, T = !1, k = 0; k < E; k++){
                            var S = w[k], P = y[S];
                            U(P) && (P = y[S] = "" + y[S]), null == P || "" === P ? (Ke("Can not create edge `" + m + "` with unspecified " + S), T = !0) : o.hasElementWithId(P) || (Ke("Can not create edge `" + m + "` with nonexistant " + S + " `" + P + "`"), T = !0);
                        }
                        if (T) {
                            p();
                            continue;
                        }
                        var _ = o.getElementById(y.source), D = o.getElementById(y.target);
                        _.same(D) ? _._private.edges.push(x) : (_._private.edges.push(x), D._private.edges.push(x)), x._private.source = _, x._private.target = D;
                    }
                    v.map = new it, v.map.set(m, {
                        ele: g,
                        index: 0
                    }), v.removed = !1, a && o.addToPool(g);
                }
                for(var M = 0; M < l.length; M++){
                    var I = l[M], R = I._private.data;
                    U(R.parent) && (R.parent = "" + R.parent);
                    var L = R.parent;
                    if (null != L || I._private.parent) {
                        var N = I._private.parent ? o.collection().merge(I._private.parent) : o.getElementById(L);
                        if (N.empty()) R.parent = void 0;
                        else if (N[0].removed()) Ue("Node added with missing parent, reference to parent removed"), R.parent = void 0, I._private.parent = null;
                        else {
                            for(var O = !1, z = N; !z.empty();){
                                if (I.same(z)) {
                                    O = !0, R.parent = void 0;
                                    break;
                                }
                                z = z.parent();
                            }
                            O || (N[0]._private.children.push(I), I._private.parent = N[0], s.hasCompoundNodes = !0);
                        }
                    }
                }
                if (e1.length > 0) {
                    for(var V = e1.length === i.length ? i : new zs(o, e1), q = 0; q < V.length; q++){
                        var j = V[q];
                        j.isNode() || (j.parallelEdges().clearTraversalCache(), j.source().clearTraversalCache(), j.target().clearTraversalCache());
                    }
                    (s.hasCompoundNodes ? o.collection().merge(V).merge(V.connectedNodes()).merge(V.parent()) : V).dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(n), n ? V.emitAndNotify("add") : a && V.emit("add");
                }
                return i;
            }, Fs.removed = function() {
                var e1 = this[0];
                return e1 && e1._private.removed;
            }, Fs.inside = function() {
                var e1 = this[0];
                return e1 && !e1._private.removed;
            }, Fs.remove = function() {
                var e1 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = this, a = [], i = {}, o = n._private.cy;
                function add(e1) {
                    var n = i[e1.id()];
                    t && e1.removed() || n || (i[e1.id()] = !0, e1.isNode() ? (a.push(e1), function addConnectedEdges(e1) {
                        for(var t = e1._private.edges, n = 0; n < t.length; n++)add(t[n]);
                    }(e1), function addChildren(e1) {
                        for(var t = e1._private.children, n = 0; n < t.length; n++)add(t[n]);
                    }(e1)) : a.unshift(e1));
                }
                for(var s = 0, l = n.length; s < l; s++){
                    add(n[s]);
                }
                function removeEdgeRef(e1, t) {
                    var n = e1._private.edges;
                    tt(n, t), e1.clearTraversalCache();
                }
                function removeParallelRef(e1) {
                    e1.clearTraversalCache();
                }
                var u = [];
                function removeChildRef(e1, t) {
                    t = t[0];
                    var n = (e1 = e1[0])._private.children, a = e1.id();
                    tt(n, t), t._private.parent = null, u.ids[a] || (u.ids[a] = !0, u.push(e1));
                }
                u.ids = {}, n.dirtyCompoundBoundsCache(), t && o.removeFromPool(a);
                for(var c = 0; c < a.length; c++){
                    var d = a[c];
                    if (d.isEdge()) {
                        var h = d.source()[0], p = d.target()[0];
                        removeEdgeRef(h, d), removeEdgeRef(p, d);
                        for(var g = d.parallelEdges(), v = 0; v < g.length; v++){
                            var y = g[v];
                            removeParallelRef(y), y.isBundledBezier() && y.dirtyBoundingBoxCache();
                        }
                    } else {
                        var m = d.parent();
                        0 !== m.length && removeChildRef(m, d);
                    }
                    t && (d._private.removed = !0);
                }
                var b = o._private.elements;
                o._private.hasCompoundNodes = !1;
                for(var x = 0; x < b.length; x++){
                    if (b[x].isParent()) {
                        o._private.hasCompoundNodes = !0;
                        break;
                    }
                }
                var w = new zs(this.cy(), a);
                w.size() > 0 && (e1 ? w.emitAndNotify("remove") : t && w.emit("remove"));
                for(var E = 0; E < u.length; E++){
                    var T = u[E];
                    t && T.removed() || T.updateStyle();
                }
                return w;
            }, Fs.move = function(e1) {
                var t = this._private.cy, n = this, a = !1, i = !1, o = function toString(e1) {
                    return null == e1 ? e1 : "" + e1;
                };
                if (void 0 !== e1.source || void 0 !== e1.target) {
                    var s = o(e1.source), l = o(e1.target), u = null != s && t.hasElementWithId(s), c = null != l && t.hasElementWithId(l);
                    (u || c) && (t.batch(function() {
                        n.remove(a, i), n.emitAndNotify("moveout");
                        for(var e1 = 0; e1 < n.length; e1++){
                            var t = n[e1], o = t._private.data;
                            t.isEdge() && (u && (o.source = s), c && (o.target = l));
                        }
                        n.restore(a, i);
                    }), n.emitAndNotify("move"));
                } else if (void 0 !== e1.parent) {
                    var d = o(e1.parent);
                    if (null === d || t.hasElementWithId(d)) {
                        var h = null === d ? void 0 : d;
                        t.batch(function() {
                            var e1 = n.remove(a, i);
                            e1.emitAndNotify("moveout");
                            for(var t = 0; t < n.length; t++){
                                var o = n[t], s = o._private.data;
                                o.isNode() && (s.parent = h);
                            }
                            e1.restore(a, i);
                        }), n.emitAndNotify("move");
                    }
                }
                return this;
            }, [
                Sr,
                Vi,
                qi,
                So,
                Do,
                Io,
                Ro,
                ss,
                xs,
                ws,
                {
                    isNode: function isNode() {
                        return "nodes" === this.group();
                    },
                    isEdge: function isEdge() {
                        return "edges" === this.group();
                    },
                    isLoop: function isLoop() {
                        return this.isEdge() && this.source()[0] === this.target()[0];
                    },
                    isSimple: function isSimple() {
                        return this.isEdge() && this.source()[0] !== this.target()[0];
                    },
                    group: function group() {
                        var e1 = this[0];
                        if (e1) return e1._private.group;
                    }
                },
                Ts,
                Ss,
                Ps,
                Is,
                Rs
            ].forEach(function(e1) {
                ve(Fs, e1);
            });
            var Vs = {
                add: function add(e1) {
                    var t, n = this;
                    if (Q(e1)) {
                        var a = e1;
                        if (a._private.cy === n) t = a.restore();
                        else {
                            for(var i = [], o = 0; o < a.length; o++){
                                var s = a[o];
                                i.push(s.json());
                            }
                            t = new zs(n, i);
                        }
                    } else if (K(e1)) {
                        t = new zs(n, e1);
                    } else if (G(e1) && (K(e1.nodes) || K(e1.edges))) {
                        for(var l = e1, u = [], c = [
                            "nodes",
                            "edges"
                        ], d = 0, h = c.length; d < h; d++){
                            var p = c[d], g = l[p];
                            if (K(g)) for(var v = 0, y = g.length; v < y; v++){
                                var m = ve({
                                    group: p
                                }, g[v]);
                                u.push(m);
                            }
                        }
                        t = new zs(n, u);
                    } else {
                        t = new lt(n, e1).collection();
                    }
                    return t;
                },
                remove: function remove(e1) {
                    if (Q(e1)) ;
                    else if (X(e1)) {
                        var t = e1;
                        e1 = this.$(t);
                    }
                    return e1.remove();
                }
            };
            function generateCubicBezier(e1, t, n, a) {
                var i = .1, o = "undefined" != typeof Float32Array;
                if (4 !== arguments.length) return !1;
                for(var s = 0; s < 4; ++s)if ("number" != typeof arguments[s] || isNaN(arguments[s]) || !isFinite(arguments[s])) return !1;
                e1 = Math.min(e1, 1), n = Math.min(n, 1), e1 = Math.max(e1, 0), n = Math.max(n, 0);
                var l = o ? new Float32Array(11) : new Array(11);
                function A(e1, t) {
                    return 1 - 3 * t + 3 * e1;
                }
                function B(e1, t) {
                    return 3 * t - 6 * e1;
                }
                function C(e1) {
                    return 3 * e1;
                }
                function calcBezier(e1, t, n) {
                    return ((A(t, n) * e1 + B(t, n)) * e1 + C(t)) * e1;
                }
                function getSlope(e1, t, n) {
                    return 3 * A(t, n) * e1 * e1 + 2 * B(t, n) * e1 + C(t);
                }
                function getTForX(t) {
                    for(var a = 0, o = 1; 10 !== o && l[o] <= t; ++o)a += i;
                    --o;
                    var s = a + (t - l[o]) / (l[o + 1] - l[o]) * i, u = getSlope(s, e1, n);
                    return u >= .001 ? function newtonRaphsonIterate(t, a) {
                        for(var i = 0; i < 4; ++i){
                            var o = getSlope(a, e1, n);
                            if (0 === o) return a;
                            a -= (calcBezier(a, e1, n) - t) / o;
                        }
                        return a;
                    }(t, s) : 0 === u ? s : function binarySubdivide(t, a, i) {
                        var o, s, l = 0;
                        do {
                            (o = calcBezier(s = a + (i - a) / 2, e1, n) - t) > 0 ? i = s : a = s;
                        }while (Math.abs(o) > 1e-7 && ++l < 10)
                        return s;
                    }(t, a, a + i);
                }
                var u = !1;
                function precompute() {
                    u = !0, e1 === t && n === a || function calcSampleValues() {
                        for(var t = 0; t < 11; ++t)l[t] = calcBezier(t * i, e1, n);
                    }();
                }
                var c = function f(i) {
                    return u || precompute(), e1 === t && n === a ? i : 0 === i ? 0 : 1 === i ? 1 : calcBezier(getTForX(i), t, a);
                };
                c.getControlPoints = function() {
                    return [
                        {
                            x: e1,
                            y: t
                        },
                        {
                            x: n,
                            y: a
                        }
                    ];
                };
                var d = "generateBezier(" + [
                    e1,
                    t,
                    n,
                    a
                ] + ")";
                return c.toString = function() {
                    return d;
                }, c;
            }
            var qs = function() {
                function springAccelerationForState(e1) {
                    return -e1.tension * e1.x - e1.friction * e1.v;
                }
                function springEvaluateStateWithDerivative(e1, t, n) {
                    var a = {
                        x: e1.x + n.dx * t,
                        v: e1.v + n.dv * t,
                        tension: e1.tension,
                        friction: e1.friction
                    };
                    return {
                        dx: a.v,
                        dv: springAccelerationForState(a)
                    };
                }
                function springIntegrateState(e1, t) {
                    var n = {
                        dx: e1.v,
                        dv: springAccelerationForState(e1)
                    }, a = springEvaluateStateWithDerivative(e1, .5 * t, n), i = springEvaluateStateWithDerivative(e1, .5 * t, a), o = springEvaluateStateWithDerivative(e1, t, i), s = 1 / 6 * (n.dx + 2 * (a.dx + i.dx) + o.dx), l = 1 / 6 * (n.dv + 2 * (a.dv + i.dv) + o.dv);
                    return e1.x = e1.x + s * t, e1.v = e1.v + l * t, e1;
                }
                return function springRK4Factory(e1, t, n) {
                    var a, i, o, s = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    }, l = [
                        0
                    ], u = 0, c = 1e-4;
                    for(e1 = parseFloat(e1) || 500, t = parseFloat(t) || 20, n = n || null, s.tension = e1, s.friction = t, i = (a = null !== n) ? (u = springRK4Factory(e1, t)) / n * .016 : .016; o = springIntegrateState(o || s, i), l.push(1 + o.x), u += 16, Math.abs(o.x) > c && Math.abs(o.v) > c;);
                    return a ? function(e1) {
                        return l[e1 * (l.length - 1) | 0];
                    } : u;
                };
            }(), js = function cubicBezier(e1, t, n, a) {
                var i = generateCubicBezier(e1, t, n, a);
                return function(e1, t, n) {
                    return e1 + (t - e1) * i(n);
                };
            }, Ws = {
                linear: function linear(e1, t, n) {
                    return e1 + (t - e1) * n;
                },
                ease: js(.25, .1, .25, 1),
                "ease-in": js(.42, 0, 1, 1),
                "ease-out": js(0, 0, .58, 1),
                "ease-in-out": js(.42, 0, .58, 1),
                "ease-in-sine": js(.47, 0, .745, .715),
                "ease-out-sine": js(.39, .575, .565, 1),
                "ease-in-out-sine": js(.445, .05, .55, .95),
                "ease-in-quad": js(.55, .085, .68, .53),
                "ease-out-quad": js(.25, .46, .45, .94),
                "ease-in-out-quad": js(.455, .03, .515, .955),
                "ease-in-cubic": js(.55, .055, .675, .19),
                "ease-out-cubic": js(.215, .61, .355, 1),
                "ease-in-out-cubic": js(.645, .045, .355, 1),
                "ease-in-quart": js(.895, .03, .685, .22),
                "ease-out-quart": js(.165, .84, .44, 1),
                "ease-in-out-quart": js(.77, 0, .175, 1),
                "ease-in-quint": js(.755, .05, .855, .06),
                "ease-out-quint": js(.23, 1, .32, 1),
                "ease-in-out-quint": js(.86, 0, .07, 1),
                "ease-in-expo": js(.95, .05, .795, .035),
                "ease-out-expo": js(.19, 1, .22, 1),
                "ease-in-out-expo": js(1, 0, 0, 1),
                "ease-in-circ": js(.6, .04, .98, .335),
                "ease-out-circ": js(.075, .82, .165, 1),
                "ease-in-out-circ": js(.785, .135, .15, .86),
                spring: function spring(e1, t, n) {
                    if (0 === n) return Ws.linear;
                    var spring = qs(e1, t, n);
                    return function(e1, t, n) {
                        return e1 + (t - e1) * spring(n);
                    };
                },
                "cubic-bezier": js
            };
            function getEasedValue(e1, t, n, a, i) {
                if (1 === a) return n;
                if (t === n) return n;
                var o = i(t, n, a);
                return null == e1 || ((e1.roundValue || e1.color) && (o = Math.round(o)), void 0 !== e1.min && (o = Math.max(o, e1.min)), void 0 !== e1.max && (o = Math.min(o, e1.max))), o;
            }
            function getValue(e1, t) {
                return null != e1.pfValue || null != e1.value ? null == e1.pfValue || null != t && "%" === t.type.units ? e1.value : e1.pfValue : e1;
            }
            function ease(e1, t, n, a, i) {
                var o = null != i ? i.type : null;
                n < 0 ? n = 0 : n > 1 && (n = 1);
                var s = getValue(e1, i), l = getValue(t, i);
                if (U(s) && U(l)) return getEasedValue(o, s, l, n, a);
                if (K(s) && K(l)) {
                    for(var u = [], c = 0; c < l.length; c++){
                        var d = s[c], h = l[c];
                        if (null != d && null != h) {
                            var p = getEasedValue(o, d, h, n, a);
                            u.push(p);
                        } else u.push(h);
                    }
                    return u;
                }
            }
            function step$1(e1, t, n, a) {
                var i = !a, o = e1._private, s = t._private, l = s.easing, u = s.startTime, c = (a ? e1 : e1.cy()).style();
                if (!s.easingImpl) if (null == l) s.easingImpl = Ws.linear;
                else {
                    var d, h, p;
                    if (X(l)) d = c.parse("transition-timing-function", l).value;
                    else d = l;
                    X(d) ? (h = d, p = []) : (h = d[1], p = d.slice(2).map(function(e1) {
                        return +e1;
                    })), p.length > 0 ? ("spring" === h && p.push(s.duration), s.easingImpl = Ws[h].apply(null, p)) : s.easingImpl = Ws[h];
                }
                var g, v = s.easingImpl;
                if (g = 0 === s.duration ? 1 : (n - u) / s.duration, s.applying && (g = s.progress), g < 0 ? g = 0 : g > 1 && (g = 1), null == s.delay) {
                    var y = s.startPosition, m = s.position;
                    if (m && i && !e1.locked()) {
                        var b = {};
                        valid(y.x, m.x) && (b.x = ease(y.x, m.x, g, v)), valid(y.y, m.y) && (b.y = ease(y.y, m.y, g, v)), e1.position(b);
                    }
                    var x = s.startPan, w = s.pan, E = o.pan, T = null != w && a;
                    T && (valid(x.x, w.x) && (E.x = ease(x.x, w.x, g, v)), valid(x.y, w.y) && (E.y = ease(x.y, w.y, g, v)), e1.emit("pan"));
                    var k = s.startZoom, S = s.zoom, P = null != S && a;
                    P && (valid(k, S) && (o.zoom = qt(o.minZoom, ease(k, S, g, v), o.maxZoom)), e1.emit("zoom")), (T || P) && e1.emit("viewport");
                    var _ = s.style;
                    if (_ && _.length > 0 && i) {
                        for(var D = 0; D < _.length; D++){
                            var M = _[D], I = M.name, R = M, L = s.startStyle[I], N = ease(L, R, g, v, c.properties[L.name]);
                            c.overrideBypass(e1, I, N);
                        }
                        e1.emit("style");
                    }
                }
                return s.progress = g, g;
            }
            function valid(e1, t) {
                return null != e1 && null != t && (!(!U(e1) || !U(t)) || !(!e1 || !t));
            }
            function startAnimation(e1, t, n, a) {
                var i = t._private;
                i.started = !0, i.startTime = n - i.progress * i.duration;
            }
            function stepAll(e1, t) {
                var n = t._private.aniEles, a = [];
                function stepOne(t, n) {
                    var i = t._private, o = i.animation.current, s = i.animation.queue, l = !1;
                    if (0 === o.length) {
                        var u = s.shift();
                        u && o.push(u);
                    }
                    for(var c = function callbacks(e1) {
                        for(var t = e1.length - 1; t >= 0; t--){
                            (0, e1[t])();
                        }
                        e1.splice(0, e1.length);
                    }, d = o.length - 1; d >= 0; d--){
                        var h = o[d], p = h._private;
                        p.stopped ? (o.splice(d, 1), p.hooked = !1, p.playing = !1, p.started = !1, c(p.frames)) : (p.playing || p.applying) && (p.playing && p.applying && (p.applying = !1), p.started || startAnimation(0, h, e1), step$1(t, h, e1, n), p.applying && (p.applying = !1), c(p.frames), null != p.step && p.step(e1), h.completed() && (o.splice(d, 1), p.hooked = !1, p.playing = !1, p.started = !1, c(p.completes)), l = !0);
                    }
                    return n || 0 !== o.length || 0 !== s.length || a.push(t), l;
                }
                for(var i = !1, o = 0; o < n.length; o++){
                    var s = stepOne(n[o]);
                    i = i || s;
                }
                var l = stepOne(t, !0);
                (i || l) && (n.length > 0 ? t.notify("draw", n) : t.notify("draw")), n.unmerge(a), t.emit("step");
            }
            var Hs = {
                animate: Fi.animate(),
                animation: Fi.animation(),
                animated: Fi.animated(),
                clearQueue: Fi.clearQueue(),
                delay: Fi.delay(),
                delayAnimation: Fi.delayAnimation(),
                stop: Fi.stop(),
                addToAnimationPool: function addToAnimationPool(e1) {
                    this.styleEnabled() && this._private.aniEles.merge(e1);
                },
                stopAnimationLoop: function stopAnimationLoop() {
                    this._private.animationsRunning = !1;
                },
                startAnimationLoop: function startAnimationLoop() {
                    var e1 = this;
                    if (e1._private.animationsRunning = !0, e1.styleEnabled()) {
                        var t = e1.renderer();
                        t && t.beforeRender ? t.beforeRender(function rendererAnimationStep(t, n) {
                            stepAll(n, e1);
                        }, t.beforeRenderPriorities.animations) : function headlessStep() {
                            e1._private.animationsRunning && Se(function animationStep(t) {
                                stepAll(t, e1), headlessStep();
                            });
                        }();
                    }
                }
            }, Xs = {
                qualifierCompare: function qualifierCompare(e1, t) {
                    return null == e1 || null == t ? null == e1 && null == t : e1.sameText(t);
                },
                eventMatches: function eventMatches(e1, t, n) {
                    var a = t.qualifier;
                    return null == a || e1 !== n.target && J(n.target) && a.matches(n.target);
                },
                addEventFields: function addEventFields(e1, t) {
                    t.cy = e1, t.target = e1;
                },
                callbackContext: function callbackContext(e1, t, n) {
                    return null != t.qualifier ? n.target : e1;
                }
            }, Ys = function argSelector(e1) {
                return X(e1) ? new To(e1) : e1;
            }, Ks = {
                createEmitter: function createEmitter() {
                    var e1 = this._private;
                    return e1.emitter || (e1.emitter = new Emitter(Xs, this)), this;
                },
                emitter: function emitter() {
                    return this._private.emitter;
                },
                on: function on(e1, t, n) {
                    return this.emitter().on(e1, Ys(t), n), this;
                },
                removeListener: function removeListener(e1, t, n) {
                    return this.emitter().removeListener(e1, Ys(t), n), this;
                },
                removeAllListeners: function removeAllListeners() {
                    return this.emitter().removeAllListeners(), this;
                },
                one: function one(e1, t, n) {
                    return this.emitter().one(e1, Ys(t), n), this;
                },
                once: function once(e1, t, n) {
                    return this.emitter().one(e1, Ys(t), n), this;
                },
                emit: function emit(e1, t) {
                    return this.emitter().emit(e1, t), this;
                },
                emitAndNotify: function emitAndNotify(e1, t) {
                    return this.emit(e1), this.notify(e1, t), this;
                }
            };
            Fi.eventAliasesOn(Ks);
            var Gs = {
                png: function png(e1) {
                    return e1 = e1 || {}, this._private.renderer.png(e1);
                },
                jpg: function jpg(e1) {
                    var t = this._private.renderer;
                    return (e1 = e1 || {}).bg = e1.bg || "#fff", t.jpg(e1);
                }
            };
            Gs.jpeg = Gs.jpg;
            var Us = {
                layout: function layout(e1) {
                    var t = this;
                    if (null != e1) if (null != e1.name) {
                        var n = e1.name, a = t.extension("layout", n);
                        if (null != a) {
                            var i;
                            i = X(e1.eles) ? t.$(e1.eles) : null != e1.eles ? e1.eles : t.$();
                            var layout = new a(ve({}, e1, {
                                cy: t,
                                eles: i
                            }));
                            return layout;
                        }
                        Ke("No such layout `" + n + "` found.  Did you forget to import it and `cytoscape.use()` it?");
                    } else Ke("A `name` must be specified to make a layout");
                    else Ke("Layout options must be specified to make a layout");
                }
            };
            Us.createLayout = Us.makeLayout = Us.layout;
            var Zs = {
                notify: function notify(e1, t) {
                    var n = this._private;
                    if (this.batching()) {
                        n.batchNotifications = n.batchNotifications || {};
                        var a = n.batchNotifications[e1] = n.batchNotifications[e1] || this.collection();
                        null != t && a.merge(t);
                    } else if (n.notificationsEnabled) {
                        var i = this.renderer();
                        !this.destroyed() && i && i.notify(e1, t);
                    }
                },
                notifications: function notifications(e1) {
                    var t = this._private;
                    return void 0 === e1 ? t.notificationsEnabled : (t.notificationsEnabled = !!e1, this);
                },
                noNotifications: function noNotifications(e1) {
                    this.notifications(!1), e1(), this.notifications(!0);
                },
                batching: function batching() {
                    return this._private.batchCount > 0;
                },
                startBatch: function startBatch() {
                    var e1 = this._private;
                    return null == e1.batchCount && (e1.batchCount = 0), 0 === e1.batchCount && (e1.batchStyleEles = this.collection(), e1.batchNotifications = {}), e1.batchCount++, this;
                },
                endBatch: function endBatch() {
                    var e1 = this._private;
                    if (0 === e1.batchCount) return this;
                    if (e1.batchCount--, 0 === e1.batchCount) {
                        e1.batchStyleEles.updateStyle();
                        var t = this.renderer();
                        Object.keys(e1.batchNotifications).forEach(function(n) {
                            var a = e1.batchNotifications[n];
                            a.empty() ? t.notify(n) : t.notify(n, a);
                        });
                    }
                    return this;
                },
                batch: function batch(e1) {
                    return this.startBatch(), e1(), this.endBatch(), this;
                },
                batchData: function batchData(e1) {
                    var t = this;
                    return this.batch(function() {
                        for(var n = Object.keys(e1), a = 0; a < n.length; a++){
                            var i = n[a], o = e1[i];
                            t.getElementById(i).data(o);
                        }
                    });
                }
            }, $s = et({
                hideEdgesOnViewport: !1,
                textureOnViewport: !1,
                motionBlur: !1,
                motionBlurOpacity: .05,
                pixelRatio: void 0,
                desktopTapThreshold: 4,
                touchTapThreshold: 8,
                wheelSensitivity: 1,
                debug: !1,
                showFps: !1,
                webgl: !1,
                webglDebug: !1,
                webglDebugShowAtlases: !1,
                webglTexSize: 2048,
                webglTexRows: 36,
                webglTexRowsNodes: 18,
                webglBatchSize: 2048,
                webglTexPerBatch: 14,
                webglBgColor: [
                    255,
                    255,
                    255
                ]
            }), Qs = {
                renderTo: function renderTo(e1, t, n, a) {
                    return this._private.renderer.renderTo(e1, t, n, a), this;
                },
                renderer: function renderer() {
                    return this._private.renderer;
                },
                forceRender: function forceRender() {
                    return this.notify("draw"), this;
                },
                resize: function resize() {
                    return this.invalidateSize(), this.emitAndNotify("resize"), this;
                },
                initRenderer: function initRenderer(e1) {
                    var t = this, n = t.extension("renderer", e1.name);
                    if (null != n) {
                        void 0 !== e1.wheelSensitivity && Ue("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
                        var a = $s(e1);
                        a.cy = t, t._private.renderer = new n(a), this.notify("init");
                    } else Ke("Can not initialise: No such renderer `".concat(e1.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
                },
                destroyRenderer: function destroyRenderer() {
                    var e1 = this;
                    e1.notify("destroy");
                    var t = e1.container();
                    if (t) for(t._cyreg = null; t.childNodes.length > 0;)t.removeChild(t.childNodes[0]);
                    e1._private.renderer = null, e1.mutableElements().forEach(function(e1) {
                        var t = e1._private;
                        t.rscratch = {}, t.rstyle = {}, t.animation.current = [], t.animation.queue = [];
                    });
                },
                onRender: function onRender(e1) {
                    return this.on("render", e1);
                },
                offRender: function offRender(e1) {
                    return this.off("render", e1);
                }
            };
            Qs.invalidateDimensions = Qs.resize;
            var Js = {
                collection: function collection(e1, t) {
                    return X(e1) ? this.$(e1) : Q(e1) ? e1.collection() : K(e1) ? (t || (t = {}), new zs(this, e1, t.unique, t.removed)) : new zs(this);
                },
                nodes: function nodes(e1) {
                    var nodes = this.$(function(e1) {
                        return e1.isNode();
                    });
                    return e1 ? nodes.filter(e1) : nodes;
                },
                edges: function edges(e1) {
                    var edges = this.$(function(e1) {
                        return e1.isEdge();
                    });
                    return e1 ? edges.filter(e1) : edges;
                },
                $: function $(e1) {
                    var t = this._private.elements;
                    return e1 ? t.filter(e1) : t.spawnSelf();
                },
                mutableElements: function mutableElements() {
                    return this._private.elements;
                }
            };
            Js.elements = Js.filter = Js.$;
            var el = {}, tl = "t";
            el.apply = function(e1) {
                for(var t = this, n = t._private.cy.collection(), a = 0; a < e1.length; a++){
                    var i = e1[a], o = t.getContextMeta(i);
                    if (!o.empty) {
                        var s = t.getContextStyle(o), l = t.applyContextStyle(o, s, i);
                        i._private.appliedInitStyle ? t.updateTransitions(i, l.diffProps) : i._private.appliedInitStyle = !0, t.updateStyleHints(i) && n.push(i);
                    }
                }
                return n;
            }, el.getPropertiesDiff = function(e1, t) {
                var n = this, a = n._private.propDiffs = n._private.propDiffs || {}, i = e1 + "-" + t, o = a[i];
                if (o) return o;
                for(var s = [], l = {}, u = 0; u < n.length; u++){
                    var c = n[u], d = e1[u] === tl, h = t[u] === tl, p = d !== h, g = c.mappedProperties.length > 0;
                    if (p || h && g) {
                        var v = void 0;
                        p && g || p ? v = c.properties : g && (v = c.mappedProperties);
                        for(var y = 0; y < v.length; y++){
                            for(var m = v[y], b = m.name, x = !1, w = u + 1; w < n.length; w++){
                                var E = n[w];
                                if (t[w] === tl && (x = null != E.properties[m.name])) break;
                            }
                            l[b] || x || (l[b] = !0, s.push(b));
                        }
                    }
                }
                return a[i] = s, s;
            }, el.getContextMeta = function(e1) {
                for(var t, n = this, a = "", i = e1._private.styleCxtKey || "", o = 0; o < n.length; o++){
                    var s = n[o];
                    a += s.selector && s.selector.matches(e1) ? tl : "f";
                }
                return t = n.getPropertiesDiff(i, a), e1._private.styleCxtKey = a, {
                    key: a,
                    diffPropNames: t,
                    empty: 0 === t.length
                };
            }, el.getContextStyle = function(e1) {
                var t = e1.key, n = this._private.contextStyles = this._private.contextStyles || {};
                if (n[t]) return n[t];
                for(var a = {
                    _private: {
                        key: t
                    }
                }, i = 0; i < this.length; i++){
                    var o = this[i];
                    if (t[i] === tl) for(var s = 0; s < o.properties.length; s++){
                        var l = o.properties[s];
                        a[l.name] = l;
                    }
                }
                return n[t] = a, a;
            }, el.applyContextStyle = function(e1, t, n) {
                for(var a = e1.diffPropNames, i = {}, o = this.types, s = 0; s < a.length; s++){
                    var l = a[s], u = t[l], c = n.pstyle(l);
                    if (!u) {
                        if (!c) continue;
                        u = c.bypass ? {
                            name: l,
                            deleteBypassed: !0
                        } : {
                            name: l,
                            delete: !0
                        };
                    }
                    if (c !== u) {
                        if (u.mapped === o.fn && null != c && null != c.mapping && c.mapping.value === u.value) {
                            var d = c.mapping;
                            if ((d.fnValue = u.value(n)) === d.prevFnValue) continue;
                        }
                        var h = i[l] = {
                            prev: c
                        };
                        this.applyParsedProperty(n, u), h.next = n.pstyle(l), h.next && h.next.bypass && (h.next = h.next.bypassed);
                    }
                }
                return {
                    diffProps: i
                };
            }, el.updateStyleHints = function(e1) {
                var t = e1._private, n = this, a = n.propertyGroupNames, i = n.propertyGroupKeys, o = function propHash(e1, t, a) {
                    return n.getPropertiesHash(e1, t, a);
                }, s = t.styleKey;
                if (e1.removed()) return !1;
                var l = "nodes" === t.group, u = e1._private.style;
                a = Object.keys(u);
                for(var c = 0; c < i.length; c++){
                    var d = i[c];
                    t.styleKeys[d] = [
                        _e,
                        Be
                    ];
                }
                for(var h = function updateGrKey1(e1, n) {
                    return t.styleKeys[n][0] = Ae(e1, t.styleKeys[n][0]);
                }, p = function updateGrKey2(e1, n) {
                    return t.styleKeys[n][1] = Me(e1, t.styleKeys[n][1]);
                }, g = function updateGrKey(e1, t) {
                    h(e1, t), p(e1, t);
                }, v = function updateGrKeyWStr(e1, t) {
                    for(var n = 0; n < e1.length; n++){
                        var a = e1.charCodeAt(n);
                        h(a, t), p(a, t);
                    }
                }, y = function cleanNum(e1) {
                    return -128 < e1 && e1 < 128 && Math.floor(e1) !== e1 ? 2e9 - (1024 * e1 | 0) : e1;
                }, m = 0; m < a.length; m++){
                    var b = a[m], x = u[b];
                    if (null != x) {
                        var w = this.properties[b], E = w.type, T = w.groupKey, k = void 0;
                        null != w.hashOverride ? k = w.hashOverride(e1, x) : null != x.pfValue && (k = x.pfValue);
                        var S = null == w.enums ? x.value : null, P = null != k, _ = P || null != S, D = x.units;
                        if (E.number && _ && !E.multiple) g(y(P ? k : S), T), P || null == D || v(D, T);
                        else v(x.strValue, T);
                    }
                }
                for(var M = [
                    _e,
                    Be
                ], I = 0; I < i.length; I++){
                    var R = i[I], L = t.styleKeys[R];
                    M[0] = Ae(L[0], M[0]), M[1] = Me(L[1], M[1]);
                }
                t.styleKey = function combineHashes(e1, t) {
                    return 2097152 * e1 + t;
                }(M[0], M[1]);
                var N = t.styleKeys;
                t.labelDimsKey = Ie(N.labelDimensions);
                var O = o(e1, [
                    "label"
                ], N.labelDimensions);
                if (t.labelKey = Ie(O), t.labelStyleKey = Ie(Re(N.commonLabel, O)), !l) {
                    var z = o(e1, [
                        "source-label"
                    ], N.labelDimensions);
                    t.sourceLabelKey = Ie(z), t.sourceLabelStyleKey = Ie(Re(N.commonLabel, z));
                    var V = o(e1, [
                        "target-label"
                    ], N.labelDimensions);
                    t.targetLabelKey = Ie(V), t.targetLabelStyleKey = Ie(Re(N.commonLabel, V));
                }
                if (l) {
                    var q = t.styleKeys, j = q.nodeBody, W = q.nodeBorder, H = q.nodeOutline, X = q.backgroundImage, Y = q.compound, K = q.pie, G = q.stripe, U = [
                        j,
                        W,
                        H,
                        X,
                        Y,
                        K,
                        G
                    ].filter(function(e1) {
                        return null != e1;
                    }).reduce(Re, [
                        _e,
                        Be
                    ]);
                    t.nodeKey = Ie(U), t.hasPie = null != K && K[0] !== _e && K[1] !== Be, t.hasStripe = null != G && G[0] !== _e && G[1] !== Be;
                }
                return s !== t.styleKey;
            }, el.clearStyleHints = function(e1) {
                var t = e1._private;
                t.styleCxtKey = "", t.styleKeys = {}, t.styleKey = null, t.labelKey = null, t.labelStyleKey = null, t.sourceLabelKey = null, t.sourceLabelStyleKey = null, t.targetLabelKey = null, t.targetLabelStyleKey = null, t.nodeKey = null, t.hasPie = null, t.hasStripe = null;
            }, el.applyParsedProperty = function(e1, t) {
                var n, a = this, i = t, o = e1._private.style, s = a.types, l = a.properties[i.name].type, u = i.bypass, c = o[i.name], d = c && c.bypass, h = e1._private, p = "mapping", g = function getVal(e1) {
                    return null == e1 ? null : null != e1.pfValue ? e1.pfValue : e1.value;
                }, v = function checkTriggers() {
                    var t = g(c), n = g(i);
                    a.checkTriggers(e1, i.name, t, n);
                };
                if ("curve-style" === t.name && e1.isEdge() && ("bezier" !== t.value && e1.isLoop() || "haystack" === t.value && (e1.source().isParent() || e1.target().isParent())) && (i = t = this.parse(t.name, "bezier", u)), i.delete) return o[i.name] = void 0, v(), !0;
                if (i.deleteBypassed) return c ? !!c.bypass && (c.bypassed = void 0, v(), !0) : (v(), !0);
                if (i.deleteBypass) return c ? !!c.bypass && (o[i.name] = c.bypassed, v(), !0) : (v(), !0);
                var y = function printMappingErr() {
                    Ue("Do not assign mappings to elements without corresponding data (i.e. ele `" + e1.id() + "` has no mapping for property `" + i.name + "` with data field `" + i.field + "`); try a `[" + i.field + "]` selector to limit scope to elements with `" + i.field + "` defined");
                };
                switch(i.mapped){
                    case s.mapData:
                        for(var m, b = i.field.split("."), x = h.data, w = 0; w < b.length && x; w++){
                            x = x[b[w]];
                        }
                        if (null == x) return y(), !1;
                        if (!U(x)) return Ue("Do not use continuous mappers without specifying numeric data (i.e. `" + i.field + ": " + x + "` for `" + e1.id() + "` is non-numeric)"), !1;
                        var E = i.fieldMax - i.fieldMin;
                        if ((m = 0 === E ? 0 : (x - i.fieldMin) / E) < 0 ? m = 0 : m > 1 && (m = 1), l.color) {
                            var T = i.valueMin[0], k = i.valueMax[0], S = i.valueMin[1], P = i.valueMax[1], _ = i.valueMin[2], D = i.valueMax[2], M = null == i.valueMin[3] ? 1 : i.valueMin[3], I = null == i.valueMax[3] ? 1 : i.valueMax[3], R = [
                                Math.round(T + (k - T) * m),
                                Math.round(S + (P - S) * m),
                                Math.round(_ + (D - _) * m),
                                Math.round(M + (I - M) * m)
                            ];
                            n = {
                                bypass: i.bypass,
                                name: i.name,
                                value: R,
                                strValue: "rgb(" + R[0] + ", " + R[1] + ", " + R[2] + ")"
                            };
                        } else {
                            if (!l.number) return !1;
                            var L = i.valueMin + (i.valueMax - i.valueMin) * m;
                            n = this.parse(i.name, L, i.bypass, p);
                        }
                        if (!n) return y(), !1;
                        n.mapping = i, i = n;
                        break;
                    case s.data:
                        for(var N = i.field.split("."), O = h.data, z = 0; z < N.length && O; z++){
                            O = O[N[z]];
                        }
                        if (null != O && (n = this.parse(i.name, O, i.bypass, p)), !n) return y(), !1;
                        n.mapping = i, i = n;
                        break;
                    case s.fn:
                        var V = i.value, q = null != i.fnValue ? i.fnValue : V(e1);
                        if (i.prevFnValue = q, null == q) return Ue("Custom function mappers may not return null (i.e. `" + i.name + "` for ele `" + e1.id() + "` is null)"), !1;
                        if (!(n = this.parse(i.name, q, i.bypass, p))) return Ue("Custom function mappers may not return invalid values for the property type (i.e. `" + i.name + "` for ele `" + e1.id() + "` is invalid)"), !1;
                        n.mapping = Ze(i), i = n;
                        break;
                    case void 0:
                        break;
                    default:
                        return !1;
                }
                return u ? (i.bypassed = d ? c.bypassed : c, o[i.name] = i) : d ? c.bypassed = i : o[i.name] = i, v(), !0;
            }, el.cleanElements = function(e1, t) {
                for(var n = 0; n < e1.length; n++){
                    var a = e1[n];
                    if (this.clearStyleHints(a), a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), t) for(var i = a._private.style, o = Object.keys(i), s = 0; s < o.length; s++){
                        var l = o[s], u = i[l];
                        null != u && (u.bypass ? u.bypassed = null : i[l] = null);
                    }
                    else a._private.style = {};
                }
            }, el.update = function() {
                this._private.cy.mutableElements().updateStyle();
            }, el.updateTransitions = function(e1, t) {
                var n = this, a = e1._private, i = e1.pstyle("transition-property").value, o = e1.pstyle("transition-duration").pfValue, s = e1.pstyle("transition-delay").pfValue;
                if (i.length > 0 && o > 0) {
                    for(var l = {}, u = !1, c = 0; c < i.length; c++){
                        var d = i[c], h = e1.pstyle(d), p = t[d];
                        if (p) {
                            var g = p.prev, v = null != p.next ? p.next : h, y = !1, m = void 0, b = 1e-6;
                            g && (U(g.pfValue) && U(v.pfValue) ? (y = v.pfValue - g.pfValue, m = g.pfValue + b * y) : U(g.value) && U(v.value) ? (y = v.value - g.value, m = g.value + b * y) : K(g.value) && K(v.value) && (y = g.value[0] !== v.value[0] || g.value[1] !== v.value[1] || g.value[2] !== v.value[2], m = g.strValue), y && (l[d] = v.strValue, this.applyBypass(e1, d, m), u = !0));
                        }
                    }
                    if (!u) return;
                    a.transitioning = !0, new Ir(function(t) {
                        s > 0 ? e1.delayAnimation(s).play().promise().then(t) : t();
                    }).then(function() {
                        return e1.animation({
                            style: l,
                            duration: o,
                            easing: e1.pstyle("transition-timing-function").value,
                            queue: !1
                        }).play().promise();
                    }).then(function() {
                        n.removeBypasses(e1, i), e1.emitAndNotify("style"), a.transitioning = !1;
                    });
                } else a.transitioning && (this.removeBypasses(e1, i), e1.emitAndNotify("style"), a.transitioning = !1);
            }, el.checkTrigger = function(e1, t, n, a, i, o) {
                var s = this.properties[t], l = i(s);
                e1.removed() || null != l && l(n, a, e1) && o(s);
            }, el.checkZOrderTrigger = function(e1, t, n, a) {
                var i = this;
                this.checkTrigger(e1, t, n, a, function(e1) {
                    return e1.triggersZOrder;
                }, function() {
                    i._private.cy.notify("zorder", e1);
                });
            }, el.checkBoundsTrigger = function(e1, t, n, a) {
                this.checkTrigger(e1, t, n, a, function(e1) {
                    return e1.triggersBounds;
                }, function(t) {
                    e1.dirtyCompoundBoundsCache(), e1.dirtyBoundingBoxCache();
                });
            }, el.checkConnectedEdgesBoundsTrigger = function(e1, t, n, a) {
                this.checkTrigger(e1, t, n, a, function(e1) {
                    return e1.triggersBoundsOfConnectedEdges;
                }, function(t) {
                    e1.connectedEdges().forEach(function(e1) {
                        e1.dirtyBoundingBoxCache();
                    });
                });
            }, el.checkParallelEdgesBoundsTrigger = function(e1, t, n, a) {
                this.checkTrigger(e1, t, n, a, function(e1) {
                    return e1.triggersBoundsOfParallelEdges;
                }, function(t) {
                    e1.parallelEdges().forEach(function(e1) {
                        e1.dirtyBoundingBoxCache();
                    });
                });
            }, el.checkTriggers = function(e1, t, n, a) {
                e1.dirtyStyleCache(), this.checkZOrderTrigger(e1, t, n, a), this.checkBoundsTrigger(e1, t, n, a), this.checkConnectedEdgesBoundsTrigger(e1, t, n, a), this.checkParallelEdgesBoundsTrigger(e1, t, n, a);
            };
            var nl = {
                applyBypass: function(e1, t, n, a) {
                    var i = [];
                    if ("*" === t || "**" === t) {
                        if (void 0 !== n) for(var o = 0; o < this.properties.length; o++){
                            var s = this.properties[o].name, l = this.parse(s, n, !0);
                            l && i.push(l);
                        }
                    } else if (X(t)) {
                        var u = this.parse(t, n, !0);
                        u && i.push(u);
                    } else {
                        if (!G(t)) return !1;
                        var c = t;
                        a = n;
                        for(var d = Object.keys(c), h = 0; h < d.length; h++){
                            var p = d[h], g = c[p];
                            if (void 0 === g && (g = c[se(p)]), void 0 !== g) {
                                var v = this.parse(p, g, !0);
                                v && i.push(v);
                            }
                        }
                    }
                    if (0 === i.length) return !1;
                    for(var y = !1, m = 0; m < e1.length; m++){
                        for(var b = e1[m], x = {}, w = void 0, E = 0; E < i.length; E++){
                            var T = i[E];
                            if (a) {
                                var k = b.pstyle(T.name);
                                w = x[T.name] = {
                                    prev: k
                                };
                            }
                            y = this.applyParsedProperty(b, Ze(T)) || y, a && (w.next = b.pstyle(T.name));
                        }
                        y && this.updateStyleHints(b), a && this.updateTransitions(b, x, true);
                    }
                    return y;
                },
                overrideBypass: function(e1, t, n) {
                    t = oe(t);
                    for(var a = 0; a < e1.length; a++){
                        var i = e1[a], o = i._private.style[t], s = this.properties[t].type, l = s.color, u = s.mutiple, c = o ? null != o.pfValue ? o.pfValue : o.value : null;
                        o && o.bypass ? (o.value = n, null != o.pfValue && (o.pfValue = n), o.strValue = l ? "rgb(" + n.join(",") + ")" : u ? n.join(" ") : "" + n, this.updateStyleHints(i)) : this.applyBypass(i, t, n), this.checkTriggers(i, t, c, n);
                    }
                },
                removeAllBypasses: function(e1, t) {
                    return this.removeBypasses(e1, this.propertyNames, t);
                },
                removeBypasses: function(e1, t, n) {
                    for(var a = 0; a < e1.length; a++){
                        for(var i = e1[a], o = {}, s = 0; s < t.length; s++){
                            var l = t[s], u = this.properties[l], c = i.pstyle(u.name);
                            if (c && c.bypass) {
                                var d = this.parse(l, "", !0), h = o[u.name] = {
                                    prev: c
                                };
                                this.applyParsedProperty(i, d), h.next = i.pstyle(u.name);
                            }
                        }
                        this.updateStyleHints(i), n && this.updateTransitions(i, o, true);
                    }
                }
            }, rl = {
                getEmSizeInPixels: function() {
                    var e1 = this.containerCss("font-size");
                    return null != e1 ? parseFloat(e1) : 1;
                },
                containerCss: function(e1) {
                    var t = this._private.cy, n = t.container(), a = t.window();
                    if (a && n && a.getComputedStyle) return a.getComputedStyle(n).getPropertyValue(e1);
                }
            }, al = {
                getRenderedStyle: function(e1, t) {
                    return t ? this.getStylePropertyValue(e1, t, !0) : this.getRawStyle(e1, !0);
                },
                getRawStyle: function(e1, t) {
                    var n = this;
                    if (e1 = e1[0]) {
                        for(var a = {}, i = 0; i < n.properties.length; i++){
                            var o = n.properties[i], s = n.getStylePropertyValue(e1, o.name, t);
                            null != s && (a[o.name] = s, a[se(o.name)] = s);
                        }
                        return a;
                    }
                },
                getIndexedStyle: function(e1, t, n, a) {
                    var i = e1.pstyle(t)[n][a];
                    return null != i ? i : e1.cy().style().getDefaultProperty(t)[n][0];
                },
                getStylePropertyValue: function(e1, t, n) {
                    if (e1 = e1[0]) {
                        var a = this.properties[t];
                        a.alias && (a = a.pointsTo);
                        var i = a.type, o = e1.pstyle(a.name);
                        if (o) {
                            var s = o.value, l = o.units, u = o.strValue;
                            if (n && i.number && null != s && U(s)) {
                                var c = e1.cy().zoom(), d = function getRenderedValue(e1) {
                                    return e1 * c;
                                }, h = function getValueStringWithUnits(e1, t) {
                                    return d(e1) + t;
                                }, p = K(s);
                                return (p ? l.every(function(e1) {
                                    return null != e1;
                                }) : null != l) ? p ? s.map(function(e1, t) {
                                    return h(e1, l[t]);
                                }).join(" ") : h(s, l) : p ? s.map(function(e1) {
                                    return X(e1) ? e1 : "" + d(e1);
                                }).join(" ") : "" + d(s);
                            }
                            if (null != u) return u;
                        }
                        return null;
                    }
                },
                getAnimationStartStyle: function(e1, t) {
                    for(var n = {}, a = 0; a < t.length; a++){
                        var i = t[a].name, o = e1.pstyle(i);
                        void 0 !== o && (o = G(o) ? this.parse(i, o.strValue) : this.parse(i, o)), o && (n[i] = o);
                    }
                    return n;
                },
                getPropsList: function(e1) {
                    var t = [], n = e1, a = this.properties;
                    if (n) for(var i = Object.keys(n), o = 0; o < i.length; o++){
                        var s = i[o], l = n[s], u = a[s] || a[oe(s)], c = this.parse(u.name, l);
                        c && t.push(c);
                    }
                    return t;
                },
                getNonDefaultPropertiesHash: function(e1, t, n) {
                    var a, i, o, s, l, u, c = n.slice();
                    for(l = 0; l < t.length; l++)if (a = t[l], null != (i = e1.pstyle(a, !1))) if (null != i.pfValue) c[0] = Ae(s, c[0]), c[1] = Me(s, c[1]);
                    else for(o = i.strValue, u = 0; u < o.length; u++)s = o.charCodeAt(u), c[0] = Ae(s, c[0]), c[1] = Me(s, c[1]);
                    return c;
                }
            };
            al.getPropertiesHash = al.getNonDefaultPropertiesHash;
            var il = {
                appendFromJson: function(e1) {
                    for(var t = this, n = 0; n < e1.length; n++){
                        var a = e1[n], i = a.selector, o = a.style || a.css, s = Object.keys(o);
                        t.selector(i);
                        for(var l = 0; l < s.length; l++){
                            var u = s[l], c = o[u];
                            t.css(u, c);
                        }
                    }
                    return t;
                },
                fromJson: function(e1) {
                    var t = this;
                    return t.resetToDefault(), t.appendFromJson(e1), t;
                },
                json: function() {
                    for(var e1 = [], t = this.defaultLength; t < this.length; t++){
                        for(var n = this[t], a = n.selector, i = n.properties, o = {}, s = 0; s < i.length; s++){
                            var l = i[s];
                            o[l.name] = l.strValue;
                        }
                        e1.push({
                            selector: a ? a.toString() : "core",
                            style: o
                        });
                    }
                    return e1;
                }
            }, ol = {
                appendFromString: function(e1) {
                    var t, n, a, i = this, o = "" + e1;
                    function removeSelAndBlockFromRemaining() {
                        o = o.length > t.length ? o.substr(t.length) : "";
                    }
                    function removePropAndValFromRem() {
                        n = n.length > a.length ? n.substr(a.length) : "";
                    }
                    for(o = o.replace(/[/][*](\s|.)+?[*][/]/g, "");;){
                        if (o.match(/^\s*$/)) break;
                        var s = o.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
                        if (!s) {
                            Ue("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + o);
                            break;
                        }
                        t = s[0];
                        var l = s[1];
                        if ("core" !== l) {
                            if (new To(l).invalid) {
                                Ue("Skipping parsing of block: Invalid selector found in string stylesheet: " + l), removeSelAndBlockFromRemaining();
                                continue;
                            }
                        }
                        var u = s[2], c = !1;
                        n = u;
                        for(var d = [];;){
                            if (n.match(/^\s*$/)) break;
                            var h = n.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
                            if (!h) {
                                Ue("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + u), c = !0;
                                break;
                            }
                            a = h[0];
                            var p = h[1], g = h[2];
                            if (this.properties[p]) i.parse(p, g) ? (d.push({
                                name: p,
                                val: g
                            }), removePropAndValFromRem()) : (Ue("Skipping property: Invalid property definition in: " + a), removePropAndValFromRem());
                            else Ue("Skipping property: Invalid property name in: " + a), removePropAndValFromRem();
                        }
                        if (c) {
                            removeSelAndBlockFromRemaining();
                            break;
                        }
                        i.selector(l);
                        for(var v = 0; v < d.length; v++){
                            var y = d[v];
                            i.css(y.name, y.val);
                        }
                        removeSelAndBlockFromRemaining();
                    }
                    return i;
                },
                fromString: function(e1) {
                    var t = this;
                    return t.resetToDefault(), t.appendFromString(e1), t;
                }
            }, sl = {};
            !function() {
                var e1 = ce, t = he, n = fe, a = function data(e1) {
                    return "^" + e1 + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
                }, i = function mapData(a) {
                    var i = e1 + "|\\w+|" + t + "|" + n + "|\\#[0-9a-fA-F]{3}|\\#[0-9a-fA-F]{6}";
                    return "^" + a + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + e1 + ")\\s*\\,\\s*(" + e1 + ")\\s*,\\s*(" + i + ")\\s*\\,\\s*(" + i + ")\\)$";
                }, o = [
                    "^url\\s*\\(\\s*['\"]?(.+?)['\"]?\\s*\\)$",
                    "^(none)$",
                    "^(.+)$"
                ];
                sl.types = {
                    time: {
                        number: !0,
                        min: 0,
                        units: "s|ms",
                        implicitUnits: "ms"
                    },
                    percent: {
                        number: !0,
                        min: 0,
                        max: 100,
                        units: "%",
                        implicitUnits: "%"
                    },
                    percentages: {
                        number: !0,
                        min: 0,
                        max: 100,
                        units: "%",
                        implicitUnits: "%",
                        multiple: !0
                    },
                    zeroOneNumber: {
                        number: !0,
                        min: 0,
                        max: 1,
                        unitless: !0
                    },
                    zeroOneNumbers: {
                        number: !0,
                        min: 0,
                        max: 1,
                        unitless: !0,
                        multiple: !0
                    },
                    nOneOneNumber: {
                        number: !0,
                        min: -1,
                        max: 1,
                        unitless: !0
                    },
                    nonNegativeInt: {
                        number: !0,
                        min: 0,
                        integer: !0,
                        unitless: !0
                    },
                    nonNegativeNumber: {
                        number: !0,
                        min: 0,
                        unitless: !0
                    },
                    position: {
                        enums: [
                            "parent",
                            "origin"
                        ]
                    },
                    nodeSize: {
                        number: !0,
                        min: 0,
                        enums: [
                            "label"
                        ]
                    },
                    number: {
                        number: !0,
                        unitless: !0
                    },
                    numbers: {
                        number: !0,
                        unitless: !0,
                        multiple: !0
                    },
                    positiveNumber: {
                        number: !0,
                        unitless: !0,
                        min: 0,
                        strictMin: !0
                    },
                    size: {
                        number: !0,
                        min: 0
                    },
                    bidirectionalSize: {
                        number: !0
                    },
                    bidirectionalSizeMaybePercent: {
                        number: !0,
                        allowPercent: !0
                    },
                    bidirectionalSizes: {
                        number: !0,
                        multiple: !0
                    },
                    sizeMaybePercent: {
                        number: !0,
                        min: 0,
                        allowPercent: !0
                    },
                    axisDirection: {
                        enums: [
                            "horizontal",
                            "leftward",
                            "rightward",
                            "vertical",
                            "upward",
                            "downward",
                            "auto"
                        ]
                    },
                    axisDirectionExplicit: {
                        enums: [
                            "leftward",
                            "rightward",
                            "upward",
                            "downward"
                        ]
                    },
                    axisDirectionPrimary: {
                        enums: [
                            "horizontal",
                            "vertical"
                        ]
                    },
                    paddingRelativeTo: {
                        enums: [
                            "width",
                            "height",
                            "average",
                            "min",
                            "max"
                        ]
                    },
                    bgWH: {
                        number: !0,
                        min: 0,
                        allowPercent: !0,
                        enums: [
                            "auto"
                        ],
                        multiple: !0
                    },
                    bgPos: {
                        number: !0,
                        allowPercent: !0,
                        multiple: !0
                    },
                    bgRelativeTo: {
                        enums: [
                            "inner",
                            "include-padding"
                        ],
                        multiple: !0
                    },
                    bgRepeat: {
                        enums: [
                            "repeat",
                            "repeat-x",
                            "repeat-y",
                            "no-repeat"
                        ],
                        multiple: !0
                    },
                    bgFit: {
                        enums: [
                            "none",
                            "contain",
                            "cover"
                        ],
                        multiple: !0
                    },
                    bgCrossOrigin: {
                        enums: [
                            "anonymous",
                            "use-credentials",
                            "null"
                        ],
                        multiple: !0
                    },
                    bgClip: {
                        enums: [
                            "none",
                            "node"
                        ],
                        multiple: !0
                    },
                    bgContainment: {
                        enums: [
                            "inside",
                            "over"
                        ],
                        multiple: !0
                    },
                    color: {
                        color: !0
                    },
                    colors: {
                        color: !0,
                        multiple: !0
                    },
                    fill: {
                        enums: [
                            "solid",
                            "linear-gradient",
                            "radial-gradient"
                        ]
                    },
                    bool: {
                        enums: [
                            "yes",
                            "no"
                        ]
                    },
                    bools: {
                        enums: [
                            "yes",
                            "no"
                        ],
                        multiple: !0
                    },
                    lineStyle: {
                        enums: [
                            "solid",
                            "dotted",
                            "dashed"
                        ]
                    },
                    lineCap: {
                        enums: [
                            "butt",
                            "round",
                            "square"
                        ]
                    },
                    linePosition: {
                        enums: [
                            "center",
                            "inside",
                            "outside"
                        ]
                    },
                    lineJoin: {
                        enums: [
                            "round",
                            "bevel",
                            "miter"
                        ]
                    },
                    borderStyle: {
                        enums: [
                            "solid",
                            "dotted",
                            "dashed",
                            "double"
                        ]
                    },
                    curveStyle: {
                        enums: [
                            "bezier",
                            "unbundled-bezier",
                            "haystack",
                            "segments",
                            "straight",
                            "straight-triangle",
                            "taxi",
                            "round-segments",
                            "round-taxi"
                        ]
                    },
                    radiusType: {
                        enums: [
                            "arc-radius",
                            "influence-radius"
                        ],
                        multiple: !0
                    },
                    fontFamily: {
                        regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'
                    },
                    fontStyle: {
                        enums: [
                            "italic",
                            "normal",
                            "oblique"
                        ]
                    },
                    fontWeight: {
                        enums: [
                            "normal",
                            "bold",
                            "bolder",
                            "lighter",
                            "100",
                            "200",
                            "300",
                            "400",
                            "500",
                            "600",
                            "800",
                            "900",
                            100,
                            200,
                            300,
                            400,
                            500,
                            600,
                            700,
                            800,
                            900
                        ]
                    },
                    textDecoration: {
                        enums: [
                            "none",
                            "underline",
                            "overline",
                            "line-through"
                        ]
                    },
                    textTransform: {
                        enums: [
                            "none",
                            "uppercase",
                            "lowercase"
                        ]
                    },
                    textWrap: {
                        enums: [
                            "none",
                            "wrap",
                            "ellipsis"
                        ]
                    },
                    textOverflowWrap: {
                        enums: [
                            "whitespace",
                            "anywhere"
                        ]
                    },
                    textBackgroundShape: {
                        enums: [
                            "rectangle",
                            "roundrectangle",
                            "round-rectangle"
                        ]
                    },
                    nodeShape: {
                        enums: [
                            "rectangle",
                            "roundrectangle",
                            "round-rectangle",
                            "cutrectangle",
                            "cut-rectangle",
                            "bottomroundrectangle",
                            "bottom-round-rectangle",
                            "barrel",
                            "ellipse",
                            "triangle",
                            "round-triangle",
                            "square",
                            "pentagon",
                            "round-pentagon",
                            "hexagon",
                            "round-hexagon",
                            "concavehexagon",
                            "concave-hexagon",
                            "heptagon",
                            "round-heptagon",
                            "octagon",
                            "round-octagon",
                            "tag",
                            "round-tag",
                            "star",
                            "diamond",
                            "round-diamond",
                            "vee",
                            "rhomboid",
                            "right-rhomboid",
                            "polygon"
                        ]
                    },
                    overlayShape: {
                        enums: [
                            "roundrectangle",
                            "round-rectangle",
                            "ellipse"
                        ]
                    },
                    cornerRadius: {
                        number: !0,
                        min: 0,
                        units: "px|em",
                        implicitUnits: "px",
                        enums: [
                            "auto"
                        ]
                    },
                    compoundIncludeLabels: {
                        enums: [
                            "include",
                            "exclude"
                        ]
                    },
                    arrowShape: {
                        enums: [
                            "tee",
                            "triangle",
                            "triangle-tee",
                            "circle-triangle",
                            "triangle-cross",
                            "triangle-backcurve",
                            "vee",
                            "square",
                            "circle",
                            "diamond",
                            "chevron",
                            "none"
                        ]
                    },
                    arrowFill: {
                        enums: [
                            "filled",
                            "hollow"
                        ]
                    },
                    arrowWidth: {
                        number: !0,
                        units: "%|px|em",
                        implicitUnits: "px",
                        enums: [
                            "match-line"
                        ]
                    },
                    display: {
                        enums: [
                            "element",
                            "none"
                        ]
                    },
                    visibility: {
                        enums: [
                            "hidden",
                            "visible"
                        ]
                    },
                    zCompoundDepth: {
                        enums: [
                            "bottom",
                            "orphan",
                            "auto",
                            "top"
                        ]
                    },
                    zIndexCompare: {
                        enums: [
                            "auto",
                            "manual"
                        ]
                    },
                    valign: {
                        enums: [
                            "top",
                            "center",
                            "bottom"
                        ]
                    },
                    halign: {
                        enums: [
                            "left",
                            "center",
                            "right"
                        ]
                    },
                    justification: {
                        enums: [
                            "left",
                            "center",
                            "right",
                            "auto"
                        ]
                    },
                    text: {
                        string: !0
                    },
                    data: {
                        mapping: !0,
                        regex: a("data")
                    },
                    layoutData: {
                        mapping: !0,
                        regex: a("layoutData")
                    },
                    scratch: {
                        mapping: !0,
                        regex: a("scratch")
                    },
                    mapData: {
                        mapping: !0,
                        regex: i("mapData")
                    },
                    mapLayoutData: {
                        mapping: !0,
                        regex: i("mapLayoutData")
                    },
                    mapScratch: {
                        mapping: !0,
                        regex: i("mapScratch")
                    },
                    fn: {
                        mapping: !0,
                        fn: !0
                    },
                    url: {
                        regexes: o,
                        singleRegexMatchValue: !0
                    },
                    urls: {
                        regexes: o,
                        singleRegexMatchValue: !0,
                        multiple: !0
                    },
                    propList: {
                        propList: !0
                    },
                    angle: {
                        number: !0,
                        units: "deg|rad",
                        implicitUnits: "rad"
                    },
                    textRotation: {
                        number: !0,
                        units: "deg|rad",
                        implicitUnits: "rad",
                        enums: [
                            "none",
                            "autorotate"
                        ]
                    },
                    polygonPointList: {
                        number: !0,
                        multiple: !0,
                        evenMultiple: !0,
                        min: -1,
                        max: 1,
                        unitless: !0
                    },
                    edgeDistances: {
                        enums: [
                            "intersection",
                            "node-position",
                            "endpoints"
                        ]
                    },
                    edgeEndpoint: {
                        number: !0,
                        multiple: !0,
                        units: "%|px|em|deg|rad",
                        implicitUnits: "px",
                        enums: [
                            "inside-to-node",
                            "outside-to-node",
                            "outside-to-node-or-label",
                            "outside-to-line",
                            "outside-to-line-or-label"
                        ],
                        singleEnum: !0,
                        validate: function validate(e1, t) {
                            switch(e1.length){
                                case 2:
                                    return "deg" !== t[0] && "rad" !== t[0] && "deg" !== t[1] && "rad" !== t[1];
                                case 1:
                                    return X(e1[0]) || "deg" === t[0] || "rad" === t[0];
                                default:
                                    return !1;
                            }
                        }
                    },
                    easing: {
                        regexes: [
                            "^(spring)\\s*\\(\\s*(" + e1 + ")\\s*,\\s*(" + e1 + ")\\s*\\)$",
                            "^(cubic-bezier)\\s*\\(\\s*(" + e1 + ")\\s*,\\s*(" + e1 + ")\\s*,\\s*(" + e1 + ")\\s*,\\s*(" + e1 + ")\\s*\\)$"
                        ],
                        enums: [
                            "linear",
                            "ease",
                            "ease-in",
                            "ease-out",
                            "ease-in-out",
                            "ease-in-sine",
                            "ease-out-sine",
                            "ease-in-out-sine",
                            "ease-in-quad",
                            "ease-out-quad",
                            "ease-in-out-quad",
                            "ease-in-cubic",
                            "ease-out-cubic",
                            "ease-in-out-cubic",
                            "ease-in-quart",
                            "ease-out-quart",
                            "ease-in-out-quart",
                            "ease-in-quint",
                            "ease-out-quint",
                            "ease-in-out-quint",
                            "ease-in-expo",
                            "ease-out-expo",
                            "ease-in-out-expo",
                            "ease-in-circ",
                            "ease-out-circ",
                            "ease-in-out-circ"
                        ]
                    },
                    gradientDirection: {
                        enums: [
                            "to-bottom",
                            "to-top",
                            "to-left",
                            "to-right",
                            "to-bottom-right",
                            "to-bottom-left",
                            "to-top-right",
                            "to-top-left",
                            "to-right-bottom",
                            "to-left-bottom",
                            "to-right-top",
                            "to-left-top"
                        ]
                    },
                    boundsExpansion: {
                        number: !0,
                        multiple: !0,
                        min: 0,
                        validate: function validate(e1) {
                            var t = e1.length;
                            return 1 === t || 2 === t || 4 === t;
                        }
                    }
                };
                var s = {
                    zeroNonZero: function zeroNonZero(e1, t) {
                        return (null == e1 || null == t) && e1 !== t || 0 == e1 && 0 != t || 0 != e1 && 0 == t;
                    },
                    any: function any(e1, t) {
                        return e1 != t;
                    },
                    emptyNonEmpty: function emptyNonEmpty(e1, t) {
                        var n = re(e1), a = re(t);
                        return n && !a || !n && a;
                    }
                }, l = sl.types, u = [
                    {
                        name: "label",
                        type: l.text,
                        triggersBounds: s.any,
                        triggersZOrder: s.emptyNonEmpty
                    },
                    {
                        name: "text-rotation",
                        type: l.textRotation,
                        triggersBounds: s.any
                    },
                    {
                        name: "text-margin-x",
                        type: l.bidirectionalSize,
                        triggersBounds: s.any
                    },
                    {
                        name: "text-margin-y",
                        type: l.bidirectionalSize,
                        triggersBounds: s.any
                    }
                ], c = [
                    {
                        name: "source-label",
                        type: l.text,
                        triggersBounds: s.any
                    },
                    {
                        name: "source-text-rotation",
                        type: l.textRotation,
                        triggersBounds: s.any
                    },
                    {
                        name: "source-text-margin-x",
                        type: l.bidirectionalSize,
                        triggersBounds: s.any
                    },
                    {
                        name: "source-text-margin-y",
                        type: l.bidirectionalSize,
                        triggersBounds: s.any
                    },
                    {
                        name: "source-text-offset",
                        type: l.size,
                        triggersBounds: s.any
                    }
                ], d = [
                    {
                        name: "target-label",
                        type: l.text,
                        triggersBounds: s.any
                    },
                    {
                        name: "target-text-rotation",
                        type: l.textRotation,
                        triggersBounds: s.any
                    },
                    {
                        name: "target-text-margin-x",
                        type: l.bidirectionalSize,
                        triggersBounds: s.any
                    },
                    {
                        name: "target-text-margin-y",
                        type: l.bidirectionalSize,
                        triggersBounds: s.any
                    },
                    {
                        name: "target-text-offset",
                        type: l.size,
                        triggersBounds: s.any
                    }
                ], h = [
                    {
                        name: "font-family",
                        type: l.fontFamily,
                        triggersBounds: s.any
                    },
                    {
                        name: "font-style",
                        type: l.fontStyle,
                        triggersBounds: s.any
                    },
                    {
                        name: "font-weight",
                        type: l.fontWeight,
                        triggersBounds: s.any
                    },
                    {
                        name: "font-size",
                        type: l.size,
                        triggersBounds: s.any
                    },
                    {
                        name: "text-transform",
                        type: l.textTransform,
                        triggersBounds: s.any
                    },
                    {
                        name: "text-wrap",
                        type: l.textWrap,
                        triggersBounds: s.any
                    },
                    {
                        name: "text-overflow-wrap",
                        type: l.textOverflowWrap,
                        triggersBounds: s.any
                    },
                    {
                        name: "text-max-width",
                        type: l.size,
                        triggersBounds: s.any
                    },
                    {
                        name: "text-outline-width",
                        type: l.size,
                        triggersBounds: s.any
                    },
                    {
                        name: "line-height",
                        type: l.positiveNumber,
                        triggersBounds: s.any
                    }
                ], p = [
                    {
                        name: "text-valign",
                        type: l.valign,
                        triggersBounds: s.any
                    },
                    {
                        name: "text-halign",
                        type: l.halign,
                        triggersBounds: s.any
                    },
                    {
                        name: "color",
                        type: l.color
                    },
                    {
                        name: "text-outline-color",
                        type: l.color
                    },
                    {
                        name: "text-outline-opacity",
                        type: l.zeroOneNumber
                    },
                    {
                        name: "text-background-color",
                        type: l.color
                    },
                    {
                        name: "text-background-opacity",
                        type: l.zeroOneNumber
                    },
                    {
                        name: "text-background-padding",
                        type: l.size,
                        triggersBounds: s.any
                    },
                    {
                        name: "text-border-opacity",
                        type: l.zeroOneNumber
                    },
                    {
                        name: "text-border-color",
                        type: l.color
                    },
                    {
                        name: "text-border-width",
                        type: l.size,
                        triggersBounds: s.any
                    },
                    {
                        name: "text-border-style",
                        type: l.borderStyle,
                        triggersBounds: s.any
                    },
                    {
                        name: "text-background-shape",
                        type: l.textBackgroundShape,
                        triggersBounds: s.any
                    },
                    {
                        name: "text-justification",
                        type: l.justification
                    },
                    {
                        name: "box-select-labels",
                        type: l.bool,
                        triggersBounds: s.any
                    }
                ], g = [
                    {
                        name: "events",
                        type: l.bool,
                        triggersZOrder: s.any
                    },
                    {
                        name: "text-events",
                        type: l.bool,
                        triggersZOrder: s.any
                    }
                ], v = [
                    {
                        name: "display",
                        type: l.display,
                        triggersZOrder: s.any,
                        triggersBounds: s.any,
                        triggersBoundsOfConnectedEdges: s.any,
                        triggersBoundsOfParallelEdges: function triggersBoundsOfParallelEdges(e1, t, n) {
                            return e1 !== t && "bezier" === n.pstyle("curve-style").value;
                        }
                    },
                    {
                        name: "visibility",
                        type: l.visibility,
                        triggersZOrder: s.any
                    },
                    {
                        name: "opacity",
                        type: l.zeroOneNumber,
                        triggersZOrder: s.zeroNonZero
                    },
                    {
                        name: "text-opacity",
                        type: l.zeroOneNumber
                    },
                    {
                        name: "min-zoomed-font-size",
                        type: l.size
                    },
                    {
                        name: "z-compound-depth",
                        type: l.zCompoundDepth,
                        triggersZOrder: s.any
                    },
                    {
                        name: "z-index-compare",
                        type: l.zIndexCompare,
                        triggersZOrder: s.any
                    },
                    {
                        name: "z-index",
                        type: l.number,
                        triggersZOrder: s.any
                    }
                ], y = [
                    {
                        name: "overlay-padding",
                        type: l.size,
                        triggersBounds: s.any
                    },
                    {
                        name: "overlay-color",
                        type: l.color
                    },
                    {
                        name: "overlay-opacity",
                        type: l.zeroOneNumber,
                        triggersBounds: s.zeroNonZero
                    },
                    {
                        name: "overlay-shape",
                        type: l.overlayShape,
                        triggersBounds: s.any
                    },
                    {
                        name: "overlay-corner-radius",
                        type: l.cornerRadius
                    }
                ], m = [
                    {
                        name: "underlay-padding",
                        type: l.size,
                        triggersBounds: s.any
                    },
                    {
                        name: "underlay-color",
                        type: l.color
                    },
                    {
                        name: "underlay-opacity",
                        type: l.zeroOneNumber,
                        triggersBounds: s.zeroNonZero
                    },
                    {
                        name: "underlay-shape",
                        type: l.overlayShape,
                        triggersBounds: s.any
                    },
                    {
                        name: "underlay-corner-radius",
                        type: l.cornerRadius
                    }
                ], b = [
                    {
                        name: "transition-property",
                        type: l.propList
                    },
                    {
                        name: "transition-duration",
                        type: l.time
                    },
                    {
                        name: "transition-delay",
                        type: l.time
                    },
                    {
                        name: "transition-timing-function",
                        type: l.easing
                    }
                ], x = function nodeSizeHashOverride(e1, t) {
                    return "label" === t.value ? -e1.poolIndex() : t.pfValue;
                }, w = [
                    {
                        name: "height",
                        type: l.nodeSize,
                        triggersBounds: s.any,
                        hashOverride: x
                    },
                    {
                        name: "width",
                        type: l.nodeSize,
                        triggersBounds: s.any,
                        hashOverride: x
                    },
                    {
                        name: "shape",
                        type: l.nodeShape,
                        triggersBounds: s.any
                    },
                    {
                        name: "shape-polygon-points",
                        type: l.polygonPointList,
                        triggersBounds: s.any
                    },
                    {
                        name: "corner-radius",
                        type: l.cornerRadius
                    },
                    {
                        name: "background-color",
                        type: l.color
                    },
                    {
                        name: "background-fill",
                        type: l.fill
                    },
                    {
                        name: "background-opacity",
                        type: l.zeroOneNumber
                    },
                    {
                        name: "background-blacken",
                        type: l.nOneOneNumber
                    },
                    {
                        name: "background-gradient-stop-colors",
                        type: l.colors
                    },
                    {
                        name: "background-gradient-stop-positions",
                        type: l.percentages
                    },
                    {
                        name: "background-gradient-direction",
                        type: l.gradientDirection
                    },
                    {
                        name: "padding",
                        type: l.sizeMaybePercent,
                        triggersBounds: s.any
                    },
                    {
                        name: "padding-relative-to",
                        type: l.paddingRelativeTo,
                        triggersBounds: s.any
                    },
                    {
                        name: "bounds-expansion",
                        type: l.boundsExpansion,
                        triggersBounds: s.any
                    }
                ], E = [
                    {
                        name: "border-color",
                        type: l.color
                    },
                    {
                        name: "border-opacity",
                        type: l.zeroOneNumber
                    },
                    {
                        name: "border-width",
                        type: l.size,
                        triggersBounds: s.any
                    },
                    {
                        name: "border-style",
                        type: l.borderStyle
                    },
                    {
                        name: "border-cap",
                        type: l.lineCap
                    },
                    {
                        name: "border-join",
                        type: l.lineJoin
                    },
                    {
                        name: "border-dash-pattern",
                        type: l.numbers
                    },
                    {
                        name: "border-dash-offset",
                        type: l.number
                    },
                    {
                        name: "border-position",
                        type: l.linePosition
                    }
                ], T = [
                    {
                        name: "outline-color",
                        type: l.color
                    },
                    {
                        name: "outline-opacity",
                        type: l.zeroOneNumber
                    },
                    {
                        name: "outline-width",
                        type: l.size,
                        triggersBounds: s.any
                    },
                    {
                        name: "outline-style",
                        type: l.borderStyle
                    },
                    {
                        name: "outline-offset",
                        type: l.size,
                        triggersBounds: s.any
                    }
                ], k = [
                    {
                        name: "background-image",
                        type: l.urls
                    },
                    {
                        name: "background-image-crossorigin",
                        type: l.bgCrossOrigin
                    },
                    {
                        name: "background-image-opacity",
                        type: l.zeroOneNumbers
                    },
                    {
                        name: "background-image-containment",
                        type: l.bgContainment
                    },
                    {
                        name: "background-image-smoothing",
                        type: l.bools
                    },
                    {
                        name: "background-position-x",
                        type: l.bgPos
                    },
                    {
                        name: "background-position-y",
                        type: l.bgPos
                    },
                    {
                        name: "background-width-relative-to",
                        type: l.bgRelativeTo
                    },
                    {
                        name: "background-height-relative-to",
                        type: l.bgRelativeTo
                    },
                    {
                        name: "background-repeat",
                        type: l.bgRepeat
                    },
                    {
                        name: "background-fit",
                        type: l.bgFit
                    },
                    {
                        name: "background-clip",
                        type: l.bgClip
                    },
                    {
                        name: "background-width",
                        type: l.bgWH
                    },
                    {
                        name: "background-height",
                        type: l.bgWH
                    },
                    {
                        name: "background-offset-x",
                        type: l.bgPos
                    },
                    {
                        name: "background-offset-y",
                        type: l.bgPos
                    }
                ], S = [
                    {
                        name: "position",
                        type: l.position,
                        triggersBounds: s.any
                    },
                    {
                        name: "compound-sizing-wrt-labels",
                        type: l.compoundIncludeLabels,
                        triggersBounds: s.any
                    },
                    {
                        name: "min-width",
                        type: l.size,
                        triggersBounds: s.any
                    },
                    {
                        name: "min-width-bias-left",
                        type: l.sizeMaybePercent,
                        triggersBounds: s.any
                    },
                    {
                        name: "min-width-bias-right",
                        type: l.sizeMaybePercent,
                        triggersBounds: s.any
                    },
                    {
                        name: "min-height",
                        type: l.size,
                        triggersBounds: s.any
                    },
                    {
                        name: "min-height-bias-top",
                        type: l.sizeMaybePercent,
                        triggersBounds: s.any
                    },
                    {
                        name: "min-height-bias-bottom",
                        type: l.sizeMaybePercent,
                        triggersBounds: s.any
                    }
                ], P = [
                    {
                        name: "line-style",
                        type: l.lineStyle
                    },
                    {
                        name: "line-color",
                        type: l.color
                    },
                    {
                        name: "line-fill",
                        type: l.fill
                    },
                    {
                        name: "line-cap",
                        type: l.lineCap
                    },
                    {
                        name: "line-opacity",
                        type: l.zeroOneNumber
                    },
                    {
                        name: "line-dash-pattern",
                        type: l.numbers
                    },
                    {
                        name: "line-dash-offset",
                        type: l.number
                    },
                    {
                        name: "line-outline-width",
                        type: l.size
                    },
                    {
                        name: "line-outline-color",
                        type: l.color
                    },
                    {
                        name: "line-gradient-stop-colors",
                        type: l.colors
                    },
                    {
                        name: "line-gradient-stop-positions",
                        type: l.percentages
                    },
                    {
                        name: "curve-style",
                        type: l.curveStyle,
                        triggersBounds: s.any,
                        triggersBoundsOfParallelEdges: function triggersBoundsOfParallelEdges(e1, t) {
                            return e1 !== t && ("bezier" === e1 || "bezier" === t);
                        }
                    },
                    {
                        name: "haystack-radius",
                        type: l.zeroOneNumber,
                        triggersBounds: s.any
                    },
                    {
                        name: "source-endpoint",
                        type: l.edgeEndpoint,
                        triggersBounds: s.any
                    },
                    {
                        name: "target-endpoint",
                        type: l.edgeEndpoint,
                        triggersBounds: s.any
                    },
                    {
                        name: "control-point-step-size",
                        type: l.size,
                        triggersBounds: s.any
                    },
                    {
                        name: "control-point-distances",
                        type: l.bidirectionalSizes,
                        triggersBounds: s.any
                    },
                    {
                        name: "control-point-weights",
                        type: l.numbers,
                        triggersBounds: s.any
                    },
                    {
                        name: "segment-distances",
                        type: l.bidirectionalSizes,
                        triggersBounds: s.any
                    },
                    {
                        name: "segment-weights",
                        type: l.numbers,
                        triggersBounds: s.any
                    },
                    {
                        name: "segment-radii",
                        type: l.numbers,
                        triggersBounds: s.any
                    },
                    {
                        name: "radius-type",
                        type: l.radiusType,
                        triggersBounds: s.any
                    },
                    {
                        name: "taxi-turn",
                        type: l.bidirectionalSizeMaybePercent,
                        triggersBounds: s.any
                    },
                    {
                        name: "taxi-turn-min-distance",
                        type: l.size,
                        triggersBounds: s.any
                    },
                    {
                        name: "taxi-direction",
                        type: l.axisDirection,
                        triggersBounds: s.any
                    },
                    {
                        name: "taxi-radius",
                        type: l.number,
                        triggersBounds: s.any
                    },
                    {
                        name: "edge-distances",
                        type: l.edgeDistances,
                        triggersBounds: s.any
                    },
                    {
                        name: "arrow-scale",
                        type: l.positiveNumber,
                        triggersBounds: s.any
                    },
                    {
                        name: "loop-direction",
                        type: l.angle,
                        triggersBounds: s.any
                    },
                    {
                        name: "loop-sweep",
                        type: l.angle,
                        triggersBounds: s.any
                    },
                    {
                        name: "source-distance-from-node",
                        type: l.size,
                        triggersBounds: s.any
                    },
                    {
                        name: "target-distance-from-node",
                        type: l.size,
                        triggersBounds: s.any
                    }
                ], _ = [
                    {
                        name: "ghost",
                        type: l.bool,
                        triggersBounds: s.any
                    },
                    {
                        name: "ghost-offset-x",
                        type: l.bidirectionalSize,
                        triggersBounds: s.any
                    },
                    {
                        name: "ghost-offset-y",
                        type: l.bidirectionalSize,
                        triggersBounds: s.any
                    },
                    {
                        name: "ghost-opacity",
                        type: l.zeroOneNumber
                    }
                ], D = [
                    {
                        name: "selection-box-color",
                        type: l.color
                    },
                    {
                        name: "selection-box-opacity",
                        type: l.zeroOneNumber
                    },
                    {
                        name: "selection-box-border-color",
                        type: l.color
                    },
                    {
                        name: "selection-box-border-width",
                        type: l.size
                    },
                    {
                        name: "active-bg-color",
                        type: l.color
                    },
                    {
                        name: "active-bg-opacity",
                        type: l.zeroOneNumber
                    },
                    {
                        name: "active-bg-size",
                        type: l.size
                    },
                    {
                        name: "outside-texture-bg-color",
                        type: l.color
                    },
                    {
                        name: "outside-texture-bg-opacity",
                        type: l.zeroOneNumber
                    }
                ], M = [];
                sl.pieBackgroundN = 16, M.push({
                    name: "pie-size",
                    type: l.sizeMaybePercent
                }), M.push({
                    name: "pie-hole",
                    type: l.sizeMaybePercent
                }), M.push({
                    name: "pie-start-angle",
                    type: l.angle
                });
                for(var I = 1; I <= sl.pieBackgroundN; I++)M.push({
                    name: "pie-" + I + "-background-color",
                    type: l.color
                }), M.push({
                    name: "pie-" + I + "-background-size",
                    type: l.percent
                }), M.push({
                    name: "pie-" + I + "-background-opacity",
                    type: l.zeroOneNumber
                });
                var R = [];
                sl.stripeBackgroundN = 16, R.push({
                    name: "stripe-size",
                    type: l.sizeMaybePercent
                }), R.push({
                    name: "stripe-direction",
                    type: l.axisDirectionPrimary
                });
                for(var L = 1; L <= sl.stripeBackgroundN; L++)R.push({
                    name: "stripe-" + L + "-background-color",
                    type: l.color
                }), R.push({
                    name: "stripe-" + L + "-background-size",
                    type: l.percent
                }), R.push({
                    name: "stripe-" + L + "-background-opacity",
                    type: l.zeroOneNumber
                });
                var N = [], O = sl.arrowPrefixes = [
                    "source",
                    "mid-source",
                    "target",
                    "mid-target"
                ];
                [
                    {
                        name: "arrow-shape",
                        type: l.arrowShape,
                        triggersBounds: s.any
                    },
                    {
                        name: "arrow-color",
                        type: l.color
                    },
                    {
                        name: "arrow-fill",
                        type: l.arrowFill
                    },
                    {
                        name: "arrow-width",
                        type: l.arrowWidth
                    }
                ].forEach(function(e1) {
                    O.forEach(function(t) {
                        var n = t + "-" + e1.name, a = e1.type, i = e1.triggersBounds;
                        N.push({
                            name: n,
                            type: a,
                            triggersBounds: i
                        });
                    });
                }, {});
                var z = sl.properties = [].concat(g, b, v, y, m, _, p, h, u, c, d, w, E, T, k, M, R, S, P, N, D), V = sl.propertyGroups = {
                    behavior: g,
                    transition: b,
                    visibility: v,
                    overlay: y,
                    underlay: m,
                    ghost: _,
                    commonLabel: p,
                    labelDimensions: h,
                    mainLabel: u,
                    sourceLabel: c,
                    targetLabel: d,
                    nodeBody: w,
                    nodeBorder: E,
                    nodeOutline: T,
                    backgroundImage: k,
                    pie: M,
                    stripe: R,
                    compound: S,
                    edgeLine: P,
                    edgeArrow: N,
                    core: D
                }, q = sl.propertyGroupNames = {};
                (sl.propertyGroupKeys = Object.keys(V)).forEach(function(e1) {
                    q[e1] = V[e1].map(function(e1) {
                        return e1.name;
                    }), V[e1].forEach(function(t) {
                        return t.groupKey = e1;
                    });
                });
                var j = sl.aliases = [
                    {
                        name: "content",
                        pointsTo: "label"
                    },
                    {
                        name: "control-point-distance",
                        pointsTo: "control-point-distances"
                    },
                    {
                        name: "control-point-weight",
                        pointsTo: "control-point-weights"
                    },
                    {
                        name: "segment-distance",
                        pointsTo: "segment-distances"
                    },
                    {
                        name: "segment-weight",
                        pointsTo: "segment-weights"
                    },
                    {
                        name: "segment-radius",
                        pointsTo: "segment-radii"
                    },
                    {
                        name: "edge-text-rotation",
                        pointsTo: "text-rotation"
                    },
                    {
                        name: "padding-left",
                        pointsTo: "padding"
                    },
                    {
                        name: "padding-right",
                        pointsTo: "padding"
                    },
                    {
                        name: "padding-top",
                        pointsTo: "padding"
                    },
                    {
                        name: "padding-bottom",
                        pointsTo: "padding"
                    }
                ];
                sl.propertyNames = z.map(function(e1) {
                    return e1.name;
                });
                for(var W = 0; W < z.length; W++){
                    var H = z[W];
                    z[H.name] = H;
                }
                for(var Y = 0; Y < j.length; Y++){
                    var K = j[Y], G = z[K.pointsTo], U = {
                        name: K.name,
                        alias: !0,
                        pointsTo: G
                    };
                    z.push(U), z[K.name] = U;
                }
            }(), sl.getDefaultProperty = function(e1) {
                return this.getDefaultProperties()[e1];
            }, sl.getDefaultProperties = function() {
                var e1 = this._private;
                if (null != e1.defaultProperties) return e1.defaultProperties;
                for(var t = ve({
                    "selection-box-color": "#ddd",
                    "selection-box-opacity": .65,
                    "selection-box-border-color": "#aaa",
                    "selection-box-border-width": 1,
                    "active-bg-color": "black",
                    "active-bg-opacity": .15,
                    "active-bg-size": 30,
                    "outside-texture-bg-color": "#000",
                    "outside-texture-bg-opacity": .125,
                    events: "yes",
                    "text-events": "no",
                    "text-valign": "top",
                    "text-halign": "center",
                    "text-justification": "auto",
                    "line-height": 1,
                    color: "#000",
                    "text-outline-color": "#000",
                    "text-outline-width": 0,
                    "text-outline-opacity": 1,
                    "text-opacity": 1,
                    "text-decoration": "none",
                    "text-transform": "none",
                    "text-wrap": "none",
                    "text-overflow-wrap": "whitespace",
                    "text-max-width": 9999,
                    "text-background-color": "#000",
                    "text-background-opacity": 0,
                    "text-background-shape": "rectangle",
                    "text-background-padding": 0,
                    "text-border-opacity": 0,
                    "text-border-width": 0,
                    "text-border-style": "solid",
                    "text-border-color": "#000",
                    "font-family": "Helvetica Neue, Helvetica, sans-serif",
                    "font-style": "normal",
                    "font-weight": "normal",
                    "font-size": 16,
                    "min-zoomed-font-size": 0,
                    "text-rotation": "none",
                    "source-text-rotation": "none",
                    "target-text-rotation": "none",
                    visibility: "visible",
                    display: "element",
                    opacity: 1,
                    "z-compound-depth": "auto",
                    "z-index-compare": "auto",
                    "z-index": 0,
                    label: "",
                    "text-margin-x": 0,
                    "text-margin-y": 0,
                    "source-label": "",
                    "source-text-offset": 0,
                    "source-text-margin-x": 0,
                    "source-text-margin-y": 0,
                    "target-label": "",
                    "target-text-offset": 0,
                    "target-text-margin-x": 0,
                    "target-text-margin-y": 0,
                    "overlay-opacity": 0,
                    "overlay-color": "#000",
                    "overlay-padding": 10,
                    "overlay-shape": "round-rectangle",
                    "overlay-corner-radius": "auto",
                    "underlay-opacity": 0,
                    "underlay-color": "#000",
                    "underlay-padding": 10,
                    "underlay-shape": "round-rectangle",
                    "underlay-corner-radius": "auto",
                    "transition-property": "none",
                    "transition-duration": 0,
                    "transition-delay": 0,
                    "transition-timing-function": "linear",
                    "box-select-labels": "no",
                    "background-blacken": 0,
                    "background-color": "#999",
                    "background-fill": "solid",
                    "background-opacity": 1,
                    "background-image": "none",
                    "background-image-crossorigin": "anonymous",
                    "background-image-opacity": 1,
                    "background-image-containment": "inside",
                    "background-image-smoothing": "yes",
                    "background-position-x": "50%",
                    "background-position-y": "50%",
                    "background-offset-x": 0,
                    "background-offset-y": 0,
                    "background-width-relative-to": "include-padding",
                    "background-height-relative-to": "include-padding",
                    "background-repeat": "no-repeat",
                    "background-fit": "none",
                    "background-clip": "node",
                    "background-width": "auto",
                    "background-height": "auto",
                    "border-color": "#000",
                    "border-opacity": 1,
                    "border-width": 0,
                    "border-style": "solid",
                    "border-dash-pattern": [
                        4,
                        2
                    ],
                    "border-dash-offset": 0,
                    "border-cap": "butt",
                    "border-join": "miter",
                    "border-position": "center",
                    "outline-color": "#999",
                    "outline-opacity": 1,
                    "outline-width": 0,
                    "outline-offset": 0,
                    "outline-style": "solid",
                    height: 30,
                    width: 30,
                    shape: "ellipse",
                    "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
                    "corner-radius": "auto",
                    "bounds-expansion": 0,
                    "background-gradient-direction": "to-bottom",
                    "background-gradient-stop-colors": "#999",
                    "background-gradient-stop-positions": "0%",
                    ghost: "no",
                    "ghost-offset-y": 0,
                    "ghost-offset-x": 0,
                    "ghost-opacity": 0,
                    padding: 0,
                    "padding-relative-to": "width",
                    position: "origin",
                    "compound-sizing-wrt-labels": "include",
                    "min-width": 0,
                    "min-width-bias-left": 0,
                    "min-width-bias-right": 0,
                    "min-height": 0,
                    "min-height-bias-top": 0,
                    "min-height-bias-bottom": 0
                }, {
                    "pie-size": "100%",
                    "pie-hole": 0,
                    "pie-start-angle": "0deg"
                }, [
                    {
                        name: "pie-{{i}}-background-color",
                        value: "black"
                    },
                    {
                        name: "pie-{{i}}-background-size",
                        value: "0%"
                    },
                    {
                        name: "pie-{{i}}-background-opacity",
                        value: 1
                    }
                ].reduce(function(e1, t) {
                    for(var n = 1; n <= sl.pieBackgroundN; n++){
                        var a = t.name.replace("{{i}}", n), i = t.value;
                        e1[a] = i;
                    }
                    return e1;
                }, {}), {
                    "stripe-size": "100%",
                    "stripe-direction": "horizontal"
                }, [
                    {
                        name: "stripe-{{i}}-background-color",
                        value: "black"
                    },
                    {
                        name: "stripe-{{i}}-background-size",
                        value: "0%"
                    },
                    {
                        name: "stripe-{{i}}-background-opacity",
                        value: 1
                    }
                ].reduce(function(e1, t) {
                    for(var n = 1; n <= sl.stripeBackgroundN; n++){
                        var a = t.name.replace("{{i}}", n), i = t.value;
                        e1[a] = i;
                    }
                    return e1;
                }, {}), {
                    "line-style": "solid",
                    "line-color": "#999",
                    "line-fill": "solid",
                    "line-cap": "butt",
                    "line-opacity": 1,
                    "line-outline-width": 0,
                    "line-outline-color": "#000",
                    "line-gradient-stop-colors": "#999",
                    "line-gradient-stop-positions": "0%",
                    "control-point-step-size": 40,
                    "control-point-weights": .5,
                    "segment-weights": .5,
                    "segment-distances": 20,
                    "segment-radii": 15,
                    "radius-type": "arc-radius",
                    "taxi-turn": "50%",
                    "taxi-radius": 15,
                    "taxi-turn-min-distance": 10,
                    "taxi-direction": "auto",
                    "edge-distances": "intersection",
                    "curve-style": "haystack",
                    "haystack-radius": 0,
                    "arrow-scale": 1,
                    "loop-direction": "-45deg",
                    "loop-sweep": "-90deg",
                    "source-distance-from-node": 0,
                    "target-distance-from-node": 0,
                    "source-endpoint": "outside-to-node",
                    "target-endpoint": "outside-to-node",
                    "line-dash-pattern": [
                        6,
                        3
                    ],
                    "line-dash-offset": 0
                }, [
                    {
                        name: "arrow-shape",
                        value: "none"
                    },
                    {
                        name: "arrow-color",
                        value: "#999"
                    },
                    {
                        name: "arrow-fill",
                        value: "filled"
                    },
                    {
                        name: "arrow-width",
                        value: 1
                    }
                ].reduce(function(e1, t) {
                    return sl.arrowPrefixes.forEach(function(n) {
                        var a = n + "-" + t.name, i = t.value;
                        e1[a] = i;
                    }), e1;
                }, {})), n = {}, a = 0; a < this.properties.length; a++){
                    var i = this.properties[a];
                    if (!i.pointsTo) {
                        var o = i.name, s = t[o], l = this.parse(o, s);
                        n[o] = l;
                    }
                }
                return e1.defaultProperties = n, e1.defaultProperties;
            }, sl.addDefaultStylesheet = function() {
                this.selector(":parent").css({
                    shape: "rectangle",
                    padding: 10,
                    "background-color": "#eee",
                    "border-color": "#ccc",
                    "border-width": 1
                }).selector("edge").css({
                    width: 3
                }).selector(":loop").css({
                    "curve-style": "bezier"
                }).selector("edge:compound").css({
                    "curve-style": "bezier",
                    "source-endpoint": "outside-to-line",
                    "target-endpoint": "outside-to-line"
                }).selector(":selected").css({
                    "background-color": "#0169D9",
                    "line-color": "#0169D9",
                    "source-arrow-color": "#0169D9",
                    "target-arrow-color": "#0169D9",
                    "mid-source-arrow-color": "#0169D9",
                    "mid-target-arrow-color": "#0169D9"
                }).selector(":parent:selected").css({
                    "background-color": "#CCE1F9",
                    "border-color": "#aec8e5"
                }).selector(":active").css({
                    "overlay-color": "black",
                    "overlay-padding": 10,
                    "overlay-opacity": .25
                }), this.defaultLength = this.length;
            };
            var ll = {
                parse: function(e1, t, n, a) {
                    var i = this;
                    if (Y(t)) return i.parseImplWarn(e1, t, n, a);
                    var o, s = Oe(e1, "" + t, n ? "t" : "f", "mapping" === a || !0 === a || !1 === a || null == a ? "dontcare" : a), l = i.propCache = i.propCache || [];
                    return (o = l[s]) || (o = l[s] = i.parseImplWarn(e1, t, n, a)), (n || "mapping" === a) && (o = Ze(o)) && (o.value = Ze(o.value)), o;
                },
                parseImplWarn: function(e1, t, n, a) {
                    var i = this.parseImpl(e1, t, n, a);
                    return i || null == t || Ue("The style property `".concat(e1, ": ").concat(t, "` is invalid")), !i || "width" !== i.name && "height" !== i.name || "label" !== t || Ue("The style value of `label` is deprecated for `" + i.name + "`"), i;
                }
            };
            ll.parseImpl = function(e1, t, n, a) {
                var i = this;
                e1 = oe(e1);
                var o = i.properties[e1], s = t, l = i.types;
                if (!o) return null;
                if (void 0 === t) return null;
                o.alias && (o = o.pointsTo, e1 = o.name);
                var u = X(t);
                u && (t = t.trim());
                var c, d, h = o.type;
                if (!h) return null;
                if (n && ("" === t || null === t)) return {
                    name: e1,
                    value: t,
                    bypass: !0,
                    deleteBypass: !0
                };
                if (Y(t)) return {
                    name: e1,
                    value: t,
                    strValue: "fn",
                    mapped: l.fn,
                    bypass: n
                };
                if (!u || a || t.length < 7 || "a" !== t[1]) ;
                else {
                    if (t.length >= 7 && "d" === t[0] && (c = new RegExp(l.data.regex).exec(t))) {
                        if (n) return !1;
                        var p = l.data;
                        return {
                            name: e1,
                            value: c,
                            strValue: "" + t,
                            mapped: p,
                            field: c[1],
                            bypass: n
                        };
                    }
                    if (t.length >= 10 && "m" === t[0] && (d = new RegExp(l.mapData.regex).exec(t))) {
                        if (n) return !1;
                        if (h.multiple) return !1;
                        var g = l.mapData;
                        if (!h.color && !h.number) return !1;
                        var v = this.parse(e1, d[4]);
                        if (!v || v.mapped) return !1;
                        var y = this.parse(e1, d[5]);
                        if (!y || y.mapped) return !1;
                        if (v.pfValue === y.pfValue || v.strValue === y.strValue) return Ue("`" + e1 + ": " + t + "` is not a valid mapper because the output range is zero; converting to `" + e1 + ": " + v.strValue + "`"), this.parse(e1, v.strValue);
                        if (h.color) {
                            var m = v.value, b = y.value;
                            if (!(m[0] !== b[0] || m[1] !== b[1] || m[2] !== b[2] || m[3] !== b[3] && (null != m[3] && 1 !== m[3] || null != b[3] && 1 !== b[3]))) return !1;
                        }
                        return {
                            name: e1,
                            value: d,
                            strValue: "" + t,
                            mapped: g,
                            field: d[1],
                            fieldMin: parseFloat(d[2]),
                            fieldMax: parseFloat(d[3]),
                            valueMin: v.value,
                            valueMax: y.value,
                            bypass: n
                        };
                    }
                }
                if (h.multiple && "multiple" !== a) {
                    var x;
                    if (x = u ? t.split(/\s+/) : K(t) ? t : [
                        t
                    ], h.evenMultiple && x.length % 2 != 0) return null;
                    for(var w = [], E = [], T = [], k = "", S = !1, P = 0; P < x.length; P++){
                        var _ = i.parse(e1, x[P], n, "multiple");
                        S = S || X(_.value), w.push(_.value), T.push(null != _.pfValue ? _.pfValue : _.value), E.push(_.units), k += (P > 0 ? " " : "") + _.strValue;
                    }
                    return h.validate && !h.validate(w, E) ? null : h.singleEnum && S ? 1 === w.length && X(w[0]) ? {
                        name: e1,
                        value: w[0],
                        strValue: w[0],
                        bypass: n
                    } : null : {
                        name: e1,
                        value: w,
                        pfValue: T,
                        strValue: k,
                        bypass: n,
                        units: E
                    };
                }
                var D = function checkEnums() {
                    for(var a = 0; a < h.enums.length; a++){
                        if (h.enums[a] === t) return {
                            name: e1,
                            value: t,
                            strValue: "" + t,
                            bypass: n
                        };
                    }
                    return null;
                };
                if (h.number) {
                    var M, I = "px";
                    if (h.units && (M = h.units), h.implicitUnits && (I = h.implicitUnits), !h.unitless) if (u) {
                        var R = "px|em" + (h.allowPercent ? "|\\%" : "");
                        M && (R = M);
                        var L = t.match("^(" + ce + ")(" + R + ")?$");
                        L && (t = L[1], M = L[2] || I);
                    } else M && !h.implicitUnits || (M = I);
                    if (t = parseFloat(t), isNaN(t) && void 0 === h.enums) return null;
                    if (isNaN(t) && void 0 !== h.enums) return t = s, D();
                    if (h.integer && !function integer(e1) {
                        return U(e1) && Math.floor(e1) === e1;
                    }(t)) return null;
                    if (void 0 !== h.min && (t < h.min || h.strictMin && t === h.min) || void 0 !== h.max && (t > h.max || h.strictMax && t === h.max)) return null;
                    var N = {
                        name: e1,
                        value: t,
                        strValue: "" + t + (M || ""),
                        units: M,
                        bypass: n
                    };
                    return h.unitless || "px" !== M && "em" !== M ? N.pfValue = t : N.pfValue = "px" !== M && M ? this.getEmSizeInPixels() * t : t, "ms" !== M && "s" !== M || (N.pfValue = "ms" === M ? t : 1e3 * t), "deg" !== M && "rad" !== M || (N.pfValue = "rad" === M ? t : function deg2rad(e1) {
                        return Math.PI * e1 / 180;
                    }(t)), "%" === M && (N.pfValue = t / 100), N;
                }
                if (h.propList) {
                    var O = [], z = "" + t;
                    if ("none" === z) ;
                    else {
                        for(var V = z.split(/\s*,\s*|\s+/), q = 0; q < V.length; q++){
                            var j = V[q].trim();
                            i.properties[j] ? O.push(j) : Ue("`" + j + "` is not a valid property name");
                        }
                        if (0 === O.length) return null;
                    }
                    return {
                        name: e1,
                        value: O,
                        strValue: 0 === O.length ? "none" : O.join(" "),
                        bypass: n
                    };
                }
                if (h.color) {
                    var W = ye(t);
                    return W ? {
                        name: e1,
                        value: W,
                        pfValue: W,
                        strValue: "rgb(" + W[0] + "," + W[1] + "," + W[2] + ")",
                        bypass: n
                    } : null;
                }
                if (h.regex || h.regexes) {
                    if (h.enums) {
                        var H = D();
                        if (H) return H;
                    }
                    for(var G = h.regexes ? h.regexes : [
                        h.regex
                    ], Z = 0; Z < G.length; Z++){
                        var Q = new RegExp(G[Z]).exec(t);
                        if (Q) return {
                            name: e1,
                            value: h.singleRegexMatchValue ? Q[1] : Q,
                            strValue: "" + t,
                            bypass: n
                        };
                    }
                    return null;
                }
                return h.string ? {
                    name: e1,
                    value: "" + t,
                    strValue: "" + t,
                    bypass: n
                } : h.enums ? D() : null;
            };
            var ul = function Style(e1) {
                if (!(this instanceof ul)) return new ul(e1);
                te(e1) ? (this._private = {
                    cy: e1,
                    coreStyle: {}
                }, this.length = 0, this.resetToDefault()) : Ke("A style must have a core reference");
            }, cl = ul.prototype;
            cl.instanceString = function() {
                return "style";
            }, cl.clear = function() {
                for(var e1 = this._private, t = e1.cy.elements(), n = 0; n < this.length; n++)this[n] = void 0;
                return this.length = 0, e1.contextStyles = {}, e1.propDiffs = {}, this.cleanElements(t, !0), t.forEach(function(e1) {
                    var t = e1[0]._private;
                    t.styleDirty = !0, t.appliedInitStyle = !1;
                }), this;
            }, cl.resetToDefault = function() {
                return this.clear(), this.addDefaultStylesheet(), this;
            }, cl.core = function(e1) {
                return this._private.coreStyle[e1] || this.getDefaultProperty(e1);
            }, cl.selector = function(e1) {
                var t = "core" === e1 ? null : new To(e1), n = this.length++;
                return this[n] = {
                    selector: t,
                    properties: [],
                    mappedProperties: [],
                    index: n
                }, this;
            }, cl.css = function() {
                var e1 = arguments;
                if (1 === e1.length) for(var t = e1[0], n = 0; n < this.properties.length; n++){
                    var a = this.properties[n], i = t[a.name];
                    void 0 === i && (i = t[se(a.name)]), void 0 !== i && this.cssRule(a.name, i);
                }
                else 2 === e1.length && this.cssRule(e1[0], e1[1]);
                return this;
            }, cl.style = cl.css, cl.cssRule = function(e1, t) {
                var n = this.parse(e1, t);
                if (n) {
                    var a = this.length - 1;
                    this[a].properties.push(n), this[a].properties[n.name] = n, n.name.match(/pie-(\d+)-background-size/) && n.value && (this._private.hasPie = !0), n.name.match(/stripe-(\d+)-background-size/) && n.value && (this._private.hasStripe = !0), n.mapped && this[a].mappedProperties.push(n), !this[a].selector && (this._private.coreStyle[n.name] = n);
                }
                return this;
            }, cl.append = function(e1) {
                return ne(e1) ? e1.appendToStyle(this) : K(e1) ? this.appendFromJson(e1) : X(e1) && this.appendFromString(e1), this;
            }, ul.fromJson = function(e1, t) {
                var n = new ul(e1);
                return n.fromJson(t), n;
            }, ul.fromString = function(e1, t) {
                return new ul(e1).fromString(t);
            }, [
                el,
                nl,
                rl,
                al,
                il,
                ol,
                sl,
                ll
            ].forEach(function(e1) {
                ve(cl, e1);
            }), ul.types = cl.types, ul.properties = cl.properties, ul.propertyGroups = cl.propertyGroups, ul.propertyGroupNames = cl.propertyGroupNames, ul.propertyGroupKeys = cl.propertyGroupKeys;
            var dl = {
                style: function style(e1) {
                    e1 && this.setStyle(e1).update();
                    return this._private.style;
                },
                setStyle: function setStyle(e1) {
                    var t = this._private;
                    return ne(e1) ? t.style = e1.generateStyle(this) : K(e1) ? t.style = ul.fromJson(this, e1) : X(e1) ? t.style = ul.fromString(this, e1) : t.style = ul(this), t.style;
                },
                updateStyle: function updateStyle() {
                    this.mutableElements().updateStyle();
                }
            }, hl = {
                autolock: function autolock(e1) {
                    return void 0 === e1 ? this._private.autolock : (this._private.autolock = !!e1, this);
                },
                autoungrabify: function autoungrabify(e1) {
                    return void 0 === e1 ? this._private.autoungrabify : (this._private.autoungrabify = !!e1, this);
                },
                autounselectify: function autounselectify(e1) {
                    return void 0 === e1 ? this._private.autounselectify : (this._private.autounselectify = !!e1, this);
                },
                selectionType: function selectionType(e1) {
                    var t = this._private;
                    return null == t.selectionType && (t.selectionType = "single"), void 0 === e1 ? t.selectionType : ("additive" !== e1 && "single" !== e1 || (t.selectionType = e1), this);
                },
                panningEnabled: function panningEnabled(e1) {
                    return void 0 === e1 ? this._private.panningEnabled : (this._private.panningEnabled = !!e1, this);
                },
                userPanningEnabled: function userPanningEnabled(e1) {
                    return void 0 === e1 ? this._private.userPanningEnabled : (this._private.userPanningEnabled = !!e1, this);
                },
                zoomingEnabled: function zoomingEnabled(e1) {
                    return void 0 === e1 ? this._private.zoomingEnabled : (this._private.zoomingEnabled = !!e1, this);
                },
                userZoomingEnabled: function userZoomingEnabled(e1) {
                    return void 0 === e1 ? this._private.userZoomingEnabled : (this._private.userZoomingEnabled = !!e1, this);
                },
                boxSelectionEnabled: function boxSelectionEnabled(e1) {
                    return void 0 === e1 ? this._private.boxSelectionEnabled : (this._private.boxSelectionEnabled = !!e1, this);
                },
                pan: function pan() {
                    var e1, t, n, a, i, o = arguments, pan = this._private.pan;
                    switch(o.length){
                        case 0:
                            return pan;
                        case 1:
                            if (X(o[0])) return pan[e1 = o[0]];
                            if (G(o[0])) {
                                if (!this._private.panningEnabled) return this;
                                a = (n = o[0]).x, i = n.y, U(a) && (pan.x = a), U(i) && (pan.y = i), this.emit("pan viewport");
                            }
                            break;
                        case 2:
                            if (!this._private.panningEnabled) return this;
                            t = o[1], "x" !== (e1 = o[0]) && "y" !== e1 || !U(t) || (pan[e1] = t), this.emit("pan viewport");
                    }
                    return this.notify("viewport"), this;
                },
                panBy: function panBy(e1, t) {
                    var n, a, i, o, s, l = arguments, u = this._private.pan;
                    if (!this._private.panningEnabled) return this;
                    switch(l.length){
                        case 1:
                            G(e1) && (o = (i = l[0]).x, s = i.y, U(o) && (u.x += o), U(s) && (u.y += s), this.emit("pan viewport"));
                            break;
                        case 2:
                            a = t, "x" !== (n = e1) && "y" !== n || !U(a) || (u[n] += a), this.emit("pan viewport");
                    }
                    return this.notify("viewport"), this;
                },
                gc: function gc() {
                    this.notify("gc");
                },
                fit: function fit(e1, t) {
                    var n = this.getFitViewport(e1, t);
                    if (n) {
                        var a = this._private;
                        a.zoom = n.zoom, a.pan = n.pan, this.emit("pan zoom viewport"), this.notify("viewport");
                    }
                    return this;
                },
                getFitViewport: function getFitViewport(e1, t) {
                    if (U(e1) && void 0 === t && (t = e1, e1 = void 0), this._private.panningEnabled && this._private.zoomingEnabled) {
                        var n;
                        if (X(e1)) {
                            var a = e1;
                            e1 = this.$(a);
                        } else if (function boundingBox(e1) {
                            return G(e1) && U(e1.x1) && U(e1.x2) && U(e1.y1) && U(e1.y2);
                        }(e1)) {
                            var i = e1;
                            (n = {
                                x1: i.x1,
                                y1: i.y1,
                                x2: i.x2,
                                y2: i.y2
                            }).w = n.x2 - n.x1, n.h = n.y2 - n.y1;
                        } else Q(e1) || (e1 = this.mutableElements());
                        if (!Q(e1) || !e1.empty()) {
                            n = n || e1.boundingBox();
                            var o, s = this.width(), l = this.height();
                            if (t = U(t) ? t : 0, !isNaN(s) && !isNaN(l) && s > 0 && l > 0 && !isNaN(n.w) && !isNaN(n.h) && n.w > 0 && n.h > 0) return {
                                zoom: o = (o = (o = Math.min((s - 2 * t) / n.w, (l - 2 * t) / n.h)) > this._private.maxZoom ? this._private.maxZoom : o) < this._private.minZoom ? this._private.minZoom : o,
                                pan: {
                                    x: (s - o * (n.x1 + n.x2)) / 2,
                                    y: (l - o * (n.y1 + n.y2)) / 2
                                }
                            };
                        }
                    }
                },
                zoomRange: function zoomRange(e1, t) {
                    var n = this._private;
                    if (null == t) {
                        var a = e1;
                        e1 = a.min, t = a.max;
                    }
                    return U(e1) && U(t) && e1 <= t ? (n.minZoom = e1, n.maxZoom = t) : U(e1) && void 0 === t && e1 <= n.maxZoom ? n.minZoom = e1 : U(t) && void 0 === e1 && t >= n.minZoom && (n.maxZoom = t), this;
                },
                minZoom: function minZoom(e1) {
                    return void 0 === e1 ? this._private.minZoom : this.zoomRange({
                        min: e1
                    });
                },
                maxZoom: function maxZoom(e1) {
                    return void 0 === e1 ? this._private.maxZoom : this.zoomRange({
                        max: e1
                    });
                },
                getZoomedViewport: function getZoomedViewport(e1) {
                    var t, n, a = this._private, i = a.pan, o = a.zoom, s = !1;
                    if (a.zoomingEnabled || (s = !0), U(e1) ? n = e1 : G(e1) && (n = e1.level, null != e1.position ? t = Dt(e1.position, o, i) : null != e1.renderedPosition && (t = e1.renderedPosition), null == t || a.panningEnabled || (s = !0)), n = (n = n > a.maxZoom ? a.maxZoom : n) < a.minZoom ? a.minZoom : n, s || !U(n) || n === o || null != t && (!U(t.x) || !U(t.y))) return null;
                    if (null != t) {
                        var l = i, u = o, c = n;
                        return {
                            zoomed: !0,
                            panned: !0,
                            zoom: c,
                            pan: {
                                x: -c / u * (t.x - l.x) + t.x,
                                y: -c / u * (t.y - l.y) + t.y
                            }
                        };
                    }
                    return {
                        zoomed: !0,
                        panned: !1,
                        zoom: n,
                        pan: i
                    };
                },
                zoom: function zoom(e1) {
                    if (void 0 === e1) return this._private.zoom;
                    var t = this.getZoomedViewport(e1), n = this._private;
                    return null != t && t.zoomed ? (n.zoom = t.zoom, t.panned && (n.pan.x = t.pan.x, n.pan.y = t.pan.y), this.emit("zoom" + (t.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this) : this;
                },
                viewport: function viewport(e1) {
                    var t = this._private, n = !0, a = !0, i = [], o = !1, s = !1;
                    if (!e1) return this;
                    if (U(e1.zoom) || (n = !1), G(e1.pan) || (a = !1), !n && !a) return this;
                    if (n) {
                        var l = e1.zoom;
                        l < t.minZoom || l > t.maxZoom || !t.zoomingEnabled ? o = !0 : (t.zoom = l, i.push("zoom"));
                    }
                    if (a && (!o || !e1.cancelOnFailedZoom) && t.panningEnabled) {
                        var u = e1.pan;
                        U(u.x) && (t.pan.x = u.x, s = !1), U(u.y) && (t.pan.y = u.y, s = !1), s || i.push("pan");
                    }
                    return i.length > 0 && (i.push("viewport"), this.emit(i.join(" ")), this.notify("viewport")), this;
                },
                center: function center(e1) {
                    var t = this.getCenterPan(e1);
                    return t && (this._private.pan = t, this.emit("pan viewport"), this.notify("viewport")), this;
                },
                getCenterPan: function getCenterPan(e1, t) {
                    if (this._private.panningEnabled) {
                        if (X(e1)) {
                            var n = e1;
                            e1 = this.mutableElements().filter(n);
                        } else Q(e1) || (e1 = this.mutableElements());
                        if (0 !== e1.length) {
                            var a = e1.boundingBox(), i = this.width(), o = this.height();
                            return {
                                x: (i - (t = void 0 === t ? this._private.zoom : t) * (a.x1 + a.x2)) / 2,
                                y: (o - t * (a.y1 + a.y2)) / 2
                            };
                        }
                    }
                },
                reset: function reset() {
                    return this._private.panningEnabled && this._private.zoomingEnabled ? (this.viewport({
                        pan: {
                            x: 0,
                            y: 0
                        },
                        zoom: 1
                    }), this) : this;
                },
                invalidateSize: function invalidateSize() {
                    this._private.sizeCache = null;
                },
                size: function size() {
                    var e1, t, n = this._private, a = n.container, i = this;
                    return n.sizeCache = n.sizeCache || (a ? (e1 = i.window().getComputedStyle(a), t = function val(t) {
                        return parseFloat(e1.getPropertyValue(t));
                    }, {
                        width: a.clientWidth - t("padding-left") - t("padding-right"),
                        height: a.clientHeight - t("padding-top") - t("padding-bottom")
                    }) : {
                        width: 1,
                        height: 1
                    });
                },
                width: function width() {
                    return this.size().width;
                },
                height: function height() {
                    return this.size().height;
                },
                extent: function extent() {
                    var e1 = this._private.pan, t = this._private.zoom, n = this.renderedExtent(), a = {
                        x1: (n.x1 - e1.x) / t,
                        x2: (n.x2 - e1.x) / t,
                        y1: (n.y1 - e1.y) / t,
                        y2: (n.y2 - e1.y) / t
                    };
                    return a.w = a.x2 - a.x1, a.h = a.y2 - a.y1, a;
                },
                renderedExtent: function renderedExtent() {
                    var e1 = this.width(), t = this.height();
                    return {
                        x1: 0,
                        y1: 0,
                        x2: e1,
                        y2: t,
                        w: e1,
                        h: t
                    };
                },
                multiClickDebounceTime: function multiClickDebounceTime(e1) {
                    return e1 ? (this._private.multiClickDebounceTime = e1, this) : this._private.multiClickDebounceTime;
                }
            };
            hl.centre = hl.center, hl.autolockNodes = hl.autolock, hl.autoungrabifyNodes = hl.autoungrabify;
            var pl = {
                data: Fi.data({
                    field: "data",
                    bindingEvent: "data",
                    allowBinding: !0,
                    allowSetting: !0,
                    settingEvent: "data",
                    settingTriggersEvent: !0,
                    triggerFnName: "trigger",
                    allowGetting: !0,
                    updateStyle: !0
                }),
                removeData: Fi.removeData({
                    field: "data",
                    event: "data",
                    triggerFnName: "trigger",
                    triggerEvent: !0,
                    updateStyle: !0
                }),
                scratch: Fi.data({
                    field: "scratch",
                    bindingEvent: "scratch",
                    allowBinding: !0,
                    allowSetting: !0,
                    settingEvent: "scratch",
                    settingTriggersEvent: !0,
                    triggerFnName: "trigger",
                    allowGetting: !0,
                    updateStyle: !0
                }),
                removeScratch: Fi.removeData({
                    field: "scratch",
                    event: "scratch",
                    triggerFnName: "trigger",
                    triggerEvent: !0,
                    updateStyle: !0
                })
            };
            pl.attr = pl.data, pl.removeAttr = pl.removeData;
            var fl = function Core(e1) {
                var t = this, n = (e1 = ve({}, e1)).container;
                n && !Z(n) && Z(n[0]) && (n = n[0]);
                var a = n ? n._cyreg : null;
                (a = a || {}) && a.cy && (a.cy.destroy(), a = {});
                var o = a.readies = a.readies || [];
                n && (n._cyreg = a), a.cy = t;
                var s = void 0 !== i && void 0 !== n && !e1.headless, l = e1;
                l.layout = ve({
                    name: s ? "grid" : "null"
                }, l.layout), l.renderer = ve({
                    name: s ? "canvas" : "null"
                }, l.renderer);
                var u = function defVal(e1, t, n) {
                    return void 0 !== t ? t : void 0 !== n ? n : e1;
                }, c = this._private = {
                    container: n,
                    ready: !1,
                    options: l,
                    elements: new zs(this),
                    listeners: [],
                    aniEles: new zs(this),
                    data: l.data || {},
                    scratch: {},
                    layout: null,
                    renderer: null,
                    destroyed: !1,
                    notificationsEnabled: !0,
                    minZoom: 1e-50,
                    maxZoom: 1e50,
                    zoomingEnabled: u(!0, l.zoomingEnabled),
                    userZoomingEnabled: u(!0, l.userZoomingEnabled),
                    panningEnabled: u(!0, l.panningEnabled),
                    userPanningEnabled: u(!0, l.userPanningEnabled),
                    boxSelectionEnabled: u(!0, l.boxSelectionEnabled),
                    autolock: u(!1, l.autolock, l.autolockNodes),
                    autoungrabify: u(!1, l.autoungrabify, l.autoungrabifyNodes),
                    autounselectify: u(!1, l.autounselectify),
                    styleEnabled: void 0 === l.styleEnabled ? s : l.styleEnabled,
                    zoom: U(l.zoom) ? l.zoom : 1,
                    pan: {
                        x: G(l.pan) && U(l.pan.x) ? l.pan.x : 0,
                        y: G(l.pan) && U(l.pan.y) ? l.pan.y : 0
                    },
                    animation: {
                        current: [],
                        queue: []
                    },
                    hasCompoundNodes: !1,
                    multiClickDebounceTime: u(250, l.multiClickDebounceTime)
                };
                this.createEmitter(), this.selectionType(l.selectionType), this.zoomRange({
                    min: l.minZoom,
                    max: l.maxZoom
                });
                c.styleEnabled && t.setStyle([]);
                var d = ve({}, l, l.renderer);
                t.initRenderer(d);
                !function loadExtData(e1, t) {
                    if (e1.some(ae)) return Ir.all(e1).then(t);
                    t(e1);
                }([
                    l.style,
                    l.elements
                ], function(e1) {
                    var n = e1[0], i = e1[1];
                    c.styleEnabled && t.style().append(n), function setElesAndLayout(e1, n, a) {
                        t.notifications(!1);
                        var i = t.mutableElements();
                        i.length > 0 && i.remove(), null != e1 && (G(e1) || K(e1)) && t.add(e1), t.one("layoutready", function(e1) {
                            t.notifications(!0), t.emit(e1), t.one("load", n), t.emitAndNotify("load");
                        }).one("layoutstop", function() {
                            t.one("done", a), t.emit("done");
                        });
                        var o = ve({}, t._private.options.layout);
                        o.eles = t.elements(), t.layout(o).run();
                    }(i, function() {
                        t.startAnimationLoop(), c.ready = !0, Y(l.ready) && t.on("ready", l.ready);
                        for(var e1 = 0; e1 < o.length; e1++){
                            var n = o[e1];
                            t.on("ready", n);
                        }
                        a && (a.readies = []), t.emit("ready");
                    }, l.done);
                });
            }, gl = fl.prototype;
            ve(gl, {
                instanceString: function instanceString() {
                    return "core";
                },
                isReady: function isReady() {
                    return this._private.ready;
                },
                destroyed: function destroyed() {
                    return this._private.destroyed;
                },
                ready: function ready(e1) {
                    return this.isReady() ? this.emitter().emit("ready", [], e1) : this.on("ready", e1), this;
                },
                destroy: function destroy() {
                    var e1 = this;
                    if (!e1.destroyed()) return e1.stopAnimationLoop(), e1.destroyRenderer(), this.emit("destroy"), e1._private.destroyed = !0, e1;
                },
                hasElementWithId: function hasElementWithId(e1) {
                    return this._private.elements.hasElementWithId(e1);
                },
                getElementById: function getElementById(e1) {
                    return this._private.elements.getElementById(e1);
                },
                hasCompoundNodes: function hasCompoundNodes() {
                    return this._private.hasCompoundNodes;
                },
                headless: function headless() {
                    return this._private.renderer.isHeadless();
                },
                styleEnabled: function styleEnabled() {
                    return this._private.styleEnabled;
                },
                addToPool: function addToPool(e1) {
                    return this._private.elements.merge(e1), this;
                },
                removeFromPool: function removeFromPool(e1) {
                    return this._private.elements.unmerge(e1), this;
                },
                container: function container() {
                    return this._private.container || null;
                },
                window: function window1() {
                    if (null == this._private.container) return i;
                    var e1 = this._private.container.ownerDocument;
                    return void 0 === e1 || null == e1 ? i : e1.defaultView || i;
                },
                mount: function mount(e1) {
                    if (null != e1) {
                        var t = this, n = t._private, a = n.options;
                        return !Z(e1) && Z(e1[0]) && (e1 = e1[0]), t.stopAnimationLoop(), t.destroyRenderer(), n.container = e1, n.styleEnabled = !0, t.invalidateSize(), t.initRenderer(ve({}, a, a.renderer, {
                            name: "null" === a.renderer.name ? "canvas" : a.renderer.name
                        })), t.startAnimationLoop(), t.style(a.style), t.emit("mount"), t;
                    }
                },
                unmount: function unmount() {
                    var e1 = this;
                    return e1.stopAnimationLoop(), e1.destroyRenderer(), e1.initRenderer({
                        name: "null"
                    }), e1.emit("unmount"), e1;
                },
                options: function options() {
                    return Ze(this._private.options);
                },
                json: function json(e1) {
                    var t = this, n = t._private, a = t.mutableElements();
                    if (G(e1)) {
                        if (t.startBatch(), e1.elements) {
                            var i = {}, o = function updateEles(e1, n) {
                                for(var a = [], o = [], s = 0; s < e1.length; s++){
                                    var l = e1[s];
                                    if (l.data.id) {
                                        var u = "" + l.data.id, c = t.getElementById(u);
                                        i[u] = !0, 0 !== c.length ? o.push({
                                            ele: c,
                                            json: l
                                        }) : n ? (l.group = n, a.push(l)) : a.push(l);
                                    } else Ue("cy.json() cannot handle elements without an ID attribute");
                                }
                                t.add(a);
                                for(var d = 0; d < o.length; d++){
                                    var h = o[d], p = h.ele, g = h.json;
                                    p.json(g);
                                }
                            };
                            if (K(e1.elements)) o(e1.elements);
                            else for(var s = [
                                "nodes",
                                "edges"
                            ], l = 0; l < s.length; l++){
                                var u = s[l], c = e1.elements[u];
                                K(c) && o(c, u);
                            }
                            var d = t.collection();
                            a.filter(function(e1) {
                                return !i[e1.id()];
                            }).forEach(function(e1) {
                                e1.isParent() ? d.merge(e1) : e1.remove();
                            }), d.forEach(function(e1) {
                                return e1.children().move({
                                    parent: null
                                });
                            }), d.forEach(function(e1) {
                                return (function getFreshRef(e1) {
                                    return t.getElementById(e1.id());
                                })(e1).remove();
                            });
                        }
                        e1.style && t.style(e1.style), null != e1.zoom && e1.zoom !== n.zoom && t.zoom(e1.zoom), e1.pan && (e1.pan.x === n.pan.x && e1.pan.y === n.pan.y || t.pan(e1.pan)), e1.data && t.data(e1.data);
                        for(var h = [
                            "minZoom",
                            "maxZoom",
                            "zoomingEnabled",
                            "userZoomingEnabled",
                            "panningEnabled",
                            "userPanningEnabled",
                            "boxSelectionEnabled",
                            "autolock",
                            "autoungrabify",
                            "autounselectify",
                            "multiClickDebounceTime"
                        ], p = 0; p < h.length; p++){
                            var g = h[p];
                            null != e1[g] && t[g](e1[g]);
                        }
                        return t.endBatch(), this;
                    }
                    var json = {};
                    !!e1 ? json.elements = this.elements().map(function(e1) {
                        return e1.json();
                    }) : (json.elements = {}, a.forEach(function(e1) {
                        var t = e1.group();
                        json.elements[t] || (json.elements[t] = []), json.elements[t].push(e1.json());
                    })), this._private.styleEnabled && (json.style = t.style().json()), json.data = Ze(t.data());
                    var v = n.options;
                    return json.zoomingEnabled = n.zoomingEnabled, json.userZoomingEnabled = n.userZoomingEnabled, json.zoom = n.zoom, json.minZoom = n.minZoom, json.maxZoom = n.maxZoom, json.panningEnabled = n.panningEnabled, json.userPanningEnabled = n.userPanningEnabled, json.pan = Ze(n.pan), json.boxSelectionEnabled = n.boxSelectionEnabled, json.renderer = Ze(v.renderer), json.hideEdgesOnViewport = v.hideEdgesOnViewport, json.textureOnViewport = v.textureOnViewport, json.wheelSensitivity = v.wheelSensitivity, json.motionBlur = v.motionBlur, json.multiClickDebounceTime = v.multiClickDebounceTime, json;
                }
            }), gl.$id = gl.getElementById, [
                Vs,
                Hs,
                Ks,
                Gs,
                Us,
                Zs,
                Qs,
                Js,
                dl,
                hl,
                pl
            ].forEach(function(e1) {
                ve(gl, e1);
            });
            var vl = {
                fit: !0,
                directed: !1,
                padding: 30,
                circle: !1,
                grid: !1,
                spacingFactor: 1.75,
                boundingBox: void 0,
                avoidOverlap: !0,
                nodeDimensionsIncludeLabels: !1,
                roots: void 0,
                depthSort: void 0,
                animate: !1,
                animationDuration: 500,
                animationEasing: void 0,
                animateFilter: function animateFilter(e1, t) {
                    return !0;
                },
                ready: void 0,
                stop: void 0,
                transform: function transform(e1, t) {
                    return t;
                }
            }, yl = {
                maximal: !1,
                acyclic: !1
            }, ml = function getInfo(e1) {
                return e1.scratch("breadthfirst");
            }, bl = function setInfo(e1, t) {
                return e1.scratch("breadthfirst", t);
            };
            function BreadthFirstLayout(e1) {
                this.options = ve({}, vl, yl, e1);
            }
            BreadthFirstLayout.prototype.run = function() {
                var e1, t = this.options, n = t.cy, a = t.eles, i = a.nodes().filter(function(e1) {
                    return e1.isChildless();
                }), o = a, s = t.directed, l = t.acyclic || t.maximal || t.maximalAdjustments > 0, u = !!t.boundingBox, c = n.extent(), d = jt(u ? t.boundingBox : {
                    x1: c.x1,
                    y1: c.y1,
                    w: c.w,
                    h: c.h
                });
                if (Q(t.roots)) e1 = t.roots;
                else if (K(t.roots)) {
                    for(var h = [], p = 0; p < t.roots.length; p++){
                        var g = t.roots[p], v = n.getElementById(g);
                        h.push(v);
                    }
                    e1 = n.collection(h);
                } else if (X(t.roots)) e1 = n.$(t.roots);
                else if (s) e1 = i.roots();
                else {
                    var y = a.components();
                    e1 = n.collection();
                    for(var m = function _loop() {
                        var t = y[b], n = t.maxDegree(!1), a = t.filter(function(e1) {
                            return e1.degree(!1) === n;
                        });
                        e1 = e1.add(a);
                    }, b = 0; b < y.length; b++)m();
                }
                var x = [], w = {}, E = function addToDepth(e1, t) {
                    null == x[t] && (x[t] = []);
                    var n = x[t].length;
                    x[t].push(e1), bl(e1, {
                        index: n,
                        depth: t
                    });
                };
                o.bfs({
                    roots: e1,
                    directed: t.directed,
                    visit: function visit(e1, t, n, a, i) {
                        var o = e1[0], s = o.id();
                        o.isChildless() && E(o, i), w[s] = !0;
                    }
                });
                for(var T = [], k = 0; k < i.length; k++){
                    var S = i[k];
                    w[S.id()] || T.push(S);
                }
                var P = function assignDepthsAt(e1) {
                    for(var t = x[e1], n = 0; n < t.length; n++){
                        var a = t[n];
                        null != a ? bl(a, {
                            depth: e1,
                            index: n
                        }) : (t.splice(n, 1), n--);
                    }
                }, _ = function adjustMaximally(e1, n) {
                    for(var i = ml(e1), o = e1.incomers().filter(function(e1) {
                        return e1.isNode() && a.has(e1);
                    }), s = -1, l = e1.id(), u = 0; u < o.length; u++){
                        var c = o[u], d = ml(c);
                        s = Math.max(s, d.depth);
                    }
                    if (i.depth <= s) {
                        if (!t.acyclic && n[l]) return null;
                        var h = s + 1;
                        return function changeDepth(e1, t) {
                            var n = ml(e1), a = n.depth, i = n.index;
                            x[a][i] = null, e1.isChildless() && E(e1, t);
                        }(e1, h), n[l] = h, !0;
                    }
                    return !1;
                };
                if (s && l) {
                    var D = [], M = {}, I = function enqueue(e1) {
                        return D.push(e1);
                    }, R = function dequeue() {
                        return D.shift();
                    };
                    for(i.forEach(function(e1) {
                        return D.push(e1);
                    }); D.length > 0;){
                        var L = R(), N = _(L, M);
                        if (N) L.outgoers().filter(function(e1) {
                            return e1.isNode() && a.has(e1);
                        }).forEach(I);
                        else if (null === N) {
                            Ue("Detected double maximal shift for node `" + L.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
                            break;
                        }
                    }
                }
                var O = 0;
                if (t.avoidOverlap) for(var z = 0; z < i.length; z++){
                    var V = i[z].layoutDimensions(t), q = V.w, j = V.h;
                    O = Math.max(O, q, j);
                }
                var W = {}, H = function getWeightedPercent(e1) {
                    if (W[e1.id()]) return W[e1.id()];
                    for(var t = ml(e1).depth, n = e1.neighborhood(), a = 0, o = 0, s = 0; s < n.length; s++){
                        var l = n[s];
                        if (!l.isEdge() && !l.isParent() && i.has(l)) {
                            var u = ml(l);
                            if (null != u) {
                                var c = u.index, d = u.depth;
                                if (null != c && null != d) {
                                    var h = x[d].length;
                                    d < t && (a += c / h, o++);
                                }
                            }
                        }
                    }
                    return a /= o = Math.max(1, o), 0 === o && (a = 0), W[e1.id()] = a, a;
                }, Y = function sortFn(e1, t) {
                    var n = H(e1) - H(t);
                    return 0 === n ? ge(e1.id(), t.id()) : n;
                };
                void 0 !== t.depthSort && (Y = t.depthSort);
                for(var G = x.length, U = 0; U < G; U++)x[U].sort(Y), P(U);
                for(var Z = [], J = 0; J < T.length; J++)Z.push(T[J]);
                Z.length && (x.unshift(Z), G = x.length, function assignDepths() {
                    for(var e1 = 0; e1 < G; e1++)P(e1);
                }());
                for(var ee = 0, te = 0; te < G; te++)ee = Math.max(x[te].length, ee);
                var ne = d.x1 + d.w / 2, re = d.y1 + d.h / 2, ae = i.reduce(function(e1, n) {
                    return a = n.boundingBox({
                        includeLabels: t.nodeDimensionsIncludeLabels
                    }), {
                        w: -1 === e1.w ? a.w : (e1.w + a.w) / 2,
                        h: -1 === e1.h ? a.h : (e1.h + a.h) / 2
                    };
                    var a;
                }, {
                    w: -1,
                    h: -1
                }), ie = Math.max(1 === G ? 0 : u ? (d.h - 2 * t.padding - ae.h) / (G - 1) : (d.h - 2 * t.padding - ae.h) / (G + 1), O), oe = x.reduce(function(e1, t) {
                    return Math.max(e1, t.length);
                }, 0);
                return a.nodes().layoutPositions(this, t, function getPosition(e1) {
                    var n = ml(e1), a = n.depth, i = n.index;
                    if (t.circle) {
                        var o = Math.min(d.w / 2 / G, d.h / 2 / G), s = (o = Math.max(o, O)) * a + o - (G > 0 && x[0].length <= 3 ? o / 2 : 0), l = 2 * Math.PI / x[a].length * i;
                        return 0 === a && 1 === x[0].length && (s = 1), {
                            x: ne + s * Math.cos(l),
                            y: re + s * Math.sin(l)
                        };
                    }
                    var c = x[a].length, h = Math.max(1 === c ? 0 : u ? (d.w - 2 * t.padding - ae.w) / ((t.grid ? oe : c) - 1) : (d.w - 2 * t.padding - ae.w) / ((t.grid ? oe : c) + 1), O);
                    return {
                        x: ne + (i + 1 - (c + 1) / 2) * h,
                        y: re + (a + 1 - (G + 1) / 2) * ie
                    };
                }), this;
            };
            var xl = {
                fit: !0,
                padding: 30,
                boundingBox: void 0,
                avoidOverlap: !0,
                nodeDimensionsIncludeLabels: !1,
                spacingFactor: void 0,
                radius: void 0,
                startAngle: 1.5 * Math.PI,
                sweep: void 0,
                clockwise: !0,
                sort: void 0,
                animate: !1,
                animationDuration: 500,
                animationEasing: void 0,
                animateFilter: function animateFilter(e1, t) {
                    return !0;
                },
                ready: void 0,
                stop: void 0,
                transform: function transform(e1, t) {
                    return t;
                }
            };
            function CircleLayout(e1) {
                this.options = ve({}, xl, e1);
            }
            CircleLayout.prototype.run = function() {
                var e1 = this.options, t = e1, n = e1.cy, a = t.eles, i = void 0 !== t.counterclockwise ? !t.counterclockwise : t.clockwise, o = a.nodes().not(":parent");
                t.sort && (o = o.sort(t.sort));
                for(var s, l = jt(t.boundingBox ? t.boundingBox : {
                    x1: 0,
                    y1: 0,
                    w: n.width(),
                    h: n.height()
                }), u = l.x1 + l.w / 2, c = l.y1 + l.h / 2, d = (void 0 === t.sweep ? 2 * Math.PI - 2 * Math.PI / o.length : t.sweep) / Math.max(1, o.length - 1), h = 0, p = 0; p < o.length; p++){
                    var g = o[p].layoutDimensions(t), v = g.w, y = g.h;
                    h = Math.max(h, v, y);
                }
                if (s = U(t.radius) ? t.radius : o.length <= 1 ? 0 : Math.min(l.h, l.w) / 2 - h, o.length > 1 && t.avoidOverlap) {
                    h *= 1.75;
                    var m = Math.cos(d) - Math.cos(0), b = Math.sin(d) - Math.sin(0), x = Math.sqrt(h * h / (m * m + b * b));
                    s = Math.max(x, s);
                }
                return a.nodes().layoutPositions(this, t, function getPos(e1, n) {
                    var a = t.startAngle + n * d * (i ? 1 : -1), o = s * Math.cos(a), l = s * Math.sin(a);
                    return {
                        x: u + o,
                        y: c + l
                    };
                }), this;
            };
            var wl, El = {
                fit: !0,
                padding: 30,
                startAngle: 1.5 * Math.PI,
                sweep: void 0,
                clockwise: !0,
                equidistant: !1,
                minNodeSpacing: 10,
                boundingBox: void 0,
                avoidOverlap: !0,
                nodeDimensionsIncludeLabels: !1,
                height: void 0,
                width: void 0,
                spacingFactor: void 0,
                concentric: function concentric(e1) {
                    return e1.degree();
                },
                levelWidth: function levelWidth(e1) {
                    return e1.maxDegree() / 4;
                },
                animate: !1,
                animationDuration: 500,
                animationEasing: void 0,
                animateFilter: function animateFilter(e1, t) {
                    return !0;
                },
                ready: void 0,
                stop: void 0,
                transform: function transform(e1, t) {
                    return t;
                }
            };
            function ConcentricLayout(e1) {
                this.options = ve({}, El, e1);
            }
            ConcentricLayout.prototype.run = function() {
                for(var e1 = this.options, t = e1, n = void 0 !== t.counterclockwise ? !t.counterclockwise : t.clockwise, a = e1.cy, i = t.eles, o = i.nodes().not(":parent"), s = jt(t.boundingBox ? t.boundingBox : {
                    x1: 0,
                    y1: 0,
                    w: a.width(),
                    h: a.height()
                }), l = s.x1 + s.w / 2, u = s.y1 + s.h / 2, c = [], d = 0, h = 0; h < o.length; h++){
                    var p, g = o[h];
                    p = t.concentric(g), c.push({
                        value: p,
                        node: g
                    }), g._private.scratch.concentric = p;
                }
                o.updateStyle();
                for(var v = 0; v < o.length; v++){
                    var y = o[v].layoutDimensions(t);
                    d = Math.max(d, y.w, y.h);
                }
                c.sort(function(e1, t) {
                    return t.value - e1.value;
                });
                for(var m = t.levelWidth(o), b = [
                    []
                ], x = b[0], w = 0; w < c.length; w++){
                    var E = c[w];
                    if (x.length > 0) Math.abs(x[0].value - E.value) >= m && (x = [], b.push(x));
                    x.push(E);
                }
                var T = d + t.minNodeSpacing;
                if (!t.avoidOverlap) {
                    var k = b.length > 0 && b[0].length > 1, S = (Math.min(s.w, s.h) / 2 - T) / (b.length + k ? 1 : 0);
                    T = Math.min(T, S);
                }
                for(var P = 0, _ = 0; _ < b.length; _++){
                    var D = b[_], M = void 0 === t.sweep ? 2 * Math.PI - 2 * Math.PI / D.length : t.sweep, I = D.dTheta = M / Math.max(1, D.length - 1);
                    if (D.length > 1 && t.avoidOverlap) {
                        var R = Math.cos(I) - Math.cos(0), L = Math.sin(I) - Math.sin(0), N = Math.sqrt(T * T / (R * R + L * L));
                        P = Math.max(N, P);
                    }
                    D.r = P, P += T;
                }
                if (t.equidistant) {
                    for(var O = 0, z = 0, V = 0; V < b.length; V++){
                        var q = b[V].r - z;
                        O = Math.max(O, q);
                    }
                    z = 0;
                    for(var j = 0; j < b.length; j++){
                        var W = b[j];
                        0 === j && (z = W.r), W.r = z, z += O;
                    }
                }
                for(var H = {}, X = 0; X < b.length; X++)for(var Y = b[X], K = Y.dTheta, G = Y.r, U = 0; U < Y.length; U++){
                    var Z = Y[U], Q = t.startAngle + (n ? 1 : -1) * K * U, J = {
                        x: l + G * Math.cos(Q),
                        y: u + G * Math.sin(Q)
                    };
                    H[Z.node.id()] = J;
                }
                return i.nodes().layoutPositions(this, t, function(e1) {
                    var t = e1.id();
                    return H[t];
                }), this;
            };
            var Cl = {
                ready: function ready() {},
                stop: function stop() {},
                animate: !0,
                animationEasing: void 0,
                animationDuration: void 0,
                animateFilter: function animateFilter(e1, t) {
                    return !0;
                },
                animationThreshold: 250,
                refresh: 20,
                fit: !0,
                padding: 30,
                boundingBox: void 0,
                nodeDimensionsIncludeLabels: !1,
                randomize: !1,
                componentSpacing: 40,
                nodeRepulsion: function nodeRepulsion(e1) {
                    return 2048;
                },
                nodeOverlap: 4,
                idealEdgeLength: function idealEdgeLength(e1) {
                    return 32;
                },
                edgeElasticity: function edgeElasticity(e1) {
                    return 32;
                },
                nestingFactor: 1.2,
                gravity: 1,
                numIter: 1e3,
                initialTemp: 1e3,
                coolingFactor: .99,
                minTemp: 1
            };
            function CoseLayout(e1) {
                this.options = ve({}, Cl, e1), this.options.layout = this;
                var t = this.options.eles.nodes(), n = this.options.eles.edges().filter(function(e1) {
                    var n = e1.source().data("id"), a = e1.target().data("id"), i = t.some(function(e1) {
                        return e1.data("id") === n;
                    }), o = t.some(function(e1) {
                        return e1.data("id") === a;
                    });
                    return !i || !o;
                });
                this.options.eles = this.options.eles.not(n);
            }
            CoseLayout.prototype.run = function() {
                var e1 = this.options, t = e1.cy, n = this;
                n.stopped = !1, !0 !== e1.animate && !1 !== e1.animate || n.emit({
                    type: "layoutstart",
                    layout: n
                }), wl = !0 === e1.debug;
                var a = Tl(t, n, e1);
                wl && undefined(a), e1.randomize && Pl(a);
                var i = Pe(), o = function refresh() {
                    Bl(a, t, e1), !0 === e1.fit && t.fit(e1.padding);
                }, s = function mainLoop(t) {
                    return !(n.stopped || t >= e1.numIter) && (Dl(a, e1), a.temperature = a.temperature * e1.coolingFactor, !(a.temperature < e1.minTemp));
                }, l = function done() {
                    if (!0 === e1.animate || !1 === e1.animate) o(), n.one("layoutstop", e1.stop), n.emit({
                        type: "layoutstop",
                        layout: n
                    });
                    else {
                        var t = e1.eles.nodes(), i = _l(a, e1, t);
                        t.layoutPositions(n, e1, i);
                    }
                }, u = 0, c = !0;
                if (!0 === e1.animate) {
                    var d = function frame() {
                        for(var t = 0; c && t < e1.refresh;)c = s(u), u++, t++;
                        c ? (Pe() - i >= e1.animationThreshold && o(), Se(d)) : (jl(a, e1), l());
                    };
                    d();
                } else {
                    for(; c;)c = s(u), u++;
                    jl(a, e1), l();
                }
                return this;
            }, CoseLayout.prototype.stop = function() {
                return this.stopped = !0, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
            }, CoseLayout.prototype.destroy = function() {
                return this.thread && this.thread.stop(), this;
            };
            var Tl = function createLayoutInfo(e1, t, n) {
                for(var a = n.eles.edges(), i = n.eles.nodes(), o = jt(n.boundingBox ? n.boundingBox : {
                    x1: 0,
                    y1: 0,
                    w: e1.width(),
                    h: e1.height()
                }), s = {
                    isCompound: e1.hasCompoundNodes(),
                    layoutNodes: [],
                    idToIndex: {},
                    nodeSize: i.size(),
                    graphSet: [],
                    indexToGraph: [],
                    layoutEdges: [],
                    edgeSize: a.size(),
                    temperature: n.initialTemp,
                    clientWidth: o.w,
                    clientHeight: o.h,
                    boundingBox: o
                }, l = n.eles.components(), u = {}, c = 0; c < l.length; c++)for(var d = l[c], h = 0; h < d.length; h++){
                    u[d[h].id()] = c;
                }
                for(c = 0; c < s.nodeSize; c++){
                    var p = (b = i[c]).layoutDimensions(n);
                    (z = {}).isLocked = b.locked(), z.id = b.data("id"), z.parentId = b.data("parent"), z.cmptId = u[b.id()], z.children = [], z.positionX = b.position("x"), z.positionY = b.position("y"), z.offsetX = 0, z.offsetY = 0, z.height = p.w, z.width = p.h, z.maxX = z.positionX + z.width / 2, z.minX = z.positionX - z.width / 2, z.maxY = z.positionY + z.height / 2, z.minY = z.positionY - z.height / 2, z.padLeft = parseFloat(b.style("padding")), z.padRight = parseFloat(b.style("padding")), z.padTop = parseFloat(b.style("padding")), z.padBottom = parseFloat(b.style("padding")), z.nodeRepulsion = Y(n.nodeRepulsion) ? n.nodeRepulsion(b) : n.nodeRepulsion, s.layoutNodes.push(z), s.idToIndex[z.id] = c;
                }
                var g = [], v = 0, y = -1, m = [];
                for(c = 0; c < s.nodeSize; c++){
                    var b, x = (b = s.layoutNodes[c]).parentId;
                    null != x ? s.layoutNodes[s.idToIndex[x]].children.push(b.id) : (g[++y] = b.id, m.push(b.id));
                }
                for(s.graphSet.push(m); v <= y;){
                    var w = g[v++], E = s.idToIndex[w], T = s.layoutNodes[E].children;
                    if (T.length > 0) {
                        s.graphSet.push(T);
                        for(c = 0; c < T.length; c++)g[++y] = T[c];
                    }
                }
                for(c = 0; c < s.graphSet.length; c++){
                    var k = s.graphSet[c];
                    for(h = 0; h < k.length; h++){
                        var S = s.idToIndex[k[h]];
                        s.indexToGraph[S] = c;
                    }
                }
                for(c = 0; c < s.edgeSize; c++){
                    var P = a[c], _ = {};
                    _.id = P.data("id"), _.sourceId = P.data("source"), _.targetId = P.data("target");
                    var D = Y(n.idealEdgeLength) ? n.idealEdgeLength(P) : n.idealEdgeLength, M = Y(n.edgeElasticity) ? n.edgeElasticity(P) : n.edgeElasticity, I = s.idToIndex[_.sourceId], R = s.idToIndex[_.targetId];
                    if (s.indexToGraph[I] != s.indexToGraph[R]) {
                        for(var L = kl(_.sourceId, _.targetId, s), N = s.graphSet[L], O = 0, z = s.layoutNodes[I]; -1 === N.indexOf(z.id);)z = s.layoutNodes[s.idToIndex[z.parentId]], O++;
                        for(z = s.layoutNodes[R]; -1 === N.indexOf(z.id);)z = s.layoutNodes[s.idToIndex[z.parentId]], O++;
                        D *= O * n.nestingFactor;
                    }
                    _.idealLength = D, _.elasticity = M, s.layoutEdges.push(_);
                }
                return s;
            }, kl = function findLCA(e1, t, n) {
                var a = Sl(e1, t, 0, n);
                return 2 > a.count ? 0 : a.graph;
            }, Sl = function findLCA_aux(e1, t, n, a) {
                var i = a.graphSet[n];
                if (-1 < i.indexOf(e1) && -1 < i.indexOf(t)) return {
                    count: 2,
                    graph: n
                };
                for(var o = 0, s = 0; s < i.length; s++){
                    var l = i[s], u = a.idToIndex[l], c = a.layoutNodes[u].children;
                    if (0 !== c.length) {
                        var d = a.indexToGraph[a.idToIndex[c[0]]], h = Sl(e1, t, d, a);
                        if (0 !== h.count) {
                            if (1 !== h.count) return h;
                            if (2 === ++o) break;
                        }
                    }
                }
                return {
                    count: o,
                    graph: n
                };
            }, Pl = function randomizePositions(e1, t) {
                for(var n = e1.clientWidth, a = e1.clientHeight, i = 0; i < e1.nodeSize; i++){
                    var o = e1.layoutNodes[i];
                    0 !== o.children.length || o.isLocked || (o.positionX = Math.random() * n, o.positionY = Math.random() * a);
                }
            }, _l = function getScaleInBoundsFn(e1, t, n) {
                var a = e1.boundingBox, i = {
                    x1: 1 / 0,
                    x2: -1 / 0,
                    y1: 1 / 0,
                    y2: -1 / 0
                };
                return t.boundingBox && (n.forEach(function(t) {
                    var n = e1.layoutNodes[e1.idToIndex[t.data("id")]];
                    i.x1 = Math.min(i.x1, n.positionX), i.x2 = Math.max(i.x2, n.positionX), i.y1 = Math.min(i.y1, n.positionY), i.y2 = Math.max(i.y2, n.positionY);
                }), i.w = i.x2 - i.x1, i.h = i.y2 - i.y1), function(n, o) {
                    var s = e1.layoutNodes[e1.idToIndex[n.data("id")]];
                    if (t.boundingBox) {
                        var l = (s.positionX - i.x1) / i.w, u = (s.positionY - i.y1) / i.h;
                        return {
                            x: a.x1 + l * a.w,
                            y: a.y1 + u * a.h
                        };
                    }
                    return {
                        x: s.positionX,
                        y: s.positionY
                    };
                };
            }, Bl = function refreshPositions(e1, t, n) {
                var a = n.layout, i = n.eles.nodes(), o = _l(e1, n, i);
                i.positions(o), !0 !== e1.ready && (e1.ready = !0, a.one("layoutready", n.ready), a.emit({
                    type: "layoutready",
                    layout: this
                }));
            }, Dl = function step(e1, t, n) {
                Al(e1, t), Nl(e1), Ol(e1, t), zl(e1), Fl(e1);
            }, Al = function calculateNodeForces(e1, t) {
                for(var n = 0; n < e1.graphSet.length; n++)for(var a = e1.graphSet[n], i = a.length, o = 0; o < i; o++)for(var s = e1.layoutNodes[e1.idToIndex[a[o]]], l = o + 1; l < i; l++){
                    var u = e1.layoutNodes[e1.idToIndex[a[l]]];
                    Il(s, u, e1, t);
                }
            }, Ml = function randomDistance(e1) {
                return 2 * e1 * Math.random() - 1;
            }, Il = function nodeRepulsion(e1, t, n, a) {
                if (e1.cmptId === t.cmptId || n.isCompound) {
                    var i = t.positionX - e1.positionX, o = t.positionY - e1.positionY;
                    0 === i && 0 === o && (i = Ml(1), o = Ml(1));
                    var s = Rl(e1, t, i, o);
                    if (s > 0) var l = (c = a.nodeOverlap * s) * i / (y = Math.sqrt(i * i + o * o)), u = c * o / y;
                    else {
                        var c, d = Ll(e1, i, o), h = Ll(t, -1 * i, -1 * o), p = h.x - d.x, g = h.y - d.y, v = p * p + g * g, y = Math.sqrt(v);
                        l = (c = (e1.nodeRepulsion + t.nodeRepulsion) / v) * p / y, u = c * g / y;
                    }
                    e1.isLocked || (e1.offsetX -= l, e1.offsetY -= u), t.isLocked || (t.offsetX += l, t.offsetY += u);
                }
            }, Rl = function nodesOverlap(e1, t, n, a) {
                if (n > 0) var i = e1.maxX - t.minX;
                else i = t.maxX - e1.minX;
                if (a > 0) var o = e1.maxY - t.minY;
                else o = t.maxY - e1.minY;
                return i >= 0 && o >= 0 ? Math.sqrt(i * i + o * o) : 0;
            }, Ll = function findClippingPoint(e1, t, n) {
                var a = e1.positionX, i = e1.positionY, o = e1.height || 1, s = e1.width || 1, l = n / t, u = o / s, c = {};
                return 0 === t && 0 < n || 0 === t && 0 > n ? (c.x = a, c.y = i + o / 2, c) : 0 < t && -1 * u <= l && l <= u ? (c.x = a + s / 2, c.y = i + s * n / 2 / t, c) : 0 > t && -1 * u <= l && l <= u ? (c.x = a - s / 2, c.y = i - s * n / 2 / t, c) : 0 < n && (l <= -1 * u || l >= u) ? (c.x = a + o * t / 2 / n, c.y = i + o / 2, c) : 0 > n && (l <= -1 * u || l >= u) ? (c.x = a - o * t / 2 / n, c.y = i - o / 2, c) : c;
            }, Nl = function calculateEdgeForces(e1, t) {
                for(var n = 0; n < e1.edgeSize; n++){
                    var a = e1.layoutEdges[n], i = e1.idToIndex[a.sourceId], o = e1.layoutNodes[i], s = e1.idToIndex[a.targetId], l = e1.layoutNodes[s], u = l.positionX - o.positionX, c = l.positionY - o.positionY;
                    if (0 !== u || 0 !== c) {
                        var d = Ll(o, u, c), h = Ll(l, -1 * u, -1 * c), p = h.x - d.x, g = h.y - d.y, v = Math.sqrt(p * p + g * g), y = Math.pow(a.idealLength - v, 2) / a.elasticity;
                        if (0 !== v) var m = y * p / v, b = y * g / v;
                        else m = 0, b = 0;
                        o.isLocked || (o.offsetX += m, o.offsetY += b), l.isLocked || (l.offsetX -= m, l.offsetY -= b);
                    }
                }
            }, Ol = function calculateGravityForces(e1, t) {
                if (0 !== t.gravity) for(var n = 0; n < e1.graphSet.length; n++){
                    var a = e1.graphSet[n], i = a.length;
                    if (0 === n) var o = e1.clientHeight / 2, s = e1.clientWidth / 2;
                    else {
                        var l = e1.layoutNodes[e1.idToIndex[a[0]]], u = e1.layoutNodes[e1.idToIndex[l.parentId]];
                        o = u.positionX, s = u.positionY;
                    }
                    for(var c = 0; c < i; c++){
                        var d = e1.layoutNodes[e1.idToIndex[a[c]]];
                        if (!d.isLocked) {
                            var h = o - d.positionX, p = s - d.positionY, g = Math.sqrt(h * h + p * p);
                            if (g > 1) {
                                var v = t.gravity * h / g, y = t.gravity * p / g;
                                d.offsetX += v, d.offsetY += y;
                            }
                        }
                    }
                }
            }, zl = function propagateForces(e1, t) {
                var n = [], a = 0, i = -1;
                for(n.push.apply(n, e1.graphSet[0]), i += e1.graphSet[0].length; a <= i;){
                    var o = n[a++], s = e1.idToIndex[o], l = e1.layoutNodes[s], u = l.children;
                    if (0 < u.length && !l.isLocked) {
                        for(var c = l.offsetX, d = l.offsetY, h = 0; h < u.length; h++){
                            var p = e1.layoutNodes[e1.idToIndex[u[h]]];
                            p.offsetX += c, p.offsetY += d, n[++i] = u[h];
                        }
                        l.offsetX = 0, l.offsetY = 0;
                    }
                }
            }, Fl = function updatePositions(e1, t) {
                for(var n = 0; n < e1.nodeSize; n++){
                    0 < (i = e1.layoutNodes[n]).children.length && (i.maxX = void 0, i.minX = void 0, i.maxY = void 0, i.minY = void 0);
                }
                for(n = 0; n < e1.nodeSize; n++){
                    if (!(0 < (i = e1.layoutNodes[n]).children.length || i.isLocked)) {
                        var a = Vl(i.offsetX, i.offsetY, e1.temperature);
                        i.positionX += a.x, i.positionY += a.y, i.offsetX = 0, i.offsetY = 0, i.minX = i.positionX - i.width, i.maxX = i.positionX + i.width, i.minY = i.positionY - i.height, i.maxY = i.positionY + i.height, ql(i, e1);
                    }
                }
                for(n = 0; n < e1.nodeSize; n++){
                    var i;
                    0 < (i = e1.layoutNodes[n]).children.length && !i.isLocked && (i.positionX = (i.maxX + i.minX) / 2, i.positionY = (i.maxY + i.minY) / 2, i.width = i.maxX - i.minX, i.height = i.maxY - i.minY);
                }
            }, Vl = function limitForce(e1, t, n) {
                var a = Math.sqrt(e1 * e1 + t * t);
                if (a > n) var i = {
                    x: n * e1 / a,
                    y: n * t / a
                };
                else i = {
                    x: e1,
                    y: t
                };
                return i;
            }, ql = function updateAncestryBoundaries(e1, t) {
                var n = e1.parentId;
                if (null != n) {
                    var a = t.layoutNodes[t.idToIndex[n]], i = !1;
                    return (null == a.maxX || e1.maxX + a.padRight > a.maxX) && (a.maxX = e1.maxX + a.padRight, i = !0), (null == a.minX || e1.minX - a.padLeft < a.minX) && (a.minX = e1.minX - a.padLeft, i = !0), (null == a.maxY || e1.maxY + a.padBottom > a.maxY) && (a.maxY = e1.maxY + a.padBottom, i = !0), (null == a.minY || e1.minY - a.padTop < a.minY) && (a.minY = e1.minY - a.padTop, i = !0), i ? ql(a, t) : void 0;
                }
            }, jl = function separateComponents(e1, t) {
                for(var n = e1.layoutNodes, a = [], i = 0; i < n.length; i++){
                    var o = n[i], s = o.cmptId;
                    (a[s] = a[s] || []).push(o);
                }
                var l = 0;
                for(i = 0; i < a.length; i++){
                    if (y = a[i]) {
                        y.x1 = 1 / 0, y.x2 = -1 / 0, y.y1 = 1 / 0, y.y2 = -1 / 0;
                        for(var u = 0; u < y.length; u++){
                            var c = y[u];
                            y.x1 = Math.min(y.x1, c.positionX - c.width / 2), y.x2 = Math.max(y.x2, c.positionX + c.width / 2), y.y1 = Math.min(y.y1, c.positionY - c.height / 2), y.y2 = Math.max(y.y2, c.positionY + c.height / 2);
                        }
                        y.w = y.x2 - y.x1, y.h = y.y2 - y.y1, l += y.w * y.h;
                    }
                }
                a.sort(function(e1, t) {
                    return t.w * t.h - e1.w * e1.h;
                });
                var d = 0, h = 0, p = 0, g = 0, v = Math.sqrt(l) * e1.clientWidth / e1.clientHeight;
                for(i = 0; i < a.length; i++){
                    var y;
                    if (y = a[i]) {
                        for(u = 0; u < y.length; u++){
                            (c = y[u]).isLocked || (c.positionX += d - y.x1, c.positionY += h - y.y1);
                        }
                        d += y.w + t.componentSpacing, p += y.w + t.componentSpacing, g = Math.max(g, y.h), p > v && (h += g + t.componentSpacing, d = 0, p = 0, g = 0);
                    }
                }
            }, Wl = {
                fit: !0,
                padding: 30,
                boundingBox: void 0,
                avoidOverlap: !0,
                avoidOverlapPadding: 10,
                nodeDimensionsIncludeLabels: !1,
                spacingFactor: void 0,
                condense: !1,
                rows: void 0,
                cols: void 0,
                position: function position(e1) {},
                sort: void 0,
                animate: !1,
                animationDuration: 500,
                animationEasing: void 0,
                animateFilter: function animateFilter(e1, t) {
                    return !0;
                },
                ready: void 0,
                stop: void 0,
                transform: function transform(e1, t) {
                    return t;
                }
            };
            function GridLayout(e1) {
                this.options = ve({}, Wl, e1);
            }
            GridLayout.prototype.run = function() {
                var e1 = this.options, t = e1, n = e1.cy, a = t.eles, i = a.nodes().not(":parent");
                t.sort && (i = i.sort(t.sort));
                var o = jt(t.boundingBox ? t.boundingBox : {
                    x1: 0,
                    y1: 0,
                    w: n.width(),
                    h: n.height()
                });
                if (0 === o.h || 0 === o.w) a.nodes().layoutPositions(this, t, function(e1) {
                    return {
                        x: o.x1,
                        y: o.y1
                    };
                });
                else {
                    var s = i.size(), l = Math.sqrt(s * o.h / o.w), u = Math.round(l), c = Math.round(o.w / o.h * l), d = function small(e1) {
                        if (null == e1) return Math.min(u, c);
                        Math.min(u, c) == u ? u = e1 : c = e1;
                    }, h = function large(e1) {
                        if (null == e1) return Math.max(u, c);
                        Math.max(u, c) == u ? u = e1 : c = e1;
                    }, p = t.rows, g = null != t.cols ? t.cols : t.columns;
                    if (null != p && null != g) u = p, c = g;
                    else if (null != p && null == g) u = p, c = Math.ceil(s / u);
                    else if (null == p && null != g) c = g, u = Math.ceil(s / c);
                    else if (c * u > s) {
                        var v = d(), y = h();
                        (v - 1) * y >= s ? d(v - 1) : (y - 1) * v >= s && h(y - 1);
                    } else for(; c * u < s;){
                        var m = d(), b = h();
                        (b + 1) * m >= s ? h(b + 1) : d(m + 1);
                    }
                    var x = o.w / c, w = o.h / u;
                    if (t.condense && (x = 0, w = 0), t.avoidOverlap) for(var E = 0; E < i.length; E++){
                        var T = i[E], k = T._private.position;
                        null != k.x && null != k.y || (k.x = 0, k.y = 0);
                        var S = T.layoutDimensions(t), P = t.avoidOverlapPadding, _ = S.w + P, D = S.h + P;
                        x = Math.max(x, _), w = Math.max(w, D);
                    }
                    for(var M = {}, I = function used(e1, t) {
                        return !!M["c-" + e1 + "-" + t];
                    }, R = function use(e1, t) {
                        M["c-" + e1 + "-" + t] = !0;
                    }, L = 0, N = 0, O = function moveToNextCell() {
                        ++N >= c && (N = 0, L++);
                    }, z = {}, V = 0; V < i.length; V++){
                        var q = i[V], j = t.position(q);
                        if (j && (void 0 !== j.row || void 0 !== j.col)) {
                            var W = {
                                row: j.row,
                                col: j.col
                            };
                            if (void 0 === W.col) for(W.col = 0; I(W.row, W.col);)W.col++;
                            else if (void 0 === W.row) for(W.row = 0; I(W.row, W.col);)W.row++;
                            z[q.id()] = W, R(W.row, W.col);
                        }
                    }
                    i.layoutPositions(this, t, function getPos(e1, t) {
                        var n, a;
                        if (e1.locked() || e1.isParent()) return !1;
                        var i = z[e1.id()];
                        if (i) n = i.col * x + x / 2 + o.x1, a = i.row * w + w / 2 + o.y1;
                        else {
                            for(; I(L, N);)O();
                            n = N * x + x / 2 + o.x1, a = L * w + w / 2 + o.y1, R(L, N), O();
                        }
                        return {
                            x: n,
                            y: a
                        };
                    });
                }
                return this;
            };
            var Hl = {
                ready: function ready() {},
                stop: function stop() {}
            };
            function NullLayout(e1) {
                this.options = ve({}, Hl, e1);
            }
            NullLayout.prototype.run = function() {
                var e1 = this.options, t = e1.eles, n = this;
                return e1.cy, n.emit("layoutstart"), t.nodes().positions(function() {
                    return {
                        x: 0,
                        y: 0
                    };
                }), n.one("layoutready", e1.ready), n.emit("layoutready"), n.one("layoutstop", e1.stop), n.emit("layoutstop"), this;
            }, NullLayout.prototype.stop = function() {
                return this;
            };
            var Xl = {
                positions: void 0,
                zoom: void 0,
                pan: void 0,
                fit: !0,
                padding: 30,
                spacingFactor: void 0,
                animate: !1,
                animationDuration: 500,
                animationEasing: void 0,
                animateFilter: function animateFilter(e1, t) {
                    return !0;
                },
                ready: void 0,
                stop: void 0,
                transform: function transform(e1, t) {
                    return t;
                }
            };
            function PresetLayout(e1) {
                this.options = ve({}, Xl, e1);
            }
            PresetLayout.prototype.run = function() {
                var e1 = this.options, t = e1.eles.nodes(), n = Y(e1.positions);
                return t.layoutPositions(this, e1, function(t, a) {
                    var i = function getPosition(t) {
                        if (null == e1.positions) return function copyPosition(e1) {
                            return {
                                x: e1.x,
                                y: e1.y
                            };
                        }(t.position());
                        if (n) return e1.positions(t);
                        var a = e1.positions[t._private.data.id];
                        return null == a ? null : a;
                    }(t);
                    return !t.locked() && null != i && i;
                }), this;
            };
            var Yl = {
                fit: !0,
                padding: 30,
                boundingBox: void 0,
                animate: !1,
                animationDuration: 500,
                animationEasing: void 0,
                animateFilter: function animateFilter(e1, t) {
                    return !0;
                },
                ready: void 0,
                stop: void 0,
                transform: function transform(e1, t) {
                    return t;
                }
            };
            function RandomLayout(e1) {
                this.options = ve({}, Yl, e1);
            }
            RandomLayout.prototype.run = function() {
                var e1 = this.options, t = e1.cy, n = e1.eles, a = jt(e1.boundingBox ? e1.boundingBox : {
                    x1: 0,
                    y1: 0,
                    w: t.width(),
                    h: t.height()
                });
                return n.nodes().layoutPositions(this, e1, function getPos(e1, t) {
                    return {
                        x: a.x1 + Math.round(Math.random() * a.w),
                        y: a.y1 + Math.round(Math.random() * a.h)
                    };
                }), this;
            };
            var Kl = [
                {
                    name: "breadthfirst",
                    impl: BreadthFirstLayout
                },
                {
                    name: "circle",
                    impl: CircleLayout
                },
                {
                    name: "concentric",
                    impl: ConcentricLayout
                },
                {
                    name: "cose",
                    impl: CoseLayout
                },
                {
                    name: "grid",
                    impl: GridLayout
                },
                {
                    name: "null",
                    impl: NullLayout
                },
                {
                    name: "preset",
                    impl: PresetLayout
                },
                {
                    name: "random",
                    impl: RandomLayout
                }
            ];
            function NullRenderer(e1) {
                this.options = e1, this.notifications = 0;
            }
            var Gl = function noop() {}, Ul = function throwImgErr() {
                throw new Error("A headless instance can not render images");
            };
            NullRenderer.prototype = {
                recalculateRenderedStyle: Gl,
                notify: function notify() {
                    this.notifications++;
                },
                init: Gl,
                isHeadless: function isHeadless() {
                    return !0;
                },
                png: Ul,
                jpg: Ul
            };
            var Zl = {
                arrowShapeWidth: .3,
                registerArrowShapes: function() {
                    var e1 = this.arrowShapes = {}, t = this, n = function bbCollide(e1, t, n, a, i, o, s) {
                        var l = i.x - n / 2 - s, u = i.x + n / 2 + s, c = i.y - n / 2 - s, d = i.y + n / 2 + s;
                        return l <= e1 && e1 <= u && c <= t && t <= d;
                    }, a = function transform(e1, t, n, a, i) {
                        var o = e1 * Math.cos(a) - t * Math.sin(a), s = (e1 * Math.sin(a) + t * Math.cos(a)) * n;
                        return {
                            x: o * n + i.x,
                            y: s + i.y
                        };
                    }, i = function transformPoints(e1, t, n, i) {
                        for(var o = [], s = 0; s < e1.length; s += 2){
                            var l = e1[s], u = e1[s + 1];
                            o.push(a(l, u, t, n, i));
                        }
                        return o;
                    }, o = function pointsToArr(e1) {
                        for(var t = [], n = 0; n < e1.length; n++){
                            var a = e1[n];
                            t.push(a.x, a.y);
                        }
                        return t;
                    }, s = function standardGap(e1) {
                        return e1.pstyle("width").pfValue * e1.pstyle("arrow-scale").pfValue * 2;
                    }, l = function defineArrowShape(a, l) {
                        X(l) && (l = e1[l]), e1[a] = ve({
                            name: a,
                            points: [
                                -.15,
                                -.3,
                                .15,
                                -.3,
                                .15,
                                .3,
                                -.15,
                                .3
                            ],
                            collide: function collide(e1, t, n, a, s, l) {
                                var u = o(i(this.points, n + 2 * l, a, s));
                                return rn(e1, t, u);
                            },
                            roughCollide: n,
                            draw: function draw(e1, n, a, o) {
                                var s = i(this.points, n, a, o);
                                t.arrowShapeImpl("polygon")(e1, s);
                            },
                            spacing: function spacing(e1) {
                                return 0;
                            },
                            gap: s
                        }, l);
                    };
                    l("none", {
                        collide: He,
                        roughCollide: He,
                        draw: Ye,
                        spacing: Xe,
                        gap: Xe
                    }), l("triangle", {
                        points: [
                            -.15,
                            -.3,
                            0,
                            0,
                            .15,
                            -.3
                        ]
                    }), l("arrow", "triangle"), l("triangle-backcurve", {
                        points: e1.triangle.points,
                        controlPoint: [
                            0,
                            -.15
                        ],
                        roughCollide: n,
                        draw: function draw(e1, n, o, s, l) {
                            var u = i(this.points, n, o, s), c = this.controlPoint, d = a(c[0], c[1], n, o, s);
                            t.arrowShapeImpl(this.name)(e1, u, d);
                        },
                        gap: function gap(e1) {
                            return .8 * s(e1);
                        }
                    }), l("triangle-tee", {
                        points: [
                            0,
                            0,
                            .15,
                            -.3,
                            -.15,
                            -.3,
                            0,
                            0
                        ],
                        pointsTee: [
                            -.15,
                            -.4,
                            -.15,
                            -.5,
                            .15,
                            -.5,
                            .15,
                            -.4
                        ],
                        collide: function collide(e1, t, n, a, s, l, u) {
                            var c = o(i(this.points, n + 2 * u, a, s)), d = o(i(this.pointsTee, n + 2 * u, a, s));
                            return rn(e1, t, c) || rn(e1, t, d);
                        },
                        draw: function draw(e1, n, a, o, s) {
                            var l = i(this.points, n, a, o), u = i(this.pointsTee, n, a, o);
                            t.arrowShapeImpl(this.name)(e1, l, u);
                        }
                    }), l("circle-triangle", {
                        radius: .15,
                        pointsTr: [
                            0,
                            -.15,
                            .15,
                            -.45,
                            -.15,
                            -.45,
                            0,
                            -.15
                        ],
                        collide: function collide(e1, t, n, a, s, l, u) {
                            var c = s, d = Math.pow(c.x - e1, 2) + Math.pow(c.y - t, 2) <= Math.pow((n + 2 * u) * this.radius, 2), h = o(i(this.points, n + 2 * u, a, s));
                            return rn(e1, t, h) || d;
                        },
                        draw: function draw(e1, n, a, o, s) {
                            var l = i(this.pointsTr, n, a, o);
                            t.arrowShapeImpl(this.name)(e1, l, o.x, o.y, this.radius * n);
                        },
                        spacing: function spacing(e1) {
                            return t.getArrowWidth(e1.pstyle("width").pfValue, e1.pstyle("arrow-scale").value) * this.radius;
                        }
                    }), l("triangle-cross", {
                        points: [
                            0,
                            0,
                            .15,
                            -.3,
                            -.15,
                            -.3,
                            0,
                            0
                        ],
                        baseCrossLinePts: [
                            -.15,
                            -.4,
                            -.15,
                            -.4,
                            .15,
                            -.4,
                            .15,
                            -.4
                        ],
                        crossLinePts: function crossLinePts(e1, t) {
                            var n = this.baseCrossLinePts.slice(), a = t / e1;
                            return n[3] = n[3] - a, n[5] = n[5] - a, n;
                        },
                        collide: function collide(e1, t, n, a, s, l, u) {
                            var c = o(i(this.points, n + 2 * u, a, s)), d = o(i(this.crossLinePts(n, l), n + 2 * u, a, s));
                            return rn(e1, t, c) || rn(e1, t, d);
                        },
                        draw: function draw(e1, n, a, o, s) {
                            var l = i(this.points, n, a, o), u = i(this.crossLinePts(n, s), n, a, o);
                            t.arrowShapeImpl(this.name)(e1, l, u);
                        }
                    }), l("vee", {
                        points: [
                            -.15,
                            -.3,
                            0,
                            0,
                            .15,
                            -.3,
                            0,
                            -.15
                        ],
                        gap: function gap(e1) {
                            return .525 * s(e1);
                        }
                    }), l("circle", {
                        radius: .15,
                        collide: function collide(e1, t, n, a, i, o, s) {
                            var l = i;
                            return Math.pow(l.x - e1, 2) + Math.pow(l.y - t, 2) <= Math.pow((n + 2 * s) * this.radius, 2);
                        },
                        draw: function draw(e1, n, a, i, o) {
                            t.arrowShapeImpl(this.name)(e1, i.x, i.y, this.radius * n);
                        },
                        spacing: function spacing(e1) {
                            return t.getArrowWidth(e1.pstyle("width").pfValue, e1.pstyle("arrow-scale").value) * this.radius;
                        }
                    }), l("tee", {
                        points: [
                            -.15,
                            0,
                            -.15,
                            -.1,
                            .15,
                            -.1,
                            .15,
                            0
                        ],
                        spacing: function spacing(e1) {
                            return 1;
                        },
                        gap: function gap(e1) {
                            return 1;
                        }
                    }), l("square", {
                        points: [
                            -.15,
                            0,
                            .15,
                            0,
                            .15,
                            -.3,
                            -.15,
                            -.3
                        ]
                    }), l("diamond", {
                        points: [
                            -.15,
                            -.15,
                            0,
                            -.3,
                            .15,
                            -.15,
                            0,
                            0
                        ],
                        gap: function gap(e1) {
                            return e1.pstyle("width").pfValue * e1.pstyle("arrow-scale").value;
                        }
                    }), l("chevron", {
                        points: [
                            0,
                            0,
                            -.15,
                            -.15,
                            -.1,
                            -.2,
                            0,
                            -.1,
                            .1,
                            -.2,
                            .15,
                            -.15
                        ],
                        gap: function gap(e1) {
                            return .95 * e1.pstyle("width").pfValue * e1.pstyle("arrow-scale").value;
                        }
                    });
                }
            }, $l = {
                projectIntoViewport: function(e1, t) {
                    var n = this.cy, a = this.findContainerClientCoords(), i = a[0], o = a[1], s = a[4], l = n.pan(), u = n.zoom();
                    return [
                        ((e1 - i) / s - l.x) / u,
                        ((t - o) / s - l.y) / u
                    ];
                },
                findContainerClientCoords: function() {
                    if (this.containerBB) return this.containerBB;
                    var e1 = this.container, t = e1.getBoundingClientRect(), n = this.cy.window().getComputedStyle(e1), a = function styleValue(e1) {
                        return parseFloat(n.getPropertyValue(e1));
                    }, i = a("padding-left"), o = a("padding-right"), s = a("padding-top"), l = a("padding-bottom"), u = a("border-left-width"), c = a("border-right-width"), d = a("border-top-width"), h = (a("border-bottom-width"), e1.clientWidth), p = e1.clientHeight, g = i + o, v = s + l, y = u + c, m = t.width / (h + y), b = h - g, x = p - v, w = t.left + i + u, E = t.top + s + d;
                    return this.containerBB = [
                        w,
                        E,
                        b,
                        x,
                        m
                    ];
                },
                invalidateContainerClientCoordsCache: function() {
                    this.containerBB = null;
                },
                findNearestElement: function(e1, t, n, a) {
                    return this.findNearestElements(e1, t, n, a)[0];
                },
                findNearestElements: function(e1, t, n, a) {
                    var i, o, s = this, l = this, u = l.getCachedZSortedEles(), c = [], d = l.cy.zoom(), h = l.cy.hasCompoundNodes(), p = (a ? 24 : 8) / d, g = (a ? 8 : 2) / d, v = (a ? 8 : 2) / d, y = 1 / 0;
                    function addEle(e1, t) {
                        if (e1.isNode()) {
                            if (o) return;
                            o = e1, c.push(e1);
                        }
                        if (e1.isEdge() && (null == t || t < y)) if (i) {
                            if (i.pstyle("z-compound-depth").value === e1.pstyle("z-compound-depth").value && i.pstyle("z-compound-depth").value === e1.pstyle("z-compound-depth").value) {
                                for(var n = 0; n < c.length; n++)if (c[n].isEdge()) {
                                    c[n] = e1, i = e1, y = null != t ? t : y;
                                    break;
                                }
                            }
                        } else c.push(e1), i = e1, y = null != t ? t : y;
                    }
                    function checkNode(n) {
                        var a = n.outerWidth() + 2 * g, i = n.outerHeight() + 2 * g, o = a / 2, u = i / 2, c = n.position(), d = "auto" === n.pstyle("corner-radius").value ? "auto" : n.pstyle("corner-radius").pfValue, h = n._private.rscratch;
                        if (c.x - o <= e1 && e1 <= c.x + o && c.y - u <= t && t <= c.y + u && l.nodeShapes[s.getNodeShape(n)].checkPoint(e1, t, 0, a, i, c.x, c.y, d, h)) return addEle(n, 0), !0;
                    }
                    function checkEdge(n) {
                        var a, i = n._private, o = i.rscratch, u = n.pstyle("width").pfValue, d = n.pstyle("arrow-scale").value, g = u / 2 + p, v = g * g, y = 2 * g, m = i.source, b = i.target;
                        if ("segments" === o.edgeType || "straight" === o.edgeType || "haystack" === o.edgeType) {
                            for(var x = o.allpts, w = 0; w + 3 < x.length; w += 2)if (Jt(e1, t, x[w], x[w + 1], x[w + 2], x[w + 3], y) && v > (a = nn(e1, t, x[w], x[w + 1], x[w + 2], x[w + 3]))) return addEle(n, a), !0;
                        } else if ("bezier" === o.edgeType || "multibezier" === o.edgeType || "self" === o.edgeType || "compound" === o.edgeType) {
                            for(x = o.allpts, w = 0; w + 5 < o.allpts.length; w += 4)if (en(e1, t, x[w], x[w + 1], x[w + 2], x[w + 3], x[w + 4], x[w + 5], y) && v > (a = tn(e1, t, x[w], x[w + 1], x[w + 2], x[w + 3], x[w + 4], x[w + 5]))) return addEle(n, a), !0;
                        }
                        m = m || i.source, b = b || i.target;
                        var E = s.getArrowWidth(u, d), T = [
                            {
                                name: "source",
                                x: o.arrowStartX,
                                y: o.arrowStartY,
                                angle: o.srcArrowAngle
                            },
                            {
                                name: "target",
                                x: o.arrowEndX,
                                y: o.arrowEndY,
                                angle: o.tgtArrowAngle
                            },
                            {
                                name: "mid-source",
                                x: o.midX,
                                y: o.midY,
                                angle: o.midsrcArrowAngle
                            },
                            {
                                name: "mid-target",
                                x: o.midX,
                                y: o.midY,
                                angle: o.midtgtArrowAngle
                            }
                        ];
                        for(w = 0; w < T.length; w++){
                            var k = T[w], S = l.arrowShapes[n.pstyle(k.name + "-arrow-shape").value], P = n.pstyle("width").pfValue;
                            if (S.roughCollide(e1, t, E, k.angle, {
                                x: k.x,
                                y: k.y
                            }, P, p) && S.collide(e1, t, E, k.angle, {
                                x: k.x,
                                y: k.y
                            }, P, p)) return addEle(n), !0;
                        }
                        h && c.length > 0 && (checkNode(m), checkNode(b));
                    }
                    function preprop(e1, t, n) {
                        return rt(e1, t, n);
                    }
                    function checkLabel(n, a) {
                        var i, o = n._private, s = v;
                        i = a ? a + "-" : "", n.boundingBox();
                        var l = o.labelBounds[a || "main"], u = n.pstyle(i + "label").value;
                        if ("yes" === n.pstyle("text-events").strValue && u) {
                            var c = preprop(o.rscratch, "labelX", a), d = preprop(o.rscratch, "labelY", a), h = preprop(o.rscratch, "labelAngle", a), p = n.pstyle(i + "text-margin-x").pfValue, g = n.pstyle(i + "text-margin-y").pfValue, y = l.x1 - s - p, m = l.x2 + s - p, b = l.y1 - s - g, x = l.y2 + s - g;
                            if (h) {
                                var w = Math.cos(h), E = Math.sin(h), T = function rotate(e1, t) {
                                    return {
                                        x: (e1 -= c) * w - (t -= d) * E + c,
                                        y: e1 * E + t * w + d
                                    };
                                }, k = T(y, b), S = T(y, x), P = T(m, b), _ = T(m, x), D = [
                                    k.x + p,
                                    k.y + g,
                                    P.x + p,
                                    P.y + g,
                                    _.x + p,
                                    _.y + g,
                                    S.x + p,
                                    S.y + g
                                ];
                                if (rn(e1, t, D)) return addEle(n), !0;
                            } else if (Ut(l, e1, t)) return addEle(n), !0;
                        }
                    }
                    n && (u = u.interactive);
                    for(var m = u.length - 1; m >= 0; m--){
                        var b = u[m];
                        b.isNode() ? checkNode(b) || checkLabel(b) : checkEdge(b) || checkLabel(b) || checkLabel(b, "source") || checkLabel(b, "target");
                    }
                    return c;
                },
                getAllInBox: function(e1, t, n, a) {
                    var i = this.getCachedZSortedEles().interactive, o = 2 / this.cy.zoom(), s = [], l = Math.min(e1, n), u = Math.max(e1, n), c = Math.min(t, a), d = Math.max(t, a), h = jt({
                        x1: e1 = l,
                        y1: t = c,
                        x2: n = u,
                        y2: a = d
                    });
                    function preprop(e1, t, n) {
                        return rt(e1, t, n);
                    }
                    function getRotatedLabelBox(e1, t) {
                        var n = e1._private, a = o;
                        e1.boundingBox();
                        var i = n.labelBounds.main, s = preprop(n.rscratch, "labelX", t), l = preprop(n.rscratch, "labelY", t), u = preprop(n.rscratch, "labelAngle", t), c = e1.pstyle("text-margin-x").pfValue, d = e1.pstyle("text-margin-y").pfValue, h = i.x1 - a - c, p = i.x2 + a - c, g = i.y1 - a - d, v = i.y2 + a - d;
                        if (u) {
                            var y = Math.cos(u), m = Math.sin(u), b = function rotate(e1, t) {
                                return {
                                    x: (e1 -= s) * y - (t -= l) * m + s,
                                    y: e1 * m + t * y + l
                                };
                            };
                            return [
                                b(h, g),
                                b(p, g),
                                b(p, v),
                                b(h, v)
                            ];
                        }
                        return [
                            {
                                x: h,
                                y: g
                            },
                            {
                                x: p,
                                y: g
                            },
                            {
                                x: p,
                                y: v
                            },
                            {
                                x: h,
                                y: v
                            }
                        ];
                    }
                    for(var p = 0; p < i.length; p++){
                        var g = i[p];
                        if (g.isNode()) {
                            var v = g, y = "yes" === v.pstyle("text-events").strValue, m = "yes" === v.pstyle("box-select-labels").strValue, b = v.boundingBox({
                                includeNodes: !0,
                                includeEdges: !1,
                                includeLabels: m && y
                            });
                            if (Gt(h, b)) satPolygonIntersection(getRotatedLabelBox(v), [
                                {
                                    x: h.x1,
                                    y: h.y1
                                },
                                {
                                    x: h.x2,
                                    y: h.y1
                                },
                                {
                                    x: h.x2,
                                    y: h.y2
                                },
                                {
                                    x: h.x1,
                                    y: h.y2
                                }
                            ]) && s.push(v);
                        } else {
                            var x = g, w = x._private, E = w.rscratch;
                            if (null != E.startX && null != E.startY && !Ut(h, E.startX, E.startY)) continue;
                            if (null != E.endX && null != E.endY && !Ut(h, E.endX, E.endY)) continue;
                            if ("bezier" === E.edgeType || "multibezier" === E.edgeType || "self" === E.edgeType || "compound" === E.edgeType || "segments" === E.edgeType || "haystack" === E.edgeType) {
                                for(var T = w.rstyle.bezierPts || w.rstyle.linePts || w.rstyle.haystackPts, k = !0, S = 0; S < T.length; S++)if (!Zt(h, T[S])) {
                                    k = !1;
                                    break;
                                }
                                k && s.push(x);
                            } else "haystack" !== E.edgeType && "straight" !== E.edgeType || s.push(x);
                        }
                    }
                    return s;
                }
            }, Ql = {
                calculateArrowAngles: function(e1) {
                    var t, n, a, i, o, s, l = e1._private.rscratch, u = "haystack" === l.edgeType, c = "bezier" === l.edgeType, d = "multibezier" === l.edgeType, h = "segments" === l.edgeType, p = "compound" === l.edgeType, g = "self" === l.edgeType;
                    if (u ? (a = l.haystackPts[0], i = l.haystackPts[1], o = l.haystackPts[2], s = l.haystackPts[3]) : (a = l.arrowStartX, i = l.arrowStartY, o = l.arrowEndX, s = l.arrowEndY), y = l.midX, m = l.midY, h) t = a - l.segpts[0], n = i - l.segpts[1];
                    else if (d || p || g || c) {
                        var v = l.allpts;
                        t = a - Ft(v[0], v[2], v[4], .1), n = i - Ft(v[1], v[3], v[5], .1);
                    } else t = a - y, n = i - m;
                    l.srcArrowAngle = It(t, n);
                    var y = l.midX, m = l.midY;
                    if (u && (y = (a + o) / 2, m = (i + s) / 2), t = o - a, n = s - i, h) if ((v = l.allpts).length / 2 % 2 == 0) {
                        var b = (_ = v.length / 2) - 2;
                        t = v[_] - v[b], n = v[_ + 1] - v[b + 1];
                    } else if (l.isRound) t = l.midVector[1], n = -l.midVector[0];
                    else {
                        b = (_ = v.length / 2 - 1) - 2;
                        t = v[_] - v[b], n = v[_ + 1] - v[b + 1];
                    }
                    else if (d || p || g) {
                        var x, w, E, T, v = l.allpts;
                        if (l.ctrlpts.length / 2 % 2 == 0) {
                            var k = (S = (P = v.length / 2 - 1) + 2) + 2;
                            x = Ft(v[P], v[S], v[k], 0), w = Ft(v[P + 1], v[S + 1], v[k + 1], 0), E = Ft(v[P], v[S], v[k], 1e-4), T = Ft(v[P + 1], v[S + 1], v[k + 1], 1e-4);
                        } else {
                            var S, P;
                            k = (S = v.length / 2 - 1) + 2;
                            x = Ft(v[P = S - 2], v[S], v[k], .4999), w = Ft(v[P + 1], v[S + 1], v[k + 1], .4999), E = Ft(v[P], v[S], v[k], .5), T = Ft(v[P + 1], v[S + 1], v[k + 1], .5);
                        }
                        t = E - x, n = T - w;
                    }
                    if (l.midtgtArrowAngle = It(t, n), l.midDispX = t, l.midDispY = n, t *= -1, n *= -1, h) {
                        if ((v = l.allpts).length / 2 % 2 == 0) ;
                        else if (!l.isRound) {
                            var _, D = (_ = v.length / 2 - 1) + 2;
                            t = -(v[D] - v[_]), n = -(v[D + 1] - v[_ + 1]);
                        }
                    }
                    if (l.midsrcArrowAngle = It(t, n), h) t = o - l.segpts[l.segpts.length - 2], n = s - l.segpts[l.segpts.length - 1];
                    else if (d || p || g || c) {
                        var M = (v = l.allpts).length;
                        t = o - Ft(v[M - 6], v[M - 4], v[M - 2], .9), n = s - Ft(v[M - 5], v[M - 3], v[M - 1], .9);
                    } else t = o - y, n = s - m;
                    l.tgtArrowAngle = It(t, n);
                }
            };
            Ql.getArrowWidth = Ql.getArrowHeight = function(e1, t) {
                var n = this.arrowWidthCache = this.arrowWidthCache || {}, a = n[e1 + ", " + t];
                return a || (a = Math.max(Math.pow(13.37 * e1, .9), 29) * t, n[e1 + ", " + t] = a, a);
            };
            var Jl, eu, tu, nu, ru, au, iu, ou, su, lu, uu, cu, du, hu, pu, fu, gu, vu = {}, yu = {}, mu = function asVec(e1, t, n) {
                n.x = t.x - e1.x, n.y = t.y - e1.y, n.len = Math.sqrt(n.x * n.x + n.y * n.y), n.nx = n.x / n.len, n.ny = n.y / n.len, n.ang = Math.atan2(n.ny, n.nx);
            }, bu = function calcCornerArc(e1, t, n, a, i) {
                if (e1 !== gu ? mu(t, e1, vu) : function invertVec(e1, t) {
                    t.x = -1 * e1.x, t.y = -1 * e1.y, t.nx = -1 * e1.nx, t.ny = -1 * e1.ny, t.ang = e1.ang > 0 ? -(Math.PI - e1.ang) : Math.PI + e1.ang;
                }(yu, vu), mu(t, n, yu), tu = vu.nx * yu.ny - vu.ny * yu.nx, nu = vu.nx * yu.nx - vu.ny * -yu.ny, iu = Math.asin(Math.max(-1, Math.min(1, tu))), Math.abs(iu) < 1e-6) return Jl = t.x, eu = t.y, void (su = uu = 0);
                ru = 1, au = !1, nu < 0 ? iu < 0 ? iu = Math.PI + iu : (iu = Math.PI - iu, ru = -1, au = !0) : iu > 0 && (ru = -1, au = !0), uu = void 0 !== t.radius ? t.radius : a, ou = iu / 2, cu = Math.min(vu.len / 2, yu.len / 2), i ? (lu = Math.abs(Math.cos(ou) * uu / Math.sin(ou))) > cu ? (lu = cu, su = Math.abs(lu * Math.sin(ou) / Math.cos(ou))) : su = uu : (lu = Math.min(cu, uu), su = Math.abs(lu * Math.sin(ou) / Math.cos(ou))), pu = t.x + yu.nx * lu, fu = t.y + yu.ny * lu, Jl = pu - yu.ny * su * ru, eu = fu + yu.nx * su * ru, du = t.x + vu.nx * lu, hu = t.y + vu.ny * lu, gu = t;
            };
            function drawPreparedRoundCorner(e1, t) {
                0 === t.radius ? e1.lineTo(t.cx, t.cy) : e1.arc(t.cx, t.cy, t.radius, t.startAngle, t.endAngle, t.counterClockwise);
            }
            function getRoundCorner(e1, t, n, a) {
                var i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                return 0 === a || 0 === t.radius ? {
                    cx: t.x,
                    cy: t.y,
                    radius: 0,
                    startX: t.x,
                    startY: t.y,
                    stopX: t.x,
                    stopY: t.y,
                    startAngle: void 0,
                    endAngle: void 0,
                    counterClockwise: void 0
                } : (bu(e1, t, n, a, i), {
                    cx: Jl,
                    cy: eu,
                    radius: su,
                    startX: du,
                    startY: hu,
                    stopX: pu,
                    stopY: fu,
                    startAngle: vu.ang + Math.PI / 2 * ru,
                    endAngle: yu.ang - Math.PI / 2 * ru,
                    counterClockwise: au
                });
            }
            var xu = .01, wu = Math.sqrt(.02), Eu = {};
            function getPts(e1) {
                var t = [];
                if (null != e1) {
                    for(var n = 0; n < e1.length; n += 2){
                        var a = e1[n], i = e1[n + 1];
                        t.push({
                            x: a,
                            y: i
                        });
                    }
                    return t;
                }
            }
            Eu.findMidptPtsEtc = function(e1, t) {
                var n, a = t.posPts, i = t.intersectionPts, o = t.vectorNormInverse, s = e1.pstyle("source-endpoint"), l = e1.pstyle("target-endpoint"), u = null != s.units && null != l.units;
                switch(e1.pstyle("edge-distances").value){
                    case "node-position":
                        n = a;
                        break;
                    case "intersection":
                        n = i;
                        break;
                    case "endpoints":
                        if (u) {
                            var c = _slicedToArray(this.manualEndptToPx(e1.source()[0], s), 2), d = c[0], h = c[1], p = _slicedToArray(this.manualEndptToPx(e1.target()[0], l), 2), g = p[0], v = p[1], y = {
                                x1: d,
                                y1: h,
                                x2: g,
                                y2: v
                            };
                            o = function recalcVectorNormInverse(e1, t, n, a) {
                                var i = a - t, o = n - e1, s = Math.sqrt(o * o + i * i);
                                return {
                                    x: -i / s,
                                    y: o / s
                                };
                            }(d, h, g, v), n = y;
                        } else Ue("Edge ".concat(e1.id(), " has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).")), n = i;
                }
                return {
                    midptPts: n,
                    vectorNormInverse: o
                };
            }, Eu.findHaystackPoints = function(e1) {
                for(var t = 0; t < e1.length; t++){
                    var n = e1[t], a = n._private, i = a.rscratch;
                    if (!i.haystack) {
                        var o = 2 * Math.random() * Math.PI;
                        i.source = {
                            x: Math.cos(o),
                            y: Math.sin(o)
                        }, o = 2 * Math.random() * Math.PI, i.target = {
                            x: Math.cos(o),
                            y: Math.sin(o)
                        };
                    }
                    var s = a.source, l = a.target, u = s.position(), c = l.position(), d = s.width(), h = l.width(), p = s.height(), g = l.height(), v = n.pstyle("haystack-radius").value / 2;
                    i.haystackPts = i.allpts = [
                        i.source.x * d * v + u.x,
                        i.source.y * p * v + u.y,
                        i.target.x * h * v + c.x,
                        i.target.y * g * v + c.y
                    ], i.midX = (i.allpts[0] + i.allpts[2]) / 2, i.midY = (i.allpts[1] + i.allpts[3]) / 2, i.edgeType = "haystack", i.haystack = !0, this.storeEdgeProjections(n), this.calculateArrowAngles(n), this.recalculateEdgeLabelProjections(n), this.calculateLabelAngles(n);
                }
            }, Eu.findSegmentsPoints = function(e1, t) {
                var n = e1._private.rscratch, a = e1.pstyle("segment-weights"), i = e1.pstyle("segment-distances"), o = e1.pstyle("segment-radii"), s = e1.pstyle("radius-type"), l = Math.min(a.pfValue.length, i.pfValue.length), u = o.pfValue[o.pfValue.length - 1], c = s.pfValue[s.pfValue.length - 1];
                n.edgeType = "segments", n.segpts = [], n.radii = [], n.isArcRadius = [];
                for(var d = 0; d < l; d++){
                    var h = a.pfValue[d], p = i.pfValue[d], g = 1 - h, v = h, y = this.findMidptPtsEtc(e1, t), m = y.midptPts, b = y.vectorNormInverse, x = {
                        x: m.x1 * g + m.x2 * v,
                        y: m.y1 * g + m.y2 * v
                    };
                    n.segpts.push(x.x + b.x * p, x.y + b.y * p), n.radii.push(void 0 !== o.pfValue[d] ? o.pfValue[d] : u), n.isArcRadius.push("arc-radius" === (void 0 !== s.pfValue[d] ? s.pfValue[d] : c));
                }
            }, Eu.findLoopPoints = function(e1, t, n, a) {
                var i = e1._private.rscratch, o = t.dirCounts, s = t.srcPos, l = e1.pstyle("control-point-distances"), u = l ? l.pfValue[0] : void 0, c = e1.pstyle("loop-direction").pfValue, d = e1.pstyle("loop-sweep").pfValue, h = e1.pstyle("control-point-step-size").pfValue;
                i.edgeType = "self";
                var p = n, g = h;
                a && (p = 0, g = u);
                var v = c - Math.PI / 2, y = v - d / 2, m = v + d / 2, b = String(c + "_" + d);
                p = void 0 === o[b] ? o[b] = 0 : ++o[b], i.ctrlpts = [
                    s.x + 1.4 * Math.cos(y) * g * (p / 3 + 1),
                    s.y + 1.4 * Math.sin(y) * g * (p / 3 + 1),
                    s.x + 1.4 * Math.cos(m) * g * (p / 3 + 1),
                    s.y + 1.4 * Math.sin(m) * g * (p / 3 + 1)
                ];
            }, Eu.findCompoundLoopPoints = function(e1, t, n, a) {
                var i = e1._private.rscratch;
                i.edgeType = "compound";
                var o = t.srcPos, s = t.tgtPos, l = t.srcW, u = t.srcH, c = t.tgtW, d = t.tgtH, h = e1.pstyle("control-point-step-size").pfValue, p = e1.pstyle("control-point-distances"), g = p ? p.pfValue[0] : void 0, v = n, y = h;
                a && (v = 0, y = g);
                var m = {
                    x: o.x - l / 2,
                    y: o.y - u / 2
                }, b = {
                    x: s.x - c / 2,
                    y: s.y - d / 2
                }, x = {
                    x: Math.min(m.x, b.x),
                    y: Math.min(m.y, b.y)
                }, w = Math.max(.5, Math.log(l * xu)), E = Math.max(.5, Math.log(c * xu));
                i.ctrlpts = [
                    x.x,
                    x.y - (1 + Math.pow(50, 1.12) / 100) * y * (v / 3 + 1) * w,
                    x.x - (1 + Math.pow(50, 1.12) / 100) * y * (v / 3 + 1) * E,
                    x.y
                ];
            }, Eu.findStraightEdgePoints = function(e1) {
                e1._private.rscratch.edgeType = "straight";
            }, Eu.findBezierPoints = function(e1, t, n, a, i) {
                var o = e1._private.rscratch, s = e1.pstyle("control-point-step-size").pfValue, l = e1.pstyle("control-point-distances"), u = e1.pstyle("control-point-weights"), c = l && u ? Math.min(l.value.length, u.value.length) : 1, d = l ? l.pfValue[0] : void 0, h = u.value[0], p = a;
                o.edgeType = p ? "multibezier" : "bezier", o.ctrlpts = [];
                for(var g = 0; g < c; g++){
                    var v = (.5 - t.eles.length / 2 + n) * s * (i ? -1 : 1), y = void 0, m = Lt(v);
                    p && (d = l ? l.pfValue[g] : s, h = u.value[g]);
                    var b = void 0 !== (y = a ? d : void 0 !== d ? m * d : void 0) ? y : v, x = 1 - h, w = h, E = this.findMidptPtsEtc(e1, t), T = E.midptPts, k = E.vectorNormInverse, S = {
                        x: T.x1 * x + T.x2 * w,
                        y: T.y1 * x + T.y2 * w
                    };
                    o.ctrlpts.push(S.x + k.x * b, S.y + k.y * b);
                }
            }, Eu.findTaxiPoints = function(e1, t) {
                var n = e1._private.rscratch;
                n.edgeType = "segments";
                var a = "vertical", i = "horizontal", o = "leftward", s = "rightward", l = "downward", u = "upward", c = t.posPts, d = t.srcW, h = t.srcH, p = t.tgtW, g = t.tgtH, v = "node-position" !== e1.pstyle("edge-distances").value, y = e1.pstyle("taxi-direction").value, m = y, b = e1.pstyle("taxi-turn"), x = "%" === b.units, w = b.pfValue, E = w < 0, T = e1.pstyle("taxi-turn-min-distance").pfValue, k = v ? (d + p) / 2 : 0, S = v ? (h + g) / 2 : 0, P = c.x2 - c.x1, _ = c.y2 - c.y1, D = function subDWH(e1, t) {
                    return e1 > 0 ? Math.max(e1 - t, 0) : Math.min(e1 + t, 0);
                }, M = D(P, k), I = D(_, S), R = !1;
                "auto" === m ? y = Math.abs(M) > Math.abs(I) ? i : a : m === u || m === l ? (y = a, R = !0) : m !== o && m !== s || (y = i, R = !0);
                var L, N = y === a, O = N ? I : M, z = N ? _ : P, V = Lt(z), q = !1;
                (R && (x || E) || !(m === l && z < 0 || m === u && z > 0 || m === o && z > 0 || m === s && z < 0) || (O = (V *= -1) * Math.abs(O), q = !0), x) ? L = (w < 0 ? 1 + w : w) * O : L = (w < 0 ? O : 0) + w * V;
                var j = function getIsTooClose(e1) {
                    return Math.abs(e1) < T || Math.abs(e1) >= Math.abs(O);
                }, W = j(L), H = j(Math.abs(O) - Math.abs(L));
                if ((W || H) && !q) if (N) {
                    var X = Math.abs(z) <= h / 2, Y = Math.abs(P) <= p / 2;
                    if (X) {
                        var K = (c.x1 + c.x2) / 2, G = c.y1, U = c.y2;
                        n.segpts = [
                            K,
                            G,
                            K,
                            U
                        ];
                    } else if (Y) {
                        var Z = (c.y1 + c.y2) / 2, Q = c.x1, J = c.x2;
                        n.segpts = [
                            Q,
                            Z,
                            J,
                            Z
                        ];
                    } else n.segpts = [
                        c.x1,
                        c.y2
                    ];
                } else {
                    var ee = Math.abs(z) <= d / 2, te = Math.abs(_) <= g / 2;
                    if (ee) {
                        var ne = (c.y1 + c.y2) / 2, re = c.x1, ae = c.x2;
                        n.segpts = [
                            re,
                            ne,
                            ae,
                            ne
                        ];
                    } else if (te) {
                        var ie = (c.x1 + c.x2) / 2, oe = c.y1, se = c.y2;
                        n.segpts = [
                            ie,
                            oe,
                            ie,
                            se
                        ];
                    } else n.segpts = [
                        c.x2,
                        c.y1
                    ];
                }
                else if (N) {
                    var le = c.y1 + L + (v ? h / 2 * V : 0), ue = c.x1, ce = c.x2;
                    n.segpts = [
                        ue,
                        le,
                        ce,
                        le
                    ];
                } else {
                    var de = c.x1 + L + (v ? d / 2 * V : 0), he = c.y1, pe = c.y2;
                    n.segpts = [
                        de,
                        he,
                        de,
                        pe
                    ];
                }
                if (n.isRound) {
                    var fe = e1.pstyle("taxi-radius").value, ge = "arc-radius" === e1.pstyle("radius-type").value[0];
                    n.radii = new Array(n.segpts.length / 2).fill(fe), n.isArcRadius = new Array(n.segpts.length / 2).fill(ge);
                }
            }, Eu.tryToCorrectInvalidPoints = function(e1, t) {
                var n = e1._private.rscratch;
                if ("bezier" === n.edgeType) {
                    var a = t.srcPos, i = t.tgtPos, o = t.srcW, s = t.srcH, l = t.tgtW, u = t.tgtH, c = t.srcShape, d = t.tgtShape, h = t.srcCornerRadius, p = t.tgtCornerRadius, g = t.srcRs, v = t.tgtRs, y = !U(n.startX) || !U(n.startY), m = !U(n.arrowStartX) || !U(n.arrowStartY), b = !U(n.endX) || !U(n.endY), x = !U(n.arrowEndX) || !U(n.arrowEndY), w = 3 * (this.getArrowWidth(e1.pstyle("width").pfValue, e1.pstyle("arrow-scale").value) * this.arrowShapeWidth), E = Nt({
                        x: n.ctrlpts[0],
                        y: n.ctrlpts[1]
                    }, {
                        x: n.startX,
                        y: n.startY
                    }), T = E < w, k = Nt({
                        x: n.ctrlpts[0],
                        y: n.ctrlpts[1]
                    }, {
                        x: n.endX,
                        y: n.endY
                    }), S = k < w, P = !1;
                    if (y || m || T) {
                        P = !0;
                        var _ = {
                            x: n.ctrlpts[0] - a.x,
                            y: n.ctrlpts[1] - a.y
                        }, D = Math.sqrt(_.x * _.x + _.y * _.y), M = {
                            x: _.x / D,
                            y: _.y / D
                        }, I = Math.max(o, s), R = {
                            x: n.ctrlpts[0] + 2 * M.x * I,
                            y: n.ctrlpts[1] + 2 * M.y * I
                        }, L = c.intersectLine(a.x, a.y, o, s, R.x, R.y, 0, h, g);
                        T ? (n.ctrlpts[0] = n.ctrlpts[0] + M.x * (w - E), n.ctrlpts[1] = n.ctrlpts[1] + M.y * (w - E)) : (n.ctrlpts[0] = L[0] + M.x * w, n.ctrlpts[1] = L[1] + M.y * w);
                    }
                    if (b || x || S) {
                        P = !0;
                        var N = {
                            x: n.ctrlpts[0] - i.x,
                            y: n.ctrlpts[1] - i.y
                        }, O = Math.sqrt(N.x * N.x + N.y * N.y), z = {
                            x: N.x / O,
                            y: N.y / O
                        }, V = Math.max(o, s), q = {
                            x: n.ctrlpts[0] + 2 * z.x * V,
                            y: n.ctrlpts[1] + 2 * z.y * V
                        }, j = d.intersectLine(i.x, i.y, l, u, q.x, q.y, 0, p, v);
                        S ? (n.ctrlpts[0] = n.ctrlpts[0] + z.x * (w - k), n.ctrlpts[1] = n.ctrlpts[1] + z.y * (w - k)) : (n.ctrlpts[0] = j[0] + z.x * w, n.ctrlpts[1] = j[1] + z.y * w);
                    }
                    P && this.findEndpoints(e1);
                }
            }, Eu.storeAllpts = function(e1) {
                var t = e1._private.rscratch;
                if ("multibezier" === t.edgeType || "bezier" === t.edgeType || "self" === t.edgeType || "compound" === t.edgeType) {
                    t.allpts = [], t.allpts.push(t.startX, t.startY);
                    for(var n = 0; n + 1 < t.ctrlpts.length; n += 2)t.allpts.push(t.ctrlpts[n], t.ctrlpts[n + 1]), n + 3 < t.ctrlpts.length && t.allpts.push((t.ctrlpts[n] + t.ctrlpts[n + 2]) / 2, (t.ctrlpts[n + 1] + t.ctrlpts[n + 3]) / 2);
                    var a;
                    t.allpts.push(t.endX, t.endY), t.ctrlpts.length / 2 % 2 == 0 ? (a = t.allpts.length / 2 - 1, t.midX = t.allpts[a], t.midY = t.allpts[a + 1]) : (a = t.allpts.length / 2 - 3, t.midX = Ft(t.allpts[a], t.allpts[a + 2], t.allpts[a + 4], .5), t.midY = Ft(t.allpts[a + 1], t.allpts[a + 3], t.allpts[a + 5], .5));
                } else if ("straight" === t.edgeType) t.allpts = [
                    t.startX,
                    t.startY,
                    t.endX,
                    t.endY
                ], t.midX = (t.startX + t.endX + t.arrowStartX + t.arrowEndX) / 4, t.midY = (t.startY + t.endY + t.arrowStartY + t.arrowEndY) / 4;
                else if ("segments" === t.edgeType) {
                    if (t.allpts = [], t.allpts.push(t.startX, t.startY), t.allpts.push.apply(t.allpts, t.segpts), t.allpts.push(t.endX, t.endY), t.isRound) {
                        t.roundCorners = [];
                        for(var i = 2; i + 3 < t.allpts.length; i += 2){
                            var o = t.radii[i / 2 - 1], s = t.isArcRadius[i / 2 - 1];
                            t.roundCorners.push(getRoundCorner({
                                x: t.allpts[i - 2],
                                y: t.allpts[i - 1]
                            }, {
                                x: t.allpts[i],
                                y: t.allpts[i + 1],
                                radius: o
                            }, {
                                x: t.allpts[i + 2],
                                y: t.allpts[i + 3]
                            }, o, s));
                        }
                    }
                    if (t.segpts.length % 4 == 0) {
                        var l = t.segpts.length / 2, u = l - 2;
                        t.midX = (t.segpts[u] + t.segpts[l]) / 2, t.midY = (t.segpts[u + 1] + t.segpts[l + 1]) / 2;
                    } else {
                        var c = t.segpts.length / 2 - 1;
                        if (t.isRound) {
                            var d = {
                                x: t.segpts[c],
                                y: t.segpts[c + 1]
                            }, h = t.roundCorners[c / 2];
                            if (0 === h.radius) {
                                var p = {
                                    x: t.segpts[c + 2],
                                    y: t.segpts[c + 3]
                                };
                                t.midX = d.x, t.midY = d.y, t.midVector = [
                                    d.y - p.y,
                                    p.x - d.x
                                ];
                            } else {
                                var g = [
                                    d.x - h.cx,
                                    d.y - h.cy
                                ], v = h.radius / Math.sqrt(Math.pow(g[0], 2) + Math.pow(g[1], 2));
                                g = g.map(function(e1) {
                                    return e1 * v;
                                }), t.midX = h.cx + g[0], t.midY = h.cy + g[1], t.midVector = g;
                            }
                        } else t.midX = t.segpts[c], t.midY = t.segpts[c + 1];
                    }
                }
            }, Eu.checkForInvalidEdgeWarning = function(e1) {
                var t = e1[0]._private.rscratch;
                t.nodesOverlap || U(t.startX) && U(t.startY) && U(t.endX) && U(t.endY) ? t.loggedErr = !1 : t.loggedErr || (t.loggedErr = !0, Ue("Edge `" + e1.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
            }, Eu.findEdgeControlPoints = function(e1) {
                var t = this;
                if (e1 && 0 !== e1.length) {
                    for(var n = this, a = n.cy.hasCompoundNodes(), i = new it, o = function getKey(e1, t) {
                        return [].concat(_toConsumableArray(e1), [
                            t ? 1 : 0
                        ]).join("-");
                    }, s = [], l = [], u = 0; u < e1.length; u++){
                        var c = e1[u], d = c._private, h = c.pstyle("curve-style").value;
                        if (!c.removed() && c.takesUpSpace()) if ("haystack" !== h) {
                            var p = "unbundled-bezier" === h || h.endsWith("segments") || "straight" === h || "straight-triangle" === h || h.endsWith("taxi"), g = "unbundled-bezier" === h || "bezier" === h, v = d.source, y = d.target, m = [
                                v.poolIndex(),
                                y.poolIndex()
                            ].sort(), b = o(m, p), x = i.get(b);
                            null == x && (x = {
                                eles: []
                            }, s.push({
                                pairId: m,
                                edgeIsUnbundled: p
                            }), i.set(b, x)), x.eles.push(c), p && (x.hasUnbundled = !0), g && (x.hasBezier = !0);
                        } else l.push(c);
                    }
                    for(var w = function _loop() {
                        var e1, l = s[E], u = l.pairId, c = l.edgeIsUnbundled, d = o(u, c), h = i.get(d);
                        if (!h.hasUnbundled) {
                            var p = h.eles[0].parallelEdges().filter(function(e1) {
                                return e1.isBundledBezier();
                            });
                            nt(h.eles), p.forEach(function(e1) {
                                return h.eles.push(e1);
                            }), h.eles.sort(function(e1, t) {
                                return e1.poolIndex() - t.poolIndex();
                            });
                        }
                        var g = h.eles[0], v = g.source(), y = g.target();
                        if (v.poolIndex() > y.poolIndex()) {
                            var m = v;
                            v = y, y = m;
                        }
                        var b = h.srcPos = v.position(), x = h.tgtPos = y.position(), w = h.srcW = v.outerWidth(), T = h.srcH = v.outerHeight(), k = h.tgtW = y.outerWidth(), S = h.tgtH = y.outerHeight(), P = h.srcShape = n.nodeShapes[t.getNodeShape(v)], _ = h.tgtShape = n.nodeShapes[t.getNodeShape(y)], D = h.srcCornerRadius = "auto" === v.pstyle("corner-radius").value ? "auto" : v.pstyle("corner-radius").pfValue, M = h.tgtCornerRadius = "auto" === y.pstyle("corner-radius").value ? "auto" : y.pstyle("corner-radius").pfValue, I = h.tgtRs = y._private.rscratch, R = h.srcRs = v._private.rscratch;
                        h.dirCounts = {
                            north: 0,
                            west: 0,
                            south: 0,
                            east: 0,
                            northwest: 0,
                            southwest: 0,
                            northeast: 0,
                            southeast: 0
                        };
                        for(var L = 0; L < h.eles.length; L++){
                            var N = h.eles[L], O = N[0]._private.rscratch, z = N.pstyle("curve-style").value, V = "unbundled-bezier" === z || z.endsWith("segments") || z.endsWith("taxi"), q = !v.same(N.source());
                            if (!h.calculatedIntersection && v !== y && (h.hasBezier || h.hasUnbundled)) {
                                h.calculatedIntersection = !0;
                                var j = P.intersectLine(b.x, b.y, w, T, x.x, x.y, 0, D, R), W = h.srcIntn = j, H = _.intersectLine(x.x, x.y, k, S, b.x, b.y, 0, M, I), X = h.tgtIntn = H, Y = h.intersectionPts = {
                                    x1: j[0],
                                    x2: H[0],
                                    y1: j[1],
                                    y2: H[1]
                                }, K = h.posPts = {
                                    x1: b.x,
                                    x2: x.x,
                                    y1: b.y,
                                    y2: x.y
                                }, G = H[1] - j[1], Z = H[0] - j[0], Q = Math.sqrt(Z * Z + G * G);
                                U(Q) && Q >= wu || (Q = Math.sqrt(Math.max(Z * Z, xu) + Math.max(G * G, xu)));
                                var J = h.vector = {
                                    x: Z,
                                    y: G
                                }, ee = h.vectorNorm = {
                                    x: J.x / Q,
                                    y: J.y / Q
                                }, te = {
                                    x: -ee.y,
                                    y: ee.x
                                };
                                h.nodesOverlap = !U(Q) || _.checkPoint(j[0], j[1], 0, k, S, x.x, x.y, M, I) || P.checkPoint(H[0], H[1], 0, w, T, b.x, b.y, D, R), h.vectorNormInverse = te, e1 = {
                                    nodesOverlap: h.nodesOverlap,
                                    dirCounts: h.dirCounts,
                                    calculatedIntersection: !0,
                                    hasBezier: h.hasBezier,
                                    hasUnbundled: h.hasUnbundled,
                                    eles: h.eles,
                                    srcPos: x,
                                    srcRs: I,
                                    tgtPos: b,
                                    tgtRs: R,
                                    srcW: k,
                                    srcH: S,
                                    tgtW: w,
                                    tgtH: T,
                                    srcIntn: X,
                                    tgtIntn: W,
                                    srcShape: _,
                                    tgtShape: P,
                                    posPts: {
                                        x1: K.x2,
                                        y1: K.y2,
                                        x2: K.x1,
                                        y2: K.y1
                                    },
                                    intersectionPts: {
                                        x1: Y.x2,
                                        y1: Y.y2,
                                        x2: Y.x1,
                                        y2: Y.y1
                                    },
                                    vector: {
                                        x: -J.x,
                                        y: -J.y
                                    },
                                    vectorNorm: {
                                        x: -ee.x,
                                        y: -ee.y
                                    },
                                    vectorNormInverse: {
                                        x: -te.x,
                                        y: -te.y
                                    }
                                };
                            }
                            var ne = q ? e1 : h;
                            O.nodesOverlap = ne.nodesOverlap, O.srcIntn = ne.srcIntn, O.tgtIntn = ne.tgtIntn, O.isRound = z.startsWith("round"), a && (v.isParent() || v.isChild() || y.isParent() || y.isChild()) && (v.parents().anySame(y) || y.parents().anySame(v) || v.same(y) && v.isParent()) ? t.findCompoundLoopPoints(N, ne, L, V) : v === y ? t.findLoopPoints(N, ne, L, V) : z.endsWith("segments") ? t.findSegmentsPoints(N, ne) : z.endsWith("taxi") ? t.findTaxiPoints(N, ne) : "straight" === z || !V && h.eles.length % 2 == 1 && L === Math.floor(h.eles.length / 2) ? t.findStraightEdgePoints(N) : t.findBezierPoints(N, ne, L, V, q), t.findEndpoints(N), t.tryToCorrectInvalidPoints(N, ne), t.checkForInvalidEdgeWarning(N), t.storeAllpts(N), t.storeEdgeProjections(N), t.calculateArrowAngles(N), t.recalculateEdgeLabelProjections(N), t.calculateLabelAngles(N);
                        }
                    }, E = 0; E < s.length; E++)w();
                    this.findHaystackPoints(l);
                }
            }, Eu.getSegmentPoints = function(e1) {
                var t = e1[0]._private.rscratch;
                if (this.recalculateRenderedStyle(e1), "segments" === t.edgeType) return getPts(t.segpts);
            }, Eu.getControlPoints = function(e1) {
                var t = e1[0]._private.rscratch;
                this.recalculateRenderedStyle(e1);
                var n = t.edgeType;
                if ("bezier" === n || "multibezier" === n || "self" === n || "compound" === n) return getPts(t.ctrlpts);
            }, Eu.getEdgeMidpoint = function(e1) {
                var t = e1[0]._private.rscratch;
                return this.recalculateRenderedStyle(e1), {
                    x: t.midX,
                    y: t.midY
                };
            };
            var Cu = {
                manualEndptToPx: function(e1, t) {
                    var n = e1.position(), a = e1.outerWidth(), i = e1.outerHeight(), o = e1._private.rscratch;
                    if (2 === t.value.length) {
                        var s = [
                            t.pfValue[0],
                            t.pfValue[1]
                        ];
                        return "%" === t.units[0] && (s[0] = s[0] * a), "%" === t.units[1] && (s[1] = s[1] * i), s[0] += n.x, s[1] += n.y, s;
                    }
                    var l = t.pfValue[0];
                    l = -Math.PI / 2 + l;
                    var u = 2 * Math.max(a, i), c = [
                        n.x + Math.cos(l) * u,
                        n.y + Math.sin(l) * u
                    ];
                    return this.nodeShapes[this.getNodeShape(e1)].intersectLine(n.x, n.y, a, i, c[0], c[1], 0, "auto" === e1.pstyle("corner-radius").value ? "auto" : e1.pstyle("corner-radius").pfValue, o);
                },
                findEndpoints: function(e1) {
                    var t, n, a, i, o, s = this, l = e1.source()[0], u = e1.target()[0], c = l.position(), d = u.position(), h = e1.pstyle("target-arrow-shape").value, p = e1.pstyle("source-arrow-shape").value, g = e1.pstyle("target-distance-from-node").pfValue, v = e1.pstyle("source-distance-from-node").pfValue, y = l._private.rscratch, m = u._private.rscratch, b = e1.pstyle("curve-style").value, x = e1._private.rscratch, w = x.edgeType, E = "self" === w || "compound" === w, T = "bezier" === w || "multibezier" === w || E, k = "bezier" !== w, S = "straight" === w || "segments" === w, P = "segments" === w, _ = T || k || S, D = E || "taxi" === b, M = e1.pstyle("source-endpoint"), I = D ? "outside-to-node" : M.value, R = "auto" === l.pstyle("corner-radius").value ? "auto" : l.pstyle("corner-radius").pfValue, L = e1.pstyle("target-endpoint"), N = D ? "outside-to-node" : L.value, O = "auto" === u.pstyle("corner-radius").value ? "auto" : u.pstyle("corner-radius").pfValue;
                    if (x.srcManEndpt = M, x.tgtManEndpt = L, T) {
                        var z = [
                            x.ctrlpts[0],
                            x.ctrlpts[1]
                        ];
                        n = k ? [
                            x.ctrlpts[x.ctrlpts.length - 2],
                            x.ctrlpts[x.ctrlpts.length - 1]
                        ] : z, a = z;
                    } else if (S) {
                        var V = P ? x.segpts.slice(0, 2) : [
                            d.x,
                            d.y
                        ];
                        n = P ? x.segpts.slice(x.segpts.length - 2) : [
                            c.x,
                            c.y
                        ], a = V;
                    }
                    if ("inside-to-node" === N) t = [
                        d.x,
                        d.y
                    ];
                    else if (L.units) t = this.manualEndptToPx(u, L);
                    else if ("outside-to-line" === N) t = x.tgtIntn;
                    else if ("outside-to-node" === N || "outside-to-node-or-label" === N ? i = n : "outside-to-line" !== N && "outside-to-line-or-label" !== N || (i = [
                        c.x,
                        c.y
                    ]), t = s.nodeShapes[this.getNodeShape(u)].intersectLine(d.x, d.y, u.outerWidth(), u.outerHeight(), i[0], i[1], 0, O, m), "outside-to-node-or-label" === N || "outside-to-line-or-label" === N) {
                        var q = u._private.rscratch, j = q.labelWidth, W = q.labelHeight, H = q.labelX, X = q.labelY, Y = j / 2, K = W / 2, G = u.pstyle("text-valign").value;
                        "top" === G ? X -= K : "bottom" === G && (X += K);
                        var Z = u.pstyle("text-halign").value;
                        "left" === Z ? H -= Y : "right" === Z && (H += Y);
                        var Q = pn(i[0], i[1], [
                            H - Y,
                            X - K,
                            H + Y,
                            X - K,
                            H + Y,
                            X + K,
                            H - Y,
                            X + K
                        ], d.x, d.y);
                        if (Q.length > 0) {
                            var J = c, ee = Ot(J, Mt(t)), te = Ot(J, Mt(Q)), ne = ee;
                            if (te < ee && (t = Q, ne = te), Q.length > 2) Ot(J, {
                                x: Q[2],
                                y: Q[3]
                            }) < ne && (t = [
                                Q[2],
                                Q[3]
                            ]);
                        }
                    }
                    var re = gn(t, n, s.arrowShapes[h].spacing(e1) + g), ae = gn(t, n, s.arrowShapes[h].gap(e1) + g);
                    if (x.endX = ae[0], x.endY = ae[1], x.arrowEndX = re[0], x.arrowEndY = re[1], "inside-to-node" === I) t = [
                        c.x,
                        c.y
                    ];
                    else if (M.units) t = this.manualEndptToPx(l, M);
                    else if ("outside-to-line" === I) t = x.srcIntn;
                    else if ("outside-to-node" === I || "outside-to-node-or-label" === I ? o = a : "outside-to-line" !== I && "outside-to-line-or-label" !== I || (o = [
                        d.x,
                        d.y
                    ]), t = s.nodeShapes[this.getNodeShape(l)].intersectLine(c.x, c.y, l.outerWidth(), l.outerHeight(), o[0], o[1], 0, R, y), "outside-to-node-or-label" === I || "outside-to-line-or-label" === I) {
                        var ie = l._private.rscratch, oe = ie.labelWidth, se = ie.labelHeight, le = ie.labelX, ue = ie.labelY, ce = oe / 2, de = se / 2, he = l.pstyle("text-valign").value;
                        "top" === he ? ue -= de : "bottom" === he && (ue += de);
                        var pe = l.pstyle("text-halign").value;
                        "left" === pe ? le -= ce : "right" === pe && (le += ce);
                        var fe = pn(o[0], o[1], [
                            le - ce,
                            ue - de,
                            le + ce,
                            ue - de,
                            le + ce,
                            ue + de,
                            le - ce,
                            ue + de
                        ], c.x, c.y);
                        if (fe.length > 0) {
                            var ge = d, ve = Ot(ge, Mt(t)), ye = Ot(ge, Mt(fe)), me = ve;
                            if (ye < ve && (t = [
                                fe[0],
                                fe[1]
                            ], me = ye), fe.length > 2) Ot(ge, {
                                x: fe[2],
                                y: fe[3]
                            }) < me && (t = [
                                fe[2],
                                fe[3]
                            ]);
                        }
                    }
                    var be = gn(t, a, s.arrowShapes[p].spacing(e1) + v), xe = gn(t, a, s.arrowShapes[p].gap(e1) + v);
                    x.startX = xe[0], x.startY = xe[1], x.arrowStartX = be[0], x.arrowStartY = be[1], _ && (U(x.startX) && U(x.startY) && U(x.endX) && U(x.endY) ? x.badLine = !1 : x.badLine = !0);
                },
                getSourceEndpoint: function(e1) {
                    var t = e1[0]._private.rscratch;
                    return this.recalculateRenderedStyle(e1), "haystack" === t.edgeType ? {
                        x: t.haystackPts[0],
                        y: t.haystackPts[1]
                    } : {
                        x: t.arrowStartX,
                        y: t.arrowStartY
                    };
                },
                getTargetEndpoint: function(e1) {
                    var t = e1[0]._private.rscratch;
                    return this.recalculateRenderedStyle(e1), "haystack" === t.edgeType ? {
                        x: t.haystackPts[2],
                        y: t.haystackPts[3]
                    } : {
                        x: t.arrowEndX,
                        y: t.arrowEndY
                    };
                }
            }, Tu = {};
            function pushBezierPts(e1, t, n) {
                for(var a = function qbezierAt$1(e1, t, n, a) {
                    return Ft(e1, t, n, a);
                }, i = t._private.rstyle.bezierPts, o = 0; o < e1.bezierProjPcts.length; o++){
                    var s = e1.bezierProjPcts[o];
                    i.push({
                        x: a(n[0], n[2], n[4], s),
                        y: a(n[1], n[3], n[5], s)
                    });
                }
            }
            Tu.storeEdgeProjections = function(e1) {
                var t = e1._private, n = t.rscratch, a = n.edgeType;
                if (t.rstyle.bezierPts = null, t.rstyle.linePts = null, t.rstyle.haystackPts = null, "multibezier" === a || "bezier" === a || "self" === a || "compound" === a) {
                    t.rstyle.bezierPts = [];
                    for(var i = 0; i + 5 < n.allpts.length; i += 4)pushBezierPts(this, e1, n.allpts.slice(i, i + 6));
                } else if ("segments" === a) {
                    var o = t.rstyle.linePts = [];
                    for(i = 0; i + 1 < n.allpts.length; i += 2)o.push({
                        x: n.allpts[i],
                        y: n.allpts[i + 1]
                    });
                } else if ("haystack" === a) {
                    var s = n.haystackPts;
                    t.rstyle.haystackPts = [
                        {
                            x: s[0],
                            y: s[1]
                        },
                        {
                            x: s[2],
                            y: s[3]
                        }
                    ];
                }
                t.rstyle.arrowWidth = this.getArrowWidth(e1.pstyle("width").pfValue, e1.pstyle("arrow-scale").value) * this.arrowShapeWidth;
            }, Tu.recalculateEdgeProjections = function(e1) {
                this.findEdgeControlPoints(e1);
            };
            var ku = {
                recalculateNodeLabelProjection: function(e1) {
                    var t = e1.pstyle("label").strValue;
                    if (!re(t)) {
                        var n, a, i = e1._private, o = e1.width(), s = e1.height(), l = e1.padding(), u = e1.position(), c = e1.pstyle("text-halign").strValue, d = e1.pstyle("text-valign").strValue, h = i.rscratch, p = i.rstyle;
                        switch(c){
                            case "left":
                                n = u.x - o / 2 - l;
                                break;
                            case "right":
                                n = u.x + o / 2 + l;
                                break;
                            default:
                                n = u.x;
                        }
                        switch(d){
                            case "top":
                                a = u.y - s / 2 - l;
                                break;
                            case "bottom":
                                a = u.y + s / 2 + l;
                                break;
                            default:
                                a = u.y;
                        }
                        h.labelX = n, h.labelY = a, p.labelX = n, p.labelY = a, this.calculateLabelAngles(e1), this.applyLabelDimensions(e1);
                    }
                }
            }, Su = function lineAngleFromDelta(e1, t) {
                var n = Math.atan(t / e1);
                return 0 === e1 && n < 0 && (n *= -1), n;
            }, Pu = function lineAngle(e1, t) {
                var n = t.x - e1.x, a = t.y - e1.y;
                return Su(n, a);
            };
            ku.recalculateEdgeLabelProjections = function(e1) {
                var t, n = e1._private, a = n.rscratch, i = this, o = {
                    mid: e1.pstyle("label").strValue,
                    source: e1.pstyle("source-label").strValue,
                    target: e1.pstyle("target-label").strValue
                };
                if (o.mid || o.source || o.target) {
                    t = {
                        x: a.midX,
                        y: a.midY
                    };
                    var s = function setRs(e1, t, a) {
                        at(n.rscratch, e1, t, a), at(n.rstyle, e1, t, a);
                    };
                    s("labelX", null, t.x), s("labelY", null, t.y);
                    var l = Su(a.midDispX, a.midDispY);
                    s("labelAutoAngle", null, l);
                    var u = function createControlPointInfo() {
                        if (u.cache) return u.cache;
                        for(var e1 = [], t = 0; t + 5 < a.allpts.length; t += 4){
                            var o = {
                                x: a.allpts[t],
                                y: a.allpts[t + 1]
                            }, s = {
                                x: a.allpts[t + 2],
                                y: a.allpts[t + 3]
                            }, l = {
                                x: a.allpts[t + 4],
                                y: a.allpts[t + 5]
                            };
                            e1.push({
                                p0: o,
                                p1: s,
                                p2: l,
                                startDist: 0,
                                length: 0,
                                segments: []
                            });
                        }
                        var c = n.rstyle.bezierPts, d = i.bezierProjPcts.length;
                        function addSegment(e1, t, n, a, i) {
                            var o = Nt(t, n), s = e1.segments[e1.segments.length - 1], l = {
                                p0: t,
                                p1: n,
                                t0: a,
                                t1: i,
                                startDist: s ? s.startDist + s.length : 0,
                                length: o
                            };
                            e1.segments.push(l), e1.length += o;
                        }
                        for(var h = 0; h < e1.length; h++){
                            var p = e1[h], g = e1[h - 1];
                            g && (p.startDist = g.startDist + g.length), addSegment(p, p.p0, c[h * d], 0, i.bezierProjPcts[0]);
                            for(var v = 0; v < d - 1; v++)addSegment(p, c[h * d + v], c[h * d + v + 1], i.bezierProjPcts[v], i.bezierProjPcts[v + 1]);
                            addSegment(p, c[h * d + d - 1], p.p2, i.bezierProjPcts[d - 1], 1);
                        }
                        return u.cache = e1;
                    }, c = function calculateEndProjection(n) {
                        var i, l = "source" === n;
                        if (o[n]) {
                            var c = e1.pstyle(n + "-text-offset").pfValue;
                            switch(a.edgeType){
                                case "self":
                                case "compound":
                                case "bezier":
                                case "multibezier":
                                    for(var d, h = u(), p = 0, g = 0, v = 0; v < h.length; v++){
                                        for(var y = h[l ? v : h.length - 1 - v], m = 0; m < y.segments.length; m++){
                                            var b = y.segments[l ? m : y.segments.length - 1 - m], x = v === h.length - 1 && m === y.segments.length - 1;
                                            if (p = g, (g += b.length) >= c || x) {
                                                d = {
                                                    cp: y,
                                                    segment: b
                                                };
                                                break;
                                            }
                                        }
                                        if (d) break;
                                    }
                                    var w = d.cp, E = d.segment, T = (c - p) / E.length, k = E.t1 - E.t0, S = l ? E.t0 + k * T : E.t1 - k * T;
                                    S = qt(0, S, 1), t = Vt(w.p0, w.p1, w.p2, S), i = function bezierAngle(e1, t, n, a) {
                                        var i = qt(0, a - .001, 1), o = qt(0, a + .001, 1), s = Vt(e1, t, n, i), l = Vt(e1, t, n, o);
                                        return Pu(s, l);
                                    }(w.p0, w.p1, w.p2, S);
                                    break;
                                case "straight":
                                case "segments":
                                case "haystack":
                                    for(var P, _, D, M, I = 0, R = a.allpts.length, L = 0; L + 3 < R && (l ? (D = {
                                        x: a.allpts[L],
                                        y: a.allpts[L + 1]
                                    }, M = {
                                        x: a.allpts[L + 2],
                                        y: a.allpts[L + 3]
                                    }) : (D = {
                                        x: a.allpts[R - 2 - L],
                                        y: a.allpts[R - 1 - L]
                                    }, M = {
                                        x: a.allpts[R - 4 - L],
                                        y: a.allpts[R - 3 - L]
                                    }), _ = I, !((I += P = Nt(D, M)) >= c)); L += 2);
                                    var N = (c - _) / P;
                                    N = qt(0, N, 1), t = function lineAt(e1, t, n, a) {
                                        var i = t.x - e1.x, o = t.y - e1.y, s = Nt(e1, t), l = i / s, u = o / s;
                                        return n = null == n ? 0 : n, a = null != a ? a : n * s, {
                                            x: e1.x + l * a,
                                            y: e1.y + u * a
                                        };
                                    }(D, M, N), i = Pu(D, M);
                            }
                            s("labelX", n, t.x), s("labelY", n, t.y), s("labelAutoAngle", n, i);
                        }
                    };
                    c("source"), c("target"), this.applyLabelDimensions(e1);
                }
            }, ku.applyLabelDimensions = function(e1) {
                this.applyPrefixedLabelDimensions(e1), e1.isEdge() && (this.applyPrefixedLabelDimensions(e1, "source"), this.applyPrefixedLabelDimensions(e1, "target"));
            }, ku.applyPrefixedLabelDimensions = function(e1, t) {
                var n = e1._private, a = this.getLabelText(e1, t), i = Ne(a, e1._private.labelDimsKey);
                if (rt(n.rscratch, "prefixedLabelDimsKey", t) !== i) {
                    at(n.rscratch, "prefixedLabelDimsKey", t, i);
                    var o = this.calculateLabelDimensions(e1, a), s = e1.pstyle("line-height").pfValue, l = e1.pstyle("text-wrap").strValue, u = rt(n.rscratch, "labelWrapCachedLines", t) || [], c = "wrap" !== l ? 1 : Math.max(u.length, 1), d = o.height / c, h = d * s, p = o.width, g = o.height + (c - 1) * (s - 1) * d;
                    at(n.rstyle, "labelWidth", t, p), at(n.rscratch, "labelWidth", t, p), at(n.rstyle, "labelHeight", t, g), at(n.rscratch, "labelHeight", t, g), at(n.rscratch, "labelLineHeight", t, h);
                }
            }, ku.getLabelText = function(e1, t) {
                var n = e1._private, a = t ? t + "-" : "", i = e1.pstyle(a + "label").strValue, o = e1.pstyle("text-transform").value, s = function rscratch(e1, a) {
                    return a ? (at(n.rscratch, e1, t, a), a) : rt(n.rscratch, e1, t);
                };
                if (!i) return "";
                "none" == o || ("uppercase" == o ? i = i.toUpperCase() : "lowercase" == o && (i = i.toLowerCase()));
                var l = e1.pstyle("text-wrap").value;
                if ("wrap" === l) {
                    var u = s("labelKey");
                    if (null != u && s("labelWrapKey") === u) return s("labelWrapCachedText");
                    for(var c = i.split("\n"), d = e1.pstyle("text-max-width").pfValue, h = "anywhere" === e1.pstyle("text-overflow-wrap").value, p = [], g = /[\s\u200b]+|$/g, v = 0; v < c.length; v++){
                        var y = c[v], m = this.calculateLabelDimensions(e1, y).width;
                        if (h) {
                            var b = y.split("").join("​");
                            y = b;
                        }
                        if (m > d) {
                            var x, w = "", E = 0, T = _createForOfIteratorHelper(y.matchAll(g));
                            try {
                                for(T.s(); !(x = T.n()).done;){
                                    var k = x.value, S = k[0], P = y.substring(E, k.index);
                                    E = k.index + S.length;
                                    var _ = 0 === w.length ? P : w + P + S;
                                    this.calculateLabelDimensions(e1, _).width <= d ? w += P + S : (w && p.push(w), w = P + S);
                                }
                            } catch (e1) {
                                T.e(e1);
                            } finally{
                                T.f();
                            }
                            w.match(/^[\s\u200b]+$/) || p.push(w);
                        } else p.push(y);
                    }
                    s("labelWrapCachedLines", p), i = s("labelWrapCachedText", p.join("\n")), s("labelWrapKey", u);
                } else if ("ellipsis" === l) {
                    var D = e1.pstyle("text-max-width").pfValue, M = "", I = !1;
                    if (this.calculateLabelDimensions(e1, i).width < D) return i;
                    for(var R = 0; R < i.length; R++){
                        if (this.calculateLabelDimensions(e1, M + i[R] + "…").width > D) break;
                        M += i[R], R === i.length - 1 && (I = !0);
                    }
                    return I || (M += "…"), M;
                }
                return i;
            }, ku.getLabelJustification = function(e1) {
                var t = e1.pstyle("text-justification").strValue, n = e1.pstyle("text-halign").strValue;
                if ("auto" !== t) return t;
                if (!e1.isNode()) return "center";
                switch(n){
                    case "left":
                        return "right";
                    case "right":
                        return "left";
                    default:
                        return "center";
                }
            }, ku.calculateLabelDimensions = function(e1, t) {
                var n = this.cy.window().document, a = e1.pstyle("font-style").strValue, i = e1.pstyle("font-size").pfValue, o = e1.pstyle("font-family").strValue, s = e1.pstyle("font-weight").strValue, l = this.labelCalcCanvas, u = this.labelCalcCanvasContext;
                if (!l) {
                    l = this.labelCalcCanvas = n.createElement("canvas"), u = this.labelCalcCanvasContext = l.getContext("2d");
                    var c = l.style;
                    c.position = "absolute", c.left = "-9999px", c.top = "-9999px", c.zIndex = "-1", c.visibility = "hidden", c.pointerEvents = "none";
                }
                u.font = "".concat(a, " ").concat(s, " ").concat(i, "px ").concat(o);
                for(var d = 0, h = 0, p = t.split("\n"), g = 0; g < p.length; g++){
                    var v = p[g], y = u.measureText(v), m = Math.ceil(y.width), b = i;
                    d = Math.max(m, d), h += b;
                }
                return {
                    width: d += 0,
                    height: h += 0
                };
            }, ku.calculateLabelAngle = function(e1, t) {
                var n = e1._private.rscratch, a = e1.isEdge(), i = t ? t + "-" : "", o = e1.pstyle(i + "text-rotation"), s = o.strValue;
                return "none" === s ? 0 : a && "autorotate" === s ? n.labelAutoAngle : "autorotate" === s ? 0 : o.pfValue;
            }, ku.calculateLabelAngles = function(e1) {
                var t = this, n = e1.isEdge(), a = e1._private.rscratch;
                a.labelAngle = t.calculateLabelAngle(e1), n && (a.sourceLabelAngle = t.calculateLabelAngle(e1, "source"), a.targetLabelAngle = t.calculateLabelAngle(e1, "target"));
            };
            var _u = {}, Bu = !1;
            _u.getNodeShape = function(e1) {
                var t = e1.pstyle("shape").value;
                if ("cutrectangle" === t && (e1.width() < 28 || e1.height() < 28)) return Bu || (Ue("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), Bu = !0), "rectangle";
                if (e1.isParent()) return "rectangle" === t || "roundrectangle" === t || "round-rectangle" === t || "cutrectangle" === t || "cut-rectangle" === t || "barrel" === t ? t : "rectangle";
                if ("polygon" === t) {
                    var n = e1.pstyle("shape-polygon-points").value;
                    return this.nodeShapes.makePolygon(n).name;
                }
                return t;
            };
            var Du = {
                registerCalculationListeners: function() {
                    var e1 = this.cy, t = e1.collection(), n = this, a = function enqueue(e1) {
                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        if (t.merge(e1), n) for(var a = 0; a < e1.length; a++){
                            var i = e1[a]._private.rstyle;
                            i.clean = !1, i.cleanConnected = !1;
                        }
                    };
                    n.binder(e1).on("bounds.* dirty.*", function onDirtyBounds(e1) {
                        var t = e1.target;
                        a(t);
                    }).on("style.* background.*", function onDirtyStyle(e1) {
                        var t = e1.target;
                        a(t, !1);
                    });
                    var i = function updateEleCalcs(i) {
                        if (i) {
                            var o = n.onUpdateEleCalcsFns;
                            t.cleanStyle();
                            for(var s = 0; s < t.length; s++){
                                var l = t[s], u = l._private.rstyle;
                                l.isNode() && !u.cleanConnected && (a(l.connectedEdges()), u.cleanConnected = !0);
                            }
                            if (o) for(var c = 0; c < o.length; c++){
                                (0, o[c])(i, t);
                            }
                            n.recalculateRenderedStyle(t), t = e1.collection();
                        }
                    };
                    n.flushRenderedStyleQueue = function() {
                        i(!0);
                    }, n.beforeRender(i, n.beforeRenderPriorities.eleCalcs);
                },
                onUpdateEleCalcs: function(e1) {
                    (this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || []).push(e1);
                },
                recalculateRenderedStyle: function(e1, t) {
                    var n = function isCleanConnected(e1) {
                        return e1._private.rstyle.cleanConnected;
                    };
                    if (0 !== e1.length) {
                        var a = [], i = [];
                        if (!this.destroyed) {
                            void 0 === t && (t = !0);
                            for(var o = 0; o < e1.length; o++){
                                var s = e1[o], l = s._private, u = l.rstyle;
                                !s.isEdge() || n(s.source()) && n(s.target()) || (u.clean = !1), s.isEdge() && s.isBundledBezier() && s.parallelEdges().some(function(e1) {
                                    return !e1._private.rstyle.clean && e1.isBundledBezier();
                                }) && (u.clean = !1), t && u.clean || s.removed() || "none" !== s.pstyle("display").value && ("nodes" === l.group ? i.push(s) : a.push(s), u.clean = !0);
                            }
                            for(var c = 0; c < i.length; c++){
                                var d = i[c], h = d._private.rstyle, p = d.position();
                                this.recalculateNodeLabelProjection(d), h.nodeX = p.x, h.nodeY = p.y, h.nodeW = d.pstyle("width").pfValue, h.nodeH = d.pstyle("height").pfValue;
                            }
                            this.recalculateEdgeProjections(a);
                            for(var g = 0; g < a.length; g++){
                                var v = a[g]._private, y = v.rstyle, m = v.rscratch;
                                y.srcX = m.arrowStartX, y.srcY = m.arrowStartY, y.tgtX = m.arrowEndX, y.tgtY = m.arrowEndY, y.midX = m.midX, y.midY = m.midY, y.labelAngle = m.labelAngle, y.sourceLabelAngle = m.sourceLabelAngle, y.targetLabelAngle = m.targetLabelAngle;
                            }
                        }
                    }
                }
            }, Au = {
                updateCachedGrabbedEles: function() {
                    var e1 = this.cachedZSortedEles;
                    if (e1) {
                        e1.drag = [], e1.nondrag = [];
                        for(var t = [], n = 0; n < e1.length; n++){
                            var a = (i = e1[n])._private.rscratch;
                            i.grabbed() && !i.isParent() ? t.push(i) : a.inDragLayer ? e1.drag.push(i) : e1.nondrag.push(i);
                        }
                        for(n = 0; n < t.length; n++){
                            var i = t[n];
                            e1.drag.push(i);
                        }
                    }
                },
                invalidateCachedZSortedEles: function() {
                    this.cachedZSortedEles = null;
                },
                getCachedZSortedEles: function(e1) {
                    if (e1 || !this.cachedZSortedEles) {
                        var t = this.cy.mutableElements().toArray();
                        t.sort(Cs), t.interactive = t.filter(function(e1) {
                            return e1.interactive();
                        }), this.cachedZSortedEles = t, this.updateCachedGrabbedEles();
                    } else t = this.cachedZSortedEles;
                    return t;
                }
            }, Mu = {};
            [
                $l,
                Ql,
                Eu,
                Cu,
                Tu,
                ku,
                _u,
                Du,
                Au
            ].forEach(function(e1) {
                ve(Mu, e1);
            });
            var Iu = {
                getCachedImage: function(e1, t, n) {
                    var a = this.imageCache = this.imageCache || {}, i = a[e1];
                    if (i) return i.image.complete || i.image.addEventListener("load", n), i.image;
                    var o = (i = a[e1] = a[e1] || {}).image = new Image;
                    o.addEventListener("load", n), o.addEventListener("error", function() {
                        o.error = !0;
                    });
                    var s = "data:";
                    return e1.substring(0, 5).toLowerCase() === s || (t = "null" === t ? null : t, o.crossOrigin = t), o.src = e1, o;
                }
            }, Ru = {
                registerBinding: function(e1, t, n, a) {
                    var i = Array.prototype.slice.apply(arguments, [
                        1
                    ]);
                    if (Array.isArray(e1)) {
                        for(var o = [], s = 0; s < e1.length; s++){
                            var l = e1[s];
                            if (void 0 !== l) {
                                var u = this.binder(l);
                                o.push(u.on.apply(u, i));
                            }
                        }
                        return o;
                    }
                    return (u = this.binder(e1)).on.apply(u, i);
                }
            };
            Ru.binder = function(e1) {
                var t = this, n = t.cy.window(), a = e1 === n || e1 === n.document || e1 === n.document.body || function domElement(e1) {
                    return "undefined" != typeof HTMLElement && e1 instanceof HTMLElement;
                }(e1);
                if (null == t.supportsPassiveEvents) {
                    var i = !1;
                    try {
                        var o = Object.defineProperty({}, "passive", {
                            get: function get() {
                                return i = !0, !0;
                            }
                        });
                        n.addEventListener("test", null, o);
                    } catch (e1) {}
                    t.supportsPassiveEvents = i;
                }
                var s = function on(n, i, o) {
                    var s = Array.prototype.slice.call(arguments);
                    return a && t.supportsPassiveEvents && (s[2] = {
                        capture: null != o && o,
                        passive: !1,
                        once: !1
                    }), t.bindings.push({
                        target: e1,
                        args: s
                    }), (e1.addEventListener || e1.on).apply(e1, s), this;
                };
                return {
                    on: s,
                    addEventListener: s,
                    addListener: s,
                    bind: s
                };
            }, Ru.nodeIsDraggable = function(e1) {
                return e1 && e1.isNode() && !e1.locked() && e1.grabbable();
            }, Ru.nodeIsGrabbable = function(e1) {
                return this.nodeIsDraggable(e1) && e1.interactive();
            }, Ru.load = function() {
                var e1 = this, t = e1.cy.window(), n = function isSelected(e1) {
                    return e1.selected();
                }, a = function triggerEvents(t, n, a, i) {
                    null == t && (t = e1.cy);
                    for(var o = 0; o < n.length; o++){
                        var s = n[o];
                        t.emit({
                            originalEvent: a,
                            type: s,
                            position: i
                        });
                    }
                }, i = function isMultSelKeyDown(e1) {
                    return e1.shiftKey || e1.metaKey || e1.ctrlKey;
                }, o = function allowPanningPassthrough(t, n) {
                    var a = !0;
                    if (e1.cy.hasCompoundNodes() && t && t.pannable()) for(var i = 0; n && i < n.length; i++){
                        if ((t = n[i]).isNode() && t.isParent() && !t.pannable()) {
                            a = !1;
                            break;
                        }
                    }
                    else a = !0;
                    return a;
                }, s = function setInDragLayer(e1) {
                    e1[0]._private.rscratch.inDragLayer = !0;
                }, l = function setGrabTarget(e1) {
                    e1[0]._private.rscratch.isGrabTarget = !0;
                }, u = function addToDragList(e1, t) {
                    var n = t.addToList;
                    n.has(e1) || !e1.grabbable() || e1.locked() || (n.merge(e1), function setGrabbed(e1) {
                        e1[0]._private.grabbed = !0;
                    }(e1));
                }, c = function addNodesToDrag(t, n) {
                    n = n || {};
                    var a = t.cy().hasCompoundNodes();
                    n.inDragLayer && (t.forEach(s), t.neighborhood().stdFilter(function(e1) {
                        return !a || e1.isEdge();
                    }).forEach(s)), n.addToList && t.forEach(function(e1) {
                        u(e1, n);
                    }), function addDescendantsToDrag(e1, t) {
                        if (e1.cy().hasCompoundNodes() && (null != t.inDragLayer || null != t.addToList)) {
                            var n = e1.descendants();
                            t.inDragLayer && (n.forEach(s), n.connectedEdges().forEach(s)), t.addToList && u(n, t);
                        }
                    }(t, n), p(t, {
                        inDragLayer: n.inDragLayer
                    }), e1.updateCachedGrabbedEles();
                }, d = c, h = function freeDraggedElements(t) {
                    t && (e1.getCachedZSortedEles().forEach(function(e1) {
                        !function setFreed(e1) {
                            e1[0]._private.grabbed = !1;
                        }(e1), function setOutDragLayer(e1) {
                            e1[0]._private.rscratch.inDragLayer = !1;
                        }(e1), function removeGrabTarget(e1) {
                            e1[0]._private.rscratch.isGrabTarget = !1;
                        }(e1);
                    }), e1.updateCachedGrabbedEles());
                }, p = function updateAncestorsInDragLayer(e1, t) {
                    if ((null != t.inDragLayer || null != t.addToList) && e1.cy().hasCompoundNodes()) {
                        var n = e1.ancestors().orphans();
                        if (!n.same(e1)) {
                            var a = n.descendants().spawnSelf().merge(n).unmerge(e1).unmerge(e1.descendants()), i = a.connectedEdges();
                            t.inDragLayer && (i.forEach(s), a.forEach(s)), t.addToList && a.forEach(function(e1) {
                                u(e1, t);
                            });
                        }
                    }
                }, g = function blurActiveDomElement() {
                    null != document.activeElement && null != document.activeElement.blur && document.activeElement.blur();
                }, v = "undefined" != typeof MutationObserver, y = "undefined" != typeof ResizeObserver;
                v ? (e1.removeObserver = new MutationObserver(function(t) {
                    for(var n = 0; n < t.length; n++){
                        var a = t[n].removedNodes;
                        if (a) for(var i = 0; i < a.length; i++){
                            if (a[i] === e1.container) {
                                e1.destroy();
                                break;
                            }
                        }
                    }
                }), e1.container.parentNode && e1.removeObserver.observe(e1.container.parentNode, {
                    childList: !0
                })) : e1.registerBinding(e1.container, "DOMNodeRemoved", function(t) {
                    e1.destroy();
                });
                var m = Ee(function() {
                    e1.cy.resize();
                }, 100);
                v && (e1.styleObserver = new MutationObserver(m), e1.styleObserver.observe(e1.container, {
                    attributes: !0
                })), e1.registerBinding(t, "resize", m), y && (e1.resizeObserver = new ResizeObserver(m), e1.resizeObserver.observe(e1.container));
                var b = function invalidateCoords() {
                    e1.invalidateContainerClientCoordsCache();
                };
                !function forEachUp(e1, t) {
                    for(; null != e1;)t(e1), e1 = e1.parentNode;
                }(e1.container, function(t) {
                    e1.registerBinding(t, "transitionend", b), e1.registerBinding(t, "animationend", b), e1.registerBinding(t, "scroll", b);
                }), e1.registerBinding(e1.container, "contextmenu", function(e1) {
                    e1.preventDefault();
                });
                var x = function eventInContainer(t) {
                    for(var n = e1.findContainerClientCoords(), a = n[0], i = n[1], o = n[2], s = n[3], l = t.touches ? t.touches : [
                        t
                    ], u = !1, c = 0; c < l.length; c++){
                        var d = l[c];
                        if (a <= d.clientX && d.clientX <= a + o && i <= d.clientY && d.clientY <= i + s) {
                            u = !0;
                            break;
                        }
                    }
                    if (!u) return !1;
                    for(var h = e1.container, p = t.target.parentNode, g = !1; p;){
                        if (p === h) {
                            g = !0;
                            break;
                        }
                        p = p.parentNode;
                    }
                    return !!g;
                };
                e1.registerBinding(e1.container, "mousedown", function mousedownHandler(t) {
                    if (x(t) && (1 !== e1.hoverData.which || 1 === t.which)) {
                        t.preventDefault(), g(), e1.hoverData.capture = !0, e1.hoverData.which = t.which;
                        var n = e1.cy, i = [
                            t.clientX,
                            t.clientY
                        ], o = e1.projectIntoViewport(i[0], i[1]), s = e1.selection, u = e1.findNearestElements(o[0], o[1], !0, !1), h = u[0], p = e1.dragData.possibleDragElements;
                        e1.hoverData.mdownPos = o, e1.hoverData.mdownGPos = i;
                        if (3 == t.which) {
                            e1.hoverData.cxtStarted = !0;
                            var v = {
                                originalEvent: t,
                                type: "cxttapstart",
                                position: {
                                    x: o[0],
                                    y: o[1]
                                }
                            };
                            h ? (h.activate(), h.emit(v), e1.hoverData.down = h) : n.emit(v), e1.hoverData.downTime = (new Date).getTime(), e1.hoverData.cxtDragged = !1;
                        } else if (1 == t.which) {
                            if (h && h.activate(), null != h && e1.nodeIsGrabbable(h)) {
                                var y = function makeEvent(e1) {
                                    return {
                                        originalEvent: t,
                                        type: e1,
                                        position: {
                                            x: o[0],
                                            y: o[1]
                                        }
                                    };
                                };
                                if (l(h), h.selected()) {
                                    p = e1.dragData.possibleDragElements = n.collection();
                                    var m = n.$(function(t) {
                                        return t.isNode() && t.selected() && e1.nodeIsGrabbable(t);
                                    });
                                    c(m, {
                                        addToList: p
                                    }), h.emit(y("grabon")), m.forEach(function triggerGrab(e1) {
                                        e1.emit(y("grab"));
                                    });
                                } else p = e1.dragData.possibleDragElements = n.collection(), d(h, {
                                    addToList: p
                                }), h.emit(y("grabon")).emit(y("grab"));
                                e1.redrawHint("eles", !0), e1.redrawHint("drag", !0);
                            }
                            e1.hoverData.down = h, e1.hoverData.downs = u, e1.hoverData.downTime = (new Date).getTime(), a(h, [
                                "mousedown",
                                "tapstart",
                                "vmousedown"
                            ], t, {
                                x: o[0],
                                y: o[1]
                            }), null == h ? (s[4] = 1, e1.data.bgActivePosistion = {
                                x: o[0],
                                y: o[1]
                            }, e1.redrawHint("select", !0), e1.redraw()) : h.pannable() && (s[4] = 1), function checkForTaphold() {
                                e1.hoverData.tapholdCancelled = !1, clearTimeout(e1.hoverData.tapholdTimeout), e1.hoverData.tapholdTimeout = setTimeout(function() {
                                    if (!e1.hoverData.tapholdCancelled) {
                                        var a = e1.hoverData.down;
                                        a ? a.emit({
                                            originalEvent: t,
                                            type: "taphold",
                                            position: {
                                                x: o[0],
                                                y: o[1]
                                            }
                                        }) : n.emit({
                                            originalEvent: t,
                                            type: "taphold",
                                            position: {
                                                x: o[0],
                                                y: o[1]
                                            }
                                        });
                                    }
                                }, e1.tapholdDuration);
                            }();
                        }
                        s[0] = s[2] = o[0], s[1] = s[3] = o[1];
                    }
                }, !1);
                var w, E, T, k = function getShadowRoot(e1) {
                    var t = e1.getRootNode();
                    if (t && 11 === t.nodeType && void 0 !== t.host) return t;
                }(e1.container);
                e1.registerBinding([
                    t,
                    k
                ], "mousemove", function mousemoveHandler(t) {
                    if (e1.hoverData.capture || x(t)) {
                        var n = !1, s = e1.cy, l = s.zoom(), u = [
                            t.clientX,
                            t.clientY
                        ], d = e1.projectIntoViewport(u[0], u[1]), p = e1.hoverData.mdownPos, g = e1.hoverData.mdownGPos, v = e1.selection, y = null;
                        e1.hoverData.draggingEles || e1.hoverData.dragging || e1.hoverData.selecting || (y = e1.findNearestElement(d[0], d[1], !0, !1));
                        var m, b = e1.hoverData.last, w = e1.hoverData.down, E = [
                            d[0] - v[2],
                            d[1] - v[3]
                        ], T = e1.dragData.possibleDragElements;
                        if (g) {
                            var k = u[0] - g[0], S = k * k, P = u[1] - g[1], _ = S + P * P;
                            e1.hoverData.isOverThresholdDrag = m = _ >= e1.desktopTapThreshold2;
                        }
                        var D = i(t);
                        m && (e1.hoverData.tapholdCancelled = !0);
                        n = !0, a(y, [
                            "mousemove",
                            "vmousemove",
                            "tapdrag"
                        ], t, {
                            x: d[0],
                            y: d[1]
                        });
                        var M = function goIntoBoxMode() {
                            e1.data.bgActivePosistion = void 0, e1.hoverData.selecting || s.emit({
                                originalEvent: t,
                                type: "boxstart",
                                position: {
                                    x: d[0],
                                    y: d[1]
                                }
                            }), v[4] = 1, e1.hoverData.selecting = !0, e1.redrawHint("select", !0), e1.redraw();
                        };
                        if (3 === e1.hoverData.which) {
                            if (m) {
                                var I = {
                                    originalEvent: t,
                                    type: "cxtdrag",
                                    position: {
                                        x: d[0],
                                        y: d[1]
                                    }
                                };
                                w ? w.emit(I) : s.emit(I), e1.hoverData.cxtDragged = !0, e1.hoverData.cxtOver && y === e1.hoverData.cxtOver || (e1.hoverData.cxtOver && e1.hoverData.cxtOver.emit({
                                    originalEvent: t,
                                    type: "cxtdragout",
                                    position: {
                                        x: d[0],
                                        y: d[1]
                                    }
                                }), e1.hoverData.cxtOver = y, y && y.emit({
                                    originalEvent: t,
                                    type: "cxtdragover",
                                    position: {
                                        x: d[0],
                                        y: d[1]
                                    }
                                }));
                            }
                        } else if (e1.hoverData.dragging) {
                            if (n = !0, s.panningEnabled() && s.userPanningEnabled()) {
                                var R;
                                if (e1.hoverData.justStartedPan) {
                                    var L = e1.hoverData.mdownPos;
                                    R = {
                                        x: (d[0] - L[0]) * l,
                                        y: (d[1] - L[1]) * l
                                    }, e1.hoverData.justStartedPan = !1;
                                } else R = {
                                    x: E[0] * l,
                                    y: E[1] * l
                                };
                                s.panBy(R), s.emit("dragpan"), e1.hoverData.dragged = !0;
                            }
                            d = e1.projectIntoViewport(t.clientX, t.clientY);
                        } else if (1 != v[4] || null != w && !w.pannable()) {
                            if (w && w.pannable() && w.active() && w.unactivate(), w && w.grabbed() || y == b || (b && a(b, [
                                "mouseout",
                                "tapdragout"
                            ], t, {
                                x: d[0],
                                y: d[1]
                            }), y && a(y, [
                                "mouseover",
                                "tapdragover"
                            ], t, {
                                x: d[0],
                                y: d[1]
                            }), e1.hoverData.last = y), w) if (m) {
                                if (s.boxSelectionEnabled() && D) w && w.grabbed() && (h(T), w.emit("freeon"), T.emit("free"), e1.dragData.didDrag && (w.emit("dragfreeon"), T.emit("dragfree"))), M();
                                else if (w && w.grabbed() && e1.nodeIsDraggable(w)) {
                                    var N = !e1.dragData.didDrag;
                                    N && e1.redrawHint("eles", !0), e1.dragData.didDrag = !0, e1.hoverData.draggingEles || c(T, {
                                        inDragLayer: !0
                                    });
                                    var O = {
                                        x: 0,
                                        y: 0
                                    };
                                    if (U(E[0]) && U(E[1]) && (O.x += E[0], O.y += E[1], N)) {
                                        var z = e1.hoverData.dragDelta;
                                        z && U(z[0]) && U(z[1]) && (O.x += z[0], O.y += z[1]);
                                    }
                                    e1.hoverData.draggingEles = !0, T.silentShift(O).emit("position drag"), e1.redrawHint("drag", !0), e1.redraw();
                                }
                            } else !function updateDragDelta() {
                                var t = e1.hoverData.dragDelta = e1.hoverData.dragDelta || [];
                                0 === t.length ? (t.push(E[0]), t.push(E[1])) : (t[0] += E[0], t[1] += E[1]);
                            }();
                            n = !0;
                        } else if (m) {
                            if (e1.hoverData.dragging || !s.boxSelectionEnabled() || !D && s.panningEnabled() && s.userPanningEnabled()) {
                                if (!e1.hoverData.selecting && s.panningEnabled() && s.userPanningEnabled()) {
                                    o(w, e1.hoverData.downs) && (e1.hoverData.dragging = !0, e1.hoverData.justStartedPan = !0, v[4] = 0, e1.data.bgActivePosistion = Mt(p), e1.redrawHint("select", !0), e1.redraw());
                                }
                            } else M();
                            w && w.pannable() && w.active() && w.unactivate();
                        }
                        return v[2] = d[0], v[3] = d[1], n ? (t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), !1) : void 0;
                    }
                }, !1), e1.registerBinding(t, "mouseup", function mouseupHandler(t) {
                    if ((1 !== e1.hoverData.which || 1 === t.which || !e1.hoverData.capture) && e1.hoverData.capture) {
                        e1.hoverData.capture = !1;
                        var o = e1.cy, s = e1.projectIntoViewport(t.clientX, t.clientY), l = e1.selection, u = e1.findNearestElement(s[0], s[1], !0, !1), c = e1.dragData.possibleDragElements, d = e1.hoverData.down, p = i(t);
                        if (e1.data.bgActivePosistion && (e1.redrawHint("select", !0), e1.redraw()), e1.hoverData.tapholdCancelled = !0, e1.data.bgActivePosistion = void 0, d && d.unactivate(), 3 === e1.hoverData.which) {
                            var g = {
                                originalEvent: t,
                                type: "cxttapend",
                                position: {
                                    x: s[0],
                                    y: s[1]
                                }
                            };
                            if (d ? d.emit(g) : o.emit(g), !e1.hoverData.cxtDragged) {
                                var v = {
                                    originalEvent: t,
                                    type: "cxttap",
                                    position: {
                                        x: s[0],
                                        y: s[1]
                                    }
                                };
                                d ? d.emit(v) : o.emit(v);
                            }
                            e1.hoverData.cxtDragged = !1, e1.hoverData.which = null;
                        } else if (1 === e1.hoverData.which) {
                            if (a(u, [
                                "mouseup",
                                "tapend",
                                "vmouseup"
                            ], t, {
                                x: s[0],
                                y: s[1]
                            }), e1.dragData.didDrag || e1.hoverData.dragged || e1.hoverData.selecting || e1.hoverData.isOverThresholdDrag || (a(d, [
                                "click",
                                "tap",
                                "vclick"
                            ], t, {
                                x: s[0],
                                y: s[1]
                            }), E = !1, t.timeStamp - T <= o.multiClickDebounceTime() ? (w && clearTimeout(w), E = !0, T = null, a(d, [
                                "dblclick",
                                "dbltap",
                                "vdblclick"
                            ], t, {
                                x: s[0],
                                y: s[1]
                            })) : (w = setTimeout(function() {
                                E || a(d, [
                                    "oneclick",
                                    "onetap",
                                    "voneclick"
                                ], t, {
                                    x: s[0],
                                    y: s[1]
                                });
                            }, o.multiClickDebounceTime()), T = t.timeStamp)), null != d || e1.dragData.didDrag || e1.hoverData.selecting || e1.hoverData.dragged || i(t) || (o.$(n).unselect([
                                "tapunselect"
                            ]), c.length > 0 && e1.redrawHint("eles", !0), e1.dragData.possibleDragElements = c = o.collection()), u != d || e1.dragData.didDrag || e1.hoverData.selecting || null != u && u._private.selectable && (e1.hoverData.dragging || ("additive" === o.selectionType() || p ? u.selected() ? u.unselect([
                                "tapunselect"
                            ]) : u.select([
                                "tapselect"
                            ]) : p || (o.$(n).unmerge(u).unselect([
                                "tapunselect"
                            ]), u.select([
                                "tapselect"
                            ]))), e1.redrawHint("eles", !0)), e1.hoverData.selecting) {
                                var y = o.collection(e1.getAllInBox(l[0], l[1], l[2], l[3]));
                                e1.redrawHint("select", !0), y.length > 0 && e1.redrawHint("eles", !0), o.emit({
                                    type: "boxend",
                                    originalEvent: t,
                                    position: {
                                        x: s[0],
                                        y: s[1]
                                    }
                                });
                                var m = function eleWouldBeSelected(e1) {
                                    return e1.selectable() && !e1.selected();
                                };
                                "additive" === o.selectionType() || p || o.$(n).unmerge(y).unselect(), y.emit("box").stdFilter(m).select().emit("boxselect"), e1.redraw();
                            }
                            if (e1.hoverData.dragging && (e1.hoverData.dragging = !1, e1.redrawHint("select", !0), e1.redrawHint("eles", !0), e1.redraw()), !l[4]) {
                                e1.redrawHint("drag", !0), e1.redrawHint("eles", !0);
                                var b = d && d.grabbed();
                                h(c), b && (d.emit("freeon"), c.emit("free"), e1.dragData.didDrag && (d.emit("dragfreeon"), c.emit("dragfree")));
                            }
                        }
                        l[4] = 0, e1.hoverData.down = null, e1.hoverData.cxtStarted = !1, e1.hoverData.draggingEles = !1, e1.hoverData.selecting = !1, e1.hoverData.isOverThresholdDrag = !1, e1.dragData.didDrag = !1, e1.hoverData.dragged = !1, e1.hoverData.dragDelta = [], e1.hoverData.mdownPos = null, e1.hoverData.mdownGPos = null, e1.hoverData.which = null;
                    }
                }, !1);
                var S, P, _, D, M, I, R, L, N, O, z, V, q, j, W = [], H = 1e5, X = function wheelHandler(t) {
                    var n = !1, a = t.deltaY;
                    if (null == a && (null != t.wheelDeltaY ? a = t.wheelDeltaY / 4 : null != t.wheelDelta && (a = t.wheelDelta / 4)), null == S) if (W.length >= 4) {
                        var i = W;
                        if (S = function allAreDivisibleBy(e1, t) {
                            for(var n = 0; n < e1.length; n++)if (e1[n] % t != 0) return !1;
                            return !0;
                        }(i, 5), !S) {
                            var o = Math.abs(i[0]);
                            S = function allAreSameMagnitude(e1) {
                                for(var t = Math.abs(e1[0]), n = 1; n < e1.length; n++)if (Math.abs(e1[n]) !== t) return !1;
                                return !0;
                            }(i) && o > 5;
                        }
                        if (S) for(var s = 0; s < i.length; s++)H = Math.min(Math.abs(i[s]), H);
                    } else W.push(a), n = !0;
                    else S && (H = Math.min(Math.abs(a), H));
                    if (!e1.scrollingPage) {
                        var l = e1.cy, u = l.zoom(), c = l.pan(), d = e1.projectIntoViewport(t.clientX, t.clientY), h = [
                            d[0] * u + c.x,
                            d[1] * u + c.y
                        ];
                        if (e1.hoverData.draggingEles || e1.hoverData.dragging || e1.hoverData.cxtStarted || function inBoxSelection() {
                            return 0 !== e1.selection[4];
                        }()) t.preventDefault();
                        else if (l.panningEnabled() && l.userPanningEnabled() && l.zoomingEnabled() && l.userZoomingEnabled()) {
                            var p;
                            t.preventDefault(), e1.data.wheelZooming = !0, clearTimeout(e1.data.wheelTimeout), e1.data.wheelTimeout = setTimeout(function() {
                                e1.data.wheelZooming = !1, e1.redrawHint("eles", !0), e1.redraw();
                            }, 150), n && Math.abs(a) > 5 && (a = 5 * Lt(a)), p = a / -250, S && (p /= H, p *= 3), p *= e1.wheelSensitivity, 1 === t.deltaMode && (p *= 33);
                            var g = l.zoom() * Math.pow(10, p);
                            "gesturechange" === t.type && (g = e1.gestureStartZoom * t.scale), l.zoom({
                                level: g,
                                renderedPosition: {
                                    x: h[0],
                                    y: h[1]
                                }
                            }), l.emit("gesturechange" === t.type ? "pinchzoom" : "scrollzoom");
                        }
                    }
                };
                e1.registerBinding(e1.container, "wheel", X, !0), e1.registerBinding(t, "scroll", function scrollHandler(t) {
                    e1.scrollingPage = !0, clearTimeout(e1.scrollingPageTimeout), e1.scrollingPageTimeout = setTimeout(function() {
                        e1.scrollingPage = !1;
                    }, 250);
                }, !0), e1.registerBinding(e1.container, "gesturestart", function gestureStartHandler(t) {
                    e1.gestureStartZoom = e1.cy.zoom(), e1.hasTouchStarted || t.preventDefault();
                }, !0), e1.registerBinding(e1.container, "gesturechange", function(t) {
                    e1.hasTouchStarted || X(t);
                }, !0), e1.registerBinding(e1.container, "mouseout", function mouseOutHandler(t) {
                    var n = e1.projectIntoViewport(t.clientX, t.clientY);
                    e1.cy.emit({
                        originalEvent: t,
                        type: "mouseout",
                        position: {
                            x: n[0],
                            y: n[1]
                        }
                    });
                }, !1), e1.registerBinding(e1.container, "mouseover", function mouseOverHandler(t) {
                    var n = e1.projectIntoViewport(t.clientX, t.clientY);
                    e1.cy.emit({
                        originalEvent: t,
                        type: "mouseover",
                        position: {
                            x: n[0],
                            y: n[1]
                        }
                    });
                }, !1);
                var Y, K, G, Z, Q, J, ee, te = function distance(e1, t, n, a) {
                    return Math.sqrt((n - e1) * (n - e1) + (a - t) * (a - t));
                }, ne = function distanceSq(e1, t, n, a) {
                    return (n - e1) * (n - e1) + (a - t) * (a - t);
                };
                if (e1.registerBinding(e1.container, "touchstart", Y = function touchstartHandler(t) {
                    if (e1.hasTouchStarted = !0, x(t)) {
                        g(), e1.touchData.capture = !0, e1.data.bgActivePosistion = void 0;
                        var n = e1.cy, i = e1.touchData.now, o = e1.touchData.earlier;
                        if (t.touches[0]) {
                            var s = e1.projectIntoViewport(t.touches[0].clientX, t.touches[0].clientY);
                            i[0] = s[0], i[1] = s[1];
                        }
                        if (t.touches[1]) {
                            s = e1.projectIntoViewport(t.touches[1].clientX, t.touches[1].clientY);
                            i[2] = s[0], i[3] = s[1];
                        }
                        if (t.touches[2]) {
                            s = e1.projectIntoViewport(t.touches[2].clientX, t.touches[2].clientY);
                            i[4] = s[0], i[5] = s[1];
                        }
                        if (t.touches[1]) {
                            e1.touchData.singleTouchMoved = !0, h(e1.dragData.touchDragEles);
                            var u = e1.findContainerClientCoords();
                            O = u[0], z = u[1], V = u[2], q = u[3], P = t.touches[0].clientX - O, _ = t.touches[0].clientY - z, D = t.touches[1].clientX - O, M = t.touches[1].clientY - z, j = 0 <= P && P <= V && 0 <= D && D <= V && 0 <= _ && _ <= q && 0 <= M && M <= q;
                            var p = n.pan(), v = n.zoom();
                            I = te(P, _, D, M), R = ne(P, _, D, M), N = [
                                ((L = [
                                    (P + D) / 2,
                                    (_ + M) / 2
                                ])[0] - p.x) / v,
                                (L[1] - p.y) / v
                            ];
                            if (R < 4e4 && !t.touches[2]) {
                                var y = e1.findNearestElement(i[0], i[1], !0, !0), m = e1.findNearestElement(i[2], i[3], !0, !0);
                                return y && y.isNode() ? (y.activate().emit({
                                    originalEvent: t,
                                    type: "cxttapstart",
                                    position: {
                                        x: i[0],
                                        y: i[1]
                                    }
                                }), e1.touchData.start = y) : m && m.isNode() ? (m.activate().emit({
                                    originalEvent: t,
                                    type: "cxttapstart",
                                    position: {
                                        x: i[0],
                                        y: i[1]
                                    }
                                }), e1.touchData.start = m) : n.emit({
                                    originalEvent: t,
                                    type: "cxttapstart",
                                    position: {
                                        x: i[0],
                                        y: i[1]
                                    }
                                }), e1.touchData.start && (e1.touchData.start._private.grabbed = !1), e1.touchData.cxt = !0, e1.touchData.cxtDragged = !1, e1.data.bgActivePosistion = void 0, void e1.redraw();
                            }
                        }
                        if (t.touches[2]) n.boxSelectionEnabled() && t.preventDefault();
                        else if (t.touches[1]) ;
                        else if (t.touches[0]) {
                            var b = e1.findNearestElements(i[0], i[1], !0, !0), w = b[0];
                            if (null != w && (w.activate(), e1.touchData.start = w, e1.touchData.starts = b, e1.nodeIsGrabbable(w))) {
                                var E = e1.dragData.touchDragEles = n.collection(), T = null;
                                e1.redrawHint("eles", !0), e1.redrawHint("drag", !0), w.selected() ? (T = n.$(function(t) {
                                    return t.selected() && e1.nodeIsGrabbable(t);
                                }), c(T, {
                                    addToList: E
                                })) : d(w, {
                                    addToList: E
                                }), l(w);
                                var k = function makeEvent(e1) {
                                    return {
                                        originalEvent: t,
                                        type: e1,
                                        position: {
                                            x: i[0],
                                            y: i[1]
                                        }
                                    };
                                };
                                w.emit(k("grabon")), T ? T.forEach(function(e1) {
                                    e1.emit(k("grab"));
                                }) : w.emit(k("grab"));
                            }
                            a(w, [
                                "touchstart",
                                "tapstart",
                                "vmousedown"
                            ], t, {
                                x: i[0],
                                y: i[1]
                            }), null == w && (e1.data.bgActivePosistion = {
                                x: s[0],
                                y: s[1]
                            }, e1.redrawHint("select", !0), e1.redraw()), e1.touchData.singleTouchMoved = !1, e1.touchData.singleTouchStartTime = +new Date, clearTimeout(e1.touchData.tapholdTimeout), e1.touchData.tapholdTimeout = setTimeout(function() {
                                !1 !== e1.touchData.singleTouchMoved || e1.pinching || e1.touchData.selecting || a(e1.touchData.start, [
                                    "taphold"
                                ], t, {
                                    x: i[0],
                                    y: i[1]
                                });
                            }, e1.tapholdDuration);
                        }
                        if (t.touches.length >= 1) {
                            for(var S = e1.touchData.startPosition = [
                                null,
                                null,
                                null,
                                null,
                                null,
                                null
                            ], W = 0; W < i.length; W++)S[W] = o[W] = i[W];
                            var H = t.touches[0];
                            e1.touchData.startGPosition = [
                                H.clientX,
                                H.clientY
                            ];
                        }
                    }
                }, !1), e1.registerBinding(t, "touchmove", K = function touchmoveHandler(t) {
                    var n = e1.touchData.capture;
                    if (n || x(t)) {
                        var i = e1.selection, s = e1.cy, l = e1.touchData.now, u = e1.touchData.earlier, d = s.zoom();
                        if (t.touches[0]) {
                            var p = e1.projectIntoViewport(t.touches[0].clientX, t.touches[0].clientY);
                            l[0] = p[0], l[1] = p[1];
                        }
                        if (t.touches[1]) {
                            p = e1.projectIntoViewport(t.touches[1].clientX, t.touches[1].clientY);
                            l[2] = p[0], l[3] = p[1];
                        }
                        if (t.touches[2]) {
                            p = e1.projectIntoViewport(t.touches[2].clientX, t.touches[2].clientY);
                            l[4] = p[0], l[5] = p[1];
                        }
                        var g, v = e1.touchData.startGPosition;
                        if (n && t.touches[0] && v) {
                            for(var y = [], m = 0; m < l.length; m++)y[m] = l[m] - u[m];
                            var b = t.touches[0].clientX - v[0], w = b * b, E = t.touches[0].clientY - v[1];
                            g = w + E * E >= e1.touchTapThreshold2;
                        }
                        if (n && e1.touchData.cxt) {
                            t.preventDefault();
                            var T = t.touches[0].clientX - O, k = t.touches[0].clientY - z, S = t.touches[1].clientX - O, L = t.touches[1].clientY - z, V = ne(T, k, S, L);
                            if (V / R >= 2.25 || V >= 22500) {
                                e1.touchData.cxt = !1, e1.data.bgActivePosistion = void 0, e1.redrawHint("select", !0);
                                var q = {
                                    originalEvent: t,
                                    type: "cxttapend",
                                    position: {
                                        x: l[0],
                                        y: l[1]
                                    }
                                };
                                e1.touchData.start ? (e1.touchData.start.unactivate().emit(q), e1.touchData.start = null) : s.emit(q);
                            }
                        }
                        if (n && e1.touchData.cxt) {
                            q = {
                                originalEvent: t,
                                type: "cxtdrag",
                                position: {
                                    x: l[0],
                                    y: l[1]
                                }
                            };
                            e1.data.bgActivePosistion = void 0, e1.redrawHint("select", !0), e1.touchData.start ? e1.touchData.start.emit(q) : s.emit(q), e1.touchData.start && (e1.touchData.start._private.grabbed = !1), e1.touchData.cxtDragged = !0;
                            var W = e1.findNearestElement(l[0], l[1], !0, !0);
                            e1.touchData.cxtOver && W === e1.touchData.cxtOver || (e1.touchData.cxtOver && e1.touchData.cxtOver.emit({
                                originalEvent: t,
                                type: "cxtdragout",
                                position: {
                                    x: l[0],
                                    y: l[1]
                                }
                            }), e1.touchData.cxtOver = W, W && W.emit({
                                originalEvent: t,
                                type: "cxtdragover",
                                position: {
                                    x: l[0],
                                    y: l[1]
                                }
                            }));
                        } else if (n && t.touches[2] && s.boxSelectionEnabled()) t.preventDefault(), e1.data.bgActivePosistion = void 0, this.lastThreeTouch = +new Date, e1.touchData.selecting || s.emit({
                            originalEvent: t,
                            type: "boxstart",
                            position: {
                                x: l[0],
                                y: l[1]
                            }
                        }), e1.touchData.selecting = !0, e1.touchData.didSelect = !0, i[4] = 1, i && 0 !== i.length && void 0 !== i[0] ? (i[2] = (l[0] + l[2] + l[4]) / 3, i[3] = (l[1] + l[3] + l[5]) / 3) : (i[0] = (l[0] + l[2] + l[4]) / 3, i[1] = (l[1] + l[3] + l[5]) / 3, i[2] = (l[0] + l[2] + l[4]) / 3 + 1, i[3] = (l[1] + l[3] + l[5]) / 3 + 1), e1.redrawHint("select", !0), e1.redraw();
                        else if (n && t.touches[1] && !e1.touchData.didSelect && s.zoomingEnabled() && s.panningEnabled() && s.userZoomingEnabled() && s.userPanningEnabled()) {
                            if (t.preventDefault(), e1.data.bgActivePosistion = void 0, e1.redrawHint("select", !0), se = e1.dragData.touchDragEles) {
                                e1.redrawHint("drag", !0);
                                for(var H = 0; H < se.length; H++){
                                    var X = se[H]._private;
                                    X.grabbed = !1, X.rscratch.inDragLayer = !1;
                                }
                            }
                            var Y = e1.touchData.start, K = (T = t.touches[0].clientX - O, k = t.touches[0].clientY - z, S = t.touches[1].clientX - O, L = t.touches[1].clientY - z, te(T, k, S, L)), G = K / I;
                            if (j) {
                                var Z = (T - P + (S - D)) / 2, Q = (k - _ + (L - M)) / 2, J = s.zoom(), ee = J * G, re = s.pan(), ae = N[0] * J + re.x, ie = N[1] * J + re.y, oe = {
                                    x: -ee / J * (ae - re.x - Z) + ae,
                                    y: -ee / J * (ie - re.y - Q) + ie
                                };
                                if (Y && Y.active()) {
                                    var se = e1.dragData.touchDragEles;
                                    h(se), e1.redrawHint("drag", !0), e1.redrawHint("eles", !0), Y.unactivate().emit("freeon"), se.emit("free"), e1.dragData.didDrag && (Y.emit("dragfreeon"), se.emit("dragfree"));
                                }
                                s.viewport({
                                    zoom: ee,
                                    pan: oe,
                                    cancelOnFailedZoom: !0
                                }), s.emit("pinchzoom"), I = K, P = T, _ = k, D = S, M = L, e1.pinching = !0;
                            }
                            if (t.touches[0]) {
                                p = e1.projectIntoViewport(t.touches[0].clientX, t.touches[0].clientY);
                                l[0] = p[0], l[1] = p[1];
                            }
                            if (t.touches[1]) {
                                p = e1.projectIntoViewport(t.touches[1].clientX, t.touches[1].clientY);
                                l[2] = p[0], l[3] = p[1];
                            }
                            if (t.touches[2]) {
                                p = e1.projectIntoViewport(t.touches[2].clientX, t.touches[2].clientY);
                                l[4] = p[0], l[5] = p[1];
                            }
                        } else if (t.touches[0] && !e1.touchData.didSelect) {
                            var le = e1.touchData.start, ue = e1.touchData.last;
                            if (e1.hoverData.draggingEles || e1.swipePanning || (W = e1.findNearestElement(l[0], l[1], !0, !0)), n && null != le && t.preventDefault(), n && null != le && e1.nodeIsDraggable(le)) if (g) {
                                se = e1.dragData.touchDragEles;
                                var ce = !e1.dragData.didDrag;
                                ce && c(se, {
                                    inDragLayer: !0
                                }), e1.dragData.didDrag = !0;
                                var de = {
                                    x: 0,
                                    y: 0
                                };
                                if (U(y[0]) && U(y[1])) {
                                    if (de.x += y[0], de.y += y[1], ce) e1.redrawHint("eles", !0), (he = e1.touchData.dragDelta) && U(he[0]) && U(he[1]) && (de.x += he[0], de.y += he[1]);
                                }
                                e1.hoverData.draggingEles = !0, se.silentShift(de).emit("position drag"), e1.redrawHint("drag", !0), e1.touchData.startPosition[0] == u[0] && e1.touchData.startPosition[1] == u[1] && e1.redrawHint("eles", !0), e1.redraw();
                            } else {
                                var he;
                                0 === (he = e1.touchData.dragDelta = e1.touchData.dragDelta || []).length ? (he.push(y[0]), he.push(y[1])) : (he[0] += y[0], he[1] += y[1]);
                            }
                            if (a(le || W, [
                                "touchmove",
                                "tapdrag",
                                "vmousemove"
                            ], t, {
                                x: l[0],
                                y: l[1]
                            }), le && le.grabbed() || W == ue || (ue && ue.emit({
                                originalEvent: t,
                                type: "tapdragout",
                                position: {
                                    x: l[0],
                                    y: l[1]
                                }
                            }), W && W.emit({
                                originalEvent: t,
                                type: "tapdragover",
                                position: {
                                    x: l[0],
                                    y: l[1]
                                }
                            })), e1.touchData.last = W, n) for(H = 0; H < l.length; H++)l[H] && e1.touchData.startPosition[H] && g && (e1.touchData.singleTouchMoved = !0);
                            if (n && (null == le || le.pannable()) && s.panningEnabled() && s.userPanningEnabled()) {
                                o(le, e1.touchData.starts) && (t.preventDefault(), e1.data.bgActivePosistion || (e1.data.bgActivePosistion = Mt(e1.touchData.startPosition)), e1.swipePanning ? (s.panBy({
                                    x: y[0] * d,
                                    y: y[1] * d
                                }), s.emit("dragpan")) : g && (e1.swipePanning = !0, s.panBy({
                                    x: b * d,
                                    y: E * d
                                }), s.emit("dragpan"), le && (le.unactivate(), e1.redrawHint("select", !0), e1.touchData.start = null)));
                                p = e1.projectIntoViewport(t.touches[0].clientX, t.touches[0].clientY);
                                l[0] = p[0], l[1] = p[1];
                            }
                        }
                        for(m = 0; m < l.length; m++)u[m] = l[m];
                        n && t.touches.length > 0 && !e1.hoverData.draggingEles && !e1.swipePanning && null != e1.data.bgActivePosistion && (e1.data.bgActivePosistion = void 0, e1.redrawHint("select", !0), e1.redraw());
                    }
                }, !1), e1.registerBinding(t, "touchcancel", G = function touchcancelHandler(t) {
                    var n = e1.touchData.start;
                    e1.touchData.capture = !1, n && n.unactivate();
                }), e1.registerBinding(t, "touchend", Z = function touchendHandler(t) {
                    var i = e1.touchData.start;
                    if (e1.touchData.capture) {
                        0 === t.touches.length && (e1.touchData.capture = !1), t.preventDefault();
                        var o = e1.selection;
                        e1.swipePanning = !1, e1.hoverData.draggingEles = !1;
                        var s, l = e1.cy, u = l.zoom(), c = e1.touchData.now, d = e1.touchData.earlier;
                        if (t.touches[0]) {
                            var p = e1.projectIntoViewport(t.touches[0].clientX, t.touches[0].clientY);
                            c[0] = p[0], c[1] = p[1];
                        }
                        if (t.touches[1]) {
                            p = e1.projectIntoViewport(t.touches[1].clientX, t.touches[1].clientY);
                            c[2] = p[0], c[3] = p[1];
                        }
                        if (t.touches[2]) {
                            p = e1.projectIntoViewport(t.touches[2].clientX, t.touches[2].clientY);
                            c[4] = p[0], c[5] = p[1];
                        }
                        if (i && i.unactivate(), e1.touchData.cxt) {
                            if (s = {
                                originalEvent: t,
                                type: "cxttapend",
                                position: {
                                    x: c[0],
                                    y: c[1]
                                }
                            }, i ? i.emit(s) : l.emit(s), !e1.touchData.cxtDragged) {
                                var g = {
                                    originalEvent: t,
                                    type: "cxttap",
                                    position: {
                                        x: c[0],
                                        y: c[1]
                                    }
                                };
                                i ? i.emit(g) : l.emit(g);
                            }
                            return e1.touchData.start && (e1.touchData.start._private.grabbed = !1), e1.touchData.cxt = !1, e1.touchData.start = null, void e1.redraw();
                        }
                        if (!t.touches[2] && l.boxSelectionEnabled() && e1.touchData.selecting) {
                            e1.touchData.selecting = !1;
                            var v = l.collection(e1.getAllInBox(o[0], o[1], o[2], o[3]));
                            o[0] = void 0, o[1] = void 0, o[2] = void 0, o[3] = void 0, o[4] = 0, e1.redrawHint("select", !0), l.emit({
                                type: "boxend",
                                originalEvent: t,
                                position: {
                                    x: c[0],
                                    y: c[1]
                                }
                            });
                            v.emit("box").stdFilter(function eleWouldBeSelected(e1) {
                                return e1.selectable() && !e1.selected();
                            }).select().emit("boxselect"), v.nonempty() && e1.redrawHint("eles", !0), e1.redraw();
                        }
                        if (null != i && i.unactivate(), t.touches[2]) e1.data.bgActivePosistion = void 0, e1.redrawHint("select", !0);
                        else if (t.touches[1]) ;
                        else if (t.touches[0]) ;
                        else if (!t.touches[0]) {
                            e1.data.bgActivePosistion = void 0, e1.redrawHint("select", !0);
                            var y = e1.dragData.touchDragEles;
                            if (null != i) {
                                var m = i._private.grabbed;
                                h(y), e1.redrawHint("drag", !0), e1.redrawHint("eles", !0), m && (i.emit("freeon"), y.emit("free"), e1.dragData.didDrag && (i.emit("dragfreeon"), y.emit("dragfree"))), a(i, [
                                    "touchend",
                                    "tapend",
                                    "vmouseup",
                                    "tapdragout"
                                ], t, {
                                    x: c[0],
                                    y: c[1]
                                }), i.unactivate(), e1.touchData.start = null;
                            } else {
                                var b = e1.findNearestElement(c[0], c[1], !0, !0);
                                a(b, [
                                    "touchend",
                                    "tapend",
                                    "vmouseup",
                                    "tapdragout"
                                ], t, {
                                    x: c[0],
                                    y: c[1]
                                });
                            }
                            var x = e1.touchData.startPosition[0] - c[0], w = x * x, E = e1.touchData.startPosition[1] - c[1], T = (w + E * E) * u * u;
                            e1.touchData.singleTouchMoved || (i || l.$(":selected").unselect([
                                "tapunselect"
                            ]), a(i, [
                                "tap",
                                "vclick"
                            ], t, {
                                x: c[0],
                                y: c[1]
                            }), Q = !1, t.timeStamp - ee <= l.multiClickDebounceTime() ? (J && clearTimeout(J), Q = !0, ee = null, a(i, [
                                "dbltap",
                                "vdblclick"
                            ], t, {
                                x: c[0],
                                y: c[1]
                            })) : (J = setTimeout(function() {
                                Q || a(i, [
                                    "onetap",
                                    "voneclick"
                                ], t, {
                                    x: c[0],
                                    y: c[1]
                                });
                            }, l.multiClickDebounceTime()), ee = t.timeStamp)), null != i && !e1.dragData.didDrag && i._private.selectable && T < e1.touchTapThreshold2 && !e1.pinching && ("single" === l.selectionType() ? (l.$(n).unmerge(i).unselect([
                                "tapunselect"
                            ]), i.select([
                                "tapselect"
                            ])) : i.selected() ? i.unselect([
                                "tapunselect"
                            ]) : i.select([
                                "tapselect"
                            ]), e1.redrawHint("eles", !0)), e1.touchData.singleTouchMoved = !0;
                        }
                        for(var k = 0; k < c.length; k++)d[k] = c[k];
                        e1.dragData.didDrag = !1, 0 === t.touches.length && (e1.touchData.dragDelta = [], e1.touchData.startPosition = [
                            null,
                            null,
                            null,
                            null,
                            null,
                            null
                        ], e1.touchData.startGPosition = null, e1.touchData.didSelect = !1), t.touches.length < 2 && (1 === t.touches.length && (e1.touchData.startGPosition = [
                            t.touches[0].clientX,
                            t.touches[0].clientY
                        ]), e1.pinching = !1, e1.redrawHint("eles", !0), e1.redraw());
                    }
                }, !1), "undefined" == typeof TouchEvent) {
                    var re = [], ae = function makeTouch(e1) {
                        return {
                            clientX: e1.clientX,
                            clientY: e1.clientY,
                            force: 1,
                            identifier: e1.pointerId,
                            pageX: e1.pageX,
                            pageY: e1.pageY,
                            radiusX: e1.width / 2,
                            radiusY: e1.height / 2,
                            screenX: e1.screenX,
                            screenY: e1.screenY,
                            target: e1.target
                        };
                    }, ie = function addPointer(e1) {
                        re.push(function makePointer(e1) {
                            return {
                                event: e1,
                                touch: ae(e1)
                            };
                        }(e1));
                    }, oe = function removePointer(e1) {
                        for(var t = 0; t < re.length; t++){
                            if (re[t].event.pointerId === e1.pointerId) return void re.splice(t, 1);
                        }
                    }, se = function addTouchesToEvent(e1) {
                        e1.touches = re.map(function(e1) {
                            return e1.touch;
                        });
                    }, le = function pointerIsMouse(e1) {
                        return "mouse" === e1.pointerType || 4 === e1.pointerType;
                    };
                    e1.registerBinding(e1.container, "pointerdown", function(e1) {
                        le(e1) || (e1.preventDefault(), ie(e1), se(e1), Y(e1));
                    }), e1.registerBinding(e1.container, "pointerup", function(e1) {
                        le(e1) || (oe(e1), se(e1), Z(e1));
                    }), e1.registerBinding(e1.container, "pointercancel", function(e1) {
                        le(e1) || (oe(e1), se(e1), G());
                    }), e1.registerBinding(e1.container, "pointermove", function(e1) {
                        le(e1) || (e1.preventDefault(), function updatePointer(e1) {
                            var t = re.filter(function(t) {
                                return t.event.pointerId === e1.pointerId;
                            })[0];
                            t.event = e1, t.touch = ae(e1);
                        }(e1), se(e1), K(e1));
                    });
                }
            };
            var Lu = {
                generatePolygon: function(e1, t) {
                    return this.nodeShapes[e1] = {
                        renderer: this,
                        name: e1,
                        points: t,
                        draw: function draw(e1, t, n, a, i, o) {
                            this.renderer.nodeShapeImpl("polygon", e1, t, n, a, i, this.points);
                        },
                        intersectLine: function intersectLine(e1, t, n, a, i, o, s, l) {
                            return pn(i, o, this.points, e1, t, n / 2, a / 2, s);
                        },
                        checkPoint: function checkPoint(e1, t, n, a, i, o, s, l) {
                            return an(e1, t, this.points, o, s, a, i, [
                                0,
                                -1
                            ], n);
                        }
                    };
                }
            };
            Lu.generateEllipse = function() {
                return this.nodeShapes.ellipse = {
                    renderer: this,
                    name: "ellipse",
                    draw: function draw(e1, t, n, a, i, o) {
                        this.renderer.nodeShapeImpl(this.name, e1, t, n, a, i);
                    },
                    intersectLine: function intersectLine(e1, t, n, a, i, o, s, l) {
                        return function intersectLineEllipse(e1, t, n, a, i, o) {
                            var s = n - e1, l = a - t;
                            s /= i, l /= o;
                            var u = Math.sqrt(s * s + l * l), c = u - 1;
                            if (c < 0) return [];
                            var d = c / u;
                            return [
                                (n - e1) * d + e1,
                                (a - t) * d + t
                            ];
                        }(i, o, e1, t, n / 2 + s, a / 2 + s);
                    },
                    checkPoint: function checkPoint(e1, t, n, a, i, o, s, l) {
                        return un(e1, t, a, i, o, s, n);
                    }
                };
            }, Lu.generateRoundPolygon = function(e1, t) {
                return this.nodeShapes[e1] = {
                    renderer: this,
                    name: e1,
                    points: t,
                    getOrCreateCorners: function getOrCreateCorners(e1, n, a, i, o, s, l) {
                        if (void 0 !== s[l] && s[l + "-cx"] === e1 && s[l + "-cy"] === n) return s[l];
                        s[l] = new Array(t.length / 2), s[l + "-cx"] = e1, s[l + "-cy"] = n;
                        var u = a / 2, c = i / 2;
                        o = "auto" === o ? xn(a, i) : o;
                        for(var d = new Array(t.length / 2), h = 0; h < t.length / 2; h++)d[h] = {
                            x: e1 + u * t[2 * h],
                            y: n + c * t[2 * h + 1]
                        };
                        var p, g, v, y, m = d.length;
                        for(g = d[m - 1], p = 0; p < m; p++)v = d[p % m], y = d[(p + 1) % m], s[l][p] = getRoundCorner(g, v, y, o), g = v, v = y;
                        return s[l];
                    },
                    draw: function draw(e1, t, n, a, i, o, s) {
                        this.renderer.nodeShapeImpl("round-polygon", e1, t, n, a, i, this.points, this.getOrCreateCorners(t, n, a, i, o, s, "drawCorners"));
                    },
                    intersectLine: function intersectLine(e1, t, n, a, i, o, s, l, u) {
                        return function roundPolygonIntersectLine(e1, t, n, a, i, o, s, l, u) {
                            var c, d = [], h = new Array(2 * n.length);
                            u.forEach(function(n, o) {
                                0 === o ? (h[h.length - 2] = n.startX, h[h.length - 1] = n.startY) : (h[4 * o - 2] = n.startX, h[4 * o - 1] = n.startY), h[4 * o] = n.stopX, h[4 * o + 1] = n.stopY, 0 !== (c = cn(e1, t, a, i, n.cx, n.cy, n.radius)).length && d.push(c[0], c[1]);
                            });
                            for(var p = 0; p < h.length / 4; p++)0 !== (c = hn(e1, t, a, i, h[4 * p], h[4 * p + 1], h[4 * p + 2], h[4 * p + 3], !1)).length && d.push(c[0], c[1]);
                            if (d.length > 2) {
                                for(var g = [
                                    d[0],
                                    d[1]
                                ], v = Math.pow(g[0] - e1, 2) + Math.pow(g[1] - t, 2), y = 1; y < d.length / 2; y++){
                                    var m = Math.pow(d[2 * y] - e1, 2) + Math.pow(d[2 * y + 1] - t, 2);
                                    m <= v && (g[0] = d[2 * y], g[1] = d[2 * y + 1], v = m);
                                }
                                return g;
                            }
                            return d;
                        }(i, o, this.points, e1, t, 0, 0, 0, this.getOrCreateCorners(e1, t, n, a, l, u, "corners"));
                    },
                    checkPoint: function checkPoint(e1, t, n, a, i, o, s, l, u) {
                        return function pointInsideRoundPolygon(e1, t, n, a, i, o, s, l) {
                            for(var u = new Array(2 * n.length), c = 0; c < l.length; c++){
                                var d = l[c];
                                if (u[4 * c + 0] = d.startX, u[4 * c + 1] = d.startY, u[4 * c + 2] = d.stopX, u[4 * c + 3] = d.stopY, Math.pow(d.cx - e1, 2) + Math.pow(d.cy - t, 2) <= Math.pow(d.radius, 2)) return !0;
                            }
                            return rn(e1, t, u);
                        }(e1, t, this.points, 0, 0, 0, 0, this.getOrCreateCorners(o, s, a, i, l, u, "corners"));
                    }
                };
            }, Lu.generateRoundRectangle = function() {
                return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
                    renderer: this,
                    name: "round-rectangle",
                    points: vn(4, 0),
                    draw: function draw(e1, t, n, a, i, o) {
                        this.renderer.nodeShapeImpl(this.name, e1, t, n, a, i, this.points, o);
                    },
                    intersectLine: function intersectLine(e1, t, n, a, i, o, s, l) {
                        return Qt(i, o, e1, t, n, a, s, l);
                    },
                    checkPoint: function checkPoint(e1, t, n, a, i, o, s, l) {
                        var u = a / 2, c = i / 2;
                        l = "auto" === l ? bn(a, i) : l;
                        var d = 2 * (l = Math.min(u, c, l));
                        return !!an(e1, t, this.points, o, s, a, i - d, [
                            0,
                            -1
                        ], n) || !!an(e1, t, this.points, o, s, a - d, i, [
                            0,
                            -1
                        ], n) || !!un(e1, t, d, d, o - u + l, s - c + l, n) || !!un(e1, t, d, d, o + u - l, s - c + l, n) || !!un(e1, t, d, d, o + u - l, s + c - l, n) || !!un(e1, t, d, d, o - u + l, s + c - l, n);
                    }
                };
            }, Lu.generateCutRectangle = function() {
                return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
                    renderer: this,
                    name: "cut-rectangle",
                    cornerLength: 8,
                    points: vn(4, 0),
                    draw: function draw(e1, t, n, a, i, o) {
                        this.renderer.nodeShapeImpl(this.name, e1, t, n, a, i, null, o);
                    },
                    generateCutTrianglePts: function generateCutTrianglePts(e1, t, n, a, i) {
                        var o = "auto" === i ? this.cornerLength : i, s = t / 2, l = e1 / 2, u = n - l, c = n + l, d = a - s, h = a + s;
                        return {
                            topLeft: [
                                u,
                                d + o,
                                u + o,
                                d,
                                u + o,
                                d + o
                            ],
                            topRight: [
                                c - o,
                                d,
                                c,
                                d + o,
                                c - o,
                                d + o
                            ],
                            bottomRight: [
                                c,
                                h - o,
                                c - o,
                                h,
                                c - o,
                                h - o
                            ],
                            bottomLeft: [
                                u + o,
                                h,
                                u,
                                h - o,
                                u + o,
                                h - o
                            ]
                        };
                    },
                    intersectLine: function intersectLine(e1, t, n, a, i, o, s, l) {
                        var u = this.generateCutTrianglePts(n + 2 * s, a + 2 * s, e1, t, l), c = [].concat.apply([], [
                            u.topLeft.splice(0, 4),
                            u.topRight.splice(0, 4),
                            u.bottomRight.splice(0, 4),
                            u.bottomLeft.splice(0, 4)
                        ]);
                        return pn(i, o, c, e1, t);
                    },
                    checkPoint: function checkPoint(e1, t, n, a, i, o, s, l) {
                        var u = "auto" === l ? this.cornerLength : l;
                        if (an(e1, t, this.points, o, s, a, i - 2 * u, [
                            0,
                            -1
                        ], n)) return !0;
                        if (an(e1, t, this.points, o, s, a - 2 * u, i, [
                            0,
                            -1
                        ], n)) return !0;
                        var c = this.generateCutTrianglePts(a, i, o, s);
                        return rn(e1, t, c.topLeft) || rn(e1, t, c.topRight) || rn(e1, t, c.bottomRight) || rn(e1, t, c.bottomLeft);
                    }
                };
            }, Lu.generateBarrel = function() {
                return this.nodeShapes.barrel = {
                    renderer: this,
                    name: "barrel",
                    points: vn(4, 0),
                    draw: function draw(e1, t, n, a, i, o) {
                        this.renderer.nodeShapeImpl(this.name, e1, t, n, a, i);
                    },
                    intersectLine: function intersectLine(e1, t, n, a, i, o, s, l) {
                        var u = this.generateBarrelBezierPts(n + 2 * s, a + 2 * s, e1, t), c = function approximateBarrelCurvePts(e1) {
                            var t = Vt({
                                x: e1[0],
                                y: e1[1]
                            }, {
                                x: e1[2],
                                y: e1[3]
                            }, {
                                x: e1[4],
                                y: e1[5]
                            }, .15), n = Vt({
                                x: e1[0],
                                y: e1[1]
                            }, {
                                x: e1[2],
                                y: e1[3]
                            }, {
                                x: e1[4],
                                y: e1[5]
                            }, .5), a = Vt({
                                x: e1[0],
                                y: e1[1]
                            }, {
                                x: e1[2],
                                y: e1[3]
                            }, {
                                x: e1[4],
                                y: e1[5]
                            }, .85);
                            return [
                                e1[0],
                                e1[1],
                                t.x,
                                t.y,
                                n.x,
                                n.y,
                                a.x,
                                a.y,
                                e1[4],
                                e1[5]
                            ];
                        }, d = [].concat(c(u.topLeft), c(u.topRight), c(u.bottomRight), c(u.bottomLeft));
                        return pn(i, o, d, e1, t);
                    },
                    generateBarrelBezierPts: function generateBarrelBezierPts(e1, t, n, a) {
                        var i = t / 2, o = e1 / 2, s = n - o, l = n + o, u = a - i, c = a + i, d = wn(e1, t), h = d.heightOffset, p = d.widthOffset, g = d.ctrlPtOffsetPct * e1, v = {
                            topLeft: [
                                s,
                                u + h,
                                s + g,
                                u,
                                s + p,
                                u
                            ],
                            topRight: [
                                l - p,
                                u,
                                l - g,
                                u,
                                l,
                                u + h
                            ],
                            bottomRight: [
                                l,
                                c - h,
                                l - g,
                                c,
                                l - p,
                                c
                            ],
                            bottomLeft: [
                                s + p,
                                c,
                                s + g,
                                c,
                                s,
                                c - h
                            ]
                        };
                        return v.topLeft.isTop = !0, v.topRight.isTop = !0, v.bottomLeft.isBottom = !0, v.bottomRight.isBottom = !0, v;
                    },
                    checkPoint: function checkPoint(e1, t, n, a, i, o, s, l) {
                        var u = wn(a, i), c = u.heightOffset, d = u.widthOffset;
                        if (an(e1, t, this.points, o, s, a, i - 2 * c, [
                            0,
                            -1
                        ], n)) return !0;
                        if (an(e1, t, this.points, o, s, a - 2 * d, i, [
                            0,
                            -1
                        ], n)) return !0;
                        for(var h = this.generateBarrelBezierPts(a, i, o, s), p = function getCurveT(e1, t, n) {
                            var a = n[4], i = n[2], o = n[0], s = n[5], l = n[1], u = Math.min(a, o), c = Math.max(a, o), d = Math.min(s, l), h = Math.max(s, l);
                            if (u <= e1 && e1 <= c && d <= t && t <= h) {
                                var p = function bezierPtsToQuadCoeff(e1, t, n) {
                                    return [
                                        e1 - 2 * t + n,
                                        2 * (t - e1),
                                        e1
                                    ];
                                }(a, i, o), g = (function solveQuadratic(e1, t, n, a) {
                                    var i = t * t - 4 * e1 * (n -= a);
                                    if (i < 0) return [];
                                    var o = Math.sqrt(i), s = 2 * e1;
                                    return [
                                        (-t + o) / s,
                                        (-t - o) / s
                                    ];
                                })(p[0], p[1], p[2], e1).filter(function(e1) {
                                    return 0 <= e1 && e1 <= 1;
                                });
                                if (g.length > 0) return g[0];
                            }
                            return null;
                        }, g = Object.keys(h), v = 0; v < g.length; v++){
                            var y = h[g[v]], m = p(e1, t, y);
                            if (null != m) {
                                var b = y[5], x = y[3], w = y[1], E = Ft(b, x, w, m);
                                if (y.isTop && E <= t) return !0;
                                if (y.isBottom && t <= E) return !0;
                            }
                        }
                        return !1;
                    }
                };
            }, Lu.generateBottomRoundrectangle = function() {
                return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
                    renderer: this,
                    name: "bottom-round-rectangle",
                    points: vn(4, 0),
                    draw: function draw(e1, t, n, a, i, o) {
                        this.renderer.nodeShapeImpl(this.name, e1, t, n, a, i, this.points, o);
                    },
                    intersectLine: function intersectLine(e1, t, n, a, i, o, s, l) {
                        var u = t - (a / 2 + s), c = hn(i, o, e1, t, e1 - (n / 2 + s), u, e1 + (n / 2 + s), u, !1);
                        return c.length > 0 ? c : Qt(i, o, e1, t, n, a, s, l);
                    },
                    checkPoint: function checkPoint(e1, t, n, a, i, o, s, l) {
                        var u = 2 * (l = "auto" === l ? bn(a, i) : l);
                        if (an(e1, t, this.points, o, s, a, i - u, [
                            0,
                            -1
                        ], n)) return !0;
                        if (an(e1, t, this.points, o, s, a - u, i, [
                            0,
                            -1
                        ], n)) return !0;
                        var c = a / 2 + 2 * n, d = i / 2 + 2 * n;
                        return !!rn(e1, t, [
                            o - c,
                            s - d,
                            o - c,
                            s,
                            o + c,
                            s,
                            o + c,
                            s - d
                        ]) || !!un(e1, t, u, u, o + a / 2 - l, s + i / 2 - l, n) || !!un(e1, t, u, u, o - a / 2 + l, s + i / 2 - l, n);
                    }
                };
            }, Lu.registerNodeShapes = function() {
                var e1 = this.nodeShapes = {}, t = this;
                this.generateEllipse(), this.generatePolygon("triangle", vn(3, 0)), this.generateRoundPolygon("round-triangle", vn(3, 0)), this.generatePolygon("rectangle", vn(4, 0)), e1.square = e1.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
                var n = [
                    0,
                    1,
                    1,
                    0,
                    0,
                    -1,
                    -1,
                    0
                ];
                this.generatePolygon("diamond", n), this.generateRoundPolygon("round-diamond", n), this.generatePolygon("pentagon", vn(5, 0)), this.generateRoundPolygon("round-pentagon", vn(5, 0)), this.generatePolygon("hexagon", vn(6, 0)), this.generateRoundPolygon("round-hexagon", vn(6, 0)), this.generatePolygon("heptagon", vn(7, 0)), this.generateRoundPolygon("round-heptagon", vn(7, 0)), this.generatePolygon("octagon", vn(8, 0)), this.generateRoundPolygon("round-octagon", vn(8, 0));
                var a = new Array(20), i = mn(5, 0), o = mn(5, Math.PI / 5), s = .5 * (3 - Math.sqrt(5));
                s *= 1.57;
                for(var l = 0; l < o.length / 2; l++)o[2 * l] *= s, o[2 * l + 1] *= s;
                for(l = 0; l < 5; l++)a[4 * l] = i[2 * l], a[4 * l + 1] = i[2 * l + 1], a[4 * l + 2] = o[2 * l], a[4 * l + 3] = o[2 * l + 1];
                a = yn(a), this.generatePolygon("star", a), this.generatePolygon("vee", [
                    -1,
                    -1,
                    0,
                    -.333,
                    1,
                    -1,
                    0,
                    1
                ]), this.generatePolygon("rhomboid", [
                    -1,
                    -1,
                    .333,
                    -1,
                    1,
                    1,
                    -.333,
                    1
                ]), this.generatePolygon("right-rhomboid", [
                    -.333,
                    -1,
                    1,
                    -1,
                    .333,
                    1,
                    -1,
                    1
                ]), this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [
                    -1,
                    -.95,
                    -.75,
                    0,
                    -1,
                    .95,
                    1,
                    .95,
                    .75,
                    0,
                    1,
                    -.95
                ]);
                var u = [
                    -1,
                    -1,
                    .25,
                    -1,
                    1,
                    0,
                    .25,
                    1,
                    -1,
                    1
                ];
                this.generatePolygon("tag", u), this.generateRoundPolygon("round-tag", u), e1.makePolygon = function(e1) {
                    var n, a = "polygon-" + e1.join("$");
                    return (n = this[a]) ? n : t.generatePolygon(a, e1);
                };
            };
            var Nu = {
                timeToRender: function() {
                    return this.redrawTotalTime / this.redrawCount;
                },
                redraw: function(e1) {
                    e1 = e1 || Je();
                    var t = this;
                    void 0 === t.averageRedrawTime && (t.averageRedrawTime = 0), void 0 === t.lastRedrawTime && (t.lastRedrawTime = 0), void 0 === t.lastDrawTime && (t.lastDrawTime = 0), t.requestedFrame = !0, t.renderOptions = e1;
                },
                beforeRender: function(e1, t) {
                    if (!this.destroyed) {
                        null == t && Ke("Priority is not optional for beforeRender");
                        var n = this.beforeRenderCallbacks;
                        n.push({
                            fn: e1,
                            priority: t
                        }), n.sort(function(e1, t) {
                            return t.priority - e1.priority;
                        });
                    }
                }
            }, Ou = function beforeRenderCallbacks(e1, t, n) {
                for(var a = e1.beforeRenderCallbacks, i = 0; i < a.length; i++)a[i].fn(t, n);
            };
            Nu.startRenderLoop = function() {
                var e1 = this, t = e1.cy;
                if (!e1.renderLoopStarted) {
                    e1.renderLoopStarted = !0;
                    var n = function renderFn(a) {
                        if (!e1.destroyed) {
                            if (t.batching()) ;
                            else if (e1.requestedFrame && !e1.skipFrame) {
                                Ou(e1, !0, a);
                                var i = Pe();
                                e1.render(e1.renderOptions);
                                var o = e1.lastDrawTime = Pe();
                                void 0 === e1.averageRedrawTime && (e1.averageRedrawTime = o - i), void 0 === e1.redrawCount && (e1.redrawCount = 0), e1.redrawCount++, void 0 === e1.redrawTotalTime && (e1.redrawTotalTime = 0);
                                var s = o - i;
                                e1.redrawTotalTime += s, e1.lastRedrawTime = s, e1.averageRedrawTime = e1.averageRedrawTime / 2 + s / 2, e1.requestedFrame = !1;
                            } else Ou(e1, !1, a);
                            e1.skipFrame = !1, Se(n);
                        }
                    };
                    Se(n);
                }
            };
            var zu = function BaseRenderer(e1) {
                this.init(e1);
            }, Fu = zu.prototype;
            Fu.clientFunctions = [
                "redrawHint",
                "render",
                "renderTo",
                "matchCanvasSize",
                "nodeShapeImpl",
                "arrowShapeImpl"
            ], Fu.init = function(e1) {
                var t = this;
                t.options = e1, t.cy = e1.cy;
                var n = t.container = e1.cy.container(), a = t.cy.window();
                if (a) {
                    var i = a.document, o = i.head, s = "__________cytoscape_stylesheet", l = "__________cytoscape_container", u = null != i.getElementById(s);
                    if (n.className.indexOf(l) < 0 && (n.className = (n.className || "") + " " + l), !u) {
                        var c = i.createElement("style");
                        c.id = s, c.textContent = "." + l + " { position: relative; }", o.insertBefore(c, o.children[0]);
                    }
                    "static" === a.getComputedStyle(n).getPropertyValue("position") && Ue("A Cytoscape container has style position:static and so can not use UI extensions properly");
                }
                t.selection = [
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    0
                ], t.bezierProjPcts = [
                    .05,
                    .225,
                    .4,
                    .5,
                    .6,
                    .775,
                    .95
                ], t.hoverData = {
                    down: null,
                    last: null,
                    downTime: null,
                    triggerMode: null,
                    dragging: !1,
                    initialPan: [
                        null,
                        null
                    ],
                    capture: !1
                }, t.dragData = {
                    possibleDragElements: []
                }, t.touchData = {
                    start: null,
                    capture: !1,
                    startPosition: [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    singleTouchStartTime: null,
                    singleTouchMoved: !0,
                    now: [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    earlier: [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                }, t.redraws = 0, t.showFps = e1.showFps, t.debug = e1.debug, t.webgl = e1.webgl, t.hideEdgesOnViewport = e1.hideEdgesOnViewport, t.textureOnViewport = e1.textureOnViewport, t.wheelSensitivity = e1.wheelSensitivity, t.motionBlurEnabled = e1.motionBlur, t.forcedPixelRatio = U(e1.pixelRatio) ? e1.pixelRatio : null, t.motionBlur = e1.motionBlur, t.motionBlurOpacity = e1.motionBlurOpacity, t.motionBlurTransparency = 1 - t.motionBlurOpacity, t.motionBlurPxRatio = 1, t.mbPxRBlurry = 1, t.minMbLowQualFrames = 4, t.fullQualityMb = !1, t.clearedForMotionBlur = [], t.desktopTapThreshold = e1.desktopTapThreshold, t.desktopTapThreshold2 = e1.desktopTapThreshold * e1.desktopTapThreshold, t.touchTapThreshold = e1.touchTapThreshold, t.touchTapThreshold2 = e1.touchTapThreshold * e1.touchTapThreshold, t.tapholdDuration = 500, t.bindings = [], t.beforeRenderCallbacks = [], t.beforeRenderPriorities = {
                    animations: 400,
                    eleCalcs: 300,
                    eleTxrDeq: 200,
                    lyrTxrDeq: 150,
                    lyrTxrSkip: 100
                }, t.registerNodeShapes(), t.registerArrowShapes(), t.registerCalculationListeners();
            }, Fu.notify = function(e1, t) {
                var n = this, a = n.cy;
                this.destroyed || ("init" !== e1 ? "destroy" !== e1 ? (("add" === e1 || "remove" === e1 || "move" === e1 && a.hasCompoundNodes() || "load" === e1 || "zorder" === e1 || "mount" === e1) && n.invalidateCachedZSortedEles(), "viewport" === e1 && n.redrawHint("select", !0), "gc" === e1 && n.redrawHint("gc", !0), "load" !== e1 && "resize" !== e1 && "mount" !== e1 || (n.invalidateContainerClientCoordsCache(), n.matchCanvasSize(n.container)), n.redrawHint("eles", !0), n.redrawHint("drag", !0), this.startRenderLoop(), this.redraw()) : n.destroy() : n.load());
            }, Fu.destroy = function() {
                var e1 = this;
                e1.destroyed = !0, e1.cy.stopAnimationLoop();
                for(var t = 0; t < e1.bindings.length; t++){
                    var n = e1.bindings[t], a = n.target;
                    (a.off || a.removeEventListener).apply(a, n.args);
                }
                if (e1.bindings = [], e1.beforeRenderCallbacks = [], e1.onUpdateEleCalcsFns = [], e1.removeObserver && e1.removeObserver.disconnect(), e1.styleObserver && e1.styleObserver.disconnect(), e1.resizeObserver && e1.resizeObserver.disconnect(), e1.labelCalcDiv) try {
                    document.body.removeChild(e1.labelCalcDiv);
                } catch (e1) {}
            }, Fu.isHeadless = function() {
                return !1;
            }, [
                Zl,
                Mu,
                Iu,
                Ru,
                Lu,
                Nu
            ].forEach(function(e1) {
                ve(Fu, e1);
            });
            var Vu = 1e3 / 60, qu = function setupDequeueing(e1) {
                return function setupDequeueingImpl() {
                    var t = this, n = this.renderer;
                    if (!t.dequeueingSetup) {
                        t.dequeueingSetup = !0;
                        var a = Ee(function() {
                            n.redrawHint("eles", !0), n.redrawHint("drag", !0), n.redraw();
                        }, e1.deqRedrawThreshold), i = e1.priority || Ye;
                        n.beforeRender(function dequeue(i, o) {
                            var s = Pe(), l = n.averageRedrawTime, u = n.lastRedrawTime, c = [], d = n.cy.extent(), h = n.getPixelRatio();
                            for(i || n.flushRenderedStyleQueue();;){
                                var p = Pe(), g = p - s, v = p - o;
                                if (u < Vu) {
                                    var y = Vu - (i ? l : 0);
                                    if (v >= e1.deqFastCost * y) break;
                                } else if (i) {
                                    if (g >= e1.deqCost * u || g >= e1.deqAvgCost * l) break;
                                } else if (v >= e1.deqNoDrawCost * Vu) break;
                                var m = e1.deq(t, h, d);
                                if (!(m.length > 0)) break;
                                for(var b = 0; b < m.length; b++)c.push(m[b]);
                            }
                            c.length > 0 && (e1.onDeqd(t, c), !i && e1.shouldRedraw(t, c, h, d) && a());
                        }, i(t));
                    }
                };
            }, ju = function() {
                return _createClass(function ElementTextureCacheLookup(e1) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : He;
                    _classCallCheck(this, ElementTextureCacheLookup), this.idsByKey = new it, this.keyForId = new it, this.cachesByLvl = new it, this.lvls = [], this.getKey = e1, this.doesEleInvalidateKey = t;
                }, [
                    {
                        key: "getIdsFor",
                        value: function getIdsFor(e1) {
                            null == e1 && Ke("Can not get id list for null key");
                            var t = this.idsByKey, n = this.idsByKey.get(e1);
                            return n || (n = new st, t.set(e1, n)), n;
                        }
                    },
                    {
                        key: "addIdForKey",
                        value: function addIdForKey(e1, t) {
                            null != e1 && this.getIdsFor(e1).add(t);
                        }
                    },
                    {
                        key: "deleteIdForKey",
                        value: function deleteIdForKey(e1, t) {
                            null != e1 && this.getIdsFor(e1).delete(t);
                        }
                    },
                    {
                        key: "getNumberOfIdsForKey",
                        value: function getNumberOfIdsForKey(e1) {
                            return null == e1 ? 0 : this.getIdsFor(e1).size;
                        }
                    },
                    {
                        key: "updateKeyMappingFor",
                        value: function updateKeyMappingFor(e1) {
                            var t = e1.id(), n = this.keyForId.get(t), a = this.getKey(e1);
                            this.deleteIdForKey(n, t), this.addIdForKey(a, t), this.keyForId.set(t, a);
                        }
                    },
                    {
                        key: "deleteKeyMappingFor",
                        value: function deleteKeyMappingFor(e1) {
                            var t = e1.id(), n = this.keyForId.get(t);
                            this.deleteIdForKey(n, t), this.keyForId.delete(t);
                        }
                    },
                    {
                        key: "keyHasChangedFor",
                        value: function keyHasChangedFor(e1) {
                            var t = e1.id();
                            return this.keyForId.get(t) !== this.getKey(e1);
                        }
                    },
                    {
                        key: "isInvalid",
                        value: function isInvalid(e1) {
                            return this.keyHasChangedFor(e1) || this.doesEleInvalidateKey(e1);
                        }
                    },
                    {
                        key: "getCachesAt",
                        value: function getCachesAt(e1) {
                            var t = this.cachesByLvl, n = this.lvls, a = t.get(e1);
                            return a || (a = new it, t.set(e1, a), n.push(e1)), a;
                        }
                    },
                    {
                        key: "getCache",
                        value: function getCache(e1, t) {
                            return this.getCachesAt(t).get(e1);
                        }
                    },
                    {
                        key: "get",
                        value: function get(e1, t) {
                            var n = this.getKey(e1), a = this.getCache(n, t);
                            return null != a && this.updateKeyMappingFor(e1), a;
                        }
                    },
                    {
                        key: "getForCachedKey",
                        value: function getForCachedKey(e1, t) {
                            var n = this.keyForId.get(e1.id());
                            return this.getCache(n, t);
                        }
                    },
                    {
                        key: "hasCache",
                        value: function hasCache(e1, t) {
                            return this.getCachesAt(t).has(e1);
                        }
                    },
                    {
                        key: "has",
                        value: function has(e1, t) {
                            var n = this.getKey(e1);
                            return this.hasCache(n, t);
                        }
                    },
                    {
                        key: "setCache",
                        value: function setCache(e1, t, n) {
                            n.key = e1, this.getCachesAt(t).set(e1, n);
                        }
                    },
                    {
                        key: "set",
                        value: function set(e1, t, n) {
                            var a = this.getKey(e1);
                            this.setCache(a, t, n), this.updateKeyMappingFor(e1);
                        }
                    },
                    {
                        key: "deleteCache",
                        value: function deleteCache(e1, t) {
                            this.getCachesAt(t).delete(e1);
                        }
                    },
                    {
                        key: "delete",
                        value: function _delete(e1, t) {
                            var n = this.getKey(e1);
                            this.deleteCache(n, t);
                        }
                    },
                    {
                        key: "invalidateKey",
                        value: function invalidateKey(e1) {
                            var t = this;
                            this.lvls.forEach(function(n) {
                                return t.deleteCache(e1, n);
                            });
                        }
                    },
                    {
                        key: "invalidate",
                        value: function invalidate(e1) {
                            var t = e1.id(), n = this.keyForId.get(t);
                            this.deleteKeyMappingFor(e1);
                            var a = this.doesEleInvalidateKey(e1);
                            return a && this.invalidateKey(n), a || 0 === this.getNumberOfIdsForKey(n);
                        }
                    }
                ]);
            }(), Wu = 7.99, Hu = {
                dequeue: "dequeue",
                downscale: "downscale",
                highQuality: "highQuality"
            }, Xu = et({
                getKey: null,
                doesEleInvalidateKey: He,
                drawElement: null,
                getBoundingBox: null,
                getRotationPoint: null,
                getRotationOffset: null,
                isVisible: We,
                allowEdgeTxrCaching: !0,
                allowParentTxrCaching: !0
            }), Yu = function ElementTextureCache(e1, t) {
                var n = this;
                n.renderer = e1, n.onDequeues = [];
                var a = Xu(t);
                ve(n, a), n.lookup = new ju(a.getKey, a.doesEleInvalidateKey), n.setupDequeueing();
            }, Ku = Yu.prototype;
            Ku.reasons = Hu, Ku.getTextureQueue = function(e1) {
                var t = this;
                return t.eleImgCaches = t.eleImgCaches || {}, t.eleImgCaches[e1] = t.eleImgCaches[e1] || [];
            }, Ku.getRetiredTextureQueue = function(e1) {
                var t = this.eleImgCaches.retired = this.eleImgCaches.retired || {};
                return t[e1] = t[e1] || [];
            }, Ku.getElementQueue = function() {
                return this.eleCacheQueue = this.eleCacheQueue || new vt(function(e1, t) {
                    return t.reqs - e1.reqs;
                });
            }, Ku.getElementKeyToQueue = function() {
                return this.eleKeyToCacheQueue = this.eleKeyToCacheQueue || {};
            }, Ku.getElement = function(e1, t, n, a, i) {
                var o = this, s = this.renderer, l = s.cy.zoom(), u = this.lookup;
                if (!t || 0 === t.w || 0 === t.h || isNaN(t.w) || isNaN(t.h) || !e1.visible() || e1.removed()) return null;
                if (!o.allowEdgeTxrCaching && e1.isEdge() || !o.allowParentTxrCaching && e1.isParent()) return null;
                if (null == a && (a = Math.ceil(Rt(l * n))), a < -4) a = -4;
                else if (l >= 7.99 || a > 3) return null;
                var c = Math.pow(2, a), d = t.h * c, h = t.w * c, p = s.eleTextBiggerThanMin(e1, c);
                if (!this.isVisible(e1, p)) return null;
                var g, v = u.get(e1, a);
                if (v && v.invalidated && (v.invalidated = !1, v.texture.invalidatedWidth -= v.width), v) return v;
                if (g = d <= 25 ? 25 : d <= 50 ? 50 : 50 * Math.ceil(d / 50), d > 1024 || h > 1024) return null;
                var y = o.getTextureQueue(g), m = y[y.length - 2], b = function addNewTxr() {
                    return o.recycleTexture(g, h) || o.addTexture(g, h);
                };
                m || (m = y[y.length - 1]), m || (m = b()), m.width - m.usedWidth < h && (m = b());
                for(var x, w = function scalableFrom(e1) {
                    return e1 && e1.scaledLabelShown === p;
                }, E = i && i === Hu.dequeue, T = i && i === Hu.highQuality, k = i && i === Hu.downscale, S = a + 1; S <= 3; S++){
                    var P = u.get(e1, S);
                    if (P) {
                        x = P;
                        break;
                    }
                }
                var _ = x && x.level === a + 1 ? x : null, D = function downscale() {
                    m.context.drawImage(_.texture.canvas, _.x, 0, _.width, _.height, m.usedWidth, 0, h, d);
                };
                if (m.context.setTransform(1, 0, 0, 1, 0, 0), m.context.clearRect(m.usedWidth, 0, h, g), w(_)) D();
                else if (w(x)) {
                    if (!T) return o.queueElement(e1, x.level - 1), x;
                    for(var M = x.level; M > a; M--)_ = o.getElement(e1, t, n, M, Hu.downscale);
                    D();
                } else {
                    var I;
                    if (!E && !T && !k) for(var R = a - 1; R >= -4; R--){
                        var L = u.get(e1, R);
                        if (L) {
                            I = L;
                            break;
                        }
                    }
                    if (w(I)) return o.queueElement(e1, a), I;
                    m.context.translate(m.usedWidth, 0), m.context.scale(c, c), this.drawElement(m.context, e1, t, p, !1), m.context.scale(1 / c, 1 / c), m.context.translate(-m.usedWidth, 0);
                }
                return v = {
                    x: m.usedWidth,
                    texture: m,
                    level: a,
                    scale: c,
                    width: h,
                    height: d,
                    scaledLabelShown: p
                }, m.usedWidth += Math.ceil(h + 8), m.eleCaches.push(v), u.set(e1, a, v), o.checkTextureFullness(m), v;
            }, Ku.invalidateElements = function(e1) {
                for(var t = 0; t < e1.length; t++)this.invalidateElement(e1[t]);
            }, Ku.invalidateElement = function(e1) {
                var t = this, n = t.lookup, a = [];
                if (n.isInvalid(e1)) {
                    for(var i = -4; i <= 3; i++){
                        var o = n.getForCachedKey(e1, i);
                        o && a.push(o);
                    }
                    if (n.invalidate(e1)) for(var s = 0; s < a.length; s++){
                        var l = a[s], u = l.texture;
                        u.invalidatedWidth += l.width, l.invalidated = !0, t.checkTextureUtility(u);
                    }
                    t.removeFromQueue(e1);
                }
            }, Ku.checkTextureUtility = function(e1) {
                e1.invalidatedWidth >= .2 * e1.width && this.retireTexture(e1);
            }, Ku.checkTextureFullness = function(e1) {
                var t = this.getTextureQueue(e1.height);
                e1.usedWidth / e1.width > .8 && e1.fullnessChecks >= 10 ? tt(t, e1) : e1.fullnessChecks++;
            }, Ku.retireTexture = function(e1) {
                var t = e1.height, n = this.getTextureQueue(t), a = this.lookup;
                tt(n, e1), e1.retired = !0;
                for(var i = e1.eleCaches, o = 0; o < i.length; o++){
                    var s = i[o];
                    a.deleteCache(s.key, s.level);
                }
                nt(i), this.getRetiredTextureQueue(t).push(e1);
            }, Ku.addTexture = function(e1, t) {
                var n = {};
                return this.getTextureQueue(e1).push(n), n.eleCaches = [], n.height = e1, n.width = Math.max(1024, t), n.usedWidth = 0, n.invalidatedWidth = 0, n.fullnessChecks = 0, n.canvas = this.renderer.makeOffscreenCanvas(n.width, n.height), n.context = n.canvas.getContext("2d"), n;
            }, Ku.recycleTexture = function(e1, t) {
                for(var n = this.getTextureQueue(e1), a = this.getRetiredTextureQueue(e1), i = 0; i < a.length; i++){
                    var o = a[i];
                    if (o.width >= t) return o.retired = !1, o.usedWidth = 0, o.invalidatedWidth = 0, o.fullnessChecks = 0, nt(o.eleCaches), o.context.setTransform(1, 0, 0, 1, 0, 0), o.context.clearRect(0, 0, o.width, o.height), tt(a, o), n.push(o), o;
                }
            }, Ku.queueElement = function(e1, t) {
                var n = this.getElementQueue(), a = this.getElementKeyToQueue(), i = this.getKey(e1), o = a[i];
                if (o) o.level = Math.max(o.level, t), o.eles.merge(e1), o.reqs++, n.updateItem(o);
                else {
                    var s = {
                        eles: e1.spawn().merge(e1),
                        level: t,
                        reqs: 1,
                        key: i
                    };
                    n.push(s), a[i] = s;
                }
            }, Ku.dequeue = function(e1) {
                for(var t = this, n = t.getElementQueue(), a = t.getElementKeyToQueue(), i = [], o = t.lookup, s = 0; s < 1 && n.size() > 0; s++){
                    var l = n.pop(), u = l.key, c = l.eles[0], d = o.hasCache(c, l.level);
                    if (a[u] = null, !d) {
                        i.push(l);
                        var h = t.getBoundingBox(c);
                        t.getElement(c, h, e1, l.level, Hu.dequeue);
                    }
                }
                return i;
            }, Ku.removeFromQueue = function(e1) {
                var t = this.getElementQueue(), n = this.getElementKeyToQueue(), a = this.getKey(e1), i = n[a];
                null != i && (1 === i.eles.length ? (i.reqs = je, t.updateItem(i), t.pop(), n[a] = null) : i.eles.unmerge(e1));
            }, Ku.onDequeue = function(e1) {
                this.onDequeues.push(e1);
            }, Ku.offDequeue = function(e1) {
                tt(this.onDequeues, e1);
            }, Ku.setupDequeueing = qu({
                deqRedrawThreshold: 100,
                deqCost: .15,
                deqAvgCost: .1,
                deqNoDrawCost: .9,
                deqFastCost: .9,
                deq: function deq(e1, t, n) {
                    return e1.dequeue(t, n);
                },
                onDeqd: function onDeqd(e1, t) {
                    for(var n = 0; n < e1.onDequeues.length; n++){
                        (0, e1.onDequeues[n])(t);
                    }
                },
                shouldRedraw: function shouldRedraw(e1, t, n, a) {
                    for(var i = 0; i < t.length; i++)for(var o = t[i].eles, s = 0; s < o.length; s++){
                        var l = o[s].boundingBox();
                        if (Gt(l, a)) return !0;
                    }
                    return !1;
                },
                priority: function priority(e1) {
                    return e1.renderer.beforeRenderPriorities.eleTxrDeq;
                }
            });
            var Gu = function LayeredTextureCache(e1) {
                var t = this, n = t.renderer = e1, a = n.cy;
                t.layersByLevel = {}, t.firstGet = !0, t.lastInvalidationTime = Pe() - 500, t.skipping = !1, t.eleTxrDeqs = a.collection(), t.scheduleElementRefinement = Ee(function() {
                    t.refineElementTextures(t.eleTxrDeqs), t.eleTxrDeqs.unmerge(t.eleTxrDeqs);
                }, 50), n.beforeRender(function(e1, n) {
                    n - t.lastInvalidationTime <= 250 ? t.skipping = !0 : t.skipping = !1;
                }, n.beforeRenderPriorities.lyrTxrSkip);
                t.layersQueue = new vt(function qSort(e1, t) {
                    return t.reqs - e1.reqs;
                }), t.setupDequeueing();
            }, Uu = Gu.prototype, Zu = 0, $u = Math.pow(2, 53) - 1;
            Uu.makeLayer = function(e1, t) {
                var n = Math.pow(2, t), a = Math.ceil(e1.w * n), i = Math.ceil(e1.h * n), o = this.renderer.makeOffscreenCanvas(a, i), s = {
                    id: Zu = ++Zu % $u,
                    bb: e1,
                    level: t,
                    width: a,
                    height: i,
                    canvas: o,
                    context: o.getContext("2d"),
                    eles: [],
                    elesQueue: [],
                    reqs: 0
                }, l = s.context, u = -s.bb.x1, c = -s.bb.y1;
                return l.scale(n, n), l.translate(u, c), s;
            }, Uu.getLayers = function(e1, t, n) {
                var a = this, i = a.renderer.cy.zoom(), o = a.firstGet;
                if (a.firstGet = !1, null == n) {
                    if ((n = Math.ceil(Rt(i * t))) < -4) n = -4;
                    else if (i >= 3.99 || n > 2) return null;
                }
                a.validateLayersElesOrdering(n, e1);
                var s, l, u = a.layersByLevel, c = Math.pow(2, n), d = u[n] = u[n] || [];
                if (a.levelIsComplete(n, e1)) return d;
                !function checkTempLevels() {
                    var t = function canUseAsTmpLvl(t) {
                        if (a.validateLayersElesOrdering(t, e1), a.levelIsComplete(t, e1)) return l = u[t], !0;
                    }, i = function checkLvls(e1) {
                        if (!l) for(var a = n + e1; -4 <= a && a <= 2 && !t(a); a += e1);
                    };
                    i(1), i(-1);
                    for(var o = d.length - 1; o >= 0; o--){
                        var s = d[o];
                        s.invalid && tt(d, s);
                    }
                }();
                var h = function makeLayer(t) {
                    var i = (t = t || {}).after;
                    !function getBb() {
                        if (!s) {
                            s = jt();
                            for(var t = 0; t < e1.length; t++)Wt(s, e1[t].boundingBox());
                        }
                    }();
                    var o = Math.ceil(s.w * c), l = Math.ceil(s.h * c);
                    if (o > 32767 || l > 32767) return null;
                    if (o * l > 16e6) return null;
                    var u = a.makeLayer(s, n);
                    if (null != i) {
                        var h = d.indexOf(i) + 1;
                        d.splice(h, 0, u);
                    } else (void 0 === t.insert || t.insert) && d.unshift(u);
                    return u;
                };
                if (a.skipping && !o) return null;
                for(var p = null, g = e1.length / 1, v = !o, y = 0; y < e1.length; y++){
                    var m = e1[y], b = m._private.rscratch, x = b.imgLayerCaches = b.imgLayerCaches || {}, w = x[n];
                    if (w) p = w;
                    else {
                        if ((!p || p.eles.length >= g || !$t(p.bb, m.boundingBox())) && !(p = h({
                            insert: !0,
                            after: p
                        }))) return null;
                        l || v ? a.queueLayer(p, m) : a.drawEleInLayer(p, m, n, t), p.eles.push(m), x[n] = p;
                    }
                }
                return l || (v ? null : d);
            }, Uu.getEleLevelForLayerLevel = function(e1, t) {
                return e1;
            }, Uu.drawEleInLayer = function(e1, t, n, a) {
                var i = this.renderer, o = e1.context, s = t.boundingBox();
                0 !== s.w && 0 !== s.h && t.visible() && (n = this.getEleLevelForLayerLevel(n, a), i.setImgSmoothing(o, !1), i.drawCachedElement(o, t, null, null, n, true), i.setImgSmoothing(o, !0));
            }, Uu.levelIsComplete = function(e1, t) {
                var n = this.layersByLevel[e1];
                if (!n || 0 === n.length) return !1;
                for(var a = 0, i = 0; i < n.length; i++){
                    var o = n[i];
                    if (o.reqs > 0) return !1;
                    if (o.invalid) return !1;
                    a += o.eles.length;
                }
                return a === t.length;
            }, Uu.validateLayersElesOrdering = function(e1, t) {
                var n = this.layersByLevel[e1];
                if (n) for(var a = 0; a < n.length; a++){
                    for(var i = n[a], o = -1, s = 0; s < t.length; s++)if (i.eles[0] === t[s]) {
                        o = s;
                        break;
                    }
                    if (o < 0) this.invalidateLayer(i);
                    else {
                        var l = o;
                        for(s = 0; s < i.eles.length; s++)if (i.eles[s] !== t[l + s]) {
                            this.invalidateLayer(i);
                            break;
                        }
                    }
                }
            }, Uu.updateElementsInLayers = function(e1, t) {
                for(var n = J(e1[0]), a = 0; a < e1.length; a++)for(var i = n ? null : e1[a], o = n ? e1[a] : e1[a].ele, s = o._private.rscratch, l = s.imgLayerCaches = s.imgLayerCaches || {}, u = -4; u <= 2; u++){
                    var c = l[u];
                    c && (i && this.getEleLevelForLayerLevel(c.level) !== i.level || t(c, o, i));
                }
            }, Uu.haveLayers = function() {
                for(var e1 = !1, t = -4; t <= 2; t++){
                    var n = this.layersByLevel[t];
                    if (n && n.length > 0) {
                        e1 = !0;
                        break;
                    }
                }
                return e1;
            }, Uu.invalidateElements = function(e1) {
                var t = this;
                0 !== e1.length && (t.lastInvalidationTime = Pe(), 0 !== e1.length && t.haveLayers() && t.updateElementsInLayers(e1, function invalAssocLayers(e1, n, a) {
                    t.invalidateLayer(e1);
                }));
            }, Uu.invalidateLayer = function(e1) {
                if (this.lastInvalidationTime = Pe(), !e1.invalid) {
                    var t = e1.level, n = e1.eles, a = this.layersByLevel[t];
                    tt(a, e1), e1.elesQueue = [], e1.invalid = !0, e1.replacement && (e1.replacement.invalid = !0);
                    for(var i = 0; i < n.length; i++){
                        var o = n[i]._private.rscratch.imgLayerCaches;
                        o && (o[t] = null);
                    }
                }
            }, Uu.refineElementTextures = function(e1) {
                var t = this;
                t.updateElementsInLayers(e1, function refineEachEle(e1, n, a) {
                    var i = e1.replacement;
                    if (i || ((i = e1.replacement = t.makeLayer(e1.bb, e1.level)).replaces = e1, i.eles = e1.eles), !i.reqs) for(var o = 0; o < i.eles.length; o++)t.queueLayer(i, i.eles[o]);
                });
            }, Uu.enqueueElementRefinement = function(e1) {
                this.eleTxrDeqs.merge(e1), this.scheduleElementRefinement();
            }, Uu.queueLayer = function(e1, t) {
                var n = this.layersQueue, a = e1.elesQueue, i = a.hasId = a.hasId || {};
                if (!e1.replacement) {
                    if (t) {
                        if (i[t.id()]) return;
                        a.push(t), i[t.id()] = !0;
                    }
                    e1.reqs ? (e1.reqs++, n.updateItem(e1)) : (e1.reqs = 1, n.push(e1));
                }
            }, Uu.dequeue = function(e1) {
                for(var t = this, n = t.layersQueue, a = [], i = 0; i < 1 && 0 !== n.size();){
                    var o = n.peek();
                    if (o.replacement) n.pop();
                    else if (o.replaces && o !== o.replaces.replacement) n.pop();
                    else if (o.invalid) n.pop();
                    else {
                        var s = o.elesQueue.shift();
                        s && (t.drawEleInLayer(o, s, o.level, e1), i++), 0 === a.length && a.push(!0), 0 === o.elesQueue.length && (n.pop(), o.reqs = 0, o.replaces && t.applyLayerReplacement(o), t.requestRedraw());
                    }
                }
                return a;
            }, Uu.applyLayerReplacement = function(e1) {
                var t = this.layersByLevel[e1.level], n = e1.replaces, a = t.indexOf(n);
                if (!(a < 0 || n.invalid)) {
                    t[a] = e1;
                    for(var i = 0; i < e1.eles.length; i++){
                        var o = e1.eles[i]._private, s = o.imgLayerCaches = o.imgLayerCaches || {};
                        s && (s[e1.level] = e1);
                    }
                    this.requestRedraw();
                }
            }, Uu.requestRedraw = Ee(function() {
                var e1 = this.renderer;
                e1.redrawHint("eles", !0), e1.redrawHint("drag", !0), e1.redraw();
            }, 100), Uu.setupDequeueing = qu({
                deqRedrawThreshold: 50,
                deqCost: .15,
                deqAvgCost: .1,
                deqNoDrawCost: .9,
                deqFastCost: .9,
                deq: function deq(e1, t) {
                    return e1.dequeue(t);
                },
                onDeqd: Ye,
                shouldRedraw: We,
                priority: function priority(e1) {
                    return e1.renderer.beforeRenderPriorities.lyrTxrDeq;
                }
            });
            var Qu, Ju = {};
            function polygon(e1, t) {
                for(var n = 0; n < t.length; n++){
                    var a = t[n];
                    e1.lineTo(a.x, a.y);
                }
            }
            function triangleBackcurve(e1, t, n) {
                for(var a, i = 0; i < t.length; i++){
                    var o = t[i];
                    0 === i && (a = o), e1.lineTo(o.x, o.y);
                }
                e1.quadraticCurveTo(n.x, n.y, a.x, a.y);
            }
            function triangleTee(e1, t, n) {
                e1.beginPath && e1.beginPath();
                for(var a = t, i = 0; i < a.length; i++){
                    var o = a[i];
                    e1.lineTo(o.x, o.y);
                }
                var s = n, l = n[0];
                e1.moveTo(l.x, l.y);
                for(i = 1; i < s.length; i++){
                    o = s[i];
                    e1.lineTo(o.x, o.y);
                }
                e1.closePath && e1.closePath();
            }
            function circleTriangle(e1, t, n, a, i) {
                e1.beginPath && e1.beginPath(), e1.arc(n, a, i, 0, 2 * Math.PI, !1);
                var o = t, s = o[0];
                e1.moveTo(s.x, s.y);
                for(var l = 0; l < o.length; l++){
                    var u = o[l];
                    e1.lineTo(u.x, u.y);
                }
                e1.closePath && e1.closePath();
            }
            function circle(e1, t, n, a) {
                e1.arc(t, n, a, 0, 2 * Math.PI, !1);
            }
            Ju.arrowShapeImpl = function(e1) {
                return (Qu || (Qu = {
                    polygon,
                    "triangle-backcurve": triangleBackcurve,
                    "triangle-tee": triangleTee,
                    "circle-triangle": circleTriangle,
                    "triangle-cross": triangleTee,
                    circle
                }))[e1];
            };
            var ec = {
                drawElement: function(e1, t, n, a, i, o) {
                    t.isNode() ? this.drawNode(e1, t, n, a, i, o) : this.drawEdge(e1, t, n, a, i, o);
                },
                drawElementOverlay: function(e1, t) {
                    t.isNode() ? this.drawNodeOverlay(e1, t) : this.drawEdgeOverlay(e1, t);
                },
                drawElementUnderlay: function(e1, t) {
                    t.isNode() ? this.drawNodeUnderlay(e1, t) : this.drawEdgeUnderlay(e1, t);
                },
                drawCachedElementPortion: function(e1, t, n, a, i, o, s, l) {
                    var u = this, c = n.getBoundingBox(t);
                    if (0 !== c.w && 0 !== c.h) {
                        var d = n.getElement(t, c, a, i, o);
                        if (null != d) {
                            var h = l(u, t);
                            if (0 === h) return;
                            var p, g, v, y, m, b, x = s(u, t), w = c.x1, E = c.y1, T = c.w, k = c.h;
                            if (0 !== x) {
                                var S = n.getRotationPoint(t);
                                v = S.x, y = S.y, e1.translate(v, y), e1.rotate(x), (m = u.getImgSmoothing(e1)) || u.setImgSmoothing(e1, !0);
                                var P = n.getRotationOffset(t);
                                p = P.x, g = P.y;
                            } else p = w, g = E;
                            1 !== h && (b = e1.globalAlpha, e1.globalAlpha = b * h), e1.drawImage(d.texture.canvas, d.x, 0, d.width, d.height, p, g, T, k), 1 !== h && (e1.globalAlpha = b), 0 !== x && (e1.rotate(-x), e1.translate(-v, -y), m || u.setImgSmoothing(e1, !1));
                        } else n.drawElement(e1, t);
                    }
                }
            }, tc = function getZeroRotation() {
                return 0;
            }, nc = function getLabelRotation(e1, t) {
                return e1.getTextAngle(t, null);
            }, rc = function getSourceLabelRotation(e1, t) {
                return e1.getTextAngle(t, "source");
            }, ac = function getTargetLabelRotation(e1, t) {
                return e1.getTextAngle(t, "target");
            }, ic = function getOpacity(e1, t) {
                return t.effectiveOpacity();
            }, oc = function getTextOpacity(e1, t) {
                return t.pstyle("text-opacity").pfValue * t.effectiveOpacity();
            };
            ec.drawCachedElement = function(e1, t, n, a, i, o) {
                var s = this, l = s.data, u = l.eleTxrCache, c = l.lblTxrCache, d = l.slbTxrCache, h = l.tlbTxrCache, p = t.boundingBox(), g = !0 === o ? u.reasons.highQuality : null;
                if (0 !== p.w && 0 !== p.h && t.visible() && (!a || Gt(p, a))) {
                    var v = t.isEdge(), y = t.element()._private.rscratch.badLine;
                    s.drawElementUnderlay(e1, t), s.drawCachedElementPortion(e1, t, u, n, i, g, tc, ic), v && y || s.drawCachedElementPortion(e1, t, c, n, i, g, nc, oc), v && !y && (s.drawCachedElementPortion(e1, t, d, n, i, g, rc, oc), s.drawCachedElementPortion(e1, t, h, n, i, g, ac, oc)), s.drawElementOverlay(e1, t);
                }
            }, ec.drawElements = function(e1, t) {
                for(var n = 0; n < t.length; n++){
                    var a = t[n];
                    this.drawElement(e1, a);
                }
            }, ec.drawCachedElements = function(e1, t, n, a) {
                for(var i = 0; i < t.length; i++){
                    var o = t[i];
                    this.drawCachedElement(e1, o, n, a);
                }
            }, ec.drawCachedNodes = function(e1, t, n, a) {
                for(var i = 0; i < t.length; i++){
                    var o = t[i];
                    o.isNode() && this.drawCachedElement(e1, o, n, a);
                }
            }, ec.drawLayeredElements = function(e1, t, n, a) {
                var i = this.data.lyrTxrCache.getLayers(t, n);
                if (i) for(var o = 0; o < i.length; o++){
                    var s = i[o], l = s.bb;
                    0 !== l.w && 0 !== l.h && e1.drawImage(s.canvas, l.x1, l.y1, l.w, l.h);
                }
                else this.drawCachedElements(e1, t, n, a);
            };
            var sc = {
                drawEdge: function(e1, t, n) {
                    var a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], s = this, l = t._private.rscratch;
                    if ((!o || t.visible()) && !l.badLine && null != l.allpts && !isNaN(l.allpts[0])) {
                        var u;
                        n && (u = n, e1.translate(-u.x1, -u.y1));
                        var c = o ? t.pstyle("opacity").value : 1, d = o ? t.pstyle("line-opacity").value : 1, h = t.pstyle("curve-style").value, p = t.pstyle("line-style").value, g = t.pstyle("width").pfValue, v = t.pstyle("line-cap").value, y = t.pstyle("line-outline-width").value, m = t.pstyle("line-outline-color").value, b = c * d, x = c * d, w = function drawLine() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
                            "straight-triangle" === h ? (s.eleStrokeStyle(e1, t, n), s.drawEdgeTrianglePath(t, e1, l.allpts)) : (e1.lineWidth = g, e1.lineCap = v, s.eleStrokeStyle(e1, t, n), s.drawEdgePath(t, e1, l.allpts, p), e1.lineCap = "butt");
                        }, E = function drawArrows() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x;
                            s.drawArrowheads(e1, t, n);
                        };
                        if (e1.lineJoin = "round", "yes" === t.pstyle("ghost").value) {
                            var T = t.pstyle("ghost-offset-x").pfValue, k = t.pstyle("ghost-offset-y").pfValue, S = t.pstyle("ghost-opacity").value, P = b * S;
                            e1.translate(T, k), w(P), E(P), e1.translate(-T, -k);
                        } else !function drawLineOutline() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
                            e1.lineWidth = g + y, e1.lineCap = v, y > 0 ? (s.colorStrokeStyle(e1, m[0], m[1], m[2], n), "straight-triangle" === h ? s.drawEdgeTrianglePath(t, e1, l.allpts) : (s.drawEdgePath(t, e1, l.allpts, p), e1.lineCap = "butt")) : e1.lineCap = "butt";
                        }();
                        !function drawUnderlay() {
                            i && s.drawEdgeUnderlay(e1, t);
                        }(), w(), E(), function drawOverlay() {
                            i && s.drawEdgeOverlay(e1, t);
                        }(), function drawText() {
                            s.drawElementText(e1, t, null, a);
                        }(), n && e1.translate(u.x1, u.y1);
                    }
                }
            }, lc = function drawEdgeOverlayUnderlay(e1) {
                if (![
                    "overlay",
                    "underlay"
                ].includes(e1)) throw new Error("Invalid state");
                return function(t, n) {
                    if (n.visible()) {
                        var a = n.pstyle("".concat(e1, "-opacity")).value;
                        if (0 !== a) {
                            var i = this, o = i.usePaths(), s = n._private.rscratch, l = 2 * n.pstyle("".concat(e1, "-padding")).pfValue, u = n.pstyle("".concat(e1, "-color")).value;
                            t.lineWidth = l, "self" !== s.edgeType || o ? t.lineCap = "round" : t.lineCap = "butt", i.colorStrokeStyle(t, u[0], u[1], u[2], a), i.drawEdgePath(n, t, s.allpts, "solid");
                        }
                    }
                };
            };
            sc.drawEdgeOverlay = lc("overlay"), sc.drawEdgeUnderlay = lc("underlay"), sc.drawEdgePath = function(e1, t, n, a) {
                var i, o = e1._private.rscratch, s = t, l = !1, u = this.usePaths(), c = e1.pstyle("line-dash-pattern").pfValue, d = e1.pstyle("line-dash-offset").pfValue;
                if (u) {
                    var h = n.join("$");
                    o.pathCacheKey && o.pathCacheKey === h ? (i = t = o.pathCache, l = !0) : (i = t = new Path2D, o.pathCacheKey = h, o.pathCache = i);
                }
                if (s.setLineDash) switch(a){
                    case "dotted":
                        s.setLineDash([
                            1,
                            1
                        ]);
                        break;
                    case "dashed":
                        s.setLineDash(c), s.lineDashOffset = d;
                        break;
                    case "solid":
                        s.setLineDash([]);
                }
                if (!l && !o.badLine) switch(t.beginPath && t.beginPath(), t.moveTo(n[0], n[1]), o.edgeType){
                    case "bezier":
                    case "self":
                    case "compound":
                    case "multibezier":
                        for(var p = 2; p + 3 < n.length; p += 4)t.quadraticCurveTo(n[p], n[p + 1], n[p + 2], n[p + 3]);
                        break;
                    case "straight":
                    case "haystack":
                        for(var g = 2; g + 1 < n.length; g += 2)t.lineTo(n[g], n[g + 1]);
                        break;
                    case "segments":
                        if (o.isRound) {
                            var v, y = _createForOfIteratorHelper(o.roundCorners);
                            try {
                                for(y.s(); !(v = y.n()).done;){
                                    drawPreparedRoundCorner(t, v.value);
                                }
                            } catch (e1) {
                                y.e(e1);
                            } finally{
                                y.f();
                            }
                            t.lineTo(n[n.length - 2], n[n.length - 1]);
                        } else for(var m = 2; m + 1 < n.length; m += 2)t.lineTo(n[m], n[m + 1]);
                }
                t = s, u ? t.stroke(i) : t.stroke(), t.setLineDash && t.setLineDash([]);
            }, sc.drawEdgeTrianglePath = function(e1, t, n) {
                t.fillStyle = t.strokeStyle;
                for(var a = e1.pstyle("width").pfValue, i = 0; i + 1 < n.length; i += 2){
                    var o = [
                        n[i + 2] - n[i],
                        n[i + 3] - n[i + 1]
                    ], s = Math.sqrt(o[0] * o[0] + o[1] * o[1]), l = [
                        o[1] / s,
                        -o[0] / s
                    ], u = [
                        l[0] * a / 2,
                        l[1] * a / 2
                    ];
                    t.beginPath(), t.moveTo(n[i] - u[0], n[i + 1] - u[1]), t.lineTo(n[i] + u[0], n[i + 1] + u[1]), t.lineTo(n[i + 2], n[i + 3]), t.closePath(), t.fill();
                }
            }, sc.drawArrowheads = function(e1, t, n) {
                var a = t._private.rscratch, i = "haystack" === a.edgeType;
                i || this.drawArrowhead(e1, t, "source", a.arrowStartX, a.arrowStartY, a.srcArrowAngle, n), this.drawArrowhead(e1, t, "mid-target", a.midX, a.midY, a.midtgtArrowAngle, n), this.drawArrowhead(e1, t, "mid-source", a.midX, a.midY, a.midsrcArrowAngle, n), i || this.drawArrowhead(e1, t, "target", a.arrowEndX, a.arrowEndY, a.tgtArrowAngle, n);
            }, sc.drawArrowhead = function(e1, t, n, a, i, o, s) {
                if (!(isNaN(a) || null == a || isNaN(i) || null == i || isNaN(o) || null == o)) {
                    var l = this, u = t.pstyle(n + "-arrow-shape").value;
                    if ("none" !== u) {
                        var c = "hollow" === t.pstyle(n + "-arrow-fill").value ? "both" : "filled", d = t.pstyle(n + "-arrow-fill").value, h = t.pstyle("width").pfValue, p = t.pstyle(n + "-arrow-width"), g = "match-line" === p.value ? h : p.pfValue;
                        "%" === p.units && (g *= h);
                        var v = t.pstyle("opacity").value;
                        void 0 === s && (s = v);
                        var y = e1.globalCompositeOperation;
                        1 === s && "hollow" !== d || (e1.globalCompositeOperation = "destination-out", l.colorFillStyle(e1, 255, 255, 255, 1), l.colorStrokeStyle(e1, 255, 255, 255, 1), l.drawArrowShape(t, e1, c, h, u, g, a, i, o), e1.globalCompositeOperation = y);
                        var m = t.pstyle(n + "-arrow-color").value;
                        l.colorFillStyle(e1, m[0], m[1], m[2], s), l.colorStrokeStyle(e1, m[0], m[1], m[2], s), l.drawArrowShape(t, e1, d, h, u, g, a, i, o);
                    }
                }
            }, sc.drawArrowShape = function(e1, t, n, a, i, o, s, l, u) {
                var c, d = this, h = this.usePaths() && "triangle-cross" !== i, p = !1, g = t, v = {
                    x: s,
                    y: l
                }, y = e1.pstyle("arrow-scale").value, m = this.getArrowWidth(a, y), b = d.arrowShapes[i];
                if (h) {
                    var x = d.arrowPathCache = d.arrowPathCache || [], w = Ne(i), E = x[w];
                    null != E ? (c = t = E, p = !0) : (c = t = new Path2D, x[w] = c);
                }
                p || (t.beginPath && t.beginPath(), h ? b.draw(t, 1, 0, {
                    x: 0,
                    y: 0
                }, 1) : b.draw(t, m, u, v, a), t.closePath && t.closePath()), t = g, h && (t.translate(s, l), t.rotate(u), t.scale(m, m)), "filled" !== n && "both" !== n || (h ? t.fill(c) : t.fill()), "hollow" !== n && "both" !== n || (t.lineWidth = o / (h ? m : 1), t.lineJoin = "miter", h ? t.stroke(c) : t.stroke()), h && (t.scale(1 / m, 1 / m), t.rotate(-u), t.translate(-s, -l));
            };
            var uc = {
                safeDrawImage: function(e1, t, n, a, i, o, s, l, u, c) {
                    if (!(i <= 0 || o <= 0 || u <= 0 || c <= 0)) try {
                        e1.drawImage(t, n, a, i, o, s, l, u, c);
                    } catch (e1) {
                        Ue(e1);
                    }
                },
                drawInscribedImage: function(e1, t, n, a, i) {
                    var o = this, s = n.position(), l = s.x, u = s.y, c = n.cy().style(), d = c.getIndexedStyle.bind(c), h = d(n, "background-fit", "value", a), p = d(n, "background-repeat", "value", a), g = n.width(), v = n.height(), y = 2 * n.padding(), m = g + ("inner" === d(n, "background-width-relative-to", "value", a) ? 0 : y), b = v + ("inner" === d(n, "background-height-relative-to", "value", a) ? 0 : y), x = n._private.rscratch, w = "node" === d(n, "background-clip", "value", a), E = d(n, "background-image-opacity", "value", a) * i, T = d(n, "background-image-smoothing", "value", a), k = n.pstyle("corner-radius").value;
                    "auto" !== k && (k = n.pstyle("corner-radius").pfValue);
                    var S = t.width || t.cachedW, P = t.height || t.cachedH;
                    null != S && null != P || (document.body.appendChild(t), S = t.cachedW = t.width || t.offsetWidth, P = t.cachedH = t.height || t.offsetHeight, document.body.removeChild(t));
                    var _ = S, D = P;
                    if ("auto" !== d(n, "background-width", "value", a) && (_ = "%" === d(n, "background-width", "units", a) ? d(n, "background-width", "pfValue", a) * m : d(n, "background-width", "pfValue", a)), "auto" !== d(n, "background-height", "value", a) && (D = "%" === d(n, "background-height", "units", a) ? d(n, "background-height", "pfValue", a) * b : d(n, "background-height", "pfValue", a)), 0 !== _ && 0 !== D) {
                        if ("contain" === h) _ *= M = Math.min(m / _, b / D), D *= M;
                        else if ("cover" === h) {
                            var M;
                            _ *= M = Math.max(m / _, b / D), D *= M;
                        }
                        var I = l - m / 2, R = d(n, "background-position-x", "units", a), L = d(n, "background-position-x", "pfValue", a);
                        I += "%" === R ? (m - _) * L : L;
                        var N = d(n, "background-offset-x", "units", a), O = d(n, "background-offset-x", "pfValue", a);
                        I += "%" === N ? (m - _) * O : O;
                        var z = u - b / 2, V = d(n, "background-position-y", "units", a), q = d(n, "background-position-y", "pfValue", a);
                        z += "%" === V ? (b - D) * q : q;
                        var j = d(n, "background-offset-y", "units", a), W = d(n, "background-offset-y", "pfValue", a);
                        z += "%" === j ? (b - D) * W : W, x.pathCache && (I -= l, z -= u, l = 0, u = 0);
                        var H = e1.globalAlpha;
                        e1.globalAlpha = E;
                        var X = o.getImgSmoothing(e1), Y = !1;
                        if ("no" === T && X ? (o.setImgSmoothing(e1, !1), Y = !0) : "yes" !== T || X || (o.setImgSmoothing(e1, !0), Y = !0), "no-repeat" === p) w && (e1.save(), x.pathCache ? e1.clip(x.pathCache) : (o.nodeShapes[o.getNodeShape(n)].draw(e1, l, u, m, b, k, x), e1.clip())), o.safeDrawImage(e1, t, 0, 0, S, P, I, z, _, D), w && e1.restore();
                        else {
                            var K = e1.createPattern(t, p);
                            e1.fillStyle = K, o.nodeShapes[o.getNodeShape(n)].draw(e1, l, u, m, b, k, x), e1.translate(I, z), e1.fill(), e1.translate(-I, -z);
                        }
                        e1.globalAlpha = H, Y && o.setImgSmoothing(e1, X);
                    }
                }
            }, cc = {};
            function roundRect(e1, t, n, a, i) {
                var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5, s = arguments.length > 6 ? arguments[6] : void 0;
                e1.beginPath(), e1.moveTo(t + o, n), e1.lineTo(t + a - o, n), e1.quadraticCurveTo(t + a, n, t + a, n + o), e1.lineTo(t + a, n + i - o), e1.quadraticCurveTo(t + a, n + i, t + a - o, n + i), e1.lineTo(t + o, n + i), e1.quadraticCurveTo(t, n + i, t, n + i - o), e1.lineTo(t, n + o), e1.quadraticCurveTo(t, n, t + o, n), e1.closePath(), s ? e1.stroke() : e1.fill();
            }
            cc.eleTextBiggerThanMin = function(e1, t) {
                if (!t) {
                    var n = e1.cy().zoom(), a = this.getPixelRatio(), i = Math.ceil(Rt(n * a));
                    t = Math.pow(2, i);
                }
                return !(e1.pstyle("font-size").pfValue * t < e1.pstyle("min-zoomed-font-size").pfValue);
            }, cc.drawElementText = function(e1, t, n, a, i) {
                var o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], s = this;
                if (null == a) {
                    if (o && !s.eleTextBiggerThanMin(t)) return;
                } else if (!1 === a) return;
                if (t.isNode()) {
                    var l = t.pstyle("label");
                    if (!l || !l.value) return;
                    var u = s.getLabelJustification(t);
                    e1.textAlign = u, e1.textBaseline = "bottom";
                } else {
                    var c = t.element()._private.rscratch.badLine, d = t.pstyle("label"), h = t.pstyle("source-label"), p = t.pstyle("target-label");
                    if (c || (!d || !d.value) && (!h || !h.value) && (!p || !p.value)) return;
                    e1.textAlign = "center", e1.textBaseline = "bottom";
                }
                var g, v = !n;
                n && (g = n, e1.translate(-g.x1, -g.y1)), null == i ? (s.drawText(e1, t, null, v, o), t.isEdge() && (s.drawText(e1, t, "source", v, o), s.drawText(e1, t, "target", v, o))) : s.drawText(e1, t, i, v, o), n && e1.translate(g.x1, g.y1);
            }, cc.getFontCache = function(e1) {
                var t;
                this.fontCaches = this.fontCaches || [];
                for(var n = 0; n < this.fontCaches.length; n++)if ((t = this.fontCaches[n]).context === e1) return t;
                return t = {
                    context: e1
                }, this.fontCaches.push(t), t;
            }, cc.setupTextStyle = function(e1, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a = t.pstyle("font-style").strValue, i = t.pstyle("font-size").pfValue + "px", o = t.pstyle("font-family").strValue, s = t.pstyle("font-weight").strValue, l = n ? t.effectiveOpacity() * t.pstyle("text-opacity").value : 1, u = t.pstyle("text-outline-opacity").value * l, c = t.pstyle("color").value, d = t.pstyle("text-outline-color").value;
                e1.font = a + " " + s + " " + i + " " + o, e1.lineJoin = "round", this.colorFillStyle(e1, c[0], c[1], c[2], l), this.colorStrokeStyle(e1, d[0], d[1], d[2], u);
            }, cc.getTextAngle = function(e1, t) {
                var n, a = e1._private.rscratch, i = t ? t + "-" : "", o = e1.pstyle(i + "text-rotation");
                if ("autorotate" === o.strValue) {
                    var s = rt(a, "labelAngle", t);
                    n = e1.isEdge() ? s : 0;
                } else n = "none" === o.strValue ? 0 : o.pfValue;
                return n;
            }, cc.drawText = function(e1, t, n) {
                var a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], o = t._private.rscratch, s = i ? t.effectiveOpacity() : 1;
                if (!i || 0 !== s && 0 !== t.pstyle("text-opacity").value) {
                    "main" === n && (n = null);
                    var l, u, c = rt(o, "labelX", n), d = rt(o, "labelY", n), h = this.getLabelText(t, n);
                    if (null != h && "" !== h && !isNaN(c) && !isNaN(d)) {
                        this.setupTextStyle(e1, t, i);
                        var p, g = n ? n + "-" : "", v = rt(o, "labelWidth", n), y = rt(o, "labelHeight", n), m = t.pstyle(g + "text-margin-x").pfValue, b = t.pstyle(g + "text-margin-y").pfValue, x = t.isEdge(), w = t.pstyle("text-halign").value, E = t.pstyle("text-valign").value;
                        switch(x && (w = "center", E = "center"), c += m, d += b, 0 !== (p = a ? this.getTextAngle(t, n) : 0) && (l = c, u = d, e1.translate(l, u), e1.rotate(p), c = 0, d = 0), E){
                            case "top":
                                break;
                            case "center":
                                d += y / 2;
                                break;
                            case "bottom":
                                d += y;
                        }
                        var T = t.pstyle("text-background-opacity").value, k = t.pstyle("text-border-opacity").value, S = t.pstyle("text-border-width").pfValue, P = t.pstyle("text-background-padding").pfValue, _ = 0 === t.pstyle("text-background-shape").strValue.indexOf("round");
                        if (T > 0 || S > 0 && k > 0) {
                            var D = c - P;
                            switch(w){
                                case "left":
                                    D -= v;
                                    break;
                                case "center":
                                    D -= v / 2;
                            }
                            var M = d - y - P, I = v + 2 * P, R = y + 2 * P;
                            if (T > 0) {
                                var L = e1.fillStyle, N = t.pstyle("text-background-color").value;
                                e1.fillStyle = "rgba(" + N[0] + "," + N[1] + "," + N[2] + "," + T * s + ")", _ ? roundRect(e1, D, M, I, R, 2) : e1.fillRect(D, M, I, R), e1.fillStyle = L;
                            }
                            if (S > 0 && k > 0) {
                                var O = e1.strokeStyle, z = e1.lineWidth, V = t.pstyle("text-border-color").value, q = t.pstyle("text-border-style").value;
                                if (e1.strokeStyle = "rgba(" + V[0] + "," + V[1] + "," + V[2] + "," + k * s + ")", e1.lineWidth = S, e1.setLineDash) switch(q){
                                    case "dotted":
                                        e1.setLineDash([
                                            1,
                                            1
                                        ]);
                                        break;
                                    case "dashed":
                                        e1.setLineDash([
                                            4,
                                            2
                                        ]);
                                        break;
                                    case "double":
                                        e1.lineWidth = S / 4, e1.setLineDash([]);
                                        break;
                                    case "solid":
                                        e1.setLineDash([]);
                                }
                                if (_ ? roundRect(e1, D, M, I, R, 2, "stroke") : e1.strokeRect(D, M, I, R), "double" === q) {
                                    var j = S / 2;
                                    _ ? roundRect(e1, D + j, M + j, I - 2 * j, R - 2 * j, 2, "stroke") : e1.strokeRect(D + j, M + j, I - 2 * j, R - 2 * j);
                                }
                                e1.setLineDash && e1.setLineDash([]), e1.lineWidth = z, e1.strokeStyle = O;
                            }
                        }
                        var W = 2 * t.pstyle("text-outline-width").pfValue;
                        if (W > 0 && (e1.lineWidth = W), "wrap" === t.pstyle("text-wrap").value) {
                            var H = rt(o, "labelWrapCachedLines", n), X = rt(o, "labelLineHeight", n), Y = v / 2, K = this.getLabelJustification(t);
                            switch("auto" === K || ("left" === w ? "left" === K ? c += -v : "center" === K && (c += -Y) : "center" === w ? "left" === K ? c += -Y : "right" === K && (c += Y) : "right" === w && ("center" === K ? c += Y : "right" === K && (c += v))), E){
                                case "top":
                                case "center":
                                case "bottom":
                                    d -= (H.length - 1) * X;
                            }
                            for(var G = 0; G < H.length; G++)W > 0 && e1.strokeText(H[G], c, d), e1.fillText(H[G], c, d), d += X;
                        } else W > 0 && e1.strokeText(h, c, d), e1.fillText(h, c, d);
                        0 !== p && (e1.rotate(-p), e1.translate(-l, -u));
                    }
                }
            };
            var dc = {
                drawNode: function(e1, t, n) {
                    var a, i, o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], l = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], u = this, c = t._private, d = c.rscratch, h = t.position();
                    if (U(h.x) && U(h.y) && (!l || t.visible())) {
                        var p, g, v = l ? t.effectiveOpacity() : 1, y = u.usePaths(), m = !1, b = t.padding();
                        a = t.width() + 2 * b, i = t.height() + 2 * b, n && (g = n, e1.translate(-g.x1, -g.y1));
                        for(var x = t.pstyle("background-image").value, w = new Array(x.length), E = new Array(x.length), T = 0, k = 0; k < x.length; k++){
                            var S = x[k];
                            if (w[k] = null != S && "none" !== S) {
                                var P = t.cy().style().getIndexedStyle(t, "background-image-crossorigin", "value", k);
                                T++, E[k] = u.getCachedImage(S, P, function() {
                                    c.backgroundTimestamp = Date.now(), t.emitAndNotify("background");
                                });
                            }
                        }
                        var _ = t.pstyle("background-blacken").value, D = t.pstyle("border-width").pfValue, M = t.pstyle("background-opacity").value * v, I = t.pstyle("border-color").value, R = t.pstyle("border-style").value, L = t.pstyle("border-join").value, N = t.pstyle("border-cap").value, O = t.pstyle("border-position").value, z = t.pstyle("border-dash-pattern").pfValue, V = t.pstyle("border-dash-offset").pfValue, q = t.pstyle("border-opacity").value * v, j = t.pstyle("outline-width").pfValue, W = t.pstyle("outline-color").value, H = t.pstyle("outline-style").value, X = t.pstyle("outline-opacity").value * v, Y = t.pstyle("outline-offset").value, K = t.pstyle("corner-radius").value;
                        "auto" !== K && (K = t.pstyle("corner-radius").pfValue);
                        var G = function setupShapeColor() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M;
                            u.eleFillStyle(e1, t, n);
                        }, Z = function setupBorderColor() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q;
                            u.colorStrokeStyle(e1, I[0], I[1], I[2], t);
                        }, Q = function setupOutlineColor() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X;
                            u.colorStrokeStyle(e1, W[0], W[1], W[2], t);
                        }, J = function getPath(e1, t, n, a) {
                            var i, o = u.nodePathCache = u.nodePathCache || [], s = Oe("polygon" === n ? n + "," + a.join(",") : n, "" + t, "" + e1, "" + K), l = o[s], c = !1;
                            return null != l ? (i = l, c = !0, d.pathCache = i) : (i = new Path2D, o[s] = d.pathCache = i), {
                                path: i,
                                cacheHit: c
                            };
                        }, ee = t.pstyle("shape").strValue, te = t.pstyle("shape-polygon-points").pfValue;
                        if (y) {
                            e1.translate(h.x, h.y);
                            var ne = J(a, i, ee, te);
                            p = ne.path, m = ne.cacheHit;
                        }
                        var re = function drawShape() {
                            if (!m) {
                                var n = h;
                                y && (n = {
                                    x: 0,
                                    y: 0
                                }), u.nodeShapes[u.getNodeShape(t)].draw(p || e1, n.x, n.y, a, i, K, d);
                            }
                            y ? e1.fill(p) : e1.fill();
                        }, ae = function drawImages() {
                            for(var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v, a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = c.backgrounding, o = 0, s = 0; s < E.length; s++){
                                var l = t.cy().style().getIndexedStyle(t, "background-image-containment", "value", s);
                                a && "over" === l || !a && "inside" === l ? o++ : w[s] && E[s].complete && !E[s].error && (o++, u.drawInscribedImage(e1, E[s], t, s, n));
                            }
                            c.backgrounding = !(o === T), i !== c.backgrounding && t.updateStyle(!1);
                        }, ie = function drawPie() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
                            u.hasPie(t) && (u.drawPie(e1, t, o), n && (y || u.nodeShapes[u.getNodeShape(t)].draw(e1, h.x, h.y, a, i, K, d)));
                        }, oe = function drawStripe() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
                            u.hasStripe(t) && (e1.save(), y ? e1.clip(d.pathCache) : (u.nodeShapes[u.getNodeShape(t)].draw(e1, h.x, h.y, a, i, K, d), e1.clip()), u.drawStripe(e1, t, o), e1.restore(), n && (y || u.nodeShapes[u.getNodeShape(t)].draw(e1, h.x, h.y, a, i, K, d)));
                        }, se = function darken() {
                            var t = (_ > 0 ? _ : -_) * (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v), n = _ > 0 ? 0 : 255;
                            0 !== _ && (u.colorFillStyle(e1, n, n, n, t), y ? e1.fill(p) : e1.fill());
                        }, le = function drawBorder() {
                            if (D > 0) {
                                if (e1.lineWidth = D, e1.lineCap = N, e1.lineJoin = L, e1.setLineDash) switch(R){
                                    case "dotted":
                                        e1.setLineDash([
                                            1,
                                            1
                                        ]);
                                        break;
                                    case "dashed":
                                        e1.setLineDash(z), e1.lineDashOffset = V;
                                        break;
                                    case "solid":
                                    case "double":
                                        e1.setLineDash([]);
                                }
                                if ("center" !== O) {
                                    if (e1.save(), e1.lineWidth *= 2, "inside" === O) y ? e1.clip(p) : e1.clip();
                                    else {
                                        var t = new Path2D;
                                        t.rect(-a / 2 - D, -i / 2 - D, a + 2 * D, i + 2 * D), t.addPath(p), e1.clip(t, "evenodd");
                                    }
                                    y ? e1.stroke(p) : e1.stroke(), e1.restore();
                                } else y ? e1.stroke(p) : e1.stroke();
                                if ("double" === R) {
                                    e1.lineWidth = D / 3;
                                    var n = e1.globalCompositeOperation;
                                    e1.globalCompositeOperation = "destination-out", y ? e1.stroke(p) : e1.stroke(), e1.globalCompositeOperation = n;
                                }
                                e1.setLineDash && e1.setLineDash([]);
                            }
                        }, ue = function drawOutline() {
                            if (j > 0) {
                                if (e1.lineWidth = j, e1.lineCap = "butt", e1.setLineDash) switch(H){
                                    case "dotted":
                                        e1.setLineDash([
                                            1,
                                            1
                                        ]);
                                        break;
                                    case "dashed":
                                        e1.setLineDash([
                                            4,
                                            2
                                        ]);
                                        break;
                                    case "solid":
                                    case "double":
                                        e1.setLineDash([]);
                                }
                                var n = h;
                                y && (n = {
                                    x: 0,
                                    y: 0
                                });
                                var o = u.getNodeShape(t), s = D;
                                "inside" === O && (s = 0), "outside" === O && (s *= 2);
                                var l, c = (a + s + (j + Y)) / a, d = (i + s + (j + Y)) / i, p = a * c, g = i * d, v = u.nodeShapes[o].points;
                                if (y) l = J(p, g, o, v).path;
                                if ("ellipse" === o) u.drawEllipsePath(l || e1, n.x, n.y, p, g);
                                else if ([
                                    "round-diamond",
                                    "round-heptagon",
                                    "round-hexagon",
                                    "round-octagon",
                                    "round-pentagon",
                                    "round-polygon",
                                    "round-triangle",
                                    "round-tag"
                                ].includes(o)) {
                                    var m = 0, b = 0, x = 0;
                                    "round-diamond" === o ? m = 1.4 * (s + Y + j) : "round-heptagon" === o ? (m = 1.075 * (s + Y + j), x = -(s / 2 + Y + j) / 35) : "round-hexagon" === o ? m = 1.12 * (s + Y + j) : "round-pentagon" === o ? (m = 1.13 * (s + Y + j), x = -(s / 2 + Y + j) / 15) : "round-tag" === o ? (m = 1.12 * (s + Y + j), b = .07 * (s / 2 + j + Y)) : "round-triangle" === o && (m = (s + Y + j) * (Math.PI / 2), x = -(s + Y / 2 + j) / Math.PI), 0 !== m && (p = a * (c = (a + m) / a), [
                                        "round-hexagon",
                                        "round-tag"
                                    ].includes(o) || (g = i * (d = (i + m) / i)));
                                    for(var w = p / 2, E = g / 2, T = (K = "auto" === K ? xn(p, g) : K) + (s + j + Y) / 2, k = new Array(v.length / 2), S = new Array(v.length / 2), P = 0; P < v.length / 2; P++)k[P] = {
                                        x: n.x + b + w * v[2 * P],
                                        y: n.y + x + E * v[2 * P + 1]
                                    };
                                    var _, M, I, R, L = k.length;
                                    for(M = k[L - 1], _ = 0; _ < L; _++)I = k[_ % L], R = k[(_ + 1) % L], S[_] = getRoundCorner(M, I, R, T), M = I, I = R;
                                    u.drawRoundPolygonPath(l || e1, n.x + b, n.y + x, a * c, i * d, v, S);
                                } else if ([
                                    "roundrectangle",
                                    "round-rectangle"
                                ].includes(o)) K = "auto" === K ? bn(p, g) : K, u.drawRoundRectanglePath(l || e1, n.x, n.y, p, g, K + (s + j + Y) / 2);
                                else if ([
                                    "cutrectangle",
                                    "cut-rectangle"
                                ].includes(o)) K = "auto" === K ? 8 : K, u.drawCutRectanglePath(l || e1, n.x, n.y, p, g, null, K + (s + j + Y) / 4);
                                else if ([
                                    "bottomroundrectangle",
                                    "bottom-round-rectangle"
                                ].includes(o)) K = "auto" === K ? bn(p, g) : K, u.drawBottomRoundRectanglePath(l || e1, n.x, n.y, p, g, K + (s + j + Y) / 2);
                                else if ("barrel" === o) u.drawBarrelPath(l || e1, n.x, n.y, p, g);
                                else if (o.startsWith("polygon") || [
                                    "rhomboid",
                                    "right-rhomboid",
                                    "round-tag",
                                    "tag",
                                    "vee"
                                ].includes(o)) {
                                    v = sn(ln(v, (s + j + Y) / a)), u.drawPolygonPath(l || e1, n.x, n.y, a, i, v);
                                } else {
                                    v = sn(ln(v, -((s + j + Y) / a))), u.drawPolygonPath(l || e1, n.x, n.y, a, i, v);
                                }
                                if (y ? e1.stroke(l) : e1.stroke(), "double" === H) {
                                    e1.lineWidth = s / 3;
                                    var N = e1.globalCompositeOperation;
                                    e1.globalCompositeOperation = "destination-out", y ? e1.stroke(l) : e1.stroke(), e1.globalCompositeOperation = N;
                                }
                                e1.setLineDash && e1.setLineDash([]);
                            }
                        };
                        if ("yes" === t.pstyle("ghost").value) {
                            var ce = t.pstyle("ghost-offset-x").pfValue, de = t.pstyle("ghost-offset-y").pfValue, he = t.pstyle("ghost-opacity").value, pe = he * v;
                            e1.translate(ce, de), Q(), ue(), G(he * M), re(), ae(pe, !0), Z(he * q), le(), ie(0 !== _ || 0 !== D), oe(0 !== _ || 0 !== D), ae(pe, !1), se(pe), e1.translate(-ce, -de);
                        }
                        y && e1.translate(-h.x, -h.y), function drawUnderlay() {
                            s && u.drawNodeUnderlay(e1, t, h, a, i);
                        }(), y && e1.translate(h.x, h.y), Q(), ue(), G(), re(), ae(v, !0), Z(), le(), ie(0 !== _ || 0 !== D), oe(0 !== _ || 0 !== D), ae(v, !1), se(), y && e1.translate(-h.x, -h.y), function drawText() {
                            u.drawElementText(e1, t, null, o);
                        }(), function drawOverlay() {
                            s && u.drawNodeOverlay(e1, t, h, a, i);
                        }(), n && e1.translate(g.x1, g.y1);
                    }
                }
            }, hc = function drawNodeOverlayUnderlay(e1) {
                if (![
                    "overlay",
                    "underlay"
                ].includes(e1)) throw new Error("Invalid state");
                return function(t, n, a, i, o) {
                    if (n.visible()) {
                        var s = n.pstyle("".concat(e1, "-padding")).pfValue, l = n.pstyle("".concat(e1, "-opacity")).value, u = n.pstyle("".concat(e1, "-color")).value, c = n.pstyle("".concat(e1, "-shape")).value, d = n.pstyle("".concat(e1, "-corner-radius")).value;
                        if (l > 0) {
                            if (a = a || n.position(), null == i || null == o) {
                                var h = n.padding();
                                i = n.width() + 2 * h, o = n.height() + 2 * h;
                            }
                            this.colorFillStyle(t, u[0], u[1], u[2], l), this.nodeShapes[c].draw(t, a.x, a.y, i + 2 * s, o + 2 * s, d), t.fill();
                        }
                    }
                };
            };
            dc.drawNodeOverlay = hc("overlay"), dc.drawNodeUnderlay = hc("underlay"), dc.hasPie = function(e1) {
                return (e1 = e1[0])._private.hasPie;
            }, dc.hasStripe = function(e1) {
                return (e1 = e1[0])._private.hasStripe;
            }, dc.drawPie = function(e1, t, n, a) {
                t = t[0], a = a || t.position();
                var i, o = t.cy().style(), s = t.pstyle("pie-size"), l = t.pstyle("pie-hole"), u = t.pstyle("pie-start-angle").pfValue, c = a.x, d = a.y, h = t.width(), p = t.height(), g = Math.min(h, p) / 2, v = 0;
                if (this.usePaths() && (c = 0, d = 0), "%" === s.units ? g *= s.pfValue : void 0 !== s.pfValue && (g = s.pfValue / 2), "%" === l.units ? i = g * l.pfValue : void 0 !== l.pfValue && (i = l.pfValue / 2), !(i >= g)) for(var y = 1; y <= o.pieBackgroundN; y++){
                    var m = t.pstyle("pie-" + y + "-background-size").value, b = t.pstyle("pie-" + y + "-background-color").value, x = t.pstyle("pie-" + y + "-background-opacity").value * n, w = m / 100;
                    w + v > 1 && (w = 1 - v);
                    var E = 1.5 * Math.PI + 2 * Math.PI * v, T = (E += u) + 2 * Math.PI * w;
                    0 === m || v >= 1 || v + w > 1 || (0 === i ? (e1.beginPath(), e1.moveTo(c, d), e1.arc(c, d, g, E, T), e1.closePath()) : (e1.beginPath(), e1.arc(c, d, g, E, T), e1.arc(c, d, i, T, E, !0), e1.closePath()), this.colorFillStyle(e1, b[0], b[1], b[2], x), e1.fill(), v += w);
                }
            }, dc.drawStripe = function(e1, t, n, a) {
                t = t[0], a = a || t.position();
                var i = t.cy().style(), o = a.x, s = a.y, l = t.width(), u = t.height(), c = 0, d = this.usePaths();
                e1.save();
                var h = t.pstyle("stripe-direction").value, p = t.pstyle("stripe-size");
                switch(h){
                    case "vertical":
                        break;
                    case "righward":
                        e1.rotate(-Math.PI / 2);
                }
                var g = l, v = u;
                "%" === p.units ? (g *= p.pfValue, v *= p.pfValue) : void 0 !== p.pfValue && (g = p.pfValue, v = p.pfValue), d && (o = 0, s = 0), s -= g / 2, o -= v / 2;
                for(var y = 1; y <= i.stripeBackgroundN; y++){
                    var m = t.pstyle("stripe-" + y + "-background-size").value, b = t.pstyle("stripe-" + y + "-background-color").value, x = t.pstyle("stripe-" + y + "-background-opacity").value * n, w = m / 100;
                    w + c > 1 && (w = 1 - c), 0 === m || c >= 1 || c + w > 1 || (e1.beginPath(), e1.rect(o, s + v * c, g, v * w), e1.closePath(), this.colorFillStyle(e1, b[0], b[1], b[2], x), e1.fill(), c += w);
                }
                e1.restore();
            };
            var pc, fc = {};
            function compileShader(e1, t, n) {
                var a = e1.createShader(t);
                if (e1.shaderSource(a, n), e1.compileShader(a), !e1.getShaderParameter(a, e1.COMPILE_STATUS)) throw new Error(e1.getShaderInfoLog(a));
                return a;
            }
            function createTextureCanvas(e1, t, n) {
                void 0 === n && (n = t);
                var a = e1.makeOffscreenCanvas(t, n), i = a.context = a.getContext("2d");
                return a.clear = function() {
                    return i.clearRect(0, 0, a.width, a.height);
                }, a.clear(), a;
            }
            function getEffectivePanZoom(e1) {
                var t = e1.pixelRatio, n = e1.cy.zoom(), a = e1.cy.pan();
                return {
                    zoom: n * t,
                    pan: {
                        x: a.x * t,
                        y: a.y * t
                    }
                };
            }
            function isSimpleShape(e1) {
                return "solid" === e1.pstyle("background-fill").value && "none" === e1.pstyle("background-image").strValue && (0 === e1.pstyle("border-width").value || 0 === e1.pstyle("border-opacity").value || "solid" === e1.pstyle("border-style").value);
            }
            function arrayEqual(e1, t) {
                if (e1.length !== t.length) return !1;
                for(var n = 0; n < e1.length; n++)if (e1[n] !== t[n]) return !1;
                return !0;
            }
            function toWebGLColor(e1, t, n) {
                var a = e1[0] / 255, i = e1[1] / 255, o = e1[2] / 255, s = t, l = n || new Array(4);
                return l[0] = a * s, l[1] = i * s, l[2] = o * s, l[3] = s, l;
            }
            function indexToVec4(e1, t) {
                var n = t || new Array(4);
                return n[0] = (255 & e1) / 255, n[1] = (e1 >> 8 & 255) / 255, n[2] = (e1 >> 16 & 255) / 255, n[3] = (e1 >> 24 & 255) / 255, n;
            }
            function vec4ToIndex(e1) {
                return e1[0] + (e1[1] << 8) + (e1[2] << 16) + (e1[3] << 24);
            }
            function getTypeInfo(e1, t) {
                switch(t){
                    case "float":
                        return [
                            1,
                            e1.FLOAT,
                            4
                        ];
                    case "vec2":
                        return [
                            2,
                            e1.FLOAT,
                            4
                        ];
                    case "vec3":
                        return [
                            3,
                            e1.FLOAT,
                            4
                        ];
                    case "vec4":
                        return [
                            4,
                            e1.FLOAT,
                            4
                        ];
                    case "int":
                        return [
                            1,
                            e1.INT,
                            4
                        ];
                    case "ivec2":
                        return [
                            2,
                            e1.INT,
                            4
                        ];
                }
            }
            function createTypedArray(e1, t, n) {
                switch(t){
                    case e1.FLOAT:
                        return new Float32Array(n);
                    case e1.INT:
                        return new Int32Array(n);
                }
            }
            function createTypedArrayView(e1, t, n, a, i, o) {
                switch(t){
                    case e1.FLOAT:
                        return new Float32Array(n.buffer, o * a, i);
                    case e1.INT:
                        return new Int32Array(n.buffer, o * a, i);
                }
            }
            function createBufferDynamicDraw(e1, t, n, a) {
                var i = _slicedToArray(getTypeInfo(e1, n), 3), o = i[0], s = i[1], l = i[2], u = createTypedArray(e1, s, t * o), c = o * l, d = e1.createBuffer();
                e1.bindBuffer(e1.ARRAY_BUFFER, d), e1.bufferData(e1.ARRAY_BUFFER, t * c, e1.DYNAMIC_DRAW), e1.enableVertexAttribArray(a), s === e1.FLOAT ? e1.vertexAttribPointer(a, o, s, !1, c, 0) : s === e1.INT && e1.vertexAttribIPointer(a, o, s, c, 0), e1.vertexAttribDivisor(a, 1), e1.bindBuffer(e1.ARRAY_BUFFER, null);
                for(var h = new Array(t), p = 0; p < t; p++)h[p] = createTypedArrayView(e1, s, u, c, o, p);
                return d.dataArray = u, d.stride = c, d.size = o, d.getView = function(e1) {
                    return h[e1];
                }, d.setPoint = function(e1, t, n) {
                    var a = h[e1];
                    a[0] = t, a[1] = n;
                }, d.bufferSubData = function(t) {
                    e1.bindBuffer(e1.ARRAY_BUFFER, d), t ? e1.bufferSubData(e1.ARRAY_BUFFER, 0, u, 0, t * o) : e1.bufferSubData(e1.ARRAY_BUFFER, 0, u);
                }, d;
            }
            fc.getPixelRatio = function() {
                var e1 = this.data.contexts[0];
                if (null != this.forcedPixelRatio) return this.forcedPixelRatio;
                var t = this.cy.window(), n = e1.backingStorePixelRatio || e1.webkitBackingStorePixelRatio || e1.mozBackingStorePixelRatio || e1.msBackingStorePixelRatio || e1.oBackingStorePixelRatio || e1.backingStorePixelRatio || 1;
                return (t.devicePixelRatio || 1) / n;
            }, fc.paintCache = function(e1) {
                for(var t, n = this.paintCaches = this.paintCaches || [], a = !0, i = 0; i < n.length; i++)if ((t = n[i]).context === e1) {
                    a = !1;
                    break;
                }
                return a && (t = {
                    context: e1
                }, n.push(t)), t;
            }, fc.createGradientStyleFor = function(e1, t, n, a, i) {
                var o, s = this.usePaths(), l = n.pstyle(t + "-gradient-stop-colors").value, u = n.pstyle(t + "-gradient-stop-positions").pfValue;
                if ("radial-gradient" === a) if (n.isEdge()) {
                    var c = n.sourceEndpoint(), d = n.targetEndpoint(), h = n.midpoint(), p = Nt(c, h), g = Nt(d, h);
                    o = e1.createRadialGradient(h.x, h.y, 0, h.x, h.y, Math.max(p, g));
                } else {
                    var v = s ? {
                        x: 0,
                        y: 0
                    } : n.position(), y = n.paddedWidth(), m = n.paddedHeight();
                    o = e1.createRadialGradient(v.x, v.y, 0, v.x, v.y, Math.max(y, m));
                }
                else if (n.isEdge()) {
                    var b = n.sourceEndpoint(), x = n.targetEndpoint();
                    o = e1.createLinearGradient(b.x, b.y, x.x, x.y);
                } else {
                    var w = s ? {
                        x: 0,
                        y: 0
                    } : n.position(), E = n.paddedWidth() / 2, T = n.paddedHeight() / 2;
                    switch(n.pstyle("background-gradient-direction").value){
                        case "to-bottom":
                            o = e1.createLinearGradient(w.x, w.y - T, w.x, w.y + T);
                            break;
                        case "to-top":
                            o = e1.createLinearGradient(w.x, w.y + T, w.x, w.y - T);
                            break;
                        case "to-left":
                            o = e1.createLinearGradient(w.x + E, w.y, w.x - E, w.y);
                            break;
                        case "to-right":
                            o = e1.createLinearGradient(w.x - E, w.y, w.x + E, w.y);
                            break;
                        case "to-bottom-right":
                        case "to-right-bottom":
                            o = e1.createLinearGradient(w.x - E, w.y - T, w.x + E, w.y + T);
                            break;
                        case "to-top-right":
                        case "to-right-top":
                            o = e1.createLinearGradient(w.x - E, w.y + T, w.x + E, w.y - T);
                            break;
                        case "to-bottom-left":
                        case "to-left-bottom":
                            o = e1.createLinearGradient(w.x + E, w.y - T, w.x - E, w.y + T);
                            break;
                        case "to-top-left":
                        case "to-left-top":
                            o = e1.createLinearGradient(w.x + E, w.y + T, w.x - E, w.y - T);
                    }
                }
                if (!o) return null;
                for(var k = u.length === l.length, S = l.length, P = 0; P < S; P++)o.addColorStop(k ? u[P] : P / (S - 1), "rgba(" + l[P][0] + "," + l[P][1] + "," + l[P][2] + "," + i + ")");
                return o;
            }, fc.gradientFillStyle = function(e1, t, n, a) {
                var i = this.createGradientStyleFor(e1, "background", t, n, a);
                if (!i) return null;
                e1.fillStyle = i;
            }, fc.colorFillStyle = function(e1, t, n, a, i) {
                e1.fillStyle = "rgba(" + t + "," + n + "," + a + "," + i + ")";
            }, fc.eleFillStyle = function(e1, t, n) {
                var a = t.pstyle("background-fill").value;
                if ("linear-gradient" === a || "radial-gradient" === a) this.gradientFillStyle(e1, t, a, n);
                else {
                    var i = t.pstyle("background-color").value;
                    this.colorFillStyle(e1, i[0], i[1], i[2], n);
                }
            }, fc.gradientStrokeStyle = function(e1, t, n, a) {
                var i = this.createGradientStyleFor(e1, "line", t, n, a);
                if (!i) return null;
                e1.strokeStyle = i;
            }, fc.colorStrokeStyle = function(e1, t, n, a, i) {
                e1.strokeStyle = "rgba(" + t + "," + n + "," + a + "," + i + ")";
            }, fc.eleStrokeStyle = function(e1, t, n) {
                var a = t.pstyle("line-fill").value;
                if ("linear-gradient" === a || "radial-gradient" === a) this.gradientStrokeStyle(e1, t, a, n);
                else {
                    var i = t.pstyle("line-color").value;
                    this.colorStrokeStyle(e1, i[0], i[1], i[2], n);
                }
            }, fc.matchCanvasSize = function(e1) {
                var t = this, n = t.data, a = t.findContainerClientCoords(), i = a[2], o = a[3], s = t.getPixelRatio(), l = t.motionBlurPxRatio;
                e1 !== t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_NODE] && e1 !== t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_DRAG] || (s = l);
                var u, c = i * s, d = o * s;
                if (c !== t.canvasWidth || d !== t.canvasHeight) {
                    t.fontCaches = null;
                    var h = n.canvasContainer;
                    h.style.width = i + "px", h.style.height = o + "px";
                    for(var p = 0; p < t.CANVAS_LAYERS; p++)(u = n.canvases[p]).width = c, u.height = d, u.style.width = i + "px", u.style.height = o + "px";
                    for(p = 0; p < t.BUFFER_COUNT; p++)(u = n.bufferCanvases[p]).width = c, u.height = d, u.style.width = i + "px", u.style.height = o + "px";
                    t.textureMult = 1, s <= 1 && (u = n.bufferCanvases[t.TEXTURE_BUFFER], t.textureMult = 2, u.width = c * t.textureMult, u.height = d * t.textureMult), t.canvasWidth = c, t.canvasHeight = d, t.pixelRatio = s;
                }
            }, fc.renderTo = function(e1, t, n, a) {
                this.render({
                    forcedContext: e1,
                    forcedZoom: t,
                    forcedPan: n,
                    drawAllLayers: !0,
                    forcedPxRatio: a
                });
            }, fc.clearCanvas = function() {
                var e1 = this, t = e1.data;
                function clear(t) {
                    t.clearRect(0, 0, e1.canvasWidth, e1.canvasHeight);
                }
                clear(t.contexts[e1.NODE]), clear(t.contexts[e1.DRAG]);
            }, fc.render = function(e1) {
                var t = this;
                e1 = e1 || Je();
                var n = t.cy, a = e1.forcedContext, i = e1.drawAllLayers, o = e1.drawOnlyNodeLayer, s = e1.forcedZoom, l = e1.forcedPan, u = void 0 === e1.forcedPxRatio ? this.getPixelRatio() : e1.forcedPxRatio, c = t.data, d = c.canvasNeedsRedraw, h = t.textureOnViewport && !a && (t.pinching || t.hoverData.dragging || t.swipePanning || t.data.wheelZooming), p = void 0 !== e1.motionBlur ? e1.motionBlur : t.motionBlur, g = t.motionBlurPxRatio, v = n.hasCompoundNodes(), y = t.hoverData.draggingEles, m = !(!t.hoverData.selecting && !t.touchData.selecting), b = p = p && !a && t.motionBlurEnabled && !m;
                a || (t.prevPxRatio !== u && (t.invalidateContainerClientCoordsCache(), t.matchCanvasSize(t.container), t.redrawHint("eles", !0), t.redrawHint("drag", !0)), t.prevPxRatio = u), !a && t.motionBlurTimeout && clearTimeout(t.motionBlurTimeout), p && (null == t.mbFrames && (t.mbFrames = 0), t.mbFrames++, t.mbFrames < 3 && (b = !1), t.mbFrames > t.minMbLowQualFrames && (t.motionBlurPxRatio = t.mbPxRBlurry)), t.clearingMotionBlur && (t.motionBlurPxRatio = 1), t.textureDrawLastFrame && !h && (d[t.NODE] = !0, d[t.SELECT_BOX] = !0);
                var x = n.style(), w = n.zoom(), E = void 0 !== s ? s : w, T = n.pan(), k = {
                    x: T.x,
                    y: T.y
                }, S = {
                    zoom: w,
                    pan: {
                        x: T.x,
                        y: T.y
                    }
                }, P = t.prevViewport;
                void 0 === P || S.zoom !== P.zoom || S.pan.x !== P.pan.x || S.pan.y !== P.pan.y || y && !v || (t.motionBlurPxRatio = 1), l && (k = l), E *= u, k.x *= u, k.y *= u;
                var _ = t.getCachedZSortedEles();
                function mbclear(e1, n, a, i, o) {
                    var s = e1.globalCompositeOperation;
                    e1.globalCompositeOperation = "destination-out", t.colorFillStyle(e1, 255, 255, 255, t.motionBlurTransparency), e1.fillRect(n, a, i, o), e1.globalCompositeOperation = s;
                }
                function setContextTransform(e1, n) {
                    var o, u, d, h;
                    t.clearingMotionBlur || e1 !== c.bufferContexts[t.MOTIONBLUR_BUFFER_NODE] && e1 !== c.bufferContexts[t.MOTIONBLUR_BUFFER_DRAG] ? (o = k, u = E, d = t.canvasWidth, h = t.canvasHeight) : (o = {
                        x: T.x * g,
                        y: T.y * g
                    }, u = w * g, d = t.canvasWidth * g, h = t.canvasHeight * g), e1.setTransform(1, 0, 0, 1, 0, 0), "motionBlur" === n ? mbclear(e1, 0, 0, d, h) : a || void 0 !== n && !n || e1.clearRect(0, 0, d, h), i || (e1.translate(o.x, o.y), e1.scale(u, u)), l && e1.translate(l.x, l.y), s && e1.scale(s, s);
                }
                if (h || (t.textureDrawLastFrame = !1), h) {
                    if (t.textureDrawLastFrame = !0, !t.textureCache) {
                        t.textureCache = {}, t.textureCache.bb = n.mutableElements().boundingBox(), t.textureCache.texture = t.data.bufferCanvases[t.TEXTURE_BUFFER];
                        var D = t.data.bufferContexts[t.TEXTURE_BUFFER];
                        D.setTransform(1, 0, 0, 1, 0, 0), D.clearRect(0, 0, t.canvasWidth * t.textureMult, t.canvasHeight * t.textureMult), t.render({
                            forcedContext: D,
                            drawOnlyNodeLayer: !0,
                            forcedPxRatio: u * t.textureMult
                        }), (S = t.textureCache.viewport = {
                            zoom: n.zoom(),
                            pan: n.pan(),
                            width: t.canvasWidth,
                            height: t.canvasHeight
                        }).mpan = {
                            x: (0 - S.pan.x) / S.zoom,
                            y: (0 - S.pan.y) / S.zoom
                        };
                    }
                    d[t.DRAG] = !1, d[t.NODE] = !1;
                    var M = c.contexts[t.NODE], I = t.textureCache.texture;
                    S = t.textureCache.viewport;
                    M.setTransform(1, 0, 0, 1, 0, 0), p ? mbclear(M, 0, 0, S.width, S.height) : M.clearRect(0, 0, S.width, S.height);
                    var R = x.core("outside-texture-bg-color").value, L = x.core("outside-texture-bg-opacity").value;
                    t.colorFillStyle(M, R[0], R[1], R[2], L), M.fillRect(0, 0, S.width, S.height);
                    w = n.zoom();
                    setContextTransform(M, !1), M.clearRect(S.mpan.x, S.mpan.y, S.width / S.zoom / u, S.height / S.zoom / u), M.drawImage(I, S.mpan.x, S.mpan.y, S.width / S.zoom / u, S.height / S.zoom / u);
                } else t.textureOnViewport && !a && (t.textureCache = null);
                var N = n.extent(), O = t.pinching || t.hoverData.dragging || t.swipePanning || t.data.wheelZooming || t.hoverData.draggingEles || t.cy.animated(), z = t.hideEdgesOnViewport && O, V = [];
                if (V[t.NODE] = !d[t.NODE] && p && !t.clearedForMotionBlur[t.NODE] || t.clearingMotionBlur, V[t.NODE] && (t.clearedForMotionBlur[t.NODE] = !0), V[t.DRAG] = !d[t.DRAG] && p && !t.clearedForMotionBlur[t.DRAG] || t.clearingMotionBlur, V[t.DRAG] && (t.clearedForMotionBlur[t.DRAG] = !0), d[t.NODE] || i || o || V[t.NODE]) {
                    var q = p && !V[t.NODE] && 1 !== g;
                    setContextTransform(M = a || (q ? t.data.bufferContexts[t.MOTIONBLUR_BUFFER_NODE] : c.contexts[t.NODE]), p && !q ? "motionBlur" : void 0), z ? t.drawCachedNodes(M, _.nondrag, u, N) : t.drawLayeredElements(M, _.nondrag, u, N), t.debug && t.drawDebugPoints(M, _.nondrag), i || p || (d[t.NODE] = !1);
                }
                if (!o && (d[t.DRAG] || i || V[t.DRAG])) {
                    q = p && !V[t.DRAG] && 1 !== g;
                    setContextTransform(M = a || (q ? t.data.bufferContexts[t.MOTIONBLUR_BUFFER_DRAG] : c.contexts[t.DRAG]), p && !q ? "motionBlur" : void 0), z ? t.drawCachedNodes(M, _.drag, u, N) : t.drawCachedElements(M, _.drag, u, N), t.debug && t.drawDebugPoints(M, _.drag), i || p || (d[t.DRAG] = !1);
                }
                if (this.drawSelectionRectangle(e1, setContextTransform), p && 1 !== g) {
                    var j = c.contexts[t.NODE], W = t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_NODE], H = c.contexts[t.DRAG], X = t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_DRAG], Y = function drawMotionBlur(e1, n, a) {
                        e1.setTransform(1, 0, 0, 1, 0, 0), a || !b ? e1.clearRect(0, 0, t.canvasWidth, t.canvasHeight) : mbclear(e1, 0, 0, t.canvasWidth, t.canvasHeight);
                        var i = g;
                        e1.drawImage(n, 0, 0, t.canvasWidth * i, t.canvasHeight * i, 0, 0, t.canvasWidth, t.canvasHeight);
                    };
                    (d[t.NODE] || V[t.NODE]) && (Y(j, W, V[t.NODE]), d[t.NODE] = !1), (d[t.DRAG] || V[t.DRAG]) && (Y(H, X, V[t.DRAG]), d[t.DRAG] = !1);
                }
                t.prevViewport = S, t.clearingMotionBlur && (t.clearingMotionBlur = !1, t.motionBlurCleared = !0, t.motionBlur = !0), p && (t.motionBlurTimeout = setTimeout(function() {
                    t.motionBlurTimeout = null, t.clearedForMotionBlur[t.NODE] = !1, t.clearedForMotionBlur[t.DRAG] = !1, t.motionBlur = !1, t.clearingMotionBlur = !h, t.mbFrames = 0, d[t.NODE] = !0, d[t.DRAG] = !0, t.redraw();
                }, 100)), a || n.emit("render");
            }, fc.drawSelectionRectangle = function(e1, t) {
                var n = this, a = n.cy, i = n.data, o = a.style(), s = e1.drawOnlyNodeLayer, l = e1.drawAllLayers, u = i.canvasNeedsRedraw, c = e1.forcedContext;
                if (n.showFps || !s && u[n.SELECT_BOX] && !l) {
                    var d = c || i.contexts[n.SELECT_BOX];
                    if (t(d), 1 == n.selection[4] && (n.hoverData.selecting || n.touchData.selecting)) {
                        var h = n.cy.zoom(), p = o.core("selection-box-border-width").value / h;
                        d.lineWidth = p, d.fillStyle = "rgba(" + o.core("selection-box-color").value[0] + "," + o.core("selection-box-color").value[1] + "," + o.core("selection-box-color").value[2] + "," + o.core("selection-box-opacity").value + ")", d.fillRect(n.selection[0], n.selection[1], n.selection[2] - n.selection[0], n.selection[3] - n.selection[1]), p > 0 && (d.strokeStyle = "rgba(" + o.core("selection-box-border-color").value[0] + "," + o.core("selection-box-border-color").value[1] + "," + o.core("selection-box-border-color").value[2] + "," + o.core("selection-box-opacity").value + ")", d.strokeRect(n.selection[0], n.selection[1], n.selection[2] - n.selection[0], n.selection[3] - n.selection[1]));
                    }
                    if (i.bgActivePosistion && !n.hoverData.selecting) {
                        h = n.cy.zoom();
                        var g = i.bgActivePosistion;
                        d.fillStyle = "rgba(" + o.core("active-bg-color").value[0] + "," + o.core("active-bg-color").value[1] + "," + o.core("active-bg-color").value[2] + "," + o.core("active-bg-opacity").value + ")", d.beginPath(), d.arc(g.x, g.y, o.core("active-bg-size").pfValue / h, 0, 2 * Math.PI), d.fill();
                    }
                    var v = n.lastRedrawTime;
                    if (n.showFps && v) {
                        v = Math.round(v);
                        var y = Math.round(1e3 / v), m = "1 frame = " + v + " ms = " + y + " fps";
                        if (d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "rgba(255, 0, 0, 0.75)", d.strokeStyle = "rgba(255, 0, 0, 0.75)", d.font = "30px Arial", !pc) {
                            var b = d.measureText(m);
                            pc = b.actualBoundingBoxAscent;
                        }
                        d.fillText(m, 0, pc);
                        d.strokeRect(0, pc + 10, 250, 20), d.fillRect(0, pc + 10, 250 * Math.min(y / 60, 1), 20);
                    }
                    l || (u[n.SELECT_BOX] = !1);
                }
            };
            var vc = "undefined" != typeof Float32Array ? Float32Array : Array;
            function create() {
                var e1 = new vc(9);
                return vc != Float32Array && (e1[1] = 0, e1[2] = 0, e1[3] = 0, e1[5] = 0, e1[6] = 0, e1[7] = 0), e1[0] = 1, e1[4] = 1, e1[8] = 1, e1;
            }
            function identity(e1) {
                return e1[0] = 1, e1[1] = 0, e1[2] = 0, e1[3] = 0, e1[4] = 1, e1[5] = 0, e1[6] = 0, e1[7] = 0, e1[8] = 1, e1;
            }
            function translate(e1, t, n) {
                var a = t[0], i = t[1], o = t[2], s = t[3], l = t[4], u = t[5], c = t[6], d = t[7], h = t[8], p = n[0], g = n[1];
                return e1[0] = a, e1[1] = i, e1[2] = o, e1[3] = s, e1[4] = l, e1[5] = u, e1[6] = p * a + g * s + c, e1[7] = p * i + g * l + d, e1[8] = p * o + g * u + h, e1;
            }
            function rotate(e1, t, n) {
                var a = t[0], i = t[1], o = t[2], s = t[3], l = t[4], u = t[5], c = t[6], d = t[7], h = t[8], p = Math.sin(n), g = Math.cos(n);
                return e1[0] = g * a + p * s, e1[1] = g * i + p * l, e1[2] = g * o + p * u, e1[3] = g * s - p * a, e1[4] = g * l - p * i, e1[5] = g * u - p * o, e1[6] = c, e1[7] = d, e1[8] = h, e1;
            }
            function scale(e1, t, n) {
                var a = n[0], i = n[1];
                return e1[0] = a * t[0], e1[1] = a * t[1], e1[2] = a * t[2], e1[3] = i * t[3], e1[4] = i * t[4], e1[5] = i * t[5], e1[6] = t[6], e1[7] = t[7], e1[8] = t[8], e1;
            }
            Math.hypot || (Math.hypot = function() {
                for(var e1 = 0, t = arguments.length; t--;)e1 += arguments[t] * arguments[t];
                return Math.sqrt(e1);
            });
            var yc = function() {
                return _createClass(function Atlas(e1, t, n, a) {
                    _classCallCheck(this, Atlas), this.debugID = Math.floor(1e4 * Math.random()), this.r = e1, this.texSize = t, this.texRows = n, this.texHeight = Math.floor(t / n), this.enableWrapping = !0, this.locked = !1, this.texture = null, this.needsBuffer = !0, this.freePointer = {
                        x: 0,
                        row: 0
                    }, this.keyToLocation = new Map, this.canvas = a(e1, t, t), this.scratch = a(e1, t, this.texHeight, "scratch");
                }, [
                    {
                        key: "lock",
                        value: function lock() {
                            this.locked = !0;
                        }
                    },
                    {
                        key: "getKeys",
                        value: function getKeys() {
                            return new Set(this.keyToLocation.keys());
                        }
                    },
                    {
                        key: "getScale",
                        value: function getScale(e1) {
                            var t = e1.w, n = e1.h, a = this.texHeight, i = this.texSize, o = a / n, s = t * o, l = n * o;
                            return s > i && (s = t * (o = i / t), l = n * o), {
                                scale: o,
                                texW: s,
                                texH: l
                            };
                        }
                    },
                    {
                        key: "draw",
                        value: function draw(e1, t, n) {
                            var a = this;
                            if (this.locked) throw new Error("can't draw, atlas is locked");
                            var i = this.texSize, o = this.texRows, s = this.texHeight, l = this.getScale(t), u = l.scale, c = l.texW, d = l.texH, h = function drawAt(e1, a) {
                                if (n && a) {
                                    var i = a.context, o = e1.x, l = e1.row, c = o, d = s * l;
                                    i.save(), i.translate(c, d), i.scale(u, u), n(i, t), i.restore();
                                }
                            }, p = [
                                null,
                                null
                            ], g = function drawNormal() {
                                h(a.freePointer, a.canvas), p[0] = {
                                    x: a.freePointer.x,
                                    y: a.freePointer.row * s,
                                    w: c,
                                    h: d
                                }, p[1] = {
                                    x: a.freePointer.x + c,
                                    y: a.freePointer.row * s,
                                    w: 0,
                                    h: d
                                }, a.freePointer.x += c, a.freePointer.x == i && (a.freePointer.x = 0, a.freePointer.row++);
                            }, v = function moveToStartOfNextRow() {
                                a.freePointer.x = 0, a.freePointer.row++;
                            };
                            if (this.freePointer.x + c <= i) g();
                            else {
                                if (this.freePointer.row >= o - 1) return !1;
                                this.freePointer.x === i ? (v(), g()) : this.enableWrapping ? function drawWrapped() {
                                    var e1 = a.scratch, t = a.canvas;
                                    e1.clear(), h({
                                        x: 0,
                                        row: 0
                                    }, e1);
                                    var n = i - a.freePointer.x, o = c - n, l = s, u = a.freePointer.x, g = a.freePointer.row * s, v = n;
                                    t.context.drawImage(e1, 0, 0, v, l, u, g, v, l), p[0] = {
                                        x: u,
                                        y: g,
                                        w: v,
                                        h: d
                                    };
                                    var y = n, m = (a.freePointer.row + 1) * s, b = o;
                                    t && t.context.drawImage(e1, y, 0, b, l, 0, m, b, l), p[1] = {
                                        x: 0,
                                        y: m,
                                        w: b,
                                        h: d
                                    }, a.freePointer.x = o, a.freePointer.row++;
                                }() : (v(), g());
                            }
                            return this.keyToLocation.set(e1, p), this.needsBuffer = !0, p;
                        }
                    },
                    {
                        key: "getOffsets",
                        value: function getOffsets(e1) {
                            return this.keyToLocation.get(e1);
                        }
                    },
                    {
                        key: "isEmpty",
                        value: function isEmpty() {
                            return 0 === this.freePointer.x && 0 === this.freePointer.row;
                        }
                    },
                    {
                        key: "canFit",
                        value: function canFit(e1) {
                            if (this.locked) return !1;
                            var t = this.texSize, n = this.texRows, a = this.getScale(e1).texW;
                            return !(this.freePointer.x + a > t) || this.freePointer.row < n - 1;
                        }
                    },
                    {
                        key: "bufferIfNeeded",
                        value: function bufferIfNeeded(e1) {
                            this.texture || (this.texture = function createTexture(e1, t) {
                                var n = e1.createTexture();
                                return n.buffer = function(t) {
                                    e1.bindTexture(e1.TEXTURE_2D, n), e1.texParameteri(e1.TEXTURE_2D, e1.TEXTURE_WRAP_S, e1.CLAMP_TO_EDGE), e1.texParameteri(e1.TEXTURE_2D, e1.TEXTURE_WRAP_T, e1.CLAMP_TO_EDGE), e1.texParameteri(e1.TEXTURE_2D, e1.TEXTURE_MAG_FILTER, e1.LINEAR), e1.texParameteri(e1.TEXTURE_2D, e1.TEXTURE_MIN_FILTER, e1.LINEAR_MIPMAP_NEAREST), e1.pixelStorei(e1.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), e1.texImage2D(e1.TEXTURE_2D, 0, e1.RGBA, e1.RGBA, e1.UNSIGNED_BYTE, t), e1.generateMipmap(e1.TEXTURE_2D), e1.bindTexture(e1.TEXTURE_2D, null);
                                }, n.deleteTexture = function() {
                                    e1.deleteTexture(n);
                                }, n;
                            }(e1, this.debugID)), this.needsBuffer && (this.texture.buffer(this.canvas), this.needsBuffer = !1, this.locked && (this.canvas = null, this.scratch = null));
                        }
                    },
                    {
                        key: "dispose",
                        value: function dispose() {
                            this.texture && (this.texture.deleteTexture(), this.texture = null), this.canvas = null, this.scratch = null, this.locked = !0;
                        }
                    }
                ]);
            }(), mc = function() {
                return _createClass(function AtlasCollection(e1, t, n, a) {
                    _classCallCheck(this, AtlasCollection), this.r = e1, this.texSize = t, this.texRows = n, this.createTextureCanvas = a, this.atlases = [], this.styleKeyToAtlas = new Map, this.markedKeys = new Set;
                }, [
                    {
                        key: "getKeys",
                        value: function getKeys() {
                            return new Set(this.styleKeyToAtlas.keys());
                        }
                    },
                    {
                        key: "_createAtlas",
                        value: function _createAtlas() {
                            var e1 = this.r, t = this.texSize, n = this.texRows, a = this.createTextureCanvas;
                            return new yc(e1, t, n, a);
                        }
                    },
                    {
                        key: "_getScratchCanvas",
                        value: function _getScratchCanvas() {
                            if (!this.scratch) {
                                var e1 = this.r, t = this.texSize, n = this.texRows, a = this.createTextureCanvas, i = Math.floor(t / n);
                                this.scratch = a(e1, t, i, "scratch");
                            }
                            return this.scratch;
                        }
                    },
                    {
                        key: "draw",
                        value: function draw(e1, t, n) {
                            var a = this.styleKeyToAtlas.get(e1);
                            return a || ((a = this.atlases[this.atlases.length - 1]) && a.canFit(t) || (a && a.lock(), a = this._createAtlas(), this.atlases.push(a)), a.draw(e1, t, n), this.styleKeyToAtlas.set(e1, a)), a;
                        }
                    },
                    {
                        key: "getAtlas",
                        value: function getAtlas(e1) {
                            return this.styleKeyToAtlas.get(e1);
                        }
                    },
                    {
                        key: "hasAtlas",
                        value: function hasAtlas(e1) {
                            return this.styleKeyToAtlas.has(e1);
                        }
                    },
                    {
                        key: "markKeyForGC",
                        value: function markKeyForGC(e1) {
                            this.markedKeys.add(e1);
                        }
                    },
                    {
                        key: "gc",
                        value: function gc() {
                            var e1 = this, t = this.markedKeys;
                            if (0 !== t.size) {
                                var n, i = [], o = new Map, s = null, l = _createForOfIteratorHelper(this.atlases);
                                try {
                                    var u = function _loop() {
                                        var a = n.value, l = a.getKeys(), u = function intersection(e1, t) {
                                            return e1.intersection ? e1.intersection(t) : new Set(_toConsumableArray(e1).filter(function(e1) {
                                                return t.has(e1);
                                            }));
                                        }(t, l);
                                        if (0 === u.size) return i.push(a), l.forEach(function(e1) {
                                            return o.set(e1, a);
                                        }), 1;
                                        s || (s = e1._createAtlas(), i.push(s));
                                        var c, d = _createForOfIteratorHelper(l);
                                        try {
                                            for(d.s(); !(c = d.n()).done;){
                                                var h = c.value;
                                                if (!u.has(h)) {
                                                    var p = _slicedToArray(a.getOffsets(h), 2), g = p[0], v = p[1];
                                                    s.canFit({
                                                        w: g.w + v.w,
                                                        h: g.h
                                                    }) || (s.lock(), s = e1._createAtlas(), i.push(s)), a.canvas && (e1._copyTextureToNewAtlas(h, a, s), o.set(h, s));
                                                }
                                            }
                                        } catch (e1) {
                                            d.e(e1);
                                        } finally{
                                            d.f();
                                        }
                                        a.dispose();
                                    };
                                    for(l.s(); !(n = l.n()).done;)u();
                                } catch (e1) {
                                    l.e(e1);
                                } finally{
                                    l.f();
                                }
                                this.atlases = i, this.styleKeyToAtlas = o, this.markedKeys = new Set;
                            } else a.log("nothing to garbage collect");
                        }
                    },
                    {
                        key: "_copyTextureToNewAtlas",
                        value: function _copyTextureToNewAtlas(e1, t, n) {
                            var a = _slicedToArray(t.getOffsets(e1), 2), i = a[0], o = a[1];
                            if (0 === o.w) n.draw(e1, i, function(e1) {
                                e1.drawImage(t.canvas, i.x, i.y, i.w, i.h, 0, 0, i.w, i.h);
                            });
                            else {
                                var s = this._getScratchCanvas();
                                s.clear(), s.context.drawImage(t.canvas, i.x, i.y, i.w, i.h, 0, 0, i.w, i.h), s.context.drawImage(t.canvas, o.x, o.y, o.w, o.h, i.w, 0, o.w, o.h);
                                var l = i.w + o.w, u = i.h;
                                n.draw(e1, {
                                    w: l,
                                    h: u
                                }, function(e1) {
                                    e1.drawImage(s, 0, 0, l, u, 0, 0, l, u);
                                });
                            }
                        }
                    },
                    {
                        key: "getCounts",
                        value: function getCounts() {
                            return {
                                keyCount: this.styleKeyToAtlas.size,
                                atlasCount: new Set(this.styleKeyToAtlas.values()).size
                            };
                        }
                    }
                ]);
            }();
            var bc = function() {
                return _createClass(function AtlasManager(e1, t) {
                    _classCallCheck(this, AtlasManager), this.r = e1, this.globalOptions = t, this.atlasSize = t.webglTexSize, this.maxAtlasesPerBatch = t.webglTexPerBatch, this.renderTypes = new Map, this.collections = new Map, this.typeAndIdToKey = new Map;
                }, [
                    {
                        key: "getAtlasSize",
                        value: function getAtlasSize() {
                            return this.atlasSize;
                        }
                    },
                    {
                        key: "addAtlasCollection",
                        value: function addAtlasCollection(e1, t) {
                            var n = this.globalOptions, a = n.webglTexSize, i = n.createTextureCanvas, o = t.texRows, s = this._cacheScratchCanvas(i), l = new mc(this.r, a, o, s);
                            this.collections.set(e1, l);
                        }
                    },
                    {
                        key: "addRenderType",
                        value: function addRenderType(e1, t) {
                            var n = t.collection;
                            if (!this.collections.has(n)) throw new Error("invalid atlas collection name '".concat(n, "'"));
                            var a = this.collections.get(n), i = ve({
                                type: e1,
                                atlasCollection: a
                            }, t);
                            this.renderTypes.set(e1, i);
                        }
                    },
                    {
                        key: "getRenderTypeOpts",
                        value: function getRenderTypeOpts(e1) {
                            return this.renderTypes.get(e1);
                        }
                    },
                    {
                        key: "getAtlasCollection",
                        value: function getAtlasCollection(e1) {
                            return this.collections.get(e1);
                        }
                    },
                    {
                        key: "_cacheScratchCanvas",
                        value: function _cacheScratchCanvas(e1) {
                            var t = -1, n = -1, a = null;
                            return function(i, o, s, l) {
                                return l ? (a && o == t && s == n || (t = o, n = s, a = e1(i, o, s)), a) : e1(i, o, s);
                            };
                        }
                    },
                    {
                        key: "_key",
                        value: function _key(e1, t) {
                            return "".concat(e1, "-").concat(t);
                        }
                    },
                    {
                        key: "invalidate",
                        value: function invalidate(e1) {
                            var t, n = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = a.forceRedraw, o = void 0 !== i && i, s = a.filterEle, l = void 0 === s ? function() {
                                return !0;
                            } : s, u = a.filterType, c = void 0 === u ? function() {
                                return !0;
                            } : u, d = !1, h = !1, p = _createForOfIteratorHelper(e1);
                            try {
                                for(p.s(); !(t = p.n()).done;){
                                    var g = t.value;
                                    if (l(g)) {
                                        var v, y = _createForOfIteratorHelper(this.renderTypes.values());
                                        try {
                                            var m = function _loop2() {
                                                var e1 = v.value, t = e1.type;
                                                if (c(t)) {
                                                    var a = n.collections.get(e1.collection), i = e1.getKey(g), s = Array.isArray(i) ? i : [
                                                        i
                                                    ];
                                                    if (o) s.forEach(function(e1) {
                                                        return a.markKeyForGC(e1);
                                                    }), h = !0;
                                                    else {
                                                        var l = e1.getID ? e1.getID(g) : g.id(), u = n._key(t, l), p = n.typeAndIdToKey.get(u);
                                                        void 0 === p || arrayEqual(s, p) || (d = !0, n.typeAndIdToKey.delete(u), p.forEach(function(e1) {
                                                            return a.markKeyForGC(e1);
                                                        }));
                                                    }
                                                }
                                            };
                                            for(y.s(); !(v = y.n()).done;)m();
                                        } catch (e1) {
                                            y.e(e1);
                                        } finally{
                                            y.f();
                                        }
                                    }
                                }
                            } catch (e1) {
                                p.e(e1);
                            } finally{
                                p.f();
                            }
                            return h && (this.gc(), d = !1), d;
                        }
                    },
                    {
                        key: "gc",
                        value: function gc() {
                            var e1, t = _createForOfIteratorHelper(this.collections.values());
                            try {
                                for(t.s(); !(e1 = t.n()).done;){
                                    e1.value.gc();
                                }
                            } catch (e1) {
                                t.e(e1);
                            } finally{
                                t.f();
                            }
                        }
                    },
                    {
                        key: "getOrCreateAtlas",
                        value: function getOrCreateAtlas(e1, t, n, a) {
                            var i = this.renderTypes.get(t), o = this.collections.get(i.collection), s = !1, l = o.draw(a, n, function(t) {
                                i.drawClipped ? (t.save(), t.beginPath(), t.rect(0, 0, n.w, n.h), t.clip(), i.drawElement(t, e1, n, !0, !0), t.restore()) : i.drawElement(t, e1, n, !0, !0), s = !0;
                            });
                            if (s) {
                                var u = i.getID ? i.getID(e1) : e1.id(), c = this._key(t, u);
                                this.typeAndIdToKey.has(c) ? this.typeAndIdToKey.get(c).push(a) : this.typeAndIdToKey.set(c, [
                                    a
                                ]);
                            }
                            return l;
                        }
                    },
                    {
                        key: "getAtlasInfo",
                        value: function getAtlasInfo(e1, t) {
                            var n = this, a = this.renderTypes.get(t), i = a.getKey(e1);
                            return (Array.isArray(i) ? i : [
                                i
                            ]).map(function(i) {
                                var o = a.getBoundingBox(e1, i), s = n.getOrCreateAtlas(e1, t, o, i), l = _slicedToArray(s.getOffsets(i), 2), u = l[0];
                                return {
                                    atlas: s,
                                    tex: u,
                                    tex1: u,
                                    tex2: l[1],
                                    bb: o
                                };
                            });
                        }
                    },
                    {
                        key: "getDebugInfo",
                        value: function getDebugInfo() {
                            var e1, t = [], n = _createForOfIteratorHelper(this.collections);
                            try {
                                for(n.s(); !(e1 = n.n()).done;){
                                    var a = _slicedToArray(e1.value, 2), i = a[0], o = a[1].getCounts(), s = o.keyCount, l = o.atlasCount;
                                    t.push({
                                        type: i,
                                        keyCount: s,
                                        atlasCount: l
                                    });
                                }
                            } catch (e1) {
                                n.e(e1);
                            } finally{
                                n.f();
                            }
                            return t;
                        }
                    }
                ]);
            }(), xc = function() {
                return _createClass(function AtlasBatchManager(e1) {
                    _classCallCheck(this, AtlasBatchManager), this.globalOptions = e1, this.atlasSize = e1.webglTexSize, this.maxAtlasesPerBatch = e1.webglTexPerBatch, this.batchAtlases = [];
                }, [
                    {
                        key: "getMaxAtlasesPerBatch",
                        value: function getMaxAtlasesPerBatch() {
                            return this.maxAtlasesPerBatch;
                        }
                    },
                    {
                        key: "getAtlasSize",
                        value: function getAtlasSize() {
                            return this.atlasSize;
                        }
                    },
                    {
                        key: "getIndexArray",
                        value: function getIndexArray() {
                            return Array.from({
                                length: this.maxAtlasesPerBatch
                            }, function(e1, t) {
                                return t;
                            });
                        }
                    },
                    {
                        key: "startBatch",
                        value: function startBatch() {
                            this.batchAtlases = [];
                        }
                    },
                    {
                        key: "getAtlasCount",
                        value: function getAtlasCount() {
                            return this.batchAtlases.length;
                        }
                    },
                    {
                        key: "getAtlases",
                        value: function getAtlases() {
                            return this.batchAtlases;
                        }
                    },
                    {
                        key: "canAddToCurrentBatch",
                        value: function canAddToCurrentBatch(e1) {
                            return this.batchAtlases.length !== this.maxAtlasesPerBatch || this.batchAtlases.includes(e1);
                        }
                    },
                    {
                        key: "getAtlasIndexForBatch",
                        value: function getAtlasIndexForBatch(e1) {
                            var t = this.batchAtlases.indexOf(e1);
                            if (t < 0) {
                                if (this.batchAtlases.length === this.maxAtlasesPerBatch) throw new Error("cannot add more atlases to batch");
                                this.batchAtlases.push(e1), t = this.batchAtlases.length - 1;
                            }
                            return t;
                        }
                    }
                ]);
            }(), wc = {
                SCREEN: {
                    name: "screen",
                    screen: !0
                },
                PICKING: {
                    name: "picking",
                    picking: !0
                }
            }, Ec = 1, Cc = 2, Tc = function() {
                return _createClass(function ElementDrawingWebGL(e1, t, n) {
                    _classCallCheck(this, ElementDrawingWebGL), this.r = e1, this.gl = t, this.maxInstances = n.webglBatchSize, this.atlasSize = n.webglTexSize, this.bgColor = n.bgColor, this.debug = n.webglDebug, this.batchDebugInfo = [], n.enableWrapping = !0, n.createTextureCanvas = createTextureCanvas, this.atlasManager = new bc(e1, n), this.batchManager = new xc(n), this.simpleShapeOptions = new Map, this.program = this._createShaderProgram(wc.SCREEN), this.pickingProgram = this._createShaderProgram(wc.PICKING), this.vao = this._createVAO();
                }, [
                    {
                        key: "addAtlasCollection",
                        value: function addAtlasCollection(e1, t) {
                            this.atlasManager.addAtlasCollection(e1, t);
                        }
                    },
                    {
                        key: "addTextureAtlasRenderType",
                        value: function addTextureAtlasRenderType(e1, t) {
                            this.atlasManager.addRenderType(e1, t);
                        }
                    },
                    {
                        key: "addSimpleShapeRenderType",
                        value: function addSimpleShapeRenderType(e1, t) {
                            this.simpleShapeOptions.set(e1, t);
                        }
                    },
                    {
                        key: "invalidate",
                        value: function invalidate(e1) {
                            var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).type, n = this.atlasManager;
                            return t ? n.invalidate(e1, {
                                filterType: function filterType(e1) {
                                    return e1 === t;
                                },
                                forceRedraw: !0
                            }) : n.invalidate(e1);
                        }
                    },
                    {
                        key: "gc",
                        value: function gc() {
                            this.atlasManager.gc();
                        }
                    },
                    {
                        key: "_createShaderProgram",
                        value: function _createShaderProgram(e1) {
                            var t = this.gl, n = "#version 300 es\n      precision highp float;\n\n      uniform mat3 uPanZoomMatrix;\n      uniform int  uAtlasSize;\n      \n      // instanced\n      in vec2 aPosition; // a vertex from the unit square\n      \n      in mat3 aTransform; // used to transform verticies, eg into a bounding box\n      in int aVertType; // the type of thing we are rendering\n\n      // the z-index that is output when using picking mode\n      in vec4 aIndex;\n      \n      // For textures\n      in int aAtlasId; // which shader unit/atlas to use\n      in vec4 aTex; // x/y/w/h of texture in atlas\n\n      // for edges\n      in vec4 aPointAPointB;\n      in vec4 aPointCPointD;\n      in vec2 aLineWidth; // also used for node border width\n\n      // simple shapes\n      in vec4 aCornerRadius; // for round-rectangle [top-right, bottom-right, top-left, bottom-left]\n      in vec4 aColor; // also used for edges\n      in vec4 aBorderColor; // aLineWidth is used for border width\n\n      // output values passed to the fragment shader\n      out vec2 vTexCoord;\n      out vec4 vColor;\n      out vec2 vPosition;\n      // flat values are not interpolated\n      flat out int vAtlasId; \n      flat out int vVertType;\n      flat out vec2 vTopRight;\n      flat out vec2 vBotLeft;\n      flat out vec4 vCornerRadius;\n      flat out vec4 vBorderColor;\n      flat out vec2 vBorderWidth;\n      flat out vec4 vIndex;\n      \n      void main(void) {\n        int vid = gl_VertexID;\n        vec2 position = aPosition; // TODO make this a vec3, simplifies some code below\n\n        if(aVertType == ".concat(0, ") {\n          float texX = aTex.x; // texture coordinates\n          float texY = aTex.y;\n          float texW = aTex.z;\n          float texH = aTex.w;\n\n          if(vid == 1 || vid == 2 || vid == 4) {\n            texX += texW;\n          }\n          if(vid == 2 || vid == 4 || vid == 5) {\n            texY += texH;\n          }\n\n          float d = float(uAtlasSize);\n          vTexCoord = vec2(texX / d, texY / d); // tex coords must be between 0 and 1\n\n          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);\n        }\n        else if(aVertType == ").concat(4, " || aVertType == ").concat(7, " \n             || aVertType == ").concat(5, " || aVertType == ").concat(6, ") { // simple shapes\n\n          // the bounding box is needed by the fragment shader\n          vBotLeft  = (aTransform * vec3(0, 0, 1)).xy; // flat\n          vTopRight = (aTransform * vec3(1, 1, 1)).xy; // flat\n          vPosition = (aTransform * vec3(position, 1)).xy; // will be interpolated\n\n          // calculations are done in the fragment shader, just pass these along\n          vColor = aColor;\n          vCornerRadius = aCornerRadius;\n          vBorderColor = aBorderColor;\n          vBorderWidth = aLineWidth;\n\n          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);\n        }\n        else if(aVertType == ").concat(1, ") {\n          vec2 source = aPointAPointB.xy;\n          vec2 target = aPointAPointB.zw;\n\n          // adjust the geometry so that the line is centered on the edge\n          position.y = position.y - 0.5;\n\n          // stretch the unit square into a long skinny rectangle\n          vec2 xBasis = target - source;\n          vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));\n          vec2 point = source + xBasis * position.x + yBasis * aLineWidth[0] * position.y;\n\n          gl_Position = vec4(uPanZoomMatrix * vec3(point, 1.0), 1.0);\n          vColor = aColor;\n        } \n        else if(aVertType == ").concat(2, ") {\n          vec2 pointA = aPointAPointB.xy;\n          vec2 pointB = aPointAPointB.zw;\n          vec2 pointC = aPointCPointD.xy;\n          vec2 pointD = aPointCPointD.zw;\n\n          // adjust the geometry so that the line is centered on the edge\n          position.y = position.y - 0.5;\n\n          vec2 p0, p1, p2, pos;\n          if(position.x == 0.0) { // The left side of the unit square\n            p0 = pointA;\n            p1 = pointB;\n            p2 = pointC;\n            pos = position;\n          } else { // The right side of the unit square, use same approach but flip the geometry upside down\n            p0 = pointD;\n            p1 = pointC;\n            p2 = pointB;\n            pos = vec2(0.0, -position.y);\n          }\n\n          vec2 p01 = p1 - p0;\n          vec2 p12 = p2 - p1;\n          vec2 p21 = p1 - p2;\n\n          // Find the normal vector.\n          vec2 tangent = normalize(normalize(p12) + normalize(p01));\n          vec2 normal = vec2(-tangent.y, tangent.x);\n\n          // Find the vector perpendicular to p0 -> p1.\n          vec2 p01Norm = normalize(vec2(-p01.y, p01.x));\n\n          // Determine the bend direction.\n          float sigma = sign(dot(p01 + p21, normal));\n          float width = aLineWidth[0];\n\n          if(sign(pos.y) == -sigma) {\n            // This is an intersecting vertex. Adjust the position so that there's no overlap.\n            vec2 point = 0.5 * width * normal * -sigma / dot(normal, p01Norm);\n            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);\n          } else {\n            // This is a non-intersecting vertex. Treat it like a mitre join.\n            vec2 point = 0.5 * width * normal * sigma * dot(normal, p01Norm);\n            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);\n          }\n\n          vColor = aColor;\n        } \n        else if(aVertType == ").concat(3, " && vid < 3) {\n          // massage the first triangle into an edge arrow\n          if(vid == 0)\n            position = vec2(-0.15, -0.3);\n          if(vid == 1)\n            position = vec2(  0.0,  0.0);\n          if(vid == 2)\n            position = vec2( 0.15, -0.3);\n\n          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);\n          vColor = aColor;\n        }\n        else {\n          gl_Position = vec4(2.0, 0.0, 0.0, 1.0); // discard vertex by putting it outside webgl clip space\n        }\n\n        vAtlasId = aAtlasId;\n        vVertType = aVertType;\n        vIndex = aIndex;\n      }\n    "), a = this.batchManager.getIndexArray(), i = "#version 300 es\n      precision highp float;\n\n      // declare texture unit for each texture atlas in the batch\n      ".concat(a.map(function(e1) {
                                return "uniform sampler2D uTexture".concat(e1, ";");
                            }).join("\n\t"), "\n\n      uniform vec4 uBGColor;\n      uniform float uZoom;\n\n      in vec2 vTexCoord;\n      in vec4 vColor;\n      in vec2 vPosition; // model coordinates\n\n      flat in int vAtlasId;\n      flat in vec4 vIndex;\n      flat in int vVertType;\n      flat in vec2 vTopRight;\n      flat in vec2 vBotLeft;\n      flat in vec4 vCornerRadius;\n      flat in vec4 vBorderColor;\n      flat in vec2 vBorderWidth;\n\n      out vec4 outColor;\n\n      ").concat("\n  float circleSD(vec2 p, float r) {\n    return distance(vec2(0), p) - r; // signed distance\n  }\n", "\n      ").concat("\n  float rectangleSD(vec2 p, vec2 b) {\n    vec2 d = abs(p)-b;\n    return distance(vec2(0),max(d,0.0)) + min(max(d.x,d.y),0.0);\n  }\n", "\n      ").concat("\n  float roundRectangleSD(vec2 p, vec2 b, vec4 cr) {\n    cr.xy = (p.x > 0.0) ? cr.xy : cr.zw;\n    cr.x  = (p.y > 0.0) ? cr.x  : cr.y;\n    vec2 q = abs(p) - b + cr.x;\n    return min(max(q.x, q.y), 0.0) + distance(vec2(0), max(q, 0.0)) - cr.x;\n  }\n", "\n      ").concat("\n  float ellipseSD(vec2 p, vec2 ab) {\n    p = abs( p ); // symmetry\n\n    // find root with Newton solver\n    vec2 q = ab*(p-ab);\n    float w = (q.x<q.y)? 1.570796327 : 0.0;\n    for( int i=0; i<5; i++ ) {\n      vec2 cs = vec2(cos(w),sin(w));\n      vec2 u = ab*vec2( cs.x,cs.y);\n      vec2 v = ab*vec2(-cs.y,cs.x);\n      w = w + dot(p-u,v)/(dot(p-u,u)+dot(v,v));\n    }\n    \n    // compute final point and distance\n    float d = length(p-ab*vec2(cos(w),sin(w)));\n    \n    // return signed distance\n    return (dot(p/ab,p/ab)>1.0) ? d : -d;\n  }\n", "\n\n      vec4 blend(vec4 top, vec4 bot) { // blend colors with premultiplied alpha\n        return vec4( \n          top.rgb + (bot.rgb * (1.0 - top.a)),\n          top.a   + (bot.a   * (1.0 - top.a)) \n        );\n      }\n\n      vec4 distInterp(vec4 cA, vec4 cB, float d) { // interpolate color using Signed Distance\n        // scale to the zoom level so that borders don't look blurry when zoomed in\n        // note 1.5 is an aribitrary value chosen because it looks good\n        return mix(cA, cB, 1.0 - smoothstep(0.0, 1.5 / uZoom, abs(d))); \n      }\n\n      void main(void) {\n        if(vVertType == ").concat(0, ") {\n          // look up the texel from the texture unit\n          ").concat(a.map(function(e1) {
                                return "if(vAtlasId == ".concat(e1, ") outColor = texture(uTexture").concat(e1, ", vTexCoord);");
                            }).join("\n\telse "), "\n        } \n        else if(vVertType == ").concat(3, ") {\n          // mimics how canvas renderer uses context.globalCompositeOperation = 'destination-out';\n          outColor = blend(vColor, uBGColor);\n          outColor.a = 1.0; // make opaque, masks out line under arrow\n        }\n        else if(vVertType == ").concat(4, " && vBorderWidth == vec2(0.0)) { // simple rectangle with no border\n          outColor = vColor; // unit square is already transformed to the rectangle, nothing else needs to be done\n        }\n        else if(vVertType == ").concat(4, " || vVertType == ").concat(7, " \n          || vVertType == ").concat(5, " || vVertType == ").concat(6, ") { // use SDF\n\n          float outerBorder = vBorderWidth[0];\n          float innerBorder = vBorderWidth[1];\n          float borderPadding = outerBorder * 2.0;\n          float w = vTopRight.x - vBotLeft.x - borderPadding;\n          float h = vTopRight.y - vBotLeft.y - borderPadding;\n          vec2 b = vec2(w/2.0, h/2.0); // half width, half height\n          vec2 p = vPosition - vec2(vTopRight.x - b[0] - outerBorder, vTopRight.y - b[1] - outerBorder); // translate to center\n\n          float d; // signed distance\n          if(vVertType == ").concat(4, ") {\n            d = rectangleSD(p, b);\n          } else if(vVertType == ").concat(7, " && w == h) {\n            d = circleSD(p, b.x); // faster than ellipse\n          } else if(vVertType == ").concat(7, ") {\n            d = ellipseSD(p, b);\n          } else {\n            d = roundRectangleSD(p, b, vCornerRadius.wzyx);\n          }\n\n          // use the distance to interpolate a color to smooth the edges of the shape, doesn't need multisampling\n          // we must smooth colors inwards, because we can't change pixels outside the shape's bounding box\n          if(d > 0.0) {\n            if(d > outerBorder) {\n              discard;\n            } else {\n              outColor = distInterp(vBorderColor, vec4(0), d - outerBorder);\n            }\n          } else {\n            if(d > innerBorder) {\n              vec4 outerColor = outerBorder == 0.0 ? vec4(0) : vBorderColor;\n              vec4 innerBorderColor = blend(vBorderColor, vColor);\n              outColor = distInterp(innerBorderColor, outerColor, d);\n            } \n            else {\n              vec4 outerColor;\n              if(innerBorder == 0.0 && outerBorder == 0.0) {\n                outerColor = vec4(0);\n              } else if(innerBorder == 0.0) {\n                outerColor = vBorderColor;\n              } else {\n                outerColor = blend(vBorderColor, vColor);\n              }\n              outColor = distInterp(vColor, outerColor, d - innerBorder);\n            }\n          }\n        }\n        else {\n          outColor = vColor;\n        }\n\n        ").concat(e1.picking ? "if(outColor.a == 0.0) discard;\n             else outColor = vIndex;" : "", "\n      }\n    "), o = function createProgram(e1, t, n) {
                                var a = compileShader(e1, e1.VERTEX_SHADER, t), i = compileShader(e1, e1.FRAGMENT_SHADER, n), o = e1.createProgram();
                                if (e1.attachShader(o, a), e1.attachShader(o, i), e1.linkProgram(o), !e1.getProgramParameter(o, e1.LINK_STATUS)) throw new Error("Could not initialize shaders");
                                return o;
                            }(t, n, i);
                            o.aPosition = t.getAttribLocation(o, "aPosition"), o.aIndex = t.getAttribLocation(o, "aIndex"), o.aVertType = t.getAttribLocation(o, "aVertType"), o.aTransform = t.getAttribLocation(o, "aTransform"), o.aAtlasId = t.getAttribLocation(o, "aAtlasId"), o.aTex = t.getAttribLocation(o, "aTex"), o.aPointAPointB = t.getAttribLocation(o, "aPointAPointB"), o.aPointCPointD = t.getAttribLocation(o, "aPointCPointD"), o.aLineWidth = t.getAttribLocation(o, "aLineWidth"), o.aColor = t.getAttribLocation(o, "aColor"), o.aCornerRadius = t.getAttribLocation(o, "aCornerRadius"), o.aBorderColor = t.getAttribLocation(o, "aBorderColor"), o.uPanZoomMatrix = t.getUniformLocation(o, "uPanZoomMatrix"), o.uAtlasSize = t.getUniformLocation(o, "uAtlasSize"), o.uBGColor = t.getUniformLocation(o, "uBGColor"), o.uZoom = t.getUniformLocation(o, "uZoom"), o.uTextures = [];
                            for(var s = 0; s < this.batchManager.getMaxAtlasesPerBatch(); s++)o.uTextures.push(t.getUniformLocation(o, "uTexture".concat(s)));
                            return o;
                        }
                    },
                    {
                        key: "_createVAO",
                        value: function _createVAO() {
                            var e1 = [
                                0,
                                0,
                                1,
                                0,
                                1,
                                1,
                                0,
                                0,
                                1,
                                1,
                                0,
                                1
                            ];
                            this.vertexCount = e1.length / 2;
                            var t = this.maxInstances, n = this.gl, a = this.program, i = n.createVertexArray();
                            return n.bindVertexArray(i), function createBufferStaticDraw(e1, t, n, a) {
                                var i = _slicedToArray(getTypeInfo(e1, t), 2), o = i[0], s = i[1], l = createTypedArray(e1, s, a), u = e1.createBuffer();
                                return e1.bindBuffer(e1.ARRAY_BUFFER, u), e1.bufferData(e1.ARRAY_BUFFER, l, e1.STATIC_DRAW), s === e1.FLOAT ? e1.vertexAttribPointer(n, o, s, !1, 0, 0) : s === e1.INT && e1.vertexAttribIPointer(n, o, s, 0, 0), e1.enableVertexAttribArray(n), e1.bindBuffer(e1.ARRAY_BUFFER, null), u;
                            }(n, "vec2", a.aPosition, e1), this.transformBuffer = function create3x3MatrixBufferDynamicDraw(e1, t, n) {
                                for(var a = new Float32Array(9 * t), i = new Array(t), o = 0; o < t; o++){
                                    var s = 9 * o * 4;
                                    i[o] = new Float32Array(a.buffer, s, 9);
                                }
                                var l = e1.createBuffer();
                                e1.bindBuffer(e1.ARRAY_BUFFER, l), e1.bufferData(e1.ARRAY_BUFFER, a.byteLength, e1.DYNAMIC_DRAW);
                                for(var u = 0; u < 3; u++){
                                    var c = n + u;
                                    e1.enableVertexAttribArray(c), e1.vertexAttribPointer(c, 3, e1.FLOAT, !1, 36, 12 * u), e1.vertexAttribDivisor(c, 1);
                                }
                                return e1.bindBuffer(e1.ARRAY_BUFFER, null), l.getMatrixView = function(e1) {
                                    return i[e1];
                                }, l.setData = function(e1, t) {
                                    i[t].set(e1, 0);
                                }, l.bufferSubData = function() {
                                    e1.bindBuffer(e1.ARRAY_BUFFER, l), e1.bufferSubData(e1.ARRAY_BUFFER, 0, a);
                                }, l;
                            }(n, t, a.aTransform), this.indexBuffer = createBufferDynamicDraw(n, t, "vec4", a.aIndex), this.vertTypeBuffer = createBufferDynamicDraw(n, t, "int", a.aVertType), this.atlasIdBuffer = createBufferDynamicDraw(n, t, "int", a.aAtlasId), this.texBuffer = createBufferDynamicDraw(n, t, "vec4", a.aTex), this.pointAPointBBuffer = createBufferDynamicDraw(n, t, "vec4", a.aPointAPointB), this.pointCPointDBuffer = createBufferDynamicDraw(n, t, "vec4", a.aPointCPointD), this.lineWidthBuffer = createBufferDynamicDraw(n, t, "vec2", a.aLineWidth), this.colorBuffer = createBufferDynamicDraw(n, t, "vec4", a.aColor), this.cornerRadiusBuffer = createBufferDynamicDraw(n, t, "vec4", a.aCornerRadius), this.borderColorBuffer = createBufferDynamicDraw(n, t, "vec4", a.aBorderColor), n.bindVertexArray(null), i;
                        }
                    },
                    {
                        key: "buffers",
                        get: function get() {
                            var e1 = this;
                            return this._buffers || (this._buffers = Object.keys(this).filter(function(e1) {
                                return e1.endsWith("Buffer");
                            }).map(function(t) {
                                return e1[t];
                            })), this._buffers;
                        }
                    },
                    {
                        key: "startFrame",
                        value: function startFrame(e1) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wc.SCREEN;
                            this.panZoomMatrix = e1, this.renderTarget = t, this.batchDebugInfo = [], this.wrappedCount = 0, this.simpleCount = 0, this.startBatch();
                        }
                    },
                    {
                        key: "startBatch",
                        value: function startBatch() {
                            this.instanceCount = 0, this.batchManager.startBatch();
                        }
                    },
                    {
                        key: "endFrame",
                        value: function endFrame() {
                            this.endBatch();
                        }
                    },
                    {
                        key: "_isVisible",
                        value: function _isVisible(e1, t) {
                            return !!e1.visible() && (!t || !t.isVisible || t.isVisible(e1));
                        }
                    },
                    {
                        key: "drawTexture",
                        value: function drawTexture(e1, t, n) {
                            var a = this.atlasManager, i = this.batchManager, o = a.getRenderTypeOpts(n);
                            if (this._isVisible(e1, o)) {
                                if (this.renderTarget.picking && o.getTexPickingMode) {
                                    var s = o.getTexPickingMode(e1);
                                    if (s === Ec) return;
                                    if (s == Cc) return void this.drawPickingRectangle(e1, t, n);
                                }
                                var l, u = _createForOfIteratorHelper(a.getAtlasInfo(e1, n));
                                try {
                                    for(u.s(); !(l = u.n()).done;){
                                        var c = l.value, d = c.atlas, h = c.tex1, p = c.tex2;
                                        i.canAddToCurrentBatch(d) || this.endBatch();
                                        for(var g = i.getAtlasIndexForBatch(d), v = 0, y = [
                                            [
                                                h,
                                                !0
                                            ],
                                            [
                                                p,
                                                !1
                                            ]
                                        ]; v < y.length; v++){
                                            var m = _slicedToArray(y[v], 2), b = m[0], x = m[1];
                                            if (0 != b.w) {
                                                var w = this.instanceCount;
                                                this.vertTypeBuffer.getView(w)[0] = 0, indexToVec4(t, this.indexBuffer.getView(w)), this.atlasIdBuffer.getView(w)[0] = g;
                                                var E = this.texBuffer.getView(w);
                                                E[0] = b.x, E[1] = b.y, E[2] = b.w, E[3] = b.h;
                                                var T = this.transformBuffer.getMatrixView(w);
                                                this.setTransformMatrix(e1, T, o, c, x), this.instanceCount++, x || this.wrappedCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                                            }
                                        }
                                    }
                                } catch (e1) {
                                    u.e(e1);
                                } finally{
                                    u.f();
                                }
                            }
                        }
                    },
                    {
                        key: "setTransformMatrix",
                        value: function setTransformMatrix(e1, t, n, a) {
                            var i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], o = 0;
                            if (n.shapeProps && n.shapeProps.padding && (o = e1.pstyle(n.shapeProps.padding).pfValue), a) {
                                var s = a.bb, l = a.tex1, u = a.tex2, c = l.w / (l.w + u.w);
                                i || (c = 1 - c);
                                var d = this._getAdjustedBB(s, o, i, c);
                                this._applyTransformMatrix(t, d, n, e1);
                            } else {
                                var h = n.getBoundingBox(e1), p = this._getAdjustedBB(h, o, !0, 1);
                                this._applyTransformMatrix(t, p, n, e1);
                            }
                        }
                    },
                    {
                        key: "_applyTransformMatrix",
                        value: function _applyTransformMatrix(e1, t, n, a) {
                            var i, o;
                            identity(e1);
                            var s = n.getRotation ? n.getRotation(a) : 0;
                            if (0 !== s) {
                                var l = n.getRotationPoint(a);
                                translate(e1, e1, [
                                    l.x,
                                    l.y
                                ]), rotate(e1, e1, s);
                                var u = n.getRotationOffset(a);
                                i = u.x + (t.xOffset || 0), o = u.y + (t.yOffset || 0);
                            } else i = t.x1, o = t.y1;
                            translate(e1, e1, [
                                i,
                                o
                            ]), scale(e1, e1, [
                                t.w,
                                t.h
                            ]);
                        }
                    },
                    {
                        key: "_getAdjustedBB",
                        value: function _getAdjustedBB(e1, t, n, a) {
                            var i = e1.x1, o = e1.y1, s = e1.w, l = e1.h;
                            t && (i -= t, o -= t, s += 2 * t, l += 2 * t);
                            var u = 0, c = s * a;
                            return n && a < 1 ? s = c : !n && a < 1 && (i += u = s - c, s = c), {
                                x1: i,
                                y1: o,
                                w: s,
                                h: l,
                                xOffset: u,
                                yOffset: e1.yOffset
                            };
                        }
                    },
                    {
                        key: "drawPickingRectangle",
                        value: function drawPickingRectangle(e1, t, n) {
                            var a = this.atlasManager.getRenderTypeOpts(n), i = this.instanceCount;
                            this.vertTypeBuffer.getView(i)[0] = 4, indexToVec4(t, this.indexBuffer.getView(i)), toWebGLColor([
                                0,
                                0,
                                0
                            ], 1, this.colorBuffer.getView(i));
                            var o = this.transformBuffer.getMatrixView(i);
                            this.setTransformMatrix(e1, o, a), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                        }
                    },
                    {
                        key: "drawNode",
                        value: function drawNode(e1, t, n) {
                            var a = this.simpleShapeOptions.get(n);
                            if (this._isVisible(e1, a)) {
                                var i = a.shapeProps, o = this._getVertTypeForShape(e1, i.shape);
                                if (void 0 === o || a.isSimple && !a.isSimple(e1)) this.drawTexture(e1, t, n);
                                else {
                                    var s = this.instanceCount;
                                    if (this.vertTypeBuffer.getView(s)[0] = o, 5 === o || 6 === o) {
                                        var l = a.getBoundingBox(e1), u = this._getCornerRadius(e1, i.radius, l), c = this.cornerRadiusBuffer.getView(s);
                                        c[0] = u, c[1] = u, c[2] = u, c[3] = u, 6 === o && (c[0] = 0, c[2] = 0);
                                    }
                                    indexToVec4(t, this.indexBuffer.getView(s)), toWebGLColor(e1.pstyle(i.color).value, e1.pstyle(i.opacity).value, this.colorBuffer.getView(s));
                                    var d = this.lineWidthBuffer.getView(s);
                                    if (d[0] = 0, d[1] = 0, i.border) {
                                        var h = e1.pstyle("border-width").value;
                                        if (h > 0) {
                                            toWebGLColor(e1.pstyle("border-color").value, e1.pstyle("border-opacity").value, this.borderColorBuffer.getView(s));
                                            var p = e1.pstyle("border-position").value;
                                            if ("inside" === p) d[0] = 0, d[1] = -h;
                                            else if ("outside" === p) d[0] = h, d[1] = 0;
                                            else {
                                                var g = h / 2;
                                                d[0] = g, d[1] = -g;
                                            }
                                        }
                                    }
                                    var v = this.transformBuffer.getMatrixView(s);
                                    this.setTransformMatrix(e1, v, a), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                                }
                            }
                        }
                    },
                    {
                        key: "_getVertTypeForShape",
                        value: function _getVertTypeForShape(e1, t) {
                            switch(e1.pstyle(t).value){
                                case "rectangle":
                                    return 4;
                                case "ellipse":
                                    return 7;
                                case "roundrectangle":
                                case "round-rectangle":
                                    return 5;
                                case "bottom-round-rectangle":
                                    return 6;
                                default:
                                    return;
                            }
                        }
                    },
                    {
                        key: "_getCornerRadius",
                        value: function _getCornerRadius(e1, t, n) {
                            var a = n.w, i = n.h;
                            if ("auto" === e1.pstyle(t).value) return bn(a, i);
                            var o = e1.pstyle(t).pfValue, s = a / 2, l = i / 2;
                            return Math.min(o, l, s);
                        }
                    },
                    {
                        key: "drawEdgeArrow",
                        value: function drawEdgeArrow(e1, t, n) {
                            if (e1.visible()) {
                                var a, i, o, s = e1._private.rscratch;
                                if ("source" === n ? (a = s.arrowStartX, i = s.arrowStartY, o = s.srcArrowAngle) : (a = s.arrowEndX, i = s.arrowEndY, o = s.tgtArrowAngle), !(isNaN(a) || null == a || isNaN(i) || null == i || isNaN(o) || null == o)) {
                                    if ("none" !== e1.pstyle(n + "-arrow-shape").value) {
                                        var l = e1.pstyle(n + "-arrow-color").value, u = e1.pstyle("opacity").value * e1.pstyle("line-opacity").value, c = e1.pstyle("width").pfValue, d = e1.pstyle("arrow-scale").value, h = this.r.getArrowWidth(c, d), p = this.instanceCount, g = this.transformBuffer.getMatrixView(p);
                                        identity(g), translate(g, g, [
                                            a,
                                            i
                                        ]), scale(g, g, [
                                            h,
                                            h
                                        ]), rotate(g, g, o), this.vertTypeBuffer.getView(p)[0] = 3, indexToVec4(t, this.indexBuffer.getView(p)), toWebGLColor(l, u, this.colorBuffer.getView(p)), this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                                    }
                                }
                            }
                        }
                    },
                    {
                        key: "drawEdgeLine",
                        value: function drawEdgeLine(e1, t) {
                            if (e1.visible()) {
                                var n = this._getEdgePoints(e1);
                                if (n) {
                                    var a = e1.pstyle("opacity").value, i = e1.pstyle("line-opacity").value, o = e1.pstyle("width").pfValue, s = e1.pstyle("line-color").value, l = a * i;
                                    if (n.length / 2 + this.instanceCount > this.maxInstances && this.endBatch(), 4 == n.length) {
                                        var u = this.instanceCount;
                                        this.vertTypeBuffer.getView(u)[0] = 1, indexToVec4(t, this.indexBuffer.getView(u)), toWebGLColor(s, l, this.colorBuffer.getView(u)), this.lineWidthBuffer.getView(u)[0] = o;
                                        var c = this.pointAPointBBuffer.getView(u);
                                        c[0] = n[0], c[1] = n[1], c[2] = n[2], c[3] = n[3], this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                                    } else for(var d = 0; d < n.length - 2; d += 2){
                                        var h = this.instanceCount;
                                        this.vertTypeBuffer.getView(h)[0] = 2, indexToVec4(t, this.indexBuffer.getView(h)), toWebGLColor(s, l, this.colorBuffer.getView(h)), this.lineWidthBuffer.getView(h)[0] = o;
                                        var p = n[d - 2], g = n[d - 1], v = n[d], y = n[d + 1], m = n[d + 2], b = n[d + 3], x = n[d + 4], w = n[d + 5];
                                        0 == d && (p = 2 * v - m + .001, g = 2 * y - b + .001), d == n.length - 4 && (x = 2 * m - v + .001, w = 2 * b - y + .001);
                                        var E = this.pointAPointBBuffer.getView(h);
                                        E[0] = p, E[1] = g, E[2] = v, E[3] = y;
                                        var T = this.pointCPointDBuffer.getView(h);
                                        T[0] = m, T[1] = b, T[2] = x, T[3] = w, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                                    }
                                }
                            }
                        }
                    },
                    {
                        key: "_getEdgePoints",
                        value: function _getEdgePoints(e1) {
                            var t = e1._private.rscratch;
                            if (!t.badLine && null != t.allpts && !isNaN(t.allpts[0])) {
                                var n = t.allpts;
                                if (4 == n.length) return n;
                                var a = this._getNumSegments(e1);
                                return this._getCurveSegmentPoints(n, a);
                            }
                        }
                    },
                    {
                        key: "_getNumSegments",
                        value: function _getNumSegments(e1) {
                            return Math.min(Math.max(15, 5), this.maxInstances);
                        }
                    },
                    {
                        key: "_getCurveSegmentPoints",
                        value: function _getCurveSegmentPoints(e1, t) {
                            if (4 == e1.length) return e1;
                            for(var n = Array(2 * (t + 1)), a = 0; a <= t; a++)if (0 == a) n[0] = e1[0], n[1] = e1[1];
                            else if (a == t) n[2 * a] = e1[e1.length - 2], n[2 * a + 1] = e1[e1.length - 1];
                            else {
                                var i = a / t;
                                this._setCurvePoint(e1, i, n, 2 * a);
                            }
                            return n;
                        }
                    },
                    {
                        key: "_setCurvePoint",
                        value: function _setCurvePoint(e1, t, n, a) {
                            if (!(e1.length <= 2)) {
                                for(var i = Array(e1.length - 2), o = 0; o < i.length; o += 2){
                                    var s = (1 - t) * e1[o] + t * e1[o + 2], l = (1 - t) * e1[o + 1] + t * e1[o + 3];
                                    i[o] = s, i[o + 1] = l;
                                }
                                return this._setCurvePoint(i, t, n, a);
                            }
                            n[a] = e1[0], n[a + 1] = e1[1];
                        }
                    },
                    {
                        key: "endBatch",
                        value: function endBatch() {
                            var e1 = this.gl, t = this.vao, n = this.vertexCount, a = this.instanceCount;
                            if (0 !== a) {
                                var i = this.renderTarget.picking ? this.pickingProgram : this.program;
                                e1.useProgram(i), e1.bindVertexArray(t);
                                var o, s = _createForOfIteratorHelper(this.buffers);
                                try {
                                    for(s.s(); !(o = s.n()).done;){
                                        o.value.bufferSubData(a);
                                    }
                                } catch (e1) {
                                    s.e(e1);
                                } finally{
                                    s.f();
                                }
                                for(var l = this.batchManager.getAtlases(), u = 0; u < l.length; u++)l[u].bufferIfNeeded(e1);
                                for(var c = 0; c < l.length; c++)e1.activeTexture(e1.TEXTURE0 + c), e1.bindTexture(e1.TEXTURE_2D, l[c].texture), e1.uniform1i(i.uTextures[c], c);
                                e1.uniform1f(i.uZoom, function getEffectiveZoom(e1) {
                                    var t = e1.pixelRatio;
                                    return e1.cy.zoom() * t;
                                }(this.r)), e1.uniformMatrix3fv(i.uPanZoomMatrix, !1, this.panZoomMatrix), e1.uniform1i(i.uAtlasSize, this.batchManager.getAtlasSize());
                                var d = toWebGLColor(this.bgColor, 1);
                                e1.uniform4fv(i.uBGColor, d), e1.drawArraysInstanced(e1.TRIANGLES, 0, n, a), e1.bindVertexArray(null), e1.bindTexture(e1.TEXTURE_2D, null), this.debug && this.batchDebugInfo.push({
                                    count: a,
                                    atlasCount: l.length
                                }), this.startBatch();
                            }
                        }
                    },
                    {
                        key: "getDebugInfo",
                        value: function getDebugInfo() {
                            var e1 = this.atlasManager.getDebugInfo(), t = e1.reduce(function(e1, t) {
                                return e1 + t.atlasCount;
                            }, 0), n = this.batchDebugInfo, a = n.reduce(function(e1, t) {
                                return e1 + t.count;
                            }, 0);
                            return {
                                atlasInfo: e1,
                                totalAtlases: t,
                                wrappedCount: this.wrappedCount,
                                simpleCount: this.simpleCount,
                                batchCount: n.length,
                                batchInfo: n,
                                totalInstances: a
                            };
                        }
                    }
                ]);
            }(), kc = {};
            function getLabelLines(e1, t) {
                var n = e1._private.rscratch;
                return rt(n, "labelWrapCachedLines", t) || [];
            }
            kc.initWebgl = function(e1, t) {
                var n = this, i = n.data.contexts[n.WEBGL];
                e1.bgColor = function getBGColor(e1) {
                    var t = e1.cy.container(), n = t && t.style && t.style.backgroundColor || "white";
                    return ye(n);
                }(n), e1.webglTexSize = Math.min(e1.webglTexSize, i.getParameter(i.MAX_TEXTURE_SIZE)), e1.webglTexRows = Math.min(e1.webglTexRows, 54), e1.webglTexRowsNodes = Math.min(e1.webglTexRowsNodes, 54), e1.webglBatchSize = Math.min(e1.webglBatchSize, 16384), e1.webglTexPerBatch = Math.min(e1.webglTexPerBatch, i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS)), n.webglDebug = e1.webglDebug, n.webglDebugShowAtlases = e1.webglDebugShowAtlases, n.pickingFrameBuffer = function createPickingFrameBuffer(e1) {
                    var t = e1.createFramebuffer();
                    e1.bindFramebuffer(e1.FRAMEBUFFER, t);
                    var n = e1.createTexture();
                    return e1.bindTexture(e1.TEXTURE_2D, n), e1.texParameteri(e1.TEXTURE_2D, e1.TEXTURE_MIN_FILTER, e1.LINEAR), e1.texParameteri(e1.TEXTURE_2D, e1.TEXTURE_WRAP_S, e1.CLAMP_TO_EDGE), e1.texParameteri(e1.TEXTURE_2D, e1.TEXTURE_WRAP_T, e1.CLAMP_TO_EDGE), e1.framebufferTexture2D(e1.FRAMEBUFFER, e1.COLOR_ATTACHMENT0, e1.TEXTURE_2D, n, 0), e1.bindFramebuffer(e1.FRAMEBUFFER, null), t.setFramebufferAttachmentSizes = function(t, a) {
                        e1.bindTexture(e1.TEXTURE_2D, n), e1.texImage2D(e1.TEXTURE_2D, 0, e1.RGBA, t, a, 0, e1.RGBA, e1.UNSIGNED_BYTE, null);
                    }, t;
                }(i), n.pickingFrameBuffer.needsDraw = !0, n.drawing = new Tc(n, i, e1);
                var o = function getLabelRotation(e1) {
                    return function(t) {
                        return n.getTextAngle(t, e1);
                    };
                }, s = function isLabelVisible(e1) {
                    return function(t) {
                        var n = t.pstyle(e1);
                        return n && n.value;
                    };
                }, l = function isLayerVisible(e1) {
                    return function(t) {
                        return t.pstyle("".concat(e1, "-opacity")).value > 0;
                    };
                }, u = function getTexPickingMode(e1) {
                    return "yes" === e1.pstyle("text-events").strValue ? Cc : Ec;
                }, c = function getBBForSimpleShape(e1) {
                    var t = e1.position(), n = t.x, a = t.y, i = e1.outerWidth(), o = e1.outerHeight();
                    return {
                        w: i,
                        h: o,
                        x1: n - i / 2,
                        y1: a - o / 2
                    };
                };
                n.drawing.addAtlasCollection("node", {
                    texRows: e1.webglTexRowsNodes
                }), n.drawing.addAtlasCollection("label", {
                    texRows: e1.webglTexRows
                }), n.drawing.addTextureAtlasRenderType("node-body", {
                    collection: "node",
                    getKey: t.getStyleKey,
                    getBoundingBox: t.getElementBox,
                    drawElement: t.drawElement
                }), n.drawing.addSimpleShapeRenderType("node-body", {
                    getBoundingBox: c,
                    isSimple: isSimpleShape,
                    shapeProps: {
                        shape: "shape",
                        color: "background-color",
                        opacity: "background-opacity",
                        radius: "corner-radius",
                        border: !0
                    }
                }), n.drawing.addSimpleShapeRenderType("node-overlay", {
                    getBoundingBox: c,
                    isVisible: l("overlay"),
                    shapeProps: {
                        shape: "overlay-shape",
                        color: "overlay-color",
                        opacity: "overlay-opacity",
                        padding: "overlay-padding",
                        radius: "overlay-corner-radius"
                    }
                }), n.drawing.addSimpleShapeRenderType("node-underlay", {
                    getBoundingBox: c,
                    isVisible: l("underlay"),
                    shapeProps: {
                        shape: "underlay-shape",
                        color: "underlay-color",
                        opacity: "underlay-opacity",
                        padding: "underlay-padding",
                        radius: "underlay-corner-radius"
                    }
                }), n.drawing.addTextureAtlasRenderType("label", {
                    collection: "label",
                    getTexPickingMode: u,
                    getKey: Sc(t.getLabelKey, null),
                    getBoundingBox: Pc(t.getLabelBox, null),
                    drawClipped: !0,
                    drawElement: t.drawLabel,
                    getRotation: o(null),
                    getRotationPoint: t.getLabelRotationPoint,
                    getRotationOffset: t.getLabelRotationOffset,
                    isVisible: s("label")
                }), n.drawing.addTextureAtlasRenderType("edge-source-label", {
                    collection: "label",
                    getTexPickingMode: u,
                    getKey: Sc(t.getSourceLabelKey, "source"),
                    getBoundingBox: Pc(t.getSourceLabelBox, "source"),
                    drawClipped: !0,
                    drawElement: t.drawSourceLabel,
                    getRotation: o("source"),
                    getRotationPoint: t.getSourceLabelRotationPoint,
                    getRotationOffset: t.getSourceLabelRotationOffset,
                    isVisible: s("source-label")
                }), n.drawing.addTextureAtlasRenderType("edge-target-label", {
                    collection: "label",
                    getTexPickingMode: u,
                    getKey: Sc(t.getTargetLabelKey, "target"),
                    getBoundingBox: Pc(t.getTargetLabelBox, "target"),
                    drawClipped: !0,
                    drawElement: t.drawTargetLabel,
                    getRotation: o("target"),
                    getRotationPoint: t.getTargetLabelRotationPoint,
                    getRotationOffset: t.getTargetLabelRotationOffset,
                    isVisible: s("target-label")
                });
                var d = Ee(function() {
                    a.log("garbage collect flag set"), n.data.gc = !0;
                }, 1e4);
                n.onUpdateEleCalcs(function(e1, t) {
                    var a = !1;
                    t && t.length > 0 && (a |= n.drawing.invalidate(t)), a && d();
                }), function overrideCanvasRendererFunctions(e1) {
                    var t = e1.render;
                    e1.render = function(n) {
                        n = n || {};
                        var a = e1.cy;
                        e1.webgl && (a.zoom() > Wu ? (!function clearWebgl(e1) {
                            var t = e1.data.contexts[e1.WEBGL];
                            t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT);
                        }(e1), t.call(e1, n)) : (!function clearCanvas(e1) {
                            var t = function clear(t) {
                                t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, e1.canvasWidth, e1.canvasHeight), t.restore();
                            };
                            t(e1.data.contexts[e1.NODE]), t(e1.data.contexts[e1.DRAG]);
                        }(e1), renderWebgl(e1, n, wc.SCREEN)));
                    };
                    var n = e1.matchCanvasSize;
                    e1.matchCanvasSize = function(t) {
                        n.call(e1, t), e1.pickingFrameBuffer.setFramebufferAttachmentSizes(e1.canvasWidth, e1.canvasHeight), e1.pickingFrameBuffer.needsDraw = !0;
                    }, e1.findNearestElements = function(t, n, a, i) {
                        return function findNearestElementsWebgl(e1, t, n) {
                            var a, i, o, s = function getPickingIndexes(e1, t, n, a, i) {
                                var o, s, l, u, c = getEffectivePanZoom(e1), d = c.pan, h = c.zoom, p = function modelToRenderedPosition(e1, t, n, a, i) {
                                    var o = a * n + t.x, s = i * n + t.y;
                                    return [
                                        o,
                                        s = Math.round(e1.canvasHeight - s)
                                    ];
                                }(e1, d, h, t, n), g = _slicedToArray(p, 2), v = g[0], y = g[1], m = 6;
                                if (o = v - m / 2, s = y - m / 2, u = m, 0 === (l = m) || 0 === u) return [];
                                var b = e1.data.contexts[e1.WEBGL];
                                b.bindFramebuffer(b.FRAMEBUFFER, e1.pickingFrameBuffer), e1.pickingFrameBuffer.needsDraw && (b.viewport(0, 0, b.canvas.width, b.canvas.height), renderWebgl(e1, null, wc.PICKING), e1.pickingFrameBuffer.needsDraw = !1);
                                var x = l * u, w = new Uint8Array(4 * x);
                                b.readPixels(o, s, l, u, b.RGBA, b.UNSIGNED_BYTE, w), b.bindFramebuffer(b.FRAMEBUFFER, null);
                                for(var E = new Set, T = 0; T < x; T++){
                                    var k = vec4ToIndex(w.slice(4 * T, 4 * T + 4)) - 1;
                                    k >= 0 && E.add(k);
                                }
                                return E;
                            }(e1, t, n), l = e1.getCachedZSortedEles(), u = _createForOfIteratorHelper(s);
                            try {
                                for(u.s(); !(o = u.n()).done;){
                                    var c = l[o.value];
                                    if (!a && c.isNode() && (a = c), !i && c.isEdge() && (i = c), a && i) break;
                                }
                            } catch (e1) {
                                u.e(e1);
                            } finally{
                                u.f();
                            }
                            return [
                                a,
                                i
                            ].filter(Boolean);
                        }(e1, t, n);
                    };
                    var a = e1.invalidateCachedZSortedEles;
                    e1.invalidateCachedZSortedEles = function() {
                        a.call(e1), e1.pickingFrameBuffer.needsDraw = !0;
                    };
                    var i = e1.notify;
                    e1.notify = function(t, n) {
                        i.call(e1, t, n), "viewport" === t || "bounds" === t ? e1.pickingFrameBuffer.needsDraw = !0 : "background" === t && e1.drawing.invalidate(n, {
                            type: "node-body"
                        });
                    };
                }(n);
            };
            var Sc = function getStyleKeysForLabel(e1, t) {
                return function(n) {
                    var a = e1(n), i = getLabelLines(n, t);
                    return i.length > 1 ? i.map(function(e1, t) {
                        return "".concat(a, "_").concat(t);
                    }) : a;
                };
            }, Pc = function getBoundingBoxForLabel(e1, t) {
                return function(n, a) {
                    var i = e1(n);
                    if ("string" == typeof a) {
                        var o = a.indexOf("_");
                        if (o > 0) {
                            var s = Number(a.substring(o + 1)), l = getLabelLines(n, t), u = i.h / l.length, c = u * s, d = i.y1 + c;
                            return {
                                x1: i.x1,
                                w: i.w,
                                y1: d,
                                h: u,
                                yOffset: c
                            };
                        }
                    }
                    return i;
                };
            };
            function setContextTransform(e1, t) {
                var n = e1.canvasWidth, a = e1.canvasHeight, i = getEffectivePanZoom(e1), o = i.pan, s = i.zoom;
                t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, n, a), t.translate(o.x, o.y), t.scale(s, s);
            }
            function drawEle(e1, t, n) {
                var a = e1.drawing;
                t += 1, n.isNode() ? (a.drawNode(n, t, "node-underlay"), a.drawNode(n, t, "node-body"), a.drawTexture(n, t, "label"), a.drawNode(n, t, "node-overlay")) : (a.drawEdgeLine(n, t), a.drawEdgeArrow(n, t, "source"), a.drawEdgeArrow(n, t, "target"), a.drawTexture(n, t, "label"), a.drawTexture(n, t, "edge-source-label"), a.drawTexture(n, t, "edge-target-label"));
            }
            function renderWebgl(e1, t, n) {
                var i;
                e1.webglDebug && (i = performance.now());
                var o = e1.drawing, s = 0;
                if (n.screen && e1.data.canvasNeedsRedraw[e1.SELECT_BOX] && function drawSelectionRectangle(e1, t) {
                    e1.drawSelectionRectangle(t, function(t) {
                        return setContextTransform(e1, t);
                    });
                }(e1, t), e1.data.canvasNeedsRedraw[e1.NODE] || n.picking) {
                    var l = e1.data.contexts[e1.WEBGL];
                    n.screen ? (l.clearColor(0, 0, 0, 0), l.enable(l.BLEND), l.blendFunc(l.ONE, l.ONE_MINUS_SRC_ALPHA)) : l.disable(l.BLEND), l.clear(l.COLOR_BUFFER_BIT | l.DEPTH_BUFFER_BIT), l.viewport(0, 0, l.canvas.width, l.canvas.height);
                    var u = function createPanZoomMatrix(e1) {
                        var t = e1.canvasWidth, n = e1.canvasHeight, a = getEffectivePanZoom(e1), i = a.pan, o = a.zoom, s = create();
                        translate(s, s, [
                            i.x,
                            i.y
                        ]), scale(s, s, [
                            o,
                            o
                        ]);
                        var l = create();
                        !function projection(e1, t, n) {
                            e1[0] = 2 / t, e1[1] = 0, e1[2] = 0, e1[3] = 0, e1[4] = -2 / n, e1[5] = 0, e1[6] = -1, e1[7] = 1, e1[8] = 1;
                        }(l, t, n);
                        var u = create();
                        return function multiply(e1, t, n) {
                            var a = t[0], i = t[1], o = t[2], s = t[3], l = t[4], u = t[5], c = t[6], d = t[7], h = t[8], p = n[0], g = n[1], v = n[2], y = n[3], m = n[4], b = n[5], x = n[6], w = n[7], E = n[8];
                            e1[0] = p * a + g * s + v * c, e1[1] = p * i + g * l + v * d, e1[2] = p * o + g * u + v * h, e1[3] = y * a + m * s + b * c, e1[4] = y * i + m * l + b * d, e1[5] = y * o + m * u + b * h, e1[6] = x * a + w * s + E * c, e1[7] = x * i + w * l + E * d, e1[8] = x * o + w * u + E * h;
                        }(u, l, s), u;
                    }(e1), c = e1.getCachedZSortedEles();
                    if (s = c.length, o.startFrame(u, n), n.screen) {
                        for(var d = 0; d < c.nondrag.length; d++)drawEle(e1, d, c.nondrag[d]);
                        for(var h = 0; h < c.drag.length; h++)drawEle(e1, h, c.drag[h]);
                    } else if (n.picking) for(var p = 0; p < c.length; p++)drawEle(e1, p, c[p]);
                    o.endFrame(), n.screen && e1.webglDebugShowAtlases && (!function drawAxes(e1) {
                        var t = e1.data.contexts[e1.NODE];
                        t.save(), setContextTransform(e1, t), t.strokeStyle = "rgba(0, 0, 0, 0.3)", t.beginPath(), t.moveTo(-1e3, 0), t.lineTo(1e3, 0), t.stroke(), t.beginPath(), t.moveTo(0, -1e3), t.lineTo(0, 1e3), t.stroke(), t.restore();
                    }(e1), function drawAtlases(e1) {
                        var t = function draw(t, n, a) {
                            for(var i = t.atlasManager.getAtlasCollection(n), o = e1.data.contexts[e1.NODE], s = i.atlases, l = 0; l < s.length; l++){
                                var u = s[l].canvas;
                                if (u) {
                                    var c = u.width, d = u.height, h = c * l, p = u.height * a;
                                    o.save(), o.scale(.4, .4), o.drawImage(u, h, p), o.strokeStyle = "black", o.rect(h, p, c, d), o.stroke(), o.restore();
                                }
                            }
                        }, n = 0;
                        t(e1.drawing, "node", n++), t(e1.drawing, "label", n++);
                    }(e1)), e1.data.canvasNeedsRedraw[e1.NODE] = !1, e1.data.canvasNeedsRedraw[e1.DRAG] = !1;
                }
                if (e1.webglDebug) {
                    var g = performance.now(), v = Math.ceil(g - i), y = o.getDebugInfo(), m = [
                        "".concat(s, " elements"),
                        "".concat(y.totalInstances, " instances"),
                        "".concat(y.batchCount, " batches"),
                        "".concat(y.totalAtlases, " atlases"),
                        "".concat(y.wrappedCount, " wrapped textures"),
                        "".concat(y.simpleCount, " simple shapes")
                    ].join(", ");
                    a.log("WebGL (".concat(n.name, ") - frame time ").concat(v, "ms")), a.log("Totals:"), a.log("  ".concat(m)), a.log("Texture Atlases Used:");
                    var b, x = _createForOfIteratorHelper(y.atlasInfo);
                    try {
                        for(x.s(); !(b = x.n()).done;){
                            var w = b.value;
                            a.log("  ".concat(w.type, ": ").concat(w.keyCount, " keys, ").concat(w.atlasCount, " atlases"));
                        }
                    } catch (e1) {
                        x.e(e1);
                    } finally{
                        x.f();
                    }
                    a.log("");
                }
                e1.data.gc && (a.log("Garbage Collect!"), e1.data.gc = !1, o.gc());
            }
            for(var _c = {
                drawPolygonPath: function(e1, t, n, a, i, o) {
                    var s = a / 2, l = i / 2;
                    e1.beginPath && e1.beginPath(), e1.moveTo(t + s * o[0], n + l * o[1]);
                    for(var u = 1; u < o.length / 2; u++)e1.lineTo(t + s * o[2 * u], n + l * o[2 * u + 1]);
                    e1.closePath();
                },
                drawRoundPolygonPath: function(e1, t, n, a, i, o, s) {
                    s.forEach(function(t) {
                        return drawPreparedRoundCorner(e1, t);
                    }), e1.closePath();
                },
                drawRoundRectanglePath: function(e1, t, n, a, i, o) {
                    var s = a / 2, l = i / 2, u = "auto" === o ? bn(a, i) : Math.min(o, l, s);
                    e1.beginPath && e1.beginPath(), e1.moveTo(t, n - l), e1.arcTo(t + s, n - l, t + s, n, u), e1.arcTo(t + s, n + l, t, n + l, u), e1.arcTo(t - s, n + l, t - s, n, u), e1.arcTo(t - s, n - l, t, n - l, u), e1.lineTo(t, n - l), e1.closePath();
                },
                drawBottomRoundRectanglePath: function(e1, t, n, a, i, o) {
                    var s = a / 2, l = i / 2, u = "auto" === o ? bn(a, i) : o;
                    e1.beginPath && e1.beginPath(), e1.moveTo(t, n - l), e1.lineTo(t + s, n - l), e1.lineTo(t + s, n), e1.arcTo(t + s, n + l, t, n + l, u), e1.arcTo(t - s, n + l, t - s, n, u), e1.lineTo(t - s, n - l), e1.lineTo(t, n - l), e1.closePath();
                },
                drawCutRectanglePath: function(e1, t, n, a, i, o, s) {
                    var l = a / 2, u = i / 2, c = "auto" === s ? 8 : s;
                    e1.beginPath && e1.beginPath(), e1.moveTo(t - l + c, n - u), e1.lineTo(t + l - c, n - u), e1.lineTo(t + l, n - u + c), e1.lineTo(t + l, n + u - c), e1.lineTo(t + l - c, n + u), e1.lineTo(t - l + c, n + u), e1.lineTo(t - l, n + u - c), e1.lineTo(t - l, n - u + c), e1.closePath();
                },
                drawBarrelPath: function(e1, t, n, a, i) {
                    var o = a / 2, s = i / 2, l = t - o, u = t + o, c = n - s, d = n + s, h = wn(a, i), p = h.widthOffset, g = h.heightOffset, v = h.ctrlPtOffsetPct * p;
                    e1.beginPath && e1.beginPath(), e1.moveTo(l, c + g), e1.lineTo(l, d - g), e1.quadraticCurveTo(l + v, d, l + p, d), e1.lineTo(u - p, d), e1.quadraticCurveTo(u - v, d, u, d - g), e1.lineTo(u, c + g), e1.quadraticCurveTo(u - v, c, u - p, c), e1.lineTo(l + p, c), e1.quadraticCurveTo(l + v, c, l, c + g), e1.closePath();
                }
            }, Bc = Math.sin(0), Dc = Math.cos(0), Ac = {}, Mc = {}, Ic = Math.PI / 40, Rc = 0 * Math.PI; Rc < 2 * Math.PI; Rc += Ic)Ac[Rc] = Math.sin(Rc), Mc[Rc] = Math.cos(Rc);
            _c.drawEllipsePath = function(e1, t, n, a, i) {
                if (e1.beginPath && e1.beginPath(), e1.ellipse) e1.ellipse(t, n, a / 2, i / 2, 0, 0, 2 * Math.PI);
                else for(var o, s, l = a / 2, u = i / 2, c = 0 * Math.PI; c < 2 * Math.PI; c += Ic)o = t - l * Ac[c] * Bc + l * Mc[c] * Dc, s = n + u * Mc[c] * Bc + u * Ac[c] * Dc, 0 === c ? e1.moveTo(o, s) : e1.lineTo(o, s);
                e1.closePath();
            };
            var Lc = {};
            function b64UriToB64(e1) {
                var t = e1.indexOf(",");
                return e1.substr(t + 1);
            }
            function output(e1, t, n) {
                var a = function getB64Uri() {
                    return t.toDataURL(n, e1.quality);
                };
                switch(e1.output){
                    case "blob-promise":
                        return new Ir(function(a, i) {
                            try {
                                t.toBlob(function(e1) {
                                    null != e1 ? a(e1) : i(new Error("`canvas.toBlob()` sent a null value in its callback"));
                                }, n, e1.quality);
                            } catch (e1) {
                                i(e1);
                            }
                        });
                    case "blob":
                        return function b64ToBlob(e1, t) {
                            for(var n = atob(e1), a = new ArrayBuffer(n.length), i = new Uint8Array(a), o = 0; o < n.length; o++)i[o] = n.charCodeAt(o);
                            return new Blob([
                                a
                            ], {
                                type: t
                            });
                        }(b64UriToB64(a()), n);
                    case "base64":
                        return b64UriToB64(a());
                    default:
                        return a();
                }
            }
            Lc.createBuffer = function(e1, t) {
                var n = document.createElement("canvas");
                return n.width = e1, n.height = t, [
                    n,
                    n.getContext("2d")
                ];
            }, Lc.bufferCanvasImage = function(e1) {
                var t = this.cy, n = t.mutableElements().boundingBox(), a = this.findContainerClientCoords(), i = e1.full ? Math.ceil(n.w) : a[2], o = e1.full ? Math.ceil(n.h) : a[3], s = U(e1.maxWidth) || U(e1.maxHeight), l = this.getPixelRatio(), u = 1;
                if (void 0 !== e1.scale) i *= e1.scale, o *= e1.scale, u = e1.scale;
                else if (s) {
                    var c = 1 / 0, d = 1 / 0;
                    U(e1.maxWidth) && (c = u * e1.maxWidth / i), U(e1.maxHeight) && (d = u * e1.maxHeight / o), i *= u = Math.min(c, d), o *= u;
                }
                s || (i *= l, o *= l, u *= l);
                var h = document.createElement("canvas");
                h.width = i, h.height = o, h.style.width = i + "px", h.style.height = o + "px";
                var p = h.getContext("2d");
                if (i > 0 && o > 0) {
                    p.clearRect(0, 0, i, o), p.globalCompositeOperation = "source-over";
                    var g = this.getCachedZSortedEles();
                    if (e1.full) p.translate(-n.x1 * u, -n.y1 * u), p.scale(u, u), this.drawElements(p, g), p.scale(1 / u, 1 / u), p.translate(n.x1 * u, n.y1 * u);
                    else {
                        var v = t.pan(), y = {
                            x: v.x * u,
                            y: v.y * u
                        };
                        u *= t.zoom(), p.translate(y.x, y.y), p.scale(u, u), this.drawElements(p, g), p.scale(1 / u, 1 / u), p.translate(-y.x, -y.y);
                    }
                    e1.bg && (p.globalCompositeOperation = "destination-over", p.fillStyle = e1.bg, p.rect(0, 0, i, o), p.fill());
                }
                return h;
            }, Lc.png = function(e1) {
                return output(e1, this.bufferCanvasImage(e1), "image/png");
            }, Lc.jpg = function(e1) {
                return output(e1, this.bufferCanvasImage(e1), "image/jpeg");
            };
            var Nc = {
                nodeShapeImpl: function(e1, t, n, a, i, o, s, l) {
                    switch(e1){
                        case "ellipse":
                            return this.drawEllipsePath(t, n, a, i, o);
                        case "polygon":
                            return this.drawPolygonPath(t, n, a, i, o, s);
                        case "round-polygon":
                            return this.drawRoundPolygonPath(t, n, a, i, o, s, l);
                        case "roundrectangle":
                        case "round-rectangle":
                            return this.drawRoundRectanglePath(t, n, a, i, o, l);
                        case "cutrectangle":
                        case "cut-rectangle":
                            return this.drawCutRectanglePath(t, n, a, i, o, s, l);
                        case "bottomroundrectangle":
                        case "bottom-round-rectangle":
                            return this.drawBottomRoundRectanglePath(t, n, a, i, o, l);
                        case "barrel":
                            return this.drawBarrelPath(t, n, a, i, o);
                    }
                }
            }, Oc = CanvasRenderer, zc = CanvasRenderer.prototype;
            function CanvasRenderer(e1) {
                var t = this, n = t.cy.window().document;
                e1.webgl && (zc.CANVAS_LAYERS = t.CANVAS_LAYERS = 4, a.log("webgl rendering enabled")), t.data = {
                    canvases: new Array(zc.CANVAS_LAYERS),
                    contexts: new Array(zc.CANVAS_LAYERS),
                    canvasNeedsRedraw: new Array(zc.CANVAS_LAYERS),
                    bufferCanvases: new Array(zc.BUFFER_COUNT),
                    bufferContexts: new Array(zc.CANVAS_LAYERS)
                };
                var i = "-webkit-tap-highlight-color", s = "rgba(0,0,0,0)";
                t.data.canvasContainer = n.createElement("div");
                var l = t.data.canvasContainer.style;
                t.data.canvasContainer.style[i] = s, l.position = "relative", l.zIndex = "0", l.overflow = "hidden";
                var u = e1.cy.container();
                u.appendChild(t.data.canvasContainer), u.style[i] = s;
                var c = {
                    "-webkit-user-select": "none",
                    "-moz-user-select": "-moz-none",
                    "user-select": "none",
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                    "outline-style": "none"
                };
                (function ms() {
                    return o && o.userAgent.match(/msie|trident|edge/i);
                })() && (c["-ms-touch-action"] = "none", c["touch-action"] = "none");
                for(var d = 0; d < zc.CANVAS_LAYERS; d++){
                    var h = t.data.canvases[d] = n.createElement("canvas"), p = zc.CANVAS_TYPES[d];
                    t.data.contexts[d] = h.getContext(p), t.data.contexts[d] || Ke("Could not create canvas of type " + p), Object.keys(c).forEach(function(e1) {
                        h.style[e1] = c[e1];
                    }), h.style.position = "absolute", h.setAttribute("data-id", "layer" + d), h.style.zIndex = String(zc.CANVAS_LAYERS - d), t.data.canvasContainer.appendChild(h), t.data.canvasNeedsRedraw[d] = !1;
                }
                t.data.topCanvas = t.data.canvases[0], t.data.canvases[zc.NODE].setAttribute("data-id", "layer" + zc.NODE + "-node"), t.data.canvases[zc.SELECT_BOX].setAttribute("data-id", "layer" + zc.SELECT_BOX + "-selectbox"), t.data.canvases[zc.DRAG].setAttribute("data-id", "layer" + zc.DRAG + "-drag"), t.data.canvases[zc.WEBGL] && t.data.canvases[zc.WEBGL].setAttribute("data-id", "layer" + zc.WEBGL + "-webgl");
                for(d = 0; d < zc.BUFFER_COUNT; d++)t.data.bufferCanvases[d] = n.createElement("canvas"), t.data.bufferContexts[d] = t.data.bufferCanvases[d].getContext("2d"), t.data.bufferCanvases[d].style.position = "absolute", t.data.bufferCanvases[d].setAttribute("data-id", "buffer" + d), t.data.bufferCanvases[d].style.zIndex = String(-d - 1), t.data.bufferCanvases[d].style.visibility = "hidden";
                t.pathsEnabled = !0;
                var g = jt(), v = function getCenterOffset(e1) {
                    return {
                        x: -e1.w / 2,
                        y: -e1.h / 2
                    };
                }, y = function getStyleKey(e1) {
                    return e1[0]._private.nodeKey;
                }, m = function getLabelKey(e1) {
                    return e1[0]._private.labelStyleKey;
                }, b = function getSourceLabelKey(e1) {
                    return e1[0]._private.sourceLabelStyleKey;
                }, x = function getTargetLabelKey(e1) {
                    return e1[0]._private.targetLabelStyleKey;
                }, w = function drawElement(e1, n, a, i, o) {
                    return t.drawElement(e1, n, a, !1, !1, o);
                }, E = function drawLabel(e1, n, a, i, o) {
                    return t.drawElementText(e1, n, a, i, "main", o);
                }, T = function drawSourceLabel(e1, n, a, i, o) {
                    return t.drawElementText(e1, n, a, i, "source", o);
                }, k = function drawTargetLabel(e1, n, a, i, o) {
                    return t.drawElementText(e1, n, a, i, "target", o);
                }, S = function getElementBox(e1) {
                    return e1.boundingBox(), e1[0]._private.bodyBounds;
                }, P = function getLabelBox(e1) {
                    return e1.boundingBox(), e1[0]._private.labelBounds.main || g;
                }, _ = function getSourceLabelBox(e1) {
                    return e1.boundingBox(), e1[0]._private.labelBounds.source || g;
                }, D = function getTargetLabelBox(e1) {
                    return e1.boundingBox(), e1[0]._private.labelBounds.target || g;
                }, M = function isLabelVisibleAtScale(e1, t) {
                    return t;
                }, I = function getElementRotationPoint(e1) {
                    return function getBoxCenter(e1) {
                        return {
                            x: (e1.x1 + e1.x2) / 2,
                            y: (e1.y1 + e1.y2) / 2
                        };
                    }(S(e1));
                }, R = function addTextMargin(e1, t, n) {
                    var a = e1 ? e1 + "-" : "";
                    return {
                        x: t.x + n.pstyle(a + "text-margin-x").pfValue,
                        y: t.y + n.pstyle(a + "text-margin-y").pfValue
                    };
                }, L = function getRsPt(e1, t, n) {
                    var a = e1[0]._private.rscratch;
                    return {
                        x: a[t],
                        y: a[n]
                    };
                }, N = function getLabelRotationPoint(e1) {
                    return R("", L(e1, "labelX", "labelY"), e1);
                }, O = function getSourceLabelRotationPoint(e1) {
                    return R("source", L(e1, "sourceLabelX", "sourceLabelY"), e1);
                }, z = function getTargetLabelRotationPoint(e1) {
                    return R("target", L(e1, "targetLabelX", "targetLabelY"), e1);
                }, V = function getElementRotationOffset(e1) {
                    return v(S(e1));
                }, q = function getSourceLabelRotationOffset(e1) {
                    return v(_(e1));
                }, j = function getTargetLabelRotationOffset(e1) {
                    return v(D(e1));
                }, W = function getLabelRotationOffset(e1) {
                    var t = P(e1), n = v(P(e1));
                    if (e1.isNode()) {
                        switch(e1.pstyle("text-halign").value){
                            case "left":
                                n.x = -t.w - (t.leftPad || 0);
                                break;
                            case "right":
                                n.x = -(t.rightPad || 0);
                        }
                        switch(e1.pstyle("text-valign").value){
                            case "top":
                                n.y = -t.h - (t.topPad || 0);
                                break;
                            case "bottom":
                                n.y = -(t.botPad || 0);
                        }
                    }
                    return n;
                }, H = t.data.eleTxrCache = new Yu(t, {
                    getKey: y,
                    doesEleInvalidateKey: function backgroundTimestampHasChanged(e1) {
                        var t = e1[0]._private;
                        return !(t.oldBackgroundTimestamp === t.backgroundTimestamp);
                    },
                    drawElement: w,
                    getBoundingBox: S,
                    getRotationPoint: I,
                    getRotationOffset: V,
                    allowEdgeTxrCaching: !1,
                    allowParentTxrCaching: !1
                }), X = t.data.lblTxrCache = new Yu(t, {
                    getKey: m,
                    drawElement: E,
                    getBoundingBox: P,
                    getRotationPoint: N,
                    getRotationOffset: W,
                    isVisible: M
                }), Y = t.data.slbTxrCache = new Yu(t, {
                    getKey: b,
                    drawElement: T,
                    getBoundingBox: _,
                    getRotationPoint: O,
                    getRotationOffset: q,
                    isVisible: M
                }), K = t.data.tlbTxrCache = new Yu(t, {
                    getKey: x,
                    drawElement: k,
                    getBoundingBox: D,
                    getRotationPoint: z,
                    getRotationOffset: j,
                    isVisible: M
                }), G = t.data.lyrTxrCache = new Gu(t);
                t.onUpdateEleCalcs(function invalidateTextureCaches(e1, t) {
                    H.invalidateElements(t), X.invalidateElements(t), Y.invalidateElements(t), K.invalidateElements(t), G.invalidateElements(t);
                    for(var n = 0; n < t.length; n++){
                        var a = t[n]._private;
                        a.oldBackgroundTimestamp = a.backgroundTimestamp;
                    }
                });
                var U = function refineInLayers(e1) {
                    for(var t = 0; t < e1.length; t++)G.enqueueElementRefinement(e1[t].ele);
                };
                H.onDequeue(U), X.onDequeue(U), Y.onDequeue(U), K.onDequeue(U), e1.webgl && t.initWebgl(e1, {
                    getStyleKey: y,
                    getLabelKey: m,
                    getSourceLabelKey: b,
                    getTargetLabelKey: x,
                    drawElement: w,
                    drawLabel: E,
                    drawSourceLabel: T,
                    drawTargetLabel: k,
                    getElementBox: S,
                    getLabelBox: P,
                    getSourceLabelBox: _,
                    getTargetLabelBox: D,
                    getElementRotationPoint: I,
                    getElementRotationOffset: V,
                    getLabelRotationPoint: N,
                    getSourceLabelRotationPoint: O,
                    getTargetLabelRotationPoint: z,
                    getLabelRotationOffset: W,
                    getSourceLabelRotationOffset: q,
                    getTargetLabelRotationOffset: j
                });
            }
            zc.CANVAS_LAYERS = 3, zc.SELECT_BOX = 0, zc.DRAG = 1, zc.NODE = 2, zc.WEBGL = 3, zc.CANVAS_TYPES = [
                "2d",
                "2d",
                "2d",
                "webgl2"
            ], zc.BUFFER_COUNT = 3, zc.TEXTURE_BUFFER = 0, zc.MOTIONBLUR_BUFFER_NODE = 1, zc.MOTIONBLUR_BUFFER_DRAG = 2, zc.redrawHint = function(e1, t) {
                var n = this;
                switch(e1){
                    case "eles":
                        n.data.canvasNeedsRedraw[zc.NODE] = t;
                        break;
                    case "drag":
                        n.data.canvasNeedsRedraw[zc.DRAG] = t;
                        break;
                    case "select":
                        n.data.canvasNeedsRedraw[zc.SELECT_BOX] = t;
                        break;
                    case "gc":
                        n.data.gc = !0;
                }
            };
            var Fc = "undefined" != typeof Path2D;
            zc.path2dEnabled = function(e1) {
                if (void 0 === e1) return this.pathsEnabled;
                this.pathsEnabled = !!e1;
            }, zc.usePaths = function() {
                return Fc && this.pathsEnabled;
            }, zc.setImgSmoothing = function(e1, t) {
                null != e1.imageSmoothingEnabled ? e1.imageSmoothingEnabled = t : (e1.webkitImageSmoothingEnabled = t, e1.mozImageSmoothingEnabled = t, e1.msImageSmoothingEnabled = t);
            }, zc.getImgSmoothing = function(e1) {
                return null != e1.imageSmoothingEnabled ? e1.imageSmoothingEnabled : e1.webkitImageSmoothingEnabled || e1.mozImageSmoothingEnabled || e1.msImageSmoothingEnabled;
            }, zc.makeOffscreenCanvas = function(e1, t) {
                var n;
                "undefined" !== ("undefined" == typeof OffscreenCanvas ? "undefined" : _typeof(OffscreenCanvas)) ? n = new OffscreenCanvas(e1, t) : ((n = this.cy.window().document.createElement("canvas")).width = e1, n.height = t);
                return n;
            }, [
                Ju,
                ec,
                sc,
                uc,
                cc,
                dc,
                fc,
                kc,
                _c,
                Lc,
                Nc
            ].forEach(function(e1) {
                ve(zc, e1);
            });
            var Vc = [
                {
                    type: "layout",
                    extensions: Kl
                },
                {
                    type: "renderer",
                    extensions: [
                        {
                            name: "null",
                            impl: NullRenderer
                        },
                        {
                            name: "base",
                            impl: zu
                        },
                        {
                            name: "canvas",
                            impl: Oc
                        }
                    ]
                }
            ], qc = {}, jc = {};
            function setExtension(e1, t, n) {
                var a = n, i = function overrideErr(n) {
                    Ue("Can not register `" + t + "` for `" + e1 + "` since `" + n + "` already exists in the prototype and can not be overridden");
                };
                if ("core" === e1) {
                    if (fl.prototype[t]) return i(t);
                    fl.prototype[t] = n;
                } else if ("collection" === e1) {
                    if (zs.prototype[t]) return i(t);
                    zs.prototype[t] = n;
                } else if ("layout" === e1) {
                    for(var o = function Layout(e1) {
                        this.options = e1, n.call(this, e1), G(this._private) || (this._private = {}), this._private.cy = e1.cy, this._private.listeners = [], this.createEmitter();
                    }, s = o.prototype = Object.create(n.prototype), l = [], u = 0; u < l.length; u++){
                        var c = l[u];
                        s[c] = s[c] || function() {
                            return this;
                        };
                    }
                    s.start && !s.run ? s.run = function() {
                        return this.start(), this;
                    } : !s.start && s.run && (s.start = function() {
                        return this.run(), this;
                    });
                    var d = n.prototype.stop;
                    s.stop = function() {
                        var e1 = this.options;
                        if (e1 && e1.animate) {
                            var t = this.animations;
                            if (t) for(var n = 0; n < t.length; n++)t[n].stop();
                        }
                        return d ? d.call(this) : this.emit("layoutstop"), this;
                    }, s.destroy || (s.destroy = function() {
                        return this;
                    }), s.cy = function() {
                        return this._private.cy;
                    };
                    var h = function getCy(e1) {
                        return e1._private.cy;
                    }, p = {
                        addEventFields: function addEventFields(e1, t) {
                            t.layout = e1, t.cy = h(e1), t.target = e1;
                        },
                        bubble: function bubble() {
                            return !0;
                        },
                        parent: function parent(e1) {
                            return h(e1);
                        }
                    };
                    ve(s, {
                        createEmitter: function createEmitter() {
                            return this._private.emitter = new Emitter(p, this), this;
                        },
                        emitter: function emitter() {
                            return this._private.emitter;
                        },
                        on: function on(e1, t) {
                            return this.emitter().on(e1, t), this;
                        },
                        one: function one(e1, t) {
                            return this.emitter().one(e1, t), this;
                        },
                        once: function once(e1, t) {
                            return this.emitter().one(e1, t), this;
                        },
                        removeListener: function removeListener(e1, t) {
                            return this.emitter().removeListener(e1, t), this;
                        },
                        removeAllListeners: function removeAllListeners() {
                            return this.emitter().removeAllListeners(), this;
                        },
                        emit: function emit(e1, t) {
                            return this.emitter().emit(e1, t), this;
                        }
                    }), Fi.eventAliasesOn(s), a = o;
                } else if ("renderer" === e1 && "null" !== t && "base" !== t) {
                    var g = getExtension("renderer", "base"), v = g.prototype, y = n, m = n.prototype, b = function Renderer() {
                        g.apply(this, arguments), y.apply(this, arguments);
                    }, x = b.prototype;
                    for(var w in v){
                        var E = v[w];
                        if (null != m[w]) return i(w);
                        x[w] = E;
                    }
                    for(var T in m)x[T] = m[T];
                    v.clientFunctions.forEach(function(e1) {
                        x[e1] = x[e1] || function() {
                            Ke("Renderer does not implement `renderer." + e1 + "()` on its prototype");
                        };
                    }), a = b;
                } else if ("__proto__" === e1 || "constructor" === e1 || "prototype" === e1) return Ke(e1 + " is an illegal type to be registered, possibly lead to prototype pollutions");
                return be({
                    map: qc,
                    keys: [
                        e1,
                        t
                    ],
                    value: a
                });
            }
            function getExtension(e1, t) {
                return xe({
                    map: qc,
                    keys: [
                        e1,
                        t
                    ]
                });
            }
            function setModule(e1, t, n, a, i) {
                return be({
                    map: jc,
                    keys: [
                        e1,
                        t,
                        n,
                        a
                    ],
                    value: i
                });
            }
            function getModule(e1, t, n, a) {
                return xe({
                    map: jc,
                    keys: [
                        e1,
                        t,
                        n,
                        a
                    ]
                });
            }
            var Wc = function extension() {
                return 2 === arguments.length ? getExtension.apply(null, arguments) : 3 === arguments.length ? setExtension.apply(null, arguments) : 4 === arguments.length ? getModule.apply(null, arguments) : 5 === arguments.length ? setModule.apply(null, arguments) : void Ke("Invalid extension access syntax");
            };
            fl.prototype.extension = Wc, Vc.forEach(function(e1) {
                e1.extensions.forEach(function(t) {
                    setExtension(e1.type, t.name, t.impl);
                });
            });
            var Hc = function Stylesheet() {
                if (!(this instanceof Hc)) return new Hc;
                this.length = 0;
            }, Xc = Hc.prototype;
            Xc.instanceString = function() {
                return "stylesheet";
            }, Xc.selector = function(e1) {
                return this[this.length++] = {
                    selector: e1,
                    properties: []
                }, this;
            }, Xc.css = function(e1, t) {
                var n = this.length - 1;
                if (X(e1)) this[n].properties.push({
                    name: e1,
                    value: t
                });
                else if (G(e1)) for(var a = e1, i = Object.keys(a), o = 0; o < i.length; o++){
                    var s = i[o], l = a[s];
                    if (null != l) {
                        var u = ul.properties[s] || ul.properties[se(s)];
                        if (null != u) {
                            var c = u.name, d = l;
                            this[n].properties.push({
                                name: c,
                                value: d
                            });
                        }
                    }
                }
                return this;
            }, Xc.style = Xc.css, Xc.generateStyle = function(e1) {
                var t = new ul(e1);
                return this.appendToStyle(t);
            }, Xc.appendToStyle = function(e1) {
                for(var t = 0; t < this.length; t++){
                    var n = this[t], a = n.selector, i = n.properties;
                    e1.selector(a);
                    for(var o = 0; o < i.length; o++){
                        var s = i[o];
                        e1.css(s.name, s.value);
                    }
                }
                return e1;
            };
            var Yc = function cytoscape(e1) {
                return void 0 === e1 && (e1 = {}), G(e1) ? new fl(e1) : X(e1) ? Wc.apply(Wc, arguments) : void 0;
            };
            Yc.use = function(e1) {
                var t = Array.prototype.slice.call(arguments, 1);
                return t.unshift(Yc), e1.apply(null, t), this;
            }, Yc.warnings = function(e1) {
                return Ge(e1);
            }, Yc.version = "3.32.0", Yc.stylesheet = Yc.Stylesheet = Hc;
        }
    }
]); //# sourceMappingURL=8178.b977cf05cd8fc3df87de.js.map
