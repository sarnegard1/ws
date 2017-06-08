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
var args36254 = [];
var len__27054__auto___36257 = arguments.length;
var i__27055__auto___36258 = (0);
while(true){
if((i__27055__auto___36258 < len__27054__auto___36257)){
args36254.push((arguments[i__27055__auto___36258]));

var G__36259 = (i__27055__auto___36258 + (1));
i__27055__auto___36258 = G__36259;
continue;
} else {
}
break;
}

var G__36256 = args36254.length;
switch (G__36256) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36254.length)].join('')));

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
var len__27054__auto___36262 = arguments.length;
var i__27055__auto___36263 = (0);
while(true){
if((i__27055__auto___36263 < len__27054__auto___36262)){
args__27061__auto__.push((arguments[i__27055__auto___36263]));

var G__36264 = (i__27055__auto___36263 + (1));
i__27055__auto___36263 = G__36264;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36261){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36261));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___36266 = arguments.length;
var i__27055__auto___36267 = (0);
while(true){
if((i__27055__auto___36267 < len__27054__auto___36266)){
args__27061__auto__.push((arguments[i__27055__auto___36267]));

var G__36268 = (i__27055__auto___36267 + (1));
i__27055__auto___36267 = G__36268;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36265){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36265));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36269){
var map__36272 = p__36269;
var map__36272__$1 = ((((!((map__36272 == null)))?((((map__36272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36272):map__36272);
var message = cljs.core.get.call(null,map__36272__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36272__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28886__auto___36434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto___36434,ch){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto___36434,ch){
return (function (state_36403){
var state_val_36404 = (state_36403[(1)]);
if((state_val_36404 === (7))){
var inst_36399 = (state_36403[(2)]);
var state_36403__$1 = state_36403;
var statearr_36405_36435 = state_36403__$1;
(statearr_36405_36435[(2)] = inst_36399);

(statearr_36405_36435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (1))){
var state_36403__$1 = state_36403;
var statearr_36406_36436 = state_36403__$1;
(statearr_36406_36436[(2)] = null);

(statearr_36406_36436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (4))){
var inst_36356 = (state_36403[(7)]);
var inst_36356__$1 = (state_36403[(2)]);
var state_36403__$1 = (function (){var statearr_36407 = state_36403;
(statearr_36407[(7)] = inst_36356__$1);

return statearr_36407;
})();
if(cljs.core.truth_(inst_36356__$1)){
var statearr_36408_36437 = state_36403__$1;
(statearr_36408_36437[(1)] = (5));

} else {
var statearr_36409_36438 = state_36403__$1;
(statearr_36409_36438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (15))){
var inst_36363 = (state_36403[(8)]);
var inst_36378 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36363);
var inst_36379 = cljs.core.first.call(null,inst_36378);
var inst_36380 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36379);
var inst_36381 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36380)].join('');
var inst_36382 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36381);
var state_36403__$1 = state_36403;
var statearr_36410_36439 = state_36403__$1;
(statearr_36410_36439[(2)] = inst_36382);

(statearr_36410_36439[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (13))){
var inst_36387 = (state_36403[(2)]);
var state_36403__$1 = state_36403;
var statearr_36411_36440 = state_36403__$1;
(statearr_36411_36440[(2)] = inst_36387);

(statearr_36411_36440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (6))){
var state_36403__$1 = state_36403;
var statearr_36412_36441 = state_36403__$1;
(statearr_36412_36441[(2)] = null);

(statearr_36412_36441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (17))){
var inst_36385 = (state_36403[(2)]);
var state_36403__$1 = state_36403;
var statearr_36413_36442 = state_36403__$1;
(statearr_36413_36442[(2)] = inst_36385);

(statearr_36413_36442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (3))){
var inst_36401 = (state_36403[(2)]);
var state_36403__$1 = state_36403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36403__$1,inst_36401);
} else {
if((state_val_36404 === (12))){
var inst_36362 = (state_36403[(9)]);
var inst_36376 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36362,opts);
var state_36403__$1 = state_36403;
if(cljs.core.truth_(inst_36376)){
var statearr_36414_36443 = state_36403__$1;
(statearr_36414_36443[(1)] = (15));

} else {
var statearr_36415_36444 = state_36403__$1;
(statearr_36415_36444[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (2))){
var state_36403__$1 = state_36403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36403__$1,(4),ch);
} else {
if((state_val_36404 === (11))){
var inst_36363 = (state_36403[(8)]);
var inst_36368 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36369 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36363);
var inst_36370 = cljs.core.async.timeout.call(null,(1000));
var inst_36371 = [inst_36369,inst_36370];
var inst_36372 = (new cljs.core.PersistentVector(null,2,(5),inst_36368,inst_36371,null));
var state_36403__$1 = state_36403;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36403__$1,(14),inst_36372);
} else {
if((state_val_36404 === (9))){
var inst_36363 = (state_36403[(8)]);
var inst_36389 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36390 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36363);
var inst_36391 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36390);
var inst_36392 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36391)].join('');
var inst_36393 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36392);
var state_36403__$1 = (function (){var statearr_36416 = state_36403;
(statearr_36416[(10)] = inst_36389);

return statearr_36416;
})();
var statearr_36417_36445 = state_36403__$1;
(statearr_36417_36445[(2)] = inst_36393);

(statearr_36417_36445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (5))){
var inst_36356 = (state_36403[(7)]);
var inst_36358 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36359 = (new cljs.core.PersistentArrayMap(null,2,inst_36358,null));
var inst_36360 = (new cljs.core.PersistentHashSet(null,inst_36359,null));
var inst_36361 = figwheel.client.focus_msgs.call(null,inst_36360,inst_36356);
var inst_36362 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36361);
var inst_36363 = cljs.core.first.call(null,inst_36361);
var inst_36364 = figwheel.client.autoload_QMARK_.call(null);
var state_36403__$1 = (function (){var statearr_36418 = state_36403;
(statearr_36418[(8)] = inst_36363);

(statearr_36418[(9)] = inst_36362);

return statearr_36418;
})();
if(cljs.core.truth_(inst_36364)){
var statearr_36419_36446 = state_36403__$1;
(statearr_36419_36446[(1)] = (8));

} else {
var statearr_36420_36447 = state_36403__$1;
(statearr_36420_36447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (14))){
var inst_36374 = (state_36403[(2)]);
var state_36403__$1 = state_36403;
var statearr_36421_36448 = state_36403__$1;
(statearr_36421_36448[(2)] = inst_36374);

(statearr_36421_36448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (16))){
var state_36403__$1 = state_36403;
var statearr_36422_36449 = state_36403__$1;
(statearr_36422_36449[(2)] = null);

(statearr_36422_36449[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (10))){
var inst_36395 = (state_36403[(2)]);
var state_36403__$1 = (function (){var statearr_36423 = state_36403;
(statearr_36423[(11)] = inst_36395);

return statearr_36423;
})();
var statearr_36424_36450 = state_36403__$1;
(statearr_36424_36450[(2)] = null);

(statearr_36424_36450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (8))){
var inst_36362 = (state_36403[(9)]);
var inst_36366 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36362,opts);
var state_36403__$1 = state_36403;
if(cljs.core.truth_(inst_36366)){
var statearr_36425_36451 = state_36403__$1;
(statearr_36425_36451[(1)] = (11));

} else {
var statearr_36426_36452 = state_36403__$1;
(statearr_36426_36452[(1)] = (12));

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
});})(c__28886__auto___36434,ch))
;
return ((function (switch__28774__auto__,c__28886__auto___36434,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28775__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28775__auto____0 = (function (){
var statearr_36430 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36430[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28775__auto__);

(statearr_36430[(1)] = (1));

return statearr_36430;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28775__auto____1 = (function (state_36403){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_36403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e36431){if((e36431 instanceof Object)){
var ex__28778__auto__ = e36431;
var statearr_36432_36453 = state_36403;
(statearr_36432_36453[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36454 = state_36403;
state_36403 = G__36454;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28775__auto__ = function(state_36403){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28775__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28775__auto____1.call(this,state_36403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28775__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28775__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto___36434,ch))
})();
var state__28888__auto__ = (function (){var statearr_36433 = f__28887__auto__.call(null);
(statearr_36433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___36434);

return statearr_36433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto___36434,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36455_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36455_SHARP_));
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
var base_path_36458 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36458){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36457){if((e36457 instanceof Error)){
var e = e36457;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36458], null));
} else {
var e = e36457;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36458))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36459){
var map__36468 = p__36459;
var map__36468__$1 = ((((!((map__36468 == null)))?((((map__36468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36468):map__36468);
var opts = map__36468__$1;
var build_id = cljs.core.get.call(null,map__36468__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36468,map__36468__$1,opts,build_id){
return (function (p__36470){
var vec__36471 = p__36470;
var seq__36472 = cljs.core.seq.call(null,vec__36471);
var first__36473 = cljs.core.first.call(null,seq__36472);
var seq__36472__$1 = cljs.core.next.call(null,seq__36472);
var map__36474 = first__36473;
var map__36474__$1 = ((((!((map__36474 == null)))?((((map__36474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36474):map__36474);
var msg = map__36474__$1;
var msg_name = cljs.core.get.call(null,map__36474__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36472__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36471,seq__36472,first__36473,seq__36472__$1,map__36474,map__36474__$1,msg,msg_name,_,map__36468,map__36468__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36471,seq__36472,first__36473,seq__36472__$1,map__36474,map__36474__$1,msg,msg_name,_,map__36468,map__36468__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36468,map__36468__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36482){
var vec__36483 = p__36482;
var seq__36484 = cljs.core.seq.call(null,vec__36483);
var first__36485 = cljs.core.first.call(null,seq__36484);
var seq__36484__$1 = cljs.core.next.call(null,seq__36484);
var map__36486 = first__36485;
var map__36486__$1 = ((((!((map__36486 == null)))?((((map__36486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36486):map__36486);
var msg = map__36486__$1;
var msg_name = cljs.core.get.call(null,map__36486__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36484__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36488){
var map__36500 = p__36488;
var map__36500__$1 = ((((!((map__36500 == null)))?((((map__36500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36500):map__36500);
var on_compile_warning = cljs.core.get.call(null,map__36500__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36500__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36500,map__36500__$1,on_compile_warning,on_compile_fail){
return (function (p__36502){
var vec__36503 = p__36502;
var seq__36504 = cljs.core.seq.call(null,vec__36503);
var first__36505 = cljs.core.first.call(null,seq__36504);
var seq__36504__$1 = cljs.core.next.call(null,seq__36504);
var map__36506 = first__36505;
var map__36506__$1 = ((((!((map__36506 == null)))?((((map__36506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36506):map__36506);
var msg = map__36506__$1;
var msg_name = cljs.core.get.call(null,map__36506__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36504__$1;
var pred__36508 = cljs.core._EQ_;
var expr__36509 = msg_name;
if(cljs.core.truth_(pred__36508.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36509))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36508.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36509))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36500,map__36500__$1,on_compile_warning,on_compile_fail))
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
var c__28886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto__,msg_hist,msg_names,msg){
return (function (state_36737){
var state_val_36738 = (state_36737[(1)]);
if((state_val_36738 === (7))){
var inst_36657 = (state_36737[(2)]);
var state_36737__$1 = state_36737;
if(cljs.core.truth_(inst_36657)){
var statearr_36739_36789 = state_36737__$1;
(statearr_36739_36789[(1)] = (8));

} else {
var statearr_36740_36790 = state_36737__$1;
(statearr_36740_36790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (20))){
var inst_36731 = (state_36737[(2)]);
var state_36737__$1 = state_36737;
var statearr_36741_36791 = state_36737__$1;
(statearr_36741_36791[(2)] = inst_36731);

(statearr_36741_36791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (27))){
var inst_36727 = (state_36737[(2)]);
var state_36737__$1 = state_36737;
var statearr_36742_36792 = state_36737__$1;
(statearr_36742_36792[(2)] = inst_36727);

(statearr_36742_36792[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (1))){
var inst_36650 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36737__$1 = state_36737;
if(cljs.core.truth_(inst_36650)){
var statearr_36743_36793 = state_36737__$1;
(statearr_36743_36793[(1)] = (2));

} else {
var statearr_36744_36794 = state_36737__$1;
(statearr_36744_36794[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (24))){
var inst_36729 = (state_36737[(2)]);
var state_36737__$1 = state_36737;
var statearr_36745_36795 = state_36737__$1;
(statearr_36745_36795[(2)] = inst_36729);

(statearr_36745_36795[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (4))){
var inst_36735 = (state_36737[(2)]);
var state_36737__$1 = state_36737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36737__$1,inst_36735);
} else {
if((state_val_36738 === (15))){
var inst_36733 = (state_36737[(2)]);
var state_36737__$1 = state_36737;
var statearr_36746_36796 = state_36737__$1;
(statearr_36746_36796[(2)] = inst_36733);

(statearr_36746_36796[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (21))){
var inst_36686 = (state_36737[(2)]);
var inst_36687 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36688 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36687);
var state_36737__$1 = (function (){var statearr_36747 = state_36737;
(statearr_36747[(7)] = inst_36686);

return statearr_36747;
})();
var statearr_36748_36797 = state_36737__$1;
(statearr_36748_36797[(2)] = inst_36688);

(statearr_36748_36797[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (31))){
var inst_36716 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36737__$1 = state_36737;
if(cljs.core.truth_(inst_36716)){
var statearr_36749_36798 = state_36737__$1;
(statearr_36749_36798[(1)] = (34));

} else {
var statearr_36750_36799 = state_36737__$1;
(statearr_36750_36799[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (32))){
var inst_36725 = (state_36737[(2)]);
var state_36737__$1 = state_36737;
var statearr_36751_36800 = state_36737__$1;
(statearr_36751_36800[(2)] = inst_36725);

(statearr_36751_36800[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (33))){
var inst_36712 = (state_36737[(2)]);
var inst_36713 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36714 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36713);
var state_36737__$1 = (function (){var statearr_36752 = state_36737;
(statearr_36752[(8)] = inst_36712);

return statearr_36752;
})();
var statearr_36753_36801 = state_36737__$1;
(statearr_36753_36801[(2)] = inst_36714);

(statearr_36753_36801[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (13))){
var inst_36671 = figwheel.client.heads_up.clear.call(null);
var state_36737__$1 = state_36737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36737__$1,(16),inst_36671);
} else {
if((state_val_36738 === (22))){
var inst_36692 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36693 = figwheel.client.heads_up.append_warning_message.call(null,inst_36692);
var state_36737__$1 = state_36737;
var statearr_36754_36802 = state_36737__$1;
(statearr_36754_36802[(2)] = inst_36693);

(statearr_36754_36802[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (36))){
var inst_36723 = (state_36737[(2)]);
var state_36737__$1 = state_36737;
var statearr_36755_36803 = state_36737__$1;
(statearr_36755_36803[(2)] = inst_36723);

(statearr_36755_36803[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (29))){
var inst_36703 = (state_36737[(2)]);
var inst_36704 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36705 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36704);
var state_36737__$1 = (function (){var statearr_36756 = state_36737;
(statearr_36756[(9)] = inst_36703);

return statearr_36756;
})();
var statearr_36757_36804 = state_36737__$1;
(statearr_36757_36804[(2)] = inst_36705);

(statearr_36757_36804[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (6))){
var inst_36652 = (state_36737[(10)]);
var state_36737__$1 = state_36737;
var statearr_36758_36805 = state_36737__$1;
(statearr_36758_36805[(2)] = inst_36652);

(statearr_36758_36805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (28))){
var inst_36699 = (state_36737[(2)]);
var inst_36700 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36701 = figwheel.client.heads_up.display_warning.call(null,inst_36700);
var state_36737__$1 = (function (){var statearr_36759 = state_36737;
(statearr_36759[(11)] = inst_36699);

return statearr_36759;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36737__$1,(29),inst_36701);
} else {
if((state_val_36738 === (25))){
var inst_36697 = figwheel.client.heads_up.clear.call(null);
var state_36737__$1 = state_36737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36737__$1,(28),inst_36697);
} else {
if((state_val_36738 === (34))){
var inst_36718 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36737__$1 = state_36737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36737__$1,(37),inst_36718);
} else {
if((state_val_36738 === (17))){
var inst_36677 = (state_36737[(2)]);
var inst_36678 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36679 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36678);
var state_36737__$1 = (function (){var statearr_36760 = state_36737;
(statearr_36760[(12)] = inst_36677);

return statearr_36760;
})();
var statearr_36761_36806 = state_36737__$1;
(statearr_36761_36806[(2)] = inst_36679);

(statearr_36761_36806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (3))){
var inst_36669 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36737__$1 = state_36737;
if(cljs.core.truth_(inst_36669)){
var statearr_36762_36807 = state_36737__$1;
(statearr_36762_36807[(1)] = (13));

} else {
var statearr_36763_36808 = state_36737__$1;
(statearr_36763_36808[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (12))){
var inst_36665 = (state_36737[(2)]);
var state_36737__$1 = state_36737;
var statearr_36764_36809 = state_36737__$1;
(statearr_36764_36809[(2)] = inst_36665);

(statearr_36764_36809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (2))){
var inst_36652 = (state_36737[(10)]);
var inst_36652__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36737__$1 = (function (){var statearr_36765 = state_36737;
(statearr_36765[(10)] = inst_36652__$1);

return statearr_36765;
})();
if(cljs.core.truth_(inst_36652__$1)){
var statearr_36766_36810 = state_36737__$1;
(statearr_36766_36810[(1)] = (5));

} else {
var statearr_36767_36811 = state_36737__$1;
(statearr_36767_36811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (23))){
var inst_36695 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36737__$1 = state_36737;
if(cljs.core.truth_(inst_36695)){
var statearr_36768_36812 = state_36737__$1;
(statearr_36768_36812[(1)] = (25));

} else {
var statearr_36769_36813 = state_36737__$1;
(statearr_36769_36813[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (35))){
var state_36737__$1 = state_36737;
var statearr_36770_36814 = state_36737__$1;
(statearr_36770_36814[(2)] = null);

(statearr_36770_36814[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (19))){
var inst_36690 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36737__$1 = state_36737;
if(cljs.core.truth_(inst_36690)){
var statearr_36771_36815 = state_36737__$1;
(statearr_36771_36815[(1)] = (22));

} else {
var statearr_36772_36816 = state_36737__$1;
(statearr_36772_36816[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (11))){
var inst_36661 = (state_36737[(2)]);
var state_36737__$1 = state_36737;
var statearr_36773_36817 = state_36737__$1;
(statearr_36773_36817[(2)] = inst_36661);

(statearr_36773_36817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (9))){
var inst_36663 = figwheel.client.heads_up.clear.call(null);
var state_36737__$1 = state_36737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36737__$1,(12),inst_36663);
} else {
if((state_val_36738 === (5))){
var inst_36654 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36737__$1 = state_36737;
var statearr_36774_36818 = state_36737__$1;
(statearr_36774_36818[(2)] = inst_36654);

(statearr_36774_36818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (14))){
var inst_36681 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36737__$1 = state_36737;
if(cljs.core.truth_(inst_36681)){
var statearr_36775_36819 = state_36737__$1;
(statearr_36775_36819[(1)] = (18));

} else {
var statearr_36776_36820 = state_36737__$1;
(statearr_36776_36820[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (26))){
var inst_36707 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36737__$1 = state_36737;
if(cljs.core.truth_(inst_36707)){
var statearr_36777_36821 = state_36737__$1;
(statearr_36777_36821[(1)] = (30));

} else {
var statearr_36778_36822 = state_36737__$1;
(statearr_36778_36822[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (16))){
var inst_36673 = (state_36737[(2)]);
var inst_36674 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36675 = figwheel.client.heads_up.display_exception.call(null,inst_36674);
var state_36737__$1 = (function (){var statearr_36779 = state_36737;
(statearr_36779[(13)] = inst_36673);

return statearr_36779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36737__$1,(17),inst_36675);
} else {
if((state_val_36738 === (30))){
var inst_36709 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36710 = figwheel.client.heads_up.display_warning.call(null,inst_36709);
var state_36737__$1 = state_36737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36737__$1,(33),inst_36710);
} else {
if((state_val_36738 === (10))){
var inst_36667 = (state_36737[(2)]);
var state_36737__$1 = state_36737;
var statearr_36780_36823 = state_36737__$1;
(statearr_36780_36823[(2)] = inst_36667);

(statearr_36780_36823[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (18))){
var inst_36683 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36684 = figwheel.client.heads_up.display_exception.call(null,inst_36683);
var state_36737__$1 = state_36737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36737__$1,(21),inst_36684);
} else {
if((state_val_36738 === (37))){
var inst_36720 = (state_36737[(2)]);
var state_36737__$1 = state_36737;
var statearr_36781_36824 = state_36737__$1;
(statearr_36781_36824[(2)] = inst_36720);

(statearr_36781_36824[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (8))){
var inst_36659 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36737__$1 = state_36737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36737__$1,(11),inst_36659);
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
});})(c__28886__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28774__auto__,c__28886__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28775__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28775__auto____0 = (function (){
var statearr_36785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36785[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28775__auto__);

(statearr_36785[(1)] = (1));

return statearr_36785;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28775__auto____1 = (function (state_36737){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_36737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e36786){if((e36786 instanceof Object)){
var ex__28778__auto__ = e36786;
var statearr_36787_36825 = state_36737;
(statearr_36787_36825[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36826 = state_36737;
state_36737 = G__36826;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28775__auto__ = function(state_36737){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28775__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28775__auto____1.call(this,state_36737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28775__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28775__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto__,msg_hist,msg_names,msg))
})();
var state__28888__auto__ = (function (){var statearr_36788 = f__28887__auto__.call(null);
(statearr_36788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto__);

return statearr_36788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto__,msg_hist,msg_names,msg))
);

return c__28886__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28886__auto___36889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto___36889,ch){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto___36889,ch){
return (function (state_36872){
var state_val_36873 = (state_36872[(1)]);
if((state_val_36873 === (1))){
var state_36872__$1 = state_36872;
var statearr_36874_36890 = state_36872__$1;
(statearr_36874_36890[(2)] = null);

(statearr_36874_36890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (2))){
var state_36872__$1 = state_36872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36872__$1,(4),ch);
} else {
if((state_val_36873 === (3))){
var inst_36870 = (state_36872[(2)]);
var state_36872__$1 = state_36872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36872__$1,inst_36870);
} else {
if((state_val_36873 === (4))){
var inst_36860 = (state_36872[(7)]);
var inst_36860__$1 = (state_36872[(2)]);
var state_36872__$1 = (function (){var statearr_36875 = state_36872;
(statearr_36875[(7)] = inst_36860__$1);

return statearr_36875;
})();
if(cljs.core.truth_(inst_36860__$1)){
var statearr_36876_36891 = state_36872__$1;
(statearr_36876_36891[(1)] = (5));

} else {
var statearr_36877_36892 = state_36872__$1;
(statearr_36877_36892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (5))){
var inst_36860 = (state_36872[(7)]);
var inst_36862 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36860);
var state_36872__$1 = state_36872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36872__$1,(8),inst_36862);
} else {
if((state_val_36873 === (6))){
var state_36872__$1 = state_36872;
var statearr_36878_36893 = state_36872__$1;
(statearr_36878_36893[(2)] = null);

(statearr_36878_36893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (7))){
var inst_36868 = (state_36872[(2)]);
var state_36872__$1 = state_36872;
var statearr_36879_36894 = state_36872__$1;
(statearr_36879_36894[(2)] = inst_36868);

(statearr_36879_36894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (8))){
var inst_36864 = (state_36872[(2)]);
var state_36872__$1 = (function (){var statearr_36880 = state_36872;
(statearr_36880[(8)] = inst_36864);

return statearr_36880;
})();
var statearr_36881_36895 = state_36872__$1;
(statearr_36881_36895[(2)] = null);

(statearr_36881_36895[(1)] = (2));


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
});})(c__28886__auto___36889,ch))
;
return ((function (switch__28774__auto__,c__28886__auto___36889,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28775__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28775__auto____0 = (function (){
var statearr_36885 = [null,null,null,null,null,null,null,null,null];
(statearr_36885[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28775__auto__);

(statearr_36885[(1)] = (1));

return statearr_36885;
});
var figwheel$client$heads_up_plugin_$_state_machine__28775__auto____1 = (function (state_36872){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_36872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e36886){if((e36886 instanceof Object)){
var ex__28778__auto__ = e36886;
var statearr_36887_36896 = state_36872;
(statearr_36887_36896[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36897 = state_36872;
state_36872 = G__36897;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28775__auto__ = function(state_36872){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28775__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28775__auto____1.call(this,state_36872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28775__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28775__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto___36889,ch))
})();
var state__28888__auto__ = (function (){var statearr_36888 = f__28887__auto__.call(null);
(statearr_36888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___36889);

return statearr_36888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto___36889,ch))
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
var c__28886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto__){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto__){
return (function (state_36918){
var state_val_36919 = (state_36918[(1)]);
if((state_val_36919 === (1))){
var inst_36913 = cljs.core.async.timeout.call(null,(3000));
var state_36918__$1 = state_36918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36918__$1,(2),inst_36913);
} else {
if((state_val_36919 === (2))){
var inst_36915 = (state_36918[(2)]);
var inst_36916 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36918__$1 = (function (){var statearr_36920 = state_36918;
(statearr_36920[(7)] = inst_36915);

return statearr_36920;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36918__$1,inst_36916);
} else {
return null;
}
}
});})(c__28886__auto__))
;
return ((function (switch__28774__auto__,c__28886__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28775__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28775__auto____0 = (function (){
var statearr_36924 = [null,null,null,null,null,null,null,null];
(statearr_36924[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28775__auto__);

(statearr_36924[(1)] = (1));

return statearr_36924;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28775__auto____1 = (function (state_36918){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_36918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e36925){if((e36925 instanceof Object)){
var ex__28778__auto__ = e36925;
var statearr_36926_36928 = state_36918;
(statearr_36926_36928[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36929 = state_36918;
state_36918 = G__36929;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28775__auto__ = function(state_36918){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28775__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28775__auto____1.call(this,state_36918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28775__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28775__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto__))
})();
var state__28888__auto__ = (function (){var statearr_36927 = f__28887__auto__.call(null);
(statearr_36927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto__);

return statearr_36927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto__))
);

return c__28886__auto__;
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
var c__28886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36952){
var state_val_36953 = (state_36952[(1)]);
if((state_val_36953 === (1))){
var inst_36946 = cljs.core.async.timeout.call(null,(2000));
var state_36952__$1 = state_36952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36952__$1,(2),inst_36946);
} else {
if((state_val_36953 === (2))){
var inst_36948 = (state_36952[(2)]);
var inst_36949 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36950 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36949);
var state_36952__$1 = (function (){var statearr_36954 = state_36952;
(statearr_36954[(7)] = inst_36948);

return statearr_36954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36952__$1,inst_36950);
} else {
return null;
}
}
});})(c__28886__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28774__auto__,c__28886__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28775__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28775__auto____0 = (function (){
var statearr_36958 = [null,null,null,null,null,null,null,null];
(statearr_36958[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28775__auto__);

(statearr_36958[(1)] = (1));

return statearr_36958;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28775__auto____1 = (function (state_36952){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_36952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e36959){if((e36959 instanceof Object)){
var ex__28778__auto__ = e36959;
var statearr_36960_36962 = state_36952;
(statearr_36960_36962[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36963 = state_36952;
state_36952 = G__36963;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28775__auto__ = function(state_36952){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28775__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28775__auto____1.call(this,state_36952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28775__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28775__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28888__auto__ = (function (){var statearr_36961 = f__28887__auto__.call(null);
(statearr_36961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto__);

return statearr_36961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto__,figwheel_version,temp__4657__auto__))
);

return c__28886__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36964){
var map__36968 = p__36964;
var map__36968__$1 = ((((!((map__36968 == null)))?((((map__36968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36968):map__36968);
var file = cljs.core.get.call(null,map__36968__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36968__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36968__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36970 = "";
var G__36970__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__36970),cljs.core.str("file "),cljs.core.str(file)].join(''):G__36970);
var G__36970__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__36970__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__36970__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = line;
if(cljs.core.truth_(and__25967__auto__)){
return column;
} else {
return and__25967__auto__;
}
})())){
return [cljs.core.str(G__36970__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__36970__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36971){
var map__36978 = p__36971;
var map__36978__$1 = ((((!((map__36978 == null)))?((((map__36978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36978):map__36978);
var ed = map__36978__$1;
var formatted_exception = cljs.core.get.call(null,map__36978__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36978__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36978__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36980_36984 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36981_36985 = null;
var count__36982_36986 = (0);
var i__36983_36987 = (0);
while(true){
if((i__36983_36987 < count__36982_36986)){
var msg_36988 = cljs.core._nth.call(null,chunk__36981_36985,i__36983_36987);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36988);

var G__36989 = seq__36980_36984;
var G__36990 = chunk__36981_36985;
var G__36991 = count__36982_36986;
var G__36992 = (i__36983_36987 + (1));
seq__36980_36984 = G__36989;
chunk__36981_36985 = G__36990;
count__36982_36986 = G__36991;
i__36983_36987 = G__36992;
continue;
} else {
var temp__4657__auto___36993 = cljs.core.seq.call(null,seq__36980_36984);
if(temp__4657__auto___36993){
var seq__36980_36994__$1 = temp__4657__auto___36993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36980_36994__$1)){
var c__26790__auto___36995 = cljs.core.chunk_first.call(null,seq__36980_36994__$1);
var G__36996 = cljs.core.chunk_rest.call(null,seq__36980_36994__$1);
var G__36997 = c__26790__auto___36995;
var G__36998 = cljs.core.count.call(null,c__26790__auto___36995);
var G__36999 = (0);
seq__36980_36984 = G__36996;
chunk__36981_36985 = G__36997;
count__36982_36986 = G__36998;
i__36983_36987 = G__36999;
continue;
} else {
var msg_37000 = cljs.core.first.call(null,seq__36980_36994__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37000);

var G__37001 = cljs.core.next.call(null,seq__36980_36994__$1);
var G__37002 = null;
var G__37003 = (0);
var G__37004 = (0);
seq__36980_36984 = G__37001;
chunk__36981_36985 = G__37002;
count__36982_36986 = G__37003;
i__36983_36987 = G__37004;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37005){
var map__37008 = p__37005;
var map__37008__$1 = ((((!((map__37008 == null)))?((((map__37008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37008):map__37008);
var w = map__37008__$1;
var message = cljs.core.get.call(null,map__37008__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__37020 = cljs.core.seq.call(null,plugins);
var chunk__37021 = null;
var count__37022 = (0);
var i__37023 = (0);
while(true){
if((i__37023 < count__37022)){
var vec__37024 = cljs.core._nth.call(null,chunk__37021,i__37023);
var k = cljs.core.nth.call(null,vec__37024,(0),null);
var plugin = cljs.core.nth.call(null,vec__37024,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37030 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37020,chunk__37021,count__37022,i__37023,pl_37030,vec__37024,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37030.call(null,msg_hist);
});})(seq__37020,chunk__37021,count__37022,i__37023,pl_37030,vec__37024,k,plugin))
);
} else {
}

var G__37031 = seq__37020;
var G__37032 = chunk__37021;
var G__37033 = count__37022;
var G__37034 = (i__37023 + (1));
seq__37020 = G__37031;
chunk__37021 = G__37032;
count__37022 = G__37033;
i__37023 = G__37034;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37020);
if(temp__4657__auto__){
var seq__37020__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37020__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__37020__$1);
var G__37035 = cljs.core.chunk_rest.call(null,seq__37020__$1);
var G__37036 = c__26790__auto__;
var G__37037 = cljs.core.count.call(null,c__26790__auto__);
var G__37038 = (0);
seq__37020 = G__37035;
chunk__37021 = G__37036;
count__37022 = G__37037;
i__37023 = G__37038;
continue;
} else {
var vec__37027 = cljs.core.first.call(null,seq__37020__$1);
var k = cljs.core.nth.call(null,vec__37027,(0),null);
var plugin = cljs.core.nth.call(null,vec__37027,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37039 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37020,chunk__37021,count__37022,i__37023,pl_37039,vec__37027,k,plugin,seq__37020__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37039.call(null,msg_hist);
});})(seq__37020,chunk__37021,count__37022,i__37023,pl_37039,vec__37027,k,plugin,seq__37020__$1,temp__4657__auto__))
);
} else {
}

var G__37040 = cljs.core.next.call(null,seq__37020__$1);
var G__37041 = null;
var G__37042 = (0);
var G__37043 = (0);
seq__37020 = G__37040;
chunk__37021 = G__37041;
count__37022 = G__37042;
i__37023 = G__37043;
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
var args37044 = [];
var len__27054__auto___37051 = arguments.length;
var i__27055__auto___37052 = (0);
while(true){
if((i__27055__auto___37052 < len__27054__auto___37051)){
args37044.push((arguments[i__27055__auto___37052]));

var G__37053 = (i__27055__auto___37052 + (1));
i__27055__auto___37052 = G__37053;
continue;
} else {
}
break;
}

var G__37046 = args37044.length;
switch (G__37046) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37044.length)].join('')));

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

var seq__37047_37055 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37048_37056 = null;
var count__37049_37057 = (0);
var i__37050_37058 = (0);
while(true){
if((i__37050_37058 < count__37049_37057)){
var msg_37059 = cljs.core._nth.call(null,chunk__37048_37056,i__37050_37058);
figwheel.client.socket.handle_incoming_message.call(null,msg_37059);

var G__37060 = seq__37047_37055;
var G__37061 = chunk__37048_37056;
var G__37062 = count__37049_37057;
var G__37063 = (i__37050_37058 + (1));
seq__37047_37055 = G__37060;
chunk__37048_37056 = G__37061;
count__37049_37057 = G__37062;
i__37050_37058 = G__37063;
continue;
} else {
var temp__4657__auto___37064 = cljs.core.seq.call(null,seq__37047_37055);
if(temp__4657__auto___37064){
var seq__37047_37065__$1 = temp__4657__auto___37064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37047_37065__$1)){
var c__26790__auto___37066 = cljs.core.chunk_first.call(null,seq__37047_37065__$1);
var G__37067 = cljs.core.chunk_rest.call(null,seq__37047_37065__$1);
var G__37068 = c__26790__auto___37066;
var G__37069 = cljs.core.count.call(null,c__26790__auto___37066);
var G__37070 = (0);
seq__37047_37055 = G__37067;
chunk__37048_37056 = G__37068;
count__37049_37057 = G__37069;
i__37050_37058 = G__37070;
continue;
} else {
var msg_37071 = cljs.core.first.call(null,seq__37047_37065__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37071);

var G__37072 = cljs.core.next.call(null,seq__37047_37065__$1);
var G__37073 = null;
var G__37074 = (0);
var G__37075 = (0);
seq__37047_37055 = G__37072;
chunk__37048_37056 = G__37073;
count__37049_37057 = G__37074;
i__37050_37058 = G__37075;
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
var len__27054__auto___37080 = arguments.length;
var i__27055__auto___37081 = (0);
while(true){
if((i__27055__auto___37081 < len__27054__auto___37080)){
args__27061__auto__.push((arguments[i__27055__auto___37081]));

var G__37082 = (i__27055__auto___37081 + (1));
i__27055__auto___37081 = G__37082;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37077){
var map__37078 = p__37077;
var map__37078__$1 = ((((!((map__37078 == null)))?((((map__37078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37078):map__37078);
var opts = map__37078__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37076){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37076));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37084){if((e37084 instanceof Error)){
var e = e37084;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37084;

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
return (function (p__37088){
var map__37089 = p__37088;
var map__37089__$1 = ((((!((map__37089 == null)))?((((map__37089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37089):map__37089);
var msg_name = cljs.core.get.call(null,map__37089__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1496852858300