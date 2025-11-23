"use strict";
(self.webpackChunk_genie_chat_webview_app = self.webpackChunk_genie_chat_webview_app || []).push([
    [
        9322
    ],
    {
        16553: function(e, t, r) {
            var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                void 0 === i && (i = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, i, o);
            } : function(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r];
            }), o = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(r(87098), t);
        },
        20221: (e, t, r)=>{
            var i = r(42649), o = r(78);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SmartMemoryMonitor = t.AlertLevel = t.MonitoringMode = void 0;
            const n = r(15985), s = r(79873);
            var a, l;
            !function(e) {
                e.NORMAL = "normal", e.EMERGENCY = "emergency", e.DISABLED = "disabled";
            }(a || (t.MonitoringMode = a = {})), function(e) {
                e.WARNING = "warning", e.CRITICAL = "critical", e.RECOVERED = "recovered";
            }(l || (t.AlertLevel = l = {}));
            t.SmartMemoryMonitor = class SmartMemoryMonitor {
                get logger() {
                    return n.ContainerUtil.get(n.Logger);
                }
                start(e) {
                    this.aegisReportCallback = e, this.logger.info("[SmartMemoryMonitor] Starting intelligent memory monitoring...");
                    const t = setTimeout(()=>{
                        this.establishBaseline(), this.startNormalMonitoring();
                    }, this.config.baselineDelayMs);
                    this.subscriptionManager.addDisposable({
                        dispose: ()=>{
                            clearTimeout(t);
                        }
                    }), this.logger.info(`[SmartMemoryMonitor] Will establish baseline in ${this.config.baselineDelayMs}ms`);
                }
                stop() {
                    this.subscriptionManager.dispose(), this.monitoringInterval && (clearInterval(this.monitoringInterval), this.monitoringInterval = void 0), this.monitoringDisposable = void 0, this.currentMode = a.DISABLED, this.logger.info("[SmartMemoryMonitor] Monitoring stopped");
                }
                clearCurrentMonitoring() {
                    this.monitoringDisposable && (this.subscriptionManager.removeDisposable(this.monitoringDisposable), this.monitoringDisposable = void 0), this.monitoringInterval && (clearInterval(this.monitoringInterval), this.monitoringInterval = void 0);
                }
                detectEnvironment() {
                    var e;
                    const t = null === (e = "production") ? void 0 : e.toLowerCase();
                    return "true" === i.env.VSCODE_DEV || "true" === i.env.CURSOR_DEV || "true" === i.env.DEVELOPMENT || "development" === t || "dev" === t ? "development" : "production";
                }
                establishBaseline() {
                    this.baseline = this.captureMemorySnapshot(), this.logger.info(`[SmartMemoryMonitor] Baseline established: ${this.formatMemorySize(this.baseline.heapUsed)} heap`), this.reportToAegis({
                        type: "memory_alert",
                        level: l.WARNING,
                        data: {
                            baseline: this.baseline,
                            current: this.baseline,
                            growth: 0,
                            consecutiveAlerts: 0,
                            mode: this.currentMode
                        },
                        timestamp: Date.now()
                    });
                }
                startNormalMonitoring() {
                    this.clearCurrentMonitoring(), this.currentMode = a.NORMAL;
                    const e = this.config.intervals[this.environment];
                    this.monitoringInterval = setInterval(()=>{
                        this.performMemoryCheck();
                    }, e), this.monitoringDisposable = {
                        dispose: ()=>{
                            this.monitoringInterval && (clearInterval(this.monitoringInterval), this.monitoringInterval = void 0);
                        }
                    }, this.subscriptionManager.addDisposable(this.monitoringDisposable), this.logger.info(`[SmartMemoryMonitor] Normal monitoring started (${e}ms interval)`);
                }
                startEmergencyMonitoring() {
                    this.currentMode !== a.EMERGENCY && (this.lastReportTime && this.isWithinDailyLimit() ? this.logger.warn("[SmartMemoryMonitor] Daily report limit reached, skipping emergency mode") : (this.clearCurrentMonitoring(), this.currentMode = a.EMERGENCY, this.consecutiveAlerts = 1, this.emergencyRecoveryCount = 0, this.monitoringInterval = setInterval(()=>{
                        this.performEmergencyCheck();
                    }, this.config.emergencyIntervalMs), this.monitoringDisposable = {
                        dispose: ()=>{
                            this.monitoringInterval && (clearInterval(this.monitoringInterval), this.monitoringInterval = void 0);
                        }
                    }, this.subscriptionManager.addDisposable(this.monitoringDisposable), this.logger.warn("[SmartMemoryMonitor] Emergency monitoring activated")));
                }
                performMemoryCheck() {
                    if (!this.baseline) return;
                    const e = this.captureMemorySnapshot(), t = (e.heapUsed - this.baseline.heapUsed) / 1024 / 1024;
                    this.logger.debug(`[SmartMemoryMonitor] Memory growth: ${t.toFixed(2)}MB`), t > this.config.thresholdMB && (this.logger.warn(`[SmartMemoryMonitor] Memory growth detected: ${t.toFixed(2)}MB`), this.reportToAegis({
                        type: "memory_alert",
                        level: l.WARNING,
                        data: {
                            baseline: this.baseline,
                            current: e,
                            growth: t,
                            consecutiveAlerts: 0,
                            mode: this.currentMode
                        },
                        timestamp: Date.now()
                    }), this.startEmergencyMonitoring());
                }
                performEmergencyCheck() {
                    if (!this.baseline) return;
                    const e = this.captureMemorySnapshot(), t = (e.heapUsed - this.baseline.heapUsed) / 1024 / 1024;
                    t > this.config.thresholdMB ? (this.consecutiveAlerts++, this.emergencyRecoveryCount = 0, this.logger.warn(`[SmartMemoryMonitor] Emergency check ${this.consecutiveAlerts}/${this.config.emergencyThreshold}`), this.consecutiveAlerts >= this.config.emergencyThreshold && this.confirmMemoryLeak(e, t)) : (this.emergencyRecoveryCount++, this.logger.info(`[SmartMemoryMonitor] Memory recovered ${this.emergencyRecoveryCount}`), this.emergencyRecoveryCount >= this.config.recoveryThreshold && this.exitEmergencyMode(e));
                }
                async confirmMemoryLeak(e, t) {
                    this.logger.error(`[SmartMemoryMonitor] 🚨 MEMORY LEAK CONFIRMED: ${t.toFixed(2)}MB growth`), this.reportToAegis({
                        type: "memory_leak",
                        level: l.CRITICAL,
                        data: {
                            baseline: this.baseline,
                            current: e,
                            growth: t,
                            consecutiveAlerts: this.consecutiveAlerts,
                            mode: this.currentMode
                        },
                        timestamp: Date.now()
                    }), this.lastReportTime = Date.now(), this.exitEmergencyMode(e);
                }
                exitEmergencyMode(e) {
                    this.logger.info("[SmartMemoryMonitor] Exiting emergency mode"), this.reportToAegis({
                        type: "memory_recovered",
                        level: l.RECOVERED,
                        data: {
                            baseline: this.baseline,
                            current: e,
                            growth: (e.heapUsed - this.baseline.heapUsed) / 1024 / 1024,
                            consecutiveAlerts: this.consecutiveAlerts,
                            mode: this.currentMode
                        },
                        timestamp: Date.now()
                    }), this.consecutiveAlerts = 0, this.emergencyRecoveryCount = 0, this.startNormalMonitoring();
                }
                captureMemorySnapshot() {
                    const e = i.memoryUsage();
                    return {
                        timestamp: Date.now(),
                        heapUsed: e.heapUsed,
                        heapTotal: e.heapTotal,
                        rss: e.rss,
                        external: e.external,
                        pid: i.pid,
                        environment: this.environment
                    };
                }
                reportToAegis(e) {
                    try {
                        this.logger.info(`[SmartMemoryMonitor] 📊 Aegis Report: ${e.type} (${e.level})`), this.logger.info(`[SmartMemoryMonitor] Growth: ${e.data.growth.toFixed(2)}MB, Mode: ${e.data.mode}`), this.aegisReportCallback ? (this.aegisReportCallback(e), this.logger.debug("[SmartMemoryMonitor] Memory alert sent via callback for Aegis reporting")) : (this.logger.warn("[SmartMemoryMonitor] No Aegis callback registered, logging alert to console"), o.log("🚨 MEMORY ALERT (需要回调处理):", {
                            type: e.type,
                            level: e.level,
                            growth: e.data.growth.toFixed(2) + "MB",
                            mode: e.data.mode,
                            environment: e.data.baseline.environment,
                            pid: e.data.current.pid,
                            timestamp: new Date(e.timestamp).toISOString()
                        }));
                    } catch (e) {
                        this.logger.error("[SmartMemoryMonitor] Failed to report to Aegis:", e);
                    }
                }
                isWithinDailyLimit() {
                    if (!this.lastReportTime) return !1;
                    return Date.now() - this.lastReportTime < 60 * this.config.dailyReportLimitHours * 60 * 1e3;
                }
                formatMemorySize(e) {
                    return `${(e / 1024 / 1024).toFixed(2)}MB`;
                }
                getStatus() {
                    return {
                        mode: this.currentMode,
                        environment: this.environment,
                        baseline: this.baseline ? {
                            heapUsed: this.formatMemorySize(this.baseline.heapUsed),
                            timestamp: new Date(this.baseline.timestamp).toISOString()
                        } : void 0,
                        consecutiveAlerts: this.consecutiveAlerts,
                        emergencyRecoveryCount: this.emergencyRecoveryCount,
                        lastReportTime: this.lastReportTime ? new Date(this.lastReportTime).toISOString() : void 0,
                        dailyLimitActive: this.isWithinDailyLimit()
                    };
                }
                constructor(){
                    this.subscriptionManager = new s.SubscriptionManager, this.baseline = void 0, this.currentMode = a.NORMAL, this.monitoringInterval = void 0, this.monitoringDisposable = void 0, this.consecutiveAlerts = 0, this.emergencyRecoveryCount = 0, this.lastReportTime = void 0, this.aegisReportCallback = void 0, this.config = {
                        baselineDelayMs: 3e4,
                        thresholdMB: 10,
                        emergencyIntervalMs: 3e4,
                        emergencyThreshold: 3,
                        recoveryThreshold: 1,
                        dailyReportLimitHours: 24,
                        intervals: {
                            production: 3e5,
                            development: 3e4
                        }
                    }, this.environment = this.detectEnvironment(), this.logger.info(`[SmartMemoryMonitor] Initializing in ${this.environment} mode`);
                }
            };
        },
        23922: function(e, t, r) {
            var i = this && this.__decorate || function(e, t, r, i) {
                var o, n = arguments.length, s = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else for(var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (n < 3 ? o(s) : n > 3 ? o(t, r, s) : o(t, r)) || s);
                return n > 3 && s && Object.defineProperty(t, r, s), s;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FileNameServiceImpl = void 0;
            const o = r(15985), n = r(83359);
            let s = class FileNameServiceImpl {
                mermaid(e) {
                    const { year: t, month: r, day: i } = this.formattedDatetime();
                    return `mermaid_${t}${r}${i}.${e}`;
                }
                history(e) {
                    const { year: t, month: r, day: i, hour: o, minute: n } = this.formattedDatetime(e);
                    return `history_${t}${r}${i}${o}${n}.md`;
                }
                formattedDatetime(e) {
                    const t = e ? new Date(e) : new Date;
                    return {
                        year: String(t.getFullYear()),
                        month: String(t.getMonth() + 1).padStart(2, "0"),
                        day: String(t.getDate()).padStart(2, "0"),
                        hour: String(t.getHours()).padStart(2, "0"),
                        minute: String(t.getMinutes()).padStart(2, "0"),
                        second: String(t.getSeconds()).padStart(2, "0")
                    };
                }
            };
            t.FileNameServiceImpl = s, t.FileNameServiceImpl = s = i([
                (0, o.Component)(n.FileNameService)
            ], s);
        },
        24066: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Encryptor = void 0, t.Encryptor = Symbol("Encryptor");
        },
        28910: function(e, t, r) {
            var i, o = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                void 0 === i && (i = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, i, o);
            } : function(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r];
            }), n = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                });
            } : function(e, t) {
                e.default = t;
            }), s = this && this.__importStar || (i = function(e) {
                return i = Object.getOwnPropertyNames || function(e) {
                    var t = [];
                    for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                    return t;
                }, i(e);
            }, function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for(var r = i(e), s = 0; s < r.length; s++)"default" !== r[s] && o(t, e, r[s]);
                return n(t, e), t;
            }), a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HashUtils = void 0;
            const l = s(r(77045)), c = a(r(59104));
            var h;
            !function(e) {
                e.md5 = function md5(e) {
                    return c.default.hash(e);
                }, e.sha256 = function sha256(e) {
                    return l.sha256().update(e).digest("hex");
                };
            }(h || (t.HashUtils = h = {}));
        },
        33846: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PatchUtils = void 0;
            const i = r(61175);
            t.PatchUtils = class PatchUtils {
                static generatePatch(e, t, r, o, n = "file.ts") {
                    return `@@ Line range: ${e}-${t} @@\n` + (0, i.createPatch)(n, r, o, `a/${n}`, `b/${n}`, {
                        context: 3
                    });
                }
            };
        },
        37589: (e, t, r)=>{
            var i = r(42649);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MemoryMonitor = void 0;
            const o = r(15985), n = r(79873);
            let MemoryMonitor = class MemoryMonitor {
                get logger() {
                    return o.ContainerUtil.get(o.Logger);
                }
                static getInstance(e) {
                    return this.instance || (this.instance = new MemoryMonitor(e)), this.instance;
                }
                startMonitoring() {
                    if (this.isMonitoring) return;
                    this.isMonitoring = !0;
                    const e = setInterval(()=>{
                        const e = this.collectMemoryStats();
                        this.processMemoryStats(e);
                    }, this.options.intervalMs);
                    this.subscriptionManager.addInterval(e), this.logger.info(`[MemoryMonitor] Started monitoring with ${this.options.intervalMs}ms interval`);
                }
                stopMonitoring() {
                    this.isMonitoring && (this.isMonitoring = !1, this.subscriptionManager.dispose(), this.listeners.clear(), this.cleanupHandlers.clear(), this.historyStats = [], this.logger.info("[MemoryMonitor] Stopped monitoring"));
                }
                collectMemoryStats() {
                    const e = this.getMemoryUsage(), t = e.heapUsed / 1024 / 1024, r = e.heapTotal / 1024 / 1024;
                    return {
                        usage: e,
                        timestamp: Date.now(),
                        heapUsedMB: t,
                        heapTotalMB: r,
                        memoryPressure: this.calculateMemoryPressure(t)
                    };
                }
                getMemoryUsage() {
                    return void 0 !== i && i.memoryUsage ? i.memoryUsage() : {
                        rss: 0,
                        heapTotal: 0,
                        heapUsed: 0,
                        external: 0,
                        arrayBuffers: 0
                    };
                }
                calculateMemoryPressure(e) {
                    var t, r, i;
                    const { thresholds: o } = this.options, n = null !== (t = null == o ? void 0 : o.criticalMB) && void 0 !== t ? t : 0, s = null !== (r = null == o ? void 0 : o.highMB) && void 0 !== r ? r : 0, a = null !== (i = null == o ? void 0 : o.mediumMB) && void 0 !== i ? i : 0;
                    return e >= n ? "critical" : e >= s ? "high" : e >= a ? "medium" : "low";
                }
                processMemoryStats(e) {
                    this.addToHistory(e), this.notifyListeners(e), this.logMemoryStats(e), this.options.enableAutoCleanup && this.handleAutoCleanup(e);
                }
                addToHistory(e) {
                    this.historyStats.push(e), this.historyStats.length > this.options.maxHistorySize && (this.historyStats = this.historyStats.slice(-this.options.maxHistorySize));
                }
                notifyListeners(e) {
                    this.listeners.forEach((t)=>{
                        try {
                            t(e);
                        } catch (e) {
                            this.logger.error("[MemoryMonitor] Error in memory usage listener:", e);
                        }
                    });
                }
                logMemoryStats(e) {
                    const { heapUsedMB: t, heapTotalMB: i, memoryPressure: o } = e;
                    "critical" === o ? this.logger.error(`[MemoryMonitor] CRITICAL memory usage: ${t.toFixed(2)}MB/${i.toFixed(2)}MB`) : "high" === o ? this.logger.warn(`[MemoryMonitor] HIGH memory usage: ${t.toFixed(2)}MB/${i.toFixed(2)}MB`) : "medium" === o && this.logger.info(`[MemoryMonitor] Medium memory usage: ${t.toFixed(2)}MB/${i.toFixed(2)}MB`), this.logger.info("disableMemoryManagement: " + (void 0 !== r.g && r.g.disableMemoryManagement));
                }
                handleAutoCleanup(e) {
                    const { memoryPressure: t } = e;
                    "critical" !== t && "high" !== t || this.triggerCleanup("critical" === t);
                }
                triggerCleanup(e = !1) {
                    if (this.logger.info(`[MemoryMonitor] Triggering ${e ? "aggressive" : "normal"} cleanup...`), this.cleanupHandlers.forEach((e)=>{
                        try {
                            e();
                        } catch (e) {
                            this.logger.error("[MemoryMonitor] Error in cleanup handler:", e);
                        }
                    }), void 0 !== r.g && r.g.gc) try {
                        r.g.gc(), this.logger.info("[MemoryMonitor] Forced garbage collection completed");
                    } catch (e) {
                        this.logger.warn("[MemoryMonitor] Failed to force garbage collection:", e);
                    }
                    e && setTimeout(()=>{
                        const e = this.collectMemoryStats();
                        this.logger.info(`[MemoryMonitor] After cleanup: ${e.heapUsedMB.toFixed(2)}MB`);
                    }, 1e3);
                }
                onMemoryUsage(e) {
                    return this.listeners.add(e), ()=>this.listeners.delete(e);
                }
                registerCleanupHandler(e) {
                    return this.cleanupHandlers.add(e), ()=>this.cleanupHandlers.delete(e);
                }
                getCurrentStats() {
                    return this.collectMemoryStats();
                }
                getHistory() {
                    return [
                        ...this.historyStats
                    ];
                }
                getMemoryTrend(e = 10) {
                    const t = Date.now() - 60 * e * 1e3, r = this.historyStats.filter((e)=>e.timestamp >= t);
                    if (r.length < 2) {
                        const e = this.getCurrentStats();
                        return {
                            trend: "stable",
                            averageUsageMB: e.heapUsedMB,
                            peakUsageMB: e.heapUsedMB,
                            samples: 1
                        };
                    }
                    const i = r.map((e)=>e.heapUsedMB), o = i.reduce((e, t)=>e + t, 0) / i.length, n = Math.max(...i), s = Math.floor(r.length / 2), a = i.slice(0, s), l = i.slice(s), c = a.reduce((e, t)=>e + t, 0) / a.length, h = l.reduce((e, t)=>e + t, 0) / l.length - c, m = .1 * o;
                    let d;
                    return d = h > m ? "increasing" : h < -m ? "decreasing" : "stable", {
                        trend: d,
                        averageUsageMB: o,
                        peakUsageMB: n,
                        samples: r.length
                    };
                }
                manualCleanup(e = !1) {
                    this.triggerCleanup(e);
                }
                isActive() {
                    return this.isMonitoring;
                }
                dispose() {
                    this.stopMonitoring(), MemoryMonitor.instance = void 0;
                }
                constructor(e = {}){
                    var t;
                    this.subscriptionManager = new n.SubscriptionManager, this.listeners = new Set, this.cleanupHandlers = new Set, this.historyStats = [], this.defaultThresholds = {
                        mediumMB: 200,
                        highMB: 400,
                        criticalMB: 600
                    }, this.isMonitoring = !1, this.options = {
                        intervalMs: e.intervalMs || 3e4,
                        thresholds: {
                            ...this.defaultThresholds,
                            ...e.thresholds
                        },
                        enableAutoCleanup: null === (t = e.enableAutoCleanup) || void 0 === t || t,
                        maxHistorySize: e.maxHistorySize || 100
                    };
                }
            };
            t.MemoryMonitor = MemoryMonitor;
        },
        39322: function(e, t, r) {
            var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                void 0 === i && (i = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, i, o);
            } : function(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r];
            }), o = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(r(69830), t), o(r(95636), t), o(r(42328), t), o(r(16553), t), o(r(87492), t), o(r(83845), t), o(r(23922), t), o(r(83359), t), o(r(97034), t), o(r(74971), t), o(r(39932), t), o(r(20221), t), o(r(79873), t), o(r(46758), t);
        },
        39932: function(e, t, r) {
            var i = r(78), o = this && this.__decorate || function(e, t, r, i) {
                var o, n = arguments.length, s = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else for(var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (n < 3 ? o(s) : n > 3 ? o(t, r, s) : o(t, r)) || s);
                return n > 3 && s && Object.defineProperty(t, r, s), s;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EnhancedMemoryCleanup = void 0;
            const n = r(15985), s = r(79873);
            let a = class EnhancedMemoryCleanup {
                initialize() {
                    i.log("[EnhancedMemoryCleanup] Initializing enhanced cleanup for long-term stability..."), void 0 !== r.g && r.g.disableMemoryManagement ? i.log("[EnhancedMemoryCleanup] Disabled by global flag") : this.setupEnhancedCleanup();
                }
                setupEnhancedCleanup() {
                    const e = setInterval(()=>{
                        this.performLogCleanup();
                    }, 18e5);
                    this.subscriptionManager.addInterval(e);
                    const t = setInterval(()=>{
                        this.performDeepCleanup();
                    }, 72e5);
                    this.subscriptionManager.addInterval(t);
                    const r = setInterval(()=>{
                        this.performHistoryCleanup();
                    }, 36e5);
                    this.subscriptionManager.addInterval(r);
                    const o = setInterval(()=>{
                        this.performEventCleanup();
                    }, 9e5);
                    this.subscriptionManager.addInterval(o), i.log("[EnhancedMemoryCleanup] All cleanup timers initialized");
                }
                performLogCleanup() {
                    if (this.shouldPerformCleanup()) try {
                        if (Error.stackTraceLimit = 10, void 0 !== r.g) {
                            const e = r.g;
                            e.__errorCache && (e.__errorCache = e.__errorCache.slice(-100)), e.__logCache && (e.__logCache = e.__logCache.slice(-200)), e.__debugCache && (e.__debugCache = []);
                        }
                        if ("undefined" != typeof window) {
                            const e = window;
                            e.__errorCache && (e.__errorCache = e.__errorCache.slice(-50)), e.__logCache && (e.__logCache = e.__logCache.slice(-100)), e.__memoryLeakTest && delete e.__memoryLeakTest;
                        }
                        i.log("[EnhancedMemoryCleanup] Log cleanup completed");
                    } catch (e) {
                        i.warn("[EnhancedMemoryCleanup] Error during log cleanup:", e);
                    }
                }
                performDeepCleanup() {
                    if (this.shouldPerformCleanup()) try {
                        i.log("[EnhancedMemoryCleanup] Performing deep cleanup..."), void 0 !== r.g && r.g.gc && (r.g.gc(), i.log("[EnhancedMemoryCleanup] Forced garbage collection")), this.clearLargeObjectCaches(), this.clearClosureReferences(), i.log("[EnhancedMemoryCleanup] Deep cleanup completed");
                    } catch (e) {
                        i.warn("[EnhancedMemoryCleanup] Error during deep cleanup:", e);
                    }
                }
                performHistoryCleanup() {
                    if (this.shouldPerformCleanup()) try {
                        if ("undefined" != typeof window) {
                            const e = window;
                            e.__leakSamples && e.__leakSamples.length > 100 && (e.__leakSamples = e.__leakSamples.slice(-50)), e.__memoryHistory && e.__memoryHistory.length > 200 && (e.__memoryHistory = e.__memoryHistory.slice(-100)), e.__monitoringData && e.__monitoringData.length > 300 && (e.__monitoringData = e.__monitoringData.slice(-150));
                        }
                        i.log("[EnhancedMemoryCleanup] History cleanup completed");
                    } catch (e) {
                        i.warn("[EnhancedMemoryCleanup] Error during history cleanup:", e);
                    }
                }
                performEventCleanup() {
                    if (this.shouldPerformCleanup()) try {
                        if (void 0 !== r.g) {
                            const e = r.g;
                            e.__eventQueue && e.__eventQueue.length > 1e3 && (e.__eventQueue = e.__eventQueue.slice(-500), i.log("[EnhancedMemoryCleanup] Trimmed event queue")), e.__pendingEvents && e.__pendingEvents.length > 500 && (e.__pendingEvents = e.__pendingEvents.slice(-250), i.log("[EnhancedMemoryCleanup] Trimmed pending events")), e.__telemetryEvents && e.__telemetryEvents.length > 200 && (e.__telemetryEvents = e.__telemetryEvents.slice(-100), i.log("[EnhancedMemoryCleanup] Trimmed telemetry events"));
                        }
                        i.log("[EnhancedMemoryCleanup] Event cleanup completed");
                    } catch (e) {
                        i.warn("[EnhancedMemoryCleanup] Error during event cleanup:", e);
                    }
                }
                clearLargeObjectCaches() {
                    try {
                        if (void 0 !== r.g) {
                            const e = r.g;
                            e.__largeCache && e.__largeCache.size > 100 && e.__largeCache.clear(), e.__imageCache && e.__imageCache.size > 50 && e.__imageCache.clear(), e.__dataCache && e.__dataCache.size > 200 && e.__dataCache.clear();
                        }
                    } catch (e) {
                        i.warn("[EnhancedMemoryCleanup] Error clearing large object caches:", e);
                    }
                }
                clearClosureReferences() {
                    try {
                        if ("undefined" != typeof window) {
                            const e = window;
                            e.__closureRefs && (e.__closureRefs = []), e.__eventHandlers && e.__eventHandlers.size > 1e3 && e.__eventHandlers.clear();
                        }
                    } catch (e) {
                        i.warn("[EnhancedMemoryCleanup] Error clearing closure references:", e);
                    }
                }
                shouldPerformCleanup() {
                    return this.isEnabled && !(void 0 !== r.g && r.g.disableMemoryManagement);
                }
                performFullCleanup() {
                    i.log("[EnhancedMemoryCleanup] Performing full cleanup..."), this.performLogCleanup(), this.performHistoryCleanup(), this.performEventCleanup(), this.performDeepCleanup(), i.log("[EnhancedMemoryCleanup] Full cleanup completed");
                }
                getCleanupStats() {
                    return {
                        enabled: this.isEnabled,
                        activeTimers: this.subscriptionManager.getStats().intervals,
                        lastCleanupTime: (new Date).toISOString()
                    };
                }
                onStart() {}
                dispose() {
                    this.isEnabled = !1, this.subscriptionManager.dispose(), i.log("[EnhancedMemoryCleanup] Disposed");
                }
                constructor(){
                    this.subscriptionManager = new s.SubscriptionManager, this.isEnabled = !0;
                }
            };
            t.EnhancedMemoryCleanup = a, t.EnhancedMemoryCleanup = a = o([
                (0, n.Component)()
            ], a);
        },
        42328: function(e, t, r) {
            var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                void 0 === i && (i = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, i, o);
            } : function(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r];
            }), o = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(r(74425), t);
        },
        42703: function(e, t, r) {
            var i = this && this.__decorate || function(e, t, r, i) {
                var o, n = arguments.length, s = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else for(var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (n < 3 ? o(s) : n > 3 ? o(t, r, s) : o(t, r)) || s);
                return n > 3 && s && Object.defineProperty(t, r, s), s;
            }, o = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CommonHeaderHttpInterceptor = void 0;
            const n = r(15985), s = r(56464), a = r(87492);
            let l = class CommonHeaderHttpInterceptor {
                initialize() {
                    this.restOperations.interceptors.request.use((e)=>(e.headers || (e.headers = {}), e.headers[a.REQUEST_ID_HEADER] || (e.headers[a.TRACE_ID_HEADER] ? e.headers[a.REQUEST_ID_HEADER] = e.headers[a.TRACE_ID_HEADER] : e.headers[a.REQUEST_ID_HEADER] = (0, n.generateUUUID)().replace(/-/g, "")), e.proxy = !1, e));
                }
            };
            t.CommonHeaderHttpInterceptor = l, i([
                (0, n.Autowired)(s.RestOperations),
                o("design:type", Function)
            ], l.prototype, "restOperations", void 0), t.CommonHeaderHttpInterceptor = l = i([
                (0, n.Component)(n.ApplicationLifecycle)
            ], l);
        },
        45492: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DeveloperModeManager = void 0, t.DeveloperModeManager = Symbol("DeveloperModeManager");
        },
        46758: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FileUploader = t.FileUploadService = void 0, t.FileUploadService = Symbol("FileUploadService"), t.FileUploader = Symbol("FileUploader");
        },
        50671: (e, t, r)=>{
            var i, o = r(42649);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EnvUtils = void 0, function(e) {
                e.isNodeRuntime = function isNodeRuntime() {
                    return "[object process]" === Object.prototype.toString.call(void 0 !== o ? o : 0);
                }, e.isWindows = function isWindows() {
                    return void 0 !== o && o.platform ? o.platform.startsWith("win") : "object" == typeof navigator && navigator.userAgent.toLowerCase().includes("windows");
                }, e.isMacOS = function isMacOS() {
                    var e;
                    return void 0 !== o && o.platform ? "darwin" === o.platform : "object" == typeof navigator && (null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.includes("Mac"));
                };
            }(i || (t.EnvUtils = i = {}));
        },
        69830: function(e, t, r) {
            var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                void 0 === i && (i = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, i, o);
            } : function(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r];
            }), o = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(r(24066), t), o(r(84906), t);
        },
        74425: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NotFoundError = void 0;
            const i = r(15985);
            let NotFoundError = class NotFoundError extends i.CustomError {
            };
            t.NotFoundError = NotFoundError;
        },
        74971: function(e, t, r) {
            var i = r(42649), o = r(78), n = this && this.__decorate || function(e, t, r, i) {
                var o, n = arguments.length, s = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else for(var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (n < 3 ? o(s) : n > 3 ? o(t, r, s) : o(t, r)) || s);
                return n > 3 && s && Object.defineProperty(t, r, s), s;
            }, s = this && this.__metadata || function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MemoryCleanupService = void 0;
            const a = r(15985), l = r(37589), c = r(20221), h = r(79873);
            let m;
            try {
                const { DeveloperModeManager: e } = r(45492);
                m = e;
            } catch (e) {
                m = void 0;
            }
            let d = class MemoryCleanupService {
                checkDeveloperMode() {
                    if (this.developerModeManager) try {
                        const e = this.developerModeManager.getMode();
                        if (e && "boolean" == typeof e.enable) return e.enable;
                    } catch (e) {
                        this.logger.warn("[MemoryCleanupService] Error getting developer mode from manager:", e);
                    }
                    return !1;
                }
                shouldEnableMemoryManagement() {
                    return ("undefined" == typeof window || !0 !== window.disableMemoryManagement) && "true" !== i.env.DISABLE_MEMORY_MANAGEMENT && "true" !== i.env.CODEBUDDY_DISABLE_MEMORY_CLEANUP && (void 0 === r.g || !r.g.disableMemoryManagement);
                }
                initializeDeveloperModeManager() {
                    if (m) try {
                        if (this.developerModeManager = a.ContainerUtil.get(m), this.logger.info("[MemoryCleanupService] DeveloperModeManager loaded successfully"), this.developerModeManager.subject) {
                            const e = this.developerModeManager.subject.subscribe((e)=>{
                                const t = this.isDeveloperMode;
                                this.isDeveloperMode = this.checkDeveloperMode(), t !== this.isDeveloperMode && (this.logger.info("[MemoryCleanupService] Developer mode changed: " + (this.isDeveloperMode ? "ENABLED" : "DISABLED")), !this.isDeveloperMode && this.memoryMonitor ? this.memoryMonitor.stopMonitoring() : this.isDeveloperMode && !this.memoryMonitor && this.initializeDetailedMonitoring());
                            });
                            this.subscriptionManager.addSubscription(e);
                        }
                    } catch (e) {
                        this.logger.warn("[MemoryCleanupService] Failed to get DeveloperModeManager:", e), this.developerModeManager = void 0;
                    }
                    else this.logger.info("[MemoryCleanupService] DeveloperModeManager not available");
                }
                initialize() {
                    this.initializeDeveloperModeManager(), this.isDeveloperMode = this.checkDeveloperMode();
                    const e = this.shouldEnableMemoryManagement();
                    this.logger.info(`[MemoryCleanupService] Initializing in ${this.isDeveloperMode ? "DEVELOPER" : "PRODUCTION"} mode`), this.logger.info("[MemoryCleanupService] Memory management: " + (e ? "ENABLED" : "DISABLED")), this.logger.info("[MemoryCleanupService] Detailed monitoring: " + (this.isDeveloperMode ? "ENABLED" : "DISABLED")), e ? this.initializeBasicCleanup() : this.logger.info("[MemoryCleanupService] Memory management disabled by configuration"), e && this.initializeSmartMonitoring(), this.isDeveloperMode && e ? this.initializeDetailedMonitoring() : this.isDeveloperMode || this.logger.info("[MemoryCleanupService] Detailed monitoring disabled in production mode"), this.logger.info("[MemoryCleanupService] Initialized successfully"), this.setupGlobalControls();
                }
                setupGlobalControls() {
                    const e = {
                        disable: ()=>{
                            "undefined" != typeof window && (window.disableMemoryManagement = !0), this.logger.info("🚫 Memory management disabled"), this.logger.info("💡 To re-enable: memoryManagementControl.enable()"), this.logger.info("💡 Changes take effect within 5 minutes");
                        },
                        enable: ()=>{
                            "undefined" != typeof window && (window.disableMemoryManagement = !1), this.logger.info("✅ Memory management enabled"), this.logger.info("💡 To disable: memoryManagementControl.disable()"), this.logger.info("💡 Changes take effect within 5 minutes");
                        },
                        status: ()=>{
                            var e, t;
                            const r = !this.shouldEnableMemoryManagement(), i = this.isDeveloperMode, n = null === (e = this.smartMemoryMonitor) || void 0 === e ? void 0 : e.getStatus();
                            if (o.group("📊 Memory Management Status"), o.log("Memory Management: " + (r ? "🚫 DISABLED" : "✅ ENABLED")), o.log("Developer Mode: " + (i ? "🔧 ENABLED" : "📦 DISABLED")), o.log("Detailed Monitoring: " + (i && !r ? "📊 ACTIVE" : "⏸️ INACTIVE")), o.log("Smart Monitoring: " + (this.smartMemoryMonitor ? "🤖 ACTIVE" : "⏸️ INACTIVE")), n && "object" == typeof n) {
                                const e = n;
                                o.log(`Smart Mode: ${e.mode || "unknown"}`), o.log(`Environment: ${e.environment || "unknown"}`), o.log(`Baseline: ${(null === (t = e.baseline) || void 0 === t ? void 0 : t.heapUsed) || "Not established"}`), o.log("Daily Limit Active: " + (e.dailyLimitActive ? "YES" : "NO"));
                            }
                            return o.log(`Control Variable: ${(null === window || void 0 === window ? void 0 : window.disableMemoryManagement) || "undefined"}`), o.groupEnd(), {
                                memoryManagementEnabled: !r,
                                developerMode: i,
                                detailedMonitoring: i && !r,
                                smartMonitoring: n
                            };
                        },
                        smartMonitoring: {
                            status: ()=>{
                                var e;
                                return (null === (e = this.smartMemoryMonitor) || void 0 === e ? void 0 : e.getStatus()) || {
                                    status: "not_active"
                                };
                            },
                            start: ()=>{
                                this.smartMemoryMonitor ? this.logger.info("[MemoryCleanupService] Smart monitoring already active") : (this.initializeSmartMonitoring(), this.logger.info("[MemoryCleanupService] Smart monitoring started manually"));
                            },
                            stop: ()=>{
                                this.smartMemoryMonitor && (this.smartMemoryMonitor.stop(), this.smartMemoryMonitor = void 0, this.logger.info("[MemoryCleanupService] Smart monitoring stopped"));
                            },
                            forceBaseline: ()=>{
                                this.smartMemoryMonitor && (this.smartMemoryMonitor.stop(), setTimeout(()=>{
                                    this.smartMemoryMonitor || this.initializeSmartMonitoring();
                                }, 1e3), this.logger.info("[MemoryCleanupService] Smart monitoring baseline reset"));
                            }
                        },
                        help: ()=>{
                            o.log("\n🔧 Memory Management Control Commands:\n\n📊 Status:\n  memoryManagementControl.status()              - Show current status\n\n🎛️ Control:\n  memoryManagementControl.disable()             - Disable memory management\n  memoryManagementControl.enable()              - Enable memory management\n\n🤖 Smart Monitoring:\n  memoryManagementControl.smartMonitoring.status()      - Show smart monitoring status\n  memoryManagementControl.smartMonitoring.start()       - Start smart monitoring\n  memoryManagementControl.smartMonitoring.stop()        - Stop smart monitoring\n  memoryManagementControl.smartMonitoring.forceBaseline() - Reset baseline\n\n❓ Help:\n  memoryManagementControl.help()                - Show this help\n\n🚀 Quick Usage:\n  // Check smart monitoring status\n  memoryManagementControl.smartMonitoring.status()\n\n  // Reset baseline if needed\n  memoryManagementControl.smartMonitoring.forceBaseline()\n\n  // Disable memory management to test original behavior\n  memoryManagementControl.disable()\n\n  // Enable memory management to test fixes\n  memoryManagementControl.enable()\n\n  // Check overall status\n  memoryManagementControl.status()\n\n💡 Note: Changes take effect within 5 minutes\n🤖 Smart monitoring: Production=5min, Development=1min intervals\n                ");
                        }
                    };
                    "undefined" != typeof window ? (window.memoryManagementControl = e, this.logger.info("🎛️ Global control installed: memoryManagementControl.help()")) : void 0 !== r.g && (r.g.memoryManagementControl = e, this.logger.info("🎛️ Global control installed: memoryManagementControl.help()"));
                }
                initializeBasicCleanup() {
                    const e = setInterval(()=>{
                        this.performLightCleanup();
                    }, 6e5);
                    if (this.subscriptionManager.addInterval(e), "undefined" != typeof document) {
                        const handleVisibilityChange = ()=>{
                            document.hidden && this.performLightCleanup();
                        };
                        document.addEventListener("visibilitychange", handleVisibilityChange), this.subscriptionManager.addDisposable({
                            dispose: ()=>document.removeEventListener("visibilitychange", handleVisibilityChange)
                        });
                    }
                    const t = setInterval(()=>{
                        this.performBasicMemoryCheck();
                    }, 3e5);
                    this.subscriptionManager.addInterval(t);
                }
                initializeSmartMonitoring() {
                    try {
                        if (this.disableMonitoring) return;
                        this.smartMemoryMonitor = new c.SmartMemoryMonitor;
                        const aegisCallback = (e)=>{
                            this.logger.info(`[MemoryCleanupService] Smart memory alert: ${e.type} - ${e.data.growth.toFixed(2)}MB growth`);
                        };
                        this.smartMemoryMonitor.start(aegisCallback), this.logger.info("[MemoryCleanupService] Smart memory monitoring initialized"), this.subscriptionManager.addDisposable({
                            dispose: ()=>{
                                this.smartMemoryMonitor && this.smartMemoryMonitor.stop();
                            }
                        });
                    } catch (e) {
                        this.logger.error("[MemoryCleanupService] Failed to initialize smart monitoring:", e);
                    }
                }
                initializeDetailedMonitoring() {
                    this.memoryMonitor = l.MemoryMonitor.getInstance({
                        intervalMs: 3e4,
                        thresholds: {
                            mediumMB: 300,
                            highMB: 500,
                            criticalMB: 700
                        },
                        enableAutoCleanup: !0,
                        maxHistorySize: 50
                    });
                    const e = this.memoryMonitor.onMemoryUsage(this.handleMemoryPressure.bind(this));
                    this.subscriptionManager.addDisposable({
                        dispose: e
                    });
                    const t = this.memoryMonitor.registerCleanupHandler(this.performCleanup.bind(this));
                    this.subscriptionManager.addDisposable({
                        dispose: t
                    }), this.memoryMonitor.startMonitoring();
                }
                performBasicMemoryCheck() {
                    if (this.shouldEnableMemoryManagement() && void 0 !== i && i.memoryUsage) try {
                        const e = i.memoryUsage().heapUsed / 1024 / 1024;
                        e > 700 ? (o.error(`[MemoryCleanupService] PID ${i.pid} CRITICAL memory usage: ${e.toFixed(2)}MB`), this.performAggressiveCleanup()) : e > 500 && (o.warn(`[MemoryCleanupService] PID ${i.pid} High memory usage detected: ${e.toFixed(2)}MB`), this.performCleanup());
                    } catch (e) {
                        this.logger.warn("[MemoryCleanupService] Error during basic memory check:", e);
                    }
                }
                handleMemoryPressure(e) {
                    const { memoryPressure: t, heapUsedMB: r } = e;
                    switch(t){
                        case "critical":
                            this.logger.error(`[MemoryCleanupService] CRITICAL memory pressure detected: ${r.toFixed(2)}MB`), this.performAggressiveCleanup();
                            break;
                        case "high":
                            this.logger.warn(`[MemoryCleanupService] HIGH memory pressure detected: ${r.toFixed(2)}MB`), this.performCleanup();
                            break;
                        case "medium":
                            this.isDeveloperMode && this.logger.info(`[MemoryCleanupService] Medium memory pressure detected: ${r.toFixed(2)}MB`);
                    }
                }
                registerCacheManager(e) {
                    return this.cacheManagers.add(e), ()=>this.cacheManagers.delete(e);
                }
                registerSubscriptionManager(e) {
                    return this.subscriptionManagers.add(e), ()=>this.subscriptionManagers.delete(e);
                }
                performLightCleanup() {
                    this.shouldEnableMemoryManagement() && (this.isDeveloperMode && this.logger.info("[MemoryCleanupService] Performing light cleanup..."), this.cacheManagers.forEach((e)=>{
                        try {
                            e.purgeStale && e.purgeStale();
                        } catch (e) {
                            this.logger.warn("[MemoryCleanupService] Error during cache purge:", e);
                        }
                    }), this.updateCleanupStats(), this.isDeveloperMode && this.logger.info(`[MemoryCleanupService] Light cleanup completed (${this.cleanupCount} total cleanups)`));
                }
                performCleanup() {
                    this.isDeveloperMode && this.logger.info("[MemoryCleanupService] Performing standard cleanup..."), this.performLightCleanup(), this.forceGarbageCollection(), this.updateCleanupStats(), this.isDeveloperMode && this.logger.info("[MemoryCleanupService] Standard cleanup completed");
                }
                performAggressiveCleanup() {
                    this.logger.info("[MemoryCleanupService] Performing aggressive cleanup..."), this.cacheManagers.forEach((e)=>{
                        try {
                            e.clear();
                        } catch (e) {
                            this.logger.warn("[MemoryCleanupService] Error during cache clear:", e);
                        }
                    }), this.forceGarbageCollection(), setTimeout(()=>{
                        this.forceGarbageCollection();
                    }, 1e3), this.updateCleanupStats();
                }
                forceGarbageCollection() {
                    if (void 0 !== r.g && r.g.gc) try {
                        r.g.gc(), this.logger.info("[MemoryCleanupService] Forced garbage collection");
                    } catch (e) {
                        this.logger.warn("[MemoryCleanupService] Failed to force garbage collection:", e);
                    }
                    else this.logger.debug("[MemoryCleanupService] Garbage collection not available");
                }
                updateCleanupStats() {
                    this.cleanupCount++, this.lastCleanupTime = Date.now();
                }
                getStats() {
                    var e, t;
                    return {
                        cleanupCount: this.cleanupCount,
                        lastCleanupTime: this.lastCleanupTime,
                        memoryStats: null === (e = this.memoryMonitor) || void 0 === e ? void 0 : e.getCurrentStats(),
                        cacheManagers: this.cacheManagers.size,
                        subscriptionManagers: this.subscriptionManagers.size,
                        memoryTrend: null === (t = this.memoryMonitor) || void 0 === t ? void 0 : t.getMemoryTrend()
                    };
                }
                manualCleanup(e = "standard") {
                    switch(e){
                        case "light":
                            this.performLightCleanup();
                            break;
                        case "standard":
                            this.performCleanup();
                            break;
                        case "aggressive":
                            this.performAggressiveCleanup();
                    }
                }
                getMemoryMonitor() {
                    return this.memoryMonitor;
                }
                getServiceStatus() {
                    return {
                        isDeveloperMode: this.isDeveloperMode,
                        memoryManagementEnabled: this.shouldEnableMemoryManagement(),
                        detailedMonitoringEnabled: this.isDeveloperMode && this.shouldEnableMemoryManagement(),
                        memoryMonitorAvailable: !!this.memoryMonitor
                    };
                }
                onStart() {}
                dispose() {
                    this.logger.info("[MemoryCleanupService] Disposing..."), this.memoryMonitor && this.memoryMonitor.stopMonitoring(), this.subscriptionManager.dispose(), this.cacheManagers.clear(), this.subscriptionManagers.clear(), this.logger.info("[MemoryCleanupService] Disposed successfully");
                }
                constructor(){
                    this.subscriptionManager = new h.SubscriptionManager, this.cacheManagers = new Set, this.subscriptionManagers = new Set, this.cleanupCount = 0, this.lastCleanupTime = 0, this.isDeveloperMode = !1, this.disableMonitoring = !0;
                }
            };
            t.MemoryCleanupService = d, n([
                (0, a.Autowired)(a.Logger),
                s("design:type", Object)
            ], d.prototype, "logger", void 0), t.MemoryCleanupService = d = n([
                (0, a.Component)()
            ], d);
        },
        79873: (e, t, r)=>{
            var i = r(78);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DisposableComponent = t.SubscriptionManager = void 0;
            let SubscriptionManager = class SubscriptionManager {
                addSubscription(e) {
                    this.isDisposed ? e.unsubscribe() : this.subscriptions.add(e);
                }
                addDisposable(e) {
                    this.isDisposed ? e.dispose() : this.disposables.add(e);
                }
                addTimer(e) {
                    this.isDisposed ? clearTimeout(e) : this.timers.add(e);
                }
                addInterval(e) {
                    this.isDisposed ? clearInterval(e) : this.intervals.add(e);
                }
                removeSubscription(e) {
                    this.subscriptions.has(e) && (this.subscriptions.delete(e), e.closed || e.unsubscribe());
                }
                removeTimer(e) {
                    this.timers.has(e) && (this.timers.delete(e), clearTimeout(e));
                }
                removeInterval(e) {
                    this.intervals.has(e) && (this.intervals.delete(e), clearInterval(e));
                }
                removeDisposable(e) {
                    if (this.disposables.has(e)) {
                        this.disposables.delete(e);
                        try {
                            e.dispose();
                        } catch (e) {
                            i.warn("[SubscriptionManager] Error disposing resource during removal:", e);
                        }
                    }
                }
                getStats() {
                    return {
                        subscriptions: this.subscriptions.size,
                        disposables: this.disposables.size,
                        timers: this.timers.size,
                        intervals: this.intervals.size,
                        isDisposed: this.isDisposed
                    };
                }
                dispose() {
                    this.isDisposed || (this.isDisposed = !0, this.subscriptions.forEach((e)=>{
                        try {
                            e.closed || e.unsubscribe();
                        } catch (e) {
                            i.warn("[SubscriptionManager] Error disposing subscription:", e);
                        }
                    }), this.subscriptions.clear(), this.timers.forEach((e)=>{
                        try {
                            clearTimeout(e);
                        } catch (e) {
                            i.warn("[SubscriptionManager] Error clearing timer:", e);
                        }
                    }), this.timers.clear(), this.intervals.forEach((e)=>{
                        try {
                            clearInterval(e);
                        } catch (e) {
                            i.warn("[SubscriptionManager] Error clearing interval:", e);
                        }
                    }), this.intervals.clear(), this.disposables.forEach((e)=>{
                        try {
                            e.dispose();
                        } catch (e) {
                            i.warn("[SubscriptionManager] Error disposing resource:", e);
                        }
                    }), this.disposables.clear());
                }
                get disposed() {
                    return this.isDisposed;
                }
                constructor(){
                    this.subscriptions = new Set, this.disposables = new Set, this.timers = new Set, this.intervals = new Set, this.isDisposed = !1;
                }
            };
            t.SubscriptionManager = SubscriptionManager;
            t.DisposableComponent = class DisposableComponent {
                addSubscription(e) {
                    this.subscriptionManager.addSubscription(e);
                }
                addTimer(e) {
                    this.subscriptionManager.addTimer(e);
                }
                addInterval(e) {
                    this.subscriptionManager.addInterval(e);
                }
                addDisposable(e) {
                    this.subscriptionManager.addDisposable(e);
                }
                onDispose() {}
                dispose() {
                    if (!this.isDisposed) {
                        this.isDisposed = !0;
                        try {
                            this.onDispose();
                        } catch (e) {
                            i.warn("[DisposableComponent] Error in onDispose:", e);
                        }
                        this.subscriptionManager.dispose();
                    }
                }
                get disposed() {
                    return this.isDisposed;
                }
                getResourceStats() {
                    return this.subscriptionManager.getStats();
                }
                constructor(){
                    this.subscriptionManager = new SubscriptionManager, this.isDisposed = !1;
                }
            };
        },
        83359: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FileNameService = void 0, t.FileNameService = Symbol("FileNameService");
        },
        83845: function(e, t, r) {
            var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                void 0 === i && (i = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, i, o);
            } : function(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r];
            }), o = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(r(42703), t);
        },
        84906: function(e, t, r) {
            var i = this && this.__decorate || function(e, t, r, i) {
                var o, n = arguments.length, s = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else for(var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (n < 3 ? o(s) : n > 3 ? o(t, r, s) : o(t, r)) || s);
                return n > 3 && s && Object.defineProperty(t, r, s), s;
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SampleEncryptor = void 0;
            const o = r(15985), n = r(24066);
            let s = class SampleEncryptor {
                async encrypt(e) {
                    return `enc_${o.ByteUtil.encodeBase64(e)}_key`;
                }
                async decrypt(e) {
                    var t, r;
                    if (!e.startsWith("enc_") || !e.endsWith("_key")) throw new Error("Invalid encrypted text");
                    const i = e.substring(4, e.length - 4);
                    return null !== (r = null === (t = o.ByteUtil.decodeBase64(i)) || void 0 === t ? void 0 : t.toString("utf8")) && void 0 !== r ? r : "";
                }
            };
            t.SampleEncryptor = s, t.SampleEncryptor = s = i([
                (0, o.Component)(n.Encryptor)
            ], s);
        },
        86957: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ObjectUtils = void 0;
            const i = r(64783);
            var o;
            !function(e) {
                e.merge = function merge(...e) {
                    const t = e[e.length - 1], [r, ...o] = e;
                    return i(r, ...o, "function" == typeof t ? t : (e, t)=>{
                        if (Array.isArray(e)) return t;
                    });
                }, e.isChanged = function isChanged(e, t) {
                    return JSON.stringify(e) !== JSON.stringify(t);
                }, e.copy = function copy(e) {
                    return JSON.parse(JSON.stringify(e));
                };
            }(o || (t.ObjectUtils = o = {}));
        },
        87098: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
        },
        87492: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.USER_ID_HEADER = t.PRODUCT_VERSION_HEADER = t.API_KEY_HEADER = t.IDE_VERSION_HEADER = t.IDE_NAME_HEADER = t.IDE_TYPE_HEADER = t.PRODUCT = t.AGENT_INTENT = t.CONVERSATION_MESSAGE_ID_HEADER = t.CONVERSATION_REQUEST_ID_HEADER = t.SESSION_ID_HEADER = t.CONVERSATION_ID_HEADER = t.REQUEST_ID_HEADER = t.TRACE_ID_HEADER = t.FilePathService = void 0, t.FilePathService = Symbol("FilePathService"), t.TRACE_ID_HEADER = "X-Trace-ID", t.REQUEST_ID_HEADER = "X-Request-ID", t.CONVERSATION_ID_HEADER = "X-Conversation-ID", t.SESSION_ID_HEADER = "X-Session-ID", t.CONVERSATION_REQUEST_ID_HEADER = "X-Conversation-Request-ID", t.CONVERSATION_MESSAGE_ID_HEADER = "X-Conversation-Message-ID", t.AGENT_INTENT = "X-Agent-Intent", t.PRODUCT = "X-Product", t.IDE_TYPE_HEADER = "X-IDE-Type", t.IDE_NAME_HEADER = "X-IDE-Name", t.IDE_VERSION_HEADER = "X-IDE-Version", t.API_KEY_HEADER = "X-API-Key", t.PRODUCT_VERSION_HEADER = "X-Product-Version", t.USER_ID_HEADER = "X-User-Id";
        },
        95636: function(e, t, r) {
            var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                void 0 === i && (i = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, i, o);
            } : function(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r];
            }), o = this && this.__exportStar || function(e, t) {
                for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(r(86957), t), o(r(33846), t), o(r(50671), t), o(r(28910), t);
        },
        97034: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UserHomeService = void 0, t.UserHomeService = Symbol("UserHomeService");
        }
    }
]); //# sourceMappingURL=9322.640b72edc6dcf6d5c5d5.js.map
