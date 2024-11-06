/*! For license information please see 9635.Gg7ajXBMKn4.js.LICENSE.txt */
export const id=9635;export const ids=[6920,9635];export const modules={46875:(t,e,i)=>{i.d(e,{a:()=>n});var s=i(9883),a=i(213);function n(t,e){const i=(0,a.m)(t.entity_id),n=void 0!==e?e:t?.state;if(["button","event","input_button","scene"].includes(i))return n!==s.Hh;if((0,s.g0)(n))return!1;if(n===s.KF&&"alert"!==i)return!1;switch(i){case"alarm_control_panel":return"disarmed"!==n;case"alert":return"idle"!==n;case"cover":case"valve":return"closed"!==n;case"device_tracker":case"person":return"not_home"!==n;case"lawn_mower":return["mowing","error"].includes(n);case"lock":return"locked"!==n;case"media_player":return"standby"!==n;case"vacuum":return!["idle","docked","paused"].includes(n);case"plant":return"problem"===n;case"group":return["on","home","open","locked","problem"].includes(n);case"timer":return"active"===n;case"camera":return"streaming"===n}return!0}},28346:(t,e,i)=>{i.a(t,(async(t,e)=>{try{var s=i(36312),a=(i(89655),i(253),i(2075),i(54846),i(67056),i(50289)),n=i(29818),r=i(94100),d=i(21863),c=i(34897),l=i(2682),o=i(4826),u=i(84976),h=(i(43536),i(88400),i(12675)),p=i(55792),v=t([h]);h=(v.then?(await v)():v)[0];(0,s.A)([(0,n.EM)("ha-statistic-picker")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"statistic-types"})],key:"statisticTypes",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Array})],key:"statisticIds",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Array,attribute:"include-statistics-unit-of-measurement"})],key:"includeStatisticsUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"include-unit-class"})],key:"includeUnitClass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"include-device-class"})],key:"includeDeviceClass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean,attribute:"entities-only"})],key:"entitiesOnly",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Array,attribute:"exclude-statistics"})],key:"excludeStatistics",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"helpMissingEntityUrl",value:()=>"/more-info/statistics/"},{kind:"field",decorators:[(0,n.wk)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,n.P)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"field",key:"_statistics",value:()=>[]},{kind:"field",decorators:[(0,n.wk)()],key:"_filteredItems",value(){}},{kind:"field",key:"_rowRenderer",value(){return t=>a.qy`<mwc-list-item graphic="avatar" twoline> ${t.state?a.qy`<state-badge slot="graphic" .stateObj="${t.state}" .hass="${this.hass}"></state-badge>`:""} <span>${t.name}</span> <span slot="secondary">${""===t.id||"__missing"===t.id?a.qy`<a target="_blank" rel="noopener noreferrer" href="${(0,u.o)(this.hass,this.helpMissingEntityUrl)}">${this.hass.localize("ui.components.statistic-picker.learn_more")}</a>`:t.id}</span> </mwc-list-item>`}},{kind:"field",key:"_getStatistics",value(){return(0,r.A)(((t,e,i,s,a,n,r)=>{if(!t.length)return[{id:"",name:this.hass.localize("ui.components.statistic-picker.no_statistics"),strings:[]}];if(e){const i=(0,d.e)(e);t=t.filter((t=>i.includes(t.statistics_unit_of_measurement)))}if(i){const e=(0,d.e)(i);t=t.filter((t=>e.includes(t.unit_class)))}if(s){const e=(0,d.e)(s);t=t.filter((t=>{const i=this.hass.states[t.statistic_id];return!i||e.includes(i.attributes.device_class||"")}))}const c=[];return t.forEach((t=>{if(n&&t.statistic_id!==r&&n.includes(t.statistic_id))return;const e=this.hass.states[t.statistic_id];if(!e){if(!a){const e=t.statistic_id,i=(0,o.$O)(this.hass,t.statistic_id,t);c.push({id:e,name:i,strings:[e,i]})}return}const i=t.statistic_id,s=(0,o.$O)(this.hass,t.statistic_id,t);c.push({id:i,name:s,state:e,strings:[i,s]})})),c.length?(c.length>1&&c.sort(((t,e)=>(0,l.x)(t.name||"",e.name||"",this.hass.locale.language))),c.push({id:"__missing",name:this.hass.localize("ui.components.statistic-picker.missing_entity"),strings:[]}),c):[{id:"",name:this.hass.localize("ui.components.statistic-picker.no_match"),strings:[]}]}))}},{kind:"method",key:"open",value:function(){this.comboBox?.open()}},{kind:"method",key:"focus",value:function(){this.comboBox?.focus()}},{kind:"method",key:"willUpdate",value:function(t){(!this.hasUpdated&&!this.statisticIds||t.has("statisticTypes"))&&this._getStatisticIds(),(!this._init&&this.statisticIds||t.has("_opened")&&this._opened)&&(this._init=!0,this.hasUpdated?this._statistics=this._getStatistics(this.statisticIds,this.includeStatisticsUnitOfMeasurement,this.includeUnitClass,this.includeDeviceClass,this.entitiesOnly,this.excludeStatistics,this.value):this.updateComplete.then((()=>{this._statistics=this._getStatistics(this.statisticIds,this.includeStatisticsUnitOfMeasurement,this.includeUnitClass,this.includeDeviceClass,this.entitiesOnly,this.excludeStatistics,this.value)})))}},{kind:"method",key:"render",value:function(){return 0===this._statistics.length?a.s6:a.qy` <ha-combo-box .hass="${this.hass}" .label="${void 0===this.label&&this.hass?this.hass.localize("ui.components.statistic-picker.statistic"):this.label}" .value="${this._value}" .renderer="${this._rowRenderer}" .disabled="${this.disabled}" .allowCustomValue="${this.allowCustomEntity}" .items="${this._statistics}" .filteredItems="${this._filteredItems??this._statistics}" item-value-path="id" item-id-path="id" item-label-path="name" @opened-changed="${this._openedChanged}" @value-changed="${this._statisticChanged}" @filter-changed="${this._filterChanged}"></ha-combo-box> `}},{kind:"method",key:"_getStatisticIds",value:async function(){this.statisticIds=await(0,o.p3)(this.hass,this.statisticTypes)}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_statisticChanged",value:function(t){t.stopPropagation();let e=t.detail.value;"__missing"===e&&(e=""),e!==this._value&&this._setValue(e)}},{kind:"method",key:"_openedChanged",value:function(t){this._opened=t.detail.value}},{kind:"method",key:"_filterChanged",value:function(t){const e=t.detail.value.toLowerCase();this._filteredItems=e.length?(0,p.H)(e,this._statistics):void 0}},{kind:"method",key:"_setValue",value:function(t){this.value=t,setTimeout((()=>{(0,c.r)(this,"value-changed",{value:t}),(0,c.r)(this,"change")}),0)}}]}}),a.WF);e()}catch(t){e(t)}}))},67184:(t,e,i)=>{i.a(t,(async(t,e)=>{try{var s=i(36312),a=(i(253),i(2075),i(16891),i(50289)),n=i(29818),r=i(66066),d=i(34897),c=i(28346),l=t([c]);c=(l.then?(await l)():l)[0];(0,s.A)([(0,n.EM)("ha-statistics-picker")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Array})],key:"statisticIds",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"statistic-types"})],key:"statisticTypes",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"picked-statistic-label"})],key:"pickedStatisticLabel",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"pick-statistic-label"})],key:"pickStatisticLabel",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"include-statistics-unit-of-measurement"})],key:"includeStatisticsUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"include-unit-class"})],key:"includeUnitClass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"include-device-class"})],key:"includeDeviceClass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean,attribute:"ignore-restrictions-on-first-statistic"})],key:"ignoreRestrictionsOnFirstStatistic",value:()=>!1},{kind:"method",key:"render",value:function(){if(!this.hass)return a.s6;const t=this.ignoreRestrictionsOnFirstStatistic&&this._currentStatistics.length<=1,e=t?void 0:this.includeStatisticsUnitOfMeasurement,i=t?void 0:this.includeUnitClass,s=t?void 0:this.includeDeviceClass,n=t?void 0:this.statisticTypes;return a.qy` ${(0,r.u)(this._currentStatistics,(t=>t),(t=>a.qy` <div> <ha-statistic-picker .curValue="${t}" .hass="${this.hass}" .includeStatisticsUnitOfMeasurement="${e}" .includeUnitClass="${i}" .includeDeviceClass="${s}" .value="${t}" .statisticTypes="${n}" .statisticIds="${this.statisticIds}" .label="${this.pickedStatisticLabel}" .excludeStatistics="${this.value}" .allowCustomEntity="${this.allowCustomEntity}" @value-changed="${this._statisticChanged}"></ha-statistic-picker> </div> `))} <div> <ha-statistic-picker .hass="${this.hass}" .includeStatisticsUnitOfMeasurement="${this.includeStatisticsUnitOfMeasurement}" .includeUnitClass="${this.includeUnitClass}" .includeDeviceClass="${this.includeDeviceClass}" .statisticTypes="${this.statisticTypes}" .statisticIds="${this.statisticIds}" .label="${this.pickStatisticLabel}" .excludeStatistics="${this.value}" .allowCustomEntity="${this.allowCustomEntity}" @value-changed="${this._addStatistic}"></ha-statistic-picker> </div> `}},{kind:"get",key:"_currentStatistics",value:function(){return this.value||[]}},{kind:"method",key:"_updateStatistics",value:async function(t){this.value=t,(0,d.r)(this,"value-changed",{value:t})}},{kind:"method",key:"_statisticChanged",value:function(t){t.stopPropagation();const e=t.currentTarget.curValue,i=t.detail.value;if(i===e)return;const s=this._currentStatistics;i&&!s.includes(i)?this._updateStatistics(s.map((t=>t===e?i:t))):this._updateStatistics(s.filter((t=>t!==e)))}},{kind:"method",key:"_addStatistic",value:async function(t){t.stopPropagation();const e=t.detail.value;if(!e)return;if(t.currentTarget.value="",!e)return;const i=this._currentStatistics;i.includes(e)||this._updateStatistics([...i,e])}},{kind:"get",static:!0,key:"styles",value:function(){return a.AH`:host{width:200px;display:block}ha-statistic-picker{display:block;width:100%;margin-top:8px}`}}]}}),a.WF);e()}catch(t){e(t)}}))},13830:(t,e,i)=>{var s=i(36312),a=i(68689),n=i(30116),r=i(43389),d=i(50289),c=i(29818);(0,s.A)([(0,c.EM)("ha-list-item")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,a.A)(i,"renderRipple",this,3)([])}},{kind:"get",static:!0,key:"styles",value:function(){return[r.R,d.AH`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`,"rtl"===document.dir?d.AH`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`:d.AH``]}}]}}),n.J)},65938:(t,e,i)=>{i.a(t,(async(t,s)=>{try{i.r(e),i.d(e,{HaStatisticSelector:()=>l});var a=i(36312),n=i(50289),r=i(29818),d=i(67184),c=t([d]);d=(c.then?(await c)():c)[0];let l=(0,a.A)([(0,r.EM)("ha-selector-statistic")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return this.selector.statistic.multiple?n.qy` ${this.label?n.qy`<label>${this.label}</label>`:""} <ha-statistics-picker .hass="${this.hass}" .value="${this.value}" .helper="${this.helper}" .disabled="${this.disabled}" .required="${this.required}"></ha-statistics-picker> `:n.qy`<ha-statistic-picker .hass="${this.hass}" .value="${this.value}" .label="${this.label}" .helper="${this.helper}" .disabled="${this.disabled}" .required="${this.required}" allow-custom-entity></ha-statistic-picker>`}}]}}),n.WF);s()}catch(t){s(t)}}))},94526:(t,e,i)=>{i.d(e,{Hg:()=>s,e0:()=>a});i(16891);const s=t=>t.map((t=>{if("string"!==t.type)return t;switch(t.name){case"username":return{...t,autocomplete:"username"};case"password":return{...t,autocomplete:"current-password"};case"code":return{...t,autocomplete:"one-time-code"};default:return t}})),a=(t,e)=>t.callWS({type:"auth/sign_path",path:e})},9883:(t,e,i)=>{i.d(e,{HV:()=>n,Hh:()=>a,KF:()=>d,ON:()=>r,g0:()=>o,s7:()=>c});var s=i(99890);const a="unavailable",n="unknown",r="on",d="off",c=[a,n],l=[a,n,d],o=(0,s.g)(c);(0,s.g)(l)},4826:(t,e,i)=>{i.d(e,{$O:()=>n,p3:()=>a});i(253),i(4525);var s=i(19244);const a=(t,e)=>t.callWS({type:"recorder/list_statistic_ids",statistic_type:e}),n=(t,e,i)=>{const a=t.states[e];return a?(0,s.u)(a):i?.name||e}},84976:(t,e,i)=>{i.d(e,{o:()=>s});const s=(t,e)=>`https://${t.config.version.includes("b")?"rc":t.config.version.includes("dev")?"next":"www"}.home-assistant.io${e}`},66066:(t,e,i)=>{i.d(e,{u:()=>d});var s=i(2501),a=i(68063),n=i(32559);const r=(t,e,i)=>{const s=new Map;for(let a=e;a<=i;a++)s.set(t[a],a);return s},d=(0,a.u$)(class extends a.WL{constructor(t){if(super(t),t.type!==a.OA.CHILD)throw Error("repeat() can only be used in text expressions")}ct(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const a=[],n=[];let r=0;for(const e of t)a[r]=s?s(e,r):r,n[r]=i(e,r),r++;return{values:n,keys:a}}render(t,e,i){return this.ct(t,e,i).values}update(t,[e,i,a]){var d;const c=(0,n.cN)(t),{values:l,keys:o}=this.ct(e,i,a);if(!Array.isArray(c))return this.ut=o,l;const u=null!==(d=this.ut)&&void 0!==d?d:this.ut=[],h=[];let p,v,m=0,y=c.length-1,f=0,k=l.length-1;for(;m<=y&&f<=k;)if(null===c[m])m++;else if(null===c[y])y--;else if(u[m]===o[f])h[f]=(0,n.lx)(c[m],l[f]),m++,f++;else if(u[y]===o[k])h[k]=(0,n.lx)(c[y],l[k]),y--,k--;else if(u[m]===o[k])h[k]=(0,n.lx)(c[m],l[k]),(0,n.Dx)(t,h[k+1],c[m]),m++,k--;else if(u[y]===o[f])h[f]=(0,n.lx)(c[y],l[f]),(0,n.Dx)(t,c[m],c[y]),y--,f++;else if(void 0===p&&(p=r(o,f,k),v=r(u,m,y)),p.has(u[m]))if(p.has(u[y])){const e=v.get(o[f]),i=void 0!==e?c[e]:null;if(null===i){const e=(0,n.Dx)(t,c[m]);(0,n.lx)(e,l[f]),h[f]=e}else h[f]=(0,n.lx)(i,l[f]),(0,n.Dx)(t,c[m],i),c[e]=null;f++}else(0,n.KO)(c[y]),y--;else(0,n.KO)(c[m]),m++;for(;f<=k;){const e=(0,n.Dx)(t,h[k+1]);(0,n.lx)(e,l[f]),h[f++]=e}for(;m<=y;){const t=c[m++];null!==t&&(0,n.KO)(t)}return this.ut=o,(0,n.mY)(t,h),s.c0}})},10296:(t,e,i)=>{i.d(e,{T:()=>h});i(253),i(94438);var s=i(2501),a=i(32559),n=i(62774);class r{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class d{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.Z=t)))}resume(){var t;null===(t=this.Z)||void 0===t||t.call(this),this.Y=this.Z=void 0}}var c=i(68063);const l=t=>!(0,a.sO)(t)&&"function"==typeof t.then,o=1073741823;class u extends n.Kq{constructor(){super(...arguments),this._$C_t=o,this._$Cwt=[],this._$Cq=new r(this),this._$CK=new d}render(...t){var e;return null!==(e=t.find((t=>!l(t))))&&void 0!==e?e:s.c0}update(t,e){const i=this._$Cwt;let a=i.length;this._$Cwt=e;const n=this._$Cq,r=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$C_t);t++){const s=e[t];if(!l(s))return this._$C_t=t,s;t<a&&s===i[t]||(this._$C_t=o,a=0,Promise.resolve(s).then((async t=>{for(;r.get();)await r.get();const e=n.deref();if(void 0!==e){const i=e._$Cwt.indexOf(s);i>-1&&i<e._$C_t&&(e._$C_t=i,e.setValue(t))}})))}return s.c0}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const h=(0,c.u$)(u)}};
//# sourceMappingURL=9635.Gg7ajXBMKn4.js.map