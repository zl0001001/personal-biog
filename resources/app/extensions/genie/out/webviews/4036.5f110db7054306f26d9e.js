(self.webpackChunk_genie_chat_webview_app = self.webpackChunk_genie_chat_webview_app || []).push([
    [
        4036
    ],
    {
        40191: function(t) {
            t.exports = function() {
                "use strict";
                var t = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                }, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d/, i = /\d\d/, s = /\d\d?/, r = /\d*[^-_:/,()\s\d]+/, o = {}, a = function(t) {
                    return (t = +t) + (t > 68 ? 1900 : 2e3);
                }, f = function(t) {
                    return function(e) {
                        this[t] = +e;
                    };
                }, c = [
                    /[+-]\d\d:?(\d\d)?|Z/,
                    function(t) {
                        (this.zone || (this.zone = {})).offset = function(t) {
                            if (!t) return 0;
                            if ("Z" === t) return 0;
                            var e = t.match(/([+-]|\d\d)/g), n = 60 * e[1] + (+e[2] || 0);
                            return 0 === n ? 0 : "+" === e[0] ? -n : n;
                        }(t);
                    }
                ], u = function(t) {
                    var e = o[t];
                    return e && (e.indexOf ? e : e.s.concat(e.f));
                }, d = function(t, e) {
                    var n, i = o.meridiem;
                    if (i) {
                        for(var s = 1; s <= 24; s += 1)if (t.indexOf(i(s, 0, e)) > -1) {
                            n = s > 12;
                            break;
                        }
                    } else n = t === (e ? "pm" : "PM");
                    return n;
                }, h = {
                    A: [
                        r,
                        function(t) {
                            this.afternoon = d(t, !1);
                        }
                    ],
                    a: [
                        r,
                        function(t) {
                            this.afternoon = d(t, !0);
                        }
                    ],
                    Q: [
                        n,
                        function(t) {
                            this.month = 3 * (t - 1) + 1;
                        }
                    ],
                    S: [
                        n,
                        function(t) {
                            this.milliseconds = 100 * +t;
                        }
                    ],
                    SS: [
                        i,
                        function(t) {
                            this.milliseconds = 10 * +t;
                        }
                    ],
                    SSS: [
                        /\d{3}/,
                        function(t) {
                            this.milliseconds = +t;
                        }
                    ],
                    s: [
                        s,
                        f("seconds")
                    ],
                    ss: [
                        s,
                        f("seconds")
                    ],
                    m: [
                        s,
                        f("minutes")
                    ],
                    mm: [
                        s,
                        f("minutes")
                    ],
                    H: [
                        s,
                        f("hours")
                    ],
                    h: [
                        s,
                        f("hours")
                    ],
                    HH: [
                        s,
                        f("hours")
                    ],
                    hh: [
                        s,
                        f("hours")
                    ],
                    D: [
                        s,
                        f("day")
                    ],
                    DD: [
                        i,
                        f("day")
                    ],
                    Do: [
                        r,
                        function(t) {
                            var e = o.ordinal, n = t.match(/\d+/);
                            if (this.day = n[0], e) for(var i = 1; i <= 31; i += 1)e(i).replace(/\[|\]/g, "") === t && (this.day = i);
                        }
                    ],
                    w: [
                        s,
                        f("week")
                    ],
                    ww: [
                        i,
                        f("week")
                    ],
                    M: [
                        s,
                        f("month")
                    ],
                    MM: [
                        i,
                        f("month")
                    ],
                    MMM: [
                        r,
                        function(t) {
                            var e = u("months"), n = (u("monthsShort") || e.map(function(t) {
                                return t.slice(0, 3);
                            })).indexOf(t) + 1;
                            if (n < 1) throw new Error;
                            this.month = n % 12 || n;
                        }
                    ],
                    MMMM: [
                        r,
                        function(t) {
                            var e = u("months").indexOf(t) + 1;
                            if (e < 1) throw new Error;
                            this.month = e % 12 || e;
                        }
                    ],
                    Y: [
                        /[+-]?\d+/,
                        f("year")
                    ],
                    YY: [
                        i,
                        function(t) {
                            this.year = a(t);
                        }
                    ],
                    YYYY: [
                        /\d{4}/,
                        f("year")
                    ],
                    Z: c,
                    ZZ: c
                };
                function l(n) {
                    var i, s;
                    i = n, s = o && o.formats;
                    for(var r = (n = i.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(e, n, i) {
                        var r = i && i.toUpperCase();
                        return n || s[i] || t[i] || s[r].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(t, e, n) {
                            return e || n.slice(1);
                        });
                    })).match(e), c = r.length, k = 0; k < c; k += 1){
                        var y = r[k], m = h[y], p = m && m[0], g = m && m[1];
                        r[k] = g ? {
                            regex: p,
                            parser: g
                        } : y.replace(/^\[|\]$/g, "");
                    }
                    return function(t) {
                        for(var e = {}, n = 0, i = 0; n < c; n += 1){
                            var s = r[n];
                            if ("string" == typeof s) i += s.length;
                            else {
                                var o = s.regex, h = s.parser, k = t.slice(i), y = o.exec(k)[0];
                                h.call(e, y), t = t.replace(y, "");
                            }
                        }
                        return function(t) {
                            var e = t.afternoon;
                            if (void 0 !== e) {
                                var n = t.hours;
                                e ? n < 12 && (t.hours += 12) : 12 === n && (t.hours = 0), delete t.afternoon;
                            }
                        }(e), e;
                    };
                }
                return function(t, e, n) {
                    n.p.customParseFormat = !0, t && t.parseTwoDigitYear && (a = t.parseTwoDigitYear);
                    var i = e.prototype, s = i.parse;
                    i.parse = function(t) {
                        var e = t.date, i = t.utc, r = t.args;
                        this.$u = i;
                        var c = r[1];
                        if ("string" == typeof c) {
                            var h = !0 === r[2], k = !0 === r[3], y = h || k, m = r[2];
                            k && (m = r[2]), o = this.$locale(), !h && m && (o = n.Ls[m]), this.$d = function(t, e, n, i) {
                                try {
                                    if ([
                                        "x",
                                        "X"
                                    ].indexOf(e) > -1) return new Date(("X" === e ? 1e3 : 1) * t);
                                    var s = l(e)(t), r = s.year, o = s.month, c = s.day, h = s.hours, k = s.minutes, y = s.seconds, m = s.milliseconds, p = s.zone, g = s.week, b = new Date, T = c || (r || o ? 1 : b.getDate()), v = r || b.getFullYear(), x = 0;
                                    r && !o || (x = o > 0 ? o - 1 : b.getMonth());
                                    var w, _ = h || 0, D = k || 0, $ = y || 0, C = m || 0;
                                    return p ? new Date(Date.UTC(v, x, T, _, D, $, C + 60 * p.offset * 1e3)) : n ? new Date(Date.UTC(v, x, T, _, D, $, C)) : (w = new Date(v, x, T, _, D, $, C), g && (w = i(w).week(g).toDate()), w);
                                } catch (t) {
                                    return new Date("");
                                }
                            }(e, c, i, n), this.init(), m && !0 !== m && (this.$L = this.locale(m).$L), y && e != this.format(c) && (this.$d = new Date("")), o = {};
                        } else if (c instanceof Array) for(var p = c.length, g = 1; g <= p; g += 1){
                            r[1] = c[g - 1];
                            var b = n.apply(this, r);
                            if (b.isValid()) {
                                this.$d = b.$d, this.$L = b.$L, this.init();
                                break;
                            }
                            g === p && (this.$d = new Date(""));
                        }
                        else s.call(this, t);
                    };
                };
            }();
        },
        74845: function(t) {
            t.exports = function() {
                "use strict";
                return function(t, e) {
                    var n = e.prototype, i = n.format;
                    n.format = function(t) {
                        var e = this, n = this.$locale();
                        if (!this.isValid()) return i.bind(this)(t);
                        var s = this.$utils(), r = (t || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(t) {
                            switch(t){
                                case "Q":
                                    return Math.ceil((e.$M + 1) / 3);
                                case "Do":
                                    return n.ordinal(e.$D);
                                case "gggg":
                                    return e.weekYear();
                                case "GGGG":
                                    return e.isoWeekYear();
                                case "wo":
                                    return n.ordinal(e.week(), "W");
                                case "w":
                                case "ww":
                                    return s.s(e.week(), "w" === t ? 1 : 2, "0");
                                case "W":
                                case "WW":
                                    return s.s(e.isoWeek(), "W" === t ? 1 : 2, "0");
                                case "k":
                                case "kk":
                                    return s.s(String(0 === e.$H ? 24 : e.$H), "k" === t ? 1 : 2, "0");
                                case "X":
                                    return Math.floor(e.$d.getTime() / 1e3);
                                case "x":
                                    return e.$d.getTime();
                                case "z":
                                    return "[" + e.offsetName() + "]";
                                case "zzz":
                                    return "[" + e.offsetName("long") + "]";
                                default:
                                    return t;
                            }
                        });
                        return i.bind(this)(r);
                    };
                };
            }();
        },
        78939: function(t) {
            t.exports = function() {
                "use strict";
                var t = "day";
                return function(e, n, i) {
                    var a = function(e) {
                        return e.add(4 - e.isoWeekday(), t);
                    }, s = n.prototype;
                    s.isoWeekYear = function() {
                        return a(this).year();
                    }, s.isoWeek = function(e) {
                        if (!this.$utils().u(e)) return this.add(7 * (e - this.isoWeek()), t);
                        var n, s, r, o = a(this), c = (n = this.isoWeekYear(), r = 4 - (s = (this.$u ? i.utc : i)().year(n).startOf("year")).isoWeekday(), s.isoWeekday() > 4 && (r += 7), s.add(r, t));
                        return o.diff(c, "week") + 1;
                    }, s.isoWeekday = function(t) {
                        return this.$utils().u(t) ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7);
                    };
                    var r = s.startOf;
                    s.startOf = function(t, e) {
                        var n = this.$utils(), i = !!n.u(e) || e;
                        return "isoweek" === n.p(t) ? i ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : r.bind(this)(t, e);
                    };
                };
            }();
        },
        94036: (t, e, n)=>{
            "use strict";
            n.d(e, {
                diagram: ()=>Pt
            });
            var i = n(9147), s = n(94279), r = n(35456), o = n(5820), c = n(18603), h = n(78939), k = n(40191), y = n(74845), m = n(32551), p = function() {
                var t = (0, r.K2)(function(t, e, n, i) {
                    for(n = n || {}, i = t.length; i--; n[t[i]] = e);
                    return n;
                }, "o"), e = [
                    6,
                    8,
                    10,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25,
                    26,
                    27,
                    28,
                    29,
                    30,
                    31,
                    33,
                    35,
                    36,
                    38,
                    40
                ], n = [
                    1,
                    26
                ], i = [
                    1,
                    27
                ], s = [
                    1,
                    28
                ], o = [
                    1,
                    29
                ], c = [
                    1,
                    30
                ], h = [
                    1,
                    31
                ], k = [
                    1,
                    32
                ], y = [
                    1,
                    33
                ], m = [
                    1,
                    34
                ], p = [
                    1,
                    9
                ], g = [
                    1,
                    10
                ], b = [
                    1,
                    11
                ], T = [
                    1,
                    12
                ], v = [
                    1,
                    13
                ], x = [
                    1,
                    14
                ], w = [
                    1,
                    15
                ], _ = [
                    1,
                    16
                ], D = [
                    1,
                    19
                ], $ = [
                    1,
                    20
                ], C = [
                    1,
                    21
                ], S = [
                    1,
                    22
                ], K = [
                    1,
                    23
                ], E = [
                    1,
                    25
                ], M = [
                    1,
                    35
                ], A = {
                    trace: (0, r.K2)(function trace() {}, "trace"),
                    yy: {},
                    symbols_: {
                        error: 2,
                        start: 3,
                        gantt: 4,
                        document: 5,
                        EOF: 6,
                        line: 7,
                        SPACE: 8,
                        statement: 9,
                        NL: 10,
                        weekday: 11,
                        weekday_monday: 12,
                        weekday_tuesday: 13,
                        weekday_wednesday: 14,
                        weekday_thursday: 15,
                        weekday_friday: 16,
                        weekday_saturday: 17,
                        weekday_sunday: 18,
                        weekend: 19,
                        weekend_friday: 20,
                        weekend_saturday: 21,
                        dateFormat: 22,
                        inclusiveEndDates: 23,
                        topAxis: 24,
                        axisFormat: 25,
                        tickInterval: 26,
                        excludes: 27,
                        includes: 28,
                        todayMarker: 29,
                        title: 30,
                        acc_title: 31,
                        acc_title_value: 32,
                        acc_descr: 33,
                        acc_descr_value: 34,
                        acc_descr_multiline_value: 35,
                        section: 36,
                        clickStatement: 37,
                        taskTxt: 38,
                        taskData: 39,
                        click: 40,
                        callbackname: 41,
                        callbackargs: 42,
                        href: 43,
                        clickStatementDebug: 44,
                        $accept: 0,
                        $end: 1
                    },
                    terminals_: {
                        2: "error",
                        4: "gantt",
                        6: "EOF",
                        8: "SPACE",
                        10: "NL",
                        12: "weekday_monday",
                        13: "weekday_tuesday",
                        14: "weekday_wednesday",
                        15: "weekday_thursday",
                        16: "weekday_friday",
                        17: "weekday_saturday",
                        18: "weekday_sunday",
                        20: "weekend_friday",
                        21: "weekend_saturday",
                        22: "dateFormat",
                        23: "inclusiveEndDates",
                        24: "topAxis",
                        25: "axisFormat",
                        26: "tickInterval",
                        27: "excludes",
                        28: "includes",
                        29: "todayMarker",
                        30: "title",
                        31: "acc_title",
                        32: "acc_title_value",
                        33: "acc_descr",
                        34: "acc_descr_value",
                        35: "acc_descr_multiline_value",
                        36: "section",
                        38: "taskTxt",
                        39: "taskData",
                        40: "click",
                        41: "callbackname",
                        42: "callbackargs",
                        43: "href"
                    },
                    productions_: [
                        0,
                        [
                            3,
                            3
                        ],
                        [
                            5,
                            0
                        ],
                        [
                            5,
                            2
                        ],
                        [
                            7,
                            2
                        ],
                        [
                            7,
                            1
                        ],
                        [
                            7,
                            1
                        ],
                        [
                            7,
                            1
                        ],
                        [
                            11,
                            1
                        ],
                        [
                            11,
                            1
                        ],
                        [
                            11,
                            1
                        ],
                        [
                            11,
                            1
                        ],
                        [
                            11,
                            1
                        ],
                        [
                            11,
                            1
                        ],
                        [
                            11,
                            1
                        ],
                        [
                            19,
                            1
                        ],
                        [
                            19,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            9,
                            2
                        ],
                        [
                            9,
                            2
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            9,
                            2
                        ],
                        [
                            37,
                            2
                        ],
                        [
                            37,
                            3
                        ],
                        [
                            37,
                            3
                        ],
                        [
                            37,
                            4
                        ],
                        [
                            37,
                            3
                        ],
                        [
                            37,
                            4
                        ],
                        [
                            37,
                            2
                        ],
                        [
                            44,
                            2
                        ],
                        [
                            44,
                            3
                        ],
                        [
                            44,
                            3
                        ],
                        [
                            44,
                            4
                        ],
                        [
                            44,
                            3
                        ],
                        [
                            44,
                            4
                        ],
                        [
                            44,
                            2
                        ]
                    ],
                    performAction: (0, r.K2)(function anonymous(t, e, n, i, s, r, o) {
                        var c = r.length - 1;
                        switch(s){
                            case 1:
                                return r[c - 1];
                            case 2:
                            case 6:
                            case 7:
                                this.$ = [];
                                break;
                            case 3:
                                r[c - 1].push(r[c]), this.$ = r[c - 1];
                                break;
                            case 4:
                            case 5:
                                this.$ = r[c];
                                break;
                            case 8:
                                i.setWeekday("monday");
                                break;
                            case 9:
                                i.setWeekday("tuesday");
                                break;
                            case 10:
                                i.setWeekday("wednesday");
                                break;
                            case 11:
                                i.setWeekday("thursday");
                                break;
                            case 12:
                                i.setWeekday("friday");
                                break;
                            case 13:
                                i.setWeekday("saturday");
                                break;
                            case 14:
                                i.setWeekday("sunday");
                                break;
                            case 15:
                                i.setWeekend("friday");
                                break;
                            case 16:
                                i.setWeekend("saturday");
                                break;
                            case 17:
                                i.setDateFormat(r[c].substr(11)), this.$ = r[c].substr(11);
                                break;
                            case 18:
                                i.enableInclusiveEndDates(), this.$ = r[c].substr(18);
                                break;
                            case 19:
                                i.TopAxis(), this.$ = r[c].substr(8);
                                break;
                            case 20:
                                i.setAxisFormat(r[c].substr(11)), this.$ = r[c].substr(11);
                                break;
                            case 21:
                                i.setTickInterval(r[c].substr(13)), this.$ = r[c].substr(13);
                                break;
                            case 22:
                                i.setExcludes(r[c].substr(9)), this.$ = r[c].substr(9);
                                break;
                            case 23:
                                i.setIncludes(r[c].substr(9)), this.$ = r[c].substr(9);
                                break;
                            case 24:
                                i.setTodayMarker(r[c].substr(12)), this.$ = r[c].substr(12);
                                break;
                            case 27:
                                i.setDiagramTitle(r[c].substr(6)), this.$ = r[c].substr(6);
                                break;
                            case 28:
                                this.$ = r[c].trim(), i.setAccTitle(this.$);
                                break;
                            case 29:
                            case 30:
                                this.$ = r[c].trim(), i.setAccDescription(this.$);
                                break;
                            case 31:
                                i.addSection(r[c].substr(8)), this.$ = r[c].substr(8);
                                break;
                            case 33:
                                i.addTask(r[c - 1], r[c]), this.$ = "task";
                                break;
                            case 34:
                                this.$ = r[c - 1], i.setClickEvent(r[c - 1], r[c], null);
                                break;
                            case 35:
                                this.$ = r[c - 2], i.setClickEvent(r[c - 2], r[c - 1], r[c]);
                                break;
                            case 36:
                                this.$ = r[c - 2], i.setClickEvent(r[c - 2], r[c - 1], null), i.setLink(r[c - 2], r[c]);
                                break;
                            case 37:
                                this.$ = r[c - 3], i.setClickEvent(r[c - 3], r[c - 2], r[c - 1]), i.setLink(r[c - 3], r[c]);
                                break;
                            case 38:
                                this.$ = r[c - 2], i.setClickEvent(r[c - 2], r[c], null), i.setLink(r[c - 2], r[c - 1]);
                                break;
                            case 39:
                                this.$ = r[c - 3], i.setClickEvent(r[c - 3], r[c - 1], r[c]), i.setLink(r[c - 3], r[c - 2]);
                                break;
                            case 40:
                                this.$ = r[c - 1], i.setLink(r[c - 1], r[c]);
                                break;
                            case 41:
                            case 47:
                                this.$ = r[c - 1] + " " + r[c];
                                break;
                            case 42:
                            case 43:
                            case 45:
                                this.$ = r[c - 2] + " " + r[c - 1] + " " + r[c];
                                break;
                            case 44:
                            case 46:
                                this.$ = r[c - 3] + " " + r[c - 2] + " " + r[c - 1] + " " + r[c];
                        }
                    }, "anonymous"),
                    table: [
                        {
                            3: 1,
                            4: [
                                1,
                                2
                            ]
                        },
                        {
                            1: [
                                3
                            ]
                        },
                        t(e, [
                            2,
                            2
                        ], {
                            5: 3
                        }),
                        {
                            6: [
                                1,
                                4
                            ],
                            7: 5,
                            8: [
                                1,
                                6
                            ],
                            9: 7,
                            10: [
                                1,
                                8
                            ],
                            11: 17,
                            12: n,
                            13: i,
                            14: s,
                            15: o,
                            16: c,
                            17: h,
                            18: k,
                            19: 18,
                            20: y,
                            21: m,
                            22: p,
                            23: g,
                            24: b,
                            25: T,
                            26: v,
                            27: x,
                            28: w,
                            29: _,
                            30: D,
                            31: $,
                            33: C,
                            35: S,
                            36: K,
                            37: 24,
                            38: E,
                            40: M
                        },
                        t(e, [
                            2,
                            7
                        ], {
                            1: [
                                2,
                                1
                            ]
                        }),
                        t(e, [
                            2,
                            3
                        ]),
                        {
                            9: 36,
                            11: 17,
                            12: n,
                            13: i,
                            14: s,
                            15: o,
                            16: c,
                            17: h,
                            18: k,
                            19: 18,
                            20: y,
                            21: m,
                            22: p,
                            23: g,
                            24: b,
                            25: T,
                            26: v,
                            27: x,
                            28: w,
                            29: _,
                            30: D,
                            31: $,
                            33: C,
                            35: S,
                            36: K,
                            37: 24,
                            38: E,
                            40: M
                        },
                        t(e, [
                            2,
                            5
                        ]),
                        t(e, [
                            2,
                            6
                        ]),
                        t(e, [
                            2,
                            17
                        ]),
                        t(e, [
                            2,
                            18
                        ]),
                        t(e, [
                            2,
                            19
                        ]),
                        t(e, [
                            2,
                            20
                        ]),
                        t(e, [
                            2,
                            21
                        ]),
                        t(e, [
                            2,
                            22
                        ]),
                        t(e, [
                            2,
                            23
                        ]),
                        t(e, [
                            2,
                            24
                        ]),
                        t(e, [
                            2,
                            25
                        ]),
                        t(e, [
                            2,
                            26
                        ]),
                        t(e, [
                            2,
                            27
                        ]),
                        {
                            32: [
                                1,
                                37
                            ]
                        },
                        {
                            34: [
                                1,
                                38
                            ]
                        },
                        t(e, [
                            2,
                            30
                        ]),
                        t(e, [
                            2,
                            31
                        ]),
                        t(e, [
                            2,
                            32
                        ]),
                        {
                            39: [
                                1,
                                39
                            ]
                        },
                        t(e, [
                            2,
                            8
                        ]),
                        t(e, [
                            2,
                            9
                        ]),
                        t(e, [
                            2,
                            10
                        ]),
                        t(e, [
                            2,
                            11
                        ]),
                        t(e, [
                            2,
                            12
                        ]),
                        t(e, [
                            2,
                            13
                        ]),
                        t(e, [
                            2,
                            14
                        ]),
                        t(e, [
                            2,
                            15
                        ]),
                        t(e, [
                            2,
                            16
                        ]),
                        {
                            41: [
                                1,
                                40
                            ],
                            43: [
                                1,
                                41
                            ]
                        },
                        t(e, [
                            2,
                            4
                        ]),
                        t(e, [
                            2,
                            28
                        ]),
                        t(e, [
                            2,
                            29
                        ]),
                        t(e, [
                            2,
                            33
                        ]),
                        t(e, [
                            2,
                            34
                        ], {
                            42: [
                                1,
                                42
                            ],
                            43: [
                                1,
                                43
                            ]
                        }),
                        t(e, [
                            2,
                            40
                        ], {
                            41: [
                                1,
                                44
                            ]
                        }),
                        t(e, [
                            2,
                            35
                        ], {
                            43: [
                                1,
                                45
                            ]
                        }),
                        t(e, [
                            2,
                            36
                        ]),
                        t(e, [
                            2,
                            38
                        ], {
                            42: [
                                1,
                                46
                            ]
                        }),
                        t(e, [
                            2,
                            37
                        ]),
                        t(e, [
                            2,
                            39
                        ])
                    ],
                    defaultActions: {},
                    parseError: (0, r.K2)(function parseError(t, e) {
                        if (!e.recoverable) {
                            var n = new Error(t);
                            throw n.hash = e, n;
                        }
                        this.trace(t);
                    }, "parseError"),
                    parse: (0, r.K2)(function parse(t) {
                        var e = this, n = [
                            0
                        ], i = [], s = [
                            null
                        ], o = [], c = this.table, h = "", k = 0, y = 0, m = 0, p = o.slice.call(arguments, 1), g = Object.create(this.lexer), b = {
                            yy: {}
                        };
                        for(var T in this.yy)Object.prototype.hasOwnProperty.call(this.yy, T) && (b.yy[T] = this.yy[T]);
                        g.setInput(t, b.yy), b.yy.lexer = g, b.yy.parser = this, void 0 === g.yylloc && (g.yylloc = {});
                        var v = g.yylloc;
                        o.push(v);
                        var x = g.options && g.options.ranges;
                        function lex() {
                            var t;
                            return "number" != typeof (t = i.pop() || g.lex() || 1) && (t instanceof Array && (t = (i = t).pop()), t = e.symbols_[t] || t), t;
                        }
                        "function" == typeof b.yy.parseError ? this.parseError = b.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError, (0, r.K2)(function popStack(t) {
                            n.length = n.length - 2 * t, s.length = s.length - t, o.length = o.length - t;
                        }, "popStack"), (0, r.K2)(lex, "lex");
                        for(var w, _, D, $, C, S, K, E, M, A = {};;){
                            if (D = n[n.length - 1], this.defaultActions[D] ? $ = this.defaultActions[D] : (null == w && (w = lex()), $ = c[D] && c[D][w]), void 0 === $ || !$.length || !$[0]) {
                                var L = "";
                                for(S in M = [], c[D])this.terminals_[S] && S > 2 && M.push("'" + this.terminals_[S] + "'");
                                L = g.showPosition ? "Parse error on line " + (k + 1) + ":\n" + g.showPosition() + "\nExpecting " + M.join(", ") + ", got '" + (this.terminals_[w] || w) + "'" : "Parse error on line " + (k + 1) + ": Unexpected " + (1 == w ? "end of input" : "'" + (this.terminals_[w] || w) + "'"), this.parseError(L, {
                                    text: g.match,
                                    token: this.terminals_[w] || w,
                                    line: g.yylineno,
                                    loc: v,
                                    expected: M
                                });
                            }
                            if ($[0] instanceof Array && $.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + D + ", token: " + w);
                            switch($[0]){
                                case 1:
                                    n.push(w), s.push(g.yytext), o.push(g.yylloc), n.push($[1]), w = null, _ ? (w = _, _ = null) : (y = g.yyleng, h = g.yytext, k = g.yylineno, v = g.yylloc, m > 0 && m--);
                                    break;
                                case 2:
                                    if (K = this.productions_[$[1]][1], A.$ = s[s.length - K], A._$ = {
                                        first_line: o[o.length - (K || 1)].first_line,
                                        last_line: o[o.length - 1].last_line,
                                        first_column: o[o.length - (K || 1)].first_column,
                                        last_column: o[o.length - 1].last_column
                                    }, x && (A._$.range = [
                                        o[o.length - (K || 1)].range[0],
                                        o[o.length - 1].range[1]
                                    ]), void 0 !== (C = this.performAction.apply(A, [
                                        h,
                                        y,
                                        k,
                                        b.yy,
                                        $[1],
                                        s,
                                        o
                                    ].concat(p)))) return C;
                                    K && (n = n.slice(0, -1 * K * 2), s = s.slice(0, -1 * K), o = o.slice(0, -1 * K)), n.push(this.productions_[$[1]][0]), s.push(A.$), o.push(A._$), E = c[n[n.length - 2]][n[n.length - 1]], n.push(E);
                                    break;
                                case 3:
                                    return !0;
                            }
                        }
                        return !0;
                    }, "parse")
                }, L = function() {
                    return {
                        EOF: 1,
                        parseError: (0, r.K2)(function parseError(t, e) {
                            if (!this.yy.parser) throw new Error(t);
                            this.yy.parser.parseError(t, e);
                        }, "parseError"),
                        setInput: (0, r.K2)(function(t, e) {
                            return this.yy = e || this.yy || {}, this._input = t, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = [
                                "INITIAL"
                            ], this.yylloc = {
                                first_line: 1,
                                first_column: 0,
                                last_line: 1,
                                last_column: 0
                            }, this.options.ranges && (this.yylloc.range = [
                                0,
                                0
                            ]), this.offset = 0, this;
                        }, "setInput"),
                        input: (0, r.K2)(function() {
                            var t = this._input[0];
                            return this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t, t.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), t;
                        }, "input"),
                        unput: (0, r.K2)(function(t) {
                            var e = t.length, n = t.split(/(?:\r\n?|\n)/g);
                            this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - e), this.offset -= e;
                            var i = this.match.split(/(?:\r\n?|\n)/g);
                            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
                            var s = this.yylloc.range;
                            return this.yylloc = {
                                first_line: this.yylloc.first_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.first_column,
                                last_column: n ? (n.length === i.length ? this.yylloc.first_column : 0) + i[i.length - n.length].length - n[0].length : this.yylloc.first_column - e
                            }, this.options.ranges && (this.yylloc.range = [
                                s[0],
                                s[0] + this.yyleng - e
                            ]), this.yyleng = this.yytext.length, this;
                        }, "unput"),
                        more: (0, r.K2)(function() {
                            return this._more = !0, this;
                        }, "more"),
                        reject: (0, r.K2)(function() {
                            return this.options.backtrack_lexer ? (this._backtrack = !0, this) : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
                                text: "",
                                token: null,
                                line: this.yylineno
                            });
                        }, "reject"),
                        less: (0, r.K2)(function(t) {
                            this.unput(this.match.slice(t));
                        }, "less"),
                        pastInput: (0, r.K2)(function() {
                            var t = this.matched.substr(0, this.matched.length - this.match.length);
                            return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
                        }, "pastInput"),
                        upcomingInput: (0, r.K2)(function() {
                            var t = this.match;
                            return t.length < 20 && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
                        }, "upcomingInput"),
                        showPosition: (0, r.K2)(function() {
                            var t = this.pastInput(), e = new Array(t.length + 1).join("-");
                            return t + this.upcomingInput() + "\n" + e + "^";
                        }, "showPosition"),
                        test_match: (0, r.K2)(function(t, e) {
                            var n, i, s;
                            if (this.options.backtrack_lexer && (s = {
                                yylineno: this.yylineno,
                                yylloc: {
                                    first_line: this.yylloc.first_line,
                                    last_line: this.last_line,
                                    first_column: this.yylloc.first_column,
                                    last_column: this.yylloc.last_column
                                },
                                yytext: this.yytext,
                                match: this.match,
                                matches: this.matches,
                                matched: this.matched,
                                yyleng: this.yyleng,
                                offset: this.offset,
                                _more: this._more,
                                _input: this._input,
                                yy: this.yy,
                                conditionStack: this.conditionStack.slice(0),
                                done: this.done
                            }, this.options.ranges && (s.yylloc.range = this.yylloc.range.slice(0))), (i = t[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += i.length), this.yylloc = {
                                first_line: this.yylloc.last_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.last_column,
                                last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
                            }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [
                                this.offset,
                                this.offset += this.yyleng
                            ]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], n = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), n) return n;
                            if (this._backtrack) {
                                for(var r in s)this[r] = s[r];
                                return !1;
                            }
                            return !1;
                        }, "test_match"),
                        next: (0, r.K2)(function() {
                            if (this.done) return this.EOF;
                            var t, e, n, i;
                            this._input || (this.done = !0), this._more || (this.yytext = "", this.match = "");
                            for(var s = this._currentRules(), r = 0; r < s.length; r++)if ((n = this._input.match(this.rules[s[r]])) && (!e || n[0].length > e[0].length)) {
                                if (e = n, i = r, this.options.backtrack_lexer) {
                                    if (!1 !== (t = this.test_match(n, s[r]))) return t;
                                    if (this._backtrack) {
                                        e = !1;
                                        continue;
                                    }
                                    return !1;
                                }
                                if (!this.options.flex) break;
                            }
                            return e ? !1 !== (t = this.test_match(e, s[i])) && t : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                text: "",
                                token: null,
                                line: this.yylineno
                            });
                        }, "next"),
                        lex: (0, r.K2)(function lex() {
                            var t = this.next();
                            return t || this.lex();
                        }, "lex"),
                        begin: (0, r.K2)(function begin(t) {
                            this.conditionStack.push(t);
                        }, "begin"),
                        popState: (0, r.K2)(function popState() {
                            return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
                        }, "popState"),
                        _currentRules: (0, r.K2)(function _currentRules() {
                            return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
                        }, "_currentRules"),
                        topState: (0, r.K2)(function topState(t) {
                            return (t = this.conditionStack.length - 1 - Math.abs(t || 0)) >= 0 ? this.conditionStack[t] : "INITIAL";
                        }, "topState"),
                        pushState: (0, r.K2)(function pushState(t) {
                            this.begin(t);
                        }, "pushState"),
                        stateStackSize: (0, r.K2)(function stateStackSize() {
                            return this.conditionStack.length;
                        }, "stateStackSize"),
                        options: {
                            "case-insensitive": !0
                        },
                        performAction: (0, r.K2)(function anonymous(t, e, n, i) {
                            switch(n){
                                case 0:
                                    return this.begin("open_directive"), "open_directive";
                                case 1:
                                    return this.begin("acc_title"), 31;
                                case 2:
                                    return this.popState(), "acc_title_value";
                                case 3:
                                    return this.begin("acc_descr"), 33;
                                case 4:
                                    return this.popState(), "acc_descr_value";
                                case 5:
                                    this.begin("acc_descr_multiline");
                                    break;
                                case 6:
                                case 15:
                                case 18:
                                case 21:
                                case 24:
                                    this.popState();
                                    break;
                                case 7:
                                    return "acc_descr_multiline_value";
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                    break;
                                case 11:
                                    return 10;
                                case 14:
                                    this.begin("href");
                                    break;
                                case 16:
                                    return 43;
                                case 17:
                                    this.begin("callbackname");
                                    break;
                                case 19:
                                    this.popState(), this.begin("callbackargs");
                                    break;
                                case 20:
                                    return 41;
                                case 22:
                                    return 42;
                                case 23:
                                    this.begin("click");
                                    break;
                                case 25:
                                    return 40;
                                case 26:
                                    return 4;
                                case 27:
                                    return 22;
                                case 28:
                                    return 23;
                                case 29:
                                    return 24;
                                case 30:
                                    return 25;
                                case 31:
                                    return 26;
                                case 32:
                                    return 28;
                                case 33:
                                    return 27;
                                case 34:
                                    return 29;
                                case 35:
                                    return 12;
                                case 36:
                                    return 13;
                                case 37:
                                    return 14;
                                case 38:
                                    return 15;
                                case 39:
                                    return 16;
                                case 40:
                                    return 17;
                                case 41:
                                    return 18;
                                case 42:
                                    return 20;
                                case 43:
                                    return 21;
                                case 44:
                                    return "date";
                                case 45:
                                    return 30;
                                case 46:
                                    return "accDescription";
                                case 47:
                                    return 36;
                                case 48:
                                    return 38;
                                case 49:
                                    return 39;
                                case 50:
                                    return ":";
                                case 51:
                                    return 6;
                                case 52:
                                    return "INVALID";
                            }
                        }, "anonymous"),
                        rules: [
                            /^(?:%%\{)/i,
                            /^(?:accTitle\s*:\s*)/i,
                            /^(?:(?!\n||)*[^\n]*)/i,
                            /^(?:accDescr\s*:\s*)/i,
                            /^(?:(?!\n||)*[^\n]*)/i,
                            /^(?:accDescr\s*\{\s*)/i,
                            /^(?:[\}])/i,
                            /^(?:[^\}]*)/i,
                            /^(?:%%(?!\{)*[^\n]*)/i,
                            /^(?:[^\}]%%*[^\n]*)/i,
                            /^(?:%%*[^\n]*[\n]*)/i,
                            /^(?:[\n]+)/i,
                            /^(?:\s+)/i,
                            /^(?:%[^\n]*)/i,
                            /^(?:href[\s]+["])/i,
                            /^(?:["])/i,
                            /^(?:[^"]*)/i,
                            /^(?:call[\s]+)/i,
                            /^(?:\([\s]*\))/i,
                            /^(?:\()/i,
                            /^(?:[^(]*)/i,
                            /^(?:\))/i,
                            /^(?:[^)]*)/i,
                            /^(?:click[\s]+)/i,
                            /^(?:[\s\n])/i,
                            /^(?:[^\s\n]*)/i,
                            /^(?:gantt\b)/i,
                            /^(?:dateFormat\s[^#\n;]+)/i,
                            /^(?:inclusiveEndDates\b)/i,
                            /^(?:topAxis\b)/i,
                            /^(?:axisFormat\s[^#\n;]+)/i,
                            /^(?:tickInterval\s[^#\n;]+)/i,
                            /^(?:includes\s[^#\n;]+)/i,
                            /^(?:excludes\s[^#\n;]+)/i,
                            /^(?:todayMarker\s[^\n;]+)/i,
                            /^(?:weekday\s+monday\b)/i,
                            /^(?:weekday\s+tuesday\b)/i,
                            /^(?:weekday\s+wednesday\b)/i,
                            /^(?:weekday\s+thursday\b)/i,
                            /^(?:weekday\s+friday\b)/i,
                            /^(?:weekday\s+saturday\b)/i,
                            /^(?:weekday\s+sunday\b)/i,
                            /^(?:weekend\s+friday\b)/i,
                            /^(?:weekend\s+saturday\b)/i,
                            /^(?:\d\d\d\d-\d\d-\d\d\b)/i,
                            /^(?:title\s[^\n]+)/i,
                            /^(?:accDescription\s[^#\n;]+)/i,
                            /^(?:section\s[^\n]+)/i,
                            /^(?:[^:\n]+)/i,
                            /^(?::[^#\n;]+)/i,
                            /^(?::)/i,
                            /^(?:$)/i,
                            /^(?:.)/i
                        ],
                        conditions: {
                            acc_descr_multiline: {
                                rules: [
                                    6,
                                    7
                                ],
                                inclusive: !1
                            },
                            acc_descr: {
                                rules: [
                                    4
                                ],
                                inclusive: !1
                            },
                            acc_title: {
                                rules: [
                                    2
                                ],
                                inclusive: !1
                            },
                            callbackargs: {
                                rules: [
                                    21,
                                    22
                                ],
                                inclusive: !1
                            },
                            callbackname: {
                                rules: [
                                    18,
                                    19,
                                    20
                                ],
                                inclusive: !1
                            },
                            href: {
                                rules: [
                                    15,
                                    16
                                ],
                                inclusive: !1
                            },
                            click: {
                                rules: [
                                    24,
                                    25
                                ],
                                inclusive: !1
                            },
                            INITIAL: {
                                rules: [
                                    0,
                                    1,
                                    3,
                                    5,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12,
                                    13,
                                    14,
                                    17,
                                    23,
                                    26,
                                    27,
                                    28,
                                    29,
                                    30,
                                    31,
                                    32,
                                    33,
                                    34,
                                    35,
                                    36,
                                    37,
                                    38,
                                    39,
                                    40,
                                    41,
                                    42,
                                    43,
                                    44,
                                    45,
                                    46,
                                    47,
                                    48,
                                    49,
                                    50,
                                    51,
                                    52
                                ],
                                inclusive: !0
                            }
                        }
                    };
                }();
                function Parser() {
                    this.yy = {};
                }
                return A.lexer = L, (0, r.K2)(Parser, "Parser"), Parser.prototype = A, A.Parser = Parser, new Parser;
            }();
            p.parser = p;
            var g = p;
            c.extend(h), c.extend(k), c.extend(y);
            var b, T, v = {
                friday: 5,
                saturday: 6
            }, x = "", w = "", _ = void 0, D = "", $ = [], C = [], S = new Map, K = [], E = [], M = "", A = "", L = [
                "active",
                "done",
                "crit",
                "milestone",
                "vert"
            ], Y = [], I = !1, W = !1, F = "sunday", O = "saturday", P = 0, B = (0, r.K2)(function() {
                K = [], E = [], M = "", Y = [], gt = 0, b = void 0, T = void 0, xt = [], x = "", w = "", A = "", _ = void 0, D = "", $ = [], C = [], I = !1, W = !1, P = 0, S = new Map, (0, s.IU)(), F = "sunday", O = "saturday";
            }, "clear"), z = (0, r.K2)(function(t) {
                w = t;
            }, "setAxisFormat"), G = (0, r.K2)(function() {
                return w;
            }, "getAxisFormat"), N = (0, r.K2)(function(t) {
                _ = t;
            }, "setTickInterval"), H = (0, r.K2)(function() {
                return _;
            }, "getTickInterval"), R = (0, r.K2)(function(t) {
                D = t;
            }, "setTodayMarker"), U = (0, r.K2)(function() {
                return D;
            }, "getTodayMarker"), j = (0, r.K2)(function(t) {
                x = t;
            }, "setDateFormat"), V = (0, r.K2)(function() {
                I = !0;
            }, "enableInclusiveEndDates"), q = (0, r.K2)(function() {
                return I;
            }, "endDatesAreInclusive"), Z = (0, r.K2)(function() {
                W = !0;
            }, "enableTopAxis"), X = (0, r.K2)(function() {
                return W;
            }, "topAxisEnabled"), Q = (0, r.K2)(function(t) {
                A = t;
            }, "setDisplayMode"), J = (0, r.K2)(function() {
                return A;
            }, "getDisplayMode"), tt = (0, r.K2)(function() {
                return x;
            }, "getDateFormat"), et = (0, r.K2)(function(t) {
                $ = t.toLowerCase().split(/[\s,]+/);
            }, "setIncludes"), nt = (0, r.K2)(function() {
                return $;
            }, "getIncludes"), it = (0, r.K2)(function(t) {
                C = t.toLowerCase().split(/[\s,]+/);
            }, "setExcludes"), st = (0, r.K2)(function() {
                return C;
            }, "getExcludes"), rt = (0, r.K2)(function() {
                return S;
            }, "getLinks"), at = (0, r.K2)(function(t) {
                M = t, K.push(t);
            }, "addSection"), ot = (0, r.K2)(function() {
                return K;
            }, "getSections"), ct = (0, r.K2)(function() {
                let t = Ct();
                let e = 0;
                for(; !t && e < 10;)t = Ct(), e++;
                return E = xt;
            }, "getTasks"), lt = (0, r.K2)(function(t, e, n, i) {
                const s = t.format(e.trim()), r = t.format("YYYY-MM-DD");
                return !i.includes(s) && !i.includes(r) && (!(!n.includes("weekends") || t.isoWeekday() !== v[O] && t.isoWeekday() !== v[O] + 1) || !!n.includes(t.format("dddd").toLowerCase()) || n.includes(s) || n.includes(r));
            }, "isInvalidDate"), dt = (0, r.K2)(function(t) {
                F = t;
            }, "setWeekday"), ut = (0, r.K2)(function() {
                return F;
            }, "getWeekday"), ht = (0, r.K2)(function(t) {
                O = t;
            }, "setWeekend"), ft = (0, r.K2)(function(t, e, n, i) {
                if (!n.length || t.manualEndTime) return;
                let s, r;
                s = t.startTime instanceof Date ? c(t.startTime) : c(t.startTime, e, !0), s = s.add(1, "d"), r = t.endTime instanceof Date ? c(t.endTime) : c(t.endTime, e, !0);
                const [o, h] = kt(s, r, e, n, i);
                t.endTime = o.toDate(), t.renderEndTime = h;
            }, "checkTaskDates"), kt = (0, r.K2)(function(t, e, n, i, s) {
                let r = !1, o = null;
                for(; t <= e;)r || (o = e.toDate()), r = lt(t, n, i, s), r && (e = e.add(1, "d")), t = t.add(1, "d");
                return [
                    e,
                    o
                ];
            }, "fixTaskDates"), yt = (0, r.K2)(function(t, e, n) {
                if (n = n.trim(), ("x" === e.trim() || "X" === e.trim()) && /^\d+$/.test(n)) return new Date(Number(n));
                const i = /^after\s+(?<ids>[\d\w- ]+)/.exec(n);
                if (null !== i) {
                    let t = null;
                    for (const e of i.groups.ids.split(" ")){
                        let n = Dt(e);
                        void 0 !== n && (!t || n.endTime > t.endTime) && (t = n);
                    }
                    if (t) return t.endTime;
                    const e = new Date;
                    return e.setHours(0, 0, 0, 0), e;
                }
                let s = c(n, e.trim(), !0);
                if (s.isValid()) return s.toDate();
                {
                    r.Rm.debug("Invalid date:" + n), r.Rm.debug("With date format:" + e.trim());
                    const t = new Date(n);
                    if (void 0 === t || isNaN(t.getTime()) || t.getFullYear() < -1e4 || t.getFullYear() > 1e4) throw new Error("Invalid date:" + n);
                    return t;
                }
            }, "getStartDate"), mt = (0, r.K2)(function(t) {
                const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());
                return null !== e ? [
                    Number.parseFloat(e[1]),
                    e[2]
                ] : [
                    NaN,
                    "ms"
                ];
            }, "parseDuration"), pt = (0, r.K2)(function(t, e, n, i = !1) {
                n = n.trim();
                const s = /^until\s+(?<ids>[\d\w- ]+)/.exec(n);
                if (null !== s) {
                    let t = null;
                    for (const e of s.groups.ids.split(" ")){
                        let n = Dt(e);
                        void 0 !== n && (!t || n.startTime < t.startTime) && (t = n);
                    }
                    if (t) return t.startTime;
                    const e = new Date;
                    return e.setHours(0, 0, 0, 0), e;
                }
                let r = c(n, e.trim(), !0);
                if (r.isValid()) return i && (r = r.add(1, "d")), r.toDate();
                let o = c(t);
                const [h, k] = mt(n);
                if (!Number.isNaN(h)) {
                    const t = o.add(h, k);
                    t.isValid() && (o = t);
                }
                return o.toDate();
            }, "getEndDate"), gt = 0, bt = (0, r.K2)(function(t) {
                return void 0 === t ? "task" + (gt += 1) : t;
            }, "parseId"), Tt = (0, r.K2)(function(t, e) {
                let n;
                n = ":" === e.substr(0, 1) ? e.substr(1, e.length) : e;
                const i = n.split(","), s = {};
                getTaskTags(i, s, L);
                for(let t = 0; t < i.length; t++)i[t] = i[t].trim();
                let r = "";
                switch(i.length){
                    case 1:
                        s.id = bt(), s.startTime = t.endTime, r = i[0];
                        break;
                    case 2:
                        s.id = bt(), s.startTime = yt(void 0, x, i[0]), r = i[1];
                        break;
                    case 3:
                        s.id = bt(i[0]), s.startTime = yt(void 0, x, i[1]), r = i[2];
                }
                return r && (s.endTime = pt(s.startTime, x, r, I), s.manualEndTime = c(r, "YYYY-MM-DD", !0).isValid(), ft(s, x, C, $)), s;
            }, "compileData"), vt = (0, r.K2)(function(t, e) {
                let n;
                n = ":" === e.substr(0, 1) ? e.substr(1, e.length) : e;
                const i = n.split(","), s = {};
                getTaskTags(i, s, L);
                for(let t = 0; t < i.length; t++)i[t] = i[t].trim();
                switch(i.length){
                    case 1:
                        s.id = bt(), s.startTime = {
                            type: "prevTaskEnd",
                            id: t
                        }, s.endTime = {
                            data: i[0]
                        };
                        break;
                    case 2:
                        s.id = bt(), s.startTime = {
                            type: "getStartDate",
                            startData: i[0]
                        }, s.endTime = {
                            data: i[1]
                        };
                        break;
                    case 3:
                        s.id = bt(i[0]), s.startTime = {
                            type: "getStartDate",
                            startData: i[1]
                        }, s.endTime = {
                            data: i[2]
                        };
                }
                return s;
            }, "parseData"), xt = [], wt = {}, _t = (0, r.K2)(function(t, e) {
                const n = {
                    section: M,
                    type: M,
                    processed: !1,
                    manualEndTime: !1,
                    renderEndTime: null,
                    raw: {
                        data: e
                    },
                    task: t,
                    classes: []
                }, i = vt(T, e);
                n.raw.startTime = i.startTime, n.raw.endTime = i.endTime, n.id = i.id, n.prevTaskId = T, n.active = i.active, n.done = i.done, n.crit = i.crit, n.milestone = i.milestone, n.vert = i.vert, n.order = P, P++;
                const s = xt.push(n);
                T = n.id, wt[n.id] = s - 1;
            }, "addTask"), Dt = (0, r.K2)(function(t) {
                const e = wt[t];
                return xt[e];
            }, "findTaskById"), $t = (0, r.K2)(function(t, e) {
                const n = {
                    section: M,
                    type: M,
                    description: t,
                    task: t,
                    classes: []
                }, i = Tt(b, e);
                n.startTime = i.startTime, n.endTime = i.endTime, n.id = i.id, n.active = i.active, n.done = i.done, n.crit = i.crit, n.milestone = i.milestone, n.vert = i.vert, b = n, E.push(n);
            }, "addTaskOrg"), Ct = (0, r.K2)(function() {
                const t = (0, r.K2)(function(t) {
                    const e = xt[t];
                    let n = "";
                    switch(xt[t].raw.startTime.type){
                        case "prevTaskEnd":
                            {
                                const t = Dt(e.prevTaskId);
                                e.startTime = t.endTime;
                                break;
                            }
                        case "getStartDate":
                            n = yt(void 0, x, xt[t].raw.startTime.startData), n && (xt[t].startTime = n);
                    }
                    return xt[t].startTime && (xt[t].endTime = pt(xt[t].startTime, x, xt[t].raw.endTime.data, I), xt[t].endTime && (xt[t].processed = !0, xt[t].manualEndTime = c(xt[t].raw.endTime.data, "YYYY-MM-DD", !0).isValid(), ft(xt[t], x, C, $))), xt[t].processed;
                }, "compileTask");
                let e = !0;
                for (const [n, i] of xt.entries())t(n), e = e && i.processed;
                return e;
            }, "compileTasks"), St = (0, r.K2)(function(t, e) {
                let n = e;
                "loose" !== (0, s.D7)().securityLevel && (n = (0, o.J)(e)), t.split(",").forEach(function(t) {
                    void 0 !== Dt(t) && (Mt(t, ()=>{
                        window.open(n, "_self");
                    }), S.set(t, n));
                }), Kt(t, "clickable");
            }, "setLink"), Kt = (0, r.K2)(function(t, e) {
                t.split(",").forEach(function(t) {
                    let n = Dt(t);
                    void 0 !== n && n.classes.push(e);
                });
            }, "setClass"), Et = (0, r.K2)(function(t, e, n) {
                if ("loose" !== (0, s.D7)().securityLevel) return;
                if (void 0 === e) return;
                let r = [];
                if ("string" == typeof n) {
                    r = n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
                    for(let t = 0; t < r.length; t++){
                        let e = r[t].trim();
                        e.startsWith('"') && e.endsWith('"') && (e = e.substr(1, e.length - 2)), r[t] = e;
                    }
                }
                0 === r.length && r.push(t), void 0 !== Dt(t) && Mt(t, ()=>{
                    i._K.runFunc(e, ...r);
                });
            }, "setClickFun"), Mt = (0, r.K2)(function(t, e) {
                Y.push(function() {
                    const n = document.querySelector(`[id="${t}"]`);
                    null !== n && n.addEventListener("click", function() {
                        e();
                    });
                }, function() {
                    const n = document.querySelector(`[id="${t}-text"]`);
                    null !== n && n.addEventListener("click", function() {
                        e();
                    });
                });
            }, "pushFun"), At = (0, r.K2)(function(t, e, n) {
                t.split(",").forEach(function(t) {
                    Et(t, e, n);
                }), Kt(t, "clickable");
            }, "setClickEvent"), Lt = (0, r.K2)(function(t) {
                Y.forEach(function(e) {
                    e(t);
                });
            }, "bindFunctions"), Yt = {
                getConfig: (0, r.K2)(()=>(0, s.D7)().gantt, "getConfig"),
                clear: B,
                setDateFormat: j,
                getDateFormat: tt,
                enableInclusiveEndDates: V,
                endDatesAreInclusive: q,
                enableTopAxis: Z,
                topAxisEnabled: X,
                setAxisFormat: z,
                getAxisFormat: G,
                setTickInterval: N,
                getTickInterval: H,
                setTodayMarker: R,
                getTodayMarker: U,
                setAccTitle: s.SV,
                getAccTitle: s.iN,
                setDiagramTitle: s.ke,
                getDiagramTitle: s.ab,
                setDisplayMode: Q,
                getDisplayMode: J,
                setAccDescription: s.EI,
                getAccDescription: s.m7,
                addSection: at,
                getSections: ot,
                getTasks: ct,
                addTask: _t,
                findTaskById: Dt,
                addTaskOrg: $t,
                setIncludes: et,
                getIncludes: nt,
                setExcludes: it,
                getExcludes: st,
                setClickEvent: At,
                setLink: St,
                getLinks: rt,
                bindFunctions: Lt,
                parseDuration: mt,
                isInvalidDate: lt,
                setWeekday: dt,
                getWeekday: ut,
                setWeekend: ht
            };
            function getTaskTags(t, e, n) {
                let i = !0;
                for(; i;)i = !1, n.forEach(function(n) {
                    const s = new RegExp("^\\s*" + n + "\\s*$");
                    t[0].match(s) && (e[n] = !0, t.shift(1), i = !0);
                });
            }
            (0, r.K2)(getTaskTags, "getTaskTags");
            var It, Wt = (0, r.K2)(function() {
                r.Rm.debug("Something is calling, setConf, remove the call");
            }, "setConf"), Ft = {
                monday: m.ABi,
                tuesday: m.PGu,
                wednesday: m.GuW,
                thursday: m.Mol,
                friday: m.TUC,
                saturday: m.rGn,
                sunday: m.YPH
            }, Ot = (0, r.K2)((t, e)=>{
                let n = [
                    ...t
                ].map(()=>-1 / 0), i = [
                    ...t
                ].sort((t, e)=>t.startTime - e.startTime || t.order - e.order), s = 0;
                for (const t of i)for(let i = 0; i < n.length; i++)if (t.startTime >= n[i]) {
                    n[i] = t.endTime, t.order = i + e, i > s && (s = i);
                    break;
                }
                return s;
            }, "getMaxIntersections"), Pt = {
                parser: g,
                db: Yt,
                renderer: {
                    setConf: Wt,
                    draw: (0, r.K2)(function(t, e, n, i) {
                        const o = (0, s.D7)().gantt, h = (0, s.D7)().securityLevel;
                        let k;
                        "sandbox" === h && (k = (0, m.Ltv)("#i" + e));
                        const y = "sandbox" === h ? (0, m.Ltv)(k.nodes()[0].contentDocument.body) : (0, m.Ltv)("body"), p = "sandbox" === h ? k.nodes()[0].contentDocument : document, g = p.getElementById(e);
                        void 0 === (It = g.parentElement.offsetWidth) && (It = 1200), void 0 !== o.useWidth && (It = o.useWidth);
                        const b = i.db.getTasks();
                        let T = [];
                        for (const t of b)T.push(t.type);
                        T = checkUnique(T);
                        const v = {};
                        let x = 2 * o.topPadding;
                        if ("compact" === i.db.getDisplayMode() || "compact" === o.displayMode) {
                            const t = {};
                            for (const e of b)void 0 === t[e.section] ? t[e.section] = [
                                e
                            ] : t[e.section].push(e);
                            let e = 0;
                            for (const n of Object.keys(t)){
                                const i = Ot(t[n], e) + 1;
                                e += i, x += i * (o.barHeight + o.barGap), v[n] = i;
                            }
                        } else {
                            x += b.length * (o.barHeight + o.barGap);
                            for (const t of T)v[t] = b.filter((e)=>e.type === t).length;
                        }
                        g.setAttribute("viewBox", "0 0 " + It + " " + x);
                        const w = y.select(`[id="${e}"]`), _ = (0, m.w7C)().domain([
                            (0, m.jkA)(b, function(t) {
                                return t.startTime;
                            }),
                            (0, m.T9B)(b, function(t) {
                                return t.endTime;
                            })
                        ]).rangeRound([
                            0,
                            It - o.leftPadding - o.rightPadding
                        ]);
                        function taskCompare(t, e) {
                            const n = t.startTime, i = e.startTime;
                            let s = 0;
                            return n > i ? s = 1 : n < i && (s = -1), s;
                        }
                        function makeGantt(t, e, n) {
                            const s = o.barHeight, r = s + o.barGap, c = o.topPadding, h = o.leftPadding, k = (0, m.m4Y)().domain([
                                0,
                                T.length
                            ]).range([
                                "#00B9FA",
                                "#F95002"
                            ]).interpolate(m.bEH);
                            drawExcludeDays(r, c, h, e, n, t, i.db.getExcludes(), i.db.getIncludes()), makeGrid(h, c, e, n), drawRects(t, r, c, h, s, k, e), vertLabels(r, c), drawToday(h, c, e, n);
                        }
                        function drawRects(t, n, r, c, h, k, y) {
                            t.sort((t, e)=>t.vert === e.vert ? 0 : t.vert ? 1 : -1);
                            const p = [
                                ...new Set(t.map((t)=>t.order))
                            ].map((e)=>t.find((t)=>t.order === e));
                            w.append("g").selectAll("rect").data(p).enter().append("rect").attr("x", 0).attr("y", function(t, e) {
                                return t.order * n + r - 2;
                            }).attr("width", function() {
                                return y - o.rightPadding / 2;
                            }).attr("height", n).attr("class", function(t) {
                                for (const [e, n] of T.entries())if (t.type === n) return "section section" + e % o.numberSectionStyles;
                                return "section section0";
                            }).enter();
                            const g = w.append("g").selectAll("rect").data(t).enter(), v = i.db.getLinks();
                            g.append("rect").attr("id", function(t) {
                                return t.id;
                            }).attr("rx", 3).attr("ry", 3).attr("x", function(t) {
                                return t.milestone ? _(t.startTime) + c + .5 * (_(t.endTime) - _(t.startTime)) - .5 * h : _(t.startTime) + c;
                            }).attr("y", function(t, e) {
                                return e = t.order, t.vert ? o.gridLineStartPadding : e * n + r;
                            }).attr("width", function(t) {
                                return t.milestone ? h : t.vert ? .08 * h : _(t.renderEndTime || t.endTime) - _(t.startTime);
                            }).attr("height", function(t) {
                                return t.vert ? b.length * (o.barHeight + o.barGap) + 2 * o.barHeight : h;
                            }).attr("transform-origin", function(t, e) {
                                return e = t.order, (_(t.startTime) + c + .5 * (_(t.endTime) - _(t.startTime))).toString() + "px " + (e * n + r + .5 * h).toString() + "px";
                            }).attr("class", function(t) {
                                let e = "";
                                t.classes.length > 0 && (e = t.classes.join(" "));
                                let n = 0;
                                for (const [e, i] of T.entries())t.type === i && (n = e % o.numberSectionStyles);
                                let i = "";
                                return t.active ? t.crit ? i += " activeCrit" : i = " active" : t.done ? i = t.crit ? " doneCrit" : " done" : t.crit && (i += " crit"), 0 === i.length && (i = " task"), t.milestone && (i = " milestone " + i), t.vert && (i = " vert " + i), i += n, i += " " + e, "task" + i;
                            }), g.append("text").attr("id", function(t) {
                                return t.id + "-text";
                            }).text(function(t) {
                                return t.task;
                            }).attr("font-size", o.fontSize).attr("x", function(t) {
                                let e = _(t.startTime), n = _(t.renderEndTime || t.endTime);
                                if (t.milestone && (e += .5 * (_(t.endTime) - _(t.startTime)) - .5 * h, n = e + h), t.vert) return _(t.startTime) + c;
                                const i = this.getBBox().width;
                                return i > n - e ? n + i + 1.5 * o.leftPadding > y ? e + c - 5 : n + c + 5 : (n - e) / 2 + e + c;
                            }).attr("y", function(t, e) {
                                return t.vert ? o.gridLineStartPadding + b.length * (o.barHeight + o.barGap) + 60 : t.order * n + o.barHeight / 2 + (o.fontSize / 2 - 2) + r;
                            }).attr("text-height", h).attr("class", function(t) {
                                const e = _(t.startTime);
                                let n = _(t.endTime);
                                t.milestone && (n = e + h);
                                const i = this.getBBox().width;
                                let s = "";
                                t.classes.length > 0 && (s = t.classes.join(" "));
                                let r = 0;
                                for (const [e, n] of T.entries())t.type === n && (r = e % o.numberSectionStyles);
                                let c = "";
                                return t.active && (c = t.crit ? "activeCritText" + r : "activeText" + r), t.done ? c = t.crit ? c + " doneCritText" + r : c + " doneText" + r : t.crit && (c = c + " critText" + r), t.milestone && (c += " milestoneText"), t.vert && (c += " vertText"), i > n - e ? n + i + 1.5 * o.leftPadding > y ? s + " taskTextOutsideLeft taskTextOutside" + r + " " + c : s + " taskTextOutsideRight taskTextOutside" + r + " " + c + " width-" + i : s + " taskText taskText" + r + " " + c + " width-" + i;
                            });
                            if ("sandbox" === (0, s.D7)().securityLevel) {
                                let t;
                                t = (0, m.Ltv)("#i" + e);
                                const n = t.nodes()[0].contentDocument;
                                g.filter(function(t) {
                                    return v.has(t.id);
                                }).each(function(t) {
                                    var e = n.querySelector("#" + t.id), i = n.querySelector("#" + t.id + "-text");
                                    const s = e.parentNode;
                                    var r = n.createElement("a");
                                    r.setAttribute("xlink:href", v.get(t.id)), r.setAttribute("target", "_top"), s.appendChild(r), r.appendChild(e), r.appendChild(i);
                                });
                            }
                        }
                        function drawExcludeDays(t, e, n, s, h, k, y, m) {
                            if (0 === y.length && 0 === m.length) return;
                            let p, g;
                            for (const { startTime: t, endTime: e } of k)(void 0 === p || t < p) && (p = t), (void 0 === g || e > g) && (g = e);
                            if (!p || !g) return;
                            if (c(g).diff(c(p), "year") > 5) return void r.Rm.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");
                            const b = i.db.getDateFormat(), T = [];
                            let v = null, x = c(p);
                            for(; x.valueOf() <= g;)i.db.isInvalidDate(x, b, y, m) ? v ? v.end = x : v = {
                                start: x,
                                end: x
                            } : v && (T.push(v), v = null), x = x.add(1, "d");
                            w.append("g").selectAll("rect").data(T).enter().append("rect").attr("id", (t)=>"exclude-" + t.start.format("YYYY-MM-DD")).attr("x", (t)=>_(t.start.startOf("day")) + n).attr("y", o.gridLineStartPadding).attr("width", (t)=>_(t.end.endOf("day")) - _(t.start.startOf("day"))).attr("height", h - e - o.gridLineStartPadding).attr("transform-origin", function(e, i) {
                                return (_(e.start) + n + .5 * (_(e.end) - _(e.start))).toString() + "px " + (i * t + .5 * h).toString() + "px";
                            }).attr("class", "exclude-range");
                        }
                        function makeGrid(t, e, n, s) {
                            const r = i.db.getDateFormat(), c = i.db.getAxisFormat();
                            let h;
                            h = c || ("D" === r ? "%d" : o.axisFormat ?? "%Y-%m-%d");
                            let k = (0, m.l78)(_).tickSize(-s + e + o.gridLineStartPadding).tickFormat((0, m.DCK)(h));
                            const y = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(i.db.getTickInterval() || o.tickInterval);
                            if (null !== y) {
                                const t = y[1], e = y[2], n = i.db.getWeekday() || o.weekday;
                                switch(e){
                                    case "millisecond":
                                        k.ticks(m.t6C.every(t));
                                        break;
                                    case "second":
                                        k.ticks(m.ucG.every(t));
                                        break;
                                    case "minute":
                                        k.ticks(m.wXd.every(t));
                                        break;
                                    case "hour":
                                        k.ticks(m.Agd.every(t));
                                        break;
                                    case "day":
                                        k.ticks(m.UAC.every(t));
                                        break;
                                    case "week":
                                        k.ticks(Ft[n].every(t));
                                        break;
                                    case "month":
                                        k.ticks(m.Ui6.every(t));
                                }
                            }
                            if (w.append("g").attr("class", "grid").attr("transform", "translate(" + t + ", " + (s - 50) + ")").call(k).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), i.db.topAxisEnabled() || o.topAxis) {
                                let n = (0, m.tlR)(_).tickSize(-s + e + o.gridLineStartPadding).tickFormat((0, m.DCK)(h));
                                if (null !== y) {
                                    const t = y[1], e = y[2], s = i.db.getWeekday() || o.weekday;
                                    switch(e){
                                        case "millisecond":
                                            n.ticks(m.t6C.every(t));
                                            break;
                                        case "second":
                                            n.ticks(m.ucG.every(t));
                                            break;
                                        case "minute":
                                            n.ticks(m.wXd.every(t));
                                            break;
                                        case "hour":
                                            n.ticks(m.Agd.every(t));
                                            break;
                                        case "day":
                                            n.ticks(m.UAC.every(t));
                                            break;
                                        case "week":
                                            n.ticks(Ft[s].every(t));
                                            break;
                                        case "month":
                                            n.ticks(m.Ui6.every(t));
                                    }
                                }
                                w.append("g").attr("class", "grid").attr("transform", "translate(" + t + ", " + e + ")").call(n).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
                            }
                        }
                        function vertLabels(t, e) {
                            let n = 0;
                            const i = Object.keys(v).map((t)=>[
                                    t,
                                    v[t]
                                ]);
                            w.append("g").selectAll("text").data(i).enter().append(function(t) {
                                const e = t[0].split(s.Y2.lineBreakRegex), n = -(e.length - 1) / 2, i = p.createElementNS("http://www.w3.org/2000/svg", "text");
                                i.setAttribute("dy", n + "em");
                                for (const [t, n] of e.entries()){
                                    const e = p.createElementNS("http://www.w3.org/2000/svg", "tspan");
                                    e.setAttribute("alignment-baseline", "central"), e.setAttribute("x", "10"), t > 0 && e.setAttribute("dy", "1em"), e.textContent = n, i.appendChild(e);
                                }
                                return i;
                            }).attr("x", 10).attr("y", function(s, r) {
                                if (!(r > 0)) return s[1] * t / 2 + e;
                                for(let o = 0; o < r; o++)return n += i[r - 1][1], s[1] * t / 2 + n * t + e;
                            }).attr("font-size", o.sectionFontSize).attr("class", function(t) {
                                for (const [e, n] of T.entries())if (t[0] === n) return "sectionTitle sectionTitle" + e % o.numberSectionStyles;
                                return "sectionTitle";
                            });
                        }
                        function drawToday(t, e, n, s) {
                            const r = i.db.getTodayMarker();
                            if ("off" === r) return;
                            const c = w.append("g").attr("class", "today"), h = new Date, k = c.append("line");
                            k.attr("x1", _(h) + t).attr("x2", _(h) + t).attr("y1", o.titleTopMargin).attr("y2", s - o.titleTopMargin).attr("class", "today"), "" !== r && k.attr("style", r.replace(/,/g, ";"));
                        }
                        function checkUnique(t) {
                            const e = {}, n = [];
                            for(let i = 0, s = t.length; i < s; ++i)Object.prototype.hasOwnProperty.call(e, t[i]) || (e[t[i]] = !0, n.push(t[i]));
                            return n;
                        }
                        (0, r.K2)(taskCompare, "taskCompare"), b.sort(taskCompare), makeGantt(b, It, x), (0, s.a$)(w, x, It, o.useMaxWidth), w.append("text").text(i.db.getDiagramTitle()).attr("x", It / 2).attr("y", o.titleTopMargin).attr("class", "titleText"), (0, r.K2)(makeGantt, "makeGantt"), (0, r.K2)(drawRects, "drawRects"), (0, r.K2)(drawExcludeDays, "drawExcludeDays"), (0, r.K2)(makeGrid, "makeGrid"), (0, r.K2)(vertLabels, "vertLabels"), (0, r.K2)(drawToday, "drawToday"), (0, r.K2)(checkUnique, "checkUnique");
                    }, "draw")
                },
                styles: (0, r.K2)((t)=>`\n  .mermaid-main-font {\n        font-family: ${t.fontFamily};\n  }\n\n  .exclude-range {\n    fill: ${t.excludeBkgColor};\n  }\n\n  .section {\n    stroke: none;\n    opacity: 0.2;\n  }\n\n  .section0 {\n    fill: ${t.sectionBkgColor};\n  }\n\n  .section2 {\n    fill: ${t.sectionBkgColor2};\n  }\n\n  .section1,\n  .section3 {\n    fill: ${t.altSectionBkgColor};\n    opacity: 0.2;\n  }\n\n  .sectionTitle0 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle1 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle2 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle3 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle {\n    text-anchor: start;\n    font-family: ${t.fontFamily};\n  }\n\n\n  /* Grid and axis */\n\n  .grid .tick {\n    stroke: ${t.gridColor};\n    opacity: 0.8;\n    shape-rendering: crispEdges;\n  }\n\n  .grid .tick text {\n    font-family: ${t.fontFamily};\n    fill: ${t.textColor};\n  }\n\n  .grid path {\n    stroke-width: 0;\n  }\n\n\n  /* Today line */\n\n  .today {\n    fill: none;\n    stroke: ${t.todayLineColor};\n    stroke-width: 2px;\n  }\n\n\n  /* Task styling */\n\n  /* Default task */\n\n  .task {\n    stroke-width: 2;\n  }\n\n  .taskText {\n    text-anchor: middle;\n    font-family: ${t.fontFamily};\n  }\n\n  .taskTextOutsideRight {\n    fill: ${t.taskTextDarkColor};\n    text-anchor: start;\n    font-family: ${t.fontFamily};\n  }\n\n  .taskTextOutsideLeft {\n    fill: ${t.taskTextDarkColor};\n    text-anchor: end;\n  }\n\n\n  /* Special case clickable */\n\n  .task.clickable {\n    cursor: pointer;\n  }\n\n  .taskText.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  .taskTextOutsideLeft.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  .taskTextOutsideRight.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n\n  /* Specific task settings for the sections*/\n\n  .taskText0,\n  .taskText1,\n  .taskText2,\n  .taskText3 {\n    fill: ${t.taskTextColor};\n  }\n\n  .task0,\n  .task1,\n  .task2,\n  .task3 {\n    fill: ${t.taskBkgColor};\n    stroke: ${t.taskBorderColor};\n  }\n\n  .taskTextOutside0,\n  .taskTextOutside2\n  {\n    fill: ${t.taskTextOutsideColor};\n  }\n\n  .taskTextOutside1,\n  .taskTextOutside3 {\n    fill: ${t.taskTextOutsideColor};\n  }\n\n\n  /* Active task */\n\n  .active0,\n  .active1,\n  .active2,\n  .active3 {\n    fill: ${t.activeTaskBkgColor};\n    stroke: ${t.activeTaskBorderColor};\n  }\n\n  .activeText0,\n  .activeText1,\n  .activeText2,\n  .activeText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n\n  /* Completed task */\n\n  .done0,\n  .done1,\n  .done2,\n  .done3 {\n    stroke: ${t.doneTaskBorderColor};\n    fill: ${t.doneTaskBkgColor};\n    stroke-width: 2;\n  }\n\n  .doneText0,\n  .doneText1,\n  .doneText2,\n  .doneText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n\n  /* Tasks on the critical line */\n\n  .crit0,\n  .crit1,\n  .crit2,\n  .crit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.critBkgColor};\n    stroke-width: 2;\n  }\n\n  .activeCrit0,\n  .activeCrit1,\n  .activeCrit2,\n  .activeCrit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.activeTaskBkgColor};\n    stroke-width: 2;\n  }\n\n  .doneCrit0,\n  .doneCrit1,\n  .doneCrit2,\n  .doneCrit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.doneTaskBkgColor};\n    stroke-width: 2;\n    cursor: pointer;\n    shape-rendering: crispEdges;\n  }\n\n  .milestone {\n    transform: rotate(45deg) scale(0.8,0.8);\n  }\n\n  .milestoneText {\n    font-style: italic;\n  }\n  .doneCritText0,\n  .doneCritText1,\n  .doneCritText2,\n  .doneCritText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n  .vert {\n    stroke: ${t.vertLineColor};\n  }\n\n  .vertText {\n    font-size: 15px;\n    text-anchor: middle;\n    fill: ${t.vertLineColor} !important;\n  }\n\n  .activeCritText0,\n  .activeCritText1,\n  .activeCritText2,\n  .activeCritText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n  .titleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.titleColor || t.textColor};\n    font-family: ${t.fontFamily};\n  }\n`, "getStyles")
            };
        }
    }
]); //# sourceMappingURL=4036.5f110db7054306f26d9e.js.map
