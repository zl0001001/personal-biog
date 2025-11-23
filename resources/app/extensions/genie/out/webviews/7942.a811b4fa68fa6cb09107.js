"use strict";
(self.webpackChunk_genie_chat_webview_app = self.webpackChunk_genie_chat_webview_app || []).push([
    [
        7942
    ],
    {
        6077: function(e, t, r) {
            var n = this && this.__decorate || function(e, t, r, n) {
                var i, s = arguments.length, o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
                else for(var c = e.length - 1; c >= 0; c--)(i = e[c]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MemoryControlServiceImpl = void 0;
            const i = r(15985), s = r(69022), o = r(58127);
            let c = class MemoryControlServiceImpl {
                async disableMemoryManagement() {
                    const e = o.RpcUtils.getProxy(s.MemoryControlService);
                    await e.disableMemoryManagement();
                }
                async enableMemoryManagement() {
                    const e = o.RpcUtils.getProxy(s.MemoryControlService);
                    await e.enableMemoryManagement();
                }
                async getMemoryManagementStatus() {
                    return o.RpcUtils.getProxy(s.MemoryControlService).getMemoryManagementStatus();
                }
                async getCurrentMemoryUsage() {
                    return o.RpcUtils.getProxy(s.MemoryControlService).getCurrentMemoryUsage();
                }
                async triggerCleanup(e = "standard") {
                    const t = o.RpcUtils.getProxy(s.MemoryControlService);
                    await t.triggerCleanup(e);
                }
                async startMemoryMonitoring(e = 6e4) {
                    return o.RpcUtils.getProxy(s.MemoryControlService).startMemoryMonitoring(e);
                }
                async stopMemoryMonitoring(e) {
                    const t = o.RpcUtils.getProxy(s.MemoryControlService);
                    await t.stopMemoryMonitoring(e);
                }
            };
            t.MemoryControlServiceImpl = c, t.MemoryControlServiceImpl = c = n([
                (0, i.Component)(s.MemoryControlService)
            ], c);
        },
        11564: function(e, t, r) {
            var n = this && this.__decorate || function(e, t, r, n) {
                var i, s = arguments.length, o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
                else for(var c = e.length - 1; c >= 0; c--)(i = e[c]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConfigViewServiceImpl = void 0;
            const i = r(15985), s = r(69022), o = r(58127), c = r(97317);
            let a = class ConfigViewServiceImpl {
                get configService() {
                    return o.RpcUtils.getProxy(s.ConfigService);
                }
                async get(e) {
                    return this.cacheMap.has(e) ? this.cacheMap.get(e) : this.throttleGetConfig(e);
                }
                async update(e, t) {
                    this.cacheMap.set(e, t), await this.configService.update(e, t);
                }
                async configChange(e, t) {
                    this.cacheMap.set(e, t), this.observer.next({
                        key: e,
                        value: t
                    });
                }
                onDidChange(e) {
                    return this.observer.subscribe(e);
                }
                constructor(){
                    this.cacheMap = new Map, this.processingPromise = new Map, this.observer = new c.Subject, this.throttleGetConfig = async (e)=>{
                        if (this.processingPromise.has(e)) return this.processingPromise.get(e);
                        const t = this.configService.get(e);
                        this.processingPromise.set(e, t);
                        const r = await t.finally(()=>{
                            this.processingPromise.delete(e);
                        });
                        return this.cacheMap.set(e, r), r;
                    };
                }
            };
            t.ConfigViewServiceImpl = a, t.ConfigViewServiceImpl = a = n([
                (0, i.Component)(s.ConfigViewService)
            ], a);
        },
        15625: function(e, t, r) {
            var n = r(78), i = this && this.__decorate || function(e, t, r, n) {
                var i, s = arguments.length, o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
                else for(var c = e.length - 1; c >= 0; c--)(i = e[c]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o;
            }, s = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProductViewServiceImpl = void 0;
            const o = r(15985), c = r(69022), a = r(58127), l = r(13073), g = r(97317);
            let u = class ProductViewServiceImpl {
                get productService() {
                    return a.RpcUtils.getProxy(c.ProductService);
                }
                get knowledgeBaseManager() {
                    return a.RpcUtils.getProxy(l.KnowledgeBaseManager);
                }
                get chatService() {
                    return a.RpcUtils.getProxy(c.ChatService);
                }
                init() {
                    var e;
                    null === (e = this.chatService) || void 0 === e || e.getEnv().then((e)=>{
                        e.remoteName && (this.useThrottle = !0);
                    });
                }
                async getAuthentication() {
                    return (await this.getConfigurationCache()).authentication;
                }
                async getModels() {
                    var e;
                    return null !== (e = (await this.getConfigurationCache()).models) && void 0 !== e ? e : [];
                }
                async getAgents() {
                    var e, t, r, n;
                    const i = await this.getConfigurationCache(), s = null !== (e = i.agents) && void 0 !== e ? e : [], o = null !== (t = i.models) && void 0 !== t ? t : [];
                    for (const e of s){
                        const t = null !== (r = e.models) && void 0 !== r ? r : [];
                        for (const e of o)(null === (n = e.tags) || void 0 === n ? void 0 : n.includes("custom")) && !t.includes(e.id) && t.push(e.id);
                        e.models = t;
                    }
                    return s;
                }
                async getCustomAgents() {
                    var e;
                    return null !== (e = (await this.getConfigurationCache()).remoteAgents) && void 0 !== e ? e : [];
                }
                async getVariables() {
                    var e;
                    const t = await this.getConfigurationCache();
                    return null !== (e = null == t ? void 0 : t.variables) && void 0 !== e ? e : [];
                }
                async getCommands() {
                    var e;
                    const t = await this.getConfigurationCache();
                    return null !== (e = null == t ? void 0 : t.commands) && void 0 !== e ? e : [];
                }
                async getKnowledges() {
                    return await this.knowledgeBaseManager.list();
                }
                async getPlatform() {
                    var e;
                    return null !== (e = (await this.getConfigurationCache()).platform) && void 0 !== e ? e : "";
                }
                async getLinks() {
                    var e;
                    return null !== (e = (await this.getConfigurationCache()).links) && void 0 !== e ? e : {};
                }
                async getEndpoint() {
                    var e;
                    return null !== (e = (await this.getConfigurationCache()).endpoint) && void 0 !== e ? e : "";
                }
                async getProductFeatures() {
                    return (await this.getConfigurationCache()).productFeatures;
                }
                async sync() {
                    await this.productService.sync();
                }
                onDidChangeConfiguration(e) {
                    return this.configurationSubject.subscribe(e);
                }
                onConfigurationChanged(e) {
                    this.configCache = e, this.configurationSubject.next(e), n.log("onConfigurationChanged", e);
                }
                onDidChangeKnowledge(e) {
                    return this.knowledgeSubject.subscribe(e);
                }
                onKnowledgeChanged() {
                    this.knowledgeSubject.next();
                }
                constructor(){
                    this.configurationSubject = new g.BehaviorSubject(void 0), this.knowledgeSubject = new g.Subject, this.lastCallTime = 0, this.lastPromise = null, this.promiseInProgress = !1, this.THROTTLE_DELAY = 3e3, this.useThrottle = !1, this.getConfigurationCache = async ()=>void 0 !== this.configCache ? this.configCache : this.throttleGetConfiguration(), this.throttleGetConfiguration = ()=>(this.lastPromise && (this.promiseInProgress || this.useThrottle && Date.now() - this.lastCallTime < this.THROTTLE_DELAY) || (this.lastCallTime = Date.now(), this.promiseInProgress = !0, this.lastPromise = this.productService.waitConfiguration().finally(()=>{
                            this.promiseInProgress = !1;
                        })), this.lastPromise);
                }
            };
            t.ProductViewServiceImpl = u, i([
                (0, o.PostConstruct)(),
                s("design:type", Function),
                s("design:paramtypes", []),
                s("design:returntype", void 0)
            ], u.prototype, "init", null), t.ProductViewServiceImpl = u = i([
                (0, o.Component)(c.ProductViewService)
            ], u);
        },
        27942: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, n, i);
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r];
            }), i = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), i(r(91635), t), i(r(64412), t), i(r(70766), t), i(r(15625), t), i(r(11564), t), i(r(16333), t), i(r(38621), t), i(r(13773), t), i(r(6077), t);
        },
        64412: function(e, t, r) {
            var n = r(78), i = this && this.__decorate || function(e, t, r, n) {
                var i, s = arguments.length, o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
                else for(var c = e.length - 1; c >= 0; c--)(i = e[c]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o;
            }, s = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.McpViewServiceImpl = void 0;
            const o = r(15985), c = r(69022), a = r(58127), l = r(97317);
            let g = class McpViewServiceImpl {
                async getMcpDocumentUrl() {
                    return a.RpcUtils.getProxy(c.McpAgentDispatcher).getMcpDocumentUrl();
                }
                async getMcpMarket() {
                    return a.RpcUtils.getProxy(c.McpAgentDispatcher).getMcpMarket();
                }
                async reconnectServer(e) {
                    const t = a.RpcUtils.getProxy(c.McpAgentDispatcher);
                    await t.reconnectServer(e);
                }
                async onChunk(e) {
                    this.mcpInstallMessage.next(e);
                }
                async install(e) {
                    const t = a.RpcUtils.getProxy(c.McpAgentDispatcher);
                    await t.install(e);
                }
                async getMcpServer(e) {
                    return a.RpcUtils.getProxy(c.McpAgentDispatcher).getMcpServer(e);
                }
                async getInstalledServers() {
                    const e = a.RpcUtils.getProxy(c.McpAgentDispatcher), t = await e.getInstalledServers();
                    return 0 === this.installedServers.size && t.forEach((e)=>{
                        this.installedServers.set(e.name, e);
                    }), t;
                }
                async getMcpMarketEnabled() {
                    return a.RpcUtils.getProxy(c.McpAgentDispatcher).getMcpMarketEnabled();
                }
                async getMcpInstallationGuideEnabled() {
                    return a.RpcUtils.getProxy(c.McpAgentDispatcher).getMcpInstallationGuideEnabled();
                }
                async delServer(e) {
                    const t = a.RpcUtils.getProxy(c.McpAgentDispatcher);
                    await t.delServer(e);
                }
                async toggleServerStatus(e, t) {
                    const r = a.RpcUtils.getProxy(c.McpAgentDispatcher);
                    await r.toggleServerStatus(e, t);
                }
                async manualInstallation(e) {
                    const t = a.RpcUtils.getProxy(c.McpAgentDispatcher);
                    return await t.manualInstallation(e);
                }
                async updateConfigEnv(e, t) {
                    const r = a.RpcUtils.getProxy(c.McpAgentDispatcher);
                    await r.updateConfigEnv(e, t);
                }
                async openExternal(e) {
                    const t = a.RpcUtils.getProxy(c.McpAgentDispatcher);
                    await t.openExternal(e);
                }
                async openSettingFile() {
                    const e = a.RpcUtils.getProxy(c.McpAgentDispatcher);
                    await e.openSettingFile();
                }
                async serverIsInstalled(e) {
                    return (await this.getInstalledServers()).some((t)=>t.name === e && "connected" === t.status);
                }
                listenSetting() {
                    this.mcpSettingsListener.next();
                }
                clipboardWriteText(e) {
                    a.RpcUtils.getProxy(c.McpAgentDispatcher).clipboardWriteText(e);
                }
                async getSetting() {
                    const e = a.RpcUtils.getProxy(c.McpAgentDispatcher);
                    return await e.getSetting();
                }
                async onServerChange(e, t, r) {
                    try {
                        n.log("onServerChange", t, e, r), this.logger.debug(`McpViewService: ${t} - ${null == e ? void 0 : e.name}`);
                        let i = !1;
                        switch(t){
                            case "server_added":
                                i = !0, e && this.installedServers.set(e.name, e);
                                break;
                            case "server_updated":
                                {
                                    const t = this.installedServers.get((null == e ? void 0 : e.name) || "");
                                    if (t) {
                                        const r = {
                                            ...t,
                                            ...e,
                                            tools: (null == e ? void 0 : e.tools) && e.tools.length > 0 ? e.tools : t.tools
                                        };
                                        this.installedServers.set((null == e ? void 0 : e.name) || "", r);
                                    } else this.installedServers.set((null == e ? void 0 : e.name) || "", e || {});
                                    i = !0;
                                    break;
                                }
                            case "server_connected":
                                {
                                    const t = this.installedServers.get((null == e ? void 0 : e.name) || "");
                                    t && (t.status = "connected", t.error = "", (null == e ? void 0 : e.tools) && e.tools.length > 0 && (t.tools = e.tools), i = !0);
                                    break;
                                }
                            case "server_disconnected":
                                {
                                    const t = this.installedServers.get((null == e ? void 0 : e.name) || "");
                                    t && (t.status = "disconnected", t.error = (null == e ? void 0 : e.error) || "Connection failed", i = !0);
                                    break;
                                }
                            case "tools_updated":
                                {
                                    const t = this.installedServers.get((null == e ? void 0 : e.name) || "");
                                    t && (null == e ? void 0 : e.tools) && (t.tools = e.tools, t.status = (null == e ? void 0 : e.status) || t.status, i = !0);
                                    break;
                                }
                            case "server_removed":
                                this.installedServers.has((null == e ? void 0 : e.name) || "") && (e && this.installedServers.delete((null == e ? void 0 : e.name) || ""), i = !0);
                                break;
                            case "servers_refreshed":
                                {
                                    const e = r, t = (null == e ? void 0 : e.servers) || (null == e ? void 0 : e.allServers);
                                    return void (t && t.length >= 0 ? (this.installedServers.clear(), t.forEach((e)=>{
                                        this.installedServers.set(e.name, e);
                                    }), this.installedServersSubject.next(t), this.logger.debug(`McpViewService: Refreshed from event, total: ${t.length}`)) : await this.refreshInstalledServers());
                                }
                            default:
                                return void this.logger.warn("Unknown server change event type:", t);
                        }
                        if (i) {
                            n.log("onServerChange shouldNotify next", i);
                            const e = Array.from(this.installedServers.values());
                            this.installedServersSubject.next(e);
                        }
                    } catch (e) {
                        n.error("Error handling server change in McpViewService:", e);
                    }
                }
                async refreshInstalledServers() {
                    try {
                        const e = a.RpcUtils.getProxy(c.McpAgentDispatcher), t = await e.getInstalledServers(), r = Array.from(this.installedServers.values());
                        JSON.stringify(r) !== JSON.stringify(t) ? (this.installedServers.clear(), t.forEach((e)=>{
                            this.installedServers.set(e.name, e);
                        }), this.installedServersSubject.next(t), this.logger.debug("McpViewService: Refreshed installed servers, total:" + t.length)) : this.logger.debug("McpViewService: No changes in server list, skipping update");
                    } catch (e) {
                        n.error("Error refreshing installed servers:", e);
                    }
                }
                get installedServers$() {
                    return this.installedServersSubject.asObservable();
                }
                getCurrentInstalledServers() {
                    return Array.from(this.installedServers.values());
                }
                async getMcpMarketUrl() {
                    const e = a.RpcUtils.getProxy(c.McpAgentDispatcher);
                    return await e.getMcpMarketUrl();
                }
                constructor(){
                    this.mcpInstallMessage = new l.Subject, this.mcpSettingsListener = new l.Subject, this.installedServers = new Map, this.installedServersSubject = new l.Subject;
                }
            };
            t.McpViewServiceImpl = g, i([
                (0, o.Autowired)(o.Logger),
                s("design:type", Object)
            ], g.prototype, "logger", void 0), t.McpViewServiceImpl = g = i([
                (0, o.Component)(c.McpViewService)
            ], g);
        },
        70766: function(e, t, r) {
            var n = this && this.__decorate || function(e, t, r, n) {
                var i, s = arguments.length, o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
                else for(var c = e.length - 1; c >= 0; c--)(i = e[c]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AuthenticationProxyImpl = t.AuthenticationProxy = void 0;
            const i = r(15985), s = r(69022), o = r(58127);
            t.AuthenticationProxy = Symbol("AuthenticationProxy");
            let c = class AuthenticationProxyImpl {
                async login(e) {
                    o.RpcUtils.getProxy(s.AuthenticationService).login(e);
                }
                async getAccounts() {
                    return o.RpcUtils.getProxy(s.AuthenticationService).getAccounts();
                }
                async switchAccount(e) {
                    return o.RpcUtils.getProxy(s.AuthenticationService).switchAccount(e);
                }
            };
            t.AuthenticationProxyImpl = c, t.AuthenticationProxyImpl = c = n([
                (0, i.Component)(t.AuthenticationProxy)
            ], c);
        },
        91635: function(e, t, r) {
            var n = this && this.__decorate || function(e, t, r, n) {
                var i, s = arguments.length, o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
                else for(var c = e.length - 1; c >= 0; c--)(i = e[c]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FileSearchViewServiceImpl = void 0;
            const i = r(15985), s = r(69022), o = r(58127), c = r(76243);
            let a = class FileSearchViewServiceImpl {
                get service() {
                    return o.RpcUtils.getProxy(s.FileSearchService);
                }
                clearRecentOpend() {
                    return this.service.clearRecentOpend();
                }
                getRecentFiles(e) {
                    return this.service.getRecentFiles(e);
                }
                getWorkspaceFiles(e) {
                    return this.service.getWorkspaceFiles(e);
                }
                openFile(e, t) {
                    return this.service.openFile(e, t);
                }
                checkWorkspace(e) {
                    return this.service.checkWorkspace(e);
                }
                createWorkspace(e, t) {
                    return this.service.createWorkspace(e, t);
                }
            };
            t.FileSearchViewServiceImpl = a, t.FileSearchViewServiceImpl = a = n([
                (0, i.Component)({
                    id: c.FileSearchViewService,
                    scope: i.Scope.Request
                })
            ], a);
        }
    }
]); //# sourceMappingURL=7942.a811b4fa68fa6cb09107.js.map
