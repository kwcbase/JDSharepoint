(() => {
  // ../tmp/widget-builds/9e4e1fa2-3567-4fd2-8a58-6b4a66826f19/widget-entry.tsx
  var VARIABLES = [{ name: "site_url", type: "string", title: "SharePoint site URL", default: "https://moosetoque.sharepoint.com/sites/TeamMoose" }, { name: "widget_title", type: "string", title: "Widget Title", default: "Team Moose" }, { name: "library_name", type: "string", title: "Library Name", default: "Documents" }, { name: "max_results", type: "number", title: "Items per folder", default: 100 }, { name: "login_button_text", type: "string", title: "Sign-in Button Text", default: "Sign in with Microsoft" }];
  var CONFIG_SCHEMA = { type: "object", properties: { site_url: { type: "string", title: "SharePoint site URL", default: "https://moosetoque.sharepoint.com/sites/TeamMoose" }, widget_title: { type: "string", title: "Widget Title", default: "Team Moose" }, library_name: { type: "string", title: "Library Name", default: "Documents" }, max_results: { type: "number", title: "Items per folder", default: 100 }, login_button_text: { type: "string", title: "Sign-in Button Text", default: "Sign in with Microsoft" } } };
  var UI_SCHEMA = { max_results: { "ui:widget": "updown" } };
  var SCHEMA_ATTRIBUTES = VARIABLES.map(function(v) {
    return v.name;
  });
  var WIDGET_CSS = `:host{font-family:inherit;margin:0;padding:16px;box-sizing:border-box}
#card-wrap{display:flex;flex-direction:column;gap:12px}
.header{display:flex;align-items:center;justify-content:space-between;gap:12px}
.title{font-family:inherit;font-size:18px;color:inherit;font-weight:700}
.controls{display:flex;gap:8px;align-items:center}
.container{margin-top:12px}
.loading, .empty, .error{display:flex;align-items:center;justify-content:center;padding:28px;border-radius:12px;background:linear-gradient(180deg,rgba(0,0,0,0.03),rgba(0,0,0,0.01));box-shadow:0 6px 18px rgba(2,6,23,0.06)}
.loading .pulse{width:48px;height:48px;border-radius:10px;background:linear-gradient(90deg,#e6f4ef,#f3faf8);box-shadow:inset 0 -6px 12px rgba(0,0,0,0.02)}
.list{display:grid;grid-template-columns:1fr;gap:10px}
.card{display:flex;gap:12px;align-items:flex-start;padding:12px;border-radius:10px;border:1px solid transparent;background:linear-gradient(180deg,#ffffff,#fbfffd);box-shadow:0 6px 14px rgba(6,18,10,0.04);transition:transform .12s ease,border-color .12s ease}
.card:hover{transform:translateY(-4px);border-color:rgba(11,91,58,0.12)}
.card a{display:flex;gap:12px;text-decoration:none;color:inherit;width:100%}
.icon-wrap{width:52px;height:52px;flex:0 0 52px;border-radius:10px;background:linear-gradient(135deg,#e8f6ef,#dff3ea);display:flex;align-items:center;justify-content:center;box-shadow:inset 0 -6px 10px rgba(0,0,0,0.02)}
.icon{width:28px;height:28px;fill:none;stroke:#0b5b3a;stroke-width:1.6}
.meta{flex:1;min-width:0}
.name{font-weight:700;font-size:15px;color:#083f2e}
.badge{display:inline-block;margin-top:6px;padding:4px 8px;border-radius:999px;background:rgba(11,91,58,0.08);color:#0b5b3a;font-size:12px;font-weight:600}
.desc{margin-top:8px;color:#42514b;font-size:13px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.signin-btn{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:8px;background:#0b5b3a;color:white;font-weight:700;border:none;cursor:pointer;font-family:inherit}
.small-note{font-size:13px;color:#53635b}
.hidden{display:none !important}
.footer{margin-top:10px;font-size:12px;color:#6b7a73}
.browser-shell{background:linear-gradient(180deg,#ffffff,#fcfffe);border-radius:12px;padding:12px;border:1px solid rgba(4,20,12,0.04);box-shadow:0 8px 24px rgba(5,20,12,0.04)}
.breadcrumb{display:flex;gap:8px;align-items:center;font-size:13px;color:#225b41;margin-bottom:10px}
.breadcrumb a{color:#0b5b3a;text-decoration:none;font-weight:700;cursor:pointer}
.table{width:100%;border-collapse:collapse;font-size:13px}
.table th{text-align:left;padding:10px;border-bottom:1px solid rgba(6,18,10,0.06);color:#234b3a;font-weight:700}
.table td{padding:10px;border-bottom:1px solid rgba(6,18,10,0.03);vertical-align:middle}
.row{transition:background .09s ease,transform .09s ease;cursor:pointer}
.row:hover{background:linear-gradient(90deg,rgba(3,58,32,0.02),rgba(255,255,255,0.0));transform:translateY(-2px)}
.icon-cell{width:36px}
.name-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:420px}
.meta-small{color:#4c6a60;font-size:12px}
.preview-panel{margin-top:12px;background:linear-gradient(180deg,#ffffff,#fbfffe);border-radius:10px;padding:12px;border:1px solid rgba(6,18,10,0.04)}
.nav-row{display:flex;gap:8px}
.back-btn{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:8px;background:#f1fbf6;color:#06472f;border:none;cursor:pointer;font-weight:700}
.sitepages-btn{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:8px;background:#eaf7ef;color:#06472f;border:none;cursor:pointer;font-weight:700}
.preview-iframe{width:100%;height:600px;border:0;border-radius:8px;margin-top:10px}
.empty-note{color:#3c5a4f}
.heading-page{font-size:20px;font-weight:800;color:#083f2e;margin-top:8px}
.page-content{margin-top:12px;color:#2f463f}
.webpart-section{margin-top:14px;padding:10px;border-radius:8px;background:linear-gradient(180deg,#ffffff,#fbfffe);border:1px solid rgba(6,18,10,0.03)}
.webpart-heading{font-size:16px;font-weight:800;color:#06472f;margin-bottom:8px}
.webpart-list{padding-left:18px;margin:0}
.webpart-list a{color:#0b5b3a;text-decoration:none;font-weight:700}
.webpart-news-item{display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-bottom:1px solid rgba(6,18,10,0.03)}
.webpart-news-thumb{width:84px;height:56px;object-fit:cover;border-radius:6px;background:#f3f7f4}
.webpart-news-meta{flex:1}
.webpart-news-title{font-weight:700;color:#083f2e}
.webpart-news-desc{color:#42514b;font-size:13px}
.details-pre{white-space:pre-wrap;word-break:break-word;max-height:360px;overflow:auto;background:#0f1720;color:#f1f5f9;padding:8px;border-radius:6px}`;
  var WIDGET_HTML = `<div id='sp-container'>
<div class='header'>
<div class='title' id='title'>Team Moose</div>
<div class='controls'>
</div>
</div>
<div class='container'>
<div id='loading' class='loading'>
<div class='pulse' aria-hidden='true'></div>
</div>
<div id='content' class='hidden'>
<div id='card-wrap'></div>
</div>
<div id='preview' class='hidden'></div>
<div id='browser' class='hidden'></div>
<div id='empty' class='empty hidden'>No lists or libraries found for this site.</div>
<div id='error' class='error hidden'></div>
</div>
<div class='footer' id='footer'>Powered by Microsoft Graph</div>
</div>`;
  function factory(BaseBlockClass, _widgetApi) {
    return class WidgetBlock extends BaseBlockClass {
      constructor() {
        super();
      }
      renderBlock(_container) {
        var shadow = this.shadowRoot || this.attachShadow({ mode: "open" });
        var __CONFIG__ = {};
        for (var i = 0;i < VARIABLES.length; i++) {
          var v = VARIABLES[i];
          var raw = this.getAttribute(v.name);
          if (raw == null)
            raw = String(v.default);
          if (v.type === "number") {
            __CONFIG__[v.name] = Number(raw);
          } else if (v.type === "boolean") {
            __CONFIG__[v.name] = raw === "true";
          } else if (v.type === "json_array") {
            try {
              __CONFIG__[v.name] = JSON.parse(atob(raw));
            } catch (_e) {
              __CONFIG__[v.name] = [];
            }
          } else {
            __CONFIG__[v.name] = raw;
          }
        }
        __CONFIG__.onUpdate = function(_cb) {};
        shadow.innerHTML = "<style>" + WIDGET_CSS + "</style>" + WIDGET_HTML;
        var __ROOT__ = shadow;
        if (!__ROOT__.style) {
          var _hostEl = shadow.host;
          Object.defineProperty(__ROOT__, "style", {
            get: function() {
              return _hostEl ? _hostEl.style : { setProperty: function() {}, removeProperty: function() {}, getPropertyValue: function() {
                return "";
              } };
            },
            configurable: true
          });
        }
        if (!__ROOT__.setAttribute) {
          var _hostEl2 = shadow.host;
          __ROOT__.setAttribute = function(name, value) {
            if (_hostEl2)
              _hostEl2.setAttribute(name, value);
          };
          __ROOT__.getAttribute = function(name) {
            return _hostEl2 ? _hostEl2.getAttribute(name) : null;
          };
          __ROOT__.removeAttribute = function(name) {
            if (_hostEl2)
              _hostEl2.removeAttribute(name);
          };
        }
        if (shadow.__widgetIntervals) {
          for (var _ii = 0;_ii < shadow.__widgetIntervals.length; _ii++) {
            clearInterval(shadow.__widgetIntervals[_ii]);
            clearTimeout(shadow.__widgetIntervals[_ii]);
          }
        }
        shadow.__widgetIntervals = [];
        var _origSetInterval = window.setInterval;
        var _origSetTimeout = window.setTimeout;
        var _shadow = shadow;
        var setInterval = function(fn, delay) {
          var id = _origSetInterval(fn, delay);
          _shadow.__widgetIntervals.push(id);
          return id;
        };
        var setTimeout = function(fn, delay) {
          var id = _origSetTimeout(fn, delay);
          _shadow.__widgetIntervals.push(id);
          return id;
        };
        (function(__CONFIG__, __ROOT__, setInterval, setTimeout) {
          var _host = __ROOT__.host;
          var document = {
            getElementById: function(id) {
              return __ROOT__.querySelector("#" + id);
            },
            querySelector: function(sel) {
              return __ROOT__.querySelector(sel);
            },
            querySelectorAll: function(sel) {
              return __ROOT__.querySelectorAll(sel);
            },
            createElement: window.document.createElement.bind(window.document),
            createTextNode: window.document.createTextNode.bind(window.document),
            createElementNS: window.document.createElementNS.bind(window.document),
            addEventListener: function(type, fn, opts) {
              if (type === "DOMContentLoaded" || type === "load") {
                try {
                  fn({ type, target: __ROOT__ });
                } catch (e) {}
              } else {
                window.addEventListener(type, fn, opts);
              }
            },
            removeEventListener: window.removeEventListener.bind(window),
            body: function() {
              var _style = _host ? _host.style : window.document.body.style;
              return {
                style: _style,
                appendChild: function(el) {
                  return __ROOT__.appendChild(el);
                },
                insertBefore: function(el, ref) {
                  return __ROOT__.insertBefore(el, ref);
                },
                classList: _host ? _host.classList : { add: function() {}, remove: function() {}, toggle: function() {}, contains: function() {
                  return false;
                } },
                addEventListener: function(t, fn, opts) {
                  window.addEventListener(t, fn, opts);
                },
                removeEventListener: function(t, fn, opts) {
                  window.removeEventListener(t, fn, opts);
                },
                getAttribute: function(a) {
                  return _host ? _host.getAttribute(a) : null;
                },
                setAttribute: function(a, v) {
                  if (_host)
                    _host.setAttribute(a, v);
                }
              };
            }(),
            head: __ROOT__,
            documentElement: { style: _host ? _host.style : window.document.documentElement.style }
          };
          var _s = { variables: __CONFIG__, attributes: __CONFIG__, props: __CONFIG__ };
          window.widgetConfig = __CONFIG__;
          window.widget = { variables: __CONFIG__, config: __CONFIG__, props: __CONFIG__ };
          const titleEl = __ROOT__.querySelector("#title");
          const container = __ROOT__.querySelector("#sp-container");
          const loadingEl = __ROOT__.querySelector("#loading");
          const contentEl = __ROOT__.querySelector("#content");
          const cardWrap = __ROOT__.querySelector("#card-wrap");
          const emptyEl = __ROOT__.querySelector("#empty");
          const errorEl = __ROOT__.querySelector("#error");
          const footerEl = __ROOT__.querySelector("#footer");
          const previewEl = __ROOT__.querySelector("#preview");
          const browserEl = __ROOT__.querySelector("#browser");
          __ROOT__.host.style.setProperty("--widget-font-family", "inherit");
          const configTitle = __CONFIG__.widget_title || "Team Moose";
          const configSiteUrl = __CONFIG__.site_url || "https://moosetoque.sharepoint.com/sites/TeamMoose";
          const configLibraryName = __CONFIG__.library_name || "Documents";
          const configMax = Number(__CONFIG__.max_results) || 100;
          const signinLabel = __CONFIG__.login_button_text || "Sign in with Microsoft";
          let currentDriveId = null;
          let currentPathStack = [];
          let currentFolderId = null;
          let currentItems = [];
          let currentSiteId = null;
          let effectiveLibraryName = configLibraryName;
          let startPage = null;
          let token = null;
          let pageHistory = [];
          let currentRenderedPage = null;
          let previewDelegationAttached = false;
          async function fetchDriveId(token, siteId) {
            const drivesUrl = `https://graph.microsoft.com/v1.0/sites/${siteId}/drives?$select=id,name`;
            const r = await fetch(drivesUrl, { method: "GET", headers: { Authorization: "Bearer " + token, Accept: "application/json" } });
            if (!r.ok) {
              const t = await r.text();
              throw new Error("Drive lookup failed: " + r.status + " " + t);
            }
            const js = await r.json();
            const arr = Array.isArray(js.value) ? js.value : [];
            if (arr.length === 0)
              return null;
            const match = arr.find((d) => String(d.name || "").toLowerCase() === String(effectiveLibraryName || "").toLowerCase());
            return match ? match.id : arr[0].id;
          }
          async function fetchChildren(driveId, folderId) {
            let items = [];
            let next;
            if (folderId) {
              next = `https://graph.microsoft.com/v1.0/drives/${driveId}/items/${folderId}/children?$top=200&$select=id,name,size,folder,file,lastModifiedDateTime,lastModifiedBy,webUrl`;
            } else {
              next = `https://graph.microsoft.com/v1.0/drives/${driveId}/root/children?$top=200&$select=id,name,size,folder,file,lastModifiedDateTime,lastModifiedBy,webUrl`;
            }
            while (next) {
              const r = await fetch(next, { method: "GET", headers: { Authorization: "Bearer " + token, Accept: "application/json" } });
              if (!r.ok) {
                const t = await r.text();
                throw new Error("Items fetch failed: " + r.status + " " + t);
              }
              const payload = await r.json();
              const page = Array.isArray(payload.value) ? payload.value : [];
              page.forEach((it) => {
                items.push(it);
              });
              next = payload["@odata.nextLink"] || null;
            }
            items = items.filter(Boolean);
            items.sort((a, b) => {
              const aIsFolder = !!a.folder;
              const bIsFolder = !!b.folder;
              if (aIsFolder && !bIsFolder)
                return -1;
              if (!aIsFolder && bIsFolder)
                return 1;
              return String(a.name || "").localeCompare(String(b.name || ""), undefined, { sensitivity: "base" });
            });
            return items.slice(0, configMax);
          }
          function showOnly(el) {
            loadingEl.classList.add("hidden");
            contentEl.classList.add("hidden");
            browserEl.classList.add("hidden");
            previewEl.classList.add("hidden");
            emptyEl.classList.add("hidden");
            errorEl.classList.add("hidden");
            el.classList.remove("hidden");
          }
          function renderLoading() {
            loadingEl.classList.remove("hidden");
            contentEl.classList.add("hidden");
            browserEl.classList.add("hidden");
            previewEl.classList.add("hidden");
            emptyEl.classList.add("hidden");
            errorEl.classList.add("hidden");
          }
          function renderError(message) {
            errorEl.textContent = message;
            errorEl.innerHTML = "";
            const shell = document.createElement("div");
            shell.className = "preview-panel";
            const nav = createNavButtons();
            shell.appendChild(nav);
            const msg = document.createElement("div");
            msg.style.marginTop = "12px";
            msg.textContent = message;
            shell.appendChild(msg);
            errorEl.appendChild(shell);
            showOnly(errorEl);
          }
          function renderEmpty(message) {
            emptyEl.textContent = message || "No items found in this location.";
            showOnly(emptyEl);
          }
          function renderSignIn(signInFn) {
            const box = document.createElement("div");
            box.style.display = "flex";
            box.style.justifyContent = "center";
            const btn = document.createElement("button");
            btn.id = "signin-button";
            btn.className = "signin-btn";
            btn.textContent = signinLabel;
            btn.addEventListener("click", () => {
              signInFn();
            });
            box.appendChild(btn);
            contentEl.innerHTML = "";
            contentEl.appendChild(box);
            showOnly(contentEl);
          }
          function formatDate(dateStr) {
            if (!dateStr)
              return "";
            const d = new Date(dateStr);
            if (Number.isNaN(d.getTime()))
              return "";
            return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
          }
          function formatSize(bytes) {
            if (bytes === undefined || bytes === null)
              return "";
            const kb = Math.round(bytes / 1024);
            if (kb < 1024)
              return kb + " KB";
            const mb = kb / 1024;
            return mb.toFixed(1) + " MB";
          }
          function makeIcon(isFolder) {
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("viewBox", "0 0 24 24");
            svg.setAttribute("width", "18");
            svg.setAttribute("height", "18");
            svg.setAttribute("fill", "none");
            svg.setAttribute("stroke", "#0b5b3a");
            svg.setAttribute("stroke-width", "1.6");
            if (isFolder) {
              svg.innerHTML = "<path d='M3 8a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z'></path>";
            } else {
              svg.innerHTML = "<rect x='3' y='4' width='14' height='16' rx='2'></rect><path d='M7 8h6M7 12h6M7 16h6'/></svg>";
            }
            return svg;
          }
          async function loadFolder(driveId, folderId, pathStack) {
            try {
              renderLoading();
              currentDriveId = driveId;
              currentFolderId = folderId || null;
              currentPathStack = Array.isArray(pathStack) ? pathStack.slice() : [];
              const items = await fetchChildren(driveId, folderId);
              currentItems = items;
              renderBrowser(driveId, currentFolderId, currentPathStack, items);
            } catch (e) {
              renderError("Error loading folder: " + e.message);
            }
          }
          function renderBrowser(driveId, folderId, pathStack, items) {
            browserEl.innerHTML = "";
            const shell = document.createElement("div");
            shell.className = "browser-shell";
            const bc = document.createElement("div");
            bc.className = "breadcrumb";
            const libLink = document.createElement("a");
            libLink.textContent = effectiveLibraryName || "Library";
            libLink.addEventListener("click", () => {
              loadFolder(driveId, null, []);
            });
            bc.appendChild(libLink);
            pathStack.forEach((p, idx) => {
              const sep = document.createElement("div");
              sep.textContent = "›";
              sep.style.opacity = "0.5";
              sep.style.marginLeft = "6px";
              sep.style.marginRight = "6px";
              bc.appendChild(sep);
              const node = document.createElement("a");
              node.textContent = p.name || "...";
              node.addEventListener("click", () => {
                const targetStack = pathStack.slice(0, idx + 1);
                const targetId = p.id;
                loadFolder(driveId, targetId, targetStack);
              });
              bc.appendChild(node);
            });
            shell.appendChild(bc);
            if (items.length === 0) {
              const emp = document.createElement("div");
              emp.className = "empty-note";
              emp.textContent = "This folder is empty.";
              shell.appendChild(emp);
              browserEl.innerHTML = "";
              browserEl.appendChild(shell);
              showOnly(browserEl);
              return;
            }
            const table = document.createElement("table");
            table.className = "table";
            const thead = document.createElement("thead");
            const thr = document.createElement("tr");
            ["Name", "Modified", "Modified By", "Size"].forEach((h) => {
              const th = document.createElement("th");
              th.textContent = h;
              thr.appendChild(th);
            });
            thead.appendChild(thr);
            table.appendChild(thead);
            const tbody = document.createElement("tbody");
            items.forEach((it) => {
              const tr = document.createElement("tr");
              tr.className = "row";
              tr.tabIndex = 0;
              const tdIcon = document.createElement("td");
              tdIcon.className = "icon-cell";
              tdIcon.appendChild(makeIcon(!!it.folder));
              const tdName = document.createElement("td");
              tdName.className = "name-cell";
              const nameWrap = document.createElement("div");
              nameWrap.style.display = "flex";
              nameWrap.style.alignItems = "center";
              nameWrap.style.gap = "10px";
              const nameText = document.createElement("div");
              nameText.textContent = it.name || "";
              nameText.style.fontWeight = it.folder ? "700" : "600";
              nameWrap.appendChild(nameText);
              if (it.folder) {
                const tag = document.createElement("div");
                tag.className = "meta-small";
                tag.style.marginLeft = "6px";
                tag.textContent = "Folder";
                nameWrap.appendChild(tag);
              }
              tdName.appendChild(nameWrap);
              const tdModified = document.createElement("td");
              tdModified.textContent = formatDate(it.lastModifiedDateTime);
              const tdBy = document.createElement("td");
              tdBy.textContent = it.lastModifiedBy && it.lastModifiedBy.user && it.lastModifiedBy.user.displayName ? it.lastModifiedBy.user.displayName : "";
              const tdSize = document.createElement("td");
              tdSize.textContent = it.folder ? "" : formatSize(it.size);
              tr.appendChild(tdIcon);
              tr.appendChild(tdName);
              tr.appendChild(tdModified);
              tr.appendChild(tdBy);
              tr.appendChild(tdSize);
              tr.addEventListener("click", () => {
                if (it.folder) {
                  const newStack = pathStack.slice();
                  newStack.push({ id: it.id, name: it.name });
                  loadFolder(driveId, it.id, newStack);
                } else {
                  const nameLower = String(it.name || "").toLowerCase();
                  if (effectiveLibraryName && String(effectiveLibraryName).toLowerCase() === "site pages" && nameLower.endsWith(".aspx")) {
                    openSitePage(it);
                  } else {
                    previewFile(it, driveId);
                  }
                }
              });
              tbody.appendChild(tr);
            });
            table.appendChild(tbody);
            shell.appendChild(table);
            browserEl.innerHTML = "";
            browserEl.appendChild(shell);
            showOnly(browserEl);
          }
          async function previewFile(item, driveId) {
            try {
              renderLoading();
              const previewUrl = `https://graph.microsoft.com/v1.0/drives/${driveId}/items/${item.id}/preview`;
              const r = await fetch(previewUrl, { method: "POST", headers: { Authorization: "Bearer " + token, "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({}) });
              if (!r.ok) {
                const t = await r.text();
                throw new Error("Preview failed: " + r.status + " " + t);
              }
              const js = await r.json();
              const getUrl = js && (js.getUrl || js.getPreviewLink || js.value && js.value.getUrl) ? js.getUrl || js.getPreviewLink || js.value && js.value.getUrl : null;
              if (!getUrl) {
                throw new Error("Preview URL not returned");
              }
              renderPreviewIframe(getUrl, item);
            } catch (e) {
              previewFallback(item, e.message);
            }
          }
          function renderPreviewIframe(src, item) {
            previewEl.innerHTML = "";
            const shell = document.createElement("div");
            shell.className = "preview-panel";
            const nav = createNavButtons();
            shell.appendChild(nav);
            const iframe = document.createElement("iframe");
            iframe.className = "preview-iframe";
            iframe.src = src;
            shell.appendChild(iframe);
            previewEl.appendChild(shell);
            currentRenderedPage = null;
            attachPreviewDelegation();
            showOnly(previewEl);
          }
          function previewFallback(item, message) {
            previewEl.innerHTML = "";
            const shell = document.createElement("div");
            shell.className = "preview-panel";
            const nav = createNavButtons();
            shell.appendChild(nav);
            const msg = document.createElement("div");
            msg.style.marginTop = "12px";
            msg.textContent = "Preview unavailable: " + message;
            shell.appendChild(msg);
            const link = document.createElement("a");
            link.href = item.webUrl || "#";
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "Open in SharePoint";
            link.style.display = "inline-block";
            link.style.marginTop = "8px";
            link.style.color = "#0b5b3a";
            link.style.fontWeight = "700";
            shell.appendChild(link);
            previewEl.appendChild(shell);
            currentRenderedPage = null;
            attachPreviewDelegation();
            showOnly(previewEl);
          }
          function sanitizeHtml(dirty) {
            if (!dirty)
              return "";
            const parser = new DOMParser;
            const doc = parser.parseFromString(dirty, "text/html");
            const forbidden = ["script", "style", "iframe", "object", "embed"];
            for (const tag of forbidden) {
              const nodes = Array.from(doc.getElementsByTagName(tag));
              nodes.forEach((n) => {
                if (n.parentNode)
                  n.parentNode.removeChild(n);
              });
            }
            const all = Array.from(doc.querySelectorAll("*"));
            all.forEach((el) => {
              const attrs = Array.from(el.attributes);
              attrs.forEach((attr) => {
                const name = attr.name || "";
                const val = attr.value || "";
                if (name.toLowerCase().startsWith("on")) {
                  el.removeAttribute(name);
                  return;
                }
                if ((name === "href" || name === "src") && /^\s*javascript:/i.test(val)) {
                  el.removeAttribute(name);
                  return;
                }
              });
            });
            return doc.body.innerHTML || "";
          }
          async function fetchAllPages(siteId) {
            let pages = [];
            let next = `https://graph.microsoft.com/v1.0/sites/${siteId}/pages?$select=id,title,name,webUrl&$top=200`;
            while (next) {
              const r = await fetch(next, { method: "GET", headers: { Authorization: "Bearer " + token, Accept: "application/json" } });
              if (!r.ok) {
                const t = await r.text();
                throw new Error("Pages lookup failed: " + r.status + " " + t);
              }
              const payload = await r.json();
              const page = Array.isArray(payload.value) ? payload.value : [];
              for (const p of page)
                pages.push(p);
              next = payload["@odata.nextLink"] || null;
            }
            return pages;
          }
          async function openSitePage(item) {
            try {
              renderLoading();
              if (!currentSiteId)
                throw new Error("Site not resolved");
              const fileName = item && item.name ? String(item.name).toLowerCase() : "";
              const pages = await fetchAllPages(currentSiteId);
              const match = pages.find((p) => {
                try {
                  const lhs = decodeURIComponent(String(p.name || ""));
                  const rhs = decodeURIComponent(String(fileName || ""));
                  return lhs.toLowerCase() === rhs.toLowerCase();
                } catch (e) {
                  return String(p.name || "").toLowerCase() === String(fileName || "").toLowerCase();
                }
              });
              if (!match)
                throw new Error("Matching site page not found");
              const pageId = match.id;
              const wpUrl = `https://graph.microsoft.com/beta/sites/${currentSiteId}/pages/${pageId}/microsoft.graph.sitePage/webparts`;
              const wr = await fetch(wpUrl, { method: "GET", headers: { Authorization: "Bearer " + token, Accept: "application/json" } });
              if (!wr.ok) {
                const t = await wr.text();
                throw new Error("Webparts fetch failed: " + wr.status + " " + t);
              }
              const wj = await wr.json();
              const parts = Array.isArray(wj.value) ? wj.value : [];
              previewEl.innerHTML = "";
              const shell = document.createElement("div");
              shell.className = "preview-panel";
              const nav = createNavButtons();
              shell.appendChild(nav);
              const heading = document.createElement("div");
              heading.className = "heading-page";
              heading.textContent = match.title || match.name || "";
              shell.appendChild(heading);
              const contentBox = document.createElement("div");
              contentBox.className = "page-content";
              let produced = false;
              for (const wp of parts) {
                const section = document.createElement("div");
                section.className = "webpart-section";
                try {
                  const d = wp.data || {};
                  const p = d.properties || {};
                  const odata = wp["@odata.type"] || wp["odataType"] || wp["@odata.type"] || wp.webPartType || "";
                  const odataLc = String(odata).toLowerCase();
                  const headingText = d.title || p.title || wp.title || wp.webPartType || (odata ? String(odata) : "Web Part");
                  const head = document.createElement("div");
                  head.className = "webpart-heading";
                  head.textContent = headingText;
                  section.appendChild(head);
                  if (odataLc.indexOf("textwebpart") !== -1 || odataLc.indexOf("textwebpart") !== -1) {
                    const inner = wp.innerHtml || p.innerHtml || wp.data && wp.data.innerHtml || wp.content || "";
                    const safe = sanitizeHtml(String(inner || ""));
                    const div = document.createElement("div");
                    div.innerHTML = safe || "";
                    section.appendChild(div);
                    produced = produced || safe && safe.trim();
                  } else if (odataLc.indexOf("standardwebpart") !== -1 || String(wp.webPartType || "").toLowerCase().indexOf("standard") !== -1 || p && Object.keys(p).length > 0) {
                    if (Array.isArray(p.items) && p.items.length) {
                      const ul = document.createElement("ul");
                      ul.className = "webpart-list";
                      for (const it of p.items) {
                        try {
                          const text = it.title || it.sourceItem && it.sourceItem.title || "";
                          const href = it.url || it.sourceItem && it.sourceItem.url || "";
                          if (!href)
                            continue;
                          try {
                            new URL(href);
                          } catch (e) {
                            continue;
                          }
                          if (!/^https:/i.test(href))
                            continue;
                          const li = document.createElement("li");
                          const a = document.createElement("a");
                          a.href = href;
                          a.target = "_blank";
                          a.rel = "noopener noreferrer";
                          a.textContent = text || href;
                          li.appendChild(a);
                          ul.appendChild(li);
                          produced = true;
                        } catch (e) {}
                      }
                      section.appendChild(ul);
                    }
                    const headingLower = String(headingText || "").toLowerCase();
                    if (wp.webPartType === "[API_KEY_REMOVED]" || /news/.test(headingLower)) {
                      try {
                        const newsUrl = `https://graph.microsoft.com/beta/sites/${currentSiteId}/pages/microsoft.graph.sitePage?$select=id,name,title,description,webUrl,thumbnailWebUrl,promotionKind,lastModifiedDateTime`;
                        const nr = await fetch(newsUrl, { method: "GET", headers: { Authorization: "Bearer " + token, Accept: "application/json" } });
                        if (nr.ok) {
                          const nj = await nr.json();
                          const list = Array.isArray(nj.value) ? nj.value : [];
                          const newsPosts = list.filter((pst) => pst.promotionKind === "newsPost");
                          newsPosts.sort((a, b) => {
                            const da = a.lastModifiedDateTime ? Date.parse(a.lastModifiedDateTime) : 0;
                            const db = b.lastModifiedDateTime ? Date.parse(b.lastModifiedDateTime) : 0;
                            return db - da;
                          });
                          const slice = newsPosts.slice(0, 5);
                          if (slice.length) {
                            const containerNews = document.createElement("div");
                            for (const post of slice) {
                              const item = document.createElement("div");
                              item.className = "webpart-news-item";
                              const img = document.createElement("img");
                              img.className = "webpart-news-thumb";
                              img.src = post.thumbnailWebUrl || "";
                              img.alt = post.title || "";
                              img.addEventListener("error", () => {
                                img.style.display = "none";
                              });
                              item.appendChild(img);
                              const meta = document.createElement("div");
                              meta.className = "webpart-news-meta";
                              const t = document.createElement("div");
                              t.className = "webpart-news-title";
                              const link = document.createElement("a");
                              link.href = post.webUrl || "#";
                              link.textContent = post.title || post.name || "";
                              link.addEventListener("click", (ev) => {
                                ev.preventDefault();
                                if (post.name) {
                                  if (currentRenderedPage)
                                    pageHistory.push(currentRenderedPage);
                                  openSitePageByName(post.name);
                                }
                              });
                              t.appendChild(link);
                              meta.appendChild(t);
                              const desc = document.createElement("div");
                              desc.className = "webpart-news-desc";
                              desc.textContent = post.description || "";
                              meta.appendChild(desc);
                              const date = document.createElement("div");
                              date.style.fontSize = "12px";
                              date.style.color = "#53635b";
                              date.textContent = post.lastModifiedDateTime ? new Date(post.lastModifiedDateTime).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "";
                              meta.appendChild(date);
                              item.appendChild(meta);
                              containerNews.appendChild(item);
                            }
                            section.appendChild(containerNews);
                            produced = true;
                          }
                        }
                      } catch (e) {
                        const err = document.createElement("div");
                        err.textContent = "News fetch error: " + (e && e.message ? e.message : String(e));
                        section.appendChild(err);
                      }
                    }
                    if (/documents/i.test(headingLower)) {
                      const btn = document.createElement("button");
                      btn.className = "back-btn";
                      btn.textContent = "Open document library";
                      btn.addEventListener("click", () => {
                        if (currentDriveId) {
                          loadFolder(currentDriveId, null, []);
                        } else {
                          showOnly(contentEl);
                        }
                      });
                      section.appendChild(btn);
                      produced = true;
                    }
                  } else {
                    const details = document.createElement("details");
                    const summary = document.createElement("summary");
                    summary.textContent = headingText || (wp.webPartType || "Web Part");
                    details.appendChild(summary);
                    const pre = document.createElement("pre");
                    pre.className = "details-pre";
                    let jsonStr = JSON.stringify(wp, null, 2) || "";
                    if (jsonStr.length > 3000)
                      jsonStr = jsonStr.slice(0, 3000) + `
... (truncated)`;
                    pre.textContent = jsonStr;
                    details.appendChild(pre);
                    section.appendChild(details);
                    produced = true;
                  }
                } catch (e) {
                  const err = document.createElement("div");
                  err.style.marginTop = "8px";
                  err.textContent = "Error rendering web part: " + (e && e.message ? e.message : String(e));
                  section.appendChild(err);
                }
                shell.appendChild(section);
              }
              contentBox.appendChild(shell);
              if (!produced) {
                const fallback = document.createElement("div");
                fallback.textContent = "This page has no text content to display here.";
                contentBox.appendChild(fallback);
              }
              previewEl.appendChild(contentBox);
              currentRenderedPage = match.name || match.title || null;
              attachPreviewDelegation();
              showOnly(previewEl);
            } catch (e) {
              previewEl.innerHTML = "";
              const shell = document.createElement("div");
              shell.className = "preview-panel";
              const nav = createNavButtons();
              shell.appendChild(nav);
              const msg = document.createElement("div");
              msg.style.marginTop = "12px";
              msg.textContent = "Page view error: " + (e && e.message ? e.message : String(e));
              shell.appendChild(msg);
              previewEl.appendChild(shell);
              currentRenderedPage = null;
              attachPreviewDelegation();
              showOnly(previewEl);
            }
          }
          async function openSitePageByName(name) {
            try {
              renderLoading();
              if (!currentSiteId)
                throw new Error("Site not resolved");
              const pages = await fetchAllPages(currentSiteId);
              const target = pages.find((p) => {
                try {
                  const lhs = decodeURIComponent(String(p.name || ""));
                  const rhs = decodeURIComponent(String(name || ""));
                  return lhs.toLowerCase() === rhs.toLowerCase();
                } catch (e) {
                  return String(p.name || "").toLowerCase() === String(name || "").toLowerCase();
                }
              });
              if (!target)
                throw new Error("Start page not found");
              const fakeItem = { name: target.name };
              await openSitePage(fakeItem);
            } catch (e) {
              previewEl.innerHTML = "";
              const shell = document.createElement("div");
              shell.className = "preview-panel";
              const nav = createNavButtons();
              shell.appendChild(nav);
              const msg = document.createElement("div");
              msg.style.marginTop = "12px";
              msg.textContent = "Start page error: " + (e && e.message ? e.message : String(e));
              shell.appendChild(msg);
              previewEl.appendChild(shell);
              currentRenderedPage = null;
              attachPreviewDelegation();
              showOnly(previewEl);
            }
          }
          function createNavButtons() {
            const wrapper = document.createElement("div");
            wrapper.className = "nav-row";
            const back = document.createElement("button");
            back.className = "back-btn";
            back.textContent = "Back";
            back.addEventListener("click", () => {
              if (pageHistory.length) {
                const prev = pageHistory.pop();
                if (prev) {
                  openSitePageByName(prev);
                } else {
                  if (currentDriveId) {
                    loadFolder(currentDriveId, currentFolderId, currentPathStack);
                  } else {
                    showOnly(contentEl);
                  }
                }
              } else {
                if (currentDriveId) {
                  loadFolder(currentDriveId, currentFolderId, currentPathStack);
                } else {
                  showOnly(contentEl);
                }
              }
            });
            const siteBtn = document.createElement("button");
            siteBtn.className = "sitepages-btn";
            siteBtn.textContent = "Site pages";
            siteBtn.addEventListener("click", () => {
              pageHistory = [];
              if (currentDriveId) {
                loadFolder(currentDriveId, null, []);
              } else {
                showOnly(contentEl);
              }
            });
            wrapper.appendChild(back);
            wrapper.appendChild(siteBtn);
            return wrapper;
          }
          function attachPreviewDelegation() {
            if (previewDelegationAttached)
              return;
            previewDelegationAttached = true;
            previewEl.addEventListener("click", function(ev) {
              const a = ev.target.closest && ev.target.closest("a");
              if (!a)
                return;
              const href = a.getAttribute("href") || "";
              if (!href)
                return;
              let resolved;
              try {
                resolved = new URL(href, configSiteUrl);
              } catch (e) {
                return;
              }
              const path = resolved.pathname || "";
              if (/\/sitepages\/.*\.aspx$/i.test(path)) {
                ev.preventDefault();
                const seg = path.split("/").filter(Boolean).pop() || "";
                const name = decodeURIComponent(seg);
                if (currentRenderedPage)
                  pageHistory.push(currentRenderedPage);
                openSitePageByName(name);
                return;
              }
              if (!a.target)
                a.target = "_blank";
              if (!a.rel)
                a.rel = "noopener noreferrer";
            });
          }
          function previewFallbackSimple(message) {
            previewEl.innerHTML = "";
            const shell = document.createElement("div");
            shell.className = "preview-panel";
            const nav = createNavButtons();
            shell.appendChild(nav);
            const msg = document.createElement("div");
            msg.style.marginTop = "12px";
            msg.textContent = message;
            shell.appendChild(msg);
            previewEl.appendChild(shell);
            attachPreviewDelegation();
            showOnly(previewEl);
          }
          async function run() {
            renderLoading();
            titleEl.textContent = configTitle;
            footerEl.textContent = "Powered by Microsoft Graph";
            let api = null;
            const candidates = [typeof _widgetApi !== "undefined" ? _widgetApi : null, typeof window !== "undefined" ? window.widgetApi : null];
            for (let i = 0;i < candidates.length; i++) {
              const cand = candidates[i];
              if (cand && typeof cand.getIntegration === "function") {
                api = cand;
                break;
              }
            }
            if (!api) {
              renderError("Microsoft integration is not available on this page");
              return;
            }
            let info;
            try {
              info = await api.getIntegration("ms365");
            } catch (e) {
              renderError(e && e.message ? e.message : String(e));
              return;
            }
            if (!info || info.status === "loggedOut" || !info.token || !info.token.accessToken) {
              renderSignIn(info && typeof info.signIn === "function" ? info.signIn : () => {});
              return;
            }
            token = info.token.accessToken;
            let scopes = [];
            try {
              const payload = JSON.parse(atob(info.token.accessToken.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
              scopes = (payload.scp || "").split(" ").map((s) => s.trim()).filter(Boolean);
            } catch (e) {
              scopes = [];
            }
            const allowed = scopes.some((s) => ["Sites.Read.All", "Sites.ReadWrite.All", "Sites.FullControl.All"].includes(s));
            if (!allowed) {
              renderError("Microsoft consent required: Sites.Read.All");
              return;
            }
            let siteId;
            try {
              const urlObj = new URL(configSiteUrl);
              let pathname = urlObj.pathname.replace(/\/+/g, "/").replace(/\/+$/, "").trim();
              if (!pathname)
                pathname = "/";
              const host = urlObj.hostname;
              let sitePath = "/";
              if (/^\/(sites|teams)\//i.test(pathname)) {
                const parts = pathname.split("/").filter(Boolean);
                sitePath = "/" + (parts[0] || "") + "/" + (parts[1] || "");
              } else {
                sitePath = "/";
              }
              if (/\/SitePages(\/|$)/i.test(pathname)) {
                effectiveLibraryName = "Site Pages";
                const segments = pathname.split("/");
                const lastSeg = segments[segments.length - 1] || "";
                if (lastSeg.toLowerCase().endsWith(".aspx")) {
                  startPage = lastSeg;
                }
              }
              const siteEndpoint = `https://graph.microsoft.com/v1.0/sites/${host}:${sitePath}`;
              const resp = await fetch(siteEndpoint, { method: "GET", headers: { Authorization: "Bearer " + token, Accept: "application/json" } });
              if (!resp.ok) {
                const text = await resp.text();
                if (resp.status === 400 || resp.status === 404) {
                  try {
                    const rootResp = await fetch("https://graph.microsoft.com/v1.0/sites/root?$select=webUrl", { method: "GET", headers: { Authorization: "Bearer " + token, Accept: "application/json" } });
                    if (!rootResp.ok) {
                      renderError("Site lookup failed: " + resp.status + " " + text);
                      return;
                    }
                    const rootJson = await rootResp.json();
                    const tenantWeb = rootJson && rootJson.webUrl ? String(rootJson.webUrl) : "";
                    let tenantHost = "";
                    try {
                      tenantHost = tenantWeb ? new URL(tenantWeb).hostname : "";
                    } catch (e) {
                      tenantHost = "";
                    }
                    if (tenantHost && tenantHost.toLowerCase() !== host.toLowerCase()) {
                      const retryEndpoint = `https://graph.microsoft.com/v1.0/sites/${tenantHost}:${sitePath}`;
                      const retryResp = await fetch(retryEndpoint, { method: "GET", headers: { Authorization: "Bearer " + token, Accept: "application/json" } });
                      if (retryResp.ok) {
                        const retryJson = await retryResp.json();
                        siteId = retryJson.id;
                        if (!siteId)
                          throw new Error("Site id not found");
                        currentSiteId = siteId;
                      } else {
                        const retryText = await retryResp.text();
                        errorEl.innerHTML = "";
                        const shell = document.createElement("div");
                        shell.className = "preview-panel";
                        const nav = createNavButtons();
                        shell.appendChild(nav);
                        const m1 = document.createElement("div");
                        m1.style.marginTop = "12px";
                        m1.textContent = "Your Microsoft account belongs to " + tenantHost + ", but the configured site is on " + host + ". Sign in with the account for " + host + ", or change the SharePoint site URL.";
                        shell.appendChild(m1);
                        const m2 = document.createElement("div");
                        m2.style.marginTop = "8px";
                        m2.style.color = "#6b7a73";
                        m2.style.fontSize = "12px";
                        m2.textContent = retryText || text || "";
                        shell.appendChild(m2);
                        errorEl.appendChild(shell);
                        showOnly(errorEl);
                        return;
                      }
                    } else {
                      renderError("Site lookup failed: " + resp.status + " " + text);
                      return;
                    }
                  } catch (e) {
                    renderError("Site lookup failed: " + resp.status + " " + text);
                    return;
                  }
                } else {
                  throw new Error("Site lookup failed: " + resp.status + " " + text);
                }
              } else {
                const js = await resp.json();
                siteId = js.id;
                if (!siteId)
                  throw new Error("Site id not found");
                currentSiteId = siteId;
              }
            } catch (e) {
              renderError("Failed to resolve site: " + e.message);
              return;
            }
            try {
              const driveId = await fetchDriveId(token, siteId);
              if (!driveId) {
                renderEmpty("No drives found for this site.");
                return;
              }
              currentDriveId = driveId;
              if (effectiveLibraryName && String(effectiveLibraryName).toLowerCase() === "site pages" && startPage) {
                await openSitePageByName(startPage);
              } else {
                await loadFolder(driveId, null, []);
              }
            } catch (e) {
              renderError("Error fetching library or items: " + e.message);
              return;
            }
          }
          run();
        })(__CONFIG__, __ROOT__, setInterval, setTimeout);
      }
      static get observedAttributes() {
        return SCHEMA_ATTRIBUTES;
      }
    };
  }
  window.defineBlock({
    blockDefinition: {
      name: "sharepoint-site-lists",
      label: "SharePoint Site Lists",
      attributes: SCHEMA_ATTRIBUTES,
      factory,
      configurationSchema: CONFIG_SCHEMA,
      uiSchema: UI_SCHEMA,
      blockLevel: "block",
      iconUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiPjxyZWN0IHg9IjMiIHk9IjYiIHdpZHRoPSI3IiBoZWlnaHQ9IjEyIiByeD0iMS4yIi8+PHJlY3QgeD0iMTQiIHk9IjYiIHdpZHRoPSI3IiBoZWlnaHQ9IjgiIHJ4PSIxLjIiLz48cGF0aCBkPSJNNyA2VjRhMSAxIDAgMCAxIDEtMWg4Ii8+PC9zdmc+"
    },
    author: "ai-builder",
    version: "1.0.0"
  });
})();
