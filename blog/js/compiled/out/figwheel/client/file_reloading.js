// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25979__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25979__auto__){
return or__25979__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25979__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33498_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33498_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33503 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33504 = null;
var count__33505 = (0);
var i__33506 = (0);
while(true){
if((i__33506 < count__33505)){
var n = cljs.core._nth.call(null,chunk__33504,i__33506);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33507 = seq__33503;
var G__33508 = chunk__33504;
var G__33509 = count__33505;
var G__33510 = (i__33506 + (1));
seq__33503 = G__33507;
chunk__33504 = G__33508;
count__33505 = G__33509;
i__33506 = G__33510;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33503);
if(temp__4657__auto__){
var seq__33503__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33503__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__33503__$1);
var G__33511 = cljs.core.chunk_rest.call(null,seq__33503__$1);
var G__33512 = c__26790__auto__;
var G__33513 = cljs.core.count.call(null,c__26790__auto__);
var G__33514 = (0);
seq__33503 = G__33511;
chunk__33504 = G__33512;
count__33505 = G__33513;
i__33506 = G__33514;
continue;
} else {
var n = cljs.core.first.call(null,seq__33503__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33515 = cljs.core.next.call(null,seq__33503__$1);
var G__33516 = null;
var G__33517 = (0);
var G__33518 = (0);
seq__33503 = G__33515;
chunk__33504 = G__33516;
count__33505 = G__33517;
i__33506 = G__33518;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33569_33580 = cljs.core.seq.call(null,deps);
var chunk__33570_33581 = null;
var count__33571_33582 = (0);
var i__33572_33583 = (0);
while(true){
if((i__33572_33583 < count__33571_33582)){
var dep_33584 = cljs.core._nth.call(null,chunk__33570_33581,i__33572_33583);
topo_sort_helper_STAR_.call(null,dep_33584,(depth + (1)),state);

var G__33585 = seq__33569_33580;
var G__33586 = chunk__33570_33581;
var G__33587 = count__33571_33582;
var G__33588 = (i__33572_33583 + (1));
seq__33569_33580 = G__33585;
chunk__33570_33581 = G__33586;
count__33571_33582 = G__33587;
i__33572_33583 = G__33588;
continue;
} else {
var temp__4657__auto___33589 = cljs.core.seq.call(null,seq__33569_33580);
if(temp__4657__auto___33589){
var seq__33569_33590__$1 = temp__4657__auto___33589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33569_33590__$1)){
var c__26790__auto___33591 = cljs.core.chunk_first.call(null,seq__33569_33590__$1);
var G__33592 = cljs.core.chunk_rest.call(null,seq__33569_33590__$1);
var G__33593 = c__26790__auto___33591;
var G__33594 = cljs.core.count.call(null,c__26790__auto___33591);
var G__33595 = (0);
seq__33569_33580 = G__33592;
chunk__33570_33581 = G__33593;
count__33571_33582 = G__33594;
i__33572_33583 = G__33595;
continue;
} else {
var dep_33596 = cljs.core.first.call(null,seq__33569_33590__$1);
topo_sort_helper_STAR_.call(null,dep_33596,(depth + (1)),state);

var G__33597 = cljs.core.next.call(null,seq__33569_33590__$1);
var G__33598 = null;
var G__33599 = (0);
var G__33600 = (0);
seq__33569_33580 = G__33597;
chunk__33570_33581 = G__33598;
count__33571_33582 = G__33599;
i__33572_33583 = G__33600;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33573){
var vec__33577 = p__33573;
var seq__33578 = cljs.core.seq.call(null,vec__33577);
var first__33579 = cljs.core.first.call(null,seq__33578);
var seq__33578__$1 = cljs.core.next.call(null,seq__33578);
var x = first__33579;
var xs = seq__33578__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33577,seq__33578,first__33579,seq__33578__$1,x,xs,get_deps__$1){
return (function (p1__33519_SHARP_){
return clojure.set.difference.call(null,p1__33519_SHARP_,x);
});})(vec__33577,seq__33578,first__33579,seq__33578__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33613 = cljs.core.seq.call(null,provides);
var chunk__33614 = null;
var count__33615 = (0);
var i__33616 = (0);
while(true){
if((i__33616 < count__33615)){
var prov = cljs.core._nth.call(null,chunk__33614,i__33616);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33617_33625 = cljs.core.seq.call(null,requires);
var chunk__33618_33626 = null;
var count__33619_33627 = (0);
var i__33620_33628 = (0);
while(true){
if((i__33620_33628 < count__33619_33627)){
var req_33629 = cljs.core._nth.call(null,chunk__33618_33626,i__33620_33628);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33629,prov);

var G__33630 = seq__33617_33625;
var G__33631 = chunk__33618_33626;
var G__33632 = count__33619_33627;
var G__33633 = (i__33620_33628 + (1));
seq__33617_33625 = G__33630;
chunk__33618_33626 = G__33631;
count__33619_33627 = G__33632;
i__33620_33628 = G__33633;
continue;
} else {
var temp__4657__auto___33634 = cljs.core.seq.call(null,seq__33617_33625);
if(temp__4657__auto___33634){
var seq__33617_33635__$1 = temp__4657__auto___33634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33617_33635__$1)){
var c__26790__auto___33636 = cljs.core.chunk_first.call(null,seq__33617_33635__$1);
var G__33637 = cljs.core.chunk_rest.call(null,seq__33617_33635__$1);
var G__33638 = c__26790__auto___33636;
var G__33639 = cljs.core.count.call(null,c__26790__auto___33636);
var G__33640 = (0);
seq__33617_33625 = G__33637;
chunk__33618_33626 = G__33638;
count__33619_33627 = G__33639;
i__33620_33628 = G__33640;
continue;
} else {
var req_33641 = cljs.core.first.call(null,seq__33617_33635__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33641,prov);

var G__33642 = cljs.core.next.call(null,seq__33617_33635__$1);
var G__33643 = null;
var G__33644 = (0);
var G__33645 = (0);
seq__33617_33625 = G__33642;
chunk__33618_33626 = G__33643;
count__33619_33627 = G__33644;
i__33620_33628 = G__33645;
continue;
}
} else {
}
}
break;
}

var G__33646 = seq__33613;
var G__33647 = chunk__33614;
var G__33648 = count__33615;
var G__33649 = (i__33616 + (1));
seq__33613 = G__33646;
chunk__33614 = G__33647;
count__33615 = G__33648;
i__33616 = G__33649;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33613);
if(temp__4657__auto__){
var seq__33613__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33613__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__33613__$1);
var G__33650 = cljs.core.chunk_rest.call(null,seq__33613__$1);
var G__33651 = c__26790__auto__;
var G__33652 = cljs.core.count.call(null,c__26790__auto__);
var G__33653 = (0);
seq__33613 = G__33650;
chunk__33614 = G__33651;
count__33615 = G__33652;
i__33616 = G__33653;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33613__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33621_33654 = cljs.core.seq.call(null,requires);
var chunk__33622_33655 = null;
var count__33623_33656 = (0);
var i__33624_33657 = (0);
while(true){
if((i__33624_33657 < count__33623_33656)){
var req_33658 = cljs.core._nth.call(null,chunk__33622_33655,i__33624_33657);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33658,prov);

var G__33659 = seq__33621_33654;
var G__33660 = chunk__33622_33655;
var G__33661 = count__33623_33656;
var G__33662 = (i__33624_33657 + (1));
seq__33621_33654 = G__33659;
chunk__33622_33655 = G__33660;
count__33623_33656 = G__33661;
i__33624_33657 = G__33662;
continue;
} else {
var temp__4657__auto___33663__$1 = cljs.core.seq.call(null,seq__33621_33654);
if(temp__4657__auto___33663__$1){
var seq__33621_33664__$1 = temp__4657__auto___33663__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33621_33664__$1)){
var c__26790__auto___33665 = cljs.core.chunk_first.call(null,seq__33621_33664__$1);
var G__33666 = cljs.core.chunk_rest.call(null,seq__33621_33664__$1);
var G__33667 = c__26790__auto___33665;
var G__33668 = cljs.core.count.call(null,c__26790__auto___33665);
var G__33669 = (0);
seq__33621_33654 = G__33666;
chunk__33622_33655 = G__33667;
count__33623_33656 = G__33668;
i__33624_33657 = G__33669;
continue;
} else {
var req_33670 = cljs.core.first.call(null,seq__33621_33664__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33670,prov);

var G__33671 = cljs.core.next.call(null,seq__33621_33664__$1);
var G__33672 = null;
var G__33673 = (0);
var G__33674 = (0);
seq__33621_33654 = G__33671;
chunk__33622_33655 = G__33672;
count__33623_33656 = G__33673;
i__33624_33657 = G__33674;
continue;
}
} else {
}
}
break;
}

var G__33675 = cljs.core.next.call(null,seq__33613__$1);
var G__33676 = null;
var G__33677 = (0);
var G__33678 = (0);
seq__33613 = G__33675;
chunk__33614 = G__33676;
count__33615 = G__33677;
i__33616 = G__33678;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33683_33687 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33684_33688 = null;
var count__33685_33689 = (0);
var i__33686_33690 = (0);
while(true){
if((i__33686_33690 < count__33685_33689)){
var ns_33691 = cljs.core._nth.call(null,chunk__33684_33688,i__33686_33690);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33691);

var G__33692 = seq__33683_33687;
var G__33693 = chunk__33684_33688;
var G__33694 = count__33685_33689;
var G__33695 = (i__33686_33690 + (1));
seq__33683_33687 = G__33692;
chunk__33684_33688 = G__33693;
count__33685_33689 = G__33694;
i__33686_33690 = G__33695;
continue;
} else {
var temp__4657__auto___33696 = cljs.core.seq.call(null,seq__33683_33687);
if(temp__4657__auto___33696){
var seq__33683_33697__$1 = temp__4657__auto___33696;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33683_33697__$1)){
var c__26790__auto___33698 = cljs.core.chunk_first.call(null,seq__33683_33697__$1);
var G__33699 = cljs.core.chunk_rest.call(null,seq__33683_33697__$1);
var G__33700 = c__26790__auto___33698;
var G__33701 = cljs.core.count.call(null,c__26790__auto___33698);
var G__33702 = (0);
seq__33683_33687 = G__33699;
chunk__33684_33688 = G__33700;
count__33685_33689 = G__33701;
i__33686_33690 = G__33702;
continue;
} else {
var ns_33703 = cljs.core.first.call(null,seq__33683_33697__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33703);

var G__33704 = cljs.core.next.call(null,seq__33683_33697__$1);
var G__33705 = null;
var G__33706 = (0);
var G__33707 = (0);
seq__33683_33687 = G__33704;
chunk__33684_33688 = G__33705;
count__33685_33689 = G__33706;
i__33686_33690 = G__33707;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25979__auto__ = goog.require__;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33708__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33709__i = 0, G__33709__a = new Array(arguments.length -  0);
while (G__33709__i < G__33709__a.length) {G__33709__a[G__33709__i] = arguments[G__33709__i + 0]; ++G__33709__i;}
  args = new cljs.core.IndexedSeq(G__33709__a,0);
} 
return G__33708__delegate.call(this,args);};
G__33708.cljs$lang$maxFixedArity = 0;
G__33708.cljs$lang$applyTo = (function (arglist__33710){
var args = cljs.core.seq(arglist__33710);
return G__33708__delegate(args);
});
G__33708.cljs$core$IFn$_invoke$arity$variadic = G__33708__delegate;
return G__33708;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33711 = cljs.core._EQ_;
var expr__33712 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33711.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33712))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33711,expr__33712){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33711,expr__33712))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33711,expr__33712){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33714){if((e33714 instanceof Error)){
var e = e33714;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33714;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33711,expr__33712))
} else {
if(cljs.core.truth_(pred__33711.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33712))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33711.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__33712))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33711.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33712))){
return ((function (pred__33711,expr__33712){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33715){if((e33715 instanceof Error)){
var e = e33715;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33715;

}
}})());
});
;})(pred__33711,expr__33712))
} else {
return ((function (pred__33711,expr__33712){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33711,expr__33712))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33716,callback){
var map__33719 = p__33716;
var map__33719__$1 = ((((!((map__33719 == null)))?((((map__33719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33719):map__33719);
var file_msg = map__33719__$1;
var request_url = cljs.core.get.call(null,map__33719__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33719,map__33719__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33719,map__33719__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto__){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto__){
return (function (state_33743){
var state_val_33744 = (state_33743[(1)]);
if((state_val_33744 === (7))){
var inst_33739 = (state_33743[(2)]);
var state_33743__$1 = state_33743;
var statearr_33745_33765 = state_33743__$1;
(statearr_33745_33765[(2)] = inst_33739);

(statearr_33745_33765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33744 === (1))){
var state_33743__$1 = state_33743;
var statearr_33746_33766 = state_33743__$1;
(statearr_33746_33766[(2)] = null);

(statearr_33746_33766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33744 === (4))){
var inst_33723 = (state_33743[(7)]);
var inst_33723__$1 = (state_33743[(2)]);
var state_33743__$1 = (function (){var statearr_33747 = state_33743;
(statearr_33747[(7)] = inst_33723__$1);

return statearr_33747;
})();
if(cljs.core.truth_(inst_33723__$1)){
var statearr_33748_33767 = state_33743__$1;
(statearr_33748_33767[(1)] = (5));

} else {
var statearr_33749_33768 = state_33743__$1;
(statearr_33749_33768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33744 === (6))){
var state_33743__$1 = state_33743;
var statearr_33750_33769 = state_33743__$1;
(statearr_33750_33769[(2)] = null);

(statearr_33750_33769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33744 === (3))){
var inst_33741 = (state_33743[(2)]);
var state_33743__$1 = state_33743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33743__$1,inst_33741);
} else {
if((state_val_33744 === (2))){
var state_33743__$1 = state_33743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33743__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33744 === (11))){
var inst_33735 = (state_33743[(2)]);
var state_33743__$1 = (function (){var statearr_33751 = state_33743;
(statearr_33751[(8)] = inst_33735);

return statearr_33751;
})();
var statearr_33752_33770 = state_33743__$1;
(statearr_33752_33770[(2)] = null);

(statearr_33752_33770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33744 === (9))){
var inst_33727 = (state_33743[(9)]);
var inst_33729 = (state_33743[(10)]);
var inst_33731 = inst_33729.call(null,inst_33727);
var state_33743__$1 = state_33743;
var statearr_33753_33771 = state_33743__$1;
(statearr_33753_33771[(2)] = inst_33731);

(statearr_33753_33771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33744 === (5))){
var inst_33723 = (state_33743[(7)]);
var inst_33725 = figwheel.client.file_reloading.blocking_load.call(null,inst_33723);
var state_33743__$1 = state_33743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33743__$1,(8),inst_33725);
} else {
if((state_val_33744 === (10))){
var inst_33727 = (state_33743[(9)]);
var inst_33733 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33727);
var state_33743__$1 = state_33743;
var statearr_33754_33772 = state_33743__$1;
(statearr_33754_33772[(2)] = inst_33733);

(statearr_33754_33772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33744 === (8))){
var inst_33723 = (state_33743[(7)]);
var inst_33729 = (state_33743[(10)]);
var inst_33727 = (state_33743[(2)]);
var inst_33728 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33729__$1 = cljs.core.get.call(null,inst_33728,inst_33723);
var state_33743__$1 = (function (){var statearr_33755 = state_33743;
(statearr_33755[(9)] = inst_33727);

(statearr_33755[(10)] = inst_33729__$1);

return statearr_33755;
})();
if(cljs.core.truth_(inst_33729__$1)){
var statearr_33756_33773 = state_33743__$1;
(statearr_33756_33773[(1)] = (9));

} else {
var statearr_33757_33774 = state_33743__$1;
(statearr_33757_33774[(1)] = (10));

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
});})(c__28886__auto__))
;
return ((function (switch__28774__auto__,c__28886__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28775__auto__ = null;
var figwheel$client$file_reloading$state_machine__28775__auto____0 = (function (){
var statearr_33761 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33761[(0)] = figwheel$client$file_reloading$state_machine__28775__auto__);

(statearr_33761[(1)] = (1));

return statearr_33761;
});
var figwheel$client$file_reloading$state_machine__28775__auto____1 = (function (state_33743){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_33743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e33762){if((e33762 instanceof Object)){
var ex__28778__auto__ = e33762;
var statearr_33763_33775 = state_33743;
(statearr_33763_33775[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33776 = state_33743;
state_33743 = G__33776;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28775__auto__ = function(state_33743){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28775__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28775__auto____1.call(this,state_33743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28775__auto____0;
figwheel$client$file_reloading$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28775__auto____1;
return figwheel$client$file_reloading$state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto__))
})();
var state__28888__auto__ = (function (){var statearr_33764 = f__28887__auto__.call(null);
(statearr_33764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto__);

return statearr_33764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto__))
);

return c__28886__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33777,callback){
var map__33780 = p__33777;
var map__33780__$1 = ((((!((map__33780 == null)))?((((map__33780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33780):map__33780);
var file_msg = map__33780__$1;
var namespace = cljs.core.get.call(null,map__33780__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33780,map__33780__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33780,map__33780__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33782){
var map__33785 = p__33782;
var map__33785__$1 = ((((!((map__33785 == null)))?((((map__33785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33785):map__33785);
var file_msg = map__33785__$1;
var namespace = cljs.core.get.call(null,map__33785__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33787){
var map__33790 = p__33787;
var map__33790__$1 = ((((!((map__33790 == null)))?((((map__33790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33790):map__33790);
var file_msg = map__33790__$1;
var namespace = cljs.core.get.call(null,map__33790__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25967__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25967__auto__){
var or__25979__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
var or__25979__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25979__auto____$1)){
return or__25979__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25967__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33792,callback){
var map__33795 = p__33792;
var map__33795__$1 = ((((!((map__33795 == null)))?((((map__33795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33795):map__33795);
var file_msg = map__33795__$1;
var request_url = cljs.core.get.call(null,map__33795__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33795__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28886__auto___33899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto___33899,out){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto___33899,out){
return (function (state_33881){
var state_val_33882 = (state_33881[(1)]);
if((state_val_33882 === (1))){
var inst_33855 = cljs.core.seq.call(null,files);
var inst_33856 = cljs.core.first.call(null,inst_33855);
var inst_33857 = cljs.core.next.call(null,inst_33855);
var inst_33858 = files;
var state_33881__$1 = (function (){var statearr_33883 = state_33881;
(statearr_33883[(7)] = inst_33856);

(statearr_33883[(8)] = inst_33857);

(statearr_33883[(9)] = inst_33858);

return statearr_33883;
})();
var statearr_33884_33900 = state_33881__$1;
(statearr_33884_33900[(2)] = null);

(statearr_33884_33900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33882 === (2))){
var inst_33858 = (state_33881[(9)]);
var inst_33864 = (state_33881[(10)]);
var inst_33863 = cljs.core.seq.call(null,inst_33858);
var inst_33864__$1 = cljs.core.first.call(null,inst_33863);
var inst_33865 = cljs.core.next.call(null,inst_33863);
var inst_33866 = (inst_33864__$1 == null);
var inst_33867 = cljs.core.not.call(null,inst_33866);
var state_33881__$1 = (function (){var statearr_33885 = state_33881;
(statearr_33885[(11)] = inst_33865);

(statearr_33885[(10)] = inst_33864__$1);

return statearr_33885;
})();
if(inst_33867){
var statearr_33886_33901 = state_33881__$1;
(statearr_33886_33901[(1)] = (4));

} else {
var statearr_33887_33902 = state_33881__$1;
(statearr_33887_33902[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33882 === (3))){
var inst_33879 = (state_33881[(2)]);
var state_33881__$1 = state_33881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33881__$1,inst_33879);
} else {
if((state_val_33882 === (4))){
var inst_33864 = (state_33881[(10)]);
var inst_33869 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33864);
var state_33881__$1 = state_33881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33881__$1,(7),inst_33869);
} else {
if((state_val_33882 === (5))){
var inst_33875 = cljs.core.async.close_BANG_.call(null,out);
var state_33881__$1 = state_33881;
var statearr_33888_33903 = state_33881__$1;
(statearr_33888_33903[(2)] = inst_33875);

(statearr_33888_33903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33882 === (6))){
var inst_33877 = (state_33881[(2)]);
var state_33881__$1 = state_33881;
var statearr_33889_33904 = state_33881__$1;
(statearr_33889_33904[(2)] = inst_33877);

(statearr_33889_33904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33882 === (7))){
var inst_33865 = (state_33881[(11)]);
var inst_33871 = (state_33881[(2)]);
var inst_33872 = cljs.core.async.put_BANG_.call(null,out,inst_33871);
var inst_33858 = inst_33865;
var state_33881__$1 = (function (){var statearr_33890 = state_33881;
(statearr_33890[(12)] = inst_33872);

(statearr_33890[(9)] = inst_33858);

return statearr_33890;
})();
var statearr_33891_33905 = state_33881__$1;
(statearr_33891_33905[(2)] = null);

(statearr_33891_33905[(1)] = (2));


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
});})(c__28886__auto___33899,out))
;
return ((function (switch__28774__auto__,c__28886__auto___33899,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28775__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28775__auto____0 = (function (){
var statearr_33895 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33895[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28775__auto__);

(statearr_33895[(1)] = (1));

return statearr_33895;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28775__auto____1 = (function (state_33881){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_33881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e33896){if((e33896 instanceof Object)){
var ex__28778__auto__ = e33896;
var statearr_33897_33906 = state_33881;
(statearr_33897_33906[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33907 = state_33881;
state_33881 = G__33907;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28775__auto__ = function(state_33881){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28775__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28775__auto____1.call(this,state_33881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28775__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28775__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto___33899,out))
})();
var state__28888__auto__ = (function (){var statearr_33898 = f__28887__auto__.call(null);
(statearr_33898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___33899);

return statearr_33898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto___33899,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33908,opts){
var map__33912 = p__33908;
var map__33912__$1 = ((((!((map__33912 == null)))?((((map__33912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33912):map__33912);
var eval_body__$1 = cljs.core.get.call(null,map__33912__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33912__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25967__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25967__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25967__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33914){var e = e33914;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33915_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33915_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33924){
var vec__33925 = p__33924;
var k = cljs.core.nth.call(null,vec__33925,(0),null);
var v = cljs.core.nth.call(null,vec__33925,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33928){
var vec__33929 = p__33928;
var k = cljs.core.nth.call(null,vec__33929,(0),null);
var v = cljs.core.nth.call(null,vec__33929,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33935,p__33936){
var map__34183 = p__33935;
var map__34183__$1 = ((((!((map__34183 == null)))?((((map__34183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34183):map__34183);
var opts = map__34183__$1;
var before_jsload = cljs.core.get.call(null,map__34183__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34183__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34183__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34184 = p__33936;
var map__34184__$1 = ((((!((map__34184 == null)))?((((map__34184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34184):map__34184);
var msg = map__34184__$1;
var files = cljs.core.get.call(null,map__34184__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34184__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34184__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34337){
var state_val_34338 = (state_34337[(1)]);
if((state_val_34338 === (7))){
var inst_34199 = (state_34337[(7)]);
var inst_34198 = (state_34337[(8)]);
var inst_34200 = (state_34337[(9)]);
var inst_34201 = (state_34337[(10)]);
var inst_34206 = cljs.core._nth.call(null,inst_34199,inst_34201);
var inst_34207 = figwheel.client.file_reloading.eval_body.call(null,inst_34206,opts);
var inst_34208 = (inst_34201 + (1));
var tmp34339 = inst_34199;
var tmp34340 = inst_34198;
var tmp34341 = inst_34200;
var inst_34198__$1 = tmp34340;
var inst_34199__$1 = tmp34339;
var inst_34200__$1 = tmp34341;
var inst_34201__$1 = inst_34208;
var state_34337__$1 = (function (){var statearr_34342 = state_34337;
(statearr_34342[(7)] = inst_34199__$1);

(statearr_34342[(8)] = inst_34198__$1);

(statearr_34342[(9)] = inst_34200__$1);

(statearr_34342[(10)] = inst_34201__$1);

(statearr_34342[(11)] = inst_34207);

return statearr_34342;
})();
var statearr_34343_34429 = state_34337__$1;
(statearr_34343_34429[(2)] = null);

(statearr_34343_34429[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (20))){
var inst_34241 = (state_34337[(12)]);
var inst_34249 = figwheel.client.file_reloading.sort_files.call(null,inst_34241);
var state_34337__$1 = state_34337;
var statearr_34344_34430 = state_34337__$1;
(statearr_34344_34430[(2)] = inst_34249);

(statearr_34344_34430[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (27))){
var state_34337__$1 = state_34337;
var statearr_34345_34431 = state_34337__$1;
(statearr_34345_34431[(2)] = null);

(statearr_34345_34431[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (1))){
var inst_34190 = (state_34337[(13)]);
var inst_34187 = before_jsload.call(null,files);
var inst_34188 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34189 = (function (){return ((function (inst_34190,inst_34187,inst_34188,state_val_34338,c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33932_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33932_SHARP_);
});
;})(inst_34190,inst_34187,inst_34188,state_val_34338,c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34190__$1 = cljs.core.filter.call(null,inst_34189,files);
var inst_34191 = cljs.core.not_empty.call(null,inst_34190__$1);
var state_34337__$1 = (function (){var statearr_34346 = state_34337;
(statearr_34346[(13)] = inst_34190__$1);

(statearr_34346[(14)] = inst_34188);

(statearr_34346[(15)] = inst_34187);

return statearr_34346;
})();
if(cljs.core.truth_(inst_34191)){
var statearr_34347_34432 = state_34337__$1;
(statearr_34347_34432[(1)] = (2));

} else {
var statearr_34348_34433 = state_34337__$1;
(statearr_34348_34433[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (24))){
var state_34337__$1 = state_34337;
var statearr_34349_34434 = state_34337__$1;
(statearr_34349_34434[(2)] = null);

(statearr_34349_34434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (39))){
var inst_34291 = (state_34337[(16)]);
var state_34337__$1 = state_34337;
var statearr_34350_34435 = state_34337__$1;
(statearr_34350_34435[(2)] = inst_34291);

(statearr_34350_34435[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (46))){
var inst_34332 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
var statearr_34351_34436 = state_34337__$1;
(statearr_34351_34436[(2)] = inst_34332);

(statearr_34351_34436[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (4))){
var inst_34235 = (state_34337[(2)]);
var inst_34236 = cljs.core.List.EMPTY;
var inst_34237 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34236);
var inst_34238 = (function (){return ((function (inst_34235,inst_34236,inst_34237,state_val_34338,c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33933_SHARP_){
var and__25967__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33933_SHARP_);
if(cljs.core.truth_(and__25967__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33933_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33933_SHARP_)));
} else {
return and__25967__auto__;
}
});
;})(inst_34235,inst_34236,inst_34237,state_val_34338,c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34239 = cljs.core.filter.call(null,inst_34238,files);
var inst_34240 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34241 = cljs.core.concat.call(null,inst_34239,inst_34240);
var state_34337__$1 = (function (){var statearr_34352 = state_34337;
(statearr_34352[(12)] = inst_34241);

(statearr_34352[(17)] = inst_34235);

(statearr_34352[(18)] = inst_34237);

return statearr_34352;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34353_34437 = state_34337__$1;
(statearr_34353_34437[(1)] = (16));

} else {
var statearr_34354_34438 = state_34337__$1;
(statearr_34354_34438[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (15))){
var inst_34225 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
var statearr_34355_34439 = state_34337__$1;
(statearr_34355_34439[(2)] = inst_34225);

(statearr_34355_34439[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (21))){
var inst_34251 = (state_34337[(19)]);
var inst_34251__$1 = (state_34337[(2)]);
var inst_34252 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34251__$1);
var state_34337__$1 = (function (){var statearr_34356 = state_34337;
(statearr_34356[(19)] = inst_34251__$1);

return statearr_34356;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34337__$1,(22),inst_34252);
} else {
if((state_val_34338 === (31))){
var inst_34335 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34337__$1,inst_34335);
} else {
if((state_val_34338 === (32))){
var inst_34291 = (state_34337[(16)]);
var inst_34296 = inst_34291.cljs$lang$protocol_mask$partition0$;
var inst_34297 = (inst_34296 & (64));
var inst_34298 = inst_34291.cljs$core$ISeq$;
var inst_34299 = (inst_34297) || (inst_34298);
var state_34337__$1 = state_34337;
if(cljs.core.truth_(inst_34299)){
var statearr_34357_34440 = state_34337__$1;
(statearr_34357_34440[(1)] = (35));

} else {
var statearr_34358_34441 = state_34337__$1;
(statearr_34358_34441[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (40))){
var inst_34312 = (state_34337[(20)]);
var inst_34311 = (state_34337[(2)]);
var inst_34312__$1 = cljs.core.get.call(null,inst_34311,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34313 = cljs.core.get.call(null,inst_34311,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34314 = cljs.core.not_empty.call(null,inst_34312__$1);
var state_34337__$1 = (function (){var statearr_34359 = state_34337;
(statearr_34359[(21)] = inst_34313);

(statearr_34359[(20)] = inst_34312__$1);

return statearr_34359;
})();
if(cljs.core.truth_(inst_34314)){
var statearr_34360_34442 = state_34337__$1;
(statearr_34360_34442[(1)] = (41));

} else {
var statearr_34361_34443 = state_34337__$1;
(statearr_34361_34443[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (33))){
var state_34337__$1 = state_34337;
var statearr_34362_34444 = state_34337__$1;
(statearr_34362_34444[(2)] = false);

(statearr_34362_34444[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (13))){
var inst_34211 = (state_34337[(22)]);
var inst_34215 = cljs.core.chunk_first.call(null,inst_34211);
var inst_34216 = cljs.core.chunk_rest.call(null,inst_34211);
var inst_34217 = cljs.core.count.call(null,inst_34215);
var inst_34198 = inst_34216;
var inst_34199 = inst_34215;
var inst_34200 = inst_34217;
var inst_34201 = (0);
var state_34337__$1 = (function (){var statearr_34363 = state_34337;
(statearr_34363[(7)] = inst_34199);

(statearr_34363[(8)] = inst_34198);

(statearr_34363[(9)] = inst_34200);

(statearr_34363[(10)] = inst_34201);

return statearr_34363;
})();
var statearr_34364_34445 = state_34337__$1;
(statearr_34364_34445[(2)] = null);

(statearr_34364_34445[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (22))){
var inst_34254 = (state_34337[(23)]);
var inst_34259 = (state_34337[(24)]);
var inst_34251 = (state_34337[(19)]);
var inst_34255 = (state_34337[(25)]);
var inst_34254__$1 = (state_34337[(2)]);
var inst_34255__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34254__$1);
var inst_34256 = (function (){var all_files = inst_34251;
var res_SINGLEQUOTE_ = inst_34254__$1;
var res = inst_34255__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34254,inst_34259,inst_34251,inst_34255,inst_34254__$1,inst_34255__$1,state_val_34338,c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33934_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33934_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34254,inst_34259,inst_34251,inst_34255,inst_34254__$1,inst_34255__$1,state_val_34338,c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34257 = cljs.core.filter.call(null,inst_34256,inst_34254__$1);
var inst_34258 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34259__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34258);
var inst_34260 = cljs.core.not_empty.call(null,inst_34259__$1);
var state_34337__$1 = (function (){var statearr_34365 = state_34337;
(statearr_34365[(23)] = inst_34254__$1);

(statearr_34365[(24)] = inst_34259__$1);

(statearr_34365[(26)] = inst_34257);

(statearr_34365[(25)] = inst_34255__$1);

return statearr_34365;
})();
if(cljs.core.truth_(inst_34260)){
var statearr_34366_34446 = state_34337__$1;
(statearr_34366_34446[(1)] = (23));

} else {
var statearr_34367_34447 = state_34337__$1;
(statearr_34367_34447[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (36))){
var state_34337__$1 = state_34337;
var statearr_34368_34448 = state_34337__$1;
(statearr_34368_34448[(2)] = false);

(statearr_34368_34448[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (41))){
var inst_34312 = (state_34337[(20)]);
var inst_34316 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34317 = cljs.core.map.call(null,inst_34316,inst_34312);
var inst_34318 = cljs.core.pr_str.call(null,inst_34317);
var inst_34319 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34318)].join('');
var inst_34320 = figwheel.client.utils.log.call(null,inst_34319);
var state_34337__$1 = state_34337;
var statearr_34369_34449 = state_34337__$1;
(statearr_34369_34449[(2)] = inst_34320);

(statearr_34369_34449[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (43))){
var inst_34313 = (state_34337[(21)]);
var inst_34323 = (state_34337[(2)]);
var inst_34324 = cljs.core.not_empty.call(null,inst_34313);
var state_34337__$1 = (function (){var statearr_34370 = state_34337;
(statearr_34370[(27)] = inst_34323);

return statearr_34370;
})();
if(cljs.core.truth_(inst_34324)){
var statearr_34371_34450 = state_34337__$1;
(statearr_34371_34450[(1)] = (44));

} else {
var statearr_34372_34451 = state_34337__$1;
(statearr_34372_34451[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (29))){
var inst_34254 = (state_34337[(23)]);
var inst_34259 = (state_34337[(24)]);
var inst_34257 = (state_34337[(26)]);
var inst_34291 = (state_34337[(16)]);
var inst_34251 = (state_34337[(19)]);
var inst_34255 = (state_34337[(25)]);
var inst_34287 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34290 = (function (){var all_files = inst_34251;
var res_SINGLEQUOTE_ = inst_34254;
var res = inst_34255;
var files_not_loaded = inst_34257;
var dependencies_that_loaded = inst_34259;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34254,inst_34259,inst_34257,inst_34291,inst_34251,inst_34255,inst_34287,state_val_34338,c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34289){
var map__34373 = p__34289;
var map__34373__$1 = ((((!((map__34373 == null)))?((((map__34373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34373):map__34373);
var namespace = cljs.core.get.call(null,map__34373__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34254,inst_34259,inst_34257,inst_34291,inst_34251,inst_34255,inst_34287,state_val_34338,c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34291__$1 = cljs.core.group_by.call(null,inst_34290,inst_34257);
var inst_34293 = (inst_34291__$1 == null);
var inst_34294 = cljs.core.not.call(null,inst_34293);
var state_34337__$1 = (function (){var statearr_34375 = state_34337;
(statearr_34375[(16)] = inst_34291__$1);

(statearr_34375[(28)] = inst_34287);

return statearr_34375;
})();
if(inst_34294){
var statearr_34376_34452 = state_34337__$1;
(statearr_34376_34452[(1)] = (32));

} else {
var statearr_34377_34453 = state_34337__$1;
(statearr_34377_34453[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (44))){
var inst_34313 = (state_34337[(21)]);
var inst_34326 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34313);
var inst_34327 = cljs.core.pr_str.call(null,inst_34326);
var inst_34328 = [cljs.core.str("not required: "),cljs.core.str(inst_34327)].join('');
var inst_34329 = figwheel.client.utils.log.call(null,inst_34328);
var state_34337__$1 = state_34337;
var statearr_34378_34454 = state_34337__$1;
(statearr_34378_34454[(2)] = inst_34329);

(statearr_34378_34454[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (6))){
var inst_34232 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
var statearr_34379_34455 = state_34337__$1;
(statearr_34379_34455[(2)] = inst_34232);

(statearr_34379_34455[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (28))){
var inst_34257 = (state_34337[(26)]);
var inst_34284 = (state_34337[(2)]);
var inst_34285 = cljs.core.not_empty.call(null,inst_34257);
var state_34337__$1 = (function (){var statearr_34380 = state_34337;
(statearr_34380[(29)] = inst_34284);

return statearr_34380;
})();
if(cljs.core.truth_(inst_34285)){
var statearr_34381_34456 = state_34337__$1;
(statearr_34381_34456[(1)] = (29));

} else {
var statearr_34382_34457 = state_34337__$1;
(statearr_34382_34457[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (25))){
var inst_34255 = (state_34337[(25)]);
var inst_34271 = (state_34337[(2)]);
var inst_34272 = cljs.core.not_empty.call(null,inst_34255);
var state_34337__$1 = (function (){var statearr_34383 = state_34337;
(statearr_34383[(30)] = inst_34271);

return statearr_34383;
})();
if(cljs.core.truth_(inst_34272)){
var statearr_34384_34458 = state_34337__$1;
(statearr_34384_34458[(1)] = (26));

} else {
var statearr_34385_34459 = state_34337__$1;
(statearr_34385_34459[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (34))){
var inst_34306 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
if(cljs.core.truth_(inst_34306)){
var statearr_34386_34460 = state_34337__$1;
(statearr_34386_34460[(1)] = (38));

} else {
var statearr_34387_34461 = state_34337__$1;
(statearr_34387_34461[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (17))){
var state_34337__$1 = state_34337;
var statearr_34388_34462 = state_34337__$1;
(statearr_34388_34462[(2)] = recompile_dependents);

(statearr_34388_34462[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (3))){
var state_34337__$1 = state_34337;
var statearr_34389_34463 = state_34337__$1;
(statearr_34389_34463[(2)] = null);

(statearr_34389_34463[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (12))){
var inst_34228 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
var statearr_34390_34464 = state_34337__$1;
(statearr_34390_34464[(2)] = inst_34228);

(statearr_34390_34464[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (2))){
var inst_34190 = (state_34337[(13)]);
var inst_34197 = cljs.core.seq.call(null,inst_34190);
var inst_34198 = inst_34197;
var inst_34199 = null;
var inst_34200 = (0);
var inst_34201 = (0);
var state_34337__$1 = (function (){var statearr_34391 = state_34337;
(statearr_34391[(7)] = inst_34199);

(statearr_34391[(8)] = inst_34198);

(statearr_34391[(9)] = inst_34200);

(statearr_34391[(10)] = inst_34201);

return statearr_34391;
})();
var statearr_34392_34465 = state_34337__$1;
(statearr_34392_34465[(2)] = null);

(statearr_34392_34465[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (23))){
var inst_34254 = (state_34337[(23)]);
var inst_34259 = (state_34337[(24)]);
var inst_34257 = (state_34337[(26)]);
var inst_34251 = (state_34337[(19)]);
var inst_34255 = (state_34337[(25)]);
var inst_34262 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34264 = (function (){var all_files = inst_34251;
var res_SINGLEQUOTE_ = inst_34254;
var res = inst_34255;
var files_not_loaded = inst_34257;
var dependencies_that_loaded = inst_34259;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34254,inst_34259,inst_34257,inst_34251,inst_34255,inst_34262,state_val_34338,c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34263){
var map__34393 = p__34263;
var map__34393__$1 = ((((!((map__34393 == null)))?((((map__34393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34393):map__34393);
var request_url = cljs.core.get.call(null,map__34393__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34254,inst_34259,inst_34257,inst_34251,inst_34255,inst_34262,state_val_34338,c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34265 = cljs.core.reverse.call(null,inst_34259);
var inst_34266 = cljs.core.map.call(null,inst_34264,inst_34265);
var inst_34267 = cljs.core.pr_str.call(null,inst_34266);
var inst_34268 = figwheel.client.utils.log.call(null,inst_34267);
var state_34337__$1 = (function (){var statearr_34395 = state_34337;
(statearr_34395[(31)] = inst_34262);

return statearr_34395;
})();
var statearr_34396_34466 = state_34337__$1;
(statearr_34396_34466[(2)] = inst_34268);

(statearr_34396_34466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (35))){
var state_34337__$1 = state_34337;
var statearr_34397_34467 = state_34337__$1;
(statearr_34397_34467[(2)] = true);

(statearr_34397_34467[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (19))){
var inst_34241 = (state_34337[(12)]);
var inst_34247 = figwheel.client.file_reloading.expand_files.call(null,inst_34241);
var state_34337__$1 = state_34337;
var statearr_34398_34468 = state_34337__$1;
(statearr_34398_34468[(2)] = inst_34247);

(statearr_34398_34468[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (11))){
var state_34337__$1 = state_34337;
var statearr_34399_34469 = state_34337__$1;
(statearr_34399_34469[(2)] = null);

(statearr_34399_34469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (9))){
var inst_34230 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
var statearr_34400_34470 = state_34337__$1;
(statearr_34400_34470[(2)] = inst_34230);

(statearr_34400_34470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (5))){
var inst_34200 = (state_34337[(9)]);
var inst_34201 = (state_34337[(10)]);
var inst_34203 = (inst_34201 < inst_34200);
var inst_34204 = inst_34203;
var state_34337__$1 = state_34337;
if(cljs.core.truth_(inst_34204)){
var statearr_34401_34471 = state_34337__$1;
(statearr_34401_34471[(1)] = (7));

} else {
var statearr_34402_34472 = state_34337__$1;
(statearr_34402_34472[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (14))){
var inst_34211 = (state_34337[(22)]);
var inst_34220 = cljs.core.first.call(null,inst_34211);
var inst_34221 = figwheel.client.file_reloading.eval_body.call(null,inst_34220,opts);
var inst_34222 = cljs.core.next.call(null,inst_34211);
var inst_34198 = inst_34222;
var inst_34199 = null;
var inst_34200 = (0);
var inst_34201 = (0);
var state_34337__$1 = (function (){var statearr_34403 = state_34337;
(statearr_34403[(7)] = inst_34199);

(statearr_34403[(8)] = inst_34198);

(statearr_34403[(9)] = inst_34200);

(statearr_34403[(32)] = inst_34221);

(statearr_34403[(10)] = inst_34201);

return statearr_34403;
})();
var statearr_34404_34473 = state_34337__$1;
(statearr_34404_34473[(2)] = null);

(statearr_34404_34473[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (45))){
var state_34337__$1 = state_34337;
var statearr_34405_34474 = state_34337__$1;
(statearr_34405_34474[(2)] = null);

(statearr_34405_34474[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (26))){
var inst_34254 = (state_34337[(23)]);
var inst_34259 = (state_34337[(24)]);
var inst_34257 = (state_34337[(26)]);
var inst_34251 = (state_34337[(19)]);
var inst_34255 = (state_34337[(25)]);
var inst_34274 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34276 = (function (){var all_files = inst_34251;
var res_SINGLEQUOTE_ = inst_34254;
var res = inst_34255;
var files_not_loaded = inst_34257;
var dependencies_that_loaded = inst_34259;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34254,inst_34259,inst_34257,inst_34251,inst_34255,inst_34274,state_val_34338,c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34275){
var map__34406 = p__34275;
var map__34406__$1 = ((((!((map__34406 == null)))?((((map__34406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34406):map__34406);
var namespace = cljs.core.get.call(null,map__34406__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34406__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34254,inst_34259,inst_34257,inst_34251,inst_34255,inst_34274,state_val_34338,c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34277 = cljs.core.map.call(null,inst_34276,inst_34255);
var inst_34278 = cljs.core.pr_str.call(null,inst_34277);
var inst_34279 = figwheel.client.utils.log.call(null,inst_34278);
var inst_34280 = (function (){var all_files = inst_34251;
var res_SINGLEQUOTE_ = inst_34254;
var res = inst_34255;
var files_not_loaded = inst_34257;
var dependencies_that_loaded = inst_34259;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34254,inst_34259,inst_34257,inst_34251,inst_34255,inst_34274,inst_34276,inst_34277,inst_34278,inst_34279,state_val_34338,c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34254,inst_34259,inst_34257,inst_34251,inst_34255,inst_34274,inst_34276,inst_34277,inst_34278,inst_34279,state_val_34338,c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34281 = setTimeout(inst_34280,(10));
var state_34337__$1 = (function (){var statearr_34408 = state_34337;
(statearr_34408[(33)] = inst_34274);

(statearr_34408[(34)] = inst_34279);

return statearr_34408;
})();
var statearr_34409_34475 = state_34337__$1;
(statearr_34409_34475[(2)] = inst_34281);

(statearr_34409_34475[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (16))){
var state_34337__$1 = state_34337;
var statearr_34410_34476 = state_34337__$1;
(statearr_34410_34476[(2)] = reload_dependents);

(statearr_34410_34476[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (38))){
var inst_34291 = (state_34337[(16)]);
var inst_34308 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34291);
var state_34337__$1 = state_34337;
var statearr_34411_34477 = state_34337__$1;
(statearr_34411_34477[(2)] = inst_34308);

(statearr_34411_34477[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (30))){
var state_34337__$1 = state_34337;
var statearr_34412_34478 = state_34337__$1;
(statearr_34412_34478[(2)] = null);

(statearr_34412_34478[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (10))){
var inst_34211 = (state_34337[(22)]);
var inst_34213 = cljs.core.chunked_seq_QMARK_.call(null,inst_34211);
var state_34337__$1 = state_34337;
if(inst_34213){
var statearr_34413_34479 = state_34337__$1;
(statearr_34413_34479[(1)] = (13));

} else {
var statearr_34414_34480 = state_34337__$1;
(statearr_34414_34480[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (18))){
var inst_34245 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
if(cljs.core.truth_(inst_34245)){
var statearr_34415_34481 = state_34337__$1;
(statearr_34415_34481[(1)] = (19));

} else {
var statearr_34416_34482 = state_34337__$1;
(statearr_34416_34482[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (42))){
var state_34337__$1 = state_34337;
var statearr_34417_34483 = state_34337__$1;
(statearr_34417_34483[(2)] = null);

(statearr_34417_34483[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (37))){
var inst_34303 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
var statearr_34418_34484 = state_34337__$1;
(statearr_34418_34484[(2)] = inst_34303);

(statearr_34418_34484[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (8))){
var inst_34198 = (state_34337[(8)]);
var inst_34211 = (state_34337[(22)]);
var inst_34211__$1 = cljs.core.seq.call(null,inst_34198);
var state_34337__$1 = (function (){var statearr_34419 = state_34337;
(statearr_34419[(22)] = inst_34211__$1);

return statearr_34419;
})();
if(inst_34211__$1){
var statearr_34420_34485 = state_34337__$1;
(statearr_34420_34485[(1)] = (10));

} else {
var statearr_34421_34486 = state_34337__$1;
(statearr_34421_34486[(1)] = (11));

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
});})(c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28774__auto__,c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28775__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28775__auto____0 = (function (){
var statearr_34425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34425[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28775__auto__);

(statearr_34425[(1)] = (1));

return statearr_34425;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28775__auto____1 = (function (state_34337){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_34337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e34426){if((e34426 instanceof Object)){
var ex__28778__auto__ = e34426;
var statearr_34427_34487 = state_34337;
(statearr_34427_34487[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34488 = state_34337;
state_34337 = G__34488;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28775__auto__ = function(state_34337){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28775__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28775__auto____1.call(this,state_34337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28775__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28775__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28888__auto__ = (function (){var statearr_34428 = f__28887__auto__.call(null);
(statearr_34428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto__);

return statearr_34428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto__,map__34183,map__34183__$1,opts,before_jsload,on_jsload,reload_dependents,map__34184,map__34184__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28886__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34491,link){
var map__34494 = p__34491;
var map__34494__$1 = ((((!((map__34494 == null)))?((((map__34494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34494):map__34494);
var file = cljs.core.get.call(null,map__34494__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34494,map__34494__$1,file){
return (function (p1__34489_SHARP_,p2__34490_SHARP_){
if(cljs.core._EQ_.call(null,p1__34489_SHARP_,p2__34490_SHARP_)){
return p1__34489_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34494,map__34494__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34500){
var map__34501 = p__34500;
var map__34501__$1 = ((((!((map__34501 == null)))?((((map__34501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34501):map__34501);
var match_length = cljs.core.get.call(null,map__34501__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34501__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34496_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34496_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34503_SHARP_,p2__34504_SHARP_){
return cljs.core.assoc.call(null,p1__34503_SHARP_,cljs.core.get.call(null,p2__34504_SHARP_,key),p2__34504_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34505 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34505);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34505);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34506,p__34507){
var map__34512 = p__34506;
var map__34512__$1 = ((((!((map__34512 == null)))?((((map__34512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34512):map__34512);
var on_cssload = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34513 = p__34507;
var map__34513__$1 = ((((!((map__34513 == null)))?((((map__34513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34513):map__34513);
var files_msg = map__34513__$1;
var files = cljs.core.get.call(null,map__34513__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1496852855623