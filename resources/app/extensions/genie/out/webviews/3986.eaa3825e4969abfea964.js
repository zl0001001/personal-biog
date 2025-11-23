"use strict";
(self.webpackChunk_genie_chat_webview_app = self.webpackChunk_genie_chat_webview_app || []).push([
    [
        3986
    ],
    {
        13986: (t, r, e)=>{
            e.d(r, {
                diagram: ()=>gt
            });
            var n = e(93038), o = e(19812), a = e(9147), c = e(94279), i = e(35456), s = e(44858), m = e(32551), h = {
                NORMAL: 0,
                REVERSE: 1,
                HIGHLIGHT: 2,
                MERGE: 3,
                CHERRY_PICK: 4
            }, d = c.UI.gitGraph, $ = (0, i.K2)(()=>(0, a.$t)({
                    ...d,
                    ...(0, c.zj)().gitGraph
                }), "getConfig"), l = new o.m(()=>{
                const t = $(), r = t.mainBranchName, e = t.mainBranchOrder;
                return {
                    mainBranchName: r,
                    commits: new Map,
                    head: null,
                    branchConfig: new Map([
                        [
                            r,
                            {
                                name: r,
                                order: e
                            }
                        ]
                    ]),
                    branches: new Map([
                        [
                            r,
                            null
                        ]
                    ]),
                    currBranch: r,
                    direction: "LR",
                    seq: 0,
                    options: {}
                };
            });
            function getID() {
                return (0, a.yT)({
                    length: 7
                });
            }
            function uniqBy(t, r) {
                const e = Object.create(null);
                return t.reduce((t, n)=>{
                    const o = r(n);
                    return e[o] || (e[o] = !0, t.push(n)), t;
                }, []);
            }
            (0, i.K2)(getID, "getID"), (0, i.K2)(uniqBy, "uniqBy");
            var y = (0, i.K2)(function(t) {
                l.records.direction = t;
            }, "setDirection"), g = (0, i.K2)(function(t) {
                i.Rm.debug("options str", t), t = t?.trim(), t = t || "{}";
                try {
                    l.records.options = JSON.parse(t);
                } catch (t) {
                    i.Rm.error("error while parsing gitGraph options", t.message);
                }
            }, "setOptions"), p = (0, i.K2)(function() {
                return l.records.options;
            }, "getOptions"), x = (0, i.K2)(function(t) {
                let r = t.msg, e = t.id;
                const n = t.type;
                let o = t.tags;
                i.Rm.info("commit", r, e, n, o), i.Rm.debug("Entering commit:", r, e, n, o);
                const a = $();
                e = c.Y2.sanitizeText(e, a), r = c.Y2.sanitizeText(r, a), o = o?.map((t)=>c.Y2.sanitizeText(t, a));
                const s = {
                    id: e || l.records.seq + "-" + getID(),
                    message: r,
                    seq: l.records.seq++,
                    type: n ?? h.NORMAL,
                    tags: o ?? [],
                    parents: null == l.records.head ? [] : [
                        l.records.head.id
                    ],
                    branch: l.records.currBranch
                };
                l.records.head = s, i.Rm.info("main branch", a.mainBranchName), l.records.commits.has(s.id) && i.Rm.warn(`Commit ID ${s.id} already exists`), l.records.commits.set(s.id, s), l.records.branches.set(l.records.currBranch, s.id), i.Rm.debug("in pushCommit " + s.id);
            }, "commit"), f = (0, i.K2)(function(t) {
                let r = t.name;
                const e = t.order;
                if (r = c.Y2.sanitizeText(r, $()), l.records.branches.has(r)) throw new Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${r}")`);
                l.records.branches.set(r, null != l.records.head ? l.records.head.id : null), l.records.branchConfig.set(r, {
                    name: r,
                    order: e
                }), w(r), i.Rm.debug("in createBranch");
            }, "branch"), u = (0, i.K2)((t)=>{
                let r = t.branch, e = t.id;
                const n = t.type, o = t.tags, a = $();
                r = c.Y2.sanitizeText(r, a), e && (e = c.Y2.sanitizeText(e, a));
                const s = l.records.branches.get(l.records.currBranch), m = l.records.branches.get(r), d = s ? l.records.commits.get(s) : void 0, y = m ? l.records.commits.get(m) : void 0;
                if (d && y && d.branch === r) throw new Error(`Cannot merge branch '${r}' into itself.`);
                if (l.records.currBranch === r) {
                    const t = new Error('Incorrect usage of "merge". Cannot merge a branch to itself');
                    throw t.hash = {
                        text: `merge ${r}`,
                        token: `merge ${r}`,
                        expected: [
                            "branch abc"
                        ]
                    }, t;
                }
                if (void 0 === d || !d) {
                    const t = new Error(`Incorrect usage of "merge". Current branch (${l.records.currBranch})has no commits`);
                    throw t.hash = {
                        text: `merge ${r}`,
                        token: `merge ${r}`,
                        expected: [
                            "commit"
                        ]
                    }, t;
                }
                if (!l.records.branches.has(r)) {
                    const t = new Error('Incorrect usage of "merge". Branch to be merged (' + r + ") does not exist");
                    throw t.hash = {
                        text: `merge ${r}`,
                        token: `merge ${r}`,
                        expected: [
                            `branch ${r}`
                        ]
                    }, t;
                }
                if (void 0 === y || !y) {
                    const t = new Error('Incorrect usage of "merge". Branch to be merged (' + r + ") has no commits");
                    throw t.hash = {
                        text: `merge ${r}`,
                        token: `merge ${r}`,
                        expected: [
                            '"commit"'
                        ]
                    }, t;
                }
                if (d === y) {
                    const t = new Error('Incorrect usage of "merge". Both branches have same head');
                    throw t.hash = {
                        text: `merge ${r}`,
                        token: `merge ${r}`,
                        expected: [
                            "branch abc"
                        ]
                    }, t;
                }
                if (e && l.records.commits.has(e)) {
                    const t = new Error('Incorrect usage of "merge". Commit with id:' + e + " already exists, use different custom id");
                    throw t.hash = {
                        text: `merge ${r} ${e} ${n} ${o?.join(" ")}`,
                        token: `merge ${r} ${e} ${n} ${o?.join(" ")}`,
                        expected: [
                            `merge ${r} ${e}_UNIQUE ${n} ${o?.join(" ")}`
                        ]
                    }, t;
                }
                const g = m || "", p = {
                    id: e || `${l.records.seq}-${getID()}`,
                    message: `merged branch ${r} into ${l.records.currBranch}`,
                    seq: l.records.seq++,
                    parents: null == l.records.head ? [] : [
                        l.records.head.id,
                        g
                    ],
                    branch: l.records.currBranch,
                    type: h.MERGE,
                    customType: n,
                    customId: !!e,
                    tags: o ?? []
                };
                l.records.head = p, l.records.commits.set(p.id, p), l.records.branches.set(l.records.currBranch, p.id), i.Rm.debug(l.records.branches), i.Rm.debug("in mergeBranch");
            }, "merge"), b = (0, i.K2)(function(t) {
                let r = t.id, e = t.targetId, n = t.tags, o = t.parent;
                i.Rm.debug("Entering cherryPick:", r, e, n);
                const a = $();
                if (r = c.Y2.sanitizeText(r, a), e = c.Y2.sanitizeText(e, a), n = n?.map((t)=>c.Y2.sanitizeText(t, a)), o = c.Y2.sanitizeText(o, a), !r || !l.records.commits.has(r)) {
                    const t = new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');
                    throw t.hash = {
                        text: `cherryPick ${r} ${e}`,
                        token: `cherryPick ${r} ${e}`,
                        expected: [
                            "cherry-pick abc"
                        ]
                    }, t;
                }
                const s = l.records.commits.get(r);
                if (void 0 === s || !s) throw new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');
                if (o && (!Array.isArray(s.parents) || !s.parents.includes(o))) {
                    throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");
                }
                const m = s.branch;
                if (s.type === h.MERGE && !o) {
                    throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");
                }
                if (!e || !l.records.commits.has(e)) {
                    if (m === l.records.currBranch) {
                        const t = new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');
                        throw t.hash = {
                            text: `cherryPick ${r} ${e}`,
                            token: `cherryPick ${r} ${e}`,
                            expected: [
                                "cherry-pick abc"
                            ]
                        }, t;
                    }
                    const t = l.records.branches.get(l.records.currBranch);
                    if (void 0 === t || !t) {
                        const t = new Error(`Incorrect usage of "cherry-pick". Current branch (${l.records.currBranch})has no commits`);
                        throw t.hash = {
                            text: `cherryPick ${r} ${e}`,
                            token: `cherryPick ${r} ${e}`,
                            expected: [
                                "cherry-pick abc"
                            ]
                        }, t;
                    }
                    const a = l.records.commits.get(t);
                    if (void 0 === a || !a) {
                        const t = new Error(`Incorrect usage of "cherry-pick". Current branch (${l.records.currBranch})has no commits`);
                        throw t.hash = {
                            text: `cherryPick ${r} ${e}`,
                            token: `cherryPick ${r} ${e}`,
                            expected: [
                                "cherry-pick abc"
                            ]
                        }, t;
                    }
                    const c = {
                        id: l.records.seq + "-" + getID(),
                        message: `cherry-picked ${s?.message} into ${l.records.currBranch}`,
                        seq: l.records.seq++,
                        parents: null == l.records.head ? [] : [
                            l.records.head.id,
                            s.id
                        ],
                        branch: l.records.currBranch,
                        type: h.CHERRY_PICK,
                        tags: n ? n.filter(Boolean) : [
                            `cherry-pick:${s.id}${s.type === h.MERGE ? `|parent:${o}` : ""}`
                        ]
                    };
                    l.records.head = c, l.records.commits.set(c.id, c), l.records.branches.set(l.records.currBranch, c.id), i.Rm.debug(l.records.branches), i.Rm.debug("in cherryPick");
                }
            }, "cherryPick"), w = (0, i.K2)(function(t) {
                if (t = c.Y2.sanitizeText(t, $()), !l.records.branches.has(t)) {
                    const r = new Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${t}")`);
                    throw r.hash = {
                        text: `checkout ${t}`,
                        token: `checkout ${t}`,
                        expected: [
                            `branch ${t}`
                        ]
                    }, r;
                }
                {
                    l.records.currBranch = t;
                    const r = l.records.branches.get(l.records.currBranch);
                    l.records.head = void 0 !== r && r ? l.records.commits.get(r) ?? null : null;
                }
            }, "checkout");
            function upsert(t, r, e) {
                const n = t.indexOf(r);
                -1 === n ? t.push(e) : t.splice(n, 1, e);
            }
            function prettyPrintCommitHistory(t) {
                const r = t.reduce((t, r)=>t.seq > r.seq ? t : r, t[0]);
                let e = "";
                t.forEach(function(t) {
                    e += t === r ? "\t*" : "\t|";
                });
                const n = [
                    e,
                    r.id,
                    r.seq
                ];
                for(const t in l.records.branches)l.records.branches.get(t) === r.id && n.push(t);
                if (i.Rm.debug(n.join(" ")), r.parents && 2 == r.parents.length && r.parents[0] && r.parents[1]) {
                    const e = l.records.commits.get(r.parents[0]);
                    upsert(t, r, e), r.parents[1] && t.push(l.records.commits.get(r.parents[1]));
                } else {
                    if (0 == r.parents.length) return;
                    if (r.parents[0]) {
                        const e = l.records.commits.get(r.parents[0]);
                        upsert(t, r, e);
                    }
                }
                prettyPrintCommitHistory(t = uniqBy(t, (t)=>t.id));
            }
            (0, i.K2)(upsert, "upsert"), (0, i.K2)(prettyPrintCommitHistory, "prettyPrintCommitHistory");
            var B = (0, i.K2)(function() {
                i.Rm.debug(l.records.commits);
                prettyPrintCommitHistory([
                    L()[0]
                ]);
            }, "prettyPrint"), E = (0, i.K2)(function() {
                l.reset(), (0, c.IU)();
            }, "clear"), C = (0, i.K2)(function() {
                return [
                    ...l.records.branchConfig.values()
                ].map((t, r)=>null !== t.order && void 0 !== t.order ? t : {
                        ...t,
                        order: parseFloat(`0.${r}`)
                    }).sort((t, r)=>(t.order ?? 0) - (r.order ?? 0)).map(({ name: t })=>({
                        name: t
                    }));
            }, "getBranchesAsObjArray"), k = (0, i.K2)(function() {
                return l.records.branches;
            }, "getBranches"), T = (0, i.K2)(function() {
                return l.records.commits;
            }, "getCommits"), L = (0, i.K2)(function() {
                const t = [
                    ...l.records.commits.values()
                ];
                return t.forEach(function(t) {
                    i.Rm.debug(t.id);
                }), t.sort((t, r)=>t.seq - r.seq), t;
            }, "getCommitsArray"), K = {
                commitType: h,
                getConfig: $,
                setDirection: y,
                setOptions: g,
                getOptions: p,
                commit: x,
                branch: f,
                merge: u,
                cherryPick: b,
                checkout: w,
                prettyPrint: B,
                clear: E,
                getBranchesAsObjArray: C,
                getBranches: k,
                getCommits: T,
                getCommitsArray: L,
                getCurrentBranch: (0, i.K2)(function() {
                    return l.records.currBranch;
                }, "getCurrentBranch"),
                getDirection: (0, i.K2)(function() {
                    return l.records.direction;
                }, "getDirection"),
                getHead: (0, i.K2)(function() {
                    return l.records.head;
                }, "getHead"),
                setAccTitle: c.SV,
                getAccTitle: c.iN,
                getAccDescription: c.m7,
                setAccDescription: c.EI,
                setDiagramTitle: c.ke,
                getDiagramTitle: c.ab
            }, M = (0, i.K2)((t, r)=>{
                (0, n.S)(t, r), t.dir && r.setDirection(t.dir);
                for (const e of t.statements)v(e, r);
            }, "populate"), v = (0, i.K2)((t, r)=>{
                const e = {
                    Commit: (0, i.K2)((t)=>r.commit(R(t)), "Commit"),
                    Branch: (0, i.K2)((t)=>r.branch(P(t)), "Branch"),
                    Merge: (0, i.K2)((t)=>r.merge(I(t)), "Merge"),
                    Checkout: (0, i.K2)((t)=>r.checkout(A(t)), "Checkout"),
                    CherryPicking: (0, i.K2)((t)=>r.cherryPick(G(t)), "CherryPicking")
                }[t.$type];
                e ? e(t) : i.Rm.error(`Unknown statement type: ${t.$type}`);
            }, "parseStatement"), R = (0, i.K2)((t)=>({
                    id: t.id,
                    msg: t.message ?? "",
                    type: void 0 !== t.type ? h[t.type] : h.NORMAL,
                    tags: t.tags ?? void 0
                }), "parseCommit"), P = (0, i.K2)((t)=>({
                    name: t.name,
                    order: t.order ?? 0
                }), "parseBranch"), I = (0, i.K2)((t)=>({
                    branch: t.branch,
                    id: t.id ?? "",
                    type: void 0 !== t.type ? h[t.type] : void 0,
                    tags: t.tags ?? void 0
                }), "parseMerge"), A = (0, i.K2)((t)=>t.branch, "parseCheckout"), G = (0, i.K2)((t)=>({
                    id: t.id,
                    targetId: "",
                    tags: 0 === t.tags?.length ? void 0 : t.tags,
                    parent: t.parent
                }), "parseCherryPicking"), O = {
                parse: (0, i.K2)(async (t)=>{
                    const r = await (0, s.qg)("gitGraph", t);
                    i.Rm.debug(r), M(r, K);
                }, "parse")
            };
            var D = (0, c.D7)(), q = D?.gitGraph, H = 10, z = 40, S = new Map, Y = new Map, _ = new Map, N = [], j = 0, W = "LR", F = (0, i.K2)(()=>{
                S.clear(), Y.clear(), _.clear(), j = 0, N = [], W = "LR";
            }, "clear"), U = (0, i.K2)((t)=>{
                const r = document.createElementNS("http://www.w3.org/2000/svg", "text");
                return ("string" == typeof t ? t.split(/\\n|\n|<br\s*\/?>/gi) : t).forEach((t)=>{
                    const e = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                    e.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), e.setAttribute("dy", "1em"), e.setAttribute("x", "0"), e.setAttribute("class", "row"), e.textContent = t.trim(), r.appendChild(e);
                }), r;
            }, "drawText"), V = (0, i.K2)((t)=>{
                let r, e, n;
                return "BT" === W ? (e = (0, i.K2)((t, r)=>t <= r, "comparisonFunc"), n = 1 / 0) : (e = (0, i.K2)((t, r)=>t >= r, "comparisonFunc"), n = 0), t.forEach((t)=>{
                    const o = "TB" === W || "BT" == W ? Y.get(t)?.y : Y.get(t)?.x;
                    void 0 !== o && e(o, n) && (r = t, n = o);
                }), r;
            }, "findClosestParent"), J = (0, i.K2)((t)=>{
                let r = "", e = 1 / 0;
                return t.forEach((t)=>{
                    const n = Y.get(t).y;
                    n <= e && (r = t, e = n);
                }), r || void 0;
            }, "findClosestParentBT"), Q = (0, i.K2)((t, r, e)=>{
                let n = e, o = e;
                const a = [];
                t.forEach((t)=>{
                    const e = r.get(t);
                    if (!e) throw new Error(`Commit not found for key ${t}`);
                    e.parents.length ? (n = Z(e), o = Math.max(n, o)) : a.push(e), tt(e, n);
                }), n = o, a.forEach((t)=>{
                    rt(t, n, e);
                }), t.forEach((t)=>{
                    const e = r.get(t);
                    if (e?.parents.length) {
                        const t = J(e.parents);
                        n = Y.get(t).y - z, n <= o && (o = n);
                        const r = S.get(e.branch).pos, a = n - H;
                        Y.set(e.id, {
                            x: r,
                            y: a
                        });
                    }
                });
            }, "setParallelBTPos"), X = (0, i.K2)((t)=>{
                const r = V(t.parents.filter((t)=>null !== t));
                if (!r) throw new Error(`Closest parent not found for commit ${t.id}`);
                const e = Y.get(r)?.y;
                if (void 0 === e) throw new Error(`Closest parent position not found for commit ${t.id}`);
                return e;
            }, "findClosestParentPos"), Z = (0, i.K2)((t)=>X(t) + z, "calculateCommitPosition"), tt = (0, i.K2)((t, r)=>{
                const e = S.get(t.branch);
                if (!e) throw new Error(`Branch not found for commit ${t.id}`);
                const n = e.pos, o = r + H;
                return Y.set(t.id, {
                    x: n,
                    y: o
                }), {
                    x: n,
                    y: o
                };
            }, "setCommitPosition"), rt = (0, i.K2)((t, r, e)=>{
                const n = S.get(t.branch);
                if (!n) throw new Error(`Branch not found for commit ${t.id}`);
                const o = r + e, a = n.pos;
                Y.set(t.id, {
                    x: a,
                    y: o
                });
            }, "setRootPosition"), et = (0, i.K2)((t, r, e, n, o, a)=>{
                if (a === h.HIGHLIGHT) t.append("rect").attr("x", e.x - 10).attr("y", e.y - 10).attr("width", 20).attr("height", 20).attr("class", `commit ${r.id} commit-highlight${o % 8} ${n}-outer`), t.append("rect").attr("x", e.x - 6).attr("y", e.y - 6).attr("width", 12).attr("height", 12).attr("class", `commit ${r.id} commit${o % 8} ${n}-inner`);
                else if (a === h.CHERRY_PICK) t.append("circle").attr("cx", e.x).attr("cy", e.y).attr("r", 10).attr("class", `commit ${r.id} ${n}`), t.append("circle").attr("cx", e.x - 3).attr("cy", e.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${r.id} ${n}`), t.append("circle").attr("cx", e.x + 3).attr("cy", e.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${r.id} ${n}`), t.append("line").attr("x1", e.x + 3).attr("y1", e.y + 1).attr("x2", e.x).attr("y2", e.y - 5).attr("stroke", "#fff").attr("class", `commit ${r.id} ${n}`), t.append("line").attr("x1", e.x - 3).attr("y1", e.y + 1).attr("x2", e.x).attr("y2", e.y - 5).attr("stroke", "#fff").attr("class", `commit ${r.id} ${n}`);
                else {
                    const c = t.append("circle");
                    if (c.attr("cx", e.x), c.attr("cy", e.y), c.attr("r", r.type === h.MERGE ? 9 : 10), c.attr("class", `commit ${r.id} commit${o % 8}`), a === h.MERGE) {
                        const a = t.append("circle");
                        a.attr("cx", e.x), a.attr("cy", e.y), a.attr("r", 6), a.attr("class", `commit ${n} ${r.id} commit${o % 8}`);
                    }
                    if (a === h.REVERSE) {
                        t.append("path").attr("d", `M ${e.x - 5},${e.y - 5}L${e.x + 5},${e.y + 5}M${e.x - 5},${e.y + 5}L${e.x + 5},${e.y - 5}`).attr("class", `commit ${n} ${r.id} commit${o % 8}`);
                    }
                }
            }, "drawCommitBullet"), nt = (0, i.K2)((t, r, e, n)=>{
                if (r.type !== h.CHERRY_PICK && (r.customId && r.type === h.MERGE || r.type !== h.MERGE) && q?.showCommitLabel) {
                    const o = t.append("g"), a = o.insert("rect").attr("class", "commit-label-bkg"), c = o.append("text").attr("x", n).attr("y", e.y + 25).attr("class", "commit-label").text(r.id), i = c.node()?.getBBox();
                    if (i && (a.attr("x", e.posWithOffset - i.width / 2 - 2).attr("y", e.y + 13.5).attr("width", i.width + 4).attr("height", i.height + 4), "TB" === W || "BT" === W ? (a.attr("x", e.x - (i.width + 16 + 5)).attr("y", e.y - 12), c.attr("x", e.x - (i.width + 16)).attr("y", e.y + i.height - 12)) : c.attr("x", e.posWithOffset - i.width / 2), q.rotateCommitLabel)) if ("TB" === W || "BT" === W) c.attr("transform", "rotate(-45, " + e.x + ", " + e.y + ")"), a.attr("transform", "rotate(-45, " + e.x + ", " + e.y + ")");
                    else {
                        const t = -7.5 - (i.width + 10) / 25 * 9.5, r = 10 + i.width / 25 * 8.5;
                        o.attr("transform", "translate(" + t + ", " + r + ") rotate(-45, " + n + ", " + e.y + ")");
                    }
                }
            }, "drawCommitLabel"), ot = (0, i.K2)((t, r, e, n)=>{
                if (r.tags.length > 0) {
                    let o = 0, a = 0, c = 0;
                    const i = [];
                    for (const n of r.tags.reverse()){
                        const r = t.insert("polygon"), s = t.append("circle"), m = t.append("text").attr("y", e.y - 16 - o).attr("class", "tag-label").text(n), h = m.node()?.getBBox();
                        if (!h) throw new Error("Tag bbox not found");
                        a = Math.max(a, h.width), c = Math.max(c, h.height), m.attr("x", e.posWithOffset - h.width / 2), i.push({
                            tag: m,
                            hole: s,
                            rect: r,
                            yOffset: o
                        }), o += 20;
                    }
                    for (const { tag: t, hole: r, rect: o, yOffset: s } of i){
                        const i = c / 2, m = e.y - 19.2 - s;
                        if (o.attr("class", "tag-label-bkg").attr("points", `\n      ${n - a / 2 - 2},${m + 2}  \n      ${n - a / 2 - 2},${m - 2}\n      ${e.posWithOffset - a / 2 - 4},${m - i - 2}\n      ${e.posWithOffset + a / 2 + 4},${m - i - 2}\n      ${e.posWithOffset + a / 2 + 4},${m + i + 2}\n      ${e.posWithOffset - a / 2 - 4},${m + i + 2}`), r.attr("cy", m).attr("cx", n - a / 2 + 2).attr("r", 1.5).attr("class", "tag-hole"), "TB" === W || "BT" === W) {
                            const c = n + s;
                            o.attr("class", "tag-label-bkg").attr("points", `\n        ${e.x},${c + 2}\n        ${e.x},${c - 2}\n        ${e.x + H},${c - i - 2}\n        ${e.x + H + a + 4},${c - i - 2}\n        ${e.x + H + a + 4},${c + i + 2}\n        ${e.x + H},${c + i + 2}`).attr("transform", "translate(12,12) rotate(45, " + e.x + "," + n + ")"), r.attr("cx", e.x + 2).attr("cy", c).attr("transform", "translate(12,12) rotate(45, " + e.x + "," + n + ")"), t.attr("x", e.x + 5).attr("y", c + 3).attr("transform", "translate(14,14) rotate(45, " + e.x + "," + n + ")");
                        }
                    }
                }
            }, "drawCommitTags"), at = (0, i.K2)((t)=>{
                switch(t.customType ?? t.type){
                    case h.NORMAL:
                        return "commit-normal";
                    case h.REVERSE:
                        return "commit-reverse";
                    case h.HIGHLIGHT:
                        return "commit-highlight";
                    case h.MERGE:
                        return "commit-merge";
                    case h.CHERRY_PICK:
                        return "commit-cherry-pick";
                    default:
                        return "commit-normal";
                }
            }, "getCommitClassType"), ct = (0, i.K2)((t, r, e, n)=>{
                const o = {
                    x: 0,
                    y: 0
                };
                if (!(t.parents.length > 0)) {
                    if ("TB" === r) return 30;
                    if ("BT" === r) {
                        return (n.get(t.id) ?? o).y - z;
                    }
                    return 0;
                }
                {
                    const e = V(t.parents);
                    if (e) {
                        const a = n.get(e) ?? o;
                        if ("TB" === r) return a.y + z;
                        if ("BT" === r) {
                            return (n.get(t.id) ?? o).y - z;
                        }
                        return a.x + z;
                    }
                }
                return 0;
            }, "calculatePosition"), it = (0, i.K2)((t, r, e)=>{
                const n = "BT" === W && e ? r : r + H, o = "TB" === W || "BT" === W ? n : S.get(t.branch)?.pos, a = "TB" === W || "BT" === W ? S.get(t.branch)?.pos : n;
                if (void 0 === a || void 0 === o) throw new Error(`Position were undefined for commit ${t.id}`);
                return {
                    x: a,
                    y: o,
                    posWithOffset: n
                };
            }, "getCommitPosition"), st = (0, i.K2)((t, r, e)=>{
                if (!q) throw new Error("GitGraph config not found");
                const n = t.append("g").attr("class", "commit-bullets"), o = t.append("g").attr("class", "commit-labels");
                let a = "TB" === W || "BT" === W ? 30 : 0;
                const c = [
                    ...r.keys()
                ], s = q?.parallelCommits ?? !1, m = (0, i.K2)((t, e)=>{
                    const n = r.get(t)?.seq, o = r.get(e)?.seq;
                    return void 0 !== n && void 0 !== o ? n - o : 0;
                }, "sortKeys");
                let h = c.sort(m);
                "BT" === W && (s && Q(h, r, a), h = h.reverse()), h.forEach((t)=>{
                    const c = r.get(t);
                    if (!c) throw new Error(`Commit not found for key ${t}`);
                    s && (a = ct(c, W, a, Y));
                    const i = it(c, a, s);
                    if (e) {
                        const t = at(c), r = c.customType ?? c.type, e = S.get(c.branch)?.index ?? 0;
                        et(n, c, i, t, e, r), nt(o, c, i, a), ot(o, c, i, a);
                    }
                    "TB" === W || "BT" === W ? Y.set(c.id, {
                        x: i.x,
                        y: i.posWithOffset
                    }) : Y.set(c.id, {
                        x: i.posWithOffset,
                        y: i.y
                    }), a = "BT" === W && s ? a + z : a + z + H, a > j && (j = a);
                });
            }, "drawCommits"), mt = (0, i.K2)((t, r, e, n, o)=>{
                const a = ("TB" === W || "BT" === W ? e.x < n.x : e.y < n.y) ? r.branch : t.branch, c = (0, i.K2)((t)=>t.branch === a, "isOnBranchToGetCurve"), s = (0, i.K2)((e)=>e.seq > t.seq && e.seq < r.seq, "isBetweenCommits");
                return [
                    ...o.values()
                ].some((t)=>s(t) && c(t));
            }, "shouldRerouteArrow"), ht = (0, i.K2)((t, r, e = 0)=>{
                const n = t + Math.abs(t - r) / 2;
                if (e > 5) return n;
                if (N.every((t)=>Math.abs(t - n) >= 10)) return N.push(n), n;
                const o = Math.abs(t - r);
                return ht(t, r - o / 5, e + 1);
            }, "findLane"), dt = (0, i.K2)((t, r, e, n)=>{
                const o = Y.get(r.id), a = Y.get(e.id);
                if (void 0 === o || void 0 === a) throw new Error(`Commit positions not found for commits ${r.id} and ${e.id}`);
                const c = mt(r, e, o, a, n);
                let i, s = "", m = "", d = 0, $ = 0, l = S.get(e.branch)?.index;
                if (e.type === h.MERGE && r.id !== e.parents[0] && (l = S.get(r.branch)?.index), c) {
                    s = "A 10 10, 0, 0, 0,", m = "A 10 10, 0, 0, 1,", d = 10, $ = 10;
                    const t = o.y < a.y ? ht(o.y, a.y) : ht(a.y, o.y), e = o.x < a.x ? ht(o.x, a.x) : ht(a.x, o.x);
                    "TB" === W ? o.x < a.x ? i = `M ${o.x} ${o.y} L ${e - d} ${o.y} ${m} ${e} ${o.y + $} L ${e} ${a.y - d} ${s} ${e + $} ${a.y} L ${a.x} ${a.y}` : (l = S.get(r.branch)?.index, i = `M ${o.x} ${o.y} L ${e + d} ${o.y} ${s} ${e} ${o.y + $} L ${e} ${a.y - d} ${m} ${e - $} ${a.y} L ${a.x} ${a.y}`) : "BT" === W ? o.x < a.x ? i = `M ${o.x} ${o.y} L ${e - d} ${o.y} ${s} ${e} ${o.y - $} L ${e} ${a.y + d} ${m} ${e + $} ${a.y} L ${a.x} ${a.y}` : (l = S.get(r.branch)?.index, i = `M ${o.x} ${o.y} L ${e + d} ${o.y} ${m} ${e} ${o.y - $} L ${e} ${a.y + d} ${s} ${e - $} ${a.y} L ${a.x} ${a.y}`) : o.y < a.y ? i = `M ${o.x} ${o.y} L ${o.x} ${t - d} ${s} ${o.x + $} ${t} L ${a.x - d} ${t} ${m} ${a.x} ${t + $} L ${a.x} ${a.y}` : (l = S.get(r.branch)?.index, i = `M ${o.x} ${o.y} L ${o.x} ${t + d} ${m} ${o.x + $} ${t} L ${a.x - d} ${t} ${s} ${a.x} ${t - $} L ${a.x} ${a.y}`);
                } else s = "A 20 20, 0, 0, 0,", m = "A 20 20, 0, 0, 1,", d = 20, $ = 20, "TB" === W ? (o.x < a.x && (i = e.type === h.MERGE && r.id !== e.parents[0] ? `M ${o.x} ${o.y} L ${o.x} ${a.y - d} ${s} ${o.x + $} ${a.y} L ${a.x} ${a.y}` : `M ${o.x} ${o.y} L ${a.x - d} ${o.y} ${m} ${a.x} ${o.y + $} L ${a.x} ${a.y}`), o.x > a.x && (s = "A 20 20, 0, 0, 0,", m = "A 20 20, 0, 0, 1,", d = 20, $ = 20, i = e.type === h.MERGE && r.id !== e.parents[0] ? `M ${o.x} ${o.y} L ${o.x} ${a.y - d} ${m} ${o.x - $} ${a.y} L ${a.x} ${a.y}` : `M ${o.x} ${o.y} L ${a.x + d} ${o.y} ${s} ${a.x} ${o.y + $} L ${a.x} ${a.y}`), o.x === a.x && (i = `M ${o.x} ${o.y} L ${a.x} ${a.y}`)) : "BT" === W ? (o.x < a.x && (i = e.type === h.MERGE && r.id !== e.parents[0] ? `M ${o.x} ${o.y} L ${o.x} ${a.y + d} ${m} ${o.x + $} ${a.y} L ${a.x} ${a.y}` : `M ${o.x} ${o.y} L ${a.x - d} ${o.y} ${s} ${a.x} ${o.y - $} L ${a.x} ${a.y}`), o.x > a.x && (s = "A 20 20, 0, 0, 0,", m = "A 20 20, 0, 0, 1,", d = 20, $ = 20, i = e.type === h.MERGE && r.id !== e.parents[0] ? `M ${o.x} ${o.y} L ${o.x} ${a.y + d} ${s} ${o.x - $} ${a.y} L ${a.x} ${a.y}` : `M ${o.x} ${o.y} L ${a.x - d} ${o.y} ${s} ${a.x} ${o.y - $} L ${a.x} ${a.y}`), o.x === a.x && (i = `M ${o.x} ${o.y} L ${a.x} ${a.y}`)) : (o.y < a.y && (i = e.type === h.MERGE && r.id !== e.parents[0] ? `M ${o.x} ${o.y} L ${a.x - d} ${o.y} ${m} ${a.x} ${o.y + $} L ${a.x} ${a.y}` : `M ${o.x} ${o.y} L ${o.x} ${a.y - d} ${s} ${o.x + $} ${a.y} L ${a.x} ${a.y}`), o.y > a.y && (i = e.type === h.MERGE && r.id !== e.parents[0] ? `M ${o.x} ${o.y} L ${a.x - d} ${o.y} ${s} ${a.x} ${o.y - $} L ${a.x} ${a.y}` : `M ${o.x} ${o.y} L ${o.x} ${a.y + d} ${m} ${o.x + $} ${a.y} L ${a.x} ${a.y}`), o.y === a.y && (i = `M ${o.x} ${o.y} L ${a.x} ${a.y}`));
                if (void 0 === i) throw new Error("Line definition not found");
                t.append("path").attr("d", i).attr("class", "arrow arrow" + l % 8);
            }, "drawArrow"), $t = (0, i.K2)((t, r)=>{
                const e = t.append("g").attr("class", "commit-arrows");
                [
                    ...r.keys()
                ].forEach((t)=>{
                    const n = r.get(t);
                    n.parents && n.parents.length > 0 && n.parents.forEach((t)=>{
                        dt(e, r.get(t), n, r);
                    });
                });
            }, "drawArrows"), lt = (0, i.K2)((t, r)=>{
                const e = t.append("g");
                r.forEach((t, r)=>{
                    const n = r % 8, o = S.get(t.name)?.pos;
                    if (void 0 === o) throw new Error(`Position not found for branch ${t.name}`);
                    const a = e.append("line");
                    a.attr("x1", 0), a.attr("y1", o), a.attr("x2", j), a.attr("y2", o), a.attr("class", "branch branch" + n), "TB" === W ? (a.attr("y1", 30), a.attr("x1", o), a.attr("y2", j), a.attr("x2", o)) : "BT" === W && (a.attr("y1", j), a.attr("x1", o), a.attr("y2", 30), a.attr("x2", o)), N.push(o);
                    const c = t.name, i = U(c), s = e.insert("rect"), m = e.insert("g").attr("class", "branchLabel").insert("g").attr("class", "label branch-label" + n);
                    m.node().appendChild(i);
                    const h = i.getBBox();
                    s.attr("class", "branchLabelBkg label" + n).attr("rx", 4).attr("ry", 4).attr("x", -h.width - 4 - (!0 === q?.rotateCommitLabel ? 30 : 0)).attr("y", -h.height / 2 + 8).attr("width", h.width + 18).attr("height", h.height + 4), m.attr("transform", "translate(" + (-h.width - 14 - (!0 === q?.rotateCommitLabel ? 30 : 0)) + ", " + (o - h.height / 2 - 1) + ")"), "TB" === W ? (s.attr("x", o - h.width / 2 - 10).attr("y", 0), m.attr("transform", "translate(" + (o - h.width / 2 - 5) + ", 0)")) : "BT" === W ? (s.attr("x", o - h.width / 2 - 10).attr("y", j), m.attr("transform", "translate(" + (o - h.width / 2 - 5) + ", " + j + ")")) : s.attr("transform", "translate(-19, " + (o - h.height / 2) + ")");
                });
            }, "drawBranches"), yt = (0, i.K2)(function(t, r, e, n, o) {
                return S.set(t, {
                    pos: r,
                    index: e
                }), r += 50 + (o ? 40 : 0) + ("TB" === W || "BT" === W ? n.width / 2 : 0);
            }, "setBranchPosition");
            var gt = {
                parser: O,
                db: K,
                renderer: {
                    draw: (0, i.K2)(function(t, r, e, n) {
                        if (F(), i.Rm.debug("in gitgraph renderer", t + "\n", "id:", r, e), !q) throw new Error("GitGraph config not found");
                        const o = q.rotateCommitLabel ?? !1, s = n.db;
                        _ = s.getCommits();
                        const h = s.getBranchesAsObjArray();
                        W = s.getDirection();
                        const d = (0, m.Ltv)(`[id="${r}"]`);
                        let $ = 0;
                        h.forEach((t, r)=>{
                            const e = U(t.name), n = d.append("g"), a = n.insert("g").attr("class", "branchLabel"), c = a.insert("g").attr("class", "label branch-label");
                            c.node()?.appendChild(e);
                            const i = e.getBBox();
                            $ = yt(t.name, $, r, i, o), c.remove(), a.remove(), n.remove();
                        }), st(d, _, !1), q.showBranches && lt(d, h), $t(d, _), st(d, _, !0), a._K.insertTitle(d, "gitTitleText", q.titleTopMargin ?? 0, s.getDiagramTitle()), (0, c.mj)(void 0, d, q.diagramPadding, q.useMaxWidth);
                    }, "draw")
                },
                styles: (0, i.K2)((t)=>`\n  .commit-id,\n  .commit-msg,\n  .branch-label {\n    fill: lightgrey;\n    color: lightgrey;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  ${[
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7
                    ].map((r)=>`\n        .branch-label${r} { fill: ${t["gitBranchLabel" + r]}; }\n        .commit${r} { stroke: ${t["git" + r]}; fill: ${t["git" + r]}; }\n        .commit-highlight${r} { stroke: ${t["gitInv" + r]}; fill: ${t["gitInv" + r]}; }\n        .label${r}  { fill: ${t["git" + r]}; }\n        .arrow${r} { stroke: ${t["git" + r]}; }\n        `).join("\n")}\n\n  .branch {\n    stroke-width: 1;\n    stroke: ${t.lineColor};\n    stroke-dasharray: 2;\n  }\n  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}\n  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }\n  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}\n  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }\n  .tag-hole { fill: ${t.textColor}; }\n\n  .commit-merge {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n  }\n  .commit-reverse {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n    stroke-width: 3;\n  }\n  .commit-highlight-outer {\n  }\n  .commit-highlight-inner {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n  }\n\n  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}\n  .gitTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.textColor};\n  }\n`, "getStyles")
            };
        },
        19812: (t, r, e)=>{
            var _class;
            e.d(r, {
                m: ()=>o
            });
            var n = e(35456), o = (_class = class {
                reset() {
                    this.records = this.init();
                }
                constructor(t){
                    this.init = t, this.records = this.init();
                }
            }, (0, n.K2)(_class, "ImperativeState"), _class);
        },
        93038: (t, r, e)=>{
            function populateCommonDb(t, r) {
                t.accDescr && r.setAccDescription?.(t.accDescr), t.accTitle && r.setAccTitle?.(t.accTitle), t.title && r.setDiagramTitle?.(t.title);
            }
            e.d(r, {
                S: ()=>populateCommonDb
            }), (0, e(35456).K2)(populateCommonDb, "populateCommonDb");
        }
    }
]); //# sourceMappingURL=3986.eaa3825e4969abfea964.js.map
