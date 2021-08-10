var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function d(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let p;function h(t){p=t}const m=[],$=[],g=[],y=[],v=Promise.resolve();let b=!1;function _(t){g.push(t)}let x=!1;const w=new Set;function k(){if(!x){x=!0;do{for(let t=0;t<m.length;t+=1){const e=m[t];h(e),E(e.$$)}for(h(null),m.length=0;$.length;)$.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];w.has(e)||(w.add(e),e())}g.length=0}while(m.length);for(;y.length;)y.pop()();b=!1,x=!1,w.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const A=new Set;function N(t,e){-1===t.$$.dirty[0]&&(m.push(t),b||(b=!0,v.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(l,c,s,i,a,f,d,m=[-1]){const $=p;h(l);const g=l.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map($?$.$$.context:c.context||[]),callbacks:n(),dirty:m,skip_bound:!1,root:c.target||$.$$.root};d&&d(g.root);let y=!1;if(g.ctx=s?s(l,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&a(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),y&&N(l,t)),e})):[],g.update(),y=!0,o(g.before_update),g.fragment=!!i&&i(g.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();c.intro&&((v=l.$$.fragment)&&v.i&&(A.delete(v),v.i(b))),function(t,n,l,c){const{fragment:s,on_mount:u,on_destroy:i,after_update:a}=t.$$;s&&s.m(n,l),c||_((()=>{const n=u.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(_)}(l,c.target,c.anchor,c.customElement),k()}var v,b;h($)}function j(t){let e,n;return{c(){e=i("div"),n=a(t[0]),f(e,"class","black-flap svelte-2hl6hy")},m(t,o){s(t,e,o),c(e,n)},p(t,e){1&e&&d(n,t[0])},d(t){t&&u(e)}}}function C(t){let e,n;return{c(){e=i("div"),n=a(t[0]),f(e,"class","white-flap svelte-2hl6hy")},m(t,o){s(t,e,o),c(e,n)},p(t,e){1&e&&d(n,t[0])},d(t){t&&u(e)}}}function S(t){let e,n;return{c(){e=i("div"),n=a(t[0]),f(e,"class","orange-flap svelte-2hl6hy")},m(t,o){s(t,e,o),c(e,n)},p(t,e){1&e&&d(n,t[0])},d(t){t&&u(e)}}}function T(t){let e,n;return{c(){e=i("div"),n=a(t[0]),f(e,"class","green-flap svelte-2hl6hy")},m(t,o){s(t,e,o),c(e,n)},p(t,e){1&e&&d(n,t[0])},d(t){t&&u(e)}}}function B(t){let e,n;return{c(){e=i("div"),n=a(t[0]),f(e,"class","red-flap svelte-2hl6hy")},m(t,o){s(t,e,o),c(e,n)},p(t,e){1&e&&d(n,t[0])},d(t){t&&u(e)}}}function I(t){let e,n;return{c(){e=i("div"),n=a(t[0]),f(e,"class","yellow-flap svelte-2hl6hy")},m(t,o){s(t,e,o),c(e,n)},p(t,e){1&e&&d(n,t[0])},d(t){t&&u(e)}}}function M(e){let n,o,r;function l(t,e){return"yellow"===t[0]?I:"red"===t[0]?B:"green"===t[0]?T:"orange"===t[0]?S:"white"===t[0]?C:j}let a=l(e),d=a(e);return{c(){n=i("main"),o=i("div"),r=i("div"),d.c(),f(r,"class","split-flap-container svelte-2hl6hy"),f(o,"class","split-flap-box svelte-2hl6hy"),f(n,"class","svelte-2hl6hy")},m(t,e){s(t,n,e),c(n,o),c(o,r),d.m(r,null)},p(t,[e]){a===(a=l(t))&&d?d.p(t,e):(d.d(1),d=a(t),d&&(d.c(),d.m(r,null)))},i:t,o:t,d(t){t&&u(n),d.d()}}}function P(t,e,n){const o=["","J","B","M","R","$","V","K","A","E","N","O","*","G","I","%","D","L","&","@","C","W","H","Y","Q","!","T","Z","P","F","?","S","#","U","X"];console.log(o),o.splice(6,0,"yellow"),o.splice(13,0,"orange"),o.splice(20,0,"green"),o.splice(27,0,"red"),o.splice(34,0,"white");let r=0,l=o[0];return setInterval((function(){39===r&&(r=0);n(0,l=o[r]),r++}),300),[l]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),O(this,t,P,M,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
