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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33779_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33779_SHARP_));
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
var seq__33784 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33785 = null;
var count__33786 = (0);
var i__33787 = (0);
while(true){
if((i__33787 < count__33786)){
var n = cljs.core._nth.call(null,chunk__33785,i__33787);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33788 = seq__33784;
var G__33789 = chunk__33785;
var G__33790 = count__33786;
var G__33791 = (i__33787 + (1));
seq__33784 = G__33788;
chunk__33785 = G__33789;
count__33786 = G__33790;
i__33787 = G__33791;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33784);
if(temp__4657__auto__){
var seq__33784__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33784__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__33784__$1);
var G__33792 = cljs.core.chunk_rest.call(null,seq__33784__$1);
var G__33793 = c__26790__auto__;
var G__33794 = cljs.core.count.call(null,c__26790__auto__);
var G__33795 = (0);
seq__33784 = G__33792;
chunk__33785 = G__33793;
count__33786 = G__33794;
i__33787 = G__33795;
continue;
} else {
var n = cljs.core.first.call(null,seq__33784__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33796 = cljs.core.next.call(null,seq__33784__$1);
var G__33797 = null;
var G__33798 = (0);
var G__33799 = (0);
seq__33784 = G__33796;
chunk__33785 = G__33797;
count__33786 = G__33798;
i__33787 = G__33799;
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

var seq__33850_33861 = cljs.core.seq.call(null,deps);
var chunk__33851_33862 = null;
var count__33852_33863 = (0);
var i__33853_33864 = (0);
while(true){
if((i__33853_33864 < count__33852_33863)){
var dep_33865 = cljs.core._nth.call(null,chunk__33851_33862,i__33853_33864);
topo_sort_helper_STAR_.call(null,dep_33865,(depth + (1)),state);

var G__33866 = seq__33850_33861;
var G__33867 = chunk__33851_33862;
var G__33868 = count__33852_33863;
var G__33869 = (i__33853_33864 + (1));
seq__33850_33861 = G__33866;
chunk__33851_33862 = G__33867;
count__33852_33863 = G__33868;
i__33853_33864 = G__33869;
continue;
} else {
var temp__4657__auto___33870 = cljs.core.seq.call(null,seq__33850_33861);
if(temp__4657__auto___33870){
var seq__33850_33871__$1 = temp__4657__auto___33870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33850_33871__$1)){
var c__26790__auto___33872 = cljs.core.chunk_first.call(null,seq__33850_33871__$1);
var G__33873 = cljs.core.chunk_rest.call(null,seq__33850_33871__$1);
var G__33874 = c__26790__auto___33872;
var G__33875 = cljs.core.count.call(null,c__26790__auto___33872);
var G__33876 = (0);
seq__33850_33861 = G__33873;
chunk__33851_33862 = G__33874;
count__33852_33863 = G__33875;
i__33853_33864 = G__33876;
continue;
} else {
var dep_33877 = cljs.core.first.call(null,seq__33850_33871__$1);
topo_sort_helper_STAR_.call(null,dep_33877,(depth + (1)),state);

var G__33878 = cljs.core.next.call(null,seq__33850_33871__$1);
var G__33879 = null;
var G__33880 = (0);
var G__33881 = (0);
seq__33850_33861 = G__33878;
chunk__33851_33862 = G__33879;
count__33852_33863 = G__33880;
i__33853_33864 = G__33881;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33854){
var vec__33858 = p__33854;
var seq__33859 = cljs.core.seq.call(null,vec__33858);
var first__33860 = cljs.core.first.call(null,seq__33859);
var seq__33859__$1 = cljs.core.next.call(null,seq__33859);
var x = first__33860;
var xs = seq__33859__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33858,seq__33859,first__33860,seq__33859__$1,x,xs,get_deps__$1){
return (function (p1__33800_SHARP_){
return clojure.set.difference.call(null,p1__33800_SHARP_,x);
});})(vec__33858,seq__33859,first__33860,seq__33859__$1,x,xs,get_deps__$1))
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
var seq__33894 = cljs.core.seq.call(null,provides);
var chunk__33895 = null;
var count__33896 = (0);
var i__33897 = (0);
while(true){
if((i__33897 < count__33896)){
var prov = cljs.core._nth.call(null,chunk__33895,i__33897);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33898_33906 = cljs.core.seq.call(null,requires);
var chunk__33899_33907 = null;
var count__33900_33908 = (0);
var i__33901_33909 = (0);
while(true){
if((i__33901_33909 < count__33900_33908)){
var req_33910 = cljs.core._nth.call(null,chunk__33899_33907,i__33901_33909);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33910,prov);

var G__33911 = seq__33898_33906;
var G__33912 = chunk__33899_33907;
var G__33913 = count__33900_33908;
var G__33914 = (i__33901_33909 + (1));
seq__33898_33906 = G__33911;
chunk__33899_33907 = G__33912;
count__33900_33908 = G__33913;
i__33901_33909 = G__33914;
continue;
} else {
var temp__4657__auto___33915 = cljs.core.seq.call(null,seq__33898_33906);
if(temp__4657__auto___33915){
var seq__33898_33916__$1 = temp__4657__auto___33915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33898_33916__$1)){
var c__26790__auto___33917 = cljs.core.chunk_first.call(null,seq__33898_33916__$1);
var G__33918 = cljs.core.chunk_rest.call(null,seq__33898_33916__$1);
var G__33919 = c__26790__auto___33917;
var G__33920 = cljs.core.count.call(null,c__26790__auto___33917);
var G__33921 = (0);
seq__33898_33906 = G__33918;
chunk__33899_33907 = G__33919;
count__33900_33908 = G__33920;
i__33901_33909 = G__33921;
continue;
} else {
var req_33922 = cljs.core.first.call(null,seq__33898_33916__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33922,prov);

var G__33923 = cljs.core.next.call(null,seq__33898_33916__$1);
var G__33924 = null;
var G__33925 = (0);
var G__33926 = (0);
seq__33898_33906 = G__33923;
chunk__33899_33907 = G__33924;
count__33900_33908 = G__33925;
i__33901_33909 = G__33926;
continue;
}
} else {
}
}
break;
}

var G__33927 = seq__33894;
var G__33928 = chunk__33895;
var G__33929 = count__33896;
var G__33930 = (i__33897 + (1));
seq__33894 = G__33927;
chunk__33895 = G__33928;
count__33896 = G__33929;
i__33897 = G__33930;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33894);
if(temp__4657__auto__){
var seq__33894__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33894__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__33894__$1);
var G__33931 = cljs.core.chunk_rest.call(null,seq__33894__$1);
var G__33932 = c__26790__auto__;
var G__33933 = cljs.core.count.call(null,c__26790__auto__);
var G__33934 = (0);
seq__33894 = G__33931;
chunk__33895 = G__33932;
count__33896 = G__33933;
i__33897 = G__33934;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33894__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33902_33935 = cljs.core.seq.call(null,requires);
var chunk__33903_33936 = null;
var count__33904_33937 = (0);
var i__33905_33938 = (0);
while(true){
if((i__33905_33938 < count__33904_33937)){
var req_33939 = cljs.core._nth.call(null,chunk__33903_33936,i__33905_33938);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33939,prov);

var G__33940 = seq__33902_33935;
var G__33941 = chunk__33903_33936;
var G__33942 = count__33904_33937;
var G__33943 = (i__33905_33938 + (1));
seq__33902_33935 = G__33940;
chunk__33903_33936 = G__33941;
count__33904_33937 = G__33942;
i__33905_33938 = G__33943;
continue;
} else {
var temp__4657__auto___33944__$1 = cljs.core.seq.call(null,seq__33902_33935);
if(temp__4657__auto___33944__$1){
var seq__33902_33945__$1 = temp__4657__auto___33944__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33902_33945__$1)){
var c__26790__auto___33946 = cljs.core.chunk_first.call(null,seq__33902_33945__$1);
var G__33947 = cljs.core.chunk_rest.call(null,seq__33902_33945__$1);
var G__33948 = c__26790__auto___33946;
var G__33949 = cljs.core.count.call(null,c__26790__auto___33946);
var G__33950 = (0);
seq__33902_33935 = G__33947;
chunk__33903_33936 = G__33948;
count__33904_33937 = G__33949;
i__33905_33938 = G__33950;
continue;
} else {
var req_33951 = cljs.core.first.call(null,seq__33902_33945__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33951,prov);

var G__33952 = cljs.core.next.call(null,seq__33902_33945__$1);
var G__33953 = null;
var G__33954 = (0);
var G__33955 = (0);
seq__33902_33935 = G__33952;
chunk__33903_33936 = G__33953;
count__33904_33937 = G__33954;
i__33905_33938 = G__33955;
continue;
}
} else {
}
}
break;
}

var G__33956 = cljs.core.next.call(null,seq__33894__$1);
var G__33957 = null;
var G__33958 = (0);
var G__33959 = (0);
seq__33894 = G__33956;
chunk__33895 = G__33957;
count__33896 = G__33958;
i__33897 = G__33959;
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
var seq__33964_33968 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33965_33969 = null;
var count__33966_33970 = (0);
var i__33967_33971 = (0);
while(true){
if((i__33967_33971 < count__33966_33970)){
var ns_33972 = cljs.core._nth.call(null,chunk__33965_33969,i__33967_33971);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33972);

var G__33973 = seq__33964_33968;
var G__33974 = chunk__33965_33969;
var G__33975 = count__33966_33970;
var G__33976 = (i__33967_33971 + (1));
seq__33964_33968 = G__33973;
chunk__33965_33969 = G__33974;
count__33966_33970 = G__33975;
i__33967_33971 = G__33976;
continue;
} else {
var temp__4657__auto___33977 = cljs.core.seq.call(null,seq__33964_33968);
if(temp__4657__auto___33977){
var seq__33964_33978__$1 = temp__4657__auto___33977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33964_33978__$1)){
var c__26790__auto___33979 = cljs.core.chunk_first.call(null,seq__33964_33978__$1);
var G__33980 = cljs.core.chunk_rest.call(null,seq__33964_33978__$1);
var G__33981 = c__26790__auto___33979;
var G__33982 = cljs.core.count.call(null,c__26790__auto___33979);
var G__33983 = (0);
seq__33964_33968 = G__33980;
chunk__33965_33969 = G__33981;
count__33966_33970 = G__33982;
i__33967_33971 = G__33983;
continue;
} else {
var ns_33984 = cljs.core.first.call(null,seq__33964_33978__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33984);

var G__33985 = cljs.core.next.call(null,seq__33964_33978__$1);
var G__33986 = null;
var G__33987 = (0);
var G__33988 = (0);
seq__33964_33968 = G__33985;
chunk__33965_33969 = G__33986;
count__33966_33970 = G__33987;
i__33967_33971 = G__33988;
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
var G__33989__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33989 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33990__i = 0, G__33990__a = new Array(arguments.length -  0);
while (G__33990__i < G__33990__a.length) {G__33990__a[G__33990__i] = arguments[G__33990__i + 0]; ++G__33990__i;}
  args = new cljs.core.IndexedSeq(G__33990__a,0);
} 
return G__33989__delegate.call(this,args);};
G__33989.cljs$lang$maxFixedArity = 0;
G__33989.cljs$lang$applyTo = (function (arglist__33991){
var args = cljs.core.seq(arglist__33991);
return G__33989__delegate(args);
});
G__33989.cljs$core$IFn$_invoke$arity$variadic = G__33989__delegate;
return G__33989;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33992 = cljs.core._EQ_;
var expr__33993 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33992.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33993))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33992,expr__33993){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33992,expr__33993))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33992,expr__33993){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33995){if((e33995 instanceof Error)){
var e = e33995;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33995;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33992,expr__33993))
} else {
if(cljs.core.truth_(pred__33992.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33993))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33992.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__33993))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33992.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33993))){
return ((function (pred__33992,expr__33993){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33996){if((e33996 instanceof Error)){
var e = e33996;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33996;

}
}})());
});
;})(pred__33992,expr__33993))
} else {
return ((function (pred__33992,expr__33993){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33992,expr__33993))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33997,callback){
var map__34000 = p__33997;
var map__34000__$1 = ((((!((map__34000 == null)))?((((map__34000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34000):map__34000);
var file_msg = map__34000__$1;
var request_url = cljs.core.get.call(null,map__34000__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34000,map__34000__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34000,map__34000__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__){
return (function (state_34024){
var state_val_34025 = (state_34024[(1)]);
if((state_val_34025 === (7))){
var inst_34020 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
var statearr_34026_34046 = state_34024__$1;
(statearr_34026_34046[(2)] = inst_34020);

(statearr_34026_34046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (1))){
var state_34024__$1 = state_34024;
var statearr_34027_34047 = state_34024__$1;
(statearr_34027_34047[(2)] = null);

(statearr_34027_34047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (4))){
var inst_34004 = (state_34024[(7)]);
var inst_34004__$1 = (state_34024[(2)]);
var state_34024__$1 = (function (){var statearr_34028 = state_34024;
(statearr_34028[(7)] = inst_34004__$1);

return statearr_34028;
})();
if(cljs.core.truth_(inst_34004__$1)){
var statearr_34029_34048 = state_34024__$1;
(statearr_34029_34048[(1)] = (5));

} else {
var statearr_34030_34049 = state_34024__$1;
(statearr_34030_34049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (6))){
var state_34024__$1 = state_34024;
var statearr_34031_34050 = state_34024__$1;
(statearr_34031_34050[(2)] = null);

(statearr_34031_34050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (3))){
var inst_34022 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34024__$1,inst_34022);
} else {
if((state_val_34025 === (2))){
var state_34024__$1 = state_34024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34024__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34025 === (11))){
var inst_34016 = (state_34024[(2)]);
var state_34024__$1 = (function (){var statearr_34032 = state_34024;
(statearr_34032[(8)] = inst_34016);

return statearr_34032;
})();
var statearr_34033_34051 = state_34024__$1;
(statearr_34033_34051[(2)] = null);

(statearr_34033_34051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (9))){
var inst_34010 = (state_34024[(9)]);
var inst_34008 = (state_34024[(10)]);
var inst_34012 = inst_34010.call(null,inst_34008);
var state_34024__$1 = state_34024;
var statearr_34034_34052 = state_34024__$1;
(statearr_34034_34052[(2)] = inst_34012);

(statearr_34034_34052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (5))){
var inst_34004 = (state_34024[(7)]);
var inst_34006 = figwheel.client.file_reloading.blocking_load.call(null,inst_34004);
var state_34024__$1 = state_34024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34024__$1,(8),inst_34006);
} else {
if((state_val_34025 === (10))){
var inst_34008 = (state_34024[(10)]);
var inst_34014 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34008);
var state_34024__$1 = state_34024;
var statearr_34035_34053 = state_34024__$1;
(statearr_34035_34053[(2)] = inst_34014);

(statearr_34035_34053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (8))){
var inst_34004 = (state_34024[(7)]);
var inst_34010 = (state_34024[(9)]);
var inst_34008 = (state_34024[(2)]);
var inst_34009 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34010__$1 = cljs.core.get.call(null,inst_34009,inst_34004);
var state_34024__$1 = (function (){var statearr_34036 = state_34024;
(statearr_34036[(9)] = inst_34010__$1);

(statearr_34036[(10)] = inst_34008);

return statearr_34036;
})();
if(cljs.core.truth_(inst_34010__$1)){
var statearr_34037_34054 = state_34024__$1;
(statearr_34037_34054[(1)] = (9));

} else {
var statearr_34038_34055 = state_34024__$1;
(statearr_34038_34055[(1)] = (10));

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
});})(c__29167__auto__))
;
return ((function (switch__29055__auto__,c__29167__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29056__auto__ = null;
var figwheel$client$file_reloading$state_machine__29056__auto____0 = (function (){
var statearr_34042 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34042[(0)] = figwheel$client$file_reloading$state_machine__29056__auto__);

(statearr_34042[(1)] = (1));

return statearr_34042;
});
var figwheel$client$file_reloading$state_machine__29056__auto____1 = (function (state_34024){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_34024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e34043){if((e34043 instanceof Object)){
var ex__29059__auto__ = e34043;
var statearr_34044_34056 = state_34024;
(statearr_34044_34056[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34057 = state_34024;
state_34024 = G__34057;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29056__auto__ = function(state_34024){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29056__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29056__auto____1.call(this,state_34024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29056__auto____0;
figwheel$client$file_reloading$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29056__auto____1;
return figwheel$client$file_reloading$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__))
})();
var state__29169__auto__ = (function (){var statearr_34045 = f__29168__auto__.call(null);
(statearr_34045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_34045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__))
);

return c__29167__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34058,callback){
var map__34061 = p__34058;
var map__34061__$1 = ((((!((map__34061 == null)))?((((map__34061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34061):map__34061);
var file_msg = map__34061__$1;
var namespace = cljs.core.get.call(null,map__34061__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34061,map__34061__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34061,map__34061__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34063){
var map__34066 = p__34063;
var map__34066__$1 = ((((!((map__34066 == null)))?((((map__34066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34066):map__34066);
var file_msg = map__34066__$1;
var namespace = cljs.core.get.call(null,map__34066__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34068){
var map__34071 = p__34068;
var map__34071__$1 = ((((!((map__34071 == null)))?((((map__34071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34071):map__34071);
var file_msg = map__34071__$1;
var namespace = cljs.core.get.call(null,map__34071__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34073,callback){
var map__34076 = p__34073;
var map__34076__$1 = ((((!((map__34076 == null)))?((((map__34076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34076):map__34076);
var file_msg = map__34076__$1;
var request_url = cljs.core.get.call(null,map__34076__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34076__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29167__auto___34180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___34180,out){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___34180,out){
return (function (state_34162){
var state_val_34163 = (state_34162[(1)]);
if((state_val_34163 === (1))){
var inst_34136 = cljs.core.seq.call(null,files);
var inst_34137 = cljs.core.first.call(null,inst_34136);
var inst_34138 = cljs.core.next.call(null,inst_34136);
var inst_34139 = files;
var state_34162__$1 = (function (){var statearr_34164 = state_34162;
(statearr_34164[(7)] = inst_34139);

(statearr_34164[(8)] = inst_34137);

(statearr_34164[(9)] = inst_34138);

return statearr_34164;
})();
var statearr_34165_34181 = state_34162__$1;
(statearr_34165_34181[(2)] = null);

(statearr_34165_34181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34163 === (2))){
var inst_34145 = (state_34162[(10)]);
var inst_34139 = (state_34162[(7)]);
var inst_34144 = cljs.core.seq.call(null,inst_34139);
var inst_34145__$1 = cljs.core.first.call(null,inst_34144);
var inst_34146 = cljs.core.next.call(null,inst_34144);
var inst_34147 = (inst_34145__$1 == null);
var inst_34148 = cljs.core.not.call(null,inst_34147);
var state_34162__$1 = (function (){var statearr_34166 = state_34162;
(statearr_34166[(10)] = inst_34145__$1);

(statearr_34166[(11)] = inst_34146);

return statearr_34166;
})();
if(inst_34148){
var statearr_34167_34182 = state_34162__$1;
(statearr_34167_34182[(1)] = (4));

} else {
var statearr_34168_34183 = state_34162__$1;
(statearr_34168_34183[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34163 === (3))){
var inst_34160 = (state_34162[(2)]);
var state_34162__$1 = state_34162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34162__$1,inst_34160);
} else {
if((state_val_34163 === (4))){
var inst_34145 = (state_34162[(10)]);
var inst_34150 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34145);
var state_34162__$1 = state_34162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34162__$1,(7),inst_34150);
} else {
if((state_val_34163 === (5))){
var inst_34156 = cljs.core.async.close_BANG_.call(null,out);
var state_34162__$1 = state_34162;
var statearr_34169_34184 = state_34162__$1;
(statearr_34169_34184[(2)] = inst_34156);

(statearr_34169_34184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34163 === (6))){
var inst_34158 = (state_34162[(2)]);
var state_34162__$1 = state_34162;
var statearr_34170_34185 = state_34162__$1;
(statearr_34170_34185[(2)] = inst_34158);

(statearr_34170_34185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34163 === (7))){
var inst_34146 = (state_34162[(11)]);
var inst_34152 = (state_34162[(2)]);
var inst_34153 = cljs.core.async.put_BANG_.call(null,out,inst_34152);
var inst_34139 = inst_34146;
var state_34162__$1 = (function (){var statearr_34171 = state_34162;
(statearr_34171[(7)] = inst_34139);

(statearr_34171[(12)] = inst_34153);

return statearr_34171;
})();
var statearr_34172_34186 = state_34162__$1;
(statearr_34172_34186[(2)] = null);

(statearr_34172_34186[(1)] = (2));


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
});})(c__29167__auto___34180,out))
;
return ((function (switch__29055__auto__,c__29167__auto___34180,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto____0 = (function (){
var statearr_34176 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34176[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto__);

(statearr_34176[(1)] = (1));

return statearr_34176;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto____1 = (function (state_34162){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_34162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e34177){if((e34177 instanceof Object)){
var ex__29059__auto__ = e34177;
var statearr_34178_34187 = state_34162;
(statearr_34178_34187[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34188 = state_34162;
state_34162 = G__34188;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto__ = function(state_34162){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto____1.call(this,state_34162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___34180,out))
})();
var state__29169__auto__ = (function (){var statearr_34179 = f__29168__auto__.call(null);
(statearr_34179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___34180);

return statearr_34179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___34180,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34189,opts){
var map__34193 = p__34189;
var map__34193__$1 = ((((!((map__34193 == null)))?((((map__34193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34193):map__34193);
var eval_body__$1 = cljs.core.get.call(null,map__34193__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34193__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e34195){var e = e34195;
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
return (function (p1__34196_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34196_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34205){
var vec__34206 = p__34205;
var k = cljs.core.nth.call(null,vec__34206,(0),null);
var v = cljs.core.nth.call(null,vec__34206,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34209){
var vec__34210 = p__34209;
var k = cljs.core.nth.call(null,vec__34210,(0),null);
var v = cljs.core.nth.call(null,vec__34210,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34216,p__34217){
var map__34464 = p__34216;
var map__34464__$1 = ((((!((map__34464 == null)))?((((map__34464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34464):map__34464);
var opts = map__34464__$1;
var before_jsload = cljs.core.get.call(null,map__34464__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34464__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34464__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34465 = p__34217;
var map__34465__$1 = ((((!((map__34465 == null)))?((((map__34465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34465):map__34465);
var msg = map__34465__$1;
var files = cljs.core.get.call(null,map__34465__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34465__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34465__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34618){
var state_val_34619 = (state_34618[(1)]);
if((state_val_34619 === (7))){
var inst_34479 = (state_34618[(7)]);
var inst_34481 = (state_34618[(8)]);
var inst_34482 = (state_34618[(9)]);
var inst_34480 = (state_34618[(10)]);
var inst_34487 = cljs.core._nth.call(null,inst_34480,inst_34482);
var inst_34488 = figwheel.client.file_reloading.eval_body.call(null,inst_34487,opts);
var inst_34489 = (inst_34482 + (1));
var tmp34620 = inst_34479;
var tmp34621 = inst_34481;
var tmp34622 = inst_34480;
var inst_34479__$1 = tmp34620;
var inst_34480__$1 = tmp34622;
var inst_34481__$1 = tmp34621;
var inst_34482__$1 = inst_34489;
var state_34618__$1 = (function (){var statearr_34623 = state_34618;
(statearr_34623[(11)] = inst_34488);

(statearr_34623[(7)] = inst_34479__$1);

(statearr_34623[(8)] = inst_34481__$1);

(statearr_34623[(9)] = inst_34482__$1);

(statearr_34623[(10)] = inst_34480__$1);

return statearr_34623;
})();
var statearr_34624_34710 = state_34618__$1;
(statearr_34624_34710[(2)] = null);

(statearr_34624_34710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (20))){
var inst_34522 = (state_34618[(12)]);
var inst_34530 = figwheel.client.file_reloading.sort_files.call(null,inst_34522);
var state_34618__$1 = state_34618;
var statearr_34625_34711 = state_34618__$1;
(statearr_34625_34711[(2)] = inst_34530);

(statearr_34625_34711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (27))){
var state_34618__$1 = state_34618;
var statearr_34626_34712 = state_34618__$1;
(statearr_34626_34712[(2)] = null);

(statearr_34626_34712[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (1))){
var inst_34471 = (state_34618[(13)]);
var inst_34468 = before_jsload.call(null,files);
var inst_34469 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34470 = (function (){return ((function (inst_34471,inst_34468,inst_34469,state_val_34619,c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34213_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34213_SHARP_);
});
;})(inst_34471,inst_34468,inst_34469,state_val_34619,c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34471__$1 = cljs.core.filter.call(null,inst_34470,files);
var inst_34472 = cljs.core.not_empty.call(null,inst_34471__$1);
var state_34618__$1 = (function (){var statearr_34627 = state_34618;
(statearr_34627[(13)] = inst_34471__$1);

(statearr_34627[(14)] = inst_34468);

(statearr_34627[(15)] = inst_34469);

return statearr_34627;
})();
if(cljs.core.truth_(inst_34472)){
var statearr_34628_34713 = state_34618__$1;
(statearr_34628_34713[(1)] = (2));

} else {
var statearr_34629_34714 = state_34618__$1;
(statearr_34629_34714[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (24))){
var state_34618__$1 = state_34618;
var statearr_34630_34715 = state_34618__$1;
(statearr_34630_34715[(2)] = null);

(statearr_34630_34715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (39))){
var inst_34572 = (state_34618[(16)]);
var state_34618__$1 = state_34618;
var statearr_34631_34716 = state_34618__$1;
(statearr_34631_34716[(2)] = inst_34572);

(statearr_34631_34716[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (46))){
var inst_34613 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34632_34717 = state_34618__$1;
(statearr_34632_34717[(2)] = inst_34613);

(statearr_34632_34717[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (4))){
var inst_34516 = (state_34618[(2)]);
var inst_34517 = cljs.core.List.EMPTY;
var inst_34518 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34517);
var inst_34519 = (function (){return ((function (inst_34516,inst_34517,inst_34518,state_val_34619,c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34214_SHARP_){
var and__25967__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34214_SHARP_);
if(cljs.core.truth_(and__25967__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34214_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34214_SHARP_)));
} else {
return and__25967__auto__;
}
});
;})(inst_34516,inst_34517,inst_34518,state_val_34619,c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34520 = cljs.core.filter.call(null,inst_34519,files);
var inst_34521 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34522 = cljs.core.concat.call(null,inst_34520,inst_34521);
var state_34618__$1 = (function (){var statearr_34633 = state_34618;
(statearr_34633[(17)] = inst_34516);

(statearr_34633[(18)] = inst_34518);

(statearr_34633[(12)] = inst_34522);

return statearr_34633;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34634_34718 = state_34618__$1;
(statearr_34634_34718[(1)] = (16));

} else {
var statearr_34635_34719 = state_34618__$1;
(statearr_34635_34719[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (15))){
var inst_34506 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34636_34720 = state_34618__$1;
(statearr_34636_34720[(2)] = inst_34506);

(statearr_34636_34720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (21))){
var inst_34532 = (state_34618[(19)]);
var inst_34532__$1 = (state_34618[(2)]);
var inst_34533 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34532__$1);
var state_34618__$1 = (function (){var statearr_34637 = state_34618;
(statearr_34637[(19)] = inst_34532__$1);

return statearr_34637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34618__$1,(22),inst_34533);
} else {
if((state_val_34619 === (31))){
var inst_34616 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34618__$1,inst_34616);
} else {
if((state_val_34619 === (32))){
var inst_34572 = (state_34618[(16)]);
var inst_34577 = inst_34572.cljs$lang$protocol_mask$partition0$;
var inst_34578 = (inst_34577 & (64));
var inst_34579 = inst_34572.cljs$core$ISeq$;
var inst_34580 = (inst_34578) || (inst_34579);
var state_34618__$1 = state_34618;
if(cljs.core.truth_(inst_34580)){
var statearr_34638_34721 = state_34618__$1;
(statearr_34638_34721[(1)] = (35));

} else {
var statearr_34639_34722 = state_34618__$1;
(statearr_34639_34722[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (40))){
var inst_34593 = (state_34618[(20)]);
var inst_34592 = (state_34618[(2)]);
var inst_34593__$1 = cljs.core.get.call(null,inst_34592,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34594 = cljs.core.get.call(null,inst_34592,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34595 = cljs.core.not_empty.call(null,inst_34593__$1);
var state_34618__$1 = (function (){var statearr_34640 = state_34618;
(statearr_34640[(21)] = inst_34594);

(statearr_34640[(20)] = inst_34593__$1);

return statearr_34640;
})();
if(cljs.core.truth_(inst_34595)){
var statearr_34641_34723 = state_34618__$1;
(statearr_34641_34723[(1)] = (41));

} else {
var statearr_34642_34724 = state_34618__$1;
(statearr_34642_34724[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (33))){
var state_34618__$1 = state_34618;
var statearr_34643_34725 = state_34618__$1;
(statearr_34643_34725[(2)] = false);

(statearr_34643_34725[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (13))){
var inst_34492 = (state_34618[(22)]);
var inst_34496 = cljs.core.chunk_first.call(null,inst_34492);
var inst_34497 = cljs.core.chunk_rest.call(null,inst_34492);
var inst_34498 = cljs.core.count.call(null,inst_34496);
var inst_34479 = inst_34497;
var inst_34480 = inst_34496;
var inst_34481 = inst_34498;
var inst_34482 = (0);
var state_34618__$1 = (function (){var statearr_34644 = state_34618;
(statearr_34644[(7)] = inst_34479);

(statearr_34644[(8)] = inst_34481);

(statearr_34644[(9)] = inst_34482);

(statearr_34644[(10)] = inst_34480);

return statearr_34644;
})();
var statearr_34645_34726 = state_34618__$1;
(statearr_34645_34726[(2)] = null);

(statearr_34645_34726[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (22))){
var inst_34535 = (state_34618[(23)]);
var inst_34540 = (state_34618[(24)]);
var inst_34536 = (state_34618[(25)]);
var inst_34532 = (state_34618[(19)]);
var inst_34535__$1 = (state_34618[(2)]);
var inst_34536__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34535__$1);
var inst_34537 = (function (){var all_files = inst_34532;
var res_SINGLEQUOTE_ = inst_34535__$1;
var res = inst_34536__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34535,inst_34540,inst_34536,inst_34532,inst_34535__$1,inst_34536__$1,state_val_34619,c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34215_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34215_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34535,inst_34540,inst_34536,inst_34532,inst_34535__$1,inst_34536__$1,state_val_34619,c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34538 = cljs.core.filter.call(null,inst_34537,inst_34535__$1);
var inst_34539 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34540__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34539);
var inst_34541 = cljs.core.not_empty.call(null,inst_34540__$1);
var state_34618__$1 = (function (){var statearr_34646 = state_34618;
(statearr_34646[(23)] = inst_34535__$1);

(statearr_34646[(24)] = inst_34540__$1);

(statearr_34646[(25)] = inst_34536__$1);

(statearr_34646[(26)] = inst_34538);

return statearr_34646;
})();
if(cljs.core.truth_(inst_34541)){
var statearr_34647_34727 = state_34618__$1;
(statearr_34647_34727[(1)] = (23));

} else {
var statearr_34648_34728 = state_34618__$1;
(statearr_34648_34728[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (36))){
var state_34618__$1 = state_34618;
var statearr_34649_34729 = state_34618__$1;
(statearr_34649_34729[(2)] = false);

(statearr_34649_34729[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (41))){
var inst_34593 = (state_34618[(20)]);
var inst_34597 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34598 = cljs.core.map.call(null,inst_34597,inst_34593);
var inst_34599 = cljs.core.pr_str.call(null,inst_34598);
var inst_34600 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34599)].join('');
var inst_34601 = figwheel.client.utils.log.call(null,inst_34600);
var state_34618__$1 = state_34618;
var statearr_34650_34730 = state_34618__$1;
(statearr_34650_34730[(2)] = inst_34601);

(statearr_34650_34730[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (43))){
var inst_34594 = (state_34618[(21)]);
var inst_34604 = (state_34618[(2)]);
var inst_34605 = cljs.core.not_empty.call(null,inst_34594);
var state_34618__$1 = (function (){var statearr_34651 = state_34618;
(statearr_34651[(27)] = inst_34604);

return statearr_34651;
})();
if(cljs.core.truth_(inst_34605)){
var statearr_34652_34731 = state_34618__$1;
(statearr_34652_34731[(1)] = (44));

} else {
var statearr_34653_34732 = state_34618__$1;
(statearr_34653_34732[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (29))){
var inst_34535 = (state_34618[(23)]);
var inst_34540 = (state_34618[(24)]);
var inst_34536 = (state_34618[(25)]);
var inst_34538 = (state_34618[(26)]);
var inst_34572 = (state_34618[(16)]);
var inst_34532 = (state_34618[(19)]);
var inst_34568 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34571 = (function (){var all_files = inst_34532;
var res_SINGLEQUOTE_ = inst_34535;
var res = inst_34536;
var files_not_loaded = inst_34538;
var dependencies_that_loaded = inst_34540;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34535,inst_34540,inst_34536,inst_34538,inst_34572,inst_34532,inst_34568,state_val_34619,c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34570){
var map__34654 = p__34570;
var map__34654__$1 = ((((!((map__34654 == null)))?((((map__34654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34654):map__34654);
var namespace = cljs.core.get.call(null,map__34654__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34535,inst_34540,inst_34536,inst_34538,inst_34572,inst_34532,inst_34568,state_val_34619,c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34572__$1 = cljs.core.group_by.call(null,inst_34571,inst_34538);
var inst_34574 = (inst_34572__$1 == null);
var inst_34575 = cljs.core.not.call(null,inst_34574);
var state_34618__$1 = (function (){var statearr_34656 = state_34618;
(statearr_34656[(16)] = inst_34572__$1);

(statearr_34656[(28)] = inst_34568);

return statearr_34656;
})();
if(inst_34575){
var statearr_34657_34733 = state_34618__$1;
(statearr_34657_34733[(1)] = (32));

} else {
var statearr_34658_34734 = state_34618__$1;
(statearr_34658_34734[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (44))){
var inst_34594 = (state_34618[(21)]);
var inst_34607 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34594);
var inst_34608 = cljs.core.pr_str.call(null,inst_34607);
var inst_34609 = [cljs.core.str("not required: "),cljs.core.str(inst_34608)].join('');
var inst_34610 = figwheel.client.utils.log.call(null,inst_34609);
var state_34618__$1 = state_34618;
var statearr_34659_34735 = state_34618__$1;
(statearr_34659_34735[(2)] = inst_34610);

(statearr_34659_34735[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (6))){
var inst_34513 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34660_34736 = state_34618__$1;
(statearr_34660_34736[(2)] = inst_34513);

(statearr_34660_34736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (28))){
var inst_34538 = (state_34618[(26)]);
var inst_34565 = (state_34618[(2)]);
var inst_34566 = cljs.core.not_empty.call(null,inst_34538);
var state_34618__$1 = (function (){var statearr_34661 = state_34618;
(statearr_34661[(29)] = inst_34565);

return statearr_34661;
})();
if(cljs.core.truth_(inst_34566)){
var statearr_34662_34737 = state_34618__$1;
(statearr_34662_34737[(1)] = (29));

} else {
var statearr_34663_34738 = state_34618__$1;
(statearr_34663_34738[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (25))){
var inst_34536 = (state_34618[(25)]);
var inst_34552 = (state_34618[(2)]);
var inst_34553 = cljs.core.not_empty.call(null,inst_34536);
var state_34618__$1 = (function (){var statearr_34664 = state_34618;
(statearr_34664[(30)] = inst_34552);

return statearr_34664;
})();
if(cljs.core.truth_(inst_34553)){
var statearr_34665_34739 = state_34618__$1;
(statearr_34665_34739[(1)] = (26));

} else {
var statearr_34666_34740 = state_34618__$1;
(statearr_34666_34740[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (34))){
var inst_34587 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
if(cljs.core.truth_(inst_34587)){
var statearr_34667_34741 = state_34618__$1;
(statearr_34667_34741[(1)] = (38));

} else {
var statearr_34668_34742 = state_34618__$1;
(statearr_34668_34742[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (17))){
var state_34618__$1 = state_34618;
var statearr_34669_34743 = state_34618__$1;
(statearr_34669_34743[(2)] = recompile_dependents);

(statearr_34669_34743[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (3))){
var state_34618__$1 = state_34618;
var statearr_34670_34744 = state_34618__$1;
(statearr_34670_34744[(2)] = null);

(statearr_34670_34744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (12))){
var inst_34509 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34671_34745 = state_34618__$1;
(statearr_34671_34745[(2)] = inst_34509);

(statearr_34671_34745[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (2))){
var inst_34471 = (state_34618[(13)]);
var inst_34478 = cljs.core.seq.call(null,inst_34471);
var inst_34479 = inst_34478;
var inst_34480 = null;
var inst_34481 = (0);
var inst_34482 = (0);
var state_34618__$1 = (function (){var statearr_34672 = state_34618;
(statearr_34672[(7)] = inst_34479);

(statearr_34672[(8)] = inst_34481);

(statearr_34672[(9)] = inst_34482);

(statearr_34672[(10)] = inst_34480);

return statearr_34672;
})();
var statearr_34673_34746 = state_34618__$1;
(statearr_34673_34746[(2)] = null);

(statearr_34673_34746[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (23))){
var inst_34535 = (state_34618[(23)]);
var inst_34540 = (state_34618[(24)]);
var inst_34536 = (state_34618[(25)]);
var inst_34538 = (state_34618[(26)]);
var inst_34532 = (state_34618[(19)]);
var inst_34543 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34545 = (function (){var all_files = inst_34532;
var res_SINGLEQUOTE_ = inst_34535;
var res = inst_34536;
var files_not_loaded = inst_34538;
var dependencies_that_loaded = inst_34540;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34535,inst_34540,inst_34536,inst_34538,inst_34532,inst_34543,state_val_34619,c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34544){
var map__34674 = p__34544;
var map__34674__$1 = ((((!((map__34674 == null)))?((((map__34674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34674):map__34674);
var request_url = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34535,inst_34540,inst_34536,inst_34538,inst_34532,inst_34543,state_val_34619,c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34546 = cljs.core.reverse.call(null,inst_34540);
var inst_34547 = cljs.core.map.call(null,inst_34545,inst_34546);
var inst_34548 = cljs.core.pr_str.call(null,inst_34547);
var inst_34549 = figwheel.client.utils.log.call(null,inst_34548);
var state_34618__$1 = (function (){var statearr_34676 = state_34618;
(statearr_34676[(31)] = inst_34543);

return statearr_34676;
})();
var statearr_34677_34747 = state_34618__$1;
(statearr_34677_34747[(2)] = inst_34549);

(statearr_34677_34747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (35))){
var state_34618__$1 = state_34618;
var statearr_34678_34748 = state_34618__$1;
(statearr_34678_34748[(2)] = true);

(statearr_34678_34748[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (19))){
var inst_34522 = (state_34618[(12)]);
var inst_34528 = figwheel.client.file_reloading.expand_files.call(null,inst_34522);
var state_34618__$1 = state_34618;
var statearr_34679_34749 = state_34618__$1;
(statearr_34679_34749[(2)] = inst_34528);

(statearr_34679_34749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (11))){
var state_34618__$1 = state_34618;
var statearr_34680_34750 = state_34618__$1;
(statearr_34680_34750[(2)] = null);

(statearr_34680_34750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (9))){
var inst_34511 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34681_34751 = state_34618__$1;
(statearr_34681_34751[(2)] = inst_34511);

(statearr_34681_34751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (5))){
var inst_34481 = (state_34618[(8)]);
var inst_34482 = (state_34618[(9)]);
var inst_34484 = (inst_34482 < inst_34481);
var inst_34485 = inst_34484;
var state_34618__$1 = state_34618;
if(cljs.core.truth_(inst_34485)){
var statearr_34682_34752 = state_34618__$1;
(statearr_34682_34752[(1)] = (7));

} else {
var statearr_34683_34753 = state_34618__$1;
(statearr_34683_34753[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (14))){
var inst_34492 = (state_34618[(22)]);
var inst_34501 = cljs.core.first.call(null,inst_34492);
var inst_34502 = figwheel.client.file_reloading.eval_body.call(null,inst_34501,opts);
var inst_34503 = cljs.core.next.call(null,inst_34492);
var inst_34479 = inst_34503;
var inst_34480 = null;
var inst_34481 = (0);
var inst_34482 = (0);
var state_34618__$1 = (function (){var statearr_34684 = state_34618;
(statearr_34684[(7)] = inst_34479);

(statearr_34684[(8)] = inst_34481);

(statearr_34684[(32)] = inst_34502);

(statearr_34684[(9)] = inst_34482);

(statearr_34684[(10)] = inst_34480);

return statearr_34684;
})();
var statearr_34685_34754 = state_34618__$1;
(statearr_34685_34754[(2)] = null);

(statearr_34685_34754[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (45))){
var state_34618__$1 = state_34618;
var statearr_34686_34755 = state_34618__$1;
(statearr_34686_34755[(2)] = null);

(statearr_34686_34755[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (26))){
var inst_34535 = (state_34618[(23)]);
var inst_34540 = (state_34618[(24)]);
var inst_34536 = (state_34618[(25)]);
var inst_34538 = (state_34618[(26)]);
var inst_34532 = (state_34618[(19)]);
var inst_34555 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34557 = (function (){var all_files = inst_34532;
var res_SINGLEQUOTE_ = inst_34535;
var res = inst_34536;
var files_not_loaded = inst_34538;
var dependencies_that_loaded = inst_34540;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34535,inst_34540,inst_34536,inst_34538,inst_34532,inst_34555,state_val_34619,c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34556){
var map__34687 = p__34556;
var map__34687__$1 = ((((!((map__34687 == null)))?((((map__34687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34687):map__34687);
var namespace = cljs.core.get.call(null,map__34687__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34687__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34535,inst_34540,inst_34536,inst_34538,inst_34532,inst_34555,state_val_34619,c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34558 = cljs.core.map.call(null,inst_34557,inst_34536);
var inst_34559 = cljs.core.pr_str.call(null,inst_34558);
var inst_34560 = figwheel.client.utils.log.call(null,inst_34559);
var inst_34561 = (function (){var all_files = inst_34532;
var res_SINGLEQUOTE_ = inst_34535;
var res = inst_34536;
var files_not_loaded = inst_34538;
var dependencies_that_loaded = inst_34540;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34535,inst_34540,inst_34536,inst_34538,inst_34532,inst_34555,inst_34557,inst_34558,inst_34559,inst_34560,state_val_34619,c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34535,inst_34540,inst_34536,inst_34538,inst_34532,inst_34555,inst_34557,inst_34558,inst_34559,inst_34560,state_val_34619,c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34562 = setTimeout(inst_34561,(10));
var state_34618__$1 = (function (){var statearr_34689 = state_34618;
(statearr_34689[(33)] = inst_34560);

(statearr_34689[(34)] = inst_34555);

return statearr_34689;
})();
var statearr_34690_34756 = state_34618__$1;
(statearr_34690_34756[(2)] = inst_34562);

(statearr_34690_34756[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (16))){
var state_34618__$1 = state_34618;
var statearr_34691_34757 = state_34618__$1;
(statearr_34691_34757[(2)] = reload_dependents);

(statearr_34691_34757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (38))){
var inst_34572 = (state_34618[(16)]);
var inst_34589 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34572);
var state_34618__$1 = state_34618;
var statearr_34692_34758 = state_34618__$1;
(statearr_34692_34758[(2)] = inst_34589);

(statearr_34692_34758[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (30))){
var state_34618__$1 = state_34618;
var statearr_34693_34759 = state_34618__$1;
(statearr_34693_34759[(2)] = null);

(statearr_34693_34759[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (10))){
var inst_34492 = (state_34618[(22)]);
var inst_34494 = cljs.core.chunked_seq_QMARK_.call(null,inst_34492);
var state_34618__$1 = state_34618;
if(inst_34494){
var statearr_34694_34760 = state_34618__$1;
(statearr_34694_34760[(1)] = (13));

} else {
var statearr_34695_34761 = state_34618__$1;
(statearr_34695_34761[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (18))){
var inst_34526 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
if(cljs.core.truth_(inst_34526)){
var statearr_34696_34762 = state_34618__$1;
(statearr_34696_34762[(1)] = (19));

} else {
var statearr_34697_34763 = state_34618__$1;
(statearr_34697_34763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (42))){
var state_34618__$1 = state_34618;
var statearr_34698_34764 = state_34618__$1;
(statearr_34698_34764[(2)] = null);

(statearr_34698_34764[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (37))){
var inst_34584 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34699_34765 = state_34618__$1;
(statearr_34699_34765[(2)] = inst_34584);

(statearr_34699_34765[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (8))){
var inst_34479 = (state_34618[(7)]);
var inst_34492 = (state_34618[(22)]);
var inst_34492__$1 = cljs.core.seq.call(null,inst_34479);
var state_34618__$1 = (function (){var statearr_34700 = state_34618;
(statearr_34700[(22)] = inst_34492__$1);

return statearr_34700;
})();
if(inst_34492__$1){
var statearr_34701_34766 = state_34618__$1;
(statearr_34701_34766[(1)] = (10));

} else {
var statearr_34702_34767 = state_34618__$1;
(statearr_34702_34767[(1)] = (11));

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
});})(c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29055__auto__,c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto____0 = (function (){
var statearr_34706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34706[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto__);

(statearr_34706[(1)] = (1));

return statearr_34706;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto____1 = (function (state_34618){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_34618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e34707){if((e34707 instanceof Object)){
var ex__29059__auto__ = e34707;
var statearr_34708_34768 = state_34618;
(statearr_34708_34768[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34769 = state_34618;
state_34618 = G__34769;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto__ = function(state_34618){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto____1.call(this,state_34618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29169__auto__ = (function (){var statearr_34709 = f__29168__auto__.call(null);
(statearr_34709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_34709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__,map__34464,map__34464__$1,opts,before_jsload,on_jsload,reload_dependents,map__34465,map__34465__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29167__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34772,link){
var map__34775 = p__34772;
var map__34775__$1 = ((((!((map__34775 == null)))?((((map__34775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34775):map__34775);
var file = cljs.core.get.call(null,map__34775__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34775,map__34775__$1,file){
return (function (p1__34770_SHARP_,p2__34771_SHARP_){
if(cljs.core._EQ_.call(null,p1__34770_SHARP_,p2__34771_SHARP_)){
return p1__34770_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34775,map__34775__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34781){
var map__34782 = p__34781;
var map__34782__$1 = ((((!((map__34782 == null)))?((((map__34782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34782):map__34782);
var match_length = cljs.core.get.call(null,map__34782__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34782__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34777_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34777_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34784_SHARP_,p2__34785_SHARP_){
return cljs.core.assoc.call(null,p1__34784_SHARP_,cljs.core.get.call(null,p2__34785_SHARP_,key),p2__34785_SHARP_);
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
var loaded_f_datas_34786 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34786);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34786);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34787,p__34788){
var map__34793 = p__34787;
var map__34793__$1 = ((((!((map__34793 == null)))?((((map__34793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34793):map__34793);
var on_cssload = cljs.core.get.call(null,map__34793__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34794 = p__34788;
var map__34794__$1 = ((((!((map__34794 == null)))?((((map__34794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34794):map__34794);
var files_msg = map__34794__$1;
var files = cljs.core.get.call(null,map__34794__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1496854388045