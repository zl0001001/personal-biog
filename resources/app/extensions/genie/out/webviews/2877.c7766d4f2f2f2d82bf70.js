"use strict";
(self.webpackChunk_genie_chat_webview_app = self.webpackChunk_genie_chat_webview_app || []).push([
    [
        2877
    ],
    {
        2289: function(e, t, r) {
            var o = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
                void 0 === o && (o = r);
                var n = Object.getOwnPropertyDescriptor(t, r);
                n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, o, n);
            } : function(e, t, r, o) {
                void 0 === o && (o = r), e[o] = t[r];
            }), n = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(r(8355), t), n(r(4588), t), n(r(12251), t);
        },
        2877: function(e, t, r) {
            var o = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
                void 0 === o && (o = r);
                var n = Object.getOwnPropertyDescriptor(t, r);
                n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, o, n);
            } : function(e, t, r, o) {
                void 0 === o && (o = r), e[o] = t[r];
            }), n = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(r(81483), t), n(r(31433), t), n(r(95072), t), n(r(21104), t), n(r(2289), t), n(r(62465), t);
        },
        3214: function(e, t, r) {
            var o = this && this.__decorate || function(e, t, r, o) {
                var n, i = arguments.length, a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var c = e.length - 1; c >= 0; c--)(n = e[c]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
                return i > 3 && a && Object.defineProperty(t, r, a), a;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DefaultUserinfoProvider = void 0;
            const n = r(15985), i = r(62243);
            let a = class DefaultUserinfoProvider {
                async provide() {}
            };
            t.DefaultUserinfoProvider = a, t.DefaultUserinfoProvider = a = o([
                (0, n.Component)(i.UserinfoProvider)
            ], a);
        },
        4588: function(e, t, r) {
            var o = this && this.__decorate || function(e, t, r, o) {
                var n, i = arguments.length, a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var c = e.length - 1; c >= 0; c--)(n = e[c]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
                return i > 3 && a && Object.defineProperty(t, r, a), a;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MemoryLocalStorage = void 0;
            const n = r(15985), i = r(8355);
            let a = class MemoryLocalStorage {
                async set(e, t) {
                    this.storage.set(e, t), this.emitter.fire({
                        domain: e
                    });
                }
                async get(e, t) {
                    return this.storage.has(e) ? this.storage.get(e) : t;
                }
                async remove(e) {
                    this.storage.delete(e), this.emitter.fire({
                        domain: e
                    });
                }
                constructor(){
                    this.storage = new Map, this.emitter = new n.Emitter, this.changeEvent = this.emitter.event;
                }
            };
            t.MemoryLocalStorage = a, t.MemoryLocalStorage = a = o([
                (0, n.Component)(i.LocalStorage)
            ], a);
        },
        8355: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LocalStorage = void 0, t.LocalStorage = Symbol("LocalStorage");
        },
        11531: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Workspace = t.URI = void 0;
            const o = r(40996);
            let URI = class URI extends o.URI {
            };
            t.URI = URI, t.Workspace = Symbol("Workspace");
        },
        12251: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ShareCacheable = function ShareCacheable(e) {
                return function(t, r, c) {
                    const l = c.value, { domain: f, identifierGenerator: s = defaultKeyGenerator, expireIn: u = 0, onCacheUpdate: p } = e;
                    let d, v, y = !1;
                    return c.value = async function(...t) {
                        var r;
                        const c = o.ContainerUtil.get(i.LocalStorage);
                        p && !y && (y = !0, c.changeEvent(async (e)=>{
                            if (e.domain !== f) return;
                            const t = await getCache(c, f, d, u);
                            t && t.creator !== a && n.ObjectUtils.isChanged(v, t.value) && p();
                        }));
                        const h = await s.apply(this, t), g = "function" == typeof e.forceUpdate ? await e.forceUpdate.apply(this, t) : !!e.forceUpdate;
                        let b, _;
                        h && (_ = null === (r = await getCache(c, f, h, u)) || void 0 === r ? void 0 : r.value, _ && !g ? (o.ContainerUtil.get(o.Logger).debug(`[ShareCache] 从缓存中获取 ${f}`), b = _) : (o.ContainerUtil.get(o.Logger).debug(`[ShareCache] ${g ? "强制更新" : "从实际方法获取"} ${f}`), b = await l.apply(this, t), await async function setCache(e, t, r, o, n) {
                            if (void 0 === o) return;
                            let i = await e.get(t);
                            i && "object" == typeof i || (i = {});
                            i[r] = {
                                timestamp: Date.now(),
                                value: o,
                                creator: a
                            }, await e.set(t, i);
                        }(c, f, h, b))), d = h;
                        try {
                            v = void 0 === b ? b : JSON.parse(JSON.stringify(b));
                        } catch (e) {
                            o.ContainerUtil.get(o.Logger).debug(`[ShareCache] clone result error: ${e}`), v = b;
                        }
                        return b;
                    }, c;
                };
            }, t.ShareCacheEvict = function ShareCacheEvict(e) {
                return function(t, r, n) {
                    const a = n.value, { domain: c, identifierGenerator: l } = e;
                    n.value = function(...e) {
                        return c && (async ()=>{
                            let t;
                            l && (t = await l.apply(this, e));
                            const r = o.ContainerUtil.get(i.LocalStorage);
                            t ? async function removeCache(e, t, r) {
                                const o = await e.get(t);
                                if (!o) return;
                                o[r] && (delete o[r], await e.set(t, o));
                            }(r, c, t) : r.remove(c);
                        })(), a.apply(this, e);
                    };
                };
            };
            const o = r(15985), n = r(39322), i = r(8355), a = (0, o.generateUUUID)();
            function defaultKeyGenerator(...e) {
                return e.map((e)=>{
                    if ("object" == typeof e) try {
                        return JSON.stringify(e);
                    } catch (e) {
                        return "object";
                    }
                    return String(e);
                }).join("|");
            }
            async function getCache(e, t, r, o) {
                const n = await e.get(t);
                if (!n) return;
                const i = n[r];
                if (!i) return;
                if (!isCacheExpired(i, o)) return i;
                const a = {};
                Object.keys(n).forEach((e)=>{
                    n[e] && !isCacheExpired(n[e], o) && (a[e] = n[e]);
                }), await e.set(t, a);
            }
            function isCacheExpired(e, t) {
                return !(!t || t <= 0) && Date.now() - e.timestamp > t;
            }
        },
        21104: function(e, t, r) {
            var o = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
                void 0 === o && (o = r);
                var n = Object.getOwnPropertyDescriptor(t, r);
                n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, o, n);
            } : function(e, t, r, o) {
                void 0 === o && (o = r), e[o] = t[r];
            }), n = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(r(31237), t), n(r(21844), t);
        },
        21844: function(e, t, r) {
            var o = r(78), n = this && this.__decorate || function(e, t, r, o) {
                var n, i = arguments.length, a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var c = e.length - 1; c >= 0; c--)(n = e[c]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
                return i > 3 && a && Object.defineProperty(t, r, a), a;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DefaultNotifier = void 0;
            const i = r(15985), a = r(31237);
            let c = class DefaultNotifier {
                async info(e, t) {
                    o.info(this.formatMessage(e, t));
                }
                async infoAction(e, t, ...r) {
                    o.info(this.formatMessage(e, t));
                }
                async warn(e, t) {
                    o.warn(this.formatMessage(e, t));
                }
                async error(e, t) {
                    o.error(this.formatMessage(e, t));
                }
                formatMessage(e, t) {
                    if (!t || 0 === t.length) return e;
                    let r = e;
                    return t.forEach((e, t)=>{
                        r = r.replace(`{${t}}`, String(e));
                    }), r;
                }
                async sendSystemNotification(e) {
                    o.info("sendSystemNotification", e);
                }
            };
            t.DefaultNotifier = c, t.DefaultNotifier = c = n([
                (0, i.Component)(a.Notifier)
            ], c);
        },
        26928: function(e, t, r) {
            var o = this && this.__decorate || function(e, t, r, o) {
                var n, i = arguments.length, a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var c = e.length - 1; c >= 0; c--)(n = e[c]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
                return i > 3 && a && Object.defineProperty(t, r, a), a;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DefaultExternalUriOpener = void 0;
            const n = r(15985), i = r(97317), a = r(51651);
            let c = class DefaultExternalUriOpener {
                async open(e) {
                    return !1;
                }
                constructor(){
                    this.urlSubject = new i.Subject;
                }
            };
            t.DefaultExternalUriOpener = c, t.DefaultExternalUriOpener = c = o([
                (0, n.Component)(a.ExternalUriOpener)
            ], c);
        },
        30979: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FileSystem = void 0, t.FileSystem = Symbol("FileSystem");
        },
        31237: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Notifier = void 0, t.Notifier = Symbol("Notifier");
        },
        31433: function(e, t, r) {
            var o = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
                void 0 === o && (o = r);
                var n = Object.getOwnPropertyDescriptor(t, r);
                n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, o, n);
            } : function(e, t, r, o) {
                void 0 === o && (o = r), e[o] = t[r];
            }), n = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(r(30979), t);
        },
        47675: function(e, t, r) {
            var o = this && this.__decorate || function(e, t, r, o) {
                var n, i = arguments.length, a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var c = e.length - 1; c >= 0; c--)(n = e[c]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
                return i > 3 && a && Object.defineProperty(t, r, a), a;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DefaultPagePreviewer = void 0;
            const n = r(15985), i = r(51651);
            let a = class DefaultPagePreviewer {
                preview(e) {
                    return Promise.resolve(!0);
                }
            };
            t.DefaultPagePreviewer = a, t.DefaultPagePreviewer = a = o([
                (0, n.Component)(i.PagePreviewer)
            ], a);
        },
        51651: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PagePreviewer = t.ExternalUriOpener = void 0, t.ExternalUriOpener = Symbol("ExternalUriOpener"), t.PagePreviewer = Symbol("PagePreviewer");
        },
        62243: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UserinfoProvider = void 0, t.UserinfoProvider = Symbol("UserinfoProvider");
        },
        62465: function(e, t, r) {
            var o = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
                void 0 === o && (o = r);
                var n = Object.getOwnPropertyDescriptor(t, r);
                n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, o, n);
            } : function(e, t, r, o) {
                void 0 === o && (o = r), e[o] = t[r];
            }), n = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(r(62243), t), n(r(3214), t);
        },
        70606: function(e, t, r) {
            var o = this && this.__decorate || function(e, t, r, o) {
                var n, i = arguments.length, a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var c = e.length - 1; c >= 0; c--)(n = e[c]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
                return i > 3 && a && Object.defineProperty(t, r, a), a;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DefaultWorkspaceImpl = void 0;
            const n = r(15985), i = r(11531);
            let a = class DefaultWorkspaceImpl {
                constructor(){
                    this.workspaceFolders = [];
                }
            };
            t.DefaultWorkspaceImpl = a, t.DefaultWorkspaceImpl = a = o([
                (0, n.Component)(i.Workspace)
            ], a);
        },
        81483: function(e, t, r) {
            var o = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
                void 0 === o && (o = r);
                var n = Object.getOwnPropertyDescriptor(t, r);
                n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, o, n);
            } : function(e, t, r, o) {
                void 0 === o && (o = r), e[o] = t[r];
            }), n = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(r(11531), t), n(r(70606), t);
        },
        95072: function(e, t, r) {
            var o = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
                void 0 === o && (o = r);
                var n = Object.getOwnPropertyDescriptor(t, r);
                n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, o, n);
            } : function(e, t, r, o) {
                void 0 === o && (o = r), e[o] = t[r];
            }), n = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(r(51651), t), n(r(26928), t), n(r(47675), t);
        }
    }
]); //# sourceMappingURL=2877.c7766d4f2f2f2d82bf70.js.map
