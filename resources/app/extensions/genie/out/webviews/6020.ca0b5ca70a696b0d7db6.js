"use strict";
(self.webpackChunk_genie_chat_webview_app = self.webpackChunk_genie_chat_webview_app || []).push([
    [
        6020
    ],
    {
        597: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        4080: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LogLevel = void 0, function(e) {
                e[e.Verbose = 0] = "Verbose", e[e.Debug = 1] = "Debug", e[e.Info = 2] = "Info", e[e.Warning = 3] = "Warning", e[e.Error = 4] = "Error";
            }(r || (t.LogLevel = r = {}));
        },
        4307: (e, t)=>{
            var r, o;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FeatureToggle = t.ProductFeature = void 0, function(e) {
                e.Chat = "Chat", e.InlineChat = "InlineChat", e.StatusBar = "StatusBar", e.ChatVariable = "ChatVariable", e.InlineCompletions = "InlineCompletions", e.NesCompletions = "NesCompletions", e.MergedNesCompletions = "MergedNesCompletions", e.SlashCommand = "SlashCommand", e.GenerateCommitMessage = "GenerateCommitMessage", e.GenerateReadmeFile = "GenerateReadmeFile", e.ConfigServer = "ConfigServer", e.StopParamPatch = "StopParamPatch", e.OpenAIStyleAPI = "OpenAIStyleAPI", e.SecretKeyRequired = "SecretKeyRequired", e.MultiFileWithPromptParam = "MultiFileWithPromptParam", e.MultiFileWithSeparateParams = "MultiFileWithSeparateParams", e.TrimByIndentation = "TrimByIndentation", e.ASTForCompletions = "ASTForCompletions", e.CompletionsPrefetching = "CompletionsPrefetching", e.NESPrefetchingAfterEmptyCompletion = "NESPrefetchingAfterEmptyCompletion", e.TriggerNESAfterCompletionHasBeenAccepted = "TriggerNESAfterCompletionHasBeenAccepted", e.CursorPositonPrefetching = "CursorPositonPrefetching", e.CompletionsRelatedSnippets = "CompletionsRelatedSnippets", e.ImportMetadataForCompletions = "ImportMetadataForCompletions", e.CompletionItemsForCompletions = "CompletionItemsForCompletions", e.NesDocumentActiveChangeTrigger = "NesDocumentActiveChangeTrigger", e.NesCompletionsPrefetching = "NesCompletionsPrefetching", e.NesCompletionsJumpToHere = "NesCompletionsJumpToHere", e.RemoveBelowExist = "RemoveBelowExist", e.NesRepeatFilter = "NesRepeatFilter", e.NesRepeatFilterV2 = "NesRepeatFilterV2", e.NesRangeFix = "NesRangeFix", e.CompletionsResultFusion = "CompletionsResultFusion", e.ChatHistory = "ChatHistory", e.InlineChatSelectionAppendToResult = "InlineChatSelectionAppendToResult", e.ChatFollowup = "ChatFollowup", e.CRLFCompatible = "CRLFCompatible", e.CodeAction = "CodeAction", e.CodeActionIDE = "CodeActionIDE", e.FloatShortcut = "FloatShortcut", e.CodeLens = "CodeLens", e.InlineChatIntentRecognition = "InlineChatIntentRecognition", e.MultiStepCompletions = "MultiStepCompletions", e.Codebase = "Codebase", e.UseDefaultModelIfCurrentNotInList = "UseDefaultModelIfCurrentNotInList", e.Mcp = "Mcp", e.McpMarket = "McpMarket", e.McpInstallationGuide = "McpInstallationGuide", e.MemoryManagement = "MemoryManagement", e.SelectImage = "SelectImage", e.SelectFigma = "SelectFigma", e.SelectComponent = "SelectComponent", e.Aegis = "Aegis", e.BillingNotice = "BillingNotice", e.VSCodeAuthProvider = "VSCodeAuthProvider", e.TerminalChatIDE = "TerminalChatIDE", e.InlineChatIDE = "InlineChatIDE", e.Integration = "Integration", e.PdcFlow = "PdcFlow", e.AdditionalPrompt = "AdditionalPrompt", e.CustomModel = "CustomModel", e.CommandsSmartMerge = "CommandsSmartMerge", e.WriteAndReplaceToolIDE = "WriteAndReplaceToolIDE", e.GeneralSettings = "GeneralSettings", e.Billing = "Billing", e.AutoMode = "AutoMode", e.isIDE = "isIDE", e.WebFetch = "WebFetch", e.SummaryWebFetch = "SummaryWebFetch", e.WebBrowserFetch = "WebBrowserFetch", e.WebSearch = "WebSearch", e.DynamicAddWebSearch = "DynamicAddWebSearch", e.Skills = "Skills", e.CodeSelectionActions = "CodeSelectionActions", e.DisableDeleteFilesTool = "DisableDeleteFilesTool", e.ProposalAPI = "ProposalAPI", e.PreviewUrl = "PreviewUrl", e.NESNativeRenderer = "NESNativeRenderer", e.EnterpriseDomainLogin = "EnterpriseDomainLogin", e.SwitchBySession = "SwitchBySession", e.InternationalLogin = "InternationalLogin", e.Task = "Task", e.CustomModelsJSON = "CustomModelsJSON";
            }(r || (t.ProductFeature = r = {})), function(e) {
                e.SupportHttpsAgentProxy = "SupportHttpsAgentProxy";
            }(o || (t.FeatureToggle = o = {}));
        },
        7551: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        7657: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        11741: function(e, t, r) {
            var o = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, i = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CloudProductProvider = void 0;
            const n = r(15985), a = r(56464), l = r(39322), c = r(2877), d = r(75229), s = r(78680), u = [
                "deploymentType"
            ];
            let g = class CloudProductProvider {
                getCachedMergeStrategy() {
                    return this.cachedMergeStrategy;
                }
                async provide(e) {
                    var t, r, o, i, a, l, c, d, u, g, p, f, y, h, v;
                    if (null === (t = e.current.config) || void 0 === t ? void 0 : t.disabled) return {};
                    const m = (null === (r = e.current.config) || void 0 === r ? void 0 : r.url) || "/v3/config", P = null === (o = n.ContainerUtil.get(s.ProductManager)) || void 0 === o ? void 0 : o.getEndpoint();
                    if ((null === (i = e.current.config) || void 0 === i ? void 0 : i.url) || P) try {
                        const t = await this.cloudProductManager.fetch(m);
                        delete t.endpoint, delete t.stagingEndpoint;
                        const r = null === (a = e.current.agents) || void 0 === a ? void 0 : a.map((e)=>({
                                name: e.name,
                                models: e.models
                            })), o = null === (l = e.current.models) || void 0 === l ? void 0 : l.map((e)=>e.name), i = null === (c = t.agents) || void 0 === c ? void 0 : c.map((e)=>({
                                name: e.name,
                                models: e.models
                            })), n = null !== (d = t.models) && void 0 !== d ? d : [];
                        this.logger.info(`[Agent变更] 原有Agents数量: ${null !== (u = null == r ? void 0 : r.length) && void 0 !== u ? u : 0}, 内容: ${JSON.stringify(r)}`), this.logger.info(`[Agent变更] 云端Agents数量: ${null !== (g = null == i ? void 0 : i.length) && void 0 !== g ? g : 0}, 内容: ${JSON.stringify(i)}`), this.logger.info(`[Model变更] 原有Models数量: ${null !== (p = null == o ? void 0 : o.length) && void 0 !== p ? p : 0}, 内容: ${JSON.stringify(o)}`), this.logger.info(`[Model变更] 云端Models数量: ${null !== (f = null == n ? void 0 : n.length) && void 0 !== f ? f : 0}, 内容: ${JSON.stringify(n)}`);
                        const P = null === (y = t.productFeatures) || void 0 === y ? void 0 : y.CommandsSmartMerge, _ = null === (h = e.current.productFeatures) || void 0 === h ? void 0 : h.CommandsSmartMerge, C = null !== (v = null != P ? P : _) && void 0 !== v && v ? s.MergeStrategy.CommandsSmartMerge : s.MergeStrategy.Merge;
                        return this.cachedMergeStrategy = C, {
                            ...this.omitExcludedFields(t),
                            mergeStrategy: C
                        };
                    } catch (e) {
                        this.logger.warn(`Failed to get product configuration from ${m} error: ${e}`);
                    }
                    return {};
                }
                omitExcludedFields(e) {
                    if (!e) return e;
                    const t = {
                        ...e
                    };
                    for (const e of u)Reflect.deleteProperty(t, e);
                    return t;
                }
                constructor(){
                    this.priority = s.ProductProviderPriority.CLOUD, this.cachedMergeStrategy = s.MergeStrategy.Merge;
                }
            };
            t.CloudProductProvider = g, o([
                (0, n.Autowired)(a.RestOperations),
                i("design:type", Function)
            ], g.prototype, "restOperations", void 0), o([
                (0, n.Autowired)(n.Logger),
                i("design:type", Object)
            ], g.prototype, "logger", void 0), o([
                (0, n.Autowired)(s.CloudProductManager),
                i("design:type", Object)
            ], g.prototype, "cloudProductManager", void 0), o([
                (0, c.ShareCacheable)({
                    domain: "ACC_SHARE_CACHE_PRODUCT_CLOUD",
                    identifierGenerator: async (e)=>{
                        var t, r, o, i, a;
                        const u = n.ContainerUtil.get(d.ClientInfoProvider), p = n.ContainerUtil.get(c.UserinfoProvider), f = await u.get(), y = await p.provide(), h = null !== (t = e.current) && void 0 !== t ? t : {}, v = null !== (o = null !== (r = n.ContainerUtil.get(g).getCachedMergeStrategy()) && void 0 !== r ? r : h.mergeStrategy) && void 0 !== o ? o : s.MergeStrategy.Merge;
                        return l.HashUtils.md5(`${f.platform}_${f.platformVersion}_${f.productName}_${f.productVersion}_${null == y ? void 0 : y.token}_${null === (i = h.config) || void 0 === i ? void 0 : i.url}_${null === (a = h.config) || void 0 === a ? void 0 : a.disabled}_${null == y ? void 0 : y.enterpriseId}_${v}`);
                    },
                    expireIn: s.PRODUCT_CONFIGURATION_CACHE_TIMEOUT,
                    onCacheUpdate: ()=>{
                        var e;
                        n.ContainerUtil.get(n.Logger).debug("[ShareCache] cache update: PRODUCT_CLOUD"), null === (e = n.ContainerUtil.get(s.ProductManager)) || void 0 === e || e.sync();
                    },
                    forceUpdate: (e)=>e.force
                }),
                i("design:type", Function),
                i("design:paramtypes", [
                    Object
                ]),
                i("design:returntype", Promise)
            ], g.prototype, "provide", null), t.CloudProductProvider = g = o([
                (0, n.Component)(s.ProductProvider)
            ], g);
        },
        14203: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        20199: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        24364: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ENV_CLIENT_INFO_KEYS = t.ClientInfoProvider = void 0, t.ClientInfoProvider = Symbol("ClientInfoProvider"), t.ENV_CLIENT_INFO_KEYS = {
                machineId: "CLIENT_INFO_MACHINE_ID",
                sessionId: "CLIENT_INFO_SESSION_ID",
                platform: "CLIENT_INFO_PLATFORM",
                platformVersion: "CLIENT_INFO_PLATFORM_VERSION",
                productName: "CLIENT_INFO_PRODUCT_NAME",
                productVersion: "CLIENT_INFO_PRODUCT_VERSION",
                ideType: "CLIENT_INFO_IDE_TYPE",
                pluginName: "CLIENT_INFO_PLUGIN_NAME",
                pluginVersion: "CLIENT_INFO_PLUGIN_VERSION"
            };
        },
        26020: function(e, t, r) {
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
            }), i(r(56506), t), i(r(78680), t), i(r(84953), t), i(r(28365), t), i(r(11741), t), i(r(85973), t), i(r(56528), t), i(r(88822), t), i(r(31558), t), i(r(75229), t), i(r(64173), t), i(r(62879), t);
        },
        28365: function(e, t, r) {
            var o = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, i = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DefaultProductProvider = void 0;
            const n = r(15985), a = r(78680);
            let l = class DefaultProductProvider {
                async provide(e) {
                    return {};
                }
                constructor(){
                    this.priority = a.ProductProviderPriority.DEFAULT;
                }
            };
            t.DefaultProductProvider = l, o([
                (0, n.Autowired)(n.Logger),
                i("design:type", Object)
            ], l.prototype, "logger", void 0), t.DefaultProductProvider = l = o([
                (0, n.Component)(a.ProductProvider)
            ], l);
        },
        29704: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UpdateApiVersion = void 0, function(e) {
                e.V2 = "v2";
            }(r || (t.UpdateApiVersion = r = {}));
        },
        31558: function(e, t, r) {
            var o = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CommandsSmartMergeProductMergeStrategy = t.SmartMergeProductMergeStrategy = t.MergeProductMergeStrategy = t.OverrideProductMergeStrategy = void 0;
            const i = r(15985), n = r(78680), a = r(56506);
            let l = class OverrideProductMergeStrategy {
                async merge(e, t) {
                    return {
                        ...t
                    };
                }
                async support(e) {
                    return e.mergeStrategy === a.MergeStrategy.Override;
                }
            };
            t.OverrideProductMergeStrategy = l, t.OverrideProductMergeStrategy = l = o([
                (0, i.Component)(n.ProductMergeStrategy)
            ], l);
            let c = class MergeProductMergeStrategy {
                async merge(e, t) {
                    return this.doMerge(e, t);
                }
                mergeArray(e, t) {
                    return t;
                }
                doMerge(e, t) {
                    if (void 0 === t) return e;
                    if (!e) return t;
                    if (null === t) return e;
                    if (Array.isArray(e) || Array.isArray(t)) return this.mergeArray(e, t);
                    let r = t;
                    if ("object" == typeof e && null !== e && "object" == typeof t && null !== t) {
                        r = {
                            ...e
                        };
                        for (const o of Object.keys(t))r[o] = this.doMerge(e[o], t[o]);
                    }
                    return r;
                }
                async support(e) {
                    return e.mergeStrategy === a.MergeStrategy.Merge || !e.mergeStrategy;
                }
            };
            t.MergeProductMergeStrategy = c, t.MergeProductMergeStrategy = c = o([
                (0, i.Component)(n.ProductMergeStrategy)
            ], c);
            let d = class SmartMergeProductMergeStrategy extends c {
                async support(e) {
                    return e.mergeStrategy === a.MergeStrategy.SmartMerge;
                }
                isObjectArray(e) {
                    return Array.isArray(e) && (0 === e.length || e.every((e)=>"object" == typeof e));
                }
                getItemIdOrName(e) {
                    return (null == e ? void 0 : e.id) || (null == e ? void 0 : e.name);
                }
                mergeArray(e, t) {
                    if (!this.isObjectArray(e) || !this.isObjectArray(t)) return super.mergeArray(e, t);
                    let r = [
                        ...e
                    ];
                    for (const o of t){
                        const t = this.getItemIdOrName(o);
                        if (t) {
                            const i = e.find((e)=>this.getItemIdOrName(e) === t);
                            if (i) {
                                const e = this.doMerge(i, o);
                                r = r.map((t)=>this.getItemIdOrName(t) === this.getItemIdOrName(e) ? e : t);
                            } else r.push(o);
                        } else o && r.push(o);
                    }
                    return r;
                }
            };
            t.SmartMergeProductMergeStrategy = d, t.SmartMergeProductMergeStrategy = d = o([
                (0, i.Component)(n.ProductMergeStrategy)
            ], d);
            let s = class CommandsSmartMergeProductMergeStrategy extends c {
                async support(e) {
                    return e.mergeStrategy === a.MergeStrategy.CommandsSmartMerge;
                }
                async merge(e, t) {
                    return this.doMergeWithPath(e, t, []);
                }
                doMergeWithPath(e, t, r) {
                    if (void 0 === t) return e;
                    if (!e) return t;
                    if (null === t) return e;
                    if (Array.isArray(e) || Array.isArray(t)) return this.mergeArrayWithPath(e, t, r);
                    let o = t;
                    if ("object" == typeof e && null !== e && "object" == typeof t && null !== t) {
                        o = {
                            ...e
                        };
                        for (const i of Object.keys(t))o[i] = this.doMergeWithPath(e[i], t[i], [
                            ...r,
                            i
                        ]);
                    }
                    return o;
                }
                mergeArrayWithPath(e, t, r) {
                    return "commands" === r[r.length - 1] ? this.mergeCommandsArray(Array.isArray(e) ? e : [], Array.isArray(t) ? t : [], r) : super.mergeArray(null != e ? e : [], null != t ? t : []);
                }
                mergeCommandsArray(e, t, r) {
                    if (!(null == t ? void 0 : t.length)) return null != e ? e : [];
                    let o = [
                        ...e
                    ];
                    for (const e of t){
                        if (!e) continue;
                        const t = null == e ? void 0 : e.name;
                        if (!t) {
                            o.push(e);
                            continue;
                        }
                        const i = o.findIndex((e)=>(null == e ? void 0 : e.name) === t);
                        if (i >= 0) {
                            const n = this.doMergeWithPath(o[i], e, [
                                ...r,
                                t
                            ]);
                            o[i] = n;
                        } else o.push(e);
                    }
                    return o;
                }
            };
            t.CommandsSmartMergeProductMergeStrategy = s, t.CommandsSmartMergeProductMergeStrategy = s = o([
                (0, i.Component)(n.ProductMergeStrategy)
            ], s);
        },
        34457: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        36234: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        39486: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MODEL_TAG_CUSTOM = void 0, t.MODEL_TAG_CUSTOM = "custom";
        },
        51809: function(e, t, r) {
            var o = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, i = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UserAgentHttpInterceptor = void 0;
            const n = r(15985), a = r(56464), l = r(24364);
            let c = class UserAgentHttpInterceptor {
                initialize() {
                    this.restOperations.interceptors.request.use(async (e)=>(e.headers || (e.headers = {}), e.headers[a.HttpHeaders.USER_AGENT] = await this.buildUserAgent(`${e.headers[a.HttpHeaders.USER_AGENT] || ""}`), e));
                }
                async buildUserAgent(e = "") {
                    const t = e ? [
                        e
                    ] : [], r = await this.clientInfoProvider.get() || {};
                    return r.productName && t.unshift(`${r.productName}/${r.productVersion || "unknown"}`), r.platform && t.unshift(`${r.platform}/${r.platformVersion || "unknown"}`), t.join(" ");
                }
            };
            t.UserAgentHttpInterceptor = c, o([
                (0, n.Autowired)(l.ClientInfoProvider),
                i("design:type", Object)
            ], c.prototype, "clientInfoProvider", void 0), o([
                (0, n.Autowired)(a.RestOperations),
                i("design:type", Function)
            ], c.prototype, "restOperations", void 0), o([
                (0, n.Autowired)(n.Logger),
                i("design:type", Object)
            ], c.prototype, "logger", void 0), t.UserAgentHttpInterceptor = c = o([
                (0, n.Component)(n.ApplicationLifecycle)
            ], c);
        },
        53811: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        56506: function(e, t, r) {
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
            }), i(r(69229), t), i(r(80876), t), i(r(29704), t), i(r(4307), t), i(r(7657), t), i(r(63726), t), i(r(71039), t), i(r(88137), t), i(r(39486), t), i(r(81548), t), i(r(34457), t), i(r(36234), t), i(r(53811), t), i(r(597), t), i(r(14203), t), i(r(66411), t), i(r(84210), t), i(r(29704), t), i(r(4080), t), i(r(98670), t), i(r(99630), t), i(r(20199), t), i(r(7551), t), i(r(88895), t);
        },
        56528: function(e, t, r) {
            var o = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, i = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProductEndpointHttpInterceptor = void 0;
            const n = r(15985), a = r(56464), l = r(39322), c = r(78680), d = [
                "/v2/config",
                "/v3/config",
                "/config/models",
                "/config/agents"
            ];
            let s = class ProductEndpointHttpInterceptor {
                initialize() {
                    this.restOperations.interceptors.request.use(async (e)=>{
                        var t, r, o;
                        const i = n.ContainerUtil.get(c.ProductManager);
                        if (d.find((t)=>{
                            var r;
                            return null === (r = e.url) || void 0 === r ? void 0 : r.includes(t);
                        })) e.baseURL || (e.baseURL = i.getEndpoint());
                        else {
                            const r = null === (t = await i.waitConfiguration()) || void 0 === t ? void 0 : t.endpoint;
                            e.baseURL = r;
                        }
                        return e.headers || (e.headers = {}), e.headers[l.PRODUCT] || (e.headers[l.PRODUCT] = null !== (o = null === (r = i.configuration.getValue()) || void 0 === r ? void 0 : r.deploymentType) && void 0 !== o ? o : "SaaS"), e;
                    });
                }
            };
            t.ProductEndpointHttpInterceptor = s, o([
                (0, n.Autowired)(a.RestOperations),
                i("design:type", Function)
            ], s.prototype, "restOperations", void 0), t.ProductEndpointHttpInterceptor = s = o([
                (0, n.Component)(n.ApplicationLifecycle)
            ], s);
        },
        62879: function(e, t, r) {
            var o = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, i = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AvailableModelsFilterProvider = void 0;
            const n = r(15985), a = r(78680);
            let l = class AvailableModelsFilterProvider {
                async provide(e) {
                    var t;
                    const r = e.current;
                    if (!r.models || !r.availableModels || 0 === r.availableModels.length) return {};
                    try {
                        const e = {
                            models: r.models.filter((e)=>r.availableModels.includes(e.id)),
                            mergeStrategy: a.MergeStrategy.Merge
                        };
                        return this.logger.debug(`Filtered models from ${r.models.length} to ${null === (t = e.models) || void 0 === t ? void 0 : t.length} based on availableModels`), e;
                    } catch (e) {
                        return this.logger.debug("Failed to filter models based on availableModels", e), {};
                    }
                }
                constructor(){
                    this.priority = a.ProductProviderPriority.DEFAULT + 1e4;
                }
            };
            t.AvailableModelsFilterProvider = l, o([
                (0, n.Autowired)(n.Logger),
                i("design:type", Object)
            ], l.prototype, "logger", void 0), t.AvailableModelsFilterProvider = l = o([
                (0, n.Component)(a.ProductProvider)
            ], l);
        },
        63726: (e, t)=>{
            var r, o;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ReplacementFile = t.ReplacementContent = void 0, function(e) {
                e.is = function is(e) {
                    return "pattern" in e && "search" in e && "replace" in e;
                };
            }(r || (t.ReplacementContent = r = {})), function(e) {
                e.is = function is(e) {
                    return "sourcePath" in e && "targetPath" in e;
                };
            }(o || (t.ReplacementFile = o = {}));
        },
        64173: (e, t, r)=>{
            var o = r(42649);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getIDEType = void 0;
            const i = r(39322), n = r(24364);
            t.getIDEType = (e)=>{
                if (i.EnvUtils.isNodeRuntime()) {
                    if (o.env.ACC_IDE_TYPE) return o.env.ACC_IDE_TYPE;
                    if (o.env[n.ENV_CLIENT_INFO_KEYS.ideType]) return o.env[n.ENV_CLIENT_INFO_KEYS.ideType];
                    if (o.env.ACC_USER_ID) return `web-${e}`;
                }
                return e.includes("VSCode") ? "VSCode" : e.includes("JetBrains") ? "JetBrains" : e.includes("Vim") ? "Vim" : e.includes("XCode") ? "XCode" : e.includes("VisualStudio") ? "VisualStudio" : e.includes("CodeBuddyIDE") ? "CodeBuddyIDE" : e.includes("WXIDE") ? "WXIDE" : e.includes("WebChat") ? "WebChat" : "VSCode";
            };
        },
        66411: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        69229: (e, t)=>{
            var r, o;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DEFAULT_MERGE_STRATEGY = t.MergeStrategy = t.Platform = void 0, function(e) {
                e.VSCode = "vscode", e.Jetbrains = "jetbrains";
            }(r || (t.Platform = r = {})), function(e) {
                e.Override = "override", e.Merge = "merge", e.SmartMerge = "smartMerge", e.CommandsSmartMerge = "commandsSmartMerge";
            }(o || (t.MergeStrategy = o = {})), t.DEFAULT_MERGE_STRATEGY = o.SmartMerge;
        },
        71039: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AgentPublisherType = void 0, function(e) {
                e.User = "user", e.Global = "Global", e.Enterprise = "enterprise";
            }(r || (t.AgentPublisherType = r = {}));
        },
        75229: function(e, t, r) {
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
            }), i(r(24364), t), i(r(80841), t), i(r(51809), t);
        },
        78680: function(e, t, r) {
            var o, i = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
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
            }), n = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CloudProductManager = t.ProductMergeStrategy = t.ProductMerger = t.ProductManager = t.ProductProvider = t.ProductProviderPriority = t.PRODUCT_CONFIGURATION_CACHE_TIMEOUT = void 0, n(r(56506), t), t.PRODUCT_CONFIGURATION_CACHE_TIMEOUT = 48e4, function(e) {
                e.CLIENT = 5e3, e.CLIENT_SETTINGS_ENDPOINT = 6e3, e.CLOUD_PRE = 9999, e.CLOUD = 1e4, e.MODELS = 100100, e.AGENTS = 100200, e.CLIENT_SETTINGS = 11e3, e.WORKSPACE = 15e3, e.MODEL_SETTINGS = 18e3, e.ENV = 2e4, e.OPTIONS = 21e3, e.DEFAULT = 25e3;
            }(o || (t.ProductProviderPriority = o = {})), t.ProductProvider = Symbol("ProductProvider"), t.ProductManager = Symbol("ProductManager"), t.ProductMerger = Symbol("ProductMerger"), t.ProductMergeStrategy = Symbol("ProductMergeStrategy"), t.CloudProductManager = Symbol("CloudProductManager");
        },
        80841: function(e, t, r) {
            var o = r(42649), i = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, n = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DefaultClientInfoProviderImpl = void 0;
            const a = r(15985), l = r(39322), c = r(97317), d = r(78680), s = r(64173), u = r(24364);
            let g = class DefaultClientInfoProviderImpl {
                initialize() {
                    this.initClientInfo(), this.productManager.configuration.subscribe(()=>{
                        this.initClientInfo();
                    });
                }
                async get() {
                    const e = this.initClientInfo();
                    return Promise.resolve(e);
                }
                initClientInfo() {
                    var e, t;
                    const r = this.productManager.getCurrentConfiguration(), o = this.getProcessEnvInfo(), i = {
                        machineId: "",
                        sessionId: "",
                        platform: (null == r ? void 0 : r.platform) || "",
                        platformVersion: (null == r ? void 0 : r.platformVersion) || "",
                        productName: (null == r ? void 0 : r.productName) || "",
                        productVersion: (null == r ? void 0 : r.productVersion) || "",
                        ...o
                    };
                    return i.ideType = (0, s.getIDEType)(i.platform), null === (e = this.filePathService) || void 0 === e || e.setIDEType(null !== (t = i.ideType) && void 0 !== t ? t : "VSCode"), l.ObjectUtils.isChanged(this.clientInfo, i) && this.clientInfo$.next(i), i;
                }
                getProcessEnvInfo() {
                    const e = {};
                    if (l.EnvUtils.isNodeRuntime() && o.env) for (const t of Object.keys(u.ENV_CLIENT_INFO_KEYS)){
                        const r = t, i = u.ENV_CLIENT_INFO_KEYS[r];
                        i in o.env && o.env[i] && (e[r] = o.env[i]);
                    }
                    return e;
                }
                constructor(){
                    this.clientInfo$ = new c.BehaviorSubject(void 0);
                }
            };
            t.DefaultClientInfoProviderImpl = g, i([
                (0, a.Autowired)(d.ProductManager),
                n("design:type", Object)
            ], g.prototype, "productManager", void 0), i([
                (0, a.Autowired)(l.FilePathService),
                (0, a.Optional)(),
                n("design:type", Object)
            ], g.prototype, "filePathService", void 0), i([
                (0, a.PostConstruct)(),
                n("design:type", Function),
                n("design:paramtypes", []),
                n("design:returntype", void 0)
            ], g.prototype, "initialize", null), t.DefaultClientInfoProviderImpl = g = i([
                (0, a.Component)(u.ClientInfoProvider)
            ], g);
        },
        80876: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AuthenticationType = void 0, function(e) {
                e.CUSTOM_TOKEN = "custom-token", e.WECHAT = "wechat", e.EXTERNAL_LINK = "external-link", e.EXTERNAL_LINK_V2 = "external-link-v2", e.IDE_HOST = "ide-host", e.CUSTOM_HOSTNAME = "custom-hostname";
            }(r || (t.AuthenticationType = r = {}));
        },
        81548: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        84210: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        84953: function(e, t, r) {
            var o, i = r(78), n = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, a = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProductManagerImpl = t.PRODUCT_KEY = t.INLINE_COMPLETION_MODEL_KEY = void 0;
            const l = r(15985), c = r(39322), d = r(97317), s = r(78680);
            t.INLINE_COMPLETION_MODEL_KEY = "inlineCompletionModel", t.PRODUCT_KEY = "product";
            let u = o = class ProductManagerImpl {
                init() {
                    this.sync();
                }
                getEndpoint() {
                    return this.currentEndpoint;
                }
                getCurrentConfiguration() {
                    return this.currentConfiguration;
                }
                async sync(e) {
                    return this.promise = this.promise.finally(()=>this.doSync(e)), this.promise;
                }
                async doSync(e) {
                    await (0, l.timeout)(0), this.lastSyncTime = Date.now();
                    const t = await this.productProviderProvider.sort(), r = {
                        force: !!e,
                        current: {}
                    };
                    try {
                        for (const e of t.reverse()){
                            const t = await e.provide(r);
                            r.current = await this.productMerger.merge(r.current, t), this.currentConfiguration = r.current, r.current.endpoint && (this.currentEndpoint = r.current.endpoint);
                        }
                    } catch (e) {
                        try {
                            l.ContainerUtil.get(l.Logger).error(`Error while syncing product configuration: ${e}`, o.name);
                        } catch (e) {
                            i.error(`Error while syncing product configuration: ${e}`);
                        }
                    }
                    if (!c.ObjectUtils.isChanged(this._configuration, r.current)) return;
                    this._configuration = r.current;
                    const n = new Proxy(r.current, {
                        get: (e, t)=>(Date.now() - this.lastSyncTime > s.PRODUCT_CONFIGURATION_CACHE_TIMEOUT && this.sync(), e[t])
                    });
                    this.configuration.next(n), this.onDidChangeEmitter.fire();
                }
                async waitConfiguration(e = !1) {
                    return e && await this.promise, new Promise((e)=>{
                        const t = this.configuration.subscribe((r)=>{
                            r && (e(r), setTimeout(()=>{
                                t.unsubscribe();
                            }, 0));
                        });
                    });
                }
                constructor(){
                    this.onDidChangeEmitter = new l.Emitter, this.onDidChange = this.onDidChangeEmitter.event, this.lastSyncTime = 0, this.configuration = new d.BehaviorSubject(void 0), this.promise = Promise.resolve();
                }
            };
            t.ProductManagerImpl = u, u.MAX_CACHE_TTL = 48e4, n([
                (0, l.AutowiredProvider)(s.ProductProvider),
                a("design:type", Object)
            ], u.prototype, "productProviderProvider", void 0), n([
                (0, l.Autowired)(s.ProductMerger),
                a("design:type", Object)
            ], u.prototype, "productMerger", void 0), n([
                (0, l.PostConstruct)(),
                a("design:type", Function),
                a("design:paramtypes", []),
                a("design:returntype", void 0)
            ], u.prototype, "init", null), t.ProductManagerImpl = u = o = n([
                (0, l.Component)(s.ProductManager)
            ], u);
        },
        85973: function(e, t, r) {
            var o = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, i = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CloudProductManagerImpl = void 0;
            const n = r(15985), a = r(56464), l = r(39322), c = r(2877), d = r(78680), s = "cloud_product_config_cache";
            let u = class CloudProductManagerImpl {
                init() {
                    this.logger.setContext("CloudProductManager");
                }
                async fetch(e) {
                    const t = await this.userinfoProvider.provide();
                    try {
                        return await this.fetchFromRemote(e, null == t ? void 0 : t.userId);
                    } catch (r) {
                        if (null == t ? void 0 : t.userId) {
                            this.fetchWithRetry(e, null == t ? void 0 : t.userId);
                            const r = await this.fetchFromCache(null == t ? void 0 : t.userId);
                            if (r) return this.logger.info(`Fetch remote configuration failed, use cached configuration instead: ${this.safeStringify(r)}`, null == t ? void 0 : t.userId), r;
                        }
                        throw r;
                    }
                }
                async fetchWithRetry(e, t) {
                    var r, o;
                    if (this.retrying) return;
                    this.retrying = !0;
                    const i = [
                        1e3,
                        2e3,
                        4e3,
                        8e3,
                        16e3
                    ];
                    let n;
                    for(let r = 0; r < i.length; r++){
                        await this.sleep(i[r]);
                        try {
                            await this.fetchFromRemote(e, t), this.logger.info(`Fetch remote configuration succeeded after ${r + 1} attempt(s)`, t), n = void 0;
                            break;
                        } catch (e) {
                            n = e, this.logger.warn(`Fetch remote configuration failed (attempt ${r + 1}), will retry after ${i[r] / 1e3} s`);
                        }
                    }
                    if (n) {
                        const e = "isAxiosError" in n && n.isAxiosError ? null === (o = null === (r = n.response) || void 0 === r ? void 0 : r.config.headers) || void 0 === o ? void 0 : o[l.REQUEST_ID_HEADER] : "";
                        this.logger.error(`Fetch remote configuration failed after all retries: ${this.safeStringify(n)}`, `${e}`);
                    }
                    this.retrying = !1;
                }
                async fetchFromCache(e) {
                    var t;
                    const r = null !== (t = await this.localStorage.get(s, [])) && void 0 !== t ? t : [], o = Date.now(), i = r.findIndex((t)=>t.userId === e);
                    if (-1 === i) return;
                    const n = r[i];
                    if (o - n.ts < 2592e5) return r.splice(i, 1), r.push(n), await this.localStorage.set(s, r), this.configuration = n.data, n.data;
                    r.splice(i, 1), await this.localStorage.set(s, r);
                }
                async fetchFromRemote(e, t) {
                    var r, o, i;
                    this.logger.info("fetch cloud product start");
                    const a = await this.restOperations.get(e, {
                        timeout: 5e3,
                        baseURL: n.ContainerUtil.get(d.ProductManager).getEndpoint()
                    });
                    let l = null === (r = null == a ? void 0 : a.data) || void 0 === r ? void 0 : r.data;
                    return this.logger.info("fetch cloud product finish, result empty " + (void 0 === l ? 1 : 0)), void 0 === l && (l = {}), this.configuration = null !== (i = null === (o = null == a ? void 0 : a.data) || void 0 === o ? void 0 : o.data) && void 0 !== i ? i : {}, t && await this.saveCache(t, this.configuration), this.configuration;
                }
                async saveCache(e, t) {
                    var r;
                    const o = null !== (r = await this.localStorage.get(s, [])) && void 0 !== r ? r : [], i = o.findIndex((t)=>t.userId === e);
                    for(-1 !== i && o.splice(i, 1), o.push({
                        userId: e,
                        data: t,
                        ts: Date.now()
                    }); o.length > 20;)o.shift();
                    await this.localStorage.set(s, o), this.logger.info(`Saving product configuration to cache (LRU): ${this.safeStringify(t)}`, e);
                }
                sleep(e) {
                    return new Promise((t)=>setTimeout(t, e));
                }
                safeStringify(e) {
                    try {
                        return JSON.stringify(e);
                    } catch (t) {
                        return `${e}`;
                    }
                }
                constructor(){
                    this.retrying = !1;
                }
            };
            t.CloudProductManagerImpl = u, o([
                (0, n.Autowired)(n.Logger),
                i("design:type", Object)
            ], u.prototype, "logger", void 0), o([
                (0, n.Autowired)(a.RestOperations),
                i("design:type", Function)
            ], u.prototype, "restOperations", void 0), o([
                (0, n.Autowired)(c.LocalStorage),
                i("design:type", Object)
            ], u.prototype, "localStorage", void 0), o([
                (0, n.Autowired)(c.UserinfoProvider),
                i("design:type", Object)
            ], u.prototype, "userinfoProvider", void 0), o([
                (0, n.PostConstruct)(),
                i("design:type", Function),
                i("design:paramtypes", []),
                i("design:returntype", void 0)
            ], u.prototype, "init", null), t.CloudProductManagerImpl = u = o([
                (0, n.Component)(d.CloudProductManager)
            ], u);
        },
        88137: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        88822: function(e, t, r) {
            var o = this && this.__decorate || function(e, t, r, o) {
                var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);
                else for(var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
                return n > 3 && a && Object.defineProperty(t, r, a), a;
            }, i = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DefaultProductMerger = void 0;
            const n = r(15985), a = r(78680);
            let l = class DefaultProductMerger {
                async merge(...e) {
                    let t = {};
                    for (const r of e)for (const e of this.productMergeStrategies)if (await e.support(r)) {
                        t = await e.merge(t, r);
                        break;
                    }
                    return delete t.mergeStrategy, t;
                }
            };
            t.DefaultProductMerger = l, o([
                (0, n.Autowired)(a.ProductMergeStrategy),
                i("design:type", Array)
            ], l.prototype, "productMergeStrategies", void 0), t.DefaultProductMerger = l = o([
                (0, n.Component)(a.ProductMerger)
            ], l);
        },
        88895: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        98670: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        99630: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }
    }
]); //# sourceMappingURL=6020.ca0b5ca70a696b0d7db6.js.map
