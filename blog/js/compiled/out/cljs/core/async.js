// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29212 = [];
var len__27054__auto___29218 = arguments.length;
var i__27055__auto___29219 = (0);
while(true){
if((i__27055__auto___29219 < len__27054__auto___29218)){
args29212.push((arguments[i__27055__auto___29219]));

var G__29220 = (i__27055__auto___29219 + (1));
i__27055__auto___29219 = G__29220;
continue;
} else {
}
break;
}

var G__29214 = args29212.length;
switch (G__29214) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29212.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29215 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29215 = (function (f,blockable,meta29216){
this.f = f;
this.blockable = blockable;
this.meta29216 = meta29216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29217,meta29216__$1){
var self__ = this;
var _29217__$1 = this;
return (new cljs.core.async.t_cljs$core$async29215(self__.f,self__.blockable,meta29216__$1));
});

cljs.core.async.t_cljs$core$async29215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29217){
var self__ = this;
var _29217__$1 = this;
return self__.meta29216;
});

cljs.core.async.t_cljs$core$async29215.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29215.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29216","meta29216",1099030730,null)], null);
});

cljs.core.async.t_cljs$core$async29215.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29215";

cljs.core.async.t_cljs$core$async29215.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async29215");
});

cljs.core.async.__GT_t_cljs$core$async29215 = (function cljs$core$async$__GT_t_cljs$core$async29215(f__$1,blockable__$1,meta29216){
return (new cljs.core.async.t_cljs$core$async29215(f__$1,blockable__$1,meta29216));
});

}

return (new cljs.core.async.t_cljs$core$async29215(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29224 = [];
var len__27054__auto___29227 = arguments.length;
var i__27055__auto___29228 = (0);
while(true){
if((i__27055__auto___29228 < len__27054__auto___29227)){
args29224.push((arguments[i__27055__auto___29228]));

var G__29229 = (i__27055__auto___29228 + (1));
i__27055__auto___29228 = G__29229;
continue;
} else {
}
break;
}

var G__29226 = args29224.length;
switch (G__29226) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29224.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29231 = [];
var len__27054__auto___29234 = arguments.length;
var i__27055__auto___29235 = (0);
while(true){
if((i__27055__auto___29235 < len__27054__auto___29234)){
args29231.push((arguments[i__27055__auto___29235]));

var G__29236 = (i__27055__auto___29235 + (1));
i__27055__auto___29235 = G__29236;
continue;
} else {
}
break;
}

var G__29233 = args29231.length;
switch (G__29233) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29231.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29238 = [];
var len__27054__auto___29241 = arguments.length;
var i__27055__auto___29242 = (0);
while(true){
if((i__27055__auto___29242 < len__27054__auto___29241)){
args29238.push((arguments[i__27055__auto___29242]));

var G__29243 = (i__27055__auto___29242 + (1));
i__27055__auto___29242 = G__29243;
continue;
} else {
}
break;
}

var G__29240 = args29238.length;
switch (G__29240) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29238.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29245 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29245);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29245,ret){
return (function (){
return fn1.call(null,val_29245);
});})(val_29245,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29246 = [];
var len__27054__auto___29249 = arguments.length;
var i__27055__auto___29250 = (0);
while(true){
if((i__27055__auto___29250 < len__27054__auto___29249)){
args29246.push((arguments[i__27055__auto___29250]));

var G__29251 = (i__27055__auto___29250 + (1));
i__27055__auto___29250 = G__29251;
continue;
} else {
}
break;
}

var G__29248 = args29246.length;
switch (G__29248) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29246.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26894__auto___29253 = n;
var x_29254 = (0);
while(true){
if((x_29254 < n__26894__auto___29253)){
(a[x_29254] = (0));

var G__29255 = (x_29254 + (1));
x_29254 = G__29255;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29256 = (i + (1));
i = G__29256;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29260 = (function (alt_flag,flag,meta29261){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29261 = meta29261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29262,meta29261__$1){
var self__ = this;
var _29262__$1 = this;
return (new cljs.core.async.t_cljs$core$async29260(self__.alt_flag,self__.flag,meta29261__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29262){
var self__ = this;
var _29262__$1 = this;
return self__.meta29261;
});})(flag))
;

cljs.core.async.t_cljs$core$async29260.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29260.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29260.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29261","meta29261",-925531275,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29260";

cljs.core.async.t_cljs$core$async29260.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async29260");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29260 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29260(alt_flag__$1,flag__$1,meta29261){
return (new cljs.core.async.t_cljs$core$async29260(alt_flag__$1,flag__$1,meta29261));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29260(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29266 = (function (alt_handler,flag,cb,meta29267){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29267 = meta29267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29268,meta29267__$1){
var self__ = this;
var _29268__$1 = this;
return (new cljs.core.async.t_cljs$core$async29266(self__.alt_handler,self__.flag,self__.cb,meta29267__$1));
});

cljs.core.async.t_cljs$core$async29266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29268){
var self__ = this;
var _29268__$1 = this;
return self__.meta29267;
});

cljs.core.async.t_cljs$core$async29266.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29266.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29266.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29266.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29267","meta29267",1592946084,null)], null);
});

cljs.core.async.t_cljs$core$async29266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29266";

cljs.core.async.t_cljs$core$async29266.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async29266");
});

cljs.core.async.__GT_t_cljs$core$async29266 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29266(alt_handler__$1,flag__$1,cb__$1,meta29267){
return (new cljs.core.async.t_cljs$core$async29266(alt_handler__$1,flag__$1,cb__$1,meta29267));
});

}

return (new cljs.core.async.t_cljs$core$async29266(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29269_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29269_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29270_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29270_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25979__auto__ = wport;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29271 = (i + (1));
i = G__29271;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25979__auto__ = ret;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25967__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25967__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25967__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___29277 = arguments.length;
var i__27055__auto___29278 = (0);
while(true){
if((i__27055__auto___29278 < len__27054__auto___29277)){
args__27061__auto__.push((arguments[i__27055__auto___29278]));

var G__29279 = (i__27055__auto___29278 + (1));
i__27055__auto___29278 = G__29279;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29274){
var map__29275 = p__29274;
var map__29275__$1 = ((((!((map__29275 == null)))?((((map__29275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29275):map__29275);
var opts = map__29275__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29272){
var G__29273 = cljs.core.first.call(null,seq29272);
var seq29272__$1 = cljs.core.next.call(null,seq29272);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29273,seq29272__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29280 = [];
var len__27054__auto___29330 = arguments.length;
var i__27055__auto___29331 = (0);
while(true){
if((i__27055__auto___29331 < len__27054__auto___29330)){
args29280.push((arguments[i__27055__auto___29331]));

var G__29332 = (i__27055__auto___29331 + (1));
i__27055__auto___29331 = G__29332;
continue;
} else {
}
break;
}

var G__29282 = args29280.length;
switch (G__29282) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29280.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29167__auto___29334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___29334){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___29334){
return (function (state_29306){
var state_val_29307 = (state_29306[(1)]);
if((state_val_29307 === (7))){
var inst_29302 = (state_29306[(2)]);
var state_29306__$1 = state_29306;
var statearr_29308_29335 = state_29306__$1;
(statearr_29308_29335[(2)] = inst_29302);

(statearr_29308_29335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (1))){
var state_29306__$1 = state_29306;
var statearr_29309_29336 = state_29306__$1;
(statearr_29309_29336[(2)] = null);

(statearr_29309_29336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (4))){
var inst_29285 = (state_29306[(7)]);
var inst_29285__$1 = (state_29306[(2)]);
var inst_29286 = (inst_29285__$1 == null);
var state_29306__$1 = (function (){var statearr_29310 = state_29306;
(statearr_29310[(7)] = inst_29285__$1);

return statearr_29310;
})();
if(cljs.core.truth_(inst_29286)){
var statearr_29311_29337 = state_29306__$1;
(statearr_29311_29337[(1)] = (5));

} else {
var statearr_29312_29338 = state_29306__$1;
(statearr_29312_29338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (13))){
var state_29306__$1 = state_29306;
var statearr_29313_29339 = state_29306__$1;
(statearr_29313_29339[(2)] = null);

(statearr_29313_29339[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (6))){
var inst_29285 = (state_29306[(7)]);
var state_29306__$1 = state_29306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29306__$1,(11),to,inst_29285);
} else {
if((state_val_29307 === (3))){
var inst_29304 = (state_29306[(2)]);
var state_29306__$1 = state_29306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29306__$1,inst_29304);
} else {
if((state_val_29307 === (12))){
var state_29306__$1 = state_29306;
var statearr_29314_29340 = state_29306__$1;
(statearr_29314_29340[(2)] = null);

(statearr_29314_29340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (2))){
var state_29306__$1 = state_29306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29306__$1,(4),from);
} else {
if((state_val_29307 === (11))){
var inst_29295 = (state_29306[(2)]);
var state_29306__$1 = state_29306;
if(cljs.core.truth_(inst_29295)){
var statearr_29315_29341 = state_29306__$1;
(statearr_29315_29341[(1)] = (12));

} else {
var statearr_29316_29342 = state_29306__$1;
(statearr_29316_29342[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (9))){
var state_29306__$1 = state_29306;
var statearr_29317_29343 = state_29306__$1;
(statearr_29317_29343[(2)] = null);

(statearr_29317_29343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (5))){
var state_29306__$1 = state_29306;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29318_29344 = state_29306__$1;
(statearr_29318_29344[(1)] = (8));

} else {
var statearr_29319_29345 = state_29306__$1;
(statearr_29319_29345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (14))){
var inst_29300 = (state_29306[(2)]);
var state_29306__$1 = state_29306;
var statearr_29320_29346 = state_29306__$1;
(statearr_29320_29346[(2)] = inst_29300);

(statearr_29320_29346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (10))){
var inst_29292 = (state_29306[(2)]);
var state_29306__$1 = state_29306;
var statearr_29321_29347 = state_29306__$1;
(statearr_29321_29347[(2)] = inst_29292);

(statearr_29321_29347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (8))){
var inst_29289 = cljs.core.async.close_BANG_.call(null,to);
var state_29306__$1 = state_29306;
var statearr_29322_29348 = state_29306__$1;
(statearr_29322_29348[(2)] = inst_29289);

(statearr_29322_29348[(1)] = (10));


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
});})(c__29167__auto___29334))
;
return ((function (switch__29055__auto__,c__29167__auto___29334){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_29326 = [null,null,null,null,null,null,null,null];
(statearr_29326[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_29326[(1)] = (1));

return statearr_29326;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_29306){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_29306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e29327){if((e29327 instanceof Object)){
var ex__29059__auto__ = e29327;
var statearr_29328_29349 = state_29306;
(statearr_29328_29349[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29350 = state_29306;
state_29306 = G__29350;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_29306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_29306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___29334))
})();
var state__29169__auto__ = (function (){var statearr_29329 = f__29168__auto__.call(null);
(statearr_29329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___29334);

return statearr_29329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___29334))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29538){
var vec__29539 = p__29538;
var v = cljs.core.nth.call(null,vec__29539,(0),null);
var p = cljs.core.nth.call(null,vec__29539,(1),null);
var job = vec__29539;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29167__auto___29725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___29725,res,vec__29539,v,p,job,jobs,results){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___29725,res,vec__29539,v,p,job,jobs,results){
return (function (state_29546){
var state_val_29547 = (state_29546[(1)]);
if((state_val_29547 === (1))){
var state_29546__$1 = state_29546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29546__$1,(2),res,v);
} else {
if((state_val_29547 === (2))){
var inst_29543 = (state_29546[(2)]);
var inst_29544 = cljs.core.async.close_BANG_.call(null,res);
var state_29546__$1 = (function (){var statearr_29548 = state_29546;
(statearr_29548[(7)] = inst_29543);

return statearr_29548;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29546__$1,inst_29544);
} else {
return null;
}
}
});})(c__29167__auto___29725,res,vec__29539,v,p,job,jobs,results))
;
return ((function (switch__29055__auto__,c__29167__auto___29725,res,vec__29539,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0 = (function (){
var statearr_29552 = [null,null,null,null,null,null,null,null];
(statearr_29552[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__);

(statearr_29552[(1)] = (1));

return statearr_29552;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1 = (function (state_29546){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_29546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e29553){if((e29553 instanceof Object)){
var ex__29059__auto__ = e29553;
var statearr_29554_29726 = state_29546;
(statearr_29554_29726[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29727 = state_29546;
state_29546 = G__29727;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = function(state_29546){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1.call(this,state_29546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___29725,res,vec__29539,v,p,job,jobs,results))
})();
var state__29169__auto__ = (function (){var statearr_29555 = f__29168__auto__.call(null);
(statearr_29555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___29725);

return statearr_29555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___29725,res,vec__29539,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29556){
var vec__29557 = p__29556;
var v = cljs.core.nth.call(null,vec__29557,(0),null);
var p = cljs.core.nth.call(null,vec__29557,(1),null);
var job = vec__29557;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26894__auto___29728 = n;
var __29729 = (0);
while(true){
if((__29729 < n__26894__auto___29728)){
var G__29560_29730 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29560_29730) {
case "compute":
var c__29167__auto___29732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29729,c__29167__auto___29732,G__29560_29730,n__26894__auto___29728,jobs,results,process,async){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (__29729,c__29167__auto___29732,G__29560_29730,n__26894__auto___29728,jobs,results,process,async){
return (function (state_29573){
var state_val_29574 = (state_29573[(1)]);
if((state_val_29574 === (1))){
var state_29573__$1 = state_29573;
var statearr_29575_29733 = state_29573__$1;
(statearr_29575_29733[(2)] = null);

(statearr_29575_29733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29574 === (2))){
var state_29573__$1 = state_29573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29573__$1,(4),jobs);
} else {
if((state_val_29574 === (3))){
var inst_29571 = (state_29573[(2)]);
var state_29573__$1 = state_29573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29573__$1,inst_29571);
} else {
if((state_val_29574 === (4))){
var inst_29563 = (state_29573[(2)]);
var inst_29564 = process.call(null,inst_29563);
var state_29573__$1 = state_29573;
if(cljs.core.truth_(inst_29564)){
var statearr_29576_29734 = state_29573__$1;
(statearr_29576_29734[(1)] = (5));

} else {
var statearr_29577_29735 = state_29573__$1;
(statearr_29577_29735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29574 === (5))){
var state_29573__$1 = state_29573;
var statearr_29578_29736 = state_29573__$1;
(statearr_29578_29736[(2)] = null);

(statearr_29578_29736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29574 === (6))){
var state_29573__$1 = state_29573;
var statearr_29579_29737 = state_29573__$1;
(statearr_29579_29737[(2)] = null);

(statearr_29579_29737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29574 === (7))){
var inst_29569 = (state_29573[(2)]);
var state_29573__$1 = state_29573;
var statearr_29580_29738 = state_29573__$1;
(statearr_29580_29738[(2)] = inst_29569);

(statearr_29580_29738[(1)] = (3));


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
});})(__29729,c__29167__auto___29732,G__29560_29730,n__26894__auto___29728,jobs,results,process,async))
;
return ((function (__29729,switch__29055__auto__,c__29167__auto___29732,G__29560_29730,n__26894__auto___29728,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0 = (function (){
var statearr_29584 = [null,null,null,null,null,null,null];
(statearr_29584[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__);

(statearr_29584[(1)] = (1));

return statearr_29584;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1 = (function (state_29573){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_29573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e29585){if((e29585 instanceof Object)){
var ex__29059__auto__ = e29585;
var statearr_29586_29739 = state_29573;
(statearr_29586_29739[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29740 = state_29573;
state_29573 = G__29740;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = function(state_29573){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1.call(this,state_29573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__;
})()
;})(__29729,switch__29055__auto__,c__29167__auto___29732,G__29560_29730,n__26894__auto___29728,jobs,results,process,async))
})();
var state__29169__auto__ = (function (){var statearr_29587 = f__29168__auto__.call(null);
(statearr_29587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___29732);

return statearr_29587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(__29729,c__29167__auto___29732,G__29560_29730,n__26894__auto___29728,jobs,results,process,async))
);


break;
case "async":
var c__29167__auto___29741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29729,c__29167__auto___29741,G__29560_29730,n__26894__auto___29728,jobs,results,process,async){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (__29729,c__29167__auto___29741,G__29560_29730,n__26894__auto___29728,jobs,results,process,async){
return (function (state_29600){
var state_val_29601 = (state_29600[(1)]);
if((state_val_29601 === (1))){
var state_29600__$1 = state_29600;
var statearr_29602_29742 = state_29600__$1;
(statearr_29602_29742[(2)] = null);

(statearr_29602_29742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (2))){
var state_29600__$1 = state_29600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29600__$1,(4),jobs);
} else {
if((state_val_29601 === (3))){
var inst_29598 = (state_29600[(2)]);
var state_29600__$1 = state_29600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29600__$1,inst_29598);
} else {
if((state_val_29601 === (4))){
var inst_29590 = (state_29600[(2)]);
var inst_29591 = async.call(null,inst_29590);
var state_29600__$1 = state_29600;
if(cljs.core.truth_(inst_29591)){
var statearr_29603_29743 = state_29600__$1;
(statearr_29603_29743[(1)] = (5));

} else {
var statearr_29604_29744 = state_29600__$1;
(statearr_29604_29744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (5))){
var state_29600__$1 = state_29600;
var statearr_29605_29745 = state_29600__$1;
(statearr_29605_29745[(2)] = null);

(statearr_29605_29745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (6))){
var state_29600__$1 = state_29600;
var statearr_29606_29746 = state_29600__$1;
(statearr_29606_29746[(2)] = null);

(statearr_29606_29746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (7))){
var inst_29596 = (state_29600[(2)]);
var state_29600__$1 = state_29600;
var statearr_29607_29747 = state_29600__$1;
(statearr_29607_29747[(2)] = inst_29596);

(statearr_29607_29747[(1)] = (3));


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
});})(__29729,c__29167__auto___29741,G__29560_29730,n__26894__auto___29728,jobs,results,process,async))
;
return ((function (__29729,switch__29055__auto__,c__29167__auto___29741,G__29560_29730,n__26894__auto___29728,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0 = (function (){
var statearr_29611 = [null,null,null,null,null,null,null];
(statearr_29611[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__);

(statearr_29611[(1)] = (1));

return statearr_29611;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1 = (function (state_29600){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_29600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e29612){if((e29612 instanceof Object)){
var ex__29059__auto__ = e29612;
var statearr_29613_29748 = state_29600;
(statearr_29613_29748[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29749 = state_29600;
state_29600 = G__29749;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = function(state_29600){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1.call(this,state_29600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__;
})()
;})(__29729,switch__29055__auto__,c__29167__auto___29741,G__29560_29730,n__26894__auto___29728,jobs,results,process,async))
})();
var state__29169__auto__ = (function (){var statearr_29614 = f__29168__auto__.call(null);
(statearr_29614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___29741);

return statearr_29614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(__29729,c__29167__auto___29741,G__29560_29730,n__26894__auto___29728,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29750 = (__29729 + (1));
__29729 = G__29750;
continue;
} else {
}
break;
}

var c__29167__auto___29751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___29751,jobs,results,process,async){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___29751,jobs,results,process,async){
return (function (state_29636){
var state_val_29637 = (state_29636[(1)]);
if((state_val_29637 === (1))){
var state_29636__$1 = state_29636;
var statearr_29638_29752 = state_29636__$1;
(statearr_29638_29752[(2)] = null);

(statearr_29638_29752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (2))){
var state_29636__$1 = state_29636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29636__$1,(4),from);
} else {
if((state_val_29637 === (3))){
var inst_29634 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29636__$1,inst_29634);
} else {
if((state_val_29637 === (4))){
var inst_29617 = (state_29636[(7)]);
var inst_29617__$1 = (state_29636[(2)]);
var inst_29618 = (inst_29617__$1 == null);
var state_29636__$1 = (function (){var statearr_29639 = state_29636;
(statearr_29639[(7)] = inst_29617__$1);

return statearr_29639;
})();
if(cljs.core.truth_(inst_29618)){
var statearr_29640_29753 = state_29636__$1;
(statearr_29640_29753[(1)] = (5));

} else {
var statearr_29641_29754 = state_29636__$1;
(statearr_29641_29754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (5))){
var inst_29620 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29636__$1 = state_29636;
var statearr_29642_29755 = state_29636__$1;
(statearr_29642_29755[(2)] = inst_29620);

(statearr_29642_29755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (6))){
var inst_29617 = (state_29636[(7)]);
var inst_29622 = (state_29636[(8)]);
var inst_29622__$1 = cljs.core.async.chan.call(null,(1));
var inst_29623 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29624 = [inst_29617,inst_29622__$1];
var inst_29625 = (new cljs.core.PersistentVector(null,2,(5),inst_29623,inst_29624,null));
var state_29636__$1 = (function (){var statearr_29643 = state_29636;
(statearr_29643[(8)] = inst_29622__$1);

return statearr_29643;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29636__$1,(8),jobs,inst_29625);
} else {
if((state_val_29637 === (7))){
var inst_29632 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
var statearr_29644_29756 = state_29636__$1;
(statearr_29644_29756[(2)] = inst_29632);

(statearr_29644_29756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (8))){
var inst_29622 = (state_29636[(8)]);
var inst_29627 = (state_29636[(2)]);
var state_29636__$1 = (function (){var statearr_29645 = state_29636;
(statearr_29645[(9)] = inst_29627);

return statearr_29645;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29636__$1,(9),results,inst_29622);
} else {
if((state_val_29637 === (9))){
var inst_29629 = (state_29636[(2)]);
var state_29636__$1 = (function (){var statearr_29646 = state_29636;
(statearr_29646[(10)] = inst_29629);

return statearr_29646;
})();
var statearr_29647_29757 = state_29636__$1;
(statearr_29647_29757[(2)] = null);

(statearr_29647_29757[(1)] = (2));


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
});})(c__29167__auto___29751,jobs,results,process,async))
;
return ((function (switch__29055__auto__,c__29167__auto___29751,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0 = (function (){
var statearr_29651 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29651[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__);

(statearr_29651[(1)] = (1));

return statearr_29651;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1 = (function (state_29636){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_29636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e29652){if((e29652 instanceof Object)){
var ex__29059__auto__ = e29652;
var statearr_29653_29758 = state_29636;
(statearr_29653_29758[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29759 = state_29636;
state_29636 = G__29759;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = function(state_29636){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1.call(this,state_29636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___29751,jobs,results,process,async))
})();
var state__29169__auto__ = (function (){var statearr_29654 = f__29168__auto__.call(null);
(statearr_29654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___29751);

return statearr_29654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___29751,jobs,results,process,async))
);


var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__,jobs,results,process,async){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__,jobs,results,process,async){
return (function (state_29692){
var state_val_29693 = (state_29692[(1)]);
if((state_val_29693 === (7))){
var inst_29688 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29694_29760 = state_29692__$1;
(statearr_29694_29760[(2)] = inst_29688);

(statearr_29694_29760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (20))){
var state_29692__$1 = state_29692;
var statearr_29695_29761 = state_29692__$1;
(statearr_29695_29761[(2)] = null);

(statearr_29695_29761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (1))){
var state_29692__$1 = state_29692;
var statearr_29696_29762 = state_29692__$1;
(statearr_29696_29762[(2)] = null);

(statearr_29696_29762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (4))){
var inst_29657 = (state_29692[(7)]);
var inst_29657__$1 = (state_29692[(2)]);
var inst_29658 = (inst_29657__$1 == null);
var state_29692__$1 = (function (){var statearr_29697 = state_29692;
(statearr_29697[(7)] = inst_29657__$1);

return statearr_29697;
})();
if(cljs.core.truth_(inst_29658)){
var statearr_29698_29763 = state_29692__$1;
(statearr_29698_29763[(1)] = (5));

} else {
var statearr_29699_29764 = state_29692__$1;
(statearr_29699_29764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (15))){
var inst_29670 = (state_29692[(8)]);
var state_29692__$1 = state_29692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29692__$1,(18),to,inst_29670);
} else {
if((state_val_29693 === (21))){
var inst_29683 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29700_29765 = state_29692__$1;
(statearr_29700_29765[(2)] = inst_29683);

(statearr_29700_29765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (13))){
var inst_29685 = (state_29692[(2)]);
var state_29692__$1 = (function (){var statearr_29701 = state_29692;
(statearr_29701[(9)] = inst_29685);

return statearr_29701;
})();
var statearr_29702_29766 = state_29692__$1;
(statearr_29702_29766[(2)] = null);

(statearr_29702_29766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (6))){
var inst_29657 = (state_29692[(7)]);
var state_29692__$1 = state_29692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29692__$1,(11),inst_29657);
} else {
if((state_val_29693 === (17))){
var inst_29678 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
if(cljs.core.truth_(inst_29678)){
var statearr_29703_29767 = state_29692__$1;
(statearr_29703_29767[(1)] = (19));

} else {
var statearr_29704_29768 = state_29692__$1;
(statearr_29704_29768[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (3))){
var inst_29690 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29692__$1,inst_29690);
} else {
if((state_val_29693 === (12))){
var inst_29667 = (state_29692[(10)]);
var state_29692__$1 = state_29692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29692__$1,(14),inst_29667);
} else {
if((state_val_29693 === (2))){
var state_29692__$1 = state_29692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29692__$1,(4),results);
} else {
if((state_val_29693 === (19))){
var state_29692__$1 = state_29692;
var statearr_29705_29769 = state_29692__$1;
(statearr_29705_29769[(2)] = null);

(statearr_29705_29769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (11))){
var inst_29667 = (state_29692[(2)]);
var state_29692__$1 = (function (){var statearr_29706 = state_29692;
(statearr_29706[(10)] = inst_29667);

return statearr_29706;
})();
var statearr_29707_29770 = state_29692__$1;
(statearr_29707_29770[(2)] = null);

(statearr_29707_29770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (9))){
var state_29692__$1 = state_29692;
var statearr_29708_29771 = state_29692__$1;
(statearr_29708_29771[(2)] = null);

(statearr_29708_29771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (5))){
var state_29692__$1 = state_29692;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29709_29772 = state_29692__$1;
(statearr_29709_29772[(1)] = (8));

} else {
var statearr_29710_29773 = state_29692__$1;
(statearr_29710_29773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (14))){
var inst_29672 = (state_29692[(11)]);
var inst_29670 = (state_29692[(8)]);
var inst_29670__$1 = (state_29692[(2)]);
var inst_29671 = (inst_29670__$1 == null);
var inst_29672__$1 = cljs.core.not.call(null,inst_29671);
var state_29692__$1 = (function (){var statearr_29711 = state_29692;
(statearr_29711[(11)] = inst_29672__$1);

(statearr_29711[(8)] = inst_29670__$1);

return statearr_29711;
})();
if(inst_29672__$1){
var statearr_29712_29774 = state_29692__$1;
(statearr_29712_29774[(1)] = (15));

} else {
var statearr_29713_29775 = state_29692__$1;
(statearr_29713_29775[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (16))){
var inst_29672 = (state_29692[(11)]);
var state_29692__$1 = state_29692;
var statearr_29714_29776 = state_29692__$1;
(statearr_29714_29776[(2)] = inst_29672);

(statearr_29714_29776[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (10))){
var inst_29664 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29715_29777 = state_29692__$1;
(statearr_29715_29777[(2)] = inst_29664);

(statearr_29715_29777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (18))){
var inst_29675 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29716_29778 = state_29692__$1;
(statearr_29716_29778[(2)] = inst_29675);

(statearr_29716_29778[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (8))){
var inst_29661 = cljs.core.async.close_BANG_.call(null,to);
var state_29692__$1 = state_29692;
var statearr_29717_29779 = state_29692__$1;
(statearr_29717_29779[(2)] = inst_29661);

(statearr_29717_29779[(1)] = (10));


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
});})(c__29167__auto__,jobs,results,process,async))
;
return ((function (switch__29055__auto__,c__29167__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0 = (function (){
var statearr_29721 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29721[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__);

(statearr_29721[(1)] = (1));

return statearr_29721;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1 = (function (state_29692){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_29692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e29722){if((e29722 instanceof Object)){
var ex__29059__auto__ = e29722;
var statearr_29723_29780 = state_29692;
(statearr_29723_29780[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29781 = state_29692;
state_29692 = G__29781;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__ = function(state_29692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1.call(this,state_29692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__,jobs,results,process,async))
})();
var state__29169__auto__ = (function (){var statearr_29724 = f__29168__auto__.call(null);
(statearr_29724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_29724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__,jobs,results,process,async))
);

return c__29167__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29782 = [];
var len__27054__auto___29785 = arguments.length;
var i__27055__auto___29786 = (0);
while(true){
if((i__27055__auto___29786 < len__27054__auto___29785)){
args29782.push((arguments[i__27055__auto___29786]));

var G__29787 = (i__27055__auto___29786 + (1));
i__27055__auto___29786 = G__29787;
continue;
} else {
}
break;
}

var G__29784 = args29782.length;
switch (G__29784) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29782.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29789 = [];
var len__27054__auto___29792 = arguments.length;
var i__27055__auto___29793 = (0);
while(true){
if((i__27055__auto___29793 < len__27054__auto___29792)){
args29789.push((arguments[i__27055__auto___29793]));

var G__29794 = (i__27055__auto___29793 + (1));
i__27055__auto___29793 = G__29794;
continue;
} else {
}
break;
}

var G__29791 = args29789.length;
switch (G__29791) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29789.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29796 = [];
var len__27054__auto___29849 = arguments.length;
var i__27055__auto___29850 = (0);
while(true){
if((i__27055__auto___29850 < len__27054__auto___29849)){
args29796.push((arguments[i__27055__auto___29850]));

var G__29851 = (i__27055__auto___29850 + (1));
i__27055__auto___29850 = G__29851;
continue;
} else {
}
break;
}

var G__29798 = args29796.length;
switch (G__29798) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29796.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29167__auto___29853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___29853,tc,fc){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___29853,tc,fc){
return (function (state_29824){
var state_val_29825 = (state_29824[(1)]);
if((state_val_29825 === (7))){
var inst_29820 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
var statearr_29826_29854 = state_29824__$1;
(statearr_29826_29854[(2)] = inst_29820);

(statearr_29826_29854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (1))){
var state_29824__$1 = state_29824;
var statearr_29827_29855 = state_29824__$1;
(statearr_29827_29855[(2)] = null);

(statearr_29827_29855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (4))){
var inst_29801 = (state_29824[(7)]);
var inst_29801__$1 = (state_29824[(2)]);
var inst_29802 = (inst_29801__$1 == null);
var state_29824__$1 = (function (){var statearr_29828 = state_29824;
(statearr_29828[(7)] = inst_29801__$1);

return statearr_29828;
})();
if(cljs.core.truth_(inst_29802)){
var statearr_29829_29856 = state_29824__$1;
(statearr_29829_29856[(1)] = (5));

} else {
var statearr_29830_29857 = state_29824__$1;
(statearr_29830_29857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (13))){
var state_29824__$1 = state_29824;
var statearr_29831_29858 = state_29824__$1;
(statearr_29831_29858[(2)] = null);

(statearr_29831_29858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (6))){
var inst_29801 = (state_29824[(7)]);
var inst_29807 = p.call(null,inst_29801);
var state_29824__$1 = state_29824;
if(cljs.core.truth_(inst_29807)){
var statearr_29832_29859 = state_29824__$1;
(statearr_29832_29859[(1)] = (9));

} else {
var statearr_29833_29860 = state_29824__$1;
(statearr_29833_29860[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (3))){
var inst_29822 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29824__$1,inst_29822);
} else {
if((state_val_29825 === (12))){
var state_29824__$1 = state_29824;
var statearr_29834_29861 = state_29824__$1;
(statearr_29834_29861[(2)] = null);

(statearr_29834_29861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (2))){
var state_29824__$1 = state_29824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29824__$1,(4),ch);
} else {
if((state_val_29825 === (11))){
var inst_29801 = (state_29824[(7)]);
var inst_29811 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29824__$1,(8),inst_29811,inst_29801);
} else {
if((state_val_29825 === (9))){
var state_29824__$1 = state_29824;
var statearr_29835_29862 = state_29824__$1;
(statearr_29835_29862[(2)] = tc);

(statearr_29835_29862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (5))){
var inst_29804 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29805 = cljs.core.async.close_BANG_.call(null,fc);
var state_29824__$1 = (function (){var statearr_29836 = state_29824;
(statearr_29836[(8)] = inst_29804);

return statearr_29836;
})();
var statearr_29837_29863 = state_29824__$1;
(statearr_29837_29863[(2)] = inst_29805);

(statearr_29837_29863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (14))){
var inst_29818 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
var statearr_29838_29864 = state_29824__$1;
(statearr_29838_29864[(2)] = inst_29818);

(statearr_29838_29864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (10))){
var state_29824__$1 = state_29824;
var statearr_29839_29865 = state_29824__$1;
(statearr_29839_29865[(2)] = fc);

(statearr_29839_29865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (8))){
var inst_29813 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
if(cljs.core.truth_(inst_29813)){
var statearr_29840_29866 = state_29824__$1;
(statearr_29840_29866[(1)] = (12));

} else {
var statearr_29841_29867 = state_29824__$1;
(statearr_29841_29867[(1)] = (13));

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
});})(c__29167__auto___29853,tc,fc))
;
return ((function (switch__29055__auto__,c__29167__auto___29853,tc,fc){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_29845 = [null,null,null,null,null,null,null,null,null];
(statearr_29845[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_29845[(1)] = (1));

return statearr_29845;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_29824){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_29824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e29846){if((e29846 instanceof Object)){
var ex__29059__auto__ = e29846;
var statearr_29847_29868 = state_29824;
(statearr_29847_29868[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29869 = state_29824;
state_29824 = G__29869;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_29824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_29824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___29853,tc,fc))
})();
var state__29169__auto__ = (function (){var statearr_29848 = f__29168__auto__.call(null);
(statearr_29848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___29853);

return statearr_29848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___29853,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__){
return (function (state_29933){
var state_val_29934 = (state_29933[(1)]);
if((state_val_29934 === (7))){
var inst_29929 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
var statearr_29935_29956 = state_29933__$1;
(statearr_29935_29956[(2)] = inst_29929);

(statearr_29935_29956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (1))){
var inst_29913 = init;
var state_29933__$1 = (function (){var statearr_29936 = state_29933;
(statearr_29936[(7)] = inst_29913);

return statearr_29936;
})();
var statearr_29937_29957 = state_29933__$1;
(statearr_29937_29957[(2)] = null);

(statearr_29937_29957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (4))){
var inst_29916 = (state_29933[(8)]);
var inst_29916__$1 = (state_29933[(2)]);
var inst_29917 = (inst_29916__$1 == null);
var state_29933__$1 = (function (){var statearr_29938 = state_29933;
(statearr_29938[(8)] = inst_29916__$1);

return statearr_29938;
})();
if(cljs.core.truth_(inst_29917)){
var statearr_29939_29958 = state_29933__$1;
(statearr_29939_29958[(1)] = (5));

} else {
var statearr_29940_29959 = state_29933__$1;
(statearr_29940_29959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (6))){
var inst_29920 = (state_29933[(9)]);
var inst_29913 = (state_29933[(7)]);
var inst_29916 = (state_29933[(8)]);
var inst_29920__$1 = f.call(null,inst_29913,inst_29916);
var inst_29921 = cljs.core.reduced_QMARK_.call(null,inst_29920__$1);
var state_29933__$1 = (function (){var statearr_29941 = state_29933;
(statearr_29941[(9)] = inst_29920__$1);

return statearr_29941;
})();
if(inst_29921){
var statearr_29942_29960 = state_29933__$1;
(statearr_29942_29960[(1)] = (8));

} else {
var statearr_29943_29961 = state_29933__$1;
(statearr_29943_29961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (3))){
var inst_29931 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29933__$1,inst_29931);
} else {
if((state_val_29934 === (2))){
var state_29933__$1 = state_29933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29933__$1,(4),ch);
} else {
if((state_val_29934 === (9))){
var inst_29920 = (state_29933[(9)]);
var inst_29913 = inst_29920;
var state_29933__$1 = (function (){var statearr_29944 = state_29933;
(statearr_29944[(7)] = inst_29913);

return statearr_29944;
})();
var statearr_29945_29962 = state_29933__$1;
(statearr_29945_29962[(2)] = null);

(statearr_29945_29962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (5))){
var inst_29913 = (state_29933[(7)]);
var state_29933__$1 = state_29933;
var statearr_29946_29963 = state_29933__$1;
(statearr_29946_29963[(2)] = inst_29913);

(statearr_29946_29963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (10))){
var inst_29927 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
var statearr_29947_29964 = state_29933__$1;
(statearr_29947_29964[(2)] = inst_29927);

(statearr_29947_29964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (8))){
var inst_29920 = (state_29933[(9)]);
var inst_29923 = cljs.core.deref.call(null,inst_29920);
var state_29933__$1 = state_29933;
var statearr_29948_29965 = state_29933__$1;
(statearr_29948_29965[(2)] = inst_29923);

(statearr_29948_29965[(1)] = (10));


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
});})(c__29167__auto__))
;
return ((function (switch__29055__auto__,c__29167__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29056__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29056__auto____0 = (function (){
var statearr_29952 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29952[(0)] = cljs$core$async$reduce_$_state_machine__29056__auto__);

(statearr_29952[(1)] = (1));

return statearr_29952;
});
var cljs$core$async$reduce_$_state_machine__29056__auto____1 = (function (state_29933){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_29933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e29953){if((e29953 instanceof Object)){
var ex__29059__auto__ = e29953;
var statearr_29954_29966 = state_29933;
(statearr_29954_29966[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29967 = state_29933;
state_29933 = G__29967;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29056__auto__ = function(state_29933){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29056__auto____1.call(this,state_29933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29056__auto____0;
cljs$core$async$reduce_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29056__auto____1;
return cljs$core$async$reduce_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__))
})();
var state__29169__auto__ = (function (){var statearr_29955 = f__29168__auto__.call(null);
(statearr_29955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_29955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__))
);

return c__29167__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__,f__$1){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__,f__$1){
return (function (state_29987){
var state_val_29988 = (state_29987[(1)]);
if((state_val_29988 === (1))){
var inst_29982 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29987__$1 = state_29987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29987__$1,(2),inst_29982);
} else {
if((state_val_29988 === (2))){
var inst_29984 = (state_29987[(2)]);
var inst_29985 = f__$1.call(null,inst_29984);
var state_29987__$1 = state_29987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29987__$1,inst_29985);
} else {
return null;
}
}
});})(c__29167__auto__,f__$1))
;
return ((function (switch__29055__auto__,c__29167__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29056__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29056__auto____0 = (function (){
var statearr_29992 = [null,null,null,null,null,null,null];
(statearr_29992[(0)] = cljs$core$async$transduce_$_state_machine__29056__auto__);

(statearr_29992[(1)] = (1));

return statearr_29992;
});
var cljs$core$async$transduce_$_state_machine__29056__auto____1 = (function (state_29987){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_29987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e29993){if((e29993 instanceof Object)){
var ex__29059__auto__ = e29993;
var statearr_29994_29996 = state_29987;
(statearr_29994_29996[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29997 = state_29987;
state_29987 = G__29997;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29056__auto__ = function(state_29987){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29056__auto____1.call(this,state_29987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29056__auto____0;
cljs$core$async$transduce_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29056__auto____1;
return cljs$core$async$transduce_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__,f__$1))
})();
var state__29169__auto__ = (function (){var statearr_29995 = f__29168__auto__.call(null);
(statearr_29995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_29995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__,f__$1))
);

return c__29167__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29998 = [];
var len__27054__auto___30050 = arguments.length;
var i__27055__auto___30051 = (0);
while(true){
if((i__27055__auto___30051 < len__27054__auto___30050)){
args29998.push((arguments[i__27055__auto___30051]));

var G__30052 = (i__27055__auto___30051 + (1));
i__27055__auto___30051 = G__30052;
continue;
} else {
}
break;
}

var G__30000 = args29998.length;
switch (G__30000) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29998.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__){
return (function (state_30025){
var state_val_30026 = (state_30025[(1)]);
if((state_val_30026 === (7))){
var inst_30007 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30027_30054 = state_30025__$1;
(statearr_30027_30054[(2)] = inst_30007);

(statearr_30027_30054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (1))){
var inst_30001 = cljs.core.seq.call(null,coll);
var inst_30002 = inst_30001;
var state_30025__$1 = (function (){var statearr_30028 = state_30025;
(statearr_30028[(7)] = inst_30002);

return statearr_30028;
})();
var statearr_30029_30055 = state_30025__$1;
(statearr_30029_30055[(2)] = null);

(statearr_30029_30055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (4))){
var inst_30002 = (state_30025[(7)]);
var inst_30005 = cljs.core.first.call(null,inst_30002);
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30025__$1,(7),ch,inst_30005);
} else {
if((state_val_30026 === (13))){
var inst_30019 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30030_30056 = state_30025__$1;
(statearr_30030_30056[(2)] = inst_30019);

(statearr_30030_30056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (6))){
var inst_30010 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
if(cljs.core.truth_(inst_30010)){
var statearr_30031_30057 = state_30025__$1;
(statearr_30031_30057[(1)] = (8));

} else {
var statearr_30032_30058 = state_30025__$1;
(statearr_30032_30058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (3))){
var inst_30023 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30025__$1,inst_30023);
} else {
if((state_val_30026 === (12))){
var state_30025__$1 = state_30025;
var statearr_30033_30059 = state_30025__$1;
(statearr_30033_30059[(2)] = null);

(statearr_30033_30059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (2))){
var inst_30002 = (state_30025[(7)]);
var state_30025__$1 = state_30025;
if(cljs.core.truth_(inst_30002)){
var statearr_30034_30060 = state_30025__$1;
(statearr_30034_30060[(1)] = (4));

} else {
var statearr_30035_30061 = state_30025__$1;
(statearr_30035_30061[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (11))){
var inst_30016 = cljs.core.async.close_BANG_.call(null,ch);
var state_30025__$1 = state_30025;
var statearr_30036_30062 = state_30025__$1;
(statearr_30036_30062[(2)] = inst_30016);

(statearr_30036_30062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (9))){
var state_30025__$1 = state_30025;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30037_30063 = state_30025__$1;
(statearr_30037_30063[(1)] = (11));

} else {
var statearr_30038_30064 = state_30025__$1;
(statearr_30038_30064[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (5))){
var inst_30002 = (state_30025[(7)]);
var state_30025__$1 = state_30025;
var statearr_30039_30065 = state_30025__$1;
(statearr_30039_30065[(2)] = inst_30002);

(statearr_30039_30065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (10))){
var inst_30021 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30040_30066 = state_30025__$1;
(statearr_30040_30066[(2)] = inst_30021);

(statearr_30040_30066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (8))){
var inst_30002 = (state_30025[(7)]);
var inst_30012 = cljs.core.next.call(null,inst_30002);
var inst_30002__$1 = inst_30012;
var state_30025__$1 = (function (){var statearr_30041 = state_30025;
(statearr_30041[(7)] = inst_30002__$1);

return statearr_30041;
})();
var statearr_30042_30067 = state_30025__$1;
(statearr_30042_30067[(2)] = null);

(statearr_30042_30067[(1)] = (2));


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
});})(c__29167__auto__))
;
return ((function (switch__29055__auto__,c__29167__auto__){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_30046 = [null,null,null,null,null,null,null,null];
(statearr_30046[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_30046[(1)] = (1));

return statearr_30046;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_30025){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_30025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e30047){if((e30047 instanceof Object)){
var ex__29059__auto__ = e30047;
var statearr_30048_30068 = state_30025;
(statearr_30048_30068[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30069 = state_30025;
state_30025 = G__30069;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_30025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_30025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__))
})();
var state__29169__auto__ = (function (){var statearr_30049 = f__29168__auto__.call(null);
(statearr_30049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_30049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__))
);

return c__29167__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26642__auto__ = (((_ == null))?null:_);
var m__26643__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,_);
} else {
var m__26643__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26643__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m);
} else {
var m__26643__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30295 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30295 = (function (mult,ch,cs,meta30296){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30296 = meta30296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30297,meta30296__$1){
var self__ = this;
var _30297__$1 = this;
return (new cljs.core.async.t_cljs$core$async30295(self__.mult,self__.ch,self__.cs,meta30296__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30297){
var self__ = this;
var _30297__$1 = this;
return self__.meta30296;
});})(cs))
;

cljs.core.async.t_cljs$core$async30295.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30295.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30295.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30295.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30295.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30295.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30296","meta30296",1771748393,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30295.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30295";

cljs.core.async.t_cljs$core$async30295.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30295");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30295 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30295(mult__$1,ch__$1,cs__$1,meta30296){
return (new cljs.core.async.t_cljs$core$async30295(mult__$1,ch__$1,cs__$1,meta30296));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30295(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29167__auto___30520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___30520,cs,m,dchan,dctr,done){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___30520,cs,m,dchan,dctr,done){
return (function (state_30432){
var state_val_30433 = (state_30432[(1)]);
if((state_val_30433 === (7))){
var inst_30428 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30434_30521 = state_30432__$1;
(statearr_30434_30521[(2)] = inst_30428);

(statearr_30434_30521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (20))){
var inst_30331 = (state_30432[(7)]);
var inst_30343 = cljs.core.first.call(null,inst_30331);
var inst_30344 = cljs.core.nth.call(null,inst_30343,(0),null);
var inst_30345 = cljs.core.nth.call(null,inst_30343,(1),null);
var state_30432__$1 = (function (){var statearr_30435 = state_30432;
(statearr_30435[(8)] = inst_30344);

return statearr_30435;
})();
if(cljs.core.truth_(inst_30345)){
var statearr_30436_30522 = state_30432__$1;
(statearr_30436_30522[(1)] = (22));

} else {
var statearr_30437_30523 = state_30432__$1;
(statearr_30437_30523[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (27))){
var inst_30300 = (state_30432[(9)]);
var inst_30380 = (state_30432[(10)]);
var inst_30375 = (state_30432[(11)]);
var inst_30373 = (state_30432[(12)]);
var inst_30380__$1 = cljs.core._nth.call(null,inst_30373,inst_30375);
var inst_30381 = cljs.core.async.put_BANG_.call(null,inst_30380__$1,inst_30300,done);
var state_30432__$1 = (function (){var statearr_30438 = state_30432;
(statearr_30438[(10)] = inst_30380__$1);

return statearr_30438;
})();
if(cljs.core.truth_(inst_30381)){
var statearr_30439_30524 = state_30432__$1;
(statearr_30439_30524[(1)] = (30));

} else {
var statearr_30440_30525 = state_30432__$1;
(statearr_30440_30525[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (1))){
var state_30432__$1 = state_30432;
var statearr_30441_30526 = state_30432__$1;
(statearr_30441_30526[(2)] = null);

(statearr_30441_30526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (24))){
var inst_30331 = (state_30432[(7)]);
var inst_30350 = (state_30432[(2)]);
var inst_30351 = cljs.core.next.call(null,inst_30331);
var inst_30309 = inst_30351;
var inst_30310 = null;
var inst_30311 = (0);
var inst_30312 = (0);
var state_30432__$1 = (function (){var statearr_30442 = state_30432;
(statearr_30442[(13)] = inst_30309);

(statearr_30442[(14)] = inst_30310);

(statearr_30442[(15)] = inst_30350);

(statearr_30442[(16)] = inst_30311);

(statearr_30442[(17)] = inst_30312);

return statearr_30442;
})();
var statearr_30443_30527 = state_30432__$1;
(statearr_30443_30527[(2)] = null);

(statearr_30443_30527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (39))){
var state_30432__$1 = state_30432;
var statearr_30447_30528 = state_30432__$1;
(statearr_30447_30528[(2)] = null);

(statearr_30447_30528[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (4))){
var inst_30300 = (state_30432[(9)]);
var inst_30300__$1 = (state_30432[(2)]);
var inst_30301 = (inst_30300__$1 == null);
var state_30432__$1 = (function (){var statearr_30448 = state_30432;
(statearr_30448[(9)] = inst_30300__$1);

return statearr_30448;
})();
if(cljs.core.truth_(inst_30301)){
var statearr_30449_30529 = state_30432__$1;
(statearr_30449_30529[(1)] = (5));

} else {
var statearr_30450_30530 = state_30432__$1;
(statearr_30450_30530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (15))){
var inst_30309 = (state_30432[(13)]);
var inst_30310 = (state_30432[(14)]);
var inst_30311 = (state_30432[(16)]);
var inst_30312 = (state_30432[(17)]);
var inst_30327 = (state_30432[(2)]);
var inst_30328 = (inst_30312 + (1));
var tmp30444 = inst_30309;
var tmp30445 = inst_30310;
var tmp30446 = inst_30311;
var inst_30309__$1 = tmp30444;
var inst_30310__$1 = tmp30445;
var inst_30311__$1 = tmp30446;
var inst_30312__$1 = inst_30328;
var state_30432__$1 = (function (){var statearr_30451 = state_30432;
(statearr_30451[(13)] = inst_30309__$1);

(statearr_30451[(18)] = inst_30327);

(statearr_30451[(14)] = inst_30310__$1);

(statearr_30451[(16)] = inst_30311__$1);

(statearr_30451[(17)] = inst_30312__$1);

return statearr_30451;
})();
var statearr_30452_30531 = state_30432__$1;
(statearr_30452_30531[(2)] = null);

(statearr_30452_30531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (21))){
var inst_30354 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30456_30532 = state_30432__$1;
(statearr_30456_30532[(2)] = inst_30354);

(statearr_30456_30532[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (31))){
var inst_30380 = (state_30432[(10)]);
var inst_30384 = done.call(null,null);
var inst_30385 = cljs.core.async.untap_STAR_.call(null,m,inst_30380);
var state_30432__$1 = (function (){var statearr_30457 = state_30432;
(statearr_30457[(19)] = inst_30384);

return statearr_30457;
})();
var statearr_30458_30533 = state_30432__$1;
(statearr_30458_30533[(2)] = inst_30385);

(statearr_30458_30533[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (32))){
var inst_30372 = (state_30432[(20)]);
var inst_30374 = (state_30432[(21)]);
var inst_30375 = (state_30432[(11)]);
var inst_30373 = (state_30432[(12)]);
var inst_30387 = (state_30432[(2)]);
var inst_30388 = (inst_30375 + (1));
var tmp30453 = inst_30372;
var tmp30454 = inst_30374;
var tmp30455 = inst_30373;
var inst_30372__$1 = tmp30453;
var inst_30373__$1 = tmp30455;
var inst_30374__$1 = tmp30454;
var inst_30375__$1 = inst_30388;
var state_30432__$1 = (function (){var statearr_30459 = state_30432;
(statearr_30459[(22)] = inst_30387);

(statearr_30459[(20)] = inst_30372__$1);

(statearr_30459[(21)] = inst_30374__$1);

(statearr_30459[(11)] = inst_30375__$1);

(statearr_30459[(12)] = inst_30373__$1);

return statearr_30459;
})();
var statearr_30460_30534 = state_30432__$1;
(statearr_30460_30534[(2)] = null);

(statearr_30460_30534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (40))){
var inst_30400 = (state_30432[(23)]);
var inst_30404 = done.call(null,null);
var inst_30405 = cljs.core.async.untap_STAR_.call(null,m,inst_30400);
var state_30432__$1 = (function (){var statearr_30461 = state_30432;
(statearr_30461[(24)] = inst_30404);

return statearr_30461;
})();
var statearr_30462_30535 = state_30432__$1;
(statearr_30462_30535[(2)] = inst_30405);

(statearr_30462_30535[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (33))){
var inst_30391 = (state_30432[(25)]);
var inst_30393 = cljs.core.chunked_seq_QMARK_.call(null,inst_30391);
var state_30432__$1 = state_30432;
if(inst_30393){
var statearr_30463_30536 = state_30432__$1;
(statearr_30463_30536[(1)] = (36));

} else {
var statearr_30464_30537 = state_30432__$1;
(statearr_30464_30537[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (13))){
var inst_30321 = (state_30432[(26)]);
var inst_30324 = cljs.core.async.close_BANG_.call(null,inst_30321);
var state_30432__$1 = state_30432;
var statearr_30465_30538 = state_30432__$1;
(statearr_30465_30538[(2)] = inst_30324);

(statearr_30465_30538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (22))){
var inst_30344 = (state_30432[(8)]);
var inst_30347 = cljs.core.async.close_BANG_.call(null,inst_30344);
var state_30432__$1 = state_30432;
var statearr_30466_30539 = state_30432__$1;
(statearr_30466_30539[(2)] = inst_30347);

(statearr_30466_30539[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (36))){
var inst_30391 = (state_30432[(25)]);
var inst_30395 = cljs.core.chunk_first.call(null,inst_30391);
var inst_30396 = cljs.core.chunk_rest.call(null,inst_30391);
var inst_30397 = cljs.core.count.call(null,inst_30395);
var inst_30372 = inst_30396;
var inst_30373 = inst_30395;
var inst_30374 = inst_30397;
var inst_30375 = (0);
var state_30432__$1 = (function (){var statearr_30467 = state_30432;
(statearr_30467[(20)] = inst_30372);

(statearr_30467[(21)] = inst_30374);

(statearr_30467[(11)] = inst_30375);

(statearr_30467[(12)] = inst_30373);

return statearr_30467;
})();
var statearr_30468_30540 = state_30432__$1;
(statearr_30468_30540[(2)] = null);

(statearr_30468_30540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (41))){
var inst_30391 = (state_30432[(25)]);
var inst_30407 = (state_30432[(2)]);
var inst_30408 = cljs.core.next.call(null,inst_30391);
var inst_30372 = inst_30408;
var inst_30373 = null;
var inst_30374 = (0);
var inst_30375 = (0);
var state_30432__$1 = (function (){var statearr_30469 = state_30432;
(statearr_30469[(27)] = inst_30407);

(statearr_30469[(20)] = inst_30372);

(statearr_30469[(21)] = inst_30374);

(statearr_30469[(11)] = inst_30375);

(statearr_30469[(12)] = inst_30373);

return statearr_30469;
})();
var statearr_30470_30541 = state_30432__$1;
(statearr_30470_30541[(2)] = null);

(statearr_30470_30541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (43))){
var state_30432__$1 = state_30432;
var statearr_30471_30542 = state_30432__$1;
(statearr_30471_30542[(2)] = null);

(statearr_30471_30542[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (29))){
var inst_30416 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30472_30543 = state_30432__$1;
(statearr_30472_30543[(2)] = inst_30416);

(statearr_30472_30543[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (44))){
var inst_30425 = (state_30432[(2)]);
var state_30432__$1 = (function (){var statearr_30473 = state_30432;
(statearr_30473[(28)] = inst_30425);

return statearr_30473;
})();
var statearr_30474_30544 = state_30432__$1;
(statearr_30474_30544[(2)] = null);

(statearr_30474_30544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (6))){
var inst_30364 = (state_30432[(29)]);
var inst_30363 = cljs.core.deref.call(null,cs);
var inst_30364__$1 = cljs.core.keys.call(null,inst_30363);
var inst_30365 = cljs.core.count.call(null,inst_30364__$1);
var inst_30366 = cljs.core.reset_BANG_.call(null,dctr,inst_30365);
var inst_30371 = cljs.core.seq.call(null,inst_30364__$1);
var inst_30372 = inst_30371;
var inst_30373 = null;
var inst_30374 = (0);
var inst_30375 = (0);
var state_30432__$1 = (function (){var statearr_30475 = state_30432;
(statearr_30475[(20)] = inst_30372);

(statearr_30475[(21)] = inst_30374);

(statearr_30475[(11)] = inst_30375);

(statearr_30475[(29)] = inst_30364__$1);

(statearr_30475[(30)] = inst_30366);

(statearr_30475[(12)] = inst_30373);

return statearr_30475;
})();
var statearr_30476_30545 = state_30432__$1;
(statearr_30476_30545[(2)] = null);

(statearr_30476_30545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (28))){
var inst_30372 = (state_30432[(20)]);
var inst_30391 = (state_30432[(25)]);
var inst_30391__$1 = cljs.core.seq.call(null,inst_30372);
var state_30432__$1 = (function (){var statearr_30477 = state_30432;
(statearr_30477[(25)] = inst_30391__$1);

return statearr_30477;
})();
if(inst_30391__$1){
var statearr_30478_30546 = state_30432__$1;
(statearr_30478_30546[(1)] = (33));

} else {
var statearr_30479_30547 = state_30432__$1;
(statearr_30479_30547[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (25))){
var inst_30374 = (state_30432[(21)]);
var inst_30375 = (state_30432[(11)]);
var inst_30377 = (inst_30375 < inst_30374);
var inst_30378 = inst_30377;
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30378)){
var statearr_30480_30548 = state_30432__$1;
(statearr_30480_30548[(1)] = (27));

} else {
var statearr_30481_30549 = state_30432__$1;
(statearr_30481_30549[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (34))){
var state_30432__$1 = state_30432;
var statearr_30482_30550 = state_30432__$1;
(statearr_30482_30550[(2)] = null);

(statearr_30482_30550[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (17))){
var state_30432__$1 = state_30432;
var statearr_30483_30551 = state_30432__$1;
(statearr_30483_30551[(2)] = null);

(statearr_30483_30551[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (3))){
var inst_30430 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30432__$1,inst_30430);
} else {
if((state_val_30433 === (12))){
var inst_30359 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30484_30552 = state_30432__$1;
(statearr_30484_30552[(2)] = inst_30359);

(statearr_30484_30552[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (2))){
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30432__$1,(4),ch);
} else {
if((state_val_30433 === (23))){
var state_30432__$1 = state_30432;
var statearr_30485_30553 = state_30432__$1;
(statearr_30485_30553[(2)] = null);

(statearr_30485_30553[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (35))){
var inst_30414 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30486_30554 = state_30432__$1;
(statearr_30486_30554[(2)] = inst_30414);

(statearr_30486_30554[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (19))){
var inst_30331 = (state_30432[(7)]);
var inst_30335 = cljs.core.chunk_first.call(null,inst_30331);
var inst_30336 = cljs.core.chunk_rest.call(null,inst_30331);
var inst_30337 = cljs.core.count.call(null,inst_30335);
var inst_30309 = inst_30336;
var inst_30310 = inst_30335;
var inst_30311 = inst_30337;
var inst_30312 = (0);
var state_30432__$1 = (function (){var statearr_30487 = state_30432;
(statearr_30487[(13)] = inst_30309);

(statearr_30487[(14)] = inst_30310);

(statearr_30487[(16)] = inst_30311);

(statearr_30487[(17)] = inst_30312);

return statearr_30487;
})();
var statearr_30488_30555 = state_30432__$1;
(statearr_30488_30555[(2)] = null);

(statearr_30488_30555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (11))){
var inst_30309 = (state_30432[(13)]);
var inst_30331 = (state_30432[(7)]);
var inst_30331__$1 = cljs.core.seq.call(null,inst_30309);
var state_30432__$1 = (function (){var statearr_30489 = state_30432;
(statearr_30489[(7)] = inst_30331__$1);

return statearr_30489;
})();
if(inst_30331__$1){
var statearr_30490_30556 = state_30432__$1;
(statearr_30490_30556[(1)] = (16));

} else {
var statearr_30491_30557 = state_30432__$1;
(statearr_30491_30557[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (9))){
var inst_30361 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30492_30558 = state_30432__$1;
(statearr_30492_30558[(2)] = inst_30361);

(statearr_30492_30558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (5))){
var inst_30307 = cljs.core.deref.call(null,cs);
var inst_30308 = cljs.core.seq.call(null,inst_30307);
var inst_30309 = inst_30308;
var inst_30310 = null;
var inst_30311 = (0);
var inst_30312 = (0);
var state_30432__$1 = (function (){var statearr_30493 = state_30432;
(statearr_30493[(13)] = inst_30309);

(statearr_30493[(14)] = inst_30310);

(statearr_30493[(16)] = inst_30311);

(statearr_30493[(17)] = inst_30312);

return statearr_30493;
})();
var statearr_30494_30559 = state_30432__$1;
(statearr_30494_30559[(2)] = null);

(statearr_30494_30559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (14))){
var state_30432__$1 = state_30432;
var statearr_30495_30560 = state_30432__$1;
(statearr_30495_30560[(2)] = null);

(statearr_30495_30560[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (45))){
var inst_30422 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30496_30561 = state_30432__$1;
(statearr_30496_30561[(2)] = inst_30422);

(statearr_30496_30561[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (26))){
var inst_30364 = (state_30432[(29)]);
var inst_30418 = (state_30432[(2)]);
var inst_30419 = cljs.core.seq.call(null,inst_30364);
var state_30432__$1 = (function (){var statearr_30497 = state_30432;
(statearr_30497[(31)] = inst_30418);

return statearr_30497;
})();
if(inst_30419){
var statearr_30498_30562 = state_30432__$1;
(statearr_30498_30562[(1)] = (42));

} else {
var statearr_30499_30563 = state_30432__$1;
(statearr_30499_30563[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (16))){
var inst_30331 = (state_30432[(7)]);
var inst_30333 = cljs.core.chunked_seq_QMARK_.call(null,inst_30331);
var state_30432__$1 = state_30432;
if(inst_30333){
var statearr_30500_30564 = state_30432__$1;
(statearr_30500_30564[(1)] = (19));

} else {
var statearr_30501_30565 = state_30432__$1;
(statearr_30501_30565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (38))){
var inst_30411 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30502_30566 = state_30432__$1;
(statearr_30502_30566[(2)] = inst_30411);

(statearr_30502_30566[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (30))){
var state_30432__$1 = state_30432;
var statearr_30503_30567 = state_30432__$1;
(statearr_30503_30567[(2)] = null);

(statearr_30503_30567[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (10))){
var inst_30310 = (state_30432[(14)]);
var inst_30312 = (state_30432[(17)]);
var inst_30320 = cljs.core._nth.call(null,inst_30310,inst_30312);
var inst_30321 = cljs.core.nth.call(null,inst_30320,(0),null);
var inst_30322 = cljs.core.nth.call(null,inst_30320,(1),null);
var state_30432__$1 = (function (){var statearr_30504 = state_30432;
(statearr_30504[(26)] = inst_30321);

return statearr_30504;
})();
if(cljs.core.truth_(inst_30322)){
var statearr_30505_30568 = state_30432__$1;
(statearr_30505_30568[(1)] = (13));

} else {
var statearr_30506_30569 = state_30432__$1;
(statearr_30506_30569[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (18))){
var inst_30357 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30507_30570 = state_30432__$1;
(statearr_30507_30570[(2)] = inst_30357);

(statearr_30507_30570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (42))){
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30432__$1,(45),dchan);
} else {
if((state_val_30433 === (37))){
var inst_30300 = (state_30432[(9)]);
var inst_30400 = (state_30432[(23)]);
var inst_30391 = (state_30432[(25)]);
var inst_30400__$1 = cljs.core.first.call(null,inst_30391);
var inst_30401 = cljs.core.async.put_BANG_.call(null,inst_30400__$1,inst_30300,done);
var state_30432__$1 = (function (){var statearr_30508 = state_30432;
(statearr_30508[(23)] = inst_30400__$1);

return statearr_30508;
})();
if(cljs.core.truth_(inst_30401)){
var statearr_30509_30571 = state_30432__$1;
(statearr_30509_30571[(1)] = (39));

} else {
var statearr_30510_30572 = state_30432__$1;
(statearr_30510_30572[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (8))){
var inst_30311 = (state_30432[(16)]);
var inst_30312 = (state_30432[(17)]);
var inst_30314 = (inst_30312 < inst_30311);
var inst_30315 = inst_30314;
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30315)){
var statearr_30511_30573 = state_30432__$1;
(statearr_30511_30573[(1)] = (10));

} else {
var statearr_30512_30574 = state_30432__$1;
(statearr_30512_30574[(1)] = (11));

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
});})(c__29167__auto___30520,cs,m,dchan,dctr,done))
;
return ((function (switch__29055__auto__,c__29167__auto___30520,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29056__auto__ = null;
var cljs$core$async$mult_$_state_machine__29056__auto____0 = (function (){
var statearr_30516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30516[(0)] = cljs$core$async$mult_$_state_machine__29056__auto__);

(statearr_30516[(1)] = (1));

return statearr_30516;
});
var cljs$core$async$mult_$_state_machine__29056__auto____1 = (function (state_30432){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_30432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e30517){if((e30517 instanceof Object)){
var ex__29059__auto__ = e30517;
var statearr_30518_30575 = state_30432;
(statearr_30518_30575[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30576 = state_30432;
state_30432 = G__30576;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29056__auto__ = function(state_30432){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29056__auto____1.call(this,state_30432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29056__auto____0;
cljs$core$async$mult_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29056__auto____1;
return cljs$core$async$mult_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___30520,cs,m,dchan,dctr,done))
})();
var state__29169__auto__ = (function (){var statearr_30519 = f__29168__auto__.call(null);
(statearr_30519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___30520);

return statearr_30519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___30520,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30577 = [];
var len__27054__auto___30580 = arguments.length;
var i__27055__auto___30581 = (0);
while(true){
if((i__27055__auto___30581 < len__27054__auto___30580)){
args30577.push((arguments[i__27055__auto___30581]));

var G__30582 = (i__27055__auto___30581 + (1));
i__27055__auto___30581 = G__30582;
continue;
} else {
}
break;
}

var G__30579 = args30577.length;
switch (G__30579) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30577.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m);
} else {
var m__26643__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,state_map);
} else {
var m__26643__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,mode);
} else {
var m__26643__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___30594 = arguments.length;
var i__27055__auto___30595 = (0);
while(true){
if((i__27055__auto___30595 < len__27054__auto___30594)){
args__27061__auto__.push((arguments[i__27055__auto___30595]));

var G__30596 = (i__27055__auto___30595 + (1));
i__27055__auto___30595 = G__30596;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((3) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27062__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30588){
var map__30589 = p__30588;
var map__30589__$1 = ((((!((map__30589 == null)))?((((map__30589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30589):map__30589);
var opts = map__30589__$1;
var statearr_30591_30597 = state;
(statearr_30591_30597[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30589,map__30589__$1,opts){
return (function (val){
var statearr_30592_30598 = state;
(statearr_30592_30598[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30589,map__30589__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30593_30599 = state;
(statearr_30593_30599[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30584){
var G__30585 = cljs.core.first.call(null,seq30584);
var seq30584__$1 = cljs.core.next.call(null,seq30584);
var G__30586 = cljs.core.first.call(null,seq30584__$1);
var seq30584__$2 = cljs.core.next.call(null,seq30584__$1);
var G__30587 = cljs.core.first.call(null,seq30584__$2);
var seq30584__$3 = cljs.core.next.call(null,seq30584__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30585,G__30586,G__30587,seq30584__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30765 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30765 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30766){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30766 = meta30766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30767,meta30766__$1){
var self__ = this;
var _30767__$1 = this;
return (new cljs.core.async.t_cljs$core$async30765(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30766__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30767){
var self__ = this;
var _30767__$1 = this;
return self__.meta30766;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30765.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30765.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30765.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30765.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30765.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30765.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30765.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30765.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30765.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30766","meta30766",1954035006,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30765.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30765";

cljs.core.async.t_cljs$core$async30765.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30765");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30765 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30765(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30766){
return (new cljs.core.async.t_cljs$core$async30765(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30766));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30765(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29167__auto___30930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___30930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___30930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30867){
var state_val_30868 = (state_30867[(1)]);
if((state_val_30868 === (7))){
var inst_30783 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
var statearr_30869_30931 = state_30867__$1;
(statearr_30869_30931[(2)] = inst_30783);

(statearr_30869_30931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (20))){
var inst_30795 = (state_30867[(7)]);
var state_30867__$1 = state_30867;
var statearr_30870_30932 = state_30867__$1;
(statearr_30870_30932[(2)] = inst_30795);

(statearr_30870_30932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (27))){
var state_30867__$1 = state_30867;
var statearr_30871_30933 = state_30867__$1;
(statearr_30871_30933[(2)] = null);

(statearr_30871_30933[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (1))){
var inst_30771 = (state_30867[(8)]);
var inst_30771__$1 = calc_state.call(null);
var inst_30773 = (inst_30771__$1 == null);
var inst_30774 = cljs.core.not.call(null,inst_30773);
var state_30867__$1 = (function (){var statearr_30872 = state_30867;
(statearr_30872[(8)] = inst_30771__$1);

return statearr_30872;
})();
if(inst_30774){
var statearr_30873_30934 = state_30867__$1;
(statearr_30873_30934[(1)] = (2));

} else {
var statearr_30874_30935 = state_30867__$1;
(statearr_30874_30935[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (24))){
var inst_30841 = (state_30867[(9)]);
var inst_30827 = (state_30867[(10)]);
var inst_30818 = (state_30867[(11)]);
var inst_30841__$1 = inst_30818.call(null,inst_30827);
var state_30867__$1 = (function (){var statearr_30875 = state_30867;
(statearr_30875[(9)] = inst_30841__$1);

return statearr_30875;
})();
if(cljs.core.truth_(inst_30841__$1)){
var statearr_30876_30936 = state_30867__$1;
(statearr_30876_30936[(1)] = (29));

} else {
var statearr_30877_30937 = state_30867__$1;
(statearr_30877_30937[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (4))){
var inst_30786 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
if(cljs.core.truth_(inst_30786)){
var statearr_30878_30938 = state_30867__$1;
(statearr_30878_30938[(1)] = (8));

} else {
var statearr_30879_30939 = state_30867__$1;
(statearr_30879_30939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (15))){
var inst_30812 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
if(cljs.core.truth_(inst_30812)){
var statearr_30880_30940 = state_30867__$1;
(statearr_30880_30940[(1)] = (19));

} else {
var statearr_30881_30941 = state_30867__$1;
(statearr_30881_30941[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (21))){
var inst_30817 = (state_30867[(12)]);
var inst_30817__$1 = (state_30867[(2)]);
var inst_30818 = cljs.core.get.call(null,inst_30817__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30819 = cljs.core.get.call(null,inst_30817__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30820 = cljs.core.get.call(null,inst_30817__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30867__$1 = (function (){var statearr_30882 = state_30867;
(statearr_30882[(13)] = inst_30819);

(statearr_30882[(12)] = inst_30817__$1);

(statearr_30882[(11)] = inst_30818);

return statearr_30882;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30867__$1,(22),inst_30820);
} else {
if((state_val_30868 === (31))){
var inst_30849 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
if(cljs.core.truth_(inst_30849)){
var statearr_30883_30942 = state_30867__$1;
(statearr_30883_30942[(1)] = (32));

} else {
var statearr_30884_30943 = state_30867__$1;
(statearr_30884_30943[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (32))){
var inst_30826 = (state_30867[(14)]);
var state_30867__$1 = state_30867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30867__$1,(35),out,inst_30826);
} else {
if((state_val_30868 === (33))){
var inst_30817 = (state_30867[(12)]);
var inst_30795 = inst_30817;
var state_30867__$1 = (function (){var statearr_30885 = state_30867;
(statearr_30885[(7)] = inst_30795);

return statearr_30885;
})();
var statearr_30886_30944 = state_30867__$1;
(statearr_30886_30944[(2)] = null);

(statearr_30886_30944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (13))){
var inst_30795 = (state_30867[(7)]);
var inst_30802 = inst_30795.cljs$lang$protocol_mask$partition0$;
var inst_30803 = (inst_30802 & (64));
var inst_30804 = inst_30795.cljs$core$ISeq$;
var inst_30805 = (inst_30803) || (inst_30804);
var state_30867__$1 = state_30867;
if(cljs.core.truth_(inst_30805)){
var statearr_30887_30945 = state_30867__$1;
(statearr_30887_30945[(1)] = (16));

} else {
var statearr_30888_30946 = state_30867__$1;
(statearr_30888_30946[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (22))){
var inst_30826 = (state_30867[(14)]);
var inst_30827 = (state_30867[(10)]);
var inst_30825 = (state_30867[(2)]);
var inst_30826__$1 = cljs.core.nth.call(null,inst_30825,(0),null);
var inst_30827__$1 = cljs.core.nth.call(null,inst_30825,(1),null);
var inst_30828 = (inst_30826__$1 == null);
var inst_30829 = cljs.core._EQ_.call(null,inst_30827__$1,change);
var inst_30830 = (inst_30828) || (inst_30829);
var state_30867__$1 = (function (){var statearr_30889 = state_30867;
(statearr_30889[(14)] = inst_30826__$1);

(statearr_30889[(10)] = inst_30827__$1);

return statearr_30889;
})();
if(cljs.core.truth_(inst_30830)){
var statearr_30890_30947 = state_30867__$1;
(statearr_30890_30947[(1)] = (23));

} else {
var statearr_30891_30948 = state_30867__$1;
(statearr_30891_30948[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (36))){
var inst_30817 = (state_30867[(12)]);
var inst_30795 = inst_30817;
var state_30867__$1 = (function (){var statearr_30892 = state_30867;
(statearr_30892[(7)] = inst_30795);

return statearr_30892;
})();
var statearr_30893_30949 = state_30867__$1;
(statearr_30893_30949[(2)] = null);

(statearr_30893_30949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (29))){
var inst_30841 = (state_30867[(9)]);
var state_30867__$1 = state_30867;
var statearr_30894_30950 = state_30867__$1;
(statearr_30894_30950[(2)] = inst_30841);

(statearr_30894_30950[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (6))){
var state_30867__$1 = state_30867;
var statearr_30895_30951 = state_30867__$1;
(statearr_30895_30951[(2)] = false);

(statearr_30895_30951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (28))){
var inst_30837 = (state_30867[(2)]);
var inst_30838 = calc_state.call(null);
var inst_30795 = inst_30838;
var state_30867__$1 = (function (){var statearr_30896 = state_30867;
(statearr_30896[(15)] = inst_30837);

(statearr_30896[(7)] = inst_30795);

return statearr_30896;
})();
var statearr_30897_30952 = state_30867__$1;
(statearr_30897_30952[(2)] = null);

(statearr_30897_30952[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (25))){
var inst_30863 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
var statearr_30898_30953 = state_30867__$1;
(statearr_30898_30953[(2)] = inst_30863);

(statearr_30898_30953[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (34))){
var inst_30861 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
var statearr_30899_30954 = state_30867__$1;
(statearr_30899_30954[(2)] = inst_30861);

(statearr_30899_30954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (17))){
var state_30867__$1 = state_30867;
var statearr_30900_30955 = state_30867__$1;
(statearr_30900_30955[(2)] = false);

(statearr_30900_30955[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (3))){
var state_30867__$1 = state_30867;
var statearr_30901_30956 = state_30867__$1;
(statearr_30901_30956[(2)] = false);

(statearr_30901_30956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (12))){
var inst_30865 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30867__$1,inst_30865);
} else {
if((state_val_30868 === (2))){
var inst_30771 = (state_30867[(8)]);
var inst_30776 = inst_30771.cljs$lang$protocol_mask$partition0$;
var inst_30777 = (inst_30776 & (64));
var inst_30778 = inst_30771.cljs$core$ISeq$;
var inst_30779 = (inst_30777) || (inst_30778);
var state_30867__$1 = state_30867;
if(cljs.core.truth_(inst_30779)){
var statearr_30902_30957 = state_30867__$1;
(statearr_30902_30957[(1)] = (5));

} else {
var statearr_30903_30958 = state_30867__$1;
(statearr_30903_30958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (23))){
var inst_30826 = (state_30867[(14)]);
var inst_30832 = (inst_30826 == null);
var state_30867__$1 = state_30867;
if(cljs.core.truth_(inst_30832)){
var statearr_30904_30959 = state_30867__$1;
(statearr_30904_30959[(1)] = (26));

} else {
var statearr_30905_30960 = state_30867__$1;
(statearr_30905_30960[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (35))){
var inst_30852 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
if(cljs.core.truth_(inst_30852)){
var statearr_30906_30961 = state_30867__$1;
(statearr_30906_30961[(1)] = (36));

} else {
var statearr_30907_30962 = state_30867__$1;
(statearr_30907_30962[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (19))){
var inst_30795 = (state_30867[(7)]);
var inst_30814 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30795);
var state_30867__$1 = state_30867;
var statearr_30908_30963 = state_30867__$1;
(statearr_30908_30963[(2)] = inst_30814);

(statearr_30908_30963[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (11))){
var inst_30795 = (state_30867[(7)]);
var inst_30799 = (inst_30795 == null);
var inst_30800 = cljs.core.not.call(null,inst_30799);
var state_30867__$1 = state_30867;
if(inst_30800){
var statearr_30909_30964 = state_30867__$1;
(statearr_30909_30964[(1)] = (13));

} else {
var statearr_30910_30965 = state_30867__$1;
(statearr_30910_30965[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (9))){
var inst_30771 = (state_30867[(8)]);
var state_30867__$1 = state_30867;
var statearr_30911_30966 = state_30867__$1;
(statearr_30911_30966[(2)] = inst_30771);

(statearr_30911_30966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (5))){
var state_30867__$1 = state_30867;
var statearr_30912_30967 = state_30867__$1;
(statearr_30912_30967[(2)] = true);

(statearr_30912_30967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (14))){
var state_30867__$1 = state_30867;
var statearr_30913_30968 = state_30867__$1;
(statearr_30913_30968[(2)] = false);

(statearr_30913_30968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (26))){
var inst_30827 = (state_30867[(10)]);
var inst_30834 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30827);
var state_30867__$1 = state_30867;
var statearr_30914_30969 = state_30867__$1;
(statearr_30914_30969[(2)] = inst_30834);

(statearr_30914_30969[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (16))){
var state_30867__$1 = state_30867;
var statearr_30915_30970 = state_30867__$1;
(statearr_30915_30970[(2)] = true);

(statearr_30915_30970[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (38))){
var inst_30857 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
var statearr_30916_30971 = state_30867__$1;
(statearr_30916_30971[(2)] = inst_30857);

(statearr_30916_30971[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (30))){
var inst_30827 = (state_30867[(10)]);
var inst_30819 = (state_30867[(13)]);
var inst_30818 = (state_30867[(11)]);
var inst_30844 = cljs.core.empty_QMARK_.call(null,inst_30818);
var inst_30845 = inst_30819.call(null,inst_30827);
var inst_30846 = cljs.core.not.call(null,inst_30845);
var inst_30847 = (inst_30844) && (inst_30846);
var state_30867__$1 = state_30867;
var statearr_30917_30972 = state_30867__$1;
(statearr_30917_30972[(2)] = inst_30847);

(statearr_30917_30972[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (10))){
var inst_30771 = (state_30867[(8)]);
var inst_30791 = (state_30867[(2)]);
var inst_30792 = cljs.core.get.call(null,inst_30791,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30793 = cljs.core.get.call(null,inst_30791,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30794 = cljs.core.get.call(null,inst_30791,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30795 = inst_30771;
var state_30867__$1 = (function (){var statearr_30918 = state_30867;
(statearr_30918[(16)] = inst_30794);

(statearr_30918[(7)] = inst_30795);

(statearr_30918[(17)] = inst_30792);

(statearr_30918[(18)] = inst_30793);

return statearr_30918;
})();
var statearr_30919_30973 = state_30867__$1;
(statearr_30919_30973[(2)] = null);

(statearr_30919_30973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (18))){
var inst_30809 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
var statearr_30920_30974 = state_30867__$1;
(statearr_30920_30974[(2)] = inst_30809);

(statearr_30920_30974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (37))){
var state_30867__$1 = state_30867;
var statearr_30921_30975 = state_30867__$1;
(statearr_30921_30975[(2)] = null);

(statearr_30921_30975[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (8))){
var inst_30771 = (state_30867[(8)]);
var inst_30788 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30771);
var state_30867__$1 = state_30867;
var statearr_30922_30976 = state_30867__$1;
(statearr_30922_30976[(2)] = inst_30788);

(statearr_30922_30976[(1)] = (10));


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
});})(c__29167__auto___30930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29055__auto__,c__29167__auto___30930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29056__auto__ = null;
var cljs$core$async$mix_$_state_machine__29056__auto____0 = (function (){
var statearr_30926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30926[(0)] = cljs$core$async$mix_$_state_machine__29056__auto__);

(statearr_30926[(1)] = (1));

return statearr_30926;
});
var cljs$core$async$mix_$_state_machine__29056__auto____1 = (function (state_30867){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_30867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e30927){if((e30927 instanceof Object)){
var ex__29059__auto__ = e30927;
var statearr_30928_30977 = state_30867;
(statearr_30928_30977[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30978 = state_30867;
state_30867 = G__30978;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29056__auto__ = function(state_30867){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29056__auto____1.call(this,state_30867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29056__auto____0;
cljs$core$async$mix_$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29056__auto____1;
return cljs$core$async$mix_$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___30930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29169__auto__ = (function (){var statearr_30929 = f__29168__auto__.call(null);
(statearr_30929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___30930);

return statearr_30929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___30930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26643__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30979 = [];
var len__27054__auto___30982 = arguments.length;
var i__27055__auto___30983 = (0);
while(true){
if((i__27055__auto___30983 < len__27054__auto___30982)){
args30979.push((arguments[i__27055__auto___30983]));

var G__30984 = (i__27055__auto___30983 + (1));
i__27055__auto___30983 = G__30984;
continue;
} else {
}
break;
}

var G__30981 = args30979.length;
switch (G__30981) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30979.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30987 = [];
var len__27054__auto___31112 = arguments.length;
var i__27055__auto___31113 = (0);
while(true){
if((i__27055__auto___31113 < len__27054__auto___31112)){
args30987.push((arguments[i__27055__auto___31113]));

var G__31114 = (i__27055__auto___31113 + (1));
i__27055__auto___31113 = G__31114;
continue;
} else {
}
break;
}

var G__30989 = args30987.length;
switch (G__30989) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30987.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25979__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25979__auto__,mults){
return (function (p1__30986_SHARP_){
if(cljs.core.truth_(p1__30986_SHARP_.call(null,topic))){
return p1__30986_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30986_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25979__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30990 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30991){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30991 = meta30991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30992,meta30991__$1){
var self__ = this;
var _30992__$1 = this;
return (new cljs.core.async.t_cljs$core$async30990(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30991__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30992){
var self__ = this;
var _30992__$1 = this;
return self__.meta30991;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30990.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30990.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30990.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30990.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30990.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30990.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30990.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30990.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30991","meta30991",548311221,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30990";

cljs.core.async.t_cljs$core$async30990.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30990");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30990 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30990(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30991){
return (new cljs.core.async.t_cljs$core$async30990(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30991));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30990(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29167__auto___31116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___31116,mults,ensure_mult,p){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___31116,mults,ensure_mult,p){
return (function (state_31064){
var state_val_31065 = (state_31064[(1)]);
if((state_val_31065 === (7))){
var inst_31060 = (state_31064[(2)]);
var state_31064__$1 = state_31064;
var statearr_31066_31117 = state_31064__$1;
(statearr_31066_31117[(2)] = inst_31060);

(statearr_31066_31117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (20))){
var state_31064__$1 = state_31064;
var statearr_31067_31118 = state_31064__$1;
(statearr_31067_31118[(2)] = null);

(statearr_31067_31118[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (1))){
var state_31064__$1 = state_31064;
var statearr_31068_31119 = state_31064__$1;
(statearr_31068_31119[(2)] = null);

(statearr_31068_31119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (24))){
var inst_31043 = (state_31064[(7)]);
var inst_31052 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31043);
var state_31064__$1 = state_31064;
var statearr_31069_31120 = state_31064__$1;
(statearr_31069_31120[(2)] = inst_31052);

(statearr_31069_31120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (4))){
var inst_30995 = (state_31064[(8)]);
var inst_30995__$1 = (state_31064[(2)]);
var inst_30996 = (inst_30995__$1 == null);
var state_31064__$1 = (function (){var statearr_31070 = state_31064;
(statearr_31070[(8)] = inst_30995__$1);

return statearr_31070;
})();
if(cljs.core.truth_(inst_30996)){
var statearr_31071_31121 = state_31064__$1;
(statearr_31071_31121[(1)] = (5));

} else {
var statearr_31072_31122 = state_31064__$1;
(statearr_31072_31122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (15))){
var inst_31037 = (state_31064[(2)]);
var state_31064__$1 = state_31064;
var statearr_31073_31123 = state_31064__$1;
(statearr_31073_31123[(2)] = inst_31037);

(statearr_31073_31123[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (21))){
var inst_31057 = (state_31064[(2)]);
var state_31064__$1 = (function (){var statearr_31074 = state_31064;
(statearr_31074[(9)] = inst_31057);

return statearr_31074;
})();
var statearr_31075_31124 = state_31064__$1;
(statearr_31075_31124[(2)] = null);

(statearr_31075_31124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (13))){
var inst_31019 = (state_31064[(10)]);
var inst_31021 = cljs.core.chunked_seq_QMARK_.call(null,inst_31019);
var state_31064__$1 = state_31064;
if(inst_31021){
var statearr_31076_31125 = state_31064__$1;
(statearr_31076_31125[(1)] = (16));

} else {
var statearr_31077_31126 = state_31064__$1;
(statearr_31077_31126[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (22))){
var inst_31049 = (state_31064[(2)]);
var state_31064__$1 = state_31064;
if(cljs.core.truth_(inst_31049)){
var statearr_31078_31127 = state_31064__$1;
(statearr_31078_31127[(1)] = (23));

} else {
var statearr_31079_31128 = state_31064__$1;
(statearr_31079_31128[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (6))){
var inst_31043 = (state_31064[(7)]);
var inst_31045 = (state_31064[(11)]);
var inst_30995 = (state_31064[(8)]);
var inst_31043__$1 = topic_fn.call(null,inst_30995);
var inst_31044 = cljs.core.deref.call(null,mults);
var inst_31045__$1 = cljs.core.get.call(null,inst_31044,inst_31043__$1);
var state_31064__$1 = (function (){var statearr_31080 = state_31064;
(statearr_31080[(7)] = inst_31043__$1);

(statearr_31080[(11)] = inst_31045__$1);

return statearr_31080;
})();
if(cljs.core.truth_(inst_31045__$1)){
var statearr_31081_31129 = state_31064__$1;
(statearr_31081_31129[(1)] = (19));

} else {
var statearr_31082_31130 = state_31064__$1;
(statearr_31082_31130[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (25))){
var inst_31054 = (state_31064[(2)]);
var state_31064__$1 = state_31064;
var statearr_31083_31131 = state_31064__$1;
(statearr_31083_31131[(2)] = inst_31054);

(statearr_31083_31131[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (17))){
var inst_31019 = (state_31064[(10)]);
var inst_31028 = cljs.core.first.call(null,inst_31019);
var inst_31029 = cljs.core.async.muxch_STAR_.call(null,inst_31028);
var inst_31030 = cljs.core.async.close_BANG_.call(null,inst_31029);
var inst_31031 = cljs.core.next.call(null,inst_31019);
var inst_31005 = inst_31031;
var inst_31006 = null;
var inst_31007 = (0);
var inst_31008 = (0);
var state_31064__$1 = (function (){var statearr_31084 = state_31064;
(statearr_31084[(12)] = inst_31030);

(statearr_31084[(13)] = inst_31007);

(statearr_31084[(14)] = inst_31005);

(statearr_31084[(15)] = inst_31006);

(statearr_31084[(16)] = inst_31008);

return statearr_31084;
})();
var statearr_31085_31132 = state_31064__$1;
(statearr_31085_31132[(2)] = null);

(statearr_31085_31132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (3))){
var inst_31062 = (state_31064[(2)]);
var state_31064__$1 = state_31064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31064__$1,inst_31062);
} else {
if((state_val_31065 === (12))){
var inst_31039 = (state_31064[(2)]);
var state_31064__$1 = state_31064;
var statearr_31086_31133 = state_31064__$1;
(statearr_31086_31133[(2)] = inst_31039);

(statearr_31086_31133[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (2))){
var state_31064__$1 = state_31064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31064__$1,(4),ch);
} else {
if((state_val_31065 === (23))){
var state_31064__$1 = state_31064;
var statearr_31087_31134 = state_31064__$1;
(statearr_31087_31134[(2)] = null);

(statearr_31087_31134[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (19))){
var inst_31045 = (state_31064[(11)]);
var inst_30995 = (state_31064[(8)]);
var inst_31047 = cljs.core.async.muxch_STAR_.call(null,inst_31045);
var state_31064__$1 = state_31064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31064__$1,(22),inst_31047,inst_30995);
} else {
if((state_val_31065 === (11))){
var inst_31005 = (state_31064[(14)]);
var inst_31019 = (state_31064[(10)]);
var inst_31019__$1 = cljs.core.seq.call(null,inst_31005);
var state_31064__$1 = (function (){var statearr_31088 = state_31064;
(statearr_31088[(10)] = inst_31019__$1);

return statearr_31088;
})();
if(inst_31019__$1){
var statearr_31089_31135 = state_31064__$1;
(statearr_31089_31135[(1)] = (13));

} else {
var statearr_31090_31136 = state_31064__$1;
(statearr_31090_31136[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (9))){
var inst_31041 = (state_31064[(2)]);
var state_31064__$1 = state_31064;
var statearr_31091_31137 = state_31064__$1;
(statearr_31091_31137[(2)] = inst_31041);

(statearr_31091_31137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (5))){
var inst_31002 = cljs.core.deref.call(null,mults);
var inst_31003 = cljs.core.vals.call(null,inst_31002);
var inst_31004 = cljs.core.seq.call(null,inst_31003);
var inst_31005 = inst_31004;
var inst_31006 = null;
var inst_31007 = (0);
var inst_31008 = (0);
var state_31064__$1 = (function (){var statearr_31092 = state_31064;
(statearr_31092[(13)] = inst_31007);

(statearr_31092[(14)] = inst_31005);

(statearr_31092[(15)] = inst_31006);

(statearr_31092[(16)] = inst_31008);

return statearr_31092;
})();
var statearr_31093_31138 = state_31064__$1;
(statearr_31093_31138[(2)] = null);

(statearr_31093_31138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (14))){
var state_31064__$1 = state_31064;
var statearr_31097_31139 = state_31064__$1;
(statearr_31097_31139[(2)] = null);

(statearr_31097_31139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (16))){
var inst_31019 = (state_31064[(10)]);
var inst_31023 = cljs.core.chunk_first.call(null,inst_31019);
var inst_31024 = cljs.core.chunk_rest.call(null,inst_31019);
var inst_31025 = cljs.core.count.call(null,inst_31023);
var inst_31005 = inst_31024;
var inst_31006 = inst_31023;
var inst_31007 = inst_31025;
var inst_31008 = (0);
var state_31064__$1 = (function (){var statearr_31098 = state_31064;
(statearr_31098[(13)] = inst_31007);

(statearr_31098[(14)] = inst_31005);

(statearr_31098[(15)] = inst_31006);

(statearr_31098[(16)] = inst_31008);

return statearr_31098;
})();
var statearr_31099_31140 = state_31064__$1;
(statearr_31099_31140[(2)] = null);

(statearr_31099_31140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (10))){
var inst_31007 = (state_31064[(13)]);
var inst_31005 = (state_31064[(14)]);
var inst_31006 = (state_31064[(15)]);
var inst_31008 = (state_31064[(16)]);
var inst_31013 = cljs.core._nth.call(null,inst_31006,inst_31008);
var inst_31014 = cljs.core.async.muxch_STAR_.call(null,inst_31013);
var inst_31015 = cljs.core.async.close_BANG_.call(null,inst_31014);
var inst_31016 = (inst_31008 + (1));
var tmp31094 = inst_31007;
var tmp31095 = inst_31005;
var tmp31096 = inst_31006;
var inst_31005__$1 = tmp31095;
var inst_31006__$1 = tmp31096;
var inst_31007__$1 = tmp31094;
var inst_31008__$1 = inst_31016;
var state_31064__$1 = (function (){var statearr_31100 = state_31064;
(statearr_31100[(13)] = inst_31007__$1);

(statearr_31100[(14)] = inst_31005__$1);

(statearr_31100[(17)] = inst_31015);

(statearr_31100[(15)] = inst_31006__$1);

(statearr_31100[(16)] = inst_31008__$1);

return statearr_31100;
})();
var statearr_31101_31141 = state_31064__$1;
(statearr_31101_31141[(2)] = null);

(statearr_31101_31141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (18))){
var inst_31034 = (state_31064[(2)]);
var state_31064__$1 = state_31064;
var statearr_31102_31142 = state_31064__$1;
(statearr_31102_31142[(2)] = inst_31034);

(statearr_31102_31142[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31065 === (8))){
var inst_31007 = (state_31064[(13)]);
var inst_31008 = (state_31064[(16)]);
var inst_31010 = (inst_31008 < inst_31007);
var inst_31011 = inst_31010;
var state_31064__$1 = state_31064;
if(cljs.core.truth_(inst_31011)){
var statearr_31103_31143 = state_31064__$1;
(statearr_31103_31143[(1)] = (10));

} else {
var statearr_31104_31144 = state_31064__$1;
(statearr_31104_31144[(1)] = (11));

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
});})(c__29167__auto___31116,mults,ensure_mult,p))
;
return ((function (switch__29055__auto__,c__29167__auto___31116,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_31108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31108[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_31108[(1)] = (1));

return statearr_31108;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_31064){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_31064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e31109){if((e31109 instanceof Object)){
var ex__29059__auto__ = e31109;
var statearr_31110_31145 = state_31064;
(statearr_31110_31145[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31146 = state_31064;
state_31064 = G__31146;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_31064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_31064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___31116,mults,ensure_mult,p))
})();
var state__29169__auto__ = (function (){var statearr_31111 = f__29168__auto__.call(null);
(statearr_31111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___31116);

return statearr_31111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___31116,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31147 = [];
var len__27054__auto___31150 = arguments.length;
var i__27055__auto___31151 = (0);
while(true){
if((i__27055__auto___31151 < len__27054__auto___31150)){
args31147.push((arguments[i__27055__auto___31151]));

var G__31152 = (i__27055__auto___31151 + (1));
i__27055__auto___31151 = G__31152;
continue;
} else {
}
break;
}

var G__31149 = args31147.length;
switch (G__31149) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31147.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31154 = [];
var len__27054__auto___31157 = arguments.length;
var i__27055__auto___31158 = (0);
while(true){
if((i__27055__auto___31158 < len__27054__auto___31157)){
args31154.push((arguments[i__27055__auto___31158]));

var G__31159 = (i__27055__auto___31158 + (1));
i__27055__auto___31158 = G__31159;
continue;
} else {
}
break;
}

var G__31156 = args31154.length;
switch (G__31156) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31154.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31161 = [];
var len__27054__auto___31232 = arguments.length;
var i__27055__auto___31233 = (0);
while(true){
if((i__27055__auto___31233 < len__27054__auto___31232)){
args31161.push((arguments[i__27055__auto___31233]));

var G__31234 = (i__27055__auto___31233 + (1));
i__27055__auto___31233 = G__31234;
continue;
} else {
}
break;
}

var G__31163 = args31161.length;
switch (G__31163) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31161.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29167__auto___31236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___31236,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___31236,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31202){
var state_val_31203 = (state_31202[(1)]);
if((state_val_31203 === (7))){
var state_31202__$1 = state_31202;
var statearr_31204_31237 = state_31202__$1;
(statearr_31204_31237[(2)] = null);

(statearr_31204_31237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (1))){
var state_31202__$1 = state_31202;
var statearr_31205_31238 = state_31202__$1;
(statearr_31205_31238[(2)] = null);

(statearr_31205_31238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (4))){
var inst_31166 = (state_31202[(7)]);
var inst_31168 = (inst_31166 < cnt);
var state_31202__$1 = state_31202;
if(cljs.core.truth_(inst_31168)){
var statearr_31206_31239 = state_31202__$1;
(statearr_31206_31239[(1)] = (6));

} else {
var statearr_31207_31240 = state_31202__$1;
(statearr_31207_31240[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (15))){
var inst_31198 = (state_31202[(2)]);
var state_31202__$1 = state_31202;
var statearr_31208_31241 = state_31202__$1;
(statearr_31208_31241[(2)] = inst_31198);

(statearr_31208_31241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (13))){
var inst_31191 = cljs.core.async.close_BANG_.call(null,out);
var state_31202__$1 = state_31202;
var statearr_31209_31242 = state_31202__$1;
(statearr_31209_31242[(2)] = inst_31191);

(statearr_31209_31242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (6))){
var state_31202__$1 = state_31202;
var statearr_31210_31243 = state_31202__$1;
(statearr_31210_31243[(2)] = null);

(statearr_31210_31243[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (3))){
var inst_31200 = (state_31202[(2)]);
var state_31202__$1 = state_31202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31202__$1,inst_31200);
} else {
if((state_val_31203 === (12))){
var inst_31188 = (state_31202[(8)]);
var inst_31188__$1 = (state_31202[(2)]);
var inst_31189 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31188__$1);
var state_31202__$1 = (function (){var statearr_31211 = state_31202;
(statearr_31211[(8)] = inst_31188__$1);

return statearr_31211;
})();
if(cljs.core.truth_(inst_31189)){
var statearr_31212_31244 = state_31202__$1;
(statearr_31212_31244[(1)] = (13));

} else {
var statearr_31213_31245 = state_31202__$1;
(statearr_31213_31245[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (2))){
var inst_31165 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31166 = (0);
var state_31202__$1 = (function (){var statearr_31214 = state_31202;
(statearr_31214[(7)] = inst_31166);

(statearr_31214[(9)] = inst_31165);

return statearr_31214;
})();
var statearr_31215_31246 = state_31202__$1;
(statearr_31215_31246[(2)] = null);

(statearr_31215_31246[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (11))){
var inst_31166 = (state_31202[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31202,(10),Object,null,(9));
var inst_31175 = chs__$1.call(null,inst_31166);
var inst_31176 = done.call(null,inst_31166);
var inst_31177 = cljs.core.async.take_BANG_.call(null,inst_31175,inst_31176);
var state_31202__$1 = state_31202;
var statearr_31216_31247 = state_31202__$1;
(statearr_31216_31247[(2)] = inst_31177);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31202__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (9))){
var inst_31166 = (state_31202[(7)]);
var inst_31179 = (state_31202[(2)]);
var inst_31180 = (inst_31166 + (1));
var inst_31166__$1 = inst_31180;
var state_31202__$1 = (function (){var statearr_31217 = state_31202;
(statearr_31217[(7)] = inst_31166__$1);

(statearr_31217[(10)] = inst_31179);

return statearr_31217;
})();
var statearr_31218_31248 = state_31202__$1;
(statearr_31218_31248[(2)] = null);

(statearr_31218_31248[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (5))){
var inst_31186 = (state_31202[(2)]);
var state_31202__$1 = (function (){var statearr_31219 = state_31202;
(statearr_31219[(11)] = inst_31186);

return statearr_31219;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31202__$1,(12),dchan);
} else {
if((state_val_31203 === (14))){
var inst_31188 = (state_31202[(8)]);
var inst_31193 = cljs.core.apply.call(null,f,inst_31188);
var state_31202__$1 = state_31202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31202__$1,(16),out,inst_31193);
} else {
if((state_val_31203 === (16))){
var inst_31195 = (state_31202[(2)]);
var state_31202__$1 = (function (){var statearr_31220 = state_31202;
(statearr_31220[(12)] = inst_31195);

return statearr_31220;
})();
var statearr_31221_31249 = state_31202__$1;
(statearr_31221_31249[(2)] = null);

(statearr_31221_31249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (10))){
var inst_31170 = (state_31202[(2)]);
var inst_31171 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31202__$1 = (function (){var statearr_31222 = state_31202;
(statearr_31222[(13)] = inst_31170);

return statearr_31222;
})();
var statearr_31223_31250 = state_31202__$1;
(statearr_31223_31250[(2)] = inst_31171);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31202__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (8))){
var inst_31184 = (state_31202[(2)]);
var state_31202__$1 = state_31202;
var statearr_31224_31251 = state_31202__$1;
(statearr_31224_31251[(2)] = inst_31184);

(statearr_31224_31251[(1)] = (5));


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
});})(c__29167__auto___31236,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29055__auto__,c__29167__auto___31236,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_31228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31228[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_31228[(1)] = (1));

return statearr_31228;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_31202){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_31202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e31229){if((e31229 instanceof Object)){
var ex__29059__auto__ = e31229;
var statearr_31230_31252 = state_31202;
(statearr_31230_31252[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31253 = state_31202;
state_31202 = G__31253;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_31202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_31202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___31236,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29169__auto__ = (function (){var statearr_31231 = f__29168__auto__.call(null);
(statearr_31231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___31236);

return statearr_31231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___31236,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31255 = [];
var len__27054__auto___31313 = arguments.length;
var i__27055__auto___31314 = (0);
while(true){
if((i__27055__auto___31314 < len__27054__auto___31313)){
args31255.push((arguments[i__27055__auto___31314]));

var G__31315 = (i__27055__auto___31314 + (1));
i__27055__auto___31314 = G__31315;
continue;
} else {
}
break;
}

var G__31257 = args31255.length;
switch (G__31257) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31255.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29167__auto___31317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___31317,out){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___31317,out){
return (function (state_31289){
var state_val_31290 = (state_31289[(1)]);
if((state_val_31290 === (7))){
var inst_31269 = (state_31289[(7)]);
var inst_31268 = (state_31289[(8)]);
var inst_31268__$1 = (state_31289[(2)]);
var inst_31269__$1 = cljs.core.nth.call(null,inst_31268__$1,(0),null);
var inst_31270 = cljs.core.nth.call(null,inst_31268__$1,(1),null);
var inst_31271 = (inst_31269__$1 == null);
var state_31289__$1 = (function (){var statearr_31291 = state_31289;
(statearr_31291[(7)] = inst_31269__$1);

(statearr_31291[(9)] = inst_31270);

(statearr_31291[(8)] = inst_31268__$1);

return statearr_31291;
})();
if(cljs.core.truth_(inst_31271)){
var statearr_31292_31318 = state_31289__$1;
(statearr_31292_31318[(1)] = (8));

} else {
var statearr_31293_31319 = state_31289__$1;
(statearr_31293_31319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31290 === (1))){
var inst_31258 = cljs.core.vec.call(null,chs);
var inst_31259 = inst_31258;
var state_31289__$1 = (function (){var statearr_31294 = state_31289;
(statearr_31294[(10)] = inst_31259);

return statearr_31294;
})();
var statearr_31295_31320 = state_31289__$1;
(statearr_31295_31320[(2)] = null);

(statearr_31295_31320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31290 === (4))){
var inst_31259 = (state_31289[(10)]);
var state_31289__$1 = state_31289;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31289__$1,(7),inst_31259);
} else {
if((state_val_31290 === (6))){
var inst_31285 = (state_31289[(2)]);
var state_31289__$1 = state_31289;
var statearr_31296_31321 = state_31289__$1;
(statearr_31296_31321[(2)] = inst_31285);

(statearr_31296_31321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31290 === (3))){
var inst_31287 = (state_31289[(2)]);
var state_31289__$1 = state_31289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31289__$1,inst_31287);
} else {
if((state_val_31290 === (2))){
var inst_31259 = (state_31289[(10)]);
var inst_31261 = cljs.core.count.call(null,inst_31259);
var inst_31262 = (inst_31261 > (0));
var state_31289__$1 = state_31289;
if(cljs.core.truth_(inst_31262)){
var statearr_31298_31322 = state_31289__$1;
(statearr_31298_31322[(1)] = (4));

} else {
var statearr_31299_31323 = state_31289__$1;
(statearr_31299_31323[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31290 === (11))){
var inst_31259 = (state_31289[(10)]);
var inst_31278 = (state_31289[(2)]);
var tmp31297 = inst_31259;
var inst_31259__$1 = tmp31297;
var state_31289__$1 = (function (){var statearr_31300 = state_31289;
(statearr_31300[(10)] = inst_31259__$1);

(statearr_31300[(11)] = inst_31278);

return statearr_31300;
})();
var statearr_31301_31324 = state_31289__$1;
(statearr_31301_31324[(2)] = null);

(statearr_31301_31324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31290 === (9))){
var inst_31269 = (state_31289[(7)]);
var state_31289__$1 = state_31289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31289__$1,(11),out,inst_31269);
} else {
if((state_val_31290 === (5))){
var inst_31283 = cljs.core.async.close_BANG_.call(null,out);
var state_31289__$1 = state_31289;
var statearr_31302_31325 = state_31289__$1;
(statearr_31302_31325[(2)] = inst_31283);

(statearr_31302_31325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31290 === (10))){
var inst_31281 = (state_31289[(2)]);
var state_31289__$1 = state_31289;
var statearr_31303_31326 = state_31289__$1;
(statearr_31303_31326[(2)] = inst_31281);

(statearr_31303_31326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31290 === (8))){
var inst_31269 = (state_31289[(7)]);
var inst_31259 = (state_31289[(10)]);
var inst_31270 = (state_31289[(9)]);
var inst_31268 = (state_31289[(8)]);
var inst_31273 = (function (){var cs = inst_31259;
var vec__31264 = inst_31268;
var v = inst_31269;
var c = inst_31270;
return ((function (cs,vec__31264,v,c,inst_31269,inst_31259,inst_31270,inst_31268,state_val_31290,c__29167__auto___31317,out){
return (function (p1__31254_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31254_SHARP_);
});
;})(cs,vec__31264,v,c,inst_31269,inst_31259,inst_31270,inst_31268,state_val_31290,c__29167__auto___31317,out))
})();
var inst_31274 = cljs.core.filterv.call(null,inst_31273,inst_31259);
var inst_31259__$1 = inst_31274;
var state_31289__$1 = (function (){var statearr_31304 = state_31289;
(statearr_31304[(10)] = inst_31259__$1);

return statearr_31304;
})();
var statearr_31305_31327 = state_31289__$1;
(statearr_31305_31327[(2)] = null);

(statearr_31305_31327[(1)] = (2));


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
});})(c__29167__auto___31317,out))
;
return ((function (switch__29055__auto__,c__29167__auto___31317,out){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_31309 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31309[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_31309[(1)] = (1));

return statearr_31309;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_31289){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_31289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e31310){if((e31310 instanceof Object)){
var ex__29059__auto__ = e31310;
var statearr_31311_31328 = state_31289;
(statearr_31311_31328[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31329 = state_31289;
state_31289 = G__31329;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_31289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_31289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___31317,out))
})();
var state__29169__auto__ = (function (){var statearr_31312 = f__29168__auto__.call(null);
(statearr_31312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___31317);

return statearr_31312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___31317,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31330 = [];
var len__27054__auto___31379 = arguments.length;
var i__27055__auto___31380 = (0);
while(true){
if((i__27055__auto___31380 < len__27054__auto___31379)){
args31330.push((arguments[i__27055__auto___31380]));

var G__31381 = (i__27055__auto___31380 + (1));
i__27055__auto___31380 = G__31381;
continue;
} else {
}
break;
}

var G__31332 = args31330.length;
switch (G__31332) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31330.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29167__auto___31383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___31383,out){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___31383,out){
return (function (state_31356){
var state_val_31357 = (state_31356[(1)]);
if((state_val_31357 === (7))){
var inst_31338 = (state_31356[(7)]);
var inst_31338__$1 = (state_31356[(2)]);
var inst_31339 = (inst_31338__$1 == null);
var inst_31340 = cljs.core.not.call(null,inst_31339);
var state_31356__$1 = (function (){var statearr_31358 = state_31356;
(statearr_31358[(7)] = inst_31338__$1);

return statearr_31358;
})();
if(inst_31340){
var statearr_31359_31384 = state_31356__$1;
(statearr_31359_31384[(1)] = (8));

} else {
var statearr_31360_31385 = state_31356__$1;
(statearr_31360_31385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31357 === (1))){
var inst_31333 = (0);
var state_31356__$1 = (function (){var statearr_31361 = state_31356;
(statearr_31361[(8)] = inst_31333);

return statearr_31361;
})();
var statearr_31362_31386 = state_31356__$1;
(statearr_31362_31386[(2)] = null);

(statearr_31362_31386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31357 === (4))){
var state_31356__$1 = state_31356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31356__$1,(7),ch);
} else {
if((state_val_31357 === (6))){
var inst_31351 = (state_31356[(2)]);
var state_31356__$1 = state_31356;
var statearr_31363_31387 = state_31356__$1;
(statearr_31363_31387[(2)] = inst_31351);

(statearr_31363_31387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31357 === (3))){
var inst_31353 = (state_31356[(2)]);
var inst_31354 = cljs.core.async.close_BANG_.call(null,out);
var state_31356__$1 = (function (){var statearr_31364 = state_31356;
(statearr_31364[(9)] = inst_31353);

return statearr_31364;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31356__$1,inst_31354);
} else {
if((state_val_31357 === (2))){
var inst_31333 = (state_31356[(8)]);
var inst_31335 = (inst_31333 < n);
var state_31356__$1 = state_31356;
if(cljs.core.truth_(inst_31335)){
var statearr_31365_31388 = state_31356__$1;
(statearr_31365_31388[(1)] = (4));

} else {
var statearr_31366_31389 = state_31356__$1;
(statearr_31366_31389[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31357 === (11))){
var inst_31333 = (state_31356[(8)]);
var inst_31343 = (state_31356[(2)]);
var inst_31344 = (inst_31333 + (1));
var inst_31333__$1 = inst_31344;
var state_31356__$1 = (function (){var statearr_31367 = state_31356;
(statearr_31367[(10)] = inst_31343);

(statearr_31367[(8)] = inst_31333__$1);

return statearr_31367;
})();
var statearr_31368_31390 = state_31356__$1;
(statearr_31368_31390[(2)] = null);

(statearr_31368_31390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31357 === (9))){
var state_31356__$1 = state_31356;
var statearr_31369_31391 = state_31356__$1;
(statearr_31369_31391[(2)] = null);

(statearr_31369_31391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31357 === (5))){
var state_31356__$1 = state_31356;
var statearr_31370_31392 = state_31356__$1;
(statearr_31370_31392[(2)] = null);

(statearr_31370_31392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31357 === (10))){
var inst_31348 = (state_31356[(2)]);
var state_31356__$1 = state_31356;
var statearr_31371_31393 = state_31356__$1;
(statearr_31371_31393[(2)] = inst_31348);

(statearr_31371_31393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31357 === (8))){
var inst_31338 = (state_31356[(7)]);
var state_31356__$1 = state_31356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31356__$1,(11),out,inst_31338);
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
});})(c__29167__auto___31383,out))
;
return ((function (switch__29055__auto__,c__29167__auto___31383,out){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_31375 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31375[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_31375[(1)] = (1));

return statearr_31375;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_31356){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_31356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e31376){if((e31376 instanceof Object)){
var ex__29059__auto__ = e31376;
var statearr_31377_31394 = state_31356;
(statearr_31377_31394[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31395 = state_31356;
state_31356 = G__31395;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_31356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_31356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___31383,out))
})();
var state__29169__auto__ = (function (){var statearr_31378 = f__29168__auto__.call(null);
(statearr_31378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___31383);

return statearr_31378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___31383,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31403 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31403 = (function (map_LT_,f,ch,meta31404){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31404 = meta31404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31405,meta31404__$1){
var self__ = this;
var _31405__$1 = this;
return (new cljs.core.async.t_cljs$core$async31403(self__.map_LT_,self__.f,self__.ch,meta31404__$1));
});

cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31405){
var self__ = this;
var _31405__$1 = this;
return self__.meta31404;
});

cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31406 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31406 = (function (map_LT_,f,ch,meta31404,_,fn1,meta31407){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31404 = meta31404;
this._ = _;
this.fn1 = fn1;
this.meta31407 = meta31407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31408,meta31407__$1){
var self__ = this;
var _31408__$1 = this;
return (new cljs.core.async.t_cljs$core$async31406(self__.map_LT_,self__.f,self__.ch,self__.meta31404,self__._,self__.fn1,meta31407__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31408){
var self__ = this;
var _31408__$1 = this;
return self__.meta31407;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31406.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31406.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31406.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31406.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31396_SHARP_){
return f1.call(null,(((p1__31396_SHARP_ == null))?null:self__.f.call(null,p1__31396_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31406.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31404","meta31404",-1477428575,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31403","cljs.core.async/t_cljs$core$async31403",627789415,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31407","meta31407",-24500720,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31406.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31406";

cljs.core.async.t_cljs$core$async31406.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31406");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31406 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31406(map_LT___$1,f__$1,ch__$1,meta31404__$1,___$2,fn1__$1,meta31407){
return (new cljs.core.async.t_cljs$core$async31406(map_LT___$1,f__$1,ch__$1,meta31404__$1,___$2,fn1__$1,meta31407));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31406(self__.map_LT_,self__.f,self__.ch,self__.meta31404,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25967__auto__ = ret;
if(cljs.core.truth_(and__25967__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25967__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31404","meta31404",-1477428575,null)], null);
});

cljs.core.async.t_cljs$core$async31403.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31403";

cljs.core.async.t_cljs$core$async31403.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31403");
});

cljs.core.async.__GT_t_cljs$core$async31403 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31403(map_LT___$1,f__$1,ch__$1,meta31404){
return (new cljs.core.async.t_cljs$core$async31403(map_LT___$1,f__$1,ch__$1,meta31404));
});

}

return (new cljs.core.async.t_cljs$core$async31403(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31412 = (function (map_GT_,f,ch,meta31413){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31413 = meta31413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31414,meta31413__$1){
var self__ = this;
var _31414__$1 = this;
return (new cljs.core.async.t_cljs$core$async31412(self__.map_GT_,self__.f,self__.ch,meta31413__$1));
});

cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31414){
var self__ = this;
var _31414__$1 = this;
return self__.meta31413;
});

cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31413","meta31413",-576419831,null)], null);
});

cljs.core.async.t_cljs$core$async31412.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31412";

cljs.core.async.t_cljs$core$async31412.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31412");
});

cljs.core.async.__GT_t_cljs$core$async31412 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31412(map_GT___$1,f__$1,ch__$1,meta31413){
return (new cljs.core.async.t_cljs$core$async31412(map_GT___$1,f__$1,ch__$1,meta31413));
});

}

return (new cljs.core.async.t_cljs$core$async31412(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31418 = (function (filter_GT_,p,ch,meta31419){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31419 = meta31419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31420,meta31419__$1){
var self__ = this;
var _31420__$1 = this;
return (new cljs.core.async.t_cljs$core$async31418(self__.filter_GT_,self__.p,self__.ch,meta31419__$1));
});

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31420){
var self__ = this;
var _31420__$1 = this;
return self__.meta31419;
});

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31419","meta31419",-183405585,null)], null);
});

cljs.core.async.t_cljs$core$async31418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31418";

cljs.core.async.t_cljs$core$async31418.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31418");
});

cljs.core.async.__GT_t_cljs$core$async31418 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31418(filter_GT___$1,p__$1,ch__$1,meta31419){
return (new cljs.core.async.t_cljs$core$async31418(filter_GT___$1,p__$1,ch__$1,meta31419));
});

}

return (new cljs.core.async.t_cljs$core$async31418(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31421 = [];
var len__27054__auto___31465 = arguments.length;
var i__27055__auto___31466 = (0);
while(true){
if((i__27055__auto___31466 < len__27054__auto___31465)){
args31421.push((arguments[i__27055__auto___31466]));

var G__31467 = (i__27055__auto___31466 + (1));
i__27055__auto___31466 = G__31467;
continue;
} else {
}
break;
}

var G__31423 = args31421.length;
switch (G__31423) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31421.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29167__auto___31469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___31469,out){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___31469,out){
return (function (state_31444){
var state_val_31445 = (state_31444[(1)]);
if((state_val_31445 === (7))){
var inst_31440 = (state_31444[(2)]);
var state_31444__$1 = state_31444;
var statearr_31446_31470 = state_31444__$1;
(statearr_31446_31470[(2)] = inst_31440);

(statearr_31446_31470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (1))){
var state_31444__$1 = state_31444;
var statearr_31447_31471 = state_31444__$1;
(statearr_31447_31471[(2)] = null);

(statearr_31447_31471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (4))){
var inst_31426 = (state_31444[(7)]);
var inst_31426__$1 = (state_31444[(2)]);
var inst_31427 = (inst_31426__$1 == null);
var state_31444__$1 = (function (){var statearr_31448 = state_31444;
(statearr_31448[(7)] = inst_31426__$1);

return statearr_31448;
})();
if(cljs.core.truth_(inst_31427)){
var statearr_31449_31472 = state_31444__$1;
(statearr_31449_31472[(1)] = (5));

} else {
var statearr_31450_31473 = state_31444__$1;
(statearr_31450_31473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (6))){
var inst_31426 = (state_31444[(7)]);
var inst_31431 = p.call(null,inst_31426);
var state_31444__$1 = state_31444;
if(cljs.core.truth_(inst_31431)){
var statearr_31451_31474 = state_31444__$1;
(statearr_31451_31474[(1)] = (8));

} else {
var statearr_31452_31475 = state_31444__$1;
(statearr_31452_31475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (3))){
var inst_31442 = (state_31444[(2)]);
var state_31444__$1 = state_31444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31444__$1,inst_31442);
} else {
if((state_val_31445 === (2))){
var state_31444__$1 = state_31444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31444__$1,(4),ch);
} else {
if((state_val_31445 === (11))){
var inst_31434 = (state_31444[(2)]);
var state_31444__$1 = state_31444;
var statearr_31453_31476 = state_31444__$1;
(statearr_31453_31476[(2)] = inst_31434);

(statearr_31453_31476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (9))){
var state_31444__$1 = state_31444;
var statearr_31454_31477 = state_31444__$1;
(statearr_31454_31477[(2)] = null);

(statearr_31454_31477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (5))){
var inst_31429 = cljs.core.async.close_BANG_.call(null,out);
var state_31444__$1 = state_31444;
var statearr_31455_31478 = state_31444__$1;
(statearr_31455_31478[(2)] = inst_31429);

(statearr_31455_31478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (10))){
var inst_31437 = (state_31444[(2)]);
var state_31444__$1 = (function (){var statearr_31456 = state_31444;
(statearr_31456[(8)] = inst_31437);

return statearr_31456;
})();
var statearr_31457_31479 = state_31444__$1;
(statearr_31457_31479[(2)] = null);

(statearr_31457_31479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (8))){
var inst_31426 = (state_31444[(7)]);
var state_31444__$1 = state_31444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31444__$1,(11),out,inst_31426);
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
});})(c__29167__auto___31469,out))
;
return ((function (switch__29055__auto__,c__29167__auto___31469,out){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_31461 = [null,null,null,null,null,null,null,null,null];
(statearr_31461[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_31461[(1)] = (1));

return statearr_31461;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_31444){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_31444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e31462){if((e31462 instanceof Object)){
var ex__29059__auto__ = e31462;
var statearr_31463_31480 = state_31444;
(statearr_31463_31480[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31481 = state_31444;
state_31444 = G__31481;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_31444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_31444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___31469,out))
})();
var state__29169__auto__ = (function (){var statearr_31464 = f__29168__auto__.call(null);
(statearr_31464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___31469);

return statearr_31464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___31469,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31482 = [];
var len__27054__auto___31485 = arguments.length;
var i__27055__auto___31486 = (0);
while(true){
if((i__27055__auto___31486 < len__27054__auto___31485)){
args31482.push((arguments[i__27055__auto___31486]));

var G__31487 = (i__27055__auto___31486 + (1));
i__27055__auto___31486 = G__31487;
continue;
} else {
}
break;
}

var G__31484 = args31482.length;
switch (G__31484) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31482.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto__){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto__){
return (function (state_31654){
var state_val_31655 = (state_31654[(1)]);
if((state_val_31655 === (7))){
var inst_31650 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
var statearr_31656_31697 = state_31654__$1;
(statearr_31656_31697[(2)] = inst_31650);

(statearr_31656_31697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (20))){
var inst_31620 = (state_31654[(7)]);
var inst_31631 = (state_31654[(2)]);
var inst_31632 = cljs.core.next.call(null,inst_31620);
var inst_31606 = inst_31632;
var inst_31607 = null;
var inst_31608 = (0);
var inst_31609 = (0);
var state_31654__$1 = (function (){var statearr_31657 = state_31654;
(statearr_31657[(8)] = inst_31631);

(statearr_31657[(9)] = inst_31606);

(statearr_31657[(10)] = inst_31607);

(statearr_31657[(11)] = inst_31609);

(statearr_31657[(12)] = inst_31608);

return statearr_31657;
})();
var statearr_31658_31698 = state_31654__$1;
(statearr_31658_31698[(2)] = null);

(statearr_31658_31698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (1))){
var state_31654__$1 = state_31654;
var statearr_31659_31699 = state_31654__$1;
(statearr_31659_31699[(2)] = null);

(statearr_31659_31699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (4))){
var inst_31595 = (state_31654[(13)]);
var inst_31595__$1 = (state_31654[(2)]);
var inst_31596 = (inst_31595__$1 == null);
var state_31654__$1 = (function (){var statearr_31660 = state_31654;
(statearr_31660[(13)] = inst_31595__$1);

return statearr_31660;
})();
if(cljs.core.truth_(inst_31596)){
var statearr_31661_31700 = state_31654__$1;
(statearr_31661_31700[(1)] = (5));

} else {
var statearr_31662_31701 = state_31654__$1;
(statearr_31662_31701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (15))){
var state_31654__$1 = state_31654;
var statearr_31666_31702 = state_31654__$1;
(statearr_31666_31702[(2)] = null);

(statearr_31666_31702[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (21))){
var state_31654__$1 = state_31654;
var statearr_31667_31703 = state_31654__$1;
(statearr_31667_31703[(2)] = null);

(statearr_31667_31703[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (13))){
var inst_31606 = (state_31654[(9)]);
var inst_31607 = (state_31654[(10)]);
var inst_31609 = (state_31654[(11)]);
var inst_31608 = (state_31654[(12)]);
var inst_31616 = (state_31654[(2)]);
var inst_31617 = (inst_31609 + (1));
var tmp31663 = inst_31606;
var tmp31664 = inst_31607;
var tmp31665 = inst_31608;
var inst_31606__$1 = tmp31663;
var inst_31607__$1 = tmp31664;
var inst_31608__$1 = tmp31665;
var inst_31609__$1 = inst_31617;
var state_31654__$1 = (function (){var statearr_31668 = state_31654;
(statearr_31668[(9)] = inst_31606__$1);

(statearr_31668[(10)] = inst_31607__$1);

(statearr_31668[(14)] = inst_31616);

(statearr_31668[(11)] = inst_31609__$1);

(statearr_31668[(12)] = inst_31608__$1);

return statearr_31668;
})();
var statearr_31669_31704 = state_31654__$1;
(statearr_31669_31704[(2)] = null);

(statearr_31669_31704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (22))){
var state_31654__$1 = state_31654;
var statearr_31670_31705 = state_31654__$1;
(statearr_31670_31705[(2)] = null);

(statearr_31670_31705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (6))){
var inst_31595 = (state_31654[(13)]);
var inst_31604 = f.call(null,inst_31595);
var inst_31605 = cljs.core.seq.call(null,inst_31604);
var inst_31606 = inst_31605;
var inst_31607 = null;
var inst_31608 = (0);
var inst_31609 = (0);
var state_31654__$1 = (function (){var statearr_31671 = state_31654;
(statearr_31671[(9)] = inst_31606);

(statearr_31671[(10)] = inst_31607);

(statearr_31671[(11)] = inst_31609);

(statearr_31671[(12)] = inst_31608);

return statearr_31671;
})();
var statearr_31672_31706 = state_31654__$1;
(statearr_31672_31706[(2)] = null);

(statearr_31672_31706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (17))){
var inst_31620 = (state_31654[(7)]);
var inst_31624 = cljs.core.chunk_first.call(null,inst_31620);
var inst_31625 = cljs.core.chunk_rest.call(null,inst_31620);
var inst_31626 = cljs.core.count.call(null,inst_31624);
var inst_31606 = inst_31625;
var inst_31607 = inst_31624;
var inst_31608 = inst_31626;
var inst_31609 = (0);
var state_31654__$1 = (function (){var statearr_31673 = state_31654;
(statearr_31673[(9)] = inst_31606);

(statearr_31673[(10)] = inst_31607);

(statearr_31673[(11)] = inst_31609);

(statearr_31673[(12)] = inst_31608);

return statearr_31673;
})();
var statearr_31674_31707 = state_31654__$1;
(statearr_31674_31707[(2)] = null);

(statearr_31674_31707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (3))){
var inst_31652 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31654__$1,inst_31652);
} else {
if((state_val_31655 === (12))){
var inst_31640 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
var statearr_31675_31708 = state_31654__$1;
(statearr_31675_31708[(2)] = inst_31640);

(statearr_31675_31708[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (2))){
var state_31654__$1 = state_31654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31654__$1,(4),in$);
} else {
if((state_val_31655 === (23))){
var inst_31648 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
var statearr_31676_31709 = state_31654__$1;
(statearr_31676_31709[(2)] = inst_31648);

(statearr_31676_31709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (19))){
var inst_31635 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
var statearr_31677_31710 = state_31654__$1;
(statearr_31677_31710[(2)] = inst_31635);

(statearr_31677_31710[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (11))){
var inst_31606 = (state_31654[(9)]);
var inst_31620 = (state_31654[(7)]);
var inst_31620__$1 = cljs.core.seq.call(null,inst_31606);
var state_31654__$1 = (function (){var statearr_31678 = state_31654;
(statearr_31678[(7)] = inst_31620__$1);

return statearr_31678;
})();
if(inst_31620__$1){
var statearr_31679_31711 = state_31654__$1;
(statearr_31679_31711[(1)] = (14));

} else {
var statearr_31680_31712 = state_31654__$1;
(statearr_31680_31712[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (9))){
var inst_31642 = (state_31654[(2)]);
var inst_31643 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31654__$1 = (function (){var statearr_31681 = state_31654;
(statearr_31681[(15)] = inst_31642);

return statearr_31681;
})();
if(cljs.core.truth_(inst_31643)){
var statearr_31682_31713 = state_31654__$1;
(statearr_31682_31713[(1)] = (21));

} else {
var statearr_31683_31714 = state_31654__$1;
(statearr_31683_31714[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (5))){
var inst_31598 = cljs.core.async.close_BANG_.call(null,out);
var state_31654__$1 = state_31654;
var statearr_31684_31715 = state_31654__$1;
(statearr_31684_31715[(2)] = inst_31598);

(statearr_31684_31715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (14))){
var inst_31620 = (state_31654[(7)]);
var inst_31622 = cljs.core.chunked_seq_QMARK_.call(null,inst_31620);
var state_31654__$1 = state_31654;
if(inst_31622){
var statearr_31685_31716 = state_31654__$1;
(statearr_31685_31716[(1)] = (17));

} else {
var statearr_31686_31717 = state_31654__$1;
(statearr_31686_31717[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (16))){
var inst_31638 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
var statearr_31687_31718 = state_31654__$1;
(statearr_31687_31718[(2)] = inst_31638);

(statearr_31687_31718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (10))){
var inst_31607 = (state_31654[(10)]);
var inst_31609 = (state_31654[(11)]);
var inst_31614 = cljs.core._nth.call(null,inst_31607,inst_31609);
var state_31654__$1 = state_31654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31654__$1,(13),out,inst_31614);
} else {
if((state_val_31655 === (18))){
var inst_31620 = (state_31654[(7)]);
var inst_31629 = cljs.core.first.call(null,inst_31620);
var state_31654__$1 = state_31654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31654__$1,(20),out,inst_31629);
} else {
if((state_val_31655 === (8))){
var inst_31609 = (state_31654[(11)]);
var inst_31608 = (state_31654[(12)]);
var inst_31611 = (inst_31609 < inst_31608);
var inst_31612 = inst_31611;
var state_31654__$1 = state_31654;
if(cljs.core.truth_(inst_31612)){
var statearr_31688_31719 = state_31654__$1;
(statearr_31688_31719[(1)] = (10));

} else {
var statearr_31689_31720 = state_31654__$1;
(statearr_31689_31720[(1)] = (11));

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
});})(c__29167__auto__))
;
return ((function (switch__29055__auto__,c__29167__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29056__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29056__auto____0 = (function (){
var statearr_31693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31693[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29056__auto__);

(statearr_31693[(1)] = (1));

return statearr_31693;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29056__auto____1 = (function (state_31654){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_31654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e31694){if((e31694 instanceof Object)){
var ex__29059__auto__ = e31694;
var statearr_31695_31721 = state_31654;
(statearr_31695_31721[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31722 = state_31654;
state_31654 = G__31722;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29056__auto__ = function(state_31654){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29056__auto____1.call(this,state_31654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29056__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29056__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto__))
})();
var state__29169__auto__ = (function (){var statearr_31696 = f__29168__auto__.call(null);
(statearr_31696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto__);

return statearr_31696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto__))
);

return c__29167__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31723 = [];
var len__27054__auto___31726 = arguments.length;
var i__27055__auto___31727 = (0);
while(true){
if((i__27055__auto___31727 < len__27054__auto___31726)){
args31723.push((arguments[i__27055__auto___31727]));

var G__31728 = (i__27055__auto___31727 + (1));
i__27055__auto___31727 = G__31728;
continue;
} else {
}
break;
}

var G__31725 = args31723.length;
switch (G__31725) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31723.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31730 = [];
var len__27054__auto___31733 = arguments.length;
var i__27055__auto___31734 = (0);
while(true){
if((i__27055__auto___31734 < len__27054__auto___31733)){
args31730.push((arguments[i__27055__auto___31734]));

var G__31735 = (i__27055__auto___31734 + (1));
i__27055__auto___31734 = G__31735;
continue;
} else {
}
break;
}

var G__31732 = args31730.length;
switch (G__31732) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31730.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31737 = [];
var len__27054__auto___31788 = arguments.length;
var i__27055__auto___31789 = (0);
while(true){
if((i__27055__auto___31789 < len__27054__auto___31788)){
args31737.push((arguments[i__27055__auto___31789]));

var G__31790 = (i__27055__auto___31789 + (1));
i__27055__auto___31789 = G__31790;
continue;
} else {
}
break;
}

var G__31739 = args31737.length;
switch (G__31739) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31737.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29167__auto___31792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___31792,out){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___31792,out){
return (function (state_31763){
var state_val_31764 = (state_31763[(1)]);
if((state_val_31764 === (7))){
var inst_31758 = (state_31763[(2)]);
var state_31763__$1 = state_31763;
var statearr_31765_31793 = state_31763__$1;
(statearr_31765_31793[(2)] = inst_31758);

(statearr_31765_31793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31764 === (1))){
var inst_31740 = null;
var state_31763__$1 = (function (){var statearr_31766 = state_31763;
(statearr_31766[(7)] = inst_31740);

return statearr_31766;
})();
var statearr_31767_31794 = state_31763__$1;
(statearr_31767_31794[(2)] = null);

(statearr_31767_31794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31764 === (4))){
var inst_31743 = (state_31763[(8)]);
var inst_31743__$1 = (state_31763[(2)]);
var inst_31744 = (inst_31743__$1 == null);
var inst_31745 = cljs.core.not.call(null,inst_31744);
var state_31763__$1 = (function (){var statearr_31768 = state_31763;
(statearr_31768[(8)] = inst_31743__$1);

return statearr_31768;
})();
if(inst_31745){
var statearr_31769_31795 = state_31763__$1;
(statearr_31769_31795[(1)] = (5));

} else {
var statearr_31770_31796 = state_31763__$1;
(statearr_31770_31796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31764 === (6))){
var state_31763__$1 = state_31763;
var statearr_31771_31797 = state_31763__$1;
(statearr_31771_31797[(2)] = null);

(statearr_31771_31797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31764 === (3))){
var inst_31760 = (state_31763[(2)]);
var inst_31761 = cljs.core.async.close_BANG_.call(null,out);
var state_31763__$1 = (function (){var statearr_31772 = state_31763;
(statearr_31772[(9)] = inst_31760);

return statearr_31772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31763__$1,inst_31761);
} else {
if((state_val_31764 === (2))){
var state_31763__$1 = state_31763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31763__$1,(4),ch);
} else {
if((state_val_31764 === (11))){
var inst_31743 = (state_31763[(8)]);
var inst_31752 = (state_31763[(2)]);
var inst_31740 = inst_31743;
var state_31763__$1 = (function (){var statearr_31773 = state_31763;
(statearr_31773[(10)] = inst_31752);

(statearr_31773[(7)] = inst_31740);

return statearr_31773;
})();
var statearr_31774_31798 = state_31763__$1;
(statearr_31774_31798[(2)] = null);

(statearr_31774_31798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31764 === (9))){
var inst_31743 = (state_31763[(8)]);
var state_31763__$1 = state_31763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31763__$1,(11),out,inst_31743);
} else {
if((state_val_31764 === (5))){
var inst_31743 = (state_31763[(8)]);
var inst_31740 = (state_31763[(7)]);
var inst_31747 = cljs.core._EQ_.call(null,inst_31743,inst_31740);
var state_31763__$1 = state_31763;
if(inst_31747){
var statearr_31776_31799 = state_31763__$1;
(statearr_31776_31799[(1)] = (8));

} else {
var statearr_31777_31800 = state_31763__$1;
(statearr_31777_31800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31764 === (10))){
var inst_31755 = (state_31763[(2)]);
var state_31763__$1 = state_31763;
var statearr_31778_31801 = state_31763__$1;
(statearr_31778_31801[(2)] = inst_31755);

(statearr_31778_31801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31764 === (8))){
var inst_31740 = (state_31763[(7)]);
var tmp31775 = inst_31740;
var inst_31740__$1 = tmp31775;
var state_31763__$1 = (function (){var statearr_31779 = state_31763;
(statearr_31779[(7)] = inst_31740__$1);

return statearr_31779;
})();
var statearr_31780_31802 = state_31763__$1;
(statearr_31780_31802[(2)] = null);

(statearr_31780_31802[(1)] = (2));


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
});})(c__29167__auto___31792,out))
;
return ((function (switch__29055__auto__,c__29167__auto___31792,out){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_31784 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31784[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_31784[(1)] = (1));

return statearr_31784;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_31763){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_31763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e31785){if((e31785 instanceof Object)){
var ex__29059__auto__ = e31785;
var statearr_31786_31803 = state_31763;
(statearr_31786_31803[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31804 = state_31763;
state_31763 = G__31804;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_31763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_31763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___31792,out))
})();
var state__29169__auto__ = (function (){var statearr_31787 = f__29168__auto__.call(null);
(statearr_31787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___31792);

return statearr_31787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___31792,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31805 = [];
var len__27054__auto___31875 = arguments.length;
var i__27055__auto___31876 = (0);
while(true){
if((i__27055__auto___31876 < len__27054__auto___31875)){
args31805.push((arguments[i__27055__auto___31876]));

var G__31877 = (i__27055__auto___31876 + (1));
i__27055__auto___31876 = G__31877;
continue;
} else {
}
break;
}

var G__31807 = args31805.length;
switch (G__31807) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31805.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29167__auto___31879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___31879,out){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___31879,out){
return (function (state_31845){
var state_val_31846 = (state_31845[(1)]);
if((state_val_31846 === (7))){
var inst_31841 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
var statearr_31847_31880 = state_31845__$1;
(statearr_31847_31880[(2)] = inst_31841);

(statearr_31847_31880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (1))){
var inst_31808 = (new Array(n));
var inst_31809 = inst_31808;
var inst_31810 = (0);
var state_31845__$1 = (function (){var statearr_31848 = state_31845;
(statearr_31848[(7)] = inst_31810);

(statearr_31848[(8)] = inst_31809);

return statearr_31848;
})();
var statearr_31849_31881 = state_31845__$1;
(statearr_31849_31881[(2)] = null);

(statearr_31849_31881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (4))){
var inst_31813 = (state_31845[(9)]);
var inst_31813__$1 = (state_31845[(2)]);
var inst_31814 = (inst_31813__$1 == null);
var inst_31815 = cljs.core.not.call(null,inst_31814);
var state_31845__$1 = (function (){var statearr_31850 = state_31845;
(statearr_31850[(9)] = inst_31813__$1);

return statearr_31850;
})();
if(inst_31815){
var statearr_31851_31882 = state_31845__$1;
(statearr_31851_31882[(1)] = (5));

} else {
var statearr_31852_31883 = state_31845__$1;
(statearr_31852_31883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (15))){
var inst_31835 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
var statearr_31853_31884 = state_31845__$1;
(statearr_31853_31884[(2)] = inst_31835);

(statearr_31853_31884[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (13))){
var state_31845__$1 = state_31845;
var statearr_31854_31885 = state_31845__$1;
(statearr_31854_31885[(2)] = null);

(statearr_31854_31885[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (6))){
var inst_31810 = (state_31845[(7)]);
var inst_31831 = (inst_31810 > (0));
var state_31845__$1 = state_31845;
if(cljs.core.truth_(inst_31831)){
var statearr_31855_31886 = state_31845__$1;
(statearr_31855_31886[(1)] = (12));

} else {
var statearr_31856_31887 = state_31845__$1;
(statearr_31856_31887[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (3))){
var inst_31843 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31845__$1,inst_31843);
} else {
if((state_val_31846 === (12))){
var inst_31809 = (state_31845[(8)]);
var inst_31833 = cljs.core.vec.call(null,inst_31809);
var state_31845__$1 = state_31845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31845__$1,(15),out,inst_31833);
} else {
if((state_val_31846 === (2))){
var state_31845__$1 = state_31845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31845__$1,(4),ch);
} else {
if((state_val_31846 === (11))){
var inst_31825 = (state_31845[(2)]);
var inst_31826 = (new Array(n));
var inst_31809 = inst_31826;
var inst_31810 = (0);
var state_31845__$1 = (function (){var statearr_31857 = state_31845;
(statearr_31857[(10)] = inst_31825);

(statearr_31857[(7)] = inst_31810);

(statearr_31857[(8)] = inst_31809);

return statearr_31857;
})();
var statearr_31858_31888 = state_31845__$1;
(statearr_31858_31888[(2)] = null);

(statearr_31858_31888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (9))){
var inst_31809 = (state_31845[(8)]);
var inst_31823 = cljs.core.vec.call(null,inst_31809);
var state_31845__$1 = state_31845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31845__$1,(11),out,inst_31823);
} else {
if((state_val_31846 === (5))){
var inst_31813 = (state_31845[(9)]);
var inst_31810 = (state_31845[(7)]);
var inst_31809 = (state_31845[(8)]);
var inst_31818 = (state_31845[(11)]);
var inst_31817 = (inst_31809[inst_31810] = inst_31813);
var inst_31818__$1 = (inst_31810 + (1));
var inst_31819 = (inst_31818__$1 < n);
var state_31845__$1 = (function (){var statearr_31859 = state_31845;
(statearr_31859[(11)] = inst_31818__$1);

(statearr_31859[(12)] = inst_31817);

return statearr_31859;
})();
if(cljs.core.truth_(inst_31819)){
var statearr_31860_31889 = state_31845__$1;
(statearr_31860_31889[(1)] = (8));

} else {
var statearr_31861_31890 = state_31845__$1;
(statearr_31861_31890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (14))){
var inst_31838 = (state_31845[(2)]);
var inst_31839 = cljs.core.async.close_BANG_.call(null,out);
var state_31845__$1 = (function (){var statearr_31863 = state_31845;
(statearr_31863[(13)] = inst_31838);

return statearr_31863;
})();
var statearr_31864_31891 = state_31845__$1;
(statearr_31864_31891[(2)] = inst_31839);

(statearr_31864_31891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (10))){
var inst_31829 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
var statearr_31865_31892 = state_31845__$1;
(statearr_31865_31892[(2)] = inst_31829);

(statearr_31865_31892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (8))){
var inst_31809 = (state_31845[(8)]);
var inst_31818 = (state_31845[(11)]);
var tmp31862 = inst_31809;
var inst_31809__$1 = tmp31862;
var inst_31810 = inst_31818;
var state_31845__$1 = (function (){var statearr_31866 = state_31845;
(statearr_31866[(7)] = inst_31810);

(statearr_31866[(8)] = inst_31809__$1);

return statearr_31866;
})();
var statearr_31867_31893 = state_31845__$1;
(statearr_31867_31893[(2)] = null);

(statearr_31867_31893[(1)] = (2));


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
});})(c__29167__auto___31879,out))
;
return ((function (switch__29055__auto__,c__29167__auto___31879,out){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_31871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31871[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_31871[(1)] = (1));

return statearr_31871;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_31845){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_31845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e31872){if((e31872 instanceof Object)){
var ex__29059__auto__ = e31872;
var statearr_31873_31894 = state_31845;
(statearr_31873_31894[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31895 = state_31845;
state_31845 = G__31895;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_31845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_31845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___31879,out))
})();
var state__29169__auto__ = (function (){var statearr_31874 = f__29168__auto__.call(null);
(statearr_31874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___31879);

return statearr_31874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___31879,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31896 = [];
var len__27054__auto___31970 = arguments.length;
var i__27055__auto___31971 = (0);
while(true){
if((i__27055__auto___31971 < len__27054__auto___31970)){
args31896.push((arguments[i__27055__auto___31971]));

var G__31972 = (i__27055__auto___31971 + (1));
i__27055__auto___31971 = G__31972;
continue;
} else {
}
break;
}

var G__31898 = args31896.length;
switch (G__31898) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31896.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29167__auto___31974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29167__auto___31974,out){
return (function (){
var f__29168__auto__ = (function (){var switch__29055__auto__ = ((function (c__29167__auto___31974,out){
return (function (state_31940){
var state_val_31941 = (state_31940[(1)]);
if((state_val_31941 === (7))){
var inst_31936 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31942_31975 = state_31940__$1;
(statearr_31942_31975[(2)] = inst_31936);

(statearr_31942_31975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (1))){
var inst_31899 = [];
var inst_31900 = inst_31899;
var inst_31901 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31940__$1 = (function (){var statearr_31943 = state_31940;
(statearr_31943[(7)] = inst_31900);

(statearr_31943[(8)] = inst_31901);

return statearr_31943;
})();
var statearr_31944_31976 = state_31940__$1;
(statearr_31944_31976[(2)] = null);

(statearr_31944_31976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (4))){
var inst_31904 = (state_31940[(9)]);
var inst_31904__$1 = (state_31940[(2)]);
var inst_31905 = (inst_31904__$1 == null);
var inst_31906 = cljs.core.not.call(null,inst_31905);
var state_31940__$1 = (function (){var statearr_31945 = state_31940;
(statearr_31945[(9)] = inst_31904__$1);

return statearr_31945;
})();
if(inst_31906){
var statearr_31946_31977 = state_31940__$1;
(statearr_31946_31977[(1)] = (5));

} else {
var statearr_31947_31978 = state_31940__$1;
(statearr_31947_31978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (15))){
var inst_31930 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31948_31979 = state_31940__$1;
(statearr_31948_31979[(2)] = inst_31930);

(statearr_31948_31979[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (13))){
var state_31940__$1 = state_31940;
var statearr_31949_31980 = state_31940__$1;
(statearr_31949_31980[(2)] = null);

(statearr_31949_31980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (6))){
var inst_31900 = (state_31940[(7)]);
var inst_31925 = inst_31900.length;
var inst_31926 = (inst_31925 > (0));
var state_31940__$1 = state_31940;
if(cljs.core.truth_(inst_31926)){
var statearr_31950_31981 = state_31940__$1;
(statearr_31950_31981[(1)] = (12));

} else {
var statearr_31951_31982 = state_31940__$1;
(statearr_31951_31982[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (3))){
var inst_31938 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31940__$1,inst_31938);
} else {
if((state_val_31941 === (12))){
var inst_31900 = (state_31940[(7)]);
var inst_31928 = cljs.core.vec.call(null,inst_31900);
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31940__$1,(15),out,inst_31928);
} else {
if((state_val_31941 === (2))){
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31940__$1,(4),ch);
} else {
if((state_val_31941 === (11))){
var inst_31908 = (state_31940[(10)]);
var inst_31904 = (state_31940[(9)]);
var inst_31918 = (state_31940[(2)]);
var inst_31919 = [];
var inst_31920 = inst_31919.push(inst_31904);
var inst_31900 = inst_31919;
var inst_31901 = inst_31908;
var state_31940__$1 = (function (){var statearr_31952 = state_31940;
(statearr_31952[(7)] = inst_31900);

(statearr_31952[(11)] = inst_31920);

(statearr_31952[(8)] = inst_31901);

(statearr_31952[(12)] = inst_31918);

return statearr_31952;
})();
var statearr_31953_31983 = state_31940__$1;
(statearr_31953_31983[(2)] = null);

(statearr_31953_31983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (9))){
var inst_31900 = (state_31940[(7)]);
var inst_31916 = cljs.core.vec.call(null,inst_31900);
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31940__$1,(11),out,inst_31916);
} else {
if((state_val_31941 === (5))){
var inst_31908 = (state_31940[(10)]);
var inst_31901 = (state_31940[(8)]);
var inst_31904 = (state_31940[(9)]);
var inst_31908__$1 = f.call(null,inst_31904);
var inst_31909 = cljs.core._EQ_.call(null,inst_31908__$1,inst_31901);
var inst_31910 = cljs.core.keyword_identical_QMARK_.call(null,inst_31901,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31911 = (inst_31909) || (inst_31910);
var state_31940__$1 = (function (){var statearr_31954 = state_31940;
(statearr_31954[(10)] = inst_31908__$1);

return statearr_31954;
})();
if(cljs.core.truth_(inst_31911)){
var statearr_31955_31984 = state_31940__$1;
(statearr_31955_31984[(1)] = (8));

} else {
var statearr_31956_31985 = state_31940__$1;
(statearr_31956_31985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (14))){
var inst_31933 = (state_31940[(2)]);
var inst_31934 = cljs.core.async.close_BANG_.call(null,out);
var state_31940__$1 = (function (){var statearr_31958 = state_31940;
(statearr_31958[(13)] = inst_31933);

return statearr_31958;
})();
var statearr_31959_31986 = state_31940__$1;
(statearr_31959_31986[(2)] = inst_31934);

(statearr_31959_31986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (10))){
var inst_31923 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31960_31987 = state_31940__$1;
(statearr_31960_31987[(2)] = inst_31923);

(statearr_31960_31987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (8))){
var inst_31900 = (state_31940[(7)]);
var inst_31908 = (state_31940[(10)]);
var inst_31904 = (state_31940[(9)]);
var inst_31913 = inst_31900.push(inst_31904);
var tmp31957 = inst_31900;
var inst_31900__$1 = tmp31957;
var inst_31901 = inst_31908;
var state_31940__$1 = (function (){var statearr_31961 = state_31940;
(statearr_31961[(7)] = inst_31900__$1);

(statearr_31961[(8)] = inst_31901);

(statearr_31961[(14)] = inst_31913);

return statearr_31961;
})();
var statearr_31962_31988 = state_31940__$1;
(statearr_31962_31988[(2)] = null);

(statearr_31962_31988[(1)] = (2));


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
});})(c__29167__auto___31974,out))
;
return ((function (switch__29055__auto__,c__29167__auto___31974,out){
return (function() {
var cljs$core$async$state_machine__29056__auto__ = null;
var cljs$core$async$state_machine__29056__auto____0 = (function (){
var statearr_31966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31966[(0)] = cljs$core$async$state_machine__29056__auto__);

(statearr_31966[(1)] = (1));

return statearr_31966;
});
var cljs$core$async$state_machine__29056__auto____1 = (function (state_31940){
while(true){
var ret_value__29057__auto__ = (function (){try{while(true){
var result__29058__auto__ = switch__29055__auto__.call(null,state_31940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29058__auto__;
}
break;
}
}catch (e31967){if((e31967 instanceof Object)){
var ex__29059__auto__ = e31967;
var statearr_31968_31989 = state_31940;
(statearr_31968_31989[(5)] = ex__29059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31990 = state_31940;
state_31940 = G__31990;
continue;
} else {
return ret_value__29057__auto__;
}
break;
}
});
cljs$core$async$state_machine__29056__auto__ = function(state_31940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29056__auto____1.call(this,state_31940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29056__auto____0;
cljs$core$async$state_machine__29056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29056__auto____1;
return cljs$core$async$state_machine__29056__auto__;
})()
;})(switch__29055__auto__,c__29167__auto___31974,out))
})();
var state__29169__auto__ = (function (){var statearr_31969 = f__29168__auto__.call(null);
(statearr_31969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29167__auto___31974);

return statearr_31969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29169__auto__);
});})(c__29167__auto___31974,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1496854382542