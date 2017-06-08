// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35830){
var map__35855 = p__35830;
var map__35855__$1 = ((((!((map__35855 == null)))?((((map__35855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35855):map__35855);
var m = map__35855__$1;
var n = cljs.core.get.call(null,map__35855__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35855__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35857_35879 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35858_35880 = null;
var count__35859_35881 = (0);
var i__35860_35882 = (0);
while(true){
if((i__35860_35882 < count__35859_35881)){
var f_35883 = cljs.core._nth.call(null,chunk__35858_35880,i__35860_35882);
cljs.core.println.call(null,"  ",f_35883);

var G__35884 = seq__35857_35879;
var G__35885 = chunk__35858_35880;
var G__35886 = count__35859_35881;
var G__35887 = (i__35860_35882 + (1));
seq__35857_35879 = G__35884;
chunk__35858_35880 = G__35885;
count__35859_35881 = G__35886;
i__35860_35882 = G__35887;
continue;
} else {
var temp__4657__auto___35888 = cljs.core.seq.call(null,seq__35857_35879);
if(temp__4657__auto___35888){
var seq__35857_35889__$1 = temp__4657__auto___35888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35857_35889__$1)){
var c__26790__auto___35890 = cljs.core.chunk_first.call(null,seq__35857_35889__$1);
var G__35891 = cljs.core.chunk_rest.call(null,seq__35857_35889__$1);
var G__35892 = c__26790__auto___35890;
var G__35893 = cljs.core.count.call(null,c__26790__auto___35890);
var G__35894 = (0);
seq__35857_35879 = G__35891;
chunk__35858_35880 = G__35892;
count__35859_35881 = G__35893;
i__35860_35882 = G__35894;
continue;
} else {
var f_35895 = cljs.core.first.call(null,seq__35857_35889__$1);
cljs.core.println.call(null,"  ",f_35895);

var G__35896 = cljs.core.next.call(null,seq__35857_35889__$1);
var G__35897 = null;
var G__35898 = (0);
var G__35899 = (0);
seq__35857_35879 = G__35896;
chunk__35858_35880 = G__35897;
count__35859_35881 = G__35898;
i__35860_35882 = G__35899;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35900 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35900);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35900)))?cljs.core.second.call(null,arglists_35900):arglists_35900));
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
var seq__35861_35901 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35862_35902 = null;
var count__35863_35903 = (0);
var i__35864_35904 = (0);
while(true){
if((i__35864_35904 < count__35863_35903)){
var vec__35865_35905 = cljs.core._nth.call(null,chunk__35862_35902,i__35864_35904);
var name_35906 = cljs.core.nth.call(null,vec__35865_35905,(0),null);
var map__35868_35907 = cljs.core.nth.call(null,vec__35865_35905,(1),null);
var map__35868_35908__$1 = ((((!((map__35868_35907 == null)))?((((map__35868_35907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35868_35907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35868_35907):map__35868_35907);
var doc_35909 = cljs.core.get.call(null,map__35868_35908__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35910 = cljs.core.get.call(null,map__35868_35908__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35906);

cljs.core.println.call(null," ",arglists_35910);

if(cljs.core.truth_(doc_35909)){
cljs.core.println.call(null," ",doc_35909);
} else {
}

var G__35911 = seq__35861_35901;
var G__35912 = chunk__35862_35902;
var G__35913 = count__35863_35903;
var G__35914 = (i__35864_35904 + (1));
seq__35861_35901 = G__35911;
chunk__35862_35902 = G__35912;
count__35863_35903 = G__35913;
i__35864_35904 = G__35914;
continue;
} else {
var temp__4657__auto___35915 = cljs.core.seq.call(null,seq__35861_35901);
if(temp__4657__auto___35915){
var seq__35861_35916__$1 = temp__4657__auto___35915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35861_35916__$1)){
var c__26790__auto___35917 = cljs.core.chunk_first.call(null,seq__35861_35916__$1);
var G__35918 = cljs.core.chunk_rest.call(null,seq__35861_35916__$1);
var G__35919 = c__26790__auto___35917;
var G__35920 = cljs.core.count.call(null,c__26790__auto___35917);
var G__35921 = (0);
seq__35861_35901 = G__35918;
chunk__35862_35902 = G__35919;
count__35863_35903 = G__35920;
i__35864_35904 = G__35921;
continue;
} else {
var vec__35870_35922 = cljs.core.first.call(null,seq__35861_35916__$1);
var name_35923 = cljs.core.nth.call(null,vec__35870_35922,(0),null);
var map__35873_35924 = cljs.core.nth.call(null,vec__35870_35922,(1),null);
var map__35873_35925__$1 = ((((!((map__35873_35924 == null)))?((((map__35873_35924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35873_35924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35873_35924):map__35873_35924);
var doc_35926 = cljs.core.get.call(null,map__35873_35925__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35927 = cljs.core.get.call(null,map__35873_35925__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35923);

cljs.core.println.call(null," ",arglists_35927);

if(cljs.core.truth_(doc_35926)){
cljs.core.println.call(null," ",doc_35926);
} else {
}

var G__35928 = cljs.core.next.call(null,seq__35861_35916__$1);
var G__35929 = null;
var G__35930 = (0);
var G__35931 = (0);
seq__35861_35901 = G__35928;
chunk__35862_35902 = G__35929;
count__35863_35903 = G__35930;
i__35864_35904 = G__35931;
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

var seq__35875 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35876 = null;
var count__35877 = (0);
var i__35878 = (0);
while(true){
if((i__35878 < count__35877)){
var role = cljs.core._nth.call(null,chunk__35876,i__35878);
var temp__4657__auto___35932__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35932__$1)){
var spec_35933 = temp__4657__auto___35932__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35933));
} else {
}

var G__35934 = seq__35875;
var G__35935 = chunk__35876;
var G__35936 = count__35877;
var G__35937 = (i__35878 + (1));
seq__35875 = G__35934;
chunk__35876 = G__35935;
count__35877 = G__35936;
i__35878 = G__35937;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35875);
if(temp__4657__auto____$1){
var seq__35875__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35875__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__35875__$1);
var G__35938 = cljs.core.chunk_rest.call(null,seq__35875__$1);
var G__35939 = c__26790__auto__;
var G__35940 = cljs.core.count.call(null,c__26790__auto__);
var G__35941 = (0);
seq__35875 = G__35938;
chunk__35876 = G__35939;
count__35877 = G__35940;
i__35878 = G__35941;
continue;
} else {
var role = cljs.core.first.call(null,seq__35875__$1);
var temp__4657__auto___35942__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35942__$2)){
var spec_35943 = temp__4657__auto___35942__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35943));
} else {
}

var G__35944 = cljs.core.next.call(null,seq__35875__$1);
var G__35945 = null;
var G__35946 = (0);
var G__35947 = (0);
seq__35875 = G__35944;
chunk__35876 = G__35945;
count__35877 = G__35946;
i__35878 = G__35947;
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

//# sourceMappingURL=repl.js.map?rel=1496854390490