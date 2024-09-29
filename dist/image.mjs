(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image,.image-tool--empty .image-tool__caption,.image-tool--loading .image-tool__caption{display:none}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--loading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--loading .image-tool__image-picture,.image-tool--loading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const H = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', I = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', L = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', U = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
function S(C, a = null, i = {}) {
  const c = document.createElement(C);
  Array.isArray(a) ? c.classList.add(...a) : a !== null && c.classList.add(a);
  for (const o in i)
    i.hasOwnProperty(o) && (c[o] = i[o]);
  return c;
}
var F = /* @__PURE__ */ ((C) => (C.Empty = "empty", C.Uploading = "uploading", C.Filled = "filled", C))(F || {});
class x {
  /**
   * @param ui - image tool Ui module
   * @param ui.api - Editor.js API
   * @param ui.config - user config
   * @param ui.onSelectFile - callback for clicks on Select file button
   * @param ui.readOnly - read-only mode flag
   */
  constructor({ api: a, config: i, onSelectFile: c, readOnly: o }) {
    this.api = a, this.config = i, this.onSelectFile = c, this.readOnly = o, this.nodes = {
      wrapper: S("div", [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: S("div", [this.CSS.imageContainer]),
      fileButton: this.createFileButton(),
      imageEl: void 0,
      imagePreloader: S("div", this.CSS.imagePreloader),
      caption: S("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      })
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }
  /**
   * Apply visual representation of activated tune
   * @param tuneName - one of available tunes {@link Tunes.tunes}
   * @param status - true for enable, false for disable
   */
  applyTune(a, i) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${a}`, i);
  }
  /**
   * Renders tool UI
   * @param toolData - saved tool data
   */
  render(a) {
    return a.file === void 0 || Object.keys(a.file).length === 0 ? this.toggleStatus(
      "empty"
      /* Empty */
    ) : this.toggleStatus(
      "uploading"
      /* Uploading */
    ), this.nodes.wrapper;
  }
  /**
   * Shows uploading preloader
   * @param src - preview source
   */
  showPreloader(a) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${a})`, this.toggleStatus(
      "uploading"
      /* Uploading */
    );
  }
  /**
   * Hide uploading preloader
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(
      "empty"
      /* Empty */
    );
  }
  /**
   * Shows an image
   * @param url - image source
   */
  fillImage(a) {
    const i = /\.mp4$/.test(a) ? "VIDEO" : "IMG", c = {
      src: a
    };
    let o = "load";
    i === "VIDEO" && (c.autoplay = !0, c.loop = !0, c.muted = !0, c.playsinline = !0, o = "loadeddata"), this.nodes.imageEl = S(i, this.CSS.imageEl, c), this.nodes.imageEl.addEventListener(o, () => {
      this.toggleStatus(
        "filled"
        /* Filled */
      ), this.nodes.imagePreloader !== void 0 && (this.nodes.imagePreloader.style.backgroundImage = "");
    }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }
  /**
   * Shows caption input
   * @param text - caption content text
   */
  fillCaption(a) {
    this.nodes.caption !== void 0 && (this.nodes.caption.innerHTML = a);
  }
  /**
   * CSS classes
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      /**
       * Tool's classes
       */
      wrapper: "image-tool",
      imageContainer: "image-tool__image",
      imagePreloader: "image-tool__image-preloader",
      imageEl: "image-tool__image-picture",
      caption: "image-tool__caption"
    };
  }
  /**
   * Creates upload-file button
   */
  createFileButton() {
    const a = S("div", [this.CSS.button]);
    return a.innerHTML = this.config.buttonContent ?? `${L} ${this.api.i18n.t("Select an Image")}`, a.addEventListener("click", () => {
      this.onSelectFile();
    }), a;
  }
  /**
   * Changes UI status
   * @param status - see {@link Ui.status} constants
   */
  toggleStatus(a) {
    for (const i in F)
      Object.prototype.hasOwnProperty.call(F, i) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${F[i]}`, a === F[i]);
  }
}
function D(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
var R = { exports: {} };
(function(C, a) {
  (function(i, c) {
    C.exports = c();
  })(window, function() {
    return function(i) {
      var c = {};
      function o(r) {
        if (c[r]) return c[r].exports;
        var n = c[r] = { i: r, l: !1, exports: {} };
        return i[r].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
      }
      return o.m = i, o.c = c, o.d = function(r, n, d) {
        o.o(r, n) || Object.defineProperty(r, n, { enumerable: !0, get: d });
      }, o.r = function(r) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
      }, o.t = function(r, n) {
        if (1 & n && (r = o(r)), 8 & n || 4 & n && typeof r == "object" && r && r.__esModule) return r;
        var d = /* @__PURE__ */ Object.create(null);
        if (o.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: r }), 2 & n && typeof r != "string") for (var b in r) o.d(d, b, (function(u) {
          return r[u];
        }).bind(null, b));
        return d;
      }, o.n = function(r) {
        var n = r && r.__esModule ? function() {
          return r.default;
        } : function() {
          return r;
        };
        return o.d(n, "a", n), n;
      }, o.o = function(r, n) {
        return Object.prototype.hasOwnProperty.call(r, n);
      }, o.p = "", o(o.s = 3);
    }([function(i, c) {
      var o;
      o = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        o = o || new Function("return this")();
      } catch {
        typeof window == "object" && (o = window);
      }
      i.exports = o;
    }, function(i, c, o) {
      (function(r) {
        var n = o(2), d = setTimeout;
        function b() {
        }
        function u(e) {
          if (!(this instanceof u)) throw new TypeError("Promises must be constructed via new");
          if (typeof e != "function") throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], t(e, this);
        }
        function f(e, l) {
          for (; e._state === 3; ) e = e._value;
          e._state !== 0 ? (e._handled = !0, u._immediateFn(function() {
            var s = e._state === 1 ? l.onFulfilled : l.onRejected;
            if (s !== null) {
              var g;
              try {
                g = s(e._value);
              } catch (m) {
                return void y(l.promise, m);
              }
              p(l.promise, g);
            } else (e._state === 1 ? p : y)(l.promise, e._value);
          })) : e._deferreds.push(l);
        }
        function p(e, l) {
          try {
            if (l === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (l && (typeof l == "object" || typeof l == "function")) {
              var s = l.then;
              if (l instanceof u) return e._state = 3, e._value = l, void w(e);
              if (typeof s == "function") return void t((g = s, m = l, function() {
                g.apply(m, arguments);
              }), e);
            }
            e._state = 1, e._value = l, w(e);
          } catch (h) {
            y(e, h);
          }
          var g, m;
        }
        function y(e, l) {
          e._state = 2, e._value = l, w(e);
        }
        function w(e) {
          e._state === 2 && e._deferreds.length === 0 && u._immediateFn(function() {
            e._handled || u._unhandledRejectionFn(e._value);
          });
          for (var l = 0, s = e._deferreds.length; l < s; l++) f(e, e._deferreds[l]);
          e._deferreds = null;
        }
        function v(e, l, s) {
          this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof l == "function" ? l : null, this.promise = s;
        }
        function t(e, l) {
          var s = !1;
          try {
            e(function(g) {
              s || (s = !0, p(l, g));
            }, function(g) {
              s || (s = !0, y(l, g));
            });
          } catch (g) {
            if (s) return;
            s = !0, y(l, g);
          }
        }
        u.prototype.catch = function(e) {
          return this.then(null, e);
        }, u.prototype.then = function(e, l) {
          var s = new this.constructor(b);
          return f(this, new v(e, l, s)), s;
        }, u.prototype.finally = n.a, u.all = function(e) {
          return new u(function(l, s) {
            if (!e || e.length === void 0) throw new TypeError("Promise.all accepts an array");
            var g = Array.prototype.slice.call(e);
            if (g.length === 0) return l([]);
            var m = g.length;
            function h(T, E) {
              try {
                if (E && (typeof E == "object" || typeof E == "function")) {
                  var j = E.then;
                  if (typeof j == "function") return void j.call(E, function(M) {
                    h(T, M);
                  }, s);
                }
                g[T] = E, --m == 0 && l(g);
              } catch (M) {
                s(M);
              }
            }
            for (var k = 0; k < g.length; k++) h(k, g[k]);
          });
        }, u.resolve = function(e) {
          return e && typeof e == "object" && e.constructor === u ? e : new u(function(l) {
            l(e);
          });
        }, u.reject = function(e) {
          return new u(function(l, s) {
            s(e);
          });
        }, u.race = function(e) {
          return new u(function(l, s) {
            for (var g = 0, m = e.length; g < m; g++) e[g].then(l, s);
          });
        }, u._immediateFn = typeof r == "function" && function(e) {
          r(e);
        } || function(e) {
          d(e, 0);
        }, u._unhandledRejectionFn = function(e) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", e);
        }, c.a = u;
      }).call(this, o(5).setImmediate);
    }, function(i, c, o) {
      c.a = function(r) {
        var n = this.constructor;
        return this.then(function(d) {
          return n.resolve(r()).then(function() {
            return d;
          });
        }, function(d) {
          return n.resolve(r()).then(function() {
            return n.reject(d);
          });
        });
      };
    }, function(i, c, o) {
      function r(t) {
        return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(t);
      }
      o(4);
      var n, d, b, u, f, p, y, w = o(8), v = (d = function(t) {
        return new Promise(function(e, l) {
          t = u(t), (t = f(t)).beforeSend && t.beforeSend();
          var s = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          s.open(t.method, t.url), s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var h = t.headers[m];
            s.setRequestHeader(m, h);
          });
          var g = t.ratio;
          s.upload.addEventListener("progress", function(m) {
            var h = Math.round(m.loaded / m.total * 100), k = Math.ceil(h * g / 100);
            t.progress(Math.min(k, 100));
          }, !1), s.addEventListener("progress", function(m) {
            var h = Math.round(m.loaded / m.total * 100), k = Math.ceil(h * (100 - g) / 100) + g;
            t.progress(Math.min(k, 100));
          }, !1), s.onreadystatechange = function() {
            if (s.readyState === 4) {
              var m = s.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var h = w.parseHeaders(s.getAllResponseHeaders()), k = { body: m, code: s.status, headers: h };
              y(s.status) ? e(k) : l(k);
            }
          }, s.send(t.data);
        });
      }, b = function(t) {
        return t.method = "POST", d(t);
      }, u = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string") throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string") throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && r(t.headers) !== "object") throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(n).includes(t.type))) throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function") throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(e) {
        }, t.beforeSend = t.beforeSend || function(e) {
        }, t.ratio && typeof t.ratio != "number") throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean") throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string") throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, f = function(t) {
        switch (t.method) {
          case "GET":
            var e = p(t.data, n.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + e : t.url + "?" + e;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var l = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || n.JSON;
            }(t);
            (w.isFormData(t.data) || w.isFormElement(t.data)) && (l = n.FORM), t.data = p(t.data, l), l !== v.contentType.FORM && (t.headers["content-type"] = l);
        }
        return t;
      }, p = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case n.URLENCODED:
            return w.urlEncode(t);
          case n.JSON:
            return w.jsonEncode(t);
          case n.FORM:
            return w.formEncode(t);
          default:
            return t;
        }
      }, y = function(t) {
        return t >= 200 && t < 300;
      }, { contentType: n = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: d, get: function(t) {
        return t.method = "GET", d(t);
      }, post: b, transport: function(t) {
        return t = u(t), w.selectFiles(t).then(function(e) {
          for (var l = new FormData(), s = 0; s < e.length; s++) l.append(t.fieldName, e[s], e[s].name);
          w.isObject(t.data) && Object.keys(t.data).forEach(function(m) {
            var h = t.data[m];
            l.append(m, h);
          });
          var g = t.beforeSend;
          return t.beforeSend = function() {
            return g(e);
          }, t.data = l, b(t);
        });
      }, selectFiles: function(t) {
        return delete (t = u(t)).beforeSend, w.selectFiles(t);
      } });
      i.exports = v;
    }, function(i, c, o) {
      o.r(c);
      var r = o(1);
      window.Promise = window.Promise || r.a;
    }, function(i, c, o) {
      (function(r) {
        var n = r !== void 0 && r || typeof self < "u" && self || window, d = Function.prototype.apply;
        function b(u, f) {
          this._id = u, this._clearFn = f;
        }
        c.setTimeout = function() {
          return new b(d.call(setTimeout, n, arguments), clearTimeout);
        }, c.setInterval = function() {
          return new b(d.call(setInterval, n, arguments), clearInterval);
        }, c.clearTimeout = c.clearInterval = function(u) {
          u && u.close();
        }, b.prototype.unref = b.prototype.ref = function() {
        }, b.prototype.close = function() {
          this._clearFn.call(n, this._id);
        }, c.enroll = function(u, f) {
          clearTimeout(u._idleTimeoutId), u._idleTimeout = f;
        }, c.unenroll = function(u) {
          clearTimeout(u._idleTimeoutId), u._idleTimeout = -1;
        }, c._unrefActive = c.active = function(u) {
          clearTimeout(u._idleTimeoutId);
          var f = u._idleTimeout;
          f >= 0 && (u._idleTimeoutId = setTimeout(function() {
            u._onTimeout && u._onTimeout();
          }, f));
        }, o(6), c.setImmediate = typeof self < "u" && self.setImmediate || r !== void 0 && r.setImmediate || this && this.setImmediate, c.clearImmediate = typeof self < "u" && self.clearImmediate || r !== void 0 && r.clearImmediate || this && this.clearImmediate;
      }).call(this, o(0));
    }, function(i, c, o) {
      (function(r, n) {
        (function(d, b) {
          if (!d.setImmediate) {
            var u, f, p, y, w, v = 1, t = {}, e = !1, l = d.document, s = Object.getPrototypeOf && Object.getPrototypeOf(d);
            s = s && s.setTimeout ? s : d, {}.toString.call(d.process) === "[object process]" ? u = function(h) {
              n.nextTick(function() {
                m(h);
              });
            } : function() {
              if (d.postMessage && !d.importScripts) {
                var h = !0, k = d.onmessage;
                return d.onmessage = function() {
                  h = !1;
                }, d.postMessage("", "*"), d.onmessage = k, h;
              }
            }() ? (y = "setImmediate$" + Math.random() + "$", w = function(h) {
              h.source === d && typeof h.data == "string" && h.data.indexOf(y) === 0 && m(+h.data.slice(y.length));
            }, d.addEventListener ? d.addEventListener("message", w, !1) : d.attachEvent("onmessage", w), u = function(h) {
              d.postMessage(y + h, "*");
            }) : d.MessageChannel ? ((p = new MessageChannel()).port1.onmessage = function(h) {
              m(h.data);
            }, u = function(h) {
              p.port2.postMessage(h);
            }) : l && "onreadystatechange" in l.createElement("script") ? (f = l.documentElement, u = function(h) {
              var k = l.createElement("script");
              k.onreadystatechange = function() {
                m(h), k.onreadystatechange = null, f.removeChild(k), k = null;
              }, f.appendChild(k);
            }) : u = function(h) {
              setTimeout(m, 0, h);
            }, s.setImmediate = function(h) {
              typeof h != "function" && (h = new Function("" + h));
              for (var k = new Array(arguments.length - 1), T = 0; T < k.length; T++) k[T] = arguments[T + 1];
              var E = { callback: h, args: k };
              return t[v] = E, u(v), v++;
            }, s.clearImmediate = g;
          }
          function g(h) {
            delete t[h];
          }
          function m(h) {
            if (e) setTimeout(m, 0, h);
            else {
              var k = t[h];
              if (k) {
                e = !0;
                try {
                  (function(T) {
                    var E = T.callback, j = T.args;
                    switch (j.length) {
                      case 0:
                        E();
                        break;
                      case 1:
                        E(j[0]);
                        break;
                      case 2:
                        E(j[0], j[1]);
                        break;
                      case 3:
                        E(j[0], j[1], j[2]);
                        break;
                      default:
                        E.apply(b, j);
                    }
                  })(k);
                } finally {
                  g(h), e = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, o(0), o(7));
    }, function(i, c) {
      var o, r, n = i.exports = {};
      function d() {
        throw new Error("setTimeout has not been defined");
      }
      function b() {
        throw new Error("clearTimeout has not been defined");
      }
      function u(s) {
        if (o === setTimeout) return setTimeout(s, 0);
        if ((o === d || !o) && setTimeout) return o = setTimeout, setTimeout(s, 0);
        try {
          return o(s, 0);
        } catch {
          try {
            return o.call(null, s, 0);
          } catch {
            return o.call(this, s, 0);
          }
        }
      }
      (function() {
        try {
          o = typeof setTimeout == "function" ? setTimeout : d;
        } catch {
          o = d;
        }
        try {
          r = typeof clearTimeout == "function" ? clearTimeout : b;
        } catch {
          r = b;
        }
      })();
      var f, p = [], y = !1, w = -1;
      function v() {
        y && f && (y = !1, f.length ? p = f.concat(p) : w = -1, p.length && t());
      }
      function t() {
        if (!y) {
          var s = u(v);
          y = !0;
          for (var g = p.length; g; ) {
            for (f = p, p = []; ++w < g; ) f && f[w].run();
            w = -1, g = p.length;
          }
          f = null, y = !1, function(m) {
            if (r === clearTimeout) return clearTimeout(m);
            if ((r === b || !r) && clearTimeout) return r = clearTimeout, clearTimeout(m);
            try {
              r(m);
            } catch {
              try {
                return r.call(null, m);
              } catch {
                return r.call(this, m);
              }
            }
          }(s);
        }
      }
      function e(s, g) {
        this.fun = s, this.array = g;
      }
      function l() {
      }
      n.nextTick = function(s) {
        var g = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var m = 1; m < arguments.length; m++) g[m - 1] = arguments[m];
        p.push(new e(s, g)), p.length !== 1 || y || u(t);
      }, e.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = l, n.addListener = l, n.once = l, n.off = l, n.removeListener = l, n.removeAllListeners = l, n.emit = l, n.prependListener = l, n.prependOnceListener = l, n.listeners = function(s) {
        return [];
      }, n.binding = function(s) {
        throw new Error("process.binding is not supported");
      }, n.cwd = function() {
        return "/";
      }, n.chdir = function(s) {
        throw new Error("process.chdir is not supported");
      }, n.umask = function() {
        return 0;
      };
    }, function(i, c, o) {
      function r(d, b) {
        for (var u = 0; u < b.length; u++) {
          var f = b[u];
          f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(d, f.key, f);
        }
      }
      var n = o(9);
      i.exports = function() {
        function d() {
          (function(p, y) {
            if (!(p instanceof y)) throw new TypeError("Cannot call a class as a function");
          })(this, d);
        }
        var b, u, f;
        return b = d, f = [{ key: "urlEncode", value: function(p) {
          return n(p);
        } }, { key: "jsonEncode", value: function(p) {
          return JSON.stringify(p);
        } }, { key: "formEncode", value: function(p) {
          if (this.isFormData(p)) return p;
          if (this.isFormElement(p)) return new FormData(p);
          if (this.isObject(p)) {
            var y = new FormData();
            return Object.keys(p).forEach(function(w) {
              var v = p[w];
              y.append(w, v);
            }), y;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(p) {
          return Object.prototype.toString.call(p) === "[object Object]";
        } }, { key: "isFormData", value: function(p) {
          return p instanceof FormData;
        } }, { key: "isFormElement", value: function(p) {
          return p instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(y, w) {
            var v = document.createElement("INPUT");
            v.type = "file", p.multiple && v.setAttribute("multiple", "multiple"), p.accept && v.setAttribute("accept", p.accept), v.style.display = "none", document.body.appendChild(v), v.addEventListener("change", function(t) {
              var e = t.target.files;
              y(e), document.body.removeChild(v);
            }, !1), v.click();
          });
        } }, { key: "parseHeaders", value: function(p) {
          var y = p.trim().split(/[\r\n]+/), w = {};
          return y.forEach(function(v) {
            var t = v.split(": "), e = t.shift(), l = t.join(": ");
            e && (w[e] = l);
          }), w;
        } }], (u = null) && r(b.prototype, u), f && r(b, f), d;
      }();
    }, function(i, c) {
      var o = function(n) {
        return encodeURIComponent(n).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, r = function(n, d, b, u) {
        return d = d || null, b = b || "&", u = u || null, n ? function(f) {
          for (var p = new Array(), y = 0; y < f.length; y++) f[y] && p.push(f[y]);
          return p;
        }(Object.keys(n).map(function(f) {
          var p, y, w = f;
          if (u && (w = u + "[" + w + "]"), typeof n[f] == "object" && n[f] !== null) p = r(n[f], null, b, w);
          else {
            d && (y = w, w = !isNaN(parseFloat(y)) && isFinite(y) ? d + Number(w) : w);
            var v = n[f];
            v = (v = (v = (v = v === !0 ? "1" : v) === !1 ? "0" : v) === 0 ? "0" : v) || "", p = o(w) + "=" + o(v);
          }
          return p;
        })).join(b).replace(/[!'()*]/g, "") : "";
      };
      i.exports = r;
    }]);
  });
})(R);
var B = R.exports;
const _ = /* @__PURE__ */ D(B);
function O(C) {
  return C !== void 0 && typeof C.then == "function";
}
class q {
  /**
   * @param params - uploader module params
   * @param params.block - the block API
   * @param params.config - image tool config
   * @param params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param params.onError - callback for uploading errors
   */
  constructor({ block: a, config: i, onUpload: c, onError: o }) {
    this.block = a, this.config = i, this.onUpload = c, this.onError = o;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   * @param onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview: a }) {
    const i = function(o) {
      const r = new FileReader();
      r.readAsDataURL(o), r.onload = (n) => {
        a(n.target.result);
      };
    };
    let c;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
      const o = this.config.uploader.uploadByFile;
      c = _.selectFiles({ accept: this.config.types ?? "image/*" }).then((r) => {
        i(r[0]);
        const n = o(r[0], this.block);
        return O(n) || console.warn("Custom uploader method uploadByFile should return a Promise"), n;
      });
    } else
      c = _.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types ?? "image/*",
        headers: this.config.additionalRequestHeaders,
        beforeSend: (o) => {
          i(o[0]);
        },
        fieldName: this.config.field ?? "image"
      }).then((o) => o.body);
    c.then((o) => {
      this.onUpload(o);
    }).catch((o) => {
      this.onError(o);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param url - image source url
   */
  uploadByUrl(a) {
    let i;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (i = this.config.uploader.uploadByUrl(a, this.block), O(i) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : i = _.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: a
      }, this.config.additionalRequestData),
      type: _.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((c) => c.body), i.then((c) => {
      this.onUpload(c);
    }).catch((c) => {
      this.onError(c);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param file - file pasted by drag-n-drop
   * @param onPreview - file pasted by drag-n-drop
   */
  uploadByFile(a, { onPreview: i }) {
    const c = new FileReader();
    c.readAsDataURL(a), c.onload = (r) => {
      i(r.target.result);
    };
    let o;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      o = this.config.uploader.uploadByFile(a), O(o) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const r = new FormData();
      r.append(this.config.field ?? "image", a), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([n, d]) => {
        r.append(n, d);
      }), o = _.post({
        url: this.config.endpoints.byFile,
        data: r,
        type: _.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((n) => n.body);
    }
    o.then((r) => {
      this.onUpload(r);
    }).catch((r) => {
      this.onError(r);
    });
  }
}
/**
 * Image Tool for the Editor.js
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.ts — main Tool's interface, public API and methods for working with data
 *  2) uploader.ts — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.ts — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
class P {
  /**
   * @param tool - tool properties got from editor.js
   * @param tool.data - previously saved data
   * @param tool.config - user config for Tool
   * @param tool.api - Editor.js API
   * @param tool.readOnly - read-only mode flag
   * @param tool.block - current Block API
   */
  constructor({ data: a, config: i, api: c, readOnly: o, block: r }) {
    this.api = c, this.readOnly = o, this.block = r, this.config = {
      endpoints: i.endpoints,
      additionalRequestData: i.additionalRequestData,
      additionalRequestHeaders: i.additionalRequestHeaders,
      field: i.field,
      types: i.types,
      captionPlaceholder: this.api.i18n.t(i.captionPlaceholder ?? "Caption"),
      buttonContent: i.buttonContent,
      uploader: i.uploader,
      actions: i.actions
    }, this.uploader = new q({
      block: this.block,
      config: this.config,
      onUpload: (n) => this.onUpload(n),
      onError: (n) => this.uploadingFailed(n)
    }), this.ui = new x({
      api: c,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (n) => {
            this.ui.showPreloader(n);
          }
        });
      },
      readOnly: o
    }), this._data = {
      caption: "",
      withBorder: !1,
      withBackground: !1,
      stretched: !1,
      file: {
        url: ""
      }
    }, this.data = a;
  }
  /**
   * Notify core that read-only mode is supported
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  static get toolbox() {
    return {
      icon: L,
      title: "Image"
    };
  }
  /**
   * Available image tools
   */
  static get tunes() {
    return [
      {
        name: "withBorder",
        icon: I,
        title: "With border",
        toggle: !0
      },
      {
        name: "stretched",
        icon: U,
        title: "Stretch image",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: H,
        title: "With background",
        toggle: !0
      }
    ];
  }
  /**
   * Renders Block content
   */
  render() {
    return this.ui.render(this.data);
  }
  /**
   * Validate data: check if Image exists
   * @param savedData — data received after saving
   * @returns false if saved data is not correct, otherwise true
   */
  validate(a) {
    return !!a.file.url;
  }
  /**
   * Return Block data
   */
  save() {
    const a = this.ui.nodes.caption;
    return this._data.caption = a.innerHTML, this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   * @returns TunesMenuConfig
   */
  renderSettings() {
    return P.tunes.concat(this.config.actions || []).map((i) => ({
      icon: i.icon,
      label: this.api.i18n.t(i.title),
      name: i.name,
      toggle: i.toggle,
      isActive: this.data[i.name],
      onActivate: () => {
        if (typeof i.action == "function") {
          i.action(i.name);
          return;
        }
        this.tuneToggled(i.name);
      }
    }));
  }
  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }
  /**
   * Specify paste substitutes
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   */
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [
        {
          img: { src: !0 }
        }
      ],
      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
      },
      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ["image/*"]
      }
    };
  }
  /**
   * Specify paste handlers
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   */
  async onPaste(a) {
    switch (a.type) {
      case "tag": {
        const i = a.detail.data;
        if (/^blob:/.test(i.src)) {
          const o = await (await fetch(i.src)).blob();
          this.uploadFile(o);
          break;
        }
        this.uploadUrl(i.src);
        break;
      }
      case "pattern": {
        const i = a.detail.data;
        this.uploadUrl(i);
        break;
      }
      case "file": {
        const i = a.detail.file;
        this.uploadFile(i);
        break;
      }
    }
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   * @param data - data in Image Tool format
   */
  set data(a) {
    this.image = a.file, this._data.caption = a.caption || "", this.ui.fillCaption(this._data.caption), P.tunes.forEach(({ name: i }) => {
      const c = typeof a[i] < "u" ? a[i] === !0 || a[i] === "true" : !1;
      this.setTune(i, c);
    });
  }
  /**
   * Return Tool data
   */
  get data() {
    return this._data;
  }
  /**
   * Set new image file
   * @param file - uploaded file data
   */
  set image(a) {
    this._data.file = a || { url: "" }, a && a.url && this.ui.fillImage(a.url);
  }
  /**
   * File uploading callback
   * @param response - uploading server response
   */
  onUpload(a) {
    a.success && a.file ? this.image = a.file : this.uploadingFailed("incorrect response: " + JSON.stringify(a));
  }
  /**
   * Handle uploader errors
   * @param errorText - uploading error info
   */
  uploadingFailed(a) {
    console.log("Image Tool: uploading failed because of", a), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload image. Please try another."),
      style: "error"
    }), this.ui.hidePreloader();
  }
  /**
   * Callback fired when Block Tune is activated
   * @param tuneName - tune that has been clicked
   */
  tuneToggled(a) {
    this.setTune(a, !this._data[a]);
  }
  /**
   * Set one tune
   * @param tuneName - {@link Tunes.tunes}
   * @param value - tune state
   */
  setTune(a, i) {
    this._data[a] = i, this.ui.applyTune(a, i), a === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = i;
    }).catch((c) => {
      console.error(c);
    });
  }
  /**
   * Show preloader and upload image file
   * @param file - file that is currently uploading (from paste)
   */
  uploadFile(a) {
    this.uploader.uploadByFile(a, {
      onPreview: (i) => {
        this.ui.showPreloader(i);
      }
    });
  }
  /**
   * Show preloader and upload image by target url
   * @param url - url pasted
   */
  uploadUrl(a) {
    this.ui.showPreloader(a), this.uploader.uploadByUrl(a);
  }
}
export {
  P as default
};
