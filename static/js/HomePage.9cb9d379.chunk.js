"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[460],{8562:function(n,t,e){e.r(t);var r=e(2982),a=e(5861),c=e(885),u=e(7757),o=e.n(u),i=e(9271),s=e(1523),f=e(2791),p=e(9545),l=e(5984),d=e(184),h=(0,f.lazy)((function(){return Promise.all([e.e(15),e.e(716),e.e(971)]).then(e.bind(e,474))}));t.default=function(){var n=(0,f.useState)(null),t=(0,c.Z)(n,2),e=t[0],u=t[1],v=(0,i.$B)(),m=v.url,x=v.path,y=(0,i.TH)();return(0,f.useEffect)((function(){(0,a.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Df();case 3:t=n.sent,e=t.results,u((0,r.Z)(e)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{children:"Trending today"}),e&&(0,d.jsx)("ul",{children:e.map((function(n){return(0,d.jsx)("li",{children:(0,d.jsx)(s.rU,{to:{pathname:"".concat(m,"movies/").concat(n.id),state:{from:y}},children:n.name?n.name:n.title})},(0,l.x0)())}))}),(0,d.jsx)("hr",{}),(0,d.jsx)(f.Suspense,{fallback:(0,d.jsx)("h1",{children:"Loading..."}),children:(0,d.jsx)(i.AW,{path:"".concat(x,"/:movieId"),children:e&&(0,d.jsx)(h,{movies:e})})})]})}},9545:function(n,t,e){e.d(t,{Df:function(){return h},S3:function(){return x},V0:function(){return y},lg:function(){return m},yK:function(){return v}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),o=e.n(u);o().defaults.baseURL="https://api.themoviedb.org/3";var i="99164fc3e2a8208f1f5e9fb36b0f2eb5",s="trending/all/day",f="search/movie",p="movie/",l="/reviews",d="/credits",h=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/".concat(s,"?api_key=").concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/".concat(p).concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/".concat(p).concat(t).concat(l,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/".concat(p).concat(t).concat(d,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),y=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/".concat(f,"?api_key=").concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},2982:function(n,t,e){e.d(t,{Z:function(){return c}});var r=e(907);var a=e(181);function c(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,a.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=HomePage.9cb9d379.chunk.js.map