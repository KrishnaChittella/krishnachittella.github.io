(self.webpackChunkresume_site=self.webpackChunkresume_site||[]).push([[900],{900:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return h}});r(969);var n=r(6822),s=r(5738),i=r(4268),a=r.n(i),u=r(7574),c=function(t){var e=t.data;return(0,u.jsx)("div",{className:"cell-container",children:(0,u.jsxs)("article",{className:"mini-post",children:[(0,u.jsxs)("header",{children:[(0,u.jsx)("h3",{children:(0,u.jsx)("a",{href:e.link,children:e.title})}),(0,u.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,u.jsx)("a",{href:e.link,className:"image",children:(0,u.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,u.jsx)("div",{className:"description",children:(0,u.jsx)("p",{children:e.desc})})]})})},o=[{title:"Stock Market Prediction",subtitle:"2022 Bachelor's project",image:"/images/projects/stock market.jpg",date:"2022-03-29",desc:"Built to analyze and give support to the investors of the stock market."}],h=function(){return(0,u.jsx)(s.Z,{title:"Projects",description:"Learn about Krishna Chittella's projects.",children:(0,u.jsxs)("article",{className:"post",id:"projects",children:[(0,u.jsx)("header",{children:(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)("h2",{children:(0,u.jsx)(n.rU,{to:"/projects",children:"Projects"})}),(0,u.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),o.map((function(t){return(0,u.jsx)(c,{data:t},t.title)}))]})})}},4268:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",s="second",i="minute",a="hour",u="day",c="week",o="month",h="quarter",f="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},M=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},v={s:M,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+M(n,2,"0")+":"+M(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,o),i=r-s<0,a=e.clone().add(n+(i?-1:1),o);return+(-(n+(r-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:f,w:c,d:u,D:d,h:a,m:i,s:s,ms:n,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",y={};y[g]=p;var D=function(t){return t instanceof k},S=function t(e,r,n){var s;if(!e)return g;if("string"==typeof e){var i=e.toLowerCase();y[i]&&(s=i),r&&(y[i]=r,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;y[u]=e,s=u}return!n&&s&&(g=s),s||!n&&g},j=function(t,e){if(D(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new k(r)},w=v;w.l=S,w.i=D,w.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function p(t){this.$L=S(t.locale,null,!0),this.parse(t)}var M=p.prototype;return M.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match($);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},M.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},M.$utils=function(){return w},M.isValid=function(){return!(this.$d.toString()===l)},M.isSame=function(t,e){var r=j(t);return this.startOf(e)<=r&&r<=this.endOf(e)},M.isAfter=function(t,e){return j(t)<this.startOf(e)},M.isBefore=function(t,e){return this.endOf(e)<j(t)},M.$g=function(t,e,r){return w.u(t)?this[e]:this.set(r,t)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(t,e){var r=this,n=!!w.u(e)||e,h=w.p(t),l=function(t,e){var s=w.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?s:s.endOf(u)},$=function(t,e){return w.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,p=this.$M,M=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case f:return n?l(1,0):l(31,11);case o:return n?l(1,p):l(0,p+1);case c:var g=this.$locale().weekStart||0,y=(m<g?m+7:m)-g;return l(n?M-y:M+(6-y),p);case u:case d:return $(v+"Hours",0);case a:return $(v+"Minutes",1);case i:return $(v+"Seconds",2);case s:return $(v+"Milliseconds",3);default:return this.clone()}},M.endOf=function(t){return this.startOf(t,!1)},M.$set=function(t,e){var r,c=w.p(t),h="set"+(this.$u?"UTC":""),l=(r={},r[u]=h+"Date",r[d]=h+"Date",r[o]=h+"Month",r[f]=h+"FullYear",r[a]=h+"Hours",r[i]=h+"Minutes",r[s]=h+"Seconds",r[n]=h+"Milliseconds",r)[c],$=c===u?this.$D+(e-this.$W):e;if(c===o||c===f){var m=this.clone().set(d,1);m.$d[l]($),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},M.set=function(t,e){return this.clone().$set(t,e)},M.get=function(t){return this[w.p(t)]()},M.add=function(n,h){var d,l=this;n=Number(n);var $=w.p(h),m=function(t){var e=j(l);return w.w(e.date(e.date()+Math.round(t*n)),l)};if($===o)return this.set(o,this.$M+n);if($===f)return this.set(f,this.$y+n);if($===u)return m(1);if($===c)return m(7);var p=(d={},d[i]=e,d[a]=r,d[s]=t,d)[$]||1,M=this.$d.getTime()+n*p;return w.w(M,this)},M.subtract=function(t,e){return this.add(-1*t,e)},M.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||l;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),i=this.$H,a=this.$m,u=this.$M,c=r.weekdays,o=r.months,h=r.meridiem,f=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].slice(0,i)},d=function(t){return w.s(i%12||12,t,"0")},$=h||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return u+1;case"MM":return w.s(u+1,2,"0");case"MMM":return f(r.monthsShort,u,o,3);case"MMMM":return f(o,u);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(r.weekdaysMin,e.$W,c,2);case"ddd":return f(r.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(i);case"HH":return w.s(i,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(i,a,!0);case"A":return $(i,a,!1);case"m":return String(a);case"mm":return w.s(a,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(n,d,l){var $,m=this,p=w.p(d),M=j(n),v=(M.utcOffset()-this.utcOffset())*e,g=this-M,y=function(){return w.m(m,M)};switch(p){case f:$=y()/12;break;case o:$=y();break;case h:$=y()/3;break;case c:$=(g-v)/6048e5;break;case u:$=(g-v)/864e5;break;case a:$=g/r;break;case i:$=g/e;break;case s:$=g/t;break;default:$=g}return l?$:w.a($)},M.daysInMonth=function(){return this.endOf(o).$D},M.$locale=function(){return y[this.$L]},M.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=S(t,e,!0);return n&&(r.$L=n),r},M.clone=function(){return w.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},p}(),x=k.prototype;return j.prototype=x,[["$ms",n],["$s",s],["$m",i],["$H",a],["$W",u],["$M",o],["$y",f],["$D",d]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,k,j),t.$i=!0),j},j.locale=S,j.isDayjs=D,j.unix=function(t){return j(1e3*t)},j.en=y[g],j.Ls=y,j.p={},j}()}}]);
//# sourceMappingURL=900.3daea5d0.chunk.js.map