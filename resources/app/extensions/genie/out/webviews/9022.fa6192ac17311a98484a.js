"use strict";
(self.webpackChunk_genie_chat_webview_app = self.webpackChunk_genie_chat_webview_app || []).push([
    [
        9022
    ],
    {
        369: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        679: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        696: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TaskStatus = void 0, function(e) {
                e.FINISH = "completed", e.IDLE = "waiting", e.RUNNING = "in-progress", e.ERROR = "error";
            }(r || (t.TaskStatus = r = {}));
        },
        1111: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChatSelectionController = void 0, t.ChatSelectionController = Symbol("ChatSelectionController");
        },
        1649: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        2187: (e, t)=>{
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
        2455: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ParameterParseState = void 0, function(e) {
                e.NOT_STARTED = "not_started", e.PARSING = "parsing", e.COMPLETED = "completed", e.ERROR = "error";
            }(r || (t.ParameterParseState = r = {}));
        },
        2589: (e, t)=>{
            var r, o;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LogOutputStrategy = t.LogLevel = void 0, function(e) {
                e[e.Verbose = 0] = "Verbose", e[e.Debug = 1] = "Debug", e[e.Info = 2] = "Info", e[e.Warning = 3] = "Warning", e[e.Error = 4] = "Error";
            }(r || (t.LogLevel = r = {})), function(e) {
                e.Console = "console", e.File = "file";
            }(o || (t.LogOutputStrategy = o = {}));
        },
        3488: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        3902: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MemoryControlService = t.MemoryViewService = void 0, t.MemoryViewService = Symbol("MemoryViewService"), t.MemoryControlService = Symbol("MemoryControlService");
        },
        4427: function(e, t, r) {
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
            }), i(r(78414), t);
        },
        4579: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConversationService = void 0, t.ConversationService = Symbol("ConversationService");
        },
        7679: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ToolNames = t.ToolStatus = void 0;
            var o = r(49536);
            Object.defineProperty(t, "ToolStatus", {
                enumerable: !0,
                get: function() {
                    return o.ToolState;
                }
            });
            var i = r(27315);
            Object.defineProperty(t, "ToolNames", {
                enumerable: !0,
                get: function() {
                    return i.ToolName;
                }
            });
        },
        10354: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ToolStreamParser = void 0;
            const o = r(15985), i = r(2455);
            t.ToolStreamParser = class ToolStreamParser {
                addEventListener(e) {
                    this.listeners.add(e);
                }
                removeEventListener(e) {
                    this.listeners.delete(e);
                }
                emit(e) {
                    var t;
                    const r = "parameter_update" === e.type ? `${e.type}-${e.toolCallId}-${e.parameter}-${JSON.stringify(e.value)}` : `${e.type}-${e.toolCallId}-${e.parameter || ""}`;
                    if ("parameter_update" !== e.type) {
                        if (this.emittedEvents.has(r)) return;
                        this.emittedEvents.add(r);
                    }
                    "parameter_complete" === e.type && (null === (t = this.logger) || void 0 === t || t.info(`参数解析完成: ${e.toolCallId} - 参数: ${e.parameter} - 值: ${e.value}`));
                    for (const t of this.listeners)t(e);
                }
                processStreamChunk(e) {
                    var t, r, o, i;
                    const a = e.chunk.type, n = e.chunk;
                    if ("tool-call-streaming-start" === a) {
                        const e = n.toolCallId, r = n.toolName;
                        null === (t = this.logger) || void 0 === t || t.info(`tool-call-streaming-start 开始解析: ${e} - ${r}`), e && r && this.initializeToolCall(e, r);
                    } else if ("tool-call-delta" === a) {
                        const t = n.toolCallId, o = e.chunk.argsTextDelta;
                        t && o && !this.isParseResultCompleted(t) && (this.processToolCallDelta(t, o), this.isBufferDataComplete(t) && (null === (r = this.logger) || void 0 === r || r.info(`tool-call-delta 缓冲区数据完整, toolCallId: ${t}, 认为已解析完成, 等待 3 秒后调用 finalizeToolCall`, "processStreamChunk"), setTimeout(()=>{
                            var r;
                            null === (r = this.logger) || void 0 === r || r.info(`tool-call-delta 定时器回调 finalizeToolCall, toolCallId: ${t}`, "processStreamChunk"), this.finalizeToolCall(t, e);
                        }, 3e3)));
                    } else if ("tool-call" === a) {
                        const t = n.toolCallId;
                        t && !this.isParseResultCompleted(t) ? (null === (o = this.logger) || void 0 === o || o.info(`tool-call 缓冲区数据完整, toolCallId: ${t}, 认为已解析完成, 调用 finalizeToolCall`, "processStreamChunk"), this.finalizeToolCall(t, e)) : null === (i = this.logger) || void 0 === i || i.info(`tool-call, result already completed, toolCallId: ${t}`, "processStreamChunk");
                    }
                }
                canProcessStreamChunkType(e) {
                    return "tool-call-streaming-start" === e || "tool-call-delta" === e || "tool-call" === e;
                }
                processStreamEvent(e) {
                    "tool-call-streaming-start" === e.type ? this.initializeToolCall(e.toolCallId, e.toolName) : "tool-call-delta" === e.type && e.argsTextDelta && this.processToolCallDelta(e.toolCallId, e.argsTextDelta);
                }
                initializeToolCall(e, t) {
                    const r = {
                        toolCallId: e,
                        toolName: t,
                        parameters: new Map,
                        rawArgs: "",
                        completed: !1,
                        hasErrors: !1
                    };
                    this.parseResults.set(e, r), this.jsonBuffer.set(e, "");
                }
                processToolCallDelta(e, t) {
                    const r = this.parseResults.get(e);
                    if (!r) return;
                    r.rawArgs += t;
                    const o = (this.jsonBuffer.get(e) || "") + t;
                    this.jsonBuffer.set(e, o), this.tryParseJson(e, o);
                }
                isBufferDataComplete(e) {
                    const t = this.jsonBuffer.get(e) || "";
                    if ("" === t) return !1;
                    try {
                        const e = JSON.parse(t);
                        return Object.keys(e).length > 0;
                    } catch (e) {
                        return !1;
                    }
                }
                isParseResultCompleted(e) {
                    const t = this.parseResults.get(e);
                    return !!t && t.completed;
                }
                tryParseJson(e, t) {
                    const r = this.parseResults.get(e);
                    if (r) try {
                        const o = JSON.parse(t);
                        this.updateParameters(e, o), r.hasErrors = !1;
                    } catch (o) {
                        const i = this.isMalformedJson(t), a = this.trySmartParse(t);
                        r.completed = !1, r.hasErrors = i && !a, r.hasErrors && this.emit({
                            type: "parse_error",
                            toolCallId: e,
                            error: o.message,
                            timestamp: Date.now()
                        }), a && this.updateParameters(e, a);
                    }
                }
                isMalformedJson(e) {
                    const t = e.trim();
                    if (!t.startsWith("{")) return !1;
                    let r = 0, o = !1, i = !1;
                    for(let e = 0; e < t.length; e++){
                        const a = t[e];
                        "\\" !== a || i ? ('"' !== a || i || (o = !o), o || ("{" === a && r++, "}" === a && r--), i = !1) : i = !0;
                    }
                    if (o || r > 0) return !1;
                    if (r < 0) return !0;
                    if (0 === r && !o) {
                        const e = t.indexOf(":");
                        if (e > 0) {
                            if (!t.substring(0, e).trim().endsWith('"')) return !0;
                        }
                        const r = t.match(/:\s*([^,}]*)/);
                        if (r) {
                            const e = r[1].trim();
                            if (e && !e.startsWith('"') && !e.startsWith("[") && !e.startsWith("{") && !e.match(/^-?\d+(\.\d+)?$/) && ![
                                "true",
                                "false",
                                "null"
                            ].includes(e)) return !0;
                        }
                    }
                    return !1;
                }
                trySmartParse(e) {
                    const t = e.trim();
                    if (t.startsWith("{")) try {
                        return JSON.parse(t);
                    } catch (e) {
                        const r = t.split(","), o = {};
                        let i = "";
                        for (const e of r)if (e.includes(":")) {
                            const [t, ...r] = e.split(":"), a = t.replace(/[{}"']/g, "").trim(), n = r.join(":").trim();
                            if (i = a, n.startsWith('"')) {
                                if (!n.endsWith('"') || n.endsWith('\\"')) {
                                    o[a] = this.unescapeJsonString(n.slice(1));
                                    continue;
                                }
                                try {
                                    o[a] = JSON.parse(n);
                                    continue;
                                } catch (e) {
                                    o[a] = this.unescapeJsonString(n.slice(1, -1));
                                    continue;
                                }
                            }
                            const l = n.match(/^(-?\d+(\.\d+)?)([,}].*)?$/);
                            if (l) {
                                o[a] = parseFloat(l[1]);
                                continue;
                            }
                            const c = n.match(/^(true|false)([,}].*)?$/);
                            if (c) {
                                o[a] = "true" === c[1];
                                continue;
                            }
                            if ("true".startsWith(n) || "false".startsWith(n)) continue;
                            if (n.match(/^-?\d+$/)) {
                                o[a] = parseInt(n, 10);
                                continue;
                            }
                            o[a] = this.unescapeJsonString(n.replace(/["}].*$/, ""));
                        }
                        return i && void 0 === o[i] && delete o[i], Object.keys(o).length > 0 ? o : void 0;
                    }
                }
                unescapeJsonString(e) {
                    return e.endsWith("\\") && !e.endsWith("\\\\") ? e : e.replace(/\\([\\/"'bfnrt])/g, (e, t)=>({
                            "\\": "\\",
                            "/": "/",
                            '"': '"',
                            "'": "'",
                            b: "\b",
                            f: "\f",
                            n: "\n",
                            r: "\r",
                            t: "\t"
                        })[t] || e);
                }
                updateParameters(e, t) {
                    const r = this.parseResults.get(e);
                    if (!r) return;
                    const o = new Map;
                    r.parameters.forEach((e, t)=>{
                        o.set(t, e.value);
                    });
                    const a = Object.keys(t), n = Array.from(r.parameters.keys());
                    a.filter((e)=>!n.includes(e)).length > 0 && r.parameters.forEach((t, r)=>{
                        t.state !== i.ParameterParseState.PARSING || t.completed || (t.state = i.ParameterParseState.COMPLETED, t.completed = !0, this.emit({
                            type: "parameter_complete",
                            toolCallId: e,
                            parameter: r,
                            value: t.value,
                            timestamp: Date.now()
                        }));
                    });
                    for (const [o, a] of Object.entries(t)){
                        const t = r.parameters.get(o), n = !t, l = t && t.value !== a, c = void 0 === a, s = {
                            name: o,
                            type: typeof a,
                            value: a,
                            rawText: JSON.stringify(a),
                            state: i.ParameterParseState.PARSING,
                            completed: !1
                        };
                        t && (c ? (s.state = i.ParameterParseState.PARSING, s.completed = !1) : (s.state = t.state, s.completed = t.completed)), r.parameters.set(o, s), n ? (this.emit({
                            type: "parameter_start",
                            toolCallId: e,
                            parameter: o,
                            value: s.value,
                            timestamp: Date.now()
                        }), c || void 0 === a || this.emit({
                            type: "parameter_update",
                            toolCallId: e,
                            parameter: o,
                            value: s.value,
                            timestamp: Date.now()
                        })) : l && !c && this.emit({
                            type: "parameter_update",
                            toolCallId: e,
                            parameter: o,
                            value: s.value,
                            timestamp: Date.now()
                        });
                    }
                    const l = new Set(Object.keys(t));
                    r.parameters.forEach((e, t)=>{
                        l.has(t) || r.parameters.delete(t);
                    });
                }
                finalizeToolCall(e, t) {
                    var r, o, a, n;
                    const l = this.parseResults.get(e);
                    if (l) if (l.completed) null === (r = this.logger) || void 0 === r || r.info(`finalizeToolCall already completed, toolCallId: ${e}`);
                    else {
                        if (t.chunk.args) {
                            null === (o = this.logger) || void 0 === o || o.info(`finalizeToolCall 使用 chunk.chunk.args 数据, toolCallId: ${e}`);
                            try {
                                const r = JSON.parse(JSON.stringify(t.chunk.args));
                                l.parameters.clear(), this.emittedEvents.clear();
                                for (const [t, o] of Object.entries(r)){
                                    const r = o, a = {
                                        name: t,
                                        type: typeof r,
                                        value: r,
                                        rawText: JSON.stringify(r),
                                        state: i.ParameterParseState.COMPLETED,
                                        completed: !0
                                    };
                                    l.parameters.set(t, a), this.emit({
                                        type: "parameter_update",
                                        toolCallId: e,
                                        parameter: t,
                                        value: r,
                                        timestamp: Date.now()
                                    }), this.emit({
                                        type: "parameter_complete",
                                        toolCallId: e,
                                        parameter: t,
                                        value: r,
                                        timestamp: Date.now()
                                    });
                                }
                                l.hasErrors = !1;
                            } catch (t) {
                                l.hasErrors = !0, this.emit({
                                    type: "parse_error",
                                    toolCallId: e,
                                    error: t.message,
                                    timestamp: Date.now()
                                });
                            }
                        } else {
                            null === (a = this.logger) || void 0 === a || a.info(`finalizeToolCall 没有 args, 使用已解析的 buffer, toolCallId: ${e}`);
                            const t = this.jsonBuffer.get(e) || "";
                            if (t) try {
                                const r = JSON.parse(t);
                                this.updateParameters(e, r), l.hasErrors = !1;
                            } catch (t) {
                                l.hasErrors = !0, this.emit({
                                    type: "parse_error",
                                    toolCallId: e,
                                    error: t.message,
                                    timestamp: Date.now()
                                });
                            }
                            l.parameters.forEach((t, r)=>{
                                t.state !== i.ParameterParseState.PARSING || t.completed || (t.state = i.ParameterParseState.COMPLETED, t.completed = !0, this.emit({
                                    type: "parameter_complete",
                                    toolCallId: e,
                                    parameter: r,
                                    value: t.value,
                                    timestamp: Date.now()
                                }));
                            });
                        }
                        l.completed = !0, this.emit({
                            type: "parse_complete",
                            toolCallId: e,
                            timestamp: Date.now()
                        }), this.jsonBuffer.delete(e), null === (n = this.logger) || void 0 === n || n.info(`finalizeToolCall 解析完成: ${e} - args: ${JSON.stringify(this.getArgs(e || ""), void 0, 2)}`);
                    }
                }
                getParseResult(e) {
                    return this.parseResults.get(e);
                }
                getParameterValue(e, t) {
                    const r = this.parseResults.get(e);
                    return null == r ? void 0 : r.parameters.get(t);
                }
                isParseCompleted(e) {
                    const t = this.parseResults.get(e);
                    return (null == t ? void 0 : t.completed) || !1;
                }
                clearParseResult(e) {
                    this.parseResults.delete(e), this.jsonBuffer.delete(e);
                }
                clearAll() {
                    this.parseResults.clear(), this.jsonBuffer.clear();
                }
                getArgs(e) {
                    const t = this.parseResults.get(e);
                    if (!t) return {};
                    const r = {};
                    return t.parameters.forEach((e, t)=>{
                        r[t] = e.value;
                    }), r;
                }
                getToolCallName(e) {
                    const t = this.parseResults.get(e);
                    return (null == t ? void 0 : t.toolName) || "";
                }
                getStats() {
                    const e = this.parseResults.size;
                    let t = 0, r = 0;
                    return this.parseResults.forEach((e)=>{
                        e.completed && t++, e.hasErrors && r++;
                    }), {
                        totalToolCalls: e,
                        completedToolCalls: t,
                        errorToolCalls: r,
                        activeToolCalls: e - t
                    };
                }
                constructor(){
                    var e;
                    this.parseResults = new Map, this.listeners = new Set, this.jsonBuffer = new Map, this.emittedEvents = new Set;
                    try {
                        this.logger = o.ContainerUtil.get(o.Logger), null === (e = this.logger) || void 0 === e || e.setContext("StreamParser");
                    } catch (e) {}
                }
            };
        },
        13005: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        14629: (e, t)=>{
            var r, o, i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.changeFileTools = t.TOOL_STATUS = t.TOOL_EVENT_NAME = t.ToolName = t.ToolErrorCode = void 0, function(e) {
                e[e.ReadFileError = 1e3] = "ReadFileError", e[e.WriteFileError = 2e3] = "WriteFileError", e[e.AppendFileError = 3e3] = "AppendFileError", e[e.ReplaceInFileError = 4e3] = "ReplaceInFileError", e[e.ListFilesError = 5e3] = "ListFilesError", e[e.DeleteFilesError = 6e3] = "DeleteFilesError", e[e.SearchFileError = 7e3] = "SearchFileError", e[e.SearchContentError = 7100] = "SearchContentError", e[e.ExecuteCommandError = 8e3] = "ExecuteCommandError", e[e.CompletionError = 9e3] = "CompletionError", e[e.InvalidParameterError = 9e4] = "InvalidParameterError", e[e.UnknownError = 99999] = "UnknownError";
            }(r || (t.ToolErrorCode = r = {})), function(e) {
                e.READ_FILE = "read_file", e.READ_LINTS = "read_lints", e.WRITE_TO_FILE = "write_to_file", e.APPEND_TO_FILE = "append_to_file", e.REPLACE_IN_FILE = "replace_in_file", e.LIST_FILES = "list_files", e.DELETE_FILES = "delete_files", e.EXECUTE_COMMAND = "execute_command", e.COMPLETION = "completion", e.SEARCH_FILE = "search_file", e.SEARCH_CONTENT = "search_content", e.KNOWLEDGE_BASE = "RAG_search", e.CODE_BASE = "semantic_search", e.MCP_SERVER = "mcp_call_tool", e.MCP_DESCRIPTION = "mcp_get_tool_description", e.UNIT_TEST = "unit_test", e.PLAN_ATTEMPT_COMPLETION = "plan_attempt_completion", e.CREATE_TASKS = "create_tasks", e.UPDATE_TASK = "update_task", e.LIST_TASKS = "list_tasks", e.APPEND_TASK = "append_task", e.TODO_WRITE = "todo_write", e.READ_RULES = "read_rules", e.CREATE_RULE = "create_rule", e.PDC_CREATE = "pdc_create", e.PDC_UPDATE = "pdc_update", e.PREVIEW_URL = "preview_url", e.ASK_FOLLOWUP_QUESTION = "ask_followup_question", e.LIST_CODE_DEFINITION_NAMES = "list_code_definition_names", e.CALL_TCB_INTEGRATION = "call_tcb_integration", e.CALL_EOP_INTEGRATION = "call_eop_integration", e.CALL_ANYDEV_INTEGRATION = "call_anydev_integration", e.CALL_LIGHTHOUSE_INTEGRATION = "call_lighthouse_integration", e.SUPABASE_GET_LOGS = "supabase_get_logs", e.SUPABASE_EXECUTE_SQL = "supabase_execute_sql", e.SUPABASE_APPLY_MIGRATION = "supabase_apply_migration", e.SUPABASE_LIST_MIGRATION = "supabase_list_migration", e.SUPABASE_LIST_TABLES = "supabase_list_tables", e.CLOUD_STUDIO_FETCH_LOG = "cloud_studio_fetch_log", e.CLOUD_STUDIO_EXECUTE_COMMAND = "cloud_studio_execute_command", e.CLOUD_STUDIO_DEPLOY_SANDBOX = "cloud_studio_deploy_sandbox", e.WEB_FETCH = "web_fetch", e.WEB_SEARCH = "web_search", e.USE_SKILL = "use_skill", e.TASK = "task";
            }(o || (t.ToolName = o = {})), t.TOOL_EVENT_NAME = "TOOL_CALL_EVENT", function(e) {
                e.IDLE = "Idle", e.RECOGNIZING = "recognizing", e.PENDING = "pending", e.EXECAUTEING = "executing", e.EXECAUTED = "executed", e.FAILED = "failed", e.CANCELLED = "cancelled";
            }(i || (t.TOOL_STATUS = i = {})), t.changeFileTools = [
                o.WRITE_TO_FILE,
                o.APPEND_TO_FILE,
                o.REPLACE_IN_FILE,
                o.DELETE_FILES
            ];
        },
        14810: (e, t)=>{
            var r, o, i, a, n, l;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.KnowledgeBaseType = t.IMentionType = t.ChatSelectionTriggerMode = t.ChatSelectionInfoType = t.ChatRequestSource = t.CodeActionType = void 0, function(e) {
                e.EXPLAIN_CODE = "explainCode", e.CODE_SUMMARY = "codeSummary", e.UNIT_TEST = "unitTest", e.SPOT_BUG = "spotBug", e.CODE_REVIEW = "codeReview", e.NAME_VARIABLE = "nameVariable";
            }(r || (t.CodeActionType = r = {})), function(e) {
                e.CHAT = "chat", e.FLOAT = "float", e.MENU = "menu", e.LIGHT_MENU = "light", e.FOLLOWUP = "follow-up", e.CODELENS = "code-lens", e.TERMINALMENUEXPLAIN = "terminal-menu-explain", e.CODE_REVIEW_FIX = "code-review-fix", e.UNKNOWN = "unknown";
            }(o || (t.ChatRequestSource = o = {})), function(e) {
                e.SELECT_FILE = "select-file", e.AUTO_ADD_CURRENT_FILE = "auto-add-current-file", e.REMOVE_CURRENT_FILE = "remove-current-file", e.CONTEXT = "context";
            }(i || (t.ChatSelectionInfoType = i = {})), function(e) {
                e.AUTO = "auto", e.MENTION = "mention", e.PASTE = "paste";
            }(a || (t.ChatSelectionTriggerMode = a = {})), function(e) {
                e.agent = "topic", e.command = "command", e.variable = "variable", e.knowledge = "knowledge", e.recentFile = "recent-file", e.file = "file", e.folder = "folder", e.code = "code", e.img = "img", e.editor = "editor", e.diff = "diff", e.commit = "commit", e.codebase = "codebase", e.terminal = "terminal", e.problem = "problem", e.rules = "rules", e.web = "web", e.webError = "web-error", e.webSelection = "web-selection", e.git = "git", e.component = "component", e.figmaSelection = "figmaSelection", e.createCommand = "create-command";
            }(n || (t.IMentionType = n = {})), function(e) {
                e.Custom = "custom", e.Common = "common";
            }(l || (t.KnowledgeBaseType = l = {}));
        },
        16417: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        17072: (e, t)=>{
            var r, o, i, a, n, l;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CompletionAcceptMode = t.CompletionActionSource = t.CompletionAction = t.CompletionIntent = t.CompletionTriggerSource = t.CompletionType = void 0, function(e) {
                e.Completion = "completion", e.NES = "nes";
            }(r || (t.CompletionType = r = {})), function(e) {
                e.Auto = "auto", e.Shortcut = "shortcut";
            }(o || (t.CompletionTriggerSource = o = {})), function(e) {
                e.Inline = "inline", e.BlockScope = "block-scope", e.Unknown = "unknown";
            }(i || (t.CompletionIntent = i = {})), function(e) {
                e.Accept = "accept", e.Reject = "reject";
            }(a || (t.CompletionAction = a = {})), function(e) {
                e.Tab = "tab", e.ESC = "esc", e.Cursor = "cursor", e.Navigate = "navigate", e.Replaced = "replaced", e.EditorChange = "editor_change", e.WindowBlur = "window_blur";
            }(n || (t.CompletionActionSource = n = {})), function(e) {
                e.Full = "full", e.Partial = "partial", e.Navigate = "navigate";
            }(l || (t.CompletionAcceptMode = l = {}));
        },
        18288: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        19224: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LocalStorage = void 0, t.LocalStorage = Symbol("LocalStorage");
        },
        19577: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        21084: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WorkspaceCreator = void 0, t.WorkspaceCreator = Symbol("WorkspaceCreator");
        },
        23287: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CodeCompletionAgentNames = void 0, function(e) {
                e.CODE_COMPLETION = "CodeCompletion", e.CODE_COMPLETION_NES = "CodeCompletionNes";
            }(r || (t.CodeCompletionAgentNames = r = {}));
        },
        25464: (e, t)=>{
            var r, o;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FeatureToggle = t.ProductFeature = void 0, function(e) {
                e.Chat = "Chat", e.InlineChat = "InlineChat", e.StatusBar = "StatusBar", e.ChatVariable = "ChatVariable", e.InlineCompletions = "InlineCompletions", e.NesCompletions = "NesCompletions", e.MergedNesCompletions = "MergedNesCompletions", e.SlashCommand = "SlashCommand", e.GenerateCommitMessage = "GenerateCommitMessage", e.GenerateReadmeFile = "GenerateReadmeFile", e.ConfigServer = "ConfigServer", e.StopParamPatch = "StopParamPatch", e.OpenAIStyleAPI = "OpenAIStyleAPI", e.SecretKeyRequired = "SecretKeyRequired", e.MultiFileWithPromptParam = "MultiFileWithPromptParam", e.MultiFileWithSeparateParams = "MultiFileWithSeparateParams", e.TrimByIndentation = "TrimByIndentation", e.ASTForCompletions = "ASTForCompletions", e.CompletionsPrefetching = "CompletionsPrefetching", e.NESPrefetchingAfterEmptyCompletion = "NESPrefetchingAfterEmptyCompletion", e.TriggerNESAfterCompletionHasBeenAccepted = "TriggerNESAfterCompletionHasBeenAccepted", e.CursorPositonPrefetching = "CursorPositonPrefetching", e.CompletionsRelatedSnippets = "CompletionsRelatedSnippets", e.NesDocumentActiveChangeTrigger = "NesDocumentActiveChangeTrigger", e.NesCompletionsPrefetching = "NesCompletionsPrefetching", e.RemoveBelowExist = "RemoveBelowExist", e.NesRepeatFilter = "NesRepeatFilter", e.NesRepeatFilterV2 = "NesRepeatFilterV2", e.NesRangeFix = "NesRangeFix", e.CompletionsResultFusion = "CompletionsResultFusion", e.ChatHistory = "ChatHistory", e.InlineChatSelectionAppendToResult = "InlineChatSelectionAppendToResult", e.ChatFollowup = "ChatFollowup", e.CRLFCompatible = "CRLFCompatible", e.CodeAction = "CodeAction", e.CodeActionIDE = "CodeActionIDE", e.InlineChatIntentRecognition = "InlineChatIntentRecognition", e.MultiStepCompletions = "MultiStepCompletions", e.Codebase = "Codebase", e.UseDefaultModelIfCurrentNotInList = "UseDefaultModelIfCurrentNotInList", e.Mcp = "Mcp", e.McpMarket = "McpMarket", e.MemoryManagement = "MemoryManagement", e.McpInstallationGuide = "McpInstallationGuide", e.SelectImage = "SelectImage", e.Aegis = "Aegis", e.Billing = "Billing", e.AutoMode = "AutoMode", e.CodeSelectionActions = "CodeSelectionActions";
            }(r || (t.ProductFeature = r = {})), function(e) {
                e.SupportHttpsAgentProxy = "SupportHttpsAgentProxy";
            }(o || (t.FeatureToggle = o = {}));
        },
        26930: function(e, t, r) {
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
            }), i(r(36282), t), i(r(36845), t), i(r(39044), t);
        },
        27315: function(e, t, r) {
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
            }), i(r(41092), t), i(r(75747), t), i(r(88135), t), i(r(80957), t), i(r(62259), t), i(r(86807), t), i(r(46447), t), i(r(98798), t), i(r(67162), t), i(r(13005), t), i(r(98853), t), i(r(19224), t), i(r(48142), t);
        },
        27645: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        28406: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        30107: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.McpAgentDispatcher = void 0, t.McpAgentDispatcher = Symbol("McpAgentDispatcher");
        },
        35101: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Ripgrep = void 0, t.Ripgrep = Symbol("Ripgrep");
        },
        35958: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        36282: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        36845: (e, t)=>{
            var r, o, i, a;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RuleProvider = t.RuleTrigger = t.RuleScope = t.RuleType = void 0, function(e) {
                e.ALWAYS = "always", e.MANUAL = "manual", e.REQUESTED = "requested";
            }(r || (t.RuleType = r = {})), function(e) {
                e.PROJECT = "project", e.USER = "user";
            }(o || (t.RuleScope = o = {})), function(e) {
                e.ALWAYS_ON = "always-on", e.MANUAL = "manual", e.AGENT_REQUESTED = "agent-requested";
            }(i || (t.RuleTrigger = i = {})), function(e) {
                e.INTERNAL = "internal";
            }(a || (t.RuleProvider = a = {}));
        },
        37211: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        37305: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        38873: (e, t)=>{
            var r, o;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IdeChatMode = t.IdeLifecycleActionType = void 0, function(e) {
                e.Start = "start", e.Heartbeat = "heartbeat", e.End = "end";
            }(r || (t.IdeLifecycleActionType = r = {})), function(e) {
                e.Ask = "ask", e.Agent = "agent";
            }(o || (t.IdeChatMode = o = {}));
        },
        39044: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RulesViewsService = t.RulesService = void 0, t.RulesService = Symbol("RulesService"), t.RulesViewsService = Symbol("RulesViewsService");
        },
        40523: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PlatformConfigViewService = t.PlatformConfigService = void 0, t.PlatformConfigService = Symbol("PlatformConfigService"), t.PlatformConfigViewService = Symbol("PlatformConfigViewService");
        },
        41092: function(e, t, r) {
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
            }), i(r(96795), t), i(r(88988), t), i(r(47730), t), i(r(17072), t), i(r(67471), t), i(r(51738), t), i(r(3488), t), i(r(50559), t), i(r(81681), t), i(r(38873), t), i(r(37211), t), i(r(54765), t), i(r(18288), t);
        },
        42783: (e, t)=>{
            var r, o;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChatState = t.ChatStateEvent = t.ChatStateService = t.ChatStateViewService = void 0, t.ChatStateViewService = Symbol("ChatStateViewService"), t.ChatStateService = Symbol("ChatStateService"), function(e) {
                e.INPUT = "input", e.RESPONSE = "responses", e.REWRITE = "rewrite", e.STOP = "stop", e.ERROR = "error", e.RETRY = "retry", e.PLAN_READY = "plan_ready", e.PLAN_START = "plan_start";
            }(r || (t.ChatStateEvent = r = {})), function(e) {
                e.IDLE = "idle", e.TALKING = "talking", e.PLAN = "plan";
            }(o || (t.ChatState = o = {}));
        },
        43260: function(e, t, r) {
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
            }), i(r(7679), t), i(r(77166), t), i(r(89174), t), i(r(14810), t), i(r(696), t), i(r(81790), t), i(r(679), t);
        },
        43348: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CompatibilityChecker = void 0, t.CompatibilityChecker = Symbol("CompatibilityChecker");
        },
        44245: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UpdateApiVersion = void 0, function(e) {
                e.V2 = "v2";
            }(r || (t.UpdateApiVersion = r = {}));
        },
        46447: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        47484: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DataEventService = void 0, t.DataEventService = Symbol("DataEventService");
        },
        47730: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UserAuthActionType = void 0, function(e) {
                e.Login = "login", e.Logout = "logout";
            }(r || (t.UserAuthActionType = r = {}));
        },
        48142: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        49536: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ToolEvent = t.ToolState = t.StreamEventType = t.ToolStreamParser = t.ToolCallResult = t.ToolCallErrorCode = t.ParseResult = t.ParseEventListener = t.ParseEvent = t.ParameterValue = t.Parameter = t.ParameterParseState = void 0;
            const o = r(369);
            Object.defineProperty(t, "StreamEventType", {
                enumerable: !0,
                get: function() {
                    return o.StreamEventType;
                }
            });
            const i = r(10354);
            Object.defineProperty(t, "ToolStreamParser", {
                enumerable: !0,
                get: function() {
                    return i.ToolStreamParser;
                }
            });
            const a = r(2455);
            Object.defineProperty(t, "ParameterParseState", {
                enumerable: !0,
                get: function() {
                    return a.ParameterParseState;
                }
            }), Object.defineProperty(t, "ParameterValue", {
                enumerable: !0,
                get: function() {
                    return a.ParameterValue;
                }
            }), Object.defineProperty(t, "ParseEvent", {
                enumerable: !0,
                get: function() {
                    return a.ParseEvent;
                }
            }), Object.defineProperty(t, "ParseEventListener", {
                enumerable: !0,
                get: function() {
                    return a.ParseEventListener;
                }
            }), Object.defineProperty(t, "ParseResult", {
                enumerable: !0,
                get: function() {
                    return a.ParseResult;
                }
            });
            const n = r(56077);
            var l, c;
            Object.defineProperty(t, "Parameter", {
                enumerable: !0,
                get: function() {
                    return n.Parameter;
                }
            }), Object.defineProperty(t, "ToolCallErrorCode", {
                enumerable: !0,
                get: function() {
                    return n.ToolCallErrorCode;
                }
            }), Object.defineProperty(t, "ToolCallResult", {
                enumerable: !0,
                get: function() {
                    return n.ToolCallResult;
                }
            }), function(e) {
                e.IDLE = "idle", e.PARSING = "parsing", e.PENDING = "pending", e.STREAM_EXECUTING = "stream_executing", e.FULL_EXECUTING = "full_executing", e.EXECUTED = "executed", e.SKIPPED = "skipped", e.FAILED = "failed", e.CANCELLED = "cancelled", e.DESTROYED = "destroyed";
            }(l || (t.ToolState = l = {})), function(e) {
                e.PARAMETER_START_PARSING = "parameter_start_parsing", e.PARAMETER_UPDATED = "parameter_updated", e.KEY_PARAMETERS_PARSED = "key_parameters_parsed", e.PARAMETER_VALIDATED = "parameter_validated", e.PARAMETER_VALIDATION_FAILED = "parameter_validation_failed", e.USER_CONFIRM_REQUIRED = "user_confirm_required", e.USER_CONFIRMED = "user_confirmed", e.USER_REJECTED = "user_rejected", e.USER_SKIPPED = "user_skipped", e.EXECUTION_STARTED = "execution_started", e.EXECUTION_SKIPPED = "execution_skipped", e.EXECUTION_RESULT_CHANGED = "execution_result_changed", e.EXECUTION_COMPLETED = "execution_completed", e.EXECUTION_PROGRESS = "execution_progress", e.EXECUTION_FAILED = "execution_failed", e.EXECUTION_CANCELLED = "execution_cancelled", e.ERROR = "error", e.DESTROYED = "destroyed";
            }(c || (t.ToolEvent = c = {}));
        },
        50559: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        51738: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        52601: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        54765: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EventProcessor = void 0, t.EventProcessor = Symbol("EventProcessor");
        },
        55055: function(e, t, r) {
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
            }), i(r(60205), t);
        },
        55872: (e, t)=>{
            var r, o, i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.McpServer = t.McpTool = t.McpWebviewServerConnectionStatus = t.InstallMcpResponseStatus = t.McpStdioCommandType = void 0, function(e) {
                e.UNKOWN = "", e.NPX = "npx", e.UVX = "uvx";
            }(r || (t.McpStdioCommandType = r = {})), function(e) {
                e.SUCCESS = "success", e.FAILURE = "failure", e.RUNNING = "running";
            }(o || (t.InstallMcpResponseStatus = o = {})), function(e) {
                e.CONNECTED = "connected", e.CONNECTING = "connecting", e.DISCONNECTED = "disconnected", e.DISABLE = "disable";
            }(i || (t.McpWebviewServerConnectionStatus = i = {}));
            let McpTool = class McpTool {
                static from(e) {
                    return new McpTool(e);
                }
                validateParameters(e) {
                    return this.parameters.every((t)=>!t.required || t.name in e);
                }
                getIdentifier() {
                    return this.id || this.name;
                }
                constructor(e){
                    this.parameters = [], this.enabled = !0, Object.assign(this, e);
                }
            };
            t.McpTool = McpTool;
            t.McpServer = class McpServer {
                constructor(e){
                    this.status = "connecting", this.resources = [], this.resourceTemplates = [], this.tools = [], Object.assign(this, e);
                }
            };
        },
        56077: (e, t)=>{
            var r, o;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ToolCallName = t.ToolCallErrorCode = void 0, function(e) {
                e.Success = "0", e.ReadFileError = "1000", e.WriteFileError = "2000", e.AppendFileError = "3000", e.ReplaceInFileError = "4000", e.ReplaceExecuteError = "4001", e.ReplaceTimeoutError = "4002", e.ReplaceNoMatchesError = "4003", e.ReplaceNoContentChangedError = "4004", e.ReplaceUnKnownError = "4005", e.ReplaceCommitFileError = "4006", e.ReplaceVscodeError = "4007", e.ListFilesError = "5000", e.DeleteFilesError = "6000", e.SearchFileError = "7000", e.SearchContentError = "7100", e.ExecuteCommandError = "8000", e.CompletionError = "9000", e.McpCallToolError = "10000", e.InvalidParameterError = "90000", e.ExecuteError = "90001", e.ExecuteTimeoutError = "90002", e.ToolTimeoutError = "90003", e.UnknownError = "99999";
            }(r || (t.ToolCallErrorCode = r = {})), function(e) {
                e.LIST_FILES = "list_files", e.SEARCH_FILE = "search_file", e.SEARCH_CONTENT = "search_content", e.READ_FILE = "read_file", e.READ_LINTS = "read_lints", e.REPLACE_IN_FILE = "replace_in_file", e.DELETE_FILES = "delete_files", e.WRITE_TO_FILE = "write_to_file", e.EXECUTE_COMMAND = "execute_command", e.PLAN_ATTEMPT_COMPLETION = "plan_attempt_completion", e.RAG_SEARCH = "RAG_search", e.OJ_BUILD_COMMAND = "oj_build_command", e.CREATE_TASKS = "create_tasks", e.UPDATE_TASK = "update_task", e.LIST_TASKS = "list_tasks", e.APPEND_TASK = "append_task", e.TODO_WRITE = "todo_write", e.RULE_MATCH = "rule_match", e.READ_RULES = "read_rules", e.CREATE_RULE = "create_rule", e.MCP_CALL = "mcp_call_tool", e.MCP_DESCRIPTION = "mcp_get_tool_description", e.PREVIEW_URL = "preview_url", e.PDC_CREATE = "pdc_create", e.PDC_UPDATE = "pdc_update", e.ASK_FOLLOWUP_QUESTION = "ask_followup_question", e.LIST_CODE_DEFINITION_NAMES = "list_code_definition_names", e.CALL_TCB_INTEGRATION = "call_tcb_integration", e.CALL_EOP_INTEGRATION = "call_eop_integration", e.CALL_LIGHTHOUSE_INTEGRATION = "call_lighthouse_integration", e.CALL_ANYDEV_INTEGRATION = "call_anydev_integration", e.SUPABASE_GET_LOGS = "supabase_get_logs", e.SUPABASE_EXECUTE_SQL = "supabase_execute_sql", e.SUPABASE_APPLY_MIGRATION = "supabase_apply_migration", e.SUPABASE_LIST_MIGRATION = "supabase_list_migration", e.SUPABASE_LIST_TABLES = "supabase_list_tables", e.CLOUD_STUDIO_FETCH_LOG = "cloud_studio_fetch_log", e.CLOUD_STUDIO_EXECUTE_COMMAND = "cloud_studio_execute_command", e.CLOUD_STUDIO_DEPLOY_SANDBOX = "cloud_studio_deploy_sandbox", e.COMPONENT_GET_PROMPT = "component_get_prompt", e.WEB_FETCH = "web_fetch", e.USE_SKILL = "use_skill", e.WEB_SEARCH = "web_search", e.TASK = "task";
            }(o || (t.ToolCallName = o = {}));
        },
        56154: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SchemaService = void 0, t.SchemaService = Symbol("SchemaService");
        },
        57084: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        57778: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        58775: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BillingService = t.BillingViewService = t.PlanTaskService = t.FileService = t.ImageService = t.ActivityService = t.FCPTraceService = t.CheckpointService = t.ToolService = t.FileTreeService = t.AgentDispatcher = t.PlanTaskViewService = t.ActivityViewService = t.CheckpointViewService = t.FileTreeViewService = t.MigurationSettingService = t.ChatViewService = t.ChatStreamReceiver = t.ChatService = t.Events = void 0, function(e) {
                e.CHAT_CLICK = "chat_click_event", e.VOTE_LIKE_DISLIKE = "vote_like_dislike", e.ACTIVITY_NOTIFY = "activity_notify";
            }(r || (t.Events = r = {})), t.ChatService = Symbol("ChatService"), t.ChatStreamReceiver = Symbol("ChatStreamReceiver"), t.ChatViewService = Symbol("ChatViewService"), t.MigurationSettingService = Symbol("MigurationSettingService"), t.FileTreeViewService = Symbol("FileTreeViewService"), t.CheckpointViewService = Symbol("CheckpointViewService"), t.ActivityViewService = Symbol("ActivityViewService"), t.PlanTaskViewService = Symbol("PlanTaskViewService"), t.AgentDispatcher = Symbol("AgentDispatcher"), t.FileTreeService = Symbol("FileTreeService"), t.ToolService = Symbol("ToolService"), t.CheckpointService = Symbol("CheckpointService"), t.FCPTraceService = Symbol("FCPTraceService"), t.ActivityService = Symbol("ActivityService"), t.ImageService = Symbol("ImageService"), t.FileService = Symbol("FileService"), t.PlanTaskService = Symbol("PlanTaskService"), t.BillingViewService = Symbol("BillingViewService"), t.BillingService = Symbol("BillingService");
        },
        59758: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        60205: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PreviewWebviewService = void 0, t.PreviewWebviewService = Symbol("PreviewWebviewService");
        },
        60317: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConfigService = void 0, t.ConfigService = Symbol("ConfigService");
        },
        60499: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AuthenticationType = void 0, function(e) {
                e.CUSTOM_TOKEN = "custom-token", e.WECHAT = "wechat", e.EXTERNAL_LINK = "external-link", e.EXTERNAL_LINK_V2 = "external-link-v2", e.IDE_HOST = "ide-host", e.CUSTOM_HOSTNAME = "custom-hostname";
            }(r || (t.AuthenticationType = r = {}));
        },
        61104: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DevService = void 0, t.DevService = Symbol("DevService");
        },
        62259: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        64419: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FileFrom = void 0, function(e) {
                e.Select = "select", e.Drag = "drag", e.Figma = "figma";
            }(r || (t.FileFrom = r = {}));
        },
        65037: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SubagentsService = t.SubagentsViewService = void 0, t.SubagentsViewService = Symbol("SubagentsViewService"), t.SubagentsService = Symbol("SubagentsService");
        },
        66125: function(e, t, r) {
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
            }), i(r(76280), t);
        },
        67162: function(e, t, r) {
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
            }), i(r(83760), t), i(r(64419), t), i(r(27645), t), i(r(28406), t), i(r(92567), t), i(r(37305), t), i(r(23287), t), i(r(14629), t), i(r(74504), t);
        },
        67471: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CodeEditSource = void 0, function(e) {
                e.All = "all", e.Completion = "completion", e.Nes = "nes", e.Agent = "agent", e.Apply = "apply", e.Edit = "edit", e.Ask = "ask";
            }(r || (t.CodeEditSource = r = {}));
        },
        67556: (e, t)=>{
            var r, o, i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DEFAULT_MERGE_STRATEGY = t.MergeStrategy = t.DeploymentType = t.Platform = void 0, function(e) {
                e.VSCode = "vscode", e.Jetbrains = "jetbrains";
            }(r || (t.Platform = r = {})), function(e) {
                e.SaaS = "SaaS", e.CloudHosted = "Cloud-Hosted", e.SelfHosted = "Self-Hosted";
            }(o || (t.DeploymentType = o = {})), function(e) {
                e.Override = "override", e.Merge = "merge", e.SmartMerge = "smartMerge";
            }(i || (t.MergeStrategy = i = {})), t.DEFAULT_MERGE_STRATEGY = i.SmartMerge;
        },
        69022: function(e, t, r) {
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
            }), i(r(43260), t), i(r(58775), t), i(r(4579), t), i(r(82752), t), i(r(79136), t), i(r(78173), t), i(r(69309), t), i(r(60317), t), i(r(30107), t), i(r(55872), t), i(r(47484), t), i(r(61104), t), i(r(42783), t), i(r(1111), t), i(r(35101), t), i(r(21084), t), i(r(43348), t), i(r(88742), t), i(r(40523), t), i(r(35958), t), i(r(26930), t), i(r(69861), t), i(r(3902), t), i(r(66125), t), i(r(4427), t), i(r(55055), t), i(r(3902), t), i(r(88825), t), i(r(79016), t), i(r(86497), t), i(r(65037), t), i(r(56154), t);
        },
        69309: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AuthenticationService = void 0, t.AuthenticationService = Symbol("AuthenticationService");
        },
        69861: function(e, t, r) {
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
            }), i(r(52601), t), i(r(69992), t);
        },
        69992: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GitViewService = t.GitService = void 0, t.GitService = Symbol("GitService"), t.GitViewService = Symbol("GitViewService");
        },
        73145: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Agent = void 0;
            var o = r(73754);
            Object.defineProperty(t, "Agent", {
                enumerable: !0,
                get: function() {
                    return o.Agent;
                }
            });
        },
        73754: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AgentPublisherType = void 0, function(e) {
                e.User = "user", e.Global = "Global", e.Enterprise = "enterprise";
            }(r || (t.AgentPublisherType = r = {}));
        },
        74504: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Usage = t.RunError = void 0;
            t.RunError = class RunError {
                constructor(e, t){
                    this.error = e, this.code = t;
                }
            };
            let Usage = class Usage {
                add(e) {
                    return new Usage(this.inputTokens + e.inputTokens, this.outputTokens + e.outputTokens);
                }
                constructor(e, t){
                    this.inputTokens = e, this.outputTokens = t, this.totalTokens = this.inputTokens + this.outputTokens;
                }
            };
            t.Usage = Usage;
        },
        74724: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        75747: function(e, t, r) {
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
            }), i(r(67556), t), i(r(60499), t), i(r(44245), t), i(r(25464), t), i(r(74724), t), i(r(2187), t), i(r(73754), t), i(r(82792), t), i(r(19577), t), i(r(98495), t), i(r(57084), t), i(r(86789), t), i(r(1649), t), i(r(59758), t), i(r(57778), t), i(r(82088), t), i(r(16417), t), i(r(44245), t), i(r(2589), t), i(r(88965), t), i(r(73145), t), i(r(88702), t), i(r(83892), t);
        },
        76280: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GeneralViewService = t.GeneralService = void 0, t.GeneralService = Symbol("GeneralService"), t.GeneralViewService = Symbol("GeneralViewService");
        },
        77166: (e, t)=>{
            var r, o, i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FileFrom = t.ReferenceNames = t.AssistantMessageContentType = void 0, function(e) {
                e.TEXT = "text", e.REASONING = "reasoning", e.TOOL_CALL = "tool-call";
            }(r || (t.AssistantMessageContentType = r = {})), function(e) {
                e.Agent = "topic", e.Knowledge = "knowledge", e.File = "file", e.Img = "img", e.Editor = "editor", e.Diff = "diff", e.Commit = "commit", e.Codebase = "codebase", e.Folder = "folder", e.Terminal = "terminal", e.Code = "code", e.Problem = "problem", e.Rules = "rules", e.WebError = "web-error", e.WebSelection = "web-selection", e.Git = "git", e.Figma = "figmaSelection";
            }(o || (t.ReferenceNames = o = {})), function(e) {
                e.Select = "select", e.Drag = "drag", e.Figma = "figma";
            }(i || (t.FileFrom = i = {}));
        },
        78173: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.McpViewService = void 0, t.McpViewService = Symbol("McpViewService");
        },
        78414: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IntegrationsService = t.IntegrationsViewService = void 0, t.IntegrationsViewService = Symbol("IntegrationsViewService"), t.IntegrationsService = Symbol("IntegrationsService");
        },
        79016: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProductViewService = t.ProductService = void 0, t.ProductService = Symbol("ProductService"), t.ProductViewService = Symbol("ProductViewService");
        },
        79136: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CreatePosition = t.FileSearchService = void 0, t.FileSearchService = Symbol("FileSearchService"), function(e) {
                e.USER = "user", e.DESK = "desktop";
            }(r || (t.CreatePosition = r = {}));
        },
        80957: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        81681: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        81790: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        82088: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        82752: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CodeBlockService = void 0, t.CodeBlockService = Symbol("CodeBlockService");
        },
        82792: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        83760: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        83892: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProductProvider = void 0, t.ProductProvider = Symbol("ProductProvider");
        },
        86497: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SkillsService = t.SkillsViewService = void 0, t.SkillsViewService = Symbol("SkillsViewService"), t.SkillsService = Symbol("SkillsService");
        },
        86789: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        86807: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Scope = void 0, function(e) {
                e[e.Request = 0] = "Request", e[e.Singleton = 1] = "Singleton", e[e.Transient = 2] = "Transient";
            }(r || (t.Scope = r = {}));
        },
        88135: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        88702: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        88742: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NewChatViewServie = t.NewChatServie = void 0, t.NewChatServie = Symbol("NewChatServie"), t.NewChatViewServie = Symbol("NewChatViewServie");
        },
        88825: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CHAT_PLAN_MODE = t.CHAT_AUTO_MODEL_GLOBAL_MAP = t.CHAT_AUTO_MODEL_MAP = t.CONVERSATION_SESSION_DATA = t.CODEBASE_STATUS = t.ASK_SETTINGS = t.CRAFT_SETTINGS = t.ModelSettingsKey = t.ModelSettingsKeyOld = t.CHAT_MODEL_THINKING_GLOBAL_MAP = t.CHAT_MODEL_THINKING_MAP = t.CHAT_SELECTED_MODEL_GLOBAL_MAP = t.CHAT_SELECTED_MODEL_MAP = t.CHAT_SELECTED_MODE = t.ConfigViewService = void 0, t.ConfigViewService = Symbol("ConfigViewService"), t.CHAT_SELECTED_MODE = "chatSelectedMode", t.CHAT_SELECTED_MODEL_MAP = "chatSelectedModelMapV2", t.CHAT_SELECTED_MODEL_GLOBAL_MAP = "chatSelectedModelGlobalMap", t.CHAT_MODEL_THINKING_MAP = "chatModelThinkingMap", t.CHAT_MODEL_THINKING_GLOBAL_MAP = "chatModelThinkingGlobalMap", t.ModelSettingsKeyOld = "Tencent-Cloud.coding-copilot.modelSetting", t.ModelSettingsKey = "modelSettingsKey", t.CRAFT_SETTINGS = "craftSettings", t.ASK_SETTINGS = "askSettings", t.CODEBASE_STATUS = "codebaseStatus", t.CONVERSATION_SESSION_DATA = "conversationSessionData", t.CHAT_AUTO_MODEL_MAP = "chatAutoModelMap", t.CHAT_AUTO_MODEL_GLOBAL_MAP = "chatAutoModelGlobalMap", t.CHAT_PLAN_MODE = "chatPlanMode";
        },
        88965: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        88988: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        89174: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChatType = void 0, function(e) {
                e.CRAFT = "craft", e.ASK = "ask";
            }(r || (t.ChatType = r = {}));
        },
        92567: (e, t)=>{
            var r, o;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FileType = t.FileNodeStatus = void 0, function(e) {
                e.PENDING = "pending", e.IDLE = "idle", e.ACCEPTED = "accepted", e.REJECTED = "rejected", e.ERROR = "error";
            }(r || (t.FileNodeStatus = r = {})), function(e) {
                e.FILE = "file", e.FOLDER = "folder";
            }(o || (t.FileType = o = {}));
        },
        96795: (e, t)=>{
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Events = void 0, function(e) {
                e.UserAuthAction = "user_auth_action", e.PluginStatus = "plugin_status", e.Craft = "craft", e.CraftEditFile = "craft_edit_file", e.CraftTerminalExecution = "craft_terminal_execution", e.CraftFileApplyStatus = "craft_file_apply_status", e.CraftLimitCall = "craft_limit_call", e.CraftRequestEvent = "craft_request", e.CraftButtonClick = "craft_button_op", e.ChatClick = "chat_click_event", e.VoteLikeDislike = "vote_like_dislike", e.PageExposure = "page_show", e.PageClick = "page_button_click", e.PageLoad = "page_load", e.ChatRequestSend = "chat_request_send", e.ChatRequestResponse = "chat_request_response", e.ChatMessageSend = "chat_message_send", e.ChatMessageResponse = "chat_message_response", e.ChatMessageStatus = "chat_message_status", e.ChatToolAction = "chat_tool_action", e.ChatFileAction = "chat_file_action", e.ChatUserAction = "chat_user_action", e.ChatMaxTokenReached = "chat_max_token_reached", e.FileReceivingRejection = "craft_file_op", e.CompletionTrigger = "completion_trigger", e.CompletionResponse = "completion_response", e.CompletionAction = "completion_action", e.CompletionPostAccept = "completion_post_accept", e.CompletionModelFileOperation = "file_op", e.CommitGenerate = "commit_generate", e.CommitGenerateCancel = "commit_generate_cancel", e.CodeEdit = "code_edit", e.DocumentChange = "document_change", e.ActivityNotify = "activity_notify", e.McpToolCall = "mcp_tool_call", e.McpServerAction = "mcp_action", e.McpSettingsChange = "mcp_settings_change", e.IdeLifecycle = "ide_lifecycle", e.IdeFigmaUpload = "ide_figma_upload", e.IdePictureClick = "ide_picture_click", e.IdePictureUpload = "ide_picture_upload", e.IdeIntergrationClick = "ide_intergration_click", e.IdeIntergrationAuthClick = "ide_intergration_auth_click", e.IdeIntergrationAuthSuccess = "ide_intergration_auth_success", e.IdeSandboxClick = "ide_sandbox_click", e.IdeSandboxCreateLink = "ide_sandbox_create_link", e.WebElementShow = "web_element_show", e.WebElementClick = "web_element_click";
            }(r || (t.Events = r = {}));
        },
        98495: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        98798: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        98853: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }
    }
]); //# sourceMappingURL=9022.fa6192ac17311a98484a.js.map
