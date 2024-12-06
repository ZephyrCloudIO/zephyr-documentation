/* eslint-disable no-extra-semi */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-setter-return */
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-var */

// @ts-expect-error New relic specific instruction on how to setup tracking
window.NREUM || (NREUM = {});
NREUM.init = {
	session_replay: {
		enabled: true,
		block_selector: "",
		mask_text_selector: "*",
		sampling_rate: 10.0,
		error_sampling_rate: 100.0,
		mask_all_inputs: true,
		collect_fonts: true,
		inline_images: false,
		inline_stylesheet: true,
		mask_input_options: {},
	},
	distributed_tracing: { enabled: true, exclude_newrelic_header: true },
	privacy: { cookies_enabled: true },
	ajax: { deny_list: ["bam.nr-data.net"] },
};
NREUM.loader_config = {
	accountID: "4141664",
	trustKey: "4141664",
	agentID: "601487946",
	licenseKey: "NRJS-36eb1aa0b0994558760",
	applicationID: "601487946",
};
NREUM.info = {
	beacon: "bam.nr-data.net",
	errorBeacon: "bam.nr-data.net",
	licenseKey: "NRJS-36eb1aa0b0994558760",
	applicationID: "601487946",
	sa: 1,
}; /*! For license information please see nr-loader-spa-1.263.0.min.js.LICENSE.txt */
(() => {
	let e;
	let t;
	const r = {
			2983: (e, t, r) => {
				r.d(t, {
					D0: () => v,
					gD: () => y,
					Vp: () => s,
					oC: () => x,
					fr: () => _,
					jD: () => P,
					hR: () => A,
					xN: () => b,
					x1: () => c,
					aN: () => T,
					V: () => j,
				});
				const n = r(384);
				const i = r(7864);
				const o = {
						beacon: n.NT.beacon,
						errorBeacon: n.NT.errorBeacon,
						licenseKey: void 0,
						applicationID: void 0,
						sa: void 0,
						queueTime: void 0,
						applicationTime: void 0,
						ttGuid: void 0,
						user: void 0,
						account: void 0,
						product: void 0,
						extra: void 0,
						jsAttributes: {},
						userAttributes: void 0,
						atts: void 0,
						transactionName: void 0,
						tNamePlain: void 0,
					};
				const a = {};
				function s(e) {
					if (!e)
						throw new Error("All info objects require an agent identifier!");
					if (!a[e]) throw new Error("Info for ".concat(e, " was never set"));
					return a[e];
				}
				function c(e, t) {
					if (!e)
						throw new Error("All info objects require an agent identifier!");
					a[e] = (0, i.a)(t, o);
					const r = (0, n.nY)(e);
					r && (r.info = a[e]);
				}
				const u = r(993);
				const d = (e) => {
					if (!e || "string" !== typeof e) return !1;
					try {
						document.createDocumentFragment().querySelector(e);
					} catch {
						return !1;
					}
					return !0;
				};
				const l = r(2614);
				const f = r(944);
				const h = "[data-nr-mask]";
				const g = () => {
						const e = {
							mask_selector: "*",
							block_selector: "[data-nr-block]",
							mask_input_options: {
								color: !1,
								date: !1,
								"datetime-local": !1,
								email: !1,
								month: !1,
								number: !1,
								range: !1,
								search: !1,
								tel: !1,
								text: !1,
								time: !1,
								url: !1,
								week: !1,
								textarea: !1,
								select: !1,
								password: !0,
							},
						};
						return {
							ajax: {
								deny_list: void 0,
								block_internal: !0,
								enabled: !0,
								harvestTimeSeconds: 10,
								autoStart: !0,
							},
							distributed_tracing: {
								enabled: void 0,
								exclude_newrelic_header: void 0,
								cors_use_newrelic_header: void 0,
								cors_use_tracecontext_headers: void 0,
								allowed_origins: void 0,
							},
							feature_flags: [],
							harvest: { tooManyRequestsDelay: 60 },
							jserrors: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
							logging: {
								enabled: !0,
								harvestTimeSeconds: 10,
								autoStart: !0,
								level: u.p_.INFO,
							},
							metrics: { enabled: !0, autoStart: !0 },
							obfuscate: void 0,
							page_action: {
								enabled: !0,
								harvestTimeSeconds: 30,
								autoStart: !0,
							},
							page_view_event: { enabled: !0, autoStart: !0 },
							page_view_timing: {
								enabled: !0,
								harvestTimeSeconds: 30,
								long_task: !1,
								autoStart: !0,
							},
							privacy: { cookies_enabled: !0 },
							proxy: { assets: void 0, beacon: void 0 },
							session: { expiresMs: l.wk, inactiveMs: l.BB },
							session_replay: {
								autoStart: !0,
								enabled: !1,
								harvestTimeSeconds: 60,
								preload: !1,
								sampling_rate: 10,
								error_sampling_rate: 100,
								collect_fonts: !1,
								inline_images: !1,
								inline_stylesheet: !0,
								fix_stylesheets: !0,
								mask_all_inputs: !0,
								get mask_text_selector() {
									return e.mask_selector;
								},
								set mask_text_selector(t) {
									d(t)
										? (e.mask_selector = "".concat(t, ",").concat(h))
										: "" === t || null === t
											? (e.mask_selector = h)
											: (0, f.R)(5, t);
								},
								get block_class() {
									return "nr-block";
								},
								get ignore_class() {
									return "nr-ignore";
								},
								get mask_text_class() {
									return "nr-mask";
								},
								get block_selector() {
									return e.block_selector;
								},
								set block_selector(t) {
									d(t)
										? (e.block_selector += ",".concat(t))
										: "" !== t && (0, f.R)(6, t);
								},
								get mask_input_options() {
									return e.mask_input_options;
								},
								set mask_input_options(t) {
									t && "object" === typeof t
										? (e.mask_input_options = { ...t, password: !0 })
										: (0, f.R)(7, t);
								},
							},
							session_trace: {
								enabled: !0,
								harvestTimeSeconds: 10,
								autoStart: !0,
							},
							soft_navigations: {
								enabled: !0,
								harvestTimeSeconds: 10,
								autoStart: !0,
							},
							spa: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
							ssl: void 0,
						};
					};
				const p = {};
				const m = "All configuration objects require an agent identifier!";
				function v(e) {
					if (!e) throw new Error(m);
					if (!p[e])
						throw new Error("Configuration for ".concat(e, " was never set"));
					return p[e];
				}
				function b(e, t) {
					if (!e) throw new Error(m);
					p[e] = (0, i.a)(t, g());
					const r = (0, n.nY)(e);
					r && (r.init = p[e]);
				}
				function y(e, t) {
					if (!e) throw new Error(m);
					let r = v(e);
					if (r) {
						for (let n = t.split("."), i = 0; i < n.length - 1; i++)
							if ("object" !== typeof (r = r[n[i]])) return;
						r = r[n[n.length - 1]];
					}
					return r;
				}
				const w = {
						accountID: void 0,
						trustKey: void 0,
						agentID: void 0,
						licenseKey: void 0,
						applicationID: void 0,
						xpid: void 0,
					};
				const R = {};
				function x(e) {
					if (!e)
						throw new Error(
							"All loader-config objects require an agent identifier!",
						);
					if (!R[e])
						throw new Error("LoaderConfig for ".concat(e, " was never set"));
					return R[e];
				}
				function T(e, t) {
					if (!e)
						throw new Error(
							"All loader-config objects require an agent identifier!",
						);
					R[e] = (0, i.a)(t, w);
					const r = (0, n.nY)(e);
					r && (r.loader_config = R[e]);
				}
				const A = (0, n.dV)().o;
				const E = r(6154);
				const N = r(9324);
				const S = {
						buildEnv: N.F3,
						distMethod: N.Xs,
						version: N.xv,
						originTime: E.WN,
					};
				const O = {
						customTransaction: void 0,
						disabled: !1,
						isolatedBacklog: !1,
						loaderType: void 0,
						maxBytes: 3e4,
						onerror: void 0,
						origin: `${E.gm.location}`,
						ptid: void 0,
						releaseIds: {},
						appMetadata: {},
						session: void 0,
						denyList: void 0,
						harvestCount: 0,
						timeKeeper: void 0,
					};
				const I = {};
				function _(e) {
					if (!e)
						throw new Error("All runtime objects require an agent identifier!");
					if (!I[e])
						throw new Error("Runtime for ".concat(e, " was never set"));
					return I[e];
				}
				function j(e, t) {
					if (!e)
						throw new Error("All runtime objects require an agent identifier!");
					I[e] = { ...(0, i.a)(t, O), ...S };
					const r = (0, n.nY)(e);
					r && (r.runtime = I[e]);
				}
				function P(e) {
					return ((e) => {
						try {
							const t = s(e);
							return !!t.licenseKey && !!t.errorBeacon && !!t.applicationID;
						} catch (e) {
							return !1;
						}
					})(e);
				}
			},
			7864: (e, t, r) => {
				r.d(t, { a: () => i });
				const n = r(944);
				function i(e, t) {
					try {
						if (!e || "object" !== typeof e) return (0, n.R)(3);
						if (!t || "object" !== typeof t) return (0, n.R)(4);
						const r = Object.create(
								Object.getPrototypeOf(t),
								Object.getOwnPropertyDescriptors(t),
							);
						const o = 0 === Object.keys(r).length ? e : r;
						for (const a in o)
							if (void 0 !== e[a])
								try {
									if (null === e[a]) {
										r[a] = null;
										continue;
									}
									Array.isArray(e[a]) && Array.isArray(t[a])
										? (r[a] = Array.from(new Set([...e[a], ...t[a]])))
										: "object" === typeof e[a] && "object" === typeof t[a]
											? (r[a] = i(e[a], t[a]))
											: (r[a] = e[a]);
								} catch (e) {
									(0, n.R)(1, e);
								}
						return r;
					} catch (e) {
						(0, n.R)(2, e);
					}
				}
			},
			9324: (e, t, r) => {
				r.d(t, { F3: () => i, Xs: () => o, Yq: () => a, xv: () => n });
				const n = "1.263.0";
				const i = "PROD";
				const o = "CDN";
				const a = "2.0.0-alpha.12";
			},
			6154: (e, t, r) => {
				r.d(t, {
					A4: () => s,
					OF: () => d,
					RI: () => i,
					Vr: () => g,
					WN: () => p,
					bv: () => o,
					gm: () => a,
					lR: () => f,
					lT: () => h,
					m: () => u,
					mw: () => c,
					sb: () => l,
				});
				const n = r(1863);
				const i = "undefined" !== typeof window && !!window.document;
				const o =
						"undefined" !== typeof WorkerGlobalScope &&
						(("undefined" !== typeof self &&
							self instanceof WorkerGlobalScope &&
							self.navigator instanceof WorkerNavigator) ||
							("undefined" !== typeof globalThis &&
								globalThis instanceof WorkerGlobalScope &&
								globalThis.navigator instanceof WorkerNavigator));
				const a = i
						? window
						: "undefined" !== typeof WorkerGlobalScope &&
							(("undefined" !== typeof self &&
								self instanceof WorkerGlobalScope &&
								self) ||
								("undefined" !== typeof globalThis &&
									globalThis instanceof WorkerGlobalScope &&
									globalThis));
				const s = "complete" === a?.document?.readyState;
				const c = Boolean("hidden" === a?.document?.visibilityState);
				const u = `${a?.location}`;
				const d = /iPad|iPhone|iPod/.test(a.navigator?.userAgent);
				const l = d && "undefined" === typeof SharedWorker;
				const f = (() => {
						const e = a.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);
						return Array.isArray(e) && e.length >= 2 ? +e[1] : 0;
					})();
				const h = Boolean(i && window.document.documentMode);
				const g = !!a.navigator?.sendBeacon;
				const p = Date.now() - (0, n.t)();
			},
			4777: (e, t, r) => {
				r.d(t, { J: () => o });
				const n = r(944);
				const i = { agentIdentifier: "", ee: void 0 };
				class o {
					constructor(e) {
						try {
							if ("object" !== typeof e) return (0, n.R)(8);
							(this.sharedContext = {}),
								Object.assign(this.sharedContext, i),
								Object.entries(e).forEach((e) => {
									const [t, r] = e;
									Object.keys(i).includes(t) && (this.sharedContext[t] = r);
								});
						} catch (e) {
							(0, n.R)(9, e);
						}
					}
				}
			},
			7295: (e, t, r) => {
				r.d(t, { Xv: () => a, gX: () => i, iW: () => o });
				let n = [];
				function i(e) {
					if (!e || o(e)) return !1;
					if (0 === n.length) return !0;
					for (let t = 0; t < n.length; t++) {
						const r = n[t];
						if ("*" === r.hostname) return !1;
						if (s(r.hostname, e.hostname) && c(r.pathname, e.pathname))
							return !1;
					}
					return !0;
				}
				function o(e) {
					return void 0 === e.hostname;
				}
				function a(e) {
					if (((n = []), e?.length))
						for (let t = 0; t < e.length; t++) {
							let r = e[t];
							if (!r) continue;
							0 === r.indexOf("http://")
								? (r = r.substring(7))
								: 0 === r.indexOf("https://") && (r = r.substring(8));
							const i = r.indexOf("/");
							let o;
							let a;
							i > 0
								? ((o = r.substring(0, i)), (a = r.substring(i)))
								: ((o = r), (a = ""));
							const [s] = o.split(":");
							n.push({ hostname: s, pathname: a });
						}
				}
				function s(e, t) {
					return !(e.length > t.length) && t.indexOf(e) === t.length - e.length;
				}
				function c(e, t) {
					return (
						0 === e.indexOf("/") && (e = e.substring(1)),
						0 === t.indexOf("/") && (t = t.substring(1)),
						"" === e || e === t
					);
				}
			},
			1687: (e, t, r) => {
				r.d(t, { Ak: () => c, Ze: () => l, x3: () => u });
				const n = r(7836);
				const i = r(1478);
				const o = r(3606);
				const a = r(860);
				const s = {};
				function c(e, t) {
					const r = { staged: !1, priority: a.P[t] || 0 };
					d(e), s[e].get(t) || s[e].set(t, r);
				}
				function u(e, t) {
					e &&
						s[e] &&
						(s[e].get(t) && s[e].delete(t), h(e, t, !1), s[e].size && f(e));
				}
				function d(e) {
					if (!e) throw new Error("agentIdentifier required");
					s[e] || (s[e] = new Map());
				}
				function l() {
					const e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: "";
					const t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: "feature";
					const r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					if ((d(e), !e || !s[e].get(t) || r)) return h(e, t);
					(s[e].get(t).staged = !0), f(e);
				}
				function f(e) {
					const t = Array.from(s[e]);
					t.every((e) => {
						const [t, r] = e;
						return r.staged;
					}) &&
						(t.sort((e, t) => e[1].priority - t[1].priority),
						t.forEach((t) => {
							const [r] = t;
							s[e].delete(r), h(e, r);
						}));
				}
				function h(e, t) {
					const r =
						!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					const a = e ? n.ee.get(e) : n.ee;
					const s = o.i.handlers;
					if (!a.aborted && a.backlog && s) {
						if (r) {
							const e = a.backlog[t];
							const r = s[t];
							if (r) {
								for (let t = 0; e && t < e.length; ++t) g(e[t], r);
								(0, i.$)(r, (e, t) => {
									(0, i.$)(t, (t, r) => {
										r[0].on(e, r[1]);
									});
								});
							}
						}
						a.isolatedBacklog || delete s[t],
							(a.backlog[t] = null),
							a.emit(`drain-${t}`, []);
					}
				}
				function g(e, t) {
					const r = e[1];
					(0, i.$)(t[r], (t, r) => {
						const n = e[0];
						if (r[0] === n) {
							const i = r[1];
							const o = e[3];
							const a = e[2];
							i.apply(o, a);
						}
					});
				}
			},
			7836: (e, t, r) => {
				r.d(t, { P: () => c, ee: () => u });
				const n = r(384);
				const i = r(8990);
				const o = r(2983);
				const a = r(2646);
				const s = r(5607);
				const c = "nr@context:".concat(s.W);
				const u = (function e(t, r) {
						const n = {};
						const s = {};
						const d = {};
						let l = !1;
						try {
							l = 16 === r.length && (0, o.fr)(r).isolatedBacklog;
						} catch (e) {}
						const f = {
							on: g,
							addEventListener: g,
							removeEventListener: (e, t) => {
								const r = n[e];
								if (!r) return;
								for (let i = 0; i < r.length; i++) r[i] === t && r.splice(i, 1);
							},
							emit: (e, r, n, i, o) => {
								!1 !== o && (o = !0);
								if (u.aborted && !i) return;
								t && o && t.emit(e, r, n);
								for (let a = h(n), c = p(e), d = c.length, l = 0; l < d; l++)
									c[l].apply(a, r);
								const g = v()[s[e]];
								g?.push([f, e, r, a]);
								return a;
							},
							get: m,
							listeners: p,
							context: h,
							buffer: (e, t) => {
								const r = v();
								if (((t = t || "feature"), f.aborted)) return;
								Object.entries(e || {}).forEach((e) => {
									const [n, i] = e;
									(s[i] = t), t in r || (r[t] = []);
								});
							},
							abort: () => {
								(f._aborted = !0),
									Object.keys(f.backlog).forEach((e) => {
										delete f.backlog[e];
									});
							},
							isBuffering: (e) => !!v()[s[e]],
							debugId: r,
							backlog: l
								? {}
								: t && "object" === typeof t.backlog
									? t.backlog
									: {},
							isolatedBacklog: l,
						};
						return (
							Object.defineProperty(f, "aborted", {
								get: () => {
									let e = f._aborted || !1;
									return e || (t && (e = t.aborted), e);
								},
							}),
							f
						);
						function h(e) {
							return e && e instanceof a.y
								? e
								: e
									? (0, i.I)(e, c, () => new a.y(c))
									: new a.y(c);
						}
						function g(e, t) {
							n[e] = p(e).concat(t);
						}
						function p(e) {
							return n[e] || [];
						}
						function m(t) {
							return (d[t] = d[t] || e(f, t));
						}
						function v() {
							return f.backlog;
						}
					})(void 0, "globalEE");
				const d = (0, n.Zm)();
				d.ee || (d.ee = u);
			},
			2646: (e, t, r) => {
				r.d(t, { y: () => n });
				class n {
					constructor(e) {
						this.contextId = e;
					}
				}
			},
			9908: (e, t, r) => {
				r.d(t, { d: () => n, p: () => i });
				const n = r(7836).ee.get("handle");
				function i(e, t, r, i, o) {
					o
						? (o.buffer([e], i), o.emit(e, t, r))
						: (n.buffer([e], i), n.emit(e, t, r));
				}
			},
			3606: (e, t, r) => {
				r.d(t, { i: () => o });
				const n = r(9908);
				o.on = a;
				const i = (o.handlers = {});
				function o(e, t, r, o) {
					a(o || n.d, i, e, t, r);
				}
				function a(e, t, r, i, o) {
					o || (o = "feature"), e || (e = n.d);
					const a = (t[o] = t[o] || {});
					(a[r] = a[r] || []).push([e, i]);
				}
			},
			3878: (e, t, r) => {
				r.d(t, { DD: () => c, jT: () => a, sp: () => s });
				const n = r(6154);
				let i = !1;
				let o = !1;
				try {
					const e = {
						get passive() {
							return (i = !0), !1;
						},
						get signal() {
							return (o = !0), !1;
						},
					};
					n.gm.addEventListener("test", null, e),
						n.gm.removeEventListener("test", null, e);
				} catch (e) {}
				function a(e, t) {
					return i || o ? { capture: !!e, passive: i, signal: t } : !!e;
				}
				function s(e, t) {
					const r =
							arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const n = arguments.length > 3 ? arguments[3] : void 0;
					window.addEventListener(e, t, a(r, n));
				}
				function c(e, t) {
					const r =
							arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const n = arguments.length > 3 ? arguments[3] : void 0;
					document.addEventListener(e, t, a(r, n));
				}
			},
			5607: (e, t, r) => {
				r.d(t, { W: () => n });
				const n = (0, r(9566).bz)();
			},
			9566: (e, t, r) => {
				r.d(t, { LA: () => s, ZF: () => c, bz: () => a, el: () => u });
				const n = r(6154);
				const i = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
				function o(e, t) {
					return e ? 15 & e[t] : (16 * Math.random()) | 0;
				}
				function a() {
					const e = n.gm?.crypto || n.gm?.msCrypto;
					let t;
					let r = 0;
					return (
						e?.getRandomValues &&
							(t = e.getRandomValues(new Uint8Array(30))),
						i
							.split("")
							.map((e) =>
								"x" === e
									? o(t, r++).toString(16)
									: "y" === e
										? ((3 & o()) | 8).toString(16)
										: e,
							)
							.join("")
					);
				}
				function s(e) {
					const t = n.gm?.crypto || n.gm?.msCrypto;
					let r;
					let i = 0;
					t?.getRandomValues && (r = t.getRandomValues(new Uint8Array(e)));
					const a = [];
					for (let s = 0; s < e; s++) a.push(o(r, i++).toString(16));
					return a.join("");
				}
				function c() {
					return s(16);
				}
				function u() {
					return s(32);
				}
			},
			2614: (e, t, r) => {
				r.d(t, {
					BB: () => a,
					H3: () => n,
					g: () => u,
					iL: () => c,
					tS: () => s,
					uh: () => i,
					wk: () => o,
				});
				const n = "NRBA";
				const i = "SESSION";
				const o = 144e5;
				const a = 18e5;
				const s = {
						STARTED: "session-started",
						PAUSE: "session-pause",
						RESET: "session-reset",
						RESUME: "session-resume",
						UPDATE: "session-update",
					};
				const c = { SAME_TAB: "same-tab", CROSS_TAB: "cross-tab" };
				const u = { OFF: 0, FULL: 1, ERROR: 2 };
			},
			1863: (e, t, r) => {
				function n() {
					return Math.floor(performance.now());
				}
				r.d(t, { t: () => n });
			},
			7485: (e, t, r) => {
				r.d(t, { D: () => i });
				const n = r(6154);
				function i(e) {
					if (0 === (e || "").indexOf("data:")) return { protocol: "data" };
					try {
						const t = new URL(e, location.href);
						const r = {
								port: t.port,
								hostname: t.hostname,
								pathname: t.pathname,
								search: t.search,
								protocol: t.protocol.slice(0, t.protocol.indexOf(":")),
								sameOrigin:
									t.protocol === n.gm?.location?.protocol &&
									t.host === n.gm?.location?.host,
							};
						return (
							(r.port && "" !== r.port) ||
								("http:" === t.protocol && (r.port = "80"),
								"https:" === t.protocol && (r.port = "443")),
							r.pathname && "" !== r.pathname
								? r.pathname.startsWith("/") ||
									(r.pathname = "/".concat(r.pathname))
								: (r.pathname = "/"),
							r
						);
					} catch (e) {
						return {};
					}
				}
			},
			944: (e, t, r) => {
				function n(e, t) {
					"function" === typeof console.debug &&
						console.debug(
							"New Relic Warning: https://github.com/newrelic/newrelic-browser-agent/blob/main/docs/warning-codes.md#".concat(
								e,
							),
							t,
						);
				}
				r.d(t, { R: () => n });
			},
			5284: (e, t, r) => {
				r.d(t, { t: () => c, B: () => s });
				const n = r(7836);
				const i = r(6154);
				const o = "newrelic";
				const a = new Set();
				const s = {};
				function c(e, t) {
					const r = n.ee.get(t);
					(s[t] ??= {}),
						e &&
							"object" === typeof e &&
							(a.has(t) ||
								(r.emit("rumresp", [e]),
								(s[t] = e),
								a.add(t),
								(() => {
									const e =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: {};
									try {
										i.gm.dispatchEvent(new CustomEvent(o, { detail: e }));
									} catch (e) {}
								})({ loaded: !0 })));
				}
			},
			8990: (e, t, r) => {
				r.d(t, { I: () => i });
				const n = Object.prototype.hasOwnProperty;
				function i(e, t, r) {
					if (n.call(e, t)) return e[t];
					const i = r();
					if (Object.defineProperty && Object.keys)
						try {
							return (
								Object.defineProperty(e, t, {
									value: i,
									writable: !0,
									enumerable: !1,
								}),
								i
							);
						} catch (e) {}
					return (e[t] = i), i;
				}
			},
			6389: (e, t, r) => {
				function n(e) {
					const r =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: 500;
					const n =
							arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: {};
					const i = n?.leading || !1;
					let o;
					return () => {
						for (let n = arguments.length, a = new Array(n), s = 0; s < n; s++)
							a[s] = arguments[s];
						i &&
							void 0 === o &&
							(e.apply(this, a),
							(o = setTimeout(() => {
								o = clearTimeout(o);
							}, r))),
							i ||
								(clearTimeout(o),
								(o = setTimeout(() => {
									e.apply(this, a);
								}, r)));
					};
				}
				function i(e) {
					let r = !1;
					return () => {
						if (!r) {
							r = !0;
							for (
								let n = arguments.length, i = new Array(n), o = 0;
								o < n;
								o++
							)
								i[o] = arguments[o];
							e.apply(this, i);
						}
					};
				}
				r.d(t, { J: () => i, s: () => n });
			},
			1478: (e, t, r) => {
				r.d(t, { $: () => n });
				const n = (e, t) =>
					Object.entries(e || {}).map((e) => {
						const [r, n] = e;
						return t(r, n);
					});
			},
			3304: (e, t, r) => {
				r.d(t, { A: () => o });
				const n = r(7836);
				const i = () => {
					const e = new WeakSet();
					return (t, r) => {
						if ("object" === typeof r && null !== r) {
							if (e.has(r)) return;
							e.add(r);
						}
						return r;
					};
				};
				function o(e) {
					try {
						return JSON.stringify(e, i());
					} catch (e) {
						try {
							n.ee.emit("internal-error", [e]);
						} catch (e) {}
					}
				}
			},
			5289: (e, t, r) => {
				r.d(t, { GG: () => o, sB: () => a });
				const n = r(3878);
				function i() {
					return (
						"undefined" === typeof document || "complete" === document.readyState
					);
				}
				function o(e, t) {
					if (i()) return e();
					(0, n.sp)("load", e, t);
				}
				function a(e) {
					if (i()) return e();
					(0, n.DD)("DOMContentLoaded", e);
				}
			},
			384: (e, t, r) => {
				r.d(t, {
					NT: () => o,
					US: () => d,
					Zm: () => a,
					bQ: () => c,
					dV: () => s,
					nY: () => u,
					pV: () => l,
				});
				const n = r(6154);
				const i = r(1863);
				const o = { beacon: "bam.nr-data.net", errorBeacon: "bam.nr-data.net" };
				function a() {
					return (
						n.gm.NREUM || (n.gm.NREUM = {}),
						void 0 === n.gm.newrelic && (n.gm.newrelic = n.gm.NREUM),
						n.gm.NREUM
					);
				}
				function s() {
					const e = a();
					return (
						e.o ||
							(e.o = {
								ST: n.gm.setTimeout,
								SI: n.gm.setImmediate,
								CT: n.gm.clearTimeout,
								XHR: n.gm.XMLHttpRequest,
								REQ: n.gm.Request,
								EV: n.gm.Event,
								PR: n.gm.Promise,
								MO: n.gm.MutationObserver,
								FETCH: n.gm.fetch,
							}),
						e
					);
				}
				function c(e, t) {
					const r = a();
					(r.initializedAgents ??= {}),
						(t.initializedAt = { ms: (0, i.t)(), date: new Date() }),
						(r.initializedAgents[e] = t);
				}
				function u(e) {
					const t = a();
					return t.initializedAgents?.[e];
				}
				function d(e, t) {
					a()[e] = t;
				}
				function l() {
					return (
						(() => {
							const e = a();
							const t = e.info || {};
							e.info = { beacon: o.beacon, errorBeacon: o.errorBeacon, ...t };
						})(),
						(() => {
							const e = a();
							const t = e.init || {};
							e.init = { ...t };
						})(),
						s(),
						(() => {
							const e = a();
							const t = e.loader_config || {};
							e.loader_config = { ...t };
						})(),
						a()
					);
				}
			},
			2843: (e, t, r) => {
				r.d(t, { u: () => i });
				const n = r(3878);
				function i(e) {
					const t =
							arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const r = arguments.length > 2 ? arguments[2] : void 0;
					const i = arguments.length > 3 ? arguments[3] : void 0;
					(0, n.DD)(
						"visibilitychange",
						() => {
							if (t) return void ("hidden" === document.visibilityState && e());
							e(document.visibilityState);
						},
						r,
						i,
					);
				}
			},
			8941: (e, t, r) => {
				r.d(t, {
					um: () => f,
					NZ: () => R,
					vC: () => A,
					Ri: () => O,
					Ak: () => _,
					o8: () => P,
					MO: () => U,
					bX: () => F,
				});
				const n = r(7836);
				let i = r(3434);
				const o = r(8990);
				const a = r(6154);
				const s = {};
				const c = a.gm.XMLHttpRequest;
				const u = "addEventListener";
				const d = "removeEventListener";
				const l = "nr@wrapped:".concat(n.P);
				function f(e) {
					const t = ((e) => (e || n.ee).get("events"))(e);
					if (s[t.debugId]++) return t;
					s[t.debugId] = 1;
					const r = (0, i.YM)(t, !0);
					function f(e) {
						r.inPlace(e, [u, d], "-", g);
					}
					function g(e, t) {
						return e[1];
					}
					return (
						"getPrototypeOf" in Object &&
							(a.RI && h(document, f), h(a.gm, f), h(c.prototype, f)),
						t.on(`${u}-start`, function (e, t) {
							const n = e[1];
							if (
								null !== n &&
								("function" === typeof n || "object" === typeof n)
							) {
								const i = (0, o.I)(n, l, () => {
									const e = {
										object: () => {
											if ("function" !== typeof n.handleEvent) return;
											return n.handleEvent.apply(n, arguments);
										},
										function: n,
									}[typeof n];
									return e ? r(e, "fn-", null, e.name || "anonymous") : n;
								});
								this.wrapped = e[1] = i;
							}
						}),
						t.on(`${d}-start`, function (e) {
							e[1] = this.wrapped || e[1];
						}),
						t
					);
				}
				function h(e, t) {
					let r = e;
					while (
						"object" === typeof r &&
						!Object.prototype.hasOwnProperty.call(r, u)
					)
						r = Object.getPrototypeOf(r);
					for (
						let n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2;
						o < n;
						o++
					)
						i[o - 2] = arguments[o];
					r && t(r, ...i);
				}
				const g = "fetch-";
				const p = `${g}body-`;
				const m = ["arrayBuffer", "blob", "json", "text", "formData"];
				const v = a.gm.Request;
				let b = a.gm.Response;
				const y = "prototype";
				const w = {};
				function R(e) {
					const t = ((e) => (e || n.ee).get("fetch"))(e);
					if (!(v && b && a.gm.fetch)) return t;
					if (w[t.debugId]++) return t;
					function r(e, r, i) {
						const o = e[r];
						"function" === typeof o &&
							(e[r] = function () {
								let e;
								const r = [...arguments];
								const a = {};
								t.emit(`${i}before-start`, [r], a),
									a[n.P] && a[n.P].dt && (e = a[n.P].dt);
								const s = o.apply(this, r);
								return (
									t.emit(`${i}start`, [r, e], s),
									s.then(
										(e) => (t.emit(`${i}end`, [null, e], s), e),
										(e) => {
											throw (t.emit(`${i}end`, [e], s), e);
										},
									)
								);
							});
					}
					return (
						(w[t.debugId] = 1),
						m.forEach((e) => {
							r(v[y], e, p), r(b[y], e, p);
						}),
						r(a.gm, "fetch", g),
						t.on(`${g}end`, function (e, r) {
							if (r) {
								const i = r.headers.get("content-length");
								null !== i && (this.rxSize = i),
									t.emit(`${g}done`, [null, r], this);
							} else t.emit(`${g}done`, [e], this);
						}),
						t
					);
				}
				const x = {};
				const T = ["pushState", "replaceState"];
				function A(e) {
					const t = ((e) => (e || n.ee).get("history"))(e);
					return (
						!a.RI ||
							x[t.debugId]++ ||
							((x[t.debugId] = 1),
							(0, i.YM)(t).inPlace(window.history, T, "-")),
						t
					);
				}
				const E = r(3878);
				const N = {};
				const S = ["appendChild", "insertBefore", "replaceChild"];
				function O(e) {
					const t = ((e) => (e || n.ee).get("jsonp"))(e);
					if (!a.RI || N[t.debugId]) return t;
					N[t.debugId] = !0;
					const r = (0, i.YM)(t);
					const o = /[?&](?:callback|cb)=([^&#]+)/;
					const s = /(.*)\.([^.]+)/;
					const c = /^(\w+)(\.|$)(.*)$/;
					function u(e, t) {
						if (!e) return t;
						const r = e.match(c);
						const n = r[1];
						return u(r[3], t[n]);
					}
					return (
						r.inPlace(Node.prototype, S, "dom-"),
						t.on("dom-start", (e) => {
							!((e) => {
								if (
									!e ||
									"string" !== typeof e.nodeName ||
									"script" !== e.nodeName.toLowerCase()
								)
									return;
								if ("function" !== typeof e.addEventListener) return;
								const n = ((i = e.src), (a = i.match(o)), a ? a[1] : null);
								let i;
								let a;
								if (!n) return;
								const c = ((e) => {
									const t = e.match(s);
									if (t && t.length >= 3)
										return { key: t[2], parent: u(t[1], window) };
									return { key: e, parent: window };
								})(n);
								if ("function" !== typeof c.parent[c.key]) return;
								const d = {};
								function l() {
									t.emit("jsonp-end", [], d),
										e.removeEventListener("load", l, (0, E.jT)(!1)),
										e.removeEventListener("error", f, (0, E.jT)(!1));
								}
								function f() {
									t.emit("jsonp-error", [], d),
										t.emit("jsonp-end", [], d),
										e.removeEventListener("load", l, (0, E.jT)(!1)),
										e.removeEventListener("error", f, (0, E.jT)(!1));
								}
								r.inPlace(c.parent, [c.key], "cb-", d),
									e.addEventListener("load", l, (0, E.jT)(!1)),
									e.addEventListener("error", f, (0, E.jT)(!1)),
									t.emit("new-jsonp", [e.src], d);
							})(e[0]);
						}),
						t
					);
				}
				const I = {};
				function _(e) {
					const t = ((e) => (e || n.ee).get("mutation"))(e);
					if (!a.RI || I[t.debugId]) return t;
					I[t.debugId] = !0;
					const r = (0, i.YM)(t);
					const o = a.gm.MutationObserver;
					return (
						o &&
							((window.MutationObserver = function (e) {
								return this instanceof o
									? new o(r(e, "fn-"))
									: o.apply(this, arguments);
							}),
							(MutationObserver.prototype = o.prototype)),
						t
					);
				}
				const j = {};
				function P(e) {
					const t = ((e) => (e || n.ee).get("promise"))(e);
					if (j[t.debugId]) return t;
					j[t.debugId] = !0;
					const r = t.context;
					const o = (0, i.YM)(t);
					const s = a.gm.Promise;
					return (
						s &&
							(() => {
								function e(r) {
									const n = t.context();
									const i = o(r, "executor-", n, null, !1);
									const a = Reflect.construct(s, [i], e);
									return (t.context(a).getCtx = () => n), a;
								}
								(a.gm.Promise = e),
									Object.defineProperty(e, "name", { value: "Promise" }),
									(e.toString = () => s.toString()),
									Object.setPrototypeOf(e, s),
									["all", "race"].forEach((r) => {
										const n = s[r];
										e[r] = function (e) {
											let i = !1;
											[...(e || [])].forEach((e) => {
												this.resolve(e).then(a("all" === r), a(!1));
											});
											const o = n.apply(this, arguments);
											return o;
											function a(e) {
												return () => {
													t.emit("propagate", [null, !i], o, !1, !1),
														(i = i || !e);
												};
											}
										};
									}),
									["resolve", "reject"].forEach((r) => {
										const n = s[r];
										e[r] = function (e) {
											const r = n.apply(this, arguments);
											return (
												e !== r && t.emit("propagate", [e, !0], r, !1, !1), r
											);
										};
									}),
									(e.prototype = s.prototype);
								const n = s.prototype.then;
								(s.prototype.then = function () {
									const i = r(this);
									i.promise = this;
									for (
										let a = arguments.length, s = new Array(a), c = 0;
										c < a;
										c++
									)
										s[c] = arguments[c];
									(s[0] = o(s[0], "cb-", i, null, !1)),
										(s[1] = o(s[1], "cb-", i, null, !1));
									const u = n.apply(this, s);
									return (
										(i.nextPromise = u),
										t.emit("propagate", [this, !0], u, !1, !1),
										u
									);
								}),
									(s.prototype.then[i.Jt] = n),
									t.on("executor-start", function (e) {
										(e[0] = o(e[0], "resolve-", this, null, !1)),
											(e[1] = o(e[1], "resolve-", this, null, !1));
									}),
									t.on("executor-err", (e, t, r) => {
										e[1](r);
									}),
									t.on("cb-end", function (e, r, n) {
										t.emit("propagate", [n, !0], this.nextPromise, !1, !1);
									}),
									t.on("propagate", function (e, r, n) {
										(this.getCtx && !r) ||
											(this.getCtx = function () {
												if (e instanceof Promise) const r = t.context(e);
												return r?.getCtx ? r.getCtx() : this;
											});
									});
							})(),
						t
					);
				}
				const C = {};
				const k = "setTimeout";
				const L = "setInterval";
				const D = "clearTimeout";
				const H = "-start";
				const M = "-";
				const K = [k, "setImmediate", L, D, "clearImmediate"];
				function U(e) {
					const t = ((e) => (e || n.ee).get("timer"))(e);
					if (C[t.debugId]++) return t;
					C[t.debugId] = 1;
					const r = (0, i.YM)(t);
					return (
						r.inPlace(a.gm, K.slice(0, 2), k + M),
						r.inPlace(a.gm, K.slice(2, 3), L + M),
						r.inPlace(a.gm, K.slice(3), D + M),
						t.on(L + H, (e, t, n) => {
							e[0] = r(e[0], "fn-", null, n);
						}),
						t.on(k + H, function (e, t, n) {
							(this.method = n),
								(this.timerDuration = Number.isNaN(e[1]) ? 0 : +e[1]),
								(e[0] = r(e[0], "fn-", this, n));
						}),
						t
					);
				}
				const B = r(944);
				const G = {};
				const V = ["open", "send"];
				function F(e) {
					const t = e || n.ee;
					const r = ((e) => (e || n.ee).get("xhr"))(t);
					if (G[r.debugId]++) return r;
					(G[r.debugId] = 1), f(t);
					const o = (0, i.YM)(r);
					const s = a.gm.XMLHttpRequest;
					const c = a.gm.MutationObserver;
					const u = a.gm.Promise;
					const d = a.gm.setInterval;
					const l = "readystatechange";
					const h = [
							"onload",
							"onerror",
							"onabort",
							"onloadstart",
							"onloadend",
							"onprogress",
							"ontimeout",
						];
					let g = [];
					const p = (a.gm.XMLHttpRequest = (e) => {
							const t = new s(e);
							const n = r.context(t);
							try {
								r.emit("new-xhr", [t], n),
									t.addEventListener(
										l,
										((i = n),
										function () {
											this.readyState > 3 &&
												!i.resolved &&
												((i.resolved = !0), r.emit("xhr-resolved", [], this)),
												o.inPlace(this, h, "fn-", R);
										}),
										(0, E.jT)(!1),
									);
							} catch (e) {
								(0, B.R)(15, e);
								try {
									r.emit("internal-error", [e]);
								} catch (e) {}
							}
							let i;
							return t;
						});
					function m(e, t) {
						o.inPlace(t, ["onreadystatechange"], "fn-", R);
					}
					if (
						(((e, t) => {
							for (const r in e) t[r] = e[r];
						})(s, p),
						(p.prototype = s.prototype),
						o.inPlace(p.prototype, V, "-xhr-", R),
						r.on("send-xhr-start", (e, t) => {
							m(e, t),
								((e) => {
									g.push(e),
										c && (v ? v.then(w) : d ? d(w) : ((b = -b), (y.data = b)));
								})(t);
						}),
						r.on("open-xhr-start", m),
						c)
					) {
						const v = u?.resolve();
						if (!d && !u) {
							const b = 1;
							const y = document.createTextNode(b);
							new c(w).observe(y, { characterData: !0 });
						}
					} else
						t.on("fn-end", (e) => {
							(e[0] && e[0].type === l) || w();
						});
					function w() {
						for (let e = 0; e < g.length; e++) m(0, g[e]);
						g.length && (g = []);
					}
					function R(e, t) {
						return t;
					}
					return r;
				}
			},
			3434: (e, t, r) => {
				r.d(t, { Jt: () => o, YM: () => c });
				const n = r(7836);
				const i = r(5607);
				const o = "nr@original:".concat(i.W);
				const a = Object.prototype.hasOwnProperty;
				let s = !1;
				function c(e, t) {
					return (
						e || (e = n.ee),
						(r.inPlace = (e, t, n, i, o) => {
							n || (n = "");
							const a = "-" === n.charAt(0);
							for (let s = 0; s < t.length; s++) {
								const c = t[s];
								const u = e[c];
								d(u) || (e[c] = r(u, a ? c + n : n, i, c, o));
							}
						}),
						(r.flag = o),
						r
					);
					function r(t, r, n, s, c) {
						return d(t)
							? t
							: (r || (r = ""),
								(nrWrapper[o] = t),
								((e, t, r) => {
									if (Object.defineProperty && Object.keys)
										try {
											return (
												Object.keys(e).forEach((r) => {
													Object.defineProperty(t, r, {
														get: () => e[r],
														set: (t) => ((e[r] = t), t),
													});
												}),
												t
											);
										} catch (e) {
											u([e], r);
										}
									for (const n in e) a.call(e, n) && (t[n] = e[n]);
								})(t, nrWrapper, e),
								nrWrapper);
						function nrWrapper() {
							let o;
							let a;
							let d;
							let l;
							try {
								(a = this),
									(o = [...arguments]),
									(d = "function" === typeof n ? n(o, a) : n || {});
							} catch (t) {
								u([t, "", [o, a, s], d], e);
							}
							i(`${r}start`, [o, a, s], d, c);
							try {
								return (l = t.apply(a, o));
							} catch (e) {
								throw (i(`${r}err`, [o, a, e], d, c), e);
							} finally {
								i(`${r}end`, [o, a, l], d, c);
							}
						}
					}
					function i(r, n, i, o) {
						if (!s || t) {
							const a = s;
							s = !0;
							try {
								e.emit(r, n, i, t, o);
							} catch (t) {
								u([t, r, n, i], e);
							}
							s = a;
						}
					}
				}
				function u(e, t) {
					t || (t = n.ee);
					try {
						t.emit("internal-error", e);
					} catch (e) {}
				}
				function d(e) {
					return !(e && "function" === typeof e && e.apply && !e[o]);
				}
			},
			9300: (e, t, r) => {
				r.d(t, { T: () => n });
				const n = r(860).K.ajax;
			},
			6774: (e, t, r) => {
				r.d(t, { T: () => n });
				const n = r(860).K.jserrors;
			},
			993: (e, t, r) => {
				r.d(t, { ET: () => o, It: () => s, TZ: () => a, p_: () => i });
				const n = r(860);
				const i = {
						ERROR: "ERROR",
						WARN: "WARN",
						INFO: "INFO",
						DEBUG: "DEBUG",
						TRACE: "TRACE",
					};
				const o = "log";
				const a = n.K.logging;
				const s = 1e6;
			},
			3785: (e, t, r) => {
				r.d(t, { R: () => c, b: () => u });
				const n = r(9908);
				const i = r(1863);
				const o = r(860);
				const a = r(3969);
				const s = r(993);
				function c(e, t) {
					const r =
							arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: {};
					const c =
							arguments.length > 3 && void 0 !== arguments[3]
								? arguments[3]
								: s.p_.INFO;
					(0, n.p)(
						a.xV,
						["API/logging/".concat(c.toLowerCase(), "/called")],
						void 0,
						o.K.metrics,
						e,
					),
						(0, n.p)(s.ET, [(0, i.t)(), t, r, c], void 0, o.K.logging, e);
				}
				function u(e) {
					return (
						"string" === typeof e && Object.values(s.p_).some((t) => t === e)
					);
				}
			},
			3969: (e, t, r) => {
				r.d(t, {
					TZ: () => n,
					XG: () => s,
					rs: () => i,
					xV: () => a,
					z_: () => o,
				});
				const n = r(860).K.metrics;
				const i = "sm";
				const o = "cm";
				const a = "storeSupportabilityMetrics";
				const s = "storeEventMetrics";
			},
			8166: (e, t, r) => {
				r.d(t, { T: () => n });
				const n = r(860).K.pageAction;
			},
			6630: (e, t, r) => {
				r.d(t, { T: () => n });
				const n = r(860).K.pageViewEvent;
			},
			782: (e, t, r) => {
				r.d(t, { T: () => n });
				const n = r(860).K.pageViewTiming;
			},
			6344: (e, t, r) => {
				r.d(t, {
					BB: () => f,
					G4: () => o,
					It: () => c,
					No: () => u,
					Qb: () => h,
					TZ: () => i,
					Ug: () => a,
					_s: () => s,
					bc: () => l,
					yP: () => d,
				});
				const n = r(2614);
				const i = r(860).K.sessionReplay;
				const o = {
						RECORD: "recordReplay",
						PAUSE: "pauseReplay",
						REPLAY_RUNNING: "replayRunning",
						ERROR_DURING_REPLAY: "errorDuringReplay",
					};
				const a = 0.12;
				const s = {
						DomContentLoaded: 0,
						Load: 1,
						FullSnapshot: 2,
						IncrementalSnapshot: 3,
						Meta: 4,
						Custom: 5,
					};
				const c = 1e6;
				const u = 64e3;
				const d = { [n.g.ERROR]: 15e3, [n.g.FULL]: 3e5, [n.g.OFF]: 0 };
				const l = {
						RESET: { message: "Session was reset", sm: "Reset" },
						IMPORT: { message: "Recorder failed to import", sm: "Import" },
						TOO_MANY: { message: "429: Too Many Requests", sm: "Too-Many" },
						TOO_BIG: { message: "Payload was too large", sm: "Too-Big" },
						CROSS_TAB: {
							message: "Session Entity was set to OFF on another tab",
							sm: "Cross-Tab",
						},
						ENTITLEMENTS: {
							message: "Session Replay is not allowed and will not be started",
							sm: "Entitlement",
						},
					};
				const f = 5e3;
				const h = { API: "api" };
			},
			5270: (e, t, r) => {
				r.d(t, { Aw: () => s, CT: () => c, SR: () => a });
				const n = r(2983);
				const i = r(7767);
				const o = r(6154);
				function a(e) {
					return (
						!!n.hR.MO &&
						(0, i.V)(e) &&
						!0 === (0, n.gD)(e, "session_trace.enabled")
					);
				}
				function s(e) {
					return !0 === (0, n.gD)(e, "session_replay.preload") && a(e);
				}
				function c(e, t) {
					const r = t.correctAbsoluteTimestamp(e);
					return {
						originalTimestamp: e,
						correctedTimestamp: r,
						timestampDiff: e - r,
						originTime: o.WN,
						correctedOriginTime: t.correctedOriginTime,
						originTimeDiff: Math.floor(o.WN - t.correctedOriginTime),
					};
				}
			},
			3738: (e, t, r) => {
				r.d(t, {
					He: () => i,
					Kp: () => s,
					Lc: () => u,
					Rz: () => d,
					TZ: () => n,
					bD: () => o,
					d3: () => a,
					jx: () => l,
					uP: () => c,
				});
				const n = r(860).K.sessionTrace;
				const i = "bstResource";
				const o = "resource";
				const a = "-start";
				const s = "-end";
				const c = `fn${a}`;
				const u = `fn${s}`;
				const d = "pushState";
				const l = 1e3;
			},
			3962: (e, t, r) => {
				r.d(t, {
					AM: () => o,
					O2: () => s,
					Qu: () => c,
					TZ: () => a,
					ih: () => u,
					tC: () => i,
				});
				const n = r(860);
				const i = ["click", "keydown", "submit"];
				const o = "api";
				const a = n.K.softNav;
				const s = { INITIAL_PAGE_LOAD: "", ROUTE_CHANGE: 1, UNSPECIFIED: 2 };
				const c = { INTERACTION: 1, AJAX: 2, CUSTOM_END: 3, CUSTOM_TRACER: 4 };
				const u = { IP: "in progress", FIN: "finished", CAN: "cancelled" };
			},
			7378: (e, t, r) => {
				r.d(t, {
					$p: () => x,
					BR: () => b,
					Kp: () => R,
					L3: () => y,
					Lc: () => c,
					NC: () => o,
					SG: () => d,
					TZ: () => i,
					U6: () => g,
					UT: () => m,
					d3: () => w,
					dT: () => f,
					e5: () => A,
					gx: () => v,
					l9: () => l,
					oW: () => h,
					op: () => p,
					rw: () => u,
					tH: () => E,
					uP: () => s,
					wW: () => T,
					xq: () => a,
				});
				const n = r(2983);
				const i = r(860).K.spa;
				const o = ["click", "submit", "keypress", "keydown", "keyup", "change"];
				const a = 999;
				const s = "fn-start";
				const c = "fn-end";
				const u = "cb-start";
				const d = "api-ixn-";
				const l = "remaining";
				const f = "interaction";
				const h = "spaNode";
				const g = "jsonpNode";
				const p = "fetch-start";
				const m = "fetch-done";
				const v = "fetch-body-";
				const b = "jsonp-end";
				const y = n.hR.ST;
				const w = "-start";
				const R = "-end";
				const x = "-body";
				const T = `cb${R}`;
				const A = "jsTime";
				const E = "fetch";
			},
			4234: (e, t, r) => {
				r.d(t, { W: () => i });
				const n = r(7836);
				class i {
					constructor(e, t, r) {
						(this.agentIdentifier = e),
							(this.aggregator = t),
							(this.ee = n.ee.get(e)),
							(this.featureName = r),
							(this.blocked = !1);
					}
				}
			},
			7767: (e, t, r) => {
				r.d(t, { V: () => o });
				const n = r(2983);
				const i = r(6154);
				const o = (e) => i.RI && !0 === (0, n.gD)(e, "privacy.cookies_enabled");
			},
			425: (e, t, r) => {
				r.d(t, { j: () => O });
				const n = r(860);
				const i = r(2983);
				const o = r(9908);
				const a = r(7836);
				const s = r(1687);
				const c = r(5289);
				const u = r(6154);
				const d = r(944);
				const l = r(3969);
				const f = r(384);
				const h = r(6344);
				const g = [
						"setErrorHandler",
						"finished",
						"addToTrace",
						"addRelease",
						"addPageAction",
						"setCurrentRouteName",
						"setPageViewName",
						"setCustomAttribute",
						"interaction",
						"noticeError",
						"setUserId",
						"setApplicationVersion",
						"start",
						h.G4.RECORD,
						h.G4.PAUSE,
						"log",
						"wrapLogger",
					];
				const p = ["setErrorHandler", "finished", "addToTrace", "addRelease"];
				const m = r(1863);
				const v = r(2614);
				const b = r(993);
				const y = r(3785);
				const w = r(2646);
				const R = r(3434);
				function x(e, t, r, n) {
					if (
						"object" !== typeof t ||
						!t ||
						"string" !== typeof r ||
						!r ||
						"function" !== typeof t[r]
					)
						return (0, d.R)(29);
					const i = ((e) => (e || a.ee).get("logger"))(e);
					const o = (0, R.YM)(i);
					const s = new w.y(a.P);
					return (
						(s.level = n.level),
						(s.customAttributes = n.customAttributes),
						o.inPlace(t, [r], "wrap-logger-", s),
						i
					);
				}
				function T() {
					const e = (0, f.pV)();
					g.forEach((t) => {
						e[t] = () => {
							for (
								let r = arguments.length, n = new Array(r), i = 0;
								i < r;
								i++
							)
								n[i] = arguments[i];
							return ((t) => {
								for (
									let r = arguments.length,
										n = new Array(r > 1 ? r - 1 : 0),
										i = 1;
									i < r;
									i++
								)
									n[i - 1] = arguments[i];
								const o = [];
								return (
									Object.values(e.initializedAgents).forEach((e) => {
										e?.api
											? e.exposed && e.api[t] && o.push(e.api[t](...n))
											: (0, d.R)(38, t);
									}),
									o.length > 1 ? o : o[0]
								);
							})(t, ...n);
						};
					});
				}
				const A = {};
				const E = r(5284);
				const N = (e) => {
					const t = e.startsWith("http");
					(e += "/"), (r.p = t ? e : `https://${e}`);
				};
				let S = !1;
				function O(e) {
					const t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {};
					const g = arguments.length > 2 ? arguments[2] : void 0;
					const w = arguments.length > 3 ? arguments[3] : void 0;
					let {
							init: R,
							info: O,
							loader_config: I,
							runtime: _ = { loaderType: g },
							exposed: j = !0,
						} = t;
					const P = (0, f.pV)();
					O || ((R = P.init), (O = P.info), (I = P.loader_config)),
						(0, i.xN)(e.agentIdentifier, R || {}),
						(0, i.aN)(e.agentIdentifier, I || {}),
						(O.jsAttributes ??= {}),
						u.bv && (O.jsAttributes.isWorker = !0),
						(0, i.x1)(e.agentIdentifier, O);
					const C = (0, i.D0)(e.agentIdentifier);
					const k = [O.beacon, O.errorBeacon];
					S ||
						(C.proxy.assets && (N(C.proxy.assets), k.push(C.proxy.assets)),
						C.proxy.beacon && k.push(C.proxy.beacon),
						T(),
						(0, f.US)("activatedFeatures", E.B),
						(e.runSoftNavOverSpa &&=
							!0 === C.soft_navigations.enabled &&
							C.feature_flags.includes("soft_nav"))),
						(_.denyList = [
							...(C.ajax.deny_list || []),
							...(C.ajax.block_internal ? k : []),
						]),
						(_.ptid = e.agentIdentifier),
						(0, i.V)(e.agentIdentifier, _),
						void 0 === e.api &&
							(e.api = ((e, t) => {
								const f =
									arguments.length > 2 &&
									void 0 !== arguments[2] &&
									arguments[2];
								t || (0, s.Ak)(e, "api");
								const g = {};
								const w = a.ee.get(e);
								const R = w.get("tracer");
								(A[e] = v.g.OFF),
									w.on(h.G4.REPLAY_RUNNING, (t) => {
										A[e] = t;
									});
								const T = "api-";
								const E = `${T}ixn-`;
								function N(t, r, n, o) {
									const a = (0, i.Vp)(e);
									return (
										null === r
											? delete a.jsAttributes[t]
											: (0, i.x1)(e, {
													...a,
													jsAttributes: { ...a.jsAttributes, [t]: r },
												}),
										I(T, n, !0, o || null === r ? "session" : void 0)(t, r)
									);
								}
								function S() {}
								(g.log = (e) => {
									const { customAttributes: t = {}, level: r = b.p_.INFO } =
										arguments.length > 1 && void 0 !== arguments[1]
											? arguments[1]
											: {};
									(0, o.p)(l.xV, ["API/log/called"], void 0, n.K.metrics, w),
										(0, y.R)(w, e, t, r);
								}),
									(g.wrapLogger = (e, t) => {
										const { customAttributes: r = {}, level: i = b.p_.INFO } =
											arguments.length > 2 && void 0 !== arguments[2]
												? arguments[2]
												: {};
										(0, o.p)(
											l.xV,
											["API/wrapLogger/called"],
											void 0,
											n.K.metrics,
											w,
										),
											x(w, e, t, { customAttributes: r, level: i });
									}),
									p.forEach((e) => {
										g[e] = I(T, e, !0, "api");
									}),
									(g.addPageAction = I(T, "addPageAction", !0, n.K.pageAction)),
									(g.setPageViewName = (t, r) => {
										if ("string" === typeof t)
											return (
												"/" !== t.charAt(0) && (t = `/${t}`),
												((0, i.fr)(e).customTransaction =
													(r || "http://custom.transaction") + t),
												I(T, "setPageViewName", !0)()
											);
									}),
									(g.setCustomAttribute = (e, t) => {
										const r =
											arguments.length > 2 &&
											void 0 !== arguments[2] &&
											arguments[2];
										if ("string" === typeof e) {
											if (
												["string", "number", "boolean"].includes(typeof t) ||
												null === t
											)
												return N(e, t, "setCustomAttribute", r);
											(0, d.R)(40, typeof t);
										} else (0, d.R)(39, typeof e);
									}),
									(g.setUserId = (e) => {
										if ("string" === typeof e || null === e)
											return N("enduser.id", e, "setUserId", !0);
										(0, d.R)(41, typeof e);
									}),
									(g.setApplicationVersion = (e) => {
										if ("string" === typeof e || null === e)
											return N(
												"application.version",
												e,
												"setApplicationVersion",
												!1,
											);
										(0, d.R)(42, typeof e);
									}),
									(g.start = () => {
										try {
											(0, o.p)(
												l.xV,
												["API/start/called"],
												void 0,
												n.K.metrics,
												w,
											),
												w.emit("manual-start-all");
										} catch (e) {
											(0, d.R)(23, e);
										}
									}),
									(g[h.G4.RECORD] = () => {
										(0, o.p)(
											l.xV,
											["API/recordReplay/called"],
											void 0,
											n.K.metrics,
											w,
										),
											(0, o.p)(h.G4.RECORD, [], void 0, n.K.sessionReplay, w);
									}),
									(g[h.G4.PAUSE] = () => {
										(0, o.p)(
											l.xV,
											["API/pauseReplay/called"],
											void 0,
											n.K.metrics,
											w,
										),
											(0, o.p)(h.G4.PAUSE, [], void 0, n.K.sessionReplay, w);
									}),
									(g.interaction = (e) =>
										new S().get("object" === typeof e ? e : {}));
								const O = (S.prototype = {
									createTracer: function (e, t) {
										const r = {};
										const i = this;
										const a = "function" === typeof t;
										return (
											(0, o.p)(
												l.xV,
												["API/createTracer/called"],
												void 0,
												n.K.metrics,
												w,
											),
											f ||
												(0, o.p)(
													`${E}tracer`,
													[(0, m.t)(), e, r],
													i,
													n.K.spa,
													w,
												),
											function () {
												if (
													(R.emit(
														`${a ? "" : "no-"}fn-start`,
														[(0, m.t)(), i, a],
														r,
													),
													a)
												)
													try {
														return t.apply(this, arguments);
													} catch (e) {
														const t = "string" === typeof e ? new Error(e) : e;
														throw (
															(R.emit("fn-err", [arguments, this, t], r), t)
														);
													} finally {
														R.emit("fn-end", [(0, m.t)()], r);
													}
											}
										);
									},
								});
								function I(e, t, r, i) {
									return function () {
										return (
											(0, o.p)(
												l.xV,
												[`API/${t}/called`],
												void 0,
												n.K.metrics,
												w,
											),
											i &&
												(0, o.p)(
													e + t,
													[(0, m.t)(), ...arguments],
													r ? null : this,
													i,
													w,
												),
											r ? void 0 : this
										);
									};
								}
								function _() {
									r.e(478)
										.then(r.bind(r, 8778))
										.then((t) => {
											const { setAPI: r } = t;
											r(e), (0, s.Ze)(e, "api");
										})
										.catch((e) => {
											(0, d.R)(27, e), w.abort();
										});
								}
								return (
									[
										"actionText",
										"setName",
										"setAttribute",
										"save",
										"ignore",
										"onEnd",
										"getContext",
										"end",
										"get",
									].forEach((e) => {
										O[e] = I(E, e, void 0, f ? n.K.softNav : n.K.spa);
									}),
									(g.setCurrentRouteName = f
										? I(E, "routeName", void 0, n.K.softNav)
										: I(T, "routeName", !0, n.K.spa)),
									(g.noticeError = (t, r) => {
										"string" === typeof t && (t = new Error(t)),
											(0, o.p)(
												l.xV,
												["API/noticeError/called"],
												void 0,
												n.K.metrics,
												w,
											),
											(0, o.p)(
												"err",
												[t, (0, m.t)(), !1, r, !!A[e]],
												void 0,
												n.K.jserrors,
												w,
											);
									}),
									u.RI ? (0, c.GG)(() => _(), !0) : _(),
									g
								);
							})(e.agentIdentifier, w, e.runSoftNavOverSpa)),
						void 0 === e.exposed && (e.exposed = j),
						(S = !0);
				}
			},
			8374: (e, t, r) => {
				r.nc = (() => {
					try {
						return document?.currentScript?.nonce;
					} catch (e) {}
					return "";
				})();
			},
			860: (e, t, r) => {
				r.d(t, { K: () => n, P: () => i });
				const n = {
						ajax: "ajax",
						jserrors: "jserrors",
						logging: "logging",
						metrics: "metrics",
						pageAction: "page_action",
						pageViewEvent: "page_view_event",
						pageViewTiming: "page_view_timing",
						sessionReplay: "session_replay",
						sessionTrace: "session_trace",
						softNav: "soft_navigations",
						spa: "spa",
					};
				const i = {
						[n.pageViewEvent]: 1,
						[n.pageViewTiming]: 2,
						[n.metrics]: 3,
						[n.jserrors]: 4,
						[n.spa]: 5,
						[n.ajax]: 6,
						[n.sessionTrace]: 7,
						[n.pageAction]: 8,
						[n.softNav]: 9,
						[n.sessionReplay]: 10,
						[n.logging]: 11,
					};
			},
		};
	const n = {};
	function i(e) {
		const t = n[e];
		if (void 0 !== t) return t.exports;
		const o = (n[e] = { exports: {} });
		return r[e](o, o.exports, i), o.exports;
	}
	(i.m = r),
		(i.d = (e, t) => {
			for (const r in t)
				i.o(t, r) &&
					!i.o(e, r) &&
					Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
		}),
		(i.f = {}),
		(i.e = (e) =>
			Promise.all(Object.keys(i.f).reduce((t, r) => (i.f[r](e, t), t), []))),
		(i.u = (e) =>
			`${({ 212: "nr-spa-compressor", 249: "nr-spa-recorder", 478: "nr-spa" })[e]}-1.263.0.min.js`),
		(i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(e = {}),
		(t = "NRBA-1.263.0.PROD:"),
		(i.l = (r, n, o, a) => {
			if (e[r]) e[r].push(n);
			else {
				let s;
				let c;
				if (void 0 !== o)
					for (
						let u = document.getElementsByTagName("script"), d = 0;
						d < u.length;
						d++
					) {
						const l = u[d];
						if (
							l.getAttribute("src") === r ||
							l.getAttribute("data-webpack") === t + o
						) {
							s = l;
							break;
						}
					}
				if (!s) {
					c = !0;
					const f = {
						478: "sha512-9jwK5EXE3dKDM557QVJkJa3KNyxeYjSwldk6olxtGLO7VhrWEyCUhdyGCaxFsfOxcBh+cCW+94hhz56dSL0dMw==",
						249: "sha512-Urj0wU3GFPdOO++t6BFDcgrDBQw9BCNCMPa3XT4U8VJspMuKfjG+9jfPJSVDJvc3hLhSVddCZgCUhNQAtBC7Fw==",
						212: "sha512-SZvLf1toh7R+zIeLutWd+TjVgMVWSUUoJdrCHrlBVC/L6qu4zyZAyXXDd1LZgzISa84x/CDTCejM/ibqFbvaPA==",
					};
					((s = document.createElement("script")).charset = "utf-8"),
						(s.timeout = 120),
						i.nc && s.setAttribute("nonce", i.nc),
						s.setAttribute("data-webpack", t + o),
						(s.src = r),
						0 !== s.src.indexOf(`${window.location.origin}/`) &&
							(s.crossOrigin = "anonymous"),
						f[a] && (s.integrity = f[a]);
				}
				e[r] = [n];
				const h = (t, n) => {
						(s.onerror = s.onload = null), clearTimeout(g);
						const i = e[r];
						if (
							(delete e[r],
							s.parentNode?.removeChild(s),
							i?.forEach((e) => e(n)),
							t)
						)
							return t(n);
					};
				const g = setTimeout(
						h.bind(null, void 0, { type: "timeout", target: s }),
						12e4,
					);
				(s.onerror = h.bind(null, s.onerror)),
					(s.onload = h.bind(null, s.onload)),
					c && document.head.appendChild(s);
			}
		}),
		(i.r = (e) => {
			"undefined" !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(i.p = "https://js-agent.newrelic.com/"),
		(() => {
			const e = { 38: 0, 788: 0 };
			i.f.j = (t, r) => {
				let n = i.o(e, t) ? e[t] : void 0;
				if (0 !== n)
					if (n) r.push(n[2]);
					else {
						const o = new Promise((r, i) => (n = e[t] = [r, i]));
						r.push((n[2] = o));
						const a = i.p + i.u(t);
						const s = new Error();
						i.l(
							a,
							(r) => {
								if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
									const o = r && ("load" === r.type ? "missing" : r.type);
									const a = r?.target?.src;
									(s.message =
										`Loading chunk ${t} failed.\n(${o}: ${a})`),
										(s.name = "ChunkLoadError"),
										(s.type = o),
										(s.request = a),
										n[1](s);
								}
							},
							`chunk-${t}`,
							t,
						);
					}
			};
			const t = (t, r) => {
					let n;
					let o;
					const [a, s, c] = r;
					let u = 0;
					if (a.some((t) => 0 !== e[t])) {
						for (n in s) i.o(s, n) && (i.m[n] = s[n]);
						if (c) c(i);
					}
					for (t?.(r); u < a.length; u++)
						(o = a[u]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
				};
			const r = (self["webpackChunk:NRBA-1.263.0.PROD"] =
					self["webpackChunk:NRBA-1.263.0.PROD"] || []);
			r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
		})(),
		(() => {
			i(8374);
			const e = i(944);
			const t = i(6344);
			const r = i(9566);
			const n = i(7836);
			class o {
				agentIdentifier;
				constructor() {
					const e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: (0, r.LA)(16);
					(this.agentIdentifier = e), (this.ee = n.ee.get(e));
				}
				#e(t) {
					for (
						let r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
						i < r;
						i++
					)
						n[i - 1] = arguments[i];
					if ("function" === typeof this.api?.[t]) return this.api[t](...n);
					(0, e.R)(35, t);
				}
				addPageAction(e, t) {
					return this.#e("addPageAction", e, t);
				}
				setPageViewName(e, t) {
					return this.#e("setPageViewName", e, t);
				}
				setCustomAttribute(e, t, r) {
					return this.#e("setCustomAttribute", e, t, r);
				}
				noticeError(e, t) {
					return this.#e("noticeError", e, t);
				}
				setUserId(e) {
					return this.#e("setUserId", e);
				}
				setApplicationVersion(e) {
					return this.#e("setApplicationVersion", e);
				}
				setErrorHandler(e) {
					return this.#e("setErrorHandler", e);
				}
				finished(e) {
					return this.#e("finished", e);
				}
				addRelease(e, t) {
					return this.#e("addRelease", e, t);
				}
				start(e) {
					return this.#e("start", e);
				}
				recordReplay() {
					return this.#e(t.G4.RECORD);
				}
				pauseReplay() {
					return this.#e(t.G4.PAUSE);
				}
				addToTrace(e) {
					return this.#e("addToTrace", e);
				}
				setCurrentRouteName(e) {
					return this.#e("setCurrentRouteName", e);
				}
				interaction() {
					return this.#e("interaction");
				}
				log(e, t) {
					return this.#e("logInfo", e, t);
				}
				wrapLogger(e, t, r) {
					return this.#e("wrapLogger", e, t, r);
				}
			}
			const a = i(860);
			const s = i(2983);
			const c = Object.values(a.K);
			function u(e) {
				const t = {};
				return (
					c.forEach((r) => {
						t[r] = ((e, t) => !0 === (0, s.gD)(t, "".concat(e, ".enabled")))(
							r,
							e,
						);
					}),
					t
				);
			}
			const d = i(425);
			const l = i(1687);
			const f = i(4234);
			const h = i(5289);
			const g = i(6154);
			const p = i(5270);
			const m = i(7767);
			const v = i(6389);
			class b extends f.W {
				constructor(e, t, r) {
					const n =
						!(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
					super(e, t, r),
						(this.auto = n),
						(this.abortHandler = void 0),
						(this.featAggregate = void 0),
						(this.onAggregateImported = void 0),
						!1 ===
							(0, s.gD)(
								this.agentIdentifier,
								"".concat(this.featureName, ".autoStart"),
							) && (this.auto = !1),
						this.auto
							? (0, l.Ak)(e, r)
							: this.ee.on(
									"manual-start-all",
									(0, v.J)(() => {
										(0, l.Ak)(this.agentIdentifier, this.featureName),
											(this.auto = !0),
											this.importAggregator();
									}),
								);
				}
				importAggregator() {
					let t;
					const r =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: {};
					if (this.featAggregate || !this.auto) return;
					this.onAggregateImported = new Promise((e) => {
						t = e;
					});
					const n = async () => {
						let n;
						try {
							if ((0, m.V)(this.agentIdentifier)) {
								const { setupAgentSession: e } = await i
									.e(478)
									.then(i.bind(i, 6526));
								n = e(this.agentIdentifier);
							}
						} catch (t) {
							(0, e.R)(20, t),
								this.ee.emit("internal-error", [t]),
								this.featureName === a.K.sessionReplay && this.abortHandler?.();
						}
						try {
							if (!this.#t(this.featureName, n))
								return (
									(0, l.Ze)(this.agentIdentifier, this.featureName), void t(!1)
								);
							const { lazyFeatureLoader: e } = await i
									.e(478)
									.then(i.bind(i, 6103));
							const { Aggregate: o } = await e(this.featureName, "aggregate");
							(this.featAggregate = new o(
								this.agentIdentifier,
								this.aggregator,
								r,
							)),
								t(!0);
						} catch (r) {
							(0, e.R)(34, r),
								this.abortHandler?.(),
								(0, l.Ze)(this.agentIdentifier, this.featureName, !0),
								t(!1),
								this.ee?.abort();
						}
					};
					g.RI ? (0, h.GG)(() => n(), !0) : n();
				}
				#t(e, t) {
					switch (e) {
						case a.K.sessionReplay:
							return (0, p.SR)(this.agentIdentifier) && !!t;
						case a.K.sessionTrace:
							return !!t;
						default:
							return !0;
					}
				}
			}
			const y = i(6630);
			class w extends b {
				static featureName = y.T;
				constructor(e, t) {
					const r =
						!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					super(e, t, y.T, r), this.importAggregator();
				}
			}
			const R = i(4777);
			const x = i(1478);
			class T extends R.J {
				constructor(e) {
					super(e), (this.aggregatedData = {});
				}
				store(e, t, r, n, i) {
					const o = this.getBucket(e, t, r, i);
					return (
						(o.metrics = ((e, t) => {
							t || (t = { count: 0 });
							return (
								(t.count += 1),
								(0, x.$)(e, (e, r) => {
									t[e] = A(r, t[e]);
								}),
								t
							);
						})(n, o.metrics)),
						o
					);
				}
				merge(e, t, r, n, i) {
					const o = this.getBucket(e, t, n, i);
					if (o.metrics) {
						const a = o.metrics;
						(a.count += r.count),
							(0, x.$)(r, (e, t) => {
								if ("count" !== e) {
									const n = a[e];
									const i = r[e];
									i && !i.c
										? (a[e] = A(i.t, n))
										: (a[e] = ((e, t) => {
												if (!t) return e;
												t.c || (t = E(t.t));
												return (
													(t.min = Math.min(e.min, t.min)),
													(t.max = Math.max(e.max, t.max)),
													(t.t += e.t),
													(t.sos += e.sos),
													(t.c += e.c),
													t
												);
											})(i, a[e]));
								}
							});
					} else o.metrics = r;
				}
				storeMetric(e, t, r, n) {
					const i = this.getBucket(e, t, r);
					return (i.stats = A(n, i.stats)), i;
				}
				getBucket(e, t, r, n) {
					this.aggregatedData[e] || (this.aggregatedData[e] = {});
					let i = this.aggregatedData[e][t];
					return (
						i ||
							((i = this.aggregatedData[e][t] = { params: r || {} }),
							n && (i.custom = n)),
						i
					);
				}
				get(e, t) {
					return t
						? this.aggregatedData[e]?.[t]
						: this.aggregatedData[e];
				}
				take(e) {
					for (let t = {}, r = "", n = !1, i = 0; i < e.length; i++)
						(t[(r = e[i])] = Object.values(this.aggregatedData[r] || {})),
							t[r].length && (n = !0),
							delete this.aggregatedData[r];
					return n ? t : null;
				}
			}
			function A(e, t) {
				return null == e
					? ((e) => {
							e ? e.c++ : (e = { c: 1 });
							return e;
						})(t)
					: t
						? (t.c || (t = E(t.t)),
							(t.c += 1),
							(t.t += e),
							(t.sos += e * e),
							e > t.max && (t.max = e),
							e < t.min && (t.min = e),
							t)
						: { t: e };
			}
			function E(e) {
				return { t: e, min: e, max: e, sos: e * e, c: 1 };
			}
			const N = i(384);
			const S = i(9908);
			const O = i(2843);
			const I = i(3878);
			const _ = i(782);
			const j = i(1863);
			class P extends b {
				static featureName = _.T;
				constructor(e, t) {
					const r =
						!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					super(e, t, _.T, r),
						g.RI &&
							((0, O.u)(
								() => (0, S.p)("docHidden", [(0, j.t)()], void 0, _.T, this.ee),
								!0,
							),
							(0, I.sp)("pagehide", () =>
								(0, S.p)("winPagehide", [(0, j.t)()], void 0, _.T, this.ee),
							),
							this.importAggregator());
				}
			}
			const C = i(3969);
			class k extends b {
				static featureName = C.TZ;
				constructor(e, t) {
					const r =
						!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					super(e, t, C.TZ, r), this.importAggregator();
				}
			}
			const L = i(6774);
			const D = i(3304);
			class H {
				constructor(e, t, r, n, i) {
					(this.name = "UncaughtError"),
						(this.message = "string" === typeof e ? e : (0, D.A)(e)),
						(this.sourceURL = t),
						(this.line = r),
						(this.column = n),
						(this.__newrelic = i);
				}
			}
			function M(e) {
				return B(e)
					? e
					: new H(
							void 0 !== e?.message ? e.message : e,
							e?.filename || e?.sourceURL,
							e?.lineno || e?.line,
							e?.colno || e?.col,
							e?.__newrelic,
						);
			}
			function K(e) {
				const t = "Unhandled Promise Rejection";
				if (B(e?.reason))
					try {
						return (
							(e.reason.message = `${t}: ${e.reason.message}`), M(e.reason)
						);
					} catch (t) {
						return M(e.reason);
					}
				if (void 0 === e.reason) return M(t);
				const r = M(e.reason);
				return (r.message = `${t}: ${r?.message}`), r;
			}
			function U(e) {
				if (
					e.error instanceof SyntaxError &&
					!/:\d+$/.test(e.error.stack?.trim())
				) {
					const t = new H(
						e.message,
						e.filename,
						e.lineno,
						e.colno,
						e.error.__newrelic,
					);
					return (t.name = SyntaxError.name), t;
				}
				return B(e.error) ? e.error : M(e);
			}
			function B(e) {
				return e instanceof Error && !!e.stack;
			}
			class G extends b {
				static featureName = L.T;
				#r = !1;
				constructor(e, r) {
					const n =
						!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					super(e, r, L.T, n);
					try {
						this.removeOnAbort = new AbortController();
					} catch (e) {}
					this.ee.on("internal-error", (e) => {
						this.abortHandler &&
							(0, S.p)(
								"ierr",
								[M(e), (0, j.t)(), !0, {}, this.#r],
								void 0,
								this.featureName,
								this.ee,
							);
					}),
						this.ee.on(t.G4.REPLAY_RUNNING, (e) => {
							this.#r = e;
						}),
						g.gm.addEventListener(
							"unhandledrejection",
							(e) => {
								this.abortHandler &&
									(0, S.p)(
										"err",
										[
											K(e),
											(0, j.t)(),
											!1,
											{ unhandledPromiseRejection: 1 },
											this.#r,
										],
										void 0,
										this.featureName,
										this.ee,
									);
							},
							(0, I.jT)(!1, this.removeOnAbort?.signal),
						),
						g.gm.addEventListener(
							"error",
							(e) => {
								this.abortHandler &&
									(0, S.p)(
										"err",
										[U(e), (0, j.t)(), !1, {}, this.#r],
										void 0,
										this.featureName,
										this.ee,
									);
							},
							(0, I.jT)(!1, this.removeOnAbort?.signal),
						),
						(this.abortHandler = this.#n),
						this.importAggregator();
				}
				#n() {
					this.removeOnAbort?.abort(), (this.abortHandler = void 0);
				}
			}
			const V = i(8990);
			let F = 1;
			const W = "nr@id";
			function z(e) {
				const t = typeof e;
				return !e || ("object" !== t && "function" !== t)
					? -1
					: e === g.gm
						? 0
						: (0, V.I)(e, W, () => F++);
			}
			function Z(e) {
				if ("string" === typeof e && e.length) return e.length;
				if ("object" === typeof e) {
					if (
						"undefined" !== typeof ArrayBuffer &&
						e instanceof ArrayBuffer &&
						e.byteLength
					)
						return e.byteLength;
					if ("undefined" !== typeof Blob && e instanceof Blob && e.size)
						return e.size;
					if (!("undefined" !== typeof FormData && e instanceof FormData))
						try {
							return (0, D.A)(e).length;
						} catch (e) {
							return;
						}
				}
			}
			const q = i(8941);
			const Y = i(7485);
			class X {
				constructor(e) {
					this.agentIdentifier = e;
				}
				generateTracePayload(e) {
					if (!this.shouldGenerateTrace(e)) return null;
					const t = (0, s.oC)(this.agentIdentifier);
					if (!t) return null;
					const n = (t.accountID || "").toString() || null;
					const i = (t.agentID || "").toString() || null;
					const o = (t.trustKey || "").toString() || null;
					if (!n || !i) return null;
					const a = (0, r.ZF)();
					const c = (0, r.el)();
					const u = Date.now();
					const d = { spanId: a, traceId: c, timestamp: u };
					return (
						(e.sameOrigin ||
							(this.isAllowedOrigin(e) &&
								this.useTraceContextHeadersForCors())) &&
							((d.traceContextParentHeader =
								this.generateTraceContextParentHeader(a, c)),
							(d.traceContextStateHeader = this.generateTraceContextStateHeader(
								a,
								u,
								n,
								i,
								o,
							))),
						((e.sameOrigin && !this.excludeNewrelicHeader()) ||
							(!e.sameOrigin &&
								this.isAllowedOrigin(e) &&
								this.useNewrelicHeaderForCors())) &&
							(d.newrelicHeader = this.generateTraceHeader(a, c, u, n, i, o)),
						d
					);
				}
				generateTraceContextParentHeader(e, t) {
					return `00-${t}-${e}-01`;
				}
				generateTraceContextStateHeader(e, t, r, n, i) {
					return `${i}@nr=0-1-${r}-${n}-${e}----${t}`;
				}
				generateTraceHeader(e, t, r, n, i, o) {
					if (!("function" === typeof g.gm?.btoa)) return null;
					const a = {
						v: [0, 1],
						d: { ty: "Browser", ac: n, ap: i, id: e, tr: t, ti: r },
					};
					return o && n !== o && (a.d.tk = o), btoa((0, D.A)(a));
				}
				shouldGenerateTrace(e) {
					return this.isDtEnabled() && this.isAllowedOrigin(e);
				}
				isAllowedOrigin(e) {
					let t = !1;
					let r = {};
					if (
						((0, s.gD)(this.agentIdentifier, "distributed_tracing") &&
							(r = (0, s.D0)(this.agentIdentifier).distributed_tracing),
						e.sameOrigin)
					)
						t = !0;
					else if (Array.isArray(r.allowed_origins))
						for (let n = 0; n < r.allowed_origins.length; n++) {
							const i = (0, Y.D)(r.allowed_origins[n]);
							if (
								e.hostname === i.hostname &&
								e.protocol === i.protocol &&
								e.port === i.port
							) {
								t = !0;
								break;
							}
						}
					return t;
				}
				isDtEnabled() {
					const e = (0, s.gD)(this.agentIdentifier, "distributed_tracing");
					return !!e && !!e.enabled;
				}
				excludeNewrelicHeader() {
					const e = (0, s.gD)(this.agentIdentifier, "distributed_tracing");
					return !!e && !!e.exclude_newrelic_header;
				}
				useNewrelicHeaderForCors() {
					const e = (0, s.gD)(this.agentIdentifier, "distributed_tracing");
					return !!e && !1 !== e.cors_use_newrelic_header;
				}
				useTraceContextHeadersForCors() {
					const e = (0, s.gD)(this.agentIdentifier, "distributed_tracing");
					return !!e && !!e.cors_use_tracecontext_headers;
				}
			}
			const J = i(9300);
			const Q = i(7295);
			const ee = ["load", "error", "abort", "timeout"];
			const te = ee.length;
			const re = s.hR.REQ;
			const ne = s.hR.XHR;
			class ie extends b {
				static featureName = J.T;
				constructor(e, t) {
					const r =
						!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					super(e, t, J.T, r),
						(this.dt = new X(e)),
						(this.handler = (e, t, r, n) => (0, S.p)(e, t, r, n, this.ee));
					try {
						const e = {
							xmlhttprequest: "xhr",
							fetch: "fetch",
							beacon: "beacon",
						};
						g.gm?.performance?.getEntriesByType("resource").forEach((t) => {
							if (t.initiatorType in e && 0 !== t.responseStatus) {
								const r = { status: t.responseStatus };
								const n = {
										rxSize: t.transferSize,
										duration: Math.floor(t.duration),
										cbTime: 0,
									};
								oe(r, t.name),
									this.handler(
										"xhr",
										[r, n, t.startTime, t.responseEnd, e[t.initiatorType]],
										void 0,
										a.K.ajax,
									);
							}
						});
					} catch (e) {}
					(0, q.NZ)(this.ee),
						(0, q.bX)(this.ee),
						((e, t, r, n) => {
							function i(e) {
								(this.totalCbs = 0),
									(this.called = 0),
									(this.cbTime = 0),
									(this.end = x),
									(this.ended = !1),
									(this.xhrGuids = {}),
									(this.lastSize = null),
									(this.loadCaptureCalled = !1),
									(this.params = this.params || {}),
									(this.metrics = this.metrics || {}),
									e.addEventListener(
										"load",
										(r) => {
											T(this, e);
										},
										(0, I.jT)(!1),
									),
									g.lR ||
										e.addEventListener(
											"progress",
											(e) => {
												this.lastSize = e.loaded;
											},
											(0, I.jT)(!1),
										);
							}
							function o(e) {
								(this.params = { method: e[0] }),
									oe(this, e[1]),
									(this.metrics = {});
							}
							function c(t, r) {
								const i = (0, s.oC)(e);
								i.xpid &&
									this.sameOrigin &&
									r.setRequestHeader("X-NewRelic-ID", i.xpid);
								const o = n.generateTracePayload(this.parsedOrigin);
								if (o) {
									let a = !1;
									o.newrelicHeader &&
										(r.setRequestHeader("newrelic", o.newrelicHeader),
										(a = !0)),
										o.traceContextParentHeader &&
											(r.setRequestHeader(
												"traceparent",
												o.traceContextParentHeader,
											),
											o.traceContextStateHeader &&
												r.setRequestHeader(
													"tracestate",
													o.traceContextStateHeader,
												),
											(a = !0)),
										a && (this.dt = o);
								}
							}
							function u(e, r) {
								const n = this.metrics;
								const i = e[0];
								if (n && i) {
									const a = Z(i);
									a && (n.txSize = a);
								}
								(this.startTime = (0, j.t)()),
									(this.body = i),
									(this.listener = (e) => {
										try {
											"abort" !== e.type ||
												this.loadCaptureCalled ||
												(this.params.aborted = !0),
												("load" !== e.type ||
													(this.called === this.totalCbs &&
														(this.onloadCalled ||
															"function" !== typeof r.onload) &&
														"function" === typeof this.end)) &&
													this.end(r);
										} catch (e) {
											try {
												t.emit("internal-error", [e]);
											} catch (e) {}
										}
									});
								for (let s = 0; s < te; s++)
									r.addEventListener(ee[s], this.listener, (0, I.jT)(!1));
							}
							function d(e, t, r) {
								(this.cbTime += e),
									t ? (this.onloadCalled = !0) : (this.called += 1),
									this.called !== this.totalCbs ||
										(!this.onloadCalled && "function" === typeof r.onload) ||
										"function" !== typeof this.end ||
										this.end(r);
							}
							function l(e, t) {
								const r = `${z(e)}${!!t}`;
								this.xhrGuids &&
									!this.xhrGuids[r] &&
									((this.xhrGuids[r] = !0), (this.totalCbs += 1));
							}
							function f(e, t) {
								const r = `${z(e)}${!!t}`;
								this.xhrGuids?.[r] &&
									(delete this.xhrGuids[r], (this.totalCbs -= 1));
							}
							function h() {
								this.endTime = (0, j.t)();
							}
							function p(e, r) {
								r instanceof ne &&
									"load" === e[0] &&
									t.emit("xhr-load-added", [e[1], e[2]], r);
							}
							function m(e, r) {
								r instanceof ne &&
									"load" === e[0] &&
									t.emit("xhr-load-removed", [e[1], e[2]], r);
							}
							function v(e, t, r) {
								t instanceof ne &&
									("onload" === r && (this.onload = !0),
									("load" === (e[0]?.type) || this.onload) &&
										(this.xhrCbStart = (0, j.t)()));
							}
							function b(e, r) {
								this.xhrCbStart &&
									t.emit(
										"xhr-cb-time",
										[(0, j.t)() - this.xhrCbStart, this.onload, r],
										r,
									);
							}
							function y(e) {
								let t;
								const r = e[1] || {};
								if (
									("string" === typeof e[0]
										? 0 === (t = e[0]).length &&
											g.RI &&
											(t = `${g.gm.location.href}`)
										: e[0]?.url
											? (t = e[0].url)
											: g.gm?.URL && e[0] && e[0] instanceof URL
												? (t = e[0].href)
												: "function" === typeof e[0].toString &&
													(t = e[0].toString()),
									"string" === typeof t && 0 !== t.length)
								) {
									t &&
										((this.parsedOrigin = (0, Y.D)(t)),
										(this.sameOrigin = this.parsedOrigin.sameOrigin));
									const i = n.generateTracePayload(this.parsedOrigin);
									if (i && (i.newrelicHeader || i.traceContextParentHeader))
										if (e[0]?.headers)
											s(e[0].headers, i) && (this.dt = i);
										else {
											const o = {};
											for (const a in r) o[a] = r[a];
											(o.headers = new Headers(r.headers || {})),
												s(o.headers, i) && (this.dt = i),
												e.length > 1 ? (e[1] = o) : e.push(o);
										}
								}
								function s(e, t) {
									let r = !1;
									return (
										t.newrelicHeader &&
											(e.set("newrelic", t.newrelicHeader), (r = !0)),
										t.traceContextParentHeader &&
											(e.set("traceparent", t.traceContextParentHeader),
											t.traceContextStateHeader &&
												e.set("tracestate", t.traceContextStateHeader),
											(r = !0)),
										r
									);
								}
							}
							function w(e, t) {
								(this.params = {}),
									(this.metrics = {}),
									(this.startTime = (0, j.t)()),
									(this.dt = t),
									e.length >= 1 && (this.target = e[0]),
									e.length >= 2 && (this.opts = e[1]);
								let r;
								const n = this.opts || {};
								const i = this.target;
								"string" === typeof i
									? (r = i)
									: "object" === typeof i && i instanceof re
										? (r = i.url)
										: g.gm?.URL &&
											"object" === typeof i &&
											i instanceof URL &&
											(r = i.href),
									oe(this, r);
								const o = (
									`${(i && i instanceof re && i.method) || n.method || "GET"}`
								).toUpperCase();
								(this.params.method = o),
									(this.body = n.body),
									(this.txSize = Z(n.body) || 0);
							}
							function R(e, t) {
								if (
									((this.endTime = (0, j.t)()),
									this.params || (this.params = {}),
									(0, Q.iW)(this.params))
								)
									return;
								let n;
								(this.params.status = t ? t.status : 0),
									"string" === typeof this.rxSize &&
										this.rxSize.length > 0 &&
										(n = +this.rxSize);
								const i = {
									txSize: this.txSize,
									rxSize: n,
									duration: (0, j.t)() - this.startTime,
								};
								r(
									"xhr",
									[this.params, i, this.startTime, this.endTime, "fetch"],
									this,
									a.K.ajax,
								);
							}
							function x(e) {
								const t = this.params;
								const n = this.metrics;
								if (!this.ended) {
									this.ended = !0;
									for (let t = 0; t < te; t++)
										e.removeEventListener(ee[t], this.listener, !1);
									t.aborted ||
										(0, Q.iW)(t) ||
										((n.duration = (0, j.t)() - this.startTime),
										this.loadCaptureCalled || 4 !== e.readyState
											? null == t.status && (t.status = 0)
											: T(this, e),
										(n.cbTime = this.cbTime),
										r(
											"xhr",
											[t, n, this.startTime, this.endTime, "xhr"],
											this,
											a.K.ajax,
										));
								}
							}
							function T(e, r) {
								e.params.status = r.status;
								const n = ((e, t) => {
									const r = e.responseType;
									return "json" === r && null !== t
										? t
										: "arraybuffer" === r || "blob" === r || "json" === r
											? Z(e.response)
											: "text" === r || "" === r || void 0 === r
												? Z(e.responseText)
												: void 0;
								})(r, e.lastSize);
								if ((n && (e.metrics.rxSize = n), e.sameOrigin)) {
									const i = r.getResponseHeader("X-NewRelic-App-Data");
									i &&
										((0, S.p)(
											C.rs,
											["Ajax/CrossApplicationTracing/Header/Seen"],
											void 0,
											a.K.metrics,
											t,
										),
										(e.params.cat = i.split(", ").pop()));
								}
								e.loadCaptureCalled = !0;
							}
							t.on("new-xhr", i),
								t.on("open-xhr-start", o),
								t.on("open-xhr-end", c),
								t.on("send-xhr-start", u),
								t.on("xhr-cb-time", d),
								t.on("xhr-load-added", l),
								t.on("xhr-load-removed", f),
								t.on("xhr-resolved", h),
								t.on("addEventListener-end", p),
								t.on("removeEventListener-end", m),
								t.on("fn-end", b),
								t.on("fetch-before-start", y),
								t.on("fetch-start", w),
								t.on("fn-start", v),
								t.on("fetch-done", R);
						})(e, this.ee, this.handler, this.dt),
						this.importAggregator();
				}
			}
			function oe(e, t) {
				const r = (0, Y.D)(t);
				const n = e.params || e;
				(n.hostname = r.hostname),
					(n.port = r.port),
					(n.protocol = r.protocol),
					(n.host = `${r.hostname}:${r.port}`),
					(n.pathname = r.pathname),
					(e.parsedOrigin = r),
					(e.sameOrigin = r.sameOrigin);
			}
			const ae = i(3738);
			const {
				He: se,
				bD: ce,
				d3: ue,
				Kp: de,
				TZ: le,
				Lc: fe,
				uP: he,
				Rz: ge,
			} = ae;
			const pe = i(2614);
			class me extends b {
				static featureName = t.TZ;
				#i;
				constructor(e, r) {
					let n;
					const i =
							!(arguments.length > 2 && void 0 !== arguments[2]) ||
							arguments[2];
					super(e, r, t.TZ, i), (this.replayRunning = !1);
					try {
						n = JSON.parse(
							localStorage.getItem("".concat(pe.H3, "_").concat(pe.uh)),
						);
					} catch (e) {}
					(0, p.SR)(e) && this.ee.on(t.G4.RECORD, () => this.#o()),
						this.#a(n)
							? ((this.#i = n?.sessionReplayMode), this.#s())
							: this.importAggregator(),
						this.ee.on("err", (e) => {
							this.replayRunning &&
								((this.errorNoticed = !0),
								(0, S.p)(
									t.G4.ERROR_DURING_REPLAY,
									[e],
									void 0,
									this.featureName,
									this.ee,
								));
						}),
						this.ee.on(t.G4.REPLAY_RUNNING, (e) => {
							this.replayRunning = e;
						});
				}
				#a(e) {
					return (
						(e &&
							(e.sessionReplayMode === pe.g.FULL ||
								e.sessionReplayMode === pe.g.ERROR)) ||
						(0, p.Aw)(this.agentIdentifier)
					);
				}
				#c = !1;
				async #s(e) {
					if (!this.#c) {
						this.#c = !0;
						try {
							const { Recorder: t } = await Promise.all([
								i.e(478),
								i.e(249),
							]).then(i.bind(i, 2496));
							(this.recorder ??= new t({
								mode: this.#i,
								agentIdentifier: this.agentIdentifier,
								trigger: e,
								ee: this.ee,
							})),
								this.recorder.startRecording(),
								(this.abortHandler = this.recorder.stopRecording);
						} catch (e) {}
						this.importAggregator({
							recorder: this.recorder,
							errorNoticed: this.errorNoticed,
						});
					}
				}
				#o() {
					this.featAggregate
						? this.featAggregate.mode !== pe.g.FULL &&
							this.featAggregate.initializeRecording(pe.g.FULL, !0)
						: ((this.#i = pe.g.FULL),
							this.#s(t.Qb.API),
							this.recorder &&
								this.recorder.parent.mode !== pe.g.FULL &&
								((this.recorder.parent.mode = pe.g.FULL),
								this.recorder.stopRecording(),
								this.recorder.startRecording(),
								(this.abortHandler = this.recorder.stopRecording)));
				}
			}
			const ve = i(3962);
			class be extends b {
				static featureName = ve.TZ;
				constructor(e, t) {
					const r =
						!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					if ((super(e, t, ve.TZ, r), !g.RI || !s.hR.MO)) return;
					const n = (0, q.vC)(this.ee);
					const i = (0, q.um)(this.ee);
					const o = () =>
							(0, S.p)(
								"newURL",
								[(0, j.t)(), `${window.location}`],
								void 0,
								this.featureName,
								this.ee,
							);
					n.on("pushState-end", o), n.on("replaceState-end", o);
					try {
						this.removeOnAbort = new AbortController();
					} catch (e) {}
					(0, I.sp)(
						"popstate",
						(e) =>
							(0, S.p)(
								"newURL",
								[e.timeStamp, `${window.location}`],
								void 0,
								this.featureName,
								this.ee,
							),
						!0,
						this.removeOnAbort?.signal,
					);
					let a = !1;
					const c = new s.hR.MO((e, t) => {
							a ||
								((a = !0),
								requestAnimationFrame(() => {
									(0, S.p)(
										"newDom",
										[(0, j.t)()],
										void 0,
										this.featureName,
										this.ee,
									),
										(a = !1);
								}));
						});
					const u = (0, v.s)(
							(e) => {
								(0, S.p)("newUIEvent", [e], void 0, this.featureName, this.ee),
									c.observe(document.body, {
										attributes: !0,
										childList: !0,
										subtree: !0,
										characterData: !0,
									});
							},
							100,
							{ leading: !0 },
						);
					i.on("fn-start", (e) => {
						const [t] = e;
						ve.tC.includes(t?.type) && u(t);
					});
					for (const e of ve.tC) document.addEventListener(e, () => {});
					(this.abortHandler = function () {
						this.removeOnAbort?.abort(),
							c.disconnect(),
							(this.abortHandler = void 0);
					}),
						this.importAggregator({ domObserver: c });
				}
			}
			const ye = i(7378);
			const {
				TZ: we,
				d3: Re,
				Kp: xe,
				$p: Te,
				wW: Ae,
				e5: Ee,
				tH: Ne,
				uP: Se,
				rw: Oe,
				Lc: Ie,
			} = ye;
			const _e = i(8166);
			class je extends b {
				static featureName = _e.T;
				constructor(e, t) {
					const r =
						!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					super(e, t, _e.T, r), this.importAggregator();
				}
			}
			const Pe = i(993);
			const Ce = i(3785);
			class ke extends b {
				static featureName = Pe.TZ;
				constructor(e, t) {
					const r =
						!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					super(e, t, Pe.TZ, r);
					const n = this.ee;
					this.ee.on("wrap-logger-end", function (e) {
						const [t] = e;
						const { level: r, customAttributes: i } = this;
						(0, Ce.R)(n, t, i, r);
					}),
						this.importAggregator();
				}
			}
			new (class extends o {
				constructor(t, r) {
					super(r),
						g.gm
							? ((this.sharedAggregator = new T({
									agentIdentifier: this.agentIdentifier,
								})),
								(this.features = {}),
								(0, N.bQ)(this.agentIdentifier, this),
								(this.desiredFeatures = new Set(t.features || [])),
								this.desiredFeatures.add(w),
								(this.runSoftNavOverSpa = [...this.desiredFeatures].some(
									(e) => e.featureName === a.K.softNav,
								)),
								(0, d.j)(this, t, t.loaderType || "agent"),
								this.run())
							: (0, e.R)(21);
				}
				get config() {
					return {
						info: this.info,
						init: this.init,
						loader_config: this.loader_config,
						runtime: this.runtime,
					};
				}
				run() {
					try {
						const t = u(this.agentIdentifier);
						const r = [...this.desiredFeatures];
						r.sort((e, t) => a.P[e.featureName] - a.P[t.featureName]),
							r.forEach((r) => {
								if (!t[r.featureName] && r.featureName !== a.K.pageViewEvent)
									return;
								if (this.runSoftNavOverSpa && r.featureName === a.K.spa) return;
								if (!this.runSoftNavOverSpa && r.featureName === a.K.softNav)
									return;
								((e) => {
									switch (e) {
										case a.K.ajax:
											return [a.K.jserrors];
										case a.K.sessionTrace:
											return [a.K.ajax, a.K.pageViewEvent];
										case a.K.sessionReplay:
											return [a.K.sessionTrace];
										case a.K.pageViewTiming:
											return [a.K.pageViewEvent];
										default:
											return [];
									}
								})(r.featureName).every((e) => e in this.features) ||
									(0, e.R)(36, r.featureName),
									(this.features[r.featureName] = new r(
										this.agentIdentifier,
										this.sharedAggregator,
									));
							});
					} catch (t) {
						(0, e.R)(22, t);
						for (const e in this.features) this.features[e].abortHandler?.();
						const r = (0, N.Zm)();
						delete r.initializedAgents[this.agentIdentifier]?.api,
							delete r.initializedAgents[this.agentIdentifier]?.features,
							this.sharedAggregator = undefined;
						return r.ee.get(this.agentIdentifier).abort(), !1;
					}
				}
			})({
				features: [
					ie,
					w,
					P,
					class extends b {
						static featureName = le;
						constructor(e, t) {
							super(
								e,
								t,
								le,
								!(arguments.length > 2 && void 0 !== arguments[2]) ||
									arguments[2],
							);
							if (!(0, m.V)(this.agentIdentifier))
								return void (0, l.x3)(this.agentIdentifier, this.featureName);
							const r = this.ee;
							let n;
							(0, q.vC)(r),
								(this.eventsEE = (0, q.um)(r)),
								this.eventsEE.on(he, function (e, t) {
									this.bstStart = (0, j.t)();
								}),
								this.eventsEE.on(fe, function (e, t) {
									(0, S.p)(
										"bst",
										[e[0], t, this.bstStart, (0, j.t)()],
										void 0,
										a.K.sessionTrace,
										r,
									);
								}),
								r.on(ge + ue, function (e) {
									(this.time = (0, j.t)()),
										(this.startPath = location.pathname + location.hash);
								}),
								r.on(ge + de, function (e) {
									(0, S.p)(
										"bstHist",
										[
											location.pathname + location.hash,
											this.startPath,
											this.time,
										],
										void 0,
										a.K.sessionTrace,
										r,
									);
								});
							try {
								(n = new PerformanceObserver((e) => {
									const t = e.getEntries();
									(0, S.p)(se, [t], void 0, a.K.sessionTrace, r);
								})),
									n.observe({ type: ce, buffered: !0 });
							} catch (e) {}
							this.importAggregator({ resourceObserver: n });
						}
					},
					me,
					k,
					je,
					G,
					ke,
					be,
					class extends b {
						static featureName = we;
						constructor(e, t) {
							let r;
							if (
								(super(
									e,
									t,
									we,
									!(arguments.length > 2 && void 0 !== arguments[2]) ||
										arguments[2],
								),
								(r = this),
								!g.RI)
							)
								return;
							try {
								this.removeOnAbort = new AbortController();
							} catch (e) {}
							let n;
							let i = 0;
							const o = this.ee.get("tracer");
							const a = (0, q.Ri)(this.ee);
							const s = (0, q.o8)(this.ee);
							const c = (0, q.MO)(this.ee);
							const u = (0, q.bX)(this.ee);
							const d = this.ee.get("events");
							const l = (0, q.NZ)(this.ee);
							const f = (0, q.vC)(this.ee);
							const h = (0, q.Ak)(this.ee);
							function p(e, t) {
								f.emit("newURL", [`${window.location}`, t]);
							}
							function m() {
								i++, (n = window.location.hash), (this[Se] = (0, j.t)());
							}
							function v() {
								i--, window.location.hash !== n && p(0, !0);
								const e = (0, j.t)();
								(this[Ee] = ~~this[Ee] + e - this[Se]), (this[Ie] = e);
							}
							function b(e, t) {
								e.on(t, function () {
									this[t] = (0, j.t)();
								});
							}
							this.ee.on(Se, m),
								s.on(Oe, m),
								a.on(Oe, m),
								this.ee.on(Ie, v),
								s.on(Ae, v),
								a.on(Ae, v),
								this.ee.on("fn-err", () => {
									for (
										let t = arguments.length, n = new Array(t), i = 0;
										i < t;
										i++
									)
										n[i] = arguments[i];
									n[2]?.__newrelic?.[e] ||
										(0, S.p)(
											"function-err",
											[...n],
											void 0,
											r.featureName,
											r.ee,
										);
								}),
								this.ee.buffer([Se, Ie, "xhr-resolved"], this.featureName),
								d.buffer([Se], this.featureName),
								c.buffer(
									[`setTimeout${xe}`, `clearTimeout${Re}`, Se],
									this.featureName,
								),
								u.buffer([Se, "new-xhr", `send-xhr${Re}`], this.featureName),
								l.buffer(
									[Ne + Re, `${Ne}-done`, Ne + Te + Re, Ne + Te + xe],
									this.featureName,
								),
								f.buffer(["newURL"], this.featureName),
								h.buffer([Se], this.featureName),
								s.buffer(
									["propagate", Oe, Ae, "executor-err", `resolve${Re}`],
									this.featureName,
								),
								o.buffer([Se, `no-${Se}`], this.featureName),
								a.buffer(
									["new-jsonp", "cb-start", "jsonp-error", "jsonp-end"],
									this.featureName,
								),
								b(l, Ne + Re),
								b(l, `${Ne}-done`),
								b(a, "new-jsonp"),
								b(a, "jsonp-end"),
								b(a, "cb-start"),
								f.on("pushState-end", p),
								f.on("replaceState-end", p),
								window.addEventListener(
									"hashchange",
									p,
									(0, I.jT)(!0, this.removeOnAbort?.signal),
								),
								window.addEventListener(
									"load",
									p,
									(0, I.jT)(!0, this.removeOnAbort?.signal),
								),
								window.addEventListener(
									"popstate",
									() => {
										p(0, i > 1);
									},
									(0, I.jT)(!0, this.removeOnAbort?.signal),
								),
								(this.abortHandler = this.#n),
								this.importAggregator();
						}
						#n() {
							this.removeOnAbort?.abort(), (this.abortHandler = void 0);
						}
					},
				],
				loaderType: "spa",
			});
		})();
})();
