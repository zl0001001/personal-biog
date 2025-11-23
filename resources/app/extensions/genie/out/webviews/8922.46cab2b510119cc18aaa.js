"use strict";
(self.webpackChunk_genie_chat_webview_app = self.webpackChunk_genie_chat_webview_app || []).push([
    [
        8922
    ],
    {
        9280: (e, t, i)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IdentifierUtils = void 0;
            const r = i(89829);
            var o;
            !function(e) {
                e.get = function get(e) {
                    let t = e.toString();
                    if ("string" == typeof e) t = e;
                    else if ("symbol" == typeof e) {
                        if (!e.description) throw new Error(`Symbol ${e.toString()} is not a valid identifier`);
                        t = e.description;
                    } else "name" in e && e.name && (t = e.name);
                    return (0, r.createProxyIdentifier)(t);
                };
            }(o || (t.IdentifierUtils = o = {}));
        },
        14864: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var o, n = arguments.length, s = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, r);
                else for(var c = e.length - 1; c >= 0; c--)(o = e[c]) && (s = (n < 3 ? o(s) : n > 3 ? o(t, i, s) : o(t, i)) || s);
                return n > 3 && s && Object.defineProperty(t, i, s), s;
            }, o = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RPCProviderImpl = void 0;
            const n = i(15985), s = i(90169);
            let c = class RPCProviderImpl {
                provide() {
                    if (!this.rpc) {
                        const e = n.ContainerProvider.provide();
                        if (!e.isBound(s.MessageConnection)) {
                            const e = new Error("MessageConnection is not injected into the container");
                            throw this.logger.error(e), e;
                        }
                        const t = e.get(s.MessageConnection);
                        this.rpc = new s.RPCImpl(t);
                    }
                    return this.rpc;
                }
            };
            t.RPCProviderImpl = c, r([
                (0, n.Autowired)(n.Logger),
                o("design:type", Object)
            ], c.prototype, "logger", void 0), t.RPCProviderImpl = c = r([
                (0, n.Component)(s.RPCProvider)
            ], c);
        },
        58127: function(e, t, i) {
            var r = this && this.__createBinding || (Object.create ? function(e, t, i, r) {
                void 0 === r && (r = i);
                var o = Object.getOwnPropertyDescriptor(t, i);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[i];
                    }
                }), Object.defineProperty(e, r, o);
            } : function(e, t, i, r) {
                void 0 === r && (r = i), e[r] = t[i];
            }), o = this && this.__exportStar || function(e, t) {
                for(var i in e)"default" === i || Object.prototype.hasOwnProperty.call(t, i) || r(t, e, i);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(i(90169), t), o(i(59046), t), o(i(14864), t), o(i(9280), t), o(i(81424), t);
        },
        59046: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var o, n = arguments.length, s = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, r);
                else for(var c = e.length - 1; c >= 0; c--)(o = e[c]) && (s = (n < 3 ? o(s) : n > 3 ? o(t, i, s) : o(t, i)) || s);
                return n > 3 && s && Object.defineProperty(t, i, s), s;
            }, o = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AgentRegistryImpl = void 0;
            const n = i(15985), s = i(9280), c = i(90169);
            let l = class AgentRegistryImpl {
                async register(e, t) {
                    this.rpcProvider.provide().set(e, t), this.logger.info(`Registered rpc instance ${s.IdentifierUtils.get(e).id}`);
                }
            };
            t.AgentRegistryImpl = l, r([
                (0, n.Autowired)(n.Logger),
                o("design:type", Object)
            ], l.prototype, "logger", void 0), r([
                (0, n.Autowired)(c.RPCProvider),
                o("design:type", Object)
            ], l.prototype, "rpcProvider", void 0), t.AgentRegistryImpl = l = r([
                (0, n.Component)(c.RPCRegistry)
            ], l);
        },
        66912: (e, t, i)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), i(19606);
            const r = i(15985);
            t.default = (0, r.autoBind)();
        },
        81424: (e, t, i)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RpcUtils = void 0;
            const r = i(15985), o = i(90169);
            t.RpcUtils = class RpcUtils {
                static getProxy(e) {
                    return r.ContainerUtil.get(o.RPCProvider).provide().getProxy(e);
                }
            };
        },
        90169: (e, t, i)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RPCImpl = t.RPC = t.MessageConnection = t.RPCRegistry = t.RPCProvider = t.RPCService = void 0;
            const r = i(89829), o = i(9280);
            t.RPCService = Symbol("RPCService"), t.RPCProvider = Symbol("RPCProvider"), t.RPCRegistry = Symbol("RPCRegistry"), t.MessageConnection = Symbol("MessageConnection"), t.RPC = Symbol("RPC");
            t.RPCImpl = class RPCImpl {
                getProxy(e) {
                    return this.impl.getProxy(o.IdentifierUtils.get(e));
                }
                getLocal(e) {
                    return this.impl.getLocal(o.IdentifierUtils.get(e));
                }
                set(e, t) {
                    return this.impl.set(o.IdentifierUtils.get(e), t);
                }
                dispose() {
                    this.impl.dispose();
                }
                constructor(e, t){
                    this.impl = new r.RPCImpl(e, t);
                }
            };
        }
    }
]); //# sourceMappingURL=8922.46cab2b510119cc18aaa.js.map
