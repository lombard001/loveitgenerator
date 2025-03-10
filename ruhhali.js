! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.$ = e() : t.$ = e()
}(self, (() => (() => {
    "use strict";

    function t(t, e, n) {
        return (e = function (t) {
            var e = function (t) {
                if ("object" != typeof t || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != typeof n) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == typeof e ? e : e + ""
        }(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    class e {}
    var n, i = "msp2_auth_token",
        r = {
            t: window.localStorage
        },
        s = {
            t: new TextDecoder
        };

    function o(t, e, n) {
        return (e = function (t) {
            var e = function (t) {
                if ("object" != typeof t || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != typeof n) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == typeof e ? e : e + ""
        }(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function a(t, e, n) {
        (function (t, e) {
            if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        })(t, e), e.set(t, n)
    }

    function c(t, e) {
        return t.get(h(t, e))
    }

    function h(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object")
    }
    t(e, "getUserData", (() => {
        const [t, e] = [t => JSON.parse(s.t.decode(Uint8Array.from(atob(t), (t => t.charCodeAt(0))))), null];
        return n => {
            try {
                const {
                    profileId: e,
                    name: i
                } = t(n.split(".")[1]);
                return {
                    profileId: e,
                    name: i
                }
            } catch {
                return e
            }
        }
    })()), t(e, "getToken", (() => r.t.getItem(i))), t(e, "saveToken", (t => t && r.t.setItem(i, t))), t(e, "isValidToken", (t => !!(t?.length >>> 0)));
    var u = new WeakMap,
        p = new WeakMap,
        l = new WeakMap;
    class d {
        constructor() {
            a(this, u, !1), a(this, p, {
                s: "https://umami.msp2.lol/script.js",
                i: "511ee3e4-ed45-4e55-9931-986040b1b070"
            }), a(this, l, (() => {
                if (c(u, this)) return;
                const t = document.createElement("script");
                Object.assign(t, {
                    src: c(p, this).s,
                    defer: !0,
                    onload: () => function (t, e, n) {
                        return t.set(h(t, e), n), n
                    }(u, this, !0)
                }), t.setAttribute("data-website-id", c(p, this).i), document.head.appendChild(t)
            })), o(this, "track", ((t, e) => window.umami?.track(t, e))), c(l, this).call(this)
        }
    }
    n = d;
    var f, w = {
        t: void 0
    };

    function m(t, e, n) {
        return (e = function (t) {
            var e = function (t) {
                if ("object" != typeof t || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != typeof n) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == typeof e ? e : e + ""
        }(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function g(t, e, n) {
        (function (t, e) {
            if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        })(t, e), e.set(t, n)
    }

    function y(t, e) {
        return t.get(function (t, e, n) {
            if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
            throw new TypeError("Private element is not present on this object")
        }(t, e))
    }
    o(d, "getInstance", (() => w.t ?? (w.t = new n)));
    var b = new WeakMap,
        v = new WeakMap,
        k = new WeakMap,
        x = new WeakMap,
        S = new WeakMap,
        j = new WeakMap;
    class W {
        constructor() {
            if (g(this, b, new Set(["google-analytics.com", "region1.analytics.google.com", "analytics.eu.moviestarplanet.app", "www.google-analytics.com"])), g(this, v, new Map), g(this, k, new Map), g(this, x, {
                    h: {
                        "content-type": "application/json",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                        accept: "application/json, text/plain, */*",
                        "accept-language": "en-US,en;q=0.9",
                        origin: "https://www.moviestarplanet.com",
                        referer: "https://www.moviestarplanet.com/",
                        "sec-ch-ua": '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": '"Windows"',
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "cross-site"
                    }
                }), g(this, S, (() => {
                    const t = XMLHttpRequest.prototype,
                        e = window.fetch;
                    var n;
                    t.open = (n = t.open, function () {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        return y(j, this).call(this, e[1]) ? void this.abort() : n.apply(this, e)
                    }), Object.defineProperty(window, "fetch", {
                        value: function (t, n) {
                            return y(j, this).call(this, t) ? Promise.resolve(new Response(null, {
                                status: 403
                            })) : e.call(window, t, n)
                        }.bind(this),
                        writable: !0
                    })
                })), g(this, j, (t => {
                    if (y(v, this).has(t)) return y(v, this).get(t);
                    try {
                        const e = y(b, this).has(new URL(t).hostname);
                        return y(v, this).set(t, e), e
                    } catch {
                        return !1
                    }
                })), m(this, "getHeaders", (t => {
                    const e = t || "";
                    if (y(k, this).has(e)) return y(k, this).get(e);
                    const n = {
                        ...y(x, this).h,
                        authorization: t ? `Bearer ${t}` : ""
                    };
                    return Object.freeze(n), y(k, this).set(e, n), n
                })), m(this, "delay", (function () {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
                    return new Promise((n => setTimeout(n, ~~(Math.random() * (e - t + 1)) + t)))
                })), M.t) return M.t;
            M.t = this, y(S, this).call(this)
        }
    }
    f = W;
    var M = {
        t: void 0
    };

    function T(t, e, n) {
        (function (t, e) {
            if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        })(t, e), e.set(t, n)
    }

    function z(t, e) {
        return t.get(_(t, e))
    }

    function O(t, e, n) {
        return t.set(_(t, e), n), n
    }

    function _(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object")
    }
    m(W, "getInstance", (() => M.t ?? new f));
    var P = new WeakMap,
        C = new WeakMap,
        $ = new WeakMap,
        E = new WeakMap;
    class I {
        constructor() {
            T(this, P, !0), T(this, C, void 0), T(this, $, void 0), T(this, E, ["cf0589ffe9ed45369d70dcaaa9aa1db2", "6ca07ffa53e3468598e6f2a2e0d20ded", "cf42a511688e49f795e387d43a78c758", "d92645e7672142028f2731aeda6e8e6f", "39e585c334834622ab69fa636068d278", "7e4f2d790d5c4b3e808f3737b30f6458", "c568275ccfbb482486d54942542fe22f", "e79da67391154e56ad381960ca344b54", "3924865e60fe426eb2862fd9a7a813b5", "d2d9a0623b24dde83142b8951ea3a79", "8a05904fe4c042009f60ea0e3958832e"]), O(C, this, d.getInstance()), O($, this, W.getInstance()), this.initialize()
        }
        initialize() {
            this.interceptFetchRequests(), this.interceptWebSocket()
        }
        interceptFetchRequests() {
            var t = this;
            const n = window.fetch;
            window.fetch = async function () {
                for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
                const [o, a] = r;
                try {
                    if (a?.headers) {
                        const n = Object.entries(a.headers).find((t => {
                            let [e] = t;
                            return "authorization" === e.toLowerCase()
                        }))?. [1];
                        if (n && n.startsWith("Bearer ")) {
                            const i = t.extractBearerToken(n);
                            e.isValidToken(i) && e.saveToken(i)
                        }
                    }
                    if (o.includes("games/j68d/definitions?questType=EventQuest&questType=StaticDailyQuest&questType=RandomDailyQuest")) {
                        z(C, t).track("All Quests Completed");
                        const e = await n.apply(window, r),
                            i = await e.clone().json();
                        return i.questDefinitions && await t.processQuestDefinitions(i.questDefinitions), e
                    }
                    if (o.includes("games/j68d/quests?questType=EventQuest&questType=StaticDailyQuest&questType=RandomDailyQuest")) {
                        z(C, t).track("All Quests Completed");
                        const e = await n.apply(window, r),
                            i = await e.clone().json();
                        return i.questDefinitions && await t.processQuestDefinitions(i.quests), e
                    }
                } catch (t) {}
                return n.apply(window, r)
            }
        }
        extractBearerToken(t) {
            return t.replace("Bearer ", "").trim()
        }
        getToken() {
            return e.getToken() || null
        }
        async resetAvatar() {
            try {
                const t = this.getToken(),
                    e = this.getProfileId();
                if (!t || !e) throw new Error("Missing authentication");
                const n = await fetch(`https://eu.mspapis.com/profileattributes/v1/profiles/${e}/games/j68d/attributes`, {
                        headers: z($, this).getHeaders(t)
                    }),
                    i = await n.json();
                if (!i?.avatarId) throw new Error("No avatar ID found");
                const r = await fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent("https://github.com/mwarcc/msp2guis/raw/refs/heads/main/default.bson"));
                if (!r.ok) throw new Error("Failed to get default avatar");
                const s = await r.arrayBuffer(),
                    o = await fetch(`https://eu.mspapis.com/profilegeneratedcontent/v2/profiles/${e}/games/j68d/avatars/${i.avatarId}`, {
                        method: "PUT",
                        headers: {
                            ...z($, this).getHeaders(t),
                            "content-type": "application/bson",
                            signature: "2eA/CteuR/k2YUipj3YflkjpxJLRoUlSbNNY8xpwo6S8="
                        },
                        body: s
                    });
                if (!o.ok) throw new Error(`Avatar update failed: ${o.status}`)
            } catch (t) {}
        }
        async processQuestDefinitions(t) {
            const e = this.getToken(),
                n = this.getProfileId();
            if (!e || !n) return;
            const i = async t => {
                const r = t.definitionId;
                if (!r) return;
                const s = async () => {
                    try {
                        await fetch(`https://eu.mspapis.com/quests/v2/profiles/${n}/games/j68d/quests/${r}/progress`, {
                            method: "PUT",
                            headers: z($, this).getHeaders(e),
                            body: JSON.stringify({
                                progress: 1
                            })
                        })
                    } catch (t) {}
                }, o = r.toLowerCase().includes("gift") ? 4 : 1;
                for (let t = 0; t < o; t++) await s();
                if (t.children && Array.isArray(t.children))
                    for (const e of t.children) await i(e)
            };
            for (const e of t) await i(e);
            await this.updateSpecificQuests(n, e), await this.processPetInteractions(n, e)
        }
        async updateSpecificQuests(t, e) {
            try {
                await fetch(`https://eu.mspapis.com/quests/v2/profiles/${t}/games/j68d/quests/random_daily_change_profile_bg/state`, {
                    method: "PUT",
                    headers: z($, this).getHeaders(e),
                    body: JSON.stringify({
                        state: "Complete"
                    })
                });
                for (let n = 0; n < 10; n++) await fetch(`https://eu.mspapis.com/quests/v2/profiles/${t}/games/j68d/quests/daily_pet_pets/state`, {
                    method: "PUT",
                    headers: z($, this).getHeaders(e),
                    body: JSON.stringify({
                        state: "Complete"
                    })
                });
                for (let n = 0; n < 4; n++) await fetch(`https://eu.mspapis.com/timelimitedrewards/v2/profiles/${t}/games/j68d/rewards/daily_pickup`, {
                    method: "PUT",
                    headers: z($, this).getHeaders(e),
                    body: JSON.stringify({
                        state: "Claimed"
                    })
                })
            } catch (t) {}
        }
        async processPetInteractions(t, e) {
            for (const n of z(E, this)) try {
                await fetch(`https://eu.mspapis.com/pets/v1/pets/${n}/interactions`, {
                    method: "POST",
                    headers: z($, this).getHeaders(e),
                    body: JSON.stringify({
                        profileId: t,
                        gameId: "j68d"
                    })
                })
            } catch (t) {}
        }
        getProfileId() {
            const t = this.getToken();
            if (!t) return null;
            try {
                return JSON.parse(atob(t.split(".")[1])).profileId
            } catch (t) {
                return null
            }
        }
        interceptWebSocket() {
            const t = window.WebSocket,
                e = this;
            window.WebSocket = function () {
                for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                const s = new t(...i);
                s.addEventListener("message", (t => {
                    z(P, e) && e.handleQuizMessage(s, t.data)
                }));
                const o = s.send;
                return s.send = function (t) {
                    return z(P, e) && "string" == typeof t && e.handleOutgoingMessage(t, s), o.apply(this, arguments)
                }, s
            }, Object.assign(window.WebSocket, t)
        }
        handleOutgoingMessage(t, e) {
            '42["chatv2:send",{"message":"avreset"}]' !== t && '42["chatv2:send",{"message":"a­v­r­e­s­e­t"}]' !== t || (z(C, this).track("Avatar Reset"), this.resetAvatar())
        }
        toggle() {
            O(P, this, !z(P, this))
        }
    }

    function A(t, e, n) {
        (function (t, e) {
            if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        })(t, e), e.set(t, n)
    }

    function N(t, e) {
        return t.get(R(t, e))
    }

    function q(t, e, n) {
        return t.set(R(t, e), n), n
    }

    function R(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object")
    }
    var J = new WeakMap,
        U = new WeakMap,
        G = new WeakMap,
        Q = new WeakMap;
    class D {
        constructor() {
            A(this, J, !0), A(this, U, new Map), A(this, G, null), A(this, Q, void 0), q(Q, this, d.getInstance()), this.initialize()
        }
        async initialize() {
            try {
                const t = await fetch("https://raw.githubusercontent.com/mwarcc/ss/refs/heads/main/quiz.json");
                if (!t.ok) throw new Error(`HTTP error! Status: ${t.status}`);
                const e = await t.json();
                Object.entries(e).forEach((t => {
                    let [e, n] = t;
                    N(U, this).set(e, n)
                })), this.interceptWebSocket()
            } catch (t) {}
        }
        interceptWebSocket() {
            const t = window.WebSocket,
                e = this;
            window.WebSocket = function () {
                for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                const s = new t(...i);
                return s.addEventListener("message", (t => {
                    N(J, e) && e.handleMessage(s, t.data)
                })), s
            }, Object.assign(window.WebSocket, t)
        }
        handleMessage(t, e) {
            if (e.startsWith('40{"jwt":"') || e.match(/^\d+$/)) return;
            const n = e.startsWith("42[") ? e.substring(2) : e;
            try {
                const [e, i] = JSON.parse(n);
                this.processPayload(t, i)
            } catch (t) {}
        }
        processPayload(t, e) {
            const {
                messageType: n,
                messageContent: i
            } = e;
            switch (n) {
            case "game:state":
                N(Q, this).track("Quiz State"), this.handleGameState(t, i);
                break;
            case "quiz:chal":
                N(Q, this).track("Quiz Challenge"), this.handleQuizChallenge(i);
                break;
            case "quiz:reveal":
                N(Q, this).track("Quiz Reveal"), this.handleQuizReveal(i)
            }
        }
        handleGameState(t, e) {
            if ("waiting_for_answer" === e.newState) {
                N(Q, this).track("Waiting For Quiz Answer");
                const e = N(G, this) && N(U, this).get(N(G, this))?.correctAnswer ? N(U, this).get(N(G, this)).correctAnswer : Math.floor(3 * Math.random()) + 1;
                t.send(`42${JSON.stringify(["quiz:answer",{answer:e}])}`)
            }
        }
        handleQuizChallenge(t) {
            let {
                question: e,
                answers: n
            } = t;
            e && n && (q(G, this, e), N(U, this).has(e) || N(U, this).set(e, {
                answers: n,
                correctAnswer: null
            }))
        }
        handleQuizReveal(t) {
            let {
                correctAnswer: e
            } = t;
            if (N(G, this)) {
                const t = N(U, this).get(N(G, this));
                t && N(U, this).set(N(G, this), {
                    ...t,
                    correctAnswer: e
                })
            }
        }
        toggle() {
            q(J, this, !N(J, this)), N(Q, this).track("Auto Quiz Toggle")
        }
    }

    function B(t, e, n) {
        (function (t, e) {
            if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        })(t, e), e.set(t, n)
    }

    function L(t, e) {
        return t.get(Y(t, e))
    }

    function F(t, e, n) {
        return t.set(Y(t, e), n), n
    }

    function Y(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object")
    }
    var K = new WeakMap,
        H = new WeakMap,
        X = new WeakMap,
        Z = new WeakMap,
        V = new WeakMap,
        tt = new WeakMap,
        et = new WeakMap,
        nt = new WeakMap,
        it = new WeakMap;
    class rt {
        constructor() {
            var t = this;
            B(this, K, !1), B(this, H, void 0), B(this, X, /curatedcontentitemtemplates\/v2\/item-templates\//), B(this, Z, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"), B(this, V, (() => {
                const e = window.fetch;
                window.fetch = async function () {
                    for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    const s = i[0];
                    return L(K, t) && L(X, t).test(s) ? (L(H, t).track("ItemLayeringService Called"), L(tt, t).call(t, e, ...i)) : e.apply(window, i)
                }
            })), B(this, tt, (async function (e) {
                for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                try {
                    const n = await e.apply(window, i),
                        r = await n.clone().json();
                    return L(et, t).call(t, r), new Response(JSON.stringify(r), {
                        status: 200,
                        statusText: "OK",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                } catch (t) {
                    return e.apply(window, i)
                }
            })), B(this, et, (t => {
                t.forEach((t => {
                    t.tags?.forEach((t => {
                        t.resourceIdentifiers?.forEach((t => t.key = L(nt, this).call(this)))
                    })), t.additionalData?.MSP2Data && (t.additionalData.MSP2Data.Type = L(nt, this).call(this))
                }))
            })), B(this, nt, (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
                return Array.from({
                    length: e
                }, (() => L(Z, t)[~~(Math.random() * L(Z, t).length)])).join("")
            })), B(this, it, (() => {
                window.addEventListener("keydown", (t => {
                    t.shiftKey && /^[aA]$/.test(t.key) && (F(K, this, !L(K, this)), L(H, this).track("ItemLayeringService " + (L(K, this) ? "enabled" : "disabled")))
                }))
            })), F(H, this, d.getInstance()), L(V, this).call(this), L(it, this).call(this)
        }
    }

    function st(t, e, n) {
        return (e = function (t) {
            var e = function (t) {
                if ("object" != typeof t || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != typeof n) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == typeof e ? e : e + ""
        }(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function ot(t, e, n) {
        (function (t, e) {
            if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        })(t, e), e.set(t, n)
    }

    function at(t, e) {
        return t.get(ct(t, e))
    }

    function ct(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object")
    }
    var ht = new WeakMap,
        ut = new WeakMap,
        pt = new WeakMap,
        lt = new WeakMap,
        dt = new WeakMap,
        ft = new WeakMap,
        wt = new WeakMap,
        mt = new WeakMap,
        gt = new WeakMap;
    class yt {
        constructor() {
            var t = this;
            ot(this, ht, {
                d: !1
            }), ot(this, ut, d.getInstance()), ot(this, pt, window.fetch), ot(this, lt, {
                b: "https://api.msp2cheats.eu/purchase",
                x: "https://api.xerus.lol/listings"
            }), ot(this, dt, (() => at(mt, this).call(this))), ot(this, ft, (t => !/\/(shops\/(?:6|13)\/tags)/.test(t) && (/(?:eu|us)\.mspapis\.com\/shop(?:inventory|purchase)\/v1\/(?:shops|games\/j68d\/profiles)/.test(t) || t === at(lt, this).b))), ot(this, wt, (t => {
                try {
                    const e = new URL(t);
                    if (e.pathname.includes("/items/purchase")) return at(lt, this).b;
                    if (at(ht, this).d) {
                        const t = new URLSearchParams(e.search),
                            n = new URL(at(lt, this).x);
                        return [...t].filter((t => {
                            let [e] = t;
                            return !/auth/i.test(e)
                        })).forEach((t => {
                            let [e, i] = t;
                            return n.searchParams.append(e, i)
                        })), n.searchParams.append("diamondPack", "True"), n.toString()
                    }
                    return t
                } catch {
                    return t
                }
            })), ot(this, mt, (() => {
                window.fetch = async function () {
                    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    const [r, s] = n;
                    return "string" == typeof r && at(ft, t).call(t, r) ? at(wt, t).call(t, r) === at(lt, t).b ? at(gt, t).call(t, at(lt, t).b, s ?? {}) : at(pt, t).call(t, at(wt, t).call(t, r), s ?? {}) : at(pt, t).apply(window, n)
                }
            })), ot(this, gt, (async (t, n) => {
                const i = await at(pt, this).call(this, t, n),
                    r = await i.json(),
                    s = "purchaseList",
                    o = JSON.parse(localStorage.getItem(s) || "[]");
                return o.push(...r), localStorage.setItem(s, JSON.stringify(o.slice(-100))), at(ut, this).track("Bought items from shop", e.getUserData(window.msp2Client.getToken())), new Response(JSON.stringify(r), {
                    status: 200,
                    statusText: "OK",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            })), st(this, "setEnabled", (t => {
                let {
                    diamondPacks: e
                } = t;
                return i = {
                    d: e
                }, (n = ht).set(ct(n, this), i), i;
                var n, i
            })), st(this, "restore", (() => window.fetch = at(pt, this))), at(dt, this).call(this)
        }
    }

    function bt(t, e, n) {
        (function (t, e) {
            if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        })(t, e), e.set(t, n)
    }

    function vt(t, e) {
        return t.get(St(t, e))
    }

    function kt(t, e, n) {
        e || (e = []);
        var i = e.length++;
        return Object.defineProperty({}, "t", {
            set: function (r) {
                e[i] = r, t.apply(n, e)
            }
        })
    }

    function xt(t, e, n) {
        return t.set(St(t, e), n), n
    }

    function St(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object")
    }
    var jt = new WeakMap,
        Wt = new WeakMap,
        Mt = new WeakMap,
        Tt = new WeakMap,
        zt = new WeakMap,
        Ot = new WeakMap,
        _t = new WeakMap;
    class Pt {
        constructor() {
            var t, n, i, r = this;
            bt(this, jt, void 0), bt(this, Wt, void 0), bt(this, Mt, void 0), bt(this, Tt, "­"), bt(this, zt, (() => {
                vt(Ot, this).call(this), vt(_t, this).call(this)
            })), bt(this, Ot, (() => {
                window.fetch = async (t, n) => {
                    if (t.includes("/history") && n?.body) {
                        const t = n.headers?. ["Content-Type"] ?? n.headers?.get?.("Content-Type");
                        if (t?.includes("application/json")) try {
                            const t = "string" == typeof n.body ? n.body : await (n.body.text?.()),
                                i = JSON.parse(t);
                            i.MessageBody && (vt(jt, this).track("Bypassed chat filtering", e.getUserData(window.msp2Client.getToken())), i.MessageBody = i.MessageBody.split("").join(vt(Tt, this)), n.body = JSON.stringify(i))
                        } catch (t) {}
                    }
                    return vt(Wt, this).call(window, t, n)
                }
            })), bt(this, _t, (() => {
                window.WebSocket = function () {
                    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    const s = new(vt(Mt, r))(...n),
                        o = s.send;
                    return s.send = t => {
                        try {
                            if ("string" == typeof t && t.startsWith("42[")) {
                                const n = JSON.parse(t.slice(2));
                                Array.isArray(n) && "chatv2:send" === n[0] && n[1]?.message && (n[1].message = n[1].message.split("").join(vt(Tt, r)), t = "42" + JSON.stringify(n), vt(jt, r).track("Bypassed chat filtering in chatroom", e.getUserData(window.msp2Client.getToken())))
                            }
                        } catch (t) {}
                        o.call(s, t)
                    }, s
                }, Object.assign(window.WebSocket, vt(Mt, this))
            })), t = this, i = () => {
                window.fetch = vt(Wt, this), window.WebSocket = vt(Mt, this)
            }, (n = function (t) {
                var e = function (t) {
                    if ("object" != typeof t || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var n = e.call(t, "string");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == typeof e ? e : e + ""
            }(n = "restore")) in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i, xt(jt, this, d.getInstance()), [kt(xt, [Wt, this]).t, kt(xt, [Mt, this]).t] = [window.fetch, window.WebSocket], vt(zt, this).call(this)
        }
    }

    function Ct(t, e, n) {
        (function (t, e) {
            if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        })(t, e), e.set(t, n)
    }

    function $t(t, e) {
        return t.get(It(t, e))
    }

    function Et(t, e, n) {
        return t.set(It(t, e), n), n
    }

    function It(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object")
    }
    var At = new WeakMap,
        Nt = new WeakMap,
        qt = new WeakMap,
        Rt = new WeakMap,
        Jt = new WeakMap,
        Ut = new WeakMap;
    class Gt {
        constructor() {
            if (Ct(this, At, !0), Ct(this, Nt, localStorage.getItem("selectedEmote") || "default"), Ct(this, qt, void 0), Ct(this, Rt, !1), Ct(this, Jt, JSON.parse(localStorage.getItem("emotePosition") || '{"x": 10, "y": 10}')), Ct(this, Ut, new Set(["noshoes_skating", "swim_new", "bunny_hold", "2023_spidercrawl_lsz", "bad_2022_teenwalk_dg", "xmas_2022_frosty_dg", "xmas_2022_freezing_lsz", "2022_turkeywalk_lsz", "2022_easter_sackjump_dg", "cool_slide", "very_2022_froglike_lsz", "2023_bended_lz", "badd_2025_skateboardanim_lsz", "dream_2024_onthemoon_lsz", "bigcity_2025_stomping_lsz", "badd_2025_skateboardanim_lsz", "bambislide", "im_in_love", "iceskate_ballerina", "spicyaftershave", ])), Qt.t) return Qt.t;
            Qt.t = this, Et(qt, this, window.WebSocket), "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", (() => this.initialize())) : this.initialize()
        }
        static getInstance() {
            return Qt.t ?? new Gt
        }
        initialize() {
            this.createGUI(), this.interceptWebSocket()
        }
        createGUI() {
            const t = document.createElement("link");
            t.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap", t.rel = "stylesheet", document.head.appendChild(t);
            const e = document.createElement("div");
            Object.assign(e.style, {
                position: "fixed",
                top: `${$t(Jt,this).y}px`,
                left: `${$t(Jt,this).x}px`,
                backgroundColor: "rgba(17, 17, 27, 0.85)",
                padding: "24px",
                zoom: "70%",
                borderRadius: "24px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
                zIndex: "10000",
                width: "200px",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
                color: "#fff",
                backdropFilter: "blur(1px)",
                border: "1px solid rgba(255, 255, 255, 0.05)"
            });
            const n = document.createElement("div");
            Object.assign(n.style, {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
                cursor: "move",
                padding: "4px",
                userSelect: "none"
            });
            const i = document.createElement("div");
            i.innerHTML = "Ruh Hali", Object.assign(i.style, {
                fontSize: "22px",
                fontWeight: "600",
                background: "linear-gradient(135deg, #cdd6f4 0%, #89b4fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.5px"
            });
            const r = document.createElement("div");
            Object.assign(r.style, {
                display: "flex",
                gap: "12px",
                background: "rgba(49, 50, 68, 0.3)",
                padding: "4px",
                borderRadius: "12px"
            });
            const s = document.createElement("button");
            s.innerHTML = $t(Rt, this) ? "+" : "−", Object.assign(s.style, {
                backgroundColor: "rgba(69, 71, 90, 0.5)",
                border: "none",
                color: "#cdd6f4",
                width: "32px",
                height: "32px",
                borderRadius: "10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                backdropFilter: "blur(4px)",
                outline: "none"
            }), s.addEventListener("click", (() => {
                this.toggleMinimize(), s.innerHTML = $t(Rt, this) ? "+" : "−"
            })), s.addEventListener("mouseover", (() => {
                s.style.backgroundColor = "rgba(88, 91, 112, 0.7)", s.style.transform = "scale(1.05)"
            })), s.addEventListener("mouseout", (() => {
                s.style.backgroundColor = "rgba(69, 71, 90, 0.5)", s.style.transform = "scale(1)"
            })), r.appendChild(s), n.appendChild(i), n.appendChild(r), e.appendChild(n);
            const o = document.createElement("div");
            Object.assign(o.style, {
                position: "relative",
                marginBottom: "20px",
                transition: "all 0.3s ease"
            });
            const a = document.createElement("select");
            Object.assign(a.style, {
                width: "100%",
                padding: "16px 20px",
                backgroundColor: "rgba(49, 50, 68, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                color: "#cdd6f4",
                fontSize: "15px",
                appearance: "none",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                fontFamily: "inherit",
                outline: "none"
            });
            const c = document.createElement("style");
            c.textContent = "\n            select:focus {\n                outline: none;\n                border-color: rgba(137, 180, 250, 0.5);\n                box-shadow: 0 0 0 3px rgba(137, 180, 250, 0.15);\n            }\n            select:hover {\n                background-color: rgba(49, 50, 68, 0.6);\n                border-color: rgba(255, 255, 255, 0.2);\n            }\n            select option {\n                background-color: #1e1e2e;\n                color: #cdd6f4;\n                padding: 16px;\n                font-size: 14px;\n            }\n            select option:hover {\n                background-color: #313244;\n            }\n            @keyframes fadeIn {\n                from { opacity: 0; transform: translateY(-10px); }\n                to { opacity: 1; transform: translateY(0); }\n            }\n            @keyframes slideIn {\n                from { transform: translateX(-20px); opacity: 0; }\n                to { transform: translateX(0); opacity: 1; }\n            }\n        ", document.head.appendChild(c), Array.from($t(Ut, this)).forEach(((t, e) => {
                const n = document.createElement("option");
                n.value = t, n.textContent = this.formatEmoteName(t), n.selected = t === $t(Nt, this), n.style.animation = `fadeIn 0.3s ease forwards ${.05*e}s`, a.appendChild(n)
            })), a.addEventListener("change", (t => {
                Et(Nt, this, t.target.value), localStorage.setItem("selectedEmote", $t(Nt, this))
            }));
            const h = document.createElement("div");
            Object.assign(h.style, {
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                width: "10px",
                height: "10px",
                borderLeft: "2px solid rgba(205, 214, 244, 0.8)",
                borderBottom: "2px solid rgba(205, 214, 244, 0.8)",
                transform: "translateY(-30%) rotate(-45deg)",
                transition: "all 0.2s ease"
            }), o.appendChild(a), o.appendChild(h), e.appendChild(o);
            const u = document.createElement("button");
            this.updateToggleButton(u), Object.assign(u.style, {
                width: "100%",
                backgroundColor: $t(At, this) ? "rgba(166, 227, 161, 0.9)" : "rgba(243, 139, 168, 0.9)",
                border: "none",
                color: "#11111b",
                padding: "16px",
                borderRadius: "16px",
                cursor: "pointer",
                fontWeight: "600",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                fontSize: "15px",
                letterSpacing: "0.3px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                outline: "none",
                transform: "translateZ(0)",
                animation: "slideIn 0.4s ease forwards"
            }), u.addEventListener("click", (() => {
                Et(At, this, !$t(At, this)), this.updateToggleButton(u)
            })), u.addEventListener("mouseover", (() => {
                u.style.transform = "translateZ(0) scale(1.02)", u.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.15)"
            })), u.addEventListener("mouseout", (() => {
                u.style.transform = "translateZ(0) scale(1)", u.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)"
            })), e.appendChild(u);
            let p, l, d, f, w = !1;
            n.addEventListener("mousedown", (t => {
                w = !0, d = t.clientX - $t(Jt, this).x, f = t.clientY - $t(Jt, this).y, e.style.transition = "none", e.style.cursor = "grabbing"
            })), document.addEventListener("mousemove", (t => {
                w && (t.preventDefault(), p = t.clientX - d, l = t.clientY - f, $t(Jt, this).x = p, $t(Jt, this).y = l, e.style.left = `${p}px`, e.style.top = `${l}px`, localStorage.setItem("emotePosition", JSON.stringify($t(Jt, this))))
            })), document.addEventListener("mouseup", (() => {
                w = !1, e.style.transition = "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", e.style.cursor = "default"
            })), e.style.opacity = "0", document.body.appendChild(e), requestAnimationFrame((() => {
                e.style.opacity = "1"
            })), this.container = e, this.select = a
        }
        formatEmoteName(t) {
            return t.split("_").map((t => t.charAt(0).toUpperCase() + t.slice(1))).join(" ")
        }
        updateToggleButton(t) {
            const e = $t(At, this) ? "Açık" : "Kapalı";
            t.innerHTML = `\n            <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">\n                <span style="font-size: 16px;">${e}</span>\n                <span style="font-size: 14px; opacity: 0.8;">Mood</span>\n            </div>\n        `, t.style.backgroundColor = $t(At, this) ? "rgba(166, 227, 161, 0.9)" : "rgba(243, 139, 168, 0.9)"
        }
        toggleMinimize() {
            Et(Rt, this, !$t(Rt, this)), $t(Rt, this) ? (this.select.style.display = "none", this.container.style.height = "auto") : (this.select.style.display = "block", this.container.style.height = "auto")
        }
        interceptWebSocket() {
            const t = this;
            window.WebSocket = function () {
                for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                const r = new($t(qt, t))(...n),
                    s = r.send;
                return r.send = function (e) {
                    if ($t(At, t) && "string" == typeof e && e.startsWith('42["7001"')) try {
                        const n = JSON.parse(e.slice(2));
                        Array.isArray(n) && n[1]?.mood && (n[1].mood = $t(Nt, t), e = "42" + JSON.stringify(n))
                    } catch (t) {}
                    return s.call(this, e)
                }, r
            }, Object.assign(window.WebSocket, $t(qt, this))
        }
        restore() {
            window.WebSocket = $t(qt, this), this.container && this.container.parentNode && this.container.parentNode.removeChild(this.container)
        }
    }
    var Qt = {
        t: void 0
    };

    function Dt(t, e, n) {
        (function (t, e) {
            if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        })(t, e), e.set(t, n)
    }

    function Bt(t, e) {
        return t.get(Ft(t, e))
    }

    function Lt(t, e, n) {
        return t.set(Ft(t, e), n), n
    }

    function Ft(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object")
    }
    var Yt = new WeakMap,
        Kt = new WeakMap,
        Ht = new WeakMap,
        Xt = new WeakMap,
        Zt = new WeakMap,
        Vt = new WeakMap,
        te = new WeakMap;
    class ee {
        constructor() {
            Dt(this, Yt, !0), Dt(this, Kt, void 0), Dt(this, Ht, void 0), Dt(this, Xt, void 0), Dt(this, Zt, void 0), Dt(this, Vt, null), Dt(this, te, null), Lt(Kt, this, d.getInstance()), Lt(Ht, this, W.getInstance()), Lt(Xt, this, window.WebSocket), Lt(Zt, this, window.fetch), this.initialize()
        }
        initialize() {
            this.interceptWebSocket(), this.createNotificationStyles(), this.setupKeyboardShortcut()
        }
        setupKeyboardShortcut() {
            window.addEventListener("keydown", (t => {
                t.altKey && "1" === t.key && (t.preventDefault(), this.handleAutogreetCommand())
            }))
        }
        createNotificationStyles() {
            const t = document.createElement("style");
            t.textContent = "\n      .greet-notification {\n        position: fixed;\n        top: -100px;\n        left: 50%;\n        transform: translateX(-50%);\n        background: rgba(17, 17, 27, 0.95);\n        color: #fff;\n        padding: 12px 24px;\n        border-radius: 12px;\n        font-family: 'Inter', system-ui, -apple-system, sans-serif;\n        font-size: 14px;\n        z-index: 10000;\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n        border: 1px solid rgba(255, 255, 255, 0.1);\n        transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n      }\n      .greet-notification.show {\n        top: 20px;\n      }\n    ", document.head.appendChild(t)
        }
        showNotification(t) {
            let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            const n = document.createElement("div");
            n.className = "greet-notification", n.innerHTML = `${e?"✅":"❌"} ${t}`, document.body.appendChild(n), setTimeout((() => n.classList.add("show")), 100), setTimeout((() => {
                n.classList.remove("show"), setTimeout((() => n.remove()), 300)
            }), 3e3)
        }
        interceptWebSocket() {
            const t = window.WebSocket;
            window.WebSocket = function () {
                for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                return new t(...n)
            }, Object.assign(window.WebSocket, t)
        }
        async handleAutogreetCommand() {
            if (!Bt(Yt, this)) return void this.showNotification("Greetings Service is disabled", !1);
            const t = await this.promptUsername();
            if (!t) return void this.showNotification("No username provided", !1);
            const n = e.getToken();
            if (!n) return void this.showNotification("Not logged in", !1);
            const i = e.getUserData(n);
            if (!i?.name) return void this.showNotification("Could not get user data", !1);
            const r = i.name.split("|")[0],
                s = await this.findProfileId(t, r);
            s ? (Lt(Vt, this, s), this.startGreeting(), this.showNotification(`Started auto-greeting ${t}`, !0)) : this.showNotification(`Could not find user ${t}`, !1)
        }
        promptUsername() {
            return new Promise((t => {
                const e = prompt("Enter username to auto-greet:");
                t(e?.trim() || null)
            }))
        }
        async findProfileId(t, n) {
            try {
                const i = await fetch("https://eu.mspapis.com/edgerelationships/graphql/graphql", {
                        method: "POST",
                        headers: Bt(Ht, this).getHeaders(e.getToken()),
                        body: JSON.stringify({
                            query: "query GetProfileSearch($region: String!, $startsWith: String!, $pageSize: Int, $currentPage: Int, $preferredGameId: String!) { findProfiles(region: $region, nameBeginsWith: $startsWith, pageSize: $pageSize, page: $currentPage) { totalCount nodes { id avatar(preferredGameId: $preferredGameId) { gameId face full } } } }",
                            variables: {
                                region: n,
                                startsWith: t,
                                pageSize: 50,
                                currentPage: 1,
                                preferredGameId: "j68d"
                            }
                        })
                    }),
                    r = await i.json();
                return r?.data?.findProfiles?.nodes?. [0]?.id || null
            } catch (t) {
                return null
            }
        }
        async sendGreeting() {
            if (Bt(Vt, this)) try {
                const t = await fetch("https://eu.mspapis.com/federationgateway/graphql", {
                        method: "POST",
                        headers: Bt(Ht, this).getHeaders(e.getToken()),
                        body: JSON.stringify({
                            query: "\n            mutation SendGreetings($greetingType: GreetingType!, $receiverProfileId: String!, $ignoreDailyCap: Boolean) {\n              greetings {\n                sendGreeting(greetingType: $greetingType, receiverProfileId: $receiverProfileId, ignoreDailyCap: $ignoreDailyCap) {\n                  success\n                }\n              }\n            }\n          ",
                            variables: {
                                greetingType: "Autograph",
                                receiverProfileId: Bt(Vt, this),
                                ignoreDailyCap: !0
                            }
                        })
                    }),
                    n = await t.json(),
                    i = n?.data?.greetings?.sendGreeting?.success;
                if (!i) return Bt(Kt, this).track("sent-greeting-failed"), void this.showNotification("Failed to send greeting", !1);
                Bt(Kt, this).track("sent-greeting"), this.showNotification("Greeting sent successfully!", !0)
            } catch (t) {
                Bt(Kt, this).track("sent-greeting-failed"), this.showNotification("Error sending greeting", !1)
            }
        }
        startGreeting() {
            Bt(te, this) && clearInterval(Bt(te, this)), this.sendGreeting(), Lt(te, this, setInterval((() => this.sendGreeting()), 18e4))
        }
        stopGreeting() {
            Bt(te, this) && (clearInterval(Bt(te, this)), Lt(te, this, null)), Lt(Vt, this, null)
        }
        toggle() {
            Lt(Yt, this, !Bt(Yt, this)), Bt(Yt, this) || this.stopGreeting(), Bt(Kt, this).track("Greetings Service " + (Bt(Yt, this) ? "Enabled" : "Disabled"))
        }
        restore() {
            this.stopGreeting(), window.WebSocket = Bt(Xt, this), window.fetch = Bt(Zt, this)
        }
    }

    function ne(t, e, n) {
        ie(t, e), e.set(t, n)
    }

    function ie(t, e) {
        if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
    }

    function re(t, e) {
        return t.get(oe(t, e))
    }

    function se(t, e, n) {
        return t.set(oe(t, e), n), n
    }

    function oe(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object")
    }
    var ae = new WeakMap,
        ce = new WeakMap,
        he = new WeakMap,
        ue = new WeakMap,
        pe = new WeakSet;
    class le {
        constructor() {
            var t;
            ie(this, t = pe), t.add(this), ne(this, ae, void 0), ne(this, ce, void 0), ne(this, he, void 0), ne(this, ue, /^https:\/\/[^/]+\/profilegeneratedcontent\/v2\/profiles\/[^/]+\/games\/j68d\/content$/), se(ae, this, d.getInstance()), se(ce, this, W.getInstance()), se(he, this, window.fetch), this.initialize()
        }
        initialize() {
            var t = this;
            window.fetch = async function () {
                for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                const [s, o] = i;
                if ("string" == typeof s && re(ue, t).test(s)) try {
                    const n = "string" == typeof o?.body ? o.body : await (o?.body?.text?.());
                    if (n?.includes("WAYD")) {
                        const n = e.getToken();
                        if (!n) return re(he, t).apply(window, i);
                        const r = e.getUserData(n)?.profileId;
                        if (!r) return re(he, t).apply(window, i);
                        const a = await oe(pe, t, fe).call(t, r, n);
                        if (!a) return re(he, t).apply(window, i);
                        re(ae, t).track("UGC WAYD Request Modified");
                        const c = `https://${oe(pe,t,de).call(t,n)}${new URL(s).pathname}/${a}`;
                        return re(he, t).call(window, c, {
                            ...o,
                            method: "PUT"
                        })
                    }
                } catch (t) {}
                return re(he, t).apply(window, i)
            }
        }
        restore() {
            window.fetch = re(he, this)
        }
    }

    function de(t) {
        if (!t) return "eu.mspapis.com";
        const n = e.getUserData(t);
        return "US" === n?.name?.split("|")[0] ? "us.mspapis.com" : "eu.mspapis.com"
    }
    async function fe(t, e) {
        try {
            const n = oe(pe, this, de).call(this, e),
                i = await re(he, this).call(this, `https://${n}/profileattributes/v1/profiles/${t}/games/j68d/attributes`, {
                    headers: re(ce, this).getHeaders(e)
                }),
                r = await i.json();
            return r?.additionalData?.WAYD || null
        } catch (t) {
            return null
        }
    }
    return function (t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.defineProperties;
        const [n, i] = [new WeakMap, {
            configurable: !1,
            writable: !1
        }], r = {
            a: d.getInstance(),
            s: W.getInstance(),
            m: new I,
            q: new D,
            l: new rt,
            p: new yt,
            c: new Pt,
            e: Gt.getInstance(),
            g: new ee,
            u: new le
        };
        r.p.setEnabled({
            diamondPacks: !0
        }), e(t, {
            msp2Client: {
                ...i,
                value: r.m
            },
            autoStarQuiz: {
                ...i,
                value: r.q
            }
        }), setTimeout((() => e(t, {
            emoteService: {
                ...i,
                value: r.e
            }
        })), 7e3), r.a.track("Client Started"), t.fetch = new Proxy(t.fetch, {
            apply: async (t, e, i) => {
                let [s, o] = i;
                if ("string" != typeof s || !s.includes("/games/j68d/rewards/daily_pickup")) return Reflect.apply(t, e, [s, o]);
                const a = {
                    u: s,
                    o
                };
                if (n.has(a)) return n.get(a);
                try {
                    const i = await Promise.all(Array(4).fill().map((() => Reflect.apply(t, e, [s, {
                            ...o,
                            headers: r.s.getHeaders(o?.headers?.authorization)
                        }])))),
                        c = i[i.length - 1].clone();
                    return n.set(a, c), c
                } catch (n) {
                    return Reflect.apply(t, e, [s, o])
                }
            }
        })
    }(window), {}
})()));
