"use strict";
(self.webpackChunk_genie_chat_webview_app = self.webpackChunk_genie_chat_webview_app || []).push([
    [
        547
    ],
    {
        547: (e, t, a)=>{
            a.d(t, {
                diagram: ()=>y
            });
            var i = a(91991), l = a(93038), n = a(9147), r = a(94279), s = a(35456), o = a(44858), c = a(32551), p = r.UI.pie, d = {
                sections: new Map,
                showData: !1,
                config: p
            }, u = d.sections, g = d.showData, h = structuredClone(p), m = (0, s.K2)(()=>structuredClone(h), "getConfig"), f = (0, s.K2)(()=>{
                u = new Map, g = d.showData, (0, r.IU)();
            }, "clear"), w = (0, s.K2)(({ label: e, value: t })=>{
                if (t < 0) throw new Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
                u.has(e) || (u.set(e, t), s.Rm.debug(`added new section: ${e}, with value: ${t}`));
            }, "addSection"), S = (0, s.K2)(()=>u, "getSections"), x = (0, s.K2)((e)=>{
                g = e;
            }, "setShowData"), D = (0, s.K2)(()=>g, "getShowData"), b = {
                getConfig: m,
                clear: f,
                setDiagramTitle: r.ke,
                getDiagramTitle: r.ab,
                setAccTitle: r.SV,
                getAccTitle: r.iN,
                setAccDescription: r.EI,
                getAccDescription: r.m7,
                addSection: w,
                getSections: S,
                setShowData: x,
                getShowData: D
            }, $ = (0, s.K2)((e, t)=>{
                (0, l.S)(e, t), t.setShowData(e.showData), e.sections.map(t.addSection);
            }, "populateDb"), v = {
                parse: (0, s.K2)(async (e)=>{
                    const t = await (0, o.qg)("pie", e);
                    s.Rm.debug(t), $(t, b);
                }, "parse")
            }, C = (0, s.K2)((e)=>`\n  .pieCircle{\n    stroke: ${e.pieStrokeColor};\n    stroke-width : ${e.pieStrokeWidth};\n    opacity : ${e.pieOpacity};\n  }\n  .pieOuterCircle{\n    stroke: ${e.pieOuterStrokeColor};\n    stroke-width: ${e.pieOuterStrokeWidth};\n    fill: none;\n  }\n  .pieTitleText {\n    text-anchor: middle;\n    font-size: ${e.pieTitleTextSize};\n    fill: ${e.pieTitleTextColor};\n    font-family: ${e.fontFamily};\n  }\n  .slice {\n    font-family: ${e.fontFamily};\n    fill: ${e.pieSectionTextColor};\n    font-size:${e.pieSectionTextSize};\n    // fill: white;\n  }\n  .legend text {\n    fill: ${e.pieLegendTextColor};\n    font-family: ${e.fontFamily};\n    font-size: ${e.pieLegendTextSize};\n  }\n`, "getStyles"), T = (0, s.K2)((e)=>{
                const t = [
                    ...e.values()
                ].reduce((e, t)=>e + t, 0), a = [
                    ...e.entries()
                ].map(([e, t])=>({
                        label: e,
                        value: t
                    })).filter((e)=>e.value / t * 100 >= 1).sort((e, t)=>t.value - e.value);
                return (0, c.rLf)().value((e)=>e.value)(a);
            }, "createPieArcs"), y = {
                parser: v,
                db: b,
                renderer: {
                    draw: (0, s.K2)((e, t, a, l)=>{
                        s.Rm.debug("rendering pie chart\n" + e);
                        const o = l.db, p = (0, r.D7)(), d = (0, n.$t)(o.getConfig(), p.pie), u = 18, g = 450, h = g, m = (0, i.D)(t), f = m.append("g");
                        f.attr("transform", "translate(225,225)");
                        const { themeVariables: w } = p;
                        let [S] = (0, n.I5)(w.pieOuterStrokeWidth);
                        S ??= 2;
                        const x = d.textPosition, D = Math.min(h, g) / 2 - 40, b = (0, c.JLW)().innerRadius(0).outerRadius(D), $ = (0, c.JLW)().innerRadius(D * x).outerRadius(D * x);
                        f.append("circle").attr("cx", 0).attr("cy", 0).attr("r", D + S / 2).attr("class", "pieOuterCircle");
                        const v = o.getSections(), C = T(v), y = [
                            w.pie1,
                            w.pie2,
                            w.pie3,
                            w.pie4,
                            w.pie5,
                            w.pie6,
                            w.pie7,
                            w.pie8,
                            w.pie9,
                            w.pie10,
                            w.pie11,
                            w.pie12
                        ];
                        let k = 0;
                        v.forEach((e)=>{
                            k += e;
                        });
                        const A = C.filter((e)=>"0" !== (e.data.value / k * 100).toFixed(0)), K = (0, c.UMr)(y);
                        f.selectAll("mySlices").data(A).enter().append("path").attr("d", b).attr("fill", (e)=>K(e.data.label)).attr("class", "pieCircle"), f.selectAll("mySlices").data(A).enter().append("text").text((e)=>(e.data.value / k * 100).toFixed(0) + "%").attr("transform", (e)=>"translate(" + $.centroid(e) + ")").style("text-anchor", "middle").attr("class", "slice"), f.append("text").text(o.getDiagramTitle()).attr("x", 0).attr("y", -200).attr("class", "pieTitleText");
                        const R = [
                            ...v.entries()
                        ].map(([e, t])=>({
                                label: e,
                                value: t
                            })), _ = f.selectAll(".legend").data(R).enter().append("g").attr("class", "legend").attr("transform", (e, t)=>"translate(216," + (22 * t - 22 * R.length / 2) + ")");
                        _.append("rect").attr("width", u).attr("height", u).style("fill", (e)=>K(e.label)).style("stroke", (e)=>K(e.label)), _.append("text").attr("x", 22).attr("y", 14).text((e)=>o.getShowData() ? `${e.label} [${e.value}]` : e.label);
                        const z = 512 + Math.max(..._.selectAll("text").nodes().map((e)=>e?.getBoundingClientRect().width ?? 0));
                        m.attr("viewBox", `0 0 ${z} 450`), (0, r.a$)(m, g, z, d.useMaxWidth);
                    }, "draw")
                },
                styles: C
            };
        },
        93038: (e, t, a)=>{
            function populateCommonDb(e, t) {
                e.accDescr && t.setAccDescription?.(e.accDescr), e.accTitle && t.setAccTitle?.(e.accTitle), e.title && t.setDiagramTitle?.(e.title);
            }
            a.d(t, {
                S: ()=>populateCommonDb
            }), (0, a(35456).K2)(populateCommonDb, "populateCommonDb");
        }
    }
]); //# sourceMappingURL=547.6a24b60dd8fd4c707fa5.js.map
