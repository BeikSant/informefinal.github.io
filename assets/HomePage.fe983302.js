import{c as Ze,a as F,n as et,l as tt,b as $,p as oe,d as Ce,s as ie,e as ve,f as ne,g as at,h as Le,i as E,r as q,j as y,w as C,o as rt,k as _e,m as ot,q as it,t as I,u as qe,v as Te,x as Me,y as Ee,z as Ae,A as nt,B as st,_ as lt,C as ut,D as dt,E as T,F as K,G as f,S as ct,H as ft,I as xe,J as vt,K as l,Q as R,L as D,M as se,N,O as U,P as ke,R as mt,T as ht,U as le}from"./index.f77abd2b.js";import{Q as pt,a as yt,b as wt,c as bt}from"./QLayout.e115816d.js";import{c as gt,u as Ct,a as _t,b as qt,d as xt,e as kt,f as X,g as Dt,Q as Pt,h as De,i as ue,j as M,k as j,l as St,m as Pe}from"./QDialog.eb5986ff.js";import{u as Qt,a as Bt,b as Ot,Q as de,c as Lt}from"./QCard.cba0760b.js";import{g as Se,s as Qe}from"./touch.70a9dd44.js";import{Q as Tt,a as Be}from"./QForm.f6f09dea.js";import{Q as Mt}from"./QCardActions.ab5a597e.js";import{d as Et}from"./docente.1b21368a.js";import{_ as At}from"./favicon-512x512.d37da2ad.js";import"./QResizeObserver.ef169933.js";function ce(t,o,u){const s=ve(t);let e,a=s.left-o.event.x,d=s.top-o.event.y,n=Math.abs(a),p=Math.abs(d);const v=o.direction;v.horizontal===!0&&v.vertical!==!0?e=a<0?"left":"right":v.horizontal!==!0&&v.vertical===!0?e=d<0?"up":"down":v.up===!0&&d<0?(e="up",n>p&&(v.left===!0&&a<0?e="left":v.right===!0&&a>0&&(e="right"))):v.down===!0&&d>0?(e="down",n>p&&(v.left===!0&&a<0?e="left":v.right===!0&&a>0&&(e="right"))):v.left===!0&&a<0?(e="left",n<p&&(v.up===!0&&d<0?e="up":v.down===!0&&d>0&&(e="down"))):v.right===!0&&a>0&&(e="right",n<p&&(v.up===!0&&d<0?e="up":v.down===!0&&d>0&&(e="down")));let i=!1;if(e===void 0&&u===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};e=o.event.lastDir,i=!0,e==="left"||e==="right"?(s.left-=a,n=0,a=0):(s.top-=d,p=0,d=0)}return{synthetic:i,payload:{evt:t,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:s,direction:e,isFirst:o.event.isFirst,isFinal:u===!0,duration:Date.now()-o.event.time,distance:{x:n,y:p},offset:{x:a,y:d},delta:{x:s.left-o.event.lastX,y:s.top-o.event.lastY}}}}let Vt=0;var fe=Ze({name:"touch-pan",beforeMount(t,{value:o,modifiers:u}){if(u.mouse!==!0&&F.has.touch!==!0)return;function s(a,d){u.mouse===!0&&d===!0?at(a):(u.stop===!0&&ie(a),u.prevent===!0&&Ce(a))}const e={uid:"qvtp_"+Vt++,handler:o,modifiers:u,direction:Se(u),noop:et,mouseStart(a){Qe(a,e)&&tt(a)&&($(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(a,!0))},touchStart(a){if(Qe(a,e)){const d=a.target;$(e,"temp",[[d,"touchmove","move","notPassiveCapture"],[d,"touchcancel","end","passiveCapture"],[d,"touchend","end","passiveCapture"]]),e.start(a)}},start(a,d){if(F.is.firefox===!0&&oe(t,!0),e.lastEvt=a,d===!0||u.stop===!0){if(e.direction.all!==!0&&(d!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const v=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Ce(v),a.cancelBubble===!0&&ie(v),Object.assign(v,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[e.uid]:a.qClonedBy.concat(e.uid)}),e.initialEvent={target:a.target,event:v}}ie(a)}const{left:n,top:p}=ve(a);e.event={x:n,y:p,time:Date.now(),mouse:d===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:n,lastY:p}},move(a){if(e.event===void 0)return;const d=ve(a),n=d.left-e.event.x,p=d.top-e.event.y;if(n===0&&p===0)return;e.lastEvt=a;const v=e.event.mouse===!0,i=()=>{s(a,v);let b;u.preserveCursor!==!0&&u.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),v===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),gt(),e.styleCleanup=h=>{if(e.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),v===!0){const S=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{S(),h()},50):S()}else h!==void 0&&h()}};if(e.event.detected===!0){e.event.isFirst!==!0&&s(a,e.event.mouse);const{payload:b,synthetic:h}=ce(a,e,!1);b!==void 0&&(e.handler(b)===!1?e.end(a):(e.styleCleanup===void 0&&e.event.isFirst===!0&&i(),e.event.lastX=b.position.left,e.event.lastY=b.position.top,e.event.lastDir=h===!0?void 0:b.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||v===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){i(),e.event.detected=!0,e.move(a);return}const g=Math.abs(n),m=Math.abs(p);g!==m&&(e.direction.horizontal===!0&&g>m||e.direction.vertical===!0&&g<m||e.direction.up===!0&&g<m&&p<0||e.direction.down===!0&&g<m&&p>0||e.direction.left===!0&&g>m&&n<0||e.direction.right===!0&&g>m&&n>0?(e.event.detected=!0,e.move(a)):e.end(a,!0))},end(a,d){if(e.event!==void 0){if(ne(e,"temp"),F.is.firefox===!0&&oe(t,!1),d===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(ce(a===void 0?e.lastEvt:a,e).payload);const{payload:n}=ce(a===void 0?e.lastEvt:a,e,!0),p=()=>{e.handler(n)};e.styleCleanup!==void 0?e.styleCleanup(p):p()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,u.mouse===!0){const a=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";$(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}F.has.touch===!0&&$(e,"main",[[t,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,o){const u=t.__qtouchpan;u!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&u.end(),u.handler=o.value),u.direction=Se(o.modifiers))},beforeUnmount(t){const o=t.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ne(o,"main"),ne(o,"temp"),F.is.firefox===!0&&oe(t,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete t.__qtouchpan)}});const Oe=150;var Ft=Le({name:"QDrawer",inheritAttrs:!1,props:{...Ct,...Qt,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[..._t,"onLayout","miniState"],setup(t,{slots:o,emit:u,attrs:s}){const e=Ae(),{proxy:{$q:a}}=e,d=Bt(t,a),{preventBodyScroll:n}=Dt(),{registerTimeout:p,removeTimeout:v}=qt(),i=Me(Ee,E);if(i===E)return console.error("QDrawer needs to be child of QLayout"),E;let g,m=null,b;const h=q(t.behavior==="mobile"||t.behavior!=="desktop"&&i.totalWidth.value<=t.breakpoint),S=y(()=>t.mini===!0&&h.value!==!0),x=y(()=>S.value===!0?t.miniWidth:t.width),w=q(t.showIfAbove===!0&&h.value===!1?!0:t.modelValue===!0),me=y(()=>t.persistent!==!0&&(h.value===!0||Ne.value===!0));function he(r,c){if(Ve(),r!==!1&&i.animate(),k(0),h.value===!0){const _=i.instances[W.value];_!==void 0&&_.belowBreakpoint===!0&&_.hide(!1),Q(1),i.isContainer.value!==!0&&n(!0)}else Q(0),r!==!1&&te(!1);p(()=>{r!==!1&&te(!0),c!==!0&&u("show",r)},Oe)}function pe(r,c){Fe(),r!==!1&&i.animate(),Q(0),k(O.value*x.value),ae(),c!==!0?p(()=>{u("hide",r)},Oe):v()}const{show:Y,hide:A}=xt({showing:w,hideOnRouteChange:me,handleShow:he,handleHide:pe}),{addToHistory:Ve,removeFromHistory:Fe}=kt(w,A,me),z={belowBreakpoint:h,hide:A},P=y(()=>t.side==="right"),O=y(()=>(a.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),ye=q(0),L=q(!1),G=q(!1),we=q(x.value*O.value),W=y(()=>P.value===!0?"left":"right"),J=y(()=>w.value===!0&&h.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:x.value:0),Z=y(()=>t.overlay===!0||t.miniToOverlay===!0||i.view.value.indexOf(P.value?"R":"L")>-1||a.platform.is.ios===!0&&i.isContainer.value===!0),V=y(()=>t.overlay===!1&&w.value===!0&&h.value===!1),Ne=y(()=>t.overlay===!0&&w.value===!0&&h.value===!1),Ie=y(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&L.value===!1?" hidden":"")),ze=y(()=>({backgroundColor:`rgba(0,0,0,${ye.value*.4})`})),be=y(()=>P.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),We=y(()=>P.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),He=y(()=>{const r={};return i.header.space===!0&&be.value===!1&&(Z.value===!0?r.top=`${i.header.offset}px`:i.header.space===!0&&(r.top=`${i.header.size}px`)),i.footer.space===!0&&We.value===!1&&(Z.value===!0?r.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(r.bottom=`${i.footer.size}px`)),r}),$e=y(()=>{const r={width:`${x.value}px`,transform:`translateX(${we.value}px)`};return h.value===!0?r:Object.assign(r,He.value)}),Ke=y(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),Re=y(()=>`q-drawer q-drawer--${t.side}`+(G.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(d.value===!0?" q-drawer--dark q-dark":"")+(L.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${S.value===!0?"mini":"standard"}`+(Z.value===!0||V.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(be.value===!0?" q-drawer--top-padding":""))),Ue=y(()=>{const r=a.lang.rtl===!0?t.side:W.value;return[[fe,Ge,void 0,{[r]:!0,mouse:!0}]]}),Xe=y(()=>{const r=a.lang.rtl===!0?W.value:t.side;return[[fe,ge,void 0,{[r]:!0,mouse:!0}]]}),je=y(()=>{const r=a.lang.rtl===!0?W.value:t.side;return[[fe,ge,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ee(){Je(h,t.behavior==="mobile"||t.behavior!=="desktop"&&i.totalWidth.value<=t.breakpoint)}C(h,r=>{r===!0?(g=w.value,w.value===!0&&A(!1)):t.overlay===!1&&t.behavior!=="mobile"&&g!==!1&&(w.value===!0?(k(0),Q(0),ae()):Y(!1))}),C(()=>t.side,(r,c)=>{i.instances[c]===z&&(i.instances[c]=void 0,i[c].space=!1,i[c].offset=0),i.instances[r]=z,i[r].size=x.value,i[r].space=V.value,i[r].offset=J.value}),C(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&ee()}),C(()=>t.behavior+t.breakpoint,ee),C(i.isContainer,r=>{w.value===!0&&n(r!==!0),r===!0&&ee()}),C(i.scrollbarWidth,()=>{k(w.value===!0?0:void 0)}),C(J,r=>{B("offset",r)}),C(V,r=>{u("onLayout",r),B("space",r)}),C(P,()=>{k()}),C(x,r=>{k(),re(t.miniToOverlay,r)}),C(()=>t.miniToOverlay,r=>{re(r,x.value)}),C(()=>a.lang.rtl,()=>{k()}),C(()=>t.mini,()=>{t.modelValue===!0&&(Ye(),i.animate())}),C(S,r=>{u("miniState",r)});function k(r){r===void 0?_e(()=>{r=w.value===!0?0:x.value,k(O.value*r)}):(i.isContainer.value===!0&&P.value===!0&&(h.value===!0||Math.abs(r)===x.value)&&(r+=O.value*i.scrollbarWidth.value),we.value=r)}function Q(r){ye.value=r}function te(r){const c=r===!0?"remove":i.isContainer.value!==!0?"add":"";c!==""&&document.body.classList[c]("q-body--drawer-toggle")}function Ye(){m!==null&&clearTimeout(m),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),G.value=!0,m=setTimeout(()=>{m=null,G.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ge(r){if(w.value!==!1)return;const c=x.value,_=X(r.distance.x,0,c);if(r.isFinal===!0){_>=Math.min(75,c)===!0?Y():(i.animate(),Q(0),k(O.value*c)),L.value=!1;return}k((a.lang.rtl===!0?P.value!==!0:P.value)?Math.max(c-_,0):Math.min(0,_-c)),Q(X(_/c,0,1)),r.isFirst===!0&&(L.value=!0)}function ge(r){if(w.value!==!0)return;const c=x.value,_=r.direction===t.side,H=(a.lang.rtl===!0?_!==!0:_)?X(r.distance.x,0,c):0;if(r.isFinal===!0){Math.abs(H)<Math.min(75,c)===!0?(i.animate(),Q(1),k(0)):A(),L.value=!1;return}k(O.value*H),Q(X(1-H/c,0,1)),r.isFirst===!0&&(L.value=!0)}function ae(){n(!1),te(!0)}function B(r,c){i.update(t.side,r,c)}function Je(r,c){r.value!==c&&(r.value=c)}function re(r,c){B("size",r===!0?t.miniWidth:c)}return i.instances[t.side]=z,re(t.miniToOverlay,x.value),B("space",V.value),B("offset",J.value),t.showIfAbove===!0&&t.modelValue!==!0&&w.value===!0&&t["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!0),rt(()=>{u("onLayout",V.value),u("miniState",S.value),g=t.showIfAbove===!0;const r=()=>{(w.value===!0?he:pe)(!1,!0)};if(i.totalWidth.value!==0){_e(r);return}b=C(i.totalWidth,()=>{b(),b=void 0,w.value===!1&&t.showIfAbove===!0&&h.value===!1?Y(!1):r()})}),ot(()=>{b!==void 0&&b(),m!==null&&(clearTimeout(m),m=null),w.value===!0&&ae(),i.instances[t.side]===z&&(i.instances[t.side]=void 0,B("size",0),B("offset",0),B("space",!1))}),()=>{const r=[];h.value===!0&&(t.noSwipeOpen===!1&&r.push(it(I("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Ue.value)),r.push(qe("div",{ref:"backdrop",class:Ie.value,style:ze.value,"aria-hidden":"true",onClick:A},void 0,"backdrop",t.noSwipeBackdrop!==!0&&w.value===!0,()=>je.value)));const c=S.value===!0&&o.mini!==void 0,_=[I("div",{...s,key:""+c,class:[Ke.value,s.class]},c===!0?o.mini():Te(o.default))];return t.elevated===!0&&w.value===!0&&_.push(I("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(qe("aside",{ref:"content",class:Re.value,style:$e.value},_,"contentclose",t.noSwipeClose!==!0&&h.value===!0,()=>Xe.value)),I("div",{class:"q-drawer-container"},r)}}}),Nt=Le({name:"QPageContainer",setup(t,{slots:o}){const{proxy:{$q:u}}=Ae(),s=Me(Ee,E);if(s===E)return console.error("QPageContainer needs to be child of QLayout"),E;nt(st,!0);const e=y(()=>{const a={};return s.header.space===!0&&(a.paddingTop=`${s.header.size}px`),s.right.space===!0&&(a[`padding${u.lang.rtl===!0?"Left":"Right"}`]=`${s.right.size}px`),s.footer.space===!0&&(a.paddingBottom=`${s.footer.size}px`),s.left.space===!0&&(a[`padding${u.lang.rtl===!0?"Right":"Left"}`]=`${s.left.size}px`),a});return()=>I("div",{class:"q-page-container",style:e.value},Te(o.default))}});const It=[{title:"P\xE1gina de Inicio",icon:"mdi-home",requireDirector:!1,to:"/"},{title:"Administrar informe final",icon:"mdi-file-cog",requireDirector:!0,to:"/informe/administrar"},{title:"Actividades del distributivo",icon:"mdi-view-list",requireDirector:!1,to:"/distributivo/ver"},{title:"Gestionar informe final",icon:"mdi-file-document-edit",requireDirector:!1,to:"/informe/gestionar"},{title:"Historial de informes",icon:"mdi-clipboard-text-multiple",requireDirector:!1,to:"/informe/historial"},{title:"Administrar docentes",icon:"mdi-account-cog",requireDirector:!0,to:"/docente"}],zt={setup(){const t=Ot(),o=q({password:"",new_password:""}),u=q(!0),s=q(!0),e=q(!1),a=ft(),d=q(!1),n=ut(),p=n.rol=="director"?q(!0):q(!1),v=q({}),i=async()=>{await Et.obtenerPerfilDocente(m=>{if(m.status!=200)return xe.presentarMensaje("NOK",m.message);if(m.status==401)return xe.presentarMensaje("NOK",m.message),a.push({path:"/"});v.value={nombre:`${m.data.docente.primerNombre} ${m.data.docente.primerApellido}`,rol:n.rol.toUpperCase()}})},g=(m,b)=>{m=="OK"?t.notify({color:"green-5",textColor:"white",icon:"mdi-check-bold",message:b}):t.notify({color:"red-5",textColor:"white",icon:"warning",message:b})};return i(),{essentialLinks:It,leftDrawerOpen:d,isDirector:p,perfil:v,isPassword:u,isNewPassword:s,formPassword:o,showCambiarContrasennia:e,toggleLeftDrawer(){d.value=!d.value},async logout(){return console.log("Salir"),await n.logout(),a.push({path:"/login"})},async onSubmit(){console.log(o.value.password,o.value.new_password),await dt.cambiarContrasennia(o.value,m=>{if(m.status==401)return g("NO OK",m.message),a.push({path:"/"});if(m.status!=200)return g("NO OK",m.message);g("OK",m.data.message),this.cerrarFormulario()})},cerrarFormulario(){e.value=!1,o.value={password:"",new_password:""}}}}},Wt=D("img",{class:"nav-img",alt:"Carrera logo",src:At,style:{width:"40px"}},null,-1),Ht=D("div",{class:"div1 q-ml-md"},[D("b",null,"Carrera de\xA0")],-1),$t=D("div",{class:"div2"},[D("b",null,"Computaci\xF3n")],-1),Kt={align:"right",class:"perfil-main"},Rt={style:{"font-style":"italic"}},Ut={class:"icon-user-menu"},Xt=D("div",{class:"text-h6"},"Cambiar contrase\xF1a",-1);function jt(t,o,u,s,e,a){const d=vt("router-view");return T(),K(ct,null,{default:f(()=>[l(bt,{view:"hHh lpR fFf"},{default:f(()=>[l(pt,{elevated:"",class:"bg-primary text-white"},{default:f(()=>[l(yt,null,{default:f(()=>[l(R,{dense:"",flat:"",round:"",icon:"menu",onClick:s.toggleLeftDrawer},null,8,["onClick"]),l(wt,{class:"title-main"},{default:f(()=>[Wt,Ht,$t]),_:1}),D("div",Kt,[D("div",null,se(s.perfil.nombre),1),D("div",null,[D("b",Rt,se(s.perfil.rol),1)])]),D("div",Ut,[l(R,{dense:"",flat:"",round:"",icon:"mdi-account"},{default:f(()=>[l(Pt,{fit:""},{default:f(()=>[l(De,{style:{"min-width":"100px",width:"200px"}},{default:f(()=>[l(ue,{clickable:"",onClick:o[0]||(o[0]=n=>s.showCambiarContrasennia=!0)},{default:f(()=>[l(M,{class:"col-2"},{default:f(()=>[l(N,{name:"mdi-key"})]),_:1}),l(M,{class:"col"},{default:f(()=>[l(j,null,{default:f(()=>[U("Cambiar contrase\xF1a")]),_:1})]),_:1})]),_:1}),l(de),l(ue,{clickable:"",onClick:s.logout},{default:f(()=>[l(M,{class:"col-2"},{default:f(()=>[l(N,{name:"mdi-login-variant"})]),_:1}),l(M,{class:"col"},{default:f(()=>[l(j,null,{default:f(()=>[U("Cerrar sesion")]),_:1})]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1}),l(Ft,{"show-if-above":"",modelValue:s.leftDrawerOpen,"onUpdate:modelValue":o[1]||(o[1]=n=>s.leftDrawerOpen=n),side:"left",elevated:""},{default:f(()=>[l(De,null,{default:f(()=>[l(j,{header:""},{default:f(()=>[U(" Lista de Opciones ")]),_:1}),(T(!0),ke(ht,null,mt(s.essentialLinks,n=>(T(),ke("div",{key:n.name,clickable:"",tag:"a"},[!n.requireDirector||n.requireDirector==s.isDirector?(T(),K(ue,{key:0,to:n.to},{default:f(()=>[n.icon?(T(),K(M,{key:0,avatar:""},{default:f(()=>[l(N,{name:n.icon},null,8,["name"])]),_:2},1024)):le("",!0),!n.requireDirector||n.requireDirector==s.isDirector?(T(),K(M,{key:1},{default:f(()=>[l(j,null,{default:f(()=>[U(se(n.title),1)]),_:2},1024)]),_:2},1024)):le("",!0)]),_:2},1032,["to"])):le("",!0)]))),128))]),_:1})]),_:1},8,["modelValue"]),l(St,{modelValue:s.showCambiarContrasennia,"onUpdate:modelValue":o[8]||(o[8]=n=>s.showCambiarContrasennia=n),persistent:""},{default:f(()=>[l(Lt,{style:{"max-width":"500px","min-width":"300px"}},{default:f(()=>[l(Pe,{class:"card-title"},{default:f(()=>[Xt]),_:1}),l(de,{class:"q-separator-crear-docente"}),l(Pe,{style:{"max-height":"70vh"},class:"scroll body-crear-docente"},{default:f(()=>[l(Tt,{onSubmit:o[6]||(o[6]=n=>s.onSubmit()),onReset:o[7]||(o[7]=n=>s.cerrarFormulario()),class:"q-gutter-x-md"},{default:f(()=>[l(Be,{dense:"",class:"col label-mid q-mb-md",filled:"",modelValue:s.formPassword.password,"onUpdate:modelValue":o[3]||(o[3]=n=>s.formPassword.password=n),label:"Contrase\xF1a Actual","lazy-rules":"",rules:[n=>n&&n.length>0||"Ingrese su actual contrase\xF1a"],hint:"Ingrese su actual contrase\xF1a",type:s.isPassword?"password":"text"},{append:f(()=>[l(N,{name:s.isPassword?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[2]||(o[2]=n=>s.isPassword=!s.isPassword)},null,8,["name"])]),_:1},8,["modelValue","rules","type"]),l(Be,{dense:"",class:"col label-mid q-mb-sm",filled:"",modelValue:s.formPassword.new_password,"onUpdate:modelValue":o[5]||(o[5]=n=>s.formPassword.new_password=n),label:"Contrase\xF1a Nueva","lazy-rules":"",rules:[n=>n&&n.length>0||"Ingrese la nueva contrase\xF1a"],hint:"Ingrese la nueva contrase\xF1a",type:s.isNewPassword?"password":"text"},{append:f(()=>[l(N,{name:s.isNewPassword?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[4]||(o[4]=n=>s.isNewPassword=!s.isNewPassword)},null,8,["name"])]),_:1},8,["modelValue","rules","type"]),l(de,{class:"q-separator-crear-docente"}),l(Mt,{align:"right",class:"q-mb-none q-pb-none"},{default:f(()=>[l(R,{type:"reset",label:"Cancelar",color:"negative"}),l(R,{type:"submit",color:"positive",label:"Guardar"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(Nt,null,{default:f(()=>[l(d)]),_:1})]),_:1})]),_:1})}var sa=lt(zt,[["render",jt]]);export{sa as default};
