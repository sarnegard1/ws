// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36269 = [];
var len__27054__auto___36272 = arguments.length;
var i__27055__auto___36273 = (0);
while(true){
if((i__27055__auto___36273 < len__27054__auto___36272)){
args36269.push((arguments[i__27055__auto___36273]));

var G__36274 = (i__27055__auto___36273 + (1));
i__27055__auto___36273 = G__36274;
continue;
} else {
}
break;
}

var G__36271 = args36269.length;
switch (G__36271) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36269.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___36277 = arguments.length;
var i__27055__auto___36278 = (0);
while(true){
if((i__27055__auto___36278 < len__27054__auto___36277)){
args__27061__auto__.push((arguments[i__27055__auto___36278]));

var G__36279 = (i__27055__auto___36278 + (1));
i__27055__auto___36278 = G__36279;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36276){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36276));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___36281 = arguments.length;
var i__27055__auto___36282 = (0);
while(true){
if((i__27055__auto___36282 < len__27054__auto___36281)){
args__27061__auto__.push((arguments[i__27055__auto___36282]));

var G__36283 = (i__27055__auto___36282 + (1));
i__27055__auto___36282 = G__36283;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36280){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36280));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36284){
var map__36287 = p__36284;
var map__36287__$1 = ((((!((map__36287 == null)))?((((map__36287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36287):map__36287);
var message = cljs.core.get.call(null,map__36287__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36287__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25979__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25967__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25967__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25967__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29167__auto___36449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___36449,ch){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___36449,ch){
return (function (state_36418){
var state_val_36419 = (state_36418[(1)]);
if((state_val_36419 === (7))){
var inst_36414 = (state_36418[(2)]);
var state_36418__$1 = state_36418;
var statearr_36420_36450 = state_36418__$1;
(statearr_36420_36450[(2)] = inst_36414);

(statearr_36420_36450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (1))){
var state_36418__$1 = state_36418;
var statearr_36421_36451 = state_36418__$1;
(statearr_36421_36451[(2)] = null);

(statearr_36421_36451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (4))){
var inst_36371 = (state_36418[(7)]);
var inst_36371__$1 = (state_36418[(2)]);
var state_36418__$1 = (function (){var statearr_36422 = state_36418;
(statearr_36422[(7)] = inst_36371__$1);

return statearr_36422;
})();
if(cljs.core.truth_(inst_36371__$1)){
var statearr_36423_36452 = state_36418__$1;
(statearr_36423_36452[(1)] = (5));

} else {
var statearr_36424_36453 = state_36418__$1;
(statearr_36424_36453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (15))){
var inst_36378 = (state_36418[(8)]);
var inst_36393 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36378);
var inst_36394 = cljs.core.first.call(null,inst_36393);
var inst_36395 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36394);
var inst_36396 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36395)].join('');
var inst_36397 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36396);
var state_36418__$1 = state_36418;
var statearr_36425_36454 = state_36418__$1;
(statearr_36425_36454[(2)] = inst_36397);

(statearr_36425_36454[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (13))){
var inst_36402 = (state_36418[(2)]);
var state_36418__$1 = state_36418;
var statearr_36426_36455 = state_36418__$1;
(statearr_36426_36455[(2)] = inst_36402);

(statearr_36426_36455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (6))){
var state_36418__$1 = state_36418;
var statearr_36427_36456 = state_36418__$1;
(statearr_36427_36456[(2)] = null);

(statearr_36427_36456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (17))){
var inst_36400 = (state_36418[(2)]);
var state_36418__$1 = state_36418;
var statearr_36428_36457 = state_36418__$1;
(statearr_36428_36457[(2)] = inst_36400);

(statearr_36428_36457[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (3))){
var inst_36416 = (state_36418[(2)]);
var state_36418__$1 = state_36418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36418__$1,inst_36416);
} else {
if((state_val_36419 === (12))){
var inst_36377 = (state_36418[(9)]);
var inst_36391 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36377,opts);
var state_36418__$1 = state_36418;
if(cljs.core.truth_(inst_36391)){
var statearr_36429_36458 = state_36418__$1;
(statearr_36429_36458[(1)] = (15));

} else {
var statearr_36430_36459 = state_36418__$1;
(statearr_36430_36459[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (2))){
var state_36418__$1 = state_36418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36418__$1,(4),ch);
} else {
if((state_val_36419 === (11))){
var inst_36378 = (state_36418[(8)]);
var inst_36383 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36384 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36378);
var inst_36385 = cljs.core.async.timeout.call(null,(1000));
var inst_36386 = [inst_36384,inst_36385];
var inst_36387 = (new cljs.core.PersistentVector(null,2,(5),inst_36383,inst_36386,null));
var state_36418__$1 = state_36418;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36418__$1,(14),inst_36387);
} else {
if((state_val_36419 === (9))){
var inst_36378 = (state_36418[(8)]);
var inst_36404 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36405 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36378);
var inst_36406 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36405);
var inst_36407 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36406)].join('');
var inst_36408 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36407);
var state_36418__$1 = (function (){var statearr_36431 = state_36418;
(statearr_36431[(10)] = inst_36404);

return statearr_36431;
})();
var statearr_36432_36460 = state_36418__$1;
(statearr_36432_36460[(2)] = inst_36408);

(statearr_36432_36460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (5))){
var inst_36371 = (state_36418[(7)]);
var inst_36373 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36374 = (new cljs.core.PersistentArrayMap(null,2,inst_36373,null));
var inst_36375 = (new cljs.core.PersistentHashSet(null,inst_36374,null));
var inst_36376 = figwheel.client.focus_msgs.call(null,inst_36375,inst_36371);
var inst_36377 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36376);
var inst_36378 = cljs.core.first.call(null,inst_36376);
var inst_36379 = figwheel.client.autoload_QMARK_.call(null);
var state_36418__$1 = (function (){var statearr_36433 = state_36418;
(statearr_36433[(8)] = inst_36378);

(statearr_36433[(9)] = inst_36377);

return statearr_36433;
})();
if(cljs.core.truth_(inst_36379)){
var statearr_36434_36461 = state_36418__$1;
(statearr_36434_36461[(1)] = (8));

} else {
var statearr_36435_36462 = state_36418__$1;
(statearr_36435_36462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (14))){
var inst_36389 = (state_36418[(2)]);
var state_36418__$1 = state_36418;
var statearr_36436_36463 = state_36418__$1;
(statearr_36436_36463[(2)] = inst_36389);

(statearr_36436_36463[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (16))){
var state_36418__$1 = state_36418;
var statearr_36437_36464 = state_36418__$1;
(statearr_36437_36464[(2)] = null);

(statearr_36437_36464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (10))){
var inst_36410 = (state_36418[(2)]);
var state_36418__$1 = (function (){var statearr_36438 = state_36418;
(statearr_36438[(11)] = inst_36410);

return statearr_36438;
})();
var statearr_36439_36465 = state_36418__$1;
(statearr_36439_36465[(2)] = null);

(statearr_36439_36465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (8))){
var inst_36377 = (state_36418[(9)]);
var inst_36381 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36377,opts);
var state_36418__$1 = state_36418;
if(cljs.core.truth_(inst_36381)){
var statearr_36440_36466 = state_36418__$1;
(statearr_36440_36466[(1)] = (11));

} else {
var statearr_36441_36467 = state_36418__$1;
(statearr_36441_36467[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29167__auto___36449,ch))
;
return ((function (switch__29055__auto__,c__29167__auto___36449,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29056__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29056__auto____0 = (function (){
var statearr_36445 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36445[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29056__auto__);

(statearr_36445[(1)] = (1));

return statearr_36445;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29056__auto____1 = (function (state_36418){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_36418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e36446){if((e36446 instanceof Object)){
var ex__29059__auto__ = e36446;
var statearr_36447_36468 = state_36418;
(statearr_36447_36468[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36469 = state_36418;
state_36418 = G__36469;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29056__auto__ = function(state_36418){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29056__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29056__auto____1.call(this,state_36418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29056__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29056__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___36449,ch))
})();
var state__29169__auto__ = (function (){var statearr_36448 = f__29168__auto__.call(null);
(statearr_36448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___36449);

return statearr_36448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___36449,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36470_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36470_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36473 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36473){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36472){if((e36472 instanceof Error)){
var e = e36472;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36473], null));
} else {
var e = e36472;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36473))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36474){
var map__36483 = p__36474;
var map__36483__$1 = ((((!((map__36483 == null)))?((((map__36483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36483):map__36483);
var opts = map__36483__$1;
var build_id = cljs.core.get.call(null,map__36483__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36483,map__36483__$1,opts,build_id){
return (function (p__36485){
var vec__36486 = p__36485;
var seq__36487 = cljs.core.seq.call(null,vec__36486);
var first__36488 = cljs.core.first.call(null,seq__36487);
var seq__36487__$1 = cljs.core.next.call(null,seq__36487);
var map__36489 = first__36488;
var map__36489__$1 = ((((!((map__36489 == null)))?((((map__36489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36489):map__36489);
var msg = map__36489__$1;
var msg_name = cljs.core.get.call(null,map__36489__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36487__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36486,seq__36487,first__36488,seq__36487__$1,map__36489,map__36489__$1,msg,msg_name,_,map__36483,map__36483__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36486,seq__36487,first__36488,seq__36487__$1,map__36489,map__36489__$1,msg,msg_name,_,map__36483,map__36483__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36483,map__36483__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36497){
var vec__36498 = p__36497;
var seq__36499 = cljs.core.seq.call(null,vec__36498);
var first__36500 = cljs.core.first.call(null,seq__36499);
var seq__36499__$1 = cljs.core.next.call(null,seq__36499);
var map__36501 = first__36500;
var map__36501__$1 = ((((!((map__36501 == null)))?((((map__36501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36501):map__36501);
var msg = map__36501__$1;
var msg_name = cljs.core.get.call(null,map__36501__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36499__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36503){
var map__36515 = p__36503;
var map__36515__$1 = ((((!((map__36515 == null)))?((((map__36515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36515):map__36515);
var on_compile_warning = cljs.core.get.call(null,map__36515__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36515__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36515,map__36515__$1,on_compile_warning,on_compile_fail){
return (function (p__36517){
var vec__36518 = p__36517;
var seq__36519 = cljs.core.seq.call(null,vec__36518);
var first__36520 = cljs.core.first.call(null,seq__36519);
var seq__36519__$1 = cljs.core.next.call(null,seq__36519);
var map__36521 = first__36520;
var map__36521__$1 = ((((!((map__36521 == null)))?((((map__36521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36521):map__36521);
var msg = map__36521__$1;
var msg_name = cljs.core.get.call(null,map__36521__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36519__$1;
var pred__36523 = cljs.core._EQ_;
var expr__36524 = msg_name;
if(cljs.core.truth_(pred__36523.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36524))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36523.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36524))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36515,map__36515__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__,msg_hist,msg_names,msg){
return (function (state_36752){
var state_val_36753 = (state_36752[(1)]);
if((state_val_36753 === (7))){
var inst_36672 = (state_36752[(2)]);
var state_36752__$1 = state_36752;
if(cljs.core.truth_(inst_36672)){
var statearr_36754_36804 = state_36752__$1;
(statearr_36754_36804[(1)] = (8));

} else {
var statearr_36755_36805 = state_36752__$1;
(statearr_36755_36805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (20))){
var inst_36746 = (state_36752[(2)]);
var state_36752__$1 = state_36752;
var statearr_36756_36806 = state_36752__$1;
(statearr_36756_36806[(2)] = inst_36746);

(statearr_36756_36806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (27))){
var inst_36742 = (state_36752[(2)]);
var state_36752__$1 = state_36752;
var statearr_36757_36807 = state_36752__$1;
(statearr_36757_36807[(2)] = inst_36742);

(statearr_36757_36807[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (1))){
var inst_36665 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36752__$1 = state_36752;
if(cljs.core.truth_(inst_36665)){
var statearr_36758_36808 = state_36752__$1;
(statearr_36758_36808[(1)] = (2));

} else {
var statearr_36759_36809 = state_36752__$1;
(statearr_36759_36809[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (24))){
var inst_36744 = (state_36752[(2)]);
var state_36752__$1 = state_36752;
var statearr_36760_36810 = state_36752__$1;
(statearr_36760_36810[(2)] = inst_36744);

(statearr_36760_36810[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (4))){
var inst_36750 = (state_36752[(2)]);
var state_36752__$1 = state_36752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36752__$1,inst_36750);
} else {
if((state_val_36753 === (15))){
var inst_36748 = (state_36752[(2)]);
var state_36752__$1 = state_36752;
var statearr_36761_36811 = state_36752__$1;
(statearr_36761_36811[(2)] = inst_36748);

(statearr_36761_36811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (21))){
var inst_36701 = (state_36752[(2)]);
var inst_36702 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36703 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36702);
var state_36752__$1 = (function (){var statearr_36762 = state_36752;
(statearr_36762[(7)] = inst_36701);

return statearr_36762;
})();
var statearr_36763_36812 = state_36752__$1;
(statearr_36763_36812[(2)] = inst_36703);

(statearr_36763_36812[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (31))){
var inst_36731 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36752__$1 = state_36752;
if(cljs.core.truth_(inst_36731)){
var statearr_36764_36813 = state_36752__$1;
(statearr_36764_36813[(1)] = (34));

} else {
var statearr_36765_36814 = state_36752__$1;
(statearr_36765_36814[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (32))){
var inst_36740 = (state_36752[(2)]);
var state_36752__$1 = state_36752;
var statearr_36766_36815 = state_36752__$1;
(statearr_36766_36815[(2)] = inst_36740);

(statearr_36766_36815[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (33))){
var inst_36727 = (state_36752[(2)]);
var inst_36728 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36729 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36728);
var state_36752__$1 = (function (){var statearr_36767 = state_36752;
(statearr_36767[(8)] = inst_36727);

return statearr_36767;
})();
var statearr_36768_36816 = state_36752__$1;
(statearr_36768_36816[(2)] = inst_36729);

(statearr_36768_36816[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (13))){
var inst_36686 = figwheel.client.heads_up.clear.call(null);
var state_36752__$1 = state_36752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36752__$1,(16),inst_36686);
} else {
if((state_val_36753 === (22))){
var inst_36707 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36708 = figwheel.client.heads_up.append_warning_message.call(null,inst_36707);
var state_36752__$1 = state_36752;
var statearr_36769_36817 = state_36752__$1;
(statearr_36769_36817[(2)] = inst_36708);

(statearr_36769_36817[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (36))){
var inst_36738 = (state_36752[(2)]);
var state_36752__$1 = state_36752;
var statearr_36770_36818 = state_36752__$1;
(statearr_36770_36818[(2)] = inst_36738);

(statearr_36770_36818[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (29))){
var inst_36718 = (state_36752[(2)]);
var inst_36719 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36720 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36719);
var state_36752__$1 = (function (){var statearr_36771 = state_36752;
(statearr_36771[(9)] = inst_36718);

return statearr_36771;
})();
var statearr_36772_36819 = state_36752__$1;
(statearr_36772_36819[(2)] = inst_36720);

(statearr_36772_36819[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (6))){
var inst_36667 = (state_36752[(10)]);
var state_36752__$1 = state_36752;
var statearr_36773_36820 = state_36752__$1;
(statearr_36773_36820[(2)] = inst_36667);

(statearr_36773_36820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (28))){
var inst_36714 = (state_36752[(2)]);
var inst_36715 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36716 = figwheel.client.heads_up.display_warning.call(null,inst_36715);
var state_36752__$1 = (function (){var statearr_36774 = state_36752;
(statearr_36774[(11)] = inst_36714);

return statearr_36774;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36752__$1,(29),inst_36716);
} else {
if((state_val_36753 === (25))){
var inst_36712 = figwheel.client.heads_up.clear.call(null);
var state_36752__$1 = state_36752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36752__$1,(28),inst_36712);
} else {
if((state_val_36753 === (34))){
var inst_36733 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36752__$1 = state_36752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36752__$1,(37),inst_36733);
} else {
if((state_val_36753 === (17))){
var inst_36692 = (state_36752[(2)]);
var inst_36693 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36694 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36693);
var state_36752__$1 = (function (){var statearr_36775 = state_36752;
(statearr_36775[(12)] = inst_36692);

return statearr_36775;
})();
var statearr_36776_36821 = state_36752__$1;
(statearr_36776_36821[(2)] = inst_36694);

(statearr_36776_36821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (3))){
var inst_36684 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36752__$1 = state_36752;
if(cljs.core.truth_(inst_36684)){
var statearr_36777_36822 = state_36752__$1;
(statearr_36777_36822[(1)] = (13));

} else {
var statearr_36778_36823 = state_36752__$1;
(statearr_36778_36823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (12))){
var inst_36680 = (state_36752[(2)]);
var state_36752__$1 = state_36752;
var statearr_36779_36824 = state_36752__$1;
(statearr_36779_36824[(2)] = inst_36680);

(statearr_36779_36824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (2))){
var inst_36667 = (state_36752[(10)]);
var inst_36667__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36752__$1 = (function (){var statearr_36780 = state_36752;
(statearr_36780[(10)] = inst_36667__$1);

return statearr_36780;
})();
if(cljs.core.truth_(inst_36667__$1)){
var statearr_36781_36825 = state_36752__$1;
(statearr_36781_36825[(1)] = (5));

} else {
var statearr_36782_36826 = state_36752__$1;
(statearr_36782_36826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (23))){
var inst_36710 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36752__$1 = state_36752;
if(cljs.core.truth_(inst_36710)){
var statearr_36783_36827 = state_36752__$1;
(statearr_36783_36827[(1)] = (25));

} else {
var statearr_36784_36828 = state_36752__$1;
(statearr_36784_36828[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (35))){
var state_36752__$1 = state_36752;
var statearr_36785_36829 = state_36752__$1;
(statearr_36785_36829[(2)] = null);

(statearr_36785_36829[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (19))){
var inst_36705 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36752__$1 = state_36752;
if(cljs.core.truth_(inst_36705)){
var statearr_36786_36830 = state_36752__$1;
(statearr_36786_36830[(1)] = (22));

} else {
var statearr_36787_36831 = state_36752__$1;
(statearr_36787_36831[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (11))){
var inst_36676 = (state_36752[(2)]);
var state_36752__$1 = state_36752;
var statearr_36788_36832 = state_36752__$1;
(statearr_36788_36832[(2)] = inst_36676);

(statearr_36788_36832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (9))){
var inst_36678 = figwheel.client.heads_up.clear.call(null);
var state_36752__$1 = state_36752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36752__$1,(12),inst_36678);
} else {
if((state_val_36753 === (5))){
var inst_36669 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36752__$1 = state_36752;
var statearr_36789_36833 = state_36752__$1;
(statearr_36789_36833[(2)] = inst_36669);

(statearr_36789_36833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (14))){
var inst_36696 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36752__$1 = state_36752;
if(cljs.core.truth_(inst_36696)){
var statearr_36790_36834 = state_36752__$1;
(statearr_36790_36834[(1)] = (18));

} else {
var statearr_36791_36835 = state_36752__$1;
(statearr_36791_36835[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (26))){
var inst_36722 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36752__$1 = state_36752;
if(cljs.core.truth_(inst_36722)){
var statearr_36792_36836 = state_36752__$1;
(statearr_36792_36836[(1)] = (30));

} else {
var statearr_36793_36837 = state_36752__$1;
(statearr_36793_36837[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (16))){
var inst_36688 = (state_36752[(2)]);
var inst_36689 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36690 = figwheel.client.heads_up.display_exception.call(null,inst_36689);
var state_36752__$1 = (function (){var statearr_36794 = state_36752;
(statearr_36794[(13)] = inst_36688);

return statearr_36794;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36752__$1,(17),inst_36690);
} else {
if((state_val_36753 === (30))){
var inst_36724 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36725 = figwheel.client.heads_up.display_warning.call(null,inst_36724);
var state_36752__$1 = state_36752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36752__$1,(33),inst_36725);
} else {
if((state_val_36753 === (10))){
var inst_36682 = (state_36752[(2)]);
var state_36752__$1 = state_36752;
var statearr_36795_36838 = state_36752__$1;
(statearr_36795_36838[(2)] = inst_36682);

(statearr_36795_36838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (18))){
var inst_36698 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36699 = figwheel.client.heads_up.display_exception.call(null,inst_36698);
var state_36752__$1 = state_36752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36752__$1,(21),inst_36699);
} else {
if((state_val_36753 === (37))){
var inst_36735 = (state_36752[(2)]);
var state_36752__$1 = state_36752;
var statearr_36796_36839 = state_36752__$1;
(statearr_36796_36839[(2)] = inst_36735);

(statearr_36796_36839[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (8))){
var inst_36674 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36752__$1 = state_36752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36752__$1,(11),inst_36674);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29167__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29055__auto__,c__29167__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto____0 = (function (){
var statearr_36800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36800[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto__);

(statearr_36800[(1)] = (1));

return statearr_36800;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto____1 = (function (state_36752){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_36752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e36801){if((e36801 instanceof Object)){
var ex__29059__auto__ = e36801;
var statearr_36802_36840 = state_36752;
(statearr_36802_36840[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36841 = state_36752;
state_36752 = G__36841;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto__ = function(state_36752){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto____1.call(this,state_36752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__,msg_hist,msg_names,msg))
})();
var state__29169__auto__ = (function (){var statearr_36803 = f__29168__auto__.call(null);
(statearr_36803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_36803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__,msg_hist,msg_names,msg))
);

return c__29167__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29167__auto___36904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___36904,ch){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___36904,ch){
return (function (state_36887){
var state_val_36888 = (state_36887[(1)]);
if((state_val_36888 === (1))){
var state_36887__$1 = state_36887;
var statearr_36889_36905 = state_36887__$1;
(statearr_36889_36905[(2)] = null);

(statearr_36889_36905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (2))){
var state_36887__$1 = state_36887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36887__$1,(4),ch);
} else {
if((state_val_36888 === (3))){
var inst_36885 = (state_36887[(2)]);
var state_36887__$1 = state_36887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36887__$1,inst_36885);
} else {
if((state_val_36888 === (4))){
var inst_36875 = (state_36887[(7)]);
var inst_36875__$1 = (state_36887[(2)]);
var state_36887__$1 = (function (){var statearr_36890 = state_36887;
(statearr_36890[(7)] = inst_36875__$1);

return statearr_36890;
})();
if(cljs.core.truth_(inst_36875__$1)){
var statearr_36891_36906 = state_36887__$1;
(statearr_36891_36906[(1)] = (5));

} else {
var statearr_36892_36907 = state_36887__$1;
(statearr_36892_36907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (5))){
var inst_36875 = (state_36887[(7)]);
var inst_36877 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36875);
var state_36887__$1 = state_36887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36887__$1,(8),inst_36877);
} else {
if((state_val_36888 === (6))){
var state_36887__$1 = state_36887;
var statearr_36893_36908 = state_36887__$1;
(statearr_36893_36908[(2)] = null);

(statearr_36893_36908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (7))){
var inst_36883 = (state_36887[(2)]);
var state_36887__$1 = state_36887;
var statearr_36894_36909 = state_36887__$1;
(statearr_36894_36909[(2)] = inst_36883);

(statearr_36894_36909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (8))){
var inst_36879 = (state_36887[(2)]);
var state_36887__$1 = (function (){var statearr_36895 = state_36887;
(statearr_36895[(8)] = inst_36879);

return statearr_36895;
})();
var statearr_36896_36910 = state_36887__$1;
(statearr_36896_36910[(2)] = null);

(statearr_36896_36910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__29167__auto___36904,ch))
;
return ((function (switch__29055__auto__,c__29167__auto___36904,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29056__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29056__auto____0 = (function (){
var statearr_36900 = [null,null,null,null,null,null,null,null,null];
(statearr_36900[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29056__auto__);

(statearr_36900[(1)] = (1));

return statearr_36900;
});
var figwheel$client$heads_up_plugin_$_state_machine__29056__auto____1 = (function (state_36887){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_36887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e36901){if((e36901 instanceof Object)){
var ex__29059__auto__ = e36901;
var statearr_36902_36911 = state_36887;
(statearr_36902_36911[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36912 = state_36887;
state_36887 = G__36912;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29056__auto__ = function(state_36887){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29056__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29056__auto____1.call(this,state_36887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29056__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29056__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___36904,ch))
})();
var state__29169__auto__ = (function (){var statearr_36903 = f__29168__auto__.call(null);
(statearr_36903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___36904);

return statearr_36903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___36904,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__){
return (function (state_36933){
var state_val_36934 = (state_36933[(1)]);
if((state_val_36934 === (1))){
var inst_36928 = cljs.core.async.timeout.call(null,(3000));
var state_36933__$1 = state_36933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36933__$1,(2),inst_36928);
} else {
if((state_val_36934 === (2))){
var inst_36930 = (state_36933[(2)]);
var inst_36931 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36933__$1 = (function (){var statearr_36935 = state_36933;
(statearr_36935[(7)] = inst_36930);

return statearr_36935;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36933__$1,inst_36931);
} else {
return null;
}
}
});})(c__29167__auto__))
;
return ((function (switch__29055__auto__,c__29167__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29056__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29056__auto____0 = (function (){
var statearr_36939 = [null,null,null,null,null,null,null,null];
(statearr_36939[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29056__auto__);

(statearr_36939[(1)] = (1));

return statearr_36939;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29056__auto____1 = (function (state_36933){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_36933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e36940){if((e36940 instanceof Object)){
var ex__29059__auto__ = e36940;
var statearr_36941_36943 = state_36933;
(statearr_36941_36943[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36944 = state_36933;
state_36933 = G__36944;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29056__auto__ = function(state_36933){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29056__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29056__auto____1.call(this,state_36933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29056__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29056__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__))
})();
var state__29169__auto__ = (function (){var statearr_36942 = f__29168__auto__.call(null);
(statearr_36942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_36942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__))
);

return c__29167__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36967){
var state_val_36968 = (state_36967[(1)]);
if((state_val_36968 === (1))){
var inst_36961 = cljs.core.async.timeout.call(null,(2000));
var state_36967__$1 = state_36967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36967__$1,(2),inst_36961);
} else {
if((state_val_36968 === (2))){
var inst_36963 = (state_36967[(2)]);
var inst_36964 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36965 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36964);
var state_36967__$1 = (function (){var statearr_36969 = state_36967;
(statearr_36969[(7)] = inst_36963);

return statearr_36969;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36967__$1,inst_36965);
} else {
return null;
}
}
});})(c__29167__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29055__auto__,c__29167__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto____0 = (function (){
var statearr_36973 = [null,null,null,null,null,null,null,null];
(statearr_36973[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto__);

(statearr_36973[(1)] = (1));

return statearr_36973;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto____1 = (function (state_36967){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_36967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e36974){if((e36974 instanceof Object)){
var ex__29059__auto__ = e36974;
var statearr_36975_36977 = state_36967;
(statearr_36975_36977[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36978 = state_36967;
state_36967 = G__36978;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto__ = function(state_36967){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto____1.call(this,state_36967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29169__auto__ = (function (){var statearr_36976 = f__29168__auto__.call(null);
(statearr_36976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_36976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__,figwheel_version,temp__4657__auto__))
);

return c__29167__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36979){
var map__36983 = p__36979;
var map__36983__$1 = ((((!((map__36983 == null)))?((((map__36983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36983):map__36983);
var file = cljs.core.get.call(null,map__36983__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36983__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36983__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36985 = "";
var G__36985__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__36985),cljs.core.str("file "),cljs.core.str(file)].join(''):G__36985);
var G__36985__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__36985__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__36985__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = line;
if(cljs.core.truth_(and__25967__auto__)){
return column;
} else {
return and__25967__auto__;
}
})())){
return [cljs.core.str(G__36985__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__36985__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36986){
var map__36993 = p__36986;
var map__36993__$1 = ((((!((map__36993 == null)))?((((map__36993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36993):map__36993);
var ed = map__36993__$1;
var formatted_exception = cljs.core.get.call(null,map__36993__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36993__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36993__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36995_36999 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36996_37000 = null;
var count__36997_37001 = (0);
var i__36998_37002 = (0);
while(true){
if((i__36998_37002 < count__36997_37001)){
var msg_37003 = cljs.core._nth.call(null,chunk__36996_37000,i__36998_37002);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37003);

var G__37004 = seq__36995_36999;
var G__37005 = chunk__36996_37000;
var G__37006 = count__36997_37001;
var G__37007 = (i__36998_37002 + (1));
seq__36995_36999 = G__37004;
chunk__36996_37000 = G__37005;
count__36997_37001 = G__37006;
i__36998_37002 = G__37007;
continue;
} else {
var temp__4657__auto___37008 = cljs.core.seq.call(null,seq__36995_36999);
if(temp__4657__auto___37008){
var seq__36995_37009__$1 = temp__4657__auto___37008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36995_37009__$1)){
var c__26790__auto___37010 = cljs.core.chunk_first.call(null,seq__36995_37009__$1);
var G__37011 = cljs.core.chunk_rest.call(null,seq__36995_37009__$1);
var G__37012 = c__26790__auto___37010;
var G__37013 = cljs.core.count.call(null,c__26790__auto___37010);
var G__37014 = (0);
seq__36995_36999 = G__37011;
chunk__36996_37000 = G__37012;
count__36997_37001 = G__37013;
i__36998_37002 = G__37014;
continue;
} else {
var msg_37015 = cljs.core.first.call(null,seq__36995_37009__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37015);

var G__37016 = cljs.core.next.call(null,seq__36995_37009__$1);
var G__37017 = null;
var G__37018 = (0);
var G__37019 = (0);
seq__36995_36999 = G__37016;
chunk__36996_37000 = G__37017;
count__36997_37001 = G__37018;
i__36998_37002 = G__37019;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37020){
var map__37023 = p__37020;
var map__37023__$1 = ((((!((map__37023 == null)))?((((map__37023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37023):map__37023);
var w = map__37023__$1;
var message = cljs.core.get.call(null,map__37023__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25967__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25967__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37035 = cljs.core.seq.call(null,plugins);
var chunk__37036 = null;
var count__37037 = (0);
var i__37038 = (0);
while(true){
if((i__37038 < count__37037)){
var vec__37039 = cljs.core._nth.call(null,chunk__37036,i__37038);
var k = cljs.core.nth.call(null,vec__37039,(0),null);
var plugin = cljs.core.nth.call(null,vec__37039,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37045 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37035,chunk__37036,count__37037,i__37038,pl_37045,vec__37039,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37045.call(null,msg_hist);
});})(seq__37035,chunk__37036,count__37037,i__37038,pl_37045,vec__37039,k,plugin))
);
} else {
}

var G__37046 = seq__37035;
var G__37047 = chunk__37036;
var G__37048 = count__37037;
var G__37049 = (i__37038 + (1));
seq__37035 = G__37046;
chunk__37036 = G__37047;
count__37037 = G__37048;
i__37038 = G__37049;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37035);
if(temp__4657__auto__){
var seq__37035__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37035__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__37035__$1);
var G__37050 = cljs.core.chunk_rest.call(null,seq__37035__$1);
var G__37051 = c__26790__auto__;
var G__37052 = cljs.core.count.call(null,c__26790__auto__);
var G__37053 = (0);
seq__37035 = G__37050;
chunk__37036 = G__37051;
count__37037 = G__37052;
i__37038 = G__37053;
continue;
} else {
var vec__37042 = cljs.core.first.call(null,seq__37035__$1);
var k = cljs.core.nth.call(null,vec__37042,(0),null);
var plugin = cljs.core.nth.call(null,vec__37042,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37054 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37035,chunk__37036,count__37037,i__37038,pl_37054,vec__37042,k,plugin,seq__37035__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37054.call(null,msg_hist);
});})(seq__37035,chunk__37036,count__37037,i__37038,pl_37054,vec__37042,k,plugin,seq__37035__$1,temp__4657__auto__))
);
} else {
}

var G__37055 = cljs.core.next.call(null,seq__37035__$1);
var G__37056 = null;
var G__37057 = (0);
var G__37058 = (0);
seq__37035 = G__37055;
chunk__37036 = G__37056;
count__37037 = G__37057;
i__37038 = G__37058;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37059 = [];
var len__27054__auto___37066 = arguments.length;
var i__27055__auto___37067 = (0);
while(true){
if((i__27055__auto___37067 < len__27054__auto___37066)){
args37059.push((arguments[i__27055__auto___37067]));

var G__37068 = (i__27055__auto___37067 + (1));
i__27055__auto___37067 = G__37068;
continue;
} else {
}
break;
}

var G__37061 = args37059.length;
switch (G__37061) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37059.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37062_37070 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37063_37071 = null;
var count__37064_37072 = (0);
var i__37065_37073 = (0);
while(true){
if((i__37065_37073 < count__37064_37072)){
var msg_37074 = cljs.core._nth.call(null,chunk__37063_37071,i__37065_37073);
figwheel.client.socket.handle_incoming_message.call(null,msg_37074);

var G__37075 = seq__37062_37070;
var G__37076 = chunk__37063_37071;
var G__37077 = count__37064_37072;
var G__37078 = (i__37065_37073 + (1));
seq__37062_37070 = G__37075;
chunk__37063_37071 = G__37076;
count__37064_37072 = G__37077;
i__37065_37073 = G__37078;
continue;
} else {
var temp__4657__auto___37079 = cljs.core.seq.call(null,seq__37062_37070);
if(temp__4657__auto___37079){
var seq__37062_37080__$1 = temp__4657__auto___37079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37062_37080__$1)){
var c__26790__auto___37081 = cljs.core.chunk_first.call(null,seq__37062_37080__$1);
var G__37082 = cljs.core.chunk_rest.call(null,seq__37062_37080__$1);
var G__37083 = c__26790__auto___37081;
var G__37084 = cljs.core.count.call(null,c__26790__auto___37081);
var G__37085 = (0);
seq__37062_37070 = G__37082;
chunk__37063_37071 = G__37083;
count__37064_37072 = G__37084;
i__37065_37073 = G__37085;
continue;
} else {
var msg_37086 = cljs.core.first.call(null,seq__37062_37080__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37086);

var G__37087 = cljs.core.next.call(null,seq__37062_37080__$1);
var G__37088 = null;
var G__37089 = (0);
var G__37090 = (0);
seq__37062_37070 = G__37087;
chunk__37063_37071 = G__37088;
count__37064_37072 = G__37089;
i__37065_37073 = G__37090;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37095 = arguments.length;
var i__27055__auto___37096 = (0);
while(true){
if((i__27055__auto___37096 < len__27054__auto___37095)){
args__27061__auto__.push((arguments[i__27055__auto___37096]));

var G__37097 = (i__27055__auto___37096 + (1));
i__27055__auto___37096 = G__37097;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37092){
var map__37093 = p__37092;
var map__37093__$1 = ((((!((map__37093 == null)))?((((map__37093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37093):map__37093);
var opts = map__37093__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37091){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37091));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37099){if((e37099 instanceof Error)){
var e = e37099;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37099;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37103){
var map__37104 = p__37103;
var map__37104__$1 = ((((!((map__37104 == null)))?((((map__37104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37104):map__37104);
var msg_name = cljs.core.get.call(null,map__37104__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1496854391421