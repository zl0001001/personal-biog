(self.webpackChunk_genie_chat_webview_app = self.webpackChunk_genie_chat_webview_app || []).push([
    [
        6844
    ],
    {
        2948: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ContextVariableUtils = void 0;
            t.ContextVariableUtils = class ContextVariableUtils {
                static toObject(e) {
                    const t = {};
                    for (const r of e)t[r.name] = r.value;
                    return t;
                }
                static toArray(e) {
                    const t = [];
                    for (const [r, o] of Object.entries(e))t.push({
                        name: r,
                        value: o
                    });
                    return t;
                }
            };
        },
        6497: ()=>{},
        9467: function(e, t, r) {
            "use strict";
            var o = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DefaultAuthenticationStorage = void 0;
            const i = r(15985), n = r(97317), a = r(70160);
            let s = class DefaultAuthenticationStorage {
                async priority() {
                    return a.AuthenticationStoragePriority.Low;
                }
                async store(e) {
                    this.session = e, this.storeSessionSubject.next(e);
                }
                async restore() {
                    return this.storeSessionSubject.next(this.session), this.session;
                }
                async clean() {
                    this.session = void 0, this.storeSessionSubject.next(void 0);
                }
                constructor(){
                    this.storeSessionSubject = new n.Subject;
                }
            };
            t.DefaultAuthenticationStorage = s, t.DefaultAuthenticationStorage = s = o([
                (0, i.Component)(a.AuthenticationStorage)
            ], s);
        },
        11060: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        20573: function(e, t, r) {
            "use strict";
            var o = r(42649), i = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, n = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            }, a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CustomTokenAuthenticationStorageImpl = t.CustomTokenAuthenticationStorage = void 0;
            const s = r(15985), c = r(26020), u = a(r(58773)), l = r(97317), d = r(70160), h = 1999999999999;
            t.CustomTokenAuthenticationStorage = Symbol("CustomTokenAuthenticationStorage");
            let p = class CustomTokenAuthenticationStorageImpl {
                async priority() {
                    var e;
                    return (null === (e = (await this.productManager.waitConfiguration()).authentication) || void 0 === e ? void 0 : e.type) === c.AuthenticationType.CUSTOM_TOKEN ? d.AuthenticationStoragePriority.Heigh : d.AuthenticationStoragePriority.Disabled;
                }
                async store(e) {}
                async restore() {
                    var e, t;
                    const r = null === (t = null === (e = (await this.productManager.waitConfiguration()).authentication) || void 0 === e ? void 0 : e.attributes) || void 0 === t ? void 0 : t.token;
                    if (!r) throw new Error("token is undefined");
                    const o = this.tryExtractUserIDFromJWTToken(r), i = {
                        uid: (null == o ? void 0 : o.userId) || this.getUserId(),
                        nickname: (null == o ? void 0 : o.nickname) || this.getUsername(),
                        enterpriseId: null == o ? void 0 : o.enterpriseId,
                        type: (null == o ? void 0 : o.type) || "personal",
                        lastLogin: !0
                    }, n = {
                        auth: {
                            accessToken: r,
                            expiresIn: h,
                            expiresAt: h,
                            refreshToken: "",
                            refreshExpiresIn: h,
                            refreshExpiresAt: h,
                            tokenType: "Bearer",
                            scope: "",
                            domain: null == o ? void 0 : o.domain
                        },
                        account: i,
                        accounts: [
                            i
                        ]
                    };
                    return this.storeSessionSubject.next(n), n;
                }
                async clean() {}
                getUserId() {
                    var e;
                    return null !== (e = o.env.ACC_USER_ID) && void 0 !== e ? e : this.getUsername();
                }
                getUsername() {
                    return o.env.ACC_USER_NICKNAME ? o.env.ACC_USER_NICKNAME : "anonymous";
                }
                tryExtractUserIDFromJWTToken(e) {
                    const t = {};
                    try {
                        const r = u.default.decode(e, {
                            complete: !0
                        }), o = null == r ? void 0 : r.payload;
                        if (!o) return;
                        if (o.sub && "string" == typeof o.sub && (t.userId = o.sub), t.nickname = o.nickname || o.preferred_username, o.iss) {
                            const e = o.iss.split("/").pop();
                            e.startsWith("sso-") && (t.enterpriseId = e.slice(4), t.type = "ultimate"), t.domain = this.extractDomain(o.iss);
                        }
                    } catch (e) {
                        return;
                    }
                    return t;
                }
                extractDomain(e) {
                    try {
                        return new URL(e).hostname;
                    } catch (t) {
                        const r = e.match(/https?:\/\/([^\/]+)/);
                        return r ? r[1] : void 0;
                    }
                }
                constructor(){
                    this.storeSessionSubject = new l.Subject;
                }
            };
            t.CustomTokenAuthenticationStorageImpl = p, i([
                (0, s.Autowired)(c.ProductManager),
                n("design:type", Object)
            ], p.prototype, "productManager", void 0), t.CustomTokenAuthenticationStorageImpl = p = i([
                (0, s.Component)(d.AuthenticationStorage, t.CustomTokenAuthenticationStorage)
            ], p);
        },
        21113: ()=>{},
        22384: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        22847: function(e, t, r) {
            "use strict";
            var o = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, i = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UserInfoContextVariableResolver = void 0;
            const n = r(15985), a = r(63868), s = r(70160);
            let c = class UserInfoContextVariableResolver {
                async priority(e, t) {
                    return this.authenticationManager.currentSessionSubject.getValue() ? 5 : 0;
                }
                async resolve(e, t) {
                    const r = this.authenticationManager.currentSessionSubject.getValue();
                    if (r) return {
                        name: this.name,
                        value: {
                            id: r.account.uid,
                            nickname: r.account.nickname
                        }
                    };
                }
                constructor(){
                    this.name = "userInfo";
                }
            };
            t.UserInfoContextVariableResolver = c, o([
                (0, n.Autowired)(s.AuthenticationManager),
                i("design:type", Object)
            ], c.prototype, "authenticationManager", void 0), t.UserInfoContextVariableResolver = c = o([
                (0, n.Component)(a.ContextVariableResolver)
            ], c);
        },
        24589: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        25079: function(e, t, r) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
                void 0 === o && (o = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, o, i);
            } : function(e, t, r, o) {
                void 0 === o && (o = r), e[o] = t[r];
            }), i = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), i(r(70160), t), i(r(61665), t), i(r(62386), t), i(r(22847), t), i(r(36034), t), i(r(9467), t), i(r(57327), t), i(r(20573), t), i(r(64031), t), i(r(48928), t);
        },
        27521: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        28929: ()=>{},
        30634: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        31111: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        33033: ()=>{},
        36034: function(e, t, r) {
            "use strict";
            var o = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, i = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AuthenticationHttpInterceptor = void 0;
            const n = r(15985), a = r(56464), s = r(2877), c = r(70160);
            let u = class AuthenticationHttpInterceptor {
                initialize() {
                    this.restOperations.interceptors.request.use((e)=>{
                        e.headers || (e.headers = {});
                        const t = this.authenticationManager.currentSessionSubject.getValue();
                        if (t) {
                            const { account: r, auth: o } = t;
                            e.headers[a.HttpHeaders.AUTHORIZATION] || !o.accessToken || e.headers[c.HTTP_HEADER_NO_AUTHORIZATION] || (e.headers[a.HttpHeaders.AUTHORIZATION] = `Bearer ${o.accessToken}`), e.headers[c.HTTP_HEADER_USER_ID] || !(null == r ? void 0 : r.uid) || e.headers[c.HTTP_HEADER_NO_USER_ID] || (e.headers[c.HTTP_HEADER_USER_ID] = r.uid), e.headers[c.HTTP_HEADER_ENTERPRISE_ID] || !(null == r ? void 0 : r.enterpriseId) || e.headers[c.HTTP_HEADER_NO_ENTERPRISE_ID] || (e.headers[c.HTTP_HEADER_ENTERPRISE_ID] = r.enterpriseId), e.headers[c.HTTP_HEADER_DEPARTMENT_INFO] || !(null == r ? void 0 : r.departmentFullName) || e.headers[c.HTTP_HEADER_NO_DEPARTMENT_INFO] || (e.headers[c.HTTP_HEADER_DEPARTMENT_INFO] = r.departmentFullName), !e.headers[c.HTTP_HEADER_TENANT_ID] && (null == r ? void 0 : r.enterpriseId) && (e.headers[c.HTTP_HEADER_TENANT_ID] = r.enterpriseId), !e.headers[c.HTTP_HEADER_DOMAIN] && o.domain && (e.headers[c.HTTP_HEADER_DOMAIN] = o.domain);
                        }
                        return e;
                    }), this.restOperations.interceptors.response.use(async (e)=>{
                        var t;
                        const r = null == e ? void 0 : e.data;
                        try {
                            401 === (null == r ? void 0 : r.code) && (null === (t = e.config.headers) || void 0 === t ? void 0 : t.Authorization) && this.checkToLogout(`${e.config.headers.Authorization}`, e.config.baseURL, e.config.url);
                        } catch (e) {
                            this.logger.warn("Failed to get response code");
                        }
                        return e;
                    }, (e)=>{
                        var t, r;
                        return 401 === (null === (t = e.response) || void 0 === t ? void 0 : t.status) && (null === (r = e.response.config.headers) || void 0 === r ? void 0 : r.Authorization) && this.checkToLogout(`${e.response.config.headers.Authorization}`, e.response.config.baseURL, e.response.config.url), Promise.reject(e);
                    });
                }
                checkToLogout(e, t, r) {
                    var o, i;
                    const n = `${e}`.substring(7), a = null === (i = null === (o = this.authenticationManager.currentSessionSubject.getValue()) || void 0 === o ? void 0 : o.auth) || void 0 === i ? void 0 : i.accessToken;
                    n && n === a && (this.logger.warn(`401 code logout, baseURL: ${t}, url: ${r}, current token: ${null == a ? void 0 : a.length}`), this.notifier.warn("Session expired. You have been automatically logged out."), this.authenticationManager.logout());
                }
            };
            t.AuthenticationHttpInterceptor = u, o([
                (0, n.Autowired)(c.AuthenticationManager),
                i("design:type", Object)
            ], u.prototype, "authenticationManager", void 0), o([
                (0, n.Autowired)(a.RestOperations),
                i("design:type", Function)
            ], u.prototype, "restOperations", void 0), o([
                (0, n.Autowired)(s.Notifier),
                i("design:type", Object)
            ], u.prototype, "notifier", void 0), o([
                (0, n.Autowired)(n.Logger),
                i("design:type", Object)
            ], u.prototype, "logger", void 0), t.AuthenticationHttpInterceptor = u = o([
                (0, n.Component)(n.ApplicationLifecycle)
            ], u);
        },
        38475: ()=>{},
        39045: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ContextVariableManager = t.ContextVariableResolver = t.ContextVariable = t.ContextVariableDefinition = void 0, t.ContextVariableDefinition = Symbol("ContextVariableDefinition"), t.ContextVariable = Symbol("ContextVariable"), t.ContextVariableResolver = Symbol("ContextVariableResolver"), t.ContextVariableManager = Symbol("ContextVariableManager");
        },
        43026: (e, t)=>{
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.KnowledgeBaseType = void 0, function(e) {
                e.Custom = "custom", e.Common = "common";
            }(r || (t.KnowledgeBaseType = r = {}));
        },
        46377: ()=>{},
        48928: function(e, t, r) {
            "use strict";
            var o = r(42649), i = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, n = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProductEnvServiceImpl = void 0;
            const a = r(15985), s = r(70160), c = r(26020), u = r(70160);
            let l = class ProductEnvServiceImpl {
                async switch(e) {
                    o.env[u.ENV_KEY_CODEBUDDY_COPILOT_INTERNET_ENVIRONMENT] = e || "", await this.productManager.sync();
                }
                async switchBySession(e) {
                    if (!e) return;
                    const t = await this.resolveEnvBySession(e);
                    await this.switch(t);
                }
                async getCurrent() {
                    if (o.env[u.ENV_KEY_CODEBUDDY_COPILOT_INTERNET_ENVIRONMENT]) return o.env[u.ENV_KEY_CODEBUDDY_COPILOT_INTERNET_ENVIRONMENT];
                    const e = await this.productManager.waitConfiguration();
                    if (e.networkEnvironment) return e.networkEnvironment;
                    const t = a.ContainerUtil.get(s.AuthenticationManager).currentSessionSubject.getValue();
                    return this.resolveEnvBySession(t);
                }
                async resolveEnvBySession(e) {
                    var t, r, o, i, n, a, s, c;
                    if (!e) return;
                    const l = await this.productManager.waitConfiguration();
                    return this.isDomain(null === (r = null === (t = l.authentication) || void 0 === t ? void 0 : t.attributes) || void 0 === r ? void 0 : r.internalDomain, e.auth.domain) ? u.ProductEnviroment.Internal : this.isDomain(null === (i = null === (o = l.authentication) || void 0 === o ? void 0 : o.attributes) || void 0 === i ? void 0 : i.iOADomain, e.auth.domain) ? u.ProductEnviroment.IOA : this.isDomain(null === (a = null === (n = l.authentication) || void 0 === n ? void 0 : n.attributes) || void 0 === a ? void 0 : a.cloudHostedDomain, e.auth.domain) ? u.ProductEnviroment.Cloudhosted : this.isDomain(null === (c = null === (s = l.authentication) || void 0 === s ? void 0 : s.attributes) || void 0 === c ? void 0 : c.externalDomain, e.auth.domain) ? u.ProductEnviroment.External : e.auth.domain ? u.ProductEnviroment.Selfhosted : void 0;
                }
                isDomain(e, t) {
                    return !(!e || !t) && (Array.isArray(e) ? e.some((e)=>this.matchDomain(e, t)) : this.matchDomain(e, t));
                }
                matchDomain(e, t) {
                    if (e === t) return !0;
                    if (!e.includes("*")) return !1;
                    const r = e.replace(/\./g, "\\.").replace(/\*/g, "[^.]*");
                    return new RegExp(`^${r}$`).test(t);
                }
            };
            t.ProductEnvServiceImpl = l, i([
                (0, a.Autowired)(c.ProductManager),
                n("design:type", Object)
            ], l.prototype, "productManager", void 0), t.ProductEnvServiceImpl = l = i([
                (0, a.Component)(u.ProductEnvService)
            ], l);
        },
        50251: (e, t)=>{
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RelatedFileRelatedType = void 0, function(e) {
                e.RECENTLY_OPENED = "RECENTLY_OPENED", e.PATH_ASSOCIATED = "PATH_ASSOCIATED", e.AST_DEPENDENCE = "AST_DEPENDENCE", e.CURRENT_TEST = "CURRENT_TEST", e.OTHER_TEST = "OTHER_TEST";
            }(r || (t.RelatedFileRelatedType = r = {}));
        },
        55589: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        56706: function(e, t, r) {
            "use strict";
            var o = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, i = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ContextVariableManagerImpl = void 0;
            const n = r(15985), a = r(39045);
            let s = class ContextVariableManagerImpl {
                init() {
                    this.logger.info("ContextVariableManagerImpl");
                }
                registerContextVariableResolver(e) {
                    this.collectionContextVariableResolvers.push(e);
                }
                async getContextVariable(e, t) {
                    return (await this.resolveContextVariables([
                        e
                    ], t))[0];
                }
                async getContextVariables(e, t) {
                    const r = [
                        ...e || []
                    ];
                    return this.resolveContextVariables(r, t);
                }
                async getContextVariablesMap(e, t) {
                    return {
                        ...(await this.getContextVariables(e, t)).reduce((e, t)=>(e[t.name] = t.value, e), {})
                    };
                }
                async resolveContextVariables(e, t) {
                    const r = [];
                    for (const o of e){
                        const e = await this.getResolver(o);
                        if (!e) continue;
                        const i = Date.now();
                        try {
                            const n = await e.resolve(o, t);
                            this.logger.debug(`Resolved context variable: ${o.name} (${Date.now() - i}ms)`), n && r.push(n);
                        } catch (e) {
                            this.logger.error(`Failed to resolve ${o.name} context variable: ${e}`);
                        }
                    }
                    return r;
                }
                async getResolver(e, t) {
                    return (await this.prioritizeResolvers(e, t))[0];
                }
                getResolvers(e) {
                    return [
                        ...this.contextVariableResolvers,
                        ...this.collectionContextVariableResolvers
                    ].filter((t)=>t.name === e);
                }
                async prioritizeResolvers(e, t) {
                    const r = this.getResolvers(e.name);
                    if (!r) return [];
                    return (await n.Prioritizeable.prioritizeAll(r, async (r)=>{
                        try {
                            return await r.priority(e, t);
                        } catch (e) {
                            return 0;
                        }
                    })).filter((e)=>e.priority > 0).map((e)=>e.value);
                }
                constructor(){
                    this.contextVariableResolvers = [], this.collectionContextVariableResolvers = [];
                }
            };
            t.ContextVariableManagerImpl = s, o([
                (0, n.Autowired)(a.ContextVariableResolver),
                i("design:type", Array)
            ], s.prototype, "contextVariableResolvers", void 0), o([
                (0, n.Autowired)(n.Logger),
                i("design:type", Object)
            ], s.prototype, "logger", void 0), o([
                (0, n.PostConstruct)(),
                i("design:type", Function),
                i("design:paramtypes", []),
                i("design:returntype", void 0)
            ], s.prototype, "init", null), t.ContextVariableManagerImpl = s = o([
                (0, n.Component)(a.ContextVariableManager)
            ], s);
        },
        57327: function(e, t, r) {
            "use strict";
            var o = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, i = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CustomTokenAuthenticationProvider = void 0;
            const n = r(15985), a = r(26020), s = r(47392), c = r(70160), u = r(20573);
            let l = class CustomTokenAuthenticationProvider {
                async support() {
                    var e;
                    return (null === (e = (await this.productManager.waitConfiguration()).authentication) || void 0 === e ? void 0 : e.type) === a.AuthenticationType.CUSTOM_TOKEN;
                }
                async getAuthenticationType() {
                    return [
                        a.AuthenticationType.CUSTOM_TOKEN
                    ];
                }
                async createSession(e) {
                    const t = await this.customTokenAuthenticationStorage.restore();
                    if (!t) throw new Error("authentication token is undefined");
                    return t;
                }
                async refreshSession(e, t) {
                    return e.auth.lastRefreshTime = Date.now(), e;
                }
                async removeSession(e) {}
                async switchAccount(e, t, r) {
                    return t;
                }
            };
            t.CustomTokenAuthenticationProvider = l, o([
                (0, n.Autowired)(a.ProductManager),
                i("design:type", Object)
            ], l.prototype, "productManager", void 0), o([
                (0, n.Autowired)(u.CustomTokenAuthenticationStorage),
                i("design:type", Object)
            ], l.prototype, "customTokenAuthenticationStorage", void 0), o([
                (0, n.Autowired)(s.Logger),
                i("design:type", Object)
            ], l.prototype, "logger", void 0), t.CustomTokenAuthenticationProvider = l = o([
                (0, n.Component)(c.AuthenticationProvider)
            ], l);
        },
        59584: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        60022: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        61665: function(e, t, r) {
            "use strict";
            var o = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, i = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AuthenticationManagerImpl = void 0;
            const n = r(15985), a = r(56464), s = r(39322), c = r(79873), u = r(26020), l = r(2877), d = r(47392), h = r(97317), p = r(90905), v = r(70160);
            let f = class AuthenticationManagerImpl {
                init() {
                    this.logger.setContext("AuthenticationManager"), this.doInit();
                }
                async doInit() {
                    var e;
                    const t = await this.getAuthenticationStorage();
                    null == t || t.storeSessionSubject.pipe((0, p.distinctUntilChanged)((e, t)=>JSON.stringify(e) === JSON.stringify(t))).subscribe((e)=>{
                        this.productEnvService.switchBySession(e).then(()=>{
                            this.currentSessionSubject.next(e), this.scheduleRefreshSession(), e && this.productManager.sync(!0);
                        });
                    }), this.currentSessionSubject.subscribe((e)=>{
                        var t, r, o;
                        (null === (t = null == e ? void 0 : e.account) || void 0 === t ? void 0 : t.uid) && (null === (r = this.filePathService) || void 0 === r || r.setCurrentUserId(null === (o = null == e ? void 0 : e.account) || void 0 === o ? void 0 : o.uid));
                    });
                    const r = await (null == t ? void 0 : t.restore()), o = this.productManager.configuration.getValue();
                    (null === (e = null == o ? void 0 : o.productFeatures) || void 0 === e ? void 0 : e[u.ProductFeature.SwitchBySession]) && await this.productEnvService.switchBySession(r), this.currentSessionSubject.next(r), this.initializedDeferred.resolve();
                }
                async checkNetworkConnectivity() {
                    var e;
                    const t = await this.getAuthenticationProvider();
                    return "function" == typeof (null == t ? void 0 : t.checkNetworkConnectivity) ? null === (e = null == t ? void 0 : t.checkNetworkConnectivity) || void 0 === e ? void 0 : e.call(t) : [
                        null,
                        !0
                    ];
                }
                async login(e) {
                    var t, r, o, i, n;
                    this.clearPendingSign();
                    const a = await this.getAuthenticationProvider(e), s = this.traceService.startTrace(d.SPAN_LOGIN);
                    this.logger.info(`[${s.traceId}] Start login...`);
                    try {
                        this.pendingSignContext = {
                            type: null == e ? void 0 : e.type,
                            abortController: null !== (t = null == e ? void 0 : e.abortController) && void 0 !== t ? t : new AbortController,
                            traceSpan: s
                        };
                        const c = await a.createSession(this.pendingSignContext);
                        return c ? (c.auth.lastRefreshTime = Date.now(), await this.storeSession(c, s), s.markAsSuccessful(), this.eventService.report(d.Events.UserAuthAction, {
                            userId: (null === (r = c.account) || void 0 === r ? void 0 : r.uid) || "",
                            username: (null === (o = c.account) || void 0 === o ? void 0 : o.nickname) || "",
                            userNickname: (null === (i = c.account) || void 0 === i ? void 0 : i.nickname) || "",
                            enterpriseId: (null === (n = c.account) || void 0 === n ? void 0 : n.enterpriseId) || "",
                            action: d.UserAuthActionType.Login,
                            actionAt: Date.now()
                        }), this.currentSessionSubject.next(c), this.notifier.info("Successfully signed in."), !0) : (s.markAsFailed(), !1);
                    } catch (t) {
                        return s.markAsFailed(t), this.logger.error(`sign in error: ${t}`), t instanceof v.CanceledError || this.notifier.error("Login failed: {0}", [
                            String(t)
                        ]), (null == e ? void 0 : e.errorHandler) && e.errorHandler(t), !1;
                    }
                }
                async logout() {
                    var e, t, r, o;
                    const i = await this.getAuthenticationStorage(), n = this.currentSessionSubject.getValue();
                    n && (await this.getAuthenticationProvider()).removeSession(n), null == i || i.clean(), this.eventService.report(d.Events.UserAuthAction, {
                        userId: (null === (e = null == n ? void 0 : n.account) || void 0 === e ? void 0 : e.uid) || "",
                        username: (null === (t = null == n ? void 0 : n.account) || void 0 === t ? void 0 : t.nickname) || "",
                        userNickname: (null === (r = null == n ? void 0 : n.account) || void 0 === r ? void 0 : r.nickname) || "",
                        enterpriseId: (null === (o = null == n ? void 0 : n.account) || void 0 === o ? void 0 : o.enterpriseId) || "",
                        action: d.UserAuthActionType.Logout,
                        actionAt: Date.now()
                    });
                }
                async refreshSession() {
                    await this.scheduleRefreshSession(!0);
                }
                async switchAccount(e) {
                    const t = this.currentSessionSubject.getValue();
                    if (!t) return;
                    this.clearPendingSign();
                    const r = this.traceService.startTrace(d.SPAN_SWITCH_ACCOUNT);
                    this.logger.info(`[${r.traceId}] Start switch account...`);
                    const o = {
                        abortController: new AbortController,
                        traceSpan: r
                    };
                    this.pendingSignContext = o;
                    const i = await this.getAuthenticationProvider(), n = await i.switchAccount(e, t, o);
                    n ? (await this.storeSession(n, r), r.markAsSuccessful()) : r.markAsFailed();
                }
                async waitAuthSession() {
                    return new Promise((e)=>{
                        const t = this.currentSessionSubject.subscribe((r)=>{
                            r && (e(r), setTimeout(()=>{
                                t.unsubscribe();
                            }, 0));
                        });
                    });
                }
                buildAuthHeaders(e, t, r) {
                    const o = this.currentSessionSubject.getValue();
                    if (!o) return {};
                    const { account: i, auth: n } = o, s = {};
                    return (null == i ? void 0 : i.uid) && (s[v.HTTP_HEADER_USER_ID] = i.uid), e && (null == n ? void 0 : n.accessToken) && (s[a.HttpHeaders.AUTHORIZATION] = `Bearer ${n.accessToken}`), (null == i ? void 0 : i.enterpriseId) && (s[v.HTTP_HEADER_ENTERPRISE_ID] = i.enterpriseId, s[v.HTTP_HEADER_TENANT_ID] = i.enterpriseId), (null == n ? void 0 : n.domain) && (s[v.HTTP_HEADER_DOMAIN] = n.domain), t && (null == i ? void 0 : i.departmentFullName) && (s[v.HTTP_HEADER_DEPARTMENT_INFO] = i.departmentFullName), r && (null == n ? void 0 : n.refreshToken) && (s["X-Refresh-Token"] = n.refreshToken), s;
                }
                clearPendingSign() {
                    this.pendingSignContext && (this.pendingSignContext.abortController.abort(), this.pendingSignContext = void 0);
                }
                async storeSession(e, t) {
                    const r = t.startSpan(d.SPAN_STORAGE_SESSION);
                    try {
                        const t = await this.getAuthenticationStorage();
                        await (null == t ? void 0 : t.store(e)), r.markAsSuccessful();
                    } catch (e) {
                        throw r.markAsFailed(e), e;
                    }
                }
                async scheduleRefreshSession(e, t = 5) {
                    t--;
                    const r = this.currentSessionSubject.getValue();
                    if (!r) return;
                    if (this.refreshTokenTimer && (this.refreshTokenTimer.cancel(), this.refreshTokenTimer = void 0), !e) {
                        let e = 864e5;
                        (r.auth.expiresAt || 0) - 864e5 < Date.now() && (e = 3e5);
                        let t = e;
                        const o = r.auth.lastRefreshTime || 0;
                        t = o + e < Date.now() ? 0 : o + e - Date.now();
                        const i = (0, n.timeout)(t);
                        this.refreshTokenTimer = i;
                        try {
                            await i;
                        } catch (e) {
                            if (e instanceof n.CancellationError) return;
                            return void this.logger.warn(`Token refresh timer error: ${e}`);
                        }
                    }
                    const o = this.traceService.startTrace(d.SPAN_REFRESH_SESSION);
                    this.logger.info(`[${o.traceId}] Start refresh session...`);
                    try {
                        const i = await this.getAuthenticationProvider();
                        this.clearPendingSign(), this.pendingSignContext = {
                            abortController: new AbortController,
                            traceSpan: o
                        };
                        const a = await i.refreshSession(r, this.pendingSignContext);
                        a ? (a.auth.lastRefreshTime = Date.now(), await this.storeSession(a, o), o.markAsSuccessful()) : (o.markAsFailed(), this.logger.warn("refresh session error"), t > 0 && (await (0, n.wait)(5e3), this.scheduleRefreshSession(e, t)));
                    } catch (r) {
                        o.markAsFailed(r), this.logger.warn("refresh session error:", r), !(r instanceof v.UnauthorizedError) && t > 0 && (await (0, n.wait)(5e3), this.scheduleRefreshSession(e, t));
                    }
                }
                async setAuthenticationProvider(e) {
                    let t;
                    for (const r of this.authenticationProvider.get())if ((await r.getAuthenticationType()).includes(e)) {
                        t = r;
                        break;
                    }
                    if (!t) {
                        const e = new s.NotFoundError("No available Authentication Provider found");
                        throw this.logger.error(e), e;
                    }
                    this.customAuthenticationProvider = t;
                }
                async clearAuthenticationProvider() {
                    this.customAuthenticationProvider = void 0;
                }
                async getAuthenticationProvider(e) {
                    if (this.customAuthenticationProvider) return this.customAuthenticationProvider;
                    let t;
                    for (const r of this.authenticationProvider.get())if (await r.support(e)) {
                        t = r;
                        break;
                    }
                    if (!t) {
                        const e = new s.NotFoundError("No available Authentication Provider found");
                        throw this.logger.error(e), e;
                    }
                    return t;
                }
                async getAuthenticationStorage() {
                    const e = (await n.Prioritizeable.prioritizeAll(this.authenticationStorages, async (e)=>{
                        try {
                            return await e.priority();
                        } catch (e) {
                            return 0;
                        }
                    })).filter((e)=>e.priority > 0).map((e)=>e.value)[0];
                    if (!e) {
                        const e = new s.NotFoundError("No available Authentication Storage found");
                        throw this.logger.error(e), e;
                    }
                    return e;
                }
                dispose() {
                    this.refreshTokenTimer && (this.refreshTokenTimer.cancel(), this.refreshTokenTimer = void 0), this.subscriptionManager.dispose();
                    try {
                        this.currentSessionSubject.complete();
                    } catch (e) {
                        this.logger.warn("Error completing currentSessionSubject:", e);
                    }
                    this.logger.info("AuthenticationManager disposed successfully");
                }
                constructor(){
                    this.authenticationStorages = [], this.subscriptionManager = new c.SubscriptionManager, this.initializedDeferred = new n.Deferred, this.initialized = this.initializedDeferred.promise, this.currentSessionSubject = new h.BehaviorSubject(void 0);
                }
            };
            t.AuthenticationManagerImpl = f, o([
                (0, n.Autowired)(u.ProductManager),
                i("design:type", Object)
            ], f.prototype, "productManager", void 0), o([
                (0, n.Autowired)(v.ProductEnvService),
                i("design:type", Object)
            ], f.prototype, "productEnvService", void 0), o([
                (0, n.AutowiredProvider)(v.AuthenticationProvider),
                i("design:type", Object)
            ], f.prototype, "authenticationProvider", void 0), o([
                (0, n.Autowired)(v.AuthenticationStorage),
                i("design:type", Array)
            ], f.prototype, "authenticationStorages", void 0), o([
                (0, n.Autowired)(d.EventService),
                i("design:type", Object)
            ], f.prototype, "eventService", void 0), o([
                (0, n.Autowired)(d.TraceService),
                i("design:type", Object)
            ], f.prototype, "traceService", void 0), o([
                (0, n.Autowired)(d.Logger),
                i("design:type", Object)
            ], f.prototype, "logger", void 0), o([
                (0, n.Autowired)(a.RestOperations),
                i("design:type", Function)
            ], f.prototype, "restOperations", void 0), o([
                (0, n.Autowired)(s.FilePathService),
                (0, n.Optional)(),
                i("design:type", Object)
            ], f.prototype, "filePathService", void 0), o([
                (0, n.Autowired)(l.Notifier),
                i("design:type", Object)
            ], f.prototype, "notifier", void 0), o([
                (0, n.PostConstruct)(),
                i("design:type", Function),
                i("design:paramtypes", []),
                i("design:returntype", void 0)
            ], f.prototype, "init", null), t.AuthenticationManagerImpl = f = o([
                (0, n.Component)(v.AuthenticationManager)
            ], f);
        },
        62386: function(e, t, r) {
            "use strict";
            var o = r(78), i = r(54452).hp, n = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, a = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ExternalLinkAuthenticationProvider = void 0;
            const s = r(15985), c = r(56464), u = r(26020), l = r(2877), d = r(47392), h = r(40996), p = r(70160), v = 3e5;
            var f;
            !function(e) {
                e[e.RetryFetchToken = 11217] = "RetryFetchToken", e[e.RetryFetchAccount = 12151] = "RetryFetchAccount";
            }(f || (f = {}));
            let g = class ExternalLinkAuthenticationProvider {
                init() {
                    this.logger.setContext("ExternalLinkAuthenticationProvider"), this.productManager.configuration.subscribe((e)=>{
                        this.configuration = e || {};
                    });
                }
                async checkNetworkConnectivity() {
                    var e, t, r;
                    try {
                        const o = null !== (r = null === (t = null === (e = this.configuration.authentication) || void 0 === e ? void 0 : e.attributes) || void 0 === t ? void 0 : t.platform) && void 0 !== r ? r : this.configuration.platform;
                        return await this.restOperations.post(`/v2${this.prefixPath}/auth/state?platform=${o}`, null, {
                            timeout: 5e3
                        }), [
                            null,
                            !0
                        ];
                    } catch (e) {
                        let t = "Unknown error";
                        e instanceof Error ? t = e.message : "string" == typeof e ? t = e : "object" == typeof e && null !== e && "toString" in e && (t = e.toString());
                        const r = e;
                        if (r && r.response && r.response.data) {
                            const e = r.response.data;
                            if (e && "object" == typeof e && "code" in e && e.code) return o.error(`Error with code ${e.code}: ${r.message}`), [
                                `Error: ${r.message}`,
                                null
                            ];
                            this.logger.error(`Error details: ${JSON.stringify(e)}`);
                        }
                        const i = t.toLowerCase();
                        return i.includes("proxy") ? (this.logger.error("Proxy connection error detected"), [
                            `Network connectivity test failed: ${t}`,
                            null
                        ]) : i.includes("socket") || i.includes("connect") || i.includes("network") || i.includes("timeout") ? (this.logger.error(" Network connection error detected"), [
                            "Unable to connect to server. Please check your network settings or confirm your network location.\n\n无法连接服务器，请检查您的网络设置，或当前区域暂不支持此服务，请确认您的网络位置",
                            null
                        ]) : (this.logger.error(`Other error detected, original error: ${t}`), [
                            "Unable to connect to server. Please check your network settings or confirm your network location.\n\n无法连接服务器，请检查您的网络设置，或当前区域暂不支持此服务，请确认您的网络位置",
                            null
                        ]);
                    }
                }
                async support(e) {
                    var t, r;
                    await this.productManager.waitConfiguration();
                    const o = (null === (t = this.configuration.authentication) || void 0 === t ? void 0 : t.type) === u.AuthenticationType.EXTERNAL_LINK || (null === (r = this.configuration.authentication) || void 0 === r ? void 0 : r.type) === u.AuthenticationType.EXTERNAL_LINK_V2;
                    return o && (null == e ? void 0 : e.type) && await this.productEnvService.switch(null == e ? void 0 : e.type), o;
                }
                async getAuthenticationType() {
                    return [
                        u.AuthenticationType.EXTERNAL_LINK,
                        u.AuthenticationType.EXTERNAL_LINK_V2
                    ];
                }
                async createSession(e) {
                    (null == e ? void 0 : e.type) && await this.productEnvService.switch(null == e ? void 0 : e.type);
                    const t = Date.now();
                    let r;
                    const o = new Promise((e, t)=>{
                        r = setTimeout(()=>t(new p.TimeoutError), v);
                    }), i = (async ()=>{
                        try {
                            const r = await this.fetchAuthState(e), o = e.traceSpan.startSpan(d.SPAN_OPEN_EXTERNAL_LINK);
                            await this.openAuthUrl(r), o.markAsSuccessful();
                            const i = await this.loopGetToken(r, t, e), n = await this.loopGetAccount(r, i, t, e);
                            return {
                                account: n,
                                accounts: await this.getAccounts(i, e),
                                auth: i
                            };
                        } catch (e) {
                            throw this.logger.error(`createSession main logic error: ${e}`), e;
                        }
                    })();
                    try {
                        const e = await Promise.race([
                            i,
                            o
                        ]);
                        return r && clearTimeout(r), e;
                    } catch (e) {
                        throw r && clearTimeout(r), this.logger.error(`createSession error: ${e}`), e;
                    }
                }
                async refreshSession(e, t) {
                    if (!e.auth.refreshToken) return e;
                    try {
                        const { data: { data: r } } = await this.restOperations.post(`/v2${this.prefixPath}/auth/token/refresh`, {}, {
                            headers: {
                                ...this.enterpriseHeaders(e.auth),
                                "X-Refresh-Token": e.auth.refreshToken,
                                ...t.traceSpan.requestHeaders
                            }
                        }) || {
                            data: {
                                data: void 0
                            }
                        };
                        if (r) {
                            r.lastRefreshTime = Date.now(), this.calculateExpiresAt(r);
                            const e = await this.getAccounts(r, t), o = e.find((e)=>e.lastLogin) || e[0];
                            if (!o) {
                                const e = new p.SignError("Failed to refresh token: account is null");
                                throw this.logger.error(e), e;
                            }
                            return {
                                account: o,
                                auth: r,
                                accounts: e
                            };
                        }
                    } catch (e) {
                        if (this.logger.error(`refresh token error: ${e}`), this.isAuthenticationInvalidError(e)) throw new p.UnauthorizedError(e);
                    }
                    throw new p.SignError("Failed to refresh token");
                }
                async removeSession() {}
                async switchAccount(e, t, r) {
                    var o, i, n, a;
                    const { type: s, enterpriseId: c } = e, u = "personal" === s ? `/v2${this.prefixPath}/login/enterprise` : `/v2${this.prefixPath}/login/enterprise/${c}`;
                    let l = 1, d = t;
                    for(; l > 0;){
                        l--;
                        try {
                            const { data: { data: t } } = await this.restOperations.post(u, {}, {
                                signal: null === (o = null == r ? void 0 : r.abortController) || void 0 === o ? void 0 : o.signal,
                                headers: {
                                    ...this.enterpriseHeaders(d.auth),
                                    "X-Refresh-Token": d.auth.refreshToken,
                                    Authorization: `Bearer ${d.auth.accessToken}`,
                                    ...r.traceSpan.requestHeaders
                                }
                            }) || {
                                data: {
                                    data: void 0
                                }
                            };
                            if (t) {
                                t.domain = null !== (i = null == t ? void 0 : t.domain) && void 0 !== i ? i : null === (n = d.auth) || void 0 === n ? void 0 : n.domain, t.lastRefreshTime = Date.now(), this.calculateExpiresAt(t);
                                return {
                                    account: e,
                                    accounts: await this.getAccounts(t, r),
                                    auth: t
                                };
                            }
                        } catch (e) {
                            if (this.logger.error(`switch account error: ${e}`), 403 === (null === (a = null == e ? void 0 : e.response) || void 0 === a ? void 0 : a.code)) {
                                d = await this.refreshSession(d, r);
                                continue;
                            }
                            if (await this.isIpLimitError(e)) throw new p.SignIpLimitError;
                            break;
                        }
                    }
                    throw new p.SignError("Failed to switch account");
                }
                async fetchAuthState(e) {
                    var t, r, o;
                    const i = e.traceSpan.startSpan(d.SPAN_GET_AUTH_STATE), n = null !== (o = null === (r = null === (t = this.configuration.authentication) || void 0 === t ? void 0 : t.attributes) || void 0 === r ? void 0 : r.platform) && void 0 !== o ? o : this.configuration.platform;
                    try {
                        const { data: { data: t } } = await this.restOperations.post(`/v2${this.prefixPath}/auth/state?platform=${n}`, {}, {
                            headers: {
                                ...this.enterpriseHeaders(),
                                [p.HTTP_HEADER_NO_AUTHORIZATION]: "true",
                                [p.HTTP_HEADER_NO_USER_ID]: "true",
                                [p.HTTP_HEADER_NO_ENTERPRISE_ID]: "true",
                                [p.HTTP_HEADER_NO_DEPARTMENT_INFO]: "true"
                            },
                            ...e.traceSpan.requestHeaders
                        }) || {
                            data: {
                                data: void 0
                            }
                        };
                        if (t) return i.markAsSuccessful(), t;
                        const r = new p.SignError("Failed to fetch auth state");
                        throw i.markAsFailed(r), r;
                    } catch (e) {
                        throw this.logger.error(`fetch auth state error: ${e}`), i.markAsFailed(e), e;
                    }
                }
                async openAuthUrl(e) {
                    const t = await this.externalUriOpener.open(e.authUrl);
                    if (this.logger.info(`Opening auth URL: ${e.authUrl}`), !t) throw new p.OpenExternalLinkError;
                }
                async loopGetToken(e, t, r) {
                    const o = r.traceSpan.startSpan(d.SPAN_GET_AUTH_TOKEN);
                    for(; Date.now() - t < v;){
                        if (await (0, s.wait)(1e3), r.abortController.signal.aborted) throw o.markAsFailed("Canceled"), new p.CanceledError;
                        try {
                            const { data: { data: t } } = await this.restOperations.get(`/v2${this.prefixPath}/auth/token?state=${e.state}`, {
                                signal: r.abortController.signal,
                                headers: {
                                    ...r.traceSpan.requestHeaders,
                                    [p.HTTP_HEADER_NO_AUTHORIZATION]: "true",
                                    [p.HTTP_HEADER_NO_USER_ID]: "true",
                                    [p.HTTP_HEADER_NO_ENTERPRISE_ID]: "true",
                                    [p.HTTP_HEADER_NO_DEPARTMENT_INFO]: "true"
                                }
                            }) || {
                                data: {
                                    data: void 0
                                }
                            };
                            if (t) return t.lastRefreshTime = Date.now(), this.calculateExpiresAt(t), o.markAsSuccessful(), t;
                        } catch (e) {
                            if ((null == e ? void 0 : e.code) === f.RetryFetchToken) continue;
                            throw this.logger.error(`fetch auth token error: ${e}`), o.markAsFailed(e), e;
                        }
                    }
                    throw o.markAsFailed("Timeout"), new p.TimeoutError;
                }
                async loopGetAccount(e, t, r, o) {
                    const i = o.traceSpan.startSpan(d.SPAN_GET_ACCOUNT);
                    for(; Date.now() - r < v;){
                        if (await (0, s.wait)(1e3), o.abortController.signal.aborted) throw i.markAsFailed("Canceled"), new p.CanceledError;
                        try {
                            const { data: { data: r } } = await this.restOperations.get(`/v2${this.prefixPath}/login/account?state=${e.state}`, {
                                signal: o.abortController.signal,
                                headers: {
                                    ...this.enterpriseHeaders(t),
                                    Authorization: `Bearer ${t.accessToken}`,
                                    ...o.traceSpan.requestHeaders,
                                    [p.HTTP_HEADER_NO_USER_ID]: "true",
                                    [p.HTTP_HEADER_NO_ENTERPRISE_ID]: "true",
                                    [p.HTTP_HEADER_NO_DEPARTMENT_INFO]: "true"
                                }
                            }) || {
                                data: {
                                    data: void 0
                                }
                            };
                            if (r) return i.markAsSuccessful(), r;
                        } catch (e) {
                            if ((null == e ? void 0 : e.code) === f.RetryFetchAccount) continue;
                            throw this.logger.error(`fetch auth account error: ${e}`), i.markAsFailed(e), e;
                        }
                    }
                    throw i.markAsFailed("Timeout"), new p.TimeoutError;
                }
                async getAccounts(e, t) {
                    var r;
                    const o = t.traceSpan.startSpan(d.SPAN_GET_ACCOUNT_LIST);
                    try {
                        const { data: { data: i } } = await this.restOperations.get(`/v2${this.prefixPath}/accounts`, {
                            signal: t.abortController.signal,
                            headers: {
                                ...this.enterpriseHeaders(e),
                                Authorization: `Bearer ${e.accessToken}`,
                                ...t.traceSpan.requestHeaders
                            }
                        }) || {
                            data: {
                                data: void 0
                            }
                        };
                        if (null === (r = i.accounts) || void 0 === r ? void 0 : r.length) return o.markAsSuccessful(), i.accounts.filter((e)=>e.pluginEnabled);
                    } catch (e) {
                        o.markAsFailed(e), this.logger.error(`fetch auth accounts error: ${e}`);
                    }
                    return o.markAsFailed("accounts is empty"), [];
                }
                enterpriseHeaders(e) {
                    var t;
                    let r = "";
                    try {
                        if (null == e ? void 0 : e.domain) r = e.domain;
                        else {
                            const e = (null === (t = this.configuration.authentication) || void 0 === t ? void 0 : t.endpoint) || this.configuration.endpoint || "";
                            r = h.URI.parse(e).authority;
                        }
                        return {
                            [p.HTTP_HEADER_DOMAIN]: r
                        };
                    } catch (e) {
                        return this.logger.warn(`endpoint domain format error: ${e}`), {};
                    }
                }
                calculateExpiresAt(e) {
                    !e.expiresAt && e.expiresIn && (e.expiresAt = new Date(Date.now() + 1e3 * e.expiresIn).getTime()), !e.refreshExpiresAt && e.refreshExpiresIn && (e.refreshExpiresAt = new Date(Date.now() + 1e3 * e.refreshExpiresIn).getTime());
                }
                async isIpLimitError(e) {
                    var t;
                    try {
                        let r = null === (t = null == e ? void 0 : e.response) || void 0 === t ? void 0 : t.data;
                        return 10081 === (null == r ? void 0 : r.code) || (r = JSON.parse(await this.streamToString(r)), 10081 === (null == r ? void 0 : r.code));
                    } catch (e) {
                        return !1;
                    }
                }
                async streamToString(e) {
                    const t = [];
                    return new Promise((r, o)=>{
                        e.on("data", (e)=>t.push(i.from(e))), e.on("error", (e)=>o(e)), e.on("end", ()=>r(i.concat(t).toString("utf8")));
                    });
                }
                isAuthenticationInvalidError(e) {
                    var t;
                    if (e && e.isAxiosError) {
                        const r = null === (t = e.response) || void 0 === t ? void 0 : t.status;
                        return 401 === r || 403 === r;
                    }
                    return !1;
                }
                get endpoint() {
                    var e;
                    return (null === (e = this.configuration.authentication) || void 0 === e ? void 0 : e.endpoint) || this.configuration.endpoint || "";
                }
                get prefixPath() {
                    var e, t;
                    return (null === (t = null === (e = this.configuration.authentication) || void 0 === e ? void 0 : e.attributes) || void 0 === t ? void 0 : t.prefixPath) || "";
                }
            };
            t.ExternalLinkAuthenticationProvider = g, n([
                (0, s.Autowired)(u.ProductManager),
                a("design:type", Object)
            ], g.prototype, "productManager", void 0), n([
                (0, s.Autowired)(p.ProductEnvService),
                a("design:type", Object)
            ], g.prototype, "productEnvService", void 0), n([
                (0, s.Autowired)(l.ExternalUriOpener),
                a("design:type", Object)
            ], g.prototype, "externalUriOpener", void 0), n([
                (0, s.Autowired)(c.RestOperations),
                a("design:type", Function)
            ], g.prototype, "restOperations", void 0), n([
                (0, s.Autowired)(d.Logger),
                a("design:type", Object)
            ], g.prototype, "logger", void 0), n([
                (0, s.PostConstruct)(),
                a("design:type", Function),
                a("design:paramtypes", []),
                a("design:returntype", void 0)
            ], g.prototype, "init", null), t.ExternalLinkAuthenticationProvider = g = n([
                (0, s.Component)(p.AuthenticationProvider)
            ], g);
        },
        63141: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        63868: function(e, t, r) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
                void 0 === o && (o = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, o, i);
            } : function(e, t, r, o) {
                void 0 === o && (o = r), e[o] = t[r];
            }), i = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), i(r(39045), t), i(r(56706), t), i(r(27521), t), i(r(2948), t), i(r(75058), t);
        },
        64031: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var console = __webpack_require__(78), __decorate = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, __metadata = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.WxAuthenticationProvider = void 0;
            const core_1 = __webpack_require__(15985), http_1 = __webpack_require__(56464), product_1 = __webpack_require__(26020), telemetry_1 = __webpack_require__(47392), vscode_uri_1 = __webpack_require__(40996), authentication_protocol_1 = __webpack_require__(70160);
            let WxAuthenticationProvider = class WxAuthenticationProvider {
                init() {
                    this.logger.setContext("WxAuthenticationProvider"), this.productManager.configuration.subscribe((e)=>{
                        this.configuration = e || {};
                    });
                }
                async support() {
                    var e;
                    return await this.productManager.waitConfiguration(), (null === (e = this.configuration.authentication) || void 0 === e ? void 0 : e.type) === product_1.AuthenticationType.WECHAT;
                }
                async getAuthenticationType() {
                    return [
                        product_1.AuthenticationType.WECHAT
                    ];
                }
                async createSession(ctx) {
                    try {
                        const req = eval("require"), wechatide = req("wechatide"), data = await wechatide.workspace.sendAuthRequest(), { data: { tmpcode: code }, errCode, errMsg } = data;
                        if (!code) {
                            const e = `[CODE: ${errCode}]: No tmpcode found -- ERROR MESSAGE: ${errMsg}`;
                            throw new Error(e);
                        }
                        const authToken = await this.fetchTokenByTmpCode(code, ctx), accounts = await this.fetchAccounts(authToken, ctx);
                        return {
                            account: accounts.length ? accounts[0] : {},
                            accounts,
                            auth: authToken
                        };
                    } catch (e) {
                        throw this.logger.error(`WxAuthenticationProvider createSession error: ${e}`), e;
                    }
                }
                async refreshSession(e, t) {
                    var r;
                    try {
                        const o = await this.restOperations.post("/v2/auth/token/refresh", {}, {
                            headers: {
                                ...this.enterpriseHeaders(),
                                "X-Refresh-Token": e.auth.refreshToken,
                                ...t.traceSpan.requestHeaders
                            }
                        }), i = null === (r = null == o ? void 0 : o.data) || void 0 === r ? void 0 : r.data;
                        if (i) {
                            i.lastRefreshTime = Date.now(), this.calculateExpiresAt(i);
                            const e = await this.fetchAccounts(i, t), r = e.find((e)=>e.lastLogin) || e[0];
                            if (!r) {
                                const e = new authentication_protocol_1.SignError("Failed to refresh token: account is null");
                                throw this.logger.error(e), e;
                            }
                            return {
                                account: r,
                                auth: i,
                                accounts: e
                            };
                        }
                    } catch (e) {
                        if (this.logger.error(`refresh token error: ${e}`), this.isAuthenticationInvalidError(e)) throw new authentication_protocol_1.UnauthorizedError(e);
                    }
                    throw new authentication_protocol_1.SignError("Failed to refresh token");
                }
                async removeSession() {}
                async switchAccount(e, t, r) {
                    return t;
                }
                async fetchTokenByTmpCode(e, t) {
                    var r;
                    console.error(`code: ${e}`);
                    try {
                        const o = await this.restOperations.post(`/v2/auth/token/wxide?tmpCode=${e}`, {}, {
                            headers: {
                                ...this.enterpriseHeaders(),
                                ...t.traceSpan.requestHeaders
                            },
                            signal: t.abortController.signal
                        });
                        return null === (r = null == o ? void 0 : o.data) || void 0 === r ? void 0 : r.data;
                    } catch (e) {
                        throw this.logger.error(`WxAuthenticationProvider fetchTokenByTmpCode error: ${e}`), e;
                    }
                }
                async fetchAccounts(e, t) {
                    var r, o;
                    const i = t.traceSpan.startSpan(telemetry_1.SPAN_GET_ACCOUNT_LIST);
                    try {
                        const n = await this.restOperations.get("/v2/accounts", {
                            signal: t.abortController.signal,
                            headers: {
                                ...this.enterpriseHeaders(),
                                ...(null == e ? void 0 : e.domain) ? {
                                    [authentication_protocol_1.HTTP_HEADER_DOMAIN]: e.domain
                                } : {},
                                Authorization: `Bearer ${e.accessToken}`,
                                ...t.traceSpan.requestHeaders
                            }
                        }), a = null === (o = null === (r = null == n ? void 0 : n.data) || void 0 === r ? void 0 : r.data) || void 0 === o ? void 0 : o.accounts;
                        if (null == a ? void 0 : a.length) return i.markAsSuccessful(), a.filter((e)=>e.pluginEnabled);
                    } catch (e) {
                        this.logger.error(`fetch auth accounts error: ${e}`), i.markAsFailed(e);
                    }
                    return i.markAsFailed("accounts is empty"), [];
                }
                get prefixPath() {
                    var e, t;
                    return (null === (t = null === (e = this.configuration.authentication) || void 0 === e ? void 0 : e.attributes) || void 0 === t ? void 0 : t.prefixPath) || "";
                }
                get endpoint() {
                    var e;
                    return (null === (e = this.configuration.authentication) || void 0 === e ? void 0 : e.endpoint) || this.configuration.endpoint || "";
                }
                enterpriseHeaders() {
                    var e;
                    let t = "";
                    try {
                        const r = (null === (e = this.configuration.authentication) || void 0 === e ? void 0 : e.endpoint) || this.configuration.endpoint || "";
                        return t = vscode_uri_1.URI.parse(r).authority, {
                            [authentication_protocol_1.HTTP_HEADER_DOMAIN]: t
                        };
                    } catch (e) {
                        return this.logger.warn(`endpoint domain format error: ${e}`), {};
                    }
                }
                calculateExpiresAt(e) {
                    !e.expiresAt && e.expiresIn && (e.expiresAt = new Date(Date.now() + 1e3 * e.expiresIn).getTime()), !e.refreshExpiresAt && e.refreshExpiresIn && (e.refreshExpiresAt = new Date(Date.now() + 1e3 * e.refreshExpiresIn).getTime());
                }
                isAuthenticationInvalidError(e) {
                    var t;
                    if (e && e.isAxiosError) {
                        const r = null === (t = e.response) || void 0 === t ? void 0 : t.status;
                        return 401 === r || 403 === r;
                    }
                    return !1;
                }
            };
            exports.WxAuthenticationProvider = WxAuthenticationProvider, __decorate([
                (0, core_1.Autowired)(http_1.RestOperations),
                __metadata("design:type", Function)
            ], WxAuthenticationProvider.prototype, "restOperations", void 0), __decorate([
                (0, core_1.Autowired)(product_1.ProductManager),
                __metadata("design:type", Object)
            ], WxAuthenticationProvider.prototype, "productManager", void 0), __decorate([
                (0, core_1.Autowired)(core_1.Logger),
                __metadata("design:type", Object)
            ], WxAuthenticationProvider.prototype, "logger", void 0), __decorate([
                (0, core_1.PostConstruct)(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", void 0)
            ], WxAuthenticationProvider.prototype, "init", null), exports.WxAuthenticationProvider = WxAuthenticationProvider = __decorate([
                (0, core_1.Component)(authentication_protocol_1.AuthenticationProvider)
            ], WxAuthenticationProvider);
        },
        70160: (e, t, r)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UnauthorizedError = t.SignIpLimitError = t.SignError = t.OpenExternalLinkError = t.CanceledError = t.TimeoutError = t.X_USER_ID = t.ENV_KEY_CODEBUDDY_COPILOT_INTERNET_ENVIRONMENT = t.ProductEnviroment = t.AuthenticationStoragePriority = t.HTTP_HEADER_NO_AUTHORIZATION = t.HTTP_HEADER_NO_DEPARTMENT_INFO = t.HTTP_HEADER_NO_ENTERPRISE_ID = t.HTTP_HEADER_NO_USER_ID = t.HTTP_HEADER_DOMAIN = t.HTTP_HEADER_TENANT_ID = t.HTTP_HEADER_DEPARTMENT_INFO = t.HTTP_HEADER_ENTERPRISE_ID = t.HTTP_HEADER_USER_ID = t.ProductEnvService = t.AuthenticationManager = t.AuthenticationStorage = t.AuthenticationProvider = t.AUTHENTICATION_PROVIDER_ID = void 0;
            const o = r(15985);
            var i, n;
            t.AUTHENTICATION_PROVIDER_ID = "codingcopilot", t.AuthenticationProvider = Symbol("AuthenticationProvider"), t.AuthenticationStorage = Symbol("AuthenticationStorage"), t.AuthenticationManager = Symbol("AuthenticationManager"), t.ProductEnvService = Symbol("ProductEnvService"), t.HTTP_HEADER_USER_ID = "X-User-Id", t.HTTP_HEADER_ENTERPRISE_ID = "X-Enterprise-Id", t.HTTP_HEADER_DEPARTMENT_INFO = "X-Department-Info", t.HTTP_HEADER_TENANT_ID = "X-Tenant-Id", t.HTTP_HEADER_DOMAIN = "X-Domain", t.HTTP_HEADER_NO_USER_ID = "X-No-User-Id", t.HTTP_HEADER_NO_ENTERPRISE_ID = "X-No-Enterprise-Id", t.HTTP_HEADER_NO_DEPARTMENT_INFO = "X-No-Department-Info", t.HTTP_HEADER_NO_AUTHORIZATION = "X-No-Authorization", function(e) {
                e[e.Disabled = 0] = "Disabled", e[e.Low = 1] = "Low", e[e.Normal = 5] = "Normal", e[e.Heigh = 9] = "Heigh";
            }(i || (t.AuthenticationStoragePriority = i = {})), function(e) {
                e.External = "external", e.Internal = "internal", e.IOA = "iOA", e.Selfhosted = "selfhosted", e.Cloudhosted = "cloudhosted";
            }(n || (t.ProductEnviroment = n = {})), t.ENV_KEY_CODEBUDDY_COPILOT_INTERNET_ENVIRONMENT = "CODEBUDDY_COPILOT_INTERNET_ENVIRONMENT", t.X_USER_ID = "X-User-Id";
            let TimeoutError = class TimeoutError extends o.CustomError {
            };
            t.TimeoutError = TimeoutError;
            let CanceledError = class CanceledError extends o.CustomError {
            };
            t.CanceledError = CanceledError;
            let OpenExternalLinkError = class OpenExternalLinkError extends o.CustomError {
            };
            t.OpenExternalLinkError = OpenExternalLinkError;
            let SignError = class SignError extends o.CustomError {
            };
            t.SignError = SignError;
            let SignIpLimitError = class SignIpLimitError extends o.CustomError {
            };
            t.SignIpLimitError = SignIpLimitError;
            let UnauthorizedError = class UnauthorizedError extends o.CustomError {
            };
            t.UnauthorizedError = UnauthorizedError;
        },
        71404: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        74427: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        74614: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        75058: function(e, t, r) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
                void 0 === o && (o = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, o, i);
            } : function(e, t, r, o) {
                void 0 === o && (o = r), e[o] = t[r];
            }), i = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), i(r(22384), t), i(r(74614), t), i(r(30634), t), i(r(60022), t), i(r(74427), t), i(r(80536), t), i(r(50251), t), i(r(59584), t), i(r(71404), t), i(r(11060), t), i(r(76482), t), i(r(43026), t), i(r(55589), t), i(r(94164), t), i(r(31111), t), i(r(63141), t), i(r(24589), t);
        },
        76482: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        80536: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        91153: ()=>{},
        92110: ()=>{},
        94164: (e, t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }
    }
]); //# sourceMappingURL=6844.3d96114cab49b5eac49b.js.map
