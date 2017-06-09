// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25979__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_27992 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_27992){
return (function (){
var _STAR_always_update_STAR_27993 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_27993;
}});})(_STAR_always_update_STAR_27992))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_27992;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args27994 = [];
var len__27054__auto___27997 = arguments.length;
var i__27055__auto___27998 = (0);
while(true){
if((i__27055__auto___27998 < len__27054__auto___27997)){
args27994.push((arguments[i__27055__auto___27998]));

var G__27999 = (i__27055__auto___27998 + (1));
i__27055__auto___27998 = G__27999;
continue;
} else {
}
break;
}

var G__27996 = args27994.length;
switch (G__27996) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27994.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__28005_28009 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__28006_28010 = null;
var count__28007_28011 = (0);
var i__28008_28012 = (0);
while(true){
if((i__28008_28012 < count__28007_28011)){
var v_28013 = cljs.core._nth.call(null,chunk__28006_28010,i__28008_28012);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_28013);

var G__28014 = seq__28005_28009;
var G__28015 = chunk__28006_28010;
var G__28016 = count__28007_28011;
var G__28017 = (i__28008_28012 + (1));
seq__28005_28009 = G__28014;
chunk__28006_28010 = G__28015;
count__28007_28011 = G__28016;
i__28008_28012 = G__28017;
continue;
} else {
var temp__4657__auto___28018 = cljs.core.seq.call(null,seq__28005_28009);
if(temp__4657__auto___28018){
var seq__28005_28019__$1 = temp__4657__auto___28018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28005_28019__$1)){
var c__26790__auto___28020 = cljs.core.chunk_first.call(null,seq__28005_28019__$1);
var G__28021 = cljs.core.chunk_rest.call(null,seq__28005_28019__$1);
var G__28022 = c__26790__auto___28020;
var G__28023 = cljs.core.count.call(null,c__26790__auto___28020);
var G__28024 = (0);
seq__28005_28009 = G__28021;
chunk__28006_28010 = G__28022;
count__28007_28011 = G__28023;
i__28008_28012 = G__28024;
continue;
} else {
var v_28025 = cljs.core.first.call(null,seq__28005_28019__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_28025);

var G__28026 = cljs.core.next.call(null,seq__28005_28019__$1);
var G__28027 = null;
var G__28028 = (0);
var G__28029 = (0);
seq__28005_28009 = G__28026;
chunk__28006_28010 = G__28027;
count__28007_28011 = G__28028;
i__28008_28012 = G__28029;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1496854379401