var t,e,n;window.Station=window.Station||{},window.Station.Apps=window.Station.Apps||{},"scrollBehavior"in document.documentElement.style||((n=document.createElement("script")).src="https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@1.0.0/dist/es5/seamless.auto-polyfill.min.js",n.setAttribute("data-seamless",""),document.head.appendChild(n)),window.Station.Apps.Tabs,Station.debug=function(t){var e=t||{},o={tests:0,errors:0,warnings:0,passed:0},n="string"==typeof e.group?Station.debugTests.filter(function(t){return t.group===e.group}):Station.debugTests;function s(){console.log(o)}return setTimeout(function(){!function a(i){var t=n[i];if(!t)return s();t.fn(function(t){o.tests++;var e=Array.prototype.slice.call(arguments);if(e.unshift("["+(this.group||"General")+"] "+this.name+":"),!1!==t)console.log.apply(null,e),o.passed++;else{var n=this.warning?"warn":"error";if(this.failureMessage?console[n]("["+(this.group||"General")+"] "+this.failureMessage):console[n].apply(null,e),o[this.warning?"warnings":"errors"]++,this.interrupt)return s()}a(i+1)})}(0)}),e.group?"Running tests for "+e.group:"Running all tests"},Station.debugTests=(e="Tabs",(n=Station.debugTests||[]).find(function(t){return t.group===e})?n:(t=[{name:"At least one data attribute in the DOM",fn:function(t){var e=document.querySelectorAll("[data-station-tabs-app]")||[];console.log("[Tabs] Number of tabs data attributes on this page:",e.length),t.call(this,0<e.length)}},{name:"Main script is in the DOM",interrupt:!0,failureMessage:"Main script is not in the DOM. Tabs may not be enabled in this theme.",fn:function(t){t.call(this,"object"==typeof Station.Apps.Tabs)}},{name:'Current template is "product"',warning:!0,fn:function(t){t.call(this,"product"===Station.Apps.Tabs.template)}},{name:"All instances initialized",fn:function(t){var e=document.querySelectorAll("[data-station-tabs-app]:not(.is-initialized)");t.call(this,0===(e||[]).length)}},{name:"Current layout",warning:!0,fn:function(t){var e=(e=Station.Apps.Tabs.settings).force_breakpoint?"Breakpoint - "+e.force_breakpoint_value+"px":e.force_full?"Always vertical":e.force_wrap?"Always horizontal":"Automatic";t.call(this,e)}},{name:"Description tab title",fn:function(t){var e=Station.Apps.Tabs.settings;if(e.product_description_tab)return t.call(this,e.product_description_tab_title);t.call(this,"Description tab turned off")}},{name:"Autosplit heading present in the root of the product description",warning:!0,fn:function(r){var l=this,c=Station.Apps.Tabs;if(!c.productHandle)return r.call(this,"No product handle available");var t=[window.location.origin,"/products/",c.productHandle,".json"].join("");window.fetch(t).then(function(t){return t.json()}).then(function(t){for(var e=document.createElement("div"),n=c.settings,a=(e.innerHTML=t.product.body_html,{}),i=1;i<=6;i++){var o=e.querySelectorAll("h"+i);0<o.length&&(a["h"+i]=o.length)}if(!n.product_autosplit)return r.call(l,"Autosplit not turned on");var t=n.product_autosplit_heading,n=e.querySelectorAll(":scope > "+t)||[],s=a[t]-n.length;console.log("[Tabs] Current autosplit heading:",t),s.length&&console.warn("[Tabs] There are nested "+t+"s:",s),console.log("[Tabs] Headings in the product description:",a),r.call(l,0<n.length)}).catch(function(){r.call(l,"Fetch error")})}},{name:"Cleaning level set to medium or high",warning:!0,fn:function(t){var e=Station.Apps.Tabs.settings.clean_content_level;t.call(this,-1!==["basic_tags","all_tags"].indexOf(e),e)}},{name:"Autosplit and stop tabs using different headings",fn:function(t){var e=!(e=Station.Apps.Tabs.settings).autostop_enabled||!e.product_autosplit||e.product_autosplit_heading!==e.autostop_heading;t.call(this,e)}},{name:"ProTabs for this product",fn:function(i){var o=this,t=Station.Apps.Tabs;console.log("[Tabs] Total number of active ProTabs:",t.order.length),t.productHandle?t.fetchDataByProduct(t.productHandle,function(t){for(var e=t.querySelectorAll(".station-tabs-link"),n=[],a=0;a<e.length;a++)n.push(e[a].innerText);i.call(o,n)}):i.call(this,"No product handle available")}},{name:"Custom script",warning:!0,failureMessage:"Page is using the custom script panel",fn:function(t){t.call(this,!Station.Apps.Tabs.hasCustomScript&&"No custom script")}},{name:"PageFly check",failureMessage:"Template is generated by PageFly",fn:function(t){t.call(this,!window.__pagefly_setting__&&"Not a PageFly template")}},{name:"GemPages check",failureMessage:"Template is generated by GemPages",fn:function(t){var e=document.querySelector("script.gf-script");t.call(this,!e&&"Not a GemPage template")}},{name:"Flow theme check",failureMessage:"May be using Flow theme",warning:!0,fn:function(t){var e=Shopify.theme||{},e=801===e.theme_store_id||e.name.indexOf("Flow");t.call(this,!!e&&"Likely not using the Flow theme")}}].map(function(t){return t.group=e,t}),n.concat(t)));