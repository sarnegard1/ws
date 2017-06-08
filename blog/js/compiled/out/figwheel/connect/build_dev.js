// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('sarah_website.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__41199__delegate = function (x){
if(cljs.core.truth_(sarah_website.core.on_js_reload)){
return cljs.core.apply.call(null,sarah_website.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'sarah-website.core/on-js-reload' is missing");
}
};
var G__41199 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__41200__i = 0, G__41200__a = new Array(arguments.length -  0);
while (G__41200__i < G__41200__a.length) {G__41200__a[G__41200__i] = arguments[G__41200__i + 0]; ++G__41200__i;}
  x = new cljs.core.IndexedSeq(G__41200__a,0);
} 
return G__41199__delegate.call(this,x);};
G__41199.cljs$lang$maxFixedArity = 0;
G__41199.cljs$lang$applyTo = (function (arglist__41201){
var x = cljs.core.seq(arglist__41201);
return G__41199__delegate(x);
});
G__41199.cljs$core$IFn$_invoke$arity$variadic = G__41199__delegate;
return G__41199;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3444/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1496853357766