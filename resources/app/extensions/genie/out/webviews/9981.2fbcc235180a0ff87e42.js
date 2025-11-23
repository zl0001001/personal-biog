"use strict";
(self.webpackChunk_genie_chat_webview_app = self.webpackChunk_genie_chat_webview_app || []).push([
    [
        9981
    ],
    {
        79981: (e, a, r)=>{
            r.d(a, {
                diagram: ()=>g
            });
            var t = r(80730), n = r(91991), s = r(94279), i = r(35456), d = r(44858), p = {
                parse: (0, i.K2)(async (e)=>{
                    const a = await (0, d.qg)("info", e);
                    i.Rm.debug(a);
                }, "parse")
            }, o = {
                version: t.n.version + ""
            }, g = {
                parser: p,
                db: {
                    getVersion: (0, i.K2)(()=>o.version, "getVersion")
                },
                renderer: {
                    draw: (0, i.K2)((e, a, r)=>{
                        i.Rm.debug("rendering info diagram\n" + e);
                        const t = (0, n.D)(a);
                        (0, s.a$)(t, 100, 400, !0);
                        t.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${r}`);
                    }, "draw")
                }
            };
        }
    }
]); //# sourceMappingURL=9981.2fbcc235180a0ff87e42.js.map
