// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__26642__auto__ = (((value == null))?null:value);
var m__26643__auto__ = (devtools.format._header[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,value);
} else {
var m__26643__auto____$1 = (devtools.format._header["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__26642__auto__ = (((value == null))?null:value);
var m__26643__auto__ = (devtools.format._has_body[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,value);
} else {
var m__26643__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__26642__auto__ = (((value == null))?null:value);
var m__26643__auto__ = (devtools.format._body[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,value);
} else {
var m__26643__auto____$1 = (devtools.format._body["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37138__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37138__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37138__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37138__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37137__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37137__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37138__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37138__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37138__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37138__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37137__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37137__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37138__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37138__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37138__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37138__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37137__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37137__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37138__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37138__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37138__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37138__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37137__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37137__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37138__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37138__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37138__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37138__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37137__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37137__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37138__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37138__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37138__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37138__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37137__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37137__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37138__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37138__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37138__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37138__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37137__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37137__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37159 = arguments.length;
var i__27055__auto___37160 = (0);
while(true){
if((i__27055__auto___37160 < len__27054__auto___37159)){
args__27061__auto__.push((arguments[i__27055__auto___37160]));

var G__37161 = (i__27055__auto___37160 + (1));
i__27055__auto___37160 = G__37161;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq37158){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37158));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37163 = arguments.length;
var i__27055__auto___37164 = (0);
while(true){
if((i__27055__auto___37164 < len__27054__auto___37163)){
args__27061__auto__.push((arguments[i__27055__auto___37164]));

var G__37165 = (i__27055__auto___37164 + (1));
i__27055__auto___37164 = G__37165;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq37162){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37162));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37167 = arguments.length;
var i__27055__auto___37168 = (0);
while(true){
if((i__27055__auto___37168 < len__27054__auto___37167)){
args__27061__auto__.push((arguments[i__27055__auto___37168]));

var G__37169 = (i__27055__auto___37168 + (1));
i__27055__auto___37168 = G__37169;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq37166){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37166));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37171 = arguments.length;
var i__27055__auto___37172 = (0);
while(true){
if((i__27055__auto___37172 < len__27054__auto___37171)){
args__27061__auto__.push((arguments[i__27055__auto___37172]));

var G__37173 = (i__27055__auto___37172 + (1));
i__27055__auto___37172 = G__37173;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37170){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37170));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37175 = arguments.length;
var i__27055__auto___37176 = (0);
while(true){
if((i__27055__auto___37176 < len__27054__auto___37175)){
args__27061__auto__.push((arguments[i__27055__auto___37176]));

var G__37177 = (i__27055__auto___37176 + (1));
i__27055__auto___37176 = G__37177;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq37174){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37174));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37179 = arguments.length;
var i__27055__auto___37180 = (0);
while(true){
if((i__27055__auto___37180 < len__27054__auto___37179)){
args__27061__auto__.push((arguments[i__27055__auto___37180]));

var G__37181 = (i__27055__auto___37180 + (1));
i__27055__auto___37180 = G__37181;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq37178){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37178));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37183 = arguments.length;
var i__27055__auto___37184 = (0);
while(true){
if((i__27055__auto___37184 < len__27054__auto___37183)){
args__27061__auto__.push((arguments[i__27055__auto___37184]));

var G__37185 = (i__27055__auto___37184 + (1));
i__27055__auto___37184 = G__37185;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq37182){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37182));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37193 = arguments.length;
var i__27055__auto___37194 = (0);
while(true){
if((i__27055__auto___37194 < len__27054__auto___37193)){
args__27061__auto__.push((arguments[i__27055__auto___37194]));

var G__37195 = (i__27055__auto___37194 + (1));
i__27055__auto___37194 = G__37195;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37189){
var vec__37190 = p__37189;
var state_override = cljs.core.nth.call(null,vec__37190,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__37190,state_override){
return (function (p1__37186_SHARP_){
return cljs.core.merge.call(null,p1__37186_SHARP_,state_override);
});})(vec__37190,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq37187){
var G__37188 = cljs.core.first.call(null,seq37187);
var seq37187__$1 = cljs.core.next.call(null,seq37187);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__37188,seq37187__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37197 = arguments.length;
var i__27055__auto___37198 = (0);
while(true){
if((i__27055__auto___37198 < len__27054__auto___37197)){
args__27061__auto__.push((arguments[i__27055__auto___37198]));

var G__37199 = (i__27055__auto___37198 + (1));
i__27055__auto___37198 = G__37199;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq37196){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37196));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37202 = arguments.length;
var i__27055__auto___37203 = (0);
while(true){
if((i__27055__auto___37203 < len__27054__auto___37202)){
args__27061__auto__.push((arguments[i__27055__auto___37203]));

var G__37204 = (i__27055__auto___37203 + (1));
i__27055__auto___37203 = G__37204;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37200){
var G__37201 = cljs.core.first.call(null,seq37200);
var seq37200__$1 = cljs.core.next.call(null,seq37200);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__37201,seq37200__$1);
});


//# sourceMappingURL=format.js.map?rel=1496854391741