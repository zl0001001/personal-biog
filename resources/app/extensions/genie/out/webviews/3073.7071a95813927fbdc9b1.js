"use strict";
(self.webpackChunk_genie_chat_webview_app = self.webpackChunk_genie_chat_webview_app || []).push([
    [
        3073
    ],
    {
        9670: function(e, t, o) {
            var n = this && this.__decorate || function(e, t, o, n) {
                var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n);
                else for(var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
                return a > 3 && r && Object.defineProperty(t, o, r), r;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TencentKnowledgeBaseProviderFactory = void 0;
            const i = o(15985), a = o(72396), r = o(59045);
            let s = class TencentKnowledgeBaseProviderFactory {
                async support(e) {
                    return e.provider === a.KnowledgeBaseProviderName.Tencent;
                }
                async create(e) {
                    const t = i.ContainerUtil.get(r.TencentKnowledgeBaseProvider);
                    return await t.initialize(e), t;
                }
            };
            t.TencentKnowledgeBaseProviderFactory = s, t.TencentKnowledgeBaseProviderFactory = s = n([
                (0, i.Component)(a.KnowledgeBaseProviderFactory)
            ], s);
        },
        13073: function(e, t, o) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, o, n) {
                void 0 === n && (n = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                    enumerable: !0,
                    get: function() {
                        return t[o];
                    }
                }), Object.defineProperty(e, n, i);
            } : function(e, t, o, n) {
                void 0 === n && (n = o), e[n] = t[o];
            }), i = this && this.__exportStar || function(e, t) {
                for(var o in e)"default" === o || Object.prototype.hasOwnProperty.call(t, o) || n(t, e, o);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), i(o(72396), t), i(o(92253), t), i(o(9670), t), i(o(59045), t), i(o(74149), t);
        },
        59045: function(e, t, o) {
            var n = this && this.__decorate || function(e, t, o, n) {
                var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n);
                else for(var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
                return a > 3 && r && Object.defineProperty(t, o, r), r;
            }, i = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TencentKnowledgeBaseProvider = void 0;
            const a = o(15985), r = o(56464), s = o(25079), c = o(26020), l = o(15076), d = o(72396);
            let u = class TencentKnowledgeBaseProvider {
                init() {
                    this.logger.setContext("TencentKnowledgeBaseProvider");
                }
                async initialize(e) {
                    this.configuration = e, await this.list();
                }
                async list() {
                    var e, t, o;
                    if (!await this.authenticationManager.waitAuthSession()) return [];
                    const { baseURL: n, path: i } = await this.getBaseSearchInfo(null !== (o = null === (t = null === (e = this.configuration) || void 0 === e ? void 0 : e.attributes) || void 0 === t ? void 0 : t.listPath) && void 0 !== o ? o : "/knowledge-bases"), a = await this.pureList(n, i);
                    return this.cache = a, a;
                }
                sync() {
                    var e, t;
                    null === (t = (e = this.pureList.cache).clear) || void 0 === t || t.call(e), this.list();
                }
                listSync() {
                    return this.cache;
                }
                async query(e) {
                    var t, o, n;
                    if (!await this.authenticationManager.waitAuthSession()) return [];
                    const { baseURL: i, path: a } = await this.getBaseSearchInfo(null !== (n = null === (o = null === (t = this.configuration) || void 0 === t ? void 0 : t.attributes) || void 0 === o ? void 0 : o.queryPath) && void 0 !== n ? n : "/knowledge-bases/{knowledgeBaseId}/query"), r = [], s = await this.pureList.cache.get(this.listCacheKey) || [];
                    if (e.knowledgeBaseIds) for (const t of e.knowledgeBaseIds){
                        const e = s.find((e)=>e.id === t);
                        e && (r.push(t), e.wiki_url && e.wiki_id && r.push(e.wiki_id));
                    }
                    if (0 === r.length) return [];
                    const c = [], l = {};
                    return await Promise.all(r.map(async (t)=>{
                        var o;
                        const n = a.replace("{knowledgeBaseId}", t);
                        try {
                            const { data: { data: a } } = await this.restOperations.post(n, {
                                query: e.text
                            }, {
                                baseURL: i,
                                signal: e.signal
                            });
                            null === (o = a.items) || void 0 === o || o.forEach((e)=>{
                                e.knowledgeBaseId = t;
                            }), c.push(...a.items || []), l[t] = a.items || [];
                        } catch (e) {
                            this.logger.error(`knowledge base query error: [${i},${n}] ${e}`);
                        }
                    })), c;
                }
                async getBaseSearchInfo(e) {
                    var t, o;
                    const [n, i] = await Promise.all([
                        this.authenticationManager.waitAuthSession(),
                        this.productManager.waitConfiguration()
                    ]), a = this.configuration;
                    let r = i.endpoint || "", s = "/v2" + e;
                    if (a.url && (r = a.url, s = ""), null === (t = n.account) || void 0 === t ? void 0 : t.enterpriseId) {
                        const t = null === (o = null == a ? void 0 : a.attributes) || void 0 === o ? void 0 : o.enterprisePath;
                        s = t || `/v2/enterprises/{enterpriseId}${e}`, s = s.replace("{enterpriseId}", n.account.enterpriseId);
                    }
                    return {
                        baseURL: r,
                        path: s
                    };
                }
                constructor(){
                    this.configuration = {}, this.listCacheKey = "", this.cache = [], this.pureList = (0, l.memoize)(async (e, t)=>{
                        var o, n, i;
                        let a = [];
                        try {
                            const { data: { data: n } } = await this.restOperations.get(t, {
                                baseURL: e
                            });
                            return this.logger.info(`fetch knowledgeBase from remote ,length : ${(null === (o = n.knowledge_bases) || void 0 === o ? void 0 : o.length) || 0}`), a = n.knowledge_bases || [], a;
                        } catch (o) {
                            return this.logger.error(`knowledge base list error: [${e},${t}] ${o}`), [];
                        } finally{
                            a.length ? setTimeout(()=>{
                                var e, t;
                                null === (t = (e = this.pureList.cache).clear) || void 0 === t || t.call(e);
                            }, d.MAX_CACHE_TTL) : null === (i = (n = this.pureList.cache).clear) || void 0 === i || i.call(n);
                        }
                    }, (...e)=>this.listCacheKey = e.join("-"));
                }
            };
            t.TencentKnowledgeBaseProvider = u, n([
                (0, a.Autowired)(c.ProductManager),
                i("design:type", Object)
            ], u.prototype, "productManager", void 0), n([
                (0, a.Autowired)(s.AuthenticationManager),
                i("design:type", Object)
            ], u.prototype, "authenticationManager", void 0), n([
                (0, a.Autowired)(r.RestOperations),
                i("design:type", Function)
            ], u.prototype, "restOperations", void 0), n([
                (0, a.Autowired)(a.Logger),
                i("design:type", Object)
            ], u.prototype, "logger", void 0), n([
                (0, a.PostConstruct)(),
                i("design:type", Function),
                i("design:paramtypes", []),
                i("design:returntype", void 0)
            ], u.prototype, "init", null), t.TencentKnowledgeBaseProvider = u = n([
                (0, a.Component)({
                    id: d.KnowledgeBaseProvider,
                    scope: a.Scope.Request
                })
            ], u);
        },
        72396: (e, t)=>{
            var o, n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.KnowledgeBaseType = t.KnowledgeBaseProviderName = t.INITIALIZE_DELAY = t.MAX_CACHE_TTL = t.KnowledgeBaseProviderFactory = t.KnowledgeBaseProvider = t.KnowledgeBaseManager = void 0, t.KnowledgeBaseManager = Symbol("KnowledgeBaseManager"), t.KnowledgeBaseProvider = Symbol("KnowledgeBaseProvider"), t.KnowledgeBaseProviderFactory = Symbol("KnowledgeBaseProviderFactory"), t.MAX_CACHE_TTL = 3e5, t.INITIALIZE_DELAY = 3e3, function(e) {
                e.Tencent = "Tencent";
            }(o || (t.KnowledgeBaseProviderName = o = {})), function(e) {
                e.Custom = "custom", e.Common = "common";
            }(n || (t.KnowledgeBaseType = n = {}));
        },
        74149: function(e, t, o) {
            var n = this && this.__decorate || function(e, t, o, n) {
                var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n);
                else for(var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
                return a > 3 && r && Object.defineProperty(t, o, r), r;
            }, i = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.KnowledgeBaseContextVariableResolver = void 0;
            const a = o(15985), r = o(63868), s = o(72396);
            let c = class KnowledgeBaseContextVariableResolver {
                async priority(e, t) {
                    return 5;
                }
                async resolve(e, t) {
                    var o, n;
                    const i = await this.knowledgeBaseManager.query({
                        text: (null === (o = e.resolveOptions) || void 0 === o ? void 0 : o.text) || "",
                        knowledgeBaseIds: (null === (n = null == e ? void 0 : e.resolveOptions) || void 0 === n ? void 0 : n.knowledgeBaseIds) || [],
                        signal: null == t ? void 0 : t.signal
                    }), a = {};
                    for (const e of i)a[e.knowledgeBaseId] || (a[e.knowledgeBaseId] = []), a[e.knowledgeBaseId].push(e);
                    const r = {
                        name: this.name,
                        value: []
                    };
                    for (const [e, t] of Object.entries(a))r.value.push({
                        knowledgeBaseId: e,
                        references: t
                    });
                    return r;
                }
                constructor(){
                    this.name = "knowledgeBase";
                }
            };
            t.KnowledgeBaseContextVariableResolver = c, n([
                (0, a.Autowired)(s.KnowledgeBaseManager),
                i("design:type", Object)
            ], c.prototype, "knowledgeBaseManager", void 0), t.KnowledgeBaseContextVariableResolver = c = n([
                (0, a.Component)(r.ContextVariableResolver)
            ], c);
        },
        92253: function(e, t, o) {
            var n = this && this.__decorate || function(e, t, o, n) {
                var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n);
                else for(var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
                return a > 3 && r && Object.defineProperty(t, o, r), r;
            }, i = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.KnowledgeBaseManagerImpl = void 0;
            const a = o(15985), r = o(39322), s = o(26020), c = o(97317), l = o(72396);
            let d = class KnowledgeBaseManagerImpl {
                initialize() {
                    this.doInitialize();
                }
                async doInitialize() {
                    const e = await this.productManager.waitConfiguration(!0);
                    await this.handleConfigurationChange((null == e ? void 0 : e.knowledgeBases) || []), this.productManager.configuration.subscribe((e)=>{
                        const t = (null == e ? void 0 : e.knowledgeBases) || [];
                        this.handleConfigurationChange(t);
                    }), this.scheduleSync();
                }
                async scheduleSync() {
                    await (0, a.timeout)(l.MAX_CACHE_TTL), this.sync(), this.scheduleSync();
                }
                sync() {
                    for (const e of this.activeKnowledgeBaseProviders)e.list();
                    this.onDidChangeSubject.next();
                }
                async list() {
                    const e = [];
                    for (const t of this.activeKnowledgeBaseProviders)e.push(...await t.list() || []);
                    return e;
                }
                listSync() {
                    const e = [];
                    for (const t of this.activeKnowledgeBaseProviders)e.push(...t.listSync() || []);
                    return e;
                }
                async query(e) {
                    const t = [];
                    for (const o of this.activeKnowledgeBaseProviders)t.push(...await o.query(e) || []);
                    return t.sort((e, t)=>t.score - e.score);
                }
                async handleConfigurationChange(e) {
                    r.ObjectUtils.isChanged(this.lastKnowledgeBaseConfiguration, e) && (await this.initKnowledgeBaseProviders(e), this.lastKnowledgeBaseConfiguration = e, this.onDidChangeSubject.next());
                }
                async initKnowledgeBaseProviders(e) {
                    const t = [], o = Object.fromEntries(e.filter((e)=>e.provider).map((e)=>[
                            e.provider,
                            e
                        ]));
                    for (const e of Object.values(o)){
                        const o = await this.createKnowledgeBaseProvider(e);
                        o && t.push(o);
                    }
                    this.activeKnowledgeBaseProviders = t;
                }
                async createKnowledgeBaseProvider(e) {
                    for (const t of this.knowledgeBaseProviderFactories)if (await t.support(e)) return t.create(e);
                }
                constructor(){
                    this.knowledgeBaseProviderFactories = [], this.lastKnowledgeBaseConfiguration = [], this.activeKnowledgeBaseProviders = [], this.onDidChangeSubject = new c.Subject, this.onDidChange = this.onDidChangeSubject;
                }
            };
            t.KnowledgeBaseManagerImpl = d, n([
                (0, a.Autowired)(s.ProductManager),
                i("design:type", Object)
            ], d.prototype, "productManager", void 0), n([
                (0, a.Autowired)(l.KnowledgeBaseProviderFactory),
                (0, a.Optional)(),
                i("design:type", Array)
            ], d.prototype, "knowledgeBaseProviderFactories", void 0), t.KnowledgeBaseManagerImpl = d = n([
                (0, a.Component)(l.KnowledgeBaseManager, a.ApplicationLifecycle)
            ], d);
        }
    }
]); //# sourceMappingURL=3073.7071a95813927fbdc9b1.js.map
