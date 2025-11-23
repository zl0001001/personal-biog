"use strict";
(self.webpackChunk_genie_chat_webview_app = self.webpackChunk_genie_chat_webview_app || []).push([
    [
        6243
    ],
    {
        3533: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ToolViewServiceImpl = t.ToolViewService = void 0;
            const n = i(15985), s = i(69022), c = i(58127);
            t.ToolViewService = Symbol("ToolViewService");
            let o = class ToolViewServiceImpl {
                get toolService() {
                    return c.RpcUtils.getProxy(s.ToolService);
                }
                async cancel(e, t) {
                    this.toolService.cancel(e, t);
                }
                async execute(e, t) {
                    this.toolService.execute(e, t);
                }
                async ignore(e, t) {
                    this.toolService.ignore(e, t);
                }
            };
            t.ToolViewServiceImpl = o, t.ToolViewServiceImpl = o = r([
                (0, n.Component)(t.ToolViewService)
            ], o);
        },
        3678: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NewChatViewServieImpl = void 0;
            const n = i(15985), s = i(69022), c = i(58127), o = i(97317);
            let a = class NewChatViewServieImpl {
                get service() {
                    return c.RpcUtils.getProxy(s.NewChatServie);
                }
                ifShowConfirm(e) {
                    this.confimNewChatSubject.next(e);
                }
                inConversation(e) {
                    this.service.inConversation(e);
                }
                startNewChat() {
                    this.service.startNewChat();
                }
                constructor(){
                    this.confimNewChatSubject = new o.Subject, this.ignoreClearInputSubject = new o.Subject;
                }
            };
            t.NewChatViewServieImpl = a, t.NewChatViewServieImpl = a = r([
                (0, n.Component)(s.NewChatViewServie)
            ], a);
        },
        5409: function(e, t, i) {
            var r, n, s = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MessageConnectionImpl = void 0;
            const c = i(15985), o = i(58127), a = null !== (n = null === (r = window.acquireVsCodeApi) || void 0 === r ? void 0 : r.call(window)) && void 0 !== n ? n : window.parent, l = new c.Emitter;
            window.addEventListener("message", (e)=>{
                l.fire(e.data);
            });
            let v = class MessageConnectionImpl {
                send(e) {
                    a.postMessage(e);
                }
                constructor(){
                    this.onMessage = l.event;
                }
            };
            t.MessageConnectionImpl = v, t.MessageConnectionImpl = v = s([
                (0, c.Component)(o.MessageConnection)
            ], v);
        },
        7911: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SubagentsViewServiceImpl = void 0;
            const n = i(15985), s = i(69022), c = i(58127);
            let o = class SubagentsViewServiceImpl {
                get subagentsService() {
                    return this._subagentsService || (this._subagentsService = c.RpcUtils.getProxy(s.SubagentsService)), this._subagentsService;
                }
                async getSubagents() {
                    return this.subagentsService.getSubagents();
                }
                async getSubagent(e) {
                    return this.subagentsService.getSubagent(e);
                }
                async getSubagentContent(e) {
                    return this.subagentsService.getSubagentContent(e);
                }
                async reloadSubagents() {
                    return this.subagentsService.reloadSubagents();
                }
                async showSubagents() {
                    const e = await this.subagentsService.showSubagents();
                    return Promise.resolve(e);
                }
                async openSubagentFile(e) {
                    return this.subagentsService.openSubagentFile(e);
                }
                async deleteSubagent(e) {
                    return this.subagentsService.deleteSubagent(e);
                }
                async updateSubagent(e) {
                    return this.subagentsService.updateSubagent(e);
                }
                async addSubagent(e) {
                    return this.subagentsService.addSubagent(e);
                }
                async validModelList() {
                    return await this.subagentsService.validModelList();
                }
                async validToolList() {
                    return await this.subagentsService.validToolList();
                }
                async covertCompatibleToolNames(e) {
                    return await this.subagentsService.covertCompatibleToolNames(e);
                }
                async getAllMCPServerNames() {
                    return await this.subagentsService.getAllMCPServerNames();
                }
                async execute(e) {
                    return await this.subagentsService.execute(e);
                }
                async cancel(e) {
                    return await this.subagentsService.cancel(e);
                }
                initializeFileWatchers() {
                    return this.subagentsService.initializeFileWatchers();
                }
                onSubagentsChanged(e) {
                    this._changeCallbacks.forEach((t)=>{
                        t(e);
                    });
                }
                registerSubagentsChangedCallback(e) {
                    this._changeCallbacks.push(e);
                }
                removeSubagentsChangedCallback(e) {
                    const t = this._changeCallbacks.indexOf(e);
                    t > -1 && this._changeCallbacks.splice(t, 1);
                }
                dispose() {
                    return this.subagentsService.dispose();
                }
                constructor(){
                    this._changeCallbacks = [];
                }
            };
            t.SubagentsViewServiceImpl = o, t.SubagentsViewServiceImpl = o = r([
                (0, n.Component)(s.SubagentsViewService)
            ], o);
        },
        9280: (e, t, i)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IdentifierUtils = void 0;
            const r = i(89829);
            var n;
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
            }(n || (t.IdentifierUtils = n = {}));
        },
        10643: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GitViewServiceImpl = t.GitViewService = void 0;
            const n = i(15985), s = i(69022), c = i(58127);
            var o = i(69022);
            Object.defineProperty(t, "GitViewService", {
                enumerable: !0,
                get: function() {
                    return o.GitViewService;
                }
            });
            let a = class GitViewServiceImpl {
                get gitService() {
                    return this._gitService || (this._gitService = c.RpcUtils.getProxy(s.GitService)), this._gitService;
                }
                searchRecentCommits(e) {
                    return this.gitService.searchRecentCommits(e);
                }
                searchCommits(e) {
                    return this.gitService.searchCommits(e);
                }
                isGitRepository(e) {
                    return this.gitService.isGitRepository(e);
                }
            };
            t.GitViewServiceImpl = a, t.GitViewServiceImpl = a = r([
                (0, n.Component)(s.GitViewService)
            ], a);
        },
        13773: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SkillsViewServiceImpl = void 0;
            const n = i(15985), s = i(69022), c = i(58127);
            let o = class SkillsViewServiceImpl {
                get skillsService() {
                    return this._skillsService || (this._skillsService = c.RpcUtils.getProxy(s.SkillsService)), this._skillsService;
                }
                async getSkills() {
                    return this.skillsService.getSkills();
                }
                async getSkill(e) {
                    return this.skillsService.getSkill(e);
                }
                async getSkillContent(e) {
                    return this.skillsService.getSkillContent(e);
                }
                async reloadSkills() {
                    return this.skillsService.reloadSkills();
                }
                async showSkills() {
                    const e = await this.skillsService.showSkills();
                    return Promise.resolve(e);
                }
                async openSkillFile(e) {
                    return this.skillsService.openSkillFile(e);
                }
                async deleteSkill(e) {
                    return this.skillsService.deleteSkill(e);
                }
                async updateSkill(e) {
                    return this.skillsService.updateSkill(e);
                }
                async addSkill(e) {
                    return this.skillsService.addSkill(e);
                }
                async importSkillFolder(e) {
                    return this.skillsService.importSkillFolder(e);
                }
            };
            t.SkillsViewServiceImpl = o, t.SkillsViewServiceImpl = o = r([
                (0, n.Component)(s.SkillsViewService)
            ], o);
        },
        14864: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            }, n = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RPCProviderImpl = void 0;
            const s = i(15985), c = i(90169);
            let o = class RPCProviderImpl {
                provide() {
                    if (!this.rpc) {
                        const e = s.ContainerProvider.provide();
                        if (!e.isBound(c.MessageConnection)) {
                            const e = new Error("MessageConnection is not injected into the container");
                            throw this.logger.error(e), e;
                        }
                        const t = e.get(c.MessageConnection);
                        this.rpc = new c.RPCImpl(t);
                    }
                    return this.rpc;
                }
            };
            t.RPCProviderImpl = o, r([
                (0, s.Autowired)(s.Logger),
                n("design:type", Object)
            ], o.prototype, "logger", void 0), t.RPCProviderImpl = o = r([
                (0, s.Component)(c.RPCProvider)
            ], o);
        },
        16333: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DataReportViewServiceImpl = void 0;
            const n = i(15985), s = i(69022), c = i(58127), o = i(47392), a = i(75982);
            let l = class DataReportViewServiceImpl {
                get service() {
                    return c.RpcUtils.getProxy(s.DataEventService);
                }
                report(e, t, i) {
                    return this.service.report(e, t, i);
                }
                modelReport(e, t, i) {
                    return this.service.modelReport(e, t, i);
                }
                getReportEventMap() {
                    return o.Events;
                }
            };
            t.DataReportViewServiceImpl = l, t.DataReportViewServiceImpl = l = r([
                (0, n.Component)(a.DataReportViewService)
            ], l);
        },
        16644: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ActivityViewServiceImpl = void 0;
            const n = i(15985), s = i(69022), c = i(58127), o = i(97317);
            let a = class ActivityViewServiceImpl {
                get activityService() {
                    return c.RpcUtils.getProxy(s.ActivityService);
                }
                syncActivities(e) {
                    this.activitiesObserver.next(e);
                }
                async triggerGetActivities() {
                    return this.activityService.triggerGetActivities();
                }
                sendCloseNotifyActivity(e) {
                    this.activityService.sendCloseNotifyActivity(e);
                }
                constructor(){
                    this.activitiesObserver = new o.BehaviorSubject([]);
                }
            };
            t.ActivityViewServiceImpl = a, t.ActivityViewServiceImpl = a = r([
                (0, n.Component)(s.ActivityViewService)
            ], a);
        },
        16744: function(e, t, i) {
            var r = i(78), n = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            }, s = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            }, c = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FileTreeViewServiceImpl = void 0;
            const o = i(15985), a = i(69022), l = i(58127), v = c(i(83753)), h = i(97317);
            let u = class FileTreeViewServiceImpl {
                startSmartRefresh() {
                    this.refreshInterval = setInterval(async ()=>{
                        try {
                            this.refresh();
                        } catch (e) {
                            r.warn("[fileTreeView] Smart refresh check failed:", e);
                        }
                    }, 5e3);
                }
                dispose() {
                    this.refreshInterval && (clearInterval(this.refreshInterval), this.refreshInterval = null);
                }
                get fileTreeService() {
                    return l.RpcUtils.getProxy(a.FileTreeService);
                }
                async getFileTree() {
                    return this.throttledGetFileTree();
                }
                async acceptFile(e, t) {
                    const i = await this.fileTreeService.acceptFile(e, t);
                    return i && this.refresh(), i;
                }
                async rejectFile(e, t) {
                    const i = await this.fileTreeService.rejectFile(e, t);
                    return i && this.refresh(), i;
                }
                async acceptFiles(e) {
                    const t = await this.fileTreeService.acceptFiles(e);
                    return t && this.refresh(), t;
                }
                async rejectFiles(e) {
                    const t = await this.fileTreeService.rejectFiles(e);
                    return t && this.refresh(), t;
                }
                async refresh() {
                    this.throttledGetFileTree();
                }
                async reportFileOperation(e, t, i) {
                    return this.fileTreeService.reportFileOperation(e, t, i);
                }
                async getFileCurrentStatus(e) {
                    return this.fileTreeService.getFileCurrentStatus(e);
                }
                constructor(){
                    this.fileTreeObserver = new h.BehaviorSubject([]), this.throttledGetFileTree = (0, v.default)(()=>this.fileTreeService.getFileTree().then((e)=>{
                            try {
                                const t = JSON.stringify(e);
                                return void 0 !== this.lastTreeSnapshot && this.lastTreeSnapshot === t || (this.lastTreeSnapshot = t, this.fileTreeObserver.next(e)), e;
                            } catch (e) {
                                return r.error("error update tree", e), [];
                            }
                        }), 500), this.lastTreeSnapshot = void 0, this.refresh(), this.startSmartRefresh();
                }
            };
            t.FileTreeViewServiceImpl = u, t.FileTreeViewServiceImpl = u = n([
                (0, o.Component)(a.FileTreeViewService),
                s("design:paramtypes", [])
            ], u);
        },
        18198: function(e, t, i) {
            var r = i(78), n = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChatStreamReceiverImpl = void 0;
            const s = i(15985), c = i(69022);
            let o = class ChatStreamReceiverImpl {
                onChunk(e, t) {
                    r.log(`Received chunk for request ${e}: ${JSON.stringify(t)}`);
                }
            };
            t.ChatStreamReceiverImpl = o, t.ChatStreamReceiverImpl = o = n([
                (0, s.Component)(c.ChatStreamReceiver)
            ], o);
        },
        28702: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PlanTaskViewServiceImpl = void 0;
            const n = i(15985), s = i(69022), c = i(58127), o = i(97317);
            let a = class PlanTaskViewServiceImpl {
                get planTaskService() {
                    return c.RpcUtils.getProxy(s.PlanTaskService);
                }
                async getTasks() {
                    const e = await this.planTaskService.getTasks();
                    return this.planTaskObserver.next(e), e;
                }
                async refresh(e) {
                    this.planTaskObserver.next(e);
                }
                async addTask(e) {
                    if (!e.id) {
                        const t = this.planTaskObserver.getValue(), i = Math.max(...t.map((e)=>parseInt(e.id)), 0) + 1;
                        e.id = `${i}`;
                    }
                    return this.planTaskService.addTask(e);
                }
                async updateTask(e) {
                    return e.id ? this.planTaskService.updateTask(e) : this.addTask(e);
                }
                async deleteTask(e) {
                    return this.planTaskService.deleteTask(e);
                }
                constructor(){
                    this.planTaskObserver = new o.BehaviorSubject([]);
                }
            };
            t.PlanTaskViewServiceImpl = a, t.PlanTaskViewServiceImpl = a = r([
                (0, n.Component)(s.PlanTaskViewService)
            ], a);
        },
        32566: function(e, t, i) {
            var r = i(78), n = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SchemaViewServiceImpl = void 0;
            const s = i(15985), c = i(69022), o = i(58127);
            let a = class SchemaViewServiceImpl {
                get schemaService() {
                    return o.RpcUtils.getProxy(c.SchemaService);
                }
                async openSchema(e) {
                    r.log("openSchema", e), this.schemaService.openSchema(e);
                }
            };
            t.SchemaViewServiceImpl = a, t.SchemaViewServiceImpl = a = n([
                (0, s.Component)(c.SchemaService)
            ], a);
        },
        35274: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BillingViewServiceImpl = void 0;
            const n = i(15985), s = i(69022), c = i(58127), o = i(97317);
            let a = class BillingViewServiceImpl {
                get billingService() {
                    return c.RpcUtils.getProxy(s.BillingService);
                }
                syncBillingNotification(e) {
                    this.billingNotificationObserver.next(e);
                }
                disableNotification(e) {
                    this.billingService.disableNotification(e);
                }
                constructor(){
                    this.billingNotificationObserver = new o.BehaviorSubject({
                        show: !1,
                        message: "",
                        code: void 0,
                        skipUrl: void 0
                    });
                }
            };
            t.BillingViewServiceImpl = a, t.BillingViewServiceImpl = a = r([
                (0, n.Component)(s.BillingViewService)
            ], a);
        },
        38621: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            }, n = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChatStateViewServiceImpl = void 0;
            const s = i(15985), c = i(69022), o = i(97317);
            let a = class ChatStateViewServiceImpl {
                getState() {
                    return this.state;
                }
                event(e) {
                    this.transitions.forEach((t)=>{
                        this.state === t.current && e === t.event && (this.state = t.next, this.stateObserver.next(this.state));
                    });
                }
                constructor(){
                    this.state = c.ChatState.IDLE, this.transitions = [], this.stateObserver = new o.Subject, this.transitions.push({
                        event: c.ChatStateEvent.INPUT,
                        current: c.ChatState.IDLE,
                        next: c.ChatState.TALKING
                    }, {
                        event: c.ChatStateEvent.RESPONSE,
                        current: c.ChatState.TALKING,
                        next: c.ChatState.IDLE
                    }, {
                        event: c.ChatStateEvent.STOP,
                        current: c.ChatState.TALKING,
                        next: c.ChatState.IDLE
                    }, {
                        event: c.ChatStateEvent.ERROR,
                        current: c.ChatState.TALKING,
                        next: c.ChatState.IDLE
                    }, {
                        event: c.ChatStateEvent.RETRY,
                        current: c.ChatState.IDLE,
                        next: c.ChatState.TALKING
                    }, {
                        event: c.ChatStateEvent.STOP,
                        current: c.ChatState.PLAN,
                        next: c.ChatState.IDLE
                    }, {
                        event: c.ChatStateEvent.PLAN_READY,
                        current: c.ChatState.TALKING,
                        next: c.ChatState.PLAN
                    }, {
                        event: c.ChatStateEvent.PLAN_START,
                        current: c.ChatState.PLAN,
                        next: c.ChatState.TALKING
                    });
                }
            };
            t.ChatStateViewServiceImpl = a, t.ChatStateViewServiceImpl = a = r([
                (0, s.Component)(c.ChatStateViewService),
                n("design:paramtypes", [])
            ], a);
        },
        41423: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PlatformConfigServiceImpl = void 0;
            const n = i(15985), s = i(69022), c = i(58127);
            let o = class PlatformConfigServiceImpl {
                get service() {
                    return c.RpcUtils.getProxy(s.PlatformConfigService);
                }
                getIntelligentCreate() {
                    return this.service.getIntelligentCreate();
                }
            };
            t.PlatformConfigServiceImpl = o, t.PlatformConfigServiceImpl = o = r([
                (0, n.Component)(s.PlatformConfigViewService)
            ], o);
        },
        44936: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            }, n = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CodeBlockViewServiceImpl = t.CodeBlockViewService = void 0;
            const s = i(15985), c = i(69022), o = i(39322), a = i(58127);
            t.CodeBlockViewService = Symbol("CodeBlockViewService");
            let l = class CodeBlockViewServiceImpl {
                get service() {
                    return a.RpcUtils.getProxy(c.CodeBlockService);
                }
                init() {
                    this.logger.setContext(t.CodeBlockViewService.description);
                }
                async insertCode(e) {
                    await this.service.insertCode(e);
                }
                async createFile(e) {
                    await this.service.createFile(e);
                }
                async saveFile(e) {
                    await this.service.saveFile(e);
                }
                async downloadMermaidFile(e, t) {
                    const i = this.fileNameService.mermaid(t);
                    await this.service.downloadFile(i, e);
                }
                async previewMermaid(e, t) {
                    const i = this.fileNameService.mermaid(t);
                    await this.service.previewFile(i, e);
                }
                async insertToTerminal(e) {
                    await this.service.insertToTerminal(e);
                }
                cleanCodeFinderCache() {
                    this.service.cleanCodeFinderCache();
                }
                async resolveCode(e, t, i) {
                    const r = Date.now(), n = await this.service.resolveCode(e, t, i), s = Date.now() - r;
                    return this.logger.debug(`resolved (${t}) is (${n}) in ${i.length} files, (${s}ms)`), n;
                }
                openCodeLink(e, t, i) {
                    return this.service.openCodeLink(e, t, i);
                }
                async applyCode(e, t, i) {
                    return this.service.applyCode(e, t, i);
                }
            };
            t.CodeBlockViewServiceImpl = l, r([
                (0, s.Autowired)(s.Logger),
                n("design:type", Object)
            ], l.prototype, "logger", void 0), r([
                (0, s.Autowired)(o.FileNameService),
                n("design:type", Object)
            ], l.prototype, "fileNameService", void 0), r([
                (0, s.PostConstruct)(),
                n("design:type", Function),
                n("design:paramtypes", []),
                n("design:returntype", void 0)
            ], l.prototype, "init", null), t.CodeBlockViewServiceImpl = l = r([
                (0, s.Component)(t.CodeBlockViewService)
            ], l);
        },
        46752: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            }, n = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RPCInstanceRegistry = void 0;
            const s = i(15985), c = i(69022), o = i(58127);
            let a = class RPCInstanceRegistry {
                initialize() {
                    this.rpcRegistry.register(c.ChatStreamReceiver, this.chatStreamReceiver), this.rpcRegistry.register(c.ChatViewService, this.chatViewService), this.rpcRegistry.register(c.ChatStateViewService, this.chatStateViewService), this.rpcRegistry.register(c.ActivityViewService, this.activityViewService), this.rpcRegistry.register(c.BillingViewService, this.billingViewService), this.rpcRegistry.register(c.McpViewService, this.mcpViewService), this.rpcRegistry.register(c.FileTreeViewService, this.fileTreeViewService), this.rpcRegistry.register(c.CheckpointViewService, this.checkpointViewService), this.rpcRegistry.register(c.PlanTaskViewService, this.planTaskViewService), this.rpcRegistry.register(c.RulesViewsService, this.rulesViewsService), this.rpcRegistry.register(c.SkillsViewService, this.skillsViewService), this.rpcRegistry.register(c.SubagentsViewService, this.subagentsViewService), this.rpcRegistry.register(c.MemoryViewService, this.memoryViewService), this.rpcRegistry.register(c.ConfigViewService, this.configViewService), this.rpcRegistry.register(c.GeneralViewService, this.generalViewsService), this.rpcRegistry.register(c.IntegrationsViewService, this.integrationViewService), this.rpcRegistry.register(c.ProductViewService, this.productViewService);
                }
            };
            t.RPCInstanceRegistry = a, r([
                (0, s.Autowired)(c.ChatStreamReceiver),
                n("design:type", Object)
            ], a.prototype, "chatStreamReceiver", void 0), r([
                (0, s.Autowired)(c.RulesViewsService),
                n("design:type", Object)
            ], a.prototype, "rulesViewsService", void 0), r([
                (0, s.Autowired)(c.SkillsViewService),
                n("design:type", Object)
            ], a.prototype, "skillsViewService", void 0), r([
                (0, s.Autowired)(c.SubagentsViewService),
                n("design:type", Object)
            ], a.prototype, "subagentsViewService", void 0), r([
                (0, s.Autowired)(c.MemoryViewService),
                n("design:type", Object)
            ], a.prototype, "memoryViewService", void 0), r([
                (0, s.Autowired)(c.ChatViewService),
                n("design:type", Object)
            ], a.prototype, "chatViewService", void 0), r([
                (0, s.Autowired)(c.ActivityViewService),
                n("design:type", Object)
            ], a.prototype, "activityViewService", void 0), r([
                (0, s.Autowired)(c.BillingViewService),
                n("design:type", Object)
            ], a.prototype, "billingViewService", void 0), r([
                (0, s.Autowired)(o.RPCRegistry),
                n("design:type", Object)
            ], a.prototype, "rpcRegistry", void 0), r([
                (0, s.Autowired)(c.McpViewService),
                n("design:type", Object)
            ], a.prototype, "mcpViewService", void 0), r([
                (0, s.Autowired)(c.FileTreeViewService),
                n("design:type", Object)
            ], a.prototype, "fileTreeViewService", void 0), r([
                (0, s.Autowired)(c.CheckpointViewService),
                n("design:type", Object)
            ], a.prototype, "checkpointViewService", void 0), r([
                (0, s.Autowired)(c.PlanTaskViewService),
                n("design:type", Object)
            ], a.prototype, "planTaskViewService", void 0), r([
                (0, s.Autowired)(c.GeneralViewService),
                n("design:type", Object)
            ], a.prototype, "generalViewsService", void 0), r([
                (0, s.Autowired)(c.IntegrationsViewService),
                n("design:type", Object)
            ], a.prototype, "integrationViewService", void 0), r([
                (0, s.Autowired)(c.ConfigViewService),
                n("design:type", Object)
            ], a.prototype, "configViewService", void 0), r([
                (0, s.Autowired)(c.ProductViewService),
                n("design:type", Object)
            ], a.prototype, "productViewService", void 0), r([
                (0, s.Autowired)(c.ChatStateViewService),
                n("design:type", Object)
            ], a.prototype, "chatStateViewService", void 0), t.RPCInstanceRegistry = a = r([
                (0, s.Component)(s.ApplicationLifecycle)
            ], a);
        },
        48887: function(e, t, i) {
            var r = this && this.__createBinding || (Object.create ? function(e, t, i, r) {
                void 0 === r && (r = i);
                var n = Object.getOwnPropertyDescriptor(t, i);
                n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                    enumerable: !0,
                    get: function() {
                        return t[i];
                    }
                }), Object.defineProperty(e, r, n);
            } : function(e, t, i, r) {
                void 0 === r && (r = i), e[r] = t[i];
            }), n = this && this.__exportStar || function(e, t) {
                for(var i in e)"default" === i || Object.prototype.hasOwnProperty.call(t, i) || r(t, e, i);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(i(5409), t), n(i(18198), t), n(i(46752), t);
        },
        54859: (e, t, i)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProductViewService = void 0;
            const r = i(69022);
            t.ProductViewService = r.ProductViewService;
        },
        58127: function(e, t, i) {
            var r = this && this.__createBinding || (Object.create ? function(e, t, i, r) {
                void 0 === r && (r = i);
                var n = Object.getOwnPropertyDescriptor(t, i);
                n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                    enumerable: !0,
                    get: function() {
                        return t[i];
                    }
                }), Object.defineProperty(e, r, n);
            } : function(e, t, i, r) {
                void 0 === r && (r = i), e[r] = t[i];
            }), n = this && this.__exportStar || function(e, t) {
                for(var i in e)"default" === i || Object.prototype.hasOwnProperty.call(t, i) || r(t, e, i);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(i(90169), t), n(i(59046), t), n(i(14864), t), n(i(9280), t), n(i(81424), t);
        },
        59046: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            }, n = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AgentRegistryImpl = void 0;
            const s = i(15985), c = i(9280), o = i(90169);
            let a = class AgentRegistryImpl {
                async register(e, t) {
                    this.rpcProvider.provide().set(e, t), this.logger.info(`Registered rpc instance ${c.IdentifierUtils.get(e).id}`);
                }
            };
            t.AgentRegistryImpl = a, r([
                (0, s.Autowired)(s.Logger),
                n("design:type", Object)
            ], a.prototype, "logger", void 0), r([
                (0, s.Autowired)(o.RPCProvider),
                n("design:type", Object)
            ], a.prototype, "rpcProvider", void 0), t.AgentRegistryImpl = a = r([
                (0, s.Component)(o.RPCRegistry)
            ], a);
        },
        62001: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FileSearchViewService = void 0, t.FileSearchViewService = Symbol("FileSearchViewService");
        },
        63518: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConversationViewServiceImpl = t.ConversationViewService = void 0;
            const n = i(15985), s = i(69022), c = i(58127);
            t.ConversationViewService = Symbol("ConversationViewService");
            let o = class ConversationViewServiceImpl {
                get service() {
                    return c.RpcUtils.getProxy(s.ConversationService);
                }
                async getCurrentConversation() {
                    return this.service.getCurrentConversation();
                }
                async getConversations() {
                    const e = await this.service.getConversations();
                    return null != e ? e : [];
                }
                async deleteConversation(e) {
                    await this.service.deleteConversation(e);
                }
                async deleteAllConversations() {
                    await this.service.deleteAllConversations();
                }
                async renameConversation(e, t) {
                    await this.service.renameConversation(e, t);
                }
                async setCurrentConversation(e) {
                    await this.service.setCurrentConversation(e);
                }
                async exportConversation(e) {
                    await this.service.exportConversation(e);
                }
                async recoverIndexFromFiles() {
                    await this.service.recoverIndexFromFiles();
                }
            };
            t.ConversationViewServiceImpl = o, t.ConversationViewServiceImpl = o = r([
                (0, n.Component)(t.ConversationViewService)
            ], o);
        },
        72033: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            }, n = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChatViewServiceImpl = void 0;
            const s = i(15985), c = i(69022), o = i(58127), a = i(47392), l = i(97317);
            let v = class ChatViewServiceImpl {
                get chatService() {
                    return o.RpcUtils.getProxy(c.ChatService);
                }
                get chatSelectionController() {
                    return o.RpcUtils.getProxy(c.ChatSelectionController);
                }
                addMessage(e) {
                    this.messageObserver.next(e);
                }
                asyncEnterSetting(e) {
                    this.enterSettingObserver.next(e);
                }
                async getUserInfo() {
                    return this.chatService.getUserInfo();
                }
                async getAegisEnable() {
                    return this.chatService.getAegisEnable();
                }
                async getMemoryManagementEnable() {
                    return this.chatService.getMemoryManagementEnable();
                }
                clear() {
                    return Promise.resolve(void 0);
                }
                initChatConversation() {
                    return this.chatService.initChatConversation();
                }
                async setChatConversation(e) {
                    this.conversationObserver.next(e);
                }
                async getCurrentConversation() {
                    void 0 === this.currentConversationPromise && (this.currentConversationPromise = this.chatService.getCurrentConversation());
                    try {
                        return await this.currentConversationPromise;
                    } finally{
                        this.currentConversationPromise = void 0;
                    }
                }
                async getChatCompletions(e) {
                    return this.chatService.getChatCompletions(e);
                }
                async getCurrentEnterSetting() {
                    return this.chatService.getCurrentEnterSetting();
                }
                async handleWebviewReady() {
                    return this.chatService.handleWebviewReady();
                }
                abort(e, t) {
                    this.chatService.abort(e, t);
                }
                report(e, t) {
                    this.chatService.report(e, t);
                }
                openExternalLink(e, t) {
                    this.chatService.openExternalLink(e, t);
                }
                openExternalLinkWithVerifyBlacklist(e, t) {
                    return this.chatService.openExternalLinkWithVerifyBlacklist(e, t);
                }
                openFile(e, t, i) {
                    return o.RpcUtils.getProxy(c.FileService).openFile(e, t, i);
                }
                openFileWithRange(e, t) {
                    return o.RpcUtils.getProxy(c.FileService).openFileWithRange(e, t);
                }
                openRelativeFileWithRange(e, t, i) {
                    return o.RpcUtils.getProxy(c.FileService).openRelativeFileWithRange(e, t, i);
                }
                showFileContentDiff(e, t, i) {
                    return o.RpcUtils.getProxy(c.FileService).showFileContentDiff(e, t, i);
                }
                windowStateChange(e) {
                    this.windowStateObserver.next(e);
                }
                async activatePage(e) {
                    e.timestamp = Date.now(), this.activePageObserver.next(e);
                }
                addTerminalResult(e, t) {
                    this.terminalResultObserver.next({
                        toolId: e,
                        result: t
                    });
                }
                addToChat(e) {
                    this.addFileObserver.next(e);
                }
                async addWebviewErrorToChat(e) {
                    this.addWebviewErrorObserver.next(e);
                }
                async addWebviewSelectionToChat(e) {
                    this.addWebviewSelectionObserver.next(e);
                }
                async updateDomEditorInfo(e) {
                    this.updateWebviewDomEditorInfoObserver.next(e);
                }
                async addFigmaSelectionToChat(e) {
                    this.addFigmaObserver.next(e);
                }
                async selectImagesToChat() {
                    await this.chatService.selectImagesToChat();
                }
                async openFigmaPage() {
                    return this.chatService.openFigmaPage();
                }
                async saveImagesToChat(e) {
                    await this.chatService.saveImagesToChat(e);
                }
                async addComponentToChat(e) {
                    await this.report(a.Events.IdeComponentClick, {
                        type: e.value
                    }), await this.report(a.Events.IdeComponentAddChat, {
                        type: e.value
                    });
                }
                async triggerAddToChat(e) {
                    await this.chatService.triggerAddToChat(e);
                }
                async triggerSelectionChange() {
                    await this.chatSelectionController.triggerSelectionChange();
                }
                excuteCodeAction(e) {
                    this.codeActionObserver.next(e);
                }
                codebaseStatusChange(e) {
                    this.codebaseObserver.next(e);
                }
                contextSummarizingChange(e) {
                    this.summarizingObserver.next(e);
                }
                switchChatMode(e) {
                    this.configViewService.update(c.CHAT_SELECTED_MODE, e);
                }
                openConfigLink(e, t) {
                    return this.chatService.openConfigLink(e, t);
                }
                getEndPoint() {
                    return this.chatService.getEndPoint();
                }
                visibleChange(e) {
                    this.visibleObserver.next(e);
                }
                checkCompatibility() {
                    return this.chatService.checkCompatibility();
                }
                showMessageInfo(e, t) {
                    return this.chatService.showMessageInfo(e, t);
                }
                async getMessagesPaginated(e, t, i) {
                    return this.chatService.getMessagesPaginated(e, t, i);
                }
                showFileChanges(e, t) {
                    this.chatService.showFileChanges(e, t);
                }
                async clearConversation() {
                    await this.chatService.clearConversation();
                }
                reportPageLoad(e) {
                    o.RpcUtils.getProxy(c.FCPTraceService).reportPageLoad(e);
                }
                async generateEnhancePrompt(e) {
                    return this.chatService.generateEnhancePrompt(e);
                }
                async openSettings() {
                    await this.chatService.openSettings();
                }
                async getEnv() {
                    return this.chatService.getEnv();
                }
                async getPlatformVersion() {
                    return this.chatService.getPlatformVersion();
                }
                async createCommand(e) {
                    return this.chatService.createCommand(e);
                }
                constructor(){
                    this.conversationObserver = new l.Subject, this.messageObserver = new l.Subject, this.activePageObserver = new l.Subject, this.terminalResultObserver = new l.Subject, this.addFileObserver = new l.Subject, this.addWebviewErrorObserver = new l.Subject, this.addWebviewSelectionObserver = new l.Subject, this.updateWebviewDomEditorInfoObserver = new l.Subject, this.addFigmaObserver = new l.Subject, this.codeActionObserver = new l.Subject, this.visibleObserver = new l.Subject, this.codebaseObserver = new l.BehaviorSubject(!1), this.windowStateObserver = new l.Subject, this.enterSettingObserver = new l.Subject, this.summarizingObserver = new l.BehaviorSubject(!1), this.currentConversationPromise = void 0;
                }
            };
            t.ChatViewServiceImpl = v, r([
                (0, s.Autowired)(c.ConfigViewService),
                n("design:type", Object)
            ], v.prototype, "configViewService", void 0), t.ChatViewServiceImpl = v = r([
                (0, s.Component)(c.ChatViewService)
            ], v);
        },
        75385: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RulesViewsServiceImpl = void 0;
            const n = i(15985), s = i(69022), c = i(58127);
            let o = class RulesViewsServiceImpl {
                get rulesService() {
                    return this._rulesService || (this._rulesService = c.RpcUtils.getProxy(s.RulesService)), this._rulesService;
                }
                getRules(e) {
                    return this.rulesService.getRules(e);
                }
                addRule(e) {
                    return this.rulesService.addRule(e);
                }
                updateRule(e) {
                    return this.rulesService.updateRule(e);
                }
                deleteRule(e) {
                    return this.rulesService.deleteRule(e);
                }
                openRuleFile(e) {
                    return this.rulesService.openRuleFile(e);
                }
                getManualRules() {
                    return this.rulesService.getManualRules();
                }
                updateCreateRuleStatus(e, t, i, r) {
                    return this.rulesService.updateCreateRuleStatus(e, t, i, r);
                }
                getTokenLimit() {
                    return this.rulesService.getTokenLimit();
                }
                initializeFileWatchers() {
                    return this.rulesService.initializeFileWatchers();
                }
                onRulesChanged(e) {
                    this._changeCallbacks.forEach((t)=>{
                        t(e);
                    });
                }
                removeRulesChangedCallback(e) {
                    const t = this._changeCallbacks.indexOf(e);
                    t > -1 && this._changeCallbacks.splice(t, 1);
                }
                registerRulesChangedCallback(e) {
                    this._changeCallbacks.push(e);
                }
                openExternal(e) {
                    return this.rulesService.openExternal(e);
                }
                async getRuleMarketUrl() {
                    return await this.rulesService.getRuleMarketUrl();
                }
                async getRuleDocumentUrl() {
                    return await this.rulesService.getRuleDocumentUrl();
                }
                dispose() {
                    return this.rulesService.dispose();
                }
                constructor(){
                    this._changeCallbacks = [];
                }
            };
            t.RulesViewsServiceImpl = o, t.RulesViewsServiceImpl = o = r([
                (0, n.Component)(s.RulesViewsService)
            ], o);
        },
        75982: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DataReportViewService = void 0, t.DataReportViewService = Symbol("DataReportViewService");
        },
        76243: function(e, t, i) {
            var r = this && this.__createBinding || (Object.create ? function(e, t, i, r) {
                void 0 === r && (r = i);
                var n = Object.getOwnPropertyDescriptor(t, i);
                n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                    enumerable: !0,
                    get: function() {
                        return t[i];
                    }
                }), Object.defineProperty(e, r, n);
            } : function(e, t, i, r) {
                void 0 === r && (r = i), e[r] = t[i];
            }), n = this && this.__exportStar || function(e, t) {
                for(var i in e)"default" === i || Object.prototype.hasOwnProperty.call(t, i) || r(t, e, i);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(i(48887), t), n(i(63518), t), n(i(44936), t), n(i(62001), t), n(i(54859), t), n(i(92385), t), n(i(16644), t), n(i(92385), t), n(i(16744), t), n(i(3533), t), n(i(72033), t), n(i(28702), t), n(i(75982), t), n(i(16333), t), n(i(98919), t), n(i(38621), t), n(i(3678), t), n(i(41423), t), n(i(75385), t), n(i(13773), t), n(i(7911), t), n(i(92611), t), n(i(10643), t), n(i(92650), t), n(i(35274), t), n(i(32566), t);
        },
        81424: (e, t, i)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RpcUtils = void 0;
            const r = i(15985), n = i(90169);
            t.RpcUtils = class RpcUtils {
                static getProxy(e) {
                    return r.ContainerUtil.get(n.RPCProvider).provide().getProxy(e);
                }
            };
        },
        90169: (e, t, i)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RPCImpl = t.RPC = t.MessageConnection = t.RPCRegistry = t.RPCProvider = t.RPCService = void 0;
            const r = i(89829), n = i(9280);
            t.RPCService = Symbol("RPCService"), t.RPCProvider = Symbol("RPCProvider"), t.RPCRegistry = Symbol("RPCRegistry"), t.MessageConnection = Symbol("MessageConnection"), t.RPC = Symbol("RPC");
            t.RPCImpl = class RPCImpl {
                getProxy(e) {
                    return this.impl.getProxy(n.IdentifierUtils.get(e));
                }
                getLocal(e) {
                    return this.impl.getLocal(n.IdentifierUtils.get(e));
                }
                set(e, t) {
                    return this.impl.set(n.IdentifierUtils.get(e), t);
                }
                dispose() {
                    this.impl.dispose();
                }
                constructor(e, t){
                    this.impl = new r.RPCImpl(e, t);
                }
            };
        },
        92385: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CheckpointViewServiceImpl = void 0;
            const n = i(15985), s = i(69022), c = i(58127), o = i(97317);
            let a = class CheckpointViewServiceImpl {
                get checkpointService() {
                    return c.RpcUtils.getProxy(s.CheckpointService);
                }
                async rollbackVersion(e) {
                    return this.checkpointService.rollbackVersion(e);
                }
                async restoreToLatestVersion(e) {
                    return this.checkpointService.restoreToLatestVersion(e);
                }
                async deleteRequest(e) {
                    return this.checkpointService.deleteRequest(e);
                }
                async getAllVersions() {
                    const e = await this.checkpointService.getAllVersions();
                    return this.versionsObserver.next(e), e;
                }
                async clearDiscardedVersions() {
                    this.checkpointService.clearDiscardedVersions();
                }
                async getFileChangesBetweenVersions(e, t) {
                    return this.checkpointService.getFileChangesBetweenVersions(e, t);
                }
                async restoreToVersion(e, t) {
                    return this.checkpointService.restoreToVersion(e, t);
                }
                async displayRequestMessage(e) {
                    this.checkpointService.displayRequestMessage(e);
                }
                isDevMode() {
                    return this.checkpointService.isDevMode();
                }
                constructor(){
                    this.versionsObserver = new o.BehaviorSubject([]);
                }
            };
            t.CheckpointViewServiceImpl = a, t.CheckpointViewServiceImpl = a = r([
                (0, n.Component)(s.CheckpointViewService)
            ], a);
        },
        92611: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            }, n = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GeneralViewServiceImpl = void 0;
            const s = i(69022), c = i(15985), o = i(58127);
            let a = class GeneralViewServiceImpl {
                init() {
                    (async ()=>{
                        await this.updateCacheSettings();
                    })();
                }
                async updateCacheSettings() {
                    this.settings = await this.generalService.getSettings([]);
                }
                get generalService() {
                    return this._generalService || (this._generalService = o.RpcUtils.getProxy(s.GeneralService)), this._generalService;
                }
                async getSettings(e) {
                    let t = {};
                    return 0 === Object.keys(this.settings).length ? (t = await this.generalService.getSettings(e), this.settings = {
                        ...this.settings,
                        ...t
                    }, t) : (e.forEach((e)=>{
                        t[e] = this.settings[e];
                    }), t);
                }
                async setSettings(e) {
                    await this.generalService.setSettings(e);
                }
                async getConfigurationProperties(e) {
                    return this.generalService.getConfigurationProperties(e);
                }
                async initializeVscodeSettingsWatchers() {
                    return this.generalService.initializeVscodeSettingsWatchers();
                }
                async vscodeSettingsChanged(e) {
                    this.settings = e, this._changeCallbacks.forEach((e)=>{
                        e();
                    });
                }
                registerVscodeSettingsChangedCallback(e) {
                    this._changeCallbacks.push(e);
                }
                removeVscodeSettingsChangedCallback(e) {
                    this._changeCallbacks = this._changeCallbacks.filter((t)=>t !== e);
                }
                async isNesAvailable() {
                    return this.generalService.isNesAvailable();
                }
                constructor(){
                    this._changeCallbacks = [], this.settings = {};
                }
            };
            t.GeneralViewServiceImpl = a, r([
                (0, c.PostConstruct)(),
                n("design:type", Function),
                n("design:paramtypes", []),
                n("design:returntype", void 0)
            ], a.prototype, "init", null), t.GeneralViewServiceImpl = a = r([
                (0, c.Component)(s.GeneralViewService)
            ], a);
        },
        92650: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IntegrationsViewServiceImpl = void 0;
            const n = i(69022), s = i(15985), c = i(58127);
            let o = class IntegrationsViewServiceImpl {
                get previewWebviewService() {
                    return this._previewWebviewService || (this._previewWebviewService = c.RpcUtils.getProxy(n.PreviewWebviewService)), this._previewWebviewService;
                }
                get integationsService() {
                    return this._integationsService || (this._integationsService = c.RpcUtils.getProxy(n.IntegrationsService)), this._integationsService;
                }
                async getIntegrationViewModels() {
                    const e = await this.integationsService.getIntegrationViewModels();
                    return this.handleIntegrations(e);
                }
                async connectIntegration(e, t, i) {
                    await this.integationsService.connectIntegration(e, t, i);
                }
                async integrationButtonClick(e, t) {
                    await this.integationsService.integrationButtonClick(e, t);
                }
                async getIntegrationGroups() {
                    return this.integationsService.getIntegrationGroups();
                }
                async triggerIntegrationAction(e, t) {
                    await this.integationsService.triggerIntegrationAction(e, t);
                }
                registerIntegrationsChangedCallback(e) {
                    this._changeCallbacks.push(e);
                }
                removeIntegrationsChangedCallback(e) {
                    this._changeCallbacks = this._changeCallbacks.filter((t)=>t !== e);
                }
                onIntegrationsChanged(e) {
                    const t = this.handleIntegrations(e);
                    this._changeCallbacks.forEach((e)=>{
                        e(t);
                    });
                }
                async openWebview(e) {
                    await this.previewWebviewService.open(e);
                }
                async showIntegrations() {
                    const e = await this.integationsService.showIntegrations();
                    return Promise.resolve(e);
                }
                handleIntegrations(e) {
                    return e.map((e)=>{
                        const t = {
                            ...e
                        };
                        return t.status || (t.status = t.isConnected ? "connected" : "disconnected"), t;
                    });
                }
                async workspaceIsEmpty() {
                    return await this.integationsService.workspaceIsEmpty();
                }
                constructor(){
                    this._changeCallbacks = [];
                }
            };
            t.IntegrationsViewServiceImpl = o, t.IntegrationsViewServiceImpl = o = r([
                (0, s.Component)(n.IntegrationsViewService)
            ], o);
        },
        98919: function(e, t, i) {
            var r = this && this.__decorate || function(e, t, i, r) {
                var n, s = arguments.length, c = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, r);
                else for(var o = e.length - 1; o >= 0; o--)(n = e[o]) && (c = (s < 3 ? n(c) : s > 3 ? n(t, i, c) : n(t, i)) || c);
                return s > 3 && c && Object.defineProperty(t, i, c), c;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LoggerViewServiceImpl = void 0;
            const n = i(15985), s = i(58127);
            let c = class LoggerViewServiceImpl {
                get rpcLogger() {
                    return s.RpcUtils.getProxy(n.Logger);
                }
                setContext(e) {
                    this.context = null != e ? e : "";
                }
                info(e, t) {
                    this.rpcLogger.info(e, this.fullContext(t));
                }
                error(e, t) {
                    this.rpcLogger.error(e, this.fullContext(t));
                }
                warn(e, t) {
                    this.rpcLogger.warn(e, this.fullContext(t));
                }
                debug(e, t) {
                    this.rpcLogger.debug(e, this.fullContext(t));
                }
                time(e) {
                    this.rpcLogger.time(e);
                }
                timeEnd(e) {
                    return this.rpcLogger.timeEnd(e, this.fullContext());
                }
                fullContext(e) {
                    return (e = null != e ? e : this.context) ? `${this.innerContext}][${e}` : this.innerContext;
                }
                constructor(){
                    this.innerContext = "Webview", this.context = "";
                }
            };
            t.LoggerViewServiceImpl = c, t.LoggerViewServiceImpl = c = r([
                (0, n.Component)({
                    id: n.Logger,
                    scope: n.Scope.Transient,
                    rebind: !0
                })
            ], c);
        }
    }
]); //# sourceMappingURL=6243.5392de253d9832a97b34.js.map
