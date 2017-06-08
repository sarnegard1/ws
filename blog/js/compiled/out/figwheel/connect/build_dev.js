// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('sarah_website.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__42591__delegate = function (x){
if(cljs.core.truth_(sarah_website.core.on_js_reload)){
return cljs.core.apply.call(null,sarah_website.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'sarah-website.core/on-js-reload' is missing");
}
};
var G__42591 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__42592__i = 0, G__42592__a = new Array(arguments.length -  0);
while (G__42592__i < G__42592__a.length) {G__42592__a[G__42592__i] = arguments[G__42592__i + 0]; ++G__42592__i;}
  x = new cljs.core.IndexedSeq(G__42592__a,0);
} 
return G__42591__delegate.call(this,x);};
G__42591.cljs$lang$maxFixedArity = 0;
G__42591.cljs$lang$applyTo = (function (arglist__42593){
var x = cljs.core.seq(arglist__42593);
return G__42591__delegate(x);
});
G__42591.cljs$core$IFn$_invoke$arity$variadic = G__42591__delegate;
return G__42591;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3444/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1496949342177