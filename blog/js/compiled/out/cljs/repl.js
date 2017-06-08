// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35815){
var map__35840 = p__35815;
var map__35840__$1 = ((((!((map__35840 == null)))?((((map__35840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35840):map__35840);
var m = map__35840__$1;
var n = cljs.core.get.call(null,map__35840__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35840__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35842_35864 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35843_35865 = null;
var count__35844_35866 = (0);
var i__35845_35867 = (0);
while(true){
if((i__35845_35867 < count__35844_35866)){
var f_35868 = cljs.core._nth.call(null,chunk__35843_35865,i__35845_35867);
cljs.core.println.call(null,"  ",f_35868);

var G__35869 = seq__35842_35864;
var G__35870 = chunk__35843_35865;
var G__35871 = count__35844_35866;
var G__35872 = (i__35845_35867 + (1));
seq__35842_35864 = G__35869;
chunk__35843_35865 = G__35870;
count__35844_35866 = G__35871;
i__35845_35867 = G__35872;
continue;
} else {
var temp__4657__auto___35873 = cljs.core.seq.call(null,seq__35842_35864);
if(temp__4657__auto___35873){
var seq__35842_35874__$1 = temp__4657__auto___35873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35842_35874__$1)){
var c__26790__auto___35875 = cljs.core.chunk_first.call(null,seq__35842_35874__$1);
var G__35876 = cljs.core.chunk_rest.call(null,seq__35842_35874__$1);
var G__35877 = c__26790__auto___35875;
var G__35878 = cljs.core.count.call(null,c__26790__auto___35875);
var G__35879 = (0);
seq__35842_35864 = G__35876;
chunk__35843_35865 = G__35877;
count__35844_35866 = G__35878;
i__35845_35867 = G__35879;
continue;
} else {
var f_35880 = cljs.core.first.call(null,seq__35842_35874__$1);
cljs.core.println.call(null,"  ",f_35880);

var G__35881 = cljs.core.next.call(null,seq__35842_35874__$1);
var G__35882 = null;
var G__35883 = (0);
var G__35884 = (0);
seq__35842_35864 = G__35881;
chunk__35843_35865 = G__35882;
count__35844_35866 = G__35883;
i__35845_35867 = G__35884;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35885 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35885);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35885)))?cljs.core.second.call(null,arglists_35885):arglists_35885));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35846_35886 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35847_35887 = null;
var count__35848_35888 = (0);
var i__35849_35889 = (0);
while(true){
if((i__35849_35889 < count__35848_35888)){
var vec__35850_35890 = cljs.core._nth.call(null,chunk__35847_35887,i__35849_35889);
var name_35891 = cljs.core.nth.call(null,vec__35850_35890,(0),null);
var map__35853_35892 = cljs.core.nth.call(null,vec__35850_35890,(1),null);
var map__35853_35893__$1 = ((((!((map__35853_35892 == null)))?((((map__35853_35892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35853_35892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35853_35892):map__35853_35892);
var doc_35894 = cljs.core.get.call(null,map__35853_35893__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35895 = cljs.core.get.call(null,map__35853_35893__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35891);

cljs.core.println.call(null," ",arglists_35895);

if(cljs.core.truth_(doc_35894)){
cljs.core.println.call(null," ",doc_35894);
} else {
}

var G__35896 = seq__35846_35886;
var G__35897 = chunk__35847_35887;
var G__35898 = count__35848_35888;
var G__35899 = (i__35849_35889 + (1));
seq__35846_35886 = G__35896;
chunk__35847_35887 = G__35897;
count__35848_35888 = G__35898;
i__35849_35889 = G__35899;
continue;
} else {
var temp__4657__auto___35900 = cljs.core.seq.call(null,seq__35846_35886);
if(temp__4657__auto___35900){
var seq__35846_35901__$1 = temp__4657__auto___35900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35846_35901__$1)){
var c__26790__auto___35902 = cljs.core.chunk_first.call(null,seq__35846_35901__$1);
var G__35903 = cljs.core.chunk_rest.call(null,seq__35846_35901__$1);
var G__35904 = c__26790__auto___35902;
var G__35905 = cljs.core.count.call(null,c__26790__auto___35902);
var G__35906 = (0);
seq__35846_35886 = G__35903;
chunk__35847_35887 = G__35904;
count__35848_35888 = G__35905;
i__35849_35889 = G__35906;
continue;
} else {
var vec__35855_35907 = cljs.core.first.call(null,seq__35846_35901__$1);
var name_35908 = cljs.core.nth.call(null,vec__35855_35907,(0),null);
var map__35858_35909 = cljs.core.nth.call(null,vec__35855_35907,(1),null);
var map__35858_35910__$1 = ((((!((map__35858_35909 == null)))?((((map__35858_35909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35858_35909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35858_35909):map__35858_35909);
var doc_35911 = cljs.core.get.call(null,map__35858_35910__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35912 = cljs.core.get.call(null,map__35858_35910__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35908);

cljs.core.println.call(null," ",arglists_35912);

if(cljs.core.truth_(doc_35911)){
cljs.core.println.call(null," ",doc_35911);
} else {
}

var G__35913 = cljs.core.next.call(null,seq__35846_35901__$1);
var G__35914 = null;
var G__35915 = (0);
var G__35916 = (0);
seq__35846_35886 = G__35913;
chunk__35847_35887 = G__35914;
count__35848_35888 = G__35915;
i__35849_35889 = G__35916;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35860 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35861 = null;
var count__35862 = (0);
var i__35863 = (0);
while(true){
if((i__35863 < count__35862)){
var role = cljs.core._nth.call(null,chunk__35861,i__35863);
var temp__4657__auto___35917__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35917__$1)){
var spec_35918 = temp__4657__auto___35917__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35918));
} else {
}

var G__35919 = seq__35860;
var G__35920 = chunk__35861;
var G__35921 = count__35862;
var G__35922 = (i__35863 + (1));
seq__35860 = G__35919;
chunk__35861 = G__35920;
count__35862 = G__35921;
i__35863 = G__35922;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35860);
if(temp__4657__auto____$1){
var seq__35860__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35860__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__35860__$1);
var G__35923 = cljs.core.chunk_rest.call(null,seq__35860__$1);
var G__35924 = c__26790__auto__;
var G__35925 = cljs.core.count.call(null,c__26790__auto__);
var G__35926 = (0);
seq__35860 = G__35923;
chunk__35861 = G__35924;
count__35862 = G__35925;
i__35863 = G__35926;
continue;
} else {
var role = cljs.core.first.call(null,seq__35860__$1);
var temp__4657__auto___35927__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35927__$2)){
var spec_35928 = temp__4657__auto___35927__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35928));
} else {
}

var G__35929 = cljs.core.next.call(null,seq__35860__$1);
var G__35930 = null;
var G__35931 = (0);
var G__35932 = (0);
seq__35860 = G__35929;
chunk__35861 = G__35930;
count__35862 = G__35931;
i__35863 = G__35932;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1496852857501