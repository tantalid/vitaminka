!function (e) {
    let t = 0;
    const n = ["ms", "moz", "webkit", "o"];
    for (let t = 0; t < n.length && !e.requestAnimationFrame; ++t) e.requestAnimationFrame = e[`${n[t]}RequestAnimationFrame`], e.cancelAnimationFrame = e[`${n[t]}CancelAnimationFrame`] || e[`${n[t]}CancelRequestAnimationFrame`];
    var o;
    if (e.requestAnimationFrame || (e.requestAnimationFrame = function (n, o) {
        const i = (new Date).getTime(), r = Math.max(0, 16 - (i - t)), s = e.setTimeout(() => {
            n(i + r)
        }, r);
        return t = i + r, s
    }), e.cancelAnimationFrame || (e.cancelAnimationFrame = function (e) {
        clearTimeout(e)
    }), (o = Element.prototype).matches = o.matches || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector, o.closest = o.closest || function (e) {
        return this ? this.matches(e) ? this : this.parentElement ? this.parentElement.closest(e) : null : null
    }, Array.prototype.includes || (Array.prototype.includes = function (e) {
        "use strict";
        const t = Object(this), n = parseInt(t.length, 10) || 0;
        if (0 === n) return !1;
        const o = parseInt(arguments[1], 10) || 0;
        let i;
        for (o >= 0 ? i = o : (i = n + o, i < 0 && (i = 0)); i < n;) {
            const n = t[i];
            if (e === n || e != e && n != n) return !0;
            i++
        }
        return !1
    }), Object.values || Object.defineProperty(Object, "values", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: e => "string" == typeof e ? e.split("") : Array.isArray(e) ? e : "object" != typeof e ? [] : Object.keys(e).map(t => e[t])
    }), Object.entries || (Object.entries = function (e) {
        const t = [];
        for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push([n, e[n]]);
        return t
    }), "function" != typeof e.CustomEvent) {
        function i(e, t) {
            t = t || {bubbles: !1, cancelable: !1, detail: void 0};
            const n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }

        i.prototype = e.Event.prototype, e.CustomEvent = i
    }
    /*! svg4everybody v2.0.3 | github.com/jonathantneal/svg4everybody */
    e.svg4everybody = function () {
        function t(e, t) {
            if (t) {
                let n = document.createDocumentFragment(), o = t.getAttribute("viewBox");
                e.setAttribute("viewBox", o);
                for (let e = t.cloneNode(!0); e.childNodes.length;) n.appendChild(e.firstChild);
                e.appendChild(n)
            }
        }

        function n(e) {
            e.onreadystatechange = function () {
                if (4 === e.readyState) {
                    let n = e._cachedDocument;
                    n || (n = e._cachedDocument = document.implementation.createHTMLDocument(""), n.body.innerHTML = e.responseText, e._cachedTarget = {}), e._embeds.splice(0).map(o => {
                        let i = e._cachedTarget[o.id];
                        i || (i = e._cachedTarget[o.id] = n.getElementById(o.id)), t(o.svg, i)
                    })
                }
            }, e.onreadystatechange()
        }

        return function (o) {
            var i, r = Object(o);
            i = "polyfill" in r ? r.polyfill : /\bTrident\/[5-7]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || /\bEdge\/(\d+)\.(\d+)\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bAp{2}leWebKit\/(\d+)\b/) || [])[1] < 537;
            var s = {}, c = e.requestAnimationFrame || setTimeout, a = document.getElementsByTagName("use");
            i && function e() {
                for (let e = 0; e < a.length;) {
                    let o = a[e], c = o.parentNode;
                    if (c && /svg/i.test(c.nodeName)) {
                        const e = o.getAttribute("xlink:href");
                        if (i && (!r.validate || r.validate(e, c, o))) {
                            c.removeChild(o);
                            let i = e.split("#"), r = i.shift(), a = i.join("#");
                            if (r.length) {
                                let e = s[r];
                                e || (e = s[r] = new XMLHttpRequest, e.open("GET", r), e.send(), e._embeds = []), e._embeds.push({
                                    svg: c,
                                    id: a
                                }), n(e)
                            } else t(c, document.getElementById(a))
                        }
                    } else ++e
                }
                c(e, 67)
            }()
        }
    }()
}(window), function (e) {
    const t = [], n = "ResizeObserver loop completed with undelivered notifications.";
    let o;
    !function (e) {
        e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
    }(o || (o = {}));
    const i = function () {
            function e(e, t, n, o) {
                return this.x = e, this.y = t, this.width = n, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Object.freeze(this)
            }

            return e.prototype.toJSON = function () {
                let e = this;
                return {
                    x: e.x,
                    y: e.y,
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom,
                    left: e.left,
                    width: e.width,
                    height: e.height
                }
            }, e.fromRect = function (t) {
                return new e(t.x, t.y, t.width, t.height)
            }, e
        }(), r = function (e) {
            return e instanceof SVGElement && "getBBox" in e
        }, s = function (e) {
            if (r(e)) {
                let t = e.getBBox(), n = t.width, o = t.height;
                return !n && !o
            }
            let t = e, n = t.offsetWidth, o = t.offsetHeight;
            return !(n || o || e.getClientRects().length)
        }, c = function (e) {
            let t, n;
            const o = null === (n = null === (t = e) || void 0 === t ? void 0 : t.ownerDocument) || void 0 === n ? void 0 : n.defaultView;
            return !!(o && e instanceof o.Element)
        }, a = void 0 !== e ? e : {}, u = new Map, l = /auto|scroll/, h = /^tb|vertical/,
        d = /msie|trident/i.test(a.navigator && a.navigator.userAgent), f = function (e) {
            return parseFloat(e || "0")
        }, p = function (e, t, n) {
            return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = !1), Object.freeze({
                inlineSize: (n ? t : e) || 0,
                blockSize: (n ? e : t) || 0
            })
        }, b = Object.freeze({
            devicePixelContentBoxSize: p(),
            borderBoxSize: p(),
            contentBoxSize: p(),
            contentRect: new i(0, 0, 0, 0)
        }), v = function (e) {
            if (u.has(e)) return u.get(e);
            if (s(e)) return u.set(e, b), b;
            const t = getComputedStyle(e), n = r(e) && e.ownerSVGElement && e.getBBox(),
                o = !d && "border-box" === t.boxSizing, c = h.test(t.writingMode || ""),
                a = !n && l.test(t.overflowY || ""), v = !n && l.test(t.overflowX || ""), g = n ? 0 : f(t.paddingTop),
                m = n ? 0 : f(t.paddingRight), y = n ? 0 : f(t.paddingBottom), E = n ? 0 : f(t.paddingLeft),
                w = n ? 0 : f(t.borderTopWidth), T = n ? 0 : f(t.borderRightWidth), x = n ? 0 : f(t.borderBottomWidth),
                z = E + m, O = g + y, S = (n ? 0 : f(t.borderLeftWidth)) + T, B = w + x,
                R = v ? e.offsetHeight - B - e.clientHeight : 0, A = a ? e.offsetWidth - S - e.clientWidth : 0,
                C = o ? z + S : 0, F = o ? O + B : 0, M = n ? n.width : f(t.width) - C - A,
                N = n ? n.height : f(t.height) - F - R, k = M + z + A + S, _ = N + O + R + B, D = Object.freeze({
                    devicePixelContentBoxSize: p(Math.round(M * devicePixelRatio), Math.round(N * devicePixelRatio), c),
                    borderBoxSize: p(k, _, c),
                    contentBoxSize: p(M, N, c),
                    contentRect: new i(E, g, M, N)
                });
            return u.set(e, D), D
        }, g = function (e, t) {
            let n = v(e), i = n.borderBoxSize, r = n.contentBoxSize, s = n.devicePixelContentBoxSize;
            switch (t) {
                case o.DEVICE_PIXEL_CONTENT_BOX:
                    return s;
                case o.BORDER_BOX:
                    return i;
                default:
                    return r
            }
        }, m = function (e) {
            const t = v(e);
            this.target = e, this.contentRect = t.contentRect, this.borderBoxSize = [t.borderBoxSize], this.contentBoxSize = [t.contentBoxSize], this.devicePixelContentBoxSize = [t.devicePixelContentBoxSize]
        }, y = function (e) {
            if (s(e)) return 1 / 0;
            let t = 0, n = e.parentNode;
            for (; n;) t += 1, n = n.parentNode;
            return t
        }, E = function () {
            let e = 1 / 0;
            const n = [];
            t.forEach(t => {
                if (0 === t.activeTargets.length) return;
                const o = [];
                t.activeTargets.forEach(t => {
                    const n = new m(t.target), i = y(t.target);
                    o.push(n), t.lastReportedSize = g(t.target, t.observedBox), i < e && (e = i)
                }), n.push(() => {
                    t.callback.call(t.observer, o, t.observer)
                }), t.activeTargets.splice(0, t.activeTargets.length)
            });
            for (let e = 0, t = n; e < t.length; e++) {
                (0, t[e])()
            }
            return e
        }, w = function (e) {
            u.clear(), t.forEach(t => {
                t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(n => {
                    n.isActive() && (y(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n))
                })
            })
        }, T = function () {
            let o = 0;
            for (w(o); t.some(e => e.activeTargets.length > 0);) o = E(), w(o);
            return t.some(e => e.skippedTargets.length > 0) && function () {
                let t;
                "function" == typeof ErrorEvent ? t = new ErrorEvent("error", {message: n}) : (t = document.createEvent("Event"), t.initEvent("error", !1, !1), t.message = n), e.dispatchEvent(t)
            }(), o > 0
        };
    let x;
    const z = [], O = function (e) {
        if (!x) {
            const e = document.createTextNode(""), t = {characterData: !0};
            new MutationObserver(() => z.splice(0).forEach(e => e())).observe(e, t), x = function () {
                e.textContent = ""
            }
        }
        z.push(e), x()
    };
    let S = 0;
    const B = {attributes: !0, characterData: !0, childList: !0, subtree: !0},
        R = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"];
    let A = !1;
    const C = new (function () {
        function e() {
            const e = this;
            this.stopped = !0, this.listener = function () {
                return e.schedule()
            }
        }

        return e.prototype.run = function (e) {
            const t = this;
            var n;
            A || (A = !0, n = () => {
                let n = !1;
                try {
                    n = T()
                } finally {
                    if (A = !1, !S) return;
                    n ? t.run(60) : e ? t.run(e - 1) : t.start()
                }
            }, O(() => {
                requestAnimationFrame(n)
            }))
        }, e.prototype.schedule = function () {
            this.stop(), this.run(12)
        }, e.prototype.observe = function () {
            const e = this, t = function () {
                return e.observer && e.observer.observe(document.body, B)
            };
            document.body ? t() : a.addEventListener("DOMContentLoaded", t)
        }, e.prototype.start = function () {
            const e = this;
            this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), R.forEach(t => a.addEventListener(t, e.listener, !0)))
        }, e.prototype.stop = function () {
            const e = this;
            this.stopped || (this.observer && this.observer.disconnect(), R.forEach(t => a.removeEventListener(t, e.listener, !0)), this.stopped = !0)
        }, e
    }()), F = function (e) {
        !S && e > 0 && C.start(), S += e, !S && C.stop()
    }, M = function () {
        function e(e, t) {
            this.target = e, this.observedBox = t || o.CONTENT_BOX, this.lastReportedSize = {
                inlineSize: 0,
                blockSize: 0
            }
        }

        return e.prototype.isActive = function () {
            const e = g(this.target, this.observedBox);
            var t;
            return t = this.target, r(t) || function (e) {
                switch (e.tagName) {
                    case"INPUT":
                        if ("image" !== e.type) break;
                    case"VIDEO":
                    case"AUDIO":
                    case"EMBED":
                    case"OBJECT":
                    case"CANVAS":
                    case"IFRAME":
                    case"IMG":
                        return !0
                }
                return !1
            }(t) || "inline" !== getComputedStyle(t).display || (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize
        }, e
    }(), N = function (e, t) {
        this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = t
    }, k = new Map, _ = function (e, t) {
        for (let n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
        return -1
    }, D = function () {
        function e() {
        }

        return e.connect = function (e, n) {
            const o = new N(e, n);
            t.push(o), k.set(e, o)
        }, e.observe = function (e, t, n) {
            if (k.has(e)) {
                const o = k.get(e);
                _(o.observationTargets, t) < 0 && (o.observationTargets.push(new M(t, n && n.box)), F(1), C.schedule())
            }
        }, e.unobserve = function (e, t) {
            if (k.has(e)) {
                const n = k.get(e), o = _(n.observationTargets, t);
                o >= 0 && (n.observationTargets.splice(o, 1), F(-1))
            }
        }, e.disconnect = function (e) {
            if (k.has(e)) {
                const n = k.get(e);
                t.splice(t.indexOf(n), 1), k.delete(e), F(-n.observationTargets.length)
            }
        }, e
    }(), j = function () {
        function e(e) {
            if (0 === arguments.length) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
            if ("function" != typeof e) throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
            D.connect(this, e)
        }

        return e.prototype.observe = function (e, t) {
            if (0 === arguments.length) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
            if (!c(e)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
            D.observe(this, e, t)
        }, e.prototype.unobserve = function (e) {
            if (0 === arguments.length) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
            if (!c(e)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
            D.unobserve(this, e)
        }, e.prototype.disconnect = function () {
            D.disconnect(this)
        }, e.toString = function () {
            return "function ResizeObserver () { [polyfill code] }"
        }, e
    }();
    "ResizeObserver" in e && "ResizeObserverEntry" in e || (e.ResizeObserver = j, e.ResizeObserverEntry = m)
}(window);
!function (e) {
    function n(e) {
        e.preventDefault()
    }

    e.videoImgFallback = function (e) {
        console.warn("video load error, gif fallback used");
        const n = e.querySelector("img");
        n && e.parentNode.replaceChild(n, e)
    }, e.getCookie = function (e) {
        const n = document.cookie.match(new RegExp(`(?:^|; )${e.replace(/([$()*+./?[\\\]^{|}])/g, "\\$1")}=([^;]*)`));
        return n ? decodeURIComponent(n[1]) : void 0
    }, e.setCookie = function (e, n, t = {}) {
        let o = t.expires;
        if ("number" == typeof o && o) {
            const e = new Date;
            e.setTime(e.getTime() + 1e3 * o), o = t.expires = e
        }
        o && o.toUTCString && (t.expires = o.toUTCString());
        let r = `${e}=${n = encodeURIComponent(n)}`;
        for (const e in t) {
            r += `; ${e}`;
            const n = t[e];
            !0 !== n && (r += `=${n}`)
        }
        document.cookie = r
    }, e.deleteCookie = function (e) {
        setCookie(e, "", {expires: -1})
    }, e.getJsonFromUrl = function (e) {
        let n;
        if (e) {
            const e = location.href.indexOf("?");
            if (-1 === e) return [];
            n = location.href.substr(e + 1)
        } else n = location.search.substr(1);
        const t = {};
        return n.split("&").forEach(e => {
            if (!e) return;
            const n = (e = e.split("+").join(" ")).indexOf("=");
            let o = n > -1 ? e.substr(0, n) : e;
            const r = n > -1 ? decodeURIComponent(e.substr(n + 1)) : "", i = o.indexOf("[");
            if (-1 === i) t[decodeURIComponent(o)] = r; else {
                const e = o.indexOf("]", i), n = decodeURIComponent(o.substring(i + 1, e));
                o = decodeURIComponent(o.substring(0, i)), t[o] || (t[o] = []), n ? t[o][n] = r : t[o].push(r)
            }
        }), t
    }, e.chunkSplit = function (e, n = 3, t = " ") {
        return (e += "").split("").reverse().join("").match(new RegExp(`.{0,${n}}`, "g")).join(t).split("").reverse().join("").trim()
    }, e.preventBodyScrolling = function (e = !1) {
        document.body[!0 === e ? "addEventListener" : "removeEventListener"]("touchmove", n, !1)
    }, e.scrollParent = function () {
        const e = /(auto|scroll)/, n = function (e, t) {
            return null === e.parentNode ? t : n(e.parentNode, t.concat([e]))
        }, t = function (e, n) {
            return getComputedStyle(e, null).getPropertyValue(n)
        }, o = function (n, o) {
            return e.test(function (e, n) {
                return t(e, n ? `overflow-${n}` : "overflow")
            }(n, o))
        };
        return function (e, t) {
            if (!(e instanceof HTMLElement || e instanceof SVGElement)) return;
            const r = n(e.parentNode, []);
            for (let e = 0; e < r.length; e += 1) if (o(r[e], t)) return r[e];
            return document.scrollingElement || document.documentElement
        }
    }()
}(window);
!function () {
    if (window.parent === window) {
        if (/mode=/.test(location.search)) {
            const e = location.href.replace(/mode=\w+/, "").replace(/\?&/, "?").replace(/\?$/, "");
            history.replaceState(null, null, e)
        }
    } else /is_view=/.test(location.search) && window.parent.history.replaceState(null, null, location.href.replace(location.search, ""));

    function e() {
        flexbe_cli.lockPopstate || (flexbe_cli.lockPopstate = !0, /^#/.test(location.hash) ? flexbe_cli.helpers.gotoLink(location.hash) : Object.keys(flexbe_cli.modal.opened).length && flexbe_cli.events.emit("ui_modal_close"), flexbe_cli.lockPopstate = !1)
    }

    void 0 === window.flexbe_cli && (window.flexbe_cli = {}), window.spaced_cli = window.flexbe_cli, flexbe_cli._init = function () {
        function l() {
            if (!flexbe_cli.isInited) if ("undefined" != typeof jQuery) {
                flexbe_cli.init(), flexbe_cli.isInited = !0;
                try {
                    document.body.classList.add(ready)
                } catch (e) {
                    document.body.className += " ready"
                }
                flexbe_cli.run.is_screenshoter || (e(), setTimeout(() => e(), 1e3), window.addEventListener("popstate", e)), svg4everybody({polyfill: !flexbe_cli.is_admin && (flexbe_cli.run.is_ie || flexbe_cli.run.is_EDGE)})
            } else setTimeout(l, 10)
        }

        ["complete", "loaded"].includes(document.readyState) ? l() : document.addEventListener("DOMContentLoaded", () => {
            l()
        }), window.addEventListener("load", () => {
            l(), flexbe_cli.isLoaded = !0
        })
    }
}();
$.observable = function (t) {
    const i = {
        _JQInit() {
            this._JQ = $({})
        }, emit(t, i) {
            return !this._JQ && this._JQInit(), this._JQ.trigger(t, i), this
        }, one(t, i) {
            return !this._JQ && this._JQInit(), this._JQ.one(t, i), this
        }, on(t, i) {
            return !this._JQ && this._JQInit(), this._JQ.on(t, i), this
        }, off(t, i) {
            return !this._JQ && this._JQInit(), this._JQ.off(t, i), this
        }
    };
    return "object" != typeof t && (t = this), Object.keys(i).forEach(s => {
        t[s] = i[s].bind(t)
    }), i
}, flexbe_cli.events = $.observable({});
flexbe_cli.vars = {
    init() {
        const e = document.getElementById("flexbe-globals");
        try {
            const t = JSON.parse(e.getAttribute("data-store"));
            Object.assign(this, t), e.parentNode.removeChild(e)
        } catch (e) {
        }
    }
};
!function () {
    function i(i, s) {
        let e = ["screen"];
        return null != i && e.push(`(min-width: ${i}px)`), null != s && e.push(`(max-width: ${s}px)`), e = e.join(" and "), window.matchMedia(e).matches
    }

    flexbe_cli.run = {
        init() {
            this.deviceInfo(), this.applyClasses(), $(window).on("resized.deviceInfo", () => {
                this.deviceInfo(), this.applyClasses()
            })
        }, deviceInfo() {
            const s = navigator.userAgent.toLowerCase();
            this.is_screen_mobile_small = i(null, 350), this.is_screen_mobile_all = i(null, 767), this.is_screen_tablet = i(768, 1024), this.is_screen_tablet_all = i(768, 1199), this.is_screen_desktop_small = i(980, 1199), this.is_screen_desktop_all = i(1200), this.is_touch = "ontouchstart" in window || window.matchMedia("(any-pointer: coarse)").matches, this.is_pointer = window.matchMedia("(any-hover: hover)").matches, this.is_tablet = /ipad|xoom|kindle|playbook|tablet/i.test(s) || this.is_screen_tablet, this.is_mobile = !this.is_tablet && -1 !== s.indexOf("mobile") || this.is_screen_mobile_all, this.is_desktop = !this.is_mobile && !this.is_tablet, this.is_webkit = -1 !== s.indexOf("webkit"), this.is_chrome = /(chromium|chrome)\/(\d+)/.test(s), this.is_safari = -1 !== s.indexOf("safari") && !!s.match(/version\/(\d+)/), this.is_firefox = -1 !== s.indexOf("firefox"), this.is_mobile_ie = -1 !== s.indexOf("iemobile"), this.is_ie = -1 !== s.indexOf("trident") || -1 !== s.indexOf("msie"), this.is_EDGE = -1 !== s.indexOf("edge"), this.is_OSX = /iPad|iPhone|iPod|Macintosh/gi.test(s), this.is_android = -1 !== s.indexOf("android"), this.is_ios = this.is_OSX && this.is_touch && !this.is_desktop, this.is_bot = /bot|aolbuild|bingpreview|msnbot|baidu|duckduckgo|mediapartners-google|teoma|slurp/gi.test(s), this.is_screenshoter = s.indexOf("slimerjs") > -1 || s.indexOf("phantomjs") > -1, this.is_instagram = /instagram/i.test(s), this.is_mobile && this.is_touch ? this.device_type = "mobile" : this.is_tablet && this.is_touch ? this.device_type = "tablet" : this.device_type = "desktop"
        }, applyClasses() {
            const i = $(document.body);
            i.toggleClass("is-mobile", flexbe_cli.run.is_mobile), i.toggleClass("is-tablet", flexbe_cli.run.is_tablet), i.toggleClass("is-desktop", flexbe_cli.run.is_desktop), i.toggleClass("is-pointer", flexbe_cli.run.is_pointer), i.toggleClass("is-touch", flexbe_cli.run.is_touch), i.toggleClass("is-ios", flexbe_cli.run.is_ios), i.toggleClass("is-osx", flexbe_cli.run.is_OSX && flexbe_cli.run.is_desktop), i.toggleClass("is-android", flexbe_cli.run.is_android), i.toggleClass("is-safari", flexbe_cli.run.is_safari), i.toggleClass("is-edge", flexbe_cli.run.is_EDGE), i.toggleClass("is-firefox", flexbe_cli.run.is_firefox), i.toggleClass("is-chrome", flexbe_cli.run.is_chrome), i.toggleClass("is-instagram", flexbe_cli.run.is_instagram)
        }
    }
}();
flexbe_cli.lib = {
    init() {
        this.lg.init()
    }, lg: {
        init() {
            const t = ".lg-container, .b_block, .m_modal, .w_widget";
            let e;
            this.isOpen = !1, $(window).one("load.lightbox", () => {
                this.loaded || this.require()
            });
            let l = {};
            $(document).on("click.lightbox", "[data-lg]", t => {
                t.preventDefault()
            }), $(document).on("mousedown.lightbox", "[data-lg]", t => {
                if (flexbe_cli.is_admin) return !1;
                t.preventDefault(), e = t.target, l = {x: t.clientX, y: t.clientY}
            }), $(document).on("mouseup.lightbox", "[data-lg]", i => {
                const o = e === i.target, s = Math.sqrt((l.x - i.clientX) ** 2 + (l.y - i.clientY) ** 2) < 5;
                if (!o || !s) return;
                const a = $(i.currentTarget), n = a.closest(t), r = a.attr("href"),
                    c = 1 == a.closest("[data-loop]").attr("data-loop"), d = !n.attr("data-lg-single"),
                    g = n.find("[data-lg]").filter((e, l) => {
                        const i = $(l).closest(t), o = i.is(n), s = i.closest(".swiper-slide-duplicate").length;
                        return o && !s
                    }).toArray().map(t => {
                        let e;
                        const l = $(t), i = l.attr("href"), o = l.attr("data-sub-html");
                        return e = o ? l.find(o).html() : l.attr("alt") || l.find("img").attr("alt") || "", c && l.closest("[data-cloned]").length ? null : {
                            src: i,
                            subHtml: e
                        }
                    }).filter(t => t), h = g.findIndex(t => t.src === r) || 0;
                this.openGallery({index: h, dynamicEl: g, enableSlide: d, loop: c})
            }), $(window).on("popstate.lightbox", () => {
                const t = history.state || {};
                t.lg ? this.openGallery(t.lg) : this.closeGallery()
            }), history.state && history.state.lg && this.openGallery(history.state.lg)
        }, openGallery(t = {}) {
            if (0 === t.dynamicEl.length) return;
            this.$lg = $("<div/>");
            const e = this.$lg, l = Object.assign({
                index: 0,
                dynamicEl: [],
                dynamic: !0,
                subHtmlSelectorRelative: !0,
                getCaptionFromTitleOrAlt: !0,
                slideEndAnimation: !1,
                swipeThreshold: 30,
                counter: !0,
                closable: !0,
                download: !1,
                easing: "ease-out",
                hideBarsDelay: 1e3,
                zoomIcons: !1,
                actualSize: !1,
                enableSlide: !0,
                loop: !0
            }, t);

            function i() {
                const t = history.state, e = l;
                flexbe_cli.lockPopstate = !0, t && t.lg ? history.replaceState({lg: e}, null, `#image-${e.index + 1}`) : history.pushState({lg: e}, null, `#image-${e.index + 1}`), flexbe_cli.lockPopstate = !1
            }

            l.index <= 0 && (l.index = 0), this.require(() => {
                e.lightGallery(l)
            }), e.on("onBeforeOpen.lg", () => {
                this.isOpen = !0, i()
            }), e.on("onBeforeClose.lg", () => {
                history.state && history.state.lg && (flexbe_cli.lockPopstate = !0, history.back(), setTimeout(() => {
                    flexbe_cli.lockPopstate = !1
                }, 20)), this.isOpen = !1
            }), e.on("onBeforeSlide.lg", (t, e, o) => {
                l.index = o, i()
            })
        }, closeGallery() {
            const t = this.$lg && this.$lg.data("lightGallery");
            t && t.destroy()
        }, require(t) {
            $("[data-lg]").length && flexbe_cli.require(["assets/lightgallery.min.css", "assets/lg-spaced-bundle.min.js"], () => {
                this.loaded || (this.loaded = !0, $(document).off("click.beforeLoadedLg")), "function" == typeof t && t()
            })
        }
    }
};
flexbe_cli.helpers = {
    setHref(e, t = !1) {
        const i = window.parent || window;
        if (!e) return console.warn("WRONG ACTION", "empty_link"), void (flexbe_cli.is_admin && flexbe_cli.events.emit("editor_page_error", {
            type: "action",
            error: "link_is_wrong"
        }));
        flexbe_cli.is_admin ? flexbe_cli.events.emit("editor_leave_page", {href: e}) : i.location.host === window.location.host ? t ? i.open(e, "_blank") : i.location.href = e : location.href = e
    }, gotoLink(e = "", t = !1) {
        if ("string" != typeof e) return !1;
        if (!/#{1,2}.+/.test(e)) return this.setHref(e, t), !0;
        {
            flexbe_cli.events.emit("ui_mobilemenu_close"), 4 !== flexbe_cli.theme_id && $(".mobile-menu").removeClass("active").trigger("close");
            const t = (e = e.replace(/^(?:\.\/)#{2}/, "#").trim()).trim().split("#"), i = t[t.length - 1];
            if ("" !== t[0] && "./" !== t[0] && t[0] !== location.pathname) return this.setHref(e), !0;
            const l = $(`._anchor[name="${i}"]`), n = l.length ? l.closest("[data-id]") : $(`[data-id="${i}"]`),
                o = n.closest(".b_block"), r = n.closest(".m_modal");
            if ("cart" === i) flexbe_cli.events.emit("ui_modal_close"), flexbe_cli.events.emit("ui_cart_open"); else if (o.length) this.bringIntoView(l.length ? l : n), flexbe_cli.events.emit("ui_cart_close"), flexbe_cli.events.emit("ui_modal_close"), setTimeout(() => {
                let e = o;
                if (n && !o.is(n)) {
                    const t = o.offset().top;
                    n.offset().top - t > flexbe_cli.resize.viewportHeight - 100 && (e = n)
                }
                flexbe_cli.scroll.scrollTo(e)
            }, 30), history.replaceState(null, null, `#${i}`); else if (r.length) {
                const e = r.data("id");
                this.bringIntoView(l.length ? l : n), flexbe_cli.events.emit("ui_cart_close"), flexbe_cli.events.emit("ui_modal_open", {id: e})
            } else history.replaceState(null, null, `#${i}`), flexbe_cli.is_admin && flexbe_cli.events.emit("editor_page_error", {
                type: "action",
                error: "anchor_is_wrong"
            })
        }
    }, bringIntoView(e, t) {
        const i = $(e).eq(0);
        if (i.length && (t || i.is(":hidden"))) {
            const e = new Event("bringIntoView", {bubbles: !0, cancelable: !0});
            i[0].dispatchEvent(e)
        }
    }, getProductInfo(e, t = !1) {
        const i = $(e);
        let l = t ? {} : i.data("product");
        if (!1 === l) return !1;
        if ((null == l || "object" != typeof l || Array.isArray(l)) && (l = {}), "object" == typeof l && !l.strict) {
            let e;
            if (4 === flexbe_cli.theme_id ? (e = i.parents(".content-zone, .flexbe-card, .flexbe-column, .modal-content").last(), e.length || (e = i.parents("[data-item-id]").last())) : e = i.closest("[data-item-id], .modal-data").eq(0), l = Object.assign({}, l), l.count || (l.count = 1), t || !l.img) {
                const t = e => {
                    const t = e.find("[data-img-id]").filter((e, t) => !$(t).closest(".swiper-slide-duplicate").length).eq(0),
                        i = t.attr("data-img-id"), l = t.attr("data-img-name");
                    return !(!i || !l) && `assets/${i}_200/${l}`
                };
                l.img = t(e) || t(e.closest(".flexbe-row"))
            }
            if (t || !l.title) {
                let t = e.find(".name, .title, .item-title, .text_title, .element-text--title, .text-style-title:not(.text-rotator), .text-style-subtitle:not(.text-rotator)").eq(0);
                t.length || (t = e.find(".text-style-content").eq(0)), l.title = t.text().trim() || ""
            }
            if (t || !l.price && 0 !== l.price) {
                const t = e => {
                    const t = e.clone();
                    flexbe_cli.is_admin && t.find('[class^="editor"]').remove(), t.find(".text-rotator").remove(), t.find("del, s, strike").remove();
                    let i = String(t[0] && t[0].innerText || "").replace(/\n/g, "<br>").replace(/\.$/, "").replace(/\u00a0/g, " ");
                    return i = i.match(/(?:[0-9]?\D{0,2} ?)?(?:[1-9][ ,.]?[0-9]{0,3}[ ,.]?[0-9]{0,3})(?:[\.,][0-9]{1,2})?(?: ?\D)?/g) || [], i = i.find(e => e.includes(flexbe_cli.locale.currency.symbol)) || i[0] || "", i = i.match(/(\d+[., ]\d+|\d+)/g, ""), i = flexbe_cli.locale.parseMoney(i), i
                };
                l.price = t(i.closest(".element-item").find(".price, .item-price, .main-price, .element-text--price").eq(0)) || t(i) || t(e.find(".price, .item-price, .main-price, .element-text--price").eq(0)) || t(e)
            }
        }
        if (!l.id) {
            const e = flexbe_cli.p_id,
                t = i.parents("[data-id], [data-item-id], [data-multivar]").toArray().map(e => (e.getAttribute("data-id") || e.getAttribute("data-item-id") || "") + (e.getAttribute("data-multivar") || "")).join(":");
            l.id = `${e}_${t || 0}`
        }
        return l
    }, preloadImage: async e => new Promise((t, i) => {
        const l = new Image;
        l.onerror = i, l.onload = () => {
            t(l), setTimeout(() => {
                "function" == typeof l.remove && l.remove()
            }, 10)
        }, l.src = e
    }), getImageUrl(e, t) {
        if ("object" != typeof e) return "";
        const i = e.img_id || e.id, l = e.img_name || e.name, n = e.img_ext || e.ext;
        let o, r = n;
        if (!n && l) {
            const e = String(l).match(/\.(jpg|jpeg|png|gif|svg|bmp|webp)$/i);
            e && e[1] && (r = e[1])
        }
        return (t = parseInt(t, 10)) && ["gif", "svg", "webp"].includes(r) && (t = 0), o = "assets/", o += i, t && (o += `_${t}`), o += `.${r}`, o
    }, async getImageProportion(e) {
        let t = e, i = +e.proportion;
        if (i && (i < 2 || i < 5 && i % 1 > 0) && (i *= 100), "string" == typeof t || !i) {
            "object" == typeof t && (t = this.getImageUrl(e, 50));
            const l = await this.preloadImage(t);
            i = l.naturalHeight / l.naturalWidth * 100
        }
        return i
    }, async getImageOptimalSize(e, t = {}) {
        const i = t.height / t.width, l = await this.getImageProportion(e) / 100, n = window.devicePixelRatio,
            o = e.img_scale || e.scale || "cover";
        let r, a;
        return "image" === (e.img_type || e.type || "background") || i > l && "contain" === o || i < l && "cover" === o ? (r = Math.ceil(t.width), a = Math.ceil(r * l)) : (a = Math.ceil(t.height), r = Math.ceil(a / l)), n > 1 && (r *= n, a *= n), {
            width: r,
            height: a
        }
    }, replaceImgPlaceholders(e) {
        const t = $(e);
        t && 0 !== t.length && t.each((e, t) => {
            const i = $(t).data("src"), l = $(t).data("srcset"), n = new Image;
            n.onload = () => {
                i && (t.src = i), l && (t.srcset = l), $(t).addClass("loaded")
            }, i && (n.src = i), l && (n.srcset = l)
        })
    }
};
!function () {
    const e = [];
    flexbe_cli.require = function (t = "", n = (() => {
    }), i = 15e3, o = !1) {
        if (t && 0 !== t.length || n(!1), !o) {
            "string" == typeof t && (t = [t]);
            let o = 0;
            const r = i => {
                const r = t.every(t => "boolean" == typeof e[t]);
                o += 1, r && o === t.length && n(i)
            };
            return Array.isArray(t) && t.forEach(e => {
                flexbe_cli.require(e, r, i, !0)
            }), !1
        }
        if (!0 === e[t]) n(!0); else if (Array.isArray(e[t])) e[t].push(n); else {
            let o, r = !1;
            const s = (n = !0) => {
                if (r) return;
                r = !0, clearTimeout(o);
                const i = e[t];
                e[t] = n, i.forEach(e => {
                    "function" == typeof e && e(n)
                })
            };
            if (e[t] = [n], /\.css(\?.*)?$/.test(t)) {
                const e = document.createElement("link");
                e.onerror = s.bind(this, !1), e.onload = s.bind(this, !0), o = setTimeout(s.bind(this, "timeout"), i), e.rel = "stylesheet", e.href = t, document.body.appendChild(e)
            } else {
                const e = document.createElement("script");
                e.onload = s.bind(this, !0), e.onerror = s.bind(this, !1), o = setTimeout(s.bind(this, "timeout"), i), e.async = !0, e.src = t, document.body.appendChild(e)
            }
        }
    }
}();

function _extends() {
    return (_extends = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o])
        }
        return e
    }).apply(this, arguments)
}

!function () {
    let e;

    function t() {
        const e = function (e) {
            if ("" === e) return {};
            const t = {};
            for (let i = 0; i < e.length; ++i) {
                const o = e[i].split("=");
                2 === o.length && (t[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")))
            }
            return t
        }(window.location.search.substr(1).split("&")), t = {};
        return $.each(e, (e, i) => {
            "utm_" === e.substring(0, 4) && (t[e] = i)
        }), document.referrer && (t.url = document.referrer), t
    }

    flexbe_cli.stat = {
        get u_id() {
            return localStorage.getItem("f_uid") || 0
        },
        set u_id(e) {
            return localStorage.setItem("f_uid", e)
        },
        time: 0,
        goals: {
            quiz: "quiz_start",
            modal: "modal_open",
            modal_form: "form_open",
            modal_done: "done_open",
            modal_product: "product_show",
            order_done: "order_done",
            pay_done: "pay_done",
            cart: "add_to_cart",
            link: "link_open",
            file: "file_load",
            close: "modal_close"
        },
        init() {
            this.reach_goal = this.reachGoal;
            const e = window.getCookie("f_uid") || flexbe_cli.stat.u_id;
            if (flexbe_cli.is_admin || flexbe_cli.run.is_bot || flexbe_cli.run.is_screenshoter || !flexbe_cli.p_id) return !1;
            e ? (flexbe_cli.stat.u_id = e, $.ajax({
                url: "/mod/stat/visit/",
                type: "POST",
                dataType: "json",
                data: {
                    s_id: flexbe_cli.s_id,
                    group_id: flexbe_cli.group_id,
                    p_id: flexbe_cli.p_id,
                    u_id: flexbe_cli.stat.u_id
                }
            }).done(e => {
                e.v_id || console.warn("Cookie visit not created", e)
            })) : $.ajax({
                url: "/mod/stat/",
                type: "POST",
                dataType: "json",
                data: {
                    s_id: flexbe_cli.s_id,
                    group_id: flexbe_cli.group_id,
                    p_id: flexbe_cli.p_id,
                    utm_data: t(),
                    device: {type: flexbe_cli.run.device_type, width: window.innerWidth, browser: navigator.userAgent}
                }
            }).done(e => {
                "object" == typeof e && null !== e && e.u_id ? (window.setCookie("f_uid", e.u_id, {Path: "/"}), flexbe_cli.stat.u_id = e.u_id, flexbe_cli.events.emit("user_created")) : console.warn("Cookie visit not setted", e)
            }), this.AB.init(), this.ecommerce.init(), this.QUIZ.init()
        },
        getGoal(e, t) {
            return "modal" === e && (/form/.test(t) && (e = "modal_form"), /done/.test(t) ? e = "modal_done" : /product/.test(t) ? e = "modal_product" : /quiz/.test(t) && (e = "quiz")), this.goals[e] || !1
        },
        reachGoal(e, t = {}) {
            if (!flexbe_cli.is_admin) {
                t = _extends({goalAction: "send", goalValue: ""}, t), flexbe_cli.events.emit("reach_goal", e, t);
                try {
                    "object" == typeof Ya && "object" == typeof Ya._metrika.counter && Ya._metrika.counter.reachGoal(e, t), "function" == typeof ga && ga("send", {
                        hitType: "event",
                        eventCategory: e,
                        eventAction: t.goalAction,
                        eventLabel: t.goalValue
                    })
                } catch (e) {
                    console.warn("stat.js", e)
                }
            }
        },
        reachGoals(t = {}, i = {}) {
            const o = `${t.goal || ""}`.trim(), a = `${t.mainGoal || ""}`.trim(), n = `${t.htmlGoal || ""}`.trim();
            if (a && this.reachGoal(a, i), o) try {
                this.reachGoal(o, i)
            } catch (e) {
                console.warn("reachGoals [goal]: ", e.message)
            }
            if (n) try {
                let t = $(n)[0].outerHTML;
                if (t) {
                    t = t.replace(/\{\{\s*goalAction\s*\}\}/g, i.goalAction || ""), t = t.replace(/\{\{\s*goalValue\s*\}\}/g, i.goalValue || ""), t = t.replace(/(['"]?)\{\{\s*goalParams\s*\}\}\1/g, JSON.stringify(i.goalParams || {}));
                    const o = document.write;
                    document.write = function (e) {
                        $("body").eq(0).append(e)
                    };
                    const a = $(`<div style="display:none">${t}</div>`);
                    $("body").eq(0).append(a), setTimeout(() => {
                        a.remove()
                    }, 2e3), clearTimeout(e), e = setTimeout(() => {
                        document.write = o
                    }, 1e4)
                }
            } catch (e) {
                console.warn("reachGoals [htmlGoal]: ", e.message)
            }
        },
        ecommerce: {
            inited: !1, init() {
                this.inited = !0, window.dataLayer || (window.dataLayer = [])
            }, add(e, t, i, o) {
                this.inited && window.dataLayer.push({
                    ecommerce: {
                        currencyCode: flexbe_cli.locale.currency.code,
                        add: {products: [{id: e, name: t, price: o, quantity: i}]}
                    }
                })
            }, remove(e, t) {
                this.inited && window.dataLayer.push({
                    ecommerce: {
                        currencyCode: flexbe_cli.locale.currency.code,
                        remove: {products: [{id: e, name: t}]}
                    }
                })
            }, purchase(e, t = !1) {
                if (this.inited && (e || 0 != e.length)) {
                    t || (t = Math.ceil(1e4 * Math.random()));
                    try {
                        window.dataLayer.push({
                            ecommerce: {
                                currencyCode: flexbe_cli.locale.currency.code,
                                purchase: {
                                    actionField: {id: t},
                                    products: e.map(e => ({id: e.id, name: e.title, price: e.price, quantity: e.count}))
                                }
                            }
                        })
                    } catch (e) {
                    }
                }
            }
        },
        AB: {
            proccess: {}, init() {
                flexbe_cli.events.off("entity_event.abstat").on("entity_event.abstat", (e, {
                    type: t,
                    core: i,
                    params: o
                }) => {
                    if (!i || "onView" !== t || !o.state || !o.first) return;
                    const {abtestId: a, abtestVariant: n} = i;
                    n && this.fixView(a, n)
                })
            }, setCookie(e) {
                window.setCookie("f_ab", JSON.stringify(e), {
                    expires: 604800,
                    path: "/",
                    domain: document.location.hostname
                })
            }, getCookie() {
                let e = window.getCookie("f_ab");
                if (e) try {
                    e = JSON.parse(decodeURIComponent(e))
                } catch (e) {
                    console.warn("Can`t parse abtest cookie", e)
                }
                return e || (e = {view: {}, lead: []}), e
            }, fixView(e, t) {
                if (null == e || null == t || "a" !== t && "b" !== t) return !1;
                null != this.getCookie().view[e] || this.proccess[e] || (this.proccess[e] = !0, $.ajax({
                    url: "/mod/stat/abtest",
                    type: "POST",
                    dataType: "json",
                    data: {testId: e, variant: t, s_id: flexbe_cli.s_id, p_id: flexbe_cli.p_id}
                }).done(i => {
                    if (this.proccess[e] = !1, 1 == i.status) {
                        const i = this.getCookie();
                        i.view[e] = t, this.setCookie(i)
                    }
                }))
            }
        },
        QUIZ: {
            inited: !1, init() {
                this.inited || (this.inited = !0, flexbe_cli.events.on("quiz_event.stat", (e, t = {}) => {
                    const i = t.payload || {};
                    if (!["step", "submit"].includes(t.event)) return;
                    if ("step" === t.event && !i.toNext) return;
                    const o = t.quiz, a = t.answerGoals, n = t.resultGoals, s = o.core.id, r = i.fromAnswers || [],
                        l = i.toId, c = i.sessionId, d = i.fromId,
                        _ = r.reduce((e, t) => e.concat((t.variants || []).map(e => e.id)), []);
                    if (this.fixAnswer({
                        sessionId: c,
                        sectionId: s,
                        answerStep: d,
                        answerVariants: _,
                        viewStep: l
                    }), a) {
                        const e = "answer";
                        r.forEach(t => {
                            if (t.variants && t.variants.length) t.variants.forEach(t => {
                                const i = t.value;
                                flexbe_cli.stat.reachGoals(a, {goalAction: e, goalValue: i})
                            }); else {
                                let i = t.value || "";
                                ["email", "phone", "name"].includes(t.type) && (i = ""), flexbe_cli.stat.reachGoals(a, {
                                    goalAction: e,
                                    goalValue: i
                                })
                            }
                        })
                    }
                    n && flexbe_cli.stat.reachGoals(n)
                }))
            }, fixAnswer({sectionId: e, sessionId: t, answerStep: i, viewStep: o, answerVariants: a}) {
                let n;

                function s() {
                    $.ajax({
                        url: n,
                        type: "POST",
                        dataType: "json",
                        data: {
                            s_id: flexbe_cli.s_id,
                            group_id: flexbe_cli.group_id,
                            f_uid: flexbe_cli.stat.u_id,
                            page_id: flexbe_cli.p_id,
                            session_id: t,
                            section_id: e,
                            answer_step: i,
                            answer_variants: a,
                            view_step: o
                        }
                    })
                }

                o && i ? n = "/mod/quiz/stat/save/composite/" : i ? n = "/mod/quiz/stat/save/answer/" : o && (n = "/mod/quiz/stat/save/view/"), n && (flexbe_cli.stat.u_id ? s() : flexbe_cli.events.one("user_created", () => {
                    s()
                }))
            }
        }
    }
}();
!function () {
    const e = (e, t = 2, a = ",", r = ".") => {
        let n, c;
        return isNaN(t = Math.abs(t)) && (t = 2), n = parseInt(e = (+e || 0).toFixed(t), 10) + "", (c = n.length) > 3 ? c %= 3 : c = 0, (c ? n.substr(0, c) + r : "") + n.substr(c).replace(/(\d{3})(?=\d)/g, "$1" + r) + (t ? a + Math.abs(e - n).toFixed(t).replace(/-/, 0).slice(2) : "")
    };
    flexbe_cli.locale = Object.assign({
        language: "en",
        country: "US",
        currency: {code: "USD", symbol: "$"},
        date_format: {
            dateLiteral: "/",
            dateMask: "DD/MM/YYYY",
            firstDay: 1,
            dateTimeLiteral: ", ",
            hour12: !1,
            timeLiteral: ":",
            timeMask: "HH:MM"
        },
        translation: {},
        currency_format: {},
        init(e = "body") {
            $("[data-lang]", e).each((e, t) => {
                const a = $(t).attr("data-lang"), r = $(t).attr("data-lang-content"), n = String(this.tr(a));
                $(t).html(n.replace(/%s/, r))
            })
        },
        tr(e, t) {
            if (!e) return "";
            const a = /^currency/.test(e) ? this.currency : this.translation,
                r = String(e).replace(/^currency\./, "").split(/\.|:{2}/).reduce((e, t) => e && e[t], a) || "";
            return r ? this.interpolate(r, t) : e
        },
        interpolate(e, t = {}) {
            const a = e => {
                const t = e % 100, a = t % 10;
                return 11 !== t && 1 === a ? "one" : a >= 2 && a <= 4 && !(t >= 12 && t <= 14) ? "few" : "many"
            }, r = e => 1 !== e ? "other" : "one", n = e => 1 === e ? "one" : e >= 2 && e <= 4 ? "few" : "many", c = {
                en: r,
                by: a,
                cs: n,
                cz: n,
                cs_CZ: n,
                fr: e => e > 1 ? "other" : "one",
                ge: r,
                de: r,
                it: r,
                kz: a,
                pl: e => {
                    if (1 === e) return "one";
                    const t = e % 10;
                    return t >= 2 && t <= 4 && (e % 100 < 10 || e % 100 >= 20) ? "few" : "many"
                },
                pt: r,
                ro: r,
                ro_RO: r,
                ru: a,
                es: r,
                ua: a
            };
            for (const a in t) if ("_" !== a && t.hasOwnProperty(a)) {
                if (e instanceof Object) {
                    const r = t[a];
                    e = e[c[flexbe_cli.locale.language](r)]
                }
                e = e.replace(new RegExp(`%${a}%`, "g"), t[a])
            }
            return e
        },
        parseMoney(e, t = 2) {
            const a = (e = String(e).replace(/,/g, ".").replace(/ /g, "").replace(/(?!^)\-/g, "").replace(/^\./g, "0.")).replace(/[^\d\.]/g, "");
            let r = ((a.match(new RegExp("\\.\\d{1," + t + "}$")) || [])[0] || "").replace(/\D/g, ""),
                n = a.replace(new RegExp("\\." + r + "$"), "");
            n = parseInt(n.replace(/[^\d-]/g, ""), 10) || 0, parseInt(r, 10) || (r = "");
            const c = parseFloat(r ? `${n}.${r}` : n);
            return /^-/.test(e) ? -c : c
        },
        formatMoney(t, {
            currencyFormat: a = this.currency_format,
            currencyData: r = this.currency,
            freeLabel: n = !1
        } = {}) {
            if (!(t = parseFloat(t)) && n) return flexbe_cli.locale.tr("cart::free_price");
            const c = a.str, o = a.d, s = Math.abs(t) >= 1e4 ? a.t : "",
                l = a.d_force || parseInt(t, 10) !== t ? r.decimals : 0, i = e(Math.abs(t), l, o, s);
            let u = i;
            return c && (u = c.replace(":value", i).replace(":symbol", r.symbol)), t < 0 && (u = `-${u}`), u.trim()
        },
        formatNumber(t, a, r = this.currency_format) {
            const n = r.d, c = Math.abs(t) >= 1e4 ? r.t : "";
            return a = null != a ? a : r.d_force || parseInt(t, 10) !== t ? this.currency.decimals : 0, e(Math.abs(t), a, n, c)
        },
        animateNumber({target: e, from: t, to: a, asMoney: r, freeLabel: n = !0, duration: c, easing: o}) {
            if (!e) return !1;
            const s = $(e);
            null == t && (t = this.parseMoney(s.text()) || "");
            const l = Math.abs(t - a);
            if (t !== a) if (e._animation && (e._animation.pause(), e._animation.reset()), r && (!a || !t) || l < 3 || "function" != typeof anime) s.text(r ? this.formatMoney(a, {freeLabel: n}) : a); else {
                const i = {value: t};
                null == c && (c = Math.max(150, Math.min(.3 * l, 650))), null == o && (o = "linear"), e._animation = anime({
                    targets: i,
                    value: a,
                    duration: c,
                    easing: o,
                    update: () => {
                        const e = Math.floor(i.value), t = r ? this.formatMoney(e, {freeLabel: n}) : e;
                        s.text(t)
                    },
                    complete: () => {
                        const e = r ? this.formatMoney(a, {freeLabel: n}) : a;
                        s.text(e)
                    }
                })
            }
        }
    }, flexbe_cli.locale)
}();
flexbe_cli.adaptive = {
    init() {
        this.adaptiveHoverInit()
    }, adaptiveHoverInit() {
        $(document).on("touchstart.adaptive_hover", ".js-adaptive-hover", e => {
            const t = $(e.currentTarget);
            t.addClass("hover"), $(document).one("touchend.adaptive_hover", () => {
                t.removeClass("hover")
            })
        })
    }
};
{
    let e;
    flexbe_cli.resize = {
        containerWidth: null,
        oldWidth: null,
        oldHeight: null,
        zoom: 1,
        width: window.innerWidth,
        height: window.innerHeight,
        get viewportWidth() {
            return this.width / this.zoom
        },
        get viewportHeight() {
            return this.height / this.zoom
        },
        init() {
            this.updateSizes(), this.simulateWindowResized(), this.simulateDocumentResize(), this.setContainerSize(), this.setSizeVariables()
        },
        updateSizes() {
            var e;
            this.oldWidth = this.width, this.oldHeight = this.height, this.width = window.innerWidth, this.height = window.innerHeight, !flexbe_cli.run.is_touch && flexbe_cli.run.is_screen_desktop_small && 4 === flexbe_cli.theme_id && null != (e = window.CSS) && e.supports("zoom", 1) ? this.zoom = this.width / 1280 : this.zoom = 1
        },
        simulateWindowResized() {
            let e, i = this.oldWidth, t = this.oldHeight;
            $(window).on("resize orientationchange", () => {
                this.updateSizes(), clearTimeout(e), e = setTimeout(() => {
                    this.oldWidth = i, this.oldHeight = t, i = this.width, t = this.height, $(window).trigger("resized")
                }, 80)
            })
        },
        simulateDocumentResize() {
            this.documentHeight = $(document).height();
            const i = flexbe_cli.is_admin ? 500 : 150, t = (i = 0) => {
                const t = $(document).height();
                Math.abs(t - this.documentHeight) >= 5 && (this.documentHeight = t, document.dispatchEvent(new CustomEvent("documentresize")), clearTimeout(e), e = setTimeout(() => {
                    document.dispatchEvent(new CustomEvent("documentresized"))
                }, i))
            };
            if ("function" == typeof ResizeObserver) {
                let e = !0;
                new ResizeObserver(() => {
                    e ? e = !1 : t(i)
                }).observe(document.querySelector("body"))
            } else setInterval(() => {
                t(0)
            }, i)
        },
        setSizeVariables() {
            const e = $(document.documentElement), i = () => {
                let i = 1 / 0;
                const t = flexbe_cli.run.is_desktop ? 10 : 200;
                (flexbe_cli.is_admin || flexbe_cli.is_service) && flexbe_cli.run.is_screen_mobile_all && (i = 730), e.css("--zoomLevel", `${this.zoom}`), e.css("--100vw", `${this.width}px`), e.css("--100vh", `${this.height}px`), e.css("--viewportWidth", `${this.viewportWidth}px`), e.css("--viewportHeight", `${this.viewportHeight}px`), (!this.coverHeight || Math.abs(flexbe_cli.resize.height - flexbe_cli.resize.oldHeight) > t || Math.abs(flexbe_cli.resize.width - flexbe_cli.resize.oldWidth) > 50) && (this.coverHeight = Math.min(this.height, i), e.css("--coverHeight", `${this.coverHeight / this.zoom}px`))
            };
            i(), flexbe_cli.run.is_ios && setTimeout(() => i(), 150), $(window).on("resized.flexbe_resize.fixCover", () => i())
        },
        setContainerSize() {
            const e = () => {
                const e = document.createElement("div");
                e.classList.add("container"), document.body.appendChild(e), this.containerWidth = e.offsetWidth, document.body.removeChild(e)
            };
            e(), $(window).on("resized.flexbe_resize.setContainer", () => e())
        }
    }
}
flexbe_cli.scroll = {
    inScroll: !1, skip: !1, _latest: window.pageYOffset, get latest() {
        return this._latest / flexbe_cli.resize.zoom
    }, init() {
        this._latest = window.pageYOffset, document.addEventListener("mousewheel", () => {
            this.$inScrollElement && (this.$inScrollElement.stop(), this.$inScrollElement = null)
        }, {passive: !0}), document.addEventListener("scroll", () => {
            this.inScroll = !0, this._latest = window.pageYOffset
        }, {passive: !0}), document.addEventListener("scrollend", () => {
            this.inScroll = !1
        }, {passive: !0}), this.scrollLock.init(), this.scrollImprovement.init()
    }, scrollImprovement: {
        scrollTimer: 0, pointerState: !1, init() {
            this.createStopScrollEvent(), this.scrollRestore()
        }, createStopScrollEvent() {
            let e = flexbe_cli.scroll.latest;
            document.addEventListener("scroll", () => {
                const l = e > flexbe_cli.scroll.latest ? "up" : "down",
                    o = Math.max(flexbe_cli.scroll.latest - e, e - flexbe_cli.scroll.latest);
                clearTimeout(this.scrollTimer), this.scrollTimer = setTimeout(() => {
                    e = flexbe_cli.scroll.latest, document.dispatchEvent(new CustomEvent("scrollend", {
                        detail: {
                            direction: l,
                            distance: o
                        }
                    }))
                }, 200)
            }, {passive: !0})
        }, scrollRestore() {
            history.scrollRestoration && (history.scrollRestoration = "auto")
        }
    }, scrollLock: {
        loaded: !1, locked: !1, init() {
            this.loaded || flexbe_cli.require(["assets/scroll-lock.min.js"], () => {
                this.loaded = !0, scrollLock.addScrollableSelector([".scroller", ".scrollable"]), this.locked && scrollLock.disablePageScroll()
            })
        }, lock() {
            this.locked = !0, $("html, body").addClass("overflow"), "undefined" != typeof scrollLock && scrollLock.disablePageScroll()
        }, unlock() {
            this.locked = !1, $("html, body").removeClass("overflow"), "undefined" != typeof scrollLock && (scrollLock.clearQueueScrollLocks(), scrollLock.enablePageScroll())
        }
    }, scrollTo(e, l = {}) {
        const o = $(e);
        if (!(e = o[0])) return !1;
        null == l.animation && (l.animation = !0), null == l.centered && (l.centered = !0), null == l.force && (l.force = !0);
        let t, i = 0, s = 0, n = window.scrollParent(e, "y");
        n && !$(n).is(".b_block, .container-list") || (n = document.scrollingElement);
        const c = n === document.body || n === document.documentElement, r = c ? window.innerHeight : n.offsetHeight,
            a = l.padding || 0, d = o.offset().top, f = e.offsetHeight, m = c ? $("html, body") : $(n);
        flexbe_cli.run.is_mobile ? t = m.find(".menu-fixed > .nav-header") : 4 == flexbe_cli.theme_id ? (t = m.find(".floating-header.fixed-header"), t[0] || (t = m.find(".floating-header > .header-content"), s = t[0] && flexbe_cli.run.is_screen_desktop_all ? 20 : 0)) : t = m.find('.floating[data-floating="true"]'), t && t.length && (s += t[0].offsetHeight - 2);
        const h = Math.max(0, r - s - f);
        if (f >= r && (l.centered = !1), i = l.centered ? d - Math.max(0, h / 2) - s : d - a - s, l.offset && (i += l.offset), !l.force) {
            const e = n.offsetTop, t = o[0].getBoundingClientRect();
            if (t.top >= e && t.bottom <= e + r) return "function" == typeof l.complete && l.complete(), !1
        }
        this.$inScrollElement = m, $(document).off("documentresize.scrollTo").on("documentresize.scrollTo", () => {
            this.scrollTo(e, l)
        }), m.stop(), m.animate({scrollTop: i}, {
            delay: l.delay || 0,
            duration: l.duration ? l.duration : l.animation ? 450 : 0,
            easing: l.animation ? "swing" : "linear",
            always: (...e) => {
                this.$inScrollElement = !1, $(document).off("documentresize.scrollTo"), "function" == typeof l.complete && l.complete(...e)
            }
        })
    }
};

function _extends() {
    return (_extends = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var o = arguments[e];
            for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
        }
        return t
    }).apply(this, arguments)
}

!function () {
    const t = {
        content: "",
        contentAsHTML: !0,
        theme: "dark",
        animation: "fall",
        animationDuration: [250, 180],
        delay: [180, 100],
        position: "top",
        autoClose: !0,
        hideOnClick: !1,
        interactive: !0,
        distance: 3,
        maxWidth: 350,
        IEmin: 12,
        trigger: "custom",
        triggerOpen: {click: !1, touchstart: !1, mouseenter: !0},
        triggerClose: {click: !1, originClick: !1, mouseleave: !0, touchleave: !0}
    };
    flexbe_cli.tip = {
        init(e, o = {}) {
            var n, i;
            if (!e) return !1;
            let r;
            const a = $(e),
                s = _extends({}, t, o, {content: null != (n = null != (i = o.content) ? i : a.attr("data-tip")) ? n : e.innerHTML});
            s.theme = `tooltipster-${(a.attr("data-theme") || s.theme || t.theme).replace("tooltipster-", "")}`, s.maxWidth = parseInt(a.attr("data-width"), 10) || s.maxWidth, s.position = a.attr("data-tip-position") || s.position;
            const l = s.content || "";
            if (null == jQuery.fn.tooltipster) return console.warn("Tooltipster is not loaded"), !1;
            try {
                r = a.tooltipster("instance")
            } catch (t) {
            }
            return r || l ? (r ? (clearTimeout(r._contentTmt), l && l !== r.content() ? (r.content(l), r.enable()) : l || this.destroy(e)) : (e.tooltipstered = !0, a.tooltipster(s), r = a.tooltipster("instance"), r.on("created", () => {
                a.attr("data-tooltipstered", "true"), r._$tooltip.addClass("editor-ui")
            }), r.on("destroy", () => {
                e.tooltipstered = !1, a.removeAttr("data-tooltipstered")
            }), r.on("ready", () => {
                r.reposition()
            })), o.show && r.open(), r) : void 0
        }, destroy(t) {
            if (!t) return !1;
            let e;
            const o = $(t);
            try {
                e = o.tooltipster("instance")
            } catch (t) {
            }
            e && (e.destroy(), t.tooltipstered = !1, o.removeAttr("data-tooltipstered"))
        }
    }
}();
!function () {
    let e, t, a, i = !1, r = !1;
    flexbe_cli.header = {
        $floating: !1, offset: 0, init() {
            flexbe_cli.is_admin || (this.floatingHeader(), $(window).off("resized.floatingHeader").on("resized.floatingHeader", () => {
                this.floatingHeader(!0)
            }))
        }, floatingHeader(n) {
            const s = this, o = flexbe_cli.responsive && flexbe_cli.run.is_screen_mobile_all;
            if (flexbe_cli.is_admin || o) return !1;
            const f = $(".header-wrapper.floating-header");
            if (!f.length) return !1;
            n || (f.removeClass("fixed-header"), f.find("[data-contrast]").removeAttr("data-contrast"), f.parent().css("min-height", ""));
            const d = f.eq(0), l = d.parent(), c = d.closest(".b_block"), h = d.find(".content-zone"),
                m = d.attr("data-fixed-contrast") || "inherit";
            cancelAnimationFrame(a), function n() {
                a = requestAnimationFrame(n);
                const f = c[0]._core;
                if (flexbe_cli.scroll.skip || !f) return;
                const u = f.tween.start + Math.min(f.tween.height, 150) + 150, g = flexbe_cli.scroll.latest > u,
                    x = i && flexbe_cli.scroll.latest <= Math.min(u, f.tween.end);
                if (r !== g) {
                    if (r = g, clearTimeout(e), clearTimeout(t), x) return i = !1, s.offset = 0, h.removeAttr("data-contrast"), d.removeClass("fixed-header fade-in fade-out"), void l.css("min-height", "");
                    if (g) {
                        t = setTimeout(() => {
                            i = !0, s.offset = d[0].offsetHeight, l.css("min-height", `${s.offset}px`), d.addClass("fade-in"), d.addClass("fixed-header"), h.attr("data-contrast", m), f && f.updateTween({fixed: !0}), d.trigger("transform-header"), e = setTimeout(() => {
                                d.removeClass("fade-in fade-out"), i = !1
                            }, 300)
                        }, o ? 0 : 300)
                    } else i = !0, s.offset = 0, d.addClass("fade-out"), f && f.updateTween({fixed: !1}), e = setTimeout(() => {
                        d.removeClass("fixed-header fade-in fade-out"), d.trigger("transform-header"), h.removeAttr("data-contrast"), l.css("min-height", ""), i = !1
                    }, 200)
                }
            }()
        }
    }
}();
flexbe_cli.entity = {
    init() {
        this.dispatchEvents()
    }, bind(e, t, i = {}) {
        const n = flexbe_cli[e].bind(t);
        return n && !i.skipInit && n.init(i), n
    }, initArea(e, t = {}) {
        return !!e && ($(e).toArray().forEach(e => {
            let i;
            const n = $(e);
            if (n.is(".b_block") ? i = "block" : n.is(".m_modal") ? i = "modal" : n.is(".w_widget") ? i = "widget" : (flexbe_cli.element && n.is('[data-is="element"]') || n.is('[data-is="zone"]')) && (i = "element"), i) this.bind(i, n[0], t); else {
                const e = n.find(".b_block"), i = n.find(".m_modal"), r = n.find(".w_widget");
                e.toArray().forEach(e => this.bind("block", e, t)), i.toArray().forEach(e => this.bind("modal", e, t)), r.toArray().forEach(e => this.bind("widget", e, t))
            }
            if (flexbe_cli.element) {
                const e = n.find('[data-is="zone"]'), i = n.find('[data-is="element"]');
                e.toArray().forEach(e => this.bind("element", e, t)), i.toArray().forEach(e => this.bind("element", e, t))
            }
        }), e._core)
    }, dispatchEvents() {
        flexbe_cli.is_admin && (flexbe_cli.events.on("entity_resize", $.throttle((e, t) => {
            if (!t || !t.id || !t.is) return;
            const i = t.entity && t.entity.$area[0] || document.querySelector(`[data-id="${t.id}"]`), n = i && i._core;
            n && (t.force = !0, n.updateTween(t))
        }), 30), flexbe_cli.events.on("entity_render.core_entity", (e, t) => {
            if (!t || !t.id) return;
            if (t.originId && t.originId !== t.id) return;
            const i = t.entity && t.entity.$area[0] || document.querySelector(`[data-id="${t.id}"]`);
            i && this.initArea(i, t, !0)
        }), flexbe_cli.events.on("entity_remove.core_entity", (e, t) => {
            const i = t.entity && t.entity.$area[0] || document.querySelector(`[data-id="${t.id}"]`);
            i && i._core && i._core.destroy(t)
        }), flexbe_cli.events.on("client_msg.core_entity", (e, t) => {
            if (!t || !t.id || !t.is) return;
            const i = t.entity && t.entity.$area[0] || document.querySelector(`[data-id="${t.id}"]`), n = i && i._core;
            n && n._onMsg(t.msg, t.data)
        }))
    }
};
!function () {
    const e = {};
    flexbe_cli.block = {
        hasOverlay: [], $list: !1, get $blocks() {
            return this._$blocks && !flexbe_cli.is_admin || (this._$blocks = this.$list && this.$list.find(".b_block")), this._$blocks
        }, init() {
            this.$list = $(".container-list").eq(0), flexbe_cli.entity.initArea(this.$list), this.dispatchEvents(), this.fixCoverHeight()
        }, dispatchEvents() {
            $(window).on("resized.flexbe_block", () => {
                this.fixCoverHeight()
            }), $(document).on("documentresized.flexbe_block", () => {
                this.fixCoverHeight(), this.$blocks.each((e, i) => {
                    i._core && i._core._onResize()
                })
            }), flexbe_cli.is_admin && flexbe_cli.events.off("layout_change.flexbe_block").on("layout_change.flexbe_block", (e, i) => {
                i && "block" === i.is && (this.fixCoverHeight(), this.$blocks.each((e, i) => {
                    i._core && i._core.updateTween({force: !0})
                }))
            })
        }, pushOverlay(e, i) {
            return i && this.hasOverlay.includes(e) && this.hasOverlay.splice(this.hasOverlay.indexOf(e)), this.hasOverlay.push(e), !0
        }, removeOverlay(e) {
            return this.hasOverlay.includes(e) && this.hasOverlay.splice(this.hasOverlay.indexOf(e)), !0
        }, fixCoverHeight(e) {
            [2, 3].includes(flexbe_cli.theme_id) && (null == e && (e = this.$list.find(".b_block")), e.each((e, i) => {
                let t, s = 0, l = flexbe_cli.resize.coverHeight || flexbe_cli.resize.viewportHeight;
                const r = $(i), c = r.find(".cover");
                if (!c.length) return;
                const o = r.prevAll(".b_block");
                t = flexbe_cli.is_admin && r.is('[data-abtest-variant="b"]') ? o.eq(1) : o.eq(0), t = t.filter('[data-b-type*="header"]').not('[data-b-type*="overflow"]'), s = Math.max(0, t.outerHeight() || 0), s < 250 && s < l / 2.5 && (l -= s), c.css({"--coverHeight": `${l}px`})
            }))
        }, bind(i) {
            if (!i) return !1;
            const t = i.getAttribute("data-b-id");
            if (t && !i._core) {
                const s = e[t] || {};
                i._core = new BlockCore(i, s)
            }
            return i._core
        }, register(i, t = {}) {
            i || console.warn("Element register error: Element must have templateId"), e[i] = t
        }
    }
}();
!function () {
    const e = {};
    flexbe_cli.modal = {
        opened: {}, $list: [], get $modals() {
            return this._$modals && !flexbe_cli.is_admin || (this._$modals = this.$list && this.$list.find(".m_modal")), this._$modals
        }, init() {
            this.list = document.querySelector(".modal-list"), this.$list = $(this.list), flexbe_cli.entity.initArea(this.$list);
            const e = getJsonFromUrl();
            if (e.service && e.m_id) return this.$list.addClass("noanimate"), this.open({id: e.m_id}), !1;
            this.dispatchEvents()
        }, dispatchEvents() {
            const e = $("body");
            flexbe_cli.events.on("ui_modal_open.core_modal", (e, t = {}) => {
                this.open(t)
            }), flexbe_cli.events.on("ui_modal_close.core_modal", (e, t = {}) => {
                this.close(t)
            }), e.on("click.modal-close", ".m_modal .close", e => {
                e.preventDefault();
                const t = $(e.currentTarget).closest(".m_modal.show").attr("data-id");
                this.close({id: t})
            });
            {
                let t, o;
                const i = () => {
                    if (flexbe_cli.is_admin) {
                        if ((window.parent.flexbe.modal.visible || []).length) return !1
                    }
                    return !0
                };
                e.off(".modal-close-overlay").on("pointerdown.modal-close-overlay pointerup.modal-close-overlay", ".modal-data", e => {
                    if (!(flexbe_cli.responsive && flexbe_cli.run.is_screen_mobile_all || !Object.keys(this.opened).length) && i()) {
                        if ("pointerdown" === e.type) return t = $(e.target).is(".modal-data") || $(e.target).is('[data-overlay="true"]') ? e.target : null, void (o = e.target.clientWidth <= e.pageX);
                        if (t === e.target && !o) {
                            const e = $(t).closest(".m_modal").attr("data-id");
                            this.close({id: e})
                        }
                    }
                }), $(window).off(".modal-close-esc").on("keyup.modal-close-esc", e => {
                    if (27 === e.which && i() && Object.keys(this.opened).length) {
                        const e = Object.keys(this.opened), t = e[e.length - 1];
                        this.close({id: t})
                    }
                })
            }
        }, find(e) {
            if (null == this.$list || !this.$list.length) return !1;
            const t = this.$list.find(`[data-id="${e}"]`);
            if (null == t || !t.length) return !1;
            const o = t.toArray(), i = o[0] || !1;
            return !!i && {modals: o, modal: i}
        }, open({id: e, data: t = {}, options: o = {}} = {}) {
            let {modals: i, modal: s} = this.find(e) || {}, l = $(i);
            if (!s) return console.warn("WRONG ACTION", "modal_not_found", e), flexbe_cli.is_admin && flexbe_cli.events.emit("editor_page_error", {
                type: "action",
                error: "modal_is_wrong"
            }), !1;
            if (l.length > 1) {
                let {multivar: t} = o;
                if (!t) {
                    const o = String(e).split("_")[0];
                    t = $(`[data-id="${o}"]`).attr("data-multivar")
                }
                let i = [];
                t && "default" !== t && (i = l.filter(`[data-multivar="${t}"]`).eq(0)), l = i.length ? i.eq(0) : l.eq(0), s = l[0]
            }
            const n = this.bind(s);
            if (s && !n) return console.warn("Try to open modal without core object,", `id: ${e},`, "modal: ", s), !1;
            const d = Object.keys(this.opened), a = d[d.length - 1];
            return !o.rise && a && a !== e && this.close({id: a, openId: e}), d.includes(e) || n.open({
                fromId: a,
                data: t,
                options: o
            }), n.$area.css("zIndex", Object.keys(this.opened).length + 1), delete this.opened[e], this.opened[e] = n, !0
        }, close({id: e, openId: t} = {}) {
            if (!e) return Object.keys(this.opened).map(e => !(!this.opened[e] || e == t) && this.close({
                id: e,
                openId: t
            }));
            if (!this.opened[e]) return !1;
            delete this.opened[e];
            const {modal: o} = this.find(e) || {}, i = this.bind(o);
            return o ? i ? (i.close({openId: t}), i.$area.css("zIndex", ""), !0) : (console.warn("Try to close modal without core object"), !1) : void 0
        }, bind(t) {
            if (!t) return !1;
            const o = t.getAttribute("data-m-id");
            if (o && !t._core) {
                const i = e[o] || {};
                t._core = new ModalCore(t, i)
            }
            return t._core
        }, register(t, o = {}) {
            t || console.warn("Element register error: Element must have templateId"), e[t] = o
        }
    }
}();

function _extends() {
    return (_extends = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
        }
        return t
    }).apply(this, arguments)
}

!function () {
    const t = {};
    flexbe_cli.widget = {
        init() {
            this.$list = $(".widget-list"), this.list = this.$list.get(0), this.cart && this.cart.init(), flexbe_cli.entity.initArea(this.$list)
        }, bind(e) {
            if (!e) return !1;
            const i = e.getAttribute("data-w-id");
            if (!e._core) {
                const r = t[i] || {};
                e._core = new WidgetCore(e, r)
            }
            return e._core
        }, register(e, i = {}) {
            e || console.warn("Element register error: Element must have templateId"), t[e] = i
        }
    }
}(), function () {
    let t = [], e = [];

    class i {
        constructor(t) {
            $.observable(this), this.cart = t
        }

        init() {
            this.methods = [], this.cartSettings = {}, this.enabled = this.methods.length > 0, this.activeMethod = this.methods[0]
        }

        dispatch(t, ...e) {
            const i = this[t];
            if ("function" != typeof i) throw new Error(`Delivery dispatch: action '${t}' doesnt exist`);
            const r = i.apply(this, e);
            this.emit("dispatch", {name: t, args: e, result: r})
        }

        getActive() {
            const t = this.activeMethod;
            if (!t) return;
            const e = this.getPrice(t.id);
            return {id: t.id, type: t.type, title: t.title, desc: t.desc, price: e}
        }

        getMethod(t) {
            return this.methods.find(e => e.id == t)
        }

        selectMethod(t) {
            return this.activeMethod = this.getMethod(t) || this.methods[0], this.activeMethod
        }

        getPrice(t) {
            const e = t ? this.getMethod(t) : this.activeMethod,
                i = this.cartSettings.use_total ? +this.cartSettings.total : 0;
            let r, o = 0, s = "", c = 0, n = "", a = 0, l = "", d = 0, h = "", u = 0, f = "", m = 0;
            if (e) {
                const t = this.cart.getTotal();
                e.prices.filter(t => "" !== t.from).forEach((r, s) => {
                    e.useMinTotal && !s && +r.from && (o = +r.price, +r.from > i && (d = +r.from)), (t >= +r.from || !s) && (o = +r.price)
                }), e.useNotFixTotal && (m = e.useNotFixTotal);
                const s = e.prices.find(t => 0 === t.price);
                r = e.useNotFixTotal && "" === s.from, s && (c = +s.from || 0, a = Math.max(0, c - t), n = flexbe_cli.locale.formatMoney(c), l = flexbe_cli.locale.formatMoney(a)), d && (u = Math.max(0, d - t), h = flexbe_cli.locale.formatMoney(d), f = flexbe_cli.locale.formatMoney(u))
            }
            return s = flexbe_cli.locale.formatMoney(o, {freeLabel: !0}), {
                current: o,
                currentFormatted: s,
                freeFrom: c,
                freeFromFormatted: n,
                untilFree: a,
                untilFreeFormatted: l,
                minTotal: d,
                minTotalFormatted: h,
                untilMinTotal: u,
                untilMinTotalFormatted: f,
                useNotFixTotal: m,
                isNotFree: r
            }
        }
    }

    flexbe_cli.widget.cart = new class {
        constructor() {
            $.observable(this), this.delivery = new i(this)
        }

        init() {
            this.initList(), this.delivery.init()
        }

        dispatch(t, ...e) {
            const i = this[t];
            if ("function" != typeof i) throw new Error(`Cart dispatch: action '${t}' doesnt exist`);
            const r = i.apply(this, e);
            this.emit("dispatch", {name: t, args: e, result: r})
        }

        initList() {
            if (flexbe_cli.is_admin) {
                const e = "ru" === flexbe_cli.locale.language, i = "RUB" === flexbe_cli.locale.currency.code;
                t = [{
                    id: "7832324_1",
                    count: 1,
                    protect: 1,
                    img: "/img/1000000945_200.jpg",
                    title: e ? "Пример товара" : "Example Item",
                    price: i ? 750 : 10
                }, {
                    id: "7832464_2",
                    count: 2,
                    protect: 1,
                    img: "/img/1000000948_200.jpg",
                    title: e ? "Другой товар" : "Another Item",
                    price: i ? 2550 : 25
                }], this.emit("list_loaded", {})
            } else try {
                t = JSON.parse(localStorage.getItem("f_cart")) || [], e = JSON.parse(localStorage.getItem("f_cart_changed")) || [], this.emit("list_loaded", {})
            } catch (t) {
                console.error(t)
            }
        }

        getList() {
            return t
        }

        getItem(e) {
            return t.find(t => t.id === e)
        }

        getCount() {
            return t.reduce((t, e) => (e.count && (t += parseInt(e.count, 10)), t), 0)
        }

        getTotal() {
            return t.reduce((t, e) => (e.count && e.price && (t += parseInt(e.count, 10) * parseFloat(e.price)), t), 0)
        }

        updateList(e) {
            if (!Array.isArray(e)) return !1;
            if (t = [...e], !flexbe_cli.is_admin) try {
                localStorage.setItem("f_cart", JSON.stringify(e))
            } catch (t) {
            }
            return t
        }

        resetList() {
            const e = [...t].filter(t => t.protect);
            this.updateList(e), this.resetChangedList()
        }

        addItem(e) {
            if (!e.id) throw new Error("Cart add item: product ID is not defined");
            e.count = parseInt(e.count, 10) || 1, e.price = parseFloat(e.price) || 0, e.type = e.type || "product";
            const i = this.getItem(e.id);
            return i ? i.count += e.count : t.push(_extends({}, e)), this.updateList(t), flexbe_cli.stat.ecommerce.add(e.id, e.title, e.count, e.price), t
        }

        removeItem(e) {
            const i = this.getItem(e);
            return !(!i || i.protect) && (t.splice(t.indexOf(i), 1), this.updateList(t), flexbe_cli.stat.ecommerce.remove(i.id, i.title), t)
        }

        updateCount({id: e, count: i}) {
            const r = this.getItem(e);
            return !!r && ("+" === i ? r.count += 1 : "-" === i && r.count > 1 ? r.count -= 1 : (i = parseInt(i, 10), r.count = i || 1), this.updateList(t), r)
        }

        getChangedList() {
            return e
        }

        updateChangedList(t) {
            if (!Array.isArray(t)) return !1;
            if (t.forEach(t => {
                const i = e.find(e => e.productId === t.productId && e.variantId === t.variantId);
                if (i) {
                    const r = e.findIndex(t => t.productId === i.productId);
                    e[r] = t
                } else e.push(t)
            }), !flexbe_cli.is_admin) try {
                localStorage.setItem("f_cart_changed", JSON.stringify(e))
            } catch (t) {
            }
            return e
        }

        resetChangedList() {
            if (e = [], !flexbe_cli.is_admin) try {
                localStorage.setItem("f_cart_changed", JSON.stringify(e))
            } catch (t) {
            }
        }
    }
}();
!function () {
    const e = {};
    flexbe_cli.element = {
        instances: {}, get $zones() {
            return $('[data-is="zone"]')
        }, get $elements() {
            return $('[data-is="element"]')
        }, init() {
        }, bind(t) {
            if (!t) return !1;
            const n = t.getAttribute("data-e-id");
            if (!t._core) {
                const r = e[n] || {};
                t._core = new ElementCore(t, r)
            }
            return t._core
        }, register(t, n = {}) {
            t || console.warn("Element register error: Element must have templateId"), e[t] = n
        }
    }
}();
flexbe_cli.cookies = new class {
    init() {
        this.cookieApplied = !1, this.params = Object.assign({
            show: 0,
            dont_set_if_not_agree: 0,
            use_custom_warning_text: 0,
            custom_warning_text: "",
            policy_uri: "",
            style: "right_bottom"
        }, {}), flexbe_cli.is_admin || flexbe_cli.run.is_screenshoter || 99 == flexbe_cli.theme_id || !this.params.show || localStorage.getItem("f_cookies_allowed") || this.createNotify()
    }

    createNotify() {
        const e = this.params, o = $("body"), t = document.documentElement.clientHeight;
        if (+e.use_custom_warning_text && e.custom_warning_text) this.content = e.custom_warning_text.replace(/(?:\r\n|\r|\n)/g, "<br />"); else {
            const o = "center_compact" === e.style ? "cookies.compact_text" : "cookies.long_text";
            this.content = flexbe_cli.locale.tr(o)
        }
        const s = e.button_text && e.use_custom_warning_text ? e.button_text.replace(/(?:\r\n|\r|\n)/g, "<br />") : flexbe_cli.locale.tr("cookies.button"),
            i = e.link_text ? e.link_text.replace(/(?:\r\n|\r|\n)/g, "<br />") : flexbe_cli.locale.tr("cookies.button_link"),
            c = e.policy_uri ? e.policy_uri.replace(/(?:\r\n|\r|\n)/g, "<br />") : "/legal/cookie-policy/",
            l = +e.use_policy ? "show" : "",
            n = $(`\n                <div class="cookies-wrap style--${e.style}">\n                    <div class="cookies-container">\n                        <div class="cookies-content scrollable">\n                            <span>\n                                ${this.content}\n                                <a href="${c}" target="_blank" class="cookies-button-more ${l}">\n                                 ${i}\n                                </a> \n                            </span>\n                        </div>\n\n                        <div class="cookies-button-container">   \n                            <a href="${c}" target="_blank" class="cookies-button-more scrollable ${l}">\n                                ${i}\n                            </a>\n                            <div class="cookies-button scrollable">\n                                ${s}\n                            </div>\n                        </div>\n\n                        <div class="cookies-close">\n                            <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">\n                                 <path d="M7 6L13 0L14 1L8 7L14 13L13 14L7 8L1 14L0 13L6 7L0 1L1 0L7 6Z"/>\n                            </svg>\n                        </div> \n                    </div>\n                </div>\n            `);
        o.append(n);
        const a = () => {
            this.cookieApplied || e.dont_set_if_not_agree && (this.cookieApplied = !0, "function" == typeof window.applyCookies && window.applyCookies(), $(document).off("scroll.cookies").off("click.cookies"))
        };
        document.addEventListener("scroll", () => {
            this.scrollSkip = !0
        }, {once: !0}), $(window).one("DOMContentLoaded", () => {
            let e = 0;
            n.outerWidth(), n.addClass("show"), o.addClass("cookies-warning--show"), n.on("click.cookies", ".cookies-button, .cookies-close", () => {
                n.removeClass("show"), o.removeClass("cookies-warning--show"), localStorage.setItem("f_cookies_allowed", "allowed"), n.off("click.cookies"), a()
            }), $(document).on("click.cookies", "a, [data-component]", () => {
                a()
            }), setTimeout(() => {
                let o = flexbe_cli.scroll.latest;
                $(document).on("scroll.cookies", () => {
                    const s = Math.max(flexbe_cli.scroll.latest - o, o - flexbe_cli.scroll.latest);
                    clearTimeout(this.scrollTimer), this.scrollTimer = setTimeout(() => {
                        o = flexbe_cli.scroll.latest, e += s, e >= t && a()
                    }, 200)
                })
            }, 500)
        })
    }
};

class EntityCore {
    constructor(e, t = {}) {
        const i = $(e), s = i.attr("data-is"), n = i.attr("data-id"), o = "zone" === s ? "e" : s[0],
            h = i.attr(`data-${o}-id`), a = i.attr("data-mod-id") || 0, r = JSON.parse(i.attr(`${o}-type`) || "[]"),
            d = JSON.parse(i.attr("data-components") || !0);
        this.require = [], this.$area = i, this.area = i[0], this.$container = i, this.container = e[0], this.$root = i, this.root = i[0], this.inited = !1, this.is = s, this.id = n, this.template_id = h, this.mod_id = a, this.type = r, this.components = d, this.tween = {}, this.isVisible = null, this.inScreen = !1, this.inBeside = !1, this.inView = !1, this.inFocus = !1, this.wasVisible = null, this.wasScreen = !1, this.wasBeside = !1, this.wasView = !1, this.wasFocus = !1, Object.keys(t).forEach(e => {
            const i = Object.getOwnPropertyDescriptor(t, e);
            if ("value" in i) {
                const i = t[e];
                this[e] = "object" == typeof i ? $.extend(!0, Array.isArray(i) ? [] : {}, i) : i
            } else Object.defineProperty(this, e, i)
        })
    }

    onInit() {
    }

    onUpdate() {
    }

    onLoad() {
    }

    onReady() {
    }

    onDestroy() {
    }

    onVisible() {
    }

    onBeside() {
    }

    onFocus() {
    }

    onScreen() {
    }

    onView() {
    }

    onMsg() {
    }

    onResize() {
    }

    onOpen() {
    }

    onClose() {
    }

    init(e, t) {
        null == t && (t = this.inited ? "update" : "init"), "init" !== t || this.inited ? "update" === t && this.inited && this._onUpdate(e) : this._onInit(e), ("init" === t || e.templateRendered) && flexbe_cli.require(this.require, () => {
            this._onLoad(e)
        })
    }

    destroy(e) {
        this._onDestroy(e)
    }

    _sendEvent(e, t) {
        flexbe_cli.events.emit("entity_event", {type: e, core: this, params: t});
        const i = new CustomEvent(e, {detail: t});
        this.area.dispatchEvent(i, {bubbles: !1})
    }

    _onInit(e) {
        this.inited = !0, flexbe_cli.locale.init(this.area), this._sendEvent("onInit", e), this.onInit(e), this.updateTween()
    }

    _onLoad(e) {
        this.loaded = !0, this._sendEvent("onLoad", e), this.onLoad(e), this.onReady(e), this.require.length && this.updateTween({force: !0})
    }

    _onUpdate(e) {
        const t = this.$area.attr("data-mod-id") || 0, i = JSON.parse(this.$area.attr("data-components") || !0);
        this.modId = t, this.components = i, this.inited = !0, this.updated = !0, e.templateRendered && flexbe_cli.locale.init(this.area), this._sendEvent("onUpdate", e), this.onUpdate(e), (e.templateRendered || e.styleRendered) && this.updateTween({force: !0})
    }

    _onResize(e = {}) {
        this.isVisible && (this._sendEvent("onResize", e), this.onResize(e))
    }

    _onDestroy(e) {
        this.$area.off(".inherit"), this._sendEvent("onDestroy", e), this.onDestroy(e), delete this.area._core
    }

    _onMsg(e, t) {
        this.onMsg(e, t)
    }

    _onVisible({state: e, force: t}) {
        if (null == this.isVisible) return this.isVisible = e, void (this.wasVisible = e);
        if (this.isVisible === e && !t) return;
        const i = e && !this.wasVisible;
        this.isVisible = e, this._sendEvent("onVisible", {state: e, first: i}), this.onVisible({
            state: e,
            first: i
        }), e && (this.wasVisible = !0)
    }

    _onFocus({state: e, force: t}) {
        if (this.isVisible || (e = !1), this.inFocus === e && !t) return;
        const i = e && !this.wasFocus;
        this.inFocus = e, this._sendEvent("onFocus", {
            state: e,
            first: i
        }), this.onFocus(e, i), e && (this.wasFocus = !0)
    }

    _onScreen({state: e, force: t}) {
        if (this.isVisible || (e = !1), this.inScreen === e && !t) return;
        const i = e && !this.wasScreen;
        this.inScreen = e, this._sendEvent("onScreen", {
            state: e,
            first: i
        }), this.onScreen(e, i), e && (this.wasScreen = !0)
    }

    _onView({state: e, force: t}) {
        if (this.isVisible || (e = !1), this.inView === e && !t) return;
        const i = e && !this.wasView;
        this.inView = e, i && "block" === this.is && this.$area.addClass("was-view"), this._sendEvent("onView", {
            state: e,
            first: i
        }), this.onView(e, i), e && (this.wasView = !0)
    }

    _onBeside({state: e, force: t}) {
        if (this.isVisible || (e = !1), this.inBeside === e && !t) return;
        const i = e && !this.wasBeside;
        this.inBeside = e, this._sendEvent("onBeside", {
            state: e,
            first: i
        }), this.onBeside(e, i), e && (this.wasBeside = !0)
    }

    updateTween() {
    }

    _onOpen(e) {
        this.updateTween(), this._sendEvent("onOpen", e), this.onOpen(e)
    }

    _onClose(e) {
        this.updateTween(), this._sendEvent("onClose", e), this.onClose()
    }
}

class BlockCore extends EntityCore {
    constructor(e, t) {
        super(e, t), this.is = "block", this.$block = this.$area, this.$container = this.$area.find(".container-fluid"), this.container = this.$container[0], this.abtestVariant = this.$area.attr("data-abtest-variant"), this.abtestId = this.abtestVariant && this.$area.attr("data-abtest-id")
    }

    init(e, t) {
        super.init(e, t), this._dispatchEvents()
    }

    _dispatchEvents() {
        let e = !0;
        this._resizeObserver = new ResizeObserver($.throttle(() => {
            e ? e = !1 : this.updateTween()
        }), 30), this._resizeObserver.observe(this.area), $(window).off(`scroll.tween.${this.id}`).on(`scroll.tween.${this.id}`, $.throttle(() => {
            this.updateTween()
        }, 96))
    }

    _onInit(e) {
        super._onInit(e)
    }

    _onUpdate(e) {
        this.$container = this.$area.find(".container-fluid"), this.container = this.$container[0], super._onUpdate(e)
    }

    _onDestroy(e) {
        this.inited = !1, this._resizeObserver && this._resizeObserver.disconnect(), $(window).off(`scroll.tween.${this.id}`), super._onDestroy(e)
    }

    updateTween({force: e = !1, fixed: t = !1} = {}) {
        var i;
        const n = this;
        if (this.tween.color = "#6a6a6a", this.container) {
            const e = this.container.getAttribute("data-contrast");
            if (e) this.tween.color = "light" === e ? "#FFF" : "#1B1B1C"; else {
                const e = this.$area.find(".container")[0];
                this.tween.color = e && getComputedStyle(e).color || "#FFF"
            }
        }
        if (!n.inited) return !1;
        const s = n.area.offsetTop || 0, r = (null == (i = n.area.offsetParent) ? void 0 : i.offsetTop) || 0,
            o = Math.max(0, s + r), a = n.area.offsetWidth, l = n.area.offsetHeight, h = !(!a && !l),
            c = null == this.tween.width && null == this.tween.height,
            w = e || a !== n.tween.width || l !== n.tween.height, f = h !== n.tween.visible;
        n.tween.fixed = t, n.tween.width = a, n.tween.height = l, n.tween.start = o, n.tween.end = o + l, n.tween.visible = h;
        const d = Math.max(flexbe_cli.resize.viewportHeight - n.tween.height, 0),
            b = 1 / n.tween.height * (flexbe_cli.scroll.latest - n.tween.start), _ = function () {
                const e = n.tween.start - flexbe_cli.resize.viewportHeight;
                return 1 / (n.tween.end - e) * (flexbe_cli.scroll.latest - e)
            }(), u = function () {
                const e = flexbe_cli.scroll.latest + flexbe_cli.resize.viewportHeight / 2,
                    t = n.tween.start + n.tween.height / 2;
                return (e - t + n.tween.height / 2) / n.tween.height
            }();
        n.tween.fix = d, n.tween.position = b, n.tween.positionAbs = _, n.tween.positionCenter = u;
        const p = h && u > 0 && u < 1, x = p || function () {
            if (n.tween.fixed) return !0;
            const e = Math.min(n.tween.height / 3, flexbe_cli.resize.viewportHeight / 4);
            return flexbe_cli.scroll.latest + flexbe_cli.resize.viewportHeight > n.tween.start + e && flexbe_cli.scroll.latest < n.tween.end - e
        }(), v = x || function () {
            if (n.tween.fixed) return !0;
            return n.tween.positionAbs >= 0 && n.tween.positionAbs <= 1
        }(), g = v || function () {
            if (n.tween.fixed) return !0;
            const e = flexbe_cli.resize.viewportHeight / 3;
            return flexbe_cli.scroll.latest + flexbe_cli.resize.viewportHeight > n.tween.start - e && flexbe_cli.scroll.latest < n.tween.end + e
        }();
        return f && n._onVisible({state: h}), !c && w && n._onResize({force: e}), n._onBeside({
            force: e,
            state: g
        }), n._onScreen({force: e, state: v}), n._onView({force: e, state: x}), n._onFocus({
            force: e,
            state: p
        }), n._sendEvent("tween", {tween: n.tween, force: e}), w
    }
}

class ModalCore extends EntityCore {
    constructor(s, t) {
        super(s, t), this.is = "modal", this.isOpen = !1, this.$modal = this.$area, this.$list = flexbe_cli.modal.$list
    }

    open({fromId: s, data: t, options: e = {}}) {
        if (this.isOpen) return;
        this.isOpen = !0, flexbe_cli.block.pushOverlay("modal", !0), this.lastOptions = e, this.lastScroll = flexbe_cli.scroll.latest;
        const i = this.$area.find(".modal-data > ._anchor").attr("name") || this.id;
        (e.hash || null == e.hash) && (this._prevHash = location.hash, flexbe_cli.lockPopstate = !0, history.pushState(null, null, `#${i}`), flexbe_cli.lockPopstate = !1), this.$area.addClass("show"), this.$list.addClass("show"), $("body").addClass("is-modal-open"), $(".w_cart.show").length && this.$list.addClass("rise"), setTimeout(() => {
            this.$list.addClass("overlay"), this._onOpen({data: t}), this._onBeside({state: !0}), this._onScreen({state: !0}), this._onView({state: !0}), this._onFocus({state: !0}), "function" == typeof e.onOpen && e.onOpen(this)
        }, 30), flexbe_cli.scroll.scrollLock.lock(), flexbe_cli.events.emit("modal_opened", {
            id: this.id,
            fromId: s,
            data: t,
            options: e
        })
    }

    close({openId: s} = {}) {
        if (!this.isOpen) return;
        const t = this.lastOptions, e = !s && !this.$area.siblings(".show").length;
        if (this.lastOptions = {}, this.isOpen = !1, flexbe_cli.block.removeOverlay("modal"), (t.hash || null == t.hash) && e && /^#{1,2}/.test(location.hash)) {
            const s = this._prevHash && this._prevHash !== location.hash ? this._prevHash : "#";
            flexbe_cli.lockPopstate = !0, history.replaceState(null, null, s), flexbe_cli.lockPopstate = !1
        }
        this.$area.removeClass("show"), e && (this.$list.removeClass("show rise overlay"), flexbe_cli.scroll.scrollLock.unlock()), flexbe_cli.run.is_screen_mobile_all && $("body, html").scrollTop(this.lastScroll), $("body").removeClass("is-modal-open"), this._onClose(), this._onBeside({state: !1}), this._onScreen({state: !1}), this._onView({state: !1}), this._onFocus({state: !1}), "function" == typeof t.onClose && t.onClose(this), flexbe_cli.events.emit("modal_closed", {
            id: this.id,
            openId: s
        })
    }

    updateTween({force: s} = {}) {
        if (!this.isOpen && !s) return;
        const t = this.area, e = t.offsetWidth, i = t.offsetHeight,
            o = null == this.tween.width && null == this.tween.height,
            l = s || e !== this.tween.width || i !== this.tween.height;
        return this.tween.width = e, this.tween.height = i, this.inited && (this._onVisible({
            force: s,
            state: this.isOpen
        }), !o && l && this._onResize({force: s}), this._onBeside({
            force: s,
            state: this.isOpen
        }), this._onScreen({force: s, state: this.isOpen}), this._onView({
            force: s,
            state: this.isOpen
        }), this._onFocus({force: s, state: this.isOpen}), this._sendEvent("tween", {tween: this.tween, force: s})), l
    }
}

class WidgetCore extends EntityCore {
    constructor(e, t) {
        super(e, t), this.is = "widget", this.$widget = this.$area
    }

    updateTween({force: e} = {}) {
        const t = this.area, i = t.offsetWidth, s = t.offsetHeight;
        let h;
        h = null != this.isOpen ? !!this.isOpen : !(!i && !s);
        const n = null == this.tween.width && null == this.tween.height,
            o = !!e || i !== this.tween.width || s !== this.tween.height;
        return this.tween.width = i, this.tween.height = s, this.inited && (this._onVisible({
            force: e,
            state: h
        }), !n && o && this._onResize({force: e}), this._onBeside({force: e, state: h}), this._onScreen({
            force: e,
            state: h
        }), this._onView({force: e, state: h}), this._onFocus({
            force: e,
            state: h
        }), this._sendEvent("tween", {tween: this.tween, force: e})), o
    }
}

class ElementCore extends EntityCore {
    constructor(t, e) {
        super(t, e);
        const i = this.$area.closest(".b_block, .m_modal, .w_widget"), n = this.$area.parent().closest("[data-is]"),
            s = this.$area.closest("[data-cloned]");
        this.is = "element", this.isClone = !!s.length && s.attr("data-cloned"), this.$container = this.$area.find("> .element-content").addBack().last(), this.container = this.$container[0], this.$root = i, this.root = i[0], this.$parent = n, this.parent = n[0]
    }

    _onInit(t) {
        super._onInit(t), this._inheritEvents()
    }

    _onUpdate(t) {
        this.$area.off(`.inherit.${this.id}`), this.$container = this.$area.find("> .element-content").addBack().last(), this.container = this.$container[0], super._onUpdate(t), this._inheritEvents()
    }

    _onDestroy(t) {
        super._onDestroy(t), this.$area.off(".inherit"), this.$parent.off(`.inherit.${this.id}`)
    }

    _inheritEvents() {
        const t = `.inherit.${this.id}.${this.isClone ? `clone${Number(this.isClone)}` : "original"}`;
        this.$parent.off(t), this.$parent.on(`tween${t}`, t => {
            this.updateTween(t.detail || {})
        }), ["onVisible"].forEach(e => {
            this.$parent.on(`${e}${t}`, () => {
                this.updateTween({})
            })
        }), ["onOpen", "onClose", "onDestroy"].forEach(e => {
            this.$parent.on(`${e}${t}`, (t, ...i) => {
                !i.length && t.detail && (i[0] = t.detail), this[`_${e}`](...i)
            })
        })
    }

    updateTween({force: t} = {}) {
        const e = this.container || this.area, i = this.parent && this.parent._core, n = this.root && this.root._core;
        if (!i) return;
        const s = null == this.tween.width && null == this.tween.height;
        let o = i.isVisible, h = i.inBeside, r = i.inScreen, a = i.inView, c = i.inFocus, l = !1;
        if (n && "block" === n.is && o && h) {
            const {top: i, bottom: n} = e.getBoundingClientRect(), s = e.offsetWidth, d = e.offsetHeight,
                f = flexbe_cli.resize.viewportHeight;
            if (o = !(!s && !d), l = t || s !== this.tween.width || d !== this.tween.height, this.tween.width = s, this.tween.height = d, o) {
                h = n > -f / 3 && i < f + f / 3, r = h && r && n > 0 && i < f, c = r && c && i <= f / 2 && i + d >= f / 2;
                const t = Math.min(d / 3, flexbe_cli.resize.viewportHeight / 4);
                a = c || r && a && i + t > 0 && n - t < f
            }
        }
        this.isVisible !== o && this._onVisible({
            force: t,
            state: o
        }), !s && l && this._onResize({force: t}), this._onBeside({force: t, state: h}), this._onScreen({
            force: t,
            state: r
        }), this._onView({force: t, state: a}), this._onFocus({
            force: t,
            state: c
        }), this._sendEvent("tween", {tween: this.tween, force: t})
    }
}

flexbe_cli.components = {
    instances: {}, classes: {}, helpers: {}, init() {
        const {instances: n} = this;
        this.initGlobals(), flexbe_cli.locale.init(), flexbe_cli.events.on("entity_event.components_init", (n, e = {}) => {
            if (!e.type || !e.core || !e.core.id) return !1;
            const t = e.core;
            ("onInit" === e.type || "onUpdate" === e.type && e.params.templateRendered) && this.initComponents({
                core: t,
                reason: e.type
            })
        }), $(window).off("load.core_components").one("load.core_components", () => {
            Object.values(n).forEach(n => {
                n.forEach(n => n._onPageLoad())
            })
        }), $(window).off("resized.core_components").on("resized.core_components", () => {
            Object.values(n).forEach(n => {
                n.forEach(n => n._onWindowResize())
            })
        })
    }, initGlobals() {
        flexbe_cli.components.classes.links.createGlobalInstance()
    }, initComponents({core: n, reason: e = "onInit"} = {}) {
        const {$area: t} = n, o = n.isClone ? `${n.id}_clone${n.isClone}` : n.id, s = n.components;
        let i = !1;
        if ("onUpdate" === e && Array.isArray(this.instances[o]) && this.instances[o].forEach(n => n.destroy()), !0 === s ? i = "[data-component]" : Array.isArray(s) && (i = s.map(n => `[data-component^="${n}"]`).join(", ")), i) {
            const s = t.find(i).addBack(i).toArray();
            this.instances[o] = s.map(t => {
                let o = [];
                const s = String(t.getAttribute("data-component")).trim(), [i, c] = s.split(":");
                if (c && (o = String(c).replace(/^\[|\]$/g, "").split(",")), t.componentInstance && "onInit" === e) return t.componentInstance;
                const a = this.classes[i];
                if ("function" == typeof a) {
                    const s = new a({args: o, component: t, core: n, reason: e});
                    if (s instanceof BaseComponent) return t.componentInstance = s, s._onInit(), s
                }
                return !1
            }).filter(n => n)
        } else this.instances[o] && delete this.instances[o]
    }
};
!function () {
    const s = new WeakMap, i = i => {
        const {is: t, component: e} = i;
        return s.has(e) || s.set(e, (() => Math.floor(999999999 * Math.random()))()), `.inherit.component.${t}-${s.get(e)}`
    };
    window.BaseComponent = class {
        constructor({component: s, core: i, reason: t}) {
            this.core = i, this.owner = i.area, this.root = i.root, this.component = s, this.$component = $(s), this.require = [], this.isPageLoaded = flexbe_cli.isLoaded || !1, this.isInited = !1, this.isUpdated = "onUpdate" === t, this.isLoaded = !1, this.isVisible = null, this.inScreen = !1, this.inBeside = !1, this.inView = !1, this.inFocus = !1, this.wasVisible = null, this.wasScreen = !1, this.wasBeside = !1, this.wasView = !1, this.wasFocus = !1
        }

        onInit() {
        }

        onLoad() {
        }

        onVisible() {
        }

        onScreen() {
        }

        onBeside() {
        }

        onView() {
        }

        onFocus() {
        }

        onPageLoad() {
        }

        onWindowResize() {
        }

        onResize() {
        }

        onOpen() {
        }

        onClose() {
        }

        onDestroy() {
        }

        _inheritEvents() {
            this._clearEvents();
            const s = i(this);
            this.core.$area.on(`tween${s}`, s => this._syncStates(s.detail)), this.core.$area.on(`onOpen${s}`, s => this._onOpen(s.detail)), this.core.$area.on(`onClose${s}`, s => this._onClose(s.detail))
        }

        _clearEvents() {
            const s = i(this);
            this.core.$area.off(s)
        }

        _syncStates({force: s} = {}) {
            const i = this.component.offsetWidth, t = this.component.offsetHeight,
                e = null == this.componentWidth || null == this.componentHeight, n = this.core.isVisible && !(!i && !t),
                o = this.core.inBeside && n, h = this.core.inScreen && n, a = this.core.inView && n,
                c = this.core.inFocus && n,
                r = s || n && (!e && this.componentWidth !== i || !e && this.componentHeight !== t);
            n && (this.componentWidth = i, this.componentHeight = t), n !== this.isVisible && this._onVisible({state: n}), r && this._onResize({force: s}), o !== this.inBeside && this._onBeside({
                state: o,
                force: s
            }), h !== this.inScreen && this._onScreen({
                state: h,
                force: s
            }), a !== this.inView && this._onView({state: a, force: s}), c !== this.inFocus && this._onFocus({
                state: c,
                force: s
            })
        }

        _onInit() {
            this.isInited = !0, this._inheritEvents(), this._syncStates(), "function" == typeof this.onInit && this.onInit(), flexbe_cli.require(this.require, () => {
                this._onLoad()
            })
        }

        _onLoad() {
            this.isLoaded = !0, "function" == typeof this.onLoad && this.onLoad()
        }

        _onVisible({state: s}) {
            if (null == this.isVisible) return this.isVisible = s, void (this.wasVisible = s);
            const i = s && !this.wasVisible;
            this.isVisible = s, this.onVisible({state: s, first: i}), s && (this.wasVisible = !0)
        }

        _onScreen({state: s}) {
            const i = s && !this.wasScreen;
            this.inScreen = s, this.onScreen({state: s, first: i}), s && (this.wasScreen = !0)
        }

        _onView({state: s}) {
            const i = s && !this.wasView;
            this.inView = s, this.onView({state: s, first: i}), s && (this.wasView = !0)
        }

        _onBeside({state: s}) {
            const i = s && !this.wasBeside;
            this.inBeside = s, this.onBeside({state: s, first: i}), s && (this.wasBeside = !0)
        }

        _onFocus({state: s}) {
            const i = s && !this.wasFocus;
            this.inFocus = s, this.onFocus({state: s, first: i}), s && (this.wasFocus = !0)
        }

        _onResize({force: s} = {}) {
            this.onResize({force: s})
        }

        _onOpen(s) {
            this.isOpen = !0, this._syncStates(), this.onOpen(s)
        }

        _onClose(s) {
            this.isOpen = !1, this._syncStates(), this.onClose(s)
        }

        _onPageLoad() {
            this.isPageLoaded = !0, this.onPageLoad()
        }

        _onWindowResize() {
            this.onWindowResize()
        }

        destroy() {
            this._clearEvents(), this.onDestroy()
        }
    }
}();
!function () {
    class i {
        constructor(i, t, e) {
            this.id = i, this.params = e, this.pending = !1, this.visible = !1, this.size = !1, this.imgSize = {
                w: 0,
                h: 0
            }, this.$outer = $(".parallax-outer", t), this.overlay = $(".overlay", t).get(0), this.canvas = $("canvas", this.$outer).get(0), this.offScreen = document.createElement("canvas"), this.overlayOpacity = +this.overlay.getAttribute("data-opacity"), this.factor = "parallax" === e.parallax || "parallax-fade" === e.parallax ? .3 : 0, this.zoomRatio = "zoom" === e.parallax || "zoom-return" === e.parallax ? .2 : 0, this.zoomType = "zoom" === e.parallax || "zoom-return" === e.parallax ? 2 : 0, this.zoomD = "zoom" === e.parallax ? .5 : "zoom-return" === e.parallax ? 1 : 0, this.fadeout = "parallax-fade" === e.parallax || "zoom-return" === e.parallax ? 1 : "zoom" === e.parallax ? .5 : 0;
            const s = window.devicePixelRatio >= 1.5 ? 1960 / window.devicePixelRatio : 1960, a = this.$outer.width(),
                o = this.$outer.height(), h = this.$outer[0].getBoundingClientRect().top + flexbe_cli.scroll.latest;
            this.blSize = {w: a <= s ? a : s}, this.blSize.r = this.blSize.w / a, this.blSize.h = this.blSize.r * o, this.blSize.y = this.blSize.r * h, this.winSize = {
                w: flexbe_cli.resize.viewportWidth * this.blSize.r,
                h: flexbe_cli.resize.viewportHeight * this.blSize.r
            }, this.offCtx = this.offScreen.getContext("2d", {alpha: !1}), this.canvas.width = 0, this.canvas.height = 0, this.ctx = this.canvas.getContext("2d", {alpha: !1}), this.img = document.createElement("img"), this.position = {
                x: +this.$outer.data("bg-pos-x").replace("%", "") / 100,
                y: +this.$outer.data("bg-pos-y").replace("%", "") / 100
            }, this.dispatchEvents(), this.img.onload = () => {
                this.loaded = !0, this.imgSize = {
                    w: this.img.width,
                    h: this.img.height
                }, this.imgSize.r = this.imgSize.h / this.imgSize.w, this.updateCanvasSource(), setTimeout(() => {
                    this.$outer.addClass("ready")
                }, 30)
            }, this.img.src = this.$outer.attr("data-image")
        }

        dispatchEvents() {
            $(window).off(`scroll.component-bg-${this.id}`).on(`scroll.component-bg-${this.id}`, () => {
                this.pending || flexbe_cli.scroll.skip || (this.pending = !0, this.updateInst())
            }), $(document).off(`documentresized.bg_${this.id}`).on(`documentresized.bg_${this.id}`, () => {
                this.updateCanvasSource()
            }), flexbe_cli.events.off(`entity_render.bg_${this.id}`).on(`entity_render.bg_${this.id}`, (i, t) => {
                t.styleRendered && t.entity && t.entity.id == this.id && (this.overlayOpacity = t.entity.data.background.opacity / 100, this.pending || (this.pending = !0, this.updateInst()))
            }), flexbe_cli.events.off(`layout_change.bg_${this.id}`).on(`layout_change.bg_${this.id}`, () => {
                this.updateCanvasSource()
            })
        }

        toggleRendering(i) {
            if ("boolean" != typeof i) return !1;
            i !== this.visible && (this.visible = i)
        }

        getCosPoint(i, t, e = 1) {
            return 1 - i > e && (i = e), (1 - Math.cos(Math.PI * i * t)) / 2
        }

        getZoomCoords(i) {
            const t = 1 === this.zoomType ? i : -1 === this.zoomType ? 100 - i : 2 === this.zoomType ? 100 - 100 * this.getCosPoint(.01 * i, 2, this.zoomD) : 0,
                e = {ratio: this.zoomRatio / 100 * t};
            return e.w = this.blSize.w * (1 + e.ratio), e.h = this.blSize.h * (1 + e.ratio), e.x = (e.w - this.canvas.width) / 2, e.y = (e.h - this.blSize.h) / 2, e
        }

        draw(i, t) {
            let e;
            if (this.fadeout && (e = 1 - (1 - this.overlayOpacity) * this.getCosPoint(.01 * t, 2, this.fadeout)), this.zoomRatio) {
                const s = this.getZoomCoords(t);
                requestAnimationFrame(() => {
                    this.overlay.style.opacity = e, this.ctx.drawImage(this.offScreen, Math.ceil(-1 * s.x), Math.ceil(i * this.factor - this.winSize.h * this.factor - s.y), s.w, s.h), this.pending = !1
                })
            } else {
                const t = Math.ceil((i - this.winSize.h) * this.factor);
                requestAnimationFrame(() => {
                    this.overlay.style.opacity = e, this.ctx.drawImage(this.offScreen, 0, t), this.pending = !1
                })
            }
        }

        updateInst() {
            if (this.winSize.y = window.pageYOffset / flexbe_cli.resize.zoom * this.blSize.r, this.winSize.y + this.winSize.h > this.blSize.y - 200 && this.winSize.y < this.blSize.y + this.blSize.h + 200) {
                this.toggleRendering(!0);
                const i = this.winSize.y + this.winSize.h - this.blSize.y,
                    t = 100 - i / (this.blSize.h + this.winSize.h) * 100;
                this.draw(i, t)
            } else this.toggleRendering(!1), this.pending = !1
        }

        prerender() {
            this.loaded && (this.fitToOuter(), this.offScreen.width = this.blSize.w, this.offScreen.height = this.zoomRatio ? this.blSize.h : Math.ceil(this.size.offH), this.drawOffscreenImage(this.position.x, this.position.y))
        }

        updateCanvasSource() {
            this.prerender(), this.updateInst()
        }

        drawOffscreenImage(i, t) {
            (i = "number" == typeof i ? i : .5) < 0 && (i = 0), (t = "number" == typeof t ? t : .5) < 0 && (t = 0), i > 1 && (i = 1), t > 1 && (t = 1);
            const e = this.offCtx.canvas.width, s = this.offCtx.canvas.height;
            let a, o, h, r;
            s / e <= this.imgSize.r ? (h = e, r = e * this.imgSize.r, a = 0, o = (r - s) * t * -1) : (r = s, h = s / this.imgSize.r, o = 0, a = (h - e) * i * -1), this.offCtx.drawImage(this.img, a, o, h, r)
        }

        fitToOuter() {
            const i = window.devicePixelRatio >= 1.5 ? 1600 : 1960;
            this.blSize = {w: this.$outer.width() <= i ? this.$outer.width() : i}, this.blSize.r = this.blSize.w / this.$outer.width(), this.blSize.h = this.blSize.r * this.$outer.height(), this.blSize.y = this.blSize.r * (this.$outer[0].getBoundingClientRect().top + flexbe_cli.scroll.latest), this.winSize = {
                w: flexbe_cli.resize.viewportWidth * this.blSize.r,
                h: flexbe_cli.resize.viewportHeight * this.blSize.r
            }, this.canvas.width = this.blSize.w, this.canvas.height = this.blSize.h, this.canvas.style.transform = `scale(${1 / this.blSize.r})`;
            const t = Math.max(this.winSize.h, this.blSize.h),
                e = t - (t - Math.min(this.winSize.h, this.blSize.h)) * (this.blSize.h > this.winSize.h ? this.factor : 1 - this.factor),
                s = e / this.blSize.w;
            let a;
            a = this.imgSize.r >= s ? {w: this.blSize.w, h: this.blSize.w * this.imgSize.r} : {
                h: e,
                w: e / this.imgSize.r
            }, a.offH = e, a.x = (a.w - this.blSize.w) / 2, this.size = a
        }

        destroy() {
            this.destroyed = !0, $(window).off(`resize.${this.id} documentresize.${this.id}`), $(window).off(`scroll.component-bg-${this.id}`), flexbe_cli.events.off(`entity_render.bg_${this.id}`), this.$outer.removeClass("ready"), this.offScreen.remove(), this.img.remove()
        }
    }

    class t extends BaseComponent {
        constructor(...i) {
            super(...i);
            const {$component: t} = this;
            this.is = "background", this.data = {
                type: t.data("type") || "color",
                parallax: t.data("parallax") || 0,
                video: t.data("video") || !1,
                mobileVideoEnabled: t.data("mobileVideoEnabled"),
                videoParallaxFactor: .6
            }
        }

        onScreen({state: i}) {
            if (this.videoInstance && (i ? this.videoInstance.play() : this.videoInstance.pause()), this.onscreen = !!i, !i || this.played) return !1;
            this.playVideo()
        }

        onBeside({state: i, first: t}) {
            i && t && (this.loadImage(), this.imageParallaxInit(), this.videoParallaxInit()), this.played || this.playVideo()
        }

        onResize() {
            if (this.bgEffect && setTimeout(() => {
                this.bgEffect.updateCanvasSource()
            }, 150), "video" === this.data.type) if (this.videoInstance) {
                if (this.videoInstance.resize(), setTimeout(() => {
                    this.videoInstance.resize()
                }, 150), this.data.parallax && this.fixHolder && this.setParallax) return void setTimeout(() => {
                    this.fixHolder(), this.setParallax()
                }, 100)
            } else this.fixHolder && this.fixHolder()
        }

        loadImage() {
            if (flexbe_cli.is_admin) return;
            const {$component: i} = this, t = i.find(".image, .parallax-outer"), e = t.find(".loader-image"),
                s = e.attr("data-src");
            let a;
            if (s) {
                const i = new Image;
                i.onload = o, i.src = s, a = setTimeout(o, 1e3)
            }

            function o() {
                clearTimeout(a), t.css("backgroundImage", ""), i.removeClass("loading"), setTimeout(() => {
                    e.remove()
                }, 300)
            }
        }

        imageParallaxInit() {
            if ("image" !== this.data.type || !this.data.parallax || flexbe_cli.run.is_screenshoter) return !1;
            const {owner: t, $component: e, data: s} = this, a = t._core && t._core.id || t.getAttribute("data-id");
            "object" == typeof t._bgEffects && t._bgEffects.destroy(), "fixed" != this.data.parallax && (t._bgEffects = new i(a, e, s), this.bgEffect = t._bgEffects)
        }

        videoParallaxInit() {
            if ("video" !== this.data.type || !this.data.parallax || !this.owner._core || flexbe_cli.run.is_screenshoter) return !1;
            const i = $(".image-holder, .video_bg_container", this.$component), t = i.find(".image"),
                e = i.find(".video_bg_player"), s = this.owner._core;
            let a = !1;
            const o = () => flexbe_cli.resize.viewportHeight < s.tween.height ? s.tween.height + 60 : flexbe_cli.resize.viewportHeight + 60;
            this.fixHolder = () => {
                "parallax" === this.data.parallax && i.css("height", `${o()}px`)
            }, this.setParallax = () => {
                const i = s.$area[0].getBoundingClientRect().top + flexbe_cli.scroll.latest;
                let a, h = flexbe_cli.resize.viewportWidth / flexbe_cli.resize.viewportHeight * window.devicePixelRatio;
                h >= 1.6 && (h = 2.3), "fixed" === this.data.parallax ? a = 0 : "parallax" === this.data.parallax && (a = 1 - (1 - this.data.videoParallaxFactor) * (o() / flexbe_cli.resize.viewportHeight), a < .1 && (a = this.data.videoParallaxFactor / 2));
                const r = parseInt((flexbe_cli.scroll.latest - i) * -a, 10) || 0;
                t.css("transform", `translate3d(0, ${r}px, 0)`), e.css("transform", `translate3d(0, ${r}px, 0)`)
            }, this.fixHolder(), this.setParallax(), s.$area.off("fixHeaderHeight.component-bg").on("fixHeaderHeight.component-bg", () => {
                this.setParallax()
            }), $(window).off(`scroll.component-bg-${s.id}`).on(`scroll.component-bg-${s.id}`, () => {
                !a && this.onscreen && (a = !0, requestAnimationFrame(() => {
                    this.setParallax(), a = !1
                }))
            })
        }

        playVideo() {
            if (flexbe_cli.run.is_screen_mobile_all && !this.data.mobileVideoEnabled) return !1;
            this.played = !0;
            const {data: i} = this, {video: t} = i;
            return !("video" !== i.type || !t) && (!("custom" !== t.type && !t.id) && (this.videoInstance = new flexbe_cli.components.classes.VideoBackground(this, t, () => {
                this.videoParallaxInit()
            }), !0))
        }

        destroyVideo() {
            const {$component: i} = this;
            i.data("ytPlayer") && i.data("ytPlayer").destroy(), i.removeData("video_bg_played")
        }
    }

    flexbe_cli.components.classes.background = t
}();
!function () {
    class t extends BaseComponent {
        constructor(...t) {
            super(...t), this.is = "timer"
        }

        onInit() {
            this.$timer = this.$component.find(".timer"), this.data = this.$timer.data("time"), this.initTimer()
        }

        initTimer() {
            const t = this.$timer, e = this.data, i = new Date;
            if ("date" === e.type) {
                const t = e.my ? String(e.my).replace(".", "/").split("/") : [1, 2018];
                this.finalDate = new Date(t[1], parseInt(t[0], 10) - 1, e.d, e.h, e.m)
            } else if ("monthly" === e.type) this.finalDate = new Date(i.getFullYear(), i.getMonth(), e.d, e.h, e.m), i.getTime() > this.finalDate.getTime() && (this.finalDate = new Date(i.getFullYear(), i.getMonth() + 1, e.d, e.h, e.m)), parseInt(e.d, 10) != this.finalDate.getDate() && (this.finalDate.setDate(0), i.getTime() > this.finalDate.getTime() && (this.finalDate = new Date(this.finalDate.getFullYear(), this.finalDate.getMonth() + 2, 0, e.h, e.m))); else if ("weekly" === e.type) {
                const t = parseInt(i.getDate(), 10) - parseInt(i.getDay(), 10) + parseInt(e.dw, 10);
                this.finalDate = new Date(i.getFullYear(), i.getMonth(), t, e.h, e.m), i.getTime() > this.finalDate.getTime() && this.finalDate.setDate(this.finalDate.getDate() + 7)
            } else "daily" === e.type ? (this.finalDate = new Date(i.getFullYear(), i.getMonth(), i.getDate(), e.h, e.m), i.getTime() > this.finalDate.getTime() && this.finalDate.setDate(this.finalDate.getDate() + 1)) : (this.finalDate = new Date, this.finalDate.setMonth(this.finalDate.getMonth() + 1, 15));
            this.$itemDay1 = t.find(".d [data-value]").eq(0), this.$itemDay2 = t.find(".d [data-value]").eq(1), this.$itemDay3 = t.find(".d [data-value]").eq(2), this.$itemHour1 = t.find(".h [data-value]").eq(0), this.$itemHour2 = t.find(".h [data-value]").eq(1), this.$itemMinute1 = t.find(".m [data-value]").eq(0), this.$itemMinute2 = t.find(".m [data-value]").eq(1), this.$itemSecond1 = t.find(".s [data-value]").eq(0), this.$itemSecond2 = t.find(".s [data-value]").eq(1), this.lastOffset = {
                d: void 0,
                h: void 0,
                m: void 0,
                s: void 0
            }, !flexbe_cli.is_admin && "none" !== this.data.on_expired && this.finalDate.getTime() < i.getTime() ? "element" === this.data.on_expired ? $(this.owner).hide() : $(this.root).hide() : this.start()
        }

        tick() {
            if (this.secondLeft = this.finalDate.getTime() - (new Date).getTime(), this.secondLeft = Math.ceil(this.secondLeft / 1e3), this.secondLeft = this.secondLeft < 0 ? 0 : this.secondLeft, this.offset = {
                d: Math.floor(this.secondLeft / 60 / 60 / 24),
                h: Math.floor(this.secondLeft / 60 / 60) % 24,
                m: Math.floor(this.secondLeft / 60) % 60,
                s: this.secondLeft % 60
            }, this.lastOffset.d !== this.offset.d) {
                const t = this.offset.d.toString().split("");
                t.length < 2 && t.unshift(0), t.length < 3 && t.unshift(0), this.$itemDay1.attr("data-value", t[0]).text(t[0]), this.$itemDay2.attr("data-value", t[1]).text(t[1]), this.$itemDay3.attr("data-value", t[2]).text(t[2])
            }
            if (this.lastOffset.h !== this.offset.h) {
                const t = this.offset.h.toString().split("");
                t.length < 2 && t.unshift(0), this.$itemHour1.attr("data-value", t[0]).text(t[0]), this.$itemHour2.attr("data-value", t[1]).text(t[1])
            }
            if (this.lastOffset.m !== this.offset.m) {
                const t = this.offset.m.toString().split("");
                t.length < 2 && t.unshift(0), this.$itemMinute1.attr("data-value", t[0]).text(t[0]), this.$itemMinute2.attr("data-value", t[1]).text(t[1])
            }
            if (this.lastOffset.s !== this.offset.s) {
                const t = this.offset.s.toString().split("");
                t.length < 2 && t.unshift(0), this.$itemSecond1.attr("data-value", t[0]).text(t[0]), this.$itemSecond2.attr("data-value", t[1]).text(t[1])
            }
            this.lastOffset = this.offset, this.secondLeft < 0 && this.stop()
        }

        start() {
            this.tick(), clearInterval(this.interval), this.interval = setInterval(() => {
                this.tick()
            }, 200)
        }

        stop() {
            clearInterval(this.interval)
        }
    }

    flexbe_cli.components.classes.timer = t
}();
!function () {
    class t extends BaseComponent {
        constructor(...t) {
            super(...t), this.is = "video", this.type = this.$component.data("type"), this.autoplay = !!+this.$component.data("autoplay"), this.$preview = this.$component.find(".video-preview"), this.$iframe = this.$component.find("iframe"), this.$video = this.$component.find(".custom-video"), this.hasPreview = this.$preview.length, this.frameLoaded = !1, this.autoSet = !this.hasPreview, this.$preview.on("click", () => {
                this.set(), this.play(!0)
            }), this.$component.off("sliderActivate").on("sliderActivate", () => {
                this.preventAutoplay = !1, this.inScreen && this.autoSet && (this.set(), this.autoplay && this.play())
            }), this.$component.off("sliderDeactivate").on("sliderDeactivate", () => {
                this.preventAutoplay = !0, this.pause()
            })
        }

        onScreen({state: t}) {
            t ? ((this.autoplay || this.autoSet) && this.set(), this.autoplay && !this.preventAutoplay && this.play()) : this.pause()
        }

        set() {
            this.isSet || (this.isSet = !0, "youtube" === this.type ? this.initYoutube() : "vimeo" === this.type ? this.initVimeo() : this.initCustom())
        }

        initCustom() {
            this.$component.addClass("loading");
            const t = this.$video[0], e = t.getAttribute("data-src"), i = t.getAttribute("src");
            if (e && !i) {
                const i = document.createElement("source");
                t.addEventListener("error", console.error), t.addEventListener("playing", () => this.onPlay()), t.addEventListener("pause", () => this.onPause()), i.addEventListener("error", console.error), i.setAttribute("type", "video/mp4"), i.setAttribute("src", e), t.appendChild(i), t.load()
            }
        }

        initVimeo() {
            this.$component.addClass("loading");
            const t = this.$iframe[0], e = t.getAttribute("data-src"), i = t.getAttribute("src");
            e && !i && (t.src = e), flexbe_cli.require(["https://player.vimeo.com/api/player.js"], () => {
                this.vPlayer = new window.Vimeo.Player(t), this.onFrameLoaded(() => {
                    this.$component.addClass("loaded"), this.frameLoaded = !0
                }), this.vPlayer.on("bufferstart", () => {
                    this.vPlayer.off("bufferstart"), this.$component.addClass("started")
                }), this.vPlayer.on("play", () => {
                    this.onPlay()
                }), this.vPlayer.on("pause", () => {
                    this.onPause()
                })
            })
        }

        initYoutube() {
            this.$component.addClass("loading");
            const t = this.$iframe[0], e = t.getAttribute("data-src"), i = t.getAttribute("src");
            this.onFrameLoaded(() => {
                this.$component.addClass("loaded");
                const e = t => {
                    t !== window.YT.PlayerState.BUFFERING && t !== window.YT.PlayerState.PLAYING || this.$component.addClass("started"), t === window.YT.PlayerState.PLAYING ? this.onPlay() : t !== window.YT.PlayerState.PAUSED && t !== window.YT.PlayerState.ENDED || this.onPause()
                };
                flexbe_cli.require([`https://www.youtube.com/iframe_api?origin=${window.location.host}`], () => {
                    ((t, e) => {
                        if ("function" != typeof e || "function" != typeof t) return !1;
                        if (t()) e(); else {
                            const i = setInterval(() => {
                                t() && (clearInterval(i), e())
                            }, 10)
                        }
                    })(() => window.YT && window.YT.Player, () => {
                        this.ytVideo = new window.YT.Player(t, {
                            events: {
                                onStateChange: t => {
                                    e(t.data)
                                }, onReady: () => {
                                    e(this.ytVideo.getPlayerState())
                                }
                            }
                        })
                    })
                })
            }), e && !i && (t.src = e)
        }

        play(t = !1) {
            this.isAutoplayed = !t, this.isPaused = !1, this.onFrameLoaded(() => {
                if ("custom" === this.type) this.$video[0].play(); else if ("vimeo" === this.type && this.vPlayer) this.vPlayer.play(); else if ("youtube" === this.type) {
                    const t = this.$iframe[0];
                    (t && t.contentWindow).postMessage('{"event":"command","func":"playVideo","args":""}', "*")
                }
                this.hasPreview && this.$preview.fadeOut(150, () => {
                    this.$preview.remove()
                })
            }), this.hasPreview && this.$preview.off("click").addClass("preloading")
        }

        pause() {
            this.isAutoplayed = !1, this.isPaused = !0, this.onFrameLoaded(() => {
                try {
                    if ("custom" === this.type) this.$video[0].pause(); else if ("vimeo" === this.type && this.vPlayer) this.vPlayer.pause(); else if ("youtube" === this.type) {
                        const t = this.$iframe[0];
                        (t && t.contentWindow).postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                    }
                } catch (t) {
                }
            })
        }

        onFrameLoaded(t = (() => {
        })) {
            this.frameLoaded ? t() : "custom" === this.type ? this.$video.one("canplaythrough", () => {
                this.frameLoaded = !0, t()
            }) : this.$iframe.one("load", () => {
                this.frameLoaded = !0, t()
            })
        }

        onPlay() {
            this.autoplay && this.isAutoplayed || (this._sliderAutoplayPrevented = !0, this.$component.trigger("preventSliderAutoplay", {state: !0}))
        }

        onPause() {
            this._sliderAutoplayPrevented && (this._sliderAutoplayPrevented = !1, this.$component.trigger("preventSliderAutoplay", {state: !1}))
        }
    }

    flexbe_cli.components.classes.video = t
}();
!function () {
    const t = {};

    class e extends BaseComponent {
        constructor(...t) {
            super(...t), this.is = "image"
        }

        onInit() {
            this.isUpdated && (this.create(), this.load()), this.$component.off(".componentImage").on("setImage.componentImage sliderActivate.componentImage", $.debounce(() => {
                this.isCreated || this.create(), this.autoLoad = !0, this.lazyLoad = !0, this.inBeside && !this.isImgLoaded && this.load()
            }, 10))
        }

        onBeside({state: t}) {
            if (!t) return !1;
            this.isCreated || this.create(), this.autoLoad && this.lazyLoad && !this.isImgLoaded && this.load()
        }

        onResize() {
            this.setOverlay()
        }

        create() {
            this.isCreated = !0, this.lazyLoad = !!+this.$component.attr("data-img-lazy"), this.autoLoad = !!+this.$component.attr("data-img-autoload"), this.isImgLoaded = !!+this.$component.attr("data-img-loaded"), this.params = {}, this.img = this.$component.find("img").get(0), this.layer = this.$component.find("[data-img-layer]").get(0) || this.component, this.overlay = this.$component.find(".overlay-container").get(0), this.updateParams(), this.img && (this.isImgLoaded || !this.autoLoad || this.lazyLoad || this.load())
        }

        async load(e = !1) {
            if (this.isCreated || this.create(), !e && (this.isImgLoaded || this.loading)) return;
            let i;
            this.loading = !0, this.setOverlay();
            const a = this.params, {componentWidth: s, componentHeight: o} = this;
            if (!a.original_resolution) {
                const e = await flexbe_cli.helpers.getImageProportion(a);
                a.proportion = e, t[this.params.id] && (t[this.params.id].proportion = e), i = (await flexbe_cli.helpers.getImageOptimalSize(this.params, {
                    width: s,
                    height: o
                })).width
            }
            const r = flexbe_cli.helpers.getImageUrl(a, i);
            if (flexbe_cli.is_admin) this.setImage(r); else {
                const t = setTimeout(() => {
                    this.setImage(r)
                }, 1500);
                await flexbe_cli.helpers.preloadImage(r), this.setImage(r), clearTimeout(t)
            }
            this.loading = !1, this.$component.trigger("load")
        }

        setImage(t) {
            const e = this.params;
            if (t || (t = flexbe_cli.helpers.getImageUrl(e)), this.isImgLoaded || (this.isImgLoaded = !0, requestAnimationFrame(() => {
                this.$component.removeClass("loading")
            })), this.img && this.img.src === t) return !1;
            if (this.img && (this.img.src = t), "background" === e.type) {
                const e = `url(${t})`;
                this.layer.style.backgroundColor = "", this.layer.style.backgroundImage = e
            }
        }

        setOverlay() {
            const {overlay: t, componentWidth: e, componentHeight: i} = this;
            if (!t) return;
            let a = "medium";
            e <= 200 || i <= 150 ? a = "xsmall" : e <= 400 || i <= 250 ? a = "small" : e >= 650 && i >= 400 && (a = "large"), t.setAttribute("data-size", a), "hover" === t.getAttribute("data-type") && $(t).on("mouseenter mouseleave touchstart touchend", e => {
                const i = /enter|start/.test(e.type);
                $(t).toggleClass("hover", i)
            })
        }

        updateParams() {
            let {params: e} = this;
            const {component: i, img: a} = this;
            if (!e.id) {
                const a = i.getAttribute("data-img-id");
                if (t[a]) e = Object.assign({}, t[a]); else {
                    e.id = a, e.ext = i.getAttribute("data-img-ext"), e.name = i.getAttribute("data-img-name"), e.proportion = +i.getAttribute("data-img-proportion");
                    const t = e.name.match(/\.(\D{2,4})$/i) || [];
                    t[1] && e.ext !== t[1] && (e.ext = t[1] || !1)
                }
                e.x = i.getAttribute("data-img-x"), e.y = i.getAttribute("data-img-y"), e.type = i.getAttribute("data-img-type"), e.action = i.getAttribute("data-action")
            }
            return !e.proportion && a && a.src && (e.proportion = a.naturalHeight / a.naturalWidth * 100), e.scale = i.getAttribute("data-img-scale") || "cover", e.original_resolution = +i.getAttribute("data-original-resolution"), t[e.id] || (t[e.id] = Object.assign({}, e)), this.params = e, e
        }
    }

    flexbe_cli.components.classes.image = e
}();
flexbe_cli.components.classes.rangeInput = class {
    constructor(t) {
        if (this.$legend = t.find(".range-legend"), this.$component = t.find(".range-outer"), this.$input = t.find("input"), this.startEdge = this.$component.data("start"), this.isDouble = !!this.$component.data("double"), this.endEdge = this.$component.data("end"), this.range = this.endEdge - this.startEdge, this.barWidth = this.$component.width(), this.step = this.$component.data("step") || 1, this.steps = Math.round(this.range / this.step), this.legendType = this.$legend.data("type"), this.legendText = 1 == +this.$legend.data("text"), this.animated = !0, this.duration = this.steps < 10 && 1 / this.steps * 300, this.fractExponent = Math.max(this.getFract(this.startEdge), this.getFract(this.endEdge), this.getFract(this.step)), this.fractDevider = Math.pow(10, this.fractExponent), this.$value = $(".range-value", this.$component), this.$endRunner = $(".range-runner-right", this.$component), this.$endRunnerTip = $(".runner-tip", this.$endRunner), this.$endRunnerValue = $(".value", this.$endRunner), this.endRunnerWidth = this.$endRunner.width(), this.$startRunner = $(".range-runner-left", this.$component), this.$startRunnerValue = $(".value", this.$startRunner), this.$startRunnerTip = $(".runner-tip", this.$startRunner), this.startRunnerWidth = this.$startRunner.width(), this.maxAllowedLeft = 20, this.maxAllowedRight = flexbe_cli.resize.viewportWidth - 20, this.defaultShift = this.$endRunner.width() / 2, this.activeRunner = !1, this.isDouble) {
            const t = this.$input.data("value").split(" — ");
            this.startValue = +t[0], this.endValue = +t[1]
        } else this.endValue = +this.$input.data("value"), this.startValue = +this.startEdge;
        this.endParams = {}, this.drawLegend(), this.updateTooltip(this.$startRunnerTip), this.updateTooltip(this.$endRunnerTip), this.setEvents(), this.setRunnersValue()
    }

    formatN(t) {
        return `${t < 0 ? "-" : ""}${flexbe_cli.locale.formatNumber(t, this.fractExponent)}`
    }

    getFract(t) {
        const e = `${t}`.split(".");
        return e[1] && e[1].length || 0
    }

    drawLegend() {
        if (this.legendText) return !1;
        const t = this.$legend.find(".from"), e = this.$legend.find(".to");
        if (t.text(this.formatN(this.startEdge)), e.text(this.formatN(this.endEdge)), "complex" !== this.legendType) return !1;
        this.$legend.find(".legend-point:not(.from, .to)").off("click").remove(), this.$legend.removeClass("complex").addClass("limits");
        const s = [`${this.formatN(this.startEdge)}`.length, `${this.formatN(this.endEdge)}`.length, `${this.formatN(this.step)}`.length],
            n = (s[0] + s[1] + s[2]) / 3, i = Math.max(this.startEdge, this.endEdge),
            a = [5 * this.step * this.fractDevider / this.fractDevider];
        for (let t = 1; t <= 12; t += 1) {
            const e = 10 ** t * this.step;
            e < i && c(a, e, this.fractDevider)
        }
        let h;
        const r = Math.ceil(this.$legend.find(s[0] > s[1] ? ".from" : ".to").width() / Math.max(s[1], s[0])),
            o = Math.round(.83 * this.barWidth / (r * n)), u = this.range > 0 ? 1 : -1;
        for (let t = Math.min(o, 10); t >= 3; t -= 1) {
            const e = l(this.step, Math.abs(this.steps), t, a);
            if (e && Number.isInteger(e / this.step) && Number.isInteger(this.range / e)) {
                h = e;
                break
            }
        }
        if (!h || !Number.isInteger(this.range / (h * u)) || this.range / (h * u) < 3) for (let t = Math.min(Math.round(this.range / this.step), o, 10); t >= 2; t -= 1) {
            const e = this.roundFraction(this.range / t);
            if (e % this.step == 0) {
                h = e * u;
                break
            }
        }
        const d = this.roundFraction(this.range / (h * u));
        if (h && Number.isInteger(d)) {
            const t = [];
            for (let e = 1; e < d; e += 1) {
                const s = Math.round((this.startEdge + h * e * u) * this.fractDevider) / this.fractDevider;
                t.push(`<div class="legend-point" data-value="${s}">${this.formatN(s)}</div>`)
            }
            d > 2 && (this.$legend.attr("data-count", d), this.$legend.removeClass("limits").addClass("complex"));
            const e = $(t.join(""));
            this.$legend.find(".from").after(e)
        } else this.$legend.removeClass("complex").addClass("limits");

        function l(t, e, s, n) {
            return n.includes(e / s * t) ? e / s * t : n.includes((e + 1) / s * t) ? (e + 1) / s * t : n.includes((e + 2) / s * t) ? (e + 2) / s * t : n.includes((e + 3) / s * t) ? (e + 3) / s * t : n.includes((e + 4) / s * t) ? (e + 4) / s * t : n.includes((e + 5) / s * t) ? (e + 5) / s * t : n.includes((e + 6) / s * t) ? (e + 6) / s * t : n.includes((e + 7) / s * t) ? (e + 7) / s * t : n.includes((e + 8) / s * t) ? (e + 8) / s * t : !!n.includes((e + 9) / s * t) && (e + 9) / s * t
        }

        function c(t, e, s) {
            for (let n = 1; n < 10; n += 1) t.push(Math.round(e * n * s) / s), t.push(Math.round(e * n * s + e / 2) / s)
        }

        this.$legend.find(".legend-point:not(.to), .legend-point:not(.from)").each((t, e) => {
            $(e).on("click", () => {
                if (this.updateBarWidth(), this.isDouble) {
                    const t = (this.startValue + this.endValue) / 2, s = +$(e).data("value"),
                        n = this.startEdge < this.endEdge ? 1 : -1;
                    s * n >= t * n ? this.endValue = s : this.startValue = s
                } else this.endValue = $(e).data("value");
                this.setRunnersValue()
            })
        })
    }

    roundFraction(t) {
        return Math.round(1e10 * t) / 1e10
    }

    setRunnersValue(t = !1) {
        if (!Number.isFinite(this.endValue) || !Number.isFinite(this.range) || this.isDouble && !Number.isFinite(this.startValue)) return !1;
        const e = this.startEdge < this.endEdge ? 1 : -1;
        "start" === this.activeRunner ? this.startValue * e <= this.startEdge * e ? this.startValue = this.startEdge : this.startValue * e >= this.endValue * e && (this.startValue = this.endValue) : this.endValue * e >= this.endEdge * e ? this.endValue = this.endEdge : this.endValue * e <= this.startValue * e && (this.endValue = this.startValue);
        const s = this.isDouble ? this.startValue : this.startEdge,
            n = this.isDouble ? (this.startValue - this.startEdge) / (this.range / 100) : 0,
            i = (this.endValue - s) / (this.range / 100);
        this.endValue = Math.round(this.endValue * this.fractDevider) / this.fractDevider, this.startValue = Math.round(this.startValue * this.fractDevider) / this.fractDevider, requestAnimationFrame(() => {
            this.$endRunnerValue.text(this.formatN(this.endValue)), this.$startRunnerValue.text(this.formatN(this.startValue))
        }), "end" === this.activeRunner ? this.updateTooltip(this.$endRunnerTip) : this.updateTooltip(this.$startRunnerTip), this.$value.css({
            width: `${i}%`,
            marginLeft: `${n}%`
        }), t || (this.isDouble ? this.$input.val(`${this.startValue} — ${this.endValue}`) : this.$input.val(this.endValue))
    }

    updateTooltip(t) {
        const e = t.closest(".range-runner");
        if (e && e.length) {
            const e = t.innerWidth(),
                s = t.closest(".range-runner")[0].getBoundingClientRect().left + this.startRunnerWidth / 2;
            let n;
            n = e / 2 > s + this.maxAllowedLeft ? e / 2 - (s - this.maxAllowedLeft) : e / 2 + s > this.maxAllowedRight ? this.maxAllowedRight - s - e / 2 : 0, t.css({transform: `translateX(${n}px)`})
        }
    }

    getValueFromLength(t) {
        const e = this.range / (this.barWidth / t);
        return (Math.round(e / this.step) + this.startEdge / this.step) * this.step
    }

    applyEndPosition(t) {
        return this["start" === this.activeRunner ? "startValue" : "endValue"] = this.getValueFromLength(t), this.setRunnersValue(), !0
    }

    touchHendler(t) {
        if (!this.endParams.active || 1 !== t.touches.length) return $("body")[0].removeEventListener("touchmove", this.touchHendler), !1;
        this.toggleAnimation(!1), t.preventDefault(), t.stopPropagation();
        const e = t.touches[0].pageX - this.endParams.left - this.endParams.shift;
        this.applyEndPosition(e)
    }

    startWatchingEvents(t = this.defaultShift) {
        this.endParams = {
            active: !0,
            left: this.$component.offset().left,
            shift: t
        }, clearTimeout(this.calmRunnersTimeout), "end" === this.activeRunner ? this.$endRunner.addClass("active") : this.$startRunner.addClass("active")
    }

    toggleAnimation(t) {
        t ? Math.abs(this.barWidth / this.steps) < 15 ? this.$component.addClass("animated") : (this.$component.removeClass("active-animation"), this.duration && this.$component.removeClass(`animation-speed-${12 - Math.abs(Math.round(this.steps))}`)) : Math.abs(this.barWidth / this.steps) < 15 ? this.$component.removeClass("animated") : (this.$component.addClass("active-animation"), this.duration && this.$component.addClass(`animation-speed-${12 - Math.abs(Math.round(this.steps))}`))
    }

    afterRunnerReleased() {
        this.endParams.active && ("start" === this.activeRunner ? this.$startRunner.focus() : this.$endRunner.focus()), this.endParams.active = !1, this.debounceActive(), this.barWidth / this.steps < 15 ? this.$component.addClass("animated") : this.$component.removeClass("active-animation"), this.toggleAnimation(!0)
    }

    updateBarWidth() {
        const t = this.$component.width();
        t !== this.barWidth && (this.barWidth = t, "complex" === this.legendType && this.drawLegend())
    }

    setEvents() {
        const t = $(window), e = this;

        function s(s) {
            if (!e.endParams.active) return t.off("mousemove.dragRange"), !1;
            e.toggleAnimation(!1);
            const n = s.pageX - e.endParams.left - e.endParams.shift;
            return e.applyEndPosition(n), !0
        }

        this.$component.on("resize", () => {
            this.updateBarWidth()
        }), this.$component.on("touchstart", e => {
            if (1 !== e.touches.length) return !1;
            if (this.isDouble) {
                const t = (this.$endRunner.offset().left + this.$startRunner.offset().left) / 2;
                this.activeRunner = e.touches[0].pageX >= t ? "end" : "start", "start" === this.activeRunner ? (this.$startRunner.addClass("upper-runner"), this.$endRunner.removeClass("upper-runner")) : (this.$endRunner.addClass("upper-runner"), this.$startRunner.removeClass("upper-runner"))
            } else this.activeRunner = "end";
            e.stopPropagation(), this.updateBarWidth();
            const s = e.touches[0].pageX - this.$value.offset().left;
            this.startWatchingEvents(), this.applyEndPosition(s - this.defaultShift), t[0].addEventListener("touchmove", this.touchHendler.bind(this), {passive: !1}), t.on("touchend.range", () => {
                this.afterRunnerReleased(), t[0].removeEventListener("touchmove", this.touchHendler), t.off("touchend.range")
            })
        }), this.$component.on("mousedown", e => {
            const n = e.pageX - this.$component.offset().left;
            if (this.isDouble) {
                const t = (this.$endRunner.offset().left + this.$startRunner.offset().left) / 2;
                this.activeRunner = e.pageX >= t ? "end" : "start", "start" === this.activeRunner ? (this.$startRunner.addClass("upper-runner"), this.$endRunner.removeClass("upper-runner")) : (this.$endRunner.addClass("upper-runner"), this.$startRunner.removeClass("upper-runner"))
            }
            this.updateBarWidth(), this.startWatchingEvents(), this.applyEndPosition(n - this.defaultShift), "start" === this.activeRunner ? this.$startRunner.focus() : this.$endRunner.focus(), t.on("mousemove.dragRange", s), t.on("mouseup.range", () => {
                this.afterRunnerReleased(), t.off("mousemove.dragRange"), t.off("mouseup.range")
            })
        }), this.$endRunner.on("touchstart", e => {
            if (1 !== e.touches.length) return !1;
            e.stopPropagation(), this.updateBarWidth(), this.activeRunner = "end", this.$startRunner.removeClass("upper-runner"), this.$endRunner.addClass("upper-runner"), e.stopPropagation(), this.startWatchingEvents(e.touches[0].pageX - this.$endRunner.offset().left), this.toggleAnimation(!1), t[0].addEventListener("touchmove", this.touchHendler.bind(this), {passive: !1}), t.on("touchend.range", () => {
                this.afterRunnerReleased(), t[0].removeEventListener("touchmove", this.touchHendler), t.off("touchend.range")
            })
        }), this.$startRunner.on("touchstart", e => {
            if (1 !== e.touches.length) return !1;
            e.stopPropagation(), this.updateBarWidth(), this.activeRunner = "start", this.$startRunner.addClass("upper-runner"), this.$endRunner.removeClass("upper-runner"), e.stopPropagation(), this.startWatchingEvents(e.touches[0].pageX - this.$startRunner.offset().left), this.toggleAnimation(!1), t[0].addEventListener("touchmove", this.touchHendler.bind(this), {passive: !1}), t.on("touchend.range", () => {
                this.afterRunnerReleased(), t[0].removeEventListener("touchmove", this.touchHendler), t.off("touchend.range")
            })
        }), this.$endRunner.on("mousedown", e => {
            e.stopPropagation(), this.activeRunner = "end", this.$startRunner.removeClass("upper-runner"), this.$endRunner.addClass("upper-runner"), this.updateBarWidth(), this.$endRunner.focus(), this.startWatchingEvents(e.pageX - this.$endRunner.offset().left), this.toggleAnimation(!1), t.on("mousemove.dragRange", s), t.on("mouseup.range", () => {
                this.afterRunnerReleased(), t.off("mousemove.dragRange"), t.off("mouseup.range")
            })
        }), this.$startRunner.on("mousedown", e => {
            e.stopPropagation(), this.activeRunner = "start", this.$startRunner.addClass("upper-runner"), this.$endRunner.removeClass("upper-runner"), this.updateBarWidth(), this.$startRunner.focus(), this.startWatchingEvents(e.pageX - this.$startRunner.offset().left), this.toggleAnimation(!1), t.on("mousemove.dragRange", s), t.on("mouseup.range", () => {
                this.afterRunnerReleased(), t.off("mousemove.dragRange"), t.off("mouseup.range")
            })
        }), this.$legend.find(".legend-point.to, .legend-point.from").each((t, e) => {
            $(e).on("click", () => {
                if (this.updateBarWidth(), this.isDouble) {
                    const t = this.startEdge < this.endEdge ? 1 : -1, s = (this.startValue + this.endValue) / 2,
                        n = +$(e).data("value");
                    n * t >= s * t ? this.endValue = n : this.startValue = n
                } else this.endValue = $(e).data("value");
                this.setRunnersValue()
            })
        }), this.$input.on("change", () => {
            if (this.isDouble) {
                const t = this.$input.val().split(" — ");
                this.startValue = +t[0], this.endValue = +t[1]
            } else this.endValue = +this.$input.val();
            this.setRunnersValue(!0)
        }), this.$startRunner.on("keyup", t => {
            t.preventDefault(), this.activeRunner = "start", this.handleKeydown(t, this.$startRunner)
        }), this.$endRunner.on("keyup", t => {
            t.preventDefault(), this.activeRunner = "end", this.handleKeydown(t, this.$endRunner)
        }), this.$startRunner.on("keydown", t => {
            this.activeRunner = "start", this.handleKeyup(t, this.$startRunner)
        }), this.$endRunner.on("keydown", t => {
            this.activeRunner = "end", this.handleKeyup(t, this.$endRunner)
        }), this.$startRunner.on("blur", () => {
            this.handleBlur()
        })
    }

    handleBlur() {
        this.movingInterval && (clearInterval(this.movingInterval), this.movingInterval = !1), this.movingDebounceTimeout && (clearTimeout(this.movingDebounceTimeout), this.movingDebounceTimeout = !1)
    }

    handleKeydown(t, e) {
        if (this.movingInterval && (clearInterval(this.movingInterval), this.movingInterval = !1), this.movingDebounceTimeout && (clearTimeout(this.movingDebounceTimeout), this.movingDebounceTimeout = !1), [37, 38, 39, 40].includes(t.keyCode)) {
            const s = t.shiftKey ? 10 : 1, n = "start" === this.activeRunner ? "startValue" : "endValue";
            38 === t.keyCode || 39 === t.keyCode ? this[n] = (this[n] / this.step + s) * this.step : 37 !== t.keyCode && 40 !== t.keyCode || (this[n] = (this[n] / this.step - s) * this.step), e.addClass("active"), this.debounceActive(), this.setRunnersValue()
        }
    }

    handleKeyup(t, e) {
        9 !== t.keyCode && [37, 38, 39, 40].includes(t.keyCode) && (t.preventDefault(), e.addClass("active"), this.debounceActive(), this.startDebouncedMove(t))
    }

    startDebouncedMove(t) {
        this.movingDebounceTimeout && (clearTimeout(this.movingDebounceTimeout), this.movingDebounceTimeout = !1), this.movingDebounceTimeout = setTimeout(() => {
            this.movingInterval = setInterval(() => {
                this.debounceActive();
                const e = t.shiftKey ? 10 : 1, s = "start" === this.activeRunner ? "startValue" : "endValue";
                38 === t.keyCode || 39 === t.keyCode ? this[s] = (Math.round(this[s] / this.step) + e) * this.step : 37 !== t.keyCode && 40 !== t.keyCode || (this[s] = (Math.round(this[s] / this.step) - e) * this.step), this.setRunnersValue()
            }, 50)
        }, 300)
    }

    debounceActive() {
        this.calmRunnersTimeout && clearTimeout(this.calmRunnersTimeout), this.calmRunnersTimeout = setTimeout(() => {
            this.$endRunner.removeClass("active"), this.$startRunner.removeClass("active")
        }, 500)
    }
};

function _extends() {
    return (_extends = Object.assign || function (e) {
        for (var i = 1; i < arguments.length; i++) {
            var t = arguments[i];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
        }
        return e
    }).apply(this, arguments)
}

flexbe_cli.components.classes.VideoBackground = class {
    constructor(e, i, t) {
        this.background = e, this.$section = e.$component, this.video = i, this.sectionSize = {
            width: e.owner._core.tween.width,
            height: e.owner._core.tween.height
        }, this.sectionSize.res = this.sectionSize.width / this.sectionSize.height, "function" == typeof t && (this.onStructured = t), this.parallax = this.$section[0].getAttribute("data-parallax"), this.fixed = "fixed" === this.parallax || "modal" === this.background.owner._core.id, this.isDesktop = flexbe_cli.run.is_desktop, this.initVideo()
    }

    initVideo() {
        this.$container = $(`<div class="video_bg_container ${this.video.type}">\n                <div class="video_bg_player"></div>\n                <div class="video_bg_protect"></div>\n            </div>`), this.$playerOuter = this.$container.find(".video_bg_player"), this.$playerOverlay = this.$container.find(".video_bg_protect").first(), this.video.image && this.$playerOverlay.css({backgroundImage: `url(${this.video.image})`}), "vimeo" === this.video.type ? this.createVimeo() : "youtube" === this.video.type ? this.createYoutube() : this.createMP4(), document.addEventListener("visibilitychange", () => {
            this.background.onscreen && !document.hidden && setTimeout(() => {
                this.play()
            }, 50)
        })
    }

    createVimeo() {
        flexbe_cli.require(["https://player.vimeo.com/api/player.js"], () => {
            this.$videoElement = $(`<iframe src="https://player.vimeo.com/video/${this.video.id}?muted=1&controls=0&autopause=0&loop=1&autoplay=1&background=1" width="640" height="360" frameborder="0"></iframe>`), this.insertVideo(), this.vPlayer = new window.Vimeo.Player(this.$videoElement[0]), this.getVimeoResolution().then(e => (this.video.size = _extends({res: e.width / e.height}, e), this.resize(), !0)).catch(() => {
            })
        })
    }

    createYoutube() {
        const e = {
            videoId: this.video.id,
            playerVars: {
                cc_load_policy: 0,
                iv_load_policy: 3,
                autoplay: 1,
                modestbranding: 1,
                branding: 0,
                wmode: "opaque",
                rel: 0,
                mute: 1,
                disablekb: 1,
                color: "white",
                controls: 0,
                showinfo: 0,
                playsinline: 1
            },
            events: {
                onReady: () => {
                    this.$videoElement = this.$playerOuter.find("iframe"), this.youtubeGetResolution(), this.resize()
                }, onStateChange: e => {
                    1 !== e.data || this.videoIsLoaded ? 0 === e.data && this.play() : (this.videoIsLoaded = !0, this.videoIsResized && (this.$section.delay(100).addClass("video_is_loaded"), this.executed = !0))
                }
            }
        };
        if (window.YT || window.onYouTubeIframeAPIReady) if (window.onYouTubeIframeAPIReady) window.youtubeBGQuae.push(() => {
            const i = $("<div></div>");
            this.insertVideo(i), this.yPlayer = new window.YT.Player(i[0], e)
        }); else {
            const i = $("<div></div>");
            this.insertVideo(i), this.yPlayer = new window.YT.Player(i[0], e)
        } else window.onYouTubeIframeAPIReady = () => {
            window.youtubeBGQuae.forEach(e => {
                e()
            }), window.youtubeBGQuae = null, window.onYouTubeIframeAPIReady = null
        }, window.youtubeBGQuae = [], window.youtubeBGQuae.push(() => {
            const i = $("<div></div>");
            this.insertVideo(i), this.yPlayer = new window.YT.Player(i[0], e)
        }), flexbe_cli.require(["https://www.youtube.com/iframe_api"])
    }

    createMP4() {
        this.$videoElement = $(`<video src="${this.video.url}" controlslist="nodownload" loop="1" muted="1" autoplay="1" playsinline="1"></video>`), this.insertVideo(), this.$videoElement[0].oncanplay = () => {
            setInterval(() => {
                this.videoIsLoaded = !0, this.videoIsResized && this.$section.delay(100).addClass("video_is_loaded")
            }, 50)
        }, this.$videoElement.on("loadeddata", () => {
            this.video.size = {res: this.$videoElement.width() / this.$videoElement.height()}, this.resize()
        })
    }

    getVimeoResolution() {
        const e = this.vPlayer;
        let i = 0;
        return function t() {
            return Promise.all([e.getVideoWidth(), e.getVideoHeight()]).then(e => {
                const [s, o] = e;
                return s / o < 2.5 && s / o > .4 || 3 === i ? {width: s, height: o} : (i += 1, t())
            })
        }()
    }

    youtubeGetResolution() {
        const e = this.$videoElement.attr("width"), i = this.$videoElement.attr("height");
        return this.video.size = {width: e, height: i, res: e / i}, this.video.size
    }

    insertVideo(e) {
        this.$playerOuter.append(e || this.$videoElement), this.$section.append(this.$container), this.onStructured && this.onStructured(this.$container)
    }

    resize() {
        if (this.video && this.video.size) if (this.$videoElement.width(this.$videoElement.height() * this.video.size.res), this.fixed) {
            const e = {height: window.innerHeight, width: window.innerWidth};
            this.isDesktop || (e.height += 60, e.width += 60), e.res = e.width / e.height, this.video.size.res > e.res ? (this.$videoElement.css({height: `${e.height}px`}), this.$videoElement.css({width: `${e.height * this.video.size.res}px`})) : (this.$videoElement.css({width: `${e.width}px`}), this.$videoElement.css({height: `${e.width / this.video.size.res}px`}))
        } else {
            this.$section.hasClass("small_component_bg") ? this.sectionSize = {
                width: this.$section.width(),
                height: this.$section.height()
            } : this.sectionSize = {
                width: this.background.owner._core.tween.width,
                height: this.background.owner._core.tween.height
            }, this.sectionSize.res = this.sectionSize.width / this.sectionSize.height;
            const e = window.innerWidth / window.innerHeight;
            if (this.video.size.res > this.sectionSize.res || e < this.video.size.res && this.parallax) {
                const e = this.$playerOuter.height();
                this.$videoElement.css({height: `${e}px`}), this.$videoElement.css({width: `${e * this.video.size.res}px`})
            } else {
                const e = this.$playerOuter.width();
                this.$videoElement.css({width: `${e}px`}), this.$videoElement.css({height: `${e / this.video.size.res}px`})
            }
        }
        this.videoIsResized = !0, this.videoIsLoaded && this.$section.delay(100).addClass("video_is_loaded")
    }

    play() {
        if ("vimeo" === this.video.type) {
            const e = setInterval(() => {
                this.vPlayer && this.vPlayer.play && (setTimeout(() => {
                    this.vPlayer.play(), this.videoIsLoaded = !0, this.videoIsResized && this.$section.delay(100).addClass("video_is_loaded")
                }, 50), clearInterval(e))
            }, 10)
        } else if ("youtube" === this.video.type) {
            const e = setInterval(() => {
                this.yPlayer && this.yPlayer.playVideo && (this.yPlayer.playVideo(), clearInterval(e))
            }, 10)
        } else this.$videoElement && this.$videoElement[0] && this.$videoElement[0].pause && (this.$videoElement[0].play(), $(document).one("touchstart.video-bg", () => {
            this.$videoElement[0].play()
        }))
    }

    pause() {
        "vimeo" === this.video.type && this.vPlayer ? this.vPlayer.pause() : "youtube" === this.video.type && this.yPlayer && this.yPlayer.pauseVideo ? this.yPlayer.pauseVideo() : this.$videoElement && this.$videoElement[0] && this.$videoElement[0].pause && this.$videoElement[0].pause()
    }
};
!function () {
    function t(t, e, i, s) {
        const a = $(t), n = e ? `[data-component="${e}"]` : "[data-component]";
        a.is(n) ? a.trigger(i, s) : $(t).find(n).each((t, e) => {
            $(e).trigger(i, s)
        })
    }

    function e(t) {
        return ["normal", "active"].includes(t)
    }

    class i {
        constructor(t, e) {
            if (e = Object.assign({
                init: !0,
                targets: "span",
                active: 0
            }, e), "object" != typeof t || !t.querySelectorAll) return !1;
            Array.isArray(e.targets) || e.targets instanceof NodeList || e.targets instanceof HTMLCollection ? this.targets = Array.from(e.targets) : this.targets = Array.from(t.querySelectorAll(e.targets)), this.pagination = t, this.options = e, this.active = e.active, this.visible = e.visible || +t.getAttribute("data-bullets-visible"), this.visible || (this.visible = this.targets.length >= 8 ? 3 : this.targets.length), this.init()
        }

        init() {
            this.bindEvents(), this.options.init && this.setActive(this.active, !0)
        }

        bindEvents() {
            const {targets: t, options: e} = this, i = $(t);
            "function" == typeof e.onClick && i.off(".bpc").on("click.bpc", t => {
                const s = $(t.currentTarget), a = +i.filter('[data-state="active"]').attr("data-index"),
                    n = +s.attr("data-index");
                e.onClick(n, a)
            })
        }

        setActive(t, i) {
            const {targets: s, active: a} = this;
            let n, o, {oldMap: r, newMap: l} = this;
            if (!s.length) return t;
            if (t = Math.max(Math.min(t, s.length - 1), 0), r = r && r.length ? r : s.map(t => {
                const e = t.getAttribute("data-state") || "hidden";
                return {target: t, state: e}
            }), (i ? 0 : r.reduce((t, {state: i}) => t + (e(i) ? 1 : 0), 0)) !== this.visible) o = Math.min(t + this.visible - 1, s.length - 1), n = Math.max(o - this.visible + 1, 0), l = r.map(({
                                                                                                                                                                                                       target: t,
                                                                                                                                                                                                       state: e
                                                                                                                                                                                                   }, i) => ({
                target: t,
                state: i >= n && i <= o ? "normal" : "hidden"
            })); else {
                const i = function t({from: i, to: s, map: a, move: n = 0}) {
                    const o = a[s - n], r = o && e(o.state);
                    return !o || r ? n : i < s ? t({from: i, to: s, map: a, move: n + 1}) : s < i ? t({
                        from: i,
                        to: s,
                        map: a,
                        move: n - 1
                    }) : n
                }({from: a, to: t, map: r});
                l = r.map(({target: t, state: s}, a) => {
                    const l = r[a - i];
                    return "normal" === (s = l && l.state && e(l.state) ? "normal" : "hidden") && (void 0 === n && (n = a), o = a), {
                        target: t,
                        state: s
                    }
                })
            }
            return l[t].state = "active", l[n - 1] && (l[n - 1].state = "next"), l[n - 2] && (l[n - 2].state = "more"), l[o + 1] && (l[o + 1].state = "next"), l[o + 2] && (l[o + 2].state = "more"), s.forEach((t, e) => {
                t.setAttribute("data-state", l[e].state)
            }), this.active = t, this.oldMap = l, t
        }
    }

    class s {
        constructor(t, e) {
            this.options = Object.assign({
                init: !0,
                tag: "span"
            }, e), this.pagination = t, this.tag = this.options.tag, this.filled = !1, this.states = ["hidden", "more", "next", "active", "next", "more", "hidden"], this.init()
        }

        init() {
            this.bindEvents(), this.options.init && this.fillPagination({states: this.states, force: !0})
        }

        bindEvents() {
            const {tag: t, pagination: e, options: i} = this, s = $(e);
            "function" == typeof i.onClick && s.off(".bpc").on("click.bpc", t, t => {
                const e = $(t.currentTarget), s = +e.siblings('[data-state="active"]').attr("data-index"),
                    a = +e.attr("data-index") - s;
                i.onClick(a)
            })
        }

        setActive(t) {
            const e = this.states, i = this.filled && t;
            if (this.fillPagination({states: e, force: !0}), i) {
                this.pagination.offsetWidth;
                const i = e.map((i, s) => {
                    return e[s + ("prev" === t ? 1 : -1)] || "hidden"
                });
                requestAnimationFrame(() => {
                    this.fillPagination({states: i})
                })
            }
        }

        fillPagination({states: t, force: e} = {}) {
            const i = $(this.pagination), s = this.tag;
            if (this.filled = !0, e) {
                const e = t.reduce((t, e, i) => `${t}<${s} data-index="${i}" class="swiper-pagination-bullet" data-state="${e}"></${s}>`, "");
                i.html(e)
            } else i.find(s).each((e, i) => {
                const s = $(i);
                s.attr("data-state", t[e] || "hidden"), s.attr("data-index", e)
            })
        }
    }

    class a extends BaseComponent {
        constructor(...t) {
            super(...t);
            const {component: e} = this;
            this.require = ["assets/swiper.v5.js"], this.is = "slider", this.swiper = null, this.sliderEl = e.querySelector(".swiper-container"), this.paginationEl = e.querySelector(".slider-pagination"), this.prevEl = e.querySelector('.slider-prev, [data-direction="prev"]'), this.nextEl = e.querySelector('.slider-next, [data-direction="next"]');
            const i = this.paginationEl && this.paginationEl.getAttribute("data-type") || "bullets";
            this.options = {
                paginationType: i,
                count: e.getAttribute("data-count"),
                loop: Boolean(!flexbe_cli.is_admin && Math.floor(e.getAttribute("data-loop"))),
                autoplay: !flexbe_cli.is_admin && Math.floor(e.getAttribute("data-autoplay")) || !1,
                effect: e.getAttribute("data-effect") || "slide"
            }
        }

        onInit() {
            this.isUpdated && this.isLoaded && this.initSwiper()
        }

        onLoad() {
            if (!this.inScreen && !this.inBeside) return !1;
            this.initSwiper()
        }

        onView({state: t}) {
            this.isLoaded && (t && !this.swiper && this.initSwiper(), this.swiper && this.toggleAutoplay({state: t}))
        }

        onScreen({state: t}) {
            if (t) return !!this.isLoaded && void (this.swiper || this.initSwiper())
        }

        onBeside({state: t}) {
            t && this.isLoaded && !this.swiper && this.initSwiper()
        }

        onResize() {
            this.setComponentSize(), this.setSliderClasses()
        }

        initSwiper() {
            if (this.swiper || "undefined" == typeof Swiper) return !1;
            if (this.options.count <= 1) return void setTimeout(() => this.loadImages(), 10);
            const {
                    options: e,
                    component: a,
                    core: n,
                    root: o,
                    index: r,
                    sliderEl: l,
                    paginationEl: d,
                    prevEl: h,
                    nextEl: p
                } = this, c = `${n && n.id || "-"}:${r}`, {count: u, loop: g, paginationType: f, effect: m} = e,
                b = this.owner.closest(".swiper-inited"), v = {prevEl: h, nextEl: p},
                w = {el: d, type: f, clickable: 4 !== flexbe_cli.theme_id || !g, modifierClass: "slider-pagination-"},
                x = !!e.autoplay && {delay: 1e3 * e.autoplay, stopOnLastSlide: !g, disableOnInteraction: !1};
            let y, S = 0;
            if (flexbe_cli.is_admin) {
                o._sliderState || (o._sliderState = {});
                const t = o._sliderState;
                t[c] && (S = Math.max(0, Math.min(u - 1, t[c]) || 0)), t[c] = S
            }
            if ("thumbs" === f) {
                w.type = !1, w.el = null;
                const t = new Swiper(d.querySelector(".thumbs-slider"), {
                    wrapperClass: "thumbs",
                    slideClass: "thumb-item",
                    loop: !1,
                    slidesPerView: "auto",
                    watchSlidesProgress: !0,
                    watchSlidesVisibility: !0,
                    roundLengths: !0,
                    freeMode: !0,
                    freeModeSticky: !0,
                    normalizeSlideIndex: !1,
                    a11y: !1
                });
                y = {swiper: t, autoScrollOffset: 1, slideThumbActiveClass: "thumb-item--active"}, this.thumbsSwiper = t
            }
            const C = new Swiper(l, {
                init: !1,
                speed: "fade" === m ? 650 : 450,
                nested: b,
                wrapperClass: "swiper-wrapper",
                slideClass: "swiper-slide",
                noSwipingClass: "redactor-box",
                initialSlide: S,
                navigation: v,
                pagination: w,
                thumbs: y,
                autoplay: x,
                effect: m,
                loop: g,
                fadeEffect: {crossFade: !0},
                observer: !0,
                observeParents: !0,
                simulateTouch: !flexbe_cli.is_admin,
                a11y: !1,
                touchReleaseOnEdges: !0,
                roundLengths: !0,
                touchMoveStopPropagation: !1,
                preventClicksPropagation: !0,
                preventClicks: !0,
                runCallbacksOnInit: !1
            });
            this.swiper = C, C.on("init", () => {
                if (this.setComponentSize(), this.setSliderClasses(), $(h).add(p).removeClass("disabled"), "thumbs" === f && $(d).removeClass("disabled"), g) {
                    $(".swiper-slide-duplicate", a).attr("data-cloned", !0), flexbe_cli.components.initComponents({core: n})
                }
                const e = C.slides[C.previousIndex], i = C.slides[C.activeIndex];
                setTimeout(() => {
                    null != e && t(e, !1, "sliderDeactivate"), null != i && t(i, !1, "sliderActivate")
                }, 10)
            });
            let A = !1;
            g && C.on("slideChangeTransitionEnd", () => {
                C.activeIndex !== C.realIndex + 1 ? (A = !0, C.slideToLoop(C.realIndex, 0)) : A = !1
            }), C.on("slideChange", () => {
                if (A) return;
                const e = C.slides[C.previousIndex], i = C.slides[C.activeIndex],
                    s = i && i.getAttribute("data-type") || "image";
                a.setAttribute("data-current-index", C.realIndex), a.setAttribute("data-current-content", s), flexbe_cli.is_admin && (o._sliderState[c] = C.realIndex), setTimeout(() => {
                    t(e, !1, "sliderDeactivate"), t(i, !1, "sliderActivate"), C.initialized && this.loadImages()
                }, 10)
            }), C.on("slideChangeTransitionStart touchStart", () => {
                $(l).addClass("slider-in-animation")
            }), C.on("slideChangeTransitionEnd touchEnd", () => {
                $(l).removeClass("slider-in-animation")
            }), C.on("paginationRender", () => {
                4 === flexbe_cli.theme_id && "bullets" === w.type && (g ? this.loopPagination = new s(d, {
                    init: !1,
                    tag: "span",
                    onClick: t => {
                        t < 0 ? C.slidePrev() : t > 0 && C.slideNext()
                    }
                }) : this.bulletsPagination = new i(d, {
                    init: !1,
                    targets: "span",
                    active: C.realIndex
                })), $(d).removeClass("disabled")
            }), C.on("paginationUpdate", () => {
                if (!A) if (this.bulletsPagination) this.bulletsPagination.setActive(C.realIndex); else if (this.loopPagination) {
                    const t = C.previousIndex < C.activeIndex ? "next" : "prev";
                    this.loopPagination.setActive(t)
                }
            }), this.$component.on("preventSliderAutoplay", (t, {state: e = !0}) => {
                this.preventAutoplay = !!e, this.preventAutoplay && this.toggleAutoplay({state: !1})
            }), C.init(), this.toggleAutoplay({state: this.inView})
        }

        loadImages() {
            this._imagesLoaded || (t(this.$component, "image", "setImage"), this._imagesLoaded = !0)
        }

        toggleAutoplay({state: t}) {
            if (!this.swiper) return !1;
            const {swiper: e, options: i} = this;
            this.preventAutoplay && (t = !1), i.autoplay && e.autoplay && (t && !e.autoplay.running ? e.autoplay.start() : !t && e.autoplay.running && e.autoplay.stop())
        }

        slideTo(t, e = !0) {
            this.swiper && void 0 !== this.swiper.realIndex && this.swiper.realIndex !== t && (e ? this.swiper.slideToLoop(t) : this.swiper.slideTo(t))
        }

        setSliderClasses() {
            if (!this.swiper) return;
            const {effect: t} = this.swiper.params, e = $(this.sliderEl);
            this._inited || (this._inited = !0, e.addClass("swiper-inited")), this._activeEffect !== t && (this._activeEffect = t, e.toggleClass("swiper-effect-slide", "slide" === t), e.toggleClass("swiper-effect-fade", "fade" === t))
        }

        setComponentSize() {
            this.component.style.width = "";
            const t = this.component.getBoundingClientRect().width, e = this.component.offsetWidth;
            if (t % 1 > 0 && Math.abs(e - t) < 2 && (this.component.style.width = `${Math.round(t)}px`, this.swiper && this.swiper.update()), "thumbs" === this.options.paginationType) {
                const t = $(this.paginationEl).find(".thumbs-slider"), e = t.find(".thumb-item"), i = 4, s = e.length,
                    a = this.thumbsSwiper && this.thumbsSwiper.params.slidesPerView;
                t.css("width", ""), e.css("width", "");
                const n = t[0].offsetWidth, o = e[0].offsetWidth;
                let r = Math.max(i, Math.round(n / o));
                s >= i && (s === r + 1 || s === r - 1) ? r = s : !a || a !== r + 1 && a !== r - 1 || (r = a);
                const l = Math.round(n / r) * r;
                n !== l && t.css("width", `${l}px`), t.toggleClass("is-filled", s >= r), this.thumbsSwiper && (this.thumbsSwiper.params.slidesPerView = r, this.thumbsSwiper.update())
            }
        }
    }

    flexbe_cli.components.classes.slider = a, flexbe_cli.components.classes.bulletsPagination = i, flexbe_cli.components.classes.bulletsLoopPagination = s
}();
!function () {
    const t = document, e = "[data-action-target]", a = "a[href], [data-action]";
    let i;

    class o {
        static createGlobalInstance(...t) {
            return i || (i = new o(...t), i)
        }

        constructor() {
            this.bindEvents(), this.hideAttributes()
        }

        bindEvents() {
            $(t).on("click.component-links-fake", e, t => !(t.originalEvent && t.originalEvent.isTrusted && !t.target.closest(a)) || (!!t.target.closest('[data-prevent-action], [data-flexbe-events="off"]') || (t.stopPropagation(), t.stopImmediatePropagation(), void $(t.currentTarget).children(a).get(0).click()))), $(t).on("click.component-links", a, t => {
                const e = t.currentTarget, a = $(e);
                if (a.closest('[data-prevent-action], [data-flexbe-events="off"]').length) return !0;
                if (flexbe_cli.is_admin && !e.closest(".editor-focus") && !$("body").hasClass("is-view")) return t.preventDefault(), !0;
                const i = a.closest("[data-action]").data("action") || ("A" === e.tagName ? "link" : "none");
                return this.reachGoals(t), "link" === i ? this.actionLink(t) : "file" === i ? this.actionFile(t) : "popup" === i ? this.actionPopup(t) : "button" === i ? this.actionButton(t) : "modal" === i ? this.actionModal(t) : "cart" === i ? this.actionCart(t) : "quiz" === i ? this.actionQuiz(t) : "close" === i ? this.actionClose(t) : void 0
            })
        }

        hideAttributes() {
            $(a).each((t, e) => {
                const a = $(e), i = a.data("product");
                a.removeAttr("data-product"), null != i && a.data("product", i)
            })
        }

        actionPopup(t) {
            return t.preventDefault(), !1
        }

        actionFile() {
            return !0
        }

        actionLink(t) {
            const e = t.currentTarget, a = e.hasAttribute("href") ? e.getAttribute("href") : "",
                i = "_blank" === e.getAttribute("target") || t.metaKey || t.ctrlKey, o = e.hasAttribute("download");
            i || o || (t.preventDefault(), clearTimeout(this._lastLinkTmt), this._lastLinkTmt = setTimeout(() => {
                flexbe_cli.helpers.gotoLink(a, i)
            }, 15))
        }

        actionButton(t) {
            t.stopPropagation();
            const e = $(t.currentTarget).closest(".content-zone, [data-item-id]").first().find(".component-button").not(".form-field-submit").find(a);
            e[0] && e[0].click()
        }

        actionModal(t) {
            const e = $(t.currentTarget), a = this.getProductInfo(e[0]);
            let i = e.attr("data-modal-id");
            if (!i || !flexbe_cli.modal.find(i)) {
                const t = e.closest("[data-id]").attr("data-id");
                i = `${parseInt(String(t).split("_")[0], 10)}_${i}`
            }
            flexbe_cli.events.emit("ui_mobilemenu_close"), flexbe_cli.events.emit("ui_modal_open", {
                id: i,
                data: {items: a ? [a] : []}
            })
        }

        actionCart(t) {
            const a = $(t.currentTarget), i = $(t.currentTarget).closest(e), o = a.closest(".m_modal").length,
                n = this.getProductInfo(a[0]);
            n && (i.addClass("animate-add-to-cart"), setTimeout(() => {
                i.removeClass("animate-add-to-cart"), o && (flexbe_cli.events.emit("ui_modal_close"), flexbe_cli.widget.cart.dispatch("addItem", n))
            }, o ? 450 : 1600), o || flexbe_cli.widget.cart.dispatch("addItem", n))
        }

        actionQuiz(t) {
            const e = $(t.currentTarget).closest("[data-id]").attr("data-id");
            flexbe_cli.events.emit("quiz_command", {command: "start", id: e})
        }

        actionClose(t) {
            t.preventDefault(), flexbe_cli.events.emit("ui_modal_close")
        }

        reachGoals(t) {
            const e = $(t.currentTarget), a = e.attr("data-action"), i = e.attr("data-modal-id"),
                o = flexbe_cli.stat.getGoal(a, i), n = e.attr("data-goal"), c = e.attr("data-html-goal");
            flexbe_cli.stat.reachGoals({mainGoal: o, goal: n, htmlGoal: c})
        }

        getProductInfo(t) {
            let e = flexbe_cli.helpers.getProductInfo(t) || {};
            return e && (e.title && "-" !== e.title || e.price) || (e = null), e
        }
    }

    flexbe_cli.components.classes.links = o
}();
!function () {
    class e extends BaseComponent {
        constructor(...e) {
            super(...e), this.is = "map", this.$map = this.$component, this.data = this.$component.data("data")
        }

        onInit() {
            this.isUpdated && this.isLoaded && this.createMap()
        }

        onLoad() {
            (this.inScreen || this.inBeside) && this.createMap()
        }

        onScreen({state: e}) {
            if (!e || !this.isLoaded || this.isCreated) return !1;
            this.isCreated = !0, this.createMap()
        }

        onBeside({state: e}) {
            if (!e || !this.isLoaded || this.isCreated) return !1;
            this.isCreated = !0, this.createMap()
        }

        onOpen() {
            this.fitToViewport()
        }

        onResize() {
            this.fitToViewport()
        }

        createMap() {
        }

        fitToViewport() {
        }
    }

    class o extends e {
        constructor(...e) {
            super(...e);
            const o = flexbe_cli.components.classes.map.getLocaleCode({provider: "yandex"}) || "ru_RU",
                t = flexbe_cli.vars._group.yandexMapsKey ? `&apikey=${flexbe_cli.vars._group.yandexMapsKey}` : "";
            this.require = [`//api-maps.yandex.ru/2.1/?lang=${o}${t}`]
        }

        fitToViewport() {
            const {map: e} = this;
            e && e.container.fitToViewport()
        }

        createMap() {
            "undefined" != typeof ymaps && ymaps.ready(() => {
                this.createVendor(), this.setPlaces(), this.dispatchEvents(), this.fixBehavior(), this.$component.trigger("mapInit"), this.$component.removeClass("loading")
            })
        }

        createVendor() {
            this.map && this.map.destroy(), this.map = new ymaps.Map(this.$component.find(".map")[0], {
                center: this.data.center,
                zoom: this.data.zoom,
                controls: ["zoomControl"],
                behaviors: ["default", "scrollZoom"],
                type: "yandex#map"
            })
        }

        setPlaces() {
            const {map: e, data: o} = this;
            if (!e) return;
            e.geoObjects.removeAll();
            const t = ymaps.templateLayoutFactory.createClass('<svg title="$[properties.balloonContent]" class="placemark" width="32" height="48" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.36 0 0 5.36 0 12c0 8 12 20 12 20s12-12 12-20c0-6.64-5.36-12-12-12zm0 8a4 4 0 0 1 4 4c0 2.22-1.78 4-4 4a4 4 0 0 1-4-4c0-2.2 1.8-4 4-4z" fill="$[properties.color]" fill-rule="evenodd"/></svg>');
            ymaps.layout.storage.get("custom#placemark") || ymaps.layout.storage.add("custom#placemark", t), o.places.forEach((o, t) => {
                o.color = o.color || "#3D52B0";
                const s = new ymaps.Placemark(o.coords, {
                    balloonContentHeader: o.name || !1,
                    balloonContent: o.address,
                    color: o.color
                }, {
                    hideIconOnBalloonOpen: !1,
                    balloonOffset: [0, -48],
                    balloonCloseButton: !1,
                    iconLayout: "custom#placemark",
                    iconShape: {type: "Rectangle", coordinates: [[-16, -48], [16, 0]]}
                });
                s.events.add("balloonopen", () => {
                    this.$component.trigger("balloonOpen", t, o)
                }), e.geoObjects.add(s), o._mark = s
            })
        }

        dispatchEvents() {
            const {data: e, map: o} = this;
            let t = !1;
            o && (this.$component.on("selectMark", (t, s) => {
                if (e.places.length && e.places[s]) {
                    const t = e.places[s];
                    o.setCenter(t.coords, e.zoom, {duration: 350, checkZoomRange: !0}).then(() => {
                        o.setCenter(t.coords)
                    }), t._mark && t._mark.balloon.open()
                }
            }), this.$component.on("resizeMap", () => {
                this.fitToViewport()
            }), this.$component.on("mousedown", () => {
                t = !0, this.$component.trigger("preventSliderMove", {state: !0}), this.$component.trigger("preventSliderAutoplay", {state: !0})
            }), $(window).on("mouseup", () => {
                t && (this.$component.trigger("preventSliderMove", {state: !1}), this.$component.trigger("preventSliderAutoplay", {state: !1}), t = !1)
            }))
        }

        fixBehavior() {
            const {map: e} = this;
            if (!e) return;
            let o;
            e.behaviors.disable("scrollZoom"), this.$component.off("mouseenter.preventzoom").on("mouseenter.preventzoom", () => {
                o = setTimeout(() => {
                    e.behaviors.enable("scrollZoom")
                }, 500)
            }), this.$component.off("mouseleave.preventzoom").on("mouseleave.preventzoom", () => {
                o && (clearTimeout(o), e.behaviors.disable("scrollZoom"))
            }), flexbe_cli.run.is_mobile && e.behaviors.disable("drag")
        }
    }

    class t extends e {
        constructor(...e) {
            super(...e);
            const o = flexbe_cli.vars._group.googleMapsKey,
                t = flexbe_cli.components.classes.map.getLocaleCode({provider: "google"}) || "ru";
            this.require = [`//maps.googleapis.com/maps/api/js?key=${o}&language=${t}`]
        }

        createMap() {
            "undefined" != typeof google && (this.createVendor(), this.styleMap(), this.setPlaces(), this.dispatchEvents(), this.fixBehavior(), this.$component.trigger("mapInit"), this.$component.removeClass("loading"))
        }

        createVendor() {
            const {data: e} = this;
            this.map = new google.maps.Map(this.$component.find(".map")[0], {
                center: {
                    lat: e.center[0],
                    lng: e.center[1]
                },
                zoom: e.zoom,
                disableDefaultUI: !0,
                panControl: !0,
                zoomControl: !0,
                fullscreenControl: !0,
                mapTypeControl: !1,
                streetViewControl: !1,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: !1
            })
        }

        dispatchEvents() {
            const {$component: e, map: o} = this;
            let t = !1;
            o && (e.on("selectMark", (e, o) => {
                this.selectMark(o, !0)
            }), e.on("resizeMap", () => {
                this.fitToViewport()
            }), this.$component.on("mousedown", () => {
                t = !0, this.$component.trigger("preventSliderMove", {state: !0}), this.$component.trigger("preventSliderAutoplay", {state: !0})
            }), $(window).on("mouseup", () => {
                t && (this.$component.trigger("preventSliderMove", {state: !1}), this.$component.trigger("preventSliderAutoplay", {state: !1}), t = !1)
            }))
        }

        fitToViewport() {
            const {map: e} = this;
            e && google.maps.event.trigger(e, "resize")
        }

        setPlaces() {
            const {data: e, map: o} = this;
            o && e.places.forEach((e, t) => {
                const s = `<svg width="32" height="48" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.36 0 0 5.36 0 12c0 8 12 20 12 20s12-12 12-20c0-6.64-5.36-12-12-12zm0 8a4 4 0 0 1 4 4c0 2.22-1.78 4-4 4a4 4 0 0 1-4-4c0-2.2 1.8-4 4-4z" fill="${e.color || "#222"}" fill-rule="evenodd"/></svg>`,
                    a = new google.maps.Marker({
                        position: {lat: e.coords[0], lng: e.coords[1]},
                        map: o,
                        visible: !0,
                        animation: google.maps.Animation.DROP,
                        icon: {url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(s)}`}
                    });
                e._mark = a, a.addListener("click", () => {
                    this.selectMark(t)
                })
            })
        }

        styleMap() {
            /*const {data: e, map: o} = this;
            if (o) if ("default" !== e.style && e.style) {
                const t = `/_s/lib/google/maps/styles/${e.style}.json`;
                $.getJSON(t, e => {
                    e && Array.isArray(e) && o.setOptions({styles: e})
                })
            } else o.setOptions({styles: []})*/
        }

        selectMark(e, o = !1) {
            const {data: t, map: s} = this, {places: a} = t;
            if (!(s && a && a.length && a[e])) return;
            a.forEach(e => e._info && e._info.close());
            const n = a[e];
            let i = "";
            n.name && (i += `<div style="margin-bottom: 3px;"><strong>${n.name}</strong></div>`), n.address && (i += `<div>${n.address}</div>`), n._info = new google.maps.InfoWindow({content: i}), n._info.open(s, n._mark), o && s.panTo({
                lat: n.coords[0],
                lng: n.coords[1]
            }), this.$component.trigger("balloonOpen", e, n)
        }

        fixBehavior() {
            const {$component: e, map: o} = this;
            if (!o) return;
            let t;
            e.off("mouseenter.preventzoom").on("mouseenter.preventzoom", () => {
                t = setTimeout(() => {
                    o.setOptions({scrollwheel: !0})
                }, 500)
            }), e.off("mouseleave.preventzoom").on("mouseleave.preventzoom", () => {
                t && (clearTimeout(t), o.setOptions({scrollwheel: !1}))
            })
        }
    }

    flexbe_cli.components.classes.map = function (e) {
        return new ("google" === (e.args[0] || "yandex") ? t : o)(e)
    }, flexbe_cli.components.classes.map.getLocaleCode = ({lang: e, provider: o}) => {
        const t = e || flexbe_cli.locale.language, s = {
            yandex: {ru: "ru_RU", by: "ru_RU", ge: "ru_RU", kz: "ru_RU", ua: "uk_UA", default: "en_US"},
            google: {
                ru: "ru",
                by: "be",
                ge: "ru",
                kz: "kk",
                ua: "uk",
                fr: "fr",
                pl: "pl",
                de: "de",
                es: "es",
                it: "it",
                default: "en"
            }
        };
        return !!s[o] && (s[o][t] || s[o].default)
    }
}();

function _extends() {
    return (_extends = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
        }
        return e
    }).apply(this, arguments)
}

!function () {
    const e = {
        phone: {
            RU: ["+7 (***) ***-**-**", "8 (***) ***-**-**"],
            KZ: ["+7 (***) ***-**-**", "8 (***) ***-**-**"],
            UA: ["+38 (***) ***-****"],
            BY: ["+375 ** *******"],
            US: ["+1 (***) ***-****"]
        }
    };

    class t {
        static getRecaptchaSettings() {
            return _extends({env: {}})
        }

        static getRecaptchaSiteKey() {
            const e = this.getRecaptchaSettings(), t = e.env || {};
            return e.visible ? t.RECAPTCHA_VISIBLE_SITE_KEY : t.RECAPTCHA_INVISIBLE_SITE_KEY
        }

        constructor(e, i = t.getRecaptchaSettings()) {
            this.id = e.id, this.options = e, this.$form = e.$form, this.enabled = i.enabled, this.isOptional = i.ttl > 0, this.isVisible = i.visible, this.isInvisible = !i.visible, this.inModal = !(!this.isVisible || !this.isOptional && !e.inModal), this._widgetId = null, this._token = null
        }

        get loaded() {
            return "undefined" != typeof grecaptcha
        }

        init() {
            if (!this.enabled || !this.loaded || this._inited) return;
            this._inited = !0;
            const e = this.$form.find(".g-recaptcha");
            e[0] && this.render(e[0])
        }

        getToken() {
            return this._token
        }

        render(e) {
            if (!this.enabled || !this.loaded) return;
            let i = flexbe_cli.run.is_screen_mobile_s ? "compact" : "normal";
            this.isInvisible && (i = "invisible");
            const a = {
                size: i, sitekey: t.getRecaptchaSiteKey(), callback: e => {
                    this._token = e, this.closeModal(), this._onSuccess(e)
                }, "expired-callback": () => {
                    this.reset(), this._onExpired()
                }, "error-callback": () => {
                    this.reset(), this._onError()
                }
            };
            grecaptcha.ready(() => {
                try {
                    this._widgetId = grecaptcha.render(e, a)
                } catch (e) {
                }
                "function" == typeof this.options.onRecaptchaRendered && this.options.onRecaptchaRendered(this)
            })
        }

        runModalCaptcha() {
            const e = `captcha-${this.id}`;
            if (!this._modal) {
                const t = $(`\n                    <div class="m_modal m_${e}" data-is="modal" data-id="${e}" data-m-id="CAPTCHA">\n                        <div class="modal-data">\n                            <div class="component-bg bg-color" data-type="color" data-parallax="0" data-component="background">\n                                <div class="overlay" data-opacity="1"></div>\n                            </div>\n                            \n                            <div class="modal-content" data-contrast="dark" data-v="1" data-as="1">\n                                <div class="close close-times"></div>\n                                \n                                <div class="recaptcha-title">\n                                    ${flexbe_cli.locale.tr("quiz::captcha_label")}\n                                </div>\n                                \n                                <div id="recaptcha-${this.id}" class="g-recaptcha g-recaptcha-visible"></div>\n                            </div>\n                        </div>\n                    </div>\n                `);
                flexbe_cli.modal.$list.append(t), this._modal = flexbe_cli.entity.initArea(t[0])
            }
            flexbe_cli.events.emit("ui_modal_open", {
                id: e, options: {
                    hash: !1, rise: !0, onClose: () => {
                        this._token || this._onError()
                    }
                }
            });
            const t = this._modal.$area.find(".g-recaptcha");
            null != this._widgetId ? this.reset() : this.render(t[0])
        }

        closeModal() {
            this._modal && flexbe_cli.events.emit("ui_modal_close", {id: this._modal.id})
        }

        runInvisibleChallenge() {
            this.enabled && this.loaded && !this.isVisible && (grecaptcha.ready(() => {
                grecaptcha.execute(this._widgetId)
            }), $('iframe[title="recaptcha challenge"]').parent().parent().css("z-index", 2e3))
        }

        reset() {
            this.enabled && this.loaded && (this._token = null, null != this._widgetId && grecaptcha.ready(() => {
                grecaptcha.reset(this._widgetId)
            }), "function" == typeof this.options.onReset && this.options.onReset(this))
        }

        _onError(...e) {
            "function" == typeof this.options.onError && this.options.onError(this, ...e)
        }

        _onSuccess(...e) {
            "function" == typeof this.options.onSuccess && this.options.onSuccess(this, ...e)
        }

        _onExpired(...e) {
            "function" == typeof this.options.onExpired && this.options.onExpired(this, ...e)
        }
    }

    class i extends BaseComponent {
        static getDefaultMask(t) {
            const i = String(t).toLowerCase(), a = flexbe_cli.locale.country;
            let s = e[i] && e[i][a];
            return s && "string" == typeof s && (s = [s]), Object.assign([], s)
        }

        static initMask(e) {
            if ("undefined" == typeof IMask) return !1;
            const t = {
                signed: !0,
                lazy: !0,
                padFractionalZeros: !0,
                definitions: "tel" === e.getAttribute("type") ? {"*": /\d/, "#": /\d/} : {
                    "#": /\d/,
                    "@": /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
                    "*": /./
                }
            }, i = e.getAttribute("data-required");
            let a = e.getAttribute("data-mask");
            a = a && !/[ ()*{}#@]/.test(a) ? this.getDefaultMask(a) : [a];
            try {
                if (a = a.filter(e => /[ ()*_{}#@]/.test(e)), a = a.map(e => e.replace(/0/g, "\\0")), 0 === a.length) throw{message: "Mask is empty"};
                a = 1 === a.length ? String(a[0]) : a.map(e => Object.assign({}, t, {mask: e}));
                const s = new IMask(e, Object.assign({}, t, {
                    mask: a, dispatch: (e, t) => {
                        const i = t.compiledMasks;
                        if (1 === i.length) return i[0];
                        const a = (t.value + e).replace(/\W/g, "");
                        return i.find(e => {
                            const t = e.mask.replace(/\W/g, "")[0];
                            return a[0] === t
                        }) || i[0]
                    }
                })), u = () => {
                    s.masked.isComplete || !i && !s.value ? e.setAttribute("data-mask-complete", !0) : e.removeAttribute("data-mask-complete"), e.setAttribute("value", s.value)
                };
                e.value && u(), s.on("accept", u), e._mask = s
            } catch (t) {
                return t instanceof Error && console.warn("MASK ERROR:", {
                    masks: a,
                    errorMessage: t.message
                }), e.removeAttribute("data-mask"), !1
            }
        }

        static initCalendar(e, t) {
            const i = $(e), a = i.closest("[data-type]").attr("data-type"), s = i.attr("data-date-range") || "any",
                u = i.attr("data-date-work-days") || "0,1,2,3,4,5,6";
            let n = (new Date).getFullYear() + 3;
            if ("datetime" === a) {
                n = (new Date).getMonth() >= 8 ? (new Date).getFullYear() + 1 : (new Date).getFullYear()
            }
            let o = new Date((new Date).getFullYear() - 100, 0, 1), r = new Date(n, 11, 31);
            "datetime" !== a && "future" !== s || (o = new Date), "date" === a && "past" === s && (r = new Date);
            const l = {
                type: a,
                lowerLimit: o,
                upperLimit: r,
                dateRange: s,
                locale: flexbe_cli.locale.translation.calendar,
                dateFormat: flexbe_cli.locale.date_format,
                showDateSelector: "date" === a && "future" !== s,
                constraintByEl: t
            };
            if (u && (l.workDays = u.split(",")), "datetime" === a) {
                const e = i.attr("data-date-time-interval") || 30, t = i.attr("data-date-time-start") || "00:00",
                    a = i.attr("data-date-time-finish") || "00:00";
                l.workTime = {
                    interval: e,
                    start: {hour: +t.substring(0, 2), minute: +t.substring(3, 5)},
                    finish: {hour: +a.substring(0, 2), minute: +a.substring(3, 5)}
                }
            }
            i.calendar(l)
        }

        constructor(...e) {
            super(...e), this.is = "form", this.id = this.core.id, this.eventId = `.${this.id}`, this.$form = this.$component.find("form"), this.$fields = this.$form.find(".form-fields"), this.action = this.$form.find('input[name="action"]').val(), this.isInline = this.$component.attr("data-inline") ? 1 : 0, this.inCart = this.$component.closest(".w_cart").length > 0, this.inModal = this.$component.closest(".m_modal").length > 0, this.busy = !1;
            /*const i = t.getRecaptchaSettings();
            i.enabled && (this.captcha = new t({
                id: this.id,
                $form: this.$component,
                inModal: this.isInline,
                onSuccess: e => {
                    this.captchaRemoveError(), this.clearSubmitting(), (e.inModal || e.isInvisible) && this.sendForm()
                },
                onError: () => {
                    this.captchaAddError()
                }
            }, i))*/
        }

        onInit() {
            this.formInited = !1, this.$masked = this.$form.find("[data-mask]"), this.$calendars = this.$form.find(".form-field-date__input"), this.$delivery = this.$fields.find('[data-type="delivery"]'), this.$masked.length && (this.hasMaskedField = !0, this.require.push("assets/imask.min.js")), this.$calendars.length && (this.hasCalendarField = !0, this.require.push("assets/scroll-lock/scroll-lock.min.js"), this.require.push("assets/calendar.js?v2.3", "assets/calendar.min.css?v2.3")), this.captcha && this.captcha.enabled && this.require.push(`https://www.google.com/recaptcha/api.js?render=explicit&hl=${flexbe_cli.vars._group.language}`), this.$delivery.length && (this.hasDelivery = !0)
        }

        onLoad() {
            (this.core.wasScreen || this.core.wasBeside) && (this.hasMaskedField && this.inputMask(), this.hasCalendarField && this.inputDate(), this.captcha && this.captcha.enabled && this.captcha.loaded && this.captcha.init())
        }

        onScreen({state: e}) {
            if (!e) return !1;
            this.formInit()
        }

        onBeside({state: e}) {
            if (!e) return !1;
            this.formInit()
        }

        onOpen(e = {}) {
            const {top: t} = this.component.getBoundingClientRect();
            !flexbe_cli.run.is_screen_mobile_all && !flexbe_cli.is_admin && flexbe_cli.resize.viewportHeight > t + 100 && this.$component.find(".form-field").eq(0).find("input, textarea").eq(0).focus(), e && e.data && this.setData(e.data)
        }

        onResize() {
            this.$component.find(".range-outer").trigger("resize")
        }

        formInit() {
            if (this.formInited) return !1;
            this.formInited = !0, this.unbindEvents(), this.bindEvents(), this.customize()
        }

        customize() {
            this.fileInput(), this.customSelect(), this.textResize(), this.inputRange(), this.hasDelivery && this.deliveryField(), this.hasMaskedField && this.isLoaded && this.inputMask(), this.hasCalendarField && this.isLoaded && this.inputDate(), this.captcha && this.captcha.enabled && this.captcha.loaded && this.captcha.init(), this.$component.find(".form-field-range").trigger("resize")
        }

        unbindEvents() {
            this.$component.off(this.eventId), this.$form.off(this.eventId)
        }

        bindEvents() {
            const e = this.$fields.find(".form-field-text__input, .form-field-text__textarea, .form-field-checkbox__input"),
                t = this.$form.closest(".scroller");
            e.on(`keydown${this.eventId}`, e => {
                const t = e.currentTarget, i = t.getAttribute("data-check"), a = e.key || "",
                    s = e.ctrlKey || e.metaKey;
                return !("phone" === i && !t._mask && !s && 1 === a.length && /[^\d ()+-]/.test(a)) && (("email" !== i || !/[\s,]/.test(a)) && void 0)
            }), e.on(`input${this.eventId} change${this.eventId}`, e => {
                const t = e.currentTarget, i = $(t);
                i.attr("value", t.value), i.closest(".form-field").removeClass("is_error")
            }), this.$form.on(`click${this.eventId}`, ".form-field-submit", () => {
                this.$form.submit(), this.$form.find(".is_error").addClass("animate"), setTimeout(() => {
                    this.$form.find(".is_error").removeClass("animate")
                }, 500)
            }), this.hasCalendarField && (this.inModal || this.inCart) && setTimeout(() => {
                this.$calendars.toArray().forEach(e => {
                    const i = $(e).data("calendar");
                    t.on(`scroll${this.eventId}`, () => {
                        i.main.toPosition()
                    })
                })
            }, 150), this.$form.off("submit").on(`submit${this.eventId}`, e => {
                return (async () => {
                    if ("function" == typeof this.beforeSend) {
                        if (!1 === await this.beforeSend()) return !1
                    }
                    try {
                        this.sendForm()
                    } catch (e) {
                        alert(e.message)
                    }
                })(), e.preventDefault(), e.stopPropagation(), !1
            })
        }

        setData(e) {
            if (!e) return !1;
            e && e.fields && this.addFields(e.fields), e && e.items && this.addItems(e.items)
        }

        defineBeforeSend(e) {
            "function" == typeof e && (this.beforeSend = e)
        }

        defineAfterSent(e) {
            "function" == typeof e && (this.afterSent = e)
        }

        addFields(e, t = !0) {
            const i = this.$form.find(".form-fields-advanced");
            e.length && i[0] && (t && i.empty(), e.forEach(e => {
                i.find(`input[name="${e.name}"]`).remove();
                const t = $("<input>").attr("type", e.type).attr("name", e.name).attr("value", e.value);
                i.append(t)
            }))
        }

        addItems(e = []) {
            if (!e || !e.length) return;
            let t = 0, i = 0, a = "";
            const s = [];
            e = e.map(e => "object" != typeof e ? {} : (e.count = parseInt(e.count, 10) || 1, e.price = parseFloat(e.price) || 0, e.title = "string" == typeof e.title && e.title.trim() || e.title || "", t += e.price * e.count || 0, i += e.count, e));
            try {
                a = JSON.stringify(e)
            } catch (e) {
            }
            let u = {"product[items]": a, "product[price]": t, "product[total]": i};
            t && (u = _extends({}, u, {"pay[price]": t, "pay[desc]": ""})), Object.entries(u).forEach(([e, t]) => {
                s.push({type: "hidden", name: e, value: t})
            }), this.lastItems = e || [], this.addFields(s)
        }

        sendForm() {
            if (this.busy || !this.validateForm()) return !1;
            const e = this.captcha && this.captcha.getToken();
            if (this.captcha && this.captcha.enabled && !this.captcha.isOptional && !e) {
                if (this.captcha.inModal) return void this.captchaModalRun();
                if (this.captcha.isInvisible) return void this.captchaInvisibleRun()
            }
            this.addSubmitting();
            const t = new FormData(this.$form.get(0));
            if (t.append("is_ajax", "true"), t.append("p_id", flexbe_cli.p_id), t.append("jsform", parseInt(448312, 10)), "undefined" != typeof flexbeAPI && void 0 !== flexbeAPI.customLeadData && t.append("customLeadData", JSON.stringify(flexbeAPI.customLeadData)), flexbe_cli.stat.u_id && t.append("f_uid", flexbe_cli.stat.u_id), flexbe_cli.run.is_OSX && "function" == typeof t.entries) for (const e of t.entries()) {
                const [i, a] = e;
                "object" == typeof a && a instanceof File && 0 === a.size && "function" == typeof t.delete && t.delete(i)
            }
            t.append("f_ab", JSON.stringify(flexbe_cli.stat.AB.getCookie())), "function" == typeof t.delete && t.delete("g-recaptcha-response"), e && t.append("captcha-token", e);
            const i = {
                url: this.$form.attr("action"),
                type: "POST",
                dataType: "json",
                processData: !1,
                contentType: !1,
                data: t,
                xhr: () => $.ajaxSettings.xhr()
            }, a = $.ajax(i);
            a.done(t => {
                const i = 0 == t.status, a = i && t.captcha;
                if (this.captcha && a) e ? this.captchaAddError() : this.captcha.inModal ? this.captchaModalRun() : this.captcha.isInvisible && (this.captcha.isOptional = !1, this.captchaInvisibleRun()); else {
                    if (i) return this.clearSubmitting(!1), console.error("sendForm error: ", t), void alert("Form submitting error!");
                    t.send_formdata = !0, void 0 !== t.pay && (this.pay = t.pay), this.clearSubmitting(!0), this.captchaRemoveError(), this.showDone()
                }
            }), a.fail(e => {
                this.clearSubmitting(!1), console.error("sendForm error: ", e), alert("Form submitting error!")
            })
        }

        addSubmitting() {
            this.busy = +Date.now(), this.$component.addClass("submitting")
        }

        clearSubmitting(e = !1) {
            this.busy && (this.$component.removeClass("submitting"), e ? (this.$component.addClass("success submit-ok"), setTimeout(() => {
                this.busy = !1, this.$component.removeClass("success submit-ok")
            }, 1e3)) : this.busy = !1)
        }

        showDone() {
            if ("function" == typeof this.afterSent && this.afterSent(), Array.isArray(this.lastItems) && this.lastItems.forEach(e => {
                flexbe_cli.stat.ecommerce.add(e.id, e.title, e.count, e.price)
            }), flexbe_cli.stat.reachGoals({
                mainGoal: flexbe_cli.stat.goals.order_done,
                goal: this.$form.find('input[name="goal"]').val(),
                htmlGoal: this.$form.find('textarea[name="goal_html"]').val()
            }), "pay" === this.action && void 0 !== this.pay && null !== this.pay) {
                if (this.pay.pay_link.length > 0) {
                    const e = `${window.location.origin + window.location.pathname + (window.location.search ? `${window.location.search}&` : "?")}pay_id=${this.pay.pay_id}&h=${this.pay.pay_hash}`;
                    try {
                        history.pushState(null, null, e), setTimeout(() => {
                            flexbe_cli.events.emit("pay", {action: "init"})
                        }, 200)
                    } catch (t) {
                        setTimeout(() => {
                            document.location = e
                        }, 500)
                    }
                }
            } else if ("redirect" === this.action) {
                const e = this.$form.find('input[name="action_redirect"]');
                let t;
                e && e.length && (t = e.val()), t && setTimeout(() => {
                    flexbe_cli.helpers.gotoLink(t)
                }, 500)
            } else {
                let e = this.$component.find("[data-modal-id]").attr("data-modal-id");
                if (!flexbe_cli.modal.find(e)) {
                    const t = String(this.id), i = t && t.split("_")[0];
                    if ("done" === e && $(document).find(`.m_${t}`).length) return void flexbe_cli.events.emit("ui_modal_close", {id: t});
                    e = `${i}_${e}`
                }
                flexbe_cli.events.emit("ui_modal_open", {id: e})
            }
            this.resetForm()
        }

        resetForm() {
            this.$form.find(".file-input-outer").removeClass("active");
            const e = this.$fields.find("input, textarea, select"),
                t = e.not("select").not('[type="hidden"]').not(".form-field-range__input").not(".g-recaptcha-response"),
                i = e.filter("select"), a = e.filter(".form-field-range__input");
            i.each((e, t) => {
                const i = t.querySelector("option"), a = i && i.value || "";
                t.value !== a && (t.value = a, t.dispatchEvent(new Event("change", {bubbles: !0, cancelable: !0})))
            }), a.each((e, t) => {
                t.value = t.getAttribute("data-value"), t.dispatchEvent(new Event("change", {
                    bubbles: !0,
                    cancelable: !0
                }))
            }), t.each((e, t) => {
                const i = t.defaultChecked;
                if (["radio", "checkbox"].includes(t.type)) i ? t.setAttribute("checked", !0) : t.removeAttribute("checked"), t.checked = i; else {
                    t.removeAttribute("value"), t.value = "", t.removeAttribute("data-mask-complete");
                    const e = t._mask;
                    e && e.updateValue()
                }
                t.dispatchEvent(new Event("change", {bubbles: !0, cancelable: !0}))
            }), this.captcha && this.captcha.enabled && (this.captcha.reset(), this.captchaRemoveError()), this.$form.get(0).reset()
        }

        validateForm() {
            let e = !0, t = !0;
            return this.$form.find(".form-field[data-type]").each((i, a) => {
                let s;
                const u = $(a), n = u.find("input, textarea, select").not('[type="hidden"]')[0],
                    o = u.attr("data-type");
                if (!n && "captcha" !== o) return;
                const r = "checkbox" === n.type ? n.checked : n.value;
                if ("captcha" === o) {
                    if (!this.captcha) return;
                    s = !this.captcha.getToken() && flexbe_cli.locale.tr("form::captcha_not_checked")
                } else s = this.checkField(n);
                if (u.removeClass("is_error"), s) {
                    const t = u.attr("data-type"), i = u.find(".error");
                    u.outerWidth(), u.addClass("is_error"), i.length && (i.attr("title", s), i.find(".error-text").text(s)), "checkbox" === t && u.find(".form-field-checkbox__box").attr("title", s), e = !1
                }
                t && r && (t = !1)
            }), this.$fields.removeClass("all-fields-empty"), this.$fields.removeClass("has-error"), this.$fields.outerWidth(), e || this.$fields.addClass("has-error"), t && (this.$fields.toggleClass("all-fields-empty", t), 4 === flexbe_cli.theme_id && (e = !1)), e
        }

        captchaAddError(e) {
            if (!this.captcha || !this.captcha.enabled || !this.captcha.loaded) return;
            null == e && (e = flexbe_cli.locale.tr("form::captcha_error"));
            const t = this.$component.find(".captcha-global-error");
            t.find(".error-text").text(e), t.addClass("show"), this.busy && this.clearSubmitting()
        }

        captchaRemoveError() {
            if (!this.captcha || !this.captcha.enabled || !this.captcha.loaded) return;
            const e = this.$component.find('.form-field[data-type="captcha"]'),
                t = this.$component.find(".captcha-global-error");
            e.removeClass("is_error"), t.removeClass("show")
        }

        captchaModalRun() {
            this.captcha && this.captcha.enabled && this.captcha.loaded && this.captcha.runModalCaptcha()
        }

        captchaInvisibleRun() {
            if (!this.captcha || !this.captcha.enabled || !this.captcha.loaded || this.captcha.isVisible) return;
            this.addSubmitting(), this.captcha.runInvisibleChallenge();
            const e = this.busy;
            setTimeout(() => {
                e === this.busy && this.clearSubmitting()
            }, 2500)
        }

        fileInput() {
            this.$component.on(`change${this.eventId}`, ".file-input", e => {
                const t = $(e.currentTarget), i = t.parents(".file-input-outer"), a = t.val(),
                    s = e.currentTarget.files.length;
                if (i.addClass("active"), t.parents(".form-field").removeClass("is_error"), 1 === s && i.find(".form-field-file--file-name").text(a), s > 1) {
                    const e = s % 100, t = s % 10, a = Math.floor(e / 10);
                    let u;
                    u = 1 === t && 11 !== e ? "form.filesMult" : t > 1 && t < 5 && 1 !== a ? "form.filesMult1" : "form.filesMult2", i.find(".form-field-file--file-name").text(`${s} ${flexbe_cli.locale.tr(u)}`)
                }
                0 === s && i.removeClass("active")
            }), this.$component.on(`click${this.eventId}`, ".clear-files", e => {
                const t = $(e.currentTarget).parents(".file-input-outer");
                t.find(".file-input").val(""), t.removeClass("active")
            })
        }

        textResize() {
            this.$component.find(".autosize").each((e, t) => {
                const i = t.offsetHeight - t.clientHeight, a = $(t), s = getComputedStyle(t), u = +a.attr("rows") || 0,
                    n = parseInt(s.paddingTop, 10) + parseInt(s.paddingBottom, 10), o = parseInt(s.lineHeight, 10);
                a.removeAttr("data-autoresize"), a.off("keyup input").on("keyup input", (function (e) {
                    const t = e.currentTarget;
                    t.style.height = `${t.scrollHeight + i}px`
                })), a.css("minHeight", `${n + o * u}px`)
            })
        }

        customSelect() {
            function e(e) {
                return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            this.$component.find(".dropdown-container").remove(), this.$component.find("select.custom-select").each((t, i) => {
                const a = $(i), s = a.closest('[data-type="select"]');
                let u = "", n = "";
                a.children("option").each((t, i) => {
                    const a = $(i), s = a.attr("selected"), o = e(a.val()), r = e(a.text() || "—");
                    "selected" === s ? (u = r, n += `<li class="selected" data-value="${o}">${r}</li>`) : n += `<li data-value="${o}">${r}</li>`
                });
                const o = $(`\n                    <div class="dropdown-container">\n                        <div class="dropdown-select">\n                            <span>${u}</span>\n                        </div>\n\n                        <ul class="dropdown-select-ul scrollable">${n}</ul>\n                    </div>\n                `);
                a.after(o), o.off("click.selectdd").on("click.selectdd", ".dropdown-select", () => {
                    const e = o.hasClass("active");
                    o.toggleClass("active", !e), s.toggleClass("active", !e), e || s.siblings('[data-type="select"]').removeClass("active").find(".dropdown-container").removeClass("active")
                }), o.off("click.selectli").on("click.selectli", ".dropdown-select-ul li", t => {
                    const i = $(t.currentTarget);
                    if (!i.hasClass("optgroup")) {
                        const t = i.closest("ul").siblings(".dropdown-select");
                        o.toggleClass("active"), o.closest('[data-type="select"]').toggleClass("active"), i.siblings("li").removeClass("selected"), i.addClass("selected"), a.val(i.attr("data-value")), t.children("span").html(e(i.text()))
                    }
                })
            })
        }

        deliveryField() {
            if (!this.hasDelivery) return;
            const e = this.$delivery, t = flexbe_cli.widget.cart, i = flexbe_cli.widget.cart.delivery,
                a = e.find(".form-field-delivery-item"), s = e.find(".form-field-delivery-fields"), u = () => {
                    const e = i.activeMethod;
                    if (!e) return;
                    const t = a.filter(`[data-delivery="${e.id}"]`), u = s.filter(`[data-delivery="${e.id}"]`);
                    a.removeClass("form-field-delivery-item--active"), t.addClass("form-field-delivery-item--active"), s.removeClass("form-field-delivery-fields--active"), u.addClass("form-field-delivery-fields--active"), s.find("input, textarea, select").prop("disabled", !0), u.find("input, textarea, select").prop("disabled", !1)
                }, n = () => {
                    a.each((e, t) => {
                        const a = t.getAttribute("data-delivery"), s = $(t).find(".item-price"),
                            u = $(t).find(".delimiter"), n = $(t).find(".min-total"), o = i.getPrice(a),
                            r = `${flexbe_cli.locale.tr("form.min_total_tip")} ${o.minTotalFormatted}`;
                        o.isNotFree || o.untilFree && o.useNotFixTotal ? (s.text(""), u.text("")) : (s.text(o.currentFormatted), u.text("–")), n.text(flexbe_cli.locale.tr(r))
                    })
                };
            u(), n(), e.on("change", ".form-field-delivery-item input", e => {
                if (e.currentTarget.checked) {
                    const t = e.currentTarget.closest("[data-delivery]").getAttribute("data-delivery");
                    i.dispatch("selectMethod", t)
                }
            }), i.on("dispatch", (e, {name: t}) => {
                "selectMethod" === t && u()
            }), t.on("dispatch", () => {
                n()
            })
        }

        checkField(e) {
            if (e.disabled || e.hidden) return !1;
            const t = e.type, i = "checkbox" === t ? e.checked : "file" === t ? e.files : e.value,
                a = e.getAttribute("data-required") || !1, s = e.getAttribute("data-check") || !1;
            let u = !(!a || i) && "form.required";
            if (e._mask && e.getAttribute("data-mask") || !1) {
                !a && !i || e.getAttribute("data-mask-complete") || (u = "tel" === t && i ? "form.phone" : "text" === t && i ? "form.text" : "form.required")
            } else if (s) if ("date" === s || "datetime" === s) {
                const t = $(e).data("calendar"), i = t && t.input.checkError();
                i && (u = i)
            } else if (i.length && "email" === t) {
                /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([-_\dA-Za-zЁА-яё]+\.)+[A-Za-zЁА-яё]{2,}))$/.test(i) || (u = "form.email")
            } else if (i.length && "tel" == t) if (/[^\d\s()+-]/.test(i)) u = "form.digits"; else {
                i.replace(/\D/g, "").length < 5 && (u = "form.minlength")
            } else "file" === t && (u = !(!a || i.length) && "form.required");
            return u = u && flexbe_cli.locale.tr(u) || !1, u
        }

        inputRange() {
            this.$form.find(".form-field-range").each((e, t) => new flexbe_cli.components.classes.rangeInput($(t)))
        }

        inputMask() {
            return "undefined" != typeof IMask && (this.hasMaskedField = !1, this.$masked.each((e, t) => {
                flexbe_cli.components.classes.form.initMask(t);
                const i = !!t.getAttribute("data-placeholder"), a = t._mask;
                i && a && ($(t).on(`focus${this.eventId}`, () => {
                    a.updateOptions({lazy: !1})
                }), $(t).on(`blur${this.eventId}`, () => {
                    if (!a.unmaskedValue) {
                        const e = a.mask.replace(/\*/g, "_"), t = a.value;
                        a.updateOptions({lazy: !0}), a.masked.rawInputValue && e !== t || (a.unmaskedValue = "", a.value = "", a.updateValue())
                    }
                }))
            }), !0)
        }

        inputDate() {
            return this.hasCalendarField = !1, this.inModal || this.inCart ? this.$calendars.each((e, t) => {
                flexbe_cli.components.classes.form.initCalendar(t, this.$component.closest(".scroller")[0])
            }) : this.$calendars.each((e, t) => {
                flexbe_cli.components.classes.form.initCalendar(t)
            }), !0
        }
    }

    flexbe_cli.components.classes.formCaptcha = t, flexbe_cli.components.classes.form = i
}();
!function () {
    class e extends BaseComponent {
        constructor(...e) {
            super(...e), this.is = "bg_element"
        }

        onInit() {
            this.isUpdated && (this.isSet = !1, this.setImages(), this.dispatchEffects())
        }

        onBeside({state: e}) {
            if (!e) return !1;
            this.isSet || (this.setImages(), this.dispatchEffects())
        }

        onWindowResize() {
            this.dispatchEffects()
        }

        getComponentSize() {
            return {width: this.core.tween.width, height: this.core.tween.height}
        }

        dispatchEffects() {
            var e, t;
            const s = e => [!0, 1, "true", "1"].includes(e), i = flexbe_cli.run.is_screen_mobile_all,
                n = s(null == (e = this.$component.attr("data-effects-desktop")) || e),
                o = s(null == (t = this.$component.attr("data-effects-mobile")) || t), a = i ? o : n;
            this.$component.toggleClass("bg-element--hover", a)
        }

        setImages() {
            if (this.isSet) return !0;
            this.isSet = !0, this.$component.find(".pending-image").each(async (e, t) => {
                const s = $(t), i = s.data("id");
                if (!i) return !1;
                const n = {
                        id: i,
                        ext: s.data("ext"),
                        proportion: +s.data("proportion"),
                        type: "background",
                        scale: "cover"
                    }, o = await flexbe_cli.helpers.getImageOptimalSize(n, this.getComponentSize()),
                    a = flexbe_cli.helpers.getImageUrl(n, o.width);
                s.css("background-image", `url("${a}")`).removeClass("pending-image")
            })
        }
    }

    flexbe_cli.components.classes.bg_element = e
}();
!function () {
    const e = flexbe_cli.components.classes.form;
    flexbe_cli.components.classes.form = class extends e {
        customSelect() {
            this.$form.find(".dropdown-container").remove(), this.$form.find("select.atom-custom-select").each((e, t) => {
                const l = $(t), s = l.closest('[data-type="select"]'), o = l.children("option").length,
                    n = this.$form.hasClass("style-underlined") ? "sharp" : "",
                    c = $('\n                    <div class="dropdown-container">\n                        <div tabindex="0" class="dropdown-select">\n                            <span class="selected"></span>\n                            \n                            <span class="arrow">\n                                <svg viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">\n                                    <path fill="currentColor" d="M 1.4 6.99441e-15L 0 1.34043L 5 6L 10 1.34043L 8.6 0L 5 3.34998L 1.4 6.99441e-15Z"/>\n                                </svg>\n                            </span>\n                        </div>\n                    </div>\n                '),
                    i = $('\n                    <div class="atom-select size--medium">\n                        <div class="overlay"></div>\n                    </div>\n                '),
                    a = $(`<ul class="scrollable dropdown-select-ul ${n}"></ul>`),
                    r = c.find(".dropdown-select .selected");
                let d = !1, f = !1, p = !1;

                function u(e, t) {
                    e[0] && (e.siblings("li").removeClass("selected"), e.addClass("selected"), l.val(e.attr("data-value")), r.text(e.text()), t && m())
                }

                function v() {
                    const e = a.children(".option-e"), t = e.height(), l = a.height(),
                        s = t * (e.index($(".selected", a)) + 1);
                    if (l > t * o) return !1;
                    a.scrollTop() < s - l ? a.animate({scrollTop: s - l}, 100) : a.scrollTop() > s - t && a.animate({scrollTop: s - t}, 100)
                }

                function m() {
                    p = !1, i.removeClass("active"), s.removeClass("active"), clearTimeout(d), i.detach()
                }

                function h() {
                    const e = c.hasClass("active");
                    i.off("click.closeSelect").on("click.closeSelect", ".overlay", e => {
                        m(), document.elementFromPoint(e.clientX, e.clientY).focus()
                    }), i.off("click.selectli").on("click.selectli", ".dropdown-select-ul li", e => {
                        u($(e.currentTarget), !0)
                    }), i.off("mousewheel.selectUl").on("mousewheel.selectUl", ".dropdown-select-ul", e => {
                        const t = e.currentTarget.scrollHeight, l = e.currentTarget.clientHeight;
                        return !(e.currentTarget.scrollTop === t - l && event.deltaY > 0 || 0 === e.currentTarget.scrollTop && event.deltaY < 0)
                    }), $("body").append(i), p = !0, clearTimeout(d), a.css({
                        left: `${c.offset().left}px`,
                        top: `${c.offset().top}px`,
                        width: `${c.width()}px`
                    }), i.toggleClass("active", !e), s.toggleClass("active", !e), e || s.siblings('[data-type="select"]').removeClass("active").find(".dropdown-container").removeClass("active"), v()
                }

                l.children("option").each((e, t) => {
                    const l = $(t), s = l.val(), o = l.text() || "—", n = l.attr("selected"),
                        c = $('<li class="option-e"><span class="option-inner"></span></li>');
                    "selected" === n && c.addClass("selected"), c.attr("data-value", s), c.find(".option-inner").text(o), a.append(c)
                }), r.text(l[0].value), i.append(a), l.after(c), flexbe_cli.run.is_screen_desktop_all || flexbe_cli.run.is_screen_tablet_all || !flexbe_cli.responsive ? (c.off("click.selectdd").on("click.selectdd", ".dropdown-select", () => {
                    h()
                }), c.off("focus.selectfocus").on("focus.selectfocus", ".dropdown-select", () => {
                    f = !0
                }), c.off("blur.selectblur").on("blur.selectblur", ".dropdown-select", () => {
                    f = !1, d = setTimeout(() => {
                        m()
                    }, 200)
                }), l.off("change.changeSelect").on("change.changeSelect", e => {
                    const t = i.find(".dropdown-select-ul li"), l = e.currentTarget.value;
                    t.removeClass("selected"), t.filter((e, t) => t.getAttribute("data-value") === l).addClass("selected"), r.text(l)
                }), c.off("keydown.selectkeydown").on("keydown.selectkeydown", ".dropdown-select", e => {
                    if (f && 38 === e.keyCode || 40 === e.keyCode || 13 === e.keyCode || 27 === e.keyCode || 32 === e.keyCode) {
                        e.preventDefault();
                        const t = a.find(".option-e.selected");
                        40 === e.keyCode ? (u(t.next(), !1), v()) : 38 === e.keyCode ? (u(t.prev(), !1), v()) : 13 !== e.keyCode && 32 !== e.keyCode && 27 !== e.keyCode || (p ? m() : 27 !== e.keyCode && h())
                    }
                })) : l.off("change.selectdd").on("change.selectdd", e => {
                    const t = e.target.value;
                    r.text(t)
                })
            })
        }

        fileInput() {
            this.$form.on(`change${this.eventId}`, ".file-input--original", e => {
                const t = $(e.currentTarget), l = t.parents(".file-input-outer"), s = t.val(),
                    o = e.currentTarget.files.length;
                if (l.addClass("active"), t.parents(".form-field").removeClass("is_error"), 1 === o && l.find(".file-item--title").text(s), o > 1) {
                    const e = o % 100, t = o % 10, s = Math.floor(e / 10);
                    let n;
                    n = 1 === t && 11 !== e ? "form.filesMult" : t > 1 && t < 5 && 1 !== s ? "form.filesMult1" : "form.filesMult2", l.find(".file-item--title").text(`${o} ${flexbe_cli.locale.tr(n)}`)
                }
                0 === o && l.removeClass("active")
            }), this.$form.on(`click${this.eventId}`, ".clear-files", e => {
                const t = $(e.currentTarget).parents(".file-input-outer");
                t.find(".file-input--original").val(""), t.removeClass("active")
            })
        }
    }
}();

function _extends() {
    return (_extends = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
        }
        return t
    }).apply(this, arguments)
}

!function () {
    const t = ".form-field-text__input, .dropdown-select", e = ".form-field-date__input", i = "next", s = "result";

    class a extends BaseComponent {
        constructor(...t) {
            super(...t), this.is = "quiz", this.id = this.core.id, this.eventId = `.quiz${this.id}`;
            const e = flexbe_cli.components.classes.formCaptcha;
            e.getRecaptchaSettings().enabled && (this.captcha = new e({
                id: this.id,
                $form: this.$component,
                onSuccess: t => {
                    this.captchaRemoveError(), this.toResult({force: !0})
                },
                onError: () => {
                    this.captchaAddError()
                }
            })), this.createQuiz()
        }

        onInit() {
            this.$masked = this.$form.find("[data-mask]"), this.require = [], this.$masked.length && (this.needInitMasks = !0, this.require.push("assets/imask.min.js?v1")), this.$calendars = this.$form.find(".form-field-date__input"), this.$calendars.length && (this.needInitCalendar = !0, this.require.push("assets/scroll-lock.min.js"), this.require.push("assets/calendar.js", "assets/calendar.min.css?v2.3")), this.captcha && this.captcha.enabled && this.require.push("https://www.google.com/recaptcha/api.js?render=explicit")
        }

        onLoad() {
            (this.core.wasScreen || this.core.wasBeside) && (this.needInitMasks && this.initFieldMask(), this.needInitCalendar && this.initFieldDate(), this.captcha && this.captcha.enabled && this.captcha.loaded && this.captcha.init()), this.isLoaded = !0
        }

        onScreen({state: t}) {
            if (!t) return !1;
            this.initQuiz()
        }

        onBeside({state: t}) {
            if (!t) return !1;
            this.initQuiz()
        }

        onOpen(t = {}) {
            this.initQuiz(), this.started || this.startQuiz(), t && t.data && this.setData(t.data)
        }

        onResize() {
            this.$component.find(".range-outer").trigger("resize")
        }

        createQuiz() {
            this.timeouts = [], this.history = [], this.swiper = [], this.$area = this.core.$area, this.$root = this.core.$root, this.$form = this.$component.find("form"), this.$steps = this.$component.find(".quiz-steps"), this.$actions = this.$component.find(".quiz-actions"), this.$progress = this.$component.find(".quiz-progress"), this.$scroller = this.$root.find(".scroller"), this.$stepsWrapper = this.$steps.find(".steps-wrapper"), this.$outerWrapper = this.$area.find('[data-quiz-part="wrapper"]'), this.$welcomeScreen = this.$outerWrapper.find('[data-quiz-part="welcome"]'), this.$progress.length || (this.$progress = this.$area.find('[data-quiz-part="progress"]')), this.rootModal = "modal" === this.core.is && this.core, this.hasWelcome = !!this.rootModal || this.$welcomeScreen.length > 0, this.autoNextEnabled = +this.$steps.attr("data-autonext") || 0, this.currentId = null, this.currentIndex = -1, this.total = parseInt(this.$component.attr("data-total-steps"), 10)
        }

        initQuiz() {
            if (this.inited) return;
            this.inited = !0, this.resetForm(), this.bindEvents(), this.initFields(), this.initControls(), this.captcha && this.captcha.enabled && this.captcha.loaded && this.captcha.init();
            const t = flexbe_cli.is_admin && this.$area.data("initialQuizStepId"),
                e = flexbe_cli.is_admin && this.$area.data("initialQuizStepIndex");
            t ? this.toStep({id: t, index: e, animated: !1}) : this.hasWelcome || this.startQuiz({animated: !1})
        }

        bindEvents() {
            flexbe_cli.events.off("quiz_command").on("quiz_command", (t, e) => {
                let i;
                flexbe_cli.components.instances[e.id] && flexbe_cli.components.instances[e.id].forEach(t => {
                    "quiz" === t.is && (i = t)
                }), i && ("welcome" === e.command ? i.toWelcome() : "start" === e.command ? i.startQuiz() : "step" === e.command && i.toStep({
                    id: e.stepId,
                    index: e.stepIndex,
                    force: e.force,
                    animated: e.animated,
                    scroll: e.scroll
                }))
            }), this.$form.off(this.eventId), this.$scroller.off(this.eventId), this.$form.on(`input${this.eventId} change${this.eventId}`, "input, textarea", t => {
                const e = t.currentTarget, i = e.value, s = $(e);
                s.attr("value", i), s.closest(".field").removeClass("is_error")
            }), this.$form.on(`keydown${this.eventId}`, "input, textarea", t => {
                const e = t.currentTarget, i = e.getAttribute("data-check"), s = t.key || "",
                    a = t.ctrlKey || t.metaKey;
                return !("phone" === i && !e._mask && !a && 1 === s.length && /[^\-+\d ()]/.test(s)) && (("email" !== i || !/[\s,]/.test(s)) && void 0)
            }), this.needInitCalendar && "modal" === this.core.is && setTimeout(() => {
                this.$calendars.toArray().forEach(t => {
                    const e = $(t).data("calendar");
                    this.$scroller.on(`scroll${this.eventId}`, () => {
                        e.main.toPosition()
                    })
                })
            }, 150), this.$form.on(`submit${this.eventId}`, () => this.onSubmit())
        }

        initControls() {
            $("body").off(`keydown${this.eventId}`).on(`keydown${this.eventId}`, t => {
                const e = 9 === t.keyCode, i = 13 === t.keyCode;
                if (!i && !e) return;
                const s = flexbe_cli.block.hasOverlay || [], a = this.rootModal && "modal" === s[s.length - 1],
                    r = !this.rootModal && !s.length, n = this.inFocus && (r || a), o = t.metaKey || t.ctrlKey,
                    l = t.shiftKey;
                if (n && ("TEXTAREA" !== t.target.tagName || !i || o)) {
                    if (l && e) this.toPrevStep(); else if (!l && !o) {
                        const t = this.$currentStep.find(":focus").closest(".field").next(".field");
                        this.focusField(t) || this.toNextStep()
                    }
                    return t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), !1
                }
            }), this.$component.off("click.control").on("click.control", "[data-quiz-action]", t => {
                const e = t.currentTarget.getAttribute("data-quiz-action");
                "welcome" === e ? this.toWelcome() : "prev" === e ? this.toPrevStep() : "next" === e && this.toNextStep()
            })
        }

        setProgress() {
            const t = this.$progress.find(".progress-loader-bar .current"), e = this.total, i = t.data("unit");
            let s = this.realIndex + 1;
            if (flexbe_cli.is_admin && -1 === this.realIndex && "welcome" !== this.currentId) {
                s = (+this.$currentStep.prevAll('[data-linked="linked"]').first().attr("data-real-index") + 1 || 0) + 1
            }
            let a = parseInt(100 * s / e, 10) || 0;
            if (s = Math.max(0, Math.min(e, s)), a = Math.max(0, Math.min(100, a)), t.length && i) {
                let r = `${a}%`;
                "step" === i ? r = `${s} / ${e}` : "none" === i && (r = ""), t.attr("data-value", r)
            }
            this.$progress.attr("data-current-progress", a), this.$progress.attr("data-current", s), this.$progress.attr("data-total", e), this.$progress.find(".progress-text .current").text(s), this.$progress.find(".progress-text .total").text(e), this.$progress.find(".progress-percent .current").text(a), this.$progress.find(".progress-loader-bar .current").css("width", `${a}%`), this.$progress.find(".progress-loader-circle .current").attr("stroke-dashoffset", `${Math.abs(100 - a)}`)
        }

        setActionButtons() {
            let t = this.hasWelcome || this.history.length > 1 || flexbe_cli.is_admin && 0 !== this.realIndex && this.currentIndex > 0;
            !flexbe_cli.is_admin || !this.rootModal || this.realIndex && this.currentIndex || (t = !1), this.$actions.toggleClass("show-prev", t)
        }

        toWelcome({scroll: t = !0} = {}) {
            if (!this.hasWelcome) return this.startQuiz({scroll: t}), !0;
            if (this.started = !1, this.currentIndex = -1, this.realIndex = -1, this.currentId = "welcome", this.$area.data("initialQuizStepId", this.currentId), this.$area.data("initialQuizStepIndex", this.currentIndex), this.$outerWrapper.attr("data-active-step", this.currentId), this.$outerWrapper.attr("data-active-index", this.currentIndex), this.$outerWrapper.toggleClass("quiz-state-welcome", !0), this.$outerWrapper.toggleClass("quiz-state-started", !1), this.rootModal) flexbe_cli.is_admin || flexbe_cli.events.emit("ui_modal_close", {id: this.rootModal.id}); else if (this.$outerWrapper.length) {
                const t = this.$welcomeScreen.outerHeight() || 0;
                this.$outerWrapper.css("minHeight", t)
            }
            return this.setProgress(), this.setActionButtons(), t && "block" === this.core.is && !flexbe_cli.is_admin && flexbe_cli.scroll.scrollTo(this.$area), flexbe_cli.events.emit("quiz_event", {
                event: "welcome",
                sender: "core",
                quiz: this
            }), !0
        }

        startQuiz({animated: t, scroll: e} = {}) {
            this.sessionId = parseInt(Date.now() / 1e3, 10);
            const i = this.$stepsWrapper.find('.step[data-type="root"][data-linked="linked"]').first();
            i.length && this.toStep({$step: i, force: !0, animated: t, scroll: e})
        }

        autoNextStep() {
            !this.autoNextEnabled || this.$currentStep.find(".quiz-fields").data("count") > 1 || setTimeout(() => {
                this.toNextStep()
            }, 150)
        }

        toPrevStep() {
            const t = this.history[this.history.length - 2];
            if (!t) {
                const t = this.$currentStep.prevAll('.step[data-type="root"][data-linked="linked"]').first();
                return t.length ? this.toStep({$step: t}) : this.hasWelcome && this.toWelcome(), !1
            }
            return this.toStep(t), !0
        }

        toNextStep({force: t} = {}) {
            if (!(t || this.validateStep())) return !1;
            const e = this.$currentStep.attr("data-goto"), s = this.$currentStep.attr("data-goal"),
                a = this.$currentStep.attr("data-html-goal"), r = this.history.find(t => t.id === this.currentId) || {},
                n = this.$currentStep.find("[data-field-id]").map((t, e) => {
                    const i = $(e), s = i.attr("data-field-id"), a = i.find("input, textarea").not('[type="hidden"]'),
                        r = i.find("[data-goto]"), n = i.attr("data-type"), o = i.find(`[name="vars[${s}]"]`).val();
                    let l = a.attr("type"), c = r, d = a.val();
                    ["checkbox", "radio", "image"].includes(n) ? c = r.filter(":checked") : "select" === n ? (c = c.filter((t, e) => e.selected), l = "select") : "file" === n && (d = Array.from(a[0].files));
                    const h = c.toArray(), p = h.map(t => t.getAttribute("data-goto")).filter(t => t);
                    return {
                        id: s,
                        title: o,
                        type: n,
                        inputType: l,
                        value: d,
                        variants: h.map(t => ({id: t.getAttribute("data-id"), value: t.value})).filter(t => t.id),
                        goto: p
                    }
                }).toArray(), o = n.map(t => {
                    const e = {id: t.id, title: t.title, type: t.type};
                    return ["radio", "checkbox", "select", "image"].includes(t.inputType) ? e.variants = t.variants : e.value = t.value, e
                }), l = n.reduce((t, e) => t.concat(e.goto), []), c = this.getNextStep({gotoId: l[0] || e || i});
            r && (r.fields = n, r.answers = o, r.toId = c, r.goal = s, r.htmlGoal = a), this.toStep({
                id: c,
                historyItem: r
            })
        }

        getNextStep({gotoId: t, $current: e = this.$currentStep} = {}) {
            if (t === s) {
                const t = this.history.map(t => t.$step[0]),
                    e = this.$stepsWrapper.find('[data-type="root"][data-linked="linked"][data-required]').filter((e, i) => !t.includes(i));
                return e.length ? e.eq(0).attr("data-id") : s
            }
            let a = t;
            if (t === i || !this.$stepsWrapper.find(`.step[data-id="${a}"]`).length) {
                a = e.nextAll('.step[data-type="root"][data-linked="linked"]').first().attr("data-id")
            }
            if (t === i && !a) return this.getNextStep({gotoId: s, $current: e});
            if (!this.checkStepCondition({id: a})) {
                const t = e.nextAll('.step[data-type="root"][data-linked="linked"]').first();
                return this.getNextStep({gotoId: i, $current: t})
            }
            return a
        }

        toStep({id: t, index: e, $step: i, force: a, scroll: r = !0, animated: n = !0, historyItem: o}) {
            if (this.inStepAnimation) return !1;
            if (null == o && (o = this.history.find(t => t.id === this.currentId)), t === s) return void this.toResult({historyItem: o});
            if (i && i.length || null == t || (i = this.$stepsWrapper.find(`.step[data-id="${t}"]`)), i && i.length || null == e || (i = this.$stepsWrapper.find(`.step[data-index="${e}"]`)), !i || !i.length) return !1;
            if (t = null != t ? t : i.attr("data-id"), e = parseInt(null != e ? e : i.attr("data-index"), 10), t === this.currentId) return this.enableStep(i), !1;
            const l = flexbe_cli.is_admin ? parseInt(i.attr("data-real-index"), 10) : e, c = e > this.currentIndex;
            n || this.$area.addClass("noanimate"), i.find(".is_error").removeClass("is_error");
            const d = i.outerHeight(), h = {
                $step: i,
                id: t,
                title: i.find(".step-title").text().trim(),
                index: e,
                realIndex: l,
                fields: [],
                answers: []
            };
            let p = [];
            a ? (p = this.history, this.history = []) : (p = this.history.filter(t => t.index >= h.index), this.history = this.history.filter(t => !p.includes(t))), p.forEach(t => {
                this.disableStep(t.$step)
            }), this.enableStep(i), this.started = !0, this.history.push(h), this.$component.addClass("quiz-started"), n && this.$component.addClass("step-change-animation");
            const u = window.scrollParent(this.$component[0]) || document.scrollingElement, f = u && u.scrollTop || 0,
                m = this.$stepsWrapper.outerHeight();
            if (this.$area.data("initialQuizStepId", t), this.$area.data("initialQuizStepIndex", e), this.$outerWrapper.attr("data-active-step", t), this.$outerWrapper.attr("data-active-index", e), this.$outerWrapper.toggleClass("quiz-state-welcome", !1), this.$outerWrapper.toggleClass("quiz-state-started", !0), i.toggleClass("higher", d > m), n && this.$stepsWrapper.css("height", `${m}px`), this.$outerWrapper.css("minHeight", `${m}px`), i.prevAll().removeClass("active next").addClass("prev"), i.nextAll().removeClass("active prev").addClass("next"), i.removeClass("next prev").addClass("active"), this.currentId = t, this.currentIndex = e, this.realIndex = l, this.$currentStep = i, this.setProgress(), this.setActionButtons(), flexbe_cli.run.is_ie && this.$area.find(".cover").css("height", "auto"), 2 === flexbe_cli.theme_id) {
                this.$area.find(".b_head").length && flexbe_cli.block.headers.setHeaders()
            }
            return this.timeouts = this.timeouts.filter(t => clearTimeout(t)), this.timeouts.push(setTimeout(() => {
                n || this.$area.removeClass("noanimate")
            }, 20)), n ? (this.inStepAnimation = !0, this.timeouts.push(setTimeout(() => {
                this.$stepsWrapper.css("height", ""), this.$component.removeClass("step-change-animation"), this.$component.find(".range-outer").trigger("resize"), this.inStepAnimation = !1
            }, 250)), r && (this.timeouts.push(setTimeout(() => {
                const t = this.$area.get(0).getBoundingClientRect();
                this.$stepsWrapper.css("height", `${d}px`);
                const e = u.scrollTop, i = this.$area.get(0).getBoundingClientRect().bottom - t.bottom - (f - e);
                i && u.scrollTo(0, e + i)
            }, 150)), flexbe_cli.is_admin || this.timeouts.push(setTimeout(() => {
                let t = this.$component;
                this.$area.outerHeight() <= flexbe_cli.resize.viewportHeight && (t = this.$area), flexbe_cli.scroll.scrollTo(t, {
                    centered: !0,
                    force: !1,
                    complete: () => {
                        flexbe_cli.run.is_mobile || this.focusField(i)
                    }
                })
            }, 450)))) : this.$component.find(".range-outer").trigger("resize"), o = o || {}, this.lastHistoryItem = o, flexbe_cli.events.emit("quiz_event", {
                event: "step",
                sender: "core",
                quiz: this,
                payload: {
                    fromId: o.id,
                    fromTitle: o.title,
                    fromAnswers: o.answers,
                    toNext: c,
                    toId: t,
                    sessionId: this.sessionId
                },
                answerGoals: {goal: o.goal, htmlGoal: o.htmlGoal}
            }), !0
        }

        toResult({force: t, historyItem: e} = {}) {
            const i = t || this.validateStep();
            return !!(t || !this.busy && i) && (null == e && (e = this.history[this.history.length - 1]), this.result = this.getResult(), this.lastHistoryItem = e, this.$form.submit(), !0)
        }

        validateStep() {
            let t = !0;
            return this.$currentStep && this.$currentStep.length && this.$currentStep.find(".field[data-type]").each((e, i) => {
                const s = $(i), a = s.attr("data-type");
                let r;
                if (s.removeClass("is_error"), "captcha" === a) {
                    if (!this.captcha) return;
                    r = !this.captcha.getToken() && flexbe_cli.locale.tr("form::captcha_not_checked")
                } else r = this.checkField(s);
                r && (s.outerWidth(), s.addClass("is_error animate"), setTimeout(() => {
                    s.removeClass("animate")
                }, 500), s.find(".error").text(r), t && this.focusField(s, 500), t = !1)
            }), t
        }

        getResult() {
            const t = this.$form.find("input[name=results]").data("value") || [];
            let e = t.filter(t => null != t.id && "default" !== t.id).find(t => this.checkResultCondition(t));
            return e || (e = t.find(t => null == t.id || "default" === t.id) || t[0]), "object" != typeof e.action && (e.action = {
                pay: e.pay,
                name: e.action,
                modal_id: e.modal_id,
                action_redirect: e.action_redirect
            }), e
        }

        checkStepCondition() {
            return !0
        }

        checkResultCondition(t) {
            const e = t.conditions || {}, i = e.union, s = e.list || [],
                a = this.history.reduce((t, e) => t.concat(e.fields), []);
            let r = s.map(t => {
                const e = a.find(e => e.id == t.field);
                return {condition: t, field: e}
            });
            return !!r.length && (r = r["and" === i ? "every" : "some"](({condition: t, field: e}) => {
                let i = !0;
                if (!e) return !1;
                if ("vars" === t.type) {
                    const s = e.variants || [], a = (t.variants || []).map(t => `${t}`);
                    if (!s.length) return !!t.emptyVariant;
                    if (t.unionExtra || (i = s.every(t => a.includes(`${t.id}`))), i) {
                        let r = t.union;
                        "radio" !== e.inputType && "select" !== e.inputType || (r = "or"), i = a["and" === r ? "every" : "some"](t => s.find(e => e.id == t))
                    }
                } else if ("range" === t.type) {
                    const s = `${e.value}`.replace(/\s+/g, "").split(/\s[—-]\s/).map(t => +t).filter(t => "number" == typeof t && !isNaN(t)),
                        a = Math.min.apply(null, s), r = Math.max.apply(null, s), o = a !== r;
                    let l = +t.rangeLimitFrom, c = +t.rangeLimitTo;
                    if ("equal" === t.operator) return o ? a <= l && l <= r : l === a;
                    n(l) && n(c) && (l = Math.min(t.rangeLimitFrom, t.rangeLimitTo), c = Math.max(t.rangeLimitTo, t.rangeLimitFrom)), i && n(l) && (i = l <= a), i && n(c) && (i = r <= c)
                } else if ("text" === t.type) {
                    const i = t.fill, s = (e.value || "").trim().replace(/ +/g, " "),
                        a = t.answers.map(t => `${t}`.toLowerCase()).filter(t => t);
                    if ("fill" === i) return !!s;
                    if ("empty" === i) return !s;
                    if ("include" === i) return a.some(t => {
                        return new RegExp("^" + t + "|\\s" + t, "i").test(s)
                    });
                    if ("exclude" === i) return a.every(t => {
                        return !new RegExp("^" + t + "|\\s" + t, "i").test(s)
                    })
                } else if ("file" === t.type) {
                    const i = t.fill, s = e.value;
                    if ("fill" === i) return !!s.length;
                    if ("empty" === i) return !s.length
                }
                return i
            }), r);

            function n(t) {
                return !isNaN(+t) && null != t && "" != t
            }
        }

        checkField(t) {
            const e = t.find("input, textarea, select").not('[type="hidden"]'), i = e[0], s = t[0];
            if (!i) return;
            const a = s.getAttribute("data-type"),
                r = [!0, 1, "true", "1"].includes(s.getAttribute("data-is-required")),
                n = i.getAttribute("data-check") || !1, o = i._mask && i.getAttribute("data-mask") || !1;
            let l;
            l = ["checkbox", "radio", "image"].includes(a) ? !!e.closest(":checked").length : "file" === a ? i.files : i.value;
            let c = !(!r || l) && "form.required";
            if (o) {
                !r && !l || i.getAttribute("data-mask-complete") || (c = "phone" === a && l ? "form.phone" : "text" === a && l ? "form.text" : "form.required")
            } else if (n) if (l.length && "email" === a) {
                /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([-_\dA-Za-zЁА-яё]+\.)+[A-Za-zЁА-яё]{2,}))$/.test(l) || (c = "form.email")
            } else if (l.length && "phone" == a) if (/[^0-9+\(\)\-\s]/.test(l)) c = "form.digits"; else {
                l.replace(/[^0-9]/g, "").length < 5 && (c = "form.minlength")
            } else if ("file" === a) c = !(!r || l.length) && "form.required"; else if ("date" === a || "datetime" === a) {
                const t = $(i).data("calendar"), e = t && t.input.checkError();
                e && (c = e)
            }
            return c = c && flexbe_cli.locale.tr(c) || !1, c
        }

        disableStep(t) {
            t.find("input, textarea, select").prop("disabled", !0)
        }

        enableStep(t) {
            t.find("input, textarea, select").prop("disabled", !1)
        }

        focusField(i, s = 200) {
            if (!i || !i.length) return !1;
            if (flexbe_cli.run.is_ios) return !1;
            const a = i.find(t).not(e).first();
            return !!a.length && (s ? setTimeout(() => a.focus(), s) : a.focus(), !0)
        }

        initFields() {
            this.initFieldImage(), this.initFieldCheckbox(), this.initFieldRadio(), this.initFieldSelect(), this.initFieldTextarea(), this.initFieldFile(), this.initFieldRange(), this.isLoaded && (this.needInitMasks && this.initFieldMask(), this.needInitCalendar && this.initFieldDate())
        }

        initFieldImage() {
            this.$component.off("click.fieldImages").on("click.fieldImages", ".form-field-image-item", t => {
                const e = t.currentTarget.querySelector("input"), i = !e.checked;
                e.checked = i, i && "radio" === e.type && this.autoNextStep()
            })
        }

        initFieldFile() {
            this.$component.off("change.uploadFile").on("change.uploadFile", ".file-input", t => {
                const e = $(t.currentTarget), i = e.parents(".form-field-file"), s = i.find(".form-field-file--files"),
                    a = e.val(), r = t.currentTarget.files.length;
                if (i.addClass("active"), e.parents(".field").removeClass("is_error"), 0 === r) i.removeClass("active"); else if (1 === r) s.find(".text").text(a); else if (r > 1) {
                    const t = r % 100, e = r % 10;
                    let i;
                    i = 1 === e && 11 !== t ? "form.filesMult" : e > 1 && e < 5 ? "form.filesMult1" : "form.filesMult2", s.find(".text").text(`${r} ${flexbe_cli.locale.tr(i)}`)
                }
            }), this.$component.off("click.clearFiles").on("click.clearFiles", ".clear-files", t => {
                const e = $(t.currentTarget).parents(".form-field-file");
                e.find(".file-input").val(""), e.removeClass("active")
            })
        }

        initFieldCheckbox() {
        }

        initFieldRadio() {
            this.autoNextEnabled && this.$component.off("click.initRadio").on("click.initRadio", ".form-field-radio-item", () => {
                this.autoNextStep()
            })
        }

        initFieldSelect() {
            function t(t) {
                return t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            this.$component.find(".dropdown-container").remove(), this.$component.find("select").each((e, i) => {
                const s = $(i), a = s.closest('[data-type="select"]');
                let r = "", n = "";
                s.children("option").each((e, i) => {
                    const s = $(i), a = t(s.val()), o = t(s.text() || "—");
                    "selected" === s.attr("selected") ? (r = o, n += `<li class="selected" data-value="${a}">${o}</li>`) : n += `<li data-value="${a}">${o}</li>`
                });
                const o = $(`<div class="dropdown-container">\n                    <div class="dropdown-select">\n                        <span>${r}</span>\n                        <i></i>\n                    </div>\n                    \n                    <ul class="dropdown-select-ul">${n}</ul>\n                </div>`),
                    l = o.find(".dropdown-select-ul");
                s.after(o), o.off("click.selectdd").on("click.selectdd", ".dropdown-select", () => {
                    const t = this.$component.closest(".b_block"), e = this.core, i = t.outerHeight() - 60,
                        s = l.outerHeight(), r = Math.min(i, s), n = o.offset().top, c = e.tween.end - 30;
                    n + r > c && l.css({top: `${c - (n + r)}px`, maxHeight: `${r}px`}), setTimeout(() => {
                        const t = !o.hasClass("active");
                        o.toggleClass("active", t), a.toggleClass("active", t), t && $("body").on("click.quiz-select-element", t => {
                            $(t.target).is(o) || $(t.target).closest(o).length || (o.removeClass("active"), a.removeClass("active"), $("body").off("click.quiz-select-element"))
                        })
                    }, 50)
                }), o.off("click.selectli").on("click.selectli", ".dropdown-select-ul li", e => {
                    const i = $(e.currentTarget);
                    if (!i.hasClass("optgroup")) {
                        const e = i.closest("ul").siblings(".dropdown-select");
                        o.removeClass("active"), a.removeClass("active"), i.siblings("li").removeClass("selected"), i.addClass("selected"), s.val(i.attr("data-value")), e.children("span").html(t(i.text()))
                    }
                }), s.off("change.changeSelect").on("change.changeSelect", e => {
                    const i = l.find("li"), s = e.currentTarget.value;
                    i.removeClass("selected"), i.filter(`[data-value="${s}"]`).addClass("selected"), o.find(".dropdown-select > span").html(t(s))
                })
            })
        }

        initFieldTextarea() {
            this.$component.find("textarea.autosize").each((t, e) => {
                const i = e.offsetHeight - e.clientHeight, s = $(e);
                s.removeAttr("data-autoresize"), s.off("keyup input").on("keyup input", (function (t) {
                    t.currentTarget.style.height = "auto", t.currentTarget.style.height = `${t.currentTarget.scrollHeight + i}px`
                }))
            })
        }

        initFieldRange() {
            this.$component.find(".form-field-range").each((t, e) => new flexbe_cli.components.classes.rangeInput($(e)))
        }

        addSubmitting() {
            this.busy = +Date.now(), this.$component.addClass("submitting"), this.$form.addClass("submitting")
        }

        clearSubmitting(t = !1) {
            this.busy && (this.$component.removeClass("submitting"), this.$form.removeClass("submitting"), t ? (this.$component.addClass("success"), setTimeout(() => {
                this.busy = !1, this.$component.removeClass("success")
            }, 1e3)) : this.busy = !1)
        }

        onSubmit() {
            const t = {
                p_id: flexbe_cli.p_id,
                id: this.core.id,
                name: this.result.name,
                action: this.result.action.name,
                jsform: parseInt(448312, 10)
            };
            if (flexbe_cli.stat.u_id && (t.f_uid = flexbe_cli.stat.u_id), "pay" === this.result.action.name && this.result.action.pay) {
                const e = this.result.action.pay;
                e.desc && (t["pay[desc]"] = e.desc), e.price && (t["pay[price]"] = e.price, e.title && (t["product[items]"] = JSON.stringify([{
                    title: e.title,
                    id: `${flexbe_cli.p_id}_${flexbe_cli.s_id}`,
                    img: e.img,
                    count: 1,
                    price: e.price
                }]), t["product[price]"] = e.price, t["product[total]"] = 1))
            }
            return Object.entries(t).forEach(([t, e]) => {
                null != e && this.addFields([{name: t, value: e, type: "hidden"}], !1)
            }), this.sendForm(), !1
        }

        sendForm() {
            const t = this.captcha && this.captcha.getToken();
            if (this.captcha && this.captcha.enabled && !this.captcha.isOptional && !t) return void (this.captcha.isVisible ? this.toStep({id: "captcha"}) : this.captchaInvisibleRun());
            this.addSubmitting();
            const e = new FormData(this.$form.get(0));
            if (e.append("is_ajax", "true"), "undefined" != typeof flexbeAPI && void 0 !== flexbeAPI.customLeadData && e.append("customLeadData", JSON.stringify(flexbeAPI.customLeadData)), e.append("f_ab", JSON.stringify(flexbe_cli.stat.AB.getCookie())), "function" == typeof e.delete && e.delete("g-recaptcha-response"), t && e.append("captcha-token", t), flexbe_cli.run.is_OSX && "function" == typeof e.entries) for (const t of e.entries()) {
                const [i, s] = t;
                "object" == typeof s && s instanceof File && 0 === s.size && "function" == typeof e.delete && e.delete(i)
            }
            $.ajax({
                url: this.$form.attr("action"),
                type: "POST",
                dataType: "json",
                processData: !1,
                contentType: !1,
                data: e,
                xhr: () => {
                    const t = $.ajaxSettings.xhr();
                    return t.upload, t
                }
            }).done(e => {
                const i = 0 == e.status, s = i && e.captcha;
                if (this.captcha && s) t ? this.captchaAddError() : this.captcha.isVisible ? (this.captcha.isOptional = !1, this.total = parseInt(this.$component.attr("data-total-steps"), 10) + 1, this.clearSubmitting(!1), this.toStep({id: "captcha"})) : this.captcha.isInvisible && this.captchaInvisibleRun(); else {
                    if (i) return this.clearSubmitting(!1), console.error("sendForm error: ", e), void alert("Form submitting error!");
                    e.send_formdata = !0, void 0 !== e.pay && (this.pay = e.pay), this.clearSubmitting(!0), this.captchaRemoveError(), this.showDone()
                }
            }).fail(t => {
                this.clearSubmitting(!1), console.error("sendForm error: ", t), alert("Form submitting error!")
            })
        }

        showDone() {
            const t = () => {
                setTimeout(() => {
                    this.resetForm(), this.toWelcome({scroll: !1})
                }, 500)
            }, e = this.result.action.name, i = this.lastHistoryItem;
            if (i) {
                const t = i.answers, e = i.id, s = i.title, a = this.result.goals || {};
                flexbe_cli.events.emit("quiz_event", {
                    event: "submit",
                    sender: "core",
                    quiz: this,
                    payload: {fromAnswers: t, fromId: e, fromTitle: s, sessionId: this.sessionId},
                    answerGoals: {goal: i.goal, htmlGoal: i.htmlGoal},
                    resultGoals: {mainGoal: flexbe_cli.stat.goals.order_done, goal: a.goal, htmlGoal: a.goal_html}
                })
            }
            if ("function" == typeof this.afterSent && this.afterSent(), "pay" === e && void 0 !== this.pay && null !== this.pay && this.pay.pay_link.length > 0) {
                const e = `${window.location.origin + window.location.pathname + (window.location.search ? `${window.location.search}&` : "?")}pay_id=${this.pay.pay_id}&h=${this.pay.pay_hash}`;
                try {
                    window.history.pushState(null, null, e), setTimeout(() => {
                        flexbe_cli.events.emit("pay", {action: "init"})
                    }, 200)
                } catch (t) {
                    setTimeout(() => {
                        document.location = e
                    }, 500)
                }
                t()
            } else if (["redirect", "anchor"].includes(e)) {
                const e = this.result.action.action_redirect;
                e ? setTimeout(() => {
                    flexbe_cli.helpers.gotoLink(e), t()
                }, 1e3) : t()
            } else {
                const e = this.result.action.modal_id;
                flexbe_cli.events.emit("ui_modal_open", {id: e}), t()
            }
        }

        resetForm() {
            this.$form.find(".form-field-file, .file-input-outer").removeClass("active");
            const t = this.$stepsWrapper.find("input, textarea, select"),
                e = t.not("select").not('[type="hidden"]').not(".form-field-range__input"), i = t.filter("select"),
                s = t.filter(".form-field-range__input");
            t.prop("disabled", !0), i.each((t, e) => {
                const i = e.querySelector("option"), s = i && i.value || "";
                e.value !== s && (e.value = s, e.dispatchEvent(new Event("change")))
            }), s.each((t, e) => {
                e.value = e.getAttribute("data-value"), e.dispatchEvent(new Event("change"))
            }), e.each((t, e) => {
                const i = e.defaultChecked;
                ["radio", "checkbox"].includes(e.type) ? e.checked = i : (e.removeAttribute("value"), e.value = "", e.removeAttribute("data-mask-complete"), e._mask && e._mask.updateValue()), e.dispatchEvent(new Event("change"))
            }), this.captcha && this.captcha.enabled && (this.captcha.reset(), this.captchaRemoveError()), this.$form[0].reset()
        }

        captchaAddError(t) {
            if (!this.captcha || !this.captcha.enabled || !this.captcha.loaded) return;
            null == t && (t = flexbe_cli.locale.tr("form::captcha_error"));
            const e = this.$component.find(".captcha-global-error");
            e.find(".error-text").text(t), e.addClass("show"), this.busy && this.clearSubmitting()
        }

        captchaRemoveError() {
            if (!this.captcha || !this.captcha.enabled || !this.captcha.loaded) return;
            const t = this.$component.find('.field[data-type="captcha"]'),
                e = this.$component.find(".captcha-global-error");
            t.removeClass("is_error"), e.removeClass("show")
        }

        captchaInvisibleRun() {
            if (!this.captcha || !this.captcha.enabled || !this.captcha.loaded || this.captcha.isVisible) return;
            this.addSubmitting(), this.captcha.runInvisibleChallenge();
            const t = this.busy;
            setTimeout(() => {
                t === this.busy && this.clearSubmitting()
            }, 2500)
        }

        setData(t) {
            if (!t) return !1;
            t && t.fields && this.addFields(t.fields), t && t.items && this.addItems(t.items)
        }

        addFields(t, e = !0) {
            const i = this.$component.find(".form-fields-advanced");
            t.length && i[0] && (e && i.empty(), t.forEach(t => {
                i.find(`input[name="${t.name}"]`).remove();
                const e = $("<input>").attr("type", t.type).attr("name", t.name).attr("value", t.value);
                i.append(e)
            }))
        }

        addItems(t = []) {
            if (!t || !t.length) return;
            let e = 0, i = 0, s = "";
            const a = [];
            t = t.map(t => "object" != typeof t ? {} : (t.count = parseInt(t.count, 10) || 1, t.price = parseFloat(t.price) || 0, t.title = "string" == typeof t.title && t.title.trim() || t.title || "", e += t.price * t.count || 0, i += t.count, t));
            try {
                s = JSON.stringify(t)
            } catch (t) {
            }
            let r = {"product[items]": s, "product[price]": e, "product[total]": i};
            e && (r = _extends({}, r, {"pay[price]": e, "pay[desc]": ""})), Object.entries(r).forEach(([t, e]) => {
                a.push({type: "hidden", name: t, value: e})
            }), this.addFields(a)
        }

        initFieldMask() {
            return "undefined" != typeof IMask && (this.needInitMasks = !1, this.$masked.each((t, e) => {
                flexbe_cli.components.classes.form.initMask(e);
                const i = !!e.getAttribute("data-placeholder"), s = e._mask;
                i && s && ($(e).on(`focus${this.eventId}`, () => {
                    s.updateOptions({lazy: !1})
                }), $(e).on(`blur${this.eventId}`, () => {
                    if (!s.unmaskedValue) {
                        const t = s.mask.replace(/\*/g, "_"), e = s.value;
                        s.updateOptions({lazy: !0}), s.masked.rawInputValue && t !== e || (s.unmaskedValue = "", s.value = "", s.updateValue())
                    }
                }))
            }), !0)
        }

        initFieldDate() {
            return this.needInitCalendar = !1, this.$calendars.each((t, e) => {
                flexbe_cli.components.classes.form.initCalendar(e, this.$root.find(".scroller")[0])
            }), !0
        }
    }

    flexbe_cli.components.classes.quiz = a
}();
!function () {
    const e = flexbe_cli.components.classes.quiz;
    flexbe_cli.components.classes.quiz = class extends e {
        setProgress() {
            const e = this.$progress.find(".progress-loader-bar .current"),
                t = "step" === this.$progress.attr("data-text-style"), s = e.attr("data-unit"), l = this.total;
            let n = this.realIndex;
            if (flexbe_cli.is_admin && -1 === this.realIndex && "welcome" !== this.currentId) {
                n = +this.$currentStep.prevAll('[data-linked="linked"]').first().attr("data-real-index") + 1 || 0
            }
            n = Math.max(0, Math.min(l - 1, n));
            const o = t ? n + 1 : n, r = parseInt(100 * o / l, 10);
            if (this.$progress.attr("data-current", o), this.$progress.attr("data-total", l), this.$progress.attr("data-current-progress", r > 0 ? r : 0), e && s) {
                const t = e.find(".progress-runner");
                let n = `${r}%`;
                "step" === s ? n = `${o} / ${l}` : "none" === s && (n = ""), t.attr("data-value", n)
            }
            this.$progress.find(".progress-text .current").text(o), this.$progress.find(".progress-text .total").text(l), this.$progress.find(".progress-percent .current").text(r), this.$progress.find(".progress-loader-bar .current").css("width", `${r}%`), this.$progress.find(".progress-loader-circle .current").attr("stroke-dashoffset", `${Math.abs(100 - r)}`)
        }

        initFieldSelect() {
            const e = this;
            this.$component.find(".dropdown-container").remove(), this.$steps.find("select.atom-custom-select").each((t, s) => {
                const l = $(s), n = l.closest('[data-type="select"]'), o = l.children("option").length,
                    r = this.$form.hasClass("style-underlined") ? "sharp" : "",
                    c = $('\n                    <div class="dropdown-container">\n                        <div tabindex="0" class="dropdown-select">\n                            <span class="selected"></span>\n                            <span class="arrow">\n                                <svg viewBox="0 0 14 8">\n                                    <path d="M1.4 0L0 1.34043L7 8L14 1.34043L12.6 0L7 5.34998L1.4 0Z"/>\n                                </svg>\n                            </span>\n                        </div>\n                    </div>\n                '),
                    i = $('\n                    <div class="atom-select size--large">\n                        <div class="overlay"></div>\n                    </div>\n                '),
                    a = $(`<ul class="dropdown-select-ul ${r}"></ul>`), d = c.find(".dropdown-select .selected");
                let f = !1, p = !1, u = !1;

                function h(e, t) {
                    e[0] && (e.siblings("li").removeClass("selected"), e.addClass("selected"), l.val(e.attr("data-value")), d.text(e.text()), t && v())
                }

                function g() {
                    const e = a.children(".option-e"), t = e.height(), s = a.height(),
                        l = t * (e.index($(".selected", a)) + 1);
                    if (s > t * o) return !1;
                    a.scrollTop() < l - s ? a.animate({scrollTop: l - s}, 100) : a.scrollTop() > l - t && a.animate({scrollTop: l - t}, 100)
                }

                function v() {
                    u = !1, flexbe_cli.block.removeOverlay("customSelect"), i.removeClass("active"), n.removeClass("active"), clearTimeout(f)
                }

                function m() {
                    u = !0, flexbe_cli.block.pushOverlay("customSelect");
                    const t = c.hasClass("active");
                    i.off("click.closeSelect").on("click.closeSelect", ".overlay", e => {
                        v(), document.elementFromPoint(e.clientX, e.clientY).focus()
                    }), i.off("click.selectli").on("click.selectli", ".dropdown-select-ul li", t => {
                        h($(t.currentTarget), !0), e.autoNextStep()
                    }), i.off("mousewheel.selectUl").on("mousewheel.selectUl", ".dropdown-select-ul", e => {
                        const t = e.currentTarget.scrollHeight, s = e.currentTarget.clientHeight;
                        return !(e.currentTarget.scrollTop === t - s && e.deltaY > 0 || 0 === e.currentTarget.scrollTop && e.deltaY < 0)
                    }), $("body").append(i), clearTimeout(f), a.css({
                        left: `${c.offset().left}px`,
                        top: `${c.offset().top}px`,
                        width: `${c.width()}px`
                    }), i.toggleClass("active", !t), n.toggleClass("active", !t), t || n.siblings('[data-type="select"]').removeClass("active").find(".dropdown-container").removeClass("active"), g()
                }

                l.children("option").each((e, t) => {
                    const s = $(t), l = s.val(), n = s.text() || "—", o = s.attr("selected"),
                        r = $('<li class="option-e"><span class="option-inner"></span></li>');
                    "selected" === o && r.addClass("selected"), r.attr("data-value", l), r.find(".option-inner").text(n), a.append(r)
                }), d.text(l[0].value), i.append(a), l.after(c), flexbe_cli.responsive && flexbe_cli.run.is_screen_mobile_all ? l.off("change.changeSelect").on("change.changeSelect", e => {
                    const t = e.target.value;
                    d.text(t)
                }) : (c.off("click.openSelect").on("click.openSelect", ".dropdown-select", () => {
                    m()
                }), c.off("focus.focusSelect").on("focus.focusSelect", ".dropdown-select", () => {
                    p = !0
                }), c.off("blur.blurSelect").on("blur.blurSelect", ".dropdown-select", () => {
                    p = !1, f = setTimeout(() => {
                        v()
                    }, 200)
                }), l.off("change.changeSelect").on("change.changeSelect", t => {
                    const s = i.find(".dropdown-select-ul li"), l = t.currentTarget.value;
                    s.removeClass("selected"), s.filter((e, t) => t.getAttribute("data-value") === l).addClass("selected"), d.text(l), e.autoNextStep()
                }), c.off("keydown.keydownSelect").on("keydown.keydownSelect", ".dropdown-select", e => {
                    if (p && [13, 27, 32, 38, 40].includes(e.keyCode)) {
                        const t = a.find(".option-e.selected");
                        if (40 === e.keyCode) e.preventDefault(), h(t.next(), !1), g(); else if (38 === e.keyCode) e.preventDefault(), h(t.prev(), !1), g(); else if (u || 32 !== e.keyCode) {
                            if (u && [13, 27, 32].includes(e.keyCode)) return e.preventDefault(), v(), !1
                        } else e.preventDefault(), m()
                    }
                }))
            })
        }

        initFieldFile() {
            this.$form.on(`change.file${this.eventId}`, ".file-input--original", e => {
                const t = $(e.currentTarget), s = t.parents(".file-input-outer"), l = t.val(),
                    n = e.currentTarget.files.length;
                if (s.addClass("active"), t.closest("[data-type]").removeClass("is_error"), 1 === n) s.find(".file-item--title").text(l); else if (n > 1) {
                    const e = n % 100, t = n % 10;
                    let l;
                    l = 1 === t && 11 !== e ? "form.filesMult" : t > 1 && t < 5 ? "form.filesMult1" : "form.filesMult2", s.find(".file-item--title").text(`${n} ${flexbe_cli.locale.tr(l)}`)
                } else s.removeClass("active")
            }), this.$form.on(`click${this.eventId}`, ".clear-files", e => {
                const t = $(e.currentTarget).parents(".file-input-outer");
                t.find(".file-input--original").val(""), t.removeClass("active")
            })
        }
    }
}();
!function () {
    class e extends BaseComponent {
        constructor(...e) {
            super(...e), this.is = "menu", this.isOpen = !1, this.isOpenNested = !1, this.isRestored = !0, this.eventId = this.owner._core.id, this.isRowDirection = "row" === this.$component.attr("data-direction"), this.isShowDropdownClick = "click" === this.$component.attr("data-type"), this.isMenuShowMore = "true" === this.$component.attr("data-show_more"), this.$menuList = this.$component.find(".component-menu-list"), this.menuSize = Array.from(this.component.classList).filter(e => e.includes("size--"))[0], this.menuWeight = Array.from(this.component.classList).filter(e => e.includes("weight--"))[0], this.menuClasses = `${this.menuSize} ${this.menuWeight}`, this.$componentCopy = this.$component.clone()
        }

        onBeside({state: e, first: t}) {
            e && t && (this.bindEvents(), this.isMenuShowMore && this.createListShowMore(), this.$button = this.$component.find(".folder-item"), this.$header = this.$button.closest(".floating-header"), this.$header.length && this.$header.off("transform-header").on("transform-header", () => {
                this.$dropdown && this.$dropdown.length && this.closeDropdown()
            }), flexbe_cli.run.is_screen_mobile_all && this.$menuList.find(".folder-item").length && this.$menuList.addClass("nested-menu"))
        }

        onResize(e) {
            if (!this.isMenuShowMore || !this.isRowDirection || ["bottom", "top"].includes(e.type)) return !1;
            this.createListShowMore(), this.isOpen && this.setDropdownPosition(this.folder)
        }

        bindEvents() {
            $(window).off(`.${this.eventId}`), this.$component.off(".core"), flexbe_cli.run.is_pointer && this.$component.on("mouseenter.core mouseleave.core", ".menu-item", e => {
                this.$component.toggleClass("in-hover"), $(e.currentTarget).toggleClass("hover")
            }), flexbe_cli.run.is_screen_mobile_all ? this.$component.on("click.core", "li.folder-item > .folder-item-text", e => (this.toggleMobileMenu(e.currentTarget), !1)) : (this.isShowDropdownClick || flexbe_cli.run.is_touch ? (flexbe_cli.is_admin && this.$component.off(".editorPrevent").on("mouseup.editorPrevent click.editorPrevent", "li.folder-item", e => {
                e.stopPropagation()
            }), this.$component.on("click.core", "li.folder-item", e => {
                e.stopPropagation(), this.toggleDropdown(e.currentTarget)
            }), this.$component.on("mouseenter.core", "li.folder-item", () => {
                clearTimeout(this.nestedTimer), clearTimeout(this.containerCloseTimer)
            })) : (this.$component.on("mouseenter.core", "li.folder-item", e => {
                clearTimeout(this.dropdownTimer), clearTimeout(this.nestedTimer), clearTimeout(this.containerCloseTimer), this.currentTarget !== e.currentTarget && (this.currentTarget = e.currentTarget, this.toggleDropdown(e.currentTarget)), this.$component.off("click.core"), setTimeout(() => {
                    this.$component.on("click.core", "li.folder-item", e => {
                        this.toggleDropdown(e.currentTarget)
                    })
                }, 500)
            }), this.$component.on("mouseleave.core", "li.folder-item", () => {
                clearTimeout(this.dropdownTimer), this.dropdownTimer = setTimeout(() => {
                    this.currentTarget = null, this.closeDropdown()
                }, 100)
            })), $(window).on(`blur.${this.eventId}`, () => {
                this.closeDropdown()
            }), this.isRowDirection && this.isMenuShowMore && $(window).on(`resized.${this.eventId}`, () => {
                this.createListShowMore(), this.isOpen && this.setDropdownPosition(this.folder)
            }))
        }

        observeItems() {
            let e, t = !0;
            const o = this.$component.find("li.root-item")[0];
            this._resizeObserver = new ResizeObserver(() => {
                t ? t = !1 : (clearTimeout(e), e = setTimeout(() => {
                    this.onResize({})
                }, 30))
            }), this._resizeObserver.observe(o)
        }

        unobserveItems() {
            this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null)
        }

        createListShowMore() {
            if (this.restoreMenuItems(), !this.isRowDirection && !flexbe_cli.run.is_screen_mobile_all || flexbe_cli.run.is_screen_mobile_all) return;
            const e = this.$menuList.parent().innerWidth();
            if (e >= this.initialMenuWidth) return this.observeItems(), !1;
            this.isRestored = !1;
            const t = this.$componentCopy.clone(), o = t.find("li.root-item").toArray();
            let i = 42, n = 0;
            t.appendTo("body").css({position: "absolute", top: 0, left: 0, opacity: 0}), o.some((t, o) => {
                if (n = o, i += $(t).outerWidth(!0), e < i) return !0
            }), this.$menuList.empty(), this.$menuList.append(o.splice(0, n)), this.$menuList.append('\n                <li class=\'show-more menu-item folder-item\'>\n                <svg width="18" height="4" viewBox="0 0 18 4" xmlns="http://www.w3.org/2000/svg">\n                <path transform="rotate(-90 2 2)" fill="currentcolor" fill-rule="evenodd" d="M4 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>\n                </svg>\n                <ul class=\'component-menu-dropdown-list\'></ul>\n                </li>\n                '), this.$menuList.find(".show-more .component-menu-dropdown-list").append(o), t.remove(), this.observeItems()
        }

        restoreMenuItems() {
            if (this.isRowDirection) {
                if (!this.isRestored && this.$componentCopy) {
                    const e = this.$componentCopy.find(".component-menu-list").clone();
                    this.$menuList.html(e.html()), this.isRestored = !0
                }
                this.$menuList.css({
                    position: "fixed",
                    top: "-9999px",
                    left: "-9999px"
                }), this.initialMenuWidth = this.$menuList.innerWidth(), this.$menuList.css({
                    position: "",
                    top: "",
                    left: ""
                }), this.unobserveItems()
            }
        }

        onClose() {
            this.closeDropdown()
        }

        toggleDropdown(e) {
            !this.isOpen ? this.openDropdown(e) : this.closeDropdown(e)
        }

        openDropdown(e) {
            this.isOpen && this.folder != e && this.closeDropdown();
            const t = flexbe_cli.is_admin && !!this.$component.closest(".editor-focus").length;
            if (flexbe_cli.is_admin && !t) return !1;
            $(this.root).closest(".m_modal").length && $(this.root).find(".scroller").off(`scroll.${this.eventId}`).on(`scroll.${this.eventId}`, () => {
                this.isOpen && this.closeDropdown()
            }), this.$component.addClass("in-open"), $(e).addClass("open");
            const o = $("body"), i = $(e).find(".component-menu-dropdown-list").clone()[0];
            this.isOpen = !0, this.isOpenNested = !1, this.folder = e, this.$dropdown = $(`<div class="component-menu-dropdown ${t ? "editor-focus" : ""}"></div>`), this.$dropdown.addClass(this.menuClasses), this.$dropdown.append(i).appendTo(o), this.setDropdownPosition(e), $("body").on(`click.menu-dropdown-${this.eventId} keydown.menu-dropdown-${this.eventId}`, e => {
                const t = "keydown" === e.type && 27 === e.keyCode,
                    o = "click" === e.type && $(e.target).closest(".element-item").data("id") !== +this.eventId && !$(e.target).closest(".component-menu-dropdown").length,
                    i = $(e.target).closest(".folder-item").length;
                (t || o || !i && "click" === e.type) && this.closeDropdown()
            }), flexbe_cli.run.is_touch ? this.$dropdown.off(`click.menu-dropdown-${this.eventId}`).on(`click.menu-dropdown-${this.eventId}`, "li", e => {
                e.currentTarget.classList.contains("folder-item") ? (this.toggleNestedDropdown({
                    folderDropdown: e.currentTarget,
                    parentTarget: e.currentTarget.parentElement
                }), e.stopPropagation()) : this.closeDropdown()
            }) : (this.$dropdown.off("mouseenter").on("mouseenter", () => {
                clearTimeout(this.dropdownTimer), clearTimeout(this.nestedTimer), clearTimeout(this.containerCloseTimer)
            }), this.$dropdown.off(`mouseenter.menu-dropdown-${this.eventId}`).on(`mouseenter.menu-dropdown-${this.eventId}`, "li", e => {
                clearTimeout(this.dropdownTimer), e.currentTarget !== this.folderDropdown && (this.folderDropdown = e.currentTarget, this.closeNestedDropdown({
                    folderDropdown: e.currentTarget,
                    parentTarget: e.currentTarget.parentElement
                })), this.openNestedDropdown({
                    folderDropdown: e.currentTarget,
                    parentTarget: e.currentTarget.parentElement
                })
            }), this.$dropdown.off(`mouseleave.menu-dropdown-${this.eventId}`).on(`mouseleave.menu-dropdown-${this.eventId}`, "li", e => {
                clearTimeout(this.nestedTimer), this.nestedTimer = setTimeout(() => {
                    this.currentTarget = null, this.closeNestedDropdown({parentTarget: e.currentTarget.parentElement}), this.isShowDropdownClick || this.closeDropdown()
                }, 200)
            }), this.$dropdown.off(`mouseover.menu-dropdown-${this.eventId}`).on(`mouseover.menu-dropdown-${this.eventId}`, "li", () => {
                clearTimeout(this.nestedTimer), clearTimeout(this.containerCloseTimer)
            }), this.$dropdown.off("mouseleave").on("mouseleave", e => {
                clearTimeout(this.containerCloseTimer), this.closeNestedDropdown({parentTarget: e.currentTarget}), this.containerCloseTimer = setTimeout(() => {
                    this.isShowDropdownClick || (this.currentTarget = null, this.closeDropdown())
                }, 200)
            }))
        }

        closeDropdown(e) {
            if (!this.isOpen) return;
            this.currentTarget = null, this.$component.removeClass("in-open"), this.$component.find("li.menu-item").toArray().map(e => $(e).removeClass("open")), $("body").off(`.menu-dropdown-${this.eventId}`), this.$dropdown && (this.$dropdown.off(`click.menu-dropdown-${this.eventId}`), this.$dropdown.remove()), this.isOpen = !1;
            const t = this.folder === e, o = e && $(e)[0].classList.contains("folder-item");
            !t && o && this.openDropdown(e)
        }

        toggleNestedDropdown({folderDropdown: e, parentTarget: t}) {
            !this.isOpenNested ? this.openNestedDropdown({
                folderDropdown: e,
                parentTarget: t
            }) : this.closeNestedDropdown({folderDropdown: e, parentTarget: t})
        }

        openNestedDropdown({folderDropdown: e, parentTarget: t}) {
            const o = $(t), i = $(e), n = $(e.lastElementChild), s = o.offset(), r = o.innerHeight(),
                d = o.innerWidth(), h = i.offset(), l = n.innerHeight(), c = n.innerWidth(),
                p = this.root.ownerDocument.defaultView.innerWidth - (s.left + d + 25),
                m = this.bodyHeight < s.top + r + l, a = h.top > l,
                u = h.top + l > window.pageYOffset + window.innerHeight, f = flexbe_cli.block.hasOverlay || [],
                w = "modal" === f[f.length - 1], g = m && a || w && u;
            this.folderDropdown = e, this.isOpenNested = !0, flexbe_cli.run.is_touch && $(e).hasClass("folder-item") && $(e).addClass("hover"), p > c || p > s.left ? $(e.lastChild).addClass("show-dropdown in-right") : $(e.lastChild).addClass("show-dropdown in-left"), g && $(e.lastChild).addClass("in-bottom")
        }

        closeNestedDropdown({folderDropdown: e, parentTarget: t}) {
            const o = $(t).find(".component-menu-dropdown-list"), i = this.folderDropdown === e,
                n = e && $(e)[0].classList.contains("folder-item");
            if (this.isOpenNested = !1, $(o).removeClass("show-dropdown in-left in-right in-bottom"), flexbe_cli.run.is_touch) {
                Array.from($(t).find(".folder-item")).forEach(e => {
                    $(e).removeClass("hover")
                })
            }
            n && !i && this.openNestedDropdown({folderDropdown: e, parentTarget: t})
        }

        setDropdownPosition(e = this.folder) {
            if (!e) return;
            this.bodyHeight = Math.max(document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
            const t = this.$dropdown, o = $(e).find(".component-menu-dropdown-list"),
                i = t.find(".component-menu-dropdown-list"), n = $(e).hasClass("show-more"),
                s = n ? $(e) : $(e).children().first(), r = s.innerWidth(), d = s.innerHeight(), h = s.offset(),
                l = h.top, c = h.left, p = o.innerWidth(), m = o.innerHeight(), a = c + p > window.innerWidth,
                u = c + c / 2 - (p / 2 + 20) < 0, f = l + d + m + 20 > this.bodyHeight,
                w = l + d + m > window.pageYOffset + window.innerHeight, g = flexbe_cli.block.hasOverlay || [],
                T = "modal" === g[g.length - 1];
            let v;
            a ? v = c + r - p : n || !this.isRowDirection && !u ? (v = c + r / 2 - p / 2, p < r && (v = c)) : v = c - 8;
            const D = {position: "absolute", width: p, height: m + 5, "padding-top": "5px", top: l + d, left: v};
            if (this.isRowDirection || (D["margin-top"] = "-5px"), (f || T && w) && (D.top = l - (m + 5), D["padding-top"] = "0", D["margin-top"] = "-5px", this.isRowDirection || (D["margin-top"] = "0")), p < r && (D.width = r + 20, i.css("min-width", r + 20)), this.$header.length && this.$header.hasClass("fixed-header")) {
                const t = this.$header.find(".layout-type-header--second .folder-item.open");
                if (D.position = "fixed", D.top = `${s[0].offsetTop + s[0].clientHeight + 10}px`, t.length && t[0] === e) {
                    const e = this.$header.find(".layout-type-header--first");
                    D.top = `${s[0].offsetTop + s[0].clientHeight + 10 + e[0].clientHeight}px`
                }
            }
            t.css(D)
        }

        toggleMobileMenu(e) {
            $(e.parentElement).toggleClass("show"), $(e.nextElementSibling).slideToggle(350)
        }
    }

    flexbe_cli.components.classes.menu = e
}();
!function () {
    function e(e, i, s, t) {
        const a = $(e), l = i ? `[data-component="${i}"]` : "[data-component]";
        a.is(l) ? a.trigger(s, t) : $(e).find(l).each((e, i) => {
            $(i).trigger(s, t)
        })
    }

    class i extends BaseComponent {
        constructor(...e) {
            super(...e);
            const {component: i, $component: s} = this;
            this.is = "cards", this.mode = i.getAttribute("data-mode"), "slider" === this.mode && (this.require = ["assets/swiper.v5.js"], this.$cardsRoot = s.closest(".flexbe-cards-root"), this.$slider = this.$cardsRoot.find(".swiper-container"), this.$pagination = this.$cardsRoot.find(".slider-pagination--cards"), this.$navigation = this.$cardsRoot.find(".slider-button--cards"), this.$swiperHelper = this.$cardsRoot.find(".swiper-mobile-helper"), this.$flexbeCardsSlider = this.$cardsRoot.find(".flexbe-cards-slider"), this.$flexbeCards = this.$cardsRoot.find(".flexbe-cards"), this.$flexbeCard = this.$cardsRoot.find(".flexbe-card"), this.$flexbeCardsWrapper = this.$cardsRoot.find(".flexbe-cards-wrapper "), this.sliderResponsive = this.$slider.attr("data-slider-responsive-mode"))
        }

        onLoad() {
            this.core.isVisible && this.sliderDisposer(), this.core.inView && this.initSwiperAnimation()
        }

        onBeside({state: e}) {
            this.isLoaded && e && this.sliderDisposer()
        }

        onScreen({state: e}) {
            e || this.destroySwipeAnimation()
        }

        onResize() {
            this.isLoaded && this.sliderDisposer()
        }

        onView({state: e}) {
            e && !this.wasView && this.swiper && (this.swiper.update(), this.checkSlidesVisibility(!0), this.checkNavigationState()), this.toggleAutoplay(e), e && this.isLoaded && this.initSwiperAnimation()
        }

        sliderDisposer() {
            if ("slider" !== this.mode) return;
            const e = flexbe_cli.run.is_screen_mobile_all, i = this.sliderResponsive,
                s = e ? "desktop" !== i : "mobile" !== i;
            s && !this.swiper ? this.initSlider() : s || this.destroySlider()
        }

        initSlider() {
            if ("slider" === this.mode && !this.swiper && "undefined" != typeof Swiper) {
                this.$cardsRoot.addClass("slider-active slider-inited slider-enabled"), this.$cardsRoot.removeClass("slider-disabled"), this.$flexbeCardsSlider.addClass("swiper-active"), this.$flexbeCards.addClass("swiper-wrapper"), this.isOverflow && this.$flexbeCardsWrapper.addClass("overflow");
                try {
                    this.createSwiperSettings(), this.createSwiperInstance(), this.createSwiperNavigation(), this.createSwiperPagination(), this.createSwiperEditorFixes(), this.swiper.init(), this.toggleAutoplay(this.core.inView)
                } catch (e) {
                    console.log(e)
                }
            }
        }

        destroySlider() {
            "slider" === this.mode && (this.swiper && this.swiper.destroy(), this.swiper = null, this.$cardsRoot.removeClass("slider-active slider-inited slider-enabled"), this.$cardsRoot.addClass("slider-disabled"), this.$flexbeCardsSlider.removeClass("swiper-active"), this.$flexbeCards.removeClass("swiper-wrapper"), this.$flexbeCard.removeClass("swiper-slide-hidden"), this.$flexbeCardsWrapper.removeClass("overflow"))
        }

        initSwiperAnimation() {
            if ("slider" !== this.mode) return;
            flexbe_cli.run.is_touch && !this.iteracted && "desktop" !== this.sliderResponsive && !this.$swiperHelper.hasClass("show") && setTimeout(() => {
                this.core.inView && this.$swiperHelper.addClass("show")
            }, 500)
        }

        destroySwipeAnimation() {
            "slider" === this.mode && this.$swiperHelper.hasClass("show") && this.$swiperHelper.removeClass("show")
        }

        createSwiperSettings() {
            const e = flexbe_cli.run.is_screen_mobile_all, i = +this.$slider.attr("data-count"),
                s = +this.$slider.attr("data-cards"), t = +this.$slider.attr("data-cards-mobile") || 1,
                a = +this.$slider.attr("data-overflow"), l = e ? i <= t : i <= s;
            let r = 0;
            flexbe_cli.is_admin && (r = Math.floor($(this.root).data("slide-move")) || 0, r = Math.max(0, Math.min(i - 1, r)));
            const o = !flexbe_cli.is_admin && Math.floor(1e3 * +this.$slider.attr("data-autoplay")) || 0,
                d = this.$pagination.attr("data-type") || !1;
            let n = this.$slider.attr("data-effect") || "slide", h = this.$slider.attr("data-effect-mobile") || "slide";
            s > 1 && (n = "slide"), t > 1 && (h = "slide");
            let p = !flexbe_cli.is_admin && +this.$slider.attr("data-loop");
            if (l && p && (p = !1), p = !!p, this.freeSlides = 0, !a) {
                const e = this.$slider[0].offsetWidth, i = e / s, t = (flexbe_cli.resize.viewportWidth - e) / 2;
                this.freeSlides = Math.ceil(t / i)
            }
            this.isOverflow = a, this.totalSlides = i, this.effect = n, this.settings = {
                threshold: 10,
                autoHeight: !1,
                preloadImages: !1,
                preventClicks: !1,
                touchStartPreventDefault: !1,
                touchMoveStopPropagation: !1,
                preventClicksPropagation: !1,
                preventInteractionOnTransition: !0,
                touchReleaseOnEdges: !0,
                a11y: !1,
                lazy: !1,
                simulateTouch: !flexbe_cli.is_admin,
                virtualTranslate: !0,
                initialSlide: r,
                loop: p,
                autoplay: !!o && {delay: o, stopOnLastSlide: !p, disableOnInteraction: !0, waitForTransition: !0},
                fadeEffect: {crossFade: !0},
                navigation: {},
                pagination: {
                    clickable: !1,
                    type: d,
                    el: this.$pagination[0],
                    renderBullet: () => "",
                    formatFractionCurrent: () => this.getGroupIndex() + 1,
                    formatFractionTotal: () => Math.ceil(this.totalSlides / this.swiper.params.slidesPerView)
                },
                slidesPerView: t,
                slidesPerGroup: 1,
                loopedSlides: t,
                speed: "fade" === h ? 650 : 450,
                effect: h,
                breakpoints: {
                    768: {
                        effect: n,
                        speed: "fade" === n ? 650 : 450,
                        slidesPerView: s,
                        slidesPerGroup: 1,
                        loopedSlides: s + this.freeSlides
                    }
                }
            }
        }

        createSwiperInstance() {
            this.swiper && (this.swiper.destroy(), this.swiper = null);
            let e, i, s = !1;
            const t = new Swiper(this.$slider[0], Object.assign({
                init: !1,
                wrapperClass: "flexbe-cards",
                slideClass: "flexbe-card",
                noSwipingClass: "redactor-box"
            }, this.settings)), a = () => {
                const {effect: a, slidesPerView: l} = t.params, r = this.totalSlides > l;
                s || (s = !0, this.$cardsRoot.addClass("slider-inited"), this.$slider.addClass("swiper-inited")), i !== a && (i = a, this.$slider.toggleClass("swiper-effect-slide", "slide" === a), this.$slider.toggleClass("swiper-effect-fade", "fade" === a)), e !== r && (e = r, this.$cardsRoot.toggleClass("slider-active", r), this.$slider.toggleClass("swiper-active", r), t.update())
            }, l = () => {
                if (t.loopedSlides) {
                    const e = $(t.slides).filter(`.${t.params.slideDuplicateClass}`), i = {};
                    e.each((e, s) => {
                        const t = $(s), a = t.attr("data-swiper-slide-index");
                        i[a] = i[a] ? i[a] + 1 : 1, t.attr("data-cloned", i[a])
                    }), flexbe_cli.entity.initArea(e), flexbe_cli.components.initComponents({core: this.core})
                }
            };
            t.once("init", () => {
                a(), l(), this.checkSlidesVisibility()
            }), t.on("sliderMove", () => {
                this.iteracted = !0, this.destroySwipeAnimation()
            }), t.on("resize", $.debounce(() => {
                this.swiper && (a(), this.checkSlidesVisibility())
            }, 50)), t.on("setTranslate", e => {
                const i = t.$wrapperEl, s = t.isHorizontal(), a = s ? e : 0, l = s ? 0 : e;
                "slide" === t.params.effect ? (flexbe_cli.is_admin ? i.css({
                    position: "relative",
                    top: `${l}px`,
                    left: `${a}px`
                }) : i.css({transform: `translate3d(${a}px, ${l}px, 0px)`}), t.slides.css({
                    opacity: "",
                    transform: ""
                })) : "fade" === t.params.effect && i.css({transform: ""})
            }), t.on("transitionStart touchStart", () => {
                this.$cardsRoot.addClass("slider-in-animation")
            }), t.on("transitionEnd touchEnd", () => {
                this.$cardsRoot.removeClass("slider-in-animation")
            }), t.on("slideChangeTransitionStart", () => {
                this.checkSlidesVisibility()
            }), this.$slider.on("preventSliderAutoplay", (e, {state: i = !0}) => {
                this.preventAutoplay = !!i, this.preventAutoplay && this.toggleAutoplay({state: !1})
            }), this.$slider.on("preventSliderMove", (e, {state: i = !0}) => {
                t.allowTouchMove = !i
            }), this.swiper = t
        }

        createSwiperNavigation() {
            const e = this.swiper;
            e.once("init", () => {
                this.checkNavigationState()
            }), e.on("resize", $.debounce(() => {
                this.swiper && this.checkNavigationState()
            }, 50)), e.on("slideChange", () => {
                this._skipSlide || this.checkNavigationState()
            }), this.$navigation.on("click", e => {
                this["prev" === e.currentTarget.getAttribute("data-direction") ? "prevSlide" : "nextSlide"]()
            }), this.$slider.on("click.swiper-hidden", ".swiper-slide-hidden", i => {
                i.preventDefault(), i.stopPropagation();
                const s = i.currentTarget, t = Array.from(e.slides).findIndex(e => e === s), a = e.activeIndex,
                    l = a - t, r = t - (a + e.params.slidesPerView - 1);
                l > 0 ? this.prevSlide(l) : r > 0 && this.nextSlide(r)
            })
        }

        createSwiperPagination() {
            const e = this.swiper, i = e.params;
            let s = !1;
            e.on("paginationRender", () => {
                if ("bullets" === i.pagination.type) if (e.loopedSlides) this.loopPagination = new flexbe_cli.components.classes.bulletsLoopPagination(this.$pagination[0], {
                    init: !1,
                    tag: "span",
                    onClick: e => {
                        e < 0 ? this.prevSlide() : e > 0 && this.nextSlide()
                    }
                }); else {
                    const s = i.pagination.bulletElement || "span", t = i.pagination.bulletClass || "span",
                        a = i.slidesPerView || 1, l = Math.ceil(this.totalSlides / a);
                    let r = new Array(l).fill();
                    r = r.map((e, i) => `<${s} class="${t}" data-index="${i}"></${s}>`).join(""), this.$pagination.html(r), this.bulletsPagination = new flexbe_cli.components.classes.bulletsPagination(this.$pagination[0], {
                        init: !1,
                        targets: "span",
                        active: e.realIndex,
                        onClick: (e, i) => {
                            i !== e && this.toSlide(e)
                        }
                    })
                }
                this.$pagination.toggleClass("disabled", this.totalSlides <= e.params.slidesPerView)
            }), e.on("paginationUpdate", () => {
                if (!this._skipSlide) {
                    if (this.bulletsPagination) {
                        const i = this.getGroupIndex(e.realIndex);
                        this.bulletsPagination.setActive(i)
                    } else if (this.loopPagination) {
                        const i = e.previousIndex, t = e.activeIndex, a = this.totalSlides, l = i < t ? "next" : "prev";
                        !!(i === t || "next" === l && i === t - a || "prev" === l && i === t + a) && s || this.loopPagination.setActive(l)
                    }
                    s = !0
                }
            })
        }

        createSwiperEditorFixes() {
            if (!flexbe_cli.is_admin) return;
            const e = this.swiper;
            e.on("slideChange", () => {
                $(this.root).data("slide-move", e.realIndex)
            })
        }

        checkSlidesVisibility() {
            const i = this.swiper;
            i.updateSlides();
            const s = $(i.slides), t = s.slice(i.activeIndex, i.activeIndex + i.params.slidesPerView), a = s.not(t);
            a.removeClass("swiper-slide-visible").addClass("swiper-slide-hidden"), t.removeClass("swiper-slide-hidden").addClass("swiper-slide-visible"), e(a, !1, "sliderDeactivate"), e(t, !1, "sliderActivate")
        }

        checkNavigationState() {
            const e = this.swiper, i = e.params.navigation.disabledClass, s = this.$navigation, t = s.eq(0),
                a = s.eq(1);
            let {isBeginning: l, isEnd: r} = e;
            e.loopedSlides && (l = !1, r = !1), s.toggleClass("disabled", this.totalSlides <= e.params.slidesPerView), t.toggleClass(i, l), a.toggleClass(i, r)
        }

        getGroupIndex(e, i, s = !0) {
            const t = this.swiper;
            null == e && (e = t.realIndex), i || (i = t.params.slidesPerView || 1), s && (t.loopedSlides || i <= 1) && (s = !1);
            const a = Math.ceil(this.totalSlides / i);
            let l = Math.floor(e / i);
            if (s) {
                const s = l * i, t = e - s > s + i - 1 - e, a = e % i != 0 && e + i >= this.totalSlides;
                (t || a) && (l += 1)
            }
            return Math.max(0, Math.min(a, l))
        }

        getSlideIndex(e, i) {
            return null == i && (i = this.swiper.params.slidesPerView || 1), e * i
        }

        toSlide(e, i) {
            const s = this.swiper, t = this.getSlideIndex(e, i);
            return s.loopedSlides ? s.slideToLoop(t) : s.slideTo(t)
        }

        prevSlide(e) {
            let i;
            const s = this.swiper, t = s.params.slidesPerView;
            if (s.animating) return;
            e = e ? Math.abs(e) : this.isOverflow ? t : 1;
            const a = s.activeIndex;
            if (s.loopedSlides) {
                const t = a >= (this.isOverflow ? e : e + this.freeSlides);
                a + this.totalSlides <= s.slides.length && !t && (this.toggleSkip(!0), s.slideTo(a + this.totalSlides, 0)), i = s.activeIndex - e
            } else if (this.isOverflow) {
                const s = this.getGroupIndex() - Math.ceil(e / t);
                i = this.getSlideIndex(s)
            } else i = s.activeIndex - e;
            setTimeout(() => {
                this.toggleSkip(!1), s.slideTo(i)
            }, 5)
        }

        nextSlide(e) {
            let i;
            const s = this.swiper, t = s.params.slidesPerView;
            if (s.animating) return;
            e = e ? Math.abs(e) : this.isOverflow ? t : 1;
            const a = s.activeIndex, l = a + t - 1;
            if (s.loopedSlides) {
                const t = s.slides.length - l - 1 >= (this.isOverflow ? e : e + this.freeSlides);
                a - this.totalSlides >= 0 && !t && (this.toggleSkip(!0), s.slideTo(a - this.totalSlides, 0)), i = s.activeIndex + e
            } else if (this.isOverflow) {
                const s = this.getGroupIndex(), a = Math.ceil(e / t);
                i = this.getSlideIndex(s + a)
            } else i = s.activeIndex + e;
            setTimeout(() => {
                this.toggleSkip(!1), s.slideTo(i)
            }, 5)
        }

        toggleSkip(e = !this._skipSlide) {
            this._skipSlide = !!e, this.$slider.toggleClass("noanimate", this._skipSlide)
        }

        toggleAutoplay(e) {
            if (!this.swiper) return;
            this.preventAutoplay && (e = !1);
            const i = this.swiper, s = i.autoplay, t = i.params.autoplay || {};
            s && t.enabled && (e && !s.running ? s.start() : e || s.stop())
        }
    }

    flexbe_cli.components.classes.cards = i
}();
flexbe_cli.init = function () {
    flexbe_cli.vars.init(), flexbe_cli.run.init(), flexbe_cli.header.init(), flexbe_cli.lib.init(), flexbe_cli.locale.init(), flexbe_cli.stat.init(), flexbe_cli.adaptive.init(), flexbe_cli.scroll.init(), flexbe_cli.resize.init(), flexbe_cli.components.init(), flexbe_cli.entity.init(), flexbe_cli.block.init(), flexbe_cli.modal.init(), flexbe_cli.widget.init(), flexbe_cli.element.init(), flexbe_cli.cookies.init()
}, flexbe_cli._init();
